// 6.5 Determinants and Cofactor Expansion — 20 easy + 20 medium questions
import { S, F, M, Dt, mc, num, tf, fill, detQ, volumeQ, det } from "./gen6.mjs";

const easy = [
  detQ([[4, 1], [2, 3]]),
  detQ([[-2, 5], [1, 3]]),
  detQ([[6, 4], [3, 2]]),
  detQ([[0, 7], [-1, 2]], F.mat([[0, 7], [-1, 2]], { label: "A" })),
  num(S`\(\det I_4=\)?`.replace(/\\\(|\\\)/g, "$"), 1, "Product of the diagonal: 1·1·1·1."),
  num(S`$\det\operatorname{diag}(3,-1,2)=$?`, -6, "Product of the diagonal."),
  num(S`$\det${M([[2, 9, -4], [0, 3, 7], [0, 0, 5]])}=$?`, 30, "Upper triangular: 2·3·5.", F.pat("upper", 3)),
  fill("The determinant of A with row i and column j deleted is called the ___ M_ij.", ["minor"], "That is the minor; the signed version is the cofactor."),
  mc(S`The sign of the cofactor $C_{23}$ is:`, S`$-$`, [S`$+$`, "depends on the entry", "always the sign of a₂₃"], "(−1)^(2+3) = −1."),
  num(S`For $A=${M([[1, 2, 3], [4, 5, 6], [7, 8, 10]])}$, find the minor $M_{11}$.`, 2, "det [[5, 6], [8, 10]] = 50 − 48."),
  num(S`For the same $A$, find the cofactor $C_{12}$.`, 2, "−det [[4, 6], [7, 10]] = −(40 − 42) = 2."),
  tf("A matrix with a row of zeros has determinant 0.", true, "Expand along that row."),
  tf("det A is defined for every matrix A.", false, "Only for square matrices."),
  volumeQ([[3, 0], [1, 2]]),
  volumeQ([[2, 1], [-1, 3]], F.v2([[[2, 1], "a₁", "blue"], [[-1, 3], "a₂", "red"]], { xmin: -2, xmax: 3, ymin: -1, ymax: 4 })),
  tf("If det A = 0, A is invertible.", false, "det A ≠ 0 ⇔ invertible."),
  num(S`For which $x$ is $${Dt([["x", 3], [4, 6]])}=0$?`, 2, "6x − 12 = 0."),
  mc("Which row or column is best for expanding det of [[1, 4, 0], [2, 0, 0], [3, 5, 6]]?", "column 3 or row 2 (two zeros each)", ["row 1", "column 1", "row 3"], "Lines with the most zeros."),
  detQ([[1, 0, 0], [2, 3, 0], [4, 5, 6]]),
  tf("Swapping the two columns of a 2 × 2 matrix changes the sign of its determinant.", true, "ad − bc becomes bc − ad."),
];

const medium = [
  detQ([[2, 1, 0], [1, 3, 1], [0, 1, 2]]),
  detQ([[1, -2, 3], [0, 4, 1], [2, 1, -1]]),
  detQ([[3, 0, 2], [1, 1, 0], [2, 4, 1]], F.mat([[3, 0, 2], [1, 1, 0], [2, 4, 1]], { label: "A" })),
  detQ([[1, 1, 1], [2, 3, 4], [4, 9, 16]]),
  num(S`Compute $\det${M([[1, 0, 2, 0], [0, 3, 0, 0], [1, 0, 1, 0], [0, 0, 0, 2]])}$.`, det([[1, 0, 2, 0], [0, 3, 0, 0], [1, 0, 1, 0], [0, 0, 0, 2]]), "Expand along row 2 (only the 3, sign +) and then row 3 of the minor (only the 2): 3·2·det[[1, 2], [1, 1]] = 6(1 − 2) = −6."),
  num(S`For which $k$ is $${M([[1, 2, 0], [3, "k", 1], [0, 1, 1]])}$ singular?`, 7, "Along row 1: 1(k − 1) − 2(3 − 0) + 0 = k − 7."),
  volumeQ([[1, 0, 1], [0, 2, 0], [1, 1, 3]]),
  volumeQ([[2, 1, 0], [0, 1, 2], [1, 0, 1]], F.v3([[[2, 1, 0], "a₁"], [[0, 1, 2], "a₂"], [[1, 0, 1], "a₃"]])),
  num(S`Find the area of the triangle with vertices $(0,0)$, $(5,1)$, $(2,4)$.`, 9, "½|det[[5, 2], [1, 4]]| = ½·18."),
  num(S`For $A=${M([[2, -1, 4], [3, 0, 1], [1, 5, 2]])}$ find $C_{31}$.`, -1, "+det[[−1, 4], [0, 1]] = −1 − 0."),
  tf(S`$\det(A+B)=\det A+\det B$ for all $2\times2$ matrices.`, false, "A = B = I: 4 ≠ 2."),
  num(S`For which positive $x$ is $${Dt([["x", 1, 0], [1, "x", 0], [0, 0, 2]])}=0$?`, 1, "2(x² − 1) = 0."),
  detQ([[0, 2, 0], [3, 0, 1], [0, 1, 4]]),
  mc(S`$\det${M([["a", "b", "c"], [0, "d", "e"], [0, 0, "f"]])}=$`, S`$adf$`, [S`$adf-bce$`, S`$a+d+f$`, S`$0$`], "Triangular: product of the diagonal."),
  num(S`The parallelogram on $(k,1)$ and $(2,3)$ has area 7. Find $k\gt0$.`, 3, "|3k − 2| = 7 with k > 0: k = 3."),
  detQ([[1, 2, 3], [2, 4, 6], [1, 0, 2]]),
  num(S`Compute $${Dt([[1, 2], [3, 4]])}\cdot${Dt([[0, 1], [1, 0]])}$.`, 2, "(−2)(−1)."),
  tf(S`If $A$ is $3\times3$ with two equal rows, then $\det A=0$.`, true, "Expand along the third row: each minor has two equal rows."),
  detQ([[5, 0, 0, 0], [1, 2, 0, 0], [3, 1, -1, 0], [4, 2, 6, 3]], F.pat("lower", 4)),
  num(S`For $A=${M([[1, 2, 3], [4, 5, 6], [7, 8, 10]])}$, $\det A=$?`, -3, "Along row 1: 1(50 − 48) − 2(40 − 42) + 3(32 − 35) = 2 + 4 − 9."),
];

export const E = easy;
export { medium as M };
