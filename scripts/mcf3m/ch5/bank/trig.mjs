// Chapter 5 bank helpers: degree trig, rounded numeric answers (tolerance 0.011), triangle figures.
export { sin, cos, tan, asin, acos, atan, triD, sasD, rightD } from "../../figs.mjs";
import { sin, cos } from "../../figs.mjs";
import { num } from "../../bank/kit.mjs";
export const r2 = (v) => Math.round(v * 100) / 100;
export const L = (b, c, A) => Math.sqrt(b * b + c * c - 2 * b * c * cos(A));
export const Ang = (a, b, c) => (Math.acos((b * b + c * c - a * a) / (2 * b * c)) * 180) / Math.PI;
export const side = (k, ak, ax) => (k * sin(ax)) / sin(ak);
/** numeric question with a 2-decimal answer */
export const n2 = (prompt, v, fb, fig) => num(prompt, r2(v), fb, fig ?? null, 0.011);
