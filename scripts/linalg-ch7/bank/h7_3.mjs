// 7.3 The Standard Matrix — 20 hard questions
import { S, F, M, col, mc, num, tf, ms, wuQ, stdQ } from "./gen7.mjs";

export const TOPIC = "7.3 The Standard Matrix";
export const Q = [
  wuQ([[1, 1, 1], [0, 1, 1], [0, 0, 1]], [[1, 0, 3], [2, 1, 3]], 0, 1, F.mat([[1, 1, 1], [0, 1, 1], [0, 0, 1]], { label: "U" })),
  wuQ([[1, 1, 1], [0, 1, 1], [0, 0, 1]], [[1, 0, 3], [2, 1, 3]], 1, 2),
  wuQ([[1, 2], [3, 4]], [[1, 0], [0, 1]], 0, 1),
  wuQ([[1, 2], [3, 4]], [[1, 0], [0, 1]], 1, 0, F.row([[[["A"]], {}], [[[1, 2], [3, 4]], { label: "U" }], "=", [[[1, 0], [0, 1]], { label: "I" }]])),
  wuQ([[1, 0, 1], [1, 1, 0], [0, 1, 1]], [[2, 1, 1], [0, 2, 2], [1, 1, 2]], 2, 2),
  wuQ([[2, 1], [5, 3]], [[1, 1], [1, -1], [0, 2]], 2, 1),
  stdQ([[1, 0, -2, 3], [0, 4, 1, -1]], 1, 3, F.mat([[1, 0, -2, 3], [0, 4, 1, -1]], { label: "A" })),
  num(S`$T$ rotates by $90^\circ$ and then doubles every vector. Find the $(2,1)$ entry of its standard matrix.`, 2, S`$T(\vec e_1)=2(0,1)=(0,2)$.`, F.sq([[0, -2], [2, 0]])),
  num(S`$T$ reflects in $x_2=x_1$ and then projects onto the $x_1$-axis. Find the $(1,2)$ entry.`, 1, S`$\vec e_2\to\vec e_1\to\vec e_1$; $\vec e_1\to\vec e_2\to\vec 0$: $A=${M([[0, 1], [0, 0]])}$.`),
  num(S`$T:\mathbb R^2\to\mathbb R^2$ is linear with $T(2,1)=(1,0)$ and $T(1,1)=(0,1)$. Find $a_{11}+a_{22}$.`, 3, S`$U=${M([[2, 1], [1, 1]])}$, $W=I$: $A=U^{-1}=${M([[1, -1], [-1, 2]])}$.`, F.v2([[[2, 1], "(2,1)", "blue"], [[1, 1], "(1,1)", "red"]], { xmin: -1, xmax: 3, ymin: -1, ymax: 2 })),
  tf(S`Given $T(\vec u_1),\dots,T(\vec u_n)$ for ANY $n$ vectors $\vec u_j$ in $\mathbb R^n$, the standard matrix is determined.`, false, "Only when the uⱼ form a basis (U invertible)."),
  ms("Which data determine a unique linear T: ℝ² → ℝ²?", ["T(1,0), T(0,1)", "T(1,1), T(1,−1)", "T(1,2), T(2,4)", "T(1,1) alone"], [0, 1], "Two independent inputs are needed."),
  num(S`$T:\mathbb R^3\to\mathbb R^3$ sends $\vec e_1\to\vec e_2$, $\vec e_2\to\vec e_3$, $\vec e_3\to\vec e_1$. Find the $(1,3)$ entry.`, 1, S`Column 3 is $T(\vec e_3)=\vec e_1$: $A=${M([[0, 0, 1], [1, 0, 0], [0, 1, 0]])}$.`, F.mat([[0, 0, 1], [1, 0, 0], [0, 1, 0]], { label: "cyclic shift" })),
  num(S`For the same $T$, find $T^3(\vec e_1)$'s first entry.`, 1, "Three shifts return e₁: A³ = I."),
  mc(S`$T(\vec x)=\vec x-2(\vec u\cdot\vec x)\vec u$ with unit $\vec u$ has matrix`, S`$I-2\vec u\vec u^T$`, [S`$I+2\vec u\vec u^T$`, S`$\vec u\vec u^T$`, S`$2\vec u^T\vec u-I$`], "(u·x)u = uuᵀx."),
  num(S`For $\vec u=\tfrac15(3,4)$, find the $(1,1)$ entry of $I-2\vec u\vec u^T$. (Decimal.)`, 0.28, S`$1-2\cdot\tfrac9{25}=\tfrac7{25}$.`, undefined, 0.001),
  num(S`$T(x_1,x_2)=(x_1+3x_2,\ 2x_1-x_2,\ x_2)$. Find the sum of all entries of its standard matrix.`, 6, S`$A=${M([[1, 3], [2, -1], [0, 1]])}$: 1 + 3 + 2 − 1 + 0 + 1.`),
  tf(S`If $T(\vec u_1)=\vec w_1$, $T(\vec u_2)=\vec w_2$ with $\vec u_1,\vec u_2$ independent in $\mathbb R^2$, then $A=WU^{-1}$.`, true, "U is invertible."),
  num(S`$T$ is linear on $\mathbb R^2$ with $T(1,1)=(3,3)$ and $T(1,-1)=(1,-1)$. Find $a_{12}$.`, 1, S`$A=WU^{-1}=${M([[3, 1], [3, -1]])}\cdot\tfrac12${M([[1, 1], [1, -1]])}=${M([[2, 1], [1, 2]])}$.`, F.v2([[[1, 1], "(1,1) → 3×", "blue"], [[1, -1], "(1,−1) fixed", "red"]], { xmin: -2, xmax: 2, ymin: -2, ymax: 2 })),
  stdQ([[0, 2, -1], [1, 0, 5], [3, -3, 0]], 2, 1),
];
