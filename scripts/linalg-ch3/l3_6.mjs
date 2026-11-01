// LINALG1 3.6 — Matrix Multiplication: AB = [Ab₁ ⋯ Abₚ] (A applied to each column of B), the row-times-column rule,
// the size rule, column j of AB = A·(column j of B), row i of AB = (row i of A)·B, AB ≠ BA in general, and AB = 0
// without A = 0 or B = 0.
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, q, num, choice, hard, definition, theorem, am, cv, sfig, vec } from "./lib.mjs";
import { rowPic, prodPic } from "./ws/fig3.mjs";

export const TITLE = "3.6 Matrix Multiplication";
export const ID = "11a10001-0001-4001-8001-000000000306";

const S = String.raw;
const M = (m) => am(m, false);
const prodFig = sfig(prodPic([[1, 0, 2], [-1, 3, 1]], [[2, 1], [0, -1], [3, 4]], 0, 0), "(AB)₁₁ = (row 1 of A) · (column 1 of B) = 1·2 + 0·0 + 2·3 = 8");
const sizeFig = sfig(rowPic([[[["*", "*", "*"], ["*", "*", "*"]], { label: "2 × 3" }], [[["*", "*"], ["*", "*"], ["*", "*"]], { label: "3 × 2" }], "=", [[["*", "*"], ["*", "*"]], { label: "2 × 2" }]]), "inner sizes (3 and 3) must match; the outer sizes give the size of AB");
const zeroFig = sfig(rowPic([[[[1, 2], [2, 4]], { label: "A ≠ 0" }], [[[2, -4], [-1, 2]], { label: "B ≠ 0" }], "=", [[[0, 0], [0, 0]], { label: "AB = 0" }]]), "a product can be zero although neither factor is");

export const blocks = () => [
  intro({
    icon: "🧮",
    title: "Matrix Multiplication",
    overview: S`To multiply two matrices, apply the first one to each column of the second: \(AB=[\,A\vec b_1\ \cdots\ A\vec b_p\,]\). Entry by entry this gives the familiar <strong>row-times-column</strong> rule. The definition is designed so that \((AB)\vec x=A(B\vec x)\) — doing \(B\) and then \(A\) is the same as doing \(AB\) — which is why it is the right product for systems, transformations and everything in later chapters. But matrix multiplication has surprises: the sizes must match, \(AB\) and \(BA\) are usually different, and a product can be zero with neither factor zero.`,
    goals: [
      "decide when \\(AB\\) is defined and find its size;",
      "compute \\(AB\\) by the row-times-column rule and by columns;",
      "find a single row, column or entry of \\(AB\\) without computing the rest;",
      "show by example that \\(AB\\ne BA\\) in general;",
      "show that \\(AB=0\\) does not force \\(A=0\\) or \\(B=0\\).",
    ],
    outcomes: "matrix algebra: matrix multiplication",
    prior: [
      [S`Compute \(${M([[2, 1], [0, 3]])}${cv(4, -1)}\).`, S`\((7,-3)\) (3.4).`],
      [S`Compute \((1,-2,3)\cdot(4,0,1)\).`, S`\(4+0+3=7\).`],
      [S`If \(ab=0\) for real numbers, what follows?`, S`\(a=0\) or \(b=0\) — this will fail for matrices.`],
    ],
    words: [
      ["\\(AB\\)", "\\([\\,A\\vec b_1\\ \\cdots\\ A\\vec b_p\\,]\\)", "A applied to each column of B"],
      ["Size rule", "\\((m\\times n)(n\\times p)=m\\times p\\)", "inner sizes match"],
      ["Row-times-column", "\\((AB)_{ij}=\\sum_k a_{ik}b_{kj}\\)", "(row i of A)·(column j of B)"],
      ["Commute", "\\(AB=BA\\)", "rare; \\(AI=IA\\) always"],
      ["Zero divisors", "\\(A,B\\ne0\\) with \\(AB=0\\)", "impossible for numbers"],
    ],
  }),

  section("📌 The definition", S`
  ${definition("matrix product", S`If \(A\) is \(m\times n\) and \(B=[\,\vec b_1\ \cdots\ \vec b_p\,]\) is \(n\times p\), then \(AB\) is the \(m\times p\) matrix \(AB=[\,A\vec b_1\ \ A\vec b_2\ \cdots\ A\vec b_p\,]\).`)}
  <p>\(AB\) is defined only when the number of <strong>columns of \(A\)</strong> equals the number of <strong>rows of \(B\)</strong>; the outer numbers give the size of the product.</p>
  ${sizeFig}`),

  section("📌 The row-times-column rule", S`
  ${theorem("entries of AB", S`\((AB)_{ij}=a_{i1}b_{1j}+a_{i2}b_{2j}+\dots+a_{in}b_{nj}\), the dot product of row \(i\) of \(A\) with column \(j\) of \(B\).`, S`Column \(j\) of \(AB\) is \(A\vec b_j\), and entry \(i\) of \(A\vec b_j\) is (row \(i\) of \(A\))\(\cdot\vec b_j\) by the row view of the matrix–vector product.`)}
  ${prodFig}
  <p>Two more views are often quicker: <strong>column \(j\) of \(AB\) is \(A\) times column \(j\) of \(B\)</strong> (a combination of the columns of \(A\)), and <strong>row \(i\) of \(AB\) is (row \(i\) of \(A\)) times \(B\)</strong> (a combination of the rows of \(B\)).</p>`),

  section("📌 Surprises", S`
  ${keyIdea(S`Matrix multiplication is <strong>not commutative</strong>: \(BA\) may be undefined, of a different size, or simply different from \(AB\). Always keep the order.`)}
  <p>Also, the cancellation law of numbers fails: a product can be the zero matrix although neither factor is.</p>
  ${zeroFig}
  <p>The identity behaves like the number 1: \(I_mA=A=AI_n\) for every \(m\times n\) matrix \(A\) (each column of \(A\) is unchanged by \(I_m\)).</p>`),

  section("📌 Explore", S`<p>Pick an entry of \(AB\): its row of \(A\) (blue) and column of \(B\) (red) are highlighted, and the readout multiplies them term by term. It also tries \(BA\).</p>`),
  widget("laMatMul", { init: { set: "rect" } }),

  section("📌 Common mistakes", watchOut([
    "Check sizes first: (m × n)(n × p) — the inner numbers must agree.",
    "Entry (i, j) uses ROW i of A and COLUMN j of B.",
    "AB and BA are different in general; never switch the order.",
    "AB = 0 does not mean A = 0 or B = 0.",
    "Matrices are not multiplied entry by entry.",
  ])),

  examples([
    ["Computing a product", S`Compute \(AB\) for \(A=${M([[1, 0, 2], [-1, 3, 1]])}\) and \(B=${M([[2, 1], [0, -1], [3, 4]])}\).`,
      [S`\(A\) is \(2\times3\), \(B\) is \(3\times2\): \(AB\) is \(2\times2\).`, S`Row 1 of \(A\), \((1,0,2)\): with column 1 \((2,0,3)\): \(2+0+6=8\); with column 2 \((1,-1,4)\): \(1+0+8=9\).`, S`Row 2, \((-1,3,1)\): with column 1: \(-2+0+3=1\); with column 2: \(-1-3+4=0\).`, S`\(AB=${M([[8, 9], [1, 0]])}\).`],
      S`\(AB=${M([[8, 9], [1, 0]])}\)`, prodFig],
    ["The other order", S`For the same matrices compute \(BA\) and compare with \(AB\).`,
      [S`\(B\) is \(3\times2\), \(A\) is \(2\times3\): \(BA\) is \(3\times3\) — already a different size.`, S`Row 1 of \(B\), \((2,1)\): with the columns of \(A\), \((1,-1)\), \((0,3)\), \((2,1)\): \(2-1=1\), \(0+3=3\), \(4+1=5\).`, S`Row 2, \((0,-1)\): \(0+1=1\), \(0-3=-3\), \(0-1=-1\). Row 3, \((3,4)\): \(3-4=-1\), \(0+12=12\), \(6+4=10\).`, S`\(BA=${M([[1, 3, 5], [1, -3, -1], [-1, 12, 10]])}\ne AB\).`],
      S`\(BA=${M([[1, 3, 5], [1, -3, -1], [-1, 12, 10]])}\)`],
    ["Square matrices that do not commute", S`Compute \(AB\) and \(BA\) for \(A=${M([[1, 2], [0, 1]])}\), \(B=${M([[1, 0], [3, 1]])}\).`,
      [S`\(AB=${M([["1+6", "0+2"], ["0+3", "0+1"]])}=${M([[7, 2], [3, 1]])}\).`, S`\(BA=${M([["1+0", "2+0"], ["3+0", "6+1"]])}=${M([[1, 2], [3, 7]])}\).`, S`The products differ, although both are \(2\times2\).`],
      S`\(AB=${M([[7, 2], [3, 1]])}\ne BA=${M([[1, 2], [3, 7]])}\)`],
    ["A zero product", S`Show that \(A=${M([[1, 2], [2, 4]])}\) and \(B=${M([[2, -4], [-1, 2]])}\) satisfy \(AB=0\).`,
      [S`Row 1 of \(A\), \((1,2)\): with column 1 \((2,-1)\): \(2-2=0\); with column 2 \((-4,2)\): \(-4+4=0\).`, S`Row 2, \((2,4)\): \(4-4=0\) and \(-8+8=0\).`, S`So \(AB=0\) with \(A\ne0\), \(B\ne0\). (Each column of \(B\) lies in the null space of \(A\).)`],
      S`\(AB=0\)`, zeroFig],
    ["One column of a product", S`For \(A=${M([[2, -1], [1, 3], [0, 4]])}\) and \(B=${M([[1, 5], [2, -1]])}\), find only the second column of \(AB\).`,
      [S`Column 2 of \(AB\) is \(A\vec b_2\) with \(\vec b_2=(5,-1)\).`, S`\(A\vec b_2=5${cv(2, 1, 0)}-1${cv(-1, 3, 4)}=${cv("10+1", "5-3", "0-4")}=${cv(11, 2, -4)}\).`],
      S`\((11,2,-4)\)`],
  ]),

  practice([
    q("size", S`\(A\) is \(3\times5\) and \(B\) is \(5\times2\). How many columns does \(AB\) have?`, num(2),
      "Outer sizes.", [S`\(AB\) is \(3\times2\).`], S`\(2\)`),
    q("defined?", S`\(A\) is \(2\times3\), \(B\) is \(2\times3\). Which product is defined?`, choice([S`\(AB^T\)`, S`\(AB\)`, S`\(BA\)`, S`none of these`], 0),
      "Bᵀ is 3 × 2.", [S`\((2\times3)(3\times2)\).`], S`\(AB^T\)`),
    q("entry", S`Find \((AB)_{21}\) for \(A=${M([[1, 4], [2, -3]])}\), \(B=${M([[5, 0], [1, 2]])}\).`, num(7),
      "Row 2 of A · column 1 of B.", [S`\(2(5)+(-3)(1)\).`], S`\(7\)`),
    q("identity", S`For a \(2\times3\) matrix \(A\), \(I_2A=\)?`, choice([S`\(A\)`, S`\(A^T\)`, S`\(I_3\)`, "undefined"], 0),
      "I leaves each column unchanged.", [S`\(I_2\vec a_j=\vec a_j\).`], S`\(A\)`),
    q("column", S`Column 1 of \(AB\) equals:`, choice([S`\(A\) times column 1 of \(B\)`, S`column 1 of \(A\) times \(B\)`, S`row 1 of \(A\) times \(B\)`, S`column 1 of \(A\) plus column 1 of \(B\)`], 0),
      "Definition.", [S`\(AB=[\,A\vec b_1\ \cdots\,]\).`], S`\(A\vec b_1\)`),
  ]),

  ...hard([
    ["Matrices that commute with A", S`Find all \(2\times2\) matrices \(B\) with \(AB=BA\), where \(A=${M([[1, 1], [0, 1]])}\).`,
      [S`Let \(B=${M([["a", "b"], ["c", "d"]])}\). Then \(AB=${M([["a+c", "b+d"], ["c", "d"]])}\) and \(BA=${M([["a", "a+b"], ["c", "c+d"]])}\).`, S`Compare entries: \((1,1)\): \(a+c=a\), so \(c=0\). \((1,2)\): \(b+d=a+b\), so \(d=a\). \((2,2)\): \(d=c+d\) ✓ with \(c=0\).`, S`So \(B=${M([["a", "b"], [0, "a"]])}\) for any \(a,b\) — e.g. \(I\) and \(A\) itself.`],
      S`\(B=${M([["a", "b"], [0, "a"]])}\)`],
    ["When are AB and BA both defined?", S`For which sizes of \(B\) are both \(AB\) and \(BA\) defined if \(A\) is \(m\times n\)? When are they the same size?`,
      [S`\(AB\) needs \(B\) to have \(n\) rows; \(BA\) needs \(B\) to have \(m\) columns. So \(B\) must be \(n\times m\).`, S`Then \(AB\) is \(m\times m\) and \(BA\) is \(n\times n\): the same size only when \(m=n\).`],
      S`\(B\) must be \(n\times m\); equal sizes only for square matrices`, sizeFig],
  ], [
    q("hard", S`How many multiplications of entries are needed to compute \(AB\) for a \(2\times3\) matrix \(A\) and a \(3\times4\) matrix \(B\)?`, num(24),
      "Entries × terms per entry.", [S`8 entries, 3 products each.`], S`\(24\)`),
    q("hard", S`For \(A=${M([[1, 1], [1, 0]])}\), find the \((1,1)\)-entry of \(A^2=AA\).`, num(2),
      "Row 1 · column 1.", [S`\(1\cdot1+1\cdot1\).`], S`\(2\)`),
    q("hard", S`Find row 2 of \(AB\) for \(A=${M([[1, 0], [2, -1]])}\), \(B=${M([[3, 1, 0], [1, 4, 2]])}\).`, vec(5, -2, -2),
      "Row 2 of A times B.", [S`\(2(3,1,0)-1(1,4,2)\).`], S`\((5,-2,-2)\)`),
  ]),

  wrapUp({
    qas: [
      ["What is AB?", "The matrix whose j-th column is A times the j-th column of B."],
      ["When is AB defined?", "When A has as many columns as B has rows; (m × n)(n × p) is m × p."],
      ["How do I compute an entry?", "(AB)ᵢⱼ = (row i of A) · (column j of B)."],
      ["Is AB = BA?", "Usually not — the order matters."],
      ["Can AB = 0 with A, B ≠ 0?", "Yes; cancellation does not work for matrices."],
    ],
    summary: [
      "AB = [Ab₁ ⋯ Abₚ].",
      "(m × n)(n × p) = m × p.",
      "(AB)ᵢⱼ = Σₖ aᵢₖbₖⱼ.",
      "Column j of AB = Abⱼ; row i of AB = (row i of A)B.",
      "AB ≠ BA in general; AB = 0 is possible with A, B ≠ 0; IA = AI = A.",
    ],
    next: "3.7 collects the laws matrix multiplication does obey — associativity, distributivity, (AB)ᵀ = BᵀAᵀ — and powers of matrices.",
  }),
];
