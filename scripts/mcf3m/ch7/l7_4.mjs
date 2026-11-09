// MCF3M 7.4 — Exponential Functions and Their Graphs: y = bˣ (b > 1 and 0 < b < 1), key properties
// (domain, range, intercept, asymptote, increasing/decreasing), y = a·bˣ, telling exponential from linear and
// quadratic by first differences, second differences and ratios.
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard } from "../lib.mjs";
import { EG, P } from "./efig.mjs";
const S = String.raw;

export const TITLE = "7.4 Exponential Functions and Their Graphs";
const V = { view: { xmin: -4, xmax: 4, ymin: -1, ymax: 10 }, step: { x: 1, y: 1 } };

export const blocks = () => [
  intro({
    icon: "📈",
    title: "Exponential Functions and Their Graphs",
    overview: S`In an <b>exponential function</b> \(y=b^x\) the variable is the exponent. Each time \(x\) increases by \(1\), \(y\) is multiplied by the same number \(b\). That constant <b>ratio</b> — instead of a constant difference — makes the graph curve upward faster and faster when \(b>1\), or decay toward zero when \(0<b<1\). Thanks to 7.2 and 7.3, \(b^x\) makes sense for negative and fractional \(x\), so the graph is one smooth curve.`,
    goals: [
      "make a table of values and graph y = bˣ for b > 1 and 0 < b < 1;",
      "state the domain, range, y-intercept, asymptote and whether the function increases or decreases;",
      "interpret a in y = a·bˣ as the y-intercept (initial value);",
      "tell exponential, linear and quadratic relations apart using differences and ratios;",
      "compare how fast exponential and quadratic functions grow.",
    ],
    curriculum: "B1.1 (graph y = aˣ and explain why it is a function), B1.2 (key properties: domain, range, intercepts, increasing/decreasing, asymptote), B1.4 (distinguish exponential from linear and quadratic functions using tables, finite differences and graphs)",
    prior: [
      [S`Evaluate \(3^{-2}\) and \(3^0\).`, S`\(\frac19\); \(1\).`],
      [S`What are the first differences of \(2,5,8,11\)?`, S`\(3,3,3\): linear.`],
      [S`What are the second differences of \(1,4,9,16\)?`, S`\(2,2\): quadratic.`],
    ],
    words: [
      ["Exponential function", "y = bˣ with b > 0, b ≠ 1", "y = 3ˣ"],
      ["Base b", "the growth factor per unit of x", "3"],
      ["Asymptote", "a line the graph approaches but never reaches", "y = 0"],
      ["Initial value", "a in y = a·bˣ: the y-intercept", "5 in y = 5(2)ˣ"],
      ["Common ratio", "y-value ÷ previous y-value in a table with equal x-steps", "constant for exponential"],
    ],
  }),

  section("📌 Two shapes", S`
  ${EG([{ f: (x) => 2 ** x, color: "violet" }, { f: (x) => 0.5 ** x, color: "green" }], { ...V, lines: [{ m: 0, b: 0, color: "red", dash: true, label: "asymptote y = 0" }], points: [P(0, 1, "(0, 1)")], cap: "violet: y = 2ˣ (growth) · green: y = (½)ˣ (decay)" })}
  ${table(["Property", "y = bˣ, b > 1", "y = bˣ, 0 < b < 1"], [
    ["domain", "all real x", "all real x"],
    ["range", "y > 0", "y > 0"],
    ["y-intercept", "1", "1"],
    ["asymptote", "y = 0 (on the left)", "y = 0 (on the right)"],
    ["behaviour", "increasing", "decreasing"],
  ])}
  ${keyIdea(S`Equal steps in \(x\) give a constant <b>ratio</b> in \(y\) for an exponential function. Linear: constant first differences. Quadratic: constant second differences. Exponential: constant ratios (and the differences themselves grow by that ratio).`)}`),

  widget("growthCompare", { init: [1, 2] }),

  section("⚠️ Common errors", S`
  ${watchOut([
    "2ˣ is not 2x: at x = 5, 2⁵ = 32 but 2(5) = 10.",
    "The graph never touches y = 0, so the range is y > 0, not y ≥ 0.",
    "Every y = bˣ passes through (0, 1); y = a·bˣ passes through (0, a).",
    "A base between 0 and 1 gives DECAY, not negative values.",
    "Check ratios only when the x-values go up in equal steps.",
  ])}`),

  examples([
    ["Graph a growth function", S`Make a table for \(y=3^x\), \(-2\le x\le2\), graph it, and state its key properties.`,
      [S`<b>Table.</b> \(x=-2,-1,0,1,2\): \(y=\frac19,\ \frac13,\ 1,\ 3,\ 9\).`,
        S`<b>Shape.</b> Each step right multiplies by \(3\); to the left the values shrink toward \(0\) but stay positive.`,
        S`<b>Properties.</b> Domain all real numbers; range \(y>0\); \(y\)-intercept \(1\); asymptote \(y=0\); increasing.`,
        S`<b>Check.</b> \(3^{-1}=\frac13\approx0.33\) is on the curve ✓`],
      S`range y > 0, y-int 1, asymptote y = 0, increasing`,
      EG([(x) => 3 ** x], { ...V, points: [P(-2, 0.11, "(−2, 1/9)"), P(-1, 0.33, "(−1, 1/3)"), P(0, 1, "(0, 1)"), P(1, 3, "(1, 3)"), P(2, 9, "(2, 9)")] })],

    ["Graph a decay function", S`Graph \(y=\left(\frac12\right)^x\) and compare it with \(y=2^x\).`,
      [S`<b>Table.</b> \(x=-3,\dots,3\): \(8,4,2,1,\frac12,\frac14,\frac18\).`,
        S`<b>Shape.</b> Decreasing: each step right halves \(y\).`,
        S`<b>Compare.</b> \(\left(\frac12\right)^x=2^{-x}\), so it is \(y=2^x\) reflected in the \(y\)-axis.`,
        S`<b>Shared features.</b> Both have range \(y>0\), \(y\)-intercept \(1\) and asymptote \(y=0\).`],
      S`decreasing; mirror image of y = 2ˣ in the y-axis`,
      EG([{ f: (x) => 0.5 ** x, color: "violet" }, { f: (x) => 2 ** x, color: "gray" }], { ...V, points: [P(-3, 8, "(−3, 8)"), P(3, 0.125, false), P(0, 1, "(0, 1)")] })],

    ["Which kind of relation?", S`Classify each table (\(x=0,1,2,3,4\)): A: \(3,7,11,15,19\); B: \(1,3,9,27,81\); C: \(2,3,6,11,18\).`,
      [S`<b>A.</b> First differences \(4,4,4,4\): linear.`,
        S`<b>B.</b> First differences \(2,6,18,54\) (not constant), ratios \(3,3,3,3\): exponential.`,
        S`<b>C.</b> First differences \(1,3,5,7\); second differences \(2,2,2\): quadratic.`,
        S`<b>Graph check.</b> B overtakes the others quickly ✓`],
      S`A linear, B exponential, C quadratic`,
      EG([{ f: (x) => 3 + 4 * x, color: "green" }, { f: (x) => 3 ** x, color: "violet" }, { f: (x) => x * x + 2 - 0 * x, color: "amber" }], { view: { xmin: 0, xmax: 4.2, ymin: 0, ymax: 30 }, step: { x: 1, y: 5 }, points: [P(3, 27, "B", "violet"), P(4, 19, "A", "green"), P(4, 18, false, "amber")], cap: "green A · violet B · amber C" })],

    ["The initial value a", S`Graph \(y=5(2)^x\) and compare it with \(y=2^x\). What does the \(5\) do?`,
      [S`<b>Table.</b> \(x=-1,0,1,2\): \(2.5,\ 5,\ 10,\ 20\).`,
        S`<b>Intercept.</b> At \(x=0\), \(y=5\cdot1=5\): the initial value.`,
        S`<b>Effect.</b> Every \(y\)-value of \(2^x\) is multiplied by \(5\): a vertical stretch. The ratio is still \(2\).`,
        S`<b>Unchanged.</b> Asymptote \(y=0\), range \(y>0\).`],
      S`y-int 5; vertical stretch by 5`,
      EG([{ f: (x) => 5 * 2 ** x, color: "violet" }, { f: (x) => 2 ** x, color: "gray" }], { view: { xmin: -3, xmax: 2.5, ymin: -1, ymax: 22 }, step: { x: 1, y: 2 }, points: [P(0, 5, "(0, 5)"), P(2, 20, "(2, 20)")] })],

    ["Exponential beats quadratic", S`Compare \(y=2^x\) and \(y=x^2\) for \(x\ge0\). Where are they equal, and which is larger for big \(x\)?`,
      [S`<b>Table.</b> \(x=0..6\): \(2^x=1,2,4,8,16,32,64\); \(x^2=0,1,4,9,16,25,36\).`,
        S`<b>Equal.</b> At \(x=2\) (\(4=4\)) and \(x=4\) (\(16=16\)).`,
        S`<b>Between.</b> For \(2<x<4\), \(x^2\) is larger (e.g. \(9>8\)).`,
        S`<b>Beyond 4.</b> \(2^x\) wins and the gap explodes: at \(x=10\), \(1024\) vs \(100\).`],
      S`equal at x = 2 and 4; 2ˣ larger for x > 4`,
      EG([{ f: (x) => 2 ** x, color: "violet" }, { f: (x) => x * x, color: "green" }], { view: { xmin: 0, xmax: 6, ymin: 0, ymax: 40 }, step: { x: 1, y: 5 }, points: [P(2, 4, "(2, 4)"), P(4, 16, "(4, 16)")] })],
  ]),

  practice([
    q("yint", S`Find the \(y\)-intercept of \(y=7^x\).`, num(1), "7⁰.", [S`\(1\).`], S`\(1\)`),
    q("eval", S`Evaluate \(y=4(3)^x\) at \(x=2\).`, num(36), "4 × 9.", [S`\(36\).`], S`\(36\)`),
    q("ratio", S`The table \(2,6,18,54\) (equal \(x\)-steps) is exponential. Find the common ratio.`, num(3), "6 ÷ 2.", [S`\(3\).`], S`\(3\)`),
    q("decay", S`Evaluate \(y=\left(\frac13\right)^x\) at \(x=-2\).`, num(9), "3².", [S`\(9\).`], S`\(9\)`),
    q("which", S`Which function is decreasing?`, choice(["y = 0.6ˣ", "y = 1.6ˣ", "y = 6ˣ", "y = 2(1.1)ˣ"], 0), "0 < b < 1.", [S`Base \(0.6<1\).`], S`y = 0.6ˣ`),
  ]),

  ...hard([
    ["Find a and b", S`An exponential function \(y=a\cdot b^x\) passes through \((0,\,3)\) and \((2,\,48)\). Find \(a\) and \(b\), then \(y\) at \(x=3\).`,
      [S`<b>a.</b> At \(x=0\), \(y=a=3\).`,
        S`<b>b.</b> \(3b^2=48\Rightarrow b^2=16\Rightarrow b=4\) (\(b>0\)).`,
        S`<b>Value.</b> \(y=3(4)^3=192\).`,
        S`<b>Check.</b> \(3(4)^2=48\) ✓`],
      S`a = 3, b = 4; y(3) = 192`,
      EG([(x) => 3 * 4 ** x], { view: { xmin: -1, xmax: 3.2, ymin: -10, ymax: 200 }, step: { x: 0.5, y: 20 }, points: [P(0, 3, "(0, 3)"), P(2, 48, "(2, 48)"), P(3, 192, "(3, 192)", "red")] })],
    ["Model from a table", S`A table has \(x=0,1,2,3\) and \(y=2,\ 5,\ 12.5,\ 31.25\). Show it is exponential, write the equation and predict \(y\) at \(x=6\).`,
      [S`<b>Ratios.</b> \(5\div2=2.5\), \(12.5\div5=2.5\), \(31.25\div12.5=2.5\).`,
        S`<b>Equation.</b> \(y=2(2.5)^x\).`,
        S`<b>Predict.</b> \(2(2.5)^6=2\times244.140625\approx488.28\).`],
      S`y = 2(2.5)ˣ; y(6) ≈ 488.28`],
  ], [
    q("hard", S`\(y=a\cdot b^x\) passes through \((1,\,6)\) and \((3,\,54)\). Find \(a\).`, num(2), "b² = 9, b = 3, a = 6/3.", [S`\(a=2\).`], S`\(2\)`),
    q("hard", S`Solve \(2^x=8\).`, num(3), "8 = 2³.", [S`\(x=3\).`], S`\(3\)`),
    q("hard", S`For \(x>0\), how many times do \(y=2^x\) and \(y=x^2\) intersect?`, num(2), "x = 2 and x = 4.", [S`\(2\).`], S`\(2\)`),
    q("hard", S`Evaluate \(y=3(0.5)^x\) at \(x=4\).`, num(0.1875, 0.0001), "3/16.", [S`\(0.1875\).`], S`\(0.1875\)`),
    q("hard", S`Evaluate \(y=10(1.5)^x\) at \(x=3\).`, num(33.75, 0.001), "10 × 3.375.", [S`\(33.75\).`], S`\(33.75\)`),
  ]),

  wrapUp({
    qas: [
      ["What makes a function exponential?", "Equal steps in x multiply y by the same ratio b: y = a·bˣ."],
      ["What are the key properties of y = bˣ?", "Domain all reals, range y > 0, y-intercept 1, asymptote y = 0."],
      ["Growth or decay?", "b > 1: increasing (growth); 0 < b < 1: decreasing (decay)."],
      ["How do I tell linear, quadratic and exponential tables apart?", "Constant first differences, constant second differences, constant ratios."],
      ["What does a do in y = a·bˣ?", "It is the y-intercept (initial value) and stretches the graph vertically."],
    ],
    summary: [
      "y = bˣ: range y > 0, y-int 1, asymptote y = 0.",
      "b > 1 grows; 0 < b < 1 decays.",
      "Constant ratio ⇒ exponential.",
      "y = a·bˣ starts at a.",
    ],
    next: "7.5 uses y = a(1 + r)ᵗ to model growth.",
  }),
];
