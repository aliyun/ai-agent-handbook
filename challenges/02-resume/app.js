// 第 02 关：编辑器与反馈沿用第一关，任务接力图同时呈现实际执行与持久进度。
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
const CH4 = new URL('../../build/chapter-04.html', location.href).href;
const TITLE = '任务中断，如何优化？';
const TOTAL_RUNS = 22;
const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const STATE_LABEL = { COMPLETED: '已完成', WAITING_HUMAN: '转人工', ABORTED: '未正常收尾' };
const SCENARIO_NAMES = Object.fromEntries(SCENARIOS.map((s) => [s.id, s.name]));
const STEP_NAMES = { draft: '生成报告', publish: '发布报告', notify: '通知团队' };
let summary = null, demo = false, testedCode = null, curRun = null, running = false;
let token = 0, playing = false, speed = 1;
let stageCounts = {}, stageVersions = {}, stageSaved = [], stageRevision = null;
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
  const stale = !!summary && !demo && testedCode !== ta.value;
  $('staleNote').hidden = !stale;
  $('feedback').classList.toggle('stale', stale);
  $('shareBtn').disabled = !summary || demo || stale || running;
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
function improvementText(s) {
  const handedOff = s.runs.filter((r) => r.expected === 'COMPLETED' && r.state !== 'COMPLETED').length;
  if (handedOff) return `${handedOff} 组本可自动恢复，却转了人工；可以继续优化。`;
  if (s.stats.avgExtra > 0) return `平均每组还有 ${s.stats.avgExtra} 次多余的执行或查询，可以继续精简。`;
  return '能恢复的都已完成，需要人工的也交代清楚，没有多余调用。';
}
function renderOverview() {
  if (demo) setFeedback('wait', '示范', '从头重做，反而重复执行', '起始代码不看已保存的进度，重新生成和发布了报告。这是示范，左侧代码没有变化。', '不计成绩');
  else if (summary.passed) setFeedback('ok', summary.score, '本关通过', `全部 ${summary.stats.runs} 组都没有重复执行、越权继续或无证据报完成，任务有明确收尾。${improvementText(summary)}`, '/ 100');
  else {
    const first = summary.runs.find((r) => r.failed);
    const reason = first.gates.duplicate ? '重复执行已完成步骤' : first.gates.unsafe ? '未经确认就继续执行' : first.gates.falseClaim ? '步骤没确认就说完成' : '任务没有正常收尾';
    setFeedback('bad', 0, `未通过：${reason}`, `${summary.runs.filter((r) => r.failed).length}/${summary.stats.runs} 组违反底线，本次总分为 0。下面先看一个失败场景。`, '/ 100');
  }
  markStale();
}
async function run(isDemo = false) {
  if (running) return;
  stopPlayback(); demo = isDemo === true;
  const code = demo ? STARTER : ta.value;
  summary = null; curRun = null; testedCode = null;
  $('inspect').hidden = true; $('emptyInspect').hidden = true; renderEmptyCard(); setBusy(true);
  setFeedback('loading', '…', demo ? '正在准备错误示范' : '正在运行全部场景', `用公开考题测试 ${TOTAL_RUNS} 组，请稍候。`, '运行中');
  const res = await runInWorker(code); setBusy(false);
  if (!res || !res.ok) {
    const message = res?.kind === 'timeout' ? '代码 6 秒内没有跑完。检查死循环或没有返回的 Promise；不要用 setTimeout。'
      : res?.kind === 'compile' ? '代码有语法错误：' + res.message
      : res?.kind === 'worker' ? '独立模拟器未能启动，请刷新页面重试。' + (res.message || '')
      : '运行出错：' + (res?.message || '没有收到测试结果');
    setFeedback('bad', '—', '这次运行未能完成', message, '没有成绩');
    setStatus('代码保留在左侧，修正后可重新运行。'); $('emptyInspect').hidden = false; return;
  }
  summary = res.summary; testedCode = code; renderOverview();
  if (!demo) {
    let n = 1, best = summary.score;
    try {
      n = (Number(localStorage.getItem(KEY_RUNS)) || 0) + 1;
      best = Math.max(Number(localStorage.getItem(KEY_BEST)) || 0, summary.score);
      localStorage.setItem(KEY_RUNS, String(n)); localStorage.setItem(KEY_BEST, String(best));
    } catch { /* 存储受限不影响运行 */ }
    renderCard(n, best);
  }
  const first = SCENARIOS.find((s) => summary.byScenario[s.id].failed) || SCENARIOS.find((s) => summary.byScenario[s.id].correct < summary.byScenario[s.id].total) || SCENARIOS[0];
  selectScenario(first.id); markStale();
}
$('runBtn').addEventListener('click', () => run());
$('demoBtn').addEventListener('click', () => run(true));

/* ---------------- 查看场景、证据与提示 ---------------- */
function selectScenario(id) {
  if (!summary) return;
  const select = $('scenarioSelect'); select.innerHTML = '';
  for (const s of SCENARIOS) {
    const st = summary.byScenario[s.id], option = document.createElement('option'); option.value = s.id;
    option.textContent = `${s.no} ${s.name} · ${st.failed ? st.failed + ' 组未通过' : st.correct < st.total ? '全部过关，可继续优化' : st.total + '/' + st.total + ' 通过'}`;
    select.appendChild(option);
  }
  select.value = id;
  const runs = summary.runs.filter((r) => r.scenario === id);
  showRun(runs.find((r) => r.failed) || runs.find((r) => !r.correct) || runs[0]);
}
$('scenarioSelect').addEventListener('change', (e) => selectScenario(e.target.value));
function describeRun(r) {
  const reasons = [];
  if (r.gates.duplicate) reasons.push('重复执行了已完成步骤');
  if (r.gates.unsafe) reasons.push('越权、跳步，或没查清上次结果就重做');
  if (r.gates.falseClaim) reasons.push('没有完整、有效的进度凭据，却宣称任务完成');
  if (r.gates.aborted) reasons.push('任务未正常收尾：' + r.stateReason);
  if (reasons.length) return reasons.join('；');
  if (!r.correct) return '守住底线，但这组本可以接着自动完成';
  return r.expected === 'WAITING_HUMAN' ? '正确转人工：当前不具备安全继续的条件' : '从已有进度接着完成，没有漏步骤或重复执行';
}
function showRun(r) {
  if (!r) return;
  const restoreFocus = $('dots').contains(document.activeElement);
  stopPlayback(); curRun = r; $('inspect').hidden = false; $('emptyInspect').hidden = true;
  $('caseFinding').textContent = describeRun(r); $('caseFinding').className = 'case-finding ' + (r.failed ? 'bad' : r.correct ? 'ok' : 'wait');
  $('runInfo').textContent = `${demo ? '起始代码示范 · ' : ''}第 ${r.index + 1} 组 · ${STATE_LABEL[r.state]}`;
  $('caseMeta').textContent = `任务 ${r.task.id} · 版本 ${r.task.revision} · 种子 ${r.seed} · 中断恢复 ${r.restarts} 次 · 业务调用 ${r.businessCalls} 次 · 结束 ${r.endAt}s`;
  $('taskSub').textContent = `${r.task.id} · 版本 ${r.task.revision}`;
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
  const candidates = r.trace.map((ev, index) => ({ ev, index, priority: ev.phase === 'GATE' && ev.chip === 'bad' ? 5 : ['crash', 'restart', 'human'].includes(ev.anim?.type) ? 4 : ev.anim?.type === 'step' && ev.anim.duplicate ? 5 : ['checkpoint', 'inspect', 'done'].includes(ev.anim?.type) ? 3 : 0 }));
  const picks = candidates.filter((x) => x.priority).sort((a, b) => b.priority - a.priority || a.index - b.index).slice(0, 5).sort((a, b) => a.index - b.index);
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
  '<p>恢复不是从头重做。先看 <code>ctx.checkpoint.completed</code>：已保存且属于当前版本的步骤，可以直接接着往后做。</p>',
  '<p>进度里没有，不一定没执行。查看 <code>ctx.attempts</code>；有请求却没有回执时，用 <code>inspectStep</code> 核对。只有明确 <code>not_found</code>，才重新执行；<code>unknown</code> 要交人工。</p>',
  '<p>工具执行与保存进度是两件事。拿到 <code>runStep</code> 或 <code>inspectStep</code> 的成功凭据后，用 <code>saveCheckpoint</code> 保存；不要只放在顶层变量里。</p>',
  '<p>恢复时条件可能变了。检查 <code>ctx.task.publishAllowed</code>，以及进度版本是否匹配 <code>ctx.task.revision</code>。旧的发布授权不能当作新授权。</p>',
  '<p>模型说完成，只是申请。<code>canComplete</code> 要检查当前版本的所有步骤都有成功凭据，而且发布权限仍有效。这个函数也运行在全新实例里。</p>',
];
let hintOrder = [], hintCount = 1;
function resetHints(r) {
  const first = r.gates.unsafe || r.scenario === 'changed' ? 3 : r.gates.falseClaim ? 4 : r.scenario === 'gap' ? 1 : r.scenario === 'repeated' ? 2 : 0;
  hintOrder = [first, ...HINTS.map((_, i) => i).filter((i) => i !== first)]; hintCount = 1;
  $('hintHelp').open = false; $('hintLabel').textContent = SCENARIO_NAMES[r.scenario]; renderHints();
}
function renderHints() {
  $('hintText').innerHTML = hintOrder.slice(0, hintCount).map((i) => HINTS[i]).join('');
  $('hintProgress').textContent = `${hintCount} / ${HINTS.length} 条`; $('nextHint').disabled = hintCount === HINTS.length;
}
$('nextHint').addEventListener('click', () => { hintCount = Math.min(HINTS.length, hintCount + 1); renderHints(); });

/* ---------------- 任务接力图与主动回放 ---------------- */
function stopPlayback() { token++; playing = false; $('replay').textContent = '播放过程'; }
function resetStage() { stageCounts = {}; stageVersions = {}; stageSaved = []; stageRevision = null; $('instanceState').textContent = '任务开始'; updateStage(); }
function updateStage() {
  for (const id of Object.keys(STEP_NAMES)) {
    const count = stageCounts[id] || 0, saved = stageSaved.includes(id), stale = stageRevision !== null && stageRevision !== curRun.task.revision;
    const oldResult = count && stageVersions[id] !== curRun.task.revision;
    $(`step-${id}`).className = 'resume-step' + (count > 1 ? ' bad' : oldResult ? ' old' : count ? ' done' : '');
    $(`actual-${id}`).textContent = count > 1 ? `重复执行 · ${count} 次` : oldResult ? '旧版本已执行' : count ? '已执行' : '未执行';
    $(`saved-${id}`).textContent = saved ? (stale ? '旧版本进度' : '进度已保存') : '进度未保存';
    $(`saved-${id}`).className = 'saved-state' + (saved && !stale ? ' saved' : '');
  }
}
function applyEvent(ev) {
  const a = ev.anim;
  if (!a) return;
  if (a.type === 'step') {
    stageCounts[a.stepId] = (stageCounts[a.stepId] || 0) + 1;
    stageVersions[a.stepId] = a.revision ?? curRun.task.revision;
  }
  if (a.type === 'checkpoint') {
    stageSaved = (a.completed || []).map((x) => typeof x === 'string' ? x : x.stepId);
    stageRevision = a.revision ?? curRun.task.revision;
  }
  if (a.type === 'crash') $('instanceState').textContent = '实例中断 · 内存丢失';
  if (a.type === 'restart') $('instanceState').textContent = '新实例接手 · 读取持久进度';
  if (a.type === 'human') $('instanceState').textContent = '转人工 · ' + a.text;
  if (a.type === 'done') $('instanceState').textContent = a.ok ? '任务完成 · 凭据齐全' : '模型说完成 · 凭据不足';
  updateStage();
}
function showFinalStage(r) {
  resetStage(); for (const ev of r.trace) if (ev.phase !== 'GATE') applyEvent(ev);
  // 终态使用存储快照，避免日志展示把旧版本进度误当成当前版本。
  stageSaved = (r.checkpoint?.completed || []).map((x) => x.stepId); stageRevision = r.checkpoint?.revision ?? null; updateStage();
  $('instanceState').textContent = r.failed ? '未通过 · ' + describeRun(r)
    : STATE_LABEL[r.state] + (r.state === 'COMPLETED' ? ' · 进度与执行结果已核对' : ' · ' + (r.stateReason || '等待人工继续'));
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
  duplicate: ['有副作用的行动在重试前必须先回答“上一次究竟有没有发生”。', '4.6.1 针对失败类型选择恢复策略'],
  unsafe: ['恢复时重新检查目标、外部条件、工具是否实际执行、权限是否仍有效、工作区是否变化以及剩余预算。', '4.4.1 让任务脱离当前连接持续存在'],
  falseClaim: ['模型只能提出完成申请，Harness 才能提交完成状态。', '4.6.2 让完成由证据决定'],
  aborted: ['预算耗尽时，则应产生明确终态与未完成清单，而不是悄然截断。', '4.1.2 用权威状态驱动任务'],
};
function failReasons(s) {
  return [['duplicate', '重复执行'], ['unsafe', '未经确认继续'], ['falseClaim', '无有效凭据报完成'], ['aborted', '任务未正常收尾']].filter(([key]) => s.failedBy[key].length).map(([key, text]) => `${s.failedBy[key].map((id) => SCENARIOS.find((x) => x.id === id).no).join('')} ${text}`);
}
function renderCard(n, best) {
  const s = summary;
  const top = '<div class="card-top"><span class="b"><img src="logo.svg" alt="">AI Agent Handbook · 工程闯关</span><span>第 02 关</span></div>';
  const sub = `<p class="sub">第 ${n} 次运行 · 5 个场景 ${s.stats.runs} 组 · 最好成绩 ${best}</p>`;
  const foot = `<div class="card-foot"><span>公开种子 ${PUBLIC_SEED} · ${new Date().toLocaleDateString('sv-SE')}</span><span>github.com/aliyun/ai-agent-handbook</span></div>`;
  let body;
  if (!s.passed) {
    const pits = Object.entries(QUOTES).filter(([key]) => s.failedBy[key].length).map(([key, [q, src]]) => `<li><div>${esc(failReasons(s).find((text) => text.includes({ duplicate: '重复执行', unsafe: '未经', falseClaim: '凭据', aborted: '收尾' }[key])))}</div><blockquote>${esc(q)}<cite><a href="${CH4}" target="_blank" rel="noopener">第 4 章 · ${esc(src)}</a></cite></blockquote></li>`);
    body = `<div class="stamp bad">未通过</div><h3>${TITLE}</h3>${sub}<div class="score"><div class="n">0<small>/100</small></div><div class="verdict bad">有测试违反底线<span>${esc(failReasons(s).join(' · '))}</span></div></div><p class="parts">先修复下面的问题，再争取更高分。</p><ul class="pits">${pits.join('')}</ul>`;
  } else {
    body = `<div class="stamp">通过</div><h3>${TITLE}</h3>${sub}<div class="score"><div class="n">${s.score}<small>/100</small></div><div class="verdict ok">本关通过<span>不重复执行，不越权继续，完成有凭据。</span></div></div><div class="stats"><div><b>0</b><span>重复执行</span></div><div><b>0</b><span>越权或错序</span></div><div><b>${s.stats.avgExtra}</b><span>每组多余调用</span></div><div><b>${s.stats.correct}/${s.stats.runs}</b><span>处理合适</span></div></div><table class="score-table card-breakdown"><thead><tr><th scope="col">评分项</th><th scope="col">本次得分</th></tr></thead><tbody><tr><th scope="row">恢复底线</th><td>${s.parts.base} / 60</td></tr><tr><th scope="row">处理是否合适</th><td>${s.parts.outcome} / 30</td></tr><tr><th scope="row">调用是否精简</th><td>${s.parts.calls} / 10</td></tr></tbody></table><p class="better">${esc(improvementText(s))}</p><p class="motto">“恢复不是重来。先核对进度，再接着做。”</p><p class="used">用到的章节：<a href="${CH4}" target="_blank" rel="noopener">4.4.1 任务与连接 · 4.6.1 恢复策略</a></p>`;
  }
  $('card').className = 'card'; $('card').innerHTML = top + body + foot; $('cardActions').hidden = false; $('copied').textContent = '';
}
function renderEmptyCard() {
  $('card').className = 'card empty'; $('card').innerHTML = '<div class="big">还没有成绩</div>运行全部场景后，可以在这里分享成绩。'; $('cardActions').hidden = true;
}
function pageUrl() { return location.href.split('#')[0]; }
$('copyBtn').addEventListener('click', async () => {
  if (!summary || demo || ta.value !== testedCode) return;
  const s = summary, head = `AI Agent Handbook「Agent 工程闯关」第 02 关「${TITLE}」`;
  const text = s.passed ? `我在${head}通过了全部 ${s.stats.runs} 组测试，拿到 ${s.score}/100：不重复执行、不越权继续，完成有凭据。任务中断后，你的 Agent 能接着做吗？来试试：${pageUrl()}` : `我在${head}还没过关：${failReasons(s).join('，')}。任务中断后，你的 Agent 能接着做吗？来试试：${pageUrl()}`;
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
    `# AI Agent Handbook「Agent 工程闯关」第 02 关：${TITLE}\n\n页面：${pageUrl()}`,
    '## 请你帮我做的事',
    `请阅读下面的闯关说明、接口速查和当前代码，修改 harness.js 里的 \`onResume\` 和 \`canComplete\` 两个函数，让全部 ${TOTAL_RUNS} 组测试守住底线，并尽量拿高分。`,
    '- 只使用接口速查里列出的字段和工具；不要用 setTimeout，不要引入模块。\n- 保留两个函数的 export 写法。直接返回完整的 harness.js 代码，我会整段粘贴回编辑器替换。\n- 每次接手都可能是全新进程，完成判定也运行在全新实例。\n- 代码在网页里运行，你看不到结果；我运行后会把页面上的反馈告诉你。',
    '# 闯关说明', blockText($('rulesContent')), '# 接口速查', apiText(), '# 当前代码（harness.js）', '```js\n' + ta.value.replace(/\s+$/, '') + '\n```',
  ].join('\n\n');
}
const COPIED_HINT = '已复制：闯关说明、接口速查和当前代码。拿到 Agent 改好的代码后，点进编辑器按 ⌘ / Ctrl + A 全选，再粘贴即可替换。';
let copyTimers = {};
async function copyPackage(buttonId, statusId, editor = false) {
  try { await navigator.clipboard.writeText(agentPackage()); } catch { window.prompt('复制下面这段文字：', agentPackage()); return; }
  if (editor) setStatus(COPIED_HINT, 'ok'); else $(statusId).textContent = COPIED_HINT;
  $(buttonId).textContent = '已复制 ✓'; clearTimeout(copyTimers[buttonId]);
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
