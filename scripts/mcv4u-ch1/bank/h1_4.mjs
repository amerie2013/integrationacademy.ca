// 1.4 Limits and Continuity — 20 hard questions
import { mc, num, tf } from "./kit.mjs";
import { planeDoc, graph, P, H } from "./fig.mjs";

export const TOPIC = "1.4 Limits and Continuity";
export const Q = [
  num(String.raw`$f(x)=ax+3$ for $x\lt1$, $x^2+b$ for $1\le x\le3$, $2x+6$ for $x>3$ is continuous. Find $a$.`, 1, "At 3: 9 + b = 12 → b = 3; at 1: a + 3 = 4."),
  num(String.raw`$f(x)=2x$ for $x\lt2$, $x^2+b$ for $x\ge2$ is continuous. Find $b$.`, 0, "4 + b = 4."),
  num(String.raw`$f(x)=\frac{x^3-1}{x-1}$ for $x\ne1$ and $f(1)=k$. Find $k$ for continuity.`, 3, "x² + x + 1 → 3."),
  num("How many discontinuities does the function graphed have?", 2, "A hole at x = −1 and a jump at x = 2.", planeDoc({ view: { xmin: -4, xmax: 5, ymin: -2, ymax: 5 }, curves: [{ f: (x) => 0.5 * x + 2, a: -4, b: -1.05, color: "violet" }, { f: (x) => 0.5 * x + 2, a: -0.95, b: 1.97, color: "violet" }, { f: (x) => x - 3, a: 2, b: 5, color: "violet" }], points: [H(-1, 1.5), H(2, 3), P(2, -1, false)], step: { x: 1, y: 1 } })),
  num(String.raw`Evaluate $\lim_{x\to0}\frac{\sqrt{x+36}-6}{x}$ (4 decimals).`, 0.0833, "1/(√(x + 36) + 6) → 1/12.", null, 0.0005),
  num(String.raw`How many zeros does $x^3-3x+1$ have in $[0,2]$? (Use f(0), f(1), f(2).)`, 2, "Signs +, −, +.", graph((x) => x ** 3 - 3 * x + 1, { xmin: -0.5, xmax: 2.3, ymin: -2, ymax: 4 }, [P(0, 1), P(1, -1), P(2, 3)])),
  tf(String.raw`Since $\frac1x$ is $-1$ at $x=-1$ and $1$ at $x=1$, it must equal 0 somewhere between.`, false, "1/x is not continuous on [−1, 1]."),
  num(String.raw`Find $m$ so that $f(x)=x^2+m$ for $x\lt2$ and $f(x)=mx+1$ for $x\ge2$ is continuous.`, 3, "4 + m = 2m + 1."),
  num("The function graphed is (x² + x − 2)/(x − 1). What value at x = 1 removes the discontinuity?", 3, "x + 2 → 3.", planeDoc({ view: { xmin: -3, xmax: 4, ymin: -2, ymax: 7 }, curves: [{ f: (x) => x + 2, a: -3, b: 0.96, color: "violet" }, { f: (x) => x + 2, a: 1.04, b: 4, color: "violet" }], points: [H(1, 3)], step: { x: 1, y: 1 } })),
  num(String.raw`Evaluate $\lim_{x\to2}\frac{x^4-16}{x^2-4}$.`, 8, "x² + 4."),
  num(String.raw`Find $c$ so that $f(x)=cx$ for $x\le3$ and $f(x)=x^2-c$ for $x>3$ is continuous.`, 2.25, "3c = 9 − c.", null, 0.0001),
  tf("A function can be continuous everywhere yet fail to be differentiable at a point.", true, "e.g. |x| at 0."),
  num(String.raw`At how many x-values is $\frac1{x^2-4x+3}$ discontinuous?`, 2, "x = 1 and x = 3."),
  num(String.raw`How large is the jump of $f(x)=x+2$ for $x\lt0$, $f(x)=x-1$ for $x\ge0$ at 0?`, 3, "|2 − (−1)|."),
  num(String.raw`Evaluate $\lim_{x\to0}\frac{x^2+4x}{x^2-2x}$.`, -2, "(x + 4)/(x − 2)."),
  num(String.raw`For the $k$ that makes $\lim_{x\to1}\frac{x^2+kx+3}{x-1}$ exist, find the limit.`, -2, "k = −4; (x − 3) → −2."),
  num("How many discontinuities does f(x) = (x + 1)/((x + 1)(x − 2)²) have (graph shown)?", 2, "Removable at −1, infinite at 2.", planeDoc({ view: { xmin: -3, xmax: 5, ymin: -1, ymax: 8 }, curves: [{ f: (x) => 1 / (x - 2) ** 2, a: -3, b: -1.05, color: "violet" }, { f: (x) => 1 / (x - 2) ** 2, a: -0.95, b: 1.62, color: "violet" }, { f: (x) => 1 / (x - 2) ** 2, a: 2.38, b: 5, color: "violet" }], vlines: [{ x: 2, color: "red", dash: true }], points: [H(-1, 1 / 9)], step: { x: 1, y: 1 } })),
  num(String.raw`Evaluate $\lim_{x\to-1}\frac{x^3+1}{x^2-1}$.`, -1.5, "(x² − x + 1)/(x − 1) → 3/(−2).", null, 0.0001),
  num(String.raw`$x^3-5$ is continuous and changes sign between two consecutive integers. What is the smaller one?`, 1, "f(1) = −4, f(2) = 3."),
  mc("Which function is continuous for all real numbers?", String.raw`$x^2+1$`, [String.raw`$\frac1{x-1}$`, String.raw`$\sqrt x$`, String.raw`$\frac{|x|}x$`], "√x isn't defined for x < 0."),
];
