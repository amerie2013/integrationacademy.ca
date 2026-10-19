// 8.5 Annuities: Present Value — 20 easy + 20 medium questions (new topic)
import { mc, ms, num, tf } from "./kit.mjs";
import { barsD, growthD, timelineD, annPV, payPV, paymentsToRepay, pv, c2 } from "./fig.mjs";

const S = String.raw;
const $ = (p, v, fb, fig = null) => num(p, c2(v), fb, fig, 0.02);

export const E = [
  $("Find the present value of 1000 dollars at the end of each year for 2 years at 10%/a compounded annually (dollars).", annPV(1000, 0.1, 2), "1000/1.1 + 1000/1.1²."),
  $("Find the present value of 500 dollars at the end of each year for 3 years at 5%/a compounded annually (dollars).", annPV(500, 0.05, 3), "R[1 − (1 + i)⁻ⁿ]/i."),
  $("Find the present value of 2000 dollars at the end of each year for 5 years at 4%/a compounded annually (dollars).", annPV(2000, 0.04, 5), "2000(1 − 1.04⁻⁵)/0.04."),
  $("Find the present value of 100 dollars at the end of each month for 1 year at 12%/a compounded monthly (dollars).", annPV(100, 0.01, 12), "i = 0.01, n = 12."),
  $("Find the present value of 300 dollars at the end of each quarter for 2 years at 8%/a compounded quarterly (dollars).", annPV(300, 0.02, 8), "i = 0.02, n = 8."),
  $("Find the present value of 750 dollars every 6 months for 4 years at 6%/a compounded semi-annually (dollars).", annPV(750, 0.03, 8), "i = 0.03, n = 8."),
  mc("Which formula gives the present value of an annuity?", S`\(PV=\frac{R[1-(1+i)^{-n}]}{i}\)`, [S`\(PV=\frac{R[(1+i)^n-1]}{i}\)`, S`\(PV=R(1+i)^{-n}\)`, S`\(PV=Rn\)`], "Sum of discounted payments."),
  mc("A loan of 5000 dollars repaid with equal monthly payments is …", "the present value of the payments", ["the future value of the payments", "the total of the payments", "the interest on the payments"], "Borrowed amount = PV."),
  tf("The present value of an annuity is less than the sum of its payments.", true, "Each payment is discounted."),
  tf("To find a loan payment, you use the future value of an annuity formula.", false, "Use the present value formula."),
  num("How much is paid in total on a loan with 36 payments of 250 dollars (dollars)?", 9000, "36 × 250."),
  num("A 9000-dollar total is paid on a loan of 8000 dollars. How much interest is that (dollars)?", 1000, "9000 − 8000."),
  $("Find the monthly payment on a 1200-dollar loan over 1 year at 12%/a compounded monthly (dollars).", payPV(1200, 0.01, 12), "R = PV·i/[1 − (1 + i)⁻ⁿ]."),
  $("Find the yearly payment on a 10 000-dollar loan over 5 years at 6%/a compounded annually (dollars).", payPV(10000, 0.06, 5), "10 000(0.06)/(1 − 1.06⁻⁵)."),
  $("Find the present value of a 400-dollar payment due at the end of year 3 at 5%/a compounded annually (dollars).", pv(400, 0.05, 3), "400(1.05)⁻³."),
  num("What is the first term of the geometric series for the PV of an annuity of 1000 dollars at 5% per period? (dollars, 2 decimals)", c2(1000 / 1.05), "The first payment discounted one period.", null, 0.01),
  num("What is the common ratio of the PV series for an annuity at 5% per period? (4 decimals)", Math.round((1 / 1.05) * 10000) / 10000, "(1.05)⁻¹.", null, 0.0001),
  mc("A retiree wants to withdraw 2000 dollars a month for 20 years. Which value tells how much they need at retirement?", "present value of an annuity", ["future value of an annuity", "simple interest", "future value of a single amount"], "Lump sum now that funds the payments."),
  $("Read the time line: payments of 600 dollars at the end of each year for 3 years at 4%/a. Find the present value (dollars).", annPV(600, 0.04, 3), "Discount each payment and add.", timelineD(3, { 1: "600", 2: "600", 3: "600" }, "PV?")),
  $("The bars show the present values of 4 yearly payments of 1000 dollars at 8%. Find their total (dollars).", annPV(1000, 0.08, 4), "Sum the bars.", barsD([1, 2, 3, 4].map((k) => 1000 / 1.08 ** k), { xlabel: "payment", ylabel: "value today" })),
];

export const M = [
  $("Find the present value of 250 dollars at the end of each month for 4 years at 4.8%/a compounded monthly (dollars).", annPV(250, 0.004, 48), "i = 0.004, n = 48."),
  $("Find the present value of 1800 dollars at the end of each quarter for 7 years at 5.2%/a compounded quarterly (dollars).", annPV(1800, 0.013, 28), "i = 0.013, n = 28."),
  $("Find the monthly payment on a 15 000-dollar car loan over 5 years at 6.6%/a compounded monthly (dollars).", payPV(15000, 0.0055, 60), "i = 0.0055, n = 60."),
  $("Find the total interest on that car loan (15 000 dollars, 5 years, 6.6%/a monthly) (dollars).", payPV(15000, 0.0055, 60) * 60 - 15000, "60R − 15 000."),
  $("Find the quarterly payment on a 20 000-dollar loan over 4 years at 7.2%/a compounded quarterly (dollars).", payPV(20000, 0.018, 16), "i = 0.018, n = 16."),
  $("How much can be borrowed at 5.4%/a compounded monthly with payments of 350 dollars a month for 3 years (dollars)?", annPV(350, 0.0045, 36), "PV of the payments."),
  $("How much is needed now to fund withdrawals of 1500 dollars every 6 months for 10 years at 4%/a compounded semi-annually (dollars)?", annPV(1500, 0.02, 20), "i = 0.02, n = 20."),
  num("How many monthly payments of 300 dollars repay a 5000-dollar loan at 9%/a compounded monthly (the last may be smaller)?", paymentsToRepay(5000, 300, 0.0075), "Guess and check n."),
  num("How many yearly payments of 2000 dollars repay a 10 000-dollar loan at 8%/a compounded annually (the last may be smaller)?", paymentsToRepay(10000, 2000, 0.08), "Guess and check n."),
  ms("A 6000-dollar loan is repaid with 24 monthly payments at 6%/a compounded monthly. Which are true? Select all.", ["i = 0.005", "n = 24", `R ≈ ${c2(payPV(6000, 0.005, 24))}`, `the total interest is about ${c2(payPV(6000, 0.005, 24) * 24 - 6000)}`, "the total paid is 6000"], [0, 1, 2, 3], "The total paid includes interest."),
  mc("Which offer is worth more today at 5%/a compounded annually?", annPV(4000, 0.05, 6) > 20000 ? "4000 dollars a year for 6 years" : "20 000 dollars now", [annPV(4000, 0.05, 6) > 20000 ? "20 000 dollars now" : "4000 dollars a year for 6 years", "they are worth exactly the same", "it cannot be compared"], `PV of the payments ≈ ${c2(annPV(4000, 0.05, 6))}.`),
  tf("For the same loan and rate, a longer term gives a smaller payment but more total interest.", true, `e.g. 10 000 at 6%: ${c2(payPV(10000, 0.005, 36))} over 3 years vs ${c2(payPV(10000, 0.005, 60))} over 5 years.`),
  tf("Doubling the term of a loan halves the payment.", false, "The payment falls by less than half because of interest."),
  $("A scholarship pays 3000 dollars at the end of each year for 4 years. How much must be deposited now at 3.5%/a compounded annually (dollars)?", annPV(3000, 0.035, 4), "PV of the payments."),
  $("A prize pays 25 000 dollars a year for 20 years. What is it worth today at 4%/a compounded annually (dollars)?", annPV(25000, 0.04, 20), "25 000(1 − 1.04⁻²⁰)/0.04."),
  num("For the prize above (25 000 a year for 20 years at 4%), what percent of the total payments is the present value (nearest whole %)?", Math.round((annPV(25000, 0.04, 20) / 500000) * 100), "PV ÷ 500 000.", null, 1),
  $("A 12 000-dollar loan at 7.8%/a compounded monthly is repaid over 3 years. Find the monthly payment (dollars).", payPV(12000, 0.0065, 36), "i = 0.0065, n = 36."),
  $("What lump sum now is equivalent to 200 dollars a month for 25 years at 6%/a compounded monthly (dollars)?", annPV(200, 0.005, 300), "i = 0.005, n = 300."),
  $("Read the graph: a fund pays 2000 dollars a year until the balance is 0 after 10 years at 5%/a. How much was in the fund at the start (dollars)?", annPV(2000, 0.05, 10), "PV of 10 payments.", growthD([{ f: (t) => Math.max(0, annPV(2000, 0.05, 10) * 1.05 ** t - (2000 * (1.05 ** t - 1)) / 0.05) }], 10, { ylabel: "balance" })),
  $("Read the time line: a loan is repaid with 4 payments of 1500 dollars at 7%/a compounded annually. How much was borrowed (dollars)?", annPV(1500, 0.07, 4), "PV of the payments.", timelineD(4, { 1: "1500", 2: "1500", 3: "1500", 4: "1500" }, "loan?")),
];
