// 7.3 Lines of Best Fit and Regression — 20 hard questions
import { mc, ms, num, tf } from "./kit.mjs";
import { planeDoc, P } from "../../mcr3u-ch1/bank/fig.mjs";
import { st, list, pts } from "./st.mjs";

const S = String.raw;
const G = [[3, 5, 6, 8, 9, 11, 13], [28, 33, 34, 40, 41, 46, 52]], g = st(...G);
const H = [[20, 25, 30, 35, 40, 45], [8.2, 7.4, 6.9, 6.1, 5.2, 4.8]], h = st(...H);
const K = [[1, 2, 3, 4, 5, 6, 7, 8], [12, 15, 15, 19, 22, 22, 26, 28]], k = st(...K);

export const TOPIC = "7.3 Lines of Best Fit and Regression";
export const Q = [
  num(S`For x: ${list(G[0])}; y: ${list(G[1])}, find the gradient of the y-on-x line (3 s.f.).`, g.b, "GDC or Sxy/Sxx.", planeDoc({ view: { xmin: 0, xmax: 15, ymin: 20, ymax: 56 }, points: pts(...G), step: { x: 1, y: 5 } }), 0.005),
  num(S`For the same data, predict $y$ when $x=10$ (3 s.f.).`, g.a + g.b * 10, "a + 10b.", null, 0.02),
  num(S`For x: ${list(H[0])}; y: ${list(H[1])}, find the y-on-x line's intercept (3 s.f.).`, h.a, "GDC.", planeDoc({ view: { xmin: 15, xmax: 50, ymin: 3, ymax: 10 }, points: pts(...H), lines: [{ m: h.b, b: h.a, color: "red" }], step: { x: 5, y: 1 } }), 0.01),
  num(S`For the same data, estimate $x$ when $y=6.5$ using the x-on-y line (3 s.f.).`, h.c + h.d * 6.5, "x = c + dy.", null, 0.05),
  num(S`For 7 pairs, $\sum x=56$, $\sum y=147$, $\sum xy=1260$, $\sum x^2=490$. Find the gradient of the y-on-x line.`, (1260 - 56 * 147 / 7) / (490 - 56 * 56 / 7), "Sxy = 84, Sxx = 42."),
  num(S`For the same sums ($n=7$), find the intercept.`, 147 / 7 - ((1260 - 56 * 147 / 7) / (490 - 56 * 56 / 7)) * 8, "ȳ = 21, x̄ = 8; a = 21 − 2 × 8."),
  num(S`The y-on-x line is $y=4+0.6x$ and the x-on-y line is $x=-2+1.5y$. Find $\bar x$.`, 40, "x̄ = −2 + 1.5(4 + 0.6x̄) = 4 + 0.9x̄."),
  num(S`For those lines ($y=4+0.6x$, $x=-2+1.5y$), find $\bar y$.`, 28, "4 + 0.6 × 40."),
  num(S`For those lines, find $r$ using $r^2=bd$ (3 d.p.).`, Math.sqrt(0.6 * 1.5), "r² = 0.9; r positive.", null, 0.002),
  mc(S`The two regression lines of a data set are perpendicular. Then:`, S`$r=0$`, [S`$r=1$`, S`$r=-1$`, S`$r=0.5$`], "With r = 0, b = d = 0: y = ȳ is horizontal and x = x̄ is vertical."),
  num("For the 8 points shown, find the y-on-x line and predict y at x = 4.5 (3 s.f.).", k.a + k.b * 4.5, "GDC on the 8 points.", planeDoc({ view: { xmin: 0, xmax: 9, ymin: 8, ymax: 30 }, points: pts(...K), step: { x: 1, y: 2 } }), 0.02),
  num(S`For the same 8 points, find $r$ (3 d.p.).`, k.r, "GDC.", null, 0.002),
  tf(S`If a data set has $r=-1$, the y-on-x and x-on-y lines are the same line.`, true, "All points lie on one line, so both regressions give it."),
  ms(S`A line $y=150-2.4x$ models the price of a phone ($y$, dollars) $x$ months after release, for $0\le x\le30$. Which are true? Select all.`, ["the price falls about 2.4 dollars per month", "the predicted launch price is 150", "at 80 months the price is −42 (reliable)", "predictions for 10 and 25 months are interpolation"], [0, 1, 3], "80 months is extrapolation and impossible."),
  num(S`$\bar x=15$, $\bar y=40$, $r=0.8$, $S_{xx}=100$, $S_{yy}=400$. Find the gradient $b$ of the y-on-x line.`, 1.6, "Sxy = 0.8 × 200 = 160; b = 160/100."),
  num(S`With those values, find the intercept $a$.`, 16, "40 − 1.6 × 15."),
  mc(S`A student uses the y-on-x line $y=3+2x$ to find $x$ when $y=11$ and gets $x=4$. The correct method is:`, "use the x-on-y regression line", ["the student's method", "use the mean x", "set y = 0"], "Rearranging the y-on-x line is not the best estimate of x."),
  num("A regression line passes through the two points shown (the mean point and (2, 9)). Predict y when x = 14.", 24, "Mean (8, 16.5): gradient 1.25; y = 6.5 + 1.25x.", planeDoc({ view: { xmin: 0, xmax: 16, ymin: 0, ymax: 28 }, points: [P(2, 9), P(8, 16.5, "mean ", "amber")], lines: [{ m: 1.25, b: 6.5, color: "red" }], step: { x: 2, y: 4 } })),
  num(S`For data with $\bar x=12$, $\bar y=50$, the y-on-x line has gradient $-1.8$. Find the predicted $y$ at $x=15$.`, 44.6, "50 − 1.8 × 3.", null, 1e-9),
  tf(S`Adding a point exactly at the mean point $(\bar x,\bar y)$ does not change the y-on-x regression line.`, true, "It adds 0 to Sxy and Sxx and keeps the means."),
];
