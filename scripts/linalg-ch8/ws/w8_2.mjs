// LINALG1 Worksheet 8.2 — The Characteristic Equation
// Self-contained: complete notes, 9 worked examples with figures, 13 problems with an answer key.
import { svgT } from "./figT.mjs";
import { S, def, thm } from "./wkit.mjs";
import { matPic } from "./fig3.mjs";
import { vecs2 } from "./fig5.mjs";
import { eigLines } from "./fig8.mjs";
import { am } from "../bank/la.mjs";

const P = (svg, w = 4.4) => svgT(svg, w);
const M = (m) => am(m, false);
const D = (m) => S`\left|\begin{array}{${"c".repeat(m[0].length)}}${m.map((r) => r.join(" & ")).join(" \\\\ ")}\end{array}\right|`;
const parab = (b, c, x0, x1) => { const pts = []; for (let x = x0; x <= x1 + 1e-9; x += 0.1) pts.push([x, x * x + b * x + c]); return pts; };
const pfig = (b, c, roots, view, w = 4) => vecs2([], view, { segs: [{ pts: parab(b, c, view.xmin, view.xmax).filter(([, y]) => y <= view.ymax + 2 && y >= view.ymin - 2), color: "violet", w: 2.6 }], points: roots.map((r) => ({ x: r, y: 0, color: "red", label: `λ = ${String(r).replace("-", "−")}` })), w });

const NOTES = [
  { h: "1. The characteristic equation",
    lead: thm("characteristic equation", S`\(\lambda\) is an eigenvalue of \(A\) \(\iff\det(A-\lambda I)=0\). The \emph{characteristic polynomial} \(p(\lambda)=\det(A-\lambda I)\) has degree \(n\).`) + S`\pf{\(A-\lambda I\) singular \(\iff\) its determinant is 0. Each term of the expansion multiplies \(n\) entries, each of degree at most 1 in \(\lambda\).}`,
    fig: pfig(-1, -2, [2, -1], { xmin: -3, xmax: 4, ymin: -4, ymax: 6 }), w: 0.5 },
  { h: "2. The 2 × 2 shortcut",
    lead: S`\[\det${M([["a-\\lambda", "b"], ["c", "d-\\lambda"]])}=(a-\lambda)(d-\lambda)-bc=\lambda^2-(\operatorname{tr}A)\lambda+\det A.\] Solve the quadratic; the discriminant \((\operatorname{tr}A)^2-4\det A\) decides: positive — two real eigenvalues; zero — one repeated; negative — a complex pair.`,
    fig: P(matPic([["a − λ", "b"], ["c", "d − λ"]], { label: "det = λ² − (tr A)λ + det A" }), 2.6), w: 0.55 },
  { h: "3. Larger matrices",
    lead: S`For \(3\times3\) matrices expand \(\det(A-\lambda I)\) by cofactors along a row or column with many zeros. Keep factors such as \((3-\lambda)\) unexpanded — each gives a root immediately.`,
    fig: P(matPic([["2 − λ", 0, 1], [0, "3 − λ", 0], [1, 0, "2 − λ"]], { label: "expand along row 2", rows: [1] }), 2.6), w: 0.55 },
  { h: "4. Multiplicity",
    lead: def("algebraic multiplicity", S`If \((\lambda_0-\lambda)^m\) divides \(p(\lambda)\) but \((\lambda_0-\lambda)^{m+1}\) does not, \(\lambda_0\) has \emph{algebraic multiplicity} \(m\). Over the complex numbers the multiplicities add to \(n\).`),
    fig: pfig(-4, 4, [2], { xmin: -1, xmax: 5, ymin: -2, ymax: 6 }), w: 0.5 },
  { h: "5. Trace and determinant",
    lead: thm("checks", S`With multiplicity (complex roots included): \(\lambda_1+\dots+\lambda_n=\operatorname{tr}A\) and \(\lambda_1\cdots\lambda_n=\det A\). Similar matrices have the same characteristic polynomial.`) + S`\pf{\(p(0)=\det A\); compare the \(\lambda^{n-1}\) coefficient; \(\det(P^{-1}(A-\lambda I)P)=\det(A-\lambda I)\).}`,
    fig: eigLines([[6, -1], [2, 3]], [[[1, 1], 5], [[1, 2], 4]], { w: 4 }), w: 0.5 },
  { h: "6. Complex eigenvalues",
    lead: S`A real matrix can have a negative discriminant: then the eigenvalues are \(\alpha\pm\beta i\), a conjugate pair. Such matrices rotate the plane and have no real eigenvectors (8.6).`,
    fig: pfig(-2, 5, [], { xmin: -2, xmax: 4, ymin: -1, ymax: 10 }), w: 0.5 },
];

const EXAMPLES = [
  { title: "Expanding a 2 × 2 determinant", q: S`Find the eigenvalues of \(A=${M([[4, -5], [2, -3]])}\).`,
    fig: pfig(-1, -2, [2, -1], { xmin: -3, xmax: 4, ymin: -4, ymax: 6 }, 3.8),
    steps: [S`\[\det(A-\lambda I)=${D([["4-\\lambda", -5], [2, "-3-\\lambda"]])}=(4-\lambda)(-3-\lambda)+10=(\lambda^2-\lambda-12)+10=\lambda^2-\lambda-2.\]`, S`\((\lambda-2)(\lambda+1)=0\): \(\lambda=2,-1\). Check: sum \(1=\operatorname{tr}A\), product \(-2=\det A=-12+10\) ✓.`],
    ans: S`\(2,-1\)` },
  { title: "The shortcut", q: S`Find the eigenvalues and eigenvectors of \(A=${M([[6, -1], [2, 3]])}\).`,
    fig: eigLines([[6, -1], [2, 3]], [[[1, 1], 5], [[1, 2], 4]], { w: 3.8 }),
    steps: [S`\(\operatorname{tr}A=9\), \(\det A=18+2=20\): \(\lambda^2-9\lambda+20=(\lambda-4)(\lambda-5)\).`, S`\(\lambda=5\): \(A-5I=${M([[1, -1], [2, -2]])}\): \((1,1)\). \(\lambda=4\): \(A-4I=${M([[2, -1], [2, -1]])}\): \((1,2)\).`, S`Check: \(A${M([[1, 1], [1, 2]])}=${M([[5, 4], [5, 8]])}=${M([[1, 1], [1, 2]])}${M([[5, 0], [0, 4]])}\) ✓.`],
    ans: S`\(5\): \((1,1)\); \(4\): \((1,2)\)` },
  { title: "A complex pair", q: S`Find the eigenvalues of \(A=${M([[2, -5], [1, 0]])}\).`,
    fig: pfig(-2, 5, [], { xmin: -2, xmax: 4, ymin: -1, ymax: 10 }, 3.8),
    steps: [S`\(\operatorname{tr}A=2\), \(\det A=0+5=5\): \(\lambda^2-2\lambda+5=0\).`, S`\(\lambda=\dfrac{2\pm\sqrt{4-20}}2=1\pm2i\). Check: \((1+2i)(1-2i)=1+4=5\) ✓.`],
    ans: S`\(1\pm2i\)` },
  { title: "A 3 × 3 matrix by a good row", q: S`Find the eigenvalues of \(A=${M([[2, 0, 1], [0, 3, 0], [1, 0, 2]])}\) with multiplicities.`,
    fig: P(matPic([["2 − λ", 0, 1], [0, "3 − λ", 0], [1, 0, "2 − λ"]], { label: "A − λI", rows: [1] }), 2.6),
    steps: [S`Expand along row 2: \[\det(A-\lambda I)=(3-\lambda)${D([["2-\\lambda", 1], [1, "2-\\lambda"]])}=(3-\lambda)\big[(2-\lambda)^2-1\big]=(3-\lambda)(1-\lambda)(3-\lambda).\]`, S`Eigenvalues \(3\) (multiplicity 2) and \(1\). Check: \(3+3+1=7=\operatorname{tr}A\); \(3\cdot3\cdot1=9=\det A=3(4-1)\) ✓.`],
    ans: S`\(3,3,1\)` },
  { title: "A block structure", q: S`Find the eigenvalues of \(A=${M([[1, 2, 0], [2, 1, 0], [0, 0, -1]])}\).`,
    fig: P(matPic([[1, 2, 0], [2, 1, 0], [0, 0, -1]], { label: "a 2 × 2 block and a 1 × 1 block" }), 2.2),
    steps: [S`Expand along row 3: \(\det(A-\lambda I)=(-1-\lambda)${D([["1-\\lambda", 2], [2, "1-\\lambda"]])}=(-1-\lambda)\big[(1-\lambda)^2-4\big]\).`, S`\((1-\lambda)^2-4=(\lambda-3)(\lambda+1)\), so the eigenvalues are \(-1\) (multiplicity 2) and \(3\). Check: \(-1-1+3=1=\operatorname{tr}A\) ✓.`],
    ans: S`\(-1,-1,3\)` },
  { title: "A repeated root", q: S`Find the eigenvalues of \(A=${M([[3, 1], [-1, 1]])}\).`,
    fig: pfig(-4, 4, [2], { xmin: -1, xmax: 5, ymin: -2, ymax: 6 }, 3.8),
    steps: [S`\(\operatorname{tr}A=4\), \(\det A=3+1=4\): \(\lambda^2-4\lambda+4=(\lambda-2)^2\).`, S`\(\lambda=2\) with algebraic multiplicity 2 (the discriminant \(16-16=0\)).`],
    ans: S`\(2\) (double)` },
  { title: "Real or complex?", q: S`For which \(k\) does \(${M([[1, "k"], [1, 1]])}\) have real eigenvalues?`,
    fig: P(matPic([["1 − λ", "k"], [1, "1 − λ"]], { label: "A − λI" }), 2),
    steps: [S`\(\det(A-\lambda I)=(1-\lambda)^2-k=0\iff\lambda=1\pm\sqrt k\).`, S`Real exactly when \(k\ge0\) (repeated when \(k=0\), complex when \(k<0\)).`],
    ans: S`\(k\ge0\)` },
  { title: "Using trace and determinant", q: S`A \(2\times2\) matrix has trace 5 and eigenvalue 2. Find the other eigenvalue and \(\det A\).`,
    fig: P(matPic([["λ₁ + λ₂ = 5"], ["λ₁λ₂ = det A"]], { label: "checks" }), 2),
    steps: [S`\(\lambda_2=\operatorname{tr}A-\lambda_1=5-2=3\).`, S`\(\det A=\lambda_1\lambda_2=6\).`],
    ans: S`\(3\); \(\det A=6\)` },
  { title: "Triangular characteristic polynomials", q: S`Prove that the eigenvalues of a triangular matrix are its diagonal entries, via the characteristic polynomial.`,
    steps: [S`\(A-\lambda I\) is triangular with diagonal \(a_{11}-\lambda,\dots,a_{nn}-\lambda\).`, S`The determinant of a triangular matrix is the product of its diagonal: \(p(\lambda)=(a_{11}-\lambda)\cdots(a_{nn}-\lambda)\), whose roots are \(a_{11},\dots,a_{nn}\).`],
    ans: S`\(p(\lambda)=\prod(a_{ii}-\lambda)\)` },
];

const PROBLEMS = [
  { level: 1, q: S`Find the eigenvalues of \(${M([[1, 4], [2, 3]])}\).`, ans: S`\(5,-1\)` },
  { level: 1, q: S`Find the eigenvalues of \(${M([[0, 1], [1, 0]])}\).`, ans: S`\(\pm1\)`, fig: eigLines([[0, 1], [1, 0]], [[[1, 1], 1], [[1, -1], -1]], { w: 3.2 }) },
  { level: 1, q: S`Write the characteristic polynomial of a \(2\times2\) matrix with trace 3 and determinant \(-4\).`, ans: S`\(\lambda^2-3\lambda-4\)` },
  { level: 2, q: S`Find the eigenvalues of \(${M([[5, 4], [1, 2]])}\).`, ans: S`\(1,6\)` },
  { level: 2, q: S`Find the eigenvalues of \(${M([[1, -1], [1, 1]])}\).`, ans: S`\(1\pm i\)`, fig: pfig(-2, 2, [], { xmin: -2, xmax: 4, ymin: -1, ymax: 6 }, 3.2) },
  { level: 2, q: S`Find the eigenvalues of \(${M([[1, 0, 0], [2, 3, 0], [4, 5, 6]])}\).`, ans: S`\(1,3,6\)` },
  { level: 2, q: S`Find the eigenvalues of \(${M([[2, 1, 0], [1, 2, 0], [0, 0, 4]])}\).`, ans: S`\(1,3,4\)`, fig: P(matPic([[2, 1, 0], [1, 2, 0], [0, 0, 4]], { label: "block form" }), 2) },
  { level: 2, q: S`\(\det(A-\lambda I)=(2-\lambda)^2(-1-\lambda)\). Give each eigenvalue's multiplicity and \(\det A\).`, ans: S`\(2\) (twice), \(-1\) (once); \(\det A=-4\)` },
  { level: 3, space: 5, q: S`For which \(k\) is 0 an eigenvalue of \(${M([["k", 1], [1, "k"]])}\)?`, ans: S`\(k=\pm1\)` },
  { level: 3, space: 5, q: S`Show that \(${M([["a", "b"], ["-b", "a"]])}\) has non-real eigenvalues when \(b\ne0\).`, ans: S`\((a-\lambda)^2+b^2=0\Rightarrow\lambda=a\pm bi\)` },
  { level: 3, space: 5, q: S`Prove that \(\det A\) is the product of the eigenvalues of a \(2\times2\) matrix.`, ans: S`compare \(\lambda^2-(\operatorname{tr}A)\lambda+\det A=(\lambda-\lambda_1)(\lambda-\lambda_2)\)` },
  { level: 3, space: 5, q: S`Give a non-diagonal \(2\times2\) matrix with eigenvalues 2 and 3.`, ans: S`e.g. \(${M([[2, 1], [0, 3]])}\)`, fig: P(matPic([[2, 1], [0, 3]], { label: "one answer" }), 1.6) },
  { level: 3, space: 5, q: S`Prove that similar matrices have the same eigenvalues.`, ans: S`\(\det(P^{-1}AP-\lambda I)=\det(P^{-1}(A-\lambda I)P)=\det(A-\lambda I)\)` },
];

export const WS = {
  code: "8.2",
  title: "The Characteristic Equation",
  bigideas: S`All eigenvalues come from one equation, \(\det(A-\lambda I)=0\). For \(2\times2\) matrices it is \(\lambda^2-(\operatorname{tr}A)\lambda+\det A=0\); for larger matrices expand along a convenient row. Roots may repeat or be complex, and their sum and product always equal the trace and the determinant.`,
  goals: ["Form and solve \\(\\det(A-\\lambda I)=0\\).", "Use the trace–determinant form.", "Expand \\(3\\times3\\) characteristic polynomials.", "State multiplicities; recognise complex roots.", "Check with trace and determinant."],
  curriculum: "Eigenvalues and eigenvectors — the characteristic equation",
  vocab: [["Characteristic polynomial", "\\(\\det(A-\\lambda I)\\)"], ["Trace", "sum of eigenvalues"], ["Determinant", "product of eigenvalues"], ["Multiplicity", "repeated roots"], ["Discriminant", "real vs complex"]],
  hook: S`A matrix hides a polynomial whose roots tell you how it stretches space. How do you find that polynomial?`,
  concepts: NOTES,
  summary: [
    S`\(\det(A-\lambda I)=0\) gives every eigenvalue.`,
    S`\(2\times2\): \(\lambda^2-(\operatorname{tr}A)\lambda+\det A\).`,
    S`Expand along rows with zeros; keep factors.`,
    S`\(\sum\lambda=\operatorname{tr}A\), \(\prod\lambda=\det A\).`,
    S`Negative discriminant: complex pair.`,
  ],
  tips: ["Subtract lambda on the diagonal only.", "Keep linear factors unexpanded.", "Check with trace and determinant.", "Count multiplicities.", "Expect complex pairs for rotations."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
