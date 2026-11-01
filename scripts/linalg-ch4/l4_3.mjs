// LINALG1 4.3 — Linear Dependence and Independence: the definition through the equation c₁v₁ + … + cₖvₖ = 0, the
// trivial solution, the test (row reduce [v₁ … vₖ]; independent ⇔ a pivot in every column), sets of one or two
// vectors, sets containing 0, and finding a dependence relation from the free variables.
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, q, num, choice, hard, definition, theorem, am, cv, sfig, steps } from "./lib.mjs";
import { vecs2, planeFig, vecs3 } from "./ws/fig5.mjs";

export const TITLE = "4.3 Linear Dependence and Independence";
export const ID = "11a10001-0001-4001-8001-000000000403";

const S = String.raw;
const M = (m) => am(m, false);
const indep2 = sfig(vecs2([[[2, 1], "v₁ = (2, 1)", "blue"], [[-1, 3], "v₂ = (−1, 3)", "red"]], { xmin: -3, xmax: 4, ymin: -1, ymax: 4 }, { raw: true }), "not parallel: independent");
const dep2 = sfig(vecs2([[[-1, 2], "(−1, 2)", "blue"], [[3, -6], "(3, −6)", "red"]], { xmin: -2, xmax: 4, ymin: -7, ymax: 3 }, { segs: [{ pts: [[-1.5, 3], [3.5, -7]], color: "#c4b5fd", w: 2, dash: true }], raw: true }), "parallel: (3, −6) = −3(−1, 2), dependent");
const dep3 = sfig(planeFig([1, 2, 0], [0, 1, 1], { lu: "v₁", lv: "v₂", more: [[[2, 5, 1], "v₃ = 2v₁ + v₂", "green"]], raw: true }), "v₃ lies in the plane of v₁ and v₂: dependent");
const ind3 = sfig(vecs3([[[1, 0, 2], "(1, 0, 2)"], [[1, 1, 0], "(1, 1, 0)"], [[0, 1, 3], "(0, 1, 3)"]], { raw: true }), "three vectors not in one plane: independent");

export const blocks = () => [
  intro({
    icon: "🔗",
    title: "Linear Dependence and Independence",
    overview: S`A set of vectors is <strong>linearly dependent</strong> when some nontrivial combination of them is the zero vector — one of them is "wasted", because it can be built from the others. It is <strong>linearly independent</strong> when the only way to get \(\vec 0\) is to use all weights zero. Deciding which is a homogeneous linear system: put the vectors in the columns and row reduce. A pivot in every column means independent; a free variable gives a dependence relation, which you can read off and check.`,
    goals: [
      "state the definitions of linear dependence and independence;",
      "test a set for independence by row reducing the matrix of columns;",
      "find an explicit dependence relation when a set is dependent;",
      "decide independence of one or two vectors at a glance;",
      "explain why any set containing \\(\\vec 0\\) is dependent.",
    ],
    outcomes: "span and linear independence: linear dependence and independence",
    prior: [
      [S`Solve \(2c_1-c_2=0,\ c_1+3c_2=0\).`, S`Only \(c_1=c_2=0\).`],
      [S`What is a free variable?`, S`A variable whose column has no pivot; it can take any value.`],
      [S`Is \((4,-2)\) a multiple of \((-2,1)\)?`, S`Yes: \(-2(-2,1)\).`],
    ],
    words: [
      ["Dependence relation", "\\(c_1\\vec v_1+\\dots+c_k\\vec v_k=\\vec 0\\), not all \\(c_i=0\\)", "\\(2\\vec v_1+\\vec v_2-\\vec v_3=\\vec 0\\)"],
      ["Trivial solution", "\\(c_1=\\dots=c_k=0\\)", "always a solution"],
      ["Linearly independent", "only the trivial solution", "no wasted vectors"],
      ["Linearly dependent", "a nontrivial solution exists", "some vector is redundant"],
      ["Pivot in every column", "no free variable in \\(A\\vec c=\\vec 0\\)", "the independence test"],
    ],
  }),

  section("📌 The definitions", S`
  ${definition("linear dependence and independence", S`Let \(B=\{\vec v_1,\dots,\vec v_k\}\subseteq\mathbb R^n\). \(B\) is <strong>linearly dependent</strong> if there are scalars \(c_1,\dots,c_k\), <em>not all zero</em>, with \[c_1\vec v_1+\dots+c_k\vec v_k=\vec 0.\] \(B\) is <strong>linearly independent</strong> if the only solution of this equation is the <strong>trivial solution</strong> \(c_1=\dots=c_k=0\).`)}
  <p>Every set has the trivial solution. The question is whether there is any <em>other</em>.</p>
  ${indep2}
  ${dep2}`),

  section("📌 The test", S`
  ${theorem("independence test", S`Let \(A=[\,\vec v_1\ \cdots\ \vec v_k\,]\). The vectors are linearly independent exactly when \(A\vec c=\vec 0\) has only the trivial solution, i.e. when an echelon form of \(A\) has a <strong>pivot in every column</strong>.`, S`\(A\vec c=c_1\vec v_1+\dots+c_k\vec v_k\), so the dependence equation is the homogeneous system \(A\vec c=\vec 0\). It has a nontrivial solution exactly when some variable is free, i.e. some column has no pivot.`)}
  ${keyIdea(S`If a column has no pivot, set its variable to 1 (the other free variables to 0), solve for the pivot variables, and you have an explicit dependence relation. Always check it by computing the combination.`)}
  ${dep3}`),

  section("📌 Small sets", S`
  ${theorem("one and two vectors; the zero vector", S`(1) \(\{\vec v\}\) is independent exactly when \(\vec v\ne\vec 0\). (2) \(\{\vec u,\vec v\}\) is dependent exactly when one of them is a scalar multiple of the other. (3) Any set that contains \(\vec 0\) is dependent.`, S`(1) \(c\vec v=\vec 0\) with \(c\ne0\) forces \(\vec v=\vec 0\). (2) If \(a\vec u+b\vec v=\vec 0\) with \(b\ne0\), then \(\vec v=-\tfrac ab\vec u\) (similarly if \(a\ne0\)); conversely \(\vec v=t\vec u\) gives \(t\vec u-\vec v=\vec 0\). (3) Give the zero vector weight 1 and all others weight 0.`)}
  ${ind3}`),

  section("📌 Explore", S`<p>Set three vectors in \(\mathbb R^2\) or switch one off. The explorer shows whether they are independent and, if not, a dependence relation \(c_1\vec v_1+c_2\vec v_2+c_3\vec v_3=\vec 0\) drawn head to tail.</p>`),
  widget("laDepend", { init: [[2, 1], [-1, 3], [1, 4]] }),

  section("📌 Common mistakes", watchOut([
    "The trivial solution always exists — independence means it is the ONLY one.",
    "Independence needs a pivot in every COLUMN (spanning needs one in every row).",
    "Two vectors are dependent only when parallel; for three or more, no two need be parallel.",
    "A set containing the zero vector is never independent.",
    "When you find a relation, check it: compute the combination and get 0.",
  ])),

  examples([
    ["Two vectors in ℝ²", S`Is \(\{(2,1),(-1,3)\}\) linearly independent?`,
      [S`Solve \(c_1(2,1)+c_2(-1,3)=(0,0)\).`, ...steps([[2, -1], [1, 3]], [
        [S`Bring the 1 up to be the first pivot.`, ["R1<->R2"]],
        [S`Clear below the pivot.`, ["R2-2R1"]],
      ], { bar: false, intro: "Matrix with the vectors as columns" }).steps,
        S`A pivot in both columns: only the trivial solution.`],
      S`independent`, indep2],
    ["Spotting a multiple", S`Is \(\{(-1,2),(3,-6)\}\) linearly independent?`,
      [...steps([[-1, 3], [2, -6]], [
        [S`Solve \(c_1\vec v_1+c_2\vec v_2=\vec 0\). Clear below the pivot.`, ["R2+2R1"]],
        [S`Make the pivot 1.`, ["R1*-1"]],
      ], { bar: false, intro: "Matrix with the vectors as columns" }).steps,
        S`Column 2 has no pivot: \(c_2\) is free. The row reads \(c_1-3c_2=0\); with \(c_2=1\), \(c_1=3\).`,
        S`Relation: \(3${cv(-1, 2)}+1${cv(3, -6)}=${cv("-3+3", "6-6")}=${cv(0, 0)}\). Nontrivial, so dependent — indeed \((3,-6)=-3(-1,2)\).`],
      S`dependent: \(3\vec v_1+\vec v_2=\vec 0\)`, dep2],
    ["Three vectors in ℝ³ — dependent", S`Test \(\vec v_1=(1,2,0)\), \(\vec v_2=(0,1,1)\), \(\vec v_3=(2,5,1)\).`,
      [...steps([[1, 0, 2], [2, 1, 5], [0, 1, 1]], [
        [S`Clear column 1.`, ["R2-2R1"]],
        [S`Clear column 2 below its pivot.`, ["R3-R2"]],
      ], { bar: false, intro: "Matrix with the vectors as columns" }).steps,
        S`Column 3 has no pivot: \(c_3\) is free, so the set is dependent.`, S`Take \(c_3=-1\). Row 2: \(c_2+c_3=0\Rightarrow c_2=1\). Row 1: \(c_1+2c_3=0\Rightarrow c_1=2\).`, S`Relation \(2\vec v_1+\vec v_2-\vec v_3=\vec 0\). Check: \((2,4,0)+(0,1,1)-(2,5,1)=(0,0,0)\) ✓.`],
      S`dependent: \(\vec v_3=2\vec v_1+\vec v_2\)`, dep3],
    ["Three vectors in ℝ³ — independent", S`Test \((1,0,2)\), \((1,1,0)\), \((0,1,3)\).`,
      [...steps([[1, 1, 0], [0, 1, 1], [2, 0, 3]], [
        [S`Clear column 1.`, ["R3-2R1"]],
        [S`Clear column 2 below its pivot.`, ["R3+2R2"]],
      ], { bar: false, intro: "Matrix with the vectors as columns" }).steps,
        S`Pivots \(1,1,5\) in all three columns: only the trivial solution.`],
      S`independent`, ind3],
    ["A set containing zero", S`Is \(\{(1,4,-2),(0,0,0),(3,1,1)\}\) independent?`,
      [S`\(0\cdot(1,4,-2)+5\cdot(0,0,0)+0\cdot(3,1,1)=\vec 0\), and the weights are not all zero.`, S`So the set is dependent — whatever the other vectors are.`],
      S`dependent`],
  ]),

  practice([
    q("multiple?", S`Is \(\{(4,-6),(-2,3)\}\) independent?`, choice(["no", "yes"], 0),
      "Is one a multiple of the other?", [S`\((4,-6)=-2(-2,3)\).`], S`no`),
    q("relation", S`\(\vec v_3=3\vec v_1-\vec v_2\). Find \(c_2\) in the relation \(3\vec v_1+c_2\vec v_2-\vec v_3=\vec 0\).`, num(-1),
      "Move v₃ across.", [S`\(3\vec v_1-\vec v_2-\vec v_3=\vec 0\).`], S`\(-1\)`),
    q("pivots", S`\(A=[\,\vec v_1\ \vec v_2\ \vec v_3\,]\) reduces to an echelon form with pivots in columns 1 and 3 only. Are the vectors independent?`, choice(["no", "yes"], 0),
      "Column 2 has no pivot.", [S`\(c_2\) is free.`], S`no`),
    q("zero", S`How many of these sets are independent: \(\{\vec 0\}\), \(\{(1,0)\}\), \(\{(1,0),(0,0)\}\), \(\{(1,0),(0,1)\}\)?`, num(2),
      "Sets containing 0 are dependent.", [S`\(\{(1,0)\}\) and \(\{(1,0),(0,1)\}\).`], S`\(2\)`),
    q("parameter", S`For which \(k\) are \((2,k)\) and \((3,6)\) dependent?`, num(4),
      "(2, k) must be a multiple of (3, 6) = 3(1, 2).", [S`\((2,k)=2(1,2)\Rightarrow k=4\).`], S`\(4\)`),
  ]),

  ...hard([
    ["A parameter that makes a set dependent", S`For which \(h\) is \(\{(1,2,h),(0,1,1),(2,3,1)\}\) dependent?`,
      [S`Columns: \(${M([[1, 0, 2], [2, 1, 3], ["h", 1, 1]])}\).`, S`\(R_2-2R_1\): \((0,1,-1)\). \(R_3-hR_1\): \((0,1,1-2h)\).`, S`\(R_3-R_2\): \((0,0,2-2h)\).`, S`No pivot in column 3 exactly when \(2-2h=0\): \(h=1\).`, S`Check \(h=1\): \(2(1,2,1)-(0,1,1)=(2,3,1)\) ✓, a dependence relation.`],
      S`\(h=1\)`],
    ["Independence is inherited", S`Prove: if \(\{\vec u,\vec v,\vec w\}\) is independent, then so is \(\{\vec u,\vec v\}\); and if \(\{\vec u,\vec v\}\) is dependent, so is \(\{\vec u,\vec v,\vec w\}\).`,
      [S`Suppose \(a\vec u+b\vec v=\vec 0\). Then \(a\vec u+b\vec v+0\vec w=\vec 0\); independence of the three forces \(a=b=0\). So \(\{\vec u,\vec v\}\) is independent.`, S`If \(a\vec u+b\vec v=\vec 0\) with \(a,b\) not both 0, then \(a\vec u+b\vec v+0\vec w=\vec 0\) is a nontrivial relation for the larger set.`],
      S`subsets of independent sets are independent; supersets of dependent sets are dependent`],
  ], [
    q("hard", S`For which \(t\) are \((1,t,0)\), \((0,1,t)\), \((1,0,-1)\) dependent? (Give the positive value.)`, num(1),
      "Reduce with t as a letter.", [S`Columns \(${M([[1, 0, 1], ["t", 1, 0], [0, "t", -1]])}\). \(R_2-tR_1\): \((0,1,-t)\). \(R_3-tR_2\): \((0,0,t^2-1)\). No third pivot when \(t^2=1\).`], S`\(1\)`),
    q("hard", S`\(2\vec v_1-\vec v_2+4\vec v_3=\vec 0\). Write \(\vec v_2\) as \(a\vec v_1+b\vec v_3\) and give \(b\).`, num(4),
      "Solve for v₂.", [S`\(\vec v_2=2\vec v_1+4\vec v_3\).`], S`\(4\)`),
    q("hard", S`Are \((1,1,1)\), \((1,2,3)\), \((2,3,4)\) independent?`, choice(["no", "yes"], 0),
      "Look at the sum of the first two.", [S`\((1,1,1)+(1,2,3)=(2,3,4)\).`], S`no`),
  ]),

  wrapUp({
    qas: [
      ["What does independent mean?", "c₁v₁ + … + cₖvₖ = 0 only when every cᵢ = 0."],
      ["How do I test it?", "Row reduce [v₁ … vₖ]: independent ⇔ a pivot in every column."],
      ["How do I find a dependence relation?", "Set a free variable to 1, solve for the pivot variables, and check the combination is 0."],
      ["When are two vectors dependent?", "When one is a multiple of the other."],
      ["Why is a set containing 0 dependent?", "Weight 1 on the zero vector and 0 elsewhere gives a nontrivial relation."],
    ],
    summary: [
      "Independent ⇔ only the trivial solution of c₁v₁ + … + cₖvₖ = 0.",
      "Test: pivot in every column of [v₁ … vₖ].",
      "A free variable gives a dependence relation.",
      "Two vectors: dependent ⇔ parallel.",
      "Any set containing 0 is dependent.",
    ],
    next: "4.4 collects the theorems that decide independence quickly — counting vectors, subsets, and the geometry in ℝ² and ℝ³.",
  }),
];
