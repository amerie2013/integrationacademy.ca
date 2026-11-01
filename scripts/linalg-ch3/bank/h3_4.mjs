// 3.4 Matrix–Vector Multiplication — 20 hard questions
import { S, F, M, mc, num, tf, ms, matVecQ } from "./gen3.mjs";

export const TOPIC = "3.4 Matrix–Vector Multiplication";
export const Q = [
  num(S`$A$ is $2\times2$ with $A(1,1)=(3,5)$ and $A(1,-1)=(1,-1)$. Find $a_{12}$.`, 1, "Add and subtract: A(2, 0) = (4, 4) so Ae₁ = (2, 2); A(0, 2) = (2, 6) so Ae₂ = (1, 3). Then A = [[2, 1], [2, 3]] and a₁₂ = 1."),
  num(S`$A$ is $2\times2$ with $A(1,1)=(3,5)$ and $A(1,-1)=(1,-1)$. Find $a_{22}$.`, 3, "From the sum and difference: Ae₂ = ½[(3, 5) − (1, −1)] = (1, 3), so a₂₂ = 3."),
  tf(S`If $A\vec x=\vec 0$ for every $\vec x\in\mathbb R^n$, then $A=0$.`, true, "Take x = eⱼ: column j of A is 0, for every j."),
  tf(S`If $A\vec x=B\vec x$ for one nonzero $\vec x$, then $A=B$.`, false, S`$A=${M([[1, 0], [0, 0]])}$ and $B=I$ agree on $\vec x=(1,0)$ only.`),
  num(S`For which $k$ is $(1,k,2)$ a combination of the columns of $${M([[1, 0], [1, 1], [1, 2]])}$?`, 1.5, "x₁(1, 1, 1) + x₂(0, 1, 2) = (1, k, 2): row 1 gives x₁ = 1, row 3 gives 1 + 2x₂ = 2 so x₂ = ½, row 2 gives k = 1 + ½ = 1.5.", undefined, 0.001),
  mc(S`$A=[\,\vec a_1\ \vec a_2\ \vec a_3\,]$ and $A(2,-1,1)=\vec 0$. Which is true?`, S`$\vec a_2=2\vec a_1+\vec a_3$`, [S`$\vec a_1=2\vec a_2+\vec a_3$`, S`$\vec a_3=2\vec a_1+\vec a_2$`, S`the columns are independent`], "2a₁ − a₂ + a₃ = 0 rearranges to a₂ = 2a₁ + a₃."),
  matVecQ([[2, -3, 1, 4, 0], [1, 1, -2, 0, 3]], [1, 2, -1, 3, -2], 0, F.row([[[[2, -3, 1, 4, 0], [1, 1, -2, 0, 3]], { row: 0, label: "A" }], [[[1], [2], [-1], [3], [-2]], { col: 0, label: "x" }]])),
  matVecQ([[2, -3, 1, 4, 0], [1, 1, -2, 0, 3]], [1, 2, -1, 3, -2], 1),
  tf(S`$P=${M([[1, 0], [0, 0]])}$ projects onto the $x$-axis. $P\vec x=(3,0)$ has exactly one solution.`, false, "P(x₁, x₂) = (x₁, 0), so every (3, t) is a solution: infinitely many.", F.mat([[1, 0], [0, 0]], { label: "P" })),
  num(S`$A$ is $3\times3$ and $A(1,0,0)=(1,1,0)$, $A(1,1,0)=(2,0,1)$, $A(1,1,1)=(0,3,3)$. Find $a_{23}$.`, 3, "Use linearity to get the columns. Ae₁ = (1, 1, 0). Ae₂ = A(1,1,0) − A(1,0,0) = (1, −1, 1). Ae₃ = A(1,1,1) − A(1,1,0) = (−2, 3, 2). Column 3 is (−2, 3, 2), so a₂₃ = 3.", F.row([[[["?", "?", "?"], ["?", "?", "?"], ["?", "?", "?"]], { col: 2, label: "A" }], [[[1], [1], [1]], { label: "x" }], "=", [[[0], [3], [3]], {}]])),
  ms(S`For which $\vec b$ does $${M([[1, 2], [2, 4], [0, 0]])}\vec x=\vec b$ have a solution?`, [S`$(1,2,0)$`, S`$(3,6,0)$`, S`$(1,1,0)$`, S`$(0,0,0)$`, S`$(2,4,1)$`], [0, 1, 3], "Both columns are multiples of (1, 2, 0), so Ax is always a multiple of (1, 2, 0)."),
  tf(S`The columns of $A$ span $\mathbb R^m$ exactly when $A\vec x=\vec b$ is consistent for every $\vec b\in\mathbb R^m$.`, true, "Ax = b consistent ⇔ b is a combination of the columns."),
  num(S`$R=${M([[0, -1], [1, 0]])}$ (a $90^\circ$ rotation). Find the first entry of $R(R(R(2,5)))$.`, 5, "Each R turns 90°: (2, 5) → (−5, 2) → (−2, −5) → (5, −2).", F.mat([[0, -1], [1, 0]], { label: "R" })),
  num(S`$A$ is $2\times3$ with $a_{ij}=i\cdot j$. Find the second entry of $A(1,-1,1)$.`, 4, "Row 2 is (2, 4, 6): 2 − 4 + 6 = 4."),
  tf(S`If the columns of $A$ are linearly dependent, then $A\vec x=\vec 0$ has a nonzero solution.`, true, "Dependent means some nontrivial weights give 0 — exactly a nonzero x with Ax = 0."),
  num(S`$A=${M([[1, 2, -1], [0, 1, 3]])}$. Find $t$ so that $A(t,\ -3,\ 1)=(-6,0)$.`, 1, "Row 1: t − 6 − 1 = −6 → t = 1 (row 2: −3 + 3 = 0 ✓)."),
  mc(S`$A$ is $m\times n$. The product $\vec y^TA\vec x$ (with $\vec y\in\mathbb R^m$, $\vec x\in\mathbb R^n$) is:`, "a single number", [S`a vector in $\mathbb R^m$`, S`a vector in $\mathbb R^n$`, S`an $m\times n$ matrix`], "(1 × m)(m × n)(n × 1) = 1 × 1."),
  num(S`Compute $\vec y^TA\vec x$ for $A=${M([[1, 2], [3, 4]])}$, $\vec x=(1,-1)$, $\vec y=(2,1)$.`, -3, "Ax = (1 − 2, 3 − 4) = (−1, −1); yᵀ(Ax) = 2(−1) + 1(−1) = −3."),
  tf(S`$A\vec x$ and $\vec x^TA^T$ contain the same numbers.`, true, "(Ax)ᵀ = xᵀAᵀ: the same entries as a row instead of a column."),
  num(S`Find $c$ so that $${M([[1, 1], [2, "c"]])}\vec x=\vec 0$ has a nonzero solution.`, 2, "The columns (1, 2) and (1, c) must be dependent: (1, c) = (1, 2), c = 2."),
];
