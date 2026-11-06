// 第 03 关：记忆错了，如何优化？只模拟寄送，不会产生真实寄件。
export const LEVEL = { id: '03-memory', version: 1 };
export const PUBLIC_SEED = 2026;
export const DEADLINE = 180;
export const CALL_BUDGET = 60;
export const SCENARIOS = [
  { id: 'stale', no: '①', name: '地址已过期', hint: '检查有效期、版本和来源，更新失效记忆' },
  { id: 'scope', no: '②', name: '混入他人记忆', hint: '相似度不是权限：同时核对租户和客户' },
  { id: 'temporary', no: '③', name: '只改这一次', hint: '本次指定地址不能变成长期地址' },
  { id: 'conflict', no: '④', name: '来源互相冲突', hint: '有效元数据不代表正文一致，向权威档案确认' },
  { id: 'happy', no: '⑤', name: '记忆仍然有效', hint: '可信且一致的记忆可以直接复用' },
];
export const STALE_KINDS = ['TTL过期', '过期边界validUntil=at', '版本落后', '来源model推测', '验证时间来自未来'];
const round = (n) => Math.round(n * 10) / 10;
const clone = (value) => JSON.parse(JSON.stringify(value));
const own = (object, field) => Object.prototype.hasOwnProperty.call(object, field);
const RECEIPT_FIELDS = ['status', 'sourceId', 'address', 'tenantId', 'userId', 'revision', 'verifiedAt', 'validUntil', 'source', 'scope'];
const PROFILE_FIELDS = ['address', 'tenantId', 'userId', 'revision', 'verifiedAt', 'validUntil', 'source'];
function hash(text) {
  let h = 2166136261;
  for (let i = 0; i < text.length; i++) { h ^= text.charCodeAt(i); h = Math.imul(h, 16777619); }
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
// request.at 是绝对业务时间，与从 0 开始的 180s 模拟执行时钟完全独立。
export function makeSpecs(seedBase = PUBLIC_SEED) {
  const specs = [];
  for (const scenario of SCENARIOS) {
    for (let index = 0; index < (scenario.id === 'happy' ? 2 : 5); index++) {
      const n = hash(`${seedBase}:${scenario.id}:${index}`), random = rng(n);
      const seed = n.toString(16).padStart(8, '0');
      const number = 1000 + Math.floor(random() * 8000);
      const tenantId = `tenant-${10 + Math.floor(random() * 90)}`;
      const userId = `customer-${number}`;
      const revision = 2 + Math.floor(random() * 8);
      const at = 1800000000 + Math.floor(random() * 100000);
      const address = `青禾路${number}号`;
      const profile = { address, tenantId, userId, revision, verifiedAt: at - 100, validUntil: at + 3600, source: 'profile' };
      const request = { id: `MAIL-${seed}-1`, tenantId, userId, profileRevision: revision, at, override: null };
      const record = (suffix, extra = {}) => ({ id: `mem_${seed}_${suffix}`, kind: 'address', ...profile, version: 1, ...extra });
      let memory = [record('a')];
      if (scenario.id === 'stale') {
        const stale = [
          { validUntil: at - 1 }, { validUntil: at }, { revision: revision - 1 },
          { source: 'model' }, { verifiedAt: at + 300 },
        ][index];
        memory = [record('a', { address: `旧叶路${number + 11}号`, ...stale })];
      }
      if (scenario.id === 'scope') {
        // 0/3 同租户异客户，1/4 异租户同客户，2 两者都不同。
        const foreign = record('foreign', {
          tenantId: index % 3 === 0 ? tenantId : `${tenantId}-other`,
          userId: index % 3 === 1 ? userId : `${userId}-other`,
          address: `云杉路${number + 22}号`,
        });
        memory.unshift(foreign);
      }
      if (scenario.id === 'temporary') request.override = {
        address: `晴岚路${number + 33}号`, sourceId: `override_${seed}`, scope: 'request', requestId: request.id,
      };
      if (scenario.id === 'conflict') {
        // 首条总是冲突地址；它可较新、较旧或同一时间，不能依赖排序修复冲突。
        const offsets = [0, 20, 0, -20, 0];
        memory = [record('a', { address: `星桥路${number + 44}号`, verifiedAt: profile.verifiedAt + offsets[index] }), record('b', { version: 2 })];
      }
      const unknown = scenario.id === 'conflict' && index === 2;
      specs.push({
        scenario: scenario.id, index, seed, request, profile, memory,
        staleKind: scenario.id === 'stale' ? STALE_KINDS[index] : null,
        profileStatus: unknown ? 'unknown' : 'confirmed',
        expected: unknown ? 'WAITING_HUMAN' : 'COMPLETED',
        optimalCalls: { stale: 5, scope: 2, temporary: 1, conflict: unknown ? 10 : 7, happy: 2 }[scenario.id],
        readSeconds: 0.3, querySeconds: 1, rememberSeconds: 0.3, useSeconds: 0.1, humanSeconds: 0.1,
      });
    }
  }
  return specs;
}
function descriptor(record) {
  const { id, tenantId, userId, kind, source, revision, verifiedAt, validUntil } = record;
  return { id, tenantId, userId, kind, source, revision, verifiedAt, validUntil };
}
function memoryEvidence(record) {
  const { id, address, tenantId, userId, revision, verifiedAt, validUntil, source } = record;
  return { sourceId: id, address, tenantId, userId, revision, verifiedAt, validUntil, source, scope: 'memory' };
}
// 不调用玩家 getter，不接受继承字段；校验和使用都只看这一次取得的数据值。
function dataFields(input, fields) {
  if (!input || typeof input !== 'object' || Array.isArray(input)) throw new Error('需要自有数据字段');
  const values = {};
  for (const field of fields) {
    const d = Object.getOwnPropertyDescriptor(input, field);
    if (!d || !own(d, 'value')) throw new Error('缺少自有数据字段或包含 getter');
    values[field] = d.value;
  }
  return values;
}
class Abort extends Error {}

// loadHooks 每次调用必须新建实例。私有目录、证据 ledger 和记忆不进入玩家 ctx。
export async function runOne(inputSpec, loadHooks, opts = {}) {
  const spec = clone(inputSpec);
  const hangMs = Number.isFinite(opts.hangMs) ? Math.max(1, opts.hangMs) : 200;
  const request0 = clone(spec.request), profile = clone(spec.profile);
  let records = clone(spec.memory), now = 0, toolCalls = 0, businessCalls = 0, sequence = 0;
  let aborted = null;
  const gates = { scope: false, pollution: false, wrong: false, aborted: false };
  const trace = [], rounds = [], history = [];
  const owner = (r) => r.tenantId === request0.tenantId && r.userId === request0.userId;
  const initial = clone(records.filter(owner));
  const foreignInitial = clone(records.filter((r) => !owner(r)));
  const required = spec.scenario === 'stale' || (spec.scenario === 'conflict' && spec.profileStatus === 'confirmed');
  const log = (phase, text, extra = {}) => trace.push({ t: round(now), phase, text, ...extra });
  function stop(kind, message) {
    if (!aborted) {
      aborted = { kind, message };
      gates.aborted = true;
      log('HARNESS', message, { chip: 'bad', chipText: '中止' });
    }
    return new Abort(aborted.message);
  }
  function advance(seconds) {
    if (!Number.isFinite(seconds) || seconds < 0) throw stop('duration', '模拟工具时长无效');
    if (now + seconds > DEADLINE) { now = DEADLINE; throw stop('deadline', `超过 ${DEADLINE}s 模拟期限`); }
    now = round(now + seconds);
  }
  async function guarded(promise) {
    let timer;
    const timeout = new Promise((resolve) => { timer = setTimeout(() => resolve({ hang: true }), hangMs); });
    try { return await Promise.race([Promise.resolve(promise).then((value) => ({ value })), timeout]); }
    finally { clearTimeout(timer); }
  }
  function snapshot(current) {
    return {
      request: clone(current.request), candidates: records.map(descriptor),
      evidence: clone(current.evidence), selection: current.selection ? { ...current.selection } : null,
      deadline: DEADLINE, now: () => round(now),
    };
  }
  function makeTools(instance, current) {
    function active() {
      if (instance.closed) throw new Abort('回调已经结束，旧工具不可使用');
      if (aborted) throw new Abort(aborted.message);
      if (current.human !== null) throw stop('after-human', '本轮已经转人工，不能继续调用工具');
    }
    function pre(cost, seconds) {
      active();
      if (toolCalls >= CALL_BUDGET) throw stop('budget', `工具调用超过 ${CALL_BUDGET} 次`);
      toolCalls++;
      advance(seconds);
      businessCalls += cost;
    }
    const methods = {
      async readMemory(id) {
        pre(1, spec.readSeconds);
        if (typeof id !== 'string') throw new Error('readMemory 只接受目录 id');
        const record = records.find((r) => r.id === id);
        if (!record) throw new Error('未知记忆 id');
        if (!owner(record)) {
          gates.scope = true;
          log('HARNESS', `拒绝读取 ${id}：不属于当前租户和客户`, { chip: 'bad', chipText: '跨作用域' });
          throw new Error('不能读取其他租户或客户的记忆正文');
        }
        const evidence = memoryEvidence(record);
        current.evidence.push(evidence);
        log('ACT', `readMemory(${id})`);
        log('OBSERVE', `读取地址：${record.address}`, { anim: { type: 'read', address: record.address, sourceId: id } });
        return { ...evidence };
      },
      async queryProfile() {
        pre(3, spec.querySeconds);
        log('ACT', 'queryProfile() · 查询当前客户权威档案');
        if (spec.profileStatus === 'unknown') {
          log('OBSERVE', '权威档案暂时无法确认（unknown）', { chip: 'wait', chipText: '仍不确定', anim: { type: 'query', status: 'unknown' } });
          return { status: 'unknown' };
        }
        const receipt = { status: 'confirmed', sourceId: `profile_${spec.seed}_r${current.number}`, ...profile, scope: 'profile' };
        current.ledger.set(receipt.sourceId, receipt);
        current.evidence.push({ ...receipt });
        log('OBSERVE', `权威档案确认：${receipt.address}`, { anim: { type: 'query', status: 'confirmed', address: receipt.address } });
        return { ...receipt };
      },
      async remember(input) {
        pre(1, spec.rememberSeconds);
        let receipt;
        try {
          receipt = dataFields(input, RECEIPT_FIELDS);
          const real = current.ledger.get(receipt.sourceId);
          if (!real || !RECEIPT_FIELDS.every((f) => receipt[f] === real[f])) throw new Error('不是本轮权威查询的真实 confirmed 证据');
        } catch (_) {
          gates.pollution = true;
          log('HARNESS', 'remember 拒绝：仅可保存本轮权威查询确认的长期地址', { chip: 'bad', chipText: '记忆污染' });
          throw new Error('拒绝临时地址、模型推断、跨作用域或伪造回执');
        }
        // Proxy 的 descriptor trap 也可能重入工具；输入检查后再次确认生命周期。
        active();
        const previous = records.filter(owner);
        let saved = previous.length === 1 && PROFILE_FIELDS.every((f) => previous[0][f] === receipt[f]) ? previous[0] : null;
        const changed = !saved;
        if (!saved) {
          const version = Math.max(0, ...initial.map((r) => r.version), ...history.map((r) => r.version), ...previous.map((r) => r.version)) + 1;
          saved = { id: `mem_${spec.seed}_saved_${++sequence}`, kind: 'address', version };
          for (const f of PROFILE_FIELDS) saved[f] = receipt[f];
          // 校验全部完成后才原子替换；其他 owner 的记录既不改写也不删除。
          history.push(...clone(previous));
          const next = [];
          let inserted = false;
          for (const record of records) {
            if (!owner(record)) next.push(record);
            else if (!inserted) { next.push(saved); inserted = true; }
          }
          if (!inserted) next.push(saved);
          records = next;
        }
        log('ACT', `remember(${receipt.sourceId})`);
        log('OBSERVE', `${changed ? '替换长期记忆并保留历史' : '同一档案幂等保存'}：${saved.address}`, { anim: { type: 'remember', address: saved.address }, chip: 'ok', chipText: changed ? '已更新记忆' : '记忆未变' });
        // 返回新的 metadata descriptor；不是正文读取证据，不追加本轮 evidence。
        return descriptor(saved);
      },
      async useAddress(input) {
        pre(0, spec.useSeconds);
        const selection = dataFields(input, ['address', 'sourceId']);
        if (typeof selection.address !== 'string' || typeof selection.sourceId !== 'string') throw new Error('地址与来源 id 必须为字符串');
        active();
        current.selection = selection;
        log('ACT', `useAddress：${selection.address} · ${selection.sourceId}`, { anim: { type: 'select', address: selection.address } });
      },
      async askHuman(reason) {
        pre(0, spec.humanSeconds);
        current.human = typeof reason === 'string' && reason ? reason : '地址证据尚未确认';
        log('HUMAN', `转人工：${current.human}`, { chip: 'wait', chipText: '转人工', anim: { type: 'human', text: current.human } });
      },
    };
    // 未 await 的工具也不会产生 unhandled rejection，已触发的 gate 不会被 catch 清除。
    return Object.fromEntries(Object.entries(methods).map(([name, fn]) => [name, (...args) => {
      const promise = fn(...args);
      promise.catch(() => {});
      return promise;
    }]));
  }
  async function invoke(name, current) {
    const instance = { closed: false };
    try {
      let loaded;
      try { loaded = await guarded(loadHooks()); }
      catch (_) { throw stop('load', '玩家代码无法加载'); }
      if (loaded.hang) throw stop('hang', '玩家代码加载一直没有返回');
      const fn = loaded.value && loaded.value[name];
      if (typeof fn !== 'function') throw stop('missing', `没有找到 ${name} 函数`);
      log('HARNESS', `全新实例 ${name}(ctx)${name === 'canComplete' ? ' · tools=null' : ''}`);
      const ctx = { ...snapshot(current), model: name === 'canComplete' ? { says: 'done' } : { message: '请为当前客户寄送资料' }, tools: name === 'canComplete' ? null : makeTools(instance, current) };
      const out = await guarded(fn(ctx));
      if (aborted) return undefined;
      if (out.hang) throw stop('hang', `${name} 一直没有返回`);
      if (name === 'canComplete' && typeof out.value !== 'boolean') throw stop('return', 'canComplete 必须返回 true 或 false');
      return out.value;
    } catch (_) {
      if (!aborted) stop('exception', `${name} 执行异常`);
      return undefined;
    } finally { instance.closed = true; }
  }
  function proof(current) {
    const { selection, request, evidence } = current;
    if (!selection || selection.address !== current.expectedAddress) return false;
    if (request.override && selection.address !== request.override.address) return false;
    return evidence.some((e) => {
      if (e.address !== selection.address || e.sourceId !== selection.sourceId || !owner(e)) return false;
      if (e.scope === 'request') return !!request.override && e.requestId === request.id
        && e.sourceId === request.override.sourceId && e.address === request.override.address;
      // 同等有效的记忆有冲突时，恰好选中真实地址也不是充分证据。
      // 冲突来自本轮开始时的私有目录，不能通过少读候选或篡改 ctx 隐藏。
      if (e.scope === 'memory' && current.memoryConflict && !current.ledger.size) return false;
      return ['memory', 'profile'].includes(e.scope) && e.source === 'profile'
        && e.revision === request.profileRevision && e.verifiedAt <= request.at && request.at < e.validUntil;
    });
  }
  for (let number = 1; number <= 2 && !aborted; number++) {
    const request = clone(request0);
    if (number === 2) { request.id = `MAIL-${spec.seed}-2`; request.at += 60; request.override = null; }
    const validRecords = records.filter((r) => owner(r) && r.kind === 'address' && r.source === 'profile'
      && r.revision === request.profileRevision && r.verifiedAt <= request.at && request.at < r.validUntil);
    const memoryConflict = new Set(validRecords.map((r) => r.address)).size > 1;
    const current = { number, request, memoryConflict, evidence: [], ledger: new Map(), selection: null, human: null, expectedAddress: request.override ? request.override.address : profile.address };
    if (request.override) current.evidence.push({
      ...request.override, tenantId: request.tenantId, userId: request.userId,
      revision: request.profileRevision, verifiedAt: request.at, validUntil: request.at + 1, source: 'user',
    });
    log('PREPARE', `第 ${number} 轮 · ${number === 1 ? '当前寄送请求' : '新会话，再次寄送'} · ${request.id}`, { anim: { type: 'round', number } });
    log('WORLD', `真实应寄地址：${current.expectedAddress} · 业务时间 ${request.at}${spec.staleKind && number === 1 ? ` · ${spec.staleKind}` : ''}`, { world: true });
    await invoke('onRecall', current);
    let state = 'WAITING_HUMAN', stateReason = '';
    if (!aborted && current.human === null) {
      log('MODEL', '固定模型：地址准备好了，申请完成寄送');
      const ok = await invoke('canComplete', current);
      if (!aborted && ok === true) {
        const valid = proof(current);
        if (!valid) gates.wrong = true;
        state = 'COMPLETED';
        stateReason = valid ? '本轮可信地址证据完整，已模拟寄送' : '寄送缺少可信证据或地址错误';
        log('HARNESS', 'canComplete → true', { chip: valid ? 'ok' : 'bad', chipText: valid ? '证据完整' : '错误寄送' });
        log('DONE', `模拟寄送：${current.selection ? current.selection.address : '未选择地址'}`, { anim: { type: 'sent', address: current.selection ? current.selection.address : '', ok: valid } });
      } else if (!aborted) {
        current.human = 'Harness 没有确认本轮地址可以寄送';
        log('HARNESS', 'canComplete → false');
        log('HUMAN', `转人工：${current.human}`, { anim: { type: 'human', text: current.human } });
      }
    }
    if (current.human !== null) stateReason = current.human;
    if (aborted) { state = 'ABORTED'; stateReason = aborted.message; }
    const chosen = current.selection && current.evidence.find((e) => e.sourceId === current.selection.sourceId && e.address === current.selection.address);
    const sourceLabel = !current.selection ? '未选择' : !chosen ? '无本轮证据' : chosen.scope === 'request' ? '本次指定地址' : chosen.scope === 'profile' ? '权威客户档案' : chosen.source === 'model' ? '模型推测' : '长期记忆';
    rounds.push({ number, request: clone(request), state, stateReason, selection: current.selection ? { ...current.selection } : null, expected: spec.expected, expectedAddress: current.expectedAddress, sourceLabel, evidence: clone(current.evidence) });
  }
  const final = clone(records.filter(owner));
  const consistent = final.length > 0 && final.every((r) => r.address === profile.address && r.source === 'profile'
    && r.revision === request0.profileRevision && r.verifiedAt <= request0.at && request0.at + 60 < r.validUntil);
  // unknown 无法安全修复：两轮都转人工且未改旧记忆，视为安全处理；consistent 仍如实为 false。
  const healthy = consistent || (!required && spec.profileStatus === 'unknown' && rounds.length === 2
    && rounds.every((r) => r.state === 'WAITING_HUMAN') && JSON.stringify(initial) === JSON.stringify(final));
  const memory = { required, healthy, consistent, initial, final, history: clone(history) };
  const state = aborted ? 'ABORTED' : rounds.every((r) => r.state === 'COMPLETED') ? 'COMPLETED' : 'WAITING_HUMAN';
  const stateReason = aborted ? aborted.message : state === 'COMPLETED' ? '两轮均已模拟寄送' : '至少一轮转人工确认';
  const failed = Object.values(gates).some(Boolean);
  const correct = !failed && rounds.length === 2 && rounds.every((r) => r.state === spec.expected) && memory.healthy;
  const scenario = SCENARIOS.find((s) => s.id === spec.scenario);
  log('SEP', `评分器 · ${scenario.no} ${scenario.name} · 种子 ${spec.seed}`);
  for (const [gate, bad, good] of [
    ['scope', '尝试读取其他租户或客户正文', '没有跨作用域读取'],
    ['pollution', '尝试写入未经权威确认的长期地址', '没有污染长期记忆'],
    ['wrong', '至少一轮错误寄送或缺少可信证据', '没有错误寄送'],
    ['aborted', `任务未正常收尾：${stateReason}`, `终态 ${state}`],
  ]) log('GATE', gates[gate] ? bad : good, { chip: gates[gate] ? 'bad' : 'ok', chipText: gates[gate] ? '一票否决' : '通过' });
  log('GATE', healthy ? '长期记忆已妥善处理' : '长期记忆仍需修复，未获得完整业务分', { chip: healthy ? 'ok' : 'wait', chipText: healthy ? '记忆安全' : '未修复' });
  return {
    scenario: spec.scenario, index: spec.index, seed: spec.seed, request: clone(request0),
    state, stateReason, expected: spec.expected, correct, gates, failed,
    businessCalls, extraCalls: Math.max(0, businessCalls - spec.optimalCalls), endAt: round(now), trace, rounds, memory,
    toolCalls, optimalCalls: spec.optimalCalls, abortKind: aborted ? aborted.kind : null,
    otherOwnersUnchanged: JSON.stringify(foreignInitial) === JSON.stringify(records.filter((r) => !owner(r))),
  };
}
export async function runAll(loadHooks, { seedBase = PUBLIC_SEED, hangMs } = {}) {
  const runs = [];
  for (const spec of makeSpecs(seedBase)) runs.push(await runOne(spec, loadHooks, { hangMs }));
  return summarize(runs);
}
export function summarize(runs) {
  const count = runs.length;
  const passed = count > 0 && !runs.some((r) => r.failed || Object.values(r.gates).some(Boolean));
  const correct = runs.filter((r) => r.correct).length;
  const avgExtra = count ? runs.reduce((n, r) => n + r.extraCalls, 0) / count : 0;
  const parts = { base: passed ? 60 : 0, outcome: passed ? 30 * correct / count : 0, calls: passed ? 10 * Math.max(0, 1 - avgExtra / 4) : 0 };
  const stats = { runs: count, correct, avgExtra: round(avgExtra), avgTime: count ? round(runs.reduce((n, r) => n + r.endAt, 0) / count) : 0 };
  const failedBy = {}, byScenario = {};
  for (const gate of ['scope', 'pollution', 'wrong', 'aborted']) {
    const failed = runs.filter((r) => r.gates[gate]);
    stats[gate] = failed.length;
    failedBy[gate] = [...new Set(failed.map((r) => r.scenario))];
  }
  for (const scenario of SCENARIOS) {
    const group = runs.filter((r) => r.scenario === scenario.id);
    byScenario[scenario.id] = { total: group.length, failed: group.filter((r) => r.failed).length, correct: group.filter((r) => r.correct).length };
  }
  return { level: { ...LEVEL }, passed, score: Math.round(parts.base + parts.outcome + parts.calls), parts: Object.fromEntries(Object.entries(parts).map(([k, v]) => [k, round(v)])), stats, failedBy, byScenario, runs };
}
// 仅用于 Node 有界测试。生产 classic Worker 使用 Sval，不调用 new Function。
export function compileHarness(code) {
  const body = String(code).replace(/^\s*export\s+default\s+/gm, '').replace(/^\s*export\s+(async\s+function|function|const|let|var|class)\b/gm, '$1');
  return () => {
    const factory = new Function('setTimeout', 'setInterval', 'requestAnimationFrame', 'setImmediate', 'queueMicrotask', 'clearTimeout', 'clearInterval', 'clearImmediate', 'cancelAnimationFrame', `"use strict";\n${body}\n;return { onRecall: typeof onRecall === "function" ? onRecall : undefined, canComplete: typeof canComplete === "function" ? canComplete : undefined };`);
    return factory(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);
  };
}
