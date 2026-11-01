// LINALG1 Worksheet 7.3 — The Standard Matrix
// Self-contained: complete notes, 9 worked examples with figures, 13 problems with an answer key.
import { svgT } from "./figT.mjs";
import { S, def, thm } from "./wkit.mjs";
import { rowPic, matPic } from "./fig3.mjs";
import { sqMap, ptMap, shapeMap } from "./fig7.mjs";
import { am } from "../bank/la.mjs";

const P = (svg, w = 4.4) => svgT(svg, w);
const M = (m) => am(m, false);
const C = (...a) => am(a.map((x) => [x]), false);

const NOTES = [
  { h: "1. The standard matrix",
    lead: thm("standard matrix", S`Every linear \(T:\mathbb R^n\to\mathbb R^m\) equals \(T(\vec x)=A\vec x\) for exactly one \(m\times n\) matrix \[A=\big[\,T(\vec e_1)\ \ T(\vec e_2)\ \ \cdots\ \ T(\vec e_n)\,\big].\]`) + S`\pf{\(T(\vec x)=T(\sum x_j\vec e_j)=\sum x_jT(\vec e_j)=A\vec x\). If also \(T(\vec x)=B\vec x\), column \(j\) of \(B\) is \(B\vec e_j=T(\vec e_j)\).}`,
    fig: P(rowPic([[[["T(e₁)", "T(e₂)", "T(e₃)"]], { label: "A = [T(e₁) T(e₂) T(e₃)]" }]]), 3.6), w: 0.5 },
  { h: "2. From a formula",
    lead: S`If \(T\) is given by a formula, substitute \(\vec e_1,\dots,\vec e_n\) one at a time; each result is a column. Equivalently, the coefficients of \(x_1,\dots,x_n\) in output entry \(i\) form row \(i\) of \(A\).`,
    fig: P(matPic([[2, 0, 1], [-1, 1, 0]], { label: "row i = coefficients of output i" }), 2.4), w: 0.55 },
  { h: "3. From a geometric description",
    lead: S`Draw where \(\vec e_1\) and \(\vec e_2\) go. A rotation by \(90^\circ\) clockwise sends \(\vec e_1\to(0,-1)\), \(\vec e_2\to(1,0)\); a reflection in the \(x_2\)-axis sends \(\vec e_1\to(-1,0)\) and fixes \(\vec e_2\).`,
    fig: sqMap([[0, 1], [-1, 0]], { w: 4, names: ["T(e₁)", "T(e₂)"] }), w: 0.5 },
  { h: "4. From images of another basis",
    lead: thm("AU = W", S`If \(T(\vec u_j)=\vec w_j\) for a basis \(\vec u_1,\dots,\vec u_n\), then \(AU=W\) with \(U=[\vec u_1\cdots\vec u_n]\), \(W=[\vec w_1\cdots\vec w_n]\), and \(A=WU^{-1}\).`) + S`\pf{Column \(j\) of \(AU\) is \(A\vec u_j=\vec w_j\). A basis gives an invertible \(U\).}`,
    fig: P(rowPic([[[["A"]], {}], [[["u₁", "u₂"]], { label: "U" }], "=", [[["w₁", "w₂"]], { label: "W" }]]), 3.4), w: 0.5 },
  { h: "5. Sizes and special cases",
    lead: S`\(T:\mathbb R^n\to\mathbb R^m\) has an \(m\times n\) matrix. A linear map \(\mathbb R^n\to\mathbb R\) is a \(1\times n\) row \(\vec a^T\), i.e. \(T(\vec x)=\vec a\cdot\vec x\). The identity map has matrix \(I\); the zero map has the zero matrix.`,
    fig: P(rowPic([[[[1, 1, 1]], { label: "1 × 3" }], [[["x₁"], ["x₂"], ["x₃"]], {}], "=", [[["x₁ + x₂ + x₃"]], {}]]), 3.6), w: 0.5 },
  { h: "6. Dependent inputs",
    lead: S`Images of dependent vectors must satisfy the same dependence: if \(\vec u_2=2\vec u_1\), then \(T(\vec u_2)=2T(\vec u_1)\). Data that violate this describe no linear map; data that only satisfy it do not determine \(T\).`,
    fig: ptMap([[1, 0], [1, 1]], [1, 1], { w: 3.8, names: ["u", "T(u)"], more: [[[2, 2], "2u", "violet"]] }), w: 0.5 },
];

const EXAMPLES = [
  { title: "A formula on ℝ³", q: S`Find the standard matrix of \(T(x_1,x_2,x_3)=(2x_1+x_3,\ x_2-x_1,\ 4x_3)\).`,
    fig: P(matPic([[2, 0, 1], [-1, 1, 0], [0, 0, 4]], { label: "A" }), 2),
    steps: [S`\[T(\vec e_1)=${C(2, -1, 0)},\quad T(\vec e_2)=${C(0, 1, 0)},\quad T(\vec e_3)=${C(1, 0, 4)}\ \Longrightarrow\ A=${M([[2, 0, 1], [-1, 1, 0], [0, 0, 4]])}.\]`, S`Check \((1,1,1)\): \(T=(3,0,4)\) and \(${M([[2, 0, 1], [-1, 1, 0], [0, 0, 4]])}${C(1, 1, 1)}=${C("2+0+1", "-1+1+0", "0+0+4")}=${C(3, 0, 4)}\) ✓.`],
    ans: S`\(${M([[2, 0, 1], [-1, 1, 0], [0, 0, 4]])}\)` },
  { title: "A tall matrix", q: S`Find the standard matrix of \(T(x_1,x_2)=(x_1-x_2,\ 3x_1,\ x_1+2x_2)\).`,
    fig: P(matPic([[1, -1], [3, 0], [1, 2]], { label: "3 × 2" }), 1.6),
    steps: [S`\(T:\mathbb R^2\to\mathbb R^3\), so \(A\) is \(3\times2\): \[A=\big[T(\vec e_1)\ T(\vec e_2)\big]=${M([[1, -1], [3, 0], [1, 2]])}.\]`, S`Check \((2,1)\): \(${M([[1, -1], [3, 0], [1, 2]])}${C(2, 1)}=${C("2-1", "6+0", "2+2")}=${C(1, 6, 4)}=T(2,1)\) ✓.`],
    ans: S`\(${M([[1, -1], [3, 0], [1, 2]])}\)` },
  { title: "Rotation by 90° clockwise", q: S`Find the matrix of the clockwise rotation by \(90^\circ\) and rotate \((2,3)\).`,
    fig: ptMap([[0, 1], [-1, 0]], [2, 3], { w: 3.8 }),
    steps: [S`\(\vec e_1\to(0,-1)\), \(\vec e_2\to(1,0)\): \(A=${M([[0, 1], [-1, 0]])}\).`, S`\[A${C(2, 3)}=${M([[0, 1], [-1, 0]])}${C(2, 3)}=${C("0+3", "-2+0")}=${C(3, -2)}.\]`],
    ans: S`\(${M([[0, 1], [-1, 0]])}\); \((3,-2)\)` },
  { title: "Reflection in the x₂-axis", q: S`Find the matrix of the reflection in the \(x_2\)-axis and reflect the triangle \((1,0),(3,1),(1,2)\).`,
    fig: shapeMap([[-1, 0], [0, 1]], [[1, 0], [3, 1], [1, 2]], { w: 3.8 }),
    steps: [S`\(\vec e_1\to(-1,0)\), \(\vec e_2\to(0,1)\): \(A=${M([[-1, 0], [0, 1]])}\).`, S`\[A${M([[1, 3, 1], [0, 1, 2]])}=${M([[-1, 0], [0, 1]])}${M([[1, 3, 1], [0, 1, 2]])}=${M([[-1, -3, -1], [0, 1, 2]])}.\]`],
    ans: S`\((-1,0),(-3,1),(-1,2)\)` },
  { title: "A sum functional", q: S`Find the matrix of \(T(x_1,x_2,x_3)=x_1+x_2+x_3\) and \(T(2,-5,4)\).`,
    fig: P(matPic([[1, 1, 1]], { label: "1 × 3" }), 1.8),
    steps: [S`\(T(\vec e_j)=1\) for each \(j\): \(A=${M([[1, 1, 1]])}\).`, S`\(A${C(2, -5, 4)}=2-5+4=1\).`],
    ans: S`\(${M([[1, 1, 1]])}\); \(1\)` },
  { title: "Images that form I", q: S`\(T(1,2)=(1,0)\) and \(T(1,3)=(0,1)\). Find \(A\).`,
    fig: P(rowPic([[[["A"]], {}], [[[1, 1], [2, 3]], { label: "U" }], "=", [[[1, 0], [0, 1]], { label: "W = I" }]]), 3.2),
    steps: [S`\(AU=I\) with \(U=${M([[1, 1], [2, 3]])}\), so \(A=U^{-1}\). \(\det U=3-2=1\): \(A=${M([[3, -1], [-2, 1]])}\).`, S`Check: \[AU=${M([[3, -1], [-2, 1]])}${M([[1, 1], [2, 3]])}=${M([["3-2", "3-3"], ["-2+2", "-2+3"]])}=I\ \checkmark\]`],
    ans: S`\(${M([[3, -1], [-2, 1]])}\)` },
  { title: "A = WU⁻¹ into ℝ³", q: S`\(T(1,1)=(2,0,1)\) and \(T(0,1)=(1,1,1)\). Find \(A\).`,
    fig: P(matPic([[2, 1], [0, 1], [1, 1]], { label: "W" }), 1.6),
    steps: [S`\(U=${M([[1, 0], [1, 1]])}\), \(\det U=1\), \(U^{-1}=${M([[1, 0], [-1, 1]])}\).`, S`\[A=WU^{-1}=${M([[2, 1], [0, 1], [1, 1]])}${M([[1, 0], [-1, 1]])}=${M([["2-1", "0+1"], ["0-1", "0+1"], ["1-1", "0+1"]])}=${M([[1, 1], [-1, 1], [0, 1]])}.\]`, S`Check: \(A${C(1, 1)}=${C("1+1", "-1+1", "0+1")}=${C(2, 0, 1)}\) ✓.`],
    ans: S`\(${M([[1, 1], [-1, 1], [0, 1]])}\)` },
  { title: "Projection onto the x₁x₃-plane", q: S`Find the matrix of the projection of \(\mathbb R^3\) onto the \(x_1x_3\)-plane and project \((4,-2,7)\).`,
    fig: P(matPic([[1, 0, 0], [0, 0, 0], [0, 0, 1]], { label: "A", cells: [[1, 1]] }), 1.8),
    steps: [S`\(\vec e_1\to\vec e_1\), \(\vec e_2\to\vec 0\), \(\vec e_3\to\vec e_3\): \(A=${M([[1, 0, 0], [0, 0, 0], [0, 0, 1]])}\).`, S`\[A${C(4, -2, 7)}=${C("4+0+0", "0+0+0", "0+0+7")}=${C(4, 0, 7)}.\]`],
    ans: S`\(\operatorname{diag}(1,0,1)\); \((4,0,7)\)` },
  { title: "Uniqueness", q: S`Prove: if \(A\vec x=B\vec x\) for every \(\vec x\in\mathbb R^n\), then \(A=B\).`,
    steps: [S`Take \(\vec x=\vec e_j\): \(A\vec e_j\) is column \(j\) of \(A\) and \(B\vec e_j\) is column \(j\) of \(B\).`, S`They are equal for each \(j\), so every column agrees: \(A=B\).`],
    ans: S`compare \(A\vec e_j=B\vec e_j\)` },
];

const PROBLEMS = [
  { level: 1, q: S`Find the standard matrix of \(T(x_1,x_2)=(4x_1,\ x_1-x_2)\).`, ans: S`\(${M([[4, 0], [1, -1]])}\)` },
  { level: 1, q: S`What size is the standard matrix of \(T:\mathbb R^3\to\mathbb R^5\)?`, ans: S`\(5\times3\)` },
  { level: 1, q: S`\(A=${M([[1, 2], [3, 4]])}\). Find \(T(\vec e_2)\).`, ans: S`\((2,4)\)`, fig: P(matPic([[1, 2], [3, 4]], { label: "A", cols: [1] }), 1.6) },
  { level: 2, q: S`Find the matrix of the rotation by \(180^\circ\).`, ans: S`\(-I\)`, fig: sqMap([[-1, 0], [0, -1]], { w: 3.4 }) },
  { level: 2, q: S`Find the matrix of \(T(x_1,x_2,x_3)=(x_3,x_1,x_2)\).`, ans: S`\(${M([[0, 0, 1], [1, 0, 0], [0, 1, 0]])}\)` },
  { level: 2, q: S`\(T(\vec e_1)=(2,5)\), \(T(\vec e_2)=(-1,3)\). Find \(T(3,-2)\).`, ans: S`\((8,9)\)` },
  { level: 2, q: S`\(T(1,1)=(3,1)\), \(T(1,-1)=(1,3)\). Find \(A\).`, ans: S`\(${M([[2, 1], [2, -1]])}\)`, fig: P(rowPic([[[["A"]], {}], [[[1, 1], [1, -1]], { label: "U" }], "=", [[[3, 1], [1, 3]], { label: "W" }]]), 3) },
  { level: 2, q: S`\(T:\mathbb R^3\to\mathbb R\), \(T(\vec e_1)=1\), \(T(\vec e_2)=0\), \(T(\vec e_3)=-2\). Find \(T(5,1,2)\).`, ans: S`\(1\)` },
  { level: 3, space: 5, q: S`Prove that the identity map has standard matrix \(I\).`, ans: S`\(T(\vec e_j)=\vec e_j\) is column \(j\) of \(I\)` },
  { level: 3, space: 5, q: S`Find every \(2\times2\) \(A\) with \(A(1,1)=(1,1)\).`, ans: S`\(${M([["a", "1-a"], ["c", "1-c"]])}\)` },
  { level: 3, space: 5, q: S`\(T(1,0,0)=(1,0)\), \(T(1,1,0)=(1,1)\), \(T(1,1,1)=(0,0)\). Find \(A\).`, ans: S`\(${M([[1, 0, -1], [0, 1, -1]])}\)`, fig: P(matPic([[1, 1, 1], [0, 1, 1], [0, 0, 1]], { label: "U" }), 1.8) },
  { level: 3, space: 5, q: S`Show that no linear \(T\) has \(T(1,2)=(0,1)\) and \(T(-2,-4)=(0,2)\).`, ans: S`linearity forces \(T(-2,-4)=-2(0,1)=(0,-2)\)` },
  { level: 3, space: 5, q: S`Find the standard matrix of \(T(\vec x)=\vec a\cdot\vec x\) for \(\vec a=(3,0,-1,2)\).`, ans: S`\(${M([[3, 0, -1, 2]])}\)` },
];

export const WS = {
  code: "7.3",
  title: "The Standard Matrix",
  bigideas: S`Every linear map \(T:\mathbb R^n\to\mathbb R^m\) is multiplication by one \(m\times n\) matrix, its standard matrix \(A=[T(\vec e_1)\cdots T(\vec e_n)]\). Find it column by column from a formula or a picture, or from the images of another basis by solving \(AU=W\).`,
  goals: ["State \\(A=[T(\\vec e_1)\\cdots T(\\vec e_n)]\\).", "Read the matrix off a formula.", "Build matrices of geometric maps.", "Use \\(AU=W\\), \\(A=WU^{-1}\\).", "Recognise impossible data."],
  curriculum: "Linear transformations — the standard matrix",
  vocab: [["Standard matrix", "\\([T(\\vec e_1)\\cdots T(\\vec e_n)]\\)"], ["\\(\\vec e_j\\)", "standard basis vector"], ["\\(m\\times n\\)", "size for \\(\\mathbb R^n\\to\\mathbb R^m\\)"], ["\\(AU=W\\)", "images of a basis"], ["Functional", "a \\(1\\times n\\) matrix"]],
  hook: S`A whole linear map hides in a few numbers: where the axes go. How do you read those numbers off a formula or a picture?`,
  concepts: NOTES,
  summary: [
    S`\(A=[T(\vec e_1)\ \cdots\ T(\vec e_n)]\), unique.`,
    S`Row \(i\) of \(A\) = coefficients of output \(i\).`,
    S`Geometry: draw \(T(\vec e_1)\), \(T(\vec e_2)\).`,
    S`\(AU=W\Rightarrow A=WU^{-1}\).`,
    S`Images respect dependences among inputs.`,
  ],
  tips: ["Images are columns, not rows.", "Check A on one vector.", "WU⁻¹, not U⁻¹W.", "Size m × n for ℝⁿ → ℝᵐ.", "Look for dependent inputs."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
