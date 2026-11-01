// LINALG1 1.6 — Normal Vectors and Scalar Equations of Planes: n · (x − p) = 0, reading the normal from the
// coefficients, converting vector ↔ scalar equations (cross product one way, free variables the other),
// intercepts, parallel/perpendicular planes and the angle between planes, lines in R² and hyperplanes in Rⁿ.
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, definition, theorem, dir } from "./lib.mjs";
import { vfig, scene3, a3, pt3, tri3, patch3, line3 } from "./vecfig.mjs";

export const TITLE = "1.6 Normal Vectors and Scalar Equations of Planes";
export const ID = "11a10001-0001-4001-8001-000000000106";

const S = String.raw;
export const blocks = () => [
  intro({
    icon: "🧱",
    title: "Normal Vectors and Scalar Equations of Planes",
    overview: S`A plane in \(\mathbb R^3\) can be described by two directions inside it (1.2) — or, more economically, by <strong>one</strong> direction perpendicular to it: a <strong>normal vector</strong>. The dot product turns "perpendicular to \(\vec n\)" into a single linear equation \(n_1x_1+n_2x_2+n_3x_3=d\). Moving between the two descriptions is a skill you will use all course: it is the first time a geometric object becomes the solution set of a linear equation.`,
    goals: [
      "write the scalar (normal) equation of a plane from a point and a normal vector;",
      "read a normal vector from a scalar equation;",
      "convert a vector equation to a scalar equation with the cross product, and back with free parameters;",
      "find intercepts and decide whether planes are parallel or perpendicular;",
      "find the angle between planes and the line where two planes meet.",
    ],
    outcomes: "geometry of \\(\\mathbb R^n\\): equations of planes and hyperplanes",
    prior: [
      [S`\((1,2,0)\times(0,1,3)\)?`, S`\((6,-3,1)\).`],
      [S`When is \(\vec u\cdot\vec v=0\)?`, S`When \(\vec u\perp\vec v\).`],
      [S`Line through \((1,0,2)\) with direction \((3,1,1)\)?`, S`\(\vec x=(1,0,2)+t(3,1,1)\).`],
    ],
    words: [
      ["Normal vector", "nonzero vector perpendicular to the plane", "\\(\\vec n=(2,-1,3)\\)"],
      ["Scalar equation", "\\(n_1x_1+n_2x_2+n_3x_3=d\\)", "\\(2x_1-x_2+3x_3=6\\)"],
      ["Intercept", "where the plane crosses an axis", "\\(x_1\\)-intercept 3"],
      ["Hyperplane", "\\(\\vec a\\cdot\\vec x=d\\) in \\(\\mathbb R^n\\), \\(\\vec a\\ne\\vec 0\\)", "a line in \\(\\mathbb R^2\\), a plane in \\(\\mathbb R^3\\)"],
    ],
  }),

  section("📌 The normal equation", S`
  ${definition("scalar equation of a plane", S`The plane through \(P\) with normal vector \(\vec n\ne\vec 0\) is the set of all \(\vec x\) with \(\vec n\cdot(\vec x-\vec p)=0\). Expanding gives \(n_1x_1+n_2x_2+n_3x_3=d\) with \(d=\vec n\cdot\vec p\).`)}
  ${vfig(scene3(5, { polys: [patch3([1, 1.5, 1.5], [1, 0, -0.5], [0, 1, -0.6], 1.8, "#ede9fe", "violet", 0.85)], arrows: [a3([1, 1.5, 1.5], [1.5, 2.1, 2.5], { color: "green", w: 3.4, vl: "n", off: -14 }), a3([1, 1.5, 1.5], [2.2, 2.6, 0.24], { color: "red", w: 2, label: "x − p", off: 14 })], points: [pt3([1, 1.5, 1.5], "P", { color: "black" })] }), "x is on the plane exactly when x − p lies flat in it, i.e. n · (x − p) = 0")}
  <p>Conversely, every equation \(a_1x_1+a_2x_2+a_3x_3=d\) with \((a_1,a_2,a_3)\ne\vec 0\) is a plane with normal \((a_1,a_2,a_3)\): <strong>the coefficients are the normal</strong>. Changing \(d\) slides the plane parallel to itself.</p>
  ${keyIdea(S`Vector form: a point and <em>two</em> directions in the plane. Scalar form: a point and <em>one</em> direction out of the plane. They are linked by \(\vec n=\vec u\times\vec v\) and by \(\vec n\cdot\vec u=\vec n\cdot\vec v=0\).`)}`),

  section("📌 Converting between forms", S`
  ${table(["From", "To", "How"], [
    ["\\(\\vec x=\\vec p+s\\vec u+t\\vec v\\)", "scalar", "\\(\\vec n=\\vec u\\times\\vec v\\), then \\(d=\\vec n\\cdot\\vec p\\)"],
    ["\\(a_1x_1+a_2x_2+a_3x_3=d\\)", "vector", "solve for one variable; the other two become the parameters \\(s,t\\)"],
    ["three points \\(P,Q,R\\)", "scalar", "\\(\\vec n=\\overrightarrow{PQ}\\times\\overrightarrow{PR}\\), \\(d=\\vec n\\cdot\\vec p\\)"],
  ])}
  ${theorem("parallel and perpendicular planes", S`Two planes are parallel when their normals are parallel, and perpendicular when their normals are orthogonal. The angle between two planes is the (acute) angle between their normals.`)}
  <p>Two non-parallel planes meet in a line; its direction is orthogonal to both normals, so it is \(\vec n_1\times\vec n_2\).</p>
  ${definition("hyperplane", S`In \(\mathbb R^n\), the solution set of one equation \(a_1x_1+\dots+a_nx_n=d\) (\(\vec a\ne\vec 0\)) is a <strong>hyperplane</strong> with normal \(\vec a\). In \(\mathbb R^2\) it is a line: the line \(3x_1-2x_2=4\) has normal \((3,-2)\) and direction \((2,3)\).`)}`),

  section("📌 Explore", S`<p>Tilt the plane by changing the normal \(\vec n\), and slide it with \(d\). Notice that changing \(d\) never changes the tilt, and that the readout always finds two directions in the plane that are orthogonal to \(\vec n\).</p>`),
  widget("laPlaneNormal", { init: { n: [1, 2, 2], d: 6 } }),

  section("📌 Pitfalls", S`
  ${watchOut([
    "d is n · p, not the distance to the origin (that is |d|/‖n‖).",
    "Any nonzero multiple of a normal is a normal; equations like 2x₁ + 4x₂ = 6 and x₁ + 2x₂ = 3 are the same plane.",
    "In a vector equation you need TWO non-parallel directions; one parameter gives only a line.",
    "Parallel planes have parallel normals — the planes themselves are not 'perpendicular to the normal' of each other.",
    "The angle between planes is taken between 0° and 90°: use |n₁ · n₂|.",
  ])}`),

  examples([
    ["From a point and a normal", S`Find the scalar equation of the plane through \(P(2,-1,3)\) with normal \(\vec n=(4,1,-2)\).`,
      [S`\(d=\vec n\cdot\vec p=8-1-6=1\).`],
      S`\(4x_1+x_2-2x_3=1\)`],
    ["Vector form to scalar form", S`Convert \(\vec x=(1,0,2)+s(1,1,0)+t(0,2,1)\) to a scalar equation.`,
      [S`\(\vec n=(1,1,0)\times(0,2,1)=(1\cdot1-0\cdot2,\ 0\cdot0-1\cdot1,\ 1\cdot2-1\cdot0)=(1,-1,2)\).`, S`\(d=(1,-1,2)\cdot(1,0,2)=1-0+4=5\).`],
      S`\(x_1-x_2+2x_3=5\)`],
    ["Scalar form to vector form", S`Write \(2x_1-x_2+3x_3=6\) in vector form.`,
      [S`Solve for \(x_2\): \(x_2=-6+2x_1+3x_3\). Let \(x_1=s\), \(x_3=t\).`, S`\(\vec x=(s,\ -6+2s+3t,\ t)=(0,-6,0)+s(1,2,0)+t(0,3,1)\).`, S`Check: \((1,2,0)\cdot(2,-1,3)=0\) and \((0,3,1)\cdot(2,-1,3)=0\).`],
      S`\(\vec x=(0,-6,0)+s(1,2,0)+t(0,3,1)\)`],
    ["From three intercepts", S`Find the plane through \(A(1,0,0)\), \(B(0,2,0)\), \(C(0,0,3)\).`,
      [S`\(\overrightarrow{AB}=(-1,2,0)\), \(\overrightarrow{AC}=(-1,0,3)\); \(\vec n=(6,3,2)\).`, S`\(d=\vec n\cdot\vec a=6\).`],
      S`\(6x_1+3x_2+2x_3=6\), i.e. \(\tfrac{x_1}1+\tfrac{x_2}2+\tfrac{x_3}3=1\)`,
      vfig(scene3(4, { polys: [tri3(1.2, 2.4, 3.6, "#dbeafe", "blue")], points: [pt3([1.2, 0, 0], "A", { color: "black" }), pt3([0, 2.4, 0], "B", { color: "black" }), pt3([0, 0, 3.6], "C", { color: "black" })] }))],
    ["The angle between two planes", S`Find the angle between \(x_1+x_2=3\) and \(x_2+x_3=1\).`,
      [S`Normals \((1,1,0)\) and \((0,1,1)\): dot product 1, each norm \(\sqrt2\).`, S`\(\cos\theta=\tfrac12\).`],
      S`\(60^\circ\)`],
  ]),

  practice([
    q("d", S`The plane through \((1,2,-1)\) with normal \((3,0,2)\) is \(3x_1+2x_3=d\). Find \(d\).`, num(1),
      "d = n · p.", [S`\(3(1)+0(2)+2(-1)\).`], S`\(1\)`),
    q("normal", S`Give a normal vector to \(\vec x=(0,1,1)+s(1,0,2)+t(0,1,-1)\).`, dir(-2, 1, 1),
      "Cross the two direction vectors.", [S`\((0\cdot(-1)-2\cdot1,\ 2\cdot0-1\cdot(-1),\ 1\cdot1-0\cdot0)\).`], S`\((-2,1,1)\)`),
    q("on the plane?", S`Is \((3,1,2)\) on \(2x_1-4x_2+x_3=4\)?`, choice(["yes", "no", "only if the normal is a unit vector", "it is the normal"], 0),
      "Substitute.", [S`\(6-4+2=4\) ✓.`], "yes"),
    q("perpendicular planes", S`Find \(k\) so that \(2x_1+kx_2-x_3=5\) and \(x_1+3x_2+4x_3=0\) are perpendicular.`, num(2 / 3, 0.001),
      "Normals must be orthogonal.", [S`\(2+3k-4=0\).`], S`\(\tfrac23\)`),
    q("intercept", S`Find the \(x_3\)-intercept of \(4x_1-2x_2+5x_3=20\).`, num(4),
      "Set x₁ = x₂ = 0.", [S`\(5x_3=20\).`], S`\(4\)`),
  ]),

  ...hard([
    ["A plane containing a line and a point", S`Find the scalar equation of the plane containing the line \(\vec x=(1,-1,2)+t(2,0,1)\) and the point \(Q(3,2,1)\).`,
      [S`Directions in the plane: \(\vec u=(2,0,1)\) and \(\vec v=\overrightarrow{PQ}=(2,3,-1)\) with \(P(1,-1,2)\).`, S`\(\vec n=\vec u\times\vec v=(0\cdot(-1)-1\cdot3,\ 1\cdot2-2\cdot(-1),\ 2\cdot3-0\cdot2)=(-3,4,6)\).`, S`\(d=\vec n\cdot\vec p=-3-4+12=5\). Check with \(Q\): \(-9+8+6=5\) ✓.`],
      S`\(-3x_1+4x_2+6x_3=5\)`],
    ["Where two planes meet", S`Find vector equations of the line of intersection of \(x_1+x_2+x_3=6\) and \(x_1-x_2+2x_3=1\).`,
      [S`Direction: \(\vec n_1\times\vec n_2=(1,1,1)\times(1,-1,2)=(1\cdot2-1\cdot(-1),\ 1\cdot1-1\cdot2,\ 1\cdot(-1)-1\cdot1)=(3,-1,-2)\).`, S`A point: set \(x_3=0\); then \(x_1+x_2=6\), \(x_1-x_2=1\), so \(x_1=3.5\), \(x_2=2.5\).`, S`Check \((3.5,2.5,0)\) in both: \(6\) ✓ and \(1\) ✓.`],
      S`\(\vec x=(3.5,2.5,0)+t(3,-1,-2)\)`,
      vfig(scene3(5, { polys: [patch3([2, 3, 1], [1, -1, 0], [1, 0, -1], 1.4, "#dbeafe", "blue", 0.6), patch3([2, 3, 1], [1, -1 / 3, -2 / 3], [1, 1, 0], 1.2, "#fde68a", "amber", 0.6)], segs: [line3([2, 3, 1], [3, -1, -2], -0.7, 0.7, "red", 3)] }))],
  ], [
    q("hard", S`The plane through \((1,1,1)\) parallel to \(2x_1-x_2+3x_3=10\) is \(2x_1-x_2+3x_3=d\). Find \(d\).`, num(4),
      "Same normal, new point.", [S`\(2-1+3\).`], S`\(4\)`),
    q("hard", S`The plane through \(A(2,0,1)\), \(B(1,3,0)\), \(C(0,1,2)\) is \(4x_1+3x_2+5x_3=d\). Find \(d\).`, num(13),
      "Substitute a point.", [S`\(\overrightarrow{AB}\times\overrightarrow{AC}=(4,3,5)\).`, S`\(d=8+0+5\).`], S`\(13\)`),
    q("hard", S`Find the angle (degrees, 1 decimal) between \(x_1+2x_2+2x_3=1\) and \(4x_1-3x_3=7\).`, num(82.3, 0.06),
      "Acute angle: use |n₁ · n₂|.", [S`\(|(1,2,2)\cdot(4,0,-3)|=2\); norms 3 and 5.`, S`\(\cos\theta=\tfrac2{15}\).`], S`\(82.3\)`),
  ]),

  wrapUp({
    qas: [
      ["How do I read a normal from 3x₁ − x₂ + 5x₃ = 2?", "The coefficients: n = (3, −1, 5)."],
      ["How do I turn a vector equation into a scalar one?", "Cross the two direction vectors to get n, then d = n · p."],
      ["How do I turn a scalar equation into a vector one?", "Solve for one variable and let the other two be the parameters s and t."],
      ["When are two planes parallel?", "When their normals are parallel; if the equations are also multiples (including d), the planes coincide."],
      ["Why is a line in ℝ² a 'hyperplane'?", "It is the solution set of one linear equation a₁x₁ + a₂x₂ = d, just as a plane is in ℝ³."],
    ],
    summary: [
      "n · (x − p) = 0 ⇔ n₁x₁ + n₂x₂ + n₃x₃ = d, d = n · p.",
      "Normal = coefficients; n = u × v from a vector equation.",
      "Parallel planes: parallel normals. Perpendicular planes: orthogonal normals.",
      "Two planes meet along a line with direction n₁ × n₂.",
    ],
    next: "1.7 projects vectors onto lines and planes, giving the shortest distance from a point to a line or plane.",
  }),
];
