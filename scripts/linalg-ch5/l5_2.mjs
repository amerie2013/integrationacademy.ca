// LINALG1 5.2 — Spans and Solution Sets as Subspaces: the span of vectors is always a subspace (and the smallest one
// containing them), the solution set of a homogeneous system is a subspace and can be written as a span, testing
// membership in a span by row reduction, describing a span by homogeneous equations, and removing redundant vectors.
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, q, num, choice, hard, definition, theorem, cv, am, sys, steps } from "./lib.mjs";
import { vfig, scene3, a3, pt3, line3, patch3 } from "./vecfig.mjs";

export const TITLE = "5.2 Spans and Solution Sets as Subspaces";
export const ID = "11a10001-0001-4001-8001-000000000502";

const S = String.raw;
const spanPlane = vfig(scene3(3.4, { polys: [patch3([0, 0, 0], [1, 0, 1], [2, 1, -1], 1.15, "#dbeafe", "blue", 0.5)],
  arrows: [a3([0, 0, 0], [1, 0, 1], { color: "blue", vl: "v₁", off: 14 }), a3([0, 0, 0], [2, 1, -1], { color: "red", vl: "v₂", off: -14 }), a3([0, 0, 0], [3, 1, 0], { color: "green", label: "v₁ + v₂", off: 14 })],
  points: [pt3([0, 0, 0], "0", { color: "black", dx: -14 })] }), "Span{v₁, v₂}: every combination of two non-parallel vectors — a plane through 0");
const notInSpan = vfig(scene3(4, { polys: [patch3([0, 0, 0], [1, 2, 3], [2, -1, 1], 0.9, "#dbeafe", "blue", 0.5)],
  arrows: [a3([0, 0, 0], [1, 2, 3], { color: "blue", vl: "v₁", off: 14 }), a3([0, 0, 0], [2, -1, 1], { color: "red", vl: "v₂", off: -14 }), a3([0, 0, 0], [4, 3, 7], { color: "green", label: "(4, 3, 7)", off: 14 })],
  points: [pt3([0, 0, 0], "0", { color: "black", dx: -14 })] }), "(4, 3, 7) = 2v₁ + v₂ lies in the plane spanned by v₁ and v₂");

export const blocks = () => [
  intro({
    icon: "🕸️",
    title: "Spans and Solution Sets as Subspaces",
    overview: S`There are two natural ways to produce a subspace. One is to <strong>generate</strong> it: take some vectors and all their linear combinations — their <strong>span</strong>. The other is to <strong>cut it out</strong> with homogeneous linear equations — the solution set of \(A\vec x=\vec 0\). This lesson proves that both always give subspaces, and shows how to pass from one description to the other: solving the equations writes the solution set as a span, and row reducing with a general right-hand side turns a span into equations. Along the way you will test whether a vector lies in a span and remove redundant spanning vectors.`,
    goals: [
      "recall the span of a set of vectors and prove that it is a subspace;",
      "prove that the solution set of a homogeneous system is a subspace;",
      "write the solution set of a homogeneous system as a span;",
      "decide whether a vector lies in a span by row reducing, and find the coefficients;",
      "describe a span by homogeneous equations, and drop redundant spanning vectors.",
    ],
    outcomes: "subspaces of Rⁿ: spans and solution sets of homogeneous systems",
    prior: [
      [S`State the subspace test.`, S`Non-empty (contains \(\vec 0\)), closed under addition, closed under scalar multiplication (5.1).`],
      [S`Write \((2s-t,\ s,\ t)\) as a combination of two fixed vectors.`, S`\(s(2,1,0)+t(-1,0,1)\).`],
      [S`When is \([A\mid\vec b]\) consistent?`, S`When no row of its echelon form reads \(0=\text{nonzero}\) (2.5).`],
    ],
    words: [
      ["Linear combination", "\\(c_1\\vec v_1+\\dots+c_k\\vec v_k\\) with real \\(c_i\\)", "\\(2\\vec v_1-\\vec v_2\\)"],
      ["Span", "the set of all linear combinations of \\(\\vec v_1,\\dots,\\vec v_k\\)", "\\(\\operatorname{Span}\\{(1,0),(0,1)\\}=\\mathbb R^2\\)"],
      ["Spanning set", "vectors whose span is the whole subspace", "\\(\\{(1,1)\\}\\) spans the line \\(y=x\\)"],
      ["Solution space", "the solution set of \\(A\\vec x=\\vec 0\\)", "a line or plane through \\(\\vec 0\\)"],
      ["Redundant vector", "a spanning vector that is a combination of the others", "\\(\\vec v_3=\\vec v_1+\\vec v_2\\)"],
    ],
  }),

  section("📌 The span is a subspace", S`
  ${definition("span", S`The <strong>span</strong> of \(\vec v_1,\dots,\vec v_k\in\mathbb R^n\) is the set of all their linear combinations: \(\operatorname{Span}\{\vec v_1,\dots,\vec v_k\}=\{c_1\vec v_1+\dots+c_k\vec v_k: c_1,\dots,c_k\in\mathbb R\}\).`)}
  ${theorem("spans are subspaces", S`For any vectors \(\vec v_1,\dots,\vec v_k\) in \(\mathbb R^n\), \(\operatorname{Span}\{\vec v_1,\dots,\vec v_k\}\) is a subspace of \(\mathbb R^n\). It is the <strong>smallest</strong> subspace containing \(\vec v_1,\dots,\vec v_k\).`, S`\(\vec 0=0\vec v_1+\dots+0\vec v_k\) is in the span. If \(\vec x=\sum c_i\vec v_i\) and \(\vec y=\sum d_i\vec v_i\), then \(\vec x+\vec y=\sum(c_i+d_i)\vec v_i\) and \(t\vec x=\sum(tc_i)\vec v_i\) are again combinations. For "smallest": a subspace containing every \(\vec v_i\) contains every multiple \(c_i\vec v_i\) and every sum of these, so it contains the whole span.`)}
  <div style="text-align:center;">${spanPlane}</div>
  ${keyIdea(S`A set described as "all vectors of the form \((a+2b,\ b,\ a-b)\)" is a span in disguise: split it by parameter, \(a(1,0,1)+b(2,1,-1)\), and it is a subspace by the theorem — no need to run the subspace test.`)}`),

  section("📌 Solution sets of homogeneous systems", S`
  ${theorem("solution spaces are subspaces", S`The solution set of a homogeneous system \(A\vec x=\vec 0\) in \(n\) unknowns is a subspace of \(\mathbb R^n\).`, S`\(\vec x=\vec 0\) is a solution. If \(\vec u,\vec v\) are solutions, each equation \(\vec a\cdot\vec x=0\) gives \(\vec a\cdot(\vec u+\vec v)=0+0=0\) and \(\vec a\cdot(c\vec u)=c\cdot0=0\).`)}
  <p><strong>From equations to a span.</strong> Row reduce, set each free variable to a parameter and split the general solution by parameter: the vectors that appear span the solution set. There is one spanning vector per free variable.</p>
  <p><strong>From a span to equations.</strong> \(\vec b\in\operatorname{Span}\{\vec v_1,\dots,\vec v_k\}\) exactly when the system with augmented matrix \([\,\vec v_1\ \cdots\ \vec v_k\mid\vec b\,]\) is consistent. Row reduce with a general \(\vec b=(b_1,\dots,b_n)\): every zero row of the coefficient part gives one homogeneous equation in the \(b_i\).</p>`),

  section("📌 Testing membership in a span", S`
  <p>Is \(\vec b\) a combination \(c_1\vec v_1+\dots+c_k\vec v_k\)? Comparing components gives a linear system for the \(c_i\) whose augmented matrix has the \(\vec v_i\) as columns and \(\vec b\) as the last column.</p>
  <ul><li>Consistent: \(\vec b\) is in the span, and any solution gives the coefficients.</li><li>Inconsistent (a row \(0=\text{nonzero}\)): \(\vec b\) is not in the span.</li></ul>
  <div style="text-align:center;">${notInSpan}</div>
  <p><strong>Redundant vectors.</strong> If \(\vec v_k\) is a combination of \(\vec v_1,\dots,\vec v_{k-1}\), then \(\operatorname{Span}\{\vec v_1,\dots,\vec v_k\}=\operatorname{Span}\{\vec v_1,\dots,\vec v_{k-1}\}\): any combination that uses \(\vec v_k\) can be rewritten without it. Removing redundant vectors leads to <em>bases</em> (5.3).</p>`),

  section("📌 Explore", S`<p>The three vectors are the columns of a matrix. The RREF shows which of them are pivot columns; those span the same set as all three. Change \(k\) and watch the span jump between a plane and all of \(\mathbb R^3\).</p>`),
  widget("laSpanDim", { init: { set: "plane" } }),

  section("📌 Common mistakes", watchOut([
    "To test b ∈ Span{v₁, …, vₖ}, the vᵢ go in the COLUMNS of the matrix, not the rows.",
    "The span of vectors always contains 0 — even if none of the vectors is 0.",
    "Adding more vectors never shrinks a span, but it need not enlarge it (redundant vectors).",
    "A spanning set is not unique: many different sets span the same subspace.",
    "The solution set of Ax = b with b ≠ 0 is NOT a subspace (it misses 0).",
  ])),

  examples([
    ["A parametric set is a span", S`Show that \(S=\{(a+2b,\ b,\ a-b): a,b\in\mathbb R\}\) is a subspace of \(\mathbb R^3\) and describe it.`,
      [S`<strong>Matrix form.</strong> The general element is a matrix–vector product: \[${cv("a+2b", "b", "a-b")}=${am([[1, 2], [0, 1], [1, -1]], false)}${cv("a", "b")}=a${cv(1, 0, 1)}+b${cv(2, 1, -1)}.\]`,
        S`So \(S=\operatorname{Span}\{(1,0,1),(2,1,-1)\}\) — the set of all combinations of the columns of \(A=${am([[1, 2], [0, 1], [1, -1]], false)}\) — and every span is a subspace.`,
        ...steps([[1, 2], [0, 1], [1, -1]], [
          [S`<strong>Are the two columns independent?</strong> Clear column 1.`, ["R3-R1"]],
          [S`Clear column 2 below its pivot.`, ["R3+3R2"]],
        ], { bar: false, intro: "Row reduce A" }).steps,
        S`A pivot in both columns: the vectors are independent, so \(S\) is a plane through the origin.`],
      S`\(S=\operatorname{Span}\{(1,0,1),(2,1,-1)\}\), a plane through \(\vec 0\)`, spanPlane],
    ["A solution space as a span", S`Write the solution set of \(${sys([[1, -1, 2, -1, 0], [0, 1, -1, 3, 0]])}\) as a span.`,
      [...steps([[1, -1, 2, -1], [0, 1, -1, 3]], [
        [S`The matrix is already in echelon form; clear the \(-1\) above the second pivot to reach the RREF.`, ["R1+R2"]],
      ], { bar: false, intro: "The constants are 0 and stay 0, so reduce the coefficient matrix" }).steps,
        S`Pivots in columns 1 and 2; \(x_3=s\) and \(x_4=t\) are free. Row 1: \(x_1+x_3+2x_4=0\), so \(x_1=-s-2t\). Row 2: \(x_2-x_3+3x_4=0\), so \(x_2=s-3t\).`,
        S`\(\vec x=(-s-2t,\ s-3t,\ s,\ t)=s(-1,1,1,0)+t(-2,-3,0,1)\). Check \((-2,-3,0,1)\): \(-2+3+0-1=0\) ✓, \(-3-0+3=0\) ✓.`],
      S`\(\operatorname{Span}\{(-1,1,1,0),\ (-2,-3,0,1)\}\)`],
    ["Is the vector in the span?", S`Is \(\vec b=(4,3,7)\) in \(\operatorname{Span}\{(1,2,3),(2,-1,1)\}\)? If so, find the coefficients.`,
      [...steps([[1, 2, 4], [2, -1, 3], [3, 1, 7]], [
        [S`The spanning vectors are the columns and \(\vec b\) is the last column. Clear column 1.`, ["R2-2R1", "R3-3R1"]],
        [S`Rows 2 and 3 are equal; subtract.`, ["R3-R2"]],
      ], { intro: S`Solve \(c_1(1,2,3)+c_2(2,-1,1)=(4,3,7)\); its augmented matrix is` }).steps,
        S`No row \(0=\text{nonzero}\): consistent, so \(\vec b\) is in the span. Row 2: \(-5c_2=-5\), so \(c_2=1\); row 1: \(c_1=4-2=2\).`,
        S`Check: \(2(1,2,3)+1(2,-1,1)=(4,3,7)\) ✓.`],
      S`yes: \((4,3,7)=2(1,2,3)+(2,-1,1)\)`, notInSpan],
    ["Equations for a span", S`Find a homogeneous equation whose solution set is \(\operatorname{Span}\{(1,0,2),(0,1,-1)\}\).`,
      [S`\(\vec b=(b_1,b_2,b_3)\) is in the span exactly when this is consistent: \[${am([[1, 0, "b_1"], [0, 1, "b_2"], [2, -1, "b_3"]])}\]`,
        S`Clear column 1: \(R_3\to R_3-2R_1\). \[\longrightarrow\ ${am([[1, 0, "b_1"], [0, 1, "b_2"], [0, -1, "b_3-2b_1"]])}\]`,
        S`Clear column 2: \(R_3\to R_3+R_2\). \[\longrightarrow\ ${am([[1, 0, "b_1"], [0, 1, "b_2"], [0, 0, "b_3-2b_1+b_2"]])}\]`,
        S`Consistent exactly when \(-2b_1+b_2+b_3=0\). Check both spanning vectors: \(-2+0+2=0\) ✓, \(0+1-1=0\) ✓.`],
      S`\(-2x_1+x_2+x_3=0\)`],
    ["Removing a redundant vector", S`Show that \(\operatorname{Span}\{(1,1,0),(0,1,1),(1,2,1)\}=\operatorname{Span}\{(1,1,0),(0,1,1)\}\).`,
      [...steps([[1, 0, 1], [1, 1, 2], [0, 1, 1]], [
        [S`Put the three vectors in the columns. Clear column 1.`, ["R2-R1"]],
        [S`Clear column 2 below its pivot.`, ["R3-R2"]],
      ], { bar: false, intro: "Matrix with the vectors as columns" }).steps,
        S`This is the RREF. Column 3 is \(${cv(1, 1, 0)}\), so \(\vec v_3=1\vec v_1+1\vec v_2\): \[${cv(1, 2, 1)}=${cv(1, 1, 0)}+${cv(0, 1, 1)}.\]`,
        S`Any combination of all three is one of the first two: \[a${cv(1, 1, 0)}+b${cv(0, 1, 1)}+c${cv(1, 2, 1)}=(a+c)${cv(1, 1, 0)}+(b+c)${cv(0, 1, 1)},\] and every combination of the first two is one of all three (take \(c=0\)). The spans are equal.`],
      S`the third vector adds nothing: the span is the plane \(\operatorname{Span}\{(1,1,0),(0,1,1)\}\)`],
  ]),

  practice([
    q("on the line?", S`Is \((-3,6)\) in \(\operatorname{Span}\{(1,-2)\}\)?`, choice(["yes", "no"], 0),
      "Is it a multiple?", [S`\((-3,6)=-3(1,-2)\).`], "yes"),
    q("coefficient", S`Write \((5,1)=c_1(1,1)+c_2(1,-1)\). Find \(c_1\).`, num(3),
      "c₁ + c₂ = 5 and c₁ − c₂ = 1.", [S`Adding: \(2c_1=6\).`], S`\(c_1=3\)`),
    q("which plane", S`\(\operatorname{Span}\{(1,0,0),(0,1,0)\}\) is:`, choice([S`the \(x_1x_2\)-plane (\(x_3=0\))`, "the x₁-axis", "all of ℝ³", "the plane x₁ = x₂"], 0),
      "Combinations (a, b, 0).", [S`\(a(1,0,0)+b(0,1,0)=(a,b,0)\).`], S`the plane \(x_3=0\)`),
    q("spanning vectors", S`How many vectors are needed to span the solutions of \(x_1+x_2+x_3=0\) in \(\mathbb R^3\) (one per free variable)?`, num(2),
      "Count free variables.", [S`One pivot, three unknowns: \(3-1=2\).`], S`\(2\)`),
    q("membership", S`Which vector lies in \(\operatorname{Span}\{(1,0,1),(0,1,1)\}\)?`, choice([S`\((2,3,5)\)`, S`\((2,3,4)\)`, S`\((1,1,1)\)`, S`\((0,0,1)\)`], 0),
      "a(1,0,1) + b(0,1,1) = (a, b, a + b).", [S`The third entry must be the sum of the first two: \(2+3=5\).`], S`\((2,3,5)\)`),
  ]),

  ...hard([
    ["Replacing a spanning vector", S`Prove that \(\operatorname{Span}\{\vec u,\vec v\}=\operatorname{Span}\{\vec u,\ \vec v+3\vec u\}\) for any vectors \(\vec u,\vec v\).`,
      [S`\(\subseteq\): \(a\vec u+b\vec v=(a-3b)\vec u+b(\vec v+3\vec u)\).`, S`\(\supseteq\): \(a\vec u+b(\vec v+3\vec u)=(a+3b)\vec u+b\vec v\).`, S`Each set is contained in the other, so they are equal.`],
      S`adding a multiple of one spanning vector to another does not change the span (the idea behind row operations)`],
    ["Which b make the system consistent?", S`For which \(\vec b\) is \(A\vec x=\vec b\) consistent, where the columns of \(A\) are \((1,2,1)\) and \((3,5,1)\)? Describe the answer as a subspace.`,
      [S`Reduce \([A\mid\vec b]\): \[${am([[1, 3, "b_1"], [2, 5, "b_2"], [1, 1, "b_3"]])}\ \xrightarrow{R_2\to R_2-2R_1,\ R_3\to R_3-R_1}\ ${am([[1, 3, "b_1"], [0, -1, "b_2-2b_1"], [0, -2, "b_3-b_1"]])}\]`,
        S`\(R_3\to R_3-2R_2\): \[\longrightarrow\ ${am([[1, 3, "b_1"], [0, -1, "b_2-2b_1"], [0, 0, "3b_1-2b_2+b_3"]])}\]`,
        S`Consistent exactly when \(3b_1-2b_2+b_3=0\): a plane through the origin — the span of the columns of \(A\).`],
      S`\(\{\vec b: 3b_1-2b_2+b_3=0\}=\operatorname{Span}\{(1,2,1),(3,5,1)\}\)`],
  ], [
    q("hard", S`For which \(h\) is \((1,h,5)\) in \(\operatorname{Span}\{(1,2,3),(0,1,1)\}\)?`, num(4),
      "(1, h, 5) = a(1,2,3) + b(0,1,1).", [S`First entry: \(a=1\). Third: \(3+b=5\), so \(b=2\). Second: \(h=2a+b=4\).`], S`\(4\)`),
    q("hard", S`How many vectors span the solution space of \(x_1+2x_2-x_3+x_4=0\) in \(\mathbb R^4\) (one per free variable)?`, num(3),
      "One pivot.", [S`\(4-1\).`], S`\(3\)`),
    q("hard", S`\(\operatorname{Span}\{(1,2),(2,4)\}\) is:`, choice([S`the line \(x_2=2x_1\)`, S`all of \(\mathbb R^2\)`, S`the two points \((1,2)\) and \((2,4)\)`, S`the line \(x_1=2x_2\)`], 0),
      "The vectors are parallel.", [S`\((2,4)=2(1,2)\), so the span is all multiples of \((1,2)\).`], S`the line \(x_2=2x_1\)`),
  ]),

  wrapUp({
    qas: [
      ["Why is every span a subspace?", "It contains 0 (all coefficients 0) and sums and multiples of combinations are again combinations."],
      ["Why is the solution set of Ax = 0 a subspace?", "Each equation is linear with right side 0, so sums and multiples of solutions are solutions."],
      ["How do I write a solution space as a span?", "Row reduce, give each free variable a parameter, and split the general solution by parameter."],
      ["How do I test b ∈ Span{v₁, …, vₖ}?", "Row reduce [v₁ … vₖ | b] (the vectors as columns); consistent means yes, and a solution gives the coefficients."],
      ["When can a spanning vector be removed?", "When it is a linear combination of the others — the span does not change."],
    ],
    summary: [
      "Span{v₁, …, vₖ} = all combinations; always a subspace, the smallest containing the vᵢ.",
      "Solution set of Ax = 0 = a subspace; solving writes it as a span.",
      "b ∈ Span ⇔ [v₁ … vₖ | b] consistent.",
      "Reducing with a general b turns a span into homogeneous equations.",
      "Redundant vectors can be dropped without changing the span.",
    ],
    next: "5.3 asks for spanning sets with no redundant vectors at all — bases — and shows how to find one for any subspace.",
  }),
];
