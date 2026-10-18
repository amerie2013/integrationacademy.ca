// Bank/assignment figures for MHF4U chapter 1: coordinate planes and mapping diagrams (standalone SVG documents).
import { planeDoc } from "../../mth1w-ch4/figs4.mjs";
export { planeDoc };
const lab = (v) => String(Math.round(v * 100) / 100).replace(/-/g, "−");
/** a labelled point for planeDoc */
export const P = (x, y, name = null, color = "blue") => ({ x, y, label: name === false ? undefined : `${name ?? ""}(${lab(x)}, ${lab(y)})`, color });
/** sideways parabola x = a(y − k)² + h */
export const sideways = (h, k, a = 1, color = "violet") => [
  { f: (x) => k + Math.sqrt((x - h) / a), ...(a > 0 ? { a: h } : { b: h }), color },
  { f: (x) => k - Math.sqrt((x - h) / a), ...(a > 0 ? { a: h } : { b: h }), color },
];
/** circle */
export const circ = (r, cx = 0, cy = 0, color = "violet") => [
  { f: (x) => cy + Math.sqrt(Math.max(0, r * r - (x - cx) ** 2)), a: cx - r, b: cx + r, color },
  { f: (x) => cy - Math.sqrt(Math.max(0, r * r - (x - cx) ** 2)), a: cx - r, b: cx + r, color },
];
/** the five parents as curve specs */
export const PAR = {
  x: { f: (x) => x, color: "gray" }, x2: { f: (x) => x * x, color: "blue" }, sqrt: { f: (x) => Math.sqrt(x), a: 0, color: "green" },
  recip: { f: (x) => 1 / x, color: "red" }, abs: { f: (x) => Math.abs(x), color: "amber" },
};
/** a plane with a single curve y = f(x) (optionally on [a, b]) and points */
export const graph = (f, view, points = [], { a, b, step, lines = [], vlines = [], more = [], segs = [] } = {}) =>
  planeDoc({ view, curves: [{ f, color: "violet", ...(a !== undefined ? { a } : {}), ...(b !== undefined ? { b } : {}) }, ...more], points, lines, vlines, segs, ...(step ? { step } : {}) });
/** mapping diagram */
export function mapDoc(pairs) {
  const xs = [...new Set(pairs.map((p) => p[0]))], ys = [...new Set(pairs.map((p) => p[1]))];
  const H = Math.max(xs.length, ys.length) * 46 + 50, Y = (i, k) => 40 + (i + 0.5) * ((H - 50) / k);
  let s = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 ${H}" width="360" height="${H}" font-family="Arial, sans-serif"><rect width="360" height="${H}" fill="#fff"/><defs><marker id="ah" markerWidth="10" markerHeight="10" refX="9" refY="5" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="#6d28d9"/></marker></defs>`;
  s += `<text x="70" y="22" font-size="16" font-weight="700" text-anchor="middle" fill="#1e40af">x</text><text x="290" y="22" font-size="16" font-weight="700" text-anchor="middle" fill="#be123c">y</text>`;
  s += `<ellipse cx="70" cy="${(H + 30) / 2}" rx="48" ry="${(H - 50) / 2 + 4}" fill="#dbeafe"/><ellipse cx="290" cy="${(H + 30) / 2}" rx="48" ry="${(H - 50) / 2 + 4}" fill="#ffe4e6"/>`;
  for (const [x, y] of pairs) s += `<line x1="92" y1="${Y(xs.indexOf(x), xs.length)}" x2="266" y2="${Y(ys.indexOf(y), ys.length)}" stroke="#6d28d9" stroke-width="2.4" marker-end="url(#ah)"/>`;
  xs.forEach((x, i) => { s += `<text x="70" y="${Y(i, xs.length) + 6}" font-size="18" font-weight="700" text-anchor="middle" fill="#1e40af">${lab(x)}</text>`; });
  ys.forEach((y, i) => { s += `<text x="290" y="${Y(i, ys.length) + 6}" font-size="18" font-weight="700" text-anchor="middle" fill="#be123c">${lab(y)}</text>`; });
  return s + "</svg>";
}
