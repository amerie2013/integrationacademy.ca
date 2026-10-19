// 8.4 Annuities: Future Value — 20 hard questions
import { mc, ms, num, tf } from "./kit.mjs";
import { barsD, growthD, timelineD, annFV, payFV, paymentsTo, fv, c2 } from "./fig.mjs";

const S = String.raw;
const $ = (p, v, fb, fig = null) => num(p, c2(v), fb, fig, 0.02);

export const TOPIC = "8.4 Annuities: Future Value";
export const Q = [
  $("Maya saves 100 dollars a month from age 20 to 30 and then leaves it to grow until 60. Leo saves 100 dollars a month from 30 to 60. Both earn 6%/a compounded monthly. How much more does Maya have at 60 (dollars)?", annFV(100, 0.005, 120) * 1.005 ** 360 - annFV(100, 0.005, 360), "Maya: FV of 120 payments, then grow 360 months."),
  $("What monthly deposit at 4.8%/a compounded monthly is needed to have 1 000 000 dollars in 40 years (dollars)?", payFV(1000000, 0.004, 480), "i = 0.004, n = 480."),
  num("How many monthly deposits of 500 dollars at 6%/a compounded monthly are needed to reach 100 000 dollars?", paymentsTo(100000, 500, 0.005), "Guess and check n."),
  $("A family deposits 2000 dollars at the end of each year for 8 years at 5%/a, then 3000 dollars a year for 7 more years. Find the total at the end of 15 years (dollars).", annFV(2000, 0.05, 8) * 1.05 ** 7 + annFV(3000, 0.05, 7), "Grow the first annuity 7 more years, add the second."),
  $("A savings plan has 15 000 dollars now and adds 300 dollars at the end of each month at 3.6%/a compounded monthly. What is it worth in 10 years (dollars)?", fv(15000, 0.003, 120) + annFV(300, 0.003, 120), "Lump sum FV + annuity FV."),
  $("To reach 30 000 dollars in 6 years, a student already has 5000 dollars. What monthly deposit at 4.2%/a compounded monthly is needed (dollars)?", payFV(30000 - fv(5000, 0.0035, 72), 0.0035, 72), "Subtract what the 5000 grows to, then find R."),
  num(`At what rate per year (compounded annually) does 1000 dollars a year for 10 years grow to ${c2(annFV(1000, 0.054, 10))} dollars? Give the % to 1 decimal.`, 5.4, "Guess and check i in the FV formula.", null, 0.06),
  $("Deposits of 400 dollars are made at the end of each quarter for 5 years at 4%/a compounded quarterly, then the money earns 6%/a compounded monthly for 3 more years. Find the final amount (dollars).", annFV(400, 0.01, 20) * 1.005 ** 36, "Annuity FV, then compound it."),
  tf("For the same total deposits per year, monthly deposits produce a larger future value than one deposit at the end of the year (matching compounding, same annual rate).", true, "Money is invested earlier on average."),
  tf("If the interest rate is 0, the future value of an annuity equals Rn.", true, "No interest is earned."),
  ms("An annuity of 1000 dollars a year for 20 years at 5%/a. Which are true? Select all.", [`FV ≈ ${c2(annFV(1000, 0.05, 20))}`, "total deposits are 20 000", "more than one third of the FV is interest", "the first payment grows to 1000(1.05)²⁰", "the series has 20 terms"], [0, 1, 2, 4], "The first payment grows for 19 years, not 20."),
  mc("Which plan gives the most after 25 years at 6%/a compounded annually?", "2000 dollars a year for all 25 years", ["3000 dollars a year for the first 10 years only", "5000 dollars a year for the last 10 years only", "1000 dollars a year for 25 years plus 10 000 dollars at year 15"], `Values: ${c2(annFV(3000, 0.06, 10) * 1.06 ** 15)}, ${c2(annFV(2000, 0.06, 25))}, ${c2(annFV(5000, 0.06, 10))}, ${c2(annFV(1000, 0.06, 25) + fv(10000, 0.06, 10))}.`),
  $("How much more is 150 dollars a month for 30 years worth at 7%/a than at 5%/a (both compounded monthly)? (dollars)", annFV(150, 0.07 / 12, 360) - annFV(150, 0.05 / 12, 360), "Difference of the two future values."),
  num("A plan grows to 50 000 dollars with yearly deposits at 6% for 15 years. What percent of the 50 000 is interest (nearest whole %)?", Math.round(((50000 - 15 * payFV(50000, 0.06, 15)) / 50000) * 100), "Find R, then (50 000 − 15R)/50 000.", null, 1),
  $("Find the future value of 75 dollars every 2 weeks for 8 years at 5.2%/a compounded bi-weekly (dollars).", annFV(75, 0.002, 208), "i = 0.052/26 = 0.002, n = 208."),
  num("How many whole years of 2000-dollar yearly deposits at 7% are needed for the interest earned to exceed the total deposited?", (() => { let n = 1; while (annFV(2000, 0.07, n) - 2000 * n <= 2000 * n) n++; return n; })(), "Interest = FV − 2000n; compare with 2000n."),
  $("Read the time line: deposits of 800 dollars at the end of years 1 to 5, at 6%/a compounded annually. Find the value at the end of year 8 (dollars).", annFV(800, 0.06, 5) * 1.06 ** 3, "FV at year 5, then 3 more years.", timelineD(8, { 1: "800", 2: "800", 3: "800", 4: "800", 5: "800", 8: "?" }, "0")),
  num("The graph shows two savings plans at 6%. Read the year (whole) when plan B (2000 a year starting in year 6) first passes plan A (1000 a year from year 1).", (() => { let t = 6; while (annFV(2000, 0.06, t - 5) <= annFV(1000, 0.06, t)) t++; return t; })(), "Compare year by year.", growthD([{ f: (t) => annFV(1000, 0.06, Math.floor(t)) }, { f: (t) => (t < 6 ? 0 : annFV(2000, 0.06, Math.floor(t) - 5)), color: "amber" }], 30)),
  $("The bars show a 6-year annuity's payments' values at the end. The first bar is 1338.23 at 6%. Find the payment R (dollars).", 1338.23 / 1.06 ** 5, "R(1.06)⁵ = 1338.23.", barsD([5, 4, 3, 2, 1, 0].map((k) => 1000 * 1.06 ** k), { xlabel: "payment", ylabel: "value at end" })),
  $("The bars show the same annuity (R = 1000 at 6%, 6 years). Find the future value (dollars).", annFV(1000, 0.06, 6), "Sum the bars or use the formula.", barsD([5, 4, 3, 2, 1, 0].map((k) => 1000 * 1.06 ** k), { xlabel: "payment", ylabel: "value at end", labels: [5, 4, 3, 2, 1, 0].map((k) => String(c2(1000 * 1.06 ** k))) })),
];
