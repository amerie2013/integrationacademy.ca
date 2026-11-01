// LINALG1 Worksheet 8.7 — Symmetric Matrices
// Self-contained: complete notes, 9 worked examples with figures, 13 problems with an answer key.
import { svgT } from "./figT.mjs";
import { S, def, thm } from "./wkit.mjs";
import { rowPic, matPic } from "./fig3.mjs";
import { vecs2 } from "./fig5.mjs";
import { eigLines } from "./fig8.mjs";
import { am } from "../bank/la.mjs";

const P = (svg, w = 4.4) => svgT(svg, w);
const M = (m) => am(m, false);
const C = (...a) => am(a.map((x) => [x]), false);
const ellipse = (a, b, d) => { const n = Math.hypot(...d), c = d[0] / n, s = d[1] / n, pts = []; for (let t = 0; t <= 2 * Math.PI + 1e-6; t += 0.05) { const x = a * Math.cos(t), y = b * Math.sin(t); pts.push([x * c - y * s, x * s + y * c]); } return pts; };
const ellFig = (a, b, d, w = 4) => vecs2([[[d[0], d[1]], "u₁", "blue"], [[-d[1], d[0]], "u₂", "red"]], { xmin: -2, xmax: 2, ymin: -2, ymax: 2 }, { segs: [{ pts: ellipse(a, b, d), color: "violet", w: 2.4 }], w });

const NOTES = [
  { h: "1. Symmetric matrices",
    lead: def("symmetric", S`\(A\) is \emph{symmetric} if \(A^T=A\). An \emph{orthogonal matrix} \(Q\) has orthonormal columns: \(Q^TQ=I\), so \(Q^{-1}=Q^T\).`) + thm("eigen-facts", S`For real symmetric \(A\): all eigenvalues are real, and eigenvectors for different eigenvalues are orthogonal.`) + S`\pf{If \(A\vec u=\lambda\vec u\), \(A\vec w=\mu\vec w\): \(\lambda\vec u^T\vec w=(A\vec u)^T\vec w=\vec u^TA\vec w=\mu\vec u^T\vec w\), so \((\lambda-\mu)\vec u^T\vec w=0\).}`,
    fig: eigLines([[5, 2], [2, 2]], [[[2, 1], 6], [[1, -2], 1]], { w: 4 }), w: 0.5 },
  { h: "2. The spectral theorem",
    lead: thm("spectral theorem", S`A real matrix is orthogonally diagonalisable, \(A=QDQ^T\) with \(Q\) orthogonal and \(D\) diagonal, if and only if it is symmetric.`) + S`\pf{If \(A=QDQ^T\), then \(A^T=QD^TQ^T=A\). The converse is proved by induction on \(n\) (quoted).}`,
    fig: P(rowPic([[[["Q"]], {}], [[["λ₁", 0], [0, "λ₂"]], { label: "D" }], [[["Qᵀ"]], {}]]), 3.2), w: 0.5 },
  { h: "3. The recipe",
    lead: S`(1) Eigenvalues. (2) Eigenspace bases. (3) Inside any eigenspace of dimension \(\ge2\), make the basis orthogonal (Gram–Schmidt: \(\vec w_2=\vec v_2-\tfrac{\vec v_2\cdot\vec w_1}{\vec w_1\cdot\vec w_1}\vec w_1\)). (4) Normalise. (5) \(Q=[\vec u_1\cdots\vec u_n]\); check \(Q^TQ=I\) and \(AQ=QD\).`,
    fig: vecs2([[[1, -1], "v₁", "blue"], [[1, 0], "v₂", "red"], [[0.5, 0.5], "w₂ ⟂ v₁", "violet", null, true]], { xmin: -1, xmax: 2, ymin: -2, ymax: 1 }), w: 0.5 },
  { h: "4. Spectral decomposition",
    lead: def("spectral decomposition", S`\(A=QDQ^T=\lambda_1\vec u_1\vec u_1^T+\dots+\lambda_n\vec u_n\vec u_n^T\), where \(\vec u_i\vec u_i^T\) is the projection onto the line through \(\vec u_i\).`),
    fig: P(matPic([["λ₁u₁u₁ᵀ"], ["+ λ₂u₂u₂ᵀ"]], { label: "a sum of projections" }), 2), w: 0.55 },
  { h: "5. Quadratic forms",
    lead: S`\(Q(\vec x)=\vec x^TA\vec x\) with \(A\) symmetric (the coefficient of \(x_ix_j\), \(i\ne j\), is split equally into \(a_{ij}\) and \(a_{ji}\)). With \(\vec x=Q\vec y\): \(\vec x^TA\vec x=\lambda_1y_1^2+\dots+\lambda_ny_n^2\). All \(\lambda>0\): positive definite (ellipse); mixed signs: indefinite (hyperbola).`,
    fig: ellFig(1 / Math.sqrt(6), 1, [2, 1]), w: 0.5 },
  { h: "6. Orthogonal matrices",
    lead: S`\(Q^TQ=I\) means the columns are unit vectors at right angles. Orthogonal matrices keep lengths and angles: \(|Q\vec x|^2=\vec x^TQ^TQ\vec x=|\vec x|^2\). Rotations and reflections are examples.`,
    fig: P(matPic([["⅓", "⅔", "⅔"], ["⅔", "⅓", "−⅔"], ["⅔", "−⅔", "⅓"]], { label: "an orthogonal matrix" }), 2.4), w: 0.55 },
];

const EXAMPLES = [
  { title: "Orthogonal diagonalisation", q: S`Orthogonally diagonalise \(A=${M([[5, 2], [2, 2]])}\).`,
    fig: eigLines([[5, 2], [2, 2]], [[[2, 1], 6], [[1, -2], 1]], { w: 3.8 }),
    steps: [S`\(\operatorname{tr}A=7\), \(\det A=6\): \((\lambda-6)(\lambda-1)\). \(A-6I=${M([[-1, 2], [2, -4]])}\): \((2,1)\); \(A-I=${M([[4, 2], [2, 1]])}\): \((1,-2)\).`, S`\(Q=\tfrac1{\sqrt5}${M([[2, 1], [1, -2]])}\), \(D=\operatorname{diag}(6,1)\).`, S`\[QDQ^T=\tfrac15${M([[2, 1], [1, -2]])}${M([[6, 0], [0, 1]])}${M([[2, 1], [1, -2]])}=\tfrac15${M([[12, 1], [6, -2]])}${M([[2, 1], [1, -2]])}=\tfrac15${M([["24+1", "12-2"], ["12-2", "6+4"]])}=${M([[5, 2], [2, 2]])}\ \checkmark\]`],
    ans: S`\(Q=\tfrac1{\sqrt5}${M([[2, 1], [1, -2]])}\), \(D=\operatorname{diag}(6,1)\)` },
  { title: "Perpendicular eigenvectors", q: S`Find the eigenvectors of \(A=${M([[4, -2], [-2, 1]])}\) and check they are perpendicular.`,
    fig: eigLines([[4, -2], [-2, 1]], [[[2, -1], 5], [[1, 2], 0]], { w: 3.8 }),
    steps: [S`\(\operatorname{tr}A=5\), \(\det A=0\): \(\lambda=5,0\). \(A-5I=${M([[-1, -2], [-2, -4]])}\): \((2,-1)\); \(A\): \((1,2)\).`, S`\(${M([[2, -1]])}${C(1, 2)}=2-2=0\) ✓.`],
    ans: S`\((2,-1)\), \((1,2)\)` },
  { title: "A 3 × 3 symmetric matrix", q: S`Orthogonally diagonalise \(A=${M([[1, 1, 0], [1, 1, 0], [0, 0, 2]])}\).`,
    fig: P(matPic([[1, 1, 0], [1, 1, 0], [0, 0, 2]], { label: "A" }), 2),
    steps: [S`Expand along row 3: \((2-\lambda)\big[(1-\lambda)^2-1\big]=(2-\lambda)\lambda(\lambda-2)\): eigenvalues \(2,2,0\).`, S`\(A-2I=${M([[-1, 1, 0], [1, -1, 0], [0, 0, 0]])}\): \(E_2=\operatorname{span}\{(1,1,0),(0,0,1)\}\) (already orthogonal). \(E_0=\operatorname{span}\{(1,-1,0)\}\).`, S`\(Q=${M([["\\tfrac1{\\sqrt2}", 0, "\\tfrac1{\\sqrt2}"], ["\\tfrac1{\\sqrt2}", 0, "-\\tfrac1{\\sqrt2}"], [0, 1, 0]])}\), \(D=\operatorname{diag}(2,2,0)\).`],
    ans: S`\(D=\operatorname{diag}(2,2,0)\)` },
  { title: "Gram–Schmidt inside an eigenspace", q: S`\(A=${M([[3, -1, -1], [-1, 3, -1], [-1, -1, 3]])}\) has \(E_4=\{x_1+x_2+x_3=0\}\) and \(E_1=\operatorname{span}\{(1,1,1)\}\). Find an orthonormal eigenbasis.`,
    fig: P(matPic([[-1, -1, -1], [-1, -1, -1], [-1, -1, -1]], { label: "A − 4I: rank 1" }), 2),
    steps: [S`Basis of \(E_4\): \(\vec v_1=(1,-1,0)\), \(\vec v_2=(1,0,-1)\); \(\vec v_1\cdot\vec v_2=1\ne0\).`, S`\(\vec w_2=\vec v_2-\tfrac{\vec v_2\cdot\vec v_1}{\vec v_1\cdot\vec v_1}\vec v_1=${C(1, 0, -1)}-\tfrac12${C(1, -1, 0)}=${C("\\tfrac12", "\\tfrac12", -1)}\), i.e. \((1,1,-2)\).`, S`Orthonormal eigenbasis: \(\tfrac1{\sqrt2}(1,-1,0)\), \(\tfrac1{\sqrt6}(1,1,-2)\), \(\tfrac1{\sqrt3}(1,1,1)\). Check \(A${C(1, 1, -2)}=${C("3-1+2", "-1+3+2", "-1-1-6")}=${C(4, 4, -8)}=4${C(1, 1, -2)}\) ✓.`],
    ans: S`as shown` },
  { title: "Spectral decomposition", q: S`Write \(A=${M([[5, 2], [2, 2]])}\) as \(6\vec u_1\vec u_1^T+\vec u_2\vec u_2^T\).`,
    fig: P(rowPic([[[[4, 2], [2, 1]], { label: "5u₁u₁ᵀ" }], "+", [[[1, -2], [-2, 4]], { label: "5u₂u₂ᵀ" }]]), 3.2),
    steps: [S`\(\vec u_1\vec u_1^T=\tfrac15${C(2, 1)}${M([[2, 1]])}=\tfrac15${M([[4, 2], [2, 1]])}\), \(\vec u_2\vec u_2^T=\tfrac15${M([[1, -2], [-2, 4]])}\).`, S`\[\tfrac65${M([[4, 2], [2, 1]])}+\tfrac15${M([[1, -2], [-2, 4]])}=\tfrac15${M([["24+1", "12-2"], ["12-2", "6+4"]])}=${M([[5, 2], [2, 2]])}\ \checkmark\]`],
    ans: S`as shown` },
  { title: "A positive definite form", q: S`Remove the cross term of \(5x_1^2+4x_1x_2+2x_2^2\).`,
    fig: ellFig(1 / Math.sqrt(6), 1, [2, 1], 3.8),
    steps: [S`\(A=${M([[5, 2], [2, 2]])}\) (cross coefficient 4 split as 2 and 2).`, S`With \(\vec x=Q\vec y\), \(Q=\tfrac1{\sqrt5}${M([[2, 1], [1, -2]])}\): \(\vec x^TA\vec x=6y_1^2+y_2^2\). Both eigenvalues positive: positive definite, and the level set \(=1\) is an ellipse.`],
    ans: S`\(6y_1^2+y_2^2\)` },
  { title: "Checking an orthogonal matrix", q: S`Show \(Q=\tfrac13${M([[1, 2, 2], [2, 1, -2], [2, -2, 1]])}\) is orthogonal.`,
    fig: P(matPic([[1, 2, 2], [2, 1, -2], [2, -2, 1]], { label: "3Q" }), 2),
    steps: [S`\[Q^TQ=\tfrac19${M([[1, 2, 2], [2, 1, -2], [2, -2, 1]])}${M([[1, 2, 2], [2, 1, -2], [2, -2, 1]])}=\tfrac19${M([["1+4+4", "2+2-4", "2-4+2"], ["2+2-4", "4+1+4", "4-2-2"], ["2-4+2", "4-2-2", "4+4+1"]])}=I.\]`],
    ans: S`\(Q^TQ=I\)` },
  { title: "Building a symmetric matrix", q: S`Find the symmetric matrix with eigenvalue 3 on \((1,1)\) and \(-1\) on \((1,-1)\).`,
    fig: eigLines([[1, 2], [2, 1]], [[[1, 1], 3], [[1, -1], -1]], { w: 3.8 }),
    steps: [S`\[A=3\cdot\tfrac12${M([[1, 1], [1, 1]])}+(-1)\cdot\tfrac12${M([[1, -1], [-1, 1]])}=\tfrac12${M([["3-1", "3+1"], ["3+1", "3-1"]])}=${M([[1, 2], [2, 1]])}.\]`, S`Check: \(A${C(1, 1)}=${C(3, 3)}\), \(A${C(1, -1)}=${C(-1, 1)}\) ✓.`],
    ans: S`\(${M([[1, 2], [2, 1]])}\)` },
  { title: "Why eigenvectors are perpendicular", q: S`Prove that eigenvectors of a symmetric matrix for distinct eigenvalues are orthogonal.`,
    steps: [S`\(\lambda\vec u\cdot\vec w=(A\vec u)^T\vec w=\vec u^TA^T\vec w=\vec u^TA\vec w=\mu\,\vec u\cdot\vec w\).`, S`\((\lambda-\mu)\vec u\cdot\vec w=0\) and \(\lambda\ne\mu\), so \(\vec u\cdot\vec w=0\).`],
    ans: S`\((\lambda-\mu)\vec u\cdot\vec w=0\)` },
];

const PROBLEMS = [
  { level: 1, q: S`Is \(${M([[1, 4], [4, 1]])}\) orthogonally diagonalisable?`, ans: S`yes (symmetric)` },
  { level: 1, q: S`\(Q\) is orthogonal. Write \(Q^{-1}\).`, ans: S`\(Q^T\)` },
  { level: 1, q: S`Write the symmetric matrix of \(2x_1^2-6x_1x_2+x_2^2\).`, ans: S`\(${M([[2, -3], [-3, 1]])}\)`, fig: P(matPic([[2, -3], [-3, 1]], { label: "A" }), 1.6) },
  { level: 2, q: S`Orthogonally diagonalise \(${M([[2, 2], [2, -1]])}\).`, ans: S`\(Q=\tfrac1{\sqrt5}${M([[2, 1], [1, -2]])}\), \(D=\operatorname{diag}(3,-2)\)`, fig: eigLines([[2, 2], [2, -1]], [[[2, 1], 3], [[1, -2], -2]], { w: 3.2 }) },
  { level: 2, q: S`Orthogonally diagonalise \(${M([[6, 0], [0, -1]])}\).`, ans: S`\(Q=I\), \(D=A\)` },
  { level: 2, q: S`Classify \(x_1^2+4x_1x_2+x_2^2\).`, ans: S`indefinite: eigenvalues \(3,-1\)` },
  { level: 2, q: S`Find an orthonormal basis of \(E_2\) for \(${M([[2, 0, 0], [0, 2, 0], [0, 0, 5]])}\).`, ans: S`\(\vec e_1,\vec e_2\)` },
  { level: 2, q: S`Write \(${M([[3, 1], [1, 3]])}\)'s spectral decomposition.`, ans: S`\(4\cdot\tfrac12${M([[1, 1], [1, 1]])}+2\cdot\tfrac12${M([[1, -1], [-1, 1]])}\)`, fig: eigLines([[3, 1], [1, 3]], [[[1, 1], 4], [[1, -1], 2]], { w: 3.2 }) },
  { level: 3, space: 5, q: S`Prove that \(QDQ^T\) is symmetric for every diagonal \(D\).`, ans: S`\((QDQ^T)^T=QDQ^T\)` },
  { level: 3, space: 5, q: S`Prove that an orthogonal matrix keeps lengths.`, ans: S`\(|Q\vec x|^2=\vec x^TQ^TQ\vec x=|\vec x|^2\)` },
  { level: 3, space: 5, q: S`Find an orthonormal eigenbasis of \(${M([[2, 1, 1], [1, 2, 1], [1, 1, 2]])}\) different from \(\tfrac1{\sqrt2}(1,-1,0)\), \(\tfrac1{\sqrt6}(1,1,-2)\), \(\tfrac1{\sqrt3}(1,1,1)\).`, ans: S`e.g. \(\tfrac1{\sqrt2}(1,0,-1)\), \(\tfrac1{\sqrt6}(1,-2,1)\), \(\tfrac1{\sqrt3}(1,1,1)\)`, fig: P(matPic([[2, 1, 1], [1, 2, 1], [1, 1, 2]], { label: "A" }), 2) },
  { level: 3, space: 5, q: S`Show that the maximum of \(\vec x^TA\vec x\) on unit vectors is the largest eigenvalue.`, ans: S`\(\sum\lambda_iy_i^2\le\lambda_{\max}\sum y_i^2=\lambda_{\max}\)` },
  { level: 3, space: 5, q: S`Show that \(${M([[1, 2], [0, 3]])}\) is diagonalisable but not orthogonally diagonalisable.`, ans: S`distinct eigenvalues; not symmetric`, fig: eigLines([[1, 2], [0, 3]], [[[1, 0], 1], [[1, 1], 3]], { w: 3.2 }) },
];

export const WS = {
  code: "8.7",
  title: "Symmetric Matrices",
  bigideas: S`Symmetric matrices have real eigenvalues and perpendicular eigenvectors, so they factor as \(A=QDQ^T\) with an orthogonal \(Q\). This gives the spectral decomposition into projections and turns quadratic forms into sums of squares along principal axes.`,
  goals: ["Use real eigenvalues and orthogonal eigenvectors.", "Orthogonally diagonalise \\(A=QDQ^T\\).", "Orthogonalise inside an eigenspace.", "Write spectral decompositions.", "Classify quadratic forms."],
  curriculum: "Eigenvalues and eigenvectors — symmetric matrices",
  vocab: [["Symmetric", "\\(A^T=A\\)"], ["Orthogonal", "\\(Q^TQ=I\\)"], ["\\(QDQ^T\\)", "orthogonal diagonalisation"], ["Spectral decomposition", "\\(\\sum\\lambda_i\\vec u_i\\vec u_i^T\\)"], ["Quadratic form", "\\(\\vec x^TA\\vec x\\)"]],
  hook: S`A tilted ellipse becomes an upright one when you choose the right axes. Symmetric matrices tell you which axes.`,
  concepts: NOTES,
  summary: [
    S`\(A^T=A\Rightarrow\) real eigenvalues, orthogonal eigenvectors.`,
    S`\(A=QDQ^T\), \(Q^{-1}=Q^T\).`,
    S`Repeated eigenvalue: Gram–Schmidt within \(E_\lambda\).`,
    S`\(A=\sum\lambda_i\vec u_i\vec u_i^T\).`,
    S`\(\vec x^TA\vec x=\sum\lambda_iy_i^2\).`,
  ],
  tips: ["Normalise eigenvectors.", "Orthogonalise inside repeated eigenspaces.", "Split the cross coefficient in half.", "Check that Q-transpose times Q is I.", "Only symmetric matrices are orthogonally diagonalisable."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
