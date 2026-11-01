// 5.4 Dimension — 20 easy + 20 medium questions
import { S, F, mc, num, tf, fill, dimSpanQ, nullityQ } from "./gen5.mjs";

const easy = [
  num(S`What is $\dim\mathbb R^3$?`, 3, "The standard basis has 3 vectors."),
  num(S`What is the dimension of a line through the origin in $\mathbb R^5$?`, 1, "A basis is one nonzero direction vector."),
  dimSpanQ([[1, 2], [2, 4]]),
  dimSpanQ([[1, 0, 0], [0, 1, 0]]),
  tf(S`$\dim\{\vec 0\}=0$.`, true, "The zero subspace has the empty basis."),
  mc("Any 4 vectors in ℝ³ are:", "linearly dependent", ["linearly independent", "a basis of ℝ³", "a spanning set of ℝ³"], "More vectors than dim ℝ³ = 3."),
  tf("Two vectors can span ℝ³.", false, "Fewer than dim ℝ³ = 3 vectors cannot span it."),
  num(S`What is the dimension of the plane $x_1+x_2+x_3=0$ (figure)?`, 2, "One equation in ℝ³: 3 − 1 = 2.", F.plane([1, -1, 0], [0, 1, -1], { lu: "", lv: "" })),
  nullityQ([[1, 1, 1, 1]], undefined, S`What is the dimension of the solution space of $x_1+x_2+x_3+x_4=0$?`),
  fill("The number of vectors in any basis of a subspace S is called the ___ of S.", ["dimension"], "dim S."),
  tf("Every basis of ℝ⁴ has exactly 4 vectors.", true, "All bases of a subspace have the same size, and dim ℝ⁴ = 4."),
  dimSpanQ([[1, 1], [1, -1]]),
  mc("A 1-dimensional subspace of ℝ³ is:", "a line through the origin", ["a plane through the origin", "a single point other than 0", "any line"], "It is spanned by one nonzero vector."),
  tf("Three independent vectors in ℝ³ form a basis of ℝ³.", true, "k independent vectors in a k-dimensional space are a basis."),
  dimSpanQ([[1, 2, 3]], undefined, S`Find $\dim\operatorname{Span}\{(1,2,3)\}$.`),
  tf("A plane through the origin in ℝ⁴ has dimension 2.", true, "It is spanned by two independent vectors."),
  num(S`A homogeneous system has 6 unknowns and its coefficient matrix has rank 4. Find the dimension of its solution space.`, 2, "n − rank = 6 − 4."),
  dimSpanQ([[1, 0, 1], [0, 1, 1], [1, 1, 2]], F.v3([[[1, 0, 1], "(1, 0, 1)"], [[0, 1, 1], "(0, 1, 1)"], [[1, 1, 2], "(1, 1, 2)", "green"]], { plane: [[1, 0, 1], [0, 1, 1], 1.1] })),
  mc("The possible dimensions of a subspace of ℝ² are:", "0, 1 and 2", ["1 and 2 only", "only 2", "0, 1, 2 and 3"], "{0}, lines through 0, and ℝ²."),
  tf("A hyperplane a·x = 0 (a ≠ 0) in ℝ⁶ has dimension 5.", true, "One nonzero equation: 6 − 1."),
];

const medium = [
  dimSpanQ([[1, 2, 1], [2, 4, 2], [1, 0, 1], [0, 1, 0]]),
  dimSpanQ([[1, 0, 2, 1], [0, 1, 1, 1], [1, 1, 3, 2]]),
  nullityQ([[1, 2, 0, 1], [2, 4, 1, 3]], undefined, S`Find the dimension of the solution space of $A\vec x=\vec 0$, $A=\begin{bmatrix}1&2&0&1\\2&4&1&3\end{bmatrix}$.`),
  num(S`Find $\dim\{(a,\ b,\ a+b,\ 2a-b): a,b\in\mathbb R\}$.`, 2, "a(1, 0, 1, 2) + b(0, 1, 1, −1): two independent vectors."),
  num(S`Find $\dim\{\vec x\in\mathbb R^5: x_1=x_5,\ x_2=x_4\}$.`, 3, "Two independent equations in 5 unknowns: 5 − 2."),
  tf("If dim S = 3, any 3 vectors that span S are linearly independent.", true, "Counting theorem: k vectors in a k-dimensional space span iff independent."),
  mc(S`$S\subseteq T$ are subspaces with $\dim S=\dim T=2$. Then:`, S`$S=T$`, [S`$S$ is a line in $T$`, S`$T$ has dimension 4`, "nothing can be said"], "A basis of S is 2 independent vectors in T, hence a basis of T."),
  dimSpanQ([[1, 1, 1], [1, 2, 3], [2, 3, 4]], F.v3([[[1, 1, 1], "(1, 1, 1)"], [[1, 2, 3], "(1, 2, 3)"], [[2, 3, 4], "(2, 3, 4)", "green"]], { plane: [[1, 1, 1], [1, 2, 3], 0.8] })),
  num(S`For which $k$ is $\dim\operatorname{Span}\{(1,2),(k,6)\}=1$?`, 3, "(k, 6) = 3(1, 2) when k = 3."),
  tf("Any 3 vectors in a 2-dimensional subspace are dependent.", true, "More vectors than the dimension."),
  nullityQ([[1, -1, 2], [2, -2, 4], [-1, 1, -2]]),
  mc("Two different planes through the origin in ℝ³ intersect in a subspace of dimension:", "1", ["0", "2", "3"], "They meet in a line through 0."),
  tf("The solution space of 3 homogeneous equations in 5 unknowns has dimension at least 2.", true, "rank ≤ 3, so n − rank ≥ 2."),
  dimSpanQ([[1, 0, 0], [1, 1, 0], [1, 1, 1]], undefined, S`Find $\dim\operatorname{Span}\{\vec e_1,\ \vec e_1+\vec e_2,\ \vec e_1+\vec e_2+\vec e_3\}$ in $\mathbb R^3$.`),
  dimSpanQ([[2, -1, 3], [-4, 2, -6]], F.line([2, -1, 3], { label: "(2, −1, 3)", more: [[[-4, 2, -6], "(−4, 2, −6)", "red"]], len: 6 })),
  tf("If 4 vectors span a subspace S, then dim S ≤ 4.", true, "A spanning set contains a basis."),
  num(S`What is the largest possible dimension of a subspace of $\mathbb R^4$ other than $\mathbb R^4$ itself?`, 3, "A proper subspace of a 4-dimensional space has dimension at most 3."),
  mc(S`$\dim S=2$ and $\vec u,\vec v\in S$ are independent. Then:`, S`$\{\vec u,\vec v\}$ is a basis of $S$`, [S`$\{\vec u,\vec v\}$ may not span $S$`, S`$S$ contains a third independent vector`, S`$\dim S$ could be 3`], "2 independent vectors in a 2-dimensional space."),
  num(S`A $3\times3$ matrix has rank 3. What is the dimension of its null space?`, 0, "3 − 3: only the zero vector."),
  tf("A line through the origin cannot contain a plane through the origin (figure).", true, "A subspace of dimension 2 cannot fit inside one of dimension 1.", F.plane([1, 0, 0], [0, 1, 0], { lu: "", lv: "", line: [1, 1, 1] })),
];

export const E = easy;
export const M = medium;
