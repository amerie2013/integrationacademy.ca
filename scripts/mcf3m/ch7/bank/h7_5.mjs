// 7.5 Exponential Growth — 20 hard questions
import { mc, ms, num, tf, P, n2, eg } from "./ek.mjs";
const S = String.raw;
const first = (fn, lim) => { let t = 0; while (fn(t) <= lim) t++; return t; };

export const TOPIC = "7.5 Exponential Growth";
export const Q = [
  num(S`An amount grows from $1250$ to $1458$ in $2$ years at a constant rate. Enter the percent rate (two decimals).`, Math.round((Math.sqrt(1458 / 1250) - 1) * 10000) / 100, "(1 + r)² = 1.1664 → 1.08.", null, 0.011),
  num(S`A population triples every $12$ years. By what factor does it grow in $4$ years? (two decimals)`, Math.round(3 ** (1 / 3) * 100) / 100, "3^(1/3).", null, 0.011),
  num(S`Town A: $40\,000$, $+1500$ per year. Town B: $30\,000$, $+4\%$ per year. Enter the first whole year B is larger.`, first((t) => 30000 * 1.04 ** t - (40000 + 1500 * t), 0), "Compare year by year.", eg((t) => 30000 * 1.04 ** t, { xmin: 0, xmax: 40, ymin: 25000, ymax: 120000 }, { x: 5, y: 10000 }, { more: [{ f: (t) => 40000 + 1500 * t, color: "green" }], xlabel: "t", ylabel: "P" })),
  num(S`$800$ bacteria double every $25$ min. How many minutes until there are $51\,200$?`, 150, "64 = 2⁶: 6 doublings."),
  n2(S`$2400(1.035)^t$: enter the amount at $t=15$.`, 2400 * 1.035 ** 15, "Calculator."),
  num(S`For which whole $t$ does $2400(1.035)^t$ first exceed $4800$?`, first((t) => 2400 * 1.035 ** t, 4800), "Doubling at 3.5%."),
  mc("The graph shows A = A₀·2^(t/d). Using the marked points, what is d?", "6", ["3", "12", "2"], "A doubles from 500 to 1000 in 6.", eg((t) => 500 * 2 ** (t / 6), { xmin: 0, xmax: 20, ymin: 0, ymax: 5000 }, { x: 2, y: 500 }, { points: [P(0, 500, "(0, 500)"), P(6, 1000, "(6, 1000)"), P(12, 2000, "(12, 2000)")], xlabel: "t", ylabel: "A" })),
  n2("For that graph, enter A at t = 15.", 500 * 2 ** 2.5, "500·2^2.5.", eg((t) => 500 * 2 ** (t / 6), { xmin: 0, xmax: 20, ymin: 0, ymax: 5000 }, { x: 2, y: 500 }, { points: [P(15, 2828.43, "(15, ?)")], xlabel: "t", ylabel: "A" })),
  ms(S`Select every TRUE statement about $A=A_0(1.06)^t$.`, ["it grows 6% per period", "after 2 periods it has grown 12.36%", "it doubles in under 12 periods", "it adds 6 each period"], [0, 1, 2], "1.06¹² ≈ 2.01."),
  tf(S`If a quantity grows $50\%$ each year, it more than doubles in $2$ years.`, true, "1.5² = 2.25."),
  num(S`A video's views grow $30\%$ per day from $2000$. On which whole day does it first pass $20\,000$?`, first((t) => 2000 * 1.3 ** t, 20000), "1.3ᵗ > 10."),
  n2(S`Find the yearly rate (percent, two decimals) at which an amount doubles in exactly $10$ years.`, (2 ** 0.1 - 1) * 100, "(1 + r)¹⁰ = 2."),
  mc("The table shows t = 0, 1, 2, 3 and A = 50, 65, 84.5, 109.85. Which model?", S`$A=50(1.3)^t$`, [S`$A=50+15t$`, S`$A=50(1.15)^t$`, S`$A=65(1.3)^t$`], "Ratio 1.3.", eg((t) => 50 * 1.3 ** t, { xmin: 0, xmax: 4, ymin: 0, ymax: 150 }, { x: 1, y: 25 }, { points: [P(0, 50, "(0, 50)"), P(1, 65, "(1, 65)"), P(2, 84.5, "(2, 84.5)"), P(3, 109.85, "(3, 109.85)")], xlabel: "t", ylabel: "A" })),
  num(S`Using $A=50(1.3)^t$, enter $A$ at $t=5$ (two decimals).`, Math.round(50 * 1.3 ** 5 * 100) / 100, "50 × 3.71293.", null, 0.011),
  num(S`A colony grows from $2000$ to $16\,000$ in $9$ h by doubling. Enter the doubling time (h).`, 3, "8 = 2³."),
  num(S`Growth of $r\%$ per year makes $5000$ into $6050$ in $2$ years. Enter $r$.`, 10, "1.21."),
  num(S`A tree's height grows $12\%$ per year from $1.5$ m. In which whole year does it first exceed $4$ m?`, first((t) => 1.5 * 1.12 ** t, 4), "1.12ᵗ > 2.667."),
  n2(S`$10\,000$ grows $2\%$ per quarter. Enter the amount after $3$ years.`, 10000 * 1.02 ** 12, "12 quarters."),
  num(S`What percent growth per year gives $44\%$ growth over $2$ years?`, 20, "1.2² = 1.44."),
  num(S`A population is $5000$ now and grows $4\%$ per year. What was it (to the nearest whole) $3$ years ago?`, Math.round(5000 / 1.04 ** 3), "5000 ÷ 1.04³."),
];
