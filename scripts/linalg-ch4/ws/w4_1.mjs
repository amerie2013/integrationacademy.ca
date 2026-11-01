// LINALG1 Worksheet 4.1 — Linear Combinations and Span
// Self-contained: complete notes, 9 worked examples with figures, 13 problems with an answer key.
import { S, def, thm } from "./wkit.mjs";
import { vecs2, planeFig, lineFig, vecs3 } from "./fig5.mjs";
import { am, steps } from "../bank/la.mjs";

const M = (m) => am(m, false);
const V5 = { xmin: -5, xmax: 5, ymin: -4, ymax: 4 };

const NOTES = [
  { h: "1. Linear combinations",
    lead: S`${def("linear combination", S`A <i>linear combination</i> of \(\vec v_1,\dots,\vec v_k\in\mathbb R^n\) is a vector \(c_1\vec v_1+c_2\vec v_2+\dots+c_k\vec v_k\) with scalars (weights) \(c_1,\dots,c_k\in\mathbb R\).`)}
Geometrically: walk \(c_1\) copies of \(\vec v_1\), then \(c_2\) copies of \(\vec v_2\), and so on, head to tail.`.replace("<i>", "\\emph{").replace("</i>", "}"),
    fig: vecs2([[[2, 1], "v₁", "blue"], [[1, -1], "v₂", "red"], [[4, 2], "", "blue", null, true], [[3, 3], "", "red", [4, 2], true], [[3, 3], "2v₁ − v₂", "green"]], { xmin: -1, xmax: 5, ymin: -2, ymax: 4 }), w: 0.5 },
  { h: "2. The span of a set",
    lead: def("span", S`For \(B=\{\vec v_1,\dots,\vec v_k\}\subseteq\mathbb R^n\), \[\operatorname{Span}B=\{c_1\vec v_1+\dots+c_k\vec v_k: c_1,\dots,c_k\in\mathbb R\}.\] \(B\) is called a \emph{spanning set} of \(\operatorname{Span}B\).`),
    fig: vecs2([[[3, 1], "v = (3, 1)", "blue"], [[-3, -1], "−v", "blue", null, true]], V5, { segs: [{ pts: [[-5, -5 / 3], [5, 5 / 3]], color: "violet", w: 3 }] }), w: 0.5,
    body: S`\(\operatorname{Span}\{\vec v\}=\{c\vec v\}\): for \(\vec v\ne\vec 0\) this is the line through the origin with direction \(\vec v\); \(\operatorname{Span}\{\vec 0\}=\{\vec 0\}\).` },
  { h: "3. Membership is a linear system",
    lead: thm("membership", S`\(\vec b\in\operatorname{Span}\{\vec v_1,\dots,\vec v_k\}\iff\) the system with augmented matrix \([\,\vec v_1\ \cdots\ \vec v_k\mid\vec b\,]\) is consistent. A solution \((c_1,\dots,c_k)\) gives the weights.`) + S`\pf{Entry by entry, \(c_1\vec v_1+\dots+c_k\vec v_k=\vec b\) is \(n\) linear equations in \(c_1,\dots,c_k\) with coefficient columns \(\vec v_j\).}`,
    fig: vecs2([[[1, 1], "v₁", "blue"], [[2, 1], "v₂", "red"], [[1, 1], "", "blue"], [[7, 4], "", "red", [1, 1], true], [[7, 4], "b", "green"]], { xmin: -1, xmax: 8, ymin: -1, ymax: 5 }), w: 0.5,
    body: S`Vectors in the \textbf{columns}, \(\vec b\) last. A row \([\,0\ \cdots\ 0\mid c\,]\), \(c\ne0\), means \(\vec b\notin\operatorname{Span}\).` },
  { h: "4. Spans in the plane and in space",
    lead: S`\begin{itemize}[leftmargin=*,itemsep=1pt]
\item one nonzero vector: a line through \(\vec 0\);
\item two non-parallel vectors in \(\mathbb R^2\): all of \(\mathbb R^2\);
\item two non-parallel vectors in \(\mathbb R^3\): a plane through \(\vec 0\), with normal \(\vec n=\vec v_1\times\vec v_2\) and equation \(\vec n\cdot\vec x=0\);
\item parallel vectors add nothing: their span is still a line.
\end{itemize}`,
    fig: planeFig([1, 1, 2], [0, 1, -1], { lu: "(1, 1, 2)", lv: "(0, 1, −1)" }), w: 0.5 },
  { h: "5. Properties of a span",
    lead: thm("closure", S`For any \(\vec v_1,\dots,\vec v_k\): (1) \(\vec 0\in\operatorname{Span}\); (2) each \(\vec v_i\in\operatorname{Span}\); (3) every linear combination of vectors in the span is in the span.`) + S`\pf{(1) all \(c_i=0\). (2) \(c_i=1\), others 0. (3) \(a\sum c_i\vec v_i+b\sum d_i\vec v_i=\sum(ac_i+bd_i)\vec v_i\).}`,
    fig: lineFig([1, -2, 1], { label: "(1, −2, 1)", more: [[[-2, 4, -2], "(−2, 4, −2)", "red"]] }), w: 0.5,
    body: S`Consequence: if \(\vec w\in\operatorname{Span}\{\vec v_1,\dots,\vec v_k\}\), then adding \(\vec w\) to the set does not change the span.` },
];

const EXAMPLES = [
  { title: "Multiples of one vector", q: S`Is \((-9,-3)\in\operatorname{Span}\{(3,1)\}\)? Is \((6,1)\)?`,
    fig: vecs2([[[3, 1], "(3, 1)", "blue"], [[6, 1], "(6, 1)", "red"]], { xmin: -10, xmax: 7, ymin: -4, ymax: 3 }, { segs: [{ pts: [[-10, -10 / 3], [7, 7 / 3]], color: "violet", w: 2.5 }], points: [{ x: -9, y: -3, label: "(−9, −3)", color: "green" }] }),
    steps: [S`\(\operatorname{Span}\{(3,1)\}=\{(3c,c)\}\).`, S`\((-9,-3)\): \(3c=-9\) gives \(c=-3\); second entry \(c=-3\) ✓. So it is \(-3(3,1)\).`, S`\((6,1)\): first entry needs \(c=2\), second needs \(c=1\). No single \(c\) works.`],
    ans: S`\((-9,-3)\) yes (\(c=-3\)); \((6,1)\) no` },
  { title: "Weights in the plane", q: S`Is \(\vec b=(7,4)\) in \(\operatorname{Span}\{(1,1),(2,1)\}\)? Find the weights.`,
    fig: vecs2([[[1, 1], "v₁", "blue"], [[2, 1], "v₂", "red"], [[1, 1], "", "blue"], [[7, 4], "", "red", [1, 1], true], [[7, 4], "b", "green"]], { xmin: -1, xmax: 8, ymin: -1, ymax: 5 }),
    steps: [...steps([[1, 2, 7], [1, 1, 4]], [
      [S`Clear below the first pivot.`, ["R2-R1"]],
      [S`Make the second pivot 1.`, ["R2*-1"]],
      [S`Clear above the second pivot.`, ["R1-2R2"]],
    ], { intro: "Augmented matrix [ v₁ v₂ | b ]" }).steps, S`\(c_1=1,\ c_2=3\). Check: \((1,1)+3(2,1)=(7,4)\) ✓.`],
    ans: S`yes: \(\vec b=\vec v_1+3\vec v_2\)` },
  { title: "Membership in ℝ³ — consistent", q: S`Is \((3,-1,4)\in\operatorname{Span}\{(1,0,2),(1,-1,0)\}\)?`,
    fig: planeFig([1, 0, 2], [1, -1, 0], { lu: "(1, 0, 2)", lv: "(1, −1, 0)", more: [[[3, -1, 4], "(3, −1, 4)", "green"]], len: 4.2 }),
    steps: [...steps([[1, 1, 3], [0, -1, -1], [2, 0, 4]], [
      [S`Clear column 1.`, ["R3-2R1"]],
      [S`Clear column 2 below its pivot.`, ["R3-2R2"]],
      [S`Make the second pivot 1.`, ["R2*-1"]],
      [S`Clear above it.`, ["R1-R2"]],
    ], { intro: "Augmented matrix" }).steps, S`Consistent: \(c_1=2,\ c_2=1\). Check: \(2(1,0,2)+(1,-1,0)=(3,-1,4)\) ✓.`],
    ans: S`yes: \(2\vec v_1+\vec v_2\)` },
  { title: "Membership in ℝ³ — inconsistent", q: S`Is \((1,2,2)\in\operatorname{Span}\{(1,0,2),(1,-1,0)\}\)?`,
    fig: planeFig([1, 0, 2], [1, -1, 0], { lu: "(1, 0, 2)", lv: "(1, −1, 0)", more: [[[1, 2, 2], "(1, 2, 2)", "amber"]], len: 3.4 }),
    steps: [...steps([[1, 1, 1], [0, -1, 2], [2, 0, 2]], [
      [S`Clear column 1.`, ["R3-2R1"]],
      [S`Clear column 2 below its pivot.`, ["R3-2R2"]],
    ], { intro: "Augmented matrix" }).steps, S`The last row reads 0 equals \(-4\): inconsistent. The vector is off the plane.`],
    ans: S`no` },
  { title: "Equation of a spanned plane", q: S`Find an equation of \(\operatorname{Span}\{(1,1,2),(0,1,-1)\}\).`,
    fig: planeFig([1, 1, 2], [0, 1, -1], { lu: "(1, 1, 2)", lv: "(0, 1, −1)", more: [[[3, -1, -1], "n", "violet"]], len: 3.6 }),
    steps: [S`Reduce \([\,\vec v_1\ \vec v_2\mid\vec b\,]\) with a general right side: \[${am([[1, 0, "b_1"], [1, 1, "b_2"], [2, -1, "b_3"]])}\]`,
      S`Clear column 1. Operations: \(R_2\to R_2-R_1,\ R_3\to R_3-2R_1\). \[\longrightarrow\ ${am([[1, 0, "b_1"], [0, 1, "b_2-b_1"], [0, -1, "b_3-2b_1"]])}\]`,
      S`Clear column 2 below its pivot. Operation: \(R_3\to R_3+R_2\). \[\longrightarrow\ ${am([[1, 0, "b_1"], [0, 1, "b_2-b_1"], [0, 0, "-3b_1+b_2+b_3"]])}\]`,
      S`Consistent exactly when \(-3b_1+b_2+b_3=0\), i.e. \(3x_1-x_2-x_3=0\). Check: \(3-1-2=0\) ✓, \(0-1+1=0\) ✓. (The cross product \((-3,1,1)\) is the same normal.)`],
    ans: S`\(3x_1-x_2-x_3=0\)` },
  { title: "Parallel vectors", q: S`Describe \(\operatorname{Span}\{(1,-2,1),(-2,4,-2)\}\).`,
    fig: lineFig([1, -2, 1], { label: "(1, −2, 1)", more: [[[-2, 4, -2], "(−2, 4, −2)", "red"]] }),
    steps: [...steps([[1, -2], [-2, 4], [1, -2]], [
      [S`Clear column 1.`, ["R2+2R1", "R3-R1"]],
    ], { bar: false, intro: "Matrix with the two vectors as columns" }).steps,
      S`Only one pivot: column 2 is \(-2\) times column 1, i.e. \((-2,4,-2)=-2(1,-2,1)\).`,
      S`So \(c_1(1,-2,1)+c_2(-2,4,-2)=(c_1-2c_2)(1,-2,1)\): the span is the line \(\{t(1,-2,1)\}\) through \(\vec 0\).`],
    ans: S`the line through \(\vec 0\) with direction \((1,-2,1)\)` },
  { title: "A parameter", q: S`For which \(h\) is \((2,h,1)\in\operatorname{Span}\{(1,0,1),(0,1,-1)\}\)?`,
    fig: planeFig([1, 0, 1], [0, 1, -1], { lu: "(1, 0, 1)", lv: "(0, 1, −1)" }),
    steps: [S`Augmented matrix with \(h\) as a letter: \[${am([[1, 0, 2], [0, 1, "h"], [1, -1, 1]])}\]`,
      S`Clear column 1. Operation: \(R_3\to R_3-R_1\). \[\longrightarrow\ ${am([[1, 0, 2], [0, 1, "h"], [0, -1, -1]])}\]`,
      S`Clear column 2 below its pivot. Operation: \(R_3\to R_3+R_2\). \[\longrightarrow\ ${am([[1, 0, 2], [0, 1, "h"], [0, 0, "h-1"]])}\]`,
      S`Consistent exactly when \(h=1\). Then \(c_1=2\), \(c_2=1\): \(2(1,0,1)+(0,1,-1)=(2,1,1)\) ✓.`],
    ans: S`\(h=1\)` },
  { title: "Fractional weights", q: S`Write \(\vec e_1=(1,0)\) as a combination of \((2,1)\) and \((1,3)\).`,
    fig: vecs2([[[2, 1], "(2, 1)", "blue"], [[1, 3], "(1, 3)", "red"], [[1, 0], "e₁", "green"]], { xmin: -1, xmax: 3, ymin: -1, ymax: 4 }),
    steps: [...steps([[2, 1, 1], [1, 3, 0]], [
      [S`Swap to get a leading 1.`, ["R1<->R2"]],
      [S`Clear below the pivot.`, ["R2-2R1"]],
      [S`Make the second pivot 1.`, ["R2*-1/5"]],
      [S`Clear above it.`, ["R1-3R2"]],
    ], { intro: "Augmented matrix" }).steps, S`\(c_1=\tfrac35,\ c_2=-\tfrac15\). Check: \(\tfrac35(2,1)-\tfrac15(1,3)=(\tfrac65-\tfrac15,\ \tfrac35-\tfrac35)=(1,0)\) ✓.`],
    ans: S`\(\vec e_1=\tfrac35(2,1)-\tfrac15(1,3)\)` },
  { title: "Adding a vector already in the span", q: S`Prove: if \(\vec w\in\operatorname{Span}\{\vec u,\vec v\}\), then \(\operatorname{Span}\{\vec u,\vec v,\vec w\}=\operatorname{Span}\{\vec u,\vec v\}\).`,
    steps: [S`\(\supseteq\): a combination \(a\vec u+b\vec v\) equals \(a\vec u+b\vec v+0\vec w\).`, S`\(\subseteq\): write \(\vec w=p\vec u+q\vec v\). Then \(a\vec u+b\vec v+c\vec w=(a+cp)\vec u+(b+cq)\vec v\).`, S`Each set is contained in the other, so they are equal.`],
    ans: S`substitute \(\vec w=p\vec u+q\vec v\)` },
];

const PROBLEMS = [
  { level: 1, q: S`Is \((8,-4)\in\operatorname{Span}\{(-2,1)\}\)? If so, give the weight.`, ans: S`yes, \(c=-4\)` },
  { level: 1, q: S`Describe \(\operatorname{Span}\{(0,5)\}\) geometrically.`, ans: S`the \(x_2\)-axis` },
  { level: 1, q: S`Compute the combination \(3(1,-1,2)+2(0,4,1)\).`, ans: S`\((3,5,8)\)` },
  { level: 2, q: S`Is \((5,3)\in\operatorname{Span}\{(1,-1),(1,1)\}\)? Give the weights.`, ans: S`yes: \(1(1,-1)+4(1,1)\)`, fig: vecs2([[[1, -1], "(1, −1)", "blue"], [[1, 1], "(1, 1)", "red"]], { xmin: -2, xmax: 6, ymin: -2, ymax: 4 }, { points: [{ x: 5, y: 3, label: "(5, 3)", color: "green" }] }) },
  { level: 2, q: S`Is \((4,1,3)\in\operatorname{Span}\{(1,1,0),(1,0,1)\}\)? Show the row reduction.`, ans: S`yes: \(1(1,1,0)+3(1,0,1)\)` },
  { level: 2, q: S`Is \((1,1,1)\in\operatorname{Span}\{(1,2,0),(0,1,1)\}\)?`, ans: S`no (the system is inconsistent)`, fig: planeFig([1, 2, 0], [0, 1, 1], { lu: "(1, 2, 0)", lv: "(0, 1, 1)", more: [[[1, 1, 1], "(1, 1, 1)", "amber"]] }) },
  { level: 2, q: S`Find an equation of the plane \(\operatorname{Span}\{(2,0,1),(0,1,3)\}\).`, ans: S`\(x_1+6x_2-2x_3=0\)` },
  { level: 2, q: S`For which \(k\) is \((3,k)\in\operatorname{Span}\{(1,2)\}\)?`, ans: S`\(k=6\)`, fig: vecs2([[[1, 2], "(1, 2)", "blue"]], { xmin: -1, xmax: 4, ymin: -1, ymax: 7 }, { segs: [{ pts: [[-0.5, -1], [3.5, 7]], color: "violet", w: 2.5 }] }) },
  { level: 3, space: 5, q: S`For which \(h\) is \((h,2,5)\in\operatorname{Span}\{(1,1,1),(0,1,2)\}\)?`, ans: S`\(h=-1\) (weights \(-1,3\))` },
  { level: 3, space: 5, q: S`Show that \(\operatorname{Span}\{(1,1),(1,-1)\}=\mathbb R^2\) by finding the weights for a general \((x,y)\).`, ans: S`\(c_1=\tfrac{x+y}2,\ c_2=\tfrac{x-y}2\)`, fig: vecs2([[[1, 1], "(1, 1)", "blue"], [[1, -1], "(1, −1)", "red"]], { xmin: -2, xmax: 2, ymin: -2, ymax: 2 }) },
  { level: 3, space: 5, q: S`Prove that \(\operatorname{Span}\{\vec v_1,\dots,\vec v_k\}\) contains \(\vec 0\) and every linear combination of its own vectors.`, ans: S`all weights 0; combine the weights linearly` },
  { level: 3, space: 5, q: S`Prove that \(\operatorname{Span}\{\vec u,\vec v\}=\operatorname{Span}\{\vec u+\vec v,\ \vec u-\vec v\}\).`, ans: S`\(\vec u=\tfrac12[(\vec u+\vec v)+(\vec u-\vec v)]\), \(\vec v=\tfrac12[(\vec u+\vec v)-(\vec u-\vec v)]\)` },
  { level: 3, space: 5, q: S`Find a vector not in \(\operatorname{Span}\{(1,0,1),(0,1,1)\}\) and prove it is not.`, ans: S`e.g. \((0,0,1)\): the span is \(x_1+x_2-x_3=0\), and \(0+0-1\ne0\)` },
];

export const WS = {
  code: "4.1",
  title: "Linear Combinations and Span",
  bigideas: S`A linear combination \(c_1\vec v_1+\dots+c_k\vec v_k\) builds a new vector from given ones; the span is the set of all of them. One nonzero vector spans a line through the origin, two non-parallel vectors a plane (or all of \(\mathbb R^2\)). Whether \(\vec b\) lies in a span is decided by one linear system: row reduce \([\,\vec v_1\ \cdots\ \vec v_k\mid\vec b\,]\).`,
  goals: ["Form linear combinations and draw them head to tail.", "Describe spans of one and two vectors geometrically.", "Decide \\(\\vec b\\in\\operatorname{Span}\\) by row reduction and find the weights.", "Find the equation of a plane spanned by two vectors.", "Prove simple facts about spans."],
  curriculum: "Span and linear independence — linear combinations and span",
  vocab: [["Linear combination", "\\(c_1\\vec v_1+\\dots+c_k\\vec v_k\\)"], ["Weights", "the scalars \\(c_i\\)"], ["Span", "all linear combinations"], ["Spanning set", "a set whose span is the given set"], ["Membership", "\\([\\,\\vec v_1\\cdots\\vec v_k\\mid\\vec b\\,]\\) consistent"]],
  hook: S`With only two kinds of moves — "\(2\) east, \(1\) north" and "\(1\) east, \(1\) south" — and any (possibly fractional or negative) number of each, which points of the plane can you reach?`,
  concepts: NOTES,
  summary: [
    S`\(\operatorname{Span}\{\vec v_1,\dots,\vec v_k\}=\{c_1\vec v_1+\dots+c_k\vec v_k\}\).`,
    S`\(\vec b\in\operatorname{Span}\iff[\,\vec v_1\ \cdots\ \vec v_k\mid\vec b\,]\) consistent.`,
    S`One nonzero vector: a line through \(\vec 0\).`,
    S`Two non-parallel vectors in \(\mathbb R^3\): a plane with normal \(\vec v_1\times\vec v_2\).`,
    S`Every span contains \(\vec 0\) and is closed under combinations.`,
  ],
  tips: ["Vectors go in the columns.", "A row 0 … 0 | c with c ≠ 0 means 'not in the span'.", "Check weights by rebuilding b.", "Parallel vectors span only a line.", "A span always passes through the origin."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
