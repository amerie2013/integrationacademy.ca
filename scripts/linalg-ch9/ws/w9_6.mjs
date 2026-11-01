// LINALG1 Worksheet 9.6 — QR Factorisation
// Self-contained: complete notes, 9 worked examples with figures, 13 problems with an answer key.
import { svgT } from "./figT.mjs";
import { S, def, thm } from "./wkit.mjs";
import { rowPic, matPic } from "./fig3.mjs";
import { gsPlane } from "./fig9.mjs";
import { vecs3 } from "./fig5.mjs";
import { am } from "../bank/la.mjs";

const P = (svg, w = 4.4) => svgT(svg, w);
const M = (m) => am(m, false);
const C = (...a) => am(a.map((x) => [x]), false);
const T = (v) => M([v]);

const NOTES = [
  { h: "1. The factorisation",
    lead: thm("QR", S`An \(m\times n\) matrix \(A\) with independent columns factors as \(A=QR\): \(Q\) is \(m\times n\) with orthonormal columns spanning \(\operatorname{Col}A\), \(R\) is \(n\times n\) upper triangular with positive diagonal.`) + S`\pf{Gram–Schmidt gives \(\vec a_k\in\operatorname{span}\{\vec q_1..\vec q_k\}\), so \(\vec a_k=r_{1k}\vec q_1+\dots+r_{kk}\vec q_k\) with \(r_{kk}=|\vec w_k|>0\).}`,
    fig: P(rowPic([[[["a₁", "a₂"]], { label: "A" }], "=", [[["q₁", "q₂"]], { label: "Q" }], [[["r₁₁", "r₁₂"], [0, "r₂₂"]], { label: "R" }]]), 4), w: 0.5 },
  { h: "2. Finding Q and R",
    lead: S`(1) Gram–Schmidt on the columns of \(A\). (2) Normalise: \(Q=[\vec q_1\cdots\vec q_n]\). (3) \(R=Q^TA\), i.e. \(r_{jk}=\vec q_j^T\vec a_k\). The entries below the diagonal come out 0 — a built-in check.`,
    fig: gsPlane([4, 3], [1, 2], { w: 4 }), w: 0.5 },
  { h: "3. Why R = QᵀA",
    lead: S`Multiply \(A=QR\) on the left by \(Q^T\) and use \(Q^TQ=I\): \(Q^TA=R\). The diagonal entries \(r_{kk}=|\vec w_k|\) are the lengths found during Gram–Schmidt.`,
    fig: P(matPic([["q₁·a₁", "q₁·a₂"], ["q₂·a₁ = 0", "q₂·a₂"]], { label: "R = QᵀA" }), 2.8), w: 0.55 },
  { h: "4. Solving systems",
    lead: S`For square invertible \(A=QR\): \(A\vec x=\vec b\iff R\vec x=Q^T\vec b\), solved from the bottom row up (back substitution). For tall \(A\) the same equation gives the least-squares solution (9.7).`,
    fig: P(matPic([["r₁₁", "r₁₂"], [0, "r₂₂"]], { label: "solve from the bottom" }), 2), w: 0.55 },
  { h: "5. Useful identities",
    lead: S`\(A^TA=R^TQ^TQR=R^TR\). For square \(A\): \(|\det A|=|\det Q|\det R=r_{11}\cdots r_{nn}\).`,
    fig: P(rowPic([[[["Rᵀ"]], {}], [[["R"]], {}], "=", [[["AᵀA"]], {}]]), 2.6), w: 0.5 },
  { h: "6. A 3 × 3 picture",
    lead: S`For a \(3\times3\) matrix, \(Q\) is orthogonal (square) and \(R\) records how each column of \(A\) is built from \(\vec q_1\), then \(\vec q_1,\vec q_2\), then all three.`,
    fig: vecs3([[[1, 0, 1], "q₁ (×√2)", "blue"], [[1, 2, -1], "q₂ (×√6)", "red"], [[-1, 1, 1], "q₃ (×√3)", "green"]], { w: 4 }), w: 0.5 },
];

const EXAMPLES = [
  { title: "A 2 × 2 matrix", q: S`Find the QR factorisation of \(A=${M([[4, 1], [3, 2]])}\).`,
    fig: gsPlane([4, 3], [1, 2], { w: 3.8 }),
    steps: [S`\(\vec q_1=\tfrac15(4,3)\); \(r_{12}=\vec q_1^T\vec a_2=\tfrac{4+6}5=2\); \(\vec w_2=(1,2)-2\cdot\tfrac15(4,3)=(-\tfrac35,\tfrac45)\), \(r_{22}=1\), \(\vec q_2=\tfrac15(-3,4)\).`, S`\(R=Q^TA=\tfrac15${M([[4, 3], [-3, 4]])}${M([[4, 1], [3, 2]])}=\tfrac15${M([["16+9", "4+6"], ["-12+12", "-3+8"]])}=${M([[5, 2], [0, 1]])}\).`, S`Check: \(QR=\tfrac15${M([[4, -3], [3, 4]])}${M([[5, 2], [0, 1]])}=\tfrac15${M([[20, "8-3"], [15, "6+4"]])}=${M([[4, 1], [3, 2]])}\) ✓.`],
    ans: S`\(Q=\tfrac15${M([[4, -3], [3, 4]])}\), \(R=${M([[5, 2], [0, 1]])}\)` },
  { title: "A 3 × 2 matrix", q: S`Find the QR factorisation of \(A=${M([[2, 4], [1, -1], [2, 1]])}\).`,
    fig: vecs3([[[2, 1, 2], "a₁", "blue"], [[4, -1, 1], "a₂", "red"], [[2, -2, -1], "w₂", "violet"]], { w: 3.8 }),
    steps: [S`\(|\vec a_1|=3\), \(\vec q_1=\tfrac13(2,1,2)\); \(r_{12}=\tfrac{8-1+2}3=3\); \(\vec w_2=(4,-1,1)-(2,1,2)=(2,-2,-1)\), \(r_{22}=3\), \(\vec q_2=\tfrac13(2,-2,-1)\).`, S`\(R=Q^TA=\tfrac13${M([[2, 1, 2], [2, -2, -1]])}${M([[2, 4], [1, -1], [2, 1]])}=\tfrac13${M([["4+1+4", "8-1+2"], ["4-2-2", "8+2-1"]])}=${M([[3, 3], [0, 3]])}\).`],
    ans: S`\(Q=\tfrac13${M([[2, 2], [1, -2], [2, -1]])}\), \(R=${M([[3, 3], [0, 3]])}\)` },
  { title: "Checking AᵀA = RᵀR", q: S`Verify \(A^TA=R^TR\) for Example 2.`,
    fig: P(matPic([[9, 9], [9, 18]], { label: "AᵀA" }), 1.6),
    steps: [S`\(A^TA=${M([["4+1+4", "8-1+2"], ["8-1+2", "16+1+1"]])}=${M([[9, 9], [9, 18]])}\).`, S`\(R^TR=${M([[3, 0], [3, 3]])}${M([[3, 3], [0, 3]])}=${M([[9, 9], [9, 18]])}\) ✓.`],
    ans: S`both \(${M([[9, 9], [9, 18]])}\)` },
  { title: "A 3 × 3 matrix", q: S`Find \(R\) for \(A=${M([[1, 1, 0], [0, 1, 1], [1, 0, 1]])}\) (Gram–Schmidt vectors \((1,0,1),(1,2,-1),(-1,1,1)\)).`,
    fig: vecs3([[[1, 0, 1], "w₁", "blue"], [[1, 2, -1], "w₂", "red"], [[-1, 1, 1], "w₃", "green"]], { w: 3.8 }),
    steps: [S`\(r_{11}=\tfrac{1+1}{\sqrt2}=\sqrt2\), \(r_{12}=\tfrac{1+0+0}{\sqrt2}\), \(r_{13}=\tfrac{0+0+1}{\sqrt2}\), \(r_{22}=\tfrac{1+2+0}{\sqrt6}\), \(r_{23}=\tfrac{0+2-1}{\sqrt6}\), \(r_{33}=\tfrac{0+1+1}{\sqrt3}\).`, S`\(R=${M([["\\sqrt2", "\\tfrac1{\\sqrt2}", "\\tfrac1{\\sqrt2}"], [0, "\\tfrac3{\\sqrt6}", "\\tfrac1{\\sqrt6}"], [0, 0, "\\tfrac2{\\sqrt3}"]])}\).`],
    ans: S`as shown` },
  { title: "Solving with QR", q: S`Solve \(${M([[4, 1], [3, 2]])}\vec x=(5,5)\) using Example 1.`,
    fig: P(matPic([[5, 2], [0, 1]], { label: "R" }), 1.6),
    steps: [S`\(Q^T\vec b=\tfrac15${M([[4, 3], [-3, 4]])}${C(5, 5)}=${C(7, 1)}\).`, S`\(R\vec x=${C(7, 1)}\): \(x_2=1\), \(5x_1+2=7\Rightarrow x_1=1\). Check \(${M([[4, 1], [3, 2]])}${C(1, 1)}=${C(5, 5)}\) ✓.`],
    ans: S`\((1,1)\)` },
  { title: "A 4 × 2 matrix", q: S`Find the QR factorisation of \(A=${M([[1, 0], [1, 2], [1, 0], [1, 2]])}\).`,
    fig: P(matPic([[1, -1], [1, 1], [1, -1], [1, 1]], { label: "2Q" }), 1.8),
    steps: [S`\(\vec q_1=\tfrac12(1,1,1,1)\), \(r_{12}=\tfrac{0+2+0+2}2=2\), \(\vec w_2=(0,2,0,2)-(1,1,1,1)=(-1,1,-1,1)\), \(r_{22}=2\), \(\vec q_2=\tfrac12(-1,1,-1,1)\).`, S`\(R=${M([[2, 2], [0, 2]])}\). Check column 2: \(2\vec q_1+2\vec q_2=(0,2,0,2)\) ✓.`],
    ans: S`\(R=${M([[2, 2], [0, 2]])}\)` },
  { title: "The zeros of R", q: S`Compute \(\vec q_2^T\vec a_1\) in Example 2 and explain the result.`,
    fig: P(matPic([["·", "·"], [0, "·"]], { label: "R" }), 1.6),
    steps: [S`\(\tfrac13${T([2, -2, -1])}${C(2, 1, 2)}=\tfrac{4-2-2}3=0\).`, S`\(\vec a_1=3\vec q_1\) and \(\vec q_2\perp\vec q_1\).`],
    ans: S`\(0\)` },
  { title: "Determinant from R", q: S`Find \(|\det A|\) for Example 1 from \(R\).`,
    fig: P(matPic([[5, 2], [0, 1]], { label: "R" }), 1.6),
    steps: [S`\(|\det A|=r_{11}r_{22}=5\cdot1=5\).`, S`Directly: \(\det A=8-3=5\) ✓.`],
    ans: S`\(5\)` },
  { title: "R is upper triangular", q: S`Prove that \(r_{jk}=0\) for \(j>k\).`,
    steps: [S`\(\vec a_k\in\operatorname{span}\{\vec q_1..\vec q_k\}\) by Gram–Schmidt.`, S`For \(j>k\), \(\vec q_j\) is orthogonal to \(\vec q_1..\vec q_k\), so \(r_{jk}=\vec q_j^T\vec a_k=0\).`],
    ans: S`\(\vec q_j\perp\vec a_k\) for \(j>k\)` },
];

const PROBLEMS = [
  { level: 1, q: S`Find \(r_{11}\) for \(A=${M([[5, 0], [12, 1]])}\).`, ans: S`\(13\)` },
  { level: 1, q: S`What size is \(R\) for a \(6\times2\) matrix?`, ans: S`\(2\times2\)` },
  { level: 1, q: S`True or false: \(QQ^T=I\) for a tall \(Q\).`, ans: S`false`, fig: P(matPic([["QᵀQ = I"]], {}), 1.6) },
  { level: 2, q: S`Find the QR factorisation of \(${M([[3, 0], [4, 5]])}\).`, ans: S`\(Q=\tfrac15${M([[3, -4], [4, 3]])}\), \(R=${M([[5, 4], [0, 3]])}\)`, fig: gsPlane([3, 4], [0, 5], { w: 3.2 }) },
  { level: 2, q: S`Find the QR factorisation of \(${M([[1, 4], [2, 5], [2, 2]])}\).`, ans: S`\(Q=\tfrac13${M([[1, 2], [2, 1], [2, -2]])}\), \(R=${M([[3, 6], [0, 3]])}\)` },
  { level: 2, q: S`Solve \(R\vec x=Q^T\vec b\) with \(R=${M([[3, 1], [0, 2]])}\), \(Q^T\vec b=(7,4)\).`, ans: S`\((\tfrac53,2)\)` },
  { level: 2, q: S`Find \(R\) for \(A=${M([[1, 1], [1, 1], [1, -1], [1, -1]])}\).`, ans: S`\(${M([[2, 0], [0, 2]])}\) (columns already orthogonal)`, fig: P(matPic([[1, 1], [1, 1], [1, -1], [1, -1]], { label: "A" }), 1.6) },
  { level: 2, q: S`\(A=QR\) with \(R=${M([[2, 1], [0, 3]])}\). Find \(\det(A^TA)\).`, ans: S`\(36\)` },
  { level: 3, space: 5, q: S`Prove \(R=Q^TA\).`, ans: S`\(Q^TA=Q^TQR=R\)` },
  { level: 3, space: 5, q: S`Prove that the diagonal entries of \(R\) are positive.`, ans: S`\(r_{kk}=|\vec w_k|>0\) (independent columns)` },
  { level: 3, space: 5, q: S`Find the QR factorisation of \(${M([[1, 2], [1, 0], [1, 2], [1, 0]])}\).`, ans: S`\(Q=\tfrac12${M([[1, 1], [1, -1], [1, 1], [1, -1]])}\), \(R=${M([[2, 2], [0, 2]])}\)`, fig: P(matPic([[1, 2], [1, 0], [1, 2], [1, 0]], { label: "A" }), 1.6) },
  { level: 3, space: 5, q: S`Show that \(A^TA=R^TR\) and deduce \(\det(A^TA)=(r_{11}\cdots r_{nn})^2\).`, ans: S`\(R^TQ^TQR=R^TR\)` },
  { level: 3, space: 5, q: S`Explain why a matrix with dependent columns has no QR factorisation with invertible \(R\).`, ans: S`Gram–Schmidt produces \(\vec w_k=\vec 0\), so \(r_{kk}=0\)` },
];

export const WS = {
  code: "9.6",
  title: "QR Factorisation",
  bigideas: S`Gram–Schmidt on the columns of \(A\) yields \(A=QR\): orthonormal columns in \(Q\), an upper-triangular \(R=Q^TA\) recording how the original columns are built. QR turns systems and least-squares problems into back substitution.`,
  goals: ["State the QR factorisation.", "Find \\(Q\\) by Gram–Schmidt.", "Compute \\(R=Q^TA\\).", "Solve \\(R\\vec x=Q^T\\vec b\\).", "Use \\(A^TA=R^TR\\)."],
  curriculum: "Orthogonality — QR factorisation",
  vocab: [["\\(Q\\)", "orthonormal columns"], ["\\(R\\)", "upper triangular, positive diagonal"], ["\\(r_{jk}\\)", "\\(\\vec q_j^T\\vec a_k\\)"], ["\\(r_{kk}\\)", "\\(|\\vec w_k|\\)"], ["Back substitution", "bottom row first"]],
  hook: S`Gram–Schmidt throws away its coefficients — unless you keep them in a triangular matrix. What do they buy you?`,
  concepts: NOTES,
  summary: [S`\(A=QR\), \(Q^TQ=I\).`, S`\(R=Q^TA\), upper triangular.`, S`\(r_{kk}=|\vec w_k|\).`, S`\(R\vec x=Q^T\vec b\).`, S`\(A^TA=R^TR\).`],
  tips: ["Normalise before forming Q.", "R is Q-transpose times A.", "Zeros below the diagonal check the work.", "R is square even for tall A.", "Back substitute from the bottom."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
