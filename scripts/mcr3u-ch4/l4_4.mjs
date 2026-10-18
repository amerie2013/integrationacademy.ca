// MCR3U 4.4 — Exponential Functions and Their Properties: y = bˣ and y = a·bˣ, growth vs decay, key properties,
// recognising exponential tables (constant ratio), comparing with linear and quadratic, equations from two points
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, plane } from "./lib.mjs";

export const TITLE = "4.4 Exponential Functions and Their Properties";
export const ID = "dfa671d3-4cdd-4c63-9eb0-81a6ce01e661";
const S = String.raw;

export const blocks = () => [
  intro({
    icon: "📈",
    title: "Exponential Functions and Their Properties",
    overview: S`An exponential function multiplies by the same factor every time \(x\) goes up by 1: \(f(x)=a\cdot b^x\). In this lesson you will graph exponential functions, state their properties, tell growth (\(b>1\)) from decay (\(0<b<1\)), recognise an exponential table by its constant ratio, compare exponential, linear and quadratic growth, and find the equation from two points.`,
    goals: [
      "graph y = bˣ and y = a·bˣ from a table of values;",
      "state the domain, range, intercept, asymptote and increasing/decreasing behaviour;",
      "distinguish exponential, linear and quadratic relations from tables and graphs;",
      "explain why y = bˣ is a function and why b must be positive and not 1;",
      "find a and b from two points or a table.",
    ],
    curriculum: "B1.1 (graph y = aˣ and explain why it is a function), B1.4 (key properties: domain, range, intercepts, increasing/decreasing, asymptotes), B2.1 (distinguish exponential from linear and quadratic functions), B2.4 (equivalent forms with different bases)",
    prior: [
      [S`Evaluate \(3^{-2}\).`, S`\(\frac19\).`],
      [S`What are the first differences of \(2, 5, 8, 11\)?`, S`3, 3, 3 — linear.`],
      [S`Evaluate \(\left(\tfrac12\right)^{-3}\).`, S`\(8\).`],
    ],
    words: [
      ["Exponential function", "\\(f(x)=a\\cdot b^x\\), \\(b>0\\), \\(b\\ne1\\)", "\\(f(x)=5(3)^x\\)"],
      ["Growth / decay factor", "\\(b>1\\) / \\(0<b<1\\)", "\\(1.04\\) / \\(0.5\\)"],
      ["Horizontal asymptote", "the line the graph approaches", "\\(y=0\\)"],
      ["Constant ratio", "each y-value ÷ the previous one", "\\(\\frac{15}5=\\frac{45}{15}=3\\)"],
    ],
  }),

  section("📌 The graph of y = bˣ", S`
  ${plane({ view: { xmin: -4, xmax: 4, ymin: -1, ymax: 10 }, curves: [{ f: (x) => 3 ** x, color: "violet" }, { f: (x) => 0.5 ** x, color: "red" }], points: [{ x: 0, y: 1, label: "(0, 1)" }, { x: 1, y: 3, label: "(1, 3)" }, { x: -1, y: 2, label: "(−1, 2)", color: "red" }], step: { x: 1, y: 1 } }, "violet y = 3ˣ (growth), red y = (½)ˣ (decay)")}
  ${table(["Property", "y = bˣ, b > 1", "y = bˣ, 0 < b < 1"], [
    ["domain", "\\(\\mathbb R\\)", "\\(\\mathbb R\\)"], ["range", "\\(y>0\\)", "\\(y>0\\)"], ["y-intercept", "1", "1"],
    ["asymptote", "\\(y=0\\) (to the left)", "\\(y=0\\) (to the right)"], ["behaviour", "increasing", "decreasing"],
  ])}
  ${keyIdea(S`Each input gives one output, so \(y=b^x\) is a function. The base must be positive (otherwise \(b^{1/2}\) may not be real) and not 1 (\(1^x\) is just the line \(y=1\)). In \(y=a\cdot b^x\), \(a\) is the y-intercept.`)}`),

  section("📌 Explore", S`<p>Change the starting value \(a\) and the ratio \(b\). The table shows that the differences change but the ratio stays constant. Compare with the linear and quadratic curves.</p>`),

  widget("growthCompare", { init: [2, 1.5] }),

  section("📌 Watch out", watchOut([
    S`\(y=x^2\) is not exponential — the variable is in the base, not the exponent.`,
    "Check ratios only when the x-values are equally spaced.",
    S`\(\left(\tfrac12\right)^x=2^{-x}\): decay is a reflection of growth in the y-axis.`,
    "The graph approaches y = 0 but never touches it — the range is y > 0, not y ≥ 0.",
  ])),

  examples([
    ["Graphing y = 3ˣ", S`Make a table for \(y=3^x\) from \(x=-2\) to \(2\) and state its properties.`,
      [S`\(\frac19,\ \frac13,\ 1,\ 3,\ 9\).`, S`Domain \(\mathbb R\), range \(y>0\), y-intercept 1, asymptote \(y=0\), increasing.`],
      "see the violet graph above"],
    ["Decay", S`Compare \(y=\left(\tfrac12\right)^x\) with \(y=2^x\).`,
      [S`\(\left(\tfrac12\right)^x=2^{-x}\): every point \((x,y)\) of \(2^x\) appears at \((-x,y)\).`],
      "a reflection in the y-axis; decreasing instead of increasing"],
    ["Recognising an exponential table", S`\(x\): \(0,1,2,3\); \(y\): \(5,15,45,135\). Find the equation.`,
      [S`Ratios \(\frac{15}5=\frac{45}{15}=\frac{135}{45}=3\): exponential, \(b=3\).`, S`\(a=y(0)=5\).`],
      S`\(y=5(3)^x\)`],
    ["Three kinds of table", S`Classify \(A: 4,7,10,13\); \(B: 4,5,8,13\); \(C: 4,8,16,32\) (x = 0, 1, 2, 3).`,
      [S`A: first differences 3 — linear. B: second differences 2 — quadratic. C: ratio 2 — exponential.`],
      "linear, quadratic, exponential"],
    ["From the graph", "An exponential curve passes through (0, 4) and (2, 1). Find its equation.",
      [S`\(y=4b^x\); \(4b^2=1\Rightarrow b^2=\frac14\Rightarrow b=\frac12\) (b > 0).`],
      S`\(y=4\left(\tfrac12\right)^x\)`,
      plane({ view: { xmin: -2, xmax: 4, ymin: -1, ymax: 12 }, curves: [{ f: (x) => 4 * 0.5 ** x, color: "violet" }], points: [{ x: 0, y: 4, label: "(0, 4)" }, { x: 2, y: 1, label: "(2, 1)" }], step: { x: 1, y: 1 } })],
  ]),

  practice([
    q("intercept", S`What is the y-intercept of \(y=7\cdot2^x\)?`, num(7),
      "Substitute x = 0.", [S`\(7\cdot2^0=7\).`], S`\(7\)`),
    q("ratio", S`An exponential table has \(y=2,6,18\). What is the next value?`, num(54),
      "Constant ratio 3.", [S`\(18\times3\).`], S`\(54\)`),
    q("decay", "Which function is decreasing?", choice([S`\(y=0.8^x\)`, S`\(y=1.2^x\)`, S`\(y=3^x\)`, S`\(y=2\cdot5^x\)`], 0),
      "0 < b < 1.", [S`\(b=0.8\).`], S`\(y=0.8^x\)`),
    q("evaluate", S`Evaluate \(y=3\left(\tfrac12\right)^x\) at \(x=-2\).`, num(12),
      "A negative exponent flips the base.", [S`\(3\cdot2^2\).`], S`\(12\)`),
    q("find b", S`\(y=2b^x\) passes through \((3,54)\). Find \(b\).`, num(3),
      "2b³ = 54.", [S`\(b^3=27\).`], S`\(3\)`),
  ]),

  ...hard([
    ["Same function, different bases", S`Show that \(y=8^x\) and \(y=2^{3x}\) are the same function, and write \(y=\left(\tfrac14\right)^x\) as a power of 2.`,
      [S`\(8^x=(2^3)^x=2^{3x}\).`, S`\(\left(\tfrac14\right)^x=(2^{-2})^x=2^{-2x}\).`],
      S`\(8^x=2^{3x}\); \(\left(\tfrac14\right)^x=2^{-2x}\)`],
    ["Unequal steps", S`A table gives \(x=0,2,4,6\) and \(y=3,12,48,192\). Find the equation and \(y(5)\).`,
      [S`Each step of 2 multiplies by 4, so each step of 1 multiplies by \(b=\sqrt4=2\).`, S`\(y=3(2)^x\); \(y(5)=96\).`],
      S`\(y=3(2)^x\); \(96\)`,
      plane({ view: { xmin: -1, xmax: 7, ymin: 0, ymax: 220 }, curves: [{ f: (x) => 3 * 2 ** x, color: "violet" }], points: [[0, 3], [2, 12], [4, 48], [6, 192], [5, 96]].map(([x, y]) => ({ x, y, label: x === 5 ? "(5, 96)" : undefined, color: x === 5 ? "green" : "blue" })), step: { x: 1, y: 20 } })],
  ], [
    q("hard", S`\(y=ab^x\) passes through \((1,6)\) and \((3,24)\). Find its y-intercept.`, num(3),
      "Divide the two equations.", [S`\(b^2=4\Rightarrow b=2\); \(a=3\).`], S`\(3\)`),
    q("hard", S`\(y=ab^x\) passes through \((-1,18)\) and \((1,2)\). Find \(y(2)\) to 3 decimals.`, num(2 / 3, 0.002),
      "b² = 2/18.", [S`\(b=\tfrac13\), \(a=6\); \(6\cdot\tfrac19\).`], S`\(\tfrac23\approx0.667\)`),
    q("hard", S`Solve \(4^{x+1}=8^x\).`, num(2),
      "Common base 2.", [S`\(2^{2x+2}=2^{3x}\Rightarrow x=2\).`], S`\(x=2\)`),
  ]),

  wrapUp({
    qas: [
      ["Why must b be positive?", "With b < 0, values like b^(1/2) are not real, so the graph would have gaps."],
      ["Why can't b be 1?", "1ˣ = 1 for every x — a horizontal line, not an exponential."],
      ["Does an exponential always beat a quadratic?", "For b > 1, yes, eventually — even if it starts below."],
      ["How do I recognise exponential data?", "Equal x-steps and a constant ratio of consecutive y-values."],
      ["What does a represent?", "The value at x = 0: the starting amount."],
    ],
    summary: [
      "y = a·bˣ: domain ℝ, range y > 0 (a > 0), y-intercept a, asymptote y = 0.",
      "b > 1 growth, 0 < b < 1 decay.",
      "Linear: constant difference; quadratic: constant 2nd difference; exponential: constant ratio.",
      "Two points → divide to find b, then a.",
    ],
    next: "4.5 transforms y = bˣ with a, k, d and c.",
  }),
];
