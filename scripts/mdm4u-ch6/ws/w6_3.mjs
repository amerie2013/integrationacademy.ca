// MDM4U Worksheet 6.3 — The Coefficient of Determination & Prediction (teacher edition)
import { svgT, scatterSvg, barsSvg } from "./figT.mjs";
import { linreg, corr, sum, mean } from "../../mdm4u/count.mjs";

const S = String.raw;
const r3 = (v) => Math.round(v * 1000) / 1000;
const r2 = (v) => Math.round(v * 100) / 100;
const P = (xs, ys) => xs.map((x, i) => [x, ys[i]]);
const x1 = [2, 4, 6, 8, 10], y1 = [5, 6, 10, 11, 13], L1 = linreg(x1, y1), m1 = mean(y1);
const sst = sum(y1.map((y) => (y - m1) ** 2)), sse = sum(y1.map((y, i) => (y - (L1.a * x1[i] + L1.b)) ** 2));
const tmp = [12, 15, 18, 21, 24, 27, 30], kwh = [62, 55, 50, 47, 49, 56, 66]; // curved: energy use vs temperature
const dist = [5, 10, 15, 20, 25, 30], fare = [9.5, 14.8, 19.2, 25.1, 29.6, 35.0], Lf = linreg(dist, fare);

const EXAMPLES = [
  { title: "r² from r", q: "r = 0.88. Find and interpret r².", steps: [S`$0.88^2=0.7744$.`], ans: "about 77% of the variation in y is explained by x" },
  { title: "Negative r", q: "r = −0.6. Find r².", steps: [S`$(-0.6)^2=0.36$.`], ans: "0.36" },
  { title: "SST and SSE", q: `For x: ${x1.join(", ")}; y: ${y1.join(", ")}, the line is ŷ = ${r3(L1.a)}x + ${r3(L1.b)}. Find SST, SSE and r².`, steps: [S`$\bar y=${m1}$; $SST=${r2(sst)}$.`, S`$SSE\approx${r2(sse)}$; $r^2=1-\frac{SSE}{SST}$.`], ans: `r² ≈ ${r3(1 - sse / sst)}` },
  { title: "Explained variation", q: "Show the split of SST into explained and unexplained parts for example 3.", fig: svgT(barsSvg([r2(sst), r2(sst - sse), r2(sse)], { labels: ["SST", "explained", "SSE"], top: true }), 5), steps: ["Explained = SST − SSE."], ans: `${r2(sst - sse)} explained, ${r2(sse)} not` },
  { title: "Interpolation", q: `Taxi fares (dollars) against distance (km): ${lineStr(Lf)}. Predict the fare for 18 km.`, steps: [S`$\hat y\approx${r2(Lf.a * 18 + Lf.b)}$; 18 is within 5–30.`], ans: `about ${r2(Lf.a * 18 + Lf.b)} dollars (interpolation)` },
  { title: "Extrapolation", q: "Use the taxi line to predict the fare for 200 km. Comment.", steps: [S`$\hat y\approx${r2(Lf.a * 200 + Lf.b)}$.`, "Far outside 5–30 km: long trips are often priced differently."], ans: "unreliable extrapolation" },
  { title: "High r² is not enough", q: "Daily energy use against outdoor temperature falls and then rises (heating, then cooling). Why is a line a poor model even if r² were moderate?", fig: svgT(scatterSvg(P(tmp, kwh), { xmin: 10, xmax: 32, ymin: 40, ymax: 70, xlabel: "temperature (°C)", ylabel: "energy (kWh)" }), 6), steps: [S`The pattern is curved (U-shaped); $r\approx${r3(corr(tmp, kwh))}$ hides it.`], ans: "use a curved model" },
  { title: "Finding r from r²", q: "r² = 0.81 and the regression slope is −2.3. Find r.", steps: ["r has the sign of the slope."], ans: "r = −0.9" },
  { title: "Comparing predictors", q: "Marks are predicted from attendance (r = 0.55) and from homework completion (r = 0.68). Compare the variation explained.", steps: [S`$0.3025$ vs $0.4624$.`], ans: "homework explains about 46%, attendance about 30%" },
];
function lineStr(L) { return `ŷ = ${r3(L.a)}x ${L.b < 0 ? "−" : "+"} ${r3(Math.abs(L.b))}`; }

const PROBLEMS = [
  { level: 1, q: "r = 0.7. Find r².", ans: "0.49" },
  { level: 1, q: "SST = 250, SSE = 50. Find r².", ans: "0.8" },
  { level: 1, q: "A line is fitted for x from 0 to 20. Is a prediction at x = 35 interpolation or extrapolation?", ans: "extrapolation" },
  { level: 2, q: "r² = 0.64 and the slope is positive. Find r and interpret r².", ans: "r = 0.8; 64% of the variation explained" },
  { level: 2, q: "Find r² for x: 1, 2, 3, 4, 5; y: 2, 3, 5, 6, 9.", ans: `${r3(corr([1, 2, 3, 4, 5], [2, 3, 5, 6, 9]) ** 2)}` },
  { level: 2, q: "Use ŷ = 4.2x + 15 (x from 2 to 12) to predict y at x = 7 and x = 30. Comment on each.", ans: "44.4 (interpolation); 141 (extrapolation, unreliable)" },
  { level: 2, q: "Explain why r² cannot be negative for a line of best fit.", ans: "it is the square of r (equivalently SSE ≤ SST)" },
  { level: 2, q: "The graph shows a line fitted to data. Estimate whether r² is closer to 0.2 or 0.95.", fig: svgT(scatterSvg(P(dist, fare), { xmin: 0, xmax: 35, ymin: 0, ymax: 40, line: Lf }), 5.5), ans: "0.95: the points lie very close to the line" },
  { level: 3, space: 4.5, q: "SSE = 18 and r² = 0.91. Find SST and the explained variation.", ans: "SST = 200; explained = 182" },
  { level: 3, space: 4.5, q: "Model A has r = −0.9 and model B has r = 0.8 for the same response. Which explains more variation, and how many times as much?", ans: `A: 0.81 vs 0.64, about ${r2(0.81 / 0.64)} times` },
  { level: 3, space: 4.5, q: "A child's growth from age 2 to 10 is modelled by ŷ = 6.1x + 80 (cm). Predict the height at 30 years and explain the problem.", ans: "263 cm — growth stops; extrapolation" },
  { level: 3, space: 4.5, q: "If all the residuals of a regression are 0, what are SSE, r² and |r|? Describe the scatter plot.", ans: "0, 1, 1; all points on the line" },
  { level: 3, space: 4.5, q: "Explain how a regression can have a high r² and still give poor predictions.", ans: "curved pattern, extrapolation, influential points, or changing conditions" },
];

export const WS = {
  code: "6.3",
  title: "The Coefficient of Determination & Prediction",
  bigideas: S`The coefficient of determination $r^2=1-\frac{SSE}{SST}$ is the proportion of variation in $y$ explained by the linear relationship. Predictions inside the data range (interpolation) are reasonable when $r^2$ is high and the pattern is linear; predictions outside it (extrapolation) are risky.`,
  goals: ["Compute and interpret r².", "Use SSE and SST.", "Predict with the line.", "Judge reliability."],
  curriculum: "D2.3, D2.5",
  vocab: [["r squared", "proportion of variation explained"], ["SST", "total sum of squares"], ["SSE", "sum of squared residuals"], ["Extrapolation", "predicting outside the data"]],
  hook: "A line fitted to your height from age 2 to 10 says you will be 3 metres tall at 30. What went wrong?",
  concepts: [
    ["1. r squared", S`$r^2=1-\frac{SSE}{SST}$; as a percent of variation explained.`],
    ["2. Prediction", "Substitute x into the line."],
    ["3. Range", "Interpolate inside the data; avoid extrapolation."],
  ],
  tips: ["Square r, keep r's sign separately.", "State r² as variation explained.", "Check the data range.", "Look at the plot too.", "Context limits every model."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
