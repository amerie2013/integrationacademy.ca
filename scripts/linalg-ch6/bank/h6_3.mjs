// 6.3 Elementary Matrices — 20 hard questions
import { S, F, M, mc, num, tf, ms } from "./gen6.mjs";

export const TOPIC = "6.3 Elementary Matrices";
export const Q = [
  num(S`$A=${M([[2, 1], [6, 4]])}$ is reduced by $E_1$: $R_2-3R_1$, $E_2$: $R_1\to\tfrac12R_1$, $E_3$: $R_1-\tfrac12R_2$. Find the $(2,1)$ entry of $E_3E_2E_1$.`, -3, "E₃E₂E₁ = A⁻¹ = ½[[4, −1], [−6, 2]] = [[2, −½], [−3, 1]].", F.mat([[2, 1], [6, 4]], { label: "A" })),
  num(S`Write $${M([[0, 1], [1, 0]])}$ as a product of three replacement matrices $${M([[1, 0], [1, 1]])}${M([[1, -1], [0, 1]])}${M([[1, 0], [1, 1]])}$ times a scaling. The scaling is $\operatorname{diag}(1,c)$ applied first; find $c$.`, -1, "The three shears give [[0, −1], [1, 0]]; right-multiplying by diag(1, −1) gives [[0, 1], [1, 0]]."),
  tf("Every invertible 2 × 2 matrix is a product of elementary matrices with at most 4 factors.", true, "At most 2 scalings/swaps to make the pivots 1 and 2 replacements clear the off-diagonal entries (a careful count gives at most 4)."),
  ms("Which are elementary matrices?", [S`$${M([[1, 0], [0, 3]])}$`, S`$${M([[1, 2], [0, 1]])}$`, S`$${M([[0, 1], [1, 0]])}$`, S`$${M([[1, 1], [1, 1]])}$`, S`$${M([[2, 0], [0, 2]])}$`], [0, 1, 2], "The last two change two rows of I (and the fourth is singular)."),
  num(S`$E$ adds $c$ times row 1 to row 2 ($2\times2$) and $EA=${M([[1, 3], [0, 2]])}$ for $A=${M([[1, 3], [4, 14]])}$. Find $c$.`, -4, "Row 2: (4, 14) + c(1, 3) = (0, 2) needs c = −4.", F.row([[[[1, 0], ["c", 1]], { row: 1, label: "E" }], [[[1, 3], [4, 14]], { label: "A" }], "=", [[[1, 3], [0, 2]], {}]])),
  num(S`$A=E_1E_2E_3$ with $E_1$: $R_1\leftrightarrow R_2$, $E_2=\operatorname{diag}(2,1)$, $E_3$: $R_2+R_1$ ($2\times2$). Find the $(1,1)$ entry of $A$.`, 1, "E₂E₃ = [[2, 0], [1, 1]]; swapping rows gives [[1, 1], [2, 0]]."),
  tf(S`If $E$ is elementary, then $\det E\ne0$.`, true, "Swap: −1; scaling by c ≠ 0: c; replacement: 1."),
  mc(S`Right multiplication $AE$ by the elementary matrix of $R_2\to R_2+5R_1$ performs:`, "column 1 → column 1 + 5·column 2", ["column 2 → column 2 + 5·column 1", "row 2 → row 2 + 5·row 1", "row 1 → row 1 + 5·row 2"], "E = [[1, 0], [5, 1]]: AE's column 1 is a₁ + 5a₂."),
  num(S`$A$ reduces to $I$ by $R_2\to R_2-2R_1$, $R_3\to R_3+R_1$, $R_3\to R_3-4R_2$ (and nothing else). Find $a_{32}$.`, 4, "A = E₁⁻¹E₂⁻¹E₃⁻¹: apply the reverse operations to I in reverse order — R₃ + 4R₂, then R₃ − R₁, then R₂ + 2R₁ — giving A = [[1, 0, 0], [2, 1, 0], [−1, 4, 1]]. Check: R₂ − 2R₁ → (0, 1, 0), R₃ + R₁ → (0, 4, 1), R₃ − 4R₂ → (0, 0, 1)."),
  num(S`For the same $A$, find $a_{31}$.`, -1, "A = [[1, 0, 0], [2, 1, 0], [−1, 4, 1]], so a₃₁ = −1."),
  tf("Two different sequences of row operations can reduce the same A to I.", true, "E.g. scale first or replace first — the products of elementary matrices differ but both equal A⁻¹."),
  num(S`$E=${M([[1, 0, 0], [0, 1, 0], [2, 0, 1]])}$. Find the $(3,1)$ entry of $E^5$.`, 10, "Each multiplication adds another 2·row 1: 5·2.", F.mat([[1, 0, 0], [0, 1, 0], [2, 0, 1]], { cells: [[2, 0]], label: "E" })),
  mc(S`For an elementary $E$ from a replacement, $E^n$ is:`, "the replacement with n times the multiple", ["I", "a swap", "singular"], "Repeating R_i + cR_j n times adds nc·R_j."),
  tf(S`If $E_1A=E_2A$ for invertible $A$, then $E_1=E_2$.`, true, "Multiply on the right by A⁻¹."),
  num(S`$A=${M([[1, 3], [0, 1]])}$. Find the $(1,2)$ entry of $A^{-4}$.`, -12, "A is the replacement R₁ + 3R₂; A⁻¹ subtracts 3, and A⁻⁴ subtracts 12."),
  tf("A lower triangular matrix with 1s on the diagonal is a product of replacement matrices.", true, "Clear its below-diagonal entries with replacements; invert the record."),
  num(S`How many replacement matrices are needed to reduce a $4\times4$ unit lower triangular matrix with no zero entries below the diagonal to $I$?`, 6, "One per below-diagonal entry: 3 + 2 + 1."),
  ms(S`$E$ is the $3\times3$ elementary matrix of $R_1\to R_1+2R_3$. Which are true?`, [S`$E^{-1}$ has $-2$ in position $(1,3)$`, S`$E^T$ performs $R_3\to R_3+2R_1$`, S`$E$ is upper triangular`, S`$E^2=I$`], [0, 1, 2], "E² adds 4·row 3, not 0."),
  num(S`$A=${M([[1, 2], [3, 4]])}=E_1^{-1}E_2^{-1}E_3^{-1}$ for a reduction $E_1$: $R_2-3R_1$, $E_2$: $R_2\to-\tfrac12R_2$, $E_3$: $R_1-2R_2$. Find the $(2,2)$ entry of $E_2^{-1}$.`, -2, "E₂ scales by −½; its inverse scales by −2.", F.mat([[1, 2], [3, 4]], { label: "A" })),
  tf(S`The elementary matrices of all row swaps of $3\times3$ matrices commute with each other.`, false, "Swap rows 1, 2 and swap rows 2, 3: applying them to I in the two orders gives different permutation matrices, so P₁₂P₂₃ ≠ P₂₃P₁₂."),
];
