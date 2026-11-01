// 8.1 Eigenvectors and Eigenvalues — 20 easy + 20 medium questions
import { S, F, M, col, mc, num, tf, fill, eigOfQ, isEigVecQ, isEigValQ, eigVecQ } from "./gen8.mjs";

const easy = [
  eigOfQ([[2, 3], [3, 2]], [1, 1], F.eig([[2, 3], [3, 2]], [[[1, 1], 5]])),
  eigOfQ([[2, 3], [3, 2]], [1, -1]),
  eigOfQ([[4, 1], [0, 2]], [1, 0]),
  eigOfQ([[5, 2], [0, 1]], [1, -2]),
  isEigVecQ([[3, 1], [2, 2]], [1, 0], F.not([[3, 1], [2, 2]], [1, 0])),
  isEigVecQ([[1, 4], [2, 3]], [1, 1]),
  isEigVecQ([[1, 4], [2, 3]], [2, -1]),
  num(S`Find the largest eigenvalue of $${M([[3, 5, 1], [0, -2, 7], [0, 0, 4]])}$.`, 4, "Triangular: eigenvalues on the diagonal (3, −2, 4)."),
  num(S`Find the smallest eigenvalue of $${M([[3, 5, 1], [0, -2, 7], [0, 0, 4]])}$.`, -2, "Diagonal entries 3, −2, 4."),
  fill("The set Nul(A − λI) is called the ___ of λ.", ["eigenspace"], "E_λ = Nul(A − λI)."),
  tf("The zero vector can be an eigenvector.", false, "Eigenvectors must be nonzero."),
  tf("The number 0 can be an eigenvalue.", true, "Exactly when A is singular."),
  mc("λ is an eigenvalue of A exactly when:", "A − λI is singular", ["A − λI is invertible", "A is symmetric", "λ is a diagonal entry of A"], "(A − λI)x = 0 needs a nonzero solution."),
  tf(S`If $A$ is singular, then 0 is an eigenvalue of $A$.`, true, S`$A\vec x=\vec 0=0\vec x$ has a nonzero solution.`),
  isEigValQ([[3, 1], [1, 3]], 2),
  isEigValQ([[3, 1], [1, 3]], 3),
  num(S`$A\vec x=4\vec x$. Find the eigenvalue of $\vec x$ for $A^2$.`, 16, "λ² = 16."),
  num(S`$A\vec x=4\vec x$ and $A$ is invertible. Find the eigenvalue of $\vec x$ for $A^{-1}$. (Decimal.)`, 0.25, "1/λ.", undefined, 0.001),
  mc("The reflection in the x₁-axis has eigenvalues:", "1 and −1", ["1 only", "0 and 1", "none"], "e₁ fixed, e₂ reversed.", F.eig([[1, 0], [0, -1]], [[[1, 0], 1], [[0, 1], -1]])),
  num(S`$P$ projects $\mathbb R^2$ onto a line. Which eigenvalue does a vector perpendicular to the line have?`, 0, "It is sent to 0."),
];

const medium = [
  eigVecQ([[1, 2], [4, 3]], 5, 1, 0, F.mat([[-4, 2], [4, -2]], { label: "A − 5I" })),
  eigVecQ([[4, -1, 6], [2, 1, 6], [2, -1, 8]], 9, 2, 0),
  eigVecQ([[3, 1, 0], [0, 0, 2], [0, 0, -1]], 0, 1, 0),
  eigVecQ([[2, 0, 0], [1, 3, 0], [0, 1, 4]], 4, 0, 2),
  isEigValQ([[1, 1, 0], [1, 2, 1], [0, 1, 1]], 3),
  isEigValQ([[1, 1, 0], [1, 2, 1], [0, 1, 1]], 2, F.mat([[-1, 1, 0], [1, 0, 1], [0, 1, -1]], { label: "A − 2I" })),
  isEigValQ([[4, -1, 6], [2, 1, 6], [2, -1, 8]], 2),
  eigOfQ([[4, -1, 6], [2, 1, 6], [2, -1, 8]], [1, 2, 0]),
  eigOfQ([[1, 2, 3], [3, 2, 1], [2, 2, 2]], [1, 1, 1]),
  isEigVecQ([[2, 1, 0], [1, 2, 1], [0, 1, 2]], [1, 0, -1]),
  num(S`For which $k$ is $(1,2)$ an eigenvector of $${M([[1, "k"], [3, 2]])}$? (Decimal.)`, 1.25, S`$A(1,2)=(1+2k,\ 7)=\lambda(1,2)$: $\lambda=3.5$, $1+2k=3.5$.`, undefined, 0.001),
  num(S`$(1,k)$ is an eigenvector of $${M([[2, 1], [4, 2]])}$ with eigenvalue 4. Find $k$.`, 2, S`$${M([[2, 1], [4, 2]])}${col([1, "k"])}=${col(["2+k", "4+2k"])}=${col([4, "4k"])}$: $k=2$.`),
  num(S`$A\vec x=3\vec x$. Find the eigenvalue of $\vec x$ for $A^3-2A$.`, 21, "27 − 6."),
  num(S`$A\vec x=-2\vec x$. Find the eigenvalue of $\vec x$ for $A+5I$.`, 3, "−2 + 5."),
  tf("Eigenvectors for different eigenvalues are linearly independent.", true, "Apply A to a relation and subtract."),
  tf("If x and y are eigenvectors, then x + y is an eigenvector.", false, "Only when they share an eigenvalue (and x + y ≠ 0)."),
  mc(S`The rotation $R_{90^\circ}$ has`, "no real eigenvalues", ["eigenvalue 1", "eigenvalues ±1", "eigenvalue 0"], "Every nonzero vector is turned off its line.", F.sq([[0, -1], [1, 0]])),
  num(S`Find $\dim E_1$ for $${M([[1, 0, 0], [0, 1, 0], [0, 0, 5]])}$.`, 2, "A − I = diag(0, 0, 4): two free variables."),
  tf(S`The eigenvalues of $A$ and $A^T$ are the same.`, true, S`$(A-\lambda I)^T=A^T-\lambda I$ is singular together with $A-\lambda I$.`),
  num(S`Each row of $A$ sums to 7. Find the eigenvalue of $(1,1,1)$.`, 7, "A(1,1,1) = (row sums)."),
];

export const E = easy;
export { medium as M };
