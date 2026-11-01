// 4.2 Spanning Sets of ℝⁿ — 20 easy + 20 medium questions
import { S, F, mc, num, tf, fill, spansQ, inSpanQ } from "./gen4.mjs";

const easy = [
  spansQ([[2, 1], [1, 3]]),
  spansQ([[4, -2], [-2, 1]], F.v2([[[4, -2], "(4, −2)", "blue"], [[-2, 1], "(−2, 1)", "red"]], { xmin: -3, xmax: 5, ymin: -3, ymax: 2 })),
  spansQ([[1, 0, 0], [0, 1, 0]]),
  num(S`What is the smallest number of vectors that can span $\mathbb R^3$?`, 3, "A pivot is needed in each of the 3 rows, at most one per vector."),
  tf("Two vectors can span ℝ³.", false, "At most 2 pivots for 3 rows."),
  fill("Vectors span ℝⁿ exactly when an echelon form of the matrix with these vectors as columns has a pivot in every ___.", ["row"], "Pivot in every row ⇔ Ax = b is always consistent."),
  tf(S`The standard vectors $\vec e_1,\dots,\vec e_n$ span $\mathbb R^n$.`, true, "x = x₁e₁ + … + xₙeₙ."),
  mc(S`$A=[\,\vec v_1\ \vec v_2\ \vec v_3\,]$ is $3\times3$ with 2 pivots. The span of the $\vec v_i$ is:`, "a plane through 0", ["all of ℝ³", "a line", "a point"], "Two pivots: a two-dimensional span inside ℝ³."),
  tf(S`If $A\vec x=\vec b$ is consistent for every $\vec b$, the columns of $A$ span $\mathbb R^m$.`, true, "Every b is a combination of the columns."),
  spansQ([[1, 1], [2, 2], [3, 3]], F.v2([[[1, 1], "(1, 1)", "blue"], [[2, 2], "(2, 2)", "red", null, true]], { xmin: -1, xmax: 4, ymin: -1, ymax: 4 })),
  tf("Adding a vector to a spanning set of ℝⁿ gives another spanning set.", true, "Give the new vector weight 0."),
  num(S`$A$ is $4\times6$ and its columns span $\mathbb R^4$. How many pivots does $A$ have?`, 4, "A pivot in every row."),
  tf(S`$\{(1,0),(0,1),(5,7)\}$ spans $\mathbb R^2$.`, true, "It contains e₁ and e₂."),
  spansQ([[1, 2, 0], [0, 1, 3], [0, 0, 1]]),
  mc(S`$\operatorname{Span}\{(1,0,0),(0,1,0)\}$ has equation:`, S`$x_3=0$`, [S`$x_1=0$`, S`$x_1+x_2=0$`, S`$x_1=x_2$`], "Combinations (a, b, 0)."),
  tf(S`If $\vec w\in\operatorname{Span}\{\vec v_1,\vec v_2\}$, adding $\vec w$ enlarges the span.`, false, "w is already reachable."),
  num(S`$A$ is $5\times3$. At most how many rows of an echelon form can contain a pivot?`, 3, "One pivot per column at most."),
  tf(S`The columns of a $5\times3$ matrix can span $\mathbb R^5$.`, false, "At most 3 pivots for 5 rows."),
  spansQ([[1, 3], [2, 6]]),
  mc("Which set spans ℝ²?", S`$\{(1,1),(1,-1)\}$`, [S`$\{(1,1),(-1,-1)\}$`, S`$\{(0,0),(2,3)\}$`, S`$\{(4,2)\}$`], "Two non-parallel vectors span the plane."),
];

const medium = [
  spansQ([[1, 0, 1], [1, 1, 0], [0, 1, 1]], F.v3([[[1, 0, 1], "(1, 0, 1)"], [[1, 1, 0], "(1, 1, 0)"], [[0, 1, 1], "(0, 1, 1)"]])),
  spansQ([[1, 2, 3], [0, 1, 2], [1, 3, 5]]),
  spansQ([[2, 1, 0], [0, 1, 2], [1, 0, -1], [1, 1, 1]]),
  spansQ([[1, 0, 2, 0], [0, 1, 0, 2], [1, 1, 2, 2], [0, 0, 1, 1]]),
  num(S`For which $k$ do $(1,k)$ and $(3,9)$ fail to span $\mathbb R^2$?`, 3, "Parallel when (1, k) = ⅓(3, 9) = (1, 3)."),
  num(S`For which $k$ do $(1,0,1)$, $(0,1,1)$, $(1,1,k)$ fail to span $\mathbb R^3$?`, 2, "Columns [[1,0,1],[0,1,1],[1,1,k]]: R₃ − R₁ → (0, 1, k − 1); R₃ − R₂ → (0, 0, k − 2)."),
  mc(S`An equation of $\operatorname{Span}\{(1,1,0),(1,0,1)\}$ is:`, S`$x_1-x_2-x_3=0$`, [S`$x_1+x_2+x_3=0$`, S`$x_1-x_2+x_3=0$`, S`$x_2=x_3$`], "Reduce [1 1 | b₁; 1 0 | b₂; 0 1 | b₃]: R₂ − R₁ gives (0, −1 | b₂ − b₁), then R₃ + R₂ gives (0, 0 | b₃ + b₂ − b₁). So x₁ − x₂ − x₃ = 0.", F.plane([1, 1, 0], [1, 0, 1], { lu: "(1, 1, 0)", lv: "(1, 0, 1)" })),
  inSpanQ([[1, 1, 0], [1, 0, 1]], [3, 1, 2]),
  inSpanQ([[1, 1, 0], [1, 0, 1]], [3, 2, 2]),
  tf(S`Span$\{(1,2),(2,1),(3,3)\}=\mathbb R^2$.`, true, "(1, 2) and (2, 1) already span ℝ²."),
  num(S`$\operatorname{Span}\{(1,-2,1)\}$ is described by two equations. One is $2x_1+x_2=0$. The other is $x_1+cx_3=0$. Find $c$.`, -1, "The line is {(t, −2t, t)}: x₁ − x₃ = 0."),
  mc(S`Four vectors in $\mathbb R^3$ have a matrix with 2 pivots. Their span is:`, "a plane through 0", ["all of ℝ³", "a line", "four planes"], "Two pivots: dimension 2."),
  tf(S`If $\{\vec v_1,\vec v_2,\vec v_3\}$ spans $\mathbb R^3$, then so does $\{\vec v_1,\vec v_2,\vec v_1+\vec v_3\}$.`, true, "v₃ = (v₁ + v₃) − v₁, so the new set reaches v₃ and hence everything."),
  tf(S`If $\{\vec v_1,\vec v_2,\vec v_3\}$ spans $\mathbb R^3$, then so does $\{\vec v_1,\vec v_2,\vec v_1+\vec v_2\}$.`, false, "The new set lies in Span{v₁, v₂}, a plane."),
  num(S`$A$ is $3\times3$ with columns spanning a plane. How many zero rows does an echelon form of $A$ have?`, 1, "2 pivots, so one row has none."),
  spansQ([[3, 1, 2], [1, 1, 0], [1, -1, 2]], F.v3([[[3, 1, 2], "(3, 1, 2)"], [[1, 1, 0], "(1, 1, 0)"], [[1, -1, 2], "(1, −1, 2)"]])),
  mc(S`For which $\vec b$ is $${"\\begin{bmatrix}1&2\\\\2&4\\end{bmatrix}"}\vec x=\vec b$ consistent?`, S`exactly the multiples of $(1,2)$`, [S`every $\vec b$`, S`only $\vec b=\vec 0$`, S`exactly the multiples of $(2,1)$`], "Both columns are multiples of (1, 2)."),
  num(S`For which $c$ is $(2,c,1)$ in $\operatorname{Span}\{(1,1,0),(0,1,1)\}$?`, 3, "The span is x₁ − x₂ + x₃ = 0: 2 − c + 1 = 0."),
  tf("Every set of 4 vectors in ℝ³ spans ℝ³.", false, "e.g. four multiples of (1, 0, 0) span only a line."),
  num(S`How many of these sets span $\mathbb R^2$: $\{(1,0)\}$, $\{(1,2),(2,4)\}$, $\{(1,2),(2,3)\}$, $\{(0,1),(1,0),(1,1)\}$?`, 2, "Only the last two contain two non-parallel vectors."),
];

export const E = easy;
export { medium as M };
