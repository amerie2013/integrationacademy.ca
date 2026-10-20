// MCV4U 8.1 — Equations of Lines in Two-Space and Three-Space (rebuild of "Equations of Lines"): vector, parametric
// and scalar equations in two-space and the links between them; vector and parametric equations in three-space,
// lines through two points, testing points, and why a three-space line has no single scalar equation
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard } from "./lib.mjs";
import { vfig, p3, axes3, merge, line3 } from "./vecfig.mjs";

export const TITLE = "8.1 Equations of Lines in Two-Space and Three-Space";
export const ID = "050909a2-11a9-4c71-8d85-1e472b63de6b";

const S = String.raw;
const V3 = { view: { xmin: -3.8, xmax: 6, ymin: -2.8, ymax: 5.8 }, grid: false, axes: false };
const L2 = (p, m, t0 = -4, t1 = 4, color = "violet") => ({ pts: [[p[0] + t0 * m[0], p[1] + t0 * m[1]], [p[0] + t1 * m[0], p[1] + t1 * m[1]]], color, w: 2.4 });
export const blocks = () => [
  intro({
    icon: "📏",
    title: "Equations of Lines in Two-Space and Three-Space",
    overview: S`A line is fixed by one point on it and one direction. In vector form that reads \(\vec r=\vec r_0+t\vec m\): start at the position vector \(\vec r_0\) and move any multiple \(t\) of the direction vector \(\vec m\). Writing out the components gives <strong>parametric equations</strong>. In two-space a line also has a <strong>scalar equation</strong> \(Ax+By+C=0\), whose coefficients form a <em>normal</em> (perpendicular) vector \([A,B]\). In three-space there is no single scalar equation for a line — but the vector and parametric forms work just the same.`,
    goals: [
      "write vector and parametric equations of a line from a point and a direction, or from two points;",
      "convert between vector, parametric and scalar equations in two-space;",
      "decide whether a point lies on a line;",
      "write equations of lines in three-space;",
      "find the angle between two lines.",
    ],
    curriculum: "C4.1 (scalar, vector and parametric equations of a line in two-space); C4.2 (vector and parametric equations of a line in three-space)",
    prior: [
      [S`Vector from \(A(1,2)\) to \(B(4,6)\)?`, S`\([3,4]\).`],
      [S`A vector perpendicular to \([3,4]\)?`, S`\([4,-3]\).`],
      [S`Slope of the line through \((0,1)\) with direction \([2,6]\)?`, S`\(3\).`],
    ],
    words: [
      ["Direction vector", "parallel to the line", "\\(\\vec m\\)"],
      ["Vector equation", "\\(\\vec r=\\vec r_0+t\\vec m\\)", "t is the parameter"],
      ["Parametric equations", "one equation per coordinate", "\\(x=x_0+tm_1,\\ \\dots\\)"],
      ["Normal (two-space)", "perpendicular to the line", "\\([A,B]\\) in \\(Ax+By+C=0\\)"],
    ],
  }),

  section("📌 A point and a direction", S`
  ${vfig({ view: { xmin: -3, xmax: 8, ymin: -3, ymax: 5 }, segs: [L2([2, -1], [3, 4], -1.2, 1.4)], arrows: [{ from: [0, 0], to: [2, -1], vl: "r₀", color: "blue", off: 16 }, { from: [2, -1], to: [5, 3], vl: "m", color: "green", off: 16, w: 3.4 }, { from: [0, 0], to: [6.5, 5], color: "red", w: 1.8, dash: true, label: "r at t = 1.5", off: -14 }], points: [{ x: 2, y: -1, label: "(2, −1)", dx: 8, dy: 14 }] }, "r = [2, −1] + t[3, 4]: every point of the line is r₀ plus a multiple of m")}
  ${table(["Form", "Two-space", "Three-space"], [
    ["vector", "\\(\\vec r=[x_0,y_0]+t[m_1,m_2]\\)", "\\(\\vec r=[x_0,y_0,z_0]+t[m_1,m_2,m_3]\\)"],
    ["parametric", "\\(x=x_0+tm_1,\\ y=y_0+tm_2\\)", "\\(x=x_0+tm_1,\\ y=y_0+tm_2,\\ z=z_0+tm_3\\)"],
    ["scalar", "\\(Ax+By+C=0\\), normal \\([A,B]\\)", "none — a line needs two scalar equations (two planes)"],
  ])}
  ${keyIdea(S`Any point on the line and any nonzero multiple of the direction give an equally good equation, so a line has many vector equations. In two-space, the normal \([A,B]\) is perpendicular to the direction: from \(\vec m=[m_1,m_2]\) take \([A,B]=[m_2,-m_1]\).`)}`),

  section("📌 Explore", S`<p>Move the point \(\vec r_0\) and change the direction \(\vec m\); slide \(t\) to watch the red point travel along the line. The readout shows the vector, parametric and scalar equations together. Switch to three-space and turn the view to see a line in space.</p>`),

  widget("lineLab", { init: { mode: "2d" } }),

  section("📌 Working with line equations", S`
  <p>For a line through two points, use one point as \(\vec r_0\) and the vector between them as \(\vec m\). To test a point, solve one parametric equation for \(t\) and check that the same \(t\) satisfies the others. To go from a scalar equation to a vector equation, read off the normal, turn it into a direction, and find any point that satisfies the equation.</p>
  ${watchOut([
    "The direction vector is parallel to the line; the normal [A, B] is perpendicular to it.",
    "A point lies on a line only if one value of t works in every coordinate.",
    "Many different vector equations describe the same line.",
    "A line in three-space has no single scalar equation like Ax + By + Cz + D = 0 — that is a plane.",
    "The angle between lines is found from their direction (or normal) vectors; report the acute angle.",
  ])}`),

  examples([
    ["All three forms in two-space", S`Write vector, parametric and scalar equations of the line through \(A(2,-1)\) with direction \([3,4]\).`,
      [S`Vector: \(\vec r=[2,-1]+t[3,4]\). Parametric: \(x=2+3t,\ y=-1+4t\).`, S`A normal is \([4,-3]\): \(4x-3y+C=0\); substituting \((2,-1)\): \(8+3+C=0\Rightarrow C=-11\).`],
      S`\(\vec r=[2,-1]+t[3,4]\); \(x=2+3t,\ y=-1+4t\); \(4x-3y-11=0\)`],
    ["Through two points", S`Find a vector equation of the line through \(P(-3,5)\) and \(Q(1,-1)\), and decide whether \((5,-7)\) is on it.`,
      [S`\(\overrightarrow{PQ}=[4,-6]\), or the simpler direction \([2,-3]\): \(\vec r=[-3,5]+t[2,-3]\).`, S`\(x\): \(-3+2t=5\Rightarrow t=4\); \(y\): \(5-3(4)=-7\). ✓`],
      S`\(\vec r=[-3,5]+t[2,-3]\); yes, \((5,-7)\) is the point with \(t=4\)`,
      vfig({ view: { xmin: -4, xmax: 6, ymin: -8, ymax: 6 }, segs: [L2([-3, 5], [2, -3], -0.6, 4.6)], points: [{ x: -3, y: 5, label: "P", dx: 8, dy: -4 }, { x: 1, y: -1, label: "Q", dx: 8, dy: 4 }, { x: 5, y: -7, label: "(5, −7)", dx: -60, dy: 4, color: "red" }] })],
    ["From scalar to vector", S`Write a vector equation of the line \(2x+5y-10=0\).`,
      [S`The normal is \([2,5]\), so a direction is \([5,-2]\).`, S`A point: \(y=0\Rightarrow x=5\).`],
      S`\(\vec r=[5,0]+t[5,-2]\)`,
      vfig({ view: { xmin: -2, xmax: 9, ymin: -2, ymax: 4 }, segs: [L2([5, 0], [5, -2], -1, 0.7)], arrows: [{ from: [5, 0], to: [6, 2.5], color: "green", vl: "n", off: -16 }, { from: [5, 0], to: [7.5, -1], color: "red", vl: "m", off: 16 }], points: [{ x: 5, y: 0, label: "(5, 0)", dx: 6, dy: 18 }] })],
    ["A line in three-space", S`Write vector and parametric equations of the line through \(A(1,-2,4)\) and \(B(3,1,0)\), and find the point with \(t=-1\).`,
      [S`\(\vec m=\overrightarrow{AB}=[2,3,-4]\): \(\vec r=[1,-2,4]+t[2,3,-4]\).`, S`\(x=1+2t,\ y=-2+3t,\ z=4-4t\); at \(t=-1\): \((-1,-5,8)\).`],
      S`\(\vec r=[1,-2,4]+t[2,3,-4]\); the point \((-1,-5,8)\)`],
    ["On the line? Through a plane?", S`For \(x=2+t,\ y=-1+3t,\ z=4-2t\): is \((5,8,-2)\) on the line, and where does the line cross the xy-plane?`,
      [S`\(x\): \(t=3\); then \(y=8\) ✓ and \(z=-2\) ✓.`, S`The xy-plane is \(z=0\): \(4-2t=0\Rightarrow t=2\), giving \((4,5,0)\).`],
      S`yes (\(t=3\)); it crosses at \((4,5,0)\)`,
      vfig(merge(V3, axes3(4.8), { segs: [line3([2, -1, 4], [1, 3, -2], -0.6, 2.4, "violet")] }, { points: [{ x: p3(4, 5, 0)[0], y: p3(4, 5, 0)[1], label: "(4, 5, 0)", dx: 8, dy: 4 }, { x: p3(2, -1, 4)[0], y: p3(2, -1, 4)[1], label: "(2, −1, 4)", dx: 8, dy: -4 }] }, { view: { xmin: -3.8, xmax: 6.4, ymin: -2.8, ymax: 6 } }))],
  ]),

  practice([
    q("parametric", S`For \(\vec r=[1,4]+t[2,-1]\), find the y-coordinate of the point with \(t=3\).`, num(1),
      "4 + 3(−1).", [S`\(y=4-3\).`], S`\(1\)`),
    q("slope", S`A line has direction \([3,6]\). What is its slope?`, num(2),
      "Rise over run.", [S`\(\frac63\).`], S`\(2\)`),
    q("direction", S`Which is a direction vector of \(3x-y+7=0\)?`, choice([S`\([1,3]\)`, S`\([3,-1]\)`, S`\([3,1]\)`, S`\([-3,1]\)`], 0),
      "Perpendicular to the normal [3, −1].", ["Swap the normal's components and change one sign."], S`\([1,3]\)`),
    q("on the line", S`For \(\vec r=[2,0,1]+t[1,2,-1]\), what value of \(t\) gives the point \((5,6,-2)\)?`, num(3),
      "Use any coordinate, check the others.", [S`\(2+t=5\).`], S`\(3\)`),
    q("crossing", S`The line \(x=1+2t,\ y=3-t,\ z=2t\) crosses the xz-plane (\(y=0\)). Find the z-coordinate there.`, num(6),
      "y = 0 gives t = 3.", [S`\(z=2(3)\).`], S`\(6\)`),
  ]),

  ...hard([
    ["The angle between two lines", S`Find the acute angle between the lines \(4x+y=6\) and \(x+2y=2\).`,
      [S`Normals \([4,1]\) and \([1,2]\); the angle between the lines equals the angle between their normals.`, S`\(\cos\theta=\frac{4+2}{\sqrt{17}\sqrt5}\approx0.6508\).`],
      S`about \(49.40^\circ\)`,
      vfig({ view: { xmin: -2, xmax: 5, ymin: -3, ymax: 4 }, segs: [{ pts: [[0.25, 5], [2.25, -3]], color: "violet", w: 2.4 }, { pts: [[-2, 2], [5, -1.5]], color: "blue", w: 2.4 }], points: [{ x: 10 / 7, y: 2 / 7, label: "49.4°", dx: 10, dy: -8, color: "red" }] })],
    ["A three-space line as two planes", S`Find vector equations of the line through \((4,-1,2)\) and \((1,-1,5)\), and describe it as the intersection of two planes.`,
      [S`Direction \([-3,0,3]\), or \([-1,0,1]\): \(\vec r=[4,-1,2]+t[-1,0,1]\).`, S`Parametric: \(x=4-t,\ y=-1,\ z=2+t\). So \(y=-1\) always, and adding \(x+z=6\).`],
      S`\(\vec r=[4,-1,2]+t[-1,0,1]\); the planes \(y=-1\) and \(x+z=6\)`,
      vfig(merge(V3, axes3(4.8, 2.4), { segs: [line3([4, -1, 2], [-1, 0, 1], -0.8, 3.5, "red", 3)] }, { points: [{ x: p3(4, -1, 2)[0], y: p3(4, -1, 2)[1], label: "(4, −1, 2)", dx: -70, dy: 14 }, { x: p3(1, -1, 5)[0], y: p3(1, -1, 5)[1], label: "(1, −1, 5)", dx: 8, dy: -4 }] }, { view: { xmin: -5, xmax: 5, ymin: -2.8, ymax: 7 } }))],
  ], [
    q("hard", S`Find the acute angle between the lines \(x-y=0\) and \(y=0\) (degrees).`, num(45),
      "Directions [1, 1] and [1, 0].", [S`\(\cos\theta=\frac1{\sqrt2}\).`], S`\(45^\circ\)`),
    q("hard", S`Find the distance from \((3,4)\) to the line \(3x+4y-10=0\).`, num(3),
      "|Ax₀ + By₀ + C| / √(A² + B²).", [S`\(\frac{|9+16-10|}{5}\).`], S`\(3\)`),
    q("hard", S`Find \(k\) so that a line with direction \([2,k,1]\) is perpendicular to a line with direction \([1,1,-4]\).`, num(2),
      "Directions' dot product is 0.", [S`\(2+k-4=0\).`], S`\(2\)`),
  ]),

  wrapUp({
    qas: [
      ["What do I need to write a line's equation?", "One point on it and one direction vector (or two points, which give a direction)."],
      ["What is the parameter t?", "A real number that picks out one point of the line: each t gives one point."],
      ["How are the vector and scalar forms linked in two-space?", "The normal [A, B] is perpendicular to the direction: [A, B] = [m₂, −m₁] up to a multiple."],
      ["Why is there no scalar equation of a line in three-space?", "One equation Ax + By + Cz + D = 0 describes a plane; a line needs two such equations."],
      ["How do I test a point?", "Find t from one coordinate and check that it works in all the others."],
    ],
    summary: [
      "r = r₀ + t m.",
      "Parametric: one equation per coordinate.",
      "Two-space scalar Ax + By + C = 0, normal [A, B].",
      "Three-space lines: vector or parametric only.",
    ],
    next: "8.2 writes equations of planes.",
  }),
];
