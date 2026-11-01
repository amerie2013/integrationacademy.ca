// LINALG1 Worksheet 9.4 — Projection Matrices and the Normal Equations
// Self-contained: complete notes, 9 worked examples with figures, 13 problems with an answer key.
import { svgT } from "./figT.mjs";
import { S, def, thm } from "./wkit.mjs";
import { rowPic, matPic } from "./fig3.mjs";
import { projPlane, projLine } from "./fig9.mjs";
import { am, steps } from "../bank/la.mjs";

const P = (svg, w = 4.4) => svgT(svg, w);
const M = (m) => am(m, false);
const C = (...a) => am(a.map((x) => [x]), false);
const T = (v) => M([v]);
const pl = (w = 4.2) => projPlane([1, 0, 1], [0, 1, 1], [1, 2, 6], [2, 3, 5], { w });

const NOTES = [
  { h: "1. The normal equations",
    lead: thm("normal equations", S`If \(A\) has independent columns, the projection of \(\vec y\) onto \(\operatorname{Col}A\) is \(\hat y=A\hat x\), where \(A^TA\hat x=A^T\vec y\).`) + S`\pf{\(\vec y-A\hat x\in(\operatorname{Col}A)^\perp=\operatorname{Nul}A^T\) gives \(A^T(\vec y-A\hat x)=\vec 0\). \(A^TA\vec x=\vec 0\Rightarrow|A\vec x|^2=0\Rightarrow\vec x=\vec 0\), so \(A^TA\) is invertible.}`,
    fig: pl(), w: 0.5 },
  { h: "2. Solving them",
    lead: S`Form the small square matrix \(A^TA\) (entries: dot products of columns) and the vector \(A^T\vec y\) (columns dotted with \(\vec y\)); row reduce \([A^TA\mid A^T\vec y]\). Then \(\hat y=A\hat x\) and the error \(\vec e=\vec y-\hat y\) must satisfy \(A^T\vec e=\vec 0\).`,
    fig: P(matPic([["a₁·a₁", "a₁·a₂"], ["a₂·a₁", "a₂·a₂"]], { label: "AᵀA" }), 2.2), w: 0.55 },
  { h: "3. The projection matrix",
    lead: def("projection matrix", S`\(P=A(A^TA)^{-1}A^T\) gives \(\hat y=P\vec y\). It is symmetric and idempotent: \(P^T=P\), \(P^2=P\).`) + S`For one column \(\vec a\): \(P=\frac{\vec a\vec a^T}{\vec a^T\vec a}\). For orthonormal columns \(U\): \(P=UU^T\).`,
    fig: projLine([2, 1], [1, 3], { w: 4 }), w: 0.5 },
  { h: "4. Complementary projection",
    lead: S`\(I-P\) projects onto \((\operatorname{Col}A)^\perp\): \(\vec y=P\vec y+(I-P)\vec y\). To project onto a plane \(\vec n^T\vec x=0\) in \(\mathbb R^3\), use \(I-\frac{\vec n\vec n^T}{\vec n^T\vec n}\).`,
    fig: P(rowPic([[[["y"]], {}], "=", [[["Py"]], { label: "in Col A" }], "+", [[["(I − P)y"]], { label: "⟂ Col A" }]]), 3.6), w: 0.5 },
  { h: "5. Eigenvalues, trace and rank",
    lead: S`A projection matrix has eigenvalues 1 (on \(\operatorname{Col}A\)) and 0 (on the complement). So \(\operatorname{rank}P=\operatorname{tr}P=\dim\operatorname{Col}A\).`,
    fig: P(matPic([[1, 0, 0], [0, 1, 0], [0, 0, 0]], { label: "P in an adapted basis" }), 2), w: 0.55 },
  { h: "6. When to form P",
    lead: S`To project a single vector, solve the normal equations — it is less work. Form \(P\) when many vectors must be projected onto the same subspace, or to study the projection as a linear map.`,
    fig: pl(), w: 0.5 },
];

const EXAMPLES = [
  { title: "Normal equations in ℝ³", q: S`Project \(\vec y=(1,2,6)\) onto \(\operatorname{Col}A\), \(A=${M([[1, 0], [0, 1], [1, 1]])}\).`,
    fig: pl(3.8),
    steps: [S`\(A^TA=${M([[2, 1], [1, 2]])}\), \(A^T\vec y=${C("1+0+6", "0+2+6")}=${C(7, 8)}\).`, ...steps([[2, 1, 7], [1, 2, 8]], [[S`Bring the 1 up.`, ["R1<->R2"]], [S`Clear column 1.`, ["R2-2R1"]], [S`Scale.`, ["R2*-1/3"]], [S`Clear column 2 above.`, ["R1-2R2"]]], { intro: S`Row reduce \([A^TA\mid A^T\vec y]\)` }).steps, S`\(\hat x=(2,3)\), \(\hat y=A\hat x=(2,3,5)\), \(\vec e=(-1,-1,1)\), \(A^T\vec e=(-1+1,-1+1)=\vec 0\) ✓.`],
    ans: S`\(\hat y=(2,3,5)\)` },
  { title: "The projection matrix", q: S`Find \(P\) for the \(A\) of Example 1 and check \(P\vec y\).`,
    fig: P(matPic([[2, -1, 1], [-1, 2, 1], [1, 1, 2]], { label: "3P" }), 2),
    steps: [S`\((A^TA)^{-1}=\tfrac13${M([[2, -1], [-1, 2]])}\), \(A(A^TA)^{-1}=\tfrac13${M([[2, -1], [-1, 2], [1, 1]])}\).`, S`\(P=\tfrac13${M([[2, -1], [-1, 2], [1, 1]])}${M([[1, 0, 1], [0, 1, 1]])}=\tfrac13${M([[2, -1, 1], [-1, 2, 1], [1, 1, 2]])}\).`, S`\(P${C(1, 2, 6)}=\tfrac13${C("2-2+6", "-1+4+6", "1+2+12")}=${C(2, 3, 5)}\) ✓.`],
    ans: S`\(\tfrac13${M([[2, -1, 1], [-1, 2, 1], [1, 1, 2]])}\)` },
  { title: "Checking P² = P", q: S`Verify the first column of \(P^2\) equals the first column of \(P\) (Example 2).`,
    fig: P(matPic([[2, -1, 1], [-1, 2, 1], [1, 1, 2]], { label: "3P" }), 2),
    steps: [S`\(P\cdot(\text{column 1 of }P)=\tfrac19${M([[2, -1, 1], [-1, 2, 1], [1, 1, 2]])}${C(2, -1, 1)}=\tfrac19${C("4+1+1", "-2-2+1", "2-1+2")}=\tfrac13${C(2, -1, 1)}\) ✓.`],
    ans: S`equal` },
  { title: "A line in ℝ³", q: S`Find the projection matrix onto the line through \(\vec a=(2,1,2)\).`,
    fig: P(rowPic([[[[2], [1], [2]], { label: "a" }], [[[2, 1, 2]], { label: "aᵀ" }]]), 2.6),
    steps: [S`\(\vec a^T\vec a=9\), \(\vec a\vec a^T=${C(2, 1, 2)}${T([2, 1, 2])}=${M([[4, 2, 4], [2, 1, 2], [4, 2, 4]])}\).`, S`\(P=\tfrac19${M([[4, 2, 4], [2, 1, 2], [4, 2, 4]])}\); \(\operatorname{tr}P=\tfrac{4+1+4}9=1\) ✓ (a line).`],
    ans: S`\(\tfrac19${M([[4, 2, 4], [2, 1, 2], [4, 2, 4]])}\)` },
  { title: "Projecting onto a plane with I − P", q: S`Project \(\vec y=(3,0,3)\) onto the plane \(x_1-x_2+x_3=0\).`,
    fig: P(rowPic([[[["y"]], {}], "−", [[["2n"]], {}], "=", [[[1], [2], [1]], {}]]), 2.8),
    steps: [S`\(\vec n=(1,-1,1)\), \(\vec n^T\vec y=3-0+3=6\), \(\vec n^T\vec n=3\): the normal part is \(2\vec n=(2,-2,2)\).`, S`\((I-P_n)\vec y=${C(3, 0, 3)}-${C(2, -2, 2)}=${C(1, 2, 1)}\). Check \(1-2+1=0\) ✓.`],
    ans: S`\((1,2,1)\)` },
  { title: "A projection in ℝ⁴", q: S`Project \(\vec y=(2,0,1,3)\) onto \(\operatorname{Col}A\), \(A=${M([[1, 1], [1, 0], [1, 1], [1, 2]])}\).`,
    fig: P(matPic([[4, 4], [4, 6]], { label: "AᵀA" }), 1.6),
    steps: [S`\(A^TA=${M([[4, 4], [4, 6]])}\), \(A^T\vec y=${C("2+0+1+3", "2+0+1+6")}=${C(6, 9)}\).`, S`\(${am([[4, 4, 6], [4, 6, 9]])}\xrightarrow{R_2\to R_2-R_1}${am([[4, 4, 6], [0, 2, 3]])}\): \(\hat x_2=1.5\), \(4\hat x_1=6-6\Rightarrow\hat x_1=0\).`, S`\(\hat y=(1.5,0,1.5,3)\), \(\vec e=(0.5,0,-0.5,0)\), \(A^T\vec e=(0.5-0.5,\ 0.5-0.5)=\vec 0\) ✓.`],
    ans: S`\(\hat y=(1.5,0,1.5,3)\)` },
  { title: "Trace and rank of P", q: S`Find \(\operatorname{tr}P\) and \(\operatorname{rank}P\) for Example 2.`,
    fig: P(matPic([[2, -1, 1], [-1, 2, 1], [1, 1, 2]], { label: "3P" }), 2),
    steps: [S`\(\operatorname{tr}P=\tfrac{2+2+2}3=2\).`, S`Eigenvalues 1, 1, 0: rank 2 \(=\dim\operatorname{Col}A\).`],
    ans: S`trace 2, rank 2` },
  { title: "Orthonormal columns give UUᵀ", q: S`Show \(A(A^TA)^{-1}A^T=UU^T\) when \(A=U\) has orthonormal columns, and compute it for \(U=\tfrac1{\sqrt2}${M([[1], [1]])}\).`,
    fig: projLine([1, 1], [3, 1], { w: 3.8 }),
    steps: [S`\(U^TU=I\), so \(U(U^TU)^{-1}U^T=UU^T\).`, S`\(UU^T=\tfrac12${C(1, 1)}${T([1, 1])}=\tfrac12${M([[1, 1], [1, 1]])}\).`],
    ans: S`\(\tfrac12${M([[1, 1], [1, 1]])}\)` },
  { title: "I − P is a projection", q: S`Prove \((I-P)^2=I-P\) and \((I-P)^T=I-P\).`,
    steps: [S`\((I-P)^2=I-2P+P^2=I-2P+P=I-P\).`, S`\((I-P)^T=I-P^T=I-P\).`],
    ans: S`uses \(P^2=P=P^T\)` },
];

const PROBLEMS = [
  { level: 1, q: S`Find \(A^TA\) for \(A=${M([[1, 2], [1, 0]])}\).`, ans: S`\(${M([[2, 2], [2, 4]])}\)` },
  { level: 1, q: S`Find the projection matrix onto the line through \((1,1)\).`, ans: S`\(\tfrac12${M([[1, 1], [1, 1]])}\)`, fig: projLine([1, 1], [2, 0], { w: 3.2 }) },
  { level: 1, q: S`For a projection matrix, \(P^2=\)?`, ans: S`\(P\)` },
  { level: 2, q: S`Project \((0,3,0)\) onto \(\operatorname{Col}${M([[1, 0], [0, 1], [1, 1]])}\).`, ans: S`\(\hat x=(-1,2)\), \(\hat y=(-1,2,1)\)` },
  { level: 2, q: S`Project \((1,1,1)\) onto the plane \(x_1+2x_2+2x_3=0\).`, ans: S`\((1,1,1)-\tfrac59(1,2,2)=(\tfrac49,-\tfrac19,-\tfrac19)\)`, fig: P(matPic([[1, 2, 2]], { label: "normal" }), 1.6) },
  { level: 2, q: S`Find the projection matrix onto the line through \((3,4)\).`, ans: S`\(\tfrac1{25}${M([[9, 12], [12, 16]])}\)` },
  { level: 2, q: S`Solve the normal equations for \(A=${M([[1, 1], [1, 2], [1, 3]])}\), \(\vec y=(1,2,2)\).`, ans: S`\(\hat x=(\tfrac23,\tfrac12)\)` },
  { level: 2, q: S`\(P\) projects \(\mathbb R^5\) onto a 3-dimensional subspace. Find \(\operatorname{tr}P\) and \(\operatorname{tr}(I-P)\).`, ans: S`\(3\) and \(2\)`, fig: P(matPic([["tr P = 3"], ["tr(I − P) = 2"]], {}), 1.8) },
  { level: 3, space: 5, q: S`Prove that \(P=A(A^TA)^{-1}A^T\) is symmetric.`, ans: S`\(P^T=A((A^TA)^{-1})^TA^T=P\)` },
  { level: 3, space: 5, q: S`Prove \(A^TA\) is invertible when \(A\) has independent columns.`, ans: S`\(A^TA\vec x=\vec 0\Rightarrow|A\vec x|^2=0\)` },
  { level: 3, space: 5, q: S`Show that the eigenvalues of a projection matrix are 0 or 1.`, ans: S`\(\lambda^2=\lambda\)` },
  { level: 3, space: 5, q: S`Find the projection matrix onto the plane \(x_1+x_2+x_3=0\).`, ans: S`\(\tfrac13${M([[2, -1, -1], [-1, 2, -1], [-1, -1, 2]])}\)`, fig: P(matPic([[2, -1, -1], [-1, 2, -1], [-1, -1, 2]], { label: "3P" }), 2) },
  { level: 3, space: 5, q: S`Is \(${M([[1, 0], [1, 0]])}\) an orthogonal projection matrix? Explain.`, ans: S`no: \(P^2=P\) but \(P^T\ne P\)` },
];

export const WS = {
  code: "9.4",
  title: "Projection Matrices and the Normal Equations",
  bigideas: S`Projecting onto \(\operatorname{Col}A\) for any basis means solving \(A^TA\hat x=A^T\vec y\): the error must be perpendicular to every column. Solving for all \(\vec y\) at once gives \(P=A(A^TA)^{-1}A^T\), a symmetric matrix with \(P^2=P\).`,
  goals: ["Solve \\(A^TA\\hat x=A^T\\vec y\\).", "Check \\(A^T(\\vec y-A\\hat x)=\\vec 0\\).", "Form \\(P=A(A^TA)^{-1}A^T\\).", "Use \\(\\vec a\\vec a^T/\\vec a^T\\vec a\\) and \\(I-P\\).", "Use \\(P^2=P=P^T\\)."],
  curriculum: "Orthogonality — projection matrices",
  vocab: [["Normal equations", "\\(A^TA\\hat x=A^T\\vec y\\)"], ["\\(P\\)", "\\(A(A^TA)^{-1}A^T\\)"], ["Idempotent", "\\(P^2=P\\)"], ["Line", "\\(\\vec a\\vec a^T/\\vec a^T\\vec a\\)"], ["\\(I-P\\)", "onto the complement"]],
  hook: S`How do you find the shadow of a vector on a slanted plane when nobody hands you a perpendicular basis?`,
  concepts: NOTES,
  summary: [S`\(A^TA\hat x=A^T\vec y\), \(\hat y=A\hat x\).`, S`\(A^T\vec e=\vec 0\).`, S`\(P=A(A^TA)^{-1}A^T\), \(P^2=P=P^T\).`, S`Line: \(\vec a\vec a^T/\vec a^T\vec a\).`, S`\(I-P\) projects onto the complement.`],
  tips: ["Multiply both sides by A-transpose.", "x-hat is not the projection; A times x-hat is.", "Check the error against every column.", "Trace of P is the dimension.", "Form P only when needed."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
