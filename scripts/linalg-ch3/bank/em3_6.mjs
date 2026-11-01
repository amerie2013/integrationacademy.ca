// 3.6 Matrix Multiplication — 20 easy + 20 medium questions
import { S, F, M, mc, num, tf, fill, prodEntryQ, definedQ, commuteQ, mul } from "./gen3.mjs";

const easy = [
  definedQ(2, 3, 3, 4),
  definedQ(3, 2, 3, 2),
  mc(S`$A$ is $2\times5$ and $B$ is $5\times3$. The size of $AB$ is:`, S`$2\times3$`, [S`$5\times5$`, S`$3\times2$`, S`$2\times5$`], "(m × n)(n × p) = m × p: the outer sizes.", F.row([[[["*", "*", "*", "*", "*"], ["*", "*", "*", "*", "*"]], { label: "2 × 5" }], [[["*", "*", "*"], ["*", "*", "*"], ["*", "*", "*"], ["*", "*", "*"], ["*", "*", "*"]], { label: "5 × 3" }]])),
  prodEntryQ([[1, 2], [3, 4]], [[5, 6], [7, 8]], 0, 0),
  prodEntryQ([[2, 0], [-1, 3]], [[1, 4], [2, -2]], 1, 1, F.prod([[2, 0], [-1, 3]], [[1, 4], [2, -2]], 1, 1)),
  prodEntryQ([[1, -1, 2], [0, 3, 1]], [[2, 1], [1, 0], [4, -3]], 0, 1),
  prodEntryQ([[3, 1, 0]], [[2], [-1], [5]], 0, 0),
  tf("Matrix multiplication is commutative: AB = BA whenever both are defined.", false, S`E.g. $${M([[1, 1], [0, 1]])}${M([[1, 0], [1, 1]])}=${M([[2, 1], [1, 1]])}$ but the other order gives $${M([[1, 1], [1, 2]])}$.`),
  tf(S`$IA=A$ for every square $A$ of the same size as $I$.`, true, "The identity acts like the number 1."),
  fill(S`$(AB)_{ij}$ is row $i$ of $A$ times ___ $j$ of $B$.`, ["column"], "The row-column rule."),
  mc(S`Column 2 of $AB$ equals:`, S`$A\vec b_2$`, [S`$\vec a_2B$`, S`$A\vec a_2$`, S`$B\vec a_2$`], "AB = [Ab₁ Ab₂ …]."),
  mc(S`$${M([[1, 0], [0, 0]])}${M([[3, 4], [5, 6]])}=$`, S`$${M([[3, 4], [0, 0]])}$`, [S`$${M([[3, 0], [5, 0]])}$`, S`$${M([[3, 0], [0, 0]])}$`, S`$${M([[0, 0], [5, 6]])}$`], "Row 1 of the product is (1, 0)B = row 1 of B; row 2 is (0, 0)B = 0."),
  num(S`$A$ is $4\times2$ and $B$ is $2\times4$. How many entries does $AB$ have?`, 16, "AB is 4 × 4."),
  num(S`$A$ is $4\times2$ and $B$ is $2\times4$. How many entries does $BA$ have?`, 4, "BA is 2 × 2."),
  prodEntryQ([[0, 1], [1, 0]], [[2, 5], [7, 9]], 0, 0),
  tf(S`$A0=0$ for every matrix $A$ (with $0$ of a fitting size).`, true, "Every column of A0 is A·0 = 0."),
  num(S`$\vec x^T\vec y$ for $\vec x=(1,2,3)$, $\vec y=(4,0,-1)$ is:`, 1, "A 1 × 1 product: 4 + 0 − 3 = 1 — the dot product."),
  prodEntryQ([[2, 1], [0, 1], [1, 1]], [[1, 0, 2], [3, 1, 1]], 2, 2),
  mc(S`Which product is defined if $A$ is $3\times1$ and $B$ is $1\times3$?`, "both AB and BA", ["only AB", "only BA", "neither"], "AB is 3 × 3 and BA is 1 × 1."),
  tf(S`If $AB$ is defined, then $BA$ is defined.`, false, "A 2 × 3 and B 3 × 4: AB is defined, BA needs 4 = 2."),
];

const medium = [
  prodEntryQ([[2, -1, 3], [1, 0, 4]], [[1, 2], [-2, 0], [3, 5]], 1, 1, F.prod([[2, -1, 3], [1, 0, 4]], [[1, 2], [-2, 0], [3, 5]], 1, 1)),
  prodEntryQ([[1, 2, 0, -1], [3, 1, 2, 0]], [[1, 0], [2, 1], [0, 3], [4, -2]], 0, 1),
  prodEntryQ([[1, 4], [-2, 3], [0, 5]], [[2, -1, 1], [1, 2, 0]], 1, 0),
  commuteQ([[1, 2], [0, 1]], [[1, 3], [0, 1]]),
  commuteQ([[1, 2], [0, 1]], [[1, 0], [3, 1]]),
  commuteQ([[2, 0], [0, 5]], [[3, 0], [0, -1]], F.row([[[[2, 0], [0, 5]], { label: "A" }], [[[3, 0], [0, -1]], { label: "B" }]])),
  num(S`Find the sum of the entries of $${M([[1, 1], [1, 1]])}${M([[2, -1], [3, 0]])}$.`, 8, S`The product is $${M([[5, -1], [5, -1]])}$: each row is $(1,1)B$ = sum of the rows of $B$. Sum: $5-1+5-1=8$.`),
  mc(S`Row 2 of $AB$ equals:`, S`(row 2 of $A$)$\,B$`, [S`$A\,$(row 2 of $B$)`, S`(row 2 of $B$)$\,A$`, S`(column 2 of $A$)$\,B$`], "Each row of AB is a combination of the rows of B, weighted by the matching row of A."),
  num(S`Row 1 of $A$ is $(2,-1)$ and $B=${M([[3, 0, 1], [4, 2, -2]])}$. Find the third entry of row 1 of $AB$.`, 4, "(2, −1)B = 2(3, 0, 1) − (4, 2, −2) = (2, −2, 4)."),
  tf(S`$AB=0$ implies $A=0$ or $B=0$.`, false, S`$${M([[1, 1], [1, 1]])}${M([[1, -1], [-1, 1]])}=0$ with both factors nonzero.`),
  tf(S`$AB=AC$ with $A\ne0$ implies $B=C$.`, false, S`With $A=${M([[1, 0], [0, 0]])}$, $AB$ only sees row 1 of $B$; change row 2 and the product stays the same.`),
  num(S`Find $k$ so that $${M([[1, 2], [2, 4]])}${M([[6], ["k"]])}=\vec 0$.`, -3, "Row 1: 6 + 2k = 0, k = −3 (row 2: 12 − 12 = 0 ✓)."),
  prodEntryQ([[3, -2], [1, 5]], [[4, 1], [2, -3]], 0, 1),
  num(S`$\vec x\vec y^T$ for $\vec x=(1,-2)$, $\vec y=(3,4,5)$ is $2\times3$. Find its $(2,3)$ entry.`, -10, "Entry (i, j) of xyᵀ is xᵢyⱼ: (−2)(5) = −10.", F.row([[[[1], [-2]], { label: "x" }], [[[3, 4, 5]], { label: "yᵀ" }]])),
  mc(S`Which matrices commute with $${M([[1, 0], [0, 2]])}$?`, "exactly the diagonal matrices", ["all 2 × 2 matrices", "only the identity", "only the zero matrix"], "DB scales rows, BD scales columns; equality forces b₁₂ = 2b₁₂ and 2b₂₁ = b₂₁, so off-diagonals are 0."),
  prodEntryQ([[0, 0, 1], [0, 1, 0], [1, 0, 0]], [[1, 2, 3], [4, 5, 6], [7, 8, 9]], 0, 0),
  mc(S`$P=${M([[0, 0, 1], [0, 1, 0], [1, 0, 0]])}$. Then $PA$:`, "swaps rows 1 and 3 of A", ["swaps columns 1 and 3 of A", "reverses every row of A", "transposes A"], "Row 1 of PA is (0, 0, 1)A = row 3 of A, and so on."),
  num(S`$A$ is $3\times4$ and $AB$ is $3\times2$. How many rows does $B$ have?`, 4, "B must be 4 × 2 for (3 × 4)(4 × 2) = 3 × 2."),
  prodEntryQ([[1, 1, 1]], [[1, 2], [3, 4], [5, 6]], 0, 1),
  num(S`Find $\operatorname{tr}(AB)$ for $A=${M([[1, 2], [0, 1]])}$, $B=${M([[3, 0], [1, 2]])}$.`, mul([[1, 2], [0, 1]], [[3, 0], [1, 2]]).reduce((s, r, i) => s + r[i], 0), S`$AB=${M(mul([[1, 2], [0, 1]], [[3, 0], [1, 2]]))}$; trace $5+2=7$.`),
];

export const E = easy;
export { medium as M };
