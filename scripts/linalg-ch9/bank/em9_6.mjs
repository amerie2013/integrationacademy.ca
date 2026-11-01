// 9.6 QR Factorisation — 20 easy + 20 medium questions
import { S, F, M, col, mc, num, tf, fill, qrQ } from "./gen9.mjs";

const easy = [
  qrQ([[3, 1], [4, 2]], 0, 0, F.gs([3, 4], [1, 2])),
  qrQ([[6, 1], [8, 0]], 0, 0, F.gs([6, 8], [1, 0])),
  qrQ([[4, 1], [3, 2]], 0, 1),
  qrQ([[4, 1], [3, 2]], 1, 1),
  qrQ([[1, 0], [0, 2]], 1, 1),
  fill("In A = QR, the matrix R is upper ___.", ["triangular"], "Column k uses only q₁, …, qₖ."),
  mc("R in A = QR equals:", "QᵀA", ["AQᵀ", "QA", "AᵀQ"], "Multiply A = QR by Qᵀ."),
  tf("Q in A = QR has orthonormal columns.", true, "Normalised Gram–Schmidt vectors."),
  tf("The diagonal entries of R are positive (independent columns).", true, "rₖₖ = |wₖ| > 0."),
  num(S`$A$ is $5\times3$ with independent columns. How many rows does $R$ have?`, 3, "R is n × n."),
  num(S`$r_{11}$ for $A=${M([[5, 0], [12, 1]])}$?`, 13, "|(5,12)|."),
  num(S`$R=${M([[2, 1], [0, 4]])}$, $Q^T\vec b=(5,8)$. Solve $R\vec x=Q^T\vec b$: $x_2=$?`, 2, "8/4."),
  num(S`Same: $x_1=$? (Decimal.)`, 1.5, "2x₁ + 2 = 5.", undefined, 0.001),
  num(S`$A=QR$ with $R=${M([[3, 1], [0, 2]])}$. Find $\det(A^TA)$.`, 36, "(det R)² = 36."),
  tf("For square A = QR, |det A| = r₁₁ r₂₂ ⋯ rₙₙ.", true, "|det Q| = 1."),
  qrQ([[1, 1], [1, -1]], 0, 1),
  mc("QR exists (with invertible R) when the columns of A are:", "independent", ["orthogonal", "equal", "dependent"], "Otherwise some rₖₖ = 0."),
  tf("AᵀA = RᵀR.", true, "RᵀQᵀQR."),
  num(S`$r_{12}=\vec q_1^T\vec a_2$ for $\vec q_1=\tfrac13(1,2,2)$, $\vec a_2=(0,3,3)$.`, 4, "(0 + 6 + 6)/3."),
  qrQ([[2, 0], [0, 3]], 0, 1),
];

const medium = [
  qrQ([[1, 3], [2, 3], [2, 0]], 0, 1, F.mat([[1, 3], [2, 3], [2, 0]], { label: "A" })),
  qrQ([[1, 3], [2, 3], [2, 0]], 1, 1),
  qrQ([[2, 4], [1, -1], [2, 1]], 0, 1),
  qrQ([[1, 1], [1, 2], [1, 0], [1, 1]], 0, 1),
  qrQ([[1, 1], [1, 2], [1, 0], [1, 1]], 1, 1),
  qrQ([[1, 4], [2, 5], [2, 2]], 0, 1),
  qrQ([[1, 0], [1, 2], [1, 0], [1, 2]], 1, 1),
  qrQ([[3, 0], [4, 5]], 0, 1),
  qrQ([[1, 1, 0], [1, 0, 1], [0, 1, 1]], 2, 2),
  qrQ([[1, 1, 0], [1, 0, 1], [0, 1, 1]], 1, 2),
  num(S`Solve $${M([[4, 1], [3, 2]])}\vec x=(5,5)$ via QR ($Q=\tfrac15${M([[4, -3], [3, 4]])}$, $R=${M([[5, 2], [0, 1]])}$): $x_1=$?`, 1, "Qᵀb = (7, 1); x₂ = 1, 5x₁ + 2 = 7.", F.mat([[5, 2], [0, 1]], { label: "R" })),
  num(S`The $(2,1)$ entry of $R$ is always:`, 0, "Upper triangular."),
  tf(S`For a tall $Q$, $QQ^T=I$.`, false, "Only QᵀQ = I."),
  num(S`$A=QR$ with $Q$ $4\times2$ and $R=${M([[2, 2], [0, 2]])}$. Find $\det(A^TA)$.`, 16, "(2·2)²."),
  mc(S`If $A$ already has orthonormal columns, then $R=$`, S`$I$`, [S`$A$`, S`$A^TA$`, S`$0$`], "Q = A."),
  num(S`$A$ has orthogonal (not unit) columns of lengths 2 and 3. Find $r_{12}$.`, 0, "R = diag(2, 3)."),
  num(S`Same: find $r_{22}$.`, 3, "Length of column 2."),
  tf("QR is used to solve least-squares problems stably.", true, "Rx̂ = Qᵀb."),
  num(S`$\det A$ for square $A=QR$ with $\det Q=-1$, $R=${M([[2, 5], [0, 3]])}$.`, -6, "(−1)(6)."),
  num(S`For $A=${M([[3, 1], [4, 2]])}$, $R=${M([[5, "\\tfrac{11}5"], [0, "\\tfrac25"]])}$. Find $|\det A|$.`, 2, "5 · 2/5."),
];

export const E = easy;
export { medium as M };
