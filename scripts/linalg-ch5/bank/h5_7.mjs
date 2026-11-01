// 5.7 Bases for the Fundamental Subspaces and the Rank–Nullity Theorem — 20 hard questions
import { S, F, mc, num, tf, ms, rankQ, nullityQ, nullVecQ } from "./gen5.mjs";

export const TOPIC = "5.7 Bases for the Fundamental Subspaces and the Rank–Nullity Theorem";
export const Q = [
  num(S`For which $k$ is the rank of $\begin{bmatrix}1&3&-1\\2&6&k\end{bmatrix}$ equal to 1?`, -2, "R₂ − 2R₁ = (0, 0, k + 2)."),
  nullVecQ([[1, 0, 0, 2], [0, 1, 0, -1], [1, 1, 1, 4]], 2),
  tf(S`A $7\times5$ matrix can have rank 6.`, false, "rank ≤ min(7, 5) = 5."),
  mc(S`$A$ is $n\times n$ with $\operatorname{Null}A=\{\vec 0\}$. Then:`, S`$\operatorname{Col}A=\mathbb R^n$`, [S`$\operatorname{Col}A=\{\vec 0\}$`, S`$\operatorname{rank}A=0$`, S`$A\vec x=\vec b$ has no solution for some $\vec b$`], "Nullity 0 gives rank n."),
  num(S`$A$ is $4\times4$ and $\operatorname{Null}A$ has a basis of 2 vectors. Find $\operatorname{rank}A$.`, 2, "4 − 2."),
  ms(S`Which numbers can be the rank of a $3\times5$ matrix?`, ["0", "2", "3", "4"], [0, 1, 2], "0 ≤ rank ≤ min(3, 5) = 3."),
  tf(S`$\operatorname{Col}A$ and $\operatorname{Row}A$ are always the same subspace.`, false, "They have the same dimension but generally live in different spaces (ℝᵐ and ℝⁿ)."),
  rankQ([[1, 2, 3, 4], [2, 3, 4, 5], [3, 4, 5, 6], [4, 5, 6, 7]], F.v3([[[1, 2, 3], "col 1 (first 3 entries)"], [[2, 3, 4], "col 2"], [[3, 4, 5], "col 3", "green"]], { plane: [[1, 2, 3], [2, 3, 4], 0.6] })),
  nullityQ([[1, 1], [1, 1], [1, 1]]),
  tf(S`If $A$ is $m\times n$ with rank $n$, then $A\vec x=\vec b$ has at most one solution.`, true, "Nullity 0: no free variables."),
  mc(S`A basis of $\operatorname{Col}A$ for $A=\begin{bmatrix}1&2&1\\1&2&2\\1&2&3\end{bmatrix}$ is:`, S`$\{(1,1,1),(1,2,3)\}$`, [S`$\{(1,1,1),(2,2,2)\}$`, S`$\{(1,0,0),(0,0,1)\}$`, S`$\{(1,2,1)\}$`], "Pivot columns 1 and 3 (column 2 = 2·column 1)."),
  num(S`How many vectors are in a basis of $\operatorname{Row}A$ for $A=\begin{bmatrix}1&2&1\\1&2&2\\1&2&3\end{bmatrix}$?`, 2, "rank 2."),
  tf("If the RREF of A has nonzero rows (1, 0, 1) and (0, 1, 1), the null space is spanned by (−1, −1, 1) (figure).", true, "x₃ = t, x₁ = −t, x₂ = −t.", F.plane([1, 0, 1], [0, 1, 1], { lu: "(1, 0, 1)", lv: "(0, 1, 1)", line: [-1, -1, 1], fill: "#ede9fe", edge: "violet" })),
  nullityQ([[1, 2, 0, 1, 1], [0, 0, 1, 1, 0], [1, 2, 1, 2, 1]]),
  num(S`For which $k$ does $\begin{bmatrix}1&1&1\\1&2&k\\1&3&5\end{bmatrix}$ have nullity 1?`, 3, "Reduce: rows (1, 1, 1), (0, 1, k − 1), (0, 0, 6 − 2k)."),
  tf(S`$\operatorname{rank}A\le\min(m,n)$ for every $m\times n$ matrix.`, true, "Pivots occupy different rows and different columns."),
  mc(S`$A$ is $3\times3$ and $\operatorname{Col}A$ is a plane. Then $\operatorname{Null}A$ is:`, "a line", ["a plane", "{0}", "ℝ³"], "rank 2, nullity 3 − 2 = 1."),
  tf("The column space of A with columns (1, 0, 1) and (0, 1, 1) is the plane x₃ = x₁ + x₂ (figure).", true, "a(1, 0, 1) + b(0, 1, 1) = (a, b, a + b).", F.plane([1, 0, 1], [0, 1, 1], { lu: "a₁", lv: "a₂" })),
  num(S`$A$ is $6\times8$ and $A\vec x=\vec b$ is consistent for every $\vec b\in\mathbb R^6$. Find $\dim\operatorname{Null}A$.`, 2, "rank = 6, so nullity = 8 − 6."),
  tf("For a rank-1 matrix A with three columns, the row-space line is perpendicular to the null-space plane (figure).", true, "Null A ⊥ Row A, and 1 + 2 = 3.", F.plane([-2, 1, 0], [1, 0, 1], { lu: "", lv: "", line: [1, 2, -1] })),
];
