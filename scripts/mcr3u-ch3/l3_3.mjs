// MCR3U 3.3 — Finite Differences and Quadratic Models: classifying tables, second differences = 2ah², equations from tables and three points
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, plane } from "./lib.mjs";

export const TITLE = "3.3 Finite Differences and Quadratic Models";
export const ID = "5c3e0001-0001-4001-8001-000000000313";
const S = String.raw;
const pts = (xs, f, color = "violet") => xs.map((x) => ({ x, y: f(x), color }));

export const blocks = () => [
  intro({
    icon: "📊",
    title: "Finite Differences and Quadratic Models",
    overview: S`Data rarely arrives as an equation. It comes as a table: heights at each second, tiles in each pattern, stopping distances at each speed. In this lesson you will use finite differences to decide whether a table is linear, quadratic or neither, find \(a\) from the second differences, and build the equation of a quadratic from a table or from three points.`,
    goals: [
      "calculate first and second differences from a table of values;",
      "decide whether a relation is linear, quadratic or neither (for example exponential);",
      "explain why the second differences of a quadratic are constant and equal \\(2ah^2\\) for an x-step of \\(h\\);",
      "determine the equation of a quadratic from a table of values;",
      "determine the equation of a quadratic through three given points and use it to make predictions.",
    ],
    curriculum: "A1.2 (represent quadratic functions using function notation, from equations, tables and graphs), A2.3 (solve problems involving quadratic functions arising from real-world applications)",
    prior: [
      [S`Find the differences between consecutive terms of \(5, 9, 13, 17\).`, S`Each difference is 4.`],
      [S`Evaluate \(2x^2-x+3\) at \(x=-2\).`, S`\(8+2+3=13\).`],
      [S`Solve \(a+b=4\) and \(a-b=10\).`, S`Adding: \(2a=14\), so \(a=7\) and \(b=-3\).`],
    ],
    words: [
      ["First differences", "the change in y between consecutive rows", "\\(3, 7, 11\\)"],
      ["Second differences", "the change in the first differences", "\\(4, 4\\)"],
      ["x-step", "the constant gap \\(h\\) between the x-values in a table", "\\(h=2\\)"],
      ["Constant ratio", "each y divided by the one before gives the same number (exponential)", "ratio 3"],
      ["Model", "an equation that matches the data and can be used to predict", "\\(d=0.006v^2+0.2v\\)"],
    ],
  }),

  section("📌 Differences tell you the type", S`
  <p>Write the x-values in equal steps. Subtract each y-value from the next to get the <em>first differences</em>, then subtract those to get the <em>second differences</em>.</p>
  ${table(["x", "0", "1", "2", "3", "4", "test"], [
    ["linear: y = 3x − 1", "−1", "2", "5", "8", "11", "1st differences all 3"],
    ["quadratic: y = x² − 2x + 2", "2", "1", "2", "5", "10", "1st −1, 1, 3, 5; 2nd all 2"],
    ["exponential: y = 2ˣ", "1", "2", "4", "8", "16", "neither row constant; ratio 2"],
  ])}
  ${plane({ view: { xmin: -0.5, xmax: 4.5, ymin: -2, ymax: 17 }, curves: [{ f: (x) => 3 * x - 1, color: "green" }, { f: (x) => x * x - 2 * x + 2, color: "violet" }, { f: (x) => 2 ** x, color: "amber" }], points: [...pts([0, 1, 2, 3, 4], (x) => 3 * x - 1, "green"), ...pts([0, 1, 2, 3, 4], (x) => x * x - 2 * x + 2, "violet"), ...pts([0, 1, 2, 3, 4], (x) => 2 ** x, "amber")], step: { x: 1, y: 2 } }, "Green: linear. Violet: quadratic. Amber: exponential")}
  ${keyIdea(S`Constant first differences → linear. Constant second differences → quadratic. Neither constant but a constant ratio → exponential. A table only counts if the x-values go up in equal steps.`)}`),

  section("📌 Explore", S`<p>Pick a type and move the sliders. Watch which row of the table turns bold. Then change the x-step to 2 or 0.5: the second differences of a quadratic stay constant, but they are no longer just \(2a\).</p>`),

  widget("diffLab", { init: ["quad", 2, -3, 1] }),

  section("📌 Why the second difference is \\(2ah^2\\)", S`
  <p>For \(f(x)=ax^2+bx+c\) and an x-step of \(h\), the first difference at \(x\) is</p>
  <p style="text-align:center">\(f(x+h)-f(x)=a(2xh+h^2)+bh=2ah\,x+(ah^2+bh)\).</p>
  <p>This is a <em>linear</em> expression in \(x\) with slope \(2ah\). Each time \(x\) goes up by \(h\), it goes up by \(2ah\cdot h=2ah^2\). So the second differences are all \(2ah^2\), and with \(h=1\) they are \(2a\).</p>
  ${plane({ view: { xmin: -0.5, xmax: 8.5, ymin: 0, ymax: 30 }, curves: [{ f: (x) => 0.5 * x * x - x + 3, color: "violet" }], points: pts([0, 2, 4, 6, 8], (x) => 0.5 * x * x - x + 3), segs: [{ pts: [[0, 3], [2, 3], [2, 3]], color: "blue" }, { pts: [[2, 3], [4, 3], [4, 7]], color: "blue" }, { pts: [[4, 7], [6, 7], [6, 15]], color: "blue" }, { pts: [[6, 15], [8, 15], [8, 27]], color: "blue" }], step: { x: 1, y: 3 } }, "With x-step 2 the rises are 0, 4, 8, 12: they grow by 4 = 2(0.5)(2²) each time")}
  <p><strong>From a table to an equation.</strong> (1) \(a=\dfrac{\text{second difference}}{2h^2}\). (2) \(c\) is the y-value at \(x=0\); if \(x=0\) is not in the table, extend the table backwards using the differences. (3) Substitute one more point to find \(b\).</p>
  ${watchOut([
    "Check that the x-values are equally spaced before you look at differences.",
    "Subtract in the same order every time: next minus previous.",
    "With an x-step of h, a = (second difference)/(2h²), not (second difference)/2.",
    "Second differences that are almost constant (real data) suggest a quadratic model, not an exact one.",
  ])}`),

  examples([
    ["Linear, quadratic or neither?", S`Classify each table (x = 0, 1, 2, 3, 4). A: \(5, 8, 11, 14, 17\). B: \(2, 6, 18, 54, 162\). C: \(4, 3, 4, 7, 12\).`,
      [S`A: first differences \(3,3,3,3\): linear.`, S`B: first differences \(4,12,36,108\), second \(8,24,72\): neither constant, but each y is 3 times the previous: exponential.`, S`C: first differences \(-1,1,3,5\), second \(2,2,2\): quadratic.`],
      "A linear, B exponential, C quadratic",
      plane({ view: { xmin: -0.5, xmax: 4.5, ymin: 0, ymax: 20 }, curves: [{ f: (x) => (x - 1) ** 2 + 3, color: "violet" }], points: [...pts([0, 1, 2, 3, 4], (x) => (x - 1) ** 2 + 3), ...pts([0, 1, 2, 3, 4], (x) => 3 * x + 5, "green")], step: { x: 1, y: 2 } }, "Table C (violet) curves; table A (green) is a straight line")],
    ["Equation from a table", S`Find the equation of the quadratic: x = 0, 1, 2, 3, 4 and y = \(-4, -3, 4, 17, 36\).`,
      [S`First differences \(1, 7, 13, 19\); second differences \(6\): \(2a=6\), so \(a=3\).`, S`\(c=f(0)=-4\).`, S`\(f(1)=3+b-4=-3\Rightarrow b=-2\). Check \(f(4)=48-8-4=36\) ✓.`],
      S`\(f(x)=3x^2-2x-4\)`,
      plane({ view: { xmin: -1, xmax: 5, ymin: -6, ymax: 40 }, curves: [{ f: (x) => 3 * x * x - 2 * x - 4, color: "violet" }], points: pts([0, 1, 2, 3, 4], (x) => 3 * x * x - 2 * x - 4, "blue"), step: { x: 1, y: 4 } })],
    ["No x = 0 in the table", S`Find the quadratic: x = 1, 2, 3, 4, 5 and y = \(7, 9, 7, 1, -9\).`,
      [S`First differences \(2,-2,-6,-10\); second differences \(-4\): \(a=-2\).`, S`Extend backwards: the first difference before 2 is \(2+4=6\), so \(f(0)=7-6=1=c\).`, S`\(f(1)=-2+b+1=7\Rightarrow b=8\). Check \(f(5)=-50+40+1=-9\) ✓.`],
      S`\(f(x)=-2x^2+8x+1\)`,
      plane({ view: { xmin: -1, xmax: 6, ymin: -11, ymax: 11 }, curves: [{ f: (x) => -2 * x * x + 8 * x + 1, color: "violet" }], points: [...pts([1, 2, 3, 4, 5], (x) => -2 * x * x + 8 * x + 1, "blue"), { x: 0, y: 1, label: "(0, 1)", color: "green" }], step: { x: 1, y: 2 } })],
    ["An x-step of 2", S`Find the quadratic: x = 0, 2, 4, 6, 8 and y = \(3, 3, 7, 15, 27\).`,
      [S`First differences \(0,4,8,12\); second differences \(4\).`, S`\(2ah^2=4\) with \(h=2\): \(8a=4\), so \(a=0.5\).`, S`\(c=3\); \(f(2)=0.5(4)+2b+3=3\Rightarrow b=-1\).`],
      S`\(f(x)=0.5x^2-x+3\)`],
    ["Three points", S`Find the quadratic through \((-1,10)\), \((1,0)\) and \((3,6)\).`,
      [S`Substitute into \(y=ax^2+bx+c\): \(a-b+c=10\), \(a+b+c=0\), \(9a+3b+c=6\).`, S`Subtract the first two: \(-2b=10\), so \(b=-5\) and \(a+c=5\).`, S`Third: \(9a-15+c=6\Rightarrow 9a+c=21\). Subtract \(a+c=5\): \(8a=16\), \(a=2\), \(c=3\).`],
      S`\(y=2x^2-5x+3\)`,
      plane({ view: { xmin: -2, xmax: 4, ymin: -2, ymax: 12 }, curves: [{ f: (x) => 2 * x * x - 5 * x + 3, color: "violet" }], points: [{ x: -1, y: 10, label: "(−1, 10)", color: "blue" }, { x: 1, y: 0, label: "(1, 0)", color: "blue" }, { x: 3, y: 6, label: "(3, 6)", color: "blue" }], step: { x: 1, y: 2 } })],
  ]),

  practice([
    q("second differences", S`Find the second difference of the table x = 1, 2, 3, 4, 5 with y = \(2, 8, 18, 32, 50\).`, num(4),
      "First differences, then their differences.", [S`First: \(6, 10, 14, 18\).`], S`\(4\)`),
    q("classify", S`x = 0, 1, 2, 3 and y = \(3, 6, 12, 24\). The relation is:`, choice(["exponential", "linear", "quadratic", "none of these"], 0),
      "Look at the ratios.", [S`Each y is double the previous one.`], "exponential"),
    q("find a", S`A quadratic table with x-step 1 has second differences of \(-10\). Find \(a\).`, num(-5),
      "Second difference = 2a.", [S`\(2a=-10\).`], S`\(-5\)`),
    q("find a", S`x = 0, 1, 2, 3 and y = \(4, 6, 12, 22\). Find \(a\).`, num(2),
      "Find the second differences.", [S`First \(2, 6, 10\); second \(4=2a\).`], S`\(2\)`),
    q("find b", S`x = 0, 1, 2, 3 and y = \(1, 0, 3, 10\) is quadratic. Find \(b\).`, num(-3),
      "Get a and c first, then use the point (1, 0).", [S`Second differences 4, so \(a=2\); \(c=1\); \(2+b+1=0\).`], S`\(-3\)`),
  ]),

  ...hard([
    ["Stopping distance", S`A car's stopping distance \(d\) (m) at speed \(v\) (km/h) is: \(v=20, 40, 60, 80\) gives \(d=6.4, 17.6, 33.6, 54.4\). Find a quadratic model and predict the stopping distance at 100 km/h.`,
      [S`First differences \(11.2, 16, 20.8\); second differences \(4.8\). With \(h=20\): \(2a(400)=4.8\), so \(a=0.006\).`, S`Extend backwards: the difference before 11.2 is \(11.2-4.8=6.4\), so \(d(0)=6.4-6.4=0=c\).`, S`\(d(20)=0.006(400)+20b=6.4\Rightarrow 20b=4\Rightarrow b=0.2\). So \(d=0.006v^2+0.2v\).`, S`\(d(100)=60+20=80\) m.`],
      S`\(d=0.006v^2+0.2v\); about 80 m at 100 km/h`,
      plane({ view: { xmin: -5, xmax: 110, ymin: -5, ymax: 90 }, curves: [{ f: (v) => 0.006 * v * v + 0.2 * v, a: 0, color: "violet" }], points: [...pts([20, 40, 60, 80], (v) => 0.006 * v * v + 0.2 * v, "blue"), { x: 100, y: 80, label: "(100, 80)", color: "red" }], xlabel: "v (km/h)", ylabel: "d (m)", step: { x: 10, y: 10 } })],
    ["A tile pattern", S`Pattern \(n\) uses \(T\) tiles: \(n=1,2,3,4,5\) gives \(T=3, 8, 15, 24, 35\). Find \(T(n)\), then find which pattern uses 143 tiles.`,
      [S`First differences \(5,7,9,11\); second \(2\): \(a=1\).`, S`Back one step: \(T(0)=3-3=0=c\); \(T(1)=1+b=3\Rightarrow b=2\). So \(T=n^2+2n\).`, S`\(n^2+2n=143\Rightarrow n^2+2n-143=0\Rightarrow(n+13)(n-11)=0\). Only \(n=11\) makes sense.`],
      S`\(T(n)=n^2+2n\); pattern 11`],
  ], [
    q("hard", S`A quadratic table (x = 0, 1, 2, 3) has y = \(2, 5, 12, 23\). What is y at x = 4?`, num(38),
      "Continue the differences.", [S`First \(3,7,11\), next \(15\); \(23+15\).`], S`\(38\)`),
    q("hard", S`Find the second difference of \(y=-1.5x^2+4\) for a table with x-step 2.`, num(-12),
      "Second difference = 2ah².", [S`\(2(-1.5)(2)^2\).`], S`\(-12\)`),
    q("hard", S`A quadratic passes through \((0,-2)\), \((1,1)\) and \((2,8)\). Find \(a\).`, num(2),
      "c = −2; write two equations for a and b.", [S`\(a+b=3\), \(4a+2b=10\Rightarrow 2a=4\).`], S`\(2\)`),
  ]),

  wrapUp({
    qas: [
      ["Do I need x = 0 in the table?", "No. Extend the table backwards with the differences, or use three points and solve for a, b and c."],
      ["What if the x-values are not equally spaced?", "Differences do not work. Substitute three points into y = ax² + bx + c instead."],
      ["Why do exponential tables never settle?", "Each row of differences is another exponential with the same ratio, so no row is ever constant."],
      ["What about cubic tables?", "Their third differences are constant. In general, degree n gives constant nth differences."],
      ["Real data is never exact. Now what?", "If the second differences are roughly equal, a quadratic model is reasonable; it gives predictions, not exact values."],
    ],
    summary: [
      "Constant 1st differences: linear; constant 2nd: quadratic; constant ratio: exponential.",
      "Second difference = 2ah² (just 2a when the x-step is 1).",
      "Table → equation: a from the 2nd difference, c at x = 0, b from one more point.",
      "Three points → three equations in a, b, c.",
    ],
    next: "3.4 finds maximum and minimum values algebraically by completing the square and uses them in optimisation problems.",
  }),
];
