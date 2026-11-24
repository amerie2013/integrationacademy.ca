// MCV4U 8.5 — Intersections of Lines and Planes (rebuild of "Intersections of Lines & Planes"): substituting a line
// into a plane, the three outcomes, the angle between a line and a plane, the distance from a point to a plane,
// the foot of a perpendicular, and reflections in a plane
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard } from "./lib.mjs";
import { vfig, p3, axes3, merge, line3, patch3 } from "./vecfig.mjs";

export const TITLE = "8.5 Intersections of Lines and Planes";
export const ID = "e9c1f218-c4ba-430a-a373-f5d5edbcc845";

const S = String.raw;
const V3 = { view: { xmin: -3.8, xmax: 6, ymin: -2.8, ymax: 5.8 }, grid: false, axes: false };
const pt = (x, y, z, label, dx = 8, dy = -6, color = "black") => { const [a, b] = p3(x, y, z); return { x: a, y: b, label, dx, dy, color }; };
export const blocks = () => [
  intro({
    icon: "📍",
    title: "Intersections of Lines and Planes",
    overview: S`A line can cross a plane at one point, run parallel to it without touching, or lie entirely inside it. To decide which, substitute the line's parametric equations into the plane's scalar equation. You get a single equation in \(t\): one solution means one point, no solution means parallel, and an identity like \(0=0\) means the line lies in the plane. The same substitution, with the line drawn along the normal, gives the point of a plane closest to a given point — and so the distance from the point to the plane.`,
    goals: [
      "find where a line meets a plane;",
      "recognize a line parallel to a plane or lying in it;",
      "find the angle between a line and a plane;",
      "find the distance from a point to a plane and the foot of the perpendicular;",
      "reflect a point in a plane.",
    ],
    curriculum: "C4.7 (intersections of a line and a plane; distance from a point to a plane)",
    prior: [
      [S`Substitute \(x=1+2t,\ y=t,\ z=3\) into \(x+y+z=10\).`, S`\(4+3t=10\).`],
      [S`Normal of \(3x-y+2z=14\)?`, S`\([3,-1,2]\).`],
      [S`\([1,1,-1]\cdot[1,1,2]\)?`, S`\(0\).`],
    ],
    words: [
      ["Point of intersection", "one value of t", ""],
      ["Parallel line", "\\(\\vec m\\cdot\\vec n=0\\), point not on the plane", "no solution"],
      ["Line in the plane", "\\(\\vec m\\cdot\\vec n=0\\), point on the plane", "every t works"],
      ["Foot of the perpendicular", "closest point of the plane", "line along \\(\\vec n\\)"],
    ],
  }),

  section("📌 Three outcomes", S`
  ${table(["\\(\\vec m\\cdot\\vec n\\)", "Point of the line on the plane?", "Result", "Equation in t"], [
    ["\\(\\ne0\\)", "—", "one point", "one solution"],
    ["\\(0\\)", "no", "parallel, no intersection", "e.g. \\(0t=3\\)"],
    ["\\(0\\)", "yes", "line lies in the plane", "\\(0t=0\\)"],
  ])}
  ${vfig(merge(V3, axes3(4.6), { polys: [patch3([1.5, 1.5, 0.5], [1, -1, 0], [2, 0, -1], 1)] }, { segs: [line3([1, -1, 2], [2, 1, -1], -0.9, 3, "red", 2.8)] }, { points: [pt(5, 1, 0, "(5, 1, 0)", 8, 14, "red")] }, { view: { xmin: -3.8, xmax: 7, ymin: -2.8, ymax: 5.8 } }), "The line r = [1, −1, 2] + t[2, 1, −1] meets 3x − y + 2z = 14 at (5, 1, 0)")}
  ${keyIdea(S`The direction of the line tells you most of the story: if \(\vec m\) is perpendicular to the normal (\(\vec m\cdot\vec n=0\)), the line is parallel to the plane or in it; otherwise it crosses once. The angle \(\phi\) between a line and a plane satisfies \(\sin\phi=\frac{|\vec m\cdot\vec n|}{|\vec m||\vec n|}\) — it is \(90^\circ\) minus the angle between \(\vec m\) and the normal.`)}`),

  section("📌 Explore", S`<p>Change the direction of the line and the point where it starts. Watch the equation in \(t\): it has one solution while the line crosses the plane, and none (or every \(t\)) when the direction becomes perpendicular to the normal \([1,1,2]\) — try \([1,1,-1]\).</p>`),

  widget("linePlaneLab", { init: { m: [1, 1, -1] } }),

  section("📌 Distances and closest points", S`
  <p>To find the point of a plane closest to \(P\), send a line from \(P\) along the normal, \(\vec r=\overrightarrow{OP}+t\vec n\), and intersect it with the plane. The distance is \(|t|\,|\vec n|\) — the same as the formula \(\frac{|Ax_0+By_0+Cz_0+D|}{|\vec n|}\). Going twice as far along the normal reflects \(P\) in the plane.</p>
  ${watchOut([
    "Substitute all three parametric equations into the plane — one equation in t results.",
    "0t = nonzero means no intersection; 0t = 0 means infinitely many.",
    "The angle with a plane uses sine (or 90° minus the angle with the normal).",
    "Distance is never negative: use absolute values.",
    "The foot of the perpendicular lies on the plane — check it.",
  ])}`),

  examples([
    ["One point of intersection", S`Find where \(\vec r=[1,-1,2]+t[2,1,-1]\) meets \(3x-y+2z=14\).`,
      [S`<b>Method.</b> Substitute the parametric equations of the line into the plane's equation; solve for \(t\).`,
        S`<b>Parametric.</b> \(x=1+2t\), \(y=-1+t\), \(z=2-t\).`,
        S`<b>Substitute.</b> \(3(1+2t)-(-1+t)+2(2-t)=3+6t+1-t+4-2t=8+3t=14\Rightarrow t=2\).`,
        S`<b>Point.</b> \((5,1,0)\).`,
        S`<b>Check.</b> \(3(5)-1+0=14\) ✓`],
      S`\((5,1,0)\)`,
      vfig(merge(V3, axes3(4.8), { polys: [patch3([2.5, 0.5, 0], [1, 1, 1], [1, -1, -1], 0.9)], segs: [line3([0.5, -0.5, 1], [1, 0.5, -0.5], -0.6, 3.4, "red", 2.8)], points: [pt(2.5, 0.5, 0, "(5, 1, 0) half scale")] }))],
    ["A parallel line", S`Does \(\vec r=[0,1,2]+t[1,1,-1]\) meet \(x+y+2z=4\)? If not, how far apart are they?`,
      [S`<b>Substitute.</b> \(t+(1+t)+2(2-t)=t+1+t+4-2t=5\).`,
        S`<b>Interpret.</b> The \(t\)-terms cancel, leaving the statement "5 equals 4", which is false for every \(t\). No intersection.`,
        S`<b>Why.</b> \([1,1,-1]\cdot[1,1,2]=1+1-2=0\): the direction is perpendicular to the normal, so the line is parallel to the plane.`,
        S`<b>Distance.</b> From the line's point \((0,1,2)\): \(\frac{|0+1+4-4|}{\sqrt{1+1+4}}=\frac1{\sqrt6}\approx0.41\).`],
      S`parallel, about 0.41 apart`,
      vfig(merge(V3, axes3(4.6), { polys: [patch3([1, 1, 1], [1, 1, -1], [2, 0, -1], 1)] }, { segs: [line3([0, 1, 2], [1, 1, -1], -1.2, 2.6, "red", 2.8)] }))],
    ["A line inside a plane", S`Show that \(\vec r=[0,1,2]+t[1,1,-1]\) lies in the plane \(x+y+2z=5\).`,
      [S`<b>Substitute.</b> \(t+(1+t)+2(2-t)=5\).`,
        S`<b>Result.</b> \(5=5\), true for every \(t\).`,
        S`<b>Meaning.</b> Every point of the line satisfies the plane's equation: the line lies in the plane.`,
        S`<b>Compare.</b> Same line as the previous example, but this plane has \(D=5\) instead of 4: shifting the plane captures the line.`],
      S`every point of the line satisfies the equation, so the line lies in the plane`,
      vfig(merge(V3, axes3(4.8), { polys: [patch3([1, 1, 1.5], [1, 1, -1], [2, 0, -1], 0.9)], segs: [line3([0, 1, 2], [1, 1, -1], -1, 2.2, "red", 2.8)] }), "the red line lies in the blue plane")],
    ["Distance from a point to a plane", S`Find the distance from \(P(2,-3,1)\) to \(4x-4y+2z=3\).`,
      [S`<b>Formula.</b> The distance from \((x_0,y_0,z_0)\) to \(Ax+By+Cz+D=0\) is \(\dfrac{|Ax_0+By_0+Cz_0+D|}{\sqrt{A^2+B^2+C^2}}\).`,
        S`<b>Write the plane as \(=0\).</b> \(4x-4y+2z-3=0\); \(|\vec n|=\sqrt{16+16+4}=6\).`,
        S`<b>Substitute \(P(2,-3,1)\).</b> \(|8+12+2-3|=19\).`,
        S`<b>Distance.</b> \(\frac{19}{6}\approx3.17\).`],
      S`\(\approx3.17\)`,
      vfig(merge(V3, axes3(4.8), { polys: [patch3([0.4, 0, 0.7], [1, 1, 0], [0, 1, 2], 1)], points: [pt(2, -3, 1, "P")], segs: [{ pts: [p3(2, -3, 1), p3(0.9, -1.9, 0.45)], color: "red", dash: true }] }), "the distance is measured along the normal")],
    ["The foot of the perpendicular", S`Find the point of the plane \(x+2y+2z=1\) closest to \(P(1,2,7)\), and the distance.`,
      [S`<b>Idea.</b> The closest point lies on the line through \(P\) along the normal \([1,2,2]\).`,
        S`<b>That line.</b> \((1+t,\ 2+2t,\ 7+2t)\).`,
        S`<b>Meet the plane.</b> \((1+t)+2(2+2t)+2(7+2t)=19+9t=1\Rightarrow t=-2\): foot \((-1,-2,3)\).`,
        S`<b>Distance.</b> \(|t||\vec n|=2\times3=6\).`,
        S`<b>Check.</b> Formula: \(\frac{|1+4+14-1|}{3}=6\) ✓`],
      S`foot \((-1,-2,3)\), distance 6`,
      vfig(merge(V3, axes3(4.6), { polys: [patch3([-1, -2, 3], [2, -1, 0], [0, 1, -1], 1.4)] }, { segs: [{ pts: [p3(1, 2, 7), p3(-1, -2, 3)], color: "red", dash: true, w: 2.2 }] }, { points: [pt(1, 2, 7, "P(1, 2, 7)"), pt(-1, -2, 3, "foot", -40, 14, "red")] }, { view: { xmin: -5, xmax: 6, ymin: -2.8, ymax: 8 } }))],
  ]),

  practice([
    q("t", S`Where does \(\vec r=t[1,1,1]\) meet \(x+y+z=6\)? Give \(t\).`, num(2),
      "3t = 6.", [S`\(t+t+t=6\).`], S`\(2\)`),
    q("parallel", S`A line is parallel to a plane (and not in it) when:`, choice([S`\(\vec m\cdot\vec n=0\) and a point of the line is not on the plane`, S`\(\vec m\times\vec n=\vec 0\)`, S`\(\vec m=\vec n\)`, S`\(\vec m\cdot\vec n\ne0\)`], 0),
      "The direction is perpendicular to the normal.", ["Then the line cannot cross the plane."], "m · n = 0 and a point off the plane"),
    q("distance", S`Find the distance from the origin to \(x+2y+2z=9\).`, num(3),
      "|−9| / 3.", [S`\(\frac93\).`], S`\(3\)`),
    q("substitute", S`The line \(x=1,\ y=2,\ z=t\) meets \(2x+y+z=10\). Find the z-coordinate.`, num(6),
      "2 + 2 + t = 10.", [S`\(t=6\).`], S`\(6\)`),
    q("angle", S`Find the angle between a line with direction \([0,0,1]\) and the plane \(z=0\) (degrees).`, num(90),
      "The line is along the normal.", [S`\(\sin\phi=1\).`], S`\(90^\circ\)`),
  ]),

  ...hard([
    ["The angle between a line and a plane", S`Find the angle between the line with direction \([1,1,0]\) and the plane \(x-z=0\).`,
      [S`Normal \([1,0,-1]\): \(\cos(\text{angle with normal})=\frac{1}{\sqrt2\sqrt2}=\frac12\), so that angle is \(60^\circ\).`, S`The line makes \(90^\circ-60^\circ\) with the plane.`],
      S`\(30^\circ\)`,
      vfig(merge(V3, axes3(4.6), { polys: [patch3([1.5, 1.5, 1.5], [1, 0, 1], [0, 1, 0], 1.6)] }, { arrows: [{ from: p3(1.5, 1.5, 1.5), to: p3(3, 3, 1.5), vl: "m", color: "red", off: 16 }, { from: p3(1.5, 1.5, 1.5), to: p3(2.5, 1.5, 0.5), vl: "n", color: "green", off: -16 }] }))],
    ["Reflecting a point in a plane", S`Find the reflection of \(P(3,1,2)\) in the plane \(x+y+z=3\).`,
      [S`Line along the normal: \((3+t,\ 1+t,\ 2+t)\); \(6+3t=3\Rightarrow t=-1\): foot \((2,0,1)\).`, S`The reflection is as far beyond the foot: \(t=-2\), giving \((1,-1,0)\).`],
      S`\((1,-1,0)\)`,
      vfig(merge(V3, axes3(4.6), { polys: [patch3([2, 0, 1], [1, -1, 0], [1, 0, -1], 1.5)] }, { segs: [{ pts: [p3(3, 1, 2), p3(1, -1, 0)], color: "red", dash: true, w: 2.2 }] }, { points: [pt(3, 1, 2, "P"), pt(2, 0, 1, "foot", 8, 14, "red"), pt(1, -1, 0, "P′", -20, 14, "blue")] }, { view: { xmin: -4.4, xmax: 6, ymin: -2.8, ymax: 5.8 } }))],
  ], [
    q("hard", S`Find the distance from \((1,1,1)\) to \(2x+y-2z=10\).`, num(3),
      "|2 + 1 − 2 − 10| / 3.", [S`\(\frac93\).`], S`\(3\)`),
    q("hard", S`Find \(k\) so that \(\vec r=[1,0,0]+t[2,k,1]\) is parallel to the plane \(x-y+z=7\).`, num(3),
      "m · n = 0.", [S`\(2-k+1=0\).`], S`\(3\)`),
    q("hard", S`Find the x-coordinate of the foot of the perpendicular from \((4,0,0)\) to the plane \(x=1\).`, num(1),
      "Move along [1, 0, 0] to x = 1.", [S`The foot is \((1,0,0)\).`], S`\(1\)`),
  ]),

  wrapUp({
    qas: [
      ["How do I find where a line meets a plane?", "Substitute the line's parametric equations into the plane's scalar equation and solve for t."],
      ["What does 0t = 5 mean?", "No value of t works: the line is parallel to the plane and never meets it."],
      ["What does 0t = 0 mean?", "Every t works: the line lies in the plane."],
      ["How do I find the closest point of a plane to P?", "Intersect the plane with the line through P along the normal; that point is the foot of the perpendicular."],
      ["How do I find the angle between a line and a plane?", "Find the angle between the line and the normal, and subtract it from 90°."],
    ],
    summary: [
      "Substitute the line into the plane.",
      "m · n ≠ 0: one point; = 0: parallel or in the plane.",
      "Foot of perpendicular: line along n.",
      "Line–plane angle = 90° − angle with the normal.",
    ],
    next: "8.6 finds where planes intersect.",
  }),
];
