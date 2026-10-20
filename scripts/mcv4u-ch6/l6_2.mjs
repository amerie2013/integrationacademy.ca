// MCV4U 6.2 — Addition and Subtraction of Vectors (rebuild of "Vector Operations (Geometric)"): triangle and
// parallelogram laws, the zero vector and properties of addition, subtraction as adding the opposite, and
// magnitudes and directions of sums and differences with the cosine and sine laws
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard } from "./lib.mjs";
import { vfig, pol } from "./vecfig.mjs";

export const TITLE = "6.2 Addition and Subtraction of Vectors";
export const ID = "32d89fcc-c716-40e3-bd15-9d6bb1b764a9";

const S = String.raw;
const plus = (p, q) => [p[0] + q[0], p[1] + q[1]];
const minus = (p, q) => [p[0] - q[0], p[1] - q[1]];
const U = pol(5, 0), Vv = pol(8, 60);
export const blocks = () => [
  intro({
    icon: "➕",
    title: "Addition and Subtraction of Vectors",
    overview: S`Walk 3 km east and then 4 km north and you end up 5 km from where you started — not 7. Adding vectors means following one arrow and then the next: the sum, or <strong>resultant</strong>, runs from the first tail to the last head. Subtracting a vector means adding its opposite. Because the arrows form triangles, the cosine law gives the size of a sum or difference and the sine law gives its direction.`,
    goals: [
      "add vectors with the triangle (tip-to-tail) and parallelogram laws;",
      "subtract vectors by adding the opposite;",
      "use the zero vector and the commutative and associative properties;",
      "find the magnitude and direction of a sum or difference;",
      "simplify chains of vectors such as AB + BC.",
    ],
    curriculum: "C2.1 (perform the operations of addition, subtraction, and scalar multiplication on geometric vectors)",
    prior: [
      [S`Cosine law for side \(c\)?`, S`\(c^2=a^2+b^2-2ab\cos C\).`],
      [S`\(\cos120^\circ\)?`, S`\(-\frac12\).`],
      [S`Sine law?`, S`\(\frac{\sin A}{a}=\frac{\sin B}{b}\).`],
    ],
    words: [
      ["Resultant", "the single vector equal to a sum", "\\(\\vec u+\\vec v\\)"],
      ["Triangle law", "tip to tail", "\\(\\overrightarrow{AB}+\\overrightarrow{BC}=\\overrightarrow{AC}\\)"],
      ["Parallelogram law", "common tail; sum is the diagonal", ""],
      ["Zero vector", "magnitude 0, no direction", "\\(\\vec v+(-\\vec v)=\\vec 0\\)"],
    ],
  }),

  section("📌 Two ways to add, one way to subtract", S`
  ${vfig({ view: { xmin: -0.5, xmax: 13.5, ymin: -0.8, ymax: 7.8 }, grid: false, axes: false, arrows: [{ from: [0, 0], to: U, vl: "u", off: -16 }, { from: U, to: plus(U, Vv), vl: "v", color: "blue", off: -16 }, { from: [0, 0], to: plus(U, Vv), vl: "u+v", color: "red" }], texts: [{ x: 3, y: 7.3, t: "triangle law", color: "gray" }] }, "Tip to tail: the sum runs from the first tail to the last head")}
  ${table(["Operation", "Picture", "Rule"], [
    ["\\(\\vec u+\\vec v\\)", "tip to tail, or diagonal of the parallelogram on \\(\\vec u\\), \\(\\vec v\\)", "\\(\\vec u+\\vec v=\\vec v+\\vec u\\)"],
    ["\\(\\vec u-\\vec v\\)", "\\(\\vec u+(-\\vec v)\\); also from the head of \\(\\vec v\\) to the head of \\(\\vec u\\)", "\\(\\vec u-\\vec v\\ne\\vec v-\\vec u\\)"],
    ["chains", "\\(\\overrightarrow{AB}+\\overrightarrow{BC}+\\overrightarrow{CD}=\\overrightarrow{AD}\\)", "a closed loop sums to \\(\\vec 0\\)"],
  ])}
  ${keyIdea(S`Place the vectors to form a triangle, then use the angle <em>inside the triangle</em>. If the angle between \(\vec u\) and \(\vec v\) (tails together) is \(\theta\), then \(|\vec u+\vec v|^2=|\vec u|^2+|\vec v|^2+2|\vec u||\vec v|\cos\theta\) and \(|\vec u-\vec v|^2=|\vec u|^2+|\vec v|^2-2|\vec u||\vec v|\cos\theta\).`)}`),

  section("📌 Explore", S`<p>Set two vectors and switch between tip-to-tail, parallelogram and difference. Both addition pictures give the same red resultant. In difference mode, notice that \(\vec u-\vec v\) joins the head of \(\vec v\) to the head of \(\vec u\).</p>`),

  widget("vectorAddLab", { init: { a: 3.5, da: 20, b: 3, db: 110 } }),

  section("📌 Finding a sum by calculation", S`
  <p>Sketch the triangle, mark the known lengths, and find the angle between the two sides that meet at the tip-to-tail joint — it is \(180^\circ\) minus the angle between the vectors. Then use the cosine law for the magnitude and the sine law for an angle that fixes the direction.</p>
  ${watchOut([
    "The angle in the triangle is 180° minus the angle between the vectors (tails together).",
    "Order matters for subtraction: u − v and v − u are opposites.",
    "|u + v| is not |u| + |v| unless the vectors point the same way.",
    "State a direction relative to something: an axis, a bearing, or one of the vectors.",
    "AB + BC = AC only when the head of the first meets the tail of the second.",
  ])}`),

  examples([
    ["Diagonals of a parallelogram", S`In parallelogram \(ABCD\), \(\overrightarrow{AB}=\vec u\) and \(\overrightarrow{AD}=\vec v\). Write \(\overrightarrow{AC}\) and \(\overrightarrow{DB}\) in terms of \(\vec u\) and \(\vec v\).`,
      [S`\(\overrightarrow{AC}=\overrightarrow{AB}+\overrightarrow{BC}=\vec u+\vec v\) because \(\overrightarrow{BC}=\overrightarrow{AD}\).`, S`\(\overrightarrow{DB}=\overrightarrow{DA}+\overrightarrow{AB}=-\vec v+\vec u\).`],
      S`\(\overrightarrow{AC}=\vec u+\vec v\), \(\overrightarrow{DB}=\vec u-\vec v\)`,
      vfig({ view: { xmin: -0.6, xmax: 7.2, ymin: -0.8, ymax: 3.8 }, grid: false, axes: false, arrows: [{ from: [0, 0], to: [4.5, 0], vl: "u", off: -16 }, { from: [0, 0], to: [1.8, 3], vl: "v", color: "blue" }, { from: [0, 0], to: [6.3, 3], color: "red" }, { from: [1.8, 3], to: [4.5, 0], color: "amber", dash: true }], texts: [{ x: 3.4, y: 2.25, t: "u + v", color: "red" }, { x: 4.35, y: 1.05, t: "u − v", color: "amber" }], segs: [{ pts: [[4.5, 0], [6.3, 3], [1.8, 3]], color: "gray" }], points: [{ x: 0, y: 0, label: "A", dx: -14, dy: 16 }, { x: 4.5, y: 0, label: "B", dx: 6, dy: 16 }, { x: 6.3, y: 3, label: "C", dx: 8, dy: -4 }, { x: 1.8, y: 3, label: "D", dx: -16, dy: -4 }] })],
    ["Magnitude of a sum", S`\(|\vec u|=5\), \(|\vec v|=8\) and the angle between them is \(60^\circ\). Find \(|\vec u+\vec v|\).`,
      [S`Tip to tail, the angle inside the triangle is \(180^\circ-60^\circ=120^\circ\).`, S`\(|\vec u+\vec v|^2=25+64-2(5)(8)\cos120^\circ=89+40=129\).`],
      S`\(|\vec u+\vec v|=\sqrt{129}\approx11.36\)`,
      vfig({ view: { xmin: -0.6, xmax: 9.8, ymin: -0.9, ymax: 7.6 }, grid: false, axes: false, arrows: [{ from: [0, 0], to: U, vl: "u", label: "5", off: -16 }, { from: U, to: plus(U, Vv), vl: "v", label: "8", color: "blue", off: -18 }, { from: [0, 0], to: plus(U, Vv), color: "red", label: "11.36" }], arcs: [{ at: U, r: 0.9, a: 60, b: 180, label: "120°" }] })],
    ["Magnitude of a difference", S`For the same vectors (\(|\vec u|=5\), \(|\vec v|=8\), \(60^\circ\) apart), find \(|\vec u-\vec v|\).`,
      [S`\(\vec u-\vec v\) joins the heads, so the triangle has the \(60^\circ\) angle between \(\vec u\) and \(\vec v\) at the common tail.`, S`\(|\vec u-\vec v|^2=25+64-2(5)(8)\cos60^\circ=89-40=49\).`],
      S`\(|\vec u-\vec v|=7\)`,
      vfig({ view: { xmin: -0.6, xmax: 6.4, ymin: -0.9, ymax: 7.6 }, grid: false, axes: false, arrows: [{ from: [0, 0], to: U, vl: "u", off: -16 }, { from: [0, 0], to: Vv, vl: "v", color: "blue" }, { from: Vv, to: U, color: "red", label: "u − v = 7", off: -18 }], arcs: [{ at: [0, 0], r: 1, a: 0, b: 60, label: "60°" }] })],
    ["A walk", S`Lee walks 6 km east and then 4 km north. Find the resultant displacement as a magnitude and true bearing.`,
      [S`The legs are perpendicular: \(\sqrt{6^2+4^2}=\sqrt{52}\approx7.21\) km.`, S`Angle north of east \(\tan^{-1}\frac46\approx33.69^\circ\); from north that is \(90^\circ-33.69^\circ=56.31^\circ\).`],
      S`about 7.21 km on a bearing of \(056.3^\circ\)`,
      vfig({ view: { xmin: -0.8, xmax: 7, ymin: -0.8, ymax: 5 }, north: [0, 0, 4.6], arrows: [{ from: [0, 0], to: [6, 0], label: "6 km", off: -14 }, { from: [6, 0], to: [6, 4], label: "4 km", color: "blue", off: -26 }, { from: [0, 0], to: [6, 4], color: "red", label: "7.21 km" }], arcs: [{ at: [0, 0], r: 1.4, a: 33.69, b: 90, label: "56.3°" }] })],
    ["A closed chain", S`Simplify \(\overrightarrow{AB}+\overrightarrow{BC}+\overrightarrow{CD}-\overrightarrow{AD}\).`,
      [S`\(\overrightarrow{AB}+\overrightarrow{BC}+\overrightarrow{CD}=\overrightarrow{AD}\) (tip to tail).`, S`\(\overrightarrow{AD}-\overrightarrow{AD}=\vec 0\).`],
      S`\(\vec 0\)`,
      vfig({ view: { xmin: -0.6, xmax: 7, ymin: -0.8, ymax: 4.6 }, grid: false, axes: false, arrows: [{ from: [0, 0], to: [3, 3.6], color: "violet" }, { from: [3, 3.6], to: [6.2, 2.8], color: "blue" }, { from: [6.2, 2.8], to: [5, 0], color: "green" }, { from: [0, 0], to: [5, 0], color: "red", label: "AD", off: -14 }], points: [{ x: 0, y: 0, label: "A", dx: -14, dy: 14 }, { x: 3, y: 3.6, label: "B", dx: -6, dy: -10 }, { x: 6.2, y: 2.8, label: "C", dx: 8, dy: -4 }, { x: 5, y: 0, label: "D", dx: 6, dy: 16 }] })],
  ]),

  practice([
    q("perpendicular", S`\(|\vec u|=3\), \(|\vec v|=4\) and \(\vec u\perp\vec v\). Find \(|\vec u+\vec v|\).`, num(5),
      "Right triangle.", [S`\(\sqrt{9+16}\).`], S`\(5\)`),
    q("difference", S`\(|\vec u|=|\vec v|=6\) and the angle between them is \(60^\circ\). Find \(|\vec u-\vec v|\).`, num(6),
      "The triangle is equilateral.", [S`\(36+36-72\cos60^\circ=36\).`], S`\(6\)`),
    q("chain", S`\(\overrightarrow{PQ}+\overrightarrow{QR}=\)`, choice([S`\(\overrightarrow{PR}\)`, S`\(\overrightarrow{RP}\)`, S`\(\overrightarrow{QP}\)`, S`\(\vec 0\)`], 0),
      "Tip to tail.", ["Start at P, end at R."], S`\(\overrightarrow{PR}\)`),
    q("obtuse", S`\(|\vec u|=10\), \(|\vec v|=7\), with \(120^\circ\) between them. Find \(|\vec u+\vec v|\) (3 decimals).`, num(8.888, 0.002),
      "The triangle angle is 60°.", [S`\(100+49-140\cos60^\circ=79\).`], S`\(\sqrt{79}\approx8.888\)`),
    q("subtract", S`With \(\vec u\) and \(\vec v\) drawn tail to tail, \(\vec u-\vec v\) points:`, choice([S`from the head of \(\vec v\) to the head of \(\vec u\)`, S`from the head of \(\vec u\) to the head of \(\vec v\)`, "along the longer diagonal", S`opposite to \(\vec u\)`], 0),
      "v + (u − v) = u.", ["Check: start at v's head, travel u − v, land on u's head."], "head of v to head of u"),
  ]),

  ...hard([
    ["The triangle inequality", S`Explain why \(|\vec u+\vec v|\le|\vec u|+|\vec v|\) for any vectors, and when equality holds.`,
      [S`Tip to tail, \(\vec u\), \(\vec v\) and \(\vec u+\vec v\) are the sides of a triangle, and any side is shorter than the other two together.`, S`The triangle flattens to a segment only when \(\vec v\) continues straight on from \(\vec u\): same direction.`],
      S`always true, with equality exactly when \(\vec u\) and \(\vec v\) point the same way`,
      vfig({ view: { xmin: -0.5, xmax: 10.5, ymin: -1, ymax: 4 }, grid: false, axes: false, arrows: [{ from: [0, 0], to: [4.5, 2.6], vl: "u" }, { from: [4.5, 2.6], to: [9.5, 0], vl: "v", color: "blue" }, { from: [0, 0], to: [9.5, 0], color: "red", label: "u + v: shorter than the path", off: -14 }] })],
    ["Find the angle", S`\(|\vec u|=4\), \(|\vec v|=6\) and \(|\vec u+\vec v|=8\). Find the angle between \(\vec u\) and \(\vec v\).`,
      [S`In the tip-to-tail triangle, \(8^2=4^2+6^2-2(4)(6)\cos\phi\), where \(\phi\) is the triangle angle: \(\cos\phi=\frac{16+36-64}{48}=-0.25\), \(\phi\approx104.48^\circ\).`, S`The angle between the vectors is \(180^\circ-\phi\approx75.52^\circ\).`],
      S`about \(75.52^\circ\)`,
      vfig({ view: { xmin: -0.5, xmax: 7.5, ymin: -0.8, ymax: 6.8 }, grid: false, axes: false, arrows: [{ from: [0, 0], to: [4, 0], vl: "u", label: "4", off: -16 }, { from: [4, 0], to: plus([4, 0], pol(6, 75.52)), vl: "v", label: "6", color: "blue", off: -18 }, { from: [0, 0], to: plus([4, 0], pol(6, 75.52)), color: "red", label: "8" }], arcs: [{ at: [4, 0], r: 0.9, a: 0, b: 75.52, label: "75.5°", color: "green" }], segs: [{ pts: [[4, 0], [6, 0]], dash: true }] })],
  ], [
    q("hard", S`\(|\vec u|=|\vec v|=5\) and \(|\vec u+\vec v|=5\). Find the angle between \(\vec u\) and \(\vec v\) (degrees).`, num(120),
      "The tip-to-tail triangle is equilateral.", [S`Triangle angle \(60^\circ\); between the vectors \(180^\circ-60^\circ\).`], S`\(120^\circ\)`),
    q("hard", S`\(|\vec u|=7\), \(|\vec v|=24\) and \(\vec u\perp\vec v\). Find \(|\vec u-\vec v|\).`, num(25),
      "Perpendicular: Pythagoras.", [S`\(\sqrt{49+576}\).`], S`\(25\)`),
    q("hard", S`If \(|\vec u+\vec v|=|\vec u-\vec v|\) for nonzero \(\vec u\), \(\vec v\), what is the angle between them (degrees)?`, num(90),
      "The diagonals of the parallelogram are equal.", [S`Equal diagonals make it a rectangle.`], S`\(90^\circ\)`),
  ]),

  wrapUp({
    qas: [
      ["How do I add two vectors?", "Place them tip to tail; the sum goes from the first tail to the last head. Or put the tails together and draw the parallelogram's diagonal."],
      ["How do I subtract?", "Add the opposite: u − v = u + (−v). With tails together, u − v runs from the head of v to the head of u."],
      ["Which angle goes in the cosine law?", "The angle inside the triangle you drew — for a sum, 180° minus the angle between the vectors."],
      ["Is vector addition commutative?", "Yes: u + v = v + u (the two routes around the parallelogram). It is also associative."],
      ["What is the zero vector?", "The vector of magnitude 0, such as v + (−v) or a closed chain of vectors."],
    ],
    summary: [
      "Tip to tail, or parallelogram diagonal.",
      "u − v = u + (−v): head of v to head of u.",
      "Cosine law for size, sine law for direction.",
      "A closed chain of vectors sums to 0.",
    ],
    next: "6.3 multiplies a vector by a scalar.",
  }),
];
