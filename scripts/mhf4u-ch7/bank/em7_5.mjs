// 7.5 Exponential and Logarithmic Models — 20 easy + 20 medium questions
import { mc, ms, num, tf, fill } from "./kit.mjs";
import { planeDoc } from "./fig.mjs";
const S = String.raw;
const L = Math.log10;

export const E = [
  mc("A quantity grows 6% per year. What is the yearly growth factor?", "1.06", ["0.06", "6", "0.94"], "1 + 0.06."),
  mc("A quantity decays 8% per year. What is the yearly factor?", "0.92", ["0.08", "1.08", "−0.08"], "1 − 0.08."),
  mc(S`Which model describes $200$ g with a half-life of $5$ days?`, S`$A=200\left(\tfrac12\right)^{t/5}$`, [S`$A=200\left(\tfrac12\right)^{5t}$`, S`$A=100(5)^t$`, S`$A=200-\tfrac t5$`], "t/5 counts the half-lives."),
  mc(S`500 dollars at $4\%$ per year compounded monthly is modelled by…`, S`$A=500\left(1+\tfrac{0.04}{12}\right)^{12t}$`, [S`$A=500(1.04)^{12t}$`, S`$A=500(1.04)^{t/12}$`, S`$A=500\left(1+\tfrac{0.04}{12}\right)^{t}$`], "Rate per month r/12, 12t months."),
  num(S`What fraction remains after $20$ days if the half-life is $5$ days?`, 0.0625, "4 half-lives: (1/2)⁴.", null, 0.0001),
  num(S`$500$ mg with a half-life of $3$ h: how much is left after $9$ h?`, 62.5, "3 half-lives: 500/8.", null, 0.01),
  num(S`How many years does money take to double at $6\%$ compounded annually? (two decimals)`, L(2) / L(1.06), "1.06ᵗ = 2.", null, 0.01),
  num(S`How many years does money take to double at $2.5\%$ compounded annually? (one decimal)`, L(2) / L(1.025), "1.025ᵗ = 2.", null, 0.05),
  num(S`A population of $1500$ grows $3\%$ a year. What is it after $10$ years? (nearest whole)`, 1500 * 1.03 ** 10, "1500(1.03)¹⁰.", null, 1),
  num(S`A culture doubles every $4$ h. By what factor does it grow in $12$ h?`, 8, "3 doublings: 2³."),
  num(S`How many years until 1000 dollars becomes 1500 dollars at $4\%$ compounded annually? (two decimals)`, L(1.5) / L(1.04), "1.04ᵗ = 1.5.", null, 0.01),
  num(S`A car loses $8\%$ of its value per year. After how many years is it worth half? (two decimals)`, L(0.5) / L(0.92), "0.92ᵗ = 0.5.", null, 0.01),
  tf("The doubling time of an investment does not depend on how much is invested.", true, "P cancels from P(1 + r)ᵗ = 2P."),
  tf("A decay factor of 0.85 means the quantity loses 85% each period.", false, "It keeps 85% and loses 15%."),
  tf(S`In $A=A_0\left(\tfrac12\right)^{t/h}$, when $t=h$ exactly half remains.`, true, "(1/2)¹ = 1/2."),
  fill(S`Monthly compounding at an annual rate $r$ uses a rate of ____ per month.`, ["r/12"], "Divide the annual rate by 12."),
  fill(S`If a quantity triples every $d$ hours, its model is $A=A_0\cdot$ ____ $^{t/d}$.`, ["3"], "One tripling per d hours."),
  mc(S`$N=20+30\log(t+1)$: what is $N$ when $t=99$?`, "80", ["50", "110", "2990"], "20 + 30 log 100 = 20 + 60."),
  mc("The graph shows a decay model starting at 80. Estimate its half-life.", "about 4", ["about 2", "about 8", "about 40"], "The curve passes (4, 40).", planeDoc({ view: { xmin: -1, xmax: 16, ymin: 0, ymax: 90 }, curves: [{ f: (t) => 80 * 0.5 ** (t / 4), a: 0, color: "violet" }], lines: [{ m: 0, b: 40, color: "blue", dash: true }], step: { x: 1, y: 10 } })),
  mc("The graph shows an investment growing from 1000. Estimate the doubling time.", "about 12 years", ["about 6 years", "about 24 years", "about 2 years"], "It reaches 2000 near t = 12 (6% per year).", planeDoc({ view: { xmin: -1, xmax: 25, ymin: 0, ymax: 4500 }, curves: [{ f: (t) => 1000 * 1.06 ** t, a: 0, color: "violet" }], lines: [{ m: 0, b: 2000, color: "blue", dash: true }], step: { x: 2, y: 500 } })),
];

export const M = [
  num(S`How many years does money take to triple at $5\%$ compounded annually? (two decimals)`, L(3) / L(1.05), "1.05ᵗ = 3.", null, 0.01),
  num(S`A sample drops from $50$ g to $20$ g in $12$ h. Find its half-life (two decimals).`, 12 * L(0.5) / L(0.4), "(1/2)^(12/h) = 0.4.", null, 0.01),
  num(S`How many years to double at $6\%$ compounded monthly? (two decimals)`, L(2) / (12 * L(1.005)), "1.005¹²ᵗ = 2.", null, 0.01),
  num(S`How many years to double at $5\%$ compounded quarterly? (two decimals)`, L(2) / (4 * L(1.0125)), "1.0125⁴ᵗ = 2.", null, 0.01),
  num(S`A machine loses $20\%$ a year. After how many years is it worth a quarter of its price? (two decimals)`, L(0.25) / L(0.8), "0.8ᵗ = 0.25.", null, 0.01),
  num(S`A bone has $75\%$ of its carbon-14 (half-life $5730$ years). Find its age (nearest $10$ years).`, 5730 * L(0.75) / L(0.5), "t = 5730 log 0.75 / log 0.5 ≈ 2378.", null, 6),
  num(S`$30\%$ of a drug remains after $4$ h. Find its half-life (two decimals).`, 4 * L(0.5) / L(0.3), "(1/2)^(4/h) = 0.3.", null, 0.01),
  num(S`Find the effective annual rate of $12\%$ compounded monthly, as a percent (two decimals).`, ((1 + 0.01) ** 12 - 1) * 100, "1.01¹² − 1 ≈ 0.1268.", null, 0.01),
  num(S`By how many decibels does the level rise when the intensity doubles? (two decimals)`, 10 * L(2), "10 log 2.", null, 0.01),
  num(S`A population triples in $8$ years. What is its annual growth rate, in percent? (two decimals)`, (3 ** (1 / 8) - 1) * 100, "b⁸ = 3 ⇒ b ≈ 1.1472.", null, 0.01),
  num(S`Coffee at $80^\circ$C in a $20^\circ$C room: the difference halves every $10$ min. What is its temperature after $15$ min? (one decimal)`, 20 + 60 * 0.5 ** 1.5, "20 + 60(0.5)^1.5.", null, 0.1),
  num(S`With the coffee above, when is it $40^\circ$C? (one decimal, minutes)`, 10 * L(20 / 60) / L(0.5), "60(0.5)^(t/10) = 20.", null, 0.1),
  mc(S`A model through $(0,40)$ and $(3,320)$ is $y=40b^t$. Find $b$.`, "2", ["8", "3", "280/3"], "b³ = 8."),
  mc(S`Which change makes money double sooner?`, "a higher rate", ["a larger deposit", "a smaller deposit", "a longer term"], "The deposit cancels; only the rate and compounding matter."),
  ms(S`Select every model that shows decay.`, [S`$A=50(0.9)^t$`, S`$A=50\left(\tfrac12\right)^{t/3}$`, S`$A=50(1.1)^{-t}$`, S`$A=50(2)^{t/3}$`], [0, 1, 2], "1.1⁻ᵗ = (1/1.1)ᵗ also decays."),
  tf(S`$5\%$ compounded monthly grows money faster than $5\%$ compounded annually.`, true, "Effective rate ≈ 5.12%."),
  tf(S`For $N=20+30\log(t+1)$, going from $t=9$ to $t=99$ adds $300$.`, false, "It adds 30: log 100 − log 10 = 1."),
  fill(S`If $y=ab^t$ passes through $(1,6)$ and $(3,54)$, then $b=$ ____.`, ["3"], "b² = 9, b > 0."),
  mc("The graph shows a cooling model. What is the room temperature?", "20 °C", ["0 °C", "80 °C", "50 °C"], "The horizontal asymptote is T = 20.", planeDoc({ view: { xmin: -2, xmax: 60, ymin: 0, ymax: 90 }, curves: [{ f: (t) => 20 + 60 * 0.5 ** (t / 10), a: 0, color: "violet" }], lines: [{ m: 0, b: 20, color: "red", dash: true }], step: { x: 5, y: 10 } })),
  mc("The graph shows N = 20 + 30 log(t + 1). About when does N reach 60?", "about t = 21", ["about t = 4", "about t = 60", "about t = 100"], "log(t + 1) = 4/3 ⇒ t ≈ 20.5.", planeDoc({ view: { xmin: -2, xmax: 50, ymin: 0, ymax: 90 }, curves: [{ f: (t) => 20 + 30 * L(t + 1), a: 0, color: "violet" }], lines: [{ m: 0, b: 60, color: "blue", dash: true }], step: { x: 5, y: 10 } })),
];
