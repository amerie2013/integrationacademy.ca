// 3.3 Triangular, Diagonal and Other Special Matrices — 20 easy + 20 medium questions
import { S, F, M, mc, num, tf, fill, traceQ } from "./gen3.mjs";

const easy = [
  mc(S`Which matrix is upper triangular?`, S`$${M([[2, 5, 1], [0, 3, -4], [0, 0, 7]])}$`, [S`$${M([[2, 0, 0], [5, 3, 0], [1, -4, 7]])}$`, S`$${M([[2, 5, 1], [0, 3, -4], [1, 0, 7]])}$`, S`$${M([[0, 0, 2], [0, 3, 5], [7, -4, 1]])}$`], "Upper triangular: every entry below the main diagonal is 0."),
  mc(S`Which matrix is lower triangular?`, S`$${M([[4, 0], [-1, 2]])}$`, [S`$${M([[4, -1], [0, 2]])}$`, S`$${M([[0, 4], [2, -1]])}$`, S`$${M([[4, -1], [1, 2]])}$`], "Lower triangular: every entry above the main diagonal is 0."),
  tf("A diagonal matrix is both upper and lower triangular.", true, "All entries off the diagonal are 0 — in particular those below and those above."),
  traceQ([[3, 1, 0], [2, -5, 4], [1, 1, 6]]),
  traceQ([[7, -2], [9, -4]]),
  fill(S`A diagonal matrix whose diagonal entries are all equal to $k$ is called a ___ matrix.`, ["scalar"], "kI is a scalar matrix."),
  tf(S`$${M([[3, 0], [0, 3]])}=3I_2$.`, true, "A scalar matrix: 3 on the diagonal, 0 elsewhere."),
  num(S`What is $\operatorname{tr}I_5$?`, 5, "Five diagonal ones: 1 + 1 + 1 + 1 + 1 = 5."),
  tf(S`$${M([[1, 2], [3, 4]])}$ has a trace even though it is not triangular.`, true, "Every square matrix has a trace: 1 + 4 = 5."),
  tf("The trace of a 2 × 3 matrix is defined.", false, "The trace is defined only for square matrices."),
  num("How many entries of a 4 × 4 upper triangular matrix are forced to be 0?", 6, "The entries strictly below the diagonal: 3 + 2 + 1 = 6.", F.pat("upper", 4)),
  num("How many entries of a 5 × 5 diagonal matrix may be nonzero?", 5, "Only the 5 diagonal entries.", F.pat("diag", 5)),
  tf("The zero matrix (square) is upper triangular.", true, "All entries below the diagonal are 0 (all entries are)."),
  mc(S`$\operatorname{diag}(2,-1,4)=$`, S`$${M([[2, 0, 0], [0, -1, 0], [0, 0, 4]])}$`, [S`$${M([[2, -1, 4]])}$`, S`$${M([[0, 0, 2], [0, -1, 0], [4, 0, 0]])}$`, S`$${M([[2, 2, 2], [-1, -1, -1], [4, 4, 4]])}$`], "diag(d₁, d₂, d₃) puts the dᵢ on the main diagonal and 0 elsewhere."),
  num(S`Find the $(2,2)$ entry of $\operatorname{diag}(3,1)+\operatorname{diag}(-1,6)$.`, 7, "Diagonal matrices add on the diagonal: 1 + 6 = 7."),
  tf("The sum of two lower triangular matrices is lower triangular.", true, "Above the diagonal both have 0, and 0 + 0 = 0."),
  num(S`$\operatorname{tr}(A)=4$. Find $\operatorname{tr}(3A)$.`, 12, "tr(kA) = k·tr(A) = 12."),
  tf("A row echelon form of a square matrix is upper triangular.", true, "Each leading entry is to the right of the one above, so everything below the diagonal is 0."),
  num(S`$\operatorname{tr}A=2$ and $\operatorname{tr}B=-5$. Find $\operatorname{tr}(A+B)$.`, -3, "tr(A + B) = tr A + tr B."),
  mc("A square matrix whose only nonzero entries are on the main diagonal is:", "diagonal", ["scalar (always)", "the identity", "symmetric but not triangular"], "That is the definition of a diagonal matrix; it is scalar only when the diagonal entries are equal."),
];

const medium = [
  traceQ([[2, 5, -1, 0], [3, -4, 2, 1], [0, 6, 1, 8], [7, 2, 2, 3]]),
  num(S`Find $\operatorname{tr}(2A-B)$ for $A=${M([[1, 3], [0, 4]])}$, $B=${M([[5, 0], [2, -2]])}$.`, 7, "tr(2A − B) = 2·tr A − tr B = 2·5 − 3 = 7."),
  num(S`Find $\operatorname{tr}(A^T)$ for $A=${M([[6, 1, 0], [2, -3, 5], [4, 4, 2]])}$.`, 5, "Transposing keeps the diagonal: 6 − 3 + 2 = 5."),
  tf("If A is upper triangular, then Aᵀ is lower triangular.", true, "The zeros below the diagonal move above it.", F.trans([[1, 2, 3], [0, 4, 5], [0, 0, 6]], 0, 2)),
  tf("The product of a scalar and an upper triangular matrix is upper triangular.", true, "k·0 = 0 below the diagonal."),
  num(S`For which negative $x$ is $${M([[1, "x-3"], ["x^2-9", 2]])}$ upper triangular?`, -3, "Upper triangular needs the (2, 1) entry to vanish: x² − 9 = 0, so x = ±3; the negative one is −3. (Then the (1, 2) entry is −6, which is allowed.)"),
  num(S`For which $x$ is $${M([[1, "x-3"], ["x^2-9", 2]])}$ diagonal?`, 3, "Diagonal needs both x − 3 = 0 and x² − 9 = 0: only x = 3."),
  mc(S`Which matrix is both symmetric and upper triangular?`, S`$${M([[2, 0], [0, -5]])}$`, [S`$${M([[2, 1], [0, -5]])}$`, S`$${M([[2, 1], [1, -5]])}$`, S`$${M([[0, 1], [1, 0]])}$`], "Symmetric + upper triangular forces the entries above the diagonal to mirror zeros: it must be diagonal."),
  tf(S`$\operatorname{tr}(A+B)=\operatorname{tr}A+\operatorname{tr}B$ for all $n\times n$ $A,B$.`, true, "(a₁₁ + b₁₁) + … + (aₙₙ + bₙₙ) regroups."),
  num(S`Row reduce $${M([[2, 4], [1, 5]])}$ to an upper triangular form with $R_2-\tfrac12R_1$. What is the new $(2,2)$ entry?`, 3, S`$R_2-\tfrac12R_1$: $(1,5)-\tfrac12(2,4)=(0,3)$, giving $${M([[2, 4], [0, 3]])}$.`),
  num(S`Row reduce $${M([[1, 2, 1], [2, 5, 0], [-1, 1, 4]])}$ to upper triangular form using only "row + multiple of a row". What is the $(3,3)$ entry?`, 11, S`$R_2-2R_1$: $(2,5,0)-2(1,2,1)=(0,1,-2)$. $R_3+R_1$: $(-1,1,4)+(1,2,1)=(0,3,5)$. Now $${M([[1, 2, 1], [0, 1, -2], [0, 3, 5]])}$. $R_3-3R_2$: $(0,3,5)-3(0,1,-2)=(0,0,11)$, giving $${M([[1, 2, 1], [0, 1, -2], [0, 0, 11]])}$.`),
  tf("The product of two scalar matrices of the same size is a scalar matrix.", true, "(kI)(lI) = klI."),
  num(S`The trace of $\operatorname{diag}(a,2a,3a)$ is 18. Find $a$.`, 3, "a + 2a + 3a = 6a = 18."),
  mc(S`$A$ is $3\times3$ with $a_{ij}=0$ whenever $i<j$. Then $A$ is:`, "lower triangular", ["upper triangular", "diagonal", "skew-symmetric"], "i < j means above the diagonal; those entries vanish, so A is lower triangular.", F.pat("lower", 3)),
  num(S`$A$ is $5\times5$ with $a_{ij}=i+j$ when $i\ge j$ and $0$ otherwise. Find $\operatorname{tr}A$.`, 30, "Diagonal entries are 2i: 2 + 4 + 6 + 8 + 10 = 30."),
  tf(S`If $\operatorname{tr}A=0$, then $A=0$.`, false, S`$${M([[1, 0], [0, -1]])}$ has trace 0 but is not zero.`),
  tf("If a matrix is diagonal and has trace 0, it must be the zero matrix.", false, "diag(2, −2) has trace 0."),
  num(S`How many of these are upper triangular: $I_3$, $0_{3\times3}$, $\operatorname{diag}(1,2,3)$, $${M([[1, 0], [1, 1]])}$?`, 3, "The first three are; the last has a 1 below the diagonal."),
  num(S`For $A=\operatorname{diag}(2,-1,5)$ and $B=\operatorname{diag}(4,3,0)$, find the sum of the entries of $3A-2B$.`, 4, "3A − 2B = diag(6 − 8, −3 − 6, 15 − 0) = diag(−2, −9, 15); the off-diagonal entries are 0, so the sum is −2 − 9 + 15 = 4."),
  mc("What does 'strictly upper triangular' mean?", "upper triangular with zero diagonal", ["upper triangular with nonzero diagonal", "upper triangular and symmetric", "all entries above the diagonal nonzero"], S`E.g. $${M([[0, 3], [0, 0]])}$: zeros on and below the diagonal.`),
];

export const E = easy;
export { medium as M };
