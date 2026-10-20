// MCV4U 7.6 — Applications of the Dot Product and Cross Product (NEW lesson): torque, areas of triangles and
// parallelograms in three-space, the volume of a parallelepiped (scalar triple product), work in three-space,
// and testing three vectors for coplanarity
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard } from "./lib.mjs";
import { vfig, pol, p3, axes3, merge } from "./vecfig.mjs";

export const TITLE = "7.6 Applications of the Dot Product and Cross Product";
export const ID = "6d4fc007-0001-4001-8001-000000000706";

const S = String.raw;
const V3 = { view: { xmin: -3.8, xmax: 6, ymin: -2.8, ymax: 5.8 }, grid: false, axes: false };
const add3 = (...v) => v.reduce((s, a) => [s[0] + a[0], s[1] + a[1], s[2] + a[2]], [0, 0, 0]);
const ppd = (a, b, c) => {
  const corners = [[0, 0, 0], a, b, c, add3(a, b), add3(a, c), add3(b, c), add3(a, b, c)];
  const e = [[0, 1], [0, 2], [0, 3], [1, 4], [1, 5], [2, 4], [2, 6], [3, 5], [3, 6], [4, 7], [5, 7], [6, 7]];
  return { segs: e.map(([i, j]) => ({ pts: [p3(...corners[i]), p3(...corners[j])], color: "gray", w: 1.3 })) };
};
export const blocks = () => [
  intro({
    icon: "🔧",
    title: "Applications of the Dot Product and Cross Product",
    overview: S`The two products answer different physical questions. The dot product measures how much one vector acts <em>along</em> another — that is work. The cross product measures how much acts <em>across</em> — that is torque, the turning effect of a force on a wrench, and area. Combining them, \(\vec a\cdot(\vec b\times\vec c)\) gives the volume of the slanted box (parallelepiped) built on three vectors; when that volume is 0, the three vectors lie in one plane.`,
    goals: [
      "find the magnitude and direction of a torque;",
      "find areas of parallelograms and triangles in three-space;",
      "find the volume of a parallelepiped with the scalar triple product;",
      "find work done by a force in three-space;",
      "decide whether three vectors are coplanar.",
    ],
    curriculum: "C2.6 (applications of the cross product, e.g. torque, a vector orthogonal to two vectors); C2.8 (projections, area of a parallelogram, volume of a parallelepiped, work, torque)",
    prior: [
      [S`\([1,0,0]\times[0,1,0]\)?`, S`\([0,0,1]\).`],
      [S`\(W=\vec F\cdot\vec d\) for \([2,1,0]\) and \([3,0,4]\)?`, S`\(6\).`],
      [S`Area of a triangle from its parallelogram?`, S`Half.`],
    ],
    words: [
      ["Torque", "\\(\\vec\\tau=\\vec r\\times\\vec F\\)", "N·m"],
      ["Triangle area", "\\(\\frac12|\\overrightarrow{AB}\\times\\overrightarrow{AC}|\\)", ""],
      ["Scalar triple product", "\\(\\vec a\\cdot(\\vec b\\times\\vec c)\\)", "volume (up to sign)"],
      ["Coplanar", "lying in one plane", "triple product 0"],
    ],
  }),

  section("📌 Along, across, and volume", S`
  ${table(["Question", "Tool", "Formula"], [
    ["work done by a force", "dot product", "\\(W=\\vec F\\cdot\\vec d\\)"],
    ["turning effect of a force", "cross product", "\\(|\\vec\\tau|=|\\vec r||\\vec F|\\sin\\theta\\)"],
    ["area of a parallelogram / triangle", "cross product", "\\(|\\vec a\\times\\vec b|\\) / half of it"],
    ["volume of a parallelepiped", "both", "\\(|\\vec a\\cdot(\\vec b\\times\\vec c)|\\)"],
  ])}
  ${vfig(merge(V3, axes3(4.6), ppd([2.5, 0, 0], [0.6, 3, 0], [0.4, 0.8, 2.6]), { arrows: [{ from: [0, 0], to: p3(2.5, 0, 0), vl: "a", off: 16 }, { from: [0, 0], to: p3(0.6, 3, 0), vl: "b", color: "blue", off: 16 }, { from: [0, 0], to: p3(0.4, 0.8, 2.6), vl: "c", color: "green", off: -16 }] }), "The parallelepiped on a, b, c: base area |b × c| times height gives |a · (b × c)|")}
  ${keyIdea(S`\(|\vec b\times\vec c|\) is the area of the base, and the height is the scalar projection of \(\vec a\) on \(\vec b\times\vec c\). Their product is \(|\vec a\cdot(\vec b\times\vec c)|\). Torque is largest when the force is perpendicular to the wrench, and it points along the axis of rotation.`)}`),

  section("📌 Explore", S`<p>Change the length of the wrench, the size of the force and the angle between them. The torque grows with each, but the angle matters most: at \(0^\circ\) (pushing along the handle) the bolt does not turn at all.</p>`),

  widget("torqueLab", { init: { r: 0.3, F: 50, th: 70 } }),

  section("📌 Choosing the right product", S`
  <p>Ask what the question measures. "How much along" means a dot product; "how much across" or "area" means a cross product; "volume" or "in one plane?" means the triple product. Write position and force vectors carefully: torque uses the vector from the pivot to where the force is applied.</p>
  ${watchOut([
    "Torque is r × F in that order: r from the pivot to the point of application.",
    "A triangle's area is half the cross product's magnitude.",
    "The triple product can be negative; volume is its absolute value.",
    "Work is a scalar; torque is a vector.",
    "Coplanar ⇔ triple product 0 — not just two of the vectors being parallel.",
  ])}`),

  examples([
    ["Torque on a wrench", S`A 40 N force is applied to the end of a 0.25 m wrench at \(75^\circ\) to the handle. Find the magnitude of the torque.`,
      [S`\(|\vec\tau|=|\vec r||\vec F|\sin\theta=0.25\times40\times\sin75^\circ\).`],
      S`about 9.66 N·m`,
      vfig({ view: { xmin: -0.6, xmax: 7.4, ymin: -0.8, ymax: 4.4 }, grid: false, axes: false, arrows: [{ from: [0, 0], to: [5, 0], vl: "r", label: "0.25 m", off: 16, w: 5 }, { from: [5, 0], to: pol(3.6, 75, [5, 0]), vl: "F", label: "40 N", color: "red", off: -16 }], arcs: [{ at: [5, 0], r: 1, a: 0, b: 75, label: "75°" }], points: [{ x: 0, y: 0, label: "bolt", dx: -6, dy: 20 }] })],
    ["A torque vector", S`A force \(\vec F=[0,30,10]\) N acts at the point \(\vec r=[0.2,0,0]\) m from a pivot. Find \(\vec\tau=\vec r\times\vec F\) and its magnitude.`,
      [S`\([0(10)-0(30),\ 0(0)-0.2(10),\ 0.2(30)-0(0)]=[0,-2,6]\).`, S`\(|\vec\tau|=\sqrt{4+36}\).`],
      S`\([0,-2,6]\) N·m, magnitude \(\approx6.32\) N·m`],
    ["Area of a triangle in space", S`Find the area of the triangle with vertices \(A(1,0,2)\), \(B(3,1,0)\), \(C(0,2,1)\).`,
      [S`\(\overrightarrow{AB}=[2,1,-2]\), \(\overrightarrow{AC}=[-1,2,-1]\); cross product \([1(-1)-(-2)(2),\ (-2)(-1)-2(-1),\ 2(2)-1(-1)]=[3,4,5]\).`, S`Area \(=\frac12\sqrt{9+16+25}=\frac12\sqrt{50}\).`],
      S`\(\approx3.54\) square units`,
      vfig(merge(V3, axes3(4.4), { polys: [{ pts: [p3(1, 0, 2), p3(3, 1, 0), p3(0, 2, 1)], fill: "#ede9fe", stroke: "violet" }], points: [{ x: p3(1, 0, 2)[0], y: p3(1, 0, 2)[1], label: "A", dx: -16, dy: -4 }, { x: p3(3, 1, 0)[0], y: p3(3, 1, 0)[1], label: "B", dx: -4, dy: 18 }, { x: p3(0, 2, 1)[0], y: p3(0, 2, 1)[1], label: "C", dx: 8, dy: -4 }] }))],
    ["Volume of a parallelepiped", S`Find the volume of the parallelepiped on \(\vec a=[2,0,1]\), \(\vec b=[1,3,0]\), \(\vec c=[0,1,4]\).`,
      [S`\(\vec b\times\vec c=[3(4)-0(1),\ 0(0)-1(4),\ 1(1)-3(0)]=[12,-4,1]\).`, S`\(\vec a\cdot(\vec b\times\vec c)=24+0+1\).`],
      S`25 cubic units`,
      vfig(merge(V3, axes3(4.6), ppd([2, 0, 1].map((z) => z * 0.9), [1, 3, 0].map((z) => z * 0.9), [0, 1, 4].map((z) => z * 0.9)), { arrows: [{ from: [0, 0], to: p3(1.8, 0, 0.9), vl: "a", off: 16 }, { from: [0, 0], to: p3(0.9, 2.7, 0), vl: "b", color: "blue", off: 16 }, { from: [0, 0], to: p3(0, 0.9, 3.6), vl: "c", color: "green", off: -16 }] }, { view: { xmin: -3.8, xmax: 6, ymin: -2.8, ymax: 7 } }))],
    ["Work in three-space", S`A force \(\vec F=[3,-2,5]\) N moves an object from \((0,1,2)\) to \((4,3,6)\) (metres). Find the work done.`,
      [S`\(\vec d=[4,2,4]\).`, S`\(W=12-4+20\).`],
      S`28 J`],
  ]),

  practice([
    q("torque", S`A 60 N force acts perpendicular to a 0.4 m wrench. Find the torque (N·m).`, num(24),
      "sin 90° = 1.", [S`\(0.4\times60\).`], S`\(24\)`),
    q("area", S`Find the area of the parallelogram spanned by \([1,0,0]\) and \([0,2,0]\).`, num(2),
      "|a × b|.", [S`\([0,0,2]\).`], S`\(2\)`),
    q("volume", S`Find the volume of the box spanned by \([2,0,0]\), \([0,3,0]\), \([0,0,4]\).`, num(24),
      "Triple product.", [S`\(2\times3\times4\).`], S`\(24\)`),
    q("coplanar", S`Three vectors are coplanar exactly when:`, choice(["their scalar triple product is 0", "their dot products are all 0", "they have equal magnitudes", "two of them are perpendicular"], 0),
      "No volume.", ["A flat box has volume 0."], "the triple product is 0"),
    q("work", S`Find the work done by \(\vec F=[1,2,3]\) N over \(\vec d=[2,0,1]\) m (J).`, num(5),
      "Dot product.", [S`\(2+0+3\).`], S`\(5\)`),
  ]),

  ...hard([
    ["Are they coplanar?", S`Are \([1,2,3]\), \([4,5,6]\) and \([7,8,9]\) coplanar?`,
      [S`\([4,5,6]\times[7,8,9]=[45-48,\ 42-36,\ 32-35]=[-3,6,-3]\).`, S`\([1,2,3]\cdot[-3,6,-3]=-3+12-9=0\).`],
      S`yes: the triple product is 0 (indeed \([7,8,9]=2[4,5,6]-[1,2,3]\))`,
      vfig(merge(V3, axes3(4.2), { polys: [{ pts: [p3(0, 0, 0), p3(0.4, 0.8, 1.2), p3(2.8, 3.2, 3.6)], fill: "#fde68a" }], arrows: [{ from: [0, 0], to: p3(0.4, 0.8, 1.2), label: "[1,2,3]", off: -16 }, { from: [0, 0], to: p3(1.6, 2, 2.4), color: "blue", label: "[4,5,6]", off: 16 }, { from: [0, 0], to: p3(2.8, 3.2, 3.6), color: "green", label: "[7,8,9]", off: 16 }] }))],
    ["The ratchet", S`A 0.3 m ratchet wrench is pulled with 90 N. At what angle to the handle does the pull give a torque of 20 N·m? Why does a ratchet help?`,
      [S`\(0.3\times90\times\sin\theta=20\Rightarrow\sin\theta=\frac{20}{27}\), \(\theta\approx47.79^\circ\) (or \(132.21^\circ\)).`, S`The ratchet lets you reset the handle without turning the bolt back, so you can always pull close to \(90^\circ\), where the torque is greatest (27 N·m).`],
      S`about \(47.8^\circ\) (or \(132.2^\circ\)); the ratchet keeps the pull near the best angle`,
      vfig({ view: { xmin: -0.6, xmax: 7.4, ymin: -0.8, ymax: 4.4 }, grid: false, axes: false, arrows: [{ from: [0, 0], to: [5, 0], vl: "r", label: "0.3 m", off: 16, w: 5 }, { from: [5, 0], to: pol(3.6, 47.79, [5, 0]), vl: "F", label: "90 N", color: "red", off: -16 }, { from: [5, 0], to: [5, 3.6], color: "green", w: 1.8, dash: true, label: "best: 90°", off: -14 }], arcs: [{ at: [5, 0], r: 1, a: 0, b: 47.79, label: "47.8°" }] })],
  ], [
    q("hard", S`Find the area of the triangle with vertices \((0,0,0)\), \((2,1,0)\) and \((0,1,3)\).`, num(3.5, 0.001),
      "Half of |[2,1,0] × [0,1,3]|.", [S`\([3,-6,2]\), length 7.`], S`\(3.5\)`),
    q("hard", S`Find \(k\) so that \([1,0,k]\), \([0,1,2]\) and \([1,1,0]\) are coplanar.`, num(-2),
      "Triple product zero.", [S`\([0,1,2]\times[1,1,0]=[-2,2,-1]\); \(-2-k=0\).`], S`\(-2\)`),
    q("hard", S`Find the greatest torque possible with a 0.35 m wrench and an 80 N force (N·m).`, num(28),
      "Pull at 90°.", [S`\(0.35\times80\).`], S`\(28\)`),
  ]),

  wrapUp({
    qas: [
      ["When do I use the dot product?", "When you need how much one vector acts along another: work, projections, angles."],
      ["When do I use the cross product?", "When you need how much acts across: torque, areas, a vector perpendicular to two others."],
      ["How do I find the volume of a parallelepiped?", "Take |a · (b × c)|: base area times height."],
      ["How do I maximize torque?", "Use a longer handle, a bigger force, and pull perpendicular to the handle."],
      ["How do I test three vectors for coplanarity?", "Compute the scalar triple product; it is 0 exactly when they lie in one plane."],
    ],
    summary: [
      "Work W = F · d.",
      "Torque τ = r × F; |τ| = |r||F| sin θ.",
      "Area = |a × b|; triangle half.",
      "Volume = |a · (b × c)|; 0 ⇔ coplanar.",
    ],
    next: "7.7 reviews the chapter.",
  }),
];
