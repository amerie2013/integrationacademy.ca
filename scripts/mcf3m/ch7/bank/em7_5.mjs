// 7.5 Exponential Growth — 20 easy + 20 medium
import { mc, ms, num, tf, fill, P, n2, eg } from "./ek.mjs";
const S = String.raw;
const gg = eg((t) => 600 * 1.2 ** t, { xmin: 0, xmax: 8, ymin: 0, ymax: 2800 }, { x: 1, y: 400 }, { points: [P(0, 600, "(0, 600)"), P(2, 864, "(2, 864)")], xlabel: "t", ylabel: "A" });

export const E = [
  num(S`What percent growth does $y=250(1.08)^t$ show?`, 8, "1.08 − 1."),
  num(S`Enter the initial value of $y=250(1.08)^t$.`, 250, "t = 0."),
  num(S`Enter the growth factor for $15\%$ growth.`, 1.15, "1 + 0.15.", null, 0.0001),
  num(S`$100$ grows $10\%$ per year. Enter the amount after $1$ year.`, 110, "100 × 1.1."),
  num(S`$100$ grows $10\%$ per year. Enter the amount after $2$ years.`, 121, "100 × 1.21."),
  num(S`$20$ bacteria double every hour. Enter the number after $4$ hours.`, 320, "20 × 16."),
  num(S`$5$ cells triple every day. Enter the number after $3$ days.`, 135, "5 × 27."),
  num(S`A population doubles every $10$ years. How many doublings in $30$ years?`, 3, "30/10."),
  mc(S`Which models $7\%$ growth from $500$?`, S`$y=500(1.07)^t$`, [S`$y=500(0.07)^t$`, S`$y=500(1.7)^t$`, S`$y=500+7t$`], "Factor 1.07."),
  mc("In A = A₀(1 + r)ᵗ, what does t count?", "the number of growth periods", ["the rate", "the starting amount", "the percent"], "Exponent."),
  tf(S`Growing $5\%$ per year for $2$ years is the same as growing $10\%$ once.`, false, "1.05² = 1.1025."),
  tf(S`Exponential growth adds the same amount each period.`, false, "Multiplies by the same factor."),
  fill(S`The time for a quantity to double is called the doubling ____.`, ["time"], "Doubling time."),
  mc("The graph shows A = 600(1.2)ᵗ. What is the growth rate?", "20%", ["1.2%", "120%", "60%"], "1.2 − 1.", gg),
  num("From the graph of A = 600(1.2)ᵗ, enter A at t = 2.", 864, "600 × 1.44.", gg),
  num(S`Enter the doubling-model value $50\cdot2^{t/5}$ at $t=10$.`, 200, "Two doublings."),
  n2(S`Evaluate $1000(1.05)^3$.`, 1000 * 1.05 ** 3, "1157.63."),
  mc(S`A town grows from $10\,000$ by $2\%$ a year. Which expression gives the population after $6$ years?`, S`$10\,000(1.02)^6$`, [S`$10\,000(1.2)^6$`, S`$10\,000+0.02(6)$`, S`$10\,000(0.02)^6$`], "Factor 1.02."),
  num(S`$y=40(1.25)^t$. Enter $y(2)$.`, 62.5, "40 × 1.5625.", null, 0.001),
  num(S`What percent growth rate gives a factor of $1.3$?`, 30, "1.3 − 1."),
];

export const M = [
  n2(S`A city of $82\,000$ grows $1.8\%$ per year. Enter its population after $5$ years (two decimals).`, 82000 * 1.018 ** 5, "82 000(1.018)⁵."),
  num(S`$300$ bacteria double every $15$ min. Enter the number after $1$ hour.`, 4800, "4 doublings."),
  n2(S`$1200$ grows $4.5\%$ per year. Enter the amount after $10$ years.`, 1200 * 1.045 ** 10, "1200(1.045)¹⁰."),
  num(S`Table: $t=0,1,2$: $800,\ 880,\ 968$. Enter the percent growth rate.`, 10, "880/800 = 1.1."),
  num(S`Table: $t=0,1,2$: $2500,\ 2600,\ 2704$. Enter the percent growth rate.`, 4, "1.04."),
  num(S`For which whole $t$ does $500(1.1)^t$ first exceed $1000$?`, 8, "t = 7: 974.36; t = 8: 1071.79."),
  num(S`For which whole $t$ does $2000(1.25)^t$ first exceed $10\,000$?`, 8, "t = 7: 9536.74; t = 8: 11 920.93."),
  mc("Plan A adds 100 each year from 1000; plan B grows 8% from 1000. After 20 years …", "B is larger", ["A is larger", "they are equal", "cannot tell"], "B ≈ 4661 vs A = 3000."),
  ms(S`Select every growth model.`, [S`$y=3(1.02)^t$`, S`$y=50\cdot2^{t/4}$`, S`$y=80(0.95)^t$`, S`$y=7(3)^t$`, S`$y=5+1.02t$`], [0, 1, 3], "Factor > 1, exponential."),
  tf(S`A doubling time of $5$ years means the quantity is $8$ times larger after $15$ years.`, true, "2³."),
  tf(S`$A=A_0(1+r)^t$ with $r=0.06$ gives $6\%$ growth per period.`, true, "Definition."),
  fill(S`If a quantity triples every $d$ hours, $A=A_0\cdot\square^{t/d}$. The missing number is ____.`, ["3"], "Base 3."),
  mc("The graph shows linear (green) and exponential (violet) growth from the same start. Which is true?", "the exponential overtakes the linear", ["the linear always stays ahead", "they never meet", "both are linear"], "Exponential wins eventually.", eg((t) => 1000 * 1.08 ** t, { xmin: 0, xmax: 25, ymin: 800, ymax: 7000 }, { x: 5, y: 1000 }, { more: [{ f: (t) => 1000 + 100 * t, color: "green" }], xlabel: "t", ylabel: "A" })),
  num("For the graph (violet: 1000(1.08)ᵗ, green: 1000 + 100t), enter the first whole year when violet is ahead.", 7, "Year 6: 1586.87 < 1600; year 7: 1713.82 > 1700.", eg((t) => 1000 * 1.08 ** t, { xmin: 0, xmax: 25, ymin: 800, ymax: 7000 }, { x: 5, y: 1000 }, { more: [{ f: (t) => 1000 + 100 * t, color: "green" }], xlabel: "t", ylabel: "A" })),
  n2(S`A population doubles every $7$ years from $3000$. Enter it after $10$ years.`, 3000 * 2 ** (10 / 7), "3000·2^(10/7)."),
  num(S`An amount grows from $400$ to $441$ in $2$ years at a constant rate. Enter the percent rate.`, 5, "(1 + r)² = 1.1025."),
  num(S`A rumour starts with $3$ people and triples every hour. Enter the number after $5$ hours.`, 729, "3 × 243."),
  n2(S`Evaluate $750(1.015)^{12}$.`, 750 * 1.015 ** 12, "Calculator."),
  num(S`A colony of $64$ doubles every $2$ h. After how many hours does it reach $2048$?`, 10, "32 = 2⁵: 5 doublings."),
  num(S`What single growth factor is the same as $10\%$ growth for $2$ years? (decimal)`, 1.21, "1.1².", null, 0.0001),
];
