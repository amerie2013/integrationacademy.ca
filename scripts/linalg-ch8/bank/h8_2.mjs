// 8.2 The Characteristic Equation — 20 hard questions
import { S, F, M, mc, num, tf, ms, eig2Q, eig3Q, cplxQ } from "./gen8.mjs";

export const TOPIC = "8.2 The Characteristic Equation";
export const Q = [
  eig3Q([[0, 1, 0], [0, 0, 1], [6, -11, 6]], [1, 2, 3], "mid", F.mat([[0, 1, 0], [0, 0, 1], [6, -11, 6]], { label: "companion matrix" })),
  eig3Q([[2, 1, 1], [1, 2, 1], [1, 1, 2]], [1, 1, 4], "max"),
  eig3Q([[3, -1, -1], [-1, 3, -1], [-1, -1, 3]], [1, 4, 4], "min"),
  num(S`Find the largest eigenvalue of $${M([[2, -1, 0], [-1, 2, -1], [0, -1, 2]])}$. (3 decimals)`, 3.4142, S`Expand along row 1: $(2-\lambda)\big[(2-\lambda)^2-1\big]-(-1)\big[-(2-\lambda)\big]=(2-\lambda)\big[(2-\lambda)^2-2\big]$; roots $2$ and $2\pm\sqrt2$; largest $2+\sqrt2\approx3.4142$.`, F.mat([[2, -1, 0], [-1, 2, -1], [0, -1, 2]], { label: "A" }), 0.001),
  eig2Q([[1, 3], [3, 1]], "min", F.eig([[1, 3], [3, 1]], [[[1, 1], 4], [[1, -1], -2]])),
  cplxQ([[3, -5], [1, -1]], "mod"),
  cplxQ([[4, -5], [2, -2]], "re"),
  num(S`For which $k$ does $${M([[1, "k"], [1, 1]])}$ have non-real eigenvalues? Give the largest integer.`, -1, "(1 − λ)² = k needs k < 0."),
  num(S`For which $a$ is 3 an eigenvalue of $${M([["a", 1, 0], [1, "a", 0], [0, 0, 1]])}$ with $a\gt2$?`, 4, S`Block eigenvalues $a\pm1$ and 1; $a-1=3$.`, F.mat([["a", 1, 0], [1, "a", 0], [0, 0, 1]], { label: "A" })),
  ms("For a real 3 × 3 matrix, which are possible eigenvalue lists?", ["1, 2, 3", "1, i, −i", "2, 2, 2", "1, i, 2"], [0, 1, 2], "Non-real eigenvalues come in conjugate pairs."),
  tf("A real 3 × 3 matrix always has at least one real eigenvalue.", true, "A cubic with real coefficients has a real root."),
  num(S`$A$ is $2\times2$ with $\operatorname{tr}A=0$ and $\det A=-9$. Find its positive eigenvalue.`, 3, "λ² − 9."),
  num(S`$A$ is $2\times2$, $\operatorname{tr}A=4$, eigenvalues $2\pm bi$ with $\det A=13$. Find $b$.`, 3, "4 + b² = 13."),
  mc(S`$A^2=I$ for a $2\times2$ matrix $A\ne\pm I$. Its eigenvalues are`, S`$1$ and $-1$`, [S`$1,1$`, S`$\pm i$`, S`$0,1$`], "λ² = 1, and A ≠ ±I forces both."),
  num(S`$\det(A-\lambda I)=(1-\lambda)^2(4-\lambda)$. Find $\det(2A)$.`, 32, "det A = 4; det(2A) = 2³·4."),
  num(S`$A$ has eigenvalues $1,2,3$. Find $\det(A+I)$.`, 24, "Eigenvalues of A + I: 2, 3, 4.", F.row([[[["A + I"]], {}], "→", [[["2", "3", "4"]], { label: "eigenvalues" }]])),
  num(S`$A$ has eigenvalues $1,2,3$. Find $\operatorname{tr}(A^2)$.`, 14, "1 + 4 + 9."),
  tf("A and Aᵀ have the same characteristic polynomial.", true, "det(Aᵀ − λI) = det((A − λI)ᵀ)."),
  num(S`$A=${M([[0, 0, 4], [1, 0, 0], [0, 1, 0]])}$. Find its real eigenvalue. (3 decimals)`, 1.5874, S`$\det(A-\lambda I)=-\lambda^3+4$: $\lambda^3=4$, real root $4^{1/3}$.`, F.mat([[0, 0, 4], [1, 0, 0], [0, 1, 0]], { label: "A" }), 0.001),
  num(S`Find the smaller eigenvalue of $${M([["0.5", "0.25"], ["0.25", "0.5"]])}$. (Decimal.)`, 0.25, "0.5 ± 0.25.", undefined, 0.001),
];
