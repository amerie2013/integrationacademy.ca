// 9.4 Projection Matrices and the Normal Equations — 20 easy + 20 medium questions
import { S, F, M, col, mc, num, tf, fill, normalQ, projNQ } from "./gen9.mjs";

const easy = [
  num(S`Find the $(1,2)$ entry of $A^TA$ for $A=${M([[1, 2], [0, 1], [1, 0]])}$.`, 2, "Column 1 · column 2 = 2 + 0 + 0."),
  num(S`Find the $(2,2)$ entry of $A^TA$ for $A=${M([[1, 2], [0, 1], [1, 0]])}$.`, 5, "4 + 1 + 0."),
  num(S`Find the first entry of $A^T\vec y$ for $A=${M([[1, 0], [1, 1], [0, 1]])}$, $\vec y=(2,3,4)$.`, 5, "2 + 3 + 0."),
  fill("AᵀAx̂ = Aᵀy are called the ___ equations.", ["normal"], "The error is normal (perpendicular) to Col A."),
  mc("The projection matrix onto Col A is:", "A(AᵀA)⁻¹Aᵀ", ["(AᵀA)⁻¹", "AAᵀ always", "AᵀA"], "From x̂ = (AᵀA)⁻¹Aᵀy."),
  tf("Every projection matrix satisfies P² = P.", true, "Projecting twice changes nothing."),
  tf("Every projection matrix (orthogonal projection) is symmetric.", true, "Pᵀ = P."),
  num(S`Find the $(1,1)$ entry of the projection onto the line through $(1,2)$. (Decimal.)`, 0.2, "1/5.", F.pl([1, 2], [4, 1]), 0.001),
  num(S`Find the $(1,2)$ entry of the projection onto the line through $(1,1)$. (Decimal.)`, 0.5, "½.", undefined, 0.001),
  num(S`$P$ projects $\mathbb R^3$ onto a line. Find $\operatorname{tr}P$.`, 1, "Eigenvalues 1, 0, 0."),
  num(S`$P$ projects $\mathbb R^3$ onto a plane. Find $\operatorname{rank}(I-P)$.`, 1, "The normal line."),
  tf("AᵀA is invertible when A has independent columns.", true, "AᵀAx = 0 ⇒ Ax = 0 ⇒ x = 0."),
  normalQ([[2, 0], [0, 3], [0, 0]], [4, 6, 1], 1),
  normalQ([[1, 0], [0, 1], [0, 0]], [3, 4, 5], 0),
  num(S`Normal equations $${M([[2, 0], [0, 3]])}\hat x=(4,6)$. Find $\hat x_2$.`, 2, "6/3."),
  mc("x̂ from the normal equations gives:", "the coordinates of ŷ in the columns of A", ["ŷ itself", "the error", "the projection matrix"], "ŷ = Ax̂."),
  num(S`For any projection matrix, $P^3=P^k$ with $k=$?`, 1, "P² = P."),
  tf("I − P is also a projection matrix.", true, "(I − P)² = I − P."),
  num(S`Eigenvalues of a projection matrix are 0 and`, 1, "λ² = λ."),
  projNQ([[1], [1]], [3, 1], 0, F.pl([1, 1], [3, 1])),
];

const medium = [
  normalQ([[1, 1], [1, 0], [0, 1]], [2, 3, 4], 0, F.pp([1, 1, 0], [1, 0, 1], [2, 3, 4], [11 / 3, 4 / 3, 7 / 3])),
  normalQ([[1, 0], [0, 1], [1, 1]], [1, 2, 6], 1),
  projNQ([[1, 0], [0, 1], [1, 1]], [1, 2, 6], 2),
  projNQ([[1, 1], [1, 0], [0, 1]], [2, 3, 4], 1),
  normalQ([[1, 1], [1, 0], [1, 1], [1, 2]], [2, 0, 1, 3], 1),
  projNQ([[1, 0], [1, 1], [1, 1], [1, 2]], [1, 0, 2, 3], 3),
  num(S`Find the $(2,3)$ entry of the projection onto the line through $(2,1,2)$. (Decimal.)`, 0.2222, "2/9.", F.v3([[[2, 1, 2], "a", "blue"]]), 0.001),
  num(S`Project $(3,0,3)$ onto the plane $x_1-x_2+x_3=0$. Give the second entry.`, 2, "Remove 2(1,−1,1)."),
  num(S`Project $(1,2,6)$ onto the plane $x_1+x_2+x_3=0$. Give the third entry.`, 3, "Remove 3(1,1,1)."),
  num(S`Find the $(1,1)$ entry of the projection onto the plane $x_1+x_2+x_3=0$. (Decimal.)`, 0.6667, "1 − 1/3.", undefined, 0.001),
  tf(S`$${M([[1, 1], [0, 0]])}$ is an orthogonal projection matrix.`, false, "P² = P but Pᵀ ≠ P."),
  tf(S`$\tfrac12${M([[1, 1], [1, 1]])}$ is an orthogonal projection matrix.`, true, "Symmetric and idempotent."),
  num(S`$P$ projects $\mathbb R^5$ onto a 2-dimensional subspace. Find $\operatorname{tr}(I-P)$.`, 3, "5 − 2."),
  mc("The error y − Ax̂ lies in:", "Nul Aᵀ", ["Col A", "Nul A", "Row A"], "Aᵀ(y − Ax̂) = 0."),
  num(S`$(A^TA)^{-1}$ for $A^TA=${M([[2, 1], [1, 2]])}$: find the $(1,1)$ entry. (Decimal.)`, 0.6667, "⅓[2 −1; −1 2].", undefined, 0.001),
  num(S`Projection of $(1,1,1)$ onto $\operatorname{Col}${M([[1], [2], [2]])}$: first entry. (Decimal.)`, 0.5556, "5/9.", undefined, 0.001),
  num(S`For the plane $\operatorname{Col}${M([[1, 1], [1, 0], [0, 1]])}$, $P=\tfrac13${M([[2, 1, 1], [1, 2, -1], [1, -1, 2]])}$. Find $\operatorname{tr}P$.`, 2, "(2 + 2 + 2)/3.", F.mat([[2, 1, 1], [1, 2, -1], [1, -1, 2]], { label: "3P" })),
  tf("If A is square and invertible, P = A(AᵀA)⁻¹Aᵀ = I.", true, "Col A = ℝⁿ."),
  num(S`Project $(4,1)$ onto the line through $(1,2)$: first entry. (Decimal.)`, 1.2, "6/5.", undefined, 0.001),
  normalQ([[1, 1], [1, 2], [1, 3]], [1, 2, 2], 0),
];

export const E = easy;
export { medium as M };
