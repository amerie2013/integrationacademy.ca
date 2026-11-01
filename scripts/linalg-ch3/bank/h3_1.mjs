// 3.1 Matrices, Addition and Scalar Multiplication — 20 hard questions
import { S, F, M, mc, num, tf, ms, combEntryQ } from "./gen3.mjs";

export const TOPIC = "3.1 Matrices, Addition and Scalar Multiplication";
export const Q = [
  num(S`Solve the matrix equation $3(X-${M([[1, 0], [2, -1]])})=X+${M([[4, 6], [-2, 1]])}$ and give $X_{11}+X_{22}$.`, 2.5, "Expand: 3X − [[3, 0], [6, −3]] = X + [[4, 6], [−2, 1]]. Collect X: 2X = [[4, 6], [−2, 1]] + [[3, 0], [6, −3]] = [[7, 6], [4, −2]]. Halve: X = [[3.5, 3], [2, −1]]. So X₁₁ + X₂₂ = 3.5 + (−1) = 2.5.", undefined, 0.001),
  num(S`Find $x$ if $${M([["x^2", "2x"], [1, 0]])}=${M([[9, -6], [1, 0]])}$.`, -3, "x² = 9 allows x = ±3, and 2x = −6 forces x = −3."),
  tf(S`There are numbers $a,b$ with $a${M([[1, 0], [1, 1]])}+b${M([[0, 1], [1, 0]])}=${M([[2, 3], [5, 2]])}$.`, true, "Entry (1, 1): a = 2; entry (1, 2): b = 3; entry (2, 1): a + b = 5 ✓; entry (2, 2): a = 2 ✓."),
  tf(S`There are numbers $a,b$ with $a${M([[1, 0], [1, 1]])}+b${M([[0, 1], [1, 0]])}=${M([[2, 3], [4, 2]])}$.`, false, "a = 2 and b = 3 from the first row, but then entry (2, 1) is a + b = 5 ≠ 4."),
  num(S`$A=[a_{ij}]$ is $4\times4$ with $a_{ij}=\max(i,j)$. Find the sum of all entries.`, 50, "Rows: (1,2,3,4), (2,2,3,4), (3,3,3,4), (4,4,4,4); sums 10 + 11 + 13 + 16 = 50.", F.mat([[1, 2, 3, 4], [2, 2, 3, 4], [3, 3, 3, 4], [4, 4, 4, 4]], { label: "aᵢⱼ = max(i, j)" })),
  num(S`$A=[a_{ij}]$ is $5\times5$ with $a_{ij}=1$ if $|i-j|\le1$ and $0$ otherwise. How many entries equal 1?`, 13, "5 on the diagonal and 4 on each neighbouring diagonal: 5 + 4 + 4 = 13.", F.mat([[1, 1, 0, 0, 0], [1, 1, 1, 0, 0], [0, 1, 1, 1, 0], [0, 0, 1, 1, 1], [0, 0, 0, 1, 1]], { label: "A" })),
  mc(S`$X$ and $Y$ satisfy $X+Y=${M([[3, 1], [0, 4]])}$ and $X-Y=${M([[1, -1], [2, 0]])}$. Then $X=$`, S`$${M([[2, 0], [1, 2]])}$`, [S`$${M([[1, 1], [-1, 2]])}$`, S`$${M([[4, 0], [2, 4]])}$`, S`$${M([[2, 1], [1, 2]])}$`], "Add the equations: 2X = [[4, 0], [2, 4]], so X = [[2, 0], [1, 2]] (and Y = [[1, 1], [−1, 2]])."),
  num(S`$X$ and $Y$ satisfy $2X+Y=${M([[5, 0], [1, 7]])}$ and $X-Y=${M([[1, 3], [2, -1]])}$. Find $Y_{12}$.`, -2, "Add: 3X = [[6, 3], [3, 6]], X = [[2, 1], [1, 2]]. Then Y = X − [[1, 3], [2, −1]] = [[1, −2], [−1, 3]], so Y₁₂ = −2."),
  tf(S`If $kA=0$ for a nonzero matrix $A$, then $k=0$.`, true, "Some entry a ≠ 0, and ka = 0 forces k = 0."),
  tf(S`If $kA=lA$ and $k\ne l$, then $A=0$.`, true, "(k − l)A = 0 with k − l ≠ 0: every entry is 0."),
  combEntryQ(-3, [[2, 5, -1], [0, 4, 2]], 2, [[1, -3, 4], [5, 0, -2]], 0, 1, F.row([[[[2, 5, -1], [0, 4, 2]], { cells: [[0, 1]], label: "A" }], [[[1, -3, 4], [5, 0, -2]], { cells: [[0, 1]], label: "B" }]])),
  num(S`The matrices $${M([[1, 0], [0, 0]])},${M([[1, 1], [0, 0]])},${M([[1, 1], [1, 0]])},${M([[1, 1], [1, 1]])}$ are combined with weights $a,b,c,d$ to give $${M([[4, 3], [1, -2]])}$. Find $a$.`, 1, "Work backwards: d = −2 (entry 2,2), c + d = 1 so c = 3 (entry 2,1), b + c + d = 3 so b = 2, a + b + c + d = 4 so a = 1."),
  ms("Which properties hold for all m × n matrices A, B and scalars k, l?", [S`$k(A+B)=kA+kB$`, S`$(k+l)A=kA+lA$`, S`$A-B=B-A$`, S`$1A=A$`, S`$A+0=0$`], [0, 1, 3], "Subtraction is not commutative, and A + 0 = A (not 0)."),
  num(S`Inventory: two warehouses (rows) hold three products (columns), $W=${M([[20, 15, 8], [12, 30, 5]])}$. Each month $D=${M([[3, 2, 1], [2, 5, 1]])}$ are shipped. After how many months does warehouse 2 first run out of product 3?`, 5, "Product 3 in warehouse 2: W − tD gives 5 − t·1 = 0 at t = 5 (the others last longer: 12/2 = 6, 30/5 = 6).", F.row([[[[20, 15, 8], [12, 30, 5]], { cells: [[1, 2]], label: "W" }], "−t", [[[3, 2, 1], [2, 5, 1]], { cells: [[1, 2]], label: "D" }]])),
  num(S`Find $t$ so that $${M([[2, "t"], ["t", 1]])}-t${M([[1, 0], [0, 1]])}$ has $(1,1)$ entry equal to 0.`, 2, "Entry (1, 1) is 2 − t = 0, so t = 2."),
  tf(S`The set of $2\times2$ matrices whose entries add up to 0 is closed under addition and scalar multiplication.`, true, "If the entries of A and B each add to 0, those of A + B add to 0 + 0 and those of kA to k·0."),
  tf(S`The set of $2\times2$ matrices with entry $(1,1)$ equal to 1 is closed under addition.`, false, "(1) + (1) = 2: the sum has entry (1, 1) equal to 2."),
  num(S`$A=[a_{ij}]$ is $n\times n$ with $a_{ij}=i-j$. For $n=6$, find the sum of all entries.`, 0, "a_ji = −a_ij, so the entries cancel in pairs and the diagonal is 0.", F.mat([[0, -1, -2], [1, 0, -1], [2, 1, 0]], { label: "n = 3: aᵢⱼ = i − j" })),
  mc(S`$A$ is $2\times3$ with $a_{ij}=i^2-j$. Which is $A$?`, S`$${M([[0, -1, -2], [3, 2, 1]])}$`, [S`$${M([[0, 3], [-1, 2], [-2, 1]])}$`, S`$${M([[0, 1, 2], [3, 2, 1]])}$`, S`$${M([[0, -1, -2], [2, 1, 0]])}$`], "Row i: i² − 1, i² − 2, i² − 3; row 1: 0, −1, −2; row 2: 3, 2, 1."),
  num(S`For which $k$ is $${M([[1, 2], [3, 4]])}+k${M([[1, 1], [1, 1]])}$ equal to a matrix whose entries add up to 0?`, -2.5, "Entries add to 10 + 4k = 0, so k = −2.5.", undefined, 0.001),
];
