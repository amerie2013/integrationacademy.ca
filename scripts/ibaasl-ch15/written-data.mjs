// IB AA SL chapter 15 written-response (long_answer) questions for printed chapter tests (Part C), each with a figure.
import { planeDoc, probDoc } from "./figs15.mjs";

const T = { 1: "15.1 The Assessment Criteria and Choosing a Topic", 2: "15.2 Planning, Research and Using Technology", 3: "15.3 Communicating Mathematics", 4: "15.4 Reflection, Academic Honesty and a Worked Mini-Exploration" };
const W = (t, difficulty, points, prompt, feedback, fig) => ({ topic: T[t], difficulty, points, prompt, feedback, kind: "long_answer", answer: null, choices: null, fig });
const S = String.raw;
const P = (x, y) => ({ x, y, color: "violet" });
const f = (v, d = 3) => String(Math.round(v * 10 ** d) / 10 ** d);
const kS = Math.log(36 / 60) / 10;

export const WRITTEN = [
  W(1, "medium", 4, S`The chart shows a draft's marks. (a) Find the total. (b) Find the marks still available. (c) State which criterion offers the most available marks and suggest one action to improve it.`,
    S`(a) $3+3+1+2+3=12$. (b) $20-12=8$. (c) E (3 available): extend the mathematics with a second model and justify each step. [1, 1, 2.]`,
    probDoc(["A", "B", "C", "D", "E"], [3, 3, 1, 2, 3], { xlab: "criterion", ylab: "marks" })),
  W(1, "hard", 6, S`A student's interest is athletics; their pilot data (shown) are 100 m times over 8 weeks of training. (a) Write a focused research question. (b) Name two areas of SL mathematics it would use. (c) Explain how the question allows marks in criteria C and D.`,
    S`(a) e.g. "Do my 100 m times decrease exponentially towards a limit with training, and what limit does the model predict?" (b) Exponential models with an asymptote; regression and residuals. (c) C: own data and own question; D: reflecting on the model's limit, measurement error and fatigue. [2, 2, 2.]`,
    planeDoc({ view: { xmin: 0, xmax: 9, ymin: 11, ymax: 15 }, step: { x: 1, y: 0.5 }, points: [P(1, 14.4), P(2, 13.8), P(3, 13.3), P(4, 13.0), P(5, 12.7), P(6, 12.55), P(7, 12.45), P(8, 12.4)], xlabel: "week", ylabel: "time (s)" })),
  W(2, "medium", 4, S`Pilot data (shown): $x=1,2,3,4,5$, $y=4,7,9,12,13$. (a) Use technology to find the regression line. (b) Find the residual at $x=3$. (c) Comment on whether a full study is worthwhile.`,
    S`(a) $y=2.3x+2.1$. (b) $9-(6.9+2.1)=0$. (c) $r\approx0.99$: a strong linear trend, so a full study is worthwhile. [2, 1, 1.]`,
    planeDoc({ view: { xmin: 0, xmax: 6, ymin: 0, ymax: 16 }, step: { x: 1, y: 2 }, points: [P(1, 4), P(2, 7), P(3, 9), P(4, 12), P(5, 13)], lines: [{ m: 2.3, b: 2.1, color: "red" }] })),
  W(2, "hard", 6, S`A population (shown) grows from 250 to 640 in 8 years. (a) Find the yearly growth factor assuming exponential growth. (b) Write the model. (c) Predict the population at 12 years. (d) Give one reason the prediction may be unreliable.`,
    S`(a) $\left(\frac{640}{250}\right)^{1/8}\approx${f((640 / 250) ** 0.125, 4)}$. (b) $P=250(${f((640 / 250) ** 0.125, 4)})^t$. (c) $\approx${Math.round(250 * (640 / 250) ** 1.5)}$. (d) Extrapolation; growth may slow as resources are limited. [2, 1, 2, 1.]`,
    planeDoc({ view: { xmin: 0, xmax: 13, ymin: 0, ymax: 1100 }, step: { x: 1, y: 100 }, curves: [{ f: (t) => 250 * (640 / 250) ** (t / 8), color: "red" }], points: [P(0, 250), P(2, 316), P(4, 400), P(6, 506), P(8, 640)] })),
  W(3, "medium", 4, S`The graph shown has no labels. (a) List what is missing. (b) Write a full caption for it, given that it shows distance d (km) cycled against time t (h). (c) The model is $d=18t$; rewrite it as a sentence that defines the variables.`,
    S`(a) Title, axis labels with units, a named model, a figure number. (b) "Figure 1: distance d (km) cycled against time t (h), with the model d = 18t." (c) "Let t be the time in hours and d the distance in km; the model is $d=18t$." [1, 2, 1.]`,
    planeDoc({ view: { xmin: 0, xmax: 5, ymin: 0, ymax: 90 }, step: { x: 1, y: 10 }, points: [P(1, 17), P(2, 37), P(3, 53), P(4, 73)], xlabel: "", ylabel: "" })),
  W(3, "hard", 5, S`The histogram (shown) gives 200 reaction times. (a) State the class containing the median. (b) Describe the shape. (c) Explain which representations and statistics belong in the main text and what belongs in an appendix.`,
    S`(a) Cumulative 9, 34, 86, 144: the median (100th value) is in the 0.35 s class. (b) Roughly symmetric and bell-shaped, slightly skewed right. (c) Histogram and mean, median, standard deviation in the text; the 200 raw values in an appendix. [2, 1, 2.]`,
    probDoc(["0.20", "0.25", "0.30", "0.35", "0.40", "0.45", "0.50"], [9, 25, 52, 58, 36, 15, 5], { xlab: "reaction time (s, class start)", ylab: "frequency", labels: false })),
  W(4, "medium", 4, S`Tea cools in a 20 °C room from 80 °C to 56 °C in 10 minutes (shown). Using $T=20+60e^{kt}$: (a) find k; (b) find T at $t=25$; (c) state one assumption of the model.`,
    S`(a) $60e^{10k}=36\Rightarrow k=\frac{\ln0.6}{10}\approx${f(kS, 4)}$. (b) $20+60e^{25k}\approx${f(20 + 60 * Math.exp(25 * kS), 1)}$ °C. (c) The room temperature stays at 20 °C. [2, 1, 1.]`,
    planeDoc({ view: { xmin: 0, xmax: 42, ymin: 0, ymax: 90 }, step: { x: 5, y: 10 }, curves: [{ f: (t) => 20 + 60 * Math.exp(kS * t), color: "red" }], points: [P(0, 80), P(10, 56)], lines: [{ m: 0, b: 20, color: "gray", dash: true }] })),
  W(4, "hard", 6, S`Two models (shown) fit the same cooling data: linear $T=-1.6t+78$ and exponential $T=20+58e^{-0.05t}$. (a) Predict T at 60 minutes with each. (b) Which is physically sensible? (c) Write a meaningful reflection on the comparison. (d) State one way to test your choice.`,
    S`(a) Linear: $-18$ °C; exponential: $20+58e^{-3}\approx${f(20 + 58 * Math.exp(-3), 1)}$ °C. (b) Exponential — it approaches room temperature. (c) e.g. "Both fit 0–30 min, but the linear model predicts impossible temperatures beyond the data, so the exponential model is preferred despite similar residuals." (d) Take readings up to 60 minutes. [2, 1, 2, 1.]`,
    planeDoc({ view: { xmin: 0, xmax: 62, ymin: -25, ymax: 90 }, step: { x: 10, y: 10 }, curves: [{ f: (t) => 20 + 58 * Math.exp(-0.05 * t), color: "red" }], lines: [{ m: -1.6, b: 78, color: "amber", dash: true }, { m: 0, b: 20, color: "gray" }] })),
];
