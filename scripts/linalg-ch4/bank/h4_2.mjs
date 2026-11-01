// 4.2 Spanning Sets of ℝⁿ — 20 hard questions
import { S, F, mc, num, tf, ms, spansQ } from "./gen4.mjs";

export const TOPIC = "4.2 Spanning Sets of ℝⁿ";
export const Q = [
  spansQ([[1, 1, 0, 0], [0, 1, 1, 0], [0, 0, 1, 1], [1, 0, 0, 1]]),
  spansQ([[1, 1, 0, 0], [0, 1, 1, 0], [0, 0, 1, 1], [1, 0, 0, -1]]),
  spansQ([[1, 2, 1], [2, 1, -1], [3, 0, -3], [1, -1, -2]], F.plane([1, 2, 1], [2, 1, -1], { lu: "(1, 2, 1)", lv: "(2, 1, −1)", more: [[[3, 0, -3], "(3, 0, −3)", "green"]], len: 3.8 })),
  num(S`For which $a$ do $(1,a,0)$, $(0,1,a)$, $(a,0,1)$ fail to span $\mathbb R^3$?`, -1, "Columns [[1,0,a],[a,1,0],[0,a,1]]: R₂ − aR₁ → (0, 1, −a²); R₃ − aR₂ → (0, 0, 1 + a³). Zero exactly when a = −1.", F.v3([[[1, -1, 0], "(1, a, 0)"], [[0, 1, -1], "(0, 1, a)"], [[-1, 0, 1], "(a, 0, 1)"]])),
  num(S`For which $h$ do $(1,2,1)$, $(2,h,0)$, $(1,1,-1)$ fail to span $\mathbb R^3$?`, 3, "Columns [[1,2,1],[2,h,1],[1,0,−1]]. R₂ − 2R₁ → (0, h − 4, −1); R₃ − R₁ → (0, −2, −2). Swap R₂ and R₃ so the pivot is −2. Then R₃ + ((h − 4)/2)R₂ → (0, 0, −1 − (h − 4)) = (0, 0, 3 − h). No third pivot exactly when h = 3."),
  ms("Which conditions guarantee that the columns of an n × n matrix A span ℝⁿ?", [S`$A$ has $n$ pivots`, S`$A\vec x=\vec 0$ has only the trivial solution`, S`$A\vec x=\vec b$ is consistent for every $\vec b$`, S`$A$ has no zero entries`, S`$A$ has a zero row`], [0, 1, 2], "For a square matrix n pivots, only the trivial solution and 'always consistent' are equivalent; entries tell nothing."),
  num(S`$\operatorname{Span}\{(1,2,1,0),(0,1,1,1)\}\subseteq\mathbb R^4$ is described by how many independent linear equations?`, 2, "Reducing [A | b] leaves 4 − 2 = 2 zero rows, one equation each."),
  mc(S`Equations of $\operatorname{Span}\{(1,0,1,2),(0,1,1,1)\}$ include:`, S`$x_3=x_1+x_2$ and $x_4=2x_1+x_2$`, [S`$x_3=x_1-x_2$`, S`$x_1+x_2+x_3+x_4=0$`, S`$x_4=x_1+2x_2$`], "General element a(1, 0, 1, 2) + b(0, 1, 1, 1) = (a, b, a + b, 2a + b)."),
  tf(S`If $\{\vec u,\vec v,\vec w\}$ spans $\mathbb R^3$ then $\{\vec u+\vec v,\ \vec v+\vec w,\ \vec w+\vec u\}$ spans $\mathbb R^3$.`, true, "u = ½[(u + v) − (v + w) + (w + u)], and similarly for v, w; so the new set reaches all three, hence everything."),
  tf(S`If $\{\vec u,\vec v,\vec w\}$ spans $\mathbb R^3$ then $\{\vec u-\vec v,\ \vec v-\vec w,\ \vec w-\vec u\}$ spans $\mathbb R^3$.`, false, "The three differences sum to 0, so they lie in a plane: at most 2 pivots."),
  num(S`For which $k$ is $(1,k,k^2)$ in $\operatorname{Span}\{(1,1,1),(0,1,2)\}$?`, 1, "The span is x₁ − 2x₂ + x₃ = 0 (both vectors satisfy it): 1 − 2k + k² = (k − 1)² = 0 forces k = 1."),
  spansQ([[1, 0, 0, 0], [1, 1, 0, 0], [1, 1, 1, 0]], F.row([[[[1, 1, 1], [0, 1, 1], [0, 0, 1], [0, 0, 0]], { label: "4 × 3" }]])),
  mc(S`$A$ is $m\times n$ and its columns span $\mathbb R^m$. Which must be true?`, S`$m\le n$`, [S`$m\ge n$`, S`$m=n$`, S`$A$ is square`], "A pivot in each of m rows, at most n pivots."),
  num(S`The columns of a $3\times5$ matrix span $\mathbb R^3$. How many free variables does $A\vec x=\vec 0$ have?`, 2, "3 pivots, 5 columns: 2 free."),
  tf(S`If the columns of $A$ span $\mathbb R^m$, then $A\vec x=\vec b$ has exactly one solution for every $\vec b$.`, false, "Spanning gives at least one solution; uniqueness needs a pivot in every column too."),
  num(S`For which $t$ is $(t,1,1)$ in $\operatorname{Span}\{(1,0,1),(1,1,0),(2,1,1)\}$?`, 2, "(2, 1, 1) = (1, 0, 1) + (1, 1, 0), so the span is the plane x₁ − x₂ − x₃ = 0; (t, 1, 1) is in it only for t = 2.", F.plane([1, 0, 1], [1, 1, 0], { lu: "(1, 0, 1)", lv: "(1, 1, 0)", more: [[[2, 1, 1], "(2, 1, 1)", "green"]] })),
  tf(S`Removing one vector from a spanning set of $\mathbb R^n$ with $n+1$ vectors always leaves a spanning set.`, false, "Not if the removed vector is essential: {e₁, e₂, e₁} without e₂ spans only a line."),
  mc("Which statement is equivalent to 'Ax = b is consistent for every b'?", "every row of an echelon form of A has a pivot", ["every column of A has a pivot", "A has no zero entries", "A is symmetric"], "This is the spanning test."),
  num(S`$\vec v_1,\dots,\vec v_6\in\mathbb R^4$ span $\mathbb R^4$. At least how many of them can be removed while keeping the span?`, 2, "Keep the 4 pivot columns; 6 − 4 = 2 are redundant."),
  tf(S`$\{(1,1),(1,-1)\}$ and $\{(2,0),(0,2)\}$ span the same set.`, true, "Both are pairs of non-parallel vectors in ℝ²: both span ℝ²."),
];
