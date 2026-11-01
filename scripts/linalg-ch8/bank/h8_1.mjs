// 8.1 Eigenvectors and Eigenvalues — 20 hard questions
import { S, F, M, col, mc, num, tf, ms, eigOfQ, isEigValQ, eigVecQ, dimEQ } from "./gen8.mjs";

export const TOPIC = "8.1 Eigenvectors and Eigenvalues";
export const Q = [
  eigVecQ([[2, 1, 1], [1, 2, 1], [1, 1, 2]], 4, 2, 0, F.mat([[-2, 1, 1], [1, -2, 1], [1, 1, -2]], { label: "A − 4I" })),
  eigVecQ([[0, 1, 0], [0, 0, 1], [6, -11, 6]], 2, 2, 0),
  eigVecQ([[0, 1, 0], [0, 0, 1], [6, -11, 6]], 3, 1, 0),
  dimEQ([[3, 0, 0, 0], [0, 3, 0, 0], [1, 0, 3, 0], [0, 0, 0, 2]], 3, F.mat([[0, 0, 0, 0], [0, 0, 0, 0], [1, 0, 0, 0], [0, 0, 0, -1]], { label: "A − 3I" })),
  isEigValQ([[0, 1, 0], [0, 0, 1], [6, -11, 6]], 1),
  isEigValQ([[0, 1, 0], [0, 0, 1], [6, -11, 6]], 4),
  eigOfQ([[2, -1, 0], [-1, 2, -1], [0, -1, 2]], [1, 0, -1], F.mat([[2, -1, 0], [-1, 2, -1], [0, -1, 2]], { label: "A" })),
  num(S`$A\vec x=2\vec x$. Find the eigenvalue of $\vec x$ for $(A-I)^{-1}$.`, 1, "(2 − 1)⁻¹."),
  num(S`$P^2=P$ and $P\vec x=\lambda\vec x$ with $\lambda\ne0$. Find $\lambda$.`, 1, "λ² = λ."),
  num(S`$N^3=0$ and $N\vec x=\lambda\vec x$. Find $\lambda$.`, 0, "λ³ = 0."),
  ms("Which are always eigenvalues of a projection P onto a line in ℝ²?", ["0", "1", "−1", "2"], [0, 1], "The line is kept (1), the perpendicular crushed (0).", F.eig([[0.5, 0.5], [0.5, 0.5]], [[[1, 1], 1], [[1, -1], 0]])),
  tf(S`If $A\vec x=\lambda\vec x$ and $B\vec x=\mu\vec x$, then $(AB)\vec x=\lambda\mu\vec x$.`, true, S`$AB\vec x=A(\mu\vec x)=\mu\lambda\vec x$.`),
  tf("A and A + I always have the same eigenvectors.", true, "(A + I)x = λx + x = (λ + 1)x."),
  tf("A and A² always have the same eigenvectors.", false, "A rotation by 90° has none, but A² = −I has every vector."),
  num(S`For which $k$ is $(1,1,1)$ an eigenvector of $${M([[1, 2, "k"], [2, 1, 1], [0, 1, 3]])}$?`, 1, S`Rows 2, 3 give $\lambda=4$; row 1: $3+k=4$.`, F.mat([[1, 2, "k"], [2, 1, 1], [0, 1, 3]], { label: "A" })),
  num(S`$A$ is $3\times3$ with $A\vec v_i=i\vec v_i$ for independent $\vec v_1,\vec v_2,\vec v_3$. Find $\det A$.`, 6, "The eigenvalues 1, 2, 3 multiply to det A."),
  mc("If every nonzero vector of ℝ² is an eigenvector of A, then:", "A = cI for some c", ["A = 0", "A is a rotation", "A is a projection"], "e₁, e₂, e₁ + e₂ force equal eigenvalues."),
  num(S`$(2,-1,0)$ is an eigenvector of $${M([[1, 2, 0], [2, 4, 0], [0, 0, 3]])}$. Find its eigenvalue.`, 0, S`$${M([[1, 2, 0], [2, 4, 0], [0, 0, 3]])}${col([2, -1, 0])}=${col(["2-2", "4-4", 0])}$.`),
  dimEQ([[2, 1, 0], [0, 2, 1], [0, 0, 2]], 2),
  num(S`$A$ has eigenvalue 3 with eigenvector $\vec x$. Find the eigenvalue of $\vec x$ for $A^2-4A+I$.`, -2, "9 − 12 + 1.", F.row([[[["A²"]], {}], "−", [[["4A"]], {}], "+", [[["I"]], {}]])),
];
