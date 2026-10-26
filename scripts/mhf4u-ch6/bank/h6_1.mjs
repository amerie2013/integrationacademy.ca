// 6.1 The Exponential Function and Its Inverse — 20 hard questions
import { mc, ms, num, tf } from "./kit.mjs";
import { graph, planeDoc, P } from "./fig.mjs";

const lg = (b) => (x) => Math.log(x) / Math.log(b);
const YX = { m: 1, b: 0, color: "gray", dash: true };

export const TOPIC = "6.1 The Exponential Function and Its Inverse";
export const Q = [
  num(String.raw`Find the x-intercept of the inverse of $f(x)=2\cdot4^x-8$.`, -6, "f(0) = 2 − 8 = −6, so the inverse passes through (−6, 0)."),
  num(String.raw`Find the y-intercept of the inverse of $f(x)=2\cdot4^x-8$.`, 1, "f(x) = 0 → 4ˣ = 4 → x = 1, so the inverse passes through (0, 1)."),
  num(String.raw`The domain of the inverse of $y=-5\cdot2^x+10$ is $x\lt c$. Find $c$.`, 10, "The range of y = −5·2ˣ + 10 is y < 10."),
  num(String.raw`$y=b^x$ ($b>1$) meets its inverse at $(5,5)$. Find $b$ to 3 decimal places.`, 1.380, "b⁵ = 5 → b = 5^(1/5) ≈ 1.380.", null, 0.001),
  num(String.raw`A population is $P=500\cdot3^t$ ($t$ in years). Use the inverse to find $t$ when $P=4500$.`, 2, "3ᵗ = 4500/500 = 9."),
  num(String.raw`$y=b^x$ passes through $(-3,8)$. Find the y-value on its inverse when $x=32$.`, -5, "b⁻³ = 8 → b = ½; (½)ʸ = 32 → y = −5."),
  num(String.raw`$g$ is the inverse of $f(x)=4^x$. Find $g(64)$.`, 3, "g(64) is the exponent with 4ʸ = 64."),
  num("The graph of f(x) = 3·2ˣ − 4 is shown. Find the x-intercept of its inverse.", -1, "f(0) = 3 − 4 = −1, so the inverse passes through (−1, 0).", planeDoc({ view: { xmin: -5, xmax: 3, ymin: -5, ymax: 8 }, curves: [{ f: (x) => 3 * 2 ** x - 4, color: "violet" }], lines: [{ m: 0, b: -4, color: "red", dash: true }], step: { x: 1, y: 1 } })),
  tf(String.raw`The graphs of $y=3^x$ and its inverse never meet.`, true, "Any common point would be on y = x, but 3ˣ > x for every x."),
  mc(String.raw`For which base does $y=b^x$ meet its inverse?`, String.raw`$b=1.2$`, [String.raw`$b=2$`, String.raw`$b=3$`, String.raw`$b=10$`], "1.2¹ = 1.2 > 1 but 1.2² = 1.44 < 2, so 1.2ˣ crosses y = x; the other bases stay above y = x."),
  num("The graph shows f(x) = 4ˣ (blue), its inverse (violet) and a marked point on f. Find the y-value on the inverse when x = 8.", 1.5, "4^1.5 = 8, so (1.5, 8) is on f and (8, 1.5) is on the inverse.", planeDoc({ view: { xmin: -2, xmax: 9, ymin: -2, ymax: 9 }, lines: [YX], curves: [{ f: (x) => 4 ** x, color: "blue" }, { f: lg(4), a: 0.01, color: "violet" }], points: [P(1.5, 8)], step: { x: 1, y: 1 } }), 0.0001),
  num(String.raw`Find the y-value on the inverse of $f(x)=3^x+3^{x+1}$ when $x=36$.`, 2, "3ˣ + 3·3ˣ = 4·3ˣ; 4·3ʸ = 36 → 3ʸ = 9."),
  num(String.raw`Find the y-value on the inverse of $y=2^{2x}$ when $x=64$.`, 3, "2^(2y) = 4ʸ = 64."),
  ms("Select every function whose inverse is a function.", [String.raw`$y=2^x$`, String.raw`$y=x^2$`, String.raw`$y=0.3^x$`, String.raw`$y=1^x$`, String.raw`$y=-3^x$`], [0, 2, 4], "x² and 1ˣ fail the horizontal line test; the exponentials (and their reflections) pass."),
  num(String.raw`$g$ is the inverse of $f(x)=3^x-1$ and $g(a)=3$. Find $a$.`, 26, "g(a) = 3 means f(3) = a: 27 − 1."),
  num("The graph of f(x) = bˣ − 3 passes through the marked point. Find the y-value on the inverse of f when x = 61.", 3, "b² − 3 = 13 → b = 4; 4ʸ − 3 = 61 → 4ʸ = 64.", graph((x) => 4 ** x - 3, { xmin: -3, xmax: 2.5, ymin: -4, ymax: 16 }, [P(2, 13)], { lines: [{ m: 0, b: -3, color: "red", dash: true }], step: { x: 0.5, y: 2 } })),
  mc(String.raw`$y=b^{x-2}$ is $y=b^x$ shifted right 2. How is its inverse related to the inverse of $y=b^x$?`, "shifted up 2", ["shifted right 2", "shifted down 2", "shifted left 2"], "Swap: x = b^(y − 2), so y − 2 is the old inverse: a horizontal shift becomes a vertical one."),
  num("The graph shows the inverse of y = 2ˣ + k with its dashed vertical asymptote. Find k.", 3, "The vertical asymptote x = 3 of the inverse came from y = 3, so k = 3.", planeDoc({ view: { xmin: -1, xmax: 12, ymin: -4, ymax: 5 }, vlines: [{ x: 3, color: "red", dash: true }], curves: [{ f: (x) => lg(2)(x - 3), a: 3.01, color: "violet" }], points: [P(4, 0), P(7, 2)], step: { x: 1, y: 1 } })),
  tf(String.raw`The inverse of $y=\left(\tfrac12\right)^x$ is the inverse of $y=2^x$ reflected in the x-axis.`, true, "x = (½)ʸ = 2^(−y), so −y is the inverse of 2ˣ: a reflection in the x-axis."),
  mc("The graph shows y = 0.5ˣ, its inverse and the line y = x. How many points do the two curves share?", "1", ["0", "2", "3"], "Both decrease and cross once, on y = x.", planeDoc({ view: { xmin: -3, xmax: 5, ymin: -3, ymax: 5 }, lines: [YX], curves: [{ f: (x) => 0.5 ** x, color: "blue" }, { f: lg(0.5), a: 0.01, color: "violet" }], step: { x: 1, y: 1 } })),
];
