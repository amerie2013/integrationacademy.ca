// 6.6 Properties of Determinants — 20 hard questions
import { S, F, M, Dt, mc, num, tf, ms, detRowQ } from "./gen6.mjs";

export const TOPIC = "6.6 Properties of Determinants";
export const Q = [
  detRowQ([[1, 2, 3, 4], [2, 5, 7, 9], [1, 3, 5, 8], [0, 1, 2, 4]]),
  detRowQ([[0, 1, 2], [3, 0, 1], [1, 2, 0]], F.mat([[0, 1, 2], [3, 0, 1], [1, 2, 0]], { cells: [[0, 0]], label: "pivot position is 0" })),
  detRowQ([[2, 4, 6, 8], [1, 3, 5, 7], [0, 1, 0, 1], [1, 1, 1, 2]]),
  num(S`$${Dt([[1, 1, 1], ["a", "b", "c"], ["a^2", "b^2", "c^2"]])}$ for $a=1$, $b=3$, $c=4$.`, 6, "Vandermonde: (b − a)(c − a)(c − b) = 2·3·1.", F.mat([[1, 1, 1], [1, 3, 4], [1, 9, 16]], { label: "a = 1, b = 3, c = 4" })),
  num(S`$A$ is $5\times5$ with $\det A=3$. $\det(-2A^TA^{-1})=$?`, -32, "(−2)⁵ · 3 · (1/3)."),
  tf(S`If $A$ is $n\times n$ with $n$ odd and $A^T=-A$, then $\det A=0$.`, true, "det A = det Aᵀ = det(−A) = (−1)ⁿ det A = −det A."),
  ms("Which are always true for n × n A, B?", [S`$\det(AB)=\det(BA)$`, S`$\det(A+B)=\det A+\det B$`, S`$\det(A^{-1})=1/\det A$ (if invertible)`, S`$\det(cA)=c\det A$`, S`$\det A^T=\det A$`], [0, 2, 4], "det(cA) = cⁿ det A; determinants are not additive."),
  num(S`$P$ is a permutation matrix from an odd number of row swaps of $I_4$. $\det P=$?`, -1, "Each swap flips the sign."),
  num(S`For which $k$ is $${M([[1, 2, 1], [2, "k", 2], [1, 3, "k"]])}$ singular, $k\gt3$?`, 4, "R₂ − 2R₁ = (0, k − 4, 0) and R₃ − R₁ = (0, 1, k − 1); expanding the remaining 2 × 2 block gives det = (k − 4)(k − 1) − 0·1, zero for k = 4 or 1."),
  tf(S`If $\det A=\det B$ then $A=B$.`, false, "I and diag(−1, −1) both have det 1."),
  num(S`$\det(A^{-1}B^2A)=36$ and $\det B\gt0$. Find $\det B$.`, 6, "det(A⁻¹B²A) = (det B)²."),
  mc(S`An $n\times n$ matrix with integer entries and determinant $\pm1$ has an inverse with:`, "integer entries", ["fractional entries only", "no inverse", "determinant 0"], "A⁻¹ = adj A / det A and the adjugate has integer entries."),
  num(S`$A$ is $3\times3$ and every row sums to 0. $\det A=$?`, 0, "A(1, 1, 1) = 0: singular."),
  detRowQ([[1, 1, 1, 1], [1, 2, 2, 2], [1, 2, 3, 3], [1, 2, 3, 4]], F.mat([[1, 1, 1, 1], [1, 2, 2, 2], [1, 2, 3, 3], [1, 2, 3, 4]], { label: "A" })),
  tf(S`$\det$ is a linear function of each row when the other rows are fixed.`, true, "Expand along that row: a linear combination of its entries."),
  num(S`$\det${M([["a", "b"], ["c", "d"]])}=3$. Find $\det${M([["a+2c", "b+2d"], ["3c", "3d"]])}$.`, 9, "Replacement R₁ + 2R₂ (×1) and scaling R₂ by 3 (×3)."),
  num(S`For $2\times2$ $A$ with $\det A=-1$ and $\operatorname{tr}A=0$, find $\det(A^2)$.`, 1, "(det A)²."),
  tf("If A is singular, then A + I is invertible.", false, "A = diag(0, −1): A + I = diag(1, 0) is singular."),
  num(S`$A$ is $3\times3$ with $\det A=2$; $B$ is obtained from $A$ by $R_1\to R_1+R_2$, $R_2\to R_2+R_1$ (in that order). $\det B=$?`, 2, "Both are replacements: det unchanged.", F.row([[[["R₁"], ["R₂"], ["R₃"]], { label: "A" }], "→", [[["R₁+R₂"], ["2R₂+R₁"], ["R₃"]], { label: "B" }]])),
  mc(S`The area of the image of the unit square under $AB$ is:`, S`$|\det A|\,|\det B|$`, [S`$|\det A|+|\det B|$`, S`$|\det A-\det B|$`, "always 1"], "|det(AB)| = |det A||det B|."),
];
