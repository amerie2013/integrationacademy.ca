// LINALG1 Worksheet 6.5 — Determinants and Cofactor Expansion
// Self-contained: complete notes, 9 worked examples with figures, 13 problems with an answer key.
import { svgT } from "./figT.mjs";
import { S, def, thm } from "./wkit.mjs";
import { rowPic, matPic, patternPic } from "./fig3.mjs";
import { vecs2 } from "./fig5.mjs";
import { am } from "../bank/la.mjs";

const P = (svg, w = 4.4) => svgT(svg, w);
const M = (m) => am(m, false);
const D = (m) => S`\left|\begin{array}{${"c".repeat(m[0].length)}}${m.map((r) => r.join(" & ")).join(" \\\\ ")}\end{array}\right|`;
const para = (u, v, view) => vecs2([[u, "a₁", "blue"], [v, "a₂", "red"], [[u[0] + v[0], u[1] + v[1]], "", "red", u, true], [[u[0] + v[0], u[1] + v[1]], "", "blue", v, true]], view);

const NOTES = [
  { h: "1. 2 × 2 determinants",
    lead: def("determinant (2 × 2)", S`\(\det${M([["a", "b"], ["c", "d"]])}=${D([["a", "b"], ["c", "d"]])}=ad-bc\). Its absolute value is the area of the parallelogram on the columns; the sign records orientation.`),
    fig: para([5, 1], [2, 3], { xmin: -1, xmax: 8, ymin: -1, ymax: 5 }), w: 0.5 },
  { h: "2. Minors and cofactors",
    lead: def("minor, cofactor", S`\(M_{ij}\) is the determinant of \(A\) with row \(i\) and column \(j\) deleted; the cofactor is \(C_{ij}=(-1)^{i+j}M_{ij}\).`),
    fig: P(rowPic([[[[4, -1, 2], [0, 3, 1], [2, 1, 5]], { row: 1, col: 2, label: "delete row 2, column 3" }], "→", [[[4, -1], [2, 1]], { label: "M₂₃" }]]), 4), w: 0.5,
    body: S`Signs follow a checkerboard starting with \(+\) in the top-left corner.` },
  { h: "3. Cofactor expansion",
    lead: thm("expansion", S`For any row \(i\): \(\det A=\sum_j a_{ij}C_{ij}\); for any column \(j\): \(\det A=\sum_i a_{ij}C_{ij}\). All expansions agree.`),
    fig: P(matPic([["+", "−", "+"], ["−", "+", "−"], ["+", "−", "+"]], { label: "signs (−1)^{i+j}" }), 2.2), w: 0.55,
    body: S`Choose the row or column with the most zeros: each zero entry removes a whole term.` },
  { h: "4. Triangular matrices",
    lead: thm("triangular", S`For a triangular matrix, \(\det A=a_{11}a_{22}\cdots a_{nn}\).`) + S`\pf{Expand along the column (or row) that contains only the diagonal entry, and repeat on the smaller triangular matrix.}`,
    fig: P(patternPic("lower", 4), 2), w: 0.6 },
  { h: "5. The determinant test",
    lead: thm("invertibility", S`\(A\) is invertible \(\iff\det A\ne0\). (Proved with row operations in 6.6.)`),
    fig: vecs2([[[2, 1], "a₁", "blue"], [[4, 2], "a₂ = 2a₁", "red"]], { xmin: -1, xmax: 5, ymin: -1, ymax: 3 }), w: 0.5,
    body: S`Parallel columns span no area: \(\det=0\).` },
];

const EXAMPLES = [
  { title: "A 2 × 2 determinant as an area", q: S`Compute \(\det${M([[5, 2], [1, 3]])}\) and interpret it.`,
    fig: para([5, 1], [2, 3], { xmin: -1, xmax: 8, ymin: -1, ymax: 5 }),
    steps: [S`\[${D([[5, 2], [1, 3]])}=5(3)-2(1)=15-2=13.\]`, S`The parallelogram on \((5,1)\) and \((2,3)\) has area 13, and the order is counterclockwise (positive sign). Since \(13\ne0\), the matrix is invertible.`],
    ans: S`\(13\)` },
  { title: "Expansion along row 1", q: S`Compute \(\det A\) for \(A=${M([[1, 3, -2], [0, 2, 1], [4, 1, 3]])}\).`,
    fig: P(matPic([[1, 3, -2], [0, 2, 1], [4, 1, 3]], { row: 0, label: "expand along row 1" }), 2.2),
    steps: [S`Signs \(+,-,+\): \[\det A=1${D([[2, 1], [1, 3]])}-3${D([[0, 1], [4, 3]])}+(-2)${D([[0, 2], [4, 1]])}.\]`, S`Minors: \(${D([[2, 1], [1, 3]])}=6-1=5\), \(${D([[0, 1], [4, 3]])}=0-4=-4\), \(${D([[0, 2], [4, 1]])}=0-8=-8\).`, S`\[\det A=1(5)-3(-4)-2(-8)=5+12+16=33.\]`],
    ans: S`\(33\)` },
  { title: "A column with one nonzero entry", q: S`Compute \(\det${M([[2, 0, 1], [3, 0, 4], [1, 5, 2]])}\).`,
    fig: P(matPic([[2, 0, 1], [3, 0, 4], [1, 5, 2]], { col: 1, label: "expand along column 2" }), 2.2),
    steps: [S`Column 2 is \((0,0,5)\); the entry 5 sits in position \((3,2)\), sign \((-1)^{3+2}=-1\).`, S`\[\det A=-5${D([[2, 1], [3, 4]])}=-5(8-3)=-25.\]`],
    ans: S`\(-25\)` },
  { title: "Two cofactors", q: S`For \(A=${M([[4, -1, 2], [0, 3, 1], [2, 1, 5]])}\) find \(C_{23}\) and \(C_{31}\).`,
    fig: P(rowPic([[[[4, -1, 2], [0, 3, 1], [2, 1, 5]], { row: 1, col: 2, label: "A" }], "→", [[[4, -1], [2, 1]], { label: "M₂₃" }]]), 3.6),
    steps: [S`\(C_{23}=(-1)^{5}${D([[4, -1], [2, 1]])}=-(4+2)=-6\).`, S`\(C_{31}=(-1)^{4}${D([[-1, 2], [3, 1]])}=-1-6=-7\).`],
    ans: S`\(C_{23}=-6\), \(C_{31}=-7\)` },
  { title: "A triangular 4 × 4", q: S`Compute \(\det${M([[2, 0, 0, 0], [1, -1, 0, 0], [5, 3, 4, 0], [7, 2, 1, 3]])}\).`,
    fig: P(patternPic("lower", 4), 2),
    steps: [S`Expand along row 1 (only the 2): \(2${D([[-1, 0, 0], [3, 4, 0], [2, 1, 3]])}\); again along row 1: \(2(-1)${D([[4, 0], [1, 3]])}=2(-1)(12)\).`, S`\(=-24\), the product of the diagonal \(2(-1)(4)(3)\).`],
    ans: S`\(-24\)` },
  { title: "A 4 × 4 with many zeros", q: S`Compute \(\det${M([[2, 0, 0, 1], [0, 1, 3, 0], [0, 0, 2, 0], [1, 0, 0, 1]])}\).`,
    fig: P(matPic([[2, 0, 0, 1], [0, 1, 3, 0], [0, 0, 2, 0], [1, 0, 0, 1]], { row: 2, label: "expand along row 3" }), 2.6),
    steps: [S`Row 3 is \((0,0,2,0)\); position \((3,3)\) has sign \(+\): \(\det=2${D([[2, 0, 1], [0, 1, 0], [1, 0, 1]])}\).`, S`Expand the \(3\times3\) along its row 2 \((0,1,0)\), sign \(+\): \(1${D([[2, 1], [1, 1]])}=2-1=1\).`, S`\(\det=2(1)=2\).`],
    ans: S`\(2\)` },
  { title: "Area from four vertices", q: S`A parallelogram has vertices \((1,1)\), \((4,2)\), \((2,5)\), \((5,6)\). Find its area.`,
    fig: para([3, 1], [1, 4], { xmin: -1, xmax: 5, ymin: -1, ymax: 6 }),
    steps: [S`Edges from \((1,1)\): \((4,2)-(1,1)=(3,1)\) and \((2,5)-(1,1)=(1,4)\).`, S`\[${D([[3, 1], [1, 4]])}=12-1=11.\]`, S`Area \(=|11|=11\).`],
    ans: S`\(11\)` },
  { title: "A parameter", q: S`For which \(x\) is \(${M([["x", 2], [2, "x-3"]])}\) singular?`,
    fig: P(matPic([["x", 2], [2, "x−3"]], { label: "A" }), 1.8),
    steps: [S`\(\det=x(x-3)-4=x^2-3x-4=(x-4)(x+1)\).`, S`Singular \(\iff\det=0\iff x=4\) or \(x=-1\).`],
    ans: S`\(x=4\) or \(x=-1\)` },
  { title: "Why triangular is easy", q: S`Explain, using cofactor expansion, why \(\det${M([["a", "b", "c"], [0, "d", "e"], [0, 0, "f"]])}=adf\).`,
    steps: [S`Expand along column 1 \((a,0,0)\): only \(a\) survives, \(\det=a${D([["d", "e"], [0, "f"]])}\).`, S`\(${D([["d", "e"], [0, "f"]])}=df-0\cdot e=df\). So \(\det=adf\).`],
    ans: S`\(adf\)` },
];

const PROBLEMS = [
  { level: 1, q: S`\(\det${M([[7, 3], [2, 1]])}=\)?`, ans: S`\(1\)` },
  { level: 1, q: S`\(\det${M([[3, 0, 0], [2, 1, 0], [4, 5, -2]])}=\)?`, ans: S`\(-6\)` },
  { level: 1, q: S`Find the area of the parallelogram on \((3,1)\) and \((1,4)\).`, ans: S`\(11\)`, fig: para([3, 1], [1, 4], { xmin: -1, xmax: 5, ymin: -1, ymax: 6 }) },
  { level: 2, q: S`Compute \(\det${M([[2, 1, 3], [0, 4, 1], [1, 0, 2]])}\).`, ans: S`\(5\)` },
  { level: 2, q: S`Compute \(\det${M([[1, 2, 1], [3, 1, 0], [2, 0, 1]])}\) by expanding along column 3.`, ans: S`\(-7\)`, fig: P(matPic([[1, 2, 1], [3, 1, 0], [2, 0, 1]], { col: 2, label: "column 3" }), 2.2) },
  { level: 2, q: S`Find the cofactor \(C_{12}\) of \(${M([[1, 2, 1], [3, 1, 0], [2, 0, 1]])}\).`, ans: S`\(-3\)` },
  { level: 2, q: S`Compute \(\det${M([[1, 0, 2, 1], [0, 3, 0, 0], [2, 1, 1, 0], [1, 0, 0, 1]])}\).`, ans: S`\(-12\)`, fig: P(matPic([[1, 0, 2, 1], [0, 3, 0, 0], [2, 1, 1, 0], [1, 0, 0, 1]], { row: 1, label: "row 2 helps" }), 2.6) },
  { level: 2, q: S`For which \(t\) is \(${M([["t", 3], [3, "t"]])}\) singular?`, ans: S`\(t=\pm3\)` },
  { level: 3, space: 5, q: S`For which \(k\) is \(${M([[1, 0, "k"], [2, 1, 0], [0, 1, 1]])}\) singular?`, ans: S`\(k=-\tfrac12\) (\(\det=1+2k\))` },
  { level: 3, space: 5, q: S`Find the area of the triangle with vertices \((0,0)\), \((4,1)\), \((2,5)\).`, ans: S`\(9\)`, fig: vecs2([[[4, 1], "", "blue"], [[2, 5], "", "red"]], { xmin: -1, xmax: 5, ymin: -1, ymax: 6 }, { segs: [{ pts: [[4, 1], [2, 5]], color: "#94a3b8", w: 1.5 }] }) },
  { level: 3, space: 5, q: S`Show that a \(3\times3\) matrix with two equal rows has determinant 0 by expanding along the third row.`, ans: S`each \(2\times2\) minor has two equal rows, so it is 0` },
  { level: 3, space: 5, q: S`Prove \(\det(kA)=k^2\det A\) for \(2\times2\) matrices.`, ans: S`\((ka)(kd)-(kb)(kc)=k^2(ad-bc)\)` },
  { level: 3, space: 5, q: S`Compute \(${D([["x", 1, 1], [1, "x", 1], [1, 1, "x"]])}\) and factor it.`, ans: S`\(x^3-3x+2=(x-1)^2(x+2)\)` },
];

export const WS = {
  code: "6.5",
  title: "Determinants and Cofactor Expansion",
  bigideas: S`The determinant turns a square matrix into one number. For \(2\times2\) it is \(ad-bc\), the signed area of the parallelogram on the columns. Larger determinants are computed by cofactor expansion along any row or column — choose one with many zeros. Triangular determinants are products of the diagonal, and \(\det A\ne0\) exactly when \(A\) is invertible.`,
  goals: ["Compute \\(2\\times2\\) determinants and areas.", "Find minors and cofactors.", "Expand along any row or column.", "Use triangular matrices.", "Use \\(\\det A\\ne0\\iff\\) invertible."],
  curriculum: "Inverses and determinants — determinants by cofactor expansion",
  vocab: [["\\(\\det A\\)", "the determinant"], ["Minor \\(M_{ij}\\)", "delete row i, column j"], ["Cofactor", "\\(C_{ij}=(-1)^{i+j}M_{ij}\\)"], ["Expansion", "\\(\\sum a_{ij}C_{ij}\\)"], ["Signed area", "\\(ad-bc\\)"]],
  hook: S`One number that tells you whether a matrix can be undone — and how much it stretches area. How is it built?`,
  concepts: NOTES,
  summary: [
    S`\(\det${M([["a", "b"], ["c", "d"]])}=ad-bc\).`,
    S`\(C_{ij}=(-1)^{i+j}M_{ij}\).`,
    S`Expand along any row or column.`,
    S`Triangular: product of the diagonal.`,
    S`\(\det A\ne0\iff A\) invertible.`,
  ],
  tips: ["Start the checkerboard with + in the corner.", "Delete both the row and the column.", "Use the line with most zeros.", "Absolute value for area.", "Check small cases by another expansion."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
