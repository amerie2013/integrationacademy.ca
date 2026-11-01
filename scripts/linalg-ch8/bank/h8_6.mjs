// 8.6 Complex Eigenvalues — 20 hard questions
import { S, F, M, col, mc, num, tf, ms, cplxQ, prod } from "./gen8.mjs";

export const TOPIC = "8.6 Complex Eigenvalues";
export const Q = [
  cplxQ([[1, -5], [1, -3]], "re", F.mat([[1, -5], [1, -3]], { label: "A" })),
  cplxQ([[4, -5], [2, -2]], "im"),
  cplxQ([[1, -3], [1, 2]], "mod"),
  cplxQ([[0.8, -0.6], [0.6, 0.8]], "mod", F.orb([[0.8, -0.6], [0.6, 0.8]], [3, 0], 10)),
  tf(S`$P=${M([[2, -1], [1, 0]])}$, $C=${M([[-1, -1], [1, -1]])}$ satisfy $AP=PC$ for $A=${M([[1, -5], [1, -3]])}$.`, true, `AP = ${prod([[1, -5], [1, -3]], [[2, -1], [1, 0]])}, PC = ${prod([[2, -1], [1, 0]], [[-1, -1], [1, -1]])}.`),
  tf(S`$P=${M([[1, 0], [1, 2]])}$, $C=${M([[1, -2], [2, 1]])}$ satisfy $AP=PC$ for $A=${M([[2, -1], [5, 0]])}$.`, true, `AP = ${prod([[2, -1], [5, 0]], [[1, 0], [1, 2]])}, PC = ${prod([[1, 0], [1, 2]], [[1, -2], [2, 1]])}.`, F.row([[[[1, 0], [1, 2]], { label: "P" }], [[[1, -2], [2, 1]], { label: "C" }]])),
  num(S`$A=${M([[3, -5], [1, -1]])}$. For $\lambda=1-i$ the eigenvector is $(2-i,1)$. Find the $(1,2)$ entry of $P=[\operatorname{Re}\vec v\ \operatorname{Im}\vec v]$.`, -1, S`$\operatorname{Im}\vec v=(-1,0)$.`),
  num(S`$C=${M([[1, -1], [1, 1]])}$. Find the smallest $k\ge1$ with $C^k$ a real multiple of $I$.`, 4, "φ = 45°: 4·45° = 180°.", F.orb([[1, -1], [1, 1]], [0.3, 0], 6)),
  num(S`For that $k$, find the multiple: $C^k=cI$, $c=$?`, -4, S`$(\sqrt2)^4\cos180^\circ$.`),
  ms("Which real 2 × 2 matrices have non-real eigenvalues?", ["[0 −1; 1 0]", "[1 2; 3 4]", "[2 −3; 3 2]", "[1 1; 0 1]"], [0, 2], "Negative discriminant only for the first and third."),
  num(S`For which $k$ does $${M([[2, "k"], [3, 2]])}$ have eigenvalues $2\pm3i$?`, -3, "(2 − λ)² − 3k = 0 ⇒ λ = 2 ± √(3k); need 3k = −9."),
  num(S`$A$ is real $2\times2$ with $\operatorname{tr}A=2$ and eigenvalue modulus $\sqrt{10}$. Find the positive imaginary part.`, 3, "a = 1, a² + b² = 10."),
  tf("If x_{k+1} = Ax_k has complex eigenvalues of modulus 1.1, then |x_k| → ∞ for every x₀ ≠ 0.", true, "Each step scales by 1.1 in the rotated coordinates."),
  num(S`$A=PCP^{-1}$ with $C=${M([["0.6", "-0.8"], ["0.8", "0.6"]])}$. Find $\det A$.`, 1, "det C = 0.36 + 0.64."),
  mc("The real canonical form of a real 2 × 2 matrix with eigenvalues a ± bi (b ≠ 0) is:", "[a −b; b a]", ["[a 0; 0 b]", "[a 1; 0 a]", "[a b; b a]"], "Rotation–scaling."),
  num(S`Find the real part of the eigenvalues of $${M([[0, 1], [-5, 2]])}$.`, 1, "tr 2, det 5: 1 ± 2i."),
  num(S`$\lambda=r(\cos\varphi+i\sin\varphi)$ with $r=2$, $\varphi=60^\circ$. Find $\operatorname{Re}(\lambda^3)$.`, -8, "λ³ = 8(cos 180° + i sin 180°).", F.sq([[1, -Math.sqrt(3)], [Math.sqrt(3), 1]])),
  tf(S`The matrix $${M([[0, 1, 0], [0, 0, 1], [1, 0, 0]])}$ has a real eigenvalue 1 and a complex pair.`, true, "λ³ = 1: 1 and cos 120° ± i sin 120°."),
  num(S`Find $|\lambda|$ for the complex eigenvalues of $${M([[0, 1, 0], [0, 0, 1], [1, 0, 0]])}$.`, 1, "Cube roots of unity."),
  num(S`$C=${M([["a", "-b"], ["b", "a"]])}$ with $a=b=1$. Find $\det(C^{10})$.`, 1024, "(a² + b²)¹⁰ = 2¹⁰.", F.mat([[1, -1], [1, 1]], { label: "C" })),
];
