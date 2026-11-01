// 3.3 Triangular, Diagonal and Other Special Matrices — 20 hard questions
import { S, F, M, mc, num, tf, ms, mul, traceQ } from "./gen3.mjs";

const U1 = [[2, 1, -1], [0, 3, 4], [0, 0, -1]], U2 = [[1, 0, 2], [0, -2, 5], [0, 0, 3]];
export const TOPIC = "3.3 Triangular, Diagonal and Other Special Matrices";
export const Q = [
  num(S`The product of the upper triangular matrices $${M(U1)}$ and $${M(U2)}$ is upper triangular. Find its $(2,2)$ entry.`, mul(U1, U2)[1][1], S`For triangular matrices the diagonal of the product is the product of the diagonals: $3\cdot(-2)=-6$. The full product is $${M(mul(U1, U2))}$.`, F.row([[U1, { label: "U₁" }], [U2, { label: "U₂" }]])),
  num(S`For the same matrices $U_1=${M(U1)}$, $U_2=${M(U2)}$, find the $(1,3)$ entry of $U_1U_2$.`, mul(U1, U2)[0][2], S`Row 1 of $U_1$ times column 3 of $U_2$: $2\cdot2+1\cdot5+(-1)\cdot3=4+5-3=6$.`),
  tf(S`$\operatorname{tr}(AB)=\operatorname{tr}A\cdot\operatorname{tr}B$ for all $2\times2$ matrices.`, false, S`$A=B=${M([[1, 0], [0, -1]])}$: $AB=I$ has trace 2, but $\operatorname{tr}A\cdot\operatorname{tr}B=0$.`),
  tf(S`$\operatorname{tr}(AB)=\operatorname{tr}(BA)$ for all $n\times n$ matrices $A,B$.`, true, "Both equal the sum over all i, k of a_ik·b_ki."),
  tf(S`There are $2\times2$ matrices with $AB-BA=I$.`, false, "tr(AB − BA) = 0 but tr I = 2."),
  num(S`$A$ is $n\times n$ with $\operatorname{tr}(A)=0$ and $A$ upper triangular with diagonal entries $1,2,\dots,n-1,x$. For $n=5$, find $x$.`, -10, "1 + 2 + 3 + 4 + x = 0 gives x = −10.", F.pat("upper", 5)),
  mc(S`$D=\operatorname{diag}(2,3)$ and $A=${M([["a", "b"], ["c", "d"]])}$. Then $DA=$`, S`$${M([["2a", "2b"], ["3c", "3d"]])}$`, [S`$${M([["2a", "3b"], ["2c", "3d"]])}$`, S`$${M([["2a", "b"], ["c", "3d"]])}$`, S`$${M([["5a", "5b"], ["5c", "5d"]])}$`], "A diagonal matrix on the LEFT scales the ROWS: row i is multiplied by dᵢ."),
  mc(S`$D=\operatorname{diag}(2,3)$ and $A=${M([["a", "b"], ["c", "d"]])}$. Then $AD=$`, S`$${M([["2a", "3b"], ["2c", "3d"]])}$`, [S`$${M([["2a", "2b"], ["3c", "3d"]])}$`, S`$${M([["2a", "b"], ["c", "3d"]])}$`, S`$${M([["6a", "6b"], ["6c", "6d"]])}$`], "A diagonal matrix on the RIGHT scales the COLUMNS."),
  traceQ([[4, 9, -3, 1, 0], [2, -1, 5, 6, 2], [0, 3, 2, 8, -4], [7, 1, 1, -6, 3], [5, 5, 0, 2, 1]], F.mat([[4, 9, -3, 1, 0], [2, -1, 5, 6, 2], [0, 3, 2, 8, -4], [7, 1, 1, -6, 3], [5, 5, 0, 2, 1]], { cells: [[0, 0], [1, 1], [2, 2], [3, 3], [4, 4]], label: "A" })),
  ms("Which sets of n × n matrices are closed under addition AND multiplication?", ["upper triangular", "diagonal", "symmetric", "scalar matrices", "matrices with trace 0"], [0, 1, 3], "Products of symmetric matrices need not be symmetric, and the trace of a product need not be 0."),
  tf(S`The product of two symmetric $2\times2$ matrices is always symmetric.`, false, S`$${M([[1, 0], [0, 2]])}${M([[0, 1], [1, 0]])}=${M([[0, 1], [2, 0]])}$ is not symmetric.`),
  num(S`$N=${M([[0, 1, 4], [0, 0, 2], [0, 0, 0]])}$ is strictly upper triangular. Find the $(1,3)$ entry of $N^2$.`, 2, S`$(N^2)_{13}=$ row 1 · column 3 $=0\cdot4+1\cdot2+4\cdot0=2$; $N^2=${M([[0, 0, 2], [0, 0, 0], [0, 0, 0]])}$.`, F.pat("upper", 3)),
  num(S`How many $3\times3$ diagonal matrices $D$ satisfy $D^2=I$?`, 8, "Each diagonal entry must be ±1: 2³ = 8 choices."),
  tf("If A is upper triangular, then A + Aᵀ is diagonal.", false, S`$A=${M([[1, 2], [0, 1]])}$: $A+A^T=${M([[2, 2], [2, 2]])}$ is not diagonal.`),
  num(S`$A$ is a $3\times3$ upper triangular matrix with every entry on or above the diagonal equal to 2. Find the sum of all entries of $A^2$.`, 40, S`$A=2U$ with $U$ the all-ones upper triangular matrix; $U^2=${M([[1, 2, 3], [0, 1, 2], [0, 0, 1]])}$ (sum 10), so $A^2=4U^2$ has sum 40.`),
  mc(S`Which matrix commutes with every $2\times2$ matrix?`, S`$5I$`, [S`$\operatorname{diag}(1,2)$`, S`$${M([[0, 1], [0, 0]])}$`, S`$${M([[1, 1], [1, 1]])}$`], "Only scalar matrices kI commute with every matrix."),
  num(S`For which $k$ does $\operatorname{diag}(k,\ k^2-2)$ equal a scalar matrix with $k<0$?`, -1, "Scalar: k = k² − 2 → k² − k − 2 = 0 → k = 2 or k = −1; k < 0 gives −1."),
  tf("Row reduction to echelon form of a square matrix with only row replacements never changes the trace.", false, S`$${M([[1, 1], [1, 1]])}$ (trace 2) becomes $${M([[1, 1], [0, 0]])}$ (trace 1) after $R_2-R_1$.`),
  num(S`$A=\operatorname{diag}(1,2,3)$. Find $\operatorname{tr}(A^3)$.`, 36, "Powers of a diagonal matrix act on the diagonal: 1 + 8 + 27 = 36."),
  num(S`$L=${M([[1, 0, 0], [2, 1, 0], [-1, 3, 1]])}$ is lower triangular. Find the $(3,1)$ entry of $L^2$.`, 4, S`Row 3 of $L$, $(-1,3,1)$, times column 1 of $L$, $(1,2,-1)$: $(-1)\cdot1+3\cdot2+1\cdot(-1)=-1+6-1=4$. The product stays lower triangular: $L^2=${M([[1, 0, 0], [4, 1, 0], [4, 6, 1]])}$.`, F.pat("lower", 3)),
];
