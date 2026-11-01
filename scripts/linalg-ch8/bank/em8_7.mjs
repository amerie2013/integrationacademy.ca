// 8.7 Symmetric Matrices — 20 easy + 20 medium questions
import { S, F, M, col, mc, num, tf, fill, eig2Q, eigVecQ, prod } from "./gen8.mjs";

const easy = [
  tf(S`$${M([[1, 4], [4, 1]])}$ is orthogonally diagonalisable.`, true, "It is symmetric."),
  tf(S`$${M([[1, 4], [2, 1]])}$ is orthogonally diagonalisable.`, false, "Not symmetric."),
  tf("A real symmetric matrix can have a non-real eigenvalue.", false, "Its eigenvalues are real."),
  fill("An orthogonal matrix Q satisfies Q⁻¹ = ___.", ["Qᵀ", "Q^T", "the transpose of Q", "Q transpose"], "QᵀQ = I."),
  mc("Eigenvectors of a symmetric matrix for different eigenvalues are:", "orthogonal", ["parallel", "equal", "always unit vectors"], "(λ − μ)u·w = 0."),
  eig2Q([[3, 1], [1, 3]], "max", F.eig([[3, 1], [1, 3]], [[[1, 1], 4], [[1, -1], 2]])),
  eig2Q([[2, 2], [2, -1]], "min"),
  eig2Q([[5, 2], [2, 2]], "max"),
  num(S`$(1,2)$ is an eigenvector of a symmetric $2\times2$ matrix with distinct eigenvalues. The other eigenvector is a multiple of $(-2,k)$. Find $k$.`, 1, "Perpendicular."),
  num(S`The symmetric matrix of $x_1^2+6x_1x_2+5x_2^2$ has $a_{12}=$`, 3, "Half of 6."),
  num(S`The symmetric matrix of $2x_1^2-8x_1x_2+x_2^2$ has $a_{12}=$`, -4, "Half of −8."),
  tf(S`$Q=\tfrac1{\sqrt2}${M([[1, 1], [1, -1]])}$ is orthogonal.`, true, "Orthonormal columns."),
  num(S`$A=QDQ^T$ with $D=\operatorname{diag}(4,2)$. Find $\det A$.`, 8, "4·2."),
  mc("The spectral decomposition writes A as:", "Σ λᵢ uᵢuᵢᵀ", ["Σ uᵢ + λᵢ", "Π λᵢ uᵢ", "PDP"], "A sum of scaled projections."),
  tf(S`If $A=QDQ^T$ with $D$ diagonal, then $A$ is symmetric.`, true, "(QDQᵀ)ᵀ = QDQᵀ."),
  num(S`The maximum of $\vec x^TA\vec x$ over unit vectors, $A$ symmetric with eigenvalues $5,2,-1$, is`, 5, "Largest eigenvalue."),
  num(S`The minimum of $\vec x^TA\vec x$ over unit vectors, eigenvalues $5,2,-1$, is`, -1, "Smallest eigenvalue."),
  tf("Every symmetric matrix is diagonalisable.", true, "Spectral theorem."),
  num(S`$\vec u=\tfrac15(3,4)$. Find the $(1,2)$ entry of $\vec u\vec u^T$. (Decimal.)`, 0.48, "12/25.", F.row([[[["⅗"], ["⅘"]], { label: "u" }], [[["⅗", "⅘"]], { label: "uᵀ" }]]), 0.001),
  tf("An orthogonal matrix keeps lengths.", true, "|Qx|² = xᵀQᵀQx = |x|²."),
];

const medium = [
  eigVecQ([[5, -2], [-2, 2]], 6, 1, 0, F.eig([[5, -2], [-2, 2]], [[[2, -1], 6], [[1, 2], 1]])),
  eigVecQ([[1, 2], [2, -2]], -3, 1, 0),
  eigVecQ([[2, 1, 1], [1, 2, 1], [1, 1, 2]], 4, 2, 0),
  eigVecQ([[1, 1, 0], [1, 1, 0], [0, 0, 2]], 0, 1, 0),
  num(S`Classify $x_1^2+4x_1x_2+x_2^2$: give the product of the eigenvalues of its matrix.`, -3, S`$${M([[1, 2], [2, 1]])}$: eigenvalues 3, −1 (indefinite).`),
  num(S`For $5x_1^2+4x_1x_2+2x_2^2$, the principal-axes form is $\lambda_1y_1^2+\lambda_2y_2^2$. Find $\lambda_1+\lambda_2$.`, 7, S`Trace of $${M([[5, 2], [2, 2]])}$.`),
  tf(S`$5x_1^2+4x_1x_2+2x_2^2$ is positive definite.`, true, "Eigenvalues 6 and 1, both positive."),
  num(S`$A=4\vec u_1\vec u_1^T+2\vec u_2\vec u_2^T$, $\vec u_1=\tfrac1{\sqrt2}(1,1)$, $\vec u_2=\tfrac1{\sqrt2}(1,-1)$. Find $a_{11}$.`, 3, "2 + 1."),
  num(S`Same $A$: find $a_{12}$.`, 1, "2 − 1."),
  tf(S`$Q=\tfrac13${M([[1, 2, 2], [2, 1, -2], [2, -2, 1]])}$ is orthogonal.`, true, "QᵀQ = I (columns are orthonormal).", F.mat([[1, 2, 2], [2, 1, -2], [2, -2, 1]], { label: "3Q" })),
  num(S`In $E_1=\{x_1+x_2+x_3=0\}$, $\vec v_1=(1,-1,0)$, $\vec v_2=(1,0,-1)$. Gram–Schmidt gives $\vec w_2=\vec v_2-c\vec v_1$. Find $c$. (Decimal.)`, 0.5, S`$c=\tfrac{\vec v_2\cdot\vec v_1}{\vec v_1\cdot\vec v_1}=\tfrac12$.`, undefined, 0.001),
  num(S`Find the symmetric $A$ with eigenvalue 3 on $(1,1)$ and $-1$ on $(1,-1)$: $a_{12}=$`, 2, S`$3\cdot\tfrac12${M([[1, 1], [1, 1]])}-\tfrac12${M([[1, -1], [-1, 1]])}=${M([[1, 2], [2, 1]])}$.`),
  tf(S`$${M([[1, 2], [0, 3]])}$ is diagonalisable but not orthogonally diagonalisable.`, true, "Distinct eigenvalues; not symmetric."),
  mc(S`$\vec x^TA\vec x$ with $A$ having eigenvalues $3,-2$ is`, "indefinite", ["positive definite", "negative definite", "zero"], "Mixed signs."),
  num(S`$A$ symmetric $3\times3$ with eigenvalues $2,2,5$. Find $\dim E_2$.`, 2, "Symmetric ⇒ diagonalisable ⇒ full eigenspaces."),
  num(S`Find the larger eigenvalue of $${M([[6, -2], [-2, 9]])}$.`, 10, "tr 15, det 50: (λ − 5)(λ − 10)."),
  tf("For symmetric A, AQ = QD and QᵀQ = I together give A = QDQᵀ.", true, "Multiply AQ = QD by Qᵀ on the right."),
  num(S`$\vec x=Q\vec y$ with $Q$ orthogonal and $|\vec y|=3$. Find $|\vec x|$.`, 3, "Orthogonal matrices keep lengths."),
  tf(S`The product of two symmetric matrices is always symmetric.`, false, S`$(AB)^T=BA$, which need not equal $AB$.`),
  num(S`$A$ symmetric with $A\vec u=2\vec u$, $A\vec w=7\vec w$, $\vec u=(1,1,0)$, $\vec w=(1,-1,k)$. Find $\vec u\cdot\vec w$.`, 0, "Distinct eigenvalues of a symmetric matrix.", F.eig([[3, 1], [1, 3]], [[[1, 1], 4], [[1, -1], 2]])),
];

export const E = easy;
export { medium as M };
