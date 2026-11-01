// 5.6 Null Space, Column Space and Row Space — 20 hard questions
import { S, F, mc, num, tf, ms, nullMemberQ, colMemberQ, rowMemberQ } from "./gen5.mjs";

export const TOPIC = "5.6 Null Space, Column Space and Row Space";
export const Q = [
  num(S`For which $h$ is $(1,h,-1)$ in the column space of $\begin{bmatrix}1&1\\1&2\\1&3\end{bmatrix}$?`, 0, "c₁ + c₂ = 1 and c₁ + 3c₂ = −1 give c₂ = −1, c₁ = 2; then h = c₁ + 2c₂ = 0."),
  num(S`For which $k$ is $(1,k,1)$ in the null space of $\begin{bmatrix}1&2&-3\\2&1&-3\end{bmatrix}$?`, 1, "1 + 2k − 3 = 0 and 2 + k − 3 = 0 both give k = 1."),
  colMemberQ([[1, 0, 1], [0, 1, 1], [1, 1, 2], [1, 0, 1]], [2, 3, 5, 2]),
  rowMemberQ([[1, 1, 0, 0], [0, 0, 1, 1]], [2, 2, 3, 3]),
  rowMemberQ([[1, 1, 0, 0], [0, 0, 1, 1]], [1, 2, 3, 4]),
  tf(S`For an $m\times n$ matrix, $\operatorname{Col}A=\mathbb R^m$ exactly when $\operatorname{rank}A=m$.`, true, "A pivot in every row means no row 0 = nonzero can appear."),
  mc(S`For which $\vec b$ is $A\vec x=\vec b$ consistent, where $A=\begin{bmatrix}1&2\\2&4\\3&6\end{bmatrix}$?`, S`exactly the multiples of $(1,2,3)$`, ["every b ∈ ℝ³", "only b = 0", "the b with b₁ + b₂ + b₃ = 0"], "Both columns are multiples of (1, 2, 3)."),
  tf("For a 2×3 matrix of rank 2, the null space is a line perpendicular to the row-space plane (figure).", true, "Null A ⊥ Row A, with dimensions 1 and 2 in ℝ³.", F.plane([1, 0, 1], [0, 1, 1], { lu: "row 1", lv: "row 2", line: [-1, -1, 1] })),
  num(S`For which $x$ is $(1,x,2)$ in the null space of $\begin{bmatrix}1&1&-1\end{bmatrix}$?`, 1, "1 + x − 2 = 0."),
  ms(S`Which vectors are in the null space of $\begin{bmatrix}1&-1&0\\0&1&-1\end{bmatrix}$?`, [S`$(1,1,1)$`, S`$(2,2,2)$`, S`$(1,0,-1)$`, S`$(0,0,0)$`], [0, 1, 3], "The equations say x₁ = x₂ = x₃."),
  tf("If A and B are row equivalent, then Col A = Col B.", false, "Row operations change columns: e.g. [1; 1] and [1; 0]."),
  mc(S`$A$ is $4\times2$. $\operatorname{Col}A$ could be:`, S`a plane through $\vec 0$ in $\mathbb R^4$`, [S`all of $\mathbb R^4$`, S`a 3-dimensional subspace of $\mathbb R^4$`, S`a plane in $\mathbb R^2$`], "It is spanned by two vectors of ℝ⁴."),
  num(S`For which $h$ is $(4,1,h)$ in the column space of $A$ with columns $(1,0,1)$ and $(1,1,0)$ (figure)?`, 3, "a(1, 0, 1) + b(1, 1, 0) = (a + b, b, a): b = 1, a = 3.", F.plane([1, 0, 1], [1, 1, 0], { lu: "a₁", lv: "a₂", more: [[[4, 1, 3], "(4, 1, h)", "green"]], len: 4.5 })),
  tf(S`If $\vec b\in\operatorname{Col}A$ and $\operatorname{Null}A=\{\vec 0\}$, then $A\vec x=\vec b$ has exactly one solution.`, true, "Consistent, and two solutions would differ by a nonzero null vector."),
  nullMemberQ([[1, 1, 1, 1], [1, 2, 3, 4]], [1, -2, 1, 0]),
  mc(S`If $A\vec x=\vec 0$ and $A\vec y=\vec b$, then $A(\vec x+\vec y)=$`, S`$\vec b$`, [S`$\vec 0$`, S`$2\vec b$`, S`$\vec x+\vec b$`], "Ax + Ay = 0 + b."),
  tf("(1, 2) lies in the column space of the matrix with columns (2, 4) and (1, 2) (figure).", true, "(1, 2) is itself a column.", F.v2([[[2, 4], "a₁", "blue"], [[1, 2], "a₂ = (1, 2)", "red"]], { xmin: -1, xmax: 3, ymin: -1, ymax: 5 })),
  num(S`For which $k$ is the column space of $\begin{bmatrix}1&k\\2&6\end{bmatrix}$ only a line?`, 3, "The columns are parallel when (k, 6) = 3(1, 2)."),
  rowMemberQ([[1, 2, 1], [2, 1, 1]], [3, 3, 2], F.plane([1, 2, 1], [2, 1, 1], { lu: "row 1", lv: "row 2", more: [[[3, 3, 2], "y", "green"]], len: 3.5, fill: "#ede9fe", edge: "violet" })),
  tf(S`Every vector of $\mathbb R^n$ is a sum of a vector in $\operatorname{Row}A$ and a vector in $\operatorname{Null}A$.`, true, "The two subspaces are perpendicular and their dimensions add to n (rank–nullity)."),
];
