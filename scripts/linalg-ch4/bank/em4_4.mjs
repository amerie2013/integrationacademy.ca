// 4.4 Independence: Theorems and Geometry — 20 easy + 20 medium questions
import { S, F, mc, num, tf, fill, indepQ, spansQ } from "./gen4.mjs";

const easy = [
  tf("Any 4 vectors in ℝ³ are linearly dependent.", true, "More vectors than entries: counting theorem."),
  tf("Any 2 vectors in ℝ³ are linearly independent.", false, "They may be parallel, e.g. (1, 0, 0) and (3, 0, 0)."),
  num("What is the largest number of independent vectors in ℝ⁵?", 5, "At most one pivot per row."),
  indepQ([[1, 2], [3, 1], [0, 1]], F.v2([[[1, 2], "(1, 2)", "blue"], [[3, 1], "(3, 1)", "red"], [[0, 1], "(0, 1)", "green"]], { xmin: -1, xmax: 4, ymin: -1, ymax: 3 })),
  tf("Every subset of an independent set is independent.", true, "A relation in the subset would be a relation in the whole set."),
  tf("Every subset of a dependent set is dependent.", false, "{e₁, e₂, e₁ + e₂} is dependent but {e₁, e₂} is independent."),
  tf("Every set that contains a dependent set is dependent.", true, "The same relation, with weight 0 on the new vectors."),
  mc("Three vectors in ℝ³ are dependent exactly when:", "they lie in one plane through 0", ["two of them are parallel", "one of them is 0", "they are all different"], "Dependent means one is a combination of the others: all in one plane."),
  fill("For n vectors in ℝⁿ, independent ⇔ ___ ℝⁿ.", ["spanning", "span", "spans"], "Square case: n pivots either way."),
  tf("Three vectors in ℝ³ that span ℝ³ are independent.", true, "Square case."),
  indepQ([[1, 0, 0], [1, 1, 0], [1, 1, 1]]),
  num(S`$\{\vec v_1,\dots,\vec v_7\}\subseteq\mathbb R^4$. At least how many free variables does $A\vec c=\vec 0$ have?`, 3, "At most 4 pivots for 7 columns."),
  tf(S`$\{(1,0),(0,1),(2,3)\}$ is independent.`, false, "Three vectors in ℝ²."),
  mc("Two vectors in ℝ³ are independent exactly when:", "they are not parallel (and neither is 0)", ["they are perpendicular", "they have different lengths", "they span ℝ³"], "Two vectors: dependent ⇔ one is a multiple of the other."),
  spansQ([[1, 1, 0], [0, 1, 1], [1, 0, 1]]),
  tf("Adding a vector outside the span of an independent set keeps it independent.", true, "The extension theorem."),
  num(S`An independent set in $\mathbb R^3$ has 2 vectors. How many more vectors can be added at most while staying independent?`, 1, "At most 3 independent vectors in ℝ³."),
  tf("If 3 vectors in ℝ³ are coplanar with 0, they are dependent.", true, "They span at most a plane: at most 2 pivots."),
  indepQ([[1, 2, 3], [2, 3, 4], [3, 4, 5]], F.v3([[[1, 2, 3], "(1, 2, 3)"], [[2, 3, 4], "(2, 3, 4)"], [[3, 4, 5], "(3, 4, 5)"]])),
  tf("A set of n + 1 vectors in ℝⁿ can span ℝⁿ.", true, "e.g. e₁, …, eₙ and one more vector."),
];

const medium = [
  indepQ([[1, 0, 1, 0], [0, 1, 0, 1], [1, 1, 0, 0], [0, 0, 1, 1]]),
  indepQ([[2, 0, 1], [0, 1, 1], [1, 1, 0]], F.v3([[[2, 0, 1], "(2, 0, 1)"], [[0, 1, 1], "(0, 1, 1)"], [[1, 1, 0], "(1, 1, 0)"]])),
  spansQ([[1, 2, 1], [0, 1, 1], [1, 3, 2]]),
  tf(S`$\{\vec u,\vec v\}$ independent implies $\{\vec u+\vec v,\ \vec u-\vec v\}$ independent.`, true, "a(u + v) + b(u − v) = (a + b)u + (a − b)v = 0 forces a = b = 0."),
  tf(S`$\{\vec u-\vec v,\ \vec v-\vec w,\ \vec w-\vec u\}$ is always dependent.`, true, "The three vectors add up to 0."),
  num(S`For which $k$ are $(1,0,1)$, $(0,1,1)$, $(1,1,k)$ dependent?`, 2, "Columns [[1,0,1],[0,1,1],[1,1,k]]: R₃ − R₁ → (0, 1, k − 1); R₃ − R₂ → (0, 0, k − 2)."),
  mc(S`$(1,2,0)$ and $(0,1,1)$ are independent. Which vector can be added keeping independence?`, S`$(0,0,1)$`, [S`$(1,3,1)$`, S`$(2,4,0)$`, S`$(1,1,-1)$`], "The span is 2x₁ − x₂ + x₃ = 0; (0, 0, 1) gives 1 ≠ 0, the others satisfy it.", F.plane([1, 2, 0], [0, 1, 1], { lu: "(1, 2, 0)", lv: "(0, 1, 1)" })),
  num(S`Five vectors in $\mathbb R^3$ span $\mathbb R^3$. How many free variables does $A\vec c=\vec 0$ have?`, 2, "3 pivots (one per row), 5 columns."),
  tf("If n vectors in ℝⁿ do not span ℝⁿ, they are dependent.", true, "Square case: fewer than n pivots."),
  indepQ([[1, -1, 2], [2, 1, 1], [1, 2, -1]]),
  mc("Which set is guaranteed dependent without computing?", S`$\{(1,2),(3,4),(5,7)\}$`, [S`$\{(1,2,3),(4,5,6)\}$`, S`$\{(1,0,0),(0,1,0)\}$`, S`$\{(2,1)\}$`], "Three vectors in ℝ²."),
  tf(S`If $\{\vec v_1,\vec v_2,\vec v_3\}$ is independent, then $\vec v_3\notin\operatorname{Span}\{\vec v_1,\vec v_2\}$.`, true, "Otherwise v₃ − av₁ − bv₂ = 0 would be a relation."),
  num(S`$\{(1,1,0,0),(0,1,1,0)\}\subseteq\mathbb R^4$ is independent. How many vectors must be added to reach 4 independent vectors?`, 2, "4 − 2 = 2."),
  spansQ([[1, 0, 0, 0], [0, 1, 0, 0], [0, 0, 1, 0], [1, 1, 1, 0]], F.row([[[[1, 0, 0, 1], [0, 1, 0, 1], [0, 0, 1, 1], [0, 0, 0, 0]], { label: "row 4 is zero" }]])),
  tf("If a set spans ℝⁿ and has n vectors, removing any vector destroys spanning.", true, "n − 1 vectors cannot span ℝⁿ."),
  num(S`For which $c$ are $(1,c)$, $(c,1)$ dependent with $c\lt0$?`, -1, "Parallel when c² = 1."),
  tf(S`$\{(1,1,1),(1,1,0),(1,0,0),(0,0,1)\}$ contains an independent subset of size 3.`, true, "(1, 1, 1), (1, 1, 0), (1, 0, 0) are independent (triangular pattern)."),
  mc("A set of 3 vectors in ℝ³ has 2 parallel vectors. Then the set is:", "dependent", ["independent", "a basis", "spanning ℝ³"], "A subset is dependent, so the whole set is."),
  tf("Three vectors in ℝ³ with no two parallel are independent.", false, "They may still share a plane, e.g. (1, 0, 0), (0, 1, 0), (1, 1, 0)."),
  indepQ([[3, 1, 0], [1, 0, 1], [0, 1, -3]]),
];

export const E = easy;
export { medium as M };
