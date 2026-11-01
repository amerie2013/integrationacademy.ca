// 8.4 Diagonalisation — 20 hard questions
import { S, F, M, col, mc, num, tf, ms, prod } from "./gen8.mjs";

export const TOPIC = "8.4 Diagonalisation";
export const Q = [
  num(S`$A=${M([[4, -1, 6], [2, 1, 6], [2, -1, 8]])}=PDP^{-1}$ with $P=${M([[1, -3, 1], [2, 0, 1], [0, 1, 1]])}$. Find $D_{33}$.`, 9, `Column 3 of AP: ${prod([[4, -1, 6], [2, 1, 6], [2, -1, 8]], [[1], [1], [1]])} = 9(1, 1, 1).`, F.mat([[1, -3, 1], [2, 0, 1], [0, 1, 1]], { label: "P" })),
  num(S`$A=${M([[1, 4, 5], [0, 2, 6], [0, 0, 3]])}$ has eigenvector $(29,12,c)$ for $\lambda=3$. Find $c$.`, 2, S`Row 2 of $(A-3I)\vec v=\vec 0$: $-12+6c=0$.`),
  num(S`Build $A$ with $A(1,1)=2(1,1)$ and $A(1,-1)=-(1,-1)$. Find $a_{11}$. (Decimal.)`, 0.5, S`$A=\tfrac12${M([[1, 3], [3, 1]])}$.`, F.eig([[0.5, 1.5], [1.5, 0.5]], [[[1, 1], 2], [[1, -1], -1]]), 0.001),
  num(S`Build $A$ with $A(1,0)=2(1,0)$ and $A(1,1)=5(1,1)$. Find $a_{12}$.`, 3, S`$P=${M([[1, 1], [0, 1]])}$, $A=PDP^{-1}=${M([[2, 3], [0, 5]])}$.`),
  num(S`Build $A$ with $A(2,1)=\vec 0$ and $A(1,-2)=5(1,-2)$. Find $a_{22}$.`, 4, S`$P=${M([[2, 1], [1, -2]])}$, $\det P=-5$, $A=PDP^{-1}=${M([[1, -2], [-2, 4]])}$.`, F.eig([[1, -2], [-2, 4]], [[[2, 1], 0], [[1, -2], 5]])),
  ms("Which are diagonalisable?", ["[1 1; 0 1]", "[1 0; 0 0]", "[2 1; 0 3]", "[0 −1; 1 0] (over ℝ)"], [1, 2], "Defective; diagonal; distinct eigenvalues; complex eigenvalues."),
  tf("A matrix with all eigenvalues equal to 1 and diagonalisable must be I.", true, "PIP⁻¹ = I."),
  num(S`For how many integer $a$ in $\{-2,\dots,2\}$ is $${M([[1, 1, 0], [0, 1, 0], [0, 0, "a"]])}$ diagonalisable?`, 0, "dim E₁ < algebraic multiplicity for every a."),
  num(S`$A$ ($4\times4$) has eigenvalues $2,2,5,5$, $\dim E_2=2$, $\dim E_5=2$. How many columns does $P$ have?`, 4, "Diagonalisable: 4 independent eigenvectors."),
  tf(S`If $A$ and $B$ are diagonalisable with the same $P$, then $AB=BA$.`, true, "PD₁D₂P⁻¹ = PD₂D₁P⁻¹."),
  num(S`$A=P\operatorname{diag}(1,2,3)P^{-1}$. Find $\det(A^2-I)$.`, 0, "Eigenvalues 0, 3, 8."),
  num(S`$A=P\operatorname{diag}(1,2,3)P^{-1}$. Find $\operatorname{tr}(A^{-1})$. (Decimal.)`, 1.8333, "1 + ½ + ⅓.", F.row([[[["A⁻¹"]], {}], "=", [[["P"]], {}], [[[1, 0, 0], [0, "½", 0], [0, 0, "⅓"]], { label: "D⁻¹" }], [[["P⁻¹"]], {}]]), 0.001),
  mc(S`$A^2=A$ (a projection). Then $A$ is`, "diagonalisable with eigenvalues 0 and 1", ["never diagonalisable", "invertible", "always the identity"], "Its minimal polynomial divides λ(λ − 1), with distinct roots."),
  tf(S`$${M([[1, 1], [0, 1]])}$ is similar to $I$.`, false, "Only I is similar to I."),
  num(S`$A=PDP^{-1}$, $P=${M([[1, 1], [-1, -2]])}$, $D=\operatorname{diag}(5,3)$. Find $a_{21}$.`, -4, S`$P^{-1}=${M([[2, 1], [-1, -1]])}$; $PD=${M([[5, 3], [-5, -6]])}$; $A=${M([[7, 2], [-4, 1]])}$.`),
  num(S`$A=${M([[0, 1], [6, 1]])}$. Find the eigenvalue of $(1,3)$.`, 3, S`$A${col([1, 3])}=${col([3, "6+3"])}=3${col([1, 3])}$.`, F.eig([[0, 1], [6, 1]], [[[1, 3], 3], [[1, -2], -2]])),
  tf("If A is diagonalisable, then A + 2I is diagonalisable with the same P.", true, "P(D + 2I)P⁻¹."),
  num(S`$A$ ($3\times3$) is diagonalisable with $\operatorname{rank}A=1$ and $\operatorname{tr}A=7$. Find its nonzero eigenvalue.`, 7, "Two zero eigenvalues; the sum is the trace."),
  tf("Two diagonalisable matrices with the same eigenvalues (with multiplicity) are similar.", true, "Both are similar to the same D."),
  num(S`$A=P\operatorname{diag}(2,-1)P^{-1}$. Find $\det(A-3I)$.`, 4, "(2 − 3)(−1 − 3).", F.mat([[2, 0], [0, -1]], { label: "D" })),
];
