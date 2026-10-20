// MCV4U 6.6 — Chapter 6 Review (NEW lesson): vectors and bearings, addition and subtraction, scalar multiples,
// resultants in navigation and forces, and rectangular components, with mixed practice and a hard level
import { intro, section, keyIdea, widget, examples, practice, wrapUp, table, q, num, choice, hard } from "./lib.mjs";
import { vfig, pol, brg } from "./vecfig.mjs";

export const TITLE = "6.6 Chapter 6 Review";
export const ID = "6d4fc006-0001-4001-8001-000000000606";

const S = String.raw;
const plus = (p, q) => [p[0] + q[0], p[1] + q[1]];
const mid = (p, q) => [(p[0] + q[0]) / 2, (p[1] + q[1]) / 2];
const QA = [0, 0], QB = [6, -0.5], QC = [7, 3.5], QD = [1.5, 4.5];
export const blocks = () => [
  intro({
    icon: "🧩",
    title: "Chapter 6 Review — Geometric Vectors",
    overview: S`This page pulls the chapter together before the test. A vector is a magnitude with a direction, drawn as an arrow and described by an angle or a bearing. Vectors add tip to tail, subtract by adding the opposite, and stretch or reverse under scalar multiplication. Real problems — forces, wind, currents — come down to drawing the right triangle and using the cosine and sine laws, or splitting every vector into components and adding.`,
    goals: [
      "recall the key idea and common mistake of each lesson;",
      "convert between true and quadrant bearings;",
      "find sums, differences and scalar multiples of vectors;",
      "solve force and navigation problems;",
      "resolve and recombine vectors with components.",
    ],
    curriculum: "C1.1–C1.3, C2.1, C2.2 (whole chapter)",
    prior: [
      [S`\(|k\vec v|\)?`, S`\(|k||\vec v|\).`],
      [S`\(\vec u-\vec v\) with tails together?`, S`head of \(\vec v\) to head of \(\vec u\).`],
      [S`Horizontal component of \(\vec v\) at \(\theta\)?`, S`\(|\vec v|\cos\theta\).`],
    ],
    words: [
      ["Vector", "magnitude and direction", "\\(\\vec v\\), \\(\\overrightarrow{AB}\\)"],
      ["Resultant", "sum of the vectors", "tip to tail"],
      ["Equilibrant", "opposite of the resultant", "balances it"],
      ["Components", "perpendicular parts", "\\(|\\vec v|\\cos\\theta,\\ |\\vec v|\\sin\\theta\\)"],
    ],
  }),

  section("📌 The chapter on one page", table(["Lesson", "Key idea", "Example", "Watch out"], [
    ["6.1 Vectors", "magnitude + direction; bearings", "140° = S40°E", "equal needs same direction"],
    ["6.2 Add / subtract", "tip to tail; u − v = u + (−v)", "|u + v| by cosine law", "triangle angle = 180° − angle between"],
    ["6.3 Scalar multiples", "|kv| = |k||v|; collinear", "unit vector v/|v|", "k < 0 reverses"],
    ["6.4 Applications", "resultant, equilibrant, wind", "ground velocity", "wind named by where it comes from"],
    ["6.5 Components", "|v| cos θ, |v| sin θ", "ramp: W sin α along", "quadrant signs"],
  ])),

  section("📌 Explore", S`<p>Use the resultant explorer to check the navigation and force examples on this page: set the speeds and directions and compare with your calculations.</p>`),

  widget("resultantLab", { init: { mode: "force" } }),

  section("📌 The big picture", S`${keyIdea(S`Every chapter 6 problem starts with a diagram. Either solve the triangle the arrows make (cosine law for a length, sine law for an angle), or resolve every vector into perpendicular components, add, and rebuild.`)}
  ${vfig({ view: { xmin: -0.6, xmax: 7.6, ymin: -0.8, ymax: 4.6 }, grid: false, axes: false, arrows: [{ from: [0, 0], to: [4.5, 1], vl: "u" }, { from: [4.5, 1], to: [6.5, 4], vl: "v", color: "blue", off: -16 }, { from: [0, 0], to: [6.5, 4], vl: "u+v", color: "red" }, { from: [0, 0], to: [6.5, 0], color: "gray", w: 1.6, dash: true }, { from: [6.5, 0], to: [6.5, 4], color: "gray", w: 1.6, dash: true }] }, "Two routes to the same resultant: solve the triangle, or add the dashed components")}`),

  examples([
    ["Bearings and opposites", S`\(\vec v\) points S20°W. Give its true bearing, and the true and quadrant bearings of \(-\vec v\).`,
      [S`S20°W is \(180^\circ+20^\circ=200^\circ\).`, S`\(-\vec v\): \(200^\circ-180^\circ=20^\circ\), that is, \(020^\circ\) or N20°E.`],
      S`\(200^\circ\); \(-\vec v\) is \(020^\circ\) = N20°E`,
      vfig({ view: { xmin: -3, xmax: 3, ymin: -3.4, ymax: 3.4 }, grid: false, north: [0, 0, 3.2], arrows: [{ from: [0, 0], to: brg(3, 200), vl: "v", off: -16 }, { from: [0, 0], to: brg(3, 20), vl: "−v", color: "red", off: -18 }], arcs: [{ at: [0, 0], r: 1, a: 250, b: 270, label: "20°", lr: 0.4 }] })],
    ["A difference", S`\(|\vec u|=9\), \(|\vec v|=4\) and the angle between them is \(50^\circ\). Find \(|\vec u-\vec v|\).`,
      [S`With tails together, \(\vec u-\vec v\) closes the triangle opposite the \(50^\circ\) angle.`, S`\(|\vec u-\vec v|^2=81+16-72\cos50^\circ\approx50.72\).`],
      S`\(|\vec u-\vec v|\approx7.12\)`,
      vfig({ view: { xmin: -0.6, xmax: 9.6, ymin: -0.8, ymax: 3.8 }, grid: false, axes: false, arrows: [{ from: [0, 0], to: [9, 0], vl: "u", label: "9", off: 16 }, { from: [0, 0], to: pol(4, 50), vl: "v", label: "4", color: "blue" }, { from: pol(4, 50), to: [9, 0], color: "red", label: "u − v ≈ 7.12" }], arcs: [{ at: [0, 0], r: 1, a: 0, b: 50, label: "50°" }] })],
    ["Scalar algebra", S`Simplify \(2(\vec a-3\vec b)+4(\vec b+\vec a)\) and say whether the result is collinear with \(3\vec a-\vec b\).`,
      [S`\(2\vec a-6\vec b+4\vec b+4\vec a=6\vec a-2\vec b\).`, S`\(6\vec a-2\vec b=2(3\vec a-\vec b)\): a scalar multiple.`],
      S`\(6\vec a-2\vec b\), collinear with \(3\vec a-\vec b\)`],
    ["A boat in a current", S`A boat heads straight across a river at 5 m/s; the current flows at 2 m/s. Find its velocity relative to the shore.`,
      [S`\(\sqrt{5^2+2^2}=\sqrt{29}\approx5.39\) m/s.`, S`Angle downstream from straight across: \(\tan^{-1}\frac25\approx21.80^\circ\).`],
      S`about 5.39 m/s at \(21.8^\circ\) downstream`,
      vfig({ view: { xmin: -0.8, xmax: 3.4, ymin: -0.6, ymax: 5.6 }, grid: false, axes: false, polys: [{ pts: [[-0.8, 0], [3.4, 0], [3.4, 5.2], [-0.8, 5.2]], fill: "#e0f2fe" }], arrows: [{ from: [0, 0], to: [0, 5], vl: "b", label: "5 m/s", off: -18 }, { from: [0, 5], to: [2, 5], color: "blue", label: "2 m/s", off: -14 }, { from: [0, 0], to: [2, 5], color: "red", label: "5.39 m/s", off: -18 }], arcs: [{ at: [0, 0], r: 1.3, a: 68.2, b: 90, label: "21.8°", lr: 0.45 }] })],
    ["Components in the second quadrant", S`Find the components of a 45 N force at \(140^\circ\) from the positive x-axis.`,
      [S`x: \(45\cos140^\circ\approx-34.47\) N (to the left).`, S`y: \(45\sin140^\circ\approx28.93\) N (up).`],
      S`about \(-34.47\) N horizontally and \(28.93\) N vertically`,
      vfig({ view: { xmin: -4, xmax: 1, ymin: -0.8, ymax: 3.4 }, grid: false, arrows: [{ from: [0, 0], to: [-3.447, 0], color: "blue", label: "−34.47", off: -14 }, { from: [-3.447, 0], to: [-3.447, 2.893], color: "red", label: "28.93", off: 30 }, { from: [0, 0], to: pol(4.5, 140), vl: "F", label: "45 N", off: -16 }], arcs: [{ at: [0, 0], r: 0.6, a: 0, b: 140, label: "140°", lr: 0.35 }] })],
  ]),

  practice([
    q("sum", S`\(|\vec u|=6\), \(|\vec v|=8\), \(\vec u\perp\vec v\). Find \(|\vec u+\vec v|\).`, num(10),
      "Pythagoras.", [S`\(\sqrt{36+64}\).`], S`\(10\)`),
    q("bearing", S`Write N60°W as a true bearing (degrees).`, num(300),
      "360° − 60°.", [S`Clockwise from north to N60°W.`], S`\(300^\circ\)`),
    q("scalar", S`\(|\vec u|=14\). Find \(|-0.5\vec u|\).`, num(7),
      "|k||u|.", [S`\(0.5\times14\).`], S`\(7\)`),
    q("ramp", S`Find the component perpendicular to the ramp of a 50 N weight on a \(60^\circ\) ramp (N).`, num(25),
      "W cos α.", [S`\(50\cos60^\circ\).`], S`\(25\)`),
    q("equilibrium", S`An object is in equilibrium when:`, choice(["the vector sum of the forces on it is zero", "all forces on it are equal", "only one force acts on it", "the forces are perpendicular"], 0),
      "The forces cancel.", ["Resultant = 0."], "the vector sum is zero"),
  ]),

  ...hard([
    ["A crosswind from the southwest", S`A plane heads \(300^\circ\) at 450 km/h. The wind blows at 70 km/h from \(200^\circ\). Find the ground speed and track.`,
      [S`The wind blows toward \(020^\circ\). From the heading \(300^\circ\) clockwise to \(020^\circ\) is \(80^\circ\), so the triangle angle is \(100^\circ\).`, S`\(|\vec g|^2=450^2+70^2-2(450)(70)\cos100^\circ\approx218\,340\), \(|\vec g|\approx467.3\) km/h.`, S`\(\sin\delta=\frac{70\sin100^\circ}{467.3}\), \(\delta\approx8.48^\circ\) clockwise of the heading.`],
      S`about 467.3 km/h on a track of \(308.5^\circ\)`,
      vfig({ view: { xmin: -4.6, xmax: 0.8, ymin: -0.6, ymax: 3.6 }, north: [0, 0, 3.3], arrows: [{ from: [0, 0], to: brg(4.5, 300), vl: "a", label: "450 km/h", off: -18 }, { from: brg(4.5, 300), to: plus(brg(4.5, 300), brg(0.7, 20)), color: "blue", label: "70", off: 14 }, { from: [0, 0], to: plus(brg(4.5, 300), brg(0.7, 20)), color: "red", vl: "g", off: 18 }] })],
    ["Midpoints of any quadrilateral", S`Prove that joining the midpoints of the sides of any quadrilateral \(ABCD\) gives a parallelogram.`,
      [S`Let \(P\), \(Q\), \(R\), \(S\) be the midpoints of \(AB\), \(BC\), \(CD\), \(DA\). Then \(\overrightarrow{PQ}=\frac12\overrightarrow{AB}+\frac12\overrightarrow{BC}=\frac12\overrightarrow{AC}\).`, S`Likewise \(\overrightarrow{SR}=\frac12\overrightarrow{AD}+\frac12\overrightarrow{DC}=\frac12\overrightarrow{AC}\).`, S`So \(\overrightarrow{PQ}=\overrightarrow{SR}\): one pair of opposite sides is parallel and equal.`],
      S`\(PQRS\) is a parallelogram (each pair of opposite sides equals half a diagonal)`,
      vfig({ view: { xmin: -0.6, xmax: 7.8, ymin: -1.2, ymax: 5.2 }, grid: false, axes: false, segs: [{ pts: [QA, QB, QC, QD, QA], color: "gray" }, { pts: [QA, QC], color: "gray", dash: true }], arrows: [{ from: mid(QA, QB), to: mid(QB, QC), color: "red" }, { from: mid(QD, QA), to: mid(QC, QD), color: "red" }, { from: mid(QA, QB), to: mid(QD, QA), color: "blue", w: 2 }, { from: mid(QB, QC), to: mid(QC, QD), color: "blue", w: 2 }], points: [{ x: QA[0], y: QA[1], label: "A", dx: -14, dy: 14 }, { x: QB[0], y: QB[1], label: "B", dx: 6, dy: 16 }, { x: QC[0], y: QC[1], label: "C", dx: 8, dy: 0 }, { x: QD[0], y: QD[1], label: "D", dx: -14, dy: -6 }] })],
  ], [
    q("hard", S`Forces of 12 N and 9 N have a resultant of 15 N. Find the angle between them (degrees).`, num(90),
      "9, 12, 15 is a right triangle.", [S`\(15^2=12^2+9^2\).`], S`\(90^\circ\)`),
    q("hard", S`Find the east component of a 200 N force on a bearing of \(050^\circ\) (N, 2 decimals).`, num(153.21, 0.01),
      "East uses sin of the bearing.", [S`\(200\sin50^\circ\).`], S`\(153.21\)`),
    q("hard", S`\(|\vec u|=3\), \(|\vec v|=4\) and \(\vec u\perp\vec v\). Find \(|2\vec u+\vec v|\) (3 decimals).`, num(7.211, 0.002),
      "2u is still perpendicular to v.", [S`\(\sqrt{36+16}\).`], S`\(7.211\)`),
  ]),

  wrapUp({
    qas: [
      ["How do I start any vector problem?", "Draw it: arrows tip to tail, with the known lengths and angles marked."],
      ["Triangle or components?", "Two vectors: the triangle with the cosine and sine laws is quick. Three or more: components are easier."],
      ["How do I turn a bearing into a math angle?", "Math angle = 90° − bearing (adding 360° if needed)."],
      ["What does a negative scalar do?", "Reverses the direction and multiplies the length by |k|."],
      ["What is equilibrium?", "The vector sum of all forces is zero, so the force arrows close into a polygon."],
    ],
    summary: [
      "Magnitude + direction; bearings from north.",
      "Tip to tail; cosine and sine laws.",
      "kv: stretch, shrink, reverse; collinear.",
      "Components: add the parts, then rebuild.",
    ],
    next: "Chapter 7 puts vectors on coordinate axes: Cartesian vectors, the dot product and the cross product.",
  }),
];
