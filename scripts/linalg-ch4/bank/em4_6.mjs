// 4.6 Bases of ℝⁿ — 20 easy + 20 medium questions
import { S, F, mc, num, tf, fill, basisQ, pivotsQ } from "./gen4.mjs";

const easy = [
  num("How many vectors are in a basis of ℝ⁴?", 4, "Every basis of ℝⁿ has n vectors."),
  basisQ([[1, 3], [2, 5]]),
  basisQ([[2, 4], [1, 2]], F.v2([[[2, 4], "(2, 4)", "blue"], [[1, 2], "(1, 2)", "red"]], { xmin: -1, xmax: 3, ymin: -1, ymax: 5 })),
  basisQ([[1, 0, 0], [0, 1, 0]]),
  fill("A linearly independent set that spans ℝⁿ is called a ___ of ℝⁿ.", ["basis"], "That is the definition."),
  tf(S`$\{\vec e_1,\vec e_2,\vec e_3\}$ is a basis of $\mathbb R^3$.`, true, "The standard basis: I₃ has 3 pivots."),
  tf("A basis of ℝ³ can have 4 vectors.", false, "4 vectors in ℝ³ are dependent."),
  mc("Three vectors in ℝ³ are a basis exactly when:", "the matrix with them as columns has 3 pivots", ["no two are parallel", "none is 0", "they have length 1"], "n-vector test."),
  tf("Three independent vectors in ℝ³ form a basis.", true, "Square case: independent ⇒ spanning."),
  basisQ([[1, 0, 0], [1, 1, 0], [1, 1, 1]], F.v3([[[1, 0, 0], "(1, 0, 0)"], [[1, 1, 0], "(1, 1, 0)"], [[1, 1, 1], "(1, 1, 1)"]], { len: 1.7 })),
  tf("ℝ² has only one basis.", false, "Any two non-parallel vectors form a basis."),
  num(S`A spanning set of $\mathbb R^3$ has 7 vectors. How many does a basis inside it have?`, 3, "Keep the 3 pivot columns."),
  basisQ([[2, 1], [-1, 3]]),
  mc("Which is a basis of ℝ²?", S`$\{(1,2),(2,1)\}$`, [S`$\{(1,2),(-2,-4)\}$`, S`$\{(0,0),(1,0)\}$`, S`$\{(1,0),(0,1),(1,1)\}$`], "Two non-parallel vectors."),
  tf("Two vectors that span ℝ² form a basis of ℝ².", true, "Square case."),
  num(S`An independent set in $\mathbb R^5$ has 3 vectors. How many must be added to make a basis?`, 2, "5 − 3."),
  tf("Removing a vector from a basis gives a basis of a smaller ℝⁿ.", false, "It stays in ℝⁿ but no longer spans it."),
  basisQ([[1, 2, 3], [4, 5, 6], [5, 7, 9]]),
  mc("Every vector of ℝⁿ is a combination of a basis in:", "exactly one way", ["infinitely many ways", "no way", "two ways"], "Spanning gives existence, independence uniqueness."),
  num(S`$\vec x=(4,-2,7)$ in the standard basis: the weight of $\vec e_3$ is`, 7, "The weights are the entries."),
];

const medium = [
  basisQ([[1, 1, 0], [0, 1, 1], [1, 0, 2]]),
  basisQ([[1, 2, 1], [2, 1, 1], [1, -1, 0]], F.plane([1, 2, 1], [2, 1, 1], { lu: "(1, 2, 1)", lv: "(2, 1, 1)", more: [[[1, -1, 0], "(1, −1, 0)", "green"]] })),
  basisQ([[1, 0, 1, 0], [0, 1, 0, 1], [1, 1, 0, 0], [0, 1, 1, 0]]),
  basisQ([[3, 1, 2], [1, 0, 1], [0, 1, 1]]),
  num(S`For which $k$ is $\{(1,2),(k,6)\}$ NOT a basis of $\mathbb R^2$?`, 3, "Parallel when (k, 6) = 3(1, 2)."),
  num(S`For which $t$ is $\{(1,1,0),(0,1,1),(1,t,1)\}$ NOT a basis of $\mathbb R^3$?`, 2, "Columns [[1,0,1],[1,1,t],[0,1,1]]: R₂ − R₁ → (0, 1, t − 1); R₃ − R₂ → (0, 0, 2 − t)."),
  pivotsQ([[1, 1, 0], [2, 2, 0], [0, 1, 1], [1, 2, 1], [0, 0, 1]], null, S`How many vectors of $\{(1,1,0),(2,2,0),(0,1,1),(1,2,1),(0,0,1)\}$ are in a basis of their span chosen by pivot columns?`),
  mc(S`Extend $\{(1,1,0),(1,-1,0)\}$ to a basis of $\mathbb R^3$ by adding:`, S`$(0,0,1)$`, [S`$(1,0,0)$`, S`$(2,0,0)$`, S`$(0,1,0)$`], "The span is the plane x₃ = 0; only (0, 0, 1) is outside it.", F.plane([1, 1, 0], [1, -1, 0], { lu: "(1, 1, 0)", lv: "(1, −1, 0)" })),
  tf("If n vectors in ℝⁿ are dependent, they do not span ℝⁿ.", true, "Square case: fewer than n pivots."),
  tf(S`$\{\vec u,\vec v,\vec w\}$ a basis of $\mathbb R^3$ implies $\{\vec u,\vec u+\vec v,\vec u+\vec v+\vec w\}$ is a basis.`, true, "(a + b + c)u + (b + c)v + cw = 0 gives c = b = a = 0; three independent vectors."),
  tf(S`$\{\vec u,\vec v,\vec w\}$ a basis implies $\{\vec u+\vec v,\vec v+\vec w,\vec u-\vec w\}$ is a basis.`, false, "(u + v) − (v + w) − (u − w) = 0."),
  num(S`A basis of $\mathbb R^3$ contains $(1,0,0)$ and $(0,1,0)$. Which entry of the third vector must be nonzero? (Answer 1, 2 or 3.)`, 3, "The first two span the plane x₃ = 0; the third must leave it."),
  basisQ([[1, -1, 0], [0, 1, -1], [1, 0, -1]]),
  mc("Which is true for every basis of ℝⁿ?", "it has exactly n vectors", ["it is orthogonal", "it contains e₁", "its vectors have length 1"], "Only the size is fixed."),
  num(S`Which standard vector extends $\{(1,2,3),(0,1,2)\}$ to a basis? The first one that works, $\vec e_k$: give $k$.`, 1, "Matrix [v₁ v₂ e₁ e₂ e₃]: after R₂ − 2R₁, R₃ − 3R₁ and R₃ − 2R₂ the pivots are in columns 1, 2, 3: add e₁."),
  basisQ([[2, 0, 0], [0, 3, 0], [0, 0, -1]]),
  tf("A set of n vectors in ℝⁿ with a zero vector is never a basis.", true, "It is dependent."),
  num(S`For which $a$ is $\{(a,1),(4,a)\}$ NOT a basis of $\mathbb R^2$, $a\lt0$?`, -2, "Second pivot a − 4/a = 0 ⇔ a² = 4."),
  mc("A spanning set of ℝ⁴ with 4 vectors is:", "a basis", ["dependent", "not a basis", "impossible"], "Square case."),
  basisQ([[1, 2], [3, 4], [5, 6]]),
];

export const E = easy;
export { medium as M };
