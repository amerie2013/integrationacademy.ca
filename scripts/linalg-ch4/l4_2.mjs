// LINALG1 4.2 — Spanning Sets of ℝⁿ: when do v₁, …, vₖ span all of ℝⁿ (a pivot in every row of [v₁ … vₖ]),
// why fewer than n vectors never span ℝⁿ, describing a smaller span by equations (row reduce with a general b),
// and how adding or removing vectors changes a span.
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, q, num, choice, hard, definition, theorem, am, sfig, steps } from "./lib.mjs";
import { planeFig, vecs3 } from "./ws/fig5.mjs";
import { rowPic } from "./ws/fig3.mjs";

export const TITLE = "4.2 Spanning Sets of ℝⁿ";
export const ID = "11a10001-0001-4001-8001-000000000402";

const S = String.raw;
const M = (m) => am(m, false);
const pivFig = sfig(rowPic([[[["■", "*", "*", "*"], [0, "■", "*", "*"], [0, 0, 0, "■"]], { label: "pivot in every row: spans ℝ³" }], " ", [[["■", "*", "*"], [0, "■", "*"], [0, 0, 0]], { label: "zero row: does not span ℝ³" }]]),
  "echelon form of A = [v₁ … vₖ]: span ℝⁿ ⇔ no zero row");
const flatFig = sfig(planeFig([1, 0, 1], [2, 1, 0], { lu: "v₁ = (1, 0, 1)", lv: "v₂ = (2, 1, 0)", more: [[[0, 1, -2], "v₃ = v₂ − 2v₁", "green"]], raw: true }), "three vectors in one plane span only that plane");
const fullFig = sfig(vecs3([[[1, 1, 0], "(1, 1, 0)"], [[0, 1, 1], "(0, 1, 1)"], [[1, 0, 1], "(1, 0, 1)"]], { raw: true }), "three vectors not in one plane span ℝ³");
const condFig = sfig(planeFig([1, 2, -1], [2, 5, 0], { lu: "(1, 2, −1)", lv: "(2, 5, 0)", raw: true }), "the span is the plane 5b₁ − 2b₂ + b₃ = 0");

export const blocks = () => [
  intro({
    icon: "🕸️",
    title: "Spanning Sets of ℝⁿ",
    overview: S`When do some vectors reach <em>every</em> point of \(\mathbb R^n\)? Put them as the columns of a matrix \(A\). They span \(\mathbb R^n\) exactly when \(A\vec x=\vec b\) is consistent for every \(\vec b\), and that happens exactly when an echelon form of \(A\) has a pivot in every row. Counting pivots shows at once that fewer than \(n\) vectors can never span \(\mathbb R^n\). When a set does not span everything, row reducing with a general right side \(\vec b\) produces the equations that describe the span.`,
    goals: [
      "decide whether given vectors span \\(\\mathbb R^n\\) using pivots;",
      "explain why fewer than \\(n\\) vectors cannot span \\(\\mathbb R^n\\);",
      "find equations describing a span by reducing \\([A\\mid\\vec b]\\) with a general \\(\\vec b\\);",
      "recognise when adding a vector does or does not enlarge a span;",
      "connect spanning to the consistency of \\(A\\vec x=\\vec b\\).",
    ],
    outcomes: "span and linear independence: spanning sets of ℝⁿ",
    prior: [
      [S`Is \((1,3,2)\in\operatorname{Span}\{(1,1,0),(0,1,1)\}\)?`, S`Yes: \((1,1,0)+2(0,1,1)\).`],
      [S`How many pivots can a \(3\times2\) matrix have at most?`, S`2 — at most one per column.`],
      [S`What is a pivot position?`, S`The position of a leading entry in an echelon form.`],
    ],
    words: [
      ["Spans \\(\\mathbb R^n\\)", "every \\(\\vec b\\in\\mathbb R^n\\) is a combination", "\\(\\{\\vec e_1,\\vec e_2\\}\\) spans \\(\\mathbb R^2\\)"],
      ["Pivot in every row", "no zero row in an echelon form of \\(A\\)", "test for spanning"],
      ["General right side", "reduce \\([A\\mid\\vec b]\\) with letters \\(b_i\\)", "gives the span's equations"],
      ["Redundant vector", "one already in the span of the others", "adding it changes nothing"],
      ["Consistent for all \\(\\vec b\\)", "\\(A\\vec x=\\vec b\\) always solvable", "same as spanning"],
    ],
  }),

  section("📌 The spanning test", S`
  ${theorem("spanning ℝⁿ", S`Let \(A=[\,\vec v_1\ \cdots\ \vec v_k\,]\) be \(n\times k\). The following are equivalent: (a) \(\operatorname{Span}\{\vec v_1,\dots,\vec v_k\}=\mathbb R^n\); (b) \(A\vec x=\vec b\) is consistent for every \(\vec b\in\mathbb R^n\); (c) an echelon form of \(A\) has a pivot in every row.`, S`(a)⇔(b): \(A\vec x=x_1\vec v_1+\dots+x_k\vec v_k\), so \(A\vec x=\vec b\) is solvable exactly when \(\vec b\) is in the span. (c)⇒(b): with a pivot in every row, the reduced \([A\mid\vec b]\) has no row \([\,0\cdots0\mid c\,]\). (b)⇒(c): if an echelon form \(U\) had a zero last row, choose the right side \(\vec e_n\) for \(U\) and undo the row operations to get a \(\vec b\) whose system is inconsistent.`)}
  ${pivFig}
  ${keyIdea(S`At most one pivot per column, so \(A\) has at most \(k\) pivots. A pivot in each of \(n\) rows needs \(k\ge n\): <strong>fewer than \(n\) vectors never span \(\mathbb R^n\)</strong>.`)}`),

  section("📌 Pictures in ℝ³", S`
  <p>Three vectors span \(\mathbb R^3\) exactly when they do not lie in one plane through the origin:</p>
  ${fullFig}
  ${flatFig}`),

  section("📌 Describing a smaller span", S`
  ${definition("equations of a span", S`To describe \(\operatorname{Span}\{\vec v_1,\dots,\vec v_k\}\) when it is not all of \(\mathbb R^n\): row reduce \([\,\vec v_1\ \cdots\ \vec v_k\mid\vec b\,]\) with \(\vec b=(b_1,\dots,b_n)\) kept as letters. Each zero row of the coefficient part gives a condition "expression in the \(b_i\) = 0"; together these conditions are the equations of the span.`)}
  ${condFig}
  ${theorem("adding a vector", S`\(\operatorname{Span}\{\vec v_1,\dots,\vec v_k,\vec w\}=\operatorname{Span}\{\vec v_1,\dots,\vec v_k\}\) exactly when \(\vec w\in\operatorname{Span}\{\vec v_1,\dots,\vec v_k\}\).`, S`If \(\vec w=\sum a_i\vec v_i\), then \(\sum c_i\vec v_i+d\vec w=\sum(c_i+da_i)\vec v_i\), so nothing new is reached. Conversely, if the spans are equal, \(\vec w\) lies in the larger one, hence in the smaller one.`)}`),

  section("📌 Explore", S`<p>Choose three vectors in \(\mathbb R^3\). The explorer row reduces \([\,\vec v_1\ \vec v_2\ \vec v_3\,]\), counts the pivots, and says whether the span is a line, a plane or all of \(\mathbb R^3\).</p>`),
  widget("laSpan3", { init: [[1, 0, 1], [2, 1, 0], [0, 1, -2]] }),

  section("📌 Common mistakes", watchOut([
    "Spanning needs a pivot in every ROW; a pivot in every column is the test for independence (4.3).",
    "Two vectors can never span ℝ³, however you choose them.",
    "Many vectors do not automatically span: (1, 1, 1), (2, 2, 2), (3, 3, 3), (4, 4, 4) span only a line.",
    "Keep b as letters during the reduction — the conditions come from the last column.",
    "Adding a vector that is already in the span does not make the span larger.",
  ])),

  examples([
    ["Two vectors in ℝ²", S`Do \((1,2)\) and \((3,4)\) span \(\mathbb R^2\)?`,
      [...steps([[1, 3], [2, 4]], [
        [S`Clear below the first pivot.`, ["R2-2R1"]],
      ], { bar: false, intro: "Put the vectors in the columns" }).steps,
        S`A pivot in row 1 (the 1) and in row 2 (the \(-2\)): a pivot in every row.`, S`So every \(\vec b\in\mathbb R^2\) is a combination of \((1,2)\) and \((3,4)\).`],
      S`yes, they span \(\mathbb R^2\)`],
    ["Three vectors that do not span ℝ³", S`Do \(\vec v_1=(1,0,1)\), \(\vec v_2=(2,1,0)\), \(\vec v_3=(0,1,-2)\) span \(\mathbb R^3\)?`,
      [...steps([[1, 2, 0], [0, 1, 1], [1, 0, -2]], [
        [S`Clear column 1.`, ["R3-R1"]],
        [S`Clear column 2 below its pivot.`, ["R3+2R2"]],
      ], { bar: false, intro: "Put the vectors in the columns" }).steps,
        S`Row 3 is zero: only two pivots, so the vectors do not span \(\mathbb R^3\).`, S`In fact \(\vec v_3=\vec v_2-2\vec v_1\): \((2,1,0)-(2,0,2)=(0,1,-2)\) ✓, so all three lie in one plane.`],
      S`no — they span only a plane`, flatFig],
    ["The equation of a span", S`Find an equation describing \(\operatorname{Span}\{(1,2,-1),(2,5,0)\}\).`,
      [S`Reduce with a general right side: \[${am([[1, 2, "b_1"], [2, 5, "b_2"], [-1, 0, "b_3"]])}\]`,
        S`Clear column 1. Operations: \(R_2-2R_1,\ R_3+R_1\). \[\longrightarrow\ ${am([[1, 2, "b_1"], [0, 1, "b_2-2b_1"], [0, 2, "b_3+b_1"]])}\]`,
        S`Clear column 2 below its pivot. Operation: \(R_3-2R_2\). \[\longrightarrow\ ${am([[1, 2, "b_1"], [0, 1, "b_2-2b_1"], [0, 0, "5b_1-2b_2+b_3"]])}\]`,
        S`Consistent exactly when \(5b_1-2b_2+b_3=0\): that is the plane.`, S`Check the spanning vectors: \(5-4-1=0\) ✓ and \(10-10+0=0\) ✓.`],
      S`\(5x_1-2x_2+x_3=0\)`, condFig],
    ["Counting vectors", S`Can \(\{(1,0,2,1),(0,1,1,3),(2,1,0,0)\}\) span \(\mathbb R^4\)?`,
      [S`\(A\) is \(4\times3\): at most one pivot per column, so at most 3 pivots.`, S`A pivot in each of the 4 rows is impossible.`, S`No computation is needed: 3 vectors never span \(\mathbb R^4\).`],
      S`no — three vectors cannot span \(\mathbb R^4\)`],
    ["Four vectors in ℝ³", S`Do \((1,1,0)\), \((0,1,1)\), \((1,0,1)\), \((1,1,1)\) span \(\mathbb R^3\)?`,
      [...steps([[1, 0, 1, 1], [1, 1, 0, 1], [0, 1, 1, 1]], [
        [S`Clear column 1.`, ["R2-R1"]],
        [S`Clear column 2 below its pivot.`, ["R3-R2"]],
      ], { bar: false, intro: "Put the four vectors in the columns" }).steps,
        S`Pivots in rows 1, 2 and 3 (columns 1, 2, 3): a pivot in every row.`, S`So they span \(\mathbb R^3\) — in fact the first three already do, and the fourth is redundant.`],
      S`yes`, fullFig],
  ]),

  practice([
    q("pivots", S`An echelon form of \(A=[\,\vec v_1\ \vec v_2\ \vec v_3\ \vec v_4\,]\) (\(3\times4\)) has 3 pivots. Do the \(\vec v_i\) span \(\mathbb R^3\)?`, choice(["yes", "no"], 0),
      "3 rows, 3 pivots.", [S`A pivot in every row.`], S`yes`),
    q("count", S`What is the least number of vectors that can span \(\mathbb R^5\)?`, num(5),
      "One pivot per row is needed.", [S`At most one pivot per column.`], S`\(5\)`),
    q("span?", S`Do \((2,-1)\) and \((-6,3)\) span \(\mathbb R^2\)?`, choice(["no", "yes"], 0),
      "Parallel?", [S`\((-6,3)=-3(2,-1)\): they span a line.`], S`no`),
    q("parameter", S`For which \(k\) do \((1,2)\) and \((3,k)\) fail to span \(\mathbb R^2\)?`, num(6),
      "Reduce: R₂ − 2R₁.", [S`Second pivot \(k-6\).`], S`\(6\)`),
    q("condition", S`\(\operatorname{Span}\{(1,1,0),(0,0,1)\}\) is the plane \(x_1-x_2=0\). Is \((3,3,-7)\) in it?`, choice(["yes", "no"], 0),
      "Plug in.", [S`\(3-3=0\) ✓.`], S`yes`),
  ]),

  ...hard([
    ["A parameter that decides spanning", S`For which \(a\) do \((1,1,a)\), \((1,a,1)\), \((a,1,1)\) span \(\mathbb R^3\)?`,
      [S`Columns: \(${M([[1, 1, "a"], [1, "a", 1], ["a", 1, 1]])}\).`, S`\(R_2-R_1\): \((0,\ a-1,\ 1-a)\). \(R_3-aR_1\): \((0,\ 1-a,\ 1-a^2)\).`, S`\(R_3+R_2\): \((0,\ 0,\ (1-a)+(1-a^2))=(0,0,(1-a)(2+a))\).`, S`Pivot in every row needs \(a-1\ne0\) (row 2) and \((1-a)(2+a)\ne0\) (row 3): \(a\ne1\) and \(a\ne-2\).`, S`Check \(a=-2\): \((1,1,-2)+(1,-2,1)+(-2,1,1)=\vec 0\), so the three are in one plane.`],
      S`all \(a\) except \(1\) and \(-2\)`],
    ["Why fewer than n vectors never span", S`Prove that \(k\lt n\) vectors in \(\mathbb R^n\) cannot span \(\mathbb R^n\).`,
      [S`Let \(A=[\,\vec v_1\ \cdots\ \vec v_k\,]\), an \(n\times k\) matrix.`, S`Each pivot sits in its own column, so an echelon form has at most \(k\lt n\) pivots.`, S`Some row has no pivot, so by the spanning test the vectors do not span \(\mathbb R^n\).`],
      S`at most \(k\lt n\) pivots, so some row has none`],
  ], [
    q("hard", S`For which \(h\) do \((1,0,h)\), \((0,1,2)\), \((1,1,5)\) fail to span \(\mathbb R^3\)?`, num(3),
      "The third column becomes (1, 1, 5 − h) after clearing; compare with column 2.", [S`\(R_3-hR_1\), \(R_3-2R_2\): last pivot \(5-h-2=3-h\).`], S`\(3\)`),
    q("hard", S`\(\operatorname{Span}\{(1,2,0),(0,1,1)\}\) has equation \(ax_1-x_2+x_3=0\). Find \(a\).`, num(2),
      "Plug in both vectors.", [S`\((1,2,0)\): \(a-2=0\). \((0,1,1)\): \(-1+1=0\) ✓.`], S`\(2\)`),
    q("hard", S`\(A\) is \(4\times6\) and \(A\vec x=\vec b\) is consistent for every \(\vec b\). How many pivots does \(A\) have?`, num(4),
      "A pivot in every row.", [S`4 rows, one pivot each.`], S`\(4\)`),
  ]),

  wrapUp({
    qas: [
      ["When do v₁, …, vₖ span ℝⁿ?", "When an echelon form of [v₁ … vₖ] has a pivot in every row."],
      ["What does that say about Ax = b?", "It is consistent for every b."],
      ["Can 2 vectors span ℝ³?", "Never: at most 2 pivots for 3 rows."],
      ["How do I describe a smaller span?", "Row reduce [A | b] with b in letters; each zero row gives an equation in the bᵢ."],
      ["When does adding w change the span?", "Only when w is not already in the span."],
    ],
    summary: [
      "Span = ℝⁿ ⇔ pivot in every row ⇔ Ax = b always consistent.",
      "Fewer than n vectors never span ℝⁿ.",
      "Zero rows of [A | b] give the equations of the span.",
      "In ℝ³: three vectors span ℝ³ unless they lie in one plane.",
      "A redundant vector does not enlarge the span.",
    ],
    next: "4.3 turns to the opposite question: when does a set contain no redundant vector at all — linear independence.",
  }),
];
