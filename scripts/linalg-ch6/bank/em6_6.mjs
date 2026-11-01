// 6.6 Properties of Determinants — 20 easy + 20 medium questions
import { S, F, M, mc, num, tf, fill, detRowQ } from "./gen6.mjs";

const easy = [
  num(S`$\det A=5$. Swapping two rows gives $B$. $\det B=$?`, -5, "A swap changes the sign.", F.row([[[["R₁"], ["R₂"]], { label: "A" }], "→", [[["R₂"], ["R₁"]], { label: "B" }]])),
  num(S`$\det A=5$. Multiplying row 2 by $-3$ gives $B$. $\det B=$?`, -15, "Scaling a row scales det."),
  num(S`$\det A=5$. Adding $4\times$ row 1 to row 3 gives $B$. $\det B=$?`, 5, "Replacements do not change det."),
  num(S`$A$ is $3\times3$ with $\det A=2$. $\det(2A)=$?`, 16, "2³·2."),
  num(S`$\det A=4$. $\det A^{-1}=$?`, 0.25, "1/det A.", undefined, 0.001),
  num(S`$\det A=3$, $\det B=-2$. $\det(AB)=$?`, -6, "det A · det B."),
  num(S`$\det A=-7$. $\det A^T=$?`, -7, "det Aᵀ = det A."),
  tf(S`$\det(A+B)=\det A+\det B$.`, false, "Not in general: A = B = I in ℝ² gives 4 vs 2."),
  fill("A square matrix is invertible exactly when its determinant is ___.", ["nonzero", "not zero", "non-zero", "≠ 0"], "det A ≠ 0 ⇔ invertible."),
  detRowQ([[1, 2, 1], [2, 5, 2], [1, 2, 3]]),
  detRowQ([[1, 1, 1], [1, 2, 2], [1, 2, 3]], F.mat([[1, 1, 1], [1, 2, 2], [1, 2, 3]], { label: "A" })),
  tf("If two rows of A are equal, det A = 0.", true, "Swapping them gives det A = −det A."),
  mc("Which operation does NOT change det A?", "adding a multiple of one row to another", ["swapping two rows", "multiplying a row by 2", "multiplying A by −1 (3 × 3)"], "Only replacements leave det unchanged."),
  num(S`$\det A=2$ ($2\times2$). $\det(-A)=$?`, 2, "(−1)²·2."),
  num(S`$\det A=2$ ($3\times3$). $\det(-A)=$?`, -2, "(−1)³·2."),
  tf(S`$\det(A^2)=(\det A)^2$.`, true, "det(AA) = det A det A."),
  detRowQ([[2, 4], [1, 5]]),
  tf("A matrix with a zero column has det 0.", true, "det Aᵀ = det A and Aᵀ has a zero row."),
  num(S`$\det A=6$, $B$ is $A$ with rows 1 and 3 swapped and then row 2 doubled. $\det B=$?`, -12, "(−1)(2)(6)."),
  mc(S`If $\det A=0$, then:`, S`$A\vec x=\vec 0$ has a nonzero solution`, [S`$A=0$`, S`$A$ has a zero row`, S`$A^{-1}$ exists`], "det A = 0 ⇔ singular."),
];

const medium = [
  detRowQ([[0, 2, 1], [1, 3, 2], [2, 1, 4]]),
  detRowQ([[1, 3, 2], [2, 6, 7], [1, 4, 5]], F.mat([[1, 3, 2], [2, 6, 7], [1, 4, 5]], { label: "needs a swap" })),
  detRowQ([[2, 1, 3], [4, 2, 7], [1, 1, 1]]),
  detRowQ([[1, 2, 0, 1], [0, 1, 1, 0], [2, 4, 1, 3], [1, 2, 0, 2]]),
  num(S`$A,B$ are $3\times3$, $\det A=2$, $\det B=-3$. $\det(A^TB^{-1})=$?`, -0.6667, "2 · (1/−3).", undefined, 0.001),
  num(S`$A$ is $4\times4$, $\det A=-2$. $\det(3A^{-1})=$?`, -40.5, "3⁴/(−2).", undefined, 0.001),
  num(S`$\det A=5$ ($3\times3$). $\det(A^TA)=$?`, 25, "det Aᵀ det A = 5·5."),
  tf(S`If $\det(AB)=0$ then $\det A=0$ or $\det B=0$.`, true, "det(AB) = det A det B."),
  tf(S`If $A$ is invertible, $\det(A^{-1}BA)=\det B$.`, true, "(1/det A)·det B·det A."),
  num(S`For which $t$ is $${M([[1, 1, 1], [1, 3, 5], [1, 5, "t"]])}$ singular?`, 9, "Replacements: R₂ − R₁ = (0, 2, 4), R₃ − R₁ = (0, 4, t − 1), R₃ − 2R₂ = (0, 0, t − 9)."),
  mc("Q is n × n with QᵀQ = I. Then det Q is:", "±1", ["0", "n", "any real number"], "(det Q)² = 1."),
  num(S`$A^2=A$ and $A$ is invertible. $\det A=$?`, 1, "(det A)² = det A ≠ 0."),
  num(S`$A^3=0$. $\det A=$?`, 0, "(det A)³ = 0."),
  tf("Row reducing A with only replacements and swaps gives an echelon form U with det A = ±det U.", true, "Each swap flips the sign; replacements change nothing."),
  num(S`$\det${M([["a", "b", "c"], ["d", "e", "f"], ["g", "h", "i"]])}=4$. Find $\det${M([["d", "e", "f"], ["a", "b", "c"], ["g", "h", "i"]])}$.`, -4, "Rows 1 and 2 swapped."),
  num(S`Same $\det=4$. Find $\det${M([["a", "b", "c"], ["2d", "2e", "2f"], ["g+a", "h+b", "i+c"]])}$.`, 8, "Row 2 doubled (×2); row 3 + row 1 (×1)."),
  num(S`Same $\det=4$. Find $\det${M([["a", "d", "g"], ["b", "e", "h"], ["c", "f", "i"]])}$.`, 4, "That is the transpose.", F.mat([["a", "d", "g"], ["b", "e", "h"], ["c", "f", "i"]], { label: "Aᵀ" })),
  tf(S`$\det(kA)=k\det A$ for every $3\times3$ $A$.`, false, "It is k³ det A."),
  detRowQ([[3, 6, 9], [1, 1, 1], [2, 5, 7]]),
  num(S`$\det A=-3$ ($2\times2$). How does the area of a region change under $A$? Give the factor.`, 3, "|det A|."),
];

export const E = easy;
export { medium as M };
