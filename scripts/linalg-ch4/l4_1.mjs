// LINALG1 4.1 — Linear Combinations and Span: the span of a set of vectors, the span of one vector (a line) and of
// two vectors (a line, a plane or all of ℝ²), testing membership b ∈ Span{v₁, …, vₖ} by row reducing [v₁ … vₖ | b],
// and the basic facts Span is closed under linear combinations and always contains 0.
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, q, num, choice, hard, definition, theorem, am, cv, sfig, steps, vec } from "./lib.mjs";
import { vecs2, planeFig, lineFig } from "./ws/fig5.mjs";

export const TITLE = "4.1 Linear Combinations and Span";
export const ID = "11a10001-0001-4001-8001-000000000401";

const S = String.raw;
const lineSpan = sfig(vecs2([[[2, -1], "v = (2, −1)", "blue"], [[4, -2], "(4, −2) = 2v", "green", null, true], [[3, 1], "(3, 1)", "red"]], { xmin: -5, xmax: 5, ymin: -4, ymax: 4 },
  { segs: [{ pts: [[-5, 2.5], [5, -2.5]], color: "violet", w: 3 }], raw: true }), "Span{(2, −1)} is the violet line: (4, −2) lies on it, (3, 1) does not");
const comboFig = sfig(vecs2([[[1, 2], "v₁", "blue"], [[-1, 1], "v₂", "red"], [[2, 4], "", "blue", null, true], [[1, 5], "", "red", [2, 4], true], [[1, 5], "b = 2v₁ + v₂", "green"]], { xmin: -2, xmax: 4, ymin: -1, ymax: 6 }, { raw: true }),
  "b = (1, 5) reached as 2v₁ + 1v₂");
const planeSpan = sfig(planeFig([1, 0, 1], [0, 2, 1], { lu: "(1, 0, 1)", lv: "(0, 2, 1)", more: [[[1, 2, 2], "(1, 2, 2)", "green"]], raw: true }), "two non-parallel vectors in ℝ³ span a plane through 0");
const lineSpan3 = sfig(lineFig([1, -1, 2], { label: "(1, −1, 2)", raw: true }), "one nonzero vector spans a line through 0");

export const blocks = () => [
  intro({
    icon: "🧵",
    title: "Linear Combinations and Span",
    overview: S`A linear combination of \(\vec v_1,\dots,\vec v_k\) is any vector \(c_1\vec v_1+\dots+c_k\vec v_k\). Collecting <em>all</em> of them gives the <strong>span</strong> of the set — every point you can reach using only these directions. The span of one nonzero vector is a line through the origin, the span of two non-parallel vectors is a plane through the origin, and so on. Deciding whether a given vector \(\vec b\) lies in a span is a linear system: row reduce \([\,\vec v_1\ \cdots\ \vec v_k\mid\vec b\,]\) and look for consistency.`,
    goals: [
      "write the span of a set of vectors in set notation;",
      "describe the span of one or two vectors geometrically;",
      "decide whether \\(\\vec b\\in\\operatorname{Span}\\{\\vec v_1,\\dots,\\vec v_k\\}\\) by row reduction, and find the weights;",
      "find an equation for the span of two vectors in \\(\\mathbb R^3\\);",
      "use the facts that a span contains \\(\\vec 0\\) and every combination of its vectors.",
    ],
    outcomes: "span and linear independence: linear combinations and spanning sets",
    prior: [
      [S`Compute \(3(1,-2)+2(0,4)\).`, S`\((3,2)\).`],
      [S`Solve \(c_1+c_2=3,\ c_1-c_2=1\).`, S`\(c_1=2,\ c_2=1\).`],
      [S`What does a row \([\,0\ 0\mid 4\,]\) in a reduced augmented matrix mean?`, S`It reads 0 equals 4, which is impossible: no solution.`],
    ],
    words: [
      ["Linear combination", "\\(c_1\\vec v_1+\\dots+c_k\\vec v_k\\)", "\\(2\\vec v_1-\\vec v_2\\)"],
      ["Weights", "the scalars \\(c_1,\\dots,c_k\\)", "\\(c_1=2,\\ c_2=-1\\)"],
      ["Span", "the set of all linear combinations", "\\(\\operatorname{Span}\\{\\vec v\\}=\\{c\\vec v\\}\\)"],
      ["Spanning set", "\\(B\\) with \\(\\operatorname{Span}B=S\\)", "\\(\\{\\vec e_1,\\vec e_2\\}\\) spans \\(\\mathbb R^2\\)"],
      ["Membership", "\\(\\vec b\\in\\operatorname{Span}B\\)", "a consistent system"],
    ],
  }),

  section("📌 The span of a set", S`
  ${definition("span", S`Let \(B=\{\vec v_1,\dots,\vec v_k\}\) be vectors in \(\mathbb R^n\). The <strong>span</strong> of \(B\) is the set of all their linear combinations: \[\operatorname{Span}B=\{c_1\vec v_1+\dots+c_k\vec v_k : c_1,\dots,c_k\in\mathbb R\}.\] We say \(B\) <strong>spans</strong> this set, or that \(B\) is a <strong>spanning set</strong> for it.`)}
  <p>For one vector, the combinations are just the multiples \(c\vec v\). If \(\vec v\ne\vec 0\) they fill a line through the origin in the direction of \(\vec v\):</p>
  ${lineSpan}
  ${lineSpan3}`),

  section("📌 Is b in the span?", S`
  ${theorem("membership is a linear system", S`\(\vec b\in\operatorname{Span}\{\vec v_1,\dots,\vec v_k\}\) exactly when the system with augmented matrix \([\,\vec v_1\ \vec v_2\ \cdots\ \vec v_k\mid\vec b\,]\) is consistent. Any solution \((c_1,\dots,c_k)\) gives the weights.`, S`\(c_1\vec v_1+\dots+c_k\vec v_k=\vec b\) is, entry by entry, a system of \(n\) linear equations in the unknowns \(c_1,\dots,c_k\); the coefficient columns are the \(\vec v_j\) and the right side is \(\vec b\).`)}
  ${comboFig}
  ${keyIdea(S`Put the spanning vectors in the <strong>columns</strong>, put \(\vec b\) last, row reduce. A row \([\,0\ \cdots\ 0\mid c\,]\) with \(c\ne0\) means \(\vec b\) is <strong>not</strong> in the span.`)}`),

  section("📌 Facts about spans", S`
  ${theorem("a span is closed", S`For any \(\vec v_1,\dots,\vec v_k\): (1) \(\vec 0\in\operatorname{Span}\{\vec v_1,\dots,\vec v_k\}\); (2) each \(\vec v_i\) is in the span; (3) any linear combination of vectors of the span is again in the span.`, S`(1) take every \(c_i=0\). (2) take \(c_i=1\) and the others 0. (3) \(a(c_1\vec v_1+\dots)+b(d_1\vec v_1+\dots)=(ac_1+bd_1)\vec v_1+\dots\), again a combination of the \(\vec v_i\).`)}
  <p>Two non-parallel vectors in \(\mathbb R^3\) span a <strong>plane through the origin</strong>. Its normal is their cross product, which gives the plane's equation:</p>
  ${planeSpan}`),

  section("📌 Explore", S`<p>Move the two vectors and the target \(\vec b\). When \(\vec v_1,\vec v_2\) are not parallel their span is all of \(\mathbb R^2\) and the explorer shows the weights; make them parallel and the span collapses to a line.</p>`),
  widget("laSpan2", { init: { a: 1, b: 2, c: -1, d: 1, x: 1, y: 5 } }),

  section("📌 Common mistakes", watchOut([
    "The vectors go in the COLUMNS of the augmented matrix, not the rows.",
    "A span is a whole set (a line, a plane, …), not a single vector.",
    "Span{v} for v ≠ 0 is a line through the ORIGIN — every span contains 0.",
    "Two vectors span ℝ² only when they are not parallel.",
    "A consistent system with free variables still means b IS in the span (in several ways).",
  ])),

  examples([
    ["A vector on a line", S`Is \((-6,3)\in\operatorname{Span}\{(2,-1)\}\)? Is \((3,1)\)?`,
      [...steps([[2, -6], [-1, 3]], [
        [S`For \((-6,3)\): solve \(c${cv(2, -1)}=${cv(-6, 3)}\). Clear below the pivot.`, ["R2+1/2R1"]],
        [S`Make the pivot 1.`, ["R1*1/2"]],
      ], { intro: "Augmented matrix [ v | b ]" }).steps,
        S`Consistent: \(c=-3\). Check: \(-3${cv(2, -1)}=${cv(-6, 3)}\) ✓.`,
        ...steps([[2, 3], [-1, 1]], [
          [S`For \((3,1)\): clear below the pivot.`, ["R2+1/2R1"]],
        ], { intro: "Augmented matrix [ v | b ]" }).steps,
        S`The last row says 0 equals \(\tfrac52\): inconsistent, so \((3,1)\) is not a multiple of \((2,-1)\).`],
      S`\((-6,3)\) is in the span; \((3,1)\) is not`, lineSpan],
    ["Membership in ℝ²", S`Is \(\vec b=(1,5)\) in \(\operatorname{Span}\{(1,2),(-1,1)\}\)? If so, give the weights.`,
      [...steps([[1, -1, 1], [2, 1, 5]], [
        [S`Columns \(\vec v_1,\vec v_2\), then \(\vec b\). Clear below the first pivot.`, ["R2-2R1"]],
        [S`Make the second pivot 1.`, ["R2*1/3"]],
        [S`Clear above the second pivot.`, ["R1+R2"]],
      ]).steps,
        S`Consistent: \(c_1=2\), \(c_2=1\).`, S`Check: \(2(1,2)+1(-1,1)=(2-1,\ 4+1)=(1,5)\) ✓.`],
      S`yes: \(\vec b=2\vec v_1+\vec v_2\)`, comboFig],
    ["Membership in ℝ³ — yes", S`Is \((1,3,2)\in\operatorname{Span}\{(1,1,0),(0,1,1)\}\)?`,
      [...steps([[1, 0, 1], [1, 1, 3], [0, 1, 2]], [
        [S`Clear column 1.`, ["R2-R1"]],
        [S`Clear column 2 below its pivot.`, ["R3-R2"]],
      ]).steps,
        S`The last row is \(0=0\): consistent, with \(c_2=2\) and \(c_1=1\).`, S`Check: \((1,1,0)+2(0,1,1)=(1,3,2)\) ✓.`],
      S`yes: \((1,3,2)=\vec v_1+2\vec v_2\)`],
    ["Membership in ℝ³ — no", S`Is \((2,1,4)\in\operatorname{Span}\{(1,1,0),(0,1,1)\}\)?`,
      [...steps([[1, 0, 2], [1, 1, 1], [0, 1, 4]], [
        [S`Clear column 1.`, ["R2-R1"]],
        [S`Clear column 2 below its pivot.`, ["R3-R2"]],
      ]).steps,
        S`The last row says 0 equals 5, which is impossible: inconsistent.`, S`So no weights work: \((2,1,4)\) is off the plane spanned by the two vectors.`],
      S`no`],
    ["The equation of a span", S`Describe \(\operatorname{Span}\{(1,0,1),(0,2,1)\}\) by an equation.`,
      [S`Reduce \([\,\vec v_1\ \vec v_2\mid\vec b\,]\) with a general right side \(\vec b=(b_1,b_2,b_3)\): \[${am([[1, 0, "b_1"], [0, 2, "b_2"], [1, 1, "b_3"]])}\]`,
        S`Clear column 1. Operation: \(R_3\to R_3-R_1\). \[\longrightarrow\ ${am([[1, 0, "b_1"], [0, 2, "b_2"], [0, 1, "b_3-b_1"]])}\]`,
        S`Bring the simpler row up. Operation: \(R_2\leftrightarrow R_3\). \[\longrightarrow\ ${am([[1, 0, "b_1"], [0, 1, "b_3-b_1"], [0, 2, "b_2"]])}\]`,
        S`Clear column 2 below its pivot. Operation: \(R_3\to R_3-2R_2\). \[\longrightarrow\ ${am([[1, 0, "b_1"], [0, 1, "b_3-b_1"], [0, 0, "2b_1+b_2-2b_3"]])}\]`,
        S`Consistent exactly when \(2b_1+b_2-2b_3=0\): that is the plane. Check the spanning vectors: \(2+0-2=0\) ✓ and \(0+2-2=0\) ✓. (The cross product \((1,0,1)\times(0,2,1)=(-2,-1,2)\) gives the same normal.)`],
      S`\(2x_1+x_2-2x_3=0\)`, planeSpan],
  ]),

  practice([
    q("on a line", S`Find \(c\) with \((-10,15)=c(2,-3)\).`, num(-5),
      "Compare first entries.", [S`\(2c=-10\Rightarrow c=-5\); check \(-3c=15\) ✓.`], S`\(-5\)`),
    q("weights", S`Find \(c_1\) with \((5,1)=c_1(1,1)+c_2(1,-1)\).`, num(3),
      "Add the two equations.", [S`\(c_1+c_2=5\), \(c_1-c_2=1\): \(2c_1=6\).`], S`\(3\)`),
    q("membership", S`Is \((2,2,3)\in\operatorname{Span}\{(1,0,1),(0,1,1)\}\)?`, choice(["no", "yes"], 0),
      "c₁ and c₂ are forced by the first two entries.", [S`\(c_1=2\), \(c_2=2\) give third entry \(4\ne3\).`], S`no`),
    q("geometry", S`\(\operatorname{Span}\{(1,2),(3,6)\}\) is:`, choice(["a line through 0", "all of ℝ²", "a single point", "a plane"], 0),
      "Are the vectors parallel?", [S`\((3,6)=3(1,2)\): every combination is a multiple of \((1,2)\).`], S`a line through 0`),
    q("combination", S`Compute the combination \(2\vec v_1-\vec v_2\) for \(\vec v_1=(1,0,3)\), \(\vec v_2=(4,-1,2)\).`, vec(-2, 1, 4),
      "Entry by entry.", [S`\((2-4,\ 0+1,\ 6-2)\).`], S`\((-2,1,4)\)`),
  ]),

  ...hard([
    ["A parameter that puts b in the span", S`For which \(h\) is \((h,1,3)\in\operatorname{Span}\{(1,1,0),(0,1,1)\}\)?`,
      [S`Augmented matrix \([\,\vec v_1\ \vec v_2\mid\vec b\,]\) with \(h\) kept as a letter: \[${am([[1, 0, "h"], [1, 1, 1], [0, 1, 3]])}\]`,
        S`Clear column 1. Operation: \(R_2\to R_2-R_1\). \[\longrightarrow\ ${am([[1, 0, "h"], [0, 1, "1-h"], [0, 1, 3]])}\]`,
        S`Clear column 2 below its pivot. Operation: \(R_3\to R_3-R_2\). \[\longrightarrow\ ${am([[1, 0, "h"], [0, 1, "1-h"], [0, 0, "2+h"]])}\]`,
        S`Consistent exactly when \(2+h=0\): \(h=-2\). Then \(c_1=-2\), \(c_2=3\). Check: \(-2${cv(1, 1, 0)}+3${cv(0, 1, 1)}=${cv(-2, 1, 3)}\) ✓.`],
      S`\(h=-2\)`],
    ["Different spanning sets, same span", S`Show that \(\operatorname{Span}\{\vec u,\vec v\}=\operatorname{Span}\{\vec u,\ \vec u+\vec v\}\) for any \(\vec u,\vec v\in\mathbb R^n\).`,
      [S`\(\subseteq\): \(a\vec u+b\vec v=(a-b)\vec u+b(\vec u+\vec v)\), a combination of \(\vec u\) and \(\vec u+\vec v\).`, S`\(\supseteq\): \(a\vec u+b(\vec u+\vec v)=(a+b)\vec u+b\vec v\), a combination of \(\vec u\) and \(\vec v\).`, S`Each set is inside the other, so they are equal.`],
      S`each span contains the other`],
  ], [
    q("hard", S`For which \(k\) is \((1,k,5)\) in \(\operatorname{Span}\{(1,2,3),(0,1,1)\}\)?`, num(4),
      "c₁ = 1 from entry 1; then entry 3 fixes c₂.", [S`\(c_1=1\), \(3+c_2=5\Rightarrow c_2=2\), entry 2: \(2+2=4\).`], S`\(4\)`),
    q("hard", S`\(\vec b=c_1(1,-1)+c_2(2,1)\) with \(\vec b=(0,6)\). Find \(c_2\).`, num(2),
      "Add the equations after scaling.", [S`\(c_1+2c_2=0\), \(-c_1+c_2=6\): add, \(3c_2=6\).`], S`\(2\)`),
    q("hard", S`How many vectors are in \(\operatorname{Span}\{\vec 0\}\)?`, num(1),
      "Every combination of the zero vector is zero.", [S`\(c\vec 0=\vec 0\) for every \(c\).`], S`\(1\)`),
  ]),

  wrapUp({
    qas: [
      ["What is a span?", "The set of all linear combinations c₁v₁ + … + cₖvₖ."],
      ["What does the span of one vector look like?", "A line through 0 (or just {0} if the vector is 0)."],
      ["How do I test b ∈ Span{v₁, …, vₖ}?", "Row reduce [v₁ … vₖ | b]; b is in the span exactly when the system is consistent."],
      ["How do I get the weights?", "They are the solution (c₁, …, cₖ) of that system."],
      ["How do I find the equation of a plane spanned by two vectors in ℝ³?", "Take the cross product as the normal; the plane passes through 0."],
    ],
    summary: [
      "Span{v₁, …, vₖ} = {c₁v₁ + … + cₖvₖ}.",
      "One nonzero vector spans a line through 0.",
      "Two non-parallel vectors span a plane through 0.",
      "b ∈ span ⇔ [v₁ … vₖ | b] is consistent.",
      "Every span contains 0 and is closed under combinations.",
    ],
    next: "4.2 asks when a set spans all of ℝⁿ, and how to describe a smaller span by equations.",
  }),
];
