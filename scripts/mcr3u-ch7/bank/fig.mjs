// Bank/assignment figures for MCR3U chapter 7: discrete sequence plots, bar charts, Pascal's triangle, route grids.
import { planeDoc } from "../../mcr3u-ch1/bank/fig.mjs";
export * from "../../mcr3u-ch1/bank/fig.mjs";

const niceStep = (span) => [0.5, 1, 2, 5, 10, 20, 25, 50, 100, 200, 250, 500, 1000, 2000, 5000].find((s) => span / s <= 10) ?? 10000;
const lab = (v) => String(Math.round(v * 100) / 100).replace(/-/g, "−");
export const rd = (v, k = 2) => Math.round(v * 10 ** k) / 10 ** k;
/** points (n, tₙ), n = start, start + 1, …; labels: true writes each value */
export function dotsD(vals, o = {}) {
  const start = o.start ?? 1;
  const lo = Math.min(0, ...vals), hi = Math.max(0, ...vals), pad = (hi - lo) * 0.12 || 1;
  const view = { xmin: start - 1, xmax: start + vals.length, ymin: lo - (lo < 0 ? pad : 0), ymax: hi + pad };
  return planeDoc({
    view, step: { x: 1, y: niceStep(view.ymax - view.ymin) },
    points: vals.map((v, i) => ({ x: i + start, y: v, label: o.labels ? lab(v) : undefined })),
    lines: o.lines ?? [], xlabel: o.xlabel ?? "n", ylabel: o.ylabel ?? "tₙ",
  });
}
/** vertical bars for terms */
export function barsD(vals, o = {}) {
  const hi = Math.max(...vals), lo = Math.min(0, ...vals);
  return planeDoc({
    view: { xmin: 0, xmax: vals.length + 1, ymin: lo, ymax: hi * 1.12 }, step: { x: 1, y: niceStep(hi - lo) },
    segs: vals.map((v, i) => ({ pts: [[i + 0.65, 0], [i + 0.65, v], [i + 1.35, v], [i + 1.35, 0]], color: o.color ?? "blue" })),
    xlabel: o.xlabel ?? "n", ylabel: o.ylabel ?? "tₙ",
  });
}
export const prow = (n) => { const r = [1]; for (let k = 1; k <= n; k++) r.push((r[k - 1] * (n - k + 1)) / k); return r; };
/** Pascal's triangle rows 0..N; hide: [[row, k], …] replaced by "?" */
export const pascalD = (N, hide = []) => planeDoc({
  bare: true, view: { xmin: -N - 1, xmax: N + 1, ymin: -0.5, ymax: N + 0.5 }, step: { x: 1, y: 1 },
  points: Array.from({ length: N + 1 }, (_, n) => prow(n).map((v, k) => ({ x: 2 * k - n, y: N - n, label: hide.some(([a, b]) => a === n && b === k) ? "?" : String(v), color: hide.some(([a, b]) => a === n && b === k) ? "red" : "blue" }))).flat(),
});
/** a street grid w × h, corners A and B */
export const gridD = (w, h) => planeDoc({
  bare: true, view: { xmin: -0.6, xmax: w + 0.8, ymin: -0.6, ymax: h + 0.6 }, step: { x: 1, y: 1 },
  segs: [...Array.from({ length: h + 1 }, (_, y) => ({ pts: [[0, y], [w, y]], color: "gray" })), ...Array.from({ length: w + 1 }, (_, x) => ({ pts: [[x, 0], [x, h]], color: "gray" }))],
  points: [{ x: 0, y: 0, label: "A" }, { x: w, y: h, label: "B" }],
});
