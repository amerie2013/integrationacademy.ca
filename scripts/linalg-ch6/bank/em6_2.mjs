// 6.2 Computing Inverses by Row Reduction — 20 easy + 20 medium questions
import { S, F, M, mc, num, tf, fill, invEntryQ, invertibleQ } from "./gen6.mjs";

const easy = [
  invEntryQ([[1, 5], [0, 1]], 0, 1),
  invEntryQ([[1, 0], [-3, 1]], 1, 0),
  invEntryQ([[2, 0], [0, 5]], 1, 1),
  invEntryQ([[1, 2], [2, 5]], 0, 0, F.row([[[[1, 2, 1, 0], [2, 5, 0, 1]], { label: "[ A | I ]" }]])),
  mc(S`To invert $A$ by row reduction, reduce:`, S`$[\,A\mid I\,]$`, [S`$[\,I\mid A\,]$`, S`$[\,A\mid\vec 0\,]$`, S`$A^T$`], "The right block becomes A⁻¹."),
  tf("A zero row in the left block of [A | I] means A is singular.", true, "Fewer than n pivots."),
  fill("When [A | I] is reduced and the left block becomes I, the right block is ___.", ["A^-1", "A⁻¹", "the inverse", "inverse", "A inverse"], "[A | I] → [I | A⁻¹]."),
  tf("Row operations must be applied to both blocks of [A | I].", true, "Every operation acts on whole rows."),
  num(S`How many columns does $[\,A\mid I\,]$ have for a $3\times3$ matrix $A$?`, 6, "3 + 3."),
  invEntryQ([[1, 0, 0], [0, 2, 0], [0, 0, 4]], 2, 2),
  tf("Column operations may be used in the [A | I] method.", false, "Only row operations."),
  invEntryQ([[1, 1, 0], [0, 1, 0], [0, 0, 1]], 0, 1),
  mc(S`Column $j$ of $A^{-1}$ solves:`, S`$A\vec x=\vec e_j$`, [S`$A\vec x=\vec 0$`, S`$A^T\vec x=\vec e_j$`, S`$\vec x A=\vec e_j$`], "AA⁻¹ = I column by column."),
  invertibleQ([[1, 2, 3], [0, 1, 4], [0, 0, 0]]),
  invEntryQ([[1, 0, 2], [0, 1, 0], [0, 0, 1]], 0, 2, F.mat([[1, 0, 2], [0, 1, 0], [0, 0, 1]], { label: "A" })),
  tf("The inverse of an invertible upper triangular matrix is upper triangular.", true, "Only scalings and upward replacements are needed."),
  num(S`The left block of a reduced $[\,A\mid I\,]$ is $I$ and the right block is $${M([[3, -1], [-5, 2]])}$. Find $a_{21}$.`, 5, "A = (right block)⁻¹ = [[2, 1], [5, 3]]."),
  invEntryQ([[3, 1], [5, 2]], 1, 1),
  tf("If A has two equal rows, [A | I] reduces to [I | A⁻¹].", false, "Equal rows give a zero row: singular."),
  invEntryQ([[1, 0], [4, 1]], 1, 0),
];

const medium = [
  invEntryQ([[1, 2, 0], [0, 1, 1], [0, 0, 1]], 0, 2),
  invEntryQ([[1, 0, 1], [1, 1, 0], [0, 1, 2]], 1, 2, F.mat([[1, 0, 1], [1, 1, 0], [0, 1, 2]], { label: "A" })),
  invEntryQ([[2, 1, 0], [1, 1, 0], [0, 0, 3]], 2, 2),
  invEntryQ([[1, 1, 1], [0, 1, 2], [1, 2, 4]], 0, 0),
  invEntryQ([[0, 1, 0], [1, 0, 0], [0, 0, 1]], 0, 1),
  invertibleQ([[1, 2, 1], [2, 4, 3], [1, 2, 2]]),
  invertibleQ([[2, 1, 1], [1, 2, 1], [1, 1, 2]], F.mat([[2, 1, 1], [1, 2, 1], [1, 1, 2]], { label: "A" })),
  num(S`For which $k$ is $${M([[1, 1, 0], [1, 2, 1], [0, 1, "k"]])}$ singular?`, 1, "R₂ − R₁ → (0, 1, 1); R₃ − R₂ → (0, 0, k − 1)."),
  num(S`$A^{-1}=${M([[1, 0, 0], [2, 1, 0], [3, 4, 1]])}$. Find the $(3,1)$ entry of $A$.`, 5, "Invert: A = [[1, 0, 0], [−2, 1, 0], [5, −4, 1]] (reduce [A⁻¹ | I])."),
  tf("If A is invertible, the reduction of [A | I] never needs a row swap.", false, "A zero in a pivot position forces a swap, e.g. [[0, 1], [1, 0]]."),
  invEntryQ([[1, -1, 0], [0, 1, -1], [0, 0, 1]], 0, 2),
  mc(S`Reducing $[\,A\mid I\,]$ produced $${M([[1, 0, 2, 7, -3, 0], [0, 1, -1, -2, 1, 0], [0, 0, 0, 1, 1, 1]])}$ (left block 3 columns). Then:`, S`$A$ is singular`, [S`$A^{-1}$ is the right block`, "A = I", "the reduction was done wrongly"], "A zero row in the left block."),
  num(S`Using $A^{-1}=${M([[2, -1, 0], [-1, 2, -1], [0, -1, 2]])}$, find $x_2$ in $A\vec x=(1,1,1)$.`, 0, "Row 2 of A⁻¹ times (1, 1, 1): −1 + 2 − 1."),
  invEntryQ([[3, 0, 0], [1, 2, 0], [0, 1, 1]], 1, 0),
  tf("The inverse of a symmetric invertible matrix is symmetric.", true, "(A⁻¹)ᵀ = (Aᵀ)⁻¹ = A⁻¹."),
  num(S`For $D=\operatorname{diag}(4,-2,\tfrac12)$, find the sum of the diagonal of $D^{-1}$.`, 1.75, "1/4 − 1/2 + 2.", undefined, 0.001),
  invEntryQ([[1, 2, 3], [0, 1, 2], [0, 0, 1]], 0, 2, F.pat("upper", 3)),
  invertibleQ([[1, 0, 1], [0, 1, 1], [1, 1, 2]]),
  mc("Which operation makes the reduction of [A | I] start correctly when a₁₁ = 0?", "swap row 1 with a row that has a nonzero first entry", ["delete row 1", "add column 2 to column 1", "divide row 1 by 0"], "Row swaps are allowed; column operations are not."),
  invEntryQ([[1, 3], [2, 5]], 1, 0),
];

export const E = easy;
export { medium as M };
