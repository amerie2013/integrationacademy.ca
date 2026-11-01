// 7.5 Composition and Inverse Transformations — 20 hard questions
import { S, F, M, col, mc, num, tf, ms, compQ, invMapQ } from "./gen7.mjs";

export const TOPIC = "7.5 Composition and Inverse Transformations";
export const Q = [
  compQ([[1, 2, 0], [0, 1, 3]], [[2, 1], [0, -1], [1, 1]], 1, 1, F.row([[[[1, 2, 0], [0, 1, 3]], { label: "B (2 × 3)" }], [[[2, 1], [0, -1], [1, 1]], { label: "A (3 × 2)" }]])),
  compQ([[2, 1], [0, -1], [1, 1]], [[1, 2, 0], [0, 1, 3]], 2, 2),
  invMapQ([[1, 2, 0], [0, 1, 1], [1, 3, 2]], [3, 2, 6], 0, F.mat([[1, 2, 0], [0, 1, 1], [1, 3, 2]], { label: "A" })),
  invMapQ([[1, 2, 0], [0, 1, 1], [1, 3, 2]], [3, 2, 6], 2),
  invMapQ([[2, 0, 1], [1, 1, 0], [0, 1, 1]], [3, 2, 2], 1),
  num(S`$(S\circ T)^{-1}$ where $T$ has matrix $${M([[1, 1], [0, 1]])}$ and $S$ has $${M([[2, 0], [0, 3]])}$: find its $(1,2)$ entry. (Decimal.)`, -0.3333, S`$A^{-1}B^{-1}=${M([[1, -1], [0, 1]])}${M([["\\tfrac12", 0], [0, "\\tfrac13"]])}=${M([["\\tfrac12", "-\\tfrac13"], [0, "\\tfrac13"]])}$.`, undefined, 0.001),
  num(S`$R_{45^\circ}FR_{-45^\circ}$ with $F=${M([[1, 0], [0, -1]])}$: find its $(2,1)$ entry.`, 1, S`$\tfrac12${M([[1, 1], [1, -1]])}${M([[1, 1], [-1, 1]])}=${M([[0, 1], [1, 0]])}$.`, F.sq([[0, 1], [1, 0]])),
  num(S`$S$ has matrix $${M([[1, 2], [1, 3]])}$ and $S\circ T$ has $${M([[3, 5], [4, 7]])}$. Find the $(2,2)$ entry of $T$'s matrix.`, 2, S`$BA=C$, so $A=B^{-1}C=${M([[3, -2], [-1, 1]])}${M([[3, 5], [4, 7]])}=${M([["9-8", "15-14"], ["-3+4", "-5+7"]])}=${M([[1, 1], [1, 2]])}$.`),
  ms("Which pairs commute (ST = TS)?", ["two rotations", "a rotation and 3I", "a shear and a rotation by 90°", "reflections in two different lines"], [0, 1], "Rotations commute with each other and with scalar multiples; the others generally do not."),
  tf("A linear map ℝ³ → ℝ² followed by ℝ² → ℝ³ can be invertible on ℝ³.", false, "Rank of the 3 × 3 product is at most 2."),
  num(S`The rank of the product of a $3\times2$ and a $2\times3$ matrix is at most`, 2, "rank(BA) ≤ min(rank B, rank A) ≤ 2.", F.row([[[["*", "*"], ["*", "*"], ["*", "*"]], { label: "3 × 2" }], [[["*", "*", "*"], ["*", "*", "*"]], { label: "2 × 3" }]])),
  num(S`$T$ reflects in $x_2=x_1$. Find $\det$ of the matrix of $T\circ T\circ T$.`, -1, "T∘T = I, so T³ = T; det = −1."),
  num(S`Find the smallest $n\ge1$ with $H^n=I$ for the shear $H=${M([[1, 1], [0, 1]])}$, or $0$ if none.`, 0, S`$H^n=${M([[1, "n"], [0, 1]])}\ne I$ for $n\ge1$.`),
  mc(S`$A$ and $B$ are $n\times n$ with $AB=I$. Then`, S`$BA=I$ as well`, [S`$BA$ may differ from $I$`, S`$A=B$`, S`$A=I$`], "For square matrices a one-sided inverse is two-sided."),
  num(S`$T(\vec x)=${M([[1, 1, 1], [0, 1, 1], [0, 0, 1]])}\vec x$. Find the sum of the entries of $T^{-1}$'s matrix.`, 1, S`$A^{-1}=${M([[1, -1, 0], [0, 1, -1], [0, 0, 1]])}$: sum 1.`, F.mat([[1, 1, 1], [0, 1, 1], [0, 0, 1]], { label: "A" })),
  tf("(S ∘ T)⁻¹ = S⁻¹ ∘ T⁻¹ for invertible maps.", false, "It is T⁻¹ ∘ S⁻¹."),
  num(S`$T$ projects onto the $x_1$-axis and $S$ rotates by $90^\circ$. Find the $(2,1)$ entry of $S\circ T$.`, 1, S`$${M([[0, -1], [1, 0]])}${M([[1, 0], [0, 0]])}=${M([[0, 0], [1, 0]])}$.`),
  num(S`For the same maps, find the $(1,2)$ entry of $T\circ S$.`, -1, S`$${M([[1, 0], [0, 0]])}${M([[0, -1], [1, 0]])}=${M([[0, -1], [0, 0]])}$.`),
  invMapQ([[1, 1], [1, 2]], [0, 1], 1),
  num(S`$T$ is a rotation by $\theta$ with $T\circ T\circ T\circ T=$ identity and $T\ne$ identity, $T\circ T\ne$ identity. Find $\theta$ in $(0^\circ,180^\circ)$.`, 90, "Order 4: 360/4.", F.sq([[0, -1], [1, 0]])),
];
