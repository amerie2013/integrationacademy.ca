// IB AA SL 4.2 — Transforming the Reciprocal Function: y = a/(x − h) + k, asymptotes, intercepts, domain and range, equations from graphs
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, plane } from "./lib.mjs";

export const TITLE = "4.2 Transforming the Reciprocal Function";
export const ID = "1baa0004-0001-4001-8001-000000000402";
const S = String.raw;
const P = (x, y, label, color = "blue") => ({ x, y, label, color });
const hyp = (f, h, xmin, xmax, color = "violet") => [{ f, a: xmin, b: h - 0.02, color }, { f, a: h + 0.02, b: xmax, color }];
const ASY = (h, k) => ({ vlines: [{ x: h, color: "red", dash: true }], lines: [{ m: 0, b: k, color: "red", dash: true }] });

export const blocks = () => [
  intro({
    icon: "↗️",
    title: "Transforming the Reciprocal Function",
    overview: S`Every transformation from chapter 3 works on \(y=\frac1x\). A translation moves the asymptotes with the graph, so \(y=\frac{a}{x-h}+k\) has asymptotes \(x=h\) and \(y=k\); the factor \(a\) stretches the branches and, if negative, reflects them. In this lesson you will sketch these graphs from their asymptotes and intercepts, state the domain and range, and work backwards from a graph to its equation.`,
    goals: [
      "describe \\(y=\\frac{a}{x-h}+k\\) as a sequence of transformations of \\(y=\\frac1x\\);",
      "state the asymptotes, domain and range of \\(y=\\frac{a}{x-h}+k\\);",
      "find the intercepts and sketch the graph;",
      "find \\(a\\), \\(h\\) and \\(k\\) from a graph or from given information;",
      "solve equations and simple models involving translated reciprocals.",
    ],
    curriculum: "SL 2.8 (reciprocal function and its transformations; vertical and horizontal asymptotes) with SL 2.11 (transformations of graphs)",
    prior: [
      [S`What does \(y=f(x-3)+2\) do to the graph of \(f\)?`, "Moves it 3 right and 2 up."],
      [S`State the asymptotes of \(y=\frac{5}{x}\).`, S`\(x=0\) and \(y=0\).`],
      [S`Solve \(\frac{6}{x}=-2\).`, S`\(x=-3\).`],
    ],
    words: [
      ["Vertical asymptote", "\\(x=h\\): where the denominator is 0", "\\(\\frac{1}{x-2}\\): \\(x=2\\)"],
      ["Horizontal asymptote", "\\(y=k\\): the value approached for large \\(|x|\\)", "\\(\\frac1x+3\\): \\(y=3\\)"],
      ["Vertical stretch", "\\(a\\cdot\\frac1x\\) multiplies every y by \\(a\\)", "\\(\\frac{4}{x}\\)"],
      ["Reflection", "\\(a<0\\) reflects the branches in the horizontal asymptote", "\\(-\\frac2x\\)"],
      ["Centre", "the point \\((h,k)\\) where the asymptotes cross", "\\((2,3)\\)"],
    ],
  }),

  section("📌 Moving the asymptotes", S`
  <p>Start from \(y=\frac1x\). Replacing \(x\) by \(x-h\) moves the graph \(h\) units right, so the vertical asymptote moves to \(x=h\). Adding \(k\) moves it \(k\) units up, so the horizontal asymptote moves to \(y=k\). The two asymptotes cross at the <em>centre</em> \((h,k)\), and the curve is symmetric about that point.</p>
  ${plane({ view: { xmin: -4, xmax: 8, ymin: -4, ymax: 8 }, step: { x: 1, y: 1 }, curves: [...hyp((x) => 1 / x, 0, -4, 8, "gray"), ...hyp((x) => 1 / (x - 2) + 3, 2, -4, 8)], ...ASY(2, 3), points: [P(2, 3, "centre (2, 3)", "amber"), P(3, 4, "(3, 4)"), P(1, 2, "(1, 2)")] }, "y = 1/x (grey) moved 2 right and 3 up: asymptotes x = 2 and y = 3")}
  ${table(["Equation", "Vertical asymptote", "Horizontal asymptote", "Domain", "Range"], [
    [S`\(y=\frac{a}{x-h}+k\)`, S`\(x=h\)`, S`\(y=k\)`, S`\(x\ne h\)`, S`\(y\ne k\)`],
    [S`\(y=\frac{3}{x+1}-2\)`, S`\(x=-1\)`, S`\(y=-2\)`, S`\(x\ne-1\)`, S`\(y\ne-2\)`],
  ])}
  ${keyIdea(S`Read the asymptotes straight from \(y=\frac{a}{x-h}+k\): vertical \(x=h\) (the denominator is 0), horizontal \(y=k\). Then the intercepts finish the sketch.`)}`),

  section("📌 Stretching, reflecting and intercepts", S`
  <p>The factor \(a\) multiplies each y-distance from the horizontal asymptote by \(a\). A larger \(|a|\) pushes the branches further from the centre; a negative \(a\) moves them into the other pair of opposite quadrants around the centre.</p>
  ${plane({ view: { xmin: -6, xmax: 6, ymin: -6, ymax: 6 }, step: { x: 1, y: 1 }, curves: [...hyp((x) => 1 / x, 0, -6, 6, "gray"), ...hyp((x) => 4 / x, 0, -6, 6), ...hyp((x) => -2 / x, 0, -6, 6, "green")], ...ASY(0, 0), points: [P(2, 2, "(2, 2)"), P(1, -2, "(1, −2)", "green")] }, "a = 1 (grey), a = 4 (violet), a = −2 (green)")}
  <p>To find intercepts: put \(x=0\) for the y-intercept (if \(h\ne0\)); put \(y=0\) and solve \(\frac{a}{x-h}=-k\) for the x-intercept (if \(k\ne0\)).</p>
  ${plane({ view: { xmin: -5, xmax: 5, ymin: -6, ymax: 6 }, step: { x: 1, y: 1 }, curves: hyp((x) => 3 / (x + 1) - 2, -1, -5, 5), ...ASY(-1, -2), points: [P(0, 1, "(0, 1)", "green"), P(0.5, 0, "(0.5, 0)"), P(-1, -2, "centre (−1, −2)", "amber")] }, "y = 3/(x + 1) − 2: y-intercept 1, x-intercept 0.5")}
  ${plane({ view: { xmin: -2, xmax: 8, ymin: -5, ymax: 5 }, step: { x: 1, y: 1 }, curves: hyp((x) => -2 / (x - 3) + 1, 3, -2, 8), ...ASY(3, 1), points: [P(0, 5 / 3, "(0, 1.67)", "green"), P(5, 0, "(5, 0)"), P(3, 1, "centre (3, 1)", "amber")] }, "y = −2/(x − 3) + 1: a < 0, so the branches are top-left and bottom-right of the centre")}
  ${watchOut([
    "x − h with h = −1 is x + 1: the asymptote is x = −1, not x = 1.",
    "The horizontal asymptote is y = k, not y = 0, once the graph is translated.",
    "The graph has no y-intercept when h = 0 and no x-intercept when k = 0.",
    "Check the sketch with one extra point on each branch.",
  ])}`),

  section("📌 Explore", S`<p>Move \(a\), \(h\) and \(k\). Watch the dashed asymptotes move with \(h\) and \(k\), and the intercepts appear and disappear.</p>`),

  widget("ibRecipTransform", { init: [2, 1, -3] }),

  examples([
    ["Level 1 · Asymptotes, domain, range", S`State the asymptotes, domain and range of \(y=\frac{5}{x-4}+1\).`,
      [S`Denominator 0 at \(x=4\); the constant is 1.`],
      S`\(x=4\), \(y=1\); \(x\ne4\), \(y\ne1\)`],
    ["Level 1 · Describe the transformations", S`Describe how to obtain \(y=\frac{2}{x+3}-1\) from \(y=\frac1x\).`,
      [S`Vertical stretch, factor 2.`, S`Translate 3 left and 1 down.`],
      S`stretch ×2; translate \(\binom{-3}{-1}\)`],
    ["Level 2 · Intercepts and sketch", S`Sketch \(y=\frac{4}{x-2}+2\), showing the asymptotes and intercepts.`,
      [S`Asymptotes \(x=2\), \(y=2\).`, S`\(x=0\): \(y=-2+2=0\), so the graph passes through the origin.`, S`\(y=0\): \(\frac{4}{x-2}=-2\Rightarrow x=0\) (the same point).`],
      S`through \((0,0)\); asymptotes \(x=2\), \(y=2\)`,
      plane({ view: { xmin: -4, xmax: 8, ymin: -4, ymax: 8 }, step: { x: 1, y: 1 }, curves: hyp((x) => 4 / (x - 2) + 2, 2, -4, 8), ...ASY(2, 2), points: [P(0, 0, "(0, 0)", "green"), P(4, 4, "(4, 4)"), P(2, 2, "(2, 2)", "amber")] })],
    ["Level 2 · From a graph", S`A graph has asymptotes \(x=-2\) and \(y=3\) and passes through \((0,4)\). Find its equation in the form \(y=\frac{a}{x-h}+k\).`,
      [S`\(h=-2\), \(k=3\): \(y=\frac{a}{x+2}+3\).`, S`\(4=\frac a2+3\Rightarrow a=2\).`],
      S`\(y=\frac{2}{x+2}+3\)`,
      plane({ view: { xmin: -6, xmax: 4, ymin: -2, ymax: 8 }, step: { x: 1, y: 1 }, curves: hyp((x) => 2 / (x + 2) + 3, -2, -6, 4), ...ASY(-2, 3), points: [P(0, 4, "(0, 4)")] })],
    ["Level 3 · A cooling model", S`The temperature of a drink after \(t\) minutes is \(T=\frac{240}{t+4}+20\) °C. Find the starting temperature, the temperature it approaches, and when it reaches 32 °C.`,
      [S`\(T(0)=60+20=80\) °C.`, S`As \(t\to\infty\), \(T\to20\) °C (the horizontal asymptote — room temperature).`, S`\(\frac{240}{t+4}=12\Rightarrow t+4=20\Rightarrow t=16\) min.`],
      "80 °C; 20 °C; 16 min",
      plane({ view: { xmin: -2, xmax: 42, ymin: -5, ymax: 90 }, step: { x: 5, y: 10 }, curves: [{ f: (t) => 240 / (t + 4) + 20, a: 0, b: 42, color: "violet" }], lines: [{ m: 0, b: 20, color: "red", dash: true }], points: [P(0, 80, "(0, 80)"), P(16, 32, "(16, 32)", "green")], xlabel: "t", ylabel: "T" })],
  ]),

  practice([
    q("Level 1 · vertical asymptote", S`What is the vertical asymptote of \(y=\frac{3}{x+6}-4\)? Give the value of \(x\).`, num(-6),
      "Where is the denominator 0?", [S`\(x+6=0\).`], S`\(x=-6\)`),
    q("Level 1 · range", S`The range of \(y=\frac{1}{x-5}+7\) is all real numbers except:`, num(7),
      "The horizontal asymptote.", [S`\(y=7\) is never reached.`], S`\(7\)`),
    q("Level 2 · y-intercept", S`Find the y-intercept of \(y=\frac{6}{x-3}+5\).`, num(3),
      "Put x = 0.", [S`\(-2+5\).`], S`\(3\)`),
    q("Level 2 · x-intercept", S`Find the x-intercept of \(y=\frac{2}{x+1}-4\).`, num(-0.5, 0.001),
      "Solve 2/(x + 1) = 4.", [S`\(x+1=0.5\).`], S`\(-0.5\)`),
    q("Level 2 · transformation", S`\(y=\frac{1}{x+2}\) is \(y=\frac1x\) translated:`, choice(["2 units left", "2 units right", "2 units up", "2 units down"], 0),
      "x − h with h = −2.", [S`\(x+2=x-(-2)\).`], "2 left"),
  ]),

  ...hard([
    ["Equation from two points", S`The graph of \(y=\frac{a}{x-h}+1\) passes through \((3,3)\) and \((0,0)\). Find \(a\) and \(h\).`,
      [S`\((0,0)\): \(\frac{a}{-h}=-1\Rightarrow a=h\).`, S`\((3,3)\): \(\frac{a}{3-h}=2\Rightarrow a=6-2h\).`, S`\(h=6-2h\Rightarrow h=2\), \(a=2\).`],
      S`\(y=\frac{2}{x-2}+1\)`,
      plane({ view: { xmin: -3, xmax: 7, ymin: -4, ymax: 6 }, step: { x: 1, y: 1 }, curves: hyp((x) => 2 / (x - 2) + 1, 2, -3, 7), ...ASY(2, 1), points: [P(0, 0, "(0, 0)", "green"), P(3, 3, "(3, 3)")] })],
    ["Where is the graph above a line?", S`Solve \(\frac{1}{x-1}+2=3\) and decide for which \(x\) the graph of \(y=\frac{1}{x-1}+2\) is above \(y=3\).`,
      [S`\(\frac{1}{x-1}=1\Rightarrow x=2\).`, S`On the right branch the graph decreases from very large values towards 2, so it is above 3 for \(1<x<2\).`, S`On the left branch every y-value is below 2.`],
      S`\(x=2\); above for \(1<x<2\)`],
  ], [
    q("Level 3 · find a", S`\(y=\frac{a}{x+3}-2\) passes through \((1,0)\). Find \(a\).`, num(8),
      "Substitute the point.", [S`\(\frac a4=2\).`], S`\(8\)`),
    q("Level 3 · centre", S`The graph of \(y=\frac{5}{x-h}+k\) is symmetric about the point \((-4,6)\). Find \(h+k\).`, num(2),
      "The centre is where the asymptotes cross.", [S`\(h=-4\), \(k=6\).`], S`\(2\)`),
    q("Level 3 · model", S`A drink cools as \(T=\frac{180}{t+3}+22\). After how many minutes is it 32 °C?`, num(15),
      "180/(t + 3) = 10.", [S`\(t+3=18\).`], S`\(15\)`),
  ]),

  wrapUp({
    qas: [
      ["How do I find the asymptotes quickly?", "In y = a/(x − h) + k: vertical x = h (denominator zero), horizontal y = k (the added constant)."],
      ["Why is the range y ≠ k?", "a/(x − h) is never 0, so y can never equal k."],
      ["What does a negative a do?", "It reflects the branches in the horizontal asymptote, into the other pair of opposite quadrants around the centre."],
      ["How do I find the equation from a graph?", "Read h and k from the asymptotes, then substitute one point to find a."],
      ["What does the horizontal asymptote mean in a model?", "The long-term value, such as the room temperature a drink cools towards."],
    ],
    summary: [
      "y = a/(x − h) + k: asymptotes x = h and y = k, centre (h, k).",
      "Domain x ≠ h, range y ≠ k.",
      "|a| stretches; a < 0 reflects.",
      "Intercepts: x = 0 and y = 0.",
      "Equation from a graph: asymptotes, then one point.",
    ],
    next: "4.3 studies rational functions y = (ax + b)/(cx + d) and rewrites them in this form.",
  }),
];
