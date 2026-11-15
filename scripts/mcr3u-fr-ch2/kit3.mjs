// MCR3U-FR 2.3 — constructeurs d'expressions rationnelles (copie des aides locales de ../mcr3u-ch2/t2_3.mjs, sans texte).
import assert from "node:assert";
import { P, pmulAll, peval, ptex, prodTex, verify } from "./lib.mjs";

const grp = (ps) => { const g = []; for (const p of ps) { const q = g.find((z) => z[0].join() === p.join()); if (q) q[1]++; else g.push([p, 1]); } return g.map(([p, e]) => (e === 1 ? p : [p, e])); };
const ft = (ps) => prodTex(1, grp(ps));
export const dfr = (n, d) => `\\dfrac{${n}}{${d}}`;
const isOne = (ps) => ps.every((p) => p.length === 1 && p[0] === 1);
const toP = (f) => (typeof f === "string" ? P(f) : f);
/** Expression rationnelle à partir de listes de facteurs, p. ex. R(["x-3","x+3"], ["x+4","x-3"]). */
export function R(nf, df) {
  const n = nf.map(toP), d = df.map(toP), N = pmulAll(...n), D = pmulAll(...d);
  const fac = isOne(d) ? ft(n) : dfr(ft(n), ft(d));
  return { n, d, N, D, f: (x) => peval(N, x) / peval(D, x), tex: fac, fac, exp: dfr(ptex(N), ptex(D)) };
}
export const times = (...rs) => ({ f: (x) => rs.reduce((a, q) => a * q.f(x), 1) });
export const divide = (a, b) => ({ f: (x) => a.f(x) / b.f(x) });
export const eqv = (name, a, b) => verify(name, a.f, b.f);
function roots(...lists) {
  const set = new Map();
  for (const l of lists) for (const f of l.map(toP)) if (f.length === 2) { const num_ = -f[0], den = f[1]; const g = (a, b) => (b ? g(b, a % b) : Math.abs(a)); const k = g(num_, den) || 1; let a = num_ / k, b = den / k; if (b < 0) { a = -a; b = -b; } set.set(a / b, b === 1 ? `${a}` : `${a < 0 ? "-" : ""}\\tfrac{${Math.abs(a)}}{${b}}`); }
  return [...set.entries()].sort((p, q) => p[0] - q[0]);
}
export const restrTex = (...lists) => roots(...lists).map(([, t]) => t).join(",\\ ");
export const neTex = (...lists) => `x\\ne ${restrTex(...lists)}`;
export const restrVals = (...lists) => roots(...lists).map(([v]) => v);
export const holeY = (orig, simp, a) => { const v = simp.f(a); assert.ok(Number.isFinite(v)); assert.ok(!Number.isFinite(orig.f(a))); return v; };
export { ptex, assert };
