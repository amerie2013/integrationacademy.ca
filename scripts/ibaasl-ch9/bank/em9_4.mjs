// 9.4 Laws of Logarithms — 20 easy + 20 medium questions
import { mc, ms, num, tf, fill } from "./kit.mjs";
import { planeDoc, P } from "./fig.mjs";

const S = String.raw;
const L2 = Math.log2;

export const E = [
  mc(S`$\log_b(mn)$ equals:`, S`$\log_b m+\log_b n$`, [S`$\log_b m\cdot\log_b n$`, S`$\log_b m-\log_b n$`, S`$n\log_b m$`], "Product law."),
  mc(S`$\log_b\frac mn$ equals:`, S`$\log_b m-\log_b n$`, [S`$\frac{\log_b m}{\log_b n}$`, S`$\log_b m+\log_b n$`, S`$\log_b(m-n)$`], "Quotient law."),
  mc(S`$\log_b m^5$ equals:`, S`$5\log_b m$`, [S`$(\log_b m)^5$`, S`$\log_b 5m$`, S`$\frac{\log_b m}{5}$`], "Power law."),
  num(S`Simplify $\log_2 4+\log_2 8$.`, 5, "log₂ 32."),
  num(S`Simplify $\log_3 54-\log_3 2$.`, 3, "log₃ 27."),
  num(S`Simplify $\log 2+\log 50$.`, 2, "log 100."),
  num(S`Simplify $\log_5 5^{7}$.`, 7, "7 log₅ 5."),
  num(S`Simplify $3\log_2 4$.`, 6, "3 × 2."),
  num(S`Simplify $\ln e^2+\ln e^3$.`, 5, "2 + 3."),
  tf(S`$\log(a+b)=\log a+\log b$.`, false, "No law for a sum."),
  tf(S`$\log_b 1=0$ for every valid base.`, true, "b⁰ = 1."),
  fill(S`Change of base: $\log_3 10=\dfrac{\ln 10}{\ln\_\_\_}$.`, ["3"], "Divide by ln of the base."),
  num(S`Evaluate $\log_3 20$ (3 d.p.).`, Math.round((Math.log(20) / Math.log(3)) * 1000) / 1000, "ln 20 ÷ ln 3.", null, 0.001),
  num(S`Evaluate $\log_5 2$ (3 d.p.).`, Math.round((Math.log(2) / Math.log(5)) * 1000) / 1000, "ln 2 ÷ ln 5.", null, 0.001),
  mc(S`Write $\log 3+\log 7$ as a single log.`, S`$\log 21$`, [S`$\log 10$`, S`$\log 4$`, S`$\log\frac37$`], "Product law."),
  mc(S`Write $2\ln 5$ as a single log.`, S`$\ln 25$`, [S`$\ln 10$`, S`$\ln 7$`, S`$2\ln 25$`], "Power law."),
  mc("The graph shows y = log₂(2x) and y = log₂x. The vertical gap between them is:", "1", ["2", "0.5", "x"], "log₂ 2x = 1 + log₂ x.", planeDoc({ view: { xmin: -1, xmax: 9, ymin: -3, ymax: 5 }, curves: [{ f: L2, a: 0.01, b: 9 }, { f: (x) => L2(2 * x), a: 0.005, b: 9, color: "amber" }], points: [P(4, 2, "", "blue"), P(4, 3, "", "amber")], step: { x: 1, y: 1 } })),
  ms("Which equal log 12? Select all.", [S`$\log3+\log4$`, S`$\log 24-\log 2$`, S`$2\log 2+\log 3$`, S`$\log 6\cdot\log 2$`], [0, 1, 2], "The last is a product of logs, not a log of a product."),
  num(S`Solve $\log_2 x+\log_2 4=5$.`, 8, "log₂ 4x = 5 ⇒ 4x = 32."),
  mc("The graph shows y = log₂(x²) for x > 0 (amber) and y = 2 log₂x (violet). For x > 0 they are:", "the same curve", ["parallel but 2 apart", "reflections in the x-axis", "different at x = 4"], "log x² = 2 log x for x > 0.", planeDoc({ view: { xmin: -1, xmax: 9, ymin: -4, ymax: 7 }, curves: [{ f: (x) => L2(x * x), a: 0.05, b: 9, color: "amber" }, { f: (x) => 2 * L2(x), a: 0.05, b: 9 }], points: [P(4, 4, "", "red")], step: { x: 1, y: 1 } })),
];

export const M = [
  mc(S`Expand $\log_3\dfrac{9x^2}{y}$.`, S`$2+2\log_3 x-\log_3 y$`, [S`$9+2\log_3x-\log_3y$`, S`$2\log_3x-\log_3y$`, S`$2+\log_3 x^2y$`], "log₃ 9 = 2."),
  mc(S`Expand $\ln\sqrt{\dfrac{x}{e}}$.`, S`$\frac12\ln x-\frac12$`, [S`$\frac12\ln x-1$`, S`$\ln x-\frac12$`, S`$\sqrt{\ln x-1}$`], "½(ln x − 1)."),
  mc(S`Condense $\log a+3\log b-\frac12\log c$.`, S`$\log\dfrac{ab^3}{\sqrt c}$`, [S`$\log\dfrac{3ab}{\sqrt c}$`, S`$\log(ab^3-\sqrt c)$`, S`$\log\dfrac{ab^3}{c^2}$`], "Power then product/quotient."),
  num(S`Simplify $\log_6 4+\log_6 18-\log_6 2$.`, 2, "log₆ 36."),
  num(S`Simplify $2\log_3 6-\log_3 4$.`, 2, "log₃ 9."),
  num(S`Simplify $\log_4 2+\log_4 32$.`, 3, "log₄ 64."),
  num(S`Simplify $\dfrac{\log 81}{\log 3}$.`, 4, "log₃ 81 by change of base."),
  mc(S`If $\log_b 2=x$ and $\log_b 3=y$, then $\log_b 72$ is:`, S`$3x+2y$`, [S`$2x+3y$`, S`$6xy$`, S`$x^3y^2$`], "72 = 2³ · 3²."),
  mc(S`If $\log_b 2=x$ and $\log_b 3=y$, then $\log_b\frac{9}{8}$ is:`, S`$2y-3x$`, [S`$3x-2y$`, S`$\frac{2y}{3x}$`, S`$y-x$`], "9/8 = 3²/2³."),
  num(S`Solve $\log_3 x+\log_3(x+6)=3$.`, 3, "x² + 6x − 27 = 0 ⇒ (x + 9)(x − 3) = 0; reject −9."),
  num(S`Solve $\log_2(3x+4)-\log_2 x=3$.`, 0.8, "3x + 4 = 8x.", null, 0.001),
  num(S`Solve $\ln x+\ln 5=\ln 30$.`, 6, "5x = 30."),
  num(S`Solve $2\log_5 x=\log_5 49$ for $x>0$.`, 7, "x² = 49."),
  tf(S`$\dfrac{\log 8}{\log 2}=\log 4$.`, false, "It equals log₂ 8 = 3."),
  tf(S`$\log_b a=\dfrac{1}{\log_a b}$.`, true, "Change of base: ln a/ln b."),
  mc("The graph shows y = log₃x + log₃(x + 6) and y = 3. They meet at x = ?", "3", ["9", "1", "27"], "x(x + 6) = 27.", planeDoc({ view: { xmin: 0, xmax: 6, ymin: -2, ymax: 6 }, curves: [{ f: (x) => (Math.log(x) + Math.log(x + 6)) / Math.log(3), a: 0.05, b: 6 }], lines: [{ m: 0, b: 3, color: "amber", dash: true }], points: [P(3, 3, "", "red")], step: { x: 1, y: 1 } })),
  ms(S`Which are correct for $x>0$? Select all.`, [S`$\ln x^3=3\ln x$`, S`$\ln\frac1x=-\ln x$`, S`$(\ln x)^2=2\ln x$`, S`$\ln(ex)=1+\ln x$`], [0, 1, 3], "(ln x)² is not 2 ln x."),
  num(S`Evaluate $\log_2 3\cdot\log_3 8$.`, 3, "ln 3/ln 2 · ln 8/ln 3 = log₂ 8."),
  mc("The graph shows y = ln x (amber) and y = log₂ x (violet). log₂ x equals:", S`$\dfrac{\ln x}{\ln 2}$`, [S`$\ln 2x$`, S`$2\ln x$`, S`$\ln x-\ln2$`], "Change of base.", planeDoc({ view: { xmin: -1, xmax: 9, ymin: -3, ymax: 4 }, curves: [{ f: Math.log, a: 0.01, b: 9, color: "amber" }, { f: L2, a: 0.01, b: 9 }], points: [P(4, 2, "", "blue")], step: { x: 1, y: 1 } })),
  num(S`Solve $\log_9 x=\frac12+\log_9 4$.`, 12, "log₉(x/4) = ½ ⇒ x/4 = 3."),
];
