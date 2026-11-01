// LINALG1 Worksheet 8.4 — Diagonalisation
// Self-contained: complete notes, 9 worked examples with figures, 13 problems with an answer key.
import { svgT } from "./figT.mjs";
import { S, def, thm } from "./wkit.mjs";
import { rowPic, matPic } from "./fig3.mjs";
import { eigLines } from "./fig8.mjs";
import { am } from "../bank/la.mjs";

const P = (svg, w = 4.4) => svgT(svg, w);
const M = (m) => am(m, false);
const C = (...a) => am(a.map((x) => [x]), false);

const NOTES = [
  { h: "1. Diagonalisable matrices",
    lead: def("diagonalisable", S`\(A\) is \emph{diagonalisable} if \(A=PDP^{-1}\) with \(P\) invertible and \(D\) diagonal.`) + thm("diagonalisation", S`\(A\) (\(n\times n\)) is diagonalisable \(\iff\) it has \(n\) independent eigenvectors. Then \(P\) has the eigenvectors as columns and \(D\) the matching eigenvalues.`) + S`\pf{\(AP=[A\vec v_1\cdots A\vec v_n]\), \(PD=[\lambda_1\vec v_1\cdots\lambda_n\vec v_n]\); so \(AP=PD\) says each column is an eigenvector, and \(P\) is invertible exactly when the columns are independent.}`,
    fig: P(rowPic([[[["A"]], {}], [[["v₁", "v₂"]], { label: "P" }], "=", [[["v₁", "v₂"]], { label: "P" }], [[["λ₁", 0], [0, "λ₂"]], { label: "D" }]]), 4), w: 0.5 },
  { h: "2. The recipe",
    lead: S`(1) Eigenvalues. (2) A basis of each eigenspace. (3) If there are \(n\) basis vectors in total, \(P=[\vec v_1\cdots\vec v_n]\), \(D=\operatorname{diag}(\lambda_1,\dots,\lambda_n)\) in the same order. (4) Check \(AP=PD\) — no inverse needed.`,
    fig: eigLines([[1, 2], [3, 2]], [[[2, 3], 4], [[1, -1], -1]], { w: 4 }), w: 0.5 },
  { h: "3. Distinct eigenvalues",
    lead: thm("sufficient condition", S`An \(n\times n\) matrix with \(n\) distinct eigenvalues is diagonalisable.`) + S`\pf{One eigenvector per eigenvalue; eigenvectors for distinct eigenvalues are independent.}`,
    fig: P(matPic([[2, 1, 0], [0, 3, 1], [0, 0, 4]], { label: "2, 3, 4 distinct: diagonalisable" }), 2.2), w: 0.55 },
  { h: "4. Repeated eigenvalues",
    lead: S`With a repeated eigenvalue, \(A\) is diagonalisable exactly when the eigenspace dimension equals the multiplicity for every eigenvalue. A \(2\times2\) matrix with a double eigenvalue \(\lambda\) is diagonalisable only if it already equals \(\lambda I\).`,
    fig: eigLines([[4, 1], [-1, 2]], [[[1, -1], 3]], { w: 4 }), w: 0.5 },
  { h: "5. Invertible versus diagonalisable",
    lead: S`The two properties are independent. \(${M([[1, 1], [0, 1]])}\) is invertible but not diagonalisable; \(\operatorname{diag}(1,0)\) is diagonalisable but not invertible. Invertibility is about the eigenvalue 0; diagonalisability is about the number of eigenvectors.`,
    fig: P(matPic([[1, 1], [0, 1]], { label: "invertible, not diagonalisable" }), 1.8), w: 0.55 },
  { h: "6. Building a matrix",
    lead: S`Choosing \(n\) independent vectors and \(n\) numbers defines a unique matrix with those eigenvectors and eigenvalues: \(A=PDP^{-1}\). This is how matrices with prescribed behaviour (stretch here, flatten there) are designed.`,
    fig: eigLines([[1, 1], [2, 2]], [[[1, 2], 3], [[1, -1], 0]], { w: 4 }), w: 0.5 },
];

const EXAMPLES = [
  { title: "Diagonalising a 2 × 2 matrix", q: S`Diagonalise \(A=${M([[1, 2], [3, 2]])}\).`,
    fig: eigLines([[1, 2], [3, 2]], [[[2, 3], 4], [[1, -1], -1]], { w: 3.8 }),
    steps: [S`\(\operatorname{tr}A=3\), \(\det A=2-6=-4\): \(\lambda^2-3\lambda-4=(\lambda-4)(\lambda+1)\).`, S`\(A-4I=${M([[-3, 2], [3, -2]])}\): \((2,3)\). \(A+I=${M([[2, 2], [3, 3]])}\): \((1,-1)\).`, S`\(P=${M([[2, 1], [3, -1]])}\), \(D=\operatorname{diag}(4,-1)\). \[AP=${M([[1, 2], [3, 2]])}${M([[2, 1], [3, -1]])}=${M([["2+6", "1-2"], ["6+6", "3-2"]])}=${M([[8, -1], [12, 1]])}=PD\ \checkmark\]`],
    ans: S`\(P=${M([[2, 1], [3, -1]])}\), \(D=\operatorname{diag}(4,-1)\)` },
  { title: "A 3 × 3 matrix with a double eigenvalue", q: S`Diagonalise \(A=${M([[2, 0, 1], [0, 3, 0], [1, 0, 2]])}\) (\(E_3=\operatorname{span}\{(1,0,1),(0,1,0)\}\), \(E_1=\operatorname{span}\{(1,0,-1)\}\)).`,
    fig: P(matPic([[1, 0, 1], [0, 1, 0], [1, 0, -1]], { label: "P" }), 2),
    steps: [S`\(P=${M([[1, 0, 1], [0, 1, 0], [1, 0, -1]])}\), \(D=\operatorname{diag}(3,3,1)\); \(\det P=1(-1-0)-0+1(0-1)=-2\ne0\).`, S`\[AP=${M([[2, 0, 1], [0, 3, 0], [1, 0, 2]])}${M([[1, 0, 1], [0, 1, 0], [1, 0, -1]])}=${M([["2+1", 0, "2-1"], [0, 3, 0], ["1+2", 0, "1-2"]])}=${M([[3, 0, 1], [0, 3, 0], [3, 0, -1]])}=PD\ \checkmark\]`],
    ans: S`\(P=${M([[1, 0, 1], [0, 1, 0], [1, 0, -1]])}\), \(D=\operatorname{diag}(3,3,1)\)` },
  { title: "Not diagonalisable", q: S`Is \(A=${M([[4, 1], [-1, 2]])}\) diagonalisable?`,
    fig: eigLines([[4, 1], [-1, 2]], [[[1, -1], 3]], { w: 3.8 }),
    steps: [S`\(\operatorname{tr}A=6\), \(\det A=8+1=9\): \((\lambda-3)^2\).`, S`\(A-3I=${M([[1, 1], [-1, -1]])}\xrightarrow{R_2\to R_2+R_1}${M([[1, 1], [0, 0]])}\): rank 1, one eigenvector \((1,-1)\). Not diagonalisable.`],
    ans: S`no` },
  { title: "Distinct eigenvalues", q: S`Diagonalise \(A=${M([[2, 1, 0], [0, 3, 1], [0, 0, 4]])}\).`,
    fig: P(matPic([[2, 1, 0], [0, 3, 1], [0, 0, 4]], { label: "A", cells: [[0, 0], [1, 1], [2, 2]] }), 2),
    steps: [S`Eigenvalues \(2,3,4\). \(\lambda=2\): \((1,0,0)\). \(\lambda=3\): \(A-3I=${M([[-1, 1, 0], [0, 0, 1], [0, 0, 1]])}\): \(x_3=0\), \(x_1=x_2\): \((1,1,0)\).`, S`\(\lambda=4\): \(A-4I=${M([[-2, 1, 0], [0, -1, 1], [0, 0, 0]])}\): \(x_3=t\), \(x_2=t\), \(x_1=\tfrac t2\): \((1,2,2)\).`, S`\(P=${M([[1, 1, 1], [0, 1, 2], [0, 0, 2]])}\), \(D=\operatorname{diag}(2,3,4)\). \[AP=${M([[2, "1+1", "1+2"], [0, 3, "6+2"], [0, 0, 8]])}=${M([[2, 3, 4], [0, 3, 8], [0, 0, 8]])}=PD\ \checkmark\]`],
    ans: S`\(P=${M([[1, 1, 1], [0, 1, 2], [0, 0, 2]])}\), \(D=\operatorname{diag}(2,3,4)\)` },
  { title: "Checking a proposed diagonalisation", q: S`Do \(P=${M([[2, 1], [1, 1]])}\), \(D=\operatorname{diag}(2,1)\) diagonalise \(A=${M([[3, -2], [1, 0]])}\)?`,
    fig: eigLines([[3, -2], [1, 0]], [[[2, 1], 2], [[1, 1], 1]], { w: 3.8 }),
    steps: [S`\[AP=${M([[3, -2], [1, 0]])}${M([[2, 1], [1, 1]])}=${M([["6-2", "3-2"], ["2+0", "1+0"]])}=${M([[4, 1], [2, 1]])},\qquad PD=${M([[2, 1], [1, 1]])}${M([[2, 0], [0, 1]])}=${M([[4, 1], [2, 1]])}.\]`, S`Equal, and \(\det P=1\ne0\): yes.`],
    ans: S`yes` },
  { title: "Designing a matrix", q: S`Find \(A\) with \(A(1,2)=3(1,2)\) and \(A(1,-1)=\vec 0\).`,
    fig: eigLines([[1, 1], [2, 2]], [[[1, 2], 3], [[1, -1], 0]], { w: 3.8 }),
    steps: [S`\(P=${M([[1, 1], [2, -1]])}\), \(D=\operatorname{diag}(3,0)\), \(\det P=-3\), \(P^{-1}=\tfrac13${M([[1, 1], [2, -1]])}\).`, S`\[A=PDP^{-1}=${M([[3, 0], [6, 0]])}\cdot\tfrac13${M([[1, 1], [2, -1]])}=\tfrac13${M([[3, 3], [6, 6]])}=${M([[1, 1], [2, 2]])}.\]`, S`Check: \(A${C(1, 2)}=${C(3, 6)}\), \(A${C(1, -1)}=${C(0, 0)}\) ✓.`],
    ans: S`\(${M([[1, 1], [2, 2]])}\)` },
  { title: "A repeated eigenvalue that works", q: S`Diagonalise \(A=${M([[1, 2, 0], [2, 1, 0], [0, 0, -1]])}\).`,
    fig: P(matPic([[1, 0, 1], [-1, 0, 1], [0, 1, 0]], { label: "P" }), 2),
    steps: [S`Eigenvalues \(-1,-1,3\) with \(E_{-1}=\operatorname{span}\{(1,-1,0),(0,0,1)\}\), \(E_3=\operatorname{span}\{(1,1,0)\}\) (worksheet 8.3).`, S`\(P=${M([[1, 0, 1], [-1, 0, 1], [0, 1, 0]])}\), \(D=\operatorname{diag}(-1,-1,3)\). \[AP=${M([["1-2", 0, "1+2"], ["2-1", 0, "2+1"], [0, -1, 0]])}=${M([[-1, 0, 3], [1, 0, 3], [0, -1, 0]])}=PD\ \checkmark\]`],
    ans: S`\(D=\operatorname{diag}(-1,-1,3)\)` },
  { title: "Invertible versus diagonalisable", q: S`Classify \(${M([[1, 1], [0, 1]])}\), \(${M([[1, 0], [0, 0]])}\), \(${M([[2, 0], [0, 3]])}\) as invertible and/or diagonalisable.`,
    fig: P(rowPic([[[[1, 1], [0, 1]], { label: "inv, not diag" }], [[[1, 0], [0, 0]], { label: "diag, not inv" }], [[[2, 0], [0, 3]], { label: "both" }]]), 4),
    steps: [S`\(${M([[1, 1], [0, 1]])}\): \(\det=1\) (invertible); \(\lambda=1\) twice with \(A-I=${M([[0, 1], [0, 0]])}\) of rank 1 (not diagonalisable).`, S`\(${M([[1, 0], [0, 0]])}\): diagonal (diagonalisable), \(\det=0\) (not invertible). \(\operatorname{diag}(2,3)\): both.`],
    ans: S`inv only; diag only; both` },
  { title: "The transpose", q: S`Prove that if \(A=PDP^{-1}\), then \(A^T\) is diagonalisable.`,
    steps: [S`\(A^T=(PDP^{-1})^T=(P^{-1})^TD^TP^T=(P^T)^{-1}D(P^T)\).`, S`With \(Q=(P^T)^{-1}\): \(A^T=QDQ^{-1}\), and \(Q\) is invertible.`],
    ans: S`\(A^T=(P^T)^{-1}DP^T\)` },
];

const PROBLEMS = [
  { level: 1, q: S`Is \(${M([[2, 5], [0, 7]])}\) diagonalisable?`, ans: S`yes (distinct eigenvalues 2, 7)` },
  { level: 1, q: S`\(A=PDP^{-1}\) with \(D=\operatorname{diag}(5,-2)\). Find \(\det A\).`, ans: S`\(-10\)` },
  { level: 1, q: S`Is \(${M([[3, 1], [0, 3]])}\) diagonalisable?`, ans: S`no`, fig: eigLines([[3, 1], [0, 3]], [[[1, 0], 3]], { w: 3.2 }) },
  { level: 2, q: S`Diagonalise \(${M([[4, 1], [2, 3]])}\).`, ans: S`\(P=${M([[1, 1], [1, -2]])}\), \(D=\operatorname{diag}(5,2)\)` },
  { level: 2, q: S`Diagonalise \(${M([[0, 1], [2, 1]])}\).`, ans: S`\(P=${M([[1, 1], [2, -1]])}\), \(D=\operatorname{diag}(2,-1)\)`, fig: eigLines([[0, 1], [2, 1]], [[[1, 2], 2], [[1, -1], -1]], { w: 3.2 }) },
  { level: 2, q: S`Check whether \(P=${M([[1, 1], [1, 2]])}\), \(D=\operatorname{diag}(1,2)\) diagonalise \(${M([[0, 1], [-2, 3]])}\).`, ans: S`yes: \(AP=PD=${M([[1, 2], [1, 4]])}\)` },
  { level: 2, q: S`Is \(${M([[1, 0, 0], [0, 2, 0], [3, 0, 1]])}\) diagonalisable?`, ans: S`no (\(\dim E_1=1\))`, fig: P(matPic([[0, 0, 0], [0, 1, 0], [3, 0, 0]], { label: "A − I" }), 2) },
  { level: 2, q: S`Find \(A\) with eigenvectors \((1,0)\), \((1,1)\) and eigenvalues \(2\), \(5\).`, ans: S`\(${M([[2, 3], [0, 5]])}\)` },
  { level: 3, space: 5, q: S`Prove: if \(A\) is diagonalisable and invertible, then \(A^{-1}\) is diagonalisable.`, ans: S`\(A^{-1}=PD^{-1}P^{-1}\)` },
  { level: 3, space: 5, q: S`Show that \(${M([[1, "a"], [0, 2]])}\) is diagonalisable for every \(a\).`, ans: S`distinct eigenvalues 1, 2` },
  { level: 3, space: 5, q: S`For which \(a\) is \(${M([[2, "a"], [0, 2]])}\) diagonalisable?`, ans: S`only \(a=0\)` },
  { level: 3, space: 5, q: S`\(A\) is \(3\times3\) with eigenvalues \(1,2,2\) and \(\operatorname{rank}(A-2I)=1\). Is \(A\) diagonalisable? Explain.`, ans: S`yes: \(\dim E_2=2\), \(\dim E_1=1\)`, fig: P(matPic([["1 + 2 = 3"]], { label: "eigenvector count" }), 1.6) },
  { level: 3, space: 5, q: S`Prove that a diagonalisable \(A\) with only eigenvalue \(\lambda\) equals \(\lambda I\).`, ans: S`\(A=P(\lambda I)P^{-1}=\lambda I\)` },
];

export const WS = {
  code: "8.4",
  title: "Diagonalisation",
  bigideas: S`A matrix with \(n\) independent eigenvectors factors as \(A=PDP^{-1}\): eigenvectors in \(P\), eigenvalues in \(D\). Distinct eigenvalues guarantee it; repeated eigenvalues allow it exactly when each eigenspace is full. Check every diagonalisation with \(AP=PD\).`,
  goals: ["State when \\(A=PDP^{-1}\\).", "Diagonalise \\(2\\times2\\) and \\(3\\times3\\) matrices.", "Use distinct eigenvalues.", "Decide with repeated eigenvalues.", "Design matrices from eigen-data."],
  curriculum: "Eigenvalues and eigenvectors — diagonalisation",
  vocab: [["Diagonalisable", "\\(A=PDP^{-1}\\)"], ["\\(P\\)", "eigenvector columns"], ["\\(D\\)", "eigenvalues"], ["\\(AP=PD\\)", "the check"], ["Defective", "not diagonalisable"]],
  hook: S`In the right coordinates, a tangled matrix becomes a list of stretch factors. When do such coordinates exist?`,
  concepts: NOTES,
  summary: [
    S`\(A=PDP^{-1}\iff n\) independent eigenvectors.`,
    S`Order of \(D\) matches columns of \(P\).`,
    S`Distinct eigenvalues \(\Rightarrow\) diagonalisable.`,
    S`Repeated: need full eigenspaces.`,
    S`Check \(AP=PD\).`,
  ],
  tips: ["Keep P and D in the same order.", "Check AP = PD.", "A double eigenvalue needs a 2-dimensional eigenspace.", "Invertible and diagonalisable are different.", "Any nonzero multiples of eigenvectors work in P."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
