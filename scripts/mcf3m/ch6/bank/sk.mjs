// Chapter 6 bank helpers.
export { mc, ms, num, tf, fill } from "../../bank/kit.mjs";
export { sDoc, sd, cd, sinF, repeat, P } from "../sfig.mjs";
import { num } from "../../bank/kit.mjs";
import { sDoc, sinF } from "../sfig.mjs";
export const r2 = (v) => Math.round(v * 100) / 100;
export const n2 = (prompt, v, fb, fig) => num(prompt, r2(v), fb, fig ?? null, 0.011);
export const asd = (v) => (Math.asin(v) * 180) / Math.PI;
/** y = a sin(x − d) + c on a degree grid */
export const wave = (a, d, c, o = {}) => sDoc([{ f: sinF(a, d, c), color: "violet" }], {
  view: { xmin: o.xmin ?? 0, xmax: o.xmax ?? 360, ymin: o.ymin ?? Math.min(-1.5, c - Math.abs(a) - 1), ymax: o.ymax ?? Math.max(1.5, c + Math.abs(a) + 1) },
  step: { x: o.sx ?? 90, y: o.sy ?? 1 }, points: o.points ?? [], lines: o.lines ?? [], base: o.base ?? false, xlabel: o.xlabel ?? "x", ylabel: o.ylabel ?? "y",
});
/** any function of time */
export const tgraph = (fn, view, step, o = {}) => sDoc([{ f: fn, color: "violet" }, ...(o.more ?? [])], { base: false, view, step, points: o.points ?? [], lines: o.lines ?? [], segs: o.segs ?? [], xlabel: o.xlabel ?? "t", ylabel: o.ylabel ?? "y" });
