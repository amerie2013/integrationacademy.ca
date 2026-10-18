// Chapter 7 worksheet helpers: discrete plots of sequences, bar charts of terms, Pascal's triangle and grids.
import { planeT } from "./figT.mjs";

const niceStep = (span) => [0.5, 1, 2, 5, 10, 20, 25, 50, 100, 200, 250, 500, 1000, 2000, 5000].find((s) => span / s <= 10) ?? 10000;
const lab = (v) => String(Math.round(v * 100) / 100).replace(/-/g, "−");
/** points (n, tₙ) for n = start, start + 1, …; optional guide curve f; labels: true → values */
export function dotsT(vals, o = {}) {
  const start = o.start ?? 1, xs = vals.map((_, i) => i + start);
  const lo = Math.min(0, ...vals), hi = Math.max(0, ...vals), pad = (hi - lo) * 0.12 || 1;
  const view = { xmin: start - 1, xmax: start + vals.length, ymin: lo - (lo < 0 ? pad : 0), ymax: hi + pad };
  return planeT({
    view, step: { x: 1, y: niceStep(view.ymax - view.ymin) },
    points: vals.map((v, i) => ({ x: xs[i], y: v, label: o.labels ? lab(v) : undefined })),
    curves: o.f ? [{ f: o.f, a: start - 0.5, b: start + vals.length - 0.5, color: "gray" }] : [],
    lines: o.lines ?? [], xlabel: o.xlabel ?? "n", ylabel: o.ylabel ?? "tₙ",
  }, o.width ?? 6.5, o.cap ?? "");
}
/** vertical bars for terms (useful for series) */
export function barsT(vals, o = {}) {
  const hi = Math.max(...vals), lo = Math.min(0, ...vals);
  return planeT({
    view: { xmin: 0, xmax: vals.length + 1, ymin: lo, ymax: hi * 1.12 }, step: { x: 1, y: niceStep(hi - lo) },
    segs: vals.map((v, i) => ({ pts: [[i + 0.65, 0], [i + 0.65, v], [i + 1.35, v], [i + 1.35, 0]], color: o.color ?? "blue" })),
    xlabel: o.xlabel ?? "n", ylabel: o.ylabel ?? "tₙ",
  }, o.width ?? 6.5, o.cap ?? "");
}
export const prow = (n) => { const r = [1]; for (let k = 1; k <= n; k++) r.push((r[k - 1] * (n - k + 1)) / k); return r; };
/** Pascal's triangle rows 0..N as labelled points (no grid) */
export const pascalT = (N, o = {}) => planeT({
  bare: true, view: { xmin: -N - 1, xmax: N + 1, ymin: -0.5, ymax: N + 0.5 }, step: { x: 1, y: 1 },
  points: Array.from({ length: N + 1 }, (_, n) => prow(n).map((v, k) => ({ x: 2 * k - n, y: N - n, label: String(v), color: o.hl === n ? "violet" : "blue" }))).flat(),
}, o.width ?? 6.5, o.cap ?? "");
/** a street grid w × h with optional route counts at each corner */
export const gridRoutesT = (w, h, counts = true, o = {}) => planeT({
  bare: true, view: { xmin: -0.6, xmax: w + 0.8, ymin: -0.6, ymax: h + 0.6 }, step: { x: 1, y: 1 },
  segs: [...Array.from({ length: h + 1 }, (_, y) => ({ pts: [[0, y], [w, y]], color: "gray" })), ...Array.from({ length: w + 1 }, (_, x) => ({ pts: [[x, 0], [x, h]], color: "gray" }))],
  points: counts ? Array.from({ length: h + 1 }, (_, y) => Array.from({ length: w + 1 }, (_, x) => ({ x, y, label: String(prow(x + y)[y]) }))).flat() : [{ x: 0, y: 0, label: "A" }, { x: w, y: h, label: "B" }],
}, o.width ?? 6, o.cap ?? "");
