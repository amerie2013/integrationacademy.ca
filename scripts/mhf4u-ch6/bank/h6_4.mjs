// 6.4 The Power Law of Logarithms — 20 hard questions
import { mc, ms, num, tf } from "./kit.mjs";
import { planeDoc } from "./fig.mjs";
const S = String.raw;
const L = Math.log10;
const EXP = (f, c, view, step = { x: 1, y: 10 }) => planeDoc({ view, lines: [{ m: 0, b: c, color: "blue", dash: true }], curves: [{ f, color: "violet" }], step });

export const TOPIC = "6.4 The Power Law of Logarithms";
export const Q = [
  num(S`Solve $3^{2x-1}=40$ to three decimals.`, (L(40) / L(3) + 1) / 2, "(2x − 1) log 3 = log 40.", null, 0.002),
  num(S`Solve $2^{x}=3^{x-2}$ to three decimals.`, (2 * L(3)) / (L(3) - L(2)), "x log 2 = (x − 2) log 3 ⇒ x = 2 log 3 / (log 3 − log 2).", null, 0.002),
  num(S`Solve $5^{x+1}=2^{2x}$ to three decimals.`, L(5) / (2 * L(2) - L(5)), "(x + 1) log 5 = 2x log 2 ⇒ x = log 5 / (2 log 2 − log 5).", null, 0.002),
  num(S`How many digits does $2^{200}$ have?`, 61, "200 log 2 ≈ 60.2, so 10⁶⁰ ≤ 2²⁰⁰ < 10⁶¹: 61 digits."),
  num(S`How many digits does $7^{40}$ have?`, 34, "40 log 7 ≈ 33.8."),
  num(S`If $\log_2 3=p\approx1.585$, evaluate $\log_4 27$ to three decimals.`, (3 * L(3) / L(2)) / 2, "log₄ 27 = 3 log₂ 3 / 2.", null, 0.002),
  num(S`A culture triples every $5$ hours. How many hours until it is $100$ times as large? (two decimals)`, 5 * (L(100) / L(3)), "3^(t/5) = 100 ⇒ t = 5 log 100 / log 3.", null, 0.01),
  num(S`A car loses $15\%$ of its value each year. After how many years is it worth less than a quarter of the price? (whole years)`, 9, "0.85ᵗ < 0.25 ⇒ t > log 0.25 / log 0.85 ≈ 8.53, so 9 years."),
  num(S`A half-life is $12$ years. What fraction remains after $30$ years? (three decimals)`, 0.5 ** 2.5, "0.5^(30/12) = 0.5^2.5 ≈ 0.177.", null, 0.002),
  num(S`Solve $\left(\log_2x\right)\cdot\log_x 8=k$ for $k$ (any allowed $x$).`, 3, "log_x 8 = log₂ 8 / log₂ x = 3 / log₂ x, so the product is 3."),
  mc(S`Which is equal to $\log_{b^3}x$?`, S`$\frac13\log_bx$`, [S`$3\log_bx$`, S`$\log_bx^3$`, S`$(\log_bx)^3$`], "log x / log b³ = log x / (3 log b)."),
  mc(S`Which is larger, $3^{40}$ or $4^{34}$?`, S`$4^{34}$`, [S`$3^{40}$`, "they are equal", "cannot tell"], "40 log 3 ≈ 19.08; 34 log 4 ≈ 20.47."),
  tf(S`$\log_ab\cdot\log_ba=1$ for allowed $a,b$.`, true, "Change of base: (log b / log a)(log a / log b) = 1."),
  tf(S`$\log_2 5^{\log_5 2}=\log_2 2$.`, true, "5^(log₅ 2) = 2."),
  ms(S`Select every expression equal to $\log_2 9$.`, [S`$2\log_23$`, S`$\dfrac{\log9}{\log2}$`, S`$\dfrac{2\log3}{\log2}$`, S`$\log_29\cdot\log_22$`, S`$\log_49\cdot2$`], [0, 1, 2, 3, 4], "All are rewrites: log₄ 9 = log₂ 9 / 2."),
  mc(S`Solve $7^{x}=3$ exactly.`, S`$\dfrac{\log3}{\log7}$`, [S`$\dfrac37$`, S`$\log\frac37$`, S`$\log3-\log7$`], "x log 7 = log 3."),
  mc("The graph shows y = 1.5ˣ and y = 50. Which is the exact solution?", S`$\dfrac{\log50}{\log1.5}$`, [S`$\dfrac{50}{1.5}$`, S`$\log\dfrac{50}{1.5}$`, S`$50\log1.5$`], "x log 1.5 = log 50 ⇒ x ≈ 9.65.", EXP((x) => 1.5 ** x, 50, { xmin: -1, xmax: 12, ymin: -5, ymax: 70 })),
  mc("The graph shows y = 3ˣ and y = 2ˣ⁺¹. Where do they meet? (two decimals)", "x ≈ 1.71", ["x ≈ 0.63", "x = 1", "x ≈ 2.71"], "x log 3 = (x + 1) log 2 ⇒ x = log 2 / (log 3 − log 2) ≈ 1.71.", planeDoc({ view: { xmin: -1, xmax: 4, ymin: -1, ymax: 20 }, curves: [{ f: (x) => 3 ** x, color: "violet" }, { f: (x) => 2 ** (x + 1), color: "green" }], step: { x: 1, y: 2 } })),
  mc("The graph shows a decay curve y = 200(0.92)ᵗ and the level 50. Estimate the time.", "about 16.6", ["about 4", "about 25", "about 8.3"], "0.92ᵗ = 0.25 ⇒ t = log 0.25 / log 0.92 ≈ 16.6.", EXP((t) => 200 * 0.92 ** t, 50, { xmin: -1, xmax: 30, ymin: -10, ymax: 220 }, { x: 5, y: 20 })),
  mc("The graph shows y = log₅ x. Which value is log₅ 40, by change of base?", "about 2.29", ["about 8", "about 1.6", "about 3.29"], "log 40 / log 5 ≈ 1.602 / 0.699.", planeDoc({ view: { xmin: -1, xmax: 45, ymin: -1, ymax: 3 }, curves: [{ f: (x) => L(x) / L(5), a: 0.05, color: "violet" }], points: [{ x: 25, y: 2, label: "(25, 2)", color: "blue" }, { x: 40, y: L(40) / L(5), label: "(40, ?)", color: "amber" }], step: { x: 5, y: 1 } })),
];
