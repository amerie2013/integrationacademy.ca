// MTH1W 4.4 — Comparing Lines (self-study format): rates, initial values, point of intersection
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice } from "./lib.mjs";
import { plane } from "./figs4.mjs";

export const TITLE = "4.4 Comparing Lines";

export const blocks = () => [
  intro({
    icon: "⚖️",
    title: "Comparing Lines",
    overview: String.raw`Two phone plans, two gyms, two runners: real decisions often compare two linear relations. In this lesson you will compare their <strong>rates of change</strong> and <strong>initial values</strong>, find the <strong>point of intersection</strong> — where they are equal — using a table, a graph and algebra, and use it to decide which option is better for which values.`,
    goals: [
      "compare two linear relations by their slopes (rates) and y-intercepts (initial values);",
      "find the point of intersection from a table of values;",
      "estimate the point of intersection from a graph;",
      "find the point of intersection exactly with algebra by setting the two expressions equal;",
      "interpret the point of intersection and decide which option is better on each side of it.",
    ],
    curriculum: "C4.1 (compare linear relations), C4.4 (solve problems; point of intersection)",
    book: "Nelson Principles of Mathematics 9, §4.5 Solving Problems Using Linear Relations (linear systems by graphing)",
    prior: [
      [String.raw`Solve \(3x+5=x+13\).`, String.raw`\(2x=8\), \(x=4\).`],
      [String.raw`Which line is steeper, slope \(2\) or slope \(-5\)?`, String.raw`Slope \(-5\) (larger size).`],
      [String.raw`Evaluate \(30+0.1m\) at \(m=150\).`, String.raw`\(45\).`],
    ],
    words: [
      ["Point of intersection", "the point where two lines meet: same x, same y", "(150, 45)"],
      ["Linear system", "two linear relations considered together", ""],
      ["Break-even point", "the value where two options cost the same", ""],
      ["Parallel lines", "same slope, different intercept: they never meet", "no solution"],
    ],
  }),

  section("📌 Comparing rates and starting values", String.raw`
  <p>Plan A costs \(30\) dollars plus \(0.10\) dollars per minute; plan B costs \(15\) dollars plus \(0.20\) dollars per minute.</p>
  ${table(["", "Plan A: \\(C=0.10m+30\\)", "Plan B: \\(C=0.20m+15\\)"], [["Initial value", "30 (higher)", "15 (lower)"], ["Rate of change", "0.10 per min (slower)", "0.20 per min (faster)"]])}
  <p>B starts cheaper but grows faster, so the lines must cross. Before the crossing B is cheaper; after it, A is cheaper.</p>
  ${plane({ view: { xmin: 0, xmax: 300, ymin: 0, ymax: 80 }, lines: [{ m: 0.1, b: 30, color: "blue", label: "A" , lx: 260 }, { m: 0.2, b: 15, color: "red", label: "B", lx: 250 }], points: [{ x: 150, y: 45, label: "(150, 45)", color: "green" }], xlabel: "minutes m", ylabel: "cost C", step: { x: 50, y: 10 } }, "The plans cost the same at 150 minutes (45 dollars).")}
  ${keyIdea(String.raw`At the point of intersection both relations have the <strong>same x and the same y</strong>. To find it with algebra, set the two expressions equal and solve.`)}`),

  section("📌 Three ways to find the intersection", String.raw`
  ${table(["Method", "How", "Plans A and B"], [
    ["Table", "compute both for the same x-values; look for equal y", "at 150 min both are 45"],
    ["Graph", "read where the lines cross (an estimate)", "about (150, 45)"],
    ["Algebra", "set the expressions equal and solve", "\\(0.10m+30=0.20m+15\\Rightarrow15=0.10m\\Rightarrow m=150\\)"],
  ])}
  ${watchOut([
    "After finding x, substitute into either equation to get y — and check it in the other.",
    "Parallel lines (same slope, different intercepts) never meet: no point of intersection.",
    "Answer the question in context: “the plans cost the same, 45 dollars, at 150 minutes”.",
  ])}
  <p>Use the explorer: change the slopes and intercepts and watch the intersection move. Make the slopes equal to see parallel lines.</p>`),

  widget("linePair", { init: [1, 2, -2, 8] }),

  examples([
    ["Comparing two relations", String.raw`Runner A starts \(100\) m ahead and runs \(4\) m/s; runner B starts at the line and runs \(6\) m/s. Write both equations and compare them.`,
      [String.raw`A: \(d=4t+100\); B: \(d=6t\).`, "A has the larger initial value; B has the larger rate (steeper line), so B eventually catches A."],
      String.raw`A: \(d=4t+100\); B: \(d=6t\)`],
    ["Intersection from a table", String.raw`When does B catch A? Use a table.
    ${table(["t (s)", "0", "20", "40", "50", "60"], [["A: 4t + 100", "100", "180", "260", "300", "340"], ["B: 6t", "0", "120", "240", "300", "360"]])}`,
      [String.raw`At \(t=50\) both are at \(300\) m.`],
      String.raw`after \(50\) s, \(300\) m from B's start`],
    ["Intersection with algebra", String.raw`Find the point of intersection of \(y=3x+1\) and \(y=-x+9\).`,
      [String.raw`\(3x+1=-x+9\Rightarrow4x=8\Rightarrow x=2\).`, String.raw`\(y=3(2)+1=7\). Check: \(-2+9=7\) ✓`],
      String.raw`\((2, 7)\)`],
    ["Reading a graph", String.raw`Estimate the point of intersection, then confirm with algebra.`,
      [String.raw`The lines appear to cross at about \((2,4)\).`, String.raw`\(x+2=-0.5x+5\Rightarrow1.5x=3\Rightarrow x=2\); \(y=4\).`],
      String.raw`\((2,4)\)`,
      plane({ view: { xmin: -4, xmax: 8, ymin: -2, ymax: 8 }, lines: [{ m: 1, b: 2, color: "blue", label: "y = x + 2", lx: 4 }, { m: -0.5, b: 5, color: "red", label: "y = −0.5x + 5", lx: 5 }], points: [{ x: 2, y: 4, color: "green" }] })],
    ["A decision", String.raw`Gym A charges \(50\) dollars to join plus \(20\) dollars per month. Gym B charges \(110\) dollars to join plus \(10\) dollars per month. Which gym is cheaper, and when?`,
      [String.raw`Equal when \(50+20m=110+10m\Rightarrow10m=60\Rightarrow m=6\) (both \(170\) dollars).`, String.raw`Before \(6\) months A is cheaper (e.g. \(3\) months: A \(110\), B \(140\)).`, String.raw`After \(6\) months B is cheaper (e.g. \(12\): A \(290\), B \(230\)).`],
      "A for fewer than 6 months, B for more than 6; equal at 6 months"],
  ]),

  practice([
    q("steepness", String.raw`Which line is steepest?`, choice([String.raw`\(y=-4x+1\)`, String.raw`\(y=3x-10\)`, String.raw`\(y=\tfrac12x+20\)`, String.raw`\(y=2x\)`], 0),
      "Compare the sizes of the slopes, ignoring signs.", [String.raw`\(|-4|=4\) is the largest.`], String.raw`\(y=-4x+1\)`),
    q("intersection x", String.raw`Find the x-coordinate of the intersection of \(y=3x-4\) and \(y=x+6\).`, num(5),
      "Set the right sides equal.", [String.raw`\(3x-4=x+6\Rightarrow2x=10\Rightarrow x=5\).`], String.raw`\(x=5\)`),
    q("intersection y", String.raw`For the same two lines, what is the y-coordinate of the intersection?`, num(11),
      "Substitute x = 5 into either equation.", [String.raw`\(5+6=11\); check \(3(5)-4=11\) ✓`], String.raw`\(y=11\)`),
    q("parallel", String.raw`How many points do \(y=2x+7\) and \(y=2x-4\) have in common?`, choice(["none", "one", "two", "infinitely many"], 0),
      "Compare the slopes.", ["Same slope, different intercepts: parallel lines never meet."], "none"),
    q("break-even", String.raw`Company A charges \(C=40+25h\); company B charges \(C=70+15h\). For how many hours \(h\) do they cost the same?`, num(3),
      "Set the costs equal.", [String.raw`\(40+25h=70+15h\Rightarrow10h=30\Rightarrow h=3\).`], String.raw`\(3\) hours`),
  ]),

  wrapUp({
    qas: [
      ["What does the point of intersection mean in a story?", "The value of the independent variable where both options give the same result — the break-even point. On one side one option is better; on the other side, the other is."],
      ["Why can graphs only estimate the intersection?", "Reading a crossing point off a grid is limited by the scale. Algebra gives the exact value; the graph shows the big picture and checks the algebra."],
      ["What if the two lines are the same?", "Every point is shared: infinitely many solutions. This happens when the slopes and the intercepts are both equal."],
      ["How do I know which option is cheaper for large values?", "The one with the smaller rate of change (less steep) eventually wins, no matter where it starts."],
      ["Do I always need a table?", "No. A table helps when the intersection is at a convenient value; algebra works every time."],
    ],
    summary: [
      "Compare lines by slope (rate) and y-intercept (initial value).",
      "Point of intersection: same x and same y; find it by table, graph or algebra.",
      "Algebra: set the expressions equal, solve for x, substitute for y, check.",
      "Parallel lines (equal slopes) never meet.",
    ],
    next: "4.5 graphs special lines — horizontal, vertical and through the origin — and linear inequalities.",
  }),
];
