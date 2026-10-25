// MDM4U 6.3 — The Coefficient of Determination & Prediction: r² as the proportion of variation in y explained by
// the line, r² = 1 − SSE/SST, predicting with ŷ, interpolation versus extrapolation, and judging how much to trust
// a prediction
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, fig, scatterSvg, barsSvg } from "./lib.mjs";
import { corr, linreg, sum, mean } from "../mdm4u/count.mjs";

export const TITLE = "6.3 The Coefficient of Determination & Prediction";
export const ID = "12dfce67-ef89-426a-bf24-74a59f8c3458";
const S = String.raw;
const r3 = (v) => Math.round(v * 1000) / 1000;
const r2 = (v) => Math.round(v * 100) / 100;
const P = (xs, ys) => xs.map((x, i) => [x, ys[i]]);

const ax = [1, 2, 3, 4, 5], ay = [2, 4, 5, 4, 5];
const La = linreg(ax, ay), my = mean(ay), sst = sum(ay.map((y) => (y - my) ** 2)), sse = sum(ay.map((y, i) => (y - (La.a * ax[i] + La.b)) ** 2));
const kx = [1, 2, 3, 4, 5, 6, 7, 8], ky = [76, 86, 95, 104, 111, 117, 123, 128]; // a child's height (cm) by age
const Lk = linreg(kx, ky);
const fx = [10, 15, 20, 25, 30, 35, 40], fy = [2.9, 3.6, 4.4, 5.1, 5.6, 6.5, 7.1]; // phone data (GB) vs hours of video
const Lf = linreg(fx, fy);

export const blocks = () => [
  intro({
    icon: "🎯",
    title: "The Coefficient of Determination & Prediction",
    overview: S`The <strong>coefficient of determination</strong> \(r^2\) tells us what fraction of the variation in the response variable is explained by its linear relationship with the explanatory variable. If \(r=0.9\), then \(r^2=0.81\): 81% of the variation in \(y\) is accounted for by the line, and 19% is left over in the residuals. We then use the line to <strong>predict</strong>: inside the range of the data (<strong>interpolation</strong>) predictions are reasonable; outside it (<strong>extrapolation</strong>) they can be badly wrong.`,
    goals: [
      "calculate and interpret r²;",
      "find r² from SSE and SST;",
      "make predictions with the regression line;",
      "distinguish interpolation from extrapolation;",
      "judge how reliable a prediction is.",
    ],
    curriculum: "D2.3 (interpreting r and r²); D2.5 (interpreting the line of best fit; misuses such as predicting beyond the data)",
    prior: [
      ["0.87² ≈ ?", "0.757."],
      ["ŷ = 2x + 1 at x = 3.5?", "8."],
      ["1 − 40/250 = ?", "0.84."],
    ],
    words: [
      ["r²", "the proportion of variation in y explained by the line", "r² = 0.81 → 81%"],
      ["SST", "total variation Σ(y − ȳ)²", "spread of y about its mean"],
      ["SSE", "unexplained variation Σ(y − ŷ)²", "spread about the line"],
      ["Extrapolation", "predicting outside the range of the data", "a 30-year-old's height from children's data"],
    ],
  }),

  section("📌 Explained and unexplained variation", S`
  \[r^2=1-\frac{SSE}{SST}=1-\frac{\sum (y-\hat y)^2}{\sum (y-\bar y)^2}\]
  ${fig(barsSvg([r2(sst), r2(sst - sse), r2(sse)], { labels: ["SST (total)", "explained", "SSE (left over)"], top: true, ylabel: "sum of squares" }), `for the data in example 2: r² = ${r3(1 - sse / sst)}`)}
  ${keyIdea(S`For a straight-line fit, \(r^2\) is exactly the square of the correlation coefficient. It is always between 0 and 1, and it has no sign: \(r=0.8\) and \(r=-0.8\) both give \(r^2=0.64\).`)}`),

  section("📌 Interpolate, don't extrapolate", S`
  ${fig(scatterSvg(P(kx, ky), { xmin: 0, xmax: 20, ymin: 60, ymax: 200, line: Lk, xlabel: "age (years)", ylabel: "height (cm)" }), "a line fitted to ages 1–8 predicts more than 180 cm at age 16 — and keeps growing forever")}
  ${table(["Prediction", "Where", "Reliability"], [["interpolation", "x inside the range of the data", "good if r² is high and the pattern is linear"], ["extrapolation", "x outside the range", "risky: the trend may change"]])}`),

  section("📌 Explore", S`<p>Move the height slider. Inside the data range the prediction is green (interpolation); outside it turns red (extrapolation).</p>`),

  widget("predictionLab", { init: 170 }),

  section("📌 Watch out", watchOut([
    "r² is a proportion; write it as a decimal or a percent of variation explained.",
    "A high r² does not prove cause and effect.",
    "Do not trust predictions far outside the data.",
    "A high r² can still hide a curved pattern — check a residual plot (6.6).",
  ])),

  examples([
    ["Interpreting r²", "For the hours of video watched and the data used (GB) by 7 phone users, r ≈ " + r3(corr(fx, fy)) + ". Find and interpret r².",
      [S`\(r^2\approx${r3(corr(fx, fy) ** 2)}\).`, S`About ${Math.round(corr(fx, fy) ** 2 * 1000) / 10}% of the variation in data use is explained by the linear relationship with hours of video.`],
      `r² ≈ ${r3(corr(fx, fy) ** 2)}`,
      fig(scatterSvg(P(fx, fy), { xmin: 5, xmax: 45, ymin: 2, ymax: 8, line: Lf, xlabel: "hours of video", ylabel: "data used (GB)" }))],
    ["r² from sums of squares", `For x: ${ax.join(", ")} and y: ${ay.join(", ")}, the line is ŷ = ${La.a}x + ${r3(La.b)}. Find SST, SSE and r².`,
      [S`\(\bar y=${my}\); \(SST=${r2(sst)}\).`, S`Predictions ${ax.map((x) => r2(La.a * x + La.b)).join(", ")}; \(SSE=${r2(sse)}\).`, S`\(r^2=1-\frac{${r2(sse)}}{${r2(sst)}}\approx${r3(1 - sse / sst)}\).`],
      `r² ≈ ${r3(1 - sse / sst)}`],
    ["Interpolation", `Use ŷ ≈ ${r3(Lf.a)}x + ${r3(Lf.b)} to predict the data used by someone who watches 28 hours of video. Is this interpolation?`,
      [S`\(\hat y\approx${r3(Lf.a)}(28)+${r3(Lf.b)}\approx${r2(Lf.a * 28 + Lf.b)}\) GB.`, S`28 is between 10 and 40: interpolation, and \(r^2\) is high, so the prediction is reliable.`],
      `about ${r2(Lf.a * 28 + Lf.b)} GB`],
    ["Extrapolation", `A child's heights at ages 1 to 8 give ŷ ≈ ${r3(Lk.a)}x + ${r3(Lk.b)}. Predict the height at age 40 and comment.`,
      [S`\(\hat y\approx${r3(Lk.a)}(40)+${r3(Lk.b)}\approx${Math.round(Lk.a * 40 + Lk.b)}\) cm.`, S`Absurd: growth stops in the late teens. Age 40 is far outside 1–8, so the line does not apply.`],
      `${Math.round(Lk.a * 40 + Lk.b)} cm — meaningless extrapolation`],
    ["Comparing fits", "Two models predict exam marks: one from hours studied (r = 0.62), one from homework completion (r = −0.71). Which variable explains more of the variation in marks?",
      [S`Compare \(r^2\): \(0.62^2\approx0.384\) and \((-0.71)^2\approx0.504\).`, S`Homework completion explains more (about 50% versus 38%), even though its \(r\) is negative.`],
      "homework completion"],
  ]),

  practice([
    q("r2", "r = −0.8. Find r².", num(0.64, 0.001), "Square it.", [S`\(0.64\).`], "0.64"),
    q("pct", "r² = 0.72. What percent of the variation in y is explained by the line?", num(72, 0.01), "Proportion → percent.", [S`72%.`], "72"),
    q("sse", "SST = 180 and SSE = 27. Find r².", num(0.85, 0.001), "1 − SSE/SST.", [S`\(1-0.15\).`], "0.85"),
    q("r", "r² = 0.49 and the slope is negative. Find r.", num(-0.7, 0.001), "Same sign as the slope.", [S`\(-\sqrt{0.49}\).`], "-0.7"),
    q("extra", "A line fitted for x from 10 to 50 is used at x = 90. This is…", choice(["extrapolation, unreliable", "interpolation, reliable", "a residual", "always accurate if r² is high"], 0), "Outside the range.", ["90 > 50."], "extrapolation"),
  ]),

  ...hard([
    ["Building r² by hand", "For the points (1, 3), (2, 5), (3, 4), (4, 8): (a) find the regression line; (b) find SST and SSE; (c) find r² and check that it equals r².",
      (() => { const xs = [1, 2, 3, 4], ys = [3, 5, 4, 8], L = linreg(xs, ys), m = mean(ys), T = sum(ys.map((y) => (y - m) ** 2)), E = sum(ys.map((y, i) => (y - (L.a * xs[i] + L.b)) ** 2)); return [S`(a) \(a=${r3(L.a)}\), \(b=${r3(L.b)}\).`, S`(b) \(\bar y=${m}\); \(SST=${r2(T)}\); \(SSE\approx${r2(E)}\).`, S`(c) \(r^2=1-\frac{${r2(E)}}{${r2(T)}}\approx${r3(1 - E / T)}\); \(r\approx${r3(corr(xs, ys))}\) and \(r^2\approx${r3(corr(xs, ys) ** 2)}\) — they agree.`]; })(),
      `r² ≈ ${r3(corr([1, 2, 3, 4], [3, 5, 4, 8]) ** 2)}`,
      fig(scatterSvg([[1, 3], [2, 5], [3, 4], [4, 8]], { xmin: 0, xmax: 5, ymin: 0, ymax: 10, line: linreg([1, 2, 3, 4], [3, 5, 4, 8]), residuals: true }))],
    ["How far can we trust it?", "A store's monthly sales grew from 40 to 76 thousand dollars over 12 months, with r² = 0.97. The manager uses the line to forecast sales 5 years ahead. Give two reasons to be cautious.",
      [S`Five years is far outside the 12 months of data: extrapolation.`, S`Conditions change (competition, the economy, market saturation), and a linear trend cannot continue forever. A high \(r^2\) describes the past data only.`],
      "extrapolation; conditions change"],
  ], [
    q("hard", "SSE = 12 and r² = 0.85. Find SST.", num(80, 0.01), "1 − 12/SST = 0.85.", [S`\(SST=\frac{12}{0.15}\).`], "80"),
    q("hard", "Model A has r = 0.5 and model B has r = 0.75. How many times as large is B's r² as A's?", num(2.25, 0.001), "Square both.", [S`\(\frac{0.5625}{0.25}\).`], "2.25"),
    q("hard", "If every residual is 0, then r² equals…", num(1, 0.001), "SSE = 0.", [S`\(1-0\).`], "1"),
  ]),

  wrapUp({
    qas: [
      ["What does r² measure?", "The proportion of the variation in y explained by the linear relationship with x."],
      ["How is r² related to SSE and SST?", "r² = 1 − SSE/SST."],
      ["Can r² be negative?", "No; for a line of best fit it is between 0 and 1."],
      ["What is extrapolation?", "Predicting outside the range of the data — often unreliable."],
      ["Does a high r² mean x causes y?", "No."],
    ],
    summary: [
      "r² = (r)² = 1 − SSE/SST.",
      "Interpret: “r² × 100% of the variation in y is explained by x”.",
      "Interpolate within the data range; avoid extrapolating.",
      "Judge predictions by r², the pattern and the context.",
    ],
    next: "6.4 fits curves when the pattern is not linear.",
  }),
];
