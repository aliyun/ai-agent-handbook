import assert from "node:assert/strict";
import { existsSync, readFileSync, statSync } from "node:fs";
import path from "node:path";
import { load } from "cheerio";
import { pages, root } from "../.vitepress/book.mjs";
import { legacyHeadingIds } from "../.vitepress/markdown.mjs";
import { levels } from "../challenges/levels.mjs";

const checkedPages = [...pages, { href: "/challenges/" }, ...levels
  .filter(level => level.status === "available")
  .map(level => ({ href: `/challenges/${level.id}/` }))];
const base = process.env.SITE_BASE || "/ai-agent-handbook/";
const output = path.join(root, ".vitepress/dist");
const origin = "https://book.test";
const errors = [];
const cache = new Map();
function fileFor(pathname) {
  if (!pathname.startsWith(base)) return null;
  const relative = decodeURIComponent(pathname.slice(base.length));
  let file = path.join(output, relative);
  if (!file.startsWith(output + path.sep) && file !== output) return null;
  if (existsSync(file) && statSync(file).isDirectory())
    file = path.join(file, "index.html");
  return file;
}
function document(file) {
  if (!cache.has(file)) cache.set(file, load(readFileSync(file, "utf8")));
  return cache.get(file);
}
for (const page of checkedPages) {
  const url = new URL(base + page.href.slice(1), origin);
  const file = fileFor(url.pathname);
  assert.ok(file && existsSync(file), `Missing built page: ${page.href}`);
  const $ = document(file);
  assert.ok($("h1").length, `Missing page title: ${page.href}`);
  if (pages.includes(page))
    assert.equal($("h1").length, 1, `Every book page must have one H1: ${page.href}`);
  for (const [currentId, oldId] of Object.entries(legacyHeadingIds[page.href] || {})) {
    const current = $("h1[id], h2[id], h3[id], h4[id], h5[id], h6[id]")
      .toArray().filter(e => $(e).attr("id") === currentId);
    const legacy = $("[id]").toArray().filter(e => $(e).attr("id") === oldId);
    assert.equal(current.length, 1, `Missing current heading: ${page.href}#${currentId}`);
    assert.equal(legacy.length, 1, `Missing or duplicated legacy anchor: ${page.href}#${oldId}`);
    assert.equal(legacy[0].parent, current[0], `Legacy anchor must target its heading: ${page.href}#${oldId}`);
  }
  for (const element of $(
    "a[href], img[src], script[src], link[href]",
  ).toArray()) {
    const raw = $(element).attr("href") || $(element).attr("src");
    if (!raw || /^(mailto:|tel:|data:|javascript:)/.test(raw)) continue;
    const target = new URL(raw, url);
    if (target.origin !== origin) continue;
    const linkedFile = fileFor(target.pathname);
    if (!linkedFile || !existsSync(linkedFile)) {
      errors.push(`${page.href}: missing ${raw}`);
      continue;
    }
    if (target.hash && linkedFile.endsWith(".html")) {
      const id = decodeURIComponent(target.hash.slice(1));
      // VitePress adds this accessible anchor in the browser layout.
      if (
        id !== "VPContent" &&
        !document(linkedFile)("[id]")
          .toArray()
          .some((e) => document(linkedFile)(e).attr("id") === id)
      )
        errors.push(`${page.href}: missing anchor ${raw}`);
    }
  }
}
for (const level of levels) {
  const dir = path.join(output, "challenges", level.id);
  if (level.status === "planned") {
    assert.ok(!existsSync(dir), `筹备中的关卡不应生成可访问页面：${level.id}`);
  } else {
    const $ = document(path.join(dir, "index.html"));
    assert.equal($("body").attr("data-level"), level.id);
    assert.equal($("body").attr("data-version"), level.version);
    for (const file of ["app.js", "worker.js", "sim.js", "sval.min.js", "sval.LICENSE.txt"]) {
      assert.ok(existsSync(path.join(dir, file)), `缺少关卡运行资源：${level.id}/${file}`);
    }
    for (const file of ["reference.js", "tests"]) {
      assert.ok(!existsSync(path.join(dir, file)), `本地参考代码与测试不应复制到站点：${level.id}/${file}`);
    }
  }
}
assert.ok(!existsSync(path.join(output, ".local")), "本地数据不能发布到静态站点");
if (errors.length) {
  console.error([...new Set(errors)].join("\n"));
  process.exit(1);
}
console.log(
  `Built site checked: all ${checkedPages.length} pages, local links, fragment targets and assets resolve under ${base}.`,
);
