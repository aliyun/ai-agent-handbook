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

test("home and nav open a static level hub, only level 01 is playable", async ({ page }) => {
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
  await expect(page.locator(".enter")).toHaveCount(1);
  await expect(page.locator(".level.planned a")).toHaveCount(0);
  await expect(page.locator(".level.planned .state")).toHaveText(["筹备中", "筹备中", "筹备中"]);
  await expect(page.locator(".level.planned h2")).toHaveText(["任务中断，如何优化？", "记忆错了，如何优化？", "调用成本高，如何优化？"]);
  await expect(page.locator(".planned-note")).toHaveText(["敬请期待", "敬请期待", "敬请期待"]);
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
  page.on("pageerror", error => errors.push(error.message));
  page.on("response", response => { if (response.status() >= 400) missing.push(response.url()); });
  await captureClipboard(page);
  await page.goto(levelPath);
  const url = page.url();
  await page.evaluate(() => {
    localStorage.setItem("refund-once:code", "private-site-code");
    localStorage.setItem("agent-challenge:02-resume:v1:best", "100");
    localStorage.setItem("agent-challenge:01-refund-timeout:v2:best", "100");
  });
  await page.reload();
  await expect(page.locator("#code")).not.toHaveValue("private-site-code");
  await page.locator("#runBtn").click();
  await expect(page.locator("#verdictTitle")).toContainText("未通过");
  await expect(page.locator("#feedbackScore")).toContainText("0");
  await page.locator("#code").fill(reference);
  await page.locator("#code").press("Control+Enter");
  await expect(page.locator("#verdictTitle")).toHaveText("本关通过");
  await expect(page.locator("#feedbackScore")).toContainText("96");
  await expect(page.locator("#scoreline")).toContainText("22 组");
  expect(await page.evaluate(key => localStorage.getItem(key + ":runs"), storage)).toBe("2");
  expect(await page.evaluate(key => localStorage.getItem(key + ":best"), storage)).toBe("96");
  expect(await page.evaluate(() => localStorage.getItem("agent-challenge:02-resume:v1:best"))).toBe("100");
  await page.locator("#copyEditor").click();
  const packageText = await page.evaluate(() => window["copiedText"]);
  expect(packageText).toContain(reference);
  expect(packageText).toContain("# 闯关说明");
  expect(packageText).toContain("# 接口速查");
  expect(packageText).toContain(url);
  await expect(page.locator("#status")).toContainText("粘贴即可替换");
  await page.locator("#rulesBtn").click();
  await page.locator("#copyRules").click();
  expect(await page.evaluate(() => window["copiedText"])).toBe(packageText);
  await page.keyboard.press("Escape");
  await page.locator("#shareBtn").click();
  await page.locator("#copyBtn").click();
  const share = await page.evaluate(() => window["copiedText"]);
  expect(share).toContain("96/100");
  expect(share).toContain(url);
  await page.keyboard.press("Escape");
  await page.locator("#code").fill(reference + "\n// changed");
  await expect(page.locator("#shareBtn")).toBeDisabled();
  await expect(page.locator("#staleNote")).toBeVisible();
  await page.reload();
  await expect(page.locator("#code")).toHaveValue(reference + "\n// changed");
  await expect(page.locator("#shareBtn")).toBeDisabled();
  await expect(page.locator("#chapterLink")).toHaveAttribute("href", "../../build/chapter-04.html");
  // GitHub Pages also serves the explicit index.html URL.
  await page.goto(levelPath + "index.html");
  await expect(page.locator("#code")).toBeEditable();
  expect(missing).toEqual([]);
  expect(errors).toEqual([]);
});

for (const width of [320, 390]) {
  test(`mobile ${width}: hub, navigation, rules and copy controls`, async ({ page }) => {
    await page.setViewportSize({ width, height: 844 });
    await page.goto("challenges/");
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
    await page.screenshot({ path: `test-results/challenge-hub-mobile-${width}.png`, fullPage: true });
    await page.locator(".enter").click();
    await expect(page.locator("#code")).toBeEditable();
    await expect(page.locator("#chapterLink")).toBeVisible();
    await expect(page.getByRole("link", { name: "返回关卡目录" })).toBeVisible();
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
    await page.screenshot({ path: `test-results/challenge-mobile-${width}.png`, fullPage: true });
    await page.locator("#rulesBtn").click();
    await expect(page.locator("#copyRules")).toBeVisible();
    expect(await page.locator("#rulesDialog").evaluate(el => el.scrollWidth <= el.clientWidth)).toBe(true);
    await page.keyboard.press("Escape");
    await page.locator("#copyEditor").scrollIntoViewIfNeeded();
    await expect(page.locator("#copyEditor")).toBeVisible();
  });
}

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
  await page.goto(levelPath);
  await page.locator("#code").fill("export async function onRefundTimeout(ctx) { while (true) {} }\nexport function canComplete(ctx) { return false; }");
  await page.locator("#runBtn").click();
  await expect(page.locator("#verdictTitle")).toHaveText("这次运行未能完成");
  await expect(page.locator("#scoreline")).toContainText("6 秒内没有跑完");
  await expect(page.locator("#code")).toBeEditable();
  await expect(page.locator("#shareBtn")).toBeDisabled();
  await page.locator("#rulesBtn").click();
  await expect(page.locator("#rulesDialog")).toBeVisible();
});
