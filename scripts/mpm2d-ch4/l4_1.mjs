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
      [String.raw`First differences: \(2, 4, 6, 8\) — not constant, so not linear.`, String.raw`Second differences: \(2, 2, 2\) — constant.`],
      String.raw`quadratic (in fact \(y=x^2+x+3\))`],
    ["Neither", String.raw`Classify \(x: 0,1,2,3,4\); \(y: 1,3,9,27,81\).`,
      [String.raw`First differences: \(2, 6, 18, 54\); second differences: \(4, 12, 36\) — not constant.`, "Each y-value is 3 times the previous one."],
      "neither linear nor quadratic (exponential)"],
    ["A missing value", String.raw`A quadratic has \(x: 0,1,2,3,4\); \(y: 2,5,12,\square,38\). Find the missing value.`,
      [String.raw`First differences so far: \(3, 7\), so the second difference is \(4\).`, String.raw`Next first differences: \(11\), then \(15\).`, String.raw`Missing value \(12+11=23\); check \(23+15=38\) ✓`],
      String.raw`\(23\)`],
    ["Finding a", String.raw`The table \(x: 0,1,2,3\); \(y: 1,4,13,28\) is quadratic. Find \(a\), then the equation.`,
      [String.raw`First differences \(3, 9, 15\); second differences \(6\). So \(a=\frac62=3\).`, String.raw`\(c=1\) (the value at \(x=0\)). At \(x=1\): \(3+b+1=4\Rightarrow b=0\).`],
      String.raw`\(y=3x^2+1\)`],
    ["A model from data", String.raw`A model rocket's height (m) after \(t\) seconds: \(t: 0,1,2,3,4\); \(h: 0,25,40,45,40\). Show the data are quadratic and find the maximum height.`,
      [String.raw`First differences \(25, 15, 5, -5\); second differences \(-10\) (constant).`, String.raw`The values are symmetric about \(t=3\), so the maximum is \(45\) m at \(t=3\) s.`, String.raw`A model: \(h=-5(t-3)^2+45\) (check \(t=1\): \(-20+45=25\) ✓).`],
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
