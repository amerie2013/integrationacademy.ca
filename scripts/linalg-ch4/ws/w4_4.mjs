// LINALG1 Worksheet 4.4 — Independence: Theorems and Geometry
// Self-contained: complete notes, 9 worked examples with figures, 13 problems with an answer key.
import { svgT } from "./figT.mjs";
import { S, thm } from "./wkit.mjs";
import { vecs2, planeFig, vecs3 } from "./fig5.mjs";
import { rowPic } from "./fig3.mjs";
import { am, steps } from "../bank/la.mjs";

const P = (svg, w = 4.6) => svgT(svg, w);
const M = (m) => am(m, false);

const NOTES = [
  { h: "1. Too many vectors",
    lead: thm("counting", S`Any \(k\gt n\) vectors in \(\mathbb R^n\) are linearly dependent.`) + S`\pf{\([\,\vec v_1\ \cdots\ \vec v_k\,]\) is \(n\times k\) with at most \(n\lt k\) pivots, so some column is free and \(A\vec c=\vec 0\) has a nonzero solution.}`,
    fig: P(rowPic([[[["■", "*", "*", "*"], [0, "■", "*", "*"], [0, 0, "■", "*"]], { label: "3 × 4: a free column" }]]), 3.4), w: 0.5,
    body: S`So an independent set in \(\mathbb R^n\) has at most \(n\) vectors.` },
  { h: "2. Subsets and supersets",
    lead: thm("inheritance", S`Every subset of an independent set is independent; every set containing a dependent set is dependent.`) + S`\pf{A relation among some vectors is a relation among all of them (weights 0 for the rest).}`,
    fig: vecs3([[[1, 0, 0], "e₁"], [[0, 1, 0], "e₂"], [[0, 0, 1], "e₃"], [[1, 1, 1], "(1, 1, 1)", "violet"]], { len: 1.7 }), w: 0.5,
    body: S`\(\{\vec e_1,\vec e_2,\vec e_3,(1,1,1)\}\) is dependent, yet \(\{\vec e_1,\vec e_2\}\) is independent: subsets of \emph{dependent} sets can go either way.` },
  { h: "3. Geometry",
    lead: S`\begin{itemize}[leftmargin=*,itemsep=1pt]
\item two vectors: independent \(\iff\) not parallel;
\item three vectors in \(\mathbb R^3\): independent \(\iff\) not in one plane through \(\vec 0\);
\item any three vectors in \(\mathbb R^2\) are dependent.
\end{itemize}`,
    fig: planeFig([2, 1, 0], [0, 1, 1], { lu: "(2, 1, 0)", lv: "(0, 1, 1)", more: [[[2, 3, 2], "(2, 3, 2)", "green"]], len: 3.8 }), w: 0.5 },
  { h: "4. n vectors in ℝⁿ",
    lead: thm("square case", S`For exactly \(n\) vectors in \(\mathbb R^n\): independent \(\iff\) spanning \(\iff\) \([\,\vec v_1\ \cdots\ \vec v_n\,]\) has \(n\) pivots.`) + S`\pf{For a square matrix "a pivot in every column" and "a pivot in every row" both mean \(n\) pivots.}`,
    fig: vecs3([[[1, 1, 2], "(1, 1, 2)"], [[1, 2, 1], "(1, 2, 1)"], [[2, 1, 1], "(2, 1, 1)"]]), w: 0.5 },
  { h: "5. Extending an independent set",
    lead: thm("extension", S`If \(\{\vec v_1,\dots,\vec v_k\}\) is independent and \(\vec w\notin\operatorname{Span}\{\vec v_1,\dots,\vec v_k\}\), then \(\{\vec v_1,\dots,\vec v_k,\vec w\}\) is independent.`) + S`\pf{In \(\sum c_i\vec v_i+d\vec w=\vec 0\), \(d\ne0\) would put \(\vec w\) in the span; so \(d=0\), and then all \(c_i=0\).}`,
    fig: planeFig([1, 0, 2], [0, 1, 0], { lu: "(1, 0, 2)", lv: "(0, 1, 0)", more: [[[0, 0, 1], "w = e₃", "green"]] }), w: 0.5 },
];

const EXAMPLES = [
  { title: "Four vectors in ℝ³", q: S`Show \(\vec v_1=(1,2,0)\), \(\vec v_2=(0,1,1)\), \(\vec v_3=(1,0,1)\), \(\vec v_4=(2,3,2)\) are dependent and find a relation.`,
    fig: P(rowPic([[[[1, 0, 1, 2], [2, 1, 0, 3], [0, 1, 1, 2]], { col: 3, label: "[v₁ v₂ v₃ v₄]" }]]), 3.2),
    steps: [S`Four vectors in \(\mathbb R^3\): dependent by counting. Reduce to find the relation.`, ...steps([[1, 0, 1, 2], [2, 1, 0, 3], [0, 1, 1, 2]], [
      [S`Clear column 1.`, ["R2-2R1"]],
      [S`Clear column 2 below its pivot.`, ["R3-R2"]],
      [S`Make the third pivot 1.`, ["R3*1/3"]],
      [S`Clear above the third pivot.`, ["R1-R3", "R2+2R3"]],
    ], { bar: false, intro: "Vectors as columns" }).steps, S`Column 4 of the RREF is \((1,1,1)\): \(\vec v_4=\vec v_1+\vec v_2+\vec v_3\). Check: \((1+0+1,\ 2+1+0,\ 0+1+1)=(2,3,2)\) ✓.`],
    ans: S`\(\vec v_1+\vec v_2+\vec v_3-\vec v_4=\vec 0\)` },
  { title: "Three vectors in ℝ²", q: S`Find a relation among \((1,2)\), \((3,1)\), \((5,5)\).`,
    fig: vecs2([[[1, 2], "(1, 2)", "blue"], [[3, 1], "(3, 1)", "red"], [[2, 4], "", "blue", null, true], [[5, 5], "", "red", [2, 4], true], [[5, 5], "(5, 5)", "green"]], { xmin: -1, xmax: 6, ymin: -1, ymax: 6 }),
    steps: [S`Three vectors in \(\mathbb R^2\) are dependent (counting). Reduce to find the relation.`,
      ...steps([[1, 3, 5], [2, 1, 5]], [
        [S`Clear column 1.`, ["R2-2R1"]],
        [S`Make the second pivot 1.`, ["R2*-1/5"]],
        [S`Clear above it.`, ["R1-3R2"]],
      ], { bar: false, intro: "Matrix with the vectors as columns" }).steps,
      S`Column 3 of the RREF is \((2,1)\): \(\vec v_3=2\vec v_1+\vec v_2\). Check: \[2${am([[1], [2]], false)}+${am([[3], [1]], false)}=${am([[5], [5]], false)}\ ✓\].`],
    ans: S`\(2\vec v_1+\vec v_2-\vec v_3=\vec 0\)` },
  { title: "Coplanar vectors", q: S`Are \((2,1,0)\), \((0,1,1)\), \((2,3,2)\) independent?`,
    fig: planeFig([2, 1, 0], [0, 1, 1], { lu: "(2, 1, 0)", lv: "(0, 1, 1)", more: [[[2, 3, 2], "(2, 3, 2)", "green"]], len: 3.8 }),
    steps: [S`\((2,1,0)+2(0,1,1)=(2,3,2)\).`, S`So the three lie in one plane through \(\vec 0\): dependent — although no two are parallel.`],
    ans: S`dependent` },
  { title: "The square case", q: S`Do \((1,1,2)\), \((1,2,1)\), \((2,1,1)\) form an independent set? Do they span \(\mathbb R^3\)?`,
    fig: vecs3([[[1, 1, 2], "(1, 1, 2)"], [[1, 2, 1], "(1, 2, 1)"], [[2, 1, 1], "(2, 1, 1)"]]),
    steps: [...steps([[1, 1, 2], [1, 2, 1], [2, 1, 1]], [
      [S`Clear column 1.`, ["R2-R1", "R3-2R1"]],
      [S`Clear column 2 below its pivot.`, ["R3+R2"]],
    ], { bar: false, intro: "Vectors as columns" }).steps, S`Three pivots in a \(3\times3\) matrix: independent and spanning.`],
    ans: S`yes to both` },
  { title: "Subsets of a dependent set", q: S`\(B=\{\vec e_1,\vec e_2,\vec e_3,(1,1,1)\}\subseteq\mathbb R^3\). Is \(B\) independent? Is \(\{\vec e_1,\vec e_2\}\)?`,
    fig: vecs3([[[1, 0, 0], "e₁"], [[0, 1, 0], "e₂"], [[0, 0, 1], "e₃"], [[1, 1, 1], "(1, 1, 1)", "violet"]], { len: 1.7 }),
    steps: [S`\(B\) has four vectors in \(\mathbb R^3\): dependent; explicitly \(\vec e_1+\vec e_2+\vec e_3-(1,1,1)=\vec 0\).`, S`\(\{\vec e_1,\vec e_2\}\): not parallel, so independent.`],
    ans: S`\(B\) dependent; \(\{\vec e_1,\vec e_2\}\) independent` },
  { title: "Extending step by step", q: S`Extend \(\{(1,0,2)\}\) to an independent set of three vectors using the extension theorem.`,
    fig: planeFig([1, 0, 2], [0, 1, 0], { lu: "(1, 0, 2)", lv: "(0, 1, 0)", more: [[[0, 0, 1], "(0, 0, 1)", "green"]] }),
    steps: [S`\((1,0,2)\) and \((0,1,0)\) are not parallel. Find their span: reduce with a general right side \[${am([[1, 0, "b_1"], [0, 1, "b_2"], [2, 0, "b_3"]])}\]`,
      S`Operation: \(R_3\to R_3-2R_1\). \[\longrightarrow\ ${am([[1, 0, "b_1"], [0, 1, "b_2"], [0, 0, "b_3-2b_1"]])}\] The span is the plane \(-2x_1+x_3=0\).`,
      S`\((0,0,1)\) gives \(1-0=1\ne0\): it is outside the span.`,
      ...steps([[1, 0, 0], [0, 1, 0], [2, 0, 1]], [
        [S`\textbf{Confirm.} Clear column 1.`, ["R3-2R1"]],
      ], { bar: false, intro: "Matrix [ v₁ v₂ w ]" }).steps,
      S`Three pivots: \(\{(1,0,2),(0,1,0),(0,0,1)\}\) is independent.`],
    ans: S`\(\{(1,0,2),(0,1,0),(0,0,1)\}\)` },
  { title: "Differences always dependent", q: S`Show that \(\{\vec u-\vec v,\ \vec v-\vec w,\ \vec w-\vec u\}\) is dependent for any \(\vec u,\vec v,\vec w\).`,
    fig: vecs2([[[3, 1], "u − v", "blue"], [[-1, 2], "v − w", "red", [3, 1]], [[0, 0], "w − u", "green", [2, 3]]], { xmin: -1, xmax: 4, ymin: -1, ymax: 4 }),
    steps: [S`Add them: \((\vec u-\vec v)+(\vec v-\vec w)+(\vec w-\vec u)=\vec 0\).`, S`The weights \(1,1,1\) are not all zero: a nontrivial relation.`],
    ans: S`their sum is \(\vec 0\)` },
  { title: "A parameter", q: S`For which \(a\) are \((1,1,1)\), \((1,2,a)\), \((1,a,5)\) dependent?`,
    fig: vecs3([[[1, 1, 1], "(1, 1, 1)"], [[1, 2, 3], "(1, 2, a)"], [[1, 3, 5], "(1, a, 5)"]]),
    steps: [S`Columns \(${M([[1, 1, 1], [1, 2, "a"], [1, "a", 5]])}\).`, S`\(R_2\to R_2-R_1\): \((0,\ 1,\ a-1)\); \(R_3\to R_3-R_1\): \((0,\ a-1,\ 4)\).`, S`\(R_3\to R_3-(a-1)R_2\): \((0,\ 0,\ 4-(a-1)^2)\).`, S`Dependent \(\iff(a-1)^2=4\iff a=3\) or \(a=-1\). Check \(a=3\): \((1,3,5)=2(1,2,3)-(1,1,1)\) ✓.`],
    ans: S`\(a=3\) or \(a=-1\)` },
  { title: "Proof of the counting theorem", q: S`Prove that five vectors in \(\mathbb R^4\) are always dependent.`,
    steps: [S`\(A=[\,\vec v_1\ \cdots\ \vec v_5\,]\) is \(4\times5\).`, S`Each pivot uses its own row, so there are at most 4 pivots for 5 columns.`, S`Some column has no pivot; its variable is free, so \(A\vec c=\vec 0\) has a nonzero solution — a dependence relation.`],
    ans: S`at most 4 pivots for 5 columns` },
];

const PROBLEMS = [
  { level: 1, q: S`Are five vectors in \(\mathbb R^3\) ever independent?`, ans: S`never` },
  { level: 1, q: S`Is \(\{(1,2,3),(2,4,6)\}\) independent?`, ans: S`no (parallel)` },
  { level: 1, q: S`What is the largest independent set in \(\mathbb R^7\)?`, ans: S`7 vectors` },
  { level: 2, q: S`Do \((1,0,1)\), \((1,1,1)\), \((0,1,2)\) form an independent set? Do they span \(\mathbb R^3\)?`, ans: S`yes and yes (3 pivots)`, fig: vecs3([[[1, 0, 1], "(1, 0, 1)"], [[1, 1, 1], "(1, 1, 1)"], [[0, 1, 2], "(0, 1, 2)"]]) },
  { level: 2, q: S`Find a relation among \((1,1)\), \((1,-1)\), \((3,1)\).`, ans: S`\(2\vec v_1+\vec v_2-\vec v_3=\vec 0\)`, fig: vecs2([[[1, 1], "(1, 1)", "blue"], [[1, -1], "(1, −1)", "red"], [[3, 1], "(3, 1)", "green"]], { xmin: -1, xmax: 4, ymin: -2, ymax: 2 }) },
  { level: 2, q: S`Are \((1,2,1)\), \((1,0,1)\), \((2,2,2)\) independent?`, ans: S`no: \((2,2,2)=(1,2,1)+(1,0,1)\)`, fig: vecs3([[[1, 2, 1], "(1, 2, 1)"], [[1, 0, 1], "(1, 0, 1)"], [[2, 2, 2], "(2, 2, 2)"]]) },
  { level: 2, q: S`Is \(\{(1,0,0,0),(1,1,0,0),(1,1,1,0)\}\) independent?`, ans: S`yes` },
  { level: 2, q: S`\(\{\vec u,\vec v\}\) is independent. Is \(\{\vec u+\vec v,\ \vec u-\vec v\}\) independent?`, ans: S`yes: \(a+b=0\) and \(a-b=0\) force \(a=b=0\)` },
  { level: 3, space: 5, q: S`For which \(c\) are \((1,0,c)\), \((0,1,1)\), \((c,1,2)\) dependent?`, ans: S`\(c=\pm1\) (last pivot \(1-c^2\))` },
  { level: 3, space: 5, q: S`Prove that every subset of an independent set is independent.`, ans: S`a relation in the subset extends by zero weights` },
  { level: 3, space: 5, q: S`\(\{\vec u,\vec v,\vec w\}\) is independent. Prove \(\{\vec u,\ 2\vec u+\vec v,\ 3\vec u-\vec v+\vec w\}\) is independent.`, ans: S`\((a+2b+3c)\vec u+(b-c)\vec v+c\vec w=\vec 0\) gives \(c=0,b=0,a=0\)` },
  { level: 3, space: 5, q: S`Extend \(\{(1,1,0,0),(0,1,1,0)\}\) to four independent vectors in \(\mathbb R^4\). Justify.`, ans: S`e.g. add \((0,0,1,0),(0,0,0,1)\): the matrix has 4 pivots`, fig: P(rowPic([[[[1, 0, "?", "?"], [1, 1, "?", "?"], [0, 1, "?", "?"], [0, 0, "?", "?"]], { label: "add two columns" }]]), 2.8) },
  { level: 3, space: 5, q: S`Prove: if \(k\) vectors in \(\mathbb R^n\) are independent, then \(k\le n\).`, ans: S`a pivot in each of \(k\) columns, at most \(n\) pivots` },
];

export const WS = {
  code: "4.4",
  title: "Independence: Theorems and Geometry",
  bigideas: S`Theorems often decide independence without computation: more than \(n\) vectors in \(\mathbb R^n\) are dependent; subsets of independent sets are independent; two vectors are independent exactly when not parallel and three in \(\mathbb R^3\) exactly when not coplanar. For \(n\) vectors in \(\mathbb R^n\), independence and spanning are the same property, and an independent set grows by adding any vector outside its span.`,
  goals: ["Use the counting theorem.", "Reason with subsets and supersets.", "Interpret independence geometrically.", "Use the square case: independent ⇔ spanning.", "Extend an independent set."],
  curriculum: "Span and linear independence — theorems on independence",
  vocab: [["Counting theorem", "\\(k\\gt n\\Rightarrow\\) dependent"], ["Subset", "inherits independence"], ["Coplanar", "in one plane through \\(\\vec 0\\)"], ["Square case", "\\(n\\) vectors in \\(\\mathbb R^n\\)"], ["Extension", "add \\(\\vec w\\notin\\operatorname{Span}\\)"]],
  hook: S`How many "truly different" directions can you choose in space? Why can't you choose four?`,
  concepts: NOTES,
  summary: [
    S`\(k\gt n\) vectors in \(\mathbb R^n\) are dependent.`,
    S`Subsets of independent sets are independent.`,
    S`Not parallel / not coplanar \(\iff\) independent (2 or 3 vectors).`,
    S`\(n\) vectors in \(\mathbb R^n\): independent \(\iff\) spanning.`,
    S`Add \(\vec w\notin\operatorname{Span}B\) to keep \(B\) independent.`,
  ],
  tips: ["Count the vectors before row reducing.", "Three vectors can be dependent with no two parallel.", "Use the square case to get two answers from one reduction.", "Check a vector is outside the span before adding it.", "A sum equal to 0 is a dependence relation."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
