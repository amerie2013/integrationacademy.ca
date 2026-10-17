// MTH1W 4.10 — Chapter 4 Review (NEW lesson, placed after 4.9)
import { intro, section, keyIdea, widget, examples, practice, wrapUp, table, q, num, choice, expr } from "./lib.mjs";
import { plane } from "./figs4.mjs";

export const TITLE = "4.10 Chapter 4 Review";
export const NEW = { id: "4c4e7c1a-0a40-4d1e-9c40-c4a9f0000410", position: 31 };

export const blocks = () => [
  intro({
    icon: "🧩",
    title: "Chapter 4 Review — Linear and Non-Linear Relations",
    overview: String.raw`This page pulls the chapter together before the test: every lesson's key idea on one screen, questions where you must choose the method, mixed test-level examples, mixed practice and a readiness checklist. Work through it after 4.1–4.9 and return to any lesson where you get stuck.`,
    goals: [
      "recall the key idea, a typical example and the common mistake of each lesson;",
      "choose the right representation and method for a problem about relations;",
      "solve multi-step problems combining slope, intercepts, equations, intersections and inequalities;",
      "check your readiness for the chapter test.",
    ],
    curriculum: "C3.1–C3.2, C4.1–C4.4 (whole chapter)",
    prior: [
      [String.raw`Slope through \((-1,3)\) and \((3,-5)\)?`, String.raw`\(\frac{-8}{4}=-2\).`],
      [String.raw`Is \(y=x^2+1\) linear?`, "No: it has an x² term (quadratic)."],
      [String.raw`Intercepts of \(2x+5y-20=0\)?`, String.raw`\((10,0)\) and \((0,4)\).`],
    ],
    words: [
      ["Rate of change / slope", "Δy ÷ Δx; constant for a linear relation", "\\(m=-2\\)"],
      ["Initial value", "y when x = 0", "\\(b=5\\)"],
      ["Point of intersection", "where two relations are equal", "\\((150, 45)\\)"],
      ["Linear inequality", "a region bounded by a line", "\\(y\\le-x+4\\)"],
    ],
  }),

  section("📌 The chapter on one page", table(["Lesson", "Key idea", "Typical example", "Watch out"], [
    ["4.1 Relations", "independent (horizontal) vs dependent; discrete vs continuous; graphs tell stories", "distance–time: flat = stopped", "don't join discrete points"],
    ["4.2 Linear vs non-linear", "constant Δy/Δx ⇔ linear; 2nd differences, ratios, xy = k", "1, 4, 9, 16: quadratic", "unequal x-steps: divide by Δx"],
    ["4.3 y = mx + b", "m = rate, b = initial value; direct vs partial", "C = 60h + 75", "b is the value at x = 0"],
    ["4.4 Comparing lines", "intersection: set equal and solve", "\\(50+20m=110+10m\\Rightarrow m=6\\)", "answer in context"],
    ["4.5 Special lines, inequalities", "y = k, x = k, y = mx; boundary, test point, shade", "\\(y\\le-x+4\\)", "dashed for < >"],
    ["4.6 Transformations", "b translates, m rotates, −m reflects", "\\(y=x\\to y=3x+2\\)", "steepness is |m|"],
    ["4.7 Equation of a line", "m from two points, then b = y − mx", "\\((2,1),(6,9)\\Rightarrow y=2x-3\\)", "same order in the slope formula"],
    ["4.8 General form", "Ax + By + C = 0; m = −A/B; intercepts", "\\(4x+2y-10=0\\)", "divide every term by B"],
    ["4.9 Parallel, perpendicular", "equal slopes; product −1", "\\(2\\) and \\(-\\tfrac12\\)", "flip AND change sign"],
  ])),

  section("📌 Which method?", String.raw`${keyIdea(String.raw`<strong>Is it linear?</strong> check Δy/Δx. <strong>Need the equation?</strong> find m, then b. <strong>Where are two options equal?</strong> set them equal. <strong>Which combinations work?</strong> an inequality region. <strong>Same or opposite direction?</strong> compare slopes.`)}`),

  practice([
    q("method", "A gym and a pool have different joining fees and monthly costs. To find when they cost the same, you should…", choice(["set the two cost expressions equal and solve", "compare only the joining fees", "compare only the monthly costs", "find the x-intercepts"], 0),
      "Equal costs = point of intersection.", ["Solve one expression = the other."], "set them equal"),
    q("method", String.raw`A table has \(x=0, 3, 4, 9\). To check whether it is linear you should…`, choice(["compute Δy/Δx for each pair", "compute first differences of y", "compute second differences", "check the ratios of y"], 0),
      "The x-steps are unequal.", ["First differences only work for equal steps."], "Δy/Δx"),
    q("method", "Which representation shows the initial value and the rate of change at a glance?", choice(["y = mx + b", "Ax + By + C = 0", "a list of points", "a scatter plot"], 0),
      "Which form displays m and b?", ["Slope-intercept form."], "y = mx + b"),
    q("method", "To find the x-intercept of a line in general form you…", choice(["set y = 0 and solve for x", "set x = 0 and solve for y", "compute −A/B", "compute −C/A for y"], 0),
      "The x-axis is where y = 0.", [String.raw`For example \(2x-5y-10=0\): \(2x=10\), \(x=5\).`], "set y = 0"),
    q("method", "To show two sides of a quadrilateral are perpendicular you…", choice(["show their slopes multiply to −1", "show their slopes are equal", "show they have equal length", "show they have the same y-intercept"], 0),
      "Perpendicular slopes are negative reciprocals.", ["Product −1."], "slopes multiply to −1"),
  ]),

  examples([
    ["Linear or not, then model", String.raw`A spring stretches as masses are added: \((0\ \text{g},\ 12\ \text{cm})\), \((50,\ 14.5)\), \((150,\ 19.5)\), \((200,\ 22)\). Is the relation linear? Write an equation and find the length for \(320\) g.`,
      [String.raw`\(\frac{2.5}{50}=\frac{5}{100}=\frac{2.5}{50}=0.05\) cm/g: linear.`, String.raw`\(L=0.05m+12\). \(m=320\): \(16+12=28\) cm.`],
      String.raw`\(L=0.05m+12\); \(28\) cm`],
    ["Two points, then a decision", String.raw`Company A charges \(C=0.45d+30\). Company B charged \(66\) dollars for \(60\) km and \(102\) dollars for \(150\) km. Find B's equation and the distance where the companies cost the same.`,
      [String.raw`B: \(m=\frac{102-66}{150-60}=0.4\); \(66=0.4(60)+b\Rightarrow b=42\): \(C=0.4d+42\).`, String.raw`\(0.45d+30=0.4d+42\Rightarrow0.05d=12\Rightarrow d=240\) km (both \(138\) dollars).`],
      String.raw`B: \(C=0.4d+42\); equal at \(240\) km`],
    ["General form and intercepts", String.raw`Rewrite \(3x-4y+24=0\) in slope-intercept form, give both intercepts, and find the line perpendicular to it through the origin.`,
      [String.raw`\(y=\tfrac34x+6\): \(m=\tfrac34\), y-intercept \(6\); x-intercept \(-8\).`, String.raw`Perpendicular slope \(-\tfrac43\) through \((0,0)\): \(y=-\tfrac43x\).`],
      String.raw`\(y=\tfrac34x+6\); \((-8,0)\), \((0,6)\); \(y=-\tfrac43x\)`],
    ["An inequality model", String.raw`A bakery has \(30\) h of oven time. Bread takes \(1.5\) h per batch and cakes \(2\) h per batch. Write an inequality, find the intercepts and decide whether \(8\) bread and \(9\) cake batches are possible.`,
      [String.raw`\(1.5b+2c\le30\). Intercepts: \(b=20\), \(c=15\).`, String.raw`\((8,9)\): \(12+18=30\le30\) ✓ — exactly uses all the time (on the boundary).`],
      String.raw`\(1.5b+2c\le30\); yes`,
      plane({ view: { xmin: 0, xmax: 22, ymin: 0, ymax: 17 }, lines: [{ m: -0.75, b: 15, label: "1.5b + 2c = 30", lx: 12 }], shade: { m: -0.75, b: 15, above: false }, points: [{ x: 8, y: 9, label: "(8, 9)", color: "green" }], xlabel: "bread b", ylabel: "cake c", step: { x: 2, y: 3 } })],
    ["A non-linear relation", String.raw`Ticket price \(p\) and number sold \(n\) are related by \(pn=6000\) (the total stays fixed). Complete the table for \(p=10, 20, 30, 50\), classify the relation and describe the graph.`,
      [String.raw`\(n=\frac{6000}{p}\): \(600, 300, 200, 120\).`, String.raw`The product is constant: inverse variation. Doubling the price halves the number sold.`],
      "inverse variation; a curve approaching the axes"],
  ]),

  section("📌 Mixed review", String.raw`<p>Each question uses more than one lesson.</p>`),

  practice([
    q("slope + intercept", String.raw`Find the equation of the line through \((-2,9)\) and \((3,-1)\).`, expr("-2x+5"), "Slope, then b.", [String.raw`\(m=\frac{-10}{5}=-2\); \(9=4+b\Rightarrow b=5\).`], String.raw`\(y=-2x+5\)`, { placeholder: "y = …" }),
    q("intersection", String.raw`Where do \(y=-2x+5\) and \(y=x-4\) meet? Give the x-coordinate.`, num(3), "Set equal.", [String.raw`\(-2x+5=x-4\Rightarrow3x=9\).`], String.raw`\(x=3\)`),
    q("general form", String.raw`What is the y-intercept of \(4x-3y+18=0\)?`, num(6), "Set x = 0.", [String.raw`\(-3y=-18\Rightarrow y=6\).`], String.raw`\(6\)`),
    q("non-linear", String.raw`Which relation has constant second differences: \(y=4x-1\), \(y=x^2-3x\), \(y=3^x\) or \(xy=8\)?`, choice([String.raw`\(y=x^2-3x\)`, String.raw`\(y=4x-1\)`, String.raw`\(y=3^x\)`, String.raw`\(xy=8\)`], 0), "Quadratic relations.", ["It is quadratic."], String.raw`\(y=x^2-3x\)`),
    q("perpendicular", String.raw`Write the line perpendicular to \(y=\tfrac13x+2\) through \((1,4)\).`, expr("-3x+7"), "Slope −3, then b.", [String.raw`\(4=-3(1)+b\Rightarrow b=7\).`], String.raw`\(y=-3x+7\)`, { placeholder: "y = …" }),
  ]),

  section("📌 Am I ready for the test?", String.raw`<ul style="list-style:none;padding-left:0;">
    ${[
      ["4.1", "I can identify variables, choose discrete or continuous graphs, and tell the story of a distance–time graph."],
      ["4.2", "I can decide whether a relation is linear and recognize quadratic, exponential and inverse (xy = k) relations."],
      ["4.3", "I can find m and b from words, tables, graphs and equations, and tell direct from partial variation."],
      ["4.4", "I can find and interpret the point of intersection of two lines."],
      ["4.5", "I can graph horizontal, vertical and direct-variation lines, and linear inequalities."],
      ["4.6", "I can describe the effect of changing m and b."],
      ["4.7", "I can find the equation of a line from a graph, two points, or a point and a slope."],
      ["4.8", "I can convert between general and slope-intercept form and use intercepts."],
      ["4.9", "I can test and construct parallel and perpendicular lines."],
    ].map(([c, t]) => `<li style="margin:6px 0;"><label><input type="checkbox"> <strong>${c}</strong> — ${t}</label></li>`).join("")}
  </ul>`),

  widget("inequalityRegion", { initM: -0.5, initB: 3 }),

  wrapUp({
    qas: [
      ["How should I study for this test?", "Do the mixed review without notes. For each mistake, return to that lesson's explorer and practice set. Then try the Level 3 worksheet problems for your two weakest lessons."],
      ["What are the most common mistakes?", "Mixing the order in the slope formula, forgetting to divide every term by B, confusing x = k and y = k, the reciprocal without the sign change, and using first differences with unequal steps."],
      ["How do I check an equation I found?", "Substitute both given points (or a table row); both must satisfy it."],
      ["When is a graph enough?", "For estimates and for describing trends. For exact intersections or predictions, use the equation."],
      ["How does this chapter connect to later work?", "Linear relations model data (Chapter 6), money (Chapter 7) and everything in Grade 10 analytic geometry and systems of equations."],
    ],
    summary: [
      "Linear relations: constant rate of change; y = mx + b or Ax + By + C = 0.",
      "Find equations from two points; compare lines with intersections; regions with inequalities.",
      "Non-linear: quadratic (2nd differences), exponential (ratio), inverse (xy = k).",
    ],
    next: "Write the Chapter 4 test. Chapter 5 turns to geometry and measurement.",
  }),
];
