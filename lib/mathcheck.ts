// Mathematical-equivalence checking for auto-graded math answers.
//
// Two expressions are "equivalent" if they evaluate to the same number for many
// random assignments of their variables (numeric sampling). This makes 1/2,
// 0.5, and 2/4 all equal, and (x+1)^2 equal to x^2+2x+1 — things a string match
// can never catch. Expressions use our own parser syntax (lib/mathExpr), which
// is exactly what MathField(format="expr") emits, so student input grades
// directly without any conversion.
import { compileExpr } from "./mathExpr";

const FUNCS = new Set([
  "sin", "cos", "tan", "asin", "acos", "atan", "sinh", "cosh", "tanh",
  "exp", "ln", "log", "sqrt", "abs", "sign", "floor", "ceil", "round",
]);
const CONSTS = new Set(["pi", "e"]);

/** Variable names in an expression (single letters, minus constants/functions). */
function varsOf(expr: string): string[] {
  const out = new Set<string>();
  for (const m of expr.matchAll(/[a-zA-Z]+/g)) {
    const w = m[0];
    if (FUNCS.has(w) || CONSTS.has(w)) continue;
    for (const ch of w) if (!CONSTS.has(ch)) out.add(ch);
  }
  return [...out];
}

function close(a: number, b: number, tol: number): boolean {
  return Math.abs(a - b) <= tol * (1 + Math.abs(a));
}

/**
 * True if two expressions are mathematically equivalent. Equations (containing
 * "=") are not supported and return false — use a different question kind.
 */
export function exprEquivalent(aExpr: string, bExpr: string, tol = 1e-6): boolean {
  if (!aExpr || !bExpr) return false;
  if (aExpr.includes("=") || bExpr.includes("=")) return false;
  let fa, fb;
  try { fa = compileExpr(aExpr); fb = compileExpr(bExpr); } catch { return false; }

  const vars = [...new Set([...varsOf(aExpr), ...varsOf(bExpr)])];
  if (vars.length === 0) {
    const x = fa({}), y = fb({});
    return Number.isFinite(x) && Number.isFinite(y) && close(x, y, tol);
  }

  let good = 0;
  for (let tries = 0; good < 12 && tries < 400; tries++) {
    const scope: Record<string, number> = {};
    for (const v of vars) scope[v] = Math.round((Math.random() * 8 - 4) * 1000) / 1000; // [-4, 4]
    const x = fa(scope), y = fb(scope);
    if (!Number.isFinite(x) || !Number.isFinite(y)) continue; // skip domain errors (e.g. sqrt of negative)
    good++;
    if (!close(x, y, tol)) return false;
  }
  return good >= 6; // enough valid samples agreed
}

/** Lightweight expr → LaTeX for displaying a stored correct answer with KaTeX. */
export function exprToTex(expr: string): string {
  let s = String(expr || "");
  s = s.replace(/\bsqrt\(([^()]*)\)/g, "\\sqrt{$1}");
  s = s.replace(/\bpi\b/g, "\\pi");
  s = s.replace(/\*/g, "\\cdot ");
  return s;
}
