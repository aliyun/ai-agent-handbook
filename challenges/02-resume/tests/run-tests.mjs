// node challenges/02-resume/tests/run-tests.mjs
// 仅执行有界代码。死循环必须在可终止的浏览器 Worker 测试，不能在 Node 主线程试跑。
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { LEVEL, SCENARIOS, PUBLIC_SEED, CALL_BUDGET, DEADLINE, makeSpecs, runOne, runAll, summarize, compileHarness } from '../engine.js';
import { STARTER } from '../starter.js';
import { REFERENCE } from '../reference.js';
import { compileSandboxed } from '../sandbox.js';

const Sval = (() => {
  const module = { exports: {} };
  new Function('module', 'exports', readFileSync(new URL('../../01-refund-timeout/vendor/sval.min.js', import.meta.url), 'utf8'))(module, module.exports);
  return module.exports;
})();
const HANG_MS = 40;
const specs = makeSpecs();
const pick = (scenario, index = 0) => structuredClone(specs.find((s) => s.scenario === scenario && s.index === index));
const GOOD = `
export function canComplete(ctx) {
  return ctx.task.publishAllowed === true && ctx.checkpoint.revision === ctx.task.revision
    && ctx.task.steps.every(step => ctx.checkpoint.completed.some(r => r.stepId === step.id
      && r.revision === ctx.task.revision && r.status === "succeeded"
      && typeof r.receiptId === "string" && r.receiptId.length > 0));
}`;
const HUMAN = `
export async function onResume(ctx) { await ctx.tools.askHuman("人工确认"); }
export function canComplete(ctx) { return false; }`;
const NOOP = `
export async function onResume(ctx) {}
export function canComplete(ctx) { return false; }`;
const MODEL_ONLY = `
export async function onResume(ctx) {}
export function canComplete(ctx) { return ctx.model.says === "done"; }`;
let referenceSummary;
let failures = 0, assertions = 0, comparedRuns = 0;

async function compare(code, selected = specs) {
  const nativeLoader = compileHarness(code), svalLoader = compileSandboxed(code, Sval);
  const nativeRuns = [], interpretedRuns = [];
  for (const spec of selected) {
    const native = await runOne(structuredClone(spec), nativeLoader, { hangMs: HANG_MS });
    const interpreted = await runOne(structuredClone(spec), svalLoader, { hangMs: HANG_MS });
    // 不删日志、不 strip 字段：每组的完整返回对象必须一致，包括 trace / checkpoint / 回执 / 时间。
    assert.deepEqual(interpreted, native, `Native/Sval 完整返回不一致：${spec.scenario}/${spec.index}`);
    comparedRuns++;
    nativeRuns.push(native);
    interpretedRuns.push(interpreted);
  }
  const native = summarize(nativeRuns), interpreted = summarize(interpretedRuns);
  assert.deepEqual(interpreted, native, 'Native/Sval 完整 summary 不一致');
  return native;
}
async function test(name, fn) {
  assertions++;
  try { await fn(); console.log(`PASS ${name}`); }
  catch (error) { failures++; console.error(`FAIL ${name}\n${error.stack}`); }
}
async function codeTest(name, code, check, selected = specs) {
  await test(name, async () => check(await compare(code, selected)));
}
const first = (s) => s.runs[0];
const gateNames = ['duplicate', 'falseClaim', 'unsafe', 'aborted'];

await test('公开剧本：固定22组、顺序、任务步骤、可复现种子与变化的持久性切点', async () => {
  assert.deepEqual(LEVEL, { id: '02-resume', version: 1 });
  assert.equal(PUBLIC_SEED, 2026);
  assert.equal(DEADLINE, 180);
  assert.equal(CALL_BUDGET, 60);
  assert.deepEqual(SCENARIOS.map((s) => [s.id, s.no, s.name]), [
    ['saved', '①', '进度已保存'], ['gap', '②', '结果还没记下'], ['repeated', '③', '恢复途中又中断'], ['changed', '④', '权限或任务已变化'], ['happy', '⑤', '一切正常'],
  ]);
  assert.equal(specs.length, 22);
  assert.deepEqual(makeSpecs(), specs);
  assert.notDeepEqual(makeSpecs(2027), specs);
  assert.ok(new Set(specs.map((s) => s.task.id)).size > 10);
  assert.ok(new Set(specs.map((s) => s.task.revision)).size > 1);
  assert.deepEqual([...new Set(specs.map((s) => s.initialCompleted))].sort(), [1, 2, 3]);
  for (const spec of specs) assert.deepEqual(spec.task.steps, [{ id: 'draft', label: '生成报告' }, { id: 'publish', label: '发布报告' }, { id: 'notify', label: '通知团队' }]);
  assert.equal(specs.filter((s) => s.scenario === 'gap' && s.gapStatus === 'unknown').length, 1);
  assert.ok(specs.filter((s) => s.scenario === 'repeated').every((s) => s.crashes.length === 2));
});
await test('公开changed覆盖仅版本变化、仅权限撤销、两者同时变化，完成数与最佳调用不变', async () => {
  const changed = specs.filter((s) => s.scenario === 'changed');
  assert.deepEqual(changed.map((s) => [s.index, s.task.revision !== s.oldRevision, s.task.publishAllowed]), [
    [0, true, true], [1, false, false], [2, true, true], [3, false, false], [4, true, false],
  ]);
  assert.deepEqual(changed.map((s) => s.initialCompleted), [2, 3, 2, 3, 2]);
  assert.ok(changed.every((s) => s.optimalCalls === 0 && s.expected === 'WAITING_HUMAN'));
});

await codeTest('STARTER：0分，重复执行与权限问题都被记录', STARTER, (s) => {
  assert.equal(s.score, 0);
  assert.equal(s.passed, false);
  assert.deepEqual(s.failedBy.duplicate, ['saved', 'gap', 'repeated', 'changed']);
  assert.ok(s.failedBy.unsafe.includes('changed'));
  assert.equal(s.byScenario.happy.correct, 2);
  for (const run of s.runs) {
    assert.deepEqual(Object.keys(run.gates), gateNames);
    const stepEvents = run.trace.filter((e) => e.anim?.type === 'step');
    assert.equal(stepEvents.length, run.executed.length, '每一次实际执行，包括重复，都有 step 动画');
    if (run.gates.duplicate) assert.ok(stepEvents.some((e) => e.anim.duplicate));
  }
});

await codeTest('REFERENCE：100分，22/22正确，各spec的最佳业务调用恰好达到', REFERENCE, (s) => {
  referenceSummary = s;
  assert.equal(s.score, 100);
  assert.equal(s.passed, true);
  assert.deepEqual(s.parts, { base: 60, outcome: 30, calls: 10 });
  assert.equal(s.stats.correct, 22);
  assert.equal(s.stats.avgExtra, 0);
  for (const scenario of SCENARIOS) assert.deepEqual(s.byScenario[scenario.id], { total: scenario.id === 'happy' ? 2 : 5, failed: 0, correct: scenario.id === 'happy' ? 2 : 5 });
  for (const run of s.runs) {
    assert.equal(run.businessCalls, specs.find((spec) => spec.scenario === run.scenario && spec.index === run.index).optimalCalls);
    assert.equal(run.extraCalls, 0);
    assert.ok(run.endAt <= DEADLINE);
    assert.ok(run.trace.every((e) => ['PREPARE', 'MODEL', 'ACT', 'WORLD', 'OBSERVE', 'HARNESS', 'RESTART', 'HUMAN', 'DONE', 'GATE', 'SEP'].includes(e.phase)));
    for (const event of run.trace.filter((e) => e.anim?.type === 'checkpoint')) {
      assert.ok(Array.isArray(event.anim.completed));
      for (const id of event.anim.completed) assert.ok(['draft', 'publish', 'notify'].includes(id));
      assert.ok(event.text.includes('completed=['));
    }
    if (run.scenario === 'saved') {
      assert.equal(run.businessCalls, 1);
      assert.deepEqual(run.executed.map((r) => r.stepId), ['draft', 'publish', 'notify']);
    }
    if (run.scenario === 'changed') {
      const spec = pick('changed', run.index);
      const change = run.trace.find((e) => e.phase === 'WORLD' && e.text.startsWith('交接前'));
      assert.equal(run.state, 'WAITING_HUMAN');
      assert.equal(run.executed.length, spec.initialCompleted);
      assert.equal(run.checkpoint.revision, spec.oldRevision);
      assert.ok(change?.world);
      assert.equal(change.text.includes('权限已撤销'), !run.task.publishAllowed);
      assert.equal(change.text.includes(`任务由 revision=${spec.oldRevision} 改为 ${run.task.revision}`), spec.oldRevision !== run.task.revision);
      if (run.task.publishAllowed) assert.ok(change.text.includes('当前批准不代表旧进度可用于新版任务'));
    }
    if (run.scenario === 'happy') {
      assert.equal(run.businessCalls, 0);
      assert.equal(run.restarts, 0);
      assert.ok(!run.trace.some((e) => e.text.startsWith('onResume')));
      assert.equal(run.trace.filter((e) => e.anim?.type === 'checkpoint').length, 1);
    }
  }
});

await test('REFERENCE移除全部版本比较不能满分：沿用旧回执直接通知会错序，而非虚假完成', async () => {
  let withoutVersionChecks = REFERENCE;
  for (const comparison of [
    ' && receipt.revision === revision',
    ' || ctx.checkpoint.revision !== task.revision',
    ' && attempt.revision === task.revision',
    ' && ctx.checkpoint.revision === task.revision',
  ]) {
    assert.equal(withoutVersionChecks.split(comparison).length, 2, `版本比较必须恰好匹配一次：${comparison}`);
    withoutVersionChecks = withoutVersionChecks.replace(comparison, '');
  }
  assert.doesNotMatch(withoutVersionChecks, /\.revision\s*[!=]=/);
  const s = await compare(withoutVersionChecks);
  assert.ok(s.score < 100);
  assert.equal(s.stats.correct, 20);
  const versionOnly = s.runs.filter((r) => r.scenario === 'changed' && r.task.publishAllowed);
  assert.deepEqual(versionOnly.map((r) => r.index), [0, 2]);
  for (const run of versionOnly) {
    assert.equal(run.state, 'ABORTED');
    assert.deepEqual(run.gates, { duplicate: false, falseClaim: false, unsafe: true, aborted: true });
    assert.equal(run.businessCalls, 1);
    assert.notEqual(run.checkpoint.revision, run.task.revision);
    assert.deepEqual(run.executed.map((r) => [r.stepId, r.revision]), [['draft', run.checkpoint.revision], ['publish', run.checkpoint.revision]]);
    assert.ok(run.trace.some((e) => e.phase === 'HARNESS' && e.text.startsWith('拒绝 runStep(notify)')));
  }
  for (const run of s.runs.filter((r) => !versionOnly.includes(r))) {
    assert.deepEqual(run, referenceSummary.runs.find((r) => r.scenario === run.scenario && r.index === run.index));
  }
});

await codeTest('只按checkpoint恢复：回执缺口与连续中断会重复执行', `
export async function onResume(ctx) {
  if (!ctx.task.publishAllowed || ctx.checkpoint.revision !== ctx.task.revision) return ctx.tools.askHuman("批准变化");
  const completed = ctx.checkpoint.completed.slice();
  for (const step of ctx.task.steps) {
    if (completed.some(r => r.stepId === step.id)) continue;
    completed.push(await ctx.tools.runStep(step.id));
    await ctx.tools.saveCheckpoint({ revision: ctx.task.revision, completed });
  }
}
${GOOD}`, (s) => {
  assert.equal(s.score, 0);
  assert.ok(s.failedBy.duplicate.includes('gap'));
  assert.ok(s.failedBy.duplicate.includes('repeated'));
});

await codeTest('写入顶层完成标记也会丢失，不可代替持久checkpoint', `let finished = false;\n${REFERENCE.replace('export async function onResume(ctx)', 'async function restore(ctx)').replace('export function canComplete(ctx) {', 'function evidenceComplete(ctx) {')}
export async function onResume(ctx) { await restore(ctx); finished = true; }
export function canComplete(ctx) { return finished; }`, (s) => {
  assert.equal(s.passed, true);
  assert.equal(s.score, 78);
  assert.equal(s.stats.correct, 6);
});
await codeTest('进程内步骤缓存丢失：重启后从缓存重做会触发重复底线', `
let completed = [];
export async function onResume(ctx) {
  for (const step of ctx.task.steps) {
    if (completed.some(r => r.stepId === step.id)) continue;
    completed.push(await ctx.tools.runStep(step.id));
    await ctx.tools.saveCheckpoint({ revision: ctx.task.revision, completed });
  }
}
${GOOD}`, (s) => { assert.equal(first(s).gates.duplicate, true); assert.equal(first(s).restarts, 2); }, [pick('repeated', 3)]);

await codeTest('只信模型：没有实际当前结果或持久证据也提交，20组虚假完成', MODEL_ONLY, (s) => {
  assert.equal(s.score, 0);
  assert.equal(s.stats.falseClaim, 20);
  assert.equal(s.stats.aborted, 0);
});
await codeTest('完成钩子篡改任务/进度快照不能伪造当前证据', `
export async function onResume(ctx) {}
export function canComplete(ctx) {
  ctx.task.publishAllowed = true;
  ctx.task.revision = 999;
  ctx.checkpoint.revision = 999;
  ctx.checkpoint.completed = ctx.task.steps.map(step => ({stepId: step.id, revision: 999, receiptId: "fake", status: "succeeded"}));
  ctx.attempts.length = 0;
  return true;
}`, (s) => {
  assert.equal(s.stats.falseClaim, 20);
  for (const run of s.runs) {
    const spec = specs.find((p) => p.scenario === run.scenario && p.index === run.index);
    assert.deepEqual(run.task, spec.task);
    assert.equal(run.checkpoint.revision, spec.oldRevision);
    assert.ok(run.checkpoint.completed.every((r) => r.receiptId !== 'fake'));
  }
});
await codeTest('批准撤销：即便三步旧结果与checkpoint完整，也不能完成', MODEL_ONLY, (s) => {
  const run = first(s);
  assert.equal(run.task.publishAllowed, false);
  assert.equal(run.executed.length, 3);
  assert.equal(run.checkpoint.completed.length, 3);
  assert.equal(run.gates.falseClaim, true);
}, [pick('changed', 1)]);
await codeTest('版本变化：旧版本全部真实回执不算当前任务完成证据', MODEL_ONLY, (s) => {
  assert.equal(first(s).task.publishAllowed, true);
  assert.equal(first(s).gates.falseClaim, true);
  assert.notEqual(first(s).task.revision, first(s).checkpoint.revision);
}, [{ ...pick('changed', 0), initialCompleted: 3 }]);
await codeTest('实际全部成功但checkpoint漏步骤：也必须否决完成', `
export async function onResume(ctx) { await ctx.tools.saveCheckpoint({ revision: ctx.task.revision, completed: ctx.checkpoint.completed.slice(0, 2) }); }
export function canComplete(ctx) { return true; }`, (s) => {
  assert.equal(first(s).executed.length, 3);
  assert.equal(first(s).checkpoint.completed.length, 2);
  assert.equal(first(s).gates.falseClaim, true);
}, [{ ...pick('saved'), initialCompleted: 3 }]);

await codeTest('权限撤销或新版前序未完成：发布和通知被拒绝，catch后转人工仍unsafe', `
export async function onResume(ctx) {
  for (const stepId of ["publish", "notify"]) { try { await ctx.tools.runStep(stepId); } catch (e) {} }
  await ctx.tools.askHuman("拒绝后转人工");
}
export function canComplete(ctx) { return false; }`, (s) => {
  assert.equal(s.stats.unsafe, 5);
  assert.equal(s.stats.aborted, 0);
  assert.ok(s.runs.every((r) => r.state === 'WAITING_HUMAN' && r.executed.length === (r.index % 2 ? 3 : 2)));
  for (const run of s.runs) {
    assert.equal(run.trace.filter((e) => e.phase === 'HARNESS' && e.text.startsWith('拒绝 runStep(')).length, 2);
    // 批准仍有效的组不是越权，而是当前版本没有 draft/publish，不能沿用旧结果。
    if (run.task.publishAllowed) assert.ok(run.executed.every((r) => r.revision !== run.task.revision));
  }
}, specs.filter((s) => s.scenario === 'changed'));
await codeTest('draft不依赖发布批准，新版本在批准有效或撤销时生成草稿都安全', `
export async function onResume(ctx) {
  const receipt = await ctx.tools.runStep("draft");
  await ctx.tools.saveCheckpoint({ revision: ctx.task.revision, completed: [receipt] });
  await ctx.tools.askHuman("请确认新版任务与发布批准");
}
export function canComplete(ctx) { return false; }`, (s) => {
  assert.deepEqual(s.runs.map((r) => r.task.publishAllowed), [true, true, false]);
  for (const run of s.runs) {
    assert.equal(run.gates.unsafe, false);
    assert.equal(run.gates.duplicate, false);
    assert.equal(run.executed.at(-1).revision, run.task.revision);
    assert.equal(run.correct, true);
    assert.equal(run.businessCalls, 1);
    assert.equal(run.checkpoint.revision, run.task.revision);
    assert.deepEqual(run.checkpoint.completed.map((r) => r.stepId), ['draft']);
  }
}, [pick('changed', 0), pick('changed', 2), pick('changed', 4)]);
await codeTest('错序：未生成/发布时直接通知，拒绝实际执行', `
export async function onResume(ctx) { await ctx.tools.runStep("notify"); }
export function canComplete(ctx) { return false; }`, (s) => {
  assert.equal(first(s).gates.unsafe, true);
  assert.equal(first(s).executed.length, 0);
}, [{ ...pick('saved'), initialCompleted: 0 }]);
await codeTest('任务以外step被拒绝，不能伪造成功事件', `
export async function onResume(ctx) { await ctx.tools.runStep("delete"); }
export function canComplete(ctx) { return false; }`, (s) => {
  assert.equal(first(s).gates.unsafe, true);
  assert.equal(first(s).executed.length, 2);
}, [pick('saved')]);

await codeTest('全人工安全但低于85分（78）', HUMAN, (s) => {
  assert.equal(s.passed, true);
  assert.equal(s.score, 78);
  assert.equal(s.stats.correct, 6);
  assert.ok(s.score < 85);
  assert.ok(s.runs.every((r) => r.businessCalls === 0 && r.state === 'WAITING_HUMAN'));
});
await codeTest('安全不执行直接返回false：正常人工而非aborted', NOOP, (s) => {
  assert.equal(s.passed, true);
  assert.equal(s.score, 78);
  assert.equal(s.stats.aborted, 0);
  assert.ok(s.runs.every((r) => r.restarts === 0));
});

const freshReference = `let invocations = 0;\n${REFERENCE
  .replace('export async function onResume(ctx) {', 'export async function onResume(ctx) {\n  if (++invocations !== 1) throw new Error("实例变量未清空");')
  .replace('export function canComplete(ctx) {', 'export function canComplete(ctx) {\n  if (invocations !== 0 || ctx.tools !== null) throw new Error("完成钩子必须新实例且无工具");')}`;
await codeTest('连续两次真实工具中断：每次load全新变量、全部最终完成', freshReference, (s) => {
  assert.equal(s.score, 100);
  for (const run of s.runs.filter((r) => r.scenario === 'repeated')) {
    assert.equal(run.restarts, 2);
    assert.equal(run.trace.filter((e) => e.anim?.type === 'crash').length, 2);
    assert.equal(run.state, 'COMPLETED');
  }
  const repeated = s.runs.filter((r) => r.scenario === 'repeated');
  assert.deepEqual(repeated.map((r) => r.businessCalls), [5, 4, 4, 4, 2]);
  assert.ok(repeated.some((r) => r.trace.some((e) => e.anim?.type === 'inspect' && e.anim.status === 'not_found')));
  assert.ok(repeated.some((r) => r.trace.some((e) => e.anim?.type === 'inspect' && e.anim.status === 'succeeded')));
});
await codeTest('玩家catch崩溃仍不能继续用旧工具，必须切换新实例', `${REFERENCE.replace('export async function onResume(ctx)', 'async function restore(ctx)')}
export async function onResume(ctx) {
  try { await restore(ctx); }
  catch (e) { try { await ctx.tools.runStep("draft"); } catch (again) {} }
}`, (s) => {
  assert.equal(s.score, 100);
  assert.deepEqual(s, referenceSummary);
});
await codeTest('unknown必须转人工且不能重做publish', REFERENCE, (s) => {
  const run = first(s);
  assert.equal(run.state, 'WAITING_HUMAN');
  assert.equal(run.businessCalls, 1);
  assert.equal(run.failed, false);
  assert.deepEqual(run.executed.map((r) => r.stepId), ['draft', 'publish']);
  assert.ok(run.trace.some((e) => e.anim?.type === 'inspect' && e.anim.status === 'unknown'));
}, [pick('gap', 2)]);
await codeTest('查询unknown后盲目执行：真实重复事件和unsafe都会留下', `
export async function onResume(ctx) {
  await ctx.tools.inspectStep("publish");
  await ctx.tools.runStep("publish");
}
export function canComplete(ctx) { return false; }`, (s) => {
  const run = first(s);
  assert.equal(run.gates.duplicate, true);
  assert.equal(run.gates.unsafe, true);
  assert.equal(run.executed.filter((r) => r.stepId === 'publish').length, 2);
}, [pick('gap', 2)]);
await codeTest('pending其实未执行也必须先确认not_found，不能绕开查询', `
export async function onResume(ctx) { await ctx.tools.runStep("publish"); }
export function canComplete(ctx) { return false; }`, (s) => {
  assert.equal(first(s).gates.duplicate, false);
  assert.equal(first(s).gates.unsafe, true);
}, [pick('gap', 1)]);

await codeTest('工具预算60次，catch预算错误仍不能继续任务', `
export async function onResume(ctx) {
  for (let i = 0; i < 70; i++) { try { await ctx.tools.inspectStep("draft"); } catch (e) {} }
}
export function canComplete(ctx) { return false; }`, (s) => {
  assert.equal(first(s).state, 'ABORTED');
  assert.equal(first(s).businessCalls, 60);
  assert.ok(first(s).stateReason.includes('60'));
}, [pick('saved')]);
await codeTest('180s模拟deadline：不能用工具无限拖延', `
export async function onResume(ctx) { for (let i = 0; i < 4; i++) await ctx.tools.inspectStep("draft"); }
export function canComplete(ctx) { return false; }`, (s) => {
  assert.equal(first(s).gates.aborted, true);
  assert.equal(first(s).endAt, 180);
  assert.ok(first(s).stateReason.includes('180s'));
}, [{ ...pick('saved'), inspectSeconds: 60 }]);
await codeTest('未resolve的Promise由真实hangMs保护，而非挂住Node', `
export async function onResume(ctx) { await new Promise(() => {}); }
export function canComplete(ctx) { return false; }`, (s) => {
  assert.equal(first(s).gates.aborted, true);
  assert.equal(first(s).stateReason, 'onResume 一直没有返回');
}, [pick('saved')]);
await codeTest('完成钩子也受hangMs保护', `
export async function onResume(ctx) {}
export async function canComplete(ctx) { await new Promise(() => {}); }`, (s) => {
  assert.equal(first(s).gates.aborted, true);
  assert.equal(first(s).stateReason, 'canComplete 一直没有返回');
}, [pick('happy')]);
await codeTest('原生setTimeout不应暴露给玩家（由sandbox边界保证）', `
export async function onResume(ctx) { await new Promise(resolve => setTimeout(resolve, 1)); }
export function canComplete(ctx) { return false; }`, (s) => {
  assert.equal(first(s).gates.aborted, true);
  assert.equal(first(s).stateReason, 'onResume 执行异常');
}, [pick('saved')]);
await codeTest('没有wait工具，不允许原生等待替代持久恢复协议', `
export async function onResume(ctx) { await ctx.tools.wait(1); }
export function canComplete(ctx) { return false; }`, (s) => { assert.equal(first(s).gates.aborted, true); }, [pick('saved')]);

await codeTest('所有快照、工具回执、保存输入及返回snapshot都是副本', `
export async function onResume(ctx) {
  const revision = ctx.task.revision;
  const completed = ctx.checkpoint.completed.map(r => ({...r}));
  const inspected = await ctx.tools.inspectStep("publish");
  inspected.receiptId = "fake-inspect";
  inspected.status = "not_found";
  ctx.task.id = "fake-task";
  ctx.task.revision = 999;
  ctx.task.publishAllowed = false;
  ctx.task.steps[0].id = "fake-step";
  ctx.task.steps.length = 0;
  ctx.checkpoint.completed[0].receiptId = "fake-checkpoint";
  ctx.checkpoint.completed.length = 0;
  ctx.checkpoint.revision = 999;
  ctx.attempts[0].result.receiptId = "fake-attempt";
  ctx.attempts[0].revision = 999;
  ctx.attempts.length = 0;
  const receipt = await ctx.tools.runStep("notify");
  completed.push(receipt);
  const input = { revision, completed };
  const saved = await ctx.tools.saveCheckpoint(input);
  input.revision = 999;
  input.completed[0].receiptId = "fake-input";
  input.completed.pop();
  receipt.receiptId = "fake-returned-receipt";
  saved.completed[0].receiptId = "fake-returned-snapshot";
  saved.completed.length = 0;
}
${GOOD}`, (s) => {
  const run = first(s);
  assert.equal(run.state, 'COMPLETED');
  assert.equal(run.failed, false);
  assert.deepEqual(run.task, pick('saved').task);
  assert.equal(run.checkpoint.completed.length, 3);
  assert.ok(run.checkpoint.completed.every((r) => r.receiptId.startsWith('rc_')));
  assert.deepEqual(run.checkpoint.completed.map((r) => ({ stepId: r.stepId, revision: r.revision, receiptId: r.receiptId })), run.executed);
}, [pick('saved')]);
await codeTest('saveCheckpoint拒绝伪造/跨版本/缺字段/继承字段/重复/getter，拒绝后存储不变', `
export async function onResume(ctx) {
  const revision = ctx.task.revision;
  const real = ctx.checkpoint.completed[0];
  const bad = [
    {}, { revision }, { completed: [] }, { revision: String(revision), completed: [] },
    { revision: revision + 1, completed: [real] }, { revision, completed: {} },
    { revision, completed: [{...real, receiptId: "forged"}] },
    { revision, completed: [{...real, revision: revision + 1}] },
    { revision, completed: [{...real, status: "not_found"}] },
    { revision, completed: [{...real, stepId: "notify"}] },
    { revision, completed: [real, real] },
    { revision, completed: [Object.create(real)] },
  ];
  for (const field of ["stepId", "revision", "receiptId", "status"]) {
    const receipt = {...real}; delete receipt[field]; bad.push({ revision, completed: [receipt] });
  }
  const getterReceipt = {...real};
  Object.defineProperty(getterReceipt, "receiptId", { get() { return real.receiptId; } });
  bad.push({ revision, completed: [getterReceipt] });
  for (const input of bad) {
    let rejected = false;
    try { await ctx.tools.saveCheckpoint(input); } catch (e) { rejected = true; }
    if (!rejected) throw new Error("伪造checkpoint被接受");
  }
  await ctx.tools.askHuman("验证失败均已拒绝");
}
export function canComplete(ctx) { return false; }`, (s) => {
  assert.equal(first(s).failed, false);
  assert.equal(first(s).state, 'WAITING_HUMAN');
  assert.equal(first(s).checkpoint.completed.length, 2);
  assert.equal(first(s).trace.filter((e) => e.anim?.type === 'checkpoint').length, 1);
}, [pick('saved')]);
await codeTest('假回执保存被拒后return true：持久状态不变且falseClaim', `
export async function onResume(ctx) {
  try { await ctx.tools.saveCheckpoint({ revision: ctx.task.revision, completed: ctx.task.steps.map(s => ({ stepId: s.id, revision: ctx.task.revision, receiptId: "fake", status: "succeeded" })) }); } catch (e) {}
}
export function canComplete(ctx) { return true; }`, (s) => {
  assert.equal(first(s).gates.falseClaim, true);
  assert.equal(first(s).gates.aborted, false);
  assert.equal(first(s).checkpoint.completed.length, 2);
}, [pick('saved')]);
await codeTest('world/trace/实际map不在ctx中；恢复model没有says:done', `
export async function onResume(ctx) {
  if (ctx.world || ctx.trace || ctx.executed || ctx.receipts || ctx.outcomes || ctx.model.says === "done") throw new Error("泄漏上帝视角");
  if (ctx.reason !== "restart" || ctx.deadline !== 180) throw new Error("合同不一致");
}
export function canComplete(ctx) {
  if (ctx.tools !== null || ctx.model.says !== "done") throw new Error("完成合同不一致");
  return false;
}`, (s) => { assert.equal(first(s).failed, false); }, [pick('saved')]);
await codeTest('转人工后继续操作不是正常收尾，工具不能再实际执行', `
export async function onResume(ctx) { await ctx.tools.askHuman("结束"); await ctx.tools.runStep("notify"); }
export function canComplete(ctx) { return false; }`, (s) => {
  assert.equal(first(s).gates.aborted, true);
  assert.equal(first(s).executed.length, 2);
}, [pick('saved')]);
await codeTest('玩家抛出crash标记不能伪造进程中断', `
export async function onResume(ctx) { throw { crash: true }; }
export function canComplete(ctx) { return false; }`, (s) => {
  assert.equal(first(s).gates.aborted, true);
  assert.equal(first(s).restarts, 0);
}, [pick('repeated')]);

await codeTest('canComplete无返回不是false，记录aborted', `
export async function onResume(ctx) {}
export function canComplete(ctx) {}`, (s) => {
  assert.equal(s.stats.aborted, 22);
  assert.ok(s.runs.every((r) => r.stateReason.includes('必须返回')));
});
await codeTest('缺少onResume：中断场景aborted，happy直接执行canComplete', 'export function canComplete(ctx) { return false; }', (s) => {
  assert.equal(s.stats.aborted, 20);
  assert.equal(s.byScenario.happy.failed, 0);
});
await codeTest('缺少canComplete：所有组aborted', 'export async function onResume(ctx) {}', (s) => {
  assert.equal(s.stats.aborted, 22);
});
await codeTest('语法错误：两种执行器都返回加载失败，而非测试进程崩溃', 'export async function onResume(ctx) {', (s) => {
  assert.equal(s.stats.aborted, 22);
  assert.ok(s.runs.every((r) => r.stateReason === '玩家代码无法加载'));
});
await codeTest('普通异常必须aborted，不能被当成安全人工', `
export async function onResume(ctx) { throw new Error("出错"); }
export function canComplete(ctx) { return false; }`, (s) => { assert.equal(first(s).gates.aborted, true); }, [pick('saved')]);

await test('相同输入两次runAll完整一致；换公开seed仍100分且输出确实变化', async () => {
  const a = await runAll(compileHarness(REFERENCE), { hangMs: HANG_MS });
  const b = await runAll(compileHarness(REFERENCE), { seedBase: PUBLIC_SEED, hangMs: HANG_MS });
  assert.deepEqual(a, b);
  assert.deepEqual(a, referenceSummary);
  const native = await runAll(compileHarness(REFERENCE), { seedBase: 2027, hangMs: HANG_MS });
  const interpreted = await runAll(compileSandboxed(REFERENCE, Sval), { seedBase: 2027, hangMs: HANG_MS });
  assert.deepEqual(interpreted, native);
  comparedRuns += 22;
  assert.equal(native.score, 100);
  assert.notDeepEqual(native.runs, a.runs);
  assert.deepEqual(native.byScenario, a.byScenario);
});
await test('计分公式：任一底线0分，终态30分，平均多余调用每2次扣满10分', async () => {
  assert.equal(summarize([]).score, 0);
  const exact = structuredClone(referenceSummary.runs);
  assert.equal(summarize(exact).score, 100);
  const extra = exact.map((r) => ({ ...r, extraCalls: 1 }));
  assert.deepEqual(summarize(extra).parts, { base: 60, outcome: 30, calls: 5 });
  assert.equal(summarize(extra).score, 95);
  const wrong = exact.map((r) => ({ ...r, correct: false }));
  assert.equal(summarize(wrong).score, 70);
  for (const gate of gateNames) {
    const failed = structuredClone(exact);
    failed[0].gates[gate] = true; failed[0].failed = true;
    const summary = summarize(failed);
    assert.equal(summary.score, 0);
    assert.deepEqual(summary.parts, { base: 0, outcome: 0, calls: 0 });
    assert.equal(summary.stats[gate], 1);
    assert.deepEqual(summary.failedBy[gate], ['saved']);
  }
});

console.log(`\n${assertions - failures}/${assertions} 用例通过；${comparedRuns} 组 Native/Sval 完整 deepEqual。`);
if (referenceSummary) console.log(`REFERENCE=${referenceSummary.score}，场景=${JSON.stringify(referenceSummary.byScenario)}`);
process.exitCode = failures ? 1 : 0;
