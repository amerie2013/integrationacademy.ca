// LINALG1 Worksheet 7.6 — Kernel and Range; One-to-One and Onto
// Self-contained: complete notes, 9 worked examples with figures, 13 problems with an answer key.
import { svgT } from "./figT.mjs";
import { S, def, thm } from "./wkit.mjs";
import { matPic } from "./fig3.mjs";
import { vecs2 } from "./fig5.mjs";
import { kernelLine, sqMap } from "./fig7.mjs";
import { am, steps } from "../bank/la.mjs";

const P = (svg, w = 4.4) => svgT(svg, w);
const M = (m) => am(m, false);
const C = (...a) => am(a.map((x) => [x]), false);

const NOTES = [
  { h: "1. Kernel and range",
    lead: def("kernel and range", S`For linear \(T:\mathbb R^n\to\mathbb R^m\): \(\ker T=\{\vec x:T(\vec x)=\vec 0\}\subseteq\mathbb R^n\) and \(\operatorname{range}T=\{T(\vec x)\}\subseteq\mathbb R^m\). For \(T(\vec x)=A\vec x\): \(\ker T=\operatorname{Nul}A\), \(\operatorname{range}T=\operatorname{Col}A\).`) + S`Both are subspaces: they contain \(\vec 0\) and are closed under combinations.`,
    fig: kernelLine([1, -2], { w: 4 }), w: 0.5 },
  { h: "2. Computing them",
    lead: S`Row reduce \(A\). The free variables give a basis of \(\ker T\) (one vector per free variable); the \emph{pivot columns of \(A\) itself} give a basis of the range.`,
    fig: P(matPic([[1, 2, 0], [0, 0, 1]], { label: "pivot columns 1, 3; x₂ free", cols: [0, 2] }), 2.4), w: 0.55 },
  { h: "3. One-to-one",
    lead: thm("one-to-one", S`\(T(\vec u)=T(\vec v)\iff\vec u-\vec v\in\ker T\). So \(T\) is one-to-one \(\iff\ker T=\{\vec 0\}\iff\) the columns of \(A\) are independent \(\iff\) a pivot in every column.`) + S`\pf{\(T\vec u-T\vec v=T(\vec u-\vec v)\) by linearity.}`,
    fig: vecs2([[[3, 0], "u", "blue"], [[1, 1], "v", "red"], [[2, -1], "u − v ∈ ker T", "violet", [1, 1], true]], { xmin: -1, xmax: 4, ymin: -1, ymax: 2 }), w: 0.5 },
  { h: "4. Onto",
    lead: thm("onto", S`\(T\) is onto \(\mathbb R^m\iff\operatorname{range}T=\mathbb R^m\iff\) the columns span \(\mathbb R^m\iff\) a pivot in every row.`) + S`\pf{A row of an echelon form without a pivot lets some \(\vec b\) produce \([\,0\cdots0\mid c\,]\), \(c\ne0\).}`,
    fig: P(matPic([[1, 0, "*"], [0, 1, "*"], [0, 0, "c"]], { label: "no pivot in row 3: not onto" }), 2.2), w: 0.55 },
  { h: "5. The dimension count",
    lead: thm("rank–nullity for maps", S`\(\dim\ker T+\dim\operatorname{range}T=n\).`) + S`Consequences: if \(n>m\), \(T\) is not one-to-one; if \(n<m\), \(T\) is not onto; if \(n=m\), one-to-one \(\iff\) onto \(\iff A\) invertible.`,
    fig: P(matPic([["pivots", "free"]], { label: "n = rank + nullity" }), 2.2), w: 0.55 },
  { h: "6. A picture in the plane",
    lead: S`For a singular \(2\times2\) matrix of rank 1, the kernel is a line through \(\vec 0\) (squashed to \(\vec 0\)) and the range is another line (where all outputs land). For rank 2, the kernel is \(\{\vec 0\}\) and the range is the whole plane.`,
    fig: sqMap([[1, 2], [2, 4]], { w: 4 }), w: 0.5 },
];

const EXAMPLES = [
  { title: "A rank-one map on ℝ³", q: S`Find bases of \(\ker T\) and the range for \(A=${M([[1, -1, 2], [2, -2, 4]])}\).`,
    fig: P(matPic([[1, -1, 2], [0, 0, 0]], { label: "echelon form", cols: [0] }), 2.2),
    steps: [S`\[${M([[1, -1, 2], [2, -2, 4]])}\xrightarrow{R_2\to R_2-2R_1}${M([[1, -1, 2], [0, 0, 0]])}.\]`, S`\(x_2=s\), \(x_3=t\) free, \(x_1=s-2t\): \[\vec x=s${C(1, 1, 0)}+t${C(-2, 0, 1)},\quad \ker T=\operatorname{span}\{(1,1,0),(-2,0,1)\}.\]`, S`Range: pivot column 1 of \(A\), \(\operatorname{span}\{(1,2)\}\). Count \(2+1=3=n\).`],
    ans: S`\(\ker T=\operatorname{span}\{(1,1,0),(-2,0,1)\}\); range \(=\operatorname{span}\{(1,2)\}\)` },
  { title: "A tall one-to-one map", q: S`Is \(T(\vec x)=${M([[1, 2], [3, 4], [5, 6]])}\vec x\) one-to-one? Onto?`,
    fig: P(matPic([[1, 2], [0, -2], [0, 0]], { label: "echelon form" }), 1.8),
    steps: [...steps([[1, 2], [3, 4], [5, 6]], [
      [S`Clear column 1.`, ["R2-3R1", "R3-5R1"]],
      [S`Clear column 2 below its pivot.`, ["R3-2R2"]],
    ], { bar: false, intro: S`Row reduce \(A\)` }).steps,
      S`Pivots in both columns: one-to-one. Row 3 has none: not onto.`],
    ans: S`one-to-one, not onto` },
  { title: "A wide onto map", q: S`Is \(T(\vec x)=${M([[1, 0, 1], [0, 1, 1]])}\vec x\) onto? One-to-one?`,
    fig: kernelLine([-1, -1], { w: 3.6, label: "ker T (in x₁x₂)" }),
    steps: [S`Already in RREF: a pivot in each row, so onto \(\mathbb R^2\).`, S`\(x_3=t\) free: \(x_1=-t\), \(x_2=-t\). \(\ker T=\operatorname{span}\{(-1,-1,1)\}\ne\{\vec 0\}\). Check: \(${M([[1, 0, 1], [0, 1, 1]])}${C(-1, -1, 1)}=${C("-1+0+1", "0-1+1")}=${C(0, 0)}\) ✓.`],
    ans: S`onto, not one-to-one` },
  { title: "A singular 3 × 3 map", q: S`Find \(\ker T\) and the range for \(A=${M([[1, 2, 3], [2, 4, 6], [1, 1, 1]])}\).`,
    fig: P(matPic([[1, 2, 3], [0, -1, -2], [0, 0, 0]], { label: "echelon form" }), 2),
    steps: [...steps([[1, 2, 3], [2, 4, 6], [1, 1, 1]], [
      [S`Clear column 1.`, ["R2-2R1", "R3-R1"]],
      [S`Move the nonzero row up.`, ["R2<->R3"]],
    ], { bar: false, intro: S`Row reduce \(A\)` }).steps,
      S`\(x_3=t\): \(-x_2-2t=0\Rightarrow x_2=-2t\); \(x_1=-2x_2-3x_3=4t-3t=t\). \(\ker T=\operatorname{span}\{(1,-2,1)\}\). Check: \(A${C(1, -2, 1)}=${C("1-4+3", "2-8+6", "1-2+1")}=\vec 0\) ✓.`,
      S`Range: pivot columns 1, 2: \(\operatorname{span}\{(1,2,1),(2,4,1)\}\), a plane. Count \(1+2=3\).`],
    ans: S`\(\ker T=\operatorname{span}\{(1,-2,1)\}\); range a plane` },
  { title: "Two inputs, same output", q: S`For \(A=${M([[1, 2], [2, 4]])}\), show \(\vec u=(3,0)\) and \(\vec v=(1,1)\) have the same image, and explain with the kernel.`,
    fig: vecs2([[[3, 0], "u", "blue"], [[1, 1], "v", "red"], [[2, -1], "u − v", "violet", [1, 1], true]], { xmin: -1, xmax: 4, ymin: -1, ymax: 2 }),
    steps: [S`\[A\vec u=${M([[1, 2], [2, 4]])}${C(3, 0)}=${C(3, 6)},\qquad A\vec v=${M([[1, 2], [2, 4]])}${C(1, 1)}=${C("1+2", "2+4")}=${C(3, 6)}.\]`, S`\(\vec u-\vec v=(2,-1)\) and \(A${C(2, -1)}=${C("2-2", "4-4")}=\vec 0\): the difference lies in the kernel.`],
    ans: S`both map to \((3,6)\); \((2,-1)\in\ker T\)` },
  { title: "Describing the range by an equation", q: S`Find the condition on \(\vec b\) for \(\vec b\) to be in the range of \(A=${M([[1, 2], [0, 1], [1, 3]])}\).`,
    fig: P(matPic([[1, 2, "b₁"], [0, 1, "b₂"], [0, 0, "b₃ − b₁ − b₂"]], { label: "reduced [A | b]" }), 2.6),
    steps: [S`\[${am([[1, 2, "b_1"], [0, 1, "b_2"], [1, 3, "b_3"]])}\xrightarrow{R_3\to R_3-R_1}${am([[1, 2, "b_1"], [0, 1, "b_2"], [0, 1, "b_3-b_1"]])}\xrightarrow{R_3\to R_3-R_2}${am([[1, 2, "b_1"], [0, 1, "b_2"], [0, 0, "b_3-b_1-b_2"]])}.\]`, S`Consistent \(\iff b_3=b_1+b_2\): the range is that plane. E.g. \((1,0,0)\) is not in it.`],
    ans: S`\(b_3=b_1+b_2\)` },
  { title: "A parameter and onto", q: S`For which \(h\) is \(T(\vec x)=${M([[1, 2], [2, "h"]])}\vec x\) onto \(\mathbb R^2\)?`,
    fig: P(matPic([[1, 2], [0, "h − 4"]], { label: "after R₂ − 2R₁" }), 1.8),
    steps: [S`\[${M([[1, 2], [2, "h"]])}\xrightarrow{R_2\to R_2-2R_1}${M([[1, 2], [0, "h-4"]])}.\]`, S`A pivot in row 2 \(\iff h\ne4\). Square, so then also one-to-one.`],
    ans: S`\(h\ne4\)` },
  { title: "A map ℝ⁴ → ℝ³", q: S`For \(A=${M([[1, 0, 2, 1], [0, 1, 1, -1], [1, 1, 3, 0]])}\), find \(\dim\ker T\), \(\dim\operatorname{range}T\) and a kernel basis.`,
    fig: P(matPic([[1, 0, 2, 1], [0, 1, 1, -1], [0, 0, 0, 0]], { label: "RREF" }), 2.4),
    steps: [...steps([[1, 0, 2, 1], [0, 1, 1, -1], [1, 1, 3, 0]], [
      [S`Clear column 1.`, ["R3-R1"]],
      [S`Clear column 2 below its pivot.`, ["R3-R2"]],
    ], { bar: false, intro: S`Row reduce \(A\)` }).steps,
      S`Rank 2, so \(\dim\operatorname{range}T=2\), \(\dim\ker T=4-2=2\). With \(x_3=s\), \(x_4=t\): \(x_1=-2s-t\), \(x_2=-s+t\): \[\ker T=\operatorname{span}\left\{${C(-2, -1, 1, 0)},${C(-1, 1, 0, 1)}\right\}.\]`,
      S`Check: \(A${C(-2, -1, 1, 0)}=${C("-2+0+2+0", "0-1+1+0", "-2-1+3+0")}=\vec 0\) ✓.`],
    ans: S`\(\dim\ker=2\), \(\dim\operatorname{range}=2\)` },
  { title: "The kernel is a subspace", q: S`Prove that \(\ker T\) is a subspace of \(\mathbb R^n\).`,
    steps: [S`\(T(\vec 0)=\vec 0\), so \(\vec 0\in\ker T\).`, S`If \(\vec u,\vec v\in\ker T\): \(T(\vec u+\vec v)=T\vec u+T\vec v=\vec 0\) and \(T(c\vec u)=cT\vec u=\vec 0\). So the kernel is closed under addition and scalar multiplication.`],
    ans: S`contains \(\vec 0\); closed under \(+\) and scalars` },
];

const PROBLEMS = [
  { level: 1, q: S`Find \(\ker T\) for \(T(\vec x)=${M([[1, 0], [0, 0]])}\vec x\).`, ans: S`\(\operatorname{span}\{\vec e_2\}\)` },
  { level: 1, q: S`Is \(T(\vec x)=${M([[1, 2], [3, 4]])}\vec x\) one-to-one?`, ans: S`yes (\(\det=-2\ne0\))` },
  { level: 1, q: S`Can a linear \(T:\mathbb R^3\to\mathbb R^2\) be one-to-one?`, ans: S`no` },
  { level: 2, q: S`Find a basis of \(\ker T\) for \(A=${M([[1, 1, 1], [1, 2, 3]])}\).`, ans: S`\(\{(1,-2,1)\}\)`, fig: P(matPic([[1, 1, 1], [1, 2, 3]], { label: "A" }), 1.8) },
  { level: 2, q: S`Describe the range of \(T(\vec x)=${M([[2, 4], [1, 2]])}\vec x\).`, ans: S`the line \(\operatorname{span}\{(2,1)\}\)`, fig: sqMap([[2, 4], [1, 2]], { w: 3.4 }) },
  { level: 2, q: S`\(A=${M([[1, 1], [1, 2], [1, 3]])}\). Is \(T\) one-to-one? Onto?`, ans: S`one-to-one, not onto` },
  { level: 2, q: S`\(A\) is \(3\times5\) with rank 3. Find \(\dim\ker T\).`, ans: S`\(2\)` },
  { level: 2, q: S`For which \(h\) is \(${M([[1, "h"], [3, 6]])}\vec x\) not one-to-one?`, ans: S`\(h=2\)`, fig: P(matPic([[1, "h"], [0, "6 − 3h"]], { label: "after R₂ − 3R₁" }), 1.8) },
  { level: 3, space: 5, q: S`Prove that the range of a linear map is a subspace.`, ans: S`\(\vec 0=T\vec 0\); \(T\vec u+T\vec v=T(\vec u+\vec v)\); \(cT\vec u=T(c\vec u)\)` },
  { level: 3, space: 5, q: S`Prove: \(T\) is one-to-one \(\iff\ker T=\{\vec 0\}\).`, ans: S`\(T\vec u=T\vec v\iff\vec u-\vec v\in\ker T\)` },
  { level: 3, space: 5, q: S`Prove that if \(A\) is \(m\times n\) and \(T\) is onto, then \(n\ge m\).`, ans: S`a pivot in each of \(m\) rows needs \(m\) different columns` },
  { level: 3, space: 5, q: S`Find a \(3\times3\) matrix whose kernel is \(\operatorname{span}\{(1,1,1)\}\).`, ans: S`e.g. \(${M([[1, -1, 0], [0, 1, -1], [0, 0, 0]])}\)`, fig: P(matPic([[1, -1, 0], [0, 1, -1], [0, 0, 0]], { label: "one answer" }), 2) },
  { level: 3, space: 5, q: S`\(T:\mathbb R^4\to\mathbb R^4\) has a 1-dimensional kernel. Is \(T\) onto? Explain.`, ans: S`no: range has dimension 3` },
];

export const WS = {
  code: "7.6",
  title: "Kernel and Range; One-to-One and Onto",
  bigideas: S`The kernel (vectors sent to \(\vec 0\)) decides whether \(T\) is one-to-one; the range (all outputs) decides whether it is onto. For \(T(\vec x)=A\vec x\) both come from one row reduction: pivots in every column mean one-to-one, pivots in every row mean onto, and \(\dim\ker T+\dim\operatorname{range}T=n\).`,
  goals: ["Compute \\(\\ker T\\) and the range.", "Test one-to-one by pivots in columns.", "Test onto by pivots in rows.", "Use \\(T\\vec u=T\\vec v\\iff\\vec u-\\vec v\\in\\ker T\\).", "Apply the dimension count."],
  curriculum: "Linear transformations — kernel, range, one-to-one, onto",
  vocab: [["Kernel", "\\(\\operatorname{Nul}A\\)"], ["Range", "\\(\\operatorname{Col}A\\)"], ["One-to-one", "\\(\\ker T=\\{\\vec 0\\}\\)"], ["Onto", "range \\(=\\mathbb R^m\\)"], ["Rank", "\\(\\dim\\operatorname{range}T\\)"]],
  hook: S`A code that sends two different messages to the same signal cannot be decoded; a code that misses some signals wastes them. Kernels and ranges measure both failures.`,
  concepts: NOTES,
  summary: [
    S`\(\ker T=\operatorname{Nul}A\), range \(=\operatorname{Col}A\).`,
    S`One-to-one \(\iff\) pivot in every column.`,
    S`Onto \(\iff\) pivot in every row.`,
    S`\(\dim\ker+\dim\operatorname{range}=n\).`,
    S`Square: one-to-one \(\iff\) onto \(\iff\) invertible.`,
  ],
  tips: ["The kernel is in the domain, the range in the codomain.", "Use pivot columns of A itself for the range.", "Wide ⇒ not one-to-one; tall ⇒ not onto.", "Check kernel vectors by multiplying.", "Count pivots twice: by rows and by columns."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
