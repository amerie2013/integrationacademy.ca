// IB AA SL 3.1 — The Gradient of a Line: rise over run, gradient as a rate of change, parallel and perpendicular lines
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, plane } from "./lib.mjs";

export const TITLE = "3.1 The Gradient of a Line";
export const ID = "27132c76-8aa4-4c02-9b74-dd686a856519";
const S = String.raw;
const P = (x, y, label, color = "blue") => ({ x, y, label, color });

export const blocks = () => [
  intro({
    icon: "📐",
    title: "The Gradient of a Line",
    overview: S`The gradient of a line measures how steep it is: how much \(y\) changes for each unit increase in \(x\). In a real situation the gradient is a rate — kilometres per hour, dollars per item, litres per minute. In this lesson you will find gradients from two points and from graphs, interpret them as rates of change, and use gradients to recognise parallel and perpendicular lines.`,
    goals: [
      "find the gradient of a line through two points, \\(m=\\dfrac{y_2-y_1}{x_2-x_1}\\);",
      "read a gradient from a graph and connect its sign to the direction of the line;",
      "interpret a gradient as a rate of change with units;",
      "use \\(m_1=m_2\\) for parallel lines and \\(m_1m_2=-1\\) for perpendicular lines;",
      "use gradients to show that points are collinear or that an angle is a right angle.",
    ],
    curriculum: "SL 2.1 (gradient of a line; parallel lines m₁ = m₂; perpendicular lines m₁ × m₂ = −1)",
    prior: [
      [S`Evaluate \(\dfrac{11-3}{5-1}\).`, S`\(2\).`],
      [S`What is the negative reciprocal of \(\frac34\)?`, S`\(-\frac43\).`],
      [S`Simplify \(\dfrac{-6}{-4}\).`, S`\(1.5\).`],
    ],
    words: [
      ["Gradient \\(m\\)", "rise ÷ run between two points on the line", "\\(m=2\\)"],
      ["Rise / run", "change in \\(y\\) / change in \\(x\\)", "rise 8, run 4"],
      ["Rate of change", "a gradient with units", "2 dollars per km"],
      ["Parallel", "same gradient", "\\(m_1=m_2\\)"],
      ["Perpendicular", "meeting at 90°: gradients multiply to −1", "\\(2\\times(-\\frac12)=-1\\)"],
    ],
  }),

  section("📌 Rise over run", S`
  <p>Between \((x_1,y_1)\) and \((x_2,y_2)\), the run is \(x_2-x_1\) and the rise is \(y_2-y_1\):</p>
  <p style="text-align:center">\(m=\dfrac{\text{rise}}{\text{run}}=\dfrac{y_2-y_1}{x_2-x_1}\).</p>
  ${plane({ view: { xmin: -1, xmax: 7, ymin: -1, ymax: 13 }, step: { x: 1, y: 1 }, lines: [{ m: 2, b: 1, color: "violet" }], tri: { x: 1, y: 3, run: 4, rise: 8 }, points: [P(1, 3, "(1, 3)"), P(5, 11, "(5, 11)", "red")] }, "From (1, 3) to (5, 11): run 4, rise 8, so m = 8/4 = 2")}
  ${plane({ view: { xmin: -5, xmax: 5, ymin: -5, ymax: 5 }, step: { x: 1, y: 1 }, lines: [{ m: 2, b: 0, color: "violet", label: "m = 2" }, { m: 0.5, b: 0, color: "blue", label: "m = 0.5" }, { m: 0, b: 0, color: "gray" }, { m: -1, b: 0, color: "red", label: "m = −1" }] }, "Positive m rises to the right, negative m falls, m = 0 is horizontal; larger |m| is steeper")}
  ${keyIdea(S`A vertical line has run 0, so its gradient does not exist. A horizontal line has rise 0, so its gradient is 0.`)}`),

  section("📌 Gradient as a rate, and parallel or perpendicular lines", S`
  <p>If a taxi fare rises from 8.50 for 2 km to 24.50 for 10 km, the gradient \(\frac{24.5-8.5}{10-2}=2\) means <em>2 dollars per kilometre</em>.</p>
  <p>Parallel lines have equal gradients. Perpendicular lines have gradients whose product is \(-1\): each is the <strong>negative reciprocal</strong> of the other.</p>
  ${plane({ view: { xmin: -5, xmax: 5, ymin: -5, ymax: 5 }, step: { x: 1, y: 1 }, lines: [{ m: 0.75, b: 1, color: "violet" }, { m: 0.75, b: -2, color: "violet", dash: true }, { m: -4 / 3, b: 0, color: "green" }] }, "Violet lines (m = 3/4) are parallel; the green line (m = −4/3) is perpendicular to both")}
  ${table(["Lines", "Gradients", "Test"], [["parallel", S`\(m_1=m_2\)`, S`\(\frac34\) and \(\frac34\)`], ["perpendicular", S`\(m_1m_2=-1\)`, S`\(\frac34\times\left(-\frac43\right)=-1\)`]])}
  ${watchOut([
    "Subtract in the same order on top and bottom: (y₂ − y₁)/(x₂ − x₁).",
    "The negative reciprocal of −2/5 is 5/2: flip AND change the sign.",
    "Read gradients from a graph using points where the line crosses grid corners exactly.",
    "Units: a gradient in context is (units of y) per (unit of x).",
  ])}`),

  section("📌 Explore", S`<p>Move the two points. The dashed triangle shows the run and the rise. Switch on a parallel or perpendicular line through the origin and check the gradient rule.</p>`),

  widget("ibGradient", { init: [-2, -1, 4, 3] }),

  examples([
    ["Level 1 · Two points", S`Find the gradient of the line through \((1,3)\) and \((5,11)\).`,
      [S`\(m=\dfrac{11-3}{5-1}=\dfrac84=2\).`],
      S`\(2\)`],
    ["Level 1 · From a graph", S`The line shown passes through \((0,4)\) and \((6,1)\). Find its gradient.`,
      [S`Run \(6\), rise \(1-4=-3\).`, S`\(m=\frac{-3}{6}=-0.5\): the line falls to the right.`],
      S`\(-0.5\)`,
      plane({ view: { xmin: -1, xmax: 8, ymin: -1, ymax: 6 }, step: { x: 1, y: 1 }, lines: [{ m: -0.5, b: 4, color: "violet" }], points: [P(0, 4, "(0, 4)"), P(6, 1, "(6, 1)")] })],
    ["Level 2 · A rate of change", S`A taxi fare is 8.50 for a 2 km ride and 24.50 for a 10 km ride, and the fare is linear in the distance. Find and interpret the gradient.`,
      [S`\(m=\dfrac{24.5-8.5}{10-2}=\dfrac{16}{8}=2\).`, S`Units: dollars per kilometre. Each extra kilometre costs 2.`],
      "2 dollars per km",
      plane({ view: { xmin: -1, xmax: 12, ymin: -2, ymax: 30 }, step: { x: 1, y: 5 }, lines: [{ m: 2, b: 4.5, color: "violet" }], points: [P(2, 8.5, "(2, 8.5)"), P(10, 24.5, "(10, 24.5)")], xlabel: "d (km)", ylabel: "fare" })],
    ["Level 2 · Perpendicular?", S`Is the line through \((4,-1)\) and \((-2,7)\) perpendicular to a line with gradient \(\frac34\)?`,
      [S`\(m=\dfrac{7-(-1)}{-2-4}=\dfrac{8}{-6}=-\dfrac43\).`, S`\(\frac34\times\left(-\frac43\right)=-1\), so yes.`],
      "yes"],
    ["Level 3 · An unknown coordinate", S`The line through \((2,k)\) and \((5,7)\) is perpendicular to a line with gradient 3. Find \(k\).`,
      [S`Required gradient: \(-\frac13\).`, S`\(\dfrac{7-k}{5-2}=-\frac13\Rightarrow7-k=-1\Rightarrow k=8\).`],
      S`\(k=8\)`],
  ]),

  practice([
    q("Level 1 · two points", S`Find the gradient of the line through \((-2,1)\) and \((2,9)\).`, num(2),
      "Rise over run.", [S`\(\frac{8}{4}\).`], S`\(2\)`),
    q("Level 1 · horizontal", S`What is the gradient of the line \(y=5\)?`, num(0),
      "A horizontal line has no rise.", [S`Every point has \(y=5\).`], S`\(0\)`),
    q("Level 2 · perpendicular", S`What is the gradient of a line perpendicular to one with gradient \(-\frac25\)?`, num(2.5),
      "Negative reciprocal.", [S`\(-1\div\left(-\frac25\right)=\frac52\).`], S`\(2.5\)`),
    q("Level 2 · negative gradient", S`Find the gradient of the line through \((3,-4)\) and \((-1,4)\).`, num(-2),
      "Keep the order of subtraction.", [S`\(\frac{4-(-4)}{-1-3}=\frac{8}{-4}\).`], S`\(-2\)`),
    q("Level 2 · relationship", "Lines with gradients 4 and −0.25 are:", choice(["perpendicular", "parallel", "neither", "the same line"], 0),
      "Multiply the gradients.", [S`\(4\times(-0.25)=-1\).`], "perpendicular"),
  ]),

  ...hard([
    ["A right angle", S`Show that \(A(-1,2)\), \(B(3,4)\) and \(C(5,0)\) form a right angle at \(B\).`,
      [S`\(m_{AB}=\frac{4-2}{3-(-1)}=\frac24=\frac12\).`, S`\(m_{BC}=\frac{0-4}{5-3}=-2\).`, S`\(\frac12\times(-2)=-1\), so \(AB\perp BC\): the angle at \(B\) is 90°.`],
      S`\(m_{AB}m_{BC}=-1\)`,
      plane({ view: { xmin: -2, xmax: 6, ymin: -1, ymax: 5 }, step: { x: 1, y: 1 }, segs: [{ pts: [[-1, 2], [3, 4], [5, 0]], color: "violet" }], points: [P(-1, 2, "A(−1, 2)"), P(3, 4, "B(3, 4)", "red"), P(5, 0, "C(5, 0)")] })],
    ["Collinear points", S`Find \(k\) so that \((1,2)\), \((4,8)\) and \((k,14)\) lie on one straight line.`,
      [S`Gradient of the first two points: \(\frac{8-2}{4-1}=2\).`, S`The third point must give the same gradient: \(\frac{14-2}{k-1}=2\Rightarrow k-1=6\).`, S`\(k=7\).`],
      S`\(k=7\)`],
  ], [
    q("Level 3 · unknown coordinate", S`The line through \((a,3)\) and \((2,7)\) has gradient 2. Find \(a\).`, num(0),
      "(7 − 3)/(2 − a) = 2.", [S`\(2-a=2\).`], S`\(0\)`),
    q("Level 3 · rate", S`A tank holds 500 L at \(t=0\) and 140 L at \(t=12\) min, draining at a constant rate. Find the rate of change of the volume (L/min).`, num(-30),
      "Gradient = change in V ÷ change in t.", [S`\(\frac{140-500}{12}\).`], S`\(-30\)`),
    q("Level 3 · parallel", S`\(y=(k-1)x+2\) is parallel to \(y=4x-3\). Find \(k\).`, num(5),
      "Equal gradients.", [S`\(k-1=4\).`], S`\(5\)`),
  ]),

  wrapUp({
    qas: [
      ["Does it matter which point is first?", "No, as long as you use the same order on the top and the bottom."],
      ["Why does a vertical line have no gradient?", "Its run is 0, and you cannot divide by 0."],
      ["Do perpendicular lines always have opposite-sign gradients?", "Yes (unless one is vertical and the other horizontal): their product is −1."],
      ["How do I read a gradient from a graph accurately?", "Pick two points far apart where the line crosses exact grid corners."],
      ["What does a gradient mean in a model?", "The change in the output per unit of input, with units, e.g. dollars per km."],
    ],
    summary: [
      "m = (y₂ − y₁)/(x₂ − x₁) = rise/run.",
      "m > 0 rises, m < 0 falls, m = 0 horizontal, vertical has no gradient.",
      "Parallel: m₁ = m₂; perpendicular: m₁m₂ = −1.",
      "In context the gradient is a rate with units.",
    ],
    next: "3.2 writes equations of lines in three forms and builds linear models.",
  }),
];
