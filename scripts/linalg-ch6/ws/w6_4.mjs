// LINALG1 Worksheet 6.4 — The Invertible Matrix Theorem
// Self-contained: complete notes, 9 worked examples with figures, 13 problems with an answer key.
import { svgT } from "./figT.mjs";
import { S, thm } from "./wkit.mjs";
import { rowPic, matPic } from "./fig3.mjs";
import { vecs3, planeFig } from "./fig5.mjs";
import { am, steps } from "../bank/la.mjs";

const P = (svg, w = 4.4) => svgT(svg, w);
const M = (m) => am(m, false);
const C = (...a) => am(a.map((x) => [x]), false);

const NOTES = [
  { h: "1. The theorem",
    lead: thm("Invertible Matrix Theorem", S`For an \(n\times n\) matrix \(A\) the following are equivalent:
\begin{enumerate}[label=(\alph*),leftmargin=*,itemsep=0pt]
\item \(A\) is invertible; \item the RREF of \(A\) is \(I_n\); \item \(A\) has \(n\) pivots;
\item \(A\vec x=\vec 0\) has only the trivial solution; \item the columns are independent;
\item the columns span \(\mathbb R^n\); \item \(A\vec x=\vec b\) is consistent for every \(\vec b\);
\item \(A\vec x=\vec b\) has a unique solution for every \(\vec b\); \item \(A\) is a product of elementary matrices;
\item \(A^T\) is invertible; \item \(CA=I\) for some \(C\); \item \(AD=I\) for some \(D\).
\end{enumerate}`),
    fig: P(rowPic([[[["■", "*", "*"], [0, "■", "*"], [0, 0, "■"]], { label: "all true" }], " ", [[["■", "*", "*"], [0, "■", "*"], [0, 0, 0]], { label: "all false" }]]), 4), w: 0.48 },
  { h: "2. How the pieces connect",
    lead: S`For a \emph{square} matrix "a pivot in every column" (independence, only the trivial solution) and "a pivot in every row" (spanning, always consistent) are the same statement: \(n\) pivots. Then the RREF is \(I\), the reduction is a product of elementary matrices, and the inverse exists.`,
    fig: vecs3([[[2, 1, 0], "a₁"], [[1, 1, 1], "a₂"], [[0, 1, 3], "a₃"]]), w: 0.5 },
  { h: "3. Using it backwards",
    lead: S`If any single condition fails, every condition fails. A nonzero solution of \(A\vec x=\vec 0\) at once tells you: \(A\) is singular, its columns are dependent and do not span \(\mathbb R^n\), some \(\vec b\) gives an inconsistent system, and \(A^T\) is singular too.`,
    fig: planeFig([1, 2, 1], [2, 1, -1], { lu: "a₁", lv: "a₂", more: [[[-1, 1, 2], "a₃", "green"]] }), w: 0.5 },
  { h: "4. One-sided inverses",
    lead: thm("square one-sided inverses", S`If \(A\) is square and \(AD=I\) (or \(CA=I\)), then \(A\) is invertible and \(D=A^{-1}\) (or \(C=A^{-1}\)).`) + S`\pf{\(AD=I\) makes every \(A\vec x=\vec b\) solvable (\(\vec x=D\vec b\)), so (g) holds and \(A\) is invertible; then \(D=A^{-1}AD=A^{-1}\).}`,
    fig: P(rowPic([[[[1, 2], [1, 3]], { label: "A" }], [[[3, -2], [-1, 1]], { label: "D" }], "=", [[[1, 0], [0, 1]], { label: "I" }]]), 3.8), w: 0.5 },
  { h: "5. Square matrices only",
    lead: S`The theorem fails for rectangular matrices: a \(3\times2\) matrix can have independent columns that do not span \(\mathbb R^3\), and a \(2\times3\) matrix can have spanning columns that are dependent.`,
    fig: P(matPic([[1, 0], [0, 1], [1, 1]], { label: "3 × 2: independent, not spanning" }), 2.2), w: 0.55 },
];

const EXAMPLES = [
  { title: "Invertible: all conclusions at once", q: S`Is \(A=${M([[2, 1, 0], [1, 1, 1], [0, 1, 3]])}\) invertible? State three consequences.`,
    fig: vecs3([[[2, 1, 0], "a₁"], [[1, 1, 1], "a₂"], [[0, 1, 3], "a₃"]]),
    steps: [...steps([[2, 1, 0], [1, 1, 1], [0, 1, 3]], [
      [S`Bring a 1 up as the first pivot.`, ["R1<->R2"]],
      [S`Clear column 1.`, ["R2-2R1"]],
      [S`Clear column 2 below its pivot.`, ["R3+R2"]],
    ], { bar: false, intro: "Row reduce A" }).steps, S`Three pivots: invertible. So \(A\vec x=\vec 0\) has only \(\vec 0\); the columns form a basis of \(\mathbb R^3\); every \(A\vec x=\vec b\) has exactly one solution.`],
    ans: S`invertible` },
  { title: "Singular: all conclusions fail", q: S`\(A=${M([[1, 2, -1], [2, 1, 1], [1, -1, 2]])}\). Find a nonzero \(\vec x\) with \(A\vec x=\vec 0\) and a \(\vec b\) with \(A\vec x=\vec b\) inconsistent.`,
    fig: planeFig([1, 2, 1], [2, 1, -1], { lu: "a₁", lv: "a₂", more: [[[-1, 1, 2], "a₃", "green"]] }),
    steps: [...steps([[1, 2, -1, 0], [2, 1, 1, 0], [1, -1, 2, 0]], [
      [S`Clear column 1.`, ["R2-2R1", "R3-R1"]],
      [S`Clear column 2 below its pivot.`, ["R3-R2"]],
      [S`Make the second pivot 1.`, ["R2*-1/3"]],
      [S`Clear above it.`, ["R1-2R2"]],
    ], { intro: String.raw`Row reduce \([\,A\mid\vec 0\,]\)` }).steps,
      S`Two pivots: singular. \(x_3=1\): \(\vec x=(-1,1,1)\), and \(A${C(-1, 1, 1)}=${C("-1+2-1", "-2+1+1", "-1-1+2")}=${C(0, 0, 0)}\).`,
      ...steps([[1, 2, -1, 1], [2, 1, 1, 0], [1, -1, 2, 0]], [
        [S`Try \(\vec b=\vec e_1\). Clear column 1.`, ["R2-2R1", "R3-R1"]],
        [S`Clear column 2.`, ["R3-R2"]],
      ], { intro: String.raw`Row reduce \([\,A\mid\vec e_1\,]\)` }).steps, S`Last row: 0 equals 1. Inconsistent.`],
    ans: S`\(\vec x=(-1,1,1)\); \(\vec b=(1,0,0)\)` },
  { title: "Reading conclusions from one fact", q: S`The columns of a \(4\times4\) matrix \(A\) span \(\mathbb R^4\). What else is true?`,
    fig: P(rowPic([[[["■", "*", "*", "*"], [0, "■", "*", "*"], [0, 0, "■", "*"], [0, 0, 0, "■"]], { label: "4 pivots" }]]), 2.6),
    steps: [S`Spanning is condition (f), so all conditions hold.`, S`\(A\) is invertible; \(A\vec x=\vec 0\) has only \(\vec 0\); every \(A\vec x=\vec b\) has a unique solution; the columns are independent; \(A^T\) is invertible.`],
    ans: S`every condition of the theorem` },
  { title: "A one-sided inverse", q: S`Check \(AD=I\) for \(A=${M([[1, 2], [1, 3]])}\), \(D=${M([[3, -2], [-1, 1]])}\), and conclude \(DA=I\).`,
    fig: P(rowPic([[[[1, 2], [1, 3]], { label: "A" }], [[[3, -2], [-1, 1]], { label: "D" }]]), 2.8),
    steps: [S`\[AD=${M([[1, 2], [1, 3]])}${M([[3, -2], [-1, 1]])}=${M([["3-2", "-2+2"], ["3-3", "-2+3"]])}=I.\]`, S`By condition (l), \(A\) is invertible and \(D=A^{-1}\), so \(DA=I\).`, S`(Directly: \(DA=${M([[3, -2], [-1, 1]])}${M([[1, 2], [1, 3]])}=${M([["3-2", "6-6"], ["-1+1", "-2+3"]])}=I\) ✓.)`],
    ans: S`\(DA=I\)` },
  { title: "A parameter", q: S`For which \(a\) is \(A=${M([[1, "a", 0], [0, 1, "a"], ["a", 0, 1]])}\) invertible?`,
    fig: P(matPic([[1, "a", 0], [0, 1, "a"], ["a", 0, 1]], { label: "A" }), 2.2),
    steps: [S`\(R_3\to R_3-aR_1\): \[${M([[1, "a", 0], [0, 1, "a"], [0, "-a^2", 1]])}\]`, S`\(R_3\to R_3+a^2R_2\): \[${M([[1, "a", 0], [0, 1, "a"], [0, 0, "1+a^3"]])}\]`, S`Three pivots \(\iff 1+a^3\ne0\iff a\ne-1\).`],
    ans: S`every \(a\ne-1\)` },
  { title: "Square matrices only", q: S`\(A=${M([[1, 0], [0, 1], [1, 1]])}\). Are the columns independent? Do they span \(\mathbb R^3\)?`,
    fig: P(matPic([[1, 0], [0, 1], [1, 1]], { label: "A (3 × 2)" }), 1.8),
    steps: [...steps([[1, 0], [0, 1], [1, 1]], [
      [S`Clear column 1.`, ["R3-R1"]],
      [S`Clear column 2.`, ["R3-R2"]],
    ], { bar: false, intro: "Row reduce A" }).steps, S`A pivot in each column: independent. Row 3 has no pivot: they do not span \(\mathbb R^3\). The theorem does not apply: \(A\) is not square.`],
    ans: S`independent but not spanning` },
  { title: "Using the transpose", q: S`Is \(A=${M([[1, 0, 1], [2, 1, 0], [1, 1, -1]])}\) invertible? What about the rows of \(A\)?`,
    fig: P(matPic([[1, 0, 1], [2, 1, 0], [1, 1, -1]], { label: "A" }), 2.2),
    steps: [...steps([[1, 0, 1], [2, 1, 0], [1, 1, -1]], [
      [S`Clear column 1.`, ["R2-2R1", "R3-R1"]],
      [S`Clear column 2.`, ["R3-R2"]],
    ], { bar: false, intro: "Row reduce A" }).steps, S`Two pivots: singular. By (j), \(A^T\) is singular too, so the columns of \(A^T\) — the rows of \(A\) — are dependent: row 3 \(=\) row 2 \(-\) row 1.`],
    ans: S`singular; rows dependent` },
  { title: "Products", q: S`Prove: if \(AB\) is invertible (\(A,B\) square), then \(A\) is invertible.`,
    fig: P(rowPic([[[["*", "*"], ["*", "*"]], { label: "A" }], [[["*", "*"], ["*", "*"]], { label: "B" }], [[["*", "*"], ["*", "*"]], { label: "(AB)⁻¹" }], "=", [[[1, 0], [0, 1]], { label: "I" }]]), 4),
    steps: [S`Let \(C=(AB)^{-1}\). Then \(A(BC)=(AB)C=I\).`, S`So \(A\) has a right inverse \(D=BC\); by (l), \(A\) is invertible.`],
    ans: S`\(A(BC)=I\)` },
  { title: "A nilpotent matrix", q: S`Show that \(N=${M([[0, 1], [0, 0]])}\) is singular in three different ways.`,
    fig: P(matPic([[0, 1], [0, 0]], { label: "N" }), 1.6),
    steps: [S`Only one pivot (row 2 is zero).`, S`\(N${C(1, 0)}=${C(0, 0)}\): a nonzero solution of \(N\vec x=\vec 0\).`, S`\(N^2=${M([[0, 1], [0, 0]])}${M([[0, 1], [0, 0]])}=${M([[0, 0], [0, 0]])}\); if \(N^{-1}\) existed, \(N=N^{-1}N^2=0\), false.`],
    ans: S`singular` },
];

const PROBLEMS = [
  { level: 1, q: S`A \(3\times3\) matrix has 3 pivots. Does \(A\vec x=(1,2,3)\) have a solution?`, ans: S`yes, exactly one` },
  { level: 1, q: S`\(A\) is \(5\times5\) and \(A\vec x=\vec 0\) has a nonzero solution. Is \(A^T\) invertible?`, ans: S`no` },
  { level: 1, q: S`Does the theorem apply to a \(2\times3\) matrix?`, ans: S`no (square only)` },
  { level: 2, q: S`Is \(${M([[1, 1, 2], [0, 1, 1], [1, 2, 4]])}\) invertible?`, ans: S`yes (3 pivots)`, fig: P(matPic([[1, 1, 2], [0, 1, 1], [1, 2, 4]], { label: "A" }), 2.2) },
  { level: 2, q: S`Find a nonzero solution of \(A\vec x=\vec 0\) for \(A=${M([[1, 1, 2], [0, 1, 1], [1, 2, 3]])}\).`, ans: S`\((-1,-1,1)\)` },
  { level: 2, q: S`For which \(k\) is \(${M([[1, 2, 0], [2, "k", 1], [0, 1, 1]])}\) singular?`, ans: S`\(k=5\)`, fig: P(matPic([[1, 2, 0], [2, "k", 1], [0, 1, 1]], { cells: [[1, 1]], label: "A" }), 2.2) },
  { level: 2, q: S`\(AD=I\) for \(3\times3\) matrices. Is \(DA=I\)?`, ans: S`yes` },
  { level: 2, q: S`The columns of a \(3\times3\) matrix lie in one plane. Name two other conditions that fail.`, ans: S`e.g. \(A\) invertible; \(A\vec x=\vec b\) always consistent` },
  { level: 3, space: 5, q: S`Prove: if \(AB\) is invertible, then \(B\) is invertible.`, ans: S`\(((AB)^{-1}A)B=I\): a left inverse` },
  { level: 3, space: 5, q: S`Prove: if \(A^2=0\) then \(A\) is singular.`, ans: S`\(A=A^{-1}A^2=0\) would follow`, fig: P(matPic([[2, -4], [1, -2]], { label: "A² = 0" }), 1.8) },
  { level: 3, space: 5, q: S`Give a \(2\times3\) matrix whose columns span \(\mathbb R^2\) but are dependent.`, ans: S`e.g. \(${M([[1, 0, 1], [0, 1, 1]])}\)` },
  { level: 3, space: 5, q: S`Prove: an invertible matrix has independent rows.`, ans: S`\(A^T\) is invertible, so its columns (the rows of \(A\)) are independent` },
  { level: 3, space: 5, q: S`\(A\) is \(n\times n\) and \(A^3=I\). Show \(A\) is invertible and find \(A^{-1}\).`, ans: S`\(A\cdot A^2=I\): \(A^{-1}=A^2\)`, fig: P(matPic([[0, -1], [1, -1]], { label: "an example with A³ = I" }), 1.8) },
];

export const WS = {
  code: "6.4",
  title: "The Invertible Matrix Theorem",
  bigideas: S`For a square matrix, invertibility is equivalent to a long list of other properties: \(n\) pivots, RREF \(=I\), only the trivial solution of \(A\vec x=\vec 0\), independent and spanning columns, unique solvability of every system, being a product of elementary matrices, invertibility of \(A^T\), and having a one-sided inverse. One row reduction decides them all.`,
  goals: ["State the Invertible Matrix Theorem.", "Use any one condition to decide all the others.", "Produce a null vector and an impossible right side for a singular matrix.", "Use one-sided inverses.", "Prove consequences such as 'AB invertible ⇒ A invertible'."],
  curriculum: "Inverses and determinants — the Invertible Matrix Theorem",
  vocab: [["Equivalent", "all true or all false"], ["Rank \\(n\\)", "\\(n\\) pivots"], ["Trivial solution", "\\(\\vec x=\\vec 0\\)"], ["One-sided inverse", "\\(CA=I\\) or \\(AD=I\\)"], ["Square", "\\(n\\times n\\) — required"]],
  hook: S`Twelve different questions about a matrix — and they all have the same answer. Why?`,
  concepts: NOTES,
  summary: [
    S`Square \(A\): invertible \(\iff n\) pivots \(\iff\) RREF \(=I\).`,
    S`\(\iff\) independent columns \(\iff\) spanning columns.`,
    S`\(\iff A\vec x=\vec b\) uniquely solvable for every \(\vec b\).`,
    S`\(\iff A^T\) invertible \(\iff\) a one-sided inverse.`,
    S`One failure means every condition fails.`,
  ],
  tips: ["Check the matrix is square first.", "Pick the easiest condition to test.", "A null vector proves singularity.", "One-sided inverses suffice for square matrices.", "Transpose to talk about rows."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
