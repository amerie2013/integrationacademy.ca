// LINALG1 Worksheet 3.3 — Triangular, Diagonal and Other Special Matrices
// Self-contained: complete notes, 9 worked examples with figures, 13 problems with an answer key.
import { svgT } from "./figT.mjs";
import { S, def, thm } from "./wkit.mjs";
import { matPic, rowPic, patternPic } from "./fig3.mjs";
import { am, steps } from "../bank/la.mjs";

const P = (svg, w = 4.4) => svgT(svg, w);
const M = (m) => am(m, false);

const NOTES = [
  { h: "1. Diagonal and scalar matrices",
    lead: S`${def("diagonal, scalar", S`A square matrix is \textbf{diagonal} if \(a_{ij}=0\) whenever \(i\ne j\); we write \(\operatorname{diag}(d_1,\dots,d_n)\). If all \(d_i\) equal \(k\), it is the \textbf{scalar matrix} \(kI_n\).`)}
Diagonal entries themselves may be 0; only the off-diagonal entries are restricted. \(0\) and \(I_n\) are diagonal.`,
    fig: P(patternPic("diag", 4), 3.2), w: 0.6 },
  { h: "2. Upper and lower triangular matrices",
    lead: S`${def("triangular", S`An \(n\times n\) matrix is \textbf{upper triangular} if \(a_{ij}=0\) whenever \(i\gt j\) (zeros below the diagonal) and \textbf{lower triangular} if \(a_{ij}=0\) whenever \(i\lt j\) (zeros above).`)}
An \(n\times n\) triangular matrix has at least \(\tfrac{n(n-1)}2\) forced zeros.`,
    fig: P(rowPic([[[["*", "*", "*"], [0, "*", "*"], [0, 0, "*"]], { label: "upper" }], " ", [[["*", 0, 0], ["*", "*", 0], ["*", "*", "*"]], { label: "lower" }]]), 4.6), w: 0.55,
    body: S`A matrix is diagonal exactly when it is both upper and lower triangular.` },
  { h: "3. What operations do to triangular matrices",
    lead: thm("closure", S`If \(A,B\) are upper triangular and \(k\) is a scalar, then \(A+B\) and \(kA\) are upper triangular, and \(A^T\) is lower triangular.`) + S`\pf{For \(i\gt j\): \((A+B)_{ij}=0+0\), \((kA)_{ij}=k\cdot0\). And \((A^T)_{ij}=a_{ji}=0\) when \(j\gt i\).}`,
    fig: P(patternPic("upper", 4), 3.2), w: 0.6,
    body: S`(In Worksheet 3.7 we will see that \(AB\) is upper triangular too.) A matrix that is triangular and symmetric must be diagonal.` },
  { h: "4. Triangular forms from row reduction",
    lead: S`Gaussian elimination clears the entries below each pivot. For a square matrix this produces an \textbf{upper triangular} matrix (an echelon form). A system whose coefficient matrix is upper triangular with nonzero diagonal is solved by back substitution, bottom equation first.`,
    fig: P(rowPic([[[[2, 1, -1], [4, 3, 1], [-2, 1, 5]], { label: "A" }], "→", [[[2, 1, -1], [0, 1, 3], [0, 0, -2]], { label: "upper triangular" }]]), 5), w: 0.5 },
  { h: "5. The trace",
    lead: S`${def("trace", S`\(\operatorname{tr}A=a_{11}+a_{22}+\dots+a_{nn}\) for an \(n\times n\) matrix.`)}
${thm("linearity", S`\(\operatorname{tr}(A+B)=\operatorname{tr}A+\operatorname{tr}B\), \(\operatorname{tr}(kA)=k\operatorname{tr}A\), \(\operatorname{tr}A^T=\operatorname{tr}A\), \(\operatorname{tr}I_n=n\).`)}`,
    fig: P(matPic([[4, 1, 0], [2, -3, 5], [7, 6, 2]], { cells: [[0, 0], [1, 1], [2, 2]], label: "tr = 4 − 3 + 2 = 3" }), 3.4), w: 0.6,
    body: S`\pf{The diagonal of \(A+B\) is \(a_{ii}+b_{ii}\); of \(kA\), \(ka_{ii}\); transposing does not move diagonal entries.}` },
];

const EXAMPLES = [
  { title: "Classifying shapes", q: S`Classify \(A=${M([[5, 0, 0], [0, 0, 0], [0, 0, -2]])}\), \(B=${M([[1, 4], [0, 0]])}\), \(C=${M([[3, 0, 0], [1, 2, 0], [0, 5, 6]])}\), \(D=${M([[0, 1], [1, 0]])}\).`,
    fig: P(patternPic("lower", 3), 2.6),
    steps: [S`\(A\): all off-diagonal entries 0 --- diagonal (\(\operatorname{diag}(5,0,-2)\)); hence also upper and lower triangular.`, S`\(B\): the entry below the diagonal is 0 --- upper triangular.`, S`\(C\): the entries above the diagonal are 0 --- lower triangular (pattern in the figure). \(D\): nonzero entries both above and below --- neither.`],
    ans: S`\(A\) diagonal, \(B\) upper, \(C\) lower, \(D\) neither` },
  { title: "Combining triangular matrices", q: S`Compute \(2A-B\) for upper triangular \(A=${M([[1, 3, -1], [0, 2, 4], [0, 0, 5]])}\), \(B=${M([[3, 0, 2], [0, -1, 1], [0, 0, 2]])}\).`,
    fig: P(patternPic("upper", 3), 2.6),
    steps: [S`\(2A=${M([[2, 6, -2], [0, 4, 8], [0, 0, 10]])}\).`, S`\(2A-B=${M([["2-3", "6-0", "-2-2"], [0, "4+1", "8-1"], [0, 0, "10-2"]])}=${M([[-1, 6, -4], [0, 5, 7], [0, 0, 8]])}\).`, S`Still upper triangular, as the closure theorem says.`],
    ans: S`\(${M([[-1, 6, -4], [0, 5, 7], [0, 0, 8]])}\)` },
  { title: "The transpose of a triangular matrix", q: S`Find \(A^T\) for \(A=${M([[2, -1, 4], [0, 3, 6], [0, 0, 1]])}\) and describe its shape.`,
    fig: P(rowPic([[[[2, -1, 4], [0, 3, 6], [0, 0, 1]], { label: "upper" }], "→", [[[2, 0, 0], [-1, 3, 0], [4, 6, 1]], { label: "lower" }]]), 4.6),
    steps: [S`Rows become columns: \(A^T=${M([[2, 0, 0], [-1, 3, 0], [4, 6, 1]])}\).`, S`The zeros that were below the diagonal are now above it: \(A^T\) is lower triangular. The diagonal \(2,3,1\) is unchanged.`],
    ans: S`\(${M([[2, 0, 0], [-1, 3, 0], [4, 6, 1]])}\), lower triangular` },
  { title: "Reaching upper triangular form", q: S`Use row replacements to reduce \(A=${M([[1, 2, -1], [3, 4, 2], [-2, 0, 5]])}\) to upper triangular form.`,
    fig: P(patternPic("upper", 3), 2.6),
    steps: steps([[1, 2, -1], [3, 4, 2], [-2, 0, 5]], [
      [S`Clear column 1 below the diagonal.`, ["R2-3R1", "R3+2R1"]],
      [S`Clear column 2 below the diagonal.`, ["R3+2R2"]],
    ], { bar: false, intro: "Start" }).steps.concat([S`Every entry below the diagonal is now 0: upper triangular with diagonal \(1,-2,13\).`]),
    ans: S`\(${M([[1, 2, -1], [0, -2, 5], [0, 0, 13]])}\)` },
  { title: "A triangular system", q: S`Solve the system whose augmented matrix is \(${am([[2, -1, 3, 9], [0, 4, -2, 2], [0, 0, 3, 6]])}\).`,
    fig: P(matPic([[2, -1, 3], [0, 4, -2], [0, 0, 3]], { cells: [[0, 0], [1, 1], [2, 2]], label: "nonzero diagonal" }), 3.2),
    steps: [...steps([[2, -1, 3, 9], [0, 4, -2, 2], [0, 0, 3, 6]], [
      [S`Upper triangular with nonzero diagonal: finish from the bottom up. Make the last pivot 1 (\(x_3=2\)).`, ["R3*1/3"]],
      [S`Clear column 3 above it.`, ["R2+2R3", "R1-3R3"]],
      [S`Make the second pivot 1 (\(x_2=\tfrac32\)).`, ["R2*1/4"]],
      [S`Clear column 2 above it.`, ["R1+R2"]],
      [S`Make the first pivot 1.`, ["R1*1/2"]],
    ], { intro: "Start from the augmented matrix" }).steps,
      S`Check row 2: \(4\cdot\tfrac32-2\cdot2=6-4=2\) ✓.`],
    ans: S`\((\tfrac94,\tfrac32,2)\)` },
  { title: "Computing traces", q: S`For \(A=${M([[3, 1, 0], [2, -4, 5], [6, 0, 7]])}\) and \(B=${M([[1, 0, 2], [0, 2, 0], [4, 1, -3]])}\), find \(\operatorname{tr}A\), \(\operatorname{tr}B\) and \(\operatorname{tr}(2A-B^T)\).`,
    fig: P(matPic([[3, 1, 0], [2, -4, 5], [6, 0, 7]], { cells: [[0, 0], [1, 1], [2, 2]], label: "A" }), 3.2),
    steps: [S`\(\operatorname{tr}A=3-4+7=6\); \(\operatorname{tr}B=1+2-3=0\).`, S`\(\operatorname{tr}(2A-B^T)=2\operatorname{tr}A-\operatorname{tr}B^T=2(6)-0=12\).`, S`Direct check: the diagonal of \(2A-B^T\) is \(6-1,\ -8-2,\ 14+3\), summing to \(5-10+17=12\) ✓.`],
    ans: S`\(6\), \(0\), \(12\)` },
  { title: "Triangular and symmetric", q: S`Find all \(a,b,c\) making \(${M([[1, "a", 0], [3, 2, "b"], ["c", 0, 4]])}\) symmetric, and decide whether it can then be triangular.`,
    fig: P(matPic([[1, "a", 0], [3, 2, "b"], ["c", 0, 4]], { cells: [[0, 1], [1, 0]] }), 3.2),
    steps: [S`Symmetric: \(a=3\), \(b=0\), \(c=0\).`, S`Then the matrix is \(${M([[1, 3, 0], [3, 2, 0], [0, 0, 4]])}\): nonzero entries \(a_{12}=a_{21}=3\) on both sides of the diagonal, so it is not triangular. (A symmetric triangular matrix must be diagonal.)`],
    ans: S`\(a=3\), \(b=c=0\); not triangular` },
  { title: "Counting forced zeros", q: S`How many entries of a \(5\times5\) upper triangular matrix must be 0? Of a \(5\times5\) diagonal matrix?`,
    fig: P(patternPic("upper", 5), 3),
    steps: [S`Below the diagonal: row 2 has 1 entry, row 3 has 2, row 4 has 3, row 5 has 4: \(1+2+3+4=10\).`, S`Diagonal: all 25 entries except the 5 on the diagonal: 20.`],
    ans: S`10 and 20` },
  { title: "A scalar matrix commutes", q: S`Show that \((kI)A=A(kI)=kA\) for a \(2\times2\) matrix \(A=${M([["a", "b"], ["c", "d"]])}\).`,
    steps: [S`\(kI=${M([["k", 0], [0, "k"]])}\). Row 1 of \(kI\) times the columns of \(A\): \(ka\), \(kb\); row 2: \(kc\), \(kd\). So \((kI)A=kA\).`, S`Similarly \(A(kI)\): row 1 of \(A\), \((a,b)\), times the columns \((k,0)\), \((0,k)\): \(ka\), \(kb\); row 2 gives \(kc\), \(kd\).`, S`So scalar matrices behave exactly like the number \(k\). (Matrix products are treated in Worksheet 3.6.)`],
    ans: S`\((kI)A=A(kI)=kA\)` },
];

const PROBLEMS = [
  { level: 1, q: S`Is \(${M([[0, 0], [0, 7]])}\) diagonal? Upper triangular? Lower triangular?`, ans: S`yes to all three` },
  { level: 1, q: S`Find \(\operatorname{tr}${M([[2, 9, 1], [0, -5, 4], [3, 3, 6]])}\).`, ans: S`\(3\)` },
  { level: 1, q: S`Write the \(3\times3\) scalar matrix with trace 12.`, ans: S`\(4I_3\)` },
  { level: 2, q: S`Compute \(A+3B\) for \(A=${M([[1, 0], [2, 5]])}\), \(B=${M([[2, 0], [-1, 1]])}\), and state its shape.`, ans: S`\(${M([[7, 0], [-1, 8]])}\), lower triangular`, fig: P(patternPic("lower", 2), 1.8) },
  { level: 2, q: S`Reduce \(${M([[2, 4, -2], [1, 3, 1], [3, 7, 2]])}\) to upper triangular form with row replacements.`, ans: S`e.g. \(${M([[2, 4, -2], [0, 1, 2], [0, 0, 3]])}\)` },
  { level: 2, q: S`Solve the triangular system \(x_1+2x_2-x_3=4\), \(3x_2+x_3=7\), \(2x_3=2\).`, ans: S`\((1,2,1)\)`, fig: P(matPic([[1, 2, -1], [0, 3, 1], [0, 0, 2]], { cells: [[0, 0], [1, 1], [2, 2]] }), 3) },
  { level: 2, q: S`\(\operatorname{tr}A=-2\), \(\operatorname{tr}B=5\) (both \(4\times4\)). Find \(\operatorname{tr}(3A^T+B-I)\).`, ans: S`\(-6+5-4=-5\)` },
  { level: 2, q: S`For which \(k\) is \(${M([[1, "k^2-1", 0], [0, 2, "k+1"], [0, 0, 3]])}\) diagonal?`, ans: S`\(k=-1\)`, fig: P(patternPic("diag", 3), 2.6) },
  { level: 3, space: 5, q: S`Prove that the transpose of a lower triangular matrix is upper triangular.`, ans: S`\((A^T)_{ij}=a_{ji}=0\) whenever \(j\lt i\)` },
  { level: 3, space: 5, q: S`Prove that a matrix that is both upper triangular and skew-symmetric is the zero matrix.`, ans: S`entries below vanish; skew-symmetry forces the mirrored ones above to vanish; the diagonal is 0` },
  { level: 3, space: 5, q: S`Prove that \(\operatorname{tr}(kA+lB)=k\operatorname{tr}A+l\operatorname{tr}B\).`, ans: S`add the diagonal entries \(ka_{ii}+lb_{ii}\)`, fig: P(matPic([["a₁₁", "·"], ["·", "a₂₂"]], { cells: [[0, 0], [1, 1]] }), 2) },
  { level: 3, space: 5, q: S`Show that every square matrix is the sum of a lower triangular and an upper triangular matrix. Is this splitting unique?`, ans: S`yes, e.g. put the diagonal in either part; not unique (the diagonal can be shared in any way)` },
  { level: 3, space: 5, q: S`An \(n\times n\) matrix has \(\operatorname{tr}A=0\) and is diagonal with entries \(1,2,\dots,n-1,x\). Find \(x\) in terms of \(n\).`, ans: S`\(x=-\tfrac{(n-1)n}{2}\)`, fig: P(patternPic("diag", 4), 2.6) },
];

export const WS = {
  code: "3.3",
  title: "Triangular, Diagonal and Other Special Matrices",
  bigideas: S`Square matrices are often special because of where their zeros sit. \textbf{Diagonal} matrices are zero off the main diagonal; \textbf{upper triangular} matrices are zero below it and \textbf{lower triangular} ones zero above it. Sums and scalar multiples keep these shapes; the transpose swaps upper and lower. Row reduction produces upper triangular matrices, which are solved by back substitution. The \textbf{trace}, the sum of the diagonal, is linear and unchanged by transposing.`,
  goals: ["Recognise diagonal, scalar, upper and lower triangular matrices.", "Show that sums, scalar multiples and transposes keep or swap these shapes.", "Reduce a square matrix to upper triangular form and solve triangular systems.", "Compute traces and use their linearity.", "Combine triangular shape with symmetry."],
  curriculum: "Matrix algebra — diagonal, triangular and scalar matrices; the trace",
  vocab: [["Diagonal", "zero off the main diagonal"], ["Scalar matrix", "\\(kI_n\\)"], ["Upper triangular", "\\(a_{ij}=0\\) for \\(i\\gt j\\)"], ["Lower triangular", "\\(a_{ij}=0\\) for \\(i\\lt j\\)"], ["Trace", "sum of the diagonal entries"]],
  hook: S`Which system is easier to solve, and why: one whose coefficient matrix has zeros below the diagonal, or one with no zeros at all?`,
  concepts: NOTES,
  summary: [
    S`Diagonal: \(a_{ij}=0\) for \(i\ne j\); scalar: \(kI\).`,
    S`Upper: zeros below; lower: zeros above; both \(\iff\) diagonal.`,
    S`Sums and scalar multiples keep the shape; \(A^T\) swaps upper/lower.`,
    S`Row reduction gives upper triangular form; back substitution solves it.`,
    S`\(\operatorname{tr}\) is linear, \(\operatorname{tr}A^T=\operatorname{tr}A\), \(\operatorname{tr}I_n=n\).`,
  ],
  tips: ["Upper = zeros below the diagonal.", "Diagonal entries may be 0.", "Only square matrices are triangular or have a trace.", "Transposing swaps upper and lower.", "Count forced zeros as 1 + 2 + … + (n − 1)."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
