// LaTeX text labels for the graph canvas: slider values are substituted into
// the LaTeX, then the result is rendered with KaTeX into an image the canvas
// can draw (an SVG <foreignObject> with the KaTeX fonts embedded — the same
// technique the whiteboard export uses).

import katex from "katex";
import { loadKatexCss } from "./wbexport";

const fmtNum = (v: number) => {
  if (!Number.isFinite(v)) return "?";
  const r = String(Math.round(v * 1000) / 1000);
  return r.startsWith("-") ? `{${r}}` : r; // braced so x^a with a = -1 stays valid
};
const esc = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

/**
 * Put the sliders' current values into a LaTeX label: "a" shows a's value,
 * "\frac{a}{2}" shows its numerator, and a leading "a =" keeps the name on the
 * left ("a = a" → "a = 1.5"). LaTeX commands and \text{…} are left alone.
 */
export function substituteSliders(latex: string, vars: Record<string, number>): string {
  const names = Object.keys(vars).filter(Boolean).sort((a, b) => b.length - a.length);
  if (!names.length) return latex;
  let prefix = "";
  let rest = latex;
  for (const name of names) {
    const m = rest.match(new RegExp(`^(\\s*)(${esc(name)})(\\s*=\\s*)`));
    if (m) { prefix = m[0]; rest = rest.slice(m[0].length); break; }
  }
  const re = new RegExp(names.map(esc).join("|"), "g");
  const parts = rest.split(/(\\(?:text|textbf|mathrm|operatorname)\s*\{[^{}]*\}|\\[A-Za-z]+)/);
  return prefix + parts.map((p, i) => (i % 2 ? p : p.replace(re, (n) => fmtNum(vars[n])))).join("");
}

export type LatexImage = { img: HTMLImageElement; w: number; h: number };

const cache = new Map<string, LatexImage>();
const lastByLabel = new Map<string, LatexImage>();
const inflight = new Map<string, string>(); // label id -> key being rendered
const failed = new Set<string>();

async function render(latex: string, color: string, size: number): Promise<LatexImage> {
  const css = await loadKatexCss();
  const html = katex.renderToString(latex, { throwOnError: false, output: "html" });
  const style = `color:${color};font-size:${size}px;line-height:1.2;white-space:nowrap;display:inline-block;padding:2px 3px;`;
  // measure in the live DOM first (the SVG needs an explicit size)
  const probe = document.createElement("div");
  probe.setAttribute("style", `position:fixed;left:-9999px;top:0;visibility:hidden;${style}`);
  probe.innerHTML = html;
  document.body.appendChild(probe);
  try { await document.fonts.ready; } catch { /* measure anyway */ }
  const box = probe.getBoundingClientRect();
  probe.remove();
  const w = Math.ceil(box.width) + 2, h = Math.ceil(box.height) + 2;
  const S = 2; // render at 2x so it stays crisp on the canvas
  const holder = document.createElement("div");
  holder.setAttribute("style", `width:${w}px;height:${h}px;`);
  holder.innerHTML = `<div style="${style}">${html}</div>`;
  const xhtml = new XMLSerializer().serializeToString(holder);
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${w * S}" height="${h * S}" viewBox="0 0 ${w} ${h}"><foreignObject x="0" y="0" width="${w}" height="${h}"><style xmlns="http://www.w3.org/1999/xhtml"><![CDATA[${css}]]></style>${xhtml}</foreignObject></svg>`;
  const img = new Image();
  img.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svg);
  await img.decode();
  return { img, w, h };
}

/**
 * The rendered image for a label, if ready. Otherwise starts rendering (one
 * render at a time per label, so a sliding value can't queue up dozens) and
 * returns the label's previous image so the text doesn't flicker; `onReady`
 * fires when the new one is available.
 */
export function latexLabelImage(labelId: string, latex: string, color: string, size: number, onReady: () => void): LatexImage | null {
  const key = `${latex}\u0000${color}\u0000${size}`;
  const hit = cache.get(key);
  if (hit) { lastByLabel.set(labelId, hit); return hit; }
  if (!inflight.has(labelId) && !failed.has(key)) {
    inflight.set(labelId, key);
    render(latex, color, size)
      .then((r) => {
        if (cache.size > 300) cache.delete(cache.keys().next().value as string);
        cache.set(key, r);
      })
      .catch(() => { failed.add(key); }) // unrenderable: keep what was showing, don't retry
      .finally(() => { inflight.delete(labelId); onReady(); });
  }
  return lastByLabel.get(labelId) ?? null;
}
