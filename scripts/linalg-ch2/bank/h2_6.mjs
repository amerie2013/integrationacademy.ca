// 2.6 Homogeneous Systems and the Structure of Solutions — 20 hard questions
import { S, sysT, sysFig, solveQ, paramQ, freeQ, mc, num, tf, ms, am, matSvg, linesSvg, planesSvg, solve } from "./gen2.mjs";
import { vdoc, scene3, patch3, pt3 } from "../vecfig.mjs";

export const TOPIC = "2.6 Homogeneous Systems and the Structure of Solutions";
export const Q = [
  mc(S`Which single homogeneous equation has solution set $\operatorname{span}\{(1,0,2),(0,1,-1)\}$?`, S`$-2x_1+x_2+x_3=0$`, [S`$2x_1+x_2+x_3=0$`, S`$x_1-x_2+2x_3=0$`, S`$-2x_1-x_2+x_3=0$`], "Its normal is (1,0,2) × (0,1,−1) = (−2, 1, 1).", vdoc(scene3(3, { polys: [patch3([0, 0, 0], [1, 0, 2], [0, 1, -1], 1, "#ede9fe", "violet", 0.5)], points: [pt3([0, 0, 0], "0", { color: "black" })] }))),
  mc(S`Which homogeneous system has solution set $\operatorname{span}\{(1,1,1)\}$?`, S`$x_1-x_2=0,\ x_2-x_3=0$`, [S`$x_1+x_2+x_3=0$`, S`$x_1-x_2=0$`, S`$x_1+x_2=0,\ x_2+x_3=0$`], "Both equations vanish on (1,1,1) and the rank is 2."),
  num(S`$A\vec u=\vec b$ and $A\vec v=\vec c$ with $\vec b=(1,2)$ and $\vec c=(3,-1)$. Find the second component of $A(2\vec u-3\vec v)$.`, 7, "2b − 3c = (−7, 7)."),
  num(S`$A\vec u=(4,0,2)$ and $A\vec v=(1,1,1)$. Find the first component of $A(\vec u-4\vec v)$.`, 0, "(4,0,2) − 4(1,1,1) = (0, −4, −2)."),
  tf(S`If $A\vec x=\vec b$ has two different solutions, then $A\vec x=\vec 0$ has a nontrivial solution.`, true, "Their difference is a nonzero homogeneous solution."),
  tf(S`The set of solutions of $A\vec x=\vec b$ with $\vec b\ne\vec 0$ is closed under scalar multiplication.`, false, "A(2x) = 2b ≠ b."),
  tf(S`If $\vec h_1,\vec h_2$ solve $A\vec x=\vec 0$ and $\vec p$ solves $A\vec x=\vec b$, then $\vec p+\vec h_1-5\vec h_2$ solves $A\vec x=\vec b$.`, true, "b + 0 − 0."),
  num(S`For which $k$ does $${am([[1, 2, 3], [2, "k", 6], [3, 6, 9]], false)}\vec x=\vec 0$ have a two-parameter family of solutions?`, 4, "With k = 4 every row is a multiple of row 1 (rank 1)."),
  num(S`For which $k$ does $${am([[1, 2, 3], [2, "k", 6], [1, 1, "k-1"]], false)}\vec x=\vec 0$ have nontrivial solutions?`, 4, "Reduce: rows (0, k − 4, 0) and (0, −1, k − 4); rank < 3 only when k = 4."),
  freeQ([[1, 2, 0, 1, 0, 0], [2, 4, 1, 4, 1, 0], [1, 2, 1, 3, 2, 0]], true),
  paramQ([[1, 0, 2, 0, -1, 0], [0, 1, -1, 0, 2, 0], [0, 0, 0, 1, 1, 0]], [1, 1], 1),
  num(S`In a closed traffic loop $A\to B\to C\to D\to A$ with a diagonal $A\to C$ (flows $x_1,\dots,x_4$ around the loop, $x_5$ on the diagonal) no traffic enters or leaves. If $x_1=30$ and $x_5=20$, find $x_3$.`, 50, "x₁ = x₂ = s, x₃ = x₄ = s + t, x₅ = t.", vdoc({ view: { xmin: -0.8, xmax: 5.2, ymin: -0.8, ymax: 4.8 }, grid: false, axes: false, arrows: [{ from: [0.3, 0], to: [3.7, 0], color: "blue", label: "x₁", off: 12 }, { from: [4, 0.3], to: [4, 3.7], color: "blue", label: "x₂", off: 12 }, { from: [3.7, 4], to: [0.3, 4], color: "blue", label: "x₃", off: 12 }, { from: [0, 3.7], to: [0, 0.3], color: "blue", label: "x₄", off: 12 }, { from: [0.25, 0.25], to: [3.75, 3.75], color: "red", label: "x₅", off: 12 }], points: [{ x: 0, y: 0, label: "A", dx: -14, dy: 14 }, { x: 4, y: 0, label: "B", dx: 6, dy: 14 }, { x: 4, y: 4, label: "C", dx: 6 }, { x: 0, y: 4, label: "D", dx: -16 }] })),
  num(S`The general solution of $A\vec x=\vec b$ is $(3,-1,0)+t(-2,1,1)$. Find the solution closest to... no: find $t$ for the solution whose components add up to 0.`, -2, "Sum: 2 + 0t = 2? Components: 3 − 2t − 1 + t + t = 2: impossible?"),
  ms("Which are true for every m × n matrix A?", [S`$A\vec x=\vec 0$ is consistent`, S`if $m\lt n$, $A\vec x=\vec 0$ has nontrivial solutions`, S`if $m\gt n$, $A\vec x=\vec 0$ has only the trivial solution`, S`the solutions of $A\vec x=\vec 0$ form a set closed under addition`], [0, 1, 3], "Tall matrices can still have rank < n."),
  mc(S`The solutions of $A\vec x=\vec b$ form the line $(1,2,0)+t(1,-1,1)$. The solutions of $A\vec x=\vec 0$ are:`, S`$t(1,-1,1)$`, [S`$(1,2,0)+t(1,-1,1)$`, S`only $\vec 0$`, S`$t(1,2,0)$`], "Subtract the particular solution.", planesSvg([[1, 1, 0, 3], [0, 1, 1, 2]], { center: [1, 2, 0], size: 1.2, len: 3, line: { p: [1, 2, 0], d: [1, -1, 1], t0: -1, t1: 1.5 } })),
  num(S`The vectors orthogonal to $(1,1,1,1)$, $(1,-1,1,-1)$ and $(1,2,3,4)$ form a line $t\vec v$ with $v_4=1$. Find $v_1$.`, 1, "Solve the homogeneous system: v = (1, −1, −1, 1)."),
  tf(S`If $\vec u$ solves $A\vec x=\vec 0$ and $\vec v$ solves $A\vec x=\vec b$, then $\vec u-\vec v$ solves $A\vec x=-\vec b$.`, true, "0 − b."),
  num(S`A homogeneous system with 6 unknowns has a solution set spanned by 4 vectors, no fewer. What is $\operatorname{rank}A$?`, 2, "Parameters n − rank A = 4."),
  mc(S`For which $a$ does the homogeneous system with coefficient matrix $${am([[1, "a"], ["a", 1]], false)}$ have nontrivial solutions?`, S`$a=\pm1$`, [S`$a=1$ only`, S`$a=0$`, S`every $a$`], "1 − a² = 0.", linesSvg([[1, 1, 0], [1, 1, 0]], { xmin: -2, xmax: 2, ymin: -2, ymax: 2 })),
  num(S`For which positive $c$ does $x_1+cx_2+x_3=0,\ cx_1+x_2+x_3=0,\ x_1+x_2+cx_3=0$ have nontrivial solutions?`, 1, "c = 1 (all equations equal); c = −2 also works but is negative."),
];
// replace the faulty "closest" item with a clean one
Q[12] = num(S`The general solution of $A\vec x=\vec b$ is $(3,-1,0)+t(-2,1,1)$. Find $t$ for the solution with $x_1=x_2$.`, 4 / 3, "3 − 2t = −1 + t gives t = 4/3.", undefined, 0.001);
