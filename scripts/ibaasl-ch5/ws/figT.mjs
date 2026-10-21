// Figures for the IB AA SL chapter 5 LaTeX worksheets: the same coordinate-plane SVGs as the lessons and bank,
// rendered to a high-resolution PNG by build.mjs and placed with \includegraphics.
import crypto from "crypto";
import { planeDoc } from "../../mth1w-ch4/figs4.mjs";

/** figures waiting to be rendered: file name -> SVG */
export const PENDING = new Map();
const place = (svg, width, caption) => {
  const name = `f${crypto.createHash("sha1").update(svg).digest("hex").slice(0, 12)}.png`;
  PENDING.set(name, svg);
  return String.raw`\begin{center}\includegraphics[width=${width}cm]{${name}}${caption ? String.raw`\\[-2pt]{\footnotesize\itshape ${caption}}` : ""}\end{center}`;
};
export const planeT = (o, width = 6.5, cap = "") => place(planeDoc(o), width, cap);
const lab = (v) => String(Math.round(v * 100) / 100).replace(/-/g, "−");
/** labelled point */
export const pt = (x, y, name = null, color = "blue") => ({ x, y, label: name === false ? undefined : `${name ?? ""}(${lab(x)}, ${lab(y)})`, color });
/** a coordinate figure with unit grid steps by default */
export const F = (o, width = 6.5, cap = "") => { const v = o.view, wide = v && Math.max(v.xmax - v.xmin, v.ymax - v.ymin) > 13; return planeT({ step: wide ? { x: 2, y: 2 } : { x: 1, y: 1 }, ...o }, Math.max(width, 6.5), cap); };
/** an empty grid for students to graph on */
export const gridT = (view = { xmin: -8, xmax: 8, ymin: -8, ymax: 8 }, step = { x: 1, y: 1 }, width = 6.5) => planeT({ view, step }, Math.max(width, 6.5));
/** sideways parabola x = a(y − k)² + h as two curves */
export const sideways = (h, k, a = 1, color = "violet") => [
  { f: (x) => k + Math.sqrt((x - h) / a), ...(a > 0 ? { a: h } : { b: h }), color },
  { f: (x) => k - Math.sqrt((x - h) / a), ...(a > 0 ? { a: h } : { b: h }), color },
];
/** circle with centre (cx, cy) and radius r as two curves */
export const circ = (r, cx = 0, cy = 0, color = "violet") => [
  { f: (x) => cy + Math.sqrt(Math.max(0, r * r - (x - cx) ** 2)), a: cx - r, b: cx + r, color },
  { f: (x) => cy - Math.sqrt(Math.max(0, r * r - (x - cx) ** 2)), a: cx - r, b: cx + r, color },
];
/** mapping diagram from a list of [x, y] pairs */
export function mapT(pairs, width = 5.5) {
  const xs = [...new Set(pairs.map((p) => p[0]))], ys = [...new Set(pairs.map((p) => p[1]))];
  const H = Math.max(xs.length, ys.length) * 46 + 50, Y = (i, k) => 40 + (i + 0.5) * ((H - 50) / k);
  let s = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 ${H}" width="360" height="${H}" font-family="Arial, sans-serif"><rect width="360" height="${H}" fill="#fff"/><defs><marker id="ah" markerWidth="10" markerHeight="10" refX="9" refY="5" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="#6d28d9"/></marker></defs>`;
  s += `<text x="70" y="22" font-size="16" font-weight="700" text-anchor="middle" fill="#1e40af">x</text><text x="290" y="22" font-size="16" font-weight="700" text-anchor="middle" fill="#be123c">y</text>`;
  s += `<ellipse cx="70" cy="${(H + 30) / 2}" rx="48" ry="${(H - 50) / 2 + 4}" fill="#dbeafe"/><ellipse cx="290" cy="${(H + 30) / 2}" rx="48" ry="${(H - 50) / 2 + 4}" fill="#ffe4e6"/>`;
  for (const [x, y] of pairs) s += `<line x1="92" y1="${Y(xs.indexOf(x), xs.length)}" x2="266" y2="${Y(ys.indexOf(y), ys.length)}" stroke="#6d28d9" stroke-width="2.4" marker-end="url(#ah)"/>`;
  xs.forEach((x, i) => { s += `<text x="70" y="${Y(i, xs.length) + 6}" font-size="18" font-weight="700" text-anchor="middle" fill="#1e40af">${lab(x)}</text>`; });
  ys.forEach((y, i) => { s += `<text x="290" y="${Y(i, ys.length) + 6}" font-size="18" font-weight="700" text-anchor="middle" fill="#be123c">${lab(y)}</text>`; });
  return place(s + "</svg>", width, "");
}
/** any standalone SVG as a figure */
export const svgT = (svg, width = 6) => place(svg, width, "");
