// 3.2 The Transpose and Symmetric Matrices — 20 hard questions
import { S, F, M, mc, num, tf, ms } from "./gen3.mjs";

export const TOPIC = "3.2 The Transpose and Symmetric Matrices";
export const Q = [
  tf(S`Every square matrix is the sum of a symmetric and a skew-symmetric matrix.`, true, "A = ½(A + Aᵀ) + ½(A − Aᵀ); the first part is symmetric, the second skew-symmetric."),
  tf(S`The decomposition of a square matrix into symmetric + skew-symmetric parts is unique.`, true, "If S + K = S' + K', then S − S' = K' − K is both symmetric and skew-symmetric, hence 0."),
  num(S`Find the $(2,3)$ entry of the symmetric part of $A=${M([[1, 4, 0], [2, 5, 7], [6, -1, 3]])}$.`, 3, "S = ½(A + Aᵀ); S₂₃ = ½(a₂₃ + a₃₂) = ½(7 + (−1)) = 3.", F.trans([[1, 4, 0], [2, 5, 7], [6, -1, 3]], 1, 2)),
  num(S`Find the $(1,3)$ entry of the skew-symmetric part of $A=${M([[1, 4, 0], [2, 5, 7], [6, -1, 3]])}$.`, -3, "K₁₃ = ½(a₁₃ − a₃₁) = ½(0 − 6) = −3."),
  num(S`What is the dimension of the space of $n\times n$ symmetric matrices for $n=6$?`, 21, "Choose the diagonal and the entries above it: n(n + 1)/2 = 6·7/2 = 21.", F.pat("upper", 6)),
  num(S`What is the dimension of the space of $n\times n$ skew-symmetric matrices for $n=6$?`, 15, "Only the entries strictly above the diagonal are free: n(n − 1)/2 = 15."),
  ms("Which statements hold for all square A?", [S`$A+A^T$ is symmetric`, S`$A-A^T$ is skew-symmetric`, S`$A^T-A$ is symmetric`, S`$(A^T)^T$ is symmetric`, S`$\tfrac12(A+A^T)$ has the same diagonal as $A$`], [0, 1, 4], "Aᵀ − A is skew-symmetric, and (Aᵀ)ᵀ = A need not be symmetric; ½(aᵢᵢ + aᵢᵢ) = aᵢᵢ."),
  tf(S`If $A$ is symmetric and $B$ is skew-symmetric (same size), then $A+B$ can never be symmetric unless $B=0$.`, true, "If A + B is symmetric, then B = (A + B) − A is symmetric and skew-symmetric, so B = 0."),
  num(S`Find $t$ so that $${M([[1, "t^2-1"], ["2t+2", 0]])}$ is symmetric and $t\ne-1$.`, 3, "t² − 1 = 2t + 2 → t² − 2t − 3 = 0 → (t − 3)(t + 1) = 0; t ≠ −1 leaves t = 3."),
  mc(S`$A$ is skew-symmetric and $3\times3$. Which could be $A$?`, S`$${M([[0, 2, -1], [-2, 0, 4], [1, -4, 0]])}$`, [S`$${M([[0, 2, -1], [2, 0, 4], [-1, 4, 0]])}$`, S`$${M([[1, 2, -1], [-2, 1, 4], [1, -4, 1]])}$`, S`$${M([[0, 2, -1], [-2, 0, 4], [1, 4, 0]])}$`], "Zero diagonal and aⱼᵢ = −aᵢⱼ for every pair; the last option fails at (3, 2)."),
  num(S`Solve $X+2X^T=${M([[3, 5], [4, 6]])}$ and give $X_{12}$.`, 1, "Entry (1, 2): x₁₂ + 2x₂₁ = 5; entry (2, 1): x₂₁ + 2x₁₂ = 4. Solving: x₁₂ = 1, x₂₁ = 2. (Diagonal: 3x₁₁ = 3, 3x₂₂ = 6.)"),
  num(S`Solve $X+2X^T=${M([[3, 5], [4, 6]])}$ and give $X_{22}$.`, 2, "On the diagonal x₂₂ + 2x₂₂ = 6, so x₂₂ = 2."),
  tf(S`If $A$ is symmetric, then $A^T$ is symmetric.`, true, "Aᵀ = A, which is symmetric."),
  tf(S`The set of $n\times n$ matrices with $A^T=2A$ contains a nonzero matrix.`, false, "Aᵀ = 2A gives A = (Aᵀ)ᵀ = 2Aᵀ = 4A, so 3A = 0 and A = 0."),
  num(S`$A$ is $3\times3$ with $a_{ij}=i^2+j^2$. Is $A$ symmetric? Give the number of distinct entries of $A$.`, 6, "aᵢⱼ = aⱼᵢ, so it is symmetric; values: 2, 5, 10, 8, 13, 18 — six distinct numbers.", F.mat([[2, 5, 10], [5, 8, 13], [10, 13, 18]], { label: "aᵢⱼ = i² + j²" })),
  num(S`$A$ is $4\times4$ with $a_{ij}=i-j$. Give the $(4,1)$ entry of $A+A^T$.`, 0, "aᵢⱼ = i − j is skew-symmetric, so A + Aᵀ = 0.", F.mat([[0, -1, -2, -3], [1, 0, -1, -2], [2, 1, 0, -1], [3, 2, 1, 0]], { label: "aᵢⱼ = i − j" })),
  mc(S`Which identity is FALSE in general?`, S`$(A-B)^T=B^T-A^T$`, [S`$(A-B)^T=A^T-B^T$`, S`$(kA)^T=kA^T$`, S`$(A^T)^T=A$`], "Transposing a difference keeps the order: (A − B)ᵀ = Aᵀ − Bᵀ."),
  tf(S`If $A$ is skew-symmetric, then so is $5A$.`, true, "(5A)ᵀ = 5Aᵀ = −5A."),
  num(S`The entries of a $3\times3$ symmetric matrix are chosen from $\{0,1\}$. How many such matrices are there?`, 64, "6 free entries (3 diagonal + 3 above), each 0 or 1: 2⁶ = 64."),
  tf(S`A matrix that is both upper triangular and symmetric must be diagonal.`, true, "Entries below the diagonal are 0, and symmetry copies them above: all off-diagonal entries are 0.", F.pat("diag", 4)),
];
