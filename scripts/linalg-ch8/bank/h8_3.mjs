// 8.3 Eigenspaces and Multiplicity — 20 hard questions
import { S, F, M, mc, num, tf, ms, dimEQ, eigVecQ } from "./gen8.mjs";

export const TOPIC = "8.3 Eigenspaces and Multiplicity";
export const Q = [
  dimEQ([[2, 1, 1], [1, 2, 1], [1, 1, 2]], 1, F.mat([[1, 1, 1], [1, 1, 1], [1, 1, 1]], { label: "A − I" })),
  dimEQ([[3, -1, -1], [-1, 3, -1], [-1, -1, 3]], 4),
  dimEQ([[2, 1, 0, 0], [0, 2, 0, 0], [0, 0, 2, 0], [0, 0, 0, 5]], 2, F.mat([[0, 1, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 3]], { label: "A − 2I" })),
  dimEQ([[1, 1, 1], [1, 1, 1], [1, 1, 1]], 0),
  eigVecQ([[2, 1, 1], [1, 2, 1], [1, 1, 2]], 4, 1, 0),
  eigVecQ([[0, 1, 0], [0, 0, 1], [6, -11, 6]], 1, 2, 0, F.mat([[0, 1, 0], [0, 0, 1], [6, -11, 6]], { label: "A" })),
  eigVecQ([[1, 1, 0], [0, 1, 0], [0, 0, 2]], 1, 1, 0),
  num(S`For which $a$ does $${M([[1, 0, 0], ["a", 1, 0], [0, 0, 2]])}$ have an eigenbasis?`, 0, "dim E₁ = 2 needs a = 0."),
  num(S`For how many real values of $b$ does $${M([[2, 0, "b"], [0, 2, 0], [0, 0, 3]])}$ fail to have an eigenbasis?`, 0, S`$E_2$: $A-2I=${M([[0, 0, "b"], [0, 0, 0], [0, 0, 1]])}$ has rank 1 for every $b$, so $\dim E_2=2$ always.`),
  ms("Which statements are true for every n × n matrix?", ["Σ dim E_λ ≤ n", "dim E_λ ≥ 1 for each eigenvalue", "dim E_λ = algebraic multiplicity", "eigenspaces of different eigenvalues meet only in 0"], [0, 1, 3], "Equality can fail (defective matrices)."),
  tf("If A has n distinct eigenvalues, every eigenspace is one-dimensional.", true, "n eigenvalues, each geometric ≥ 1, total ≤ n."),
  num(S`$A$ is $3\times3$ with $p(\lambda)=(2-\lambda)^2(3-\lambda)$ and $A-2I$ of rank 1. How many independent eigenvectors does $A$ have?`, 3, "dim E₂ = 2, dim E₃ = 1."),
  num(S`Find $\dim E_0$ for $${M([[1, 2, 3], [2, 4, 6], [3, 6, 9]])}$.`, 2, "Rank 1.", F.mat([[1, 2, 3], [2, 4, 6], [3, 6, 9]], { label: "rank 1" })),
  num(S`For the same matrix, find its nonzero eigenvalue.`, 14, "Trace 1 + 4 + 9 and two zero eigenvalues."),
  tf(S`$${M([[1, 1], [0, 1]])}$ and $I$ have the same characteristic polynomial but different eigenspaces.`, true, "(1 − λ)² for both; dim E₁ = 1 vs 2."),
  mc("A 2 × 2 real matrix with a repeated eigenvalue λ is either λI or:", "defective", ["symmetric", "invertible", "orthogonal"], "Otherwise dim E_λ = 1."),
  num(S`$A=${M([[3, 0, 0], [0, 3, 0], [0, 0, 3]])}+N$ with $N$ having a single nonzero entry above the diagonal. Find $\dim E_3$.`, 2, "A − 3I = N has rank 1."),
  dimEQ([[5, 0, 0], [0, 5, 0], [1, 1, 5]], 5),
  tf("The union of bases of all eigenspaces is always a basis of ℝⁿ.", false, "Only if the dimensions add to n.", F.eig([[3, 1], [0, 3]], [[[1, 0], 3]])),
  num(S`$A$ has eigenvalue 4 with $E_4=\operatorname{span}\{(1,1,0),(0,1,1)\}$. Find $\dim\operatorname{Nul}(A-4I)$.`, 2, "That is E₄."),
];
