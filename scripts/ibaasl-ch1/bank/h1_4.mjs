// 1.4 Financial Applications of Sequences — 20 hard questions
import { ms, num, tf } from "./kit.mjs";
import { moneyDoc, barsDoc, planeDoc } from "../figs.mjs";

const S = String.raw;
const yrs = (n, f) => Array.from({ length: n + 1 }, (_, t) => Math.round(f(t) * 100) / 100);

export const TOPIC = "1.4 Financial Applications of Sequences";
export const Q = [
  num("200 is deposited at the start of every year into an account paying 5% per year compounded annually. Find the balance at the end of the 10th year (2 d.p.).", 2641.36, "210(1.05¹⁰ − 1)/0.05.", barsDoc(yrs(9, (t) => 210 * (1.05 ** (t + 1) - 1) / 0.05), { color: "#15803d", xlab: "year", labels: false }), 0.01),
  num("How many whole years does money take to triple at 6% per year compounded annually?", 19, "1.06ⁿ ≥ 3 → n ≥ 18.85."),
  num("5000 is invested for 20 years either at 3% per year compounded monthly or at 3.1% per year compounded annually. How much more does the better option give? (2 d.p.)", 103.76, "9207.53 − 9103.77.", null, 0.01),
  num("At what annual rate, compounded quarterly, does 4000 grow to 5000 in 4 years? Give a percentage (2 d.p.).", 5.62, "(1 + r/400)¹⁶ = 1.25.", null, 0.01),
  num("A car bought for 30 000 loses 20% of its value in the first year and 10% per year after that. Find its value after 4 years.", 17496, "30000(0.8)(0.9)³."),
  num("Town A (green) has 50 000 people growing by 3% per year; town B (red) has 70 000 shrinking by 2% per year. After how many whole years does A first have more people?", 7, "Compare 50000(1.03)ⁿ with 70000(0.98)ⁿ.", moneyDoc([yrs(9, (t) => 50000 * 1.03 ** t), yrs(9, (t) => 70000 * 0.98 ** t)], { years: 9, colors: ["green", "red"], labels: ["A ", "B "], ylabel: "people" })),
  num("A salary of 50 000 rises by 2% per year while prices rise by 3% per year. Find its value after 10 years in today's money (2 d.p.).", 45352.32, "50000(1.02/1.03)¹⁰.", null, 0.01),
  tf("At 8% per year compounded annually, money doubles in less than 10 years.", true, "n = ln 2 / ln 1.08 ≈ 9.01."),
  num("At what annual rate (compounded annually) does money double in exactly 12 years? Give a percentage (2 d.p.).", 5.95, "2^(1/12) − 1.", null, 0.01),
  num("The graph shows 2000 invested at 6% per year compounded annually. In which year does the balance first exceed 3000?", 7, "1.06ⁿ > 1.5 → n > 6.96.", moneyDoc([yrs(9, (t) => 2000 * 1.06 ** t)], { years: 9 })),
  num("A machine's value halves every 4 years. Find the annual depreciation rate as a percentage (2 d.p.).", 15.91, "1 − 0.5^0.25.", null, 0.01),
  ms("Which statements are true for the same positive annual rate? Select all.", ["monthly compounding gives more than quarterly, which gives more than annual", "10% depreciation for 10 years removes the whole value", "simple interest multiplies the amount by 1 + rn/100", "compound growth is linear"], [0, 2], "Depreciation never reaches 0; compound growth is exponential."),
  num("A price rises by 5%, then 8%, then 10%. What is the overall percentage increase (2 d.p.)?", 24.74, "1.05 × 1.08 × 1.1 = 1.2474.", null, 0.01),
  num("15 000 is invested at 4% per year compounded half-yearly. Find its value after 6 years (2 d.p.).", 19023.63, "15000(1.02)¹².", null, 0.01),
  num("An item worth 9000 depreciates by 15% per year. After how many whole years is it first worth less than a third of its original value?", 7, "0.85ⁿ < 1/3 → n > 6.76."),
  num("A car's value fell from 24 000 to 15 360 in 2 years (shown). Find the annual depreciation rate as a percentage.", 20, "(15360/24000)^(1/2) = 0.8.", planeDoc({ view: { xmin: -0.5, xmax: 3.5, ymin: 0, ymax: 28000 }, step: { x: 1, y: 4000 }, points: [{ x: 0, y: 24000, label: "(0, 24000)", color: "red" }, { x: 2, y: 15360, label: "(2, 15360)", color: "red" }], xlabel: "years", ylabel: "value" })),
  num("An amount invested at 5% per year compounded annually is worth 8000 after 6 years. Find the amount invested (2 d.p.).", 5969.72, "8000/1.05⁶.", null, 0.01),
  tf("1000 at 10% simple interest for 20 years beats 1000 at 7% compounded annually for 20 years.", false, "3000 against about 3869.68."),
  num("100 is deposited at the end of every month for 12 months at 6% per year compounded monthly. Find the balance just after the 12th deposit (2 d.p.).", 1233.56, "100(1.005¹² − 1)/0.005.", null, 0.01),
  num("By what percentage must a value fall to undo a 25% increase?", 20, "1/1.25 = 0.8."),
];
