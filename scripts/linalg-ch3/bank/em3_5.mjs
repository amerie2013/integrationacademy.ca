// 3.5 Linear Systems as Ax = b — 20 easy + 20 medium questions
import { S, F, M, mc, num, tf, fill, sysQ, consQ } from "./gen3.mjs";

const easy = [
  mc(S`The system $2x_1-x_2=5,\ x_1+3x_2=-1$ is $A\vec x=\vec b$ with $A=$`, S`$${M([[2, -1], [1, 3]])}$`, [S`$${M([[2, 1], [-1, 3]])}$`, S`$${M([[2, -1, 5], [1, 3, -1]])}$`, S`$${M([[5], [-1]])}$`], "Row i of A holds the coefficients of equation i."),
  mc(S`For the same system $2x_1-x_2=5,\ x_1+3x_2=-1$, $\vec b=$`, S`$(5,-1)$`, [S`$(2,1)$`, S`$(-1,3)$`, S`$(5,1)$`], "b holds the right-hand sides."),
  num(S`$A$ is the coefficient matrix of a system of 4 equations in 3 unknowns. How many columns does $A$ have?`, 3, "One column per unknown."),
  fill(S`The matrix $[A\mid\vec b]$ is called the ___ matrix of the system.`, ["augmented"], "A with the column b attached."),
  tf(S`$\vec x=(1,2)$ solves $${M([[3, -1], [1, 1]])}\vec x=(1,3)$.`, true, "A(1, 2) = (3 − 2, 1 + 2) = (1, 3) ✓."),
  tf(S`$\vec x=(2,0)$ solves $${M([[3, -1], [1, 1]])}\vec x=(1,3)$.`, false, "A(2, 0) = (6, 2) ≠ (1, 3)."),
  sysQ([[1, 1], [1, -1]], [5, 1], 0),
  sysQ([[2, 1], [1, 0]], [7, 2], 1),
  consQ([[1, 2], [2, 4]], [3, 6], F.mat([[1, 2, 3], [2, 4, 6]], { label: "[A | b]" })),
  consQ([[1, 2], [2, 4]], [3, 5]),
  tf(S`$A\vec x=\vec b$ is consistent exactly when $\vec b$ is a linear combination of the columns of $A$.`, true, "Ax = x₁a₁ + … + xₙaₙ."),
  tf(S`$A\vec x=\vec 0$ always has at least one solution.`, true, "x = 0 works: A0 = 0."),
  mc(S`$A\vec x=\vec 0$ is called:`, "homogeneous", ["inconsistent", "augmented", "triangular"], "A system with all right-hand sides 0."),
  num(S`Write $x_1+2x_2-x_3=4$, $3x_2+x_3=0$ as $A\vec x=\vec b$. What is $a_{21}$?`, 0, "Equation 2 has no x₁ term, so its coefficient is 0.", F.row([[[[1, 2, -1], [0, 3, 1]], { cells: [[1, 0]], label: "A" }], [[["x₁"], ["x₂"], ["x₃"]], { label: "x" }], "=", [[[4], [0]], { label: "b" }]])),
  sysQ([[1, 0, 0], [0, 2, 0], [0, 0, -1]], [3, 8, 2], 1),
  tf(S`If $\vec p$ and $\vec q$ both solve $A\vec x=\vec b$, then $\vec p-\vec q$ solves $A\vec x=\vec 0$.`, true, "A(p − q) = b − b = 0."),
  num(S`$A\vec x=\vec b$ has a row $[\,0\ 0\ 0\mid 5\,]$ after row reduction. How many solutions are there?`, 0, "The row says 0 = 5: no solution."),
  mc(S`The system $A\vec x=\vec b$ with $A$ $3\times5$ has:`, S`3 equations and 5 unknowns`, ["5 equations and 3 unknowns", "15 unknowns", "3 unknowns"], "Rows ↔ equations, columns ↔ unknowns."),
  sysQ([[3, 1], [1, 1]], [5, 3], 0),
  tf(S`$\vec x=(1,-1,1)$ solves $${M([[1, 1, 1], [2, 0, -1]])}\vec x=(1,1)$.`, true, "Row 1: 1 − 1 + 1 = 1 ✓. Row 2: 2 + 0 − 1 = 1 ✓."),
];

const medium = [
  sysQ([[1, 2, 1], [2, 5, 1], [1, 1, 3]], [4, 8, 5], 2, F.mat([[1, 2, 1, 4], [2, 5, 1, 8], [1, 1, 3, 5]], { label: "[A | b]" })),
  sysQ([[2, -1, 0], [1, 1, 1], [0, 3, -1]], [0, 6, 3], 0),
  sysQ([[1, -1, 2], [0, 1, 1], [2, 0, 1]], [3, 2, 5], 1),
  consQ([[1, 1, 2], [2, 3, 5], [1, 2, 3]], [3, 7, 4]),
  consQ([[1, 1, 2], [2, 3, 5], [1, 2, 3]], [3, 7, 5], F.mat([[1, 1, 2], [2, 3, 5], [1, 2, 3]], { col: 2, label: "A" })),
  num(S`For which $k$ is $${M([[1, 2], [3, 6]])}\vec x=(4,k)$ consistent?`, 12, S`$R_2-3R_1$ turns $[A\mid\vec b]$ into $${M([[1, 2, 4], [0, 0, "k-12"]])}$; consistent only when $k-12=0$.`),
  num(S`$\vec p=(1,2)$ solves $A\vec x=\vec b$ and $A\vec h=\vec 0$ for $\vec h=(3,-1)$. Find $t$ such that $(7,t)$ is also a solution of $A\vec x=\vec b$.`, 0, "Solutions include p + s·h = (1 + 3s, 2 − s). 1 + 3s = 7 gives s = 2, so t = 2 − 2 = 0."),
  mc(S`The solution set of $A\vec x=\vec b$ is $\{(1,0,2)+t(1,1,0)\}$. The solution set of $A\vec x=\vec 0$ is:`, S`$\{t(1,1,0)\}$`, [S`$\{(1,0,2)\}$`, S`$\{(1,0,2)+t(1,1,0)\}$`, S`$\{\vec 0\}$ only`], "Solutions of Ax = b = particular solution + solutions of Ax = 0."),
  tf(S`If $A\vec x=\vec b$ has exactly one solution, then $A\vec x=\vec 0$ has only the zero solution.`, true, "Every other solution would be p + h with h ≠ 0."),
  tf(S`If $A\vec x=\vec 0$ has only the zero solution, then $A\vec x=\vec b$ is consistent for every $\vec b$.`, false, S`$A=${M([[1], [1]])}$: $Ax=0$ forces $x=0$, but $A x=(1,2)$ has no solution.`),
  sysQ([[1, 1, 1], [1, 2, 3], [1, 3, 6]], [6, 14, 25], 2),
  num(S`$A\vec x=\vec b$ with $A$ $3\times3$ reduces to $${M([[1, 0, 2, 3], [0, 1, -1, 1], [0, 0, 0, 0]])}$. How many free variables are there?`, 1, "Pivots in columns 1 and 2; x₃ is free."),
  num(S`For the system that reduces to $${M([[1, 0, 2, 3], [0, 1, -1, 1], [0, 0, 0, 0]])}$, find $x_1$ for the solution with $x_3=1$.`, 1, "x₁ = 3 − 2x₃ = 1 (and x₂ = 1 + x₃ = 2)."),
  consQ([[1, 0, 1], [0, 1, 1], [1, 1, 2]], [2, 3, 5]),
  tf(S`$(2,1)$ is a combination of $(1,1)$ and $(3,3)$.`, false, S`$[A\mid\vec b]=${M([[1, 3, 2], [1, 3, 1]])}$; $R_2-R_1$ gives $(0,0,-1)$: inconsistent.`),
  sysQ([[4, -2], [3, 1]], [10, 15], 0),
  mc(S`Which vector is a solution of $x_1+x_2-x_3=0$ that is NOT the zero vector?`, S`$(1,1,2)$`, [S`$(1,1,1)$`, S`$(1,-1,1)$`, S`$(2,0,1)$`], "1 + 1 − 2 = 0."),
  num(S`$A$ is $2\times3$ with rank 2. How many free variables does $A\vec x=\vec 0$ have?`, 1, "3 unknowns − 2 pivots = 1 free variable."),
  sysQ([[1, 2, 0], [0, 1, 3], [2, 0, 1]], [5, -1, 1], 2),
  tf(S`A homogeneous system with more unknowns than equations has a nonzero solution.`, true, "At most one pivot per row, so some column has no pivot: a free variable."),
];

export const E = easy;
export { medium as M };
