// node challenges/03-memory/tests/run-tests.mjs
// 仅执行有界代码；同步死循环只能放进 UI 可 terminate 的 Worker，不能阻塞 Node。
// 固定 Sval 的 catch 参数遮蔽外层同名 const/var 存在上游作用域差异，以下拒绝测试用不同名参数。
// 完整 deepEqual 不删除任何结果字段，但不宣称第三方解释器对任意 JavaScript 均与 Native 等价。
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import vm from 'node:vm';
import { LEVEL, SCENARIOS, STALE_KINDS, PUBLIC_SEED, CALL_BUDGET, DEADLINE, makeSpecs, runOne, runAll, summarize, compileHarness } from '../engine.js';
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
const group = (scenario) => specs.filter((s) => s.scenario === scenario);
const first = (summary) => summary.runs[0];
const FALSE = 'export function canComplete(ctx) { return false; }';
const TRUE = 'export function canComplete(ctx) { return true; }';
const HUMAN = `export async function onRecall(ctx) { await ctx.tools.askHuman("请人工确认"); }\n${FALSE}`;
const NOOP = `export async function onRecall(ctx) {}\n${FALSE}`;
const PROOF = REFERENCE.slice(REFERENCE.indexOf('function currentProfile'), REFERENCE.indexOf('export async function onRecall'))
  + REFERENCE.slice(REFERENCE.indexOf('export function canComplete'));
let tests = 0, failures = 0, comparedRuns = 0, referenceSummary, starterSummary;
const unhandled = [];
process.on('unhandledRejection', (error) => unhandled.push(error));

async function compare(code, selected = specs) {
  const nativeLoader = compileHarness(code), svalLoader = compileSandboxed(code, Sval);
  const native = [], interpreted = [];
  for (const spec of selected) {
    const a = await runOne(structuredClone(spec), nativeLoader, { hangMs: HANG_MS });
    const b = await runOne(structuredClone(spec), svalLoader, { hangMs: HANG_MS });
    // 完整对象比较：不去掉日志、时钟、记忆、evidence、rounds 或诊断字段。
    assert.deepEqual(b, a, `Native/Sval 完整结果不同：${spec.scenario}/${spec.index}`);
    comparedRuns++;
    native.push(a); interpreted.push(b);
  }
  const a = summarize(native), b = summarize(interpreted);
  assert.deepEqual(b, a, 'Native/Sval 完整评分不同');
  return a;
}
async function test(name, check) {
  tests++;
  try { await check(); console.log(`PASS ${name}`); }
  catch (error) { failures++; console.error(`FAIL ${name}\n${error.stack}`); }
}
async function codeTest(name, code, check, selected = specs) {
  await test(name, async () => check(await compare(code, selected)));
}

await test('公开契约：22组、5场景、固定seed、绝对业务时间和变化数据', () => {
  assert.deepEqual(LEVEL, { id: '03-memory', version: 1 });
  assert.equal(PUBLIC_SEED, 2026); assert.equal(DEADLINE, 180); assert.equal(CALL_BUDGET, 60);
  assert.deepEqual(SCENARIOS.map((s) => [s.id, s.no, s.name]), [
    ['stale', '①', '地址已过期'], ['scope', '②', '混入他人记忆'], ['temporary', '③', '只改这一次'],
    ['conflict', '④', '来源互相冲突'], ['happy', '⑤', '记忆仍然有效'],
  ]);
  assert.ok(SCENARIOS.every((s) => typeof s.hint === 'string' && s.hint.length));
  assert.equal(specs.length, 22); assert.deepEqual(makeSpecs(), specs); assert.notDeepEqual(makeSpecs(2027), specs);
  for (const field of ['id', 'profileRevision']) assert.ok(new Set(specs.map((s) => s.request[field])).size > 1);
  assert.ok(new Set(specs.map((s) => s.profile.address)).size > 10);
  assert.ok(specs.every((s) => s.request.at > DEADLINE && s.memory.every((r) => r.kind === 'address')));
  assert.deepEqual(group('stale').map((s) => s.staleKind), STALE_KINDS);
  assert.deepEqual(group('scope').map((s) => [s.memory[0].tenantId === s.request.tenantId, s.memory[0].userId === s.request.userId]), [[true, false], [false, true], [false, false], [true, false], [false, true]]);
  assert.equal(specs.filter((s) => s.profileStatus === 'unknown').length, 1);
  assert.equal(pick('conflict', 2).expected, 'WAITING_HUMAN');
  assert.ok(group('conflict').some((s) => s.memory[0].verifiedAt === s.memory[1].verifiedAt));
});
await codeTest('REFERENCE 100分、22/22正确、两轮最优加权成本与动画合同', REFERENCE, (summary) => {
  referenceSummary = summary;
  assert.equal(summary.score, 100); assert.equal(summary.passed, true); assert.equal(summary.stats.correct, 22);
  assert.deepEqual(summary.parts, { base: 60, outcome: 30, calls: 10 });
  for (const run of summary.runs) {
    assert.equal(run.businessCalls, run.optimalCalls); assert.equal(run.extraCalls, 0);
    assert.deepEqual(run.gates, { scope: false, pollution: false, wrong: false, aborted: false });
    assert.equal(run.rounds.length, 2); assert.equal(run.memory.healthy, true); assert.equal(run.otherOwnersUnchanged, true);
    const [a, b] = run.rounds;
    assert.notEqual(a.request.id, b.request.id); assert.equal(b.request.at, a.request.at + 60);
    assert.equal(a.request.profileRevision, b.request.profileRevision); assert.equal(b.request.override, null);
    assert.equal(a.state, run.expected); assert.equal(b.state, run.expected);
    assert.deepEqual(run.request, a.request);
    assert.ok(run.endAt <= DEADLINE);
    assert.deepEqual(run.trace.filter((e) => e.anim?.type === 'round').map((e) => e.anim.number), [1, 2]);
    assert.equal(run.trace.filter((e) => e.text.startsWith('全新实例 onRecall')).length, 2);
    assert.equal(run.trace.filter((e) => e.anim?.type === 'sent').length, run.expected === 'COMPLETED' ? 2 : 0);
    for (const entry of run.trace) {
      assert.ok(['PREPARE', 'MODEL', 'ACT', 'OBSERVE', 'HARNESS', 'WORLD', 'HUMAN', 'DONE', 'GATE', 'SEP'].includes(entry.phase));
      assert.equal(typeof entry.t, 'number'); assert.equal(typeof entry.text, 'string');
      if (entry.phase === 'WORLD') assert.equal(entry.world, true);
      if (entry.anim) assert.ok(['round', 'read', 'query', 'remember', 'select', 'sent', 'human'].includes(entry.anim.type));
    }
  }
});
await codeTest('STARTER 0分，stale/scope/temporary/conflict暴露问题，happy两组正确', STARTER, (summary) => {
  starterSummary = summary;
  assert.equal(summary.score, 0); assert.equal(summary.stats.correct, 2); assert.equal(summary.byScenario.happy.correct, 2);
  assert.deepEqual(summary.failedBy.scope, ['scope']);
  assert.deepEqual(summary.failedBy.wrong, ['stale', 'temporary', 'conflict']);
  for (const run of summary.runs.filter((r) => r.scenario === 'scope')) {
    assert.equal(run.rounds.length, 1); assert.equal(run.rounds[0].evidence.length, 0);
    assert.equal(run.otherOwnersUnchanged, true);
    assert.ok(!JSON.stringify(run).includes(pick('scope', run.index).memory[0].address), '跨owner正文不能进入返回值或日志');
  }
});
await test('真实持久化：第一轮修复，第二轮读取新记录，无第二次query', () => {
  for (const run of referenceSummary.runs.filter((r) => r.memory.required)) {
    assert.ok(run.rounds[0].evidence.some((e) => e.scope === 'profile'));
    assert.equal(run.rounds[1].evidence.length, 1);
    assert.equal(run.rounds[1].evidence[0].scope, 'memory');
    assert.equal(run.rounds[1].selection.sourceId, run.memory.final[0].id);
    assert.equal(run.memory.final.length, 1);
    assert.deepEqual(run.memory.history, run.memory.initial);
    assert.ok(run.memory.final[0].version > Math.max(...run.memory.initial.map((r) => r.version)));
    assert.equal(run.trace.filter((e) => e.anim?.type === 'query').length, 1);
  }
});
await test('temporary两轮真实地址不同，不覆写长期记忆；unknown不确定性仍可诊断', () => {
  for (const run of referenceSummary.runs.filter((r) => r.scenario === 'temporary')) {
    assert.equal(run.rounds[0].selection.address, run.request.override.address);
    assert.equal(run.rounds[0].evidence[0].scope, 'request');
    assert.equal(run.rounds[1].selection.address, run.memory.initial[0].address);
    assert.notEqual(run.rounds[0].selection.address, run.rounds[1].selection.address);
    assert.deepEqual(run.memory.initial, run.memory.final); assert.deepEqual(run.memory.history, []);
    assert.equal(run.rounds[0].sourceLabel, '本次指定地址'); assert.equal(run.rounds[1].sourceLabel, '长期记忆');
  }
  const unknown = referenceSummary.runs.find((r) => r.scenario === 'conflict' && r.index === 2);
  assert.equal(unknown.memory.required, false); assert.equal(unknown.memory.consistent, false);
  assert.equal(unknown.memory.healthy, true); assert.equal(unknown.correct, true);
  assert.equal(unknown.trace.filter((e) => e.anim?.type === 'query' && e.anim.status === 'unknown').length, 2);
  assert.deepEqual(unknown.memory.initial, unknown.memory.final);
});
await codeTest('全人工仅底线通过，71分而非满分，人工不阻止下一轮', HUMAN, (s) => {
  assert.equal(s.passed, true); assert.equal(s.score, 71); assert.equal(s.stats.correct, 1);
  for (const r of s.runs) {
    assert.equal(r.rounds.length, 2); assert.equal(r.state, 'WAITING_HUMAN'); assert.equal(r.businessCalls, 0);
    assert.equal(r.trace.filter((e) => e.text.includes('canComplete')).length, 0);
  }
});
await codeTest('canComplete=false自动转人工，两轮仍执行', NOOP, (s) => {
  assert.equal(s.passed, true); assert.equal(s.score, 71); assert.equal(s.stats.aborted, 0);
  assert.ok(s.runs.every((r) => r.rounds.length === 2 && r.trace.filter((e) => e.anim?.type === 'human').length === 2));
});
await codeTest('只query不修memory：安全寄对但9组失去完整业务分', REFERENCE.replace('  await ctx.tools.remember(receipt);', ''), (s) => {
  assert.equal(s.passed, true); assert.equal(s.stats.correct, 13); assert.ok(s.score < 100);
  for (const r of s.runs.filter((r) => r.memory.required)) {
    assert.equal(r.state, 'COMPLETED'); assert.equal(r.memory.healthy, false); assert.equal(r.failed, false);
    assert.deepEqual(r.memory.initial, r.memory.final); assert.deepEqual(r.memory.history, []);
    assert.equal(r.rounds[1].evidence.filter((e) => e.scope === 'profile').length, 1);
  }
});
await codeTest('长期记忆未知，第一轮人工仍执行第二轮并正常寄送', `
export async function onRecall(ctx) {
  if (ctx.request.id.endsWith("-1")) { await ctx.tools.askHuman("只暂停本轮"); return; }
  const e = await ctx.tools.readMemory(ctx.candidates[0].id);
  await ctx.tools.useAddress({address: e.address, sourceId: e.sourceId});
}
${PROOF}`, (s) => {
  const r = first(s); assert.deepEqual(r.rounds.map((r) => r.state), ['WAITING_HUMAN', 'COMPLETED']);
  assert.equal(r.state, 'WAITING_HUMAN'); assert.equal(r.failed, false);
}, group('happy'));

for (const [label, condition, indices] of [
  ['只按tenant过滤', 'c.tenantId === ctx.request.tenantId', [0, 3]],
  ['只按user过滤', 'c.userId === ctx.request.userId', [1, 4]],
]) await codeTest(`${label}不能阻止另一维度越界`, `
export async function onRecall(ctx) {
  const candidate = ctx.candidates.find(c => ${condition});
  try { await ctx.tools.readMemory(candidate.id); } catch(e) {}
  await ctx.tools.askHuman("尝试后转人工");
}
${FALSE}`, (s) => {
  assert.deepEqual(s.runs.filter((r) => r.gates.scope).map((r) => r.index), indices);
  assert.ok(s.runs.every((r) => !r.gates.aborted && r.rounds.length === 2));
}, group('scope'));
await codeTest('改候选owner和request快照不能越权，catch仍留scope', `
export async function onRecall(ctx) {
  const c = ctx.candidates[0];
  ctx.request.tenantId = c.tenantId; ctx.request.userId = c.userId;
  c.tenantId = "pretend"; c.userId = "pretend";
  try { await ctx.tools.readMemory(c.id); } catch(e) {}
  await ctx.tools.askHuman("禁止读取");
}
${FALSE}`, (s) => {
  assert.equal(s.stats.scope, 5); assert.equal(s.stats.aborted, 0);
  for (const r of s.runs) { assert.deepEqual(r.request, pick('scope', r.index).request); assert.equal(r.otherOwnersUnchanged, true); }
}, group('scope'));
await codeTest('失效证据允许读取，未寄出不会触发wrong', `
export async function onRecall(ctx) { await ctx.tools.readMemory(ctx.candidates[0].id); }
${FALSE}`, (s) => {
  assert.equal(s.stats.wrong, 0); assert.equal(s.passed, true); assert.equal(s.stats.correct, 0);
}, group('stale'));
for (let index = 0; index < 5; index++) await codeTest(`过期防线：即使地址猜中，${STALE_KINDS[index]}仍不可作为寄送证据`, STARTER, (s) => {
  assert.equal(first(s).gates.wrong, true); assert.equal(first(s).gates.aborted, false);
}, [(() => { const s = pick('stale', index); s.memory[0].address = s.profile.address; return s; })()]);
await codeTest('冲突不能只取首条', STARTER, (s) => {
  assert.equal(s.stats.wrong, 5); assert.equal(s.stats.correct, 0);
}, group('conflict'));
await codeTest('冲突不能只取verifiedAt最新：较新错误和相同时间都可失败', `
export async function onRecall(ctx) {
  const sorted = ctx.candidates.slice().sort((a,b) => b.verifiedAt - a.verifiedAt);
  const e = await ctx.tools.readMemory(sorted[0].id);
  await ctx.tools.useAddress({address:e.address, sourceId:e.sourceId});
}
${TRUE}`, (s) => {
  assert.equal(s.stats.wrong, 5); assert.equal(s.stats.correct, 0);
  assert.equal(s.runs.find((r) => r.index === 3).failed, true);
  assert.equal(s.runs.find((r) => r.index === 3).memory.healthy, false);
}, group('conflict'));
await codeTest('冲突首条恰好正确也不能猜过关，未读取的有效记录仍构成冲突', STARTER, (s) => {
  assert.equal(s.stats.wrong, 5);
  assert.ok(s.runs.every(r => r.rounds.every(x => x.selection.address === x.expectedAddress)));
}, group('conflict').map(s => ({ ...structuredClone(s), memory: structuredClone(s.memory).reverse() })));
await codeTest('篡改候选和evidence不能隐藏冲突，读取正确的第二条仍需核验', `
export async function onRecall(ctx) {
  const e = await ctx.tools.readMemory(ctx.candidates[1].id);
  ctx.candidates.length = 0; ctx.evidence.length = 0;
  await ctx.tools.useAddress({address:e.address,sourceId:e.sourceId});
}
${TRUE}`, (s) => { assert.equal(s.stats.wrong, 5); }, group('conflict'));
await codeTest('权威confirmed可消歧但unknown不能，查询不等于修复记忆', `
export async function onRecall(ctx) {
  const e = await ctx.tools.readMemory(ctx.candidates[1].id);
  await ctx.tools.queryProfile();
  await ctx.tools.useAddress({address:e.address,sourceId:e.sourceId});
}
${TRUE}`, (s) => {
  assert.equal(s.stats.wrong, 1); assert.equal(s.runs.find(r => r.index === 2).gates.wrong, true);
  assert.ok(s.runs.filter(r => r.index !== 2).every(r => !r.failed && !r.correct && !r.memory.healthy));
}, group('conflict'));
await codeTest('查询不能洗白过期来源，即使地址和权威档案相同', `
export async function onRecall(ctx) {
  const e = await ctx.tools.readMemory(ctx.candidates[0].id);
  await ctx.tools.queryProfile();
  await ctx.tools.useAddress({address:e.address,sourceId:e.sourceId});
}
${TRUE}`, (s) => { assert.equal(s.stats.wrong, 5); }, group('stale').map(input => {
  const s = structuredClone(input); s.memory[0].address = s.profile.address; return s;
}));
await codeTest('无selection却宣称完成：所有组wrong', `export async function onRecall(ctx) {}\n${TRUE}`, (s) => {
  assert.equal(s.stats.wrong, 22); assert.equal(s.stats.aborted, 0); assert.equal(s.score, 0);
});
await codeTest('useAddress只是选择，false不会发送也不会隐式纠正', `
export async function onRecall(ctx) { await ctx.tools.useAddress({address:"虚构路999号",sourceId:"fake"}); }
${FALSE}`, (s) => {
  assert.equal(s.stats.wrong, 0); assert.ok(s.runs.every((r) => !r.trace.some((e) => e.anim?.type === 'sent')));
  assert.ok(s.runs.every((r) => r.rounds.every((round) => round.selection.address === '虚构路999号')));
});
await codeTest('猜中实际地址但没读取证据仍wrong，ctx.evidence伪造无效', `
export async function onRecall(ctx) {
  const c = ctx.candidates[0];
  const address = "青禾路" + ctx.request.userId.split("-")[1] + "号";
  ctx.evidence.push({...c,address,sourceId:c.id,scope:"memory"});
  await ctx.tools.useAddress({address,sourceId:c.id});
}
${TRUE}`, (s) => {
  assert.equal(s.stats.wrong, 2); assert.ok(s.runs.every((r) => r.rounds.every((x) => x.evidence.length === 0)));
}, group('happy'));
await codeTest('有override不能忽略它，即使长期地址证据仍有效', STARTER, (s) => {
  for (const r of s.runs) {
    assert.equal(r.gates.wrong, true); assert.deepEqual(r.memory.initial, r.memory.final);
    assert.deepEqual(r.trace.filter((e) => e.anim?.type === 'sent').map((e) => e.anim.ok), [false, true]);
  }
}, group('temporary'));
await codeTest('canComplete按proof而非model：旧证据不寄出', `${STARTER.slice(0, STARTER.indexOf('export function canComplete'))}\n${PROOF}`, (s) => {
  assert.equal(s.stats.wrong, 0); assert.ok(s.runs.every((r) => r.state === 'WAITING_HUMAN'));
}, group('stale'));

await codeTest('临时地址写入长期记忆被拒绝且catch不能清污染gate', `
export async function onRecall(ctx) {
  if (ctx.request.override) {
    try { await ctx.tools.remember(ctx.evidence[0]); } catch(e) {}
  }
  await ctx.tools.askHuman("不写临时地址");
}
${FALSE}`, (s) => {
  assert.equal(s.stats.pollution, 5); assert.equal(s.stats.aborted, 0);
  for (const r of s.runs) { assert.equal(r.rounds.length, 2); assert.deepEqual(r.memory.initial, r.memory.final); }
}, group('temporary'));
await codeTest('模型证据和memory证据不是query receipt，不能remember', `
export async function onRecall(ctx) {
  const receipt = await ctx.tools.readMemory(ctx.candidates[0].id);
  try { await ctx.tools.remember({...receipt,status:"confirmed",scope:"profile"}); } catch(error) {}
  await ctx.tools.askHuman("拒绝非query证据");
}
${FALSE}`, (s) => {
  assert.equal(s.stats.pollution, 2); assert.equal(s.stats.aborted, 0);
  assert.ok(s.runs.every((r) => r.memory.history.length === 0));
}, [pick('stale', 3), pick('happy')]);
await codeTest('伪造、缺字段、跨owner、prototype和getter receipt全部拒绝，不调用getter', `
export async function onRecall(ctx) {
  if (ctx.request.id.endsWith("-2")) { await ctx.tools.askHuman("下一轮仍安全"); return; }
  const real = await ctx.tools.queryProfile();
  const bad = [null, [], {}, Object.create(real), {...real,sourceId:"fake"},
    {...real,address:"假路1号"}, {...real,tenantId:"other"}, {...real,userId:"other"},
    {...real,revision:real.revision+1}, {...real,source:"model"}, {...real,scope:"request"},
    {...real,status:"unknown"}, {...real,verifiedAt:real.verifiedAt+1}, {...real,validUntil:real.validUntil+1}];
  let getterCalls = 0;
  for (const field of ["status","sourceId","address","tenantId","userId","revision","verifiedAt","validUntil","source","scope"]) {
    const missing = {...real}; delete missing[field]; bad.push(missing);
    const getter = {...real}; Object.defineProperty(getter,field,{get(){getterCalls++; return real[field];}}); bad.push(getter);
  }
  for (const input of bad) {
    let rejected = false;
    try { await ctx.tools.remember(input); } catch(e) { rejected = true; }
    if (!rejected) throw new Error("接受了伪造回执");
  }
  if (getterCalls !== 0) throw new Error("执行了输入getter");
  await ctx.tools.askHuman("已拒绝所有坏输入");
}
${FALSE}`, (s) => {
  const r = first(s); assert.equal(r.gates.pollution, true); assert.equal(r.memory.history.length, 0);
  assert.equal(r.gates.aborted, false); assert.equal(r.rounds.length, 2);
  assert.equal(r.gates.wrong, false); assert.deepEqual(r.memory.initial, r.memory.final);
}, [pick('stale')]);
await codeTest('修改真实query回执后保存不会污染ledger或记忆', `
export async function onRecall(ctx) {
  const receipt = await ctx.tools.queryProfile(); receipt.address = "篡改路10号";
  try { await ctx.tools.remember(receipt); } catch(e) {}
  await ctx.tools.askHuman("输入不可信");
}
${FALSE}`, (s) => {
  assert.equal(first(s).gates.pollution, true); assert.equal(first(s).gates.aborted, false);
  assert.deepEqual(first(s).memory.initial, first(s).memory.final);
}, [pick('stale')]);
await codeTest('remember幂等：重复同一profile计费但不生成新版本，返回metadata可再read', `
export async function onRecall(ctx) {
  const receipt = await ctx.tools.queryProfile();
  const a = await ctx.tools.remember(receipt), b = await ctx.tools.remember({...receipt});
  if (a.id !== b.id || "address" in a || "content" in a) throw new Error("descriptor/幂等合同错误");
  const e = await ctx.tools.readMemory(b.id);
  await ctx.tools.useAddress({address:e.address,sourceId:e.sourceId});
}
${PROOF}`, (s) => {
  const r = first(s); assert.equal(r.correct, true); assert.equal(r.businessCalls, 12);
  assert.deepEqual(r.memory.history, r.memory.initial); assert.equal(r.memory.final[0].version, 2);
  assert.equal(r.rounds[0].selection.sourceId, r.rounds[1].selection.sourceId);
}, [pick('stale')]);
await codeTest('remember原子替换冲突记忆，保留两个历史版本且不改其他owner', `
export async function onRecall(ctx) {
  const receipt = await ctx.tools.queryProfile();
  await ctx.tools.remember(receipt);
  await ctx.tools.useAddress({address:receipt.address,sourceId:receipt.sourceId});
}
${PROOF}`, (s) => {
  for (const r of s.runs) {
    assert.equal(r.correct, true); assert.equal(r.otherOwnersUnchanged, true);
    assert.ok(r.memory.final.every((m) => m.tenantId === r.request.tenantId && m.userId === r.request.userId));
    if (r.scenario === 'conflict') { assert.equal(r.memory.final.length, 1); assert.equal(r.memory.history.length, 2); }
  }
}, [pick('conflict'), ...group('scope')]);
await codeTest('所有快照、query/read返回值、remember参数与descriptor和selection均隔离', `
export async function onRecall(ctx) {
  const receipt = await ctx.tools.queryProfile();
  const address = receipt.address, sourceId = receipt.sourceId;
  const saved = await ctx.tools.remember(receipt);
  const read = await ctx.tools.readMemory(saved.id);
  const selection = {address,sourceId};
  await ctx.tools.useAddress(selection);
  ctx.request.id = "fake"; ctx.request.tenantId = "fake"; ctx.request.profileRevision = -1;
  ctx.candidates[0].id = "fake"; ctx.candidates.length = 0;
  ctx.evidence.push({address:"fake"}); ctx.evidence.length = 0;
  ctx.selection = {address:"fake",sourceId:"fake"}; ctx.deadline = -1;
  receipt.address = "fake"; receipt.revision = -1; saved.id = "fake"; saved.tenantId = "fake";
  read.address = "fake"; read.source = "model"; selection.address = "fake"; selection.sourceId = "fake";
}
${PROOF}`, (s) => {
  const r = first(s); assert.equal(r.correct, true); assert.deepEqual(r.request, pick('stale').request);
  assert.ok(!JSON.stringify(r).includes('fake'));
}, [pick('stale')]);
await codeTest('canComplete篡改request/evidence/selection也不能改变实际发送或判定', `
export async function onRecall(ctx) { await ctx.tools.useAddress({address:"假路1号",sourceId:"fake"}); }
export function canComplete(ctx) {
  const c = ctx.candidates[0], address = "青禾路" + ctx.request.userId.split("-")[1] + "号";
  ctx.request.override = {address,sourceId:c.id,scope:"request",requestId:ctx.request.id};
  ctx.selection.address = address; ctx.selection.sourceId = c.id;
  ctx.evidence.push({...c,address,sourceId:c.id,scope:"profile"});
  return true;
}`, (s) => {
  assert.equal(first(s).gates.wrong, true);
  assert.ok(first(s).rounds.every((r) => r.selection.address === '假路1号' && r.evidence.length === 0 && r.request.override === null));
}, [pick('happy')]);
await codeTest('未知id与假对象不能伪装目录record，catch后可安全人工', `
export async function onRecall(ctx) {
  for (const id of ["missing", {...ctx.candidates[0],address:"假路1号"}]) {
    let rejected = false; try { await ctx.tools.readMemory(id); } catch(e) { rejected = true; }
    if (!rejected) throw new Error("假目录被接受");
  }
  await ctx.tools.askHuman("未取到正文");
}
${FALSE}`, (s) => {
  assert.equal(first(s).failed, false); assert.ok(first(s).rounds.every((r) => r.evidence.length === 0));
}, [pick('happy')]);
await codeTest('useAddress拒绝继承/getter参数，不执行其副作用', `
export async function onRecall(ctx) {
  let calls = 0;
  const selection = {address:"假路1号",sourceId:"fake"};
  const getter = {...selection}; Object.defineProperty(getter,"address",{get(){calls++;return selection.address;}});
  for(const input of [Object.create(selection),getter]) {
    try { await ctx.tools.useAddress(input); } catch(e) {}
  }
  if (calls) throw new Error("getter被执行");
}
${FALSE}`, (s) => {
  assert.equal(first(s).failed, false); assert.ok(first(s).rounds.every((r) => r.selection === null));
}, [pick('happy')]);

await codeTest('跨轮query证据不能复用：round2必须实际read/query', `
export async function onRecall(ctx) {
  if (ctx.request.id.endsWith("-1")) {
    const r = await ctx.tools.queryProfile(); await ctx.tools.remember(r);
    await ctx.tools.useAddress({address:r.address,sourceId:r.sourceId}); return;
  }
  const seed = ctx.request.id.split("-")[1];
  await ctx.tools.useAddress({address:"青禾路" + ctx.request.userId.split("-")[1] + "号",sourceId:"profile_"+seed+"_r1"});
}
${TRUE}`, (s) => {
  const r = first(s); assert.equal(r.gates.wrong, true);
  assert.equal(r.rounds[0].evidence.length, 1); assert.equal(r.rounds[1].evidence.length, 0);
  assert.deepEqual(r.trace.filter((e) => e.anim?.type === 'sent').map((e) => e.anim.ok), [true, false]);
}, [pick('stale')]);
await codeTest('旧轮真实query回执的同字段副本不能remember到新轮', `
export async function onRecall(ctx) {
  if(ctx.request.id.endsWith("-1")) {
    const r = await ctx.tools.queryProfile(); await ctx.tools.remember(r); await ctx.tools.askHuman("第一轮"); return;
  }
  const c = ctx.candidates[0], seed = ctx.request.id.split("-")[1];
  try { await ctx.tools.remember({status:"confirmed",sourceId:"profile_"+seed+"_r1",address:"青禾路"+ctx.request.userId.split("-")[1]+"号",tenantId:c.tenantId,userId:c.userId,revision:c.revision,verifiedAt:c.verifiedAt,validUntil:c.validUntil,source:"profile",scope:"profile"}); } catch(e) {}
  await ctx.tools.askHuman("第二轮未重新查询");
}
${FALSE}`, (s) => {
  const r = first(s); assert.equal(r.gates.pollution, true); assert.equal(r.gates.aborted, false);
  assert.equal(r.memory.history.length, 1); assert.equal(r.rounds[1].evidence.length, 0);
}, [pick('stale')]);
await codeTest('ctx没有私有世界/地址正文，onRecall没有done，canComplete没有tools', `
export async function onRecall(ctx) {
  if (ctx.world || ctx.spec || ctx.expected || ctx.trace || ctx.memory || ctx.ledger || ctx.model.says === "done") throw new Error("泄漏私有状态");
  if (ctx.candidates.some(c => "address" in c || "content" in c)) throw new Error("检索元数据泄漏正文");
  if (ctx.selection !== null || ctx.now() >= ctx.request.at || ctx.deadline !== 180) throw new Error("快照/时钟合同错误");
  if (ctx.evidence.length !== (ctx.request.override ? 1 : 0)) throw new Error("证据跨轮泄漏");
}
export function canComplete(ctx) { if(ctx.tools !== null || ctx.model.says !== "done") throw new Error("完成合同错误"); return false; }`, (s) => {
  assert.equal(s.passed, true); assert.equal(s.stats.aborted, 0);
});
await codeTest('每个hook都新实例：顶层变量在canComplete及下一轮清空', `let calls = 0;\n${REFERENCE
  .replace('export async function onRecall(ctx) {', 'export async function onRecall(ctx) {\n  if (++calls !== 1) throw new Error("非新实例");')
  .replace('export function canComplete(ctx) {', 'export function canComplete(ctx) {\n  if (calls !== 0 || ctx.tools !== null) throw new Error("完成实例未清空");')}`, (s) => {
  assert.equal(s.score, 100); assert.deepEqual(s, referenceSummary);
});
await codeTest('错误依赖顶层完成标记：不会跨hook保存，不能满分', `let done = false;\n${REFERENCE
  .replace('export async function onRecall(ctx) {', 'export async function onRecall(ctx) {\n  done = true;')
  .replace('export function canComplete(ctx) {', 'export function canComplete(ctx) {\n  if (!done) return false;')}`, (s) => {
  assert.equal(s.passed, true); assert.equal(s.stats.correct, 1); assert.equal(s.score, 71);
});
await codeTest('预算60次含零成本useAddress，catch不能继续触发query或remember', `
export async function onRecall(ctx) {
  for(let i=0;i<70;i++) { try { await ctx.tools.useAddress({address:"假路1号",sourceId:"fake"}); } catch(e) {} }
  try { await ctx.tools.queryProfile(); } catch(e) {}
  try { await ctx.tools.askHuman("预算以后"); } catch(e) {}
}
${FALSE}`, (s) => {
  const r = first(s); assert.equal(r.gates.aborted, true); assert.equal(r.toolCalls, 60); assert.equal(r.businessCalls, 0);
  assert.equal(r.abortKind, 'budget'); assert.equal(r.rounds.length, 1);
  assert.equal(r.trace.filter((e) => e.anim?.type === 'query').length, 0);
}, [pick('happy')]);
await codeTest('两轮共享60调用预算而非每轮重置', `
export async function onRecall(ctx) { for(let i=0;i<31;i++) { try { await ctx.tools.readMemory(ctx.candidates[0].id); } catch(e) {} } }
${FALSE}`, (s) => {
  const r = first(s); assert.equal(r.gates.aborted, true); assert.equal(r.businessCalls, 60); assert.equal(r.toolCalls, 60);
  assert.deepEqual(r.rounds.map((r) => r.evidence.length), [31, 29]); assert.equal(r.rounds.length, 2);
}, [pick('happy')]);
await codeTest('180秒期限副作用前检查，跨轮共享且catch不绕过', `
export async function onRecall(ctx) {
  try { await ctx.tools.readMemory(ctx.candidates[0].id); } catch(e) {}
  try { await ctx.tools.queryProfile(); } catch(e) {}
}
${FALSE}`, (s) => {
  const r = first(s); assert.equal(r.gates.aborted, true); assert.equal(r.endAt, 180); assert.equal(r.abortKind, 'deadline');
  assert.equal(r.rounds.length, 2); assert.equal(r.rounds[1].evidence.length, 0); assert.equal(r.businessCalls, 4);
}, [{ ...pick('happy'), readSeconds: 100 }]);
await codeTest('remember超过期限不产生历史/存储副作用', `
export async function onRecall(ctx) {
  const r = await ctx.tools.queryProfile();
  try { await ctx.tools.remember(r); } catch(e) {}
  try { await ctx.tools.remember(r); } catch(e) {}
}
${FALSE}`, (s) => {
  const r = first(s); assert.equal(r.gates.aborted, true); assert.equal(r.endAt, 180);
  assert.deepEqual(r.memory.initial, r.memory.final); assert.equal(r.memory.history.length, 0);
}, [{ ...pick('stale'), rememberSeconds: 180 }]);
await codeTest('askHuman后不许工具继续，catch仍aborted且不查询', `
export async function onRecall(ctx) {
  await ctx.tools.askHuman("本轮结束");
  try { await ctx.tools.queryProfile(); } catch(e) {}
}
${FALSE}`, (s) => {
  const r = first(s); assert.equal(r.gates.aborted, true); assert.equal(r.abortKind, 'after-human');
  assert.equal(r.businessCalls, 0); assert.equal(r.rounds.length, 1);
}, [pick('happy')]);
await test('回调结束旧工具关闭：不能在下一轮或run结束后修改记忆', async () => {
  for (const compiler of [compileHarness, (code) => compileSandboxed(code, Sval)]) {
    const old = [], load = compiler(NOOP);
    const r = await runOne(pick('happy'), () => {
      const hooks = load(), original = hooks.onRecall;
      hooks.onRecall = async (ctx) => {
        if (old.length) await assert.rejects(old[0].queryProfile(), /旧工具/);
        old.push(ctx.tools); return original(ctx);
      };
      return hooks;
    }, { hangMs: HANG_MS });
    assert.equal(r.failed, false); assert.equal(r.businessCalls, 0);
    await assert.rejects(old[0].readMemory(pick('happy').memory[0].id), /旧工具/);
    await assert.rejects(old[1].queryProfile(), /旧工具/);
    assert.equal(r.trace.filter((e) => e.anim?.type === 'query').length, 0);
  }
});
await codeTest('未await工具拒绝不会unhandled，scope gate仍保留', `
export async function onRecall(ctx) { ctx.tools.readMemory(ctx.candidates[0].id); await ctx.tools.askHuman("忽略了promise"); }
${FALSE}`, (s) => { assert.equal(first(s).gates.scope, true); assert.equal(first(s).gates.aborted, false); }, [pick('scope')]);
await codeTest('Proxy descriptor重入转人工不能在验证后继续写记忆', `
export async function onRecall(ctx) {
  const receipt = await ctx.tools.queryProfile();
  let stopped = false;
  const proxy = new Proxy(receipt, {getOwnPropertyDescriptor(target,key) {
    if (!stopped) { stopped = true; ctx.tools.askHuman("验证途中结束"); }
    return Object.getOwnPropertyDescriptor(target,key);
  }});
  try { await ctx.tools.remember(proxy); } catch(error) {}
}
${FALSE}`, (s) => {
  const r = first(s); assert.equal(r.gates.aborted, true); assert.equal(r.abortKind, 'after-human');
  assert.deepEqual(r.memory.initial, r.memory.final); assert.equal(r.memory.history.length, 0);
}, [pick('stale')]);
await codeTest('Proxy descriptor重入耗尽预算不能在catch后提交selection', `
export async function onRecall(ctx) {
  let entered = false;
  const proxy = new Proxy({address:"假路1号",sourceId:"fake"}, {getOwnPropertyDescriptor(target,key) {
    if (!entered) {
      entered = true;
      for(let i=0;i<65;i++) ctx.tools.useAddress({address:"前次选择路1号",sourceId:"previous"});
    }
    return Object.getOwnPropertyDescriptor(target,key);
  }});
  try { await ctx.tools.useAddress(proxy); } catch(error) {}
}
${FALSE}`, (s) => {
  const r = first(s); assert.equal(r.gates.aborted, true); assert.equal(r.abortKind, 'budget');
  assert.equal(r.rounds[0].selection.address, '前次选择路1号'); assert.equal(r.toolCalls, 60);
}, [pick('happy')]);
await test('guard超时关闭悬挂回调，延迟恢复不能在返回后发起工具副作用', async () => {
  for (const compiler of [compileHarness, (code) => compileSandboxed(code, Sval)]) {
    let resume, finished;
    const waiting = new Promise((resolve) => { resume = resolve; });
    const load = compiler(NOOP);
    const r = await runOne(pick('happy'), () => {
      const hooks = load();
      hooks.onRecall = async (ctx) => {
        await waiting;
        await assert.rejects(ctx.tools.queryProfile(), /旧工具/);
        finished = true;
      };
      return hooks;
    }, {hangMs:HANG_MS});
    const before = structuredClone(r);
    assert.equal(r.gates.aborted, true); resume();
    await new Promise((resolve) => setImmediate(resolve));
    assert.equal(finished, true); assert.deepEqual(r, before);
  }
});
await codeTest('第二轮TTL恰好过期：第一轮发送成功不等于第二轮证据仍有效', STARTER, (s) => {
  const r = first(s); assert.equal(r.gates.wrong, true);
  assert.deepEqual(r.trace.filter((e) => e.anim?.type === 'sent').map((e) => e.anim.ok), [true, false]);
}, [(() => { const s = pick('happy'); s.memory[0].validUntil = s.request.at + 60; return s; })()]);

for (const hook of ['onRecall', 'canComplete']) await codeTest(`${hook}挂起Promise由guard超时，Node有界返回`, `
export async function onRecall(ctx) { ${hook === 'onRecall' ? 'await new Promise(() => {});' : ''} }
export async function canComplete(ctx) { ${hook === 'canComplete' ? 'await new Promise(() => {});' : 'return false;'} }`, (s) => {
  assert.equal(first(s).gates.aborted, true); assert.equal(first(s).stateReason, `${hook} 一直没有返回`);
}, [pick('happy')]);
await test('loadHooks挂起也受guard保护', async () => {
  const r = await runOne(pick('happy'), () => new Promise(() => {}), { hangMs: HANG_MS });
  assert.equal(r.gates.aborted, true); assert.equal(r.stateReason, '玩家代码加载一直没有返回');
});
for (const name of ['setTimeout', 'setInterval', 'requestAnimationFrame', 'setImmediate', 'queueMicrotask']) await codeTest(`禁用原生调度器${name}`, `
export async function onRecall(ctx) { ${name}(() => {}, 1); }
${FALSE}`, (s) => { assert.equal(first(s).gates.aborted, true); }, [pick('happy')]);
await test('Sval全局别名也不能恢复原生计时器', async () => {
  const code = `export async function onRecall(ctx) {
    for(const name of ["setTimeout","setInterval","requestAnimationFrame","setImmediate","queueMicrotask"])
      if(globalThis[name] !== undefined || self[name] !== undefined || window[name] !== undefined) throw new Error("计时器泄漏");
  }\n${FALSE}`;
  const r = await runOne(pick('happy'), compileSandboxed(code, Sval), { hangMs: HANG_MS });
  assert.equal(r.failed, false);
});
for (const [name, code, reason] of [
  ['缺onRecall', FALSE, '没有找到 onRecall 函数'],
  ['缺canComplete', 'export async function onRecall(ctx) {}', '没有找到 canComplete 函数'],
  ['onRecall异常', `export async function onRecall(ctx) { throw new Error("boom"); }\n${FALSE}`, 'onRecall 执行异常'],
  ['canComplete异常', 'export async function onRecall(ctx) {}\nexport function canComplete(ctx) { throw new Error("boom"); }', 'canComplete 执行异常'],
  ['解析错误', 'export async function onRecall(ctx) {', '玩家代码无法加载'],
  ['顶层异常', `throw new Error("boom");\n${NOOP}`, '玩家代码无法加载'],
]) await codeTest(`${name}统一aborted`, code, (s) => {
  assert.equal(first(s).gates.aborted, true); assert.equal(first(s).stateReason, reason);
}, [pick('happy')]);
for (const value of ['undefined', 'null', '1', '"true"', '{}', '[]', 'new Boolean(false)']) await codeTest(`canComplete非boolean ${value}必须aborted`, `
export async function onRecall(ctx) {}
export function canComplete(ctx) { return ${value}; }`, (s) => {
  assert.equal(first(s).gates.aborted, true); assert.equal(first(s).stateReason, 'canComplete 必须返回 true 或 false');
}, [pick('happy')]);
await codeTest('两轮都必须有onRecall，happy也不可省略', FALSE, (s) => { assert.equal(s.stats.aborted, 22); });
await codeTest('askHuman跳过canComplete，即便未定义完成hook也正常结束', 'export async function onRecall(ctx) { await ctx.tools.askHuman("安全暂停"); }', (s) => {
  assert.equal(s.stats.aborted, 0); assert.equal(s.score, 71);
});
await test('相同输入runAll完整确定；公开seed变化后Native/Sval仍100分', async () => {
  const a = await runAll(compileHarness(REFERENCE), { hangMs: HANG_MS });
  const b = await runAll(compileHarness(REFERENCE), { seedBase: PUBLIC_SEED, hangMs: HANG_MS });
  assert.deepEqual(a, b); assert.deepEqual(a, referenceSummary);
  const c = await compare(REFERENCE, makeSpecs(2027));
  assert.equal(c.score, 100); assert.deepEqual(c.byScenario, a.byScenario); assert.notDeepEqual(c.runs, a.runs);
});
await test('评分公式：四道sticky gate一票否决，平均额外4成本扣尽调用分', () => {
  assert.equal(summarize([]).score, 0);
  const good = referenceSummary.runs;
  assert.equal(summarize(good).score, 100);
  assert.equal(summarize(good.map((r) => ({ ...r, correct: false }))).score, 70);
  assert.deepEqual(summarize(good.map((r) => ({ ...r, extraCalls: 2 }))).parts, { base: 60, outcome: 30, calls: 5 });
  assert.equal(summarize(good.map((r) => ({ ...r, extraCalls: 4 }))).score, 90);
  assert.equal(summarize(good.map((r) => ({ ...r, extraCalls: 9 }))).score, 90);
  for (const gate of ['scope', 'pollution', 'wrong', 'aborted']) {
    const runs = structuredClone(good); runs[0].gates[gate] = true; runs[0].failed = true;
    const s = summarize(runs); assert.equal(s.score, 0); assert.equal(s.stats[gate], 1);
    assert.deepEqual(s.failedBy[gate], ['stale']); assert.deepEqual(s.parts, { base: 0, outcome: 0, calls: 0 });
  }
});
await test('classic Worker契约：导入Sval/sim，生产不用native，成功/编译/运行错误返回', async () => {
  const text = readFileSync(new URL('../worker.js', import.meta.url), 'utf8');
  const imports = [], messages = [];
  const self = { ChallengeSim: { compileSandboxed: (code) => compileSandboxed(code, Sval), runAll } };
  self.postMessage = (message) => messages.push(message);
  const context = vm.createContext({ self, importScripts: (...paths) => imports.push(...paths) });
  vm.runInContext(text, context, { timeout: 1000 });
  assert.deepEqual(imports, ['sval.min.js', 'sim.js']);
  assert.doesNotMatch(text, /compileHarness|new Function/);
  await self.onmessage({ data: { code: REFERENCE, seedBase: PUBLIC_SEED } });
  assert.equal(messages[0].ok, true); assert.deepEqual(messages[0].summary, referenceSummary);
  await self.onmessage({ data: { code: 'export function onRecall(' } });
  assert.equal(messages[1].ok, false); assert.equal(messages[1].kind, 'compile');
  self.ChallengeSim.runAll = async () => { throw new Error('模拟运行失败'); };
  await self.onmessage({ data: { code: NOOP } });
  assert.equal(messages[2].ok, false); assert.equal(messages[2].kind, 'runtime');
});
await test('内存构建classic sim.js：禁止动态编译仍可Sval运行，完整结果一致', async () => {
  const names = [];
  const body = ['engine.js', 'sandbox.js'].map((file) => readFileSync(new URL('../' + file, import.meta.url), 'utf8').replace(
    /^export\s+(const|let|function|async\s+function)\s+([A-Za-z_$][\w$]*)/gm,
    (_, kind, name) => { names.push(name); return `${kind} ${name}`; },
  )).join('\n');
  const context = vm.createContext({ self: {}, Sval, setTimeout, clearTimeout }, { codeGeneration: { strings: false, wasm: false } });
  vm.runInContext(`(function(root){"use strict";\n${body}\nroot.ChallengeSim={${names.join(',')}};})(self);`, context, { timeout: 1000 });
  const sim = context.self.ChallengeSim;
  const summary = await sim.runAll(sim.compileSandboxed(REFERENCE), {hangMs:HANG_MS});
  // Worker postMessage 也会 structured clone；不删减任何字段，仅跨 realm 复制。
  assert.deepEqual(structuredClone(summary), referenceSummary);
});
await test('不存在未处理工具promise拒绝', async () => {
  await new Promise((resolve) => setImmediate(resolve));
  assert.deepEqual(unhandled, []);
});
console.log(`\n${tests - failures}/${tests} 用例通过；${comparedRuns} 组 Native/Sval 完整 deepEqual。`);
console.log(`REFERENCE=${referenceSummary?.score}，STARTER=${starterSummary?.score}。`);
process.exitCode = failures ? 1 : 0;
