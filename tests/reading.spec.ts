import { test, expect } from "@playwright/test";
import { pages, readSource } from "../.vitepress/book.mjs";

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
