// LINALG1 Worksheet 6.2 — Computing Inverses by Row Reduction
// Self-contained: complete notes, 9 worked examples with figures, 13 problems with an answer key.
import { svgT } from "./figT.mjs";
import { S, def, thm } from "./wkit.mjs";
import { rowPic, matPic, patternPic } from "./fig3.mjs";
import { am, steps } from "../bank/la.mjs";

const P = (svg, w = 4.4) => svgT(svg, w);
const M = (m) => am(m, false);
const C = (...a) => am(a.map((x) => [x]), false);
const I = (A) => A.map((r, i) => [...r, ...A.map((_, j) => (i === j ? 1 : 0))]);
const AI = (A, lab = "[ A | I ]") => P(rowPic([[I(A), { label: lab }]]), 3.6);

const NOTES = [
  { h: "1. The method",
    lead: thm("inverse by row reduction", S`Row reduce \([\,A\mid I\,]\). If the left block becomes \(I\), the right block is \(A^{-1}\): \([\,A\mid I\,]\to[\,I\mid A^{-1}\,]\). If the left block gets a zero row, \(A\) is singular.`) + S`\pf{Column \(j\) of \(A^{-1}\) solves \(A\vec x=\vec e_j\); the reduction solves all \(n\) systems \([\,A\mid\vec e_j\,]\) at once.}`,
    fig: P(rowPic([[[["*", "*", 1, 0], ["*", "*", 0, 1]], { label: "[ A | I ]" }], "→", [[[1, 0, "*", "*"], [0, 1, "*", "*"]], { label: "[ I | A⁻¹ ]" }]]), 4.4), w: 0.5 },
  { h: "2. Doing it carefully",
    lead: S`\begin{itemize}[leftmargin=*,itemsep=1pt]
\item apply every operation to the \emph{whole} row of \([\,A\mid I\,]\);
\item use only row operations (no column operations);
\item go all the way to RREF: zeros above the pivots too;
\item check the result: \(AA^{-1}=I\).
\end{itemize}`,
    fig: AI([[1, 4], [2, 9]]), w: 0.5 },
  { h: "3. Singular matrices",
    lead: S`A zero row in the left block means fewer than \(n\) pivots. By the theory of systems, \(A\vec x=\vec 0\) then has nonzero solutions, so \(A\) has no inverse. Stop the computation there — the right block means nothing.`,
    fig: P(rowPic([[[[1, 1, 2, 1, 0, 0], [0, 1, 1, -2, 1, 0], [0, 0, 0, -1, -1, 1]], { row: 2, rowFill: "#fee2e2", label: "zero row on the left" }]]), 4), w: 0.5 },
  { h: "4. Special shapes",
    lead: S`\begin{itemize}[leftmargin=*,itemsep=1pt]
\item diagonal: \(\operatorname{diag}(d_1,\dots,d_n)^{-1}=\operatorname{diag}(1/d_1,\dots,1/d_n)\) when every \(d_i\ne0\);
\item triangular: the inverse of an invertible triangular matrix is triangular of the same kind;
\item \(2\times2\): the row reduction reproduces the formula with \(ad-bc\).
\end{itemize}`,
    fig: P(patternPic("lower", 3), 1.8), w: 0.6 },
  { h: "5. Many systems at once",
    lead: S`Once \(A^{-1}\) is known, every system \(A\vec x=\vec b\) is solved by one product \(\vec x=A^{-1}\vec b\). This pays off when the same \(A\) appears with many right-hand sides.`,
    fig: P(rowPic([[[[0, 1, -1], [-2, 2, -1], [1, -1, 1]], { label: "A⁻¹" }], [[[1], [2], [3]], { label: "b" }]]), 3.2), w: 0.5 },
];

const EXAMPLES = [
  { title: "A 2 × 2 inverse", q: S`Find \(A^{-1}\) for \(A=${M([[1, 4], [2, 9]])}\) by row reducing \([\,A\mid I\,]\).`,
    fig: AI([[1, 4], [2, 9]]),
    steps: [...steps(I([[1, 4], [2, 9]]), [
      [S`Clear below the first pivot.`, ["R2-2R1"]],
      [S`Clear above the second pivot.`, ["R1-4R2"]],
    ], { bar: 2, intro: "Write [A | I]" }).steps, S`\(A^{-1}=${M([[9, -4], [-2, 1]])}\). Check: \[${M([[1, 4], [2, 9]])}${M([[9, -4], [-2, 1]])}=${M([["9-8", "-4+4"], ["18-18", "-8+9"]])}=I\ \checkmark\]`],
    ans: S`\(${M([[9, -4], [-2, 1]])}\)` },
  { title: "A 3 × 3 inverse", q: S`Find the inverse of \(A=${M([[1, 0, 1], [1, 1, 2], [0, 1, 2]])}\).`,
    fig: AI([[1, 0, 1], [1, 1, 2], [0, 1, 2]]),
    steps: [...steps(I([[1, 0, 1], [1, 1, 2], [0, 1, 2]]), [
      [S`Clear column 1 below the pivot.`, ["R2-R1"]],
      [S`Clear column 2 below its pivot.`, ["R3-R2"]],
      [S`Clear column 3 above its pivot.`, ["R2-R3", "R1-R3"]],
    ], { bar: 3, intro: "Write [A | I]" }).steps, S`\(A^{-1}=${M([[0, 1, -1], [-2, 2, -1], [1, -1, 1]])}\). Check: \[${M([[1, 0, 1], [1, 1, 2], [0, 1, 2]])}${M([[0, 1, -1], [-2, 2, -1], [1, -1, 1]])}=${M([["0+0+1", "1+0-1", "-1+0+1"], ["0-2+2", "1+2-2", "-1-1+2"], ["0-2+2", "0+2-2", "0-1+2"]])}=I\ \checkmark\]`],
    ans: S`\(${M([[0, 1, -1], [-2, 2, -1], [1, -1, 1]])}\)` },
  { title: "A singular matrix", q: S`Try to invert \(A=${M([[1, 1, 2], [2, 3, 5], [3, 4, 7]])}\).`,
    fig: P(rowPic([[[[1, 1, 2], [2, 3, 5], [3, 4, 7]], { row: 2, label: "row 3 = row 1 + row 2" }]]), 2.4),
    steps: [...steps(I([[1, 1, 2], [2, 3, 5], [3, 4, 7]]), [
      [S`Clear column 1.`, ["R2-2R1", "R3-3R1"]],
      [S`Clear column 2 below its pivot.`, ["R3-R2"]],
    ], { bar: 3, intro: "Write [A | I]" }).steps, S`The left block has a zero row: only two pivots, so \(A\) is singular.`],
    ans: S`no inverse` },
  { title: "A swap and fractions", q: S`Find the inverse of \(A=${M([[0, 1, 2], [1, 0, 1], [2, 1, 0]])}\).`,
    fig: AI([[0, 1, 2], [1, 0, 1], [2, 1, 0]]),
    steps: [...steps(I([[0, 1, 2], [1, 0, 1], [2, 1, 0]]), [
      [S`The \((1,1)\) entry is 0: swap rows 1 and 2.`, ["R1<->R2"]],
      [S`Clear column 1 below the pivot.`, ["R3-2R1"]],
      [S`Clear column 2 below its pivot.`, ["R3-R2"]],
      [S`Make the third pivot 1.`, ["R3*-1/4"]],
      [S`Clear column 3 above its pivot.`, ["R2-2R3", "R1-R3"]],
    ], { bar: 3, intro: "Write [A | I]" }).steps, S`\(A^{-1}=\tfrac14${M([[-1, 2, 1], [2, -4, 2], [1, 2, -1]])}\). Check the first row of \(AA^{-1}\): \((0,1,2)\cdot\tfrac14(-1,2,1)=\tfrac14(0+2+2)=1\), \((0,1,2)\cdot\tfrac14(2,-4,2)=\tfrac14(0-4+4)=0\), \((0,1,2)\cdot\tfrac14(1,2,-1)=\tfrac14(0+2-2)=0\) ✓.`],
    ans: S`\(\tfrac14${M([[-1, 2, 1], [2, -4, 2], [1, 2, -1]])}\)` },
  { title: "A diagonal matrix", q: S`Invert \(D=\operatorname{diag}(2,-3,5)\).`,
    fig: P(patternPic("diag", 3), 1.8),
    steps: [...steps(I([[2, 0, 0], [0, -3, 0], [0, 0, 5]]), [
      [S`Each row needs only one scaling.`, ["R1*1/2", "R2*-1/3", "R3*1/5"]],
    ], { bar: 3, intro: "Write [D | I]" }).steps],
    ans: S`\(\operatorname{diag}(\tfrac12,-\tfrac13,\tfrac15)\)` },
  { title: "A lower triangular matrix", q: S`Invert \(L=${M([[1, 0, 0], [2, 1, 0], [-1, 3, 1]])}\).`,
    fig: P(patternPic("lower", 3), 1.8),
    steps: [...steps(I([[1, 0, 0], [2, 1, 0], [-1, 3, 1]]), [
      [S`Clear column 1 below the pivot.`, ["R2-2R1", "R3+R1"]],
      [S`Clear column 2 below its pivot.`, ["R3-3R2"]],
    ], { bar: 3, intro: "Write [L | I]" }).steps, S`\(L^{-1}=${M([[1, 0, 0], [-2, 1, 0], [7, -3, 1]])}\): lower triangular again.`],
    ans: S`\(${M([[1, 0, 0], [-2, 1, 0], [7, -3, 1]])}\)` },
  { title: "Several systems", q: S`With \(A\) from Example 2, solve \(A\vec x=(1,2,3)\) and \(A\vec x=(0,0,1)\).`,
    fig: P(rowPic([[[[0, 1, -1], [-2, 2, -1], [1, -1, 1]], { label: "A⁻¹" }], [[[1], [2], [3]], { label: "b" }]]), 3.2),
    steps: [S`\[A^{-1}${C(1, 2, 3)}=${M([[0, 1, -1], [-2, 2, -1], [1, -1, 1]])}${C(1, 2, 3)}=${C("0+2-3", "-2+4-3", "1-2+3")}=${C(-1, -1, 2)}.\]`, S`\[A^{-1}${C(0, 0, 1)}=${C(-1, -1, 1)}\] (column 3 of \(A^{-1}\)).`, S`Check the first: \[${M([[1, 0, 1], [1, 1, 2], [0, 1, 2]])}${C(-1, -1, 2)}=${C("-1+0+2", "-1-1+4", "0-1+4")}=${C(1, 2, 3)}\ \checkmark\]`],
    ans: S`\((-1,-1,2)\) and \((-1,-1,1)\)` },
  { title: "A parameter", q: S`For which \(k\) is \(A=${M([[1, 1, 0], [0, 1, 1], [1, 0, "k"]])}\) invertible?`,
    fig: P(matPic([[1, 1, 0], [0, 1, 1], [1, 0, "k"]], { cells: [[2, 2]], label: "A" }), 2.2),
    steps: [S`\(R_3\to R_3-R_1\): \[${M([[1, 1, 0], [0, 1, 1], [0, -1, "k"]])}\]`, S`\(R_3\to R_3+R_2\): \[${M([[1, 1, 0], [0, 1, 1], [0, 0, "k+1"]])}\]`, S`Three pivots exactly when \(k+1\ne0\).`],
    ans: S`every \(k\ne-1\)` },
  { title: "Why the method works", q: S`Explain why reducing \([\,A\mid I\,]\) to \([\,I\mid B\,]\) gives \(AB=I\).`,
    steps: [S`Write \(I=[\,\vec e_1\ \cdots\ \vec e_n\,]\) and \(B=[\,\vec b_1\ \cdots\ \vec b_n\,]\). The same operations reduce each \([\,A\mid\vec e_j\,]\) to \([\,I\mid\vec b_j\,]\).`, S`So \(\vec b_j\) solves \(A\vec x=\vec e_j\): \(A\vec b_j=\vec e_j\) for every \(j\), i.e. \(AB=[\,A\vec b_1\ \cdots\,]=I\).`, S`By the Invertible Matrix Theorem (6.4) a square right inverse is also a left inverse: \(B=A^{-1}\).`],
    ans: S`each column of \(B\) solves \(A\vec x=\vec e_j\)` },
];

const PROBLEMS = [
  { level: 1, q: S`Find \(A^{-1}\) for \(A=${M([[1, 2], [3, 7]])}\) by row reduction.`, ans: S`\(${M([[7, -2], [-3, 1]])}\)` },
  { level: 1, q: S`Invert \(\operatorname{diag}(4,-1,\tfrac12)\).`, ans: S`\(\operatorname{diag}(\tfrac14,-1,2)\)` },
  { level: 1, q: S`The left block of a reduced \([\,A\mid I\,]\) has a zero row. Is \(A\) invertible?`, ans: S`no` },
  { level: 2, q: S`Invert \(${M([[1, 2, 0], [0, 1, 0], [0, 3, 1]])}\).`, ans: S`\(${M([[1, -2, 0], [0, 1, 0], [0, -3, 1]])}\)`, fig: AI([[1, 2, 0], [0, 1, 0], [0, 3, 1]]) },
  { level: 2, q: S`Invert \(${M([[1, 1, 1], [0, 1, 1], [0, 0, 1]])}\).`, ans: S`\(${M([[1, -1, 0], [0, 1, -1], [0, 0, 1]])}\)` },
  { level: 2, q: S`Show that \(${M([[1, 2, 3], [1, 3, 4], [2, 5, 7]])}\) is singular by row reduction.`, ans: S`row 3 \(=\) row 1 \(+\) row 2: a zero row appears`, fig: P(matPic([[1, 2, 3], [1, 3, 4], [2, 5, 7]], { label: "A" }), 2.2) },
  { level: 2, q: S`Invert \(${M([[2, 0, 0], [1, 1, 0], [0, 0, 4]])}\).`, ans: S`\(${M([["\\tfrac12", 0, 0], ["-\\tfrac12", 1, 0], [0, 0, "\\tfrac14"]])}\)` },
  { level: 2, q: S`Using \(A^{-1}=${M([[1, 0, 2], [0, 1, 1], [1, 1, 0]])}\), solve \(A\vec x=(1,1,1)\) and \(A\vec x=(2,0,-1)\).`, ans: S`\((3,2,2)\) and \((0,-1,2)\)` },
  { level: 3, space: 5, q: S`For which \(a\) is \(${M([[1, 2, 1], [2, "a", 1], [1, 1, 1]])}\) invertible? Invert it for \(a=0\).`, ans: S`for every \(a\) (the reduction leaves the last pivot \(-1\)); \(a=0\): \(${M([[1, 1, -2], [1, 0, -1], [-2, -1, 4]])}\)`, fig: P(matPic([[1, 2, 1], [2, "a", 1], [1, 1, 1]], { cells: [[1, 1]], label: "A" }), 2.2) },
  { level: 3, space: 5, q: S`Prove that the inverse of an invertible upper triangular \(3\times3\) matrix is upper triangular.`, ans: S`reducing \([\,U\mid I\,]\) needs only scalings and upward replacements, which keep the right block upper triangular` },
  { level: 3, space: 5, q: S`Column 1 of \(A^{-1}\) is \((2,1,0)\). Which system does it solve?`, ans: S`\(A\vec x=\vec e_1\)` },
  { level: 3, space: 5, q: S`Find \(A\) if \(A^{-1}=${M([[1, 0, 0], [1, 1, 0], [1, 1, 1]])}\).`, ans: S`\(A=${M([[1, 0, 0], [-1, 1, 0], [0, -1, 1]])}\)`, fig: P(matPic([[1, 0, 0], [1, 1, 0], [1, 1, 1]], { label: "A⁻¹" }), 2.2) },
  { level: 3, space: 5, q: S`Explain why the row reduction of \([\,A\mid I\,]\) for a \(2\times2\) matrix with \(a\ne0\) reproduces the formula \(A^{-1}=\tfrac1{ad-bc}${M([["d", "-b"], ["-c", "a"]])}\).`, ans: S`\(R_2-\tfrac caR_1\) gives pivot \(\tfrac{ad-bc}a\); finishing the reduction gives exactly that matrix` },
];

export const WS = {
  code: "6.2",
  title: "Computing Inverses by Row Reduction",
  bigideas: S`To invert any square matrix, row reduce \([\,A\mid I\,]\). When the left block becomes \(I\), the right block is \(A^{-1}\); a zero row on the left means \(A\) is singular. The method works because column \(j\) of \(A^{-1}\) solves \(A\vec x=\vec e_j\), and \([\,A\mid I\,]\) solves all these systems at once.`,
  goals: ["Invert matrices by reducing \\([\\,A\\mid I\\,]\\).", "Detect singular matrices.", "Invert diagonal and triangular matrices.", "Solve several systems with one inverse.", "Explain why the method works."],
  curriculum: "Inverses and determinants — computing inverses by row reduction",
  vocab: [["\\([\\,A\\mid I\\,]\\)", "A with I attached"], ["Left block", "becomes I or a zero row"], ["Right block", "becomes \\(A^{-1}\\)"], ["Gauss–Jordan", "reduce all the way to RREF"], ["Singular", "a zero row on the left"]],
  hook: S`Solving \(A\vec x=\vec b\) for ten different \(\vec b\) means ten row reductions — or one reduction of a cleverly chosen matrix. Which matrix?`,
  concepts: NOTES,
  summary: [
    S`\([\,A\mid I\,]\to[\,I\mid A^{-1}\,]\).`,
    S`Zero row on the left \(\Rightarrow\) singular.`,
    S`Column \(j\) of \(A^{-1}\) solves \(A\vec x=\vec e_j\).`,
    S`Diagonal and triangular inverses keep their shape.`,
    S`\(\vec x=A^{-1}\vec b\) for every \(\vec b\).`,
  ],
  tips: ["Apply each operation to the whole row.", "Swap when a pivot position holds 0.", "Clear above the pivots too.", "Check with one product.", "Stop at a zero row on the left."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
