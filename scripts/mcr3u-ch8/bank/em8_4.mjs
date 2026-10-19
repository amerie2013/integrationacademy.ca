// 8.4 Annuities: Future Value — 20 easy + 20 medium questions
import { mc, ms, num, tf } from "./kit.mjs";
import { barsD, growthD, timelineD, annFV, payFV, paymentsTo, c2 } from "./fig.mjs";

const S = String.raw;
const $ = (p, v, fb, fig = null) => num(p, c2(v), fb, fig, 0.02);

export const E = [
  $("Find the future value of 1000 dollars deposited at the end of each year for 3 years at 10%/a compounded annually (dollars).", annFV(1000, 0.1, 3), "1210 + 1100 + 1000."),
  $("Find the future value of 500 dollars at the end of each year for 4 years at 5%/a compounded annually (dollars).", annFV(500, 0.05, 4), "R[(1 + i)ⁿ − 1]/i."),
  $("Find the future value of 200 dollars at the end of each year for 10 years at 6%/a compounded annually (dollars).", annFV(200, 0.06, 10), "200(1.06¹⁰ − 1)/0.06."),
  $("Find the future value of 100 dollars at the end of each month for 1 year at 12%/a compounded monthly (dollars).", annFV(100, 0.01, 12), "i = 0.01, n = 12."),
  $("Find the future value of 50 dollars at the end of each month for 2 years at 6%/a compounded monthly (dollars).", annFV(50, 0.005, 24), "i = 0.005, n = 24."),
  $("Find the future value of 300 dollars at the end of every 6 months for 3 years at 4%/a compounded semi-annually (dollars).", annFV(300, 0.02, 6), "i = 0.02, n = 6."),
  num("How much is deposited in total by paying 80 dollars a month for 5 years (dollars)?", 4800, "80 × 60."),
  num("How many payments are made in a 4-year annuity with quarterly payments?", 16, "4 × 4."),
  mc("What is an annuity?", "a series of equal payments made at regular intervals", ["a single deposit", "a loan with no interest", "a payment made once a year only"], "Regular equal payments."),
  mc("In an ordinary annuity, payments are made …", "at the end of each period", ["at the start of each period", "only at the end of the term", "at random times"], "Ordinary = end of period."),
  tf("The last payment of an ordinary annuity earns no interest.", true, "It is made at the very end."),
  tf("The future value of an annuity equals the total of the payments.", false, "It also includes the interest earned."),
  mc("Which formula gives the future value of an annuity?", S`\(FV=\frac{R[(1+i)^n-1]}{i}\)`, [S`\(FV=R(1+i)^n\)`, S`\(FV=\frac{R[1-(1+i)^{-n}]}{i}\)`, S`\(FV=Rn\)`], "A geometric series sum."),
  $("A deposit of 1000 dollars made at the end of year 1 of a 5-year annuity at 4%/a earns interest for 4 years. What is it worth at the end (dollars)?", 1000 * 1.04 ** 4, "1000(1.04)⁴."),
  $("Find the interest earned when 100 dollars is deposited at the end of each year for 3 years at 10%/a (dollars).", annFV(100, 0.1, 3) - 300, "FV − 300."),
  num("What is the common ratio of the geometric series for the future value of an annuity at 5% per period?", 1.05, "1 + i.", null, 0.0001),
  $("Find the future value of 2000 dollars at the end of each year for 5 years at 3%/a compounded annually (dollars).", annFV(2000, 0.03, 5), "2000(1.03⁵ − 1)/0.03."),
  $("Find the future value of 25 dollars a week for 1 year at 5.2%/a compounded weekly (dollars).", annFV(25, 0.001, 52), "i = 0.001, n = 52."),
  $("The bars show each deposit's value at the end. Find the total (dollars).", 400 * 1.05 ** 2 + 400 * 1.05 + 400, "441 + 420 + 400.", barsD([441, 420, 400], { xlabel: "deposit", ylabel: "value at end", labels: ["441", "420", "400"] })),
  $("Read the time line: 600 dollars at the end of each year for 4 years at 7%/a. Find the future value (dollars).", annFV(600, 0.07, 4), "600(1.07⁴ − 1)/0.07.", timelineD(4, { 1: "600", 2: "600", 3: "600", 4: "600" }, "0")),
];

export const M = [
  $("Find the future value of 175 dollars at the end of each month for 6 years at 4.2%/a compounded monthly (dollars).", annFV(175, 0.0035, 72), "i = 0.0035, n = 72."),
  $("Find the future value of 1250 dollars at the end of each quarter for 8 years at 5.6%/a compounded quarterly (dollars).", annFV(1250, 0.014, 32), "i = 0.014, n = 32."),
  $("Find the future value of 2500 dollars at the end of every 6 months for 12 years at 3.8%/a compounded semi-annually (dollars).", annFV(2500, 0.019, 24), "i = 0.019, n = 24."),
  $("Find the interest earned by depositing 90 dollars at the end of each month for 10 years at 6%/a compounded monthly (dollars).", annFV(90, 0.005, 120) - 10800, "FV − 90 × 120."),
  $("What yearly deposit at 5%/a compounded annually grows to 20 000 dollars in 10 years (dollars)?", payFV(20000, 0.05, 10), "R = FV·i/[(1 + i)ⁿ − 1]."),
  $("What monthly deposit at 3%/a compounded monthly grows to 10 000 dollars in 5 years (dollars)?", payFV(10000, 0.0025, 60), "i = 0.0025, n = 60."),
  $("What quarterly deposit at 6%/a compounded quarterly grows to 50 000 dollars in 15 years (dollars)?", payFV(50000, 0.015, 60), "i = 0.015, n = 60."),
  num("How many yearly deposits of 3000 dollars at 6%/a compounded annually are needed to reach 40 000 dollars?", paymentsTo(40000, 3000, 0.06), "Guess and check n."),
  num("How many monthly deposits of 200 dollars at 4.8%/a compounded monthly are needed to reach 10 000 dollars?", paymentsTo(10000, 200, 0.004), "Guess and check n."),
  ms("For 500 dollars at the end of each year for 4 years at 6%/a, which are true? Select all.", ["the first deposit grows to 500(1.06)³", "the last deposit grows to 500", `FV ≈ ${c2(annFV(500, 0.06, 4))}`, "total deposits = 2000", "the interest is 120"], [0, 1, 2, 3], `Interest ≈ ${c2(annFV(500, 0.06, 4) - 2000)}.`),
  mc("Doubling the payment of an annuity (same rate and term) …", "doubles the future value", ["more than doubles it", "less than doubles it", "does not change it"], "FV is proportional to R."),
  tf("Doubling the number of payments of an annuity more than doubles its future value (for a positive rate).", true, "Earlier payments have more time to grow."),
  tf("In a simple annuity, the payment period and the compounding period are the same.", true, "That is what 'simple' means here."),
  $("A student saves 40 dollars at the end of each week for 3 years at 2.6%/a compounded weekly. Find the future value (dollars).", annFV(40, 0.0005, 156), "i = 0.026/52 = 0.0005, n = 156."),
  $("Find the future value after 20 years of 1500 dollars at the end of each year at 7%/a compounded annually (dollars).", annFV(1500, 0.07, 20), "1500(1.07²⁰ − 1)/0.07."),
  $("Two friends save for 10 years at 5%/a compounded annually: Ana 1000 dollars a year, Ben 2000 dollars a year for only the last 5 years. How much more does Ben have (dollars)?", annFV(2000, 0.05, 5) - annFV(1000, 0.05, 10), "Compare the two future values."),
  $("A saver deposits 250 dollars at the end of each month for 4 years at 6%/a compounded monthly, then stops and lets it grow for 2 more years. Find the final amount (dollars).", annFV(250, 0.005, 48) * 1.005 ** 24, "FV after 4 years × 1.005²⁴."),
  num("To the nearest whole percent, what fraction of the future value of 100 dollars a year for 30 years at 6% is interest?", Math.round(((annFV(100, 0.06, 30) - 3000) / annFV(100, 0.06, 30)) * 100), "(FV − 3000)/FV.", null, 1),
  $("The graph shows savings of 1200 dollars a year at 6%/a. Read the future value after 15 years (dollars).", annFV(1200, 0.06, 15), "1200(1.06¹⁵ − 1)/0.06.", growthD([{ f: (t) => annFV(1200, 0.06, t) }], 15, { pts: [[15, annFV(1200, 0.06, 15), "15 years"]] })),
  $("The bars show each of four quarterly deposits' value at the end of the year at 8%/a compounded quarterly. Find the total (dollars).", annFV(500, 0.02, 4), "500(1.02⁴ − 1)/0.02.", barsD([500 * 1.02 ** 3, 500 * 1.02 ** 2, 510, 500], { xlabel: "deposit", ylabel: "value at end" })),
];
