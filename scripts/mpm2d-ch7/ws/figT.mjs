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
/** any standalone SVG as a figure */
export const svgT = (svg, width = 6) => place(svg, width, "");
const tx = (s) => String(s).replace(/-/g, "−").replace(/\^2/g, "²").replace(/\^3/g, "³");
/** area model: row labels, column labels, cell texts (plain, ^2 → ²); negative cells shaded red */
export const areaT = (rows, cols, cells, width = 6) => {
  const cw = 110, ch = 64, L = 70, T = 34, W = L + cols.length * cw + 10, H = T + rows.length * ch + 10;
  let s = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" font-family="Arial, sans-serif"><rect width="${W}" height="${H}" fill="#fff"/>`;
  cols.forEach((c, j) => { s += `<text x="${L + j * cw + cw / 2}" y="${T - 10}" font-size="20" font-weight="700" text-anchor="middle" fill="#be123c">${tx(c)}</text>`; });
  rows.forEach((r, i) => {
    s += `<text x="${L - 10}" y="${T + i * ch + ch / 2 + 7}" font-size="20" font-weight="700" text-anchor="end" fill="#1e40af">${tx(r)}</text>`;
    cells[i].forEach((c, j) => { const neg = /^-/.test(String(c)); s += `<rect x="${L + j * cw + 2}" y="${T + i * ch + 2}" width="${cw - 4}" height="${ch - 4}" rx="8" fill="${neg ? "#ffe4e6" : "#dbeafe"}" stroke="#94a3b8"/><text x="${L + j * cw + cw / 2}" y="${T + i * ch + ch / 2 + 7}" font-size="20" text-anchor="middle" fill="#0f172a">${tx(c)}</text>`; });
  });
  return place(s + "</svg>", width, "");
};
/** a parabola y = f(x) with its zeros marked */
export const parT = (f, zeros, view, opts = {}) => F({ view, curves: [{ f, color: "violet" }], points: zeros.map((z) => ({ x: z, y: 0, label: `(${Math.round(z * 100) / 100}, 0)`, color: "red" })), ...opts });
/** a square of side `outer` with a corner square of side `inner` removed (not to scale) */
export const sqInSqT = (outer, inner, note = "", width = 5) => place(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 270" width="320" height="270" font-family="Arial, sans-serif"><rect width="320" height="270" fill="#fff"/><rect x="40" y="34" width="210" height="210" fill="#dbeafe" stroke="#1e40af" stroke-width="3"/><rect x="160" y="154" width="90" height="90" fill="#fff" stroke="#be123c" stroke-width="3" stroke-dasharray="7 5"/><text x="145" y="24" font-size="18" font-weight="700" text-anchor="middle" fill="#1e40af">${tx(outer)}</text><text x="205" y="204" font-size="17" font-weight="700" text-anchor="middle" fill="#be123c">${tx(inner)}</text><text x="100" y="120" font-size="15" text-anchor="middle" fill="#0f172a">${note}</text><text x="160" y="264" font-size="13" text-anchor="middle" fill="#64748b">not to scale</text></svg>`, width, "");
/** a rectangle (photo, garden …) inside a frame of uniform width (not to scale) */
export const frameT = (len, wid, border, note = "", width = 6) => place(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 420 260" width="420" height="260" font-family="Arial, sans-serif"><rect width="420" height="260" fill="#fff"/><rect x="40" y="30" width="340" height="200" fill="#fef3c7" stroke="#b45309" stroke-width="3"/><rect x="90" y="70" width="240" height="120" fill="#dcfce7" stroke="#15803d" stroke-width="3"/><text x="210" y="208" font-size="17" font-weight="700" text-anchor="middle" fill="#15803d">${tx(len)}</text><text x="340" y="135" font-size="17" font-weight="700" fill="#15803d">${tx(wid)}</text><text x="65" y="58" font-size="15" text-anchor="middle" fill="#b45309">${tx(border)}</text><text x="210" y="134" font-size="15" text-anchor="middle" fill="#0f172a">${note}</text><text x="210" y="252" font-size="13" text-anchor="middle" fill="#64748b">not to scale</text></svg>`, width, "");
/** a rectangular pen against a wall/river (3 fenced sides, not to scale) */
export const fenceT = (wid, len, wall = "river", width = 6) => place(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 420 230" width="420" height="230" font-family="Arial, sans-serif"><rect width="420" height="230" fill="#fff"/><rect x="20" y="22" width="380" height="26" fill="#bfdbfe"/><text x="210" y="40" font-size="15" text-anchor="middle" fill="#1e40af">${wall}</text><rect x="70" y="48" width="280" height="120" fill="#dcfce7"/><polyline points="70,48 70,168 350,168 350,48" fill="none" stroke="#b45309" stroke-width="4" stroke-dasharray="9 5"/><text x="58" y="113" font-size="17" font-weight="700" text-anchor="end" fill="#0f172a">${tx(wid)}</text><text x="362" y="113" font-size="17" font-weight="700" fill="#0f172a">${tx(wid)}</text><text x="210" y="192" font-size="17" font-weight="700" text-anchor="middle" fill="#0f172a">${tx(len)}</text><text x="210" y="222" font-size="13" text-anchor="middle" fill="#64748b">not to scale</text></svg>`, width, "");
// ---- triangle scenes (chapter 6): figs5 scene items rendered as a figure
import { figDoc } from "../../mth1w-ch5/figs5.mjs";
import { rt, atri } from "../lib.mjs";
export { polygon } from "../../mth1w-ch5/figs5.mjs";
/** any figs5 scene (items) as a worksheet figure */
export const sceneT = (items, width = 6, w = 380) => svgT(figDoc({ w, items }), width);
/** right triangle: adj along the bottom, right angle bottom-right, theta at the left (labels as in lib rt) */
export const rtT = (adj, opp, labels = {}, width = 5.5) => sceneT(rt(adj, opp, labels), width, 340);
/** right triangle drawn to scale from an angle (degrees) and a hypotenuse length */
export const rtA = (deg, labels = {}, width = 5.5) => rtT(Math.cos((deg * Math.PI) / 180), Math.sin((deg * Math.PI) / 180), labels, width);
/** acute triangle to scale from ∠A, ∠B and AB = c (labels as in lib atri) */
export const atriT = (A, B, c, labels = {}, width = 5.5) => sceneT(atri(A, B, c, labels), width, 340);
