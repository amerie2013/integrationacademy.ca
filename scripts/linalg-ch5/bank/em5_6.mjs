// 5.6 Null Space, Column Space and Row Space — 20 easy + 20 medium questions
import { S, F, mc, num, tf, fill, nullMemberQ, colMemberQ, rowMemberQ } from "./gen5.mjs";

const easy = [
  nullMemberQ([[1, 2], [2, 4]], [2, -1]),
  nullMemberQ([[1, 2], [2, 4]], [1, 1]),
  mc(S`$A$ is $3\times5$. $\operatorname{Null}A$ is a subspace of:`, S`$\mathbb R^5$`, [S`$\mathbb R^3$`, S`$\mathbb R^8$`, S`$\mathbb R^{15}$`], "x has one entry per column."),
  mc(S`$A$ is $3\times5$. $\operatorname{Col}A$ is a subspace of:`, S`$\mathbb R^3$`, [S`$\mathbb R^5$`, S`$\mathbb R^2$`, S`$\mathbb R^8$`], "Each column has one entry per row."),
  num(S`Find the first entry of $A\vec x$ for $A=\begin{bmatrix}1&2\\3&4\end{bmatrix}$, $\vec x=(1,1)$.`, 3, "(row 1)·x = 1 + 2."),
  num(S`Find the second entry of $A\vec x$ for $A=\begin{bmatrix}1&2\\3&4\end{bmatrix}$, $\vec x=(1,1)$.`, 7, "(row 2)·x = 3 + 4."),
  tf(S`$A\vec x=\vec b$ is consistent exactly when $\vec b\in\operatorname{Col}A$.`, true, "Ax is a combination of the columns."),
  colMemberQ([[1, 0], [0, 1], [0, 0]], [2, 3, 0], F.plane([1, 0, 0], [0, 1, 0], { lu: "a₁", lv: "a₂", more: [[[2, 3, 0], "b", "green"]], len: 3.5 })),
  colMemberQ([[1, 0], [0, 1], [0, 0]], [2, 3, 1]),
  tf(S`$\vec 0\in\operatorname{Null}A$ for every matrix $A$.`, true, "A0 = 0."),
  fill("The set of solutions of Ax = 0 is called the ___ space of A.", ["null"], "Null A."),
  rowMemberQ([[1, 2, 3]], [2, 4, 6]),
  tf(S`$\operatorname{Row}A=\operatorname{Col}A^T$.`, true, "The rows of A are the columns of Aᵀ."),
  mc(S`For $A$ with columns $\vec a_1,\vec a_2$, $A\vec x$ equals:`, S`$x_1\vec a_1+x_2\vec a_2$`, [S`$\vec a_1+\vec a_2$`, S`$x_1x_2(\vec a_1+\vec a_2)$`, S`$\vec a_1\cdot\vec x$`], "The definition of the matrix–vector product."),
  tf("Row operations change the row space of a matrix.", false, "Each new row is a combination of old rows and the step can be undone."),
  nullMemberQ([[1, 1, 1]], [1, -2, 1]),
  colMemberQ([[1], [2]], [3, 5], F.v2([[[1, 2], "a₁", "blue"], [[3, 5], "b", "green"]], { xmin: -1, xmax: 4, ymin: -1, ymax: 6 })),
  tf(S`For an $m\times n$ matrix, $\operatorname{Null}A$ is a subspace of $\mathbb R^m$.`, false, "It lies in ℝⁿ (one entry per column)."),
  num(S`For which $k$ is $(k,1)$ in the null space of $\begin{bmatrix}1&3\end{bmatrix}$?`, -3, "k + 3 = 0."),
  mc(S`Which vector lies in the column space of $\begin{bmatrix}1&1\\1&1\end{bmatrix}$?`, S`$(2,2)$`, [S`$(1,2)$`, S`$(2,0)$`, S`$(0,1)$`], "Every column is (1, 1)."),
];

const medium = [
  nullMemberQ([[1, -1, 2], [0, 1, -1]], [-1, 1, 1]),
  colMemberQ([[1, 2], [1, 0], [0, 1]], [3, 1, 1]),
  colMemberQ([[1, 2], [1, 0], [0, 1]], [3, 1, 2]),
  rowMemberQ([[1, 0, 2], [0, 1, -1]], [3, -2, 8]),
  rowMemberQ([[1, 0, 2], [0, 1, -1]], [3, -2, 7]),
  num(S`For which $h$ is $(2,h,1)$ in the column space of $\begin{bmatrix}1&0\\1&1\\0&1\end{bmatrix}$?`, 3, "a(1, 1, 0) + b(0, 1, 1) = (a, a + b, b): a = 2, b = 1."),
  tf("Row operations do not change the null space of a matrix.", true, "They do not change the solutions of Ax = 0."),
  mc(S`Every vector of $\operatorname{Null}A$ is orthogonal to every vector of:`, S`$\operatorname{Row}A$`, [S`$\operatorname{Col}A$`, S`$\mathbb R^n$`, S`$\operatorname{Null}A$`], "Ax = 0 says each row has dot product 0 with x."),
  nullMemberQ([[2, 1, 0, -1], [1, 0, 1, 1]], [1, -1, -2, 1]),
  tf("The column space of a matrix equals the column space of its RREF.", false, "Row operations usually change the columns' span."),
  num(S`For which $k$ is $(1,1,k)$ in the row space of $\begin{bmatrix}1&0&1\\0&1&1\end{bmatrix}$?`, 2, "a(1, 0, 1) + b(0, 1, 1) = (a, b, a + b) with a = b = 1."),
  colMemberQ([[1, 1], [2, 0], [0, 1]], [3, 2, 2], F.plane([1, 2, 0], [1, 0, 1], { lu: "a₁", lv: "a₂", more: [[[3, 2, 2], "b", "green"]], len: 3.5 })),
  mc(S`$A$ is $2\times3$ with $\operatorname{Col}A=\mathbb R^2$. Then $A\vec x=\vec b$ is:`, "consistent for every b", ["consistent only for b = 0", "never consistent", "uniquely solvable for every b"], "Every b lies in Col A (but solutions are not unique: there is a free variable)."),
  tf(S`If $A\vec x=\vec 0$ has only the trivial solution, then $\operatorname{Null}A=\{\vec 0\}$.`, true, "That is what Null A is."),
  num(S`Find the first entry of $A\vec x$ for $A=\begin{bmatrix}2&-1&3\\0&4&1\end{bmatrix}$, $\vec x=(1,2,-1)$.`, -3, "2 − 2 − 3."),
  tf(S`A vector in both $\operatorname{Null}A$ and $\operatorname{Row}A$ must be $\vec 0$.`, true, "It is orthogonal to itself: ‖x‖² = 0."),
  nullMemberQ([[1, 2, 3], [4, 5, 6]], [1, -2, 1]),
  mc(S`The row space of $\begin{bmatrix}1&2\\2&4\end{bmatrix}$ is:`, S`the line through $(1,2)$`, [S`all of $\mathbb R^2$`, S`the line through $(2,1)$`, S`$\{\vec 0\}$`], "Row 2 = 2·row 1."),
  colMemberQ([[1, 2], [2, 4]], [1, 3], F.v2([[[1, 2], "a₁", "blue"], [[2, 4], "a₂", "red", null, true], [[1, 3], "b", "green"]], { xmin: -1, xmax: 3, ymin: -1, ymax: 5 })),
  tf("A matrix and its RREF have the same null space.", true, "Row operations preserve the solutions of Ax = 0."),
];

export const E = easy;
export const M = medium;
