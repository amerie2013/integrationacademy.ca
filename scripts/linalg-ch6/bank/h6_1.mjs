// 6.1 The Inverse of a Matrix — 20 hard questions
import { S, F, M, mc, num, tf, ms, invEntryQ, invSolveQ } from "./gen6.mjs";

export const TOPIC = "6.1 The Inverse of a Matrix";
export const Q = [
  invEntryQ([[7, 4], [5, 3]], 1, 0),
  invEntryQ([[2, 5], [3, 8]], 0, 0, F.mat([[2, 5], [3, 8]], { label: "A" })),
  invSolveQ([[4, -1], [3, 1]], [2, 5], 0),
  num(S`For which $t$ is $${M([["t", "t+2"], [1, "t"]])}$ singular? (Give the positive value.)`, 2, "t² − (t + 2) = (t − 2)(t + 1).", F.mat([["t", "t+2"], [1, "t"]], { label: "A" })),
  num(S`Solve $XA=B$ with $A=${M([[1, 2], [1, 3]])}$, $B=${M([[1, 1], [0, 2]])}$; give $X_{11}$.`, 2, "X = BA⁻¹; A⁻¹ = [[3, −2], [−1, 1]]; row 1 of B times A⁻¹: (3 − 1, −2 + 1) = (2, −1)."),
  num(S`$A^{-1}=${M([[3, 1], [2, 1]])}$. Solve $A\vec x=(1,2)$; give $x_2$.`, 4, "x = A⁻¹b = (3 + 2, 2 + 2)."),
  tf(S`If $A$ is invertible and $AB=AC$, then $B=C$.`, true, "Multiply by A⁻¹ on the left."),
  tf(S`If $AB=0$ and $A$ is invertible, then $B=0$.`, true, "B = A⁻¹(AB) = 0."),
  ms("Which are always invertible when A and B are invertible n × n?", [S`$AB$`, S`$A+B$`, S`$A^T$`, S`$3A$`, S`$A-B$`], [0, 2, 3], "Products, transposes and nonzero multiples; sums can be singular."),
  num(S`$A^2-3A+2I=0$. Then $A^{-1}=aA+bI$. Find $a$.`, -0.5, "A(3I − A) = 2I, so A⁻¹ = ½(3I − A) = −½A + (3/2)I.", undefined, 0.001),
  num(S`$A^2-3A+2I=0$. Then $A^{-1}=aA+bI$. Find $b$.`, 1.5, "A⁻¹ = ½(3I − A).", undefined, 0.001),
  mc(S`$A$ is invertible and $A^3=A$. Then $A^2=$`, S`$I$`, [S`$A$`, S`$0$`, S`$-I$`], "Multiply A³ = A by A⁻¹."),
  invEntryQ([[3, 7], [2, 5]], 1, 1),
  num(S`For which $c$ is $${M([[1, "c"], ["c", 9]])}$ singular, $c\lt0$?`, -3, "9 − c² = 0."),
  tf(S`$(A+B)^{-1}=A^{-1}+B^{-1}$ for all invertible $A,B$ with $A+B$ invertible.`, false, "A = B = I: (2I)⁻¹ = ½I but I + I = 2I."),
  num(S`$A=${M([[1, 1], [1, 2]])}$. Find the $(1,1)$ entry of $(A^2)^{-1}$.`, 5, "A⁻¹ = [[2, −1], [−1, 1]]; (A⁻¹)² = [[5, −3], [−3, 2]]."),
  invSolveQ([[5, 2], [7, 3]], [1, 1], 1, F.row([[[[5, 2], [7, 3]], { label: "A" }], [[["x₁"], ["x₂"]], {}], "=", [[[1], [1]], {}]])),
  tf(S`A diagonal matrix with all diagonal entries nonzero is invertible.`, true, "Its inverse inverts each diagonal entry."),
  num(S`$A$ is $2\times2$ with $A${"\\begin{bmatrix}1\\\\0\\end{bmatrix}"}=${"\\begin{bmatrix}2\\\\1\\end{bmatrix}"}$ and $A${"\\begin{bmatrix}0\\\\1\\end{bmatrix}"}=${"\\begin{bmatrix}3\\\\2\\end{bmatrix}"}$. Find the $(1,2)$ entry of $A^{-1}$.`, -3, "A = [[2, 3], [1, 2]], ad − bc = 1: A⁻¹ = [[2, −3], [−1, 2]].", F.v2([[[2, 1], "Ae₁", "blue"], [[3, 2], "Ae₂", "red"]], { xmin: -1, xmax: 4, ymin: -1, ymax: 3 })),
  mc(S`Which equation shows $A=${M([[1, 2], [3, 4]])}$ is invertible?`, S`$ad-bc=-2\ne0$`, [S`$ad-bc=10$`, S`all entries are nonzero`, S`$A$ is not symmetric`], "1·4 − 2·3 = −2."),
];
