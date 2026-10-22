// 7.3 Lines of Best Fit and Regression — 20 easy + 20 medium questions
import { mc, ms, num, tf, fill } from "./kit.mjs";
import { planeDoc, P } from "../../mcr3u-ch1/bank/fig.mjs";
import { st, list, pts } from "./st.mjs";

const S = String.raw;
const F1 = [[1, 2, 3, 4, 5, 6], [4, 7, 9, 12, 14, 17]], F2 = [[10, 15, 20, 25, 30], [48, 44, 38, 35, 30]];
const F3 = [[2, 4, 6, 8, 10, 12], [15, 21, 24, 31, 35, 40]], F4 = [[5, 7, 9, 11, 13], [62, 58, 57, 52, 49]];
const s1 = st(...F1), s2 = st(...F2), s3 = st(...F3), s4 = st(...F4);

export const E = [
  num(S`Using $y=3+2x$, predict $y$ when $x=5$.`, 13, "3 + 10."),
  num(S`Using $y=20-1.5x$, predict $y$ when $x=4$.`, 14, "20 − 6."),
  num(S`Using $y=0.5x+12$, predict $y$ when $x=10$.`, 17, "5 + 12."),
  num(S`The regression line $y=4+bx$ passes through the mean point $(5,19)$. Find $b$.`, 3, "4 + 5b = 19."),
  num(S`The regression line $y=a+2x$ passes through $(\bar x,\bar y)=(6,15)$. Find $a$.`, 3, "15 − 12."),
  num(S`$S_{xy}=30$ and $S_{xx}=10$. Find the gradient $b$ of the y-on-x line.`, 3, "30 ÷ 10."),
  num(S`$b=2.5$, $\bar x=4$, $\bar y=14$. Find the intercept $a$.`, 4, "14 − 10."),
  mc("A regression line of y on x always passes through:", S`the mean point $(\bar x,\bar y)$`, ["the origin", "the first data point", "the highest data point"], "A property of least squares."),
  mc("Predicting within the range of the data is called:", "interpolation", ["extrapolation", "regression", "correlation"], "Inside the range."),
  mc("Predicting outside the range of the data is called:", "extrapolation", ["interpolation", "correlation", "sampling"], "Outside the range."),
  tf("Extrapolation is generally less reliable than interpolation.", true, "The trend may not continue."),
  tf(S`To predict $x$ from a known $y$, you should use the regression line of $x$ on $y$.`, true, "Not the rearranged y-on-x line."),
  fill(S`In $y=a+bx$, the number $b$ is the ___ of the regression line.`, ["gradient", "Gradient", "slope"], "Change in y per unit x."),
  mc(S`In $y=25+3.2x$ (x = hours, y = marks), the value 3.2 means:`, "each extra hour is associated with about 3.2 more marks", ["the mean mark is 3.2", "students study 3.2 hours", "r = 3.2"], "Gradient in context."),
  num("The red line is the regression line shown. Use it to predict y when x = 6.", 15, "The line passes through (0, 3) and (6, 15).", planeDoc({ view: { xmin: 0, xmax: 9, ymin: 0, ymax: 22 }, points: pts([1, 2, 3, 4, 5, 7, 8], [6, 6, 10, 10, 13, 17, 19]), lines: [{ m: 2, b: 3, color: "red" }], step: { x: 1, y: 2 } })),
  num("The regression line shown has which y-intercept?", 3, "Where it crosses the y-axis.", planeDoc({ view: { xmin: 0, xmax: 9, ymin: 0, ymax: 22 }, points: pts([1, 2, 3, 4, 5, 7, 8], [6, 6, 10, 10, 13, 17, 19], "green"), lines: [{ m: 2, b: 3, color: "red" }], step: { x: 1, y: 2 } })),
  mc("A regression line is fitted to data with r = 0.15. Predictions from it are:", "unreliable", ["very reliable", "exact", "reliable only for large x"], "Weak correlation."),
  num(S`The x-on-y line is $x=2+0.4y$. Estimate $x$ when $y=20$.`, 10, "2 + 8."),
  mc(S`Data were collected for $x$ between 10 and 50. Which prediction is extrapolation?`, S`$x=70$`, [S`$x=25$`, S`$x=40$`, S`$x=12$`], "70 is outside 10–50."),
  num(S`A y-on-x line has gradient $-2$ and passes through $(3,10)$. Find $y$ when $x=5$.`, 6, "10 − 4."),
];

export const M = [
  num(S`Find the gradient of the y-on-x regression line for x: ${list(F1[0])}; y: ${list(F1[1])} (3 s.f.).`, s1.b, "b = Sxy/Sxx.", null, 0.005),
  num(S`For the same data, find the intercept $a$ (3 s.f.).`, s1.a, "a = ȳ − b x̄.", null, 0.005),
  num(S`For x: ${list(F1[0])}; y: ${list(F1[1])}, use the regression line to predict $y$ at $x=3.5$ (3 s.f.).`, s1.a + s1.b * 3.5, "Substitute into y = a + bx.", null, 0.01),
  num(S`Use a GDC: x: ${list(F2[0])}; y: ${list(F2[1])}. Find the gradient of the y-on-x line (3 s.f.).`, s2.b, "Linear regression.", null, 0.005),
  num(S`For x: ${list(F2[0])}; y: ${list(F2[1])}, predict $y$ at $x=22$ (3 s.f.).`, s2.a + s2.b * 22, "Use y = a + bx.", null, 0.02),
  num(S`For x: ${list(F3[0])}; y: ${list(F3[1])}, find the intercept of the y-on-x line (3 s.f.).`, s3.a, "GDC.", null, 0.01),
  num(S`For x: ${list(F3[0])}; y: ${list(F3[1])}, predict $y$ at $x=7$ (3 s.f.).`, s3.a + s3.b * 7, "Interpolation.", null, 0.02),
  num(S`For x: ${list(F4[0])}; y: ${list(F4[1])}, find the x-on-y line's gradient $d$ in $x=c+dy$ (3 s.f.).`, s4.d, "Swap the roles of x and y on the GDC.", null, 0.005),
  num(S`For the same data, estimate $x$ when $y=55$ using the x-on-y line (3 s.f.).`, s4.c + s4.d * 55, "x = c + dy.", null, 0.02),
  num(S`$S_{xy}=-48$, $S_{xx}=32$, $\bar x=6$, $\bar y=20$. Find the y-on-x line's intercept.`, 29, "b = −1.5; a = 20 + 9."),
  ms(S`For the line $y=18+0.7x$ fitted to data with $x$ from 5 to 25 and $r=0.94$, which predictions are reliable? Select all.`, [S`$x=10$`, S`$x=24$`, S`$x=40$`, S`$x=0$`], [0, 1], "Only interpolation, with strong r."),
  mc(S`Why should the y-on-x line not be rearranged to predict $x$ from $y$?`, "it minimises vertical distances, not horizontal ones", ["it does not pass through the mean point", "its gradient is always 1", "it only works for positive data"], "The x-on-y line minimises horizontal distances."),
  num("The scatter diagram shows 5 points. Find the gradient of the y-on-x regression line (3 s.f.).", st([1, 3, 4, 6, 8], [9, 7, 6, 4, 2]).b, "Points (1, 9), (3, 7), (4, 6), (6, 4), (8, 2).", planeDoc({ view: { xmin: 0, xmax: 9, ymin: 0, ymax: 10 }, points: pts([1, 3, 4, 6, 8], [9, 7, 6, 4, 2]), step: { x: 1, y: 1 } }), 0.005),
  num("A regression line passes through the mean point shown and the point (0, 4). Find its gradient.", 1.5, "Mean point (6, 13): (13 − 4)/6.", planeDoc({ view: { xmin: 0, xmax: 12, ymin: 0, ymax: 22 }, points: [...pts([2, 3, 5, 7, 9, 10], [6, 10, 11, 14, 17, 20]), P(6, 13, null, "amber")], step: { x: 1, y: 2 } })),
  tf("The intercept of a regression line always has a meaningful interpretation.", false, "x = 0 may be far outside the data."),
  num(S`The y-on-x line is $y=5+1.2x$ and $\bar x=10$. Find $\bar y$.`, 17, "5 + 12."),
  num(S`The lines $y=2+0.5x$ (y on x) and $x=-1+1.6y$ (x on y) meet at the mean point. Find $\bar y$.`, 7.5, "x̄ = −1 + 1.6(2 + 0.5x̄) = 2.2 + 0.8x̄ → x̄ = 11; ȳ = 2 + 5.5.", null, 1e-9),
  mc(S`A regression line predicts a negative height for a very young tree. This is because:`, "the prediction is an extrapolation", ["the correlation is negative", "the mean point is wrong", "regression lines always fail"], "Outside the data range."),
  num(S`$b=0.75$ and the line passes through $(8,20)$. Predict $y$ when $x=12$.`, 23, "20 + 0.75 × 4."),
  mc(S`If $r=0$, the y-on-x regression line is:`, S`horizontal at $y=\bar y$`, ["vertical", "the line y = x", "not defined"], "b = Sxy/Sxx = 0."),
];
