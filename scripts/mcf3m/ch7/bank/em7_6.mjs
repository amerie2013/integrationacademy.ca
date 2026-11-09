// 7.6 Exponential Decay — 20 easy + 20 medium
import { mc, ms, num, tf, fill, P, n2, eg } from "./ek.mjs";
const S = String.raw;
const gd = eg((t) => 400 * 0.5 ** (t / 3), { xmin: 0, xmax: 15, ymin: 0, ymax: 420 }, { x: 3, y: 50 }, { points: [P(0, 400, "(0, 400)"), P(3, 200, "(3, 200)"), P(6, 100, "(6, 100)")], xlabel: "t (h)", ylabel: "A" });

export const E = [
  num(S`What percent decay does $y=900(0.85)^t$ show?`, 15, "1 − 0.85."),
  num(S`Enter the initial value of $y=900(0.85)^t$.`, 900, "t = 0."),
  num(S`Enter the decay factor for a $12\%$ loss per year.`, 0.88, "1 − 0.12.", null, 0.0001),
  num(S`$100$ loses $20\%$ per year. Enter the amount after $1$ year.`, 80, "100 × 0.8."),
  num(S`$100$ loses $20\%$ per year. Enter the amount after $2$ years.`, 64, "100 × 0.64."),
  num(S`$80$ g with a half-life of $1$ day: enter the mass after $3$ days.`, 10, "80/8."),
  num(S`A drug has a half-life of $4$ h. How many half-lives in $12$ h?`, 3, "12/4."),
  num(S`$y=1000\left(\frac12\right)^{t/5}$. Enter $y$ at $t=10$.`, 250, "Two halvings."),
  mc(S`Which models a $9\%$ loss per year from $700$?`, S`$y=700(0.91)^t$`, [S`$y=700(0.09)^t$`, S`$y=700(1.09)^t$`, S`$y=700-9t$`], "Keep 91%."),
  mc("A half-life is …", "the time for half of the amount to remain", ["half the total time", "the time to reach zero", "the decay rate"], "Definition."),
  tf(S`An exponential decay model eventually reaches exactly $0$.`, false, "It approaches 0."),
  tf(S`$y=50(0.6)^t$ is decreasing.`, true, "0 < 0.6 < 1."),
  fill(S`The loss of value of an item over time is called ____.`, ["depreciation"], "Depreciation."),
  mc("The graph shows a half-life model. What is the half-life?", "3 h", ["6 h", "200 h", "1.5 h"], "400 → 200 in 3 h.", gd),
  num("From the same graph, enter A at t = 9.", 50, "400/8.", gd),
  num(S`A car worth $20\,000$ dollars loses $10\%$ per year. Enter its value after $2$ years.`, 16200, "20 000 × 0.81."),
  n2(S`Evaluate $5000(0.92)^4$.`, 5000 * 0.92 ** 4, "Calculator."),
  num(S`What percent loss per period gives a factor of $0.7$?`, 30, "1 − 0.7."),
  mc(S`Tea cools toward room temperature $20$ °C. Its graph levels off at …`, S`$T=20$`, [S`$T=0$`, S`$T=100$`, "it never levels off"], "Asymptote at room temperature."),
  num(S`$y=64\left(\frac12\right)^{t}$. Enter $y$ at $t=6$.`, 1, "64/64."),
];

export const M = [
  n2(S`A phone loses $22\%$ per year from $950$ dollars. Enter its value after $3$ years.`, 950 * 0.78 ** 3, "950(0.78)³."),
  n2(S`$150$ mg with a half-life of $8$ h: enter the amount after $20$ h.`, 150 * 0.5 ** 2.5, "2.5 half-lives."),
  num(S`Table: $t=0,1,2$: $500,\ 450,\ 405$. Enter the percent decay rate.`, 10, "450/500 = 0.9."),
  num(S`Table: $t=0,1,2$: $1600,\ 1200,\ 900$. Enter the percent decay rate.`, 25, "0.75."),
  num(S`For which whole $t$ is $1000(0.8)^t$ first below $200$?`, 8, "t = 7: 209.72; t = 8: 167.77."),
  num(S`For which whole $t$ is $250(0.9)^t$ first below $100$?`, 9, "t = 8: 107.6; t = 9: 96.8."),
  num(S`$T=20+60\left(\frac12\right)^{t/5}$. Enter $T$ at $t=10$.`, 35, "20 + 15."),
  num(S`$T=20+60\left(\frac12\right)^{t/5}$. Enter $T$ at $t=0$.`, 80, "20 + 60."),
  ms(S`Select every decay model.`, [S`$y=40(0.98)^t$`, S`$y=12\left(\frac12\right)^{t/3}$`, S`$y=5(1.02)^t$`, S`$y=300(0.5)^t$`, S`$y=8(2)^{-t}$`], [0, 1, 3, 4], "2⁻ᵗ = (½)ᵗ."),
  tf(S`Losing $10\%$ two years in a row is the same as losing $20\%$ once.`, false, "0.81: a 19% loss."),
  tf(S`After $3$ half-lives, $12.5\%$ of a substance remains.`, true, "(½)³."),
  fill(S`For a half-life $h$, $A=A_0\left(\tfrac12\right)^{t/\square}$. The missing letter is ____.`, ["h"], "t/h."),
  mc("The graph shows a decaying amount. What is the decay rate per year?", "20%", ["80%", "0.8%", "25%"], "500 → 400.", eg((t) => 500 * 0.8 ** t, { xmin: 0, xmax: 8, ymin: 0, ymax: 550 }, { x: 1, y: 50 }, { points: [P(0, 500, "(0, 500)"), P(1, 400, "(1, 400)")], xlabel: "t", ylabel: "A" })),
  num("Using that graph (A = 500(0.8)ᵗ), enter A at t = 3.", 256, "500 × 0.512.", eg((t) => 500 * 0.8 ** t, { xmin: 0, xmax: 8, ymin: 0, ymax: 550 }, { x: 1, y: 50 }, { points: [P(3, 256, "(3, ?)")], xlabel: "t", ylabel: "A" })),
  num(S`A sample decays from $200$ g to $25$ g in $15$ days. Enter the half-life (days).`, 5, "1/8: three halvings."),
  num(S`A value drops from $10\,000$ to $8100$ in $2$ years. Enter the percent rate.`, 10, "(1 − r)² = 0.81."),
  n2(S`Pressure $p=210(0.95)^t$ kPa. Enter $p$ after $5$ h.`, 210 * 0.95 ** 5, "Calculator."),
  num(S`What percent of a drug remains after $10$ h if its half-life is $5$ h?`, 25, "(½)²."),
  n2(S`Coffee: $T=22+70\left(\frac12\right)^{t/10}$. Enter $T$ at $t=15$.`, 22 + 70 * 0.5 ** 1.5, "22 + 70·0.5^1.5."),
  num(S`A machine worth $40\,000$ dollars loses $25\%$ per year. Enter its value after $2$ years.`, 22500, "40 000 × 0.5625."),
];
