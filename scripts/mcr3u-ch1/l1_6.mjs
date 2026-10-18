// MCR3U 1.6 — Translations and Vertical Stretches: y = f(x − d) + c and y = af(x), key-point mapping
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, plane } from "./lib.mjs";

export const TITLE = "1.6 Translations and Vertical Stretches";
export const ID = "fb3ea947-f6f0-4301-a7f5-86245df1c0f1";

export const blocks = () => [
  intro({
    icon: "↔️",
    title: "Translations and Vertical Stretches",
    overview: String.raw`Every parent function can be slid around the grid and stretched up and down. In this lesson you will learn what \(c\), \(d\) and \(a\) do in \(y=af(x-d)+c\): \(c\) moves the graph up or down, \(d\) moves it left or right, and \(a\) stretches, compresses or flips it vertically. You will graph by moving key points and write equations from graphs.`,
    goals: [
      "describe the effect of c and d as vertical and horizontal translations;",
      "describe the effect of a as a vertical stretch, compression and/or reflection in the x-axis;",
      "map key points with (x, y) → (x + d, ay + c);",
      "sketch transformed parents and state their domain and range;",
      "write an equation from a graph or a description.",
    ],
    curriculum: "A1.8 (roles of a, d and c in y = af(x − d) + c for f(x) = x, x², √x, 1/x), A1.9 (sketch by applying transformations and state the domain and range)",
    prior: [
      [String.raw`Name three key points of \(y=\sqrt x\).`, String.raw`\((0,0),(1,1),(4,2)\) (also \((9,3)\)).`],
      [String.raw`Where is the vertex of \(y=(x-4)^2\)?`, String.raw`\((4,0)\) — the minus sign means right.`],
      [String.raw`What are the asymptotes of \(y=\frac1x\)?`, String.raw`\(x=0\) and \(y=0\).`],
    ],
    words: [
      ["Translation", "a slide: every point moves the same distance in the same direction", ""],
      ["Vertical stretch (|a| > 1)", "y-values are multiplied by |a|; the graph is taller", "\\(y=3x^2\\)"],
      ["Vertical compression (0 < |a| < 1)", "y-values shrink toward the x-axis", "\\(y=\\tfrac12|x|\\)"],
      ["Reflection in the x-axis (a < 0)", "every y-value changes sign", "\\(y=-\\sqrt x\\)"],
      ["Mapping notation", "\\((x,y)\\to(x+d,\\ ay+c)\\)", ""],
    ],
  }),

  section("📌 What each parameter does", String.raw`
  ${table(["In y = af(x − d) + c", "Effect on the graph", "Effect on a key point"], [
    ["\\(c>0\\) / \\(c<0\\)", "up \\(c\\) / down \\(|c|\\)", "\\(y\\to y+c\\)"],
    ["\\(d>0\\) / \\(d<0\\)", "right \\(d\\) / left \\(|d|\\)", "\\(x\\to x+d\\)"],
    ["\\(|a|>1\\)", "vertical stretch by \\(|a|\\)", "\\(y\\to ay\\)"],
    ["\\(0<|a|<1\\)", "vertical compression by \\(|a|\\)", "\\(y\\to ay\\)"],
    ["\\(a<0\\)", "reflection in the x-axis", "y changes sign"],
  ])}
  ${keyIdea(String.raw`The sign inside the bracket is opposite to the move: \(f(x-3)\) moves <strong>right</strong> 3, because the input must be 3 larger to produce the same output. Apply \(a\) first (stretch/reflect), then translate: \((x,y)\to(x+d,\ ay+c)\).`)}`),

  section("📌 Explore", String.raw`<p>Here \(k\) is fixed at 1 (horizontal changes come in 1.7). Change \(a\), \(d\) and \(c\) for each parent. Compare the grey key points of the parent with the blue image points in the table.</p>`),

  widget("funcTransform", { parent: "sqrt", show: ["a", "d", "c"], init: { a: 1, k: 1, d: 0, c: 0 } }),

  section("📌 Graphing by key points", String.raw`
  <p>For \(y=2\sqrt{x-1}+3\): stretch the parent's y-values by 2, then move every point right 1 and up 3.</p>
  ${table(["\\(\\sqrt x\\): (x, y)", "(0, 0)", "(1, 1)", "(4, 2)", "(9, 3)"], [["\\((x+1,\\ 2y+3)\\)", "(1, 3)", "(2, 5)", "(5, 7)", "(10, 9)"]])}
  ${plane({ view: { xmin: -1, xmax: 11, ymin: -1, ymax: 11 }, curves: [{ f: (x) => Math.sqrt(x), a: 0, color: "gray" }, { f: (x) => 2 * Math.sqrt(x - 1) + 3, a: 1, color: "violet" }], points: [{ x: 1, y: 3, label: "(1, 3)" }, { x: 2, y: 5 }, { x: 5, y: 7, label: "(5, 7)" }, { x: 10, y: 9, label: "(10, 9)" }], step: { x: 1, y: 1 } }, "parent √x (grey) → y = 2√(x − 1) + 3")}
  ${watchOut([
    "y = (x + 5)² moves LEFT 5, not right.",
    "Stretch before you translate: (1, 1) → (1, 2) → (2, 5), not (2, 4) → (2, 8).",
    "For 1/x, move the asymptotes too: x = d and y = c.",
    "a < 0 flips the graph, so a minimum becomes a maximum and the range inequality reverses.",
  ])}`),

  examples([
    ["Translations only", String.raw`Describe \(y=\sqrt{x+4}-2\), map the key points of \(\sqrt x\), and give the domain and range.`,
      [String.raw`\(d=-4\), \(c=-2\): left 4, down 2: \((x,y)\to(x-4,\ y-2)\).`, String.raw`\((0,0)\to(-4,-2)\), \((1,1)\to(-3,-1)\), \((4,2)\to(0,0)\), \((9,3)\to(5,1)\).`],
      String.raw`domain \(\{x\in\mathbb R\mid x\ge-4\}\), range \(\{y\in\mathbb R\mid y\ge-2\}\)`,
      plane({ view: { xmin: -6, xmax: 6, ymin: -4, ymax: 4 }, curves: [{ f: (x) => Math.sqrt(x), a: 0, color: "gray" }, { f: (x) => Math.sqrt(x + 4) - 2, a: -4, color: "violet" }], points: [{ x: -4, y: -2, label: "(−4, −2)" }, { x: -3, y: -1 }, { x: 0, y: 0 }, { x: 5, y: 1, label: "(5, 1)" }], step: { x: 1, y: 1 } })],
    ["A vertical stretch", String.raw`Graph \(y=3|x|\) from the key points of \(|x|\).`,
      [String.raw`\((x,y)\to(x,\ 3y)\): \((-2,2)\to(-2,6)\), \((-1,1)\to(-1,3)\), \((0,0)\), \((1,1)\to(1,3)\), \((2,2)\to(2,6)\).`, String.raw`The V is three times as steep: the slopes become \(-3\) and \(3\).`],
      String.raw`a narrower V through \((0,0)\), \((\pm1,3)\), \((\pm2,6)\)`],
    ["Reflection, compression and translations", String.raw`Describe \(y=-\tfrac12(x-2)^2+6\) and find the images of the parabola's key points.`,
      [String.raw`\(a=-\tfrac12\): compress by \(\tfrac12\) and reflect in the x-axis; then right 2, up 6.`, String.raw`\((x,y)\to(x+2,\ -\tfrac12y+6)\): \((-2,4)\to(0,4)\), \((-1,1)\to(1,5.5)\), \((0,0)\to(2,6)\), \((1,1)\to(3,5.5)\), \((2,4)\to(4,4)\).`],
      String.raw`a wide parabola opening down, vertex \((2,6)\), range \(y\le6\)`,
      plane({ view: { xmin: -3, xmax: 7, ymin: -3, ymax: 7 }, curves: [{ f: (x) => -0.5 * (x - 2) ** 2 + 6, color: "violet" }], points: [{ x: 2, y: 6, label: "(2, 6)" }, { x: 0, y: 4, label: "(0, 4)" }, { x: 4, y: 4, label: "(4, 4)" }, { x: 1, y: 5.5 }, { x: 3, y: 5.5 }], step: { x: 1, y: 1 } })],
    ["The reciprocal parent", String.raw`Sketch \(y=\frac{1}{x-3}+2\).`,
      [String.raw`Right 3 and up 2: asymptotes move to \(x=3\) and \(y=2\).`, String.raw`\((1,1)\to(4,3)\), \((-1,-1)\to(2,1)\), \((2,0.5)\to(5,2.5)\).`],
      String.raw`asymptotes \(x=3\), \(y=2\); domain \(x\ne3\), range \(y\ne2\)`,
      plane({ view: { xmin: -2, xmax: 8, ymin: -3, ymax: 7 }, curves: [{ f: (x) => 1 / (x - 3) + 2, color: "red" }], vlines: [{ x: 3, color: "gray", dash: true }], lines: [{ m: 0, b: 2, color: "gray", dash: true }], points: [{ x: 4, y: 3, label: "(4, 3)" }, { x: 2, y: 1, label: "(2, 1)" }], step: { x: 1, y: 1 } })],
    ["Equation from a graph", "The V-shaped graph has its vertex at (−3, −1) and passes through (−2, 1). Write its equation.",
      [String.raw`The vertex gives \(d=-3\), \(c=-1\): \(y=a|x+3|-1\).`, String.raw`Substitute \((-2,1)\): \(1=a|1|-1\Rightarrow a=2\).`],
      String.raw`\(y=2|x+3|-1\)`,
      plane({ view: { xmin: -7, xmax: 3, ymin: -3, ymax: 7 }, curves: [{ f: (x) => 2 * Math.abs(x + 3) - 1, color: "amber" }], points: [{ x: -3, y: -1, label: "(−3, −1)" }, { x: -2, y: 1, label: "(−2, 1)" }], step: { x: 1, y: 1 } })],
  ]),

  practice([
    q("map a point", String.raw`On \(y=\sqrt x\) the point \((9,3)\) maps to which x-coordinate on \(y=\sqrt{x-5}+3\)?`, num(14),
      "Right 5 changes x.", [String.raw`\((9,3)\to(9+5,\ 3+3)=(14,6)\).`], String.raw`\(14\)`),
    q("maximum", String.raw`What is the maximum value of \(y=-2(x+1)^2+3\)?`, num(3),
      "a < 0, so the vertex is the highest point.", [String.raw`Vertex \((-1,3)\).`], String.raw`\(3\)`),
    q("range", String.raw`The range of \(y=4|x-2|-5\) is \(y\ge m\). Find \(m\).`, num(-5),
      "Where is the vertex?", [String.raw`Vertex \((2,-5)\); \(a>0\) opens up.`], String.raw`\(-5\)`),
    q("asymptote", String.raw`The vertical asymptote of \(y=\frac{1}{x+6}-4\) is \(x=p\). Find \(p\).`, num(-6),
      "Where is the denominator zero?", [String.raw`\(x+6=0\).`], String.raw`\(-6\)`),
    q("describe", String.raw`How is \(y=(x-4)^2\) related to \(y=x^2\)?`, choice(["translated 4 right", "translated 4 left", "translated 4 down", "stretched by 4"], 0),
      "The input must be 4 larger for the same output.", [String.raw`\(d=4\).`], "translated 4 units right"),
  ]),

  ...hard([
    ["Finding a from two points", String.raw`A transformed square-root function \(y=a\sqrt{x-d}+c\) starts at \((2,-3)\) and passes through \((6,5)\). Find its equation.`,
      [String.raw`The starting point is \((d,c)=(2,-3)\): \(y=a\sqrt{x-2}-3\).`, String.raw`Substitute \((6,5)\): \(5=a\sqrt4-3\Rightarrow2a=8\Rightarrow a=4\).`],
      String.raw`\(y=4\sqrt{x-2}-3\)`,
      plane({ view: { xmin: 0, xmax: 10, ymin: -4, ymax: 8 }, curves: [{ f: (x) => 4 * Math.sqrt(x - 2) - 3, a: 2, color: "green" }], points: [{ x: 2, y: -3, label: "(2, −3)" }, { x: 6, y: 5, label: "(6, 5)" }], step: { x: 1, y: 1 } })],
    ["A parabola from its vertex and a point", String.raw`A parabola has vertex \((-1,7)\) and passes through \((2,-11)\). Write it as \(y=a(x-d)^2+c\) and describe the transformations of \(y=x^2\).`,
      [String.raw`\(y=a(x+1)^2+7\). Substitute: \(-11=9a+7\Rightarrow a=-2\).`, String.raw`Vertical stretch by 2, reflection in the x-axis, then 1 left and 7 up.`],
      String.raw`\(y=-2(x+1)^2+7\)`],
  ], [
    q("hard", String.raw`\(y=a|x-1|+4\) passes through \((4,-5)\). Find \(a\).`, num(-3),
      "Substitute the point.", [String.raw`\(-5=3a+4\).`], String.raw`\(-3\)`),
    q("hard", String.raw`\(y=\frac{a}{x-2}+1\) passes through \((5,3)\). Find \(a\).`, num(6),
      "Substitute and solve.", [String.raw`\(3=\frac a3+1\Rightarrow\frac a3=2\).`], String.raw`\(6\)`),
    q("hard", String.raw`\(y=a(x+3)^2-8\) passes through \((-1,0)\). What is its other x-intercept?`, num(-5),
      "Find a, or use symmetry about the axis x = −3.", [String.raw`The axis is \(x=-3\); \(-1\) is 2 to the right, so the other zero is 2 to the left.`], String.raw`\(-5\)`),
  ]),

  wrapUp({
    qas: [
      ["Why does f(x − 3) move right, not left?", "To get the same output as f at x = 0, you now need x − 3 = 0, i.e. x = 3. Every point is reached 3 units later."],
      ["Does the order matter?", "Yes, between stretches and translations. Stretch/reflect first, then translate — the mapping (x, y) → (x + d, ay + c) does exactly that."],
      ["Does a vertical stretch change the x-intercepts?", "Not of the parent: a point with y = 0 stays at y = 0 (but a later vertical translation can change them)."],
      ["What happens to the asymptotes of 1/x?", "They translate with the graph: x = d and y = c. A vertical stretch does not move them."],
      ["How do I find a from a graph?", "Read d and c from the vertex (or starting point / asymptotes), then substitute one more point."],
    ],
    summary: [
      "c: up/down; d: right/left (opposite sign in the bracket).",
      "|a| > 1 stretches, |a| < 1 compresses, a < 0 reflects in the x-axis.",
      "(x, y) → (x + d, ay + c).",
      "Range changes with a and c; the domain changes with d.",
    ],
    next: "1.7 adds horizontal stretches, compressions and reflections in the y-axis (the parameter k).",
  }),
];
