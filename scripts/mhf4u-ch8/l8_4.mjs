// MHF4U 8.4 — Inequalities of Combined Functions (NEW): f(x) > g(x) as (f − g)(x) > 0, crossing points
// found algebraically or graphically, interval tests, polynomial / exponential / trig / rational comparisons.
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, plane } from "./lib.mjs";

export const TITLE = "8.4 Inequalities of Combined Functions";
export const ID = "6d4f0008-0001-4001-8001-000000000804";

const S = String.raw;
export const blocks = () => [
  intro({
    icon: "⚖️",
    title: "Inequalities of Combined Functions",
    overview: S`When is one function bigger than another? When does an exponential investment beat a linear one, or when is \(2^x\) larger than \(x^2\)? Every such question \(f(x)>g(x)\) is the same as asking where the difference \(f(x)-g(x)\) is positive. The graphs cross where the difference is zero; between crossings the sign cannot change. This lesson finds the crossings, algebraically when possible and with a graph when not, and tests each interval.`,
    goals: [
      "rewrite \\(f(x)>g(x)\\) as \\((f-g)(x)>0\\);",
      "find crossing points algebraically or from a graph;",
      "test intervals to decide where an inequality holds;",
      "solve inequalities with polynomial, exponential, trigonometric and rational functions;",
      "interpret the solution in context.",
    ],
    curriculum: "D3.3 (compare the characteristics of functions, and solve problems by modelling and reasoning with functions, including problems with solutions that are not accessible by standard algebraic techniques)",
    prior: [
      [S`Solve \(x^2-x-6=0\).`, S`\(x=3\) or \(x=-2\).`],
      [S`Where is \((x-3)(x+2)\) negative?`, S`\(-2<x<3\).`],
      [S`Solve \(\sin x=\cos x\) on \(0\le x<2\pi\).`, S`\(\frac\pi4,\ \frac{5\pi}4\).`],
    ],
    words: [
      ["Crossing point", "an \\(x\\) where \\(f(x)=g(x)\\)", "\\(x^2=x+6\\) at \\(x=3\\)"],
      ["Test value", "one \\(x\\) inside an interval, used to find the sign there", "\\(x=0\\) in \\(-2<x<3\\)"],
      ["Interval notation", "a set of \\(x\\)-values written with brackets", "\\((-2,3)\\)"],
      ["Strict / non-strict", "\\(>\\) excludes crossings; \\(\\ge\\) includes them", "\\(x\\le3\\) includes \\(3\\)"],
    ],
  }),

  section("📌 The method", S`
  ${table(["Step", "What to do"], [
    ["1", "Rewrite \\(f(x)>g(x)\\) as \\(h(x)=f(x)-g(x)>0\\)."],
    ["2", "Find the zeros of \\(h\\) (the crossings) — factor, or read them from a graph."],
    ["3", "Mark them on a number line, plus any \\(x\\) where \\(h\\) is not defined."],
    ["4", "Test one value in each interval, or read which graph is on top."],
    ["5", "Write the intervals that work; include crossings only for \\(\\ge\\) or \\(\\le\\)."],
  ])}
  ${keyIdea(S`\[f(x)>g(x)\iff f(x)-g(x)>0.\] On a graph: the solution is every \(x\) where the graph of \(f\) is <b>above</b> the graph of \(g\).`)}`),

  widget("inequalityGraph", { init: { cs: [1, 0, -4, 0], m: 1, b: 0, op: ">" } }),

  section("📌 When algebra cannot find the crossings", S`
  <p>\(2^x=x^2\) cannot be solved with logarithms (the \(x\) is in an exponent and a base). A graph or table gives the crossings \(x\approx-0.77\), \(x=2\) and \(x=4\). Between them, the graph that is on top tells you the sign.</p>
  ${plane({ view: { xmin: -2, xmax: 5.5, ymin: -1, ymax: 20 }, curves: [{ f: (x) => 2 ** x, color: "violet" }, { f: (x) => x * x, color: "blue" }], points: [{ x: -0.767, y: 0.588, label: "(−0.77, 0.59)", color: "amber" }, { x: 2, y: 4, label: "(2, 4)", color: "amber" }, { x: 4, y: 16, label: "(4, 16)", color: "amber" }], step: { x: 1, y: 2 } }, "Violet y = 2ˣ, blue y = x²: 2ˣ is on top for −0.77 < x < 2 and for x > 4.")}
  ${watchOut([
    "Do not divide or multiply both sides by an expression that might be negative (or zero).",
    "Never multiply both sides of a rational inequality by the denominator: subtract and use one fraction instead.",
    "A crossing where the graphs only touch does not change the sign.",
    "For ≥ and ≤ include the crossings, but never an x where a function is not defined.",
    "State the solution for the whole domain asked about, e.g. 0 ≤ x ≤ 2π.",
  ])}`),

  examples([
    ["Parabola above a line", S`Solve \(x^2>x+6\).`,
      [S`<b>Rule.</b> \(f(x)>g(x)\) is the same as \(f(x)-g(x)>0\). The difference can change sign only where it is zero, so find the zeros first.`,
        S`<b>Difference.</b> \(x^2-x-6>0\).`,
        S`<b>Crossings.</b> \(x^2-x-6=(x-3)(x+2)=0\), so \(x=-2\) and \(x=3\). These split the number line into three intervals.`,
        S`<b>Test one value in each interval.</b> \(x=-3\): \(9+3-6=6>0\) ✓. \(x=0\): \(-6<0\), so it fails. \(x=4\): \(16-4-6=6>0\) ✓`,
        S`<b>Endpoints.</b> The inequality is strict, so \(x=-2\) and \(x=3\) are not included.`,
        S`<b>Check on the graph.</b> The parabola is above the line to the left of \((-2,\,4)\) and to the right of \((3,\,9)\) ✓`],
      S`\(x<-2\) or \(x>3\)`,
      plane({ view: { xmin: -5, xmax: 6, ymin: -4, ymax: 16 }, curves: [{ f: (x) => x * x, color: "violet" }], lines: [{ m: 1, b: 6, color: "blue" }], points: [{ x: -2, y: 4, label: "(−2, 4)", color: "amber" }, { x: 3, y: 9, label: "(3, 9)", color: "amber" }], step: { x: 1, y: 2 } })],
    ["Exponential against a power", S`Solve \(2^x>x^2\).`,
      [S`<b>Why a graph?</b> In \(2^x=x^2\) the unknown is both an exponent and a base. Taking logs gives \(x\log2=2\log|x|\), which still has \(x\) in two places, so no algebraic method isolates it.`,
        S`<b>Crossings.</b> Two can be checked by hand: \(x=2\) gives \(4=4\), and \(x=4\) gives \(16=16\). The graph shows a third near \(x\approx-0.77\).`,
        S`<b>Test each interval.</b> \(x=-2\): \(0.25<4\), so it fails. \(x=0\): \(1>0\) ✓. \(x=3\): \(8<9\), so it fails. \(x=5\): \(32>25\) ✓`,
        S`<b>Answer.</b> \(-0.77<x<2\) or \(x>4\) (approximately at the left end).`,
        S`<b>Why no more crossings?</b> Beyond \(x=4\), the exponential doubles with each step of \(1\), while \(x^2\) grows by a smaller factor, so it stays ahead.`],
      S`\(-0.77<x<2\) or \(x>4\)`,
      plane({ view: { xmin: -2, xmax: 5.5, ymin: -1, ymax: 20 }, curves: [{ f: (x) => 2 ** x, color: "violet" }, { f: (x) => x * x, color: "blue" }], points: [{ x: -0.767, y: 0.588, label: "(−0.77, 0.59)", color: "amber" }, { x: 2, y: 4, label: "(2, 4)", color: "amber" }, { x: 4, y: 16, label: "(4, 16)", color: "amber" }], step: { x: 1, y: 2 } })],
    ["A cubic against a line", S`Solve \(x^3-4x\le x\).`,
      [S`<b>Move everything to one side.</b> Subtract \(x\): \(x^3-5x\le0\). Do not divide by \(x\), because its sign is unknown and a solution could be lost.`,
        S`<b>Factor.</b> \(x(x^2-5)\le0\).`,
        S`<b>Zeros.</b> \(x=0\) or \(x^2=5\), so \(x=0,\ \pm\sqrt5\approx\pm2.24\).`,
        S`<b>Test each interval.</b> \(x=-3\): \(-3(4)=-12\le0\) ✓. \(x=-1\): \(-1(-4)=4\), so it fails. \(x=1\): \(1(-4)=-4\le0\) ✓. \(x=3\): \(3(4)=12\), so it fails.`,
        S`<b>Endpoints.</b> Because of \(\le\), the zeros are included. The answer is \(x\le-\sqrt5\) or \(0\le x\le\sqrt5\).`,
        S`<b>Check on the graph.</b> The cubic is on or below the line \(y=x\) in exactly these intervals ✓`],
      S`\(x\le-\sqrt5\) or \(0\le x\le\sqrt5\)`,
      plane({ view: { xmin: -3.5, xmax: 3.5, ymin: -10, ymax: 10 }, curves: [{ f: (x) => x ** 3 - 4 * x, color: "violet" }], lines: [{ m: 1, b: 0, color: "blue" }], points: [{ x: -Math.sqrt(5), y: -Math.sqrt(5), label: "(−2.24, −2.24)", color: "amber" }, { x: 0, y: 0, label: "(0, 0)", color: "amber" }, { x: Math.sqrt(5), y: Math.sqrt(5), label: "(2.24, 2.24)", color: "amber" }], step: { x: 1, y: 2 } })],
    ["Two trigonometric functions", S`Solve \(\sin x>\cos x\) for \(0\le x\le2\pi\).`,
      [S`<b>Crossings.</b> Solve \(\sin x=\cos x\). Since \(\cos x\) is not \(0\) at a solution (otherwise \(\sin x\) would also be \(0\), which is impossible), divide by it: \(\tan x=1\).`,
        S`<b>Angles.</b> \(\tan x=1\) in quadrants I and III: \(x=\frac\pi4\) and \(x=\frac{5\pi}4\).`,
        S`<b>Test each interval.</b> \(x=0\): \(0>1\) fails. \(x=\frac\pi2\): \(1>0\) ✓. \(x=\frac{3\pi}2\): \(-1>0\) fails.`,
        S`<b>Answer.</b> \(\frac\pi4<x<\frac{5\pi}4\), with the endpoints excluded because the inequality is strict.`,
        S`<b>Check on the graph.</b> The violet sine curve is above the blue cosine curve between the two marked crossings ✓`],
      S`\(\frac\pi4<x<\frac{5\pi}4\)`,
      plane({ view: { xmin: -0.2, xmax: 6.5, ymin: -1.3, ymax: 1.3 }, curves: [{ f: Math.sin, a: 0, b: 2 * Math.PI, color: "violet" }, { f: Math.cos, a: 0, b: 2 * Math.PI, color: "blue" }], points: [{ x: Math.PI / 4, y: 0.707, label: "(π/4, 0.71)", color: "amber" }, { x: 5 * Math.PI / 4, y: -0.707, label: "(5π/4, −0.71)", color: "amber" }], step: { x: 0.5, y: 0.5 } })],
    ["Linear versus exponential growth", S`Town P has \(5000+300t\) people and town Q has \(4000(1.06)^t\), \(t\) in years. When is Q larger?`,
      [S`<b>Inequality.</b> \(4000(1.06)^t>5000+300t\).`,
        S`<b>Why a table?</b> \(t\) is in an exponent on one side and outside it on the other, so logarithms cannot isolate it.`,
        S`<b>Starting point.</b> At \(t=0\), Q has \(4000\) and P has \(5000\), so P starts ahead.`,
        S`<b>Table.</b> \(t=14\): Q \(\approx9044\), P \(=9200\). \(t=16\): Q \(\approx10\,161\), P \(=9800\). The crossing is between them, and refining gives \(t\approx14.66\).`,
        S`<b>Answer.</b> Q is larger for \(t>14.66\), so at every whole year from year \(15\) on.`,
        S`<b>Why it stays larger.</b> Q's yearly increase is \(6\%\) of a growing population, while P's stays at \(300\). The graph shows no later crossing.`],
      S`\(t>14.66\) (from year 15)`,
      plane({ view: { xmin: 0, xmax: 25, ymin: 3000, ymax: 17000 }, curves: [{ f: (t) => 4000 * 1.06 ** t, a: 0, color: "violet" }], lines: [{ m: 300, b: 5000, color: "blue" }], points: [{ x: 14.66, y: 9398, label: "(14.66, 9398)", color: "amber" }], step: { x: 5, y: 2000 } })],
  ]),

  practice([
    q("quadratic", S`Solve \(x^2-4x<5\).`, choice(["−1 < x < 5", "x < −1 or x > 5", "−5 < x < 1", "x < 5"], 0), "(x − 5)(x + 1) < 0.", [S`Negative between the zeros \(-1\) and \(5\).`], S`\(-1<x<5\)`),
    q("count", S`How many integers satisfy \(x^2\le9\)?`, num(7), "−3 ≤ x ≤ 3.", [S`\(-3,-2,\dots,3\).`], S`\(7\)`),
    q("exponential", S`\(2^x>8\) for \(x>a\). Find \(a\).`, num(3), "2ˣ is increasing.", [S`\(2^3=8\).`], S`\(3\)`),
    q("trig", S`Solve \(\sin x\ge\frac12\) for \(0\le x\le2\pi\).`, choice(["π/6 ≤ x ≤ 5π/6", "0 ≤ x ≤ π/6", "π/3 ≤ x ≤ 2π/3", "5π/6 ≤ x ≤ 2π"], 0), "sin x = 1/2 at π/6 and 5π/6.", [S`The sine curve is above \(\frac12\) between them.`], S`\(\frac\pi6\le x\le\frac{5\pi}6\)`),
    q("compare", S`For \(x\ge1\), what is the smallest integer with \(3^x>100x\)?`, num(6), "Make a table.", [S`\(3^5=243<500\); \(3^6=729>600\).`], S`\(6\)`),
  ]),

  ...hard([
    ["A rational inequality", S`Solve \(\dfrac{x-1}{x+2}\ge1\).`,
      [S`<b>Do not multiply by \(x+2\)</b> (its sign is unknown). Subtract instead: \(\dfrac{x-1}{x+2}-1\ge0\).`,
        S`<b>One fraction:</b> \(\dfrac{x-1-(x+2)}{x+2}=\dfrac{-3}{x+2}\ge0\).`,
        S`<b>Sign:</b> the numerator is always negative, so the fraction is positive exactly when \(x+2<0\). It is never zero, and \(x=-2\) is excluded.`,
        S`<b>Answer:</b> \(x<-2\). <b>Check:</b> \(x=-3\): \(\frac{-4}{-1}=4\ge1\) ✓; \(x=0\): \(-\frac12\ge1\) ✗`],
      S`\(x<-2\)`,
      plane({ view: { xmin: -8, xmax: 5, ymin: -5, ymax: 7 }, curves: [{ f: (x) => (x - 1) / (x + 2), b: -2.05, color: "violet" }, { f: (x) => (x - 1) / (x + 2), a: -1.95, color: "violet" }], lines: [{ m: 0, b: 1, color: "blue", dash: true }], step: { x: 1, y: 1 } })],
    ["Increasing against decreasing", S`Solve \(2^x\le3-x\).`,
      [S`<b>Spot a crossing:</b> at \(x=1\), \(2^1=2\) and \(3-1=2\).`,
        S`<b>Only one crossing:</b> \(2^x\) is increasing and \(3-x\) is decreasing, so they can meet at most once.`,
        S`<b>Which side:</b> at \(x=0\), \(1\le3\) ✓; at \(x=2\), \(4\le1\) ✗.`,
        S`<b>Answer:</b> \(x\le1\).`],
      S`\(x\le1\)`],
  ], [
    q("hard", S`Solve \(\dfrac{x+3}{x-1}<2\).`, choice(["x < 1 or x > 5", "1 < x < 5", "x < 5", "x > 1"], 0), "Subtract 2: (5 − x)/(x − 1) < 0.", [S`Negative outside \(1<x<5\).`], S`\(x<1\) or \(x>5\)`),
    q("hard", S`How many integers satisfy \(x^4<10x^2\)?`, num(6), "x²(x² − 10) < 0, x ≠ 0.", [S`\(0<x^2<10\): \(\pm1,\pm2,\pm3\).`], S`\(6\)`),
    q("hard", S`\(2^x<x+2\) on an interval \((a,b)\). Find \(b\).`, num(2), "2² = 4 = 2 + 2.", [S`Crossings near \(-1.69\) and at \(2\); between them the line is on top.`], S`\(2\)`),
  ]),

  wrapUp({
    qas: [
      ["How do I start any f(x) > g(x)?", "Rewrite it as f(x) − g(x) > 0."],
      ["What if I cannot solve f(x) = g(x)?", "Use a graph or table to find the crossings."],
      ["Why test one value per interval?", "Between crossings the sign of f − g cannot change."],
      ["Why not multiply by the denominator?", "It might be negative, which would reverse the inequality."],
      ["When do I include endpoints?", "For ≥ or ≤, at crossings where both functions are defined."],
    ],
    summary: [
      "f > g ⇔ f − g > 0.",
      "Crossings split the line into intervals.",
      "Test each interval, or read which graph is on top.",
      "Exclude x where a function is not defined.",
    ],
    next: "8.5 models real situations with combined functions.",
  }),
];
