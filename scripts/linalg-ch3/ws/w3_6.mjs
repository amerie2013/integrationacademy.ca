// LINALG1 Worksheet 3.6 — Matrix Multiplication
// Self-contained: complete notes, 9 worked examples with figures, 13 problems with an answer key.
import { svgT } from "./figT.mjs";
import { S, def, thm } from "./wkit.mjs";
import { rowPic, prodPic } from "./fig3.mjs";
import { am } from "../bank/la.mjs";

const P = (svg, w = 4.8) => svgT(svg, w);
const M = (m) => am(m, false);

const NOTES = [
  { h: "1. The definition",
    lead: S`${def("matrix product", S`If \(A\) is \(m\times n\) and \(B=[\,\vec b_1\ \cdots\ \vec b_p\,]\) is \(n\times p\), then \(AB=[\,A\vec b_1\ \cdots\ A\vec b_p\,]\), an \(m\times p\) matrix.`)}
\(AB\) is defined only when (columns of \(A\)) = (rows of \(B\)). The outer sizes give the size of the product: \((m\times n)(n\times p)=m\times p\).`,
    fig: P(rowPic([[[["*", "*", "*"], ["*", "*", "*"]], { label: "2 × 3" }], [[["*", "*"], ["*", "*"], ["*", "*"]], { label: "3 × 2" }], "=", [[["*", "*"], ["*", "*"]], { label: "2 × 2" }]]), 4.6), w: 0.52 },
  { h: "2. The row-times-column rule",
    lead: thm("entries", S`\((AB)_{ij}=a_{i1}b_{1j}+\dots+a_{in}b_{nj}=(\text{row } i\text{ of }A)\cdot(\text{column } j\text{ of }B)\).`) + S`\pf{Column \(j\) of \(AB\) is \(A\vec b_j\), and entry \(i\) of \(A\vec b_j\) is (row \(i\) of \(A\))\(\cdot\vec b_j\).}`,
    fig: P(prodPic([[2, -1, 0], [1, 3, 2]], [[1, 4], [0, -2], [3, 1]], 1, 0), 5), w: 0.46,
    body: S`In the figure, \((AB)_{21}=(1,3,2)\cdot(1,0,3)=1+0+6=7\).` },
  { h: "3. Columns and rows of a product",
    lead: S`\begin{itemize}[leftmargin=*,itemsep=1pt]
\item \textbf{Column \(j\)} of \(AB\) is \(A\vec b_j\): a combination of the \emph{columns of \(A\)} with weights from column \(j\) of \(B\).
\item \textbf{Row \(i\)} of \(AB\) is (row \(i\) of \(A\))\(\,B\): a combination of the \emph{rows of \(B\)} with weights from row \(i\) of \(A\).
\end{itemize}
Use these to find one row or column without computing the whole product.`,
    fig: P(rowPic([[[[1, 0, 2], [-1, 1, 3]], { row: 1, label: "A" }], [[[2, 1, 0], [1, -1, 4], [0, 2, 1]], { label: "B" }], "=", [[[2, 5, 2], [-1, 4, 7]], { row: 1, rowFill: "#dcfce7", label: "AB" }]]), 5.2), w: 0.45 },
  { h: "4. Order matters",
    lead: S`Matrix multiplication is \textbf{not commutative}: \(BA\) may be undefined, of a different size, or simply different from \(AB\). Matrices with \(AB=BA\) are said to \textbf{commute} --- e.g. any \(A\) with \(I\) or with a scalar matrix \(kI\).`,
    fig: P(rowPic([[[[5, 0], [1, -1]], { label: "AB" }], "≠", [[[1, 1], [8, 3]], { label: "BA" }]]), 3.6), w: 0.58,
    body: S`The identity behaves like 1: \(I_mA=A=AI_n\) for every \(m\times n\) matrix \(A\).` },
  { h: "5. No cancellation",
    lead: S`For numbers, \(ab=0\) forces \(a=0\) or \(b=0\). For matrices it does not: a product of two nonzero matrices can be \(0\). Consequently \(AB=AC\) does not imply \(B=C\).`,
    fig: P(rowPic([[[[3, 6], [1, 2]], { label: "A" }], [[[2, -4], [-1, 2]], { label: "B" }], "=", [[[0, 0], [0, 0]], { label: "0" }]]), 4.4), w: 0.52,
    body: S`Here each column of \(B\) solves \(A\vec x=\vec 0\), so \(AB=[\,A\vec b_1\ A\vec b_2\,]=0\).` },
];

const EXAMPLES = [
  { title: "A full product", q: S`Compute \(AB\) for \(A=${M([[2, -1, 0], [1, 3, 2]])}\), \(B=${M([[1, 4], [0, -2], [3, 1]])}\).`,
    fig: P(prodPic([[2, -1, 0], [1, 3, 2]], [[1, 4], [0, -2], [3, 1]], 0, 1), 4.8),
    steps: [S`\((2\times3)(3\times2)\): \(AB\) is \(2\times2\).`, S`Row 1 \((2,-1,0)\): \(\cdot(1,0,3)=2+0+0=2\); \(\cdot(4,-2,1)=8+2+0=10\).`, S`Row 2 \((1,3,2)\): \(\cdot(1,0,3)=1+0+6=7\); \(\cdot(4,-2,1)=4-6+2=0\).`],
    ans: S`\(AB=${M([[2, 10], [7, 0]])}\)` },
  { title: "The product in the other order", q: S`For the same matrices compute \(BA\).`,
    fig: P(rowPic([[[[1, 4], [0, -2], [3, 1]], { label: "B (3 × 2)" }], [[[2, -1, 0], [1, 3, 2]], { label: "A (2 × 3)" }]]), 4.2),
    steps: [S`\((3\times2)(2\times3)\): \(BA\) is \(3\times3\).`, S`Row 1 of \(B\), \((1,4)\), with the columns \((2,1),(-1,3),(0,2)\) of \(A\): \(2+4=6\), \(-1+12=11\), \(0+8=8\).`, S`Row 2, \((0,-2)\): \(-2\), \(-6\), \(-4\). Row 3, \((3,1)\): \(6+1=7\), \(-3+3=0\), \(0+2=2\).`],
    ans: S`\(BA=${M([[6, 11, 8], [-2, -6, -4], [7, 0, 2]])}\)` },
  { title: "AB ≠ BA", q: S`Compute \(AB\) and \(BA\) for \(A=${M([[2, 1], [1, 0]])}\), \(B=${M([[1, -1], [3, 2]])}\).`,
    fig: P(rowPic([[[[5, 0], [1, -1]], { label: "AB" }], "≠", [[[1, 1], [8, 3]], { label: "BA" }]]), 3.6),
    steps: [S`\(AB=${M([["2+3", "-2+2"], ["1+0", "-1+0"]])}=${M([[5, 0], [1, -1]])}\).`, S`\(BA=${M([["2-1", "1-0"], ["6+2", "3+0"]])}=${M([[1, 1], [8, 3]])}\).`],
    ans: S`\(AB=${M([[5, 0], [1, -1]])}\ne BA=${M([[1, 1], [8, 3]])}\)` },
  { title: "A zero product", q: S`Show that \(A=${M([[3, 6], [1, 2]])}\), \(B=${M([[2, -4], [-1, 2]])}\) satisfy \(AB=0\).`,
    fig: P(rowPic([[[[3, 6], [1, 2]], { label: "A" }], [[[2, -4], [-1, 2]], { label: "B" }], "=", [[[0, 0], [0, 0]], {}]]), 4.2),
    steps: [S`Row 1 \((3,6)\): \(\cdot(2,-1)=6-6=0\), \(\cdot(-4,2)=-12+12=0\).`, S`Row 2 \((1,2)\): \(2-2=0\), \(-4+4=0\).`, S`So \(AB=0\) although \(A\ne0\) and \(B\ne0\).`],
    ans: S`\(AB=0\)` },
  { title: "One column and one row", q: S`For \(A=${M([[1, 0, 2], [-1, 1, 3]])}\), \(B=${M([[2, 1, 0], [1, -1, 4], [0, 2, 1]])}\), find column 2 and row 2 of \(AB\) separately.`,
    fig: P(rowPic([[[[1, 0, 2], [-1, 1, 3]], { row: 1, label: "A" }], [[[2, 1, 0], [1, -1, 4], [0, 2, 1]], { col: 1, label: "B" }]]), 4.4),
    steps: [S`Column 2: \(A\vec b_2=A(1,-1,2)=1(1,-1)+(-1)(0,1)+2(2,3)=(1+0+4,\ -1-1+6)=(5,4)\).`, S`Row 2: \((-1,1,3)B=-1(2,1,0)+1(1,-1,4)+3(0,2,1)=(-2+1+0,\ -1-1+6,\ 0+4+3)=(-1,4,7)\).`, S`Both agree with the full product \(AB=${M([[2, 5, 2], [-1, 4, 7]])}\).`],
    ans: S`column 2: \((5,4)\); row 2: \((-1,4,7)\)` },
  { title: "Which products exist?", q: S`\(A\) is \(2\times3\), \(B\) is \(3\times3\), \(C\) is \(3\times1\). Which of \(AB\), \(BA\), \(BC\), \(AC\), \(CA\) are defined, and their sizes?`,
    fig: P(rowPic([[[["*", "*", "*"], ["*", "*", "*"]], { label: "A" }], " ", [[["*", "*", "*"], ["*", "*", "*"], ["*", "*", "*"]], { label: "B" }], " ", [[["*"], ["*"], ["*"]], { label: "C" }]]), 4.2),
    steps: [S`\(AB\): \((2\times3)(3\times3)\) defined, \(2\times3\). \(BA\): \((3\times3)(2\times3)\), \(3\ne2\): undefined.`, S`\(BC\): \(3\times1\). \(AC\): \(2\times1\). \(CA\): \((3\times1)(2\times3)\), \(1\ne2\): undefined.`],
    ans: S`\(AB\) (\(2\times3\)), \(BC\) (\(3\times1\)), \(AC\) (\(2\times1\))` },
  { title: "The identity", q: S`Verify \(I_2A=A=AI_3\) for \(A=${M([[4, -1, 2], [0, 3, 5]])}\).`,
    fig: P(rowPic([[[[1, 0], [0, 1]], { label: "I₂" }], [[[4, -1, 2], [0, 3, 5]], { label: "A" }]]), 3.8),
    steps: [S`\(I_2A\): row 1 of \(I_2\), \((1,0)\), picks out row 1 of \(A\); row \((0,1)\) picks row 2. So \(I_2A=A\).`, S`\(AI_3\): column \(j\) is \(A\vec e_j=\vec a_j\). So \(AI_3=A\).`],
    ans: S`\(I_2A=AI_3=A\)` },
  { title: "Dot and outer products", q: S`For \(\vec x=(1,2,-1)\), \(\vec y=(3,0,4)\) (columns), compute \(\vec x^T\vec y\) and \(\vec x\vec y^T\).`,
    fig: P(rowPic([[[[1], [2], [-1]], { label: "x" }], [[[3, 0, 4]], { label: "yᵀ" }], "=", [[[3, 0, 4], [6, 0, 8], [-3, 0, -4]], { label: "xyᵀ" }]]), 4.6),
    steps: [S`\(\vec x^T\vec y\): \((1\times3)(3\times1)=1\times1\): \(3+0-4=-1\) --- the dot product.`, S`\(\vec x\vec y^T\): \((3\times1)(1\times3)=3\times3\); entry \((i,j)\) is \(x_iy_j\): \(${M([[3, 0, 4], [6, 0, 8], [-3, 0, -4]])}\).`],
    ans: S`\(\vec x^T\vec y=-1\); \(\vec x\vec y^T=${M([[3, 0, 4], [6, 0, 8], [-3, 0, -4]])}\)` },
  { title: "Matrices that commute with a diagonal matrix", q: S`Find all \(2\times2\) matrices \(B\) with \(DB=BD\), where \(D=${M([[1, 0], [0, 2]])}\).`,
    steps: [S`Let \(B=${M([["a", "b"], ["c", "d"]])}\). \(DB=${M([["a", "b"], ["2c", "2d"]])}\) (rows scaled), \(BD=${M([["a", "2b"], ["c", "2d"]])}\) (columns scaled).`, S`Compare: \(b=2b\) gives \(b=0\); \(2c=c\) gives \(c=0\).`, S`So \(B\) must be diagonal: \(B=${M([["a", 0], [0, "d"]])}\).`],
    ans: S`exactly the diagonal matrices` },
];

const PROBLEMS = [
  { level: 1, q: S`\(A\) is \(4\times2\), \(B\) is \(2\times5\). What size is \(AB\)? Is \(BA\) defined?`, ans: S`\(4\times5\); no` },
  { level: 1, q: S`Find \((AB)_{12}\) for \(A=${M([[1, 3], [2, 0]])}\), \(B=${M([[4, -1], [2, 5]])}\).`, ans: S`\(-1+15=14\)` },
  { level: 1, q: S`Compute \(${M([[2, -1], [0, 3]])}${M([[1, 4], [2, -1]])}\).`, ans: S`\(${M([[0, 9], [6, -3]])}\)` },
  { level: 2, q: S`Compute \(${M([[1, 2, 0], [0, 1, -1]])}${M([[3], [1], [2]])}\).`, ans: S`\((5,-1)\)`, fig: P(rowPic([[[[1, 2, 0], [0, 1, -1]], { label: "2 × 3" }], [[[3], [1], [2]], { label: "3 × 1" }]]), 3.2) },
  { level: 2, q: S`Show that \(A=${M([[1, 0], [0, 0]])}\) and \(B=${M([[0, 1], [0, 0]])}\) do not commute.`, ans: S`\(AB=${M([[0, 1], [0, 0]])}\), \(BA=0\)` },
  { level: 2, q: S`Compute \(${M([[1, 1], [1, 1]])}${M([[1, -1], [-1, 1]])}\). What does the result show?`, ans: S`the zero matrix: a product of nonzero matrices can be 0`, fig: P(rowPic([[[[1, 1], [1, 1]], {}], [[[1, -1], [-1, 1]], {}]]), 3.2) },
  { level: 2, q: S`Find column 3 of \(AB\) for \(A=${M([[1, 2], [3, 0]])}\), \(B=${M([[0, 1, 4], [5, 2, -1]])}\).`, ans: S`\((2,12)\)` },
  { level: 2, q: S`Compute \(\vec x^T\vec y\) and \(\vec x\vec y^T\) for \(\vec x=(2,-1)\), \(\vec y=(1,3)\).`, ans: S`\(-1\); \(${M([[2, 6], [-1, -3]])}\)`, fig: P(rowPic([[[[2], [-1]], { label: "x" }], [[[1, 3]], { label: "yᵀ" }]]), 2.6) },
  { level: 3, space: 5, q: S`Prove that row \(i\) of \(AB\) equals (row \(i\) of \(A\))\(\,B\).`, ans: S`entry \(j\) of both is \(\sum_k a_{ik}b_{kj}\)` },
  { level: 3, space: 5, q: S`Find \(A^2\) for \(A=${M([[0, 1], [0, 0]])}\). What does this say about \(A^2=0\)?`, ans: S`\(A^2=0\) although \(A\ne0\)` },
  { level: 3, space: 5, q: S`Find all \(2\times2\) matrices commuting with \(${M([[0, 1], [1, 0]])}\).`, ans: S`\(${M([["a", "b"], ["b", "a"]])}\)`, fig: P(rowPic([[[[0, 1], [1, 0]], { label: "swap" }]]), 1.8) },
  { level: 3, space: 5, q: S`Prove: if \(AB\) and \(BA\) are both defined and have the same size, then \(A\) and \(B\) are square of the same size.`, ans: S`\(A\) \(m\times n\), \(B\) \(n\times m\); \(m\times m=n\times n\Rightarrow m=n\)` },
  { level: 3, space: 5, q: S`Prove \(\operatorname{tr}(AB)=\operatorname{tr}(BA)\) for \(2\times2\) matrices.`, ans: S`both equal \(a_{11}b_{11}+a_{12}b_{21}+a_{21}b_{12}+a_{22}b_{22}\)` },
];

export const WS = {
  code: "3.6",
  title: "Matrix Multiplication",
  bigideas: S`The product \(AB\) applies \(A\) to every column of \(B\): \(AB=[\,A\vec b_1\ \cdots\ A\vec b_p\,]\). Entry \((i,j)\) is row \(i\) of \(A\) dotted with column \(j\) of \(B\). The product needs matching inner sizes, \((m\times n)(n\times p)=m\times p\). Unlike numbers, matrices usually do not commute, and a product can be zero although neither factor is; the identity acts like 1.`,
  goals: ["Decide when \\(AB\\) is defined and find its size.", "Compute products by the row-times-column rule.", "Compute single rows and columns of a product.", "Recognise that \\(AB\\ne BA\\) and that \\(AB=0\\) is possible with nonzero factors.", "Use the identity and find matrices that commute."],
  curriculum: "Matrix algebra — matrix multiplication",
  vocab: [["\\(AB\\)", "\\([\\,A\\vec b_1\\ \\cdots\\ A\\vec b_p\\,]\\)"], ["Size rule", "\\((m\\times n)(n\\times p)=m\\times p\\)"], ["Row-column rule", "\\((AB)_{ij}=\\sum_k a_{ik}b_{kj}\\)"], ["Commute", "\\(AB=BA\\)"], ["Outer product", "\\(\\vec x\\vec y^T\\)"]],
  hook: S`A factory makes 2 products from 3 parts, and each part needs some amounts of 2 raw materials. If you know the parts per product and the materials per part, how would you get the materials per product with one computation?`,
  concepts: NOTES,
  summary: [
    S`\(AB=[\,A\vec b_1\ \cdots\ A\vec b_p\,]\); \((m\times n)(n\times p)=m\times p\).`,
    S`\((AB)_{ij}=(\text{row }i)\cdot(\text{column }j)\).`,
    S`Column \(j\) of \(AB\) = \(A\vec b_j\); row \(i\) = (row \(i\) of \(A\))\(B\).`,
    S`\(AB\ne BA\) in general; \(I_mA=AI_n=A\).`,
    S`\(AB=0\) is possible with \(A,B\ne0\).`,
  ],
  tips: ["Check the inner sizes first.", "Row of the left matrix, column of the right matrix.", "Never switch the order of a product.", "Use the column or row view to find one part quickly.", "Do not cancel matrices."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
