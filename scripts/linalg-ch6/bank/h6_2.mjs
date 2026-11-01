// 6.2 Computing Inverses by Row Reduction — 20 hard questions
import { S, F, M, mc, num, tf, ms, invEntryQ, invertibleQ, invSolveQ } from "./gen6.mjs";

export const TOPIC = "6.2 Computing Inverses by Row Reduction";
export const Q = [
  invEntryQ([[2, 1, 1], [1, 2, 1], [1, 1, 2]], 0, 0),
  invEntryQ([[0, 2, 1], [1, 0, 1], [1, 1, 0]], 2, 1, F.mat([[0, 2, 1], [1, 0, 1], [1, 1, 0]], { cells: [[0, 0]], label: "A (needs a swap)" })),
  invEntryQ([[1, 0, 0, 0], [1, 1, 0, 0], [0, 1, 1, 0], [0, 0, 1, 1]], 3, 0),
  invEntryQ([[1, 2, 1], [1, 3, 2], [1, 0, 1]], 1, 2),
  invSolveQ([[1, 2, 1], [1, 3, 2], [1, 0, 1]], [2, 3, 1], 2),
  invertibleQ([[1, 2, 3, 4], [0, 1, 2, 3], [1, 3, 5, 7], [0, 0, 1, 1]]),
  num(S`For which $a$ is $${M([[1, 1, 1], [1, "a", 1], [1, 1, "a"]])}$ singular?`, 1, "R₂ − R₁, R₃ − R₁ give (0, a − 1, 0), (0, 0, a − 1): the pivots vanish only at a = 1.", F.mat([[1, 1, 1], [1, "a", 1], [1, 1, "a"]], { label: "A" })),
  num(S`$A^{-1}=${M([[1, 1, 0], [0, 1, 1], [0, 0, 1]])}$. Find the $(1,3)$ entry of $A$.`, 1, "Reduce [A⁻¹ | I]: A = [[1, −1, 1], [0, 1, −1], [0, 0, 1]]."),
  ms("Which matrices have upper triangular inverses?", [S`$${M([[2, 1], [0, 3]])}$`, S`$${M([[1, 0], [1, 1]])}$`, S`$\operatorname{diag}(1,2,3)$`, S`$${M([[1, 2, 3], [0, 1, 4], [0, 0, 5]])}$`], [0, 2, 3], "Upper triangular (incl. diagonal) invertible matrices have upper triangular inverses; the lower one does not."),
  tf(S`If $A^{-1}$ has integer entries and $A$ has integer entries, then $\det A=\pm1$.`, true, "det A · det A⁻¹ = 1 with both determinants integers."),
  invEntryQ([[4, 0, 0], [0, 0, 2], [0, 1, 0]], 1, 2),
  num(S`The right block after reducing $[\,A\mid I\,]$ is $\tfrac12${M([[1, 1], [-1, 1]])}$. Find $\det A$.`, 2, "det A⁻¹ = (½)²(1·1 − 1·(−1)) = ¼·2 = ½, and det A = 1/det A⁻¹ = 2. (Indeed A = [[1, −1], [1, 1]], with det 1 + 1 = 2.)"),
  invSolveQ([[2, 1, 1], [1, 2, 1], [1, 1, 2]], [4, 4, 4], 0, F.mat([[2, 1, 1], [1, 2, 1], [1, 1, 2]], { label: "A" })),
  tf("Reducing [A | B] to [I | X] gives X = A⁻¹B.", true, "Each column of X solves A x = (column of B)."),
  num(S`Solve $AX=B$ for $A=${M([[1, 2], [0, 1]])}$, $B=${M([[3, 1], [1, 2]])}$ by reducing $[\,A\mid B\,]$; give $X_{12}$.`, -3, "R₁ − 2R₂ turns [A | B] into [I | [[1, −3], [1, 2]]].", F.row([[[[1, 2, 3, 1], [0, 1, 1, 2]], { label: "[ A | B ]" }]])),
  invEntryQ([[1, 1, 0, 0], [0, 1, 1, 0], [0, 0, 1, 1], [0, 0, 0, 1]], 0, 3),
  mc("The cost of inverting an n × n matrix by row reduction grows roughly like:", "n³", ["n", "n²", "2ⁿ"], "About n rows, each cleared with n operations on rows of length 2n."),
  tf("If A is invertible, so is the matrix obtained by swapping two of its columns.", true, "Swapping columns is right multiplication by an invertible matrix."),
  invEntryQ([[1, 2, 2], [2, 1, 2], [2, 2, 1]], 0, 1),
  num(S`For which $k$ is $${M([[1, 2, 0], [2, "k", 1], [0, 1, 1]])}$ singular?`, 5, "R₂ − 2R₁ → (0, k − 4, 1); with R₃ = (0, 1, 1): pivot condition k − 4 − 1 = 0."),
];
