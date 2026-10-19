// 1.3 Limits — 20 hard questions
import { mc, num, tf } from "./kit.mjs";
import { planeDoc, P, H } from "./fig.mjs";

export const TOPIC = "1.3 Limits";
export const Q = [
  num(String.raw`Evaluate $\lim_{x\to2}\frac{x^3-8}{x^2-4}$.`, 3, "(x² + 2x + 4)/(x + 2) → 12/4."),
  num(String.raw`Evaluate $\lim_{x\to0}\frac{(2+x)^3-8}{x}$.`, 12, "12 + 6x + x²."),
  num(String.raw`Evaluate $\lim_{x\to1}\frac{\sqrt{x+3}-2}{x-1}$.`, 0.25, "1/(√(x + 3) + 2).", null, 0.0001),
  num(String.raw`Evaluate $\lim_{x\to\infty}\frac{\sqrt{x^2+1}}{2x}$.`, 0.5, "√(1 + 1/x²)/2.", null, 0.0001),
  num(String.raw`For the value of $k$ that makes $\lim_{x\to3}\frac{x^2+kx-15}{x-3}$ exist, find the limit.`, 8, "9 + 3k − 15 = 0 → k = 2; (x + 5) → 8."),
  mc("For the graph shown, which statement is true at x = 2?", "the limit is 1, but f(2) = 3", ["the limit is 3", "the limit does not exist", "the limit is 2"], "Both sides approach 1.", planeDoc({ view: { xmin: -1, xmax: 5, ymin: -1, ymax: 4 }, curves: [{ f: (x) => 0.25 * (x - 2) ** 2 + 1, a: -1, b: 1.95, color: "violet" }, { f: (x) => 0.25 * (x - 2) ** 2 + 1, a: 2.05, b: 5, color: "violet" }], points: [H(2, 1), P(2, 3, false)], step: { x: 1, y: 1 } })),
  num("Find the ratio of consecutive Fibonacci numbers 13 and 8 (13/8).", 1.625, "13 ÷ 8.", null, 0.0001),
  num("Find the limit of the ratios of consecutive Fibonacci numbers (3 decimals).", 1.618, "(1 + √5)/2.", null, 0.001),
  num(String.raw`Evaluate $\lim_{x\to0}\frac{\frac1{x+2}-\frac12}{x}$.`, -0.25, "−1/(2(x + 2)).", null, 0.0001),
  tf(String.raw`The value of $\lim_{x\to a}f(x)$ depends on $f(a)$.`, false, "Only nearby values matter."),
  num(String.raw`Evaluate $\lim_{x\to-3}\frac{x^2-9}{x^2+x-6}$.`, 1.2, "(x − 3)/(x − 2) → −6/−5.", null, 0.0001),
  num("For f(x) = x² when x < 1 and f(x) = 2x + k when x ≥ 1, find k so that the limit at x = 1 exists.", -1, "1 = 2 + k.", planeDoc({ view: { xmin: -2, xmax: 3, ymin: -2, ymax: 6 }, curves: [{ f: (x) => x * x, a: -2, b: 1, color: "violet" }, { f: (x) => 2 * x - 1, a: 1, b: 3, color: "green" }], points: [P(1, 1)], step: { x: 1, y: 1 } })),
  num(String.raw`Evaluate $\lim_{x\to\infty}\frac{2x^3-x}{x^3+5x^2}$.`, 2, "Divide by x³."),
  num(String.raw`With $t_1=0$ and $t_{n+1}=\sqrt{2+t_n}$, the terms approach what value?`, 2, "L = √(2 + L) → L = 2.", planeDoc({ view: { xmin: 0, xmax: 9, ymin: -0.2, ymax: 2.4 }, points: [0, Math.SQRT2, Math.sqrt(2 + Math.SQRT2), 1.9616, 1.9904, 1.9976, 1.9994, 1.9998].map((y, i) => ({ x: i + 1, y, color: "blue" })), lines: [{ m: 0, b: 2, color: "red", dash: true }], step: { x: 1, y: 0.5 } })),
  mc(String.raw`What is $\lim_{x\to2}\frac{|x-2|}{x-2}$?`, "it does not exist", ["1", "−1", "0"], "−1 from the left, 1 from the right."),
  num(String.raw`Evaluate $\lim_{x\to4}\frac{x-4}{\sqrt x-2}$.`, 4, "√x + 2."),
  num(String.raw`Evaluate $\lim_{x\to0}\frac{(x-5)^2-25}{x}$.`, -10, "x − 10."),
  num("The graph approaches a horizontal line far to the left. What is the limit as x → −∞?", -1, "Horizontal asymptote y = −1.", planeDoc({ view: { xmin: -10, xmax: 6, ymin: -6, ymax: 6 }, curves: [{ f: (x) => (3 - x) / (x + 1), a: -10, b: -1.5, color: "violet" }, { f: (x) => (3 - x) / (x + 1), a: -0.4, b: 6, color: "violet" }], vlines: [{ x: -1, color: "red", dash: true }], step: { x: 2, y: 1 } })),
  num(String.raw`Evaluate $\lim_{x\to1}\frac{x^5-1}{x-1}$.`, 5, "1 + 1 + 1 + 1 + 1."),
  num(String.raw`Evaluate $\lim_{x\to0}\frac{\sqrt{1+2x}-1}{x}$.`, 1, "2/(√(1 + 2x) + 1)."),
];
