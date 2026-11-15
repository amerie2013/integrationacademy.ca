// MCR3U-FR 2.4 — constructeurs (copie des aides locales de ../mcr3u-ch2/t2_4.mjs, sans texte).
import { P, pmulAll, peval, ptex, prodTex, verify } from "./lib.mjs";
import { R, dfr } from "./kit3.mjs";

const grp = (ps) => { const g = []; for (const p of ps) { const q = g.find((z) => z[0].join() === p.join()); if (q) q[1]++; else g.push([p, 1]); } return g.map(([p, e]) => (e === 1 ? p : [p, e])); };
const ft = (ps) => prodTex(1, grp(ps));
const toP = (f) => (typeof f === "string" ? P(f) : f);
/** Fraction à numérateur DÉVELOPPÉ sur un dénominateur FACTORISÉ : RE("7x+13", ["x+3","x-1"]). */
export function RE(nStr, df) {
  const N = P(nStr), d = df.map(toP), D = pmulAll(...d);
  return { N, D, d, f: (x) => peval(N, x) / peval(D, x), tex: dfr(ptex(N), ft(d)), exp: dfr(ptex(N), ptex(D)) };
}
export const plus = (...rs) => ({ f: (x) => rs.reduce((a, q) => a + q.f(x), 0) });
export const minus = (a, b) => ({ f: (x) => a.f(x) - b.f(x) });
export const eqv = (name, a, b) => verify(name, a.f, b.f);
export const t = (nStr, dStr) => R([nStr], [dStr]);
export { R };
