// 7.2 Solving Exponential Equations — 20 hard questions
import { mc, ms, num, tf } from "./kit.mjs";
import { planeDoc } from "./fig.mjs";
const S = String.raw;
const L = Math.log10;

export const TOPIC = "7.2 Solving Exponential Equations";
export const Q = [
  num(S`Solve $3^{2x+1}=5^{x+2}$ to three decimals.`, (2 * L(5) - L(3)) / (2 * L(3) - L(5)), "(2x + 1) log 3 = (x + 2) log 5 ⇒ x = (2 log 5 − log 3)/(2 log 3 − log 5).", null, 0.002),
  num(S`Solve $2^{x+1}\cdot3^{x}=60$ to three decimals.`, L(30) / L(6), "2·6ˣ = 60 ⇒ 6ˣ = 30.", null, 0.002),
  num(S`Solve $\dfrac{5^{x}}{2^{x-1}}=40$ to three decimals.`, L(20) / L(2.5), "5ˣ/2ˣ · 2 = 40 ⇒ 2.5ˣ = 20.", null, 0.002),
  num(S`Solve $2\cdot9^{x}-5\cdot3^{x}+2=0$. Enter the positive root to three decimals.`, L(2) / L(3), "(2u − 1)(u − 2) = 0 ⇒ 3ˣ = 2 or 1/2.", null, 0.002),
  num(S`Solve $2\cdot9^{x}-5\cdot3^{x}+2=0$. Enter the negative root to three decimals.`, -L(2) / L(3), "3ˣ = 1/2 ⇒ x = −log 2 / log 3.", null, 0.002),
  num(S`Solve $4^{x}-3\cdot2^{x+1}+8=0$. Enter the larger root.`, 2, "u² − 6u + 8 = 0 ⇒ u = 2 or 4."),
  num(S`Solve $3^{x}+3^{2-x}=10$. Enter the larger root.`, 2, "Multiply by 3ˣ: u² − 10u + 9 = 0 ⇒ u = 1 or 9."),
  num(S`Solve $2^{x}-2^{-x}=\frac{15}{4}$.`, 2, "u − 1/u = 15/4 ⇒ 4u² − 15u − 4 = 0 ⇒ u = 4."),
  num(S`When does $600(1.07)^t=900(1.03)^t$? (two decimals)`, L(1.5) / L(1.07 / 1.03), "(1.07/1.03)ᵗ = 1.5.", null, 0.01),
  num(S`For what $x$ does $5\cdot2^x$ equal $2\cdot5^x$?`, 1, "(5/2)ˣ⁻¹ = 1 ⇒ x = 1."),
  num(S`How many digits does $7^{40}$ have?`, 34, "40 log 7 ≈ 33.80, so 34 digits."),
  mc(S`The solution of $a^x=b^{x+1}$ ($a\ne b$, both $>1$) is…`, S`$\dfrac{\log b}{\log a-\log b}$`, [S`$\dfrac{\log a}{\log b-\log a}$`, S`$\dfrac{\log b}{\log a}$`, S`$\log\dfrac ba$`], "x log a = x log b + log b."),
  mc(S`$4^x-k\cdot2^x+9=0$ has exactly one real solution when $k$ is…`, "6", ["3", "9", "−6"], "Need a double root u = 3 > 0: discriminant k² − 36 = 0 and k > 0."),
  ms(S`Select every equation that is quadratic in form.`, [S`$9^x-3^x-2=0$`, S`$4^{x}+2^{x+3}=20$`, S`$5^x+x=7$`, S`$16^x-4^{x}=6$`], [0, 1, 3], "5ˣ + x mixes x inside and outside an exponent."),
  tf(S`$2^x=x^2$ can be solved exactly by taking logarithms.`, false, "x log 2 = 2 log x still has x in two places; use a graph (x = 2, 4 and x ≈ −0.77)."),
  tf(S`If $2^a=5$ and $5^b=8$, then $ab=3$.`, true, "a = log 5/log 2, b = log 8/log 5 = 3 log 2/log 5, so ab = 3."),
  mc("The graph shows y = 2ˣ and y = x + 2. How many solutions does 2ˣ = x + 2 have?", "two", ["one", "none", "three"], "The line crosses the curve near x ≈ −1.69 and x = 2.", planeDoc({ view: { xmin: -3, xmax: 3, ymin: -1, ymax: 7 }, curves: [{ f: (x) => 2 ** x, color: "violet" }], lines: [{ m: 1, b: 2, color: "blue" }], step: { x: 1, y: 1 } })),
  mc("The graph shows populations A = 600(1.07)ᵗ and B = 900(1.03)ᵗ. About when does A overtake B?", "about year 10.5", ["about year 3", "about year 25", "never"], "t = log 1.5 / log(1.07/1.03) ≈ 10.64.", planeDoc({ view: { xmin: 0, xmax: 20, ymin: 400, ymax: 2600 }, curves: [{ f: (t) => 600 * 1.07 ** t, a: 0, color: "violet" }, { f: (t) => 900 * 1.03 ** t, a: 0, color: "blue" }], step: { x: 2, y: 200 } })),
  mc("The graph shows y = 3ˣ + 3²⁻ˣ and y = 10. What are the solutions of 3ˣ + 3²⁻ˣ = 10?", "x = 0 and x = 2", ["x = 1 only", "x = 2 only", "x = −2 and x = 2"], "u = 1 or 9.", planeDoc({ view: { xmin: -1, xmax: 3, ymin: 0, ymax: 14 }, curves: [{ f: (x) => 3 ** x + 3 ** (2 - x), color: "violet" }], lines: [{ m: 0, b: 10, color: "blue", dash: true }], step: { x: 0.5, y: 2 } })),
  mc("The graph shows y = 5·2ˣ and y = 2·5ˣ. Where do they meet?", "(1, 10)", ["(0, 5)", "(2, 20)", "(1, 5)"], "5·2ˣ = 2·5ˣ ⇒ x = 1, y = 10.", planeDoc({ view: { xmin: -1, xmax: 2.5, ymin: -2, ymax: 30 }, curves: [{ f: (x) => 5 * 2 ** x, color: "violet" }, { f: (x) => 2 * 5 ** x, color: "blue" }], step: { x: 0.5, y: 5 } })),
];
