// MTH1W 4.7 — Finding the Equation of a Line (self-study format)
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, expr } from "./lib.mjs";
import { plane } from "./figs4.mjs";

export const TITLE = "4.7 Finding the Equation of a Line";

export const blocks = () => [
  intro({
    icon: "🎯",
    title: "Finding the Equation of a Line",
    overview: String.raw`To write \(y=mx+b\) you need two things: the slope \(m\) and the y-intercept \(b\). In this lesson you will find them from a <strong>graph</strong>, from a <strong>slope and a point</strong>, from <strong>two points</strong>, from a <strong>table</strong> and from a <strong>real situation</strong> with two data points. The same three-step plan works every time: find \(m\), substitute a point to find \(b\), write and check the equation.`,
    goals: [
      "read m and b from a graph and write the equation;",
      "find b by substituting a point when m is known;",
      String.raw`find the slope through two points with \(m=\dfrac{y_2-y_1}{x_2-x_1}\);`,
      "write the equation from a table, including tables with unequal x-steps;",
      "model a situation from two data points and use the equation to predict.",
    ],
    curriculum: "C4.3 (determine the equation of a line), C4.4 (solve problems)",
    prior: [
      [String.raw`Solve \(7=-2(3)+b\).`, String.raw`\(b=13\).`],
      [String.raw`Simplify \(\dfrac{-9}{6}\).`, String.raw`\(-\tfrac32\).`],
      [String.raw`What is the slope of \(y=4-x\)?`, String.raw`\(-1\).`],
    ],
    words: [
      ["Slope formula", "\\(m=\\dfrac{y_2-y_1}{x_2-x_1}\\)", "\\((1,2), (3,8)\\Rightarrow m=3\\)"],
      ["Substitute a point", "replace x and y with the point's coordinates to solve for b", ""],
      ["Point on a line", "a point whose coordinates make the equation true", ""],
    ],
  }),

  section("📌 The plan", String.raw`
  ${table(["Step", "What to do"], [["1", "Find the slope \\(m\\) (rise ÷ run, or the slope formula)."], ["2", "Substitute one known point \\((x,y)\\) into \\(y=mx+b\\) and solve for \\(b\\) (or read b from the graph)."], ["3", "Write \\(y=mx+b\\) and check it with the other point."]])}
  ${keyIdea(String.raw`\(m=\dfrac{y_2-y_1}{x_2-x_1}\). Subtract in the <strong>same order</strong> on top and bottom. Then \(b=y-mx\) for any point on the line.`)}
  ${watchOut([
    String.raw`Mixing the order: \(\frac{y_2-y_1}{x_1-x_2}\) gives the wrong sign.`,
    "Brackets around negative coordinates: 4 − (−2) = 6.",
    "Always check the equation with the second point.",
  ])}
  <p>In the explorer, move the two points and follow the three steps.</p>`),

  widget("twoPointLine", { init: [-3, -1, 3, 3] }),

  examples([
    ["From a graph", String.raw`Write the equation of the line shown.`,
      [String.raw`It crosses the y-axis at \((0,-2)\): \(b=-2\).`, String.raw`From \((0,-2)\) to \((3,4)\): rise \(6\), run \(3\), \(m=2\).`],
      String.raw`\(y=2x-2\)`,
      plane({ view: { xmin: -4, xmax: 6, ymin: -6, ymax: 8 }, lines: [{ m: 2, b: -2 }], points: [{ x: 0, y: -2, label: "(0, −2)", color: "green" }, { x: 3, y: 4, label: "(3, 4)" }], tri: { x: 0, y: -2, run: 3, rise: 6 } })],
    ["From a slope and a point", String.raw`Find the equation of the line with slope \(-3\) through \((2,5)\).`,
      [String.raw`\(5=-3(2)+b\Rightarrow5=-6+b\Rightarrow b=11\).`, String.raw`Check: \(-3(2)+11=5\) ✓`],
      String.raw`\(y=-3x+11\)`],
    ["From two points", String.raw`Find the equation of the line through \((-2,7)\) and \((4,-2)\).`,
      [String.raw`\(m=\dfrac{-2-7}{4-(-2)}=\dfrac{-9}{6}=-\tfrac32\).`, String.raw`\(7=-\tfrac32(-2)+b=3+b\Rightarrow b=4\).`, String.raw`Check \((4,-2)\): \(-6+4=-2\) ✓`],
      String.raw`\(y=-\tfrac32x+4\)`],
    ["From a table with unequal steps", String.raw`Find the equation.
    ${table(["x", "2", "5", "9"], [["y", "11", "20", "32"]])}`,
      [String.raw`\(\frac{20-11}{5-2}=3\) and \(\frac{32-20}{9-5}=3\): linear, \(m=3\).`, String.raw`\(11=3(2)+b\Rightarrow b=5\).`],
      String.raw`\(y=3x+5\)`],
    ["From two data points", String.raw`A plumber charged \(155\) dollars for a \(2\)-hour job and \(260\) dollars for a \(3.5\)-hour job. Assuming a linear relation, find the hourly rate, the call-out fee, and the cost of a \(5\)-hour job.`,
      [String.raw`\(m=\dfrac{260-155}{3.5-2}=\dfrac{105}{1.5}=70\) dollars per hour.`, String.raw`\(155=70(2)+b\Rightarrow b=15\) dollars.`, String.raw`\(C=70h+15\); \(5\) h: \(365\) dollars.`],
      String.raw`\(C=70h+15\); \(365\) dollars`],
  ]),

  practice([
    q("slope formula", String.raw`Find the slope through \((1,2)\) and \((4,11)\).`, num(3), "Change in y over change in x.", [String.raw`\(\frac{11-2}{4-1}=\frac93=3\).`], String.raw`\(3\)`),
    q("slope and intercept", String.raw`Write the equation of the line with slope \(5\) and y-intercept \(-4\).`, expr("5x-4"), "Substitute into y = mx + b.", [String.raw`\(y=5x-4\).`], String.raw`\(y=5x-4\)`, { placeholder: "y = …" }),
    q("two points", String.raw`Write the equation of the line through \((2,1)\) and \((6,9)\).`, expr("2x-3"),
      "Slope first, then substitute a point.", [String.raw`\(m=\frac{8}{4}=2\).`, String.raw`\(1=2(2)+b\Rightarrow b=-3\).`], String.raw`\(y=2x-3\)`, { placeholder: "y = …" }),
    q("find b", String.raw`A line has slope \(-2\) and passes through \((-1,6)\). What is \(b\)?`, num(4),
      "Substitute the point.", [String.raw`\(6=-2(-1)+b=2+b\Rightarrow b=4\).`], String.raw`\(4\)`),
    q("model", String.raw`A candle is \(18\) cm tall after \(2\) h and \(12\) cm tall after \(5\) h, burning at a constant rate. How tall was it at the start?`, num(22),
      "Find the rate, then work back to t = 0.", [String.raw`\(m=\frac{12-18}{5-2}=-2\) cm/h.`, String.raw`\(18=-2(2)+b\Rightarrow b=22\).`], String.raw`\(22\) cm`),
  ]),

  wrapUp({
    qas: [
      ["Which point should I substitute to find b?", "Either one — both give the same b if the slope is right. Use the other point to check."],
      ["Why must I subtract in the same order?", String.raw`\(\frac{y_2-y_1}{x_2-x_1}\) and \(\frac{y_1-y_2}{x_1-x_2}\) are equal, but mixing them (\(\frac{y_2-y_1}{x_1-x_2}\)) flips the sign.`],
      ["What if the two points have the same x?", "The run is 0, so the line is vertical: x = that value (no y = mx + b form)."],
      ["Can I leave the slope as a fraction?", String.raw`Yes — \(-\frac32\) is exact and usually better than \(-1.5\) for graphing (down 3, right 2).`],
      ["How do I know a table is linear before finding its equation?", "Check that Δy/Δx is the same for every pair of consecutive points."],
    ],
    summary: [
      "Find m (rise/run or the slope formula), then b = y − mx using a point, then check.",
      "From a graph: read b at the y-axis and count rise/run between lattice points.",
      "From data: two points determine the line; use it to predict.",
    ],
    next: "4.8 writes lines in general form Ax + By + C = 0 and uses intercepts.",
  }),
];
