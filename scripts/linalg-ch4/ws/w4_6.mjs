// LINALG1 Worksheet 4.6 — Bases of ℝⁿ
// Self-contained: complete notes, 9 worked examples with figures, 13 problems with an answer key.
import { svgT } from "./figT.mjs";
import { S, def, thm } from "./wkit.mjs";
import { vecs2, planeFig, vecs3 } from "./fig5.mjs";
import { rowPic } from "./fig3.mjs";
import { am, steps } from "../bank/la.mjs";

const P = (svg, w = 4.6) => svgT(svg, w);
const M = (m) => am(m, false);

const NOTES = [
  { h: "1. The definition",
    lead: def("basis", S`\(\mathcal B=\{\vec v_1,\dots,\vec v_k\}\subseteq\mathbb R^n\) is a \emph{basis} of \(\mathbb R^n\) if (1) \(\mathcal B\) is linearly independent and (2) \(\operatorname{Span}\mathcal B=\mathbb R^n\).`),
    fig: vecs2([[[2, 1], "(2, 1)", "blue"], [[1, 1], "(1, 1)", "red"]], { xmin: -1, xmax: 3, ymin: -1, ymax: 2 }), w: 0.5,
    body: S`Spanning: nothing is missing. Independent: nothing is wasted.` },
  { h: "2. The standard basis",
    lead: S`\(\{\vec e_1,\dots,\vec e_n\}\), the columns of \(I_n\), is a basis of \(\mathbb R^n\): \(I_n\) has a pivot in every row and column, and \((x_1,\dots,x_n)=x_1\vec e_1+\dots+x_n\vec e_n\).`,
    fig: vecs3([[[1, 0, 0], "e₁"], [[0, 1, 0], "e₂"], [[0, 0, 1], "e₃"]], { len: 1.6 }), w: 0.5 },
  { h: "3. Every basis has n vectors",
    lead: thm("size of a basis", S`Every basis of \(\mathbb R^n\) has exactly \(n\) vectors.`) + S`\pf{Independence: a pivot in each of the \(k\) columns, so \(k\le n\). Spanning: a pivot in each of the \(n\) rows, so \(n\le k\).}`,
    fig: P(rowPic([[[["■", "*", "*"], [0, "■", "*"], [0, 0, "■"]], { label: "n × n with n pivots" }]]), 2.6), w: 0.5 },
  { h: "4. The n-vector test",
    lead: thm("one property suffices", S`For exactly \(n\) vectors in \(\mathbb R^n\): basis \(\iff\) independent \(\iff\) spanning \(\iff\) \([\,\vec v_1\ \cdots\ \vec v_n\,]\) has \(n\) pivots.`) + S`\pf{For a square matrix, a pivot in every column and a pivot in every row both mean \(n\) pivots.}`,
    fig: vecs3([[[1, 2, 1], "(1, 2, 1)"], [[0, 1, 2], "(0, 1, 2)"], [[1, 1, 0], "(1, 1, 0)"]]), w: 0.5 },
  { h: "5. Trimming and extending",
    lead: thm("trim and extend", S`(1) A spanning set of \(\mathbb R^n\) contains a basis: its pivot-column vectors. (2) An independent set extends to a basis: list it first, then \(\vec e_1,\dots,\vec e_n\), row reduce, keep the pivot columns.`) + S`\pf{(1) Pivot columns are independent with the same span. (2) The enlarged list spans \(\mathbb R^n\); the given vectors, being independent and first, are all pivot columns.}`,
    fig: P(rowPic([[[[1, 0, 1, 0, 0], [2, 1, 0, 1, 0], [3, 1, 0, 0, 1]], { label: "[v₁ v₂ | e₁ e₂ e₃]" }]]), 3.6), w: 0.5 },
];

const EXAMPLES = [
  { title: "A basis of ℝ²", q: S`Is \(\{(2,1),(1,1)\}\) a basis of \(\mathbb R^2\)?`,
    fig: vecs2([[[2, 1], "(2, 1)", "blue"], [[1, 1], "(1, 1)", "red"]], { xmin: -1, xmax: 3, ymin: -1, ymax: 2 }),
    steps: [...steps([[2, 1], [1, 1]], [
      [S`Bring the 1 up.`, ["R1<->R2"]],
      [S`Clear below the pivot.`, ["R2-2R1"]],
    ], { bar: false, intro: "Vectors as columns" }).steps, S`Two pivots for two vectors in \(\mathbb R^2\).`],
    ans: S`yes` },
  { title: "A basis of ℝ³", q: S`Is \(\{(1,2,1),(0,1,2),(1,1,0)\}\) a basis of \(\mathbb R^3\)?`,
    fig: vecs3([[[1, 2, 1], "(1, 2, 1)"], [[0, 1, 2], "(0, 1, 2)"], [[1, 1, 0], "(1, 1, 0)"]]),
    steps: [...steps([[1, 0, 1], [2, 1, 1], [1, 2, 0]], [
      [S`Clear column 1.`, ["R2-2R1", "R3-R1"]],
      [S`Clear column 2 below its pivot.`, ["R3-2R2"]],
    ], { bar: false, intro: "Vectors as columns" }).steps, S`Three pivots: a basis by the \(n\)-vector test.`],
    ans: S`yes` },
  { title: "Three vectors that are not a basis", q: S`Is \(\{(1,0,2),(0,1,-1),(2,-1,5)\}\) a basis of \(\mathbb R^3\)?`,
    fig: planeFig([1, 0, 2], [0, 1, -1], { lu: "(1, 0, 2)", lv: "(0, 1, −1)", more: [[[2, -1, 5], "(2, −1, 5)", "green"]], len: 4.5 }),
    steps: [...steps([[1, 0, 2], [0, 1, -1], [2, -1, 5]], [
      [S`Clear column 1.`, ["R3-2R1"]],
      [S`Clear column 2 below its pivot.`, ["R3+R2"]],
    ], { bar: false, intro: "Vectors as columns" }).steps, S`Only two pivots: \((2,-1,5)=2(1,0,2)-(0,1,-1)\) ✓. Not a basis.`],
    ans: S`no` },
  { title: "Wrong number of vectors", q: S`Can \(\{(1,0,0),(0,1,1)\}\) or \(\{(1,0,0),(0,1,0),(0,0,1),(1,1,1)\}\) be a basis of \(\mathbb R^3\)?`,
    fig: vecs3([[[1, 0, 0], "(1, 0, 0)"], [[0, 1, 1], "(0, 1, 1)"]], { len: 1.6 }),
    steps: [S`Every basis of \(\mathbb R^3\) has exactly 3 vectors.`, S`Two vectors cannot span \(\mathbb R^3\); four vectors cannot be independent.`],
    ans: S`neither` },
  { title: "The standard basis of ℝ⁴", q: S`Write \(\vec x=(3,-1,0,5)\) in the standard basis of \(\mathbb R^4\).`,
    fig: P(rowPic([[[[1, 0, 0, 0], [0, 1, 0, 0], [0, 0, 1, 0], [0, 0, 0, 1]], { label: "I₄ = [e₁ e₂ e₃ e₄]" }]]), 2.6),
    steps: [S`\(\vec x=3\vec e_1+(-1)\vec e_2+0\vec e_3+5\vec e_4\).`, S`The weights are just the entries of \(\vec x\).`],
    ans: S`\(3\vec e_1-\vec e_2+5\vec e_4\)` },
  { title: "Trimming a spanning set", q: S`Find a basis of \(\mathbb R^3\) inside \(\{(1,1,1),(2,2,2),(1,0,1),(0,1,0),(1,2,3)\}\).`,
    fig: vecs3([[[1, 1, 1], "(1, 1, 1)"], [[1, 0, 1], "(1, 0, 1)"], [[1, 2, 3], "(1, 2, 3)"]]),
    steps: [...steps([[1, 2, 1, 0, 1], [1, 2, 0, 1, 2], [1, 2, 1, 0, 3]], [
      [S`Clear column 1.`, ["R2-R1", "R3-R1"]],
    ], { bar: false, intro: "Vectors as columns" }).steps, S`Echelon form: pivots in columns 1, 3 and 5.`, S`Basis: \(\{(1,1,1),(1,0,1),(1,2,3)\}\).`],
    ans: S`\(\{(1,1,1),(1,0,1),(1,2,3)\}\)` },
  { title: "Extending to a basis", q: S`Extend \(\{(1,2,3),(0,1,1)\}\) to a basis of \(\mathbb R^3\).`,
    fig: planeFig([1, 2, 3], [0, 1, 1], { lu: "(1, 2, 3)", lv: "(0, 1, 1)", more: [[[1, 0, 0], "e₁", "green"]], len: 3.8 }),
    steps: [...steps([[1, 0, 1, 0, 0], [2, 1, 0, 1, 0], [3, 1, 0, 0, 1]], [
      [S`Clear column 1.`, ["R2-2R1", "R3-3R1"]],
      [S`Clear column 2 below its pivot.`, ["R3-R2"]],
    ], { bar: false, intro: "Matrix [ v₁ v₂ e₁ e₂ e₃ ]" }).steps, S`Pivots in columns 1, 2, 3: keep \(\vec v_1,\vec v_2,\vec e_1\).`],
    ans: S`\(\{(1,2,3),(0,1,1),(1,0,0)\}\)` },
  { title: "A parameter", q: S`For which \(a\) is \(\{(1,0,1),(0,1,a),(a,1,0)\}\) a basis of \(\mathbb R^3\)?`,
    fig: vecs3([[[1, 0, 1], "(1, 0, 1)"], [[0, 1, 1], "(0, 1, a)"], [[1, 1, 0], "(a, 1, 0)"]]),
    steps: [S`Columns \(${M([[1, 0, "a"], [0, 1, 1], [1, "a", 0]])}\).`, S`\(R_3\to R_3-R_1\): \((0,\ a,\ -a)\).`, S`\(R_3\to R_3-aR_2\): \((0,\ 0,\ -a-a)=(0,0,-2a)\).`, S`Three pivots exactly when \(a\ne0\). Check \(a=0\): \((0,1,0)\) and \((0,1,0)\) repeat.`],
    ans: S`every \(a\ne0\)` },
  { title: "Why every basis has n vectors", q: S`Prove that a basis of \(\mathbb R^n\) has exactly \(n\) vectors.`,
    steps: [S`Let the basis have \(k\) vectors, \(A\) the \(n\times k\) matrix of them.`, S`Independent: a pivot in each of the \(k\) columns; at most \(n\) pivots fit, so \(k\le n\).`, S`Spanning: a pivot in each of the \(n\) rows; at most \(k\) pivots fit, so \(n\le k\). Hence \(k=n\).`],
    ans: S`\(k\le n\) and \(n\le k\)` },
];

const PROBLEMS = [
  { level: 1, q: S`How many vectors are in a basis of \(\mathbb R^3\)?`, ans: S`3` },
  { level: 1, q: S`Is \(\{(1,0),(0,1),(1,1)\}\) a basis of \(\mathbb R^2\)?`, ans: S`no (three vectors)` },
  { level: 1, q: S`Is \(\{(3,0),(0,-2)\}\) a basis of \(\mathbb R^2\)?`, ans: S`yes`, fig: vecs2([[[3, 0], "(3, 0)", "blue"], [[0, -2], "(0, −2)", "red"]], { xmin: -1, xmax: 4, ymin: -3, ymax: 1 }) },
  { level: 2, q: S`Is \(\{(1,1,1),(1,1,0),(1,0,0)\}\) a basis of \(\mathbb R^3\)?`, ans: S`yes` },
  { level: 2, q: S`Is \(\{(1,2,1),(2,1,1),(3,3,2)\}\) a basis of \(\mathbb R^3\)?`, ans: S`no: \(\vec v_3=\vec v_1+\vec v_2\)`, fig: planeFig([1, 2, 1], [2, 1, 1], { lu: "(1, 2, 1)", lv: "(2, 1, 1)", more: [[[3, 3, 2], "(3, 3, 2)", "green"]], len: 3.8 }) },
  { level: 2, q: S`Find a basis of \(\mathbb R^2\) inside \(\{(1,0),(2,0),(1,1),(0,3)\}\).`, ans: S`\(\{(1,0),(1,1)\}\) (pivot columns)` },
  { level: 2, q: S`Extend \(\{(1,0,1)\}\) to a basis of \(\mathbb R^3\).`, ans: S`e.g. \(\{(1,0,1),(1,0,0),(0,1,0)\}\)`, fig: vecs3([[[1, 0, 1], "(1, 0, 1)"]], { len: 1.6 }) },
  { level: 2, q: S`For which \(k\) is \(\{(k,1),(4,k)\}\) NOT a basis of \(\mathbb R^2\)?`, ans: S`\(k=\pm2\)` },
  { level: 3, space: 5, q: S`For which \(t\) is \(\{(1,t,0),(0,1,t),(t,0,1)\}\) a basis of \(\mathbb R^3\)?`, ans: S`every \(t\ne-1\) (last pivot \(1+t^3\))` },
  { level: 3, space: 5, q: S`Prove: \(n\) independent vectors in \(\mathbb R^n\) span \(\mathbb R^n\).`, ans: S`\(n\) pivot columns in an \(n\times n\) matrix put a pivot in every row` },
  { level: 3, space: 5, q: S`Prove that removing any vector from a basis of \(\mathbb R^n\) leaves a set that does not span \(\mathbb R^n\).`, ans: S`\(n-1\) vectors cannot span \(\mathbb R^n\)` },
  { level: 3, space: 5, q: S`\(\{\vec u,\vec v,\vec w\}\) is a basis of \(\mathbb R^3\). Prove \(\{\vec u-\vec v,\ \vec v,\ \vec w+\vec u\}\) is also a basis.`, ans: S`\((a+c)\vec u+(b-a)\vec v+c\vec w=\vec 0\Rightarrow a=b=c=0\); three independent vectors` },
  { level: 3, space: 5, q: S`Find a basis of \(\mathbb R^3\) that contains \((1,2,3)\) and \((3,2,1)\).`, ans: S`e.g. add \(\vec e_1\): pivots in columns 1, 2, 3`, fig: vecs3([[[1, 2, 3], "(1, 2, 3)"], [[3, 2, 1], "(3, 2, 1)"]]) },
];

export const WS = {
  code: "4.6",
  title: "Bases of ℝⁿ",
  bigideas: S`A basis of \(\mathbb R^n\) is an independent spanning set. Because independent sets have at most \(n\) vectors and spanning sets at least \(n\), every basis has exactly \(n\) vectors, and for \(n\) vectors one row reduction (\(n\) pivots) decides everything. Spanning sets are trimmed to a basis with pivot columns; independent sets are extended by adding standard vectors.`,
  goals: ["State the definition of a basis.", "Use the standard basis.", "Prove every basis of \\(\\mathbb R^n\\) has \\(n\\) vectors.", "Test \\(n\\) vectors with one reduction.", "Trim and extend sets to bases."],
  curriculum: "Span and linear independence — bases of ℝⁿ",
  vocab: [["Basis", "independent + spanning"], ["Standard basis", "\\(\\vec e_1,\\dots,\\vec e_n\\)"], ["Size", "always \\(n\\)"], ["Trim", "keep pivot columns"], ["Extend", "add \\(\\vec e_i\\), keep pivot columns"]],
  hook: S`What is the smallest toolkit of directions from which every point of space can be reached — and why is it always exactly three?`,
  concepts: NOTES,
  summary: [
    S`Basis \(=\) independent \(+\) spanning.`,
    S`Every basis of \(\mathbb R^n\) has \(n\) vectors.`,
    S`\(n\) vectors: \(n\) pivots \(\iff\) basis.`,
    S`Trim spanning sets with pivot columns.`,
    S`Extend independent sets with \(\vec e_1,\dots,\vec e_n\).`,
  ],
  tips: ["Count vectors first: a basis of ℝⁿ has n.", "With n vectors, check only one property.", "Put the given vectors first when extending.", "Keep pivot columns of the original matrix.", "There are infinitely many bases."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
