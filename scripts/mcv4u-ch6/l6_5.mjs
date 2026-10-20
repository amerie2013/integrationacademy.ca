// MCV4U 6.5 — Resolution of Vectors Into Rectangular Components (NEW lesson): horizontal and vertical components,
// components from bearings, components along and perpendicular to a ramp, adding vectors by components, and
// recovering a vector from its components
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard } from "./lib.mjs";
import { vfig, pol, brg } from "./vecfig.mjs";

export const TITLE = "6.5 Resolution of Vectors Into Rectangular Components";
export const ID = "6d4fc006-0001-4001-8001-000000000605";

const S = String.raw;
const plus = (p, q) => [p[0] + q[0], p[1] + q[1]];
export const blocks = () => [
  intro({
    icon: "📐",
    title: "Resolution of Vectors Into Rectangular Components",
    overview: S`A rope pulling a sled at an angle does two jobs at once: part of the pull moves the sled forward, and part lifts it. Splitting a vector into two perpendicular vectors that add up to it is called <strong>resolving</strong> it into <strong>rectangular components</strong>. With an angle \(\theta\) from the horizontal, the components are \(|\vec v|\cos\theta\) and \(|\vec v|\sin\theta\). Components turn awkward triangles into simple additions — and they lead straight to the Cartesian vectors of the next chapter.`,
    goals: [
      "resolve a vector into horizontal and vertical components;",
      "find components of a vector given by a bearing;",
      "resolve a weight along and perpendicular to a ramp;",
      "add several vectors by adding their components;",
      "find a vector's magnitude and direction from its components.",
    ],
    curriculum: "C1.3 (represent a vector in two-space using its rectangular components and convert between forms); C2.2 (solve problems using vectors)",
    prior: [
      [S`In a right triangle, \(\cos\theta=\)?`, S`adjacent ÷ hypotenuse.`],
      [S`\(\sin30^\circ\)?`, S`\(\frac12\).`],
      [S`\(\sqrt{9^2+12^2}\)?`, S`\(15\).`],
    ],
    words: [
      ["Resolve", "split into perpendicular parts", ""],
      ["Horizontal component", "\\(|\\vec v|\\cos\\theta\\)", "\\(\\theta\\) from the horizontal"],
      ["Vertical component", "\\(|\\vec v|\\sin\\theta\\)", ""],
      ["Ramp components", "along: \\(W\\sin\\alpha\\); into: \\(W\\cos\\alpha\\)", "ramp angle \\(\\alpha\\)"],
    ],
  }),

  section("📌 Splitting a vector in two", S`
  ${vfig({ view: { xmin: -0.8, xmax: 9.6, ymin: -0.8, ymax: 4.4 }, grid: false, axes: false, arrows: [{ from: [0, 0], to: [4.915, 0], color: "blue", label: "60 cos 35° ≈ 49.1 N", off: -14 }, { from: [4.915, 0], to: [4.915, 3.441], color: "red", label: "60 sin 35° ≈ 34.4 N", off: 12 }, { from: [0, 0], to: [4.915, 3.441], vl: "F", label: "60 N", off: -16 }], arcs: [{ at: [0, 0], r: 1.2, a: 0, b: 35, label: "35°" }] }, "A 60 N pull at 35° above the horizontal and its two rectangular components")}
  ${table(["Given", "Horizontal (east)", "Vertical (north)"], [
    ["angle \\(\\theta\\) from the positive x-axis", "\\(|\\vec v|\\cos\\theta\\)", "\\(|\\vec v|\\sin\\theta\\)"],
    ["true bearing \\(\\beta\\)", "\\(|\\vec v|\\sin\\beta\\)", "\\(|\\vec v|\\cos\\beta\\)"],
    ["components \\(x\\), \\(y\\)", "\\(|\\vec v|=\\sqrt{x^2+y^2}\\)", "\\(\\tan\\theta=\\frac yx\\) (check the quadrant)"],
  ])}
  ${keyIdea(S`A vector equals the sum of its components. To add several vectors, add all the horizontal components, add all the vertical components, then rebuild the resultant with the Pythagorean theorem and the inverse tangent. Components can be taken along <em>any</em> two perpendicular directions — along and across a ramp is often the smart choice.`)}`),

  section("📌 Explore", S`<p>Change the magnitude and angle and watch the blue and red components; their signs change as the vector moves into other quadrants. Then switch to the ramp: as the ramp gets steeper, more of the weight pulls the object down the slope.</p>`),

  widget("componentsLab", { init: { m: 5, deg: 35 } }),

  section("📌 Choosing the angle", S`
  <p>Draw the right triangle formed by the vector and its components, and make sure you know which angle you have. For a ramp at angle \(\alpha\), the angle between the weight (straight down) and the line perpendicular to the ramp is also \(\alpha\), so the part along the ramp is \(W\sin\alpha\) and the part into the ramp is \(W\cos\alpha\).</p>
  ${watchOut([
    "cos goes with the side next to the angle, sin with the side opposite.",
    "Bearings are measured from north, so the east part uses sin.",
    "A component pointing left or down is negative.",
    "tan⁻¹ gives an angle between −90° and 90°: adjust for the quadrant.",
    "On a ramp, the angle between the weight and the perpendicular equals the ramp angle.",
  ])}`),

  examples([
    ["A pull at an angle", S`A force of 60 N acts at \(35^\circ\) above the horizontal. Find its components.`,
      [S`Horizontal: \(60\cos35^\circ\approx49.15\) N.`, S`Vertical: \(60\sin35^\circ\approx34.41\) N.`],
      S`about 49.15 N horizontally and 34.41 N vertically`],
    ["From a bearing", S`A plane flies at 300 km/h on a bearing of \(120^\circ\). Find its east and north components.`,
      [S`East: \(300\sin120^\circ\approx259.81\) km/h.`, S`North: \(300\cos120^\circ=-150\) km/h, that is, 150 km/h south.`],
      S`259.81 km/h east and 150 km/h south`,
      vfig({ view: { xmin: -0.8, xmax: 4.6, ymin: -2, ymax: 1.6 }, north: [0, 0, 1.4], arrows: [{ from: [0, 0], to: [2.598, 0], color: "blue", label: "259.8 east", off: 14 }, { from: [2.598, 0], to: [2.598, -1.5], color: "red", label: "150 south", off: -12 }, { from: [0, 0], to: brg(3, 120), vl: "v", label: "300", off: 16 }], arcs: [{ at: [0, 0], r: 0.6, a: -30, b: 90, label: "120°", lr: 0.35 }] })],
    ["On a ramp", S`A box weighing 80 N rests on a ramp inclined at \(20^\circ\). Resolve the weight along and perpendicular to the ramp.`,
      [S`Along the ramp (down the slope): \(80\sin20^\circ\approx27.36\) N.`, S`Into the ramp: \(80\cos20^\circ\approx75.18\) N.`],
      S`27.36 N down the slope and 75.18 N into the ramp`,
      vfig({ view: { xmin: -0.5, xmax: 8, ymin: -2, ymax: 3.6 }, grid: false, axes: false, polys: [{ pts: [[0, 0], [7.8, 0], [7.8, 7.8 * Math.tan(20 * Math.PI / 180)]], fill: "#f1f5f9", stroke: "gray" }], arrows: [{ from: [4.4, 2.0], to: plus([4.4, 2.0], pol(1.094, 200)), color: "red", label: "27.4 N", off: 14 }, { from: plus([4.4, 2.0], pol(1.094, 200)), to: [4.4, -1.2], color: "blue", label: "75.2 N", off: 30 }, { from: [4.4, 2.0], to: [4.4, -1.2], vl: "W", label: "80 N", off: -18 }], arcs: [{ at: [0, 0], r: 1.4, a: 0, b: 20, label: "20°" }] })],
    ["Adding by components", S`Add a 40 N force at \(0^\circ\) and a 30 N force at \(60^\circ\) using components.`,
      [S`x: \(40+30\cos60^\circ=55\). y: \(0+30\sin60^\circ\approx25.98\).`, S`\(|\vec R|=\sqrt{55^2+25.98^2}\approx60.83\) N at \(\tan^{-1}\frac{25.98}{55}\approx25.28^\circ\).`],
      S`about 60.83 N at \(25.28^\circ\)`,
      vfig({ view: { xmin: -0.6, xmax: 6.4, ymin: -0.8, ymax: 3.4 }, grid: false, axes: false, arrows: [{ from: [0, 0], to: [4, 0], vl: "F₁", label: "40 N", off: -18 }, { from: [4, 0], to: [5.5, 2.598], vl: "F₂", label: "30 N", color: "blue", off: -18 }, { from: [0, 0], to: [5.5, 2.598], color: "red", vl: "R" }], segs: [{ pts: [[5.5, 0], [5.5, 2.598]], dash: true }], texts: [{ x: 5.9, y: 1.2, t: "25.98", color: "gray" }] })],
    ["Working backward", S`A rope must pull a sled forward with a horizontal force of 90 N. If the rope makes \(30^\circ\) with the ground, what tension is needed?`,
      [S`The horizontal component is \(T\cos30^\circ=90\).`, S`\(T=\frac{90}{\cos30^\circ}\approx103.92\) N.`],
      S`about 103.92 N`,
      vfig({ view: { xmin: -0.6, xmax: 6, ymin: -0.8, ymax: 3.4 }, grid: false, axes: false, polys: [{ pts: [[-0.4, -0.5], [1, -0.5], [1, 0.2], [-0.4, 0.2]], fill: "#e0e7ff", stroke: "violet" }], arrows: [{ from: [1, 0], to: plus([1, 0], pol(5, 30)), vl: "T" }, { from: [1, 0], to: [5.33, 0], color: "blue", label: "90 N", off: -14 }], arcs: [{ at: [1, 0], r: 1.2, a: 0, b: 30, label: "30°" }] })],
  ]),

  practice([
    q("horizontal", S`Find the horizontal component of 50 N at \(30^\circ\) above the horizontal (N, 2 decimals).`, num(43.3, 0.01),
      "50 cos 30°.", [S`\(50\times0.8660\).`], S`\(43.30\)`),
    q("vertical", S`Find the vertical component of 50 N at \(30^\circ\) above the horizontal (N).`, num(25),
      "50 sin 30°.", [S`\(50\times\frac12\).`], S`\(25\)`),
    q("magnitude", S`A vector has components 9 and 12. Find its magnitude.`, num(15),
      "Pythagoras.", [S`\(\sqrt{81+144}\).`], S`\(15\)`),
    q("angle", S`A vector has components \(6\) and \(6\). Find its angle above the horizontal (degrees).`, num(45),
      "tan θ = 1.", [S`\(\tan^{-1}1\).`], S`\(45^\circ\)`),
    q("ramp", S`A 100 N crate sits on a \(30^\circ\) ramp. Which is its weight's component down the slope?`, choice(["50 N", "86.6 N", "100 N", "57.7 N"], 0),
      "W sin α.", [S`\(100\sin30^\circ\).`], "50 N"),
  ]),

  ...hard([
    ["Three forces by components", S`Find the resultant of 20 N at \(0^\circ\), 30 N at \(90^\circ\) and 25 N at \(225^\circ\).`,
      [S`x: \(20+0+25\cos225^\circ=20-17.68=2.32\).`, S`y: \(0+30+25\sin225^\circ=30-17.68=12.32\).`, S`\(|\vec R|=\sqrt{2.32^2+12.32^2}\approx12.54\) N at \(\tan^{-1}\frac{12.32}{2.32}\approx79.33^\circ\).`],
      S`about 12.54 N at \(79.33^\circ\)`,
      vfig({ view: { xmin: -2.4, xmax: 2.6, ymin: -2.2, ymax: 3.4 }, grid: false, arrows: [{ from: [0, 0], to: [2, 0], vl: "a", label: "20 N", off: -18 }, { from: [0, 0], to: [0, 3], vl: "b", label: "30 N", color: "blue", off: 22 }, { from: [0, 0], to: pol(2.5, 225), vl: "c", label: "25 N", color: "green", off: -18 }, { from: [0, 0], to: [0.232, 1.232], color: "red", vl: "R", off: -16 }] })],
    ["Component along a direction", S`A force has a component of 40 N along a line that makes \(20^\circ\) with the force. Find the force and its component perpendicular to that line.`,
      [S`The component along the line is \(|\vec F|\cos20^\circ=40\), so \(|\vec F|=\frac{40}{\cos20^\circ}\approx42.57\) N.`, S`Perpendicular: \(|\vec F|\sin20^\circ\approx14.56\) N.`],
      S`about 42.57 N, with 14.56 N perpendicular to the line`,
      vfig({ view: { xmin: -0.6, xmax: 5.4, ymin: -0.8, ymax: 2.6 }, grid: false, axes: false, segs: [{ pts: [[-0.4, 0], [5.2, 0]], color: "gray", dash: true }], arrows: [{ from: [0, 0], to: pol(4.257, 20), vl: "F" }, { from: [0, 0], to: [4, 0], color: "blue", label: "40 N", off: 14 }, { from: [4, 0], to: pol(4.257, 20), color: "red", label: "14.56 N", off: -12 }], arcs: [{ at: [0, 0], r: 1.3, a: 0, b: 20, label: "20°" }] })],
  ], [
    q("hard", S`Find the magnitude of the resultant of 10 N at \(30^\circ\) and 10 N at \(150^\circ\).`, num(10),
      "The x components cancel.", [S`y: \(5+5\).`], S`\(10\)`),
    q("hard", S`At what ramp angle are the components of the weight along and into the ramp equal (degrees)?`, num(45),
      "sin α = cos α.", [S`\(\tan\alpha=1\).`], S`\(45^\circ\)`),
    q("hard", S`A velocity of 250 km/h has a north component of 200 km/h. Find its east component (km/h, east positive).`, num(150),
      "Pythagoras on the components.", [S`\(\sqrt{250^2-200^2}\).`], S`\(150\)`),
  ]),

  wrapUp({
    qas: [
      ["What does resolving a vector mean?", "Writing it as the sum of two perpendicular vectors, its rectangular components."],
      ["Which component uses cos?", "The one next to the given angle: with θ from the horizontal, the horizontal part is |v| cos θ."],
      ["Why resolve along a ramp?", "Motion happens along the ramp, so splitting the weight along and across it shows what pulls the object down the slope and what presses it into the surface."],
      ["How do components help add vectors?", "Add all the x parts and all the y parts; then rebuild the magnitude and direction."],
      ["How do I get a vector back from components?", "Magnitude √(x² + y²); direction tan⁻¹(y/x), adjusted for the quadrant."],
    ],
    summary: [
      "Components: |v| cos θ and |v| sin θ.",
      "Bearing β: east |v| sin β, north |v| cos β.",
      "Ramp: W sin α along, W cos α into.",
      "Add vectors by adding components.",
    ],
    next: "6.6 reviews the chapter.",
  }),
];
