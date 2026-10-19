// 1.3 Limits — 20 easy + 20 medium questions
import { mc, num, tf, fill } from "./kit.mjs";
import { planeDoc, P, H } from "./fig.mjs";

export const E = [
  num(String.raw`Evaluate $\lim_{x\to3}(x+4)$.`, 7, "Substitute."),
  num(String.raw`Evaluate $\lim_{x\to2}x^2$.`, 4, "Substitute."),
  num(String.raw`Evaluate $\lim_{x\to1}\frac{x^2-1}{x-1}$.`, 2, "x + 1 → 2."),
  tf("A limit can exist at a point where the function is not defined.", true, "e.g. a hole."),
  mc(String.raw`What is $\lim_{x\to0}\frac1x$?`, "it does not exist", ["0", "1", "∞ (a number)"], "−∞ from the left, +∞ from the right."),
  num(String.raw`Evaluate $\lim_{x\to\infty}\frac3x$.`, 0, "Huge denominator."),
  num(String.raw`Evaluate $\lim_{x\to-1}(x^3+2)$.`, 1, "−1 + 2."),
  mc("For the function shown, what is the limit as x → 2 from the left?", "1", ["3", "2", "it does not exist"], "Follow the left piece.", planeDoc({ view: { xmin: -1, xmax: 4, ymin: -1, ymax: 5 }, curves: [{ f: () => 1, a: -1, b: 1.97, color: "violet" }, { f: () => 3, a: 2, b: 4, color: "violet" }], points: [H(2, 1), P(2, 3, false)], step: { x: 1, y: 1 } })),
  tf("If the left and right limits differ, the limit does not exist.", true, "Both must agree."),
  num(String.raw`Evaluate $\lim_{x\to4}\sqrt x$.`, 2, "√4."),
  num(String.raw`Evaluate $\lim_{x\to\infty}\frac{2x+3}{x}$.`, 2, "2 + 3/x → 2."),
  mc("Direct substitution gives 0/0. What should you do?", "simplify (factor or rationalize) and try again", ["the limit is 0", "the limit is 1", "the limit does not exist"], "0/0 is indeterminate."),
  num(String.raw`Evaluate $\lim_{x\to0}\frac{x^2+5x}{x}$.`, 5, "x + 5 → 5."),
  num(String.raw`Evaluate $\lim_{x\to6}\frac{x^2-36}{x-6}$.`, 12, "x + 6."),
  mc(String.raw`What is $\lim_{x\to0^+}\frac1x$?`, String.raw`$+\infty$ (does not exist)`, [String.raw`$-\infty$`, "0", "1"], "Small positive denominators."),
  num(String.raw`Evaluate $\lim_{x\to\infty}\frac{5x^2}{x^2+1}$.`, 5, "Divide by x²."),
  tf("∞ is a real number.", false, "It describes unbounded growth."),
  num("The graph has a hole at x = 1. What is the limit as x → 1?", 3, "The height of the hole.", planeDoc({ view: { xmin: -2, xmax: 4, ymin: -1, ymax: 6 }, curves: [{ f: (x) => x + 2, a: -2, b: 0.96, color: "violet" }, { f: (x) => x + 2, a: 1.04, b: 4, color: "violet" }], points: [H(1, 3)], step: { x: 1, y: 1 } })),
  num(String.raw`What is the limit of the sequence $t_n=\frac1n$?`, 0, "1/n → 0."),
  fill(String.raw`The limit from the left is written $x\to a^{\,?}$; the missing sign is ___.`, ["-", "−", "minus"], "a⁻ means from below."),
];

export const M = [
  num(String.raw`Evaluate $\lim_{x\to3}\frac{x^2-x-6}{x-3}$.`, 5, "(x − 3)(x + 2)."),
  num(String.raw`Evaluate $\lim_{x\to-2}\frac{x^2+5x+6}{x+2}$.`, 1, "(x + 2)(x + 3)."),
  num(String.raw`Evaluate $\lim_{x\to0}\frac{\sqrt{x+16}-4}{x}$.`, 0.125, "1/(√(x + 16) + 4) → ⅛.", null, 0.0001),
  num(String.raw`Evaluate $\lim_{x\to\infty}\frac{6x+1}{3x-2}$.`, 2, "6/3."),
  num(String.raw`Evaluate $\lim_{x\to1}\frac{x^4-1}{x-1}$.`, 4, "x³ + x² + x + 1."),
  mc(String.raw`Describe $\lim_{x\to2}\frac1{(x-2)^2}$.`, String.raw`$+\infty$ — the limit does not exist`, ["0", String.raw`$\frac14$`, String.raw`$-\infty$`], "Both sides grow without bound."),
  num(String.raw`Evaluate $\lim_{h\to0}\frac{(1+h)^2-1}{h}$.`, 2, "2 + h."),
  num(String.raw`Estimate $\lim_{x\to0}\frac{2^x-1}{x}$ (3 decimals).`, 0.693, "Table values approach ln 2.", null, 0.002),
  mc("For the function shown, what is the limit as x → 1?", "2", ["4", "it does not exist", "1"], "Both sides approach 2; f(1) = 4 doesn't matter.", planeDoc({ view: { xmin: -2, xmax: 4, ymin: -1, ymax: 5 }, curves: [{ f: (x) => x + 1, a: -2, b: 0.96, color: "violet" }, { f: (x) => x + 1, a: 1.04, b: 4, color: "violet" }], points: [H(1, 2), P(1, 4, false)], step: { x: 1, y: 1 } })),
  num(String.raw`Evaluate $\lim_{x\to-\infty}\frac{3x+1}{x-2}$.`, 3, "3/1."),
  num(String.raw`Evaluate $\lim_{x\to5}\frac{x-5}{x^2-25}$.`, 0.1, "1/(x + 5).", null, 0.0001),
  tf(String.raw`$\lim_{x\to0}|x|=0$.`, true, "Both sides → 0."),
  num(String.raw`Evaluate $\lim_{x\to3}\frac{\frac1x-\frac13}{x-3}$ (4 decimals).`, -0.1111, "−1/(3x) → −1/9.", null, 0.0005),
  num(String.raw`Find the limit of the sequence $t_n=\frac{2n+1}{n+3}$.`, 2, "Divide by n."),
  mc(String.raw`What is $\lim_{x\to4^-}\frac1{x-4}$?`, String.raw`$-\infty$`, [String.raw`$+\infty$`, "0", String.raw`$\frac14$`], "Small negative denominators."),
  num(String.raw`Evaluate $\lim_{x\to1}\frac{x^2+2x-3}{x^2-1}$.`, 2, "(x + 3)/(x + 1)."),
  num(String.raw`Evaluate $\left(1+\frac1{10}\right)^{10}$ (4 decimals), a term of the sequence approaching $e$.`, 2.5937, "1.1¹⁰.", null, 0.0005),
  num(String.raw`Evaluate $\lim_{x\to0}\frac{x^3-2x}{x}$.`, -2, "x² − 2."),
  mc("The graph has asymptotes x = 1 and y = 2. What is the limit as x → ∞?", "2", ["1", "∞", "0"], "Horizontal asymptote.", planeDoc({ view: { xmin: -6, xmax: 10, ymin: -4, ymax: 8 }, curves: [{ f: (x) => 2 + 1 / (x - 1), a: -6, b: 0.8, color: "violet" }, { f: (x) => 2 + 1 / (x - 1), a: 1.2, b: 10, color: "violet" }], vlines: [{ x: 1, color: "red", dash: true }], lines: [{ m: 0, b: 2, color: "red", dash: true }], step: { x: 2, y: 2 } })),
  num(String.raw`Evaluate $\lim_{x\to9}\frac{\sqrt x-3}{x-9}$ (4 decimals).`, 0.1667, "1/(√x + 3).", null, 0.0005),
];
