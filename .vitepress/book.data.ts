import { publicBookData } from "./book.mjs";

export default {
  watch: [
    "../0*/**/*.md",
    "../README*.md",
    "../2026-agent-survey-report.md",
    "../website/*.md",
  ],
  load: publicBookData,
};
