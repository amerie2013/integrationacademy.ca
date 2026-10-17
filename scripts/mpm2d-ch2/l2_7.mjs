// MPM2D 2.7 — Chapter 2 Review (NEW lesson, placed after 2.6)
import { intro, section, keyIdea, widget, examples, practice, wrapUp, table, q, num, choice } from "./lib.mjs";
import { plane } from "../mth1w-ch4/figs4.mjs";

export const TITLE = "2.7 Chapter 2 Review";
export const NEW = { id: "2d1e7c1a-0a17-4d1e-9c17-d1a9f0000207", position: 13 };

export const blocks = () => [
  intro({
    icon: "🧩",
    title: "Chapter 2 Review — Analytic Geometry",
    overview: String.raw`This page pulls the chapter together before the test: each lesson's key idea on one screen, questions where you choose the right tool, multi-step problems, mixed practice and a readiness checklist. Work through it after 2.1–2.6 and return to any lesson where you get stuck.`,
    goals: [
      "recall the key formula and the common mistake of each lesson;",
      "choose the right tool (slope, midpoint, length, equation, intersection);",
      "solve multi-step analytic-geometry problems;",
      "check your readiness for the chapter test.",
    ],
    curriculum: "AG2, AG3 (whole chapter)",
    prior: [
      [String.raw`Midpoint of \((-4,2)\) and \((6,8)\)?`, String.raw`\((1,5)\).`],
      [String.raw`Length from \((1,1)\) to \((4,5)\)?`, String.raw`\(5\).`],
      [String.raw`Radius of \(x^2+y^2=36\)?`, String.raw`\(6\).`],
    ],
    words: [
      ["Midpoint", "average of the coordinates", "\\(\\left(\\frac{x_1+x_2}{2},\\frac{y_1+y_2}{2}\\right)\\)"],
      ["Length", "Pythagoras on the grid", "\\(\\sqrt{\\Delta x^2+\\Delta y^2}\\)"],
      ["Circle", "centre (0, 0), radius r", "\\(x^2+y^2=r^2\\)"],
      ["Perpendicular", "slopes multiply to −1", ""],
    ],
  }),

  section("📌 The chapter on one page", table(["Lesson", "Key idea", "Typical example", "Watch out"], [
    ["2.1 Midpoint", "average the coordinates; missing endpoint 2M − A", "\\((-3,5),(7,-1)\\to(2,2)\\)", "add, then divide by 2"],
    ["2.2 Length", "\\(\\sqrt{(x_2-x_1)^2+(y_2-y_1)^2}\\)", "\\((-2,1),(4,9)\\to10\\)", "square negatives correctly"],
    ["2.3 Circle", "\\(x^2+y^2=r^2\\); compare \\(a^2+b^2\\) with \\(r^2\\)", "\\((-5,12)\\to r=13\\)", "radius is √(r²)"],
    ["2.4 Triangle lines", "median: midpoint; altitude: perpendicular; right bisector: both", "centroid, circumcentre, orthocentre", "use the opposite side's slope"],
    ["2.5 Properties", "slope → parallel/perpendicular; length → equal; midpoint → bisect", "prove a square", "show every side"],
    ["2.6 Problems", "point to line: perpendicular → intersection → length", "shortest road to a highway", "round only at the end"],
  ])),

  section("📌 Which tool?", keyIdea(String.raw`<strong>Parallel or perpendicular?</strong> slope. <strong>Equal sides, perimeter, distance?</strong> length. <strong>Halfway, centre of a diameter, bisecting?</strong> midpoint. <strong>Where do two lines meet?</strong> solve a system. <strong>On a circle?</strong> compare \(x^2+y^2\) with \(r^2\).`)),

  practice([
    q("tool", "To show that two diagonals bisect each other, use…", choice(["midpoints", "slopes", "lengths", "the circle equation"], 0),
      "Bisect = same midpoint.", ["If both diagonals have the same midpoint, they bisect each other."], "midpoints"),
    q("tool", "The point equidistant from all three vertices of a triangle is the…", choice(["circumcentre", "centroid", "orthocentre", "midpoint of the longest side"], 0),
      "It is the centre of the circle through the vertices.", ["Right bisectors meet at the circumcentre."], "circumcentre"),
    q("tool", "To show a triangle has a right angle, the quickest test uses…", choice(["slopes", "midpoints", "the circle equation", "the perimeter"], 0),
      "Perpendicular sides.", ["Slopes multiplying to −1 show a right angle."], "slopes"),
    q("circle", String.raw`Which is the equation of the circle centred at the origin with radius \(\sqrt{10}\)?`, choice(["x² + y² = 10", "x² + y² = 100", "x² + y² = √10", "x + y = 10"], 0),
      "Square the radius.", [String.raw`\(r^2=(\sqrt{10})^2=10\).`], String.raw`\(x^2+y^2=10\)`),
    q("distance", "The shortest distance from a point to a line is measured…", choice(["along the perpendicular to the line", "horizontally", "vertically", "to the y-intercept"], 0),
      "Right angle.", ["Any other segment is a longer hypotenuse."], "along the perpendicular"),
  ]),

  examples([
    ["Right triangle and area", String.raw`Show that \(\triangle ABC\) with \(A(-3,-1)\), \(B(3,2)\), \(C(1,6)\) is right-angled and find its area.`,
      [String.raw`\(m_{AB}=\frac{3}{6}=\frac12\), \(m_{BC}=\frac{4}{-2}=-2\): product \(-1\), right angle at \(B\).`, String.raw`Legs: \(AB=\sqrt{36+9}=\sqrt{45}\), \(BC=\sqrt{4+16}=\sqrt{20}\).`, String.raw`Area \(=\frac12\sqrt{45}\sqrt{20}=\frac12\sqrt{900}=\frac12(30)=15\).`],
      String.raw`right angle at \(B\); area \(15\) square units`],
    ["Three points on a circle", String.raw`Show that \(P(5,0)\), \(Q(-3,4)\) and \(R(0,-5)\) lie on one circle centred at the origin. What is the circumcentre of \(\triangle PQR\)?`,
      [String.raw`\(25+0=25\), \(9+16=25\), \(0+25=25\): all on \(x^2+y^2=25\).`, "The circumcentre is equidistant from the vertices — that is the centre of this circle."],
      String.raw`all on \(x^2+y^2=25\); circumcentre \((0,0)\)`,
      plane({ view: { xmin: -7, xmax: 7, ymin: -7, ymax: 7 }, curves: [{ f: (x) => Math.sqrt(Math.max(0, 25 - x * x)), a: -5, b: 5, color: "violet" }, { f: (x) => -Math.sqrt(Math.max(0, 25 - x * x)), a: -5, b: 5, color: "violet" }], segs: [{ pts: [[5, 0], [-3, 4], [0, -5], [5, 0]], color: "blue" }], points: [{ x: 5, y: 0, label: "P", color: "blue" }, { x: -3, y: 4, label: "Q", color: "blue" }, { x: 0, y: -5, label: "R", color: "blue" }], step: { x: 1, y: 1 } })],
    ["Length of a median", String.raw`Find the length of the median from \(P\) in \(\triangle PQR\) with \(P(-2,1)\), \(Q(4,5)\), \(R(6,-3)\).`,
      [String.raw`Midpoint of \(QR\): \(\left(\frac{4+6}{2},\frac{5+(-3)}{2}\right)=(5,1)\).`, String.raw`The median from \((-2,1)\) to \((5,1)\) is horizontal: length \(5-(-2)=7\).`],
      String.raw`\(7\) units`],
    ["Distance from a point to a line", String.raw`Find the distance from \(P(-1,-2)\) to the line \(x+3y=10\).`,
      [String.raw`Line: \(y=-\frac13x+\frac{10}{3}\); perpendicular slope \(3\). Through \(P\): \(y=3x+1\).`, String.raw`Solve: \(3x+1=-\frac13x+\frac{10}{3}\Rightarrow9x+3=-x+10\Rightarrow x=0.7\), \(y=3.1\).`, String.raw`\(PF=\sqrt{1.7^2+5.1^2}=\sqrt{28.9}\approx5.38\).`],
      String.raw`\(\approx5.38\) units`],
    ["Find and classify", String.raw`\(ABCD\) is a parallelogram with \(A(-2,-1)\), \(B(3,1)\), \(C(5,6)\). Find \(D\) and classify \(ABCD\) as precisely as possible.`,
      [String.raw`Diagonals share a midpoint: \(D=A+C-B=(0,4)\).`, String.raw`\(AB^2=5^2+2^2=29\), \(BC^2=2^2+5^2=29\): adjacent sides equal, so all four sides are equal.`, String.raw`\(m_{AB}=\frac25\), \(m_{BC}=\frac52\): product \(1\ne-1\), so no right angle.`],
      String.raw`\(D(0,4)\); \(ABCD\) is a rhombus (not a square)`],
  ]),

  section("📌 Mixed review", String.raw`<p>Each question uses one of the chapter's formulas.</p>`),

  practice([
    q("midpoint", String.raw`What is the \(x\)-coordinate of the midpoint of \((-7,4)\) and \((3,-8)\)?`, num(-2),
      "Average.", [String.raw`\(\frac{-7+3}{2}=-2\).`], String.raw`\(-2\)`),
    q("length", String.raw`Find the length from \((-2,-3)\) to \((4,5)\).`, num(10),
      "Δx = 6, Δy = 8.", [String.raw`\(\sqrt{36+64}=10\).`], String.raw`\(10\)`),
    q("circle", String.raw`A circle centred at the origin passes through \((-9,12)\). What is its radius?`, num(15),
      "Distance from the origin.", [String.raw`\(\sqrt{81+144}=\sqrt{225}\).`], String.raw`\(15\)`),
    q("right bisector", String.raw`What is the slope of the right bisector of the segment from \((1,1)\) to \((5,3)\)?`, num(-2),
      "Negative reciprocal of the segment's slope.", [String.raw`Segment slope \(\frac24=\frac12\); perpendicular \(-2\).`], String.raw`\(-2\)`),
    q("distance", String.raw`What is the shortest distance from \((2,9)\) to the line \(y=1\)?`, num(8),
      "Vertical distance to a horizontal line.", [String.raw`\(9-1=8\).`], String.raw`\(8\)`),
  ]),

  section("📌 Am I ready for the test?", String.raw`<ul style="list-style:none;padding-left:0;">
    ${[
      ["2.1", "I can find midpoints and missing endpoints, and the centre of a circle from a diameter."],
      ["2.2", "I can find lengths exactly and as decimals, perimeters, and unknown coordinates."],
      ["2.3", "I can write x² + y² = r², find the radius, and test points."],
      ["2.4", "I can write equations of medians, right bisectors and altitudes and find where they meet."],
      ["2.5", "I can classify triangles and quadrilaterals and verify properties."],
      ["2.6", "I can find the distance from a point to a line and solve multi-step problems."],
    ].map(([c, t]) => `<li style="margin:6px 0;"><label><input type="checkbox"> <strong>${c}</strong> — ${t}</label></li>`).join("")}
  </ul>`),

  widget("shapeProver", { init: 2 }),

  wrapUp({
    qas: [
      ["How should I study for this test?", "Do the mixed review without notes. For each mistake, return to that lesson's explorer and practice set, then try the Level 3 worksheet problems for your two weakest lessons."],
      ["What are the most common mistakes?", "Subtracting instead of adding for midpoints, sign errors when squaring, using r² as the radius, mixing up median and altitude, and not concluding a proof in words."],
      ["How much work should I show in a proof?", "Every slope or length you use, the comparison (equal, product −1), and a final sentence naming the property."],
      ["Should I leave answers as square roots?", "Exact roots are best unless the question asks for decimals. When comparing lengths, a decimal helps."],
      ["How does this chapter connect to later work?", "Distance and midpoint return in Grade 11 and 12 (circles with any centre, vectors); the circle equation leads to the circles of MCR3U and MHF4U."],
    ],
    summary: [
      "Midpoint: average. Length: Pythagoras. Circle: x² + y² = r².",
      "Medians, right bisectors and altitudes: midpoints and perpendicular slopes.",
      "Proofs: slope, length, midpoint — then a sentence.",
      "Point to line: perpendicular, intersection, length.",
    ],
    next: "Write the Chapter 2 test. Chapter 3 turns to polynomials and factoring.",
  }),
];
