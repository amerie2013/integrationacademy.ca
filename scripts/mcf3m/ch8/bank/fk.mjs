// Chapter 8 bank helpers. Money is written as "N dollars" (never a dollar sign).
export { mc, ms, num, tf, fill } from "../../bank/kit.mjs";
export { timelineSvg, fDoc, P } from "../ffig.mjs";
import { num } from "../../bank/kit.mjs";
export const S = String.raw;
export const r2 = (v) => Math.round(v * 100) / 100;
export const n2 = (prompt, v, fb, fig) => num(prompt, r2(v), fb, fig ?? null, 0.011);
export const A = (P0, i, n) => P0 * (1 + i) ** n;
export const PVl = (A0, i, n) => A0 * (1 + i) ** -n;
export const FVa = (R, i, n) => (R * ((1 + i) ** n - 1)) / i;
export const PVa = (R, i, n) => (R * (1 - (1 + i) ** -n)) / i;
export const PMT = (PV, i, n) => (PV * i) / (1 - (1 + i) ** -n);
export const SINK = (FV, i, n) => (FV * i) / ((1 + i) ** n - 1);
export const firstN = (fn) => { let n = 0; while (!fn(n)) n++; return n; };
export const FREQ = { 1: "annually", 2: "semi-annually", 4: "quarterly", 12: "monthly" };
export const pct = (r) => `${+(r * 100).toFixed(3)}\\%`;
export const pays = (n, label, up = false) => Array.from({ length: n }, (_, k) => ({ at: k + 1, label, up }));
