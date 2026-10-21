// IB AA SL 3.2 — Linear Functions and Models: three forms of a line, intercepts, perpendicular lines, intersections, linear models
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, hard, plane } from "./lib.mjs";

export const TITLE = "3.2 Linear Functions and Models";
export const ID = "1baa0003-0001-4001-8001-000000000302";
const S = String.raw;
const P = (x, y, label, color = "blue") => ({ x, y, label, color });

export const blocks = () => [
  intro({
    icon: "📏",
    title: "Linear Functions and Models",
    overview: S`A linear function has a constant rate of change, so its graph is a straight line. The same line can be written in three useful forms. In this lesson you will write equations of lines from given information, find their intercepts, find where two lines meet, and use linear functions to model costs, revenues and conversions.`,
    goals: [
      "write a line in gradient–intercept form \\(y=mx+c\\), point–gradient form \\(y-y_1=m(x-x_1)\\) and general form \\(ax+by+d=0\\);",
      "find the gradient and intercepts from any form;",
      "find the equation of a line parallel or perpendicular to a given line;",
      "find the point where two lines intersect;",
      "build and interpret linear models, including break-even problems.",
    ],
    curriculum: "SL 2.1 (different forms of the equation of a straight line: gradient–intercept, general and point–gradient forms), SL 2.4 (intersection of graphs), linear models",
    prior: [
      [S`Find the gradient through \((-1,7)\) and \((3,-1)\).`, S`\(-2\).`],
      [S`Solve \(2x+3(x-1)=12\).`, S`\(x=3\).`],
      [S`Make \(y\) the subject of \(3x-4y+12=0\).`, S`\(y=\frac34x+3\).`],
    ],
    words: [
      ["Gradient–intercept form", "\\(y=mx+c\\): gradient \\(m\\), y-intercept \\(c\\)", "\\(y=-2x+5\\)"],
      ["Point–gradient form", "\\(y-y_1=m(x-x_1)\\) through \\((x_1,y_1)\\)", "\\(y-5=3(x-2)\\)"],
      ["General form", "\\(ax+by+d=0\\)", "\\(2x+y-5=0\\)"],
      ["Intercepts", "where the line meets the axes", "\\((-4,0)\\), \\((0,3)\\)"],
      ["Break-even point", "where cost equals revenue", "\\(C(q)=R(q)\\)"],
    ],
  }),

  section("📌 Three forms of the same line", S`
  ${table(["Form", "Equation", "Best for"], [
    ["gradient–intercept", S`\(y=-2x+5\)`, "reading m and c, graphing"],
    ["point–gradient", S`\(y-7=-2(x+1)\)`, "writing an equation from a point and a gradient"],
    ["general", S`\(2x+y-5=0\)`, "finding intercepts; IB answers often ask for integer a, b, d"],
  ])}
  ${plane({ view: { xmin: -3, xmax: 5, ymin: -3, ymax: 9 }, step: { x: 1, y: 1 }, lines: [{ m: -2, b: 5, color: "violet" }], points: [P(-1, 7, "(−1, 7)"), P(3, -1, "(3, −1)"), P(0, 5, "(0, 5)", "green"), P(2.5, 0, "(2.5, 0)", "green")] }, "y = −2x + 5 through (−1, 7) and (3, −1): y-intercept 5, x-intercept 2.5")}
  ${keyIdea(S`To find intercepts from any form: put \(x=0\) for the y-intercept and \(y=0\) for the x-intercept. To find the gradient from \(ax+by+d=0\): \(m=-\frac ab\).`)}`),

  section("📌 Intersections and linear models", S`
  <p>Two lines meet where their equations are both true: solve them simultaneously (substitution, elimination or a GDC). In a model, the meeting point is often where two options cost the same.</p>
  ${plane({ view: { xmin: -20, xmax: 420, ymin: -3, ymax: 60 }, step: { x: 50, y: 5 }, lines: [{ m: 0.05, b: 20, color: "violet", label: "plan A" }, { m: 0.11, b: 8, color: "blue", label: "plan B" }], points: [P(200, 30, "(200, 30)", "red")], xlabel: "minutes", ylabel: "cost" }, "Plan A: 20 + 0.05m; plan B: 8 + 0.11m. They cost the same at 200 minutes")}
  ${watchOut([
    "In y − y₁ = m(x − x₁) the signs inside the bracket are opposite to the point's coordinates.",
    "For general form, clear fractions and make a positive if the question asks for integers.",
    "The gradient from ax + by + d = 0 is −a/b, not a or a/b.",
    "In a model, check that the intersection makes sense (e.g. a positive number of items).",
  ])}`),

  section("📌 Explore", S`<p>Change the fixed cost, the cost per item and the selling price. The break-even point moves; the gap between the lines after it is the profit.</p>`),

  widget("ibLinearModel", { init: [200, 15, 25] }),

  examples([
    ["Level 1 · A point and a gradient", S`Find the equation of the line through \((2,5)\) with gradient 3.`,
      [S`\(y-5=3(x-2)\).`, S`\(y=3x-6+5=3x-1\).`],
      S`\(y=3x-1\)`],
    ["Level 1 · Two points", S`Find the equation of the line through \((-1,7)\) and \((3,-1)\) in general form.`,
      [S`\(m=\frac{-1-7}{3+1}=-2\).`, S`\(y-7=-2(x+1)\Rightarrow y=-2x+5\).`, S`General form: \(2x+y-5=0\).`],
      S`\(2x+y-5=0\)`],
    ["Level 2 · Intercepts and gradient", S`Find the intercepts and the gradient of \(3x-4y+12=0\).`,
      [S`\(x=0\): \(-4y+12=0\Rightarrow y=3\). \(y=0\): \(3x+12=0\Rightarrow x=-4\).`, S`\(m=-\frac{3}{-4}=\frac34\).`],
      S`\((0,3)\), \((-4,0)\), \(m=\frac34\)`,
      plane({ view: { xmin: -6, xmax: 4, ymin: -2, ymax: 6 }, step: { x: 1, y: 1 }, lines: [{ m: 0.75, b: 3, color: "violet" }], points: [P(0, 3, "(0, 3)"), P(-4, 0, "(−4, 0)")] })],
    ["Level 2 · A perpendicular line", S`Find the line perpendicular to \(y=2x+1\) through \((4,3)\).`,
      [S`Perpendicular gradient: \(-\frac12\).`, S`\(y-3=-\frac12(x-4)\Rightarrow y=-\frac12x+5\).`],
      S`\(y=-\frac12x+5\)`,
      plane({ view: { xmin: -2, xmax: 8, ymin: -2, ymax: 8 }, step: { x: 1, y: 1 }, lines: [{ m: 2, b: 1, color: "gray" }, { m: -0.5, b: 5, color: "violet" }], points: [P(4, 3, "(4, 3)")] })],
    ["Level 3 · Comparing two plans", S`Phone plan A costs \(20+0.05m\) and plan B costs \(8+0.11m\) for \(m\) minutes. When do they cost the same, and which is cheaper for 300 minutes?`,
      [S`\(20+0.05m=8+0.11m\Rightarrow12=0.06m\Rightarrow m=200\).`, S`At 300 minutes: A costs \(35\), B costs \(41\).`, S`Beyond 200 minutes plan A is cheaper because its gradient (rate per minute) is smaller.`],
      "200 minutes; plan A for 300 minutes"],
  ]),

  practice([
    q("Level 1 · gradient", S`What is the gradient of \(y=-4x+7\)?`, num(-4),
      "y = mx + c.", [S`\(m=-4\).`], S`\(-4\)`),
    q("Level 1 · y-intercept", S`What is the y-intercept of \(2x+y=9\)?`, num(9),
      "Put x = 0.", [S`\(y=9\).`], S`\(9\)`),
    q("Level 2 · x-intercept", S`What is the x-intercept of \(5x-2y=20\)?`, num(4),
      "Put y = 0.", [S`\(5x=20\).`], S`\(4\)`),
    q("Level 2 · find c", S`The line through \((1,4)\) with gradient 2 is \(y=2x+c\). Find \(c\).`, num(2),
      "Substitute the point.", [S`\(4=2+c\).`], S`\(2\)`),
    q("Level 2 · general form", S`What is the gradient of \(6x+3y-1=0\)?`, num(-2),
      "m = −a/b.", [S`\(-\frac63\).`], S`\(-2\)`),
  ]),

  ...hard([
    ["Intersection and a triangle", S`Find where \(2x+3y=12\) meets \(y=x-1\), and the area of the triangle that \(2x+3y=12\) forms with the axes.`,
      [S`Substitute: \(2x+3(x-1)=12\Rightarrow5x=15\Rightarrow x=3\), \(y=2\).`, S`Intercepts of \(2x+3y=12\): \((6,0)\) and \((0,4)\).`, S`Area \(=\frac12(6)(4)=12\).`],
      S`\((3,2)\); area 12`,
      plane({ view: { xmin: -1, xmax: 8, ymin: -2, ymax: 6 }, step: { x: 1, y: 1 }, lines: [{ m: -2 / 3, b: 4, color: "violet" }, { m: 1, b: -1, color: "blue" }], shade: null, points: [P(3, 2, "(3, 2)", "red"), P(6, 0, "(6, 0)"), P(0, 4, "(0, 4)")] })],
    ["A conversion model", S`Water freezes at 0 °C = 32 °F and boils at 100 °C = 212 °F, and the conversion is linear. Find \(F\) in terms of \(C\), and the temperature that is the same on both scales.`,
      [S`\(m=\frac{212-32}{100-0}=1.8\), so \(F=1.8C+32\).`, S`Same value: \(C=1.8C+32\Rightarrow-0.8C=32\Rightarrow C=-40\).`, S`So \(-40\) °C \(=-40\) °F.`],
      S`\(F=1.8C+32\); \(-40^\circ\)`],
  ], [
    q("Level 3 · y-intercept", S`Find the y-intercept of the line through \((-2,3)\) and \((4,0)\).`, num(2),
      "Find m, then substitute.", [S`\(m=-\frac12\); \(y=-\frac12x+2\).`], S`\(2\)`),
    q("Level 3 · perpendicular", S`For which \(k\) is \(kx+2y=6\) perpendicular to \(y=x+1\)?`, num(2),
      "Its gradient must be −1.", [S`\(-\frac k2=-1\).`], S`\(2\)`),
    q("Level 3 · break-even", S`\(C(q)=150+4q\) and \(R(q)=10q\). Find the break-even quantity.`, num(25),
      "C = R.", [S`\(6q=150\).`], S`\(25\)`),
  ]),

  wrapUp({
    qas: [
      ["Which form should I give my answer in?", "Whatever the question asks; 'general form with integer coefficients' means ax + by + d = 0 with a, b, d integers."],
      ["How do I find where two lines meet with a GDC?", "Graph both and use the intersect function, or use the simultaneous-equation solver."],
      ["What do m and c mean in a model?", "m is the rate (per item, per minute); c is the starting or fixed value."],
      ["Can two lines fail to meet?", "Yes: parallel lines with different intercepts never meet."],
      ["Is every linear model realistic everywhere?", "No — check the domain (e.g. quantities ≥ 0)."],
    ],
    summary: [
      "y = mx + c; y − y₁ = m(x − x₁); ax + by + d = 0 with m = −a/b.",
      "Intercepts: set x = 0 or y = 0.",
      "Perpendicular: negative reciprocal gradient.",
      "Intersection: solve simultaneously; in models it is often a break-even point.",
    ],
    next: "3.3 transforms graphs: translations, stretches and reflections.",
  }),
];
