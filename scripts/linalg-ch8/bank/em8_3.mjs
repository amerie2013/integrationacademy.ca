// 8.3 Eigenspaces and Multiplicity — 20 easy + 20 medium questions
import { S, F, M, mc, num, tf, fill, dimEQ, eigVecQ } from "./gen8.mjs";

const easy = [
  dimEQ([[2, 0, 0], [0, 2, 0], [0, 0, 7]], 2),
  dimEQ([[4, 1], [0, 4]], 4, F.eig([[4, 1], [0, 4]], [[[1, 0], 4]])),
  dimEQ([[3, 0], [0, 3]], 3),
  dimEQ([[1, 2], [2, 4]], 0),
  eigVecQ([[3, 1], [1, 3]], 4, 1, 0),
  eigVecQ([[3, 1], [1, 3]], 2, 1, 0),
  eigVecQ([[5, -2], [4, -1]], 1, 1, 0),
  fill("dim E_λ is called the ___ multiplicity of λ.", ["geometric"], "Algebraic = root multiplicity; geometric = eigenspace dimension."),
  mc("For every eigenvalue:", "1 ≤ geometric ≤ algebraic multiplicity", ["geometric ≥ algebraic", "geometric = algebraic", "geometric can be 0"], "The basic inequality."),
  tf(S`$${M([[5, 1], [0, 5]])}$ is defective.`, true, "dim E₅ = 1 < 2."),
  tf(S`$\operatorname{diag}(5,5)$ is defective.`, false, "dim E₅ = 2."),
  num(S`$\operatorname{rank}(A-\lambda I)=1$ for a $3\times3$ matrix. Find $\dim E_\lambda$.`, 2, "3 − 1."),
  num(S`An eigenvalue has algebraic multiplicity 1. Its geometric multiplicity is`, 1, "1 ≤ g ≤ 1."),
  tf("Eigenvectors from different eigenspaces are linearly independent.", true, "Distinct eigenvalues."),
  num(S`A $3\times3$ matrix has geometric multiplicities 1 and 1 (two eigenvalues). How many independent eigenvectors?`, 2, "1 + 1."),
  tf("A 3 × 3 matrix with three distinct eigenvalues has an eigenbasis.", true, "One eigenvector each, independent."),
  dimEQ([[1, 0, 0], [0, 1, 0], [0, 0, 1]], 1),
  mc(S`$E_\lambda$ is a subspace of`, S`$\mathbb R^n$ (the domain)`, ["ℝ only", "the column space only", "the set of eigenvalues"], "Nul(A − λI) ⊆ ℝⁿ."),
  num(S`Find $\dim E_2$ for $${M([[2, 1, 0], [0, 2, 0], [0, 0, 2]])}$.`, 2, "A − 2I has rank 1.", F.mat([[0, 1, 0], [0, 0, 0], [0, 0, 0]], { label: "A − 2I" })),
  tf("A defective matrix has fewer than n independent eigenvectors.", true, "Some eigenspace is too small."),
];

const medium = [
  dimEQ([[2, 0, 0], [1, 2, 0], [0, 0, 3]], 2, F.mat([[0, 0, 0], [1, 0, 0], [0, 0, 1]], { label: "A − 2I" })),
  dimEQ([[4, -1, 6], [2, 1, 6], [2, -1, 8]], 2),
  dimEQ([[5, 1, 0], [0, 5, 0], [2, 0, 3]], 5),
  dimEQ([[1, 2, 0], [2, 1, 0], [0, 0, -1]], -1),
  dimEQ([[0, 1, 1], [1, 0, 1], [1, 1, 0]], -1),
  eigVecQ([[1, 1, 0], [1, 2, 1], [0, 1, 1]], 0, 1, 0, F.mat([[1, 1, 0], [1, 2, 1], [0, 1, 1]], { label: "A" })),
  eigVecQ([[1, 1, 0], [1, 2, 1], [0, 1, 1]], 1, 2, 0),
  eigVecQ([[2, 0, 1], [0, 3, 0], [1, 0, 2]], 1, 2, 0),
  eigVecQ([[2, 1, 0], [0, 3, 1], [0, 0, 4]], 4, 1, 0),
  num(S`For which $a$ does $${M([[3, "a"], [0, 3]])}$ have a 2-dimensional $E_3$?`, 0, "A − 3I must be 0."),
  num(S`$A$ is $3\times3$ with eigenvalues $2,2,5$ and $\operatorname{rank}(A-2I)=2$. Find $\dim E_2$.`, 1, "3 − 2."),
  tf(S`The matrix in the previous question has an eigenbasis.`, false, "1 + 1 = 2 < 3."),
  num(S`Total number of independent eigenvectors of $${M([[3, 1, 0], [0, 3, 1], [0, 0, 3]])}$?`, 1, "A − 3I has rank 2."),
  mc(S`$E_\lambda$ and $E_\mu$ ($\lambda\ne\mu$) intersect in`, S`$\{\vec 0\}$`, ["a line", "a plane", "all of ℝⁿ"], "A common vector would have two eigenvalues."),
  tf(S`$\operatorname{diag}(1,1,2)$ and $${M([[1, 1, 0], [0, 1, 0], [0, 0, 2]])}$ have the same eigenvalues and eigenspace dimensions.`, false, "dim E₁ is 2 for the first, 1 for the second."),
  num(S`Find $\dim E_3$ for $${M([[3, 0, 0, 0], [0, 3, 0, 0], [0, 0, 3, 1], [0, 0, 0, 3]])}$.`, 3, "A − 3I has one nonzero row.", F.mat([[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 1], [0, 0, 0, 0]], { label: "A − 3I" })),
  num(S`$A$ is $4\times4$ with eigenvalues $1,1,2,2$; $\dim E_1=2$, $\dim E_2=1$. How many independent eigenvectors?`, 3, "2 + 1."),
  tf(S`If $\dim E_\lambda=n$, then $A=\lambda I$.`, true, "Every vector satisfies Ax = λx."),
  num(S`$\lambda=0$ is an eigenvalue of a $5\times5$ matrix of rank 3. Find $\dim E_0$.`, 2, "dim Nul A = 5 − 3."),
  mc("Which matrix is defective?", "[1 1; 0 1]", ["[1 0; 0 1]", "[1 0; 0 2]", "[1 2; 2 1]"], "Double eigenvalue 1 with a 1-dimensional eigenspace."),
];

export const E = easy;
export { medium as M };
