// 9.1 Orthogonal Complements — 20 hard questions
import { S, F, M, col, mc, num, tf, ms, perpDimQ } from "./gen9.mjs";

export const TOPIC = "9.1 Orthogonal Complements";
export const Q = [
  perpDimQ([[1, 2, 0, 1], [0, 1, 1, 0], [1, 3, 1, 1]], F.mat([[1, 2, 0, 1], [0, 1, 1, 0], [1, 3, 1, 1]], { label: "A (3 × 4)" })),
  perpDimQ([[1, 0, 1, 0, 1], [0, 1, 0, 1, 0], [1, 1, 1, 1, 1], [2, 1, 2, 1, 2]]),
  num(S`$W=\{\vec x: x_1+x_2+x_3+x_4=0,\ x_1-x_3=0\}$. Find $\dim W^\perp$.`, 2, "W⊥ = Row of the 2 × 4 coefficient matrix (rank 2)."),
  num(S`For the same $W$, $W$ contains $(1,a,1,0)$. Find $a$.`, -2, "1 + a + 1 + 0 = 0; 1 − 1 = 0 ✓.", F.mat([[1, 1, 1, 1], [1, 0, -1, 0]], { label: "A" })),
  num(S`For which $h$ is $(1,h,1)$ in $\operatorname{Col}${M([[1, 2], [1, 0], [1, -2]])}$?`, 1, S`$\operatorname{Nul}A^T=\operatorname{span}\{(1,-2,1)\}$: $1-2h+1=0$.`),
  num(S`$\operatorname{Nul}A^T$ for $A=${M([[1, 2], [2, 4], [1, 1]])}$ is spanned by $(a,1,0)$. Find $a$.`, -2, S`$A^T${col([-2, 1, 0])}=${col(["-2+2+0", "-4+4+0"])}$.`),
  ms("Which are always true for an m × n matrix A?", ["Row A ⟂ Nul A", "Col A ⟂ Nul Aᵀ", "Col A ⟂ Nul A", "dim Row A + dim Nul A = n"], [0, 1, 3], "Col A ⊆ ℝᵐ and Nul A ⊆ ℝⁿ live in different spaces in general."),
  tf("If A is symmetric, Col A ⟂ Nul A.", true, "Col A = Row A when A = Aᵀ."),
  num(S`$A$ is $4\times6$ of rank 3. Find $\dim\operatorname{Nul}A+\dim\operatorname{Nul}A^T$.`, 4, "(6 − 3) + (4 − 3)."),
  num(S`The plane $W$ in $\mathbb R^3$ contains $(1,0,2)$ and $(0,1,-1)$. Its normal is $(a,1,1)$. Find $a$.`, -2, "a + 2 = 0 and 1 − 1 = 0.", F.v3([[[1, 0, 2], "w₁", "blue"], [[0, 1, -1], "w₂", "red"], [[-2, 1, 1], "n", "green"]])),
  num(S`$\vec y=(4,2,6)$ is split along $W^\perp$ for $W=\operatorname{span}\{(1,1,1)\}$. Find the first entry of the part in $W^\perp$.`, 0, "ŷ = 4(1,1,1); z = (0, −2, 2)."),
  mc("If W ⊆ V (subspaces), then:", "V⊥ ⊆ W⊥", ["W⊥ ⊆ V⊥", "W⊥ = V⊥", "no relation"], "A vector perpendicular to all of V is perpendicular to W."),
  tf(S`For any $A$, $\operatorname{Nul}(A^TA)=\operatorname{Nul}A$.`, true, "AᵀAx = 0 ⇒ |Ax|² = 0."),
  num(S`$A$ is $3\times3$ with $\operatorname{Nul}A=\operatorname{span}\{(1,1,1)\}$. Find $\dim\operatorname{Row}A$.`, 2, "3 − 1."),
  num(S`$\vec b=(1,2,k)$ is in $\operatorname{Col}A$ where $(\operatorname{Col}A)^\perp=\operatorname{span}\{(2,-1,1)\}$. Find $k$.`, 0, "2 − 2 + k = 0.", F.v3([[[2, -1, 1], "n", "green"], [[1, 2, 0], "b", "blue"]])),
  num(S`$W=\operatorname{span}\{(1,1,0,0),(0,0,1,1)\}$. How many vectors does a basis of $W^\perp$ have?`, 2, "4 − 2."),
  tf("W⊥ for W = {0} is the whole space.", true, "Every vector is orthogonal to 0."),
  num(S`$|\vec u+\vec v|^2$ for orthogonal $\vec u,\vec v$ with $|\vec u|=3$, $|\vec v|=4$?`, 25, "Pythagoras.", F.v2([[[3, 0], "u", "blue"], [[0, 4], "v", "red"], [[3, 4], "u + v", "violet", null, true]], { xmin: -1, xmax: 4, ymin: -1, ymax: 5 })),
  num(S`Find $k$ so that $\operatorname{Nul}${M([[1, "k"], [2, 4]])}$ is a line orthogonal to $(1,2)$.`, 2, "Rank 1 needs k = 2; then Row = span{(1,2)} ⟂ Nul."),
  perpDimQ([[2, 1], [4, 2], [6, 3], [8, 4]]),
];
