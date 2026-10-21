// IB AA SL 2.4 — Domain and Range: natural domains, interval and set notation, ranges from graphs, restricted domains, context
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, hard, plane } from "./lib.mjs";

export const TITLE = "2.4 Domain and Range";
export const ID = "1baa0002-0001-4001-8001-000000000204";
const S = String.raw;
const P = (x, y, label, color = "blue") => ({ x, y, label, color });

export const blocks = () => [
  intro({
    icon: "↔️",
    title: "Domain and Range",
    overview: S`The domain of a function is the set of inputs it accepts; the range is the set of outputs it produces. Some inputs are impossible (dividing by zero, square-rooting a negative); some are ruled out by the situation being modelled. In this lesson you will find natural domains, write domains and ranges in interval and set notation, and find the range from a graph — including when the domain is restricted.`,
    goals: [
      "find the natural (largest possible) domain of a function;",
      "write domains and ranges in interval notation and set notation;",
      "find the range of a function from its graph;",
      "find the range on a restricted domain, checking end points and turning points;",
      "choose a sensible domain and range for a model.",
    ],
    curriculum: "SL 2.2 (domain and range of a function; the domain and range of a model in context)",
    prior: [
      [S`Solve \(2x-6\ge0\).`, S`\(x\ge3\).`],
      [S`Write \(x^2-6x+10\) in vertex form.`, S`\((x-3)^2+1\).`],
      [S`For which \(x\) is \(x-4=0\)?`, S`\(x=4\).`],
    ],
    words: [
      ["Domain", "all allowed inputs \\(x\\)", "\\(x\\ge3\\)"],
      ["Range", "all outputs \\(f(x)\\) produced", "\\(y\\ge0\\)"],
      ["Interval notation", "\\([a,b]\\) includes end points; \\((a,b)\\) excludes them", "\\([-4,2]\\)"],
      ["Set notation", "\\(\\{x\\mid x\\ge3\\}\\) or \\(x\\in\\mathbb R,\\ x\\ne4\\)", "\\(\\{y\\mid y\\ne0\\}\\)"],
      ["Natural domain", "the largest set of real inputs for which the formula works", "\\(\\frac1x\\): \\(x\\ne0\\)"],
    ],
  }),

  section("📌 What restricts a domain?", S`
  ${table(["Function type", "Restriction", "Example"], [
    ["polynomial", "none: all real numbers", S`\(x^2-5x\): \(x\in\mathbb R\)`],
    ["fraction", "denominator ≠ 0", S`\(\frac1{x-4}\): \(x\ne4\)`],
    ["square root", "expression inside ≥ 0", S`\(\sqrt{2x-6}\): \(x\ge3\)`],
    ["model", "the situation", "time ≥ 0, length > 0"],
  ])}
  ${plane({ view: { xmin: -2, xmax: 12, ymin: -1, ymax: 5 }, step: { x: 1, y: 1 }, curves: [{ f: (x) => Math.sqrt(2 * x - 6), a: 3, color: "violet" }], points: [P(3, 0, "(3, 0)")], segs: [{ pts: [[3, -0.6], [12, -0.6]], color: "green" }, { pts: [[-1.5, 0], [-1.5, 5]], color: "blue" }] }, "y = √(2x − 6): domain x ≥ 3 (green), range y ≥ 0 (blue)")}
  ${table(["Words", "Interval", "Set"], [
    ["between −4 and 2, inclusive", S`\([-4,2]\)`, S`\(\{x\mid-4\le x\le2\}\)`],
    ["greater than 3", S`\((3,\infty)\)`, S`\(\{x\mid x>3\}\)`],
    ["all reals except 4", S`\((-\infty,4)\cup(4,\infty)\)`, S`\(x\in\mathbb R,\ x\ne4\)`],
  ])}`),

  section("📌 Ranges from graphs", S`
  <p>Read the range from the lowest and highest \(y\)-values the graph reaches. On a restricted domain, check the <strong>end points and any turning point inside</strong>.</p>
  ${plane({ view: { xmin: -5, xmax: 3, ymin: -4, ymax: 7 }, step: { x: 1, y: 1 }, curves: [{ f: (x) => (x + 1) ** 2 - 3, color: "gray" }, { f: (x) => (x + 1) ** 2 - 3, a: -4, b: 2, color: "violet" }], points: [P(-4, 6, "(−4, 6)"), P(2, 6, "(2, 6)"), P(-1, -3, "vertex (−1, −3)", "amber")] }, "f(x) = (x + 1)² − 3 on −4 ≤ x ≤ 2: range −3 ≤ y ≤ 6 (the minimum is at the vertex, not an end point)")}
  ${keyIdea(S`The range depends on the domain. Always check the end points AND any turning point inside the domain; the extreme outputs can come from either.`)}
  ${watchOut([
    "Square brackets include an end point; round brackets exclude it — ∞ always gets a round bracket.",
    "Use y (or f(x)) for the range and x for the domain.",
    "1/x can be any value except 0, so its range is y ≠ 0, not y > 0.",
    "In a model, negative times or lengths are not allowed even if the formula works.",
  ])}`),

  section("📌 Explore", S`<p>Choose a function and drag the ends of the domain. The green bar is the domain, the blue bar the range. Watch the range when the vertex of \((x-1)^2-4\) moves in and out of the domain.</p>`),

  widget("domainRange", { init: "shift" }),

  examples([
    ["Level 1 · A fraction", S`State the domain and range of \(f(x)=\dfrac{1}{x-4}\).`,
      [S`Denominator \(\ne0\): \(x\ne4\).`, S`A fraction with numerator 1 is never 0, and every other value occurs: \(y\ne0\).`],
      S`domain \(x\ne4\); range \(y\ne0\)`,
      plane({ view: { xmin: -2, xmax: 10, ymin: -5, ymax: 5 }, step: { x: 1, y: 1 }, curves: [{ f: (x) => 1 / (x - 4), a: -2, b: 3.9, color: "violet" }, { f: (x) => 1 / (x - 4), a: 4.1, b: 10, color: "violet" }], vlines: [{ x: 4, color: "red", dash: true }] })],
    ["Level 1 · A square root", S`State the domain and range of \(g(x)=\sqrt{2x-6}\).`,
      [S`\(2x-6\ge0\Rightarrow x\ge3\).`, S`A square root is never negative and starts at \(g(3)=0\): \(y\ge0\).`],
      S`domain \([3,\infty)\); range \([0,\infty)\)`],
    ["Level 2 · A turning point inside the domain", S`Find the range of \(f(x)=(x+1)^2-3\) for \(-4\le x\le2\).`,
      [S`The vertex \((-1,-3)\) lies inside the domain: minimum \(-3\).`, S`End points: \(f(-4)=6\), \(f(2)=6\): maximum 6.`],
      S`\(-3\le y\le6\)`],
    ["Level 2 · A discrete domain", S`\(f(x)=5-2x\) has domain \(\{-1,0,1,2\}\). State the range.`,
      [S`\(f(-1)=7\), \(f(0)=5\), \(f(1)=3\), \(f(2)=1\).`],
      S`\(\{1,3,5,7\}\)`],
    ["Level 3 · Domain and range of a model", S`A farmer uses 20 m of fence for three sides of a rectangle against a wall. With width \(x\), the area is \(A(x)=x(20-2x)\). Find a sensible domain and the range.`,
      [S`Both \(x>0\) and the third side \(20-2x>0\): \(0<x<10\).`, S`\(A(x)=-2x^2+20x\) has its vertex at \(x=5\): \(A(5)=50\).`, S`Near the ends the area approaches 0 but never reaches it: range \(0<A\le50\).`],
      S`domain \(0<x<10\); range \(0<A\le50\)`,
      plane({ view: { xmin: -1, xmax: 11, ymin: -5, ymax: 60 }, step: { x: 1, y: 10 }, curves: [{ f: (x) => x * (20 - 2 * x), a: 0, b: 10, color: "violet" }], points: [P(5, 50, "(5, 50)", "amber"), { x: 0, y: 0, color: "red", open: true }, { x: 10, y: 0, color: "red", open: true }], xlabel: "x (m)", ylabel: "A" })],
  ]),

  practice([
    q("Level 1 · square-root domain", S`What is the smallest \(x\) in the domain of \(f(x)=\sqrt{x-7}\)?`, num(7),
      "The inside must be ≥ 0.", [S`\(x-7\ge0\).`], S`\(7\)`),
    q("Level 1 · excluded value", S`Which value of \(x\) is excluded from the domain of \(f(x)=\dfrac{x+2}{x-5}\)?`, num(5),
      "Denominator ≠ 0.", [S`\(x-5=0\).`], S`\(5\)`),
    q("Level 2 · minimum of a range", S`What is the smallest value in the range of \(f(x)=x^2-6x+10\)?`, num(1),
      "Complete the square.", [S`\((x-3)^2+1\).`], S`\(1\)`),
    q("Level 2 · maximum of a range", S`What is the largest value in the range of \(f(x)=3-x^2\), \(x\in\mathbb R\)?`, num(3),
      "x² ≥ 0.", [S`The maximum is at \(x=0\).`], S`\(3\)`),
    q("Level 2 · restricted domain", S`\(f(x)=2x+1\) for \(0\le x\le4\). What is the largest value in its range?`, num(9),
      "An increasing line: largest at the right end.", [S`\(f(4)=9\).`], S`\(9\)`),
  ]),

  ...hard([
    ["Range on a restricted domain", S`Find the range of \(f(x)=x^2-4x+1\) for \(0\le x\le5\).`,
      [S`\(f(x)=(x-2)^2-3\): vertex \((2,-3)\) is inside the domain, so the minimum is \(-3\).`, S`End points: \(f(0)=1\), \(f(5)=6\): the maximum is 6.`, S`The range is \(-3\le y\le6\).`],
      S`\([-3,6]\)`,
      plane({ view: { xmin: -1, xmax: 6, ymin: -4, ymax: 7 }, step: { x: 1, y: 1 }, curves: [{ f: (x) => x * x - 4 * x + 1, a: 0, b: 5, color: "violet" }], points: [P(0, 1, "(0, 1)"), P(5, 6, "(5, 6)"), P(2, -3, "(2, −3)", "amber")] })],
    ["A semicircle", S`Find the domain and range of \(f(x)=\sqrt{9-x^2}\), and describe its graph.`,
      [S`\(9-x^2\ge0\Rightarrow-3\le x\le3\).`, S`Largest output \(f(0)=3\); smallest \(f(\pm3)=0\): range \(0\le y\le3\).`, S`\(y^2=9-x^2\), \(y\ge0\): the top half of the circle of radius 3.`],
      S`domain \([-3,3]\); range \([0,3]\); upper semicircle`,
      plane({ view: { xmin: -5, xmax: 5, ymin: -1, ymax: 5 }, step: { x: 1, y: 1 }, curves: [{ f: (x) => Math.sqrt(9 - x * x), a: -3, b: 3, color: "violet" }], points: [P(-3, 0, "(−3, 0)"), P(3, 0, "(3, 0)"), P(0, 3, "(0, 3)", "amber")] })],
  ], [
    q("Level 3 · shifted root", S`What is the smallest value in the range of \(f(x)=\sqrt{x-2}+3\)?`, num(3),
      "The root is at least 0.", [S`\(f(2)=3\).`], S`\(3\)`),
    q("Level 3 · excluded values", S`How many real numbers are excluded from the domain of \(g(x)=\dfrac{1}{x^2-9}\)?`, num(2),
      "x² − 9 = 0.", [S`\(x=\pm3\).`], S`\(2\)`),
    q("Level 3 · decreasing function", S`\(f(x)=\dfrac{12}{x+2}\) for \(1\le x\le4\). What is the largest value in its range?`, num(4),
      "f decreases on this domain.", [S`\(f(1)=4\), \(f(4)=2\).`], S`\(4\)`),
  ]),

  wrapUp({
    qas: [
      ["Domain first or range first?", "Domain first: the range depends on which inputs are allowed."],
      ["How do I find a range without a graph?", "Find the vertex or asymptotes algebraically, check end points of the domain, and think about what values are impossible."],
      ["Is ℝ the same as (−∞, ∞)?", "Yes. Both mean all real numbers."],
      ["What about functions given as tables or pairs?", "The domain is the list of inputs and the range is the list of outputs."],
      ["Why do models restrict the domain?", "Time, length, area and numbers of items cannot be negative (and sometimes must be whole numbers)."],
    ],
    summary: [
      "Natural domain: no zero denominators, no square roots of negatives.",
      "Interval notation: [ ] include, ( ) exclude; ∞ always ( ).",
      "Range on a restricted domain: check end points and turning points.",
      "Models add their own restrictions.",
    ],
    next: "2.5 combines two functions into a composite function f(g(x)).",
  }),
];
