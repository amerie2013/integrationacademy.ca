// 4.4 Exponential Functions and Their Properties — 20 hard questions
import { mc, ms, num, tf } from "./kit.mjs";
import { P, planeDoc } from "./fig.mjs";

export const TOPIC = "4.4 Exponential Functions and Their Properties";
export const Q = [
  num(String.raw`$y=ab^x$ passes through $(-1,2)$ and $(2,54)$. Find $y(1)$.`, 18, "b³ = 27 → b = 3, a = 6."),
  num(String.raw`$y=ab^x$ passes through $(1,12)$ and $(3,27)$. Find $y(4)$ (2 decimals).`, 40.5, "b² = 2.25 → b = 1.5, a = 8; 8(1.5)⁴.", null, 0.006),
  num("y = 2ˣ and y = x² cross at x = 2 and at one larger x. Find it.", 4, "2⁴ = 16 = 4².", planeDoc({ view: { xmin: -2, xmax: 5, ymin: -1, ymax: 20 }, curves: [{ f: (x) => 2 ** x, color: "violet" }, { f: (x) => x * x, color: "amber" }], points: [P(2, 4), P(4, 16)], step: { x: 1, y: 2 } })),
  num("How many real solutions does 2ˣ = x² have?", 3, "x ≈ −0.77, 2 and 4.", planeDoc({ view: { xmin: -3, xmax: 5, ymin: -1, ymax: 18 }, curves: [{ f: (x) => 2 ** x, color: "violet" }, { f: (x) => x * x, color: "amber" }], step: { x: 1, y: 2 } })),
  num(String.raw`What is the smallest positive integer $x$ with $3^x>5x^2$?`, 4, "3⁴ = 81 > 80; 3³ = 27 < 45."),
  mc(String.raw`A table has $x=0,2,4$ and $y=5,20,80$. Which model fits?`, String.raw`$y=5(2)^x$`, [String.raw`$y=5(4)^x$`, String.raw`$y=5x^2+5$`, String.raw`$y=15x+5$`], "×4 every 2 steps → ×2 each step."),
  num(String.raw`A table has $x=1,3,5$ and $y=6,54,486$. Find the y-intercept of the exponential model.`, 2, "b² = 9 → b = 3; a = 6/3."),
  tf(String.raw`$y=(-2)^x$ is an exponential function.`, false, "The base must be positive."),
  ms(String.raw`Which are true for $y=0.5(4)^x$? Select all.`, ["y-intercept 0.5", "passes through (1, 2)", "passes through (−1, 0.125)", "it is decreasing"], [0, 1, 2], "b = 4 > 1: increasing."),
  num("y = 2ˣ and y = 3(½)ˣ meet once. Find x (3 decimals).", Math.log(3) / Math.log(4), "2ˣ·2ˣ = 3 → 4ˣ = 3.", planeDoc({ view: { xmin: -2, xmax: 3, ymin: -1, ymax: 8 }, curves: [{ f: (x) => 2 ** x, color: "violet" }, { f: (x) => 3 * 0.5 ** x, color: "red" }], step: { x: 1, y: 1 } }), 0.002),
  num("One cent doubles every day. How many dollars is it after 20 days (2 decimals)?", 0.01 * 2 ** 20, "0.01 × 2²⁰.", null, 0.006),
  num(String.raw`Plan A grows as $100(1.1)^x$ and plan B as $100+30x$. What is the smallest whole $x>0$ with A greater than B?`, 21, "x = 20: 672.7 vs 700; x = 21: 740.0 vs 730."),
  num("The curve passes through (0, 1.5) and (2, 13.5). Find y(3).", 40.5, "b² = 9 → b = 3; 1.5 × 27.", planeDoc({ view: { xmin: -1, xmax: 4, ymin: -1, ymax: 45 }, curves: [{ f: (x) => 1.5 * 3 ** x, color: "violet" }], points: [P(0, 1.5), P(2, 13.5)], step: { x: 1, y: 5 } }), 0.006),
  mc(String.raw`Which equals $16^x$?`, String.raw`$4^{2x}$`, [String.raw`$4^{x+2}$`, String.raw`$2^{8x}$`, String.raw`$8^{2x}$`], "16 = 4²."),
  num(String.raw`An exponential has $\frac{y(2)}{y(0)}=9$ and $y(1)=6$. Find $y(3)$.`, 54, "b = 3, a = 2."),
  tf(String.raw`The graphs of $y=3^x$ and $y=\left(\tfrac13\right)^x$ are reflections of each other in the y-axis.`, true, "(⅓)ˣ = 3⁻ˣ."),
  num(String.raw`Find the average rate of change of $y=2^x$ from $x=0$ to $x=3$ (3 decimals).`, 7 / 3, "(8 − 1) ÷ 3.", null, 0.0005),
  num(String.raw`The first differences of $y=2^x$ for $x=0..4$ form a pattern. What is their common ratio?`, 2, "1, 2, 4, 8."),
  num("The graph shows y = 5(0.8)ˣ. What is the smallest whole x with y < 2?", 5, "0.8⁴ ≈ 0.41, 0.8⁵ ≈ 0.33.", planeDoc({ view: { xmin: 0, xmax: 8, ymin: 0, ymax: 6 }, curves: [{ f: (x) => 5 * 0.8 ** x, color: "violet" }], lines: [{ m: 0, b: 2, color: "amber", dash: true }], step: { x: 1, y: 1 } })),
  num(String.raw`$y=ab^x$ passes through $(2,3)$ and $(5,81)$. Find its y-intercept (4 decimals).`, 1 / 3, "b³ = 27 → b = 3; a = 3/9.", null, 0.0005),
];
