// Helpers for chapter 2 bank items: polynomials from factors, LaTeX and answer strings computed in code.
const sgn = (n, first) => (n < 0 ? "-" : first ? "" : "+");
const co = (n, v, first) => { if (n === 0) return ""; const a = Math.abs(n); return `${sgn(n, first)}${a === 1 && v ? "" : a}${v}`; };
/** LaTeX of ax^2+bx+c */
export const tex = (a, b, c) => { let s = co(a, "x^2", true); s += co(b, "x", !s); s += co(c, "", !s); return s || "0"; };
/** answer string for math_expr: 2*x^2-3*x+1 */
export const ans = (a, b, c) => { let s = ""; const add = (n, v) => { if (!n) return; const m = Math.abs(n); s += (n < 0 ? "-" : s ? "+" : "") + (v ? (m === 1 ? "" : m + "*") + v : m); }; add(a, "x^2"); add(b, "x"); add(c, ""); return s || "0"; };
/** (px+q)(rx+s) → [a,b,c] */
export const mul = (p, q, r, s) => [p * r, p * s + q * r, q * s];
/** LaTeX of a binomial px+q */
export const bin = (p, q) => `${p === 1 ? "" : p === -1 ? "-" : p}x${q < 0 ? "-" : "+"}${Math.abs(q)}`;
/** plain text of a binomial for choices */
export const fac = (p, q) => `(${bin(p, q)})`;
