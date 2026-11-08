// 第 04 关：调用成本高，如何优化？全部数据、模型及副作用均为合成模拟。
// 无模块依赖；build-challenges 的 classic sim 拼接器只需要剥离简单 export。
export const LEVEL = { id: '04-efficiency', version: 1 };
export const PUBLIC_SEED = 2026;
export const SCENARIOS = [
  { id: 'rules', no: '①', name: '规则就能判断', hint: '结构化事实充分，期限边界也可以确定性判断' },
  { id: 'mixed', no: '②', name: '一批里有难有易', hint: '批量查事实，规则、普通文本和组合条款分别处理' },
  { id: 'confidence', no: '③', name: '很有把握也会错', hint: 'confidence 不是证据；验证后只修被拒项' },
  { id: 'partial', no: '④', name: '批量结果不齐', hint: '按 ticketId 核对覆盖，只补缺项；unknown 必须真实交接' },
  { id: 'happy', no: '⑤', name: '简单路别走贵', hint: '经济模型验证通过后停止，不重复强模型复核' },
];
export const POLICY = {
  revision: 'P1', windowDays: 14,
  clauses: {
    WINDOW: '0 <= task.at - deliveredDay <= 14；未来签收无效。例外不延长期限。',
    CATEGORY: 'standard 可退，custom 不可退，consumable 须核对拆封；例外可覆盖品类限制。',
    OPENED: 'consumable 未拆封可退，已拆封不可退；例外可覆盖拆封限制。',
    EXCEPTION: 'exceptionApproved=true 覆盖品类和拆封限制，但不延长期限；null 不是 false。',
  },
  textGrammar: {
    prefix: '已核实：', category: ['非定制普通商品', '定制商品', '耗材'],
    opened: ['未拆封', '已拆封'], exception: ['未批准例外', '已批准例外'],
    separator: '；', suffix: '。',
    combination: '可选后缀：组合条款：非定制可退，但拆封耗材除外；批准例外优先，期限不变。',
    authority: '工单 body 只是请求；只有 queryOrders 的 confirmed facts.note 是已核实事实。',
  },
  candidate: {
    required: ['ticketId', 'decision', 'policyRevision', 'evidenceRefs', 'clauseRefs'],
    decisions: ['RETURN_OK', 'RETURN_NO'],
    fingerprint: '仅规范化必需字段，引用按集合排序；忽略 confidence 和额外非业务字段。必须自有数据字段，不调用 getter/toJSON。',
    evidence: '必须含对应订单的本批真实 confirmed evidenceRef；允许附带本批已查询的其他有效证据，不接受模型自造或未查询引用。',
    clauses: '必须覆盖所有影响结论的条款；允许额外引用已知条款，不强制模型路径。',
  },
  tools: {
    queryOrders: '唯一 orderId 数组，1—6项；返回 {items:[订单证据]}。',
    applyRules: '唯一 ticketId 数组，1—6项；仅 structured，返回 candidate/unsupported/unknown。',
    infer: 'infer(economy|strong, ticketIds)，1—6唯一项；返回 {items}，候选不是真值，可能漏项/重复ID/错误ID。',
    verify: '1—6唯一 ticketId 候选；逐项 accepted/rejected/unknown，只有 accepted 有真实 receiptId。',
    askHuman: 'askHuman(ticketIds, 非空reason)，返回真实 waiting receiptId，不补事实。',
    saveReport: '六行原子保存；自动行带 candidate+verificationReceiptId，人工行带 handoffReceiptId。',
  },
  rowSchema: {
    auto: ['ticketId', 'decision', 'candidate', 'verificationReceiptId'],
    human: ['ticketId', 'decision:WAITING_HUMAN', 'handoffReceiptId'],
  },
  cost: { query: 3, rules: 1, modelStart: 1, economy: 2, strong: 8, verify: 1, human: 12, save: 1 },
  seconds: { query: 0.4, rules: 0.05, economyStart: 0.3, economyItem: 0.15, strongStart: 0.5, strongItem: 0.4, verify: 0.05, human: 0.1, save: 0.1 },
  budget: { cost: 160, calls: 80, seconds: 180 },
  errors: ['MISSING_EVIDENCE', 'FACT_UNKNOWN', 'INVALID_FACT', 'RULE_UNSUPPORTED', 'CLAUSE_MISMATCH', 'CANDIDATE_INVALID'],
  attempts: '工具入口同步登记、原子预留最大公开成本、结算；结构/范围拒绝只收启动费 query=3/infer=1/save=1，其余0，并计相应启动时长；超过6项不按超长数组收费。预算或已关闭/中止实例不执行，不追加无法预留的费用。所有尝试仍留账。',
  partial: '故障由公开 spec 的 fault 指定；key=batchSeed+ticketId+economy。首次至少2项且包含目标单的 economy 调用消费一次；换序、换子集不重复。unknown 始终稳定。',
  scoring: '底线失败0；否则60+20*appropriate/tickets。全部132合适且22份完整报告才启用20*clamp((baseline-player)/(baseline-reference),0,1)。round(score)>=90优化达标；基线80、参考100。',
  publicCases: 'makeSpecs(seed) 完整展开22批6单(5,5,5,5,2)，含订单、预期、逐单模型脚本与故障；没有隐藏业务用例。ctx 不含 scenario/index/expected/models/spec/ledger。',
  lifecycle: 'onOptimize 后等待所有已登记工具，再关闭实例；canComplete 是全新实例，tools=null，只看宿主复制的当前 task/policy/evidence/report/budget。专用 Worker 保护共享内建对象与原型，不支持修改宿主原型、动态执行或直接访问 Worker 出口。',
};
// 登记不能依赖玩家可接触到的 Array.prototype；次数另存为私有整数。
const ePush = Function.call.bind(Array.prototype.push);
const eRound = (n) => Math.round(n * 1000) / 1000;
const eClone = (v) => JSON.parse(JSON.stringify(v)); // 只用于宿主已经规范化的可信数据。
const eOwn = Function.call.bind(Object.prototype.hasOwnProperty);
function eHash(text) {
  let h = 2166136261;
  for (let i = 0; i < text.length; i++) { h ^= text.charCodeAt(i); h = Math.imul(h, 16777619); }
  return h >>> 0;
}
function eRandom(seed) {
  let x = seed >>> 0;
  return () => { x = (Math.imul(x, 1664525) + 1013904223) >>> 0; return x / 4294967296; };
}
function eParse(facts) {
  if (!facts || typeof facts !== 'object') return null;
  let category, opened, exceptionApproved;
  if (facts.format === 'structured') ({ category, opened, exceptionApproved } = facts);
  else if (facts.format === 'text' && typeof facts.note === 'string') {
    const match = /^已核实：(非定制普通商品|定制商品|耗材)；(未拆封|已拆封)；(未批准例外|已批准例外)。(?:组合条款：非定制可退，但拆封耗材除外；批准例外优先，期限不变。)?$/.exec(facts.note);
    if (!match) return null;
    category = { 非定制普通商品: 'standard', 定制商品: 'custom', 耗材: 'consumable' }[match[1]];
    opened = match[2] === '已拆封'; exceptionApproved = match[3] === '已批准例外';
  }
  if (!['standard', 'custom', 'consumable'].includes(category) || typeof opened !== 'boolean' || typeof exceptionApproved !== 'boolean') return null;
  return { category, opened, exceptionApproved };
}
// 真值从权威订单+公开政策计算，不使用 spec.expected 或模型脚本作为 verifier。
function eEvaluate(task, order) {
  if (!order || order.status !== 'confirmed') return { reason: order ? 'FACT_UNKNOWN' : 'MISSING_EVIDENCE' };
  const f = eParse(order.facts), age = task.at - order.deliveredDay;
  if (!f || !Number.isInteger(order.deliveredDay) || !Number.isInteger(task.at) || age < 0) return { reason: 'INVALID_FACT' };
  const clauses = ['WINDOW'];
  if (age > 14) return { decision: 'RETURN_NO', clauses };
  clauses.push('CATEGORY');
  if (f.category === 'consumable') clauses.push('OPENED');
  if (f.category === 'custom' || (f.category === 'consumable' && f.opened)) clauses.push('EXCEPTION');
  return { decision: f.exceptionApproved || f.category === 'standard' || (f.category === 'consumable' && !f.opened) ? 'RETURN_OK' : 'RETURN_NO', clauses };
}
export function makeSpecs(seedBase = PUBLIC_SEED) {
  const specs = [];
  for (const scene of SCENARIOS) for (let index = 0; index < (scene.id === 'happy' ? 2 : 5); index++) {
    const n = eHash(`${seedBase}:${scene.id}:${index}`), random = eRandom(n), seed = n.toString(16).padStart(8, '0');
    const tenantId = `shop-${1 + Math.floor(random() * 99)}`, at = 1000 + Math.floor(random() * 9000);
    const task = { id: `B-${seed}`, tenantId, policyRevision: 'P1', at, tickets: [] };
    const orders = [], models = { economy: {}, strong: {} }, expected = {};
    for (let i = 0; i < 6; i++) {
      const ticketId = `T-${seed}-${i + 1}`, orderId = `O-${seed}-${i + 1}`;
      const ticket = { ticketId, tenantId, orderId, policyRevision: 'P1', body: '请核对本订单退货条件；用户自述不作为订单事实。' };
      task.tickets.push(ticket);
      let category = ['standard', 'standard', 'standard', 'consumable', 'consumable', 'custom'][i];
      let opened = i >= 4, exceptionApproved = i === 5;
      let age = i === 1 ? 15 : i === 0 ? [0, 14, 1, 13, 14][index % 5] : 1 + Math.floor(random() * 12);
      if (scene.id === 'rules') {
        category = ['standard', 'standard', 'custom', 'consumable', 'consumable', 'custom'][i];
        // 公开批次同时覆盖例外对定制及拆封耗材的优先级。
        opened = i === 4; exceptionApproved = i === 5 || (i === 4 && index % 2 === 1);
      }
      if (scene.id === 'happy' || scene.id === 'partial') {
        category = i % 2 ? 'consumable' : 'standard'; opened = false; exceptionApproved = false;
      }
      if (scene.id === 'confidence') { category = i === 4 ? 'consumable' : i === 5 ? 'custom' : 'standard'; }
      const structured = scene.id === 'rules' || (scene.id === 'mixed' && i < 2);
      const complex = scene.id === 'mixed' && i >= 4;
      const note = `已核实：${{ standard: '非定制普通商品', custom: '定制商品', consumable: '耗材' }[category]}；${opened ? '已拆封' : '未拆封'}；${exceptionApproved ? '已批准例外' : '未批准例外'}。${complex ? POLICY.textGrammar.combination.replace('可选后缀：', '') : ''}`;
      const order = { orderId, tenantId, orderRevision: 1 + Math.floor(random() * 4), policyRevision: 'P1', status: 'confirmed', evidenceRef: `ev-${seed}-${i + 1}`, deliveredDay: at - age, facts: structured ? { format: 'structured', category, opened, exceptionApproved } : { format: 'text', note } };
      if (scene.id === 'partial' && [1, 3].includes(index) && i === 5) Object.assign(order, { status: 'unknown', reason: 'SERVICE_UNAVAILABLE', evidenceRef: null, deliveredDay: null, facts: null });
      orders.push(order);
      const truth = eEvaluate(task, order);
      expected[ticketId] = truth.decision || 'WAITING_HUMAN';
      const wrong = complex || (scene.id === 'confidence' && (i === 4 || (i === 5 && index % 2 === 0)));
      models.strong[ticketId] = truth.decision ? { status: 'candidate', decision: truth.decision, confidence: 0.99, clauseRefs: truth.clauses } : { status: 'unknown', reason: truth.reason };
      models.economy[ticketId] = truth.decision ? { status: 'candidate', decision: wrong ? (truth.decision === 'RETURN_OK' ? 'RETURN_NO' : 'RETURN_OK') : truth.decision, confidence: wrong ? 0.98 : 0.93, clauseRefs: truth.clauses } : { status: 'unknown', reason: truth.reason };
    }
    // 只打散工单；订单/模型/预期均按 ID 对齐，玩家 ctx 没有场景或评分 index。
    for (let i = 5; i > 0; i--) { const j = Math.floor(random() * (i + 1)); [task.tickets[i], task.tickets[j]] = [task.tickets[j], task.tickets[i]]; }
    specs.push({ scenario: scene.id, index, seed, task, orders, expected, models,
      fault: scene.id === 'partial' ? { ticketId: orders[2].orderId.replace('O-', 'T-'), model: 'economy', kind: ['omit', 'duplicate', 'wrongId', 'omit', 'duplicate'][index], key: `${seed}:${orders[2].orderId.replace('O-', 'T-')}:economy` } : null });
  }
  return specs;
}
// 输入复制只读取自有 descriptor.value；getter、继承、toJSON 均无权影响事实或指纹。
function eField(input, name) {
  if (!input || typeof input !== 'object' || Array.isArray(input)) throw { code: 'STRUCTURE', message: '需要自有数据对象' };
  const d = Object.getOwnPropertyDescriptor(input, name);
  if (!d || !eOwn(d, 'value')) throw { code: 'STRUCTURE', message: `缺少数据字段 ${name}（不接受 getter）` };
  return d.value;
}
function eArray(input) {
  if (!Array.isArray(input)) throw { code: 'STRUCTURE', message: '需要1—6项数组' };
  const d = Object.getOwnPropertyDescriptor(input, 'length');
  if (!d || !eOwn(d, 'value') || !Number.isInteger(d.value) || d.value < 1 || d.value > 6) throw { code: 'STRUCTURE', message: '需要1—6项数组' };
  const values = [];
  for (let i = 0; i < d.value; i++) {
    const item = Object.getOwnPropertyDescriptor(input, String(i));
    if (!item || !eOwn(item, 'value')) throw { code: 'STRUCTURE', message: '数组必须是完整自有数据项' };
    values.push(item.value);
  }
  return values;
}
function eStrings(input) {
  const values = eArray(input);
  if (!values.every((v) => typeof v === 'string' && v.length) || new Set(values).size !== values.length) throw { code: 'STRUCTURE', message: 'ID/引用必须是唯一非空字符串' };
  return values;
}
function eReferences(input) {
  if (Array.isArray(input)) {
    const length = Object.getOwnPropertyDescriptor(input, 'length');
    if (length && eOwn(length, 'value') && length.value === 0) return [];
  }
  return eStrings(input).sort();
}
function eCandidate(input) {
  const result = {};
  for (const key of POLICY.candidate.required) result[key] = eField(input, key);
  if (typeof result.ticketId !== 'string' || !['RETURN_OK', 'RETURN_NO'].includes(result.decision) || typeof result.policyRevision !== 'string') throw { code: 'STRUCTURE', message: '候选字段无效' };
  result.evidenceRefs = eReferences(result.evidenceRefs); result.clauseRefs = eReferences(result.clauseRefs);
  return result;
}
const eFingerprint = (c) => JSON.stringify([c.ticketId, c.decision, c.policyRevision, c.evidenceRefs, c.clauseRefs]);
const eAbsent = () => ({ status: 'absent', coverageComplete: false, rows: [] });
export async function runOne(inputSpec, loadHooks, opts = {}) {
  // 独立运行/演示也带同输入真实对照成本；内部测量世界不会再次递归测量。
  if (!opts._measuring && (!Number.isFinite(opts.baselineCost) || !Number.isFinite(opts.referenceCost))) {
    const baseline = await runOne(inputSpec, () => ({ onOptimize: efficiencyBaseline, canComplete: efficiencyComplete }), { hangMs: opts.hangMs, _measuring: true });
    const reference = await runOne(inputSpec, () => ({ onOptimize: efficiencyReference, canComplete: efficiencyComplete }), { hangMs: opts.hangMs, _measuring: true });
    return runOne(inputSpec, loadHooks, { ...opts, baselineCost: baseline.cost.total, referenceCost: reference.cost.total });
  }
  const spec = eClone(inputSpec), task = eClone(spec.task), policy = eClone(POLICY);
  const hangMs = Number.isFinite(opts.hangMs) ? Math.max(1, opts.hangMs) : 200;
  const tickets = new Map(task.tickets.map((t) => [t.ticketId, t])), orders = new Map(spec.orders.map((o) => [o.orderId, o]));
  const evidence = new Map(), receipts = new Map(), humanReceipts = new Map(), origins = new Map(), consumed = new Set();
  const progress = new Map(task.tickets.map((t) => [t.ticketId, { state: 'UNHANDLED', route: null, verified: false }]));
  const gates = { scope: false, unsafe: false, falseClaim: false, aborted: false };
  const byType = { query: 0, rules: 0, economy: 0, strong: 0, verify: 0, human: 0, save: 0 }, ledger = [], trace = [];
  let report = eAbsent(), total = 0, reserved = 0, now = 0, usedCalls = 0, receiptSeq = 0, aborted = null, finished = false, busy = false;
  function abort(message) { gates.aborted = true; if (!aborted) aborted = message; return { code: 'ABORTED', message }; }
  function results() {
    return task.tickets.map((t) => {
      const p = progress.get(t.ticketId), ev = evidence.get(t.orderId);
      const truth = eEvaluate(task, orders.get(t.orderId)).decision || 'WAITING_HUMAN';
      return { ticketId: t.ticketId, orderId: t.orderId, state: p.state, expected: truth,
        appropriate: p.state !== 'UNHANDLED' && p.state === truth, route: p.route, verified: p.verified, evidenceStatus: ev ? ev.status : 'unqueried' };
    });
  }
  function log(phase, text, anim, world = false) {
    const entry = { t: eRound(now), phase, text };
    if (world) entry.world = true;
    if (anim) entry.anim = { ...anim, totalCost: total, byType: { ...byType }, results: results() };
    trace.push(entry);
  }
  function charge(entry, type, amount) { entry.cost = amount; total += amount; byType[type] += amount; }
  function scope(ids, orderIds = false) {
    const map = orderIds ? orders : tickets;
    if (ids.some((id) => !map.has(id) || map.get(id).tenantId !== task.tenantId || (orderIds && !task.tickets.some((t) => t.orderId === id)))) {
      gates.scope = true; throw { code: 'SCOPE', message: '拒绝本批以外或跨租户 ID' };
    }
  }
  function candidateFor(ticketId, decision, clauses) {
    const ticket = tickets.get(ticketId), ev = evidence.get(ticket.orderId);
    return { ticketId, decision, policyRevision: task.policyRevision, evidenceRefs: ev && ev.evidenceRef ? [ev.evidenceRef] : [], clauseRefs: clauses.slice() };
  }
  function active(instance) {
    if (instance.closed || !instance.accepting) throw abort('回调已经结束，旧工具不可新增调用');
    if (aborted) throw { code: 'ABORTED', message: aborted };
  }
  function reserveCost(name, model, n) {
    if (name === 'queryOrders') return 3;
    if (name === 'infer') return 1 + n * (model === 'strong' ? 8 : model === 'economy' ? 2 : 8);
    if (name === 'askHuman') return 12 * n;
    if (name === 'saveReport') return 1;
    return n;
  }
  function seconds(name, model, n) {
    const s = POLICY.seconds;
    return { queryOrders: s.query, applyRules: s.rules * n, infer: model === 'strong' ? s.strongStart + s.strongItem * n : s.economyStart + s.economyItem * n, verify: s.verify * n, askHuman: s.human * n, saveReport: s.save }[name];
  }
  function makeTools(instance) {
    const methods = {};
    for (const name of ['queryOrders', 'applyRules', 'infer', 'verify', 'askHuman', 'saveReport']) methods[name] = (...args) => {
      // Promise 在任何不可信 descriptor/trap 执行之前登记；处理同步，避免调用后修改输入。
      let resolve, reject;
      const promise = new Promise((a, b) => { resolve = a; reject = b; });
      promise.catch(() => {});
      if (finished) { reject({ code: 'ABORTED', message: '回调已经结束，旧工具不可使用' }); return promise; }
      ePush(instance.pending, promise);
      const attempt = ++usedCalls;
      const model = name === 'infer' && typeof args[0] === 'string' ? args[0] : null;
      const type = { queryOrders: 'query', applyRules: 'rules', infer: model === 'strong' ? 'strong' : 'economy', verify: 'verify', askHuman: 'human', saveReport: 'save' }[name];
      const entry = { attemptId: `a-${attempt}`, tool: name === 'infer' ? `infer:${model || 'invalid'}` : name, items: 0, cost: 0, t: eRound(now) };
      // type 是宿主局部信息，账本公开行保持固定 schema。
      ePush(ledger, entry);
      let reservation = 0, acquired = false, settled = false;
      const settle = (amount) => {
        if (settled) return;
        settled = true; reserved -= reservation; reservation = 0;
        charge(entry, type, amount);
      };
      const startup = name === 'queryOrders' ? 3 : name === 'infer' || name === 'saveReport' ? 1 : 0;
      try {
        active(instance);
        if (busy) throw abort('工具输入检查发生重入，不允许新增调用');
        busy = true; acquired = true;
        if (usedCalls > POLICY.budget.calls) throw abort('超过80次工具调用预算');
        const raw = name === 'infer' ? args[1] : args[0];
        // length 的 descriptor 也可能是 Proxy trap；检查后重新核对生命周期和 gate。
        let n = 0;
        if (Array.isArray(raw)) {
          const length = Object.getOwnPropertyDescriptor(raw, 'length');
          if (length && eOwn(length, 'value') && Number.isInteger(length.value) && length.value >= 1 && length.value <= 6) n = length.value;
        }
        active(instance);
        reservation = n ? reserveCost(name, model, n) : startup;
        if (total + reserved + reservation > POLICY.budget.cost) { reservation = 0; throw abort('超过160点成本预算'); }
        reserved += reservation;
        const values = eArray(raw);
        if (values.length !== n) throw { code: 'STRUCTURE', message: '输入数组长度在预留与复制间变化' };
        let ids, normalized = null;
        if (name === 'verify' || name === 'saveReport') ids = values.map((v) => eField(v, 'ticketId'));
        else ids = values.slice();
        // 不再读取 raw；执行只使用这一次数据快照，恶意 Proxy 无法低报项数或切换 ID。
        scope(ids.filter((v) => typeof v === 'string' && v.length), name === 'queryOrders');
        if (!ids.every((v) => typeof v === 'string' && v.length) || new Set(ids).size !== ids.length) throw { code: 'STRUCTURE', message: '工单/订单 ID 必须唯一非空字符串' };
        if (name === 'infer' && !['economy', 'strong'].includes(model)) throw { code: 'STRUCTURE', message: 'model 只能 economy/strong' };
        if (name === 'askHuman' && (typeof args[1] !== 'string' || !args[1].trim())) throw { code: 'STRUCTURE', message: '人工交接必须说明原因' };
        if (name === 'verify') {
          normalized = values.map((rawCandidate) => {
            try { return eCandidate(rawCandidate); } catch (_) { return null; }
          });
          for (const c of normalized) if (c) scope([c.ticketId]);
        }
        if (name === 'saveReport') {
          if (ids.length !== task.tickets.length || task.tickets.some((t) => !ids.includes(t.ticketId))) throw { code: 'UNSAFE', message: '报告必须覆盖整批六单' };
          normalized = values.map((row, i) => {
            const ticketId = ids[i], decision = eField(row, 'decision');
            if (decision === 'WAITING_HUMAN') {
              const handoffReceiptId = eField(row, 'handoffReceiptId'), real = humanReceipts.get(handoffReceiptId);
              if (!real || real.ticketId !== ticketId) throw { code: 'UNSAFE', message: '不是当前工单真实人工回执' };
              return { ticketId, decision, handoffReceiptId };
            }
            const c = eCandidate(eField(row, 'candidate')), verificationReceiptId = eField(row, 'verificationReceiptId');
            scope([c.ticketId]);
            const real = receipts.get(verificationReceiptId);
            if (!real || real.ticketId !== ticketId || c.ticketId !== ticketId || decision !== c.decision || real.fingerprint !== eFingerprint(c)) throw { code: 'UNSAFE', message: '当前候选指纹与真实验证回执不匹配' };
            const ev = evidence.get(tickets.get(ticketId).orderId), truth = eEvaluate(task, ev);
            if (!ev || truth.decision !== decision || ev.policyRevision !== task.policyRevision || c.policyRevision !== task.policyRevision || !c.evidenceRefs.includes(ev.evidenceRef)) throw { code: 'UNSAFE', message: '报告缺少当前真实订单事实' };
            return { ticketId, decision, candidate: c, verificationReceiptId };
          });
        }
        active(instance); // Proxy trap 不能重入耗尽预算后再继续原操作。
        if (total + reserved > POLICY.budget.cost) throw abort('超过160点成本预算');
        const duration = seconds(name, model, values.length);
        if (now + duration > POLICY.budget.seconds) { now = POLICY.budget.seconds; throw abort('超过180秒模拟期限'); }
        entry.items = values.length; settle(reserveCost(name, model, values.length)); now = eRound(now + duration);
        let output;
        if (name === 'queryOrders') {
          const items = ids.map((id) => { const real = eClone(orders.get(id)); evidence.set(id, real); return eClone(real); });
          output = { items }; log('OBSERVE', `批量查询 ${ids.length} 张订单`, { type: 'query', ticketIds: task.tickets.filter((t) => ids.includes(t.orderId)).map((t) => t.ticketId), status: items.every((o) => o.status === 'confirmed') ? 'confirmed' : 'unknown', evidence: eClone(items) });
        } else if (name === 'applyRules' || name === 'infer') {
          let items = ids.map((ticketId) => {
            const ev = evidence.get(tickets.get(ticketId).orderId), truth = eEvaluate(task, ev);
            progress.get(ticketId).route = name === 'applyRules' ? 'rules' : model;
            if (!truth.decision) return { ticketId, status: truth.reason === 'FACT_UNKNOWN' ? 'unknown' : 'unsupported', reason: truth.reason };
            if (name === 'applyRules' && ev.facts.format !== 'structured') return { ticketId, status: 'unsupported', reason: 'RULE_UNSUPPORTED' };
            const script = name === 'infer' ? spec.models[model][ticketId] : null;
            if (script && script.status !== 'candidate') return { ticketId, status: script.status, reason: script.reason };
            const c = candidateFor(ticketId, script ? script.decision : truth.decision, script ? script.clauseRefs : truth.clauses);
            origins.set(eFingerprint(eCandidate(c)), name === 'applyRules' ? 'rules' : model);
            return { ticketId, status: 'candidate', ...(script ? { confidence: script.confidence } : {}), candidate: c };
          });
          const fault = spec.fault;
          if (name === 'infer' && model === 'economy' && ids.length >= 2 && fault && ids.includes(fault.ticketId) && !consumed.has(`${spec.seed}:${fault.ticketId}:economy`)) {
            consumed.add(`${spec.seed}:${fault.ticketId}:economy`);
            const target = items.findIndex((item) => item.ticketId === fault.ticketId);
            if (fault.kind === 'omit') items.splice(target, 1);
            else if (fault.kind === 'duplicate') items[target] = eClone(items.find((item) => item.ticketId !== fault.ticketId));
            else if (fault.kind === 'wrongId') { items[target].ticketId = `foreign-${spec.seed}`; if (items[target].candidate) items[target].candidate.ticketId = `foreign-${spec.seed}`; }
          }
          output = { items }; log('OBSERVE', `${name === 'applyRules' ? '规则' : model} 返回 ${items.length} 项候选/状态（输入 ${ids.length} 项）`, { type: 'route', ticketIds: ids, route: name === 'applyRules' ? 'rules' : model, items: eClone(items) });
        } else if (name === 'verify') {
          const items = normalized.map((c, i) => {
            const ticketId = ids[i];
            if (!c || c.ticketId !== ticketId) return { ticketId, status: 'rejected', reason: 'CANDIDATE_INVALID', receiptId: null };
            const ev = evidence.get(tickets.get(ticketId).orderId), truth = eEvaluate(task, ev);
            let reason = truth.reason || null;
            if (!reason && (c.policyRevision !== task.policyRevision || ev.policyRevision !== task.policyRevision || ev.tenantId !== task.tenantId || ev.orderRevision !== orders.get(ev.orderId).orderRevision || !c.evidenceRefs.includes(ev.evidenceRef)
              || c.evidenceRefs.some((ref) => ![...evidence.values()].some((real) => real.status === 'confirmed' && real.evidenceRef === ref && real.tenantId === task.tenantId && real.policyRevision === task.policyRevision && real.orderRevision === orders.get(real.orderId).orderRevision)))) reason = 'MISSING_EVIDENCE';
            if (!reason && (c.clauseRefs.some((ref) => !eOwn(POLICY.clauses, ref)) || truth.clauses.some((ref) => !c.clauseRefs.includes(ref)))) reason = 'CLAUSE_MISMATCH';
            if (!reason && c.decision !== truth.decision) reason = 'CANDIDATE_INVALID';
            if (reason) return { ticketId, status: reason === 'FACT_UNKNOWN' ? 'unknown' : 'rejected', reason, receiptId: null };
            const receiptId = `vr-${spec.seed}-${++receiptSeq}`, fingerprint = eFingerprint(c), route = origins.get(fingerprint) || 'rules';
            receipts.set(receiptId, { ticketId, fingerprint, route });
            progress.get(ticketId).verified = true; progress.get(ticketId).route = route;
            return { ticketId, status: 'accepted', reason: null, receiptId };
          });
          active(instance); output = { items }; log('OBSERVE', `独立验证 ${items.length} 项`, { type: 'verify', ticketIds: ids, status: items.every((x) => x.status === 'accepted') ? 'accepted' : 'rejected', items: eClone(items) });
        } else if (name === 'askHuman') {
          const items = ids.map((ticketId) => {
            const receiptId = `hr-${spec.seed}-${++receiptSeq}`; humanReceipts.set(receiptId, { ticketId, reason: args[1] });
            Object.assign(progress.get(ticketId), { state: 'WAITING_HUMAN', route: 'human', verified: false });
            return { ticketId, status: 'waiting', receiptId };
          });
          output = { items }; log('HUMAN', `真实交接 ${ids.length} 单：${args[1]}`, { type: 'human', ticketIds: ids, route: 'human', status: 'waiting' });
        } else {
          report = { status: 'saved', artifactId: `ar-${task.id}`, taskId: task.id, policyRevision: task.policyRevision, coverageComplete: true, rows: normalized };
          for (const row of normalized) Object.assign(progress.get(row.ticketId), { state: row.decision, route: row.decision === 'WAITING_HUMAN' ? 'human' : receipts.get(row.verificationReceiptId).route, verified: row.decision !== 'WAITING_HUMAN' });
          output = eClone(report); log('OBSERVE', '整批六单报告已原子保存（无真实对外副作用）', { type: 'report', ticketIds: ids, status: 'saved' });
        }
        resolve(eClone(output));
      } catch (error) {
        if (name === 'saveReport' && !(error && error.code === 'ABORTED')) gates.unsafe = true;
        if (!settled) {
          const executedStartup = !(error && error.code === 'ABORTED');
          settle(executedStartup ? startup : 0);
          if (executedStartup) {
            const duration = seconds(name, model, 0);
            if (now + duration > POLICY.budget.seconds) { now = POLICY.budget.seconds; abort('超过180秒模拟期限'); }
            else now = eRound(now + duration);
          }
        }
        if (acquired) log('HARNESS', `${entry.tool} 拒绝：${error && error.message || '输入无效'}`);
        reject({ code: error && error.code || 'STRUCTURE', message: error && error.message || '工具输入无效' });
      } finally { if (acquired) busy = false; }
      return promise;
    };
    return methods;
  }
  async function guarded(promise) {
    let timer;
    const timeout = new Promise((resolve) => { timer = setTimeout(() => resolve({ hang: true }), hangMs); });
    try { return await Promise.race([Promise.resolve(promise).then((value) => ({ value })), timeout]); }
    finally { clearTimeout(timer); }
  }
  async function invoke(name) {
    const instance = { closed: false, accepting: true, pending: [] };
    try {
      let loaded;
      try { loaded = await guarded(loadHooks()); } catch (_) { throw abort('玩家代码无法加载'); }
      if (loaded.hang) throw abort('玩家代码加载一直没有返回');
      const fn = loaded.value && loaded.value[name];
      if (typeof fn !== 'function') throw abort(`没有找到 ${name} 函数`);
      log('HARNESS', `全新实例 ${name}(ctx)${name === 'canComplete' ? ' · tools=null' : ''}`);
      const ctx = { task: eClone(task), policy: eClone(policy), evidence: eClone([...evidence.values()]), report: eClone(report),
        budget: { cost: POLICY.budget.cost, calls: POLICY.budget.calls, seconds: POLICY.budget.seconds, spent: total, remaining: POLICY.budget.cost - total, usedCalls, elapsed: now }, tools: name === 'canComplete' ? null : makeTools(instance) };
      const out = await guarded(fn(ctx));
      instance.accepting = false;
      await Promise.allSettled(instance.pending);
      if (out.hang) throw abort(`${name} 一直没有返回`);
      if (name === 'canComplete' && typeof out.value !== 'boolean') throw abort('canComplete 必须返回 true 或 false');
      return out.value;
    } catch (_) { if (!aborted) abort(`${name} 执行异常`); return undefined; }
    finally { instance.accepting = false; await Promise.allSettled(instance.pending); instance.closed = true; }
  }
  log('PREPARE', `当前批次 ${task.id}，6 张工单；预算160点/80calls/180秒`);
  log('WORLD', '公开输入的业务真值由当前政策与真实订单计算；模型输出不是真值。', null, true);
  await invoke('onOptimize');
  let state = 'WAITING_HUMAN', stateReason = 'Harness 未确认整批完成；没有自动创建工单交接回执';
  if (!aborted) {
    const ok = await invoke('canComplete');
    if (!aborted && ok === true) {
      if (report.status !== 'saved' || !report.coverageComplete || report.taskId !== task.id || report.policyRevision !== task.policyRevision) {
        gates.falseClaim = true; stateReason = '宣称完成但没有当前完整可信报告';
      } else { state = 'COMPLETED'; stateReason = '合法整批分流报告已保存，canComplete 已确认；人工单仍待核实'; }
    }
  }
  if (aborted) { state = 'ABORTED'; stateReason = aborted; }
  const failed = Object.values(gates).some(Boolean), finalResults = results();
  const correct = !failed && state === 'COMPLETED' && finalResults.every((r) => r.appropriate);
  log('DONE', stateReason, { type: 'report', ticketIds: task.tickets.map((t) => t.ticketId), status: state });
  for (const [gate, bad] of Object.entries(gates)) log('GATE', `${gate}：${bad ? '一票否决' : '通过'}`);
  finished = true;
  return { scenario: spec.scenario, index: spec.index, seed: spec.seed, task: eClone(task), state, stateReason, gates: { ...gates }, failed, correct,
    report: eClone(report), results: finalResults, cost: { total, byType: { ...byType }, ledger: eClone(ledger) },
    baselineCost: Number.isFinite(opts.baselineCost) ? opts.baselineCost : null, referenceCost: Number.isFinite(opts.referenceCost) ? opts.referenceCost : null, endAt: now, trace: eClone(trace) };
}
// 以下函数既是可信宿主对照实现，也是可复制字符串的唯一源，不动态编译对照。
function efficiencyComplete(ctx) {
  return ctx.report.status === 'saved' && ctx.report.coverageComplete === true
    && ctx.report.taskId === ctx.task.id && ctx.report.policyRevision === ctx.task.policyRevision
    && ctx.report.rows.length === ctx.task.tickets.length;
}
async function efficiencyBaseline(ctx) {
  const rows = [];
  for (const ticket of ctx.task.tickets) {
    const queried = await ctx.tools.queryOrders([ticket.orderId]);
    // 保守对照每单均调用强模型，包括 unknown；事实缺失不会被模型补齐。
    const inferred = await ctx.tools.infer('strong', [ticket.ticketId]);
    const item = inferred.items.find((x) => x.ticketId === ticket.ticketId);
    if (queried.items[0].status !== 'confirmed') {
      const handoff = await ctx.tools.askHuman([ticket.ticketId], '订单关键事实稳定 unknown，请人工核实');
      rows.push({ ticketId: ticket.ticketId, decision: 'WAITING_HUMAN', handoffReceiptId: handoff.items[0].receiptId });
    } else {
      const verified = await ctx.tools.verify([item.candidate]);
      if (verified.items[0].status !== 'accepted') throw new Error('保守对照候选未通过验证');
      rows.push({ ticketId: ticket.ticketId, decision: item.candidate.decision, candidate: item.candidate, verificationReceiptId: verified.items[0].receiptId });
    }
  }
  await ctx.tools.saveReport(rows);
}
async function efficiencyReference(ctx) {
  const queried = await ctx.tools.queryOrders(ctx.task.tickets.map((t) => t.orderId));
  const rows = [], rules = [], economy = [], strong = [], unknown = [];
  for (const ticket of ctx.task.tickets) {
    const ev = queried.items.find((o) => o.orderId === ticket.orderId);
    if (ev.status !== 'confirmed') unknown.push(ticket.ticketId);
    else if (ev.facts.format === 'structured') rules.push(ticket.ticketId);
    else if (ev.facts.note.includes('组合条款：')) strong.push(ticket.ticketId);
    else economy.push(ticket.ticketId);
  }
  if (unknown.length) {
    const handed = await ctx.tools.askHuman(unknown, '订单关键事实稳定 unknown，请人工核实');
    for (const item of handed.items) rows.push({ ticketId: item.ticketId, decision: 'WAITING_HUMAN', handoffReceiptId: item.receiptId });
  }
  // 覆盖按 ID 对齐，重复/外来 ID 安全丢弃；只验证唯一真实候选。
  async function accept(response, ids) {
    const candidates = [];
    for (const id of ids) {
      const matches = response.items.filter((item) => item.ticketId === id);
      if (matches.length === 1 && matches[0].status === 'candidate' && matches[0].candidate.ticketId === id) candidates.push(matches[0].candidate);
    }
    if (!candidates.length) return ids.slice();
    const verified = await ctx.tools.verify(candidates), accepted = [];
    for (const item of verified.items) if (item.status === 'accepted') {
      const candidate = candidates.find((c) => c.ticketId === item.ticketId);
      rows.push({ ticketId: item.ticketId, decision: candidate.decision, candidate, verificationReceiptId: item.receiptId }); accepted.push(item.ticketId);
    }
    return ids.filter((id) => !accepted.includes(id));
  }
  if (rules.length) {
    const retry = await accept(await ctx.tools.applyRules(rules), rules);
    strong.push(...retry);
  }
  if (economy.length) {
    const response = await ctx.tools.infer('economy', economy);
    const retry = await accept(response, economy);
    // 被拒候选升级；纯覆盖故障只补缺项（单项不再次触发批量故障）。
    for (const id of retry) {
      const matches = response.items.filter((item) => item.ticketId === id);
      if (matches.length !== 1 || matches[0].status !== 'candidate' || matches[0].candidate.ticketId !== id) {
        const remaining = await accept(await ctx.tools.infer('economy', [id]), [id]); strong.push(...remaining);
      } else strong.push(id);
    }
  }
  if (strong.length) {
    const retry = await accept(await ctx.tools.infer('strong', strong), strong);
    if (retry.length) throw new Error('强模型也不能替代缺失或无效事实');
  }
  await ctx.tools.saveReport(rows);
}
export const REFERENCE = efficiencyReference.toString().replace('efficiencyReference', 'onOptimize') + '\n' + efficiencyComplete.toString().replace('efficiencyComplete', 'canComplete');
export const BASELINE = efficiencyBaseline.toString().replace('efficiencyBaseline', 'onOptimize') + '\n' + efficiencyComplete.toString().replace('efficiencyComplete', 'canComplete');
export async function runAll(loadHooks, { seedBase = PUBLIC_SEED, hangMs } = {}) {
  const runs = [];
  // 同输入、独立世界、真实相同工具；在运行玩家前固定完整成本，不调用 compileHarness。
  for (const spec of makeSpecs(seedBase)) {
    const baseline = await runOne(spec, () => ({ onOptimize: efficiencyBaseline, canComplete: efficiencyComplete }), { hangMs, _measuring: true });
    const reference = await runOne(spec, () => ({ onOptimize: efficiencyReference, canComplete: efficiencyComplete }), { hangMs, _measuring: true });
    if (!baseline.correct || !reference.correct || reference.cost.total >= baseline.cost.total) throw new Error(`公开参考/对照验收失败：${spec.seed}`);
    runs.push(await runOne(spec, loadHooks, { hangMs, baselineCost: baseline.cost.total, referenceCost: reference.cost.total }));
  }
  return summarize(runs);
}
export function summarize(runs) {
  const count = runs.length, passed = count > 0 && runs.every((r) => !r.failed && !Object.values(r.gates).some(Boolean));
  const stats = { runs: count, tickets: runs.reduce((n, r) => n + r.results.length, 0),
    appropriate: runs.reduce((n, r) => n + r.results.filter((x) => x.appropriate).length, 0),
    autoCorrect: runs.reduce((n, r) => n + r.results.filter((x) => x.appropriate && ['RETURN_OK', 'RETURN_NO'].includes(x.state)).length, 0),
    human: runs.reduce((n, r) => n + r.results.filter((x) => x.state === 'WAITING_HUMAN').length, 0),
    reports: runs.filter((r) => r.state === 'COMPLETED' && r.report.status === 'saved' && r.report.coverageComplete).length,
    totalCost: runs.reduce((n, r) => n + r.cost.total, 0), baselineCost: runs.reduce((n, r) => n + (r.baselineCost || 0), 0), referenceCost: runs.reduce((n, r) => n + (r.referenceCost || 0), 0), savingsPercent: null,
    avgTime: count ? eRound(runs.reduce((n, r) => n + r.endAt, 0) / count) : 0 };
  const aligned = passed && count === 22 && stats.tickets === 132 && stats.appropriate === 132 && stats.reports === 22 && runs.every((r) => r.correct);
  const denominator = stats.baselineCost - stats.referenceCost;
  if (aligned && denominator <= 0) throw new Error('参考成本分母非正，公开设计/参考验收失败');
  const raw = { base: passed ? 60 : 0, outcome: passed && stats.tickets ? 20 * stats.appropriate / stats.tickets : 0,
    efficiency: aligned ? 20 * Math.max(0, Math.min(1, (stats.baselineCost - stats.totalCost) / denominator)) : 0 };
  if (aligned) stats.savingsPercent = eRound(100 * (stats.baselineCost - stats.totalCost) / stats.baselineCost);
  const score = Math.round(raw.base + raw.outcome + raw.efficiency), failedBy = {}, byScenario = {};
  for (const gate of ['scope', 'unsafe', 'falseClaim', 'aborted']) failedBy[gate] = [...new Set(runs.filter((r) => r.gates[gate]).map((r) => r.scenario))];
  for (const scenario of SCENARIOS) {
    const group = runs.filter((r) => r.scenario === scenario.id);
    byScenario[scenario.id] = { total: group.length, failed: group.filter((r) => r.failed).length, correct: group.filter((r) => r.correct).length };
  }
  return { level: { ...LEVEL }, passed, optimized: aligned && score >= 90, score, parts: { base: raw.base, outcome: raw.outcome, efficiency: raw.efficiency }, stats, failedBy, byScenario, runs };
}
// 仅 Node 有界测试使用；生产 Worker 一律 compileSandboxed（Sval）。
export function compileHarness(code) {
  const source = String(code).replace(/^\s*export\s+default\s+/gm, '').replace(/^\s*export\s+(async\s+function|function|const|let|var|class)\b/gm, '$1');
  return () => new Function('setTimeout', 'setInterval', 'requestAnimationFrame', 'setImmediate', 'queueMicrotask', 'clearTimeout', 'clearInterval', 'clearImmediate', 'cancelAnimationFrame', `"use strict";\n${source}\n;return {onOptimize: typeof onOptimize === "function" ? onOptimize : undefined, canComplete: typeof canComplete === "function" ? canComplete : undefined};`)(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);
}
