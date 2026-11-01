// 5.4 Dimension — 20 hard questions
import { S, F, mc, num, tf, ms, dimSpanQ, nullityQ } from "./gen5.mjs";

export const TOPIC = "5.4 Dimension";
export const Q = [
  num(S`For which $k$ is $\dim\operatorname{Span}\{(1,0,1),(1,1,0),(k,1,2)\}\lt3$?`, 3, "Columns reduce to a last row (0, 0, 3 − k): a pivot is missing exactly when k = 3."),
  tf("If U ⊆ W are subspaces and dim U = dim W, then U = W.", true, "A basis of U is a set of dim W independent vectors in W, hence spans W."),
  num(S`Find $\dim\{\vec x\in\mathbb R^4:\ \vec x\cdot(1,1,1,1)=0,\ \vec x\cdot(1,-1,1,-1)=0\}$.`, 2, "Two independent equations in 4 unknowns: 4 − 2."),
  mc("Two 2-dimensional subspaces of ℝ³ always intersect in a subspace of dimension at least:", "1", ["0", "2", "3"], "Two planes through 0 are either equal or meet in a line."),
  dimSpanQ([[1, 4, 7], [2, 5, 8], [3, 6, 9]], undefined, S`Find the dimension of the span of the columns of $\begin{bmatrix}1&2&3\\4&5&6\\7&8&9\end{bmatrix}$.`),
  tf("Some 2-dimensional subspace of ℝ³ contains 3 linearly independent vectors.", false, "At most 2 independent vectors fit in a 2-dimensional space."),
  dimSpanQ([[1, 1, 0, 0], [0, 1, 1, 0], [0, 0, 1, 1], [1, 0, 0, -1]]),
  num(S`For which positive $a$ is $\dim\operatorname{Span}\{(1,a),(a,1)\}=1$?`, 1, "Parallel when 1·1 − a·a = 0."),
  tf("Two different planes through the origin in ℝ³ (figure) meet in a line.", true, "Their intersection is a subspace of dimension 1 (it is less than 2 since the planes differ, and at least 1 since 2 + 2 > 3).", F.plane([1, 0, 0], [0, 1, 1], { lu: "", lv: "", line: [1, 1, 1] })),
  mc("The solution set of 2 independent homogeneous equations in 5 unknowns has dimension:", "3", ["2", "5", "7"], "n − rank = 5 − 2."),
  num(S`$A$ is $5\times9$ with rank 5. Find $\dim\operatorname{Null}A$.`, 4, "9 − 5."),
  tf("A subspace of dimension k ≥ 1 has exactly one basis.", false, "Any nonzero multiple of a basis vector gives another basis."),
  ms(S`Which values are possible for $\dim\operatorname{Null}A$ when $A$ is $3\times5$?`, ["1", "2", "3", "5"], [1, 2, 3], "rank A ≤ 3, so nullity ≥ 2; nullity 5 when A = 0."),
  tf("The span of 5 vectors in ℝ³ has dimension at most 3.", true, "Any subspace of ℝ³ has dimension at most 3."),
  dimSpanQ([[1, 2, 1], [2, 1, 1], [3, 3, 2]], F.v3([[[1, 2, 1], "(1, 2, 1)"], [[2, 1, 1], "(2, 1, 1)"], [[3, 3, 2], "(3, 3, 2)", "green"]], { plane: [[1, 2, 1], [2, 1, 1], 0.8] })),
  dimSpanQ([[1, 0, 1, 1], [1, 1, 0, 1], [0, 1, 1, 1]], undefined, S`Find $\dim\{(a+b,\ b+c,\ c+a,\ a+b+c): a,b,c\in\mathbb R\}$.`),
  tf("A basis of a 3-dimensional subspace of ℝ⁵ has 5 vectors.", false, "It has 3 — the dimension of the subspace, not of ℝ⁵."),
  mc("The solution set of x₁ + x₂ + x₃ = 0 and 2x₁ + 2x₂ + 2x₃ = 0 (figure) has dimension:", "2", ["1", "0", "3"], "The second equation repeats the first: rank 1, so 3 − 1.", F.plane([1, -1, 0], [0, 1, -1], { lu: "", lv: "" })),
  nullityQ([[1, 2, 3], [2, 4, 6]], undefined, S`What is the largest number of independent vectors in $\operatorname{Null}A$, $A=\begin{bmatrix}1&2&3\\2&4&6\end{bmatrix}$?`),
  tf("A line through the origin inside a plane through the origin (figure) has smaller dimension than the plane.", true, "1 < 2: a nested subspace has dimension at most that of the bigger one, equal only if they coincide.", F.plane([1, 0, 1], [0, 1, 0], { lu: "", lv: "", line: [1, 1, 1] })),
];
