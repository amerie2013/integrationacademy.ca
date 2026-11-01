// 9.2 Orthogonal Matrices — 20 easy + 20 medium questions
import { S, F, M, col, mc, num, tf, fill, orthMatQ, orthoSetQ, dotQ } from "./gen9.mjs";

const easy = [
  orthMatQ([[0.6, -0.8], [0.8, 0.6]], F.mat([["0.6", "−0.8"], ["0.8", "0.6"]], { label: "Q" })),
  orthMatQ([[1, 1], [-1, 1]]),
  orthMatQ([[0, 1], [1, 0]]),
  orthMatQ([[2, 0], [0, 0.5]]),
  orthoSetQ([[1, 2], [-2, 1]], F.v2([[[1, 2], "", "blue"], [[-2, 1], "", "red"]], { xmin: -3, xmax: 2, ymin: -1, ymax: 3 })),
  orthoSetQ([[1, 1, 0], [1, -1, 1], [0, 0, 1]]),
  fill("A square matrix with QᵀQ = I is called an ___ matrix.", ["orthogonal"], "Orthonormal columns."),
  mc("For an orthogonal matrix Q, Q⁻¹ =", "Qᵀ", ["Q", "−Q", "det Q · Q"], "QᵀQ = I."),
  num(S`$\det Q$ for an orthogonal $Q$ is $\pm1$. Give $\det$ of the reflection $${M([[1, 0], [0, -1]])}$.`, -1, "1·(−1)."),
  num(S`$U$ has orthonormal columns and $|\vec x|=5$. Find $|U\vec x|$.`, 5, "Isometry."),
  num(S`Normalise $(3,4)$. Give the second entry. (Decimal.)`, 0.8, "4/5.", undefined, 0.001),
  num(S`Normalise $(1,2,2)$. Give the first entry. (Decimal.)`, 0.3333, "1/3.", undefined, 0.001),
  tf("Every orthogonal set of nonzero vectors is linearly independent.", true, "Dot a relation with each vector."),
  tf("A matrix with orthogonal columns is orthogonal.", false, "The columns must also be unit vectors."),
  num(S`Solve $Q\vec x=(2,5)$ with $Q=${M([[0, 1], [-1, 0]])}$. Give $x_1$.`, -5, S`$\vec x=Q^T\vec b=${M([[0, -1], [1, 0]])}${col([2, 5])}=${col([-5, 2])}$.`),
  tf(S`$U^TU=I$ implies $UU^T=I$ for a $3\times2$ matrix $U$.`, false, "UUᵀ has rank 2."),
  num(S`$(U\vec x)\cdot(U\vec y)$ when $U^TU=I$, $\vec x\cdot\vec y=7$?`, 7, "Dot products are preserved."),
  dotQ([0.6, 0.8], [-0.8, 0.6]),
  mc("Which is NOT orthogonal?", "[1 2; 0 1]", ["[0 1; 1 0]", "[0.6 −0.8; 0.8 0.6]", "I"], "Its columns are not orthonormal."),
  num(S`The rotation $R_\theta$ has determinant`, 1, "cos² + sin²."),
];

const medium = [
  orthMatQ([[1 / 3, 2 / 3, 2 / 3], [2 / 3, 1 / 3, -2 / 3], [2 / 3, -2 / 3, 1 / 3]], F.mat([[1, 2, 2], [2, 1, -2], [2, -2, 1]], { label: "3Q" })),
  orthMatQ([[1 / Math.sqrt(2), 1 / Math.sqrt(2)], [1 / Math.sqrt(2), -1 / Math.sqrt(2)]]),
  orthoSetQ([[1, 1, 1], [1, -1, 0], [1, 1, -2]]),
  orthoSetQ([[1, 2, 2], [2, 1, -2], [2, -2, 1]]),
  num(S`Solve $\tfrac15${M([[3, -4], [4, 3]])}\vec x=(5,10)$. Give $x_1$.`, 11, S`$Q^T\vec b=\tfrac15${col(["15+40", "-20+30"])}=${col([11, 2])}$.`),
  num(S`Solve $\tfrac13${M([[2, -2, 1], [1, 2, 2], [2, 1, -2]])}\vec x=(3,3,3)$. Give $x_1$.`, 5, S`$Q^T\vec b=\tfrac13(6+3+6,\ -6+6+3,\ 3+6-6)=(5,1,1)$.`),
  num(S`$\det$ of $\tfrac13${M([[2, -2, 1], [1, 2, 2], [2, 1, -2]])}$?`, -1, "det(3Q) = −27."),
  num(S`For $U=\tfrac13${M([[1, 2], [2, 1], [2, -2]])}$, find the $(1,1)$ entry of $UU^T$. (Decimal.)`, 0.5556, "(1 + 4)/9.", undefined, 0.001),
  num(S`For the same $U$, find $|U\vec x|^2$ for $\vec x=(3,-3)$.`, 18, "|x|² = 9 + 9."),
  num(S`Complete $\tfrac13(1,2,2)$, $\tfrac13(2,1,-2)$ with $\tfrac13(a,b,c)$, $a=2$. Find $b$.`, -2, "Perpendicular to both: (2, −2, 1)."),
  tf("The product of two orthogonal matrices is orthogonal.", true, "(Q₁Q₂)ᵀQ₁Q₂ = I."),
  tf("The sum of two orthogonal matrices is orthogonal.", false, "I + I = 2I."),
  num(S`$\det(Q_1Q_2)$ for a rotation $Q_1$ and a reflection $Q_2$?`, -1, "1 · (−1)."),
  mc(S`A real eigenvalue of an orthogonal matrix must be`, S`$\pm1$`, [S`$0$`, S`any real number`, S`$2$`], "|Qx| = |x|."),
  num(S`For which $a$ is $\tfrac1{5}${M([[3, "a"], [4, 3]])}$ orthogonal (with $a\lt0$)?`, -4, "Columns (3,4)/5 and (a,3)/5 perpendicular: 3a + 12 = 0."),
  tf(S`$Q^T$ is orthogonal whenever $Q$ is.`, true, "QQᵀ = I."),
  num(S`$Q$ is $4\times4$ orthogonal. Find $\operatorname{tr}(Q^TQ)$.`, 4, "tr I₄."),
  num(S`The permutation matrix $${M([[0, 0, 1], [1, 0, 0], [0, 1, 0]])}$: find $\det$.`, 1, "A cyclic shift (two swaps).", F.mat([[0, 0, 1], [1, 0, 0], [0, 1, 0]], { label: "P" })),
  num(S`Angle (degrees) between $U\vec x$ and $U\vec y$ when $\vec x\perp\vec y$ and $U^TU=I$?`, 90, "Angles are preserved."),
  tf(S`$\tfrac12${M([[1, 1], [1, 1]])}$ is orthogonal.`, false, "It is a projection (singular)."),
];

export const E = easy;
export { medium as M };
