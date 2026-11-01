// 8.4 Diagonalisation — 20 easy + 20 medium questions
import { S, F, M, col, mc, num, tf, fill, prod } from "./gen8.mjs";

const easy = [
  tf(S`$${M([[2, 5], [0, 7]])}$ is diagonalisable.`, true, "Distinct eigenvalues 2 and 7."),
  tf(S`$${M([[3, 1], [0, 3]])}$ is diagonalisable.`, false, "dim E₃ = 1 < 2.", F.eig([[3, 1], [0, 3]], [[[1, 0], 3]])),
  tf(S`$\operatorname{diag}(1,0)$ is diagonalisable.`, true, "It is already diagonal."),
  tf("Every invertible matrix is diagonalisable.", false, "[1 1; 0 1] is invertible but not diagonalisable."),
  tf("Every diagonalisable matrix is invertible.", false, "diag(1, 0)."),
  mc("In A = PDP⁻¹, the columns of P are:", "eigenvectors of A", ["eigenvalues of A", "rows of A", "columns of A"], "AP = PD column by column."),
  fill("A = PDP⁻¹ is possible exactly when A has n linearly independent ___.", ["eigenvectors"], "The columns of P."),
  num(S`$A=P\operatorname{diag}(5,-2)P^{-1}$. Find $\det A$.`, -10, "Product."),
  num(S`$A=P\operatorname{diag}(5,-2)P^{-1}$. Find $\operatorname{tr}A$.`, 3, "Sum."),
  num(S`$A=PDP^{-1}$, $P=${M([[1, 1], [1, -1]])}$, $A${col([1, -1])}=-3${col([1, -1])}$. Find $D_{22}$.`, -3, "Column 2 of P has eigenvalue −3."),
  tf("A 3 × 3 matrix with eigenvalues 1, 2, 3 is diagonalisable.", true, "Distinct."),
  num(S`How many independent eigenvectors must a diagonalisable $4\times4$ matrix have?`, 4, "n."),
  mc("To check A = PDP⁻¹ without inverting P, verify:", "AP = PD", ["PA = DP", "A = PD", "AD = PA"], "Multiply by P on the right."),
  tf("The order of eigenvalues in D must match the order of eigenvectors in P.", true, "Column j ↔ λⱼ."),
  num(S`$A=PDP^{-1}$ with $D=\operatorname{diag}(2,2,7)$. Find the algebraic multiplicity of 2.`, 2, "Appears twice."),
  tf(S`$${M([[1, 1], [-1, 3]])}$ is diagonalisable.`, false, "(λ − 2)² with dim E₂ = 1."),
  num(S`$P=${M([[1, 1], [1, 2]])}$. Find $\det P$.`, 1, "2 − 1.", F.mat([[1, 1], [1, 2]], { label: "P" })),
  tf("If A is diagonalisable, so is A².", true, "A² = PD²P⁻¹."),
  num(S`$A=P\operatorname{diag}(3,1)P^{-1}$. Find $\det A^2$.`, 9, "(3·1)²."),
  tf("A diagonalisable matrix can have a repeated eigenvalue.", true, "e.g. I."),
];

const medium = [
  num(S`$A=${M([[7, 2], [-4, 1]])}$ is diagonalised with $P=${M([[1, 1], [-1, -2]])}$. Find $D_{11}$.`, 5, S`$A${col([1, -1])}=${col(["7-2", "-4-1"])}=5${col([1, -1])}$.`),
  num(S`For $A=${M([[1, 2], [3, 2]])}$, find the eigenvalue paired with $(2,3)$.`, 4, S`$A${col([2, 3])}=${col(["2+6", "6+6"])}=4${col([2, 3])}$.`, F.eig([[1, 2], [3, 2]], [[[2, 3], 4], [[1, -1], -1]])),
  num(S`$A=PDP^{-1}$, $P=${M([[1, 1], [1, -1]])}$, $D=\operatorname{diag}(2,-1)$. Find $a_{12}$. (Decimal.)`, 1.5, S`$A=\tfrac12${M([[1, 3], [3, 1]])}$.`, undefined, 0.001),
  num(S`$A=PDP^{-1}$, $P=${M([[1, 0], [1, 1]])}$, $D=\operatorname{diag}(2,5)$. Find $a_{21}$.`, -3, S`$P^{-1}=${M([[1, 0], [-1, 1]])}$, $PD=${M([[2, 0], [2, 5]])}$, $A=${M([[2, 0], [-3, 5]])}$.`),
  tf(S`$P=${M([[2, 1], [1, 1]])}$, $D=\operatorname{diag}(2,1)$ diagonalise $${M([[3, -2], [1, 0]])}$.`, true, `AP = ${prod([[3, -2], [1, 0]], [[2, 1], [1, 1]])} = PD.`),
  tf(S`$P=${M([[1, 1], [0, 1]])}$, $D=\operatorname{diag}(1,2)$ diagonalise $${M([[1, 1], [0, 2]])}$.`, true, `AP = ${prod([[1, 1], [0, 2]], [[1, 1], [0, 1]])} = PD.`),
  tf(S`$P=${M([[1, 1], [1, 2]])}$, $D=\operatorname{diag}(1,3)$ diagonalise $${M([[0, 1], [-2, 3]])}$.`, false, `AP = ${prod([[0, 1], [-2, 3]], [[1, 1], [1, 2]])}, but PD = [1 3; 1 6].`),
  tf(S`$${M([[1, 0, 0], [0, 2, 0], [3, 0, 1]])}$ is diagonalisable.`, false, "dim E₁ = 1 (A − I has rank 2) < 2.", F.mat([[0, 0, 0], [0, 1, 0], [3, 0, 0]], { label: "A − I" })),
  tf(S`$${M([[2, 0, 1], [0, 3, 0], [1, 0, 2]])}$ is diagonalisable.`, true, "Symmetric; dim E₃ = 2, dim E₁ = 1."),
  num(S`For which $a$ is $${M([[2, "a"], [0, 2]])}$ diagonalisable?`, 0, "Only when it is 2I."),
  mc(S`$${M([[1, "a"], [0, 2]])}$ is diagonalisable for`, "every a", ["a = 0 only", "no a", "a ≠ 0 only"], "Distinct eigenvalues 1, 2."),
  num(S`$A$ ($3\times3$) has eigenvalues $1,2,2$ and $\operatorname{rank}(A-2I)=1$. How many independent eigenvectors?`, 3, "dim E₂ = 2, dim E₁ = 1."),
  num(S`$A=PDP^{-1}$ with $D=\operatorname{diag}(1,-1)$. Find the $(1,1)$ entry of $A^2$.`, 1, "A² = PD²P⁻¹ = PIP⁻¹ = I."),
  tf(S`If $A=PDP^{-1}$ then $A^T$ is diagonalisable.`, true, "Aᵀ = (Pᵀ)⁻¹DPᵀ."),
  tf(S`If $A=PDP^{-1}$ and $A$ is invertible, then $A^{-1}=PD^{-1}P^{-1}$.`, true, "Multiply out."),
  num(S`$A=P\operatorname{diag}(2,3)P^{-1}$. Find the eigenvalue of $A^{-1}$ on the first column of $P$. (Decimal.)`, 0.5, "1/2.", undefined, 0.001),
  num(S`$A${col([1, 2])}=3${col([1, 2])}$ and $A${col([1, -1])}=\vec 0$. Find $a_{11}$.`, 1, S`$A=PDP^{-1}=${M([[1, 1], [2, 2]])}$.`, F.eig([[1, 1], [2, 2]], [[[1, 2], 3], [[1, -1], 0]])),
  mc("A diagonalisable matrix with only one eigenvalue λ is:", "λI", ["defective", "singular", "a rotation"], "P(λI)P⁻¹ = λI."),
  num(S`$A=PDP^{-1}$ with $D=\operatorname{diag}(0,4)$. Find the rank of $A$.`, 1, "rank A = rank D."),
  tf("A and D = P⁻¹AP have the same eigenvalues.", true, "Similar matrices."),
];

export const E = easy;
export { medium as M };
