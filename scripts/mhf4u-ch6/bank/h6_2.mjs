// 6.2 Logarithms — 20 hard questions
import { mc, ms, num, tf } from "./kit.mjs";
import { planeDoc } from "./fig.mjs";
const S = String.raw;
const lg = (b) => (x) => Math.log(x) / Math.log(b);
const G = (curves, pts, view) => planeDoc({ view, curves, points: pts, step: { x: 1, y: 1 } });

export const TOPIC = "6.2 Logarithms";
export const Q = [
  num(S`Evaluate $\log_{1/3}81$.`, -4, "(1/3)^y = 81 ⇒ 3^(−y) = 3⁴ ⇒ y = −4."),
  num(S`Evaluate $\log_{\sqrt3}27$.`, 6, "3^(y/2) = 3³ ⇒ y = 6."),
  num(S`Evaluate $\log_{32}16$ (decimal).`, 0.8, "2^(5y) = 2⁴ ⇒ y = 4/5.", null, 0.001),
  num(S`Evaluate $\log_8\frac1{4}$ (three decimals).`, -2 / 3, "2^(3y) = 2⁻² ⇒ y = −2/3.", null, 0.002),
  num(S`Evaluate $\log_2\left(\log_3 81\right)$.`, 2, "Inside: log₃ 81 = 4; then log₂ 4 = 2."),
  num(S`Evaluate $\log_5\left(\log_2\left(\log_3 3^{32}\right)\right)$.`, 1, "Work from the inside: log₃ 3³² = 32; log₂ 32 = 5; log₅ 5 = 1."),
  num(S`Find $x$ if $\log_x\frac1{16}=-\frac43$.`, 8, "x^(−4/3) = 1/16 ⇒ x^(4/3) = 16 ⇒ x = 16^(3/4) = 8."),
  num(S`Find $x$ if $\log_3(2x-1)=2$.`, 5, "2x − 1 = 3² = 9 ⇒ x = 5."),
  num(S`Find $x$ if $\log_2(\log_3 x)=1$.`, 9, "log₃ x = 2¹ = 2 ⇒ x = 3² = 9."),
  num(S`Evaluate $2^{3\log_2 5}$ using $b^{\log_b x}=x$ (hint: $3\log_25$ is an exponent).`, 125, "2^(3 log₂ 5) = (2^(log₂ 5))³ = 5³ = 125."),
  mc(S`For which values of $x$ is $\log_2(x-4)$ defined?`, S`$x>4$`, [S`$x\ge4$`, S`$x>0$`, S`$x<4$`], "The argument x − 4 must be positive."),
  mc(S`Which is larger: $\log_2 10$ or $\log_3 30$?`, S`$\log_2 10$`, [S`$\log_3 30$`, "they are equal", "it cannot be decided"], "log₂ 10 ≈ 3.32 (between 3 and 4); log₃ 30 ≈ 3.10 (between 3 and 4, but 30 is much closer to 27)."),
  tf(S`If $0<x<1$ and $b>1$, then $\log_bx<0$.`, true, "To make b smaller than 1 you need a negative exponent."),
  tf(S`$\log_b b^b=b$ for every allowed base $b$.`, true, "log_b bˣ = x with x = b."),
  ms(S`Select every true statement for $b>1$.`, [S`$\log_b b^2=2$`, S`$\log_b\frac1b=-1$`, S`$\log_b0=0$`, S`$\log_b\sqrt b=\frac12$`], [0, 1, 3], "log_b 0 is not defined: no power of b is 0."),
  num(S`A whole number $N$ has $\log N\approx5.62$. How many digits does $N$ have?`, 6, "10⁵ ≤ N < 10⁶, so N has 6 digits."),
  mc("The graph shows y = log_b x through (1/9, −2). Find b.", "3", ["9", "1/3", "−3"], "b⁻² = 1/9 ⇒ b² = 9 ⇒ b = 3.", G([{ f: lg(3), a: 0.005, color: "violet" }], [{ x: 1 / 9, y: -2, label: "(1/9, −2)", color: "blue" }], { xmin: -1, xmax: 10, ymin: -4, ymax: 3 })),
  mc("The graph shows y = log₂ x and y = log₄ x. Where do they meet?", "(1, 0) only", ["(2, 1) and (4, 2)", "(4, 1) only", "they never meet"], "Every logarithm graph passes through (1, 0); elsewhere log₄ x = ½ log₂ x ≠ log₂ x.", G([{ f: lg(2), a: 0.01, color: "violet" }, { f: lg(4), a: 0.01, color: "green" }], [{ x: 1, y: 0, label: "(1, 0)", color: "amber" }], { xmin: -1, xmax: 17, ymin: -3, ymax: 5 })),
  mc("Read the graph of y = log x. Which x gives y = 2.5 (to the nearest whole number)?", "316", ["250", "25", "1000"], "x = 10^2.5 ≈ 316.", planeDoc({ view: { xmin: -20, xmax: 1100, ymin: -1, ymax: 3.5 }, curves: [{ f: Math.log10, a: 0.5, color: "violet" }], points: [{ x: 316, y: 2.5, label: "(?, 2.5)", color: "amber" }], step: { x: 100, y: 0.5 } })),
  mc("The graph shows y = log_{1/2} x. Which is true?", "it decreases and passes through (2, −1)", ["it increases and passes through (2, 1)", "it passes through (0, 1)", "its domain is all reals"], "(1/2)⁻¹ = 2.", G([{ f: lg(0.5), a: 0.01, color: "violet" }], [{ x: 2, y: -1, label: "(2, −1)", color: "blue" }], { xmin: -1, xmax: 9, ymin: -4, ymax: 4 })),
];
