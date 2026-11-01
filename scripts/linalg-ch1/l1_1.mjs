// LINALG1 1.1 — Vectors in Rⁿ and Linear Combinations: Rⁿ as columns of n real numbers, equality, the zero
// vector, vectors between points, addition and scalar multiples (algebra and geometry), the vector-space
// properties, linear combinations, the standard basis, and deciding whether a vector is a combination of others.
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, definition, theorem, vec, cv } from "./lib.mjs";
import { vfig, scene3, a3, pt3, seg3 } from "./vecfig.mjs";

export const TITLE = "1.1 Vectors in Rⁿ and Linear Combinations";
export const ID = "11a10001-0001-4001-8001-000000000101";

const S = String.raw;
export const blocks = () => [
  intro({
    icon: "🧭",
    title: "Vectors in ℝⁿ and Linear Combinations",
    overview: S`Linear algebra begins with one object: a vector, an ordered list of real numbers. In \(\mathbb R^2\) and \(\mathbb R^3\) we can draw vectors as arrows from the origin; in \(\mathbb R^n\) we keep exactly the same algebra even when we can no longer draw the picture. This lesson sets up the two operations everything else is built from — adding vectors and multiplying them by scalars — and the idea that ties them together: a <strong>linear combination</strong>.`,
    goals: [
      "describe \\(\\mathbb R^n\\) and recognise when two vectors are equal or when a sum is undefined;",
      "add vectors and multiply them by scalars, algebraically and as arrows;",
      "find the vector from one point to another;",
      "use the vector-space properties to solve vector equations;",
      "decide whether a vector is a linear combination of given vectors, and find the coefficients.",
    ],
    outcomes: "geometry of \\(\\mathbb R^n\\): vector operations and linear combinations",
    prior: [
      [S`Solve \(2s+t=7,\ s-t=2\).`, S`Adding gives \(3s=9\), so \(s=3\), \(t=1\).`],
      [S`Plot the point \((2,-1,3)\): which way is each step?`, S`2 along \(x_1\), \(-1\) along \(x_2\), 3 up along \(x_3\).`],
      [S`Expand \(3(a-2b)\).`, S`\(3a-6b\).`],
    ],
    words: [
      ["\\(\\mathbb R^n\\)", "all columns of \\(n\\) real numbers", `\\(${cv(1, 0, -2)}\\in\\mathbb R^3\\)`],
      ["Component", "one entry of a vector", "the 2nd component of \\((4,7,1)\\) is 7"],
      ["Scalar", "a real number", "\\(-3,\\ \\tfrac12,\\ \\pi\\)"],
      ["Linear combination", "\\(c_1\\vec v_1+\\dots+c_k\\vec v_k\\)", "\\(2\\vec u-5\\vec w\\)"],
      ["Standard basis", "\\(\\vec e_i\\) has a 1 in place \\(i\\), 0 elsewhere", "\\(\\vec e_2=(0,1,0)\\) in \\(\\mathbb R^3\\)"],
    ],
  }),

  section("📌 What is a vector in ℝⁿ?", S`
  ${definition("ℝⁿ", S`For a positive integer \(n\), \(\mathbb R^n\) is the set of all columns \(\vec x=\begin{bmatrix}x_1\\x_2\\\vdots\\x_n\end{bmatrix}\) with real components \(x_1,\dots,x_n\). Two vectors are <strong>equal</strong> when they have the same number of components and every component matches. The <strong>zero vector</strong> \(\vec 0\) has every component 0.`)}
  <p>In \(\mathbb R^2\) and \(\mathbb R^3\) we draw \(\vec x\) as the arrow from the origin \(O\) to the point with coordinates \((x_1,x_2,\dots)\). To save space we often write a column as a row tuple, \(\vec x=(x_1,\dots,x_n)\) — it means the same vector.</p>
  ${vfig(scene3(4.5, { arrows: [a3([0, 0, 0], [3, 4, 2.5], { color: "blue", vl: "x", off: -16 })], segs: [seg3([[3, 0, 0], [3, 4, 0], [0, 4, 0]], { dash: true, w: 1.1 }), seg3([[3, 4, 0], [3, 4, 2.5]], { dash: true, w: 1.1 })], points: [pt3([3, 4, 2.5], "(3, 4, 2.5)", { color: "blue" })] }), "the vector (3, 4, 2.5) in ℝ³: 3 along x₁, 4 along x₂, 2.5 up")}
  <p>Vectors do not have to be arrows. A shop that tracks stock of four items, a pixel's (red, green, blue) values, or the prices of 500 stocks are all vectors — in \(\mathbb R^4\), \(\mathbb R^3\) and \(\mathbb R^{500}\). The algebra below works the same in every case.</p>
  ${keyIdea(S`A vector in \(\mathbb R^n\) is just an ordered list of \(n\) numbers. Order matters: \((1,2)\ne(2,1)\). Size matters too: \((1,2)\) and \((1,2,0)\) live in different spaces and are <em>not</em> equal.`)}`),

  section("📌 Adding vectors and scaling them", S`
  ${definition("sum and scalar multiple", S`For \(\vec x,\vec y\in\mathbb R^n\) and a scalar \(c\): \(\vec x+\vec y=(x_1+y_1,\dots,x_n+y_n)\) and \(c\vec x=(cx_1,\dots,cx_n)\). The sum is only defined when both vectors are in the same \(\mathbb R^n\). We write \(-\vec x=(-1)\vec x\) and \(\vec x-\vec y=\vec x+(-\vec y)\).`)}
  ${vfig({ view: { xmin: -1, xmax: 7, ymin: -1, ymax: 5 }, step: 1, polys: [{ pts: [[0, 0], [4, 1], [6, 4], [2, 3]], fill: "#ecfdf5" }], arrows: [{ from: [0, 0], to: [4, 1], vl: "x", off: 16 }, { from: [0, 0], to: [2, 3], color: "red", vl: "y", off: -16 }, { from: [4, 1], to: [6, 4], color: "red", dash: true, w: 2 }, { from: [2, 3], to: [6, 4], dash: true, w: 2 }, { from: [0, 0], to: [6, 4], color: "green", label: "x + y", off: -14 }] }, "tip to tail: x + y is the diagonal of the parallelogram on x and y")}
  ${vfig({ view: { xmin: -5, xmax: 7, ymin: -2.6, ymax: 3.6 }, grid: false, axes: false, segs: [{ pts: [[-5, -2.5], [7, 3.5]], dash: true, color: "gray" }], arrows: [{ from: [0, 0], to: [2, 1], vl: "x", off: -16 }, { from: [0, 0.9], to: [5, 3.4], color: "green", label: "2.5x", off: -14 }, { from: [0, -0.7], to: [-4, -2.7], color: "red", label: "−2x", off: 14 }] }, "scalar multiples stay on the line through x; a negative scalar reverses the direction")}
  <p>The vector <strong>from point \(A\) to point \(B\)</strong> is \(\overrightarrow{AB}=\vec b-\vec a\), where \(\vec a\) and \(\vec b\) are the position vectors of \(A\) and \(B\): it is what you add to \(\vec a\) to land on \(\vec b\).</p>
  ${theorem("vector-space properties of ℝⁿ", S`For all \(\vec x,\vec y,\vec z\in\mathbb R^n\) and scalars \(c,d\):`)}
  ${table(["Property", "Statement"], [
    ["closure", "\\(\\vec x+\\vec y\\) and \\(c\\vec x\\) are in \\(\\mathbb R^n\\)"],
    ["commutative, associative", "\\(\\vec x+\\vec y=\\vec y+\\vec x\\), \\((\\vec x+\\vec y)+\\vec z=\\vec x+(\\vec y+\\vec z)\\)"],
    ["zero and negatives", "\\(\\vec x+\\vec 0=\\vec x\\), \\(\\vec x+(-\\vec x)=\\vec 0\\)"],
    ["distributive", "\\(c(\\vec x+\\vec y)=c\\vec x+c\\vec y\\), \\((c+d)\\vec x=c\\vec x+d\\vec x\\)"],
    ["scalars", "\\(c(d\\vec x)=(cd)\\vec x\\), \\(1\\vec x=\\vec x\\)"],
  ])}
  <p>Each property follows from the same property of real numbers, applied one component at a time. They let us solve vector equations exactly like ordinary equations.</p>`),

  section("📌 Linear combinations", S`
  ${definition("linear combination", S`A vector \(\vec b\) is a <strong>linear combination</strong> of \(\vec v_1,\dots,\vec v_k\) if \(\vec b=c_1\vec v_1+c_2\vec v_2+\dots+c_k\vec v_k\) for some scalars \(c_1,\dots,c_k\) (the <em>coefficients</em>).`)}
  <p>Every vector in \(\mathbb R^n\) is a combination of the <strong>standard basis vectors</strong> \(\vec e_1,\dots,\vec e_n\): for example \((4,-1,6)=4\vec e_1-\vec e_2+6\vec e_3\). For other vectors, deciding whether \(\vec b\) is a combination means matching components — which gives one equation per component, a <em>system of linear equations</em> (chapter 2 solves these in general).</p>
  ${keyIdea(S`"Is \(\vec b\) a linear combination of \(\vec u\) and \(\vec v\)?" is the same question as "does the system \(s\vec u+t\vec v=\vec b\) have a solution?" Two non-parallel vectors in \(\mathbb R^2\) reach every point; in \(\mathbb R^3\) they reach only the points of a plane.`)}`),

  section("📌 Explore", S`<p>Move \(s\) and \(t\) to land the green arrow \(s\vec u+t\vec v\) on the target. The skewed grid marks the whole-number combinations. Then switch to a parallel pair: no choice of \(s\) and \(t\) leaves the line.</p>`),
  widget("laCombo", { init: { pair: "general" } }),

  section("📌 Working with vectors", S`
  ${watchOut([
    "A sum of vectors with different numbers of components is undefined — not \"pad with zeros\".",
    "The vector from A to B is b − a (head minus tail), not a − b.",
    "A scalar multiplies every component, including the zeros' neighbours: 3(1, −2, 0) = (3, −6, 0).",
    "To test a linear combination, every component must work; checking only two equations in ℝ³ is not enough.",
    "Coefficients are scalars; you never multiply two vectors componentwise here.",
  ])}`),

  examples([
    ["A combination in ℝ⁴", S`Let \(\vec u=(1,0,-2,4)\) and \(\vec v=(2,-1,3,1)\). Compute \(3\vec u-2\vec v\).`,
      [S`\(3\vec u=(3,0,-6,12)\) and \(2\vec v=(4,-2,6,2)\).`, S`Subtract component by component: \((3-4,\ 0+2,\ -6-6,\ 12-2)\).`],
      S`\(3\vec u-2\vec v=(-1,2,-12,10)\)`],
    ["From one point to another", S`Find \(\overrightarrow{AB}\) for \(A(2,-1,5)\) and \(B(-1,3,2)\), and the midpoint \(M\) of \(AB\).`,
      [S`\(\overrightarrow{AB}=\vec b-\vec a=(-1-2,\ 3+1,\ 2-5)=(-3,4,-3)\).`, S`\(\vec m=\vec a+\tfrac12\overrightarrow{AB}=(2-1.5,\ -1+2,\ 5-1.5)\).`],
      S`\(\overrightarrow{AB}=(-3,4,-3)\), \(M(0.5,1,3.5)\)`,
      vfig(scene3(5, { arrows: [a3([2, -1, 5], [-1, 3, 2], { color: "red", vl: "AB", off: 16 }), a3([0, 0, 0], [2, -1, 5], { color: "gray", w: 1.6, dash: true }), a3([0, 0, 0], [-1, 3, 2], { color: "gray", w: 1.6, dash: true })], points: [pt3([2, -1, 5], "A", { color: "blue" }), pt3([-1, 3, 2], "B", { color: "blue" }), pt3([0.5, 1, 3.5], "M", { color: "green" })] }))],
    ["Solving a vector equation", S`Solve \(2\vec x+(1,-3,4)=5(0,1,-2)\) for \(\vec x\).`,
      [S`Right side: \((0,5,-10)\). Subtract \((1,-3,4)\) from both sides: \(2\vec x=(-1,8,-14)\).`, S`Multiply by \(\tfrac12\) (allowed by the scalar properties).`],
      S`\(\vec x=(-\tfrac12,4,-7)\)`],
    ["Finding the coefficients", S`Write \(\vec w=(8,3)\) as a linear combination of \(\vec u=(2,-1)\) and \(\vec v=(1,3)\).`,
      [S`\(s(2,-1)+t(1,3)=(8,3)\) gives \(2s+t=8\) and \(-s+3t=3\).`, S`From the first, \(t=8-2s\); then \(-s+24-6s=3\), so \(s=3\) and \(t=2\).`, S`Check: \(3(2,-1)+2(1,3)=(6+2,\ -3+6)=(8,3)\).`],
      S`\(\vec w=3\vec u+2\vec v\)`,
      vfig({ view: { xmin: -1, xmax: 9, ymin: -3.6, ymax: 4 }, step: 1, arrows: [{ from: [0, 0], to: [6, -3], vl: "3u", off: 16 }, { from: [6, -3], to: [8, 3], color: "red", vl: "2v", off: -16 }, { from: [0, 0], to: [8, 3], color: "green", vl: "w", off: -16 }] })],
    ["Not every vector is a combination", S`Is \(\vec b=(1,2,4)\) a linear combination of \(\vec p=(1,0,1)\) and \(\vec q=(0,1,2)\)?`,
      [S`\(s\vec p+t\vec q=(s,\ t,\ s+2t)\). Matching the first two components forces \(s=1\), \(t=2\).`, S`Then the third component is \(1+2(2)=5\), but \(\vec b\) needs 4.`],
      S`No — the three equations have no common solution`],
  ]),

  practice([
    q("sum", S`Compute \(2\vec u+\vec v\) for \(\vec u=(3,-1,2)\) and \(\vec v=(-4,5,1)\).`, vec(2, 3, 5),
      "Double u first, then add v component by component.", [S`\(2\vec u=(6,-2,4)\).`, S`\((6-4,\ -2+5,\ 4+1)\).`], S`\((2,3,5)\)`),
    q("between points", S`Find \(\overrightarrow{PQ}\) for \(P(4,0,-3)\) and \(Q(1,2,5)\).`, vec(-3, 2, 8),
      "Head minus tail: q − p.", [S`\((1-4,\ 2-0,\ 5+3)\).`], S`\((-3,2,8)\)`),
    q("equation", S`Solve \(\vec x-3(1,2)=(4,-1)\) for \(\vec x\).`, vec(7, 5),
      "Add 3(1, 2) to both sides.", [S`\(\vec x=(4,-1)+(3,6)\).`], S`\((7,5)\)`),
    q("coefficients", S`\((5,-4)=s(1,1)+t(1,-1)\). Find \(t\).`, num(4.5),
      "s + t = 5 and s − t = −4.", [S`Subtract: \(2t=9\).`], S`\(4.5\)`),
    q("defined?", S`Which expression is <strong>undefined</strong>?`, choice([S`\((1,2)+(1,2,0)\)`, S`\(0\cdot(3,-1)\)`, S`\((1,2,3)-(1,2,3)\)`, S`\(-2(0,0,0,1)\)`], 0),
      "The two vectors must be in the same ℝⁿ.", ["One vector has 2 components and the other has 3."], S`\((1,2)+(1,2,0)\)`),
  ]),

  ...hard([
    ["Which k makes it a combination?", S`For which value of \(k\) is \((k,1,3)\) a linear combination of \((1,2,1)\) and \((2,1,0)\)?`,
      [S`\(s(1,2,1)+t(2,1,0)=(s+2t,\ 2s+t,\ s)\).`, S`The third component forces \(s=3\); the second gives \(6+t=1\), so \(t=-5\).`, S`The first component must then be \(3+2(-5)=-7\).`],
      S`\(k=-7\) (and for every other \(k\) there is no solution)`],
    ["Blending with vectors", S`A roaster's blend A uses 12 kg of arabica and 4 kg of robusta per batch; blend B uses 6 kg and 10 kg. How many batches of each use exactly 48 kg of arabica and 36 kg of robusta?`,
      [S`As vectors (arabica, robusta): \(s(12,4)+t(6,10)=(48,36)\).`, S`\(12s+6t=48\Rightarrow t=8-2s\); then \(4s+10(8-2s)=36\), so \(-16s=-44\) and \(s=2.75\).`, S`\(t=8-5.5=2.5\). Check: \(2.75(12,4)+2.5(6,10)=(33+15,\ 11+25)=(48,36)\).`],
      S`2.75 batches of A and 2.5 batches of B`,
      vfig({ view: { xmin: -2, xmax: 52, ymin: -3, ymax: 40 }, grid: false, width: 380, arrows: [{ from: [0, 0], to: [33, 11], label: "2.75A", off: 14 }, { from: [33, 11], to: [48, 36], color: "red", label: "2.5B", off: -14 }, { from: [0, 0], to: [48, 36], color: "green", label: "(48, 36)", off: -16 }] })],
  ], [
    q("hard", S`For which \(h\) is \((2,h,5)\) in the span of \((1,1,1)\) and \((0,1,3)\)?`, num(3),
      "The first component fixes the first coefficient.", [S`\(s=2\); third: \(2+3t=5\Rightarrow t=1\).`, S`Second: \(h=s+t\).`], S`\(3\)`),
    q("hard", S`\(A(1,2,3)\), \(B(3,6,4)\) and \(C(5,10,c)\) lie on one line. Find \(c\).`, num(5),
      "AC must be a multiple of AB.", [S`\(\overrightarrow{AB}=(2,4,1)\), \(\overrightarrow{AC}=(4,8,c-3)=2\overrightarrow{AB}\).`], S`\(5\)`),
    q("hard", S`\(a(1,-1,2,0)+b(2,1,0,-1)=(4,5,-4,-3)\). Find \(a\).`, num(-2),
      "Use the last component first.", [S`Fourth: \(-b=-3\), so \(b=3\).`, S`Third: \(2a=-4\). Check the first two: \(-2+6=4\), \(2+3=5\).`], S`\(-2\)`),
  ]),

  wrapUp({
    qas: [
      ["Are (1, 2) and (1, 2, 0) the same vector?", "No. They live in different spaces (ℝ² and ℝ³), so they cannot be equal or added."],
      ["How do I find the vector from A to B?", "Subtract the position vectors: b − a."],
      ["Why can I solve vector equations like ordinary ones?", "The vector-space properties (distributive laws, negatives, scalars) all hold componentwise."],
      ["What does 'b is a linear combination of u and v' mean in practice?", "The system you get from s·u + t·v = b, one equation per component, has a solution."],
      ["Can two vectors in ℝ³ combine to give every vector of ℝ³?", "No. Two vectors give at most a plane through the origin; you will see why with span and dimension in chapters 4 and 5."],
    ],
    summary: [
      "ℝⁿ = ordered lists of n real numbers; equal means every component equal.",
      "x + y and cx are computed componentwise; AB = b − a.",
      "The vector-space properties make vector algebra work like ordinary algebra.",
      "A linear combination is c₁v₁ + … + cₖvₖ; finding the cᵢ means solving a linear system.",
    ],
    next: "1.2 uses a point plus multiples of direction vectors to describe lines and planes in ℝⁿ.",
  }),
];
