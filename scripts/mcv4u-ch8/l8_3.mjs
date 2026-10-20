// MCV4U 8.3 — Properties of Planes (NEW lesson): the normal vector, the scalar equation Ax + By + Cz + D = 0,
// converting from vector form, parallel and perpendicular planes, the angle between planes, intercepts, and the
// distance from a point to a plane
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard } from "./lib.mjs";
import { vfig, p3, axes3, merge, line3, patch3, tri3 } from "./vecfig.mjs";

export const TITLE = "8.3 Properties of Planes";
export const ID = "6d4fc008-0001-4001-8001-000000000803";

const S = String.raw;
const V3 = { view: { xmin: -3.8, xmax: 6, ymin: -2.8, ymax: 5.8 }, grid: false, axes: false };
const pt = (x, y, z, label, dx = 8, dy = -6, color = "black") => { const [a, b] = p3(x, y, z); return { x: a, y: b, label, dx, dy, color }; };
export const blocks = () => [
  intro({
    icon: "⬆️",
    title: "Properties of Planes",
    overview: S`A plane can also be pinned down by a single vector that sticks straight out of it — a <strong>normal</strong> \(\vec n\). A point \(P(x,y,z)\) lies on the plane through \(P_0\) exactly when \(\overrightarrow{P_0P}\) is perpendicular to \(\vec n\), that is, \(\vec n\cdot\overrightarrow{P_0P}=0\). Expanding gives the <strong>scalar equation</strong> \(Ax+By+Cz+D=0\), whose first three coefficients are the normal \([A,B,C]\). Normals make it easy to compare planes: parallel planes have parallel normals, perpendicular planes have perpendicular normals, and the angle between planes is the angle between their normals.`,
    goals: [
      "write the scalar equation of a plane from a point and a normal;",
      "convert a vector equation of a plane to a scalar equation;",
      "decide whether planes are parallel, coincident or perpendicular;",
      "find the angle between two planes and the intercepts of a plane;",
      "find the distance from a point to a plane.",
    ],
    curriculum: "C4.3 (recognize a normal to a plane and investigate properties of planes); C4.4, C4.6 (scalar equation of a plane; converting between forms); C4.7 (distance from a point to a plane)",
    prior: [
      [S`\([1,2,0]\times[0,1,3]\)?`, S`\([6,-3,1]\).`],
      [S`Is \([2,-1,3]\) perpendicular to \([1,5,1]\)?`, S`Yes: \(2-5+3=0\).`],
      [S`\(\cos^{-1}\frac{1}{\sqrt3}\)?`, S`\(\approx54.74^\circ\).`],
    ],
    words: [
      ["Normal vector", "perpendicular to the plane", "\\(\\vec n=[A,B,C]\\)"],
      ["Scalar equation", "\\(Ax+By+Cz+D=0\\)", ""],
      ["Parallel planes", "parallel normals", "\\(\\vec n_2=k\\vec n_1\\)"],
      ["Distance to a plane", "\\(\\frac{|Ax_0+By_0+Cz_0+D|}{\\sqrt{A^2+B^2+C^2}}\\)", ""],
    ],
  }),

  section("📌 The normal does the work", S`
  ${vfig(merge(V3, axes3(4.8), { polys: [tri3(4, 3, 2)] }, { arrows: [{ from: p3(4 / 3, 1, 2 / 3), to: p3(4 / 3 + 0.9, 1 + 1.2, 2 / 3 + 1.8), vl: "n", color: "green", off: -16, w: 3.2 }] }, { points: [pt(4, 0, 0, "4", -16, 6, "red"), pt(0, 3, 0, "3", 4, 18, "red"), pt(0, 0, 2, "2", 8, 0, "red")] }), "3x + 4y + 6z = 12 has normal [3, 4, 6] and intercepts 4, 3, 2")}
  ${table(["Planes \\(\\pi_1\\), \\(\\pi_2\\) with normals \\(\\vec n_1\\), \\(\\vec n_2\\)", "Test"], [
    ["parallel (distinct)", "\\(\\vec n_2=k\\vec n_1\\), equations not multiples"],
    ["coincident", "the whole equations are multiples"],
    ["perpendicular", "\\(\\vec n_1\\cdot\\vec n_2=0\\)"],
    ["angle between them", "\\(\\cos\\theta=\\frac{|\\vec n_1\\cdot\\vec n_2|}{|\\vec n_1||\\vec n_2|}\\)"],
  ])}
  ${keyIdea(S`From a vector equation \(\vec r=\vec r_0+s\vec a+t\vec b\), a normal is \(\vec n=\vec a\times\vec b\); substitute \(\vec r_0\) to find \(D\). Every multiple of a normal is also a normal, so a plane's normal direction never changes. The distance from \(P_0(x_0,y_0,z_0)\) to \(Ax+By+Cz+D=0\) is \(\frac{|Ax_0+By_0+Cz_0+D|}{\sqrt{A^2+B^2+C^2}}\).`)}`),

  section("📌 Explore", S`<p>Set the normal \([A,B,C]\) and the constant \(D\). The green normal always stands straight out of the blue plane. Change only \(D\) to slide the plane parallel to itself; read the intercepts and the distance from the origin.</p>`),

  widget("planeLab", { init: { a: 3, b: 4, c: 6, d: 12 } }),

  section("📌 Writing and comparing scalar equations", S`
  <p>Write \(A(x-x_0)+B(y-y_0)+C(z-z_0)=0\) and expand. To compare planes, compare normals first. For intercepts, set two variables to 0. For a distance, substitute the point into the left side of \(Ax+By+Cz+D=0\) and divide by the length of the normal.</p>
  ${watchOut([
    "The normal comes from the coefficients of x, y, z — not from D.",
    "A cross product of the two direction vectors gives a normal; check it with dot products.",
    "Parallel normals with non-proportional D give distinct parallel planes.",
    "Use the acute angle between planes (absolute value of the dot product).",
    "In the distance formula, move everything to one side (… + D = 0) before substituting.",
  ])}`),

  examples([
    ["From a point and a normal", S`Find the scalar equation of the plane through \(P(2,-1,3)\) with normal \([4,1,-2]\).`,
      [S`\(4(x-2)+1(y+1)-2(z-3)=0\).`, S`\(4x+y-2z-8+1+6=0\).`],
      S`\(4x+y-2z-1=0\)`],
    ["From vector to scalar", S`Find a scalar equation of the plane \(\vec r=[1,0,2]+s[1,2,0]+t[0,1,3]\).`,
      [S`\(\vec n=[1,2,0]\times[0,1,3]=[6,-3,1]\).`, S`\(6x-3y+z=6(1)-3(0)+2=8\).`],
      S`\(6x-3y+z-8=0\)`],
    ["Parallel or perpendicular?", S`Compare \(2x-y+3z=5\) with \(-4x+2y-6z=1\) and with \(x+5y+z=0\).`,
      [S`\([-4,2,-6]=-2[2,-1,3]\) but \(1\ne-2(5)\): parallel and distinct.`, S`\([2,-1,3]\cdot[1,5,1]=2-5+3=0\): perpendicular.`],
      S`the first pair is parallel; the second pair is perpendicular`,
      vfig(merge(V3, axes3(4.6), { polys: [patch3([1, 1, 2], [1, 2, 0], [0, 3, 1], 0.8, "#dbeafe", "blue", 0.55), patch3([2, 2, 3.3], [1, 2, 0], [0, 3, 1], 0.8, "#dcfce7", "green", 0.55)] }, { texts: [{ x: 4.2, y: 4.6, t: "parallel planes", color: "gray" }] }))],
    ["The angle between planes", S`Find the angle between \(x+y+z=1\) and \(2x-y+2z=7\).`,
      [S`\(\cos\theta=\frac{|2-1+2|}{\sqrt3\times3}=\frac{3}{3\sqrt3}\).`],
      S`about \(54.74^\circ\)`],
    ["Intercepts and a sketch", S`Find the intercepts of \(3x+4y+6z=12\) and sketch the part of the plane in the first octant.`,
      [S`x-intercept: \(\frac{12}3=4\); y: \(\frac{12}4=3\); z: \(\frac{12}6=2\).`, S`Join \((4,0,0)\), \((0,3,0)\), \((0,0,2)\).`],
      S`intercepts 4, 3 and 2: a triangle in the first octant`,
      vfig(merge(V3, axes3(4.8), { polys: [tri3(4, 3, 2)] }, { points: [pt(4, 0, 0, "(4, 0, 0)", -70, 14), pt(0, 3, 0, "(0, 3, 0)", 0, 18), pt(0, 0, 2, "(0, 0, 2)")] }))],
  ]),

  practice([
    q("D", S`The plane with normal \([1,2,3]\) through \((1,1,1)\) is \(x+2y+3z=D\). Find \(D\).`, num(6),
      "Substitute the point.", [S`\(1+2+3\).`], S`\(6\)`),
    q("normal", S`Which is a normal to \(5x-z=2\)?`, choice([S`\([5,0,-1]\)`, S`\([5,-1,0]\)`, S`\([5,-1,2]\)`, S`\([0,5,-1]\)`], 0),
      "Coefficients of x, y, z.", ["There is no y term: its coefficient is 0."], S`\([5,0,-1]\)`),
    q("intercept", S`Find the z-intercept of \(2x+3y+4z=20\).`, num(5),
      "Set x = y = 0.", [S`\(\frac{20}4\).`], S`\(5\)`),
    q("perpendicular", S`Find \(k\) so that \(kx+2y-z=0\) is perpendicular to \(x+y+2z=3\).`, num(0),
      "Normals' dot product is 0.", [S`\(k+2-2=0\).`], S`\(0\)`),
    q("angle", S`Find the angle between the planes \(z=0\) and \(x+z=0\) (degrees).`, num(45),
      "Normals [0, 0, 1] and [1, 0, 1].", [S`\(\cos\theta=\frac1{\sqrt2}\).`], S`\(45^\circ\)`),
  ]),

  ...hard([
    ["A plane perpendicular to a line", S`Find the scalar equation of the plane through \(A(1,2,0)\) that is perpendicular to the line \(\vec r=[0,0,1]+t[2,-1,3]\).`,
      [S`The line's direction is a normal to the plane: \(\vec n=[2,-1,3]\).`, S`\(2x-y+3z=2(1)-2+0=0\).`],
      S`\(2x-y+3z=0\)`,
      vfig(merge(V3, axes3(4.6), { polys: [patch3([1, 2, 0], [1, 2, 0], [0, 3, 1], 0.9)] }, { segs: [line3([0, 0, 1], [2, -1, 3], -0.7, 1.2, "red", 2.8)] }, { points: [pt(1, 2, 0, "A", 8, 14)] }, { view: { xmin: -4, xmax: 6, ymin: -2.8, ymax: 6 } }))],
    ["Distance from a point to a plane", S`Find the distance from \(P(3,1,-2)\) to the plane \(2x-2y+z=9\).`,
      [S`Write it as \(2x-2y+z-9=0\); \(|\vec n|=\sqrt{4+4+1}=3\).`, S`\(\frac{|2(3)-2(1)+(-2)-9|}{3}=\frac{7}{3}\).`],
      S`\(\frac73\approx2.33\)`,
      vfig(merge(V3, axes3(4.6), { polys: [patch3([3 + 14 / 9, 1 - 14 / 9, -2 + 7 / 9], [1, 1, 0], [0, 1, 2], 1.3)] }, { segs: [{ pts: [p3(3, 1, -2), p3(3 + 14 / 9, 1 - 14 / 9, -2 + 7 / 9)], color: "red", dash: true, w: 2.4 }] }, { points: [pt(3, 1, -2, "P(3, 1, −2)", 8, 12), pt(3 + 14 / 9, 1 - 14 / 9, -2 + 7 / 9, "foot", -36, 16, "red")] }, { view: { xmin: -6.4, xmax: 5, ymin: -6, ymax: 5.4 } }))],
  ], [
    q("hard", S`Find the distance from the origin to \(2x+3y+6z=14\).`, num(2),
      "|−14| / √49.", [S`\(\frac{14}{7}\).`], S`\(2\)`),
    q("hard", S`Find the angle between \(x+2y+2z=1\) and \(2x+2y+z=0\) (degrees, 2 decimals).`, num(27.27, 0.01),
      "cos θ = 8/9.", [S`\(\frac{2+4+2}{3\times3}\).`], S`\(27.27^\circ\)`),
    q("hard", S`Find \(D\gt0\) so that the plane \(x-2y+2z=D\) is 3 units from the origin.`, num(9),
      "D / 3 = 3.", [S`\(|\vec n|=3\).`], S`\(9\)`),
  ]),

  wrapUp({
    qas: [
      ["What is a normal to a plane?", "A nonzero vector perpendicular to every vector lying in the plane."],
      ["How do I read the normal from a scalar equation?", "Take the coefficients of x, y and z: Ax + By + Cz + D = 0 has normal [A, B, C]."],
      ["How do I get a scalar equation from a vector equation?", "Cross the two direction vectors to get a normal, then substitute the known point to find D."],
      ["How can I tell if two planes are parallel or perpendicular?", "Parallel: normals are multiples. Perpendicular: normals have dot product 0."],
      ["How do I find the distance from a point to a plane?", "|Ax₀ + By₀ + Cz₀ + D| / √(A² + B² + C²)."],
    ],
    summary: [
      "n · (r − r₀) = 0 ⇒ Ax + By + Cz + D = 0.",
      "Normal from a vector equation: a × b.",
      "Compare planes by their normals.",
      "Distance = |Ax₀ + By₀ + Cz₀ + D| / |n|.",
    ],
    next: "8.4 finds where lines intersect.",
  }),
];
