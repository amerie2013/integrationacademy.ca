// 6.4 The Invertible Matrix Theorem — 20 easy + 20 medium questions
import { S, F, M, mc, num, tf, fill, invertibleQ } from "./gen6.mjs";

const easy = [
  tf("For a square matrix, 'invertible' and 'n pivots' are equivalent.", true, "Part of the Invertible Matrix Theorem."),
  tf("If Ax = 0 has only the trivial solution (A square), then Ax = b has a solution for every b.", true, "Both are conditions of the theorem."),
  tf("The Invertible Matrix Theorem applies to 3 × 4 matrices.", false, "It is for square matrices only."),
  mc("A 4 × 4 matrix has 3 pivots. Then:", "Ax = 0 has nonzero solutions", ["A is invertible", "the columns span ℝ⁴", "Aᵀ is invertible"], "Fewer than 4 pivots: every condition fails."),
  invertibleQ([[1, 2, 0], [0, 1, 3], [0, 0, 2]], F.pat("upper", 3)),
  invertibleQ([[1, 2, 3], [2, 4, 6], [0, 1, 1]]),
  fill("A square matrix whose columns are linearly independent is ___.", ["invertible", "nonsingular"], "Condition (e) ⇔ (a)."),
  num(S`$A$ is $5\times5$ and invertible. How many pivots does it have?`, 5, "n pivots."),
  tf(S`If $A$ is invertible, so is $A^T$.`, true, "(Aᵀ)⁻¹ = (A⁻¹)ᵀ."),
  tf("If the columns of a square A span ℝⁿ, then they are independent.", true, "Both mean n pivots."),
  mc("Which condition alone shows a 3 × 3 matrix is singular?", "Ax = 0 has a nonzero solution", ["A has a zero entry", "A is not symmetric", "A has a negative entry"], "Condition (d) fails."),
  num(S`$A$ is $3\times3$ and invertible. How many solutions does $A\vec x=(4,0,1)$ have?`, 1, "Exactly one."),
  tf("A square matrix with two equal columns is singular.", true, "The columns are dependent."),
  invertibleQ([[0, 1], [1, 0]], F.mat([[0, 1], [1, 0]], { label: "swap" })),
  tf(S`If $AD=I$ for square $A,D$, then $A$ is invertible.`, true, "Condition (l)."),
  mc("For square A, RREF(A) = I means:", "A is invertible", ["A is singular", "A = I", "A is symmetric"], "Condition (b)."),
  tf("A 3 × 3 matrix whose columns lie in one plane is invertible.", false, "Coplanar columns are dependent."),
  num(S`For which $k$ is $${M([[1, 2], [3, "k"]])}$ singular?`, 6, "Second pivot k − 6."),
  tf("Every invertible matrix is a product of elementary matrices.", true, "Condition (i)."),
  invertibleQ([[2, 1], [4, 2]]),
];

const medium = [
  invertibleQ([[1, 1, 0], [0, 1, 1], [1, 0, 1]]),
  invertibleQ([[1, -1, 0], [0, 1, -1], [-1, 0, 1]], F.mat([[1, -1, 0], [0, 1, -1], [-1, 0, 1]], { label: "rows add to 0" })),
  invertibleQ([[2, 1, 3], [1, 0, 1], [3, 1, 4]]),
  num(S`For which $c$ is $${M([[1, 0, 1], [0, 1, "c"], [1, 2, 3]])}$ singular?`, 1, "R₃ − R₁ → (0, 2, 2); R₃ − 2R₂ → (0, 0, 2 − 2c)."),
  tf(S`If $AB$ is invertible ($A,B$ square), then $B$ is invertible.`, true, "((AB)⁻¹A)B = I."),
  tf(S`If $A^2$ is invertible, then $A$ is invertible.`, true, "A(A·(A²)⁻¹) = I."),
  tf(S`If $A^3=0$ then $A$ is invertible.`, false, "A would equal A⁻²A³ = 0."),
  mc("A is 4 × 4 and Aᵀx = 0 has a nonzero solution. Which is true?", "Ax = b is inconsistent for some b", ["A is invertible", "the columns of A are independent", "A has 4 pivots"], "Aᵀ singular ⇔ A singular."),
  num(S`The columns of a $6\times6$ matrix span a 5-dimensional subspace. How many free variables does $A\vec x=\vec 0$ have?`, 1, "Rank 5, nullity 1."),
  tf("If A is invertible and B is singular (both n × n), AB is singular.", true, "If AB were invertible, so would B be."),
  invertibleQ([[1, 2, 1, 0], [0, 1, 1, 1], [1, 3, 2, 1], [0, 0, 1, 1]]),
  num(S`$A$ is $3\times3$ and $A(1,2,-1)=\vec 0$. How many pivots can $A$ have at most?`, 2, "A nonzero null vector forces fewer than 3 pivots."),
  mc("Which statement does NOT follow from 'A is 3 × 3 and singular'?", "A = 0", ["det-free: A has at most 2 pivots", "Ax = 0 has infinitely many solutions", "the rows of A are dependent"], "Many nonzero matrices are singular."),
  tf("If a square A has a left inverse C, then C is also a right inverse.", true, "CA = I ⇒ A invertible ⇒ C = A⁻¹."),
  num(S`For which $a$ is $${M([["a", 1], [4, "a"]])}$ singular, $a\gt0$?`, 2, "a² − 4 = 0."),
  invertibleQ([[3, 0, 0], [5, 2, 0], [1, 4, 7]], F.pat("lower", 3)),
  tf("Independent columns of a 3 × 2 matrix span ℝ³.", false, "Not square: 2 vectors cannot span ℝ³."),
  mc(S`$A$ is $n\times n$ and the system $A\vec x=\vec e_1$ has no solution. Then:`, "A is singular", ["A is invertible", "A = 0", "e₁ = 0"], "Condition (g) fails."),
  tf("If A and B are n × n with AB = 0 and A ≠ 0, then B is singular.", true, "If B were invertible, A = (AB)B⁻¹ = 0."),
  num(S`$A$ is $4\times4$ with $\operatorname{rank}A=4$. How many solutions does $A^T\vec x=\vec 0$ have?`, 1, "Aᵀ is invertible."),
];

export const E = easy;
export { medium as M };
