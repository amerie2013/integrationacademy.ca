// IB AA SL 2.3 — Graphs of Functions: intercepts, turning points, asymptotes, solving equations graphically, models
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, hard, plane } from "./lib.mjs";

export const TITLE = "2.3 Graphs of Functions";
export const ID = "1baa0002-0001-4001-8001-000000000203";
const S = String.raw;
const P = (x, y, label, color = "blue") => ({ x, y, label, color });

export const blocks = () => [
  intro({
    icon: "📉",
    title: "Graphs of Functions",
    overview: S`A good graph shows the features that matter: where it crosses the axes, where it turns, and where it heads off towards an asymptote. In this lesson you will sketch graphs from their key features, read those features with a graphing calculator, and solve equations by finding where two graphs meet.`,
    goals: [
      "find the x- and y-intercepts of a graph;",
      "identify local maximum and minimum points;",
      "identify vertical and horizontal asymptotes;",
      "sketch a graph showing its key features, and know the difference between a sketch and an accurate drawing;",
      "solve equations graphically as the intersections of two graphs.",
    ],
    curriculum: "SL 2.3 (the graph of a function; creating a sketch from information given; using technology to graph functions), SL 2.4 (key features of graphs: maximum and minimum values, intercepts, symmetry, vertex, zeros, asymptotes; intersections of graphs)",
    prior: [
      [S`Solve \(x^2-x-6=0\).`, S`\(x=-2\) or \(x=3\).`],
      [S`For which \(x\) is \(\frac{1}{x-2}\) not defined?`, S`\(x=2\).`],
      [S`Evaluate \(2^0\).`, S`\(1\).`],
    ],
    words: [
      ["x-intercept (zero)", "where the graph meets the x-axis: \\(f(x)=0\\)", "\\((3,0)\\)"],
      ["y-intercept", "where the graph meets the y-axis: \\((0,f(0))\\)", "\\((0,-6)\\)"],
      ["Local maximum / minimum", "a turning point higher / lower than the points around it", "\\((-1,2)\\)"],
      ["Vertical asymptote", "a line \\(x=a\\) the graph approaches but never touches", "\\(x=2\\)"],
      ["Horizontal asymptote", "a line \\(y=b\\) the graph approaches as \\(x\\to\\pm\\infty\\)", "\\(y=1\\)"],
    ],
  }),

  section("📌 The key features", S`
  ${table(["Feature", "How to find it", "Example y = x² − x − 6"], [
    ["y-intercept", S`evaluate \(f(0)\)`, "(0, −6)"],
    ["x-intercepts", S`solve \(f(x)=0\)`, "(−2, 0) and (3, 0)"],
    ["turning point", "vertex, or GDC maximum/minimum", "(0.5, −6.25)"],
    ["symmetry", "axis halfway between the zeros", "x = 0.5"],
    ["asymptotes", "values the function can never reach", "none for a quadratic"],
  ])}
  ${plane({ view: { xmin: -4, xmax: 5, ymin: -8, ymax: 6 }, step: { x: 1, y: 1 }, curves: [{ f: (x) => x * x - x - 6, color: "violet" }], vlines: [{ x: 0.5, color: "gray", dash: true }], points: [P(-2, 0, "(−2, 0)"), P(3, 0, "(3, 0)"), P(0, -6, "(0, −6)", "green"), P(0.5, -6.25, "(0.5, −6.25)", "amber")] }, "A sketch labels every key feature with its coordinates")}
  ${keyIdea(S`A <strong>sketch</strong> shows the shape and labels the key features; a <strong>drawing</strong> is accurate to scale over a given domain. "Sketch" in an exam still needs the intercepts, turning points and asymptotes marked.`)}`),

  section("📌 Asymptotes", S`
  <p>For \(y=\dfrac{3}{x-2}+1\), \(x=2\) makes the denominator 0, so there is a vertical asymptote \(x=2\). As \(x\) becomes very large, \(\frac{3}{x-2}\to0\), so \(y\to1\): a horizontal asymptote \(y=1\).</p>
  ${plane({ view: { xmin: -5, xmax: 9, ymin: -6, ymax: 8 }, step: { x: 1, y: 1 }, curves: [{ f: (x) => 3 / (x - 2) + 1, a: -5, b: 1.95, color: "violet" }, { f: (x) => 3 / (x - 2) + 1, a: 2.05, b: 9, color: "violet" }], vlines: [{ x: 2, color: "red", dash: true }], lines: [{ m: 0, b: 1, color: "red", dash: true }], points: [P(0, -0.5, "(0, −0.5)", "green"), P(-1, 0, "(−1, 0)")] }, "Asymptotes x = 2 and y = 1 (dashed red)")}
  ${plane({ view: { xmin: -5, xmax: 4, ymin: -4, ymax: 8 }, step: { x: 1, y: 1 }, curves: [{ f: (x) => 2 ** x - 3, color: "blue" }], lines: [{ m: 0, b: -3, color: "red", dash: true }], points: [P(0, -2, "(0, −2)", "green"), P(Math.log2(3), 0, "(1.58, 0)")] }, "y = 2ˣ − 3 approaches y = −3 on the left")}
  ${watchOut([
    "Label intercepts as coordinates, e.g. (3, 0), not just 3.",
    "A graph never crosses a vertical asymptote; it can sometimes cross a horizontal one.",
    "Set the GDC window to show every feature before you sketch.",
    "Solving f(x) = g(x) graphically: read the x-coordinates of the intersections.",
  ])}`),

  section("📌 Explore", S`<p>Switch between the four functions. The explorer marks intercepts (blue and green), turning points (amber) and asymptotes (dashed red) — exactly what a sketch should label.</p>`),

  widget("graphFeatures", { init: "cubic" }),

  examples([
    ["Level 1 · Intercepts", S`Find the intercepts of \(f(x)=x^2-x-6\) and the minimum point.`,
      [S`\(f(0)=-6\).`, S`\((x-3)(x+2)=0\Rightarrow x=3\) or \(x=-2\).`, S`Axis \(x=0.5\): \(f(0.5)=0.25-0.5-6=-6.25\).`],
      S`\((0,-6)\), \((-2,0)\), \((3,0)\); minimum \((0.5,-6.25)\)`],
    ["Level 1 · Reading features", S`The graph of \(f(x)=x^3-3x\) is shown. State its zeros, its local maximum and minimum, and its symmetry.`,
      [S`Zeros: \(x(x^2-3)=0\Rightarrow x=0,\ \pm\sqrt3\approx\pm1.73\).`, S`Local maximum \((-1,2)\), local minimum \((1,-2)\) (read from the GDC).`, S`It has rotational symmetry about the origin: \(f(-x)=-f(x)\).`],
      S`zeros \(0,\pm\sqrt3\); max \((-1,2)\), min \((1,-2)\)`,
      plane({ view: { xmin: -3, xmax: 3, ymin: -4, ymax: 4 }, step: { x: 1, y: 1 }, curves: [{ f: (x) => x ** 3 - 3 * x, color: "violet" }], points: [P(-1, 2, "(−1, 2)", "amber"), P(1, -2, "(1, −2)", "amber"), P(Math.sqrt(3), 0, "(1.73, 0)"), P(-Math.sqrt(3), 0, "(−1.73, 0)"), P(0, 0, "", "blue")] })],
    ["Level 2 · A rational function", S`Find the asymptotes and intercepts of \(y=\dfrac{3}{x-2}+1\).`,
      [S`Vertical asymptote \(x=2\); horizontal asymptote \(y=1\).`, S`\(x=0\): \(y=-1.5+1=-0.5\).`, S`\(y=0\): \(\frac{3}{x-2}=-1\Rightarrow x-2=-3\Rightarrow x=-1\).`],
      S`\(x=2\), \(y=1\); \((0,-0.5)\), \((-1,0)\)`],
    ["Level 2 · Solving with two graphs", S`Solve \(x^2=x+2\) by drawing \(y=x^2\) and \(y=x+2\).`,
      [S`The graphs meet at \((-1,1)\) and \((2,4)\).`, S`Check: \(x^2-x-2=(x-2)(x+1)=0\).`],
      S`\(x=-1\) or \(x=2\)`,
      plane({ view: { xmin: -3, xmax: 4, ymin: -1, ymax: 8 }, step: { x: 1, y: 1 }, curves: [{ f: (x) => x * x, color: "violet" }, { f: (x) => x + 2, color: "blue" }], points: [P(-1, 1, "(−1, 1)", "red"), P(2, 4, "(2, 4)", "red")] })],
    ["Level 3 · A cooling model", S`A drink cools according to \(T(x)=50(0.8)^x+10\) (°C after \(x\) minutes). State the horizontal asymptote and the starting temperature, and find when \(T=30\).`,
      [S`As \(x\to\infty\), \(0.8^x\to0\), so \(T\to10\): the asymptote \(T=10\) is the room temperature.`, S`\(T(0)=60\) °C.`, S`\(50(0.8)^x=20\Rightarrow0.8^x=0.4\Rightarrow x=\frac{\ln0.4}{\ln0.8}\approx4.11\) min.`],
      S`\(T=10\); 60 °C; about 4.11 minutes`,
      plane({ view: { xmin: -0.5, xmax: 14, ymin: 0, ymax: 65 }, step: { x: 1, y: 5 }, curves: [{ f: (x) => 50 * 0.8 ** x + 10, a: 0, color: "violet" }], lines: [{ m: 0, b: 10, color: "red", dash: true }, { m: 0, b: 30, color: "green", dash: true }], points: [P(0, 60, "(0, 60)", "green"), P(4.106, 30, "(4.11, 30)")], xlabel: "x (min)", ylabel: "T" })],
  ]),

  practice([
    q("Level 1 · y-intercept", S`Find the y-intercept of \(f(x)=(x-4)(x+1)\).`, num(-4),
      "f(0).", [S`\((-4)(1)\).`], S`\(-4\)`),
    q("Level 1 · asymptote", S`What is the vertical asymptote of \(y=\dfrac{1}{x+3}\)? Enter the x-value.`, num(-3),
      "Where is the denominator 0?", [S`\(x+3=0\).`], S`\(x=-3\)`),
    q("Level 2 · zeros", S`How many x-intercepts does \(y=x^3-4x\) have?`, num(3),
      "Factor fully.", [S`\(x(x-2)(x+2)\).`], S`\(3\)`),
    q("Level 2 · horizontal asymptote", S`What is the horizontal asymptote of \(y=2^x-5\)? Enter the y-value.`, num(-5),
      "What does 2ˣ approach as x → −∞?", [S`\(2^x\to0\).`], S`\(y=-5\)`),
    q("Level 2 · intersections", S`How many solutions does \(x^2-4=2x\) have?`, num(2),
      "Count the intersections of y = x² − 4 and y = 2x.", [S`\(x^2-2x-4=0\) has discriminant \(20>0\).`], S`\(2\)`),
  ]),

  ...hard([
    ["How many solutions?", S`For \(f(x)=x^3-6x^2+9x\), find the intercepts and turning points, then decide how many solutions \(f(x)=2\) and \(f(x)=5\) have.`,
      [S`\(f(x)=x(x-3)^2\): intercepts \((0,0)\) and \((3,0)\) (the graph touches at 3).`, S`GDC: local maximum \((1,4)\), local minimum \((3,0)\).`, S`\(y=2\) lies between 0 and 4: three intersections. \(y=5\) is above the maximum: one intersection.`],
      "f(x) = 2: 3 solutions; f(x) = 5: 1 solution",
      plane({ view: { xmin: -1, xmax: 5, ymin: -2, ymax: 7 }, step: { x: 1, y: 1 }, curves: [{ f: (x) => x ** 3 - 6 * x * x + 9 * x, color: "violet" }], lines: [{ m: 0, b: 2, color: "green", dash: true }, { m: 0, b: 5, color: "blue", dash: true }], points: [P(1, 4, "(1, 4)", "amber"), P(3, 0, "(3, 0)", "amber"), P(0, 0, "(0, 0)")] })],
    ["An equation you cannot solve by algebra", S`Solve \(2^x=x+2\) graphically.`,
      [S`Graph \(y=2^x\) and \(y=x+2\).`, S`They meet at \(x=2\) (\(4=4\)) and near \(x=-1.69\).`, S`Check: \(2^{-1.69}\approx0.310\) and \(-1.69+2=0.31\).`],
      S`\(x=2\) or \(x\approx-1.69\)`,
      plane({ view: { xmin: -4, xmax: 4, ymin: -2, ymax: 8 }, step: { x: 1, y: 1 }, curves: [{ f: (x) => 2 ** x, color: "violet" }, { f: (x) => x + 2, color: "blue" }], points: [P(2, 4, "(2, 4)", "red"), P(-1.69, 0.31, "(−1.69, 0.31)", "red")] })],
  ], [
    q("Level 3 · asymptote", S`What is the horizontal asymptote of \(y=\dfrac{2x+5}{x-3}\)? Enter the y-value.`, num(2),
      "Divide top and bottom by x for large x.", [S`\(\frac{2+5/x}{1-3/x}\to2\).`], S`\(y=2\)`),
    q("Level 3 · count solutions", S`How many solutions does \(x^3-3x=1\) have?`, num(3),
      "The cubic has a local max of 2 and a local min of −2.", [S`\(y=1\) lies between them.`], S`\(3\)`),
    q("Level 3 · x-intercept", S`Find the x-intercept of \(y=\dfrac{4}{x-1}-2\).`, num(3),
      "Set y = 0.", [S`\(\frac{4}{x-1}=2\Rightarrow x-1=2\).`], S`\(3\)`),
  ]),

  wrapUp({
    qas: [
      ["Do I have to use a GDC?", "On Paper 2, yes, to find turning points and intersections. On Paper 1 use algebra for intercepts and asymptotes."],
      ["How do I choose a window?", "Start from the intercepts and asymptotes you can find by algebra, then widen until every turning point shows."],
      ["What is the difference between a zero and an x-intercept?", "A zero is the x-value where f(x) = 0; the x-intercept is the point (x, 0)."],
      ["Can a graph cross a horizontal asymptote?", "Yes, in the middle of the graph; the asymptote only describes behaviour as x → ±∞."],
      ["Why solve equations graphically?", "Many equations, like 2ˣ = x + 2, cannot be solved exactly with algebra."],
    ],
    summary: [
      "Intercepts: f(0) and solutions of f(x) = 0.",
      "Turning points: local maximum and minimum (GDC or vertex).",
      "Asymptotes: vertical where a denominator is 0; horizontal for the long-run value.",
      "f(x) = g(x) ⇔ intersections of y = f(x) and y = g(x).",
    ],
    next: "2.4 looks at the inputs a function can take (domain) and the outputs it produces (range).",
  }),
];
