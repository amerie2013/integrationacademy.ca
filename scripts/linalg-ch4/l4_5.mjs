// LINALG1 4.5 — Dependence Relations and Reducing a Spanning Set: a set is dependent ⇔ some vector is a combination
// of the others; removing such a vector keeps the span; reading every relation from the RREF; the pivot columns of
// the original matrix form an independent subset with the same span.
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, q, num, choice, hard, definition, theorem, am, cv, sfig, steps } from "./lib.mjs";
import { planeFig, vecs2 } from "./ws/fig5.mjs";
import { rowPic } from "./ws/fig3.mjs";

export const TITLE = "4.5 Dependence Relations and Reducing a Spanning Set";
export const ID = "11a10001-0001-4001-8001-000000000405";

const S = String.raw;
const M = (m) => am(m, false);
const triFig = sfig(planeFig([1, 2, 1], [2, 1, -1], { lu: "v₁ = (1, 2, 1)", lv: "v₂ = (2, 1, −1)", more: [[[1, -1, -2], "v₃ = v₂ − v₁", "green"]], raw: true }), "v₃ is in the plane of v₁ and v₂: drop it and the span is unchanged");
const rrefFig = sfig(rowPic([[[[1, 2, 0, 1], [0, 0, 1, 2], [0, 0, 0, 0]], { cells: [[0, 0, "#bbf7d0"], [1, 2, "#bbf7d0"]], label: "RREF: pivots in columns 1 and 3" }]]), "non-pivot columns show the relations: v₂ = 2v₁, v₄ = v₁ + 2v₃");
const zeroCoef = sfig(vecs2([[[1, 0], "v₁", "blue"], [[2, 0], "v₂ = 2v₁", "red", null, true], [[0, 1], "v₃", "green"]], { xmin: -1, xmax: 3, ymin: -1, ymax: 2 }, { raw: true }), "v₃ has coefficient 0 in 2v₁ − v₂ = 0: removing v₃ would lose the vertical direction");

export const blocks = () => [
  intro({
    icon: "✂️",
    title: "Dependence Relations and Reducing a Spanning Set",
    overview: S`A dependent set always contains a vector that is a linear combination of the others — and that vector adds nothing to the span. Remove it and the span stays the same. Repeating this until no dependence is left produces an independent set with the same span. Row reduction does it all at once: the RREF of \([\,\vec v_1\ \cdots\ \vec v_k\,]\) shows every dependence relation, and the <strong>pivot columns of the original matrix</strong> form an independent subset that spans the same set.`,
    goals: [
      "use the theorem: dependent ⇔ some \\(\\vec v_i\\) lies in the span of the others;",
      "explain why removing a redundant vector does not change the span;",
      "read dependence relations from the RREF;",
      "reduce a spanning set to an independent subset with the same span using pivot columns;",
      "decide which vectors may be removed (nonzero coefficient in a relation).",
    ],
    outcomes: "span and linear independence: dependence relations and minimal spanning sets",
    prior: [
      [S`When is \(\{\vec v_1,\dots,\vec v_k\}\) dependent?`, S`When \(c_1\vec v_1+\dots+c_k\vec v_k=\vec 0\) with some \(c_i\ne0\).`],
      [S`What does a non-pivot column of the RREF mean?`, S`Its variable is free.`],
      [S`Does adding a vector already in a span enlarge the span?`, S`No.`],
    ],
    words: [
      ["Redundant vector", "a combination of the other vectors", "\\(\\vec v_3=\\vec v_2-\\vec v_1\\)"],
      ["Dependence relation", "nontrivial \\(\\sum c_i\\vec v_i=\\vec 0\\)", "\\(\\vec v_1-\\vec v_2+\\vec v_3=\\vec 0\\)"],
      ["Pivot columns", "columns of the original matrix where the RREF has pivots", "independent, same span"],
      ["Removable", "has a nonzero coefficient in some relation", "can be dropped"],
      ["Same span", "\\(\\operatorname{Span}B'=\\operatorname{Span}B\\)", "nothing is lost"],
    ],
  }),

  section("📌 Dependence means redundancy", S`
  ${theorem("characterisation of dependence", S`\(\{\vec v_1,\dots,\vec v_k\}\) is linearly dependent \(\iff\) some \(\vec v_i\) is a linear combination of the others, i.e. \(\vec v_i\in\operatorname{Span}\{\vec v_1,\dots,\vec v_{i-1},\vec v_{i+1},\dots,\vec v_k\}\).`, S`⇒: take a relation with \(c_i\ne0\) and solve for \(\vec v_i=-\tfrac1{c_i}\sum_{j\ne i}c_j\vec v_j\). ⇐: if \(\vec v_i=\sum_{j\ne i}a_j\vec v_j\), then \(\sum_{j\ne i}a_j\vec v_j-\vec v_i=\vec 0\) is a relation with coefficient \(-1\ne0\).`)}
  ${theorem("removing a redundant vector", S`If \(\vec v_i\) is a combination of the other vectors, then removing \(\vec v_i\) does not change the span.`, S`Every combination using \(\vec v_i\) can be rewritten by substituting \(\vec v_i=\sum_{j\ne i}a_j\vec v_j\), giving a combination of the others only (this is 4.2's "adding a vector" theorem read backwards).`)}
  ${triFig}`),

  section("📌 Which vector can go?", S`
  <p>Only a vector with a <strong>nonzero</strong> coefficient in a relation can be solved for. A vector with coefficient 0 in every relation is essential:</p>
  ${zeroCoef}
  ${keyIdea(S`Remove one redundant vector at a time and look again — after one removal, a vector that was redundant may no longer be.`)}`),

  section("📌 All at once: pivot columns", S`
  ${theorem("pivot columns", S`Let \(A=[\,\vec v_1\ \cdots\ \vec v_k\,]\) with RREF \(R\). (1) Each non-pivot column of \(R\) lists the weights that write the corresponding \(\vec v_j\) as a combination of the pivot-column vectors. (2) The vectors \(\vec v_j\) in the <strong>pivot columns of \(A\)</strong> are linearly independent and span \(\operatorname{Span}\{\vec v_1,\dots,\vec v_k\}\).`, S`Row operations do not change the solutions of \(A\vec c=\vec 0\), so \(A\) and \(R\) have exactly the same column relations. In \(R\) the pivot columns are distinct standard vectors (independent), and each other column is visibly a combination of them; the same relations hold in \(A\). Removing the non-pivot vectors one by one keeps the span.`)}
  ${rrefFig}`),

  section("📌 Explore", S`<p>Set three vectors in \(\mathbb R^2\). When they are dependent, the explorer shows a relation and marks which vectors may be removed (nonzero coefficient) without changing the span.</p>`),
  widget("laDepend", { init: [[1, 2], [2, -1], [3, 1]] }),

  section("📌 Common mistakes", watchOut([
    "Take the pivot columns of the ORIGINAL matrix, not of the RREF — the RREF's columns are different vectors.",
    "Only a vector with a nonzero coefficient in a relation can be removed.",
    "Remove redundant vectors one at a time, re-checking after each removal.",
    "Removing a vector that is NOT redundant shrinks the span.",
    "Different removal orders can leave different subsets — all with the same span and the same size.",
  ])),

  examples([
    ["Find a relation and remove a vector", S`\(S=\{\vec v_1,\vec v_2,\vec v_3\}\) with \(\vec v_1=(1,2,1)\), \(\vec v_2=(2,1,-1)\), \(\vec v_3=(1,-1,-2)\). Find an independent subset with the same span.`,
      [...steps([[1, 2, 1], [2, 1, -1], [1, -1, -2]], [
        [S`Clear column 1.`, ["R2-2R1", "R3-R1"]],
        [S`Clear column 2 below its pivot.`, ["R3-R2"]],
        [S`Make the second pivot 1.`, ["R2*-1/3"]],
        [S`Clear above the second pivot.`, ["R1-2R2"]],
      ], { bar: false, intro: "Matrix with the vectors as columns" }).steps,
        S`Column 3 of the RREF is \((-1,1,0)\): \(\vec v_3=-\vec v_1+\vec v_2\). Check: \((-1,-2,-1)+(2,1,-1)=(1,-1,-2)\) ✓.`, S`Pivot columns 1 and 2: \(\{\vec v_1,\vec v_2\}\) is independent and \(\operatorname{Span}\{\vec v_1,\vec v_2\}=\operatorname{Span}S\), a plane.`],
      S`\(\{(1,2,1),(2,1,-1)\}\)`, triFig],
    ["Any vector in the relation can go", S`For the same set, the relation is \(\vec v_1-\vec v_2+\vec v_3=\vec 0\). Which single vectors may be removed without changing the span?`,
      [S`In matrix form the relation is \(A\vec c=\vec 0\) with \(\vec c=(1,-1,1)\): \[${am([[1, 2, 1], [2, 1, -1], [1, -1, -2]], false)}${cv(1, -1, 1)}=${cv("1-2+1", "2-1-1", "1+1-2")}=${cv(0, 0, 0)}.\]`,
        S`All three weights \(1,-1,1\) are nonzero, so each vector can be solved for: \(\vec v_1=\vec v_2-\vec v_3\), \(\vec v_2=\vec v_1+\vec v_3\), \(\vec v_3=\vec v_2-\vec v_1\).`,
        ...steps([[1, 1], [2, -1], [1, -2]], [
          [S`<strong>Example: remove \(\vec v_2\).</strong> Check \(\vec v_1,\vec v_3\) still span a plane. Clear column 1.`, ["R2-2R1", "R3-R1"]],
          [S`Clear column 2 below its pivot.`, ["R3-R2"]],
        ], { bar: false, intro: "Matrix [ v₁ v₃ ]" }).steps,
        S`Two pivots: \(\vec v_1,\vec v_3\) are independent and span the same plane. The same holds after removing \(\vec v_1\) or \(\vec v_3\).`],
      S`any one of the three`],
    ["Four vectors in ℝ³", S`Reduce \(\{\vec v_1,\dots,\vec v_4\}\) with \(\vec v_1=(1,1,0)\), \(\vec v_2=(2,2,0)\), \(\vec v_3=(0,1,1)\), \(\vec v_4=(1,3,2)\) to an independent subset with the same span.`,
      [...steps([[1, 2, 0, 1], [1, 2, 1, 3], [0, 0, 1, 2]], [
        [S`Clear column 1.`, ["R2-R1"]],
        [S`Column 2 has no pivot. Clear below the pivot in column 3.`, ["R3-R2"]],
      ], { bar: false, intro: "Matrix with the vectors as columns" }).steps,
        S`This is already the RREF; pivots in columns 1 and 3.`, S`Column 2 \((2,0)\): \(\vec v_2=2\vec v_1\). Column 4 \((1,2)\): \(\vec v_4=\vec v_1+2\vec v_3\). Check: \((1,1,0)+(0,2,2)=(1,3,2)\) ✓.`, S`Keep the pivot columns of the original matrix: \(\{\vec v_1,\vec v_3\}\).`],
      S`\(\{(1,1,0),(0,1,1)\}\)`, rrefFig],
    ["A coefficient of zero", S`\(\vec v_1=(1,0)\), \(\vec v_2=(2,0)\), \(\vec v_3=(0,1)\). Which vectors may be removed?`,
      [...steps([[1, 2, 0], [0, 0, 1]], [], { bar: false, intro: "Matrix with the vectors as columns (already in RREF)" }).steps,
        S`Pivots in columns 1 and 3; column 2 is \((2,0)\): \(\vec v_2=2\vec v_1\). Every relation is a multiple of \[2${cv(1, 0)}-1${cv(2, 0)}+0${cv(0, 1)}=${cv(0, 0)},\] so \(\vec v_3\) always has coefficient 0.`,
        S`\(\vec v_1\) or \(\vec v_2\) can go, but not \(\vec v_3\): without it the span \(\operatorname{Span}\{\vec v_1,\vec v_2\}\) is only the \(x_1\)-axis.`],
      S`\(\vec v_1\) or \(\vec v_2\), never \(\vec v_3\)`, zeroCoef],
    ["One at a time", S`In \(\{\vec a,\vec b,2\vec a,3\vec a\}\) with \(\vec a,\vec b\) non-parallel, how many vectors can be removed while keeping the span?`,
      [S`\(2\vec a\) and \(3\vec a\) are multiples of \(\vec a\): remove both.`, S`Now \(\{\vec a,\vec b\}\) is independent: nothing more can go.`, S`(Removing \(\vec a\), \(2\vec a\) and keeping \(3\vec a\) works equally well — the remaining set always has 2 vectors.)`],
      S`two`],
  ]),

  practice([
    q("relation", S`\(3\vec v_1-\vec v_2+2\vec v_3=\vec 0\). Write \(\vec v_2\) in terms of the others: \(\vec v_2=a\vec v_1+b\vec v_3\). Find \(a\).`, num(3),
      "Move v₂ to the other side.", [S`\(\vec v_2=3\vec v_1+2\vec v_3\).`], S`\(3\)`),
    q("rref", S`The RREF of \([\,\vec v_1\ \vec v_2\ \vec v_3\,]\) is \(${M([[1, 0, 4], [0, 1, -1], [0, 0, 0]])}\). Then \(\vec v_3=4\vec v_1+c\vec v_2\) with \(c=\)?`, num(-1),
      "Read column 3.", [S`Column 3 is \((4,-1,0)\).`], S`\(-1\)`),
    q("keep", S`For that RREF, which vectors form an independent subset with the same span?`, choice([S`\(\vec v_1,\vec v_2\)`, S`\(\vec v_1,\vec v_3\) only`, S`\(\vec v_3\) only`, S`all three`], 0),
      "Pivot columns.", [S`Pivots in columns 1 and 2.`], S`\(\{\vec v_1,\vec v_2\}\)`),
    q("count", S`Six vectors in \(\mathbb R^3\) span \(\mathbb R^3\). How many remain after removing redundant vectors?`, num(3),
      "The span is ℝ³.", [S`An independent spanning set of \(\mathbb R^3\) has 3 vectors.`], S`\(3\)`),
    q("zero coefficient", S`In every relation among \(\vec v_1,\vec v_2,\vec v_3\), \(\vec v_1\) has coefficient 0. Can \(\vec v_1\) be removed without changing the span?`, choice(["no", "yes"], 0),
      "Can it be solved for?", [S`\(\vec v_1\) is not a combination of the others.`], S`no`),
  ]),

  ...hard([
    ["A relation with a parameter", S`For which \(k\) is \((1,k,3)\) redundant in \(\{(1,0,1),(0,1,1),(1,k,3)\}\)? Give the relation.`,
      [S`Columns with \(k\) kept as a letter: \[${am([[1, 0, 1], [0, 1, "k"], [1, 1, 3]], false)}\]`,
        S`Clear column 1. Operation: \(R_3\to R_3-R_1\). \[\longrightarrow\ ${am([[1, 0, 1], [0, 1, "k"], [0, 1, 2]], false)}\]`,
        S`Clear column 2 below its pivot. Operation: \(R_3\to R_3-R_2\). \[\longrightarrow\ ${am([[1, 0, 1], [0, 1, "k"], [0, 0, "2-k"]], false)}\]`,
        S`Column 3 has no pivot exactly when \(2-k=0\): \(k=2\). Then the RREF column \((1,2)\) gives \(${cv(1, 2, 3)}=1${cv(1, 0, 1)}+2${cv(0, 1, 1)}\) ✓.`],
      S`\(k=2\): \((1,2,3)=\vec v_1+2\vec v_2\)`],
    ["Why row operations keep column relations", S`Explain why \(A\) and its RREF \(R\) satisfy exactly the same column relations \(c_1\vec a_1+\dots+c_k\vec a_k=\vec 0\).`,
      [S`A column relation with weights \(\vec c\) says exactly \(A\vec c=\vec 0\).`, S`Row operations do not change the solution set of a homogeneous system, so \(A\vec c=\vec 0\iff R\vec c=\vec 0\).`, S`Hence the weights that kill the columns of \(A\) are exactly those that kill the columns of \(R\), where they are easy to read.`],
      S`both are the solutions of the same homogeneous system`],
  ], [
    q("hard", S`RREF of \([\,\vec v_1\ \cdots\ \vec v_5\,]\) has pivots in columns 1, 2 and 4. How many vectors are redundant?`, num(2),
      "Non-pivot columns.", [S`Columns 3 and 5.`], S`\(2\)`),
    q("hard", S`\(\vec v_1=(2,4)\), \(\vec v_2=(1,2)\), \(\vec v_3=(3,7)\). In the relation \(\vec v_1+c\vec v_2+0\vec v_3=\vec 0\), find \(c\).`, num(-2),
      "v₁ = 2v₂.", [S`\((2,4)-2(1,2)=(0,0)\).`], S`\(-2\)`),
    q("hard", S`Can \(\vec v_3=(3,7)\) be removed from \(\{(2,4),(1,2),(3,7)\}\) without changing the span?`, choice(["no", "yes"], 0),
      "The first two are parallel.", [S`Without \(\vec v_3\) the span is a line; with it, all of \(\mathbb R^2\).`], S`no`),
  ]),

  wrapUp({
    qas: [
      ["What does dependent mean in practice?", "Some vector is a combination of the others."],
      ["Does removing that vector change the span?", "No — it was already reachable."],
      ["Which vectors can be removed?", "Those with a nonzero coefficient in some dependence relation."],
      ["How do I find all relations at once?", "Row reduce [v₁ … vₖ]; the non-pivot columns of the RREF give the weights."],
      ["Which vectors do I keep?", "Those in the pivot columns of the ORIGINAL matrix."],
    ],
    summary: [
      "Dependent ⇔ some vᵢ ∈ span of the others.",
      "Removing a redundant vector keeps the span.",
      "RREF non-pivot columns = dependence relations.",
      "Pivot columns of A: independent, same span.",
      "Only nonzero-coefficient vectors are removable.",
    ],
    next: "4.6 names the result: an independent spanning set of ℝⁿ is a basis.",
  }),
];
