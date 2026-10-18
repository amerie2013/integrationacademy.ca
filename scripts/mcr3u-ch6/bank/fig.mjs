// Bank/assignment figures for MCR3U chapter 6: chapter 5 helpers plus sinusoid graphs on a degree or time axis.
import { planeDoc } from "../../mcr3u-ch1/bank/fig.mjs";
export * from "../../mcr3u-ch5/bank/fig.mjs";

const lab = (v) => String(Math.round(v * 100) / 100).replace(/-/g, "−");
/** sinusoid(s) as an SVG document; pts [[x, y, label?]] (label false = no label), axis = dashed axis value */
export function waveD(fns, view, step, o = {}) {
  return planeDoc({
    view, step,
    curves: (Array.isArray(fns) ? fns : [fns]).map((g, i) => (typeof g === "function" ? { f: g, color: i ? "amber" : "violet" } : g)),
    lines: [...(o.axis !== undefined ? [{ m: 0, b: o.axis, color: "green", dash: true }] : []), ...(o.lines ?? [])],
    vlines: o.vlines ?? [], segs: o.segs ?? [],
    points: (o.pts ?? []).map(([x, y, label]) => ({ x, y, label: label === false ? undefined : label ?? `(${lab(x)}, ${lab(y)})` })),
    xlabel: o.xlabel ?? "x", ylabel: o.ylabel ?? "y",
  });
}
