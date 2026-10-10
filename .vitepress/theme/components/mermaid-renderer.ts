let queue = Promise.resolve();
let sequence = 0;
export function renderDiagram(code: string, dark: boolean) {
  const result = queue.then(async () => {
    const { default: mermaid } = await import("mermaid");
    mermaid.initialize({
      startOnLoad: false,
      securityLevel: "strict",
      layout: "dagre",
      theme: dark ? "dark" : "neutral",
      fontFamily: "system-ui, sans-serif",
      flowchart: { useMaxWidth: true, htmlLabels: false },
      suppressErrorRendering: true,
    });
    return (await mermaid.render(`book-diagram-${++sequence}`, code)).svg;
  });
  queue = result.then(
    () => {},
    () => {},
  );
  return result;
}
