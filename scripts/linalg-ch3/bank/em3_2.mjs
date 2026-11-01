// 3.2 The Transpose and Symmetric Matrices — 20 easy + 20 medium questions
import { S, F, M, mc, num, tf, fill, symQ, T } from "./gen3.mjs";

const A1 = [[2, -1, 4], [0, 3, 5]];
const easy = [
  mc(S`$${M(A1)}^T=$`, S`$${M(T(A1))}$`, [S`$${M([[4, -1, 2], [5, 3, 0]])}$`, S`$${M([[2, 0], [4, 5], [-1, 3]])}$`, S`$${M(A1)}$`], "Row i of A becomes column i of Aᵀ.", F.trans(A1, 0, 2)),
  mc(S`$A$ is $3\times5$. The size of $A^T$ is:`, S`$5\times3$`, [S`$3\times5$`, S`$5\times5$`, S`$3\times3$`], "Transposing swaps the numbers of rows and columns."),
  num(S`For $A=${M([[1, 7], [-2, 0], [3, 6]])}$, find $(A^T)_{12}$.`, -2, "(Aᵀ)₁₂ = a₂₁ = −2."),
  tf(S`$(A^T)^T=A$ for every matrix $A$.`, true, "Swapping rows and columns twice gives back A."),
  fill(S`A square matrix with $A^T=A$ is called ___.`, ["symmetric"], "That is the definition."),
  symQ([[1, 4], [4, -2]]),
  symQ([[0, 2], [-2, 0]]),
  symQ([[3, 1, 0], [1, 2, 5], [0, 5, -1]], F.mat([[3, 1, 0], [1, 2, 5], [0, 5, -1]], { cells: [[0, 1], [1, 0], [1, 2, "#bbf7d0"], [2, 1, "#bbf7d0"]], label: "A" })),
  tf(S`A $2\times3$ matrix can be symmetric.`, false, "A symmetric matrix equals its transpose, so it must be square."),
  num(S`$${M([[1, "x"], [5, 2]])}$ is symmetric. Find $x$.`, 5, "Symmetric means a₁₂ = a₂₁, so x = 5."),
  mc(S`The transpose of the row vector $${M([[3, -1, 2]])}$ is:`, S`the column vector $${M([[3], [-1], [2]])}$`, [S`$${M([[2, -1, 3]])}$`, S`$${M([[-3, 1, -2]])}$`, S`the same row vector`], "A 1 × 3 matrix transposes to a 3 × 1 matrix."),
  tf(S`$(A+B)^T=A^T+B^T$.`, true, "Entry (i, j) of both sides is a_ji + b_ji."),
  tf(S`$(3A)^T=3A^T$.`, true, "Entry (i, j) of both sides is 3a_ji."),
  num(S`How many entries of a $4\times4$ symmetric matrix can be chosen freely?`, 10, "The diagonal (4) and the entries above it (6); those below are mirrors: 4 + 6 = 10.", F.pat("upper", 4)),
  fill(S`A square matrix with $A^T=-A$ is called ___-symmetric.`, ["skew", "anti"], "Skew-symmetric (also called antisymmetric)."),
  num(S`For $A=${M([[2, 0], [1, 3]])}$, find the $(1,2)$ entry of $A+A^T$.`, 1, "A + Aᵀ = [[4, 1], [1, 6]]; entry (1, 2) = 0 + 1 = 1."),
  tf("Every diagonal matrix is symmetric.", true, "All off-diagonal entries are 0, so the mirror pairs agree."),
  mc("The main diagonal of Aᵀ compared with that of A is:", "the same", ["reversed", "negated", "moved to the anti-diagonal"], "(Aᵀ)ᵢᵢ = aᵢᵢ: the diagonal stays fixed."),
  tf(S`The identity matrix $I_n$ is symmetric.`, true, "It is diagonal."),
  num(S`For $A=${M([[5, -2], [7, 1]])}$, find the sum of the entries of $A-A^T$.`, 0, "A − Aᵀ = [[0, −9], [9, 0]] is skew-symmetric; its entries cancel."),
];

const medium = [
  num(S`For $A=${M([[1, 2], [3, 4]])}$, $B=${M([[0, -1], [5, 2]])}$, find $(2A-B^T)_{21}$.`, 7, "(Bᵀ)₂₁ = b₁₂ = −1, so 2·a₂₁ − (−1) = 6 + 1 = 7."),
  num(S`$${M([[1, "a+b", 3], [4, 2, "c"], ["a-b", 6, 0]])}$ is symmetric. Find $a$.`, 3.5, "a + b = 4 (mirror of entry 2,1) and a − b = 3 (mirror of entry 1,3). Adding: 2a = 7, a = 3.5.", undefined, 0.001),
  num(S`$${M([[1, "a+b", 3], [4, 2, "c"], ["a-b", 6, 0]])}$ is symmetric. Find $c$.`, 6, "c is the mirror of entry (3, 2) = 6."),
  tf(S`If $A$ is skew-symmetric, then every diagonal entry of $A$ is 0.`, true, "aᵢᵢ = −aᵢᵢ forces aᵢᵢ = 0."),
  symQ([[2, -3, 1], [-3, 0, 4], [1, 4, 7]]),
  symQ([[2, -3, 1], [-3, 0, 4], [1, -4, 7]]),
  tf(S`$A+A^T$ is symmetric for every square $A$.`, true, "(A + Aᵀ)ᵀ = Aᵀ + A = A + Aᵀ."),
  tf(S`$A-A^T$ is symmetric for every square $A$.`, false, "(A − Aᵀ)ᵀ = Aᵀ − A = −(A − Aᵀ): it is skew-symmetric."),
  mc(S`Write $A=${M([[3, 5], [1, 2]])}$ as $S+K$ with $S$ symmetric and $K$ skew-symmetric. Then $S=$`, S`$${M([[3, 3], [3, 2]])}$`, [S`$${M([[3, 5], [5, 2]])}$`, S`$${M([[3, 1], [1, 2]])}$`, S`$${M([[0, 2], [-2, 0]])}$`], "S = ½(A + Aᵀ) = ½[[6, 6], [6, 4]] = [[3, 3], [3, 2]] and K = ½(A − Aᵀ) = [[0, 2], [−2, 0]].", F.trans([[3, 5], [1, 2]], 0, 1)),
  num(S`For $A=${M([[3, 5], [1, 2]])}$, the skew-symmetric part $K=\tfrac12(A-A^T)$ has $K_{12}=$`, 2, "K = ½[[0, 4], [−4, 0]] = [[0, 2], [−2, 0]]."),
  num(S`How many entries of a $5\times5$ skew-symmetric matrix can be chosen freely?`, 10, "The diagonal is forced to 0 and the entries below mirror those above: 5·4/2 = 10 free entries."),
  tf(S`If $A$ and $B$ are symmetric $n\times n$ matrices, then $2A-3B$ is symmetric.`, true, "(2A − 3B)ᵀ = 2Aᵀ − 3Bᵀ = 2A − 3B."),
  num(S`Solve $X^T+${M([[1, 2], [0, 1]])}=${M([[4, 6], [2, 1]])}$ and give $X_{12}$.`, 2, "Xᵀ = [[3, 4], [2, 0]], so X = [[3, 2], [4, 0]] and X₁₂ = 2."),
  mc(S`$A$ is $2\times4$. Which sum is defined?`, S`$A^T+${M([[1, 0], [0, 1], [1, 1], [0, 0]])}$`, [S`$A+A^T$`, S`$A^T+${M([[1, 0, 1, 0], [0, 1, 0, 1]])}$`, S`$A+I_4$`], "Aᵀ is 4 × 2, so it can be added to a 4 × 2 matrix only."),
  num(S`For $A=${M([[1, -2, 0], [3, 1, 4]])}$, find the sum of row 3 of $A^T$.`, 4, "Row 3 of Aᵀ is column 3 of A: (0, 4); sum 4.", F.trans([[1, -2, 0], [3, 1, 4]], 1, 2)),
  tf(S`If $A^T=A$ and $A^T=-A$, then $A=0$.`, true, "Then A = −A, so 2A = 0."),
  num(S`$${M([[0, "x", 3], [-2, 0, "y"], ["z", 5, 0]])}$ is skew-symmetric. Find $x+y+z$.`, -6, "x = −(−2) = 2, y = −5, z = −3: x + y + z = −6."),
  tf(S`The transpose of an upper triangular matrix is upper triangular.`, false, "It is lower triangular: entries above the diagonal move below it."),
  mc(S`$(A^T+B)^T=$`, S`$A+B^T$`, [S`$A^T+B^T$`, S`$A+B$`, S`$B+A^T$`], "Transpose each term: (Aᵀ)ᵀ + Bᵀ = A + Bᵀ."),
  num(S`For which $k$ is $${M([[1, "k^2"], [4, 3]])}$ symmetric with $k>0$?`, 2, "k² = 4 and k > 0 give k = 2."),
];

export const E = easy;
export { medium as M };
