// 9.4 Projection Matrices and the Normal Equations — 20 hard questions
import { S, F, M, col, mc, num, tf, ms, normalQ, projNQ } from "./gen9.mjs";

export const TOPIC = "9.4 Projection Matrices and the Normal Equations";
export const Q = [
  normalQ([[1, 0, 1], [1, 1, 0], [0, 1, 1], [1, 1, 1]], [2, 1, 3, 2], 0, F.mat([[1, 0, 1], [1, 1, 0], [0, 1, 1], [1, 1, 1]], { label: "A" })),
  normalQ([[1, 0, 1], [1, 1, 0], [0, 1, 1], [1, 1, 1]], [2, 1, 3, 2], 2),
  projNQ([[1, 0, 1], [1, 1, 0], [0, 1, 1], [1, 1, 1]], [2, 1, 3, 2], 3),
  projNQ([[1, 2], [1, -1], [2, 1]], [3, 1, 1], 0),
  normalQ([[1, 2], [2, 1], [1, 1]], [1, 0, 2], 1, F.mat([[1, 2], [2, 1], [1, 1]], { label: "A" })),
  num(S`Find the $(1,3)$ entry of $A(A^TA)^{-1}A^T$ for $A=${M([[1, 0], [0, 1], [1, 1]])}$. (Decimal.)`, 0.3333, S`$P=\tfrac13${M([[2, -1, 1], [-1, 2, 1], [1, 1, 2]])}$.`, undefined, 0.001),
  num(S`Find $\det$ of the projection onto a line in $\mathbb R^2$.`, 0, "Eigenvalue 0."),
  ms("Which matrices are orthogonal projections?", ["½[1 1; 1 1]", "[1 0; 0 0]", "[1 1; 0 0]", "I"], [0, 1, 3], "Need P² = P and Pᵀ = P."),
  num(S`$P$ is a projection with $\operatorname{tr}P=3$ in $\mathbb R^7$. Find $\dim\operatorname{Nul}P$.`, 4, "rank 3, nullity 4."),
  tf(S`$P=A(A^TA)^{-1}A^T$ is unchanged if $A$ is replaced by $AB$ for invertible $B$.`, true, "Col(AB) = Col A, and P depends only on the subspace."),
  num(S`Project $(1,0,0,0)$ onto $\operatorname{span}\{(1,1,1,1)\}$: first entry. (Decimal.)`, 0.25, "¼.", undefined, 0.001),
  num(S`Project $(2,2,2)$ onto the plane $2x_1-x_2+2x_3=0$: first entry. (3 decimals)`, 0.6667, "n·y = 4 − 2 + 4 = 6, |n|² = 9: y − ⅔(2,−1,2) = (⅔, 8⁄3, ⅔).", F.v3([[[2, -1, 2], "n", "green"], [[2, 2, 2], "y", "blue"]]), 0.001),
  mc("The eigenvalues of I − 2P (P a projection) are:", "1 and −1", ["0 and 1", "0 and 2", "only 1"], "1 − 2λ with λ ∈ {0, 1}: a reflection."),
  num(S`$P$ projects onto the line through $(3,4)$. Find the $(2,1)$ entry of $I-P$. (Decimal.)`, -0.48, "−12/25.", undefined, 0.001),
  tf("If Px = x then x ∈ Col P.", true, "x = Px."),
  num(S`$P^2=P$, $P^T=P$, $P\ne0$, $P\ne I$ in $\mathbb R^2$. Find $\operatorname{tr}P$.`, 1, "Rank 1: a line.", F.pl([1, 2], [3, 1])),
  projNQ([[1, 1], [1, 2], [1, 3], [1, 4]], [2, 3, 5, 6], 0),
  normalQ([[1, 1], [1, 2], [1, 3], [1, 4]], [2, 3, 5, 6], 1),
  num(S`$\vec y=(1,2,3)$, $P$ projects onto a plane with $P\vec y=(1,2,0)$. Find $|(I-P)\vec y|$.`, 3, "(0, 0, 3)."),
  tf("The normal equations always have at least one solution.", true, "Aᵀb ∈ Col Aᵀ = Col(AᵀA)."),
];
