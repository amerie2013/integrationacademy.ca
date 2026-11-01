// 4.3 Linear Dependence and Independence — 20 hard questions
import { S, F, mc, num, tf, ms, indepQ, relQ } from "./gen4.mjs";

export const TOPIC = "4.3 Linear Dependence and Independence";
export const Q = [
  indepQ([[1, 2, 0, 1], [0, 1, 1, 2], [1, 0, -2, -3], [2, 1, 1, 0]]),
  indepQ([[1, 1, 1, 1], [1, -1, 1, -1], [1, 1, -1, -1]]),
  relQ([[1, 2, 1, 0], [0, 1, 1, 1], [1, 4, 3, 2]], 1),
  relQ([[1, 0, 1], [2, 1, 3], [0, 1, 1]], 0, F.plane([1, 0, 1], [2, 1, 3], { lu: "v₁", lv: "v₂", more: [[[0, 1, 1], "v₃", "green"]], len: 3.8 })),
  num(S`For which $a$ is $\{(1,1,2),(1,2,a),(2,a,5)\}$ dependent? (Give the larger value.)`, 3, "Columns [[1,1,2],[1,2,a],[2,a,5]]: R₂ − R₁ → (0, 1, a − 2); R₃ − 2R₁ → (0, a − 2, 1); R₃ − (a − 2)R₂ → (0, 0, 1 − (a − 2)²). Zero when a − 2 = ±1: a = 1 or a = 3.", F.v3([[[1, 1, 2], "(1, 1, 2)"], [[1, 2, 3], "(1, 2, a)"], [[2, 3, 5], "(2, a, 5)"]])),
  num(S`For which $t$ is $\{(1,0,t),(0,1,1),(t,1,2)\}$ dependent? (Give the larger value.)`, 1, "Columns [[1,0,t],[0,1,1],[t,1,2]]: R₃ − tR₁ → (0, 1, 2 − t²); R₃ − R₂ → (0, 0, 1 − t²). Zero when t = ±1."),
  tf(S`If $\{\vec u,\vec v,\vec w\}$ is independent, then $\{\vec u+\vec v,\ \vec v+\vec w,\ \vec u+\vec w\}$ is independent.`, true, "(a + c)u + (a + b)v + (b + c)w = 0 forces a + c = a + b = b + c = 0, hence a = b = c = 0."),
  tf(S`If $\{\vec u,\vec v,\vec w\}$ is independent, then $\{\vec u+\vec v,\ \vec v+\vec w,\ \vec u-\vec w\}$ is independent.`, false, "(u + v) − (v + w) − (u − w) = 0."),
  ms(S`Which sets are dependent for every choice of nonzero $\vec u,\vec v\in\mathbb R^3$?`, [S`$\{\vec u,\vec v,\vec u+\vec v\}$`, S`$\{\vec u,2\vec u\}$`, S`$\{\vec u,\vec v\}$`, S`$\{\vec u,\vec v,\vec 0\}$`, S`$\{\vec u,\vec v,\vec u\times\vec v\}$`], [0, 1, 3], "u + v is a combination of u, v; 2u is parallel to u; 0 makes any set dependent. {u, v} and {u, v, u × v} are independent when u, v are not parallel."),
  num(S`$\vec v_1=(1,2)$, $\vec v_2=(3,1)$, $\vec v_3=(5,0)$. In $\vec v_3=a\vec v_1+b\vec v_2$, find $b$.`, 2, "a + 3b = 5, 2a + b = 0: b = −2a, a − 6a = 5, a = −1, b = 2.", F.v2([[[1, 2], "v₁", "blue"], [[3, 1], "v₂", "red"], [[5, 0], "v₃", "green"]], { xmin: -1, xmax: 6, ymin: -1, ymax: 3 })),
  tf(S`If $A\vec x=\vec 0$ has only the trivial solution, the columns of $A$ are independent.`, true, "That is the definition, with Ax as the column combination."),
  tf(S`If the columns of $A$ are independent, $A\vec x=\vec b$ has at most one solution for each $\vec b$.`, true, "Two solutions would differ by a nonzero solution of Ax = 0."),
  mc(S`$\{\vec v_1,\vec v_2,\vec v_3\}$ is independent and $\vec w=\vec v_1-\vec v_3$. Then $\{\vec v_1,\vec v_2,\vec w\}$ is:`, "independent", ["dependent", "spanning ℝ³ always", "undetermined"], "a v₁ + b v₂ + c(v₁ − v₃) = (a + c)v₁ + bv₂ − cv₃ = 0 forces c = 0, b = 0, a = 0."),
  num(S`The RREF of $[\,\vec v_1\ \vec v_2\ \vec v_3\ \vec v_4\,]$ is $${"\\begin{bmatrix}1&0&2&0\\\\0&1&-3&0\\\\0&0&0&1\\end{bmatrix}"}$. In $\vec v_3=a\vec v_1+b\vec v_2$, find $b$.`, -3, "Read column 3: (2, −3, 0)."),
  indepQ([[1, 0, 0, 1], [0, 1, 0, 1], [0, 0, 1, 1], [1, 1, 1, 0]], F.row([[[[1, 0, 0, 1], [0, 1, 0, 1], [0, 0, 1, 1], [1, 1, 1, 0]], { label: "[v₁ v₂ v₃ v₄]" }]])),
  tf(S`$\{(1,2),(3,4),(5,6)\}$ is independent.`, false, "Three vectors in ℝ²."),
  num(S`For which $k$ are $(1,k,1)$ and $(k,4,k)$ dependent with $k\gt0$?`, 2, "Parallel: (k, 4, k) = k(1, k, 1) needs k² = 4."),
  mc(S`Which condition on $A$ ($m\times n$) makes its columns dependent?`, S`$n\gt m$`, [S`$m\gt n$`, S`$m=n$`, "A has no zero entries"], "More columns than rows forces a free variable."),
  relQ([[1, 1, 1], [1, 2, 4], [1, 3, 7]], 1),
  tf(S`If $\vec v_1\ne\vec 0$ and no $\vec v_j$ is a combination of $\vec v_1,\dots,\vec v_{j-1}$, the set is independent.`, true, "Take a relation and its last nonzero weight cⱼ: then vⱼ would be a combination of earlier vectors (or v₁ = 0)."),
];
