import { test, expect } from '@playwright/test';
import { REFERENCE } from '../challenges/03-memory/reference.js';

const levelPath = 'challenges/03-memory/';
const storage = 'agent-challenge:03-memory:v1';
const HUMAN = 'export async function onRecall(ctx) { await ctx.tools.askHuman("人工确认地址"); }\nexport function canComplete(ctx) { return false; }';
// Safe for the current delivery, but intentionally never repairs durable memory.
const QUERY_ONLY = `export async function onRecall(ctx) {
  if (ctx.request.override) { await ctx.tools.useAddress(ctx.request.override); return; }
  const receipt = await ctx.tools.queryProfile();
  if (receipt.status !== "confirmed") { await ctx.tools.askHuman("地址来源冲突，等待核实"); return; }
  await ctx.tools.useAddress({ address: receipt.address, sourceId: receipt.sourceId });
}
export function canComplete(ctx) { return ctx.selection !== null; }`;

async function captureClipboard(page) {
  await page.addInitScript(() => {
    Object.defineProperty(navigator.clipboard, 'writeText', { configurable: true, value: async text => { window['copiedText'] = text; } });
  });
}
async function pass(page) {
  await page.locator('#code').fill(REFERENCE);
  await page.locator('#runBtn').click();
  await expect(page.locator('#verdictTitle')).toHaveText('本关通过');
  await expect(page.locator('#feedbackScore')).toContainText('100');
}
async function diagnostics(page) {
  await page.evaluate(() => { window['copiedText'] = null; });
  await page.locator('#copyResult').click();
  const text: string = await page.evaluate(() => window['copiedText']);
  expect(text).toContain('# 本次运行诊断');
  const diagnostic = text.split('# 本次运行诊断')[1];
  const table = diagnostic.split('## 全部测试概览\n\n')[1].split('\n\n')[0];
  const rows = table.split('\n');
  expect(rows).toHaveLength(24);
  expect(rows[0]).toBe('| 场景 / 组 | 种子 | 预期终态 | 实际终态 | 诊断 |');
  expect(new Set(rows.slice(2).map(row => row.split('|')[1].trim())).size).toBe(22);
  for (const row of rows.slice(2)) {
    const cells = row.split('|').slice(1, -1).map(cell => cell.trim());
    expect(cells).toHaveLength(5);
    expect(cells[1]).toMatch(/^[a-f\d]+$/i);
    expect(cells[2]).toMatch(/^(COMPLETED|WAITING_HUMAN)$/);
    expect(cells[3]).toMatch(/^(COMPLETED|WAITING_HUMAN|ABORTED)$/);
    expect(cells[4].length).toBeGreaterThan(0);
  }
  const group = await page.locator('#dots [aria-pressed="true"]').textContent();
  const scenario = (await page.locator('#scenarioSelect option:checked').textContent()).split(' · ')[0].slice(2);
  expect(diagnostic).toContain(`## 当前查看组：${scenario} / ${group}`);
  const trace = diagnostic.split('## 当前查看组：')[1];
  const count = Number((await page.locator('#traceCount').textContent()).match(/\d+/)[0]);
  expect(trace.split('\n').filter(line => /^\d+(?:\.\d+)?s \[[A-Z]+\]/.test(line))).toHaveLength(count);
  for (const message of await page.locator('#log .msg, #log .row.sep').allTextContents()) expect(trace).toContain(message);
  expect(trace).toContain('[实际状态]');
  return text;
}
async function share(page, verdict: string, count: number) {
  await page.locator('#shareBtn').click();
  await expect(page.locator('#card')).toContainText(verdict);
  await expect(page.locator('#card')).toContainText(`${count}/22`);
  await expect(page.locator('#card')).toContainText('处理合适');
  await page.evaluate(() => { window['copiedText'] = null; });
  await page.locator('#copyBtn').click();
  const text = await page.evaluate(() => window['copiedText']);
  expect(text).toContain(verdict);
  expect(text).toContain(`${count}/22`);
  expect(text).toContain('记忆错了，如何优化？');
  if (count < 22) { expect(text).not.toContain('本关通过'); await expect(page.locator('#card')).not.toContainText('本关通过'); }
  await page.keyboard.press('Escape');
  return text;
}

test('level 03 opens from hub and exports full failed diagnostics without old level content', async ({ page }) => {
  const errors: string[] = [], missing: string[] = [];
  page.on('pageerror', error => errors.push(error.message));
  page.on('response', response => { if (response.status() >= 400) missing.push(response.url()); });
  await captureClipboard(page);
  await page.goto('challenges/');
  await page.getByRole('link', { name: '进入第 03 关：记忆错了，如何优化？' }).click();
  await expect(page.getByRole('heading', { name: '记忆错了，如何优化？', exact: true })).toBeVisible();
  await expect(page.locator('#code')).toBeEditable();
  await expect(page.locator('#copyResult')).toBeDisabled();
  await expect(page.locator('#resultTools')).toBeHidden();
  await page.locator('#copyEditor').click();
  const initial = await page.evaluate(() => window['copiedText']);
  for (const text of ['onRecall', 'canComplete', 'queryProfile', 'remember', 'useAddress', 'validUntil', 'profileRevision']) expect(initial).toContain(text);
  for (const text of ['onResume', 'onRefundTimeout', 'saveCheckpoint', 'runStep', 'inspectStep', '# 本次运行诊断', '排行榜']) expect(initial).not.toContain(text);
  await page.locator('#rulesBtn').click();
  await page.evaluate(() => { window['copiedText'] = null; });
  await page.locator('#copyRules').click();
  expect(await page.evaluate(() => window['copiedText'])).toBe(initial);
  const retry = await page.locator('#rulesContent').evaluate(el => [...el.querySelectorAll('h3')].find(h => h.textContent.includes('能不能反复尝试')).nextElementSibling.textContent);
  expect(retry).toBe('可以无限次重试。代码和成绩只保存在本机，不会上传。');
  await page.keyboard.press('Escape');
  await page.locator('#runBtn').click();
  await expect(page.locator('#verdictTitle')).toContainText('未通过');
  await expect(page.locator('#feedbackScore')).toContainText('0');
  await expect(page.locator('#scenarioSelect option')).toHaveCount(5);
  await expect(page.locator('#progressNote')).toBeHidden();
  const exported = await diagnostics(page);
  await page.evaluate(() => { window['copiedText'] = null; });
  await page.locator('#copyEditor').click();
  expect(await page.evaluate(() => window['copiedText'])).toBe(exported);
  await page.locator('#rulesBtn').click();
  await page.evaluate(() => { window['copiedText'] = null; });
  await page.locator('#copyRules').click();
  expect(await page.evaluate(() => window['copiedText'])).toBe(exported);
  await page.keyboard.press('Escape');
  const appropriate = Number(exported.match(/处理合适 (\d+)\/22/)[1]);
  await share(page, '未通过', appropriate);
  await page.screenshot({ path: 'test-results/memory-desktop-failed.png', fullPage: true });
  expect(errors).toEqual([]);
  expect(missing).toEqual([]);
});

test('reference passes both conversations and retains correct long-term memory', async ({ page }) => {
  await captureClipboard(page);
  await page.goto(levelPath);
  await pass(page);
  await expect(page.locator('#scoreline')).toContainText('22 组处理合适');
  const names = { stale: '地址已过期', scope: '混入他人记忆', temporary: '只改这一次', conflict: '来源互相冲突', happy: '记忆仍然有效' };
  for (const [id, name] of Object.entries(names)) {
    await page.locator('#scenarioSelect').selectOption(id);
    await expect(page.locator('#scenarioSelect option:checked')).toContainText(name);
    await expect(page.locator('#dots .dot')).toHaveCount(id === 'happy' ? 2 : 5);
    await expect(page.locator('#caseFinding')).toHaveClass(/ok/);
    await diagnostics(page);
  }
  await page.locator('#scenarioSelect').selectOption('temporary');
  await page.screenshot({ path: 'test-results/memory-temporary-passed.png', fullPage: true });
  await page.locator('#scenarioSelect').selectOption('conflict');
  await page.locator('#dots .dot').nth(2).click();
  await expect(page.locator('#runInfo')).toContainText('转人工');
  await expect(page.locator('#caseFinding')).toContainText('人工');
  await expect(page.locator('#log')).toContainText('unknown');
  await expect(page.locator('#memory-health')).toHaveText('已保留 · 冲突待人工核实');
  await expect(page.locator('#memory-panel')).toHaveClass(/wait/);
  await expect(page.locator('#memory-health')).not.toContainText('长期记忆健康');
  await expect(page.locator('#expected-1')).toContainText('预期：交人工核实');
  await expect(page.locator('#expected-2')).toContainText('预期：交人工核实');
  await page.locator('#feedbackPanel').screenshot({ path: 'test-results/memory-conflict-unknown.png' });
  const exported = await diagnostics(page);
  expect(exported).toContain('WAITING_HUMAN');
  expect(exported).toContain('"consistent": false');
  await page.locator('#scenarioSelect').selectOption('stale');
  await page.locator('#productionHelp summary').click();
  await expect(page.locator('#productionHelp')).toContainText('权限');
  await expect(page.locator('#productionHelp')).toContainText('缓存');
  await expect(page.locator('#productionHelp')).toContainText('负责人');
  await expect(page.locator('#chapterLink')).toHaveAttribute('href', '../../build/chapter-05.html#memory-的写入与使用');
  await expect(page.locator('#nextLevel')).toHaveAttribute('href', '../04-efficiency/');
  await page.screenshot({ path: 'test-results/memory-production.png', fullPage: true });
  expect(await share(page, '本关通过', 22)).toContain('100/100');
});

test('the browser worker actually reuses corrected memory across two fresh conversations', async ({ page }) => {
  await page.goto(levelPath);
  const result: any = await page.evaluate(code => new Promise((resolve, reject) => {
    const worker = new Worker('worker.js');
    const timer = setTimeout(() => { worker.terminate(); reject(new Error('Worker verification timed out')); }, 10000);
    worker.onmessage = event => { clearTimeout(timer); worker.terminate(); resolve(event.data); };
    worker.onerror = error => { clearTimeout(timer); worker.terminate(); reject(new Error(error.message)); };
    worker.postMessage({ code, seedBase: 2026 });
  }), REFERENCE);
  expect(result.ok).toBe(true);
  expect(result.summary.score).toBe(100);
  expect(result.summary.runs).toHaveLength(22);
  for (const run of result.summary.runs) {
    expect(run.rounds).toHaveLength(2);
    expect(run.rounds[0].request.id).not.toBe(run.rounds[1].request.id);
    expect(run.rounds[1].request.override).toBeNull();
    for (const round of run.rounds) {
      if (round.state === 'COMPLETED') expect(round.selection.address).toBe(round.expectedAddress);
      else expect(round.state).toBe('WAITING_HUMAN');
    }
    if (run.scenario === 'temporary') {
      expect(run.rounds[0].selection.address).not.toBe(run.rounds[1].selection.address);
      expect(run.memory.final.map(record => record.address)).not.toContain(run.rounds[0].selection.address);
    }
    if (run.memory.required) {
      expect(run.memory.healthy).toBe(true);
      expect(run.memory.final.some(record => record.address === run.rounds[1].expectedAddress)).toBe(true);
      expect(run.memory.history.length).toBeGreaterThan(0);
    }
  }
});

test('safe delivery without repairing memory is not full success', async ({ page }) => {
  await captureClipboard(page);
  await page.goto(levelPath);
  await page.locator('#code').fill(QUERY_ONLY);
  await page.locator('#runBtn').click();
  await expect(page.locator('#verdictTitle')).toHaveText('安全底线通过');
  await expect(page.locator('#scoreline')).toContainText('13 组处理合适');
  await expect(page.locator('#caseFinding')).toContainText('记忆');
  await expect(page.locator('#runInfo')).toContainText('已完成');
  const exported = await diagnostics(page);
  expect(exported).toContain('处理合适 13/22');
  for (const id of ['stale', 'conflict']) {
    await page.locator('#scenarioSelect').selectOption(id);
    await expect(page.locator('#dots .dot.wait')).toHaveCount(id === 'stale' ? 5 : 4);
    await expect(page.locator('#dots .dot.bad')).toHaveCount(0);
  }
  for (const id of ['scope', 'temporary', 'happy']) {
    await page.locator('#scenarioSelect').selectOption(id);
    await expect(page.locator('#dots .dot.ok')).toHaveCount(id === 'happy' ? 2 : 5);
  }
  await share(page, '安全底线通过', 13);
  await pass(page);
  await expect(page.locator('#progressNote')).toContainText('处理合适 13 → 22 组');
  await expect(page.locator('#progressNote')).toContainText('违反底线 0 → 0 组');
});

test('human handoff is safe, while temporary or fabricated long-term writes remain violations', async ({ page }) => {
  await captureClipboard(page);
  await page.goto(levelPath);
  await page.locator('#code').fill(HUMAN);
  await page.locator('#runBtn').click();
  await expect(page.locator('#verdictTitle')).toHaveText('安全底线通过');
  const exported = await diagnostics(page);
  const appropriate = Number(exported.match(/处理合适 (\d+)\/22/)[1]);
  expect(appropriate).toBeLessThan(22);
  await share(page, '安全底线通过', appropriate);
  const pollution = `export async function onRecall(ctx) {
    if (ctx.request.override) { try { await ctx.tools.remember(ctx.request.override); } catch(e) {} }
    await ctx.tools.askHuman("交人工核实");
  }
  export function canComplete(ctx) { return false; }`;
  await page.locator('#code').fill(pollution);
  await page.locator('#runBtn').click();
  await expect(page.locator('#verdictTitle')).toContainText('未通过');
  await expect(page.locator('#scenarioSelect')).toHaveValue('temporary');
  await expect(page.locator('#feedbackScore')).toContainText('0');
  expect(await diagnostics(page)).toContain('"pollution":true');
});

test('stale results, demo and local storage keep the tested code distinct', async ({ page }) => {
  await captureClipboard(page);
  await page.addInitScript(() => {
    for (const level of ['01-refund-timeout', '02-resume']) localStorage.setItem(`agent-challenge:${level}:v1:code`, 'other-level-code');
    localStorage.setItem('agent-challenge:03-memory:v2:code', 'future-code');
  });
  await page.goto(levelPath);
  await pass(page);
  const changed = REFERENCE + '\n// 当前未测试的修改';
  await page.locator('#code').fill(changed);
  await expect(page.locator('#staleNote')).toBeVisible();
  await expect(page.locator('#shareBtn')).toBeDisabled();
  const exported = await diagnostics(page);
  expect(exported).toContain('# 当前代码（未测试，harness.js）');
  expect(exported).toContain('# 上次测试代码（仅此代码对应下面结果）');
  expect(exported).toContain(changed.trim());
  // Check before reload: the initialization script must not hide an accidental write.
  for (const level of ['01-refund-timeout', '02-resume']) expect(await page.evaluate(key => localStorage.getItem(key), `agent-challenge:${level}:v1:code`)).toBe('other-level-code');
  expect(await page.evaluate(() => localStorage.getItem('agent-challenge:03-memory:v2:code'))).toBe('future-code');
  await page.reload();
  await expect(page.locator('#code')).toHaveValue(changed);
  await page.locator('#demoBtn').click();
  await expect(page.locator('#feedbackScore')).toContainText('示范');
  await expect(page.locator('#code')).toHaveValue(changed);
  await expect(page.locator('#copyResult')).toBeDisabled();
  await expect(page.locator('#shareBtn')).toBeDisabled();
  await expect(page.locator('#resultTools')).toBeHidden();
  await page.locator('#copyEditor').click();
  const demo = await page.evaluate(() => window['copiedText']);
  expect(demo).not.toContain('# 本次运行诊断');
  expect(demo).toContain(changed.trim());
  expect(await page.evaluate(key => localStorage.getItem(key + ':runs'), storage)).toBe('1');
  expect(await page.evaluate(key => localStorage.getItem(key + ':best'), storage)).toBe('100');
  for (const level of ['01-refund-timeout', '02-resume']) expect(await page.evaluate(key => localStorage.getItem(key), `agent-challenge:${level}:v1:code`)).toBe('other-level-code');
  expect(await page.evaluate(() => localStorage.getItem('agent-challenge:03-memory:v2:code'))).toBe('future-code');
  page.once('dialog', dialog => dialog.accept());
  await page.locator('#resetCode').click();
  await expect(page.locator('#code')).not.toHaveValue(changed);
});

test('syntax and dead-loop errors preserve code and cannot fabricate results or steal dialog focus', async ({ page }) => {
  await captureClipboard(page);
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto(levelPath);
  await page.locator('#code').fill('export async function onRecall(ctx) { /');
  await page.locator('#runBtn').click();
  await expect(page.locator('#scoreline')).toContainText('语法错误');
  await page.locator('#copyResult').click();
  const syntax = await page.evaluate(() => window['copiedText']);
  expect(syntax).toContain('运行未完成，没有成绩');
  expect(syntax).not.toContain('## 全部测试概览');
  const loop = 'export async function onRecall(ctx) { while(true) {} }\nexport function canComplete(ctx) { return true; }';
  await page.locator('#code').fill(loop);
  await page.locator('#runBtn').click();
  await page.locator('#rulesBtn').click();
  await page.locator('#copyRules').focus();
  await expect(page.locator('#scoreline')).toContainText('6 秒');
  await expect(page.locator('#copyRules')).toBeFocused();
  await page.keyboard.press('Escape');
  await expect(page.locator('#runBtn')).toBeEnabled();
  await expect(page.locator('#shareBtn')).toBeDisabled();
  await expect(page.locator('#code')).toHaveValue(loop);
  expect(await page.evaluate(key => localStorage.getItem(key + ':runs'), storage)).toBeNull();
  await pass(page);
});

for (const width of [320, 390]) {
  test(`memory board, rules and results fit mobile ${width}`, async ({ page }) => {
    const errors: string[] = [];
    page.on('pageerror', error => errors.push(error.message));
    await captureClipboard(page);
    await page.setViewportSize({ width, height: 844 });
    await page.emulateMedia({ reducedMotion: 'reduce' });
    await page.goto(levelPath);
    await page.locator('#rulesBtn').click();
    await expect(page.locator('#rulesDialog')).toBeVisible();
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
    expect(await page.locator('#rulesDialog').evaluate(el => el.scrollWidth <= el.clientWidth)).toBe(true);
    await page.screenshot({ path: `test-results/memory-rules-mobile-${width}.png`, fullPage: true });
    await page.keyboard.press('Escape');
    await pass(page);
    await expect(page.locator('#feedbackPanel')).toBeFocused();
    const box = await page.locator('#feedbackPanel').boundingBox();
    expect(box.y).toBeGreaterThanOrEqual(0);
    expect(box.y).toBeLessThan(80);
    await page.locator('#scenarioSelect').selectOption('temporary');
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
    await page.screenshot({ path: `test-results/memory-temporary-mobile-${width}.png`, fullPage: true });
    await diagnostics(page);
    await page.locator('#scenarioSelect').selectOption('conflict');
    await page.locator('#dots .dot').nth(2).click();
    await page.locator('#hintHelp summary').click();
    await expect(page.locator('#hintText')).toContainText('queryProfile');
    await page.locator('#productionHelp summary').click();
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
    await share(page, '本关通过', 22);
    expect(errors).toEqual([]);
  });
}

test('clipboard denial offers the complete task package in a copy prompt', async ({ page }) => {
  await page.addInitScript(() => {
    Object.defineProperty(navigator.clipboard, 'writeText', { configurable: true, value: async () => { throw new Error('Clipboard denied'); } });
  });
  await page.goto(levelPath);
  const prompt = new Promise<{ type: string; text: string }>(resolve => {
    page.once('dialog', async dialog => {
      const result = { type: dialog.type(), text: dialog.defaultValue() };
      await dialog.dismiss();
      resolve(result);
    });
  });
  await page.locator('#copyEditor').click();
  const { type, text } = await prompt;
  expect(type).toBe('prompt');
  for (const part of ['# 闯关说明', '# 接口速查', 'onRecall', 'canComplete', 'queryProfile']) expect(text).toContain(part);
  await expect(page.locator('#code')).toBeEditable();
});

test('keyboard editing and shortcut can run the reference harness', async ({ page }) => {
  await page.goto(levelPath);
  await page.locator('#code').fill(REFERENCE);
  await page.locator('#code').focus();
  await page.keyboard.press('ControlOrMeta+End');
  await page.keyboard.press('End');
  await page.keyboard.press('Enter');
  await page.keyboard.press('Tab');
  await page.keyboard.type('// keyboard change');
  await expect(page.locator('#code')).toHaveValue(/  \/\/ keyboard change/);
  await page.keyboard.press('ControlOrMeta+Enter');
  await expect(page.locator('#verdictTitle')).toHaveText('本关通过');
  await page.locator('#code').focus();
  await page.keyboard.press('Shift+Tab');
  await expect(page.locator('#code')).not.toBeFocused();
});

test('worker startup failure never falls back to executing player code in the page', async ({ page }) => {
  await captureClipboard(page);
  await page.addInitScript(() => {
    window.Worker = class { constructor() { throw new Error('Worker unavailable for test'); } } as any;
  });
  await page.goto(levelPath);
  await page.locator('#code').fill('document.body.dataset.unsafe = "ran";');
  await page.locator('#runBtn').click();
  await expect(page.locator('#scoreline')).toContainText('独立模拟器未能启动');
  expect(await page.locator('body').getAttribute('data-unsafe')).toBeNull();
  await expect(page.locator('#shareBtn')).toBeDisabled();
  await expect(page.locator('#copyResult')).toBeEnabled();
  expect(await page.evaluate(key => localStorage.getItem(key + ':runs'), storage)).toBeNull();
});

test('reference runs under a policy that prohibits eval and dynamic Function', async ({ page }) => {
  const errors: string[] = [];
  page.on('pageerror', error => errors.push(error.message));
  await page.route('**/challenges/03-memory/**', async route => {
    const response = await route.fetch();
    await route.fulfill({ response, headers: { ...response.headers(), 'content-security-policy': "default-src 'self'; script-src 'self'; worker-src 'self'; style-src 'self' 'unsafe-inline'; img-src 'self'" } });
  });
  await page.goto(levelPath);
  await pass(page);
  expect(errors).toEqual([]);
});

test('replay restores final snapshots when stopped, switched or reduced motion is preferred', async ({ page }) => {
  await page.goto(levelPath);
  await pass(page);
  const finalMemory = await page.locator('#memory-after').textContent();
  await page.locator('#replay').click();
  await expect(page.locator('#replay')).toHaveText('停止播放');
  await expect(page.locator('#memory-after-label')).toHaveText('回放此刻');
  await page.locator('#replay').click();
  await expect(page.locator('#playState')).toHaveText('当前显示最终状态');
  await expect(page.locator('#memory-after')).toHaveText(finalMemory);
  await page.locator('#speed').click();
  await expect(page.locator('#speed')).toHaveAccessibleName('回放速度 2 倍');
  await page.locator('#replay').click();
  await page.locator('#scenarioSelect').selectOption('temporary');
  await expect(page.locator('#replay')).toHaveText('播放过程');
  await expect(page.locator('#memory-after-label')).toHaveText('运行后');
  await expect(page.locator('#source-1')).toContainText('本次指定地址');
  await expect(page.locator('#source-2')).toContainText('长期记忆');
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.locator('#replay').click();
  await expect(page.locator('#playState')).toContainText('减少动态效果');
  await expect(page.locator('#round-1')).toHaveClass(/done/);
  await expect(page.locator('#round-2')).toHaveClass(/done/);
  await page.emulateMedia({ reducedMotion: 'no-preference' });
  await page.locator('#scenarioSelect').selectOption('happy');
  await page.locator('#speed').click();
  await expect(page.locator('#speed')).toHaveAccessibleName('回放速度 4 倍');
  await page.locator('#replay').click();
  await expect(page.locator('#playState')).toHaveText('回放结束 · 当前显示最终状态');
  await expect(page.locator('#round-2')).toHaveClass(/done/);
  await expect(page.locator('#memory-after-label')).toHaveText('运行后');
  await page.locator('#replay').click();
  await page.locator('#rulesBtn').click();
  await expect(page.locator('#replay')).toHaveText('播放过程');
  await expect(page.locator('#memory-after-label')).toHaveText('运行后');
});

test('slow loading keeps third-level controls disabled until initialization', async ({ page }) => {
  let release: () => void = () => {};
  const gate = new Promise<void>(resolve => { release = resolve; });
  await page.route('**/challenges/03-memory/app.js', async route => { await gate; await route.continue(); });
  const navigation = page.goto(levelPath);
  try {
    await expect(page.locator('#runBtn')).toBeDisabled();
    await expect(page.locator('#rulesBtn')).toBeDisabled();
    await expect(page.locator('#code')).not.toBeEditable();
  } finally { release(); }
  await navigation;
  await expect(page.locator('#code')).toBeEditable();
  await expect(page.locator('#rulesBtn')).toBeEnabled();
});
