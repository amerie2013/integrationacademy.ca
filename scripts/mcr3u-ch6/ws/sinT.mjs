// Chapter 6 worksheet helpers: degree trig, rounding, and sinusoid figures built on figT's planeT.
import { planeT } from "./figT.mjs";

export const rad = (d) => (d * Math.PI) / 180, deg = (x) => (x * 180) / Math.PI;
export const sin = (d) => Math.sin(rad(d)), cos = (d) => Math.cos(rad(d));
export const acos = (x) => deg(Math.acos(x)), asin = (x) => deg(Math.asin(x));
export const f = (v, k = 2) => (Math.round(v * 10 ** k) / 10 ** k).toFixed(k);
const lab = (v) => String(Math.round(v * 100) / 100).replace(/-/g, "−");
/** sinusoid / any curves on a degree (or time) axis; pts [[x, y, label?]], axis = y-value of a dashed axis line */
export function waveT(fns, view, step, o = {}) {
  return planeT({
    view, step,
    curves: (Array.isArray(fns) ? fns : [fns]).map((g, i) => (typeof g === "function" ? { f: g, color: i ? "amber" : "violet" } : g)),
    lines: [...(o.axis !== undefined ? [{ m: 0, b: o.axis, color: "green", dash: true }] : []), ...(o.lines ?? [])],
    vlines: o.vlines ?? [], segs: o.segs ?? [],
    points: (o.pts ?? []).map(([x, y, label]) => ({ x, y, label: label === false ? undefined : label ?? `(${lab(x)}, ${lab(y)})` })),
    xlabel: o.xlabel ?? "x", ylabel: o.ylabel ?? "y",
  }, o.width ?? 6.5, o.cap ?? "");
}
/** an empty grid for students to sketch on */
export const gridW = (view, step, o = {}) => planeT({ view, step, xlabel: o.xlabel ?? "x", ylabel: o.ylabel ?? "y" }, o.width ?? 6.5);
