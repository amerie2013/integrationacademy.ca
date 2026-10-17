// MPM2D 2.3 — Equation of a Circle (centre at the origin) (self-study format): deriving x² + y² = r²,
// radius from the equation or a point, on/inside/outside, points with a given x, a context problem
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, q, num, choice } from "./lib.mjs";
import { plane } from "../mth1w-ch4/figs4.mjs";

export const TITLE = "2.3 Equation of a Circle (centre at the origin)";
const circ = (r, color = "violet") => [{ f: (x) => Math.sqrt(Math.max(0, r * r - x * x)), a: -r, b: r, color }, { f: (x) => -Math.sqrt(Math.max(0, r * r - x * x)), a: -r, b: r, color }];

export const blocks = () => [
  intro({
    icon: "⭕",
    title: "Equation of a Circle (centre at the origin)",
    overview: String.raw`A circle is every point at the same distance — the radius — from its centre. When the centre is the origin, the length formula turns that description into a short equation: \(x^2+y^2=r^2\). In this lesson you will derive the equation, read the radius from it, test whether a point is on, inside or outside a circle, find points on a circle, and use circles to model real coverage areas.`,
    goals: [
      "derive the equation x² + y² = r² from the length formula;",
      "write the equation of a circle centred at the origin from its radius or a point on it;",
      "find the radius from an equation;",
      "decide whether a point is on, inside or outside a circle;",
      "find the points on a circle with a given x- or y-coordinate, and solve problems.",
    ],
    curriculum: "AG2 (develop the equation of a circle with centre (0, 0) and radius r, and solve problems)",
    prior: [
      [String.raw`Length from \((0,0)\) to \((6,8)\)?`, String.raw`\(10\).`],
      [String.raw`Solve \(y^2=36\).`, String.raw`\(y=6\) or \(y=-6\).`],
      [String.raw`\(\sqrt{20}\approx\)?`, String.raw`\(4.47\).`],
    ],
    words: [
      ["Circle", "all points a fixed distance from the centre", ""],
      ["Radius, r", "distance from the centre to the circle", ""],
      ["Diameter", "a chord through the centre; 2r long", ""],
      ["Chord", "a segment joining two points on a circle", ""],
    ],
  }),

  section("📌 Where the equation comes from", String.raw`
  <p>A point \((x,y)\) is on the circle with centre \((0,0)\) and radius \(r\) exactly when its distance from the origin is \(r\): \[\sqrt{(x-0)^2+(y-0)^2}=r\quad\Rightarrow\quad x^2+y^2=r^2.\]</p>
  ${plane({ view: { xmin: -7, xmax: 7, ymin: -7, ymax: 7 }, curves: circ(5), segs: [{ pts: [[0, 0], [3, 4]], color: "red" }, { pts: [[0, 0], [3, 0], [3, 4]], color: "gray" }], points: [{ x: 3, y: 4, label: "(3, 4)", color: "red" }], step: { x: 1, y: 1 } }, "3² + 4² = 25: the point (3, 4) is on x² + y² = 25.")}
  ${keyIdea(String.raw`The circle with centre \((0,0)\) and radius \(r\) is \(x^2+y^2=r^2\). The number on the right is \(r^2\), so the radius is its square root: \(x^2+y^2=49\) has \(r=7\).`)}`),

  section("📌 Explore", String.raw`<p>Change \(r^2\) and move the point P. The readout compares \(x^2+y^2\) with \(r^2\).</p>`),

  widget("circleLab", { init: 25 }),

  section("📌 On, inside or outside", String.raw`
  <p>For a point \((a,b)\), compute \(a^2+b^2\) (its squared distance from the centre):</p>
  <ul><li>\(a^2+b^2=r^2\): <strong>on</strong> the circle;</li><li>\(a^2+b^2t r^2\): <strong>inside</strong>;</li><li>\(a^2+b^2gt r^2\): <strong>outside</strong>.</li></ul>
  <p>To find points with a given \(x\), substitute it and solve for \(y\). There are usually <em>two</em> answers (above and below the \(x\)-axis), one if the line just touches the circle, and none if it misses.</p>
  ${watchOut([
    "The radius is √(r²), not r²: x² + y² = 64 has radius 8.",
    "Solving y² = 25 gives y = 5 and y = −5.",
    "Compare a² + b² with r², or √(a² + b²) with r — not a mixture.",
    "This equation works only for circles centred at the origin.",
  ])}`),

  examples([
    ["Writing the equation", String.raw`Write the equation of the circle with centre \((0,0)\) and radius \(7\).`,
      [String.raw`\(r^2=7^2=49\).`],
      String.raw`\(x^2+y^2=49\)`],
    ["A circle through a point", String.raw`A circle centred at the origin passes through \((-5,12)\). Find its equation and radius.`,
      [String.raw`\(r^2=(-5)^2+12^2=25+144=169\).`, String.raw`\(r=\sqrt{169}=13\).`],
      String.raw`\(x^2+y^2=169\); \(r=13\)`],
    ["Inside, on or outside?", String.raw`Is \((-4,8)\) on, inside or outside \(x^2+y^2=81\)?`,
      [String.raw`\((-4)^2+8^2=16+64=80\).`, String.raw`\(80t 81\).`],
      "inside (just barely)"],
    ["Points with a given x", String.raw`Find the points on \(x^2+y^2=34\) with \(x=-3\).`,
      [String.raw`\(9+y^2=34\Rightarrow y^2=25\).`, String.raw`\(y=5\) or \(y=-5\).`],
      String.raw`\((-3,5)\) and \((-3,-5)\)`,
      plane({ view: { xmin: -7, xmax: 7, ymin: -7, ymax: 7 }, curves: circ(Math.sqrt(34)), vlines: [{ x: -3, color: "gray", dash: true }], points: [{ x: -3, y: 5, label: "(−3, 5)", color: "red" }, { x: -3, y: -5, label: "(−3, −5)", color: "red" }], step: { x: 1, y: 1 } })],
    ["A sprinkler", String.raw`A lawn sprinkler at the origin waters everything within \(9\) m. Plants grow at \(A(-6,7)\) and \(B(2,-8)\) (metres). Which plants get water?`,
      [String.raw`Watered region: \(x^2+y^2\le81\).`, String.raw`\(A\): \(36+49=85gt 81\) — outside.`, String.raw`\(B\): \(4+64=68t 81\) — inside.`],
      String.raw`only \(B\) is watered`],
  ]),

  practice([
    q("equation", String.raw`A circle centred at the origin has radius \(11\). Its equation is \(x^2+y^2=r^2\). What is \(r^2\)?`, num(121),
      "Square the radius.", [String.raw`\(11^2=121\).`], String.raw`\(121\)`),
    q("radius", String.raw`What is the radius of \(x^2+y^2=144\)?`, num(12),
      "Take the square root.", [String.raw`\(\sqrt{144}=12\).`], String.raw`\(12\)`),
    q("through a point", String.raw`A circle centred at the origin passes through \((8,-6)\). What is its radius?`, num(10),
      "Distance from the origin.", [String.raw`\(\sqrt{64+36}=\sqrt{100}\).`], String.raw`\(10\)`),
    q("position", String.raw`Where is \((5,-5)\) compared with \(x^2+y^2=49\)?`, choice(["outside", "inside", "on the circle", "at the centre"], 0),
      "Compare 25 + 25 with 49.", [String.raw`\(50gt 49\).`], "outside"),
    q("points", String.raw`Find the positive \(y\)-value of the point on \(x^2+y^2=65\) with \(x=4\).`, num(7),
      "Substitute x = 4.", [String.raw`\(16+y^2=65\Rightarrow y^2=49\).`], String.raw`\(7\)`),
  ]),

  wrapUp({
    qas: [
      ["Why is there no x or y term without a square?", "The centre is (0, 0), so the distances are x − 0 and y − 0. Other centres (Grade 11) add more terms."],
      ["What if r² is not a perfect square?", String.raw`The radius is still \(\sqrt{r^2}\), e.g. \(x^2+y^2=20\) has \(r=\sqrt{20}\approx4.47\).`],
      ["How many points on a circle have x = 2?", "Usually two, one if x = ±r (the circle just touches that line), and none if |x| > r."],
      ["Is (0, 0) on the circle?", "No — the centre is inside the circle, at distance 0, not r."],
      ["Where are circles used?", "Coverage areas (cell towers, sprinklers, Wi-Fi), wheels and gears, and safety zones are all circles: inside means within range."],
    ],
    summary: [
      "Centre (0, 0), radius r: x² + y² = r².",
      "Radius = √(right side).",
      "Compare a² + b² with r²: equal on, less inside, greater outside.",
      "Substituting x gives up to two points on the circle.",
    ],
    next: "2.4 uses midpoints and slopes to build medians, right bisectors and altitudes.",
  }),
];
