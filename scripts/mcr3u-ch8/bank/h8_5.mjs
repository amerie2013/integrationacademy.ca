// 8.5 Annuities: Present Value — 20 hard questions (new topic)
import { mc, ms, num, tf } from "./kit.mjs";
import { barsD, growthD, timelineD, annPV, annFV, payPV, paymentsToRepay, pv, fv, c2 } from "./fig.mjs";

const S = String.raw;
const $ = (p, v, fb, fig = null) => num(p, c2(v), fb, fig, 0.02);
const best = (opts) => opts.reduce((a, b) => (b[1] > a[1] ? b : a))[0];
const lottery = [["1 200 000 dollars now", 1200000], ["80 000 dollars a year for 25 years", annPV(80000, 0.045, 25)], ["150 000 dollars a year for 10 years", annPV(150000, 0.045, 10)]];

export const TOPIC = "8.5 Annuities: Present Value";
export const Q = [
  $("How much must be saved by age 65 to withdraw 3500 dollars at the end of each month until age 90, at 4.2%/a compounded monthly (dollars)?", annPV(3500, 0.0035, 300), "i = 0.0035, n = 300."),
  $("A 280 000-dollar mortgage is repaid monthly over 25 years at 4.8%/a compounded monthly. Find the payment (dollars).", payPV(280000, 0.004, 300), "i = 0.004, n = 300."),
  $("For that mortgage (280 000, 25 years, 4.8%/a monthly), find the total interest (dollars).", payPV(280000, 0.004, 300) * 300 - 280000, "300R − 280 000."),
  num("How many monthly payments of 650 dollars repay a 25 000-dollar loan at 7.2%/a compounded monthly (the last may be smaller)?", paymentsToRepay(25000, 650, 0.006), "Guess and check n."),
  $("A car costs 30 000 dollars. A 5000-dollar down payment is made and the rest is financed at 5.4%/a compounded monthly over 5 years. Find the payment (dollars).", payPV(25000, 0.0045, 60), "Finance 25 000."),
  $("A loan is repaid with 1000 dollars a month for 2 years, then 500 dollars a month for 1 more year, at 6%/a compounded monthly. How much was borrowed (dollars)?", annPV(1000, 0.005, 24) + annPV(500, 0.005, 12) / 1.005 ** 24, "PV of the first annuity + PV of the second, discounted 24 more months."),
  mc("Which prize is worth the most today at 4.5%/a compounded annually?", best(lottery), lottery.filter((o) => o[0] !== best(lottery)).map((o) => o[0]).concat(["they are all worth the same"]), `PVs: ${lottery.map((o) => c2(o[1])).join(", ")}.`),
  $("A student owes 16 000 dollars at graduation and repays it monthly over 10 years at 6%/a compounded monthly. Find the monthly payment (dollars).", payPV(16000, 0.005, 120), "i = 0.005, n = 120."),
  tf("If the interest rate is 0, the present value of an annuity equals Rn.", true, "No discounting."),
  tf("Paying a loan over 10 years instead of 5 halves the total interest.", false, "It roughly doubles it."),
  ms("A 20 000-dollar loan at 6%/a compounded monthly. Which are true? Select all.", [`over 4 years R ≈ ${c2(payPV(20000, 0.005, 48))}`, `over 6 years R ≈ ${c2(payPV(20000, 0.005, 72))}`, "the 6-year loan costs more interest", "the 4-year payment is exactly 1.5 times the 6-year payment", "both have i = 0.005"], [0, 1, 2, 4], "The payments are not in the ratio of the terms."),
  $("What is the outstanding balance on a 10 000-dollar, 5-year loan at 6%/a compounded monthly right after the 36th payment (dollars)?", annPV(payPV(10000, 0.005, 60), 0.005, 24), "PV of the 24 remaining payments."),
  $("A fund of 100 000 dollars at 5%/a compounded annually pays equal amounts at the end of each year for 20 years. Find the yearly payment (dollars).", payPV(100000, 0.05, 20), "R = PV·i/[1 − (1 + i)⁻ⁿ]."),
  num("A fund of 50 000 dollars at 4%/a pays 4000 dollars at the end of each year. For how many full years can it pay?", Math.floor(-Math.log(1 - (50000 * 0.04) / 4000) / Math.log(1.04)), "Find the largest n with PV(4000, n) ≤ 50 000."),
  $("A couple saves 400 dollars a month for 15 years at 6%/a compounded monthly, then withdraws equal monthly amounts for 15 years at the same rate. Find the withdrawal (dollars).", payPV(annFV(400, 0.005, 180), 0.005, 180), "FV of savings becomes PV of withdrawals."),
  $("A lease charges 450 dollars a month for 4 years. What cash price today is equivalent at 4.8%/a compounded monthly (dollars)?", annPV(450, 0.004, 48), "PV of the lease payments."),
  $("Read the time line: 2000 dollars now plus 500 dollars at the end of each year for 6 years, at 5%/a compounded annually. Find the total present value (dollars).", 2000 + annPV(500, 0.05, 6), "2000 + PV of the annuity.", timelineD(6, { 1: "500", 2: "500", 3: "500", 4: "500", 5: "500", 6: "500" }, "2000")),
  num("The bars show the PV of each of 5 yearly payments of 1000 dollars. What rate per year makes the first bar 952.38? Enter the % .", 5, "1000 ÷ 952.38 = 1.05.", barsD([1, 2, 3, 4, 5].map((k) => 1000 / 1.05 ** k), { xlabel: "payment", ylabel: "value today", labels: [1, 2, 3, 4, 5].map((k) => String(c2(1000 / 1.05 ** k))) })),
  $("The graph shows a retirement fund paying 2500 dollars a month from 400 000 dollars at 4.2%/a compounded monthly. Find the balance after 10 years (dollars).", 400000 * 1.0035 ** 120 - annFV(2500, 0.0035, 120), "Grow the fund, subtract the FV of the withdrawals.", growthD([{ f: (t) => Math.max(0, 400000 * 1.0035 ** (12 * t) - annFV(2500, 0.0035, 12 * t)) }], 20, { ylabel: "balance" })),
  num("The graph shows the same 400 000-dollar fund. After how many whole years does the 400 000-dollar fund paying 2500 a month at 4.2%/a run out?", Math.ceil(paymentsToRepay(400000, 2500, 0.0035) / 12), "Find n with PV of payments ≥ 400 000, then ÷ 12 (round up).", growthD([{ f: (t) => Math.max(0, 400000 * 1.0035 ** (12 * t) - annFV(2500, 0.0035, 12 * t)) }], 25, { ylabel: "balance" })),
];
