// 9.2 Orthogonal Matrices — 20 hard questions
import { S, F, M, col, mc, num, tf, ms, orthMatQ, orthoSetQ } from "./gen9.mjs";

export const TOPIC = "9.2 Orthogonal Matrices";
export const Q = [
  orthMatQ([[1 / 2, 1 / 2, 1 / 2, 1 / 2], [1 / 2, -1 / 2, 1 / 2, -1 / 2], [1 / 2, 1 / 2, -1 / 2, -1 / 2], [1 / 2, -1 / 2, -1 / 2, 1 / 2]], F.mat([[1, 1, 1, 1], [1, -1, 1, -1], [1, 1, -1, -1], [1, -1, -1, 1]], { label: "2Q" })),
  orthoSetQ([[1, 1, 1, 1], [1, -1, 1, -1], [1, 1, -1, -1]]),
  orthoSetQ([[1, 2, 0, 1], [2, -1, 1, 0], [0, 1, 2, -2]]),
  num(S`Find $c\gt0$ so that $c(1,1,1,1)$ is a unit vector. (Decimal.)`, 0.5, "1/√4.", undefined, 0.001),
  num(S`Complete $\tfrac13(1,2,2)$, $\tfrac13(2,1,-2)$ to an orthogonal matrix with third column $\tfrac13(a,b,c)$, $c=1$. Find $a+b$.`, 0, "(2, −2, 1).", F.v3([[[1, 2, 2], "q₁", "blue"], [[2, 1, -2], "q₂", "red"], [[2, -2, 1], "q₃", "green"]])),
  num(S`$Q$ orthogonal, $Q\vec x=(3,4,0)$. Find $|\vec x|$.`, 5, "|x| = |Qx|."),
  num(S`$Q$ is orthogonal $3\times3$ with $\det Q=1$ and eigenvalue $-1$ of multiplicity 2. Find its remaining eigenvalue.`, 1, "Product = 1: (−1)(−1)λ = 1."),
  ms("Which are orthogonal matrices?", ["[0 1; −1 0]", "[1 0; 0 −1]", "[1 1; 0 1]", "(1/√2)[1 −1; 1 1]"], [0, 1, 3], "The shear has non-orthonormal columns."),
  tf("If QᵀQ = I for square Q, then the rows of Q are orthonormal.", true, "QQᵀ = I."),
  num(S`$U$ is $5\times2$ with orthonormal columns. Find $\operatorname{tr}(UU^T)$.`, 2, "tr(UUᵀ) = tr(UᵀU) = tr I₂."),
  num(S`$U$ is $5\times2$ with orthonormal columns. Find $\operatorname{rank}(UU^T)$.`, 2, "A projection onto a plane."),
  tf("Every 2 × 2 orthogonal matrix is a rotation or a reflection.", true, "First column (cos θ, sin θ); second ± its perpendicular."),
  num(S`$Q=${M([["a", "-0.6"], ["0.6", "a"]])}$ is a rotation with $a\gt0$. Find $a$. (Decimal.)`, 0.8, "a² + 0.36 = 1.", undefined, 0.001),
  num(S`For $Q=\tfrac17${M([[2, 3, 6], [3, -6, 2], [6, 2, -3]])}$, find the $(2,3)$ entry of $Q^TQ$.`, 0, "Columns 2, 3: (3·6 − 6·2 + 2·(−3))/49 = 0.", F.mat([[2, 3, 6], [3, -6, 2], [6, 2, -3]], { label: "7Q" })),
  num(S`Same $Q$: find the $(1,1)$ entry of $Q^{-1}$. (Decimal.)`, 0.2857, "Q⁻¹ = Qᵀ; entry 2/7.", undefined, 0.001),
  mc("A matrix Q with |Qx| = |x| for all x satisfies:", "QᵀQ = I", ["Q = I", "Q is symmetric", "det Q = 0"], "Polarisation recovers dot products from lengths."),
  tf("Orthogonal matrices preserve angles between vectors.", true, "Dot products and lengths are preserved."),
  num(S`$Q=I-2\vec u\vec u^T$ with unit $\vec u$. Find $\det Q$ in $\mathbb R^3$.`, -1, "Eigenvalues −1, 1, 1 (a reflection)."),
  num(S`For $\vec u=\tfrac13(1,2,2)$ and $Q=I-2\vec u\vec u^T$, find $q_{11}$. (Decimal.)`, 0.7778, "1 − 2/9.", F.v3([[[1, 2, 2], "u", "blue"]]), 0.001),
  orthMatQ([[0, 0, 1], [0, 1, 0], [1, 0, 0]]),
];
