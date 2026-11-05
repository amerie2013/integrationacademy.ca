// 7.5 Exponential and Logarithmic Models — 20 hard questions
import { mc, ms, num, tf } from "./kit.mjs";
import { planeDoc } from "./fig.mjs";
const S = String.raw;
const L = Math.log10;

export const TOPIC = "7.5 Exponential and Logarithmic Models";
export const Q = [
  num(S`A culture has $800$ cells at $t=2$ h and $5000$ at $t=6$ h. Find the doubling time (two decimals).`, 4 * L(2) / L(6.25), "2^(4/d) = 6.25.", null, 0.01),
  num(S`A culture has $800$ cells at $t=2$ h and $5000$ at $t=6$ h. How many cells were there at $t=0$? (nearest whole)`, 800 / 6.25 ** 0.5, "b⁴ = 6.25 ⇒ b² = 2.5, so a = 800/2.5 = 320.", null, 1),
  num(S`4000 dollars at $5\%$ compounded monthly and 5000 dollars at $3\%$ compounded annually: when are they equal? (two decimals)`, L(1.25) / L((1 + 0.05 / 12) ** 12 / 1.03), "((1 + 0.05/12)¹²/1.03)ᵗ = 1.25.", null, 0.02),
  num(S`A substance has a half-life of $3$ h. What percent decays each hour? (two decimals)`, 100 * (1 - 0.5 ** (1 / 3)), "Hourly factor 0.5^(1/3) ≈ 0.7937.", null, 0.01),
  num(S`Soup cools from $95^\circ$C to $75^\circ$C in $8$ min in a $21^\circ$C room. When is it $40^\circ$C? (one decimal)`, 8 * L(19 / 74) / L(54 / 74), "Difference 74 → 54 in 8 min; solve (54/74)^(t/8) = 19/74.", null, 0.1),
  num(S`What rate compounded annually doubles money in exactly $9$ years? (percent, two decimals)`, (2 ** (1 / 9) - 1) * 100, "b⁹ = 2.", null, 0.01),
  num(S`How many whole years until an amount at $4.5\%$ compounded annually first exceeds $3$ times its start?`, Math.ceil(L(3) / L(1.045)), "t = log 3 / log 1.045 ≈ 24.96 ⇒ 25 years."),
  num(S`A 30 000 dollars car loses $15\%$ a year; a 24 000 dollars car loses $10\%$. When are they worth the same? (two decimals)`, L(0.8) / L(0.85 / 0.9), "(0.85/0.9)ᵗ = 0.8.", null, 0.01),
  num(S`A $90$ dB sound must be reduced so that its intensity is one-fiftieth. What is the new level? (one decimal)`, 90 - 10 * L(50), "90 − 10 log 50.", null, 0.1),
  num(S`For $N=20+30\log(t+1)$, how many weeks does it take to go from $50$ to $70$ wpm? (one decimal)`, 10 ** (5 / 3) - 1 - 9, "t = 10^(5/3) − 1 ≈ 45.4 for 70; t = 9 for 50.", null, 0.1),
  mc("An investment doubles in 10 years. How long does it take to grow eightfold?", "30 years", ["80 years", "40 years", "20 years"], "8 = 2³: three doubling times."),
  mc("A medicine has a half-life of 6 h. Which fraction remains after one day?", "1/16", ["1/4", "1/24", "1/8"], "24 h = 4 half-lives."),
  ms("Select every statement that is true of A = 1000(1.07)ᵗ.", ["it doubles about every 10.2 years", "it grows by 70 every year", "after 2 years it is about 1144.90", "it can never be negative"], [0, 2, 3], "The yearly increase grows: 70, then 74.90, …"),
  tf(S`If a quantity halves every $h$ years, it falls to $\frac1{10}$ in about $3.32h$ years.`, true, "(1/2)^(t/h) = 0.1 ⇒ t/h = log 0.1/log 0.5 ≈ 3.32."),
  tf(S`An account at $8\%$ compounded monthly earns the same as $8\%$ compounded annually after $1$ year.`, false, "Effective rate ≈ 8.30%."),
  mc("The graph shows data points and a curve y = ab^t through (1, 12) and (4, 96). Find b.", "2", ["8", "4", "3"], "b³ = 8.", planeDoc({ view: { xmin: -1, xmax: 5, ymin: 0, ymax: 110 }, curves: [{ f: (t) => 6 * 2 ** t, color: "violet" }], points: [{ x: 1, y: 12, label: "(1, 12)", color: "amber" }, { x: 4, y: 96, label: "(4, 96)", color: "amber" }], step: { x: 1, y: 10 } })),
  mc("The graph shows two accounts. Which is the better investment after 20 years?", "the violet curve (5% monthly from 4000)", ["the blue curve (3% annually from 5000)", "they are equal", "it cannot be told"], "They cross near t ≈ 11.0; after that the faster rate leads.", planeDoc({ view: { xmin: 0, xmax: 25, ymin: 3000, ymax: 14000 }, curves: [{ f: (t) => 4000 * (1 + 0.05 / 12) ** (12 * t), a: 0, color: "violet" }, { f: (t) => 5000 * 1.03 ** t, a: 0, color: "blue" }], step: { x: 5, y: 1000 } })),
  mc("The graph shows a cooling curve from 95 °C in a 21 °C room. About when is it 40 °C?", "about 34 min", ["about 8 min", "about 60 min", "about 20 min"], "t = 8 log(19/74) / log(54/74) ≈ 34.5.", planeDoc({ view: { xmin: -2, xmax: 70, ymin: 0, ymax: 100 }, curves: [{ f: (t) => 21 + 74 * (54 / 74) ** (t / 8), a: 0, color: "violet" }], lines: [{ m: 0, b: 40, color: "blue", dash: true }, { m: 0, b: 21, color: "red", dash: true }], step: { x: 5, y: 10 } })),
  mc("The graph shows the carbon-14 fraction (1/2)^(t/5730). About how old is a sample with 20% left?", "about 13 300 years", ["about 5700 years", "about 26 000 years", "about 1150 years"], "t = 5730 log 0.2 / log 0.5 ≈ 13 305.", planeDoc({ view: { xmin: -500, xmax: 25000, ymin: 0, ymax: 1.1 }, curves: [{ f: (t) => 0.5 ** (t / 5730), a: 0, color: "violet" }], lines: [{ m: 0, b: 0.2, color: "blue", dash: true }], step: { x: 2500, y: 0.1 } })),
  num(S`A star's brightness ratio is $\frac{b_1}{b_2}=10^{0.4(m_2-m_1)}$. If $b_1=40b_2$, find $m_2-m_1$ (two decimals).`, L(40) / 0.4, "0.4(m₂ − m₁) = log 40.", null, 0.01),
];
