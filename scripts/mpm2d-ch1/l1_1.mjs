// MPM2D 1.1 — Review of Linear Relations (self-study format): slope, the three forms of a line,
// graphing from intercepts, writing equations, solving linear equations (including fractions)
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, expr } from "./lib.mjs";
import { plane } from "../mth1w-ch4/figs4.mjs";

export const TITLE = "1.1 Review of Linear Relations";

export const blocks = () => [
  intro({
    icon: "📈",
    title: "Review of Linear Relations",
    overview: String.raw`Grade 10 opens with linear systems — two lines at once — so working with a single line must be automatic. This lesson rebuilds the toolkit: slope as a rate of change, the slope-intercept and standard forms and how to switch between them, fast graphing from intercepts, writing the equation of a line from any information, and solving linear equations, including ones with fractions. Every later lesson in the chapter uses these skills.`,
    goals: [
      "find the slope of a line from two points, a graph or an equation;",
      "convert between slope-intercept form \\(y=mx+b\\) and standard form \\(Ax+By=C\\);",
      "graph a line quickly using its intercepts or its slope and y-intercept;",
      "write the equation of a line from two points, or a point and a slope;",
      "solve linear equations, including equations with brackets and fractions.",
    ],
    curriculum: "Review of Grade 9 linear relations, preparing AG1 (linear systems)",
    prior: [
      [String.raw`Slope through \((1,2)\) and \((4,11)\)?`, String.raw`\(\frac{9}{3}=3\).`],
      [String.raw`Solve \(3x-7=11\).`, String.raw`\(x=6\).`],
      [String.raw`What is the y-intercept of \(y=-2x+5\)?`, String.raw`\(5\).`],
    ],
    words: [
      ["Slope (m)", "rise ÷ run; the rate of change", "\\(m=\\frac{\\Delta y}{\\Delta x}\\)"],
      ["Slope-intercept form", "y = mx + b", "\\(y=\\tfrac23x-4\\)"],
      ["Standard form", "Ax + By = C with integers, A ≥ 0", "\\(2x-3y=12\\)"],
      ["x-intercept", "where the line crosses the x-axis (y = 0)", "\\((6,0)\\)"],
      ["y-intercept", "where the line crosses the y-axis (x = 0)", "\\((0,-4)\\)"],
    ],
  }),

  section("📌 Slope", String.raw`
  <p>For two points \((x_1,y_1)\) and \((x_2,y_2)\): \(\;m=\dfrac{y_2-y_1}{x_2-x_1}\). The slope is the same between any two points of a line — that constant rate of change is what makes the relation linear.</p>
  ${table(["Line", "Slope", "Looks like"], [["rising", "positive", "↗"], ["falling", "negative", "↘"], ["horizontal y = k", "0", "→"], ["vertical x = k", "undefined", "↑"]])}
  <p>Parallel lines have equal slopes; perpendicular lines have slopes that are negative reciprocals (product \(-1\)).</p>`),

  widget("slopeExplorer", { initRise: 2, initRun: 3, initB: -4 }),

  section("📌 Two forms of the same line", String.raw`
  ${table(["Form", "Shows at a glance", "Convert by"], [
    ["\\(y=mx+b\\)", "slope and y-intercept", "move the x-term and clear fractions → \\(Ax+By=C\\)"],
    ["\\(Ax+By=C\\)", "both intercepts quickly", "solve for y → \\(y=-\\frac{A}{B}x+\\frac{C}{B}\\)"],
  ])}
  ${keyIdea(String.raw`To graph \(Ax+By=C\) fast: set \(x=0\) to get the y-intercept, set \(y=0\) to get the x-intercept, plot both and join them. Its slope is \(m=-\dfrac{A}{B}\).`)}
  ${plane({ view: { xmin: -4, xmax: 10, ymin: -7, ymax: 4 }, lines: [{ m: 2 / 3, b: -4, color: "violet", label: "2x − 3y = 12", lx: 3 }], points: [{ x: 6, y: 0, label: "(6, 0)", color: "blue" }, { x: 0, y: -4, label: "(0, −4)", color: "red" }], step: { x: 1, y: 1 } }, "2x − 3y = 12: intercepts (6, 0) and (0, −4); slope 2/3.")}`),

  widget("standardForm", { init: [3, 4, 12] }),

  section("📌 Solving linear equations", String.raw`
  <p>Every method in this chapter ends with a one-variable equation. The plan: expand brackets, clear fractions by multiplying <em>every term</em> by the lowest common denominator, collect variable terms on one side and numbers on the other, then divide.</p>
  ${watchOut([
    "When you multiply to clear fractions, multiply every term on both sides — including whole numbers.",
    "A minus sign in front of a bracket changes the sign of every term inside.",
    "Check a solution by substituting it into the original equation.",
    "In y = mx + b, b is the y-intercept only when the equation is solved for y.",
  ])}`),

  examples([
    ["Slope and equation from two points", String.raw`Find the equation of the line through \((-2,7)\) and \((4,-2)\) in slope-intercept form and in standard form.`,
      [String.raw`\(m=\frac{-2-7}{4-(-2)}=\frac{-9}{6}=-\frac32\).`, String.raw`\(7=-\frac32(-2)+b\Rightarrow7=3+b\Rightarrow b=4\): \(y=-\frac32x+4\).`, String.raw`Multiply by \(2\): \(2y=-3x+8\Rightarrow3x+2y=8\).`],
      String.raw`\(y=-\tfrac32x+4\), or \(3x+2y=8\)`],
    ["From standard form to slope-intercept", String.raw`Write \(5x-2y=10\) in slope-intercept form and state the slope and intercepts.`,
      [String.raw`\(-2y=-5x+10\Rightarrow y=\frac52x-5\).`, String.raw`Slope \(\frac52\); y-intercept \(-5\); x-intercept: \(5x=10\Rightarrow x=2\).`],
      String.raw`\(y=\tfrac52x-5\); \(m=\tfrac52\); intercepts \((2,0)\), \((0,-5)\)`],
    ["Graphing from intercepts", String.raw`Graph \(4x+5y=20\).`,
      [String.raw`\(x=0\): \(5y=20\Rightarrow y=4\).`, String.raw`\(y=0\): \(4x=20\Rightarrow x=5\).`, "Plot (0, 4) and (5, 0) and draw the line through them."],
      String.raw`intercepts \((0,4)\) and \((5,0)\)`,
      plane({ view: { xmin: -2, xmax: 8, ymin: -2, ymax: 6 }, lines: [{ m: -0.8, b: 4, color: "violet" }], points: [{ x: 0, y: 4, label: "(0, 4)" }, { x: 5, y: 0, label: "(5, 0)" }], step: { x: 1, y: 1 } })],
    ["An equation with brackets", String.raw`Solve \(3(2x-5)-4(x+1)=7\).`,
      [String.raw`Expand: \(6x-15-4x-4=7\).`, String.raw`Collect: \(2x-19=7\Rightarrow2x=26\Rightarrow x=13\).`, String.raw`Check: \(3(21)-4(14)=63-56=7\) ✓`],
      String.raw`\(x=13\)`],
    ["An equation with fractions", String.raw`Solve \(\dfrac{x+3}{4}-\dfrac{x-1}{3}=1\).`,
      [String.raw`Multiply every term by \(12\): \(3(x+3)-4(x-1)=12\).`, String.raw`Expand: \(3x+9-4x+4=12\Rightarrow-x+13=12\Rightarrow x=1\).`, String.raw`Check: \(\frac44-\frac03=1\) ✓`],
      String.raw`\(x=1\)`],
  ]),

  practice([
    q("slope", String.raw`Find the slope of the line through \((3,-1)\) and \((7,9)\).`, num(2.5),
      "Δy ÷ Δx.", [String.raw`\(\frac{9-(-1)}{7-3}=\frac{10}{4}=2.5\).`], String.raw`\(\tfrac52\)`),
    q("standard form slope", String.raw`What is the slope of \(6x+3y=9\)?`, num(-2),
      "m = −A/B.", [String.raw`\(-\frac{6}{3}=-2\).`], String.raw`\(-2\)`),
    q("x-intercept", String.raw`Find the x-intercept of \(3x-4y=18\).`, num(6),
      "Set y = 0.", [String.raw`\(3x=18\Rightarrow x=6\).`], String.raw`\(6\)`),
    q("equation", String.raw`Write the equation of the line with slope \(-3\) through \((2,1)\) in the form \(y=mx+b\).`, expr("-3x+7"),
      "Find b from the point.", [String.raw`\(1=-3(2)+b\Rightarrow b=7\).`], String.raw`\(y=-3x+7\)`, { placeholder: "y = …" }),
    q("solve", String.raw`Solve \(\dfrac{2x}{3}-\dfrac{x+4}{2}=1\).`, num(18),
      "Multiply every term by 6.", [String.raw`\(4x-3(x+4)=6\Rightarrow x-12=6\Rightarrow x=18\).`], String.raw`\(x=18\)`),
  ]),

  wrapUp({
    qas: [
      ["Which form of a line should I use?", "Slope-intercept form when you need the slope or a quick sketch from b; standard form when the coefficients are integers or you need intercepts. In this chapter you will use both — elimination works best in standard form."],
      ["Why must A, B and C be integers in standard form?", "It is a convention that makes equations easy to compare and to combine in elimination. Multiply by the common denominator to clear fractions."],
      ["How can I check an equation I wrote from two points?", "Substitute both points: each must make the equation true."],
      ["Why multiply every term when clearing fractions?", "An equation stays balanced only if both sides are multiplied by the same number. Skipping a term changes the equation."],
      ["What does the slope mean in a word problem?", "It is a rate: dollars per hour, kilometres per minute, litres per day. Always state it with units."],
    ],
    summary: [
      "m = (y₂ − y₁)/(x₂ − x₁); parallel: equal slopes; perpendicular: product −1.",
      "y = mx + b and Ax + By = C describe the same line; m = −A/B.",
      "Graph Ax + By = C from its two intercepts.",
      "Solve equations: expand, clear fractions (every term), collect, divide, check.",
    ],
    next: "1.2 puts two lines on one grid: solving linear systems by graphing.",
  }),
];
