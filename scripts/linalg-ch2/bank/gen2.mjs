// Question templates for the LINALG1 chapter 2 bank. Every answer is computed from the question's own matrix
// with exact fractions (la.mjs); figures come from the worksheet figure helpers.
import { mc, num, tf, ms, fill } from "./kit.mjs";
import { solve, solves, rank, rref, v, tq, tp, am, sys, stepsLine } from "./la.mjs";
import { linesSvg, planesSvg, stairSvg, matSvg } from "../ws/fig2.mjs";

export const S = String.raw;
const ORD = ["first", "second", "third", "fourth", "fifth"];
export const sysT = (rows, names) => S`\left\{${sys(rows, names)}\right.`;
/** [A | b] from a coefficient matrix and a solution vector */
export const withSol = (A, x) => A.map((r) => [...r, r.reduce((s, a, j) => s + a * x[j], 0)]);
/** a figure for a system: lines (2 unknowns) or planes (3 unknowns) */
export function sysFig(rows, opts = {}) {
  const n = rows[0].length - 1;
  const s = solve(rows);
  if (n === 2) {
    const pt = s.kind === "unique" ? s.x : null;
    const c = pt ?? [0, 0];
    return linesSvg(rows, { xmin: Math.floor(c[0] - 4), xmax: Math.ceil(c[0] + 4), ymin: Math.floor(c[1] - 4), ymax: Math.ceil(c[1] + 4) }, opts.mark === false ? null : pt, opts.label ?? null);
  }
  if (n === 3) {
    const pt = s.kind === "unique" ? s.x : null;
    const line = s.kind === "many" && s.free === 1 ? { p: s.p, d: s.dirs[0], t0: -1, t1: 1 } : null;
    return planesSvg(rows, { center: pt ?? (s.p ?? [0.5, 0.5, 0.5]), size: opts.size ?? 1.1, len: opts.len ?? 3.5, point: opts.mark === false ? null : pt, label: opts.label ?? (pt ? "?" : null), line });
  }
  return matSvg(rows);
}
const kindText = { none: "no solution", unique: "exactly one solution", many: "infinitely many solutions" };

/** is x a solution? */
export const checkQ = (rows, x, fig = false) => tf(S`$${tp(x)}$ is a solution of $${sysT(rows)}$.`, solves(rows, x), solves(rows, x) ? "It satisfies every equation." : "Substitute into every equation: at least one fails.", fig ? sysFig(rows, { mark: false }) : undefined);
/** solve a uniquely solvable system and give one unknown */
export function solveQ(rows, i, fig = false, lead = "Solve") {
  const s = solve(rows);
  if (s.kind !== "unique") throw new Error(`solveQ: not unique ${JSON.stringify(rows)}`);
  const val = s.x[i], tol = Number.isInteger(val) ? 0 : 0.001;
  return num(S`${lead} $${sysT(rows)}$ and give $x_{${i + 1}}$.`, val, `${stepsLine(rows)} Read off the solution: $${tp(s.x.map((t) => +t.toFixed(4)))}$.`, fig ? sysFig(rows, { mark: false }) : undefined, tol);
}
/** how many solutions? */
export const countQ = (rows, fig = false, prompt = null) => {
  const k = solve(rows).kind;
  return mc(prompt ?? S`How many solutions does $${sysT(rows)}$ have?`, kindText[k], Object.values(kindText).filter((t) => t !== kindText[k]).concat(["exactly two solutions"]).slice(0, 3), stepsLine(rows) + (k === "none" ? " A row reads 0 = nonzero, so there is no solution." : k === "unique" ? " Every unknown has a pivot, so there is exactly one solution." : " A column without a pivot gives a free variable, so there are infinitely many solutions."), fig ? sysFig(rows, { mark: false }) : undefined);
};
/** entry of the augmented matrix */
export const entryQ = (rows, i, j, names) => num(S`What is the entry in row ${i + 1}, column ${j + 1} of the augmented matrix of $${sysT(rows, names)}$?`, rows[i][j], j === rows[0].length - 1 ? "The last column holds the constants." : "Row i is equation i; column j holds the coefficients of the j-th unknown (0 if it is missing).");
/** RREF entry */
export const rrefEntryQ = (rows, i, j, aug = true, fig = false) => {
  const R = rref(rows, aug ? rows[0].length - 1 : rows[0].length).m;
  const val = v(R[i][j]);
  return num(S`Find the entry in row ${i + 1}, column ${j + 1} of the reduced row echelon form of $${am(rows, aug)}$.`, val, `${stepsLine(rows, { aug })} This is the RREF; the requested entry is $${tq(R[i][j])}$.`, fig ? matSvg(rows, [], aug) : undefined, Number.isInteger(val) ? 0 : 0.001);
};
/** rank */
export const rankQ = (rows, fig = false, aug = false) => num(S`Find the rank of $${am(rows, aug)}$.`, rank(rows), `${stepsLine(rows, { aug, jordan: false, cols: rows[0].length })} Count the nonzero rows of this echelon form: rank $${rank(rows)}$.`, fig ? matSvg(rows, [], aug) : undefined);
/** number of free variables / parameters in the general solution */
export const freeQ = (rows, fig = false) => {
  const s = solve(rows);
  if (s.kind === "none") throw new Error("freeQ on inconsistent");
  return num(S`How many free variables (parameters) does the general solution of $${sysT(rows)}$ have?`, s.kind === "unique" ? 0 : s.free, `${stepsLine(rows)} Free variables = unknowns minus pivots = ${s.kind === "unique" ? 0 : s.free}.`, fig ? sysFig(rows, { mark: false }) : undefined);
};
/** a component of the general solution, at given free-variable values */
export function paramQ(rows, freeVals, i, fig = false) {
  const s = solve(rows);
  if (s.kind !== "many") throw new Error("paramQ needs infinitely many");
  const x = s.p.map((p, k) => p + s.dirs.reduce((t, d, m) => t + freeVals[m] * d[k], 0));
  const cond = s.freeCols.map((c, m) => `x_{${c + 1}}=${freeVals[m]}`).join(",\\ ");
  const val = x[i];
  return num(S`The system $${sysT(rows)}$ has infinitely many solutions. Find $x_{${i + 1}}$ for the solution with $${cond}$.`, val, `${stepsLine(rows)} Solve each row of the RREF for its basic variable: the solution is $${tp(x.map((t) => +t.toFixed(4)))}$.`, fig ? sysFig(rows, { mark: false }) : undefined, Number.isInteger(val) ? 0 : 0.001);
}
/** which row operation turns M into M'? (op applied here) */
export function opQ(M, op, aug = true) {
  const N = M.map((r) => r.slice());
  let correct, wrong;
  if (op.t === "swap") { [N[op.i], N[op.j]] = [N[op.j], N[op.i]]; correct = S`$R_${op.i + 1}\leftrightarrow R_${op.j + 1}$`; wrong = [S`$R_${op.i + 1}\to R_${op.i + 1}-R_${op.j + 1}$`, S`$R_${op.j + 1}\to -R_${op.j + 1}$`, S`$R_${op.i + 1}\to R_${op.j + 1}$`]; }
  else if (op.t === "scale") { N[op.i] = N[op.i].map((x) => x * op.c); correct = S`$R_${op.i + 1}\to ${op.c}R_${op.i + 1}$`; wrong = [S`$R_${op.i + 1}\to R_${op.i + 1}+${op.c}R_${op.i === 0 ? 2 : 1}$`, S`$R_${op.i + 1}\to \tfrac{1}{${op.c}}R_${op.i + 1}$`, S`$R_${op.i + 1}\leftrightarrow R_${op.i === 0 ? 2 : 1}$`]; }
  else { N[op.i] = N[op.i].map((x, k) => x + op.c * M[op.j][k]); const sgn = op.c < 0 ? "-" : "+", mag = Math.abs(op.c) === 1 ? "" : Math.abs(op.c); correct = S`$R_${op.i + 1}\to R_${op.i + 1}${sgn}${mag}R_${op.j + 1}$`; const osg = op.c < 0 ? "+" : "-"; wrong = [S`$R_${op.i + 1}\to R_${op.i + 1}${osg}${mag}R_${op.j + 1}$`, S`$R_${op.j + 1}\to R_${op.j + 1}${sgn}${mag}R_${op.i + 1}$`, S`$R_${op.i + 1}\to ${mag || 1}R_${op.j + 1}$`]; }
  return mc(S`Which elementary row operation turns $${am(M, aug)}$ into $${am(N, aug)}$?`, correct, wrong, "Find the row that changed and compare it with the others.");
}
export { kindText, ORD, solve, solves, rank, rref, v, tq, tp, am, sys, mc, num, tf, ms, fill, linesSvg, planesSvg, stairSvg, matSvg };
