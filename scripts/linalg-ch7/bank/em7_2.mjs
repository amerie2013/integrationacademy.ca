// 7.2 Linear Transformations — 20 easy + 20 medium questions
import { S, F, M, col, mc, num, tf, fill, superQ } from "./gen7.mjs";

const easy = [
  tf(S`$T(x_1,x_2)=(x_1+x_2,\ 3x_2)$ is linear.`, true, S`$T(\vec x)=${M([[1, 1], [0, 3]])}\vec x$.`),
  tf(S`$T(x_1,x_2)=(x_1+1,\ x_2)$ is linear.`, false, S`$T(\vec 0)=(1,0)\ne\vec 0$.`, F.v2([[[1, 0], "T(0)", "red"]], { xmin: -1, xmax: 2, ymin: -1, ymax: 1 })),
  tf(S`$T(x_1,x_2)=(x_1^2,\ x_2)$ is linear.`, false, S`$T(2,0)=(4,0)\ne2T(1,0)=(2,0)$.`),
  tf(S`$T(x_1,x_2)=(0,\ 0)$ is linear.`, true, "The zero matrix."),
  tf(S`$T(x)=5x$ on $\mathbb R$ is linear.`, true, "A 1 × 1 matrix [5]."),
  tf(S`$T(x)=5x+2$ on $\mathbb R$ is linear.`, false, "T(0) = 2."),
  fill("A linear map always sends the zero vector to ___.", ["the zero vector", "0", "zero", "0 vector"], "T(0) = T(0·0) = 0·T(0) = 0."),
  num(S`$T$ is linear and $T(\vec u)=(3,-1)$. Find the first entry of $T(4\vec u)$.`, 12, "4·3."),
  num(S`$T$ is linear and $T(\vec u)=(3,-1)$. Find the second entry of $T(-\vec u)$.`, 1, "−(−1)."),
  superQ([1, 2], [0, 1], 1, 1, 1),
  superQ([2, 0], [1, 3], 2, 1, 0),
  superQ([1, -1], [4, 2], 1, -1, 0, F.v2([[[1, -1], "T(u)", "blue"], [[4, 2], "T(v)", "red"]], { xmin: -4, xmax: 5, ymin: -3, ymax: 3 })),
  mc("Which map is linear?", "(2x₁ − x₂, x₁)", ["(x₁x₂, x₁)", "(x₁, x₂ + 1)", "(|x₁|, x₂)"], "Only the first is Ax."),
  mc("Two properties define a linear map:", "T(u + v) = T(u) + T(v) and T(cu) = cT(u)", ["T(0) = 0 and T(1) = 1", "T is one-to-one and onto", "T(u)·T(v) = u·v"], "Additivity and homogeneity."),
  num(S`$T$ is linear with $T(\vec e_1)=(2,5)$, $T(\vec e_2)=(1,-1)$. Find the second entry of $T(1,1)$.`, 4, "5 + (−1).", F.sq([[2, 1], [5, -1]], { names: ["T(e₁)", "T(e₂)"] })),
  num(S`$T$ is linear with $T(\vec e_1)=(2,5)$, $T(\vec e_2)=(1,-1)$. Find the first entry of $T(3,-2)$.`, 4, "3·2 − 2·1."),
  tf("If T(0) = 0, then T is linear.", false, "e.g. T(x₁, x₂) = (x₁x₂, 0)."),
  tf("Every matrix transformation is linear.", true, "A(u + v) = Au + Av, A(cu) = cAu."),
  num(S`$T:\mathbb R\to\mathbb R$ is linear and $T(1)=7$. Find $T(3)$.`, 21, "T(3) = 3T(1)."),
  tf(S`$T(\vec x)=(\vec a\cdot\vec x)$ for a fixed $\vec a$ is linear.`, true, S`It is $\vec a^T\vec x$, a $1\times n$ matrix.`),
];

const medium = [
  superQ([2, 0, 1], [1, -1, 3], 2, 3, 2, F.mat([[2, 1], [0, -1], [1, 3]], { label: "[T(u) T(v)]" })),
  superQ([2, 0, 1], [1, -1, 3], 2, 3, 1),
  superQ([1, 4], [-2, 1], -3, 2, 0),
  superQ([5, -1], [2, 2], 1, -2, 1),
  num(S`$T$ is linear, $T(1,0)=(1,1)$, $T(1,1)=(4,0)$. Find the first entry of $T(0,1)$.`, 3, S`$T(0,1)=T(1,1)-T(1,0)=(3,-1)$.`, F.v2([[[1, 0], "(1,0)", "blue"], [[1, 1], "(1,1)", "red"]], { xmin: -1, xmax: 2, ymin: -1, ymax: 2 })),
  num(S`$T$ is linear, $T(1,0)=(1,1)$, $T(1,1)=(4,0)$. Find the second entry of $T(2,3)$.`, -1, S`$T(0,1)=(3,-1)$; $${M([[1, 3], [1, -1]])}${col([2, 3])}=${col(["2+9", "2-3"])}$.`),
  num(S`$T:\mathbb R^2\to\mathbb R$ is linear, $T(1,1)=3$, $T(1,-1)=1$. Find $T(1,0)$.`, 2, "(1,0) = ½[(1,1) + (1,−1)]: ½(3 + 1)."),
  num(S`$T:\mathbb R^2\to\mathbb R$ is linear, $T(1,1)=3$, $T(1,-1)=1$. Find $T(0,1)$.`, 1, "(0,1) = ½[(1,1) − (1,−1)]: ½(3 − 1)."),
  tf(S`$T(x_1,x_2)=(x_1x_2,\ 0)$ satisfies $T(\vec 0)=\vec 0$ but is not linear.`, true, S`$T(2(1,1))=(4,0)\ne2T(1,1)=(2,0)$.`),
  tf(S`$T(x_1,x_2)=(\sin x_1,\ x_2)$ is linear.`, false, S`$T(2\cdot\tfrac\pi2,0)=(\sin\pi,0)=(0,0)$, but $2T(\tfrac\pi2,0)=2(1,0)=(2,0)$: scaling fails.`),
  num(S`For $T(\vec x)=(\vec a\cdot\vec x)\vec b$ with $\vec a=(1,2)$, $\vec b=(3,-1)$, find the $(1,2)$ entry of its matrix $\vec b\vec a^T$.`, 6, S`$${col([3, -1])}${M([[1, 2]])}=${M([[3, 6], [-1, -2]])}$.`, F.row([[[[3], [-1]], { label: "b" }], [[[1, 2]], { label: "aᵀ" }]])),
  num(S`$T(x_1,x_2)=(x_1-2,\ x_2)$. Find the first entry of $T(\vec 0)$.`, -2, "0 − 2: so T is not linear."),
  num(S`For $T(x_1,x_2)=(x_1^2,\ x_2)$ and $\vec u=(1,0)$, find the first entry of $T(3\vec u)-3T(\vec u)$.`, 6, "9 − 3: not linear."),
  mc(S`$T$ is linear, $T(1,2)=(0,1)$. Then $T(-2,-4)=$`, "(0, −2)", ["(0, 2)", "(0, −1)", "cannot tell"], "(−2,−4) = −2(1,2)."),
  tf(S`If $T$ is linear and $T(\vec u)=T(\vec v)=\vec 0$, then $T(2\vec u-5\vec v)=\vec 0$.`, true, "2·0 − 5·0."),
  num(S`$T$ is linear on $\mathbb R^3$, $T(\vec e_1)=1$, $T(\vec e_2)=-2$, $T(\vec e_3)=4$. Find $T(2,1,1)$.`, 4, "2 − 2 + 4.", F.mat([[1, -2, 4]], { label: "[T(e₁) T(e₂) T(e₃)]" })),
  tf(S`$T(\vec x)=A\vec x+\vec b$ is linear exactly when $\vec b=\vec 0$.`, true, "T(0) = b."),
  mc("The composition of two linear maps is:", "linear", ["never linear", "linear only if both are invertible", "linear only in ℝ²"], "S(T(u + v)) = S(Tu) + S(Tv), and scalars likewise."),
  num(S`$T$ is linear, $T(2,1)=(5,0)$, $T(1,1)=(3,1)$. Find the second entry of $T(1,0)$.`, -1, S`$(1,0)=(2,1)-(1,1)$: $(5,0)-(3,1)=(2,-1)$.`),
  tf(S`$T(x_1,x_2)=(2x_1,\ |x_2|)$ is linear.`, false, S`$T(0,-1)=(0,1)\ne-T(0,1)=(0,-1)$.`),
];

export const E = easy;
export { medium as M };
