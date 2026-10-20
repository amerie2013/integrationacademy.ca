// MCV4U 7.2 — The Dot Product (rebuild): geometric definition |a||b|cos θ, the component formula, the angle between
// vectors, perpendicular (orthogonal) vectors, and the properties of the dot product
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard } from "./lib.mjs";
import { vfig, pol } from "./vecfig.mjs";

export const TITLE = "7.2 The Dot Product";
export const ID = "f29df3d9-19de-4d53-b66a-528a66f4cf01";

const S = String.raw;
export const blocks = () => [
  intro({
    icon: "⚫",
    title: "The Dot Product",
    overview: S`The dot product multiplies two vectors and gives a <strong>number</strong>, not a vector: \(\vec a\cdot\vec b=|\vec a||\vec b|\cos\theta\), where \(\theta\) is the angle between them (tails together). For Cartesian vectors there is a shortcut: multiply matching components and add, \([a_1,a_2]\cdot[b_1,b_2]=a_1b_1+a_2b_2\). Putting the two together lets you find the angle between any two vectors — and a dot product of zero is the quick test for perpendicular vectors.`,
    goals: [
      "compute a dot product from magnitudes and an angle;",
      "compute a dot product from components;",
      "find the angle between two vectors;",
      "test whether two vectors are perpendicular;",
      "use the properties of the dot product to expand and simplify.",
    ],
    curriculum: "C2.4 (perform the dot product geometrically and in Cartesian form); C2.5 (investigate properties of the dot product)",
    prior: [
      [S`\(\cos90^\circ\)?`, S`\(0\).`],
      [S`\(\cos120^\circ\)?`, S`\(-\frac12\).`],
      [S`\(|[3,4]|\)?`, S`\(5\).`],
    ],
    words: [
      ["Dot product", "\\(\\vec a\\cdot\\vec b=|\\vec a||\\vec b|\\cos\\theta\\)", "a scalar"],
      ["Component form", "\\(a_1b_1+a_2b_2\\)", ""],
      ["Orthogonal", "perpendicular", "\\(\\vec a\\cdot\\vec b=0\\)"],
      ["\\(\\vec a\\cdot\\vec a\\)", "\\(|\\vec a|^2\\)", ""],
    ],
  }),

  section("📌 Two ways to compute it", S`
  ${vfig({ view: { xmin: -0.6, xmax: 6.4, ymin: -0.8, ymax: 4.6 }, grid: false, axes: false, arrows: [{ from: [0, 0], to: [6, 0], vl: "b", off: 16 }, { from: [0, 0], to: pol(5, 40), vl: "a", off: -16 }], segs: [{ pts: [pol(5, 40), [5 * Math.cos(40 * Math.PI / 180), 0]], dash: true }], arcs: [{ at: [0, 0], r: 1.2, a: 0, b: 40, label: "θ" }], texts: [{ x: 1.9, y: -0.45, t: "|a| cos θ", color: "red" }] }, "a · b = |a||b| cos θ: the length of b times the part of a along b")}
  ${table(["Angle θ", "cos θ", "a · b"], [
    ["acute \\(0^\\circ\\le\\theta\\lt90^\\circ\\)", "positive", "positive"],
    ["right \\(90^\\circ\\)", "0", "0"],
    ["obtuse \\(90^\\circ\\lt\\theta\\le180^\\circ\\)", "negative", "negative"],
  ])}
  ${keyIdea(S`\(\vec a\cdot\vec b=|\vec a||\vec b|\cos\theta=a_1b_1+a_2b_2\), so \(\cos\theta=\dfrac{\vec a\cdot\vec b}{|\vec a||\vec b|}\). Properties: \(\vec a\cdot\vec b=\vec b\cdot\vec a\); \(\vec a\cdot(\vec b+\vec c)=\vec a\cdot\vec b+\vec a\cdot\vec c\); \((k\vec a)\cdot\vec b=k(\vec a\cdot\vec b)\); \(\vec a\cdot\vec a=|\vec a|^2\). Nonzero vectors are perpendicular exactly when \(\vec a\cdot\vec b=0\).`)}`),

  section("📌 Explore", S`<p>Turn and stretch the two vectors and watch the dot product computed both ways — they always agree. Notice the sign change as the angle passes \(90^\circ\), and that the product is exactly 0 when the vectors are perpendicular.</p>`),

  widget("dotLab", { init: { m1: 4, a1: 20, m2: 3, a2: 80 } }),

  section("📌 Finding angles", S`
  <p>To find the angle between two Cartesian vectors, compute the dot product from components, divide by the product of the magnitudes, and take \(\cos^{-1}\). The answer is always between \(0^\circ\) and \(180^\circ\).</p>
  ${watchOut([
    "The dot product is a number; you cannot take its magnitude or direction.",
    "Use the angle between the vectors with their tails together.",
    "a · a is |a|², not |a|.",
    "(a · b) · c makes no sense: a · b is already a scalar.",
    "A zero dot product means perpendicular only for nonzero vectors.",
  ])}`),

  examples([
    ["From magnitudes and an angle", S`\(|\vec a|=6\), \(|\vec b|=5\) and the angle between them is \(50^\circ\). Find \(\vec a\cdot\vec b\).`,
      [S`\(\vec a\cdot\vec b=6\times5\times\cos50^\circ\).`],
      S`\(\approx19.28\)`],
    ["Components and the angle", S`Find \([3,-4]\cdot[5,2]\) and the angle between the vectors.`,
      [S`\(3(5)+(-4)(2)=15-8=7\).`, S`\(\cos\theta=\frac{7}{5\sqrt{29}}\approx0.2600\), so \(\theta\approx74.93^\circ\).`],
      S`7; about \(74.93^\circ\)`,
      vfig({ view: { xmin: -0.6, xmax: 5.8, ymin: -4.6, ymax: 2.6 }, arrows: [{ from: [0, 0], to: [3, -4], vl: "a", off: 16 }, { from: [0, 0], to: [5, 2], vl: "b", color: "blue", off: -16 }], arcs: [{ at: [0, 0], r: 1, a: -53.13, b: 21.8, label: "74.9°" }] })],
    ["A perpendicular pair", S`Show that \([6,-9]\) and \([3,2]\) are perpendicular.`,
      [S`\(6(3)+(-9)(2)=18-18=0\).`],
      S`the dot product is 0, so they are perpendicular`,
      vfig({ view: { xmin: -0.6, xmax: 6.6, ymin: -9.6, ymax: 2.6 }, arrows: [{ from: [0, 0], to: [6, -9], vl: "a", off: 16 }, { from: [0, 0], to: [3, 2], vl: "b", color: "blue", off: -16 }], segs: [{ pts: [[0.554, -0.832], [1.109, -0.462], [0.555, 0.37]], color: "red", w: 1.5 }] })],
    ["Making vectors perpendicular", S`Find \(k\) so that \([k,4]\) is perpendicular to \([3,-6]\).`,
      [S`\(3k+4(-6)=0\Rightarrow3k=24\).`],
      S`\(k=8\)`],
    ["Expanding with properties", S`\(|\vec a|=2\), \(|\vec b|=1\) and \(\vec a\cdot\vec b=1.5\). Find \((2\vec a-\vec b)\cdot(\vec a+3\vec b)\).`,
      [S`Expand: \(2\vec a\cdot\vec a+6\vec a\cdot\vec b-\vec b\cdot\vec a-3\vec b\cdot\vec b=2|\vec a|^2+5\vec a\cdot\vec b-3|\vec b|^2\).`, S`\(=2(4)+5(1.5)-3(1)\).`],
      S`\(12.5\)`],
  ]),

  practice([
    q("components", S`Find \([2,7]\cdot[-3,1]\).`, num(1),
      "Multiply matching components and add.", [S`\(-6+7\).`], S`\(1\)`),
    q("geometric", S`\(|\vec a|=4\), \(|\vec b|=3\), angle \(120^\circ\). Find \(\vec a\cdot\vec b\).`, num(-6),
      "cos 120° = −½.", [S`\(12\times(-\frac12)\).`], S`\(-6\)`),
    q("self", S`\(|\vec a|=7\). Find \(\vec a\cdot\vec a\).`, num(49),
      "|a|².", [S`\(7^2\).`], S`\(49\)`),
    q("sign", S`If \(\vec a\cdot\vec b\lt0\), the angle between \(\vec a\) and \(\vec b\) is:`, choice(["obtuse", "acute", "right", "zero"], 0),
      "cos θ < 0.", ["Negative cosine means more than 90°."], "obtuse"),
    q("perpendicular", S`Find \(k\) so that \([4,k]\perp[-2,5]\).`, num(1.6, 0.001),
      "Dot product zero.", [S`\(-8+5k=0\).`], S`\(1.6\)`),
  ]),

  ...hard([
    ["The diagonals of a rectangle", S`A rectangle is 8 units long and 6 units high. Use vectors to find the acute angle between its diagonals.`,
      [S`With one corner at the origin, the diagonals are \([8,6]\) and \([-8,6]\).`, S`\([8,6]\cdot[-8,6]=-64+36=-28\); \(\cos\theta=\frac{-28}{10\times10}\Rightarrow\theta\approx106.26^\circ\).`, S`The acute angle is \(180^\circ-106.26^\circ\).`],
      S`about \(73.74^\circ\)`,
      vfig({ view: { xmin: -0.6, xmax: 8.6, ymin: -0.8, ymax: 6.8 }, grid: false, axes: false, segs: [{ pts: [[0, 0], [8, 0], [8, 6], [0, 6], [0, 0]], color: "gray" }], arrows: [{ from: [0, 0], to: [8, 6], vl: "d₁", off: -16 }, { from: [8, 0], to: [0, 6], vl: "d₂", color: "blue", off: -16 }], arcs: [{ at: [4, 3], r: 0.9, a: 36.87, b: 143.13, label: "106.3°", color: "red" }], texts: [{ x: 4, y: -0.5, t: "8" }, { x: 8.4, y: 3, t: "6" }] })],
    ["An angle in a semicircle", S`\(AB\) is a diameter of a circle with centre \(O\), and \(C\) is any other point on the circle. Use vectors to prove \(\angle ACB=90^\circ\).`,
      [S`Let \(\overrightarrow{OB}=\vec a\) (so \(\overrightarrow{OA}=-\vec a\)) and \(\overrightarrow{OC}=\vec c\), with \(|\vec a|=|\vec c|=r\).`, S`\(\overrightarrow{CA}=-\vec a-\vec c\) and \(\overrightarrow{CB}=\vec a-\vec c\).`, S`\(\overrightarrow{CA}\cdot\overrightarrow{CB}=-(\vec a+\vec c)\cdot(\vec a-\vec c)=-(|\vec a|^2-|\vec c|^2)=0\).`],
      S`the dot product is 0, so \(CA\perp CB\)`,
      vfig({ view: { xmin: -4.2, xmax: 4.2, ymin: -1.2, ymax: 4.2 }, grid: false, axes: false, segs: [{ pts: Array.from({ length: 37 }, (_, i) => pol(3.5, i * 5)), color: "gray" }, { pts: [[-3.5, 0], [3.5, 0]], color: "gray" }], arrows: [{ from: pol(3.5, 62), to: [-3.5, 0], color: "violet" }, { from: pol(3.5, 62), to: [3.5, 0], color: "blue" }, { from: [0, 0], to: pol(3.5, 62), color: "green", w: 1.6, dash: true }], points: [{ x: -3.5, y: 0, label: "A", dx: -14, dy: 14 }, { x: 3.5, y: 0, label: "B", dx: 6, dy: 14 }, { x: 0, y: 0, label: "O", dx: -4, dy: 18 }, { x: pol(3.5, 62)[0], y: pol(3.5, 62)[1], label: "C", dx: 6, dy: -6 }] })],
  ], [
    q("hard", S`Find the angle between \([1,2]\) and \([3,-1]\) (degrees, 2 decimals).`, num(81.87, 0.01),
      "cos θ = 1/(√5 √10).", [S`\(\cos\theta=\frac{1}{\sqrt{50}}\).`], S`\(81.87^\circ\)`),
    q("hard", S`\(|\vec a|=3\), \(|\vec b|=5\), \(\vec a\cdot\vec b=4\). Find \(|\vec a+\vec b|\) (2 decimals).`, num(6.48, 0.01),
      "|a + b|² = (a + b) · (a + b).", [S`\(9+2(4)+25=42\).`], S`\(\sqrt{42}\approx6.48\)`),
    q("hard", S`Find \(k\gt0\) so that the angle between \([1,k]\) and \([1,0]\) is \(60^\circ\) (3 decimals).`, num(1.732, 0.002),
      "cos 60° = 1/√(1 + k²).", [S`\(\sqrt{1+k^2}=2\).`], S`\(\sqrt3\approx1.732\)`),
  ]),

  wrapUp({
    qas: [
      ["What kind of answer does a dot product give?", "A scalar (a number), which can be positive, zero or negative."],
      ["How do I compute it from components?", "Multiply matching components and add: a₁b₁ + a₂b₂."],
      ["How do I find the angle between vectors?", "cos θ = (a · b)/(|a||b|), then take the inverse cosine."],
      ["How can I tell if vectors are perpendicular?", "Their dot product is zero (for nonzero vectors)."],
      ["Why is a · a = |a|²?", "The angle between a and itself is 0°, and cos 0° = 1."],
    ],
    summary: [
      "a · b = |a||b| cos θ = a₁b₁ + a₂b₂.",
      "cos θ = a · b / (|a||b|).",
      "a · b = 0 ⇔ perpendicular.",
      "Commutative, distributive; a · a = |a|².",
    ],
    next: "7.3 uses the dot product for projections and work.",
  }),
];
