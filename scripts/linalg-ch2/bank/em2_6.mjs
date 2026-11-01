// 2.6 Homogeneous Systems and the Structure of Solutions — 20 easy + 20 medium questions
import { S, sysT, withSol, sysFig, solveQ, countQ, freeQ, paramQ, mc, num, tf, fill, ms, am, matSvg, linesSvg, planesSvg, solve } from "./gen2.mjs";
import { stepsLine } from "./la.mjs";

/** the spanning vector of a one-parameter homogeneous system, scaled so its free component is 1: give component i */
function spanQ(rows, i, fig = false) {
  const s = solve(rows.map((r) => [...r, 0]));
  if (s.kind !== "many" || s.free !== 1) throw new Error("spanQ needs one free variable");
  const d = s.dirs[0], val = d[i];
  return num(S`The solutions of the homogeneous system with coefficient matrix $${am(rows, false)}$ are all multiples $t\vec v$ of one vector $\vec v$ whose $x_{${s.freeCols[0] + 1}}$-component is 1. Find the $x_{${i + 1}}$-component of $\vec v$.`, val, `${stepsLine(rows.map((r) => [...r, 0]))} Set the free variable to 1: $\\vec v=(${d.map((t) => +t.toFixed(4)).join(",")})$.`, fig ? sysFig(rows.map((r) => [...r, 0]), { mark: false }) : undefined, Number.isInteger(val) ? 0 : 0.001);
}

const easy = [
  tf("A homogeneous system always has at least one solution.", true, "x = 0 is always a solution."),
  tf("A homogeneous system can be inconsistent.", false, "The trivial solution always works."),
  tf(S`$(2,-1,1)$ solves the homogeneous system $x_1+x_2-x_3=0,\ x_1+3x_2+x_3=0$.`, true, "2 − 1 − 1 = 0 and 2 − 3 + 1 = 0."),
  tf(S`$(1,1,1)$ solves the homogeneous system $x_1-2x_2+x_3=0,\ 2x_1+x_2-x_3=0$.`, false, "The second equation gives 2 + 1 − 1 = 2 ≠ 0."),
  mc("A homogeneous system has 4 equations in 6 unknowns. It has:", "infinitely many solutions", ["only the trivial solution", "no solution", "exactly one nontrivial solution"], "rank ≤ 4 < 6 leaves free variables."),
  mc("The solution set of a homogeneous system in three unknowns can be:", "the origin, a line through the origin, a plane through the origin, or all of ℝ³", ["any line in ℝ³", "empty", "any plane in ℝ³"], "It always contains 0 and is closed under combinations."),
  fill("The solution x = 0 of a homogeneous system is called the ___ solution.", ["trivial"], "Other solutions are nontrivial."),
  fill("A system whose constant terms are all zero is called ___.", ["homogeneous"], "Written Ax = 0."),
  spanQ([[1, -1, 3], [2, 1, 3]], 0, true),
  spanQ([[1, 2, -1], [2, 5, 1]], 1),
  spanQ([[1, 0, -2], [0, 1, 3]], 0),
  num(S`How many parameters does the solution set of $x_1+x_2+x_3+x_4=0$ have?`, 3, "One pivot, four unknowns."),
  num(S`A homogeneous system has 5 unknowns and $\operatorname{rank}A=3$. How many parameters?`, 2, "n − rank A."),
  num(S`For which $k$ does $x_1+2x_2=0,\ 3x_1+kx_2=0$ have nontrivial solutions?`, 6, "The rows must be proportional."),
  tf("If u and v solve Ax = 0, then u + v solves Ax = 0.", true, "Each equation gives 0 + 0 = 0."),
  tf("If u and v solve Ax = b with b ≠ 0, then u + v solves Ax = b.", false, "It solves Ax = 2b."),
  mc(S`$\vec p$ solves $A\vec x=\vec b$ and $\vec h$ solves $A\vec x=\vec 0$. Then $\vec p+3\vec h$ solves:`, S`$A\vec x=\vec b$`, [S`$A\vec x=3\vec b$`, S`$A\vec x=\vec 0$`, S`$A\vec x=4\vec b$`], "b + 3·0 = b."),
  num(S`$\vec p=(1,2)$ solves $x_1-x_2=-1$, and the homogeneous solutions are $t(1,1)$. Find $x_2$ of the solution with $x_1=4$.`, 5, "(1, 2) + 3(1, 1).", linesSvg([[1, -1, 0], [1, -1, -1]], { xmin: -2, xmax: 6, ymin: -2, ymax: 6 }, [1, 2], "p")),
  countQ([[1, 2, 0, 0], [0, 1, 3, 0], [2, 0, 1, 0]], true, S`How many solutions does the homogeneous system $${sysT([[1, 2, 0, 0], [0, 1, 3, 0], [2, 0, 1, 0]])}$ have?`),
  num(S`A homogeneous square system has rank 3 and 3 unknowns. How many solutions does it have?`, 1, "Only the trivial solution."),
];

const medium = [
  spanQ([[1, -1, 2], [2, 1, 1]], 2, true),
  spanQ([[1, 2, 3], [4, 5, 6], [7, 8, 9]], 0, true),
  spanQ([[1, 1, 0, 2], [0, 1, 1, 1], [1, 0, 1, 0]], 0),
  spanQ([[1, 2, -1], [0, 1, 3]], 0),
  paramQ([[1, 2, -1, 1, 0], [3, 6, -2, 5, 0]], [1, 1], 0),
  paramQ([[1, -1, 2, 1, 0], [2, -2, 5, 4, 0]], [2, 1], 0, true),
  num(S`For which positive $k$ does $x_1+kx_2=0,\ kx_1+9x_2=0$ have nontrivial solutions?`, 3, "9 − k² = 0."),
  num(S`For which $k$ does $${am([[1, 1, 1], [1, 2, 3], [1, 3, "k"]], false)}\vec x=\vec 0$ have nontrivial solutions?`, 5, "The last row becomes (0, 0, k − 5)."),
  freeQ([[1, 2, -1, 1, 0], [3, 6, -2, 5, 0]]),
  freeQ([[1, 1, 1, 1, 0], [1, -1, 1, -1, 0], [2, 0, 2, 0, 0]], true),
  num(S`$(1,1,1)$ solves $x_1-x_2+3x_3=3,\ 2x_1+x_2+3x_3=6$, and the homogeneous solutions are $t(-2,1,1)$. Find $x_2$ of the solution with $x_1=-3$.`, 3, "1 − 2t = −3 gives t = 2.", planesSvg([[1, -1, 3, 3], [2, 1, 3, 6]], { center: [1, 1, 1], size: 1.2, len: 3, line: { p: [1, 1, 1], d: [-2, 1, 1], t0: -0.5, t1: 2 } })),
  num(S`$\vec p=(2,0,1)$ solves $A\vec x=\vec b$, and the homogeneous solutions are $s(1,1,0)+t(0,1,1)$. Find the third component of the solution with first component 5 and second component 4.`, 2, "s = 3 from x₁; then x₂ = 3 + t = 4 gives t = 1; x₃ = 1 + 1."),
  tf(S`If $A\vec x=\vec 0$ has only the trivial solution, then $A\vec x=\vec b$ has at most one solution.`, true, "Two solutions differ by a homogeneous solution."),
  tf(S`If $A\vec x=\vec b$ has exactly one solution, then $A\vec x=\vec 0$ has only the trivial solution.`, true, "Otherwise p + h would be another solution."),
  tf(S`A square homogeneous system always has only the trivial solution.`, false, "Only when rank A = n."),
  mc("The difference of two solutions of Ax = b is:", "a solution of Ax = 0", ["a solution of Ax = b", "a solution of Ax = 2b", "always the zero vector"], "A(u − v) = b − b."),
  mc(S`Which vector spans all vectors orthogonal to $(1,2,-1)$ and $(0,1,3)$?`, S`$(7,-3,1)$`, [S`$(1,-3,7)$`, S`$(-7,-3,1)$`, S`$(7,3,1)$`], "Solve a + 2b − c = 0, b + 3c = 0."),
  num(S`For which $h$ is $\vec p=(1,h,0)$ a particular solution of $x_1+x_2+x_3=4,\ x_1-x_2=-2$?`, 3, "1 + h = 4 and 1 − h = −2."),
  ms(S`Which sets are solution sets of some homogeneous system in $\mathbb R^3$?`, ["the origin alone", "a line through the origin", "a line not through the origin", "a plane through the origin"], [0, 1, 3], "They must contain the zero vector."),
  num(S`The figure shows the solutions of $x_1-2x_2=0$ and $x_1-2x_2=c$. The red line passes through $(4,0)$. Find $c$.`, 4, "4 − 0 = c.", linesSvg([[1, -2, 0], [1, -2, 4]], { xmin: -3, xmax: 6, ymin: -3, ymax: 3 }, [4, 0], "")),
];

export const E = easy;
export const M = medium;
