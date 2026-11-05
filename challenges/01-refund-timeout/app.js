// 第 01 关：左侧修改，右侧反馈。普通脚本 + 独立 Worker，兼容托管预览的 CSP。
(() => {
'use strict';
const $ = (id) => document.getElementById(id);
if (!window.RefundSim) {
  $('status').textContent = '模拟器脚本未能加载，请刷新重试。';
  $('verdictTitle').textContent = '模拟器没有加载成功';
  $('scoreline').textContent = '请刷新页面，或使用新版 Chrome / Edge / Safari。';
  $('runBtn').disabled = true;
  $('demoBtn').disabled = true;
  return;
}
const { SCENARIOS, PUBLIC_SEED, STARTER } = window.RefundSim;
// 代码、运行次数与最好成绩按关卡和评分版本隔离。
const STORAGE = `agent-challenge:${document.body.dataset.level}:${document.body.dataset.version}`;
const KEY_CODE = `${STORAGE}:code`;
const KEY_RUNS = `${STORAGE}:runs`;
const KEY_BEST = `${STORAGE}:best`;
const REPO = 'https://github.com/aliyun/ai-agent-handbook';
const CH4 = new URL('../../build/chapter-04.html', location.href).href;
function chapterUrl(section) {
  const anchors = { '4.1.2': '_4-1-2-用权威状态驱动任务', '4.4.1': '_4-4-1-让任务脱离当前连接持续存在', '4.6.1': '_4-6-1-针对失败类型选择恢复策略', '4.6.2': '_4-6-2-让完成由证据决定' };
  const key = Object.keys(anchors).find((key) => section.includes(key));
  return CH4 + (key ? '#' + anchors[key] : '');
}
const TITLE = 'Agent 退款超时，如何优化？';
const TOTAL_RUNS = 22;
const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const STATE_LABEL = { COMPLETED: '已完成', WAITING_HUMAN: '转人工', ABORTED: '未正常收尾' };
const SCENARIO_NAMES = { lost: '钱退了，回应丢了', dropped: '请求没到银行', pending: '银行还在处理', restart: 'Agent 中途重启', happy: '一切正常' };
let summary = null;
let demo = false;
let testedCode = null;
let curScenario = 'lost';
let curRun = null;
let running = false;
let lastAttempt = null, previousScored = null, runFocus = null;
let token = 0;
let playing = false;
let speed = 1;
let anims = [];
let ledgerCount = 0;
let queued = 0;
let amount = 0;
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

/* ---------------- 编辑器 ---------------- */
const ta = $('code');
const hl = $('hl');
const gutter = $('gutter');
const KW = new Set('async await function return const let var if else while for of in new try catch finally throw break continue typeof true false null undefined export default class this'.split(' '));
function highlight(src) {
  const re = /(\/\/[^\n]*|\/\*[\s\S]*?\*\/)|("(?:\\.|[^"\\\n])*"|'(?:\\.|[^'\\\n])*'|`(?:\\.|[^`\\])*`)|\b(\d+(?:\.\d+)?)\b|([A-Za-z_$][\w$]*)(?=\s*\()|([A-Za-z_$][\w$]*)/g;
  let out = '', last = 0, m;
  while ((m = re.exec(src))) {
    out += esc(src.slice(last, m.index));
    const t = m[0];
    const cls = m[1] ? 'c' : m[2] ? 's' : m[3] ? 'n' : KW.has(t) ? 'k' : m[4] ? 'f' : '';
    out += cls ? `<span class="${cls}">${esc(t)}</span>` : esc(t);
    last = re.lastIndex;
  }
  return out + esc(src.slice(last));
}
function renderEditor() {
  hl.innerHTML = highlight(ta.value) + (ta.value.endsWith('\n') ? ' ' : '');
  gutter.textContent = Array.from({ length: ta.value.split('\n').length }, (_, i) => i + 1).join('\n');
}
function setStatus(text, kind = '') {
  $('status').className = 'ed-status' + (kind ? ' ' + kind : '');
  $('status').textContent = text;
}
function markStale() {
  const stale = !!lastAttempt && !demo && lastAttempt.code !== ta.value;
  $('staleNote').hidden = !stale;
  $('feedback').classList.toggle('stale', stale);
  $('shareBtn').disabled = !summary || demo || stale || running;
  $('copyResult').disabled = !lastAttempt || demo || running;
  $('resultCopyNote').textContent = stale ? '代码已改，复制时会分别标明上次测试代码与当前未测试代码。' : '';
}
function onCodeChange() {
  renderEditor();
  try {
    localStorage.setItem(KEY_CODE, ta.value);
    setStatus('已自动保存到本机。');
  } catch {
    setStatus('本次修改未能保存到本机，请勿刷新或关闭页面。', 'err');
  }
  markStale();
}
function insertText(text) {
  if (!document.execCommand('insertText', false, text)) {
    ta.setRangeText(text, ta.selectionStart, ta.selectionEnd, 'end');
    onCodeChange();
  }
}
ta.addEventListener('input', onCodeChange);
ta.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' && (e.metaKey || e.ctrlKey)) { e.preventDefault(); run(); return; }
  if (ta.readOnly) return;
  // Shift+Tab 离开编辑器，避免键盘焦点被困住。
  if (e.key === 'Tab' && !e.shiftKey && !e.metaKey && !e.ctrlKey) { e.preventDefault(); insertText('  '); return; }
  if (e.key === 'Enter' && !e.shiftKey && !e.altKey && !e.isComposing) {
    const before = ta.value.slice(0, ta.selectionStart);
    const line = before.slice(before.lastIndexOf('\n') + 1);
    let indent = line.match(/^\s*/)[0];
    if (/[{(\[]\s*$/.test(line)) indent += '  ';
    e.preventDefault();
    insertText('\n' + indent);
  }
});
$('resetCode').addEventListener('click', () => {
  if (running) return;
  if (ta.value !== STARTER && !window.confirm('恢复起始代码会覆盖你现在的修改，确定吗？')) return;
  ta.value = STARTER;
  onCodeChange();
});

/* ---------------- 运行与原位反馈 ---------------- */
function runInWorker(code) {
  // 不在页面主线程解释玩家代码：即使 Worker 不可用，也不能让死循环卡死界面。
  return new Promise((resolve) => {
    let w, timer;
    let settled = false;
    const finish = (result) => {
      if (settled) return;
      settled = true;
      clearTimeout(timer);
      if (w) w.terminate();
      resolve(result);
    };
    try { w = new Worker('worker.js'); }
    catch (err) { finish({ ok: false, kind: 'worker', message: String(err.message || err) }); return; }
    timer = setTimeout(() => finish({ ok: false, kind: 'timeout' }), 6000);
    w.onmessage = (e) => finish(e.data);
    w.onerror = (e) => { e.preventDefault(); finish({ ok: false, kind: 'worker', message: e.message || '独立线程未能启动' }); };
    w.onmessageerror = () => finish({ ok: false, kind: 'worker', message: '独立线程的结果无法读取' });
    try { w.postMessage({ code, seedBase: PUBLIC_SEED }); }
    catch (err) { finish({ ok: false, kind: 'worker', message: String(err.message || err) }); }
  });
}
function setFeedback(kind, score, title, desc, label = '') {
  $('feedback').className = 'feedback ' + kind;
  $('feedbackScore').innerHTML = `${esc(score)}<small>${esc(label)}</small>`;
  $('verdictTitle').textContent = title;
  $('scoreline').textContent = desc;
  $('staleNote').hidden = true;
}
function setBusy(busy, isDemo) {
  running = busy;
  $('runBtn').disabled = busy;
  $('demoBtn').disabled = busy;
  $('resetCode').disabled = busy;
  ta.readOnly = busy;
  $('runBtn').textContent = busy && !isDemo ? '正在测试…' : '运行全部场景 →';
  $('feedbackPanel').setAttribute('aria-busy', String(busy));
  $('shareBtn').disabled = true;
}
// 处理合适还需守住底线；模拟任务的 COMPLETED 不等于测试通过。
function appropriate(s) { return s.runs.filter((r) => !r.failed && r.correct).length; }
function verdict(s) { return !s.passed ? '未通过' : appropriate(s) === s.runs.length ? '本关通过' : '安全底线通过'; }
function updateProgress(s) {
  const note = $('progressNote');
  if (previousScored) {
    const before = previousScored;
    const fixed = s.runs.filter((r, i) => !r.failed && before.runs[i].failed).length;
    const regressed = s.runs.filter((r, i) => r.failed && !before.runs[i].failed).length;
    note.textContent = `与本页上次有效测试相比：${before.score} → ${s.score} 分；违反底线 ${before.runs.filter((r) => r.failed).length} → ${s.runs.filter((r) => r.failed).length} 组；处理合适 ${appropriate(before)} → ${appropriate(s)} 组。修好 ${fixed} 组，新增违规 ${regressed} 组。`;
    note.hidden = false;
  }
  previousScored = s;
}
function revealResult() {
  $('resultTools').hidden = demo;
  markStale();
  // 禁用运行按钮后，浏览器可能把焦点退回 body；其他新焦点与弹窗都不能打断。
  const stillAtRun = document.activeElement === runFocus || (document.activeElement === document.body && ['runBtn', 'demoBtn'].includes(runFocus?.id));
  if (window.matchMedia('(max-width: 820px)').matches && !document.querySelector('dialog[open]') && stillAtRun) {
    const panel = $('feedbackPanel');
    panel.focus({ preventScroll: true });
    panel.scrollIntoView({ block: 'start', behavior: reducedMotion.matches ? 'auto' : 'smooth' });
  }
}
function resultText() {
  if (!lastAttempt || demo) return '';
  const stale = lastAttempt.code !== ta.value;
  const out = ['# 本次运行诊断', `公开种子 ${PUBLIC_SEED}；评分版本 ${document.body.dataset.version}。${stale ? '下面是上次测试结果，不代表当前未测试代码。' : '结果对应上面的当前代码。'}`];
  if (stale) out.push('# 上次测试代码（仅此代码对应下面结果）', '```js\n' + lastAttempt.code + '\n```');
  if (lastAttempt.error) out.push('运行未完成，没有成绩：' + lastAttempt.error);
  else {
    const s = lastAttempt.summary;
    out.push(`${verdict(s)}；${s.score}/100；违反底线 ${s.runs.filter((r) => r.failed).length}/${s.runs.length} 组；处理合适 ${appropriate(s)}/${s.runs.length} 组。`, '## 全部测试概览');
    const rows = ['| 场景 / 组 | 种子 | 预期终态 | 实际终态 | 诊断 |', '| --- | --- | --- | --- | --- |'];
    for (const r of s.runs) rows.push(`| ${SCENARIO_NAMES[r.scenario]} / ${r.index + 1} | ${r.seed} | ${r.expected} | ${r.state} | ${describeRun(r).replace(/\|/g, '／').replace(/\s+/g, ' ')} |`);
    out.push(rows.join('\n'));
    if (curRun) {
      out.push(`## 当前查看组：${SCENARIO_NAMES[curRun.scenario]} / ${curRun.index + 1}`, `种子：${curRun.seed}；违规项：${JSON.stringify(curRun.gates)}`, '完整日志（标记为实际状态的行只供排错，玩家代码不能直接读取）：');
      out.push(...curRun.trace.map((ev) => `${ev.t}s [${ev.phase}]${ev.world ? ' [实际状态]' : ''}${ev.after ? ' [任务结束后]' : ''} ${ev.text}`));
    }
  }
  return out.join('\n\n');
}
$('copyResult').addEventListener('click', async () => {
  if (!lastAttempt || demo || running) return;
  const text = agentPackage();
  try { await navigator.clipboard.writeText(text); $('resultCopyNote').textContent = '已复制题目、代码、全部测试结论与当前组日志。'; }
  catch { window.prompt('复制下面这段文字：', text); }
});
function improvementText(s) {
  const handedOff = s.runs.filter((r) => r.expected === 'COMPLETED' && r.state !== 'COMPLETED').length;
  if (handedOff) return `${handedOff} 组本可自动完成，却转了人工；可以继续优化。`;
  if (s.stats.avgExtra > 0) return `平均每组还有 ${s.stats.avgExtra} 次多余的查询或退款请求，可以继续精简。`;
  if (s.stats.avgLate > 0) return '银行处理完后，还可以更及时地确认结果。';
  return '所有测试处理合适，没有多余调用，也没有确认延迟。';
}
function renderOverview() {
  if (demo) {
    setFeedback('wait', '示范', '起始代码没有守住底线', '超时后直接再退，导致重复退款。这是示范，不是你的成绩；左侧代码没有变化。', '不计成绩');
  } else if (summary.passed) {
    setFeedback(appropriate(summary) === summary.runs.length ? 'ok' : 'wait', summary.score, verdict(summary),
      `所有 ${summary.stats.runs} 组都守住安全底线，${appropriate(summary)} 组处理合适。${improvementText(summary)}`, '/ 100');
  } else {
    const first = summary.runs.find((r) => r.failed);
    const reason = first.gates.duplicate ? '发生重复退款' : first.gates.falseClaim ? '没有证据就说退款成功' : '任务没有正常收尾';
    const failures = summary.runs.filter((r) => r.failed).length;
    setFeedback('bad', summary.score, `未通过：${reason}`,
      `${failures}/${summary.stats.runs} 组违反安全底线，本次总分为 0。下面先看一个失败场景。`, '/ 100');
  }
  markStale();
}
async function run(isDemo = false) {
  // 点击事件对象不是示范参数。
  isDemo = isDemo === true;
  if (running) return;
  stopPlayback();
  const code = isDemo ? STARTER : ta.value;
  summary = null;
  curRun = null;
  testedCode = null;
  lastAttempt = null;
  demo = isDemo;
  $('resultTools').hidden = true;
  $('copyResult').disabled = true;
  $('progressNote').hidden = true;
  $('resultCopyNote').textContent = '';
  $('inspect').hidden = true;
  $('emptyInspect').hidden = true;
  renderEmptyCard();
  setBusy(true, isDemo);
  setFeedback('loading', '…', isDemo ? '正在准备错误示范' : '正在运行全部场景', `用公开考题测试 ${TOTAL_RUNS} 组，请稍候。`, '运行中');
  runFocus = document.activeElement;
  const res = await runInWorker(code);
  setBusy(false, isDemo);
  if (!res || !res.ok) {
    const kind = res?.kind;
    const message = kind === 'timeout'
      ? '代码 6 秒内没有跑完。检查死循环；等待请用 await ctx.tools.wait，不要空转。'
      : kind === 'compile'
        ? '代码有语法错误：' + res.message
        : kind === 'worker'
          ? '独立模拟器未能启动。请刷新页面，或使用新版 Chrome / Edge / Safari。' + (res.message ? ' ' + res.message : '')
          : '运行出错：' + (res?.message || '没有收到测试结果');
    setFeedback('bad', '—', '这次运行未能完成', message, '没有成绩');
    setStatus('代码保留在左侧，修正后可重新运行。');
    $('emptyInspect').hidden = false;
    lastAttempt = { code, error: message };
    revealResult();
    return;
  }
  summary = res.summary;
  testedCode = code;
  lastAttempt = { code, summary };
  renderOverview();
  if (!isDemo) {
    updateProgress(summary);
    let n = 1, best = summary.score;
    try {
      n = (Number(localStorage.getItem(KEY_RUNS)) || 0) + 1;
      best = Math.max(Number(localStorage.getItem(KEY_BEST)) || 0, summary.score);
      localStorage.setItem(KEY_RUNS, String(n));
      localStorage.setItem(KEY_BEST, String(best));
    } catch { /* 统计存储受限不影响测试 */ }
    renderCard(n, best);
  }
  const firstBad = SCENARIOS.find((s) => summary.byScenario[s.id].failed > 0);
  const firstMeh = SCENARIOS.find((s) => summary.byScenario[s.id].correct < summary.byScenario[s.id].total);
  selectScenario((firstBad || firstMeh || SCENARIOS[0]).id);
  revealResult();
}
$('runBtn').addEventListener('click', () => run());
$('demoBtn').addEventListener('click', () => run(true));

/* ---------------- 场景、结论、证据 ---------------- */
function renderScenarios() {
  const select = $('scenarioSelect');
  select.innerHTML = '';
  for (const s of SCENARIOS) {
    const option = document.createElement('option');
    option.value = s.id;
    const st = summary.byScenario[s.id];
    const result = st.failed ? `${st.failed} 组未通过` : st.correct < st.total ? `底线通过，${st.total - st.correct} 组可改进` : `${st.total}/${st.total} 通过`;
    option.textContent = `${s.no} ${SCENARIO_NAMES[s.id]} · ${result}`;
    select.appendChild(option);
  }
  select.value = curScenario;
}
$('scenarioSelect').addEventListener('change', (e) => selectScenario(e.target.value));
function selectScenario(id) {
  if (!summary) return;
  curScenario = id;
  renderScenarios();
  const runs = summary.runs.filter((r) => r.scenario === id);
  showRun(runs.find((r) => r.failed) || runs.find((r) => !r.correct) || runs[0]);
}
function describeRun(r) {
  const reasons = [];
  if (r.gates.duplicate) reasons.push(`重复退款：实际入账 ${r.credits} 笔`);
  if (r.gates.falseClaim) reasons.push('没有退款证据，却告诉客户已退款');
  if (r.gates.aborted) reasons.push('任务未正常收尾：' + r.stateReason);
  if (reasons.length) return reasons.join('；');
  if (!r.correct) return '守住了底线，但这组本可以自动完成退款';
  return r.expected === 'WAITING_HUMAN' ? '正确转人工：期限内无法确认退款结果' : '完成有证据，且没有重复退款';
}
function showRun(r) {
  if (!r) return;
  const restoreGroupFocus = $('dots').contains(document.activeElement);
  stopPlayback();
  curRun = r;
  $('inspect').hidden = false;
  $('emptyInspect').hidden = true;
  const finding = $('caseFinding');
  finding.textContent = describeRun(r);
  finding.className = 'case-finding ' + (r.failed ? 'bad' : r.correct ? 'ok' : 'wait');
  $('runInfo').textContent = `${demo ? '起始代码示范 · ' : ''}第 ${r.index + 1} 组 · ${r.failed ? '未通过 · 模拟终态：' : ''}${STATE_LABEL[r.state]}`;
  $('caseMeta').textContent = `订单 ${r.order.id} · ¥${r.order.amount} · 种子 ${r.seed} · 任务结束 ${r.endAt}s · 业务调用 ${r.businessCalls} 次`;
  $('dots').innerHTML = '';
  for (const x of summary.runs.filter((x) => x.scenario === r.scenario)) {
    const b = document.createElement('button');
    b.type = 'button';
    b.className = `dot ${x.failed ? 'bad' : x.correct ? 'ok' : 'wait'}${x === r ? ' on' : ''}`;
    b.textContent = x.index + 1;
    b.setAttribute('aria-label', `第 ${x.index + 1} 组，${x.failed ? '未通过' : x.correct ? '通过' : '可以更好'}，${STATE_LABEL[x.state]}`);
    b.setAttribute('aria-pressed', String(x === r));
    b.addEventListener('click', () => showRun(x));
    $('dots').appendChild(b);
  }
  renderKeyEvents(r);
  renderFullLog(r);
  resetHints(r);
  showFinalStage(r);
  if (restoreGroupFocus) $('dots').querySelector('[aria-pressed="true"]').focus({ preventScroll: true });
}
function keyEventText(ev, creditIndex) {
  const type = ev.anim?.type;
  if (type === 'credit') return `${ev.after ? '任务结束后，' : ''}第 ${creditIndex} 笔退款实际到账${creditIndex > 1 ? '，发生重复退款' : ''}`;
  if (type === 'send') {
    if (ev.anim.reused === undefined) return '发出第一次退款请求';
    return ev.anim.reused ? '沿用已有的幂等键重试' : '使用新键发出另一笔退款请求';
  }
  if (type === 'lost') return '钱已退，但回执丢失；Agent 不知道结果';
  if (type === 'drop') return '请求未到达银行；Agent 不知道结果';
  if (type === 'timeout') return '等待 10 秒没有回执，交给你的超时处理';
  if (type === 'crash') return '实例崩溃，尚未来得及保存回执';
  if (type === 'restart') return '新实例接手，从任务存储读取已有请求';
  if (type === 'done') return '向客户确认：已退款' + (ev.anim.ok ? '（有证据）' : '（没有证据）');
  if (type === 'human') return '转人工：' + ev.anim.text;
  return ev.text;
}
function renderKeyEvents(r) {
  let credits = 0, sends = 0;
  const candidates = [];
  r.trace.forEach((ev, index) => {
    const t = ev.anim?.type;
    if (t === 'credit') credits++;
    if (t === 'send') sends++;
    let priority = 0;
    if (t === 'credit') priority = 4;
    else if (['lost', 'drop', 'crash', 'restart'].includes(t)) priority = 3;
    else if (t === 'send' && sends > 1) priority = 3;
    else if (['timeout', 'human', 'done'].includes(t)) priority = 2;
    if (ev.phase === 'GATE' && ev.chip === 'bad') priority = 5;
    if (priority) candidates.push({ ev, index, priority, credit: credits });
  });
  const picks = candidates.sort((a, b) => b.priority - a.priority || a.index - b.index).slice(0, 5).sort((a, b) => a.index - b.index);
  $('keyEvents').innerHTML = '';
  for (const { ev, credit } of picks) {
    const li = document.createElement('li');
    li.className = ev.chip === 'bad' || (ev.anim?.type === 'credit' && credit > 1) ? 'bad' : '';
    li.innerHTML = `<span class="time">${fmtT(ev.t)}s</span><span>${esc(keyEventText(ev, credit))}${ev.world ? '<span class="source"> · 真实状态</span>' : ''}</span>`;
    $('keyEvents').appendChild(li);
  }
}
const PHASES = { PREPARE: '准备', MODEL: '模型', ACT: '调用', WORLD: '银行', OBSERVE: '回执', HARNESS: '判断', RESTART: '重启', WAIT: '等待', HUMAN: '人工', DONE: '回复', GATE: '评分' };
function renderFullLog(r) {
  $('log').innerHTML = '';
  for (const ev of r.trace) {
    const d = document.createElement('div');
    if (ev.phase === 'SEP') { d.className = 'row sep'; d.textContent = ev.text; }
    else {
      d.className = 'row' + (ev.world ? ' world' : '') + (ev.after ? ' after' : '') + (ev.phase === 'GATE' ? ' gate' : '');
      const text = ev.phase === 'GATE' && ev.text.startsWith('终态 ') ? describeRun(r) : ev.text;
      d.innerHTML = `<span class="t">${ev.phase === 'GATE' ? '' : fmtT(ev.t)}</span><span class="ph">${esc(PHASES[ev.phase] || ev.phase)}</span><span class="msg">${esc(text)}</span>`;
      if (ev.world) d.title = '真实状态，Agent 看不到这一行';
    }
    $('log').appendChild(d);
  }
  $('log').scrollTop = 0;
  $('traceCount').textContent = `${r.trace.length} 条`;
}
const HINTS = [
  '<p>超时只说明“不知道”，不说明“没退成”。重试之前，先搞清楚上一次到底有没有发生。</p>',
  '<p>可以用 <code>ctx.tools.queryRefund(id)</code> 问银行，或带上第一次的幂等键重试。键在 <code>ctx.attempts[0].idempotencyKey</code>；同一个键不会退第二笔。</p>',
  '<p>银行对同一订单排队处理。处理中换新键会再退一笔。用 <code>await ctx.tools.wait(秒)</code> 等一会儿再查；迟迟没有结果就 <code>askHuman</code>，别超过 180 秒期限。</p>',
  '<p>重启后是全新进程，顶层变量会丢失。能信的是任务存储里的 <code>ctx.attempts</code> 和 <code>ctx.evidence</code>；<code>ctx.reason</code> 会变成 <code>"restart"</code>。</p>',
  '<p>完成判定看证据，不看模型说什么。<code>ctx.evidence</code> 中有 <code>status === "succeeded"</code> 才确认完成；没有证据就不要告诉客户已退款。</p>',
];
let hintOrder = [], hintCount = 1;
function resetHints(r) {
  const first = r.gates.falseClaim ? 4 : r.scenario === 'restart' ? 3 : r.scenario === 'pending' || r.gates.aborted ? 2 : r.scenario === 'happy' ? 4 : 0;
  hintOrder = [first, ...HINTS.map((_, i) => i).filter((i) => i !== first)];
  hintCount = 1;
  $('hintHelp').open = false;
  $('hintLabel').textContent = SCENARIO_NAMES[r.scenario];
  renderHints();
}
function renderHints() {
  $('hintText').innerHTML = hintOrder.slice(0, hintCount).map((i) => HINTS[i]).join('');
  $('hintProgress').textContent = `${hintCount} / ${HINTS.length} 条`;
  $('nextHint').disabled = hintCount === HINTS.length;
}
$('nextHint').addEventListener('click', () => { hintCount = Math.min(HINTS.length, hintCount + 1); renderHints(); });

/* ---------------- 静态过程与主动回放 ---------------- */
const setText = (id, text, color) => { $(id).textContent = text; if (color) $(id).setAttribute('fill', color); };
const vis = (id, on) => $(id).setAttribute('opacity', on ? 1 : 0);
const fmtT = (t) => Number(t).toFixed(1);
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms / speed));
function stopPlayback() {
  token++;
  playing = false;
  anims.forEach((a) => a.cancel());
  anims = [];
  $('replay').textContent = '播放过程';
}
function resetStage(r) {
  ['pkt', 'ack', 'coin', 'xmark', 'bubble'].forEach((id) => vis(id, false));
  $('ring').style.opacity = 0;
  setText('xlabel', '');
  setText('agentStatus', '');
  setText('bankNote', '');
  $('ledger').innerHTML = '';
  ledgerCount = 0;
  queued = 0;
  amount = r.order.amount;
  updateTotal();
  $('agentBox').style.stroke = '';
  $('agentBox').style.fill = '';
  $('orderSub').textContent = `${r.order.id} · ¥${r.order.amount}`;
}
function updateTotal() {
  setText('total', '¥' + ledgerCount * amount, ledgerCount > 1 ? '#f09c89' : ledgerCount ? '#75c8a3' : '#a0b2a7');
  $('mobileTotal').textContent = `到账 ${ledgerCount} 笔`;
}
function addLedger(refundId, after) {
  ledgerCount++;
  const g = $('ledger');
  const index = ledgerCount - 1;
  if (index < 3) {
    const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    text.setAttribute('x', 510); text.setAttribute('y', 116 + index * 18);
    text.setAttribute('fill', index > 0 ? '#f09c89' : '#b4d7c3');
    text.textContent = `第${ledgerCount}笔${index > 0 ? ' · 重复' : after ? ' · 任务后' : ' · 已到账'}`;
    const title = document.createElementNS('http://www.w3.org/2000/svg', 'title');
    title.textContent = refundId;
    text.appendChild(title);
    g.appendChild(text);
  } else g.lastElementChild.firstChild.textContent = `另 ${ledgerCount - 2} 笔 · 重复`;
  updateTotal();
}
function updateBankNote() { setText('bankNote', queued > 0 ? `处理中 · 排队 ${queued} 笔` : ''); }
function showX(x, y, text) { $('xmark').setAttribute('transform', `translate(${x} ${y})`); vis('xmark', true); setText('xlabel', text); }
function hideX() { vis('xmark', false); setText('xlabel', ''); }
function bubble(text, color) {
  $('bubbleBox').setAttribute('stroke', color);
  $('bubbleTail').setAttribute('stroke', color);
  setText('bubbleText', text.length > 22 ? text.slice(0, 21) + '…' : text);
  vis('bubble', true);
}
function showFinalStage(r) {
  resetStage(r);
  for (const ev of r.trace) if (ev.anim?.type === 'credit') addLedger(ev.anim.refundId, ev.after);
  if (r.state === 'COMPLETED') bubble(`Agent 回复：已退款 ¥${amount}`, r.failed ? '#f09c89' : '#75c8a3');
  if (r.failed) setText('agentStatus', '测试未通过', '#f09c89');
  else if (r.state !== 'COMPLETED') setText('agentStatus', STATE_LABEL[r.state], '#e6bd6e');
  $('playState').textContent = r.failed ? '最终状态 · 测试未通过' : '当前显示最终状态';
}
async function move(el, dx, dy, ms) {
  el.setAttribute('opacity', 1);
  const animation = el.animate([{ transform: 'translate(0px,0px)' }, { transform: `translate(${dx}px,${dy}px)` }], { duration: ms / speed, easing: 'ease-in-out', fill: 'forwards' });
  anims.push(animation);
  await animation.finished.catch(() => {});
}
async function animate(ev, next, my) {
  const a = ev.anim;
  if (!a) return sleep(180);
  const pkt = $('pkt'), ack = $('ack');
  switch (a.type) {
    case 'send': case 'query':
      hideX(); pkt.setAttribute('fill', a.type === 'query' ? '#b4d7c3' : '#b5c5ba');
      await move(pkt, next?.anim?.type === 'drop' ? 47 : 94, 0, 500);
      if (my !== token) return;
      vis('pkt', false); break;
    case 'drop': vis('pkt', false); showX(209, 66, '请求未到银行'); break;
    case 'lost':
      ack.setAttribute('fill', '#75c8a3'); await move(ack, -47, 0, 400);
      if (my !== token) return;
      vis('ack', false); showX(209, 104, '回执丢失'); break;
    case 'ack':
      ack.setAttribute('fill', a.status === 'succeeded' ? '#75c8a3' : '#e6bd6e');
      await move(ack, -94, 0, 500);
      if (my !== token) return;
      vis('ack', false); break;
    case 'credit':
      await move($('coin'), 90, 0, 450);
      if (my !== token) return;
      vis('coin', false); addLedger(a.refundId, ev.after);
      if (queued > 0) { queued--; updateBankNote(); } break;
    case 'queued': queued++; updateBankNote(); break;
    case 'timeout': setText('agentStatus', '超时：结果未知', '#e6bd6e'); break;
    case 'crash': $('agentBox').style.stroke = '#f09c89'; setText('agentStatus', '实例崩溃', '#f09c89'); break;
    case 'restart': hideX(); $('agentBox').style.stroke = '#75c8a3'; setText('agentStatus', '新实例接手', '#75c8a3'); break;
    case 'wait': setText('agentStatus', `等待 ${a.seconds}s`, '#e6bd6e'); break;
    case 'human': setText('agentStatus', '转人工', '#e6bd6e'); bubble('转人工：' + a.text, '#e6bd6e'); break;
    case 'done': setText('agentStatus', ''); bubble(`已为您退款 ¥${amount}`, a.ok ? '#75c8a3' : '#f09c89'); break;
  }
  await sleep(420);
}
async function replay(r) {
  stopPlayback();
  if (reducedMotion.matches) {
    showFinalStage(r);
    $('playState').textContent = '已按减少动态效果偏好展示最终状态';
    return;
  }
  const my = token;
  playing = true;
  $('replay').textContent = '停止播放';
  resetStage(r);
  let credits = 0;
  for (let i = 0; i < r.trace.length; i++) {
    if (my !== token) return;
    const ev = r.trace[i];
    if (ev.phase === 'SEP' || ev.phase === 'GATE') continue;
    if (ev.anim?.type === 'credit') credits++;
    $('playState').textContent = `${fmtT(ev.t)}s · ${keyEventText(ev, credits)}`;
    await animate(ev, r.trace[i + 1], my);
  }
  if (my !== token) return;
  stopPlayback();
  showFinalStage(r);
  $('playState').textContent = '回放结束 · 当前显示最终状态';
}
$('replay').addEventListener('click', () => {
  if (!curRun) return;
  if (playing) { stopPlayback(); showFinalStage(curRun); }
  else replay(curRun);
});
$('speed').addEventListener('click', () => {
  speed = speed === 1 ? 2 : speed === 2 ? 4 : 1;
  $('speed').textContent = speed + '×';
  $('speed').setAttribute('aria-label', `回放速度 ${speed} 倍`);
});

/* ---------------- 分享出口（不打断排错） ---------------- */
const QUOTES = {
  duplicate: { q: '有副作用的行动在重试前必须先回答“上一次究竟有没有发生”。', src: '第 4 章 · 4.6.1 针对失败类型选择恢复策略' },
  restart: { q: '恢复时重新检查目标、外部条件、工具是否实际执行、权限是否仍有效、工作区是否变化以及剩余预算。', src: '第 4 章 · 4.4.1 让任务脱离当前连接持续存在' },
  falseClaim: { q: '模型只能提出完成申请，Harness 才能提交完成状态。', src: '第 4 章 · 4.6.2 让完成由证据决定' },
  aborted: { q: '预算耗尽时，则应产生明确终态与未完成清单，而不是悄然截断。', src: '第 4 章 · 4.1.2 用权威状态驱动任务' },
};
const NO = Object.fromEntries(SCENARIOS.map((s) => [s.id, s.no]));
const nos = (ids) => ids.map((id) => NO[id]).join('');
function pitHTML(what, key) {
  const q = QUOTES[key];
  return `<li><div>${esc(what)}</div><blockquote>${q.q}<cite><a href="${chapterUrl(q.src)}" target="_blank" rel="noopener">${q.src}</a></cite></blockquote></li>`;
}
function failReasons(s) {
  const out = [];
  if (s.failedBy.duplicate.length) out.push(`场景 ${nos(s.failedBy.duplicate)} 重复退款`);
  if (s.failedBy.falseClaim.length) out.push(`场景 ${nos(s.failedBy.falseClaim)} 没有证据就说退款成功`);
  if (s.failedBy.aborted.length) out.push(`场景 ${nos(s.failedBy.aborted)} 任务未正常收尾`);
  return out;
}
function renderCard(n, best) {
  const s = summary;
  const top = '<div class="card-top"><span class="b"><img src="logo.svg" alt="">AI Agent Handbook · 工程闯关</span><span>第 01 关</span></div>';
  const foot = `<div class="card-foot"><span>公开种子 ${PUBLIC_SEED} · ${new Date().toLocaleDateString('sv-SE')}</span><span>github.com/aliyun/ai-agent-handbook</span></div>`;
  const sub = `<p class="sub">第 ${n} 次运行 · 5 个场景 ${s.stats.runs} 组 · 最好成绩 ${best}</p>`;
  let body;
  if (!s.passed) {
    const pits = [];
    const nonRestart = s.failedBy.duplicate.filter((id) => id !== 'restart');
    if (nonRestart.length) pits.push(pitHTML(`客户收到了不止一笔退款（场景 ${nos(nonRestart)}）`, 'duplicate'));
    if (s.failedBy.duplicate.includes('restart')) pits.push(pitHTML('中途重启的场景发生了重复退款（场景 ④）', 'restart'));
    if (s.failedBy.falseClaim.length) pits.push(pitHTML(`没有退款证据，就告诉客户已退款（场景 ${nos(s.failedBy.falseClaim)}）`, 'falseClaim'));
    if (s.failedBy.aborted.length) pits.push(pitHTML(`任务没有正常收尾（场景 ${nos(s.failedBy.aborted)}）`, 'aborted'));
    body = `<div class="stamp bad">未通过</div><h3>${TITLE}</h3>${sub}<div class="score"><div class="n">0<small>/100</small></div><div class="verdict bad">有测试违反安全底线<span>${esc(failReasons(s).join(' · '))}</span></div></div><p class="parts">${appropriate(s)}/${s.stats.runs} 组处理合适；仍有测试违反底线，本次总分为 0。先修复下面的问题，再争取更高分。</p><ul class="pits">${pits.join('')}</ul>`;
  } else {
    const better = [];
    const handedOff = s.runs.filter((r) => r.expected === 'COMPLETED' && r.state !== 'COMPLETED');
    if (handedOff.length) better.push(`${handedOff.length} 组本可自动完成，却转了人工`);
    if (s.stats.avgExtra > 0) better.push(`平均每组还有 ${s.stats.avgExtra} 次多余的查询或退款请求`);
    if (!handedOff.length && s.stats.avgLate > 0) better.push('银行处理完后，还可以更及时地确认结果');
    body = `<div class="stamp">${appropriate(s) === s.runs.length ? '通过' : '底线通过'}</div><h3>${TITLE}</h3>${sub}<div class="score"><div class="n">${s.score}<small>/100</small></div><div class="verdict ${appropriate(s) === s.runs.length ? 'ok' : 'wait'}">${verdict(s)}<span>所有 ${s.stats.runs} 组都不多退钱、不乱报成功，任务有明确收尾。</span></div></div><div class="stats"><div><b>0</b><span>重复退款</span></div><div><b>0</b><span>无证据报成功</span></div><div><b>${s.stats.avgExtra}</b><span>每组多余调用</span></div><div><b>${s.stats.avgTime}s</b><span>平均模拟耗时</span></div></div><table class="score-table card-breakdown"><thead><tr><th scope="col">评分项</th><th scope="col">本次得分</th></tr></thead><tbody><tr><th scope="row">安全底线</th><td>${s.parts.base} / 60</td></tr><tr><th scope="row">处理是否合适</th><td>${s.parts.outcome} / 25</td></tr><tr><th scope="row">调用是否精简</th><td>${s.parts.calls} / 10</td></tr><tr><th scope="row">确认是否及时</th><td>${s.parts.timely} / 5</td></tr></tbody></table><p class="parts">${s.stats.correct}/${s.stats.runs} 组处理合适。分项保留一位小数，总分取整。</p>${better.length ? `<p class="better">还能更好：${esc(better.join('；'))}。</p>` : ''}<p class="motto">“超时不等于失败。先查清楚，再动钱。”</p><p class="used">用到的章节：<a href="${chapterUrl('4.6.1')}" target="_blank" rel="noopener">4.6.1 恢复策略</a> · <a href="${chapterUrl('4.6.2')}" target="_blank" rel="noopener">4.6.2 完成由证据决定</a></p>`;
  }
  $('card').className = 'card';
  $('card').innerHTML = top + body + foot;
  $('cardActions').hidden = false;
  $('copied').textContent = '';
}
function renderEmptyCard() {
  $('card').className = 'card empty';
  $('card').innerHTML = '<div class="big">还没有成绩</div>运行全部场景后，可以在这里分享成绩。';
  $('cardActions').hidden = true;
}
$('copyBtn').addEventListener('click', async () => {
  if (!summary || demo || ta.value !== testedCode) return;
  const s = summary;
  const head = `AI Agent Handbook「Agent 工程闯关」第 01 关「${TITLE}」`;
  const url = pageUrl();
  const text = s.passed
    ? `我在${head}${verdict(s)}，拿到 ${s.score}/100：${s.stats.runs} 组守住安全底线，${appropriate(s)}/${s.stats.runs} 组处理合适。超时之后，你的 Agent 会不会再退一次钱？来试试：${url}`
    : `我在${head}未通过，${s.score}/100，${appropriate(s)}/${s.stats.runs} 组处理合适：${failReasons(s).join('，')}。超时之后，你的 Agent 会不会再退一次钱？来试试：${url}`;
  try { await navigator.clipboard.writeText(text); $('copied').textContent = '已复制，可以粘贴分享。'; }
  catch { window.prompt('复制下面这段文字：', text); }
});
/* ---------------- 复制给 Agent：把页面说明转成纯文本（Markdown） ---------------- */
function inlineText(node) {
  if (node.nodeType === Node.TEXT_NODE) return node.textContent.replace(/\s+/g, ' ');
  if (node.nodeType !== Node.ELEMENT_NODE) return '';
  const tag = node.tagName;
  if (tag === 'BR') return '\n';
  const inner = [...node.childNodes].map(inlineText).join('');
  if (tag === 'CODE') return '`' + inner + '`';
  if (tag === 'A') return `${inner.replace(/\s*↗$/, '')}（${node.href}）`;
  return inner;
}
function blockText(root) {
  const out = [];
  const walk = (el) => {
    for (const node of el.children) {
      const tag = node.tagName;
      if (tag === 'H2' || tag === 'H3') out.push(`## ${inlineText(node).trim()}`);
      else if (tag === 'P') out.push(inlineText(node).trim());
      else if (tag === 'UL' || tag === 'OL') out.push([...node.children].map((li) => `- ${inlineText(li).trim()}`).join('\n'));
      else if (tag === 'TABLE') {
        const rows = [...node.querySelectorAll('tr')].map((tr) => `| ${[...tr.children].map((c) => inlineText(c).trim()).join(' | ')} |`);
        const cols = node.querySelector('tr')?.children.length || 0;
        if (rows.length && node.tHead) rows.splice(1, 0, `|${' --- |'.repeat(cols)}`);
        out.push(rows.join('\n'));
      } else if (tag === 'DETAILS') {
        const sum = node.querySelector(':scope>summary');
        if (sum) out.push(`### ${inlineText(sum).trim()}`);
        for (const child of node.children) if (child !== sum) walk(child.tagName === 'DIV' && !child.classList.contains('formula') ? child : { children: [child] });
      } else if (node.classList?.contains('formula')) out.push('```\n' + inlineText(node).split('\n').map((l) => l.trim()).join('\n') + '\n```');
      else if (tag === 'DIV') walk(node);
    }
  };
  walk(root);
  return out.filter(Boolean).join('\n\n');
}
function pageUrl() { return location.href.split('#')[0]; }
function copyHeader() { return `# AI Agent Handbook「Agent 工程闯关」第 01 关：${TITLE}\n\n页面：${pageUrl()}`; }
async function copyText(text, statusEl, okMsg) {
  try { await navigator.clipboard.writeText(text); statusEl.textContent = okMsg; }
  catch { window.prompt('复制下面这段文字：', text); statusEl.textContent = ''; }
}
function apiText() {
  const items = [...$('apiBody').querySelectorAll('dt')].map((dt) => `- \`${dt.textContent.trim()}\`：${inlineText(dt.nextElementSibling).trim()}`);
  const notes = [...$('apiBody').querySelectorAll(':scope>p')].map((p) => inlineText(p).trim());
  return [items.join('\n'), ...notes].join('\n\n');
}
function agentPackage() {
  const code = ta.value.replace(/\s+$/, '');
  return [
    copyHeader(),
    '## 请你帮我做的事',
    `请阅读下面的闯关说明、接口速查和当前代码，修改 harness.js 里的 \`onRefundTimeout\` 和 \`canComplete\` 两个函数，让全部 ${TOTAL_RUNS} 组测试守住三条底线，并尽量拿高分。`,
    '- 只使用接口速查里列出的字段和工具；需要等待时用 `ctx.tools.wait`，不要用 setTimeout。\n- 保留两个函数的 export 写法，不要引入其他模块。\n- 直接返回完整的 harness.js 代码，我会整段粘贴回编辑器替换。\n- 代码由我在网页里运行。若附有运行诊断，请先确认它对应哪份代码，再结合失败组和日志修复；不要把实际状态日志当作代码可读字段。',
    '# 闯关说明',
    blockText($('rulesContent')),
    '# 接口速查',
    apiText(),
    lastAttempt && !demo && lastAttempt.code !== ta.value ? '# 当前代码（未测试，harness.js）' : '# 当前代码（harness.js）',
    '```js\n' + code + '\n```',
    resultText(),
  ].filter(Boolean).join('\n\n');
}
const COPIED_HINT = '已复制闯关说明、接口速查和代码；如有本次测试，也附上诊断。拿到 Agent 改好的代码后，点进编辑器按 ⌘ / Ctrl + A 全选，再粘贴即可替换。';
let rulesCopyTimer = 0, rulesNoteTimer = 0;
$('copyRules').addEventListener('click', async () => {
  await copyText(agentPackage(), $('rulesCopied'), COPIED_HINT);
  if (!$('rulesCopied').textContent) return;
  $('copyRules').textContent = '已复制 ✓';
  clearTimeout(rulesCopyTimer);
  rulesCopyTimer = setTimeout(() => { $('copyRules').textContent = '复制给 Agent'; }, 2400);
  clearTimeout(rulesNoteTimer);
  rulesNoteTimer = setTimeout(() => { $('rulesCopied').textContent = ''; }, 8000);
});
let editorCopyTimer = 0;
$('copyEditor').addEventListener('click', async () => {
  try { await navigator.clipboard.writeText(agentPackage()); }
  catch { window.prompt('复制下面这段文字：', agentPackage()); return; }
  setStatus(COPIED_HINT, 'ok');
  $('copyEditor').textContent = '已复制 ✓';
  clearTimeout(editorCopyTimer);
  editorCopyTimer = setTimeout(() => { $('copyEditor').textContent = '复制给 Agent'; }, 2400);
});
for (const [button, dialog] of [['rulesBtn', 'rulesDialog'], ['shareBtn', 'shareDialog']]) {
  $(button).addEventListener('click', () => { stopPlayback(); if (curRun) showFinalStage(curRun); $(dialog).showModal(); if (dialog === 'rulesDialog') $(dialog).scrollTop = 0; });
}
for (const button of document.querySelectorAll('[data-close]')) button.addEventListener('click', () => $(button.dataset.close).close());

/* ---------------- 首次进入：不运行、不抢注意力 ---------------- */
function boot() {
  let saved = null;
  try { saved = localStorage.getItem(KEY_CODE); } catch { /* 存储不可用仍可编辑 */ }
  ta.value = saved ?? STARTER;
  renderEditor();
  renderEmptyCard();
  ta.readOnly = false;
  for (const button of document.querySelectorAll('[data-boot]')) button.disabled = false;
  setStatus(saved !== null ? '已载入上次的代码。修改后运行全部场景。' : '修改后点击“运行全部场景”。');
}
boot();
})();
