// LINALG1 Worksheet 9.2 — Orthogonal Matrices
// Self-contained: complete notes, 9 worked examples with figures, 13 problems with an answer key.
import { svgT } from "./figT.mjs";
import { S, def, thm } from "./wkit.mjs";
import { rowPic, matPic } from "./fig3.mjs";
import { vecs3, vecs2 } from "./fig5.mjs";
import { sqMap } from "./fig7.mjs";
import { am } from "../bank/la.mjs";

const P = (svg, w = 4.4) => svgT(svg, w);
const M = (m) => am(m, false);
const C = (...a) => am(a.map((x) => [x]), false);
const T = (v) => M([v]);

const NOTES = [
  { h: "1. Orthonormal sets",
    lead: def("orthonormal", S`Vectors \(\vec u_1,\dots,\vec u_k\) are \emph{orthonormal} if \(\vec u_i\cdot\vec u_j=0\) (\(i\ne j\)) and \(|\vec u_i|=1\). Orthogonal nonzero vectors are automatically independent.`) + S`To make an orthogonal set orthonormal, divide each vector by its length.`,
    fig: vecs2([[[1, 2], "(1, 2)", "blue"], [[-2, 1], "(−2, 1)", "red"]], { xmin: -3, xmax: 2, ymin: -1, ymax: 3 }), w: 0.5 },
  { h: "2. UᵀU = I",
    lead: thm("orthonormal columns", S`\(U\) has orthonormal columns \(\iff U^TU=I\). Then \(|U\vec x|=|\vec x|\) and \((U\vec x)\cdot(U\vec y)=\vec x\cdot\vec y\).`) + S`\pf{Entry \((i,j)\) of \(U^TU\) is \(\vec u_i^T\vec u_j\). \((U\vec x)^T(U\vec y)=\vec x^TU^TU\vec y=\vec x^T\vec y\).}`,
    fig: P(rowPic([[[["u₁ᵀ"], ["u₂ᵀ"]], { label: "Uᵀ" }], [[["u₁", "u₂"]], { label: "U" }], "=", [[[1, 0], [0, 1]], { label: "I" }]]), 3.6), w: 0.5 },
  { h: "3. Orthogonal matrices",
    lead: thm("square case", S`A square \(Q\) with \(Q^TQ=I\) is \emph{orthogonal}: \(Q^{-1}=Q^T\), \(QQ^T=I\) (rows orthonormal too), and \(\det Q=\pm1\).`) + S`\pf{A square left inverse is a two-sided inverse; \((\det Q)^2=\det(Q^TQ)=1\).}`,
    fig: sqMap([[5 / 13, -12 / 13], [12 / 13, 5 / 13]], { w: 4 }), w: 0.5 },
  { h: "4. Solving with an orthogonal matrix",
    lead: S`\(Q\vec x=\vec b\iff\vec x=Q^T\vec b\): each \(x_i=\vec q_i\cdot\vec b\). No row reduction is needed.`,
    fig: P(rowPic([[[["Qᵀ"]], {}], [[["b"]], {}], "=", [[["q₁·b"], ["q₂·b"], ["q₃·b"]], { label: "x" }]]), 3.4), w: 0.5 },
  { h: "5. Examples of orthogonal matrices",
    lead: S`Rotations \(R_\theta\) (\(\det=1\)), reflections (\(\det=-1\)), permutation matrices, and products of these. A matrix with orthogonal but non-unit columns is \emph{not} orthogonal: \(Q^TQ\) is then diagonal but not \(I\).`,
    fig: P(matPic([[0, 1, 0], [0, 0, 1], [1, 0, 0]], { label: "a permutation matrix" }), 2), w: 0.55 },
  { h: "6. Tall matrices",
    lead: S`An \(m\times n\) \(U\) with \(m>n\) can satisfy \(U^TU=I_n\), but then \(UU^T\) is an \(m\times m\) matrix of rank \(n<m\), so \(UU^T\ne I\). (It is the projection onto \(\operatorname{Col}U\), 9.3.)`,
    fig: vecs3([[[1, -1, 0], "(1, −1, 0)/√2", "blue"], [[1, 1, 1], "(1, 1, 1)/√3", "red"]], { w: 4 }), w: 0.5 },
];

const EXAMPLES = [
  { title: "A tall matrix with orthonormal columns", q: S`Show that \(U=${M([["\\tfrac1{\\sqrt2}", "\\tfrac1{\\sqrt3}"], ["-\\tfrac1{\\sqrt2}", "\\tfrac1{\\sqrt3}"], [0, "\\tfrac1{\\sqrt3}"]])}\) has orthonormal columns.`,
    fig: vecs3([[[1, -1, 0], "u₁", "blue"], [[1, 1, 1], "u₂", "red"]], { w: 3.8 }),
    steps: [S`\[U^TU=${M([["\\tfrac12+\\tfrac12+0", "\\tfrac1{\\sqrt6}-\\tfrac1{\\sqrt6}+0"], ["\\tfrac1{\\sqrt6}-\\tfrac1{\\sqrt6}+0", "\\tfrac13+\\tfrac13+\\tfrac13"]])}=${M([[1, 0], [0, 1]])}.\]`],
    ans: S`\(U^TU=I_2\)` },
  { title: "Length preserved", q: S`For \(Q=\tfrac1{13}${M([[5, -12], [12, 5]])}\), check \(Q^TQ=I\) and compute \(Q\vec x\) for \(\vec x=(13,0)\).`,
    fig: sqMap([[5 / 13, -12 / 13], [12 / 13, 5 / 13]], { w: 3.8 }),
    steps: [S`\(Q^TQ=\tfrac1{169}${M([["25+144", "-60+60"], ["-60+60", "144+25"]])}=I\).`, S`\(Q${C(13, 0)}=${C(5, 12)}\), and \(\sqrt{25+144}=13=|\vec x|\) ✓.`],
    ans: S`\((5,12)\), length 13` },
  { title: "Solving Qx = b", q: S`\(Q=\tfrac13${M([[2, -2, 1], [1, 2, 2], [2, 1, -2]])}\). Solve \(Q\vec x=(3,3,3)\).`,
    fig: P(matPic([[2, -2, 1], [1, 2, 2], [2, 1, -2]], { label: "3Q" }), 2),
    steps: [S`Columns \((2,1,2),(-2,2,1),(1,2,-2)\): pairwise dot products \(-4+2+2\), \(2+2-4\), \(-2+4-2\) are 0, and each has length 3: \(Q\) is orthogonal.`, S`\[\vec x=Q^T\vec b=\tfrac13${M([[2, 1, 2], [-2, 2, 1], [1, 2, -2]])}${C(3, 3, 3)}=\tfrac13${C(15, 3, 3)}=${C(5, 1, 1)}.\]`, S`Check: \(Q${C(5, 1, 1)}=\tfrac13${C("10-2+1", "5+2+2", "10+1-2")}=${C(3, 3, 3)}\) ✓.`],
    ans: S`\((5,1,1)\)` },
  { title: "Normalising", q: S`Make an orthogonal matrix from \((1,2)\) and \((-2,1)\).`,
    fig: vecs2([[[1, 2], "(1, 2)", "blue"], [[-2, 1], "(−2, 1)", "red"]], { xmin: -3, xmax: 2, ymin: -1, ymax: 3 }),
    steps: [S`\((1,2)\cdot(-2,1)=0\); both have length \(\sqrt5\).`, S`\(Q=\tfrac1{\sqrt5}${M([[1, -2], [2, 1]])}\), \(Q^TQ=\tfrac15${M([["1+4", "-2+2"], ["-2+2", "4+1"]])}=I\).`],
    ans: S`\(\tfrac1{\sqrt5}${M([[1, -2], [2, 1]])}\)` },
  { title: "The determinant", q: S`Find \(\det Q\) for the \(Q\) of Example 3.`,
    fig: P(matPic([[2, -2, 1], [1, 2, 2], [2, 1, -2]], { label: "3Q" }), 2),
    steps: [S`\(\det(3Q)=2(-4-2)-(-2)(-2-4)+1(1-4)=-12-12-3=-27\).`, S`\(\det Q=-27/27=-1\): \(Q\) includes a reflection.`],
    ans: S`\(-1\)` },
  { title: "A product of orthogonal matrices", q: S`Show that \(R_{90^\circ}F\) is orthogonal, where \(F=${M([[1, 0], [0, -1]])}\).`,
    fig: sqMap([[0, 1], [1, 0]], { w: 3.8 }),
    steps: [S`\(R_{90^\circ}F=${M([[0, -1], [1, 0]])}${M([[1, 0], [0, -1]])}=${M([[0, 1], [1, 0]])}\).`, S`\(${M([[0, 1], [1, 0]])}^T${M([[0, 1], [1, 0]])}=${M([[1, 0], [0, 1]])}\) ✓ (a reflection, \(\det=-1\)).`],
    ans: S`\(${M([[0, 1], [1, 0]])}\)` },
  { title: "Dot products preserved", q: S`With \(U\) from Example 1, verify \((U\vec x)\cdot(U\vec y)=\vec x\cdot\vec y\) for \(\vec x=(\sqrt2,0)\), \(\vec y=(\sqrt2,\sqrt3)\).`,
    fig: P(rowPic([[[["Ux"]], {}], "·", [[["Uy"]], {}], "=", [[["x·y"]], {}]]), 2.8),
    steps: [S`\(U\vec x=(1,-1,0)\), \(U\vec y=(1,-1,0)+(1,1,1)=(2,0,1)\).`, S`\((U\vec x)\cdot(U\vec y)=2+0+0=2\) and \(\vec x\cdot\vec y=2+0=2\) ✓.`],
    ans: S`both equal 2` },
  { title: "Orthogonal columns are not enough", q: S`Is \(A=${M([[1, 1], [1, -1]])}\) orthogonal? Fix it.`,
    fig: sqMap([[1, 1], [1, -1]], { w: 3.8 }),
    steps: [S`\(A^TA=${M([["1+1", "1-1"], ["1-1", "1+1"]])}=2I\ne I\): columns orthogonal but of length \(\sqrt2\).`, S`\(\tfrac1{\sqrt2}A\) is orthogonal.`],
    ans: S`no; \(\tfrac1{\sqrt2}A\) is` },
  { title: "Rows are orthonormal too", q: S`Prove that the rows of a square orthogonal matrix are orthonormal.`,
    steps: [S`\(Q^TQ=I\) with \(Q\) square gives \(Q^T=Q^{-1}\), hence \(QQ^T=I\).`, S`Entry \((i,j)\) of \(QQ^T\) is row \(i\) dotted with row \(j\).`],
    ans: S`\(QQ^T=I\)` },
];

const PROBLEMS = [
  { level: 1, q: S`Is \(\tfrac1{\sqrt{10}}(1,3)\) a unit vector?`, ans: S`yes` },
  { level: 1, q: S`\(Q\) is orthogonal. Write \(Q^{-1}\).`, ans: S`\(Q^T\)` },
  { level: 1, q: S`Can an orthogonal matrix have determinant 2?`, ans: S`no (\(\pm1\) only)`, fig: P(matPic([["det = ±1"]], {}), 1.4) },
  { level: 2, q: S`Normalise \((2,1,2)\) and \((1,-2,0)\) and check they are orthonormal.`, ans: S`\(\tfrac13(2,1,2)\), \(\tfrac1{\sqrt5}(1,-2,0)\); dot \(0\)` },
  { level: 2, q: S`Solve \(\tfrac15${M([[3, 4], [-4, 3]])}\vec x=(5,0)\).`, ans: S`\((3,4)\)`, fig: sqMap([[0.6, 0.8], [-0.8, 0.6]], { w: 3.2 }) },
  { level: 2, q: S`Compute \(U^TU\) for \(U=\tfrac12${M([[1, 1], [1, -1], [1, 1], [1, -1]])}\).`, ans: S`\(I_2\)` },
  { level: 2, q: S`Is the permutation matrix \(${M([[0, 1, 0], [0, 0, 1], [1, 0, 0]])}\) orthogonal? Give its determinant.`, ans: S`yes; \(\det=1\)` },
  { level: 2, q: S`For \(Q=\tfrac1{13}${M([[5, -12], [12, 5]])}\), find \(|Q\vec x|\) for \(\vec x=(3,4)\).`, ans: S`\(5\)`, fig: sqMap([[5 / 13, -12 / 13], [12 / 13, 5 / 13]], { w: 3.2 }) },
  { level: 3, space: 5, q: S`Prove that the product of two orthogonal matrices is orthogonal.`, ans: S`\((Q_1Q_2)^T(Q_1Q_2)=I\)` },
  { level: 3, space: 5, q: S`Prove that the inverse of an orthogonal matrix is orthogonal.`, ans: S`\((Q^T)^TQ^T=QQ^T=I\)` },
  { level: 3, space: 5, q: S`Complete \(\tfrac13(1,2,2)\), \(\tfrac13(2,1,-2)\) to an orthogonal \(3\times3\) matrix.`, ans: S`third column \(\pm\tfrac13(2,-2,1)\)`, fig: vecs3([[[1, 2, 2], "q₁", "blue"], [[2, 1, -2], "q₂", "red"]], { w: 3.2 }) },
  { level: 3, space: 5, q: S`Show that if \(Q\) is orthogonal and \(Q\vec x=\lambda\vec x\) with \(\lambda\) real, then \(\lambda=\pm1\).`, ans: S`\(|\vec x|=|Q\vec x|=|\lambda||\vec x|\)` },
  { level: 3, space: 5, q: S`Explain why a \(3\times2\) matrix \(U\) with \(U^TU=I\) cannot have \(UU^T=I\).`, ans: S`\(\operatorname{rank}UU^T\le2<3\)` },
];

export const WS = {
  code: "9.2",
  title: "Orthogonal Matrices",
  bigideas: S`Orthonormal columns are recorded in one equation, \(U^TU=I\). Such matrices preserve lengths, dot products and angles. Square ones — orthogonal matrices — invert by transposing and have determinant \(\pm1\).`,
  goals: ["Test orthonormality with \\(U^TU\\).", "Use length and angle preservation.", "Invert with \\(Q^T\\).", "Normalise orthogonal sets.", "Use \\(\\det Q=\\pm1\\)."],
  curriculum: "Orthogonality — orthogonal matrices",
  vocab: [["Orthonormal", "unit, perpendicular"], ["\\(U^TU=I\\)", "orthonormal columns"], ["Orthogonal matrix", "square, \\(Q^{-1}=Q^T\\)"], ["Isometry", "keeps lengths"], ["\\(\\det Q\\)", "\\(\\pm1\\)"]],
  hook: S`Turning or flipping a picture never stretches it. Which matrices move vectors without distorting them?`,
  concepts: NOTES,
  summary: [S`Orthonormal columns \(\iff U^TU=I\).`, S`\(|U\vec x|=|\vec x|\).`, S`\(Q^{-1}=Q^T\), \(QQ^T=I\).`, S`\(\det Q=\pm1\).`, S`\(Q\vec x=\vec b\Rightarrow\vec x=Q^T\vec b\).`],
  tips: ["Columns must be unit vectors too.", "For tall U, only U-transpose times U is I.", "Solve by transposing.", "Check one product, not every pair.", "det = ±1 is necessary, not sufficient."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
