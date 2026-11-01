"use client";

import { useEffect, useId, useRef } from "react";
import { useTheme } from "next-themes";

export default function ArticleContent({ html, className }: { html: string; className: string }) {
  const container = useRef<HTMLDivElement>(null);
  const id = useId().replace(/:/g, "");
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    const root = container.current;
    if (!root || !html.includes("language-mermaid")) return;
    let cancelled = false;
    // Restore the source before rendering again after a theme change.
    root.innerHTML = html;
    const blocks = Array.from(root.querySelectorAll<HTMLElement>("pre > code.language-mermaid"));
    async function renderDiagrams() {
      try {
        const { default: mermaid } = await import("mermaid");
        if (cancelled) return;
        mermaid.initialize({ startOnLoad: false, securityLevel: "strict", theme: resolvedTheme === "dark" ? "dark" : "neutral", suppressErrorRendering: true });
        for (let index = 0; index < blocks.length; index += 1) {
          const block = blocks[index];
          if (cancelled) return;
          const source = block.textContent || "";
          try {
            const { svg } = await mermaid.render(`diagram-${id}-${index}`, source);
            if (cancelled) return;
            const figure = document.createElement("figure");
            figure.className = "diagram";
            figure.setAttribute("role", "img");
            figure.setAttribute("aria-label", "Article diagram");
            figure.innerHTML = svg;
            block.parentElement?.replaceWith(figure);
          } catch {
            if (cancelled) return;
            const message = document.createElement("p");
            message.className = "diagram-error";
            message.textContent = "Diagram unavailable. The source is shown below.";
            block.parentElement?.before(message);
          }
        }
      } catch {
        // Keep readable fenced source if the optional diagram chunk cannot load.
      }
    }
    void renderDiagrams();
    return () => { cancelled = true; };
  }, [html, id, resolvedTheme]);

  return <div ref={container} className={className} dangerouslySetInnerHTML={{ __html: html }} />;
}
