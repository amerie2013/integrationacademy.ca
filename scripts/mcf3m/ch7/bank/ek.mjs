// Chapter 7 bank helpers.
export { mc, ms, num, tf, fill } from "../../bank/kit.mjs";
export { stripSvg, rep, eDoc, P, r2 } from "../efig.mjs";
import { num } from "../../bank/kit.mjs";
import { eDoc } from "../efig.mjs";
export const n2 = (prompt, v, fb, fig) => num(prompt, Math.round(v * 100) / 100, fb, fig ?? null, 0.011);
export const n4 = (prompt, v, fb, fig) => num(prompt, v, fb, fig ?? null, 0.0001);
export const eg = (fn, view, step, o = {}) => eDoc([{ f: fn, color: "violet" }, ...(o.more ?? [])], { view, step, points: o.points ?? [], lines: o.lines ?? [], xlabel: o.xlabel ?? "x", ylabel: o.ylabel ?? "y" });
