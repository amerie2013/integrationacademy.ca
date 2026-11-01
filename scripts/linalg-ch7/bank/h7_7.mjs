// 7.7 The Matrix of a Transformation Relative to a Basis — 20 hard questions
import { S, F, M, col, mc, num, tf, ms, coordQ, bMatQ } from "./gen7.mjs";

export const TOPIC = "7.7 The Matrix of a Transformation Relative to a Basis";
export const Q = [
  bMatQ([[2, 0, 0], [0, 1, 1], [0, 1, 1]], [[1, 0, 0], [0, 1, 1], [0, 1, -1]], 1, 1, F.mat([[1, 0, 0], [0, 1, 1], [0, 1, -1]], { label: "P" })),
  bMatQ([[2, 0, 0], [0, 1, 1], [0, 1, 1]], [[1, 0, 0], [0, 1, 1], [0, 1, -1]], 2, 2),
  bMatQ([[5, -2], [6, -2]], [[1, 2], [2, 3]], 0, 0),
  bMatQ([[5, -2], [6, -2]], [[1, 2], [2, 3]], 1, 1, F.v2([[[1, 2], "b₁", "blue"], [[2, 3], "b₂", "red"]], { xmin: -1, xmax: 3, ymin: -1, ymax: 4 })),
  bMatQ([[3, 1], [-1, 1]], [[1, 1], [-1, 0]], 1, 1),
  bMatQ([[1, 1, 0], [0, 1, 1], [0, 0, 1]], [[1, 1, 0], [0, 1, 0], [0, 0, 1]], 0, 2),
  coordQ([[1, 1, 1], [0, 1, 1], [0, 0, 1]], [2, 3, 4], 1, F.mat([[1, 1, 1], [0, 1, 1], [0, 0, 1]], { label: "P" })),
  coordQ([[2, 1], [5, 3]], [1, 1], 0),
  num(S`Compute the $(1,2)$ entry of $A^{10}$ for $A=${M([[1, 2], [2, 1]])}$.`, 29524, S`$A=PDP^{-1}$, $D=\operatorname{diag}(3,-1)$: $A^{10}=\tfrac12${M([["3^{10}+1", "3^{10}-1"], ["3^{10}-1", "3^{10}+1"]])}$, $\tfrac12(59049-1)$.`),
  num(S`$A=${M([[4, -2], [1, 1]])}=PDP^{-1}$, $P=${M([[1, 2], [1, 1]])}$, $D=\operatorname{diag}(2,3)$. Find the $(2,1)$ entry of $A^5$.`, 211, S`$PD^5=${M([[32, 486], [32, 243]])}$; times $P^{-1}=${M([[-1, 2], [1, -1]])}$: $(2,1)$ entry $-32+243$.`, F.mat([[454, -422], [211, -179]], { label: "A⁵" })),
  num(S`The reflection in $x_2=2x_1$: with $\mathcal B=\{(1,2),(-2,1)\}$, $A=P\operatorname{diag}(1,-1)P^{-1}$. Find $a_{12}$. (Decimal.)`, 0.8, S`$A=\tfrac15${M([[-3, 4], [4, 3]])}$.`, F.v2([[[1, 2], "b₁ fixed", "blue"], [[-2, 1], "b₂ reversed", "red"]], { xmin: -3, xmax: 2, ymin: -1, ymax: 3 }), 0.001),
  tf(S`$${M([[1, 1], [0, 1]])}$ is similar to $I$.`, false, "P⁻¹IP = I for every P."),
  tf(S`$${M([[2, 0], [0, 3]])}$ and $${M([[3, 0], [0, 2]])}$ are similar.`, true, S`Swap the basis: $P=${M([[0, 1], [1, 0]])}$.`),
  ms("Which are invariant under A ↦ P⁻¹AP?", ["det A", "trace A", "the (1,1) entry", "rank A"], [0, 1, 3], "Entries change; det, trace, rank do not."),
  num(S`$\operatorname{tr}A=5$, $\det A=6$, $A$ is $2\times2$ and diagonalisable. Its diagonal form has larger entry`, 3, "λ₁ + λ₂ = 5, λ₁λ₂ = 6: 2 and 3."),
  mc(S`For $A=${M([[3, 1], [-1, 1]])}$, the best a basis can do is $[T]_{\mathcal B}=${M([[2, 1], [0, 2]])}$. This shows`, "not every matrix is similar to a diagonal one", ["A is singular", "every basis gives this matrix", "A = 2I"], "A diagonal form would be 2I, and only 2I is similar to 2I."),
  num(S`$T(\vec b_1)=\vec b_1+\vec b_2$, $T(\vec b_2)=2\vec b_1$. Find $\det[T]_{\mathcal B}$.`, -2, S`$[T]_{\mathcal B}=${M([[1, 2], [1, 0]])}$: $0-2$.`),
  num(S`For the same $T$, find $\det A$ (the standard matrix).`, -2, "Similar matrices share det."),
  coordQ([[1, -1, 0], [1, 1, 0], [0, 0, 2]], [4, 2, 6], 1),
  num(S`$[\vec x]_{\mathcal B}=(1,-1,2)$ with $\mathcal B=\{(1,0,0),(1,1,0),(1,1,1)\}$. Find the first entry of $\vec x$.`, 2, S`$${M([[1, 1, 1], [0, 1, 1], [0, 0, 1]])}${col([1, -1, 2])}=${col(["1-1+2", "0-1+2", "0+0+2"])}$.`, F.mat([[1, 1, 1], [0, 1, 1], [0, 0, 1]], { label: "P" })),
];
