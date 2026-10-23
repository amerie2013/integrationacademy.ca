// 15.2 Planning, Research and Using Technology — 20 hard questions
import { mc, ms, num, tf } from "./kit.mjs";
import { planeDoc, P } from "./fig.mjs";

const S = String.raw;
const r = (v, d = 3) => Math.round(v * 10 ** d) / 10 ** d;
const X = [1, 2, 3, 4, 5], Y = [3, 5, 6, 9, 10];
const n = 5, sx = 15, sy = 33, sxx = 55, sxy = X.reduce((a, x, i) => a + x * Y[i], 0);
const m = (n * sxy - sx * sy) / (n * sxx - sx * sx), b = (sy - m * sx) / n;

export const TOPIC = "15.2 Planning, Research and Using Technology";
export const Q = [
  num(S`The scatter plot shows $(1,3),(2,5),(3,6),(4,9),(5,10)$. Find the gradient of the least-squares line (3 d.p.).`, r(m), "Technology or the formulas: m = 1.8.", planeDoc({ view: { xmin: 0, xmax: 6, ymin: 0, ymax: 12 }, step: { x: 1, y: 2 }, points: X.map((x, i) => P(x, Y[i], false)) }), 0.001),
  num(S`For the same data, find the y-intercept of the least-squares line (3 d.p.).`, r(b), "c = ȳ − m x̄ = 6.6 − 1.8(3).", null, 0.001),
  num(S`For the line above, find the residual at $x=4$ (3 d.p.).`, r(9 - (m * 4 + b)), "9 − (1.8·4 + 1.2).", null, 0.001),
  num(S`A pilot gives times 2.0, 2.83, 3.46, 4.0 s for lengths 1, 2, 3, 4 m. If $t=a\sqrt{L}$, find a.`, 2, "t = 2√L fits all points."),
  num(S`For $t=2\sqrt{L}$, find the length that gives $t=5$ s.`, 6.25, "L = (t/2)².", null, 0.001),
  mc(S`Data: $t=0,1,2,3$ and $N=100,150,225,338$. Which model fits?`, S`$N=100(1.5)^t$`, [S`$N=100+50t$`, S`$N=100t^{1.5}$`, S`$N=150t$`], "Constant ratio 1.5."),
  num(S`For $N=100(1.5)^t$, find when N first exceeds 1000 (2 d.p.).`, r(Math.log(10) / Math.log(1.5), 2), "1.5ᵗ = 10 ⇒ t = ln 10 / ln 1.5.", null, 0.01),
  tf("If the residuals of a model grow larger as x increases, the model may be the wrong shape.", true, "A pattern in residuals signals a poor model."),
  ms(S`A student fits $y=2.1x+0.4$ with $r=0.98$ to 6 points. Which conclusions are justified? Select all.`, ["there is a strong positive linear relationship in this data", "the model should be checked with residuals", "the model proves x causes y", "the model is certain to hold for x = 100"], [0, 1], "Correlation is not causation; extrapolation is risky."),
  num("The plot shows data with an exponential model N = 30e^{0.25t}. Predict N at t = 8 (1 d.p.).", r(30 * Math.exp(2), 1), "30e².", planeDoc({ view: { xmin: 0, xmax: 9, ymin: 0, ymax: 240 }, step: { x: 1, y: 20 }, curves: [{ f: (t) => 30 * Math.exp(0.25 * t), color: "red" }], points: [P(0, 31, false), P(2, 48, false), P(4, 83, false), P(6, 132, false)] }), 0.1),
  num("For N = 30e^{0.25t}, by what percentage does N grow each unit of t (1 d.p.)?", r((Math.exp(0.25) - 1) * 100, 1), "e^{0.25} − 1.", null, 0.1),
  num("A school has 240 Year 11 and 360 Year 12 students. A stratified sample of 45 is chosen. How many Year 12 students are in it?", 27, "360/600 × 45."),
  num("Two models have sums of squared residuals of 86.4 and 5.4. What percentage of the first is the second?", 6.25, "5.4/86.4 × 100.", null, 0.01),
  mc("A student surveys the first 30 students to arrive at school. The main problem is:", "the sample may be biased (e.g. by travel method)", ["the sample is too large", "the data are secondary", "the interval is wrong"], "Not random."),
  num("A value grows from 2400 to 3000. Find the percentage increase.", 25, "600/2400."),
  num("The residual plot shown comes from a linear model. Find the largest absolute residual.", 1.8, "Read the point furthest from 0.", planeDoc({ view: { xmin: 0, xmax: 8, ymin: -2.5, ymax: 2.5 }, step: { x: 1, y: 0.5 }, points: [P(1, 1.8, false), P(2, 0.4, false), P(3, -0.9, false), P(4, -1.4, false), P(5, -0.8, false), P(6, 0.5, false), P(7, 1.6, false)], lines: [{ m: 0, b: 0, color: "gray" }] }), 0.01),
  tf("The residual plot in the previous question supports using a linear model.", false, "The residuals form a curve."),
  num(S`A pilot gives $y=4.0,\ 5.6,\ 7.8,\ 11.0$ at $x=0,1,2,3$. Estimate the constant growth factor using the first and last values (3 d.p.).`, r((11 / 4) ** (1 / 3)), "(11/4)^{1/3}.", null, 0.001),
  num("The scatter plot shows decreasing data with a line y = −1.25x + 20. Predict y at x = 10.", 7.5, "−12.5 + 20.", planeDoc({ view: { xmin: 0, xmax: 12, ymin: 0, ymax: 22 }, step: { x: 2, y: 2 }, lines: [{ m: -1.25, b: 20, color: "red" }], points: [P(1, 18.6, false), P(3, 16.4, false), P(5, 13.9, false), P(7, 11.2, false), P(9, 8.8, false)] }), 0.01),
  num("A data set is collected over 6 weeks, analysed over 3 and written over 4. What fraction of the 13 weeks is data collection (3 d.p.)?", r(6 / 13), "6/13.", null, 0.001),
];
