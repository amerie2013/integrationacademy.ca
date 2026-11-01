// LINALG1 Worksheet 4.2 — Spanning Sets of ℝⁿ
// Self-contained: complete notes, 9 worked examples with figures, 13 problems with an answer key.
import { svgT } from "./figT.mjs";
import { S, def, thm } from "./wkit.mjs";
import { vecs2, planeFig, lineFig, vecs3 } from "./fig5.mjs";
import { rowPic } from "./fig3.mjs";
import { am, steps } from "../bank/la.mjs";

const P = (svg, w = 4.6) => svgT(svg, w);
const M = (m) => am(m, false);

const NOTES = [
  { h: "1. When do vectors span ℝⁿ?",
    lead: thm("spanning test", S`Let \(A=[\,\vec v_1\ \cdots\ \vec v_k\,]\) (\(n\times k\)). The following are equivalent: (a) \(\operatorname{Span}\{\vec v_1,\dots,\vec v_k\}=\mathbb R^n\); (b) \(A\vec x=\vec b\) is consistent for every \(\vec b\in\mathbb R^n\); (c) an echelon form of \(A\) has a pivot in every row.`) + S`\pf{(a)⇔(b): \(A\vec x\) is the combination \(x_1\vec v_1+\dots+x_k\vec v_k\). (c)⇒(b): no row of \([A\mid\vec b]\) can become \([\,0\cdots0\mid c\,]\). (b)⇒(c): if a row had no pivot, a suitable \(\vec b\) would produce exactly such a row.}`,
    fig: P(rowPic([[[["■", "*", "*"], [0, "■", "*"], [0, 0, "■"]], { label: "spans ℝ³" }], " ", [[["■", "*", "*"], [0, 0, "■"], [0, 0, 0]], { label: "does not" }]]), 4.6), w: 0.5 },
  { h: "2. Counting",
    lead: S`At most one pivot per column, so \(A\) has at most \(k\) pivots. A pivot in each of the \(n\) rows needs \(k\ge n\):
\[\textbf{fewer than }n\textbf{ vectors never span }\mathbb R^n.\]
Many vectors do not guarantee spanning either — they may all lie in a line or plane.`,
    fig: planeFig([1, 0, 2], [1, 1, 1], { lu: "(1, 0, 2)", lv: "(1, 1, 1)" }), w: 0.5,
    body: S`Two vectors in \(\mathbb R^3\) span at most a plane.` },
  { h: "3. Equations of a smaller span",
    lead: def("describing a span", S`Row reduce \([\,\vec v_1\ \cdots\ \vec v_k\mid\vec b\,]\) keeping \(\vec b=(b_1,\dots,b_n)\) as letters. Every zero row of the coefficient part gives a condition "(expression in the \(b_i\)) \(=0\)". Together these conditions are the equations of the span.`),
    fig: lineFig([1, 2, -1], { label: "(1, 2, −1)" }), w: 0.5,
    body: S`A line in \(\mathbb R^3\) needs two equations, a plane one.` },
  { h: "4. Redundant vectors",
    lead: thm("adding a vector", S`\(\operatorname{Span}\{\vec v_1,\dots,\vec v_k,\vec w\}=\operatorname{Span}\{\vec v_1,\dots,\vec v_k\}\iff\vec w\in\operatorname{Span}\{\vec v_1,\dots,\vec v_k\}\).`) + S`\pf{If \(\vec w=\sum a_i\vec v_i\), substitute it into any combination. Conversely \(\vec w\) lies in the left span, hence in the right one.}`,
    fig: planeFig([1, 0, 2], [1, 1, 1], { lu: "v₁", lv: "v₂", more: [[[3, 1, 5], "w = 2v₁ + v₂", "green"]], len: 4 }), w: 0.5 },
  { h: "5. Three vectors in ℝ³",
    lead: S`Three vectors span \(\mathbb R^3\) exactly when they do \emph{not} lie in one plane through the origin, i.e. when \([\,\vec v_1\ \vec v_2\ \vec v_3\,]\) has three pivots.`,
    fig: vecs3([[[1, 1, 1], "(1, 1, 1)"], [[1, 2, 0], "(1, 2, 0)"], [[0, 1, 2], "(0, 1, 2)"]]), w: 0.5 },
];

const EXAMPLES = [
  { title: "Two vectors in ℝ²", q: S`Do \((3,1)\) and \((2,2)\) span \(\mathbb R^2\)?`,
    fig: vecs2([[[3, 1], "(3, 1)", "blue"], [[2, 2], "(2, 2)", "red"]], { xmin: -1, xmax: 4, ymin: -1, ymax: 3 }),
    steps: [...steps([[3, 2], [1, 2]], [
      [S`Bring the 1 up.`, ["R1<->R2"]],
      [S`Clear below the pivot.`, ["R2-3R1"]],
    ], { bar: false, intro: "Vectors as columns" }).steps, S`A pivot in both rows.`],
    ans: S`yes` },
  { title: "Parallel vectors", q: S`Do \((2,-4)\) and \((-1,2)\) span \(\mathbb R^2\)?`,
    fig: vecs2([[[2, -4], "(2, −4)", "blue"], [[-1, 2], "(−1, 2)", "red"]], { xmin: -3, xmax: 3, ymin: -5, ymax: 3 }, { segs: [{ pts: [[-2.5, 5], [2.5, -5]], color: "violet", w: 2 }] }),
    steps: [...steps([[2, -1], [-4, 2]], [
      [S`Clear below the pivot.`, ["R2+2R1"]],
    ], { bar: false, intro: "Vectors as columns" }).steps, S`Row 2 is zero: one pivot only. The span is the line through \(\vec 0\) with direction \((-1,2)\).`],
    ans: S`no — a line` },
  { title: "Three vectors that span ℝ³", q: S`Do \((1,1,1)\), \((1,2,0)\), \((0,1,2)\) span \(\mathbb R^3\)?`,
    fig: vecs3([[[1, 1, 1], "(1, 1, 1)"], [[1, 2, 0], "(1, 2, 0)"], [[0, 1, 2], "(0, 1, 2)"]]),
    steps: [...steps([[1, 1, 0], [1, 2, 1], [1, 0, 2]], [
      [S`Clear column 1.`, ["R2-R1", "R3-R1"]],
      [S`Clear column 2 below its pivot.`, ["R3+R2"]],
    ], { bar: false, intro: "Vectors as columns" }).steps, S`Pivots in all three rows.`],
    ans: S`yes` },
  { title: "Three vectors in one plane", q: S`Do \(\vec v_1=(1,0,2)\), \(\vec v_2=(1,1,1)\), \(\vec v_3=(3,1,5)\) span \(\mathbb R^3\)?`,
    fig: planeFig([1, 0, 2], [1, 1, 1], { lu: "v₁", lv: "v₂", more: [[[3, 1, 5], "v₃", "green"]], len: 4 }),
    steps: [...steps([[1, 1, 3], [0, 1, 1], [2, 1, 5]], [
      [S`Clear column 1.`, ["R3-2R1"]],
      [S`Clear column 2 below its pivot.`, ["R3+R2"]],
    ], { bar: false, intro: "Vectors as columns" }).steps, S`Row 3 is zero: only two pivots. Indeed \(\vec v_3=2\vec v_1+\vec v_2\).`],
    ans: S`no — they span a plane` },
  { title: "The equation of a plane span", q: S`Find an equation for \(\operatorname{Span}\{(1,0,2),(1,1,1)\}\).`,
    fig: planeFig([1, 0, 2], [1, 1, 1], { lu: "(1, 0, 2)", lv: "(1, 1, 1)" }),
    steps: [S`Reduce with a general right side: \[${am([[1, 1, "b_1"], [0, 1, "b_2"], [2, 1, "b_3"]])}\]`,
      S`Clear column 1. Operation: \(R_3\to R_3-2R_1\). \[\longrightarrow\ ${am([[1, 1, "b_1"], [0, 1, "b_2"], [0, -1, "b_3-2b_1"]])}\]`,
      S`Clear column 2 below its pivot. Operation: \(R_3\to R_3+R_2\). \[\longrightarrow\ ${am([[1, 1, "b_1"], [0, 1, "b_2"], [0, 0, "-2b_1+b_2+b_3"]])}\]`,
      S`Consistent exactly when \(-2b_1+b_2+b_3=0\). Check: \(-2+0+2=0\) ✓, \(-2+1+1=0\) ✓.`],
    ans: S`\(2x_1-x_2-x_3=0\)` },
  { title: "Equations of a line span", q: S`Find equations describing \(\operatorname{Span}\{(1,2,-1)\}\).`,
    fig: lineFig([1, 2, -1], { label: "(1, 2, −1)" }),
    steps: [S`Reduce \[${am([[1, "b_1"], [2, "b_2"], [-1, "b_3"]])}\]`,
      S`Clear column 1. Operations: \(R_2\to R_2-2R_1,\ R_3\to R_3+R_1\). \[\longrightarrow\ ${am([[1, "b_1"], [0, "b_2-2b_1"], [0, "b_3+b_1"]])}\]`,
      S`Two zero rows give two conditions: \(b_2-2b_1=0\) and \(b_3+b_1=0\).`],
    ans: S`\(2x_1-x_2=0,\ x_1+x_3=0\)` },
  { title: "Too few vectors", q: S`Can \((1,2,3,4)\), \((0,1,0,1)\), \((1,0,0,0)\) span \(\mathbb R^4\)?`,
    fig: P(rowPic([[[[1, 0, 1], [2, 1, 0], [3, 0, 0], [4, 1, 0]], { label: "4 × 3" }]]), 2.4),
    steps: [S`The matrix is \(4\times3\): at most 3 pivots.`, S`A pivot in each of 4 rows is impossible.`],
    ans: S`no` },
  { title: "A parameter", q: S`For which \(k\) do \((1,1,0)\), \((0,1,1)\), \((k,0,1)\) span \(\mathbb R^3\)?`,
    fig: vecs3([[[1, 1, 0], "(1, 1, 0)"], [[0, 1, 1], "(0, 1, 1)"], [[2, 0, 1], "(k, 0, 1), k = 2"]]),
    steps: [S`Columns \(${M([[1, 0, "k"], [1, 1, 0], [0, 1, 1]])}\).`, S`\(R_2\to R_2-R_1\): \((0,\ 1,\ -k)\).`, S`\(R_3\to R_3-R_2\): \((0,\ 0,\ 1+k)\).`, S`A third pivot exactly when \(1+k\ne0\).`],
    ans: S`every \(k\ne-1\)` },
  { title: "Spanning stays spanning", q: S`Prove: if \(\operatorname{Span}\{\vec v_1,\dots,\vec v_k\}=\mathbb R^n\), then for any \(\vec w\), \(\operatorname{Span}\{\vec v_1,\dots,\vec v_k,\vec w\}=\mathbb R^n\).`,
    steps: [S`Every vector of \(\mathbb R^n\) is \(\sum c_i\vec v_i=\sum c_i\vec v_i+0\vec w\), so it lies in the larger span.`, S`The larger span is a subset of \(\mathbb R^n\) anyway. So it equals \(\mathbb R^n\).`],
    ans: S`give \(\vec w\) weight 0` },
];

const PROBLEMS = [
  { level: 1, q: S`Do \((1,0)\) and \((0,-3)\) span \(\mathbb R^2\)?`, ans: S`yes` },
  { level: 1, q: S`What is the least number of vectors that can span \(\mathbb R^4\)?`, ans: S`4` },
  { level: 1, q: S`Do \((1,1)\) and \((-2,-2)\) span \(\mathbb R^2\)?`, ans: S`no (parallel)`, fig: vecs2([[[1, 1], "(1, 1)", "blue"], [[-2, -2], "(−2, −2)", "red"]], { xmin: -3, xmax: 2, ymin: -3, ymax: 2 }) },
  { level: 2, q: S`Do \((1,0,1)\), \((2,1,0)\), \((0,1,1)\) span \(\mathbb R^3\)? Show the row reduction.`, ans: S`yes (three pivots)` },
  { level: 2, q: S`Find an equation for \(\operatorname{Span}\{(1,1,0),(0,1,2)\}\).`, ans: S`\(2x_1-2x_2+x_3=0\)`, fig: planeFig([1, 1, 0], [0, 1, 2], { lu: "(1, 1, 0)", lv: "(0, 1, 2)" }) },
  { level: 2, q: S`For which \(k\) do \((1,k)\) and \((2,4)\) fail to span \(\mathbb R^2\)?`, ans: S`\(k=2\)` },
  { level: 2, q: S`Do \((1,2,3)\), \((2,4,6)\), \((0,0,1)\) span \(\mathbb R^3\)?`, ans: S`no (two pivots: a plane)` },
  { level: 2, q: S`\(A\) is \(3\times5\) and has 3 pivots. Do its columns span \(\mathbb R^3\)?`, ans: S`yes`, fig: P(rowPic([[[["■", "*", "*", "*", "*"], [0, 0, "■", "*", "*"], [0, 0, 0, "■", "*"]], { label: "3 pivots" }]]), 3.2) },
  { level: 3, space: 5, q: S`For which \(a\) do \((1,2,a)\), \((0,1,1)\), \((1,a,0)\) span \(\mathbb R^3\)?`, ans: S`every \(a\ne1\) (last pivot \(2-2a\))` },
  { level: 3, space: 5, q: S`\(\{\vec v_1,\vec v_2,\vec v_3\}\) spans \(\mathbb R^3\). Explain why removing any one vector leaves a set that does not span \(\mathbb R^3\).`, ans: S`two vectors give at most two pivots` },
  { level: 3, space: 5, q: S`Find an equation for \(\operatorname{Span}\{(1,-1,0),(0,1,-1)\}\).`, ans: S`\(x_1+x_2+x_3=0\)`, fig: planeFig([1, -1, 0], [0, 1, -1], { lu: "(1, −1, 0)", lv: "(0, 1, −1)" }) },
  { level: 3, space: 5, q: S`Prove: if the columns of an \(m\times n\) matrix span \(\mathbb R^m\), then \(m\le n\).`, ans: S`a pivot in each of \(m\) rows, at most \(n\) pivots` },
  { level: 3, space: 5, q: S`Give three vectors in \(\mathbb R^3\), no two parallel, that do not span \(\mathbb R^3\). Justify.`, ans: S`e.g. \((1,0,0),(0,1,0),(1,1,0)\): all in the plane \(x_3=0\)`, fig: vecs3([[[1, 0, 0], "(1, 0, 0)"], [[0, 1, 0], "(0, 1, 0)"], [[1, 1, 0], "(1, 1, 0)"]], { len: 1.8 }) },
];

export const WS = {
  code: "4.2",
  title: "Spanning Sets of ℝⁿ",
  bigideas: S`Vectors \(\vec v_1,\dots,\vec v_k\) span \(\mathbb R^n\) exactly when every system \(A\vec x=\vec b\) with \(A=[\,\vec v_1\ \cdots\ \vec v_k\,]\) is consistent — that is, when \(A\) has a pivot in every row. Fewer than \(n\) vectors can never do this. When a set does not span everything, reducing \([A\mid\vec b]\) with a general \(\vec b\) produces the equations of its span.`,
  goals: ["Test whether vectors span \\(\\mathbb R^n\\) by counting pivots per row.", "Use counting to rule out spanning.", "Find equations of a span from a general right side.", "Recognise redundant vectors.", "Solve parameter problems about spanning."],
  curriculum: "Span and linear independence — spanning sets of ℝⁿ",
  vocab: [["Spans \\(\\mathbb R^n\\)", "every \\(\\vec b\\) is a combination"], ["Pivot in every row", "the spanning test"], ["General right side", "\\(\\vec b\\) kept as letters"], ["Redundant", "already in the span of the others"], ["Equations of a span", "conditions from zero rows"]],
  hook: S`Three vectors in space usually reach every point. What exactly has to go wrong for them not to?`,
  concepts: NOTES,
  summary: [
    S`Span \(=\mathbb R^n\iff\) pivot in every row \(\iff A\vec x=\vec b\) always consistent.`,
    S`Fewer than \(n\) vectors never span \(\mathbb R^n\).`,
    S`Zero rows of \([A\mid\vec b]\) give the span's equations.`,
    S`Adding \(\vec w\in\operatorname{Span}\) changes nothing.`,
    S`Three vectors span \(\mathbb R^3\iff\) not coplanar.`,
  ],
  tips: ["Count pivots per ROW for spanning.", "Keep b as letters when describing a span.", "Count vectors first: fewer than n means no.", "Look for one vector being a combination of the others.", "A line in ℝ³ needs two equations."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
