// 4.6 Bases of ℝⁿ — 20 hard questions
import { S, F, mc, num, tf, ms, basisQ, pivotsQ } from "./gen4.mjs";

export const TOPIC = "4.6 Bases of ℝⁿ";
export const Q = [
  basisQ([[1, 1, 1, 1], [1, 1, -1, -1], [1, -1, 1, -1], [1, -1, -1, 1]]),
  basisQ([[1, 2, 0, 1], [0, 1, 1, 0], [1, 0, -2, 1], [0, 0, 1, 1]]),
  basisQ([[1, 2, 2], [2, 1, 2], [2, 2, 1]], F.v3([[[1, 2, 2], "(1, 2, 2)"], [[2, 1, 2], "(2, 1, 2)"], [[2, 2, 1], "(2, 2, 1)"]])),
  num(S`For which $a$ is $\{(1,0,a),(0,1,1),(a,1,5)\}$ NOT a basis, $a\gt0$?`, 2, "Columns [[1,0,a],[0,1,1],[a,1,5]]: R₃ − aR₁ → (0, 1, 5 − a²); R₃ − R₂ → (0, 0, 4 − a²). Zero when a = ±2."),
  num(S`For which $c$ is $\{(1,0,2),(0,1,c),(2,c,8)\}$ NOT a basis, $c\gt0$?`, 2, "Columns [[1,0,2],[0,1,c],[2,c,8]]: R₃ − 2R₁ → (0, c, 4); R₃ − cR₂ → (0, 0, 4 − c²). Zero when c = ±2."),
  ms("Which sets are bases of ℝ³?", [S`$\{(1,0,0),(1,1,0),(1,1,1)\}$`, S`$\{(1,1,0),(0,1,1),(1,2,1)\}$`, S`$\{(2,0,0),(0,0,3),(0,5,0)\}$`, S`$\{(1,2,3),(3,2,1)\}$`, S`$\{(1,0,1),(0,1,0),(1,0,-1)\}$`], [0, 2, 4], "(1, 2, 1) = (1, 1, 0) + (0, 1, 1); two vectors cannot be a basis of ℝ³."),
  tf("If every vector of ℝⁿ is a combination of v₁, …, vₙ in exactly one way, they form a basis.", true, "Existence gives spanning; uniqueness for 0 gives independence."),
  num(S`$\{\vec v_1,\dots,\vec v_9\}$ spans $\mathbb R^6$. At least how many vectors are not in the basis chosen by pivot columns?`, 3, "The basis has 6 vectors; 9 − 6 = 3."),
  mc(S`$\mathcal B=\{\vec b_1,\vec b_2,\vec b_3\}$ is a basis of $\mathbb R^3$ and $A$ is $3\times3$ with $A\vec x=\vec 0$ only for $\vec x=\vec 0$. Then $\{A\vec b_1,A\vec b_2,A\vec b_3\}$ is:`, "a basis of ℝ³", ["dependent", "a basis only if A = I", "never a basis"], "Independent (A kills only 0) and three vectors in ℝ³."),
  num(S`Extend $\{(1,1,1,1),(1,1,0,0)\}$ to a basis of $\mathbb R^4$ using standard vectors chosen by pivot columns. How many standard vectors are added?`, 2, "A basis of ℝ⁴ has 4 vectors."),
  tf(S`$\{(1,1),(1,-1)\}$ and $\{(2,0),(0,2)\}$ are bases of $\mathbb R^2$ with the same span.`, true, "Every basis of ℝ² spans ℝ²."),
  pivotsQ([[1, 2, 1, 1], [2, 4, 2, 2], [0, 1, 1, 0], [1, 3, 2, 1], [0, 0, 0, 1]], F.row([[[[1, 2, 0, 1, 0], [2, 4, 1, 3, 0], [1, 2, 1, 2, 0], [1, 2, 0, 1, 1]], { label: "[v₁ … v₅]" }]]), S`How many vectors are in a basis of $\operatorname{Span}\{(1,2,1,1),(2,4,2,2),(0,1,1,0),(1,3,2,1),(0,0,0,1)\}$ chosen by pivot columns?`),
  tf(S`If $\{\vec v_1,\vec v_2,\vec v_3\}$ is a basis of $\mathbb R^3$, so is $\{2\vec v_1,-\vec v_2,5\vec v_3\}$.`, true, "Nonzero multiples keep independence."),
  tf(S`If $\{\vec v_1,\vec v_2,\vec v_3\}$ is a basis, so is $\{\vec v_1,\vec v_2,\vec v_3-\vec v_1-\vec v_2\}$.`, true, "a v₁ + b v₂ + c(v₃ − v₁ − v₂) = (a − c)v₁ + (b − c)v₂ + cv₃: c = 0, then a = b = 0."),
  num(S`Find $k$ so that $\{(1,2,3),(2,3,4),(3,4,k)\}$ is NOT a basis.`, 5, "(3, 4, 5) = 2(2, 3, 4) − (1, 2, 3); columns reduce to a zero third pivot only for k = 5.", F.plane([1, 2, 3], [2, 3, 4], { lu: "(1, 2, 3)", lv: "(2, 3, 4)", more: [[[3, 4, 5], "(3, 4, 5)", "green"]], len: 5 })),
  mc("Which statement is FALSE?", "every set of n vectors in ℝⁿ is a basis", ["every basis of ℝⁿ has n vectors", "every spanning set of ℝⁿ contains a basis", "every independent set in ℝⁿ extends to a basis"], "n vectors may be dependent."),
  num(S`How many bases of $\mathbb R^2$ consist of two vectors from $\{(1,0),(0,1),(1,1),(2,2)\}$?`, 5, "Pairs: 6 total; only {(1, 1), (2, 2)} is parallel."),
  tf(S`A basis of $\mathbb R^n$ is a maximal independent set: adding any vector makes it dependent.`, true, "n + 1 vectors in ℝⁿ are dependent."),
  tf("A basis of ℝⁿ is a minimal spanning set: removing any vector destroys spanning.", true, "n − 1 vectors cannot span ℝⁿ."),
  basisQ([[1, 0, 0, 0], [1, 2, 0, 0], [1, 2, 3, 0], [1, 2, 3, 4]], F.row([[[[1, 1, 1, 1], [0, 2, 2, 2], [0, 0, 3, 3], [0, 0, 0, 4]], { label: "upper triangular" }]])),
];
