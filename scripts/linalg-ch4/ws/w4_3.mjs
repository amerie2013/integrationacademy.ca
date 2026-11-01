// LINALG1 Worksheet 4.3 — Linear Dependence and Independence
// Self-contained: complete notes, 9 worked examples with figures, 13 problems with an answer key.
import { svgT } from "./figT.mjs";
import { S, def, thm } from "./wkit.mjs";
import { vecs2, planeFig, vecs3 } from "./fig5.mjs";
import { rowPic } from "./fig3.mjs";
import { am, steps } from "../bank/la.mjs";

const P = (svg, w = 4.6) => svgT(svg, w);
const M = (m) => am(m, false);

const NOTES = [
  { h: "1. The definitions",
    lead: def("dependence and independence", S`\(\{\vec v_1,\dots,\vec v_k\}\subseteq\mathbb R^n\) is \emph{linearly dependent} if there are \(c_1,\dots,c_k\), not all zero, with \(c_1\vec v_1+\dots+c_k\vec v_k=\vec 0\) (a \emph{dependence relation}). It is \emph{linearly independent} if the only solution is the \emph{trivial solution} \(c_1=\dots=c_k=0\).`),
    fig: vecs2([[[1, 3], "(1, 3)", "blue"], [[2, 5], "(2, 5)", "red"]], { xmin: -1, xmax: 3, ymin: -1, ymax: 6 }), w: 0.5,
    body: S`The trivial solution always exists; independence says it is the only one.` },
  { h: "2. The test",
    lead: thm("independence test", S`With \(A=[\,\vec v_1\ \cdots\ \vec v_k\,]\): the vectors are independent \(\iff A\vec c=\vec 0\) has only \(\vec c=\vec 0\) \(\iff\) an echelon form of \(A\) has a \textbf{pivot in every column}.`) + S`\pf{\(c_1\vec v_1+\dots+c_k\vec v_k=A\vec c\). A homogeneous system has a nonzero solution exactly when some variable is free.}`,
    fig: P(rowPic([[[["■", "*", "*"], [0, "■", "*"], [0, 0, "■"]], { label: "independent" }], " ", [[["■", "*", "*"], [0, "■", "*"], [0, 0, 0]], { label: "column 3 free: dependent" }]]), 4.8), w: 0.5 },
  { h: "3. Finding a relation",
    lead: S`If column \(j\) has no pivot, set \(c_j=1\) (other free variables 0), solve for the pivot variables from the echelon form, and write the relation. \textbf{Always check it}: the combination must be \(\vec 0\).`,
    fig: planeFig([1, 0, 1], [0, 1, 1], { lu: "v₁", lv: "v₃", more: [[[2, 1, 3], "v₂ = 2v₁ + v₃", "green"]], len: 3.6 }), w: 0.5 },
  { h: "4. Small sets",
    lead: thm("one or two vectors; zero", S`(1) \(\{\vec v\}\) is independent \(\iff\vec v\ne\vec 0\). (2) \(\{\vec u,\vec v\}\) is dependent \(\iff\) one is a multiple of the other. (3) Every set containing \(\vec 0\) is dependent.`) + S`\pf{(2) From \(a\vec u+b\vec v=\vec 0\) with \(b\ne0\): \(\vec v=-\tfrac ab\vec u\). (3) Weight 1 on \(\vec 0\), 0 elsewhere.}`,
    fig: vecs2([[[6, -4], "(6, −4)", "blue"], [[-3, 2], "(−3, 2)", "red"]], { xmin: -4, xmax: 7, ymin: -5, ymax: 3 }), w: 0.5,
    body: S`For three or more vectors, "no two parallel" is \emph{not} enough for independence.` },
  { h: "5. Geometry",
    lead: S`In \(\mathbb R^2\) or \(\mathbb R^3\): two vectors are independent when they point in different directions; three vectors in \(\mathbb R^3\) are independent when they do not lie in a common plane through \(\vec 0\).`,
    fig: vecs3([[[1, 1, 0], "(1, 1, 0)"], [[0, 1, 1], "(0, 1, 1)"], [[1, 0, 2], "(1, 0, 2)"]]), w: 0.5 },
];

const EXAMPLES = [
  { title: "Two vectors — independent", q: S`Is \(\{(1,3),(2,5)\}\) linearly independent?`,
    fig: vecs2([[[1, 3], "(1, 3)", "blue"], [[2, 5], "(2, 5)", "red"]], { xmin: -1, xmax: 3, ymin: -1, ymax: 6 }),
    steps: [...steps([[1, 2], [3, 5]], [
      [S`Clear below the pivot.`, ["R2-3R1"]],
    ], { bar: false, intro: "Vectors as columns" }).steps, S`Pivots in both columns: only the trivial solution.`],
    ans: S`independent` },
  { title: "Two vectors — dependent", q: S`Is \(\{(6,-4),(-3,2)\}\) linearly independent?`,
    fig: vecs2([[[6, -4], "(6, −4)", "blue"], [[-3, 2], "(−3, 2)", "red"]], { xmin: -4, xmax: 7, ymin: -5, ymax: 3 }),
    steps: [...steps([[6, -3], [-4, 2]], [
      [S`Solve \(c_1\vec v_1+c_2\vec v_2=\vec 0\). Make the pivot 1.`, ["R1*1/6"]],
      [S`Clear below it.`, ["R2+4R1"]],
    ], { bar: false, intro: "Matrix with the vectors as columns" }).steps,
      S`Column 2 has no pivot: \(c_2\) free, \(c_1=\tfrac12c_2\). With \(c_2=2\): \(c_1=1\).`,
      S`Relation: \(1\cdot${am([[6], [-4]], false)}+2${am([[-3], [2]], false)}=${am([[0], [0]], false)}\) ✓ — nontrivial, so dependent.`],
    ans: S`dependent: \(\vec v_1+2\vec v_2=\vec 0\)` },
  { title: "Three vectors — a relation", q: S`Test \(\vec v_1=(1,0,1)\), \(\vec v_2=(2,1,3)\), \(\vec v_3=(0,1,1)\) and find a relation if dependent.`,
    fig: planeFig([1, 0, 1], [0, 1, 1], { lu: "v₁", lv: "v₃", more: [[[2, 1, 3], "v₂", "green"]], len: 3.6 }),
    steps: [...steps([[1, 2, 0], [0, 1, 1], [1, 3, 1]], [
      [S`Clear column 1.`, ["R3-R1"]],
      [S`Clear column 2 below its pivot.`, ["R3-R2"]],
    ], { bar: false, intro: "Vectors as columns" }).steps,
      S`Column 3 has no pivot: dependent. Take \(c_3=1\): row 2 gives \(c_2=-1\), row 1 gives \(c_1=-2c_2=2\).`,
      S`Relation \(2\vec v_1-\vec v_2+\vec v_3=\vec 0\). Check: \((2,0,2)-(2,1,3)+(0,1,1)=(0,0,0)\) ✓.`],
    ans: S`dependent: \(2\vec v_1-\vec v_2+\vec v_3=\vec 0\)` },
  { title: "Three vectors — independent", q: S`Test \((1,1,0)\), \((0,1,1)\), \((1,0,2)\).`,
    fig: vecs3([[[1, 1, 0], "(1, 1, 0)"], [[0, 1, 1], "(0, 1, 1)"], [[1, 0, 2], "(1, 0, 2)"]]),
    steps: [...steps([[1, 0, 1], [1, 1, 0], [0, 1, 2]], [
      [S`Clear column 1.`, ["R2-R1"]],
      [S`Clear column 2 below its pivot.`, ["R3-R2"]],
    ], { bar: false, intro: "Vectors as columns" }).steps, S`Pivots \(1,1,3\) in every column.`],
    ans: S`independent` },
  { title: "Three vectors in ℝ⁴", q: S`Test \(\vec v_1=(1,2,-1,0)\), \(\vec v_2=(2,1,0,1)\), \(\vec v_3=(0,3,-2,-1)\).`,
    fig: P(rowPic([[[[1, 2, 0], [2, 1, 3], [-1, 0, -2], [0, 1, -1]], { label: "[v₁ v₂ v₃]" }]]), 2.6),
    steps: [...steps([[1, 2, 0], [2, 1, 3], [-1, 0, -2], [0, 1, -1]], [
      [S`Clear column 1.`, ["R2-2R1", "R3+R1"]],
      [S`Make the second pivot 1.`, ["R2*-1/3"]],
      [S`Clear column 2 below it.`, ["R3-2R2", "R4-R2"]],
    ], { bar: false, intro: "Vectors as columns" }).steps,
      S`Column 3 has no pivot. With \(c_3=1\): \(c_2=1\), \(c_1=-2c_2=-2\).`, S`Relation \(-2\vec v_1+\vec v_2+\vec v_3=\vec 0\), i.e. \(\vec v_3=2\vec v_1-\vec v_2\). Check: \((2,4,-2,0)-(2,1,0,1)=(0,3,-2,-1)\) ✓.`],
    ans: S`dependent: \(\vec v_3=2\vec v_1-\vec v_2\)` },
  { title: "Small sets", q: S`Decide: (a) \(\{(0,0,0)\}\); (b) \(\{(2,-1,5)\}\); (c) \(\{(1,2),(0,0),(5,1)\}\).`,
    fig: vecs2([[[1, 2], "(1, 2)", "blue"], [[5, 1], "(5, 1)", "red"]], { xmin: -1, xmax: 6, ymin: -1, ymax: 3 }, { points: [{ x: 0, y: 0, label: "0", color: "black" }] }),
    steps: [S`(a) \(1\cdot\vec 0=\vec 0\) is a nontrivial relation: dependent.`, S`(b) \(c${am([[2], [-1], [5]], false)}=${am([[0], [0], [0]], false)}\) forces \(c=0\) (the first entry gives \(2c=0\)): independent.`,
      ...steps([[1, 0, 5], [2, 0, 1]], [
        [S`(c) Clear column 1.`, ["R2-2R1"]],
      ], { bar: false, intro: "(c) Matrix with the vectors as columns" }).steps,
      S`(c) Column 2 (the zero vector) has no pivot, so \(c_2\) is free: \(0\vec v_1+1\cdot\vec 0+0\vec v_3=\vec 0\). Dependent.`],
    ans: S`(a) dependent (b) independent (c) dependent` },
  { title: "A parameter in ℝ²", q: S`For which \(k\) is \(\{(1,k),(k,9)\}\) dependent?`,
    fig: vecs2([[[1, 3], "(1, 3)", "blue"], [[3, 9], "(3, 9): k = 3", "red"]], { xmin: -1, xmax: 4, ymin: -1, ymax: 10 }),
    steps: [S`Columns \(${M([[1, "k"], ["k", 9]])}\); \(R_2\to R_2-kR_1\) gives \((0,\ 9-k^2)\).`, S`No second pivot exactly when \(9-k^2=0\).`, S`So \(k=3\) or \(k=-3\). Check \(k=3\): \((3,9)=3(1,3)\) ✓.`],
    ans: S`\(k=\pm3\)` },
  { title: "A parameter in ℝ³", q: S`For which \(k\) is \(\{(1,2,0),(0,1,1),(1,k,1)\}\) dependent? Give the relation.`,
    fig: planeFig([1, 2, 0], [0, 1, 1], { lu: "(1, 2, 0)", lv: "(0, 1, 1)", more: [[[1, 3, 1], "(1, 3, 1)", "green"]] }),
    steps: [S`Columns \(${M([[1, 0, 1], [2, 1, "k"], [0, 1, 1]])}\).`, S`\(R_2\to R_2-2R_1\): \((0,\ 1,\ k-2)\).`, S`\(R_3\to R_3-R_2\): \((0,\ 0,\ 3-k)\).`, S`Dependent exactly when \(3-k=0\). Then \((1,3,1)=(1,2,0)+(0,1,1)\) ✓.`],
    ans: S`\(k=3\): \(\vec v_1+\vec v_2-\vec v_3=\vec 0\)` },
  { title: "Two vectors: a proof", q: S`Prove: \(\{\vec u,\vec v\}\) is dependent \(\iff\) one of the vectors is a scalar multiple of the other.`,
    steps: [S`⇒: \(a\vec u+b\vec v=\vec 0\) with \(a,b\) not both 0. If \(b\ne0\), \(\vec v=-\tfrac ab\vec u\); if \(b=0\) then \(a\ne0\) and \(a\vec u=\vec 0\) gives \(\vec u=\vec 0=0\vec v\).`, S`⇐: if \(\vec v=t\vec u\), then \(t\vec u-1\cdot\vec v=\vec 0\) with coefficient \(-1\ne0\) (similarly if \(\vec u=t\vec v\)).`],
    ans: S`solve the relation for a vector with a nonzero coefficient` },
];

const PROBLEMS = [
  { level: 1, q: S`Is \(\{(3,-1),(-6,2)\}\) independent?`, ans: S`no: \((-6,2)=-2(3,-1)\)` },
  { level: 1, q: S`Is \(\{(1,0,0),(0,0,0)\}\) independent?`, ans: S`no (contains \(\vec 0\))` },
  { level: 1, q: S`Is \(\{(5,7)\}\) independent?`, ans: S`yes (nonzero)` },
  { level: 2, q: S`Is \(\{(1,2),(3,4)\}\) independent? Show the row reduction.`, ans: S`yes`, fig: vecs2([[[1, 2], "(1, 2)", "blue"], [[3, 4], "(3, 4)", "red"]], { xmin: -1, xmax: 4, ymin: -1, ymax: 5 }) },
  { level: 2, q: S`Test \((1,1,2)\), \((2,1,1)\), \((3,2,3)\); give a relation if dependent.`, ans: S`dependent: \(\vec v_1+\vec v_2-\vec v_3=\vec 0\)`, fig: planeFig([1, 1, 2], [2, 1, 1], { lu: "(1, 1, 2)", lv: "(2, 1, 1)", more: [[[3, 2, 3], "(3, 2, 3)", "green"]], len: 3.8 }) },
  { level: 2, q: S`Test \((1,0,0,1)\), \((0,1,1,0)\), \((1,1,0,0)\).`, ans: S`independent (three pivots)` },
  { level: 2, q: S`Find a dependence relation among \((1,2)\), \((2,1)\), \((4,5)\).`, ans: S`\(2\vec v_1+\vec v_2-\vec v_3=\vec 0\)` },
  { level: 2, q: S`For which \(k\) is \(\{(2,k),(4,6)\}\) dependent?`, ans: S`\(k=3\)` },
  { level: 3, space: 5, q: S`For which \(h\) is \(\{(1,h,2),(0,1,1),(1,0,h)\}\) dependent?`, ans: S`\(h=1\) (last pivot \(2h-2\))` },
  { level: 3, space: 5, q: S`Prove that any set of vectors containing \(\vec 0\) is linearly dependent.`, ans: S`weight 1 on \(\vec 0\), 0 on the others` },
  { level: 3, space: 5, q: S`\(\{\vec u,\vec v\}\) is independent but \(\{\vec u,\vec v,\vec w\}\) is dependent. Prove \(\vec w\in\operatorname{Span}\{\vec u,\vec v\}\).`, ans: S`in a relation the coefficient of \(\vec w\) is nonzero; solve for \(\vec w\)`, fig: planeFig([1, 0, 1], [0, 1, 1], { lu: "u", lv: "v", more: [[[1, 1, 2], "w", "green"]] }) },
  { level: 3, space: 5, q: S`\(\{\vec u,\vec v,\vec w\}\) is independent. Prove \(\{\vec u,\ \vec u+\vec v,\ \vec u+\vec v+\vec w\}\) is independent.`, ans: S`\((a+b+c)\vec u+(b+c)\vec v+c\vec w=\vec 0\) forces \(c=b=a=0\)` },
  { level: 3, space: 5, q: S`Give three dependent vectors in \(\mathbb R^3\), no two parallel, with a relation.`, ans: S`e.g. \((1,0,0),(0,1,0),(1,1,0)\): \(\vec v_1+\vec v_2-\vec v_3=\vec 0\)`, fig: vecs3([[[1, 0, 0], "(1, 0, 0)"], [[0, 1, 0], "(0, 1, 0)"], [[1, 1, 0], "(1, 1, 0)"]], { len: 1.8 }) },
];

export const WS = {
  code: "4.3",
  title: "Linear Dependence and Independence",
  bigideas: S`A set is linearly dependent when a nontrivial combination of its vectors is \(\vec 0\), and independent when only the trivial combination is. The test is one homogeneous system: put the vectors in the columns and row reduce; a pivot in every column means independent, and a free variable produces an explicit dependence relation.`,
  goals: ["State the definitions of dependence and independence.", "Test independence by pivots in columns.", "Find and check a dependence relation.", "Decide small cases at a glance.", "Solve parameter problems about independence."],
  curriculum: "Span and linear independence — linear dependence and independence",
  vocab: [["Dependence relation", "\\(\\sum c_i\\vec v_i=\\vec 0\\), not all \\(c_i=0\\)"], ["Trivial solution", "all \\(c_i=0\\)"], ["Independent", "only the trivial solution"], ["Dependent", "a nontrivial solution exists"], ["Pivot in every column", "the independence test"]],
  hook: S`Three arrows lie on a table, no two pointing the same way. Can one of them always be built from the other two?`,
  concepts: NOTES,
  summary: [
    S`Independent \(\iff\) only \(c_1=\dots=c_k=0\) gives \(\vec 0\).`,
    S`Test: pivot in every column of \([\,\vec v_1\ \cdots\ \vec v_k\,]\).`,
    S`Free variable \(\Rightarrow\) dependence relation.`,
    S`Two vectors: dependent \(\iff\) parallel.`,
    S`Any set containing \(\vec 0\) is dependent.`,
  ],
  tips: ["Pivots per COLUMN decide independence.", "Set the free variable to 1 and solve.", "Check every relation by computing it.", "Look for multiples and sums first.", "A zero vector makes the set dependent."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
