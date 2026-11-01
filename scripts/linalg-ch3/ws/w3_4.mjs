// LINALG1 Worksheet 3.4 — Matrix–Vector Multiplication
// Self-contained: complete notes, 9 worked examples with figures, 13 problems with an answer key.
import { svgT } from "./figT.mjs";
import { S, def, thm } from "./wkit.mjs";
import { rowPic } from "./fig3.mjs";
import { vecs2 } from "./fig5.mjs";
import { am } from "../bank/la.mjs";
import { steps } from "../bank/la.mjs";

const P = (svg, w = 4.6) => svgT(svg, w);
const M = (m) => am(m, false);
const cv = (...a) => `\\begin{bmatrix}${a.join("\\\\")}\\end{bmatrix}`;
const COLS = vecs2([[[1, 2], "a₁", "blue"], [[2, -1], "a₂", "red"], [[2, 4], "", "blue", null, true], [[4, 3], "", "red", [2, 4], true], [[4, 3], "Ax", "green"]], { xmin: -1, xmax: 5, ymin: -2, ymax: 5 });

const NOTES = [
  { h: "1. The definition",
    lead: S`${def("matrix–vector product", S`If \(A=[\,\vec a_1\ \cdots\ \vec a_n\,]\) is \(m\times n\) and \(\vec x=(x_1,\dots,x_n)\in\mathbb R^n\), then \(A\vec x=x_1\vec a_1+\dots+x_n\vec a_n\in\mathbb R^m\).`)}
\(A\vec x\) is a \textbf{linear combination of the columns} of \(A\), with the entries of \(\vec x\) as weights. Figure: \(\vec a_1=(1,2)\), \(\vec a_2=(2,-1)\), \(\vec x=(2,1)\): \(A\vec x=2\vec a_1+\vec a_2=(4,3)\).`,
    fig: COLS, w: 0.56 },
  { h: "2. The size rule",
    lead: S`\(A\vec x\) is defined only when the number of \textbf{columns} of \(A\) equals the number of entries of \(\vec x\). The result has one entry for each \textbf{row} of \(A\): \[(m\times n)\cdot\mathbb R^n\to\mathbb R^m.\]`,
    fig: P(rowPic([[[["*", "*", "*"], ["*", "*", "*"]], { label: "2 × 3" }], [[["*"], ["*"], ["*"]], { label: "ℝ³" }], "=", [[["*"], ["*"]], { label: "ℝ²" }]]), 4.4), w: 0.55 },
  { h: "3. The row view",
    lead: S`Entry \(i\) of \(A\vec x\) is the dot product of row \(i\) of \(A\) with \(\vec x\): \[(A\vec x)_i=a_{i1}x_1+\dots+a_{in}x_n.\] This is the fastest way to compute; the column view is the best way to understand.`,
    fig: P(rowPic([[[[2, -1, 4], [1, 3, 0]], { row: 1, label: "A" }], [[[3], [2], [-1]], { col: 0, label: "x" }], "=", [[[0], [9]], { cells: [[1, 0, "#bbf7d0"]], label: "Ax" }]]), 4.6), w: 0.5,
    body: S`In the figure, entry 2 is \((1,3,0)\cdot(3,2,-1)=3+6+0=9\).` },
  { h: "4. Linearity",
    lead: thm("properties", S`\(A(\vec x+\vec y)=A\vec x+A\vec y\), \(A(k\vec x)=kA\vec x\), \((A+B)\vec x=A\vec x+B\vec x\), \((kA)\vec x=k(A\vec x)\).`) + S`\pf{\(A(\vec x+\vec y)=\sum(x_j+y_j)\vec a_j=\sum x_j\vec a_j+\sum y_j\vec a_j\); \(A(k\vec x)=\sum kx_j\vec a_j=k\sum x_j\vec a_j\); the columns of \(A+B\) are \(\vec a_j+\vec b_j\).}`,
    fig: P(rowPic([[[[3, 1], [2, -2]], { label: "A" }], [[[-1], [3]], { label: "x + y" }], "=", [[[0], [-8]], { label: "Ax + Ay" }]]), 4.2), w: 0.55 },
  { h: "5. Extracting columns; the identity",
    lead: thm("columns", S`\(A\vec e_j=\vec a_j\), the \(j\)-th column of \(A\). In particular \(I_n\vec x=\vec x\).`) + S`\pf{\(\vec e_j\) has weight 1 on column \(j\) and 0 on the others. The columns of \(I_n\) are \(\vec e_1,\dots,\vec e_n\), so \(I_n\vec x=\sum x_j\vec e_j=\vec x\).}`,
    fig: P(rowPic([[[[2, -1], [0, 3], [1, 4]], { col: 1, label: "A" }], [[[0], [1]], { label: "e₂" }], "=", [[[-1], [3], [4]], { label: "a₂" }]]), 4.2), w: 0.55,
    body: S`So a matrix is completely determined by what it does to \(\vec e_1,\dots,\vec e_n\): by linearity \(A\vec x=x_1A\vec e_1+\dots+x_nA\vec e_n\).` },
];

const EXAMPLES = [
  { title: "Column view and row view", q: S`Compute \(A\vec x\) for \(A=${M([[2, -1, 4], [1, 3, 0]])}\), \(\vec x=(3,2,-1)\), in both ways.`,
    fig: P(rowPic([[[[2, -1, 4], [1, 3, 0]], { row: 0, label: "A" }], [[[3], [2], [-1]], { col: 0, label: "x" }], "=", [[[0], [9]], { cells: [[0, 0, "#bbf7d0"]], label: "Ax" }]]), 4.4),
    steps: [S`Columns: \(3${cv(2, 1)}+2${cv(-1, 3)}-1${cv(4, 0)}=${cv("6-2-4", "3+6-0")}=${cv(0, 9)}\).`, S`Rows: \((2,-1,4)\cdot(3,2,-1)=6-2-4=0\) and \((1,3,0)\cdot(3,2,-1)=3+6+0=9\) ✓.`],
    ans: S`\(A\vec x=(0,9)\)` },
  { title: "A tall matrix", q: S`Compute \(A\vec x\) for \(A=${M([[1, 2], [-3, 0], [4, 1], [2, -2]])}\), \(\vec x=(2,-1)\).`,
    fig: P(rowPic([[[[1, 2], [-3, 0], [4, 1], [2, -2]], { label: "4 × 2" }], [[[2], [-1]], { label: "ℝ²" }], "=", [[[0], [-6], [7], [6]], { label: "ℝ⁴" }]]), 4),
    steps: [S`\(4\times2\) times \(\mathbb R^2\): the result is in \(\mathbb R^4\).`, S`Rows: \(2-2=0\), \(-6+0=-6\), \(8-1=7\), \(4+2=6\).`, S`Columns check: \(2(1,-3,4,2)-(2,0,1,-2)=(0,-6,7,6)\) ✓.`],
    ans: S`\((0,-6,7,6)\)` },
  { title: "Which products exist?", q: S`\(A\) is \(3\times4\). Which of \(A\vec u\) (\(\vec u\in\mathbb R^3\)), \(A\vec v\) (\(\vec v\in\mathbb R^4\)), \(A^T\vec u\) are defined, and in which space do they lie?`,
    fig: P(rowPic([[[["*", "*", "*", "*"], ["*", "*", "*", "*"], ["*", "*", "*", "*"]], { label: "3 × 4" }]]), 2.8),
    steps: [S`\(A\) has 4 columns: \(A\vec v\) is defined and lies in \(\mathbb R^3\); \(A\vec u\) is not defined.`, S`\(A^T\) is \(4\times3\), with 3 columns: \(A^T\vec u\) is defined and lies in \(\mathbb R^4\).`],
    ans: S`\(A\vec v\in\mathbb R^3\) and \(A^T\vec u\in\mathbb R^4\); \(A\vec u\) undefined` },
  { title: "Checking linearity", q: S`For \(A=${M([[3, 1], [2, -2]])}\), \(\vec x=(1,2)\), \(\vec y=(-2,1)\), verify \(A(\vec x+\vec y)=A\vec x+A\vec y\).`,
    fig: P(rowPic([[[[3, 1], [2, -2]], { label: "A" }], [[[-1], [3]], { label: "x + y" }], "=", [[[0], [-8]], {}]]), 4),
    steps: [S`\(A\vec x=(3+2,\ 2-4)=(5,-2)\); \(A\vec y=(-6+1,\ -4-2)=(-5,-6)\).`, S`\(\vec x+\vec y=(-1,3)\): \(A(\vec x+\vec y)=(-3+3,\ -2-6)=(0,-8)\).`, S`\(A\vec x+A\vec y=(5-5,\ -2-6)=(0,-8)\) ✓.`],
    ans: S`both equal \((0,-8)\)` },
  { title: "Rebuilding a matrix", q: S`A \(3\times2\) matrix has \(A\vec e_1=(2,0,1)\) and \(A\vec e_2=(-1,3,4)\). Find \(A\) and \(A(3,-2)\).`,
    fig: P(rowPic([[[[2, -1], [0, 3], [1, 4]], { label: "A = [Ae₁ Ae₂]" }]]), 2.8),
    steps: [S`The columns of \(A\) are \(A\vec e_1\) and \(A\vec e_2\): \(A=${M([[2, -1], [0, 3], [1, 4]])}\).`, S`\(A(3,-2)=3(2,0,1)-2(-1,3,4)=(6+2,\ 0-6,\ 3-8)=(8,-6,-5)\).`],
    ans: S`\(A(3,-2)=(8,-6,-5)\)` },
  { title: "Summing the columns", q: S`Without multiplying row by row, find \(A(1,1,1)\) for \(A=${M([[1, 0, 2], [3, -1, 1], [0, 4, -2]])}\).`,
    fig: P(rowPic([[[[1, 0, 2], [3, -1, 1], [0, 4, -2]], { label: "A" }], [[[1], [1], [1]], { label: "x" }], "=", [[[3], [3], [2]], { label: "sum of columns" }]]), 4.6),
    steps: [S`With all weights 1, \(A(1,1,1)=\vec a_1+\vec a_2+\vec a_3\).`, S`\((1,3,0)+(0,-1,4)+(2,1,-2)=(3,3,2)\).`],
    ans: S`\((3,3,2)\)` },
  { title: "Scaling the vector", q: S`For \(A=${M([[1, 2], [3, 4]])}\) and \(\vec x=(1,-1)\), compute \(A\vec x\) and \(A(3\vec x)\).`,
    fig: P(rowPic([[[[1, 2], [3, 4]], { label: "A" }], [[[3], [-3]], { label: "3x" }], "=", [[[-3], [-3]], { label: "3Ax" }]]), 4),
    steps: [S`\(A\vec x=(1-2,\ 3-4)=(-1,-1)\).`, S`\(A(3\vec x)=A(3,-3)=(3-6,\ 9-12)=(-3,-3)=3A\vec x\) ✓.`],
    ans: S`\((-1,-1)\) and \((-3,-3)\)` },
  { title: "A picture in the plane", q: S`For \(A\) with columns \(\vec a_1=(1,2)\), \(\vec a_2=(2,-1)\), draw and compute \(A\vec x\) for \(\vec x=(2,1)\).`,
    fig: COLS,
    steps: [S`Walk 2 copies of \(\vec a_1\): to \((2,4)\) (dashed blue).`, S`Then 1 copy of \(\vec a_2\): \((2,4)+(2,-1)=(4,3)\) (dashed red).`, S`So \(A\vec x=(4,3)\). Rows: \((1,2)\cdot(2,1)=4\), \((2,-1)\cdot(2,1)=3\) ✓.`],
    ans: S`\(A\vec x=(4,3)\)` },
  { title: "Finding the weights", q: S`Find \(\vec x\) with \(${M([[1, 1], [1, -1]])}\vec x=${cv(5, 1)}\).`,
    steps: [...steps([[1, 1, 5], [1, -1, 1]], [
      [S`Solve \(A\vec x=\vec b\). Eliminate \(x_1\) from row 2.`, ["R2-R1"]],
      [S`Make the second pivot 1.`, ["R2*-1/2"]],
      [S`Clear above it.`, ["R1-R2"]],
    ], { intro: "Augmented matrix [A | b]" }).steps,
      S`\(\vec x=(3,2)\). Check: \[${am([[1, 1], [1, -1]], false)}${am([[3], [2]], false)}=${am([["3+2"], ["3-2"]], false)}=${am([[5], [1]], false)}\ ✓\].`],
    ans: S`\(\vec x=(3,2)\)` },
];

const PROBLEMS = [
  { level: 1, q: S`Compute \(${M([[1, 2], [3, 4]])}${cv(1, 0)}\).`, ans: S`\((1,3)\)` },
  { level: 1, q: S`\(A\) is \(2\times5\). In which \(\mathbb R^k\) must \(\vec x\) lie for \(A\vec x\) to be defined, and where does \(A\vec x\) lie?`, ans: S`\(\vec x\in\mathbb R^5\); \(A\vec x\in\mathbb R^2\)` },
  { level: 1, q: S`Find \(A\vec e_3\) for \(A=${M([[4, 0, -2], [1, 7, 5]])}\).`, ans: S`\((-2,5)\)` },
  { level: 2, q: S`Compute \(${M([[2, 0, -1], [1, 4, 3]])}${cv(1, -1, 2)}\).`, ans: S`\((0,3)\)`, fig: P(rowPic([[[[2, 0, -1], [1, 4, 3]], { label: "A" }], [[[1], [-1], [2]], { label: "x" }]]), 3.4) },
  { level: 2, q: S`Compute \(${M([[1, -1], [2, 3], [0, 5]])}${cv(4, 1)}\) by the column view.`, ans: S`\((3,11,5)\)` },
  { level: 2, q: S`\(A\vec x=(1,2)\) and \(A\vec y=(3,0)\). Find \(A(2\vec x-\vec y)\).`, ans: S`\((-1,4)\)` },
  { level: 2, q: S`A \(2\times2\) matrix has \(A\vec e_1=(4,-1)\), \(A\vec e_2=(0,2)\). Find \(A\) and \(A(1,3)\).`, ans: S`\(${M([[4, 0], [-1, 2]])}\); \((4,5)\)`, fig: P(rowPic([[[[4, 0], [-1, 2]], { label: "A" }]]), 2) },
  { level: 2, q: S`Draw \(\vec a_1=(2,1)\), \(\vec a_2=(-1,1)\) and \(A\vec x\) for \(\vec x=(1,2)\), where \(A=[\vec a_1\ \vec a_2]\).`, ans: S`\(A\vec x=(0,3)\)`, fig: vecs2([[[2, 1], "a₁", "blue"], [[-1, 1], "a₂", "red"]], { xmin: -2, xmax: 3, ymin: -1, ymax: 4 }) },
  { level: 3, space: 5, q: S`Prove that \(A(\vec x+\vec y)=A\vec x+A\vec y\) from the column definition.`, ans: S`\(\sum(x_j+y_j)\vec a_j=\sum x_j\vec a_j+\sum y_j\vec a_j\)` },
  { level: 3, space: 5, q: S`Prove that \((A+B)\vec x=A\vec x+B\vec x\).`, ans: S`the columns of \(A+B\) are \(\vec a_j+\vec b_j\)` },
  { level: 3, space: 5, q: S`Find all \(\vec x\) with \(${M([[1, 2], [2, 4]])}\vec x=\vec 0\).`, ans: S`\(\vec x=t(-2,1)\)`, fig: vecs2([[[1, 2], "a₁", "blue"], [[2, 4], "a₂ = 2a₁", "red", null, true]], { xmin: -3, xmax: 3, ymin: -1, ymax: 5 }) },
  { level: 3, space: 5, q: S`A \(2\times2\) matrix has \(A(1,0)=(2,1)\) and \(A(1,1)=(3,3)\). Find \(A\).`, ans: S`\(${M([[2, 1], [1, 2]])}\)` },
  { level: 3, space: 5, q: S`Prove: if \(A\vec x=\vec 0\) for every \(\vec x\in\mathbb R^n\), then \(A\) is the zero matrix.`, ans: S`take \(\vec x=\vec e_j\): every column is \(\vec 0\)`, fig: P(rowPic([[[[0, 0], [0, 0]], { label: "A = 0" }]]), 1.8) },
];

export const WS = {
  code: "3.4",
  title: "Matrix–Vector Multiplication",
  bigideas: S`The product \(A\vec x\) of an \(m\times n\) matrix and a vector of \(\mathbb R^n\) is the combination \(x_1\vec a_1+\dots+x_n\vec a_n\) of the columns of \(A\); computed row by row, each entry is a dot product. The product is defined only when the inner sizes match, and it is \textbf{linear}. Multiplying by \(\vec e_j\) picks out the \(j\)-th column, so a matrix is determined by what it does to \(\vec e_1,\dots,\vec e_n\).`,
  goals: ["Compute \\(A\\vec x\\) by columns and by rows.", "Use the size rule.", "Prove and use the linearity properties.", "Use \\(A\\vec e_j=\\vec a_j\\) to read or rebuild a matrix.", "Interpret \\(A\\vec x\\) geometrically as walking along the columns."],
  curriculum: "Matrix algebra — the matrix–vector product",
  vocab: [["\\(A\\vec x\\)", "\\(x_1\\vec a_1+\\dots+x_n\\vec a_n\\)"], ["Row view", "\\((A\\vec x)_i=\\) row \\(i\\cdot\\vec x\\)"], ["Size rule", "\\((m\\times n)\\mathbb R^n\\to\\mathbb R^m\\)"], ["Linear", "\\(A(\\vec x+\\vec y)=A\\vec x+A\\vec y\\), \\(A(k\\vec x)=kA\\vec x\\)"], ["\\(\\vec e_j\\)", "1 in position \\(j\\), 0 elsewhere"]],
  hook: S`A bakery uses (flour, sugar) of \((2,1)\) kg per batch of bread and \((1,2)\) kg per batch of cake. How much flour and sugar do 3 batches of bread and 2 of cake need? Can you write the answer as a matrix times a vector?`,
  concepts: NOTES,
  summary: [
    S`\(A\vec x=x_1\vec a_1+\dots+x_n\vec a_n\).`,
    S`\((A\vec x)_i=(\text{row }i)\cdot\vec x\).`,
    S`\((m\times n)\cdot\mathbb R^n\to\mathbb R^m\).`,
    S`Linear in \(\vec x\) and in \(A\).`,
    S`\(A\vec e_j=\vec a_j\); \(I\vec x=\vec x\).`,
  ],
  tips: ["Check: columns of A = entries of x.", "Weights multiply columns.", "Row view for computing, column view for understanding.", "Use linearity to avoid recomputing.", "Aeⱼ is a column, not a row."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
