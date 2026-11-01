// 9.6 QR Factorisation — 20 hard questions
import { S, F, M, col, mc, num, tf, ms, qrQ } from "./gen9.mjs";

export const TOPIC = "9.6 QR Factorisation";
export const Q = [
  qrQ([[1, 1, 2], [1, 2, 1], [1, 0, 1], [1, 1, 0]], 0, 2, F.mat([[1, 1, 2], [1, 2, 1], [1, 0, 1], [1, 1, 0]], { label: "A" })),
  qrQ([[1, 1, 2], [1, 2, 1], [1, 0, 1], [1, 1, 0]], 1, 2),
  qrQ([[1, 1, 2], [1, 2, 1], [1, 0, 1], [1, 1, 0]], 2, 2),
  qrQ([[2, 1, 0], [1, 2, 1], [0, 1, 2]], 1, 1, F.mat([[2, 1, 0], [1, 2, 1], [0, 1, 2]], { label: "A" })),
  qrQ([[1, 2], [2, 0], [2, 1], [0, 2]], 0, 1),
  qrQ([[1, 2], [2, 0], [2, 1], [0, 2]], 1, 1),
  num(S`Solve $${M([[1, 3], [2, 3], [2, 0]])}\vec x=(3,0,3)$ in the least-squares sense via $R=${M([[3, 3], [0, 3]])}$, $Q=\tfrac13${M([[1, 2], [2, 1], [2, -2]])}$: $\hat x_1=$?`, 1, "Qᵀb = (3, 0): x₂ = 0, x₁ = 1.", F.mat([[3, 3], [0, 3]], { label: "R" })),
  ms("Which hold for A = QR (independent columns)?", ["QᵀQ = I", "R invertible", "QQᵀ = I always", "Col Q = Col A"], [0, 1, 3], "QQᵀ = I only for square Q."),
  num(S`$\det(A^TA)$ for $A=${M([[1, 1], [1, 2], [1, 0], [1, 1]])}$ (via $R=${M([[2, 2], [0, "\\sqrt2"]])}$).`, 8, "(2√2)²."),
  tf("The QR factorisation (with positive diagonal) is unique.", true, "Gram–Schmidt determines each qₖ."),
  num(S`$A$ is square, $A=QR$, $R=${M([[1, 2, 3], [0, 4, 5], [0, 0, 6]])}$. Find $|\det A|$.`, 24, "1·4·6."),
  mc("Solving Ax = b with QR replaces Gaussian elimination by:", "a matrix–vector product Qᵀb and back substitution", ["inverting Q by row reduction", "computing A⁻¹", "eigenvalues"], "Rx = Qᵀb."),
  num(S`$A=${M([[3, 0], [4, 0], [0, 2]])}$. Find $r_{22}$.`, 2, "Columns are orthogonal; |(0,0,2)|."),
  num(S`For $A=${M([[1, 1], [0, 1]])}$ (upper triangular), find $r_{12}$.`, 1, "q₁ = e₁, q₂ = e₂, R = A."),
  tf("If A is upper triangular with positive diagonal, then Q = I and R = A.", true, "Gram–Schmidt on such columns gives e₁, e₂, …"),
  num(S`$A=QR$ with $R=${M([[2, 1], [0, 3]])}$. The least-squares error vector is orthogonal to how many columns of $Q$?`, 2, "All columns of Q (Col Q = Col A)."),
  num(S`$A$ is $4\times2$, $A^TA=${M([[4, 4], [4, 6]])}$. Find $r_{22}$ of its QR factorisation. (3 decimals)`, 1.4142, "RᵀR = AᵀA: r₁₁ = 2, r₁₂ = 2, r₂₂² = 6 − 4.", undefined, 0.001),
  num(S`Same: find $r_{12}$.`, 2, "r₁₁r₁₂ = 4, r₁₁ = 2."),
  qrQ([[0, 1], [1, 1], [1, 0]], 0, 1),
  tf("Computing R requires the Gram–Schmidt coefficients to be stored.", false, "R = QᵀA can be computed afterwards.", F.row([[[["Qᵀ"]], {}], [[["A"]], {}], "=", [[["R"]], {}]])),
];
