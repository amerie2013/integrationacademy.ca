// MPM2D 2.4 — Medians, Right Bisectors & Altitudes (self-study format): definitions, the recipe for each
// equation, where each set of three lines meets (centroid, circumcentre, orthocentre)
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice } from "./lib.mjs";
import { plane } from "../mth1w-ch4/figs4.mjs";

export const TITLE = "2.4 Medians, Right Bisectors & Altitudes";
const TRI = [[-2, 4], [6, 2], [0, -4], [-2, 4]];
const triPts = [{ x: -2, y: 4, label: "A(−2, 4)", color: "blue" }, { x: 6, y: 2, label: "B(6, 2)", color: "blue" }, { x: 0, y: -4, label: "C(0, −4)", color: "blue" }];
const VIEW = { xmin: -5, xmax: 9, ymin: -6, ymax: 7 };

export const blocks = () => [
  intro({
    icon: "📐",
    title: "Medians, Right Bisectors & Altitudes",
    overview: String.raw`Every triangle has three special kinds of lines: medians, right bisectors and altitudes. Each is built from two ideas you already have — midpoints (2.1) and perpendicular slopes (1.1). In this lesson you will learn what each line is, write its equation, and find where three of them meet by solving a linear system (Chapter 1).`,
    goals: [
      "describe a median, a right bisector and an altitude of a triangle;",
      "find the equation of a median using a midpoint;",
      "find the equation of a right bisector using a midpoint and a perpendicular slope;",
      "find the equation of an altitude using a perpendicular slope;",
      "find the centroid, circumcentre or orthocentre by solving a system.",
    ],
    curriculum: "AG3 (solve problems using slope, length and midpoint, including the equations of medians, right bisectors and altitudes)",
    prior: [
      [String.raw`Midpoint of \((6,2)\) and \((0,-4)\)?`, String.raw`\((3,-1)\).`],
      [String.raw`Slope perpendicular to \(-\tfrac14\)?`, String.raw`\(4\).`],
      [String.raw`Line with slope \(4\) through \((2,3)\)?`, String.raw`\(y=4x-5\).`],
    ],
    words: [
      ["Median", "from a vertex to the midpoint of the opposite side", ""],
      ["Right bisector", "perpendicular to a side, through its midpoint", ""],
      ["Altitude", "from a vertex, perpendicular to the opposite side", ""],
      ["Negative reciprocal", "the slope of a perpendicular line", "\\(\\tfrac23\\to-\\tfrac32\\)"],
    ],
  }),

  section("📌 Three lines, three recipes", String.raw`
  ${table(["Line", "Passes through", "Slope", "Needs"], [
    ["Median from A", "A and the midpoint of BC", "from those two points", "midpoint"],
    ["Right bisector of BC", "the midpoint of BC", "negative reciprocal of BC's slope", "midpoint + perpendicular"],
    ["Altitude from A", "A", "negative reciprocal of BC's slope", "perpendicular"],
  ])}
  ${keyIdea(String.raw`Every recipe ends the same way: a point and a slope give \(y=mx+b\) (find \(b\) by substituting the point). Write the answer in slope-intercept or standard form.`)}`),

  section("📌 Explore", String.raw`<p>Choose a triangle and a kind of line. Pick the vertex or side and read its equation. Tick <em>show all three</em>: the three lines of each kind always meet at one point.</p>`),

  widget("triangleLines", { init: "median" }),

  section("📌 Where three lines meet", String.raw`
  <ul>
    <li>The three <strong>medians</strong> meet at the <strong>centroid</strong> — the balance point of the triangle. It is the average of the three vertices.</li>
    <li>The three <strong>right bisectors</strong> meet at the <strong>circumcentre</strong> — the same distance from all three vertices, so it is the centre of the circle through them.</li>
    <li>The three <strong>altitudes</strong> meet at the <strong>orthocentre</strong>.</li>
  </ul>
  <p>To find one of these points, write the equations of <em>two</em> of the lines and solve the system. The third line passes through the same point — a good check.</p>
  ${watchOut([
    "A median goes to the midpoint; an altitude meets the side at a right angle — usually not at the midpoint.",
    "A right bisector need not pass through a vertex.",
    "Use the slope of the opposite side, then take the negative reciprocal.",
    "For an obtuse triangle, some altitudes meet the opposite side extended, outside the triangle.",
  ])}`),

  examples([
    ["A median", String.raw`For \(\triangle ABC\) with \(A(-2,4)\), \(B(6,2)\), \(C(0,-4)\), find the equation of the median from \(A\).`,
      [String.raw`Midpoint of \(BC\): \(\left(\frac{6+0}{2},\frac{2+(-4)}{2}\right)=(3,-1)\).`, String.raw`Slope from \(A(-2,4)\) to \((3,-1)\): \(\frac{-1-4}{3-(-2)}=\frac{-5}{5}=-1\).`, String.raw`\(4=-1(-2)+b\Rightarrow b=2\).`],
      String.raw`\(y=-x+2\)`,
      plane({ view: VIEW, segs: [{ pts: TRI, color: "gray" }, { pts: [[-2, 4], [3, -1]], color: "blue" }], points: [...triPts, { x: 3, y: -1, label: "(3, −1)", color: "green" }], step: { x: 1, y: 1 } })],
    ["A right bisector", String.raw`For the same triangle, find the right bisector of \(AB\).`,
      [String.raw`Midpoint of \(AB\): \(\left(\frac{-2+6}{2},\frac{4+2}{2}\right)=(2,3)\).`, String.raw`Slope of \(AB\): \(\frac{2-4}{6-(-2)}=-\frac14\); perpendicular slope \(4\).`, String.raw`\(3=4(2)+b\Rightarrow b=-5\).`],
      String.raw`\(y=4x-5\)`],
    ["An altitude", String.raw`For the same triangle, find the altitude from \(C\).`,
      [String.raw`It is perpendicular to \(AB\) (slope \(-\frac14\)), so its slope is \(4\).`, String.raw`It passes through \(C(0,-4)\), so \(b=-4\).`],
      String.raw`\(y=4x-4\) — parallel to the right bisector of \(AB\), as both are perpendicular to \(AB\)`],
    ["When two lines coincide", String.raw`Show that the altitude from \(A\) is the same line as the median from \(A\), and explain why.`,
      [String.raw`Slope of \(BC\): \(\frac{-4-2}{0-6}=1\); altitude slope \(-1\) through \(A(-2,4)\): \(y=-x+2\).`, String.raw`That is exactly the median from Example 1.`, String.raw`\(AB=\sqrt{8^2+(-2)^2}=\sqrt{68}\) and \(AC=\sqrt{2^2+(-8)^2}=\sqrt{68}\): the triangle is isosceles with \(AB=AC\), so the line from \(A\) to the midpoint of \(BC\) is also perpendicular to \(BC\).`],
      String.raw`both are \(y=-x+2\) because \(AB=AC\)`],
    ["The circumcentre", String.raw`Find the circumcentre of the same triangle.`,
      [String.raw`Right bisector of \(AB\): \(y=4x-5\) (Example 2).`, String.raw`Right bisector of \(BC\): through the midpoint \((3,-1)\) with slope \(-1\): \(y=-x+2\).`, String.raw`Solve: \(4x-5=-x+2\Rightarrow x=\frac75\), \(y=\frac35\).`, String.raw`Check: from \(\left(\frac75,\frac35\right)\), the squared distance to \(A\) is \(\left(\frac{17}{5}\right)^2+\left(\frac{17}{5}\right)^2\) and to \(C\) is \(\left(\frac75\right)^2+\left(\frac{23}{5}\right)^2\): both \(\frac{578}{25}\) ✓`],
      String.raw`\(\left(\tfrac75,\tfrac35\right)\)`,
      plane({ view: VIEW, segs: [{ pts: TRI, color: "gray" }], lines: [{ m: 4, b: -5, color: "green" }, { m: -1, b: 2, color: "green" }, { m: 0.25, b: 0.25, color: "green", dash: true }], points: [...triPts, { x: 1.4, y: 0.6, label: "(7/5, 3/5)", color: "red" }], step: { x: 1, y: 1 } })],
  ]),

  practice([
    q("midpoint", String.raw`In a triangle, \(B(4,-2)\) and \(C(-2,6)\). What is the \(x\)-coordinate of the midpoint of \(BC\)?`, num(1),
      "Average the x-coordinates.", [String.raw`\(\frac{4+(-2)}{2}=1\).`], String.raw`\(1\)`),
    q("median", String.raw`The median from \(A(-5,-4)\) goes to the midpoint \((1,2)\). What is its slope?`, num(1),
      "Slope between the two points.", [String.raw`\(\frac{2-(-4)}{1-(-5)}=\frac66\).`], String.raw`\(1\)`),
    q("altitude", String.raw`A side of a triangle has slope \(\frac23\). What is the slope of the altitude to that side? (decimal)`, num(-1.5),
      "Negative reciprocal.", [String.raw`\(-\frac32=-1.5\).`], String.raw`\(-1.5\)`),
    q("right bisector", String.raw`Find the \(y\)-intercept of the right bisector of the segment from \((0,0)\) to \((8,4)\).`, num(10),
      "Midpoint (4, 2); perpendicular slope −2.", [String.raw`\(2=-2(4)+b\Rightarrow b=10\).`], String.raw`\(10\)`),
    q("vocabulary", "The point where the three altitudes of a triangle meet is the…", choice(["orthocentre", "centroid", "circumcentre", "midpoint"], 0),
      "Altitudes → ortho (right angle).", ["Medians → centroid; right bisectors → circumcentre."], "orthocentre"),
  ]),

  wrapUp({
    qas: [
      ["How do I remember which line is which?", "Median → Midpoint (both start with M). Altitude → height, so it is perpendicular. Right bisector → right angle AND bisects, so it uses both."],
      ["Does a right bisector pass through a vertex?", "Only in special cases (for example the right bisector of the base of an isosceles triangle passes through the top vertex)."],
      ["Why find only two lines for the meeting point?", "Two lines determine one intersection. The third line is a check."],
      ["What is special about the circumcentre?", "It is the same distance from all three vertices, so a circle centred there passes through all three."],
      ["Can the orthocentre be outside the triangle?", "Yes — in an obtuse triangle. In a right triangle it is the vertex with the right angle."],
    ],
    summary: [
      "Median: vertex → midpoint of opposite side.",
      "Right bisector: through a midpoint, perpendicular to the side.",
      "Altitude: through a vertex, perpendicular to the opposite side.",
      "Medians meet at the centroid, right bisectors at the circumcentre, altitudes at the orthocentre — solve two equations to find it.",
    ],
    next: "2.5 uses slope, length and midpoint to prove what kind of triangle or quadrilateral a shape is.",
  }),
];
