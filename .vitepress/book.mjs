import { readdirSync, readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";

export const root = fileURLToPath(new URL("../", import.meta.url));
export const repository = "https://github.com/aliyun/ai-agent-handbook";

export const parts = [
  {
    id: "architecture",
    dir: "01-architecture",
    title: "架构篇",
    english: "Architecture",
    range: "01—02",
    description: "建立共同语言，找到适合业务的 Agent 架构。",
    chapters: [1, 2],
  },
  {
    id: "build",
    dir: "02-build",
    title: "构建篇",
    english: "Build",
    range: "03—06",
    description: "以 Harness 为核心，组织任务、信息与行动。",
    chapters: [3, 4, 5, 6],
  },
  {
    id: "run",
    dir: "03-run",
    title: "运行篇",
    english: "Run",
    range: "07—12",
    description: "让任务跨越请求、进程和故障，持续可靠运行。",
    chapters: [7, 8, 9, 10, 11, 12],
  },
  {
    id: "governance",
    dir: "04-governance",
    title: "治理篇",
    english: "Govern",
    range: "13—16",
    description: "让行为可见、权限有界、资产可管理、质量可验证。",
    chapters: [13, 14, 15, 16],
  },
  {
    id: "optimization",
    dir: "05-optimization",
    title: "调优篇",
    english: "Optimize",
    range: "17—24",
    description: "从运行事实出发，建立评估与持续改进的闭环。",
    chapters: [17, 18, 19, 20, 21, 22, 23, 24],
  },
  {
    id: "cases",
    dir: "06-case-study",
    title: "实践篇",
    english: "Practice",
    range: "25—29",
    description: "走进企业一线，在真实场景中理解工程取舍。",
    chapters: [25, 26, 27, 28, 29],
  },
  {
    id: "outlook",
    dir: "07-conclusion",
    title: "总结与展望",
    english: "Outlook",
    range: "30",
    description: "从 Agentic Application 走向 Agentic OS。",
    chapters: [30],
  },
];

// Stable public slugs are independent of Chinese filenames and editorial titles.
const caseGroups = [
  {
    chapter: 25,
    title: "研发效能",
    cases: [
      ["abaci", "ABACI"],
      ["kitta", "Kitta"],
      ["patchpilot", "PatchPilot"],
      ["polardb-x", "从报警到自动修复"],
      ["cloud-communications", "从编码提效"],
      ["security-engineering", "从评测驱动"],
      ["engineering-team", "多 Agent 组成研发小队"],
    ],
  },
  {
    chapter: 26,
    title: "设计工程",
    cases: [
      ["genui", "GenUI"],
      ["vibe-designing", "Vibe Designing"],
    ],
  },
  {
    chapter: 27,
    title: "运维、安全与企业 IT",
    cases: [
      ["geely", "吉利汽车"],
      ["tastien", "塔斯汀"],
      ["chanjet", "畅捷通"],
    ],
  },
  {
    chapter: 28,
    title: "客户、销售与运营",
    cases: [
      ["minimax", "MiniMax"],
      ["shinewing", "会计师事务所"],
      ["bilibili", "哔哩哔哩"],
      ["data-agent", "运营分析"],
    ],
  },
];

export const readSource = (source) =>
  readFileSync(path.join(root, source), "utf8");
export const normalizeTitle = (title) => title.replace(/\s+/g, " ").trim();
export const titleOf = (source) =>
  normalizeTitle(
    readSource(source).match(/^#\s+(.+)$/m)?.[1] ||
      path.basename(source, ".md"),
  );
export const hrefOf = (route) =>
  "/" +
  (route.endsWith("/index")
    ? route.slice(0, -5)
    : route === "index"
      ? ""
      : route + ".html");
function exactlyOne(items, context) {
  if (items.length !== 1)
    throw new Error(
      `Expected one source for ${context}, found ${items.length}`,
    );
  return items[0];
}
function page(source, route, extra = {}) {
  return {
    source,
    route,
    href: hrefOf(route),
    title: titleOf(source),
    ...extra,
  };
}

export const readingOrder = [
  page("00-preface/00-preface.md", "preface", { part: "开始阅读" }),
  page("2026-agent-survey-report.md", "survey", { part: "开始阅读" }),
];

for (const part of parts) {
  const files = readdirSync(path.join(root, part.dir));
  const guide = files.find((f) => f === "README.md" || f.endsWith("篇导读.md"));
  part.guide = page(
    guide ? `${part.dir}/${guide}` : "website/outlook.md",
    `${part.id}/index`,
    { part: part.title, isGuide: true },
  );
  part.href = part.guide.href;
  part.pages = [];
  readingOrder.push(part.guide);
  for (const number of part.chapters) {
    const group = caseGroups.find((g) => g.chapter === number);
    let chapter;
    if (group) {
      chapter = page(
        `website/case-${number}.md`,
        `cases/chapter-${number}/index`,
        { chapter: number, part: part.title },
      );
      const dir = exactlyOne(
        files.filter((f) => new RegExp(`^第\\s*${number}\\s*章`).test(f)),
        `case chapter ${number}`,
      );
      const cases = readdirSync(path.join(root, part.dir, dir)).filter((f) =>
        f.endsWith(".md"),
      );
      chapter.children = group.cases.map(([slug, prefix]) => {
        const file = exactlyOne(
          cases.filter((f) => f.startsWith(prefix)),
          prefix,
        );
        return page(
          `${part.dir}/${dir}/${file}`,
          `cases/chapter-${number}/${slug}`,
          { chapter: number, part: part.title, isCase: true },
        );
      });
      chapter.sourceDirectory = `${part.dir}/${dir}`;
    } else {
      const file = exactlyOne(
        files.filter(
          (f) =>
            f.endsWith(".md") && new RegExp(`^第\\s*${number}\\s*章`).test(f),
        ),
        `chapter ${number}`,
      );
      chapter = page(
        `${part.dir}/${file}`,
        `${part.id}/chapter-${String(number).padStart(2, "0")}`,
        { chapter: number, part: part.title },
      );
    }
    part.pages.push(chapter);
    readingOrder.push(chapter, ...(chapter.children || []));
  }
}

export const extraPages = [
  page("website/index.md", "index", { title: "从模型能力到可靠的 Agent 系统" }),
  page("website/contents.md", "contents"),
  page("website/reading-guide.md", "reading-guide"),
  page("README.md", "about"),
  page("README_EN.md", "en/index"),
];
export const pages = [...readingOrder, ...extraPages];
export const bySource = new Map(pages.map((p) => [p.source, p]));
export const byRoute = new Map(pages.map((p) => [p.route + ".md", p]));
export const directoryPages = new Map(parts.map((p) => [p.dir, p.guide]));
directoryPages.set("00-preface", readingOrder[0]);
for (const p of readingOrder)
  if (p.sourceDirectory) directoryPages.set(p.sourceDirectory, p);

export const sidebar = [
  {
    text: "开始阅读",
    items: [
      { text: "阅读指南", link: "/reading-guide.html" },
      ...readingOrder.slice(0, 2).map((p) => ({ text: p.title, link: p.href })),
    ],
  },
  ...parts.map((part) => ({
    text: part.title,
    collapsed: part.id !== "architecture",
    items: [
      { text: "本篇导读", link: part.href },
      ...part.pages.map((p) => ({
        text: p.title,
        link: p.href,
        ...(p.children
          ? {
              collapsed: true,
              items: p.children.map((c) => ({ text: c.title, link: c.href })),
            }
          : {}),
      })),
    ],
  })),
];

export function getPage(relativePath) {
  return bySource.get(relativePath) || byRoute.get(relativePath);
}

export function resolveBookLink(url, source) {
  if (!url || /^(?:[a-z][a-z\d+.-]*:|\/\/|#)/i.test(url)) return url;
  const split = url.search(/[?#]/);
  const pathname = split < 0 ? url : url.slice(0, split);
  const suffix = split < 0 ? "" : url.slice(split);
  let decoded;
  try {
    decoded = decodeURIComponent(pathname);
  } catch {
    return url;
  }
  const resolved = path.posix
    .normalize(
      decoded.startsWith("/")
        ? decoded.slice(1)
        : path.posix.join(path.posix.dirname(source), decoded),
    )
    .replace(/\/$/, "");
  const target = bySource.get(resolved) || directoryPages.get(resolved);
  if (target) return target.href + suffix;
  if (resolved.startsWith("assets/"))
    return "/" + resolved.split("/").map(encodeURIComponent).join("/") + suffix;
  return url;
}

export function publicBookData() {
  const publicPage = ({ title, href, chapter, children }) => ({
    title,
    href,
    chapter,
    ...(children ? { children: children.map(publicPage) } : {}),
  });
  return {
    parts: parts.map((p) => ({
      id: p.id,
      title: p.title,
      english: p.english,
      range: p.range,
      description: p.description,
      href: p.href,
      pages: p.pages.map(publicPage),
    })),
    chapterCount: parts.reduce((n, p) => n + p.chapters.length, 0),
    caseCount: readingOrder.filter((p) => p.isCase).length,
  };
}
