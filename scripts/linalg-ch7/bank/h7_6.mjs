// 7.6 Kernel and Range; One-to-One and Onto — 20 hard questions
import { S, F, M, col, mc, num, tf, ms, kerDimQ, rangeDimQ, oneOneQ, ontoQ } from "./gen7.mjs";

export const TOPIC = "7.6 Kernel and Range; One-to-One and Onto";
export const Q = [
  kerDimQ([[1, 2, 0, 1, 3], [2, 4, 1, 3, 7], [1, 2, 1, 2, 4]], F.mat([[1, 2, 0, 1, 3], [2, 4, 1, 3, 7], [1, 2, 1, 2, 4]], { label: "A (3 × 5)" })),
  rangeDimQ([[1, 2, 0, 1, 3], [2, 4, 1, 3, 7], [1, 2, 1, 2, 4]]),
  oneOneQ([[1, 0, 1], [2, 1, 3], [1, 1, 2], [0, 1, 1]]),
  ontoQ([[1, 1, 0, 2], [0, 1, 1, 1], [1, 2, 1, 4]]),
  ontoQ([[1, 1, 0, 2], [0, 1, 1, 1], [1, 2, 2, 3]], F.mat([[1, 1, 0, 2], [0, 1, 1, 1], [1, 2, 2, 3]], { label: "A" })),
  num(S`For which $h$ is $${M([[1, 2, "h"], [0, 1, 1], [1, 3, 4]])}\vec x$ not one-to-one?`, 3, S`$R_3-R_1$, then $R_3-R_2$: last row $(0,0,3-h)$.`, F.mat([[1, 2, "h"], [0, 1, 1], [0, 0, "3 − h"]], { label: "echelon form" })),
  num(S`For $h=3$ above, $\ker T=\operatorname{span}\{(-1,-1,c)\}$. Find $c$.`, 1, S`$${M([[1, 2, 3], [0, 1, 1], [1, 3, 4]])}${col([-1, -1, 1])}=${col(["-1-2+3", "0-1+1", "-1-3+4"])}=\vec 0$.`),
  num(S`$\ker T$ for $${M([[1, 2, 3], [4, 5, 6]])}\vec x$ is spanned by $(1,b,1)$. Find $b$.`, -2, S`$${M([[1, 2, 3], [4, 5, 6]])}${col([1, -2, 1])}=${col(["1-4+3", "4-10+6"])}=\vec 0$.`, F.ker([1, -2])),
  num(S`The range of $${M([[1, 2], [0, 1], [1, 3]])}\vec x$ is $\{b_3=pb_1+qb_2\}$. Find $p+q$.`, 2, "Reduce [A | b]: last row 0 = b₃ − b₁ − b₂: p = q = 1."),
  ms("For A of size 5 × 3, which can happen?", ["T one-to-one", "T onto ℝ⁵", "dim ker T = 2", "dim range T = 4"], [0, 2], "At most 3 pivots: not onto, range ≤ 3."),
  tf("If T: ℝⁿ → ℝⁿ has ker T = {0}, then T is invertible.", true, "Square + one-to-one ⇒ invertible."),
  tf("If the columns of A span ℝᵐ then T(x) = Ax is one-to-one.", false, "e.g. [1 0 1; 0 1 1] is onto but not one-to-one."),
  num(S`$T:\mathbb R^7\to\mathbb R^5$, $\dim\ker T=3$. Find $\dim\operatorname{range}T$.`, 4, "7 − 3; not onto.", F.row([[[["7 columns"]], {}], "=", [[["4 pivots"]], {}], "+", [[["3 free"]], {}]])),
  mc("T(u) = T(v) with u ≠ v is possible exactly when:", "ker T contains a nonzero vector", ["T is onto", "u and v are independent", "T(0) ≠ 0"], "u − v ∈ ker T."),
  num(S`For $A=${M([[1, -2], [-2, 4]])}$, the range is the line $x_2=mx_1$. Find $m$.`, -2, S`Column 1 is $(1,-2)$.`, F.sq([[1, -2], [-2, 4]])),
  num(S`For the same $A$, $\ker T$ is the line $x_2=mx_1$. Find $m$. (Decimal.)`, 0.5, S`$x_1=2x_2$: the line along $(2,1)$.`, undefined, 0.001),
  kerDimQ([[2, 4, -2, 6], [1, 2, -1, 3], [3, 6, -3, 9]]),
  tf("A linear map ℝⁿ → ℝⁿ that is not onto has a nonzero kernel.", true, "Fewer than n pivots leaves a free variable."),
  num(S`A $3\times3$ matrix has $\ker T=\operatorname{span}\{(1,1,1)\}$. Find its rank.`, 2, "3 − 1."),
  rangeDimQ([[1, 1, 1, 1], [1, 2, 3, 4], [2, 3, 4, 5]]),
];
