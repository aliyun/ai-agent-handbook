// node tests/run-tests.mjs
import { runAll, runOne, makeSpecs, DEADLINE, compileHarness } from '../engine.js';
import { STARTER } from '../starter.js';
import { compileSandboxed } from '../sandbox.js';
import { readFileSync } from 'node:fs';
import assert from 'node:assert/strict';

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
  { name: '参考解：保持 96 分', code: REFERENCE, check: (s) => s.passed && s.score === 96 },
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
    name: '什么都转人工 → 保持 73 分',
    code: `
export async function onRefundTimeout(ctx) { await ctx.tools.askHuman("不确定"); }
export function canComplete(ctx) { return ctx.evidence.some(e => e.status === "succeeded"); }`,
    check: (s) => s.passed && s.score === 73,
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

function same(a, b) { return [...a].sort().join() === [...b].sort().join(); }

// 新增用例只使用有界代码；单组边界测试也完整比较终态、调用、入账和 trace。
const specs = makeSpecs();
const specFor = (scenario) => specs.find((s) => s.scenario === scenario);
const refund = 'ctx.tools.refund(ctx.order.id, ctx.order.amount, { idempotencyKey: ctx.attempts[0].idempotencyKey })';
const query = 'ctx.tools.queryRefund(ctx.order.id)';
const harness = (body, complete = 'return goodComplete(ctx);') => `${FIX_COMPLETE}
export async function onRefundTimeout(ctx) { ${body} }
export function canComplete(ctx) { ${complete} }`;
const acknowledgements = (r) => r.trace.filter((e) => e.phase === 'OBSERVE' && e.anim?.type === 'ack');

function deadlineAbort(r, calls, credits, acks = calls) {
  assert.equal(r.state, 'ABORTED');
  assert.equal(r.stateReason, `超过 ${DEADLINE}s 期限仍没有结论`);
  assert.equal(r.endAt, DEADLINE);
  assert.equal(r.gates.aborted, true);
  assert.equal(r.failed, true);
  assert.equal(r.businessCalls, calls);
  assert.equal(r.credits, credits);
  assert.equal(r.trace.filter((e) => e.phase === 'ACT').length, 1 + calls);
  assert.equal(acknowledgements(r).length, acks);
  const stop = r.trace.findIndex((e) => e.chipText === '超期');
  assert.ok(stop >= 0);
  // 既有银行请求可以在任务后入账，但 Harness 不得再调用工具、恢复、转人工或提交。
  assert.deepEqual(r.trace.slice(stop + 1).filter((e) => !e.world && !['SEP', 'GATE'].includes(e.phase)), []);
  assert.ok(r.trace.filter((e) => !e.world).every((e) => e.t <= DEADLINE));
  assert.ok(!r.trace.some((e) => e.phase === 'DONE' || e.phase === 'HUMAN'));
  return true;
}
function terminal(r, state, calls, credits, endAt = DEADLINE) {
  assert.equal(r.state, state);
  assert.equal(r.endAt, endAt);
  assert.equal(r.failed, false);
  assert.equal(r.businessCalls, calls);
  assert.equal(r.credits, credits);
  assert.ok(r.trace.filter((e) => !e.world).every((e) => e.t <= DEADLINE));
  return true;
}

cases.push({
  name: '线上复现：等到 deadline 再查询/退款，20 组均中止且 0 分',
  code: harness(`
    await ctx.tools.wait(ctx.deadline - ctx.now());
    const q = await ${query};
    if (q.status !== 'succeeded') await ${refund};`),
  check: (s) => {
    assert.equal(s.score, 0);
    assert.equal(s.passed, false);
    assert.equal(s.stats.aborted, 20);
    for (const r of s.runs) {
      if (r.scenario === 'happy') {
        terminal(r, 'COMPLETED', 0, 1, 0.8);
      } else {
        const spec = specs.find((v) => v.scenario === r.scenario && v.index === r.index);
        deadlineAbort(r, 0, spec.scenario === 'dropped' || (spec.scenario === 'restart' && !spec.firstLanded) ? 0 : 1);
      }
    }
    return true;
  },
});

for (const [name, action, cost, scenario, credits] of [
  ['query', query, 0.3, 'lost', 1],
  ['refund', refund, 0.4, 'dropped', 0],
]) {
  for (const remaining of [0, cost / 2, cost - 1e-7]) {
    cases.push({
      name: `${name} 剩余 ${remaining}s 不够耗时 → 无调用/入账/证据`,
      spec: specFor(scenario),
      code: harness(`await ctx.tools.wait(ctx.deadline - ctx.now() - ${remaining}); await ${action};`),
      check: (r) => deadlineAbort(r, 0, credits),
    });
  }
  for (const margin of [0, 0.1, 1e-7]) {
    cases.push({
      name: `${name} 在期限前 ${margin}s 完成 → 接受`,
      spec: specFor(scenario),
      code: harness(`await ctx.tools.wait(ctx.deadline - ctx.now() - ${cost} - ${margin}); await ${action};`),
      check: (r) => terminal(r, 'COMPLETED', 1, 1, Math.round((DEADLINE - margin) * 10) / 10),
    });
  }
}

for (const extra of ['1', '0.0000001', 'Infinity']) {
  cases.push({
    name: `wait 超过期限 ${extra}s → 中止`,
    spec: specFor('dropped'),
    code: harness(`await ctx.tools.wait(ctx.deadline - ctx.now() + ${extra});`),
    check: (r) => deadlineAbort(r, 0, 0),
  });
}
for (const [name, action] of [['query', query], ['refund', refund], ['wait', 'ctx.tools.wait(1)']]) {
  cases.push({
    name: `${name} 超期被 catch 后，四种工具及 canComplete 都不能绕过`,
    spec: specFor('dropped'),
    code: harness(`
      await ${refund};
      await ctx.tools.wait(ctx.deadline - ctx.now());
      try { await ${action}; } catch (e) { e.abort = ''; e.message = ''; }
      try { await ${query}; } catch (e) {}
      try { await ctx.tools.refund(ctx.order.id, ctx.order.amount); } catch (e) {}
      try { await ctx.tools.wait(1); } catch (e) {}
      try { await ctx.tools.askHuman('绕过超期'); } catch (e) {}
      return true;`, 'return true;'),
    check: (r) => deadlineAbort(r, 1, 1),
  });
}

cases.push({
  name: 'wait 恰好到 180，有此前退款证据 → 可完成',
  spec: specFor('dropped'),
  code: harness(`await ${refund}; await ctx.tools.wait(ctx.deadline - ctx.now());`),
  check: (r) => terminal(r, 'COMPLETED', 1, 1),
}, {
  name: 'wait 恰好到 180，askHuman 零耗时 → 可转人工',
  spec: specs.find((s) => s.scenario === 'pending' && s.stuck),
  code: harness(`await ctx.tools.wait(ctx.deadline - ctx.now()); await ctx.tools.askHuman('到期转人工');`),
  check: (r) => terminal(r, 'WAITING_HUMAN', 0, 1),
}, {
  name: '向下浮点误差不影响查询恰好 180 秒到账的结果',
  spec: { ...specFor('pending'), resolveAt: DEADLINE },
  code: harness(`
    await ctx.tools.wait(ctx.deadline - ctx.now() - 1.2);
    for (let i = 0; i < 9; i++) await ctx.tools.wait(0.1);
    await ${query};`),
  check: (r) => terminal(r, 'COMPLETED', 1, 1),
});
for (const [name, action, calls] of [['wait', 'ctx.tools.wait(0.3)', 0], ['query', query, 4]]) {
  cases.push({
    name: `${name} 连续小数累加恰好 180 → 不因浮点误差中止`,
    spec: specFor('lost'),
    code: harness(`
      await ctx.tools.wait(ctx.deadline - ctx.now() - 1.2);
      for (let i = 0; i < 4; i++) await ${action};
      ${calls ? '' : "await ctx.tools.askHuman('到期转人工');"}`),
    check: (r) => terminal(r, calls ? 'COMPLETED' : 'WAITING_HUMAN', calls, 1),
  });
}

for (const delay of [169.4, 169.5, 169.5000001, 170]) {
  cases.push({
    name: `restart 无工具返回后崩溃，恢复延迟 ${delay}s`,
    spec: { ...specFor('restart'), restartDelay: delay },
    code: harness(`if (ctx.reason === 'restart') await ctx.tools.askHuman('恢复后转人工');`),
    check: (r) => {
      assert.equal(r.trace.filter((e) => e.phase === 'RESTART').length, delay > 169.5 ? 0 : 1);
      return delay > 169.5 ? deadlineAbort(r, 0, 1) : terminal(r, 'WAITING_HUMAN', 0, 1, delay === 169.4 ? 179.9 : DEADLINE);
    },
  });
}
for (const [name, action, cost, calls, credits] of [
  ['query', query, 0.3, 1, 0],
  ['refund', refund, 0.4, 1, 1],
  ['wait', 'ctx.tools.wait(1)', 0, 0, 0],
]) {
  for (const extra of [0, 0.1]) {
    cases.push({
      name: `restart 在 ${name} 中崩溃，恢复耗时${extra ? '越界' : '恰好到期'}`,
      spec: { ...specFor('restart'), firstLanded: false, restartDelay: 169.5 - cost + extra },
      code: harness(`
        if (ctx.reason === 'timeout') await ${action};
        else await ctx.tools.askHuman('恢复后转人工');`),
      check: (r) => {
        assert.equal(r.trace.filter((e) => e.phase === 'RESTART').length, extra ? 0 : 1);
        assert.equal(acknowledgements(r).length, 0);
        return extra ? deadlineAbort(r, calls, credits, 0) : terminal(r, 'WAITING_HUMAN', calls, credits);
      },
    });
  }
}
for (const delay of [169.2, 169.5]) {
  cases.push({
    name: `restart 恢复后 query：${delay === 169.2 ? '恰好 180 完成' : '不能继续耗时操作'}`,
    spec: { ...specFor('restart'), restartDelay: delay },
    code: harness(`if (ctx.reason === 'restart') await ${query};`),
    check: (r) => delay === 169.2 ? terminal(r, 'COMPLETED', 1, 1) : deadlineAbort(r, 0, 1),
  });
}

let fail = 0;
for (const c of cases) {
  try {
    const run = (load) => c.spec ? runOne(c.spec, load, { hangMs: 100 }) : runAll(load, { hangMs: 100 });
    const s = await run(compileHarness(c.code));
    const si = await run(compileSandboxed(c.code, Sval));
    assert.deepEqual(si, s, '解释器结果与原生不一致（完整结果）');
    assert.ok(c.check(s), '验收断言失败');
    console.log(`PASS  ${c.name}`);
    if (!c.spec) console.log(`      score=${s.score} parts=${JSON.stringify(s.parts)} failedBy=${JSON.stringify(s.failedBy)} stats=${JSON.stringify(s.stats)}`);
  } catch (e) {
    fail++;
    console.error(`FAIL  ${c.name}`, e);
  }
}
console.log(fail ? `\n${fail} 个用例失败` : `\n全部 ${cases.length} 个用例通过`);
process.exit(fail ? 1 : 0);
