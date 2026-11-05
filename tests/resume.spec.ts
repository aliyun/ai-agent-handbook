import { test, expect } from '@playwright/test';
import { REFERENCE } from '../challenges/02-resume/reference.js';

const levelPath = 'challenges/02-resume/';
const storage = 'agent-challenge:02-resume:v1';
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

async function expectDiagnostics(page, text: string) {
  expect(text).toContain('# 本次运行诊断');
  const diagnostics = text.split('# 本次运行诊断')[1];
  expect(diagnostics).toContain('| 场景 / 组 | 种子 | 预期终态 | 实际终态 | 诊断 |');
  const table = diagnostics.split('## 全部测试概览\n\n')[1].split('\n\n')[0];
  expect(table.split('\n')).toHaveLength(24);
  const rows = diagnostics.split('\n').filter(line => /^\| .+ \/ \d+ \|/.test(line));
  expect(rows).toHaveLength(22);
  expect(new Set(rows.map(row => row.split('|')[1].trim())).size).toBe(22);
  for (const row of rows) {
    const cells = row.split('|').slice(1, -1).map(cell => cell.trim());
    expect(cells).toHaveLength(5);
    expect(cells[1]).toMatch(/^[\da-f]+$/i);
    expect(cells[2]).toMatch(/^(COMPLETED|WAITING_HUMAN)$/);
    expect(cells[3]).toMatch(/^(COMPLETED|WAITING_HUMAN|ABORTED)$/);
    expect(cells[4].length).toBeGreaterThan(0);
  }
  const group = await page.locator('#dots [aria-pressed="true"]').textContent();
  const scenario = (await page.locator('#scenarioSelect option:checked').textContent()).split(' · ')[0].slice(2);
  expect(diagnostics).toContain(`## 当前查看组：${scenario} / ${group}`);
  const seed = (await page.locator('#caseMeta').textContent()).match(/种子\s+([\da-f]+)/i)![1];
  expect(diagnostics).toContain(`种子：${seed}`);
  const trace = diagnostics.split('## 当前查看组：')[1];
  const traceCount = Number((await page.locator('#traceCount').textContent()).match(/\d+/)![0]);
  expect(trace.split('\n').filter(line => /^\d+(?:\.\d+)?s \[[A-Z]+\]/.test(line))).toHaveLength(traceCount);
  for (const message of await page.locator('#log .msg, #log .row.sep').allTextContents()) expect(trace).toContain(message);
  expect(trace).toContain('[实际状态]');
}

async function expectShare(page, verdict: string, appropriate: number) {
  await page.locator('#shareBtn').click();
  await expect(page.locator('#card')).toContainText(verdict);
  await expect(page.locator('#card')).toContainText('处理合适');
  await expect(page.locator('#card')).toContainText(`${appropriate}/22`);
  await page.locator('#copyBtn').click();
  const text = await page.evaluate(() => window['copiedText']);
  expect(text).toContain(verdict);
  expect(text).toContain('处理合适');
  expect(text).toContain(`${appropriate}/22`);
  if (appropriate < 22) {
    await expect(page.locator('#card')).not.toContainText('本关通过');
    expect(text).not.toMatch(/本关通过|通过了全部\s*22\s*组|全部\s*22\s*组处理合适/);
  }
  await page.keyboard.press('Escape');
  return text;
}

test('level 02 opens from the hub; starter exposes repeated execution, demo does not replace player code', async ({ page }) => {
  const errors: string[] = [], missing: string[] = [];
  page.on('pageerror', error => errors.push(error.message));
  page.on('response', response => { if (response.status() >= 400) missing.push(response.url()); });
  await captureClipboard(page);
  await page.goto('challenges/');
  await page.getByRole('link', { name: '进入第 02 关：任务中断，如何优化？' }).click();
  await expect(page.getByRole('heading', { name: '任务中断，如何优化？', exact: true })).toBeVisible();
  await expect(page.locator('#code')).toBeEditable();
  await expect(page.locator('#inspect')).toBeHidden();
  await expect(page.locator('#copyResult')).toBeDisabled();
  await expect(page.locator('#resultTools')).toBeHidden();
  await page.locator('#copyEditor').click();
  expect(await page.evaluate(() => window['copiedText'])).not.toContain('# 本次运行诊断');
  const starter = await page.locator('#code').inputValue();
  expect(starter).toContain('onResume');
  expect(starter).not.toContain('onRefundTimeout');
  await page.locator('#runBtn').click();
  await expect(page.locator('#verdictTitle')).toContainText('重复执行');
  await expect(page.locator('#verdictTitle')).toContainText('未通过');
  await expect(page.locator('#feedbackScore')).toContainText('0');
  await expect(page.locator('#progressNote')).toBeHidden();
  await expect(page.locator('#resultTools')).toBeVisible();
  await expect(page.locator('#copyResult')).toBeEnabled();
  await page.locator('#copyResult').click();
  await expectDiagnostics(page, await page.evaluate(() => window['copiedText']));
  await expectShare(page, '未通过', 2);
  await expect(page.locator('.resume-step.bad')).not.toHaveCount(0);
  await expect(page.locator('#instanceState')).toHaveText('未通过 · 重复执行了已完成步骤');
  await page.screenshot({ path: 'test-results/resume-desktop-failed.png', fullPage: true });
  await page.locator('#code').fill(REFERENCE);
  await page.reload();
  await page.locator('#demoBtn').click();
  await expect(page.locator('#feedbackScore')).toContainText('示范');
  await expect(page.locator('#code')).toHaveValue(REFERENCE);
  await expect(page.locator('#shareBtn')).toBeDisabled();
  await expect(page.locator('#copyResult')).toBeDisabled();
  await expect(page.locator('#resultTools')).toBeHidden();
  await expect(page.locator('#progressNote')).toBeHidden();
  await page.locator('#copyEditor').click();
  const demoPackage = await page.evaluate(() => window['copiedText']);
  expect(demoPackage).toContain(REFERENCE.trim());
  for (const text of ['# 本次运行诊断', '## 全部测试概览', '## 当前查看组', '# 上次测试代码']) expect(demoPackage).not.toContain(text);
  await page.locator('#rulesBtn').click();
  await page.locator('#copyRules').click();
  expect(await page.evaluate(() => window['copiedText'])).toBe(demoPackage);
  await page.keyboard.press('Escape');
  expect(await page.evaluate(key => localStorage.getItem(key + ':runs'), storage)).toBe('1');
  expect(errors).toEqual([]);
  expect(missing).toEqual([]);
});

test('reference completes all recoverable cases; unknown and revoked permission hand off safely', async ({ page }) => {
  await page.goto(levelPath);
  await pass(page);
  await expect(page.locator('#scoreline')).toContainText('22 组');
  await expect(page.locator('.resume-step.bad')).toHaveCount(0);
  await expect(page.locator('.resume-step.done')).toHaveCount(3);
  await expect(page.locator('.saved-state.saved')).toHaveCount(3);
  await page.screenshot({ path: 'test-results/resume-desktop-passed.png', fullPage: true });
  const production = page.locator('#productionHelp');
  await expect(production).toHaveJSProperty('open', false);
  await production.locator('summary').click();
  for (const text of ['不验证真实模型能力或生产可靠性', 'checkpoint', '原子操作', '幂等', 'not_found', '迟到结果', 'unknown', 'intent', '并发租约', '当前版本和权限', '负责人', '接单确认', '恢复入口']) await expect(production).toContainText(text);
  for (const anchor of ['_4-4-1-让任务脱离当前连接持续存在', '_4-6-1-针对失败类型选择恢复策略', '_4-6-2-让完成由证据决定']) {
    await expect(production.locator(`a[href="../../build/chapter-04.html#${anchor}"]`)).toBeVisible();
  }
  await expect(page.locator('a[href*="03-"]')).toHaveCount(0);
  await expect(page.locator('#chapterLink')).toHaveAttribute('href', '../../build/chapter-04.html#_4-4-1-让任务脱离当前连接持续存在');
  await page.screenshot({ path: 'test-results/resume-production.png', fullPage: true });
  await production.locator('summary').click();
  await page.locator('#scenarioSelect').selectOption('gap');
  await page.locator('#dots .dot').first().click();
  await expect(page.locator('#handoffView')).toBeEnabled();
  await expect(page.locator('#handoffView')).toHaveText('查看接手时');
  await expect(page.locator('#handoffView')).toHaveAttribute('aria-pressed', 'false');
  await page.locator('#handoffView').click();
  await expect(page.locator('#handoffView')).toHaveText('返回最终状态');
  await expect(page.locator('#handoffView')).toHaveAttribute('aria-pressed', 'true');
  await expect(page.locator('#step-publish')).toHaveClass(/\bgap\b/);
  await expect(page.locator('#actual-publish')).toContainText('已执行');
  await expect(page.locator('#saved-publish')).toHaveText('进度未保存');
  await expect(page.locator('#handoffNote')).toBeVisible();
  await expect(page.locator('#handoffNote')).toContainText('已执行但未保存');
  await expect(page.locator('#handoffNote')).toContainText('实际状态');
  await page.screenshot({ path: 'test-results/resume-handoff.png', fullPage: true });
  await page.locator('#handoffView').click();
  await expect(page.locator('#handoffView')).toHaveAttribute('aria-pressed', 'false');
  await expect(page.locator('.saved-state.saved')).toHaveCount(3);
  await expect(page.locator('#step-publish')).not.toHaveClass(/\bgap\b/);
  await expect(page.locator('#playState')).toContainText('最终状态');
  await page.locator('.dot[aria-label*="转人工"]').click();
  await expect(page.locator('#caseFinding')).toContainText('正确转人工');
  await expect(page.locator('#instanceState')).toContainText('转人工');
  await page.locator('#fullLog').evaluate((el: HTMLDetailsElement) => { el.open = true; });
  await expect(page.locator('#log')).toContainText('unknown');
  await page.locator('#scenarioSelect').selectOption('changed');
  await expect(page.locator('#caseFinding')).toContainText('正确转人工');
  await expect(page.locator('#actual-notify')).toHaveText('未执行');
  await expect(page.locator('.resume-step.old')).toHaveCount(2);
  await expect(page.locator('#saved-publish')).toHaveText('旧版本进度');
  await page.locator('#scenarioSelect').selectOption('repeated');
  await expect(page.locator('#caseFinding')).toContainText('接着完成');
  await expect(page.locator('.resume-step.done')).toHaveCount(3);
  await expect(page.locator('#log')).toContainText('中断');
  await expect(page.locator('#log')).toContainText('新实例');
  await page.locator('#scenarioSelect').selectOption('happy');
  await expect(page.locator('#caseFinding')).toContainText('正常任务已完成');
  await expect(page.locator('#handoffView')).toBeDisabled();
});

test('current-version draft is not a duplicate of an old-version draft', async ({ page }) => {
  await page.goto(levelPath);
  const starter = await page.locator('#code').inputValue();
  // Replace only the first occurrence, inside onResume, not canComplete.
  const newDraft = REFERENCE.replace('const task = ctx.task;', `const task = ctx.task;
  if (ctx.checkpoint.revision !== task.revision) {
    await ctx.tools.runStep('draft');
    await ctx.tools.askHuman('新版草稿生成，待人工确认');
    return;
  }`);
  expect(newDraft).not.toBe(REFERENCE);
  await page.locator('#code').fill(newDraft);
  await page.locator('#runBtn').click();
  await expect(page.locator('#verdictTitle')).toHaveText('本关通过');
  await page.locator('#scenarioSelect').selectOption('changed');
  await page.locator('#dots .dot').first().click();
  await expect(page.locator('#actual-draft')).toContainText('当前版本已执行');
  await expect(page.locator('#step-draft')).toHaveClass(/\bdone\b/);
  await expect(page.locator('#step-draft')).not.toHaveClass(/\bbad\b|\bold\b/);
  await expect(page.locator('#actual-publish')).toHaveText('旧版本已执行');
  await expect(page.locator('#step-publish')).toHaveClass(/\bold\b/);
  await expect(page.locator('.resume-step.bad')).toHaveCount(0);
  await expect(page.locator('#instanceState')).toContainText('新版草稿生成，待人工确认');
  await expect(page.locator('#caseFinding')).toContainText('正确转人工');
  await page.screenshot({ path: 'test-results/resume-handoff-versions.png', fullPage: true });
  await page.locator('#code').fill(starter);
  await page.locator('#runBtn').click();
  await expect(page.locator('#verdictTitle')).toContainText('未通过');
  await page.locator('#scenarioSelect').selectOption('saved');
  await expect(page.locator('#step-draft')).toHaveClass(/\bbad\b/);
  await expect(page.locator('#actual-draft')).toContainText('重复执行');
});

test('copy package, score share and code storage stay independent of level 01', async ({ page }) => {
  await captureClipboard(page);
  await page.goto(levelPath);
  await page.evaluate(() => {
    localStorage.setItem('agent-challenge:01-refund-timeout:v1:code', 'level-one-code');
    localStorage.setItem('agent-challenge:01-refund-timeout:v1:best', '96');
    localStorage.setItem('agent-challenge:02-resume:v2:code', 'future-version-code');
  });
  await pass(page);
  await page.locator('#scenarioSelect').selectOption('gap');
  await page.locator('#dots .dot').nth(2).click();
  await page.locator('#copyResult').click();
  const resultPackage = await page.evaluate(() => window['copiedText']);
  await expectDiagnostics(page, resultPackage);
  await page.locator('#copyEditor').click();
  const packageText = await page.evaluate(() => window['copiedText']);
  expect(packageText).toBe(resultPackage);
  expect(packageText).toContain(REFERENCE.trim());
  for (const text of ['# 闯关说明', '# 接口速查', 'onResume', 'canComplete', 'inspectStep', 'saveCheckpoint', 'unknown', 'publishAllowed', page.url()]) expect(packageText).toContain(text);
  expect(packageText).not.toContain('退款');
  expect(packageText).not.toContain('排行榜');
  await page.locator('#rulesBtn').click();
  await page.locator('#copyRules').click();
  expect(await page.evaluate(() => window['copiedText'])).toBe(packageText);
  await page.keyboard.press('Escape');
  await page.locator('#shareBtn').click();
  await expect(page.locator('#card')).toContainText('100');
  await expect(page.locator('#card')).toContainText('第 02 关');
  await expect(page.locator('#card')).not.toContainText('退款');
  await expect(page.locator('#card')).toContainText('本关通过');
  await expect(page.locator('#card')).toContainText('处理合适');
  await expect(page.locator('#card')).toContainText('22/22');
  await page.locator('#copyBtn').click();
  const shared = await page.evaluate(() => window['copiedText']);
  expect(shared).toContain('100/100');
  expect(shared).toContain(page.url());
  expect(shared).toContain('本关通过');
  expect(shared).toContain('处理合适');
  expect(shared).toContain('22/22');
  await page.keyboard.press('Escape');
  await page.locator('#code').fill(REFERENCE + '\n// 修改后待重测');
  await expect(page.locator('#shareBtn')).toBeDisabled();
  await expect(page.locator('#staleNote')).toBeVisible();
  await expect(page.locator('#copyResult')).toBeEnabled();
  await page.locator('#copyResult').click();
  const stale = await page.evaluate(() => window['copiedText']);
  expect(stale).toContain('上次测试结果，不代表当前未测试代码');
  expect(stale).toContain('# 上次测试代码（仅此代码对应下面结果）\n\n```js\n' + REFERENCE + '\n```');
  expect(stale).toContain('# 当前代码（未测试，harness.js）\n\n```js\n' + REFERENCE + '\n// 修改后待重测\n```');
  expect(stale).not.toContain('结果对应上面的当前代码');
  expect(stale.indexOf('100/100')).toBeGreaterThan(stale.indexOf('# 上次测试代码（仅此代码对应下面结果）'));
  await expectDiagnostics(page, stale);
  await page.locator('#copyEditor').click();
  expect(await page.evaluate(() => window['copiedText'])).toBe(stale);
  await page.locator('#rulesBtn').click();
  await page.locator('#copyRules').click();
  expect(await page.evaluate(() => window['copiedText'])).toBe(stale);
  await page.keyboard.press('Escape');
  await page.reload();
  await expect(page.locator('#code')).toHaveValue(REFERENCE + '\n// 修改后待重测');
  await expect(page.locator('#shareBtn')).toBeDisabled();
  expect(await page.evaluate(key => localStorage.getItem(key + ':best'), storage)).toBe('100');
  expect(await page.evaluate(() => localStorage.getItem('agent-challenge:01-refund-timeout:v1:best'))).toBe('96');
  expect(await page.evaluate(() => localStorage.getItem('agent-challenge:01-refund-timeout:v1:code'))).toBe('level-one-code');
  expect(await page.evaluate(() => localStorage.getItem('agent-challenge:02-resume:v2:code'))).toBe('future-version-code');
  await page.goto(levelPath + 'index.html');
  await expect(page.locator('#code')).toBeEditable();
});

for (const width of [320, 390]) {
  test(`mobile ${width}: readable task board, rules, copy and no overflow`, async ({ page }) => {
    await page.setViewportSize({ width, height: 844 });
    await captureClipboard(page);
    await page.goto(levelPath);
    await expect(page.locator('#chapterLink')).toBeVisible();
    await expect(page.locator('#leaderboardBtn, #submitDialog, #leaderboardDialog')).toHaveCount(0);
    await page.locator('#rulesBtn').click();
    await expect(page.locator('#learningGoals')).toContainText('进程之外');
    expect(await page.locator('#rulesDialog').evaluate(el => el.scrollWidth <= el.clientWidth)).toBe(true);
    await page.locator('#copyRules').click();
    expect(await page.evaluate(() => window['copiedText'])).toContain('onResume');
    await page.keyboard.press('Escape');
    await page.emulateMedia({ reducedMotion: 'reduce' });
    await pass(page);
    await expect(page.locator('#feedbackPanel')).toBeFocused();
    await expect(page.locator('#feedbackPanel')).toBeInViewport();
    await expect(page.locator('#verdictTitle')).toBeInViewport();
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
    await expect(page.locator('.resume-step')).toHaveCount(3);
    await expect(page.locator('.saved-state.saved')).toHaveCount(3);
    await page.screenshot({ path: `test-results/resume-diagnostics-mobile-${width}.png` });
    await page.screenshot({ path: `test-results/resume-mobile-${width}.png`, fullPage: true });
    await page.locator('#shareBtn').click();
    expect(await page.locator('#shareDialog').evaluate(el => el.scrollWidth <= el.clientWidth)).toBe(true);
    await expect(page.locator('#copyBtn')).toBeVisible();
  });
}

test('replay can stop or switch scenario; reduced motion preserves the final state', async ({ page }) => {
  await page.goto(levelPath);
  await pass(page);
  await page.locator('#replay').click();
  await expect(page.locator('#replay')).toHaveText('停止播放');
  await page.locator('#speed').click();
  await expect(page.locator('#speed')).toHaveText('2×');
  await page.locator('#scenarioSelect').selectOption('happy');
  await expect(page.locator('#replay')).toHaveText('播放过程');
  await expect(page.locator('.resume-step.done')).toHaveCount(3);
  await expect(page.locator('#handoffView')).toBeDisabled();
  await expect(page.locator('#handoffView')).toHaveAttribute('aria-pressed', 'false');
  await expect(page.locator('#playState')).toContainText('最终状态');
  await page.locator('#scenarioSelect').selectOption('gap');
  await page.locator('#dots .dot').first().click();
  await page.locator('#replay').click();
  await expect(page.locator('#replay')).toHaveText('停止播放');
  await page.locator('#handoffView').click();
  await expect(page.locator('#replay')).toHaveText('播放过程');
  await expect(page.locator('#handoffView')).toHaveAttribute('aria-pressed', 'true');
  await expect(page.locator('#step-publish')).toHaveClass(/\bgap\b/);
  await page.locator('#scenarioSelect').selectOption('happy');
  await expect(page.locator('#handoffView')).toBeDisabled();
  await expect(page.locator('#handoffView')).toHaveAttribute('aria-pressed', 'false');
  await expect(page.locator('#handoffNote')).toBeHidden();
  await expect(page.locator('#playState')).toContainText('最终状态');
  await expect(page.locator('.saved-state.saved')).toHaveCount(3);
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.locator('#replay').click();
  await expect(page.locator('#playState')).toContainText('减少动态效果');
  await expect(page.locator('.saved-state.saved')).toHaveCount(3);
});

test('Worker terminates an infinite loop; compile errors do not overwrite code or save scores', async ({ page }) => {
  await captureClipboard(page);
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto(levelPath);
  const badCode = 'export async function onResume(ctx) { while (true) {} }\nexport function canComplete(ctx) { return false; }';
  await page.locator('#code').fill(badCode);
  await page.locator('#runBtn').click();
  await expect(page.locator('#feedbackPanel')).toHaveAttribute('aria-busy', 'true');
  await page.locator('#rulesBtn').click();
  await page.locator('#copyRules').focus();
  await expect(page.locator('#verdictTitle')).toHaveText('这次运行未能完成');
  await expect(page.locator('#scoreline')).toContainText('6 秒内没有跑完');
  await expect(page.locator('#code')).toBeEditable();
  await expect(page.locator('#shareBtn')).toBeDisabled();
  await expect(page.locator('#rulesDialog')).toBeVisible();
  await expect(page.locator('#copyRules')).toBeFocused();
  await page.keyboard.press('Escape');
  await expect(page.locator('#resultTools')).toBeVisible();
  await expect(page.locator('#copyResult')).toBeEnabled();
  await expect(page.locator('#progressNote')).toBeHidden();
  await page.locator('#copyResult').click();
  const timeoutPackage = await page.evaluate(() => window['copiedText']);
  for (const text of ['# 闯关说明', '# 接口速查', '# 本次运行诊断', badCode, '6 秒内没有跑完', '没有成绩']) expect(timeoutPackage).toContain(text);
  expect(timeoutPackage).not.toContain('## 全部测试概览');
  await page.locator('#rulesBtn').click();
  await expect(page.locator('#rulesDialog')).toBeVisible();
  await page.locator('#copyRules').click();
  expect(await page.evaluate(() => window['copiedText'])).toBe(timeoutPackage);
  await page.keyboard.press('Escape');
  const syntax = 'export async function onResume(ctx) { /';
  await page.locator('#code').fill(syntax);
  await page.locator('#runBtn').click();
  await expect(page.locator('#scoreline')).toContainText('语法错误');
  await expect(page.locator('#code')).toHaveValue(syntax);
  await expect(page.locator('#copyResult')).toBeEnabled();
  await expect(page.locator('#progressNote')).toBeHidden();
  await page.locator('#copyResult').click();
  const syntaxPackage = await page.evaluate(() => window['copiedText']);
  for (const text of ['# 闯关说明', '# 接口速查', '# 本次运行诊断', syntax, '语法错误', '没有成绩']) expect(syntaxPackage).toContain(text);
  expect(syntaxPackage).not.toContain(badCode);
  expect(syntaxPackage).not.toContain('## 全部测试概览');
  expect(await page.evaluate(key => localStorage.getItem(key + ':runs'), storage)).toBeNull();
});

test('zero-score recovery improvements survive errors and demos; all-human is only a safety pass', async ({ page }) => {
  await captureClipboard(page);
  await page.goto(levelPath);
  const starter = await page.locator('#code').inputValue();
  async function score(code: string) {
    await page.locator('#code').fill(code);
    await page.locator('#runBtn').click();
    await expect(page.locator('#runBtn')).toBeEnabled();
    await page.locator('#copyResult').click();
    const text = await page.evaluate(() => window['copiedText']);
    const counts = text.match(/违反底线 (\d+)\/22 组；处理合适 (\d+)\/22 组/);
    expect(counts).not.toBeNull();
    return { failed: Number(counts![1]), appropriate: Number(counts![2]) };
  }
  const before = await score(starter);
  await expect(page.locator('#verdictTitle')).toContainText('未通过');
  await expect(page.locator('#feedbackScore')).toContainText('0');
  await expect(page.locator('#progressNote')).toBeHidden();
  const partial = starter.replace('export async function onResume(ctx) {', `export async function onResume(ctx) {
  if (ctx.checkpoint.revision !== ctx.task.revision || !ctx.task.publishAllowed) {
    await ctx.tools.askHuman('版本或权限变化，待人工核实');
    return;
  }`);
  expect(partial).not.toBe(starter);
  const after = await score(partial);
  expect(after.failed).toBeGreaterThan(0);
  expect(after.failed).toBeLessThan(before.failed);
  expect(after.appropriate).toBeGreaterThan(before.appropriate);
  await expect(page.locator('#verdictTitle')).toContainText('未通过');
  await expect(page.locator('#feedbackScore')).toContainText('0');
  const fixed = before.failed - after.failed;
  await expect(page.locator('#progressNote')).toBeVisible();
  for (const text of ['0 → 0 分', `违反底线 ${before.failed} → ${after.failed} 组`, `处理合适 ${before.appropriate} → ${after.appropriate} 组`, `修好 ${fixed} 组`, '新增违规 0 组']) await expect(page.locator('#progressNote')).toContainText(text);

  const syntax = 'export async function onResume(ctx) { /';
  await page.locator('#code').fill(syntax);
  await page.locator('#runBtn').click();
  await expect(page.locator('#scoreline')).toContainText('语法错误');
  await expect(page.locator('#progressNote')).toBeHidden();
  await page.locator('#demoBtn').click();
  await expect(page.locator('#feedbackScore')).toContainText('示范');
  await expect(page.locator('#code')).toHaveValue(syntax);
  await expect(page.locator('#progressNote')).toBeHidden();
  await expect(page.locator('#copyResult')).toBeDisabled();
  await expect(page.locator('#resultTools')).toBeHidden();
  await expect(page.locator('#shareBtn')).toBeDisabled();
  await page.locator('#copyEditor').click();
  const demoPackage = await page.evaluate(() => window['copiedText']);
  expect(demoPackage).toContain(syntax);
  for (const text of ['# 本次运行诊断', '## 全部测试概览', '## 当前查看组', '# 上次测试代码']) expect(demoPackage).not.toContain(text);
  expect(await page.evaluate(key => localStorage.getItem(key + ':runs'), storage)).toBe('2');
  expect(await page.evaluate(key => localStorage.getItem(key + ':best'), storage)).toBe('0');

  // Regressing to starter must compare with partial, not the demo's starter result.
  expect(await score(starter)).toEqual(before);
  for (const text of ['0 → 0 分', `违反底线 ${after.failed} → ${before.failed} 组`, `处理合适 ${after.appropriate} → ${before.appropriate} 组`, '修好 0 组', `新增违规 ${fixed} 组`]) await expect(page.locator('#progressNote')).toContainText(text);
  const manual = 'export async function onResume(ctx) { await ctx.tools.askHuman("请人工核实"); }\nexport function canComplete(ctx) { return false; }';
  expect(await score(manual)).toEqual({ failed: 0, appropriate: 6 });
  await expect(page.locator('#verdictTitle')).toHaveText('安全底线通过');
  await expect(page.locator('#feedbackScore')).toContainText('78');
  await expect(page.locator('#scoreline')).toContainText('6 组处理合适');
  const manualPackage = await page.evaluate(() => window['copiedText']);
  expect(manualPackage).toContain('安全底线通过；78/100');
  await expectDiagnostics(page, manualPackage);
  const shared = await expectShare(page, '安全底线通过', 6);
  expect(shared).toContain('78/100');
  await pass(page);
  for (const text of ['78 → 100 分', '违反底线 0 → 0 组', '处理合适 6 → 22 组', '修好 0 组', '新增违规 0 组']) await expect(page.locator('#progressNote')).toContainText(text);
  expect(await page.evaluate(key => localStorage.getItem(key + ':runs'), storage)).toBe('5');
});

test('safely completing a changed task still explains why human review was expected', async ({ page }) => {
  await captureClipboard(page);
  await page.goto(levelPath);
  const code = REFERENCE.replace('  const task = ctx.task;', `  const task = ctx.task;
  if (task.publishAllowed && ctx.checkpoint.revision !== task.revision) {
    const completed = [];
    for (const step of task.steps) {
      completed.push(await ctx.tools.runStep(step.id));
      await ctx.tools.saveCheckpoint({ revision: task.revision, completed });
    }
    return;
  }`);
  expect(code).not.toBe(REFERENCE);
  await page.locator('#code').fill(code);
  await page.locator('#runBtn').click();
  await expect(page.locator('#verdictTitle')).toHaveText('安全底线通过');
  await expect(page.locator('#feedbackScore')).toContainText('96');
  await expect(page.locator('#scoreline')).toContainText('2 组应交人工确认');
  await expect(page.locator('#scenarioSelect')).toHaveValue('changed');
  await expect(page.locator('#caseFinding')).toContainText('本组应交人工确认任务变化');
  await expect(page.locator('#caseFinding')).not.toContainText('本可以接着自动完成');
  await expect(page.locator('.resume-step.done')).toHaveCount(3);
  await expect(page.locator('.resume-step.bad')).toHaveCount(0);
  await page.locator('#copyResult').click();
  const text = await page.evaluate(() => window['copiedText']);
  await expectDiagnostics(page, text);
  expect(text).toContain('本组应交人工确认任务变化');
  expect(text).not.toContain('本可以接着自动完成');
  const shared = await expectShare(page, '安全底线通过', 20);
  expect(shared).toContain('96/100');
});

test('slow initialization keeps controls disabled until level scripts load', async ({ page }) => {
  let release: () => void = () => {};
  const gate = new Promise<void>(resolve => { release = resolve; });
  await page.route('**/challenges/02-resume/app.js', async route => { await gate; await route.continue(); });
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
