// 7.3 The Standard Matrix — 20 easy + 20 medium questions
import { S, F, M, col, mc, num, tf, fill, stdQ, wuQ } from "./gen7.mjs";

const easy = [
  stdQ([[4, 0], [1, -1]], 1, 0),
  stdQ([[4, 0], [1, -1]], 1, 1),
  stdQ([[2, 3], [-1, 5]], 0, 1, F.mat([[2, 3], [-1, 5]], { label: "A", cols: [1] })),
  stdQ([[1, -2, 1], [0, 3, -1]], 0, 2),
  stdQ([[0, 1, 0], [0, 0, 1], [1, 0, 0]], 2, 0),
  fill("Column j of the standard matrix is T applied to ___.", ["e_j", "ej", "eⱼ", "the jth standard basis vector"], "A = [T(e₁) … T(eₙ)]."),
  num(S`$T:\mathbb R^4\to\mathbb R^2$ is linear. How many rows does its standard matrix have?`, 2, "m × n = 2 × 4."),
  num(S`$T:\mathbb R^4\to\mathbb R^2$ is linear. How many columns does its standard matrix have?`, 4, "One per eⱼ."),
  mc("The standard matrix of the identity map on ℝ³ is:", "I₃", ["the zero matrix", "a 1 × 3 row of ones", "any invertible matrix"], "T(eⱼ) = eⱼ."),
  num(S`$T(\vec e_1)=(2,7)$, $T(\vec e_2)=(0,3)$. Find the $(2,1)$ entry of $A$.`, 7, "Column 1 = (2, 7).", F.sq([[2, 0], [7, 3]], { names: ["T(e₁)", "T(e₂)"] })),
  num(S`The rotation by $90^\circ$ has standard matrix $${M([[0, "a"], [1, 0]])}$. Find $a$.`, -1, "T(e₂) = (−1, 0)."),
  num(S`The reflection in the $x_1$-axis has standard matrix $${M([[1, 0], [0, "a"]])}$. Find $a$.`, -1, "T(e₂) = (0, −1)."),
  tf("The standard matrix of a linear map is unique.", true, "Column j must be T(eⱼ)."),
  tf("T(eⱼ) is row j of the standard matrix.", false, "It is column j."),
  num(S`$T(\vec x)=${M([[3, -1, 2]])}\vec x$. Find $T(1,1,1)$.`, 4, "3 − 1 + 2."),
  num(S`$T(x_1,x_2,x_3)=x_1-x_3$. Find the third entry of its $1\times3$ matrix.`, -1, "Coefficient of x₃."),
  stdQ([[1, 1], [1, -1], [2, 0]], 2, 0),
  mc(S`The projection of $\mathbb R^3$ onto the $x_1x_2$-plane has matrix`, S`$\operatorname{diag}(1,1,0)$`, [S`$\operatorname{diag}(0,0,1)$`, S`$I_3$`, S`$\operatorname{diag}(1,0,1)$`], "e₃ goes to 0."),
  num(S`$T$ swaps the two coordinates of $\mathbb R^2$. Find the $(1,2)$ entry of its matrix.`, 1, S`$T(\vec e_2)=\vec e_1$: $A=${M([[0, 1], [1, 0]])}$.`),
  num(S`$T(\vec e_1)=(1,2,3)$ and $T(\vec e_2)=(4,5,6)$. Find the third entry of $T(1,1)$.`, 9, "3 + 6."),
];

const medium = [
  wuQ([[1, 1], [2, 3]], [[1, 0], [0, 1]], 0, 0, F.row([[[["A"]], {}], [[[1, 1], [2, 3]], { label: "U" }], "=", [[[1, 0], [0, 1]], { label: "W" }]])),
  wuQ([[1, 1], [2, 3]], [[1, 0], [0, 1]], 1, 0),
  wuQ([[1, 0], [1, 1]], [[2, 1], [0, 1], [1, 1]], 1, 0),
  wuQ([[1, 1], [1, -1]], [[2, 0], [2, 4]], 1, 1),
  wuQ([[2, 1], [1, 1]], [[3, 1], [1, 0]], 0, 1, F.mat([[2, 1], [1, 1]], { label: "U" })),
  stdQ([[2, 0, 1], [-1, 1, 0], [0, 0, 4]], 1, 0),
  stdQ([[1, -1], [3, 0], [1, 2]], 0, 1),
  num(S`The rotation by $90^\circ$ clockwise sends $(2,3)$ to $(a,b)$. Find $b$.`, -2, S`$${M([[0, 1], [-1, 0]])}${col([2, 3])}=${col([3, -2])}$.`, F.pt([[0, 1], [-1, 0]], [2, 3])),
  num(S`The reflection in the $x_2$-axis sends $(4,-1)$ to $(a,b)$. Find $a$.`, -4, S`$${M([[-1, 0], [0, 1]])}${col([4, -1])}$.`),
  tf(S`There is a linear $T$ with $T(1,2)=(0,1)$ and $T(-2,-4)=(0,2)$.`, false, "Linearity forces T(−2,−4) = −2(0,1) = (0,−2)."),
  num(S`$T$ is linear, $T(1,1)=(2,2)$, $T(1,-1)=(0,4)$. Find the $(2,2)$ entry of $A$.`, -1, S`$T(\vec e_2)=\tfrac12[(2,2)-(0,4)]=(1,-1)$.`),
  num(S`$T$ is linear, $T(1,1)=(2,2)$, $T(1,-1)=(0,4)$. Find the $(2,1)$ entry of $A$.`, 3, S`$T(\vec e_1)=\tfrac12[(2,2)+(0,4)]=(1,3)$.`),
  num(S`$T(x_1,x_2,x_3)=(x_3,x_1,x_2)$. Find the sum of the entries of row 2 of its matrix.`, 1, S`$A=${M([[0, 0, 1], [1, 0, 0], [0, 1, 0]])}$.`),
  num(S`$T:\mathbb R^3\to\mathbb R^3$ projects onto the $x_1x_3$-plane. Find $T(4,-2,7)$'s second entry.`, 0, S`$\operatorname{diag}(1,0,1)${col([4, -2, 7])}=${col([4, 0, 7])}$.`, F.mat([[1, 0, 0], [0, 0, 0], [0, 0, 1]], { label: "A" })),
  mc(S`If $A\vec x=B\vec x$ for every $\vec x$, then`, S`$A=B$`, [S`$A=-B$`, S`$A$ and $B$ are invertible`, S`nothing follows`], S`Take $\vec x=\vec e_j$: equal columns.`),
  num(S`Every $A$ with $A(1,1)=(1,1)$ has the form $${M([["a", "1-a"], ["c", "1-c"]])}$. For $a=3$, $c=0$, find the $(1,2)$ entry.`, -2, "1 − 3."),
  tf(S`$T(x_1,x_2)=(x_1+x_2,\ 1)$ has a standard matrix.`, false, "It is not linear (T(0) ≠ 0)."),
  num(S`$T$ is the dot product with $\vec a=(3,0,-1,2)$. How many columns does its matrix have?`, 4, "1 × 4."),
  num(S`$T(1,0,0)=(1,0)$, $T(1,1,0)=(1,1)$, $T(1,1,1)=(0,0)$. Find the $(2,3)$ entry of $A$.`, -1, S`$T(\vec e_3)=T(1,1,1)-T(1,1,0)=(-1,-1)$.`),
  mc(S`$AU=W$ with $U$ invertible gives`, S`$A=WU^{-1}$`, [S`$A=U^{-1}W$`, S`$A=UW^{-1}$`, S`$A=W-U$`], "Multiply on the right by U⁻¹."),
];

export const E = easy;
export { medium as M };
