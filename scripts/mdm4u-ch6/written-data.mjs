// MDM4U chapter 6 written-response (long_answer) questions for printed chapter tests (Part C), each with a figure.
// Math uses $…$ delimiters; money is written as "dollars".
import { scatterSvg, residualPlotSvg, tableSvg, barsSvg, boxPlotSvg, boxTreeSvg } from "../mdm4u/figs.mjs";
import { corr, linreg, expreg, quadreg, rsq, sum, mean, median, quartiles } from "../mdm4u/count.mjs";

const T = {
  1: "6.1 Scatter Plots & Correlation", 2: "6.2 Correlation & Linear Regression", 3: "6.3 The Coefficient of Determination & Prediction",
  4: "6.4 Non-Linear Regression & Modelling", 5: "6.5 Correlation vs Causation", 6: "6.6 Residuals, Outliers & Hidden Variables",
  7: "6.7 Comparing Groups & Contingency Tables",
};
const W = (t, difficulty, points, prompt, feedback, fig) => ({ topic: T[t], difficulty, points, prompt, feedback, kind: "long_answer", answer: null, choices: null, fig });
const S = String.raw;
const r3 = (v) => Math.round(v * 1000) / 1000;
const r2 = (v) => Math.round(v * 100) / 100;
const P = (xs, ys) => xs.map((x, i) => [x, ys[i]]);

const sx = [3, 5, 6, 8, 10, 11], sy = [62, 68, 70, 77, 83, 85]; // weekly practice hours vs test score
const Ls = linreg(sx, sy);
const hx = [1, 2, 3, 4, 5, 6, 7, 8], hy = [8.1, 9.4, 11.2, 12.0, 13.9, 15.1, 16.0, 18.2]; // seedling height (cm) by week
const Lh = linreg(hx, hy);
const ex = [0, 1, 2, 3, 4, 5], ey = [20, 27, 35, 46, 61, 80]; // followers (hundreds)
const Ee = expreg(ex, ey), Le = linreg(ex, ey);
const qx = [10, 15, 20, 25, 30, 35, 40], qy = [12, 21, 27, 30, 28, 23, 14]; // crop yield vs fertilizer (kg)
const Qq = quadreg(qx, qy);
const ox = [2, 3, 4, 5, 6, 7, 16], oy = [30, 34, 37, 41, 45, 48, 52];
const Lo = linreg(ox, oy), Lo2 = linreg(ox.slice(0, -1), oy.slice(0, -1));

export const WRITTEN = [
  W(1, "medium", 4, S`The table shows weekly practice hours $x$ and test scores $y$ for six students. (a) Identify the explanatory and response variables. (b) Describe the scatter plot. (c) Calculate $r$ and interpret it.`,
    S`(a) $x$ practice hours (explanatory), $y$ score (response). (b) strong positive linear, no outliers. (c) $r\approx${r3(corr(sx, sy))}$: a strong positive linear correlation. [1, 1, 2.]`,
    tableSvg([["hours", ...sx.map(String)], ["score", ...sy.map(String)]])),
  W(1, "hard", 5, S`(a) Sketch three scatter plots with $r\approx0.9$, $r\approx-0.5$ and $r\approx0$. (b) Explain why $r=0$ does not mean that $x$ and $y$ are unrelated. (c) Explain how one outlier can change $r$ greatly in a small data set, with a numerical example.`,
    S`(a) tight rising band; loose falling cloud; shapeless cloud (or a U-shape). (b) $r$ measures only linear association; a perfect curve can give $r=0$. (c) e.g. (1, 5), (2, 4), (3, 6), (4, 5), (5, 4) has $r\approx${r3(corr([1, 2, 3, 4, 5], [5, 4, 6, 5, 4]))}$; adding (12, 15) gives $r\approx${r3(corr([1, 2, 3, 4, 5, 12], [5, 4, 6, 5, 4, 15]))}$. [2, 1, 2.]`,
    scatterSvg([[1, 5], [2, 4], [3, 6], [4, 5], [5, 4], [12, 15]], { xmin: 0, xmax: 14, ymin: 0, ymax: 18, hl: [5] })),
  W(2, "medium", 5, S`A seedling's height (cm) is measured weekly (weeks 1–8): ${hy.join(", ")}. (a) Find the least-squares line. (b) Interpret the slope and intercept. (c) Find the residual for week 4.`,
    S`(a) $\hat y\approx${r3(Lh.a)}x+${r3(Lh.b)}$. (b) grows about ${r2(Lh.a)} cm per week; about ${r2(Lh.b)} cm at week 0 (when planted). (c) $12.0-${r2(Lh.a * 4 + Lh.b)}\approx${r2(12 - (Lh.a * 4 + Lh.b))}$ cm. [2, 2, 1.]`,
    scatterSvg(P(hx, hy), { xmin: 0, xmax: 9, ymin: 0, ymax: 20, line: Lh, xlabel: "week", ylabel: "height (cm)" })),
  W(2, "hard", 5, S`For a data set, $r=0.8$, $\bar x=24$, $s_x=6$, $\bar y=150$, $s_y=30$. (a) Find the regression line of $y$ on $x$. (b) Predict $y$ when $x=30$. (c) Find the regression line of $x$ on $y$ and explain why it is a different line.`,
    S`(a) $a=0.8\cdot\frac{30}{6}=4$, $b=150-96=54$: $\hat y=4x+54$. (b) $174$. (c) slope $0.8\cdot\frac{6}{30}=0.16$: $\hat x=0.16y+0$; solved for $y$ it is $y=6.25x$, a different line, because each minimizes squared errors in a different direction; they coincide only if $|r|=1$. [2, 1, 2.]`,
    scatterSvg([[16, 120], [20, 140], [24, 148], [28, 168], [32, 175]], { xmin: 10, xmax: 36, ymin: 90, ymax: 210, line: { a: 4, b: 54 } })),
  W(3, "medium", 4, S`For the seedling data (weeks 1–8: ${hy.join(", ")}), (a) find $r^2$ and interpret it. (b) Predict the height at week 6.5 and at week 30. (c) Comment on each prediction.`,
    S`(a) $r^2\approx${r3(corr(hx, hy) ** 2)}$: about ${Math.round(corr(hx, hy) ** 2 * 100)}% of the variation in height is explained by time. (b) $\approx${r2(Lh.a * 6.5 + Lh.b)}$ cm and $\approx${r2(Lh.a * 30 + Lh.b)}$ cm. (c) week 6.5 is interpolation (reliable); week 30 is extrapolation — growth will slow, so it is unreliable. [1, 2, 1.]`,
    scatterSvg(P(hx, hy), { xmin: 0, xmax: 32, ymin: 0, ymax: 60, line: Lh, xlabel: "week", ylabel: "height (cm)" })),
  W(3, "hard", 5, S`For a regression, $SST=360$ and $SSE=54$. (a) Find $r^2$ and $|r|$. (b) The slope is negative; state $r$. (c) Explain what $SSE$ and $SST$ measure, and why $r^2$ cannot exceed 1.`,
    S`(a) $r^2=1-\frac{54}{360}=0.85$; $|r|\approx${r3(Math.sqrt(0.85))}$. (b) $r\approx-${r3(Math.sqrt(0.85))}$. (c) $SST$: total variation of $y$ about $\bar y$; $SSE$: variation left about the line. $0\le SSE\le SST$, so $0\le r^2\le1$. [2, 1, 2.]`,
    barsSvg([360, 306, 54], { labels: ["SST", "explained", "SSE"], top: true })),
  W(4, "medium", 5, S`A channel's followers (hundreds) for months 0–5: ${ey.join(", ")}. (a) Show that the growth is roughly exponential. (b) Fit $\hat y=A\cdot B^x$. (c) State the monthly growth rate and predict month 7.`,
    S`(a) ratios ${ey.slice(1).map((y, i) => r2(y / ey[i])).join(", ")} ≈ constant. (b) $\hat y\approx${r2(Ee.A)}(${r3(Ee.B)})^x$. (c) about ${r2((Ee.B - 1) * 100)}% per month; month 7 ≈ ${Math.round(Ee.A * Ee.B ** 7)} hundred (an extrapolation). [1, 2, 2.]`,
    scatterSvg(P(ex, ey), { xmin: 0, xmax: 6, ymin: 0, ymax: 100, curve: (x) => Ee.A * Ee.B ** x, xlabel: "month", ylabel: "followers (hundreds)" })),
  W(4, "hard", 6, S`Crop yield (bushels per plot) for fertilizer amounts ${qx.join(", ")} kg: ${qy.join(", ")}. (a) Explain why a linear model is unsuitable. (b) Fit a quadratic model. (c) Find the amount of fertilizer that maximizes yield and the maximum yield. (d) Explain why the model should not be used for 80 kg.`,
    S`(a) yield rises then falls; $r\approx${r3(corr(qx, qy))}$ and the residuals would form an arch. (b) $\hat y\approx${r3(Qq.a)}x^2+${r3(Qq.b)}x${Qq.c < 0 ? "" : "+"}${r3(Qq.c)}$, $R^2\approx${r3(rsq(qx, qy, (x) => Qq.a * x * x + Qq.b * x + Qq.c))}$. (c) $x\approx${r2(-Qq.b / (2 * Qq.a))}$ kg, yield $\approx${r2(Qq.c - (Qq.b * Qq.b) / (4 * Qq.a))}$. (d) far outside 10–40 kg; the model predicts negative yield. [1, 2, 2, 1.]`,
    scatterSvg(P(qx, qy), { xmin: 0, xmax: 50, ymin: 0, ymax: 35, curve: (x) => Qq.a * x * x + Qq.b * x + Qq.c, xlabel: "fertilizer (kg)", ylabel: "yield" })),
  W(5, "medium", 4, S`For each, classify the relationship and justify: (a) the number of hours a stove burner is on and the gas used; (b) sales of air conditioners and of lemonade; (c) the number of police officers in a city and the number of crimes (claim: police cause crime); (d) the yearly number of video-game releases and the yearly number of marathons run in a country.`,
    S`(a) cause and effect. (b) common cause (hot weather). (c) reverse cause and effect (or city size as a common cause). (d) accidental (shared time trend). [1 each.]`,
    boxTreeSvg([{ t: "cause and effect", color: "green" }, { t: "common cause", color: "blue" }, { t: "reverse cause and effect", color: "violet" }, { t: "accidental", color: "amber" }, { t: "confounding variable", color: "red" }], { root: "correlation" })),
  W(5, "hard", 6, S`An observational study of 3000 adults finds that those who walk at least 30 minutes a day have a 25% lower rate of heart disease. (a) Explain why the study cannot prove that walking prevents heart disease. (b) Name two confounding variables. (c) Design an experiment to test the claim, including control, random assignment, replication and blinding (where possible). (d) Explain one ethical concern.`,
    S`(a) walkers may differ in diet, weight, smoking, income; association only. (b) e.g. diet, smoking, age. (c) randomly assign sedentary volunteers to a walking program or usual activity for months; measure heart health; large samples; measurers blind to groups. (d) participants must consent and must not be denied care; long-term health risks require monitoring. [1, 1, 3, 1.]`,
    barsSvg([8, 6], { labels: ["walk < 30 min", "walk ≥ 30 min"], top: ["8%", "6%"], ylabel: "% with heart disease", ymax: 10 })),
  W(6, "hard", 6, S`Data: x: ${ox.join(", ")}; y: ${oy.join(", ")}. (a) Find the least-squares line with all points and without (16, 52). (b) Classify (16, 52) as an outlier, an influential point, or both. (c) Draw or describe the residual plot for the line without (16, 52). (d) How should the point be handled in a report?`,
    S`(a) with: $\hat y\approx${r3(Lo.a)}x+${r3(Lo.b)}$; without: $\hat y\approx${r3(Lo2.a)}x+${r3(Lo2.b)}$. (b) influential: its x is far from the rest and it flattens the slope (its residual with the full fit is small). (c) random scatter around 0 for the six points. (d) check whether it is valid; report both fits and explain. [2, 1, 2, 1.]`,
    scatterSvg(P(ox, oy), { xmin: 0, xmax: 18, ymin: 20, ymax: 60, line: Lo, hl: [6] })),
  W(6, "medium", 4, S`The residual plot for a linear fit of a car's stopping distance against speed is shown. (a) Describe the pattern. (b) What does it suggest about the model? (c) Suggest a better model and explain why it makes physical sense.`,
    S`(a) an upward U-shape: residuals positive at both ends, negative in the middle. (b) a line misses the curvature. (c) a quadratic model: stopping distance grows with the square of speed. [1, 1, 2.]`,
    residualPlotSvg([[20, 6], [40, 18], [60, 36], [80, 61], [100, 92], [120, 130]], linreg([20, 40, 60, 80, 100, 120], [6, 18, 36, 61, 92, 130]), { xmin: 10, xmax: 130, xlabel: "speed (km/h)" })),
  W(7, "hard", 6, S`Two hospitals report success rates. Hospital M: routine 380 of 400, complex 65 of 100. Hospital N: routine 97 of 100, complex 280 of 400. (a) Find each hospital's rate for each type and overall. (b) Explain the apparent contradiction. (c) Which hospital would you choose for a complex operation? (d) What should a fair comparison report?`,
    S`(a) M: routine 95%, complex 65%, overall $\frac{445}{500}=89\%$. N: routine 97%, complex 70%, overall $\frac{377}{500}=75.4\%$. (b) N is better for each type of case, but most of N's patients are complex cases, which succeed less often, so N's overall rate is lower (Simpson's paradox). (c) N (70% vs 65%). (d) rates within each type of case, plus the case mix. [3, 1, 1, 1.]`,
    tableSvg([["", "routine", "complex"], ["Hospital M", "380/400", "65/100"], ["Hospital N", "97/100", "280/400"]])),
];
