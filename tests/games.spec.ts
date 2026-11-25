import { test, expect, type Page } from "@playwright/test";

// Real native rendering is verified with PLAYWRIGHT_WEBGPU=1 on hardware Chrome.
// CI without WebGPU still exercises failure recovery and the other chapters.
test.describe.configure({ timeout: 180_000 });

const snapshot = (page: Page) => page.evaluate(() => (window as any).__auditSea.snapshot());
async function ready(page: Page) {
  await page.waitForFunction(() => (window as any).__auditSea?.snapshot().ready);
}
async function openMap(page: Page) {
  await page.locator('#mapBtn').click();
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
  await expect(page.locator('#seaLayer')).toHaveAttribute('src',/abyssal-sea.html/);
  await expect(page.frameLocator('#seaLayer').locator('h1')).toHaveText('穿过海底城堡');
  // Shared navigation must work even while WebGPU is loading or unavailable.
  await openMap(page);
  const repo = page.frameLocator("#mapLayer").locator("#githubRepo");
  await expect(repo).toBeVisible();
  await expect(repo).toHaveAttribute("href", "https://github.com/aliyun/ai-agent-handbook");
  await expect(repo).toHaveAttribute("target", "_blank");
});

test("native WebGPU defaults to exterior and preserves both games across map navigation", async ({ page }) => {
  test.skip(!process.env.PLAYWRIGHT_WEBGPU,'真实 WebGPU 航行由硬件 GPU 验证运行；CI 另验无 GPU 回地图');
  const errors: string[] = [];
  page.on("pageerror", e => errors.push(e.message));
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("games/audit-sea.html");
  await ready(page);
  expect(await page.evaluate(() => Object.keys((window as any).__auditSea))).toEqual(["snapshot"]);
  await page.waitForFunction(()=>(window as any).__auditSea.snapshot().secondReady);
  const seaLayer=page.frameLocator('#seaLayer');
  await expect(seaLayer.locator('#view')).toHaveText('驾驶舱 · V');
  await seaLayer.locator('#d').click();
  const initial = await snapshot(page);
  await page.keyboard.down("w");
  await expect.poll(async () => (await snapshot(page)).player.z, { timeout: 120_000 }).toBeLessThan(initial.player.z - 1);
  await page.keyboard.up("w");
  expect((await snapshot(page)).player.z).toBeLessThan(initial.player.z - 1);
  await page.keyboard.press('v');
  const sea = await snapshot(page);
  expect(sea.view).toBe('cockpit');
  expect(sea.native.originalFullPost).toBe(true);
  expect(sea.renderer).toBe('native WebGPU');
  await page.screenshot({path:'test-results/game-native-cockpit.png'});
  await page.keyboard.press('f');
  await expect.poll(()=>seaLayer.locator('html').evaluate(()=>!!document.fullscreenElement)).toBe(true);
  await page.keyboard.press('x');
  await page.waitForFunction(()=>{const s=(window as any).__auditSea.snapshot();return s.mapOpen&&!s.mapBusy;});
  await expect.poll(()=>seaLayer.locator('html').evaluate(()=>!!document.fullscreenElement)).toBe(false);
  await expect.poll(async ()=>(await snapshot(page)).native.audio.context).toBe('suspended');
  expect((await snapshot(page)).native.audio.musicPaused).toBe(true);
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
  expect((await snapshot(page)).view).toBe(sea.view);
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
    await expect(page.locator('#seaLayer')).not.toHaveAttribute('src',/abyssal/);
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

test("mobile native sea releases real multi-touch steering", async ({ browser }) => {
  test.skip(!process.env.PLAYWRIGHT_WEBGPU,'桌面 Chrome WebGPU 触控模拟需硬件 GPU');
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
  await page.waitForFunction(()=>(window as any).__auditSea.snapshot().secondReady);
  await page.frameLocator('#seaLayer').locator('#d').click();
  expect((await snapshot(page)).native.canvas[0]).toBeGreaterThan(0);

  const cdp = await context.newCDPSession(page);
  async function point(code: string, id: number) {
    const box = await page.frameLocator('#seaLayer').locator(`#touch [data-key="${code}"]`).boundingBox();
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
  expect(turnedLeft.player.heading).toBeLessThan(start.player.heading - 0.1);
  expect(turnedLeft.player.z).not.toBe(start.player.z);
  expect(finished.player.heading).toBeGreaterThan(turnedLeft.player.heading + 0.1);
  expect(finished.player.z).not.toBe(turnedLeft.player.z);
  expect(finished.native.input).toMatchObject({ touch: [], keys: [] });
  expect(removedPilotRequests).toEqual([]);
  await page.screenshot({path:'test-results/game-native-mobile.png'});
  await context.close();
});

test('unsupported WebGPU can return to map and play other chapters',async({page})=>{
  await page.addInitScript(()=>Object.defineProperty(navigator,'gpu',{value:undefined,configurable:true}));
  await page.goto('games/audit-sea.html');await ready(page);
  const sea=page.frameLocator('#seaLayer');
  await expect(sea.locator('body')).toHaveClass(/\be\b/);
  await expect(sea.locator('#s')).toContainText('WebGPU');
  await sea.locator('#menu-map').click();
  await page.waitForFunction(()=>(window as any).__auditSea.snapshot().mapOpen);
  await choose(page,'observe');
  await page.waitForFunction(()=>(window as any).__auditSea.snapshot().navigation.firstReady);
  expect((await snapshot(page)).secondReady).toBe(false);
  await expect(page.locator('#firstLayer')).toBeVisible();
});

test('native customs follows a continuous collectible route and completes only after full passage',async({page})=>{
  test.skip(!process.env.PLAYWRIGHT_WEBGPU,'完整原生通关必须由硬件 GPU 验证，不用软件渲染冒充');
  const errors:string[]=[];page.on('pageerror',e=>errors.push(e.message));
  await page.goto('games/audit-sea.html?test=1');
  await page.waitForFunction(()=>(window as any).__auditSea.snapshot().secondReady);
  const sea=page.frames().find(f=>f.url().includes('abyssal-sea.html'))!;
  await sea.locator('#d').click();
  await page.screenshot({path:'test-results/game-native-castle.png'});
  // Held keyboard/RAF must not pass the visible locked gate.
  await sea.evaluate(()=>{const a=(window as any).__abyssalV3;a.teleport(6,-35.1,26);a.input('KeyW',true);a.step(1/60,300);a.input('KeyW',false);});
  const locked=await sea.evaluate(()=>(window as any).__abyssalV3.snapshot());
  expect(locked.completed).toBe(false);expect(locked.player.z).toBeGreaterThan(12);
  const route=await sea.evaluate(()=>{
    const a=(window as any).__abyssalV3;a.reset();a.resume();
    const nodes=a.snapshot().route;a.teleport(...nodes[0]);
    let worst=-Infinity,threshold=true;
    for(let k=1;k<nodes.length;k++){
      const p=a.snapshot().player,b=nodes[k],dx=b[0]-p.x,dy=b[1]-p.y,dz=b[2]-p.z,n=Math.ceil(Math.hypot(dx,dy,dz)/.25);
      a.teleport(p.x,p.y,p.z,Math.atan2(dx,-dz)); // rotation at current position, not a spatial jump
      for(let j=0;j<n;j++){a.move(dx/n,dy/n,dz/n);const s=a.snapshot();worst=Math.max(worst,a.worldClearance(s.player.x,s.player.y,s.player.z,s.player.heading));if(s.unlocked!==(s.counts.pearl>=20&&s.counts.shell>=12))threshold=false;}
    }
    return {worst,threshold,state:a.snapshot()};
  });
  expect(route.worst).toBeLessThan(.02);expect(route.threshold).toBe(true);
  expect(route.state.counts.pearl).toBe(50);expect(route.state.counts.shell).toBe(20);
  expect(route.state.unlocked).toBe(true);expect(route.state.completed).toBe(false);
  for(const id of ['lighthouse','wreck']){
    await sea.evaluate(id=>{const a=(window as any).__abyssalV3;a.gotoLandmark(id);a.render();},id);
    await page.screenshot({path:`test-results/game-native-${id}.png`});
  }
  await sea.evaluate(()=>{const a=(window as any).__abyssalV3;a.teleport(6,-35.1,26);a.move(0,0,-14.1);});
  expect((await sea.evaluate(()=>(window as any).__abyssalV3.snapshot())).completed).toBe(false);
  await sea.evaluate(()=>{const a=(window as any).__abyssalV3;a.input('KeyW',true);});
  await expect.poll(()=>sea.evaluate(()=>{const a=(window as any).__abyssalV3;a.step(1/60,20);return a.snapshot().completed;})).toBe(true);
  await sea.evaluate(()=>(window as any).__abyssalV3.input('KeyW',false));
  await expect(sea.locator('#complete')).toBeVisible();
  await page.screenshot({path:'test-results/game-native-success.png'});
  await sea.locator('#continue').click();await expect(sea.locator('#complete')).toBeHidden();
  expect((await sea.evaluate(()=>(window as any).__abyssalV3.snapshot())).continuing).toBe(true);
  await sea.locator('#exit').click();await page.waitForFunction(()=>(window as any).__auditSea.snapshot().mapOpen);
  await choose(page,'audit');await expect(sea.locator('#complete')).toBeHidden();
  expect((await snapshot(page)).gate.passed).toBe(true);
  await sea.locator('#o').click();
  await expect.poll(()=>sea.evaluate(()=>(window as any).__abyssalV3.snapshot().audio.context)).toBe('suspended');
  await sea.locator('#d').click();
  await expect.poll(()=>sea.evaluate(()=>(window as any).__abyssalV3.snapshot().audio.context)).toBe('running');
  const reset=await sea.evaluate(()=>{const a=(window as any).__abyssalV3;a.reset();return a.snapshot();});
  expect(reset.counts).toEqual({pearl:0,shell:0});expect(reset.unlocked).toBe(false);expect(reset.completed).toBe(false);
  expect(errors).toEqual([]);
});

test('a late native ready pauses the hidden sea while the first chapter remains playable',async({page})=>{
  test.skip(!process.env.PLAYWRIGHT_WEBGPU,'迟到的真实 GPU 初始化仅在硬件 Chrome 验证');
  const errors:string[]=[];page.on('pageerror',e=>errors.push(e.message));
  page.on('console',e=>{if(e.type()==='error')errors.push(e.text());});
  let release!:()=>void;const gate=new Promise<void>(r=>release=r);
  await page.route('**/games/abyssal-sea.html?host=1',async route=>{await gate;await route.continue();});
  try{
    await page.goto('games/audit-sea.html',{waitUntil:'domcontentloaded'});await ready(page);
    await openMap(page);await choose(page,'observe');
    await page.waitForFunction(()=>(window as any).__auditSea.snapshot().navigation.firstReady);
    release();
    await page.waitForFunction(()=>(window as any).__auditSea.snapshot().secondReady,undefined,{timeout:120_000});
    await expect.poll(async ()=>(await snapshot(page)).native.hostSuspended).toBe(true);
    const first=page.frames().find(f=>f.url().includes('lighthouse.html?host=1'))!;
    expect((await first.evaluate(()=>(window as any).__platformer.snapshot())).state).toBe('playing');
    const frozen=await snapshot(page);await page.waitForTimeout(300);
    expect((await snapshot(page)).native.time).toBe(frozen.native.time);
    await openMap(page);await choose(page,'audit');
    await expect.poll(async ()=>(await snapshot(page)).native.hostSuspended).toBe(false);
    await expect.poll(async ()=>(await snapshot(page)).native.audio.context).toBe('running');
    await expect.poll(async ()=>(await snapshot(page)).native.canvas[0]).toBeGreaterThan(100);
    const restored=await snapshot(page);
    expect(Number.isFinite(restored.native.cockpit.aspect)).toBe(true);
    expect(errors).toEqual([]);
  }finally{release();}
});
