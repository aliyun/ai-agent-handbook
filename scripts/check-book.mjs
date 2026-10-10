import assert from "node:assert/strict";
import { readdirSync, existsSync } from "node:fs";
import path from "node:path";
import MarkdownIt from "markdown-it";
import {
  pages,
  parts,
  root,
  bySource,
  readSource,
  resolveBookLink,
  publicBookData,
} from "../.vitepress/book.mjs";

const errors = [];
const md = new MarkdownIt();
const hrefs = new Set(pages.map((p) => p.href));
assert.equal(
  new Set(pages.map((p) => p.route)).size,
  pages.length,
  "Public routes must be unique",
);
assert.equal(
  bySource.size,
  pages.length,
  "Every source has exactly one public route",
);
function checkDirectory(directory) {
  for (const entry of readdirSync(path.join(root, directory), {
    withFileTypes: true,
  })) {
    const source = `${directory}/${entry.name}`;
    if (entry.isDirectory()) checkDirectory(source);
    else if (source.endsWith(".md") && !bySource.has(source))
      errors.push(`Missing from book navigation: ${source}`);
  }
}
for (const dir of ["00-preface", ...parts.map((p) => p.dir)])
  checkDirectory(dir);
let images = 0,
  diagrams = 0;
for (const page of pages) {
  function visit(tokens) {
    for (const token of tokens) {
      if (token.type === "fence" && token.info.trim() === "mermaid") diagrams++;
      if (token.type === "image") images++;
      const attr =
        token.type === "image"
          ? "src"
          : token.type === "link_open"
            ? "href"
            : null;
      const original = attr && token.attrGet(attr);
      if (original && !/^(?:[a-z][a-z\d+.-]*:|\/\/|#)/i.test(original)) {
        const target = resolveBookLink(original, page.source).split(/[?#]/)[0];
        if (!hrefs.has(target)) {
          const file = target.startsWith("/")
            ? path.join(root, decodeURIComponent(target))
            : path.resolve(
                root,
                path.dirname(page.source),
                decodeURIComponent(target),
              );
          if (!existsSync(file))
            errors.push(`${page.source}: missing ${original}`);
          else if (attr === "href" && !target.startsWith("/assets/"))
            errors.push(
              `${page.source}: link has no public route: ${original}`,
            );
        }
      }
      if (token.children) visit(token.children);
    }
  }
  visit(md.parse(readSource(page.source), {}));
}
if (errors.length) {
  console.error(errors.join("\n"));
  process.exit(1);
}
const book = publicBookData();
console.log(
  `Book checked: ${pages.length} pages, ${book.chapterCount} chapters, ${book.caseCount} cases, ${images} image references, ${diagrams} Mermaid diagrams.`,
);
