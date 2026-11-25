import { build } from "esbuild";
import { compileNative } from './native.mjs';
import {
  cpSync,
  mkdirSync,
  readFileSync,
  readdirSync,
  rmSync,
  unlinkSync,
  writeFileSync,
} from "node:fs";
import { createHash } from "node:crypto";
import path from "node:path";
import { fileURLToPath } from "node:url";

const gameDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const root = path.resolve(gameDir, "..");
const sourceDir = path.join(gameDir, "src");
const publicDir = path.join(root, "public", "games");
const distDir = path.join(gameDir, "dist");
const distAssets = path.join(distDir, "assets");

const sha256 = data => createHash("sha256").update(data).digest("hex");
const runtimeRef = html => {
  const match = html.match(/<script defer src="(assets\/[^"]+\.js)"><\/script>/);
  if (!match) throw new Error("找不到游戏运行时代码引用");
  return match[1];
};

rmSync(distDir, { recursive: true, force: true });
mkdirSync(gameDir, { recursive: true });
cpSync(publicDir, distDir, { recursive: true });
mkdirSync(distAssets, { recursive: true });

const pages = {
  "index.html": readFileSync(path.join(distDir, "index.html"), "utf8"),
  "lighthouse.html": readFileSync(path.join(distDir, "lighthouse.html"), "utf8"),
  "audit-sea.html": readFileSync(path.join(distDir, "audit-sea.html"), "utf8"),
  "echo-theater.html": readFileSync(path.join(distDir, "echo-theater.html"), "utf8"),
  "abyssal-sea.html": readFileSync(path.join(distDir, "abyssal-sea.html"), "utf8"),
};
const oldRuntimes = new Set(Object.values(pages).map(runtimeRef));

cpSync(path.join(sourceDir, "map.js"), path.join(distAssets, "map.js"));
cpSync(path.join(sourceDir, "lighthouse.js"), path.join(distAssets, "lighthouse.js"));
const seaRuntimePath = path.join(distAssets, "sea.js");
await build({
  entryPoints: [path.join(sourceDir, "sea", "host.js")],
  bundle: true,
  minify: true,
  format: "iife",
  target: "chrome110",
  outfile: seaRuntimePath,
  logLevel: "silent",
});
const seaRuntime = readFileSync(seaRuntimePath, "utf8")
  .replaceAll("loopie-world-map-audit-v16-preview.html", "index.html")
  .replaceAll("lighthouse-platformer-audit-v16-preview.html", "lighthouse.html");
writeFileSync(seaRuntimePath, seaRuntime);
await build({
  entryPoints: [path.join(sourceDir, "ocean", "game.js")],
  bundle: true,
  minify: true,
  format: "iife",
  target: "chrome110",
  outfile: path.join(distAssets, "ocean.js"),
  logLevel: "silent",
});

const native=await compileNative();
writeFileSync(path.join(distAssets,'native.js'),native.code);
const nextRuntimes = {
  "index.html": "assets/map.js",
  "lighthouse.html": "assets/lighthouse.js",
  "audit-sea.html": "assets/sea.js",
  "echo-theater.html": "assets/ocean.js",
  "abyssal-sea.html": "assets/native.js",
};
for (const [name, nextRuntime] of Object.entries(nextRuntimes)) {
  pages[name] = pages[name].replace(runtimeRef(pages[name]), nextRuntime);
  writeFileSync(path.join(distDir, name), pages[name]);
}
for (const oldRuntime of oldRuntimes) {
  const oldPath = path.join(distDir, oldRuntime);
  if (!Object.values(nextRuntimes).includes(oldRuntime)) unlinkSync(oldPath);
}

const manifestPath = path.join(distDir, "release.json");
const manifest = JSON.parse(readFileSync(manifestPath, "utf8"));
manifest.version = `${manifest.version}-source-preview`;
manifest.developmentBuild = true;
manifest.files = Object.fromEntries(Object.keys(pages).map(name => {
  const data = readFileSync(path.join(distDir, name));
  return [name, {
    sourceSHA256: sha256(readFileSync(path.join(publicDir, name))),
    publishedSHA256: sha256(data),
    bytes: data.length,
  }];
}));
for (const oldRuntime of oldRuntimes) delete manifest.assets[oldRuntime];
for (const runtime of Object.values(nextRuntimes)) {
  const data = readFileSync(path.join(distDir, runtime));
  manifest.assets[runtime] = {
    publishedSHA256: sha256(data),
    bytes: data.length,
    kind: "development-runtime",
  };
}
manifest.assets = Object.fromEntries(Object.entries(manifest.assets).sort(([a], [b]) => a.localeCompare(b)));
writeFileSync(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`);

console.log(JSON.stringify({
  output: path.relative(root, distDir),
  pages: Object.keys(pages),
  sourceFiles: readdirSync(sourceDir, { recursive: true }).filter(name => /\.m?js$/.test(name)).length,
  runtimes: nextRuntimes,
}, null, 2));
