// MCR3U 4.4 — Exponential Functions and Their Properties: y = bˣ and y = a·bˣ, growth vs decay, key properties,
// recognising exponential tables (constant ratio), comparing with linear and quadratic, equations from two points
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, plane } from "./lib.mjs";
import { tv } from "../mcr3u-extables.mjs";

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
    ["Graphing y = 3ˣ", S`Make a table for \(y=3^x\) from \(x=-2\) to \(2\), plot it, and state its properties.`,
      [S`<b>Substitute each x-value.</b> A negative exponent gives a reciprocal, and \(3^0=1\): \(3^{-2}=\frac1{3^2}=\frac19\), \(3^{-1}=\frac13\), \(3^0=1\), \(3^1=3\), \(3^2=9\).`,
        S`<b>Table of values.</b> Each time \(x\) goes up by 1, \(y\) is multiplied by 3. ${tv(["\\(x\\)", "\\(-2\\)", "\\(-1\\)", "\\(0\\)", "\\(1\\)", "\\(2\\)"], ["\\(y=3^x\\)", "\\(\\frac19\\)", "\\(\\frac13\\)", "\\(1\\)", "\\(3\\)", "\\(9\\)"])}`,
        S`<b>Domain and range.</b> Any real number can be an exponent, so the domain is \(\mathbb R\). A power of a positive base is always positive, so the range is \(y>0\).`,
        S`<b>Intercepts.</b> At \(x=0\), \(y=3^0=1\), so the y-intercept is \(1\). The equation \(3^x=0\) has no solution, so there is no x-intercept.`,
        S`<b>Asymptote and behaviour.</b> As \(x\) goes to the left, the values \(\frac13,\frac19,\frac1{27},\dots\) get closer to 0 but never reach it, so \(y=0\) is a horizontal asymptote. The base \(3>1\), so the function is increasing.`,
        S`<b>Check on the graph.</b> The five table points lie on one smooth curve that stays above the x-axis and rises to the right ✓`],
      S`domain \(\mathbb R\), range \(y>0\), y-intercept \(1\), no x-intercept, asymptote \(y=0\), increasing`,
      plane({ view: { xmin: -3, xmax: 3, ymin: -1, ymax: 10 }, curves: [{ f: (x) => 3 ** x, color: "violet" }], points: [{ x: -2, y: 1 / 9 }, { x: -1, y: 1 / 3 }, { x: 0, y: 1, label: "(0, 1)", color: "amber" }, { x: 1, y: 3, label: "(1, 3)" }, { x: 2, y: 9, label: "(2, 9)" }], step: { x: 1, y: 1 } })],
    ["Decay", S`Compare \(y=\left(\tfrac12\right)^x\) with \(y=2^x\) using a table and a graph.`,
      [S`<b>Table of both functions.</b> Reading across, one list of values is the other list backwards. ${tv(["\\(x\\)", "\\(-2\\)", "\\(-1\\)", "\\(0\\)", "\\(1\\)", "\\(2\\)"], ["\\(y=2^x\\)", "\\(\\frac14\\)", "\\(\\frac12\\)", "\\(1\\)", "\\(2\\)", "\\(4\\)"], ["\\(y=\\left(\\frac12\\right)^x\\)", "\\(4\\)", "\\(2\\)", "\\(1\\)", "\\(\\frac12\\)", "\\(\\frac14\\)"])}`,
        S`<b>Algebra explains the pattern.</b> \(\tfrac12=2^{-1}\), so \(\left(\tfrac12\right)^x=(2^{-1})^x=2^{-x}\). Replacing \(x\) by \(-x\) reflects a graph in the y-axis, so each point \((x,y)\) on \(y=2^x\) appears at \((-x,y)\) on the other curve.`,
        S`<b>What stays the same.</b> Both have domain \(\mathbb R\), range \(y>0\), y-intercept \(1\) and asymptote \(y=0\). The point \((0,1)\) is on the mirror line, so it does not move.`,
        S`<b>What changes.</b> \(y=2^x\) increases (growth, \(b>1\)) and approaches the asymptote on the left. \(y=\left(\tfrac12\right)^x\) decreases (decay, \(0<b<1\)) and approaches it on the right.`,
        S`<b>Check.</b> \((2,4)\) is on \(y=2^x\) and its mirror image \((-2,4)\) is on \(y=\left(\tfrac12\right)^x\): \(\left(\tfrac12\right)^{-2}=2^2=4\) ✓`],
      "the curves are reflections of each other in the y-axis; one is growth and the other is decay",
      plane({ view: { xmin: -4, xmax: 4, ymin: -1, ymax: 9 }, curves: [{ f: (x) => 2 ** x, color: "violet" }, { f: (x) => 0.5 ** x, color: "red" }], points: [{ x: 2, y: 4, label: "(2, 4)", color: "violet" }, { x: -2, y: 4, label: "(−2, 4)", color: "red" }, { x: 0, y: 1, label: "(0, 1)", color: "amber" }], step: { x: 1, y: 1 } }, "violet y = 2ˣ, red y = (½)ˣ")],
    ["Recognising an exponential table", S`\(x\): \(0,1,2,3\); \(y\): \(5,15,45,135\). Show the data are exponential and find the equation.`,
      [S`<b>Test.</b> The x-values go up by equal steps, so we may compare consecutive y-values. An exponential relation has a constant <em>ratio</em>. ${tv(["\\(x\\)", "\\(0\\)", "\\(1\\)", "\\(2\\)", "\\(3\\)"], ["\\(y\\)", "\\(5\\)", "\\(15\\)", "\\(45\\)", "\\(135\\)"], ["ratio to previous", "", "\\(\\frac{15}5=3\\)", "\\(\\frac{45}{15}=3\\)", "\\(\\frac{135}{45}=3\\)"])}`,
        S`<b>Find \(b\).</b> The form is \(y=a\cdot b^x\), and \(b\) is the factor for each unit step in \(x\). The ratio is always 3, so \(b=3\).`,
        S`<b>Find \(a\).</b> At \(x=0\), \(y=a\cdot b^0=a\). The table gives \(y=5\) at \(x=0\), so \(a=5\).`,
        S`<b>Equation and check.</b> \(y=5(3)^x\). At \(x=3\): \(5\times27=135\) ✓. At \(x=2\): \(5\times9=45\) ✓`],
      S`\(y=5(3)^x\)`,
      plane({ view: { xmin: -1, xmax: 4, ymin: -10, ymax: 150 }, curves: [{ f: (x) => 5 * 3 ** x, color: "violet" }], points: [{ x: 0, y: 5, label: "(0, 5)", color: "amber" }, { x: 1, y: 15, label: "(1, 15)" }, { x: 2, y: 45, label: "(2, 45)" }, { x: 3, y: 135, label: "(3, 135)" }], step: { x: 1, y: 20 } })],
    ["Three kinds of table", S`Classify \(A: 4,7,10,13\); \(B: 4,5,8,13\); \(C: 4,8,16,32\) for \(x=0,1,2,3\).`,
      [S`<b>The tests.</b> With equal x-steps: constant first differences mean linear, constant second differences mean quadratic, and a constant ratio means exponential.`,
        S`<b>Table A.</b> First differences are \(3,3,3\), which are constant, so A is linear. Its equation is \(y=3x+4\).`,
        S`<b>Table B.</b> First differences are \(1,3,5\), which are not constant. Second differences are \(2,2\), which are constant, so B is quadratic. Its equation is \(y=x^2+4\).`,
        S`<b>Table C.</b> First differences are \(4,8,16\), and these are doubling. Ratios are \(2,2,2\), which are constant, so C is exponential. Its equation is \(y=4(2)^x\).`,
        S`<b>Summary.</b> ${tv(["\\(x\\)", "\\(0\\)", "\\(1\\)", "\\(2\\)", "\\(3\\)", "pattern", "type"], ["A", "4", "7", "10", "13", "add 3", "linear"], ["B", "4", "5", "8", "13", "2nd diff 2", "quadratic"], ["C", "4", "8", "16", "32", "times 2", "exponential"])} All three start at 4, but the graph shows they separate quickly: the exponential is already far ahead by \(x=3\) ✓`],
      "A linear, B quadratic, C exponential",
      plane({ view: { xmin: -1, xmax: 4, ymin: -2, ymax: 36 }, lines: [{ m: 3, b: 4, color: "blue" }], curves: [{ f: (x) => x * x + 4, color: "green" }, { f: (x) => 4 * 2 ** x, color: "violet" }], points: [{ x: 3, y: 13, label: "(3, 13)" }, { x: 3, y: 32, label: "(3, 32)", color: "violet" }, { x: 0, y: 4, label: "(0, 4)", color: "amber" }], step: { x: 1, y: 4 } }, "blue A, green B, violet C (A and B both reach 13 at x = 3)")],
    ["From the graph", "An exponential curve y = a·bˣ passes through (0, 4) and (2, 1). Find its equation.",
      [S`<b>Use the point on the y-axis.</b> At \(x=0\), \(y=a\cdot b^0=a\). The point \((0,4)\) gives \(a=4\), so \(y=4b^x\).`,
        S`<b>Use the second point.</b> Substitute \((2,1)\): \(1=4b^2\), so \(b^2=\frac14\).`,
        S`<b>Solve for \(b\).</b> The square roots of \(\frac14\) are \(\pm\frac12\). An exponential base must be positive, so \(b=\frac12\).`,
        S`<b>Equation.</b> \(y=4\left(\tfrac12\right)^x\). The base is between 0 and 1, which matches the falling curve.`,
        S`<b>Check with new points.</b> \(y(1)=2\), halfway in the halving pattern \(4,2,1\) ✓. \(y(-1)=4\times2=8\), which is also on the curve ✓`],
      S`\(y=4\left(\tfrac12\right)^x\)`,
      plane({ view: { xmin: -2, xmax: 4, ymin: -1, ymax: 12 }, curves: [{ f: (x) => 4 * 0.5 ** x, color: "violet" }], points: [{ x: -1, y: 8, label: "(−1, 8)" }, { x: 0, y: 4, label: "(0, 4)", color: "amber" }, { x: 1, y: 2, label: "(1, 2)" }, { x: 2, y: 1, label: "(2, 1)", color: "amber" }], step: { x: 1, y: 1 } })],
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
