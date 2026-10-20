// MCV4U 7.1 — Cartesian Vectors (rebuild of "Cartesian Vectors in 2-D & 3-D"; three-space moves to 7.4): position
// vectors, components and the unit vectors i and j, vectors between points, operations by components, magnitude,
// direction and unit vectors, and converting between magnitude-direction and component form
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard } from "./lib.mjs";
import { vfig } from "./vecfig.mjs";

export const TITLE = "7.1 Cartesian Vectors";
export const ID = "9e8113fd-a4c5-473a-8db6-a44f00469001";

const S = String.raw;
export const blocks = () => [
  intro({
    icon: "📍",
    title: "Cartesian Vectors",
    overview: S`Put a vector on a coordinate grid with its tail at the origin and its head lands on a point \((a,b)\). We write the vector as \([a,b]\) — "\(a\) across, \(b\) up" — or as \(a\vec i+b\vec j\), where \(\vec i=[1,0]\) and \(\vec j=[0,1]\) are unit vectors along the axes. In this form every operation from Chapter 6 becomes arithmetic on the components: add the components to add vectors, multiply them to scale, and use the Pythagorean theorem for the magnitude.`,
    goals: [
      "write position vectors and vectors between two points in component form;",
      "use the unit vectors i and j;",
      "add, subtract and scale vectors by components;",
      "find magnitudes, direction angles and unit vectors;",
      "convert between magnitude-direction form and component form.",
    ],
    curriculum: "C1.3 (represent a vector in two-space geometrically and algebraically, and convert between the two forms); C2.1 (operations on Cartesian vectors)",
    prior: [
      [S`\(\sqrt{5^2+12^2}\)?`, S`\(13\).`],
      [S`\(\cos150^\circ\)?`, S`\(-\frac{\sqrt3}2\approx-0.866\).`],
      [S`Midpoint of \((0,0)\) and \((4,6)\)?`, S`\((2,3)\).`],
    ],
    words: [
      ["Position vector", "from the origin to a point", "\\(\\overrightarrow{OP}=[a,b]\\)"],
      ["Components", "the across and up parts", "\\([a,b]=a\\vec i+b\\vec j\\)"],
      ["\\(\\vec i,\\ \\vec j\\)", "unit vectors along the axes", "\\([1,0],\\ [0,1]\\)"],
      ["Unit vector", "length 1", "\\(\\frac{1}{|\\vec v|}\\vec v\\)"],
    ],
  }),

  section("📌 Components on a grid", S`
  ${vfig({ view: { xmin: -1, xmax: 6, ymin: -1, ymax: 5 }, arrows: [{ from: [0, 0], to: [5, 0], color: "blue", label: "5i", off: 14 }, { from: [5, 0], to: [5, 4], color: "red", label: "4j", off: -16 }, { from: [0, 0], to: [5, 4], vl: "v", off: -16 }, { from: [0, 0], to: [1, 0], color: "green", w: 2.4 }, { from: [0, 0], to: [0, 1], color: "green", w: 2.4 }], texts: [{ x: 0.5, y: -0.5, t: "i", color: "green" }, { x: -0.4, y: 0.5, t: "j", color: "green" }], points: [{ x: 5, y: 4, label: "P(5, 4)", dx: 8, dy: -4 }] }, "v = [5, 4] = 5i + 4j, the position vector of P(5, 4)")}
  ${table(["Task", "Rule for \\(\\vec u=[a,b]\\), \\(\\vec v=[c,d]\\)"], [
    ["vector from \\(A(x_1,y_1)\\) to \\(B(x_2,y_2)\\)", "\\(\\overrightarrow{AB}=[x_2-x_1,\\ y_2-y_1]\\)"],
    ["sum, difference, multiple", "\\([a+c,\\ b+d]\\), \\([a-c,\\ b-d]\\), \\([ka,\\ kb]\\)"],
    ["magnitude", "\\(|\\vec u|=\\sqrt{a^2+b^2}\\)"],
    ["from magnitude \\(m\\) and angle \\(\\theta\\)", "\\([m\\cos\\theta,\\ m\\sin\\theta]\\)"],
  ])}
  ${keyIdea(S`Head minus tail: \(\overrightarrow{AB}=\overrightarrow{OB}-\overrightarrow{OA}\). Two Cartesian vectors are equal exactly when their components are equal, and they are collinear exactly when one list of components is a multiple of the other.`)}`),

  section("📌 Explore", S`<p>Set the components of \(\vec u\) and read its magnitude, direction and unit vector. Switch to \(\vec u+\vec v\) or \(\vec u-\vec v\): the red result's components are just the sums or differences of the components.</p>`),

  widget("cartesianLab", { init: { a: 3, b: 2, c: -1, d: 3 } }),

  section("📌 Working in components", S`
  <p>For the direction, find the reference angle \(\tan^{-1}\left|\frac ba\right|\), then place it in the right quadrant using the signs of \(a\) and \(b\). To build a vector from a magnitude and direction, multiply the magnitude by \(\cos\theta\) and \(\sin\theta\).</p>
  ${watchOut([
    "AB is head minus tail: B − A, not A − B.",
    "tan⁻¹ alone gives the wrong quadrant for vectors pointing left.",
    "A unit vector needs every component divided by the magnitude.",
    "[a, b] is a vector; (a, b) is a point.",
    "Only like components combine: x with x, y with y.",
  ])}`),

  examples([
    ["A position vector", S`Write the position vector of \(P(-3,5)\) in both forms and find its magnitude.`,
      [S`\(\overrightarrow{OP}=[-3,5]=-3\vec i+5\vec j\).`, S`\(|\overrightarrow{OP}|=\sqrt{9+25}=\sqrt{34}\).`],
      S`\([-3,5]\), magnitude \(\sqrt{34}\approx5.83\)`,
      vfig({ view: { xmin: -4, xmax: 2, ymin: -1, ymax: 6 }, arrows: [{ from: [0, 0], to: [-3, 5], vl: "OP", off: -18 }], segs: [{ pts: [[0, 0], [-3, 0], [-3, 5]], dash: true }], points: [{ x: -3, y: 5, label: "P(−3, 5)", dx: 6, dy: -6 }] })],
    ["Between two points", S`Find \(\overrightarrow{AB}\), its magnitude and its direction for \(A(4,-1)\) and \(B(-2,7)\).`,
      [S`\(\overrightarrow{AB}=[-2-4,\ 7-(-1)]=[-6,8]\), \(|\overrightarrow{AB}|=10\).`, S`Reference angle \(\tan^{-1}\frac86\approx53.13^\circ\); pointing left and up (quadrant II): \(180^\circ-53.13^\circ\).`],
      S`\([-6,8]\), length 10, at \(126.87^\circ\) from the positive x-axis`,
      vfig({ view: { xmin: -3, xmax: 5, ymin: -2, ymax: 8 }, arrows: [{ from: [4, -1], to: [-2, 7], vl: "AB", off: -18 }], segs: [{ pts: [[4, -1], [-2, -1], [-2, 7]], dash: true }], texts: [{ x: 1, y: -1.5, t: "−6" }, { x: -2.5, y: 3, t: "8" }], points: [{ x: 4, y: -1, label: "A", dx: 8, dy: 4 }, { x: -2, y: 7, label: "B", dx: 8, dy: -4 }] })],
    ["Combining vectors", S`For \(\vec u=[2,-3]\) and \(\vec v=[-1,4]\), find \(3\vec u-2\vec v\) and its magnitude.`,
      [S`\(3\vec u=[6,-9]\), \(2\vec v=[-2,8]\).`, S`\(3\vec u-2\vec v=[8,-17]\); \(\sqrt{64+289}=\sqrt{353}\).`],
      S`\([8,-17]\), magnitude \(\approx18.79\)`],
    ["From magnitude and direction", S`Write a vector of magnitude 12 at \(150^\circ\) from the positive x-axis in component form.`,
      [S`\([12\cos150^\circ,\ 12\sin150^\circ]\).`, S`\(=[-6\sqrt3,\ 6]\).`],
      S`\(\approx[-10.39,\ 6]\)`,
      vfig({ view: { xmin: -11.5, xmax: 2, ymin: -1, ymax: 7 }, arrows: [{ from: [0, 0], to: [-10.39, 6], vl: "v", label: "12", off: -16 }, { from: [0, 0], to: [-10.39, 0], color: "blue", label: "−10.39", off: 14 }, { from: [-10.39, 0], to: [-10.39, 6], color: "red", label: "6", off: 16 }], arcs: [{ at: [0, 0], r: 1.3, a: 0, b: 150, label: "150°" }] })],
    ["A unit vector", S`Find the unit vector in the direction of \(\vec w=[5,-12]\), and the vector of length 39 in that direction.`,
      [S`\(|\vec w|=13\), so the unit vector is \(\left[\frac5{13},-\frac{12}{13}\right]\).`, S`Length 39: multiply by 39: \([15,-36]\).`],
      S`\(\left[\frac5{13},-\frac{12}{13}\right]\) and \([15,-36]\)`],
  ]),

  practice([
    q("magnitude", S`Find \(|[-7,24]|\).`, num(25),
      "Pythagoras.", [S`\(\sqrt{49+576}\).`], S`\(25\)`),
    q("between", S`For \(A(3,8)\) and \(B(-1,2)\), find the x-component of \(\overrightarrow{AB}\).`, num(-4),
      "Head minus tail.", [S`\(-1-3\).`], S`\(-4\)`),
    q("parallel", S`Find \(k\) so that \([k,6]\) is parallel to \([2,3]\).`, num(4),
      "Components in the same ratio.", [S`\([k,6]=2[2,3]\).`], S`\(4\)`),
    q("notation", S`\(4\vec i-\vec j=\)`, choice([S`\([4,-1]\)`, S`\([-1,4]\)`, S`\([4,1]\)`, S`\((4,-1)\) as a point`], 0),
      "Coefficients of i and j.", ["i gives the first component."], S`\([4,-1]\)`),
    q("direction", S`At what angle from the positive x-axis does \([-3,-3]\) point (degrees)?`, num(225),
      "Quadrant III, reference 45°.", [S`\(180^\circ+45^\circ\).`], S`\(225^\circ\)`),
  ]),

  ...hard([
    ["Completing a parallelogram", S`\(A(1,2)\), \(B(6,3)\) and \(C(8,7)\) are three vertices of parallelogram \(ABCD\). Find \(D\).`,
      [S`In a parallelogram \(\overrightarrow{AD}=\overrightarrow{BC}=[8-6,\ 7-3]=[2,4]\).`, S`\(\overrightarrow{OD}=\overrightarrow{OA}+\overrightarrow{AD}=[1,2]+[2,4]\).`],
      S`\(D(3,6)\)`,
      vfig({ view: { xmin: -0.5, xmax: 9, ymin: -0.5, ymax: 8 }, segs: [{ pts: [[1, 2], [6, 3], [8, 7], [3, 6], [1, 2]], color: "gray" }], arrows: [{ from: [6, 3], to: [8, 7], color: "blue", label: "[2, 4]", off: 18 }, { from: [1, 2], to: [3, 6], color: "red", label: "[2, 4]", off: -18 }], points: [{ x: 1, y: 2, label: "A", dx: -14, dy: 14 }, { x: 6, y: 3, label: "B", dx: 6, dy: 16 }, { x: 8, y: 7, label: "C", dx: 8, dy: 0 }, { x: 3, y: 6, label: "D?", dx: -24, dy: -6 }] })],
    ["Building a vector from two others", S`Find scalars \(a\) and \(b\) so that \(a[1,2]+b[3,-1]=[11,1]\).`,
      [S`Components: \(a+3b=11\) and \(2a-b=1\).`, S`From the second, \(b=2a-1\); then \(a+6a-3=11\Rightarrow a=2\), \(b=3\).`],
      S`\(a=2\), \(b=3\): \(2[1,2]+3[3,-1]=[11,1]\)`,
      vfig({ view: { xmin: -0.5, xmax: 12, ymin: -2, ymax: 5 }, arrows: [{ from: [0, 0], to: [2, 4], label: "2[1, 2]", off: -18 }, { from: [2, 4], to: [11, 1], color: "blue", label: "3[3, −1]", off: -16 }, { from: [0, 0], to: [11, 1], color: "red", label: "[11, 1]", off: 14 }] })],
  ], [
    q("hard", S`Find \(|\vec u+\vec v|\) for \(\vec u=[3,-2]\) and \(\vec v=[-7,5]\).`, num(5),
      "Add first.", [S`\([-4,3]\).`], S`\(5\)`),
    q("hard", S`Find \(k\gt0\) so that \(|[k,\ k+1]|=5\).`, num(3),
      "Square both sides.", [S`\(2k^2+2k+1=25\Rightarrow k^2+k-12=0\).`], S`\(3\)`),
    q("hard", S`\(M\) is the midpoint of \(A(-2,5)\) and \(B(6,-1)\). Find the y-component of \(\overrightarrow{OM}\).`, num(2),
      "Average the coordinates.", [S`\(\frac{5+(-1)}2\).`], S`\(2\)`),
  ]),

  wrapUp({
    qas: [
      ["What does [a, b] mean?", "The vector a units across and b units up: a i + b j."],
      ["How do I find the vector from A to B?", "Subtract the coordinates of A from those of B: head minus tail."],
      ["How do I add or scale Cartesian vectors?", "Work component by component: [a + c, b + d] and [ka, kb]."],
      ["How do I get the direction?", "tan⁻¹ of |b/a| gives the reference angle; the signs of a and b tell you the quadrant."],
      ["How do I make a unit vector?", "Divide each component by the magnitude."],
    ],
    summary: [
      "[a, b] = a i + b j.",
      "AB = B − A.",
      "|[a, b]| = √(a² + b²).",
      "[m cos θ, m sin θ] from magnitude and angle.",
    ],
    next: "7.2 multiplies vectors with the dot product.",
  }),
];
