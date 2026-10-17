// MTH1W 4.5 — Graphing Special Lines (self-study format): horizontal, vertical, through the origin, inequalities
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice } from "./lib.mjs";
import { plane } from "./figs4.mjs";

export const TITLE = "4.5 Graphing Special Lines";

export const blocks = () => [
  intro({
    icon: "📏",
    title: "Special Lines and Linear Inequalities",
    overview: String.raw`Some lines have special equations: <strong>horizontal</strong> lines \(y=k\) (slope \(0\)), <strong>vertical</strong> lines \(x=k\) (undefined slope) and lines <strong>through the origin</strong> \(y=mx\) (direct variation). In this lesson you will graph and recognize each, then go one step further: a <strong>linear inequality</strong> such as \(y<2x+1\) describes a whole <em>region</em> of the plane. You will draw its boundary line (solid or dashed), test a point and shade the correct side — the way budgets and limits are modelled.`,
    goals: [
      "graph and write equations of horizontal lines \\(y=k\\) and vertical lines \\(x=k\\);",
      "explain why a horizontal line has slope 0 and a vertical line has an undefined slope;",
      "recognize and graph direct variations \\(y=mx\\) through the origin;",
      "graph a linear inequality: boundary line (solid for ≤, ≥; dashed for <, >), test point, shading;",
      "model a situation with a linear inequality and decide whether a point satisfies it.",
    ],
    curriculum: "C4.2 (graphs of linear relations, including special cases; linear inequalities)",
    book: "Nelson Principles of Mathematics 9, §5.1 (slope of horizontal/vertical lines); inequalities extend the text",
    prior: [
      [String.raw`What is the slope through \((1,4)\) and \((5,4)\)?`, String.raw`\(\frac{0}{4}=0\).`],
      [String.raw`Is \(x=3\) a solution of \(2x+1>6\)?`, String.raw`Yes: \(7>6\).`],
      [String.raw`Write \(3x+y=12\) as \(y=\dots\)`, String.raw`\(y=-3x+12\).`],
    ],
    words: [
      ["Horizontal line", "every point has the same y; equation y = k; slope 0", "\\(y=-2\\)"],
      ["Vertical line", "every point has the same x; equation x = k; slope undefined", "\\(x=4\\)"],
      ["Direct variation", "a line through the origin, y = mx", "\\(y=3x\\)"],
      ["Linear inequality", "a relation with <, >, ≤ or ≥ instead of =", "\\(y\\le2x-1\\)"],
      ["Boundary line", "the line y = mx + b that separates the regions", ""],
      ["Test point", "a point (often (0, 0)) used to decide which side to shade", ""],
    ],
  }),

  section("📌 Horizontal, vertical and through the origin", String.raw`
  ${plane({ view: { xmin: -6, xmax: 6, ymin: -6, ymax: 6 }, lines: [{ m: 0, b: 3, color: "blue", label: "y = 3", lx: 3.5 }, { m: 1.5, b: 0, color: "green", label: "y = 1.5x", lx: 1.8 }], vlines: [{ x: -2, color: "red", label: "x = −2" }] }, "y = 3 is horizontal, x = −2 is vertical, y = 1.5x passes through the origin.")}
  ${table(["Line", "Equation", "Slope", "Why"], [
    ["horizontal", "\\(y=k\\)", "\\(0\\)", "rise is always 0"],
    ["vertical", "\\(x=k\\)", "undefined", "run is always 0, and division by 0 is undefined"],
    ["through origin", "\\(y=mx\\)", "\\(m\\)", "b = 0 (direct variation)"],
  ])}
  ${watchOut([
    String.raw`\(y=3\) is <strong>horizontal</strong> (all points have \(y\)-value \(3\)); \(x=3\) is <strong>vertical</strong>. Students often swap them.`,
    "A vertical line is not y = something: it is x = something.",
    "“Undefined slope” (vertical) is not the same as “slope 0” (horizontal).",
  ])}`),

  section("📌 Linear inequalities: regions of the plane", String.raw`
  <p>The solutions of \(y>\tfrac12x+1\) are all the points <em>above</em> the line \(y=\tfrac12x+1\). To graph a linear inequality:</p>
  <ol>
    <li>Rearrange to \(y\ \square\ mx+b\) if needed.</li>
    <li>Draw the boundary \(y=mx+b\): <strong>dashed</strong> for \(<\) or \(>\) (points on the line are not solutions), <strong>solid</strong> for \(\le\) or \(\ge\).</li>
    <li>Test a point not on the line, usually \((0,0)\). If it makes the inequality true, shade its side; if false, shade the other side.</li>
  </ol>
  ${keyIdea(String.raw`After rearranging to \(y\ \square\ mx+b\): \(>\) and \(\ge\) shade <strong>above</strong> the line; \(<\) and \(\le\) shade <strong>below</strong>. A test point always confirms it.`)}
  <p>In the explorer, change the inequality symbol and move the test point.</p>`),

  widget("inequalityRegion", { initM: 0.5, initB: 1 }),

  examples([
    ["A horizontal line", String.raw`A thermostat keeps a room at \(21\,^\circ\)C all day. Write the equation for temperature \(T\) against time \(t\), state the slope and describe the graph.`,
      [String.raw`The temperature does not change: \(T=21\).`, String.raw`Rise \(0\) for any run: slope \(0\).`],
      String.raw`\(T=21\): a horizontal line, slope \(0\)`],
    ["A vertical line", String.raw`Find the slope through \((-3,1)\) and \((-3,5)\), and write the equation of the line.`,
      [String.raw`Run \(=-3-(-3)=0\); \(\frac{4}{0}\) is undefined.`, String.raw`Every point has \(x=-3\).`],
      String.raw`slope undefined; \(x=-3\)`],
    ["Direct variation", String.raw`Apples cost \(4.50\) dollars per kg. Write the relation, give its slope and y-intercept, and find the cost of \(3.2\) kg.`,
      [String.raw`\(C=4.5k\): slope \(4.5\), y-intercept \(0\) (no fixed charge).`, String.raw`\(4.5(3.2)=14.40\) dollars.`],
      String.raw`\(C=4.5k\); \(14.40\) dollars`],
    ["Graphing an inequality", String.raw`Graph \(y\le-x+4\).`,
      [String.raw`Boundary \(y=-x+4\): solid (\(\le\)).`, String.raw`Test \((0,0)\): \(0\le4\) is true, so shade the side containing the origin — below the line.`],
      "solid line y = −x + 4, shaded below",
      plane({ view: { xmin: -6, xmax: 6, ymin: -6, ymax: 6 }, lines: [{ m: -1, b: 4, label: "y = −x + 4", lx: -3.5 }], shade: { m: -1, b: 4, above: false }, points: [{ x: 0, y: 0, label: "test (0, 0)", color: "green" }] })],
    ["An inequality from a budget", String.raw`Movie tickets cost \(12\) dollars and snacks cost \(5\) dollars. Ana has \(60\) dollars. Write an inequality for \(x\) tickets and \(y\) snacks, and decide whether \(3\) tickets and \(4\) snacks are affordable.`,
      [String.raw`Total cost at most \(60\): \(12x+5y\le60\), i.e. \(y\le-2.4x+12\).`, String.raw`Test \((3,4)\): \(36+20=56\le60\) ✓ — affordable.`, String.raw`(Only whole-number points in the shaded region make sense here.)`],
      String.raw`\(12x+5y\le60\); yes, it costs \(56\) dollars`,
      plane({ view: { xmin: 0, xmax: 6, ymin: 0, ymax: 14 }, lines: [{ m: -2.4, b: 12, label: "12x + 5y = 60", lx: 2.3 }], shade: { m: -2.4, b: 12, above: false }, points: [{ x: 3, y: 4, label: "(3, 4)", color: "green" }], xlabel: "tickets x", ylabel: "snacks y", step: { x: 1, y: 2 } })],
  ]),

  practice([
    q("horizontal", String.raw`What is the slope of \(y=-6\)?`, num(0), "Is there any rise?", [String.raw`Every point has \(y=-6\): rise \(0\).`], String.raw`\(0\)`),
    q("vertical", String.raw`Which equation is the line through \((4,1)\) and \((4,-3)\)?`, choice([String.raw`\(x=4\)`, String.raw`\(y=4\)`, String.raw`\(y=x-3\)`, String.raw`\(y=-x+5\)`], 0),
      "Which coordinate is the same for both points?", ["Both have x = 4: a vertical line."], String.raw`\(x=4\)`),
    q("test a point", String.raw`Which point is a solution of \(y>2x-1\)?`, choice([String.raw`\((1,3)\)`, String.raw`\((2,3)\)`, String.raw`\((3,4)\)`, String.raw`\((0,-1)\)`], 0),
      "Substitute each point; the inequality is strict.", [String.raw`\((1,3)\): \(3>1\) ✓. \((2,3)\): \(3>3\) ✗. \((3,4)\): \(4>5\) ✗. \((0,-1)\): \(-1>-1\) ✗.`], String.raw`\((1,3)\)`),
    q("boundary", String.raw`When graphing \(y<-3x+2\), the boundary line is…`, choice(["dashed, shade below", "solid, shade below", "dashed, shade above", "solid, shade above"], 0),
      "< is strict; < means below after writing y < …", ["Strict inequality: dashed. y < … : below."], "dashed, shade below"),
    q("budget", String.raw`Is \((2,9)\) a solution of \(3x+y\le15\)? Type 1 for yes, 0 for no.`, num(1),
      "Substitute and compare.", [String.raw`\(3(2)+9=15\le15\) ✓ (on the solid boundary).`], "yes (1)"),
  ]),

  wrapUp({
    qas: [
      ["Why does a vertical line have an undefined slope?", "Between any two points on it the run is 0, and rise ÷ 0 cannot be computed — no number times 0 gives the rise."],
      [String.raw`How do I remember whether \(y=2\) is horizontal or vertical?`, String.raw`It says y is always \(2\): points like \((-5,2)\), \((0,2)\), \((7,2)\) — they line up side by side, so the line is horizontal.`],
      ["Why use a dashed line for < and >?", "Points on the boundary make the two sides equal, so they do not satisfy a strict inequality. Dashed means “not included”."],
      ["Do I always shade above for >?", String.raw`Only when the inequality is written as \(y>\dots\). If it is written another way (e.g. \(-2y>4x\)), rearrange first — and remember dividing by a negative flips the sign — or simply use a test point.`],
      ["Where do inequalities appear in real life?", "Budgets (cost ≤ money available), speed limits, time limits, minimum requirements (at least …). The shaded region shows every combination that works."],
    ],
    summary: [
      "Horizontal: y = k, slope 0. Vertical: x = k, slope undefined. Through the origin: y = mx.",
      "Linear inequality: draw the boundary (dashed for <, >; solid for ≤, ≥), test a point, shade.",
      "y > or ≥ … shades above; y < or ≤ … shades below.",
    ],
    next: "4.6 shows how changing m and b transforms a line.",
  }),
];
