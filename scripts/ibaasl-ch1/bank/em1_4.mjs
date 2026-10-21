// 1.4 Financial Applications of Sequences — 20 easy + 20 medium questions
import { mc, ms, num, tf, fill } from "./kit.mjs";
import { moneyDoc, barsDoc } from "../figs.mjs";

const S = String.raw;
const yrs = (n, f) => Array.from({ length: n + 1 }, (_, t) => Math.round(f(t) * 100) / 100);

export const E = [
  num("Write a 7% increase as a multiplier.", 1.07, "1 + 0.07.", null, 1e-9),
  num("Write a 12% decrease as a multiplier.", 0.88, "1 − 0.12.", null, 1e-9),
  num("1000 is invested at 10% per year compounded annually. Find its value after 2 years.", 1210, "1000(1.1)²."),
  num("An item worth 2000 loses 50% of its value each year. Find its value after 2 years.", 500, "2000(0.5)²."),
  tf("The year-end balances of an account earning compound interest form a geometric sequence.", true, "Each balance is the previous one times the same multiplier."),
  mc("The year-end balances of an account earning simple interest form:", "an arithmetic sequence", ["a geometric sequence", "neither kind of sequence", "a constant sequence"], "The same amount is added every year."),
  num("500 is invested at 4% simple interest. Find the total value after 5 years.", 600, "500 + 5(20)."),
  num("Find the monthly multiplier for 6% per year compounded monthly.", 1.005, "1 + 0.06/12.", null, 1e-9),
  num("Interest is compounded quarterly for 7 years. How many compounding periods is that?", 28, "4 × 7."),
  num("800 is invested at 5% per year compounded annually. Find its value after 3 years (2 d.p.).", 926.1, "800(1.05)³.", null, 0.01),
  num("A car worth 10 000 depreciates by 10% in one year. Find its value after that year.", 9000, "10000(0.9)."),
  fill("Interest calculated on the current balance, including earlier interest, is called ___ interest.", ["compound", "Compound"], "Simple interest is calculated on the original amount only."),
  num("1500 grows by 20% and then by another 20%. Find the final amount.", 2160, "1500(1.2)²."),
  tf("A 10% decrease followed by a 10% increase returns a value to where it started.", false, "0.9 × 1.1 = 0.99."),
  num("The graph shows 1000 invested at 10% per year compounded annually. Find its value after 5 years (2 d.p.).", 1610.51, "1000(1.1)⁵.", moneyDoc([yrs(5, (t) => 1000 * 1.1 ** t)], { years: 5 }), 0.01),
  num("The bars show the value of a machine at the start of three consecutive years. What is the annual depreciation rate as a percentage?", 20, "3200/4000 = 0.8.", barsDoc([4000, 3200, 2560], { start: 0, color: "#b91c1c", xlab: "year" })),
  num("3000 is invested at 2% per year for 1 year. Find its value.", 3060, "3000(1.02)."),
  mc(S`In $FV=2000(1.04)^6$, what does the 4 represent?`, "the annual interest rate in percent", ["the number of years", "the present value", "the number of compounding periods"], "1.04 is 1 + 4/100."),
  num("A phone worth 600 depreciates by 25% in its first year. Find its value after one year.", 450, "600(0.75)."),
  num("What percentage interest is added each quarter for 8% per year compounded quarterly?", 2, "8 ÷ 4."),
];

export const M = [
  num("2500 is invested at 3.5% per year compounded annually. Find its value after 4 years (2 d.p.).", 2868.81, "2500(1.035)⁴.", null, 0.01),
  num("1200 is invested at 6% per year compounded monthly. Find its value after 2 years (2 d.p.).", 1352.59, "1200(1.005)²⁴.", null, 0.01),
  num("A machine worth 40 000 depreciates by 12% per year. Find its value after 3 years (2 d.p.).", 27258.88, "40000(0.88)³.", null, 0.01),
  num("How many whole years does 1000 take to reach 1500 at 5% per year compounded annually?", 9, "1.05ⁿ ≥ 1.5 → n ≥ 8.31."),
  num("1000 is invested for 5 years at 8% per year. How much more does annual compound interest give than simple interest? (2 d.p.)", 69.33, "1469.33 − 1400.", null, 0.01),
  num("5000 grows to 5800 in 3 years with annual compounding. Find the annual rate as a percentage (2 d.p.).", 5.07, "1.16^(1/3) − 1.", null, 0.01),
  num("A town of 25 000 people shrinks by 3% per year. Find its population after 6 years, to the nearest person.", 20824, "25000(0.97)⁶ ≈ 20824.3."),
  num("6000 is invested at 4% per year compounded quarterly. Find its value after 5 years (2 d.p.).", 7321.14, "6000(1.01)²⁰.", null, 0.01),
  tf("Compounding monthly at 6% per year gives more than compounding annually at 6% per year.", true, "1.005¹² ≈ 1.0617 > 1.06."),
  num("2000 is invested at 6% per year compounded monthly. After how many whole months does it first exceed 2200?", 20, "1.005ᵐ > 1.1 → m > 19.1."),
  mc("Which account gives the most after one year?", "4.95% per year compounded quarterly", ["4.9% per year compounded monthly", "4.8% per year compounded daily", "5% per year compounded annually"], "Effective rates: 5.04%, 5.01%, 4.92% and 5%."),
  num("A car worth 25 000 depreciates by 18% per year. After how many whole years is it first worth less than 10 000?", 5, "0.82ⁿ < 0.4 → n > 4.62."),
  num("Prices rise by 3% per year. What will an item costing 100 now cost after 10 years? (2 d.p.)", 134.39, "100(1.03)¹⁰.", null, 0.01),
  num("The graph shows a car worth 20 000 losing 15% of its value each year. Find its value after 6 years (2 d.p.).", 7542.99, "20000(0.85)⁶.", moneyDoc([yrs(6, (t) => 20000 * 0.85 ** t)], { years: 6, colors: ["red"] }), 0.01),
  num("1000 earns either 5% per year compounded annually or 6% per year simple interest (shown). After how many whole years is the compound balance first larger?", 9, "1.05ⁿ > 1 + 0.06n first at n = 9.", moneyDoc([yrs(12, (t) => 1000 * 1.05 ** t), yrs(12, (t) => 1000 * (1 + 0.06 * t))], { years: 12, labels: ["compound ", "simple "] })),
  num("Find the effective annual rate, as a percentage, of 12% per year compounded monthly (2 d.p.).", 12.68, "1.01¹² − 1.", null, 0.01),
  num("At what annual rate (compounded annually) does money double in 10 years? Give a percentage (2 d.p.).", 7.18, "2^0.1 − 1.", null, 0.01),
  ms("A value depreciates by 20% per year. Which statements are true? Select all.", ["after 1 year it is 80% of the original", "after 2 years it is 60% of the original", "it never reaches 0", "the yearly values form a geometric sequence"], [0, 2, 3], "After 2 years it is 0.8² = 64%."),
  num("3000 is invested at 4.5% per year compounded annually. Find its value after 7 years (2 d.p.).", 4082.59, "3000(1.045)⁷.", null, 0.01),
  num("A price rises by 10% and then falls by 10%. What is the overall percentage change?", -1, "1.1 × 0.9 = 0.99."),
];
