// IB AA SL 7.4 — Chapter 7 Review: scatter diagrams, Pearson's r, regression lines and predictions
import { intro, section, keyIdea, widget, examples, practice, wrapUp, table, q, num, hard, plane } from "./lib.mjs";

export const TITLE = "7.4 Chapter 7 Review";
export const ID = "1baa0007-0001-4001-8001-000000000704";
const S = String.raw;
const P = (x, y, label, color = "blue") => ({ x, y, label, color });
const pts = (xs, ys, color = "violet") => xs.map((x, i) => ({ x, y: ys[i], color }));

// arm span (x) and height (y) in cm: y = −17.54 + 1.107x, r = 0.994
const AX = [150, 155, 160, 165, 170, 175, 180], AY = [148, 156, 158, 166, 169, 177, 182];

export const blocks = () => [
  intro({
    icon: "🧭",
    title: "Chapter 7 Review",
    overview: S`This review connects the chapter: describing a scatter diagram, measuring correlation with \(r\), fitting regression lines and judging predictions. The examples combine these skills as exam questions do.`,
    goals: [
      "describe correlation in context;",
      "calculate and interpret Pearson's r;",
      "find and interpret regression lines of y on x and x on y;",
      "make predictions and judge their reliability;",
      "distinguish correlation from causation.",
    ],
    curriculum: "SL 4.4, 4.10 (bivariate data, Pearson's r, regression lines and predictions)",
    prior: [
      ["What does r = −0.92 mean?", "Strong negative linear correlation."],
      ["Which point does every regression line pass through?", "The mean point (x̄, ȳ)."],
      ["Why is extrapolation unreliable?", "The trend may not continue outside the data."],
    ],
    words: [
      ["7.1", "scatter diagrams and correlation", ""],
      ["7.2", "Pearson's r", ""],
      ["7.3", "regression and prediction", ""],
      ["Interpolation", "inside the data range", ""],
      ["Causation", "not shown by correlation", ""],
    ],
  }),

  section("📌 The chapter on one page", S`
  ${table(["Question", "Tool"], [
    ["describe a scatter diagram", "direction, strength, form, in context"],
    ["measure linear correlation", S`\(r=\frac{S_{xy}}{\sqrt{S_{xx}S_{yy}}}\) or GDC; \(-1\le r\le1\)`],
    ["predict y from x", S`y on x: \(y=a+bx\), \(b=\frac{S_{xy}}{S_{xx}}\), \(a=\bar y-b\bar x\)`],
    ["predict x from y", "x on y (GDC with the variables swapped)"],
    ["is the prediction reliable?", "strong |r| and interpolation"],
    ["does x cause y?", "not from correlation alone — look for lurking variables"],
  ])}
  ${plane({ view: { xmin: 145, xmax: 185, ymin: 140, ymax: 190 }, step: { x: 5, y: 5 }, points: [...pts(AX, AY), P(165, 165.14, "mean point", "amber")], lines: [{ m: 1.1071, b: -17.536, color: "red" }], xlabel: "arm span (cm)", ylabel: "height (cm)" }, "Arm span and height: y = −17.5 + 1.11x, r = 0.994 (Example 2)")}
  ${keyIdea("Exam questions usually run: describe the scatter → find r and interpret → find the regression line → predict and comment on reliability.")}`),

  section("📌 Explore", S`<p>Use the explorer to compare predictions inside and outside the data range, and to see both regression lines meet at the mean point.</p>`),

  widget("ibRegression", { init: [16] }),

  examples([
    ["Level 1 · Describe and interpret", S`A scatter diagram of daily hours of exercise and resting heart rate shows a strong negative linear pattern with \(r=-0.88\). Describe the relationship.`,
      ["As exercise increases, resting heart rate tends to decrease, and the points lie close to a line."],
      "strong negative linear correlation",
      plane({ view: { xmin: 0, xmax: 3.2, ymin: 50, ymax: 90 }, step: { x: 0.5, y: 5 }, points: pts([0.2, 0.5, 0.7, 1, 1.2, 1.5, 1.8, 2, 2.4, 2.8], [84, 80, 82, 76, 73, 70, 71, 65, 62, 58]), xlabel: "exercise (h/day)", ylabel: "heart rate" })],
    ["Level 2 · Regression and prediction", S`For the arm-span data, the regression line of height on arm span is \(y=-17.54+1.107x\). Predict the height of a person with arm span 172 cm and comment.`,
      [S`\(y=-17.54+1.107(172)\approx172.9\) cm.`, "172 is inside 150–180 and r = 0.994: reliable interpolation."],
      "≈ 173 cm, reliable"],
    ["Level 2 · From summary statistics", S`For 8 pairs, \(\bar x=4.5\), \(\bar y=13.25\), \(S_{xy}=-67\), \(S_{xx}=42\), \(S_{yy}=107.5\). Find \(r\) and the y-on-x line.`,
      [S`\(r=\frac{-67}{\sqrt{42\times107.5}}\approx-0.997\).`, S`\(b=\frac{-67}{42}\approx-1.595\); \(a=13.25+1.595(4.5)\approx20.43\).`],
      S`\(r\approx-0.997\); \(y=20.43-1.60x\)`,
      plane({ view: { xmin: 0, xmax: 9, ymin: 5, ymax: 21 }, step: { x: 1, y: 2 }, points: [...pts([1, 2, 3, 4, 5, 6, 7, 8], [19, 17, 16, 14, 12, 11, 9, 8]), P(4.5, 13.25, "(4.5, 13.25)", "amber")], lines: [{ m: -1.595, b: 20.43, color: "red" }] })],
    ["Level 2 · x on y", S`For a data set the regression line of \(x\) on \(y\) is \(x=2.4+0.35y\). Estimate \(x\) when \(y=40\), and explain why the y-on-x line should not be rearranged instead.`,
      [S`\(x=2.4+14=16.4\).`, "The y-on-x line minimises vertical distances, which is the wrong criterion for predicting x."],
      "16.4"],
    ["Level 3 · Full analysis", "Data on advertising spend x (thousands) and sales y (thousands) for 8 months give r = 0.995 and y = 44.4 + 6.44x, with x from 2 to 10. (a) Interpret 6.44. (b) Predict sales for x = 7 and x = 20. (c) Can we say advertising causes sales?",
      ["(a) Each extra thousand spent is associated with about 6.44 thousand more sales.", "(b) x = 7: 44.4 + 45.1 ≈ 89.5 thousand (reliable); x = 20: ≈ 173 thousand (extrapolation — unreliable).", "(c) No: correlation, not proof; season or price changes could also matter."],
      "6.44 per thousand; ≈ 89.5 reliable; ≈ 173 unreliable; no",
      plane({ view: { xmin: 0, xmax: 12, ymin: 40, ymax: 115 }, step: { x: 1, y: 10 }, points: pts([2, 3, 4, 5, 6, 8, 9, 10], [56, 66, 68, 77, 85, 96, 100, 110]), lines: [{ m: 6.44, b: 44.4, color: "red" }], xlabel: "advertising", ylabel: "sales" })],
  ]),

  practice([
    q("Level 1 · predict", S`Using \(y=12-0.5x\), predict \(y\) when \(x=8\).`, num(8),
      "Substitute.", [S`\(12-4\).`], S`\(8\)`),
    q("Level 1 · mean point", "Find the mean point of (2, 3), (4, 7), (6, 8).", num(6),
      "Give ȳ.", [S`\(\bar x=4\), \(\bar y=6\).`], S`\(\bar y=6\)`),
    q("Level 2 · r", S`\(S_{xy}=30\), \(S_{xx}=20\), \(S_{yy}=50\). Find \(r\) (3 d.p.).`, num(0.949, 0.001),
      "30/√1000.", [S`\(\frac{30}{31.62}\).`], S`\(0.949\)`),
    q("Level 2 · gradient", S`\(S_{xy}=30\), \(S_{xx}=20\). Find \(b\) for the y-on-x line.`, num(1.5, 0.001),
      "Sxy/Sxx.", [S`\(\frac{30}{20}\).`], S`\(1.5\)`),
    q("Level 2 · intercept", S`\(b=1.5\), \(\bar x=6\), \(\bar y=14\). Find \(a\).`, num(5),
      "ȳ − b x̄.", [S`\(14-9\).`], S`\(5\)`),
  ]),

  ...hard([
    ["Completing a data set", S`Five points have \(\bar x=6\) and \(\bar y=10\). The regression line of \(y\) on \(x\) has gradient 1.2. Find its equation and predict \(y\) when \(x=7.5\).`,
      [S`\(a=10-1.2(6)=2.8\).`, S`\(y=2.8+1.2x\); at 7.5: \(11.8\).`],
      S`\(y=2.8+1.2x\); \(11.8\)`],
    ["Two lines, one point", S`The regression lines are \(y=5+0.6x\) and \(x=-2+1.4y\). Find \(\bar x\) and \(\bar y\), and decide whether \(r\) is positive or negative.`,
      [S`\(\bar x=-2+1.4(5+0.6\bar x)=5+0.84\bar x\Rightarrow\bar x=31.25\).`, S`\(\bar y=5+0.6(31.25)=23.75\).`, "Both gradients are positive, so r is positive."],
      S`\((31.25,23.75)\); \(r>0\)`,
      plane({ view: { xmin: 20, xmax: 42, ymin: 15, ymax: 32 }, step: { x: 2, y: 2 }, lines: [{ m: 0.6, b: 5, color: "red" }, { m: 1 / 1.4, b: 2 / 1.4, color: "green" }], points: [P(31.25, 23.75, "(31.25, 23.75)", "amber")] }, "The two regression lines meet at the mean point")],
  ], [
    q("Level 3 · intercept", S`A y-on-x line has gradient \(-2\) and passes through \((\bar x,\bar y)=(5,18)\). Find \(a\).`, num(28),
      "18 = a − 10.", [S`\(a=28\).`], S`\(28\)`),
    q("Level 3 · r from lines", S`The gradients of the y-on-x and x-on-y lines are \(b=0.8\) and \(d=0.45\). Given \(r^2=bd\), find \(r\).`, num(0.6, 0.001),
      "r² = 0.36, r positive.", [S`\(\sqrt{0.36}\).`], S`\(0.6\)`),
    q("Level 3 · prediction", S`The x-on-y line is \(x=10+0.2y\). Estimate \(x\) when \(y=65\).`, num(23),
      "Substitute.", [S`\(10+13\).`], S`\(23\)`),
  ]),

  wrapUp({
    qas: [
      ["What should I write when describing correlation?", "Direction, strength and form, in the context of the variables."],
      ["How do I know a prediction is reliable?", "Strong correlation and x inside the data range."],
      ["Which regression line do I use?", "y on x to predict y; x on y to predict x."],
      ["What does the gradient of a regression line mean?", "The average change in y for each one-unit increase in x."],
      ["Can I conclude causation?", "No — only association, unless a controlled experiment shows cause."],
    ],
    summary: [
      "Scatter: direction, strength, form.",
      "r between −1 and 1; GDC or formula.",
      "Regression lines through (x̄, ȳ).",
      "Interpolate with strong r; avoid extrapolation.",
      "Correlation ≠ causation.",
    ],
    next: "Chapter 8 studies probability.",
  }),
];
