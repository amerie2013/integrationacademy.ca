// LINALG1 Worksheet 3.5 — Linear Systems as Ax = b
// Self-contained: complete notes, 9 worked examples with figures, 13 problems with an answer key.
import { svgT } from "./figT.mjs";
import { S, def, thm } from "./wkit.mjs";
import { rowPic } from "./fig3.mjs";
import { vecs2 } from "./fig5.mjs";
import { am, sys, steps } from "../bank/la.mjs";

const P = (svg, w = 4.6) => svgT(svg, w);
const M = (m) => am(m, false);
const sysT = (rows) => S`\left\{${sys(rows)}\right.`;

const NOTES = [
  { h: "1. A system is one matrix equation",
    lead: S`The system \(a_{i1}x_1+\dots+a_{in}x_n=b_i\) (\(i=1,\dots,m\)) says (row \(i\) of \(A\))\(\cdot\vec x=b_i\) for every \(i\) --- that is, \[A\vec x=\vec b,\] with \(A=[a_{ij}]\) the coefficient matrix, \(\vec x\in\mathbb R^n\) the unknowns and \(\vec b\in\mathbb R^m\) the constants. Its augmented matrix is \([A\mid\vec b]\).`,
    fig: P(rowPic([[[[3, 0, 1], [1, -2, 1], [0, 1, 5]], { label: "A" }], [[["x₁"], ["x₂"], ["x₃"]], { label: "x" }], "=", [[[4], [0], [-1]], { label: "b" }]]), 4.8), w: 0.5 },
  { h: "2. Consistency and the columns",
    lead: thm("Ax = b and the columns", S`\(\vec x\) solves \(A\vec x=\vec b\) \(\iff\) \(x_1\vec a_1+\dots+x_n\vec a_n=\vec b\). Hence \(A\vec x=\vec b\) is consistent \(\iff\) \(\vec b\) is a linear combination of the columns of \(A\).`) + S`\pf{This is the column definition of \(A\vec x\).}`,
    fig: vecs2([[[1, 1], "a₁", "blue"], [[1, -1], "a₂", "red"], [[2, 2], "", "blue", null, true], [[3, 1], "", "red", [2, 2], true], [[3, 1], "b", "green"]], { xmin: -1, xmax: 4, ymin: -2, ymax: 3 }), w: 0.56,
    body: S`So a solution is a list of \textbf{weights} that combine the columns into \(\vec b\). In the figure \(\vec b=(3,1)=2\vec a_1+1\vec a_2\), i.e. \(\vec x=(2,1)\).` },
  { h: "3. Solving",
    lead: S`To solve \(A\vec x=\vec b\), row reduce \([A\mid\vec b]\) (Chapter 2). A row \([\,0\ \cdots\ 0\mid c\,]\) with \(c\ne0\) means no solution: \(\vec b\) is not a combination of the columns. Otherwise read the solutions from the RREF.`,
    fig: P(rowPic([[[[2, 1, 4], [1, -1, 5], [3, 2, 5]], { label: "[A | b]" }], "→", [[[1, 0, 3], [0, 1, -2], [0, 0, 0]], { label: "RREF" }]]), 4.8), w: 0.5 },
  { h: "4. Particular + homogeneous",
    lead: thm("structure", S`If \(A\vec p=\vec b\), the solutions of \(A\vec x=\vec b\) are exactly \(\vec x=\vec p+\vec h\) with \(A\vec h=\vec 0\).`) + S`\pf{\(A(\vec p+\vec h)=A\vec p+A\vec h=\vec b\). Conversely \(A(\vec x-\vec p)=\vec b-\vec b=\vec 0\).}`,
    fig: vecs2([[[1, 1], "p", "amber"]], { xmin: -3, xmax: 4, ymin: -2, ymax: 4 }, { segs: [{ pts: [[-3, 1.5], [4, -2]], color: "violet", w: 2.2, dash: true }, { pts: [[-3, 3], [4, -0.5]], color: "red", w: 2.6 }] }), w: 0.58,
    body: S`Geometrically: the solution set of \(A\vec x=\vec b\) is the solution set of \(A\vec x=\vec 0\) shifted by \(\vec p\).` },
  { h: "5. The matrices-equal theorem",
    lead: thm("matrices equal", S`If \(A\vec x=B\vec x\) for every \(\vec x\in\mathbb R^n\), then \(A=B\).`) + S`\pf{Take \(\vec x=\vec e_j\): column \(j\) of \(A\) equals column \(j\) of \(B\), for every \(j\).}
For a \emph{single} \(\vec x\) the conclusion fails: \(A\vec x=B\vec x\) only says \((A-B)\vec x=\vec 0\).`,
    fig: P(rowPic([[[[2, 1], [0, 3]], { col: 0, label: "A" }], " ", [[[2, 5], [0, -1]], { col: 0, label: "B" }]]), 3.8), w: 0.58,
    body: S`In the figure the first columns agree, so \(A\vec e_1=B\vec e_1\), but \(A\ne B\).` },
];

const EXAMPLES = [
  { title: "Writing a system as Ax = b", q: S`Write \(${sysT([[3, 0, 1, 4], [1, -2, 1, 0], [0, 1, 5, -1]])}\) as \(A\vec x=\vec b\).`,
    fig: P(rowPic([[[[3, 0, 1], [1, -2, 1], [0, 1, 5]], { label: "A" }], [[["x₁"], ["x₂"], ["x₃"]], {}], "=", [[[4], [0], [-1]], { label: "b" }]]), 4.4),
    steps: [S`One row per equation, one column per unknown; missing unknowns give 0: \(A=${M([[3, 0, 1], [1, -2, 1], [0, 1, 5]])}\).`, S`\(\vec x=(x_1,x_2,x_3)\) and \(\vec b=(4,0,-1)\).`],
    ans: S`\(A=${M([[3, 0, 1], [1, -2, 1], [0, 1, 5]])}\), \(\vec b=(4,0,-1)\)` },
  { title: "From x to b", q: S`\(\vec x=(2,-1,1)\) solves \(A\vec x=\vec b\) for \(A=${M([[1, 2, 0], [0, 1, -1], [2, 0, 3]])}\). Find \(\vec b\).`,
    fig: P(rowPic([[[[1, 2, 0], [0, 1, -1], [2, 0, 3]], { label: "A" }], [[[2], [-1], [1]], { label: "x" }], "=", [[[0], [-2], [7]], { label: "b" }]]), 4.4),
    steps: [S`\(\vec b=A\vec x=2(1,0,2)-1(2,1,0)+1(0,-1,3)\).`, S`\(=(2-2+0,\ 0-1-1,\ 4-0+3)=(0,-2,7)\).`],
    ans: S`\(\vec b=(0,-2,7)\)` },
  { title: "A consistent system", q: S`Solve \(A\vec x=\vec b\) for \(A=${M([[2, 1], [1, -1], [3, 2]])}\), \(\vec b=(4,5,5)\), and write \(\vec b\) as a combination of the columns.`,
    fig: P(rowPic([[[[2, 1, 4], [1, -1, 5], [3, 2, 5]], { label: "[A | b]" }]]), 2.8),
    steps: [...steps([[2, 1, 4], [1, -1, 5], [3, 2, 5]], [
      [S`Swap to get a leading 1.`, ["R1<->R2"]],
      [S`Clear column 1.`, ["R2-2R1", "R3-3R1"]],
      [S`Make the second pivot 1,`, ["R2*1/3"]],
      [S`and clear column 2.`, ["R1+R2", "R3-5R2"]],
    ]).steps, S`\(x_1=3\), \(x_2=-2\): \(\vec b=3(2,1,3)-2(1,-1,2)=(4,5,5)\) ✓.`],
    ans: S`\(\vec x=(3,-2)\)` },
  { title: "An inconsistent system", q: S`Is \(A\vec x=(4,5,6)\) consistent for the matrix \(A\) of Example 3?`,
    fig: vecs2([[[2, 1], "a₁ (first 2 entries)", "blue"], [[1, -1], "a₂", "red"]], { xmin: -1, xmax: 3, ymin: -2, ymax: 2 }),
    steps: [...steps([[2, 1, 4], [1, -1, 5], [3, 2, 6]], [
      [S`The same operations as in Example 3.`, ["R1<->R2"]],
      [S`Clear column 1.`, ["R2-2R1", "R3-3R1"]],
      [S`Scale and clear column 2.`, ["R2*1/3", "R1+R2", "R3-5R2"]],
    ]).steps, S`The last row reads \(0=1\): \((4,5,6)\) is not a combination of the columns.`],
    ans: S`inconsistent` },
  { title: "Particular plus homogeneous", q: S`Solve \(A\vec x=\vec b\) for \(A=${M([[1, 2, -1], [2, 4, 1]])}\), \(\vec b=(1,8)\), and identify \(\vec p\) and the homogeneous part.`,
    fig: P(rowPic([[[[1, 2, 0, 3], [0, 0, 1, 2]], { cells: [[0, 0], [1, 2]], label: "RREF of [A | b]" }]]), 3.4),
    steps: [...steps([[1, 2, -1, 1], [2, 4, 1, 8]], [
      [S`Clear column 1.`, ["R2-2R1"]],
      [S`Column 2 has no pivot; make the pivot of column 3 equal to 1,`, ["R2*1/3"]],
      [S`and clear above it.`, ["R1+R2"]],
    ]).steps, S`Free \(x_2=t\): \(x_1=3-2t\), \(x_3=2\). \(\vec x=(3,0,2)+t(-2,1,0)\).`, S`\(\vec p=(3,0,2)\): \(A\vec p=(3-2,\ 6+2)=(1,8)\) ✓; \(\vec h=t(-2,1,0)\): \(A(-2,1,0)=(-2+2,\ -4+4)=\vec 0\) ✓.`],
    ans: S`\(\vec x=(3,0,2)+t(-2,1,0)\)` },
  { title: "Which b work?", q: S`For which \(\vec b\) is \(${M([[1, 2], [2, 4]])}\vec x=\vec b\) consistent?`,
    fig: vecs2([[[1, 2], "a₁", "blue"], [[2, 4], "a₂ = 2a₁", "red", null, true]], { xmin: -2, xmax: 3, ymin: -1, ymax: 5 }),
    steps: [S`\([A\mid\vec b]\): \(R_2\to R_2-2R_1\) gives \((0,0\mid b_2-2b_1)\).`, S`Consistent exactly when \(b_2=2b_1\): \(\vec b\) must lie on the line through \((1,2)\), the span of the (parallel) columns.`],
    ans: S`\(b_2=2b_1\)` },
  { title: "Weights in the plane", q: S`With columns \(\vec a_1=(1,1)\), \(\vec a_2=(1,-1)\), solve \(A\vec x=(3,1)\) and draw the combination.`,
    fig: vecs2([[[1, 1], "a₁", "blue"], [[1, -1], "a₂", "red"], [[2, 2], "", "blue", null, true], [[3, 1], "", "red", [2, 2], true], [[3, 1], "b", "green"]], { xmin: -1, xmax: 4, ymin: -2, ymax: 3 }),
    steps: [...steps([[1, 1, 3], [1, -1, 1]], [
      [S`Eliminate \(x_1\) from row 2.`, ["R2-R1"]],
      [S`Make the second pivot 1.`, ["R2*-1/2"]],
      [S`Clear above it.`, ["R1-R2"]],
    ], { intro: "Augmented matrix [A | b]" }).steps,
      S`\(\vec x=(2,1)\): walk 2 copies of \(\vec a_1\) to \((2,2)\), then 1 copy of \(\vec a_2\) to \((3,1)\). Check: \[${am([[1, 1], [1, -1]], false)}${am([[2], [1]], false)}=${am([[3], [1]], false)}\ ✓\].`,
      S`The columns are not parallel (two pivots), so every \(\vec b\in\mathbb R^2\) can be reached in exactly one way.`],
    ans: S`\(\vec x=(2,1)\)` },
  { title: "One vector is not enough", q: S`\(A=${M([[2, 1], [0, 3]])}\), \(B=${M([[2, 5], [0, -1]])}\). Find all \(\vec x\) with \(A\vec x=B\vec x\).`,
    fig: P(rowPic([[[[0, -4], [0, 4]], { label: "A − B" }]]), 2),
    steps: [S`\(A\vec x=B\vec x\iff(A-B)\vec x=\vec 0\), with \(A-B=${M([[0, -4], [0, 4]])}\).`, S`\((A-B)\vec x=(-4x_2,\ 4x_2)=\vec 0\iff x_2=0\).`, S`So exactly the multiples of \(\vec e_1\): the first columns agree, the second do not.`],
    ans: S`\(\vec x=t(1,0)\)` },
  { title: "A consistency parameter", q: S`For which \(h\) is \(${M([[1, -2], [-3, 6]])}\vec x=${M([[1], ["h"]])}\) consistent? Give all solutions for that \(h\).`,
    steps: [S`\(R_2\to R_2+3R_1\): \(${am([[1, -2, 1], [-3, 6, "h"]])}\longrightarrow${am([[1, -2, 1], [0, 0, "h+3"]])}\).`, S`Consistent iff \(h=-3\).`, S`Then \(x_1-2x_2=1\): \(\vec x=(1,0)+t(2,1)\).`],
    ans: S`\(h=-3\); \(\vec x=(1,0)+t(2,1)\)` },
];

const PROBLEMS = [
  { level: 1, q: S`Write \(x_1-x_3=2\), \(2x_2+x_3=-1\) as \(A\vec x=\vec b\).`, ans: S`\(A=${M([[1, 0, -1], [0, 2, 1]])}\), \(\vec b=(2,-1)\)` },
  { level: 1, q: S`\(\vec x=(1,2)\) solves \(${M([[3, -1], [0, 4]])}\vec x=\vec b\). Find \(\vec b\).`, ans: S`\((1,8)\)` },
  { level: 1, q: S`True or false: \(A\vec x=\vec b\) is consistent exactly when \(\vec b\) is a combination of the rows of \(A\).`, ans: S`false --- of the columns` },
  { level: 2, q: S`Solve \(${M([[1, 1], [2, -1], [1, 3]])}\vec x=(3,3,5)\).`, ans: S`\(\vec x=(2,1)\)`, fig: P(rowPic([[[[1, 1, 3], [2, -1, 3], [1, 3, 5]], { label: "[A | b]" }]]), 2.8) },
  { level: 2, q: S`Is \((1,2,4)\) a combination of the columns of \(${M([[1, 0], [1, 1], [0, 2]])}\)?`, ans: S`no (a row \(0=2\) appears)` },
  { level: 2, q: S`Solve \(${M([[1, -1, 2], [0, 1, -1]])}\vec x=(4,1)\) and write the answer as \(\vec p+t\vec h\).`, ans: S`\((5,1,0)+t(-1,1,1)\)` },
  { level: 2, q: S`For which \(\vec b\) is \(${M([[1, 3], [-2, -6]])}\vec x=\vec b\) consistent?`, ans: S`\(b_2=-2b_1\)`, fig: vecs2([[[1, -2], "a₁", "blue"], [[3, -6], "a₂", "red", null, true]], { xmin: -1, xmax: 4, ymin: -7, ymax: 1 }) },
  { level: 2, q: S`\(A\vec p=\vec b\) and \(A\vec h=\vec 0\). Which of \(\vec p+2\vec h\), \(2\vec p\), \(\vec p-\vec h\) solve \(A\vec x=\vec b\) (assume \(\vec b\ne\vec 0\))?`, ans: S`\(\vec p+2\vec h\) and \(\vec p-\vec h\)` },
  { level: 3, space: 5, q: S`Prove: if \(\vec u\) and \(\vec v\) solve \(A\vec x=\vec b\), then \(\vec u-\vec v\) solves \(A\vec x=\vec 0\).`, ans: S`\(A(\vec u-\vec v)=\vec b-\vec b=\vec 0\)` },
  { level: 3, space: 5, q: S`Prove the matrices-equal theorem.`, ans: S`test on \(\vec e_1,\dots,\vec e_n\): the columns agree` },
  { level: 3, space: 5, q: S`For which \(k\) is \(${M([[1, "k"], [2, 4]])}\vec x=\vec b\) consistent for every \(\vec b\)?`, ans: S`\(k\ne2\)`, fig: vecs2([[[1, 2], "a₁", "blue"], [[2, 4], "a₂ when k = 2", "red", null, true]], { xmin: -1, xmax: 3, ymin: -1, ymax: 5 }) },
  { level: 3, space: 5, q: S`Find a \(2\times2\) matrix \(A\ne0\) and \(\vec b\ne\vec 0\) such that \(A\vec x=\vec b\) has no solution.`, ans: S`e.g. \(A=${M([[1, 1], [1, 1]])}\), \(\vec b=(1,0)\)` },
  { level: 3, space: 5, q: S`\(A\) is \(3\times2\) and \(A\vec x=\vec b\) has exactly one solution for some \(\vec b\). Explain why \(A\vec x=\vec 0\) has only \(\vec 0\), and why \(A\vec x=\vec c\) has no solution for some \(\vec c\).`, ans: S`uniqueness forces trivial null solutions; two columns span at most a plane in \(\mathbb R^3\)`, fig: P(rowPic([[[["*", "*"], ["*", "*"], ["*", "*"]], { label: "3 × 2" }]]), 1.8) },
];

export const WS = {
  code: "3.5",
  title: "Linear Systems as Ax = b",
  bigideas: S`Every linear system is a single equation \(A\vec x=\vec b\). Because \(A\vec x\) is a combination of the columns of \(A\), the system is consistent exactly when \(\vec b\) is such a combination, and a solution is the list of weights. Linearity shows that all solutions are one particular solution plus the solutions of \(A\vec x=\vec 0\). Two matrices that give the same product with every vector are equal --- but agreeing on one vector proves nothing.`,
  goals: ["Translate between systems and \\(A\\vec x=\\vec b\\).", "Decide consistency through the columns, and find conditions on \\(\\vec b\\).", "Solve \\(A\\vec x=\\vec b\\) by row reduction and interpret the solution as weights.", "Write all solutions as \\(\\vec p+\\vec h\\).", "Use the matrices-equal theorem."],
  curriculum: "Matrix algebra — matrix form of linear systems",
  vocab: [["\\(A\\vec x=\\vec b\\)", "matrix form of a system"], ["Consistent", "\\(\\vec b\\) is a combination of the columns"], ["Weights", "the entries of a solution"], ["Particular solution", "one \\(\\vec p\\) with \\(A\\vec p=\\vec b\\)"], ["Homogeneous solution", "\\(\\vec h\\) with \\(A\\vec h=\\vec 0\\)"]],
  hook: S`Two ingredients contain (protein, fat) of \((1,1)\) and \((1,-1)\) units per gram (the second one removes fat!). Can you reach exactly \((3,1)\)? Any target? Write the question as one matrix equation.`,
  concepts: NOTES,
  summary: [
    S`System \(\iff A\vec x=\vec b\).`,
    S`Consistent \(\iff\vec b\) is a combination of the columns.`,
    S`Solve by reducing \([A\mid\vec b]\).`,
    S`Solutions \(=\vec p+\{\vec h: A\vec h=\vec 0\}\).`,
    S`\(A\vec x=B\vec x\) for all \(\vec x\Rightarrow A=B\).`,
  ],
  tips: ["A holds the coefficients only.", "Missing unknowns give zeros in A.", "A row 0 = nonzero means b is not in the span of the columns.", "Check a particular solution by multiplying.", "One agreeing vector does not make matrices equal."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
