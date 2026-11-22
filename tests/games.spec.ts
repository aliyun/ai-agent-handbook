import { test, expect, type Page } from "@playwright/test";

// Headless CI renders the 3D chapter with software WebGL at about one frame per second,
// and each frame advances at most 0.1s of game time. Keep generous, bounded waits:
// the hosted v22 navigation test alone needs about 8 minutes there.
test.describe.configure({ timeout: 720_000 });

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
async function choose(page: Page, level: "observe" | "audit" | "evaluate") {
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
    await expect(page).toHaveTitle("自进化小岛：AgentLoop 海底探险游戏");
    await expect(page.locator('meta[property="og:title"]')).toHaveAttribute("content", "自进化小岛：AgentLoop 海底探险游戏");
    await expect(page.locator("html")).not.toHaveClass(/map-loading/, { timeout: 30_000 });
    await expect(page.locator("#worldArt")).toHaveJSProperty("complete", true);
    expect(await page.locator("#worldArt").evaluate((image: HTMLImageElement) => image.naturalWidth)).toBeGreaterThan(1500);
    await expect(page.locator("#companionImg")).toHaveJSProperty("complete", true);
    expect(await page.locator("#companionImg").evaluate((image: HTMLImageElement) => image.naturalWidth)).toBeGreaterThan(0);
    await expect(page.locator("#levelMarkers button")).toHaveCount(5);
    const help = page.locator(width === 390 ? "#mobileWorldInfo" : "#worldInfo");
    await expect(help).toHaveText("游戏说明");
    await help.click();
    await expect(page.locator("#helpTabs button")).toHaveCount(5);
    for (const [i, id] of ["observe", "audit", "evaluate", "experiment", "optimize"].entries()) {
      await page.locator(`#help-${id}`).click();
      await expect(page.locator("#helpChapterStatus")).toHaveText(i < 3 ? "已开放" : "开发中");
      if (i >= 3) await expect(page.locator("#helpGameplay")).toContainText("玩法尚未开放");
      else await expect(page.locator("#helpGameplay")).not.toContainText("玩法尚未开放");
      const d = await page.locator("#worldDialog").evaluate(el => ({ client: el.clientWidth, scroll: el.scrollWidth }));
      expect(d.scroll).toBeLessThanOrEqual(d.client + 1);
    }
    await page.keyboard.press("Escape");
    await page.locator("#level-experiment").click();
    await expect(page.locator("#playLink")).toBeHidden();
    await page.locator("#level-evaluate").click();
    await expect(page.locator("#playLink")).toBeVisible();
    await expect(page.locator("#playLink")).toHaveAttribute("href", "audit-sea.html?level=2");
    await page.locator("#level-observe").click();
    await expect(page.locator("#playLink")).toHaveAttribute("href", "audit-sea.html?level=0");
    await page.screenshot({ path: `test-results/game-map-${width}.png` });
    const repo = page.locator(width === 390 ? "#mobileGithubRepo" : "#githubRepo");
    await expect(repo).toBeVisible();
    await expect(repo).toHaveText("GitHub");
    await expect(repo).toHaveAttribute("href", "https://github.com/aliyun/ai-agent-handbook");
    await expect(repo).toHaveAttribute("target", "_blank");
    await expect(repo).toHaveAttribute("rel", "noopener");
    await expect(page.locator("#handbookHome, #mobileHandbookHome")).toHaveCount(0);
    expect(errors).toEqual([]);
  });
}

test("map controls do not wait for decorative images", async ({ page }) => {
  let releaseImages!: () => void;
  const imageGate = new Promise<void>(resolve => { releaseImages = resolve; });
  await page.route(/6089652e5676066fada9e023|db9cdbf6864ad11b15e75d20/, async route => {
    await imageGate;
    await route.continue();
  });
  try {
    await page.goto("games/", { waitUntil: "domcontentloaded" });
    await expect(page.locator("html")).not.toHaveClass(/map-loading/);
    await expect(page.locator("#mapLoadStatus")).toBeHidden();
    await expect(page.locator("#playLink")).toHaveCSS("pointer-events", "auto");
    expect(await page.locator("#worldArt").evaluate((image: HTMLImageElement) => image.naturalWidth)).toBe(0);
    expect(await page.locator("#companionImg").evaluate((image: HTMLImageElement) => image.naturalWidth)).toBe(0);
  } finally {
    releaseImages();
  }
  await expect(page.locator("#worldArt")).toHaveJSProperty("complete", true);
  await expect(page.locator("#companionImg")).toHaveJSProperty("complete", true);
});

test("map inside the game host links to the GitHub repository in a new tab", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("games/audit-sea.html");
  await ready(page);
  const welcome = page.locator("#welcome");
  await expect(welcome.locator(".kicker")).toHaveText("第二关");
  await expect(welcome.locator("h2")).toHaveText("高礁、异星鱼类和百年沉船");
  await expect(welcome.locator("p")).toHaveCount(0);
  await expect(page.locator("#start")).toHaveText("开始探索");
  await expect(page.locator("#start")).toBeEnabled();
  await expect(page.locator("#divePct")).toHaveText("100%");
  await expect(page.locator("#dive [role=progressbar]")).toHaveAttribute("aria-valuenow", "100");
  expect(await page.locator("#dive").innerText()).toBe("100%");
  expect(await page.locator("body").innerText()).not.toContain("通透海景小样");
  await page.locator("#start").click();
  await openMap(page);
  const repo = page.frameLocator("#mapLayer").locator("#githubRepo");
  await expect(repo).toBeVisible();
  await expect(repo).toHaveAttribute("href", "https://github.com/aliyun/ai-agent-handbook");
  await expect(repo).toHaveAttribute("target", "_blank");
});

test("hosted v22 defaults to exterior and preserves both games across map navigation", async ({ page }) => {
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
  await expect.poll(async () => (await snapshot(page)).player.z, { timeout: 120_000 }).toBeLessThan(initial.player.z - 1);
  await page.keyboard.up("w");
  expect((await snapshot(page)).player.z).toBeLessThan(initial.player.z - 1);
  await page.keyboard.press("c");
  const sea = await snapshot(page);
  expect(sea.camera.mode).toBe("cockpit");
  expect(sea.cockpit).toMatchObject({ loopieCount: 0, sideDecorations: "none" });
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

test("direct first-chapter links load critical art without starting chapter two", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  const secondChapterAssets: string[] = [];
  page.on("request", request => {
    if (/fa4520bd5be2c859e8910a2c|3ed369e02ca906dc9f663821|e538b877c67776fea9ef9bca/.test(request.url()))
      secondChapterAssets.push(request.url());
  });
  let releaseDeferred!: () => void;
  const deferredGate = new Promise<void>(resolve => { releaseDeferred = resolve; });
  await page.route("**/games/assets/e92748f1fffaf11b780dedf5.webp", async route => {
    await deferredGate;
    await route.continue();
  });
  try {
    await page.goto("games/lighthouse.html", { waitUntil: "domcontentloaded" });
    await expect(page).toHaveURL(/\/games\/audit-sea\.html\?level=0$/);
    await expect(page.locator("#shell")).toHaveClass(/first-active/);
    await expect(page.locator("#world")).toHaveCSS("visibility", "hidden");
    await expect(page.locator("#welcome")).not.toBeVisible();
    await expect(page.locator("#firstLayer")).toBeVisible();
    await page.waitForFunction(() => (window as any).__auditSea.snapshot().navigation.firstReady);
    const first = page.frames().find(f => /\/lighthouse\.html\?host=1$/.test(f.url()))!;
    await first.waitForFunction(() => (window as any).__platformer.snapshot().state === "playing");
    await expect(first.locator("#start")).toHaveText("开始");
    await expect(first.locator("#start")).toBeEnabled();
    const mark = first.locator("#mark");
    await expect(mark).toHaveJSProperty("complete", true);
    expect(await mark.evaluate((image: HTMLImageElement) => image.naturalWidth)).toBeGreaterThan(0);
    await expect(mark).toHaveCSS("visibility", "visible");
    await expect(mark).toHaveCSS("transform", "none");
    expect(secondChapterAssets).toEqual([]);
    expect(await first.locator('[data-action="run"]').count()).toBe(0);
    await expect(first.locator('[data-action="jump"]')).toBeVisible();
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
  } finally {
    releaseDeferred();
  }
});

test("third chapter Loopie eat-and-grow plays inside the host and keeps its round across the map", async ({ page }) => {
  const errors: string[] = [];
  page.on("pageerror", e => errors.push(e.message));
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("games/echo-theater.html", { waitUntil: "domcontentloaded" });
  await expect(page).toHaveURL(/\/games\/audit-sea\.html\?level=2$/);
  await expect(page.locator("#shell")).toHaveClass(/third-active/);
  await expect(page.locator("#world")).toHaveCSS("visibility", "hidden");
  await expect(page.locator("#thirdLayer")).toBeVisible();
  await page.waitForFunction(() => (window as any).__auditSea.snapshot().navigation.thirdReady);
  const third = page.frameLocator("#thirdLayer");
  await expect(third.locator("#home")).toBeHidden();
  await expect(third.locator("#scores")).toBeVisible();
  await expect(third.locator("#power-0")).toHaveText("2");
  await third.locator("#pause").click();
  await expect(third.locator("#paused")).toBeVisible();
  await third.locator("#return-map").click();
  await page.waitForFunction(() => {
    const s = (window as any).__auditSea.snapshot();
    return s.mapOpen && !s.mapBusy && s.navigation.thirdStarted;
  });
  const map = page.frameLocator("#mapLayer");
  await expect(map.locator("#playLink")).toContainText("继续游戏");
  await expect(page.locator("#thirdLayer")).toHaveJSProperty("inert", true);
  await choose(page, "evaluate");
  await expect(third.locator("#paused")).toBeVisible();
  await third.locator("#resume").click();
  await expect(third.locator("#paused")).toBeHidden();
  await third.locator("#pause").click();
  await third.locator("#return-map").click();
  await page.waitForFunction(() => (window as any).__auditSea.snapshot().mapOpen);
  // Switch to the 2D first chapter: it proves the layers swap without starting the 3D sea,
  // which software WebGL on CI renders too slowly for this navigation check.
  await choose(page, "observe");
  await expect(page.locator("#thirdLayer")).toBeHidden();
  await expect(page.locator("#firstLayer")).toBeVisible();
  expect((await snapshot(page)).navigation).toMatchObject({ level: 1, thirdStarted: true });
  await page.screenshot({ path: "test-results/game-third-back-to-first.png" });
  expect(errors).toEqual([]);
});

for (const size of [{ width: 1440, height: 900 }, { width: 390, height: 844 }]) {
  test(`third chapter art and 300-point success dialog at ${size.width}px`, async ({ page }) => {
    const errors: string[] = [];
    page.on("pageerror", e => errors.push(e.message));
    await page.setViewportSize(size);
    await page.emulateMedia({ reducedMotion: "reduce" });
    await page.goto("games/echo-theater.html?test");
    // The diagnostics hook exists before the ocean is built; wait for loading to finish.
    await page.waitForFunction(() => {
      try { return (window as any).__eatGrow.snapshot().screen === "home"; } catch { return false; }
    });
    const s = await page.evaluate(() => (window as any).__eatGrow.snapshot());
    expect(s.hosted).toBe(false);
    expect(Object.keys(s.assets).length).toBe(16);
    for (const [key, a] of Object.entries(s.assets) as [string, { width: number }][])
      expect(a.width, key).toBeGreaterThan(0);
    expect(s.assets.background.width).toBeGreaterThan(1000);
    await page.locator("#start").click();
    await page.waitForFunction(() => (window as any).__eatGrow.snapshot().screen === "playing");
    await page.screenshot({ path: `test-results/game-third-${size.width}.png` });
    const won = await page.evaluate(() => {
      const g = (window as any).__eatGrow;
      g.clearFish();
      const p = g.snapshot().players[0];
      g.player(0, { power: 299 });
      g.spawn({ species: "silver", x: p.x, y: p.y, speed: 0 });
      g.step(0.3);
      return g.snapshot();
    });
    expect(won.players[0].power).toBeGreaterThanOrEqual(300);
    expect(won.celebrated).toBe(true);
    await expect(page.locator("#success")).toBeVisible();
    await expect(page.locator("#success-title")).toHaveText("闯关成功");
    await page.screenshot({ path: `test-results/game-third-success-${size.width}.png` });
    await page.locator("#success-continue").click();
    await expect(page.locator("#success")).toBeHidden();
    expect((await page.evaluate(() => (window as any).__eatGrow.snapshot())).screen).toBe("playing");
    expect(errors).toEqual([]);
  });
}

test("mobile sea limits render load and releases real touch steering", async ({ browser }) => {
  const context = await browser.newContext({
    viewport: { width: 390, height: 844 },
    isMobile: true,
    hasTouch: true,
    deviceScaleFactor: 3,
    reducedMotion: "reduce",
  });
  const page = await context.newPage();
  const removedPilotRequests: string[] = [];
  page.on("request", request => {
    if (/36d57f|432cff/.test(request.url())) removedPilotRequests.push(request.url());
  });
  await page.goto("games/audit-sea.html?test=1");
  await ready(page);
  await page.locator("#start").click();
  const render = (await snapshot(page)).render;
  expect(render).toMatchObject({ profile: "mobile", maxPixelRatio: 1.25, maxFrameSteps: 2 });
  expect(render.pixelRatio).toBeLessThanOrEqual(1.25);

  const cdp = await context.newCDPSession(page);
  async function point(code: string, id: number) {
    const box = await page.locator(`[data-key="${code}"]`).boundingBox();
    return { x: box!.x + box!.width / 2, y: box!.y + box!.height / 2,
      id, radiusX: 5, radiusY: 5, force: 1 };
  }
  const forward = await point("KeyW", 20);
  const left = await point("KeyA", 21);
  const right = await point("KeyD", 22);
  const start = await snapshot(page);
  await cdp.send("Input.dispatchTouchEvent", { type: "touchStart", touchPoints: [forward, left] });
  await page.waitForTimeout(1_200);
  await cdp.send("Input.dispatchTouchEvent", { type: "touchEnd", touchPoints: [] });
  const turnedLeft = await snapshot(page);
  await cdp.send("Input.dispatchTouchEvent", { type: "touchStart", touchPoints: [forward, right] });
  await page.waitForTimeout(1_200);
  await cdp.send("Input.dispatchTouchEvent", { type: "touchEnd", touchPoints: [] });
  const finished = await snapshot(page);
  expect(turnedLeft.heading).toBeLessThan(start.heading - 0.1);
  expect(turnedLeft.player.z).not.toBe(start.player.z);
  expect(finished.heading).toBeGreaterThan(turnedLeft.heading + 0.1);
  expect(finished.player.z).not.toBe(turnedLeft.player.z);
  expect(finished.input).toMatchObject({ touch: [], turn: 0 });
  expect(removedPilotRequests).toEqual([]);
  await context.close();
});

async function softwareWebGL(page: Page) {
  return page.evaluate(() => {
    const gl = document.createElement("canvas").getContext("webgl");
    const info = gl?.getExtension("WEBGL_debug_renderer_info");
    const renderer = info ? String(gl!.getParameter(info.UNMASKED_RENDERER_WEBGL)) : "";
    return !gl || /SwiftShader|llvmpipe|softpipe|Software/i.test(renderer);
  });
}

test("hosted customs unlocks at 20 pearls and 12 shells and requires real passage", async ({ page }) => {
  // This walkthrough redraws the full 3D sea dozens of times. Software WebGL on GPU-less CI
  // cannot finish it inside the Pages job limit, so it runs on hardware-accelerated checks only.
  test.skip(await softwareWebGL(page), "第二关完整通关需硬件 WebGL；无 GPU 的 CI 只验证入口、默认视角与地图往返");
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
  // A real held W key drives the game's own simulation and gate collision. The test steps
  // that simulation in 0.5s slices instead of waiting for software-rendered CI frames.
  await page.keyboard.down("w");
  await expect.poll(() => page.evaluate(() => (window as any).__auditSea.advance(0.5).gate.passed),
    { timeout: 120_000, intervals: [0] }).toBe(true);
  await page.keyboard.up("w");
  expect((await snapshot(page)).events.filter(e => e.type === "level-complete")).toHaveLength(1);
});
