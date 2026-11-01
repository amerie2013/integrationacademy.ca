// 6.1 The Inverse of a Matrix — 20 easy + 20 medium questions
import { S, F, M, mc, num, tf, fill, invEntryQ, invertibleQ, invSolveQ } from "./gen6.mjs";

const easy = [
  invEntryQ([[3, 2], [4, 3]], 0, 1),
  invEntryQ([[5, 3], [3, 2]], 1, 0),
  invEntryQ([[1, 4], [0, 1]], 0, 1, F.mat([[1, 4], [0, 1]], { label: "A" })),
  invertibleQ([[2, 6], [1, 3]]),
  invertibleQ([[4, 1], [3, 1]]),
  fill("A square matrix with no inverse is called ___.", ["singular", "noninvertible", "non-invertible"], "Singular means not invertible."),
  tf("Only square matrices can be invertible.", true, "AB = BA = I needs A and B square of the same size."),
  mc(S`$(AB)^{-1}=$`, S`$B^{-1}A^{-1}$`, [S`$A^{-1}B^{-1}$`, S`$AB$`, S`$A^{-1}+B^{-1}$`], "Undo the last factor first."),
  tf(S`$I^{-1}=I$.`, true, "II = I."),
  num(S`For $A=${M([["a", "b"], ["c", "d"]])}$ with $a=2,b=5,c=1,d=3$, compute $ad-bc$.`, 1, "6 − 5 = 1."),
  tf(S`The inverse of $${M([[2, 0], [0, 4]])}$ is $${M([["\\tfrac12", 0], [0, "\\tfrac14"]])}$.`, true, "Diagonal: invert each diagonal entry; the product is I."),
  invSolveQ([[2, 1], [1, 1]], [3, 2], 0),
  mc("If A is invertible, Ax = b has:", "exactly one solution for every b", ["no solution for some b", "infinitely many solutions", "a solution only for b = 0"], "x = A⁻¹b."),
  tf(S`$(A^{-1})^{-1}=A$.`, true, "A is an inverse of A⁻¹."),
  tf("A matrix with a zero row can be invertible.", false, "Then a row of AB is zero for every B, so AB ≠ I."),
  num(S`For which $k$ is $${M([[1, "k"], [2, 6]])}$ singular?`, 3, "ad − bc = 6 − 2k = 0."),
  invertibleQ([[0, 1], [1, 0]], F.mat([[0, 1], [1, 0]], { label: "swap" })),
  mc(S`$(A^T)^{-1}=$`, S`$(A^{-1})^T$`, [S`$A^{-1}$`, S`$A^T$`, S`$-A^T$`], "Aᵀ(A⁻¹)ᵀ = (A⁻¹A)ᵀ = I."),
  num(S`$(3A)^{-1}=cA^{-1}$. Find $c$.`, 0.3333, "(kA)⁻¹ = (1/k)A⁻¹.", undefined, 0.001),
  tf("Every nonzero 2 × 2 matrix is invertible.", false, S`$${M([[1, 2], [2, 4]])}$ is nonzero but singular.`),
];

const medium = [
  invEntryQ([[4, 3], [2, 2]], 1, 1),
  invEntryQ([[2, -3], [1, 4]], 0, 0),
  invSolveQ([[3, 5], [1, 2]], [4, 1], 1, F.row([[[[3, 5], [1, 2]], { label: "A" }], [[["x₁"], ["x₂"]], {}], "=", [[[4], [1]], {}]])),
  invSolveQ([[1, 2], [2, 5]], [0, 1], 0),
  num(S`For which positive $k$ is $${M([["k", 2], [8, "k"]])}$ singular?`, 4, "k² − 16 = 0."),
  num(S`$A^{-1}=${M([[2, 1], [5, 3]])}$. Find the $(1,2)$ entry of $A$.`, -1, "A = (A⁻¹)⁻¹; ad − bc = 1: A = [[3, −1], [−5, 2]]."),
  num(S`$A^{-1}=${M([[1, 2], [3, 4]])}$, $B^{-1}=${M([[1, 0], [1, 1]])}$. Find the $(2,2)$ entry of $(AB)^{-1}$.`, 6, "(AB)⁻¹ = B⁻¹A⁻¹ = [[1, 2], [4, 6]]."),
  tf(S`If $A$ and $B$ are invertible, $A+B$ is invertible.`, false, "A = I, B = −I gives A + B = 0."),
  tf(S`If $AB=I$ for square $A,B$, then $BA=I$.`, true, "A square one-sided inverse is two-sided."),
  mc(S`Solve $AXB=C$ for $X$ ($A,B$ invertible).`, S`$X=A^{-1}CB^{-1}$`, [S`$X=CA^{-1}B^{-1}$`, S`$X=B^{-1}CA^{-1}$`, S`$X=A^{-1}B^{-1}C$`], "Multiply by A⁻¹ on the left and B⁻¹ on the right."),
  num(S`$A=${M([[2, 1], [7, 4]])}$. Find the sum of the entries of $A^{-1}$.`, -2, "ad − bc = 8 − 7 = 1, so A⁻¹ = [[4, −1], [−7, 2]]; the entries add to 4 − 1 − 7 + 2 = −2."),
  invertibleQ([[3, -2], [-6, 4]]),
  tf(S`$A^2=I$ implies $A^{-1}=A$.`, true, "A·A = I."),
  num(S`For $A=${M([[1, 1], [0, 1]])}$, find the $(1,2)$ entry of $(A^{-1})^3$.`, -3, "A⁻¹ = [[1, −1], [0, 1]]; its cube is [[1, −3], [0, 1]]."),
  invEntryQ([[6, 4], [4, 3]], 0, 1, F.mat([[6, 4], [4, 3]], { label: "A" })),
  mc("Which matrix is its own inverse?", S`$${M([[1, 0], [0, -1]])}$`, [S`$${M([[1, 1], [0, 1]])}$`, S`$${M([[2, 0], [0, 2]])}$`, S`$${M([[0, 1], [0, 0]])}$`], "Its square is I."),
  num(S`$A$ is invertible and $A\vec x=\vec 0$. How many solutions are there?`, 1, "Only x = A⁻¹0 = 0."),
  tf(S`$(A^{-1}B)^{-1}=B^{-1}A$.`, true, "(A⁻¹B)(B⁻¹A) = A⁻¹A = I."),
  num(S`For $A=${M([[3, 1], [1, 1]])}$, find the $(2,2)$ entry of $A^{-1}$.`, 1.5, "ad − bc = 2: A⁻¹ = ½[[1, −1], [−1, 3]].", undefined, 0.001),
  invSolveQ([[2, 3], [1, 2]], [1, 1], 1),
];

export const E = easy;
export { medium as M };
