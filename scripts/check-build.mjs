import assert from "node:assert/strict";
import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import { createHash } from "node:crypto";
import path from "node:path";
import { load } from "cheerio";
import { pages, root } from "../.vitepress/book.mjs";
import { legacyHeadingIds } from "../.vitepress/markdown.mjs";
import { levels } from "../challenges/levels.mjs";

const checkedPages = [...pages, { href: "/challenges/" },
  ...["/games/", "/games/lighthouse.html", "/games/audit-sea.html", "/games/echo-theater.html"].map(href => ({ href })), ...levels
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
const gameDir = path.join(output, "games");
assert.deepEqual(readdirSync(gameDir).sort(),
  ["assets", "audit-sea.html", "echo-theater.html", "index.html", "lighthouse.html", "release.json", "three.LICENSE.txt"].sort(),
  "游戏发布四份轻量入口、静态素材目录、发布清单和第三方许可证");
const gameRelease = JSON.parse(readFileSync(path.join(gameDir, "release.json"), "utf8"));
assert.equal(gameRelease.version, "v23");
assert.deepEqual(gameRelease.playableChapters, [1, 2, 3], "前三关开放");
assert.deepEqual(gameRelease.developmentChapters, [4, 5], "后两关开发中");
for (const [name, metadata] of Object.entries(gameRelease.files)) {
  const bytes = readFileSync(path.join(gameDir, name));
  assert.equal(createHash("sha256").update(bytes).digest("hex"), metadata.publishedSHA256,
    `发布副本内容不一致：${name}`);
  assert.ok(bytes.toString().split(/\r?\n/).every(line => Buffer.byteLength(line) < 2097152),
    `内嵌素材代码行必须能被强制安全扫描器完整读取：${name}`);
  assert.ok(!/file:\/\/|\/Users\/|v16-preview\.html/.test(bytes.toString()),
    `不能发布本机路径或旧小样导航：${name}`);
}
const gameAssetNames = Object.keys(gameRelease.assets);
assert.ok(!gameAssetNames.some(name => /36d57f0d4019159b831dd47f|432cffcaade9bce7b8393fa9/.test(name)),
  "第二关不能发布已删除的两张章鱼图片");
assert.deepEqual(readdirSync(path.join(gameDir, "assets")).sort(),
  gameAssetNames.map(name => path.basename(name)).sort(), "发布清单必须覆盖全部静态素材，且不能留下多余文件");
for (const [name, metadata] of Object.entries(gameRelease.assets)) {
  const bytes = readFileSync(path.join(gameDir, name));
  assert.equal(createHash("sha256").update(bytes).digest("hex"), metadata.publishedSHA256,
    `发布素材内容不一致：${name}`);
}
assert.equal(gameRelease.assets[gameRelease.music.staticAsset].publishedSHA256, gameRelease.music.sha256,
  "两关必须继续使用原版原创音乐字节");
for (const page of ["index.html", "audit-sea.html", "lighthouse.html", "echo-theater.html"]) {
  const html = readFileSync(path.join(gameDir, page), "utf8");
  assert.ok(Buffer.byteLength(html) < 65000, `游戏入口 HTML 必须保持轻量：${page}`);
  assert.ok(!/data:(image|audio)\//.test(html), `游戏图片和音频必须独立加载：${page}`);
}
assert.ok(Object.entries(gameRelease.assets).some(([name, metadata]) => {
  if (metadata.kind !== "runtime") return false;
  const runtime = readFileSync(path.join(gameDir, name), "utf8");
  return runtime.includes("SPDX-License-Identifier: MIT") && runtime.includes('revision:"180"');
}), "Three.js 0.180.0 运行时及其 MIT 标识必须保留");
const gameRuntime = Object.entries(gameRelease.assets)
  .filter(([, metadata]) => metadata.kind === "runtime")
  .map(([name]) => readFileSync(path.join(gameDir, name), "utf8")).join("\n");
assert.ok(!/"(backdrop|kelpBackdrop|fish|turtle)":\s*"/.test(gameRuntime),
  "第二关不能恢复已停用的背景、小鱼和海龟位图");
assert.ok(gameRuntime.includes("maxPixelRatio") && gameRuntime.includes("maxFrameSteps"),
  "第二关运行时必须保留移动端渲染负载和固定步上限诊断");
assert.ok(gameRuntime.includes("const CRITICAL_ASSETS=['hero','reef','floor','slab','pod']") &&
  gameRuntime.includes("Promise.allSettled(DEFERRED_ASSETS"),
  "第一关必须只等待五项首屏素材，其余图片在后台完成");
assert.ok(gameRuntime.includes("setTimeout(()=>{status.hidden=true;document.documentElement.classList.remove('map-loading')"),
  "地图入口不能依赖图片完成或前台 requestAnimationFrame 才能交互");
assert.ok(gameRelease.changes.some(line => line.startsWith("v21:") &&
  line.includes("second chapter WebGL initializes only when selected")),
  "发布清单必须保留 v21 第二关按需初始化记录");
assert.ok(gameRelease.changes.some(line => line.startsWith("v22:") &&
  line.includes("before 开始探索") &&
  line.includes("fixed light-slot pool")),
  "v22 发布清单必须记录开始前预热和固定光源槽位");
assert.ok(gameRuntime.includes("light-slot-") && gameRuntime.includes("compileAsync") &&
  gameRuntime.includes("divePct") && gameRuntime.includes("dataset.full"),
  "第二关运行时必须在开始前预热着色器并使用固定光源槽位");
const mapPage = readFileSync(path.join(gameDir, "index.html"), "utf8");
assert.ok(mapPage.includes('id="githubRepo" href="https://github.com/aliyun/ai-agent-handbook" target="_blank" rel="noopener"') &&
  mapPage.includes('id="mobileGithubRepo" href="https://github.com/aliyun/ai-agent-handbook" target="_blank" rel="noopener"') &&
  !mapPage.includes("返回手册"),
  "地图右上角和手机提示栏必须链接到 GitHub 仓库并在新标签页打开");
const seaPage = readFileSync(path.join(gameDir, "audit-sea.html"), "utf8");
assert.ok(gameRelease.changes.at(-1).startsWith("v23:") && gameRelease.changes.at(-1).includes("third chapter"),
  "v23 发布清单必须记录第三关上线");
assert.ok(seaPage.includes('id="thirdLayer"') && gameRuntime.includes("echo-theater.html?host=1") &&
  gameRuntime.includes("loopie-third"), "第三关必须由共享宿主作为独立图层加载，以保留地图和前两关进度");
const oceanPage = readFileSync(path.join(gameDir, "echo-theater.html"), "utf8");
assert.ok(oceanPage.includes('location.replace("audit-sea.html?level=2")') && oceanPage.includes("window.__OCEAN_ASSETS="),
  "第三关直接访问应进入共享宿主，素材以独立文件加载");
const oceanAssets = JSON.parse(oceanPage.match(/window\.__OCEAN_ASSETS=(\{[^<]+\});/)[1]);
assert.equal(Object.keys(oceanAssets).length, 16, "第三关需要背景、贝壳、轮船、Loopie 和 12 种生物共 16 张位图");
assert.equal(oceanAssets.loopie, "assets/4757b05faeef6963ef422b48.webp", "第三关必须复用未改动的官方 Loopie 图片");
for (const asset of Object.values(oceanAssets)) assert.ok(gameRelease.assets[asset]?.kind === "image", `第三关素材未登记：${asset}`);
assert.ok(!/plonky|multiplayer|双人/i.test(oceanPage + gameRuntime), "第三关只做单人模式");
assert.ok(seaPage.includes('id="dive"') && seaPage.includes('role="progressbar"') && seaPage.includes('id="divePct"'),
  "第二关入口必须显示带百分比的装载进度条");
assert.ok(!gameRuntime.includes("pilotIdle") && !gameRuntime.includes("pilotHi5"),
  "第二关运行时不能保留已删除的章鱼图片引用");
assert.ok(!readFileSync(path.join(gameDir, "lighthouse.html"), "utf8").includes('data-action="run"'),
  "第一关移动端不能显示奔跑按钮，桌面键盘奔跑仍由运行时保留");
assert.ok(!existsSync(path.join(output, ".local")), "本地数据不能发布到静态站点");
if (errors.length) {
  console.error([...new Set(errors)].join("\n"));
  process.exit(1);
}
console.log(
  `Built site checked: all ${checkedPages.length} pages, local links, fragment targets and assets resolve under ${base}.`,
);
