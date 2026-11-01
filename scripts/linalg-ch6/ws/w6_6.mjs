// LINALG1 Worksheet 6.6 — Properties of Determinants
// Self-contained: complete notes, 9 worked examples with figures, 13 problems with an answer key.
import { svgT } from "./figT.mjs";
import { S, thm } from "./wkit.mjs";
import { rowPic, matPic } from "./fig3.mjs";
import { vecs2 } from "./fig5.mjs";
import { am, steps } from "../bank/la.mjs";

const P = (svg, w = 4.4) => svgT(svg, w);
const M = (m) => am(m, false);
const D = (m) => S`\left|\begin{array}{${"c".repeat(m[0].length)}}${m.map((r) => r.join(" & ")).join(" \\\\ ")}\end{array}\right|`;

const NOTES = [
  { h: "1. Row operations",
    lead: thm("effect on det", S`If \(B\) comes from \(A\) by one row operation: a swap gives \(\det B=-\det A\); multiplying a row by \(k\) gives \(\det B=k\det A\); adding a multiple of one row to another gives \(\det B=\det A\).`),
    fig: P(rowPic([[[["R₁"], ["R₂"]], { label: "swap: −1" }], " ", [[["kR₁"], ["R₂"]], { label: "scale: × k" }], " ", [[["R₁"], ["R₂+cR₁"]], { label: "replace: × 1" }]]), 4.4), w: 0.5 },
  { h: "2. Determinants by row reduction",
    lead: S`Reduce \(A\) to a triangular \(U\), recording a factor \(-1\) for each swap and \(k\) for each scaling by \(k\). Then \[\det U=(\text{product of the factors})\cdot\det A,\] and \(\det U\) is the product of the diagonal of \(U\).`,
    fig: P(rowPic([[[["*", "*", "*"], ["*", "*", "*"], ["*", "*", "*"]], { label: "A" }], "→", [[["a", "*", "*"], [0, "b", "*"], [0, 0, "c"]], { label: "U: det = abc" }]]), 4.2), w: 0.5 },
  { h: "3. The determinant test",
    lead: thm("invertibility", S`\(A\) is invertible \(\iff\det A\ne0\).`) + S`\pf{Row operations multiply \(\det\) by nonzero numbers. The RREF is \(I\) (det 1) for invertible \(A\), and has a zero row (det 0) otherwise.}`,
    fig: vecs2([[[2, 0], "a₁", "blue"], [[1, 2], "a₂", "red"], [[3, 2], "a₂ + a₁", "green", null, true]], { xmin: -1, xmax: 4, ymin: -1, ymax: 3 }), w: 0.5,
    body: S`A shear keeps base and height, so the area — the determinant — is unchanged.` },
  { h: "4. Products, transposes, inverses",
    lead: thm("rules", S`\(\det(AB)=\det A\det B\), \(\det A^T=\det A\), \(\det A^{-1}=1/\det A\), \(\det(kA)=k^n\det A\) for \(n\times n\) matrices.`) + S`\pf{For elementary \(E\), \(\det(EB)=\det E\det B\) is the row-operation rule; write an invertible \(A\) as a product of elementary matrices. \(\det A\det A^{-1}=\det I=1\). Each of the \(n\) rows of \(kA\) is scaled by \(k\).}`,
    fig: P(rowPic([[[[1, 2], [3, 4]], { label: "det −2" }], [[[2, 0], [1, 3]], { label: "det 6" }], "=", [[[4, 6], [10, 12]], { label: "det −12" }]]), 4.2), w: 0.5 },
  { h: "5. Warnings",
    lead: S`\begin{itemize}[leftmargin=*,itemsep=1pt]
\item \(\det(A+B)\ne\det A+\det B\) in general;
\item \(\det(kA)=k^n\det A\), not \(k\det A\);
\item scaling a row to make a pivot 1 changes the determinant — undo it in the bookkeeping.
\end{itemize}`,
    fig: P(matPic([[1, 2, 3], [2, 4, 6], [1, 0, 1]], { row: 1, label: "row 2 = 2·row 1: det 0" }), 2.4), w: 0.55 },
];

const EXAMPLES = [
  { title: "Replacements only", q: S`Compute \(\det${M([[1, 3, 2], [2, 7, 5], [1, 1, 4]])}\) by row reduction.`,
    fig: P(matPic([[1, 3, 2], [2, 7, 5], [1, 1, 4]], { label: "A" }), 2.2),
    steps: [...steps([[1, 3, 2], [2, 7, 5], [1, 1, 4]], [
      [S`Replacements (det unchanged): clear column 1.`, ["R2-2R1", "R3-R1"]],
      [S`Replacement: clear column 2.`, ["R3+2R2"]],
    ], { bar: false, intro: "Start with A" }).steps, S`\(\det A=\det U=1\cdot1\cdot4=4\).`],
    ans: S`\(4\)` },
  { title: "A swap and a scaling", q: S`Compute \(\det${M([[0, 3, 6], [2, 1, 1], [1, 1, 2]])}\).`,
    fig: P(matPic([[0, 3, 6], [2, 1, 1], [1, 1, 2]], { cells: [[0, 0]], label: "pivot position holds 0" }), 2.4),
    steps: [...steps([[0, 3, 6], [2, 1, 1], [1, 1, 2]], [
      [S`Swap (factor \(-1\)).`, ["R1<->R3"]],
      [S`Replacement (factor 1).`, ["R2-2R1"]],
      [S`Scale row 3 by \(\tfrac13\) (factor \(\tfrac13\)).`, ["R3*1/3"]],
      [S`Replacement (factor 1).`, ["R3+R2"]],
    ], { bar: false, intro: "Start with A" }).steps, S`\(\det U=1(-1)(-1)=1\) and \(\det U=(-1)\cdot\tfrac13\cdot\det A\), so \(\det A=1\div\big(-\tfrac13\big)=-3\).`, S`Check along column 1: \(0-2${D([[3, 6], [1, 2]])}+1${D([[3, 6], [1, 1]])}=-2(6-6)+(3-6)=-3\) ✓.`],
    ans: S`\(-3\)` },
  { title: "Proportional rows", q: S`Compute \(\det${M([[1, 2, 3], [2, 4, 6], [1, 0, 1]])}\).`,
    fig: P(matPic([[1, 2, 3], [2, 4, 6], [1, 0, 1]], { row: 1, label: "row 2 = 2·row 1" }), 2.4),
    steps: [...steps([[1, 2, 3], [2, 4, 6], [1, 0, 1]], [
      [S`Replacements: clear column 1.`, ["R2-2R1", "R3-R1"]],
    ], { bar: false, intro: "Start with A" }).steps, S`Row 2 is now zero: an echelon form has a zero row, so \(\det A=0\) and \(A\) is singular.`],
    ans: S`\(0\)` },
  { title: "The rules in action", q: S`\(A,B\) are \(3\times3\) with \(\det A=-3\), \(\det B=5\). Find \(\det(AB)\), \(\det(A^2B^{-1})\), \(\det(-2A)\), \(\det(A^TA)\).`,
    fig: P(rowPic([[[["*", "*", "*"], ["*", "*", "*"], ["*", "*", "*"]], { label: "det A = −3" }], [[["*", "*", "*"], ["*", "*", "*"], ["*", "*", "*"]], { label: "det B = 5" }]]), 3.4),
    steps: [S`\(\det(AB)=(-3)(5)=-15\).`, S`\(\det(A^2B^{-1})=(-3)^2\cdot\tfrac15=\tfrac95\).`, S`\(\det(-2A)=(-2)^3(-3)=24\).`, S`\(\det(A^TA)=(-3)(-3)=9\).`],
    ans: S`\(-15,\ \tfrac95,\ 24,\ 9\)` },
  { title: "Checking det(AB)", q: S`Verify \(\det(AB)=\det A\det B\) for \(A=${M([[1, 2], [3, 4]])}\), \(B=${M([[2, 0], [1, 3]])}\).`,
    fig: P(rowPic([[[[1, 2], [3, 4]], { label: "A" }], [[[2, 0], [1, 3]], { label: "B" }], "=", [[[4, 6], [10, 12]], { label: "AB" }]]), 3.8),
    steps: [S`\(\det A=4-6=-2\), \(\det B=6-0=6\).`, S`\[AB=${M([[1, 2], [3, 4]])}${M([[2, 0], [1, 3]])}=${M([["2+2", "0+6"], ["6+4", "0+12"]])}=${M([[4, 6], [10, 12]])}.\]`, S`\(\det(AB)=48-60=-12=(-2)(6)\) ✓.`],
    ans: S`\(-12\)` },
  { title: "A chain of operations", q: S`\(\det A=2\) (\(3\times3\)). \(B\) is obtained by \(R_1\leftrightarrow R_2\), then \(R_3\to4R_3\), then \(R_2\to R_2+5R_1\). Find \(\det B\).`,
    fig: P(rowPic([[[["R₁"], ["R₂"], ["R₃"]], { label: "A" }], "→", [[["R₂"], ["R₁+5R₂"], ["4R₃"]], { label: "B" }]]), 3.2),
    steps: [S`The swap multiplies by \(-1\); the scaling by 4; the replacement by 1.`, S`\(\det B=(-1)(4)(1)\cdot2=-8\).`],
    ans: S`\(-8\)` },
  { title: "A parameter", q: S`For which \(t\) is \(${M([[1, 1, 1], [1, 2, 3], [1, 3, "t"]])}\) singular?`,
    fig: P(matPic([[1, 1, 1], [1, 2, 3], [1, 3, "t"]], { cells: [[2, 2]], label: "A" }), 2.2),
    steps: [S`Replacements \(R_2-R_1\), \(R_3-R_1\): \[${M([[1, 1, 1], [0, 1, 2], [0, 2, "t-1"]])}\]`, S`Replacement \(R_3-2R_2\): \[${M([[1, 1, 1], [0, 1, 2], [0, 0, "t-5"]])}\]`, S`Only replacements: \(\det A=1\cdot1\cdot(t-5)=t-5\). Singular for \(t=5\).`],
    ans: S`\(t=5\)` },
  { title: "Transpose", q: S`Verify \(\det A^T=\det A\) for \(A=${M([[2, 1, 0], [1, 3, 1], [0, 1, 2]])}\) without computing twice.`,
    fig: P(matPic([[2, 1, 0], [1, 3, 1], [0, 1, 2]], { label: "A = Aᵀ" }), 2.2),
    steps: [S`\(A\) is symmetric: \(A^T=A\), so the statement is automatic here.`, S`Its value, along row 1: \(2${D([[3, 1], [1, 2]])}-1${D([[1, 1], [0, 2]])}+0=2(5)-1(2)=8\).`],
    ans: S`\(8\)` },
  { title: "The determinant of an inverse", q: S`Prove \(\det A^{-1}=1/\det A\) and use it for \(A=${M([[3, 1], [5, 2]])}\).`,
    steps: [S`\(\det A\det A^{-1}=\det(AA^{-1})=\det I=1\), so \(\det A^{-1}=1/\det A\).`, S`\(\det A=6-5=1\), so \(\det A^{-1}=1\). Indeed \(A^{-1}=${M([[2, -1], [-5, 3]])}\) has \(\det=6-5=1\) ✓.`],
    ans: S`\(1\)` },
];

const PROBLEMS = [
  { level: 1, q: S`\(\det A=7\). Swapping two rows gives \(B\). \(\det B=\)?`, ans: S`\(-7\)` },
  { level: 1, q: S`\(\det A=7\) (\(2\times2\)). \(\det(3A)=\)?`, ans: S`\(63\)` },
  { level: 1, q: S`\(\det A=4\). \(\det A^{-1}=\)?`, ans: S`\(\tfrac14\)` },
  { level: 2, q: S`Compute \(\det${M([[2, 4, 2], [1, 5, 3], [3, 1, 4]])}\) by row reduction.`, ans: S`\(26\)`, fig: P(matPic([[2, 4, 2], [1, 5, 3], [3, 1, 4]], { label: "factor 2 from row 1" }), 2.4) },
  { level: 2, q: S`Compute \(\det${M([[1, 1, 1], [1, 2, 3], [1, 3, 5]])}\).`, ans: S`\(0\)` },
  { level: 2, q: S`\(\det A=-2\), \(\det B=3\) (\(4\times4\)). Find \(\det(A^TB^2)\).`, ans: S`\(-18\)` },
  { level: 2, q: S`\(B\) comes from \(A\) by \(R_2\to-3R_2\), then \(R_1\leftrightarrow R_3\). \(\det A=5\). \(\det B=\)?`, ans: S`\(15\)`, fig: P(rowPic([[[["R₁"], ["R₂"], ["R₃"]], { label: "A" }], "→", [[["R₃"], ["−3R₂"], ["R₁"]], { label: "B" }]]), 3.2) },
  { level: 2, q: S`For which \(k\) is \(${M([[1, 2, 1], [2, 5, 3], [1, 3, "k"]])}\) singular?`, ans: S`\(k=2\)` },
  { level: 3, space: 5, q: S`Prove \(\det(kA)=k^n\det A\) for \(n\times n\) \(A\).`, ans: S`each of the \(n\) rows is scaled by \(k\)` },
  { level: 3, space: 5, q: S`\(Q^TQ=I\). Prove \(\det Q=\pm1\).`, ans: S`\((\det Q)^2=\det(Q^TQ)=1\)`, fig: P(matPic([["3/5", "−4/5"], ["4/5", "3/5"]], { label: "an example Q" }), 2) },
  { level: 3, space: 5, q: S`Give \(2\times2\) matrices with \(\det(A+B)\ne\det A+\det B\).`, ans: S`e.g. \(A=B=I\): \(4\ne2\)` },
  { level: 3, space: 5, q: S`\(A\) is \(3\times3\) and \(A^3=2A\). Find all possible values of \(\det A\).`, ans: S`\((\det A)^3=8\det A\): \(0\) or \(\pm2\sqrt2\)` },
  { level: 3, space: 5, q: S`Compute \(${D([[1, 1, 1], [1, 2, 4], [1, 3, 9]])}\) by row reduction and compare with \((b-a)(c-a)(c-b)\).`, ans: S`\(2=(1)(2)(1)\)`, fig: P(matPic([[1, 1, 1], [1, 2, 4], [1, 3, 9]], { label: "Vandermonde" }), 2.2) },
];

export const WS = {
  code: "6.6",
  title: "Properties of Determinants",
  bigideas: S`A swap negates the determinant, scaling a row scales it, and a replacement leaves it unchanged — so a row reduction to triangular form computes \(\det A\) quickly. The same facts show \(\det A\ne0\iff A\) invertible and give the rules \(\det(AB)=\det A\det B\), \(\det A^T=\det A\), \(\det A^{-1}=1/\det A\), \(\det(kA)=k^n\det A\).`,
  goals: ["Track how row operations change det.", "Compute determinants by row reduction.", "Use the determinant test.", "Apply the product, transpose, inverse and scalar rules.", "Avoid the additive trap."],
  curriculum: "Inverses and determinants — properties of determinants",
  vocab: [["Swap", "× (−1)"], ["Scale a row", "× k"], ["Replacement", "unchanged"], ["\\(\\det(AB)\\)", "\\(\\det A\\det B\\)"], ["\\(\\det(kA)\\)", "\\(k^n\\det A\\)"]],
  hook: S`Cofactor expansion of a \(10\times10\) determinant has over three million terms. How can row reduction do it in a few hundred steps?`,
  concepts: NOTES,
  summary: [
    S`Swap \(\times(-1)\), scale \(\times k\), replace \(\times1\).`,
    S`\(\det A\) = diagonal of \(U\) ÷ recorded factors.`,
    S`\(\det A\ne0\iff A\) invertible.`,
    S`\(\det(AB)=\det A\det B\), \(\det A^T=\det A\).`,
    S`\(\det A^{-1}=1/\det A\), \(\det(kA)=k^n\det A\).`,
  ],
  tips: ["Count swaps carefully.", "Undo every scaling you used.", "Replacements are free.", "A zero row means det 0.", "kA scales n rows."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
