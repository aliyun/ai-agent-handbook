import { test as base, expect, type Page } from '@playwright/test';
import { mkdtemp, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { createLeaderboardServer } from '../challenges/leaderboard/server.mjs';

const levelPath = 'challenges/01-refund-timeout/';
const level = '01-refund-timeout';
const version = 'v1';
const reference = `export async function onRefundTimeout(ctx) {
  const key = ctx.attempts[0].idempotencyKey;
  let r = await ctx.tools.refund(ctx.order.id, ctx.order.amount, { idempotencyKey: key });
  while (r.status === "processing") {
    if (ctx.now() > 70) return ctx.tools.askHuman("银行一直在处理，超时未出结果");
    await ctx.tools.wait(6);
    r = await ctx.tools.queryRefund(ctx.order.id);
  }
}
export function canComplete(ctx) {
  return ctx.evidence.some(e => e.status === "succeeded");
}`;
const test = base.extend<{ apiUrl: string }>({
  apiUrl: async ({ baseURL }, use) => {
    const directory = await mkdtemp(join(tmpdir(), 'handbook-leaderboard-browser-'));
    const server = createLeaderboardServer({
      dataFile: join(directory, 'scores.json'),
      allowedOrigins: [new URL(baseURL!).origin],
      rateLimit: { limit: 100 },
    });
    try {
      await new Promise<void>(resolve => server.listen(0, '127.0.0.1', resolve));
      const address = server.address();
      await use(`http://127.0.0.1:${typeof address === 'object' && address ? address.port : 0}/api/leaderboard`);
    } finally {
      await new Promise<void>(resolve => server.close(() => resolve()));
      await rm(directory, { recursive: true, force: true });
    }
  },
});
async function configure(page: Page, apiUrl: string) {
  await page.route('**/leaderboard-config.js', route => route.fulfill({
    contentType: 'text/javascript', body: `window.ChallengeLeaderboardConfig = ${JSON.stringify({ apiUrl })};`,
  }));
}
async function pass(page: Page) {
  await page.locator('#code').fill(reference);
  await page.locator('#runBtn').click();
  await expect(page.locator('#verdictTitle')).toHaveText('本关通过');
  await expect(page.locator('#feedbackScore')).toContainText('96');
}
async function submit(page: Page, id: string, homepage: string) {
  await page.locator('#submitScoreBtn').click();
  await expect(page.locator('#submissionScore')).toHaveText('96');
  await page.locator('#githubId').fill(id);
  await page.locator('#homepage').fill(homepage);
  await page.locator('#confirmScoreBtn').click();
  await expect(page.locator('#submitStatus')).toHaveClass(/success/);
}

test('real service: submit, another browser sees score, repeat preserves timestamp, stale score cannot submit', async ({ page, browser, apiUrl }) => {
  const errors: string[] = [];
  page.on('pageerror', error => errors.push(error.message));
  await configure(page, apiUrl);
  await page.goto(levelPath);
  await expect(page.locator('#leaderboardBtn')).toHaveText('闯关排行榜');
  await expect(page.locator('#scoreActions')).toBeHidden();
  await page.locator('#demoBtn').click();
  await expect(page.locator('#feedbackScore')).toContainText('示范');
  await expect(page.locator('#scoreActions')).toBeHidden();
  await pass(page);
  await submit(page, 'octocat', 'https://example.com/about?from=game');
  await page.locator('#viewLeaderboardBtn').click();
  await expect(page.locator('#leaderboardTitle')).toHaveText('第 01 关 · 闯关排行榜');
  await expect(page.locator('#leaderboardDialog')).toContainText('每关独立排行');
  await expect(page.locator('#leaderboardRows tr')).toHaveCount(1);
  const link = page.locator('#leaderboardRows a');
  await expect(link).toHaveText('octocat');
  await expect(link).toHaveAttribute('href', 'https://example.com/about?from=game');
  await expect(link).toHaveAttribute('rel', 'noopener noreferrer');
  const firstTime = await page.locator('#leaderboardRows time').getAttribute('datetime');
  await page.screenshot({ path: 'test-results/leaderboard-desktop.png' });
  // 主页内容使用测试替身，验证真实点击与新窗口，不访问外部网站。
  await page.context().route('https://example.com/**', route => route.fulfill({ contentType: 'text/html', body: '<title>Test homepage</title>' }));
  const popupReady = page.waitForEvent('popup');
  await link.click();
  const popup = await popupReady;
  await popup.waitForLoadState('domcontentloaded');
  expect(popup.url()).toBe('https://example.com/about?from=game');
  await popup.close();
  const other = await browser.newContext();
  try {
    const anotherPage = await other.newPage();
    await configure(anotherPage, apiUrl);
    await anotherPage.goto(page.url());
    await anotherPage.locator('#leaderboardBtn').click();
    await expect(anotherPage.locator('#leaderboardRows a')).toHaveText('octocat');
    await expect(anotherPage.locator('#leaderboardRows time')).toHaveAttribute('datetime', firstTime!);
  } finally { await other.close(); }
  await page.keyboard.press('Escape');
  await submit(page, 'Octocat', 'https://example.com/changed');
  await expect(page.locator('#submitStatus')).toContainText('原提交时间不变');
  await page.locator('#viewLeaderboardBtn').click();
  await expect(page.locator('#leaderboardRows tr')).toHaveCount(1);
  await expect(link).toHaveAttribute('href', 'https://example.com/about?from=game');
  await expect(page.locator('#leaderboardRows time')).toHaveAttribute('datetime', firstTime!);
  await page.keyboard.press('Escape');
  await page.locator('#code').fill(reference + '\n// modified');
  await expect(page.locator('#scoreActions')).toBeHidden();
  await expect(page.locator('#submitScoreBtn')).toBeDisabled();
  await page.reload();
  await expect(page.locator('#scoreActions')).toBeHidden();
  expect(errors).toEqual([]);
});

for (const width of [320, 390]) {
  test(`mobile ${width}: TOP20, score order, time order, long ID, HTTPS validation and submission form`, async ({ page, request, apiUrl }) => {
    for (let i = 0; i < 24; i++) {
      const githubId = i === 0 ? 'a'.repeat(39) : `player-${i}`;
      const response = await request.post(apiUrl, { data: { level, version, githubId, homepage: 'https://example.com/', score: i < 3 ? 100 : 96 - i } });
      expect(response.ok()).toBe(true);
    }
    await configure(page, apiUrl);
    await page.setViewportSize({ width, height: 844 });
    await page.goto(levelPath);
    await page.locator('#leaderboardBtn').click();
    await expect(page.locator('#leaderboardRows tr')).toHaveCount(20);
    await expect(page.locator('#leaderboardRows a').nth(0)).toHaveText('a'.repeat(39));
    await expect(page.locator('#leaderboardRows a').nth(1)).toHaveText('player-1');
    await expect(page.locator('#leaderboardRows a').nth(2)).toHaveText('player-2');
    await expect(page.locator('#leaderboardStatus')).toContainText('24 人');
    expect(await page.locator('#leaderboardDialog').evaluate(el => el.scrollWidth <= el.clientWidth)).toBe(true);
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
    await page.screenshot({ path: `test-results/leaderboard-mobile-${width}.png` });
    await page.keyboard.press('Escape');
    await pass(page);
    await page.locator('#submitScoreBtn').click();
    await page.locator('#githubId').fill('mobile-player');
    await page.locator('#homepage').fill('http://example.com/');
    await page.locator('#confirmScoreBtn').click();
    await expect(page.locator('#submitStatus')).toContainText('HTTPS');
    await page.locator('#homepage').fill('https://example.com/me');
    expect(await page.locator('#submitDialog').evaluate(el => el.scrollWidth <= el.clientWidth)).toBe(true);
    await page.screenshot({ path: `test-results/leaderboard-submit-mobile-${width}.png` });
    await page.locator('#confirmScoreBtn').click();
    await expect(page.locator('#submitStatus')).toHaveClass(/success/);
  });
}

test('unconfigured service: no fake entries or uploads, play remains available', async ({ page }) => {
  let apiCalls = 0;
  page.on('request', req => { if (req.url().includes('/api/leaderboard')) apiCalls++; });
  await configure(page, '');
  await page.goto(levelPath);
  await page.locator('#leaderboardBtn').click();
  await expect(page.locator('#leaderboardStatus')).toContainText('尚未接通');
  await expect(page.locator('#leaderboardTableWrap')).toBeHidden();
  await page.keyboard.press('Escape');
  await pass(page);
  await expect(page.locator('#submitScoreBtn')).toBeDisabled();
  await expect(page.locator('#leaderboardAvailability')).toContainText('尚未接通');
  expect(apiCalls).toBe(0);
});

test('mismatched submission response is not reported as success', async ({ page, apiUrl }) => {
  await configure(page, apiUrl);
  await page.goto(levelPath);
  await pass(page);
  await page.locator('#submitScoreBtn').click();
  await page.locator('#githubId').fill('response-player');
  await page.locator('#homepage').fill('https://example.com/');
  // 异常回包测试替身，不写入真实服务。
  for (const wrong of [
    { status: 'created', githubId: 'somebody-else', score: 96 },
    { status: 'created', githubId: 'response-player', score: 60 },
    { status: 'unchanged', githubId: 'response-player', score: 60 },
  ]) {
    const entry = { rank: 1, githubId: wrong.githubId, score: wrong.score, homepage: 'https://example.com/', submittedAt: new Date().toISOString() };
    await page.route(apiUrl, route => route.request().method() === 'OPTIONS' ? route.continue() : route.fulfill({
      contentType: 'application/json', headers: { 'Access-Control-Allow-Origin': new URL(page.url()).origin },
      body: JSON.stringify({ status: wrong.status, entry, entries: [entry], total: 1 }),
    }));
    await page.locator('#confirmScoreBtn').click();
    await expect(page.locator('#submitStatus')).toContainText('与本次提交不一致');
    await expect(page.locator('#submitStatus')).toHaveClass(/error/);
    await expect(page.locator('#viewLeaderboardBtn')).toBeHidden();
    await page.unroute(apiUrl);
  }
});

test('network failure: no false success, retry is available, duplicate clicks create one submission', async ({ page, apiUrl }) => {
  await configure(page, apiUrl);
  await page.goto(levelPath);
  await pass(page);
  await page.route(apiUrl + '**', route => route.abort('failed'));
  await page.locator('#submitScoreBtn').click();
  await page.locator('#githubId').fill('retry-player');
  await page.locator('#homepage').fill('https://example.com/');
  await page.locator('#confirmScoreBtn').click();
  await expect(page.locator('#submitStatus')).toHaveClass(/error/);
  await expect(page.locator('#viewLeaderboardBtn')).toBeHidden();
  await expect(page.locator('#confirmScoreBtn')).toBeEnabled();
  await page.unroute(apiUrl + '**');
  let release: () => void = () => {};
  const gate = new Promise<void>(resolve => { release = resolve; });
  let postCount = 0;
  await page.route(apiUrl, async route => {
    if (route.request().method() === 'POST') { postCount++; await gate; }
    await route.continue();
  });
  await page.locator('#confirmScoreBtn').click();
  try {
    await expect(page.locator('#confirmScoreBtn')).toBeDisabled();
    await page.locator('#leaderboardForm').evaluate(form => {
      form.dispatchEvent(new Event('submit', { bubbles: true, cancelable: true }));
    });
  } finally { release(); }
  await expect(page.locator('#submitStatus')).toHaveClass(/success/);
  expect(postCount).toBe(1);
});
