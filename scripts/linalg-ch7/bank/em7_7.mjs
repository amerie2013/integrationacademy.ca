// 7.7 The Matrix of a Transformation Relative to a Basis — 20 easy + 20 medium questions
import { S, F, M, col, mc, num, tf, fill, coordQ, bMatQ } from "./gen7.mjs";

const easy = [
  coordQ([[1, 0], [0, 2]], [3, 4], 1),
  coordQ([[1, 1], [0, 1]], [3, 2], 0, F.v2([[[1, 0], "b₁", "blue"], [[1, 1], "b₂", "red"], [[3, 2], "x", "violet"]], { xmin: -1, xmax: 4, ymin: -1, ymax: 3 })),
  coordQ([[2, 1], [1, 1]], [4, 3], 1),
  coordQ([[1, 2], [1, 1]], [5, 3], 0),
  num(S`$\mathcal B=\{(1,2),(3,4)\}$ and $[\vec x]_{\mathcal B}=(1,1)$. Find the second entry of $\vec x$.`, 6, S`$${M([[1, 3], [2, 4]])}${col([1, 1])}=${col(["1+3", "2+4"])}$.`),
  num(S`$\mathcal B=\{(1,3),(0,1)\}$ and $[\vec x]_{\mathcal B}=(2,-1)$. Find the second entry of $\vec x$.`, 5, S`$${M([[1, 0], [3, 1]])}${col([2, -1])}=${col([2, "6-1"])}$.`),
  fill("[T]_B = P⁻¹ A ___.", ["P"], "Convert in with P, apply A, convert back with P⁻¹."),
  mc("Column j of [T]_B is:", "[T(bⱼ)]_B", ["T(bⱼ)", "bⱼ", "[bⱼ]_B"], "The B-coordinates of the image of bⱼ."),
  num(S`$[T]_{\mathcal B}=\operatorname{diag}(5,2)$. Find $\det A$.`, 10, "Similar matrices share det."),
  num(S`$[T]_{\mathcal B}=\operatorname{diag}(5,2)$. Find $\operatorname{tr}A$.`, 7, "Similar matrices share trace."),
  tf("Similar matrices have the same determinant.", true, "det(P⁻¹AP) = det A."),
  tf(S`If $A=PDP^{-1}$ then $A^3=PD^3P^{-1}$.`, true, "The inner P⁻¹P cancel."),
  num(S`$T(\vec b_1)=3\vec b_1$, $T(\vec b_2)=-\vec b_2$. Find the $(2,2)$ entry of $[T]_{\mathcal B}$.`, -1, "Column 2 = [T(b₂)]_B = (0, −1).", F.v2([[[1, 0], "b₁", "blue"], [[3, 0], "T(b₁)", "blue", null, true], [[0, 1], "b₂", "red"], [[0, -1], "T(b₂)", "red", null, true]], { xmin: -1, xmax: 4, ymin: -2, ymax: 2 })),
  num(S`$T(\vec b_1)=2\vec b_1+\vec b_2$, $T(\vec b_2)=\vec b_2$. Find the $(2,1)$ entry of $[T]_{\mathcal B}$.`, 1, "Column 1 = (2, 1)."),
  num(S`$A=PDP^{-1}$, $D=\operatorname{diag}(2,3)$. Find $\det A^2$.`, 36, "(det D)² = 6²."),
  tf(S`The standard basis gives $[T]_{\mathcal E}=A$.`, true, "P = I."),
  mc(S`$[\vec x]_{\mathcal B}=$`, S`$P^{-1}\vec x$`, [S`$P\vec x$`, S`$P^T\vec x$`, S`$\vec x$`], "x = P[x]_B."),
  num(S`$P=${M([[1, 1], [0, 1]])}$. Find the $(1,2)$ entry of $P^{-1}$.`, -1, S`$P^{-1}=${M([[1, -1], [0, 1]])}$.`),
  num(S`$A$ is similar to $${M([[4, 1], [0, -1]])}$. Find $\operatorname{tr}A$.`, 3, "4 + (−1)."),
  tf("If A and B have the same trace and determinant, they are similar.", false, "[1 1; 0 1] and I share both but are not similar."),
];

const medium = [
  bMatQ([[4, -2], [1, 1]], [[1, 2], [1, 1]], 0, 0, F.v2([[[1, 1], "b₁", "blue"], [[2, 1], "b₂", "red"]], { xmin: -1, xmax: 3, ymin: -1, ymax: 2 })),
  bMatQ([[4, -2], [1, 1]], [[1, 2], [1, 1]], 1, 1),
  bMatQ([[1, 2], [2, 1]], [[1, 1], [1, -1]], 1, 1),
  bMatQ([[1, 1], [0, 2]], [[1, 1], [0, 1]], 1, 1),
  bMatQ([[3, 1], [-1, 1]], [[1, 1], [-1, 0]], 0, 1),
  bMatQ([[2, 1], [0, 3]], [[1, 0], [1, 1]], 0, 1, F.mat([[1, 0], [1, 1]], { label: "P" })),
  coordQ([[1, -3], [3, 1]], [5, 5], 0),
  coordQ([[1, 0, 1], [0, 1, 1], [0, 0, 1]], [3, 2, 1], 0),
  num(S`$A=PDP^{-1}$ with $P=${M([[1, 1], [1, 2]])}$, $D=\operatorname{diag}(1,2)$. Find the $(2,1)$ entry of $A$.`, -2, S`$PD=${M([[1, 2], [1, 4]])}$, $P^{-1}=${M([[2, -1], [-1, 1]])}$: $A=${M([["2-2", "-1+2"], ["2-4", "-1+4"]])}=${M([[0, 1], [-2, 3]])}$.`),
  num(S`$A=${M([[1, 2], [2, 1]])}=PDP^{-1}$ with $D=\operatorname{diag}(3,-1)$, $P=${M([[1, 1], [1, -1]])}$. Find the $(1,1)$ entry of $A^4$.`, 41, S`$PD^4P^{-1}=\tfrac12${M([[81, 1], [81, -1]])}${M([[1, 1], [1, -1]])}=${M([[41, 40], [40, 41]])}$.`),
  num(S`The reflection in $x_2=x_1$ with $\mathcal B=\{(1,1),(1,-1)\}$: find the $(2,2)$ entry of $[T]_{\mathcal B}$.`, -1, "(1,1) fixed, (1,−1) reversed.", F.v2([[[1, 1], "b₁", "blue"], [[1, -1], "b₂", "red"]], { xmin: -2, xmax: 2, ymin: -2, ymax: 2 })),
  num(S`The projection onto the line along $(1,3)$ with $\mathcal B=\{(1,3),(-3,1)\}$: find the $(1,1)$ entry of $[T]_{\mathcal B}$.`, 1, "b₁ is kept, b₂ goes to 0."),
  num(S`$[T]_{\mathcal B}=${M([[2, 0], [0, 3]])}$, $[\vec x]_{\mathcal B}=(1,2)$. Find the second entry of $[T(\vec x)]_{\mathcal B}$.`, 6, S`$${M([[2, 0], [0, 3]])}${col([1, 2])}=${col([2, 6])}$.`),
  num(S`With $P=${M([[1, 2], [1, 1]])}$ and $[T(\vec x)]_{\mathcal B}=(2,6)$, find the first entry of $T(\vec x)$.`, 14, S`$P${col([2, 6])}=${col(["2+12", "2+6"])}$.`),
  tf(S`If $B=P^{-1}AP$, then $A=PBP^{-1}$.`, true, "Multiply by P on the left and P⁻¹ on the right."),
  tf(S`$[T]_{\mathcal B}$ does not depend on the order of the basis vectors.`, false, "Reordering permutes rows and columns."),
  mc(S`$[T]_{\mathcal B}$ is diagonal exactly when`, S`each $T(\vec b_j)$ is a multiple of $\vec b_j$`, [S`$A$ is diagonal`, S`$P$ is diagonal`, S`$\det A\ne0$`], "Column j = (0, …, λⱼ, …, 0)."),
  num(S`$A=PDP^{-1}$, $D=\operatorname{diag}(-1,2)$. Find $\det A^3$.`, -8, "(det D)³ = (−2)³."),
  num(S`Find the trace of $${M([[5, 1], [2, 7]])}$'s $\mathcal B$-matrix for any basis $\mathcal B$.`, 12, "5 + 7."),
  num(S`$A=PDP^{-1}$ with $D=\operatorname{diag}(1,0)$. How many of $A^2=A$, $A^2=I$, $A=0$ hold in general?`, 1, "Only A² = PD²P⁻¹ = PDP⁻¹ = A."),
];

export const E = easy;
export { medium as M };
