// 9.1 Orthogonal Complements — 20 easy + 20 medium questions
import { S, F, M, col, mc, num, tf, fill, dotQ, perpDimQ } from "./gen9.mjs";

const easy = [
  dotQ([1, 2, -1], [3, 0, 2]),
  dotQ([2, -1, 3], [1, 2, 0]),
  dotQ([1, 1, 1, 1], [2, -1, 0, 3]),
  tf(S`$(2,-1,0)$ is in $W^\perp$ for $W=\operatorname{span}\{(1,2,5)\}$.`, true, "2 − 2 + 0 = 0."),
  tf(S`$(1,1,1)$ is in $W^\perp$ for $W=\operatorname{span}\{(1,2,3)\}$.`, false, "1 + 2 + 3 = 6 ≠ 0."),
  num(S`$W$ is a 2-dimensional subspace of $\mathbb R^5$. Find $\dim W^\perp$.`, 3, "5 − 2."),
  num(S`$W$ is a line through 0 in $\mathbb R^3$. Find $\dim W^\perp$.`, 2, "A plane.", F.v3([[[1, 2, -1], "w", "blue"], [[-2, 1, 0], "", "green"], [[1, 0, 1], "", "green"]])),
  fill("The orthogonal complement of Col A is the null space of ___.", ["A^T", "Aᵀ", "A transpose", "the transpose of A"], "(Col A)⊥ = Nul Aᵀ."),
  mc("(Row A)⊥ equals:", "Nul A", ["Col A", "Nul Aᵀ", "Row A"], "Ax = 0 says x is perpendicular to every row."),
  tf(S`$W\cap W^\perp=\{\vec 0\}$.`, true, "x·x = 0 forces x = 0."),
  tf("W⊥ is always a subspace.", true, "It is a null space."),
  num(S`The complement of $W=\operatorname{span}\{(1,0,0),(0,1,0)\}$ is spanned by $(0,0,k)$. Give $k$ for a unit vector with $k\gt0$.`, 1, "The x₃-axis."),
  num(S`For which $t$ is $(1,t,2)\perp(3,1,-1)$?`, -1, "3 + t − 2 = 0."),
  num(S`For which $t$ is $(t,1,1)\perp(2,-4,2)$?`, 1, "2t − 4 + 2 = 0."),
  tf(S`Two vectors in $W^\perp$ are always orthogonal to each other.`, false, "W⊥ is a subspace; its vectors need not be perpendicular to each other."),
  perpDimQ([[1, 0], [1, 1], [0, 1]], F.mat([[1, 0], [1, 1], [0, 1]], { label: "A" })),
  perpDimQ([[1, 2], [2, 4], [3, 6]]),
  mc(S`$A\vec x=\vec b$ is consistent exactly when $\vec b$ is orthogonal to`, S`$\operatorname{Nul}A^T$`, [S`$\operatorname{Nul}A$`, S`$\operatorname{Row}A$`, S`$\operatorname{Col}A$`], "Col A = (Nul Aᵀ)⊥."),
  num(S`$\dim W+\dim W^\perp$ for a subspace of $\mathbb R^6$?`, 6, "Always n."),
  tf(S`$(W^\perp)^\perp=W$.`, true, "Finite-dimensional fact."),
];

const medium = [
  num(S`$W^\perp$ for $W=\operatorname{span}\{(1,-1,0),(0,1,-1)\}$ is spanned by $(1,a,b)$. Find $a+b$.`, 2, S`$x_1=x_2=x_3$: $(1,1,1)$.`, F.v3([[[1, -1, 0], "w₁", "blue"], [[0, 1, -1], "w₂", "red"], [[1, 1, 1], "n", "green"]])),
  num(S`$W^\perp$ for $W=\operatorname{span}\{(1,2,3)\}$ contains $(1,1,c)$. Find $c$.`, -1, "1 + 2 + 3c = 0."),
  num(S`$\operatorname{Nul}${M([[1, 1, 1], [1, 2, 3]])}$ is spanned by $(1,a,1)$. Find $a$.`, -2, S`$${M([[1, 1, 1], [1, 2, 3]])}${col([1, -2, 1])}=${col(["1-2+1", "1-4+3"])}=\vec 0$.`),
  num(S`For $A=${M([[1, 0], [1, 1], [0, 1]])}$, $(\operatorname{Col}A)^\perp=\operatorname{span}\{(1,a,1)\}$. Find $a$.`, -1, S`$A^T${col([1, -1, 1])}=${col(["1-1+0", "0-1+1"])}=\vec 0$.`),
  num(S`For which $k$ is $(2,k,1)\in\operatorname{Col}${M([[1, 0], [1, 1], [0, 1]])}$?`, 3, "b₁ − b₂ + b₃ = 0."),
  perpDimQ([[1, 0, 2], [0, 1, -1], [1, 1, 1], [2, 1, 3]]),
  perpDimQ([[1, 1, 1], [1, 2, 3], [1, 3, 5]]),
  num(S`$W\subseteq\mathbb R^4$, $W^\perp=\operatorname{span}\{(1,0,1,0),(0,1,0,1)\}$. Find $\dim W$.`, 2, "4 − 2."),
  mc(S`$W=\{\vec x\in\mathbb R^3: x_1-x_2+2x_3=0\}$. Then $W^\perp=$`, S`$\operatorname{span}\{(1,-1,2)\}$`, [S`$\operatorname{span}\{(1,1,0)\}$`, S`$W$`, S`$\{\vec 0\}$`], "The normal vector."),
  tf(S`If $\vec x\perp\vec w_1$ and $\vec x\perp\vec w_2$, then $\vec x\perp(3\vec w_1-5\vec w_2)$.`, true, "Linearity of the dot product."),
  num(S`Split $\vec y=(3,1)$ along $W=\operatorname{span}\{(1,1)\}$: $\vec y=\hat y+\vec z$. Find the first entry of $\vec z$.`, 1, "ŷ = (2, 2).", F.pl([1, 1], [3, 1])),
  num(S`Split $\vec y=(1,5)$ along $W=\operatorname{span}\{(2,1)\}$. Find the first entry of $\hat y$. (Decimal.)`, 2.8, "c = 7/5; ŷ = (14/5, 7/5).", F.pl([2, 1], [1, 5]), 0.001),
  num(S`$A$ is $5\times3$ of rank 3. Find $\dim\operatorname{Nul}A^T$.`, 2, "5 − 3."),
  tf("Row A and Nul A can share a nonzero vector.", false, "They are orthogonal complements."),
  num(S`Consistency condition for $A=${M([[1, 1], [1, 2], [1, 3]])}$ is $b_1+pb_2+b_3=0$. Find $p$.`, -2, S`$\operatorname{Nul}A^T=\operatorname{span}\{(1,-2,1)\}$.`),
  mc("In ℝ³, the orthogonal complement of a plane through 0 is:", "a line through 0", ["a plane", "a point other than 0", "all of ℝ³"], "dim 3 − 2 = 1."),
  num(S`$W^\perp$ for $W=\operatorname{span}\{(1,1,0,1),(0,1,1,2)\}$ contains $(1,-1,1,c)$. Find $c$.`, 0, "Dot with (1,1,0,1): 1 − 1 + 0 + c = 0."),
  tf(S`$\operatorname{Nul}A=\{\vec 0\}$ implies $\operatorname{Row}A=\mathbb R^n$.`, true, "Complements: dim Row A = n."),
  num(S`$\vec n=(1,2,2)$ is normal to the plane $W$. Find $\dim W^\perp$.`, 1, "span{n}."),
  num(S`For which $k$ is $(1,2,k)$ orthogonal to both $(1,0,1)$ and $(0,1,2)$?`, -1, "1 + k = 0 (and then 2 + 2k = 0 also holds)."),
];

export const E = easy;
export { medium as M };
