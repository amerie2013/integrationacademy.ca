// MCV4U 8.4 — Intersections of Lines in Two-Space and Three-Space (NEW lesson): solving with parameters, parallel
// and coincident lines, intersecting and skew lines in three-space, the angle between lines, and the distance
// between skew lines
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard } from "./lib.mjs";
import { vfig, p3, axes3, merge, line3 } from "./vecfig.mjs";

export const TITLE = "8.4 Intersections of Lines in Two-Space and Three-Space";
export const ID = "6d4fc008-0001-4001-8001-000000000804";

const S = String.raw;
const V3 = { view: { xmin: -3.8, xmax: 6, ymin: -2.8, ymax: 5.8 }, grid: false, axes: false };
const pt = (x, y, z, label, dx = 8, dy = -6, color = "black") => { const [a, b] = p3(x, y, z); return { x: a, y: b, label, dx, dy, color }; };
const L2 = (p, m, t0, t1, color = "violet", dash = false) => ({ pts: [[p[0] + t0 * m[0], p[1] + t0 * m[1]], [p[0] + t1 * m[0], p[1] + t1 * m[1]]], color, w: 2.4, dash });
export const blocks = () => [
  intro({
    icon: "✖️",
    title: "Intersections of Lines in Two-Space and Three-Space",
    overview: S`Where two lines meet, their equations give the same point. With parametric equations that means finding a value of each parameter that produces matching coordinates. In two-space there are only three possibilities: one point, no point (parallel), or every point (coincident). Three-space adds a fourth: lines that are not parallel and still never meet — <strong>skew</strong> lines. For skew lines the natural question becomes "how close do they come?", and the cross product answers it.`,
    goals: [
      "find the intersection of two lines by solving for the parameters;",
      "recognize parallel and coincident lines;",
      "decide whether lines in three-space intersect or are skew;",
      "find the angle between two lines;",
      "find the distance between skew lines.",
    ],
    curriculum: "C3.1, C3.3 (configurations of lines); C4.7 (intersections of two lines; distance between skew lines)",
    prior: [
      [S`Solve \(1+3s=-2+t\) and \(2-s=t\).`, S`\(s=-0.25,\ t=2.25\).`],
      [S`Are \([2,-4]\) and \([-1,2]\) parallel?`, S`Yes.`],
      [S`\([1,2,1]\times[2,1,0]\)?`, S`\([-1,2,-3]\).`],
    ],
    words: [
      ["Intersecting", "exactly one common point", ""],
      ["Parallel", "same direction, no common point", ""],
      ["Coincident", "the same line", "infinitely many points"],
      ["Skew", "three-space only: not parallel, never meet", ""],
    ],
  }),

  section("📌 The possibilities", S`
  ${table(["Directions", "Common point?", "Two-space", "Three-space"], [
    ["not parallel", "yes", "intersect at one point", "intersect at one point"],
    ["not parallel", "no", "impossible", "skew"],
    ["parallel", "no", "parallel, distinct", "parallel, distinct"],
    ["parallel", "yes", "coincident", "coincident"],
  ])}
  ${vfig(merge(V3, axes3(4.6), { segs: [line3([-1, 1, 0], [1, 0, 0], -2.5, 4.5, "violet", 2.8), line3([1, -1, 2], [0, 1, 0], -2, 4.5, "blue", 2.8), { pts: [p3(1, 1, 0), p3(1, 1, 2)], color: "red", dash: true, w: 2 }] }, { texts: [{ x: 3.9, y: 0.4, t: "line 1", color: "violet" }, { x: 4.3, y: 2.1, t: "line 2", color: "blue" }] }), "Skew lines: one runs along x, the other along y two units higher — they never meet")}
  ${keyIdea(S`Set the parametric equations equal, coordinate by coordinate. In two-space solve the two equations; in three-space solve two of the three and check the third — if it fails, the lines are skew (or parallel). The shortest distance between skew lines \(\vec r=\vec p_1+s\vec m_1\) and \(\vec r=\vec p_2+t\vec m_2\) is \(\frac{|\overrightarrow{P_1P_2}\cdot(\vec m_1\times\vec m_2)|}{|\vec m_1\times\vec m_2|}\).`)}`),

  section("📌 Explore", S`<p>In two-space, turn the two lines and move the second one up and down: they meet once unless their directions match. Switch to three-space and raise line 2 above line 1 — the lines no longer meet, and the dashed segment shows the shortest distance between them.</p>`),

  widget("linesMeetLab", { init: { mode: "2d" } }),

  section("📌 Solving systematically", S`
  <p>Use different letters for the two parameters. Compare directions first: if they are parallel, test one point of one line in the other to decide between parallel and coincident. Otherwise solve for the parameters, and in three-space confirm with the remaining equation.</p>
  ${watchOut([
    "Use different parameters (s and t) for the two lines.",
    "In three-space, two equations can always be solved — always check the third.",
    "Parallel directions: test a point to tell parallel from coincident.",
    "Skew lines exist only in three-space.",
    "For the angle between lines use the directions and report the acute angle.",
  ])}`),

  examples([
    ["Two lines in two-space", S`Find the intersection of \(\vec r=[1,2]+s[3,-1]\) and \(\vec r=[-2,0]+t[1,1]\).`,
      [S`\(1+3s=-2+t\) and \(2-s=t\).`, S`Substitute: \(1+3s=-2+2-s\Rightarrow4s=-1\), \(s=-0.25\), \(t=2.25\).`, S`Point: \((1-0.75,\ 2+0.25)\).`],
      S`\((0.25,\ 2.25)\)`,
      vfig({ view: { xmin: -3, xmax: 5, ymin: -1, ymax: 4 }, segs: [L2([1, 2], [3, -1], -1.3, 1.3), L2([-2, 0], [1, 1], -0.6, 3.6, "blue")], points: [{ x: 0.25, y: 2.25, label: "(0.25, 2.25)", dx: 8, dy: -8, color: "red" }] })],
    ["Parallel or coincident?", S`Compare \(\vec r=[1,2]+s[2,-4]\) and \(\vec r=[3,-2]+t[-1,2]\).`,
      [S`\([2,-4]=-2[-1,2]\): parallel directions.`, S`Is \((3,-2)\) on the first line? \(1+2s=3\Rightarrow s=1\), and \(2-4(1)=-2\). ✓`],
      S`coincident — the same line`],
    ["Intersecting lines in three-space", S`Find the intersection of \(L_1:\ \vec r=[1,0,2]+s[1,1,-1]\) and \(L_2:\ \vec r=[2,4,4]+t[0,-1,-1]\).`,
      [S`\(x\): \(1+s=2\Rightarrow s=1\). \(y\): \(s=4-t\Rightarrow t=3\).`, S`Check \(z\): \(2-s=1\) and \(4-t=1\). ✓`],
      S`\((2,1,1)\)`,
      vfig(merge(V3, axes3(4.6), { segs: [line3([1, 0, 2], [1, 1, -1], -1, 2.6, "violet", 2.8), line3([2, 4, 4], [0, -1, -1], -0.5, 4.2, "blue", 2.8)] }, { points: [pt(2, 1, 1, "(2, 1, 1)", 8, 14, "red")] }, { view: { xmin: -3.8, xmax: 6.4, ymin: -2.8, ymax: 6 } }))],
    ["Skew lines and their distance", S`Show that \(L_1:\ \vec r=s[1,2,1]\) and \(L_2:\ \vec r=[1,0,3]+t[2,1,0]\) are skew, and find the distance between them.`,
      [S`Not parallel. \(x\): \(s=1+2t\); \(y\): \(2s=t\) give \(t=-\frac23\), \(s=-\frac13\); \(z\): \(-\frac13\ne3\). Skew.`, S`\(\vec n=[1,2,1]\times[2,1,0]=[-1,2,-3]\); \(\overrightarrow{P_1P_2}=[1,0,3]\).`, S`Distance \(\frac{|-1+0-9|}{\sqrt{14}}=\frac{10}{\sqrt{14}}\).`],
      S`skew; about 2.67 apart`],
    ["The angle between two lines", S`Find the angle between lines with directions \([1,2,2]\) and \([0,3,4]\).`,
      [S`\(\cos\theta=\frac{0+6+8}{3\times5}=\frac{14}{15}\).`],
      S`about \(21.04^\circ\)`],
  ]),

  practice([
    q("2-D", S`Find the x-coordinate where \(y=2x\) meets the line \(\vec r=[0,3]+t[1,0]\).`, num(1.5, 0.001),
      "The second line is y = 3.", [S`\(2x=3\).`], S`\(1.5\)`),
    q("parallel", S`Lines with directions \([1,2,3]\) and \([2,4,6]\) are:`, choice(["parallel or coincident", "skew", "perpendicular", "always intersecting at one point"], 0),
      "The directions are multiples.", ["Check a point to decide which."], "parallel or coincident"),
    q("skew", S`How many points do two skew lines have in common?`, num(0),
      "Skew lines never meet.", ["They are not parallel, yet never meet."], S`\(0\)`),
    q("parameter", S`\(\vec r=[1,1,1]+t[1,0,0]\) meets \(\vec r=[4,0,1]+s[0,1,0]\). Find \(t\).`, num(3),
      "Match x: 1 + t = 4.", [S`\(t=3\) (and \(s=1\)).`], S`\(3\)`),
    q("definition", S`Skew lines are lines that:`, choice(["are not parallel and do not intersect", "are parallel", "meet at right angles", "coincide"], 0),
      "Only possible in three-space.", ["Neither parallel nor meeting."], "not parallel, not intersecting"),
  ]),

  ...hard([
    ["How close do they come?", S`Find the shortest distance between \(L_1:\ \vec r=[1,0,0]+s[0,1,1]\) and \(L_2:\ \vec r=[0,1,3]+t[1,0,1]\).`,
      [S`\(\vec n=[0,1,1]\times[1,0,1]=[1,1,-1]\); \(\overrightarrow{P_1P_2}=[-1,1,3]\).`, S`Distance \(\frac{|-1+1-3|}{\sqrt3}=\frac{3}{\sqrt3}=\sqrt3\).`],
      S`\(\sqrt3\approx1.73\)`,
      vfig(merge(V3, axes3(4.6), { segs: [line3([1, 0, 0], [0, 1, 1], -1, 3.4, "violet", 2.8), line3([0, 1, 3], [1, 0, 1], -1, 2.4, "blue", 2.8)] }, { view: { xmin: -3.8, xmax: 6, ymin: -2.8, ymax: 7 } }))],
    ["Choose k so they meet", S`Find \(k\) so that \(\vec r=[1,2,3]+s[1,-1,2]\) and \(\vec r=[3,k,5]+t[1,1,0]\) intersect, and find the point.`,
      [S`\(z\): \(3+2s=5\Rightarrow s=1\). \(x\): \(1+s=3+t\Rightarrow t=-1\).`, S`\(y\): \(2-s=k+t\Rightarrow1=k-1\Rightarrow k=2\). Point: \((2,1,5)\).`],
      S`\(k=2\); they meet at \((2,1,5)\)`,
      vfig(merge(V3, axes3(4.6), { segs: [line3([1, 2, 3], [1, -1, 2], -1.4, 1.4, "violet", 2.8), line3([3, 2, 5], [1, 1, 0], -3, 1.5, "blue", 2.8)] }, { points: [pt(2, 1, 5, "(2, 1, 5)", 8, -4, "red")] }, { view: { xmin: -3.8, xmax: 6, ymin: -2.8, ymax: 7.4 } }))],
  ], [
    q("hard", S`Find the distance between the parallel lines \(y=2x+1\) and \(y=2x+6\) (2 decimals).`, num(2.24, 0.01),
      "Distance from a point of one to the other: |6 − 1| / √5.", [S`\(\frac{5}{\sqrt5}=\sqrt5\).`], S`\(2.24\)`),
    q("hard", S`In the second challenge above, what is the value of \(s\) at the intersection point?`, num(1),
      "From the z equation.", [S`\(3+2s=5\).`], S`\(1\)`),
    q("hard", S`Find the distance between \(\vec r=s[1,0,0]\) and \(\vec r=[0,0,4]+t[0,1,0]\).`, num(4),
      "n = [0, 0, 1].", [S`\(\frac{|[0,0,4]\cdot[0,0,1]|}{1}\).`], S`\(4\)`),
  ]),

  wrapUp({
    qas: [
      ["How do I find where two lines meet?", "Set the parametric equations equal (with different parameters) and solve; in three-space check the leftover equation."],
      ["How do I tell parallel from coincident?", "The directions are multiples; test whether a point of one line lies on the other."],
      ["What are skew lines?", "Lines in three-space that are not parallel and never meet."],
      ["How do I find the distance between skew lines?", "Project the vector joining a point on each line onto m₁ × m₂: |P₁P₂ · (m₁ × m₂)| / |m₁ × m₂|."],
      ["How do I find the angle between two lines?", "Use the dot product of the direction vectors and take the acute angle."],
    ],
    summary: [
      "Solve for the parameters; check every coordinate.",
      "Parallel directions: parallel or coincident.",
      "Three-space: intersecting, parallel, coincident or skew.",
      "Skew distance: |P₁P₂ · (m₁ × m₂)| / |m₁ × m₂|.",
    ],
    next: "8.5 finds where lines meet planes.",
  }),
];
