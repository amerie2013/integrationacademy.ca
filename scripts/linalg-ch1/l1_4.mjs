// LINALG1 1.4 — The Dot Product, Angles and Orthogonality: the algebraic definition, its properties, the
// geometric form u·v = ‖u‖‖v‖cos θ from the law of cosines, angles in Rⁿ, orthogonality, the Pythagorean theorem,
// and the Cauchy–Schwarz and triangle inequalities with proofs.
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, definition, theorem } from "./lib.mjs";
import { vfig, scene3, a3, seg3 } from "./vecfig.mjs";

export const TITLE = "1.4 The Dot Product, Angles and Orthogonality";
export const ID = "11a10001-0001-4001-8001-000000000104";

const S = String.raw;
const RAD = Math.PI / 180;
// the visible edges of the cube [0, 3]³
const CUBE = [[[0, 0, 3], [3, 0, 3], [3, 3, 3], [0, 3, 3], [0, 0, 3]], [[3, 0, 0], [3, 3, 0], [0, 3, 0]], [[3, 0, 0], [3, 0, 3]], [[3, 3, 0], [3, 3, 3]], [[0, 3, 0], [0, 3, 3]]];
export const blocks = () => [
  intro({
    icon: "📐",
    title: "The Dot Product, Angles and Orthogonality",
    overview: S`The dot product turns two vectors into one number by multiplying matching components and adding. That simple recipe carries a lot of geometry: its sign tells you whether the angle between the vectors is acute, right or obtuse; it gives the angle exactly; and it lets us <em>define</em> perpendicular ("orthogonal") vectors in \(\mathbb R^n\), where we cannot see angles at all.`,
    goals: [
      "compute dot products in \\(\\mathbb R^n\\) and use their algebraic properties;",
      "find the angle between two vectors;",
      "test for orthogonality and find unknowns that make vectors orthogonal;",
      "expand expressions such as \\(\\|\\vec u+\\vec v\\|^2\\) with the dot product;",
      "state and prove the Cauchy–Schwarz and triangle inequalities.",
    ],
    outcomes: "geometry of \\(\\mathbb R^n\\): dot product, angles and orthogonality",
    prior: [
      [S`\(\cos90^\circ\) and \(\cos120^\circ\)?`, S`\(0\) and \(-\tfrac12\).`],
      [S`Law of cosines for side \(c\) opposite angle \(C\)?`, S`\(c^2=a^2+b^2-2ab\cos C\).`],
      [S`\(\|(1,2,2)\|\)?`, S`\(\sqrt{1+4+4}=3\).`],
    ],
    words: [
      ["Dot product", "\\(\\vec u\\cdot\\vec v=u_1v_1+\\dots+u_nv_n\\)", "\\((1,2)\\cdot(3,-1)\\) is 1"],
      ["Angle", "\\(\\cos\\theta=\\frac{\\vec u\\cdot\\vec v}{\\|\\vec u\\|\\|\\vec v\\|}\\), \\(0\\le\\theta\\le\\pi\\)", "\\(\\theta=60^\\circ\\)"],
      ["Orthogonal", "\\(\\vec u\\cdot\\vec v=0\\)", "\\((1,1)\\perp(1,-1)\\)"],
      ["Cauchy–Schwarz", "\\(|\\vec u\\cdot\\vec v|\\le\\|\\vec u\\|\\|\\vec v\\|\\)", "makes the angle well defined"],
    ],
  }),

  section("📌 Definition and algebra", S`
  ${definition("dot product", S`For \(\vec u,\vec v\in\mathbb R^n\), \(\vec u\cdot\vec v=u_1v_1+u_2v_2+\dots+u_nv_n\). The result is a <strong>scalar</strong>.`)}
  ${theorem("properties", S`For \(\vec u,\vec v,\vec w\in\mathbb R^n\) and \(c\in\mathbb R\):`)}
  ${table(["Property", "Statement"], [
    ["symmetric", "\\(\\vec u\\cdot\\vec v=\\vec v\\cdot\\vec u\\)"],
    ["distributive", "\\(\\vec u\\cdot(\\vec v+\\vec w)=\\vec u\\cdot\\vec v+\\vec u\\cdot\\vec w\\)"],
    ["scalars", "\\((c\\vec u)\\cdot\\vec v=c(\\vec u\\cdot\\vec v)\\)"],
    ["length", "\\(\\vec u\\cdot\\vec u=\\|\\vec u\\|^2\\ge0\\), zero only for \\(\\vec u=\\vec 0\\)"],
  ])}
  <p>These let you expand brackets exactly like ordinary algebra: \(\|\vec u+\vec v\|^2=(\vec u+\vec v)\cdot(\vec u+\vec v)=\|\vec u\|^2+2\,\vec u\cdot\vec v+\|\vec v\|^2\).</p>`),

  section("📌 The geometry: angles", S`
  ${vfig({ view: { xmin: -0.6, xmax: 6.4, ymin: -0.7, ymax: 4.2 }, grid: false, axes: false, arrows: [{ from: [0, 0], to: [5.5, 0.8], vl: "u", off: 16 }, { from: [0, 0], to: [1.6, 3.6], color: "red", vl: "v", off: -16 }, { from: [1.6, 3.6], to: [5.5, 0.8], color: "green", w: 2, dash: true, label: "u − v", off: -16 }], arcs: [{ at: [0, 0], r: 0.9, a: Math.atan2(0.8, 5.5) / RAD, b: Math.atan2(3.6, 1.6) / RAD, label: "θ" }] }, "the triangle on u, v and u − v")}
  <p>Apply the law of cosines to the triangle with sides \(\vec u\), \(\vec v\) and \(\vec u-\vec v\): \(\|\vec u-\vec v\|^2=\|\vec u\|^2+\|\vec v\|^2-2\|\vec u\|\|\vec v\|\cos\theta\). Expanding the left side with the dot product gives \(\|\vec u\|^2-2\,\vec u\cdot\vec v+\|\vec v\|^2\). Comparing:</p>
  ${theorem("geometric form", S`\(\vec u\cdot\vec v=\|\vec u\|\,\|\vec v\|\cos\theta\), where \(\theta\in[0,\pi]\) is the angle between nonzero \(\vec u\) and \(\vec v\).`)}
  ${table(["sign of u · v", "angle θ"], [["positive", "acute, \\(0\\le\\theta\\lt90^\\circ\\)"], ["zero", "right angle — orthogonal"], ["negative", "obtuse, \\(90^\\circ\\lt\\theta\\le180^\\circ\\)"]])}
  <p>In \(\mathbb R^n\) we turn this around and <em>define</em> the angle by \(\cos\theta=\dfrac{\vec u\cdot\vec v}{\|\vec u\|\|\vec v\|}\). This only makes sense if the fraction lies between \(-1\) and \(1\) — which is exactly what Cauchy–Schwarz guarantees.</p>
  ${definition("orthogonal", S`\(\vec u\) and \(\vec v\) are <strong>orthogonal</strong>, \(\vec u\perp\vec v\), when \(\vec u\cdot\vec v=0\). (The zero vector is orthogonal to every vector.)`)}
  ${theorem("Pythagoras in ℝⁿ", S`\(\vec u\perp\vec v\) if and only if \(\|\vec u+\vec v\|^2=\|\vec u\|^2+\|\vec v\|^2\).`, S`\(\|\vec u+\vec v\|^2=\|\vec u\|^2+2\,\vec u\cdot\vec v+\|\vec v\|^2\), which equals \(\|\vec u\|^2+\|\vec v\|^2\) exactly when \(\vec u\cdot\vec v=0\).`)}`),

  section("📌 Explore", S`<p>Move the components of \(\vec u\) and \(\vec v\). Watch the sign of \(\vec u\cdot\vec v\) change as the angle passes \(90^\circ\), and try to make the dot product exactly 0 with non-axis vectors, for example \(\vec u=(4,1)\), \(\vec v=(-1,4)\).</p>`),
  widget("laDot", { init: { u: [4, 1], v: [1, 3] } }),

  section("📌 Two inequalities", S`
  ${theorem("Cauchy–Schwarz", S`\(|\vec u\cdot\vec v|\le\|\vec u\|\,\|\vec v\|\) for all \(\vec u,\vec v\in\mathbb R^n\), with equality exactly when one vector is a multiple of the other.`)}
  ${theorem("triangle inequality", S`\(\|\vec u+\vec v\|\le\|\vec u\|+\|\vec v\|\).`, S`\(\|\vec u+\vec v\|^2=\|\vec u\|^2+2\,\vec u\cdot\vec v+\|\vec v\|^2\le\|\vec u\|^2+2\|\vec u\|\|\vec v\|+\|\vec v\|^2=(\|\vec u\|+\|\vec v\|)^2\), using Cauchy–Schwarz in the middle. Both sides are nonnegative, so take square roots.`)}
  <p>The proof of Cauchy–Schwarz itself is the first hard challenge below.</p>
  ${watchOut([
    "The dot product of two vectors is a number, not a vector.",
    "u · v = 0 means orthogonal — it does not mean either vector is 0.",
    "Use radians or degrees consistently when you take arccos.",
    "‖u + v‖² has a middle term 2u·v; it is not ‖u‖² + ‖v‖² unless u ⊥ v.",
    "You cannot 'cancel' a vector: u·v = u·w does not force v = w.",
  ])}`),

  examples([
    ["Computing and reading the sign", S`Compute \((3,-1,4)\cdot(2,5,-1)\). Is the angle acute, right or obtuse?`,
      [S`\(3(2)+(-1)(5)+4(-1)=6-5-4=-3\).`, S`Negative, so \(\cos\theta\lt0\).`],
      S`\(-3\); the angle is obtuse`],
    ["The angle between two vectors", S`Find the angle between \(\vec u=(1,2,2)\) and \(\vec v=(2,-1,2)\).`,
      [S`\(\vec u\cdot\vec v=2-2+4=4\); \(\|\vec u\|=\|\vec v\|=3\).`, S`\(\cos\theta=\tfrac49\), so \(\theta=\cos^{-1}\tfrac49\).`],
      S`\(\theta\approx63.6^\circ\)`],
    ["Making two vectors orthogonal", S`Find \(k\) so that \((2,k,-3)\perp(4,1,k+1)\).`,
      [S`\(8+k-3(k+1)=0\).`, S`\(5-2k=0\).`],
      S`\(k=2.5\)`],
    ["Diagonal of a cube", S`Find the angle between a main diagonal of a cube and one of its edges.`,
      [S`Put the cube on the axes: edge \(\vec e_1=(1,0,0)\), diagonal \(\vec d=(1,1,1)\).`, S`\(\cos\theta=\dfrac{1}{1\cdot\sqrt3}\).`],
      S`\(\theta=\cos^{-1}\tfrac1{\sqrt3}\approx54.7^\circ\)`,
      vfig(scene3(4.2, { segs: CUBE.map((e) => seg3(e, { color: "gray", w: 1.3 })), arrows: [a3([0, 0, 0], [3, 3, 3], { color: "red", vl: "d", off: -16 }), a3([0, 0, 0], [3, 0, 0], { color: "blue", vl: "e₁", off: 16 })] }))],
    ["Expanding a length", S`\(\|\vec u\|=3\), \(\|\vec v\|=4\) and \(\vec u\cdot\vec v=-2\). Find \(\|\vec u+\vec v\|\).`,
      [S`\(\|\vec u+\vec v\|^2=\|\vec u\|^2+2\,\vec u\cdot\vec v+\|\vec v\|^2=9-4+16=21\).`],
      S`\(\|\vec u+\vec v\|=\sqrt{21}\approx4.58\)`],
  ]),

  practice([
    q("dot product", S`Compute \((1,0,-2,3)\cdot(4,7,1,-1)\).`, num(-1),
      "Multiply matching components and add.", [S`\(4+0-2-3\).`], S`\(-1\)`),
    q("angle", S`Find the angle (degrees) between \((1,1)\) and \((-1,0)\).`, num(135),
      "cos θ = u·v / (‖u‖‖v‖).", [S`\(\cos\theta=\frac{-1}{\sqrt2\cdot1}\).`], S`\(135\)`),
    q("orthogonal", S`Find \(k\) so that \((k,3,1)\perp(2,-1,5)\).`, num(-1),
      "Set the dot product to 0.", [S`\(2k-3+5=0\).`], S`\(-1\)`),
    q("from the angle", S`\(\|\vec u\|=2\), \(\|\vec v\|=5\) and the angle between them is \(60^\circ\). Find \(\vec u\cdot\vec v\).`, num(5),
      "‖u‖‖v‖cos θ.", [S`\(2\times5\times\tfrac12\).`], S`\(5\)`),
    q("sign", S`\(\vec u\cdot\vec v=-7\) for nonzero \(\vec u,\vec v\). The angle between them is:`, choice(["obtuse", "acute", "a right angle", "impossible to tell"], 0),
      "Look at the sign of cos θ.", ["A negative dot product means cos θ < 0."], "obtuse"),
  ]),

  ...hard([
    ["Proving Cauchy–Schwarz", S`Prove \(|\vec u\cdot\vec v|\le\|\vec u\|\,\|\vec v\|\).`,
      [S`If \(\vec v=\vec 0\) both sides are 0. Otherwise, for every real \(t\): \(0\le\|\vec u+t\vec v\|^2=\|\vec v\|^2t^2+2(\vec u\cdot\vec v)t+\|\vec u\|^2\).`, S`A quadratic in \(t\) that is never negative has at most one real root, so its discriminant is \(\le0\): \(4(\vec u\cdot\vec v)^2-4\|\vec v\|^2\|\vec u\|^2\le0\).`, S`So \((\vec u\cdot\vec v)^2\le\|\vec u\|^2\|\vec v\|^2\); take square roots.`, S`Equality means the quadratic has a root \(t_0\), i.e. \(\vec u+t_0\vec v=\vec 0\): one vector is a multiple of the other.`],
      S`\(|\vec u\cdot\vec v|\le\|\vec u\|\|\vec v\|\), so \(-1\le\frac{\vec u\cdot\vec v}{\|\vec u\|\|\vec v\|}\le1\) and angles in \(\mathbb R^n\) are well defined`],
    ["Orthogonal to two vectors", S`Find every unit vector in \(\mathbb R^3\) orthogonal to both \((1,1,0)\) and \((0,1,1)\).`,
      [S`Let \(\vec x=(a,b,c)\): \(a+b=0\) and \(b+c=0\).`, S`So \(a=-b\) and \(c=-b\): \(\vec x=b(-1,1,-1)\), all multiples of \((1,-1,1)\).`, S`\(\|(1,-1,1)\|=\sqrt3\); normalise and allow both directions.`],
      S`\(\pm\frac{1}{\sqrt3}(1,-1,1)\) — the cross product in 1.5 produces such a vector directly`],
  ], [
    q("hard", S`\(\|\vec u\|=3\), \(\|\vec v\|=5\) and \(\|\vec u-\vec v\|=7\). Find \(\vec u\cdot\vec v\).`, num(-7.5),
      "Expand ‖u − v‖².", [S`\(49=9-2\,\vec u\cdot\vec v+25\).`], S`\(-7.5\)`),
    q("hard", S`Find the angle (degrees, 1 decimal) between \((1,2,3,4)\) and \((4,3,2,1)\).`, num(48.2, 0.06),
      "Both norms are √30.", [S`Dot product \(4+6+6+4=20\); \(\cos\theta=\frac{20}{30}\).`], S`\(48.2\)`),
    q("hard", S`\(\|\vec u\|=3\), \(\|\vec v\|=4\), \(\|\vec u+\vec v\|=6\). Find \(\|\vec u-\vec v\|^2\).`, num(14),
      "Add the expansions of ‖u + v‖² and ‖u − v‖².", [S`\(\|\vec u+\vec v\|^2+\|\vec u-\vec v\|^2=2\|\vec u\|^2+2\|\vec v\|^2=50\).`, S`\(50-36\).`], S`\(14\)`),
  ]),

  wrapUp({
    qas: [
      ["What does the sign of u · v tell me?", "Positive: acute angle. Zero: orthogonal. Negative: obtuse."],
      ["How is the angle between vectors in ℝ⁷ defined?", "By cos θ = u·v/(‖u‖‖v‖); Cauchy–Schwarz guarantees the right side is between −1 and 1."],
      ["Is the zero vector orthogonal to everything?", "Yes, since 0 · v = 0 for every v — although it has no direction."],
      ["How do I expand ‖2u − v‖²?", "(2u − v)·(2u − v) = 4‖u‖² − 4u·v + ‖v‖²."],
      ["Where is Cauchy–Schwarz used?", "To define angles in ℝⁿ and to prove the triangle inequality, and later in projections and least squares."],
    ],
    summary: [
      "u · v = Σ uᵢvᵢ = ‖u‖‖v‖cos θ.",
      "u · u = ‖u‖²; dot products expand like ordinary products.",
      "u ⊥ v ⇔ u · v = 0 ⇔ ‖u + v‖² = ‖u‖² + ‖v‖².",
      "|u · v| ≤ ‖u‖‖v‖ and ‖u + v‖ ≤ ‖u‖ + ‖v‖.",
    ],
    next: "1.5 builds, in ℝ³ only, a vector orthogonal to two given vectors: the cross product.",
  }),
];
