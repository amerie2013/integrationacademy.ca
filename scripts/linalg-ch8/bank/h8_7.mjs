// 8.7 Symmetric Matrices — 20 hard questions
import { S, F, M, col, mc, num, tf, ms, eig2Q, eigVecQ, prod } from "./gen8.mjs";

export const TOPIC = "8.7 Symmetric Matrices";
export const Q = [
  eigVecQ([[3, -1, -1], [-1, 3, -1], [-1, -1, 3]], 1, 2, 0, F.mat([[3, -1, -1], [-1, 3, -1], [-1, -1, 3]], { label: "A" })),
  eigVecQ([[2, -1, 0], [-1, 2, -1], [0, -1, 2]], 2, 2, 0),
  eigVecQ([[4, 2, 2], [2, 4, 2], [2, 2, 4]], 8, 1, 0),
  eig2Q([[7, 3], [3, -1]], "max", F.eig([[7, 3], [3, -1]], [[[3, 1], 8], [[1, -3], -2]])),
  eig2Q([[7, 3], [3, -1]], "min"),
  num(S`For $A=${M([[7, 3], [3, -1]])}$, the eigenvector for 8 is $(3,k)$. Find $k$.`, 1, S`$A-8I=${M([[-1, 3], [3, -9]])}$: $x_1=3x_2$.`),
  num(S`Maximum of $7x_1^2+6x_1x_2-x_2^2$ on the unit circle?`, 8, "Largest eigenvalue of [7 3; 3 −1]."),
  ms("Which are true for every real symmetric A?", ["eigenvalues are real", "A = QDQᵀ for an orthogonal Q", "A is invertible", "eigenvectors for distinct eigenvalues are orthogonal"], [0, 1, 3], "Symmetric matrices can be singular."),
  tf("A matrix with orthogonal eigenvectors spanning ℝⁿ (and real eigenvalues) is symmetric.", true, "Then A = QDQᵀ."),
  num(S`$A=QDQ^T$ with $D=\operatorname{diag}(9,4)$. Find the eigenvalues of $A^{1/2}=QD^{1/2}Q^T$: give the larger.`, 3, "√9."),
  num(S`For $A=${M([[5, 4], [4, 5]])}$, find the $(1,2)$ entry of $\sqrt A=Q\sqrt DQ^T$.`, 1, S`Eigenvalues 9, 1 on $(1,1)$, $(1,-1)$: $\sqrt A=3\cdot\tfrac12${M([[1, 1], [1, 1]])}+1\cdot\tfrac12${M([[1, -1], [-1, 1]])}=${M([[2, 1], [1, 2]])}$.`, F.eig([[5, 4], [4, 5]], [[[1, 1], 9], [[1, -1], 1]])),
  num(S`$\vec x^TA\vec x=1$ with eigenvalues 4 and 1 is an ellipse. Find the length of its longer semi-axis.`, 1, "1/√λ_min = 1."),
  num(S`For the same ellipse, find the shorter semi-axis. (Decimal.)`, 0.5, "1/√4.", undefined, 0.001),
  tf(S`$(AB)^T=AB$ for symmetric $A,B$ exactly when $AB=BA$.`, true, "(AB)ᵀ = BᵀAᵀ = BA."),
  num(S`$A$ is symmetric $3\times3$ with eigenvalues $1,2,3$ and $\vec x^TA\vec x\ge c|\vec x|^2$ for all $\vec x$. Find the largest such $c$.`, 1, "The smallest eigenvalue."),
  mc("A symmetric matrix with all eigenvalues positive is:", "positive definite", ["orthogonal", "singular", "nilpotent"], "xᵀAx = Σλᵢyᵢ² > 0."),
  num(S`$\det$ of an orthogonal matrix can be 1 or`, -1, "(det Q)² = det(QᵀQ) = 1."),
  num(S`For $A=${M([[2, 1, 1], [1, 2, 1], [1, 1, 2]])}$, compute $\vec x^TA\vec x$ at $\vec x=\tfrac1{\sqrt3}(1,1,1)$.`, 4, "x is a unit eigenvector for 4.", F.mat([[2, 1, 1], [1, 2, 1], [1, 1, 2]], { label: "A" })),
  num(S`Same $A$: compute $\vec x^TA\vec x$ at $\vec x=\tfrac1{\sqrt2}(1,-1,0)$.`, 1, "Unit eigenvector for 1."),
  tf(S`Every real symmetric $2\times2$ matrix with a repeated eigenvalue is a multiple of $I$.`, true, "It is diagonalisable with one eigenvalue."),
];
