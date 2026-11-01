// LINALG1 Worksheet 9.1 — Orthogonal Complements
// Self-contained: complete notes, 9 worked examples with figures, 13 problems with an answer key.
import { svgT } from "./figT.mjs";
import { S, def, thm } from "./wkit.mjs";
import { rowPic, matPic } from "./fig3.mjs";
import { planeFig, lineFig } from "./fig5.mjs";
import { projLine } from "./fig9.mjs";
import { am, steps } from "../bank/la.mjs";

const P = (svg, w = 4.4) => svgT(svg, w);
const M = (m) => am(m, false);
const C = (...a) => am(a.map((x) => [x]), false);
const T = (v) => M([v]);

const NOTES = [
  { h: "1. Orthogonal complements",
    lead: def("orthogonal complement", S`For a subspace \(W\) of \(\mathbb R^n\), \(W^\perp=\{\vec x:\ \vec x\cdot\vec w=0\text{ for all }\vec w\in W\}\). It is a subspace, and \(W\cap W^\perp=\{\vec 0\}\).`) + S`In \(\mathbb R^3\): the complement of a line through \(\vec 0\) is the perpendicular plane, and the complement of a plane is its normal line.`,
    fig: planeFig([1, 2, 0], [0, 3, 1], { lu: "(1, 2, 0)", lv: "(0, 3, 1)", more: [[[2, -1, 3], "(2, −1, 3)", "green"]], w: 4.4 }), w: 0.5 },
  { h: "2. Computing W⊥",
    lead: thm("complement as a null space", S`If \(W=\operatorname{span}\{\vec w_1,\dots,\vec w_k\}\) and \(A=[\vec w_1\cdots\vec w_k]\), then \(W^\perp=\operatorname{Nul}A^T\).`) + S`\pf{\(\vec x\perp\vec w_i\) for each \(i\) means \(\vec w_i^T\vec x=0\), the rows of \(A^T\vec x=\vec 0\); orthogonality to the spanning vectors gives orthogonality to all combinations.}`,
    fig: P(rowPic([[[["w₁ᵀ"], ["w₂ᵀ"]], { label: "Aᵀ" }], [[["x"]], {}], "=", [[[0], [0]], {}]]), 3), w: 0.5 },
  { h: "3. The four fundamental subspaces",
    lead: thm("pairs", S`\((\operatorname{Row}A)^\perp=\operatorname{Nul}A\) in \(\mathbb R^n\) and \((\operatorname{Col}A)^\perp=\operatorname{Nul}A^T\) in \(\mathbb R^m\).`) + S`\pf{\(A\vec x=\vec 0\) says each row of \(A\) is perpendicular to \(\vec x\); apply the same to \(A^T\).}`,
    fig: P(matPic([["Row A", "⟂", "Nul A"], ["Col A", "⟂", "Nul Aᵀ"]], { label: "the four subspaces in pairs" }), 2.8), w: 0.55 },
  { h: "4. Dimensions",
    lead: S`\(\dim W+\dim W^\perp=n\) (rank–nullity for \(A^T\)), and \((W^\perp)^\perp=W\). For example a 2-dimensional subspace of \(\mathbb R^5\) has a 3-dimensional complement.`,
    fig: lineFig([1, -1, 2], { w: 4 }), w: 0.5 },
  { h: "5. Consistency of Ax = b",
    lead: S`\(A\vec x=\vec b\) is consistent \(\iff\vec b\in\operatorname{Col}A\iff\vec b\perp\operatorname{Nul}A^T\). So each basis vector \(\vec n\) of \(\operatorname{Nul}A^T\) gives one condition \(\vec n^T\vec b=0\).`,
    fig: P(rowPic([[[["n"]], { label: "n ∈ Nul Aᵀ" }], "⟂", [[["b"]], { label: "b ∈ Col A" }]]), 3), w: 0.5 },
  { h: "6. Splitting a vector along a line",
    lead: S`For \(W=\operatorname{span}\{\vec u\}\): \(\vec y=\hat y+\vec z\) with \(\hat y=\dfrac{\vec u^T\vec y}{\vec u^T\vec u}\vec u\in W\) and \(\vec z=\vec y-\hat y\in W^\perp\). (9.3 extends this to any subspace.)`,
    fig: projLine([2, 1], [1, 5], { w: 4 }), w: 0.5 },
];

const EXAMPLES = [
  { title: "Complement of a line", q: S`Find a basis of \(W^\perp\) for \(W=\operatorname{span}\{(2,-1,3)\}\).`,
    fig: planeFig([1, 2, 0], [0, 3, 1], { lu: "(1, 2, 0)", lv: "(0, 3, 1)", more: [[[2, -1, 3], "w", "green"]], w: 3.8 }),
    steps: [S`\(${T([2, -1, 3])}\vec x=0\): \(2x_1-x_2+3x_3=0\), so \(x_2=2x_1+3x_3\).`, S`\(x_1=s\), \(x_3=t\): \(\vec x=s${C(1, 2, 0)}+t${C(0, 3, 1)}\).`, S`Check: \(${T([2, -1, 3])}${M([[1, 0], [2, 3], [0, 1]])}=${M([["2-2+0", "0-3+3"]])}=${M([[0, 0]])}\) ✓.`],
    ans: S`\(\{(1,2,0),(0,3,1)\}\)` },
  { title: "Complement in ℝ⁴", q: S`Find a basis of \(W^\perp\) for \(W=\operatorname{span}\{(1,0,1,0),(0,1,0,1)\}\).`,
    fig: P(matPic([[1, 0, 1, 0], [0, 1, 0, 1]], { label: "Aᵀ" }), 2.2),
    steps: [S`\(A^T=${M([[1, 0, 1, 0], [0, 1, 0, 1]])}\) is already reduced: \(x_1=-x_3\), \(x_2=-x_4\).`, S`\(W^\perp=\operatorname{span}\{(-1,0,1,0),(0,-1,0,1)\}\).`, S`Check: \(A^T${M([[-1, 0], [0, -1], [1, 0], [0, 1]])}=${M([["-1+1", 0], [0, "-1+1"]])}=0\) ✓.`],
    ans: S`\(\{(-1,0,1,0),(0,-1,0,1)\}\)` },
  { title: "Null space ⟂ row space", q: S`For \(A=${M([[1, 1, 1], [1, 2, 3]])}\), find \(\operatorname{Nul}A\) and check it is orthogonal to the rows.`,
    fig: P(matPic([[1, 0, -1], [0, 1, 2]], { label: "RREF" }), 2),
    steps: [...steps([[1, 1, 1], [1, 2, 3]], [[S`Clear column 1.`, ["R2-R1"]], [S`Clear column 2 above.`, ["R1-R2"]]], { bar: false, intro: S`Row reduce \(A\)` }).steps, S`\(x_3=t\): \(x_1=t\), \(x_2=-2t\): \(\operatorname{Nul}A=\operatorname{span}\{(1,-2,1)\}\).`, S`\(A${C(1, -2, 1)}=${C("1-2+1", "1-4+3")}=${C(0, 0)}\) ✓.`],
    ans: S`\(\operatorname{span}\{(1,-2,1)\}\)` },
  { title: "A consistency condition", q: S`For \(A=${M([[1, 2], [2, 4], [1, 1]])}\), find \((\operatorname{Col}A)^\perp\) and the condition on \(\vec b\) for \(A\vec x=\vec b\) to be consistent.`,
    fig: P(matPic([[1, 2, 1], [2, 4, 1]], { label: "Aᵀ" }), 2),
    steps: [S`\(A^T=${M([[1, 2, 1], [2, 4, 1]])}\xrightarrow{R_2\to R_2-2R_1}${M([[1, 2, 1], [0, 0, -1]])}\): \(x_3=0\), \(x_1=-2x_2\): \(\operatorname{Nul}A^T=\operatorname{span}\{(-2,1,0)\}\).`, S`Consistent \(\iff${T([-2, 1, 0])}\vec b=0\iff b_2=2b_1\).`, S`Example: \(\vec b=(3,6,2)\): \(6=2\cdot3\) ✓; indeed \(A${C(1, 1)}=${C(3, 6, 2)}\).`],
    ans: S`\(b_2=2b_1\)` },
  { title: "Counting dimensions", q: S`\(W\) is the column space of a \(6\times4\) matrix of rank 4. Find \(\dim W^\perp\).`,
    fig: P(matPic([["6 × 4"], ["rank 4"]], { label: "A" }), 1.6),
    steps: [S`\(W\subseteq\mathbb R^6\), \(\dim W=4\).`, S`\(\dim W^\perp=6-4=2\).`],
    ans: S`\(2\)` },
  { title: "Splitting along a line", q: S`Write \(\vec y=(1,5)\) as \(\hat y+\vec z\), \(\hat y\in\operatorname{span}\{(2,1)\}\), \(\vec z\perp(2,1)\).`,
    fig: projLine([2, 1], [1, 5], { w: 3.8 }),
    steps: [S`\(c=\dfrac{${T([2, 1])}${C(1, 5)}}{${T([2, 1])}${C(2, 1)}}=\dfrac{2+5}{4+1}=\dfrac75\).`, S`\(\hat y=\tfrac75${C(2, 1)}=${C("\\tfrac{14}5", "\\tfrac75")}\), \(\vec z=${C("-\\tfrac95", "\\tfrac{18}5")}\).`, S`Check: \(\hat y^T\vec z=\tfrac{-126+126}{25}=0\) ✓.`],
    ans: S`\((\tfrac{14}5,\tfrac75)+(-\tfrac95,\tfrac{18}5)\)` },
  { title: "Complement of a plane", q: S`Find \(W^\perp\) for the plane \(W:\ x_1-x_2+2x_3=0\).`,
    fig: lineFig([1, -1, 2], { w: 3.8 }),
    steps: [S`\(W=\operatorname{Nul}${T([1, -1, 2])}\), so \(W^\perp=\operatorname{Row}${T([1, -1, 2])}=\operatorname{span}\{(1,-1,2)\}\).`, S`Dimensions: \(2+1=3\) ✓.`],
    ans: S`\(\operatorname{span}\{(1,-1,2)\}\)` },
  { title: "The complement of the complement", q: S`For \(W=\operatorname{span}\{(1,1,1)\}\), find \(W^\perp\) and then \((W^\perp)^\perp\).`,
    fig: P(matPic([[1, 1, 1]], { label: "normal vector" }), 1.8),
    steps: [S`\(W^\perp\): \(x_1+x_2+x_3=0\), basis \((-1,1,0),(-1,0,1)\).`, S`\((W^\perp)^\perp=\operatorname{Nul}${M([[-1, 1, 0], [-1, 0, 1]])}\): \(x_2=x_1\), \(x_3=x_1\): \(\operatorname{span}\{(1,1,1)\}=W\) ✓.`],
    ans: S`\(W^\perp\) is the plane \(x_1+x_2+x_3=0\); \((W^\perp)^\perp=W\)` },
  { title: "W⊥ is a subspace", q: S`Prove that \(W^\perp\) is a subspace of \(\mathbb R^n\).`,
    steps: [S`\(\vec 0\cdot\vec w=0\), so \(\vec 0\in W^\perp\).`, S`If \(\vec x,\vec y\in W^\perp\), then \((\vec x+\vec y)\cdot\vec w=0+0\) and \((c\vec x)\cdot\vec w=c\cdot0\) for every \(\vec w\in W\).`],
    ans: S`contains \(\vec 0\), closed under sums and multiples` },
];

const PROBLEMS = [
  { level: 1, q: S`Is \((3,0,-1)\) in \(W^\perp\) for \(W=\operatorname{span}\{(1,4,3)\}\)?`, ans: S`yes (\(3+0-3=0\))` },
  { level: 1, q: S`\(W\subseteq\mathbb R^7\) has dimension 3. Find \(\dim W^\perp\).`, ans: S`\(4\)` },
  { level: 1, q: S`Name \((\operatorname{Row}A)^\perp\).`, ans: S`\(\operatorname{Nul}A\)`, fig: P(matPic([["Row A", "⟂", "Nul A"]], {}), 2.4) },
  { level: 2, q: S`Find a basis of \(W^\perp\) for \(W=\operatorname{span}\{(1,-1,0),(0,1,-1)\}\).`, ans: S`\(\{(1,1,1)\}\)` },
  { level: 2, q: S`Find a basis of \(W^\perp\) for \(W=\operatorname{span}\{(1,2,0,1)\}\) in \(\mathbb R^4\).`, ans: S`\(\{(-2,1,0,0),(0,0,1,0),(-1,0,0,1)\}\)` },
  { level: 2, q: S`Find \(\operatorname{Nul}A\) for \(A=${M([[1, 0, 2], [0, 1, -1]])}\) and check it is orthogonal to \(\operatorname{Row}A\).`, ans: S`\(\operatorname{span}\{(-2,1,1)\}\)`, fig: P(matPic([[1, 0, 2], [0, 1, -1]], { label: "A" }), 2) },
  { level: 2, q: S`When is \(A\vec x=\vec b\) consistent for \(A=${M([[1, 1], [1, 2], [1, 3]])}\)?`, ans: S`\(b_1-2b_2+b_3=0\)` },
  { level: 2, q: S`Split \(\vec y=(4,3)\) along \(\operatorname{span}\{(1,2)\}\).`, ans: S`\((2,4)+(2,-1)\)`, fig: projLine([1, 2], [4, 3], { w: 3.2 }) },
  { level: 3, space: 5, q: S`Prove \(W\cap W^\perp=\{\vec 0\}\).`, ans: S`\(\vec x\cdot\vec x=0\Rightarrow\vec x=\vec 0\)` },
  { level: 3, space: 5, q: S`Prove \((\operatorname{Col}A)^\perp=\operatorname{Nul}A^T\).`, ans: S`\(A^T\vec x=\vec 0\iff\) each column \(\perp\vec x\)` },
  { level: 3, space: 5, q: S`Find a \(3\times3\) matrix \(A\) with \(\operatorname{Nul}A=\operatorname{span}\{(1,1,1)\}\) and explain why its rows must satisfy \(a_{i1}+a_{i2}+a_{i3}=0\).`, ans: S`e.g. \(${M([[1, -1, 0], [0, 1, -1], [1, 0, -1]])}\); rows \(\perp(1,1,1)\)`, fig: P(matPic([[1, -1, 0], [0, 1, -1], [1, 0, -1]], { label: "one answer" }), 2) },
  { level: 3, space: 5, q: S`Show that if \(\vec u\perp\vec v\) then \(|\vec u+\vec v|^2=|\vec u|^2+|\vec v|^2\).`, ans: S`expand \((\vec u+\vec v)^T(\vec u+\vec v)\)` },
  { level: 3, space: 5, q: S`\(W=\operatorname{span}\{(1,0,1),(1,1,0)\}\). Find \(W^\perp\) and check the dimension count.`, ans: S`\(\operatorname{span}\{(-1,1,1)\}\); \(2+1=3\)`, fig: planeFig([1, 0, 1], [1, 1, 0], { lu: "(1,0,1)", lv: "(1,1,0)", more: [[[-1, 1, 1], "normal", "green"]], w: 3.2 }) },
];

export const WS = {
  code: "9.1",
  title: "Orthogonal Complements",
  bigideas: S`The orthogonal complement \(W^\perp\) collects every vector perpendicular to \(W\). It is the null space \(\operatorname{Nul}A^T\) when \(W=\operatorname{Col}A\), its dimension is \(n-\dim W\), and it pairs the fundamental subspaces: \(\operatorname{Row}A\perp\operatorname{Nul}A\), \(\operatorname{Col}A\perp\operatorname{Nul}A^T\).`,
  goals: ["Define and compute \\(W^\\perp\\).", "Use \\(W^\\perp=\\operatorname{Nul}A^T\\).", "Pair the fundamental subspaces.", "Use \\(\\dim W+\\dim W^\\perp=n\\).", "Read consistency conditions from \\(\\operatorname{Nul}A^T\\)."],
  curriculum: "Orthogonality — orthogonal complements",
  vocab: [["\\(W^\\perp\\)", "perpendicular to all of \\(W\\)"], ["\\(\\operatorname{Nul}A^T\\)", "\\((\\operatorname{Col}A)^\\perp\\)"], ["\\(\\operatorname{Nul}A\\)", "\\((\\operatorname{Row}A)^\\perp\\)"], ["Dimension count", "\\(\\dim W+\\dim W^\\perp=n\\)"], ["Decomposition", "\\(\\vec y=\\hat y+\\vec z\\)"]],
  hook: S`A flagpole stands perpendicular to the ground: every direction along the ground is at right angles to it. Subspaces have perpendicular partners too.`,
  concepts: NOTES,
  summary: [S`\(W^\perp=\{\vec x:\vec x\perp W\}\).`, S`\(W=\operatorname{Col}A\Rightarrow W^\perp=\operatorname{Nul}A^T\).`, S`\((\operatorname{Row}A)^\perp=\operatorname{Nul}A\).`, S`\(\dim W+\dim W^\perp=n\).`, S`\(\vec b\in\operatorname{Col}A\iff\vec b\perp\operatorname{Nul}A^T\).`],
  tips: ["Test against the spanning vectors only.", "Use Nul of A-transpose for a column space.", "Give a basis, not a single vector.", "Check the dimension count.", "Vectors in W-perp need not be orthogonal to each other."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
