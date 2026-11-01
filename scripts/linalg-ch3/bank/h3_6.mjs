// 3.6 Matrix Multiplication — 20 hard questions
import { S, F, M, mc, num, tf, ms, prodEntryQ, commuteQ, mul } from "./gen3.mjs";

export const TOPIC = "3.6 Matrix Multiplication";
export const Q = [
  prodEntryQ([[2, -1, 0, 3], [1, 4, -2, 1], [0, 2, 5, -1]], [[1, 0, 2], [3, -1, 1], [0, 2, -3], [2, 1, 4]], 2, 1, F.prod([[2, -1, 0, 3], [1, 4, -2, 1], [0, 2, 5, -1]], [[1, 0, 2], [3, -1, 1], [0, 2, -3], [2, 1, 4]], 2, 1)),
  prodEntryQ([[2, -1, 0, 3], [1, 4, -2, 1], [0, 2, 5, -1]], [[1, 0, 2], [3, -1, 1], [0, 2, -3], [2, 1, 4]], 1, 2),
  num(S`Find all $2\times2$ matrices commuting with $${M([[1, 1], [0, 1]])}$; they look like $${M([["a", "b"], [0, "a"]])}$. For such a matrix with $(1,1)$ entry 3, the $(2,2)$ entry is:`, 3, S`Write $B=${M([["a", "b"], ["c", "d"]])}$. $AB=${M([["a+c", "b+d"], ["c", "d"]])}$, $BA=${M([["a", "a+b"], ["c", "c+d"]])}$. Equal entries give $c=0$ and $d=a$.`, F.mat([[1, 1], [0, 1]], { label: "A" })),
  tf(S`If $A$ has a zero row, then $AB$ has a zero row.`, true, "That row of AB is (zero row)·B = 0."),
  tf(S`If $B$ has a zero row, then $AB$ has a zero row.`, false, S`$${M([[1, 1], [1, 1]])}${M([[1, 0], [0, 0]])}=${M([[1, 0], [1, 0]])}$ has no zero row (it has a zero column instead).`),
  tf(S`If $B$ has a zero column, then $AB$ has a zero column.`, true, "That column of AB is A·0 = 0."),
  num(S`Find $x$ so that $${M([[1, "x"], [2, 1]])}$ and $${M([[3, 2], [4, 3]])}$ commute.`, 1, S`$AB=${M([["3+4x", "2+3x"], [10, 7]])}$, $BA=${M([[7, "3x+2"], [10, "4x+3"]])}$. Entry (1, 1): $3+4x=7$, so $x=1$; then $(2,2)$: $7=4+3$ ✓.`),
  ms(S`Which hold for all $n\times n$ matrices $A,B$?`, [S`$(A+B)^2=A^2+2AB+B^2$`, S`$(A+B)^2=A^2+AB+BA+B^2$`, S`$\operatorname{tr}(AB)=\operatorname{tr}(BA)$`, S`$AB=BA$`, S`$A(B+I)=AB+A$`], [1, 2, 4], "Expand without commuting: (A + B)(A + B) = A² + AB + BA + B²."),
  num(S`$A$ is $2\times2$ and $A${M([[1], [0]])}=${M([[3], [1]])}$, $A${M([[1], [1]])}=${M([[5], [0]])}$. Find $a_{12}$.`, 2, S`Column 1 of $A$ is $(3,1)$. Column 2 is $A(1,1)-A(1,0)=(5-3,0-1)=(2,-1)$, so $a_{12}=2$. Together: $A${M([[1, 1], [0, 1]])}=${M([[3, 5], [1, 0]])}$.`),
  num(S`Count the multiplications of numbers needed to form $AB$ for $A$ $3\times4$ and $B$ $4\times5$ by the row-column rule.`, 60, "15 entries, each a sum of 4 products: 15·4 = 60."),
  tf(S`$(ABC)$ needs fewer number multiplications as $A(BC)$ than as $(AB)C$ when $A$ is $1\times10$, $B$ is $10\times10$ and $C$ is $10\times1$.`, false, "(AB)C: 1·10·10 + 1·10·1 = 110; A(BC): 10·10·1 + 1·10·1 = 110. They tie."),
  commuteQ([[0, 1], [1, 0]], [[2, 3], [3, 2]], F.row([[[[0, 1], [1, 0]], { label: "A" }], [[[2, 3], [3, 2]], { label: "B" }]])),
  commuteQ([[0, 1], [1, 0]], [[2, 3], [1, 2]]),
  num(S`$\vec u=(1,2)$, $\vec v=(3,-1)$. Find the sum of all entries of $\vec u\vec v^T$.`, 6, S`$\vec u\vec v^T=${M([[3, -1], [6, -2]])}$; sum $=(1+2)(3-1)=6$.`),
  num(S`$\vec u\vec v^T$ is the $3\times3$ outer product of $\vec u=(1,-1,2)$ and $\vec v=(2,0,1)$. Find its trace.`, 4, S`The diagonal is $u_iv_i$: $2+0+2=4$ — the same as $\vec v^T\vec u$.`),
  mc(S`The rows of $AB$ are combinations of:`, S`the rows of $B$`, [S`the rows of $A$`, S`the columns of $B$`, S`the columns of $A$`], "Row i of AB = (row i of A)B = Σₖ aᵢₖ (row k of B)."),
  num(S`$A=${M([[1, 2], [3, 4]])}$. Find the $(2,1)$ entry of $AA^T$.`, mul([[1, 2], [3, 4]], [[1, 3], [2, 4]])[1][0], S`$(AA^T)_{21}$ = row 2 of $A$ · row 1 of $A$ $=3\cdot1+4\cdot2=11$.`),
  tf(S`For square $A,B$: if $AB=I$ and $CA=I$, then $B=C$.`, true, "C = CI = C(AB) = (CA)B = IB = B."),
  num(S`$E=${M([[1, 0, 0], [-2, 1, 0], [0, 0, 1]])}$ and $A=${M([[1, 3, 1], [2, 7, 4], [0, 1, 5]])}$. Find the $(2,3)$ entry of $EA$.`, 2, S`$E$ performs $R_2-2R_1$ on $A$: new row 2 $=(2,7,4)-2(1,3,1)=(0,1,2)$.`, F.mat([[1, 0, 0], [-2, 1, 0], [0, 0, 1]], { cells: [[1, 0]], label: "E" })),
  prodEntryQ([[1, 2, 3], [4, 5, 6]], [[-1, 0], [2, 1], [0, -2]], 1, 1),
];
