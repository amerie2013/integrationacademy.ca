// MCF3M 1.4 — Comparing Linear and Quadratic Relations: first and second differences, rate of change,
// recognising the relation from tables, graphs and equations, second difference = 2a.
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, plane, tv } from "../lib.mjs";
const S = String.raw;

export const TITLE = "1.4 Comparing Linear and Quadratic Relations";

/** a difference table as HTML: x row, y row, first and second differences */
const dt = (xs, f) => {
  const ys = xs.map(f), d1 = ys.slice(1).map((y, i) => y - ys[i]), d2 = d1.slice(1).map((d, i) => d - d1[i]);
  const c = (v) => `<td style="padding:3px 9px;border:1px solid #cbd5e1;text-align:center;">${String(Math.round(v * 1000) / 1000).replace("-", "−")}</td>`;
  const blank = `<td style="border:1px solid #e2e8f0;"></td>`;
  const th = (t) => `<th style="padding:3px 9px;border:1px solid #cbd5e1;background:#f1f5f9;">${t}</th>`;
  return `<table style="margin:8px auto;border-collapse:collapse;"><tr>${th("x")}${xs.map(c).join("")}</tr><tr>${th("y")}${ys.map(c).join("")}</tr><tr>${th("1st diff")}${blank}${d1.map(c).join("")}</tr><tr>${th("2nd diff")}${blank}${blank}${d2.map(c).join("")}</tr></table>`;
};

export const blocks = () => [
  intro({
    icon: "📊",
    title: "Comparing Linear and Quadratic Relations",
    overview: S`A table of values hides the shape of a relation in its <b>differences</b>. If \(y\) changes by the same amount every time \(x\) goes up by \(1\), the relation is linear and its graph is a line. If those changes themselves change by a constant amount, the relation is quadratic and its graph is a parabola. This lesson uses first and second differences, graphs and equations to tell the two apart, and connects the second difference to the coefficient \(a\).`,
    goals: [
      "compute first and second differences from a table with equally spaced \\(x\\)-values;",
      "classify a relation as linear, quadratic or neither from its differences;",
      "explain the rate of change of a linear relation and how it changes for a quadratic;",
      "recognise linear and quadratic relations from their graphs and equations;",
      "use the fact that the second difference equals \\(2a\\) (for steps of 1) to find \\(a\\).",
    ],
    curriculum: "A1.1 (pose and solve problems involving quadratic relations represented by tables of values and graphs), A3.1 (collect data that can be modelled as a quadratic function), B1.6 (distinguish linear and quadratic relations using finite differences — preparing for exponential relations)",
    prior: [
      [S`What is the slope of \(y=3x-4\)?`, S`\(3\): \(y\) goes up \(3\) every time \(x\) goes up \(1\).`],
      [S`Complete: \(1,\,4,\,9,\,16,\,\square\)`, S`\(25\) (the squares).`],
      [S`Evaluate \(2x^2-x\) at \(x=-1\).`, S`\(2(1)+1=3\).`],
    ],
    words: [
      ["First differences", "changes in y between consecutive table rows", "\\(4-1=3\\)"],
      ["Second differences", "changes in the first differences", "\\(5-3=2\\)"],
      ["Rate of change", "change in y per unit change in x", "slope of a line"],
      ["Linear relation", "constant first differences; graph is a line", "\\(y=mx+b\\)"],
      ["Quadratic relation", "constant (non-zero) second differences; graph is a parabola", "\\(y=ax^2+bx+c\\)"],
    ],
  }),

  section("📌 Differences reveal the shape", S`
  <p>Make sure the \(x\)-values go up by the same step (usually \(1\)). Subtract each \(y\) from the next one to get the first differences; subtract those again for the second differences.</p>
  <div style="display:flex;flex-wrap:wrap;gap:18px;justify-content:center;">
  <div><p style="text-align:center;margin:0;"><b>Linear:</b> \(y=2x+1\)</p>${dt([0, 1, 2, 3, 4], (x) => 2 * x + 1)}</div>
  <div><p style="text-align:center;margin:0;"><b>Quadratic:</b> \(y=x^2+1\)</p>${dt([0, 1, 2, 3, 4], (x) => x * x + 1)}</div>
  </div>
  ${keyIdea(S`Constant first differences \(\Rightarrow\) <b>linear</b> (the first difference is the slope when the step is 1). Constant non-zero second differences \(\Rightarrow\) <b>quadratic</b>, and for \(x\)-steps of \(1\) the second difference equals \(2a\), where \(a\) is the coefficient of \(x^2\).`)}
  ${plane({ view: { xmin: -1, xmax: 5, ymin: -1, ymax: 18 }, lines: [{ m: 2, b: 1, color: "blue" }], curves: [{ f: (x) => x * x + 1, color: "violet" }], points: [{ x: 4, y: 9, label: "(4, 9) line", color: "blue" }, { x: 4, y: 17, label: "(4, 17) parabola", color: "violet" }], step: { x: 1, y: 2 } }, "The line rises by the same amount each step; the parabola rises faster and faster.")}`),

  widget("diffLab", { init: ["quad", 1, -2, 3] }),

  section("⚠️ Before you trust the differences", S`
  ${watchOut([
    "The x-values must be equally spaced; sort the table first if it is out of order.",
    "If the step is not 1, the second difference is 2a × (step)², not 2a.",
    "A relation with constant second difference 0 is linear, not quadratic.",
    "Real data are never perfect: differences that are almost constant suggest a model, not an exact rule.",
    "Neither row constant? The relation is neither linear nor quadratic (it may be exponential — see chapter 7).",
  ])}`),

  examples([
    ["Classify from a table", S`Decide whether each relation is linear, quadratic or neither.` + `<div style="display:flex;flex-wrap:wrap;gap:12px;justify-content:center;">${tv([[0, 5], [1, 2], [2, -1], [3, -4], [4, -7]], "x", "A: y")}${tv([[0, 3], [1, 4], [2, 7], [3, 12], [4, 19]], "x", "B: y")}${tv([[0, 1], [1, 2], [2, 4], [3, 8], [4, 16]], "x", "C: y")}</div>`,
      [S`<b>Method.</b> The \(x\)-values go up by \(1\) in every table, so differences can be used directly.`,
        S`<b>A.</b> First differences: \(2-5=-3\), \(-1-2=-3\), \(-4-(-1)=-3\), \(-7-(-4)=-3\). All equal \(-3\), so A is <b>linear</b> with slope \(-3\): \(y=-3x+5\).`,
        S`<b>B.</b> First differences: \(1,\,3,\,5,\,7\) — not constant. Second differences: \(3-1=2\), \(5-3=2\), \(7-5=2\) — constant, so B is <b>quadratic</b>.`,
        S`<b>C.</b> First differences: \(1,\,2,\,4,\,8\). Second differences: \(1,\,2,\,4\). Neither row is constant, so C is <b>neither</b>. (Each \(y\) is double the previous one — an exponential pattern.)`,
        S`<b>Check with the graphs.</b> A plots on a straight line, B curves like a parabola, and C grows faster than both ✓`],
      S`A linear, B quadratic, C neither`,
      plane({ view: { xmin: -0.5, xmax: 4.5, ymin: -8, ymax: 20 }, curves: [{ f: (x) => -3 * x + 5, color: "blue" }, { f: (x) => x * x + 3, color: "violet" }, { f: (x) => 2 ** x, color: "green" }], points: [{ x: 4, y: -7, label: "A", color: "blue" }, { x: 4, y: 19, label: "B", color: "violet" }, { x: 4, y: 16, label: "C", color: "green" }], step: { x: 1, y: 4 } })],

    ["Find a from the second difference", S`A quadratic relation has the table below. Find the value of \(a\) in \(y=ax^2+bx+c\), then find \(c\).` + tv([[0, 4], [1, 1], [2, -4], [3, -11], [4, -20]]),
      [S`<b>Rule.</b> With \(x\)-steps of \(1\), the second difference equals \(2a\). The value at \(x=0\) is \(c\), since \(y(0)=a(0)+b(0)+c=c\).`,
        S`<b>First differences.</b> \(1-4=-3\), \(-4-1=-5\), \(-11-(-4)=-7\), \(-20-(-11)=-9\).`,
        S`<b>Second differences.</b> \(-5-(-3)=-2\), \(-7-(-5)=-2\), \(-9-(-7)=-2\). Constant, so the relation is quadratic.`,
        S`<b>Solve for \(a\).</b> \(2a=-2\Rightarrow a=-1\). The negative value matches a parabola that opens down.`,
        S`<b>Find \(c\) and \(b\).</b> \(c=4\). Using \(x=1\): \(-1+b+4=1\Rightarrow b=-2\). So \(y=-x^2-2x+4\).`,
        S`<b>Check.</b> \(x=3\): \(-9-6+4=-11\) ✓. \(x=4\): \(-16-8+4=-20\) ✓`],
      S`\(a=-1\), \(c=4\) (and \(b=-2\)): \(y=-x^2-2x+4\)`,
      plane({ view: { xmin: -4, xmax: 5, ymin: -22, ymax: 8 }, curves: [{ f: (x) => -x * x - 2 * x + 4, color: "violet" }], points: [{ x: 0, y: 4, label: "(0, 4)", color: "amber" }, { x: 2, y: -4, label: "(2, −4)", color: "amber" }, { x: 4, y: -20, label: "(4, −20)", color: "amber" }], step: { x: 1, y: 4 } })],

    ["Rate of change: line versus parabola", S`Compare how fast \(f(x)=4x\) and \(g(x)=x^2\) grow from \(x=0\) to \(x=6\). When is \(g\) growing faster than \(f\)?`,
      [S`<b>Rate of change.</b> Over one step, the rate of change is the first difference: the change in \(y\) when \(x\) goes up by \(1\).`,
        S`<b>Line.</b> \(f\) changes by \(4\) on every step: the rate is constant, \(4\) per unit.`,
        S`<b>Parabola.</b> \(g\): \(0,\,1,\,4,\,9,\,16,\,25,\,36\), so the first differences are \(1,\,3,\,5,\,7,\,9,\,11\). The rate keeps increasing by \(2\) (the second difference, \(2a=2\)).`,
        S`<b>Compare.</b> \(g\) grows faster once its first difference passes \(4\): the step from \(x=2\) to \(x=3\) gives \(5>4\). From then on the parabola's steps are always larger.`,
        S`<b>Check with the graph.</b> The curves meet where \(x^2=4x\), i.e. \(x(x-4)=0\), at \(x=0\) and \(x=4\). After \(x=4\) the parabola is above the line and pulling away ✓`],
      S`f grows at a constant 4 per unit; g's growth increases by 2 each step and exceeds 4 from x = 2 → 3 onward; g overtakes f at x = 4.`,
      plane({ view: { xmin: -0.5, xmax: 6.5, ymin: -2, ymax: 38 }, lines: [{ m: 4, b: 0, color: "blue" }], curves: [{ f: (x) => x * x, color: "violet" }], points: [{ x: 4, y: 16, label: "(4, 16)", color: "amber" }], step: { x: 1, y: 4 } })],

    ["Recognise from the equation", S`Classify each relation without a table: (a) \(y=7-2x\); (b) \(y=(x-3)(x+1)\); (c) \(y=3x(2-x)+3x^2\).`,
      [S`<b>Rule.</b> After expanding and collecting like terms, the highest power of \(x\) decides the type: power \(1\) is linear, power \(2\) (with non-zero coefficient) is quadratic.`,
        S`<b>(a)</b> \(y=-2x+7\): highest power \(1\), so <b>linear</b> (slope \(-2\)).`,
        S`<b>(b)</b> Expand: \((x-3)(x+1)=x^2+x-3x-3=x^2-2x-3\). Highest power \(2\), so <b>quadratic</b> with \(a=1\).`,
        S`<b>(c)</b> Expand: \(3x(2-x)+3x^2=6x-3x^2+3x^2=6x\). The \(x^2\) terms cancel, so it is <b>linear</b>.`,
        S`<b>Check (c) with differences.</b> \(x=0,1,2,3\) give \(0,\,6,\,12,\,18\): constant first difference \(6\) ✓`],
      S`(a) linear; (b) quadratic; (c) linear (the x² terms cancel)`,
      plane({ view: { xmin: -2, xmax: 5, ymin: -5, ymax: 12 }, lines: [{ m: -2, b: 7, color: "blue" }, { m: 6, b: 0, color: "green" }], curves: [{ f: (x) => x * x - 2 * x - 3, color: "violet" }], points: [{ x: 1, y: -4, label: "(1, −4)", color: "violet" }], step: { x: 1, y: 1 } })],

    ["Data from an experiment", S`A ball rolls down a ramp. The distance \(d\) (cm) after \(t\) seconds is recorded.` + tv([[0, 0], [1, 6], [2, 24], [3, 54], [4, 96]], "t (s)", "d (cm)") + S`Show the relation is quadratic, find an equation, and predict \(d\) at \(t=5\).`,
      [S`<b>Differences.</b> First: \(6,\,18,\,30,\,42\). Second: \(12,\,12,\,12\). Constant, so the relation is <b>quadratic</b>.`,
        S`<b>Find \(a\).</b> \(2a=12\Rightarrow a=6\).`,
        S`<b>Other coefficients.</b> At \(t=0\), \(d=0\), so \(c=0\). At \(t=1\): \(6+b=6\Rightarrow b=0\). So \(d=6t^2\).`,
        S`<b>Predict.</b> \(d(5)=6(25)=150\) cm. Or extend the table: next first difference \(42+12=54\), and \(96+54=150\) ✓`,
        S`<b>Check.</b> \(d(3)=6(9)=54\) ✓. The points lie on the half-parabola \(d=6t^2\), \(t\ge0\) ✓`],
      S`second differences constant (12): \(d=6t^2\); \(d(5)=150\) cm`,
      plane({ view: { xmin: -0.5, xmax: 5.5, ymin: -5, ymax: 160 }, curves: [{ f: (t) => 6 * t * t, a: 0, color: "violet" }], points: [{ x: 1, y: 6, label: "", color: "blue" }, { x: 2, y: 24, label: "(2, 24)", color: "blue" }, { x: 3, y: 54, label: "(3, 54)", color: "blue" }, { x: 4, y: 96, label: "(4, 96)", color: "blue" }, { x: 5, y: 150, label: "(5, 150)", color: "amber" }], step: { x: 1, y: 20 }, xlabel: "t (s)", ylabel: "d (cm)" })],
  ]),

  practice([
    q("classify", S`The \(y\)-values for \(x=0,1,2,3,4\) are \(2,\,5,\,10,\,17,\,26\). Classify the relation.`, choice(["linear", "quadratic", "neither"], 1), "Compute two rows of differences.", [S`First: \(3,5,7,9\). Second: \(2,2,2\).`], S`quadratic`),
    q("classify", S`The \(y\)-values for \(x=0,1,2,3\) are \(-4,\,-1,\,2,\,5\). Enter the first difference.`, num(3), "Subtract consecutive y-values.", [S`\(-1-(-4)=3\), constant.`], S`\(3\)`),
    q("a", S`A quadratic table (step 1) has constant second difference \(-6\). Enter \(a\).`, num(-3), "Second difference = 2a.", [S`\(2a=-6\Rightarrow a=-3\).`], S`\(-3\)`),
    q("extend", S`For \(x=0,1,2,3\) a quadratic has \(y=1,\,3,\,9,\,19\). Enter \(y\) at \(x=4\).`, num(33), "First differences 2, 6, 10 grow by 4.", [S`Next first difference \(14\); \(19+14=33\).`], S`\(33\)`),
    q("equation", S`Which relation is quadratic?`, choice(["y = 2x(x + 1) − 2x²", "y = (x + 2)² − x", "y = 5 − 3x", "y = 4x − (x − 1)"], 1), "Expand and look for x² that does not cancel.", [S`\((x+2)^2-x=x^2+3x+4\).`], S`\(y=(x+2)^2-x\)`),
  ]),

  ...hard([
    ["Steps of 2", S`A quadratic has values \(y=3,\,11,\,35,\,75\) at \(x=0,\,2,\,4,\,6\). Find \(a\) in \(y=ax^2+bx+c\) and the full equation.`,
      [S`<b>Differences.</b> First: \(8,\,24,\,40\). Second: \(16,\,16\).`,
        S`<b>Step size.</b> With \(x\)-steps of \(2\), the second difference is \(2a(2)^2=8a\). So \(8a=16\Rightarrow a=2\).`,
        S`<b>Other coefficients.</b> \(c=3\) (value at \(x=0\)). At \(x=2\): \(8+2b+3=11\Rightarrow b=0\). So \(y=2x^2+3\).`,
        S`<b>Check:</b> \(x=6\): \(72+3=75\) ✓. (Using \(2a=16\) would wrongly give \(a=8\).)`],
      S`a = 2; y = 2x² + 3`,
      plane({ view: { xmin: -1, xmax: 7, ymin: -5, ymax: 80 }, curves: [{ f: (x) => 2 * x * x + 3, color: "violet" }], points: [{ x: 2, y: 11, label: "(2, 11)", color: "amber" }, { x: 4, y: 35, label: "(4, 35)", color: "amber" }, { x: 6, y: 75, label: "(6, 75)", color: "amber" }], step: { x: 1, y: 10 } })],
    ["Painted cubes", S`A cube of edge \(n\) is built from \(n^3\) unit cubes and dipped in paint. The number of unit cubes with exactly one painted face is \(F(n)=6(n-2)^2\) for \(n\ge2\). Show that \(F\) is quadratic using differences for \(n=2\) to \(6\), and find \(a\).`,
      [S`<b>Values.</b> \(F(2)=0\), \(F(3)=6\), \(F(4)=24\), \(F(5)=54\), \(F(6)=96\).`,
        S`<b>First differences:</b> \(6,\,18,\,30,\,42\). <b>Second:</b> \(12,\,12,\,12\) — constant, so quadratic.`,
        S`<b>\(a\):</b> \(2a=12\Rightarrow a=6\), matching \(6(n-2)^2=6n^2-24n+24\).`,
        S`<b>Meaning:</b> each face has an \((n-2)\times(n-2)\) square of single-painted cubes, and there are \(6\) faces.`],
      S`second differences constant (12), a = 6`],
  ], [
    q("hard", S`At \(x=0,3,6,9\) a quadratic takes \(y=1,\,10,\,37,\,82\). Enter \(a\).`, num(1), "Second difference = 2a·(step)² with step 3.", [S`First: \(9,27,45\); second: \(18\). \(2a(9)=18\Rightarrow a=1\).`], S`\(1\)`),
    q("hard", S`A quadratic has \(y(0)=5\), first difference from \(x=0\) to \(1\) equal to \(-1\), and constant second difference \(4\). Enter \(y(3)\).`, num(14), "Build the first differences −1, 3, 7.", [S`\(5\to4\to7\to14\).`], S`\(14\)`),
    q("hard", S`For \(y=ax^2+bx+c\) with \(x\)-steps of 1, the first difference from \(x=0\) to \(x=1\) is \(a+b\). If it is \(7\) and the second difference is \(6\), enter \(b\).`, num(4), "2a = 6.", [S`\(a=3\), so \(b=7-3=4\).`], S`\(4\)`),
    q("hard", S`A quadratic has \(y=7,\,4,\,3,\,4\) at \(x=0,1,2,3\). Enter \(y\) at \(x=6\).`, num(19), "Find the equation from the differences.", [S`Second difference \(2\Rightarrow a=1\); \(c=7\); \(1+b+7=4\Rightarrow b=-4\).`, S`\(y(6)=36-24+7=19\).`], S`\(19\)`),
    q("hard", S`At \(x=0,\,0.5,\,1,\,1.5\) a quadratic has \(y=0,\,1,\,4,\,9\). Enter \(a\).`, num(4), "Second difference = 2a·h² with h = 0.5.", [S`First: \(1,3,5\); second \(2\). \(2a(0.25)=2\Rightarrow a=4\).`], S`\(4\)`),
  ]),

  wrapUp({
    qas: [
      ["What do constant first differences tell me?", "The relation is linear; with steps of 1, the difference is the slope."],
      ["What do constant second differences tell me?", "The relation is quadratic, and with steps of 1 the second difference is 2a."],
      ["What if neither row is constant?", "The relation is neither linear nor quadratic; it may be exponential (constant ratios)."],
      ["Why must the x-values be equally spaced?", "Differences compare equal steps; uneven steps give misleading changes."],
      ["How does the rate of change differ?", "A line changes at a constant rate; a parabola's rate of change itself changes steadily."],
    ],
    summary: [
      "Linear: constant first differences; graph is a line.",
      "Quadratic: constant second differences (= 2a for step 1); graph is a parabola.",
      "Step h: second difference = 2a·h².",
      "Expand equations to see the highest power of x.",
    ],
    next: "1.5 starts from y = x² and studies how a, h and k move and stretch the parabola.",
  }),
];
