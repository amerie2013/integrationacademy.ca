// MCV4U 7.3 — Applications of the Dot Product (NEW lesson): scalar and vector projections, work done by a force,
// splitting a vector into parts parallel and perpendicular to a direction, and distance from a point to a line
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard } from "./lib.mjs";
import { vfig, pol } from "./vecfig.mjs";

export const TITLE = "7.3 Applications of the Dot Product";
export const ID = "6d4fc007-0001-4001-8001-000000000703";

const S = String.raw;
export const blocks = () => [
  intro({
    icon: "🔦",
    title: "Applications of the Dot Product",
    overview: S`Shine a light straight down onto a vector and look at its shadow on a line: that shadow is a <strong>projection</strong>. The dot product measures it exactly — the scalar projection of \(\vec a\) on \(\vec b\) is \(\frac{\vec a\cdot\vec b}{|\vec b|}\). The same idea measures <strong>work</strong>: a force does work only through its part along the motion, so \(W=\vec F\cdot\vec d\). Projections also split a vector into a part along a direction and a part perpendicular to it.`,
    goals: [
      "find scalar and vector projections;",
      "compute the work done by a force;",
      "split a vector into parts parallel and perpendicular to a direction;",
      "compare work for different angles of a force;",
      "use projections to find distances.",
    ],
    curriculum: "C2.4 (describe applications of the dot product, e.g. the projection of one vector onto another); C2.8 (solve problems involving work)",
    prior: [
      [S`\([4,3]\cdot[1,0]\)?`, S`\(4\).`],
      [S`\(\cos60^\circ\)?`, S`\(\frac12\).`],
      [S`Unit vector along \([3,4]\)?`, S`\(\left[\frac35,\frac45\right]\).`],
    ],
    words: [
      ["Scalar projection", "\\(\\frac{\\vec a\\cdot\\vec b}{|\\vec b|}=|\\vec a|\\cos\\theta\\)", "signed length"],
      ["Vector projection", "\\(\\frac{\\vec a\\cdot\\vec b}{|\\vec b|^2}\\vec b\\)", "points along b"],
      ["Work", "\\(W=\\vec F\\cdot\\vec d\\)", "joules (N·m)"],
      ["Perpendicular part", "\\(\\vec a-\\text{proj}_{\\vec b}\\vec a\\)", ""],
    ],
  }),

  section("📌 The shadow of a vector", S`
  ${vfig({ view: { xmin: -0.6, xmax: 7.6, ymin: -0.8, ymax: 4.4 }, grid: false, axes: false, segs: [{ pts: [[-0.4, 0], [7.4, 0]], color: "gray", dash: true }, { pts: [pol(5, 38), [5 * Math.cos(38 * Math.PI / 180), 0]], color: "gray", dash: true }], arrows: [{ from: [0, 0], to: [7, 0], vl: "b", off: 16, w: 2 }, { from: [0, 0], to: pol(5, 38), vl: "a", off: -16 }, { from: [0, 0], to: [5 * Math.cos(38 * Math.PI / 180), 0], color: "red", w: 4.5 }], arcs: [{ at: [0, 0], r: 1.1, a: 0, b: 38, label: "θ" }], texts: [{ x: 2, y: 0.45, t: "proj of a on b", color: "red" }] }, "The projection of a onto b is the shadow of a on the line of b")}
  ${table(["Quantity", "Formula", "Notes"], [
    ["scalar projection of \\(\\vec a\\) on \\(\\vec b\\)", "\\(\\frac{\\vec a\\cdot\\vec b}{|\\vec b|}\\)", "negative when θ is obtuse"],
    ["vector projection", "\\(\\left(\\frac{\\vec a\\cdot\\vec b}{|\\vec b|^2}\\right)\\vec b\\)", "parallel to \\(\\vec b\\)"],
    ["work", "\\(\\vec F\\cdot\\vec d=|\\vec F||\\vec d|\\cos\\theta\\)", "only the part of F along d counts"],
  ])}
  ${keyIdea(S`The projection depends only on the <em>direction</em> of \(\vec b\), not its length. Subtracting the vector projection from \(\vec a\) leaves the part of \(\vec a\) perpendicular to \(\vec b\); the two parts add back to \(\vec a\).`)}`),

  section("📌 Explore", S`<p>Change the angle between \(\vec a\) and \(\vec b\) and watch the red shadow shrink, vanish at \(90^\circ\), and turn negative past it. Then switch to work: lowering the handle of the wagon makes more of the same pull count.</p>`),

  widget("projectionLab", { init: { mode: "proj" } }),

  section("📌 Using projections", S`
  <p>For a projection, find \(\vec a\cdot\vec b\) and \(|\vec b|\) first. For work, the displacement is head minus tail; if the force and displacement are given by magnitudes and an angle, use \(|\vec F||\vec d|\cos\theta\).</p>
  ${watchOut([
    "Projection of a on b divides by |b|, not |a|.",
    "proj of a on b and proj of b on a are usually different.",
    "Work is a scalar: it has no direction.",
    "A force perpendicular to the motion does no work.",
    "The vector projection divides by |b|², not |b|.",
  ])}`),

  examples([
    ["Pulling a sled", S`A rope pulls a sled 60 m along level ground with a force of 80 N at \(35^\circ\) above the horizontal. Find the work done.`,
      [S`\(W=|\vec F||\vec d|\cos\theta=80\times60\times\cos35^\circ\).`],
      S`about 3932 J`,
      vfig({ view: { xmin: -0.6, xmax: 7.4, ymin: -0.8, ymax: 3.8 }, grid: false, axes: false, polys: [{ pts: [[0, 0], [1.6, 0], [1.6, 0.6], [0, 0.6]], fill: "#e0e7ff", stroke: "violet" }], arrows: [{ from: [1.6, 0.3], to: pol(4, 35, [1.6, 0.3]), vl: "F", label: "80 N", off: -16 }, { from: [0, -0.5], to: [7, -0.5], color: "blue", label: "60 m", off: -12, w: 2 }], arcs: [{ at: [1.6, 0.3], r: 1.1, a: 0, b: 35, label: "35°" }] })],
    ["Work from components", S`A force \(\vec F=[12,5]\) N moves an object from \((1,2)\) to \((9,4)\) (metres). Find the work done.`,
      [S`\(\vec d=[8,2]\).`, S`\(W=12(8)+5(2)\).`],
      S`106 J`],
    ["A negative projection", S`Find the scalar and vector projections of \(\vec a=[4,3]\) on \(\vec b=[5,-12]\).`,
      [S`\(\vec a\cdot\vec b=20-36=-16\), \(|\vec b|=13\): scalar projection \(-\frac{16}{13}\).`, S`Vector projection \(\frac{-16}{169}[5,-12]\).`],
      S`\(\approx-1.23\); \(\approx[-0.47,\ 1.14]\) (pointing opposite to \(\vec b\))`],
    ["A projection and its partner", S`Find the vector projection of \(\vec a=[7,1]\) on \(\vec b=[2,2]\), and the part of \(\vec a\) perpendicular to \(\vec b\).`,
      [S`\(\vec a\cdot\vec b=16\), \(|\vec b|^2=8\): projection \(2[2,2]=[4,4]\).`, S`Perpendicular part \([7,1]-[4,4]=[3,-3]\); check \([3,-3]\cdot[2,2]=0\).`],
      S`\([4,4]\) along \(\vec b\) and \([3,-3]\) perpendicular to it`,
      vfig({ view: { xmin: -0.6, xmax: 8, ymin: -0.8, ymax: 5.2 }, arrows: [{ from: [0, 0], to: [7, 1], vl: "a", off: 16 }, { from: [0, 0], to: [2, 2], vl: "b", color: "blue", off: -16 }, { from: [0, 0], to: [4, 4], color: "red", label: "[4, 4]", off: -18, w: 2.4 }, { from: [4, 4], to: [7, 1], color: "green", label: "[3, −3]", off: -16, w: 2.4 }] })],
    ["Distance from a point to a line", S`Find the distance from \(P(7,1)\) to the line through the origin in the direction \([1,1]\).`,
      [S`The perpendicular part of \(\overrightarrow{OP}=[7,1]\) relative to \([1,1]\) is \([3,-3]\) (same direction as before).`, S`Its length is \(\sqrt{9+9}\).`],
      S`\(3\sqrt2\approx4.24\)`,
      vfig({ view: { xmin: -0.6, xmax: 8, ymin: -0.8, ymax: 6 }, segs: [{ pts: [[-0.5, -0.5], [6, 6]], color: "blue" }], arrows: [{ from: [4, 4], to: [7, 1], color: "red", label: "4.24", off: -16 }], points: [{ x: 7, y: 1, label: "P(7, 1)", dx: 8, dy: 4 }, { x: 4, y: 4, label: "foot", dx: -40, dy: -4 }] })],
  ]),

  practice([
    q("work", S`A 50 N force moves an object 20 m, at \(60^\circ\) to the motion. Find the work (J).`, num(500),
      "|F||d| cos θ.", [S`\(50\times20\times\frac12\).`], S`\(500\)`),
    q("components", S`Find the work done by \(\vec F=[3,4]\) N over \(\vec d=[10,0]\) m (J).`, num(30),
      "Dot product.", [S`\(30+0\).`], S`\(30\)`),
    q("scalar", S`Find the scalar projection of \([6,8]\) on \([1,0]\).`, num(6),
      "Divide the dot product by |b| = 1.", [S`\(\frac{6}{1}\).`], S`\(6\)`),
    q("sign", S`The scalar projection of \(\vec a\) on \(\vec b\) is negative when:`, choice(["the angle between them is obtuse", "the angle is acute", "the vectors are perpendicular", "|a| > |b|"], 0),
      "It is |a| cos θ.", ["cos θ < 0."], "the angle is obtuse"),
    q("vector", S`Find the x-component of the vector projection of \([5,5]\) on \([3,0]\).`, num(5),
      "Projection onto the x-axis.", [S`\(\frac{15}{9}[3,0]=[5,0]\).`], S`\(5\)`),
  ]),

  ...hard([
    ["Comparing handle angles", S`A child pulls a wagon 40 m with a 120 N force. How much more work is done with the handle at \(25^\circ\) than at \(45^\circ\)?`,
      [S`\(W_{25}=120\times40\cos25^\circ\approx4350.3\) J; \(W_{45}=120\times40\cos45^\circ\approx3394.1\) J.`, S`Difference \(\approx956.2\) J: at \(45^\circ\) more of the pull lifts instead of moving the wagon.`],
      S`about 956 J more at \(25^\circ\)`,
      vfig({ view: { xmin: -0.6, xmax: 6.4, ymin: -0.8, ymax: 4.4 }, grid: false, axes: false, arrows: [{ from: [0, 0], to: pol(5, 25), label: "25°", off: 16 }, { from: [0, 0], to: pol(5, 45), color: "blue", label: "45°", off: -16 }, { from: [0, 0], to: [4.53, 0], color: "red", w: 2.4, label: "4.53", off: 14 }], segs: [{ pts: [pol(5, 45), [3.54, 0]], dash: true, color: "blue" }, { pts: [pol(5, 25), [4.53, 0]], dash: true }], texts: [{ x: 3.4, y: -0.5, t: "3.54", color: "blue" }] })],
    ["Along and across a ramp", S`A force \(\vec F=[10,4]\) acts on a block on a ramp whose surface runs in the direction \(\vec d=[3,1]\). Split \(\vec F\) into parts along and perpendicular to the ramp.`,
      [S`\(\vec F\cdot\vec d=34\), \(|\vec d|^2=10\): along the ramp \(3.4[3,1]=[10.2,3.4]\).`, S`Perpendicular part \([10,4]-[10.2,3.4]=[-0.2,0.6]\); check \([-0.2,0.6]\cdot[3,1]=0\).`],
      S`\([10.2,3.4]\) along the ramp and \([-0.2,0.6]\) perpendicular to it`,
      vfig({ view: { xmin: -0.6, xmax: 11, ymin: -0.8, ymax: 5 }, segs: [{ pts: [[0, 0], [10.5, 3.5]], color: "gray" }], arrows: [{ from: [0, 0], to: [10, 4], vl: "F", off: -16 }, { from: [0, 0], to: [10.2, 3.4], color: "red", w: 2.2, label: "along", off: 14 }, { from: [10.2, 3.4], to: [10, 4], color: "green", w: 2.2 }] })],
  ], [
    q("hard", S`A 49 N weight slides 8 m down a ramp inclined at \(30^\circ\). How much work does gravity do (J)?`, num(196),
      "The angle between the weight and the motion is 60°.", [S`\(49\times8\times\cos60^\circ\).`], S`\(196\)`),
    q("hard", S`Find the scalar projection of \([2,-1]\) on \([-4,3]\).`, num(-2.2, 0.001),
      "Dot product over |b| = 5.", [S`\(\frac{-8-3}{5}\).`], S`\(-2.2\)`),
    q("hard", S`At what angle between the force and the motion is the work half of its largest possible value (degrees)?`, num(60),
      "cos θ = ½.", [S`\(\cos^{-1}0.5\).`], S`\(60^\circ\)`),
  ]),

  wrapUp({
    qas: [
      ["What is the scalar projection of a on b?", "The signed length of a's shadow on the line of b: a · b / |b| = |a| cos θ."],
      ["How is the vector projection different?", "It is the shadow as a vector: the scalar projection times the unit vector along b."],
      ["Why does the projection not depend on |b|?", "Only b's direction defines the line we project onto."],
      ["How do I compute work?", "W = F · d; with magnitudes, |F||d| cos θ."],
      ["How do I get the part of a perpendicular to b?", "Subtract the vector projection from a."],
    ],
    summary: [
      "Scalar projection a · b / |b|.",
      "Vector projection (a · b / |b|²) b.",
      "Work W = F · d.",
      "a = (part along b) + (part perpendicular).",
    ],
    next: "7.4 takes vectors into three-space.",
  }),
];
