// Chapter 8 worksheet helpers (numbers computed in code).
import { svgT } from "../../ws/figT.mjs";
import { timelineSvg, fDoc, P } from "../ffig.mjs";
export { P };
export const S = String.raw;
export const f = (v) => (Math.round(v * 100) / 100).toFixed(2);
export const T = (o, w = 7.6) => svgT(timelineSvg(o), w);
export const G = (curves, o, w = 5.4) => svgT(fDoc(curves, o), w);
export const A = (P0, i, n) => P0 * (1 + i) ** n;
export const PVl = (A0, i, n) => A0 * (1 + i) ** -n;
export const FVa = (R, i, n) => (R * ((1 + i) ** n - 1)) / i;
export const PVa = (R, i, n) => (R * (1 - (1 + i) ** -n)) / i;
export const PMT = (PV, i, n) => (PV * i) / (1 - (1 + i) ** -n);
export const SINK = (FV, i, n) => (FV * i) / ((1 + i) ** n - 1);
export const firstN = (fn) => { let n = 0; while (!fn(n)) n++; return n; };
export const pays = (n, label, up = false) => Array.from({ length: n }, (_, k) => ({ at: k + 1, label, up }));
