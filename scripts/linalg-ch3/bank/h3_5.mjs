// 3.5 Linear Systems as Ax = b — 20 hard questions
import { S, F, M, mc, num, tf, ms, sysQ, consQ } from "./gen3.mjs";

export const TOPIC = "3.5 Linear Systems as Ax = b";
export const Q = [
  sysQ([[1, 1, 0, 1], [0, 1, 1, 0], [1, 0, 1, 1], [1, 1, 1, 0]], [4, 5, 5, 6], 3, F.mat([[1, 1, 0, 1, 4], [0, 1, 1, 0, 5], [1, 0, 1, 1, 5], [1, 1, 1, 0, 6]], { label: "[A | b]" })),
  sysQ([[2, 1, -1], [1, -1, 2], [3, 2, 1]], [3, 5, 10], 1),
  consQ([[1, 2, -1], [2, 1, 1], [1, -1, 2]], [1, 2, 1]),
  consQ([[1, 2, -1], [2, 1, 1], [1, -1, 2]], [1, 2, 2], F.mat([[1, 2, -1], [2, 1, 1], [1, -1, 2]], { label: "A" })),
  num(S`For which $k$ is $${M([[1, 1, 1], [1, 2, 3], [2, 3, 4]])}\vec x=(1,2,k)$ consistent?`, 3, S`$R_2-R_1$, $R_3-2R_1$: rows $(0,1,2\mid1)$ and $(0,1,2\mid k-2)$; then $R_3-R_2$ gives $(0,0,0\mid k-3)$. Consistent only for $k=3$.`),
  num(S`For which $a$ does $${M([[1, 2], [3, "a"]])}\vec x=\vec b$ fail to have a unique solution?`, 6, S`$R_2-3R_1$ gives the pivot $a-6$; when $a=6$ there is no pivot in column 2.`),
  mc(S`$A$ is $3\times3$ and $A\vec x=\vec b$ has the solutions $(1,2,0)$ and $(3,1,1)$. Which is also a solution?`, S`$(5,0,2)$`, [S`$(4,3,1)$`, S`$(2,-1,1)$`, S`$(0,0,0)$`], "(3, 1, 1) − (1, 2, 0) = (2, −1, 1) solves Ax = 0, so (1, 2, 0) + 2(2, −1, 1) = (5, 0, 2) solves Ax = b. (4, 3, 1) is a sum of two solutions: A gives 2b ≠ b."),
  tf(S`If $\vec p$ and $\vec q$ solve $A\vec x=\vec b$ with $\vec b\ne\vec 0$, then $\vec p+\vec q$ solves it too.`, false, "A(p + q) = 2b ≠ b."),
  tf(S`If $\vec p$ and $\vec q$ solve $A\vec x=\vec b$, then $\tfrac12(\vec p+\vec q)$ solves it too.`, true, "A(½p + ½q) = ½b + ½b = b."),
  num(S`$A\vec x=\vec b$ is a system of 5 equations in 7 unknowns and is consistent. At least how many free variables does it have?`, 2, "At most 5 pivots for 7 unknowns: at least 2 free variables."),
  ms(S`$A$ is $4\times3$. Which are possible?`, [S`$A\vec x=\vec b$ has no solution for some $\vec b$`, S`$A\vec x=\vec b$ has a solution for every $\vec b$`, S`$A\vec x=\vec 0$ has only the zero solution`, S`$A\vec x=\vec 0$ has infinitely many solutions`], [0, 2, 3], "Three columns cannot span ℝ⁴, so some b always fails. Ax = 0 has only 0 when rank 3, infinitely many when rank < 3."),
  num(S`$\vec p=(2,-1,0)$ solves $A\vec x=\vec b$, and $\operatorname{Null}A$ is spanned by $(1,1,1)$. Find the $x_1$-entry of the solution whose $x_3$-entry is 4.`, 6, "Solutions (2 + t, −1 + t, t); t = 4 gives (6, 3, 4)."),
  sysQ([[1, 2, 3], [2, 5, 3], [1, 0, 8]], [6, 4, 21], 0, F.mat([[1, 2, 3], [2, 5, 3], [1, 0, 8]], { label: "A" })),
  tf(S`The vector $(1,4,7)$ is in the span of $(1,2,3)$ and $(0,1,2)$.`, true, S`$1\cdot(1,2,3)+2\cdot(0,1,2)=(1,4,7)$: the system $[\,\vec a_1\ \vec a_2\mid\vec b\,]$ is consistent with weights $(1,2)$.`),
  num(S`Find $h$ so that $(1,h,5)$ is a combination of $(1,0,2)$ and $(0,1,1)$.`, 3, "x₁(1, 0, 2) + x₂(0, 1, 1) = (x₁, x₂, 2x₁ + x₂): x₁ = 1, x₂ = h, and 2 + h = 5, so h = 3."),
  mc(S`Row reduction of $[A\mid\vec b]$ gives $${M([[1, 0, -1, 2], [0, 1, 2, -1], [0, 0, 0, 0]])}$. The solutions in parametric form are:`, S`$(2,-1,0)+t(1,-2,1)$`, [S`$(2,-1,0)+t(-1,2,1)$`, S`$(1,-2,1)+t(2,-1,0)$`, S`$(2,-1,1)$ only`], "x₁ = 2 + x₃, x₂ = −1 − 2x₃, x₃ = t free."),
  num(S`A diet uses foods 1 and 2: food 1 has 2 g protein and 1 g fat per serving, food 2 has 1 g protein and 3 g fat. How many servings of food 1 give exactly 8 g protein and 9 g fat?`, 3, S`$${M([[2, 1], [1, 3]])}\vec x=(8,9)$: from row 1, $x_2=8-2x_1$; row 2: $x_1+24-6x_1=9$, so $x_1=3$, $x_2=2$.`, F.row([[[[2, 1], [1, 3]], { label: "A" }], [[["x₁"], ["x₂"]], { label: "x" }], "=", [[[8], [9]], { label: "b" }]])),
  tf(S`If $A$ is $3\times3$ and $A\vec x=\vec 0$ has a nonzero solution, then $A\vec x=\vec b$ has no solution for some $\vec b$.`, true, "Fewer than 3 pivots, so some row of the echelon form is zero and some b makes it 0 = nonzero."),
  num(S`For which $k$ does $${M([[1, "k"], ["k", 4]])}\vec x=(2,4)$ have infinitely many solutions?`, 2, S`$k=\pm2$ removes the second pivot ($4-k^2=0$). For $k=2$: rows $(1,2\mid2)$, $(2,4\mid4)$ — the second is twice the first: infinitely many. For $k=-2$: $(-2,4\mid4)$ vs $-2(1,-2\mid2)=(-2,4\mid-4)$: inconsistent.`),
  sysQ([[1, -1, 1], [2, 1, -1], [1, 2, 3]], [2, 1, 14], 2),
];
