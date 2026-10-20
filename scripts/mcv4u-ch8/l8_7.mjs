// MCV4U 8.7 — Chapter 8 Review (NEW lesson): equations of lines and planes, normals, intersections of lines,
// lines with planes and planes with planes, and distances, with mixed practice and a hard level
import { intro, section, keyIdea, widget, examples, practice, wrapUp, table, q, num, choice, hard } from "./lib.mjs";
import { vfig, p3, axes3, merge, line3, patch3 } from "./vecfig.mjs";

export const TITLE = "8.7 Chapter 8 Review";
export const ID = "6d4fc008-0001-4001-8001-000000000807";

const S = String.raw;
const V3 = { view: { xmin: -3.8, xmax: 6, ymin: -2.8, ymax: 5.8 }, grid: false, axes: false };
const pt = (x, y, z, label, dx = 8, dy = -6, color = "black") => { const [a, b] = p3(x, y, z); return { x: a, y: b, label, dx, dy, color }; };
export const blocks = () => [
  intro({
    icon: "🧩",
    title: "Chapter 8 Review — Lines and Planes",
    overview: S`This page pulls the chapter together before the test. Lines are described by a point and a direction, planes by a point and either two directions or a normal. Intersections come from solving equations: substitute a line into a plane, set two lines' parametric equations equal, or eliminate across the equations of planes. Distances use projections onto a normal or onto a cross product.`,
    goals: [
      "recall the key idea and common mistake of each lesson;",
      "write equations of lines and planes in every form;",
      "find intersections of lines, lines and planes, and planes;",
      "find angles between lines and planes;",
      "find distances from points to planes and between skew lines.",
    ],
    curriculum: "C3.1–C3.3, C4.1–C4.7 (whole chapter)",
    prior: [
      [S`Normal of \(2x-y+4z=7\)?`, S`\([2,-1,4]\).`],
      [S`Direction of the line where two planes meet?`, S`\(\vec n_1\times\vec n_2\).`],
      [S`Distance from \((x_0,y_0,z_0)\) to \(Ax+By+Cz+D=0\)?`, S`\(\frac{|Ax_0+By_0+Cz_0+D|}{\sqrt{A^2+B^2+C^2}}\).`],
    ],
    words: [
      ["Line", "\\(\\vec r=\\vec r_0+t\\vec m\\)", ""],
      ["Plane", "\\(\\vec r=\\vec r_0+s\\vec a+t\\vec b\\) or \\(Ax+By+Cz+D=0\\)", ""],
      ["Skew lines", "not parallel, never meet", ""],
      ["Triple product test", "\\(\\vec n_1\\cdot(\\vec n_2\\times\\vec n_3)\\ne0\\)", "one point"],
    ],
  }),

  section("📌 The chapter on one page", table(["Lesson", "Key idea", "Example", "Watch out"], [
    ["8.1 Lines", "r = r₀ + t m; 2-D scalar Ax + By + C = 0", "normal [A, B] ⟂ m", "no scalar line in 3-D"],
    ["8.2 Planes (vector)", "r = r₀ + s a + t b", "three points: AB, AC", "directions not parallel"],
    ["8.3 Planes (normal)", "Ax + By + Cz + D = 0", "n = a × b", "angle via normals"],
    ["8.4 Two lines", "solve for s, t", "skew lines in 3-D", "check every coordinate"],
    ["8.5 Line and plane", "substitute the line", "foot of perpendicular", "0t = c vs 0t = 0"],
    ["8.6 Planes", "elimination; n₁ × n₂", "prism, sheaf, point", "triple product test"],
  ])),

  section("📌 Explore", S`<p>Use the line-and-plane explorer to check the review examples: set a direction, read the equation in \(t\), and see when the line crosses, misses, or lies in the plane.</p>`),

  widget("linePlaneLab", { init: { m: [1, 2, 1] } }),

  section("📌 The big picture", S`${keyIdea(S`Every question reduces to vectors you already know: directions and normals, dot products for perpendicularity and angles, cross products for normals and distances, and substitution or elimination for intersections.`)}
  ${vfig(merge(V3, axes3(4.6), { polys: [patch3([2, 2, 1.5], [1, -1, 0], [1, 0, -1], 1.6)] }, { segs: [line3([0, 0, 1], [1, 2, 1], -0.5, 2.4, "red", 2.8)] }, { points: [pt(2, 4, 3, "(2, 4, 3)", 8, -4, "red")] }, { view: { xmin: -3.8, xmax: 6, ymin: -2.8, ymax: 6.4 } }), "A line meeting a plane at one point")}`),

  examples([
    ["A line through two points", S`Write a vector equation of the line through \(A(2,0,-1)\) and \(B(5,4,-1)\), and find \(|AB|\).`,
      [S`\(\overrightarrow{AB}=[3,4,0]\): \(\vec r=[2,0,-1]+t[3,4,0]\).`, S`\(|AB|=5\).`],
      S`\(\vec r=[2,0,-1]+t[3,4,0]\); length 5`],
    ["A plane through three points", S`Find a scalar equation of the plane through \(A(1,0,0)\), \(B(0,1,0)\), \(C(1,1,1)\).`,
      [S`\(\overrightarrow{AB}=[-1,1,0]\), \(\overrightarrow{AC}=[0,1,1]\); \(\vec n=[1,1,-1]\).`, S`\(x+y-z=1+0-0=1\).`],
      S`\(x+y-z=1\)`,
      vfig(merge(V3, axes3(4.6), { polys: [{ pts: [p3(1, 0, 0), p3(0, 1, 0), p3(1, 1, 1)], fill: "#dbeafe", stroke: "blue" }], points: [pt(1, 0, 0, "A", -14, 16), pt(0, 1, 0, "B", 2, 18), pt(1, 1, 1, "C")] }))],
    ["A line meeting a plane", S`Find where \(\vec r=[0,0,1]+t[1,2,1]\) meets \(x+y+z=9\).`,
      [S`\(t+2t+1+t=9\Rightarrow t=2\).`],
      S`\((2,4,3)\)`],
    ["Distance from a point to a plane", S`Find the distance from \((1,-2,3)\) to \(2x+y+2z=1\).`,
      [S`\(\frac{|2-2+6-1|}{3}\).`],
      S`\(\frac53\approx1.67\)`],
    ["Two planes", S`Find the line of intersection of \(x+z=2\) and \(y-z=1\).`,
      [S`Direction \([1,0,1]\times[0,1,-1]=[-1,1,1]\).`, S`Point with \(z=0\): \((2,1,0)\).`],
      S`\(\vec r=[2,1,0]+t[-1,1,1]\)`,
      vfig(merge(V3, axes3(4.6), { polys: [patch3([1, 1, 1], [0, 1, 0], [1, 0, -1], 1.4, "#dbeafe", "blue", 0.5), patch3([1, 1.5, 0.5], [1, 0, 0], [0, 1, 1], 1.4, "#dcfce7", "green", 0.5)] }, { segs: [line3([2, 1, 0], [-1, 1, 1], -1, 2.4, "red", 3)] }))],
  ]),

  practice([
    q("intercept", S`Find the z-intercept of \(x+2y+4z=8\).`, num(2),
      "x = y = 0.", [S`\(4z=8\).`], S`\(2\)`),
    q("t", S`Where does \(\vec r=[1,2,3]+t[1,1,1]\) meet the plane \(z=6\)? Give \(t\).`, num(3),
      "3 + t = 6.", [S`\(t=3\).`], S`\(3\)`),
    q("skew", S`Two lines in three-space that neither meet nor are parallel are:`, choice(["skew", "coincident", "perpendicular", "coplanar"], 0),
      "Only possible in three-space.", ["They never meet."], "skew"),
    q("distance", S`Find the distance from the origin to \(3x+4z=20\).`, num(4),
      "20 / 5.", [S`\(\frac{20}{\sqrt{9+16}}\).`], S`\(4\)`),
    q("angle", S`Find the angle between the planes \(x=0\) and \(y=0\) (degrees).`, num(90),
      "Normals i and j.", [S`\(\vec i\cdot\vec j=0\).`], S`\(90^\circ\)`),
  ]),

  ...hard([
    ["Distance from a point to a line", S`Find the point of the line \(\vec r=t[1,1,1]\) closest to \(P(5,1,0)\), and the distance.`,
      [S`The closest point makes \(\overrightarrow{XP}\perp[1,1,1]\): \(([5,1,0]-t[1,1,1])\cdot[1,1,1]=0\Rightarrow6-3t=0\), \(t=2\).`, S`Closest point \((2,2,2)\); distance \(|[3,-1,-2]|=\sqrt{14}\).`],
      S`\((2,2,2)\); \(\sqrt{14}\approx3.74\)`,
      vfig(merge(V3, axes3(4.6), { segs: [line3([0, 0, 0], [1, 1, 1], -0.4, 3.2, "violet", 2.8), { pts: [p3(5, 1, 0), p3(2, 2, 2)], color: "red", dash: true, w: 2 }] }, { points: [pt(5, 1, 0, "P(5, 1, 0)", -40, 16), pt(2, 2, 2, "(2, 2, 2)")] }, { view: { xmin: -3.8, xmax: 6, ymin: -2.8, ymax: 5.8 } }))],
    ["Classifying three planes", S`Describe the intersection of \(x+y+z=4\), \(2x+2y+2z=8\) and \(x-y=0\).`,
      [S`The second equation is twice the first: those two planes coincide.`, S`The third crosses them along a line: \(x=y\), \(2x+z=4\); with \(x=t\): \(\vec r=[0,0,4]+t[1,1,-2]\).`],
      S`the line \(\vec r=[0,0,4]+t[1,1,-2]\)`,
      vfig(merge(V3, axes3(4.6), { polys: [patch3([1.3, 1.3, 1.4], [1, -1, 0], [1, 0, -1], 1.6, "#dbeafe", "blue", 0.5), patch3([1, 1, 2], [1, 1, 0], [0, 0, 1], 1.6, "#dcfce7", "green", 0.5)] }, { segs: [line3([0, 0, 4], [1, 1, -2], -0.2, 2.2, "red", 3)] }))],
  ], [
    q("hard", S`Find the distance between the skew lines \(\vec r=s[1,1,0]\) and \(\vec r=[0,0,2]+t[1,-1,0]\).`, num(2),
      "m₁ × m₂ = [0, 0, −2].", [S`\(\frac{|[0,0,2]\cdot[0,0,-2]|}{2}\).`], S`\(2\)`),
    q("hard", S`Find \(k\) so that the plane \(kx+y+z=0\) is perpendicular to the line with direction \([2,1,1]\).`, num(2),
      "The normal must be parallel to the direction.", [S`\([k,1,1]\parallel[2,1,1]\).`], S`\(2\)`),
    q("hard", S`Find the y-coordinate where the line \(x=t,\ y=2t,\ z=3t\) meets \(x+y+z=12\).`, num(4),
      "6t = 12.", [S`\(t=2\).`], S`\(4\)`),
  ]),

  wrapUp({
    qas: [
      ["How do I write a plane through three points?", "Use AB and AC as directions; their cross product gives a normal for the scalar equation."],
      ["How do I find where a line meets a plane?", "Substitute the line's parametric equations into the plane and solve for t."],
      ["How do I decide if two lines in space meet?", "Solve two coordinate equations for the parameters and check the third; failure with non-parallel directions means skew."],
      ["How do three planes meet?", "Solve by elimination; the triple product of the normals tells you whether there is exactly one point."],
      ["Which distance formulas do I need?", "Point to plane: |Ax₀ + By₀ + Cz₀ + D| / |n|. Skew lines: |P₁P₂ · (m₁ × m₂)| / |m₁ × m₂|."],
    ],
    summary: [
      "Lines: point + direction.",
      "Planes: point + two directions, or normal.",
      "Intersections: substitute or eliminate.",
      "Distances: project onto n or m₁ × m₂.",
    ],
    next: "This completes the MCV4U course: review calculus and vectors together for the final exam.",
  }),
];
