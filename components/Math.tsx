"use client";

import { useMemo } from "react";
import katex from "katex";

/**
 * Renders a LaTeX string with KaTeX. Use `block` for centered display math.
 * Example: <Math expr="\\int_0^1 x^2\\,dx = \\frac{1}{3}" block />
 */
export function Math({ expr, block = false }: { expr: string; block?: boolean }) {
  const html = useMemo(() => {
    try {
      return katex.renderToString(expr, {
        displayMode: block,
        throwOnError: false,
      });
    } catch {
      return expr;
    }
  }, [expr, block]);

  return (
    <span
      style={{ display: block ? "block" : "inline-block", textAlign: block ? "center" : undefined }}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
