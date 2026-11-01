// LINALG1 3.2 — The Transpose and Symmetric Matrices: Aᵀ (rows become columns), its properties ((Aᵀ)ᵀ = A,
// (A + B)ᵀ = Aᵀ + Bᵀ, (kA)ᵀ = kAᵀ), symmetric matrices (Aᵀ = A, necessarily square), skew-symmetric matrices, and
// writing any square matrix as symmetric + skew-symmetric.
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, q, num, choice, hard, definition, theorem, am, sfig } from "./lib.mjs";
import { matPic, rowPic, transPic } from "./ws/fig3.mjs";

export const TITLE = "3.2 The Transpose and Symmetric Matrices";
export const ID = "11a10001-0001-4001-8001-000000000302";

const S = String.raw;
const M = (m) => am(m, false);
const tFig = sfig(transPic([[2, -1, 4], [0, 3, 5]], 0, 2), "the (1, 3)-entry of A becomes the (3, 1)-entry of Aᵀ");
const symFig = sfig(matPic([[4, -2, 1], [-2, 0, 6], [1, 6, 3]], { cells: [[0, 1], [1, 0], [1, 2, "#bbf7d0"], [2, 1, "#bbf7d0"]], label: "symmetric: aᵢⱼ = aⱼᵢ" }), "entries mirror across the main diagonal");
const decFig = sfig(rowPic([[[[1, 4], [0, 3]], { label: "A" }], "=", [[[1, 2], [2, 3]], { label: "symmetric" }], "+", [[[0, 2], [-2, 0]], { label: "skew-symmetric" }]]), "every square matrix is symmetric + skew-symmetric");

export const blocks = () => [
  intro({
    icon: "🔁",
    title: "The Transpose and Symmetric Matrices",
    overview: S`Turning the rows of a matrix into columns gives its <strong>transpose</strong>. The transpose appears everywhere in linear algebra — the row space of \(A\) is the column space of \(A^T\), dot products can be written with transposes, and least-squares problems are built from \(A^TA\). Matrices that equal their own transpose, the <strong>symmetric</strong> matrices, are especially important. This lesson defines the transpose, proves its basic properties, and studies symmetric and skew-symmetric matrices.`,
    goals: [
      "compute the transpose of a matrix and give its size;",
      "use \\((A^T)^T=A\\), \\((A+B)^T=A^T+B^T\\) and \\((kA)^T=kA^T\\);",
      "decide whether a matrix is symmetric or skew-symmetric;",
      "prove that combinations of symmetric matrices are symmetric;",
      "write a square matrix as a symmetric plus a skew-symmetric matrix.",
    ],
    outcomes: "matrix algebra: the transpose, symmetric and skew-symmetric matrices",
    prior: [
      [S`What is \(a_{31}\) in a matrix?`, S`The entry in row 3, column 1 (3.1).`],
      [S`Compute \(2${M([[1, 0], [3, -1]])}-${M([[2, 1], [0, 4]])}\).`, S`\(${M([[0, -1], [6, -6]])}\).`],
      [S`What is the main diagonal of a square matrix?`, S`The entries \(a_{11},a_{22},\dots,a_{nn}\).`],
    ],
    words: [
      ["Transpose \\(A^T\\)", "\\((A^T)_{ij}=a_{ji}\\): rows become columns", "a \\(2\\times3\\) becomes \\(3\\times2\\)"],
      ["Symmetric", "\\(A^T=A\\)", "\\(\\begin{bmatrix}1&5\\\\5&2\\end{bmatrix}\\)"],
      ["Skew-symmetric", "\\(A^T=-A\\)", "\\(\\begin{bmatrix}0&3\\\\-3&0\\end{bmatrix}\\)"],
      ["Main diagonal", "the entries \\(a_{ii}\\)", "unchanged by transposing"],
      ["Square", "as many rows as columns", "required for symmetry"],
    ],
  }),

  section("📌 The transpose", S`
  ${definition("transpose", S`The transpose of an \(m\times n\) matrix \(A\) is the \(n\times m\) matrix \(A^T\) with \((A^T)_{ij}=a_{ji}\). Row \(i\) of \(A\) is column \(i\) of \(A^T\), and column \(j\) of \(A\) is row \(j\) of \(A^T\).`)}
  ${tFig}
  ${theorem("properties of the transpose", S`For matrices \(A,B\) of the same size and a scalar \(k\): (1) \(A^T\) is \(n\times m\); (2) \((A^T)^T=A\); (3) \((A+B)^T=A^T+B^T\); (4) \((kA)^T=kA^T\).`, S`Compare entries. (2): \(((A^T)^T)_{ij}=(A^T)_{ji}=a_{ij}\). (3): \(((A+B)^T)_{ij}=(A+B)_{ji}=a_{ji}+b_{ji}=(A^T)_{ij}+(B^T)_{ij}\). (4): \(((kA)^T)_{ij}=ka_{ji}=k(A^T)_{ij}\).`)}
  <p>A column vector \(\vec x\) is an \(n\times1\) matrix, and \(\vec x^T\) is the same numbers written as a \(1\times n\) row.</p>`),

  section("📌 Symmetric matrices", S`
  ${definition("symmetric", S`A matrix \(A\) is <strong>symmetric</strong> if \(A^T=A\), i.e. \(a_{ij}=a_{ji}\) for all \(i,j\).`)}
  <p>If \(A\) is \(m\times n\), then \(A^T\) is \(n\times m\), so \(A^T=A\) forces \(m=n\): <strong>every symmetric matrix is square</strong>. The converse fails — most square matrices are not symmetric. In a symmetric matrix, the entries are mirror images across the main diagonal; the diagonal itself is free.</p>
  ${symFig}
  ${theorem("combinations stay symmetric", S`If \(A\) and \(B\) are symmetric (same size) and \(k,l\) are scalars, then \(kA+lB\) is symmetric. Also, for every square \(A\), \(A+A^T\) is symmetric.`, S`\((kA+lB)^T=kA^T+lB^T=kA+lB\). And \((A+A^T)^T=A^T+(A^T)^T=A^T+A\).`)}`),

  section("📌 Skew-symmetric matrices", S`
  ${definition("skew-symmetric", S`A square matrix is <strong>skew-symmetric</strong> if \(A^T=-A\), i.e. \(a_{ji}=-a_{ij}\). Taking \(i=j\) gives \(a_{ii}=-a_{ii}\), so every diagonal entry is 0.`)}
  ${keyIdea(S`Every square matrix splits uniquely as symmetric + skew-symmetric: \[A=\tfrac12(A+A^T)+\tfrac12(A-A^T).\] The first part is symmetric, the second skew-symmetric.`)}
  ${decFig}`),

  section("📌 Explore", S`<p>Choose a matrix and an entry: the highlighted entry of \(A\) reappears in the mirrored position of \(A^T\). The readout tests for symmetry and for triangular shape.</p>`),
  widget("laTranspose", { init: { set: "sym" } }),

  section("📌 Common mistakes", watchOut([
    "The transpose of an m × n matrix is n × m — the size changes unless A is square.",
    "(Aᵀ)ᵢⱼ = aⱼᵢ: swap the indices, not the signs.",
    "Diagonal entries do not move when transposing.",
    "A symmetric matrix must be square, but a square matrix need not be symmetric.",
    "Skew-symmetric matrices have zeros on the diagonal.",
  ])),

  examples([
    ["Computing a transpose", S`Find \(A^T\) for \(A=${M([[2, -1, 4], [0, 3, 5]])}\) and give its size.`,
      [S`Row 1 of \(A\), \((2,-1,4)\), becomes column 1; row 2, \((0,3,5)\), becomes column 2.`, S`\(A^T=${M([[2, 0], [-1, 3], [4, 5]])}\), a \(3\times2\) matrix. Check: \((A^T)_{31}=4=a_{13}\) ✓.`],
      S`\(A^T=${M([[2, 0], [-1, 3], [4, 5]])}\)`, tFig],
    ["Using the properties", S`For \(A=${M([[1, 3], [0, -2]])}\) and \(B=${M([[4, 1], [2, 0]])}\), compute \((2A-B)^T\) in two ways.`,
      [S`Directly: \(2A-B=${M([["2-4", "6-1"], ["0-2", "-4-0"]])}=${M([[-2, 5], [-2, -4]])}\), so \((2A-B)^T=${M([[-2, -2], [5, -4]])}\).`, S`By the properties: \(2A^T-B^T=2${M([[1, 0], [3, -2]])}-${M([[4, 2], [1, 0]])}=${M([["2-4", "0-2"], ["6-1", "-4-0"]])}=${M([[-2, -2], [5, -4]])}\) ✓.`],
      S`\(${M([[-2, -2], [5, -4]])}\)`],
    ["Solving with transposes", S`Solve \((X^T+A)^T=B\) for \(X\), where \(A=${M([[1, 2], [3, 4]])}\), \(B=${M([[0, 5], [1, 2]])}\).`,
      [S`\((X^T+A)^T=(X^T)^T+A^T=X+A^T\). So \(X+A^T=B\) and \(X=B-A^T\).`, S`\(A^T=${M([[1, 3], [2, 4]])}\), so \(X=${M([["0-1", "5-3"], ["1-2", "2-4"]])}=${M([[-1, 2], [-1, -2]])}\).`, S`Check: \(X^T+A=${M([[-1, -1], [2, -2]])}+${M([[1, 2], [3, 4]])}=${M([[0, 1], [5, 2]])}\), whose transpose is \(B\) ✓.`],
      S`\(X=${M([[-1, 2], [-1, -2]])}\)`],
    ["Making a matrix symmetric", S`Find \(a,b\) so that \(${M([[1, "a+1", 3], [4, 2, "b"], [3, 5, 0]])}\) is symmetric.`,
      [S`Symmetric means \(a_{ij}=a_{ji}\). Compare mirrored pairs: \(a_{12}=a_{21}\): \(a+1=4\), so \(a=3\).`, S`\(a_{23}=a_{32}\): \(b=5\). And \(a_{13}=3=a_{31}\) ✓ already.`],
      S`\(a=3\), \(b=5\)`, symFig],
    ["Symmetric plus skew-symmetric", S`Write \(A=${M([[1, 4], [0, 3]])}\) as a symmetric matrix plus a skew-symmetric matrix.`,
      [S`\(A^T=${M([[1, 0], [4, 3]])}\).`, S`Symmetric part \(\tfrac12(A+A^T)=\tfrac12${M([[2, 4], [4, 6]])}=${M([[1, 2], [2, 3]])}\).`, S`Skew part \(\tfrac12(A-A^T)=\tfrac12${M([[0, 4], [-4, 0]])}=${M([[0, 2], [-2, 0]])}\). Sum: \(${M([[1, 4], [0, 3]])}=A\) ✓.`],
      S`\(A=${M([[1, 2], [2, 3]])}+${M([[0, 2], [-2, 0]])}\)`, decFig],
  ]),

  practice([
    q("size", S`\(A\) is \(4\times7\). How many rows does \(A^T\) have?`, num(7),
      "Rows and columns swap.", [S`\(A^T\) is \(7\times4\).`], S`\(7\)`),
    q("entry", S`For \(A=${M([[5, -2, 8], [1, 0, 6]])}\), find \((A^T)_{31}\).`, num(8),
      "(Aᵀ)₃₁ = a₁₃.", [S`Row 1, column 3 of \(A\).`], S`\(8\)`),
    q("symmetric?", S`Is \(${M([[3, 7], [7, -1]])}\) symmetric?`, choice(["yes", "no"], 0),
      "Compare a₁₂ and a₂₁.", [S`Both are 7.`], "yes"),
    q("double", S`\((A^T)^T\) equals:`, choice([S`\(A\)`, S`\(A^T\)`, S`\(-A\)`, S`\(I\)`], 0),
      "Transpose twice.", [S`Swapping rows and columns twice returns the original.`], S`\(A\)`),
    q("skew", S`A skew-symmetric matrix has \(a_{22}=?\)`, num(0),
      "a₂₂ = −a₂₂.", [S`So \(2a_{22}=0\).`], S`\(0\)`),
  ]),

  ...hard([
    ["Skew-symmetric combinations", S`Prove: if \(A\) and \(B\) are skew-symmetric, so is \(2A-3B\); and if \(A\) is both symmetric and skew-symmetric, then \(A=0\).`,
      [S`\((2A-3B)^T=2A^T-3B^T=2(-A)-3(-B)=-(2A-3B)\).`, S`If \(A^T=A\) and \(A^T=-A\), then \(A=-A\), so \(2A=0\) and \(A=0\).`],
      S`skew-symmetric matrices are closed under combinations, and only 0 is both`],
    ["Uniqueness of the decomposition", S`Prove that if \(A=S+K=S'+K'\) with \(S,S'\) symmetric and \(K,K'\) skew-symmetric, then \(S=S'\) and \(K=K'\).`,
      [S`\(S-S'=K'-K\). The left side is symmetric and the right side is skew-symmetric (closure).`, S`So \(S-S'\) is both symmetric and skew-symmetric, hence 0 (Challenge 1). Then \(K'-K=0\) too.`],
      S`the symmetric/skew-symmetric decomposition is unique`, decFig],
  ], [
    q("hard", S`Find \(x\) so that \(${M([[2, "x^2"], ["3x+4", 1]])}\) is symmetric with \(x\gt0\).`, num(4),
      "x² = 3x + 4.", [S`\(x^2-3x-4=(x-4)(x+1)=0\); positive root \(x=4\).`], S`\(4\)`),
    q("hard", S`\(A\) is \(3\times3\) symmetric with \(a_{12}=5\), \(a_{13}=-1\), \(a_{23}=2\). Find \(a_{31}+a_{32}\).`, num(1),
      "aⱼᵢ = aᵢⱼ.", [S`\(a_{31}=a_{13}=-1\), \(a_{32}=a_{23}=2\).`], S`\(1\)`),
    q("hard", S`For \(A=${M([[3, 1], [5, 2]])}\), find the \((1,2)\)-entry of the skew-symmetric part \(\tfrac12(A-A^T)\).`, num(-2),
      "½(a₁₂ − a₂₁).", [S`\(\tfrac12(1-5)\).`], S`\(-2\)`),
  ]),

  wrapUp({
    qas: [
      ["What is the transpose?", "The matrix whose rows are the columns of A: (Aᵀ)ᵢⱼ = aⱼᵢ, of size n × m."],
      ["Which rules does it obey?", "(Aᵀ)ᵀ = A, (A + B)ᵀ = Aᵀ + Bᵀ, (kA)ᵀ = kAᵀ."],
      ["What is a symmetric matrix?", "A square matrix with Aᵀ = A: entries mirror across the diagonal."],
      ["What is a skew-symmetric matrix?", "Aᵀ = −A; its diagonal entries are 0."],
      ["How do I split a square matrix?", "A = ½(A + Aᵀ) + ½(A − Aᵀ): symmetric plus skew-symmetric, uniquely."],
    ],
    summary: [
      "(Aᵀ)ᵢⱼ = aⱼᵢ; size n × m.",
      "(Aᵀ)ᵀ = A, (A+B)ᵀ = Aᵀ + Bᵀ, (kA)ᵀ = kAᵀ.",
      "Symmetric: Aᵀ = A (square, mirrored entries).",
      "Skew-symmetric: Aᵀ = −A (zero diagonal).",
      "A = ½(A + Aᵀ) + ½(A − Aᵀ).",
    ],
    next: "3.3 looks at other special square matrices — diagonal, triangular and scalar matrices — defined by where their zeros are.",
  }),
];
