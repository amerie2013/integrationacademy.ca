// 9.3 Orthogonal Projection onto a Subspace — 20 easy + 20 medium questions
import { S, F, M, col, mc, num, tf, fill, projLineQ, projOrthQ, distQ } from "./gen9.mjs";

const easy = [
  projLineQ([1, 1], [4, 2], 0, F.pl([1, 1], [4, 2])),
  projLineQ([2, 1], [1, 3], 1),
  projLineQ([1, 0], [3, 7], 0),
  projLineQ([1, 2, 2], [3, 0, 3], 1),
  projLineQ([3, 4], [5, 0], 0),
  fill("The vector y − ŷ lies in the orthogonal ___ of W.", ["complement"], "z ∈ W⊥."),
  mc("The projection formula Σ (uᵢᵀy / uᵢᵀuᵢ) uᵢ requires the basis to be:", "orthogonal", ["unit vectors only", "the standard basis", "any basis"], "Otherwise the error is not perpendicular."),
  tf(S`If $\vec y\in W$ then $\operatorname{proj}_W\vec y=\vec y$.`, true, "Nothing to remove."),
  tf(S`If $\vec y\in W^\perp$ then $\operatorname{proj}_W\vec y=\vec 0$.`, true, "All of y is in the complement."),
  num(S`Distance from $(5,2,7)$ to the $x_1x_2$-plane?`, 7, "z = (0,0,7)."),
  num(S`Project $(5,2,7)$ onto the $x_1x_2$-plane. Give the second entry.`, 2, "(5, 2, 0)."),
  num(S`$c=\vec u^T\vec y/\vec u^T\vec u$ for $\vec u=(2,1)$, $\vec y=(4,3)$. (Decimal.)`, 2.2, "11/5.", undefined, 0.001),
  tf("The projection ŷ is the closest point of W to y.", true, "Best approximation theorem."),
  projOrthQ([[1, 0], [0, 1], [0, 0]], [3, 4, 5], 1),
  distQ([[1, 0], [0, 1], [0, 0]], [3, 4, 5]),
  mc(S`For orthonormal columns $U$, $\hat y=$`, S`$UU^T\vec y$`, [S`$U^TU\vec y$`, S`$U^T\vec y$`, S`$U\vec y$`], "c = Uᵀy."),
  num(S`$\vec y=(1,1)$, $W=\operatorname{span}\{(1,-1)\}$. Find $|\hat y|$.`, 0, "y ⟂ W."),
  tf("Uᵀ(y − ŷ) = 0 is a valid check of a projection onto Col U.", true, "The error is perpendicular to each column."),
  num(S`Distance from $(1,2)$ to the line $\operatorname{span}\{(1,0)\}$?`, 2, "z = (0, 2)."),
  projLineQ([1, 1, 1], [2, 2, 5], 0, F.v3([[[1, 1, 1], "u", "blue"], [[2, 2, 5], "y", "green"]])),
];

const medium = [
  projOrthQ([[1, 1], [1, -1], [0, 2]], [3, 1, 4], 0, F.pp([1, 1, 0], [1, -1, 2], [3, 1, 4], [11 / 3, 1 / 3, 10 / 3])),
  projOrthQ([[1, 1], [1, -1], [0, 2]], [3, 1, 4], 2),
  projOrthQ([[1, 1], [0, 1], [1, -1]], [2, 3, 0], 1),
  projOrthQ([[1, 0], [0, 1], [1, 0], [0, 1]], [1, 2, 3, 4], 2),
  projOrthQ([[1, 1], [1, -1], [1, 1], [1, -1]], [4, 0, 2, 2], 0),
  distQ([[1, 1], [1, -1], [0, 2]], [3, 1, 4]),
  distQ([[1, 1], [0, 1], [1, -1]], [2, 3, 0], F.pp([1, 0, 1], [1, 1, -1], [2, 3, 0], [8 / 3, 5 / 3, -2 / 3])),
  distQ([[1, 1], [1, -1], [1, 1], [1, -1]], [4, 0, 2, 2]),
  projOrthQ([[1, 1], [1, -1], [1, 0]], [1, 0, 0], 0),
  tf(S`$(1,1,0)$ and $(1,0,1)$ can be used directly in the orthogonal projection formula.`, false, "Their dot product is 1."),
  num(S`$W=\operatorname{span}\{(1,1,1)\}$, $\vec y=(1,2,6)$. Find the second entry of $\vec z=\vec y-\hat y$.`, -1, "ŷ = 3(1,1,1)."),
  num(S`$UU^T$ for $U=\tfrac1{\sqrt2}${M([[1], [1]])}$: find the $(1,2)$ entry. (Decimal.)`, 0.5, "½[1 1; 1 1].", undefined, 0.001),
  num(S`$\vec y=\hat y+\vec z$, $|\hat y|=3$, $|\vec z|=4$. Find $|\vec y|$.`, 5, "Pythagoras.", F.v2([[[3, 0], "ŷ", "blue"], [[0, 4], "z", "red"], [[3, 4], "y", "violet", null, true]], { xmin: -1, xmax: 4, ymin: -1, ymax: 5 })),
  mc(S`The projection matrix $UU^T$ ($U^TU=I$) satisfies`, S`$(UU^T)^2=UU^T$`, [S`$(UU^T)^2=I$`, S`$UU^T=I$ always`, S`$\det(UU^T)=1$`], "U(UᵀU)Uᵀ = UUᵀ."),
  num(S`$W=\operatorname{span}\{(2,0,0),(0,0,3)\}$. Project $(1,5,1)$ onto $W$: give the second entry.`, 0, "W is the x₁x₃-plane."),
  num(S`Same: distance from $(1,5,1)$ to $W$?`, 5, "z = (0,5,0)."),
  tf("If the basis of W is orthonormal, cᵢ = uᵢᵀy.", true, "uᵢᵀuᵢ = 1."),
  num(S`Best-approximation: $|\vec y-\hat y|^2=2$ and $\vec v\in W$ has $|\hat y-\vec v|^2=7$. Find $|\vec y-\vec v|^2$.`, 9, "2 + 7."),
  num(S`$\vec u_1=(1,2)$, $\vec u_2=(-2,1)$ span $\mathbb R^2$. Project $(3,5)$ onto $\mathbb R^2$: first entry?`, 3, "W = ℝ², so ŷ = y."),
  projLineQ([1, -1, 2], [3, 1, 0], 2),
];

export const E = easy;
export { medium as M };
