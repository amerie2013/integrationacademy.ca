// IB AA SL chapter 7 written-response (long_answer) questions for printed chapter tests (Part C), each with a figure.
// Numerical answers in the feedback are computed from the data with st() so they always match.
import { planeDoc, P } from "../mcr3u-ch1/bank/fig.mjs";
import { st } from "./bank/st.mjs";

const T = { 1: "7.1 Scatter Diagrams and Correlation", 2: "7.2 Pearson's Correlation Coefficient", 3: "7.3 Lines of Best Fit and Regression" };
const W = (t, difficulty, points, prompt, feedback, fig) => ({ topic: T[t], difficulty, points, prompt, feedback, kind: "long_answer", answer: null, choices: null, fig });
const S = String.raw;
const pts = (xs, ys, color = "violet") => xs.map((x, i) => ({ x, y: ys[i], color }));
const f = (v, d = 3) => String(Math.round(v * 10 ** d) / 10 ** d);

const W1 = [[2, 3, 5, 6, 8, 10], [40, 45, 52, 55, 61, 70]], w1 = st(...W1);
const W2 = [[1, 2, 3, 4, 5], [3, 5, 4, 7, 9]], w2 = st(...W2);
const W3 = [[1, 2, 3, 4, 5, 6, 7], [21, 19, 18, 15, 13, 12, 9]], w3 = st(...W3);
const W4 = [[10, 15, 20, 25, 30, 35], [62, 70, 75, 85, 90, 98]], w4 = st(...W4);

export const WRITTEN = [
  W(1, "medium", 4, S`The table gives hours of practice $x$ and points scored $y$: $x$: 2, 3, 5, 6, 8, 10; $y$: 40, 45, 52, 55, 61, 70 (graphed). (a) Identify the explanatory variable. (b) Find the mean point. (c) Describe the correlation.`,
    S`(a) hours of practice. (b) $(${f(w1.mx, 2)},${f(w1.my, 2)})$. (c) strong positive linear correlation: more practice goes with more points. [1, 2, 1.]`,
    planeDoc({ view: { xmin: 0, xmax: 12, ymin: 35, ymax: 75 }, points: [...pts(...W1), P(w1.mx, w1.my, "mean", "amber")], step: { x: 1, y: 5 } })),
  W(1, "hard", 5, S`Across 25 countries, the number of mobile phones per person and life expectancy are strongly positively correlated (graphed). (a) Describe the correlation. (b) Does owning a phone increase life expectancy? Explain. (c) Name a lurking variable and explain how it could produce the pattern.`,
    S`(a) strong positive linear correlation. (b) no — correlation does not show cause. (c) national wealth: richer countries have more phones and better healthcare, nutrition and sanitation. [1, 2, 2.]`,
    planeDoc({ view: { xmin: 0, xmax: 1.6, ymin: 50, ymax: 85 }, points: pts([0.2, 0.3, 0.35, 0.45, 0.5, 0.6, 0.7, 0.75, 0.85, 0.9, 1, 1.1, 1.2, 1.3, 1.4], [55, 58, 57, 62, 63, 66, 68, 67, 71, 72, 75, 77, 78, 80, 82]), step: { x: 0.2, y: 5 } })),
  W(2, "medium", 4, S`For the data $x$: 1, 2, 3, 4, 5 and $y$: 3, 5, 4, 7, 9 (graphed): (a) find $S_{xy}$, $S_{xx}$ and $S_{yy}$; (b) calculate $r$; (c) interpret $r$.`,
    S`(a) $S_{xy}=${f(w2.sxy)}$, $S_{xx}=${f(w2.sxx)}$, $S_{yy}=${f(w2.syy)}$. (b) $r=${f(w2.r)}$. (c) strong positive linear correlation. [2, 1, 1.]`,
    planeDoc({ view: { xmin: 0, xmax: 6, ymin: 0, ymax: 10 }, points: pts(...W2), step: { x: 1, y: 1 } })),
  W(2, "hard", 5, S`For $x$: 1, 2, 3, 4, 5, 6, 7 and $y$: 21, 19, 18, 15, 13, 12, 9 (graphed): (a) find $r$ with a GDC and interpret it. (b) A point (8, 30) is added. Without calculating, describe the effect on $r$. (c) Calculate the new $r$ and comment.`,
    S`(a) $r=${f(w3.r)}$: strong negative linear correlation. (b) the point is far above the downward trend, so $|r|$ will fall sharply. (c) $r=${f(st([...W3[0], 8], [...W3[1], 30]).r)}$ — one point changes the conclusion; investigate it. [2, 1, 2.]`,
    planeDoc({ view: { xmin: 0, xmax: 9, ymin: 5, ymax: 32 }, points: [...pts(...W3), P(8, 30, "(8, 30)", "red")], step: { x: 1, y: 5 } })),
  W(3, "medium", 4, S`Temperature $x$ (°C): 10, 15, 20, 25, 30, 35 and cold drinks sold $y$: 62, 70, 75, 85, 90, 98 (graphed). (a) Find the regression line of $y$ on $x$. (b) Interpret the gradient. (c) Predict sales at 27 °C.`,
    S`(a) $y=${f(w4.a, 2)}+${f(w4.b, 3)}x$. (b) about ${f(w4.b, 2)} more drinks per degree. (c) $${f(w4.a + w4.b * 27, 1)}$ drinks (interpolation). [2, 1, 1.]`,
    planeDoc({ view: { xmin: 5, xmax: 40, ymin: 55, ymax: 105 }, points: pts(...W4), lines: [{ m: w4.b, b: w4.a, color: "red" }], step: { x: 5, y: 5 } })),
  W(3, "hard", 5, S`For the drinks data ($x$: 10, 15, 20, 25, 30, 35; $y$: 62, 70, 75, 85, 90, 98): (a) find $r$. (b) Find the regression line of $x$ on $y$. (c) Estimate the temperature when 80 drinks are sold. (d) Comment on using the y-on-x line to predict sales at 50 °C.`,
    S`(a) $r=${f(w4.r)}$. (b) $x=${f(w4.c, 2)}+${f(w4.d, 3)}y$. (c) $${f(w4.c + w4.d * 80, 1)}$ °C. (d) 50 °C is outside 10–35 °C: extrapolation, unreliable. [1, 2, 1, 1.]`,
    planeDoc({ view: { xmin: 5, xmax: 55, ymin: 55, ymax: 140 }, points: pts(...W4), lines: [{ m: w4.b, b: w4.a, color: "red" }], vlines: [{ x: 35, color: "gray", dash: true }], step: { x: 5, y: 10 } })),
];
