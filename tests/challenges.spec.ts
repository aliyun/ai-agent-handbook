import { test, expect } from "@playwright/test";

const levelPath = "challenges/01-refund-timeout/";
const storage = "agent-challenge:01-refund-timeout:v1";
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

async function captureClipboard(page) {
  await page.addInitScript(() => {
    Object.defineProperty(navigator.clipboard, "writeText", {
      configurable: true,
      value: async text => { window["copiedText"] = text; },
    });
  });
}

async function expectDiagnostics(page, text: string) {
  expect(text).toContain("# 本次运行诊断");
  const diagnostics = text.split("# 本次运行诊断")[1];
  expect(diagnostics).toContain("| 场景 / 组 | 种子 | 预期终态 | 实际终态 | 诊断 |");
  const table = diagnostics.split('## 全部测试概览\n\n')[1].split('\n\n')[0];
  expect(table.split('\n')).toHaveLength(24);
  const rows = diagnostics.split("\n").filter(line => /^\| .+ \/ \d+ \|/.test(line));
  expect(rows).toHaveLength(22);
  expect(new Set(rows.map(row => row.split("|")[1].trim())).size).toBe(22);
  for (const row of rows) {
    const cells = row.split("|").slice(1, -1).map(cell => cell.trim());
    expect(cells).toHaveLength(5);
    expect(cells[1]).toMatch(/^[\da-f]+$/i);
    expect(cells[2]).toMatch(/^(COMPLETED|WAITING_HUMAN)$/);
    expect(cells[3]).toMatch(/^(COMPLETED|WAITING_HUMAN|ABORTED)$/);
    expect(cells[4].length).toBeGreaterThan(0);
  }
  const group = await page.locator('#dots [aria-pressed="true"]').textContent();
  const scenario = (await page.locator("#scenarioSelect option:checked").textContent()).split(" · ")[0].slice(2);
  expect(diagnostics).toContain(`## 当前查看组：${scenario} / ${group}`);
  const seed = (await page.locator("#caseMeta").textContent()).match(/种子\s+([\da-f]+)/i)![1];
  expect(diagnostics).toContain(`种子：${seed}`);
  const trace = diagnostics.split("## 当前查看组：")[1];
  const traceCount = Number((await page.locator("#traceCount").textContent()).match(/\d+/)![0]);
  expect(trace.split("\n").filter(line => /^\d+(?:\.\d+)?s \[[A-Z]+\]/.test(line))).toHaveLength(traceCount);
  // The UI rewrites the final GATE sentence, but all original event messages must be present.
  for (const message of await page.locator("#log .row:not(.gate) .msg, #log .row.sep").allTextContents()) {
    expect(trace).toContain(message);
  }
  expect(trace).toContain("[实际状态]");
  return rows;
}

async function expectShare(page, verdict: string, appropriate: number) {
  await page.locator("#shareBtn").click();
  await expect(page.locator("#card")).toContainText(verdict);
  await expect(page.locator("#card")).toContainText("处理合适");
  await expect(page.locator("#card")).toContainText(`${appropriate}/22`);
  await page.locator("#copyBtn").click();
  const text = await page.evaluate(() => window["copiedText"]);
  expect(text).toContain(verdict);
  expect(text).toContain("处理合适");
  expect(text).toContain(`${appropriate}/22`);
  if (appropriate < 22) {
    await expect(page.locator("#card")).not.toContainText("本关通过");
    expect(text).not.toMatch(/本关通过|通过了全部\s*22\s*组|全部\s*22\s*组处理合适/);
  }
  await page.keyboard.press("Escape");
  return text;
}

test("home and nav open a static level hub, levels 01 and 02 are playable", async ({ page }) => {
  const errors: string[] = [];
  page.on("pageerror", error => errors.push(error.message));
  await page.goto("./");
  const challenge = page.locator(".hero-actions").getByRole("link", { name: "闯关游戏" });
  await expect(challenge.locator(".challenge-beta")).toHaveText("Beta");
  await expect(challenge).toHaveClass(/secondary/);
  await expect(page.locator(".hero-actions .primary")).toHaveCount(1);
  await expect(page.locator(".hero-actions .primary")).toContainText("开始阅读");
  await challenge.click();
  await expect(page.getByRole("heading", { name: "Agent 闯关游戏", exact: true })).toBeVisible();
  await expect(page.locator(".level")).toHaveCount(4);
  await expect(page.locator(".enter")).toHaveCount(2);
  await expect(page.locator(".level.available h2")).toHaveText(["Agent 退款超时，如何优化？", "任务中断，如何优化？"]);
  await expect(page.locator(".level.planned a")).toHaveCount(0);
  await expect(page.locator(".level.planned .state")).toHaveText(["筹备中", "筹备中"]);
  await expect(page.locator(".level.planned h2")).toHaveText(["记忆错了，如何优化？", "调用成本高，如何优化？"]);
  await expect(page.locator(".planned-note")).toHaveText(["敬请期待", "敬请期待"]);
  await expect(page.locator(".intro > p:last-child")).toHaveText("你来优化这些场景下 Agent 的处理逻辑，看看能拿多少分。");
  await expect(page.locator(".footer p")).toHaveCount(0);
  await page.screenshot({ path: "test-results/challenge-hub-desktop.png", fullPage: true });
  await page.getByRole("link", { name: "进入第 01 关：Agent 退款超时，如何优化？" }).click();
  await expect(page.locator("#code")).toBeEditable();
  await expect(page.locator("#inspect")).toBeHidden();
  await page.getByRole("link", { name: "返回关卡目录" }).click();
  await expect(page.locator(".level")).toHaveCount(4);
  await page.getByRole("link", { name: "返回手册首页" }).click();
  const navChallenge = page.locator(".VPNavBar").getByRole("link", { name: "闯关游戏" });
  await expect(navChallenge.locator(".challenge-beta")).toHaveText("Beta");
  await expect(navChallenge).toHaveAttribute("target", "_self");
  await navChallenge.click();
  await expect(page.locator(".level")).toHaveCount(4);
  expect(errors).toEqual([]);
});

test("mobile home: game entry and navigation both show Beta in light and dark themes", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("./");
  for (const dark of [false, true]) {
    await page.evaluate(dark => document.documentElement.classList.toggle("dark", dark), dark);
    await expect(page.locator(".hero-actions .challenge-beta")).toHaveText("Beta");
    await page.locator(".VPNavBarHamburger").click();
    const navChallenge = page.locator(".VPNavScreen").getByRole("link", { name: "闯关游戏" });
    await expect(navChallenge.locator(".challenge-beta")).toBeVisible();
    await expect(navChallenge).toHaveAttribute("target", "_self");
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
    await page.locator(".VPNavBarHamburger").click();
  }
  await page.locator(".VPNavBarHamburger").click();
  await page.locator(".VPNavScreen").getByRole("link", { name: "闯关游戏" }).click();
  await expect(page.locator(".level")).toHaveCount(4);
});

test("deep path: Worker scores, code persistence, copy package and share URL", async ({ page }) => {
  const errors: string[] = [];
  const missing: string[] = [];
  const leaderboardRequests: string[] = [];
  page.on("pageerror", error => errors.push(error.message));
  page.on("response", response => { if (response.status() >= 400) missing.push(response.url()); });
  page.on("request", request => { if (/leaderboard/i.test(request.url())) leaderboardRequests.push(request.url()); });
  await captureClipboard(page);
  await page.goto(levelPath);
  await expect(page.locator("#leaderboardBtn, #scoreActions, #submitDialog, #leaderboardDialog")).toHaveCount(0);
  await expect(page.locator(".underbench")).toHaveText("代码和成绩只保存在本机，不会上传。");
  const url = page.url();
  await page.evaluate(() => {
    localStorage.setItem("refund-once:code", "private-site-code");
    localStorage.setItem("agent-challenge:02-resume:v1:best", "100");
    localStorage.setItem("agent-challenge:01-refund-timeout:v2:best", "100");
  });
  await page.reload();
  await expect(page.locator("#code")).not.toHaveValue("private-site-code");
  await expect(page.locator("#copyResult")).toBeDisabled();
  await expect(page.locator("#resultTools")).toBeHidden();
  await page.locator("#copyEditor").click();
  expect(await page.evaluate(() => window["copiedText"])).not.toContain("# 本次运行诊断");
  await page.locator("#runBtn").click();
  await expect(page.locator("#verdictTitle")).toContainText("未通过");
  await expect(page.locator("#feedbackScore")).toContainText("0");
  await expect(page.locator("#progressNote")).toBeHidden();
  await expect(page.locator("#resultTools")).toBeVisible();
  await expect(page.locator("#copyResult")).toBeEnabled();
  await page.locator("#copyResult").click();
  await expectDiagnostics(page, await page.evaluate(() => window["copiedText"]));
  await expectShare(page, "未通过", 7);
  await page.locator("#code").fill(reference);
  await page.locator("#code").press("Control+Enter");
  await expect(page.locator("#verdictTitle")).toHaveText("本关通过");
  await expect(page.locator("#feedbackScore")).toContainText("96");
  await expect(page.locator("#scoreline")).toContainText("22 组");
  await expect(page.getByRole("button", { name: /排行榜|提交成绩/ })).toHaveCount(0);
  await page.screenshot({ path: "test-results/challenge-desktop-passed.png" });
  const production = page.locator("#productionHelp");
  await expect(production).toHaveJSProperty("open", false);
  await production.locator("summary").click();
  for (const text of ["不验证真实模型能力或生产可靠性", "幂等有效期", "同键参数", "作用域", "进程之外", "统一期限", "退避", "负责人", "接单确认", "恢复入口"]) await expect(production).toContainText(text);
  for (const anchor of ["_4-4-1-让任务脱离当前连接持续存在", "_4-6-1-针对失败类型选择恢复策略", "_4-6-2-让完成由证据决定"]) {
    await expect(production.locator(`a[href="../../build/chapter-04.html#${anchor}"]`)).toBeVisible();
  }
  await expect(page.locator("#nextLevel")).toHaveAttribute("href", "../02-resume/");
  await page.screenshot({ path: "test-results/challenge-production.png", fullPage: true });
  await production.locator("summary").click();
  expect(await page.evaluate(key => localStorage.getItem(key + ":runs"), storage)).toBe("2");
  expect(await page.evaluate(key => localStorage.getItem(key + ":best"), storage)).toBe("96");
  expect(await page.evaluate(() => localStorage.getItem("agent-challenge:02-resume:v1:best"))).toBe("100");
  // Select a non-default group: all three copy entry points must use this group's full trace.
  await page.locator("#scenarioSelect").selectOption("pending");
  await page.locator("#dots .dot").nth(2).click();
  await page.locator("#copyResult").click();
  const resultPackage = await page.evaluate(() => window["copiedText"]);
  await expectDiagnostics(page, resultPackage);
  await page.locator("#copyEditor").click();
  const packageText = await page.evaluate(() => window["copiedText"]);
  expect(packageText).toBe(resultPackage);
  expect(packageText).toContain(reference);
  expect(packageText).toContain("# 闯关说明");
  expect(packageText).toContain("# 接口速查");
  expect(packageText).toContain(url);
  expect(packageText).not.toContain("排行榜");
  await expect(page.locator("#status")).toContainText("粘贴即可替换");
  await page.locator("#rulesBtn").click();
  await page.locator("#copyRules").click();
  expect(await page.evaluate(() => window["copiedText"])).toBe(packageText);
  await page.keyboard.press("Escape");
  await page.locator("#shareBtn").click();
  await expect(page.locator("#card")).toContainText("本关通过");
  await expect(page.locator("#card")).toContainText("处理合适");
  await expect(page.locator("#card")).toContainText("22/22");
  await page.locator("#copyBtn").click();
  const share = await page.evaluate(() => window["copiedText"]);
  expect(share).toContain("96/100");
  expect(share).toContain(url);
  expect(share).toContain("本关通过");
  expect(share).toContain("处理合适");
  expect(share).toContain("22/22");
  await page.keyboard.press("Escape");
  await page.locator("#code").fill(reference + "\n// changed");
  await expect(page.locator("#shareBtn")).toBeDisabled();
  await expect(page.locator("#staleNote")).toBeVisible();
  await expect(page.locator("#copyResult")).toBeEnabled();
  await page.locator("#copyResult").click();
  const stale = await page.evaluate(() => window["copiedText"]);
  expect(stale).toContain("上次测试结果，不代表当前未测试代码");
  expect(stale).toContain("# 上次测试代码（仅此代码对应下面结果）\n\n```js\n" + reference + "\n```");
  expect(stale).toContain("# 当前代码（未测试，harness.js）\n\n```js\n" + reference + "\n// changed\n```");
  expect(stale).not.toContain("结果对应上面的当前代码");
  expect(stale.indexOf("96/100")).toBeGreaterThan(stale.indexOf("# 上次测试代码（仅此代码对应下面结果）"));
  await expectDiagnostics(page, stale);
  await page.locator("#copyEditor").click();
  expect(await page.evaluate(() => window["copiedText"])).toBe(stale);
  await page.locator("#rulesBtn").click();
  await page.locator("#copyRules").click();
  expect(await page.evaluate(() => window["copiedText"])).toBe(stale);
  await page.keyboard.press("Escape");
  await page.reload();
  await expect(page.locator("#code")).toHaveValue(reference + "\n// changed");
  await expect(page.locator("#shareBtn")).toBeDisabled();
  await expect(page.locator("#chapterLink")).toHaveAttribute("href", "../../build/chapter-04.html#_4-6-1-针对失败类型选择恢复策略");
  // GitHub Pages also serves the explicit index.html URL.
  await page.goto(levelPath + "index.html");
  await expect(page.locator("#code")).toBeEditable();
  expect(leaderboardRequests).toEqual([]);
  expect(missing).toEqual([]);
  expect(errors).toEqual([]);
});

for (const width of [320, 390]) {
  test(`mobile ${width}: hub, navigation, rules and copy controls`, async ({ page }) => {
    await page.setViewportSize({ width, height: 844 });
    await page.goto("challenges/");
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
    await page.screenshot({ path: `test-results/challenge-hub-mobile-${width}.png`, fullPage: true });
    await page.getByRole("link", { name: "进入第 01 关：Agent 退款超时，如何优化？" }).click();
    await expect(page.locator("#code")).toBeEditable();
    await expect(page.locator("#chapterLink")).toBeVisible();
    await expect(page.getByRole("link", { name: "返回关卡目录" })).toBeVisible();
    await expect(page.locator("#leaderboardBtn, #scoreActions, #submitDialog, #leaderboardDialog")).toHaveCount(0);
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
    await page.screenshot({ path: `test-results/challenge-mobile-${width}.png`, fullPage: true });
    await page.locator("#rulesBtn").click();
    await expect(page.locator("#copyRules")).toBeVisible();
    expect(await page.locator("#rulesDialog").evaluate(el => el.scrollWidth <= el.clientWidth)).toBe(true);
    await page.keyboard.press("Escape");
    await page.locator("#copyEditor").scrollIntoViewIfNeeded();
    await expect(page.locator("#copyEditor")).toBeVisible();
    await page.emulateMedia({ reducedMotion: "reduce" });
    await page.locator("#runBtn").click();
    await expect(page.locator("#verdictTitle")).toContainText("未通过");
    await expect(page.locator("#feedbackPanel")).toBeFocused();
    await expect(page.locator("#feedbackPanel")).toBeInViewport();
    await expect(page.locator("#verdictTitle")).toBeInViewport();
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
    await page.screenshot({ path: `test-results/challenge-diagnostics-mobile-${width}.png` });
  });
}

test("zero-score fixes, cautious handoff and unscored attempts preserve honest progress", async ({ page }) => {
  await captureClipboard(page);
  await page.goto(levelPath);
  const starter = await page.locator("#code").inputValue();
  await page.locator("#runBtn").click();
  await expect(page.locator("#verdictTitle")).toContainText("未通过");
  await expect(page.locator("#progressNote")).toBeHidden();
  await page.locator("#copyResult").click();
  const originalRows = await expectDiagnostics(page, await page.evaluate(() => window["copiedText"]));
  expect(originalRows.join("\n")).toContain("没有退款证据");

  // Only fix completion evidence: duplicate refunds still veto the score.
  const partial = starter.replace('return ctx.model.says === "done";', 'return ctx.evidence.some(e => e.status === "succeeded");');
  expect(partial).not.toBe(starter);
  await page.locator("#code").fill(partial);
  await page.locator("#runBtn").click();
  await expect(page.locator("#runBtn")).toBeEnabled();
  await expect(page.locator("#feedbackScore")).toContainText("0");
  await expect(page.locator("#verdictTitle")).toContainText("未通过");
  await expect(page.locator("#progressNote")).toBeVisible();
  for (const text of ["0 → 0 分", "违反底线 15 → 15 组", "处理合适 7 → 7 组", "修好 0 组", "新增违规 0 组"]) await expect(page.locator("#progressNote")).toContainText(text);
  await page.locator("#copyResult").click();
  const fixedRows = await expectDiagnostics(page, await page.evaluate(() => window["copiedText"]));
  expect(fixedRows.join("\n")).not.toContain("没有退款证据");
  expect(fixedRows.filter(row => row.includes("重复退款：")).length).toBe(15);

  const manual = 'export async function onRefundTimeout(ctx) { await ctx.tools.askHuman("请人工核实"); }\nexport function canComplete(ctx) { return false; }';
  await page.locator("#code").fill(manual);
  await page.locator("#runBtn").click();
  await expect(page.locator("#verdictTitle")).toHaveText("安全底线通过");
  await expect(page.locator("#feedbackScore")).toContainText("71");
  await expect(page.locator("#scoreline")).toContainText("1 组处理合适");
  const shared = await expectShare(page, "安全底线通过", 1);
  expect(shared).toContain("71/100");
  await page.locator("#copyResult").click();
  const manualPackage = await page.evaluate(() => window["copiedText"]);
  expect(manualPackage).toContain("安全底线通过；71/100");
  expect(manualPackage).toContain("处理合适 1/22 组");
  await expectDiagnostics(page, manualPackage);

  // Errors expose the demo entry again; neither may replace the 71-point baseline.
  const syntax = 'export async function onRefundTimeout(ctx) { /';
  await page.locator("#code").fill(syntax);
  await page.locator("#runBtn").click();
  await expect(page.locator("#scoreline")).toContainText("语法错误");
  await expect(page.locator("#progressNote")).toBeHidden();
  await page.locator("#demoBtn").click();
  await expect(page.locator("#feedbackScore")).toContainText("示范");
  await expect(page.locator("#code")).toHaveValue(syntax);
  await expect(page.locator("#copyResult")).toBeDisabled();
  await expect(page.locator("#resultTools")).toBeHidden();
  await expect(page.locator("#progressNote")).toBeHidden();
  await expect(page.locator("#shareBtn")).toBeDisabled();
  await page.locator("#copyEditor").click();
  const demoPackage = await page.evaluate(() => window["copiedText"]);
  expect(demoPackage).toContain(syntax);
  for (const text of ["# 本次运行诊断", "## 全部测试概览", "## 当前查看组", "71/100", "# 上次测试代码"]) expect(demoPackage).not.toContain(text);
  await page.locator("#rulesBtn").click();
  await page.locator("#copyRules").click();
  expect(await page.evaluate(() => window["copiedText"])).toBe(demoPackage);
  await page.keyboard.press("Escape");
  expect(await page.evaluate(key => localStorage.getItem(key + ":runs"), storage)).toBe("3");
  expect(await page.evaluate(key => localStorage.getItem(key + ":best"), storage)).toBe("71");
  await page.locator("#code").fill(reference);
  await page.locator("#runBtn").click();
  await expect(page.locator("#verdictTitle")).toHaveText("本关通过");
  for (const text of ["71 → 96 分", "违反底线 0 → 0 组", "处理合适 1 → 22 组", "修好 0 组", "新增违规 0 组"]) await expect(page.locator("#progressNote")).toContainText(text);
  expect(await page.evaluate(key => localStorage.getItem(key + ":runs"), storage)).toBe("4");
});

test("controls wait for initialization when scripts load slowly", async ({ page }) => {
  let release: () => void = () => {};
  const gate = new Promise<void>(resolve => { release = resolve; });
  await page.route("**/challenges/01-refund-timeout/app.js", async route => {
    await gate;
    await route.continue();
  });
  const navigation = page.goto(levelPath);
  try {
    await expect(page.locator("#rulesBtn")).toBeDisabled();
    await expect(page.locator("#runBtn")).toBeDisabled();
    await expect(page.locator("#code")).not.toBeEditable();
  } finally { release(); }
  await navigation;
  await expect(page.locator("#code")).toBeEditable();
  await expect(page.locator("#runBtn")).toBeEnabled();
  await page.locator("#rulesBtn").click();
  await expect(page.locator("#copyRules")).toBeVisible();
});

test("an infinite loop is terminated without freezing the page", async ({ page }) => {
  await captureClipboard(page);
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto(levelPath);
  const loop = "export async function onRefundTimeout(ctx) { while (true) {} }\nexport function canComplete(ctx) { return false; }";
  await page.locator("#code").fill(loop);
  await page.locator("#runBtn").click();
  await expect(page.locator("#feedbackPanel")).toHaveAttribute("aria-busy", "true");
  await page.locator("#rulesBtn").click();
  await page.locator("#copyRules").focus();
  await expect(page.locator("#verdictTitle")).toHaveText("这次运行未能完成");
  await expect(page.locator("#scoreline")).toContainText("6 秒内没有跑完");
  await expect(page.locator("#code")).toBeEditable();
  await expect(page.locator("#shareBtn")).toBeDisabled();
  await expect(page.locator("#rulesDialog")).toBeVisible();
  await expect(page.locator("#copyRules")).toBeFocused();
  await page.keyboard.press("Escape");
  await expect(page.locator("#resultTools")).toBeVisible();
  await expect(page.locator("#copyResult")).toBeEnabled();
  await page.locator("#copyResult").click();
  const timeoutPackage = await page.evaluate(() => window["copiedText"]);
  for (const text of ["# 闯关说明", "# 接口速查", "# 本次运行诊断", loop, "6 秒内没有跑完", "没有成绩"]) expect(timeoutPackage).toContain(text);
  expect(timeoutPackage).not.toContain("## 全部测试概览");
  await expect(page.locator("#progressNote")).toBeHidden();
  await page.locator("#rulesBtn").click();
  await expect(page.locator("#rulesDialog")).toBeVisible();
  await page.locator("#copyRules").click();
  expect(await page.evaluate(() => window["copiedText"])).toBe(timeoutPackage);
  await page.keyboard.press("Escape");
  const syntax = "export async function onRefundTimeout(ctx) { /";
  await page.locator("#code").fill(syntax);
  await page.locator("#runBtn").click();
  await expect(page.locator("#scoreline")).toContainText("语法错误");
  await expect(page.locator("#copyResult")).toBeEnabled();
  await page.locator("#copyResult").click();
  const syntaxPackage = await page.evaluate(() => window["copiedText"]);
  for (const text of ["# 闯关说明", "# 接口速查", "# 本次运行诊断", syntax, "语法错误", "没有成绩"]) expect(syntaxPackage).toContain(text);
  expect(syntaxPackage).not.toContain(loop);
  expect(syntaxPackage).not.toContain("## 全部测试概览");
  await expect(page.locator("#progressNote")).toBeHidden();
  expect(await page.evaluate(key => localStorage.getItem(key + ":runs"), storage)).toBeNull();
});
