// LINALG1 4.4 — Independence: Theorems and Geometry: more than n vectors in ℝⁿ are dependent, subsets and supersets,
// the geometry (parallel / coplanar), n vectors in ℝⁿ (independent ⇔ spanning), and extending an independent set by
// a vector outside its span.
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, q, num, choice, hard, definition, theorem, am, cv, sfig, steps } from "./lib.mjs";
import { planeFig, vecs3, vecs2 } from "./ws/fig5.mjs";
import { rowPic } from "./ws/fig3.mjs";

export const TITLE = "4.4 Independence: Theorems and Geometry";
export const ID = "11a10001-0001-4001-8001-000000000404";

const S = String.raw;
const M = (m) => am(m, false);
const wideFig = sfig(rowPic([[[["■", "*", "*", "*"], [0, "■", "*", "*"], [0, 0, "■", "*"]], { label: "3 × 4: column 4 has no pivot" }]]), "more columns than rows: some column is free, so the vectors are dependent");
const coplFig = sfig(planeFig([1, 1, 0], [0, 1, 1], { lu: "(1, 1, 0)", lv: "(0, 1, 1)", more: [[[1, 2, 1], "(1, 2, 1)", "green"]], raw: true }), "three vectors in one plane through 0 are dependent");
const spaceFig = sfig(vecs3([[[2, 1, 1], "(2, 1, 1)"], [[1, 2, 1], "(1, 2, 1)"], [[1, 1, 2], "(1, 1, 2)"]], { raw: true }), "three vectors not in one plane: independent and spanning ℝ³");
const r2Fig = sfig(vecs2([[[2, 1], "u", "blue"], [[1, 3], "v", "red"], [[-1, 2], "w", "green"]], { xmin: -2, xmax: 3, ymin: -1, ymax: 4 }, { raw: true }), "any three vectors in ℝ² are dependent");

export const blocks = () => [
  intro({
    icon: "🧱",
    title: "Independence: Theorems and Geometry",
    overview: S`Row reduction always decides independence, but a few theorems often decide it without any work. In \(\mathbb R^n\) you can never have more than \(n\) independent vectors. Removing vectors from an independent set keeps it independent; adding vectors to a dependent set keeps it dependent. Geometrically, two vectors are independent when they are not parallel, and three vectors in \(\mathbb R^3\) when they do not lie in one plane. For exactly \(n\) vectors in \(\mathbb R^n\) the two big properties coincide: independent ⇔ spanning.`,
    goals: [
      "use the counting theorem: more than \\(n\\) vectors in \\(\\mathbb R^n\\) are dependent;",
      "decide independence from subsets and supersets;",
      "interpret independence as non-parallel / non-coplanar;",
      "show that \\(n\\) vectors in \\(\\mathbb R^n\\) are independent exactly when they span \\(\\mathbb R^n\\);",
      "extend an independent set by a vector outside its span.",
    ],
    outcomes: "span and linear independence: theorems on independence",
    prior: [
      [S`Independence test for \([\,\vec v_1\ \cdots\ \vec v_k\,]\)?`, S`A pivot in every column.`],
      [S`Spanning test for \(\mathbb R^n\)?`, S`A pivot in every row.`],
      [S`How many pivots can a \(3\times5\) matrix have?`, S`At most 3.`],
    ],
    words: [
      ["Counting theorem", "\\(k\\gt n\\) vectors in \\(\\mathbb R^n\\) are dependent", "4 vectors in \\(\\mathbb R^3\\)"],
      ["Subset", "part of a set", "subsets of independent sets are independent"],
      ["Coplanar", "lying in one plane through 0", "dependent in \\(\\mathbb R^3\\)"],
      ["Square case", "\\(n\\) vectors in \\(\\mathbb R^n\\)", "independent ⇔ spanning"],
      ["Extension", "add \\(\\vec w\\notin\\operatorname{Span}B\\)", "stays independent"],
    ],
  }),

  section("📌 Too many vectors", S`
  ${theorem("counting", S`Any set of \(k\gt n\) vectors in \(\mathbb R^n\) is linearly dependent.`, S`\(A=[\,\vec v_1\ \cdots\ \vec v_k\,]\) is \(n\times k\). There is at most one pivot per row, so at most \(n\lt k\) pivots; some column has no pivot, its variable is free, and \(A\vec c=\vec 0\) has a nontrivial solution.`)}
  ${wideFig}
  ${r2Fig}`),

  section("📌 Subsets, supersets and geometry", S`
  ${theorem("subsets and supersets", S`If a set is independent, every subset of it is independent. If a set is dependent, every set containing it is dependent.`, S`A relation among some of the vectors is also a relation among all of them (give the others weight 0). So a nontrivial relation in a subset gives one in the whole set; contrapositively, an independent set has independent subsets.`)}
  <p>In pictures: \(\{\vec u,\vec v\}\) is independent ⇔ not parallel; three vectors in \(\mathbb R^3\) are independent ⇔ they do not lie in a common plane through the origin.</p>
  ${coplFig}`),

  section("📌 n vectors in ℝⁿ", S`
  ${theorem("the square case", S`Let \(\vec v_1,\dots,\vec v_n\) be \(n\) vectors in \(\mathbb R^n\) and \(A=[\,\vec v_1\ \cdots\ \vec v_n\,]\). Then they are linearly independent \(\iff\) they span \(\mathbb R^n\) \(\iff\) \(A\) has \(n\) pivots.`, S`\(A\) is square, so "a pivot in every column" and "a pivot in every row" both mean exactly \(n\) pivots.`)}
  ${spaceFig}
  ${theorem("extending an independent set", S`If \(\{\vec v_1,\dots,\vec v_k\}\) is independent and \(\vec w\notin\operatorname{Span}\{\vec v_1,\dots,\vec v_k\}\), then \(\{\vec v_1,\dots,\vec v_k,\vec w\}\) is independent.`, S`Suppose \(c_1\vec v_1+\dots+c_k\vec v_k+d\vec w=\vec 0\). If \(d\ne0\), then \(\vec w=-\tfrac1d(c_1\vec v_1+\dots)\) is in the span — impossible. So \(d=0\), and then independence of the \(\vec v_i\) gives all \(c_i=0\).`)}
  ${keyIdea(S`Before row reducing, ask: are there more than \(n\) vectors? Is \(\vec 0\) in the set? Are two of them parallel? Any yes means dependent.`)}`),

  section("📌 Explore", S`<p>Drag three vectors in \(\mathbb R^3\) into one plane and watch the pivot count drop from 3 to 2 — the set becomes dependent and stops spanning at the same moment.</p>`),
  widget("laSpan3", { init: [[2, 1, 1], [1, 2, 1], [1, 1, 2]] }),

  section("📌 Common mistakes", watchOut([
    "More than n vectors in ℝⁿ are ALWAYS dependent — no computation needed.",
    "Fewer than n vectors are NOT automatically independent: (1, 2, 3) and (2, 4, 6) are dependent.",
    "Three vectors can be dependent even if no two are parallel (they may share a plane).",
    "The 'independent ⇔ spanning' shortcut needs exactly n vectors in ℝⁿ.",
    "A subset of a dependent set may well be independent.",
  ])),

  examples([
    ["Four vectors in ℝ³", S`Show that \(\vec v_1=(1,0,0)\), \(\vec v_2=(0,1,0)\), \(\vec v_3=(1,1,1)\), \(\vec v_4=(2,3,1)\) are dependent and find a relation.`,
      [S`Four vectors in \(\mathbb R^3\): dependent by the counting theorem. To find a relation, reduce.`, ...steps([[1, 0, 1, 2], [0, 1, 1, 3], [0, 0, 1, 1]], [
        [S`Already in echelon form; clear above the third pivot.`, ["R1-R3", "R2-R3"]],
      ], { bar: false, intro: "Matrix with the vectors as columns" }).steps,
        S`Column 4 of the RREF is \((1,2,1)\): \(\vec v_4=\vec v_1+2\vec v_2+\vec v_3\).`, S`Check: \((1,0,0)+(0,2,0)+(1,1,1)=(2,3,1)\) ✓.`],
      S`\(\vec v_1+2\vec v_2+\vec v_3-\vec v_4=\vec 0\)`, wideFig],
    ["Coplanar vectors", S`Are \((1,1,0)\), \((0,1,1)\), \((1,2,1)\) independent?`,
      [...steps([[1, 0, 1], [1, 1, 2], [0, 1, 1]], [
        [S`Clear column 1.`, ["R2-R1"]],
        [S`Clear column 2 below its pivot.`, ["R3-R2"]],
      ], { bar: false, intro: "Matrix with the vectors as columns" }).steps,
        S`Column 3 has no pivot: dependent. The RREF column \((1,1,0)\) says \(\vec v_3=\vec v_1+\vec v_2\): \(${cv(1, 1, 0)}+${cv(0, 1, 1)}=${cv(1, 2, 1)}\) ✓.`,
        S`So the three vectors lie in one plane through \(\vec 0\) — although no two of them are parallel. For three vectors, the pairwise test is not enough.`],
      S`dependent (coplanar)`, coplFig],
    ["Three vectors in ℝ³: both properties at once", S`Do \((2,1,1)\), \((1,2,1)\), \((1,1,2)\) form an independent set? Do they span \(\mathbb R^3\)?`,
      [...steps([[2, 1, 1], [1, 2, 1], [1, 1, 2]], [
        [S`Bring a 1 up as the first pivot.`, ["R1<->R2"]],
        [S`Clear column 1.`, ["R2-2R1", "R3-R1"]],
        [S`Use the simpler row as the second pivot.`, ["R2<->R3"]],
        [S`Clear column 2 below its pivot.`, ["R3-3R2"]],
      ], { bar: false, intro: "Matrix with the vectors as columns" }).steps,
        S`Three pivots in a \(3\times3\) matrix.`, S`By the square case: independent <em>and</em> spanning.`],
      S`yes to both`, spaceFig],
    ["Three vectors in ℝ⁴", S`Are \((1,0,1,2)\), \((0,1,1,1)\), \((1,1,0,1)\) independent?`,
      [...steps([[1, 0, 1], [0, 1, 1], [1, 1, 0], [2, 1, 1]], [
        [S`Clear column 1.`, ["R3-R1", "R4-2R1"]],
        [S`Clear column 2 below its pivot.`, ["R3-R2", "R4-R2"]],
        [S`Clear column 3 below its pivot.`, ["R4-R3"]],
      ], { bar: false, intro: "Matrix with the vectors as columns" }).steps,
        S`A pivot in each of the 3 columns: independent. (They cannot span \(\mathbb R^4\): only 3 pivots for 4 rows.)`],
      S`independent`],
    ["Sums of independent vectors", S`\(\{\vec u,\vec v,\vec w\}\) is independent. Prove \(\{\vec u+\vec v,\ \vec v+\vec w,\ \vec u+\vec w\}\) is independent.`,
      [S`Suppose \(a(\vec u+\vec v)+b(\vec v+\vec w)+c(\vec u+\vec w)=\vec 0\).`, S`Regroup: \((a+c)\vec u+(a+b)\vec v+(b+c)\vec w=\vec 0\).`, S`Independence of \(\vec u,\vec v,\vec w\): \(a+c=0\), \(a+b=0\), \(b+c=0\).`, S`Adding all three: \(2(a+b+c)=0\), so \(a+b+c=0\); subtracting each equation gives \(b=0\), \(c=0\), \(a=0\).`],
      S`only the trivial solution: independent`],
  ]),

  practice([
    q("count", S`Five vectors in \(\mathbb R^4\) are:`, choice(["always dependent", "always independent", "independent if no two are parallel", "independent if none is 0"], 0),
      "Counting theorem.", [S`\(5\gt4\).`], S`always dependent`),
    q("max", S`What is the largest possible size of an independent set in \(\mathbb R^6\)?`, num(6),
      "At most one pivot per row.", [S`The standard basis has 6 vectors.`], S`\(6\)`),
    q("subset", S`\(\{\vec a,\vec b,\vec c,\vec d\}\) is independent. Is \(\{\vec b,\vec d\}\) independent?`, choice(["yes", "no", "cannot tell"], 0),
      "Subsets of independent sets.", [S`A relation in the subset would be one in the whole set.`], S`yes`),
    q("square", S`Three vectors in \(\mathbb R^3\) span \(\mathbb R^3\). Are they independent?`, choice(["yes", "no", "cannot tell"], 0),
      "Square case.", [S`3 pivots in a \(3\times3\) matrix.`], S`yes`),
    q("pivots", S`Four vectors in \(\mathbb R^3\) have a matrix with 3 pivots. How many free variables does \(A\vec c=\vec 0\) have?`, num(1),
      "Columns minus pivots.", [S`\(4-3=1\).`], S`\(1\)`),
  ]),

  ...hard([
    ["Choosing a vector to extend a set", S`Find a vector \(\vec w\) such that \(\{(1,2,0),(0,1,1),\vec w\}\) is an independent set of three vectors in \(\mathbb R^3\), and justify.`,
      [S`<strong>Find the span.</strong> Reduce \([\,\vec v_1\ \vec v_2\mid\vec b\,]\) with a general \(\vec b\): \[${am([[1, 0, "b_1"], [2, 1, "b_2"], [0, 1, "b_3"]])}\]`,
        S`Clear column 1. Operation: \(R_2\to R_2-2R_1\). \[\longrightarrow\ ${am([[1, 0, "b_1"], [0, 1, "b_2-2b_1"], [0, 1, "b_3"]])}\]`,
        S`Clear column 2 below its pivot. Operation: \(R_3\to R_3-R_2\). \[\longrightarrow\ ${am([[1, 0, "b_1"], [0, 1, "b_2-2b_1"], [0, 0, "2b_1-b_2+b_3"]])}\]`,
        S`The span is the plane \(2x_1-x_2+x_3=0\). For \(\vec w=\vec e_1=(1,0,0)\): \(2-0+0=2\ne0\), so \(\vec w\) is outside the span.`,
        ...steps([[1, 0, 1], [2, 1, 0], [0, 1, 0]], [
          [S`<strong>Confirm.</strong> Clear column 1.`, ["R2-2R1"]],
          [S`Clear column 2 below its pivot.`, ["R3-R2"]],
        ], { bar: false, intro: "Matrix [ v₁ v₂ w ]" }).steps,
        S`Three pivots: independent, as the extension theorem predicts (and, being three in \(\mathbb R^3\), they also span).`],
      S`e.g. \(\vec w=(1,0,0)\)`],
    ["At most n independent vectors", S`Explain, using pivots, why an independent set in \(\mathbb R^n\) has at most \(n\) vectors, and why a spanning set of \(\mathbb R^n\) has at least \(n\) vectors.`,
      [S`Independent: a pivot in every one of the \(k\) columns, but at most \(n\) pivots fit (one per row), so \(k\le n\).`, S`Spanning: a pivot in every one of the \(n\) rows, but at most \(k\) pivots fit (one per column), so \(n\le k\).`, S`So in \(\mathbb R^n\): independent sets have \(\le n\) vectors, spanning sets \(\ge n\), and a set that is both has exactly \(n\).`],
      S`independent ⇒ \(k\le n\); spanning ⇒ \(k\ge n\)`],
  ], [
    q("hard", S`For which \(c\) are \((1,1,0)\), \((1,0,1)\), \((0,1,c)\) dependent?`, num(-1),
      "Reduce with c as a letter.", [S`Columns \(${M([[1, 1, 0], [1, 0, 1], [0, 1, "c"]])}\): \(R_2-R_1\to(0,-1,1)\); \(R_3+R_2\to(0,0,c+1)\).`], S`\(-1\)`),
    q("hard", S`\(\{\vec v_1,\dots,\vec v_7\}\subseteq\mathbb R^5\). At least how many free variables does \(A\vec c=\vec 0\) have?`, num(2),
      "At most 5 pivots for 7 columns.", [S`\(7-5=2\).`], S`\(2\)`),
    q("hard", S`\(\{\vec u,\vec v\}\) is independent. Is \(\{\vec u-\vec v,\ 2\vec v-2\vec u\}\) independent?`, choice(["no", "yes"], 0),
      "Compare the two vectors.", [S`\(2\vec v-2\vec u=-2(\vec u-\vec v)\): parallel.`], S`no`),
  ]),

  wrapUp({
    qas: [
      ["How many independent vectors can ℝⁿ hold?", "At most n; more than n are always dependent."],
      ["What happens to subsets and supersets?", "Subsets of independent sets are independent; supersets of dependent sets are dependent."],
      ["What does independence look like in ℝ³?", "Two vectors: not parallel. Three vectors: not in one plane through 0."],
      ["What is special about n vectors in ℝⁿ?", "Independent ⇔ spanning ⇔ n pivots."],
      ["How do I enlarge an independent set?", "Add any vector that is not in its span."],
    ],
    summary: [
      "k > n vectors in ℝⁿ are dependent.",
      "Independent sets have independent subsets.",
      "Geometry: not parallel, not coplanar.",
      "n vectors in ℝⁿ: independent ⇔ spanning.",
      "Adding w ∉ Span B keeps B independent.",
    ],
    next: "4.5 uses dependence relations to strip redundant vectors from a spanning set without shrinking its span.",
  }),
];
