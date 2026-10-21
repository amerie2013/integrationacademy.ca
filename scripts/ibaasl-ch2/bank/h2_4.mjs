// 2.4 Domain and Range — 20 hard questions
import { mc, ms, num, tf } from "./kit.mjs";
import { planeDoc, P } from "../../mcr3u-ch1/bank/fig.mjs";

const S = String.raw;

export const TOPIC = "2.4 Domain and Range";
export const Q = [
  num(S`For $f(x)=x^2-2x-8$ with $-1\le x\le4$ (shown), what is the largest value in the range?`, 0, "f(−1) = −5, f(4) = 0.", planeDoc({ view: { xmin: -2, xmax: 5, ymin: -10, ymax: 2 }, curves: [{ f: (x) => x * x - 2 * x - 8, a: -1, b: 4, color: "violet" }], points: [P(-1, -5), P(4, 0)], step: { x: 1, y: 2 } })),
  num(S`For $f(x)=x^2-2x-8$ with $-1\le x\le4$, what is the smallest value in the range?`, -9, "The vertex (1, −9) is inside."),
  num(S`How many integers from 2 to 10 inclusive are in the domain of $\frac{\sqrt{x-2}}{x-6}$?`, 8, "All except 6."),
  num(S`What is the largest value in the range of $\frac{1}{x^2+4}$?`, 0.25, "At x = 0.", null, 1e-9),
  num(S`The graph shows $f(x)=x^3-12x$ for $-3\le x\le3$. What is the largest value in the range?`, 16, "f(−2) = 16 is larger than f(−3) = 9.", planeDoc({ view: { xmin: -4, xmax: 4, ymin: -18, ymax: 18 }, curves: [{ f: (x) => x ** 3 - 12 * x, a: -3, b: 3, color: "violet" }], points: [P(-2, 16), P(2, -16), P(-3, 9), P(3, -9)], step: { x: 1, y: 4 } })),
  num(S`For $f(x)=\frac{12}{x-1}$ with $2\le x\le5$, what is the smallest value in the range?`, 3, "f(5) = 3."),
  tf(S`The range of $(x-3)^2+1$ for $x\ge5$ is $y\ge1$.`, false, "The vertex is outside the domain: the range is y ≥ 5."),
  num(S`What is the smallest value in the range of $(x-3)^2+1$ for $x\ge5$?`, 5, "f(5) = 5."),
  num(S`The graph shows $y=\sqrt{9-x^2}+1$. What is the largest value in its range?`, 4, "At x = 0.", planeDoc({ view: { xmin: -4, xmax: 4, ymin: -1, ymax: 5 }, curves: [{ f: (x) => Math.sqrt(9 - x * x) + 1, a: -3, b: 3, color: "violet" }] })),
  num(S`The domain of $\sqrt{(x-1)(5-x)}$ is an interval. What is its length?`, 4, "1 ≤ x ≤ 5."),
  ms("Which functions have range y ≥ 0? Select all.", [S`$y=x^2$`, S`$y=|x|$`, S`$y=\sqrt x$`, S`$y=2^x$`], [0, 1, 2], "2ˣ never equals 0."),
  num(S`Which value is excluded from the range of $f(x)=\frac{2x+1}{x-1}$?`, 2, "The horizontal asymptote is y = 2."),
  num(S`What is the largest integer in the domain of $\frac{1}{\sqrt{4-x}}$?`, 3, "x < 4."),
  num(S`Use a GDC to find the smallest value in the range of $f(x)=x+\frac1x$ for $x>0$.`, 2, "At x = 1."),
  num(S`Profit is $P(x)=-2x^2+40x-50$ for $0\le x\le15$ (shown). What is the largest value in the range?`, 150, "At x = 10.", planeDoc({ view: { xmin: -1, xmax: 16, ymin: -60, ymax: 170 }, curves: [{ f: (x) => -2 * x * x + 40 * x - 50, a: 0, b: 15, color: "violet" }], points: [P(10, 150), P(0, -50), P(15, 100)], step: { x: 1, y: 20 } })),
  num(S`For the profit $P(x)=-2x^2+40x-50$, $0\le x\le15$, what is the smallest value in the range?`, -50, "P(0) = −50, P(15) = 100."),
  mc("Which function has domain x ≥ 0 and range y ≤ 3?", S`$y=3-\sqrt x$`, [S`$y=3+\sqrt x$`, S`$y=\sqrt{x-3}$`, S`$y=3-x^2$`], "√x ≥ 0, so 3 − √x ≤ 3."),
  num(S`What is the largest value in the range of $\frac{6}{x^2+2}$?`, 3, "At x = 0."),
  tf("If the domain of f is [0, 4], its range must be an interval of length 4.", false, "e.g. f(x) = x² on [0, 4] has range [0, 16]."),
  num(S`How many integers are in the range of $f(x)=x^2$ for $-2\le x\le2$?`, 5, "Range [0, 4]: 0, 1, 2, 3, 4."),
];
