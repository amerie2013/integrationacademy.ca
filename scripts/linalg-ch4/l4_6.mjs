// LINALG1 4.6 — Bases of ℝⁿ: the definition (independent + spanning), the standard basis, every basis of ℝⁿ has n
// vectors, the n-vector test (one property suffices), shrinking a spanning set and extending an independent set to
// a basis.
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, q, num, choice, hard, definition, theorem, am, sfig, steps } from "./lib.mjs";
import { vecs2, vecs3 } from "./ws/fig5.mjs";

export const TITLE = "4.6 Bases of ℝⁿ";
export const ID = "11a10001-0001-4001-8001-000000000406";

const S = String.raw;
const M = (m) => am(m, false);
const stdFig = sfig(vecs3([[[1, 0, 0], "e₁"], [[0, 1, 0], "e₂"], [[0, 0, 1], "e₃"]], { len: 1.6, raw: true }), "the standard basis of ℝ³");
const r2Fig = sfig(vecs2([[[1, 1], "b₁ = (1, 1)", "blue"], [[1, -1], "b₂ = (1, −1)", "red"]], { xmin: -2, xmax: 3, ymin: -2, ymax: 2 },
  { segs: [{ pts: [[-2, -2], [2, 2]], color: "#bfdbfe", w: 1.4, dash: true }, { pts: [[-2, 2], [2, -2]], color: "#fecaca", w: 1.4, dash: true }], raw: true }), "two non-parallel vectors: a basis of ℝ²");
const r3Fig = sfig(vecs3([[[1, 2, 0], "(1, 2, 0)"], [[0, 1, 3], "(0, 1, 3)"], [[1, 0, 1], "(1, 0, 1)"]], { raw: true }), "three independent vectors in ℝ³ form a basis");

export const blocks = () => [
  intro({
    icon: "🏛️",
    title: "Bases of ℝⁿ",
    overview: S`A <strong>basis</strong> of \(\mathbb R^n\) is a set that does both jobs at once: it <em>spans</em> \(\mathbb R^n\) (every vector can be built) and it is <em>linearly independent</em> (nothing is wasted). Since independent sets have at most \(n\) vectors and spanning sets at least \(n\), every basis of \(\mathbb R^n\) has exactly \(n\) vectors. That gives a shortcut: for exactly \(n\) vectors in \(\mathbb R^n\) it is enough to check <em>one</em> of the two properties. Any spanning set can be trimmed to a basis, and any independent set can be extended to one.`,
    goals: [
      "state the definition of a basis of \\(\\mathbb R^n\\);",
      "recognise the standard basis and explain why it is a basis;",
      "prove that every basis of \\(\\mathbb R^n\\) has \\(n\\) vectors;",
      "test \\(n\\) vectors in \\(\\mathbb R^n\\) with a single row reduction;",
      "trim a spanning set or extend an independent set to a basis.",
    ],
    outcomes: "span and linear independence: bases of ℝⁿ",
    prior: [
      [S`Independence test?`, S`Pivot in every column of \([\,\vec v_1\ \cdots\ \vec v_k\,]\).`],
      [S`Spanning test for \(\mathbb R^n\)?`, S`Pivot in every row.`],
      [S`Can 4 vectors in \(\mathbb R^3\) be independent?`, S`No — more than 3.`],
    ],
    words: [
      ["Basis", "independent spanning set", "\\(\\{\\vec e_1,\\vec e_2\\}\\) for \\(\\mathbb R^2\\)"],
      ["Standard basis", "\\(\\vec e_1,\\dots,\\vec e_n\\)", "the columns of \\(I_n\\)"],
      ["Size of a basis", "always \\(n\\) in \\(\\mathbb R^n\\)", "3 vectors in \\(\\mathbb R^3\\)"],
      ["Trim", "remove redundant vectors from a spanning set", "keep pivot columns"],
      ["Extend", "add vectors outside the span", "until there are \\(n\\)"],
    ],
  }),

  section("📌 The definition", S`
  ${definition("basis", S`A set \(\mathcal B=\{\vec v_1,\dots,\vec v_k\}\subseteq\mathbb R^n\) is a <strong>basis</strong> of \(\mathbb R^n\) if (1) \(\mathcal B\) is linearly independent and (2) \(\operatorname{Span}\mathcal B=\mathbb R^n\).`)}
  <p>The <strong>standard basis</strong> \(\{\vec e_1,\dots,\vec e_n\}\) (the columns of \(I_n\)) is a basis: \(I_n\) has a pivot in every row and every column. Each \(\vec x=(x_1,\dots,x_n)\) is \(x_1\vec e_1+\dots+x_n\vec e_n\).</p>
  ${stdFig}`),

  section("📌 Every basis has n vectors", S`
  ${theorem("size of a basis", S`Every basis of \(\mathbb R^n\) contains exactly \(n\) vectors.`, S`Let the basis have \(k\) vectors and \(A\) be the \(n\times k\) matrix of them. Independence gives a pivot in each of the \(k\) columns, so \(k\le n\) (at most one pivot per row). Spanning gives a pivot in each of the \(n\) rows, so \(n\le k\). Hence \(k=n\).`)}
  ${theorem("the n-vector test", S`For \(n\) vectors in \(\mathbb R^n\) with matrix \(A\): basis \(\iff\) independent \(\iff\) spanning \(\iff\) \(A\) has \(n\) pivots.`, S`\(A\) is \(n\times n\): a pivot in every column, a pivot in every row and \(n\) pivots are the same condition.`)}
  ${r2Fig}`),

  section("📌 Trimming and extending", S`
  ${theorem("trim and extend", S`(1) Any spanning set of \(\mathbb R^n\) contains a basis: keep the vectors in the pivot columns. (2) Any independent set in \(\mathbb R^n\) can be extended to a basis: append \(\vec e_1,\dots,\vec e_n\) to it, row reduce, and keep the pivot columns.`, S`(1) is 4.5's pivot-column theorem: the pivot columns are independent and span the same set, \(\mathbb R^n\). (2) The enlarged set spans \(\mathbb R^n\) (it contains the standard basis). Its first columns are independent, so each of them is a pivot column; the pivot columns then give a basis containing the original set.`)}
  ${keyIdea(S`Too many vectors: trim to the pivot columns. Too few: add standard vectors and trim. You always end with exactly \(n\).`)}
  ${r3Fig}`),

  section("📌 Explore", S`<p>Choose three vectors in \(\mathbb R^3\). With three pivots they form a basis; move one into the plane of the other two and the pivot count — and the basis — is lost.</p>`),
  widget("laSpan3", { init: [[1, 2, 0], [0, 1, 3], [1, 0, 1]] }),

  section("📌 Common mistakes", watchOut([
    "A basis needs BOTH independence and spanning — unless you have exactly n vectors in ℝⁿ.",
    "A basis of ℝⁿ always has exactly n vectors: 2 vectors can't be a basis of ℝ³, 4 can't either.",
    "There are many bases of ℝⁿ; the standard basis is just the simplest one.",
    "When trimming, keep the pivot columns of the ORIGINAL vectors.",
    "When extending, put the given independent vectors FIRST so they all become pivot columns.",
  ])),

  examples([
    ["A basis of ℝ²", S`Is \(\{(1,1),(1,-1)\}\) a basis of \(\mathbb R^2\)?`,
      [...steps([[1, 1], [1, -1]], [
        [S`Clear below the first pivot.`, ["R2-R1"]],
      ], { bar: false, intro: "Matrix with the vectors as columns" }).steps,
        S`Two pivots for two vectors in \(\mathbb R^2\): by the \(n\)-vector test, a basis.`],
      S`yes`, r2Fig],
    ["Three vectors in ℝ³", S`Is \(\{(1,2,0),(0,1,3),(1,0,1)\}\) a basis of \(\mathbb R^3\)?`,
      [...steps([[1, 0, 1], [2, 1, 0], [0, 3, 1]], [
        [S`Clear column 1.`, ["R2-2R1"]],
        [S`Clear column 2 below its pivot.`, ["R3-3R2"]],
      ], { bar: false, intro: "Matrix with the vectors as columns" }).steps,
        S`Pivots \(1,1,7\): three pivots, so the three vectors form a basis.`],
      S`yes`, r3Fig],
    ["Not a basis", S`Is \(\{(1,2,3),(4,5,6),(7,8,9)\}\) a basis of \(\mathbb R^3\)?`,
      [...steps([[1, 4, 7], [2, 5, 8], [3, 6, 9]], [
        [S`Clear column 1.`, ["R2-2R1", "R3-3R1"]],
        [S`Clear column 2 below its pivot.`, ["R3-2R2"]],
      ], { bar: false, intro: "Matrix with the vectors as columns" }).steps,
        S`Only two pivots: dependent (indeed \((7,8,9)=2(4,5,6)-(1,2,3)\)), so not a basis.`],
      S`no`],
    ["Trimming a spanning set", S`\(\{(1,0,1),(2,0,2),(0,1,1),(1,1,0),(3,1,2)\}\) spans \(\mathbb R^3\). Find a basis inside it.`,
      [...steps([[1, 2, 0, 1, 3], [0, 0, 1, 1, 1], [1, 2, 1, 0, 2]], [
        [S`Clear column 1.`, ["R3-R1"]],
        [S`Column 2 has no pivot. Clear below the pivot in column 3.`, ["R3-R2"]],
      ], { bar: false, intro: "Matrix with the vectors as columns" }).steps,
        S`Pivots in columns 1, 3 and 4.`, S`So \(\{(1,0,1),(0,1,1),(1,1,0)\}\) is a basis of \(\mathbb R^3\).`],
      S`\(\{(1,0,1),(0,1,1),(1,1,0)\}\)`],
    ["Extending an independent set", S`Extend \(\{(1,1,0),(0,1,1)\}\) to a basis of \(\mathbb R^3\).`,
      [...steps([[1, 0, 1, 0, 0], [1, 1, 0, 1, 0], [0, 1, 0, 0, 1]], [
        [S`Append \(\vec e_1,\vec e_2,\vec e_3\). Clear column 1.`, ["R2-R1"]],
        [S`Clear column 2 below its pivot.`, ["R3-R2"]],
      ], { bar: false, intro: "Matrix [ v₁ v₂ e₁ e₂ e₃ ]" }).steps,
        S`Pivots in columns 1, 2, 3.`, S`Basis: \(\{(1,1,0),(0,1,1),(1,0,0)\}\).`],
      S`add \(\vec e_1=(1,0,0)\)`],
  ]),

  practice([
    q("size", S`How many vectors does a basis of \(\mathbb R^5\) have?`, num(5),
      "Every basis of ℝⁿ has n vectors.", [S`\(n=5\).`], S`\(5\)`),
    q("basis?", S`Is \(\{(2,4),(1,2)\}\) a basis of \(\mathbb R^2\)?`, choice(["no", "yes"], 0),
      "Parallel?", [S`\((2,4)=2(1,2)\).`], S`no`),
    q("basis?", S`Is \(\{(1,0,0),(1,1,0),(1,1,1)\}\) a basis of \(\mathbb R^3\)?`, choice(["yes", "no"], 0),
      "Triangular pattern.", [S`The matrix is upper triangular with 1s on the diagonal: 3 pivots.`], S`yes`),
    q("parameter", S`For which \(k\) is \(\{(1,k),(2,6)\}\) NOT a basis of \(\mathbb R^2\)?`, num(3),
      "Parallel when (1, k) = ½(2, 6).", [S`\(R_2-kR_1\): \(6-2k=0\).`], S`\(3\)`),
    q("count", S`Can 3 vectors that span \(\mathbb R^3\) be dependent?`, choice(["no", "yes"], 0),
      "n-vector test.", [S`Spanning with 3 vectors means 3 pivots: independent.`], S`no`),
  ]),

  ...hard([
    ["A basis depending on a parameter", S`For which \(a\) is \(\{(1,a,0),(a,1,0),(0,0,1)\}\) a basis of \(\mathbb R^3\)?`,
      [S`Columns \(${M([[1, "a", 0], ["a", 1, 0], [0, 0, 1]])}\). \(R_2-aR_1\): \((0,\ 1-a^2,\ 0)\).`, S`Pivots: 1 in column 1, \(1-a^2\) in column 2 (if nonzero), 1 in column 3.`, S`Three pivots exactly when \(1-a^2\ne0\): \(a\ne\pm1\).`, S`Check \(a=1\): \((1,1,0)\) appears twice — clearly dependent.`],
      S`all \(a\) except \(\pm1\)`],
    ["Bases and unique representation", S`Prove: if \(\{\vec v_1,\dots,\vec v_n\}\) is a basis of \(\mathbb R^n\), every \(\vec x\) is a combination of the \(\vec v_i\) in exactly one way.`,
      [S`Existence: the basis spans \(\mathbb R^n\).`, S`Uniqueness: if \(\sum c_i\vec v_i=\vec x=\sum d_i\vec v_i\), subtract: \(\sum(c_i-d_i)\vec v_i=\vec 0\).`, S`Independence forces \(c_i-d_i=0\) for every \(i\).`],
      S`spanning gives existence, independence gives uniqueness`],
  ], [
    q("hard", S`For which \(t\) is \(\{(1,0,1),(0,1,t),(1,1,2)\}\) NOT a basis of \(\mathbb R^3\)?`, num(1),
      "Reduce: third pivot.", [S`Columns \(${M([[1, 0, 1], [0, 1, 1], [1, "t", 2]])}\): \(R_3-R_1\to(0,t,1)\), \(R_3-tR_2\to(0,0,1-t)\).`], S`\(1\)`),
    q("hard", S`A spanning set of \(\mathbb R^4\) has 7 vectors. How many must be removed to get a basis?`, num(3),
      "A basis of ℝ⁴ has 4 vectors.", [S`\(7-4=3\).`], S`\(3\)`),
    q("hard", S`An independent set in \(\mathbb R^6\) has 2 vectors. How many must be added to get a basis?`, num(4),
      "6 − 2.", [S`A basis of \(\mathbb R^6\) has 6 vectors.`], S`\(4\)`),
  ]),

  wrapUp({
    qas: [
      ["What is a basis of ℝⁿ?", "An independent set that spans ℝⁿ."],
      ["How many vectors are in a basis of ℝⁿ?", "Exactly n."],
      ["How do I test n vectors in ℝⁿ?", "One row reduction: n pivots ⇔ basis."],
      ["How do I get a basis from a spanning set?", "Keep the pivot columns of the original matrix."],
      ["How do I extend an independent set to a basis?", "Append e₁, …, eₙ after it, reduce, and keep the pivot columns."],
    ],
    summary: [
      "Basis = independent + spanning.",
      "Every basis of ℝⁿ has n vectors.",
      "n vectors in ℝⁿ: n pivots ⇔ basis.",
      "Trim spanning sets; extend independent sets.",
      "In a basis every vector has a unique representation.",
    ],
    next: "4.7 uses that unique representation: the weights become the coordinates of a vector in the basis.",
  }),
];
