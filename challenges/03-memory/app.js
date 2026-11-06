// 第 03 关：保留完整编辑器，以两轮寄送与长期记忆对照展示治理结果。
(() => {
'use strict';
const $ = (id) => document.getElementById(id);
if (!window.ChallengeSim) {
  $('status').textContent = '模拟器脚本未能加载，请刷新重试。';
  $('verdictTitle').textContent = '模拟器没有加载成功';
  return;
}
const { SCENARIOS, PUBLIC_SEED, STARTER } = window.ChallengeSim;
const STORAGE = `agent-challenge:${document.body.dataset.level}:${document.body.dataset.version}`;
const KEY_CODE = `${STORAGE}:code`, KEY_RUNS = `${STORAGE}:runs`, KEY_BEST = `${STORAGE}:best`;
const CH5 = new URL('../../build/chapter-05.html', location.href).href;
function chapterUrl(section = 'Memory 的写入与使用') {
  const anchors = { 'Memory 的写入与使用': 'memory-的写入与使用', '让 Knowledge 提供事实、Memory 提供经验': '让-knowledge-提供事实、memory-提供经验', '用作用域和元数据建立资产边界': '用作用域和元数据建立资产边界' };
  return CH5 + (anchors[section] ? '#' + anchors[section] : '');
}
const TITLE = '记忆错了，如何优化？';
const TOTAL_RUNS = 22;
const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const STATE_LABEL = { COMPLETED: '已完成', WAITING_HUMAN: '转人工', ABORTED: '未正常收尾' };
const SCENARIO_NAMES = Object.fromEntries(SCENARIOS.map((s) => [s.id, s.name]));
const GATE_NAMES = { scope: '跨作用域读取', pollution: '错误长期写入', wrong: '寄错或无有效依据寄送', aborted: '未正常收尾' };
let summary = null, demo = false, testedCode = null, curRun = null, running = false;
let lastAttempt = null, previousScored = null, runFocus = null;
let token = 0, playing = false, speed = 1;
let stageRound = 1, stageRounds = {}, stageMemory = [];
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

/* ---------------- 编辑器 ---------------- */
const ta = $('code'), hl = $('hl'), gutter = $('gutter');
const KW = new Set('async await function return const let var if else while for of in new try catch finally throw break continue typeof true false null undefined export default class this'.split(' '));
function highlight(src) {
  const re = /(\/\/[^\n]*|\/\*[\s\S]*?\*\/)|("(?:\\.|[^"\\\n])*"|'(?:\\.|[^'\\\n])*'|`(?:\\.|[^`\\])*`)|\b(\d+(?:\.\d+)?)\b|([A-Za-z_$][\w$]*)(?=\s*\()|([A-Za-z_$][\w$]*)/g;
  let out = '', last = 0, m;
  while ((m = re.exec(src))) {
    out += esc(src.slice(last, m.index));
    const t = m[0], cls = m[1] ? 'c' : m[2] ? 's' : m[3] ? 'n' : KW.has(t) ? 'k' : m[4] ? 'f' : '';
    out += cls ? `<span class="${cls}">${esc(t)}</span>` : esc(t);
    last = re.lastIndex;
  }
  return out + esc(src.slice(last));
}
function renderEditor() {
  hl.innerHTML = highlight(ta.value) + (ta.value.endsWith('\n') ? ' ' : '');
  gutter.textContent = Array.from({ length: ta.value.split('\n').length }, (_, i) => i + 1).join('\n');
}
function setStatus(text, kind = '') { $('status').className = 'ed-status' + (kind ? ' ' + kind : ''); $('status').textContent = text; }
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
  try { localStorage.setItem(KEY_CODE, ta.value); setStatus('已自动保存到本机。'); }
  catch { setStatus('本次修改未能保存到本机，请勿刷新或关闭页面。', 'err'); }
  markStale();
}
function insertText(text) {
  if (!document.execCommand('insertText', false, text)) { ta.setRangeText(text, ta.selectionStart, ta.selectionEnd, 'end'); onCodeChange(); }
}
ta.addEventListener('input', onCodeChange);
ta.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' && (e.metaKey || e.ctrlKey)) { e.preventDefault(); run(); return; }
  if (ta.readOnly) return;
  if (e.key === 'Tab' && !e.shiftKey && !e.metaKey && !e.ctrlKey) { e.preventDefault(); insertText('  '); return; }
  if (e.key === 'Enter' && !e.shiftKey && !e.altKey && !e.isComposing) {
    const before = ta.value.slice(0, ta.selectionStart), line = before.slice(before.lastIndexOf('\n') + 1);
    let indent = line.match(/^\s*/)[0];
    if (/[{(\[]\s*$/.test(line)) indent += '  ';
    e.preventDefault(); insertText('\n' + indent);
  }
});
$('resetCode').addEventListener('click', () => {
  if (running || (ta.value !== STARTER && !window.confirm('恢复起始代码会覆盖你现在的修改，确定吗？'))) return;
  ta.value = STARTER; onCodeChange();
});

/* ---------------- 独立运行与评分 ---------------- */
function runInWorker(code) {
  return new Promise((resolve) => {
    let w, timer, settled = false;
    const finish = (result) => {
      if (settled) return;
      settled = true; clearTimeout(timer); if (w) w.terminate(); resolve(result);
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
  $('verdictTitle').textContent = title; $('scoreline').textContent = desc; $('staleNote').hidden = true;
}
function setBusy(busy) {
  running = busy;
  for (const id of ['runBtn', 'demoBtn', 'resetCode']) $(id).disabled = busy;
  ta.readOnly = busy; $('shareBtn').disabled = true;
  $('runBtn').textContent = busy && !demo ? '正在测试…' : '运行全部场景 →';
  $('feedbackPanel').setAttribute('aria-busy', String(busy));
}
// 两轮处理合适且记忆健康才算 correct；COMPLETED 和 passed 均不等于本关通过。
function appropriate(s) { return s.runs.filter((r) => !r.failed && r.correct && r.memory?.healthy).length; }
function verdict(s) { return !s.passed ? '未通过' : appropriate(s) === TOTAL_RUNS && s.runs.length === TOTAL_RUNS ? '本关通过' : '安全底线通过'; }
function updateProgress(s) {
  const note = $('progressNote');
  if (previousScored) {
    const before = previousScored;
    const previous = new Map(before.runs.map((r) => [`${r.scenario}:${r.index}`, r]));
    const fixed = s.runs.filter((r) => !r.failed && previous.get(`${r.scenario}:${r.index}`)?.failed).length;
    const regressed = s.runs.filter((r) => r.failed && previous.get(`${r.scenario}:${r.index}`)?.failed === false).length;
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
      out.push(`## 当前查看组：${SCENARIO_NAMES[curRun.scenario]} / ${curRun.index + 1}`, `种子：${curRun.seed}；违规项：${JSON.stringify(curRun.gates)}；加权业务成本 ${curRun.businessCalls}，多余成本 ${curRun.extraCalls}`);
      out.push('以下 rounds / memory 是运行后的排错结果，不是 ctx 可读字段；不可据此访问未列出的 API。');
      out.push('两轮寄送结果：\n```json\n' + JSON.stringify(curRun.rounds, null, 2) + '\n```');
      out.push('当前用户长期记忆前后对照：\n```json\n' + JSON.stringify(memorySnapshot(curRun), null, 2) + '\n```');
      out.push('完整日志（实际状态只供排错，玩家代码不能直接读取）：');
      out.push(...curRun.trace.map((ev) => `${ev.t}s [${ev.phase}]${ev.world ? ' [实际状态]' : ''} ${ev.text}`));
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
  const unhealthy = s.runs.filter((r) => !r.memory?.healthy).length;
  if (unhealthy) return `${unhealthy} 组长期记忆仍待治理；仅查到地址并寄对，还需要 remember 纠正旧记忆。`;
  const handedOff = s.runs.filter((r) => r.expected === 'COMPLETED' && (r.rounds || []).some((round) => round.state !== 'COMPLETED')).length;
  if (handedOff) return `${handedOff} 组本可安全寄送，却未完成两轮请求；可以继续优化。`;
  if (appropriate(s) < s.runs.length) return '仍有请求未处理合适，请对照两轮寄送与长期记忆，而不是只看任务终态。';
  if (s.stats.avgExtra > 0) return `平均每组还有 ${s.stats.avgExtra} 多余业务成本，可减少重复查询与不必要的写入。`;
  return '能寄的有据可寄，查不清的转人工，长期记忆治理合适，没有多余业务成本。';
}
function renderOverview() {
  if (demo) setFeedback('wait', '示范', '检索到了，不等于可以直接用', '看看起始代码如何处理地址来源，以及错误是否延续到下一次会话。示范不改左侧代码，也不计成绩。', '不计成绩');
  else if (summary.passed) setFeedback(verdict(summary) === '本关通过' ? 'ok' : 'wait', summary.score, verdict(summary), `全部 ${summary.stats.runs} 组都守住安全底线，${appropriate(summary)} 组处理合适（两轮请求与记忆治理均符合要求）。${improvementText(summary)}`, '/ 100');
  else {
    const first = summary.runs.find((r) => r.failed);
    const reason = Object.entries(GATE_NAMES).find(([key]) => first?.gates[key])?.[1] || '请求没有正常收尾';
    setFeedback('bad', 0, `未通过：${reason}`, `${summary.runs.filter((r) => r.failed).length}/${summary.stats.runs} 组违反底线，本次总分为 0。下面先看一个失败场景。`, '/ 100');
  }
  markStale();
}
async function run(isDemo = false) {
  if (running) return;
  stopPlayback(); demo = isDemo === true;
  const code = demo ? STARTER : ta.value;
  summary = null; curRun = null; testedCode = null; lastAttempt = null;
  $('resultTools').hidden = true; $('copyResult').disabled = true; $('progressNote').hidden = true; $('resultCopyNote').textContent = '';
  runFocus = document.activeElement;
  $('inspect').hidden = true; $('emptyInspect').hidden = true; renderEmptyCard(); setBusy(true);
  setFeedback('loading', '…', demo ? '正在准备错误示范' : '正在运行全部场景', `测试 ${TOTAL_RUNS} 组，每组两次寄送请求，请稍候。`, '运行中');
  const res = await runInWorker(code); setBusy(false);
  if (!res || !res.ok) {
    const message = res?.kind === 'timeout' ? '代码 6 秒内没有跑完。检查死循环或没有返回的 Promise；不要用 setTimeout。'
      : res?.kind === 'compile' ? '代码有语法错误：' + res.message
      : res?.kind === 'worker' ? '独立模拟器未能启动，请刷新页面重试。' + (res.message || '')
      : '运行出错：' + (res?.message || '没有收到测试结果');
    setFeedback('bad', '—', '这次运行未能完成', message, '没有成绩');
    setStatus('代码保留在左侧，修正后可重新运行。'); $('emptyInspect').hidden = false;
    lastAttempt = { code, error: message }; revealResult(); return;
  }
  summary = res.summary; testedCode = code; lastAttempt = { code, summary }; renderOverview();
  if (!demo) {
    updateProgress(summary);
    let n = 1, best = summary.score;
    try {
      n = (Number(localStorage.getItem(KEY_RUNS)) || 0) + 1;
      best = Math.max(Number(localStorage.getItem(KEY_BEST)) || 0, summary.score);
      localStorage.setItem(KEY_RUNS, String(n)); localStorage.setItem(KEY_BEST, String(best));
    } catch { /* 存储受限不影响运行 */ }
    renderCard(n, best);
  }
  const first = SCENARIOS.find((s) => summary.byScenario[s.id].failed) || SCENARIOS.find((s) => summary.byScenario[s.id].correct < summary.byScenario[s.id].total) || SCENARIOS[0];
  selectScenario(first.id); revealResult();
}
$('runBtn').addEventListener('click', () => run());
$('demoBtn').addEventListener('click', () => run(true));

/* ---------------- 查看场景、证据与提示 ---------------- */
function selectScenario(id) {
  if (!summary) return;
  const select = $('scenarioSelect'); select.innerHTML = '';
  for (const s of SCENARIOS) {
    const st = summary.byScenario[s.id], option = document.createElement('option'); option.value = s.id;
    option.textContent = `${s.no} ${s.name} · ${st.failed ? st.failed + ' 组未通过' : st.correct < st.total ? '底线通过，可继续优化' : st.total + '/' + st.total + ' 通过'}`;
    select.appendChild(option);
  }
  select.value = id;
  const runs = summary.runs.filter((r) => r.scenario === id);
  showRun(runs.find((r) => r.failed) || runs.find((r) => !r.correct) || runs[0]);
}
$('scenarioSelect').addEventListener('change', (e) => selectScenario(e.target.value));
function describeRun(r) {
  const reasons = [];
  if (r.gates.scope) reasons.push('尝试读取跨租户或跨用户记忆，已被工具拒绝；仍违反底线');
  if (r.gates.pollution) reasons.push('尝试将非本轮权威确认的内容写入长期记忆');
  if (r.gates.wrong) reasons.push('寄送地址错误，或选用来源没有有效证据');
  if (r.gates.aborted) reasons.push('请求未正常收尾：' + r.stateReason);
  if (reasons.length) return reasons.join('；');
  if (!r.memory?.healthy) return '安全底线通过，但长期记忆未治理好：只 query 并寄对不够，还要 remember 纠正';
  if (!r.correct) return r.expected === 'WAITING_HUMAN' ? '安全底线通过，但本组两轮应交人工核实冲突' : '安全底线通过，但本可安全寄送的两轮请求未全部完成';
  if (r.scenario === 'temporary') return '本次用了临时地址，下次回到长期地址，临时信息没有写入长期记忆';
  if (r.scenario === 'happy') return '有效记忆正确复用，两次寄送合适，长期记忆保持健康';
  if (r.scenario === 'scope') return '隔离他人候选，只使用本人有效记忆，两次寄送合适';
  return r.expected === 'WAITING_HUMAN' ? '两轮均查不清冲突，正确转人工，保留记忆待核实' : '错误记忆已用权威证据纠正，下一次新会话也处理合适';
}
function showRun(r) {
  if (!r) return;
  const restoreFocus = $('dots').contains(document.activeElement);
  stopPlayback(); curRun = r; $('inspect').hidden = false; $('emptyInspect').hidden = true;
  $('caseFinding').textContent = describeRun(r); $('caseFinding').className = 'case-finding ' + (r.failed ? 'bad' : r.correct ? 'ok' : 'wait');
  $('runInfo').textContent = `${demo ? '起始代码示范 · ' : ''}第 ${r.index + 1} 组 · ${r.failed ? '未通过 · 模拟终态：' : ''}${STATE_LABEL[r.state]}`;
  $('caseMeta').textContent = `首轮请求 ${r.request.id} · tenant ${r.request.tenantId} / user ${r.request.userId} · 资料版本 ${r.request.profileRevision} · 业务时间 ${r.request.at}（Unix 秒） · 种子 ${r.seed} · 加权业务成本 ${r.businessCalls} / 多余 ${r.extraCalls} · 模拟结束 ${r.endAt}s`;
  $('taskSub').textContent = `客户 ${r.request.userId} · 两轮请求`;
  $('memoryRecords').textContent = JSON.stringify(memorySnapshot(r), null, 2);
  $('dots').innerHTML = '';
  for (const x of summary.runs.filter((x) => x.scenario === r.scenario)) {
    const b = document.createElement('button'); b.type = 'button'; b.textContent = x.index + 1;
    b.className = `dot ${x.failed ? 'bad' : x.correct ? 'ok' : 'wait'}${x === r ? ' on' : ''}`;
    b.setAttribute('aria-label', `第 ${x.index + 1} 组，${x.failed ? '未通过' : x.correct ? '通过' : '可以更好'}，${STATE_LABEL[x.state]}`);
    b.setAttribute('aria-pressed', String(x === r)); b.addEventListener('click', () => showRun(x)); $('dots').appendChild(b);
  }
  renderKeyEvents(r); renderFullLog(r); resetHints(r); showFinalStage(r);
  if (restoreFocus) $('dots').querySelector('[aria-pressed="true"]').focus({ preventScroll: true });
}
const fmtT = (t) => Number(t).toFixed(1);
function renderKeyEvents(r) {
  const candidates = r.trace.map((ev, index) => ({ ev, index, priority: ev.phase === 'GATE' && ev.chip === 'bad' ? 5 : ev.anim?.type === 'sent' && !ev.anim.ok ? 5 : ['remember', 'human', 'sent'].includes(ev.anim?.type) ? 4 : ev.anim?.type === 'query' ? 3 : ev.anim?.type === 'round' ? 2 : 0 }));
  const picks = candidates.filter((x) => x.priority).sort((a, b) => b.priority - a.priority || a.index - b.index).slice(0, 6).sort((a, b) => a.index - b.index);
  $('keyEvents').innerHTML = '';
  for (const { ev } of picks) {
    const li = document.createElement('li'); li.className = ev.chip === 'bad' ? 'bad' : '';
    li.innerHTML = `<span class="time">${fmtT(ev.t)}s</span><span>${esc(ev.text)}${ev.world ? '<span class="source"> · 实际状态</span>' : ''}</span>`;
    $('keyEvents').appendChild(li);
  }
}
const PHASES = { PREPARE: '准备', MODEL: '模型', ACT: '调用', WORLD: '实际', OBSERVE: '回执', HARNESS: '判断', RESTART: '恢复', HUMAN: '人工', DONE: '完成', GATE: '评分' };
function renderFullLog(r) {
  $('log').innerHTML = '';
  for (const ev of r.trace) {
    const d = document.createElement('div');
    if (ev.phase === 'SEP') { d.className = 'row sep'; d.textContent = ev.text; }
    else {
      d.className = 'row' + (ev.world ? ' world' : '') + (ev.phase === 'GATE' ? ' gate' : '');
      d.innerHTML = `<span class="t">${ev.phase === 'GATE' ? '' : fmtT(ev.t)}</span><span class="ph">${esc(PHASES[ev.phase] || ev.phase)}</span><span class="msg">${esc(ev.text)}</span>`;
      if (ev.world) d.title = '实际执行状态，玩家代码不能直接读取这一行';
    }
    $('log').appendChild(d);
  }
  $('log').scrollTop = 0; $('traceCount').textContent = `${r.trace.length} 条`;
}
const HINTS = [
  '<p>相关度不是可信度。先在索引 metadata 中同时匹配 <code>tenantId</code> 和 <code>userId</code>，再读取正文。不要先 readMemory 再筛；被工具拒绝的跨域读取也算违规。</p>',
  '<p>有效长期记忆必须来自 <code>profile</code>，资料版本一致，并满足 <code>verifiedAt &lt;= request.at &lt; validUntil</code>。刚到过期边界就已失效，未来验证时间也不可信；这里用绝对业务时间，不是 now()。</p>',
  '<p>本次已认证的 <code>request.override</code> 优先，且只属于当前 requestId。可以用它寄这一次，但不要 remember；下次没有 override，应回到长期地址。</p>',
  '<p>两条本人记忆 metadata 都有效，也可能地址冲突。读取后若不一致，用 <code>queryProfile</code> 核对，不要选第一条或最新一条；unknown 时交人工，不能猜。</p>',
  '<p>查到正确地址，不等于修好长期记忆。过期或可确认的冲突，要把本轮 <code>queryProfile</code> 返回的真实 confirmed 证据交给 <code>remember</code>，下一轮才能复用。临时信息和模型推测不能保存。</p>',
  '<p><code>canComplete</code> 是全新实例，tools 为 null。用最新的 selection / evidence 核对所选地址与 sourceId、作用域、版本和时效；模型说 done 只是申请。onRecall 的快照不会随工具调用自动刷新。</p>',
];
let hintOrder = [], hintCount = 1;
function resetHints(r) {
  const first = r.gates.scope ? 0 : r.gates.pollution || (!r.memory?.healthy && !r.failed) ? 4 : r.scenario === 'temporary' ? 2 : r.scenario === 'conflict' ? 3 : r.scenario === 'stale' ? 1 : r.gates.wrong ? 5 : 0;
  hintOrder = [first, ...HINTS.map((_, i) => i).filter((i) => i !== first)]; hintCount = 1;
  $('hintHelp').open = false; $('hintLabel').textContent = SCENARIO_NAMES[r.scenario]; renderHints();
}
function renderHints() {
  $('hintText').innerHTML = hintOrder.slice(0, hintCount).map((i) => HINTS[i]).join('');
  $('hintProgress').textContent = `${hintCount} / ${HINTS.length} 条`; $('nextHint').disabled = hintCount === HINTS.length;
}
$('nextHint').addEventListener('click', () => { hintCount = Math.min(HINTS.length, hintCount + 1); renderHints(); });

/* ---------------- 两次寄送与长期记忆对照 ---------------- */
// 结果对象仅用于排错。只展示当前用户记录，兼容记录 id / sourceId 两种键名。
function ownRecords(records, request) {
  return (Array.isArray(records) ? records : []).filter((m) => m && m.tenantId === request.tenantId && m.userId === request.userId);
}
function memorySnapshot(r) {
  return { required: r.memory?.required, healthy: r.memory?.healthy, consistent: r.memory?.consistent,
    initial: ownRecords(r.memory?.initial, r.request), final: ownRecords(r.memory?.final, r.request), history: ownRecords(r.memory?.history, r.request) };
}
function memoryText(records) {
  return records.length ? records.map((m) => `${m.address ?? '无地址'}\n${m.sourceId ?? m.id ?? '来源未标识'}${m.source ? ' · ' + m.source : ''}`).join('\n\n') : '无长期地址';
}
function roundOf(r, number) { return (r.rounds || []).find((x) => x.number === number); }
function sourceText(round) {
  if (!round?.selection) return '来源：未选用';
  const id = round.selection.sourceId || '未提供 sourceId';
  return `选用来源：${round.sourceLabel || '见证据'}\n${id}`;
}
function sentInRound(r, number) {
  let current = 1, sent = null;
  for (const ev of r.trace) {
    if (ev.anim?.type === 'round') current = ev.anim.number;
    if (current === number && ev.anim?.type === 'sent') sent = ev.anim;
  }
  return sent;
}
function stopPlayback() { token++; playing = false; $('replay').textContent = '播放过程'; }
function resetStage() {
  stageRound = 1; stageRounds = { 1: {}, 2: {} };
  stageMemory = memorySnapshot(curRun).initial;
  $('memory-before').textContent = memoryText(stageMemory);
  $('memory-after-label').textContent = '回放此刻';
  $('memory-health').textContent = '回放中 · 尚未写入';
  $('memory-panel').className = 'memory-panel';
  $('memory-note').textContent = '初始与当前长期地址对照，不含他人正文。';
  $('instanceState').textContent = '每轮两个 hook 都是新实例，仅工具保存的长期记忆可复用。';
  updateStage();
}
function updateStage() {
  for (const number of [1, 2]) {
    const view = stageRounds[number] || {};
    $(`round-${number}`).className = 'memory-panel' + (view.kind ? ' ' + view.kind : '');
    $(`actual-${number}`).textContent = view.actual || '尚未开始';
    $(`selection-${number}`).textContent = view.selection ? '选用地址：' + view.selection : '尚未选用地址';
    $(`source-${number}`).textContent = view.source || '来源：—';
    $(`expected-${number}`).textContent = view.note || '';
  }
  $('memory-after').textContent = memoryText(stageMemory);
}
function applyEvent(ev) {
  const a = ev.anim;
  if (!a) return;
  if (a.type === 'round') {
    if (![1, 2].includes(a.number)) return;
    stageRound = a.number;
    stageRounds[stageRound].actual = '新会话 · 尚未寄送';
    $('instanceState').textContent = `第 ${stageRound} 轮 · 新实例读取候选记忆；不会继承上一轮局部变量。`;
  }
  const view = stageRounds[stageRound];
  if (a.type === 'read') view.note = `读到证据：${a.address}\n来源：${a.sourceId}（读取不代表选用）`;
  if (a.type === 'query') view.note = a.status === 'confirmed' ? `资料核验 confirmed：${a.address}` : '资料核验 unknown：不能据此猜地址';
  if (a.type === 'remember') {
    // 事件只承诺 address，不推测新的持久 sourceId；最终状态使用 memory.final。
    stageMemory = [{ address: a.address, sourceId: '已保存权威证据 · 完整来源见最终快照' }];
    $('memory-health').textContent = '已写入 · 保留历史审计';
    $('memory-panel').className = 'memory-panel done';
    $('memory-note').textContent = '本轮权威证据已保存，下一次会话可读取。';
  }
  if (a.type === 'select') {
    view.selection = a.address; view.actual = '已选地址 · 尚未寄送';
    view.source = '选用来源：事件未携带 sourceId，见最终快照';
  }
  if (a.type === 'sent') {
    view.actual = `已寄出：${a.address}${a.ok ? '' : '（地址或依据不合格）'}`;
    view.kind = a.ok ? 'done' : 'bad'; view.source = sourceText(roundOf(curRun, stageRound));
  }
  if (a.type === 'human') {
    view.actual = '转人工 · 未寄出'; view.kind = 'wait'; view.note = a.text || '等待人工核实';
  }
  updateStage();
}
function showFinalStage(r) {
  resetStage();
  for (const number of [1, 2]) {
    const round = roundOf(r, number), sent = sentInRound(r, number);
    const view = stageRounds[number];
    if (!round) { view.actual = '本轮未开始'; view.kind = 'wait'; continue; }
    view.selection = round.selection?.address;
    view.source = sourceText(round);
    if (sent || round.state === 'COMPLETED') {
      view.actual = `已寄出：${sent?.address ?? round.selection?.address ?? '未提供地址'}${sent?.ok === false ? '（地址或依据不合格）' : ''}`;
      view.kind = sent?.ok === false ? 'bad' : 'done';
    } else {
      view.actual = round.state === 'WAITING_HUMAN' ? '转人工 · 未寄出' : '未正常收尾 · 未寄出';
      view.kind = round.state === 'WAITING_HUMAN' ? 'wait' : 'bad';
    }
    view.note = (round.expected === 'WAITING_HUMAN' ? '预期：交人工核实'
      : round.expectedAddress ? '预期地址：' + round.expectedAddress : '预期：交人工核实')
      + (round.stateReason ? '\n' + round.stateReason : '');
  }
  const memory = memorySnapshot(r);
  const changed = JSON.stringify(memory.initial) !== JSON.stringify(memory.final);
  stageMemory = memory.final;
  $('memory-after-label').textContent = '运行后';
  $('memory-panel').className = 'memory-panel' + (memory.healthy && memory.consistent ? ' done' : ' wait');
  $('memory-health').textContent = r.expected === 'WAITING_HUMAN' && !changed ? '已保留 · 冲突待人工核实'
    : !memory.healthy ? '待纠正 · 长期记忆仍不健康'
    : changed ? (memory.required ? '已纠正 · 长期记忆健康' : '已更新 · 长期记忆健康') : '已保留 · 长期记忆健康';
  if (r.gates.pollution) {
    $('memory-panel').className = 'memory-panel bad';
    $('memory-health').textContent = '污染写入已被拒绝 · 仍违规';
  }
  if (r.scenario === 'temporary') {
    const temporary = r.request.override?.address;
    const stored = temporary && memory.final.some((m) => m.address === temporary);
    $('memory-note').textContent = stored ? '临时地址出现在长期记忆中，请检查写入边界。' : '本次临时地址未写入长期；下次无 override，应回到长期地址。';
  } else if (r.expected === 'WAITING_HUMAN') $('memory-note').textContent = '权威来源仍 unknown；保留冲突证据，不擅自选值或覆盖。';
  else $('memory-note').textContent = memory.healthy ? '下次新会话使用独立实例；对照左侧来源，确认如何复用。' : '只查到正确地址不够：需要用真实 confirmed 证据纠正长期记忆。';
  updateStage();
  $('instanceState').textContent = '两轮与记忆快照仅供排错，不是 ctx 可读数据。' + (r.failed ? '本组违反底线。' : r.correct && memory.healthy ? '本组处理合适。' : '本组仅安全底线通过。');
  $('playState').textContent = '当前显示最终状态';
}
async function replay(r) {
  stopPlayback();
  if (reducedMotion.matches) { showFinalStage(r); $('playState').textContent = '已按减少动态效果偏好展示最终状态'; return; }
  const my = token; playing = true; $('replay').textContent = '停止播放'; resetStage();
  for (const ev of r.trace) {
    if (my !== token) return;
    if (!ev.anim || ev.phase === 'GATE') continue;
    applyEvent(ev); $('playState').textContent = `${fmtT(ev.t)}s · ${ev.text}`;
    await new Promise((resolve) => setTimeout(resolve, 650 / speed));
  }
  if (my !== token) return;
  stopPlayback(); showFinalStage(r); $('playState').textContent = '回放结束 · 当前显示最终状态';
}
$('replay').addEventListener('click', () => { if (!curRun) return; if (playing) { stopPlayback(); showFinalStage(curRun); } else replay(curRun); });
$('speed').addEventListener('click', () => { speed = speed === 1 ? 2 : speed === 2 ? 4 : 1; $('speed').textContent = speed + '×'; $('speed').setAttribute('aria-label', `回放速度 ${speed} 倍`); });

/* ---------------- 分享成绩 ---------------- */
const QUOTES = {
  scope: ['检索和 Context 构建必须先确定调用身份、租户、项目和任务，再查询允许作用域。', '用作用域和元数据建立资产边界'],
  pollution: ['当新信息与旧 Memory 冲突时，Harness 不应静默覆盖。', 'Memory 的写入与使用'],
  wrong: ['被检索到并不代表可以直接写入 Context', 'Memory 的写入与使用'],
  aborted: ['它是经过环境验证的事实，还是模型推测或用户临时表达？', 'Memory 的写入与使用'],
};
function failReasons(s) {
  return Object.entries(GATE_NAMES).filter(([key]) => s.failedBy[key]?.length).map(([key, text]) => `${s.failedBy[key].map((id) => SCENARIOS.find((x) => x.id === id)?.no || id).join('')} ${text}`);
}
function renderCard(n, best) {
  const s = summary, complete = verdict(s) === '本关通过';
  const top = '<div class="card-top"><span class="b"><img src="logo.svg" alt="">AI Agent Handbook · 工程闯关</span><span>第 03 关</span></div>';
  const sub = `<p class="sub">第 ${n} 次运行 · 5 个场景 ${s.stats.runs} 组，每组 2 轮 · 最好成绩 ${best}</p>`;
  const foot = `<div class="card-foot"><span>${new Date().toLocaleDateString('sv-SE')} · 本机模拟测试</span><span>github.com/aliyun/ai-agent-handbook</span></div>`;
  let body;
  if (!s.passed) {
    const pits = Object.entries(QUOTES).filter(([key]) => s.failedBy[key]?.length).map(([key, [q, src]]) => `<li><div>${esc(GATE_NAMES[key])} · ${esc(s.failedBy[key].map((id) => SCENARIO_NAMES[id]).join('、'))}</div><blockquote>${esc(q)}<cite><a href="${chapterUrl(src)}" target="_blank" rel="noopener">第 5 章 · ${esc(src)}</a></cite></blockquote></li>`);
    body = `<div class="stamp bad">未通过</div><h3>${TITLE}</h3>${sub}<div class="score"><div class="n">0<small>/100</small></div><div class="verdict bad">有测试违反底线<span>${esc(failReasons(s).join(' · '))}</span></div></div><p class="parts">${appropriate(s)}/${s.stats.runs} 组处理合适（两轮请求与记忆治理均符合要求）；仍有测试违反底线，本次总分为 0。先修复下面的问题，再争取更高分。</p><ul class="pits">${pits.join('')}</ul>`;
  } else {
    body = `<div class="stamp">${complete ? '通过' : '底线通过'}</div><h3>${TITLE}</h3>${sub}<div class="score"><div class="n">${s.score}<small>/100</small></div><div class="verdict ${complete ? 'ok' : 'wait'}">${verdict(s)}<span>读取不越界，写入有来源，寄送有依据。</span></div></div><div class="stats"><div><b>0</b><span>跨域读取</span></div><div><b>0</b><span>错误长期写入</span></div><div><b>${s.stats.avgExtra}</b><span>每组多余业务成本</span></div><div><b>${appropriate(s)}/${s.stats.runs}</b><span>处理合适</span></div></div><table class="score-table card-breakdown"><thead><tr><th scope="col">评分项</th><th scope="col">本次得分</th></tr></thead><tbody><tr><th scope="row">记忆安全底线</th><td>${s.parts.base} / 60</td></tr><tr><th scope="row">处理是否合适</th><td>${s.parts.outcome} / 30</td></tr><tr><th scope="row">调用是否精简</th><td>${s.parts.calls} / 10</td></tr></tbody></table><p class="better">${esc(improvementText(s))}</p><p class="motto">“被检索到并不代表可以直接写入 Context”</p><p class="used">原文与延伸：<a href="${chapterUrl()}" target="_blank" rel="noopener">第 5 章 · Memory 的写入与使用</a> · <a href="${chapterUrl('用作用域和元数据建立资产边界')}" target="_blank" rel="noopener">资产边界</a></p>`;
  }
  $('card').className = 'card'; $('card').innerHTML = top + body + foot; $('cardActions').hidden = false; $('copied').textContent = '';
}
function renderEmptyCard() {
  $('card').className = 'card empty'; $('card').innerHTML = '<div class="big">还没有成绩</div>运行全部场景后，可以在这里分享成绩。'; $('cardActions').hidden = true;
}
function pageUrl() { return location.href.split('#')[0]; }
$('copyBtn').addEventListener('click', async () => {
  if (!summary || demo || ta.value !== testedCode) return;
  const s = summary, head = `AI Agent Handbook「Agent 工程闯关」第 03 关「${TITLE}」`;
  const text = s.passed ? `我在${head}${verdict(s)}，拿到 ${s.score}/100：${s.stats.runs} 组守住安全底线，${appropriate(s)}/${s.stats.runs} 组处理合适（两轮请求与记忆治理均符合要求）。记错的地址，你的 Agent 能改好并在下次复用吗？来试试：${pageUrl()}` : `我在${head}未通过，${s.score}/100，${appropriate(s)}/${s.stats.runs} 组处理合适：${failReasons(s).join('，')}。记错的地址，你的 Agent 能改好并在下次复用吗？来试试：${pageUrl()}`;
  try { await navigator.clipboard.writeText(text); $('copied').textContent = '已复制，可以粘贴分享。'; } catch { window.prompt('复制下面这段文字：', text); }
});

/* ---------------- 完整的复制给 Agent 任务包 ---------------- */
function inlineText(node) {
  if (node.nodeType === Node.TEXT_NODE) return node.textContent.replace(/\s+/g, ' ');
  if (node.nodeType !== Node.ELEMENT_NODE) return '';
  if (node.tagName === 'BR') return '\n';
  const inner = [...node.childNodes].map(inlineText).join('');
  if (node.tagName === 'CODE') return '`' + inner + '`';
  if (node.tagName === 'A') return `${inner.replace(/\s*↗$/, '')}（${node.href}）`;
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
        const sum = node.querySelector(':scope>summary'); if (sum) out.push(`### ${inlineText(sum).trim()}`);
        for (const child of node.children) if (child !== sum) walk(child.tagName === 'DIV' && !child.classList.contains('formula') ? child : { children: [child] });
      } else if (node.classList?.contains('formula')) out.push('```\n' + inlineText(node).split('\n').map((l) => l.trim()).join('\n') + '\n```');
      else if (tag === 'DIV') walk(node);
    }
  };
  walk(root); return out.filter(Boolean).join('\n\n');
}
function apiText() {
  return [...$('apiBody').querySelectorAll('dt')].map((dt) => `- \`${dt.textContent.trim()}\`：${inlineText(dt.nextElementSibling).trim()}`).concat([...$('apiBody').querySelectorAll(':scope>p')].map((p) => inlineText(p).trim())).join('\n\n');
}
function agentPackage() {
  return [
    `# AI Agent Handbook「Agent 工程闯关」第 03 关：${TITLE}\n\n页面：${pageUrl()}`,
    '## 请你帮我做的事',
    `请阅读下面的闯关说明、接口速查和当前代码，修改 harness.js 里的 \`onRecall\` 和 \`canComplete\` 两个函数，让全部 ${TOTAL_RUNS} 组、每组两轮请求守住底线，处理合适且长期记忆健康，并尽量精简业务成本。`,
    '- 只使用接口速查里列出的字段和工具；不要用 setTimeout，不要引入模块。\n- 保留两个函数的 export 写法。直接返回完整的 harness.js 代码，我会整段粘贴回编辑器替换。\n- 每轮的两个 hook 都是全新实例，长期 memory 只能通过工具保存。canComplete 使用最新 selection / evidence，tools 为 null。\n- 代码由我在网页里运行。若附有运行诊断，请先确认它对应哪份代码，再结合失败组和日志修复；rounds / memory 和实际状态日志只供排错，不是 ctx 可读字段。\n- 只 query 并寄对、不 remember 纠正错误长期记忆，不能算本关通过。',
    '# 闯关说明', blockText($('rulesContent')), '# 接口速查', apiText(), '# 生产边界', blockText($('productionHelp').querySelector('.production-content')),
    lastAttempt && !demo && lastAttempt.code !== ta.value ? '# 当前代码（未测试，harness.js）' : '# 当前代码（harness.js）',
    '```js\n' + ta.value.replace(/\s+$/, '') + '\n```', resultText(),
  ].filter(Boolean).join('\n\n');
}
const COPIED_HINT = '已复制闯关说明、接口速查和代码；如有本次测试，也附上诊断。拿到 Agent 改好的代码后，点进编辑器按 ⌘ / Ctrl + A 全选，再粘贴即可替换。';
let copyTimers = {};
async function copyPackage(buttonId, statusId, editor = false) {
  try { await navigator.clipboard.writeText(agentPackage()); } catch { window.prompt('复制下面这段文字：', agentPackage()); return; }
  if (editor) setStatus(COPIED_HINT, 'ok'); else $(statusId).textContent = COPIED_HINT;
  $(buttonId).textContent = '已复制'; clearTimeout(copyTimers[buttonId]);
  copyTimers[buttonId] = setTimeout(() => { $(buttonId).textContent = '复制给 Agent'; }, 2400);
}
$('copyRules').addEventListener('click', () => copyPackage('copyRules', 'rulesCopied'));
$('copyEditor').addEventListener('click', () => copyPackage('copyEditor', 'status', true));
for (const [button, dialog] of [['rulesBtn', 'rulesDialog'], ['shareBtn', 'shareDialog']]) $(button).addEventListener('click', () => { stopPlayback(); if (curRun) showFinalStage(curRun); $(dialog).showModal(); if (dialog === 'rulesDialog') $(dialog).scrollTop = 0; });
for (const button of document.querySelectorAll('[data-close]')) button.addEventListener('click', () => $(button.dataset.close).close());

/* ---------------- 首次进入 ---------------- */
let saved = null;
try { saved = localStorage.getItem(KEY_CODE); } catch { /* 存储受限仍可编辑 */ }
ta.value = saved ?? STARTER; renderEditor(); renderEmptyCard(); ta.readOnly = false;
for (const button of document.querySelectorAll('[data-boot]')) button.disabled = false;
setStatus(saved !== null ? '已载入上次的代码。修改后运行全部场景。' : '修改后点击“运行全部场景”。');
})();
