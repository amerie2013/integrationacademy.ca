// Data figures for the chapter 7 LaTeX worksheets: the same SVG documents as the lessons/bank (figs6 *Doc),
// rendered to a high-resolution PNG by build.mjs and placed with \includegraphics.
import crypto from "crypto";
import { boxPlotDoc, dotPlotDoc, histogramDoc, barChartDoc, scatterDoc } from "../../mth1w-ch6/figs6.mjs";
import { planeDoc } from "../../mth1w-ch4/figs4.mjs";

/** figures waiting to be rendered: file name -> SVG */
export const PENDING = new Map();
const place = (svg, width, caption) => {
  const name = `f${crypto.createHash("sha1").update(svg).digest("hex").slice(0, 12)}.png`;
  PENDING.set(name, svg);
  return String.raw`\begin{center}\includegraphics[width=${width}cm]{${name}}${caption ? String.raw`\\[-2pt]{\footnotesize\itshape ${caption}}` : ""}\end{center}`;
};
export const boxT = (o, width = 7, cap = "") => place(boxPlotDoc({ w: 330, ...o }), width, cap);
export const dotT = (o, width = 7, cap = "") => place(dotPlotDoc({ w: 330, ...o }), width, cap);
export const histT = (o, width = 6.5, cap = "") => place(histogramDoc({ w: 360, ...o }), width, cap);
export const barT = (o, width = 6.5, cap = "") => place(barChartDoc({ w: 360, ...o }), width, cap);
export const scatterT = (o, width = 6.5, cap = "") => place(scatterDoc(o), width, cap);
export const planeT = (o, width = 6.5, cap = "") => place(planeDoc(o), width, cap);

// ---- helpers for coordinate figures in examples and problems
/** labelled point; name "A" gives "A(2, 3)", name null gives "(2, 3)", label:false gives no label */
export const pt = (x, y, name = null, color = "blue") => ({ x, y, label: name === false ? undefined : `${name ?? ""}(${x}, ${y})`, color });
/** Ax + By = C as a planeT line (B ≠ 0) */
export const std = (A, B, C, color = "blue", extra = {}) => ({ m: -A / B, b: C / B, color, ...extra });
/** a coordinate figure with unit grid steps by default */
export const F = (o, width = 6.5, cap = "") => { const v = o.view, wide = v && Math.max(v.xmax - v.xmin, v.ymax - v.ymin) > 13; return planeT({ step: wide ? { x: 2, y: 2 } : { x: 1, y: 1 }, ...o }, Math.max(width, 6.5), cap); };
/** an empty grid for students to graph on */
export const gridT = (view = { xmin: -8, xmax: 8, ymin: -8, ymax: 8 }, step = { x: 1, y: 1 }, width = 6.5, labels = {}) => planeT({ view, step, ...labels }, Math.max(width, 6.5));
/** circle with centre (cx, cy) and radius r as two curves */
export const circ = (r, cx = 0, cy = 0, color = "violet") => [
  { f: (x) => cy + Math.sqrt(Math.max(0, r * r - (x - cx) ** 2)), a: cx - r, b: cx + r, color },
  { f: (x) => cy - Math.sqrt(Math.max(0, r * r - (x - cx) ** 2)), a: cx - r, b: cx + r, color },
];
/** closed polygon through the points */
export const poly = (pts, color = "green") => ({ pts: [...pts, pts[0]], color });
/** not-to-scale rectangle sketch with side labels */
export const rectT = (len, wid, note = "", width = 6) => place(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 420 220" width="420" height="220" font-family="Arial, sans-serif"><rect width="420" height="220" fill="#fff"/><rect x="60" y="40" width="300" height="120" fill="#dcfce7" stroke="#15803d" stroke-width="3"/><text x="210" y="190" font-size="18" font-weight="700" text-anchor="middle" fill="#0f172a">${len}</text><text x="372" y="106" font-size="18" font-weight="700" fill="#0f172a">${wid}</text><text x="210" y="106" font-size="16" text-anchor="middle" fill="#15803d">${note}</text><text x="210" y="28" font-size="13" text-anchor="middle" fill="#64748b">not to scale</text></svg>`, width, "");
/** two places on a straight track, a distance label and an arrow from each end */
export const trackT = (left, right, dist, la = "", ra = "", width = 7) => place(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 150" width="480" height="150" font-family="Arial, sans-serif"><defs><marker id="ah" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="#be123c"/></marker></defs><rect width="480" height="150" fill="#fff"/><line x1="40" y1="80" x2="440" y2="80" stroke="#475569" stroke-width="4"/><circle cx="40" cy="80" r="9" fill="#1e40af"/><circle cx="440" cy="80" r="9" fill="#1e40af"/><text x="40" y="115" font-size="16" font-weight="700" text-anchor="middle" fill="#1e40af">${left}</text><text x="440" y="115" font-size="16" font-weight="700" text-anchor="middle" fill="#1e40af">${right}</text><text x="240" y="135" font-size="16" font-weight="700" text-anchor="middle" fill="#0f172a">${dist}</text><line x1="60" y1="55" x2="170" y2="55" stroke="#be123c" stroke-width="3" marker-end="url(#ah)"/><line x1="420" y1="55" x2="310" y2="55" stroke="#be123c" stroke-width="3" marker-end="url(#ah)"/><text x="115" y="40" font-size="15" text-anchor="middle" fill="#be123c">${la}</text><text x="365" y="40" font-size="15" text-anchor="middle" fill="#be123c">${ra}</text></svg>`, width, "");
