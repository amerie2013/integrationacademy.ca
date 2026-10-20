// MCV4U 7.4 — Vectors in Three-Space (NEW lesson): the x-, y-, z-axes and octants, plotting points, position vectors
// and i, j, k, magnitude and distance, operations and the dot product in three-space, and direction angles
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard } from "./lib.mjs";
import { vfig, p3, axes3, box3, merge } from "./vecfig.mjs";

export const TITLE = "7.4 Vectors in Three-Space";
export const ID = "6d4fc007-0001-4001-8001-000000000704";

const S = String.raw;
const V3 = { view: { xmin: -3.8, xmax: 6, ymin: -2.8, ymax: 5.8 }, grid: false, axes: false };
const pt = (x, y, z, label, dx = 8, dy = -6) => { const [a, b] = p3(x, y, z); return { x: a, y: b, label, dx, dy }; };
export const blocks = () => [
  intro({
    icon: "🧊",
    title: "Vectors in Three-Space",
    overview: S`Add a third axis, perpendicular to the other two, and every point in space gets three coordinates \((x,y,z)\). Vectors gain a third component: \([a,b,c]=a\vec i+b\vec j+c\vec k\), with \(\vec k\) the unit vector along the z-axis. Everything from two-space carries over with one extra term — magnitude \(\sqrt{a^2+b^2+c^2}\), components added one by one, and the dot product \(a_1b_1+a_2b_2+a_3b_3\). A new idea appears too: the direction angles a vector makes with each of the three axes.`,
    goals: [
      "plot points in three-space and identify octants;",
      "write position vectors and vectors between points with i, j, k;",
      "find magnitudes and distances between points;",
      "add, scale and take dot products of three-space vectors;",
      "find direction angles and direction cosines.",
    ],
    curriculum: "C1.4 (represent points and vectors in three-space using Cartesian coordinates; distance and magnitude); C2.1, C2.4 (operations and the dot product in three-space)",
    prior: [
      [S`\(|[3,4]|\)?`, S`\(5\).`],
      [S`\([2,1]\cdot[3,-4]\)?`, S`\(2\).`],
      [S`\(\cos^{-1}0\)?`, S`\(90^\circ\).`],
    ],
    words: [
      ["Three-space", "points \\((x,y,z)\\)", "three perpendicular axes"],
      ["\\(\\vec k\\)", "unit vector on the z-axis", "\\([0,0,1]\\)"],
      ["Octant", "one of 8 regions", "set by the signs of x, y, z"],
      ["Direction angles", "\\(\\alpha,\\beta,\\gamma\\) with the axes", "\\(\\cos^2\\alpha+\\cos^2\\beta+\\cos^2\\gamma=1\\)"],
    ],
  }),

  section("📌 Points and vectors in space", S`
  ${vfig(merge(V3, axes3(4.8), { segs: box3(3, 4, 2) }, { arrows: [{ from: [0, 0], to: p3(3, 4, 2), vl: "OP", color: "red", off: -16 }], points: [pt(3, 4, 2, "P(3, 4, 2)")] }), "To plot P(3, 4, 2): 3 along x, 4 along y, then 2 up — a corner of the dashed box")}
  ${table(["Task", "Rule for \\(\\vec u=[u_1,u_2,u_3]\\), \\(\\vec v=[v_1,v_2,v_3]\\)"], [
    ["vector from \\(A\\) to \\(B\\)", "\\([x_2-x_1,\\ y_2-y_1,\\ z_2-z_1]\\)"],
    ["magnitude", "\\(\\sqrt{u_1^2+u_2^2+u_3^2}\\)"],
    ["dot product", "\\(u_1v_1+u_2v_2+u_3v_3\\)"],
    ["direction cosines", "\\(\\cos\\alpha=\\frac{u_1}{|\\vec u|},\\ \\cos\\beta=\\frac{u_2}{|\\vec u|},\\ \\cos\\gamma=\\frac{u_3}{|\\vec u|}\\)"],
  ])}
  ${keyIdea(S`The axes form a right-handed system: curl the fingers of your right hand from the x-axis to the y-axis and your thumb points along the z-axis. The distance between two points is the magnitude of the vector joining them.`)}`),

  section("📌 Explore", S`<p>Move the point with the x, y and z sliders and watch its guide box. Turn and tilt the view to see the box from different sides; the magnitude and the direction angles update as you go.</p>`),

  widget("space3Lab", { init: { x: 3, y: 4, z: 2 } }),

  section("📌 Working in three-space", S`
  <p>Plot a point by moving along x, then parallel to y, then parallel to z. Every rule from two-space gains a third term. For direction angles, divide each component by the magnitude and take the inverse cosine.</p>
  ${watchOut([
    "The x-axis comes toward you in the usual sketch — don't mix it up with y.",
    "Square all three components for the magnitude.",
    "Direction angles are with the positive axes and lie between 0° and 180°.",
    "The three direction angles do not add to 180°; their cosines' squares add to 1.",
    "A point in three-space needs all three coordinates, even if one is 0.",
  ])}`),

  examples([
    ["Plotting a point", S`Plot \(P(2,3,4)\) and find \(|\overrightarrow{OP}|\).`,
      [S`Move 2 along x, 3 parallel to y, 4 up.`, S`\(|\overrightarrow{OP}|=\sqrt{4+9+16}=\sqrt{29}\).`],
      S`\(\sqrt{29}\approx5.39\)`,
      vfig(merge(V3, axes3(4.8), { segs: box3(2, 3, 4) }, { arrows: [{ from: [0, 0], to: p3(2, 3, 4), vl: "OP", color: "red", off: -16 }], points: [pt(2, 3, 4, "P(2, 3, 4)")] }))],
    ["Distance between points", S`Find \(\overrightarrow{AB}\) and \(|\overrightarrow{AB}|\) for \(A(1,-2,3)\) and \(B(4,2,-9)\).`,
      [S`\(\overrightarrow{AB}=[3,4,-12]\).`, S`\(\sqrt{9+16+144}=\sqrt{169}\).`],
      S`\([3,4,-12]\), length 13`],
    ["Operations", S`For \(\vec u=[1,-2,2]\) and \(\vec v=[3,0,-4]\), find \(2\vec u-\vec v\), its magnitude, and \(\vec u\cdot\vec v\).`,
      [S`\(2\vec u-\vec v=[2-3,\ -4-0,\ 4+4]=[-1,-4,8]\); magnitude \(\sqrt{1+16+64}=9\).`, S`\(\vec u\cdot\vec v=3+0-8=-5\).`],
      S`\([-1,-4,8]\), length 9; \(\vec u\cdot\vec v=-5\)`],
    ["Angle between space vectors", S`Find the angle between \(\vec a=[2,1,-2]\) and \(\vec b=[1,-1,4]\).`,
      [S`\(\vec a\cdot\vec b=2-1-8=-7\); \(|\vec a|=3\), \(|\vec b|=\sqrt{18}\).`, S`\(\cos\theta=\frac{-7}{3\sqrt{18}}\approx-0.5500\).`],
      S`about \(123.37^\circ\)`,
      vfig(merge(V3, axes3(4.2), { arrows: [{ from: [0, 0], to: p3(2, 1, -2), vl: "a", off: 16 }, { from: [0, 0], to: p3(1, -1, 4), vl: "b", color: "blue", off: -16 }] }, { view: { xmin: -3.8, xmax: 5, ymin: -3.6, ymax: 5 } }))],
    ["Direction angles", S`Find the direction angles of \(\vec v=[2,-3,6]\) and check that the squares of their cosines add to 1.`,
      [S`\(|\vec v|=\sqrt{4+9+36}=7\).`, S`\(\alpha=\cos^{-1}\frac27\approx73.40^\circ\), \(\beta=\cos^{-1}\left(-\frac37\right)\approx115.38^\circ\), \(\gamma=\cos^{-1}\frac67\approx31.00^\circ\).`, S`\(\frac{4+9+36}{49}=1\).`],
      S`\(73.40^\circ\), \(115.38^\circ\), \(31.00^\circ\)`,
      vfig(merge(V3, axes3(4.6), { arrows: [{ from: [0, 0], to: p3(2 * 0.6, -3 * 0.6, 6 * 0.6), vl: "v", color: "red", off: -16 }], texts: [{ x: 0.9, y: 2.6, t: "γ ≈ 31° from z", color: "red" }] }))],
  ]),

  practice([
    q("magnitude", S`Find \(|[1,4,-8]|\).`, num(9),
      "Square, add, root.", [S`\(\sqrt{1+16+64}\).`], S`\(9\)`),
    q("distance", S`Find the distance between \((2,-1,5)\) and \((-4,1,2)\).`, num(7),
      "Magnitude of the joining vector.", [S`\(\sqrt{36+4+9}\).`], S`\(7\)`),
    q("dot", S`Find \([3,-1,2]\cdot[2,5,1]\).`, num(3),
      "Three products.", [S`\(6-5+2\).`], S`\(3\)`),
    q("octant", S`Which signs describe the point \((-1,2,-3)\)?`, choice(["x negative, y positive, z negative", "x positive, y positive, z negative", "all negative", "x negative, y negative, z positive"], 0),
      "Read the signs.", ["One sign per coordinate."], "x −, y +, z −"),
    q("perpendicular", S`Find \(k\) so that \([2,k,-1]\perp[4,1,3]\).`, num(-5),
      "Dot product zero.", [S`\(8+k-3=0\).`], S`\(-5\)`),
  ]),

  ...hard([
    ["A right triangle in space", S`Show that \(A(1,2,3)\), \(B(3,3,5)\), \(C(2,4,1)\) form a right triangle, and find its area.`,
      [S`\(\overrightarrow{AB}=[2,1,2]\), \(\overrightarrow{AC}=[1,2,-2]\).`, S`\(\overrightarrow{AB}\cdot\overrightarrow{AC}=2+2-4=0\): right angle at \(A\).`, S`Both legs have length 3, so the area is \(\frac12(3)(3)\).`],
      S`right-angled at \(A\); area 4.5`,
      vfig(merge(V3, axes3(4.8), { segs: [{ pts: [p3(1, 2, 3), p3(3, 3, 5), p3(2, 4, 1), p3(1, 2, 3)], color: "gray" }], arrows: [{ from: p3(1, 2, 3), to: p3(3, 3, 5), color: "violet" }, { from: p3(1, 2, 3), to: p3(2, 4, 1), color: "blue" }], points: [pt(1, 2, 3, "A", -16, -4), pt(3, 3, 5, "B"), pt(2, 4, 1, "C", 8, 14)] }, { view: { xmin: -3.8, xmax: 6, ymin: -2.8, ymax: 6.4 } }))],
    ["The third direction angle", S`A vector makes \(60^\circ\) with the x-axis and \(45^\circ\) with the y-axis. What angle can it make with the z-axis?`,
      [S`\(\cos^2\gamma=1-\cos^260^\circ-\cos^245^\circ=1-\frac14-\frac12=\frac14\).`, S`\(\cos\gamma=\pm\frac12\).`],
      S`\(\gamma=60^\circ\) or \(120^\circ\)`,
      vfig(merge(V3, axes3(4.6), { arrows: [{ from: [0, 0], to: p3(2, 2.83, 2), color: "red", label: "γ = 60°", off: -16 }, { from: [0, 0], to: p3(2, 2.83, -2), color: "blue", label: "γ = 120°", off: 16 }] }, { view: { xmin: -3.8, xmax: 6, ymin: -3.6, ymax: 5.8 } }))],
  ], [
    q("hard", S`Find the z-component of the unit vector in the direction of \([4,-4,2]\) (3 decimals).`, num(0.333, 0.001),
      "Divide by the magnitude 6.", [S`\(\frac26\).`], S`\(0.333\)`),
    q("hard", S`Find \(c\gt0\) so that \(|[2,3,c]|=7\).`, num(6),
      "4 + 9 + c² = 49.", [S`\(c^2=36\).`], S`\(6\)`),
    q("hard", S`Find the angle between \([1,1,1]\) and the z-axis (degrees, 2 decimals).`, num(54.74, 0.01),
      "cos γ = 1/√3.", [S`\(\cos^{-1}\frac1{\sqrt3}\).`], S`\(54.74^\circ\)`),
  ]),

  wrapUp({
    qas: [
      ["How do I plot (x, y, z)?", "Move x along the x-axis, then y parallel to the y-axis, then z parallel to the z-axis."],
      ["What is k?", "The unit vector [0, 0, 1] along the z-axis; [a, b, c] = a i + b j + c k."],
      ["How do I find a distance in space?", "Find the vector between the points and take √(a² + b² + c²)."],
      ["Does the dot product change in three-space?", "Only by one more term: a₁b₁ + a₂b₂ + a₃b₃. Its geometric meaning is the same."],
      ["What are direction angles?", "The angles a vector makes with the positive x-, y- and z-axes; their cosines are the components divided by the magnitude."],
    ],
    summary: [
      "[a, b, c] = a i + b j + c k.",
      "|v| = √(a² + b² + c²).",
      "a · b = a₁b₁ + a₂b₂ + a₃b₃.",
      "cos²α + cos²β + cos²γ = 1.",
    ],
    next: "7.5 introduces the cross product.",
  }),
];
