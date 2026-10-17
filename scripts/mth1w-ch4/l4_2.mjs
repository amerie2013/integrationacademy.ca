// MTH1W 4.2 — Linear vs Non-Linear Relations (self-study format)
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice } from "./lib.mjs";
import { plane } from "./figs4.mjs";

export const TITLE = "4.2 Linear vs Non-Linear Relations";

export const blocks = () => [
  intro({
    icon: "〰️",
    title: "Linear vs Non-Linear Relations",
    overview: String.raw`Some relations change by the same amount every step — their graphs are straight lines. Others speed up, slow down or level off. In this lesson you will use <strong>first differences</strong> (and the <strong>rate of change</strong> when the steps are uneven) to recognize linear relations from a table, recognize three important non-linear families — <strong>quadratic</strong> (constant second differences), <strong>exponential</strong> (constant ratio) and <strong>inverse variation</strong> \(xy=k\) — and connect each to its graph and equation.`,
    goals: [
      "use first differences to decide whether a table with equal x-steps is linear;",
      "use the rate of change \\(\\frac{\\Delta y}{\\Delta x}\\) when the x-steps are not equal;",
      "recognize quadratic relations (constant second differences) and exponential relations (constant ratio);",
      "recognize inverse variation \\(xy=k\\) from a table, a graph and a situation;",
      "decide from an equation whether a relation is linear (the variable has degree 1).",
    ],
    curriculum: "C3.2 (compare linear and non-linear), C4.1 (characteristics of graphs, tables and equations), C4.2 (xy = k)",
    prior: [
      [String.raw`Find the differences between consecutive terms of \(4, 9, 14, 19\).`, String.raw`\(5, 5, 5\).`],
      [String.raw`Evaluate \(2^x\) for \(x=0,1,2,3\).`, String.raw`\(1, 2, 4, 8\).`],
      [String.raw`If \(xy=24\) and \(x=6\), what is \(y\)?`, String.raw`\(4\).`],
    ],
    words: [
      ["Linear relation", "a relation whose graph is a straight line", "\\(y=3x-2\\)"],
      ["First differences", "differences between consecutive y-values when x goes up by equal steps", "\\(3, 3, 3\\)"],
      ["Rate of change", "\\(\\dfrac{\\Delta y}{\\Delta x}\\): change in y per unit change in x", "\\(\\frac{12}{4}=3\\)"],
      ["Quadratic", "second differences are constant; graph is a parabola", "\\(y=x^2\\)"],
      ["Exponential", "each y is a constant multiple of the one before", "\\(y=2^x\\)"],
      ["Inverse variation", "the product xy stays constant", "\\(xy=12\\)"],
    ],
  }),

  section("📌 First differences and the rate of change", String.raw`
  ${table(["x", "0", "1", "2", "3", "4"], [["y", "−2", "1", "4", "7", "10"], ["1st diff.", "", "3", "3", "3", "3"]])}
  <p>When \(x\) goes up in equal steps of \(1\) and the first differences are all equal, the relation is <strong>linear</strong>; the common difference is the <strong>rate of change</strong> (here \(3\)). If the steps in \(x\) are not equal, compare \(\dfrac{\Delta y}{\Delta x}\) instead:</p>
  ${table(["x", "0", "2", "5", "6"], [["y", "1", "5", "11", "13"], ["\\(\\frac{\\Delta y}{\\Delta x}\\)", "", "\\(\\frac42=2\\)", "\\(\\frac63=2\\)", "\\(\\frac21=2\\)"]])}
  ${keyIdea(String.raw`<strong>Linear</strong> ⇔ constant rate of change ⇔ straight-line graph ⇔ equation of degree 1 (like \(y=mx+b\)).`)}
  ${watchOut([
    "First differences only work when the x-values go up by equal steps. Otherwise divide each change in y by the change in x.",
    "Check every difference, not just the first two.",
  ])}`),

  section("📌 Three non-linear families", String.raw`
  ${table(["Family", "Table clue", "Graph", "Example"], [
    ["Quadratic", "first differences change; <strong>second</strong> differences are constant", "parabola (U-shape)", "area of a square \\(A=s^2\\)"],
    ["Exponential", "each y is the previous y times a constant <strong>ratio</strong>", "rises (or falls) faster and faster", "doubling bacteria \\(N=50(2)^t\\)"],
    ["Inverse variation", "\\(x\\cdot y\\) is the same for every pair", "hyperbola: never touches the axes", "speed and time for a fixed trip \\(vt=120\\)"],
  ])}
  ${plane({ view: { xmin: 0, xmax: 6, ymin: 0, ymax: 40 }, curves: [{ f: (x) => x * x, color: "red" }, { f: (x) => 2 ** x, color: "green" }, { f: (x) => 24 / x, a: 0.6, color: "amber" }], lines: [{ m: 4, b: 2, color: "blue" }], xlabel: "x", ylabel: "y", step: { x: 1, y: 5 } }, "Blue: linear y = 4x + 2. Red: quadratic y = x². Green: exponential y = 2ˣ. Orange: inverse xy = 24.")}
  <p>Choose each family in the explorer and watch the differences, the ratio or the product in the table.</p>`),

  widget("relationTypes", {}),

  examples([
    ["A linear table", String.raw`Is this relation linear? If so, state the rate of change and the equation.
    ${table(["x", "0", "1", "2", "3", "4"], [["y", "5", "2", "−1", "−4", "−7"]])}`,
      [String.raw`First differences: \(-3, -3, -3, -3\) — constant, so linear.`, String.raw`Rate of change \(-3\); the y-value at \(x=0\) is \(5\).`],
      String.raw`linear: \(y=-3x+5\)`],
    ["Uneven steps", String.raw`A car's fuel (L) is recorded at different distances (km): \((0, 48)\), \((50, 44)\), \((150, 36)\), \((175, 34)\). Is the relation linear?`,
      [String.raw`\(\frac{44-48}{50}=-0.08\), \(\frac{36-44}{100}=-0.08\), \(\frac{34-36}{25}=-0.08\).`, String.raw`The rate is constant: \(-0.08\) L per km.`],
      String.raw`linear: \(F=48-0.08d\)`],
    ["Second differences", String.raw`The area of a square of side \(s\) is recorded for \(s=1\) to \(5\): \(1, 4, 9, 16, 25\). Classify the relation.`,
      [String.raw`First differences: \(3, 5, 7, 9\) — not constant.`, String.raw`Second differences: \(2, 2, 2\) — constant.`],
      String.raw`quadratic (\(A=s^2\)): a parabola`],
    ["A constant ratio", String.raw`A bacteria count is \(50, 100, 200, 400, 800\) at hours \(0\) to \(4\). Classify it and predict hour \(6\).`,
      [String.raw`Differences \(50, 100, 200, 400\) keep changing; ratios are all \(2\).`, String.raw`Exponential: \(N=50(2)^t\). Hour \(6\): \(50(64)=3200\).`],
      String.raw`exponential; \(3200\) at hour \(6\)`],
    ["Inverse variation", String.raw`A \(120\)-km trip: speed \(v\) and time \(t\) satisfy \(vt=120\). Make a table for \(t=1,2,3,4,6\) and describe the graph.`,
      [String.raw`\(v=\frac{120}{t}\): \(120, 60, 40, 30, 20\).`, String.raw`Doubling the time halves the speed. The product is always \(120\).`, "The graph falls steeply then levels off, getting close to the axes but never touching them."],
      String.raw`inverse variation, \(vt=120\)`,
      plane({ view: { xmin: 0, xmax: 8, ymin: 0, ymax: 140 }, curves: [{ f: (t) => 120 / t, a: 0.85, color: "amber" }], points: [1, 2, 3, 4, 6].map((t) => ({ x: t, y: 120 / t, color: "amber" })), xlabel: "time t (h)", ylabel: "speed v (km/h)", step: { x: 1, y: 20 } })],
  ]),

  practice([
    q("linear tables", "Which table shows a linear relation? (x = 0, 1, 2, 3)", choice(["y: 7, 4, 1, −2", "y: 1, 2, 4, 8", "y: 0, 1, 4, 9", "y: 12, 6, 4, 3"], 0),
      "Look for constant first differences.", ["7, 4, 1, −2 changes by −3 each time; the others are exponential, quadratic and inverse."], "y: 7, 4, 1, −2"),
    q("rate of change", String.raw`What is the first difference of \(y=-3x+5\) for x-steps of \(1\)?`, num(-3),
      "In y = mx + b, the first difference is m.", [String.raw`Each step of \(1\) in \(x\) changes \(y\) by \(-3\).`], String.raw`\(-3\)`),
    q("equations", "Which equation is linear?", choice([String.raw`\(y=\tfrac{x}{4}-7\)`, String.raw`\(y=x^2+1\)`, String.raw`\(y=3^x\)`, String.raw`\(xy=10\)`], 0),
      "Linear: x appears only to the power 1, and not in a denominator.", [String.raw`\(\tfrac x4=\tfrac14x\) has degree \(1\).`], String.raw`\(y=\tfrac x4-7\)`),
    q("second differences", String.raw`For \(y=3x^2+1\) with \(x=0,1,2,3,4\), what are the (constant) second differences?`, num(6),
      "Make the table, then take differences twice.", [String.raw`y: \(1, 4, 13, 28, 49\); first: \(3, 9, 15, 21\); second: \(6, 6, 6\).`], String.raw`\(6\)`),
    q("inverse", String.raw`\(y\) varies inversely as \(x\). When \(x=4\), \(y=9\). Find \(y\) when \(x=6\).`, num(6),
      String.raw`The product \(xy\) stays the same.`, [String.raw`\(k=4\times9=36\).`, String.raw`\(y=\frac{36}{6}=6\).`], String.raw`\(6\)`),
  ]),

  wrapUp({
    qas: [
      ["Why must the x-steps be equal to use first differences?", String.raw`A difference of \(6\) over one step and \(6\) over two steps are different rates (\(6\) vs \(3\) per unit). Dividing by \(\Delta x\) fixes this.`],
      ["How can I tell quadratic from exponential?", "Quadratic: second differences are constant. Exponential: ratios are constant. Exponential graphs eventually grow far faster than any parabola."],
      ["Is xy = 12 linear?", String.raw`No. \(y=\frac{12}{x}\) has \(x\) in the denominator; the graph is a curve (hyperbola) and the rate of change is not constant.`],
      ["What does a constant rate of change mean in a real situation?", "The same change in the dependent variable for every equal change in the independent one: the same cost per kilometre, the same metres per second."],
      ["Can a real data set be exactly linear?", "Measured data usually scatter a little. If the differences are close to constant, a line is a good model (Chapter 6 lines of best fit)."],
    ],
    summary: [
      "Linear: constant first differences (or constant Δy/Δx); straight-line graph; degree-1 equation.",
      "Quadratic: constant second differences; parabola.",
      "Exponential: constant ratio; curve that grows faster and faster.",
      "Inverse variation: xy = k; hyperbola.",
    ],
    next: "4.3 represents linear relations with y = mx + b and connects slope and intercept to real situations.",
  }),
];
