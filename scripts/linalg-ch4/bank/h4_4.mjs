// 4.4 Independence: Theorems and Geometry — 20 hard questions
import { S, F, mc, num, tf, ms, indepQ, spansQ } from "./gen4.mjs";

export const TOPIC = "4.4 Independence: Theorems and Geometry";
export const Q = [
  indepQ([[1, 1, 0, 0], [0, 1, 1, 0], [0, 0, 1, 1], [1, 0, 0, 1]]),
  indepQ([[1, 2, 3, 4], [2, 3, 4, 5], [3, 4, 5, 6]], F.row([[[[1, 2, 3], [2, 3, 4], [3, 4, 5], [4, 5, 6]], { label: "[v₁ v₂ v₃]" }]])),
  spansQ([[1, 1, 1], [1, 2, 4], [1, 3, 9]], F.v3([[[1, 1, 1], "(1, 1, 1)"], [[1, 2, 4], "(1, 2, 4)"], [[1, 3, 9], "(1, 3, 9)"]], { len: 6 })),
  num(S`For which $a$ are $(1,a,a^2)$, $(1,1,1)$, $(1,2,4)$ dependent with $a\ne1$?`, 2, "Columns [[1,1,1],[a,1,2],[a²,1,4]] give a Vandermonde pattern: dependent exactly when two of the 'nodes' a, 1, 2 coincide. With a ≠ 1: a = 2."),
  tf(S`If $\{\vec u,\vec v,\vec w\}$ is independent, so is $\{\vec u,\ \vec u+2\vec v,\ \vec u+2\vec v+3\vec w\}$.`, true, "(a + b + c)u + (2b + 2c)v + 3cw = 0 gives c = 0, then b = 0, then a = 0."),
  tf(S`If $\vec w\in\operatorname{Span}\{\vec u,\vec v\}$ then $\{\vec u,\vec v,\vec w\}$ is dependent.`, true, "w − au − bv = 0 is a relation with weight 1 on w."),
  ms("Which statements hold for vectors in ℝⁿ?", ["more than n vectors are dependent", "fewer than n vectors are independent", "n independent vectors span ℝⁿ", "a set containing 0 is dependent", "n vectors that span ℝⁿ are independent"], [0, 2, 3, 4], "Fewer than n vectors may still be dependent (parallel vectors)."),
  num(S`$\vec v_1,\dots,\vec v_5\in\mathbb R^3$ with $\operatorname{rank}[\,\vec v_1\ \cdots\ \vec v_5\,]=2$. How many free variables does $A\vec c=\vec 0$ have?`, 3, "5 columns − 2 pivots."),
  mc(S`$\{\vec v_1,\vec v_2\}$ is independent in $\mathbb R^3$. The set of $\vec w$ making $\{\vec v_1,\vec v_2,\vec w\}$ dependent is:`, "the plane spanned by v₁ and v₂", ["a line", "all of ℝ³", "just {0}"], "Dependent ⇔ w ∈ Span{v₁, v₂}.", F.plane([1, 0, 1], [0, 1, 1], { lu: "v₁", lv: "v₂" })),
  tf(S`For any $A$ ($3\times3$), the columns are independent iff $A\vec x=\vec b$ is always consistent.`, true, "Square case: 3 pivots either way."),
  num(S`For which $k$ are $(1,2,k)$, $(0,1,1)$, $(1,3,2)$ dependent?`, 1, "Columns [[1,0,1],[2,1,3],[k,1,2]]: R₂ − 2R₁ → (0, 1, 1); R₃ − kR₁ → (0, 1, 2 − k); R₃ − R₂ → (0, 0, 1 − k). Check k = 1: (1, 2, 1) + (0, 1, 1) = (1, 3, 2) ✓."),
  tf("An independent set in ℝⁿ can always be extended to n independent vectors.", true, "Keep adding vectors outside the current span; the span grows until it is ℝⁿ."),
  num(S`$\{(1,0,2),(0,1,-1)\}$ spans the plane $ax_1-x_2-x_3=0$. Find $a$.`, 2, "Plug in (1, 0, 2): a − 2 = 0; check (0, 1, −1): −1 + 1 = 0 ✓."),
  indepQ([[1, 0, 0, 0], [1, 2, 0, 0], [1, 2, 3, 0], [1, 2, 3, 4]]),
  tf(S`If $\vec u\perp\vec v$ and both are nonzero, then $\{\vec u,\vec v\}$ is independent.`, true, "Perpendicular nonzero vectors are not parallel."),
  tf("Independent vectors must be pairwise perpendicular.", false, "(1, 0) and (1, 1) are independent but not perpendicular."),
  mc(S`$A$ is $4\times6$. Which is impossible?`, "the columns are independent", ["the columns span ℝ⁴", "Ax = 0 has a nonzero solution", "A has 4 pivots"], "6 columns in ℝ⁴ are always dependent."),
  num(S`Find $c$ so that $\{(1,1,0),(0,1,1),(1,c,1)\}$ is dependent.`, 2, "Columns [[1,0,1],[1,1,c],[0,1,1]]: R₂ − R₁ → (0, 1, c − 1); R₃ − R₂ → (0, 0, 2 − c).", F.plane([1, 1, 0], [0, 1, 1], { lu: "(1, 1, 0)", lv: "(0, 1, 1)", more: [[[1, 2, 1], "(1, 2, 1)", "green"]] })),
  tf(S`If $\{\vec v_1,\dots,\vec v_k\}$ is independent and $A$ is a matrix with $A\vec x=\vec 0$ only for $\vec x=\vec 0$, then $\{A\vec v_1,\dots,A\vec v_k\}$ is independent.`, true, "Σ cᵢAvᵢ = A(Σ cᵢvᵢ) = 0 forces Σ cᵢvᵢ = 0, so every cᵢ = 0."),
  mc("Which triple is independent?", S`$(1,1,0),\ (1,0,1),\ (0,1,1)$`, [S`$(1,1,0),\ (2,2,0),\ (0,0,1)$`, S`$(1,2,3),\ (2,3,4),\ (3,4,5)$`, S`$(1,0,1),\ (0,1,0),\ (1,1,1)$`], "The first reduces to 3 pivots; the others contain parallel vectors or a sum relation."),
];
