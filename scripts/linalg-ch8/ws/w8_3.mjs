// LINALG1 Worksheet 8.3 — Eigenspaces and Multiplicity
// Self-contained: complete notes, 9 worked examples with figures, 13 problems with an answer key.
import { svgT } from "./figT.mjs";
import { S, def, thm } from "./wkit.mjs";
import { matPic } from "./fig3.mjs";
import { eigLines } from "./fig8.mjs";
import { am, steps } from "../bank/la.mjs";

const P = (svg, w = 4.4) => svgT(svg, w);
const M = (m) => am(m, false);
const C = (...a) => am(a.map((x) => [x]), false);

const NOTES = [
  { h: "1. A full eigen-analysis",
    lead: S`Stage 1: solve \(\det(A-\lambda I)=0\) for the eigenvalues. Stage 2: for each eigenvalue, row reduce \(A-\lambda I\) and write the solutions of \((A-\lambda I)\vec x=\vec 0\) in parametric form; the vectors multiplying the free variables form a basis of \(E_\lambda\).`,
    fig: eigLines([[2, 3], [3, 2]], [[[1, 1], 5], [[1, -1], -1]], { w: 4 }), w: 0.5 },
  { h: "2. Geometric multiplicity",
    lead: def("geometric multiplicity", S`\(\dim E_\lambda=\dim\operatorname{Nul}(A-\lambda I)=n-\operatorname{rank}(A-\lambda I)\), the number of free variables.`) + thm("bounds", S`\(1\le\dim E_\lambda\le\) algebraic multiplicity of \(\lambda\).`) + S`\pf{\(E_\lambda\) contains a nonzero vector. For the upper bound, extend a basis of \(E_\lambda\) to a basis of \(\mathbb R^n\); in that basis \(A\) is block triangular with \(\lambda I_g\) in the corner, so \((\lambda-t)^g\) divides the characteristic polynomial.}`,
    fig: P(matPic([["geo ≥ 1"], ["geo ≤ alg"]], { label: "the two multiplicities" }), 1.8), w: 0.6 },
  { h: "3. Defective matrices",
    lead: S`A matrix is \emph{defective} if some eigenvalue has geometric multiplicity smaller than its algebraic multiplicity. The standard example is \(${M([[3, 1], [0, 3]])}\): \(\lambda=3\) twice, but \(E_3=\operatorname{span}\{(1,0)\}\).`,
    fig: eigLines([[3, 1], [0, 3]], [[[1, 0], 3]], { w: 4 }), w: 0.5 },
  { h: "4. Combining eigenspaces",
    lead: thm("independence", S`Bases of the eigenspaces of distinct eigenvalues, put together, form an independent set. Hence \(A\) has an eigenbasis of \(\mathbb R^n\) exactly when \(\sum_\lambda\dim E_\lambda=n\).`) + S`\pf{Eigenvectors for distinct eigenvalues are independent; group a dependence relation by eigenspace.}`,
    fig: P(matPic([["E₃", "E₃", "E₁"]], { label: "2 + 1 = 3 basis vectors of ℝ³" }), 2.2), w: 0.55 },
  { h: "5. Counting with rank",
    lead: S`You can count eigenvectors without finding them: \(\dim E_\lambda=n-\operatorname{rank}(A-\lambda I)\). For instance, if \(A-\lambda I\) has all rows equal (and nonzero), its rank is 1 and \(\dim E_\lambda=n-1\).`,
    fig: P(matPic([[1, 1, 1], [1, 1, 1], [1, 1, 1]], { label: "rank 1: dim E = 2" }), 2), w: 0.55 },
  { h: "6. Scalar matrices",
    lead: S`For \(A=cI\), \(A-cI=0\), so \(E_c=\mathbb R^n\): every nonzero vector is an eigenvector. Conversely, if every nonzero vector is an eigenvector, \(A\) is a scalar matrix.`,
    fig: eigLines([[2, 0], [0, 2]], [[[1, 0], 2], [[0, 1], 2], [[1, 1], 2]], { w: 4 }), w: 0.5 },
];

const EXAMPLES = [
  { title: "A 2 × 2 analysis", q: S`Find the eigenvalues and a basis of each eigenspace of \(A=${M([[2, 3], [3, 2]])}\).`,
    fig: eigLines([[2, 3], [3, 2]], [[[1, 1], 5], [[1, -1], -1]], { w: 3.8 }),
    steps: [S`\(\operatorname{tr}A=4\), \(\det A=4-9=-5\): \(\lambda^2-4\lambda-5=(\lambda-5)(\lambda+1)\).`, S`\(A-5I=${M([[-3, 3], [3, -3]])}\xrightarrow{R_2\to R_2+R_1}${M([[-3, 3], [0, 0]])}\): \(E_5=\operatorname{span}\{(1,1)\}\). \(A+I=${M([[3, 3], [3, 3]])}\xrightarrow{R_2\to R_2-R_1}${M([[3, 3], [0, 0]])}\): \(E_{-1}=\operatorname{span}\{(1,-1)\}\).`],
    ans: S`\(E_5=\operatorname{span}\{(1,1)\}\), \(E_{-1}=\operatorname{span}\{(1,-1)\}\)` },
  { title: "A 2-dimensional eigenspace", q: S`\(A=${M([[2, 0, 1], [0, 3, 0], [1, 0, 2]])}\) has eigenvalues \(3,3,1\). Find bases of \(E_3\) and \(E_1\).`,
    fig: P(matPic([[-1, 0, 1], [0, 0, 0], [1, 0, -1]], { label: "A − 3I" }), 2),
    steps: [...steps([[-1, 0, 1], [0, 0, 0], [1, 0, -1]], [[S`Clear column 1.`, ["R3+R1"]]], { bar: false, intro: S`\(A-3I\)` }).steps,
      S`\(-x_1+x_3=0\); \(x_2\), \(x_3\) free: \(E_3=\operatorname{span}\{(1,0,1),(0,1,0)\}\), dimension 2.`,
      S`\(A-I=${M([[1, 0, 1], [0, 2, 0], [1, 0, 1]])}\xrightarrow{R_3\to R_3-R_1}${M([[1, 0, 1], [0, 2, 0], [0, 0, 0]])}\): \(E_1=\operatorname{span}\{(1,0,-1)\}\). Check \(A${C(1, 0, -1)}=${C("2-1", 0, "1-2")}=${C(1, 0, -1)}\) ✓.`],
    ans: S`\(E_3=\operatorname{span}\{(1,0,1),(0,1,0)\}\), \(E_1=\operatorname{span}\{(1,0,-1)\}\)` },
  { title: "A defective 3 × 3 matrix", q: S`Find the multiplicities for \(A=${M([[4, 1, 0], [0, 4, 0], [0, 0, 1]])}\).`,
    fig: P(matPic([[0, 1, 0], [0, 0, 0], [0, 0, -3]], { label: "A − 4I: rank 2" }), 2),
    steps: [S`Triangular: \(4,4,1\).`, S`\(A-4I=${M([[0, 1, 0], [0, 0, 0], [0, 0, -3]])}\): rank 2, so \(\dim E_4=1\): \(E_4=\operatorname{span}\{(1,0,0)\}\).`, S`\(\lambda=4\): algebraic 2, geometric 1 — defective.`],
    ans: S`\(\lambda=4\): 2 vs 1 (defective)` },
  { title: "A defective 2 × 2 matrix", q: S`Show that \(A=${M([[5, -1], [1, 3]])}\) is defective.`,
    fig: eigLines([[5, -1], [1, 3]], [[[1, 1], 4]], { w: 3.8 }),
    steps: [S`\(\operatorname{tr}A=8\), \(\det A=15+1=16\): \((\lambda-4)^2\).`, S`\(A-4I=${M([[1, -1], [1, -1]])}\xrightarrow{R_2\to R_2-R_1}${M([[1, -1], [0, 0]])}\): \(E_4=\operatorname{span}\{(1,1)\}\), dimension \(1<2\).`],
    ans: S`only one eigen-line` },
  { title: "Every vector an eigenvector", q: S`Describe the eigenspaces of \(A=3I_2\).`,
    fig: eigLines([[3, 0], [0, 3]], [[[1, 0], 3], [[1, 1], 3]], { w: 3.8 }),
    steps: [S`\(A-3I=0\): every \(\vec x\) solves \((A-3I)\vec x=\vec 0\).`, S`\(E_3=\mathbb R^2\): geometric multiplicity 2 = algebraic multiplicity.`],
    ans: S`\(E_3=\mathbb R^2\)` },
  { title: "Block matrix eigenspaces", q: S`\(A=${M([[1, 2, 0], [2, 1, 0], [0, 0, -1]])}\) has eigenvalues \(-1,-1,3\). Find the eigenspaces.`,
    fig: P(matPic([[2, 2, 0], [2, 2, 0], [0, 0, 0]], { label: "A + I: rank 1" }), 2),
    steps: [S`\(A+I=${M([[2, 2, 0], [2, 2, 0], [0, 0, 0]])}\xrightarrow{R_2\to R_2-R_1}${M([[2, 2, 0], [0, 0, 0], [0, 0, 0]])}\): \(x_1=-x_2\); \(E_{-1}=\operatorname{span}\{(1,-1,0),(0,0,1)\}\).`, S`\(A-3I=${M([[-2, 2, 0], [2, -2, 0], [0, 0, -4]])}\): \(x_3=0\), \(x_1=x_2\): \(E_3=\operatorname{span}\{(1,1,0)\}\). Total \(2+1=3\): eigenbasis.`],
    ans: S`\(E_{-1}\) 2-dimensional, \(E_3=\operatorname{span}\{(1,1,0)\}\)` },
  { title: "Counting by rank", q: S`Find \(\dim E_{-1}\) for \(A=${M([[0, 1, 1], [1, 0, 1], [1, 1, 0]])}\).`,
    fig: P(matPic([[1, 1, 1], [1, 1, 1], [1, 1, 1]], { label: "A + I" }), 2),
    steps: [S`\(A+I=${M([[1, 1, 1], [1, 1, 1], [1, 1, 1]])}\xrightarrow{R_2\to R_2-R_1,\ R_3\to R_3-R_1}${M([[1, 1, 1], [0, 0, 0], [0, 0, 0]])}\): rank 1.`, S`\(\dim E_{-1}=3-1=2\).`],
    ans: S`\(2\)` },
  { title: "A parameter", q: S`For which \(a\) is \(${M([[3, "a"], [0, 3]])}\) defective?`,
    fig: P(matPic([[0, "a"], [0, 0]], { label: "A − 3I" }), 1.6),
    steps: [S`\(\lambda=3\) twice. \(A-3I=${M([[0, "a"], [0, 0]])}\) has rank 1 if \(a\ne0\) and rank 0 if \(a=0\).`, S`So \(\dim E_3=1\) (defective) for \(a\ne0\), and \(2\) for \(a=0\).`],
    ans: S`\(a\ne0\)` },
  { title: "Eigenspaces are never trivial", q: S`Prove that \(\dim E_\lambda\ge1\) for every eigenvalue \(\lambda\).`,
    steps: [S`\(\lambda\) is an eigenvalue, so some \(\vec x\ne\vec 0\) has \(A\vec x=\lambda\vec x\).`, S`That \(\vec x\) lies in \(E_\lambda\), so \(E_\lambda\ne\{\vec 0\}\) and its dimension is at least 1.`],
    ans: S`it contains an eigenvector` },
];

const PROBLEMS = [
  { level: 1, q: S`Find a basis of \(E_4\) for \(${M([[4, 0], [0, 1]])}\).`, ans: S`\(\{\vec e_1\}\)` },
  { level: 1, q: S`Find \(\dim E_2\) for \(\operatorname{diag}(2,2,2)\).`, ans: S`\(3\)` },
  { level: 1, q: S`Is \(${M([[1, 1], [0, 1]])}\) defective?`, ans: S`yes`, fig: eigLines([[1, 1], [0, 1]], [[[1, 0], 1]], { w: 3.2 }) },
  { level: 2, q: S`Find the eigenspaces of \(${M([[1, 4], [1, 1]])}\).`, ans: S`\(E_3=\operatorname{span}\{(2,1)\}\), \(E_{-1}=\operatorname{span}\{(2,-1)\}\)` },
  { level: 2, q: S`Find \(\dim E_5\) for \(${M([[5, 0, 1], [0, 5, 0], [0, 0, 5]])}\).`, ans: S`\(2\)`, fig: P(matPic([[0, 0, 1], [0, 0, 0], [0, 0, 0]], { label: "A − 5I" }), 2) },
  { level: 2, q: S`Find the eigenspaces of \(${M([[2, 0, 0], [0, 1, 1], [0, 0, 1]])}\) and decide whether there is an eigenbasis.`, ans: S`\(E_2=\operatorname{span}\{\vec e_1\}\), \(E_1=\operatorname{span}\{\vec e_2\}\); no` },
  { level: 2, q: S`\(A\) is \(3\times3\) with eigenvalues \(1,1,4\) and \(\operatorname{rank}(A-I)=2\). Is there an eigenbasis?`, ans: S`no (\(\dim E_1=1\))` },
  { level: 2, q: S`Find \(\dim E_2\) for \(${M([[3, 1, 1], [1, 3, 1], [1, 1, 3]])}\).`, ans: S`\(2\)`, fig: P(matPic([[1, 1, 1], [1, 1, 1], [1, 1, 1]], { label: "A − 2I" }), 2) },
  { level: 3, space: 5, q: S`Prove that if every nonzero vector of \(\mathbb R^2\) is an eigenvector of \(A\), then \(A=cI\).`, ans: S`\(\vec e_1,\vec e_2,\vec e_1+\vec e_2\) eigenvectors force equal eigenvalues` },
  { level: 3, space: 5, q: S`For which \(a,b\) is \(${M([[2, "a", "b"], [0, 2, 0], [0, 0, 3]])}\) not defective?`, ans: S`\(a=0\) (any \(b\))` },
  { level: 3, space: 5, q: S`Show that a \(2\times2\) matrix with a repeated eigenvalue \(\lambda\) is defective unless it equals \(\lambda I\).`, ans: S`\(\dim E_\lambda=2\iff A-\lambda I=0\)` },
  { level: 3, space: 5, q: S`Prove that the union of bases of \(E_{\lambda_1}\) and \(E_{\lambda_2}\) (\(\lambda_1\ne\lambda_2\)) is independent.`, ans: S`\(\vec w_1+\vec w_2=\vec 0\) with \(\vec w_i\in E_{\lambda_i}\) forces \(\vec w_1=\vec w_2=\vec 0\)`, fig: eigLines([[2, 3], [3, 2]], [[[1, 1], 5], [[1, -1], -1]], { w: 3.2 }) },
  { level: 3, space: 5, q: S`Give a \(3\times3\) matrix with one eigenvalue of algebraic multiplicity 3 and geometric multiplicity 1.`, ans: S`e.g. \(${M([[1, 1, 0], [0, 1, 1], [0, 0, 1]])}\)` },
];

export const WS = {
  code: "8.3",
  title: "Eigenspaces and Multiplicity",
  bigideas: S`For each eigenvalue, the eigenspace \(\operatorname{Nul}(A-\lambda I)\) has a dimension between 1 and the algebraic multiplicity. When the dimensions add up to \(n\), the eigenvectors form a basis; when some eigenspace is too small, the matrix is defective.`,
  goals: ["Carry out a full eigen-analysis.", "Find eigenspace bases.", "Compare geometric and algebraic multiplicity.", "Recognise defective matrices.", "Count eigenvectors with rank."],
  curriculum: "Eigenvalues and eigenvectors — eigenspaces and multiplicity",
  vocab: [["Geometric multiplicity", "\\(\\dim E_\\lambda\\)"], ["Algebraic multiplicity", "root multiplicity"], ["Defective", "some eigenspace too small"], ["Eigenbasis", "basis of eigenvectors"], ["\\(n-\\operatorname{rank}\\)", "\\(\\dim E_\\lambda\\)"]],
  hook: S`Two repeated eigenvalues can hide one direction or two. How can you tell which?`,
  concepts: NOTES,
  summary: [
    S`Eigenvalues first, then \(\operatorname{Nul}(A-\lambda I)\).`,
    S`\(\dim E_\lambda=n-\operatorname{rank}(A-\lambda I)\).`,
    S`\(1\le\) geometric \(\le\) algebraic.`,
    S`Defective: some geometric < algebraic.`,
    S`Eigenbasis \(\iff\sum\dim E_\lambda=n\).`,
  ],
  tips: ["One basis vector per free variable.", "Count rank before solving.", "Repeated eigenvalue: check the eigenspace size.", "Verify eigenvectors by multiplying.", "Scalar matrices: everything is an eigenvector."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
