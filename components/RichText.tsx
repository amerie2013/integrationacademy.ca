"use client";

import katex from "katex";

/**
 * Renders authored text supporting:
 *  - $$display math$$ on its own line
 *  - $inline math$
 *  - **bold**
 *  - blank lines → paragraphs
 */
export function RichText({ text }: { text: string }) {
  const paragraphs = text.split(/\n\s*\n/);
  return (
    <div style={{ fontSize: 16, lineHeight: 1.7, color: "#1e293b" }}>
      {paragraphs.map((para, i) => (
        <p key={i} style={{ margin: "0 0 14px" }}>
          {renderInline(para)}
        </p>
      ))}
    </div>
  );
}

function tex(src: string, display: boolean) {
  try {
    return katex.renderToString(src, { displayMode: display, throwOnError: false });
  } catch {
    return src;
  }
}

function renderInline(src: string): React.ReactNode[] {
  const nodes: React.ReactNode[] = [];
  // Split on $$...$$ first, then $...$, keeping delimiters.
  const parts = src.split(/(\$\$[^$]*\$\$|\$[^$]+\$)/g);
  parts.forEach((part, idx) => {
    if (part.startsWith("$$") && part.endsWith("$$")) {
      nodes.push(<span key={idx} dangerouslySetInnerHTML={{ __html: tex(part.slice(2, -2), true) }} />);
    } else if (part.startsWith("$") && part.endsWith("$") && part.length > 1) {
      nodes.push(<span key={idx} dangerouslySetInnerHTML={{ __html: tex(part.slice(1, -1), false) }} />);
    } else {
      // handle **bold** and line breaks
      const bits = part.split(/(\*\*[^*]+\*\*)/g);
      bits.forEach((b, j) => {
        if (b.startsWith("**") && b.endsWith("**")) {
          nodes.push(<strong key={`${idx}-${j}`}>{b.slice(2, -2)}</strong>);
        } else {
          const lines = b.split("\n");
          lines.forEach((line, k) => {
            nodes.push(<span key={`${idx}-${j}-${k}`}>{line}</span>);
            if (k < lines.length - 1) nodes.push(<br key={`${idx}-${j}-${k}-br`} />);
          });
        }
      });
    }
  });
  return nodes;
}
