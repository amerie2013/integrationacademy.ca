// MCV4U 8.6 — Intersections of Planes (NEW lesson): two planes (a line, parallel, coincident), three planes solved by
// elimination, the geometric configurations (point, line, plane, none), the triple product of the normals, and
// distance between parallel planes
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard } from "./lib.mjs";
import { vfig, p3, axes3, merge, line3, patch3 } from "./vecfig.mjs";

export const TITLE = "8.6 Intersections of Planes";
export const ID = "6d4fc008-0001-4001-8001-000000000806";

const S = String.raw;
const V3 = { view: { xmin: -3.8, xmax: 6, ymin: -2.8, ymax: 5.8 }, grid: false, axes: false };
const pt = (x, y, z, label, dx = 8, dy = -6, color = "black") => { const [a, b] = p3(x, y, z); return { x: a, y: b, label, dx, dy, color }; };
export const blocks = () => [
  intro({
    icon: "🧱",
    title: "Intersections of Planes",
    overview: S`Two planes that are not parallel cut along a line; parallel planes never meet; coincident planes share everything. With three planes the picture is richer: they can meet in a single point (like the corner of a room), along a common line (like the pages of a book), or not at all — as three parallel planes, two parallel planes crossed by a third, or three planes forming the sides of a triangular prism. Algebraically, finding the intersection means solving a system of linear equations; geometrically, the normals tell you which case you are in.`,
    goals: [
      "find the line of intersection of two planes;",
      "recognize parallel and coincident planes;",
      "solve a system of three planes by elimination;",
      "match each algebraic outcome to a geometric configuration;",
      "use the triple product of the normals to predict a unique point.",
    ],
    curriculum: "C3.2, C3.3 (solutions of linear equations in three-space; configurations of lines and planes); C4.4 (intersection of three planes by solving a system)",
    prior: [
      [S`\([2,1,1]\times[1,-1,2]\)?`, S`\([3,-3,-3]\).`],
      [S`Solve \(2x+y=9,\ x-y=3\).`, S`\(x=4,\ y=1\).`],
      [S`\([1,2,-1]\cdot([2,-1,1]\times[0,1,0])\)?`, S`\(-3\).`],
    ],
    words: [
      ["Line of intersection", "two non-parallel planes", "direction \\(\\vec n_1\\times\\vec n_2\\)"],
      ["Consistent system", "at least one solution", ""],
      ["Sheaf", "three planes through one line", ""],
      ["Triangular prism", "three planes meeting in pairs, no common point", ""],
    ],
  }),

  section("📌 Configurations", S`
  ${table(["Three planes", "Solutions", "Normals"], [
    ["meet at one point", "exactly one", "\\(\\vec n_1\\cdot(\\vec n_2\\times\\vec n_3)\\ne0\\)"],
    ["share a line (sheaf)", "infinitely many (one parameter)", "coplanar normals"],
    ["coincide", "infinitely many (two parameters)", "all parallel"],
    ["triangular prism", "none", "coplanar, not parallel"],
    ["two or three parallel", "none", "two or more parallel"],
  ])}
  ${vfig(merge(V3, axes3(4.6), { polys: [patch3([1.5, 1.5, 1.5], [1, 0, 0], [0, 1, 0], 1.6, "#dbeafe", "blue", 0.45), patch3([1.5, 1.5, 1.5], [1, 0, 0], [0, 0, 1], 1.6, "#dcfce7", "green", 0.45), patch3([1.5, 1.5, 1.5], [0, 1, 0], [0, 0, 1], 1.6, "#fee2e2", "red", 0.45)] }, { points: [pt(1.5, 1.5, 1.5, "one point", 8, -6, "black")] }), "Three planes with independent normals meet at exactly one point")}
  ${keyIdea(S`Two non-parallel planes meet in the line with direction \(\vec n_1\times\vec n_2\) through any point satisfying both equations. For three planes, \(\vec n_1\cdot(\vec n_2\times\vec n_3)\ne0\) guarantees exactly one point; when it is 0 there is a line, a plane, or nothing — elimination decides.`)}`),

  section("📌 Explore", S`<p>Choose a configuration and turn the view to see how the three planes sit. The readout shows their equations and the triple product of their normals: nonzero only when the planes meet at a single point.</p>`),

  widget("planesLab", { init: { config: "point" } }),

  section("📌 Solving by elimination", S`
  <p>Eliminate one variable from two pairs of equations to get a two-variable system, solve it, then back-substitute. If elimination produces \(0=0\), there are infinitely many solutions — introduce a parameter. If it produces \(0=\) a nonzero number, there is no solution; look at the normals to name the configuration.</p>
  ${watchOut([
    "Parallel normals with different constants: parallel planes, no common points.",
    "0 = 0 after elimination means infinitely many solutions, not zero.",
    "Check a final answer in all three original equations.",
    "Coplanar normals do not by themselves mean no solution — a sheaf is also possible.",
    "The line of intersection's direction is n₁ × n₂, not n₁ + n₂.",
  ])}`),

  examples([
    ["Two planes, one line", S`Find the line of intersection of \(2x+y+z=9\) and \(x-y+2z=3\).`,
      [S`Direction \(\vec n_1\times\vec n_2=[2,1,1]\times[1,-1,2]=[3,-3,-3]\), or more simply \([1,-1,-1]\).`, S`A point: set \(z=0\): \(2x+y=9\), \(x-y=3\Rightarrow x=4,\ y=1\).`],
      S`\(\vec r=[4,1,0]+t[1,-1,-1]\)`,
      vfig(merge(V3, axes3(4.6), { polys: [patch3([3, 2, 1], [1, -2, 0], [0, 1, -1], 1.1, "#dbeafe", "blue", 0.5), patch3([3, 2, 1], [1, 1, 0], [2, 0, -1], 1.1, "#dcfce7", "green", 0.5)] }, { segs: [line3([4, 1, 0], [1, -1, -1], -2.4, 0.6, "red", 3)] }))],
    ["Parallel or coincident?", S`Compare \(2x-y+z=4\) with \(-4x+2y-2z=3\), and with \(-4x+2y-2z=-8\).`,
      [S`Both second planes have normal \([-4,2,-2]=-2[2,-1,1]\): parallel normals.`, S`\(-8=-2(4)\), so the third equation is \(-2\) times the first; \(3\ne-2(4)\).`],
      S`the first pair are parallel and distinct; the second pair coincide`],
    ["Three planes, one point", S`Solve \(x+y+z=6\), \(2x-y+z=3\), \(x+2y-z=2\).`,
      [S`Add the first and third: \(2x+3y=8\). Add the second and third: \(3x+y=5\).`, S`\(y=5-3x\Rightarrow2x+15-9x=8\Rightarrow x=1\), \(y=2\), then \(z=3\).`],
      S`the single point \((1,2,3)\)`],
    ["Three planes, a line", S`Solve \(x+y+z=2\), \(x-y+z=0\), \(2x+2z=2\).`,
      [S`The third is the sum of the first two, so it adds nothing.`, S`Subtract the first two: \(2y=2\Rightarrow y=1\); then \(x+z=1\). Let \(z=t\).`],
      S`\(\vec r=[1,1,0]+t[-1,0,1]\): the planes share a line`],
    ["Three planes, no point", S`Show that \(x+y+z=2\), \(x-y+z=0\), \(2x+2z=5\) have no common point, and describe the configuration.`,
      [S`Adding the first two gives \(2x+2z=2\), which contradicts \(2x+2z=5\).`, S`No two normals are parallel, but \([2,0,2]=[1,1,1]+[1,-1,1]\): the normals are coplanar. Each pair meets in a line, and the three lines are parallel.`],
      S`no solution: the planes form a triangular prism`,
      vfig(merge(V3, axes3(4.6), { polys: [patch3([1.5, 0, 0], [1, 0, 0], [0, 1.4, 0], 1.6, "#dbeafe", "blue", 0.45), patch3([1.5, 1, 1], [1, 0, 0], [0, 0.7, -0.7], 1.6, "#dcfce7", "green", 0.45), patch3([1.5, -1, 1], [1, 0, 0], [0, 0.7, 0.7], 1.6, "#fee2e2", "red", 0.45)] }, { texts: [{ x: 3.4, y: 4.4, t: "a triangular prism", color: "gray" }] }))],
  ]),

  practice([
    q("point", S`Find the z-coordinate of the common point of \(x=1\), \(y=2\) and \(x+y+z=6\).`, num(3),
      "1 + 2 + z = 6.", [S`\(z=3\).`], S`\(3\)`),
    q("triple", S`If \(\vec n_1\cdot(\vec n_2\times\vec n_3)\ne0\), three planes:`, choice(["meet at exactly one point", "share a line", "have no common point", "coincide"], 0),
      "The normals are independent.", ["Like the walls and floor of a room."], "meet at one point"),
    q("parallel", S`How many points do two distinct parallel planes have in common?`, num(0),
      "They never meet.", ["Same normal, different constant."], S`\(0\)`),
    q("solve", S`Find the y-coordinate of the solution of \(x+y=3\), \(y+z=5\), \(x+z=4\).`, num(2),
      "Add all three: x + y + z = 6.", [S`\(y=6-4\).`], S`\(2\)`),
    q("two planes", S`Two non-parallel planes always intersect in:`, choice(["a line", "a point", "nothing", "a plane"], 0),
      "Direction n₁ × n₂.", ["They cut along a line."], "a line"),
  ]),

  ...hard([
    ["When is there no single point?", S`For which \(k\) do \(x+y+z=1\), \(x-y+z=0\), \(x+y+kz=3\) fail to meet in a single point? Describe that case.`,
      [S`\(\vec n_1\cdot(\vec n_2\times\vec n_3)=\det\begin{bmatrix}1&1&1\\1&-1&1\\1&1&k\end{bmatrix}=2-2k\), zero when \(k=1\).`, S`Then the third plane is \(x+y+z=3\), parallel to the first: no common point, with the second plane crossing both.`],
      S`\(k=1\): two parallel planes cut by a third — no solution`,
      vfig(merge(V3, axes3(4.6), { polys: [patch3([0.3, 0.3, 0.4], [1, -1, 0], [1, 0, -1], 1.5, "#dbeafe", "blue", 0.45), patch3([1, 1, 1], [1, -1, 0], [1, 0, -1], 1.5, "#dbeafe", "blue", 0.45), patch3([1, 0.75, 0.5], [1, 0, -1], [1, 1, 0], 1.2, "#dcfce7", "green", 0.45)] }))],
    ["Designing a third plane", S`The planes \(x+2y-z=3\) and \(2x-y+z=1\) are given. Show that the plane \(y=1\) meets both in a single point, and find it.`,
      [S`\([1,2,-1]\cdot([2,-1,1]\times[0,1,0])=[1,2,-1]\cdot[-1,0,2]=-3\ne0\): one point.`, S`With \(y=1\): \(x-z=1\) and \(2x+z=2\Rightarrow3x=3\), so \(x=1\), \(z=0\).`],
      S`the single point \((1,1,0)\)`,
      vfig(merge(V3, axes3(4.6), { polys: [{ ...patch3([1, 1, 0], [1, 0, 0], [0, 0, 1], 1.8), fill: "#fee2e2", stroke: "red" }] }, { points: [pt(1, 1, 0, "(1, 1, 0)", 8, 14)] }))],
  ], [
    q("hard", S`Find the z-coordinate of the common point of \(x+y+z=3\), \(x-y=0\), \(z=2x\).`, num(1.5, 0.001),
      "x = y and z = 2x give 4x = 3.", [S`\(x=0.75\), \(z=1.5\).`], S`\(1.5\)`),
    q("hard", S`Find \(k\) so that the normals of \(2x+y-z=1\), \(x-y+2z=3\), \(3x+kz=4\) are coplanar.`, num(1),
      "Triple product 3 − 3k = 0.", [S`\(\det=-2k-k+6-3\).`], S`\(1\)`),
    q("hard", S`Find the distance between the parallel planes \(x+2y+2z=3\) and \(x+2y+2z=12\).`, num(3),
      "|12 − 3| / 3.", [S`\(\frac93\).`], S`\(3\)`),
  ]),

  wrapUp({
    qas: [
      ["How do two planes meet?", "In a line (if not parallel), not at all (parallel), or everywhere (coincident)."],
      ["How do I find the line of intersection?", "Direction n₁ × n₂; find one point by setting a variable to 0 and solving the two equations."],
      ["How do three planes meet?", "At one point, along a line, in a whole plane, or not at all (parallel planes or a triangular prism)."],
      ["What does the triple product of the normals tell me?", "Nonzero means exactly one common point; zero means a line, a plane, or no common point."],
      ["What does 0 = 5 during elimination mean?", "The system is inconsistent: the planes have no common point."],
    ],
    summary: [
      "Two planes: line along n₁ × n₂, or parallel/coincident.",
      "Three planes: solve by elimination.",
      "n₁ · (n₂ × n₃) ≠ 0 ⇔ one point.",
      "0 = 0: infinitely many; 0 = c: none.",
    ],
    next: "8.7 reviews the chapter.",
  }),
];
