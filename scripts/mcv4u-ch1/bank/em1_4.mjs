// 1.4 Limits and Continuity — 20 easy + 20 medium questions
import { mc, num, tf, fill } from "./kit.mjs";
import { planeDoc, P, H } from "./fig.mjs";

export const E = [
  tf("Every polynomial function is continuous for all real x.", true, "No breaks, holes or asymptotes."),
  mc("A hole in a graph is which type of discontinuity?", "removable", ["jump", "infinite", "none"], "The limit exists."),
  mc(String.raw`What type of discontinuity does $\frac1x$ have at 0?`, "infinite", ["removable", "jump", "none"], "Vertical asymptote."),
  num(String.raw`What value of $f(2)$ makes $f(x)=\frac{x^2-4}{x-2}$ continuous at 2?`, 4, "The limit x + 2 → 4."),
  tf("For f to be continuous at a, f(a) must be defined.", true, "One of the three conditions."),
  mc("What type of discontinuity does the graph show?", "jump", ["removable", "infinite", "none"], "Left and right limits differ.", planeDoc({ view: { xmin: -3, xmax: 3, ymin: -1, ymax: 5 }, curves: [{ f: (x) => x + 2, a: -3, b: -0.02, color: "violet" }, { f: (x) => 4 - x, a: 0, b: 3, color: "violet" }], points: [H(0, 2), P(0, 4, false)], step: { x: 1, y: 1 } })),
  num(String.raw`Evaluate $\lim_{x\to1}(3x+2)$.`, 5, "Continuous: substitute."),
  tf(String.raw`$f(x)=|x|$ is continuous at $x=0$.`, true, "f(0) = 0 = limit."),
  num(String.raw`Find $k$ so that $f(x)=x+k$ for $x\lt1$ and $f(x)=2x$ for $x\ge1$ is continuous.`, 1, "1 + k = 2."),
  mc(String.raw`Where is $\frac1{x-3}$ discontinuous?`, String.raw`$x=3$`, [String.raw`$x=-3$`, String.raw`$x=0$`, "nowhere"], "Denominator 0."),
  num(String.raw`Evaluate $\lim_{x\to2}(x+1)(x-3)$.`, -3, "3 × (−1)."),
  tf("A jump discontinuity can be removed by redefining one point.", false, "The two sides still disagree."),
  num(String.raw`How many discontinuities does $\frac1{x^2-1}$ have?`, 2, "x = ±1."),
  mc("Which function is continuous at x = 0?", String.raw`$x^2$`, [String.raw`$\frac1x$`, String.raw`$\frac{|x|}x$`, String.raw`$\frac{1}{x^2}$`], "A polynomial."),
  num(String.raw`Evaluate $\lim_{x\to3}\frac{x^2+1}{x+1}$.`, 2.5, "10 ÷ 4.", null, 0.0001),
  mc("What type of discontinuity does the graph show at x = 1?", "removable", ["jump", "infinite", "none"], "A single missing point.", planeDoc({ view: { xmin: -2, xmax: 4, ymin: -1, ymax: 6 }, curves: [{ f: (x) => 2 * x + 1, a: -2, b: 0.97, color: "violet" }, { f: (x) => 2 * x + 1, a: 1.03, b: 2.5, color: "violet" }], points: [H(1, 3)], step: { x: 1, y: 1 } })),
  num(String.raw`What value at $x=-3$ makes $\frac{x^2-9}{x+3}$ continuous?`, -6, "x − 3 → −6."),
  tf("A rational function is continuous wherever its denominator is not 0.", true, "Quotient law."),
  num(String.raw`Evaluate $\lim_{x\to0}\frac{x^2+3x}{x}$.`, 3, "x + 3."),
  fill("A vertical asymptote is a(n) ___ discontinuity.", ["infinite"], "f grows without bound."),
];

export const M = [
  num(String.raw`Find $k$ so that $f(x)=kx-1$ for $x\lt2$ and $f(x)=x^2+1$ for $x\ge2$ is continuous.`, 3, "2k − 1 = 5."),
  num(String.raw`Find $k$ so that $f(x)=x^2+k$ for $x\le1$ and $f(x)=3x+2$ for $x>1$ is continuous.`, 4, "1 + k = 5."),
  mc(String.raw`Classify the discontinuity of $\frac{x-1}{x^2-1}$ at $x=-1$.`, "infinite", ["removable", "jump", "none"], "1/(x + 1) near −1."),
  num(String.raw`Find $\lim_{x\to1}\frac{x-1}{x^2-1}$.`, 0.5, "1/(x + 1).", null, 0.0001),
  num(String.raw`Evaluate $\lim_{x\to2}\frac{x^3-8}{x-2}$.`, 12, "x² + 2x + 4."),
  num(String.raw`Evaluate $\lim_{x\to-3}\frac{x^2+2x-3}{x+3}$.`, -4, "x − 1."),
  tf(String.raw`$f(x)=\frac{x}{|x|}$ is continuous at $x=0$.`, false, "Not defined there; sides −1 and 1."),
  mc("Which condition for continuity fails at x = 2 in the graph?", "the limit does not equal f(2)", ["f(2) is not defined", "the limit does not exist", "none — it is continuous"], "The point sits off the curve.", planeDoc({ view: { xmin: -1, xmax: 5, ymin: -1, ymax: 6 }, curves: [{ f: (x) => 0.5 * x + 1, a: -1, b: 1.96, color: "violet" }, { f: (x) => 0.5 * x + 1, a: 2.04, b: 5, color: "violet" }], points: [H(2, 2), P(2, 5, false)], step: { x: 1, y: 1 } })),
  num(String.raw`Evaluate $\lim_{x\to1}\sqrt{3x+6}$.`, 3, "√9."),
  num(String.raw`Evaluate $\lim_{x\to4}\left(\frac{x^2-16}{x-4}+1\right)$.`, 9, "8 + 1."),
  num(String.raw`How many discontinuities does $\frac{x+2}{x^2+x-2}$ have?`, 2, "x = −2 (removable) and x = 1 (infinite)."),
  num(String.raw`Find the limit at the removable discontinuity of $\frac{x+2}{x^2+x-2}$ (4 decimals).`, -0.3333, "1/(x − 1) at −2.", null, 0.0005),
  mc(String.raw`Is $f(x)=2x$ for $x\lt0$, $f(x)=x^2$ for $x\ge0$ continuous at 0?`, "yes", ["no, jump", "no, hole", "no, asymptote"], "Both pieces give 0."),
  num(String.raw`$f(x)=\frac{x^2+kx}{x}$ for $x\ne0$ and $f(0)=5$. Find $k$ for continuity.`, 5, "x + k → k."),
  num(String.raw`Evaluate $\lim_{x\to0}\frac{(x+2)^2-4}{x}$.`, 4, "x + 4."),
  tf("If f is differentiable at a, then f is continuous at a.", true, "Differentiable implies continuous."),
  num(String.raw`Find $a$ so that $f(x)=ax^2$ for $x\lt2$ and $f(x)=4x+4$ for $x\ge2$ is continuous.`, 3, "4a = 12."),
  mc(String.raw`What type of discontinuity does $\frac1{x^2}$ have at 0?`, "infinite", ["removable", "jump", "none"], "→ +∞ from both sides."),
  num("The function shown is x + 1 for x < 2 and 5 − x for x ≥ 2. What is f(2)?", 3, "5 − 2; it is continuous.", planeDoc({ view: { xmin: -1, xmax: 5, ymin: -1, ymax: 5 }, curves: [{ f: (x) => x + 1, a: -1, b: 2, color: "violet" }, { f: (x) => 5 - x, a: 2, b: 5, color: "green" }], points: [P(2, 3)], step: { x: 1, y: 1 } })),
  num(String.raw`Evaluate $\lim_{x\to1}\frac{x-1}{\sqrt x-1}$.`, 2, "√x + 1."),
];
