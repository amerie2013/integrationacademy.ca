// 1.1 Rates of Change and the Slope of a Curve — 20 hard questions
import { mc, num, tf } from "./kit.mjs";
import { graph, planeDoc, P } from "./fig.mjs";

export const TOPIC = "1.1 Rates of Change and the Slope of a Curve";
export const Q = [
  num(String.raw`The average rate of change of $x^2$ on $[2,b]$ is 9. Find $b$.`, 7, "(b² − 4)/(b − 2) = b + 2."),
  num(String.raw`The average rate of change of $x^3$ on $[1,b]$ is 21, with $b>1$. Find $b$.`, 4, "b² + b + 1 = 21."),
  num(String.raw`The average rate of change of $f(x)=x^2+kx$ on $[1,3]$ is 10. Find $k$.`, 6, "(9 + 3k − 1 − k) ÷ 2 = 4 + k."),
  mc("At which x-values does the graph of y = |x² − 4| have no tangent?", String.raw`$x=\pm2$`, [String.raw`$x=0$`, String.raw`$x=\pm4$`, String.raw`$x=2$ only`], "Corners where x² − 4 changes sign.", graph((x) => Math.abs(x * x - 4), { xmin: -3.5, xmax: 3.5, ymin: -1, ymax: 6 })),
  num(String.raw`Estimate the instantaneous rate of change of $f(x)=x^3-x$ at $x=1$.`, 2, "Centred slopes approach 3 − 1.", null, 0.01),
  num(String.raw`For $y=x^2$, the secant slope on $[a,a+h]$ is $2a+h$. Find it for $a=3$, $h=0.5$.`, 6.5, "6 + 0.5.", null, 0.0001),
  tf("At a corner, secant slopes from the left and from the right approach different values.", true, "That is why no tangent exists."),
  num("The tangent to y = −½x² + 4x at x = 2 is drawn through (2, 6) and (4, 10). What is its slope?", 2, "4 ÷ 2.", graph((x) => -0.5 * x * x + 4 * x, { xmin: -1, xmax: 8, ymin: -1, ymax: 12 }, [P(2, 6), P(4, 10)], { more: [{ f: (x) => 2 * x + 2, color: "green" }] })),
  num(String.raw`Estimate the velocity at $t=3$ for $s(t)=2t^2+t$ m.`, 13, "Centred slope: 4(3) + 1.", null, 0.01),
  num(String.raw`A population is $P(t)=1000(2)^{t/5}$. Find the average rate of change on $[0,10]$.`, 300, "(4000 − 1000) ÷ 10."),
  mc("Which function has a tangent at every point?", String.raw`$y=x^2$`, [String.raw`$y=|x|$`, String.raw`$y=|x-3|+1$`, String.raw`$y=|x^2-1|$`], "No corners."),
  num("A walker's distance graph is shown (minutes, km). Find the speed on the last segment in km/min.", 4, "(10 − 6) ÷ (6 − 5).", planeDoc({ view: { xmin: -0.3, xmax: 6.5, ymin: -0.5, ymax: 11 }, segs: [{ pts: [[0, 0], [2, 6], [5, 6], [6, 10]], color: "violet" }], points: [P(2, 6), P(5, 6), P(6, 10)], step: { x: 1, y: 1 } })),
  num(String.raw`Find the average rate of change of $\sqrt x$ on $[4,4.01]$ (4 decimals).`, 0.2498, "(√4.01 − 2) ÷ 0.01.", null, 0.0005),
  num(String.raw`A tank holds $V(t)=1000\left(1-\frac{t}{40}\right)^2$ L. Find the average rate of change on $[0,10]$.`, -43.75, "V(10) = 562.5.", null, 0.001),
  num(String.raw`On $y=x^2$, the secant from $x=1$ to $x=a$ has slope 5. Find $a$.`, 4, "1 + a = 5."),
  tf("An average rate of change can be 0 even when the function changes in between.", true, "e.g. x² on [−1, 1]."),
  num(String.raw`Estimate the instantaneous rate of change of $\frac1x$ at $x=2$ (4 decimals).`, -0.25, "Centred slope ≈ −0.25.", null, 0.0005),
  num(String.raw`For $f(x)=x^2-6x$, at what $x$ does the instantaneous rate equal the average rate on $[0,4]$?`, 2, "Average −2; 2x − 6 = −2."),
  mc("The parabola is symmetric about x = 3. What is its average rate of change on [2, 4]?", "0", ["positive", "negative", "it cannot be found"], "f(2) = f(4).", graph((x) => -((x - 3) ** 2) + 5, { xmin: 0, xmax: 6, ymin: -1, ymax: 6 }, [P(2, 4), P(4, 4)])),
  num(String.raw`A ball's height is $h(t)=-5t^2+30t$. At what time is its instantaneous rate of change 0?`, 3, "The top: rate 30 − 10t = 0."),
];
