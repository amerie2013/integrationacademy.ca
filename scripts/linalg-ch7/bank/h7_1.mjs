// 7.1 Matrix Transformations — 20 hard questions
import { S, F, M, col, mc, num, tf, ms, inputQ, inRangeQ, imgQ } from "./gen7.mjs";

export const TOPIC = "7.1 Matrix Transformations";
export const Q = [
  inputQ([[1, 2, 0], [2, 3, 1], [0, 1, 2]], [5, 9, 6], 0, F.mat([[1, 2, 0, 5], [2, 3, 1, 9], [0, 1, 2, 6]], { label: "[A | b]" })),
  inputQ([[1, 2, 0], [2, 3, 1], [0, 1, 2]], [5, 9, 6], 2),
  inputQ([[1, 1, 1], [1, 2, 3], [1, 3, 6]], [6, 14, 25], 1),
  inRangeQ([[1, 0, 1], [2, 1, 3], [1, 1, 2]], [1, 2, 3], F.mat([[1, 0, 1, 1], [2, 1, 3, 2], [1, 1, 2, 3]], { label: "[A | b]" })),
  inRangeQ([[1, 0, 1], [2, 1, 3], [1, 1, 2]], [1, 3, 2]),
  num(S`For which $h$ is $(4,6,h)$ in the range of $${M([[1, 3], [2, 4], [-1, 1]])}\vec x$?`, 0, "Rows 1–2 give x = (1, 1); row 3: −1 + 1 = 0.", F.mat([[1, 3, 4], [2, 4, 6], [-1, 1, "h"]], { label: "[A | b]" })),
  num(S`For which $k$ is $(1,0,k)$ in the range of $${M([[1, 1], [1, -1], [2, 0]])}\vec x$?`, 1, "Range: x₃ = x₁ + x₂ (columns (1,1,2), (1,−1,0)), so k = 1 + 0."),
  num(S`The range of $${M([[1, 0], [0, 1], [2, 3]])}\vec x$ is the plane $x_3=ax_1+bx_2$. Find $a+b$.`, 5, S`$T(s,t)=(s,t,2s+3t)$: $a=2$, $b=3$.`, F.mat([[1, 0], [0, 1], [2, 3]], { label: "A" })),
  num(S`$T$ maps the square with corners $(0,0),(1,0),(1,1),(0,1)$ by $${M([[3, 1], [1, 2]])}$. Find the area of the image.`, 5, "|det A| = |6 − 1|.", F.sq([[3, 1], [1, 2]])),
  num(S`The line $x_2=2x_1$ is mapped by $${M([[1, 1], [0, 3]])}$ to a line $x_2=mx_1$. Find $m$.`, 2, S`$A(1,2)=(1+2,\ 6)=(3,6)$: slope 2.`, F.pt([[1, 1], [0, 3]], [1, 2])),
  num(S`Which $t$ makes $T(1,t)=T(3,0)$ for $A=${M([[1, 2], [2, 4]])}$?`, 1, S`Need $A(1-3,\ t)=\vec 0$: $(-2+2t,\ -4+4t)=\vec 0$, $t=1$.`),
  tf(S`If $\vec u$ and $\vec v$ both satisfy $A\vec x=\vec b$, then $\vec u-\vec v$ satisfies $A\vec x=\vec 0$.`, true, "A(u − v) = b − b = 0."),
  ms("Which are true for T(x) = Ax with A of size 2 × 3?", ["T: ℝ³ → ℝ²", "some b ∈ ℝ² can have infinitely many inputs", "the range can be all of ℝ³", "T(x) = b always has a solution"], [0, 1], "Wide: free variables are possible; the range lies in ℝ²; consistency depends on A."),
  imgQ([[2, -1, 0, 3], [1, 0, 4, -2], [0, 5, 1, 1]], [1, -1, 2, 1], 2, F.mat([[2, -1, 0, 3], [1, 0, 4, -2], [0, 5, 1, 1]], { label: "A (3 × 4)" })),
  num(S`$A=${M([[1, 2], [3, 4]])}$ sends $\vec x$ to $(5,11)$ and $\vec y$ to $(1,1)$. Find the first entry of $T(\vec x-2\vec y)$.`, 3, S`$T(\vec x-2\vec y)=T\vec x-2T\vec y=${col([5, 11])}-2${col([1, 1])}=${col([3, 9])}$.`),
  mc(S`$A$ is $3\times3$ and $A\vec x=\vec b$ has two solutions. Then`, "it has infinitely many", ["it has exactly two", "A is invertible", "b = 0"], "u + t(u − v) solves it for every t."),
  num(S`The triangle $(0,0),(2,0),(0,2)$ is mapped by $${M([[1, 1], [-1, 2]])}$. Find its new area.`, 6, "Old area 2 times |det A| = 3.", F.shape([[1, 1], [-1, 2]], [[0, 0], [2, 0], [0, 2]])),
  inRangeQ([[1, 2, 3], [4, 5, 6], [7, 8, 9]], [1, 1, 1]),
  inRangeQ([[1, 2, 3], [4, 5, 6], [7, 8, 9]], [1, 0, 0]),
  tf(S`The range of $T(\vec x)=A\vec x$ always contains every column of $A$.`, true, S`Column $j$ is $A\vec e_j$.`, F.mat([[1, 4], [2, 5], [3, 6]], { label: "columns are images" })),
];
