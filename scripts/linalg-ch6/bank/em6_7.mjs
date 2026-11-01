// 6.7 Cramer's Rule, the Adjugate and Volume — 20 easy + 20 medium questions
import { S, F, M, mc, num, tf, fill, cramerQ, volumeQ } from "./gen6.mjs";

const easy = [
  cramerQ([[2, 1], [1, 3]], [5, 5], 0),
  cramerQ([[1, -1], [1, 1]], [2, 6], 1),
  cramerQ([[3, 2], [1, 1]], [7, 3], 0, F.row([[[[3, 2], [1, 1]], { label: "A" }], " ", [[[7, 2], [3, 1]], { col: 0, colFill: "#dcfce7", label: "A₁(b)" }]])),
  fill("The transpose of the cofactor matrix is called the ___ of A.", ["adjugate", "adjoint", "classical adjoint"], "adj A = Cᵀ."),
  mc("In Cramer's rule, A_i(b) is A with:", "column i replaced by b", ["row i replaced by b", "column i deleted", "b added to column i"], "That is the definition."),
  num(S`The $(1,2)$ entry of $\operatorname{adj}${M([[4, 3], [2, 5]])}$ is:`, -3, "adj [a b; c d] = [d −b; −c a]."),
  num(S`$A\operatorname{adj}A=(\det A)I$. If $\det A=5$ ($2\times2$), what is the $(1,1)$ entry of $A\operatorname{adj}A$?`, 5, "(det A)I."),
  tf("Cramer's rule applies when det A = 0.", false, "It needs det A ≠ 0."),
  volumeQ([[3, 1], [1, 2]]),
  volumeQ([[2, 0, 0], [0, 3, 0], [0, 0, 4]], F.v3([[[2, 0, 0], "a₁"], [[0, 3, 0], "a₂"], [[0, 0, 4], "a₃"]])),
  num(S`$\det A=-4$. A region of area 3 is mapped by $A$ to a region of area:`, 12, "|det A|·3."),
  tf(S`$A^{-1}=\frac1{\det A}\operatorname{adj}A$ when $\det A\ne0$.`, true, "From A adj A = (det A)I."),
  num(S`Area of the triangle with vertices $(0,0)$, $(4,0)$, $(1,3)$?`, 6, "½|4·3 − 0·1|."),
  cramerQ([[1, 2], [3, 4]], [5, 6], 1),
  mc(S`Cramer's rule for $n$ unknowns needs how many determinants?`, S`$n+1$`, [S`$n$`, S`$2n$`, S`$n^2$`], "det A and one det Aᵢ(b) per unknown."),
  num(S`$\operatorname{adj}A=${M([[3, -1], [-2, 1]])}$ and $\det A=1$. Find $a_{11}$.`, 1, "A = (A⁻¹)⁻¹ with A⁻¹ = adj A: A = [[1, 1], [2, 3]]."),
  tf("Volume is |det|, so it is never negative.", true, "The sign records orientation only."),
  cramerQ([[2, 0], [0, 5]], [6, 10], 1),
  num(S`The unit square is mapped by $${M([[2, 1], [0, 3]])}$ to a parallelogram of area:`, 6, "det = 6."),
  tf(S`$\operatorname{adj}I=I$.`, true, "All off-diagonal cofactors are 0 and diagonal ones are 1."),
];

const medium = [
  cramerQ([[1, 1, 0], [0, 1, 1], [1, 0, 1]], [3, 5, 4], 2),
  cramerQ([[2, 1, 1], [1, 2, 1], [1, 1, 2]], [4, 4, 4], 0),
  cramerQ([[1, 2, 0], [0, 1, 3], [2, 0, 1]], [5, 7, 4], 1, F.mat([[1, 2, 0], [0, 1, 3], [2, 0, 1]], { label: "A" })),
  num(S`For $A=${M([[1, 0, 2], [0, 1, 1], [1, 1, 0]])}$, find the $(1,1)$ entry of $\operatorname{adj}A$.`, -1, "C₁₁ = det[[1, 1], [1, 0]] = −1."),
  num(S`For the same $A$, find the $(1,2)$ entry of $\operatorname{adj}A$ (that is, $C_{21}$).`, 2, "C₂₁ = −det[[0, 2], [1, 0]] = −(0 − 2) = 2."),
  num(S`For the same $A$, $\det A=$?`, -3, "Along row 1: 1(0 − 1) − 0 + 2(0 − 1) = −3."),
  volumeQ([[1, 2, 0], [0, 1, 2], [2, 0, 1]]),
  volumeQ([[1, 1, 1], [1, -1, 0], [0, 1, -1]], F.v3([[[1, 1, 1], "a₁"], [[1, -1, 0], "a₂"], [[0, 1, -1], "a₃"]])),
  num(S`Area of the triangle with vertices $(1,1)$, $(4,2)$, $(2,5)$?`, 5.5, "Edges (3, 1), (1, 4): ½|12 − 1|.", undefined, 0.001),
  tf(S`$\det(\operatorname{adj}A)=(\det A)^{n-1}$ for invertible $n\times n$ $A$.`, true, "Take det of A adj A = (det A)I."),
  num(S`$A$ is $3\times3$ with $\det A=3$. $\det(\operatorname{adj}A)=$?`, 9, "3²."),
  mc(S`By Cramer's rule, $x_1$ for $${M([["a", "b"], ["c", "d"]])}\vec x=(e,f)$ is:`, S`$\dfrac{ed-bf}{ad-bc}$`, [S`$\dfrac{af-ce}{ad-bc}$`, S`$\dfrac{ed+bf}{ad+bc}$`, S`$\dfrac{ad-bc}{ed-bf}$`], "det [[e, b], [f, d]] / det A."),
  num(S`$\det A=2$ ($2\times2$). A circle of radius 3 maps to an ellipse of area $k\pi$. Find $k$.`, 18, "2·9π."),
  cramerQ([[3, -1], [2, 4]], [5, 8], 0),
  tf("Cramer's rule is the fastest method for large systems.", false, "Row reduction is far faster."),
  num(S`For which $k$ does Cramer's rule fail for $${M([["k", 2], [3, 6]])}$?`, 1, "det = 6k − 6 = 0."),
  num(S`The volume of the box on $(1,0,0)$, $(1,2,0)$, $(1,1,c)$ is 8. Find $c\gt0$.`, 4, "det = 1·2·c."),
  cramerQ([[1, 1, 1], [1, 2, 3], [1, 3, 6]], [3, 6, 10], 2),
  tf(S`If $A$ has integer entries and $\det A=1$, then $A^{-1}=\operatorname{adj}A$ has integer entries.`, true, "Cofactors of an integer matrix are integers."),
  num(S`The parallelogram on $(a,1)$ and $(1,a)$ has area 8. Find $a\gt1$.`, 3, "|det[[a, 1], [1, a]]| = |a² − 1| = 8, so a² = 9 and a = 3."),
];

export const E = easy;
export { medium as M };
