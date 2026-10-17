// MPM2D 1.2 — Solving Linear Systems by Graphing (self-study format): what a solution is, checking a point,
// graphing both lines, reading and verifying the intersection, comparing plans, limits of graphing
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice } from "./lib.mjs";
import { plane } from "../mth1w-ch4/figs4.mjs";

export const TITLE = "1.2 Solving Linear Systems by Graphing";

export const blocks = () => [
  intro({
    icon: "📐",
    title: "Solving Linear Systems by Graphing",
    overview: String.raw`A linear system is a set of two linear equations in the same two variables. Its solution is the ordered pair that makes <em>both</em> equations true — on a graph, the point where the two lines cross. In this lesson you will check whether a point solves a system, solve systems by graphing, verify the answer, use graphs to compare two options, and learn why graphing sometimes gives only an estimate.`,
    goals: [
      "explain what the solution of a linear system means, algebraically and graphically;",
      "check whether an ordered pair is a solution of a system;",
      "solve a system by graphing both lines and reading the point of intersection;",
      "verify a graphical solution by substitution;",
      "use a graphical solution to compare two options in context, and recognize when a graph only estimates.",
    ],
    curriculum: "AG1 (model and solve problems involving the intersection of two straight lines)",
    prior: [
      [String.raw`Graph \(y=2x-3\): give two points.`, String.raw`\((0,-3)\) and \((2,1)\).`],
      [String.raw`Intercepts of \(x+2y=8\)?`, String.raw`\((8,0)\) and \((0,4)\).`],
      [String.raw`Is \((1,4)\) on \(3x+y=7\)?`, String.raw`\(3+4=7\) ✓ yes.`],
    ],
    words: [
      ["Linear system", "two (or more) linear equations in the same variables", "\\(y=2x-1\\), \\(x+y=5\\)"],
      ["Solution of a system", "an ordered pair that satisfies both equations", "\\((2,3)\\)"],
      ["Point of intersection", "where the graphs of the two lines meet", ""],
      ["Verify", "substitute into both original equations", "LS = RS"],
    ],
  }),

  section("📌 What a solution means", String.raw`
  <p>Every point on a line satisfies that line's equation. A point on <strong>both</strong> lines satisfies both equations — so the solution of the system is the point of intersection.</p>
  ${plane({ view: { xmin: -2, xmax: 8, ymin: -4, ymax: 8 }, lines: [{ m: 2, b: -1, color: "blue", label: "y = 2x − 1", lx: 3.6 }, { m: -1, b: 5, color: "red", label: "x + y = 5", lx: 5.2 }], points: [{ x: 2, y: 3, label: "(2, 3)", color: "green" }], step: { x: 1, y: 1 } }, "The lines meet at (2, 3): 2(2) − 1 = 3 ✓ and 2 + 3 = 5 ✓.")}
  ${keyIdea(String.raw`To check a point, substitute it into <strong>each</strong> equation (left side vs right side). It is a solution only if it works in both.`)}`),

  section("📌 Solving by graphing", String.raw`
  <ol><li>Write each equation in a form that is easy to graph (slope-intercept, or use intercepts for standard form).</li>
  <li>Graph both lines carefully on the same grid.</li>
  <li>Read the point of intersection.</li>
  <li>Verify it in both original equations.</li></ol>
  <p>Change the coefficients in the explorer and watch the intersection move. Try to make the lines parallel.</p>`),

  widget("systemGraph", { init: [1, 1, 5, 2, -1, 1] }),

  section("📌 When a graph is not enough", String.raw`
  <p>If the intersection is not at grid points — say \((\tfrac{13}{7},\tfrac{9}{7})\) — a hand-drawn graph only gives an estimate. Graphing technology can zoom in, and the algebraic methods in 1.3 and 1.4 give exact answers. Graphs remain the best way to <em>see</em> a situation: which option is cheaper on each side of the break-even point.</p>
  ${watchOut([
    "Verify in both equations — a point on one line only is not a solution.",
    "Use a sharp pencil and a ruler; a small error moves the intersection.",
    "Choose a scale that shows the intersection (it may be far from the origin).",
    "An answer read from a graph may be approximate; say so.",
  ])}`),

  examples([
    ["Checking a point", String.raw`Is \((3,-2)\) a solution of \(2x+y=4\) and \(x-3y=9\)?`,
      [String.raw`First: \(2(3)+(-2)=4\) ✓.`, String.raw`Second: \(3-3(-2)=3+6=9\) ✓.`],
      String.raw`yes, \((3,-2)\) satisfies both`],
    ["A point that fails", String.raw`Is \((1,5)\) a solution of \(y=3x+2\) and \(2x+y=8\)?`,
      [String.raw`First: \(3(1)+2=5\) ✓.`, String.raw`Second: \(2(1)+5=7\ne8\) ✗.`],
      String.raw`no — it lies on the first line only`],
    ["Solving by graphing", String.raw`Solve by graphing: \(y=\tfrac12x+1\) and \(3x+2y=18\).`,
      [String.raw`First line: y-intercept \(1\), slope \(\frac12\).`, String.raw`Second line: intercepts \((6,0)\) and \((0,9)\).`, String.raw`They cross at \((4,3)\). Verify: \(\tfrac12(4)+1=3\) ✓; \(3(4)+2(3)=18\) ✓.`],
      String.raw`\((4,3)\)`,
      plane({ view: { xmin: -2, xmax: 8, ymin: -2, ymax: 10 }, lines: [{ m: 0.5, b: 1, color: "blue" }, { m: -1.5, b: 9, color: "red" }], points: [{ x: 4, y: 3, label: "(4, 3)", color: "green" }], step: { x: 1, y: 1 } })],
    ["Comparing two plans", String.raw`Bike rental A charges \(\$10\) plus \(\$4\) per hour; rental B charges \(\$4\) plus \(\$6\) per hour. Graph both and decide which is cheaper.`,
      [String.raw`A: \(C=4h+10\); B: \(C=6h+4\).`, String.raw`They meet where \(4h+10=6h+4\): \(h=3\), \(C=22\).`, "For less than 3 h, B is cheaper (its line is lower); for more than 3 h, A is cheaper."],
      "B under 3 h, A over 3 h; equal (22 dollars) at 3 h",
      plane({ view: { xmin: 0, xmax: 6, ymin: 0, ymax: 40 }, lines: [{ m: 4, b: 10, color: "blue", label: "A", lx: 5 }, { m: 6, b: 4, color: "red", label: "B", lx: 4.6 }], points: [{ x: 3, y: 22, label: "(3, 22)", color: "green" }], xlabel: "hours", ylabel: "cost", step: { x: 1, y: 5 } })],
    ["An estimate from a graph", String.raw`The lines \(y=2x-1\) and \(x+3y=5\) meet between grid points. Estimate the intersection, then use \(x=\frac{8}{7}\) to find it exactly.`,
      [String.raw`From the graph the point is near \((1.1,\ 1.3)\).`, String.raw`\(y=2\left(\frac87\right)-1=\frac{16}{7}-\frac77=\frac97\approx1.29\).`, String.raw`Check: \(\frac87+3\left(\frac97\right)=\frac{35}{7}=5\) ✓`],
      String.raw`exactly \(\left(\tfrac87,\tfrac97\right)\approx(1.14,1.29)\)`],
  ]),

  practice([
    q("check", String.raw`Is \((-1,4)\) a solution of \(3x+y=1\) and \(x+2y=7\)?`, choice(["yes", "no"], 0),
      "Substitute into both.", [String.raw`\(-3+4=1\) ✓; \(-1+8=7\) ✓.`], "yes"),
    q("check", String.raw`Is \((2,2)\) a solution of \(y=x\) and \(x+y=5\)?`, choice(["no", "yes"], 0),
      "Substitute into both.", [String.raw`\(2=2\) ✓ but \(2+2=4\ne5\).`], "no"),
    q("read the graph", String.raw`\(y=x+3\) and \(y=-2x+6\) intersect at \((a,b)\). What is \(a\)?`, num(1),
      "Set the y-values equal or read the graph.", [String.raw`\(x+3=-2x+6\Rightarrow3x=3\Rightarrow x=1\).`], String.raw`\(a=1\)`),
    q("read the graph", String.raw`For the same system, what is \(b\)?`, num(4),
      "Substitute x = 1.", [String.raw`\(1+3=4\).`], String.raw`\(b=4\)`),
    q("compare", String.raw`Plan A: \(C=20+0.5m\). Plan B: \(C=35+0.2m\). For how many minutes \(m\) are they equal?`, num(50),
      "Set them equal.", [String.raw`\(0.3m=15\Rightarrow m=50\).`], String.raw`\(50\) min`),
  ]),

  wrapUp({
    qas: [
      ["Can a linear system have exactly two solutions?", "No. Two different straight lines meet at most once. They meet once, never (parallel) or everywhere (the same line) — see 1.6."],
      ["Why verify a graphical solution?", "Graph readings can be slightly off. Substituting into both equations confirms the exact point, or shows it is only an estimate."],
      ["What if the intersection is off my grid?", "Change the scale, or use an algebraic method (substitution or elimination) that does not depend on drawing."],
      ["How does the graph help in word problems?", "It shows which option is better on each side of the intersection, not just where they are equal."],
      ["Is graphing ever the best method?", "Yes, for a quick picture, an estimate, or when the equations come from data. For exact answers, algebra is better."],
    ],
    summary: [
      "The solution of a system satisfies both equations: the point of intersection.",
      "Check a point by substituting it into each equation.",
      "Graph both lines, read the intersection, verify.",
      "Graphs can be approximate; algebra (1.3, 1.4) gives exact answers.",
    ],
    next: "1.3 solves systems exactly by substitution.",
  }),
];
