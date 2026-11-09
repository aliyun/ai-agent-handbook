// 第 04 关页面：评分与事实由同一个 Worker 宿主持有，页面只展示快照。
(() => {
'use strict';
const $ = (id) => document.getElementById(id);
const esc = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const json = (v) => JSON.stringify(v, null, 2);
const number = (v, digits = 2) => Number.isFinite(v) ? String(Number(v.toFixed(digits))) : '—';
const fmtT = (v) => Number.isFinite(v) ? v.toFixed(2).replace(/0$/, '') : '—';
const TITLE = '调用成本高，如何优化？';
const TOTAL_RUNS = 22, TOTAL_TICKETS = 132;
const levelId = document.body.dataset.level?.startsWith('__') ? '04-efficiency' : document.body.dataset.level || '04-efficiency';
const version = /^v\d+$/.test(document.body.dataset.version || '') ? document.body.dataset.version : 'v1';
const STORAGE = `agent-challenge:${levelId}:${version}`;
const KEY_CODE = `${STORAGE}:code`, KEY_RUNS = `${STORAGE}:runs`, KEY_BEST = `${STORAGE}:best`;
const CH17 = new URL('../../optimization/chapter-17/overview.html', location.href).href;
const CH9 = new URL('../../run/chapter-09/overview.html', location.href).href;
const GATES = { scope: '作用域违规', unsafe: '不安全提交', falseClaim: '虚假完成', aborted: '未正常收尾' };
const DECISIONS = { UNHANDLED: '尚未处理', RETURN_OK: '建议：符合退货条件', RETURN_NO: '建议：不符合退货条件', WAITING_HUMAN: '等待人工核实' };
const ROUTES = { rules: '确定性规则', economy: '经济模型', strong: '强模型', human: '人工交接' };
const COSTS = { query: '订单查询', rules: '规则计算', economy: '经济模型', strong: '强模型', verify: '独立验证', human: '人工交接', save: '报告保存' };
const FACTS = { unqueried: '未查询 · 不能猜事实', confirmed: 'confirmed · 已查到事实', unknown: 'unknown · 缺关键事实' };
const VERIFY = { accepted: 'accepted · 有有效回执', rejected: 'rejected · 需修正，不能提交', unknown: 'unknown · 无自动回执' };
const KNOWN_ANIMS = new Set(['query', 'route', 'verify', 'human', 'report']);
const LEARNING_ORDER = ['rules', 'happy', 'mixed', 'confidence', 'partial'];
const LESSONS = {
  rules: '先练规则能判断的单：字段齐全，先别用强模型；规则建议也要独立验证。',
  happy: '再试普通文本：经济模型就能处理的单，验证通过后不必再问强模型。',
  mixed: '接着看一批里有难有易：规则处理字段，经济模型处理普通文本，复杂条件才用强模型。',
  confidence: '进阶一：便宜模型很有把握也会错。独立验证未通过，只修对应单，不重做整批。',
  partial: '进阶二：批量回复可能漏单或混入错误编号。按工单编号补缺；订单事实确实查不到，才交给人工等待核实。',
};
// 仅保存当前页面的独立演示快照，不写入玩家成绩，也不使用静态成本冒充运行结果。
const teachingRuns = new Map();
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const ta = $('code'), hl = $('hl'), gutter = $('gutter');
let summary = null, mode = 'player', lastAttempt = null, previousScored = null, curRun = null;
let running = false, initialized = false, specs = [], sim = null, runFocus = null;
let playing = false, token = 0, speed = 1, activeTask = null, views = new Map(), stageReport = 'absent';
let stageTotal = 0, stageByType = {}, stageTime = 0;
let hintCount = 1;
const KW = new Set('async await function return const let var if else while for of in new try catch finally throw break continue typeof true false null undefined export default class this'.split(' '));
function highlight(src) {
  const re = /(\/\/[^\n]*|\/\*[\s\S]*?\*\/)|("(?:\\.|[^"\\\n])*"|'(?:\\.|[^'\\\n])*'|`(?:\\.|[^`\\])*`)|\b(\d+(?:\.\d+)?)\b|([A-Za-z_$][\w$]*)(?=\s*\()|([A-Za-z_$][\w$]*)/g;
  let out = '', last = 0, m;
  while ((m = re.exec(src))) {
    out += esc(src.slice(last, m.index));
    const t = m[0], cls = m[1] ? 'c' : m[2] ? 's' : m[3] ? 'n' : KW.has(t) ? 'k' : m[4] ? 'f' : '';
    out += cls ? `<span class="${cls}">${esc(t)}</span>` : esc(t); last = re.lastIndex;
  }
  return out + esc(src.slice(last));
}
function renderEditor() {
  hl.innerHTML = highlight(ta.value) + (ta.value.endsWith('\n') ? ' ' : '');
  gutter.textContent = Array.from({ length: ta.value.split('\n').length }, (_, i) => i + 1).join('\n');
}
function setStatus(text, kind = '') { $('status').className = 'ed-status' + (kind ? ' ' + kind : ''); $('status').textContent = text; }
function markStale() {
  const stale = !!lastAttempt && lastAttempt.mode === 'player' && lastAttempt.code !== ta.value;
  $('staleNote').hidden = !stale;
  $('feedback').classList.toggle('stale', stale);
  const shareable = initialized && !!summary && mode === 'player' && !stale && !running;
  $('shareBtn').disabled = !shareable; $('copyBtn').disabled = !shareable;
  $('copyResult').disabled = !lastAttempt || running;
  $('resultCopyNote').textContent = stale ? '复制会分别标明上次测试代码与当前未测试代码。' : mode !== 'player' && lastAttempt ? '当前是演示诊断，不是玩家成绩；复制时会附演示代码并保留玩家代码。' : '';
}
function onCodeChange() {
  renderEditor();
  try { localStorage.setItem(KEY_CODE, ta.value); setStatus('已自动保存到本机。'); }
  catch { setStatus('本机存储不可用，代码仍保留在编辑器；请复制备份后再关闭。', 'err'); }
  markStale();
}
function insertText(text) {
  let inserted = false;
  try { inserted = document.execCommand('insertText', false, text); } catch { /* 使用标准 textarea 回退 */ }
  if (!inserted) { ta.setRangeText(text, ta.selectionStart, ta.selectionEnd, 'end'); onCodeChange(); }
}
ta.addEventListener('input', onCodeChange);
ta.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' && (e.metaKey || e.ctrlKey)) { e.preventDefault(); run('player'); return; }
  if (ta.readOnly) return;
  if (e.key === 'Tab' && !e.shiftKey && !e.metaKey && !e.ctrlKey) { e.preventDefault(); insertText('  '); return; }
  if (e.key === 'Enter' && !e.shiftKey && !e.altKey && !e.isComposing) {
    const before = ta.value.slice(0, ta.selectionStart), line = before.slice(before.lastIndexOf('\n') + 1);
    let indent = line.match(/^\s*/)[0]; if (/[{(\[]\s*$/.test(line)) indent += '  ';
    e.preventDefault(); insertText('\n' + indent);
  }
});
$('resetCode').addEventListener('click', () => {
  if (!initialized || running || (ta.value !== sim.STARTER && !window.confirm('恢复起始代码会覆盖当前修改，确定吗？'))) return;
  ta.value = sim.STARTER; onCodeChange();
});

/* ---------------- classic Worker：绝不在主线程回退执行 ---------------- */
function runInWorker(code) {
  return new Promise((resolve) => {
    let worker, timer, settled = false;
    const finish = (result) => {
      if (settled) return;
      settled = true; clearTimeout(timer); if (worker) worker.terminate(); resolve(result);
    };
    try { worker = new Worker('worker.js'); }
    catch (error) { finish({ ok: false, kind: 'worker', message: String(error.message || error) }); return; }
    timer = setTimeout(() => finish({ ok: false, kind: 'timeout' }), 6000);
    worker.onmessage = (event) => finish(event.data);
    worker.onerror = (event) => { event.preventDefault(); finish({ ok: false, kind: 'worker', message: event.message || '独立线程未能启动' }); };
    worker.onmessageerror = () => finish({ ok: false, kind: 'worker', message: '独立线程的结果无法读取' });
    try { worker.postMessage({ code, seedBase: sim.PUBLIC_SEED }); }
    catch (error) { finish({ ok: false, kind: 'worker', message: String(error.message || error) }); }
  });
}
function setFeedback(kind, score, title, description, label = '') {
  $('feedback').className = `feedback ${kind}`;
  $('feedbackScore').innerHTML = `${esc(score)}<small>${esc(label)}</small>`;
  $('verdictTitle').textContent = title; $('scoreline').textContent = description;
}
function setBusy(busy) {
  running = busy;
  for (const button of document.querySelectorAll('[data-boot]')) button.disabled = busy || !initialized;
  $('scenarioSelect').disabled = busy || !initialized;
  ta.readOnly = busy || !initialized;
  $('replay').disabled = busy || !curRun; $('speed').disabled = busy || !curRun;
  $('runBtn').textContent = busy && mode === 'player' ? '正在检查效果与成本…' : '运行我的代码 →';
  $('feedbackPanel').setAttribute('aria-busy', String(busy));
  for (const button of $('dots').querySelectorAll('button')) button.disabled = busy;
  markStale();
}
function effectAligned(s) {
  return s.passed === true && s.stats.runs === TOTAL_RUNS && s.stats.tickets === TOTAL_TICKETS && s.stats.appropriate === TOTAL_TICKETS && s.stats.reports === TOTAL_RUNS && s.runs.every((r) => r.correct && !r.failed);
}
// optimized 是本关通过；passed 仅代表四条 gate 安全，不重新用 passed 推导过关。
function verdict(s) { return s.optimized ? '本关通过' : !s.passed ? '未通过 · 有底线违规' : effectAligned(s) ? '效果达标，还可省钱' : '底线安全，效果待完善'; }
function failText(s) {
  const names = Object.entries(GATES).filter(([key]) => (s.failedBy[key] || []).length).map(([key, label]) => `${label}：${s.failedBy[key].map(sceneName).join('、')}`);
  return names.join('；') || '无底线违规';
}
function savingText(s) {
  return effectAligned(s) && Number.isFinite(s.stats.savingsPercent) ? `相同效果下，比原流程节省 ${number(s.stats.savingsPercent, 1)}%` : '效果未对齐，暂不比较节省率';
}
function improvementText(s) {
  if (!s.passed) return '先修复底线；verify 被拒可以改，但不能把无效候选保存为可信结果。';
  if (!effectAligned(s)) return '核对每单覆盖、当前事实与独立回执；只交接真正缺事实的单，不能用人工掩盖可自动完成的难例。';
  if (!s.optimized) return '效果完整；可以合并查询，按项分工，仅修缺项或被拒项，避免验证通过后重复强模型复核。';
  return '效果完整且优化达标。100 分不是生产最优；更省的合法规则路径仍被接受。';
}
function teachingBatch(s) {
  return s.runs.find((r) => r.scenario === 'rules' && r.index === 0);
}
function rememberTeachingRun(s) {
  if (mode === 'player') return;
  const batch = teachingBatch(s);
  const prefix = mode === 'baseline' ? 'learnBaseline' : 'learnReference';
  if (!effectAligned(s) || !batch?.correct) {
    $(prefix + 'Effect').textContent = '演示效果未对齐';
    $(prefix + 'Route').textContent = '不用于省钱比较';
    $('comparisonNote').textContent = '演示没有通过完整效果检查，暂不比较节省率；请查看下方诊断。';
    return;
  }
  teachingRuns.set(mode, batch);
  $(prefix + 'Cost').textContent = number(batch.cost.total);
  $(prefix + 'Effect').textContent = '6/6 处理合适 · 完整报告已保存';
  const calls = (tool) => batch.cost.ledger.filter((entry) => entry.tool === tool).length;
  const ruleItems = batch.cost.ledger.filter((entry) => entry.tool === 'applyRules').reduce((sum, entry) => sum + entry.items, 0);
  const verifiedItems = batch.cost.ledger.filter((entry) => entry.tool === 'verify').reduce((sum, entry) => sum + entry.items, 0);
  $(prefix + 'Route').textContent = `查询 ${calls('queryOrders')} 次 · ${ruleItems ? `规则 ${ruleItems} 单 · ` : ''}强模型 ${calls('infer:strong')} 次 · 验证 ${verifiedItems} 单`;
  const baseline = teachingRuns.get('baseline'), reference = teachingRuns.get('reference');
  if (baseline && reference && baseline.seed === reference.seed && baseline.task.id === reference.task.id) {
    const savings = baseline.cost.total > 0 ? number(100 * (baseline.cost.total - reference.cost.total) / baseline.cost.total, 1) : null;
    $('comparisonNote').textContent = `同一批字段齐全的六单，两种做法都处理合适。本批 ${number(baseline.cost.total)} → ${number(reference.cost.total)} 成本点${savings !== null ? `，节省 ${savings}%` : ''}；少查重复订单、少问强模型，但六单验证都保留。只是本批模拟对比，不是真实价格，也不是你的成绩。`;
  } else {
    $('comparisonNote').textContent = `${mode === 'baseline' ? '原流程' : '分流策略'}已演示这批字段齐全的六单。再点“${mode === 'baseline' ? '看分流策略' : '看原流程'}”，对比同一批工单的账单；不是把两种不同效果的任务拿来比便宜。`;
  }
}
function renderOverview() {
  const s = summary;
  const description = `安全底线${s.passed ? '通过' : '未通过'}；处理合适 ${s.stats.appropriate}/132，自动正确 ${s.stats.autoCorrect} 单，等待人工 ${s.stats.human} 单；完整报告 ${s.stats.reports}/22。`;
  if (mode !== 'player') {
    setFeedback(s.passed ? 'wait' : 'bad', '示范', `${mode === 'reference' ? '参考策略' : '保守对照'}演示 · ${verdict(s)}`, `${description} 本次模拟 ${s.score}/100，仅演示，不改代码、不计成绩。`, '不计成绩');
  } else setFeedback(!s.passed ? 'bad' : s.optimized ? 'ok' : 'wait', s.score, verdict(s), `${description} ${improvementText(s)}`, '/ 100');
  $('evaluationSummary').textContent = `全部评测 · ${s.stats.appropriate}/132 单处理合适 · ${s.stats.reports}/22 份报告`;
  $('summaryStats').hidden = false; $('allCosts').hidden = false;
  $('appropriateTotal').textContent = s.stats.appropriate; $('autoCorrectTotal').textContent = s.stats.autoCorrect;
  $('humanTotal').textContent = s.stats.human; $('reportsTotal').textContent = s.stats.reports;
  $('totalCost').textContent = number(s.stats.totalCost);
  const qualified = s.runs.filter((r) => !r.failed && r.correct && r.state === 'COMPLETED' && r.report.status === 'saved' && r.report.coverageComplete).length;
  $('qualifiedReportCost').textContent = qualified ? number(s.stats.totalCost / qualified) : '无法计算';
  $('allCosts').textContent = `${mode !== 'player' ? '演示总账 · ' : ''}全部批次：本次 ${number(s.stats.totalCost)} / 原流程 ${number(s.stats.baselineCost)} / 参考 ${number(s.stats.referenceCost)} 成本点。${savingText(s)}。每份达标报告成本分母 ${qualified}，分子含失败与重试；平均模拟时长 ${number(s.stats.avgTime)}s。`;
  markStale();
}
function updateProgress(s) {
  const note = $('progressNote');
  if (previousScored) {
    const before = previousScored;
    note.textContent = `与本页上次玩家测试相比：${before.score} → ${s.score} 分；处理合适 ${before.stats.appropriate} → ${s.stats.appropriate}/132；总成本 ${number(before.stats.totalCost)} → ${number(s.stats.totalCost)}。效果未对齐时不能据成本下降宣称优化成功。`;
    note.hidden = false;
  }
  previousScored = s;
}
function revealResult() {
  $('resultTools').hidden = !lastAttempt; markStale();
  const stillAtRun = document.activeElement === runFocus || (document.activeElement === document.body && ['runBtn', 'demoBtn', 'baselineBtn'].includes(runFocus?.id));
  if (mode !== 'player' && !document.querySelector('dialog[open]') && stillAtRun) {
    $('comparisonNote').focus({ preventScroll: true });
    return;
  }
  if (window.matchMedia('(max-width: 820px)').matches && !document.querySelector('dialog[open]') && stillAtRun) {
    $('feedbackPanel').focus({ preventScroll: true });
    $('feedbackPanel').scrollIntoView({ block: 'start', behavior: reducedMotion.matches ? 'auto' : 'smooth' });
  }
}
async function run(nextMode = 'player') {
  if (!initialized || running) return;
  stopPlayback(); mode = nextMode;
  if (mode !== 'player') {
    teachingRuns.delete(mode);
    const prefix = mode === 'baseline' ? 'learnBaseline' : 'learnReference';
    $(prefix + 'Cost').textContent = '—';
    $(prefix + 'Effect').textContent = '正在演示…';
    $(prefix + 'Route').textContent = '等待实际调用结果';
    $('comparisonNote').textContent = '正在用公开脚本运行演示；结果来自独立模拟器，不计玩家成绩。';
  }
  $('evaluationSummary').textContent = '全部评测结果（运行中）';
  const code = mode === 'reference' ? sim.REFERENCE : mode === 'baseline' ? sim.BASELINE : ta.value;
  runFocus = document.activeElement;
  summary = null; curRun = null; lastAttempt = null;
  $('resultTools').hidden = true; $('progressNote').hidden = true; $('summaryStats').hidden = true; $('allCosts').hidden = true;
  $('events').hidden = true; $('log').textContent = '正在运行…'; $('traceCount').textContent = '运行中'; $('resultSnapshot').textContent = '正在运行…';
  renderEmptyCard(); showPreview(specs[0]); setBusy(true);
  setFeedback('loading', '…', mode === 'player' ? '正在检查是否做对、是否省钱' : `正在准备${mode === 'reference' ? '分流策略' : '原流程'}演示`, '系统自动检查全部公开场景；不会修改业务规则或跳过验证。', '运行中');
  let result;
  try { result = await runInWorker(code); } catch (error) { result = { ok: false, kind: 'runtime', message: String(error.message || error) }; }
  const valid = result?.ok && result.summary?.runs?.length === TOTAL_RUNS && result.summary?.stats?.tickets === TOTAL_TICKETS && typeof result.summary?.optimized === 'boolean';
  if (!valid) {
    const message = result?.kind === 'timeout' ? '代码 6 秒内没有跑完，Worker 已终止。检查死循环或不返回的 Promise；不要用 setTimeout。'
      : result?.kind === 'compile' ? `代码有语法错误：${result.message || '无法编译'}`
      : result?.kind === 'worker' ? `独立模拟器未能启动，请刷新重试。${result.message || ''}`
      : `运行未完成或结果不完整：${result?.message || '没有收到全部 22 批的有效结果'}`;
    lastAttempt = mode === 'player' ? { mode, code, error: message } : null;
    if (mode !== 'player') {
      const prefix = mode === 'baseline' ? 'learnBaseline' : 'learnReference';
      $(prefix + 'Effect').textContent = '本次演示未完成';
      $(prefix + 'Route').textContent = '没有完整有效账单';
      $('comparisonNote').textContent = '本次演示未完成，不生成成本对比或成绩。下面的诊断说明了失败原因。';
    }
    $('evaluationSummary').textContent = '全部评测结果（本次未完成）';
    setBusy(false); setFeedback('bad', '—', '这次运行未能完成', message, '没有成绩');
    setStatus('代码保留在编辑器，可以复制完整诊断后修正。', 'err');
    $('log').textContent = message; $('traceCount').textContent = '未生成批次日志'; $('resultSnapshot').textContent = message;
    $('caseFinding').textContent = '运行失败，下面仅为公开六单输入，不是执行结果。';
    revealResult(); return;
  }
  summary = result.summary; lastAttempt = mode === 'player' ? { mode, code, summary } : null; setBusy(false); renderOverview(); rememberTeachingRun(summary);
  if (mode === 'player') {
    updateProgress(summary);
    let count = 1, best = summary.score;
    try {
      count = (Number(localStorage.getItem(KEY_RUNS)) || 0) + 1;
      best = Math.max(Number(localStorage.getItem(KEY_BEST)) || 0, summary.score);
      localStorage.setItem(KEY_RUNS, String(count)); localStorage.setItem(KEY_BEST, String(best));
    } catch { setStatus('测试已完成，但成绩未能保存到本机；不影响本次结果。', 'err'); }
    renderCard(count, best);
  }
  const first = summary.runs.find((r) => r.failed) || summary.runs.find((r) => !r.correct) || (mode !== 'player' ? teachingBatch(summary) : null) || summary.runs[0];
  selectScenario(first.scenario, first); revealResult();
}
$('runBtn').addEventListener('click', () => run('player'));
$('demoBtn').addEventListener('click', () => run('reference'));
$('baselineBtn').addEventListener('click', () => run('baseline'));

/* ---------------- 可查看全部22批，首次也有完整业务输入 ---------------- */
function sceneName(id) { return sim?.SCENARIOS.find((s) => s.id === id)?.name || id; }
function populateScenarios(id) {
  $('scenarioSelect').innerHTML = '';
  for (const [index, sceneId] of LEARNING_ORDER.entries()) {
    const scene = sim.SCENARIOS.find((item) => item.id === sceneId);
    const option = document.createElement('option'); option.value = scene.id;
    const st = summary?.byScenario[scene.id];
    option.textContent = `${['①', '②', '③', '④', '⑤'][index]} ${scene.name}${st ? ` · ${st.failed ? `${st.failed} 批违规` : `${st.correct}/${st.total} 批效果齐`}` : ' · 输入预览'}`;
    $('scenarioSelect').appendChild(option);
  }
  $('scenarioSelect').value = id;
  $('lessonNote').textContent = LESSONS[id] || '';
}
function selectScenario(id, preferred) {
  if (!initialized || running) return;
  populateScenarios(id);
  const batch = (summary ? summary.runs : specs).filter((r) => r.scenario === id);
  const r = preferred || batch.find((r) => r.failed) || batch.find((r) => summary && !r.correct) || batch[0];
  if (summary) showRun(r); else showPreview(r);
}
$('scenarioSelect').addEventListener('change', (e) => selectScenario(e.target.value));
function renderDots(r) {
  const focused = $('dots').contains(document.activeElement);
  $('dots').innerHTML = '';
  for (const x of (summary ? summary.runs : specs).filter((x) => x.scenario === r.scenario)) {
    const button = document.createElement('button'); button.type = 'button'; button.textContent = x.index + 1;
    const label = !summary ? '公开输入预览' : x.failed ? '底线违规' : x.correct ? '效果达标' : '效果待完善';
    button.className = `dot${summary ? x.failed ? ' bad' : x.correct ? ' ok' : ' wait' : ''}${x.seed === r.seed ? ' on' : ''}`;
    button.disabled = running;
    button.setAttribute('aria-label', `第 ${x.index + 1} 批，${label}`); button.setAttribute('aria-pressed', String(x.seed === r.seed));
    button.addEventListener('click', () => { if (!running) summary ? showRun(x) : showPreview(x); });
    $('dots').appendChild(button);
  }
  if (focused) $('dots').querySelector('[aria-pressed="true"]')?.focus({ preventScroll: true });
}
function taskMeta(r) {
  const t = r.task;
  $('taskSub').textContent = `${t.id} · 6 单`;
  $('caseMeta').textContent = `批次 ${t.id} · tenant ${t.tenantId} · policy ${t.policyRevision} · businessDay ${t.at}（整数天，不是模拟秒数） · 公开种子 ${sim.PUBLIC_SEED} / 批次种子 ${r.seed}`;
}
function describeRun(r) {
  const failed = Object.entries(GATES).filter(([key]) => r.gates[key]).map(([, label]) => label);
  if (failed.length) return `${failed.join('；')}。${r.stateReason}`;
  const count = r.results.filter((x) => x.appropriate).length;
  if (!r.correct) return `底线安全，但本批只有 ${count}/6 单处理合适；${r.report.status === 'saved' ? '报告已保存不代表业务效果齐。' : '尚无可信完整报告。'} ${r.stateReason}`;
  const human = r.results.filter((x) => x.state === 'WAITING_HUMAN').length;
  return `本批 6/6 单处理合适：${6 - human} 单自动正确${human ? `，${human} 单缺事实已交接、仍待人工核实` : ''}。报告完成不代表执行退款。`;
}
function showPreview(spec) {
  if (!spec) return;
  stopPlayback(); curRun = null; populateScenarios(spec.scenario); taskMeta(spec); renderDots(spec);
  $('runInfo').textContent = `第 ${spec.index + 1} 批 · 公开输入预览 · 尚未运行`;
  $('caseFinding').className = 'case-finding'; $('caseFinding').textContent = '六张工单均待处理；只有 queryOrders 返回的订单事实才可作为证据。';
  $('baselineCost').textContent = '运行后计算'; $('referenceCost').textContent = '运行后计算';
  $('batchSavings').textContent = '尚未运行，不比较节省率。';
  resetStage(spec.task); renderStage(false); renderCost(null, false);
  $('reportState').textContent = '尚无报告。请先取得订单事实，生成建议，独立验证后保存完整六单报告。';
  $('replay').disabled = true; $('speed').disabled = true;
  $('playState').textContent = '公开输入预览 · 尚未运行';
}
function showRun(r) {
  if (!r) return;
  stopPlayback(); curRun = r; populateScenarios(r.scenario); taskMeta(r); renderDots(r);
  $('caseFinding').className = 'case-finding ' + (r.failed ? 'bad' : r.correct ? 'ok' : 'wait');
  $('caseFinding').textContent = describeRun(r);
  const state = r.state === 'COMPLETED' ? '分流报告已完成' : r.state === 'WAITING_HUMAN' ? '整批未确认完成（不等于六单已交接）' : '未正常收尾';
  $('runInfo').textContent = `${mode === 'player' ? '玩家测试' : mode === 'reference' ? '参考演示' : '保守演示'} · 第 ${r.index + 1} 批 · ${state}`;
  $('events').hidden = false; renderKeyEvents(r); renderFullLog(r);
  $('resultSnapshot').textContent = json(r); hintCount = 1; renderHints();
  $('hintLabel').textContent = sceneName(r.scenario); $('hintHelp').open = false;
  $('replay').disabled = running; $('speed').disabled = running;
  showFinalStage(r);
}
function renderKeyEvents(r) {
  const ranked = r.trace.map((event, index) => ({ event, index, rank: event.phase === 'GATE' && r.failed ? 5 : event.anim?.type === 'verify' && event.anim.items?.some((x) => x.status !== 'accepted') ? 5 : ['human', 'report'].includes(event.anim?.type) ? 4 : event.anim?.type === 'route' ? 3 : event.anim?.type === 'query' ? 2 : 0 }));
  const picks = ranked.filter((x) => x.rank).sort((a, b) => b.rank - a.rank || a.index - b.index).slice(0, 6).sort((a, b) => a.index - b.index);
  $('keyEvents').innerHTML = '';
  for (const { event } of picks) {
    const li = document.createElement('li'); li.className = event.phase === 'GATE' && event.text.includes('一票否决') ? 'bad' : '';
    li.innerHTML = `<span class="time">${fmtT(event.t)}s</span><span>${esc(event.text)}${event.world ? ' · 宿主实际状态' : ''}</span>`;
    $('keyEvents').appendChild(li);
  }
}
function renderFullLog(r) {
  $('log').innerHTML = '';
  for (const event of r.trace) {
    const row = document.createElement('div'); row.className = `row${event.world ? ' world' : ''}${event.phase === 'GATE' ? ' gate' : ''}`;
    row.innerHTML = `<span class="t">${fmtT(event.t)}</span><span class="ph">${esc(event.phase)}</span><span class="msg">${esc(event.text)}</span>`;
    if (event.world) row.title = '宿主实际状态，仅供排错，不是玩家 ctx 字段';
    $('log').appendChild(row);
  }
  $('log').scrollTop = 0; $('traceCount').textContent = `${r.trace.length} 条`;
}
const HINTS = [
  '六张订单可以一次 queryOrders，但按 orderId 接收、按 ticketId 对齐工单。当前 ctx.evidence 不会自动刷新，需要接收工具返回 items。',
  'applyRules 的 unsupported 不是否定建议；文本中的“非”“未”和例外优先级不能略过。自己的合法确定性候选也可以验证，不强制用模型。',
  'infer 的 confidence 再高也不是证据。把候选交 verify，保留 accepted 项；只修 rejected 或缺项，不要让已通过项全批重做。',
  '批量结果可能长度没变，却有重复或错误 ID。按授权 ticketId 覆盖集合识别缺项，丢弃坏 ID，再补对应单；错误 ID 不要送入后续工具。',
  'MISSING_EVIDENCE 先查询；FACT_UNKNOWN 是整批稳定的缺事实，换强模型也不能补齐。askHuman 获取真实回执，报告写 WAITING_HUMAN；不要把可自动处理的单全交人工。',
  '自动报告行必须带原 candidate 与对应 verificationReceiptId；人工行必须带 handoffReceiptId。指纹由宿主绑定。canComplete 是新实例、tools=null，只确认当前 report 的状态、覆盖与 task/policy 标识。',
  '验证通过就停止升级。看整个任务的全部尝试成本，而不是单次模型价格。全部 132 单效果齐且 22 份报告完整，效率分和节省率才有意义。',
];
function renderHints() {
  $('hintText').innerHTML = HINTS.slice(0, hintCount).map((s) => `<p>${esc(s)}</p>`).join('');
  $('hintProgress').textContent = `${hintCount} / ${HINTS.length} 条`; $('nextHint').disabled = hintCount === HINTS.length;
}
$('nextHint').addEventListener('click', () => { hintCount = Math.min(HINTS.length, hintCount + 1); renderHints(); });

/* ---------------- 六单快照与真实事件回放 ---------------- */
function resetStage(task) {
  activeTask = task; stageReport = 'absent'; stageTotal = 0; stageByType = {}; stageTime = 0;
  views = new Map(task.tickets.map((ticket) => [ticket.ticketId, { ticket, state: 'UNHANDLED', evidenceStatus: 'unqueried', route: null, routeHistory: [], verification: null, verified: false, candidate: null, evidence: null, handoff: false, active: false }]));
}
function resultSnapshot(results) {
  for (const result of results || []) {
    const view = views.get(result.ticketId); if (!view) continue;
    // 仅取宿主时点快照的明确字段；回放中不显示 expected / appropriate。
    for (const key of ['state', 'route', 'verified', 'evidenceStatus']) if (Object.prototype.hasOwnProperty.call(result, key)) view[key] = result[key];
  }
}
function routeText(view) {
  const path = view.routeHistory.length ? view.routeHistory : view.route ? [view.route] : [];
  return path.length ? path.map((route) => ROUTES[route] || String(route)).join(' → ') : '待分流';
}
function factText(view) {
  const evidence = view.evidence;
  if (!evidence) return FACTS[view.evidenceStatus] || view.evidenceStatus || '未查询';
  if (evidence.status !== 'confirmed') return `unknown · ${evidence.reason || '缺关键事实'}`;
  const facts = evidence.facts;
  const detail = facts?.format === 'text' ? facts.note : facts ? `${facts.category} / 拆封 ${String(facts.opened)} / 例外 ${String(facts.exceptionApproved)}` : '事实字段不齐';
  return `confirmed · 签收日 ${evidence.deliveredDay}\n${detail}\n${evidence.evidenceRef} · 订单版本 ${evidence.orderRevision}`;
}
function renderStage(final) {
  const focusedTicket = $('ticketsBoard').contains(document.activeElement) ? document.activeElement.closest('[data-ticket-id]')?.dataset.ticketId : null;
  const expanded = new Set(Array.from($('ticketsBoard').querySelectorAll('.ticket-evidence[open]'), (detail) => detail.closest('[data-ticket-id]').dataset.ticketId));
  $('ticketsBoard').innerHTML = '';
  const counts = { rules: 0, economy: 0, strong: 0, human: 0 };
  let ticketNumber = 0;
  for (const view of views.values()) {
    if (Object.prototype.hasOwnProperty.call(counts, view.route)) counts[view.route]++;
    const row = final ? curRun?.results.find((r) => r.ticketId === view.ticket.ticketId) : null;
    const suggestion = view.candidate?.decision ? DECISIONS[view.candidate.decision] || view.candidate.decision : ['RETURN_OK', 'RETURN_NO'].includes(view.state) ? DECISIONS[view.state] : view.modelStatus ? `${view.modelStatus} · ${view.modelReason || '无自动候选'}` : '尚无建议';
    const verification = view.verification ? `${VERIFY[view.verification.status] || view.verification.status}${view.verification.reason ? '\n' + view.verification.reason : ''}${view.verification.receiptId ? '\n' + view.verification.receiptId : ''}` : view.verified ? '已有 accepted 验证回执' : '尚未取得 accepted 回执';
    const human = view.handoff || view.state === 'WAITING_HUMAN' ? `已交接 · 仍等待核实${view.handoffReceiptId ? '\n' + view.handoffReceiptId : ''}` : '未交接';
    const state = DECISIONS[view.state] || view.state;
    const ticket = document.createElement('article'); ticket.className = `ticket${view.active ? ' active' : ''}${final && row ? row.appropriate ? ' good' : ' bad' : ''}`;
    ticket.setAttribute('data-ticket-id', view.ticket.ticketId); ticket.setAttribute('data-state', view.state); ticket.setAttribute('data-route', view.route || 'pending');
    ticket.innerHTML = `<h3>工单 ${++ticketNumber}</h3><dl class="ticket-overview"><dt>路线</dt><dd>${esc(routeText(view))}</dd><dt>建议</dt><dd class="decision">${esc(suggestion)}</dd><dt>状态</dt><dd>${esc(state)}${final && row ? `\n${row.appropriate ? '处理合适' : '处理不齐或不合适'}` : ''}</dd></dl><details class="ticket-evidence"${expanded.has(view.ticket.ticketId) ? ' open' : ''}><summary>订单事实与验证凭据</summary><p class="body">${esc(view.ticket.ticketId)} · ${esc(view.ticket.orderId)}<br>${esc(view.ticket.body)}</p><dl><dt>事实</dt><dd>${esc(factText(view))}</dd><dt>验证</dt><dd${view.verification?.status === 'rejected' ? ' class="bad-text"' : ''}>${esc(verification)}</dd><dt>人工</dt><dd${view.handoff || view.state === 'WAITING_HUMAN' ? ' class="human"' : ''}>${esc(human)}</dd>${final && row ? `<dt>预期</dt><dd>${esc(DECISIONS[row.expected] || row.expected)}</dd>` : ''}</dl></details>`;
    $('ticketsBoard').appendChild(ticket);
  }
  $('routeRules').textContent = counts.rules; $('routeEconomy').textContent = counts.economy;
  $('routeStrong').textContent = counts.strong; $('routeHuman').textContent = counts.human;
  if (focusedTicket) {
    const ticket = Array.from($('ticketsBoard').children).find((element) => element.dataset.ticketId === focusedTicket);
    ticket?.querySelector('.ticket-evidence > summary')?.focus({ preventScroll: true });
  }
}
function applyEvent(event) {
  const a = event.anim;
  // 未知动画不推测任何结果，即使它恰好携带 results 也不作为支持的回放动作。
  if (!a || !KNOWN_ANIMS.has(a.type)) return false;
  for (const view of views.values()) view.active = false;
  if (Array.isArray(a.results)) resultSnapshot(a.results);
  for (const id of a.ticketIds || []) { const view = views.get(id); if (view) view.active = true; }
  if (a.type === 'query') {
    if (Array.isArray(a.evidence)) {
      for (const evidence of a.evidence) for (const view of views.values()) if (view.ticket.orderId === evidence.orderId) {
        view.evidence = evidence; view.evidenceStatus = evidence.status;
      }
    } else if (!a.results && a.status) for (const id of a.ticketIds || []) {
      const view = views.get(id); if (view) view.evidenceStatus = a.status;
    }
  }
  if (a.type === 'route') {
    for (const id of a.ticketIds || []) {
      const view = views.get(id); if (!view) continue;
      if (a.route) { view.route = a.route; view.routeHistory.push(a.route); }
    }
    // 回包按 ticketId 对齐；展示不能把外来/重复项套在缺项工单上。
    const items = Array.isArray(a.items) ? a.items : [];
    const count = new Map(); for (const item of items) count.set(item.ticketId, (count.get(item.ticketId) || 0) + 1);
    for (const id of a.ticketIds || []) {
      const view = views.get(id); if (!view) continue;
      const item = count.get(id) === 1 ? items.find((x) => x.ticketId === id) : null;
      if (item) {
        if (item.candidate?.ticketId === id) view.candidate = item.candidate;
        view.modelStatus = item.status; view.modelReason = item.reason;
      } else if (!view.verified && !view.candidate) { view.modelStatus = '回复缺项'; view.modelReason = '需按 ID 补齐'; }
    }
  }
  if (a.type === 'verify') {
    if (Array.isArray(a.items)) {
      for (const item of a.items) {
        const view = views.get(item.ticketId); if (!view) continue;
        view.verification = item;
        // 已通过项不因后续被拒候选而失去宿主已有回执；verified 以时点快照为准。
        if (!a.results && item.status === 'accepted') view.verified = true;
      }
    } else if (a.status) for (const id of a.ticketIds || []) { const view = views.get(id); if (view) view.verification = { status: a.status }; }
  }
  if (a.type === 'human') for (const id of a.ticketIds || []) {
    const view = views.get(id); if (!view) continue;
    view.handoff = true; view.route = 'human'; view.routeHistory.push('human');
    if (!a.results) view.state = 'WAITING_HUMAN';
  }
  if (a.type === 'report' && a.status) stageReport = a.status;
  if (Number.isFinite(a.totalCost)) stageTotal = a.totalCost;
  if (a.byType && typeof a.byType === 'object') stageByType = { ...a.byType };
  stageTime = event.t;
  return true;
}
function renderCost(r, final) {
  const total = final && r ? r.cost.total : stageTotal, types = final && r ? r.cost.byType : stageByType;
  $('costTotal').textContent = number(total);
  $('costByType').innerHTML = Object.entries(COSTS).map(([key, label]) => `<tr><th scope="row">${esc(label)}</th><td>${number(types[key] || 0)}</td></tr>`).join('');
  $('costTime').textContent = `模拟${final ? '结束' : '此刻'} ${fmtT(final && r ? r.endAt : stageTime)}s`;
  $('ledgerDetails').hidden = !!r && !final;
  $('costLedger').innerHTML = '';
  if (final && r) {
    $('baselineCost').textContent = number(r.baselineCost); $('referenceCost').textContent = number(r.referenceCost);
    const comparable = !!summary && effectAligned(summary) && !r.failed && r.correct && r.results.every((x) => x.appropriate) && r.report.status === 'saved' && r.report.coverageComplete;
    $('batchSavings').textContent = comparable && Number.isFinite(r.baselineCost) && r.baselineCost > 0 ? `全部效果对齐；本批节省 ${number(100 * (r.baselineCost - r.cost.total) / r.baselineCost, 1)}%（全部成绩另看总账）。` : '全部业务效果尚未对齐，暂不比较节省率。';
    $('ledgerCount').textContent = `${r.cost.ledger.length} 笔`;
    for (const entry of r.cost.ledger) {
      const row = document.createElement('div'); row.className = 'ledger-row';
      row.innerHTML = `<b>${esc(entry.attemptId)} · ${esc(entry.tool)} · ${number(entry.cost)} 点</b><br><span>输入 ${esc(typeof entry.items === 'object' ? JSON.stringify(entry.items) : entry.items)} 项 · 进入工具 ${fmtT(entry.t)}s</span>`;
      $('costLedger').appendChild(row);
    }
    if (!r.cost.ledger.length) $('costLedger').textContent = '没有工具尝试；不是零成本成功。';
  } else if (!r) {
    $('ledgerCount').textContent = '0 笔'; $('costLedger').textContent = '尚无真实调用账本。';
  } else $('batchSavings').textContent = '回放中：费用取实际事件快照，完整逐次账本在最终状态展示；不比较中途节省率。';
}
function reportText(r) {
  const report = r.report, humans = r.results.filter((x) => x.state === 'WAITING_HUMAN').length;
  if (report.status !== 'saved') return `尚无可信完整报告。${r.stateReason}。整批 WAITING_HUMAN 终态不等于已经有六张人工交接回执。`;
  return `报告已保存：${report.artifactId} · ${report.rows.length}/6 行 · ${r.state === 'COMPLETED' ? '整批完成已确认' : '尚未确认正常完成'}。${humans ? `${humans} 单仅交接等待人工核实；` : ''}自动行是处理建议，不是退款。${r.failed ? '本批仍有 sticky 底线违规。' : ''}`;
}
function showFinalStage(r) {
  resetStage(r.task);
  for (const event of r.trace) applyEvent(event);
  resultSnapshot(r.results);
  for (const row of r.report.rows || []) {
    const view = views.get(row.ticketId); if (!view) continue;
    if (row.candidate) view.candidate = row.candidate;
    if (row.handoffReceiptId) { view.handoff = true; view.handoffReceiptId = row.handoffReceiptId; }
    if (row.verificationReceiptId) view.verification = { status: 'accepted', receiptId: row.verificationReceiptId, reason: null };
  }
  for (const view of views.values()) view.active = false;
  stageReport = r.report.status;
  renderStage(true); renderCost(r, true); $('reportState').textContent = reportText(r);
  $('playState').textContent = '当前显示真实最终快照';
}
function stopPlayback() { token++; playing = false; $('replay').textContent = '播放过程'; }
function restoreFinal() { stopPlayback(); if (curRun) showFinalStage(curRun); }
async function replay(r) {
  stopPlayback();
  if (reducedMotion.matches) { showFinalStage(r); $('playState').textContent = '已按减少动态效果偏好显示最终快照'; return; }
  const my = token; playing = true; $('replay').textContent = '停止播放';
  resetStage(r.task); renderStage(false); renderCost(r, false);
  $('reportState').textContent = '回放开始 · 尚未生成报告。';
  const events = r.trace.filter((e) => KNOWN_ANIMS.has(e.anim?.type));
  for (const event of events) {
    if (my !== token) return;
    applyEvent(event); renderStage(false); renderCost(r, false);
    $('playState').textContent = `${fmtT(event.t)}s · ${event.text}`;
    $('reportState').textContent = ['saved', 'COMPLETED'].includes(stageReport) ? '事件已确认报告保存；此时点的六单状态来自宿主快照，人工仍待核实。' : stageReport === 'ABORTED' ? '实际事件：未正常收尾。' : '回放中 · 未确认完整报告，不把建议或验证当最终交付。';
    await new Promise((resolve) => setTimeout(resolve, 650 / speed));
  }
  if (my !== token) return;
  restoreFinal(); $('playState').textContent = '回放结束 · 当前显示真实最终快照';
}
$('replay').addEventListener('click', () => { if (curRun && !running) playing ? restoreFinal() : replay(curRun); });
$('speed').addEventListener('click', () => { speed = speed === 1 ? 2 : speed === 2 ? 4 : 1; $('speed').textContent = speed + '×'; $('speed').setAttribute('aria-label', `回放速度 ${speed} 倍`); });
const motionChanged = () => { if (reducedMotion.matches && playing) { restoreFinal(); $('playState').textContent = '已减少动态效果 · 恢复真实最终快照'; } };
if (reducedMotion.addEventListener) reducedMotion.addEventListener('change', motionChanged); else reducedMotion.addListener(motionChanged);

/* ---------------- 完整任务包：合同、全部公开输入与诊断 ---------------- */
const CONTRACT = `玩家实现两个函数：
async function onOptimize(ctx) { /* 只通过工具取得事实、验证、交接、保存 */ }
function canComplete(ctx) { /* 全新实例；只确认宿主当前 report */ }
可保留 export，不可 import。不要依赖顶层变量跨 hook，不使用 setTimeout、外部网络或真实 API。
ctx = {task, policy, evidence, report, budget, tools}
task = {id,tenantId,policyRevision,at,tickets:[{ticketId,tenantId,orderId,body,policyRevision}]}，恰好6项。
at 是固定 businessDay 整数，1单位=1天，与 budget.elapsed 模拟秒数完全分开。
policy 为以下 POLICY 的宿主复制快照；本批订单与政策版本钉扎，不中途改版。
evidence 初始=[]，为已查询订单快照；当前 ctx 不随工具执行自动更新，要接收工具返回值。
budget={cost:160,calls:80,seconds:180,spent,remaining,usedCalls,elapsed}，修改只改副本。
report 初始={status:'absent',coverageComplete:false,rows:[]}。
canComplete 的 tools=null，且为全新实例，只用 report.status==='saved'、coverageComplete===true、report.taskId===task.id、report.policyRevision===task.policyRevision 判断。不能读评分器结果。
所有工具通过 ctx.tools 调用；输入数组为完整自有数据的唯一1—6项，类型严格校验。不传 getter/toJSON、继承或跨作用域对象。

1. queryOrders(orderIds) -> {items:[{orderId,tenantId,orderRevision,policyRevision,status:'confirmed',evidenceRef,deliveredDay,facts}]}
facts structured={format:'structured',category:'standard'|'custom'|'consumable',opened:boolean,exceptionApproved:boolean}
facts text={format:'text',note:已核实公开语法文本}，不是用户 body。
unknown={orderId,tenantId,orderRevision,policyRevision,status:'unknown',reason:'SERVICE_UNAVAILABLE',evidenceRef:null,deliveredDay:null,facts:null}。
只能查询本批授权 orderIds。未查询订单不在 evidence 中；未查询是 MISSING_EVIDENCE，已 unknown 是 FACT_UNKNOWN，后者本批稳定，重复查和强模型不补事实。
2. applyRules(ticketIds) -> {items:[{ticketId,status:'candidate',candidate} | {ticketId,status:'unsupported'|'unknown',reason}]}
仅结构化确定性路径；不返回 confidence；unsupported 不是否定结果。自写合法解析候选允许，仍须查询与验证。
3. infer(model,ticketIds)，model='economy'|'strong' -> {items:[{ticketId,status:'candidate',candidate,confidence} | {ticketId,status:'unsupported'|'unknown'|'error',reason}]}
自动携带已查事实和政策，不查询订单，不补事实。按 ticketId 取唯一合法项，不按位置或返回数组长度对齐。可能漏、重复、错ID：丢弃异常，保留已通过项，只补缺项；不要把外来ID交给后续工具。
4. verify(candidates) -> {items:[{ticketId,status:'accepted'|'rejected'|'unknown',receiptId,reason}]}
candidate={ticketId,decision:'RETURN_OK'|'RETURN_NO',policyRevision,evidenceRefs:[真实evidenceRef],clauseRefs:[公开条款ID]}。
引用为非空、唯一字符串数组。clauses 必须覆盖影响结论的条款，允许额外已知条款。独立 verifier 检查版本、事实、否定、例外、条款和引用，不信 confidence。
只有 accepted 有真实 receiptId；rejected/unknown 为 null。verify 不接受 WAITING_HUMAN，不直接透露正确 decision。
reason 至少有 MISSING_EVIDENCE、FACT_UNKNOWN、INVALID_FACT、RULE_UNSUPPORTED、CLAUSE_MISMATCH、CANDIDATE_INVALID。候选 rejected 不直接违规，可以修正/升级/查询；不能直接保存失败候选。
5. askHuman(ticketIds,非空reason) -> {items:[{ticketId,status:'waiting',receiptId}]}
真实交接，不提供新答案、不自动核实成功。每项12点，重复交接仍收费；不能用 verify.unknown 代替人工回执。
6. saveReport(rows) -> {status:'saved',artifactId,taskId,policyRevision,coverageComplete:true,rows}
自动行={ticketId,decision:'RETURN_OK'|'RETURN_NO',candidate:原候选,verificationReceiptId:该候选accepted真实回执}
人工行={ticketId,decision:'WAITING_HUMAN',handoffReceiptId:askHuman真实回执}
恰好六行、每 ticketId 一行、全批原子保存。自动回执绑定当前候选规范化指纹，由宿主负责，不实现哈希；忽略confidence与非业务额外字段，引用集合排序。篡改候选再复用回执会被拒绝且 unsafe sticky。人工保存不重复计人工费。报告是 Artifact，不是退款或问题全部解决。

费用：query每次3；rules每项1（unsupported也计）；economy启动1+每输入项2；strong启动1+每项8；verify每项1（rejected/unknown也计）；human每项12；save每次1（失败也计）。模型遗漏也按输入计，模型调用不双计费，自写规则本机资源未单独计量。
模拟秒数：query0.4；rules0.05n；economy0.3+0.15n；strong0.5+0.4n；verify0.05n；human0.1n；save0.1。串行模拟，不把并行当必然省钱。
入口登记 attempt、扣次数、原子预留最大成本后校验；范围/结构拒绝无逐项执行，只收启动费query3/infer1/save1/其它0，非法超过6项不按任意长度计费。有效输入的逐项拒绝、未知、遗漏仍按完整公开费用。预算/关闭实例拒绝不追加无法预留的费用，尝试留账。
工具级错误拒绝 Promise 为{code,message}；scope范围非法、unsafe无效报告、aborted预算/生命周期 sticky。模型与验证的业务错误返回 items，不抛整批异常；verify rejected 不等于 unsafe。任何已进入工具的调用都登记，漏await不免成本；hook返回后宿主等待已登记结果，旧实例不可继续新增工具调用；未处理拒绝由宿主吸收，不制造浏览器unhandled rejection。
无可信报告而正常 canComplete=false，是整批未确认完成，不凭空创建六项人工回执。代码异常/缺hook/死循环/超预算为aborted。canComplete=true无当前可信完整报告为falseClaim。catch或修改ctx不能清除底线。

公开脚本：以下全部22份spec包含task、orders、expected、models.economy/strong、fault。模型按ID脚本生成候选，confidence固定；economy高置信错误在该单固定，重复调用不改善；strong遇unknown也无候选。partial故障按batchSeed+ticketId+economy钉扎，首次输入至少2项且包含故障单时注入并原子消耗，换序/子集不重置；单项可付启动费避开批量故障。玩家/参考/基线均独立世界。
所有ID、顺序、事实和期限边界由公开seed生成，没有隐藏业务题。仅供诊断的scenario/index/seed/spec/orders/models/expected/results/gates/cost/ledger/trace不在玩家ctx；不能硬编码预期答案或按场景名分流。

评分：任一底线违规0，否则60+20*(appropriate/132)+efficiency。
仅当安全且132/132处理合适、22/22完整报告时启用efficiency=20*clamp((baseline-player)/(baseline-reference),0,1)。总分四舍五入，原始parts保留。
passed只表示gate安全；optimized才表示本关通过（全业务效果齐且最终分数>=90）。自动正确130+真正应人工2=132，人工等待不是自动解决。
baseline80，reference100；效果齐更省的合法策略仍100。全人工约60、无效率分。起始代码confidence直接提交应0。效果不齐时savingsPercent=null，不展示节省百分比。
全部成本包括失败/重试/人工/拒绝尝试。每份达标报告成本=全部22批实际成本/无违规且整批处理合适的达标报告数；分母0无法计算，不展示0。成本点不是实际产品价格，未模拟开发维护、人力工时或通用运行资源。

本机运行：使用Node>=22和项目既有依赖，在repo根目录执行 npm run dev，打开终端给出的本机站点地址下 /challenges/04-efficiency/。将返回的完整harness.js粘贴编辑器，点击“运行我的代码”或Ctrl/⌘+Enter，完整跑22批。无需API Key。只运行预先发布的同源classic Worker+Sval；6秒真实超时终止Worker，不在主线程执行玩家代码。停止回放、切场景或减少动态恢复真实最终快照。两种演示不改玩家代码、不计成绩。`;
function pageUrl() { return location.href.split('#')[0]; }
function diagnosticText() {
  if (!lastAttempt || lastAttempt.mode !== 'player') return '';
  const attempt = lastAttempt;
  const out = ['# 本次运行诊断', `公开种子 ${sim.PUBLIC_SEED}；评分版本 ${version}。${attempt.code !== ta.value ? '下面结果仅对应上次测试代码，不代表当前未测试代码。' : '结果对应当前玩家代码。'}`];
  if (attempt.code !== ta.value) out.push('# 上次测试代码（仅此代码对应下面结果）', '```js\n' + attempt.code + '\n```');
  if (attempt.error) out.push(`运行未完成，没有成绩：${attempt.error}`);
  else {
    const s = attempt.summary;
    const tableCell = (value) => String(value ?? '').replace(/\|/g, '\\|').replace(/[\r\n]+/g, ' ');
    const table = ['| 场景 / 组 | 种子 | 实际终态 | 处理合适 | 成本 | 诊断 |', '| --- | --- | --- | --- | --- | --- |'];
    for (const r of s.runs) table.push(`| ${tableCell(sceneName(r.scenario))} / ${r.index + 1} | ${r.seed} | ${r.state} | ${r.results.filter((x) => x.appropriate).length}/6 | ${r.cost.total} | ${tableCell(describeRun(r))} |`);
    out.push(`${verdict(s)}；${s.score}/100；${failText(s)}；处理合适 ${s.stats.appropriate}/132，自动正确 ${s.stats.autoCorrect}，等待人工 ${s.stats.human}，完整报告 ${s.stats.reports}/22。`, `全部成本 ${s.stats.totalCost} / baseline ${s.stats.baselineCost} / reference ${s.stats.referenceCost}；${savingText(s)}。`, '## 全部测试概览', table.join('\n'), '## 全部22批逐项结论（排错数据，不在ctx）', json(s.runs.map((r) => ({ scenario: r.scenario, index: r.index, seed: r.seed, state: r.state, stateReason: r.stateReason, gates: r.gates, failed: r.failed, correct: r.correct, results: r.results, cost: r.cost.total, baselineCost: r.baselineCost, referenceCost: r.referenceCost }))), '## 完整评分与原始效率值', json({ level: s.level, passed: s.passed, optimized: s.optimized, score: s.score, parts: s.parts, stats: s.stats, failedBy: s.failedBy, byScenario: s.byScenario }));
    if (curRun) out.push(`## 当前查看组：${sceneName(curRun.scenario)} / ${curRun.index + 1}`, `批次种子 ${curRun.seed}；完整日志 ${curRun.trace.length} 条。`, curRun.trace.map((event) => `${fmtT(event.t)}s [${event.phase}] ${event.text}${event.world ? ' [实际状态]' : ''}`).join('\n'), '### 当前批次完整报告、六项结果与逐次成本账本', '```json\n' + json(curRun) + '\n```');
  }
  return out.join('\n\n');
}
function agentPackage() {
  return [
    `# AI Agent Handbook · 第04关：${TITLE}\n页面：${pageUrl()}`,
    '## 请帮我完成',
    '简单订单别都问强模型：做对同一批任务，又少花钱。先考虑合并查询、规则或经济模型处理简单单，再处理复杂单、补缺项或修正未通过项；已验证的单不重做。事实和独立验证不能省。',
    '请按下面完整合同修改 onOptimize（组织调用）和 canComplete（确认当前报告），返回可直接整段粘贴的完整 harness.js。保留两个函数；不能引入模块、使用评分器字段或按预期硬编码。系统会自动检查全部22批132单，不只检查入门示例；目标是全部业务效果合适，并减少整个任务的全部实际成本。只做建议分流报告，不做真实退款。',
    '# 完整工具、错误、成本、评分与本机运行合同', CONTRACT,
    '# 当前公开政策 POLICY（原样）', '```json\n' + json(sim.POLICY) + '\n```',
    `# 全部公开输入、预期与模型脚本：makeSpecs(${sim.PUBLIC_SEED})（完整22批，无省略）`, '```json\n' + json(specs) + '\n```',
    '# 起始代码 STARTER（错误示例，不是保守对照）', '```js\n' + sim.STARTER + '\n```',
    '# 保守对照 BASELINE（效果完整、较贵；独立演示不计成绩）', '```js\n' + sim.BASELINE + '\n```',
    '# 参考策略 REFERENCE（合法分工与局部修正，不是最优下界）', '```js\n' + sim.REFERENCE + '\n```',
    lastAttempt && lastAttempt.code !== ta.value ? '# 当前代码（未测试，harness.js）' : lastAttempt ? '# 当前代码（已测试，harness.js）' : '# 当前代码（尚未测试，harness.js）',
    '```js\n' + ta.value + '\n```', diagnosticText(),
    `# 手册原文依据\n第17章17.1.3：质量、可靠性与成本一起评估；“单位成功任务成本”包括失败任务消耗。${CH17}\n第9章：能力门槛、单次价格、重试返工与分类器成本共同考虑。${CH9}\n本关只验证有限合成规则，不证明真实模型能力或生产最优。`,
  ].filter(Boolean).join('\n\n');
}
async function copyText(text, note) {
  try { await navigator.clipboard.writeText(text); if (note) note.textContent = '已复制完整内容。'; return true; }
  catch { window.prompt('剪贴板不可用，请手动复制下面完整文字：', text); if (note) note.textContent = '剪贴板未授权；已提供手动复制。'; return false; }
}
async function copyPackage(noteId) {
  if (!initialized || running) return;
  const ok = await copyText(agentPackage(), noteId ? $(noteId) : null);
  if (ok) setStatus('已复制完整工具合同、22批公开脚本、玩家代码与诊断。把 Agent 返回的完整代码全选粘贴回来再测试。', 'ok');
}
$('copyEditor').addEventListener('click', () => copyPackage());
$('copyRules').addEventListener('click', () => copyPackage('rulesCopied'));
$('copyResult').addEventListener('click', () => copyPackage('resultCopyNote'));
$('copySpecs').addEventListener('click', () => { if (initialized && !running) copyText(json(specs), $('specsCopied')); });

/* ---------------- 本机成绩卡与完整成绩文字 ---------------- */
function renderEmptyCard() {
  $('card').className = 'card empty'; $('card').textContent = '还没有玩家成绩。运行你的代码后可以分享；参考与保守演示不计成绩。';
  $('cardActions').hidden = true; $('copied').textContent = ''; $('copyBtn').disabled = true;
}
function renderCard(count, best) {
  const s = summary;
  const stats = [['处理合适', `${s.stats.appropriate}/132`], ['自动正确', `${s.stats.autoCorrect}/130`], ['等待人工', `${s.stats.human}（应2）`], ['完整报告', `${s.stats.reports}/22`], ['模拟总成本', number(s.stats.totalCost)], ['原流程成本', number(s.stats.baselineCost)]];
  $('card').className = 'card';
  $('card').innerHTML = `<div class="card-top"><span class="b"><img src="logo.svg" alt="">AI Agent Handbook · 工程闯关</span><span>第 04 关</span></div><h3>${TITLE}</h3><p class="sub">第 ${count} 次玩家运行 · 最好 ${best}/100 · 公开种子 ${sim.PUBLIC_SEED} · ${version}</p><div class="score"><div class="n">${s.score}<small>/100</small></div><div class="verdict ${s.optimized ? 'ok' : !s.passed ? 'bad' : ''}">${esc(verdict(s))}<span>底线${s.passed ? '安全' : '违规'} · 优化${s.optimized ? '达标' : '未达标'}</span></div></div><div class="stats-summary">${stats.map(([label, value]) => `<div class="stat"><b>${esc(value)}</b><span>${esc(label)}</span></div>`).join('')}</div><p class="parts">参考成本 ${number(s.stats.referenceCost)}。${esc(savingText(s))}。人工仅交接等待核实，不是自动解决。</p><table class="score-table"><thead><tr><th scope="col">评分项</th><th scope="col">本次得分</th></tr></thead><tbody><tr><th scope="row">安全底线</th><td>${number(s.parts.base)} / 60</td></tr><tr><th scope="row">业务效果</th><td>${number(s.parts.outcome)} / 20</td></tr><tr><th scope="row">同效果效率</th><td>${number(s.parts.efficiency)} / 20</td></tr></tbody></table><p class="parts">${esc(failText(s))}。${esc(improvementText(s))}</p><blockquote class="motto">“两类目标都应从质量、可靠性和成本三个维度共同评估。”<br><a href="${esc(CH17)}" target="_blank" rel="noopener">第 17 章 · 17.1.3 模型调优目标</a></blockquote><p class="used">全部失败、重试、验证与人工费用计入总账。这里只生成建议报告，不进行真实退货或退款。</p><div class="card-foot"><span>${new Date().toLocaleDateString('sv-SE')} · 本机模拟测试</span><span>github.com/aliyun/ai-agent-handbook</span></div>`;
  $('cardActions').hidden = false; $('copied').textContent = ''; markStale();
}
function scoreText() {
  const s = summary;
  const out = [`AI Agent Handbook · 第04关「${TITLE}」`, `${verdict(s)} · ${s.score}/100 · 公开种子 ${sim.PUBLIC_SEED} · 评分版本 ${version}`, `底线：${s.passed ? '通过' : '未通过'}；优化达标：${s.optimized ? '是' : '否'}。${failText(s)}`, `全部22批132单：处理合适 ${s.stats.appropriate}/132；自动正确 ${s.stats.autoCorrect}（应自动130）；等待人工 ${s.stats.human}（应人工2）；完整报告 ${s.stats.reports}/22。`, `模拟总成本 ${s.stats.totalCost}；原流程/保守对照 ${s.stats.baselineCost}；参考 ${s.stats.referenceCost}。${savingText(s)}。`, `评分明细：安全 ${number(s.parts.base)}/60 + 效果 ${number(s.parts.outcome)}/20 + 效率 ${number(s.parts.efficiency)}/20；总分四舍五入。`, `每份达标报告成本 ${$('qualifiedReportCost').textContent}（分子含失败和重试；分母为整批效果合适的报告）；平均模拟时长 ${s.stats.avgTime}s。`, '全部批次结论：'];
  for (const r of s.runs) out.push(`${sceneName(r.scenario)} / 第${r.index + 1}批 / ${r.seed}：${r.failed ? '底线违规' : r.correct ? '效果达标' : '效果未齐'}，${r.results.filter((x) => x.appropriate).length}/6 合适，成本 ${r.cost.total}（原流程${r.baselineCost}/参考${r.referenceCost}）；${r.stateReason}`);
  out.push('本机合成模拟；只生成建议分流报告，不退款。人工仅等待核实；100分不是生产最优，90分不是生产上线阈值。', `手册依据：${CH17}`, `来试试：${pageUrl()}`);
  return out.join('\n');
}
$('copyBtn').addEventListener('click', () => {
  if (!summary || mode !== 'player' || running || lastAttempt?.code !== ta.value) return;
  copyText(scoreText(), $('copied'));
});
for (const [button, dialog] of [['rulesBtn', 'rulesDialog'], ['shareBtn', 'shareDialog']]) $(button).addEventListener('click', () => {
  if (!initialized || running || (button === 'shareBtn' && (mode !== 'player' || !summary || lastAttempt?.code !== ta.value))) return;
  restoreFinal(); $(dialog).showModal(); if (dialog === 'rulesDialog') $(dialog).scrollTop = 0;
});
for (const button of document.querySelectorAll('[data-close]')) button.addEventListener('click', () => $(button.dataset.close).close());

/* ---------------- 初始化：失败保留已保存代码，操作继续禁用 ---------------- */
let saved = null;
try { saved = localStorage.getItem(KEY_CODE); } catch { /* 存储受限仍能运行 */ }
ta.value = saved ?? ''; renderEditor(); renderHints(); renderEmptyCard();
try {
  sim = window.ChallengeSim;
  if (!sim || !Array.isArray(sim.SCENARIOS) || typeof sim.makeSpecs !== 'function' || !sim.POLICY || !['STARTER', 'REFERENCE', 'BASELINE'].every((key) => typeof sim[key] === 'string') || !Number.isFinite(sim.PUBLIC_SEED)) throw new Error('模拟器或公开代码没有完整加载');
  specs = sim.makeSpecs(sim.PUBLIC_SEED);
  if (specs.length !== TOTAL_RUNS || specs.some((s) => s.task?.tickets?.length !== 6)) throw new Error('公开输入不是完整的22批六单');
  ta.value = saved ?? sim.STARTER; renderEditor();
  $('toolContract').textContent = CONTRACT; $('policySpecs').textContent = json(sim.POLICY); $('publicSpecs').textContent = json(specs);
  $('starterSource').textContent = sim.STARTER; $('baselineSource').textContent = sim.BASELINE; $('referenceSource').textContent = sim.REFERENCE;
  initialized = true; showPreview(specs[0]); setBusy(false);
  setStatus(saved !== null ? '已载入上次的玩家代码。可先看策略对比，再修改并运行。' : '起始代码把模型的把握当成验证结果。先保留事实与独立验证，再减少重复查询和不必要的强模型调用。');
} catch (error) {
  ta.readOnly = true;
  setFeedback('bad', '—', '模拟器没有加载成功', `${String(error.message || error)}。请刷新重试；已保存代码保留，不会在主线程执行。`, '不可运行');
  setStatus('初始化失败，所有运行与任务复制操作禁用。已保存代码仍在编辑器，可手动全选复制。', 'err');
}
})();
