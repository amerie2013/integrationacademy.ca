// LINALG1 9.6 — QR Factorisation: A = QR from Gram–Schmidt, R = QᵀA (upper triangular with positive diagonal),
// 2 × 2, 3 × 2, 3 × 3 and 4 × 2 examples, solving Ax = b as Rx = Qᵀb by back substitution — every product written out.
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, q, num, frac, choice, hard, definition, theorem, am, cv, sfig } from "./lib.mjs";
import { gsPlane } from "./ws/fig9.mjs";
import { rowPic } from "./ws/fig3.mjs";

export const TITLE = "9.6 QR Factorisation";
export const ID = "11a10001-0001-4001-8001-000000000906";

const S = String.raw;
const M = (m) => am(m, false);
const T = (v) => M([v]);
const qrFig = sfig(rowPic([[[["a₁", "a₂"]], { label: "A" }], "=", [[["q₁", "q₂"]], { label: "Q (orthonormal)" }], [[["r₁₁", "r₁₂"], [0, "r₂₂"]], { label: "R (upper triangular)" }]]), "column k of A is a combination of q₁, …, q_k only — so R is upper triangular");
const gsFig = sfig(gsPlane([3, 4], [1, 2], { raw: true }), "Gram–Schmidt on the columns (3, 4) and (1, 2) of Example 1");

export const blocks = () => [
  intro({
    icon: "🧱",
    title: "QR Factorisation",
    overview: S`Gram–Schmidt does more than produce an orthonormal basis: it records how the original columns are built from the new ones. Column \(k\) of \(A\) is a combination of \(\vec q_1,\dots,\vec q_k\) only, so \(A=QR\) with \(Q\) having orthonormal columns and \(R\) upper triangular. Once \(Q\) is known, \(R\) is simply \(Q^TA\). The QR factorisation is the standard numerically stable way to solve least-squares problems and the starting point of the QR algorithm for eigenvalues.`,
    goals: [
      "state the QR factorisation for a matrix with independent columns;",
      "find \\(Q\\) by Gram–Schmidt and normalising;",
      "compute \\(R=Q^TA\\) and check \\(QR=A\\);",
      "explain why \\(R\\) is upper triangular and invertible;",
      "solve \\(A\\vec x=\\vec b\\) as \\(R\\vec x=Q^T\\vec b\\).",
    ],
    outcomes: "orthogonality: QR factorisation",
    prior: [
      [S`Gram–Schmidt on \((3,4),(1,2)\): \(\vec w_2=\)?`, S`\((1,2)-\tfrac{11}{25}(3,4)=(-\tfrac8{25},\tfrac6{25})\).`],
      [S`\(Q^TQ=\)? (orthonormal columns)`, S`\(I\).`],
      [S`Solve \(${M([[2, 1], [0, 3]])}\vec x=${cv(5, 6)}\).`, S`Back substitution: \(x_2=2\), \(x_1=1.5\).`],
    ],
    words: [
      ["QR factorisation", "\\(A=QR\\)", "independent columns needed"],
      ["\\(Q\\)", "orthonormal columns from Gram–Schmidt", "\\(Q^TQ=I\\)"],
      ["\\(R\\)", "upper triangular, positive diagonal", "\\(R=Q^TA\\)"],
      ["\\(r_{jk}\\)", "\\(\\vec q_j^T\\vec a_k\\) for \\(j\\le k\\)", "\\(r_{kk}=|\\vec w_k|\\)"],
      ["Back substitution", "solve a triangular system from the bottom up", "\\(R\\vec x=Q^T\\vec b\\)"],
    ],
  }),

  section("📌 The factorisation", S`
  ${theorem("QR factorisation", S`If the \(m\times n\) matrix \(A\) has independent columns, then \(A=QR\), where \(Q\) (\(m\times n\)) has orthonormal columns spanning \(\operatorname{Col}A\) and \(R\) (\(n\times n\)) is upper triangular with positive diagonal entries. Moreover \(R=Q^TA\).`, S`Gram–Schmidt gives orthonormal \(\vec q_1,\dots,\vec q_n\) with \(\operatorname{span}\{\vec q_1..\vec q_k\}=\operatorname{span}\{\vec a_1..\vec a_k\}\). So \(\vec a_k=r_{1k}\vec q_1+\dots+r_{kk}\vec q_k\), i.e. \(A=QR\) with \(R\) upper triangular; \(r_{kk}=|\vec w_k|>0\). Multiplying \(A=QR\) by \(Q^T\) gives \(Q^TA=Q^TQR=R\).`)}
  ${qrFig}
  ${keyIdea(S`You do not need to keep track of the Gram–Schmidt coefficients: find \(Q\), then compute \(R=Q^TA\). The zeros below the diagonal appear automatically and are a free check.`)}`),

  section("📌 Solving systems with QR", S`
  ${theorem("solving with QR", S`If \(A=QR\) is square and invertible, \(A\vec x=\vec b\iff R\vec x=Q^T\vec b\), a triangular system solved by back substitution. (For tall \(A\), the same equation gives the least-squares solution — 9.7.)`, S`Multiply \(QR\vec x=\vec b\) by \(Q^T\) and use \(Q^TQ=I\). For square \(Q\), \(Q^T=Q^{-1}\), so nothing is lost.`)}
  ${gsFig}`),

  section("📌 Explore", S`<p>Set a \(2\times2\) matrix with the sliders. The explorer runs Gram–Schmidt on its columns, displays \(Q\) and \(R=Q^TA\), and checks \(QR=A\). Watch \(r_{22}\) shrink to 0 as the columns become parallel.</p>`),
  widget("laQR", { init: { a: 3, b: 1, c: 4, d: 2 } }),

  section("📌 Common mistakes", watchOut([
    "Q must have ORTHONORMAL columns — normalise after Gram–Schmidt.",
    "R = QᵀA, not AQᵀ or QA.",
    "R is n × n even when A is tall (m × n).",
    "For a tall A, QQᵀ ≠ I; only QᵀQ = I.",
    "The diagonal of R holds the lengths |wₖ| — a negative or zero entry signals an error (or dependent columns).",
  ])),

  examples([
    ["QR of a 2 × 2 matrix", S`Find the QR factorisation of \(A=${M([[3, 1], [4, 2]])}\).`,
      [S`\(\vec q_1=\tfrac15(3,4)\) (length 5). \(\vec a_2^T\vec q_1=\tfrac15(3+8)=\tfrac{11}5\); \(\vec w_2=${cv(1, 2)}-\tfrac{11}5\cdot\tfrac15${cv(3, 4)}=${cv("-\\tfrac8{25}", "\\tfrac6{25}")}\), \(|\vec w_2|=\tfrac{10}{25}=\tfrac25\), \(\vec q_2=\tfrac15(-4,3)\).`,
        S`\[R=Q^TA=\tfrac15${M([[3, 4], [-4, 3]])}${M([[3, 1], [4, 2]])}=\tfrac15${M([["9+16", "3+8"], ["-12+12", "-4+6"]])}=${M([[5, "\\tfrac{11}5"], [0, "\\tfrac25"]])}.\]`,
        S`Check: \(QR=\tfrac15${M([[3, -4], [4, 3]])}${M([[5, "\\tfrac{11}5"], [0, "\\tfrac25"]])}=\tfrac15${M([["15", "\\tfrac{33}5-\\tfrac85"], ["20", "\\tfrac{44}5+\\tfrac65"]])}=\tfrac15${M([[15, 5], [20, 10]])}=${M([[3, 1], [4, 2]])}\) ✓.`],
      S`\(Q=\tfrac15${M([[3, -4], [4, 3]])}\), \(R=${M([[5, "\\tfrac{11}5"], [0, "\\tfrac25"]])}\)`, gsFig],
    ["QR of a 3 × 2 matrix", S`Find the QR factorisation of \(A=${M([[1, 3], [2, 3], [2, 0]])}\).`,
      [S`\(|\vec a_1|=3\), \(\vec q_1=\tfrac13(1,2,2)\). \(\vec a_2^T\vec q_1=\tfrac13(3+6+0)=3\): \(\vec w_2=${cv(3, 3, 0)}-3\cdot\tfrac13${cv(1, 2, 2)}=${cv(2, 1, -2)}\), length 3, \(\vec q_2=\tfrac13(2,1,-2)\).`,
        S`\[R=Q^TA=\tfrac13${M([[1, 2, 2], [2, 1, -2]])}${M([[1, 3], [2, 3], [2, 0]])}=\tfrac13${M([["1+4+4", "3+6+0"], ["2+2-4", "6+3+0"]])}=${M([[3, 3], [0, 3]])}.\]`,
        S`Check: \(QR=\tfrac13${M([[1, 2], [2, 1], [2, -2]])}${M([[3, 3], [0, 3]])}=\tfrac13${M([[3, "3+6"], [6, "6+3"], [6, "6-6"]])}=${M([[1, 3], [2, 3], [2, 0]])}\) ✓.`],
      S`\(Q=\tfrac13${M([[1, 2], [2, 1], [2, -2]])}\), \(R=${M([[3, 3], [0, 3]])}\)`, qrFig],
    ["QR of a 3 × 3 matrix", S`Find \(R\) for \(A=${M([[1, 1, 0], [1, 0, 1], [0, 1, 1]])}\), whose Gram–Schmidt vectors are \((1,1,0),(1,-1,2),(-1,1,1)\) (9.5).`,
      [S`\(Q=[\tfrac{\vec w_1}{\sqrt2}\ \tfrac{\vec w_2}{\sqrt6}\ \tfrac{\vec w_3}{\sqrt3}]\). Entries \(r_{jk}=\vec q_j^T\vec a_k\): \[r_{11}=\tfrac{1+1}{\sqrt2}=\sqrt2,\ r_{12}=\tfrac{1}{\sqrt2},\ r_{13}=\tfrac1{\sqrt2},\ r_{22}=\tfrac{1+0+2}{\sqrt6}=\tfrac3{\sqrt6},\ r_{23}=\tfrac{0-1+2}{\sqrt6}=\tfrac1{\sqrt6},\ r_{33}=\tfrac{0+1+1}{\sqrt3}=\tfrac2{\sqrt3}.\]`,
        S`\[R=${M([["\\sqrt2", "\\tfrac1{\\sqrt2}", "\\tfrac1{\\sqrt2}"], [0, "\\tfrac3{\\sqrt6}", "\\tfrac1{\\sqrt6}"], [0, 0, "\\tfrac2{\\sqrt3}"]])}.\]`,
        S`Check column 2: \(r_{12}\vec q_1+r_{22}\vec q_2=\tfrac12(1,1,0)+\tfrac36(1,-1,2)=(1,0,1)=\vec a_2\) ✓.`],
      S`\(R\) as shown`],
    ["The zeros come for free", S`For \(A=${M([[1, 3], [2, 3], [2, 0]])}\) and \(Q\) from Example 2, compute the \((2,1)\) entry of \(Q^TA\) and explain why it is 0.`,
      [S`\((Q^TA)_{21}=\vec q_2^T\vec a_1=\tfrac13${T([2, 1, -2])}${cv(1, 2, 2)}=\tfrac13(2+2-4)=0\).`,
        S`\(\vec a_1\) is a multiple of \(\vec q_1\), and \(\vec q_2\perp\vec q_1\). In general \(\vec a_k\in\operatorname{span}\{\vec q_1..\vec q_k\}\perp\vec q_j\) for \(j>k\), so every entry below the diagonal is 0.`],
      S`\(0\), because \(\vec q_2\perp\vec a_1\)`],
    ["Solving a system with QR", S`Solve \(${M([[3, 1], [4, 2]])}\vec x=${cv(5, 10)}\) using the QR factorisation of Example 1.`,
      [S`\[Q^T\vec b=\tfrac15${M([[3, 4], [-4, 3]])}${cv(5, 10)}=\tfrac15${cv("15+40", "-20+30")}=${cv(11, 2)}.\]`,
        S`\(R\vec x=Q^T\vec b\): \(${M([[5, "\\tfrac{11}5"], [0, "\\tfrac25"]])}${cv("x_1", "x_2")}=${cv(11, 2)}\). Bottom row: \(\tfrac25x_2=2\Rightarrow x_2=5\). Top row: \(5x_1+11=11\Rightarrow x_1=0\).`,
        S`Check: \(${M([[3, 1], [4, 2]])}${cv(0, 5)}=${cv(5, 10)}\) ✓.`],
      S`\(\vec x=(0,5)\)`],
  ]),

  practice([
    q("r₁₁", S`Find \(r_{11}\) in the QR factorisation of \(${M([[6, 1], [8, 0]])}\).`, num(10),
      "|a₁|.", [S`\(\sqrt{36+64}\).`], S`\(10\)`),
    q("shape", S`\(A\) is \(5\times3\) with independent columns. What size is \(R\)?`, choice([S`\(3\times3\)`, S`\(5\times5\)`, S`\(5\times3\)`, S`\(3\times5\)`], 0),
      "n × n.", [S`One row and column per column of \(A\).`], S`\(3\times3\)`),
    q("R", S`\(R=Q^TA\) is always`, choice(["upper triangular", "lower triangular", "symmetric", "orthogonal"], 0),
      "Gram–Schmidt order.", [S`\(\vec q_j\perp\vec a_k\) for \(j>k\).`], "upper triangular"),
    q("r₁₂", S`\(\vec q_1=\tfrac13(1,2,2)\), \(\vec a_2=(0,3,3)\). Find \(r_{12}\).`, num(4),
      "q₁ · a₂.", [S`\(\tfrac13(0+6+6)\).`], S`\(4\)`),
    q("solve", S`\(R=${M([[2, 1], [0, 4]])}\), \(Q^T\vec b=${cv(5, 8)}\). Find \(x_1\).`, frac(3, 2),
      "x₂ = 2.", [S`\(2x_1+2=5\).`], S`\(\tfrac32\)`),
  ]),

  ...hard([
    ["QR of a 4 × 2 matrix", S`Find the QR factorisation of \(A=${M([[1, 1], [1, 2], [1, 0], [1, 1]])}\).`,
      [S`\(|\vec a_1|=2\), \(\vec q_1=\tfrac12(1,1,1,1)\). \(r_{12}=\vec q_1^T\vec a_2=\tfrac12(1+2+0+1)=2\): \(\vec w_2=${cv(1, 2, 0, 1)}-2\cdot\tfrac12${cv(1, 1, 1, 1)}=${cv(0, 1, -1, 0)}\), \(r_{22}=\sqrt2\), \(\vec q_2=\tfrac1{\sqrt2}(0,1,-1,0)\).`,
        S`\(Q=${M([["\\tfrac12", 0], ["\\tfrac12", "\\tfrac1{\\sqrt2}"], ["\\tfrac12", "-\\tfrac1{\\sqrt2}"], ["\\tfrac12", 0]])}\), \(R=${M([[2, 2], [0, "\\sqrt2"]])}\).`,
        S`Check: \(QR\) column 2 \(=2\vec q_1+\sqrt2\vec q_2=(1,1,1,1)+(0,1,-1,0)=(1,2,0,1)\) ✓; column 1 \(=2\vec q_1=\vec a_1\) ✓.`],
      S`\(R=${M([[2, 2], [0, "\\sqrt2"]])}\)`],
    ["R is invertible", S`Prove that \(R\) in \(A=QR\) is invertible when \(A\) has independent columns, and that \(R^TR=A^TA\).`,
      [S`\(R\) is triangular with diagonal entries \(r_{kk}=|\vec w_k|>0\) (each \(\vec w_k\ne\vec 0\) because the columns are independent), so \(\det R=r_{11}\cdots r_{nn}\ne0\).`,
        S`\(A^TA=(QR)^T(QR)=R^TQ^TQR=R^TIR=R^TR\).`],
      S`\(\det R=\prod r_{kk}>0\); \(A^TA=R^TR\)`],
  ], [
    q("hard", S`For \(A=${M([[1, 1], [1, 2], [1, 0], [1, 1]])}\), \(\det(A^TA)=(\det R)^2\). Find it.`, num(8),
      "(2√2)².", [S`\(\det R=2\sqrt2\).`], S`\(8\)`),
    q("hard", S`\(A=QR\) with \(R=${M([[3, 1], [0, 2]])}\). Find \(\det(A^TA)\).`, num(36),
      "(det R)².", [S`\(6^2\).`], S`\(36\)`),
    q("hard", S`\(A\) is square and \(A=QR\). Then \(|\det A|=\)`, choice([S`\(r_{11}\cdots r_{nn}\)`, S`\(1\)`, S`\(r_{11}+\dots+r_{nn}\)`, S`\(\det Q\)`], 0),
      "|det Q| = 1.", [S`\(\det A=\det Q\det R\).`], S`\(r_{11}\cdots r_{nn}\)`),
  ]),

  wrapUp({
    qas: [
      ["What is A = QR?", "Q has orthonormal columns (from Gram–Schmidt), R is upper triangular with positive diagonal."],
      ["How do I compute R?", "R = QᵀA."],
      ["Why is R upper triangular?", "Column k of A only uses q₁, …, qₖ."],
      ["How does QR solve Ax = b?", "Solve Rx = Qᵀb by back substitution."],
      ["When does QR exist?", "When the columns of A are independent."],
    ],
    summary: [
      "A = QR, QᵀQ = I, R upper triangular.",
      "Q from Gram–Schmidt + normalising.",
      "R = QᵀA; zeros below the diagonal are a check.",
      "Rx = Qᵀb by back substitution.",
      "AᵀA = RᵀR.",
    ],
    next: "9.7 uses the normal equations and QR to find least-squares solutions of inconsistent systems.",
  }),
];
