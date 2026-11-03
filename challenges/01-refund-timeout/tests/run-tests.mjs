// node tests/run-tests.mjs
import { runAll, compileHarness } from '../engine.js';
import { STARTER } from '../starter.js';
import { compileSandboxed } from '../sandbox.js';
import { readFileSync } from 'node:fs';

// 浏览器里用解释器跑玩家代码；这里逐个用例比对：解释器结果必须和原生执行完全一致
const Sval = (() => { const m = { exports: {} }; new Function('module', 'exports', readFileSync(new URL('../vendor/sval.min.js', import.meta.url), 'utf8'))(m, m.exports); return m.exports; })();

const REFERENCE = `
export async function onRefundTimeout(ctx) {
  const key = ctx.attempts[0].idempotencyKey;
  let r = await ctx.tools.refund(ctx.order.id, ctx.order.amount, { idempotencyKey: key });
  while (r.status === "processing") {
    if (ctx.now() > 70) return ctx.tools.askHuman("银行一直在处理，超时未出结果");
    await ctx.tools.wait(6);
    r = await ctx.tools.queryRefund(ctx.order.id);
  }
}
export function canComplete(ctx) {
  return ctx.evidence.some(e => e.status === "succeeded");
}`;

const FIX_COMPLETE = `
const goodComplete = (ctx) => ctx.evidence.some(e => e.status === "succeeded");`;

const cases = [
  {
    name: '起始代码：0 分，lost/pending/restart 重复退款，pending 虚假完成',
    code: STARTER,
    check: (s) => s.score === 0 && same(s.failedBy.duplicate, ['lost', 'pending', 'restart']) && same(s.failedBy.falseClaim, ['pending']),
  },
  { name: '参考解：≥ 90 分', code: REFERENCE, check: (s) => s.passed && s.score >= 90 },
  {
    name: '先查询，处理中就换新键重发 → 重复退款',
    code: `
export async function onRefundTimeout(ctx) {
  const q = await ctx.tools.queryRefund(ctx.order.id);
  if (q.status !== "succeeded") await ctx.tools.refund(ctx.order.id, ctx.order.amount);
}
export function canComplete(ctx) { return ctx.evidence.some(e => e.status === "succeeded"); }`,
    check: (s) => !s.passed && s.failedBy.duplicate.includes('pending'),
  },
  {
    name: '只修 canComplete → 仍然重复退款',
    code: `
export async function onRefundTimeout(ctx) { await ctx.tools.refund(ctx.order.id, ctx.order.amount); }
export function canComplete(ctx) { return ctx.evidence.some(e => e.status === "succeeded"); }`,
    check: (s) => !s.passed && s.failedBy.duplicate.length > 0 && s.failedBy.falseClaim.length === 0,
  },
  {
    name: '只修重试 → pending 虚假完成',
    code: `
export async function onRefundTimeout(ctx) {
  await ctx.tools.refund(ctx.order.id, ctx.order.amount, { idempotencyKey: ctx.attempts[0].idempotencyKey });
}
export function canComplete(ctx) { return true; }`,
    check: (s) => !s.passed && s.failedBy.duplicate.length === 0 && s.failedBy.falseClaim.includes('pending'),
  },
  {
    name: '用进程内变量记"已重试" → 重启后重复退款',
    code: `
let retried = false;
export async function onRefundTimeout(ctx) {
  if (retried) return;
  retried = true;
  let r = await ctx.tools.refund(ctx.order.id, ctx.order.amount);
  while (r.status === "processing") {
    if (ctx.now() > 70) return ctx.tools.askHuman("超时");
    await ctx.tools.wait(6);
    r = await ctx.tools.queryRefund(ctx.order.id);
  }
}
export function canComplete(ctx) { return ctx.evidence.some(e => e.status === "succeeded"); }`,
    check: (s) => !s.passed && s.failedBy.duplicate.includes('restart'),
  },
  {
    name: '什么都转人工 → 能过关但分低',
    code: `
export async function onRefundTimeout(ctx) { await ctx.tools.askHuman("不确定"); }
export function canComplete(ctx) { return ctx.evidence.some(e => e.status === "succeeded"); }`,
    check: (s) => s.passed && s.score < 80,
  },
  {
    name: '一直轮询不放弃 → 超期中止',
    code: `
export async function onRefundTimeout(ctx) {
  let r = await ctx.tools.refund(ctx.order.id, ctx.order.amount, { idempotencyKey: ctx.attempts[0].idempotencyKey });
  while (r.status === "processing") { await ctx.tools.wait(20); r = await ctx.tools.queryRefund(ctx.order.id); }
}
export function canComplete(ctx) { return ctx.evidence.some(e => e.status === "succeeded"); }`,
    check: (s) => !s.passed && s.failedBy.aborted.includes('pending'),
  },
  {
    name: '用 setTimeout 等待 → 卡住中止',
    code: `
export async function onRefundTimeout(ctx) { await new Promise(r => setTimeout(r, 5000)); }
export function canComplete(ctx) { return false; }`,
    check: (s) => !s.passed && s.stats.aborted > 0,
  },
  {
    name: '不调工具直接返回 + 只信证据 → 不会虚假完成',
    code: `
export async function onRefundTimeout(ctx) {}
export function canComplete(ctx) { return ctx.evidence.some(e => e.status === "succeeded"); }`,
    check: (s) => s.passed && s.failedBy.falseClaim.length === 0,
  },
];

// 比较时去掉日志里的墙钟时间等无关字段
function strip(sum) { return { score: sum.score, passed: sum.passed, parts: sum.parts, failedBy: sum.failedBy, stats: sum.stats, runs: sum.runs?.map((r) => ({ id: r.id ?? r.scenario, outcome: r.outcome, calls: r.calls, log: r.log?.map((l) => l.text ?? l.msg ?? JSON.stringify(l)) })) }; }
function same(a, b) { return [...a].sort().join() === [...b].sort().join(); }

let fail = 0;
for (const c of cases) {
  const s = await runAll(compileHarness(c.code), { hangMs: 100 });
  const si = await runAll(compileSandboxed(c.code, Sval), { hangMs: 100 });
  const sameAsNative = JSON.stringify(strip(s)) === JSON.stringify(strip(si));
  const ok = c.check(s) && sameAsNative;
  if (!sameAsNative) console.log('      解释器结果与原生不一致：', JSON.stringify(strip(si)).slice(0, 400));
  if (!ok) fail++;
  console.log(`${ok ? 'PASS' : 'FAIL'}  ${c.name}`);
  console.log(`      score=${s.score} parts=${JSON.stringify(s.parts)} failedBy=${JSON.stringify(s.failedBy)} stats=${JSON.stringify(s.stats)}`);
}
void FIX_COMPLETE;
console.log(fail ? `\n${fail} 个用例失败` : '\n全部通过');
process.exit(fail ? 1 : 0);
