// 第 02 关：任务中断，如何优化？浏览器 Worker 与 Node 使用同一模拟器。
export const LEVEL = { id: '02-resume', version: 1 };
export const DEADLINE = 180;
export const CALL_BUDGET = 60;
export const PUBLIC_SEED = 2026;
export const SCENARIOS = [
  { id: 'saved', no: '①', name: '进度已保存', hint: '发布已经完成，只需通知团队' },
  { id: 'gap', no: '②', name: '结果还没记下', hint: '先确认没有回执的执行结果' },
  { id: 'repeated', no: '③', name: '恢复途中又中断', hint: '进程会连续崩溃两次' },
  { id: 'changed', no: '④', name: '权限或任务已变化', hint: '旧进度不能代替当前批准' },
  { id: 'happy', no: '⑤', name: '一切正常', hint: '固定 Agent 已完成，不要新增动作' },
];
const STEPS = [
  { id: 'draft', label: '生成报告' },
  { id: 'publish', label: '发布报告' },
  { id: 'notify', label: '通知团队' },
];
const round = (n) => Math.round(n * 10) / 10;
const copyReceipt = (r) => ({ stepId: r.stepId, revision: r.revision, receiptId: r.receiptId, status: r.status });
const copyCheckpoint = (c) => ({ revision: c.revision, completed: c.completed.map(copyReceipt) });
function hash(s) {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); }
  return h >>> 0;
}
function rng(seed) {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = Math.imul(a ^ (a >>> 15), a | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
// 切点发生在真正的工具调用中；保存前/后与执行前/后是不同的持久性边界。
const CRASH_PLANS = [
  [{ tool: 'runStep', stepId: 'publish', at: 'before' }, { tool: 'runStep', stepId: 'publish', at: 'after' }],
  [{ tool: 'runStep', stepId: 'publish', at: 'after' }, { tool: 'saveCheckpoint', stepId: 'publish', at: 'before' }],
  [{ tool: 'saveCheckpoint', stepId: 'publish', at: 'after' }, { tool: 'runStep', stepId: 'notify', at: 'before' }],
  [{ tool: 'runStep', stepId: 'notify', at: 'after' }, { tool: 'saveCheckpoint', stepId: 'notify', at: 'before' }],
  [{ tool: 'saveCheckpoint', stepId: 'publish', at: 'before' }, { tool: 'saveCheckpoint', stepId: 'notify', at: 'after' }],
];
export function makeSpecs(seedBase = PUBLIC_SEED) {
  const specs = [];
  for (const scenario of SCENARIOS) {
    for (let index = 0; index < (scenario.id === 'happy' ? 2 : 5); index++) {
      const seed = hash(`${seedBase}:${scenario.id}:${index}`);
      const random = rng(seed);
      const oldRevision = 1 + Math.floor(random() * 4);
      const changedRevision = scenario.id === 'changed' && index % 2 === 0;
      const revision = oldRevision + (changedRevision ? 1 + Math.floor(random() * 2) : 0);
      const spec = {
        scenario: scenario.id, index, seed: seed.toString(16).padStart(8, '0'),
        task: { id: 'REPORT-' + (1000 + Math.floor(random() * 9000)), revision, publishAllowed: scenario.id !== 'changed', steps: STEPS.map((s) => ({ ...s })) },
        oldRevision,
        initialCompleted: scenario.id === 'happy' ? 3 : scenario.id === 'changed' ? 2 + index % 2 : scenario.id === 'saved' ? 2 : 1,
        stepSeconds: round(2 + random() * 2), inspectSeconds: round(1 + random() * 0.5),
        saveSeconds: 0.4, restartDelay: round(8 + random() * 8),
        expected: scenario.id === 'changed' || (scenario.id === 'gap' && index === 2) ? 'WAITING_HUMAN' : 'COMPLETED',
        optimalCalls: scenario.id === 'saved' ? 1 : scenario.id === 'gap' ? [2, 3, 1, 2, 3][index] : scenario.id === 'repeated' ? [5, 4, 4, 4, 2][index] : 0,
      };
      if (scenario.id === 'gap') spec.gapStatus = ['succeeded', 'not_found', 'unknown', 'succeeded', 'not_found'][index];
      if (scenario.id === 'repeated') spec.crashes = CRASH_PLANS[index].map((c) => ({ ...c }));
      specs.push(spec);
    }
  }
  return specs;
}
class Crash extends Error { constructor() { super('实例已崩溃'); } }
class Abort extends Error {}

// loadHooks 每次创建全新玩家实例。实际结果、工具 intent、checkpoint 在实例外持久化。
export async function runOne(spec, loadHooks, opts = {}) {
  const hangMs = Number.isFinite(opts.hangMs) ? Math.max(1, opts.hangMs) : 200;
  const task = { id: spec.task.id, revision: spec.task.revision, publishAllowed: spec.task.publishAllowed, steps: STEPS.map((s) => ({ ...s })) };
  const sc = spec.scenario;
  let now = 0, receiptSeq = 0, toolCalls = 0, businessCalls = 0, restarts = 0, crashIndex = 0;
  let checkpoint = { revision: spec.oldRevision, completed: [] };
  let aborted = null, escalated = null, state = 'RUNNING', stateReason = '';
  let duplicate = false, unsafe = false;
  const trace = [], executed = [], attempts = [];
  const outcomes = new Map(); // revision/step -> 实际结果，绝不传入 ctx
  const receipts = new Map(); // receiptId -> 权威回执，绝不传入 ctx
  const confirmedAbsent = new Set(); // inspect(not_found) 确认过的 intent
  const key = (stepId, revision = task.revision) => `${revision}:${stepId}`;
  const log = (phase, text, extra = {}) => trace.push({ t: round(now), phase, text, ...extra });
  function stop(kind, message) {
    if (!aborted) {
      aborted = { kind, message };
      log('HARNESS', message, { chip: 'bad', chipText: '中止' });
    }
    return new Abort(aborted.message);
  }
  function advance(seconds) {
    if (!(seconds >= 0) || !Number.isFinite(seconds)) throw stop('duration', '模拟工具时长无效');
    if (now + seconds > DEADLINE) { now = DEADLINE; throw stop('deadline', `超过 ${DEADLINE}s 模拟期限`); }
    now = round(now + seconds);
  }
  function actualRun(stepId, revision) {
    const step = STEPS.find((s) => s.id === stepId);
    const repeated = outcomes.has(key(stepId, revision));
    if (repeated) duplicate = true;
    const receipt = { stepId, revision, receiptId: `rc_${spec.seed}_${++receiptSeq}`, status: 'succeeded' };
    outcomes.set(key(stepId, revision), receipt);
    receipts.set(receipt.receiptId, receipt);
    executed.push({ stepId, revision, receiptId: receipt.receiptId });
    log('WORLD', `${step.label}成功 · revision=${revision} · ${receipt.receiptId}${repeated ? '（重复执行）' : ''}`, {
      world: true, chip: repeated ? 'bad' : 'ok', chipText: repeated ? '重复执行' : '实际成功',
      anim: { type: 'step', stepId, label: step.label, revision, duplicate: repeated },
    });
    return receipt;
  }
  function checkpointLog(by) {
    const completed = checkpoint.completed.map((r) => r.stepId);
    log('OBSERVE', `${by}保存 checkpoint · revision=${checkpoint.revision} · completed=[${completed.join(', ')}]`, {
      chip: 'ok', chipText: '已持久保存', anim: { type: 'checkpoint', revision: checkpoint.revision, completed },
    });
  }
  const snapshot = () => ({
    task: { ...task, steps: task.steps.map((s) => ({ ...s })) },
    checkpoint: copyCheckpoint(checkpoint),
    attempts: attempts.map((a) => ({ stepId: a.stepId, revision: a.revision, result: a.result ? copyReceipt(a.result) : null })),
    deadline: DEADLINE,
  });
  const realReceipt = (r, revision) => {
    if (!r || typeof r !== 'object' || Array.isArray(r)) return false;
    if (!['stepId', 'revision', 'receiptId', 'status'].every((f) => Object.prototype.hasOwnProperty.call(r, f))) return false;
    if (typeof r.stepId !== 'string' || r.revision !== revision || typeof r.receiptId !== 'string' || r.status !== 'succeeded') return false;
    const real = receipts.get(r.receiptId);
    return !!real && real.stepId === r.stepId && real.revision === revision && real.status === r.status;
  };
  function validateCheckpoint(input) {
    // 只读取一次自有数据字段，避免 getter 在校验与复制之间偷换版本或回执。
    const data = (object, field) => {
      if (!object || typeof object !== 'object') throw new Error('checkpoint 字段无效');
      const descriptor = Object.getOwnPropertyDescriptor(object, field);
      if (!descriptor || !Object.prototype.hasOwnProperty.call(descriptor, 'value')) throw new Error('checkpoint 缺少数据字段');
      return descriptor.value;
    };
    if (!input || typeof input !== 'object' || Array.isArray(input)) throw new Error('checkpoint 格式无效');
    const revision = data(input, 'revision'), source = data(input, 'completed');
    if (!Number.isSafeInteger(revision) || revision !== task.revision || !Array.isArray(source) || source.length > STEPS.length) throw new Error('checkpoint 格式或版本无效');
    const seen = new Set(), completed = [];
    for (const raw of source) {
      const r = { stepId: data(raw, 'stepId'), revision: data(raw, 'revision'), receiptId: data(raw, 'receiptId'), status: data(raw, 'status') };
      if (!realReceipt(r, task.revision) || !STEPS.some((s) => s.id === r.stepId) || seen.has(r.stepId)) throw new Error('checkpoint 包含伪造、重复、跨版本或不完整回执');
      seen.add(r.stepId);
      completed.push(r);
    }
    return { revision, completed };
  }

  // 固定 Agent 的前置动作不计入玩家业务调用；happy 不调用 onResume。
  log('PREPARE', `报告任务 ${task.id} · draft → publish → notify`);
  const prepared = [];
  for (let i = 0; i < spec.initialCompleted; i++) {
    const stepId = STEPS[i].id;
    log('MODEL', `固定 Agent：${STEPS[i].label}`);
    log('ACT', `Agent runStep(${stepId})`);
    const receipt = actualRun(stepId, spec.oldRevision);
    attempts.push({ stepId, revision: spec.oldRevision, result: copyReceipt(receipt) });
    prepared.push(copyReceipt(receipt));
    now = round(now + 0.4);
    log('OBSERVE', `Agent 收到 ${receipt.receiptId}`);
  }
  checkpoint = { revision: spec.oldRevision, completed: prepared };
  checkpointLog('Agent ');
  if (sc === 'gap') {
    attempts.push({ stepId: 'publish', revision: task.revision, result: null });
    log('ACT', 'Agent runStep(publish) · intent 已持久化，回执未收到', { chip: 'wait', chipText: '结果未知' });
    if (spec.gapStatus !== 'not_found') actualRun('publish', task.revision);
    log('WORLD', spec.gapStatus === 'not_found' ? '发布尚未发生，请求在实际执行前丢失' : spec.gapStatus === 'unknown' ? '发布已发生，但权威查询在本次截止期限内不可用' : '发布已经发生，但结果未记入 checkpoint', { world: true });
  }
  if (sc === 'changed') {
    log('WORLD', `交接前权限已撤销${task.revision !== spec.oldRevision ? `，任务由 revision=${spec.oldRevision} 改为 ${task.revision}` : ''}`, { world: true });
  }
  let reason = sc === 'happy' ? 'start' : 'restart';

  async function guarded(promise) {
    let timer;
    const timeout = new Promise((resolve) => { timer = setTimeout(() => resolve({ hang: true }), hangMs); });
    try { return await Promise.race([Promise.resolve(promise).then((value) => ({ value })), timeout]); }
    finally { clearTimeout(timer); }
  }
  function maybeCrash(instance, tool, stepId, at) {
    const cut = (spec.crashes || [])[crashIndex];
    if (!cut || cut.tool !== tool || cut.stepId !== stepId || cut.at !== at) return;
    crashIndex++;
    instance.dead = true;
    log('WORLD', `进程第 ${crashIndex} 次崩溃 · ${tool}(${stepId}) ${at === 'before' ? '实际操作前' : '实际操作后、回执返回前'}`, {
      world: true, anim: { type: 'crash' }, chip: 'wait', chipText: '实例丢失',
    });
    throw new Crash();
  }
  function makeTools(instance) {
    function pre(name, seconds) {
      if (instance.dead) throw new Crash();
      if (instance.closed) throw new Abort('实例已经结束，旧工具不可使用');
      if (aborted) throw new Abort(aborted.message);
      if (escalated !== null) throw stop('after-human', '已经转人工，不能继续调用工具');
      toolCalls++;
      if (toolCalls > CALL_BUDGET) throw stop('budget', `工具调用超过 ${CALL_BUDGET} 次`);
      if (name === 'runStep' || name === 'inspectStep') businessCalls++;
      advance(seconds);
    }
    function validStep(stepId) {
      if (!STEPS.some((s) => s.id === stepId)) { unsafe = true; throw new Error('不能操作任务以外的步骤'); }
    }
    const methods = {
      async runStep(stepId) {
        pre('runStep', spec.stepSeconds);
        validStep(stepId);
        const index = STEPS.findIndex((s) => s.id === stepId);
        if ((stepId !== 'draft' && !task.publishAllowed) || STEPS.slice(0, index).some((s) => !outcomes.has(key(s.id)))) {
          unsafe = true;
          log('HARNESS', `拒绝 runStep(${stepId})：当前授权不足或前序步骤未完成`, { chip: 'bad', chipText: '越权 / 错序' });
          throw new Error('当前授权不足或步骤顺序错误');
        }
        // 没有回执的旧 intent 必须先查清。runStep 不是幂等接口，不能拿它当查询。
        if (attempts.some((a, i) => a.stepId === stepId && a.revision === task.revision && a.result === null && !confirmedAbsent.has(i))) {
          unsafe = true;
          log('HARNESS', `runStep(${stepId}) 在旧执行结果未确认时盲目重做`, { chip: 'bad', chipText: '结果未知仍执行' });
        }
        const attempt = { stepId, revision: task.revision, result: null };
        attempts.push(attempt);
        log('ACT', `runStep(${stepId}) · revision=${task.revision} · intent 已持久化`, { chip: 'sent', chipText: '执行' });
        maybeCrash(instance, 'runStep', stepId, 'before');
        const receipt = actualRun(stepId, task.revision);
        maybeCrash(instance, 'runStep', stepId, 'after');
        attempt.result = copyReceipt(receipt);
        log('OBSERVE', `收到执行回执 ${receipt.receiptId}`, { chip: 'ok', chipText: '已确认' });
        return copyReceipt(receipt);
      },
      async inspectStep(stepId) {
        pre('inspectStep', spec.inspectSeconds);
        validStep(stepId);
        log('ACT', `inspectStep(${stepId}) · revision=${task.revision}`, { chip: 'sent', chipText: '查权威结果' });
        let result;
        if (sc === 'gap' && spec.gapStatus === 'unknown' && stepId === 'publish') result = { stepId, revision: task.revision, status: 'unknown' };
        else {
          const real = outcomes.get(key(stepId));
          result = real ? copyReceipt(real) : { stepId, revision: task.revision, status: 'not_found' };
          if (!real) attempts.forEach((a, i) => { if (a.stepId === stepId && a.revision === task.revision && a.result === null) confirmedAbsent.add(i); });
        }
        log('OBSERVE', `查询 ${stepId}：${result.status}${result.receiptId ? ` · ${result.receiptId}` : ''}`, {
          chip: result.status === 'succeeded' ? 'ok' : 'wait', chipText: result.status === 'unknown' ? '仍不确定' : result.status === 'not_found' ? '确认未执行' : '确认成功',
          anim: { type: 'inspect', stepId, status: result.status },
        });
        return result;
      },
      async saveCheckpoint(input) {
        pre('saveCheckpoint', spec.saveSeconds);
        // 先校验并复制：后续修改传入对象或返回值都不能改持久存储。
        let next;
        try { next = validateCheckpoint(input); }
        catch (error) {
          log('HARNESS', `saveCheckpoint 拒绝保存：${error.message}`, { chip: 'bad', chipText: '进度格式错误' });
          throw error;
        }
        const lastStep = next.completed.length ? next.completed[next.completed.length - 1].stepId : null;
        log('ACT', `saveCheckpoint · completed=[${next.completed.map((r) => r.stepId).join(', ')}]`);
        maybeCrash(instance, 'saveCheckpoint', lastStep, 'before');
        checkpoint = next;
        checkpointLog('Harness ');
        maybeCrash(instance, 'saveCheckpoint', lastStep, 'after');
        return copyCheckpoint(checkpoint);
      },
      async askHuman(text) {
        pre('askHuman', 0.1);
        escalated = String(text || '执行结果或批准尚未确认');
        log('HUMAN', `转人工：${escalated}`, { chip: 'wait', chipText: '转人工', anim: { type: 'human', text: escalated } });
      },
    };
    // 即使玩家忘记 await，工具仍持久化 intent；内部处理拒绝，避免丢失回执变成未处理 rejection。
    return Object.fromEntries(Object.entries(methods).map(([name, fn]) => [name, (...args) => {
      const promise = fn(...args);
      promise.catch(() => {});
      return promise;
    }]));
  }
  async function newInstance() {
    try {
      const out = await guarded(loadHooks());
      if (out.hang) { stop('hang', '玩家代码加载一直没有返回'); return null; }
      return { hooks: out.value, dead: false, closed: false };
    } catch (_) { stop('load', '玩家代码无法加载'); return null; }
  }
  async function runHook(instance, name, ctx) {
    try {
      const fn = instance.hooks && instance.hooks[name];
      if (typeof fn !== 'function') { stop('missing', `没有找到 ${name} 函数`); return undefined; }
      const out = await guarded(fn(ctx));
      if (instance.dead || aborted) return undefined;
      if (out.hang) { stop('hang', `${name} 一直没有返回`); return undefined; }
      if (name === 'canComplete' && typeof out.value !== 'boolean') { stop('return', 'canComplete 必须返回 true 或 false'); return undefined; }
      return out.value;
    } catch (_) {
      // 仅引擎设置的 dead 才是进程崩溃；玩家抛出 {crash:true} 不能伪造重启。
      if (!instance.dead && !aborted) stop('exception', `${name} 执行异常`);
      return undefined;
    } finally { instance.closed = true; }
  }
  if (sc !== 'happy') {
    log('RESTART', '中断后交接：重新读取当前任务、checkpoint 和工具 intent', { anim: { type: 'restart' } });
    while (!aborted && escalated === null) {
      const instance = await newInstance();
      if (!instance) break;
      log('HARNESS', `onResume(ctx) · reason=${reason}`);
      await runHook(instance, 'onResume', { ...snapshot(), reason, model: { message: '任务中断了，请继续处理报告' }, now: () => round(now), tools: makeTools(instance) });
      if (!instance.dead || aborted || escalated !== null) break;
      try { advance(spec.restartDelay); } catch (_) { break; }
      restarts++;
      reason = 'restart';
      log('RESTART', `第 ${restarts} 个全新实例接手 · checkpoint=[${checkpoint.completed.map((r) => r.stepId).join(', ')}] · 无回执 intent=${attempts.filter((a) => a.result === null).length}`, { anim: { type: 'restart' } });
      log('MODEL', '固定模型（新实例）：没有上一轮变量，重新读取持久进度');
    }
  }
  const evidenceReady = () => task.publishAllowed && checkpoint.revision === task.revision && STEPS.every((s) =>
    outcomes.has(key(s.id)) && checkpoint.completed.some((r) => r.stepId === s.id && realReceipt(r, task.revision)));
  if (!aborted && escalated === null) {
    log('MODEL', '固定模型：报告任务应该完成了，申请完成');
    const instance = await newInstance();
    if (instance) {
      log('HARNESS', '全新实例 canComplete(ctx) · tools=null');
      const ok = await runHook(instance, 'canComplete', { ...snapshot(), reason, model: { says: 'done' }, now: () => round(now), tools: null });
      if (!aborted) {
        if (ok === true) {
          state = 'COMPLETED';
          log('HARNESS', 'canComplete → true', { chip: evidenceReady() ? 'ok' : 'bad', chipText: evidenceReady() ? '证据完整' : '缺少当前证据' });
          log('DONE', '提交完成：生成、发布并通知团队', { anim: { type: 'done', ok: evidenceReady() } });
        } else {
          escalated = 'Harness 没有确认当前任务完成';
          log('HARNESS', 'canComplete → false', { chip: 'wait', chipText: '不确认' });
          log('HUMAN', `转人工：${escalated}`, { anim: { type: 'human', text: escalated } });
        }
      }
    }
  }
  if (escalated !== null) { state = 'WAITING_HUMAN'; stateReason = escalated; }
  if (aborted) { state = 'ABORTED'; stateReason = aborted.message; }
  const gates = { duplicate, falseClaim: state === 'COMPLETED' && !evidenceReady(), unsafe, aborted: state === 'ABORTED' };
  const failed = Object.values(gates).some(Boolean);
  const expected = spec.expected;
  const correct = !failed && state === expected;
  const extraCalls = Math.max(0, businessCalls - spec.optimalCalls);
  const scenario = SCENARIOS.find((s) => s.id === sc);
  log('SEP', `评分器 · ${scenario.no} ${scenario.name} · 种子 ${spec.seed}`);
  for (const [gate, bad, good] of [
    ['duplicate', '至少一个步骤重复实际执行', '没有步骤重复实际执行'],
    ['falseClaim', '宣称完成但缺少当前授权、实际结果或可信 checkpoint', '没有无证据完成'],
    ['unsafe', '越权、错序或盲目重做未知结果', '没有不安全执行'],
    ['aborted', `任务未正常收尾：${stateReason}`, `终态 ${state}${correct ? '' : `（预期 ${expected}）`}`],
  ]) log('GATE', gates[gate] ? bad : good, { chip: gates[gate] ? 'bad' : 'ok', chipText: gates[gate] ? '一票否决' : '通过' });
  return { scenario: sc, index: spec.index, seed: spec.seed, task: snapshot().task, checkpoint: copyCheckpoint(checkpoint), state, stateReason, expected, correct, gates, failed, businessCalls, extraCalls, endAt: round(now), restarts, trace, executed: executed.map((r) => ({ ...r })) };
}

// 页面只使用公开 seed；没有隐藏场景、隐藏种子或浏览器专用评分分支。
export async function runAll(loadHooks, { seedBase = PUBLIC_SEED, hangMs } = {}) {
  const runs = [];
  for (const spec of makeSpecs(seedBase)) runs.push(await runOne(spec, loadHooks, { hangMs }));
  return summarize(runs);
}
export function summarize(runs) {
  const count = runs.length;
  const passed = count > 0 && !runs.some((r) => r.failed);
  const correct = runs.filter((r) => r.correct).length;
  const avgExtra = count ? runs.reduce((n, r) => n + r.extraCalls, 0) / count : 0;
  const parts = { base: passed ? 60 : 0, outcome: passed ? 30 * correct / count : 0, calls: passed ? 10 * Math.max(0, 1 - avgExtra / 2) : 0 };
  const stats = { runs: count };
  const failedBy = {};
  for (const gate of ['duplicate', 'falseClaim', 'unsafe', 'aborted']) {
    const failed = runs.filter((r) => r.gates[gate]);
    stats[gate] = failed.length;
    failedBy[gate] = [...new Set(failed.map((r) => r.scenario))];
  }
  Object.assign(stats, { correct, avgExtra: round(avgExtra), avgTime: count ? round(runs.reduce((n, r) => n + r.endAt, 0) / count) : 0 });
  const byScenario = {};
  for (const scenario of SCENARIOS) {
    const group = runs.filter((r) => r.scenario === scenario.id);
    byScenario[scenario.id] = { total: group.length, failed: group.filter((r) => r.failed).length, correct: group.filter((r) => r.correct).length };
  }
  return { level: { ...LEVEL }, passed, score: Math.round(parts.base + parts.outcome + parts.calls), parts: Object.fromEntries(Object.entries(parts).map(([name, value]) => [name, round(value)])), stats, failedBy, byScenario, runs };
}

// 仅 Node 本地有界测试使用；生产 Worker 必须用 Sval，不得调用这个编译器。
export function compileHarness(code) {
  const body = String(code).replace(/^\s*export\s+default\s+/gm, '').replace(/^\s*export\s+(async\s+function|function|const|let|var|class)\b/gm, '$1');
  return () => {
    // 这不是生产 sandbox；屏蔽原生计时器以保持工具合同。解析也延迟到 loadHooks，统一加载失败终态。
    const factory = new Function('setTimeout', 'setInterval', 'requestAnimationFrame', `"use strict";\n${body}\n;return { onResume: typeof onResume === "function" ? onResume : undefined, canComplete: typeof canComplete === "function" ? canComplete : undefined };`);
    return factory(undefined, undefined, undefined);
  };
}
