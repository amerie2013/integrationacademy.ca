// MCR3U 1.6 — Translations and Vertical Stretches: y = af(k(x − d)) + c, with the key-point mapping (x/k + d, ay + c)
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, plane } from "./lib.mjs";

export const TITLE = "1.6 Translations and Vertical Stretches";
export const ID = "fb3ea947-f6f0-4301-a7f5-86245df1c0f1";

export const blocks = () => [
  intro({
    icon: "↔️",
    title: "Translations and Vertical Stretches",
    overview: String.raw`Every parent function can be slid around the grid and stretched. In this lesson you will learn what all four parameters do in \(y=af(k(x-d))+c\): \(c\) moves the graph up or down, \(d\) moves it left or right, \(a\) stretches, compresses or flips it vertically, and \(k\) stretches, compresses or flips it horizontally. You will graph by moving key points with \((x,y)\to\left(\frac xk+d,\ ay+c\right)\) and write equations from graphs.`,
    goals: [
      "describe the effect of c and d as vertical and horizontal translations;",
      "describe the effect of a as a vertical stretch, compression and/or reflection in the x-axis;",
      "describe the effect of k as a horizontal stretch, compression and/or reflection in the y-axis;",
      "map key points with (x, y) → (x/k + d, ay + c), factoring k out first;",
      "sketch transformed parents and state their domain and range;",
      "write an equation from a graph or a description.",
    ],
    curriculum: "A1.8 (roles of a, k, d and c in y = af(k(x − d)) + c for f(x) = x, x², √x, 1/x, |x|), A1.9 (sketch by applying transformations and state the domain and range)",
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
      ["Horizontal compression (|k| > 1)", "x-values are divided by |k|; the graph is squeezed toward the y-axis", "\\(y=\\sqrt{2x}\\)"],
      ["Horizontal stretch (0 < |k| < 1)", "x-values are divided by |k|, so they grow; the graph is pulled away from the y-axis", "\\(y=\\left(\\tfrac13x\\right)^2\\)"],
      ["Reflection in the y-axis (k < 0)", "every x-value changes sign", "\\(y=\\sqrt{-x}\\)"],
      ["Mapping notation", "\\((x,y)\\to\\left(\\frac xk+d,\\ ay+c\\right)\\)", ""],
    ],
  }),

  section("📌 What each parameter does", String.raw`
  ${table(["In y = af(k(x − d)) + c", "Effect on the graph", "Effect on a key point"], [
    ["\\(c>0\\) / \\(c<0\\)", "up \\(c\\) / down \\(|c|\\)", "\\(y\\to y+c\\)"],
    ["\\(d>0\\) / \\(d<0\\)", "right \\(d\\) / left \\(|d|\\)", "\\(x\\to x+d\\)"],
    ["\\(|a|>1\\)", "vertical stretch by \\(|a|\\)", "\\(y\\to ay\\)"],
    ["\\(0<|a|<1\\)", "vertical compression by \\(|a|\\)", "\\(y\\to ay\\)"],
    ["\\(a<0\\)", "reflection in the x-axis", "y changes sign"],
    ["\\(|k|>1\\)", "horizontal compression by \\(\\frac1{|k|}\\)", "\\(x\\to \\frac xk\\)"],
    ["\\(0<|k|<1\\)", "horizontal stretch by \\(\\frac1{|k|}\\)", "\\(x\\to \\frac xk\\)"],
    ["\\(k<0\\)", "reflection in the y-axis", "x changes sign"],
  ])}
  ${keyIdea(String.raw`Every point \((x,y)\) of \(y=f(x)\) moves to \(\left(\frac xk+d,\ ay+c\right)\). Do the stretches and reflections first (divide x by \(k\), multiply y by \(a\)), then translate (add \(d\) and \(c\)). The sign inside the bracket is opposite to the move: \(f(x-3)\) moves <strong>right</strong> 3. Always factor \(k\) out before reading \(d\): \(f(2x-6)=f(2(x-3))\), so \(d=3\), not 6.`)}`),

  section("📌 Explore", String.raw`<p>Change \(a\), \(k\), \(d\) and \(c\) for each parent. Compare the grey key points of the parent with the blue image points in the table, and check each one against \(\left(\frac xk+d,\ ay+c\right)\). Notice that \(k\) only moves points sideways and \(a\) only moves them up and down.</p>`),

  widget("funcTransform", { parent: "sqrt", show: ["a", "k", "d", "c"], init: { a: 1, k: 1, d: 0, c: 0 } }),

  section("📌 Graphing by key points", String.raw`
  <p>For \(y=2\sqrt{x-1}+3\) (\(k=1\)): stretch the parent's y-values by 2, then move every point right 1 and up 3.</p>
  ${table(["\\(\\sqrt x\\): (x, y)", "(0, 0)", "(1, 1)", "(4, 2)", "(9, 3)"], [["\\((x+1,\\ 2y+3)\\)", "(1, 3)", "(2, 5)", "(5, 7)", "(10, 9)"]])}
  ${plane({ view: { xmin: -1, xmax: 11, ymin: -1, ymax: 11 }, curves: [{ f: (x) => Math.sqrt(x), a: 0, color: "gray" }, { f: (x) => 2 * Math.sqrt(x - 1) + 3, a: 1, color: "violet" }], points: [{ x: 1, y: 3, label: "(1, 3)" }, { x: 2, y: 5 }, { x: 5, y: 7, label: "(5, 7)" }, { x: 10, y: 9, label: "(10, 9)" }], step: { x: 1, y: 1 } }, "parent √x (grey) → y = 2√(x − 1) + 3")}
  <p>Now add \(k\). For \(y=3\sqrt{\tfrac12(x+2)}-1\): \(a=3\), \(k=\tfrac12\), \(d=-2\), \(c=-1\). Dividing by \(k=\tfrac12\) doubles every x-coordinate, so the graph is stretched horizontally by 2: \((x,y)\to(2x-2,\ 3y-1)\).</p>
  ${table(["\\(\\sqrt x\\): (x, y)", "(0, 0)", "(1, 1)", "(4, 2)"], [["\\((2x-2,\\ 3y-1)\\)", "(−2, −1)", "(0, 2)", "(6, 5)"]])}
  ${plane({ view: { xmin: -3, xmax: 9, ymin: -2, ymax: 7 }, curves: [{ f: (x) => Math.sqrt(x), a: 0, color: "gray" }, { f: (x) => 3 * Math.sqrt(0.5 * (x + 2)) - 1, a: -2, color: "green" }], points: [{ x: -2, y: -1, label: "(−2, −1)" }, { x: 0, y: 2, label: "(0, 2)" }, { x: 6, y: 5, label: "(6, 5)" }], step: { x: 1, y: 1 } }, "parent √x (grey) → y = 3√(½(x + 2)) − 1")}
  ${watchOut([
    "y = (x + 5)² moves LEFT 5, not right.",
    "k divides the x-coordinates: k = 2 halves them (compression), k = ½ doubles them (stretch).",
    "Factor k out before reading d: √(3x − 12) = √(3(x − 4)) moves right 4, not 12.",
    "Stretch before you translate: (1, 1) → (1, 2) → (2, 5), not (2, 4) → (2, 8).",
    "For 1/x, move the asymptotes too: x = d and y = c. Stretches by a or k do not move them.",
    "a < 0 flips the graph up–down (the range inequality reverses); k < 0 flips it left–right (the domain inequality reverses).",
  ])}`),

  examples([
    ["Translations only", String.raw`Describe \(y=\sqrt{x+4}-2\), map the key points of \(\sqrt x\), and give the domain and range.`,
      [String.raw`\(a=1\), \(k=1\), \(d=-4\), \(c=-2\): left 4, down 2: \((x,y)\to(x-4,\ y-2)\).`, String.raw`\((0,0)\to(-4,-2)\), \((1,1)\to(-3,-1)\), \((4,2)\to(0,0)\), \((9,3)\to(5,1)\).`],
      String.raw`domain \(\{x\in\mathbb R\mid x\ge-4\}\), range \(\{y\in\mathbb R\mid y\ge-2\}\)`,
      plane({ view: { xmin: -6, xmax: 6, ymin: -4, ymax: 4 }, curves: [{ f: (x) => Math.sqrt(x), a: 0, color: "gray" }, { f: (x) => Math.sqrt(x + 4) - 2, a: -4, color: "violet" }], points: [{ x: -4, y: -2, label: "(−4, −2)" }, { x: -3, y: -1 }, { x: 0, y: 0 }, { x: 5, y: 1, label: "(5, 1)" }], step: { x: 1, y: 1 } })],
    ["A vertical stretch and a horizontal compression", String.raw`Graph \(y=3\sqrt{2x}\) from the key points of \(\sqrt x\).`,
      [String.raw`\(a=3\), \(k=2\): \((x,y)\to\left(\frac x2,\ 3y\right)\).`, String.raw`\((0,0)\to(0,0)\), \((1,1)\to(0.5,3)\), \((4,2)\to(2,6)\), \((9,3)\to(4.5,9)\).`],
      String.raw`a much steeper curve through \((0,0)\), \((0.5,3)\), \((2,6)\), \((4.5,9)\); domain \(x\ge0\), range \(y\ge0\)`,
      plane({ view: { xmin: -1, xmax: 7, ymin: -1, ymax: 10 }, curves: [{ f: (x) => Math.sqrt(x), a: 0, color: "gray" }, { f: (x) => 3 * Math.sqrt(2 * x), a: 0, color: "violet" }], points: [{ x: 0.5, y: 3, label: "(0.5, 3)" }, { x: 2, y: 6, label: "(2, 6)" }, { x: 4.5, y: 9, label: "(4.5, 9)" }], step: { x: 1, y: 1 } })],
    ["Reflection, compression and translations", String.raw`Describe \(y=-\tfrac12(x-2)^2+6\) and find the images of the parabola's key points.`,
      [String.raw`\(a=-\tfrac12\), \(k=1\): compress by \(\tfrac12\) and reflect in the x-axis; then right 2, up 6.`, String.raw`\((x,y)\to(x+2,\ -\tfrac12y+6)\): \((-2,4)\to(0,4)\), \((-1,1)\to(1,5.5)\), \((0,0)\to(2,6)\), \((1,1)\to(3,5.5)\), \((2,4)\to(4,4)\).`],
      String.raw`a wide parabola opening down, vertex \((2,6)\), range \(y\le6\)`,
      plane({ view: { xmin: -3, xmax: 7, ymin: -3, ymax: 7 }, curves: [{ f: (x) => -0.5 * (x - 2) ** 2 + 6, color: "violet" }], points: [{ x: 2, y: 6, label: "(2, 6)" }, { x: 0, y: 4, label: "(0, 4)" }, { x: 4, y: 4, label: "(4, 4)" }, { x: 1, y: 5.5 }, { x: 3, y: 5.5 }], step: { x: 1, y: 1 } })],
    ["Factoring k out of a reciprocal", String.raw`Sketch \(y=\frac{1}{2x-6}+2\).`,
      [String.raw`Factor: \(2x-6=2(x-3)\), so \(k=2\), \(d=3\), \(c=2\) (not \(d=6\)).`, String.raw`Asymptotes move to \(x=3\) and \(y=2\). \((x,y)\to\left(\frac x2+3,\ y+2\right)\): \((1,1)\to(3.5,3)\), \((-1,-1)\to(2.5,1)\), \((2,0.5)\to(4,2.5)\).`],
      String.raw`asymptotes \(x=3\), \(y=2\); domain \(x\ne3\), range \(y\ne2\)`,
      plane({ view: { xmin: -2, xmax: 8, ymin: -3, ymax: 7 }, curves: [{ f: (x) => 1 / (2 * x - 6) + 2, color: "red" }], vlines: [{ x: 3, color: "gray", dash: true }], lines: [{ m: 0, b: 2, color: "gray", dash: true }], points: [{ x: 3.5, y: 3, label: "(3.5, 3)" }, { x: 2.5, y: 1, label: "(2.5, 1)" }, { x: 4, y: 2.5 }], step: { x: 1, y: 1 } })],
    ["Equation from a graph", "The V-shaped graph has its vertex at (−3, −1) and passes through (−2, 1). Write its equation.",
      [String.raw`The vertex gives \(d=-3\), \(c=-1\): \(y=a|x+3|-1\). (For \(|x|\) a horizontal factor can always be rewritten as a vertical one, \(|kx|=|k||x|\), so take \(k=1\).)`, String.raw`Substitute \((-2,1)\): \(1=a|1|-1\Rightarrow a=2\).`],
      String.raw`\(y=2|x+3|-1\)`,
      plane({ view: { xmin: -7, xmax: 3, ymin: -3, ymax: 7 }, curves: [{ f: (x) => 2 * Math.abs(x + 3) - 1, color: "amber" }], points: [{ x: -3, y: -1, label: "(−3, −1)" }, { x: -2, y: 1, label: "(−2, 1)" }], step: { x: 1, y: 1 } })],
  ]),

  practice([
    q("map a point", String.raw`On \(y=\sqrt x\) the point \((9,3)\) maps to which x-coordinate on \(y=\sqrt{3(x-1)}+2\)?`, num(4),
      "Use x/k + d.", [String.raw`\(\frac93+1=4\); the image is \((4,5)\).`], String.raw`\(4\)`),
    q("maximum", String.raw`What is the maximum value of \(y=-2(x+1)^2+3\)?`, num(3),
      "a < 0, so the vertex is the highest point.", [String.raw`Vertex \((-1,3)\).`], String.raw`\(3\)`),
    q("range", String.raw`The range of \(y=4|x-2|-5\) is \(y\ge m\). Find \(m\).`, num(-5),
      "Where is the vertex?", [String.raw`Vertex \((2,-5)\); \(a>0\) opens up.`], String.raw`\(-5\)`),
    q("asymptote", String.raw`The vertical asymptote of \(y=\frac{1}{3x+6}-4\) is \(x=p\). Find \(p\).`, num(-2),
      "Factor k out first, or set the denominator to zero.", [String.raw`\(3x+6=3(x+2)\), so \(d=-2\).`], String.raw`\(-2\)`),
    q("describe", String.raw`How is \(y=\sqrt{-x}\) related to \(y=\sqrt x\)?`, choice(["reflected in the y-axis", "reflected in the x-axis", "translated 1 left", "compressed horizontally"], 0),
      "k = −1 changes the sign of every x-coordinate.", [String.raw`\((x,y)\to(-x,\ y)\): \((4,2)\to(-4,2)\).`], "a reflection in the y-axis"),
  ]),

  ...hard([
    ["Finding a from two points", String.raw`A transformed square-root function \(y=a\sqrt{x-d}+c\) starts at \((2,-3)\) and passes through \((6,5)\). Find its equation.`,
      [String.raw`The starting point is \((d,c)=(2,-3)\): \(y=a\sqrt{x-2}-3\).`, String.raw`Substitute \((6,5)\): \(5=a\sqrt4-3\Rightarrow2a=8\Rightarrow a=4\).`],
      String.raw`\(y=4\sqrt{x-2}-3\)`,
      plane({ view: { xmin: 0, xmax: 10, ymin: -4, ymax: 8 }, curves: [{ f: (x) => 4 * Math.sqrt(x - 2) - 3, a: 2, color: "green" }], points: [{ x: 2, y: -3, label: "(2, −3)" }, { x: 6, y: 5, label: "(6, 5)" }], step: { x: 1, y: 1 } })],
    ["All four parameters with a negative k", String.raw`Describe \(y=3\sqrt{-\tfrac12x+2}-4\), map the key points of \(\sqrt x\), and state the domain and range.`,
      [String.raw`Factor: \(-\tfrac12x+2=-\tfrac12(x-4)\), so \(a=3\), \(k=-\tfrac12\), \(d=4\), \(c=-4\).`, String.raw`Vertical stretch by 3; horizontal stretch by 2 and reflection in the y-axis; then right 4 and down 4. \((x,y)\to(-2x+4,\ 3y-4)\).`, String.raw`\((0,0)\to(4,-4)\), \((1,1)\to(2,-1)\), \((4,2)\to(-4,2)\), \((9,3)\to(-14,5)\).`],
      String.raw`starts at \((4,-4)\) and runs to the left; domain \(x\le4\), range \(y\ge-4\)`,
      plane({ view: { xmin: -15, xmax: 6, ymin: -5, ymax: 6 }, curves: [{ f: (x) => 3 * Math.sqrt(-0.5 * x + 2) - 4, b: 4, color: "violet" }], points: [{ x: 4, y: -4, label: "(4, −4)" }, { x: 2, y: -1, label: "(2, −1)" }, { x: -4, y: 2, label: "(−4, 2)" }, { x: -14, y: 5, label: "(−14, 5)" }], step: { x: 2, y: 1 } })],
  ], [
    q("hard", String.raw`\(y=a|x-1|+4\) passes through \((4,-5)\). Find \(a\).`, num(-3),
      "Substitute the point.", [String.raw`\(-5=3a+4\).`], String.raw`\(-3\)`),
    q("hard", String.raw`\(y=\sqrt{k(x-2)}\) passes through \((6,4)\). Find \(k\).`, num(4),
      "Substitute and square both sides.", [String.raw`\(4=\sqrt{4k}\Rightarrow16=4k\).`], String.raw`\(4\)`),
    q("hard", String.raw`\(y=a(x+3)^2-8\) passes through \((-1,0)\). What is its other x-intercept?`, num(-5),
      "Find a, or use symmetry about the axis x = −3.", [String.raw`The axis is \(x=-3\); \(-1\) is 2 to the right, so the other zero is 2 to the left.`], String.raw`\(-5\)`),
  ]),

  wrapUp({
    qas: [
      ["Why does f(x − 3) move right, not left?", "To get the same output as f at x = 0, you now need x − 3 = 0, i.e. x = 3. Every point is reached 3 units later."],
      ["Why does k divide the x-coordinate instead of multiplying it?", "In f(kx) the input is multiplied by k, so an output that f reached at x is now reached at x/k. With k = 2 that happens twice as soon, so the graph is squeezed by ½."],
      ["Does the order matter?", "Yes. Stretch/reflect first, then translate — the mapping (x, y) → (x/k + d, ay + c) does exactly that: divide by k and multiply by a, then add d and c."],
      ["Why must I factor k out before reading d?", "The form is f(k(x − d)). In f(2x − 6) the translation is hidden: 2x − 6 = 2(x − 3), so the graph moves right 3, not 6."],
      ["How do I find a or k from a graph?", "Read d and c from the vertex, starting point or asymptotes, then substitute one more point to find the remaining parameter."],
    ],
    summary: [
      "c: up/down; d: right/left (opposite sign in the bracket).",
      "|a| > 1 stretches vertically, |a| < 1 compresses, a < 0 reflects in the x-axis.",
      "|k| > 1 compresses horizontally by 1/|k|, |k| < 1 stretches, k < 0 reflects in the y-axis.",
      "(x, y) → (x/k + d, ay + c), with k factored out first.",
      "The range changes with a and c; the domain changes with k and d.",
    ],
    next: "1.7 looks more closely at horizontal stretches, compressions and reflections (the parameter k) and when they match a vertical change.",
  }),
];
