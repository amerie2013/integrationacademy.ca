// MCR3U-FR chapitre 2 — constructeurs partagés (copies des aides locales de ../mcr3u-ch2/t2_*.mjs, sans texte).
// Chaque développement / factorisation est calculé par le moteur de lib2 et comparé à la forme tapée à la main.
import assert from "node:assert";
import { P, padd, psub, pmulAll, pscale, peval, ptex, prodTex, verify } from "./lib.mjs";

/** (2.1) Multiplie des facteurs, vérifie la forme attendue, enregistre un contrôle numérique. */
export function X(name, expected, ...fs) {
  const ps = fs.map((f) => (typeof f === "string" ? P(f) : f));
  const out = pmulAll(...ps);
  if (expected !== null) assert.strictEqual(ptex(out), expected, `${name}: expected ${expected} but engine says ${ptex(out)}`);
  verify(name, (x) => ps.reduce((a, p) => a * peval(p, x), 1), (x) => peval(out, x));
  return out;
}
/** (2.1) Addition (sign=1) ou soustraction (sign=-1), même discipline. */
export function S(name, expected, a, b, sign = 1) {
  const pa = typeof a === "string" ? P(a) : a, pb = typeof b === "string" ? P(b) : b;
  const out = sign > 0 ? padd(pa, pb) : psub(pa, pb);
  assert.strictEqual(ptex(out), expected, `${name}: expected ${expected} but engine says ${ptex(out)}`);
  verify(name, (x) => peval(pa, x) + sign * peval(pb, x), (x) => peval(out, x));
  return out;
}
/** (2.2) Forme factorisée c·f1·f2·… → { tex, poly, ps, c } (poly = polynôme développé). */
export function F(c, ...fs) {
  const ps = fs.map((f) => (typeof f === "string" ? P(f) : f));
  const groups = [];
  for (const p of ps) { const g = groups.find((q) => q[0].join() === p.join()); if (g) g[1]++; else groups.push([p, 1]); }
  const poly = pscale(pmulAll(...ps), c);
  const tex = prodTex(c, groups.map(([p, e]) => (e === 1 ? p : [p, e])));
  verify(`F ${tex}`, (x) => c * ps.reduce((a, p) => a * peval(p, x), 1), (x) => peval(poly, x));
  return { tex, poly, ps, c };
}
/** (2.2) F() plus la vérification du développement tapé à la main. */
export function FX(expanded, c, ...fs) { const f = F(c, ...fs); assert.strictEqual(ptex(f.poly), expanded, `factored ${f.tex} expands to ${ptex(f.poly)}, not ${expanded}`); return f; }
/** (2.2) Identité à deux variables, vérifiée pour plusieurs valeurs fixes de y. */
export function V2(name, f, g) { for (const y of [-2, 1.3, 3]) verify(`${name} y=${y}`, (x) => f(x, y), (x) => g(x, y)); }
export const tt = (s) => s.replace(/x/g, "t");
export const same = (a, b) => a.join() === b.join();
