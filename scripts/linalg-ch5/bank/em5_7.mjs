// 5.7 Bases for the Fundamental Subspaces and the Rank–Nullity Theorem — 20 easy + 20 medium questions
import { S, F, mc, num, tf, fill, rankQ, nullityQ, nullVecQ } from "./gen5.mjs";

const easy = [
  rankQ([[1, 2], [2, 4]]),
  rankQ([[1, 0], [0, 1]]),
  num(S`$A$ is $3\times5$ with rank 2. Find $\dim\operatorname{Null}A$.`, 3, "n − rank = 5 − 2."),
  num(S`$A$ is $4\times4$ with rank 4. Find $\dim\operatorname{Null}A$.`, 0, "4 − 4."),
  tf(S`$\dim\operatorname{Col}A=\dim\operatorname{Row}A$ for every matrix.`, true, "Both equal the rank."),
  mc(S`A basis of $\operatorname{Col}A$ consists of:`, S`the columns of $A$ in the pivot positions`, ["the pivot columns of the RREF", "the nonzero rows of the RREF", "the free columns of A"], "Row operations preserve column relations, not the columns."),
  mc(S`A basis of $\operatorname{Row}A$ consists of:`, "the nonzero rows of the RREF", ["the pivot columns of A", "all rows of A", "the free columns of the RREF"], "Row operations do not change the row space."),
  fill("dim Null A is called the ___ of A.", ["nullity"], "rank + nullity = n."),
  nullityQ([[1, 2, 3]]),
  tf(S`$\operatorname{rank}A^T=\operatorname{rank}A$.`, true, "rank Aᵀ = dim Row A = dim Col A = rank A."),
  num(S`$A$ is $2\times6$ with rank 2. Find the nullity.`, 4, "6 − 2."),
  tf("The rank–nullity theorem says rank A + nullity A equals the number of rows.", false, "It equals n, the number of columns."),
  rankQ([[1, 1, 1], [1, 1, 1]]),
  num(S`The RREF of a $3\times7$ matrix has 3 pivots. Find the nullity.`, 4, "7 − 3."),
  tf("A null-space basis has one vector per pivot column.", false, "One per free column."),
  mc(S`$A$ is $5\times3$ with rank 3. Then $\operatorname{Null}A$ is:`, S`$\{\vec 0\}$`, ["a line", "a plane", "ℝ³"], "Nullity 3 − 3 = 0."),
  rankQ([[1, 2, 3], [0, 1, 4], [0, 0, 5]]),
  nullityQ([[1, -1, 0], [0, 1, -1]], F.line([1, 1, 1], { label: "(1, 1, 1)" })),
  num("What is the rank of the 3×3 zero matrix?", 0, "No pivots."),
  tf("For a 3×3 matrix of rank 1, the null space is a plane through the origin (figure).", true, "Nullity 3 − 1 = 2.", F.plane([1, -1, 0], [0, 1, -1], { lu: "", lv: "" })),
];

const medium = [
  rankQ([[1, 2, 1, 0], [2, 4, 3, 1], [1, 2, 2, 1]]),
  nullityQ([[1, 2, 1, 0], [2, 4, 3, 1], [1, 2, 2, 1]]),
  nullVecQ([[1, 2, 0], [0, 1, 1], [1, 3, 1]], 0),
  mc(S`A basis of $\operatorname{Col}A$ for $A=\begin{bmatrix}1&2&0\\2&4&1\end{bmatrix}$ is:`, S`$\{(1,2),(0,1)\}$`, [S`$\{(1,2),(2,4)\}$`, S`$\{(1,0),(0,1),(2,0)\}$`, S`$\{(1,2,0),(0,0,1)\}$`], "Pivot columns 1 and 3 of A."),
  mc(S`A basis of $\operatorname{Row}A$ for $A=\begin{bmatrix}1&2&0\\2&4&1\end{bmatrix}$ is:`, S`$\{(1,2,0),(0,0,1)\}$`, [S`$\{(1,2),(0,1)\}$`, S`$\{(1,2,0)\}$`, S`$\{(1,0,0),(0,1,0)\}$`], "The RREF rows: R₂ − 2R₁ = (0, 0, 1)."),
  num(S`$A$ is $5\times7$ and $\dim\operatorname{Null}A=3$. Find $\operatorname{rank}A$.`, 4, "7 − 3."),
  tf(S`Every $3\times5$ matrix has nullity at least 2.`, true, "rank ≤ 3, so nullity ≥ 5 − 3."),
  num(S`$A$ is $6\times4$ with nullity 1. Find $\dim\operatorname{Col}A$.`, 3, "rank = 4 − 1."),
  tf(S`A $4\times3$ matrix can have $\operatorname{Col}A=\mathbb R^4$.`, false, "rank ≤ 3 < 4."),
  rankQ([[2, 4, 6], [1, 3, 5], [1, 1, 1]]),
  nullVecQ([[1, 1, 1], [1, 2, 3]], 1),
  tf(S`If $\operatorname{rank}A=m$, then $A\vec x=\vec b$ is consistent for every $\vec b$.`, true, "Col A has dimension m, so it is all of ℝᵐ."),
  num(S`For which $n$ does a $3\times n$ matrix of rank 3 have nullity 4?`, 7, "n − 3 = 4."),
  mc(S`$A$ is $3\times3$ with rank 2. Then $A\vec x=\vec b$ is:`, "consistent for some b only, and never uniquely solvable", ["consistent for every b", "uniquely solvable for every b", "never consistent"], "Col A is a plane; nullity 1 gives a free variable."),
  tf("For a 3×3 matrix of rank 2, the column space is a plane through 0 (figure).", true, "dim Col A = rank = 2.", F.plane([1, 0, 1], [0, 1, 1], { lu: "", lv: "" })),
  nullityQ([[1, 0, 1, 0], [0, 1, 0, 1], [1, 1, 1, 1]]),
  num(S`$A$ is $4\times6$ with nullity 3. Find $\dim\operatorname{Row}A$.`, 3, "rank = 6 − 3."),
  tf("The pivot columns of the RREF of A span Col A.", false, "They span the column space of the RREF, usually a different subspace."),
  mc(S`$A$ is $2\times4$ with rank 2. Then $\dim\operatorname{Null}A$ is:`, "2", ["0", "4", "6"], "4 − 2."),
  nullVecQ([[1, 2, 0], [0, 1, 1]], 0, F.line([2, -1, 1], { label: "(2, −1, 1)" })),
];

export const E = easy;
export const M = medium;
