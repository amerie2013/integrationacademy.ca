// LINALG1 5.1 — Subspaces of Rⁿ: the definition, the subspace test (non-empty, closed under addition, closed under
// scalar multiplication), why every subspace contains 0, the trivial subspaces {0} and Rⁿ, and the typical
// non-examples (lines missing the origin, unions of lines, quadrants, curves).
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, q, num, choice, hard, definition, theorem, cv, am, steps } from "./lib.mjs";
import { vfig, scene3, a3, pt3, line3, patch3 } from "./vecfig.mjs";

export const TITLE = "5.1 Subspaces and the Subspace Test";
export const ID = "11a10001-0001-4001-8001-000000000501";

const S = String.raw;
/** two lines in the plane: one through the origin (a subspace), one shifted (not) */
const twoLines = vfig({ view: { xmin: -4, xmax: 4, ymin: -3.5, ymax: 4.5 }, step: 1, width: 300,
  segs: [{ pts: [[-2, -4], [2.25, 4.5]], color: "violet", w: 2.8 }, { pts: [[-3.5, -3.5], [0.5, 4.5]], color: "red", w: 2.4, dash: true }],
  arrows: [{ from: [0, 0], to: [1, 2], color: "blue", w: 2.4 }, { from: [0, 0], to: [-1.5, -3], color: "blue", w: 2.4 }],
  points: [{ x: 0, y: 0, label: "0", color: "black", dx: 8, dy: 14 }, { x: 1, y: 2, label: "u", color: "blue" }, { x: -1.5, y: -3, label: "−1.5u", color: "blue" }] },
  "violet: y = 2x passes through 0 and keeps every multiple of u; dashed red: y = 2x + 3 misses 0");
/** a plane through the origin in R³ with two of its vectors and their sum */
const planeFig = vfig(scene3(3.2, { polys: [patch3([0, 0, 0], [1, 0, -1], [0, 1, -1], 1.6, "#ede9fe", "violet", 0.55)],
  arrows: [a3([0, 0, 0], [1, 0, -1], { color: "blue", vl: "u", off: 14 }), a3([0, 0, 0], [0, 1, -1], { color: "red", vl: "v", off: -14 }), a3([0, 0, 0], [1, 1, -2], { color: "green", label: "u + v", off: 14 })],
  points: [pt3([0, 0, 0], "0", { color: "black", dx: -14 })] }), "the plane x₁ + x₂ + x₃ = 0: sums and multiples of its vectors stay in it");
/** the union of the two axes: closed under scaling but not addition */
const axesFig = vfig({ view: { xmin: -3, xmax: 3.5, ymin: -2.5, ymax: 3.5 }, step: 1, width: 280,
  segs: [{ pts: [[-3, 0], [3.5, 0]], color: "violet", w: 3.6 }, { pts: [[0, -2.5], [0, 3.5]], color: "violet", w: 3.6 }],
  arrows: [{ from: [0, 0], to: [2, 0], color: "blue", w: 2.4 }, { from: [0, 0], to: [0, 2], color: "red", w: 2.4 }, { from: [0, 0], to: [2, 2], color: "green", w: 2.4 }],
  points: [{ x: 2, y: 2, label: "(2, 2) is off both axes", color: "green", dx: -6, anchor: "end" }] });

export const blocks = () => [
  intro({
    icon: "🧱",
    title: "Subspaces and the Subspace Test",
    overview: S`Some sets of vectors in \(\mathbb R^n\) are "self-contained": adding two of their vectors or scaling one never leads outside the set. Such a set is a <strong>subspace</strong>. Lines and planes through the origin are subspaces; lines that miss the origin, quadrants and curves are not. Subspaces are the natural home of everything in the rest of the course — solution sets of homogeneous systems, spans, and the null, column and row spaces of a matrix. This lesson gives the definition and the three-part <strong>subspace test</strong>, and shows how to prove that a set is (or is not) a subspace.`,
    goals: [
      "state the definition of a subspace of \\(\\mathbb R^n\\);",
      "apply the subspace test to prove that a set is a subspace;",
      "show that a set is not a subspace with a single counterexample;",
      "explain why every subspace contains the zero vector;",
      "recognise the subspaces of \\(\\mathbb R^2\\) and \\(\\mathbb R^3\\) geometrically.",
    ],
    outcomes: "subspaces of Rⁿ: definition, the subspace test, examples and non-examples",
    prior: [
      [S`Is \((2,-1,1)\) a solution of \(x_1+x_2-x_3=0\)?`, S`\(2-1-1=0\): yes.`],
      [S`If \(\vec u\) and \(\vec v\) solve \(A\vec x=\vec 0\), what about \(\vec u+\vec v\)?`, S`It solves \(A\vec x=\vec 0\) too (2.6).`],
      [S`What does \(0\cdot\vec u\) equal for any vector \(\vec u\)?`, S`The zero vector \(\vec 0\).`],
    ],
    words: [
      ["Subset", "a set of vectors inside \\(\\mathbb R^n\\)", "\\(S\\subseteq\\mathbb R^3\\)"],
      ["Closed under addition", "\\(\\vec u,\\vec v\\in S\\Rightarrow\\vec u+\\vec v\\in S\\)", "a line through \\(\\vec 0\\)"],
      ["Closed under scalar multiplication", "\\(\\vec u\\in S,\\ c\\in\\mathbb R\\Rightarrow c\\vec u\\in S\\)", "a plane through \\(\\vec 0\\)"],
      ["Subspace", "a non-empty subset closed under both operations", "\\(\\{\\vec 0\\}\\), \\(\\mathbb R^n\\)"],
      ["Counterexample", "specific vectors showing a closure property fails", "\\((1,0)+(0,1)\\notin S\\)"],
    ],
  }),

  section("📌 The definition", S`
  ${definition("subspace", S`A set \(S\) of vectors in \(\mathbb R^n\) is a <strong>subspace</strong> of \(\mathbb R^n\) if
  <ol style="margin:4px 0 0;"><li>\(S\) is a non-empty subset of \(\mathbb R^n\);</li><li>\(S\) is <strong>closed under addition</strong>: if \(\vec u,\vec v\in S\) then \(\vec u+\vec v\in S\);</li><li>\(S\) is <strong>closed under scalar multiplication</strong>: if \(\vec u\in S\) and \(c\in\mathbb R\) then \(c\vec u\in S\).</li></ol>`)}
  <p>Checking these three conditions is the <strong>subspace test</strong>. Conditions 2 and 3 must hold for <em>all</em> vectors in \(S\) and <em>all</em> real scalars, so proving them needs general vectors, not examples. Disproving one needs only a single counterexample.</p>
  ${theorem("every subspace contains 0", S`If \(S\) is a subspace, then \(\vec 0\in S\).`, S`\(S\) is non-empty, so it contains some \(\vec u\). By closure under scalar multiplication with \(c=0\), \(0\vec u=\vec 0\in S\).`)}
  <p>So the quickest way to show a set is non-empty is to check \(\vec 0\in S\) — and if \(\vec 0\notin S\), the set is <strong>not</strong> a subspace at once.</p>
  <div style="text-align:center;">${twoLines}</div>`),

  section("📌 The smallest and largest subspaces", S`
  <p>\(\{\vec 0\}\) is a subspace: it is non-empty, \(\vec 0+\vec 0=\vec 0\) and \(c\vec 0=\vec 0\). It is called the <strong>zero</strong> (or trivial) subspace.</p>
  <p>\(\mathbb R^n\) itself is a subspace: sums and multiples of vectors in \(\mathbb R^n\) are in \(\mathbb R^n\).</p>
  <p>The empty set is <strong>not</strong> a subspace — condition 1 fails.</p>
  ${keyIdea(S`The subspaces of \(\mathbb R^2\) are exactly: \(\{\vec 0\}\), lines through the origin, and \(\mathbb R^2\). The subspaces of \(\mathbb R^3\) are: \(\{\vec 0\}\), lines through the origin, planes through the origin, and \(\mathbb R^3\). (Section 5.4 proves there are no others.)`)}
  <div style="text-align:center;">${planeFig}</div>`),

  section("📌 How to write a subspace proof", S`
  <p>For a set given by conditions, such as \(S=\{\vec x\in\mathbb R^3: x_1+x_2+x_3=0\}\):</p>
  <ol>
  <li><strong>Non-empty:</strong> show \(\vec 0\) satisfies the conditions.</li>
  <li><strong>Addition:</strong> take arbitrary \(\vec x,\vec y\in S\) — write down what that means — and show \(\vec x+\vec y\) satisfies the conditions.</li>
  <li><strong>Scalar multiplication:</strong> take arbitrary \(\vec x\in S\) and \(c\in\mathbb R\) and show \(c\vec x\) satisfies the conditions.</li>
  </ol>
  <p>A set defined by <strong>homogeneous linear equations</strong> always passes. A constant term that is not 0, a product of variables, a square, an absolute value, an inequality, or an "or" usually makes it fail — then look for a counterexample.</p>
  <div style="text-align:center;">${axesFig}</div>
  <p>The union of the two axes is closed under scalar multiplication but not under addition: \((2,0)+(0,2)=(2,2)\) lies on neither axis.</p>`),

  section("📌 Explore", S`<p>Pick a set and move \(\vec u\), \(\vec v\) and the scalar \(c\). For a subspace, the green sum and the amber multiple always stay in the set. For the others, find the positions that break a condition.</p>`),
  widget("laSubspace", { init: { set: "line0" } }),

  section("📌 Common mistakes", watchOut([
    "Checking closure with two particular vectors does not prove it — use arbitrary vectors.",
    "A set that contains 0 is not automatically a subspace (the union of the axes contains 0).",
    "A line or plane that misses the origin is never a subspace, however 'flat' it looks.",
    "Closure under scalar multiplication means ALL real scalars, including negatives and 0.",
    "Inequalities (x₁ ≥ 0) and products (x₁x₂ = 0) are the usual sources of failure.",
  ])),

  examples([
    ["A set defined by two homogeneous equations", S`Show that \(S=\{\vec x\in\mathbb R^3: x_1-2x_2=0,\ x_2+x_3=0\}\) is a subspace of \(\mathbb R^3\).`,
      [S`<strong>Matrix form.</strong> The two equations say \(A\vec x=\vec 0\) with \[A=${am([[1, -2, 0], [0, 1, 1]], false)},\qquad A\vec x=${am([[1, -2, 0], [0, 1, 1]], false)}${cv("x_1", "x_2", "x_3")}=${cv("x_1-2x_2", "x_2+x_3")}.\] So \(S=\{\vec x: A\vec x=\vec 0\}\).`,
        S`<strong>Non-empty.</strong> \[A\vec 0=${am([[1, -2, 0], [0, 1, 1]], false)}${cv(0, 0, 0)}=${cv("1(0)-2(0)+0(0)", "0(0)+1(0)+1(0)")}=${cv(0, 0)},\] so \(\vec 0\in S\).`,
        S`<strong>Closed under addition.</strong> Let \(\vec x,\vec y\in S\), so \(A\vec x=\vec 0\) and \(A\vec y=\vec 0\). By the distributive law for matrix–vector products, \[A(\vec x+\vec y)=A\vec x+A\vec y=${cv(0, 0)}+${cv(0, 0)}=${cv(0, 0)},\] so \(\vec x+\vec y\in S\).`,
        S`<strong>Closed under scalar multiplication.</strong> Let \(\vec x\in S\) and \(c\in\mathbb R\). Then \[A(c\vec x)=c(A\vec x)=c${cv(0, 0)}=${cv(0, 0)},\] so \(c\vec x\in S\). All three conditions hold: \(S\) is a subspace.`,
        ...steps([[1, -2, 0, 0], [0, 1, 1, 0]], [
          [S`<strong>Describe \(S\).</strong> Solve \(A\vec x=\vec 0\). Column 2 has a pivot below; clear the \(-2\) above it.`, ["R1+2R2"]],
        ], { intro: "Write the augmented matrix [A | 0]" }).steps,
        S`RREF rows: \(x_1+2x_3=0\) and \(x_2+x_3=0\), with \(x_3=t\) free. So \[\vec x=${cv("-2t", "-t", "t")}=t${cv(-2, -1, 1)}.\]`,
        S`Check: \(${am([[1, -2, 0], [0, 1, 1]], false)}${cv(-2, -1, 1)}=${cv("-2+2+0", "0-1+1")}=${cv(0, 0)}\) ✓.`],
      S`\(S\) is a subspace: the line \(t(-2,-1,1)\)`],
    ["A line that misses the origin", S`Is \(S=\{(x,y): y=3x-2\}\) a subspace of \(\mathbb R^2\)?`,
      [S`<strong>Matrix form.</strong> \(y=3x-2\) is \(3x-y=2\), i.e. \(A\vec x=b\) with \[A=${am([[3, -1]], false)},\quad \vec x=${cv("x", "y")},\quad b=${am([[2]], false)}.\]`,
        S`<strong>Test the zero vector.</strong> \[A\vec 0=${am([[3, -1]], false)}${cv(0, 0)}=${am([["3(0)-1(0)"]], false)}=${am([[0]], false)}\ne${am([[2]], false)},\] so \(\vec 0\notin S\). Every subspace contains \(\vec 0\): \(S\) is not a subspace.`,
        S`<strong>A closure failure as well.</strong> \(\vec u=${cv(1, 1)}\): \(A\vec u=${am([["3(1)-1(1)"]], false)}=${am([[2]], false)}\), so \(\vec u\in S\). But \[A(2\vec u)=${am([[3, -1]], false)}${cv(2, 2)}=${am([["6-2"]], false)}=${am([[4]], false)}\ne${am([[2]], false)},\] so \(2\vec u\notin S\).`,
        S`In general \(A(c\vec u)=c(A\vec u)=2c\), which equals 2 only for \(c=1\): a nonzero right side \(b\) always breaks closure.`],
      S`not a subspace (it does not contain \(\vec 0\))`],
    ["Closed under scaling but not addition", S`Is \(S=\{(x_1,x_2,x_3): x_1x_3=0\}\) a subspace of \(\mathbb R^3\)?`,
      [S`<strong>Not a matrix equation.</strong> The condition \(x_1x_3=0\) multiplies two unknowns, so it cannot be written as \(A\vec x=\vec 0\); test the three conditions directly, with vectors as columns.`,
        S`<strong>Zero and scaling.</strong> \(\vec 0=${cv(0, 0, 0)}\): \(0\cdot0=0\), so \(\vec 0\in S\). If \(\vec x=${cv("x_1", "x_2", "x_3")}\in S\), then \(c\vec x=${cv("cx_1", "cx_2", "cx_3")}\) has \((cx_1)(cx_3)=c^2(x_1x_3)=c^2\cdot0=0\): closed under scaling.`,
        S`<strong>Addition fails.</strong> \(\vec u=${cv(1, 0, 0)}\in S\) (\(1\cdot0=0\)) and \(\vec v=${cv(0, 0, 1)}\in S\) (\(0\cdot1=0\)), but \[\vec u+\vec v=${cv(1, 0, 0)}+${cv(0, 0, 1)}=${cv(1, 0, 1)},\quad 1\cdot1=1\ne0.\]`,
        S`One counterexample is enough: \(S\) (the union of the planes \(x_1=0\) and \(x_3=0\)) is not a subspace.`],
      S`not a subspace: \((1,0,0)+(0,0,1)\notin S\)`],
    ["Closed under addition but not scaling", S`Is \(S=\{\vec x\in\mathbb R^2: x_1\ge0,\ x_2\ge0\}\) (the first quadrant) a subspace?`,
      [S`<strong>Not a matrix equation.</strong> Inequalities cannot be written as \(A\vec x=\vec 0\); test the conditions with column vectors.`,
        S`<strong>Zero and addition.</strong> \(\vec 0=${cv(0, 0)}\in S\). If \(\vec x=${cv("x_1", "x_2")}\) and \(\vec y=${cv("y_1", "y_2")}\) have nonnegative entries, so does \(\vec x+\vec y=${cv("x_1+y_1", "x_2+y_2")}\): closed under addition.`,
        S`<strong>Scaling fails.</strong> \(\vec u=${cv(1, 2)}\in S\), but \[(-1)\vec u=(-1)${cv(1, 2)}=${cv(-1, -2)},\] whose entries are negative, so \((-1)\vec u\notin S\).`],
      S`not a subspace: negative scalars leave the quadrant`],
    ["A set described by a parameter", S`Show that \(S=\{(2t,-t,3t): t\in\mathbb R\}\) is a subspace of \(\mathbb R^3\) and describe it.`,
      [S`\(t=0\) gives \(\vec 0\in S\).`, S`Two elements are \((2s,-s,3s)\) and \((2t,-t,3t)\); their sum is \((2(s+t),-(s+t),3(s+t))\), which has the same form with parameter \(s+t\).`, S`\(c(2t,-t,3t)=(2(ct),-(ct),3(ct))\) has the same form with parameter \(ct\).`, S`So \(S\) is a subspace: the line through the origin in the direction \(${cv(2, -1, 3)}\).`],
      S`a subspace: the line \(t(2,-1,3)\)`,
      vfig(scene3(3.5, { segs: [line3([0, 0, 0], [2, -1, 3], -0.9, 0.9, "violet")], arrows: [a3([0, 0, 0], [2, -1, 3], { color: "blue", label: "(2, −1, 3)", off: 14 })], points: [pt3([0, 0, 0], "0", { color: "black", dx: -14 })] }))],
  ]),

  practice([
    q("contains 0?", S`Which set is <strong>not</strong> a subspace of \(\mathbb R^2\) because it misses \(\vec 0\)?`, choice([S`\(\{(x,y): x+y=1\}\)`, S`\(\{(x,y): x+y=0\}\)`, S`\(\{(x,y): y=5x\}\)`, S`\(\{\vec 0\}\)`], 0),
      "Substitute (0, 0).", [S`\(0+0=0\ne1\).`], S`\(\{(x,y): x+y=1\}\)`),
    q("counterexample", S`\(S=\{(x,y): xy\ge0\}\) contains \((1,2)\), \((-3,-1)\), \((2,0)\) and \((0,-1)\). Which sum shows that \(S\) is not closed under addition?`, choice([S`\((2,0)+(0,-1)=(2,-1)\)`, S`\((1,2)+(2,0)=(3,2)\)`, S`\((-3,-1)+(0,-1)=(-3,-2)\)`, S`\((1,2)+(1,2)=(2,4)\)`], 0),
      "Find a sum with xy < 0.", [S`\((2)(-1)=-2\lt0\).`], S`\((2,0)+(0,-1)\)`),
    q("which pass", S`How many of these are subspaces of \(\mathbb R^3\): \(\{\vec 0\}\), \(\mathbb R^3\), the plane \(x_1=2x_3\), the plane \(x_1=2\)?`, num(3),
      "Check for 0 and homogeneous equations.", [S`\(x_1=2\) misses \(\vec 0\); the other three are subspaces.`], S`\(3\)`),
    q("scalar", S`\(S\) is a subspace and \(\vec u=(1,-2,4)\in S\). Which vector must also be in \(S\)?`, choice([S`\((-3,6,-12)\)`, S`\((2,-2,4)\)`, S`\((1,2,4)\)`, S`\((0,0,1)\)`], 0),
      "Multiples of u.", [S`\((-3,6,-12)=-3\vec u\).`], S`\((-3,6,-12)\)`),
    q("value of b", S`For which \(b\) is \(\{\vec x\in\mathbb R^3: x_1+4x_2-x_3=b\}\) a subspace?`, num(0),
      "It must contain 0.", [S`\(\vec 0\) gives \(0=b\).`], S`\(b=0\)`),
  ]),

  ...hard([
    ["Intersections are subspaces", S`Prove: if \(U\) and \(W\) are subspaces of \(\mathbb R^n\), then \(U\cap W\) (the vectors in both) is a subspace.`,
      [S`\(\vec 0\in U\) and \(\vec 0\in W\), so \(\vec 0\in U\cap W\).`, S`If \(\vec x,\vec y\in U\cap W\): \(\vec x+\vec y\in U\) (closure of \(U\)) and \(\vec x+\vec y\in W\) (closure of \(W\)), so \(\vec x+\vec y\in U\cap W\).`, S`If \(\vec x\in U\cap W\) and \(c\in\mathbb R\): \(c\vec x\in U\) and \(c\vec x\in W\), so \(c\vec x\in U\cap W\).`],
      S`\(U\cap W\) is a subspace (for example two planes through \(\vec 0\) meet in a line through \(\vec 0\))`],
    ["Unions usually are not", S`Let \(U\) be the \(x_1\)-axis and \(W\) the \(x_2\)-axis in \(\mathbb R^2\). Show \(U\cup W\) is not a subspace. Then prove: if \(U\cup W\) is a subspace, one of \(U,W\) contains the other.`,
      [S`\((1,0)\in U\), \((0,1)\in W\), but \((1,1)\) is in neither.`, S`For the general claim, suppose neither contains the other: pick \(\vec u\in U\setminus W\) and \(\vec w\in W\setminus U\).`, S`If \(\vec u+\vec w\in U\), then \(\vec w=(\vec u+\vec w)-\vec u\in U\), a contradiction; if \(\vec u+\vec w\in W\), then \(\vec u=(\vec u+\vec w)-\vec w\in W\), a contradiction.`, S`So \(\vec u+\vec w\notin U\cup W\) and the union is not closed under addition.`],
      S`a union of subspaces is a subspace only when one contains the other`, axesFig],
  ], [
    q("hard", S`For which \(k\) is \(S=\{\vec x\in\mathbb R^3: x_1+x_2=k^2-4,\ x_3=k+2\}\) a subspace?`, num(-2),
      "Both constants must be 0.", [S`\(k^2-4=0\) and \(k+2=0\) give \(k=-2\).`], S`\(k=-2\)`),
    q("hard", S`Which of these is a subspace of \(\mathbb R^3\)?`, choice([S`\(\{(a,\,a+b,\,b): a,b\in\mathbb R\}\)`, S`\(\{(a,\,1,\,b): a,b\in\mathbb R\}\)`, S`\(\{(a,\,a^2,\,0): a\in\mathbb R\}\)`, S`\(\{(a,\,b,\,c): a\le b\}\)`], 0),
      "Look for a span.", [S`\((a,a+b,b)=a(1,1,0)+b(0,1,1)\): a plane through \(\vec 0\).`], S`\(\{(a,a+b,b)\}\)`),
    q("hard", S`\(S\) is a subspace containing \(\vec u=(1,0,2)\) and \(\vec v=(0,1,-1)\). Find \(x\) so that \((3,-2,x)\) must be in \(S\).`, num(8),
      "Write it as su + tv.", [S`\((3,-2,x)=3\vec u-2\vec v=(3,-2,6+2)\).`], S`\(8\)`),
  ]),

  wrapUp({
    qas: [
      ["What is a subspace?", "A non-empty subset of Rⁿ that is closed under addition and under scalar multiplication."],
      ["How do I prove a set is a subspace?", "Show 0 is in it, then take arbitrary members and arbitrary scalars and show the sum and the multiple satisfy the defining conditions."],
      ["How do I prove a set is NOT a subspace?", "Give one concrete counterexample: 0 missing, or two members whose sum leaves the set, or a member and a scalar whose product leaves it."],
      ["Why must every subspace contain 0?", "Take any member u and the scalar 0: closure gives 0u = 0 in the set."],
      ["What are the subspaces of R³?", "{0}, lines through the origin, planes through the origin, and R³ itself."],
    ],
    summary: [
      "Subspace: non-empty, closed under +, closed under scalar multiples.",
      "Every subspace contains 0 — check it first.",
      "{0} and Rⁿ are subspaces; the empty set is not.",
      "Homogeneous linear conditions give subspaces; constants ≠ 0, products, squares, inequalities usually do not.",
      "Proofs use arbitrary vectors; disproofs need one counterexample.",
    ],
    next: "5.2 shows that every span is a subspace and every subspace defined by homogeneous equations is a span — two ways to describe the same objects.",
  }),
];
