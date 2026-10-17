// MTH1W 4.3 — Representing Linear and Non-Linear Relations (self-study format; focus: y = mx + b)
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, expr } from "./lib.mjs";
import { plane } from "./figs4.mjs";

export const TITLE = "4.3 Representing Linear and Non-Linear Relations";

export const blocks = () => [
  intro({
    icon: "📐",
    title: "Representing Linear Relations: y = mx + b",
    overview: String.raw`Every linear relation can be written as \(y=mx+b\). The number \(b\) is the <strong>initial value</strong> (the y-intercept, where the graph starts) and \(m\) is the <strong>rate of change</strong> (the slope, how much \(y\) changes per unit of \(x\)). In this lesson you will read \(m\) and \(b\) from words, tables, graphs and equations, distinguish <strong>direct</strong> variation (\(b=0\)) from <strong>partial</strong> variation, graph a line from its equation using the intercept and the slope, and write the equation of a situation.`,
    goals: [
      "identify the initial value \\(b\\) and the rate of change \\(m\\) in a situation, table, graph or equation;",
      "calculate slope as \\(\\frac{\\text{rise}}{\\text{run}}\\) from a graph;",
      "distinguish direct variation \\(y=mx\\) from partial variation \\(y=mx+b\\);",
      "graph \\(y=mx+b\\) by plotting \\(b\\) and stepping with the slope;",
      "write \\(y=mx+b\\) for a real situation and use it to answer questions.",
    ],
    curriculum: "C4.2 (represent linear relations), C4.3 (initial value and rate of change)",
    book: "Nelson Principles of Mathematics 9, §3.4 Direct and Partial Variation; §5.1 Interpreting Slope and y-Intercept",
    prior: [
      [String.raw`Evaluate \(3x-4\) when \(x=-2\).`, String.raw`\(-10\).`],
      [String.raw`A table goes \(4, 7, 10, 13\) for \(x=0,1,2,3\). What is the first difference?`, String.raw`\(3\).`],
      [String.raw`Simplify \(\dfrac{-6}{4}\).`, String.raw`\(-\tfrac32\).`],
    ],
    words: [
      ["Slope (m)", "rate of change; rise ÷ run between two points on the line", "\\(m=\\frac{2}{3}\\)"],
      ["y-intercept (b)", "the value of y when x = 0; the initial value", "\\(b=-1\\)"],
      ["Direct variation", "y = mx: starts at 0 and is proportional", "earnings at 16.50/h"],
      ["Partial variation", "y = mx + b with b ≠ 0: a fixed part plus a variable part", "75 + 60h"],
      ["Constant of variation", "the m in a direct variation", "16.5"],
    ],
  }),

  section("📌 The meaning of m and b", String.raw`
  <p>A plumber charges a \(75\)-dollar call-out fee plus \(60\) dollars per hour: \(C=60h+75\).</p>
  ${table(["Part", "In the equation", "In the table", "On the graph", "In the story"], [
    ["\\(b\\)", "\\(75\\)", "value at \\(h=0\\)", "y-intercept", "fixed fee"],
    ["\\(m\\)", "\\(60\\)", "first difference", "slope (rise/run)", "cost per hour"],
  ])}
  ${keyIdea(String.raw`\(y=mx+b\): <strong>b</strong> is where you start; <strong>m</strong> is how fast you change. A relation with \(b=0\) is a <strong>direct variation</strong> (its graph passes through the origin); with \(b\neq0\) it is a <strong>partial variation</strong>.`)}`),

  section("📌 Slope as rise over run", String.raw`
  ${plane({ view: { xmin: -6, xmax: 6, ymin: -6, ymax: 6 }, lines: [{ m: 2 / 3, b: -1, label: "y = (2/3)x − 1" }], tri: { x: 0, y: -1, run: 3, rise: 2 }, points: [{ x: 0, y: -1, label: "(0, −1)", color: "green" }, { x: 3, y: 1, label: "(3, 1)" }] }, "From (0, −1), go right 3 and up 2 to reach (3, 1): slope 2/3.")}
  <p>To <strong>graph</strong> \(y=mx+b\): plot \((0,b)\), then use the slope as a step (right by the run, up by the rise; down if the slope is negative), plot a second point and draw the line. Change the rise, run and \(b\) in the explorer.</p>`),

  widget("slopeExplorer", { initRise: 2, initRun: 3, initB: -1 }),

  section("📌 From any representation to y = mx + b", String.raw`
  ${watchOut([
    String.raw`The y-intercept is the value at \(x=0\) — not the first value in a table that starts at \(x=1\). Work back one step.`,
    String.raw`In \(y=5-2x\) the slope is \(-2\) and the intercept is \(5\): the order of the terms does not matter.`,
    String.raw`A negative slope means the line falls to the right; step down, not up.`,
    String.raw`For a slope like \(\frac{-3}{4}\), you can go right \(4\), down \(3\) — or left \(4\), up \(3\).`,
  ])}`),

  examples([
    ["Direct variation", String.raw`Ava earns \(16.50\) dollars per hour. Write an equation for her earnings \(E\) for \(h\) hours, find her pay for \(7.5\) h, and describe the graph.`,
      [String.raw`No fixed amount, so \(b=0\): \(E=16.5h\).`, String.raw`\(E=16.5(7.5)=123.75\) dollars.`, "A straight line through the origin with slope 16.5: direct variation."],
      String.raw`\(E=16.5h\); \(123.75\) dollars`],
    ["Partial variation from a table", String.raw`Write the equation of the relation.
    ${table(["x", "1", "2", "3", "4"], [["y", "7.5", "11", "14.5", "18"]])}`,
      [String.raw`First differences: \(3.5\) each, so \(m=3.5\).`, String.raw`Work back to \(x=0\): \(7.5-3.5=4\), so \(b=4\).`, String.raw`Check \(x=4\): \(3.5(4)+4=18\) ✓`],
      String.raw`\(y=3.5x+4\)`],
    ["Graphing from the equation", String.raw`Graph \(y=-\tfrac23x+4\).`,
      [String.raw`Start at \((0,4)\).`, String.raw`Slope \(-\frac23\): right \(3\), down \(2\) to \((3,2)\); again to \((6,0)\).`, "Draw the line through the points; it falls to the right."],
      "line through (0, 4), (3, 2), (6, 0)",
      plane({ view: { xmin: -4, xmax: 8, ymin: -4, ymax: 8 }, lines: [{ m: -2 / 3, b: 4, label: "y = −(2/3)x + 4" }], tri: { x: 0, y: 4, run: 3, rise: -2 }, points: [{ x: 0, y: 4, color: "green" }, { x: 3, y: 2 }, { x: 6, y: 0 }] })],
    ["Reading a graph", String.raw`The graph shows the cost of renting a canoe. Find \(m\) and \(b\), write the equation, and explain each number.`,
      [String.raw`The line starts at \((0,20)\): \(b=20\).`, String.raw`It passes through \((4,50)\): \(m=\frac{50-20}{4-0}=7.5\).`, String.raw`\(C=7.5h+20\): a \(20\)-dollar deposit plus \(7.50\) dollars per hour.`],
      String.raw`\(C=7.5h+20\)`,
      plane({ view: { xmin: 0, xmax: 8, ymin: 0, ymax: 80 }, lines: [{ m: 7.5, b: 20, color: "blue" }], points: [{ x: 0, y: 20, label: "(0, 20)", color: "green" }, { x: 4, y: 50, label: "(4, 50)" }], xlabel: "hours h", ylabel: "cost C", step: { x: 1, y: 10 } })],
    ["Interpreting and using an equation", String.raw`A car rental costs \(C=0.35d+12\) dollars for \(d\) km. (a) Explain \(0.35\) and \(12\). (b) What does \(80\) km cost? (c) How far can you drive for \(54\) dollars?`,
      [String.raw`(a) \(12\) dollars is the fixed daily charge (\(b\)); \(0.35\) dollars is the cost per km (\(m\)).`, String.raw`(b) \(0.35(80)+12=40\) dollars.`, String.raw`(c) \(0.35d+12=54\Rightarrow0.35d=42\Rightarrow d=120\) km.`],
      String.raw`(b) \(40\) dollars (c) \(120\) km`],
  ]),

  practice([
    q("slope from equation", String.raw`What is the slope of \(y=5-2x\)?`, num(-2), "The slope is the coefficient of x, with its sign.", [String.raw`\(y=-2x+5\): \(m=-2\).`], String.raw`\(-2\)`),
    q("intercept from table", String.raw`A linear table has \(y=13, 17, 21\) at \(x=2, 3, 4\). What is the y-intercept?`, num(5),
      "Find the first difference, then work back to x = 0.", [String.raw`Difference \(4\); from \(x=2\) back two steps: \(13-8=5\).`], String.raw`\(5\)`),
    q("direct or partial", "A plumber charges 90 dollars per hour with no call-out fee. The relation is…", choice(["a direct variation", "a partial variation", "non-linear", "not a relation"], 0),
      "Is there a fixed part (b)?", ["b = 0, so C = 90h is a direct variation."], "direct variation"),
    q("equation from words", String.raw`A pool has \(2000\) L of water and drains at \(150\) L/min. Write \(V\) in terms of \(t\) minutes.`, expr("2000-150t"),
      "Start value plus (rate × time); draining means a negative rate.", [String.raw`\(b=2000\), \(m=-150\).`], String.raw`\(V=2000-150t\)`, { placeholder: "V = …" }),
    q("rise over run", String.raw`A line passes through \((-1,4)\) and \((3,-2)\). What is its slope? (Give a decimal.)`, num(-1.5),
      "rise ÷ run from the first point to the second.", [String.raw`rise \(-2-4=-6\); run \(3-(-1)=4\).`, String.raw`\(\frac{-6}{4}=-1.5\).`], String.raw`\(-1.5\)`),
  ]),

  wrapUp({
    qas: [
      ["Why is b called the initial value?", "It is the value of y when x = 0 — at the start (time 0, distance 0, zero items). In a story it is the fixed part: a fee, a starting amount."],
      ["How can I tell direct from partial variation on a graph?", "A direct variation passes through the origin; a partial variation crosses the y-axis somewhere else."],
      [String.raw`Does it matter whether I write \(y=5-2x\) or \(y=-2x+5\)?`, "No — they are the same relation. Many people rewrite it with the x-term first to read m and b quickly."],
      ["What does a slope of 0 mean?", "y does not change: the line is horizontal. In a story, nothing is being added per unit (a flat fee only)."],
      ["Why use rise/run from any two points?", "On a straight line the ratio is the same for every pair of points (similar triangles), so any two convenient points give the slope."],
    ],
    summary: [
      "y = mx + b: m is the rate of change (slope), b is the initial value (y-intercept).",
      "Slope = rise ÷ run between any two points on the line.",
      "Direct variation: b = 0 (through the origin); partial variation: b ≠ 0.",
      "Graph from (0, b) using the slope as a step.",
    ],
    next: "4.4 compares two linear relations and finds where they meet.",
  }),
];
