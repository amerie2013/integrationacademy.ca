// LINALG1 Worksheet 8.1 — Eigenvectors and Eigenvalues
// Self-contained: complete notes, 9 worked examples with figures, 13 problems with an answer key.
import { svgT } from "./figT.mjs";
import { S, def, thm } from "./wkit.mjs";
import { rowPic, matPic } from "./fig3.mjs";
import { eigLines, notEig } from "./fig8.mjs";
import { am, steps } from "../bank/la.mjs";

const P = (svg, w = 4.4) => svgT(svg, w);
const M = (m) => am(m, false);
const C = (...a) => am(a.map((x) => [x]), false);

const NOTES = [
  { h: "1. Eigenvectors and eigenvalues",
    lead: def("eigenvector", S`For an \(n\times n\) matrix \(A\), a \emph{nonzero} vector \(\vec x\) with \(A\vec x=\lambda\vec x\) is an \emph{eigenvector}; the scalar \(\lambda\) is its \emph{eigenvalue}. Geometrically, \(A\) keeps the line through \(\vec x\) and stretches it by \(\lambda\) (flipping it if \(\lambda<0\)).`),
    fig: eigLines([[4, -2], [1, 1]], [[[2, 1], 3], [[1, 1], 2]], { w: 4.2 }), w: 0.5 },
  { h: "2. Checking a vector",
    lead: S`To test a given \(\vec x\), compute \(A\vec x\) and see whether it is a multiple of \(\vec x\). If \(A\vec x=c\vec x\), then \(\vec x\) is an eigenvector with \(\lambda=c\); otherwise it is not. Most vectors fail: \(A\) turns them.`,
    fig: notEig([[4, -2], [1, 1]], [1, 2], { w: 4 }), w: 0.5 },
  { h: "3. Eigenspaces",
    lead: thm("eigenspace", S`\(A\vec x=\lambda\vec x\iff(A-\lambda I)\vec x=\vec 0\). So \(\lambda\) is an eigenvalue \(\iff A-\lambda I\) is singular, and \(E_\lambda=\operatorname{Nul}(A-\lambda I)\) — all eigenvectors for \(\lambda\) together with \(\vec 0\) — is a subspace.`) + S`\pf{\(A\vec x-\lambda\vec x=(A-\lambda I)\vec x\); null spaces are subspaces.}`,
    fig: P(matPic([["a₁₁ − λ", "a₁₂"], ["a₂₁", "a₂₂ − λ"]], { label: "A − λI: subtract λ on the diagonal" }), 2.8), w: 0.55 },
  { h: "4. Triangular matrices and zero",
    lead: thm("quick facts", S`(1) The eigenvalues of a triangular matrix are its diagonal entries. (2) \(0\) is an eigenvalue \(\iff A\) is singular. (3) Eigenvectors for distinct eigenvalues are independent.`) + S`\pf{(1) \(A-\lambda I\) is triangular, singular exactly when a diagonal entry \(a_{ii}-\lambda\) is 0. (2) \(A\vec x=0\vec x\) has a nonzero solution. (3) Apply \(A\) to a dependence relation and subtract.}`,
    fig: P(matPic([["λ₁", "*", "*"], [0, "λ₂", "*"], [0, 0, "λ₃"]], { label: "triangular: eigenvalues on the diagonal" }), 2.4), w: 0.55 },
  { h: "5. Eigenvectors from geometry",
    lead: S`Some maps reveal their eigenvectors without computation. A reflection in a line keeps the line (\(\lambda=1\)) and reverses the perpendicular (\(\lambda=-1\)). A projection keeps its line (\(\lambda=1\)) and crushes the perpendicular (\(\lambda=0\)). A rotation by an angle other than \(0^\circ\) or \(180^\circ\) has no real eigenvectors.`,
    fig: eigLines([[0, 1], [1, 0]], [[[1, 1], 1], [[1, -1], -1]], { w: 4 }), w: 0.5 },
  { h: "6. Powers and inverses",
    lead: thm("eigenvalues of powers and inverses", S`If \(A\vec x=\lambda\vec x\), then \(A^k\vec x=\lambda^k\vec x\); if \(A\) is invertible, \(A^{-1}\vec x=\lambda^{-1}\vec x\).`) + S`\pf{\(A^2\vec x=A(\lambda\vec x)=\lambda^2\vec x\), and so on; \(\vec x=A^{-1}A\vec x=\lambda A^{-1}\vec x\).}`,
    fig: P(rowPic([[[["A"]], {}], [[["x"]], {}], "=", [[["λx"]], {}], "⇒", [[["Aᵏ"]], {}], [[["x"]], {}], "=", [[["λᵏx"]], {}]]), 4.2), w: 0.5 },
];

const EXAMPLES = [
  { title: "Testing three vectors", q: S`For \(A=${M([[4, -2], [1, 1]])}\), test \(\vec u=(2,1)\), \(\vec v=(1,1)\), \(\vec w=(1,2)\).`,
    fig: eigLines([[4, -2], [1, 1]], [[[2, 1], 3], [[1, 1], 2]], { w: 3.8 }),
    steps: [S`\[A\vec u=${M([[4, -2], [1, 1]])}${C(2, 1)}=${C("8-2", "2+1")}=${C(6, 3)}=3${C(2, 1)}:\ \lambda=3.\]`, S`\[A\vec v=${C("4-2", "1+1")}=${C(2, 2)}=2${C(1, 1)}:\ \lambda=2.\]`, S`\[A\vec w=${C("4-4", "1+2")}=${C(0, 3)},\] not a multiple of \((1,2)\): not an eigenvector.`],
    ans: S`\(\vec u\) (3), \(\vec v\) (2); \(\vec w\) no` },
  { title: "Testing two candidate eigenvalues", q: S`Is \(4\) an eigenvalue of \(A=${M([[2, 2], [1, 3]])}\)? Is \(2\)?`,
    fig: P(matPic([[-2, 2], [1, -1]], { label: "A − 4I" }), 1.8),
    steps: [S`\(A-4I=${M([[-2, 2], [1, -1]])}\xrightarrow{R_2\to R_2+\frac12R_1}${M([[-2, 2], [0, 0]])}\): a free variable, so 4 is an eigenvalue with eigenvector \((1,1)\). Check \(A${C(1, 1)}=${C(4, 4)}\) ✓.`, S`\(A-2I=${M([[0, 2], [1, 1]])}\xrightarrow{R_1\leftrightarrow R_2}${M([[1, 1], [0, 2]])}\): two pivots, so 2 is not an eigenvalue.`],
    ans: S`4 yes (\((1,1)\)); 2 no` },
  { title: "A plane of eigenvectors", q: S`Find a basis of \(E_3\) for \(A=${M([[3, 0, 0], [0, 3, 0], [1, 2, 5]])}\).`,
    fig: P(matPic([[0, 0, 0], [0, 0, 0], [1, 2, 2]], { label: "A − 3I" }), 2),
    steps: [...steps([[0, 0, 0], [0, 0, 0], [1, 2, 2]], [[S`Move the nonzero row up.`, ["R1<->R3"]]], { bar: false, intro: S`\(A-3I\)` }).steps,
      S`\(x_2=s\), \(x_3=t\), \(x_1=-2s-2t\): \(E_3=\operatorname{span}\{(-2,1,0),(-2,0,1)\}\).`,
      S`Check: \(A${C(-2, 1, 0)}=${C(-6, 3, "-2+2+0")}=3${C(-2, 1, 0)}\), \(A${C(-2, 0, 1)}=${C(-6, 0, "-2+0+5")}=3${C(-2, 0, 1)}\) ✓.`],
    ans: S`\(\{(-2,1,0),(-2,0,1)\}\)` },
  { title: "Triangular matrix", q: S`Find the eigenvalues of \(A=${M([[2, 5, 1], [0, -1, 4], [0, 0, 2]])}\) and an eigenvector for \(\lambda=-1\).`,
    fig: P(matPic([[2, 5, 1], [0, -1, 4], [0, 0, 2]], { label: "diagonal: 2, −1, 2", cells: [[0, 0], [1, 1], [2, 2]] }), 2),
    steps: [S`Diagonal entries: \(2,-1,2\).`, S`\(A+I=${M([[3, 5, 1], [0, 0, 4], [0, 0, 3]])}\xrightarrow{R_3\to R_3-\frac34R_2}${M([[3, 5, 1], [0, 0, 4], [0, 0, 0]])}\): \(x_3=0\), \(3x_1+5x_2=0\): \((5,-3,0)\).`, S`Check: \(A${C(5, -3, 0)}=${C("10-15+0", "3+0", 0)}=${C(-5, 3, 0)}=-1\cdot${C(5, -3, 0)}\) ✓.`],
    ans: S`\(2,-1,2\); \((5,-3,0)\)` },
  { title: "A reflection", q: S`Find the eigenvalues and eigenvectors of \(A=${M([[0, 1], [1, 0]])}\) geometrically and confirm.`,
    fig: eigLines([[0, 1], [1, 0]], [[[1, 1], 1], [[1, -1], -1]], { w: 3.8 }),
    steps: [S`\(A\) reflects in \(x_2=x_1\): the line is kept (\(\lambda=1\), \((1,1)\)), the perpendicular reversed (\(\lambda=-1\), \((1,-1)\)).`, S`\(A${C(1, 1)}=${C(1, 1)}\), \(A${C(1, -1)}=${C(-1, 1)}=-${C(1, -1)}\) ✓.`],
    ans: S`\(1\): \((1,1)\); \(-1\): \((1,-1)\)` },
  { title: "Eigenvalue zero", q: S`Show that \(0\) is an eigenvalue of \(A=${M([[1, 2], [2, 4]])}\) and find an eigenvector.`,
    fig: eigLines([[1, 2], [2, 4]], [[[2, -1], 0], [[1, 2], 5]], { w: 3.8 }),
    steps: [S`\(A\xrightarrow{R_2\to R_2-2R_1}${M([[1, 2], [0, 0]])}\): \(x_1=-2x_2\), so \((2,-1)\) solves \(A\vec x=\vec 0\).`, S`\(A${C(2, -1)}=${C("2-2", "4-4")}=\vec 0=0\cdot${C(2, -1)}\) ✓; \(A\) is singular.`],
    ans: S`\((2,-1)\), \(\lambda=0\)` },
  { title: "Eigenvalues of A²", q: S`\(A=${M([[2, 1], [0, 3]])}\) has eigenvector \((1,1)\). Find its eigenvalue for \(A\) and for \(A^2\), and check.`,
    fig: P(rowPic([[[[4, 5], [0, 9]], { label: "A²" }], [[[1], [1]], {}], "=", [[[9], [9]], {}]]), 2.8),
    steps: [S`\(A${C(1, 1)}=${C("2+1", "0+3")}=${C(3, 3)}\): \(\lambda=3\), so for \(A^2\) it is \(9\).`, S`\[A^2=${M([[2, 1], [0, 3]])}${M([[2, 1], [0, 3]])}=${M([["4+0", "2+3"], [0, 9]])}=${M([[4, 5], [0, 9]])},\quad A^2${C(1, 1)}=${C(9, 9)}\ \checkmark\]`],
    ans: S`\(3\) and \(9\)` },
  { title: "A 3 × 3 eigenvector", q: S`Is \((1,1,1)\) an eigenvector of \(A=${M([[1, 2, 3], [3, 2, 1], [2, 2, 2]])}\)?`,
    fig: P(rowPic([[[[1, 2, 3], [3, 2, 1], [2, 2, 2]], { label: "A" }], [[[1], [1], [1]], {}]]), 2.8),
    steps: [S`\[A${C(1, 1, 1)}=${C("1+2+3", "3+2+1", "2+2+2")}=${C(6, 6, 6)}=6${C(1, 1, 1)}.\]`, S`Yes, with \(\lambda=6\) (each row sums to 6).`],
    ans: S`yes, \(\lambda=6\)` },
  { title: "A and Aᵀ", q: S`Prove that \(A\) and \(A^T\) have the same eigenvalues.`,
    steps: [S`\(\lambda\) is an eigenvalue of \(A\iff A-\lambda I\) is singular.`, S`\((A-\lambda I)^T=A^T-\lambda I\), and a matrix is singular exactly when its transpose is. So the same \(\lambda\) work for \(A^T\).`],
    ans: S`\(A-\lambda I\) singular \(\iff(A-\lambda I)^T\) singular` },
];

const PROBLEMS = [
  { level: 1, q: S`Show that \((1,2)\) is an eigenvector of \(${M([[3, 1], [2, 4]])}\) and give \(\lambda\).`, ans: S`\(\lambda=5\)` },
  { level: 1, q: S`List the eigenvalues of \(${M([[4, 1], [0, -2]])}\).`, ans: S`\(4,-2\)`, fig: P(matPic([[4, 1], [0, -2]], { label: "triangular" }), 1.6) },
  { level: 1, q: S`Is \(0\) an eigenvalue of \(${M([[1, 1], [1, 1]])}\)?`, ans: S`yes, \((1,-1)\)` },
  { level: 2, q: S`Is \(3\) an eigenvalue of \(${M([[1, 2], [2, 1]])}\)? Find an eigenvector.`, ans: S`yes, \((1,1)\)` },
  { level: 2, q: S`Find a basis of \(E_2\) for \(\operatorname{diag}(2,2,5)\).`, ans: S`\(\{\vec e_1,\vec e_2\}\)` },
  { level: 2, q: S`Find an eigenvector of \(${M([[1, 2], [2, 1]])}\) for \(\lambda=-1\).`, ans: S`\((1,-1)\)`, fig: eigLines([[1, 2], [2, 1]], [[[1, 1], 3], [[1, -1], -1]], { w: 3.4 }) },
  { level: 2, q: S`Find a basis of \(E_1\) for \(${M([[1, 0, 1], [0, 1, 0], [0, 0, 2]])}\).`, ans: S`\(\{(1,0,0),(0,1,0)\}\)` },
  { level: 2, q: S`\((1,-1)\) is an eigenvector of \(${M([[4, 2], [1, 3]])}\). Find \(\lambda\).`, ans: S`\(2\)`, fig: notEig([[4, 2], [1, 3]], [1, 0], { w: 3.4 }) },
  { level: 3, space: 5, q: S`Prove that if \(A\vec x=\lambda\vec x\) then \(A^k\vec x=\lambda^k\vec x\) for every \(k\ge1\).`, ans: S`induction: \(A^{k+1}\vec x=A(\lambda^k\vec x)=\lambda^{k+1}\vec x\)` },
  { level: 3, space: 5, q: S`Prove that \(0\) is an eigenvalue of \(A\) exactly when \(A\) is singular.`, ans: S`\(A\vec x=\vec 0\) has a nonzero solution \(\iff\) singular` },
  { level: 3, space: 5, q: S`\(P^2=P\). Prove every eigenvalue of \(P\) is 0 or 1.`, ans: S`\(\lambda\vec x=P\vec x=P^2\vec x=\lambda^2\vec x\Rightarrow\lambda^2=\lambda\)` },
  { level: 3, space: 5, q: S`Show that \(A+cI\) has eigenvalue \(\lambda+c\) whenever \(A\) has eigenvalue \(\lambda\), with the same eigenvector.`, ans: S`\((A+cI)\vec x=\lambda\vec x+c\vec x\)`, fig: P(matPic([["a + c", "b"], ["c₂", "d + c"]], { label: "A + cI" }), 2) },
  { level: 3, space: 5, q: S`Show that the rotation by \(90^\circ\) has no real eigenvectors.`, ans: S`\(R(x_1,x_2)=(-x_2,x_1)=\lambda(x_1,x_2)\) forces \(\lambda^2=-1\)` },
];

export const WS = {
  code: "8.1",
  title: "Eigenvectors and Eigenvalues",
  bigideas: S`An eigenvector is a nonzero vector that \(A\) only stretches: \(A\vec x=\lambda\vec x\). A number \(\lambda\) is an eigenvalue exactly when \(A-\lambda I\) is singular, and the eigenvectors for \(\lambda\) fill the eigenspace \(\operatorname{Nul}(A-\lambda I)\).`,
  goals: ["Define eigenvectors, eigenvalues and eigenspaces.", "Check a vector with one product.", "Test \\(\\lambda\\) by row reducing \\(A-\\lambda I\\).", "Find eigenspace bases.", "Use triangular matrices, \\(\\lambda=0\\) and geometry."],
  curriculum: "Eigenvalues and eigenvectors — definitions and eigenspaces",
  vocab: [["Eigenvector", "\\(\\vec x\\ne\\vec 0\\), \\(A\\vec x=\\lambda\\vec x\\)"], ["Eigenvalue", "the scalar \\(\\lambda\\)"], ["Eigenspace", "\\(\\operatorname{Nul}(A-\\lambda I)\\)"], ["\\(A-\\lambda I\\)", "singular at eigenvalues"], ["Triangular", "eigenvalues on the diagonal"]],
  hook: S`Spin a globe: every point moves except those on the axis. Which directions does a matrix leave alone?`,
  concepts: NOTES,
  summary: [
    S`\(A\vec x=\lambda\vec x\), \(\vec x\ne\vec 0\).`,
    S`\(\lambda\) eigenvalue \(\iff A-\lambda I\) singular.`,
    S`\(E_\lambda=\operatorname{Nul}(A-\lambda I)\).`,
    S`Triangular: diagonal entries.`,
    S`\(A^k\vec x=\lambda^k\vec x\).`,
  ],
  tips: ["The zero vector is never an eigenvector.", "Subtract lambda only on the diagonal.", "Check every eigenvector with one product.", "Give a basis for an eigenspace.", "Do not row reduce A before finding eigenvalues."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
