// 5.2 Spans and Solution Sets as Subspaces — 20 easy + 20 medium questions
import { S, F, mc, num, tf, fill, inSpanQ, coefQ, nullVecQ, nullityQ } from "./gen5.mjs";

const easy = [
  inSpanQ([[1, 2]], [3, 6]),
  inSpanQ([[1, 2]], [2, 3]),
  coefQ([[1, 1], [1, -1]], [6, 2], 0),
  coefQ([[1, 1], [1, -1]], [8, 2], 1),
  tf("The span of any set of vectors contains the zero vector.", true, "Take every coefficient equal to 0."),
  mc(S`$\operatorname{Span}\{(1,0,0),(0,1,0)\}$ is:`, S`the plane $x_3=0$`, [S`the line through $(1,0,0)$ and $(0,1,0)$`, S`all of $\mathbb R^3$`, "just the two vectors"], "a(1, 0, 0) + b(0, 1, 0) = (a, b, 0)."),
  mc(S`$\operatorname{Span}\{(2,4)\}$ (figure) is:`, S`the line $y=2x$`, [S`the point $(2,4)$`, S`the line $y=2x+4$`, S`all of $\mathbb R^2$`], "All multiples t(2, 4) = (2t, 4t).", F.v2([[[2, 4], "(2, 4)", "blue"]], { xmin: -3, xmax: 4, ymin: -3, ymax: 5 })),
  nullityQ([[1, -1, 3]], undefined, S`How many vectors are needed to span the solutions of $x_1-x_2+3x_3=0$ (one per free variable)?`),
  tf(S`$\operatorname{Span}\{(1,1),(2,2)\}=\mathbb R^2$.`, false, "(2, 2) = 2(1, 1): the span is only the line y = x."),
  tf(S`$\operatorname{Span}\{(1,0),(0,1)\}=\mathbb R^2$.`, true, "(a, b) = a(1, 0) + b(0, 1)."),
  inSpanQ([[1, 0, 1], [0, 1, 1]], [3, 2, 5], F.plane([1, 0, 1], [0, 1, 1], { lu: "(1, 0, 1)", lv: "(0, 1, 1)", more: [[[3, 2, 5], "(3, 2, 5)", "green"]], len: 4 })),
  inSpanQ([[1, 0, 1], [0, 1, 1]], [3, 2, 4]),
  fill("The set of all linear combinations of v₁, …, vₖ is called their ___.", ["span"], "Span{v₁, …, vₖ}."),
  tf("The solution set of a homogeneous linear system is a subspace.", true, "Sums and multiples of solutions of Ax = 0 are solutions."),
  nullVecQ([[1, -2]], 0),
  mc(S`$\{(a,\ 2a,\ -a): a\in\mathbb R\}$ equals:`, S`$\operatorname{Span}\{(1,2,-1)\}$`, [S`$\operatorname{Span}\{(1,2,1)\}$`, S`$\operatorname{Span}\{(2,1,-1)\}$`, S`$\{(1,2,-1)\}$`], "Factor out a: a(1, 2, −1)."),
  tf(S`For $\vec v\ne\vec 0$ in $\mathbb R^3$, $\operatorname{Span}\{\vec v\}$ is a line through the origin.`, true, "All multiples of one nonzero vector."),
  coefQ([[1, 1], [0, 1]], [5, 7], 1),
  tf("Adding another vector to a spanning set can make the span smaller.", false, "Every old combination is still available (with coefficient 0 on the new vector)."),
  mc(S`Which vector lies in $\operatorname{Span}\{(1,1,0),(0,0,1)\}$?`, S`$(3,3,7)$`, [S`$(3,2,7)$`, S`$(1,2,0)$`, S`$(0,1,1)$`], "a(1, 1, 0) + b(0, 0, 1) = (a, a, b): the first two entries must be equal."),
];

const medium = [
  coefQ([[1, 2, 3], [2, -1, 1]], [5, 0, 5], 0),
  coefQ([[1, 0, 2], [1, 1, 0]], [3, 1, 4], 1),
  inSpanQ([[1, 2, 1], [0, 1, 3]], [2, 5, 5], F.plane([1, 2, 1], [0, 1, 3], { lu: "(1, 2, 1)", lv: "(0, 1, 3)", more: [[[2, 5, 5], "b", "green"]], len: 4 })),
  inSpanQ([[1, 2, 1], [0, 1, 3]], [2, 5, 6]),
  nullVecQ([[1, 1, -1], [1, 2, 1]], 0),
  nullVecQ([[1, 0, 2], [0, 1, -1]], 1),
  nullityQ([[1, 2, -1, 1]], undefined, S`How many vectors are needed to span the solutions of $x_1+2x_2-x_3+x_4=0$ in $\mathbb R^4$?`),
  num(S`For which $h$ is $(1,h,4)$ in $\operatorname{Span}\{(1,1,1),(0,1,3)\}$?`, 2, "a(1, 1, 1) + b(0, 1, 3) = (a, a + b, a + 3b): a = 1, then 1 + 3b = 4 gives b = 1, so h = 2."),
  mc(S`Which equation describes $\operatorname{Span}\{(1,0,1),(0,1,1)\}$?`, S`$x_3=x_1+x_2$`, [S`$x_1+x_2+x_3=0$`, S`$x_3=x_1-x_2$`, S`$x_1=x_2$`], "a(1, 0, 1) + b(0, 1, 1) = (a, b, a + b)."),
  tf(S`$\operatorname{Span}\{(1,2),(3,6),(0,1)\}=\mathbb R^2$.`, true, "(1, 2) and (0, 1) are not parallel, so they already span ℝ²."),
  tf(S`$\operatorname{Span}\{(1,1,0),(0,1,1),(1,2,1)\}$ is a plane (figure).`, true, "(1, 2, 1) = (1, 1, 0) + (0, 1, 1) is redundant; the other two are not parallel.", F.v3([[[1, 1, 0], "(1, 1, 0)"], [[0, 1, 1], "(0, 1, 1)"], [[1, 2, 1], "(1, 2, 1)", "green"]], { plane: [[1, 1, 0], [0, 1, 1], 1] })),
  mc(S`Which vector of $\{(1,0,1),(2,1,0),(3,1,1)\}$ is a combination of the other two?`, S`$(3,1,1)$ — it equals $(1,0,1)+(2,1,0)$`, [S`none of them`, S`$(1,0,1)$ only`, S`$(2,1,0)$ only`], "(1, 0, 1) + (2, 1, 0) = (3, 1, 1) (and so each is a combination of the others)."),
  tf(S`If $\vec w\in\operatorname{Span}\{\vec u,\vec v\}$, then $\operatorname{Span}\{\vec u,\vec v,\vec w\}=\operatorname{Span}\{\vec u,\vec v\}$.`, true, "w is redundant: substitute its expression in any combination."),
  nullityQ([[1, 1, 1, 1], [1, -1, 1, -1]], undefined, S`How many vectors span the solution space of $x_1+x_2+x_3+x_4=0,\ x_1-x_2+x_3-x_4=0$?`),
  coefQ([[2, 1], [1, 3]], [5, 10], 0),
  tf(S`$\operatorname{Span}\{\vec u,\vec v\}=\operatorname{Span}\{\vec u,\ \vec u+\vec v\}$ for all vectors.`, true, "v = (u + v) − u, so each spanning set is made from the other."),
  inSpanQ([[1, -1, 0], [0, 1, -1]], [2, -1, -1], F.plane([1, -1, 0], [0, 1, -1], { lu: "(1, −1, 0)", lv: "(0, 1, −1)", more: [[[2, -1, -1], "b", "green"]], len: 3 })),
  mc(S`If $\vec b\ne\vec 0$, the solution set of $A\vec x=\vec b$ is:`, "never a span of vectors", ["always a span", "a span exactly when A is square", "a span of the columns of A"], "Every span contains 0, but A·0 = 0 ≠ b."),
  num(S`For which $k$ is $\operatorname{Span}\{(1,k),(2,6)\}$ only a line?`, 3, "The vectors must be parallel: (2, 6) = 2(1, 3), so k = 3."),
  tf("The span of three vectors in ℝ³ is always all of ℝ³.", false, "Not if they are dependent, e.g. three vectors in one plane."),
];

export const E = easy;
export const M = medium;
