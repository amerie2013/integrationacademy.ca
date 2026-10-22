// IB AA SL 7.3 — Lines of Best Fit and Regression: best fit by eye through the mean point, least-squares regression y on x and x on y, interpretation, interpolation vs extrapolation
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, plane } from "./lib.mjs";

export const TITLE = "7.3 Lines of Best Fit and Regression";
export const ID = "1baa0007-0001-4001-8001-000000000703";
const S = String.raw;
const P = (x, y, label, color = "blue") => ({ x, y, label, color });
const pts = (xs, ys, color = "violet") => xs.map((x, i) => ({ x, y: ys[i], color }));

// temperature (°C) and cold drinks sold: y = 3 + 1.9x exactly (least squares), r = 0.9995
const TX = [10, 14, 17, 20, 23, 26, 30], TY = [22, 30, 35, 41, 46, 53, 60];
// age of car (years) and value (thousands): y = 20.43 − 1.595x, r = −0.997
const CX = [1, 2, 3, 4, 5, 6, 7, 8], CY = [19, 17, 16, 14, 12, 11, 9, 8];

export const blocks = () => [
  intro({
    icon: "📉",
    title: "Lines of Best Fit and Regression",
    overview: S`When a scatter diagram shows a linear trend, a straight line can summarise it and be used to make predictions. A line drawn by eye should pass through the mean point; the least-squares regression line is the best line in a precise sense, and the GDC finds it instantly. In this lesson you will fit and interpret regression lines, use them for predictions, and decide when a prediction can be trusted.`,
    goals: [
      "draw a line of best fit by eye through the mean point \\((\\bar x,\\bar y)\\);",
      "find the regression line of \\(y\\) on \\(x\\), \\(y=a+bx\\), with a GDC or from \\(b=\\frac{S_{xy}}{S_{xx}}\\), \\(a=\\bar y-b\\bar x\\);",
      "interpret the gradient and intercept in context;",
      "make predictions and distinguish interpolation from extrapolation;",
      "use the regression line of \\(x\\) on \\(y\\) to predict \\(x\\) from \\(y\\).",
    ],
    curriculum: "SL 4.4 (equation of the regression line of y on x; use of the equation for prediction purposes; interpret the meaning of the parameters a and b) and SL 4.10 (equation of the regression line of x on y; use for prediction)",
    prior: [
      ["Find the gradient of the line through (2, 10) and (6, 22).", "3."],
      [S`Find \(y\) when \(x=12\) for \(y=3+1.9x\).`, "25.8."],
      ["What does a correlation coefficient of −0.95 tell you?", "Strong negative linear correlation."],
    ],
    words: [
      ["Line of best fit", "a straight line summarising the trend, through \\((\\bar x,\\bar y)\\)", "drawn by eye"],
      ["Least-squares regression", "the line making the sum of squared vertical distances smallest", "\\(y=a+bx\\)"],
      ["Interpolation", "predicting inside the range of the data", "reliable if r is strong"],
      ["Extrapolation", "predicting outside the range of the data", "unreliable"],
      ["x on y", "regression line used to predict x from y", "\\(x=c+dy\\)"],
    ],
  }),

  section("📌 The regression line of y on x", S`
  <p>The temperature and cold-drink data below have \(\bar x=20\), \(\bar y=41\), \(S_{xy}=551\), \(S_{xx}=290\). So \(b=\frac{551}{290}=1.9\) and \(a=41-1.9(20)=3\): the regression line is \(y=3+1.9x\).</p>
  ${table(["Temperature x (°C)", "10", "14", "17", "20", "23", "26", "30"], [["Cold drinks y", "22", "30", "35", "41", "46", "53", "60"]])}
  ${plane({ view: { xmin: 5, xmax: 35, ymin: 10, ymax: 70 }, step: { x: 5, y: 10 }, points: [...pts(TX, TY), P(20, 41, "(20, 41)", "amber")], lines: [{ m: 1.9, b: 3, color: "red" }], xlabel: "temperature (°C)", ylabel: "cold drinks" }, "y = 3 + 1.9x passes through the mean point (20, 41)")}
  <p><em>Gradient</em> \(b=1.9\): each extra degree is associated with about 1.9 more drinks sold. <em>Intercept</em> \(a=3\): the predicted sales at 0 °C — outside the data, so not meaningful here.</p>
  ${keyIdea(S`The regression line of \(y\) on \(x\) always passes through \((\bar x,\bar y)\). Use it to predict \(y\) from \(x\), only within the data range and only when the correlation is reasonably strong.`)}`),

  section("📌 Predictions and the x-on-y line", S`
  ${plane({ view: { xmin: 0, xmax: 13, ymin: -2, ymax: 22 }, step: { x: 1, y: 2 }, points: pts(CX, CY), lines: [{ m: -1.595, b: 20.43, color: "red" }], segs: [{ pts: [[1, -2], [1, 22]], color: "green" }, { pts: [[8, -2], [8, 22]], color: "green" }], xlabel: "age (years)", ylabel: "value (thousands)" }, "Car values: interpolate between 1 and 8 years (green); at 13 years the line predicts a negative value — extrapolation fails")}
  <p>At 5.5 years the line predicts \(20.43-1.595(5.5)\approx11.7\) thousand: interpolation, reliable since \(r=-0.997\). At 13 years it predicts \(-0.3\) thousand — impossible. Extrapolation assumes the trend continues, which it may not.</p>
  <p>To predict \(x\) from a known \(y\), use the regression line of \(x\) on \(y\), not a rearranged \(y\)-on-\(x\) line. For the drinks data, \(x=-1.556+0.526y\). The two lines meet at the mean point; they are close together when \(|r|\) is close to 1.</p>
  ${plane({ view: { xmin: 0, xmax: 12, ymin: 0, ymax: 12 }, step: { x: 1, y: 1 }, lines: [{ m: 0.6606, b: 2.0667, color: "red" }, { m: 0.8826, b: 0.8459, color: "green" }], points: [...pts([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [3, 2, 5, 4, 7, 5, 8, 6, 9, 8]), P(5.5, 5.7, "(5.5, 5.7)", "amber")] }, "r = 0.87: y on x (red, y = 2.07 + 0.66x) and x on y (green, x = −0.96 + 1.13y) differ, meeting at the mean point")}
  ${watchOut([
    "Predict y from x with y on x; predict x from y with x on y.",
    "Do not interpret the intercept if x = 0 is far outside the data.",
    "Extrapolation can give impossible answers.",
    "A regression line is only useful when r shows a reasonably strong linear correlation.",
  ])}`),

  section("📌 Explore", S`<p>Move the prediction value along the axis. Inside the shaded data range the prediction is interpolation; outside it the readout warns of extrapolation. Show both regression lines to see them meet at the mean point.</p>`),

  widget("ibRegression", { init: [10] }),

  examples([
    ["Level 1 · Use the line", S`For \(y=3+1.9x\) (temperature and drinks, data from 10 °C to 30 °C), predict sales at 18 °C and at 40 °C, and comment.`,
      [S`At 18: \(3+34.2=37.2\approx37\) drinks — interpolation, reliable.`, S`At 40: \(79\) — extrapolation, unreliable.`],
      "≈ 37 (reliable); 79 (unreliable)"],
    ["Level 1 · Interpret", S`The regression line for the age \(x\) (years) and value \(y\) (thousands) of a car model is \(y=20.43-1.595x\). Interpret the gradient and intercept.`,
      ["Each extra year is associated with a fall of about 1.6 thousand in value.", "20.43 thousand: the predicted value of a new car (x = 0), just below the data range."],
      "−1.6 thousand per year; ≈ 20.4 thousand when new"],
    ["Level 2 · From summary statistics", S`For 7 people, \(\bar x=55\) kg, \(\bar y=16.4\) cm (hand span), \(S_{xy}=225\), \(S_{xx}=700\). Find the regression line of \(y\) on \(x\).`,
      [S`\(b=\frac{225}{700}\approx0.321\).`, S`\(a=16.43-0.3214(55)\approx-1.25\).`],
      S`\(y=-1.25+0.321x\)`,
      plane({ view: { xmin: 35, xmax: 75, ymin: 10, ymax: 24 }, step: { x: 5, y: 2 }, points: [...pts([40, 45, 50, 55, 60, 65, 70], [12, 14, 13, 17, 18, 19, 22]), P(55, 16.43, "mean point", "amber")], lines: [{ m: 0.3214, b: -1.25, color: "red" }], xlabel: "mass (kg)", ylabel: "span (cm)" })],
    ["Level 2 · x on y", S`For the drinks data, the regression line of \(x\) on \(y\) is \(x=-1.556+0.526y\). Estimate the temperature on a day when 50 drinks are sold.`,
      [S`\(x=-1.556+0.526(50)\approx24.7\) °C.`, "Use x on y because x is being predicted from y."],
      "≈ 24.7 °C"],
    ["Level 3 · Reliability", S`A regression line \(y=12+0.8x\) is fitted to data with \(r=0.31\) and \(x\) from 20 to 60. Discuss the reliability of predicting \(y\) when \(x=40\) and \(x=90\).`,
      ["r = 0.31 is a weak correlation: even inside the range, predictions are unreliable.", "x = 90 is also extrapolation: very unreliable."],
      "both unreliable; x = 90 worse"],
  ]),

  practice([
    q("Level 1 · predict", S`Using \(y=4+2.5x\), predict \(y\) when \(x=6\).`, num(19),
      "Substitute.", [S`\(4+15\).`], S`\(19\)`),
    q("Level 1 · mean point", S`A regression line of \(y\) on \(x\) is \(y=10+3x\) and \(\bar x=4\). Find \(\bar y\).`, num(22),
      "The line passes through the mean point.", [S`\(10+12\).`], S`\(22\)`),
    q("Level 2 · gradient", S`For a data set, \(S_{xy}=84\) and \(S_{xx}=40\). Find the gradient \(b\) of the y-on-x line.`, num(2.1, 0.001),
      "b = Sxy/Sxx.", [S`\(\frac{84}{40}\).`], S`\(2.1\)`),
    q("Level 2 · intercept", S`\(b=2.1\), \(\bar x=5\), \(\bar y=17\). Find \(a\).`, num(6.5, 0.001),
      "a = ȳ − b x̄.", [S`\(17-10.5\).`], S`\(6.5\)`),
    q("Level 2 · which line", "To estimate a student's study hours from their test score, use:", choice(["the regression line of x (hours) on y (score)", "the regression line of y on x, rearranged", "the mean of the scores", "any line through the origin"], 0),
      "Which variable is being predicted?", ["x is predicted from y: x on y."], "x on y"),
  ]),

  ...hard([
    ["Regression from sums", S`For 6 pairs, \(\sum x=21\), \(\sum y=46\), \(\sum xy=195\), \(\sum x^2=91\). Find the regression line of \(y\) on \(x\) and predict \(y\) when \(x=4.5\).`,
      [S`\(S_{xy}=195-\frac{21\times46}{6}=34\); \(S_{xx}=91-\frac{441}{6}=17.5\).`, S`\(b=\frac{34}{17.5}\approx1.943\); \(a=\frac{46}{6}-1.943(3.5)\approx0.867\).`, S`At 4.5: \(0.867+8.743\approx9.61\).`],
      S`\(y=0.867+1.94x\); \(\approx9.61\)`,
      plane({ view: { xmin: 0, xmax: 7, ymin: 0, ymax: 15 }, step: { x: 1, y: 1 }, points: [...pts([1, 2, 3, 4, 5, 6], [3, 5, 6, 9, 10, 13]), P(4.5, 9.61, "(4.5, 9.61)", "green")], lines: [{ m: 1.9429, b: 0.8667, color: "red" }] })],
    ["Where the lines meet", S`The regression lines of a data set are \(y=2+0.8x\) (y on x) and \(x=1+1.1y\) (x on y). Find the mean point.`,
      [S`Both pass through \((\bar x,\bar y)\): \(\bar x=1+1.1(2+0.8\bar x)=3.2+0.88\bar x\).`, S`\(0.12\bar x=3.2\Rightarrow\bar x\approx26.7\); \(\bar y=2+0.8(26.67)\approx23.3\).`],
      S`\(\approx(26.7,23.3)\)`],
  ], [
    q("Level 3 · prediction", S`A y-on-x line has \(b=-1.5\) and passes through \((\bar x,\bar y)=(8,30)\). Predict \(y\) when \(x=10\).`, num(27),
      "y − 30 = −1.5(x − 8).", [S`\(30-3\).`], S`\(27\)`),
    q("Level 3 · intercept from sums", S`For 5 pairs, \(\sum x=20\), \(\sum y=65\), \(S_{xy}=30\), \(S_{xx}=12\). Find the intercept \(a\) of the y-on-x line.`, num(3, 0.001),
      "b = 2.5; a = 13 − 2.5 × 4.", [S`\(13-10\).`], S`\(3\)`),
    q("Level 3 · x on y", S`The x-on-y line is \(x=4+0.25y\). Estimate \(x\) when \(y=36\).`, num(13),
      "Substitute y.", [S`\(4+9\).`], S`\(13\)`),
  ]),

  wrapUp({
    qas: [
      ["Why must a line of best fit pass through (x̄, ȳ)?", "The least-squares line always does, and it balances the points above and below the line."],
      ["What does the gradient b mean?", "The change in y associated with an increase of 1 in x, in context and with units."],
      ["When is a prediction reliable?", "When the correlation is strong and x is inside the range of the data (interpolation)."],
      ["Why is extrapolation risky?", "It assumes the linear trend continues beyond the data, which may be false or even impossible."],
      ["When do I use the x-on-y line?", "When you know y and want to predict x."],
    ],
    summary: [
      "y on x: y = a + bx, b = Sxy/Sxx, a = ȳ − b x̄ (or GDC).",
      "Passes through (x̄, ȳ).",
      "Interpret b (rate) and a (value at x = 0, if meaningful).",
      "Interpolate, do not extrapolate; need strong r.",
      "Predict x from y with the x-on-y line.",
    ],
    next: "7.4 reviews bivariate data with mixed exam-style questions.",
  }),
];
