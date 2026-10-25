// MDM4U 6.4 — Non-Linear Regression & Modelling: recognizing curved patterns, quadratic and exponential regression
// (by technology, and exponential by straightening with ln y), comparing models with R² and residual patterns,
// interpreting parameters, and predicting with care
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, fig, scatterSvg, residualPlotSvg } from "./lib.mjs";
import { linreg, expreg, quadreg, rsq, corr } from "../mdm4u/count.mjs";

export const TITLE = "6.4 Non-Linear Regression & Modelling";
export const ID = "825c6082-05f9-4e1c-a5bd-297a4cad9b86";
const S = String.raw;
const r3 = (v) => Math.round(v * 1000) / 1000;
const r2 = (v) => Math.round(v * 100) / 100;
const P = (xs, ys) => xs.map((x, i) => [x, ys[i]]);
const sg = (v, k = 3) => (v < 0 ? `-${Math.abs(Math.round(v * 10 ** k) / 10 ** k)}` : `+${Math.round(v * 10 ** k) / 10 ** k}`);

const px = [0, 1, 2, 3, 4, 5], py = [120, 150, 190, 240, 300, 375]; // town population (hundreds) by year
const E1 = expreg(px, py);
const tx = [0, 0.5, 1, 1.5, 2, 2.5, 3], ty = [1.5, 8.9, 13.8, 16.2, 16.1, 13.6, 8.4]; // height (m) of a kicked ball
const Q1 = quadreg(tx, ty), vx = -Q1.b / (2 * Q1.a), vy = Q1.a * vx * vx + Q1.b * vx + Q1.c;
const cx = [1, 2, 3, 4, 5, 6, 7], cy = [3.1, 4.4, 6.5, 9.4, 13.6, 19.2, 27.5]; // value of a collectible (hundreds)
const Lc = linreg(cx, cy), Ec = expreg(cx, cy);

export const blocks = () => [
  intro({
    icon: "〰️",
    title: "Non-Linear Regression & Modelling",
    overview: S`Not every relationship is a straight line. A ball's height rises and falls (<strong>quadratic</strong>); a population or an investment grows by a constant percent (<strong>exponential</strong>). Technology fits these curves by least squares just as it fits lines, and reports \(R^2\). To choose a model, look at the shape of the scatter plot, the pattern of the residuals, the context, and only then at \(R^2\).`,
    goals: [
      "recognize linear, quadratic and exponential patterns;",
      "fit quadratic and exponential models with technology;",
      "straighten exponential data with ln y;",
      "compare models using R² and residual plots;",
      "interpret model parameters and predict carefully.",
    ],
    curriculum: "D2.2 (curves of best fit using technology); D2.5 (interpreting models and their limitations)",
    prior: [
      ["Growth factor for 25% growth?", "1.25."],
      ["Vertex x of y = −2x² + 8x + 1?", "2."],
      ["ln(e³) = ?", "3."],
    ],
    words: [
      ["Quadratic model", "ŷ = ax² + bx + c", "the path of a ball"],
      ["Exponential model", "ŷ = A·Bˣ (B = growth factor)", "B = 1.25: 25% growth per year"],
      ["R²", "proportion of variation explained by the model", "R² = 0.998"],
      ["Residual pattern", "a curve in the residuals means the model's form is wrong", "U-shaped residuals"],
    ],
  }),

  section("📌 Matching the model to the shape", S`
  ${table(["Pattern in the data", "Model", "Clue in context"], [["equal changes in y for equal steps in x", "linear ŷ = ax + b", "constant rate (dollars per hour)"], ["rises then falls (or falls then rises)", "quadratic ŷ = ax² + bx + c", "projectiles, revenue vs price"], ["equal ratios y₂/y₁ for equal steps", "exponential ŷ = A·Bˣ", "percent growth or decay"]])}
  ${fig(scatterSvg(P(cx, cy), { xmin: 0, xmax: 8, ymin: 0, ymax: 30, line: Lc, xlabel: "years since purchase", ylabel: "value (hundreds)" }), `a line fits curved data poorly (r² ≈ ${r3(corr(cx, cy) ** 2)}) …`)}
  ${fig(residualPlotSvg(P(cx, cy), Lc, { xmin: 0, xmax: 8, xlabel: "years since purchase" }), "… and its residuals form a U: a clear sign that a curve is needed")}`),

  section("📌 Straightening exponential data", S`
  <p>If \(y=A\cdot B^x\), then \(\ln y=\ln A+x\ln B\): a straight line in \(x\) and \(\ln y\). Fit a line to \((x,\ln y)\), then \(A=e^{b}\) and \(B=e^{a}\).</p>
  ${keyIdea(S`Choose the model that fits the shape <em>and</em> makes sense in context. A higher-degree model can always raise \(R^2\) a little, but it may predict nonsense outside the data.`)}`),

  section("📌 Explore", S`<p>Pick a data set and try each model. Watch the curve and \(R^2\). Which model suits each context?</p>`),

  widget("modelChoice", { init: "exponential" }),

  section("📌 Watch out", watchOut([
    "Look at the scatter plot before choosing a model.",
    "R² values from different model types are only a rough guide; check the residuals.",
    "In ŷ = A·Bˣ, B > 1 is growth and 0 < B < 1 is decay; the percent rate is (B − 1) × 100%.",
    "Curved models can behave wildly outside the data — extrapolate even more carefully.",
  ])),

  examples([
    ["Recognizing exponential growth", `A town's population (hundreds) for years 0 to 5 is ${py.join(", ")}. Show that the growth is roughly exponential.`,
      [S`Ratios: ${py.slice(1).map((y, i) => r2(y / py[i])).join(", ")} — all close to 1.25.`, S`Equal ratios for equal steps: exponential, about 25% per year.`],
      "roughly constant ratio ≈ 1.25",
      fig(scatterSvg(P(px, py), { xmin: 0, xmax: 6, ymin: 0, ymax: 420, curve: (x) => E1.A * E1.B ** x, xlabel: "year", ylabel: "population (hundreds)" }))],
    ["Exponential regression", "Fit an exponential model to the town data (by technology or with ln y) and interpret B.",
      [S`Line through \((x,\ln y)\): slope \(\approx${r3(Math.log(E1.B))}\), intercept \(\approx${r3(Math.log(E1.A))}\).`, S`\(A=e^{${r3(Math.log(E1.A))}}\approx${r2(E1.A)}\), \(B=e^{${r3(Math.log(E1.B))}}\approx${r3(E1.B)}\).`, S`\(\hat y\approx${r2(E1.A)}(${r3(E1.B)})^x\): growth of about ${r2((E1.B - 1) * 100)}% per year.`],
      `ŷ ≈ ${r2(E1.A)}(${r3(E1.B)})^x`],
    ["Quadratic regression", `A kicked ball's height (m) at times 0 to 3 s (every 0.5 s) is ${ty.join(", ")}. Fit a quadratic and find the maximum height.`,
      [S`Technology: \(\hat y\approx${r3(Q1.a)}x^2${sg(Q1.b)}x${sg(Q1.c)}\), \(R^2\approx${r3(rsq(tx, ty, (x) => Q1.a * x * x + Q1.b * x + Q1.c))}\).`, S`Vertex: \(x=-\frac{b}{2a}\approx${r2(vx)}\) s, \(\hat y\approx${r2(vy)}\) m.`],
      `maximum ≈ ${r2(vy)} m at ≈ ${r2(vx)} s`,
      fig(scatterSvg(P(tx, ty), { xmin: 0, xmax: 3.5, ymin: 0, ymax: 20, curve: (x) => Q1.a * x * x + Q1.b * x + Q1.c, xlabel: "time (s)", ylabel: "height (m)" }))],
    ["Comparing models", "For the collectible's value (hundreds of dollars) over 7 years, compare a linear and an exponential model.",
      [S`Linear: \(r^2\approx${r3(corr(cx, cy) ** 2)}\), residuals U-shaped.`, S`Exponential: \(\hat y\approx${r2(Ec.A)}(${r3(Ec.B)})^x\), \(R^2\approx${r3(rsq(cx, cy, (x) => Ec.A * Ec.B ** x))}\).`, S`The exponential model fits the shape and the context (value rising by a percent each year).`],
      "exponential"],
    ["Predicting", `Use the exponential model for the town to predict the population in year 8. Is the prediction reliable?`,
      [S`\(\hat y\approx${r2(E1.A)}(${r3(E1.B)})^8\approx${Math.round(E1.A * E1.B ** 8)}\) hundred.`, S`Year 8 is outside 0–5: extrapolation. Growth may slow (housing, jobs), so treat it as a rough estimate.`],
      `about ${Math.round(E1.A * E1.B ** 8)} hundred people`],
  ]),

  practice([
    q("shape", "Data rise quickly, level off, then fall. The best model is likely…", choice(["quadratic", "linear", "exponential growth", "no model"], 0), "Rise then fall.", ["A parabola."], "quadratic"),
    q("rate", "In ŷ = 500(1.08)ˣ, what is the growth rate per period, as a percent?", num(8, 0.001), "B − 1.", [S`\(0.08\).`], "8"),
    q("decay", "In ŷ = 90(0.85)ˣ, what percent is lost each period?", num(15, 0.001), "1 − B.", [S`\(0.15\).`], "15"),
    q("pred", "Using ŷ = 40(1.5)ˣ, find ŷ at x = 3.", num(135, 0.01), "40 × 1.5³.", [S`\(40\times3.375\).`], "135"),
    q("resid", "A linear model's residual plot shows a clear U-shape. This means…", choice(["a curved model is needed", "the line fits perfectly", "r is negative", "there are no outliers"], 0), "Pattern in residuals.", ["Systematic curvature."], "a curved model is needed"),
  ]),

  ...hard([
    ["Doubling time", "A colony of cells is modelled by ŷ = 250(1.18)ˣ, x in hours. (a) Find the population after 6 hours. (b) Find the doubling time. (c) Why might the model fail after a day?",
      [S`(a) \(250(1.18)^6\approx${Math.round(250 * 1.18 ** 6)}\).`, S`(b) \(1.18^x=2\Rightarrow x=\frac{\ln2}{\ln1.18}\approx${r2(Math.log(2) / Math.log(1.18))}\) h.`, S`(c) Food and space run out, so growth slows: real growth curves level off.`],
      `about ${r2(Math.log(2) / Math.log(1.18))} hours`],
    ["Straightening data", "For x = 0, 1, 2, 3 the values ln y are 1.10, 1.50, 1.89, 2.30 (very nearly a straight line). Find an exponential model for y.",
      (() => { const L = linreg([0, 1, 2, 3], [1.1, 1.5, 1.89, 2.3]); return [S`Line for \(\ln y\): slope \(\approx${r3(L.a)}\), intercept \(\approx${r3(L.b)}\).`, S`\(A=e^{${r3(L.b)}}\approx${r2(Math.exp(L.b))}\), \(B=e^{${r3(L.a)}}\approx${r3(Math.exp(L.a))}\).`, S`\(\hat y\approx${r2(Math.exp(L.b))}(${r3(Math.exp(L.a))})^x\).`]; })(),
      (() => { const L = linreg([0, 1, 2, 3], [1.1, 1.5, 1.89, 2.3]); return `ŷ ≈ ${r2(Math.exp(L.b))}(${r3(Math.exp(L.a))})^x`; })(),
      fig(scatterSvg([[0, 1.1], [1, 1.5], [2, 1.89], [3, 2.3]], { xmin: 0, xmax: 4, ymin: 0, ymax: 3, line: linreg([0, 1, 2, 3], [1.1, 1.5, 1.89, 2.3]), xlabel: "x", ylabel: "ln y" }), "after taking ln y the points lie on a line")],
  ], [
    q("hard", "y = A·Bˣ passes through (0, 80) and (2, 125). Find B.", num(1.25, 0.001), "80B² = 125.", [S`\(B^2=1.5625\).`], "1.25"),
    q("hard", "A quadratic model is ŷ = −4x² + 32x + 5. Find the maximum value of ŷ.", num(69, 0.001), "Vertex at x = 4.", [S`\(-64+128+5\).`], "69"),
    q("hard", "How many years for ŷ = 1000(1.06)ˣ to reach 2000 (2 decimals)?", num(r2(Math.log(2) / Math.log(1.06)), 0.01), "ln 2 / ln 1.06.", [S`\(\approx11.9\).`], `${r2(Math.log(2) / Math.log(1.06))}`),
  ]),

  wrapUp({
    qas: [
      ["How do I choose between models?", "Shape of the plot, residual pattern, context, then R²."],
      ["What does B mean in ŷ = A·Bˣ?", "The growth (B > 1) or decay (B < 1) factor per unit of x."],
      ["How can a line help fit an exponential?", "Fit a line to (x, ln y); then A = e^b and B = e^a."],
      ["What shows that a linear model is wrong?", "A curved pattern in the residual plot."],
      ["Are curved models safe for extrapolation?", "No — they can be even less reliable outside the data."],
    ],
    summary: [
      "Linear: constant differences. Quadratic: rise and fall. Exponential: constant ratios.",
      "Fit by technology; exponential via ln y.",
      "Compare R² and residual plots.",
      "Interpret parameters in context; extrapolate with care.",
    ],
    next: "6.5 asks whether a correlation means that one variable causes the other.",
  }),
];
