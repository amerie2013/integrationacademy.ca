// 8.6 Complex Eigenvalues — 20 easy + 20 medium questions
import { S, F, M, col, mc, num, tf, fill, cplxQ, prod } from "./gen8.mjs";

const easy = [
  cplxQ([[0, -2], [2, 0]], "im"),
  cplxQ([[3, -4], [4, 3]], "re", F.sq([[0.6, -0.8], [0.8, 0.6]])),
  cplxQ([[3, -4], [4, 3]], "mod"),
  cplxQ([[1, -1], [1, 1]], "mod"),
  num(S`$C=${M([[1, -1], [1, 1]])}$ rotates by how many degrees?`, 45, "Angle of (1, 1)."),
  num(S`$C=${M([[0, -3], [3, 0]])}$ rotates by how many degrees?`, 90, "Angle of (0, 3)."),
  num(S`$C=${M([[0, -3], [3, 0]])}$ scales lengths by`, 3, "r = 3."),
  fill("Non-real eigenvalues of a real matrix come in ___ pairs.", ["conjugate", "complex conjugate"], "λ and λ̄."),
  tf(S`A real matrix with eigenvalue $2+3i$ also has eigenvalue $2-3i$.`, true, "Conjugate pairs."),
  tf(S`Rotation matrices $R_\theta$ ($0<\theta<180^\circ$) have real eigenvalues.`, false, "λ = cos θ ± i sin θ."),
  mc(S`$C=${M([["a", "-b"], ["b", "a"]])}$ has eigenvalues`, S`$a\pm bi$`, [S`$\pm a$`, S`$a\pm b$`, S`$b\pm ai$`], "(a − λ)² + b² = 0."),
  num(S`$|\lambda|$ for $\lambda=3+4i$?`, 5, "√(9 + 16)."),
  mc("If |λ| < 1 for complex eigenvalues, orbits of x_{k+1} = Ax_k:", "spiral inward", ["spiral outward", "are circles", "go off along a line"], "Each step shrinks by |λ|.", F.orb([[0.5, -0.5], [0.5, 0.5]], [4, 0], 10)),
  mc("If |λ| = 1 for complex eigenvalues, orbits:", "stay on closed curves", ["spiral inward", "spiral outward", "converge to 0"], "No shrinking or growth."),
  num(S`$A$ is real $2\times2$ with eigenvalues $1\pm2i$. Find $\det A$.`, 5, "1 + 4."),
  num(S`$A$ is real $2\times2$ with eigenvalues $1\pm2i$. Find $\operatorname{tr}A$.`, 2, "1 + 1."),
  tf("A real 3 × 3 matrix can have three non-real eigenvalues.", false, "Non-real eigenvalues pair up; one must be real."),
  num(S`Find the real eigenvalue of $${M([[0, -1, 0], [1, 0, 0], [0, 0, 5]])}$.`, 5, "Block form: ±i and 5."),
  tf(S`$(i,1)$ is an eigenvector of $${M([[0, -1], [1, 0]])}$.`, true, S`$${M([[0, -1], [1, 0]])}${col(["i", 1])}=${col([-1, "i"])}=i${col(["i", 1])}$.`),
  num(S`$\lambda=\cos60^\circ+i\sin60^\circ$. Find its real part. (Decimal.)`, 0.5, "cos 60°.", undefined, 0.001),
];

const medium = [
  cplxQ([[1, -2], [1, 3]], "im"),
  cplxQ([[2, -5], [1, 0]], "re"),
  cplxQ([[3, -5], [1, -1]], "im", F.mat([[3, -5], [1, -1]], { label: "A" })),
  cplxQ([[0.5, -0.5], [0.5, 0.5]], "mod"),
  cplxQ([[0.9, -0.2], [0.2, 0.9]], "mod", F.orb([[0.9, -0.2], [0.2, 0.9]], [3, 0], 12)),
  num(S`$\lambda=2-i$ has eigenvector $\vec v=(-1-i,1)$ for $A=${M([[1, -2], [1, 3]])}$. Then $P=[\operatorname{Re}\vec v\ \operatorname{Im}\vec v]$. Find the $(1,2)$ entry of $P$.`, -1, S`$\operatorname{Im}\vec v=(-1,0)$.`),
  num(S`For the same $A$, $C=${M([["a", "-b"], ["b", "a"]])}$ with $\lambda=a-bi=2-i$. Find $b$.`, 1, "λ = 2 − 1·i."),
  tf(S`$P=${M([[-1, -1], [1, 0]])}$, $C=${M([[2, -1], [1, 2]])}$ satisfy $AP=PC$ for $A=${M([[1, -2], [1, 3]])}$.`, true, `AP = ${prod([[1, -2], [1, 3]], [[-1, -1], [1, 0]])} and PC = ${prod([[-1, -1], [1, 0]], [[2, -1], [1, 2]])}.`),
  num(S`Compute the $(1,1)$ entry of $C^2$ for $C=${M([[1, -1], [1, 1]])}$.`, 0, S`$C^2=${M([[0, -2], [2, 0]])}$.`),
  num(S`Compute the $(1,1)$ entry of $C^4$ for $C=${M([[1, -1], [1, 1]])}$.`, -4, S`$C^4=(\sqrt2)^4R_{180^\circ}=-4I$.`),
  num(S`What is the smallest integer $k$ in $\{-3,\dots,3\}$ for which $${M([[1, "k"], [1, 1]])}$ has real eigenvalues?`, 0, "Real iff k ≥ 0."),
  num(S`The orbit of $\vec x_{k+1}=C\vec x_k$, $C=${M([["0.6", "-0.8"], ["0.8", "0.6"]])}$, from $(5,0)$: find $|\vec x_{10}|$.`, 5, "|λ| = 1: lengths are kept."),
  num(S`$A=${M([["0.5", "-0.5"], ["0.5", "0.5"]])}$. Find the $(1,1)$ entry of $A^8$. (Decimal.)`, 0.0625, "A⁸ = (√0.5)⁸ R₃₆₀ = I/16.", undefined, 0.001),
  mc(S`$C=${M([["\\sqrt3", -1], [1, "\\sqrt3"]])}$ equals`, S`$2R_{30^\circ}$`, [S`$2R_{60^\circ}$`, S`$\sqrt3R_{30^\circ}$`, S`$R_{30^\circ}$`], "r = 2, φ = 30°."),
  tf(S`$\operatorname{Re}\vec v$ and $\operatorname{Im}\vec v$ are independent for a non-real eigenvalue of a real $2\times2$ matrix.`, true, "Otherwise λ would be real."),
  num(S`$A$ (real $2\times2$) has $\operatorname{tr}A=4$, $\det A=13$. Find the positive imaginary part of its eigenvalues.`, 3, "λ = 2 ± 3i."),
  num(S`Find the angle (degrees) of $C=${M([[0, -1], [1, 0]])}$ times $C=${M([[1, -1], [1, 1]])}$ (the product).`, 135, "Angles add: 90 + 45."),
  num(S`$A$ has eigenvalues $0.8\pm0.6i$. Find $|\lambda|$.`, 1, "√(0.64 + 0.36)."),
  tf(S`$A=${M([[2, 1], [-1, 2]])}$ has eigenvalues $2\pm i$.`, true, "tr 4, det 5."),
  num(S`Smallest $n\ge1$ with $R_{72^\circ}^n=I$?`, 5, "72n multiple of 360.", F.orb([[Math.cos(1.2566), -Math.sin(1.2566)], [Math.sin(1.2566), Math.cos(1.2566)]], [3, 0], 5)),
];

export const E = easy;
export { medium as M };
