// 6.3 Elementary Matrices — 20 easy + 20 medium questions
import { S, F, M, mc, num, tf, fill } from "./gen6.mjs";

const easy = [
  fill("A matrix obtained from I by one elementary row operation is called an ___ matrix.", ["elementary"], "That is the definition."),
  mc(S`$${M([[0, 1, 0], [1, 0, 0], [0, 0, 1]])}$ performs:`, S`$R_1\leftrightarrow R_2$`, [S`$R_2\to R_2+R_1$`, S`$R_1\to2R_1$`, S`$R_2\leftrightarrow R_3$`], "It is I with rows 1 and 2 swapped.", F.mat([[0, 1, 0], [1, 0, 0], [0, 0, 1]], { label: "E" })),
  mc(S`$${M([[1, 0, 0], [0, 1, 0], [-4, 0, 1]])}$ performs:`, S`$R_3\to R_3-4R_1$`, [S`$R_1\to R_1-4R_3$`, S`$R_3\to-4R_3$`, S`$R_3\leftrightarrow R_1$`], "Entry (3, 1) = −4 adds −4·row 1 to row 3."),
  num(S`The elementary matrix of $R_2\to5R_2$ ($2\times2$) has $(2,2)$ entry:`, 5, "Scale row 2 of I by 5."),
  num(S`The inverse of the elementary matrix for $R_2\to R_2+6R_1$ has $(2,1)$ entry:`, -6, "Undo with R₂ − 6R₁."),
  tf("Every elementary matrix is invertible.", true, "Its inverse is the reverse operation."),
  tf(S`$EA$ performs on $A$ the row operation that produced $E$ from $I$.`, true, "Left multiplication acts on rows."),
  tf(S`$AE$ performs the same row operation on $A$.`, false, "Right multiplication acts on columns."),
  num(S`The inverse of $\operatorname{diag}(1,1,\tfrac13)$ has $(3,3)$ entry:`, 3, "Undo scaling by ⅓."),
  mc("The inverse of a swap matrix is:", "the same swap matrix", ["the identity", "its negative", "its transpose times 2"], "Swapping twice restores the order."),
  num(S`$E=${M([[1, 0], [2, 1]])}$, $A=${M([[3, 1], [4, 5]])}$. Find the $(2,1)$ entry of $EA$.`, 10, "Row 2 + 2·row 1: 4 + 6.", F.row([[[[1, 0], [2, 1]], { row: 1, label: "E" }], [[[3, 1], [4, 5]], { label: "A" }]])),
  tf(S`$\operatorname{diag}(1,0,1)$ is an elementary matrix.`, false, "Scaling by 0 is not allowed."),
  num(S`$E_3E_2E_1A=I$. How many row operations reduced $A$ to $I$?`, 3, "One per elementary matrix."),
  mc(S`If $E_2E_1A=I$, then $A^{-1}=$`, S`$E_2E_1$`, [S`$E_1E_2$`, S`$E_1^{-1}E_2^{-1}$`, S`$E_2^{-1}E_1^{-1}$`], "(E₂E₁)A = I."),
  tf("An invertible matrix is a product of elementary matrices.", true, "Write the reduction to I and invert it."),
  num(S`The $3\times3$ matrix for $R_1\to R_1-2R_3$ has $(1,3)$ entry:`, -2, "Row 1 of I minus 2·row 3 of I."),
  tf("The product of two elementary matrices is always elementary.", false, "It may change two rows of I."),
  mc(S`$E=${M([[1, 0], [0, -1]])}$. $E^{-1}=$`, S`$E$`, [S`$I$`, S`$-E$`, S`$${M([[1, 0], [0, 1]])}$`], "Scaling by −1 twice gives back I."),
  num(S`$E$ swaps rows 1 and 3 of a $3\times3$ matrix. What is $E^2$'s $(2,2)$ entry?`, 1, "E² = I."),
  tf("A singular matrix can be written as a product of elementary matrices.", false, "Such products are invertible."),
];

const medium = [
  num(S`$E=${M([[1, 0, 0], [0, 1, 0], [0, -3, 1]])}$, $A=${M([[1, 2, 0], [0, 1, 4], [2, 3, 1]])}$. Find the $(3,3)$ entry of $EA$.`, -11, "Row 3 − 3·row 2: 1 − 12.", F.row([[[[1, 0, 0], [0, 1, 0], [0, -3, 1]], { row: 2, label: "E" }], [[[1, 2, 0], [0, 1, 4], [2, 3, 1]], { label: "A" }]])),
  num(S`$A=${M([[1, 4], [2, 9]])}$ reduces to $I$ by $E_1$ ($R_2-2R_1$) and $E_2$ ($R_1-4R_2$). Find the $(1,2)$ entry of $E_2E_1$.`, -4, "E₂E₁ = A⁻¹ = [[9, −4], [−2, 1]]."),
  num(S`Write $A=${M([[1, 0], [5, 1]])}${M([[1, 2], [0, 1]])}$ as one matrix; give $a_{22}$.`, 11, "[[1, 2], [5, 10 + 1]]."),
  mc(S`$A=E_1^{-1}E_2^{-1}$ where $E_1$: $R_2-3R_1$ and $E_2$: $R_1-2R_2$. Then $A=$`, S`$${M([[1, 2], [3, 7]])}$`, [S`$${M([[1, -2], [-3, 7]])}$`, S`$${M([[7, -2], [-3, 1]])}$`, S`$${M([[1, 3], [2, 7]])}$`], "E₁⁻¹ = [[1, 0], [3, 1]], E₂⁻¹ = [[1, 2], [0, 1]]; product [[1, 2], [3, 7]]."),
  tf(S`$(E_1E_2)^{-1}=E_1^{-1}E_2^{-1}$.`, false, "The order reverses: E₂⁻¹E₁⁻¹."),
  num(S`$AE$ with $E=${M([[1, 0], [-2, 1]])}$ and $A=${M([[3, 1], [4, 2]])}$: find the $(1,1)$ entry.`, 1, "Column 1 − 2·column 2: 3 − 2.", F.row([[[[3, 1], [4, 2]], { label: "A" }], [[[1, 0], [-2, 1]], { label: "E" }]])),
  mc("Left multiplication by an elementary matrix corresponds to a:", "row operation", ["column operation", "transpose", "determinant"], "EA acts on the rows of A."),
  num(S`How many elementary matrices are needed (at least) to reduce $${M([[2, 0], [0, 3]])}$ to $I$?`, 2, "Scale each row once."),
  num(S`$E$ is the $4\times4$ matrix of $R_2\to R_2+7R_4$. Find the $(2,4)$ entry of $E^{-1}$.`, -7, "Reverse: R₂ − 7R₄."),
  tf("Every elementary matrix is either upper or lower triangular.", false, "Swap matrices are neither."),
  tf(S`$E^T$ is elementary whenever $E$ is.`, true, "Swaps and scalings are symmetric; the transpose of R_i + cR_j is R_j + cR_i."),
  num(S`Reduce $${M([[2, 4], [1, 3]])}$ with $E_1$: $R_1\to\tfrac12R_1$, $E_2$: $R_2-R_1$, $E_3$: $R_1-2R_2$. Find the $(1,1)$ entry of $E_3E_2E_1$.`, 1.5, "E₃E₂E₁ = A⁻¹ = ½[[3, −4], [−1, 2]].", undefined, 0.001),
  mc(S`Which product equals the matrix that adds 2·row 1 to row 3 and then swaps rows 1 and 2?`, S`$PE$ with $E$: $R_3+2R_1$ and $P$: $R_1\leftrightarrow R_2$`, [S`$EP$`, S`$E+P$`, S`$P^{-1}E$`], "The first operation is the rightmost factor."),
  num(S`$E_1=${M([[1, 0], [3, 1]])}$, $E_2=${M([[1, 0], [-3, 1]])}$. Find the $(2,1)$ entry of $E_1E_2$.`, 0, "They undo each other: E₁E₂ = I."),
  tf("The identity matrix is an elementary matrix.", true, "Scale a row by 1 (or add 0 times a row)."),
  num(S`Elementary matrices $E_1,\dots,E_5$ reduce $A$ to $I$. Find $\det$-free: how many factors does $A^{-1}$ have as a product of elementary matrices?`, 5, "A⁻¹ = E₅E₄E₃E₂E₁."),
  num(S`$E=${M([[1, 0, 0], [0, 0, 1], [0, 1, 0]])}$. Find the $(3,1)$ entry of $E${M([[1, 2, 3], [4, 5, 6], [7, 8, 9]])}$.`, 4, "Rows 2 and 3 swap: row 3 becomes (4, 5, 6)."),
  tf(S`If $EA=I$ for an elementary $E$, then $A$ is elementary.`, true, "A = E⁻¹, itself elementary."),
  mc(S`Row reducing $A$ used $R_2-R_1$, then $R_3-2R_2$. Which product of inverse elementary matrices equals $A$ (with $A$ reduced to $I$ by these alone)?`, S`$E_1^{-1}E_2^{-1}$`, [S`$E_2^{-1}E_1^{-1}$`, S`$E_2E_1$`, S`$E_1E_2$`], "A = (E₂E₁)⁻¹ = E₁⁻¹E₂⁻¹."),
  num(S`$A=${M([[1, 0, 0], [2, 1, 0], [0, 3, 1]])}=E_1^{-1}E_2^{-1}$. Find the $(3,2)$ entry of $E_2$.`, -3, "E₂ performs R₃ − 3R₂ in the reduction."),
];

export const E = easy;
export { medium as M };
