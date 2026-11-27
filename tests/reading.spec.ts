import { test, expect } from "@playwright/test";
import { readdirSync } from "node:fs";
import path from "node:path";
import { pages, parts, root, readSource, resolveBookLink } from "../.vitepress/book.mjs";
import { legacyHeadingIds } from "../.vitepress/markdown.mjs";

test("decision-model filenames, navigation and stable routes match H1", async ({ page }) => {
  const topic = pages.filter(p => p.source.startsWith("06-case-study/决策模型专题/"));
  expect(topic.map(p => p.route)).toEqual([
    "cases/jev/deep-dive",
    "cases/jev/harness-decisions",
    "cases/jev/agentcore-ticket-triage",
    "cases/jev/hiroute",
    "cases/jev/hiroute-local-d3",
    "cases/jev/decision-model-evals",
    "cases/jev/agenticops-decision-models",
  ]);
  expect(readdirSync(path.join(root, "06-case-study/决策模型专题")).filter(name => name.endsWith(".md"))).toHaveLength(topic.length);
  await page.goto("cases/jev/");
  for (const article of topic) {
    expect(path.basename(article.source, ".md")).toBe(article.title);
    await expect(page.locator(`.case-index a[href$="${article.route}.html"]`)).toContainText(article.title);
  }
  await page.goto("cases/index.html");
  for (const article of topic) {
    await expect(page.locator(`.vp-doc a[href$="${article.route}.html"]`)).toHaveText(article.title);
  }
  for (const article of topic) {
    const response = await page.goto(article.route + ".html");
    expect(response?.status()).toBe(200);
    await expect(page.locator(".vp-doc h1")).toHaveText(article.title);
    await expect(page.locator(`.VPSidebar a[href$="${article.route}.html"]`)).toContainText(article.title);
    await expect(page.getByRole("link", { name: "在 GitHub 上完善本页" })).toHaveAttribute(
      "href",
      "https://github.com/aliyun/ai-agent-handbook/edit/main/" + article.source.split("/").map(encodeURIComponent).join("/"),
    );
  }
});

for (const width of [1440, 390]) {
  for (const theme of ["light", "dark"] as const) {
    test(`chapter 01 plain-language text and old links at ${width}px in ${theme} theme`, async ({ page }) => {
      const errors: string[] = [];
      page.on("pageerror", error => errors.push(error.message));
      await page.setViewportSize({ width, height: 1000 });
      await page.addInitScript(value => localStorage.setItem("vitepress-theme-appearance", value), theme);
      await page.goto("architecture/chapter-01.html");
      const doc = page.locator(".vp-doc");
      await expect(doc.locator("h1")).toContainText("第 01 章");
      await expect(doc.locator("h2,h3")).toHaveCount(17);
      await expect(doc.locator("table")).toHaveCount(5);
      const shapes = doc.locator("table").nth(1);
      const shapeRegion = doc.locator(".chapter-01-shapes-table");
      await expect(shapeRegion).toHaveAttribute("tabindex", "0");
      expect(await shapeRegion.evaluate(el => el.scrollWidth > el.clientWidth)).toBe(true);
      expect(await shapes.evaluate(el => el.getBoundingClientRect().width)).toBeGreaterThanOrEqual(1000);
      await expect(shapes.locator("tbody tr")).toHaveCount(6);
      await expect(shapes.locator("tbody tr").nth(4).locator("td").first()).toHaveText("Long-Horizon Agent");
      await expect(shapes.locator("tbody tr").nth(5).locator("td").first()).toHaveText("Multi-Agent");
      await expect(doc).toContainText("Agent = Model + Harness");
      await expect(doc).toContainText("共享平台不决定业务任务具体怎么做，也不定义业务成功标准");
      await expect(doc).not.toContainText("持有任务循环");
      await expect(doc).not.toContainText("概率性认知核心");
      const image = doc.locator("img");
      await expect(image).toHaveCount(1);
      await image.scrollIntoViewIfNeeded();
      await expect.poll(() => image.evaluate((el: HTMLImageElement) => el.complete && el.naturalWidth > 0)).toBe(true);
      const aliases = Object.entries(legacyHeadingIds["/architecture/chapter-01.html"]);
      expect(aliases).toHaveLength(14);
      for (const [currentId, oldId] of aliases) {
        const heading = doc.locator(`[id="${currentId}"]`);
        await expect(heading.locator(`span[id="${oldId}"]`)).toHaveCount(1);
        await page.evaluate(id => { location.hash = id; }, oldId);
        await expect.poll(() => heading.evaluate(el => Math.abs(el.getBoundingClientRect().top) < 160)).toBe(true);
      }
      expect(await doc.evaluate(el => {
        const ids = Array.from(el.querySelectorAll("[id]"), item => item.id);
        return new Set(ids).size === ids.length;
      })).toBe(true);
      await page.evaluate(() => document.fonts.ready);
      await doc.locator("h1").scrollIntoViewIfNeeded();
      await page.screenshot({ path: `test-results/chapter-01-top-${width}-${theme}.png` });
      await shapes.scrollIntoViewIfNeeded();
      await page.screenshot({ path: `test-results/chapter-01-shapes-${width}-${theme}.png` });
      await image.scrollIntoViewIfNeeded();
      await page.screenshot({ path: `test-results/chapter-01-figure-${width}-${theme}.png` });
      expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
      expect(await page.locator("html").evaluate(el => el.classList.contains("dark"))).toBe(theme === "dark");
      expect(errors).toEqual([]);
    });
  }
}

test("chapter 10 keeps its landing route and orders the three articles", () => {
  const run = parts.find(part => part.id === "run")!;
  const chapter = run.pages.find(page => page.chapter === 10)!;
  expect(chapter.href).toBe("/run/chapter-10.html");
  expect(chapter.title).toBe("第 10 章 Agent 异步任务与自动化流程");
  expect(chapter.children.map(article => article.title)).toEqual([
    "01 Agent 异步任务与自动化流程综述",
    "02 Durable Agent 详解：如何让 Agent 在云端长期稳定运行",
    "03 AgentScope Durable 详解",
  ]);
  expect(chapter.children.map(article => article.href)).toEqual([
    "/run/chapter-10/overview.html",
    "/run/chapter-10/durable-agent.html",
    "/run/chapter-10/agentscope-durable.html",
  ]);
  expect(resolveBookLink(`${chapter.sourceDirectory}/`, "README.md")).toBe(chapter.href);
  for (const article of chapter.children) {
    expect(resolveBookLink(article.source, "README.md")).toBe(article.href);
  }
});

for (const width of [1440, 390]) {
  for (const theme of ["light", "dark"] as const) {
    test(`chapter 10 articles at ${width}px in ${theme} theme`, async ({ page }) => {
      test.setTimeout(120_000);
      const errors: string[] = [];
      page.on("pageerror", error => errors.push(error.message));
      await page.setViewportSize({ width, height: 1000 });
      await page.emulateMedia({ colorScheme: theme });
      await page.goto("run/chapter-10.html");
      await expect(page.locator(".vp-doc h1")).toContainText("第 10 章");
      const links = page.locator(".case-index a");
      await expect(links).toHaveCount(3);
      for (const [index, slug] of ["overview", "durable-agent", "agentscope-durable"].entries()) {
        await expect(links.nth(index)).toHaveAttribute("href", new RegExp(`/run/chapter-10/${slug}\\.html$`));
        await expect(links.nth(index).locator("span")).toHaveText(String(index + 1).padStart(2, "0"));
      }
      await page.screenshot({ path: `test-results/chapter-10-index-${width}-${theme}.png` });
      await page.locator(".VPDocFooter a.next").click();
      const titles = ["01 Agent 异步任务与自动化流程综述", "02 Durable Agent 详解：如何让 Agent 在云端长期稳定运行", "03 AgentScope Durable 详解"];
      const slugs = ["overview", "durable-agent", "agentscope-durable"];
      for (const [index, title] of titles.entries()) {
        const article = page.locator(".vp-doc");
        await expect(article.locator("h1")).toHaveCount(1);
        await expect(article.locator("h1")).toContainText(title);
        await expect(article.locator("img")).toHaveCount([4, 6, 4][index]);
        for (const image of await article.locator("img").all()) {
          await image.scrollIntoViewIfNeeded();
          await expect.poll(() => image.evaluate((el: HTMLImageElement) => el.complete && el.naturalWidth > 0)).toBe(true);
        }
        if (index > 0) {
          await expect(article.locator("h2")).toHaveCount(index === 1 ? 4 : 5);
          await expect(article.locator("h2 em")).toHaveCount(index === 1 ? 8 : 5);
          await expect(article.locator("h3")).toHaveCount(index === 1 ? 22 : 14);
          await expect(article.locator("table")).toHaveCount(index === 1 ? 7 : 1);
          await expect(article.locator("table tr")).toHaveCount(index === 1 ? 40 : 6);
          await expect(article.locator("table td, table th")).toHaveCount(index === 1 ? 120 : 12);
          await expect(article.locator("pre")).toHaveCount(index === 1 ? 8 : 10);
          await expect(article.locator("li").filter({ hasText: /^\s*$/ })).toHaveCount(0);
          await expect(article).not.toContainText("**");
          await expect(article).not.toContainText("Cloud Native");
          await expect(article.locator(`a[href="https://mp.weixin.qq.com/s/${index === 1 ? 'z8JHkCyOVVKrXpKH-vy6tw' : 'iDpIiF4UNAvUEq1KV1NuLw'}"]`)).toHaveCount(1);
          await article.locator("table").first().scrollIntoViewIfNeeded();
          await page.screenshot({ path: `test-results/chapter-10-${slugs[index]}-table-${width}-${theme}.png` });
          await article.locator("pre").first().scrollIntoViewIfNeeded();
          await page.screenshot({ path: `test-results/chapter-10-${slugs[index]}-code-${width}-${theme}.png` });
          await article.locator("img").first().scrollIntoViewIfNeeded();
          await page.screenshot({ path: `test-results/chapter-10-${slugs[index]}-figure-${width}-${theme}.png` });
        }
        await article.locator("h1").scrollIntoViewIfNeeded();
        await page.screenshot({ path: `test-results/chapter-10-${slugs[index]}-top-${width}-${theme}.png` });
        expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
        const next = index < 2 ? `/run/chapter-10/${slugs[index + 1]}.html` : "/run/chapter-11.html";
        await expect(page.locator(".VPDocFooter a.next")).toHaveAttribute("href", new RegExp(`${next.replace(/\./g, "\\.")}$`));
        await page.locator(".VPDocFooter a.next").click();
      }
      await expect(page.locator(".vp-doc h1")).toContainText("第 11 章");
      await expect(page.locator(".VPDocFooter a.prev")).toHaveAttribute("href", /\/run\/chapter-10\/agentscope-durable\.html$/);
      expect(errors).toEqual([]);
    });
  }
}

test("old chapter 10 section links open the relocated overview", async ({ page }) => {
  for (const hash of ["_10-6-本章小结", "本章小结"]) {
    await page.goto(`run/chapter-10.html#${encodeURIComponent(hash)}`);
    await expect(page).toHaveURL(/\/run\/chapter-10\/overview\.html#/);
    await expect(page.locator(".vp-doc h1")).toContainText("01 Agent 异步任务");
    await expect(page.locator(`[id="${hash}"]`)).toHaveCount(1);
  }
});

for (const width of [1440, 390]) {
  for (const theme of ["light", "dark"] as const) {
    test(`AgenticOps decision models at ${width}px in ${theme} theme`, async ({ page }) => {
      const title = "AgenticOps 决策模型的能力实测";
      const errors: string[] = [];
      page.on("pageerror", error => errors.push(error.message));
      await page.setViewportSize({ width, height: 1000 });
      await page.emulateMedia({ colorScheme: theme });
      await page.goto("cases/jev/");
      await expect(page.locator(".vp-doc h1")).toHaveText(/决策模型专题：结构化决策的实践/);
      const topicLink = page.locator('.vp-doc a[href$="agenticops-decision-models.html"]');
      await expect(topicLink).toContainText(title);
      await topicLink.click();
      await expect(page).toHaveURL(/cases\/jev\/agenticops-decision-models\.html$/);
      const article = page.locator(".vp-doc");
      await expect(article.locator("h1")).toContainText(title);
      await expect(article.locator("h2")).toHaveCount(6);
      await expect(article.locator("h3")).toHaveCount(17);
      await expect(article.locator("h4")).toHaveCount(26);
      await expect(article.locator("img")).toHaveCount(26);
      for (const [index, image] of (await article.locator("img").all()).entries()) {
        await image.scrollIntoViewIfNeeded();
        await expect.poll(() => image.evaluate((el: HTMLImageElement) => el.complete && el.naturalWidth > 0)).toBe(true);
        const number = String(index + 1).padStart(2, "0");
        const extension = index === 3 ? "gif" : index >= 24 ? "avif" : "png";
        await expect(image).toHaveAttribute("src", new RegExp(`agenticops-decision-${number}\\.[\\w-]+\\.${extension}$`));
      }
      await expect(article.locator("table")).toHaveCount(3);
      await expect(article.locator("table tbody tr")).toHaveCount(17);
      await expect(article.locator("table td, table th")).toHaveCount(80);
      await expect(article.locator("table br")).toHaveCount(6);
      await expect(article.locator(".custom-block.tip")).toHaveCount(11);
      await expect(article.locator(".custom-block-title").first()).toHaveText("Takeaway｜把任务拆细，模型才选得准。");
      await expect(article).not.toContainText("**");
      await expect(article).not.toContainText(":::");
      await expect(article.locator('a[href*="taobao.net"], a[href*="alidocs.dingtalk.com"], img[src*="Signature="]')).toHaveCount(0);
      await expect(article).toContainText("团队EAS模型服务接入指南（含Pilot、r9、27B、StartLux-style C）（内部文档）");
      await page.evaluate(() => window.scrollTo(0, 0));
      await page.screenshot({ path: `test-results/decision-models-top-${width}-${theme}.png` });
      await article.locator("table").nth(1).scrollIntoViewIfNeeded();
      await page.screenshot({ path: `test-results/decision-models-table-${width}-${theme}.png` });
      await article.locator(".custom-block.tip").first().scrollIntoViewIfNeeded();
      await page.screenshot({ path: `test-results/decision-models-takeaway-${width}-${theme}.png` });
      expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
      expect(errors).toEqual([]);
    });
  }
}

test("optimization guide precedes chapter 17 with a stable reading route", () => {
  const optimization = parts.find(part => part.id === "optimization")!;
  const entries = readdirSync(path.join(root, optimization.dir), { withFileTypes: true })
    .sort((a, b) => Number(b.isDirectory()) - Number(a.isDirectory()) || Buffer.compare(Buffer.from(a.name), Buffer.from(b.name)));
  expect(entries[0].name).toBe("00 调优篇导读");
  expect(entries[0].isDirectory()).toBe(true);
  expect(entries[1].name).toBe("第 17 章　模型调优");
  expect(optimization.pages.map(chapter => chapter.chapter)).toEqual([17, 18, 19, 20, 21, 22, 23, 24]);
  expect(optimization.guide.source).toBe("05-optimization/00 调优篇导读/调优篇导读.md");
  expect(optimization.guide.href).toBe("/optimization/");
  expect(resolveBookLink("05-optimization/00 调优篇导读/", "README.md")).toBe("/optimization/");
});

for (const width of [1440, 390]) {
  test(`optimization guide links to chapter 17 at ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: 1000 });
    await page.goto("optimization/");
    await expect(page.locator(".vp-doc h1")).toContainText("调优篇导读");
    await expect(page.locator(".vp-doc table tbody tr")).toHaveCount(3);
    await expect(page.locator(".VPDocFooter a.next")).toHaveAttribute("href", /\/optimization\/chapter-17\.html$/);
    await page.locator(".VPDocFooter a.next").click();
    await expect(page.locator(".vp-doc h1")).toContainText("第 17 章");
    await expect(page.locator(".VPDocFooter a.prev")).toHaveAttribute("href", /\/optimization\/$/);
  });
}

test("runtime repository order and stable source mappings", () => {
  const run = parts.find(part => part.id === "run")!;
  const entries = readdirSync(path.join(root, run.dir), { withFileTypes: true })
    .sort((a, b) => Number(b.isDirectory()) - Number(a.isDirectory()) || Buffer.compare(Buffer.from(a.name), Buffer.from(b.name)));
  expect(entries[0].name).toBe("00 运行篇导读");
  expect(entries.slice(1).map(entry => Number(entry.name.match(/^第 (\d+) 章/)![1]))).toEqual([7, 8, 9, 10, 11, 12]);
  expect(run.pages.map(chapter => chapter.chapter)).toEqual([7, 8, 9, 10, 11, 12]);
  const migrated = [run.guide, ...run.pages.filter(chapter => [7, 8].includes(chapter.chapter))];
  expect(migrated.map(page => page.href)).toEqual(["/run/", "/run/chapter-07.html", "/run/chapter-08.html"]);
  for (const page of migrated) {
    expect(page.sourceDirectory).toBe(path.posix.dirname(page.source));
    expect(resolveBookLink(`${page.sourceDirectory}/`, "README.md")).toBe(page.href);
    expect(resolveBookLink(page.source, "README.md")).toBe(page.href);
  }
});

for (const width of [1440, 390]) {
  test(`runtime guide and relocated chapters at ${width}px`, async ({ page }) => {
    const errors: string[] = [];
    page.on("pageerror", error => errors.push(error.message));
    await page.setViewportSize({ width, height: 1000 });
    await page.goto("run/");
    await expect(page.locator(".vp-doc h1")).toContainText("运行篇导读");
    await expect(page.locator(".VPDocFooter a.next")).toHaveAttribute("href", /\/run\/chapter-07\.html$/);
    for (const number of [7, 8]) {
      await page.locator(".VPDocFooter a.next").click();
      await expect(page).toHaveURL(new RegExp(`/run/chapter-0${number}\\.html$`));
      await expect(page.locator(".vp-doc h1")).toContainText(`第 0${number} 章`);
      const images = page.locator(".vp-doc img");
      await expect(images).toHaveCount(number === 7 ? 7 : 5);
      for (const image of await images.all()) {
        await image.scrollIntoViewIfNeeded();
        await expect.poll(() => image.evaluate((el: HTMLImageElement) => el.complete && el.naturalWidth > 0)).toBe(true);
      }
      await page.locator(".vp-doc h1").scrollIntoViewIfNeeded();
      await page.screenshot({ path: `test-results/runtime-chapter-0${number}-${width}.png` });
      expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
    }
    await expect(page.locator(".VPDocFooter a.next")).toHaveAttribute("href", /\/run\/chapter-09\.html$/);
    await page.locator(".VPDocFooter a.next").click();
    await expect(page.locator(".vp-doc h1")).toContainText("第 09 章");
    await expect(page.locator(".case-index a")).toHaveCount(3);
    expect(errors).toEqual([]);
  });
}

for (const width of [1440, 390]) {
  for (const theme of ["light", "dark"] as const) {
    test(`simplified homepage at ${width}px in ${theme} theme`, async ({ page }) => {
      const errors: string[] = [];
      page.on("pageerror", (error) => errors.push(error.message));
      await page.setViewportSize({ width, height: 1000 });
      await page.emulateMedia({ colorScheme: theme });
      await page.goto("./");
      await expect(page.locator(".hero-copy .book-eyebrow")).toHaveCount(0);
      await expect(page.locator(".hero-copy")).not.toContainText("Agent 工程开源白皮书");
      await expect(page.locator("#parts-title")).toHaveText("目录");
      await expect(page.locator(".book-invitation p").last()).toHaveText(
        "开源项目由阿里云与社区共同维护，欢迎反馈修改建议和您的一线实践。",
      );
      for (const text of [
        "开源白皮书 · 2026", "阿里云 × 社区", "2026 EDITION", "THE BOOK",
        "找到适合你的阅读路径", "一条完整的工程主线",
        "构建定义 Agent 如何工作，运行保障它持续工作。",
        "治理与调优，让可靠性和效果在实践中不断提升。",
        "这本书由阿里云与社区共同维护，欢迎分享反馈、修订与实践经验。",
      ]) {
        await expect(page.locator(".book-home")).not.toContainText(text);
      }
      const siteTitle = page.locator(".VPNavBarTitle .title");
      await expect(siteTitle).toHaveText("");
      await expect(siteTitle.getByRole("img", { name: "返回首页" })).toBeVisible();
      await expect(siteTitle).toHaveAttribute("href", process.env.SITE_BASE || "/ai-agent-handbook/");
      await expect(page.locator("#book-title")).toContainText("AI Agent");
      await expect(page.locator("#book-title")).toContainText("Handbook");
      const cover = page.locator(".book-cover");
      await expect(cover).not.toContainText(/BUILD|RUN|HANDBOOK|AI AGENT/);
      await expect(cover.locator(".cover-title")).toHaveText("智能体工程白皮书");
      await expect(cover.locator(".cover-orbit")).toHaveText("");
      await expect(cover.locator(".orbit-center")).toHaveCount(0);
      if (width >= 700) {
        await expect(cover).toBeVisible();
        expect(await cover.locator(".cover-title").evaluate(el => parseFloat(getComputedStyle(el).fontSize))).toBe(36);
        const [coverBox, titleBox] = await Promise.all([cover.boundingBox(), cover.locator(".cover-title").boundingBox()]);
        expect(titleBox!.x).toBeGreaterThanOrEqual(coverBox!.x);
        expect(titleBox!.x + titleBox!.width).toBeLessThanOrEqual(coverBox!.x + coverBox!.width);
      }
      for (const name of ["全书目录", "阅读指南", "开发者调研", "关于本书"]) {
        await expect(page.locator(".VPNav").getByRole("link", { name, exact: true })).toHaveCount(0);
      }
      await expect(page.getByRole("button", { name: "搜索全书" })).toBeVisible();
      await expect(page.getByRole("link", { name: "开始阅读", exact: false })).toBeVisible();
      await expect(page.getByRole("link", { name: "浏览全书目录" })).toBeVisible();
      const heroGithub = page.locator(".hero-copy").getByRole("link", { name: /在 GitHub 上参与共建/ });
      await expect(page.locator(".hero-copy")).not.toContainText("Star");
      const facts = page.locator(".book-facts");
      await expect(facts).toContainText("个章节，涵盖 Agent 全生命周期");
      await expect(facts).not.toContainText("贯穿工程全程");
      const caseFact = facts.locator("> div").last();
      await expect(caseFact.locator(".facts-update")).toHaveText("每周新增最新实践");
      const [factsBox, updateBox] = await Promise.all([facts.boundingBox(), caseFact.locator(".facts-update").boundingBox()]);
      expect(updateBox!.x + updateBox!.width).toBeLessThanOrEqual(factsBox!.x + factsBox!.width + 1);
      await expect(heroGithub).toBeVisible();
      await expect(heroGithub).toHaveAttribute("href", "https://github.com/aliyun/ai-agent-handbook");
      await expect(heroGithub).toHaveAttribute("target", "_blank");
      await expect(heroGithub).toHaveAttribute("rel", /noopener/);
      const [actionsBox, githubBox] = await Promise.all([
        page.locator(".hero-actions").boundingBox(),
        heroGithub.boundingBox(),
      ]);
      expect(githubBox!.y).toBeGreaterThan(actionsBox!.y + actionsBox!.height);
      expect(githubBox!.x + githubBox!.width).toBeLessThanOrEqual(width);
      if (width < 700) await page.locator(".VPNavBarHamburger").click();
      const nav = page.locator(width < 700 ? ".VPNavScreen" : ".VPNavBar");
      await expect(nav.getByRole("link", { name: /代码实战/ })).toBeVisible();
      await expect(nav.getByRole("link", { name: "游戏闯关", exact: true })).toBeVisible();
      await expect(nav.getByRole("link", { name: "GitHub 仓库" })).toBeVisible();
      await expect(nav.getByRole("switch")).toBeVisible();
      if (width < 700) {
        await page.locator(".VPNavBarHamburger").click();
        await expect(page.locator(".VPNavScreen")).toHaveCount(0);
      }
      expect(await page.locator("html").evaluate((el) => el.classList.contains("dark"))).toBe(theme === "dark");
      expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
      await page.evaluate(() => document.fonts.ready);
      await page.screenshot({ path: `test-results/home-simplified-${width}-${theme}.png`, fullPage: true });
      expect(errors).toEqual([]);
    });
  }
}

for (const width of [1440, 390]) {
  for (const theme of ["light", "dark"] as const) {
    test(`Jev decision-model evals at ${width}px in ${theme} theme`, async ({ page }) => {
      const title = "决策模型实践：自动化评测";
      const errors: string[] = [];
      page.on("pageerror", (error) => errors.push(error.message));
      await page.setViewportSize({ width, height: 1000 });
      await page.emulateMedia({ colorScheme: theme });
      await page.goto("cases/jev/");
      const topicLink = page.locator('.vp-doc a[href$="decision-model-evals.html"]');
      await expect(topicLink).toContainText(title);
      await topicLink.click();
      await expect(page).toHaveURL(/cases\/jev\/decision-model-evals\.html$/);
      await expect(page.locator(".vp-doc h1")).toContainText(title);
      await expect(page.locator(".vp-doc")).not.toContainText("作者：陈梓康");
      await expect(page.locator(".vp-doc")).not.toContainText("原文标题：");
      await expect(page.locator(".vp-doc")).not.toContainText("**");
      for (const label of ["决策模型（Decision Models）", "置信度估计（confidence estimate）", "第二步（一维刻度校准）："]) {
        await expect(page.locator(".vp-doc").getByText(label, { exact: true })).toHaveJSProperty("tagName", "STRONG");
      }
      await expect(page.locator(".vp-doc h2").last()).toHaveText(/04 写在最后/);
      await expect(page.locator(".vp-doc mjx-container")).toHaveCount(278);
      await expect(page.locator(".vp-doc mjx-container[display='true']")).toHaveCount(18);
      await expect(page.locator(".vp-doc [data-mml-node='merror']")).toHaveCount(0);
      await expect(page.locator(".vp-doc img")).toHaveCount(6);
      for (const image of await page.locator(".vp-doc img").all()) {
        await image.scrollIntoViewIfNeeded();
        await expect.poll(() => image.evaluate((el: HTMLImageElement) => el.complete && el.naturalWidth > 0)).toBe(true);
      }
      await expect(page.locator(".vp-doc table tbody tr")).toHaveCount(3);
      const bayesHeading = page.locator(".vp-doc h3").filter({ hasText: "从贝叶斯先验与误判代价理解" });
      await bayesHeading.scrollIntoViewIfNeeded();
      expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
      await page.screenshot({ path: `test-results/jev-judge-${width}-${theme}.png` });
      expect(errors).toEqual([]);
    });
  }
}

for (const width of [1440, 390]) {
  for (const theme of ["light", "dark"] as const) {
    test(`HiRoute coding practice article at ${width}px in ${theme} theme`, async ({ page }) => {
      const title = "把主力模型用在刀刃上：一个月 300 亿 Token、31 万行 Rust 背后的 AI Coding 实践";
      const errors: string[] = [];
      page.on("pageerror", error => errors.push(error.message));
      await page.setViewportSize({ width, height: 1000 });
      await page.emulateMedia({ colorScheme: theme });
      await page.goto("run/chapter-09.html");
      const links = page.locator(".case-index a");
      await expect(links).toHaveCount(3);
      await expect(links.nth(0)).toHaveAttribute("href", /chapter-09\/overview\.html$/);
      await expect(links.nth(1)).toHaveAttribute("href", /chapter-09\/intelligent-routing\.html$/);
      await expect(links.nth(2).locator("span")).toHaveText("03");
      await expect(links.nth(2)).toContainText(title);
      await expect(links.nth(2)).toHaveAttribute("href", /chapter-09\/hiroute-coding-practice\.html$/);
      await links.nth(2).click();
      const doc = page.locator(".vp-doc");
      await expect(doc.locator("h1")).toHaveCount(1);
      await expect(doc.locator("h1")).toContainText(title);
      await expect(doc.locator("h2")).toHaveCount(6);
      await expect(doc.locator("h3")).toHaveCount(2);
      await expect(doc.locator("table")).toHaveCount(1);
      await expect(doc.locator("table tr")).toHaveCount(4);
      await expect(doc.locator("table th, table td")).toHaveCount(16);
      await expect(doc.locator("pre")).toHaveCount(1);
      await expect(doc.locator("pre")).toContainText("hiroute sessions list --view switches");
      await expect(doc.locator("pre")).toContainText("hiroute value show");
      await expect(doc).not.toContainText("**");
      await expect(doc.locator("img")).toHaveCount(7);
      for (const [index, image] of (await doc.locator("img").all()).entries()) {
        await image.scrollIntoViewIfNeeded();
        await expect.poll(() => image.evaluate((el: HTMLImageElement) => el.complete && el.naturalWidth > 0)).toBe(true);
        await expect(image).toHaveAttribute("src", new RegExp(`image-${String(index + 14).padStart(3, "0")}.*\\.(png|jpg)$`));
        await expect(image).not.toHaveAttribute("src", /Expires=|Signature=/);
      }
      await doc.locator("img").first().click();
      await expect(page.getByRole("dialog", { name: "图片预览" })).toBeVisible();
      await page.keyboard.press("Escape");
      expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
      if (width < 700) {
        expect(await doc.locator(".hiroute-practice-table").evaluate(el => el.scrollWidth > el.clientWidth)).toBe(true);
      }
      await doc.locator("h1").scrollIntoViewIfNeeded();
      await page.screenshot({ path: `test-results/hiroute-practice-top-${width}-${theme}.png` });
      await doc.locator("table").scrollIntoViewIfNeeded();
      await page.screenshot({ path: `test-results/hiroute-practice-table-${width}-${theme}.png` });
      expect(errors).toEqual([]);
    });
  }
}

for (const width of [1440, 390]) {
  for (const theme of ["light", "dark"] as const) {
    test(`HiRoute local d3 article at ${width}px in ${theme} theme`, async ({ page }) => {
      const title = "日常留在本地，难了再上云：本地 Qwen3.8-27B + d3 决策模型 + 云端 Qwen4-Max";
      const errors: string[] = [];
      page.on("pageerror", error => errors.push(error.message));
      await page.setViewportSize({ width, height: 1000 });
      await page.emulateMedia({ colorScheme: theme });
      await page.goto("cases/jev/");
      const link = page.locator('.case-index a[href$="hiroute-local-d3.html"]');
      await expect(link).toContainText(title);
      await expect(link.locator("span")).toHaveText("05");
      await link.click();
      await expect(page).toHaveURL(/cases\/jev\/hiroute-local-d3\.html$/);
      const doc = page.locator(".vp-doc");
      await expect(doc.locator("h1")).toHaveCount(1);
      await expect(doc.locator("h1")).toContainText(title);
      await expect(doc).toContainText("周瑾瑜（zhoujinyu）");
      await expect(doc.locator("h2")).toHaveCount(9);
      await expect(doc.locator("h3")).toHaveCount(5);
      await expect(doc.locator("table")).toHaveCount(3);
      await expect(doc.locator("table tr")).toHaveCount(14);
      await expect(doc.locator("table th, table td")).toHaveCount(57);
      await expect(doc.locator("blockquote")).toHaveCount(3);
      await expect(doc.locator("pre")).toHaveCount(1);
      await expect(doc.locator("pre code")).toHaveText("vllm serve /path/to/d3 --max-model-len 32768 --tensor-parallel-size 2 --host 0.0.0.0 --port 8900\nhiroute decision connections test --service local-d3-full@5 --output json\n");
      await expect(doc.locator('a[href="https://hiroute.ai/media/hiroute-vllm-sr-d3-en.mp4"]')).toHaveText("观看演示视频");
      await expect(doc.locator("img")).toHaveCount(11);
      for (const [index, image] of (await doc.locator("img").all()).entries()) {
        await image.scrollIntoViewIfNeeded();
        await expect.poll(() => image.evaluate((el: HTMLImageElement) => el.complete && el.naturalWidth > 0)).toBe(true);
        await expect(image).toHaveAttribute("src", new RegExp(`hiroute-d3-${String(index + 1).padStart(2, "0")}\\.[\\w-]+\\.png$`));
        await expect(image).not.toHaveAttribute("src", /Expires=|Signature=/);
      }
      await expect(page.locator(".VPDocFooter a.prev")).toHaveAttribute("href", /cases\/jev\/hiroute\.html$/);
      await expect(page.locator(".VPDocFooter a.next")).toHaveAttribute("href", /cases\/jev\/decision-model-evals\.html$/);
      await expect(page.getByRole("link", { name: "在 GitHub 上完善本页" })).toHaveAttribute("href", new RegExp(encodeURIComponent(title + ".md") + "$"));
      await doc.locator("h1").scrollIntoViewIfNeeded();
      await page.screenshot({ path: `test-results/hiroute-local-d3-top-${width}-${theme}.png` });
      await doc.locator("table").first().scrollIntoViewIfNeeded();
      await page.screenshot({ path: `test-results/hiroute-local-d3-table-${width}-${theme}.png` });
      await doc.locator("img").last().scrollIntoViewIfNeeded();
      await page.screenshot({ path: `test-results/hiroute-local-d3-figure-${width}-${theme}.png` });
      expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
      expect(await page.locator("html").evaluate(el => el.classList.contains("dark"))).toBe(theme === "dark");
      expect(errors).toEqual([]);
    });
  }
}

for (const width of [1440, 390]) {
  for (const theme of ["light", "dark"] as const) {
    test(`AgentLoop flywheel series at ${width}px in ${theme} theme`, async ({ page }) => {
      const series = [
        { slug: "agentloop-overview", title: "AgentLoop 数据飞轮实践（一）：总览，让 Agent 持续调优的闭环", h2: 4, h3: 2, rows: 6, cells: 18, images: 4, first: 20 },
        { slug: "agentloop-ingestion", title: "AgentLoop 数据飞轮实践（二）：数据接入，四种方式把 Agent 连进 AgentLoop", h2: 5, h3: 8, rows: 6, cells: 12, images: 11, first: 24 },
        { slug: "agentloop-evaluation", title: "AgentLoop 数据飞轮实践（三）：评估，从黄金指标到 Rubric", h2: 6, h3: 4, rows: 6, cells: 12, images: 17, first: 35 },
        { slug: "agentloop-experiment", title: "AgentLoop 数据飞轮实践（四）：实验，回测、离线实验平台与题目级 Rubric", h2: 6, h3: 2, rows: 8, cells: 16, images: 11, first: 52 },
        { slug: "agentloop-experience", title: "AgentLoop 数据飞轮实践（五）：经验自进化，自动挖掘经验资产，消融实验验证真实收益", h2: 6, h3: 2, rows: 5, cells: 10, images: 10, first: 63 },
      ];
      const errors: string[] = [];
      page.on("pageerror", error => errors.push(error.message));
      await page.setViewportSize({ width, height: 1000 });
      await page.emulateMedia({ colorScheme: theme });
      for (const [index, article] of series.entries()) {
        await page.goto("optimization/chapter-18.html");
        const links = page.locator(".case-index a");
        await expect(links).toHaveCount(7);
        const link = links.nth(index + 2);
        await expect(link.locator("span")).toHaveText(String(index + 3).padStart(2, "0"));
        await expect(link).toContainText(article.title);
        await expect(link).toHaveAttribute("href", new RegExp(`chapter-18/${article.slug}\\.html$`));
        await link.click();
        const doc = page.locator(".vp-doc");
        await expect(doc.locator("h1")).toHaveCount(1);
        await expect(doc.locator("h1")).toContainText(article.title);
        await expect(doc.locator("h2")).toHaveCount(article.h2);
        await expect(doc.locator("h3")).toHaveCount(article.h3);
        await expect(doc.locator("table")).toHaveCount(1);
        await expect(doc.locator("table tr")).toHaveCount(article.rows);
        await expect(doc.locator("table th, table td")).toHaveCount(article.cells);
        await expect(doc).not.toContainText("**");
        const header = doc.locator("blockquote").first();
        await expect(header).toContainText(`第 ${index + 1} 篇 / 共 5 篇`);
        await expect(header.locator("br")).toHaveCount(1);
        const siblings = header.locator("a");
        await expect(siblings).toHaveCount(index === 0 ? 1 : 2);
        for (const sibling of await siblings.all()) {
          await expect(sibling).toHaveAttribute("href", /chapter-18\/agentloop-[a-z]+\.html$/);
        }
        if (index < 4) {
          await expect(doc.locator(`a[href$="${series[index + 1].slug}.html"]`)).toHaveCount(2);
        } else {
          await expect(doc.locator('ol[start="3"]')).toHaveCount(1);
          await expect(doc.locator("code")).toContainText("alibabacloud-agentloop-experience");
        }
        await expect(doc.locator("img")).toHaveCount(article.images);
        for (const [order, image] of (await doc.locator("img").all()).entries()) {
          await image.scrollIntoViewIfNeeded();
          await expect.poll(() => image.evaluate((el: HTMLImageElement) => el.complete && el.naturalWidth > 0)).toBe(true);
          // Byte-identical originals share one hashed Vite asset (048 = chapter 22 image-002, 072 = 022).
          const number = String(order + article.first).padStart(3, "0");
          const accepted = { "048": "(?:048|002)", "072": "(?:072|022)" }[number] || number;
          await expect(image).toHaveAttribute("src", new RegExp(`image-${accepted}\\.[\\w-]+\\.png$`));
          await expect(image).not.toHaveAttribute("src", /Expires=|Signature=/);
        }
        expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
        await doc.locator("h1").scrollIntoViewIfNeeded();
        await page.screenshot({ path: `test-results/agentloop-${article.slug}-${width}-${theme}.png` });
      }
      expect(errors).toEqual([]);
    });
  }
}

for (const width of [1440, 390]) {
  for (const theme of ["light", "dark"] as const) {
    test(`Personal Agent SuperAgent article at ${width}px in ${theme} theme`, async ({ page }) => {
      const title = "关于DeepSeek的SuperAgent，以及我们的实践";
      const errors: string[] = [];
      page.on("pageerror", (error) => errors.push(error.message));
      await page.setViewportSize({ width, height: 1000 });
      await page.emulateMedia({ colorScheme: theme });
      await page.goto("cases/personal-agent/");
      const topicLink = page.locator('.vp-doc a[href$="deepseek-superagent.html"]');
      await expect(topicLink).toContainText(title);
      await topicLink.click();
      await expect(page).toHaveURL(/cases\/personal-agent\/deepseek-superagent\.html$/);
      const doc = page.locator(".vp-doc");
      await expect(doc.locator("h1")).toHaveCount(1);
      await expect(doc.locator("h1")).toContainText(title);
      await expect(doc.locator("h2")).toHaveCount(6);
      await expect(doc.locator("h2").last()).toContainText("写在最后：两个趋势");
      await expect(doc).toContainText("2026.11.02");
      await expect(doc).not.toContainText("**");
      await expect(doc.locator("table")).toHaveCount(3);
      await expect(doc.locator("table tbody tr")).toHaveCount(11);
      await expect(doc.locator(".superagent-table")).toHaveCount(3);
      if (width < 700) {
        expect(await doc.locator(".superagent-table").first().evaluate(el => el.scrollWidth > el.clientWidth)).toBe(true);
      }
      await expect(doc.locator("img")).toHaveCount(35);
      await expect(doc.locator("img").first()).toHaveAttribute("src", /superagent-01.*\.svg$/);
      for (const image of await doc.locator("img").all()) {
        await image.scrollIntoViewIfNeeded();
        await expect.poll(() => image.evaluate((el: HTMLImageElement) => el.complete && el.naturalWidth > 0)).toBe(true);
        await expect(image).not.toHaveAttribute("src", /Expires=|Signature=/);
      }
      const lastImage = doc.locator("img").last();
      await lastImage.click();
      await expect(page.getByRole("dialog", { name: "图片预览" })).toBeVisible();
      await page.keyboard.press("Escape");
      expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
      await doc.locator("table").first().scrollIntoViewIfNeeded();
      await page.screenshot({ path: `test-results/personal-superagent-${width}-${theme}.png` });
      expect(errors).toEqual([]);
    });
  }
}

test("home, contents, stable deep links and source edit link", async ({
  page,
}) => {
  const errors: string[] = [];
  page.on("pageerror", (error) => errors.push(error.message));
  await page.goto("./");
  await expect(
    page.getByRole("heading", { name: /AI Agent Handbook/ }),
  ).toBeVisible();
  await page.getByRole("link", { name: "浏览全书目录" }).click();
  await expect(page.locator(".contents-part")).toHaveCount(7);
  await page
    .locator(".contents-part")
    .filter({ hasText: "构建篇" })
    .getByRole("link", { name: /第 03 章/ })
    .click();
  await page.reload();
  await expect(page.locator(".vp-doc h1")).toContainText("Harness");
  await expect(
    page.getByRole("link", { name: "在 GitHub 上完善本页" }),
  ).toHaveAttribute("href", /\/edit\/main\/02-build\//);
  await expect(page.locator(".pager-link.next")).toHaveAttribute(
    "href",
    /build\/chapter-04.html$/,
  );
  expect(errors).toEqual([]);
});

for (const width of [1440, 390]) {
  for (const [href, oldId, currentId] of [
    ["run/chapter-08.html", "本章小结", "_8-8-本章小结"],
    ["optimization/chapter-20.html", "选来源与字段", "_20-3-1-选来源与字段"],
    ["optimization/chapter-24.html", "四个边缘优化方向", "_24-1-1-四个边缘优化方向"],
  ]) {
    test(`legacy section link at ${width}px: ${href}#${oldId}`, async ({ page }) => {
      await page.setViewportSize({ width, height: 1000 });
      await page.goto(`${href}#${encodeURIComponent(oldId)}`);
      const heading = page.locator(`.vp-doc [id="${currentId}"]`);
      await expect(heading.locator(`:scope > span[id="${oldId}"]`)).toHaveCount(1);
      await expect.poll(async () => {
        const rect = await heading.boundingBox();
        return !!rect && rect.y >= 0 && rect.y < 1000;
      }).toBe(true);
    });
  }
}

for (const query of ["状态恢复", "Harness", "黄金数据集"]) {
  test(`local search: ${query}`, async ({ page }) => {
    await page.goto("./");
    await page.getByRole("button", { name: "搜索全书" }).click();
    await page.locator("#localsearch-input").fill(query);
    const result = page.locator(".VPLocalSearchBox .result").first();
    await expect(result).toBeVisible();
    await result.click();
    await expect(page.locator(".vp-doc h1")).toBeVisible();
    expect(page.url()).toContain(
      process.env.SITE_BASE || "/ai-agent-handbook/",
    );
  });
}

test("reading controls, literal templates, image viewer and resume", async ({
  page,
}) => {
  await page.goto("optimization/chapter-20.html");
  await expect(page.locator(".vp-doc")).toContainText("{{input}}");
  await page.getByRole("button", { name: "大号字" }).click();
  await expect(page.locator("html")).toHaveAttribute(
    "data-reading-size",
    "large",
  );
  const heading = page.locator(".vp-doc h2").nth(1);
  await heading.scrollIntoViewIfNeeded();
  await expect
    .poll(() =>
      page.evaluate(
        () => JSON.parse(localStorage.getItem("handbook:last") || "{}").href,
      ),
    )
    .toContain("#");
  await page.goto("./");
  await expect(page.locator(".continue-reading")).toBeVisible();
  const [resumeBox, resumeGithubBox] = await Promise.all([
    page.locator(".continue-reading").boundingBox(),
    page.locator(".hero-github").boundingBox(),
  ]);
  expect(resumeGithubBox!.y).toBeGreaterThanOrEqual(resumeBox!.y + resumeBox!.height);
  await page.screenshot({ path: "test-results/home-resume-github.png" });
  await page.locator(".continue-reading").click();
  await expect(page.locator(".vp-doc h1")).toContainText("20");
  await expect(page.getByRole("button", { name: "大号字" })).toHaveAttribute(
    "aria-pressed",
    "true",
  );
  await page.goto("architecture/chapter-01.html");
  const img = page.locator('.vp-doc img[role="button"]').first();
  await img.scrollIntoViewIfNeeded();
  await img.click();
  await expect(page.getByRole("dialog", { name: "图片预览" })).toBeVisible();
  await page.keyboard.press("Escape");
  await expect(
    page.getByRole("dialog", { name: "图片预览" }),
  ).not.toBeVisible();
});

test("mobile navigation and readable width", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("./");
  await page.screenshot({
    path: "test-results/home-mobile.png",
    fullPage: true,
  });
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= innerWidth,
    ),
  ).toBe(true);
  await page.getByRole("link", { name: "开始阅读", exact: false }).click();
  await page.getByRole("button", { name: "全书目录" }).click();
  await expect(page.locator(".VPSidebar")).toBeVisible();
  await page
    .locator(".VPSidebar")
    .getByRole("link", { name: "阅读指南", exact: true })
    .click();
  await expect(page.locator(".vp-doc h1")).toHaveText("阅读指南");
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= innerWidth,
    ),
  ).toBe(true);
  await page.screenshot({
    path: "test-results/reading-mobile.png",
    fullPage: true,
  });
});

test("desktop and dark reading previews", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.goto("./");
  await page.screenshot({
    path: "test-results/home-desktop.png",
    fullPage: true,
  });
  await page.goto("build/chapter-03.html");
  await page.screenshot({ path: "test-results/reading-desktop.png" });
  await page.getByRole("switch", { name: "切换深色主题" }).click();
  await expect(page.locator("html")).toHaveClass(/dark/);
  await page.screenshot({ path: "test-results/reading-dark.png" });
});

test("printing loads diagrams outside the viewport", async ({ page }) => {
  await page.goto("build/chapter-03.html");
  await page.evaluate(() => {
    window.print = () => {
      document.documentElement.dataset.printed = "true";
    };
  });
  await page.getByRole("button", { name: "打印本页" }).click();
  await expect(page.locator("html")).toHaveAttribute("data-printed", "true");
  for (const diagram of await page.locator(".mermaid-diagram").all()) {
    await expect(diagram).toHaveAttribute("data-rendered", "true");
  }
});

for (const chapter of pages.filter((p) =>
  /```mermaid/.test(readSource(p.source)),
)) {
  test(`render every Mermaid diagram: ${chapter.href}`, async ({ page }) => {
    const errors: string[] = [];
    const requests: string[] = [];
    page.on("request", request => requests.push(request.url()));
    page.on("pageerror", (error) => errors.push(error.message));
    await page.goto(chapter.href.slice(1));
    const diagrams = page.locator(".mermaid-diagram");
    const expected = (readSource(chapter.source).match(/```mermaid/g) || [])
      .length;
    await expect(diagrams).toHaveCount(expected);
    for (const diagram of await diagrams.all()) {
      await diagram.scrollIntoViewIfNeeded();
      await expect(diagram).toHaveAttribute("data-rendered", "true");
      await expect(diagram.locator(".diagram-error")).toHaveCount(0);
      await expect(diagram.locator("foreignObject")).toHaveCount(0);
    }
    if (chapter.href === "/build/chapter-03.html") {
      await diagrams.first().screenshot({ path: "test-results/diagram-dagre.png" });
    }
    await diagrams.first().getByRole("button", { name: "查看大图" }).click();
    await expect(page.getByRole("dialog")).toBeVisible();
    await page.keyboard.press("Escape");
    expect(errors).toEqual([]);
    expect(requests.some(url => /\/elk-[^/]+\.js/.test(url))).toBe(false);
    expect(requests.some(url => /\/survey\.md\.[^/]+\.js/.test(url))).toBe(false);
  });
}
