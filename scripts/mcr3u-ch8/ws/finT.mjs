// Chapter 8 worksheet helpers: growth curves, bar charts and payment time lines built on figT's planeT.
import { planeT } from "./figT.mjs";

const niceStep = (span) => [0.5, 1, 2, 5, 10, 20, 25, 50, 100, 200, 250, 500, 1000, 2000, 2500, 5000, 10000, 20000, 25000, 50000, 100000].find((s) => span / s <= 9) ?? 200000;
/** curves over 0..T: fns = [{ f, color }] */
export function growthT(fns, T, o = {}) {
  let hi = 0; for (const g of fns) for (let k = 0; k <= 40; k++) hi = Math.max(hi, g.f((T * k) / 40));
  const lo = o.lo ?? 0;
  return planeT({
    view: { xmin: 0, xmax: T * 1.05, ymin: lo, ymax: hi * 1.1 }, step: { x: niceStep(T), y: niceStep(hi * 1.1 - lo) },
    curves: fns.map((g) => ({ f: g.f, a: 0, b: T, color: g.color ?? "violet" })), lines: o.lines ?? [], points: o.pts ?? [],
    xlabel: o.xlabel ?? "years", ylabel: o.ylabel ?? "value",
  }, o.width ?? 6.5, o.cap ?? "");
}
/** bars for values (index 1..n) */
export function barsT(vals, o = {}) {
  const hi = Math.max(...vals);
  return planeT({
    view: { xmin: 0, xmax: vals.length + 1, ymin: 0, ymax: hi * 1.15 }, step: { x: 1, y: niceStep(hi * 1.15) },
    segs: vals.map((v, i) => ({ pts: [[i + 0.65, 0], [i + 0.65, v], [i + 1.35, v], [i + 1.35, 0]], color: o.color ?? "violet" })),
    points: o.labels ? vals.map((v, i) => ({ x: i + 1, y: v, label: o.labels[i] })) : [],
    xlabel: o.xlabel ?? "n", ylabel: o.ylabel ?? "value",
  }, o.width ?? 6.5, o.cap ?? "");
}
/** a payment time line 0..n with a payment marker at each period end; labels: { k: text } */
export const timelineT = (n, labels = {}, o = {}) => planeT({
  bare: true, view: { xmin: -0.6, xmax: n + 0.8, ymin: -1, ymax: 1.6 }, step: { x: 1, y: 1 },
  segs: [{ pts: [[0, 0], [n, 0]], color: "gray" }, ...Array.from({ length: n + 1 }, (_, k) => ({ pts: [[k, -0.12], [k, 0.12]], color: "gray" }))],
  points: [{ x: 0, y: 0, label: o.start ?? "now" }, ...Object.entries(labels).map(([k, t]) => ({ x: +k, y: 0.5, label: t }))],
}, o.width ?? 6.5, o.cap ?? "");
