// 7.2 Linear Transformations — 20 hard questions
import { S, F, M, col, mc, num, tf, ms, superQ, wuQ } from "./gen7.mjs";

export const TOPIC = "7.2 Linear Transformations";
export const Q = [
  wuQ([[1, 1], [1, -1]], [[3, 1], [1, 5]], 0, 0, F.v2([[[1, 1], "(1, 1)", "blue"], [[1, -1], "(1, −1)", "red"]], { xmin: -2, xmax: 2, ymin: -2, ymax: 2 })),
  wuQ([[1, 1], [1, -1]], [[3, 1], [1, 5]], 1, 1),
  wuQ([[1, 2], [1, 3]], [[2, 3], [0, 1]], 0, 1),
  wuQ([[2, 1], [1, 1]], [[1, 0], [4, 3], [2, 2]], 2, 0, F.mat([[1, 0], [4, 3], [2, 2]], { label: "W" })),
  superQ([1, 0, 2], [3, -1, 1], 4, -3, 0),
  superQ([1, 0, 2], [3, -1, 1], 4, -3, 2),
  num(S`$T$ is linear with $T(1,2)=(3,1)$ and $T(0,1)=(1,1)$. Find the first entry of $T(1,0)$.`, 1, S`$(1,0)=(1,2)-2(0,1)$: $(3,1)-2(1,1)=(1,-1)$.`, F.v2([[[1, 2], "(1, 2)", "blue"], [[0, 1], "(0, 1)", "red"]], { xmin: -1, xmax: 2, ymin: -1, ymax: 3 })),
  num(S`$T$ is linear with $T(1,2)=(3,1)$ and $T(0,1)=(1,1)$. Find the second entry of $T(4,5)$.`, 1, S`$T(\vec e_1)=(1,-1)$, $T(\vec e_2)=(1,1)$: $${M([[1, 1], [-1, 1]])}${col([4, 5])}=${col(["4+5", "-4+5"])}$.`),
  tf(S`There is a linear $T$ with $T(1,2)=(1,1)$ and $T(2,4)=(2,3)$.`, false, "T(2,4) must be 2T(1,2) = (2,2).", F.v2([[[1, 2], "(1,2)", "blue"], [[2, 4], "(2,4) = 2(1,2)", "red", null, true]], { xmin: -1, xmax: 3, ymin: -1, ymax: 5 })),
  tf(S`There is exactly one linear $T:\mathbb R^2\to\mathbb R^2$ with $T(1,2)=(1,1)$ and $T(2,4)=(2,2)$.`, false, "The data agree but only fix T on one line: infinitely many."),
  num(S`$T(\vec x)=(\vec a\cdot\vec x)\vec b$ with $\vec a=(2,-1,1)$, $\vec b=(1,3)$. Find the second entry of $T(1,1,1)$.`, 6, S`$\vec a\cdot(1,1,1)=2$; $2\vec b=(2,6)$. Matrix: $${col([1, 3])}${M([[2, -1, 1]])}=${M([[2, -1, 1], [6, -3, 3]])}$.`, F.row([[[[1], [3]], { label: "b" }], [[[2, -1, 1]], { label: "aᵀ" }]])),
  ms("Which maps ℝ² → ℝ² are linear?", ["(x₂, x₁)", "(x₁ + x₂, x₁ − x₂)", "(x₁ + 1, x₂)", "(x₁², x₂²)"], [0, 1], "The first two are Ax; the others move 0 or square."),
  mc("A map with T(u + v) = T(u) + T(v) for all u, v (on ℝⁿ, T continuous) also satisfies:", "T(cu) = cT(u)", ["T(u) = u", "T is invertible", "T(u)·u = 0"], "Additivity gives T(qu) = qT(u) for rational q; continuity extends it to all c."),
  num(S`$T$ is linear and $T(\vec u)=(2,1)$, $T(\vec v)=(1,3)$. Find the first entry of $T(\vec w)$ where $\vec w=5\vec u-3\vec v$.`, 7, S`$${M([[2, 1], [1, 3]])}${col([5, -3])}=${col(["10-3", "5-9"])}$.`),
  num(S`$T:\mathbb R^3\to\mathbb R$ is linear, $T(1,0,0)=2$, $T(1,1,0)=5$, $T(1,1,1)=4$. Find $T(\vec e_3)$.`, -1, S`$T(\vec e_3)=T(1,1,1)-T(1,1,0)=4-5$.`),
  num(S`For the same $T$, find $T(\vec e_2)$.`, 3, S`$T(\vec e_2)=T(1,1,0)-T(1,0,0)=5-2$.`),
  tf("If T is linear and v₁, …, vₖ are dependent, then T(v₁), …, T(vₖ) are dependent.", true, "Apply T to a nontrivial relation."),
  tf("If T is linear and v₁, …, vₖ are independent, then T(v₁), …, T(vₖ) are independent.", false, "The zero map sends everything to 0."),
  num(S`$T(x_1,x_2)=(x_1x_2,\ x_2)$, $\vec u=(1,1)$, $\vec v=(2,0)$. Find the first entry of $T(\vec u+\vec v)-T(\vec u)-T(\vec v)$.`, 2, S`$T(3,1)=(3,1)$, $T(1,1)=(1,1)$, $T(2,0)=(0,0)$: $3-1-0$.`, F.v2([[[1, 1], "u", "blue"], [[2, 0], "v", "red"], [[3, 1], "u + v", "violet", null, true]], { xmin: -1, xmax: 4, ymin: -1, ymax: 2 })),
  wuQ([[1, 0, 1], [0, 1, 1], [0, 0, 1]], [[1, 2, 0], [0, 1, 1]], 1, 2),
];
