import "./build.mjs";
import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { existsSync, readFileSync, readdirSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const gameDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const root = path.resolve(gameDir, "..");
const sourceDir = path.join(gameDir, "src");
const publicDir = path.join(root, "public", "games");
const distDir = path.join(gameDir, "dist");
const sha256 = data => createHash("sha256").update(data).digest("hex");
const runtimeRef = html => {
  const match = html.match(/<script defer src="(assets\/[^"]+\.js)"><\/script>/);
  assert.ok(match, "每个入口页都应引用独立运行时代码");
  return match[1];
};

const publishedPages = Object.fromEntries(
  ["index.html", "lighthouse.html", "audit-sea.html", "echo-theater.html"].map(name => [name, readFileSync(path.join(publicDir, name), "utf8")]),
);
const publishedRuntimes = Object.fromEntries(
  Object.entries(publishedPages).map(([name, html]) => [name, runtimeRef(html)]),
);
assert.deepEqual(
  readFileSync(path.join(sourceDir, "map.js")),
  readFileSync(path.join(publicDir, publishedRuntimes["index.html"])),
  "地图源码应与当前线上 v23 运行时一致",
);
assert.deepEqual(
  readFileSync(path.join(sourceDir, "lighthouse.js")),
  readFileSync(path.join(publicDir, publishedRuntimes["lighthouse.html"])),
  "第一关源码应与当前线上 v23 运行时一致",
);
assert.deepEqual(
  readFileSync(path.join(distDir, "assets", "sea.js")),
  readFileSync(path.join(publicDir, publishedRuntimes["audit-sea.html"])),
  "第二关源码重新打包后应与当前线上 v23 运行时一致",
);
assert.deepEqual(
  readFileSync(path.join(distDir, "assets", "ocean.js")),
  readFileSync(path.join(publicDir, publishedRuntimes["echo-theater.html"])),
  "第三关源码重新打包后应与当前线上 v23 运行时一致",
);

new Function(readFileSync(path.join(sourceDir, "map.js"), "utf8"));
new Function(readFileSync(path.join(sourceDir, "lighthouse.js"), "utf8"));

const manifest = JSON.parse(readFileSync(path.join(distDir, "release.json"), "utf8"));
assert.equal(manifest.developmentBuild, true);
assert.match(manifest.version, /^v23-source-preview$/);
for (const [name, metadata] of Object.entries({ ...manifest.files, ...manifest.assets })) {
  const file = path.join(distDir, name);
  assert.ok(existsSync(file), `构建产物缺少 ${name}`);
  const data = readFileSync(file);
  assert.equal(sha256(data), metadata.publishedSHA256, `${name} 哈希不一致`);
}
for (const name of ["index.html", "lighthouse.html", "audit-sea.html", "echo-theater.html"]) {
  const html = readFileSync(path.join(distDir, name), "utf8");
  const runtime = runtimeRef(html);
  assert.ok(existsSync(path.join(distDir, runtime)), `${name} 引用的运行时不存在`);
  assert.doesNotMatch(html, /file:\/\/|\/Users\//, `${name} 不得包含本机路径`);
}
for (const name of readdirSync(sourceDir, { recursive: true }).filter(file => /\.m?js$/.test(file))) {
  const text = readFileSync(path.join(sourceDir, name), "utf8");
  assert.doesNotMatch(text, /file:\/\/|\/Users\//, `${name} 不得包含本机路径`);
}
assert.match(readFileSync(path.join(distDir, "audit-sea.html"), "utf8"), /three\.js 0\.180\.0/);
console.log("Game source checked: readable sources rebuild the published v23 runtimes exactly.");
