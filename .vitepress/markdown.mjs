import { getPage, resolveBookLink } from "./book.mjs";

export function bookMarkdown(md) {
  md.core.ruler.after("inline", "book-links", (state) => {
    const page = getPage(state.env.relativePath || "");
    if (!page) return;
    function walk(tokens) {
      for (const token of tokens) {
        if (token.type === "link_open")
          token.attrSet(
            "href",
            resolveBookLink(token.attrGet("href"), page.source),
          );
        if (token.type === "image")
          token.attrSet(
            "src",
            resolveBookLink(token.attrGet("src"), page.source),
          );
        if (token.children) walk(token.children);
      }
    }
    walk(state.tokens);
  });

  const text = md.renderer.rules.text;
  md.renderer.rules.text = (tokens, index, options, env, self) => {
    const html = text
      ? text(tokens, index, options, env, self)
      : md.utils.escapeHtml(tokens[index].content);
    return html.replace(
      /\{\{[\s\S]*?\}\}/g,
      (match) => `<span v-pre>${match}</span>`,
    );
  };
  const fence = md.renderer.rules.fence;
  md.renderer.rules.fence = (tokens, index, options, env, self) => {
    const token = tokens[index];
    if (token.info.trim() === "mermaid")
      return `<MermaidDiagram code="${encodeURIComponent(token.content)}" />\n`;
    return fence(tokens, index, options, env, self);
  };
}
