// 7.5 Composition and Inverse Transformations — 20 easy + 20 medium questions
import { S, F, M, col, mc, num, tf, fill, compQ, invMapQ } from "./gen7.mjs";

const easy = [
  compQ([[0, 1], [1, 0]], [[1, 0], [0, 2]], 0, 1),
  compQ([[0, 1], [1, 0]], [[1, 0], [0, 2]], 1, 0),
  compQ([[3, 0], [0, 1]], [[1, 2], [0, 1]], 0, 1, F.row([[[[3, 0], [0, 1]], { label: "B" }], [[[1, 2], [0, 1]], { label: "A" }]])),
  compQ([[1, 0], [0, -1]], [[0, -1], [1, 0]], 0, 1),
  num(S`$T:\mathbb R^2\to\mathbb R^4$, $S:\mathbb R^4\to\mathbb R^3$. How many rows does the matrix of $S\circ T$ have?`, 3, "(3 × 4)(4 × 2) = 3 × 2."),
  num(S`$T:\mathbb R^2\to\mathbb R^4$, $S:\mathbb R^4\to\mathbb R^3$. How many columns does the matrix of $S\circ T$ have?`, 2, "(3 × 4)(4 × 2) = 3 × 2."),
  mc("First T (matrix A), then S (matrix B). The matrix of S ∘ T is:", "BA", ["AB", "A + B", "AᵀB"], "S(T(x)) = B(Ax) = (BA)x."),
  fill("(S ∘ T)⁻¹ = T⁻¹ ∘ ___.", ["S⁻¹", "S^-1", "S^{-1}", "S inverse"], "Undo the last step first."),
  invMapQ([[1, 4], [0, 1]], [9, 2], 0),
  invMapQ([[2, 1], [5, 3]], [4, 11], 1, F.mat([[3, -1], [-5, 2]], { label: "A⁻¹" })),
  invMapQ([[3, 2], [4, 3]], [1, 1], 1),
  tf("Every linear map ℝ² → ℝ² is invertible.", false, "Projections are not."),
  tf("Rotations are invertible.", true, "R_θ⁻¹ = R_{−θ}."),
  tf("Composition of linear maps is commutative.", false, "Rotate-then-reflect ≠ reflect-then-rotate."),
  num(S`The inverse of the dilation $5I$ is $kI$. Find $k$.`, 0.2, "1/5.", undefined, 0.001),
  num(S`The inverse of the shear $${M([[1, 3], [0, 1]])}$ has $(1,2)$ entry`, -3, "Shear back by −3.", F.sq([[1, 3], [0, 1]])),
  num(S`$R_{40^\circ}$ followed by $R_{50^\circ}$ is $R_\theta$. Find $\theta$.`, 90, "Angles add."),
  mc(S`$T(\vec x)=A\vec x$ is invertible exactly when`, S`$A$ is square with $\det A\ne0$`, [S`$A$ has no zero entries`, S`$A$ is symmetric`, S`$A$ is $2\times2$`], "Invertible map ⇔ invertible matrix."),
  num(S`$T$ reflects in $x_2=x_1$. Find the $(1,2)$ entry of $T^{-1}$'s matrix.`, 1, "A reflection is its own inverse."),
  tf(S`If $S\circ T$ is defined, $T\circ S$ is always defined.`, false, "Sizes may not chain (e.g. ℝ³ → ℝ² → ℝ)."),
];

const medium = [
  compQ([[1, 1], [2, -1]], [[1, 0, 2], [0, 1, -1]], 1, 2, F.row([[[[1, 1], [2, -1]], { label: "B" }], [[[1, 0, 2], [0, 1, -1]], { label: "A" }]])),
  compQ([[1, 1, 2]], [[1, 2], [0, 1], [1, -1]], 0, 1),
  compQ([[1, 0], [0, 0]], [[1, 2], [0, 1]], 0, 1),
  compQ([[1, 2], [0, 1]], [[1, 0], [0, 0]], 0, 1),
  compQ([[2, 0, 1], [1, 1, 0]], [[1, 0], [0, 1], [1, 1]], 0, 0),
  invMapQ([[1, 0, 1], [0, 1, 2], [1, 1, 4]], [3, 1, 6], 1, F.mat([[1, 0, 1], [0, 1, 2], [1, 1, 4]], { label: "A" })),
  invMapQ([[1, 1, 0], [0, 1, 1], [0, 0, 1]], [3, 2, 1], 0),
  invMapQ([[2, 3], [1, 2]], [5, 3], 0),
  num(S`$(BA)^{-1}$ for $A=${M([[1, 1], [0, 1]])}$, $B=${M([[2, 0], [0, 1]])}$: find its $(1,2)$ entry.`, -1, S`$A^{-1}B^{-1}=${M([[1, -1], [0, 1]])}${M([["\\tfrac12", 0], [0, 1]])}=${M([["\\tfrac12", -1], [0, 1]])}$.`),
  num(S`$S$ has matrix $B=${M([[2, 1], [1, 1]])}$, $S\circ T$ has $C=${M([[3, 1], [2, 1]])}$. Find the $(2,1)$ entry of $T$'s matrix.`, 1, S`$A=B^{-1}C=${M([[1, -1], [-1, 2]])}${M([[3, 1], [2, 1]])}=${M([[1, 0], [1, 1]])}$.`),
  tf(S`$R_\theta$ and $R_\phi$ commute.`, true, "Both products equal R_{θ+φ}."),
  tf(S`The shear $${M([[1, 1], [0, 1]])}$ and the stretch $\operatorname{diag}(2,1)$ commute.`, false, S`$${M([[2, 1], [0, 1]])}\ne${M([[2, 2], [0, 1]])}$.`),
  num(S`Rotate by $90^\circ$ then reflect in the $x_1$-axis. Find the $(2,1)$ entry of the composite.`, -1, S`$${M([[1, 0], [0, -1]])}${M([[0, -1], [1, 0]])}=${M([[0, -1], [-1, 0]])}$.`, F.sq([[0, -1], [-1, 0]])),
  num(S`Reflect in the $x_1$-axis then rotate by $90^\circ$. Find the $(2,1)$ entry of the composite.`, 1, S`$${M([[0, -1], [1, 0]])}${M([[1, 0], [0, -1]])}=${M([[0, 1], [1, 0]])}$.`),
  mc("Why is a projection onto a line not invertible?", "two different inputs have the same output", ["it is not linear", "its matrix is not square", "it changes lengths"], "det P = 0; e.g. points on a perpendicular segment collapse."),
  num(S`$T(\vec x)=${M([[1, 2], [3, 5]])}\vec x$. Find entry 2 of the input with $T(\vec x)=(1,0)$.`, 3, S`$A^{-1}=\tfrac1{-1}${M([[5, -2], [-3, 1]])}=${M([[-5, 2], [3, -1]])}$; $A^{-1}${col([1, 0])}=${col([-5, 3])}$.`),
  num(S`$A^3=I$ for the rotation $R_{120^\circ}$. Find the smallest $k\ge1$ with $A^k=A^{-1}$.`, 2, "A² · A = I."),
  tf("If S ∘ T is invertible (all maps ℝⁿ → ℝⁿ), then T is invertible.", true, "det(BA) = det B det A ≠ 0 forces det A ≠ 0."),
  num(S`$\det$ of the matrix of $S\circ T$ when $\det A=3$, $\det B=-2$?`, -6, "det(BA) = det B det A."),
  invMapQ([[1, 0, 0], [2, 1, 0], [0, 3, 1]], [1, 3, 4], 2),
];

export const E = easy;
export { medium as M };
