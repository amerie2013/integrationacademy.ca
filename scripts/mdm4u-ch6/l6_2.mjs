// MDM4U 6.2 — Correlation & Linear Regression: the line of best fit by least squares, ŷ = ax + b with
// a = [nΣxy − ΣxΣy]/[nΣx² − (Σx)²] and b = ȳ − a x̄, residuals, interpreting slope and intercept in context,
// the link a = r·(s_y/s_x), and using technology
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, fig, scatterSvg, tableSvg } from "./lib.mjs";
import { corr, linreg, sum, mean, sdS } from "../mdm4u/count.mjs";

export const TITLE = "6.2 Correlation & Linear Regression";
export const ID = "d50d8b9f-bb31-4de6-ada5-61fc0761b7f6";
const S = String.raw;
const r3 = (v) => Math.round(v * 1000) / 1000;
const r2 = (v) => Math.round(v * 100) / 100;
const P = (xs, ys) => xs.map((x, i) => [x, ys[i]]);
const sg = (v) => (v < 0 ? `-${Math.abs(v)}` : `+${v}`);

const ex = [2, 4, 6, 8, 10], ey = [7, 11, 12, 16, 19];
const n = 5, sx = sum(ex), sy = sum(ey), sxy = sum(ex.map((x, i) => x * ey[i])), sxx = sum(ex.map((x) => x * x));
const L1 = linreg(ex, ey);
const tr = [2, 4, 5, 7, 8, 10], tt = [31.8, 30.9, 30.1, 29.4, 28.6, 27.5]; // weekly training hours, 5 km time (min)
const L2 = linreg(tr, tt);
const eyeA = 0.5, eyeB = 33;

export const blocks = () => [
  intro({
    icon: "📈",
    title: "Correlation & Linear Regression",
    overview: S`When a scatter plot shows a linear pattern, a <strong>line of best fit</strong> summarizes it and lets us predict. The standard choice is the <strong>least-squares regression line</strong> \(\hat y=ax+b\): of all possible lines, it makes the sum of the squared <strong>residuals</strong> \((y-\hat y)^2\) as small as possible. Its slope and intercept come from the same sums used for \(r\), and they have practical meanings in context.`,
    goals: [
      "explain what the least-squares line minimizes;",
      "calculate the regression line from data or from summary sums;",
      "interpret the slope and intercept in context;",
      "calculate residuals;",
      "connect the slope with r and the standard deviations.",
    ],
    curriculum: "D2.2 (line of best fit by linear regression, using technology); D2.3 (interpreting the equation and r)",
    prior: [
      ["Slope through (2, 7) and (10, 19)?", "1.5."],
      ["Mean of 7, 11, 12, 16, 19?", "13."],
      ["If ŷ = 2x + 5, find ŷ at x = 4.", "13."],
    ],
    words: [
      ["Line of best fit", "a line that summarizes a linear trend", "ŷ = 1.45x + 4.3"],
      ["Residual", "observed y − predicted ŷ", "12 − 13 = −1"],
      ["Least squares", "the line that minimizes Σ(residual)²", "found by formula or technology"],
      ["ŷ (y-hat)", "a predicted value of y", "ŷ at x = 6"],
    ],
  }),

  section("📌 The least-squares line", S`
  \[a=\frac{n\sum xy-\sum x\sum y}{n\sum x^2-\left(\sum x\right)^2}\qquad b=\bar y-a\bar x\]
  ${fig(scatterSvg(P(ex, ey), { xmin: 0, xmax: 12, ymin: 0, ymax: 24, line: L1, residuals: true, xlabel: "x", ylabel: "y" }), "residuals (dashed) are vertical distances from the points to the line")}
  ${keyIdea(S`The least-squares line always passes through the point of means \((\bar x,\bar y)\), and its residuals add to 0. The slope is also \(a=r\,\frac{s_y}{s_x}\), so \(a\) and \(r\) always have the same sign.`)}`),

  section("📌 Interpreting the equation", S`
  ${table(["Part", "Meaning", `Example: ŷ = ${r2(L2.a)}x + ${r2(L2.b)} (5 km time in minutes, x = weekly training hours)`], [["slope a", "change in ŷ for each increase of 1 in x", `each extra weekly training hour goes with about ${Math.abs(r2(L2.a))} min faster`], ["intercept b", "ŷ when x = 0 (meaningful only if x = 0 is reasonable)", `about ${r2(L2.b)} min with no training`], ["ŷ", "predicted value", `x = 6: ŷ ≈ ${r2(L2.a * 6 + L2.b)} min`]])}`),

  section("📌 Explore", S`<p>Adjust the slope and intercept to make the total area of the squares as small as you can, then reveal the least-squares line.</p>`),

  widget("regressionLab", { init: [1, 2] }),

  section("📌 Watch out", watchOut([
    "Residual = observed − predicted (y − ŷ), not the other way round.",
    "Compute a before b; b uses the means and a.",
    "Interpret the slope with units: “per one unit of x”.",
    "The regression of y on x is not the same as the regression of x on y.",
  ])),

  examples([
    ["Finding the line", `Find the least-squares line for x: ${ex.join(", ")}; y: ${ey.join(", ")}.`,
      [S`\(\sum x=${sx}\), \(\sum y=${sy}\), \(\sum xy=${sxy}\), \(\sum x^2=${sxx}\).`, S`\(a=\frac{5(${sxy})-${sx}(${sy})}{5(${sxx})-${sx}^2}=\frac{${n * sxy - sx * sy}}{${n * sxx - sx * sx}}=${r3(L1.a)}\).`, S`\(b=${mean(ey)}-${r3(L1.a)}(${mean(ex)})=${r3(L1.b)}\).`],
      `ŷ = ${r3(L1.a)}x + ${r3(L1.b)}`,
      fig(tableSvg([["x", ...ex.map(String), "Σ = " + sx], ["y", ...ey.map(String), "Σ = " + sy], ["xy", ...ex.map((x, i) => String(x * ey[i])), "Σ = " + sxy], ["x²", ...ex.map((x) => String(x * x)), "Σ = " + sxx]]))],
    ["Residuals", "Using the line from the previous example, find the residual of the point (6, 12).",
      [S`\(\hat y=${r3(L1.a)}(6)${sg(r3(L1.b))}=${r3(L1.a * 6 + L1.b)}\).`, S`Residual \(=12-${r3(L1.a * 6 + L1.b)}=${r3(12 - (L1.a * 6 + L1.b))}\): the point is below the line.`],
      `${r3(12 - (L1.a * 6 + L1.b))}`],
    ["Interpreting", `A runner's weekly training hours x and 5 km time y (min): x ${tr.join(", ")}; y ${tt.join(", ")}. The regression line is ŷ ≈ ${r3(L2.a)}x + ${r3(L2.b)}. Interpret the slope and intercept.`,
      [S`Slope \(${r3(L2.a)}\): each extra training hour per week goes with about ${Math.abs(r2(L2.a))} min faster.`, S`Intercept \(${r3(L2.b)}\): predicted time with no training — an extrapolation, so treat it with care.`],
      `about ${Math.abs(r2(L2.a))} min faster per extra hour`,
      fig(scatterSvg(P(tr, tt), { xmin: 0, xmax: 12, ymin: 26, ymax: 34, line: L2, xlabel: "training (h/week)", ylabel: "5 km time (min)" }))],
    ["From summary statistics", "For 8 data pairs, Σx = 40, Σy = 96, Σxy = 524, Σx² = 240. Find the regression line.",
      [S`\(a=\frac{8(524)-40(96)}{8(240)-40^2}=\frac{4192-3840}{1920-1600}=\frac{352}{320}=1.1\).`, S`\(\bar x=5\), \(\bar y=12\); \(b=12-1.1(5)=6.5\).`],
      "ŷ = 1.1x + 6.5"],
    ["Slope from r", "Heights and arm spans of a class: r = 0.9, s_x = 8 cm (height), s_y = 10 cm (arm span), x̄ = 165, ȳ = 166. Find the regression line of arm span on height.",
      [S`\(a=r\frac{s_y}{s_x}=0.9\times\frac{10}{8}=1.125\).`, S`\(b=166-1.125(165)=-19.625\).`],
      "ŷ = 1.125x − 19.625"],
  ]),

  practice([
    q("a", "Find the slope a for n = 4, Σx = 10, Σy = 26, Σxy = 77, Σx² = 30.", num(r3((4 * 77 - 10 * 26) / (4 * 30 - 100)), 0.002), "Formula for a.", [S`\(\frac{308-260}{120-100}=2.4\).`], "2.4"),
    q("b", "With a = 2.4, x̄ = 2.5 and ȳ = 6.5, find b.", num(0.5, 0.001), "b = ȳ − a x̄.", [S`\(6.5-6=0.5\).`], "0.5"),
    q("pred", "Using ŷ = 3.2x − 4, predict y when x = 7.", num(18.4, 0.001), "Substitute.", [S`\(22.4-4\).`], "18.4"),
    q("res", "A point (5, 20) and the line ŷ = 3x + 2. Find the residual.", num(3, 0.001), "y − ŷ.", [S`\(20-17=3\).`], "3"),
    q("mean", "The least-squares line always passes through…", choice(["(x̄, ȳ)", "the origin", "the first and last points", "the highest point"], 0), "A property of least squares.", ["The point of means."], "(x̄, ȳ)"),
  ]),

  ...hard([
    ["Two regression lines", "For a data set r = 0.8, x̄ = 20, s_x = 5, ȳ = 50, s_y = 12. (a) Find the regression of y on x. (b) Find the regression of x on y. (c) Are they the same line?",
      [S`(a) \(a=0.8\times\frac{12}{5}=1.92\); \(b=50-1.92(20)=11.6\): \(\hat y=1.92x+11.6\).`, S`(b) \(0.8\times\frac{5}{12}=\frac{1}{3}\): \(\hat x=\frac13 y+20-\frac{50}{3}\approx0.333y+3.333\).`, S`(c) Solving (b) for y gives \(y=3x-10\), a different line; both pass through \((20,50)\). They coincide only when \(|r|=1\).`],
      "different lines through (20, 50)"],
    ["Rescaling the data", `For the training data, times are converted from minutes to seconds (×60). What are the new slope, intercept and r?`,
      [S`Every y is multiplied by 60, so the slope and intercept are multiplied by 60: \(a\approx${r3(L2.a * 60)}\), \(b\approx${r3(L2.b * 60)}\).`, S`\(r\) is unchanged: \(r\approx${r3(corr(tr, tt))}\).`],
      "slope and intercept ×60; r unchanged",
      fig(scatterSvg(P(tr, tt.map((t) => t * 60)), { xmin: 0, xmax: 12, ymin: 1560, ymax: 2040, line: { a: L2.a * 60, b: L2.b * 60 }, xlabel: "training (h/week)", ylabel: "5 km time (s)" }))],
  ], [
    q("hard", "r = −0.6, s_x = 4, s_y = 10. Find the slope of the regression of y on x.", num(-1.5, 0.001), "a = r s_y/s_x.", [S`\(-0.6\times2.5\).`], "-1.5"),
    q("hard", "For n = 6, Σx = 21, Σy = 60, Σxy = 238, Σx² = 91. Find the intercept b (3 decimals).", num(r3(10 - ((6 * 238 - 21 * 60) / (6 * 91 - 441)) * 3.5), 0.002), "Find a, then b = ȳ − a x̄.", [S`\(a=\frac{168}{105}=1.6\); \(b=10-1.6(3.5)\).`], `${r3(10 - 1.6 * 3.5)}`),
    q("hard", "The residuals of a least-squares line always…", choice(["add to 0", "are all positive", "add to n", "equal r"], 0), "Balance about the line.", ["Positive and negative residuals cancel."], "add to 0"),
  ]),

  wrapUp({
    qas: [
      ["What does least squares minimize?", "The sum of the squared residuals."],
      ["How do I find b?", "b = ȳ − a x̄, after finding a."],
      ["What does the slope mean?", "The predicted change in y for each increase of 1 in x."],
      ["What is a residual?", "Observed y minus predicted ŷ."],
      ["How are a and r related?", "a = r s_y/s_x; they have the same sign."],
    ],
    summary: [
      "ŷ = ax + b; a = [nΣxy − ΣxΣy]/[nΣx² − (Σx)²]; b = ȳ − a x̄.",
      "The line passes through (x̄, ȳ); residuals sum to 0.",
      "Interpret slope and intercept in context with units.",
      "a = r·s_y/s_x.",
    ],
    next: "6.3 measures how well the line fits with r² and uses it to predict.",
  }),
];
