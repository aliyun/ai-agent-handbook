import fs from "node:fs";
import path from "node:path";
import process from "node:process";

const root = process.cwd();
const ignoredDirectories = new Set([
  ".git",
  ".omx",
  "artifacts",
  "node_modules",
]);
const imageExtensions = new Set([
  ".avif",
  ".gif",
  ".jpeg",
  ".jpg",
  ".png",
  ".svg",
  ".webp",
]);

function collectFiles(directory, predicate) {
  const files = [];

  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    if (entry.isDirectory() && ignoredDirectories.has(entry.name)) {
      continue;
    }

    const entryPath = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      files.push(...collectFiles(entryPath, predicate));
    } else if (predicate(entryPath)) {
      files.push(entryPath);
    }
  }

  return files;
}

function linesOutsideFences(markdown) {
  let fence = null;

  return markdown.split(/\r?\n/).map((line) => {
    const marker = line.match(/^ {0,3}(`{3,}|~{3,})/);
    if (marker) {
      const character = marker[1][0];
      if (!fence) {
        fence = { character, length: marker[1].length };
      } else if (
        character === fence.character &&
        marker[1].length >= fence.length
      ) {
        fence = null;
      }
      return "";
    }

    return fence ? "" : line;
  });
}

function normalizeTarget(rawTarget) {
  let target = rawTarget.trim();
  if (target.startsWith("<") && target.endsWith(">")) {
    target = target.slice(1, -1);
  } else {
    target = target.replace(/\s+["'][^"']*["']\s*$/, "");
  }

  if (
    !target ||
    target.startsWith("#") ||
    target.startsWith("//") ||
    /^[a-z][a-z\d+.-]*:/i.test(target)
  ) {
    return null;
  }

  target = target.split("#", 1)[0].split("?", 1)[0];
  try {
    return decodeURIComponent(target);
  } catch {
    return target;
  }
}

function resolveTarget(markdownFile, target) {
  return target.startsWith("/")
    ? path.join(root, target)
    : path.resolve(path.dirname(markdownFile), target);
}

const markdownFiles = collectFiles(root, (file) => file.endsWith(".md"));
const assetFiles = collectFiles(path.join(root, "assets"), (file) =>
  imageExtensions.has(path.extname(file).toLowerCase()),
);
const referencedAssets = new Set();
const errors = [];
let localTargetCount = 0;

for (const markdownFile of markdownFiles) {
  const relativeFile = path.relative(root, markdownFile);
  const pathSegments = relativeFile.split(path.sep);

  for (const segment of pathSegments) {
    if (/\u3000/.test(segment)) {
      errors.push(`${relativeFile}: path contains a full-width space`);
    }
    if (/ {2,}/.test(segment)) {
      errors.push(`${relativeFile}: path contains consecutive spaces`);
    }
    if (/\s+\.md$/i.test(segment)) {
      errors.push(`${relativeFile}: path contains whitespace before .md`);
    }
    if (/^第\d+章/.test(segment)) {
      errors.push(
        `${relativeFile}: chapter paths must use the format "第 N 章"`,
      );
    }
  }

  const markdown = fs.readFileSync(markdownFile, "utf8");
  const visibleLines = linesOutsideFences(markdown);
  const visibleMarkdown = visibleLines.join("\n");
  const headings = [];

  visibleLines.forEach((line, index) => {
    const heading = line.match(/^(#{1,6})\s+(.+?)\s*#*\s*$/);
    if (heading) {
      headings.push({
        level: heading[1].length,
        line: index + 1,
        title: heading[2],
      });
    }
  });

  const topLevelHeadings = headings.filter((heading) => heading.level === 1);
  if (topLevelHeadings.length !== 1) {
    errors.push(
      `${relativeFile}: expected exactly one H1, found ${topLevelHeadings.length}`,
    );
  }

  for (let index = 1; index < headings.length; index += 1) {
    const previous = headings[index - 1];
    const current = headings[index];
    if (current.level > previous.level + 1) {
      errors.push(
        `${relativeFile}:${current.line}: heading jumps from H${previous.level} to H${current.level} (${current.title})`,
      );
    }
  }

  const references = [];
  const inlineReference = /(!?)\[[^\]]*\]\(\s*(<[^>]+>|[^)]+?)\s*\)/g;
  const definitionReference =
    /^ {0,3}\[[^\]]+\]:\s*(<[^>]+>|\S+)(?:\s+.*)?$/gm;
  const htmlImage = /<(?:img|source)\b[^>]+\b(?:src|srcset)=["']([^"']+)["']/gi;

  for (const match of visibleMarkdown.matchAll(inlineReference)) {
    references.push({ isImage: match[1] === "!", target: match[2] });
  }
  for (const match of visibleMarkdown.matchAll(definitionReference)) {
    references.push({ isImage: false, target: match[1] });
  }
  for (const match of visibleMarkdown.matchAll(htmlImage)) {
    references.push({ isImage: true, target: match[1] });
  }

  for (const reference of references) {
    const target = normalizeTarget(reference.target);
    if (!target) {
      continue;
    }

    localTargetCount += 1;
    const resolvedTarget = resolveTarget(markdownFile, target);
    if (!fs.existsSync(resolvedTarget)) {
      errors.push(
        `${relativeFile}: missing local ${reference.isImage ? "image" : "link"} target ${target}`,
      );
      continue;
    }

    if (
      reference.isImage &&
      path.relative(root, resolvedTarget).startsWith(`assets${path.sep}`)
    ) {
      referencedAssets.add(path.resolve(resolvedTarget));
    }
  }
}

for (const assetFile of assetFiles) {
  if (!referencedAssets.has(path.resolve(assetFile))) {
    errors.push(`assets: unreferenced image ${path.relative(root, assetFile)}`);
  }
}

if (errors.length > 0) {
  console.error(`Documentation checks failed with ${errors.length} issue(s):`);
  for (const error of errors) {
    console.error(`- ${error}`);
  }
  process.exitCode = 1;
} else {
  console.log(
    `Documentation checks passed: ${markdownFiles.length} Markdown files, ${localTargetCount} local targets, ${assetFiles.length} referenced images.`,
  );
}
