// 第 01 关「Agent 退款超时，如何优化？」：模拟世界、剧本模型与评分器。
// 浏览器（Worker）和 Node 共用这一份代码，所以评分在两边完全一致。

export const LEVEL = { id: '01-refund-timeout', version: 1 };
export const DEADLINE = 180;      // 任务期限（模拟秒）
export const CALL_BUDGET = 40;    // 单次任务里 Harness 最多调用工具次数
export const PUBLIC_SEED = 2026;  // 页面和默认测试共用的固定种子

export const SCENARIOS = [
  { id: 'lost', no: '①', name: '响应丢失', hint: '钱已退，回执没回来' },
  { id: 'dropped', no: '②', name: '真的失败', hint: '请求根本没到银行' },
  { id: 'pending', no: '③', name: '暂时查不到', hint: '银行还在处理' },
  { id: 'restart', no: '④', name: '实例重启', hint: '处理到一半进程挂了' },
  { id: 'happy', no: '⑤', name: '一切正常', hint: '对照组：别把好路走坏' },
];

// 每个场景里，一个合格 Harness 至少要发出的业务调用（refund + queryRefund）次数
const OPTIMAL_CALLS = { happy: 0, lost: 1, dropped: 1, pending: 2, restart: 2 };

function hashStr(s) {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); }
  return h >>> 0;
}
function rng(seed) {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export function makeSpecs(seedBase = PUBLIC_SEED, perScenario = 5) {
  const specs = [];
  for (const s of SCENARIOS) {
    const n = s.id === 'happy' ? 2 : perScenario;
    for (let i = 0; i < n; i++) {
      const seed = hashStr(`${seedBase}:${s.id}:${i}`);
      const r = rng(seed);
      const spec = {
        scenario: s.id,
        index: i,
        seed: seed.toString(16).slice(0, 4),
        order: {
          id: 'R-' + String(1000 + Math.floor(r() * 9000)),
          amount: [99, 129, 199, 299, 358, 499, 1288][Math.floor(r() * 7)],
        },
      };
      if (s.id === 'pending') {
        spec.stuck = i % 3 === 2; // 每 3 组里有 1 组在期限内查不出结果
        spec.resolveAt = spec.stuck ? 300 + Math.round(r() * 120) : 14 + Math.round(r() * 26);
      }
      if (s.id === 'restart') {
        spec.firstLanded = i % 2 === 0;
        spec.restartDelay = 20 + Math.round(r() * 15);
      }
      specs.push(spec);
    }
  }
  return specs;
}

class Crash extends Error { constructor() { super('instance crashed'); this.crash = true; } }
class Abort extends Error { constructor(kind, msg) { super(msg); this.abort = kind; } }

const r1 = (x) => Math.round(x * 10) / 10;
const money = (n) => '¥' + n;

// loadHooks(): 每次调用都返回一份全新的玩家代码实例（模拟一个新进程）
export async function runOne(spec, loadHooks, opts = {}) {
  const hangMs = opts.hangMs ?? 200;
  const rand = rng(hashStr('keys:' + spec.seed + spec.scenario + spec.index));
  const newKey = () => 'idem_' + Math.floor(rand() * 0xffffff).toString(16).padStart(6, '0');
  const order = { ...spec.order };
  let now = 0;
  const trace = [];
  const log = (phase, text, extra = {}) => trace.push({ t: r1(extra.at ?? now), phase, text, ...extra, at: undefined });

  // ---------- 模拟银行 ----------
  const reqs = new Map(); // key -> { key, refundId, resolveAt }
  const credits = [];
  let refundSeq = 0;
  let lastResolve = 0;
  const newRefundId = () => 'rf_' + (8800 + spec.index * 13 + (++refundSeq) * 7);
  function bankStatus(rec) { return rec.resolveAt <= now ? 'succeeded' : 'processing'; }
  function bankReceive(key, resolveAt) {
    if (reqs.has(key)) {
      const rec = reqs.get(key);
      const status = bankStatus(rec);
      return { replay: true, status, refundId: status === 'succeeded' ? rec.refundId : undefined };
    }
    // 同一订单的请求在银行侧串行处理：前一笔没处理完，新的一笔只能排队
    const at = resolveAt ?? Math.max(now, lastResolve > now ? lastResolve + 2 : now);
    lastResolve = Math.max(lastResolve, at);
    const rec = { key, refundId: newRefundId(), resolveAt: at };
    reqs.set(key, rec);
    credits.push({ key, refundId: rec.refundId, at });
    log('WORLD', at <= now ? `银行入账 +${money(order.amount)}（${rec.refundId}）` : `银行已受理 ${rec.refundId}，处理中`, {
      at: now, world: true, anim: at <= now ? { type: 'credit', refundId: rec.refundId } : { type: 'queued' },
    });
    if (at > now) {
      log('WORLD', `银行处理完成，入账 +${money(order.amount)}（${rec.refundId}）`, { at, world: true, anim: { type: 'credit', refundId: rec.refundId }, deferred: true });
    }
    const status = bankStatus(rec);
    return { replay: false, status, refundId: status === 'succeeded' ? rec.refundId : undefined };
  }
  function bankQuery() {
    let processing = false;
    for (const rec of reqs.values()) {
      if (rec.resolveAt <= now) return { status: 'succeeded', refundId: rec.refundId };
      processing = true;
    }
    return { status: processing ? 'processing' : 'not_found' };
  }

  // ---------- 任务存储（在进程之外，重启后还在） ----------
  const attempts = [];
  const evidence = [];
  let state = 'RUNNING';
  let stateReason = '';
  let completedAt = null;
  let businessCalls = 0;
  let toolCalls = 0;
  let aborted = null;
  let escalated = null;

  // 只容忍浮点累加误差，不对正常时间取整；所有耗时都必须在副作用前检查。
  const timeEpsilon = Number.EPSILON * DEADLINE * (CALL_BUDGET + 10);
  function advanceTime(seconds) {
    if (aborted) throw new Abort(aborted.kind, aborted.msg);
    const next = now + seconds;
    if (next - DEADLINE > timeEpsilon) {
      now = DEADLINE;
      aborted = { kind: 'deadline', msg: `超过 ${DEADLINE}s 期限仍没有结论` };
      log('HARNESS', aborted.msg, { chip: 'bad', chipText: '超期' });
      throw new Abort('deadline', aborted.msg);
    }
    now = Math.abs(next - DEADLINE) <= timeEpsilon ? DEADLINE : next;
  }

  const snapshot = () => ({
    order: { ...order },
    attempts: attempts.map((a) => ({ ...a, result: a.result ? { ...a.result } : null })),
    evidence: evidence.map((e) => ({ ...e })),
    deadline: DEADLINE,
  });

  // 第一次退款由 Agent 发出（不在玩家代码里）
  log('PREPARE', `订单 ${order.id} 申请退款 ${money(order.amount)}`);
  log('MODEL', '模型：调用 refund 给客户退款', { model: true });
  advanceTime(0.4);
  const firstKey = newKey();
  attempts.push({ idempotencyKey: firstKey, sentAt: now, by: 'agent', result: null });
  log('ACT', `refund(${order.id}, ${money(order.amount)}) · key=${firstKey}`, { chip: 'sent', chipText: '已发出', anim: { type: 'send' } });

  const sc = spec.scenario;
  let reason = 'timeout';
  if (sc === 'happy') {
    const res = bankReceive(firstKey);
    advanceTime(0.4);
    attempts[0].result = { status: res.status, refundId: res.refundId };
    evidence.push({ at: now, source: 'refund', status: res.status, refundId: res.refundId });
    log('OBSERVE', `200 OK · ${res.refundId}`, { chip: 'ok', chipText: '已确认', anim: { type: 'ack', status: 'succeeded' } });
  } else if (sc === 'lost') {
    bankReceive(firstKey);
    advanceTime(0.6);
    log('WORLD', '回执在网络上丢了（Agent 看不到这一行）', { world: true, anim: { type: 'lost' } });
  } else if (sc === 'dropped') {
    log('WORLD', '请求没到达银行（Agent 看不到这一行）', { world: true, anim: { type: 'drop' } });
  } else if (sc === 'pending') {
    bankReceive(firstKey, spec.resolveAt);
  } else if (sc === 'restart') {
    if (spec.firstLanded) {
      bankReceive(firstKey);
      advanceTime(0.6);
      log('WORLD', '回执在网络上丢了（Agent 看不到这一行）', { world: true, anim: { type: 'lost' } });
    } else {
      log('WORLD', '请求没到达银行（Agent 看不到这一行）', { world: true, anim: { type: 'drop' } });
    }
  }

  async function guarded(p) {
    let timer;
    const hang = new Promise((res) => { timer = setTimeout(() => res({ hang: true }), hangMs); });
    try {
      const v = await Promise.race([Promise.resolve(p).then((value) => ({ value })), hang]);
      return v;
    } finally { clearTimeout(timer); }
  }

  function makeTools(instance) {
    const pre = (name) => {
      if (instance.dead) throw new Crash();
      if (aborted) throw new Abort(aborted.kind, aborted.msg);
      if (escalated && name !== 'askHuman') throw new Abort('after-human', '已经转人工，不能再操作');
      toolCalls++;
      if (toolCalls > CALL_BUDGET) {
        aborted = { kind: 'budget', msg: `工具调用超过 ${CALL_BUDGET} 次` };
        log('HARNESS', `工具调用超过 ${CALL_BUDGET} 次，任务被强行终止`, { chip: 'bad', chipText: '预算耗尽' });
        throw new Abort('budget', aborted.msg);
      }
    };
    const maybeCrash = () => {
      if (instance.crashOnFirstCall) {
        instance.crashOnFirstCall = false;
        instance.dead = true;
        log('WORLD', '实例崩溃，这次调用的回执无人接收', { world: true, anim: { type: 'crash' } });
        throw new Crash();
      }
    };
    return {
      async refund(orderId, amount, options = {}) {
        pre('refund');
        if (orderId !== order.id) throw new Error(`只能退本单 ${order.id}`);
        if (amount !== order.amount) throw new Error(`金额必须与订单一致（${order.amount}）`);
        advanceTime(0.4);
        const key = options && options.idempotencyKey ? String(options.idempotencyKey) : newKey();
        businessCalls++;
        const reused = attempts.some((a) => a.idempotencyKey === key);
        const unresolved = attempts.some((a) => !a.result || a.result.status === 'processing');
        let chip = 'sent', chipText = '已发出';
        if (reused) { chipText = '同键重试'; }
        else if (unresolved && !evidence.some((e) => e.status === 'succeeded' || e.status === 'not_found')) { chip = 'bad'; chipText = '换新键重发'; }
        const att = { idempotencyKey: key, sentAt: r1(now), by: 'harness', result: null };
        attempts.push(att);
        log('ACT', `refund(${orderId}, ${money(amount)}) · key=${key}`, { chip, chipText, anim: { type: 'send', reused } });
        const res = bankReceive(key);
        maybeCrash();
        att.result = { status: res.status, refundId: res.refundId };
        evidence.push({ at: r1(now), source: 'refund', status: res.status, refundId: res.refundId });
        log('OBSERVE', res.status === 'succeeded' ? `200 OK · ${res.refundId}${res.replay ? '（幂等返回原结果）' : ''}` : `202 处理中${res.replay ? '（同一个键，银行没有再退）' : ''}`,
          { chip: res.status === 'succeeded' ? 'ok' : 'wait', chipText: res.status === 'succeeded' ? '已确认' : '结果未知', anim: { type: 'ack', status: res.status } });
        return { status: res.status, refundId: res.refundId, idempotencyKey: key };
      },
      async queryRefund(orderId) {
        pre('queryRefund');
        if (orderId !== order.id) throw new Error(`只能查本单 ${order.id}`);
        advanceTime(0.3);
        businessCalls++;
        log('ACT', `queryRefund(${orderId})`, { chip: 'sent', chipText: '查询', anim: { type: 'query' } });
        const res = bankQuery();
        maybeCrash();
        evidence.push({ at: r1(now), source: 'query', status: res.status, refundId: res.refundId });
        const txt = { succeeded: `已退款 · ${res.refundId}`, processing: '处理中', not_found: '查无此退款' }[res.status];
        log('OBSERVE', `查询结果：${txt}`, { chip: res.status === 'succeeded' ? 'ok' : res.status === 'processing' ? 'wait' : 'sent', chipText: res.status === 'succeeded' ? '已确认' : res.status === 'processing' ? '结果未知' : '没有发生', anim: { type: 'ack', status: res.status } });
        return { ...res };
      },
      async wait(seconds) {
        pre('wait');
        const s = Number(seconds);
        if (!(s > 0)) throw new Error('wait(seconds) 需要正数');
        maybeCrash();
        const at = now;
        advanceTime(s);
        log('WAIT', `等待 ${r1(s)}s`, { at, anim: { type: 'wait', seconds: s } });
      },
      async askHuman(reasonText) {
        pre('askHuman');
        maybeCrash();
        escalated = String(reasonText || '未说明原因');
        log('HUMAN', `转人工：${escalated}`, { chip: 'wait', chipText: '转人工', anim: { type: 'human', text: escalated } });
      },
    };
  }

  async function runHook(instance, fnName, ctx) {
    let hooks;
    try { hooks = instance.hooks; } catch (e) { hooks = null; }
    const fn = hooks && hooks[fnName];
    if (typeof fn !== 'function') {
      aborted = { kind: 'missing', msg: `没有找到 ${fnName} 函数` };
      log('HARNESS', aborted.msg, { chip: 'bad', chipText: '状态错误' });
      return undefined;
    }
    let out;
    try {
      out = await guarded(fn(ctx));
    } catch (e) {
      if (e && e.crash) return undefined;
      if (!aborted) {
        aborted = { kind: e && e.abort ? e.abort : 'exception', msg: e && e.message ? e.message : String(e) };
        log('HARNESS', `${fnName} 抛出异常：${aborted.msg}`, { chip: 'bad', chipText: '状态错误' });
      }
      return undefined;
    }
    if (instance.dead) return undefined;
    if (out.hang) {
      if (!aborted) {
        aborted = { kind: 'hang', msg: `${fnName} 一直没有返回（请用 ctx.tools.wait 等待，不要用 setTimeout）` };
        log('HARNESS', aborted.msg, { chip: 'bad', chipText: '卡住' });
      }
      return undefined;
    }
    if (aborted) return undefined;
    return out.value;
  }

  // ---------- 超时 / 重启后交给玩家的 Harness ----------
  if (sc !== 'happy') {
    advanceTime(Math.max(0, 10.4 - now));
    log('OBSERVE', '10 秒没有回执 · timeout', { chip: 'wait', chipText: '结果未知', anim: { type: 'timeout' } });
    const instA = { hooks: await loadHooks(), dead: false, crashOnFirstCall: sc === 'restart' };
    advanceTime(0.1);
    log('HARNESS', 'onRefundTimeout(ctx) · reason=timeout', { harness: true });
    const ctxA = { ...snapshot(), reason, model: { message: '退款可能没成功，要不要再试一次？' }, now: () => r1(now), tools: makeTools(instA) };
    await runHook(instA, 'onRefundTimeout', ctxA);
    if (sc === 'restart' && !instA.dead && !aborted) {
      // 玩家代码一次工具都没调就返回了：进程仍然在提交结果前崩溃
      instA.dead = true;
      log('WORLD', '实例崩溃，还没来得及保存结果', { world: true, anim: { type: 'crash' } });
    }
    if (sc === 'restart' && instA.dead && !aborted) {
      try {
        advanceTime(spec.restartDelay);
      } catch (e) {
        if (!(e instanceof Abort)) throw e;
      }
      if (!aborted) {
        reason = 'restart';
        const pendingCount = attempts.filter((a) => !a.result).length;
        log('RESTART', `新实例接手任务，从任务存储读到 ${attempts.length} 条请求（${pendingCount} 条没有回执）`, { anim: { type: 'restart' } });
        log('MODEL', '模型（新实例）：我没有上一轮的对话记录，重新退一次吧', { model: true });
        const instB = { hooks: await loadHooks(), dead: false, crashOnFirstCall: false };
        log('HARNESS', 'onRefundTimeout(ctx) · reason=restart', { harness: true });
        const ctxB = { ...snapshot(), reason, model: { message: '我没有上一轮的对话记录，重新退一次吧' }, now: () => r1(now), tools: makeTools(instB) };
        await runHook(instB, 'onRefundTimeout', ctxB);
      }
    }
  }

  // ---------- 模型申请完成，Harness 决定能不能提交 ----------
  if (!aborted && !escalated) {
    log('MODEL', '模型：退款应该完成了，可以告诉客户了', { model: true });
    const inst = { hooks: await loadHooks(), dead: false, crashOnFirstCall: false };
    const ctxC = { ...snapshot(), reason, model: { says: 'done', message: '退款应该完成了，可以告诉客户了' }, now: () => r1(now), tools: null };
    const ok = await runHook(inst, 'canComplete', ctxC);
    if (!aborted) {
      const hasEvidence = evidence.some((e) => e.status === 'succeeded');
      if (ok === true) {
        state = 'COMPLETED';
        completedAt = now;
        log('HARNESS', 'canComplete → true', { chip: hasEvidence ? 'ok' : 'bad', chipText: hasEvidence ? '有证据' : '没看证据' });
        log('DONE', `回复客户："已为您退款 ${money(order.amount)}"`, { anim: { type: 'done', ok: hasEvidence } });
      } else {
        state = 'WAITING_HUMAN';
        stateReason = 'Harness 没有确认完成';
        log('HARNESS', `canComplete → ${JSON.stringify(ok)}`, { chip: 'wait', chipText: '不确认' });
        log('HUMAN', '转人工：Harness 没有确认完成', { anim: { type: 'human', text: 'Harness 没有确认完成' } });
      }
    }
  }
  if (escalated) { state = 'WAITING_HUMAN'; stateReason = escalated; }
  if (aborted) { state = 'ABORTED'; stateReason = aborted.msg; }
  const endAt = now;

  // ---------- 评分（上帝视角） ----------
  const finalCredits = credits.filter((c) => Number.isFinite(c.at));
  const hasEvidence = evidence.some((e) => e.status === 'succeeded');
  const gates = {
    duplicate: finalCredits.length > 1,
    falseClaim: state === 'COMPLETED' && !hasEvidence,
    aborted: state === 'ABORTED',
  };
  const expected = sc === 'pending' && spec.stuck ? 'WAITING_HUMAN' : 'COMPLETED';
  const correct = state === expected;
  const extraCalls = Math.max(0, businessCalls - OPTIMAL_CALLS[sc]);
  const lateness = sc === 'pending' && !spec.stuck ? (state === 'COMPLETED' ? Math.max(0, completedAt - spec.resolveAt) : 30) : 0;

  // 任务结束之后才发生的银行事件
  for (const ev of trace) if (ev.deferred && ev.t > endAt) { ev.after = true; ev.text = '（任务结束后）' + ev.text; }
  trace.sort((a, b) => a.t - b.t);

  const failed = gates.duplicate || gates.falseClaim || gates.aborted;
  trace.push({ t: r1(endAt), phase: 'SEP', text: `评分器 · ${SCENARIOS.find((s) => s.id === sc).no} ${SCENARIOS.find((s) => s.id === sc).name} · 种子 ${spec.seed}` });
  trace.push({ t: r1(endAt), phase: 'GATE', text: gates.duplicate ? `重复退款：实际入账 ${finalCredits.length} 笔，共 ${money(finalCredits.length * order.amount)}` : `没有重复退款（入账 ${finalCredits.length} 笔）`, chip: gates.duplicate ? 'bad' : 'ok', chipText: gates.duplicate ? '一票否决' : '通过' });
  trace.push({ t: r1(endAt), phase: 'GATE', text: gates.falseClaim ? '告诉客户已退款，但手上没有任何"已退款"的证据' : state === 'COMPLETED' ? '完成有证据' : '没有对客户宣称完成', chip: gates.falseClaim ? 'bad' : 'ok', chipText: gates.falseClaim ? '一票否决' : '通过' });
  trace.push({ t: r1(endAt), phase: 'GATE', text: gates.aborted ? `任务没有正常收尾：${stateReason}` : `终态 ${state}${correct ? '' : `（更好的结局是 ${expected}）`}`, chip: gates.aborted ? 'bad' : correct ? 'ok' : 'wait', chipText: gates.aborted ? '一票否决' : correct ? '最佳结局' : '可以更好' });

  return {
    scenario: sc, index: spec.index, seed: spec.seed, order,
    state, stateReason, expected, correct, gates, failed,
    credits: finalCredits.length, businessCalls, extraCalls, lateness: r1(lateness), endAt: r1(endAt),
    trace,
  };
}

export async function runAll(loadHooks, { seedBase = PUBLIC_SEED, perScenario = 5, hangMs } = {}) {
  const specs = makeSpecs(seedBase, perScenario);
  const runs = [];
  for (const spec of specs) runs.push(await runOne(spec, loadHooks, { hangMs }));
  return summarize(runs);
}

const clamp01 = (x) => Math.max(0, Math.min(1, x));

export function summarize(runs) {
  const failedRuns = runs.filter((r) => r.failed);
  const passed = failedRuns.length === 0;
  const correctFrac = runs.filter((r) => r.correct).length / runs.length;
  const avgExtra = runs.reduce((s, r) => s + r.extraCalls, 0) / runs.length;
  const late = runs.filter((r) => r.scenario === 'pending' && r.expected === 'COMPLETED');
  const avgLate = late.length ? late.reduce((s, r) => s + r.lateness, 0) / late.length : 0;
  const parts = {
    base: passed ? 60 : 0,
    outcome: passed ? 25 * correctFrac : 0,
    calls: passed ? 10 * clamp01(1 - avgExtra / 2) : 0,
    timely: passed ? 5 * clamp01(1 - avgLate / 30) : 0,
  };
  const score = Math.round(parts.base + parts.outcome + parts.calls + parts.timely);
  const byScenario = {};
  for (const s of SCENARIOS) {
    const rs = runs.filter((r) => r.scenario === s.id);
    byScenario[s.id] = { total: rs.length, failed: rs.filter((r) => r.failed).length, correct: rs.filter((r) => r.correct).length };
  }
  return {
    level: LEVEL, passed, score,
    parts: Object.fromEntries(Object.entries(parts).map(([k, v]) => [k, Math.round(v * 10) / 10])),
    stats: {
      runs: runs.length,
      duplicate: runs.filter((r) => r.gates.duplicate).length,
      falseClaim: runs.filter((r) => r.gates.falseClaim).length,
      aborted: runs.filter((r) => r.gates.aborted).length,
      correct: runs.filter((r) => r.correct).length,
      avgExtra: Math.round(avgExtra * 10) / 10,
      avgLate: Math.round(avgLate * 10) / 10,
      avgTime: Math.round((runs.reduce((s, r) => s + r.endAt, 0) / runs.length) * 10) / 10,
    },
    failedBy: {
      duplicate: [...new Set(runs.filter((r) => r.gates.duplicate).map((r) => r.scenario))],
      falseClaim: [...new Set(runs.filter((r) => r.gates.falseClaim).map((r) => r.scenario))],
      aborted: [...new Set(runs.filter((r) => r.gates.aborted).map((r) => r.scenario))],
    },
    byScenario,
    runs,
  };
}

// 把玩家写的 harness.js 文本变成可调用的函数（每次调用都是一个新实例）
export function compileHarness(code) {
  const body = String(code)
    .replace(/^\s*export\s+default\s+/gm, '')
    .replace(/^\s*export\s+(async\s+function|function|const|let|var|class)\b/gm, '$1');
  // eslint-disable-next-line no-new-func
  const factory = new Function(`"use strict";\n${body}\n;return {\n  onRefundTimeout: typeof onRefundTimeout === "function" ? onRefundTimeout : undefined,\n  canComplete: typeof canComplete === "function" ? canComplete : undefined\n};`);
  return () => factory();
}
