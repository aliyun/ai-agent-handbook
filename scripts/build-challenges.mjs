// 从关卡源文件生成 public/challenges/，随后由 VitePress 复制到站点输出。
import assert from "node:assert/strict";
import { readFileSync, writeFileSync, mkdirSync, copyFileSync, rmSync } from "node:fs";
import { levels } from "../challenges/levels.mjs";

const source = new URL("../challenges/", import.meta.url);
const output = new URL("../public/challenges/", import.meta.url);
const escape = (text) => String(text).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const ids = new Set();
for (const level of levels) {
  assert.match(level.id, /^\d{2}-[a-z0-9-]+$/);
  assert.match(level.version, /^v\d+$/);
  assert.ok(["available", "planned"].includes(level.status));
  assert.ok(!ids.has(level.id), `重复的关卡 ID：${level.id}`);
  ids.add(level.id);
}
// 只清理脚本专属的生成目录，不改其他 public 资源。
rmSync(output, { recursive: true, force: true });
mkdirSync(output, { recursive: true });

const cards = levels.map(level => `<article class="level ${level.status}" data-level="${level.id}">
<div class="level-top"><span>LEVEL ${escape(level.number)}</span><span class="state">${level.status === "available" ? "已开放" : "筹备中"}</span></div>
<h2>${escape(level.title)}</h2>
<p>${escape(level.description)}</p>
<div class="level-action">${level.status === "available" ? `<a class="enter" href="${level.id}/" aria-label="进入第 ${level.number} 关：${escape(level.title)}">进入第 ${escape(level.number)} 关 <span aria-hidden="true">→</span></a>` : '<span class="planned-note">敬请期待</span>'}</div>
</article>`).join("\n");
writeFileSync(new URL("index.html", output), readFileSync(new URL("index.html", source), "utf8").replace("__LEVEL_CARDS__", cards));

function unexport(file) {
  const names = [];
  const body = readFileSync(file, "utf8").replace(
    /^export\s+(const|let|function|async\s+function)\s+([A-Za-z_$][\w$]*)/gm,
    (_, kind, name) => { names.push(name); return `${kind} ${name}`; },
  );
  assert.ok(!/^\s*(import|export)\b/m.test(body), `仍有未处理的模块导入或导出：${file}`);
  return { body, names };
}

for (const level of levels.filter(level => level.status === "available")) {
  const folder = new URL(`${level.id}/`, source);
  const dest = new URL(`${level.id}/`, output);
  mkdirSync(dest);
  const { STARTER } = await import(new URL("starter.js", folder).href);
  const { LEVEL } = await import(new URL("engine.js", folder).href);
  assert.equal(LEVEL.id, level.id, "评分结果中的关卡 ID 必须与目录一致");
  assert.equal(`v${LEVEL.version}`, level.version, "评分版本必须与本机存储版本一致");
  const parts = ["engine.js", "sandbox.js"].map(file => unexport(new URL(file, folder)));
  const names = [...parts.flatMap(part => part.names), "STARTER"];
  writeFileSync(new URL("sim.js", dest), `// 自动生成，源文件位于 challenges/${level.id}/；运行 npm run build 更新。
(function (root) {
"use strict";
${parts.map(part => part.body).join("\n")}
const STARTER = ${JSON.stringify(STARTER)};
root.RefundSim = { ${names.join(", ")} };
})(typeof self !== 'undefined' ? self : this);
`);
  const html = readFileSync(new URL("index.html", folder), "utf8")
    .replaceAll("__LEVEL_ID__", level.id)
    .replaceAll("__LEVEL_VERSION__", level.version);
  assert.ok(!/__LEVEL_[A-Z_]+__/.test(html), `未替换的关卡占位符：${level.id}`);
  writeFileSync(new URL("index.html", dest), html);
  for (const file of ["app.js", "worker.js", "logo.svg"]) copyFileSync(new URL(file, folder), new URL(file, dest));
  copyFileSync(new URL("vendor/sval.min.js", folder), new URL("sval.min.js", dest));
  copyFileSync(new URL("vendor/sval.LICENSE", folder), new URL("sval.LICENSE.txt", dest));
}
console.log(`工程闯关已生成：${levels.filter(level => level.status === "available").length} 关开放，${levels.filter(level => level.status === "planned").length} 关筹备中。`);
