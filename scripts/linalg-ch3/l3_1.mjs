// LINALG1 3.1 — Matrices, Addition and Scalar Multiplication: size and entries, equality, the zero and identity
// matrices, the sum and scalar multiple (entry by entry, same size only), linear combinations of matrices, and the
// algebraic properties that make matrices behave like vectors.
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, q, num, choice, hard, definition, theorem, am, sfig } from "./lib.mjs";
import { matPic, rowPic } from "./ws/fig3.mjs";

export const TITLE = "3.1 Matrices, Addition and Scalar Multiplication";
export const ID = "11a10001-0001-4001-8001-000000000301";

const S = String.raw;
const M = (m) => am(m, false);
const entryFig = sfig(matPic([[4, -1, 0, 7], [2, 5, -3, 1], [6, 0, 8, -2]], { cells: [[1, 2]], label: "a₂₃ = −3: row 2, column 3" }), "a 3 × 4 matrix: 3 rows, 4 columns");
const sumFig = sfig(rowPic([[[[1, -2], [3, 0]], { cells: [[0, 1]] }], "+", [[[4, 5], [-1, 2]], { cells: [[0, 1]] }], "=", [[[5, 3], [2, 2]], { cells: [[0, 1, "#bbf7d0"]] }]]), "matching entries are added: −2 + 5 = 3");
const idFig = sfig(rowPic([[[[0, 0, 0], [0, 0, 0]], { label: "0₂ₓ₃" }], " ", [[[1, 0, 0], [0, 1, 0], [0, 0, 1]], { cells: [[0, 0], [1, 1], [2, 2]], label: "I₃" }]]), "the 2 × 3 zero matrix and the 3 × 3 identity");

export const blocks = () => [
  intro({
    icon: "🔢",
    title: "Matrices, Addition and Scalar Multiplication",
    overview: S`Chapter 2 used matrices as bookkeeping for linear systems. From now on they are objects in their own right: we will add them, scale them, multiply them by vectors and by each other. This lesson sets up the language — size, entries, equality, the zero and identity matrices — and the two simplest operations, addition and scalar multiplication. Both work entry by entry, and they obey exactly the same rules as vector addition and scaling in \(\mathbb R^n\).`,
    goals: [
      "read the size of a matrix and name its entries \\(a_{ij}\\);",
      "decide when two matrices are equal, and solve for unknown entries;",
      "add, subtract and scale matrices, and form linear combinations \\(kA+lB\\);",
      "recognise the zero matrix and the identity matrix;",
      "state and use the algebraic properties of matrix addition and scalar multiplication.",
    ],
    outcomes: "matrix algebra: matrices, equality, addition and scalar multiplication",
    prior: [
      [S`How many rows and columns does the augmented matrix of 3 equations in 4 unknowns have?`, S`3 rows and 5 columns (2.2).`],
      [S`Compute \(2(1,-3)+3(0,2)\).`, S`\((2,-6)+(0,6)=(2,0)\).`],
      [S`Is \((1,2,3)=(1,2)\)?`, S`No: vectors of different sizes are never equal.`],
    ],
    words: [
      ["Matrix", "a rectangular array of numbers", "\\(\\begin{bmatrix}1&2\\\\3&4\\end{bmatrix}\\)"],
      ["Size \\(m\\times n\\)", "\\(m\\) rows, \\(n\\) columns", "\\(3\\times4\\)"],
      ["Entry \\(a_{ij}\\)", "the number in row \\(i\\), column \\(j\\)", "\\((A)_{23}\\)"],
      ["Zero matrix \\(0_{m\\times n}\\)", "every entry 0", "\\(A+0=A\\)"],
      ["Identity \\(I_n\\)", "square, 1s on the main diagonal, 0s elsewhere", "\\(I_2=\\begin{bmatrix}1&0\\\\0&1\\end{bmatrix}\\)"],
    ],
  }),

  section("📌 Matrices, entries and equality", S`
  ${definition("matrix", S`An \(m\times n\) <strong>matrix</strong> \(A\) is a rectangular array of numbers with \(m\) rows and \(n\) columns. The entry in row \(i\) and column \(j\) is written \(a_{ij}\) or \((A)_{ij}\), and we write \(A=[a_{ij}]\). If \(m=n\), \(A\) is <strong>square</strong>.`)}
  ${entryFig}
  ${definition("equality", S`Matrices \(A\) and \(B\) are <strong>equal</strong> if they have the same size and \(a_{ij}=b_{ij}\) for every \(i\) and \(j\).`)}
  <p>So a matrix equation between two \(m\times n\) matrices is really \(mn\) ordinary equations, one per entry.</p>`),

  section("📌 The zero matrix and the identity", S`
  ${definition("zero and identity", S`The \(m\times n\) <strong>zero matrix</strong> \(0_{m\times n}\) has every entry 0. The \(n\times n\) <strong>identity matrix</strong> \(I_n\) has \(1\)s on the main diagonal (\(a_{11},a_{22},\dots,a_{nn}\)) and \(0\)s everywhere else.`)}
  ${idFig}
  <p>The zero matrix plays the role of the number 0 for addition. The identity will play the role of the number 1 for matrix multiplication (3.6).</p>`),

  section("📌 Addition and scalar multiplication", S`
  ${definition("sum and scalar multiple", S`For \(m\times n\) matrices \(A,B\) and a scalar \(k\): \((A+B)_{ij}=a_{ij}+b_{ij}\) and \((kA)_{ij}=k\,a_{ij}\). We write \(-A=(-1)A\) and \(A-B=A+(-B)\).`)}
  ${sumFig}
  <p>Only matrices of the <strong>same size</strong> (compatible matrices) can be added. Combining the two operations gives <strong>linear combinations</strong> \(kA+lB\), computed entry by entry.</p>
  ${theorem("properties", S`For \(m\times n\) matrices \(A,B,C\) and scalars \(k,l\): (1) \(A+B\) is \(m\times n\); (2) \(A+B=B+A\); (3) \((A+B)+C=A+(B+C)\); (4) \(A+0=A\); (5) \(A+(-A)=0\); (6) \(kA\) is \(m\times n\); (7) \(k(A+B)=kA+kB\); (8) \((k+l)A=kA+lA\); (9) \(k(lA)=(kl)A\); (10) \(1A=A\).`, S`Each property is the corresponding property of real numbers applied in every entry. For example (7): \((k(A+B))_{ij}=k(a_{ij}+b_{ij})=ka_{ij}+kb_{ij}=(kA+kB)_{ij}\).`)}
  ${keyIdea(S`An \(m\times n\) matrix behaves like a vector with \(mn\) components: addition and scaling are exactly the vector operations of Chapter 1, just arranged in a rectangle.`)}`),

  section("📌 Explore", S`<p>Change \(k\) and \(l\) and pick an entry: each entry of \(kA+lB\) is \(k\) times the entry of \(A\) plus \(l\) times the entry of \(B\) in the same position.</p>`),
  widget("laMatOps", {}),

  section("📌 Common mistakes", watchOut([
    "aᵢⱼ is row i, column j — not column i, row j.",
    "Matrices of different sizes cannot be added, and are never equal.",
    "kA multiplies EVERY entry by k, not just one row.",
    "A − B subtracts entry by entry; it is not B − A.",
    "Iₙ is square; 'identity' for a non-square size does not exist.",
  ])),

  examples([
    ["Size and entries", S`For \(A=${M([[3, 0, -5, 2], [1, 7, 4, -6]])}\), give the size, \(a_{13}\), \(a_{24}\) and \(a_{21}\).`,
      [S`2 rows and 4 columns: \(A\) is \(2\times4\).`, S`\(a_{13}\) is row 1, column 3: \(-5\). \(a_{24}\) is row 2, column 4: \(-6\). \(a_{21}\) is row 2, column 1: \(1\).`],
      S`\(2\times4\); \(a_{13}=-5\), \(a_{24}=-6\), \(a_{21}=1\)`],
    ["Solving for unknown entries", S`Find \(x,y,z\) if \(${M([["x+y", 3], [2, "x-y"]])}=${M([[7, "z"], [2, 1]])}\).`,
      [S`Equal matrices have equal entries: \(x+y=7\), \(3=z\), \(2=2\), \(x-y=1\).`, S`Adding the first and last: \(2x=8\), so \(x=4\); then \(y=3\). And \(z=3\).`, S`Check: \(4+3=7\) ✓, \(4-3=1\) ✓.`],
      S`\(x=4\), \(y=3\), \(z=3\)`],
    ["A linear combination", S`Compute \(3A-2B\) for \(A=${M([[1, -2, 0], [4, 1, 3]])}\), \(B=${M([[2, 1, -1], [0, 5, 2]])}\).`,
      [S`\(3A=${M([[3, -6, 0], [12, 3, 9]])}\) and \(2B=${M([[4, 2, -2], [0, 10, 4]])}\).`, S`Subtract entry by entry: \(${M([["3-4", "-6-2", "0-(-2)"], ["12-0", "3-10", "9-4"]])}=${M([[-1, -8, 2], [12, -7, 5]])}\).`],
      S`\(${M([[-1, -8, 2], [12, -7, 5]])}\)`, sumFig],
    ["A matrix equation", S`Solve \(2X+A=B\) for \(X\), where \(A=${M([[1, 3], [-2, 0]])}\) and \(B=${M([[5, -1], [4, 6]])}\).`,
      [S`Use the properties like ordinary algebra: subtract \(A\) from both sides, \(2X=B-A\), then multiply by \(\tfrac12\): \(X=\tfrac12(B-A)\).`, S`\(B-A=${M([["5-1", "-1-3"], ["4+2", "6-0"]])}=${M([[4, -4], [6, 6]])}\).`, S`\(X=\tfrac12${M([[4, -4], [6, 6]])}=${M([[2, -2], [3, 3]])}\). Check: \(2X+A=${M([[4, -4], [6, 6]])}+${M([[1, 3], [-2, 0]])}=${M([[5, -1], [4, 6]])}=B\) ✓.`],
      S`\(X=${M([[2, -2], [3, 3]])}\)`],
    ["Writing a matrix as a combination", S`Find \(a,b\) with \(a${M([[1, 0], [1, 2]])}+b${M([[0, 1], [-1, 1]])}=${M([[3, -2], [5, 4]])}\).`,
      [S`Compare entries: \((1,1)\): \(a=3\); \((1,2)\): \(b=-2\).`, S`The other two entries must agree: \((2,1)\): \(a-b=3+2=5\) ✓; \((2,2)\): \(2a+b=6-2=4\) ✓.`, S`So the combination exists with \(a=3\), \(b=-2\).`],
      S`\(a=3\), \(b=-2\)`],
  ]),

  practice([
    q("size", S`What is the size of \(${M([[1, 2], [3, 4], [5, 6], [7, 8]])}\)? Give the number of rows.`, num(4),
      "Count the rows.", [S`4 rows, 2 columns: \(4\times2\).`], S`\(4\)`),
    q("entry", S`For \(A=${M([[2, 9, -4], [0, 6, 1]])}\), find \(a_{23}\).`, num(1),
      "Row 2, column 3.", [S`Row 2 is \(0,6,1\); its third entry is 1.`], S`\(1\)`),
    q("sum entry", S`Find the \((1,2)\)-entry of \(A+B\) for \(A=${M([[1, -3], [2, 5]])}\), \(B=${M([[4, 7], [-1, 0]])}\).`, num(4),
      "Add the (1,2)-entries.", [S`\(-3+7\).`], S`\(4\)`),
    q("scalar", S`Find the \((2,1)\)-entry of \(-3A\) for \(A=${M([[2, 1], [-4, 0]])}\).`, num(12),
      "Multiply that entry by −3.", [S`\(-3(-4)\).`], S`\(12\)`),
    q("defined?", S`Which sum is defined?`, choice([S`a \(2\times3\) plus a \(2\times3\) matrix`, S`a \(2\times3\) plus a \(3\times2\) matrix`, S`a \(2\times2\) plus a \(2\times3\) matrix`, S`a \(1\times3\) plus a \(3\times1\) matrix`], 0),
      "Same size only.", [S`Addition needs equal sizes.`], S`\(2\times3+2\times3\)`),
  ]),

  ...hard([
    ["A system hidden in a matrix equation", S`Find all \(a,b,c\) with \(a${M([[1, 1], [0, 1]])}+b${M([[0, 1], [1, 0]])}+c${M([[1, 0], [1, 1]])}=${M([[3, 4], [5, 3]])}\).`,
      [S`Entries: \((1,1)\): \(a+c=3\); \((1,2)\): \(a+b=4\); \((2,1)\): \(b+c=5\); \((2,2)\): \(a+c=3\).`, S`From the first three: adding gives \(2(a+b+c)=12\), so \(a+b+c=6\); then \(b=3\), \(c=2\), \(a=1\).`, S`The fourth equation repeats the first ✓. Check \((2,1)\): \(3+2=5\) ✓.`],
      S`\(a=1\), \(b=3\), \(c=2\)`],
    ["Proving a property", S`Prove \((k+l)A=kA+lA\) for every \(m\times n\) matrix \(A\) and scalars \(k,l\).`,
      [S`Both sides are \(m\times n\). Compare the \((i,j)\)-entries.`, S`\(((k+l)A)_{ij}=(k+l)a_{ij}=ka_{ij}+la_{ij}\) (distributive law for numbers).`, S`\((kA+lA)_{ij}=(kA)_{ij}+(lA)_{ij}=ka_{ij}+la_{ij}\). The entries agree for every \(i,j\).`],
      S`\((k+l)A=kA+lA\)`],
  ], [
    q("hard", S`Solve \(3X-A=2X+B\) for \(X\) when \(A=${M([[1, 2], [3, 4]])}\), \(B=${M([[0, 1], [1, 0]])}\). Give the \((2,1)\)-entry of \(X\).`, num(4),
      "X = A + B.", [S`Subtract \(2X\) and add \(A\): \(X=A+B=${M([[1, 3], [4, 4]])}\).`], S`\(4\)`),
    q("hard", S`For which \(t\) is \(${M([["t^2", 1], [0, "t"]])}=${M([[4, 1], [0, -2]])}\)?`, num(-2),
      "Both entries with t must match.", [S`\(t^2=4\) and \(t=-2\): only \(t=-2\).`], S`\(-2\)`),
    q("hard", S`How many entries does a \(5\times7\) matrix have?`, num(35),
      "rows × columns.", [S`\(5\cdot7\).`], S`\(35\)`),
  ]),

  wrapUp({
    qas: [
      ["What does m × n mean?", "m rows and n columns; the entry aᵢⱼ sits in row i and column j."],
      ["When are two matrices equal?", "Same size and every pair of corresponding entries equal."],
      ["How are matrices added and scaled?", "Entry by entry; addition needs the same size."],
      ["What are 0 and Iₙ?", "The zero matrix has every entry 0; the identity is square with 1s on the diagonal and 0s elsewhere."],
      ["Which rules hold?", "The same ones as for vectors: commutative and associative addition, a zero, negatives, and distributive scalar laws."],
    ],
    summary: [
      "A = [aᵢⱼ] is m × n; aᵢⱼ is row i, column j.",
      "Equal ⇔ same size and equal entries.",
      "(A + B)ᵢⱼ = aᵢⱼ + bᵢⱼ; (kA)ᵢⱼ = k aᵢⱼ.",
      "0 and Iₙ; −A and A − B.",
      "Matrix addition and scaling obey the vector-space rules.",
    ],
    next: "3.2 flips a matrix across its diagonal — the transpose — and meets the matrices that equal their own transpose.",
  }),
];
