// MCV4U 8.2 — Equations of Planes (rebuild): vector and parametric equations of a plane from a point and two
// directions, from three points, or from a line and a point; testing points; coordinate planes; coplanar points
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard } from "./lib.mjs";
import { vfig, p3, axes3, merge, line3, patch3, tri3 } from "./vecfig.mjs";

export const TITLE = "8.2 Equations of Planes";
export const ID = "7175f69b-d3d3-4ce7-8125-0303b524f603";

const S = String.raw;
const V3 = { view: { xmin: -3.8, xmax: 6, ymin: -2.8, ymax: 5.8 }, grid: false, axes: false };
const pt = (x, y, z, label, dx = 8, dy = -6, color = "black") => { const [a, b] = p3(x, y, z); return { x: a, y: b, label, dx, dy, color }; };
export const blocks = () => [
  intro({
    icon: "🟦",
    title: "Equations of Planes",
    overview: S`A line needs one point and one direction; a plane needs one point and <strong>two</strong> directions that are not parallel. From the point \(\vec r_0\) you can reach every point of the plane by moving \(s\) times the first direction and \(t\) times the second: \(\vec r=\vec r_0+s\vec a+t\vec b\). That is the vector equation of the plane; its components are the parametric equations. Three points that are not on one line always determine exactly one plane.`,
    goals: [
      "write vector and parametric equations of a plane from a point and two directions;",
      "write equations of the plane through three points, or containing a line and a point;",
      "decide whether a point lies on a plane;",
      "describe coordinate planes and planes parallel to them;",
      "decide whether four points are coplanar.",
    ],
    curriculum: "C4.5 (determine the vector and parametric equations of a plane); C4.3 (three non-collinear points determine a plane)",
    prior: [
      [S`Vector from \(A(1,0,2)\) to \(B(4,1,0)\)?`, S`\([3,1,-2]\).`],
      [S`Are \([1,2,3]\) and \([2,4,6]\) collinear?`, S`Yes.`],
      [S`Solve \(s+t=3,\ s-t=1\).`, S`\(s=2,\ t=1\).`],
    ],
    words: [
      ["Direction vectors", "two non-parallel vectors in the plane", "\\(\\vec a,\\ \\vec b\\)"],
      ["Vector equation", "\\(\\vec r=\\vec r_0+s\\vec a+t\\vec b\\)", "s, t real"],
      ["Parametric equations", "three equations in s and t", ""],
      ["Coplanar", "lying in one plane", ""],
    ],
  }),

  section("📌 A point and two directions", S`
  ${vfig(merge(V3, axes3(4.8), { polys: [patch3([1.5, 1.5, 1.5], [1, 0, 0.6], [0, 1, 0.3], 1.6)] }, { arrows: [{ from: p3(1.5, 1.5, 1.5), to: p3(3.1, 1.5, 2.46), vl: "a", color: "violet", off: 16, w: 3.2 }, { from: p3(1.5, 1.5, 1.5), to: p3(1.5, 3.1, 1.98), vl: "b", color: "green", off: -16, w: 3.2 }, { from: [0, 0], to: p3(1.5, 1.5, 1.5), vl: "r₀", color: "red", off: -16 }] }), "Every point of the plane is r₀ + s a + t b for some numbers s and t")}
  ${table(["Given", "Use"], [
    ["a point and two non-parallel directions", "them directly"],
    ["three non-collinear points \\(A,B,C\\)", "\\(\\vec r_0=\\overrightarrow{OA}\\), \\(\\vec a=\\overrightarrow{AB}\\), \\(\\vec b=\\overrightarrow{AC}\\)"],
    ["a line \\(\\vec r=\\vec p+t\\vec m\\) and a point \\(Q\\) off it", "\\(\\vec r_0=\\vec p\\), \\(\\vec a=\\vec m\\), \\(\\vec b=\\overrightarrow{PQ}\\)"],
    ["two intersecting (or parallel) lines", "a point of one line and both directions (or the vector joining them)"],
  ])}
  ${keyIdea(S`The two direction vectors must not be parallel — otherwise they only describe a line. A point is on the plane exactly when one pair of values \(s,t\) satisfies all three parametric equations: solve two of them, then check the third.`)}`),

  section("📌 Explore", S`<p>The plane explorer shows a plane through its normal, which the next lesson uses. For now, turn the view and notice that a plane is determined once you know its tilt and one point on it — and that two directions lying in it fix the tilt.</p>`),

  widget("planeLab", { init: { a: 2, b: 3, c: 4, d: 12 } }),

  section("📌 Testing points", S`
  <p>To test a point, set the parametric equations equal to its coordinates. Solve any two equations for \(s\) and \(t\), then substitute into the third: if it holds, the point is on the plane. Four points are coplanar when the vector to the fourth can be written using the two directions from the first three.</p>
  ${watchOut([
    "Parallel direction vectors do not determine a plane.",
    "Three collinear points do not determine a unique plane.",
    "A plane has many different vector equations.",
    "Check the third equation — two equations can always be solved.",
    "z = 3 in three-space is a plane, not a line.",
  ])}`),

  examples([
    ["From a point and two directions", S`Write vector and parametric equations of the plane through \(A(1,2,-1)\) with directions \([2,0,1]\) and \([1,-1,3]\), and find the point with \(s=1\), \(t=2\).`,
      [S`<b>Vector form of a plane.</b> \(\vec r=\vec r_0+s\vec a+t\vec b\), where \(\vec a\) and \(\vec b\) are non-parallel directions in the plane. Two parameters, because a plane is two-dimensional.`,
        S`<b>Equation.</b> \(\vec r=[1,2,-1]+s[2,0,1]+t[1,-1,3]\).`,
        S`<b>Parametric.</b> \(x=1+2s+t\), \(y=2-t\), \(z=-1+s+3t\).`,
        S`<b>The point \(s=1,t=2\).</b> \(x=1+2+2=5\), \(y=2-2=0\), \(z=-1+1+6=6\): \((5,0,6)\).`,
        S`<b>Check.</b> The directions are not parallel (\([2,0,1]\) is not a multiple of \([1,-1,3]\)), so they really span a plane ✓`],
      S`\(\vec r=[1,2,-1]+s[2,0,1]+t[1,-1,3]\); the point \((5,0,6)\)`,
      vfig(merge(V3, axes3(4.8), { polys: [patch3([1, 2, -1].map((v) => v / 2), [1, 0, 0.5], [0.5, -0.5, 1.5], 1)], arrows: [{ from: p3(0.5, 1, -0.5), to: p3(1.5, 1, 0), vl: "a", color: "red" }, { from: p3(0.5, 1, -0.5), to: p3(1, 0.5, 1), vl: "b", color: "green" }] }), "half scale: a patch of the plane spanned by a and b")],
    ["Through three points", S`Write a vector equation of the plane through \(A(2,1,0)\), \(B(4,0,3)\) and \(C(1,3,1)\).`,
      [S`<b>Two directions from one point.</b> \(\overrightarrow{AB}=[2,-1,3]\) and \(\overrightarrow{AC}=[-1,2,1]\).`,
        S`<b>Not parallel.</b> \(\frac{2}{-1}\ne\frac{-1}{2}\), so the three points are not collinear and do fix a plane.`,
        S`<b>Equation.</b> \(\vec r=[2,1,0]+s[2,-1,3]+t[-1,2,1]\).`,
        S`<b>Check.</b> \(s=1,t=0\) gives \(B(4,0,3)\); \(s=0,t=1\) gives \(C(1,3,1)\) ✓`],
      S`\(\vec r=[2,1,0]+s[2,-1,3]+t[-1,2,1]\)`,
      vfig(merge(V3, axes3(4.8), { polys: [{ pts: [p3(2, 1, 0), p3(4, 0, 3), p3(1, 3, 1)], fill: "#dbeafe", stroke: "blue" }], points: [pt(2, 1, 0, "A", -6, 18), pt(4, 0, 3, "B", -16, -6), pt(1, 3, 1, "C")] }, { view: { xmin: -3.8, xmax: 6, ymin: -2.8, ymax: 6 } }))],
    ["Is the point on the plane?", S`Is \((2,4,5)\) on the plane \(\vec r=[2,1,0]+s[2,-1,3]+t[-1,2,1]\)?`,
      [S`<b>Method.</b> Write the three coordinate equations; solve two of them for \(s\) and \(t\); test the third.`,
        S`<b>x and y.</b> \(2+2s-t=2\Rightarrow t=2s\); \(1-s+2t=4\Rightarrow-s+4s=3\Rightarrow s=1\), \(t=2\).`,
        S`<b>z.</b> \(0+3s+t=3+2=5\): it matches the point's z-coordinate ✓`,
        S`<b>Conclusion.</b> The point is on the plane, at \(s=1\), \(t=2\).`,
        S`<b>Note.</b> If the third equation failed, the point would be off the plane.`],
      S`yes, with \(s=1\), \(t=2\)`,
      vfig(merge(V3, axes3(4.8), { polys: [patch3([1, 0.5, 0], [1, -0.5, 1.5], [-0.5, 1, 0.5], 1)], points: [pt(1, 2, 2.5, "(2, 4, 5) at half scale")] }))],
    ["A line and a point", S`Find a vector equation of the plane containing the line \(\vec r=[1,0,2]+t[1,1,0]\) and the point \(P(3,-1,4)\).`,
      [S`<b>Needed.</b> A point and two non-parallel directions in the plane.`,
        S`<b>From the line.</b> The point \((1,0,2)\) and the direction \([1,1,0]\) lie in the plane.`,
        S`<b>Second direction.</b> From \((1,0,2)\) to \(P(3,-1,4)\): \([2,-1,2]\), not parallel to \([1,1,0]\).`,
        S`<b>Equation.</b> \(\vec r=[1,0,2]+s[1,1,0]+t[2,-1,2]\).`,
        S`<b>Check.</b> \(s=0,t=1\) gives \(P\) ✓`],
      S`\(\vec r=[1,0,2]+s[1,1,0]+t[2,-1,2]\)`,
      vfig(merge(V3, axes3(4.6), { polys: [patch3([1.6, 0.2, 2.6], [1, 1, 0], [2, -1, 2], 0.9)] }, { segs: [line3([1, 0, 2], [1, 1, 0], -1.4, 2, "red", 3)] }, { points: [pt(3, -1, 4, "P"), pt(1, 0, 2, "(1, 0, 2)", -70, 14)] }, { view: { xmin: -4.4, xmax: 5.6, ymin: -2.8, ymax: 6.4 } }))],
    ["Coordinate planes", S`Write vector equations of the xz-plane and of the plane \(z=3\).`,
      [S`<b>xz-plane.</b> All points with \(y=0\). It contains the origin and the directions \(\vec i=[1,0,0]\) and \(\vec k=[0,0,1]\): \(\vec r=s[1,0,0]+t[0,0,1]\).`,
        S`<b>The plane \(z=3\).</b> Horizontal, 3 units up: it contains \((0,0,3)\) and is parallel to \(\vec i\) and \(\vec j\).`,
        S`<b>Equation.</b> \(\vec r=[0,0,3]+s[1,0,0]+t[0,1,0]\).`,
        S`<b>Check.</b> In the second, \(z=3\) for every \(s,t\) ✓; in the first, \(y=0\) always ✓`],
      S`\(\vec r=s[1,0,0]+t[0,0,1]\); \(\vec r=[0,0,3]+s[1,0,0]+t[0,1,0]\)`,
      vfig(merge(V3, axes3(4.8), { polys: [{ ...patch3([1.5, 1.5, 3], [1, 0, 0], [0, 1, 0], 1.8), fill: "#dcfce7", stroke: "green" }, patch3([1.5, 0, 1.5], [1, 0, 0], [0, 0, 1], 1.5)] }, { texts: [{ x: 3.3, y: 3.6, t: "z = 3", color: "green" }, { x: -2, y: 2.4, t: "xz-plane", color: "blue" }] }))],
  ]),

  practice([
    q("point", S`For \(\vec r=[1,1,1]+s[1,0,2]+t[0,3,1]\), find the x-coordinate of the point with \(s=2\), \(t=-1\).`, num(3),
      "1 + 2(1) + (−1)(0).", [S`\(1+2\).`], S`\(3\)`),
    q("directions", S`Which pair of vectors cannot be the two directions of a plane?`, choice([S`\([1,2,3]\) and \([2,4,6]\)`, S`\([1,0,0]\) and \([0,1,0]\)`, S`\([1,1,0]\) and \([0,1,1]\)`, S`\([2,1,1]\) and \([1,2,1]\)`], 0),
      "Parallel directions give only a line.", ["Look for a scalar multiple."], S`\([1,2,3]\) and \([2,4,6]\)`),
    q("point", S`For \(\vec r=[0,2,5]+s[1,1,0]+t[2,0,-3]\), find the z-coordinate of the point with \(s=0\), \(t=1\).`, num(2),
      "5 + (−3).", [S`\(z=5-3\).`], S`\(2\)`),
    q("count", S`How many non-collinear points are needed to determine a plane?`, num(3),
      "Two points give only a line.", ["Three points not on a line."], S`\(3\)`),
    q("plane", S`What is \(z=0\) in three-space?`, choice(["the xy-plane", "the z-axis", "the origin", "the xz-plane"], 0),
      "Every point with z = 0.", ["x and y are free."], "the xy-plane"),
  ]),

  ...hard([
    ["A plane from its intercepts", S`Find a vector equation of the plane through \(A(1,0,0)\), \(B(0,2,0)\) and \(C(0,0,3)\), and show that every point of it satisfies \(6x+3y+2z=6\).`,
      [S`\(\overrightarrow{AB}=[-1,2,0]\), \(\overrightarrow{AC}=[-1,0,3]\): \(\vec r=[1,0,0]+s[-1,2,0]+t[-1,0,3]\).`, S`Parametric: \(x=1-s-t,\ y=2s,\ z=3t\). Then \(6x+3y+2z=6-6s-6t+6s+6t=6\).`],
      S`\(\vec r=[1,0,0]+s[-1,2,0]+t[-1,0,3]\), and \(6x+3y+2z=6\) for every \(s\), \(t\)`,
      vfig(merge(V3, axes3(4.6), { polys: [tri3(1, 2, 3)] }, { points: [pt(1, 0, 0, "A", -14, 16), pt(0, 2, 0, "B", 2, 18), pt(0, 0, 3, "C", 8, 0)] }))],
    ["Four points in one plane?", S`Show that \(A(1,1,1)\), \(B(2,3,2)\), \(C(3,1,4)\) and \(D(4,3,5)\) are coplanar.`,
      [S`\(\overrightarrow{AB}=[1,2,1]\), \(\overrightarrow{AC}=[2,0,3]\), \(\overrightarrow{AD}=[3,2,4]\).`, S`\(\overrightarrow{AD}=\overrightarrow{AB}+\overrightarrow{AC}\), so \(D\) is on the plane through \(A\) with directions \(\overrightarrow{AB}\), \(\overrightarrow{AC}\) (\(s=t=1\)).`],
      S`coplanar — in fact \(ABDC\) is a parallelogram`,
      vfig(merge(V3, axes3(4.6), { polys: [{ pts: [p3(1, 1, 1), p3(2, 3, 2), p3(4, 3, 5), p3(3, 1, 4)], fill: "#dbeafe", stroke: "blue" }], points: [pt(1, 1, 1, "A", -16, 10), pt(2, 3, 2, "B"), pt(3, 1, 4, "C", -16, -6), pt(4, 3, 5, "D")] }, { view: { xmin: -3.8, xmax: 6, ymin: -2.8, ymax: 6.4 } }))],
  ], [
    q("hard", S`The plane \(\vec r=[1,2,3]+s[1,0,0]+t[0,1,0]\) contains \((5,-2,3)\). Find \(s\).`, num(4),
      "x = 1 + s.", [S`\(1+s=5\).`], S`\(4\)`),
    q("hard", S`What is the z-coordinate of every point on \(\vec r=[1,2,3]+s[1,0,0]+t[0,1,0]\)?`, num(3),
      "Neither direction changes z.", [S`\(z=3\).`], S`\(3\)`),
    q("hard", S`Find \(k\) so that \((k,1,0)\) lies on \(\vec r=s[1,1,0]+t[0,1,1]\).`, num(1),
      "z = t = 0, then y = s = 1.", [S`\(x=s\).`], S`\(1\)`),
  ]),

  wrapUp({
    qas: [
      ["What determines a plane?", "A point and two non-parallel directions — or three non-collinear points, or a line and a point off it."],
      ["What do s and t do?", "They say how far to move along each direction; every pair (s, t) gives one point of the plane."],
      ["How do I test a point?", "Solve two parametric equations for s and t, then check the third."],
      ["Why can't the directions be parallel?", "Parallel directions point along one line, so their combinations stay on that line."],
      ["How do I show four points are coplanar?", "Write the vector to the fourth point as a combination of the two directions from the first three."],
    ],
    summary: [
      "r = r₀ + s a + t b.",
      "Three points: use AB and AC.",
      "Test a point: solve two, check the third.",
      "Directions must not be parallel.",
    ],
    next: "8.3 describes planes with a normal vector.",
  }),
];
