import { test, expect, type Page } from "@playwright/test";

// The 3D chapter is rendered without a GPU in headless CI, so allow slow but real frames.
test.describe.configure({ timeout: 360_000 });

const snapshot = (page: Page) => page.evaluate(() => (window as any).__auditSea.snapshot());
async function ready(page: Page) {
  await page.waitForFunction(() => (window as any).__auditSea?.snapshot().ready);
}
async function openMap(page: Page) {
  await page.keyboard.press("Escape");
  await page.waitForFunction(() => {
    const s = (window as any).__auditSea.snapshot();
    return s.mapOpen && !s.mapBusy;
  });
}
async function choose(page: Page, level: "observe" | "audit") {
  const map = page.frameLocator("#mapLayer");
  await map.locator(`#level-${level}`).click();
  await map.locator("#playLink").click();
  await page.waitForFunction(() => {
    const s = (window as any).__auditSea.snapshot();
    return !s.mapOpen && !s.mapBusy;
  });
}

for (const width of [1440, 390]) {
  test(`separate code and game entrances, five chapter help at ${width}px`, async ({ page }) => {
    const errors: string[] = [];
    page.on("pageerror", e => errors.push(e.message));
    await page.setViewportSize({ width, height: 900 });
    await page.goto("./");
    const code = page.locator(".hero-actions").getByRole("link", { name: /代码实战/ });
    const games = page.locator(".hero-actions").getByRole("link", { name: /游戏闯关/ });
    await expect(code).toHaveAttribute("href", /\/challenges\/$/);
    await expect(games).toHaveAttribute("href", /\/games\/$/);
    const [a, b] = await Promise.all([code.boundingBox(), games.boundingBox()]);
    expect(Math.abs(a!.y - b!.y)).toBeLessThan(1);
    await games.click();
    await expect(page).toHaveURL(/\/games\/$/);
    const help = page.locator(width === 390 ? "#mobileWorldInfo" : "#worldInfo");
    await expect(help).toHaveText("游戏说明");
    await help.click();
    await expect(page.locator("#helpTabs button")).toHaveCount(5);
    for (const [i, id] of ["observe", "audit", "evaluate", "experiment", "optimize"].entries()) {
      await page.locator(`#help-${id}`).click();
      await expect(page.locator("#helpChapterStatus")).toHaveText(i < 2 ? "已开放" : "开发中");
      if (i >= 2) await expect(page.locator("#helpGameplay")).toContainText("玩法尚未开放");
      const d = await page.locator("#worldDialog").evaluate(el => ({ client: el.clientWidth, scroll: el.scrollWidth }));
      expect(d.scroll).toBeLessThanOrEqual(d.client + 1);
    }
    await page.keyboard.press("Escape");
    await page.locator("#level-evaluate").click();
    await expect(page.locator("#playLink")).toBeHidden();
    await page.locator("#level-observe").click();
    await expect(page.locator("#playLink")).toHaveAttribute("href", "audit-sea.html?level=0");
    await page.screenshot({ path: `test-results/game-map-${width}.png` });
    expect(errors).toEqual([]);
  });
}

test("hosted v16 defaults to exterior and preserves both games across map navigation", async ({ page }) => {
  const errors: string[] = [];
  page.on("pageerror", e => errors.push(e.message));
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("games/audit-sea.html");
  await ready(page);
  expect(await page.evaluate(() => Object.keys((window as any).__auditSea))).toEqual(["snapshot"]);
  await expect(page.locator("#viewBtn")).toHaveText("视角：外部");
  await expect(page.locator("#gateLabel span")).toHaveText("");
  await page.locator("#start").click();
  const initial = await snapshot(page);
  await page.keyboard.down("w");
  await expect.poll(async () => (await snapshot(page)).player.z).toBeLessThan(initial.player.z - 1);
  await page.keyboard.up("w");
  expect((await snapshot(page)).player.z).toBeLessThan(initial.player.z - 1);
  await page.keyboard.press("c");
  const sea = await snapshot(page);
  expect(sea.camera.mode).toBe("cockpit");
  expect(sea.cockpit.loopieCount).toBe(2);
  expect(sea.exteriorAppearance.opaqueRearHull).toBe(true);
  await openMap(page);
  await choose(page, "observe");
  await page.waitForFunction(() => (window as any).__auditSea.snapshot().navigation.firstReady);
  const first = page.frames().find(f => /\/lighthouse\.html\?host=1$/.test(f.url()))!;
  expect(first).toBeTruthy();
  await first.waitForFunction(() => (window as any).__platformer?.snapshot().state === "playing");
  const before = await first.evaluate(() => (window as any).__platformer.snapshot());
  await page.keyboard.down("ArrowRight");
  await expect.poll(() => first.evaluate(() => (window as any).__platformer.snapshot().player.x)).toBeGreaterThan(before.player.x + 35);
  await page.keyboard.up("ArrowRight");
  await openMap(page);
  const frozen = await first.evaluate(() => (window as any).__platformer.snapshot());
  await choose(page, "audit");
  expect((await snapshot(page)).counts).toEqual(sea.counts);
  expect((await snapshot(page)).camera.mode).toBe(sea.camera.mode);
  expect(await first.evaluate(() => (window as any).__platformer.snapshot())).toEqual(frozen);
  await openMap(page);
  await choose(page, "observe");
  await first.waitForFunction(() => (window as any).__platformer.snapshot().state === "playing");
  expect((await first.evaluate(() => (window as any).__platformer.snapshot())).attempts).toBe(frozen.attempts);
  await page.screenshot({ path: "test-results/game-first-restored.png" });
  expect(errors).toEqual([]);
});

test("direct first-chapter links use the shared host without losing map round-trip progress", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("games/lighthouse.html");
  await expect(page).toHaveURL(/\/games\/audit-sea\.html\?level=0$/);
  await ready(page);
  await page.waitForFunction(() => (window as any).__auditSea.snapshot().navigation.firstReady);
  const first = page.frames().find(f => /\/lighthouse\.html\?host=1$/.test(f.url()))!;
  await first.waitForFunction(() => (window as any).__platformer.snapshot().state === "playing");
  const x = await first.evaluate(() => (window as any).__platformer.snapshot().player.x);
  await page.keyboard.down("ArrowRight");
  await expect.poll(() => first.evaluate(() => (window as any).__platformer.snapshot().player.x)).toBeGreaterThan(x + 35);
  await page.keyboard.up("ArrowRight");
  await openMap(page);
  const frozen = await first.evaluate(() => (window as any).__platformer.snapshot());
  await choose(page, "observe");
  await first.waitForFunction(() => (window as any).__platformer.snapshot().state === "playing");
  expect((await first.evaluate(() => (window as any).__platformer.snapshot())).player.x).toBeGreaterThan(x + 35);
  expect((await first.evaluate(() => (window as any).__platformer.snapshot())).attempts).toBe(frozen.attempts);
});

test("hosted customs unlocks at 20 pearls and 12 shells and requires real passage", async ({ page }) => {
  await page.goto("games/audit-sea.html?test=1");
  await ready(page);
  await page.locator("#start").click();
  // Test diagnostics prepare collection; actual keyboard/RAF performs the passage.
  async function collect(kind: string, n: number) {
    return page.evaluate(({ kind, n }) => {
      const sea = (window as any).__auditSea;
      sea.view(0);
      for (const o of sea.objects().filter(o => o.kind === kind && !o.taken).slice(0, n)) {
        const [x, y, z] = o.position;
        sea.place(x, Math.max(y, sea.floor(x, z) + 1.5), z);
        sea.advance(1 / 60);
      }
      return sea.snapshot();
    }, { kind, n });
  }
  await collect("pearl", 19);
  expect((await collect("shell", 12)).gate.unlocked).toBe(false);
  const unlocked = await collect("pearl", 1);
  expect(unlocked.counts).toEqual({ pearl: 20, shell: 12 });
  expect(unlocked.gate.unlocked).toBe(true);
  expect(unlocked.gate.passed).toBe(false);
  await page.evaluate(() => {
    const sea = (window as any).__auditSea;
    sea.place(-7, 5, -130, 0);
    sea.resumeView();
  });
  await page.keyboard.down("w");
  // Real frames only; software-rendered WebGL on CI can run at a few frames per second.
  await page.waitForFunction(() => (window as any).__auditSea.snapshot().gate.passed, undefined, { timeout: 180_000 });
  await page.keyboard.up("w");
  expect((await snapshot(page)).events.filter(e => e.type === "level-complete")).toHaveLength(1);
});
