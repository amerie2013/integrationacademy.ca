// 3.1 Matrices, Addition and Scalar Multiplication — 20 easy + 20 medium questions
import { S, F, M, mc, num, tf, fill, entryQ, combEntryQ } from "./gen3.mjs";

const easy = [
  mc(S`What is the size of $${M([[1, 4, 0], [2, -1, 5]])}$?`, S`$2\times3$`, [S`$3\times2$`, S`$6\times1$`, S`$2\times2$`], "Rows first: 2 rows, 3 columns."),
  entryQ([[3, -2, 7], [0, 5, 1]], 0, 2),
  entryQ([[4, 1], [-6, 2], [9, 0]], 2, 0, F.mat([[4, 1], [-6, 2], [9, 0]], { cells: [[2, 0]], label: "A" })),
  num("How many entries does a 4 × 3 matrix have?", 12, "4 rows × 3 columns = 12 entries."),
  fill("A matrix with the same number of rows and columns is called a ___ matrix.", ["square"], "That is the definition of a square matrix."),
  tf(S`$${M([[1, 2], [3, 4]])}=${M([[1, 3], [2, 4]])}$.`, false, "Equal matrices must agree entry by entry: a₁₂ = 2 on the left but 3 on the right."),
  combEntryQ(1, [[2, -1], [0, 3]], 1, [[4, 5], [-2, 1]], 0, 1),
  combEntryQ(3, [[1, 0, -2], [4, 1, 1]], 0, [[0, 0, 0], [0, 0, 0]], 0, 2),
  tf(S`$${M([[1, 2]])}+${M([[1], [2]])}$ is defined.`, false, "Addition needs equal sizes: 1 × 2 and 2 × 1 differ."),
  mc(S`$${M([[2, 0], [1, -3]])}-${M([[5, 1], [1, 2]])}=$`, S`$${M([[-3, -1], [0, -5]])}$`, [S`$${M([[3, 1], [0, 5]])}$`, S`$${M([[-3, -1], [2, -1]])}$`, S`$${M([[7, 1], [2, -1]])}$`], "Subtract entry by entry: 2 − 5 = −3, 0 − 1 = −1, 1 − 1 = 0, −3 − 2 = −5."),
  num(S`$A$ is $5\times2$. How many rows does $-4A$ have?`, 5, "Scalar multiplication does not change the size."),
  tf("A + B = B + A for all matrices A, B of the same size.", true, "Each entry is a sum of numbers, and number addition is commutative."),
  fill(S`The $m\times n$ matrix with every entry 0 is called the ___ matrix.`, ["zero"], "It is written 0 (or 0ₘₓₙ) and A + 0 = A."),
  num(S`Find $x$ if $${M([["x", 2], [1, 0]])}=${M([[7, 2], [1, 0]])}$.`, 7, "Equal matrices: matching entries are equal, so x = 7."),
  combEntryQ(2, [[1, 3], [-2, 0]], -1, [[0, 1], [4, -5]], 1, 1, F.row([[[[1, 3], [-2, 0]], { cells: [[1, 1]], label: "A" }], [[[0, 1], [4, -5]], { cells: [[1, 1]], label: "B" }]])),
  mc(S`$A=[a_{ij}]$ is $3\times3$ with $a_{ij}=i+j$. Find $a_{23}$.`, "5", ["6", "4", "3"], "a₂₃ = 2 + 3 = 5."),
  tf(S`$(-1)A$ is the matrix $-A$ with $A+(-A)=0$.`, true, "Each entry becomes its negative, and a + (−a) = 0."),
  num(S`For $A=${M([[2, -1], [3, 4]])}$, find the sum of all entries of $3A$.`, 24, "3A = [[6, −3], [9, 12]]; 6 − 3 + 9 + 12 = 24."),
  mc("Which is a column vector?", S`$${M([[3], [1], [-2]])}$`, [S`$${M([[3, 1, -2]])}$`, S`$${M([[3, 1], [-2, 0]])}$`, S`$${M([[3]])}\,${M([[1]])}$`], "A column vector is an n × 1 matrix."),
  tf(S`$k(A+B)=kA+kB$ for every scalar $k$.`, true, "Entry by entry: k(a + b) = ka + kb."),
];

const medium = [
  combEntryQ(2, [[1, -2, 0], [3, 1, 4]], -3, [[2, 0, 1], [-1, 2, 1]], 1, 0),
  combEntryQ(-1, [[5, 2], [0, -4], [1, 1]], 4, [[1, 0], [2, 1], [-1, 3]], 2, 1, F.row([[[[5, 2], [0, -4], [1, 1]], { cells: [[2, 1]], label: "A" }], [[[1, 0], [2, 1], [-1, 3]], { cells: [[2, 1]], label: "B" }]])),
  num(S`Solve for $x$: $2${M([["x", 1], [0, 3]])}-${M([[4, 2], [1, 0]])}=${M([[6, 0], [-1, 6]])}$.`, 5, "Entry (1, 1): 2x − 4 = 6, so x = 5. (The other entries check: 2 − 2 = 0, 0 − 1 = −1, 6 − 0 = 6.)"),
  num(S`Find $X_{12}$ if $3X+${M([[1, 2], [0, -1]])}=${M([[7, 14], [6, 2]])}$.`, 4, "3X = [[6, 12], [6, 3]], so X = [[2, 4], [2, 1]] and X₁₂ = 4."),
  num(S`Find $a+b$ if $${M([["a+b", 2], [3, "a-b"]])}=${M([[8, 2], [3, 2]])}$.`, 8, "Entry (1, 1) gives a + b = 8 directly (and a − b = 2, so a = 5, b = 3)."),
  num(S`Find $a$ if $${M([["a+b", 2], [3, "a-b"]])}=${M([[6, 2], [3, 2]])}$.`, 4, "a + b = 6 and a − b = 2; adding gives 2a = 8, a = 4."),
  mc(S`Simplify $2(A-3B)-(A-5B)$.`, S`$A-B$`, [S`$A-11B$`, S`$3A-B$`, S`$A+B$`], "2A − 6B − A + 5B = A − B."),
  tf(S`If $A+B=A+C$ then $B=C$.`, true, "Add −A to both sides (matrix addition can be cancelled)."),
  tf(S`If $2A=2B$ then $A=B$.`, true, "Multiply both sides by ½."),
  num(S`$A=[a_{ij}]$ is $3\times4$ with $a_{ij}=2i-j$. Find the sum of row 2.`, 6, "Row 2: 4 − 1, 4 − 2, 4 − 3, 4 − 4 = 3, 2, 1, 0; sum 6."),
  num(S`$A=[a_{ij}]$ is $3\times3$ with $a_{ij}=(-1)^{i+j}$. How many entries equal $-1$?`, 4, "i + j odd: (1,2), (2,1), (2,3), (3,2) — four entries.", F.mat([["+", "−", "+"], ["−", "+", "−"], ["+", "−", "+"]], { label: "sign of aᵢⱼ" })),
  combEntryQ(5, [[0, 1], [1, 0]], -2, [[1, 2], [3, 4]], 1, 0),
  mc("Which equation is NOT a property of matrix addition / scalar multiplication?", S`$A+B=A$ implies $B=A$`, [S`$(A+B)+C=A+(B+C)$`, S`$(k+l)A=kA+lA$`, S`$k(lA)=(kl)A$`], "A + B = A implies B = 0, not B = A."),
  num(S`Find $k$ if $k${M([[2, -1], [0, 4]])}=${M([[-6, 3], [0, -12]])}$.`, -3, "2k = −6 gives k = −3; the other entries check: −k = 3, 4k = −12."),
  tf(S`There is a scalar $k$ with $k${M([[1, 2], [2, 4]])}=${M([[3, 6], [6, 10]])}$.`, false, "Entry (1, 1) forces k = 3, but then entry (2, 2) would be 12, not 10."),
  num(S`Solve $2X-${M([[1, 3], [5, -1]])}=X+${M([[2, 0], [1, 4]])}$ and give $X_{21}$.`, 6, "X = [[1, 3], [5, −1]] + [[2, 0], [1, 4]] = [[3, 3], [6, 3]]; X₂₁ = 6."),
  mc(S`Write $${M([[3, -2], [1, 5]])}$ as $aE_{11}+bE_{12}+cE_{21}+dE_{22}$ ($E_{ij}$ has a 1 at $(i,j)$, 0 elsewhere). Then $(a,b,c,d)=$`, S`$(3,-2,1,5)$`, [S`$(3,1,-2,5)$`, S`$(1,1,1,1)$`, S`$(5,1,-2,3)$`], "Each entry is the weight of its own Eᵢⱼ."),
  num(S`A store's sales (rows: 2 stores, columns: 3 items) are $S_1=${M([[4, 2, 7], [1, 0, 3]])}$ in week 1 and $S_2=${M([[5, 1, 2], [3, 4, 0]])}$ in week 2. How many of item 3 did store 1 sell in the two weeks?`, 9, "(S₁ + S₂)₁₃ = 7 + 2 = 9.", F.row([[[[4, 2, 7], [1, 0, 3]], { col: 2, label: "week 1" }], "+", [[[5, 1, 2], [3, 4, 0]], { col: 2, label: "week 2" }]])),
  tf(S`$0\cdot A$ is the zero matrix of the same size as $A$.`, true, "Every entry becomes 0·aᵢⱼ = 0."),
  num(S`Find the $(2,3)$ entry of $4A-2B$ where $a_{ij}=i\cdot j$ and $b_{ij}=i+j$ (both $3\times3$).`, 14, "a₂₃ = 6, b₂₃ = 5: 4·6 − 2·5 = 24 − 10 = 14."),
];

export const E = easy;
export { medium as M };
