// MPM2D 2.5 — Verifying Geometric Properties (self-study format): which tool proves which property,
// classifying triangles and quadrilaterals on a grid, diagonals, and the midsegment of a triangle
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice } from "./lib.mjs";
import { plane } from "../mth1w-ch4/figs4.mjs";

export const TITLE = "2.5 Verifying Geometric Properties";

export const blocks = () => [
  intro({
    icon: "✅",
    title: "Verifying Geometric Properties",
    overview: String.raw`A shape that <em>looks</em> like a square on a grid might not be one. Analytic geometry lets you prove it with three tools: slope (parallel and perpendicular sides), length (equal sides) and midpoint (bisecting segments). In this lesson you will classify triangles and quadrilaterals from their vertices, test properties of diagonals, and verify a property of the segment joining the midpoints of two sides of a triangle.`,
    goals: [
      "choose slope, length or midpoint to verify a property;",
      "classify a triangle as scalene, isosceles or equilateral, and test for a right angle;",
      "classify a quadrilateral (parallelogram, rectangle, rhombus, square, trapezoid, kite);",
      "verify properties of diagonals;",
      "verify that a midsegment is parallel to the third side and half as long.",
    ],
    curriculum: "AG3 (verify geometric properties of triangles and quadrilaterals using slope, length and midpoint)",
    prior: [
      [String.raw`Slopes \(\frac12\) and \(-2\): relationship?`, "Perpendicular (product −1)."],
      [String.raw`Length from \((0,0)\) to \((3,4)\)?`, String.raw`\(5\).`],
      [String.raw`Midpoint of \((-2,6)\) and \((4,0)\)?`, String.raw`\((1,3)\).`],
    ],
    words: [
      ["Parallelogram", "both pairs of opposite sides parallel", ""],
      ["Rhombus", "four equal sides", ""],
      ["Rectangle", "parallelogram with a right angle", ""],
      ["Midsegment", "joins the midpoints of two sides of a triangle", ""],
    ],
  }),

  section("📌 Which tool proves what?", String.raw`
  ${table(["To show…", "Use", "Test"], [
    ["sides are parallel", "slope", "equal slopes"],
    ["sides are perpendicular (a right angle)", "slope", "slopes multiply to −1 (or one horizontal, one vertical)"],
    ["sides are equal", "length", "equal lengths (compare squared lengths to avoid roots)"],
    ["segments bisect each other", "midpoint", "same midpoint"],
  ])}
  ${keyIdea(String.raw`State the property you are testing, show the calculation for every side or diagonal you need, and finish with a sentence: “Since …, the quadrilateral is a rectangle.” A picture alone is not a proof.`)}`),

  section("📌 Explore", String.raw`<p>Pick a shape and read the slopes and lengths. Then move the last vertex: watch which properties break and how the verdict changes.</p>`),

  widget("shapeProver", { init: 0 }),

  section("📌 The quadrilateral family", String.raw`
  <ul>
    <li><strong>Parallelogram</strong>: opposite sides parallel (and equal); diagonals bisect each other.</li>
    <li><strong>Rectangle</strong>: a parallelogram with a right angle; diagonals are equal.</li>
    <li><strong>Rhombus</strong>: four equal sides; diagonals are perpendicular.</li>
    <li><strong>Square</strong>: both a rectangle and a rhombus.</li>
    <li><strong>Trapezoid</strong>: exactly one pair of parallel sides. <strong>Kite</strong>: two pairs of equal adjacent sides.</li>
  </ul>
  ${watchOut([
    "Opposite sides of ABCD are AB and CD, BC and DA — not AB and BC.",
    "Equal slopes alone do not make a square; you also need equal sides and a right angle.",
    "Compare squared lengths (40 and 40) to avoid square-root rounding.",
    "Prove the most specific name you can: a square is also a rectangle, rhombus and parallelogram.",
  ])}`),

  examples([
    ["Classifying a triangle", String.raw`Classify \(\triangle ABC\) with \(A(-3,1)\), \(B(1,5)\), \(C(5,-3)\) by its sides, and test for a right angle.`,
      [String.raw`\(AB^2=4^2+4^2=32\), \(BC^2=4^2+(-8)^2=80\), \(CA^2=(-8)^2+4^2=80\).`, String.raw`Two sides equal (\(BC=CA=\sqrt{80}\)): isosceles.`, String.raw`Slopes: \(AB=1\), \(BC=-2\), \(CA=-\frac12\). No pair multiplies to \(-1\), so there is no right angle.`],
      "isosceles, not right-angled"],
    ["A right angle", String.raw`Show that \(\triangle PQR\) with \(P(-2,-1)\), \(Q(2,1)\), \(R(0,5)\) has a right angle.`,
      [String.raw`\(m_{PQ}=\frac{1-(-1)}{2-(-2)}=\frac12\).`, String.raw`\(m_{QR}=\frac{5-1}{0-2}=-2\).`, String.raw`\(\frac12\times(-2)=-1\), so \(PQ\perp QR\).`],
      String.raw`right angle at \(Q\)`],
    ["Proving a square", String.raw`Prove that \(KLMN\) with \(K(-4,0)\), \(L(2,-2)\), \(M(4,4)\), \(N(-2,6)\) is a square.`,
      [String.raw`Slopes: \(KL=-\frac13\), \(LM=3\), \(MN=-\frac13\), \(NK=3\). Opposite sides parallel: parallelogram.`, String.raw`\(-\frac13\times3=-1\): adjacent sides perpendicular, so a rectangle.`, String.raw`\(KL^2=6^2+2^2=40\), \(LM^2=2^2+6^2=40\): adjacent sides equal, so all four sides are equal.`, "A rectangle with four equal sides is a square."],
      String.raw`\(KLMN\) is a square`,
      plane({ view: { xmin: -6, xmax: 6, ymin: -4, ymax: 8 }, segs: [{ pts: [[-4, 0], [2, -2], [4, 4], [-2, 6], [-4, 0]], color: "green" }], points: [{ x: -4, y: 0, label: "K", color: "blue" }, { x: 2, y: -2, label: "L", color: "blue" }, { x: 4, y: 4, label: "M", color: "blue" }, { x: -2, y: 6, label: "N", color: "blue" }], step: { x: 1, y: 1 } })],
    ["Diagonals of a rhombus", String.raw`\(DEFG\) has \(D(-1,-3)\), \(E(3,0)\), \(F(-1,3)\), \(G(-5,0)\). Show it is a rhombus and that its diagonals are perpendicular bisectors of each other.`,
      [String.raw`Each side: \(\sqrt{4^2+3^2}=5\) — four equal sides, so a rhombus.`, String.raw`Diagonal \(DF\) is vertical (\(x=-1\)); diagonal \(EG\) is horizontal (\(y=0\)): perpendicular.`, String.raw`Midpoint of \(DF\): \((-1,0)\); midpoint of \(EG\): \((-1,0)\). Same point: they bisect each other.`],
      "rhombus; the diagonals are perpendicular and share the midpoint (−1, 0)"],
    ["The midsegment of a triangle", String.raw`In \(\triangle ABC\) with \(A(-4,-2)\), \(B(2,6)\), \(C(8,0)\), \(M\) and \(N\) are the midpoints of \(AB\) and \(AC\). Show that \(MN\parallel BC\) and \(MN=\frac12BC\).`,
      [String.raw`\(M=(-1,2)\), \(N=(2,-1)\).`, String.raw`\(m_{MN}=\frac{-1-2}{2-(-1)}=-1\); \(m_{BC}=\frac{0-6}{8-2}=-1\): parallel.`, String.raw`\(MN=\sqrt{3^2+3^2}=\sqrt{18}\); \(BC=\sqrt{6^2+6^2}=\sqrt{72}=2\sqrt{18}\). So \(MN=\frac12BC\).`],
      String.raw`\(MN\parallel BC\) and \(MN=\tfrac12BC\)`,
      plane({ view: { xmin: -6, xmax: 10, ymin: -4, ymax: 8 }, segs: [{ pts: [[-4, -2], [2, 6], [8, 0], [-4, -2]], color: "gray" }, { pts: [[-1, 2], [2, -1]], color: "red" }, { pts: [[2, 6], [8, 0]], color: "blue" }], points: [{ x: -1, y: 2, label: "M", color: "red" }, { x: 2, y: -1, label: "N", color: "red" }, { x: -4, y: -2, label: "A", color: "gray" }, { x: 2, y: 6, label: "B", color: "gray" }, { x: 8, y: 0, label: "C", color: "gray" }], step: { x: 1, y: 1 } })],
  ]),

  practice([
    q("tools", "Two sides have slopes whose product is −1. The sides are…", choice(["perpendicular", "parallel", "equal in length", "bisecting each other"], 0),
      "Negative reciprocals.", ["Product −1 means a right angle."], "perpendicular"),
    q("length", String.raw`Find the length of \(AB\) with \(A(1,2)\), \(B(4,6)\).`, num(5),
      "Δx = 3, Δy = 4.", [String.raw`\(\sqrt{9+16}=5\).`], String.raw`\(5\)`),
    q("parallelogram", String.raw`\(ABCD\) is a parallelogram with \(A(0,0)\), \(B(5,1)\), \(C(7,5)\). What is the \(x\)-coordinate of \(D\)?`, num(2),
      "The diagonals share a midpoint, so D = A + C − B.", [String.raw`\(0+7-5=2\) (and \(y=0+5-1=4\)).`], String.raw`\(2\)`),
    q("slopes", String.raw`What is the product of the slopes \(\frac34\) and \(-\frac43\)?`, num(-1),
      "Multiply.", [String.raw`\(\frac34\times\left(-\frac43\right)=-1\).`], String.raw`\(-1\)`),
    q("classify", "A quadrilateral has four equal sides but no right angles. It is a…", choice(["rhombus", "square", "rectangle", "trapezoid"], 0),
      "Equal sides, no right angle.", ["A square would need right angles."], "rhombus"),
  ]),

  wrapUp({
    qas: [
      ["Why compare squared lengths?", "Squared lengths are whole numbers on a grid, so equal means exactly equal, with no rounding."],
      ["Is one right angle enough for a rectangle?", "Only if you already know it is a parallelogram. Then all four angles are right angles."],
      ["How do I prove a parallelogram fastest?", "Show both pairs of opposite sides have equal slopes, or show the diagonals have the same midpoint."],
      ["What is the difference between a rhombus and a square?", "Both have four equal sides; a square also has right angles. A rhombus's diagonals are perpendicular; a square's are also equal."],
      ["Why does the midsegment result matter?", "It is true for every triangle, and analytic geometry lets you verify it with any coordinates."],
    ],
    summary: [
      "Slope → parallel or perpendicular; length → equal sides; midpoint → bisecting.",
      "Show every needed calculation, then conclude in words.",
      "Square = rectangle + rhombus; parallelogram diagonals bisect each other.",
      "A midsegment is parallel to the third side and half its length.",
    ],
    next: "2.6 combines all these tools — including the shortest distance from a point to a line — to solve problems.",
  }),
];
