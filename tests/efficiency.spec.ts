import { test, expect, type Page } from '@playwright/test';
import { REFERENCE, BASELINE } from '../challenges/04-efficiency/reference.js';

const levelPath = 'challenges/04-efficiency/';
const storage = 'agent-challenge:04-efficiency:v1';
const HUMAN = `export async function onOptimize(ctx) {
  const handoff = await ctx.tools.askHuman(ctx.task.tickets.map(t => t.ticketId), '待人工核实');
  await ctx.tools.saveReport(handoff.items.map(item => ({ ticketId:item.ticketId, decision:'WAITING_HUMAN', handoffReceiptId:item.receiptId })));
}
export function canComplete(ctx) { return ctx.report.status === 'saved' && ctx.report.coverageComplete; }`;

// An independent strategy: batch cheap proposals, retain accepted ones, upgrade only gaps/rejections.
const CASCADE = `export async function onOptimize(ctx) {
  const tickets = ctx.task.tickets;
  const query = await ctx.tools.queryOrders(tickets.map(t => t.orderId));
  const unknownOrders = query.items.filter(item => item.status !== 'confirmed').map(item => item.orderId);
  const unknown = tickets.filter(t => unknownOrders.includes(t.orderId)).map(t => t.ticketId);
  const ids = tickets.filter(t => !unknown.includes(t.ticketId)).map(t => t.ticketId);
  const rows = [];
  if (unknown.length) {
    const handoff = await ctx.tools.askHuman(unknown, '关键事实待核实');
    for (const item of handoff.items) rows.push({ticketId:item.ticketId,decision:'WAITING_HUMAN',handoffReceiptId:item.receiptId});
  }
  const proposals = await ctx.tools.infer('economy', ids);
  const candidates = [];
  for (const item of proposals.items) {
    if (ids.includes(item.ticketId) && item.status === 'candidate' && item.candidate && item.candidate.ticketId === item.ticketId && !candidates.some(c => c.ticketId === item.ticketId)) candidates.push(item.candidate);
  }
  if (candidates.length) {
    const checked = await ctx.tools.verify(candidates);
    for (const item of checked.items) if (item.status === 'accepted') {
      const candidate = candidates.find(c => c.ticketId === item.ticketId);
      rows.push({ticketId:item.ticketId,decision:candidate.decision,candidate,verificationReceiptId:item.receiptId});
    }
  }
  const missing = ids.filter(id => !rows.some(row => row.ticketId === id));
  if (missing.length) {
    const upgraded = await ctx.tools.infer('strong', missing);
    const fixes = upgraded.items.filter(item => item.status === 'candidate').map(item => item.candidate);
    const checked = await ctx.tools.verify(fixes);
    for (const item of checked.items) if (item.status === 'accepted') {
      const candidate = fixes.find(c => c.ticketId === item.ticketId);
      rows.push({ticketId:item.ticketId,decision:candidate.decision,candidate,verificationReceiptId:item.receiptId});
    }
  }
  await ctx.tools.saveReport(rows);
}
export function canComplete(ctx) { return ctx.report.status === 'saved' && ctx.report.coverageComplete; }`;

async function captureClipboard(page) {
  await page.addInitScript(() => {
    Object.defineProperty(navigator.clipboard, 'writeText', { configurable: true, value: async text => { window['copiedText'] = text; } });
  });
}
async function run(page, code = REFERENCE) {
  await page.locator('#code').fill(code);
  await page.locator('#runBtn').click();
  await expect(page.locator('#runBtn')).toBeEnabled();
}
async function pass(page) {
  await run(page);
  await expect(page.locator('#verdictTitle')).toHaveText('本关通过');
  await expect(page.locator('#feedbackScore')).toContainText('100');
}
async function copy(page, selector = '#copyResult') {
  await page.evaluate(() => { window['copiedText'] = null; });
  await page.locator(selector).click();
  return await page.evaluate(() => window['copiedText']) as string;
}
async function workerRun(page, code, seedBase = 2026) {
  return await page.evaluate(({ code, seedBase }) => new Promise<any>((resolve, reject) => {
    const worker = new Worker('worker.js');
    const timer = setTimeout(() => { worker.terminate(); reject(new Error('Worker timed out')); }, 10000);
    worker.onmessage = event => { clearTimeout(timer); worker.terminate(); resolve(event.data); };
    worker.onerror = error => { clearTimeout(timer); worker.terminate(); reject(new Error(error.message)); };
    worker.postMessage({ code, seedBase });
  }), { code, seedBase });
}

for (const colorScheme of ['light', 'dark'] as const) {
  test(`fourth level keeps the shared visual template under ${colorScheme} system preference`, async ({ page, context }) => {
    test.setTimeout(90_000);
    const referencePage = await context.newPage();
    const errors: string[] = [];
    for (const current of [page, referencePage]) current.on('pageerror', error => errors.push(error.message));
    const sharedStyles: Record<string, string[]> = {
      'body': ['backgroundColor', 'color', 'fontSize', 'fontFamily', 'lineHeight'],
      '.wrap': ['maxWidth', 'paddingLeft', 'paddingRight'],
      '.nav': ['minHeight', 'padding', 'gap', 'borderBottomColor'],
      '.brand': ['fontSize', 'fontFamily', 'gap', 'color'],
      '.nav-links': ['fontSize', 'gap'],
      '.eyebrow': ['fontSize', 'letterSpacing', 'color', 'display', 'gap'],
      'h1': ['fontSize', 'fontFamily', 'lineHeight', 'letterSpacing', 'margin'],
      '.intro .rules-trigger': ['backgroundColor', 'borderColor', 'padding', 'minHeight', 'fontSize'],
      '.bench': ['borderRadius', 'borderColor', 'boxShadow', 'scrollMarginTop'],
      '.bench-body': ['display', 'gridTemplateColumns', 'alignItems'],
      '.editor': ['backgroundColor', 'color', 'display', 'position'],
      '.editor .panel-heading': ['padding', 'gap', 'borderBottomColor'],
      '.panel-heading h2': ['fontSize', 'fontWeight', 'display', 'gap'],
      '.editor-caption': ['padding', 'fontSize', 'color', 'gap', 'flexWrap'],
      '.copy-agent': ['borderColor', 'color', 'padding', 'minHeight', 'fontSize'],
      '.editor-reference': ['margin', 'borderBottomColor'],
      '.editor-reference summary': ['minHeight', 'fontSize', 'display', 'listStyleType'],
      '.ed': ['height', 'fontSize', 'fontFamily', 'lineHeight', 'paddingTop', 'colorScheme'],
      '.gutter': ['width', 'padding', 'color'],
      '.hl': ['color', 'fontSize', 'fontFamily', 'lineHeight', 'padding'],
      '#code': ['color', 'caretColor', 'fontSize', 'fontFamily', 'lineHeight', 'padding'],
      '.editor .linkbtn': ['color', 'padding', 'minHeight', 'fontSize'],
      '.edit-bottom': ['padding', 'borderTopColor'],
      '.go': ['backgroundColor', 'color', 'borderColor', 'padding', 'minHeight', 'fontSize', 'borderRadius'],
      '.stage': ['backgroundColor', 'display', 'borderLeftWidth', 'borderLeftColor'],
      '.feedback': ['padding', 'gap', 'minHeight'],
      '.feedback-score': ['fontSize', 'fontFamily', 'minWidth', 'textAlign'],
      '.case-select select': ['fontSize', 'minHeight', 'padding', 'backgroundColor', 'borderColor'],
      '#rulesDialog': ['width', 'maxHeight', 'borderRadius', 'backgroundColor'],
      '#rulesDialog .dialog-head': ['padding', 'backgroundColor', 'gap'],
      '#rulesDialog .dialog-content': ['padding'],
      '.log': ['fontSize', 'maxHeight', 'padding', 'backgroundColor'],
      '.underbench': ['padding', 'fontSize', 'color', 'gap'],
    };
    const tokens = ['--bg', '--paper', '--text', '--muted', '--line', '--brand', '--brand-deep', '--cream', '--bench', '--bench-2', '--bench-line', '--bench-text', '--bench-muted', '--ok', '--wait', '--bad', '--serif', '--sans', '--mono'];
    try {
      for (const current of [page, referencePage]) await current.emulateMedia({ colorScheme, reducedMotion: 'reduce' });
      await referencePage.goto('challenges/03-memory/');
      await page.goto(levelPath);
      await expect(page.locator('#code')).toBeEditable();
      await expect(referencePage.locator('#code')).toBeEditable();
      for (const width of [1600, 1440, 1000, 900, 820, 390, 320]) {
        for (const current of [page, referencePage]) await current.setViewportSize({ width, height: 1000 });
        const capture = async (current: Page) => current.evaluate(({ sharedStyles, tokens }) => {
          const root = getComputedStyle(document.documentElement);
          const styles = Object.fromEntries(Object.entries(sharedStyles).map(([selector, properties]) => {
            const style = getComputedStyle(document.querySelector(selector)!);
            return [selector, Object.fromEntries(properties.map(property => [property, style.getPropertyValue(property.replace(/[A-Z]/g, letter => `-${letter.toLowerCase()}`))]))];
          }));
          return {
            styles,
            tokens: Object.fromEntries(tokens.map(token => [token, root.getPropertyValue(token).trim()])),
            eyebrowDot: getComputedStyle(document.querySelector('.eyebrow')!, '::before').content,
          };
        }, { sharedStyles, tokens });
        expect(await capture(page), `shared template at ${width}px / ${colorScheme}`).toEqual(await capture(referencePage));
        expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), `no horizontal overflow at ${width}px`).toBe(true);
        if (width === 1440 || width === 390) await page.screenshot({ path: `test-results/efficiency-shared-style-${width}-${colorScheme}.png`, fullPage: true });
      }
      for (const current of [page, referencePage]) {
        await current.locator('#rulesBtn').click();
        await expect(current.locator('#rulesDialog')).toBeVisible();
        expect(await current.locator('#rulesDialog').evaluate(el => el.scrollWidth <= el.clientWidth)).toBe(true);
      }
      const openDialog = async (current: Page) => current.locator('#rulesDialog').evaluate(el => {
        const bounds = el.getBoundingClientRect();
        return { x: bounds.x, width: bounds.width, backdrop: getComputedStyle(el, '::backdrop').backgroundColor };
      });
      expect(await openDialog(page)).toEqual(await openDialog(referencePage));
      expect(errors).toEqual([]);
    } finally {
      await referencePage.close();
    }
  });
}

test('beginner structure introduces the comparison before code without running a worker automatically', async ({ page }) => {
  await captureClipboard(page);
  await page.addInitScript(() => {
    window['workerStarts'] = 0;
    const OriginalWorker = window.Worker;
    window.Worker = class extends OriginalWorker {
      constructor(url: string | URL, options?: WorkerOptions) { super(url, options); window['workerStarts']++; }
    };
  });
  await page.goto(levelPath);
  await expect(page.locator('#code')).toBeEditable();
  expect(await page.evaluate(() => window['workerStarts'])).toBe(0);
  expect(await page.locator('#strategyIntro').evaluate(el => !!(el.compareDocumentPosition(document.querySelector('#bench')!) & Node.DOCUMENT_POSITION_FOLLOWING))).toBe(true);
  await expect(page.locator('#strategyTitle')).toHaveText('简单订单别都问强模型');
  await expect(page.locator('#learnBaselineCost')).toHaveText('—');
  await expect(page.locator('#learnReferenceCost')).toHaveText('—');
  expect(await page.locator('#strategyIntro').innerText()).not.toMatch(/22|132|verificationReceiptId|policyRevision/);
  expect(await page.locator('#apiHelp').getAttribute('open')).toBeNull();
  expect(await page.locator('#evaluationDetails').getAttribute('open')).toBeNull();
  expect(await page.locator('#scenarioSelect option').evaluateAll(options => options.map(option => (option as HTMLOptionElement).value))).toEqual(['rules', 'happy', 'mixed', 'confidence', 'partial']);
  await expect(page.locator('#ticketsBoard .ticket-evidence')).toHaveCount(6);
  const evidence = page.locator('#ticketsBoard .ticket-evidence').first();
  await expect(evidence.locator('dl')).toBeHidden();
  await evidence.locator('summary').focus();
  await page.keyboard.press('Enter');
  await expect(evidence.locator('dl')).toBeVisible();
  await expect(evidence).toContainText('未查询');
  await page.locator('#scenarioSelect').selectOption('partial');
  await expect(page.locator('#lessonNote')).toContainText('按工单编号补缺');
  await page.locator('#scenarioSelect').selectOption('rules');
  await page.locator('#rulesBtn').click();
  expect(await page.locator('#advancedRules').getAttribute('open')).toBeNull();
  const beginner = await page.locator('#rulesContent').innerText();
  expect(beginner).toContain('怎样算过关');
  expect(beginner).not.toMatch(/132|policyRevision|160 成本点/);
  await page.locator('#advancedRules > summary').click();
  await expect(page.locator('#advancedRules')).toContainText('22 批 × 6 单 = 132 单');
  await expect(page.locator('#advancedRules')).toContainText('160 成本点');
  expect(await copy(page, '#copyRules')).toContain('完整22批，无省略');
  await page.keyboard.press('Escape');
  expect(await page.evaluate(key => localStorage.getItem(key + ':runs'), storage)).toBeNull();
  await page.screenshot({ path: 'test-results/efficiency-beginner-desktop.png', fullPage: true });
});

for (const width of [1440, 390]) {
  test(`beginner demos compare actual same-batch bills without becoming personal results at ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: 900 });
    await page.emulateMedia({ colorScheme: 'dark', reducedMotion: 'reduce' });
    await page.addInitScript(({ storage }) => {
      localStorage.setItem(storage + ':code', '// 保存的玩家代码，不自动运行');
      localStorage.setItem('agent-challenge:03-memory:v1:code', 'third-level-code');
    }, { storage });
    await page.goto(levelPath);
    const code = await page.locator('#code').inputValue();
    const reference = (await workerRun(page, REFERENCE)).summary;
    const baseline = (await workerRun(page, BASELINE)).summary;
    const refBatch = reference.runs.find(r => r.scenario === 'rules' && r.index === 0);
    const baseBatch = baseline.runs.find(r => r.scenario === 'rules' && r.index === 0);
    expect(refBatch.seed).toBe(baseBatch.seed);
    expect(refBatch.results.map(r => r.state)).toEqual(baseBatch.results.map(r => r.state));
    const demos = width === 1440 ? [['#baselineBtn', '#learnBaselineCost', baseBatch], ['#demoBtn', '#learnReferenceCost', refBatch]] : [['#demoBtn', '#learnReferenceCost', refBatch], ['#baselineBtn', '#learnBaselineCost', baseBatch]];
    for (const [button, cost, batch] of demos) {
      await page.locator(button).click();
      await expect(page.locator(cost)).toHaveText(String(batch.cost.total));
      await expect(page.locator('#comparisonNote')).toBeFocused();
      await expect(page.locator('#code')).toHaveValue(code);
      await expect(page.locator('#feedbackScore')).toContainText('示范');
      await expect(page.locator('#shareBtn')).toBeDisabled();
      await expect(page.locator('#copyResult')).toBeDisabled();
      expect(await page.locator('#evaluationDetails').getAttribute('open')).toBeNull();
    }
    await expect(page.locator('#learnBaselineEffect')).toContainText('6/6');
    await expect(page.locator('#learnReferenceEffect')).toContainText('6/6');
    await expect(page.locator('#learnBaselineRoute')).toHaveText('查询 6 次 · 强模型 6 次 · 验证 6 单');
    await expect(page.locator('#learnReferenceRoute')).toHaveText('查询 1 次 · 规则 6 单 · 强模型 0 次 · 验证 6 单');
    await expect(page.locator('#comparisonNote')).toContainText(`${baseBatch.cost.total} → ${refBatch.cost.total}`);
    await expect(page.locator('#comparisonNote')).toContainText(`${Number((100 * (baseBatch.cost.total - refBatch.cost.total) / baseBatch.cost.total).toFixed(1))}%`);
    await expect(page.locator('#comparisonNote')).toContainText('不是你的成绩');
    expect(await page.evaluate(key => localStorage.getItem(key + ':runs'), storage)).toBeNull();
    expect(await page.evaluate(key => localStorage.getItem(key + ':best'), storage)).toBeNull();
    expect(await page.evaluate(() => localStorage.getItem('agent-challenge:03-memory:v1:code'))).toBe('third-level-code');
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
    await page.locator('#strategyIntro').screenshot({ path: `test-results/efficiency-beginner-comparison-${width}.png` });
    await page.locator('#strategyIntro a[href="#editor"]').click();
    await pass(page);
    await expect(page.locator('#evaluationSummary')).toContainText('132/132');
    await page.locator('#evaluationDetails > summary').click();
    await expect(page.locator('#totalCost')).toHaveText(String(reference.stats.totalCost));
    await expect(page.locator('#allCosts')).toContainText('全部批次');
    expect(await page.evaluate(key => localStorage.getItem(key + ':runs'), storage)).toBe('1');
    await page.screenshot({ path: `test-results/efficiency-beginner-results-${width}.png`, fullPage: true });
  });
}

test('failed demo clears its previous bill and never fabricates a cheaper comparison', async ({ page }) => {
  await page.goto(levelPath);
  await page.locator('#baselineBtn').click();
  await expect(page.locator('#learnBaselineCost')).not.toHaveText('—');
  await page.evaluate(() => { window.Worker = class { constructor() { throw new Error('Worker unavailable'); } } as any; });
  await page.locator('#baselineBtn').click();
  await expect(page.locator('#learnBaselineCost')).toHaveText('—');
  await expect(page.locator('#learnReferenceCost')).toHaveText('—');
  await expect(page.locator('#comparisonNote')).toContainText('不生成成本对比');
  await expect(page.locator('#comparisonNote')).not.toContainText('节省');
  await expect(page.locator('#learnBaselineEffect')).toHaveText('本次演示未完成');
  expect(await page.evaluate(key => localStorage.getItem(key + ':runs'), storage)).toBeNull();
});

test('ticket evidence keeps keyboard focus and expanded state while actual replay events refresh it', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'no-preference' });
  await page.goto(levelPath);
  await run(page, BASELINE);
  await page.locator('#replay').click();
  await expect(page.locator('#replay')).toHaveText('停止播放');
  const detail = page.locator('#ticketsBoard .ticket-evidence').first();
  const toggle = detail.locator('summary');
  await toggle.focus();
  await page.keyboard.press('Enter');
  await expect(detail).toHaveAttribute('open', '');
  await page.evaluate(() => {
    window['ticketRefreshes'] = 0;
    new MutationObserver(records => {
      window['ticketRefreshes'] += records.filter(record => record.type === 'childList').length;
    }).observe(document.querySelector('#ticketsBoard')!, { childList: true });
  });
  await expect.poll(() => page.evaluate(() => window['ticketRefreshes'])).toBeGreaterThan(0);
  await expect(toggle).toBeFocused();
  await expect(detail).toHaveAttribute('open', '');
  await page.keyboard.press('Enter');
  expect(await detail.getAttribute('open')).toBeNull();
  const before = await page.evaluate(() => window['ticketRefreshes']);
  await expect.poll(() => page.evaluate(() => window['ticketRefreshes'])).toBeGreaterThan(before);
  await expect(toggle).toBeFocused();
  expect(await detail.getAttribute('open')).toBeNull();
  await page.locator('#replay').click();
  await expect(page.locator('#playState')).toContainText('真实最终快照');
  await page.locator('#rulesBtn').click();
  await page.locator('#copyRules').focus();
  await expect(page.locator('#copyRules')).toBeFocused();
});

test('fourth level opens with six tickets and a complete copyable public contract', async ({ page }) => {
  const errors: string[] = [], missing: string[] = [];
  page.on('pageerror', error => errors.push(error.message));
  page.on('response', response => { if (response.status() >= 400) missing.push(response.url()); });
  await captureClipboard(page);
  await page.goto('challenges/');
  await page.getByRole('link', { name: '进入第 04 关：调用成本高，如何优化？' }).click();
  await expect(page.getByRole('heading', { name: '调用成本高，如何优化？', exact: true })).toBeVisible();
  await expect(page.locator('#code')).toBeEditable();
  await expect(page.locator('#ticketsBoard')).toBeVisible();
  await expect(page.locator('#copyResult')).toBeDisabled();
  const initial = await copy(page, '#copyEditor');
  for (const text of ['onOptimize', 'canComplete', 'queryOrders', 'applyRules', 'infer', 'verify', 'askHuman', 'saveReport', 'verificationReceiptId', 'handoffReceiptId', 'FACT_UNKNOWN', 'MISSING_EVIDENCE', '160', '132', 'confidence']) expect(initial).toContain(text);
  for (const text of ['onRecall', 'onResume', 'onRefundTimeout', 'queryProfile', 'saveCheckpoint', '排行榜']) expect(initial).not.toContain(text);
  await page.locator('#rulesBtn').click();
  expect(await copy(page, '#copyRules')).toBe(initial);
  await page.keyboard.press('Escape');
  await page.locator('#runBtn').click();
  await expect(page.locator('#verdictTitle')).toContainText('未通过');
  await expect(page.locator('#feedbackScore')).toHaveText(/^0\s*\/\s*100$/);
  await expect(page.locator('#scenarioSelect option')).toHaveCount(5);
  const exported = await copy(page);
  expect(exported).toContain('# 本次运行诊断');
  expect(exported).toContain('## 全部测试概览');
  expect(exported).toContain('成本');
  expect(exported).toContain('账本');
  expect(await copy(page, '#copyEditor')).toBe(exported);
  await page.screenshot({ path: 'test-results/efficiency-desktop-failed.png', fullPage: true });
  expect(errors).toEqual([]);
  expect(missing).toEqual([]);
});

test('worker scores actual costs: reference 100, conservative baseline 80, unnecessary human work not rewarded', async ({ page }) => {
  await page.goto(levelPath);
  for (const seedBase of [2026, 41]) {
    const reference = await workerRun(page, REFERENCE, seedBase);
    expect(reference.ok).toBe(true);
    const summary = reference.summary;
    expect(summary.score).toBe(100);
    expect(summary.optimized).toBe(true);
    expect(summary.stats.appropriate).toBe(132);
    expect(summary.stats.autoCorrect).toBe(130);
    expect(summary.stats.human).toBe(2);
    expect(summary.stats.reports).toBe(22);
    expect(summary.runs).toHaveLength(22);
    expect(summary.stats.totalCost).toBeLessThan(summary.stats.baselineCost);
    expect(summary.stats.savingsPercent).toBeGreaterThan(0);
    for (const batch of summary.runs) {
      expect(batch.failed).toBe(false);
      expect(batch.correct).toBe(true);
      expect(batch.results).toHaveLength(6);
      expect(batch.cost.ledger.reduce((total, row) => total + row.cost, 0)).toBe(batch.cost.total);
      expect(Object.values(batch.cost.byType).reduce((a: number, b: number) => a + b, 0)).toBe(batch.cost.total);
      expect(batch.report.coverageComplete).toBe(true);
      expect(batch.results.every(row => row.appropriate)).toBe(true);
    }
    const baseline = await workerRun(page, BASELINE, seedBase);
    expect(baseline.ok).toBe(true);
    expect(baseline.summary.score).toBe(80);
    expect(baseline.summary.optimized).toBe(false);
    expect(baseline.summary.stats.appropriate).toBe(132);
    expect(baseline.summary.stats.totalCost).toBe(summary.stats.baselineCost);
    expect(baseline.summary.parts.efficiency).toBe(0);
  }
  const cascade = await workerRun(page, CASCADE);
  expect(cascade.ok).toBe(true);
  expect(cascade.summary.passed).toBe(true);
  expect(cascade.summary.stats.appropriate).toBe(132);
  expect(cascade.summary.stats.reports).toBe(22);
  expect(cascade.summary.stats.totalCost).toBeLessThan(cascade.summary.stats.baselineCost);
  const human = await workerRun(page, HUMAN);
  expect(human.ok).toBe(true);
  expect(human.summary.passed).toBe(true);
  expect(human.summary.optimized).toBe(false);
  expect(human.summary.stats.appropriate).toBe(2);
  expect(human.summary.stats.reports).toBe(22);
  expect(human.summary.parts.efficiency).toBe(0);
  expect(human.summary.score).toBe(60);
  expect(human.summary.stats.savingsPercent).toBeNull();
});

test('worker protects shared builtins and cannot lose calls through prototype mutation', async ({ page }) => {
  await page.goto(levelPath);
  const mutation = `async function onOptimize(ctx) {
    const prototype=Object.getPrototypeOf(ctx.task.tickets), original=prototype.push;
    try { prototype.push=function(value) { if(value && value.attemptId) return this.length; return original.apply(this,arguments); }; } catch(error) {}
    for(let i=0;i<81;i++) { try { await ctx.tools.applyRules([]); } catch(error) {} }
  } function canComplete(ctx) { return false; }`;
  const rejected = await workerRun(page, mutation);
  expect(rejected.ok).toBe(true);
  expect(rejected.summary.score).toBe(0);
  expect(rejected.summary.failedBy.aborted).toEqual(['rules', 'mixed', 'confidence', 'partial', 'happy']);
  for (const batch of rejected.summary.runs) {
    expect(batch.cost.ledger).toHaveLength(81);
    expect(batch.cost.ledger[80].attemptId).toBe('a-81');
    expect(batch.gates.aborted).toBe(true);
  }
  const protectedHost = `async function onOptimize(ctx) {
    if(!Object.isFrozen(Object.getPrototypeOf(ctx.task.tickets)) || !Object.isSealed(Object.prototype) || !Object.isFrozen(Map.prototype) || !Object.isFrozen(JSON) || !Object.isFrozen(Object.getPrototypeOf(ctx.task.tickets[Symbol.iterator]())) || !Object.isFrozen(Object.getPrototypeOf(new Map().entries()))) throw new Error('宿主内建对象未保护');
    const local={toString(){return 'local';}};
    if(local.toString()!=='local') throw new Error('本地对象方法应当可用');
    const original=Object.prototype.hasOwnProperty;
    Object.prototype.hasOwnProperty=function(){return false;};
    try { await ctx.tools.queryOrders(ctx.task.tickets.map(t=>t.orderId)); }
    finally { Object.prototype.hasOwnProperty=original; }
    if(typeof ctx.tools.queryOrders.constructor !== 'undefined' || typeof Function !== 'undefined' || typeof eval !== 'undefined' || typeof postMessage !== 'undefined' || typeof globalThis.Function !== 'undefined' || typeof self.postMessage !== 'undefined' || typeof window.importScripts !== 'undefined' || typeof globalThis.ChallengeSim !== 'undefined' || typeof self.Sval !== 'undefined') throw new Error('动态执行或宿主出口未隔离');
  } function canComplete(ctx) { return false; }`;
  const safe = await workerRun(page, protectedHost);
  expect(safe.ok).toBe(true);
  expect(safe.summary.passed).toBe(true);
  expect(safe.summary.score).toBe(60);
  for (const batch of safe.summary.runs) {
    expect(batch.cost.total).toBe(3);
    expect(batch.cost.ledger).toHaveLength(1);
  }
});

test('reference explains all five scenarios, unknown handoffs, full diagnostics and honest sharing', async ({ page }) => {
  await captureClipboard(page);
  await page.goto(levelPath);
  await pass(page);
  await expect(page.locator('#scoreline')).toContainText('132');
  for (const id of ['rules', 'mixed', 'confidence', 'partial', 'happy']) {
    await page.locator('#scenarioSelect').selectOption(id);
    await expect(page.locator('#dots .dot')).toHaveCount(id === 'happy' ? 2 : 5);
    await expect(page.locator('#costTotal')).toBeVisible();
    await page.locator('#ledgerDetails').evaluate(el => { (el as HTMLDetailsElement).open = true; });
    await expect(page.locator('#costLedger')).toBeVisible();
    const text = await copy(page);
    const diagnostic = text.split('# 本次运行诊断')[1];
    expect(diagnostic).toBeTruthy();
    expect(diagnostic).toContain('132');
    const table = diagnostic.split('## 全部测试概览\n\n')[1].split('\n\n')[0];
    const tableRows = table.split('\n').filter(row => row.startsWith('|'));
    expect(tableRows).toHaveLength(24);
    expect(new Set(tableRows.slice(2).map(row => row.split('|')[1].trim())).size).toBe(22);
    const group = await page.locator('#dots [aria-pressed="true"]').textContent();
    const scenario = (await page.locator('#scenarioSelect option:checked').textContent()).split(' · ')[0].slice(2);
    expect(diagnostic).toContain(`## 当前查看组：${scenario} / ${group}`);
    const current = diagnostic.split('## 当前查看组：')[1];
    for (const message of await page.locator('#log .msg, #log .row.sep').allTextContents()) expect(current).toContain(message);
    expect(current).toContain('verificationReceiptId');
  }
  await page.locator('#scenarioSelect').selectOption('mixed');
  await page.screenshot({ path: 'test-results/efficiency-desktop-passed.png', fullPage: true });
  await page.locator('#productionHelp summary').click();
  for (const link of await page.locator('#productionHelp a').evaluateAll(links => links.map(link => (link as HTMLAnchorElement).href))) {
    expect((await page.request.get(link)).status()).toBe(200);
  }
  await page.locator('#shareBtn').click();
  await expect(page.locator('#card')).toContainText('本关通过');
  await expect(page.locator('#card')).toContainText('132');
  expect(await copy(page, '#copyBtn')).toContain('调用成本高，如何优化？');
  await page.keyboard.press('Escape');
  await run(page, BASELINE);
  await expect(page.locator('#feedbackScore')).toContainText('80');
  await expect(page.locator('#verdictTitle')).not.toHaveText('本关通过');
  await page.locator('#shareBtn').click();
  await expect(page.locator('#card')).not.toContainText('本关通过');
});

test('demos do not replace code or count as personal results; stale code remains distinct', async ({ page }) => {
  await captureClipboard(page);
  await page.addInitScript(() => localStorage.setItem('agent-challenge:03-memory:v1:code', 'third-level-code'));
  await page.goto(levelPath);
  await pass(page);
  const changed = REFERENCE + '\n// 当前未测试的修改';
  await page.locator('#code').fill(changed);
  await expect(page.locator('#staleNote')).toBeVisible();
  await expect(page.locator('#shareBtn')).toBeDisabled();
  const exported = await copy(page);
  expect(exported).toContain('# 当前代码（未测试，harness.js）');
  expect(exported).toContain('# 上次测试代码（仅此代码对应下面结果）');
  expect(exported).toContain(changed.trim());
  expect(await page.evaluate(() => localStorage.getItem('agent-challenge:03-memory:v1:code'))).toBe('third-level-code');
  await page.reload();
  await expect(page.locator('#code')).toHaveValue(changed);
  for (const button of ['#demoBtn', '#baselineBtn']) {
    await page.locator(button).click();
    await expect(page.locator('#feedbackScore')).toContainText('示范');
    await expect(page.locator('#code')).toHaveValue(changed);
    await expect(page.locator('#copyResult')).toBeDisabled();
    await expect(page.locator('#shareBtn')).toBeDisabled();
    expect(await copy(page, '#copyEditor')).not.toContain('# 本次运行诊断');
  }
  expect(await page.evaluate(key => localStorage.getItem(key + ':runs'), storage)).toBe('1');
  expect(await page.evaluate(key => localStorage.getItem(key + ':best'), storage)).toBe('100');
  expect(await page.evaluate(() => localStorage.getItem('agent-challenge:03-memory:v1:code'))).toBe('third-level-code');
});

test('syntax errors and infinite loops preserve code and cannot fabricate results', async ({ page }) => {
  await captureClipboard(page);
  await page.goto(levelPath);
  await run(page, 'export async function onOptimize(ctx) { /');
  await expect(page.locator('#scoreline')).toContainText('语法错误');
  expect(await copy(page)).toContain('运行未完成，没有成绩');
  const loop = 'export async function onOptimize(ctx) { while(true) {} }\nexport function canComplete(ctx) { return true; }';
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
  test(`six-ticket board, cost ledger and dialogs fit mobile ${width} in both themes`, async ({ page }) => {
    const errors: string[] = [];
    page.on('pageerror', error => errors.push(error.message));
    await page.setViewportSize({ width, height: 844 });
    await page.emulateMedia({ reducedMotion: 'reduce' });
    await page.goto(levelPath);
    await page.locator('#rulesBtn').click();
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
    expect(await page.locator('#rulesDialog').evaluate(el => el.scrollWidth <= el.clientWidth)).toBe(true);
    await page.screenshot({ path: `test-results/efficiency-rules-mobile-${width}.png`, fullPage: true });
    await page.keyboard.press('Escape');
    await pass(page);
    await expect(page.locator('#feedbackPanel')).toBeFocused();
    for (const scheme of ['light', 'dark'] as const) {
      await page.emulateMedia({ colorScheme: scheme });
      await page.locator('#scenarioSelect').selectOption('partial');
      expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
      await page.screenshot({ path: `test-results/efficiency-mobile-${width}-${scheme}.png`, fullPage: true });
    }
    expect(errors).toEqual([]);
  });
}

test('clipboard denial offers a complete task package and keyboard shortcut runs code', async ({ page }) => {
  await page.addInitScript(() => {
    Object.defineProperty(navigator.clipboard, 'writeText', { configurable: true, value: async () => { throw new Error('Clipboard denied'); } });
  });
  await page.goto(levelPath);
  const prompt = new Promise<string>(resolve => page.once('dialog', async dialog => {
    const value = dialog.defaultValue(); await dialog.dismiss(); resolve(value);
  }));
  await page.locator('#copyEditor').click();
  expect(await prompt).toContain('onOptimize');
  await page.locator('#code').fill(REFERENCE);
  await page.locator('#code').focus();
  await page.keyboard.press('ControlOrMeta+End');
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

test('worker startup failure never executes player code in the page', async ({ page }) => {
  await page.addInitScript(() => { window.Worker = class { constructor() { throw new Error('Worker unavailable'); } } as any; });
  await page.goto(levelPath);
  await run(page, 'document.body.dataset.unsafe = "ran";');
  await expect(page.locator('#scoreline')).toContainText('独立模拟器未能启动');
  expect(await page.locator('body').getAttribute('data-unsafe')).toBeNull();
  await expect(page.locator('#shareBtn')).toBeDisabled();
  expect(await page.evaluate(key => localStorage.getItem(key + ':runs'), storage)).toBeNull();
});

test('reference runs under CSP without eval or dynamic Function', async ({ page }) => {
  await page.route('**/challenges/04-efficiency/**', async route => {
    const response = await route.fetch();
    await route.fulfill({ response, headers: { ...response.headers(), 'content-security-policy': "default-src 'self'; script-src 'self'; worker-src 'self'; style-src 'self' 'unsafe-inline'; img-src 'self'" } });
  });
  await page.goto(levelPath);
  await pass(page);
});

test('replay stopping, switching and reduced motion restore actual final results and costs', async ({ page }) => {
  await page.goto(levelPath);
  await pass(page);
  const tickets = await page.locator('#ticketsBoard').textContent();
  const total = await page.locator('#costTotal').textContent();
  await page.locator('#replay').click();
  await expect(page.locator('#replay')).toHaveText('停止播放');
  await page.locator('#replay').click();
  await expect(page.locator('#ticketsBoard')).toHaveText(tickets);
  await expect(page.locator('#costTotal')).toHaveText(total);
  await page.locator('#replay').click();
  await page.locator('#scenarioSelect').selectOption('happy');
  await expect(page.locator('#replay')).toHaveText('播放过程');
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.locator('#replay').click();
  await expect(page.locator('#playState')).toContainText('减少动态效果');
});

test('slow loading keeps controls disabled until fourth-level initialization', async ({ page }) => {
  let release = () => {};
  const gate = new Promise<void>(resolve => { release = resolve; });
  await page.route('**/challenges/04-efficiency/app.js', async route => { await gate; await route.continue(); });
  const navigation = page.goto(levelPath);
  try {
    await expect(page.locator('#runBtn')).toBeDisabled();
    await expect(page.locator('#rulesBtn')).toBeDisabled();
    await expect(page.locator('#baselineBtn')).toBeDisabled();
    await expect(page.locator('#demoBtn')).toBeDisabled();
    await expect(page.locator('#learnBaselineCost')).toHaveText('—');
    await expect(page.locator('#learnReferenceCost')).toHaveText('—');
    await expect(page.locator('#code')).not.toBeEditable();
  } finally { release(); }
  await navigation;
  await expect(page.locator('#code')).toBeEditable();
});
