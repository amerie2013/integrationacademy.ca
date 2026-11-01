// LINALG1 1.2 — Lines and Planes in Rⁿ: vector and parametric equations of a line (point + direction, two points),
// testing whether a point is on a line, converting a 2-D line, vector equations of planes (point + two
// non-parallel directions, three points), testing membership, and how two lines in R³ can meet, be parallel or skew.
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, q, num, choice, hard, definition, vec, dir, cv } from "./lib.mjs";
import { vfig, scene3, a3, pt3, line3, patch3 } from "./vecfig.mjs";

export const TITLE = "1.2 Lines and Planes in Rⁿ";
export const ID = "11a10001-0001-4001-8001-000000000102";

const S = String.raw;
export const blocks = () => [
  intro({
    icon: "📐",
    title: "Lines and Planes in ℝⁿ",
    overview: S`In \(\mathbb R^2\) a line has an equation like \(x_2=mx_1+b\). That idea does not survive in \(\mathbb R^3\) and beyond — a single equation in three variables is a plane. The vector description does survive, unchanged, in every \(\mathbb R^n\): a <strong>line</strong> is a point plus all multiples of one direction vector, and a <strong>plane</strong> is a point plus all combinations of two non-parallel direction vectors.`,
    goals: [
      "write vector and parametric equations of a line from a point and a direction, or from two points;",
      "decide whether a point lies on a line;",
      "write a vector equation of a plane from a point and two directions, or from three points;",
      "decide whether a point lies on a plane;",
      "classify two lines in ℝ³ as intersecting, parallel or skew.",
    ],
    outcomes: "geometry of \\(\\mathbb R^n\\): lines and planes",
    prior: [
      [S`\(\overrightarrow{AB}\) for \(A(1,2,0)\), \(B(4,1,5)\)?`, S`\(\vec b-\vec a=(3,-1,5)\).`],
      [S`Are \((2,-4,6)\) and \((-1,2,-3)\) parallel?`, S`Yes: the first is \(-2\) times the second.`],
      [S`Solve \(1+2t=7\).`, S`\(t=3\).`],
    ],
    words: [
      ["Direction vector", "nonzero \\(\\vec d\\) along the line", "\\(\\vec d=(1,4,-2)\\)"],
      ["Parameter", "the free scalar \\(t\\) (or \\(s,t\\))", "\\(t=-1\\) gives one point"],
      ["Vector equation", "\\(\\vec x=\\vec p+t\\vec d\\)", "line through \\(P\\)"],
      ["Parametric equations", "one equation per component", "\\(x_1=3+t,\\ x_2=-1+4t\\)"],
      ["Skew lines", "not parallel and never meet (only in \\(\\mathbb R^3\\) and up)", "two edges of a box"],
    ],
  }),

  section("📌 Lines: a point and a direction", S`
  ${definition("line", S`The line through the point \(P\) (position vector \(\vec p\)) with direction vector \(\vec d\ne\vec 0\) is the set of all \(\vec x=\vec p+t\vec d\), \(t\in\mathbb R\). Writing one equation per component gives the <strong>parametric equations</strong> \(x_i=p_i+td_i\).`)}
  ${vfig(scene3(5, { segs: [line3([2, 0.5, 0.8], [-0.6, 1.2, 0.6], -1.2, 3, "violet")], arrows: [a3([0, 0, 0], [2, 0.5, 0.8], { color: "gray", w: 1.6, dash: true, vl: "p", off: 14 }), a3([2, 0.5, 0.8], [1.4, 1.7, 1.4], { color: "green", w: 3.4, vl: "d", off: -16 }), a3([0, 0, 0], [1.1, 2.3, 1.7], { color: "red", w: 1.8 })], points: [pt3([1.1, 2.3, 1.7], "t = 1.5", { color: "red" })] }), "x = p + t d: each value of t picks out one point of the violet line")}
  <p>Through two points \(P\) and \(Q\) use \(\vec d=\overrightarrow{PQ}=\vec q-\vec p\). The same line has many equations: any point on it can serve as \(\vec p\), and any nonzero multiple of \(\vec d\) is still a direction vector. To test whether a point lies on a line, solve each parametric equation for \(t\): the point is on the line exactly when <em>one</em> value of \(t\) works for <em>every</em> component.</p>
  ${keyIdea(S`A line in any \(\mathbb R^n\) is "a point plus all multiples of one nonzero vector". Two lines are parallel when their direction vectors are multiples of each other.`)}`),

  section("📌 Planes: a point and two directions", S`
  ${definition("plane", S`The plane through \(P\) containing the non-parallel nonzero vectors \(\vec u\) and \(\vec v\) is the set of all \(\vec x=\vec p+s\vec u+t\vec v\), \(s,t\in\mathbb R\).`)}
  ${vfig(scene3(5, { polys: [patch3([1, 1, 1], [1.5, 0, 0.6], [0, 1.5, 0.5], 1.3, "#dbeafe", "blue", 0.8)], arrows: [a3([1, 1, 1], [2.5, 1, 1.6], { color: "green", w: 3.2, vl: "u", off: 14 }), a3([1, 1, 1], [1, 2.5, 1.5], { color: "amber", w: 3.2, vl: "v", off: -14 })], points: [pt3([1, 1, 1], "P", { color: "black" })] }), "x = p + s u + t v: two directions sweep out a flat sheet")}
  <p>Through three points \(P,Q,R\) that are not on one line, use \(\vec u=\overrightarrow{PQ}\) and \(\vec v=\overrightarrow{PR}\). If \(\vec u\) and \(\vec v\) were parallel, every combination would stay on one line — that is why the definition insists they are not. Testing a point means solving three equations (in \(\mathbb R^3\)) in the two unknowns \(s,t\).</p>
  ${keyIdea(S`Line: 1 parameter. Plane: 2 parameters. In \(\mathbb R^n\) the same pattern continues — the number of free parameters is the "dimension" of the object, an idea made precise in chapter 5.`)}`),

  section("📌 Explore", S`<p>Change the direction \(\vec d\) and slide \(t\) to see which point you reach; turn the view to see the line from different sides. Then switch to <em>plane</em> and make \(\vec u\) and \(\vec v\) parallel: the plane collapses to a line.</p>`),
  widget("laLinePlane", { init: { mode: "line" } }),

  section("📌 Two lines in ℝ³", S`
  <p>In \(\mathbb R^2\) two distinct lines either meet once or are parallel. In \(\mathbb R^3\) there is a third option. To compare \(\vec x=\vec p+t\vec d\) and \(\vec x=\vec q+s\vec e\):</p>
  <ul><li>If \(\vec d\) and \(\vec e\) are parallel, the lines are <strong>parallel</strong> (or the same line, if \(Q\) is on the first one).</li>
  <li>Otherwise set \(\vec p+t\vec d=\vec q+s\vec e\): three equations, two unknowns. A solution means they <strong>intersect</strong>; no solution means they are <strong>skew</strong>.</li></ul>
  ${watchOut([
    "A direction vector can never be 0.",
    "Use different parameter letters for two different lines; the same t on both would force the points to be reached at the same time.",
    "A point is on a line only if the same t works in every component.",
    "Two direction vectors of a plane must not be parallel.",
    "Different-looking equations can describe the same line or plane.",
  ])}`),

  examples([
    ["A line from a point and a direction", S`Write vector and parametric equations of the line through \(P(3,-1,2)\) with direction \(\vec d=(1,4,-2)\), and find the point with \(t=-1\).`,
      [S`\(\vec x=${cv(3, -1, 2)}+t${cv(1, 4, -2)}\).`, S`Parametric: \(x_1=3+t,\ x_2=-1+4t,\ x_3=2-2t\).`, S`\(t=-1\): \((3-1,\ -1-4,\ 2+2)\).`],
      S`the point \((2,-5,4)\)`],
    ["Is the point on the line?", S`The line passes through \(A(1,0,-2)\) and \(B(4,2,1)\). Is \(C(10,6,7)\) on it? Is \(D(7,4,3)\)?`,
      [S`\(\vec d=\vec b-\vec a=(3,2,3)\); line \(\vec x=(1,0,-2)+t(3,2,3)\).`, S`\(C\): \(1+3t=10\Rightarrow t=3\); then \(2t=6\) ✓ and \(-2+3t=7\) ✓.`, S`\(D\): \(1+3t=7\Rightarrow t=2\); then \(2t=4\) ✓ but \(-2+3t=4\ne3\).`],
      S`\(C\) is on the line (\(t=3\)); \(D\) is not`],
    ["A line in ℝ² in vector form", S`Write the line \(x_2=-2x_1+5\) in vector form.`,
      [S`Two points: \(x_1=0\) gives \((0,5)\); \(x_1=1\) gives \((1,3)\).`, S`Direction \((1,3)-(0,5)=(1,-2)\): one step right, two down — slope \(-2\).`],
      S`\(\vec x=(0,5)+t(1,-2)\)`,
      vfig({ view: { xmin: -2, xmax: 4.5, ymin: -2.5, ymax: 7 }, step: 1, segs: [{ pts: [[-1, 7], [3.75, -2.5]], color: "violet" }], arrows: [{ from: [0, 0], to: [0, 5], color: "gray", w: 1.6, dash: true, vl: "p", off: -14 }, { from: [0, 5], to: [1, 3], color: "green", vl: "d", off: 14 }] })],
    ["A plane through three points", S`Find a vector equation of the plane through \(P(1,1,0)\), \(Q(2,3,1)\) and \(R(0,1,4)\).`,
      [S`\(\vec u=\overrightarrow{PQ}=(1,2,1)\), \(\vec v=\overrightarrow{PR}=(-1,0,4)\).`, S`They are not parallel (no scalar takes one to the other), so the points are not collinear.`],
      S`\(\vec x=(1,1,0)+s(1,2,1)+t(-1,0,4)\)`],
    ["Is the point on the plane?", S`Is \((1,5,10)\) on the plane \(\vec x=(1,1,0)+s(1,2,1)+t(-1,0,4)\)?`,
      [S`Components: \(1+s-t=1\), \(1+2s=5\), \(s+4t=10\).`, S`The second gives \(s=2\); the first then gives \(t=2\).`, S`Third: \(2+4(2)=10\) ✓ — all three hold.`],
      S`yes, with \(s=2\), \(t=2\)`],
  ]),

  practice([
    q("direction", S`Give a direction vector for the line through \((2,0,-1)\) and \((5,1,3)\).`, dir(3, 1, 4),
      "Subtract the two points.", [S`\((5-2,\ 1-0,\ 3+1)\). Any nonzero multiple also works.`], S`\((3,1,4)\)`),
    q("a point", S`Find the point with \(t=3\) on \(\vec x=(1,-2,4)+t(2,1,-1)\).`, vec(7, 1, 1),
      "Add 3 times the direction to the point.", [S`\((1+6,\ -2+3,\ 4-3)\).`], S`\((7,1,1)\)`),
    q("on the line?", S`Is \((5,1,0)\) on \(\vec x=(1,-1,2)+t(2,1,-1)\)?`, choice(["yes, with t = 2", "no", "yes, with t = 4", "only in ℝ²"], 0),
      "Solve the first component for t, then test the others.", [S`\(1+2t=5\Rightarrow t=2\); \(-1+2=1\) ✓, \(2-2=0\) ✓.`], "yes, with t = 2"),
    q("plane point", S`The plane through \(O\), \(A(1,2,3)\) and \(B(2,0,1)\) is \(\vec x=s\vec a+t\vec b\). Find the point with \(s=t=1\).`, vec(3, 2, 4),
      "Add a and b.", [S`\((1+2,\ 2+0,\ 3+1)\).`], S`\((3,2,4)\)`),
    q("ℝ⁴", S`On \(\vec x=(1,0,2,-1)+t(0,3,-1,2)\), find the 4th component of the point whose 2nd component is 12.`, num(7),
      "Find t from the 2nd component.", [S`\(3t=12\Rightarrow t=4\).`, S`\(-1+2(4)=7\).`], S`\(7\)`),
  ]),

  ...hard([
    ["Where do two lines meet?", S`Show that \(L_1:\ \vec x=(1,2,0)+t(1,-1,2)\) and \(L_2:\ \vec x=(3,-2,1)+s(0,2,3)\) intersect, and find the point.`,
      [S`The directions are not parallel, so the lines intersect or are skew.`, S`Set equal: \(1+t=3\), \(2-t=-2+2s\), \(2t=1+3s\).`, S`First: \(t=2\). Second: \(0=-2+2s\Rightarrow s=1\). Third: \(4=1+3\) ✓.`, S`Point: \(L_1\) at \(t=2\) gives \((3,0,4)\); \(L_2\) at \(s=1\) gives \((3,0,4)\) too.`],
      S`they meet at \((3,0,4)\)`,
      vfig(scene3(5, { segs: [line3([1, 2, 0], [1, -1, 2], -0.8, 2.6, "violet"), line3([3, -2, 1], [0, 2, 3], -0.6, 1.5, "blue")], points: [pt3([3, 0, 4], "(3, 0, 4)", { color: "red" })] }))],
    ["The plane containing a line and a point", S`Find a vector equation of the plane that contains the line \(\vec x=(1,0,2)+t(2,1,-1)\) and the point \(Q(3,4,0)\).`,
      [S`The plane contains \(P(1,0,2)\) and the direction \(\vec u=(2,1,-1)\).`, S`A second direction: \(\vec v=\overrightarrow{PQ}=(2,4,-2)\).`, S`\(\vec v\) is not a multiple of \(\vec u\) (compare the first two components: \(2/2\ne4/1\)), so \(Q\) is not on the line and the plane is determined.`],
      S`\(\vec x=(1,0,2)+s(2,1,-1)+t(2,4,-2)\)`],
  ], [
    q("hard", S`Classify \(L_1:\ (0,1,1)+t(1,2,-1)\) and \(L_2:\ (3,0,4)+s(-2,-4,2)\).`, choice(["parallel, distinct", "the same line", "intersecting", "skew"], 0),
      "Compare the directions, then test a point.", [S`\((-2,-4,2)=-2(1,2,-1)\): parallel.`, S`Is \((3,0,4)\) on \(L_1\)? \(t=3\) gives \((3,7,-2)\ne(3,0,4)\).`], "parallel, distinct"),
    q("hard", S`\((k,7,-2)\) lies on the line through \((1,1,1)\) and \((2,3,0)\). Find \(k\).`, num(4),
      "Use the 2nd component to find t.", [S`\(\vec d=(1,2,-1)\); \(1+2t=7\Rightarrow t=3\).`, S`Check: \(1-3=-2\) ✓. \(k=1+3\).`], S`\(4\)`),
    q("hard", S`The lines \((1,0,3)+t(2,1,1)\) and \((5,3,c)+s(1,1,0)\) intersect. Find \(c\).`, num(4),
      "Solve the first two components for t and s.", [S`\(1+2t=5+s\) and \(t=3+s\) give \(s=-2\), \(t=1\).`, S`Third: \(3+1=c\).`], S`\(4\)`),
  ]),

  wrapUp({
    qas: [
      ["Why not use y = mx + b in ℝ³?", "One equation in three variables describes a plane, not a line. The vector form p + td works in every ℝⁿ."],
      ["Is the equation of a line unique?", "No. Any point of the line can be p, and any nonzero multiple of d is a direction vector."],
      ["How do I test whether a point is on a line?", "Solve one component for t and check that the same t gives every other component."],
      ["Why must the two directions of a plane be non-parallel?", "Parallel directions only produce multiples of one vector, so the points would fill a line, not a plane."],
      ["What are skew lines?", "Lines in ℝ³ (or higher) that are not parallel and never meet: the system p + td = q + se has no solution."],
    ],
    summary: [
      "Line: x = p + t d, d ≠ 0; through P and Q use d = q − p.",
      "Plane: x = p + s u + t v with u, v not parallel; through P, Q, R use u = PQ, v = PR.",
      "Membership = one set of parameters that works in every component.",
      "Two lines in ℝ³: same, parallel, intersecting or skew.",
    ],
    next: "1.3 measures vectors: length, distance and unit vectors.",
  }),
];
