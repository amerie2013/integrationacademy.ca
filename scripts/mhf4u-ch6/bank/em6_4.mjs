// 6.4 The Power Law of Logarithms — 20 easy + 20 medium questions
import { mc, ms, num, tf, fill } from "./kit.mjs";
import { planeDoc } from "./fig.mjs";
const S = String.raw;
const L = Math.log10;

export const E = [
  mc(S`Which is the power law of logarithms?`, S`$\log_b(x^n)=n\log_bx$`, [S`$\log_b(x^n)=(\log_bx)^n$`, S`$\log_b(nx)=n\log_bx$`, S`$\log_b(x^n)=\log_bn+\log_bx$`], "From (bᵐ)ⁿ = bᵐⁿ."),
  num(S`Evaluate $\log_2\left(2^9\right)$.`, 9, "Power law: 9 log₂ 2 = 9."),
  num(S`Evaluate $\log\left(100^3\right)$.`, 6, "3 log 100 = 3 × 2."),
  num(S`Evaluate $\log_3\left(9^5\right)$.`, 10, "5 log₃ 9 = 5 × 2."),
  num(S`Evaluate $\log_5\left(25^{-2}\right)$.`, -4, "−2 log₅ 25 = −2 × 2."),
  num(S`Evaluate $\log\sqrt{10}$ (decimal).`, 0.5, "½ log 10.", null, 0.001),
  num(S`Evaluate $\log_2\sqrt[4]{16}$.`, 1, "¼ log₂ 16 = ¼ × 4."),
  mc(S`Which formula changes $\log_bx$ to common logarithms?`, S`$\dfrac{\log x}{\log b}$`, [S`$\dfrac{\log b}{\log x}$`, S`$\log x-\log b$`, S`$\log(x-b)$`], "Change of base: log_b x = log x / log b."),
  num(S`Evaluate $\log_2 10$ to two decimals.`, L(10) / L(2), "log 10 ÷ log 2 = 1 ÷ 0.3010.", null, 0.01),
  num(S`Evaluate $\log_5 70$ to two decimals.`, L(70) / L(5), "log 70 ÷ log 5.", null, 0.01),
  num(S`Solve $2^x=30$ to two decimals.`, L(30) / L(2), "x = log 30 ÷ log 2.", null, 0.01),
  num(S`Solve $10^x=500$ to three decimals.`, L(500), "x = log 500.", null, 0.002),
  tf(S`$\log(x^3)=3\log x$ for $x>0$.`, true, "Power law."),
  tf(S`$(\log x)^2=2\log x$ for every $x>0$.`, false, "The power is outside the log. At x = 1000: (log x)² = 9 but 2 log x = 6."),
  tf(S`$\log_3 20=\log20-\log3$.`, false, "It is a quotient, log 20 ÷ log 3."),
  fill(S`$\log_b\left(x^5\right)=$ ____ $\log_bx$.`, ["5"], "The exponent comes down."),
  fill(S`To solve $7^x=20$, take the ____ of both sides.`, ["log", "logarithm", "logarithms", "common logarithm"], "Then use the power law."),
  mc(S`Between which integers is the solution of $3^x=50$?`, "3 and 4", ["2 and 3", "4 and 5", "16 and 17"], "3³ = 27 < 50 < 81 = 3⁴."),
  mc("The graph shows y = 2ˣ and y = 30. Estimate the solution of 2ˣ = 30.", "about 4.9", ["about 15", "about 4", "about 5.9"], "2⁴ = 16 and 2⁵ = 32: just below 5; exactly log 30/log 2 ≈ 4.91.", planeDoc({ view: { xmin: -1, xmax: 6, ymin: -5, ymax: 40 }, lines: [{ m: 0, b: 30, color: "blue", dash: true }], curves: [{ f: (x) => 2 ** x, color: "violet" }], step: { x: 1, y: 5 } })),
  mc("The graph shows y = log₃ x. Estimate log₃ 20.", "about 2.7", ["about 6.7", "about 1.3", "about 3.7"], "9 < 20 < 27, so between 2 and 3; log 20/log 3 ≈ 2.73.", planeDoc({ view: { xmin: -1, xmax: 30, ymin: -1, ymax: 4 }, curves: [{ f: (x) => L(x) / L(3), a: 0.05, color: "violet" }], points: [{ x: 9, y: 2, label: "(9, 2)", color: "blue" }, { x: 27, y: 3, label: "(27, 3)", color: "blue" }], step: { x: 3, y: 1 } })),
];

export const M = [
  num(S`Simplify $6\log_2x-\log_2x^4$ to $n\log_2x$. Find $n$.`, 2, "6 log₂ x − 4 log₂ x."),
  num(S`Evaluate $\log_4\left(8^2\right)$.`, 3, "2 log₄ 8 = 2 × 3/2."),
  num(S`Evaluate $\log_9\sqrt{27}$ (decimal).`, 0.75, "½ log₉ 27 = ½ × 3/2.", null, 0.001),
  num(S`Solve $5\cdot3^x=200$ to two decimals.`, L(40) / L(3), "Isolate: 3ˣ = 40; x = log 40 ÷ log 3.", null, 0.01),
  num(S`Solve $4^{x+1}=90$ to two decimals.`, L(90) / L(4) - 1, "(x + 1) log 4 = log 90.", null, 0.01),
  num(S`Solve $6^{2x}=500$ to three decimals.`, L(500) / (2 * L(6)), "2x log 6 = log 500.", null, 0.002),
  num(S`Solve $0.5^x=0.1$ to three decimals.`, L(0.1) / L(0.5), "x = log 0.1 ÷ log 0.5 = −1 ÷ −0.3010.", null, 0.002),
  num(S`How many years for money to double at $4\%$ a year? (two decimals)`, L(2) / L(1.04), "1.04ᵗ = 2.", planeDoc({ view: { xmin: -1, xmax: 25, ymin: -0.2, ymax: 3 }, lines: [{ m: 0, b: 2, color: "blue", dash: true }], curves: [{ f: (t) => 1.04 ** t, color: "violet" }], step: { x: 2, y: 0.5 } }), 0.01),
  num(S`A substance decays by $10\%$ per hour. Find its half-life in hours (two decimals).`, L(0.5) / L(0.9), "0.9ᵗ = 0.5.", null, 0.01),
  num(S`Evaluate $\log_{0.2}25$.`, -2, "log 25 ÷ log 0.2 = 1.398 ÷ (−0.699) = −2 (since 0.2⁻² = 25)."),
  mc(S`Which is equal to $\log_2 7$?`, S`$\dfrac{\log 7}{\log 2}$`, [S`$\dfrac{\log2}{\log7}$`, S`$\log\frac72$`, S`$7\log2$`], "Change of base."),
  mc(S`Which is the first step to solve $3\cdot2^{x}=48$?`, S`divide both sides by $3$`, ["take log of both sides immediately", "subtract 3", "multiply by 2"], "Isolate the power first: 2ˣ = 16, x = 4."),
  ms(S`Select every expression equal to $3\log x$ for $x>0$.`, [S`$\log x^3$`, S`$\log x+\log x+\log x$`, S`$(\log x)^3$`, S`$\log 3x$`], [0, 1], "x³ = x·x·x, and each factor contributes log x."),
  tf(S`$x=\dfrac{\log 9}{\log 3}$ solves $3^x=9$, and it equals $2$.`, true, "log 9 = 2 log 3."),
  tf(S`The solution of $1.05^t=2$ does not depend on the starting amount.`, true, "The starting amount cancels when you divide."),
  mc(S`$\log2\approx0.301$. Estimate $\log 8$.`, "0.903", ["2.408", "0.602", "1.301"], "log 8 = 3 log 2."),
  mc(S`$\log3\approx0.477$. Estimate $\log 81$.`, "1.908", ["0.954", "4.77", "2.43"], "log 81 = 4 log 3."),
  mc("The graph shows the half-life curve y = 0.8ᵗ and y = 0.5. Estimate the half-life.", "about 3.1", ["about 0.5", "about 6", "about 1.6"], "t = log 0.5 / log 0.8 ≈ 3.11.", planeDoc({ view: { xmin: -0.5, xmax: 10, ymin: -0.1, ymax: 1.1 }, lines: [{ m: 0, b: 0.5, color: "blue", dash: true }], curves: [{ f: (t) => 0.8 ** t, color: "violet" }], step: { x: 1, y: 0.1 } })),
  fill(S`$\log_b x^{1/2}=$ ____ $\log_bx$ (a fraction like 1/2).`, ["1/2", "0.5", "½"], "Roots are fractional powers."),
  num(S`Solve $2^x=5^{x-2}$ to two decimals.`, (2 * L(5)) / (L(5) - L(2)), "x log 2 = (x − 2) log 5 ⇒ x = 2 log 5 / (log 5 − log 2).", null, 0.01),
];
