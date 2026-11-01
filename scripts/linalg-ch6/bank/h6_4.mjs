// 6.4 The Invertible Matrix Theorem — 20 hard questions
import { S, F, M, mc, num, tf, ms, invertibleQ } from "./gen6.mjs";

export const TOPIC = "6.4 The Invertible Matrix Theorem";
export const Q = [
  invertibleQ([[1, 2, 3, 1], [2, 4, 7, 3], [1, 3, 4, 2], [0, 1, 1, 2]]),
  invertibleQ([[2, 1, 1, 0], [1, 2, 0, 1], [1, 0, 2, 1], [0, 1, 1, 2]], F.mat([[2, 1, 1, 0], [1, 2, 0, 1], [1, 0, 2, 1], [0, 1, 1, 2]], { label: "A" })),
  num(S`For which $t$ is $${M([[1, "t", 0], [0, 1, "t"], ["t", 0, 1]])}$ singular?`, -1, "R₃ − tR₁ → (0, −t², 1); R₃ + t²R₂ → (0, 0, 1 + t³): zero for t = −1.", F.mat([[1, "t", 0], [0, 1, "t"], ["t", 0, 1]], { label: "A" })),
  ms("For a square A, which are equivalent to 'A is invertible'?", ["Ax = 0 has only the trivial solution", "A has a zero row", "Aᵀ has independent columns", "Ax = b has at most one solution for every b", "every entry of A is nonzero"], [0, 2, 3], "At most one solution for every b ⇔ only the trivial solution of Ax = 0."),
  tf(S`If $A$ is square and $A\vec x=\vec b$ has exactly one solution for one particular $\vec b$, then $A$ is invertible.`, true, "Uniqueness for one b means Ax = 0 has only the trivial solution."),
  tf(S`If $A$ is square and $A\vec x=\vec b$ is consistent for one particular $\vec b$, then $A$ is invertible.`, false, "A = 0 with b = 0."),
  num(S`$A$ is $5\times5$ and its columns span a 3-dimensional subspace. How many free variables does $A^T\vec x=\vec 0$ have?`, 2, "rank Aᵀ = rank A = 3; 5 − 3 = 2."),
  mc(S`$A$ is $n\times n$ with $A^2+A=I$. Then $A^{-1}=$`, S`$A+I$`, [S`$A-I$`, S`$I-A$`, S`$-A$`], "A(A + I) = I."),
  num(S`$A$ is $n\times n$ with $A^2-2A+I=0$. Then $A^{-1}=aA+bI$; find $b$.`, 2, "A(2I − A) = I, so A⁻¹ = −A + 2I."),
  tf(S`If $A$ is invertible and $B$ is $n\times n$, then $\operatorname{rank}(AB)=\operatorname{rank}B$.`, true, "AB has the same null space as B (A kills only 0), so the same rank."),
  invertibleQ([[0, 1, 1], [1, 0, 1], [1, 1, 0]], F.mat([[0, 1, 1], [1, 0, 1], [1, 1, 0]], { label: "A" })),
  num(S`For which $k$ is $${M([[1, 1, 1], [1, 2, "k"], [1, 4, "k^2"]])}$ singular? (Give the larger value.)`, 2, "Rows 2 − 1 and 3 − 1 give (0, 1, k − 1) and (0, 3, k² − 1); then R₃ − 3R₂ leaves (0, 0, k² − 3k + 2) = (0, 0, (k − 1)(k − 2)): zero for k = 1 or 2."),
  tf("A square matrix with orthogonal nonzero columns is invertible.", true, "Nonzero orthogonal vectors are independent."),
  mc(S`$A$ is $3\times3$ and $\vec b$ is not a combination of the columns of $A$. Which is FALSE?`, "A is invertible", ["Ax = 0 has a nonzero solution", "the columns are dependent", "Aᵀ is singular"], "Failure of (g) means A is singular."),
  tf(S`If $A^TA$ is invertible ($A$ square), then $A$ is invertible.`, true, "Aᵀ·A invertible ⇒ A invertible (product rule)."),
  num(S`$A$ is $4\times4$ and $A\vec x=\vec 0$ has a 2-parameter family of solutions. How many pivots does $A$ have?`, 2, "4 − 2."),
  ms("A is 3 × 3 with columns a₁, a₂, a₃ and a₃ = a₁ − 2a₂. Which follow?", ["A(1, −2, −1) = 0", "A is singular", "Aᵀ is singular", "A has 3 pivots"], [0, 1, 2], "a₁ − 2a₂ − a₃ = 0 is A(1, −2, −1) = 0."),
  tf(S`If $A$ is invertible, then $A+A^{-1}$ is invertible.`, false, S`$A=${M([[0, -1], [1, 0]])}$ has $A^{-1}=-A$, so $A+A^{-1}=0$.`),
  num(S`For which negative $a$ is $${M([["a", 0, 1], [0, "a", 0], [1, 0, "a"]])}$ singular?`, -1, "Expand along row 2: a·(a·a − 1·1) = a(a² − 1), zero for a = 0 or ±1; the negative value is −1.", F.mat([["a", 0, 1], [0, "a", 0], [1, 0, "a"]], { label: "A" })),
  tf("If the rows of a square matrix are independent, so are its columns.", true, "Aᵀ invertible ⇔ A invertible."),
];
