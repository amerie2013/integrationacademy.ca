// 9.5 The Gram–Schmidt Process — 20 easy + 20 medium questions
import { S, F, M, col, mc, num, tf, fill, gsQ, dot } from "./gen9.mjs";

const easy = [
  gsQ([[1, 1], [2, 0]], 1, 0, F.gs([1, 1], [2, 0])),
  gsQ([[1, 1], [2, 0]], 1, 1),
  gsQ([[3, 1], [1, 2]], 1, 1),
  gsQ([[1, 0], [3, 2]], 1, 1),
  gsQ([[2, 0], [1, 1]], 1, 0, F.gs([2, 0], [1, 1])),
  num(S`$\vec w_1=(1,1)$, $\vec v_2=(4,2)$. Find $\vec v_2^T\vec w_1/\vec w_1^T\vec w_1$.`, 3, "6/2."),
  fill("Gram–Schmidt turns a basis into an ___ basis of the same subspace.", ["orthogonal", "orthonormal"], "Subtract projections."),
  tf("Gram–Schmidt keeps the first vector unchanged.", true, "w₁ = v₁."),
  tf("Rescaling a wₖ by a nonzero number destroys orthogonality.", false, "Orthogonality and span are unchanged."),
  mc("A zero vector appearing in Gram–Schmidt means:", "the inputs were dependent", ["an arithmetic error", "the space is ℝⁿ", "vₖ = 0"], "vₖ was in the span of the earlier vectors."),
  num(S`Gram–Schmidt gave $\vec w_1=(1,2,0)$, $\vec w_2=(2,k,5)$. Find $k$.`, -1, "w₁·w₂ = 2 + 2k = 0."),
  num(S`Normalise $(2,-1,2)$: first entry. (Decimal.)`, 0.6667, "2/3.", undefined, 0.001),
  num(S`Normalise $(0,3,4)$: third entry. (Decimal.)`, 0.8, "4/5.", undefined, 0.001),
  gsQ([[1, 0, 1], [1, 1, 1]], 1, 1),
  gsQ([[1, 1, 1], [0, 1, 2]], 1, 0),
  tf("The span of w₁, …, wₖ equals the span of v₁, …, vₖ.", true, "At every stage."),
  num(S`How many nonzero vectors does Gram–Schmidt produce from 4 vectors spanning a 3-dimensional space?`, 3, "One per dimension."),
  mc("The coefficient subtracted in step k for wⱼ is:", "vₖᵀwⱼ / wⱼᵀwⱼ", ["vₖᵀvⱼ / vⱼᵀvⱼ", "wⱼᵀwⱼ / vₖᵀwⱼ", "|vₖ|"], "Projection onto the NEW vectors."),
  tf("Gram–Schmidt leaves an already orthogonal set unchanged.", true, "All coefficients are 0."),
  gsQ([[1, 2, 2], [1, 0, 0]], 1, 0),
];

const medium = [
  gsQ([[1, 1, 0], [1, 0, 1], [0, 1, 1]], 2, 0, F.v3([[[1, 1, 0], "w₁", "blue"], [[1, -1, 2], "w₂", "red"], [[-1, 1, 1], "w₃", "green"]])),
  gsQ([[1, 1, 0], [1, 0, 1], [0, 1, 1]], 1, 2),
  gsQ([[1, 0, 1], [1, 1, 0], [0, 1, 1]], 2, 1),
  gsQ([[1, 1, 1, 1], [1, 2, 0, 1], [2, 1, 1, 0]], 1, 2),
  gsQ([[1, 1, 1, 1], [1, 2, 0, 1], [2, 1, 1, 0]], 2, 3),
  gsQ([[1, 1, 0, 0], [1, 0, 1, 0], [1, 0, 0, 1]], 2, 3),
  gsQ([[1, 1, 0, 1], [1, 0, 1, 1]], 1, 1),
  gsQ([[2, 1, 2], [1, 1, 1]], 1, 1),
  gsQ([[1, 2, 1], [2, 4, 2], [1, 0, 1]], 1, 0),
  gsQ([[1, 1, 1], [1, 0, 0], [2, 1, 1]], 2, 0),
  num(S`Orthogonal basis of $x_1+x_2-x_3=0$ starting with $(-1,1,0)$: the second vector (rescaled) is $(1,1,c)$. Find $c$.`, 2, S`$(1,0,1)+\tfrac12(-1,1,0)=(\tfrac12,\tfrac12,1)$.`),
  num(S`Orthogonal basis of $x_1+x_2+x_3=0$ starting with $(1,-1,0)$: second vector $(1,1,c)$. Find $c$.`, -2, "Perpendicular to (1,−1,0) and in the plane."),
  num(S`$W^TW$ for the Gram–Schmidt output $(1,1,0),(1,-1,2),(-1,1,1)$: find the $(2,2)$ entry.`, 6, "1 + 1 + 4.", F.mat([[2, 0, 0], [0, 6, 0], [0, 0, 3]], { label: "WᵀW" })),
  tf(S`Changing the order of the input vectors can change the Gram–Schmidt output.`, true, "E.g. (2,0),(1,1) vs (1,1),(2,0)."),
  num(S`Orthonormalise $(1,1,1,1)$, $(1,1,-1,-1)$: the second $\vec q$ has first entry: (Decimal.)`, 0.5, "Already orthogonal; divide by 2.", undefined, 0.001),
  mc("Gram–Schmidt applied to the columns of A produces the Q of:", "the QR factorisation", ["the LU factorisation", "A⁻¹", "Aᵀ"], "Normalised Gram–Schmidt vectors."),
  num(S`$\vec v_1=(3,4)$, $\vec v_2=(1,7)$: $\vec w_2$ rescaled to integers is $(-4,k)$. Find $k$.`, 3, "(−68/25, 51/25) = 17/25 (−4, 3)."),
  num(S`Gram–Schmidt on $(1,0,0),(1,1,0),(1,1,1)$: find the third entry of $\vec w_3$.`, 1, "w₃ = e₃."),
  tf("Gram–Schmidt can be applied to any finite set of vectors (dependent ones produce zeros).", true, "Drop the zero vectors."),
  num(S`$|\vec w_2|^2$ for $\vec v_1=(1,1)$, $\vec v_2=(2,0)$?`, 2, "w₂ = (1,−1)."),
];

export const E = easy;
export { medium as M };
