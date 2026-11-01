// LINALG1 Worksheet 4.5 — Dependence Relations and Reducing a Spanning Set
// Self-contained: complete notes, 9 worked examples with figures, 13 problems with an answer key.
import { svgT } from "./figT.mjs";
import { S, thm } from "./wkit.mjs";
import { vecs2, planeFig, vecs3 } from "./fig5.mjs";
import { rowPic } from "./fig3.mjs";
import { am, steps } from "../bank/la.mjs";

const P = (svg, w = 4.6) => svgT(svg, w);
const M = (m) => am(m, false);

const NOTES = [
  { h: "1. Dependence means redundancy",
    lead: thm("characterisation", S`\(\{\vec v_1,\dots,\vec v_k\}\) is dependent \(\iff\) some \(\vec v_i\) is a linear combination of the others.`) + S`\pf{⇒ Solve a relation for a vector with nonzero coefficient. ⇐ \(\vec v_i=\sum_{j\ne i}a_j\vec v_j\) gives the relation \(\sum_{j\ne i}a_j\vec v_j-\vec v_i=\vec 0\).}`,
    fig: planeFig([1, 0, 1], [0, 1, 2], { lu: "v₁", lv: "v₂", more: [[[2, 1, 4], "v₃ = 2v₁ + v₂", "green"]], len: 4.2 }), w: 0.5 },
  { h: "2. Removing a redundant vector",
    lead: thm("same span", S`If \(\vec v_i\) is a combination of the other vectors, removing it does not change the span.`) + S`\pf{Substitute \(\vec v_i=\sum_{j\ne i}a_j\vec v_j\) into any combination; only the other vectors remain.}`,
    fig: vecs2([[[1, 2], "(1, 2)", "blue"], [[2, 4], "(2, 4)", "red", null, true], [[0, 1], "(0, 1)", "green"]], { xmin: -1, xmax: 3, ymin: -1, ymax: 5 }), w: 0.5,
    body: S`Only a vector with a \textbf{nonzero} coefficient in some relation can be removed.` },
  { h: "3. Relations from the RREF",
    lead: S`Row operations do not change the solutions of \(A\vec c=\vec 0\), so \(A=[\,\vec v_1\ \cdots\ \vec v_k\,]\) and its RREF \(R\) have the \emph{same column relations}. In \(R\), each non-pivot column lists the weights of the pivot columns that produce it.`,
    fig: P(rowPic([[[[1, 0, 3, 0], [0, 1, -2, 0], [0, 0, 0, 1]], { col: 2, label: "R: v₃ = 3v₁ − 2v₂" }]]), 3.6), w: 0.5 },
  { h: "4. Pivot columns",
    lead: thm("pivot columns", S`The vectors \(\vec v_j\) in the pivot columns of \(A\) are linearly independent and span \(\operatorname{Span}\{\vec v_1,\dots,\vec v_k\}\).`) + S`\pf{In \(R\) the pivot columns are distinct standard vectors, hence independent, and every other column is a combination of them. The same relations hold for the columns of \(A\).}`,
    fig: vecs3([[[1, 0, 1], "v₁"], [[1, 1, 0], "v₃"], [[1, 2, 1], "v₅"]]), w: 0.5,
    body: S`Use the pivot columns of the \textbf{original} matrix — the columns of \(R\) are different vectors.` },
  { h: "5. The procedure",
    lead: S`\begin{enumerate}[leftmargin=*,itemsep=1pt]
\item put the vectors in the columns of \(A\) and find the RREF;
\item read each non-pivot column as a dependence relation (and check it);
\item keep the pivot-column vectors of \(A\): an independent set with the same span.
\end{enumerate}`,
    fig: P(rowPic([[[[1, 2, 1, 0, 1], [0, 0, 1, 1, 2], [1, 2, 0, -1, 1]], { label: "A" }], "→", [[[1, 2, 0, -1, 0], [0, 0, 1, 1, 0], [0, 0, 0, 0, 1]], { label: "RREF" }]]), 5), w: 0.5 },
];

const EXAMPLES = [
  { title: "A relation among three vectors", q: S`\(\vec v_1=(1,0,1)\), \(\vec v_2=(0,1,2)\), \(\vec v_3=(2,1,4)\). Find a relation and an independent subset with the same span.`,
    fig: planeFig([1, 0, 1], [0, 1, 2], { lu: "v₁", lv: "v₂", more: [[[2, 1, 4], "v₃", "green"]], len: 4.2 }),
    steps: [...steps([[1, 0, 2], [0, 1, 1], [1, 2, 4]], [
      [S`Clear column 1.`, ["R3-R1"]],
      [S`Clear column 2 below its pivot.`, ["R3-2R2"]],
    ], { bar: false, intro: "Vectors as columns" }).steps, S`This is the RREF. Column 3 \((2,1)\): \(\vec v_3=2\vec v_1+\vec v_2\). Check: \((2,0,2)+(0,1,2)=(2,1,4)\) ✓.`, S`Pivot columns 1, 2: keep \(\{\vec v_1,\vec v_2\}\).`],
    ans: S`\(\vec v_3=2\vec v_1+\vec v_2\); keep \(\{\vec v_1,\vec v_2\}\)` },
  { title: "Which vectors may go?", q: S`For the set above the relation is \(2\vec v_1+\vec v_2-\vec v_3=\vec 0\). Which vectors can be removed (one at a time)?`,
    fig: planeFig([1, 0, 1], [2, 1, 4], { lu: "v₁", lv: "v₃", more: [[[0, 1, 2], "v₂", "red"]], len: 4.2 }),
    steps: [S`All three coefficients \(2,1,-1\) are nonzero.`, S`\(\vec v_1=\tfrac12(\vec v_3-\vec v_2)\), \(\vec v_2=\vec v_3-2\vec v_1\), \(\vec v_3=2\vec v_1+\vec v_2\).`, S`Any one may be removed; the remaining two span the same plane.`],
    ans: S`any one of them` },
  { title: "Five vectors in ℝ³", q: S`Reduce \(\vec v_1=(1,0,1)\), \(\vec v_2=(2,0,2)\), \(\vec v_3=(1,1,0)\), \(\vec v_4=(0,1,-1)\), \(\vec v_5=(1,2,1)\) to an independent set with the same span.`,
    fig: vecs3([[[1, 0, 1], "v₁"], [[1, 1, 0], "v₃"], [[1, 2, 1], "v₅"]]),
    steps: [...steps([[1, 2, 1, 0, 1], [0, 0, 1, 1, 2], [1, 2, 0, -1, 1]], [
      [S`Clear column 1.`, ["R3-R1"]],
      [S`Clear column 3 below its pivot (column 2 has none).`, ["R3+R2"]],
      [S`Make the pivot in column 5 equal to 1.`, ["R3*1/2"]],
      [S`Clear above it.`, ["R1-R3", "R2-2R3"]],
      [S`Clear above the pivot in column 3.`, ["R1-R2"]],
    ], { bar: false, intro: "Vectors as columns" }).steps, S`Pivots in columns 1, 3, 5. Column 2: \(\vec v_2=2\vec v_1\). Column 4: \(\vec v_4=-\vec v_1+\vec v_3\); check \(-(1,0,1)+(1,1,0)=(0,1,-1)\) ✓.`, S`Keep \(\{\vec v_1,\vec v_3,\vec v_5\}\) — three pivots, so the span is all of \(\mathbb R^3\).`],
    ans: S`\(\{(1,0,1),(1,1,0),(1,2,1)\}\)` },
  { title: "A vector that must stay", q: S`\(\vec v_1=(1,1,0)\), \(\vec v_2=(0,0,1)\), \(\vec v_3=(2,2,0)\). Which vectors are removable?`,
    fig: vecs3([[[1, 1, 0], "v₁"], [[0, 0, 1], "v₂"], [[2, 2, 0], "v₃"]], { len: 2.5 }),
    steps: [S`\(\vec v_3=2\vec v_1\): the relations are multiples of \(2\vec v_1+0\vec v_2-\vec v_3=\vec 0\).`, S`\(\vec v_2\) always has coefficient 0: it is not a combination of \(\vec v_1,\vec v_3\) (they have third entry 0).`, S`So \(\vec v_1\) or \(\vec v_3\) may go, never \(\vec v_2\).`],
    ans: S`\(\vec v_1\) or \(\vec v_3\)` },
  { title: "Reading a given RREF", q: S`\([\,\vec v_1\ \vec v_2\ \vec v_3\ \vec v_4\,]\) has RREF \(${M([[1, 0, 3, 0], [0, 1, -2, 0], [0, 0, 0, 1]])}\). State the relations and a minimal spanning subset.`,
    fig: P(rowPic([[[[1, 0, 3, 0], [0, 1, -2, 0], [0, 0, 0, 1]], { col: 2, label: "RREF" }]]), 2.8),
    steps: [S`Pivots in columns 1, 2, 4.`, S`Column 3 is \((3,-2,0)\): \(\vec v_3=3\vec v_1-2\vec v_2\).`, S`Keep \(\{\vec v_1,\vec v_2,\vec v_4\}\).`],
    ans: S`\(\vec v_3=3\vec v_1-2\vec v_2\); keep \(\vec v_1,\vec v_2,\vec v_4\)` },
  { title: "Proof of the characterisation", q: S`Prove: \(\{\vec v_1,\dots,\vec v_k\}\) is dependent \(\iff\) some \(\vec v_i\) is a combination of the others.`,
    steps: [S`⇒ Take a relation \(\sum c_j\vec v_j=\vec 0\) with some \(c_i\ne0\). Then \(\vec v_i=-\tfrac1{c_i}\sum_{j\ne i}c_j\vec v_j\).`, S`⇐ If \(\vec v_i=\sum_{j\ne i}a_j\vec v_j\), then \(\sum_{j\ne i}a_j\vec v_j+(-1)\vec v_i=\vec 0\), a relation with coefficient \(-1\ne0\).`],
    ans: S`solve for the vector with a nonzero coefficient` },
  { title: "Different choices, same size", q: S`From \(\{(1,1),(2,2),(1,0)\}\), list every independent subset with the same span.`,
    fig: vecs2([[[1, 1], "(1, 1)", "blue"], [[2, 2], "(2, 2)", "red", null, true], [[1, 0], "(1, 0)", "green"]], { xmin: -1, xmax: 3, ymin: -1, ymax: 3 }),
    steps: [S`The span is \(\mathbb R^2\) (\((1,1)\) and \((1,0)\) are not parallel).`, S`Relation: \(2(1,1)-(2,2)=\vec 0\); \((1,0)\) has coefficient 0 and must stay.`, S`Subsets: \(\{(1,1),(1,0)\}\) or \(\{(2,2),(1,0)\}\) — both of size 2.`],
    ans: S`\(\{(1,1),(1,0)\}\) or \(\{(2,2),(1,0)\}\)` },
  { title: "A parameter", q: S`For which \(k\) is \((3,4,k)\) redundant in \(\{(1,1,1),(1,2,3),(3,4,k)\}\)?`,
    fig: planeFig([1, 1, 1], [1, 2, 3], { lu: "(1, 1, 1)", lv: "(1, 2, 3)", more: [[[3, 4, 5], "(3, 4, 5)", "green"]], len: 4 }),
    steps: [S`Columns with \(k\) as a letter: \[${am([[1, 1, 3], [1, 2, 4], [1, 3, "k"]], false)}\]`,
      S`Clear column 1. Operations: \(R_2\to R_2-R_1,\ R_3\to R_3-R_1\). \[\longrightarrow\ ${am([[1, 1, 3], [0, 1, 1], [0, 2, "k-3"]], false)}\]`,
      S`Clear column 2. Operations: \(R_3\to R_3-2R_2,\ R_1\to R_1-R_2\). \[\longrightarrow\ ${am([[1, 0, 2], [0, 1, 1], [0, 0, "k-5"]], false)}\]`,
      S`Column 3 has no pivot exactly when \(k=5\); then column 3 \((2,1)\) gives \((3,4,5)=2(1,1,1)+(1,2,3)\) ✓.`],
    ans: S`\(k=5\)` },
  { title: "Why pivot columns are independent", q: S`Explain why the pivot-column vectors of \(A\) are linearly independent.`,
    steps: [S`A relation among them is a solution \(\vec c\) of \(A\vec c=\vec 0\) with zeros in the non-pivot positions.`, S`The same \(\vec c\) solves \(R\vec c=\vec 0\), where the pivot columns are distinct standard vectors \(\vec e_1,\vec e_2,\dots\).`, S`A combination of distinct standard vectors is \(\vec 0\) only with all weights 0. So \(\vec c=\vec 0\).`],
    ans: S`same relations as the standard vectors in \(R\)` },
];

const PROBLEMS = [
  { level: 1, q: S`\(4\vec v_1-\vec v_2+\vec v_3=\vec 0\). Write \(\vec v_2\) in terms of \(\vec v_1,\vec v_3\).`, ans: S`\(\vec v_2=4\vec v_1+\vec v_3\)` },
  { level: 1, q: S`\([\,\vec v_1\ \vec v_2\ \vec v_3\,]\) has RREF \(${M([[1, 2, 0], [0, 0, 1]])}\). Which vector is redundant, and how?`, ans: S`\(\vec v_2=2\vec v_1\)` },
  { level: 1, q: S`Six vectors span \(\mathbb R^2\). How many vectors does an independent subset with the same span have?`, ans: S`2` },
  { level: 2, q: S`Reduce \(\{(1,2),(2,4),(0,1)\}\) to an independent subset with the same span.`, ans: S`\(\{(1,2),(0,1)\}\)`, fig: vecs2([[[1, 2], "(1, 2)", "blue"], [[2, 4], "(2, 4)", "red", null, true], [[0, 1], "(0, 1)", "green"]], { xmin: -1, xmax: 3, ymin: -1, ymax: 5 }) },
  { level: 2, q: S`Reduce \(\{(1,0,1),(1,1,0),(2,1,1),(0,1,-1)\}\) and state the relations.`, ans: S`\(\vec v_3=\vec v_1+\vec v_2\), \(\vec v_4=-\vec v_1+\vec v_2\); keep \(\vec v_1,\vec v_2\)`, fig: planeFig([1, 0, 1], [1, 1, 0], { lu: "v₁", lv: "v₂" }) },
  { level: 2, q: S`Find a relation among \((1,-1,0)\), \((0,1,-1)\), \((1,0,-1)\).`, ans: S`\(\vec v_1+\vec v_2-\vec v_3=\vec 0\)` },
  { level: 2, q: S`Which vectors can be removed from \(\{(1,0),(3,0),(0,2)\}\) without changing the span?`, ans: S`\((1,0)\) or \((3,0)\)` },
  { level: 2, q: S`\([\,\vec v_1\ \vec v_2\ \vec v_3\ \vec v_4\,]\) has RREF \(${M([[1, 0, 2, -1], [0, 1, 1, 3]])}\). State the relations.`, ans: S`\(\vec v_3=2\vec v_1+\vec v_2\), \(\vec v_4=-\vec v_1+3\vec v_2\)`, fig: P(rowPic([[[[1, 0, 2, -1], [0, 1, 1, 3]], { col: 3, label: "RREF" }]]), 2.6) },
  { level: 3, space: 5, q: S`For which \(h\) is \((1,h,4)\) redundant in \(\{(1,1,2),(0,1,1),(1,h,4)\}\)?`, ans: S`\(h=3\): \((1,3,4)=(1,1,2)+2(0,1,1)\)` },
  { level: 3, space: 5, q: S`Prove that removing a vector that is a combination of the others does not change the span.`, ans: S`substitute it into every combination` },
  { level: 3, space: 5, q: S`Prove: if \(\{\vec v_1,\dots,\vec v_k\}\) is dependent and \(\vec v_1\ne\vec 0\), then some \(\vec v_j\) (\(j\ge2\)) is a combination of \(\vec v_1,\dots,\vec v_{j-1}\).`, ans: S`take the largest \(j\) with \(c_j\ne0\) in a relation; \(j\ge2\) since \(\vec v_1\ne\vec 0\)` },
  { level: 3, space: 5, q: S`Explain with \(A=${M([[1, 2], [2, 4]])}\) why the columns of the RREF cannot replace the original pivot columns.`, ans: S`RREF column \((1,0)\) is not in \(\operatorname{Col}A=\operatorname{Span}\{(1,2)\}\)`, fig: vecs2([[[1, 2], "(1, 2)", "blue"], [[1, 0], "(1, 0)", "red"]], { xmin: -1, xmax: 2, ymin: -1, ymax: 3 }) },
  { level: 3, space: 5, q: S`Seven vectors span \(\mathbb R^4\). How many of them are removed to reach an independent spanning subset? Justify.`, ans: S`3: an independent spanning set of \(\mathbb R^4\) has 4 vectors` },
];

export const WS = {
  code: "4.5",
  title: "Dependence Relations and Reducing a Spanning Set",
  bigideas: S`A dependent set always contains a vector that is a combination of the others, and removing it leaves the span unchanged. The RREF of \([\,\vec v_1\ \cdots\ \vec v_k\,]\) shows every such relation at once, and the pivot-column vectors of the original matrix form an independent set with the same span.`,
  goals: ["Use: dependent ⇔ some vector is a combination of the others.", "Remove redundant vectors without changing the span.", "Read dependence relations from an RREF.", "Find an independent spanning subset with pivot columns.", "Decide which vectors are removable."],
  curriculum: "Span and linear independence — dependence relations and minimal spanning sets",
  vocab: [["Redundant", "a combination of the other vectors"], ["Dependence relation", "nontrivial \\(\\sum c_i\\vec v_i=\\vec 0\\)"], ["Pivot columns", "independent, same span"], ["Removable", "nonzero coefficient in a relation"], ["Column relations", "unchanged by row operations"]],
  hook: S`A recipe lists five ingredients, but one of them is just a mix of two others. Which can you drop without losing any dish you could make?`,
  concepts: NOTES,
  summary: [
    S`Dependent \(\iff\) some \(\vec v_i\) is a combination of the others.`,
    S`Removing a redundant vector keeps the span.`,
    S`Non-pivot RREF columns give the relations.`,
    S`Pivot columns of \(A\): independent, same span.`,
    S`Only vectors with nonzero coefficients are removable.`,
  ],
  tips: ["Keep the ORIGINAL pivot columns.", "Check every relation by computing it.", "A coefficient 0 means the vector must stay.", "Remove one vector at a time.", "Different choices give subsets of the same size."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
