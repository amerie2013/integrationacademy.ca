// 9.5 The Gram–Schmidt Process — 20 hard questions
import { S, F, M, col, mc, num, tf, ms, gsQ } from "./gen9.mjs";

export const TOPIC = "9.5 The Gram–Schmidt Process";
export const Q = [
  gsQ([[1, 1, 1, 0], [1, 0, 1, 1], [0, 1, 1, 1]], 2, 0, F.mat([[1, 1, 0], [1, 0, 1], [1, 1, 1], [0, 1, 1]], { label: "V" })),
  gsQ([[1, 1, 1, 0], [1, 0, 1, 1], [0, 1, 1, 1]], 2, 3),
  gsQ([[1, 2, 0, 2], [3, 1, 1, 0], [0, 0, 1, 1]], 1, 0),
  gsQ([[2, 1, 0], [1, 2, 1], [0, 1, 2]], 2, 2, F.mat([[2, 1, 0], [1, 2, 1], [0, 1, 2]], { label: "columns" })),
  gsQ([[1, -1, 1], [1, 1, 1], [1, 0, 0]], 2, 0),
  gsQ([[1, 1, 1, 1, 1], [1, 2, 3, 4, 5]], 1, 0),
  num(S`Orthonormal basis of $\operatorname{Nul}${M([[1, 1, 1, 1]])}$ via Gram–Schmidt on $(1,-1,0,0)$, $(1,0,-1,0)$, $(1,0,0,-1)$: the third vector rescaled is $(1,1,1,c)$. Find $c$.`, -3, "Perpendicular to the first two and in the null space.", F.mat([[1, 1, 1, 1]], { label: "A" })),
  ms("Which statements about Gram–Schmidt are true?", ["wₖ ⟂ w₁, …, wₖ₋₁", "wₖ ⟂ vₖ", "span{w₁..wₖ} = span{v₁..vₖ}", "|wₖ| ≤ |vₖ|"], [0, 2, 3], "wₖ is vₖ minus a projection, so it is shorter, but not ⟂ vₖ."),
  num(S`$|\vec w_2|$ when $\vec v_2$ has length 5 and its projection onto $\vec w_1$ has length 3.`, 4, "Pythagoras."),
  tf("If v₁, v₂ are orthogonal, then w₂ = v₂.", true, "Coefficient 0."),
  num(S`Gram–Schmidt on $(1,1),(1,-1),(3,4)$: how many nonzero output vectors?`, 2, "Three vectors in ℝ² are dependent."),
  num(S`Gram–Schmidt on $(1,1),(1,-1),(3,4)$: find $|\vec w_3|$.`, 0, "w₃ = 0."),
  mc("Normalising at the end versus at each step gives:", "the same orthonormal basis", ["different bases", "a non-orthogonal set", "the zero vector"], "Scaling does not change directions."),
  num(S`Gram–Schmidt on $(1,1,0),(0,1,1)$: $\vec w_2$ rescaled is $(-1,1,c)$. Find $c$.`, 2, "(0,1,1) − ½(1,1,0) = (−½, ½, 1).", F.v3([[[1, 1, 0], "w₁", "blue"], [[-1, 1, 2], "w₂", "red"]])),
  num(S`Find the cosine of the angle between $\vec v_2=(0,1,1)$ and $\vec w_2=(-\tfrac12,\tfrac12,1)$. (3 decimals)`, 0.866, "v₂·w₂ = 1.5; |v₂| = √2, |w₂| = √1.5.", undefined, 0.001),
  gsQ([[0, 1, 1], [1, 0, 1], [1, 1, 0]], 2, 2),
  tf("The Gram–Schmidt vectors of the columns of an upper-triangular matrix with positive diagonal are multiples of e₁, e₂, ….", true, "Column k lies in span{e₁..eₖ}."),
  num(S`$\vec v_1=(1,0,0)$, $\vec v_2=(5,2,0)$, $\vec v_3=(7,8,3)$. Find $|\vec w_3|$.`, 3, "w₃ = (0,0,3)."),
  num(S`Same input: find $|\vec w_2|$.`, 2, "w₂ = (0,2,0).", F.v3([[[1, 0, 0], "v₁", "blue"], [[5, 2, 0], "v₂", "red"], [[7, 8, 3], "v₃", "green"]], { len: 8 })),
  gsQ([[1, 2, 3], [3, 2, 1]], 1, 1),
];
