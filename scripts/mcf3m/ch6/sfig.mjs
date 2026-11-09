// Chapter 6 figure helpers (degrees). SG(...) → lesson HTML figure; sDoc(...) → raw SVG for bank/assignments/written.
import { plane, planeDoc } from "../../mth1w-ch4/figs4.mjs";
export const rad = (d) => (d * Math.PI) / 180;
export const sd = (x) => Math.sin(rad(x));
export const cd = (x) => Math.cos(rad(x));
/** y = a sin(x − d) + c */
export const sinF = (a = 1, d = 0, c = 0) => (x) => a * sd(x - d) + c;
const spec = (curves, o = {}) => ({
  view: o.view ?? { xmin: 0, xmax: 360, ymin: -2, ymax: 2 },
  curves: [...(o.base === false ? [] : [{ f: sd, color: "gray" }]), ...curves.map((c) => (typeof c === "function" ? { f: c, color: "violet" } : c))],
  lines: o.lines ?? [], vlines: o.vlines ?? [], points: o.points ?? [], segs: o.segs ?? [],
  step: o.step ?? { x: 90, y: 1 }, xlabel: o.xlabel ?? "x", ylabel: o.ylabel ?? "y",
});
export const SG = (curves, o = {}) => plane(spec(curves, o), o.cap ?? "");
export const sDoc = (curves, o = {}) => planeDoc(spec(curves, o));
/** a repeating pattern drawn from one cycle of [x, y] points, repeated n times with period p */
export const repeat = (cycle, p, n, color = "violet") => ({ pts: Array.from({ length: n }, (_, i) => cycle.map(([x, y]) => [x + i * p, y])).flat(), color });
export const P = (x, y, label, color = "blue") => ({ x, y, label: label === false ? undefined : label ?? `(${x}, ${y})`, color });
