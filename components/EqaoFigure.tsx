"use client";

// Renders a question's figure: inline SVG we author, or the interactive
// /tools/graph calculator embed (the platform's Desmos equivalent).
import type { Figure } from "../lib/eqao";

export function EqaoFigure({ figure }: { figure: Figure }) {
  if (!figure) return null;

  if (figure.type === "svg") {
    return (
      <div
        style={{
          margin: "4px 0 16px",
          padding: 12,
          background: "#f8fafc",
          border: "1px solid #e2e8f0",
          borderRadius: 12,
          display: "flex",
          justifyContent: "center",
        }}
        // SVG is author-controlled content from the question bank (admin-only writes).
        dangerouslySetInnerHTML={{ __html: figure.svg }}
      />
    );
  }

  if (figure.type === "graph") {
    const data = encodeURIComponent(btoa(JSON.stringify(figure.data)));
    return (
      <iframe
        title="Interactive graph"
        src={`/tools/graph?embed=1&data=${data}`}
        style={{
          width: "100%",
          height: 320,
          border: "1px solid #e2e8f0",
          borderRadius: 12,
          margin: "4px 0 16px",
        }}
      />
    );
  }

  return null;
}
