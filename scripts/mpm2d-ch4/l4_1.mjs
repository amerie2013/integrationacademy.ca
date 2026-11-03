// MPM2D 4.1 — Introducing Quadratic Relations (self-study format): first and second differences, telling
// linear, quadratic and other relations apart, missing table values, finding a from the second difference,
// collecting data and fitting a curve of best fit
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice } from "./lib.mjs";
import { plane } from "../mth1w-ch4/figs4.mjs";

export const TITLE = "4.1 Introducing Quadratic Relations";

export const blocks = () => [
  intro({
    icon: "📊",
    title: "Introducing Quadratic Relations",
    overview: String.raw`A quadratic relation has \(x^2\) as its highest power, such as \(y=x^2+x+3\), and its graph is a U-shaped curve called a parabola. Quadratics model the path of a ball, the shape of an arch and the area of a rectangle with a fixed perimeter. In this lesson you will use finite differences to decide whether a table of values is linear, quadratic or neither, fill in missing values, connect the second difference to the coefficient of \(x^2\), and fit a parabola to real data.`,
    goals: [
      "identify a quadratic relation from its equation, graph or table of values;",
      "calculate first and second differences;",
      "use constant second differences to recognize a quadratic and find missing values;",
      "connect the second difference to the coefficient a;",
      "fit a parabola to data and use it to make predictions.",
    ],
    curriculum: "QR1 (collect data that can be represented as a quadratic relation; determine that a relation is quadratic using finite differences; describe a curve of best fit)",
    prior: [
      [String.raw`First differences of \(3, 7, 11, 15\)?`, String.raw`\(4, 4, 4\) — linear.`],
      [String.raw`\(y=x^2\) when \(x=-3\)?`, String.raw`\(9\).`],
      [String.raw`Expand \((x+1)^2\).`, String.raw`\(x^2+2x+1\).`],
    ],
    words: [
      ["Quadratic relation", "highest power of x is 2", "\\(y=2x^2-3x+1\\)"],
      ["Parabola", "the U-shaped graph of a quadratic", ""],
      ["First differences", "differences of consecutive y-values", ""],
      ["Second differences", "differences of the first differences", ""],
    ],
  }),

  section("📌 First and second differences", String.raw`
  <p>When the \(x\)-values go up in equal steps, subtract each \(y\)-value from the next to get the first differences; subtract those to get the second differences.</p>
  ${table(["Relation", "First differences", "Second differences"], [
    ["linear, e.g. \\(y=3x+1\\)", "constant", "zero"],
    ["quadratic, e.g. \\(y=x^2+x+3\\)", "change by a constant amount", "constant (not zero)"],
    ["neither, e.g. \\(y=2^x\\)", "not constant", "not constant"],
  ])}
  ${keyIdea(String.raw`If the \(x\)-values increase by 1 and the second differences are a constant \(D\), the relation is quadratic and \(a=\frac{D}{2}\). So \(y=3x^2+\ldots\) always has second differences of \(6\).`)}`),

  section("📌 Explore", String.raw`<p>Change \(a\), \(b\) and \(c\) and watch the difference rows. Set \(a=0\) to see a linear relation, then switch to \(y=2^x\) to see a relation that is neither.</p>`),

  widget("diffTable", { init: [1, 1, 3] }),

  section("📌 Curves of best fit", String.raw`
  <p>Real data is never perfect. If a scatter plot curves up and then down (or down and then up) and its second differences are roughly constant, a parabola is a good model. Adjust a model until it passes close to the points, then use it to predict.</p>
  ${watchOut([
    "Differences only work when the x-values go up in equal steps.",
    "Subtract in the same order every time: next minus previous.",
    "Constant first differences means linear, not quadratic.",
    "A model is only trustworthy near the data; be careful predicting far beyond it.",
  ])}`),

  widget("quadFit"),

  examples([
    ["A quadratic table", String.raw`Is the relation \(x: 0,1,2,3,4\); \(y: 3,5,9,15,23\) linear, quadratic or neither?`,
      [String.raw`<b>Rule.</b> When the \(x\)-values go up in equal steps: \[\text{first differences constant}\Rightarrow\text{linear},\qquad\text{second differences constant}\Rightarrow\text{quadratic}.\] Here the \(x\)-values go up by 1 each time, so the rule applies.`,
        String.raw`<b>First differences</b> (each \(y\) minus the one before): \(5-3=2\), \(9-5=4\), \(15-9=6\), \(23-15=8\). They are not all equal, so the relation is <b>not linear</b>.`,
        String.raw`<b>Second differences</b> (differences of the first differences): \(4-2=2\), \(6-4=2\), \(8-6=2\). They are all equal to \(2\), so the relation is <b>quadratic</b>.`,
        String.raw`<b>Check with an equation.</b> The relation is \(y=x^2+x+3\): at \(x=2\), \(2^2+2+3=9\) ✓; at \(x=4\), \(4^2+4+3=23\) ✓.`],
      String.raw`quadratic (in fact \(y=x^2+x+3\))`,
      plane({ view: { xmin: -1, xmax: 5, ymin: 0, ymax: 26 }, curves: [{ f: (x) => x * x + x + 3, color: "violet" }], points: [3, 5, 9, 15, 23].map((y, x) => ({ x, y, color: "blue" })), step: { x: 1, y: 2 } })],
    ["Neither", String.raw`Classify \(x: 0,1,2,3,4\); \(y: 1,3,9,27,81\).`,
      [String.raw`<b>Rule.</b> Equal \(x\)-steps: constant first differences mean linear, constant second differences mean quadratic, a constant <i>ratio</i> means exponential.`,
        String.raw`<b>First differences:</b> \(3-1=2\), \(9-3=6\), \(27-9=18\), \(81-27=54\). Not constant, so not linear.`,
        String.raw`<b>Second differences:</b> \(6-2=4\), \(18-6=12\), \(54-18=36\). Not constant, so not quadratic.`,
        String.raw`<b>Ratios:</b> \(\frac31=3\), \(\frac93=3\), \(\frac{27}{9}=3\), \(\frac{81}{27}=3\). Each \(y\)-value is 3 times the one before, so the relation is exponential: \(y=3^x\).`],
      "neither linear nor quadratic (exponential)",
      plane({ view: { xmin: -1, xmax: 5, ymin: 0, ymax: 90 }, curves: [{ f: (x) => 3 ** x, color: "red" }], points: [1, 3, 9, 27, 81].map((y, x) => ({ x, y, color: "blue" })), step: { x: 1, y: 10 } })],
    ["A missing value", String.raw`A quadratic has \(x: 0,1,2,3,4\); \(y: 2,5,12,\square,38\). Find the missing value.`,
      [String.raw`<b>Rule.</b> The relation is quadratic, so its <b>second differences are constant</b>. Use the known values to find that constant.`,
        String.raw`<b>First differences so far:</b> \(5-2=3\), \(12-5=7\). <b>Second difference:</b> \(7-3=4\).`,
        String.raw`<b>Build the next first differences.</b> Each first difference is 4 more than the one before: \(7+4=11\), then \(11+4=15\).`,
        String.raw`<b>Missing value:</b> \(12+11=23\).`,
        String.raw`<b>Check:</b> the next value should be \(23+15=38\), which matches the table ✓.`],
      String.raw`\(23\)`,
      plane({ view: { xmin: -1, xmax: 5, ymin: 0, ymax: 42 }, curves: [{ f: (x) => 2 * x * x + x + 2, color: "violet" }], points: [{ x: 0, y: 2, color: "blue" }, { x: 1, y: 5, color: "blue" }, { x: 2, y: 12, color: "blue" }, { x: 3, y: 23, label: "(3, 23)", color: "red" }, { x: 4, y: 38, color: "blue" }], step: { x: 1, y: 5 } })],
    ["Finding a", String.raw`The table \(x: 0,1,2,3\); \(y: 1,4,13,28\) is quadratic. Find \(a\), then the equation.`,
      [String.raw`<b>Facts we use.</b> For \(y=ax^2+bx+c\) with \(x\)-steps of 1: \[\text{second difference}=2a,\qquad c=\text{the }y\text{-value at }x=0.\]`,
        String.raw`<b>Differences.</b> First: \(4-1=3\), \(13-4=9\), \(28-13=15\). Second: \(9-3=6\), \(15-9=6\).`,
        String.raw`<b>Find \(a\).</b> \(2a=6\), so \(a=3\).`,
        String.raw`<b>Find \(c\).</b> At \(x=0\), \(y=1\), so \(c=1\).`,
        String.raw`<b>Find \(b\).</b> Substitute the point \((1,4)\) into \(y=3x^2+bx+1\): \(4=3+b+1\), so \(b=0\).`,
        String.raw`<b>Check</b> at \(x=3\): \(3(3)^2+1=27+1=28\) ✓.`],
      String.raw`\(y=3x^2+1\)`],
    ["A model from data", String.raw`A model rocket's height (m) after \(t\) seconds: \(t: 0,1,2,3,4\); \(h: 0,25,40,45,40\). Show the data are quadratic and find the maximum height.`,
      [String.raw`<b>First differences:</b> \(25-0=25\), \(40-25=15\), \(45-40=5\), \(40-45=-5\).`,
        String.raw`<b>Second differences:</b> \(15-25=-10\), \(5-15=-10\), \(-5-5=-10\). Constant, so the data are <b>quadratic</b>. Since \(2a=-10\), \(a=-5<0\): the parabola opens down and has a maximum.`,
        String.raw`<b>Use symmetry.</b> \(h(2)=h(4)=40\), so the axis of symmetry is halfway: \(t=\frac{2+4}{2}=3\). The vertex is \((3,45)\): the maximum height is \(45\) m at \(3\) s.`,
        String.raw`<b>Write a model in vertex form</b> \(h=a(t-h)^2+k\) with \(a=-5\) and vertex \((3,45)\): \(h=-5(t-3)^2+45\).`,
        String.raw`<b>Check:</b> \(t=1\): \(-5(1-3)^2+45=-20+45=25\) ✓; \(t=0\): \(-5(0-3)^2+45=-45+45=0\) ✓.`],
      String.raw`quadratic; maximum \(45\) m at \(3\) s`,
      plane({ view: { xmin: 0, xmax: 6.5, ymin: 0, ymax: 50 }, curves: [{ f: (t) => -5 * (t - 3) ** 2 + 45, color: "violet" }], points: [0, 1, 2, 3, 4].map((t) => ({ x: t, y: [0, 25, 40, 45, 40][t], color: "blue" })), xlabel: "t (s)", ylabel: "h (m)", step: { x: 1, y: 5 } })],
  ]),

  practice([
    q("classify", String.raw`The table \(y: 4, 7, 10, 13\) (for \(x=0,1,2,3\)) is…`, choice(["linear", "quadratic", "neither"], 0),
      "Find the first differences.", ["They are all 3."], "linear"),
    q("second difference", String.raw`What is the constant second difference of \(y=x^2-3x\) for \(x=0,1,2,\ldots\)?`, num(2),
      "Second difference = 2a.", [String.raw`\(a=1\), so \(2\).`], String.raw`\(2\)`),
    q("missing value", String.raw`A quadratic table has \(y: 1, 2, 7, 16, \square\) for \(x=0,1,2,3,4\). Find the missing value.`, num(29),
      "First differences 1, 5, 9 …", [String.raw`Second difference 4; next first difference 13; \(16+13=29\).`], String.raw`\(29\)`),
    q("classify", String.raw`The table \(y: 2, 4, 8, 16\) (for \(x=0,1,2,3\)) is…`, choice(["neither", "linear", "quadratic"], 0),
      "Check first and second differences.", ["First 2, 4, 8; second 2, 4 — neither constant (it doubles)."], "neither"),
    q("second difference", String.raw`What is the constant second difference of \(y=-4x^2+x\) for \(x=0,1,2,\ldots\)?`, num(-8),
      "Second difference = 2a.", [String.raw`\(2(-4)=-8\).`], String.raw`\(-8\)`),
  ]),

  wrapUp({
    qas: [
      ["Why do second differences reveal a quadratic?", "The x² term adds 1, 4, 9, 16 … whose differences 3, 5, 7 … go up by 2 each time. Linear and constant terms only shift the first differences."],
      ["What if the x-values jump by 2?", "Differences still detect a quadratic, but the second difference becomes 8a instead of 2a. Equal steps are essential."],
      ["Are real data ever exactly quadratic?", "Rarely. Measurement error makes the second differences only roughly constant — that is why we fit a curve of best fit."],
      ["Is every U-shaped curve a parabola?", "No. Exponential and other curves can look similar. Constant second differences confirm a parabola."],
      ["How can I tell a parabola opens down from the table?", "The second differences are negative (a < 0): the values rise more and more slowly, then fall."],
    ],
    summary: [
      "Quadratic: highest power x²; graph a parabola.",
      "Equal x-steps: constant first differences → linear; constant second differences → quadratic.",
      "With steps of 1, the second difference is 2a.",
      "Fit a parabola to data and predict carefully.",
    ],
    next: "4.2 names the key features of a parabola.",
  }),
];
