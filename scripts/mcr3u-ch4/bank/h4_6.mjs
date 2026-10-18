// 4.6 Exponential Models: Growth and Decay — 20 hard questions (values computed in code)
import { mc, num, tf } from "./kit.mjs";
import { P, planeDoc } from "./fig.mjs";

const firstN = (f, ok) => { for (let n = 0; n < 500; n++) if (ok(f(n))) return n; return NaN; };
const r2 = (v) => Math.round(v * 100) / 100;

export const TOPIC = "4.6 Exponential Models: Growth and Decay";
export const Q = [
  num("A city of 40 000 grows 3.5% per year. After how many full years does it first pass 60 000?", firstN((n) => 40000 * 1.035 ** n, (v) => v > 60000), "Guess-and-check 1.035ⁿ > 1.5."),
  num("A 500 mg dose: 15% is eliminated each hour. After how many full hours is less than 100 mg left?", firstN((n) => 500 * 0.85 ** n, (v) => v < 100), "0.85ⁿ < 0.2."),
  num("A sample decays from 240 g to 15 g in 36 days. What is its half-life (days)?", 9, "240 → 15 is four halvings."),
  num("A population doubles every 25 years. What is its annual growth rate as a percent (2 decimals)?", r2((2 ** (1 / 25) - 1) * 100), "2^(1/25) − 1.", null, 0.006),
  num("Account A: 2000 dollars at 6%; account B: 2600 dollars at 4% (compounded annually). After how many full years is A worth more?", firstN((n) => 2000 * 1.06 ** n - 2600 * 1.04 ** n, (v) => v > 0), "Compare year by year.", planeDoc({ view: { xmin: 0, xmax: 20, ymin: 1500, ymax: 6500 }, curves: [{ f: (n) => 2000 * 1.06 ** n, a: 0, color: "blue" }, { f: (n) => 2600 * 1.04 ** n, a: 0, color: "red" }], step: { x: 2, y: 500 }, xlabel: "years", ylabel: "dollars" })),
  num(String.raw`Tea cools as $T=70(0.88)^t+20$ (°C, t in minutes). To the nearest minute, when does it first drop below 45 °C?`, firstN((t) => 70 * 0.88 ** t + 20, (v) => v < 45), "0.88ᵗ < 25/70.", planeDoc({ view: { xmin: 0, xmax: 20, ymin: 0, ymax: 95 }, curves: [{ f: (t) => 70 * 0.88 ** t + 20, a: 0, color: "violet" }], lines: [{ m: 0, b: 45, color: "amber", dash: true }, { m: 0, b: 20, color: "green", dash: true }], step: { x: 2, y: 10 } })),
  mc(String.raw`For the tea model $T=70(0.88)^t+20$, which range is correct for $t\ge0$?`, String.raw`$20<T\le90$`, [String.raw`$0<T\le70$`, String.raw`$20\le T\le90$`, String.raw`$T>20$ only for $t<20$`], "Starts at 90; approaches 20."),
  num("A ball dropped from 10 m rebounds to 65% of its height. On which bounce does the rebound first fall below 1 m?", firstN((n) => 10 * 0.65 ** n, (v) => v < 1), "10(0.65)ⁿ < 1."),
  num("A radioactive sample loses 6% per day. After how many full days has it lost at least half?", firstN((n) => 0.94 ** n, (v) => v <= 0.5), "0.94ⁿ ≤ 0.5."),
  tf("Losing 10% and then gaining 10% returns a quantity to its original value.", false, "0.9 × 1.1 = 0.99."),
  num("A culture grows from 300 to 2400 in 9 hours, doubling at a constant rate. What is the doubling time (h)?", 3, "300 → 2400 is 3 doublings."),
  num("5000 dollars grows at 5% compounded annually. How much interest is earned in the 4th year alone (2 decimals)?", r2(5000 * 1.05 ** 4 - 5000 * 1.05 ** 3), "A(4) − A(3).", null, 0.006),
  num("A forest of 80 000 trees loses 5% per year but 2000 trees are planted at the end of each year. How many trees after 2 years?", Math.round((80000 * 0.95 + 2000) * 0.95 + 2000), "Apply the rule twice."),
  num("The graph shows a drug level that halves every 4 h. At t = 10 h, how much of the 120 mg dose remains (2 decimals)?", r2(120 * 0.5 ** (10 / 4)), "120(½)^(10/4).", planeDoc({ view: { xmin: 0, xmax: 20, ymin: 0, ymax: 130 }, curves: [{ f: (t) => 120 * 0.5 ** (t / 4), a: 0, color: "violet" }], points: [P(4, 60), P(8, 30)], step: { x: 2, y: 20 }, xlabel: "t (h)", ylabel: "mg" }), 0.006),
  num("Data: t = 0, 1, 2, 3 and A = 64, 48, 36, 27. What is A at t = 5 (2 decimals)?", r2(64 * 0.75 ** 5), "Ratio 0.75.", planeDoc({ view: { xmin: 0, xmax: 6, ymin: 0, ymax: 70 }, points: [P(0, 64), P(1, 48), P(2, 36), P(3, 27)], step: { x: 1, y: 10 } }), 0.006),
  num("Two cultures: A starts at 100 and doubles every 3 h; B starts at 800 and doubles every 6 h. After how many hours are they equal?", 18, "100·2^(t/3) = 800·2^(t/6) → 2^(t/6) = 8."),
  num("A 30 000-dollar car loses 18% per year. After how many full years is it worth less than half its price?", firstN((n) => 0.82 ** n, (v) => v < 0.5), "0.82ⁿ < 0.5."),
  num("A population is 12 000 now and was 10 000 two years ago, growing exponentially. What will it be in 2 more years?", 14400, "Factor 1.2 every 2 years."),
  tf("Doubling time does not depend on the starting amount.", true, "A₀ cancels."),
  num("An object cools from 95 °C to 55 °C in 10 min in a 15 °C room. Its excess over room temperature halves every 10 min. What is its temperature after 30 min?", 25, "Excess 80 → 40 → 20 → 10."),
];
