import { test, expect } from "@playwright/test";
import { pages, readSource } from "../.vitepress/book.mjs";

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
      await expect(nav.getByRole("link", { name: /闯关游戏/ })).toBeVisible();
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
      const title = "用决策模型替代传统生成式 LLM-as-a-Judge 做自动化评测/决策";
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
