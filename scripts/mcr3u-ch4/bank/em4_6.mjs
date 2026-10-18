// 4.6 Exponential Models: Growth and Decay — 20 easy + 20 medium questions (values computed in code)
import { mc, ms, num, tf } from "./kit.mjs";
import { P, planeDoc } from "./fig.mjs";

const r2 = (v) => Math.round(v * 100) / 100;
const model = (f, view, pts = [], extra = {}) => planeDoc({ view, curves: [{ f, a: 0, color: "violet" }], points: pts, ...extra });

export const E = [
  num("What is the growth factor for a 7% increase per year?", 1.07, "1 + 0.07.", null, 1e-9),
  num("What is the decay factor for a 20% decrease per year?", 0.8, "1 − 0.2.", null, 1e-9),
  mc("Which model shows a 3% annual increase from 500?", String.raw`$500(1.03)^t$`, [String.raw`$500(0.03)^t$`, String.raw`$500(1.3)^t$`, String.raw`$500+3t$`], "Factor 1.03."),
  mc("Which model shows a 12% annual decrease from 900?", String.raw`$900(0.88)^t$`, [String.raw`$900(0.12)^t$`, String.raw`$900(1.12)^t$`, String.raw`$900-12t$`], "Factor 0.88."),
  num("100 g of a substance has a half-life of 3 days. How much is left after 6 days?", 25, "Two half-lives."),
  num("40 bacteria double every hour. How many after 3 hours?", 320, "40 × 2³."),
  num("1000 dollars grows 10% per year. Value after 2 years?", 1210, "1000 × 1.21."),
  tf("A decaying quantity in an exponential model eventually reaches exactly 0.", false, "It approaches 0 but never reaches it."),
  num(String.raw`In $A=50\left(\tfrac12\right)^{t/4}$, what is the half-life?`, 4, "The divisor of t."),
  num(String.raw`In $N=20(2)^{t/5}$, what is the doubling time?`, 5, "The divisor of t."),
  mc("A drink cools toward a room at 22 °C. The temperature model has a horizontal asymptote at…", "T = 22", ["T = 0", "T = 100", "t = 22"], "Room temperature."),
  num(String.raw`What is the starting value of $V=8000(0.9)^t$?`, 8000, "t = 0."),
  num("A ball rebounds to half its height. Dropped from 8 m, how high does it rise after the 2nd bounce?", 2, "8 × ¼."),
  tf("Simple interest is an exponential model.", false, "Simple interest grows linearly."),
  num("200 dollars at 5% compounded annually: value after 1 year?", 210, "200 × 1.05."),
  mc("Which situation is exponential?", "a population that grows 2% each year", ["a phone plan that costs 30 dollars plus 5 dollars per GB", "a car travelling at 80 km/h", "a candle that burns 1 cm per hour"], "A constant percent change."),
  num("A value is multiplied by 0.75 each year. What percent is lost each year?", 25, "1 − 0.75 = 25%."),
  num(String.raw`Evaluate $A=60\left(\tfrac12\right)^{t/10}$ at $t=20$.`, 15, "Two half-lives."),
  num("Read the graph: what is the starting amount?", 80, "Value at t = 0.", model((t) => 80 * 0.5 ** (t / 5), { xmin: 0, xmax: 20, ymin: 0, ymax: 90 }, [P(0, 80), P(5, 40)], { step: { x: 2, y: 10 } })),
  num("Read the graph: after how many minutes is the amount half of the start?", 5, "80 → 40 at t = 5.", model((t) => 80 * 0.5 ** (t / 5), { xmin: 0, xmax: 20, ymin: 0, ymax: 90 }, [P(0, 80), P(5, 40)], { step: { x: 2, y: 10 }, lines: [{ m: 0, b: 40, color: "amber", dash: true }] })),
];

export const M = [
  num("A town of 15 000 grows 4% per year. Population after 5 years (nearest whole)?", Math.round(15000 * 1.04 ** 5), "15 000(1.04)⁵.", null, 0.6),
  num("A 24 000-dollar car loses 15% per year. Value after 3 years (2 decimals)?", r2(24000 * 0.85 ** 3), "24 000(0.85)³.", null, 0.006),
  num("A 160 mg dose has a half-life of 5 h. How much remains after 20 h?", 10, "Four half-lives."),
  num("50 cells triple every 2 h. How many after 8 h?", 4050, "50 × 3⁴."),
  num("2500 dollars at 4% compounded annually: value after 6 years (2 decimals)?", r2(2500 * 1.04 ** 6), "2500(1.04)⁶.", null, 0.006),
  num("A quantity doubles every 12 years. What is the annual growth factor (4 decimals)?", Math.round(2 ** (1 / 12) * 1e4) / 1e4, "2^(1/12).", null, 0.0002),
  num(String.raw`$T=60\left(\tfrac12\right)^{t/6}+20$. Find $T(12)$.`, 35, "60 × ¼ + 20."),
  mc(String.raw`What is the range of $T=60\left(\tfrac12\right)^{t/6}+20$ for $t\ge0$?`, String.raw`$20<T\le80$`, [String.raw`$0<T\le60$`, String.raw`$20\le T<80$`, String.raw`$T>0$`], "Starts at 80, approaches 20."),
  num("1000 dollars at 6% compounded annually. After how many full years does it first exceed 1500 dollars?", 7, "1.06⁶ ≈ 1.419; 1.06⁷ ≈ 1.504."),
  num("A ball dropped from 12 m rebounds to 75% of its height. Rebound height after the 3rd bounce (3 decimals)?", Math.round(12 * 0.75 ** 3 * 1000) / 1000, "12(0.75)³.", null, 0.0006),
  num("A 400 g sample decays to 50 g in 30 days. What is the half-life (days)?", 10, "400 → 200 → 100 → 50: three half-lives."),
  ms("Which are exponential decay models? Select all.", [String.raw`$A=500(0.97)^t$`, String.raw`$A=200\left(\tfrac12\right)^{t/8}$`, String.raw`$A=100(1.02)^t$`, String.raw`$A=300-20t$`, String.raw`$A=80(0.5)^{2t}$`], [0, 1, 4], "Factors below 1; 300 − 20t is linear."),
  tf("If something grows 10% per year for two years, it grows 20% in total.", false, "1.1² = 1.21: 21%."),
  num("A lake has 2000 fish; the population falls 8% per year. After how many full years is it below 1000?", 9, "0.92⁸ ≈ 0.513, 0.92⁹ ≈ 0.472."),
  num("An investment triples in 15 years. How many years to grow 9 times?", 30, "Two triplings."),
  num(String.raw`$V=35\,000(0.8)^t$. After how many full years is the value below 15 000?`, 4, "0.8³ = 0.512 → 17 920; 0.8⁴ = 0.4096 → 14 336."),
  num("Read the graph: the population starts at 500 and grows 20% per year. What is it after 3 years?", 864, "500 × 1.2³.", model((t) => 500 * 1.2 ** t, { xmin: 0, xmax: 6, ymin: 0, ymax: 1600 }, [P(0, 500), P(3, 864)], { step: { x: 1, y: 200 } })),
  num("The graph shows coffee cooling to room temperature. What is the room temperature (the asymptote)?", 21, "The dashed line T = 21.", model((t) => 64 * 0.9 ** t + 21, { xmin: 0, xmax: 30, ymin: 0, ymax: 90 }, [P(0, 85)], { step: { x: 3, y: 10 }, lines: [{ m: 0, b: 21, color: "green", dash: true }] })),
  num("A 300 mg dose: 25% is eliminated each hour. How much remains after 2 hours (mg)?", 168.75, "300(0.75)².", null, 1e-6),
  num("A culture grows 50% per day. By what factor does it grow in 2 days?", 2.25, "1.5².", null, 1e-9),
];
