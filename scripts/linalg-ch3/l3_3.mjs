// LINALG1 3.3 — Triangular, Diagonal and Other Special Matrices: diagonal, scalar and identity matrices, upper and
// lower triangular matrices (aᵢⱼ = 0 for i > j, resp. i < j), how they behave under addition, scaling and the
// transpose, triangular forms from row reduction, and the trace.
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, q, num, choice, hard, definition, theorem, am, sfig, steps } from "./lib.mjs";
import { rowPic, patternPic } from "./ws/fig3.mjs";

export const TITLE = "3.3 Triangular, Diagonal and Other Special Matrices";
export const ID = "11a10001-0001-4001-8001-000000000303";

const S = String.raw;
const M = (m) => am(m, false);
const patterns = sfig(rowPic([[[["*", "*", "*", "*"], [0, "*", "*", "*"], [0, 0, "*", "*"], [0, 0, 0, "*"]], { label: "upper" }], " ", [[["*", 0, 0, 0], ["*", "*", 0, 0], ["*", "*", "*", 0], ["*", "*", "*", "*"]], { label: "lower" }], " ", [[["*", 0, 0, 0], [0, "*", 0, 0], [0, 0, "*", 0], [0, 0, 0, "*"]], { label: "diagonal" }]]), "∗ = any number (possibly 0)");
const upFig = sfig(patternPic("upper"), "upper triangular: every entry below the main diagonal is 0");
const traceFig = sfig(rowPic([[[[3, 1, 7], [0, -2, 4], [5, 6, 1]], { cells: [[0, 0], [1, 1], [2, 2]], label: "tr A = 3 − 2 + 1 = 2" }]]), "the trace adds the main diagonal");

export const blocks = () => [
  intro({
    icon: "📐",
    title: "Triangular, Diagonal and Other Special Matrices",
    overview: S`Some square matrices are special because of <em>where their zeros are</em>. A <strong>diagonal</strong> matrix has nonzero entries only on the main diagonal; an <strong>upper triangular</strong> matrix has only zeros below it; a <strong>lower triangular</strong> matrix only zeros above it. These shapes are easy to compute with: Gaussian elimination produces an upper triangular matrix, systems with triangular coefficient matrices are solved by substitution, and (in Chapter 6) their determinants are just the product of the diagonal. This lesson defines them, shows which operations preserve them, and introduces the <strong>trace</strong>.`,
    goals: [
      "recognise diagonal, scalar, upper triangular and lower triangular matrices;",
      "show that sums, scalar multiples and transposes of triangular matrices are triangular;",
      "use row operations to reach an upper triangular form;",
      "compute the trace and use its linearity;",
      "combine special shapes with symmetry.",
    ],
    outcomes: "matrix algebra: special matrices — diagonal, triangular, the trace",
    prior: [
      [S`What is the transpose of \(${M([[1, 2], [0, 3]])}\)?`, S`\(${M([[1, 0], [2, 3]])}\) (3.2).`],
      [S`What shape does Gaussian elimination give a square coefficient matrix with a pivot in every column?`, S`A staircase with zeros below the diagonal (2.4).`],
      [S`What is the main diagonal of \(${M([[5, 1], [2, 7]])}\)?`, S`The entries 5 and 7.`],
    ],
    words: [
      ["Diagonal matrix", "square, zero off the main diagonal", "\\(\\operatorname{diag}(2,-1,5)\\)"],
      ["Scalar matrix", "diagonal with all diagonal entries equal: \\(kI\\)", "\\(3I_2\\)"],
      ["Upper triangular", "\\(a_{ij}=0\\) whenever \\(i\\gt j\\)", "zeros below the diagonal"],
      ["Lower triangular", "\\(a_{ij}=0\\) whenever \\(i\\lt j\\)", "zeros above the diagonal"],
      ["Trace", "\\(\\operatorname{tr}A=a_{11}+\\dots+a_{nn}\\)", "\\(\\operatorname{tr}I_n=n\\)"],
    ],
  }),

  section("📌 Diagonal and scalar matrices", S`
  ${definition("diagonal", S`A square matrix is <strong>diagonal</strong> if \(a_{ij}=0\) whenever \(i\ne j\). We write \(\operatorname{diag}(d_1,\dots,d_n)\). A diagonal matrix with all \(d_i\) equal to \(k\) is a <strong>scalar matrix</strong>, \(kI_n\).`)}
  <p>The zero matrix and the identity are both diagonal (and scalar). A diagonal entry itself may be 0 — "diagonal" only restricts the <em>off</em>-diagonal entries.</p>
  ${patterns}`),

  section("📌 Triangular matrices", S`
  ${definition("triangular", S`An \(n\times n\) matrix is <strong>upper triangular</strong> if \(a_{ij}=0\) whenever \(i\gt j\) (everything below the main diagonal is 0) and <strong>lower triangular</strong> if \(a_{ij}=0\) whenever \(i\lt j\) (everything above is 0).`)}
  ${upFig}
  ${theorem("operations keep the shape", S`If \(A,B\) are upper triangular \(n\times n\) and \(k\) is a scalar, then \(A+B\) and \(kA\) are upper triangular, and \(A^T\) is lower triangular. A matrix is diagonal exactly when it is both upper and lower triangular.`, S`For \(i\gt j\): \((A+B)_{ij}=0+0=0\) and \((kA)_{ij}=k\cdot0=0\). \((A^T)_{ij}=a_{ji}\), which is 0 when \(j\gt i\), i.e. when \(i\lt j\): lower triangular. Both shapes together force \(a_{ij}=0\) for all \(i\ne j\).`)}
  ${keyIdea(S`Row reduction turns any square matrix into an upper triangular one (an echelon form of a square matrix has zeros below the diagonal). Triangular systems are solved by back substitution.`)}`),

  section("📌 The trace", S`
  ${definition("trace", S`The <strong>trace</strong> of a square matrix is the sum of its diagonal entries: \(\operatorname{tr}A=a_{11}+a_{22}+\dots+a_{nn}\).`)}
  ${traceFig}
  ${theorem("linearity of the trace", S`\(\operatorname{tr}(A+B)=\operatorname{tr}A+\operatorname{tr}B\), \(\operatorname{tr}(kA)=k\operatorname{tr}A\), and \(\operatorname{tr}(A^T)=\operatorname{tr}A\).`, S`The diagonal of \(A+B\) is \(a_{ii}+b_{ii}\), of \(kA\) is \(ka_{ii}\), and transposing does not move diagonal entries.`)}`),

  section("📌 Explore", S`<p>Select the upper triangular matrix and compare it with its transpose: the zeros move from below the diagonal to above it. Try the other matrices too.</p>`),
  widget("laTranspose", { init: { set: "upper" } }),

  section("📌 Common mistakes", watchOut([
    "Upper triangular means zeros BELOW the diagonal (the nonzero part is upper).",
    "Diagonal entries may be zero in any of these shapes.",
    "Triangular and diagonal shapes are defined for square matrices only.",
    "The transpose of an upper triangular matrix is lower triangular, not upper.",
    "The trace adds only the diagonal — and only for square matrices.",
  ])),

  examples([
    ["Classifying shapes", S`Classify \(P=${M([[2, 0, 0], [5, 1, 0], [0, -3, 4]])}\), \(Q=${M([[0, 7], [0, 3]])}\), \(R=${M([[6, 0], [0, 0]])}\), \(T=${M([[1, 2], [3, 4]])}\).`,
      [S`\(P\): zeros above the diagonal (\(p_{12}=p_{13}=p_{23}=0\)) — lower triangular.`, S`\(Q\): the only entry below the diagonal, \(q_{21}\), is 0 — upper triangular (diagonal entries may be 0).`, S`\(R\): zero off the diagonal — diagonal (so both upper and lower). \(T\): \(t_{12}\ne0\) and \(t_{21}\ne0\) — neither.`],
      S`\(P\) lower, \(Q\) upper, \(R\) diagonal, \(T\) neither`, patterns],
    ["Sums of upper triangular matrices", S`Compute \(A+2B\) for \(A=${M([[1, 4, -2], [0, 3, 5], [0, 0, -1]])}\), \(B=${M([[2, 0, 1], [0, -1, 3], [0, 0, 2]])}\) and explain its shape.`,
      [S`\(2B=${M([[4, 0, 2], [0, -2, 6], [0, 0, 4]])}\).`, S`\(A+2B=${M([["1+4", "4+0", "-2+2"], [0, "3-2", "5+6"], [0, 0, "-1+4"]])}=${M([[5, 4, 0], [0, 1, 11], [0, 0, 3]])}\).`, S`Below the diagonal both matrices have 0s, and \(0+2\cdot0=0\): upper triangular, as the theorem says.`],
      S`\(${M([[5, 4, 0], [0, 1, 11], [0, 0, 3]])}\), upper triangular`, upFig],
    ["Lower triangular and symmetric", S`For which \(a,b,c\) is \(${M([[3, "a", "b"], [2, 1, "c"], [0, 4, 5]])}\) lower triangular? Can it also be symmetric?`,
      [S`Lower triangular needs every entry above the diagonal to be 0: \(a=b=c=0\).`, S`Symmetric would also need \(a_{21}=a_{12}\), i.e. \(a=2\), contradicting \(a=0\) — impossible.`, S`A matrix that is lower triangular and symmetric is diagonal (its below-diagonal entries must mirror the zeros above), and this one has \(a_{21}=2\ne0\).`],
      S`\(a=b=c=0\); it cannot also be symmetric`],
    ["Using the trace", S`\(\operatorname{tr}A=5\) and \(\operatorname{tr}B=-2\) for \(3\times3\) matrices \(A,B\). Find \(\operatorname{tr}(2A-3B^T)\) and \(\operatorname{tr}(A+4I)\).`,
      [S`\(\operatorname{tr}(2A-3B^T)=2\operatorname{tr}A-3\operatorname{tr}B^T=2(5)-3(-2)=16\).`, S`\(\operatorname{tr}(A+4I)=\operatorname{tr}A+4\operatorname{tr}I_3=5+4(3)=17\).`],
      S`16 and 17`, traceFig],
    ["Reaching upper triangular form", S`Row reduce \(A=${M([[2, 1, 3], [4, 5, 7], [-2, 2, 1]])}\) to an upper triangular matrix using only replacement operations.`,
      steps([[2, 1, 3], [4, 5, 7], [-2, 2, 1]], [
        [S`Clear column 1 below the diagonal.`, ["R2-2R1", "R3+R1"]],
        [S`Clear column 2 below the diagonal.`, ["R3-R2"]],
      ], { bar: false, intro: "Start" }).steps.concat([S`All entries below the diagonal are 0: upper triangular, with diagonal \(2,3,3\).`]),
      S`\(${M([[2, 1, 3], [0, 3, 1], [0, 0, 3]])}\)`],
  ]),

  practice([
    q("upper?", S`Is \(${M([[4, -1, 2], [0, 0, 6], [0, 0, 3]])}\) upper triangular?`, choice(["yes", "no"], 0),
      "Look below the diagonal.", [S`All three entries below the diagonal are 0.`], "yes"),
    q("trace", S`Find \(\operatorname{tr}${M([[7, 2, 0], [1, -4, 5], [3, 3, 2]])}\).`, num(5),
      "Add the diagonal.", [S`\(7-4+2\).`], S`\(5\)`),
    q("transpose shape", S`The transpose of a lower triangular matrix is:`, choice(["upper triangular", "lower triangular", "diagonal", "symmetric"], 0),
      "Zeros above become zeros below.", [S`\((A^T)_{ij}=a_{ji}\).`], "upper triangular"),
    q("trace I", S`What is \(\operatorname{tr}(I_6)\)?`, num(6),
      "Six 1s on the diagonal.", [S`\(1+\dots+1\).`], S`\(6\)`),
    q("count zeros", S`How many entries of a \(4\times4\) upper triangular matrix must be 0?`, num(6),
      "Entries below the diagonal.", [S`\(3+2+1\).`], S`\(6\)`),
  ]),

  ...hard([
    ["Upper triangular and symmetric", S`Prove that a matrix which is both upper triangular and symmetric is diagonal.`,
      [S`Let \(i\ne j\). If \(i\gt j\), \(a_{ij}=0\) (upper triangular).`, S`If \(i\lt j\), symmetry gives \(a_{ij}=a_{ji}\), and \(a_{ji}=0\) because \(j\gt i\).`, S`So every off-diagonal entry is 0.`],
      S`the matrix is diagonal`, patterns],
    ["The trace of a skew-symmetric matrix", S`Prove that \(\operatorname{tr}A=0\) for every skew-symmetric matrix, and that \(\operatorname{tr}(A-A^T)=0\) for every square matrix.`,
      [S`Skew-symmetric: \(a_{ii}=-a_{ii}\), so each \(a_{ii}=0\) and the trace is 0.`, S`\(A-A^T\) is skew-symmetric (\((A-A^T)^T=A^T-A\)), so its trace is 0. Or directly: \(\operatorname{tr}A-\operatorname{tr}A^T=0\).`],
      S`both traces are 0`],
  ], [
    q("hard", S`\(A\) is \(3\times3\) upper triangular and \(B=A^T\). How many entries of \(A+B\) are forced to equal \(2a_{ii}\) for some \(i\)?`, num(3),
      "The diagonal.", [S`Only diagonal entries combine \(a_{ii}+a_{ii}\); off-diagonal ones combine an entry with 0.`], S`\(3\)`),
    q("hard", S`\(\operatorname{tr}A=4\), \(\operatorname{tr}B=1\) (both \(2\times2\)). Find \(\operatorname{tr}(3A^T-2B+I)\).`, num(12),
      "Linearity.", [S`\(3(4)-2(1)+2\).`], S`\(12\)`),
    q("hard", S`For which \(k\) is \(${M([[1, "k^2-4"], ["k-2", 3]])}\) diagonal?`, num(2),
      "Both off-diagonal entries 0.", [S`\(k-2=0\) and \(k^2-4=0\): \(k=2\).`], S`\(2\)`),
  ]),

  wrapUp({
    qas: [
      ["What is a diagonal matrix?", "A square matrix whose off-diagonal entries are all 0; kI is a scalar matrix."],
      ["What is an upper triangular matrix?", "aᵢⱼ = 0 for i > j: everything below the main diagonal is 0."],
      ["Which operations keep triangular shape?", "Sums and scalar multiples; the transpose switches upper and lower."],
      ["How does row reduction relate?", "Elimination below the diagonal produces an upper triangular matrix."],
      ["What is the trace?", "The sum of the diagonal entries; it is linear and unchanged by transposing."],
    ],
    summary: [
      "Diagonal: zero off the diagonal; scalar: kI.",
      "Upper: zeros below; lower: zeros above; both ⇔ diagonal.",
      "Sums/scalars keep the shape; Aᵀ swaps upper and lower.",
      "Row reduction gives upper triangular form.",
      "tr A = Σ aᵢᵢ; tr(A + B) = tr A + tr B, tr(kA) = k tr A, tr Aᵀ = tr A.",
    ],
    next: "3.4 multiplies a matrix by a vector — the operation behind every linear system.",
  }),
];
