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

test('level 02 opens from the hub; starter exposes repeated execution, demo does not replace player code', async ({ page }) => {
  const errors: string[] = [], missing: string[] = [];
  page.on('pageerror', error => errors.push(error.message));
  page.on('response', response => { if (response.status() >= 400) missing.push(response.url()); });
  await page.goto('challenges/');
  await page.getByRole('link', { name: '进入第 02 关：任务中断，如何优化？' }).click();
  await expect(page.getByRole('heading', { name: '任务中断，如何优化？', exact: true })).toBeVisible();
  await expect(page.locator('#code')).toBeEditable();
  await expect(page.locator('#inspect')).toBeHidden();
  const starter = await page.locator('#code').inputValue();
  expect(starter).toContain('onResume');
  expect(starter).not.toContain('onRefundTimeout');
  await page.locator('#runBtn').click();
  await expect(page.locator('#verdictTitle')).toContainText('重复执行');
  await expect(page.locator('#feedbackScore')).toContainText('0');
  await expect(page.locator('.resume-step.bad')).not.toHaveCount(0);
  await expect(page.locator('#instanceState')).toHaveText('未通过 · 重复执行了已完成步骤');
  await page.screenshot({ path: 'test-results/resume-desktop-failed.png', fullPage: true });
  await page.locator('#code').fill(REFERENCE);
  await page.reload();
  await page.locator('#demoBtn').click();
  await expect(page.locator('#feedbackScore')).toContainText('示范');
  await expect(page.locator('#code')).toHaveValue(REFERENCE);
  await expect(page.locator('#shareBtn')).toBeDisabled();
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
  await page.locator('#scenarioSelect').selectOption('gap');
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
  await page.locator('#copyEditor').click();
  const packageText = await page.evaluate(() => window['copiedText']);
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
  await page.locator('#copyBtn').click();
  const shared = await page.evaluate(() => window['copiedText']);
  expect(shared).toContain('100/100');
  expect(shared).toContain(page.url());
  await page.keyboard.press('Escape');
  await page.locator('#code').fill(REFERENCE + '\n// 修改后待重测');
  await expect(page.locator('#shareBtn')).toBeDisabled();
  await expect(page.locator('#staleNote')).toBeVisible();
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
    await pass(page);
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
    await expect(page.locator('.resume-step')).toHaveCount(3);
    await expect(page.locator('.saved-state.saved')).toHaveCount(3);
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
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.locator('#replay').click();
  await expect(page.locator('#playState')).toContainText('减少动态效果');
  await expect(page.locator('.saved-state.saved')).toHaveCount(3);
});

test('Worker terminates an infinite loop; compile errors do not overwrite code or save scores', async ({ page }) => {
  await page.goto(levelPath);
  const badCode = 'export async function onResume(ctx) { while (true) {} }\nexport function canComplete(ctx) { return false; }';
  await page.locator('#code').fill(badCode);
  await page.locator('#runBtn').click();
  await expect(page.locator('#verdictTitle')).toHaveText('这次运行未能完成');
  await expect(page.locator('#scoreline')).toContainText('6 秒内没有跑完');
  await expect(page.locator('#code')).toBeEditable();
  await expect(page.locator('#shareBtn')).toBeDisabled();
  await page.locator('#rulesBtn').click();
  await expect(page.locator('#rulesDialog')).toBeVisible();
  await page.keyboard.press('Escape');
  const syntax = 'export async function onResume(ctx) { /';
  await page.locator('#code').fill(syntax);
  await page.locator('#runBtn').click();
  await expect(page.locator('#scoreline')).toContainText('语法错误');
  await expect(page.locator('#code')).toHaveValue(syntax);
  expect(await page.evaluate(key => localStorage.getItem(key + ':runs'), storage)).toBeNull();
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
