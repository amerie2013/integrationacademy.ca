// MCV4U 7.7 — Chapter 7 Review (NEW lesson): Cartesian vectors in two- and three-space, the dot product and its
// applications, the cross product and its applications, with mixed practice and a hard level
import { intro, section, keyIdea, widget, examples, practice, wrapUp, table, q, num, choice, hard } from "./lib.mjs";
import { vfig, pol, p3, axes3, merge } from "./vecfig.mjs";

export const TITLE = "7.7 Chapter 7 Review";
export const ID = "6d4fc007-0001-4001-8001-000000000707";

const S = String.raw;
const V3 = { view: { xmin: -3.8, xmax: 6, ymin: -2.8, ymax: 5.8 }, grid: false, axes: false };
export const blocks = () => [
  intro({
    icon: "🧩",
    title: "Chapter 7 Review — Cartesian Vectors",
    overview: S`This page pulls the chapter together before the test. Cartesian vectors turn geometry into arithmetic on components, in two-space and three-space. Two products do the heavy lifting: the dot product \(\vec a\cdot\vec b=|\vec a||\vec b|\cos\theta\) (a scalar — angles, projections, work) and the cross product \(\vec a\times\vec b\) (a vector perpendicular to both, with length \(|\vec a||\vec b|\sin\theta\) — areas, torque, volume with the triple product).`,
    goals: [
      "recall the key idea and common mistake of each lesson;",
      "work with vectors in component form in two- and three-space;",
      "use the dot product for angles, projections and work;",
      "use the cross product for perpendicular vectors, areas and torque;",
      "choose the right product for a problem.",
    ],
    curriculum: "C1.3, C1.4, C2.1, C2.4–C2.8 (whole chapter)",
    prior: [
      [S`\(\vec a\cdot\vec b\) in components?`, S`\(a_1b_1+a_2b_2+a_3b_3\).`],
      [S`\(|\vec a\times\vec b|\)?`, S`\(|\vec a||\vec b|\sin\theta\).`],
      [S`Scalar projection of \(\vec a\) on \(\vec b\)?`, S`\(\frac{\vec a\cdot\vec b}{|\vec b|}\).`],
    ],
    words: [
      ["Components", "\\([a,b,c]=a\\vec i+b\\vec j+c\\vec k\\)", ""],
      ["Dot product", "scalar", "angles, projections, work"],
      ["Cross product", "vector ⟂ both", "area, torque"],
      ["Triple product", "\\(\\vec a\\cdot(\\vec b\\times\\vec c)\\)", "volume, coplanarity"],
    ],
  }),

  section("📌 The chapter on one page", table(["Lesson", "Key idea", "Example", "Watch out"], [
    ["7.1 Cartesian vectors", "AB = B − A; |[a, b]| = √(a² + b²)", "[−6, 8] has length 10", "quadrant of the direction"],
    ["7.2 Dot product", "a · b = |a||b| cos θ = Σ aᵢbᵢ", "a · b = 0 ⇔ ⟂", "it is a number"],
    ["7.3 Applications of the dot product", "projection a · b / |b|; W = F · d", "work at an angle", "divide by |b|"],
    ["7.4 Three-space", "[a, b, c]; √(a² + b² + c²)", "direction angles", "cos² sum = 1"],
    ["7.5 Cross product", "a × b ⟂ a, b; |a||b| sin θ", "i × j = k", "b × a = −a × b"],
    ["7.6 Applications of both", "torque, area, volume", "|a · (b × c)|", "triangle = half"],
  ])),

  section("📌 Explore", S`<p>Use the cross-product explorer to check the examples below: enter the vectors, confirm the components of \(\vec a\times\vec b\), and read the parallelogram's area.</p>`),

  widget("crossLab", { init: { a: [1, 1, 0], b: [0, 2, 3] } }),

  section("📌 The big picture", S`${keyIdea(S`Along → dot product; across → cross product. Every answer can be checked: a dot product of 0 confirms perpendicular vectors, and a cross product must be perpendicular to both of its inputs.`)}
  ${vfig(merge(V3, axes3(4.4), { polys: [{ pts: [p3(0, 0, 0), p3(2, 2, 0), p3(2, 3, 1.5), p3(0, 1, 1.5)], fill: "#ede9fe" }], arrows: [{ from: [0, 0], to: p3(2, 2, 0), vl: "a", off: 16 }, { from: [0, 0], to: p3(0, 1, 1.5), vl: "b", color: "blue", off: -16 }, { from: [0, 0], to: p3(1.5, -1.5, 1), vl: "a×b", color: "red", off: 16 }] }), "a = [1, 1, 0] and b = [0, 2, 3] (drawn to scale ½ and 2) with a × b = [3, −3, 2] perpendicular to both")}`),

  examples([
    ["Components and a unit vector", S`For \(A(-1,4)\) and \(B(5,-4)\), find \(\overrightarrow{AB}\), its length, and the unit vector in its direction.`,
      [S`\(\overrightarrow{AB}=[6,-8]\), length 10.`, S`Divide by 10.`],
      S`\([6,-8]\), 10, \([0.6,-0.8]\)`,
      vfig({ view: { xmin: -2, xmax: 6, ymin: -5, ymax: 5 }, arrows: [{ from: [-1, 4], to: [5, -4], vl: "AB", off: 16 }], points: [{ x: -1, y: 4, label: "A", dx: -14, dy: -4 }, { x: 5, y: -4, label: "B", dx: 8, dy: 4 }] })],
    ["An angle in three-space", S`Find the angle between \([1,2,-2]\) and \([4,0,3]\).`,
      [S`Dot product \(4+0-6=-2\); magnitudes 3 and 5.`, S`\(\cos\theta=-\frac{2}{15}\).`],
      S`about \(97.66^\circ\)`],
    ["A projection in three-space", S`Find the scalar and vector projections of \([3,1,2]\) on \([2,-2,1]\).`,
      [S`Dot product \(6-2+2=6\), \(|[2,-2,1]|=3\): scalar projection 2.`, S`Vector projection \(\frac69[2,-2,1]\).`],
      S`2 and \(\left[\frac43,-\frac43,\frac23\right]\)`],
    ["A cross product and an area", S`Find \([1,1,0]\times[0,2,3]\) and the area of the parallelogram the vectors span.`,
      [S`\([1(3)-0(2),\ 0(0)-1(3),\ 1(2)-1(0)]=[3,-3,2]\).`, S`Area \(\sqrt{9+9+4}=\sqrt{22}\).`],
      S`\([3,-3,2]\), area \(\approx4.69\)`],
    ["Work at an angle", S`A 25 N force pulls a box 12 m, at \(40^\circ\) to the direction of motion. Find the work.`,
      [S`\(25\times12\times\cos40^\circ\).`],
      S`about 229.8 J`,
      vfig({ view: { xmin: -0.6, xmax: 6.4, ymin: -0.8, ymax: 3.6 }, grid: false, axes: false, polys: [{ pts: [[0, 0], [1.4, 0], [1.4, 0.7], [0, 0.7]], fill: "#e0e7ff", stroke: "violet" }], arrows: [{ from: [1.4, 0.35], to: pol(3.6, 40, [1.4, 0.35]), vl: "F", label: "25 N", off: -16 }, { from: [0, -0.5], to: [6, -0.5], color: "blue", label: "12 m", off: -12, w: 2 }], arcs: [{ at: [1.4, 0.35], r: 1, a: 0, b: 40, label: "40°" }] })],
  ]),

  practice([
    q("magnitude", S`Find \(|[6,-2,3]|\).`, num(7),
      "√(36 + 4 + 9).", [S`\(\sqrt{49}\).`], S`\(7\)`),
    q("dot", S`Find \([2,0,-1]\cdot[3,4,5]\).`, num(1),
      "6 + 0 − 5.", [S`\(1\).`], S`\(1\)`),
    q("cross", S`Find the y-component of \([1,0,0]\times[0,0,1]\).`, num(-1),
      "a₃b₁ − a₁b₃.", [S`\(0-1\).`], S`\(-1\)`),
    q("volume", S`Find the volume of the parallelepiped on \([1,1,0]\), \([0,1,1]\), \([1,0,1]\).`, num(2),
      "Triple product.", [S`\([0,1,1]\times[1,0,1]=[1,1,-1]\); dot with \([1,1,0]\).`], S`\(2\)`),
    q("meaning", S`\(\vec a\cdot\vec b=0\) for nonzero vectors means:`, choice(["the vectors are perpendicular", "the vectors are parallel", "one vector is zero", "a × b = 0"], 0),
      "cos 90° = 0.", ["Zero dot product."], "perpendicular"),
  ]),

  ...hard([
    ["A vector of given length perpendicular to two others", S`Find a vector of length 6 perpendicular to both \([1,2,0]\) and \([0,1,1]\).`,
      [S`\([1,2,0]\times[0,1,1]=[2(1)-0(1),\ 0(0)-1(1),\ 1(1)-2(0)]=[2,-1,1]\), length \(\sqrt6\).`, S`Scale to length 6: \(\frac{6}{\sqrt6}[2,-1,1]=\sqrt6[2,-1,1]\).`],
      S`\(\approx[4.90,-2.45,2.45]\) (or its opposite)`,
      vfig(merge(V3, axes3(4.4), { arrows: [{ from: [0, 0], to: p3(1.5, 3, 0), vl: "a", off: 16 }, { from: [0, 0], to: p3(0, 2, 2), vl: "b", color: "blue", off: -16 }, { from: [0, 0], to: p3(2.45, -1.22, 1.22), color: "red", label: "length 6 (scaled)", off: 16 }] }))],
    ["A triangle in space", S`For \(P(2,1,0)\), \(Q(4,3,1)\) and \(R(1,4,2)\), find \(\angle QPR\) and the area of \(\triangle PQR\).`,
      [S`\(\overrightarrow{PQ}=[2,2,1]\), \(\overrightarrow{PR}=[-1,3,2]\); dot product 6, lengths 3 and \(\sqrt{14}\): \(\cos\angle P=\frac{6}{3\sqrt{14}}\), so \(\angle P\approx57.69^\circ\).`, S`\(\overrightarrow{PQ}\times\overrightarrow{PR}=[2(2)-1(3),\ 1(-1)-2(2),\ 2(3)-2(-1)]=[1,-5,8]\); area \(\frac12\sqrt{90}\).`],
      S`\(\angle P\approx57.69^\circ\), area \(\approx4.74\)`,
      vfig(merge(V3, axes3(4.6), { polys: [{ pts: [p3(2, 1, 0), p3(4, 3, 1), p3(1, 4, 2)], fill: "#ede9fe", stroke: "violet" }], points: [{ x: p3(2, 1, 0)[0], y: p3(2, 1, 0)[1], label: "P", dx: -16, dy: 12 }, { x: p3(4, 3, 1)[0], y: p3(4, 3, 1)[1], label: "Q", dx: 8, dy: 8 }, { x: p3(1, 4, 2)[0], y: p3(1, 4, 2)[1], label: "R", dx: 8, dy: -6 }] }))],
  ], [
    q("hard", S`Find the angle between \([1,1,0]\) and \([1,0,1]\) (degrees).`, num(60),
      "cos θ = 1/2.", [S`\(\frac{1}{\sqrt2\sqrt2}\).`], S`\(60^\circ\)`),
    q("hard", S`Find the scalar projection of \([4,4,2]\) on the z-axis direction \([0,0,1]\).`, num(2),
      "The z-component.", [S`\(\frac{2}{1}\).`], S`\(2\)`),
    q("hard", S`Find the area of the triangle with vertices \((1,0,0)\), \((0,1,0)\), \((0,0,1)\) (2 decimals).`, num(0.87, 0.005),
      "Half of |[−1,1,0] × [−1,0,1]|.", [S`\([1,1,1]\); \(\frac{\sqrt3}2\).`], S`\(0.87\)`),
  ]),

  wrapUp({
    qas: [
      ["How do I write the vector from A to B?", "Subtract coordinates: B − A, in two or three components."],
      ["Dot or cross product?", "Dot for along (angles, projections, work); cross for across (perpendicular vectors, areas, torque)."],
      ["How do I check a cross product?", "Its dot product with each original vector must be 0."],
      ["What does the triple product measure?", "The volume of the parallelepiped; zero means the vectors are coplanar."],
      ["What are direction angles?", "The angles with the axes; cos α = a/|v| and so on, with cos²α + cos²β + cos²γ = 1."],
    ],
    summary: [
      "Components: add, scale, Pythagoras.",
      "a · b scalar; a × b vector.",
      "Projections, work: dot product.",
      "Area, torque, volume: cross / triple product.",
    ],
    next: "Chapter 8 uses vectors to describe lines and planes.",
  }),
];
