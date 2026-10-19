// 8.6 Loans, Amortization and Changing Conditions — 20 easy + 20 medium questions (new topic)
import { mc, ms, num, tf } from "./kit.mjs";
import { barsD, growthD, annFV, payPV, balance, paymentsToRepay, c2 } from "./fig.mjs";

const S = String.raw;
const $ = (p, v, fb, fig = null) => num(p, c2(v), fb, fig, 0.02);
const totInt = (L, i, n) => payPV(L, i, n) * n - L;

export const E = [
  $("A loan balance is 5000 dollars at 12%/a compounded monthly. Find the interest for one month (dollars).", 50, "5000 × 0.01."),
  $("A loan balance is 8000 dollars at 6%/a compounded monthly. Find the interest for one month (dollars).", 40, "8000 × 0.005."),
  $("A payment of 400 dollars includes 60 dollars of interest. How much goes to principal (dollars)?", 340, "400 − 60."),
  $("A balance of 10 000 dollars is reduced by a principal payment of 250 dollars. What is the new balance (dollars)?", 9750, "10 000 − 250."),
  $("A balance of 3000 dollars at 12%/a compounded monthly receives a 500-dollar payment at the end of the month. What is the new balance (dollars)?", 3000 * 1.01 - 500, "3000 + 30 − 500."),
  $("Find the monthly payment on a 2400-dollar loan over 1 year at 6%/a compounded monthly (dollars).", payPV(2400, 0.005, 12), "R = PV·i/[1 − (1 + i)⁻ⁿ]."),
  mc("In an amortization table, how is the interest for a period found?", "balance × i", ["payment × i", "original loan × i", "payment − balance"], "Interest is on the current balance."),
  mc("As a loan is repaid, the interest part of each payment …", "decreases", ["increases", "stays the same", "becomes negative"], "The balance falls."),
  tf("In an amortization table, the principal part of each payment increases over time.", true, "Interest falls, so more of the fixed payment reduces the principal."),
  tf("A longer term always means less total interest.", false, "It usually means more."),
  mc("Which change reduces the total interest on a loan?", "making extra payments", ["lengthening the term", "raising the interest rate", "skipping payments"], "Extra payments reduce the balance faster."),
  mc("Which change lowers the regular payment on a loan?", "lengthening the term", ["shortening the term", "raising the interest rate", "borrowing more"], "Spread over more payments."),
  num("A loan of 6000 dollars is repaid with 24 payments of 270 dollars. How much interest is paid (dollars)?", 480, "24 × 270 − 6000."),
  $("Find the total interest on a 5000-dollar loan repaid monthly over 2 years at 9%/a compounded monthly (dollars).", totInt(5000, 0.0075, 24), "24R − 5000."),
  tf("The balance on a loan after the last payment is 0.", true, "The loan is fully repaid."),
  $("A balance of 1200 dollars at 18%/a compounded monthly receives a 100-dollar payment. How much of it is interest (dollars)?", 18, "1200 × 0.015."),
  num("A balance falls from 9000 dollars to 8820 dollars after one payment of 225 dollars. How much interest was charged (dollars)?", 45, "Principal 180; 225 − 180."),
  ms("Which are columns of an amortization table? Select all.", ["payment", "interest", "principal", "balance", "inflation"], [0, 1, 2, 3], "Inflation is not part of the table."),
  num("The bars show the interest part of each of the first 4 payments. What happens to it? Enter the 4th bar's value (dollars).", 47.03, "It decreases each month.", barsD([50, 49.01, 48.02, 47.03], { xlabel: "payment", ylabel: "interest", labels: ["50.00", "49.01", "48.02", "47.03"] }), 0.005),
  $("Read the graph of a loan balance: how much is owed at the start (dollars)?", 12000, "The vertical intercept.", growthD([{ f: (t) => Math.max(0, balance(12000, payPV(12000, 0.005, 48), 0.005, 12 * t)) }], 4, { ylabel: "balance" })),
];

export const M = [
  $("Find the monthly payment on 18 000 dollars over 5 years at 4.8%/a compounded monthly (dollars).", payPV(18000, 0.004, 60), "i = 0.004, n = 60."),
  $("For that loan (18 000, 5 years, 4.8%/a monthly), find the interest in the first month (dollars).", 72, "18 000 × 0.004."),
  $("For that loan, find the principal repaid in the first month (dollars).", payPV(18000, 0.004, 60) - 72, "R − 72."),
  $("For that loan, find the balance after 24 payments (dollars).", balance(18000, payPV(18000, 0.004, 60), 0.004, 24), "PV of the 36 remaining payments."),
  $("Find the total interest on 25 000 dollars over 4 years at 6%/a compounded monthly (dollars).", totInt(25000, 0.005, 48), "48R − 25 000."),
  $("Find the total interest on 25 000 dollars over 6 years at 6%/a compounded monthly (dollars).", totInt(25000, 0.005, 72), "72R − 25 000."),
  $("How much more interest is paid on 15 000 dollars over 5 years at 8%/a than at 5%/a (both compounded monthly)? (dollars)", totInt(15000, 0.08 / 12, 60) - totInt(15000, 0.05 / 12, 60), "Compare 60R − 15 000."),
  num("A 10 000-dollar loan at 6%/a compounded monthly is set up for 5 years. How many payments are needed if 50 dollars extra is paid each month?", paymentsToRepay(10000, payPV(10000, 0.005, 60) + 50, 0.005), "New payment R + 50; guess and check n."),
  $("Compare saving 1200 dollars at the end of each year with 100 dollars at the end of each month for 5 years at 6%/a (compounded to match). How much more does monthly saving give (dollars)?", annFV(100, 0.005, 60) - annFV(1200, 0.06, 5), "FV monthly − FV yearly."),
  mc("Which saves more interest on a 20 000-dollar, 5-year loan at 7%/a compounded monthly?", totInt(20000, 0.06 / 12, 60) < totInt(20000, 0.07 / 12, 48) ? "lowering the rate to 6%" : "shortening the term to 4 years", [totInt(20000, 0.06 / 12, 60) < totInt(20000, 0.07 / 12, 48) ? "shortening the term to 4 years" : "lowering the rate to 6%", "both save exactly the same", "neither saves anything"], `Interest: 6% for 5 years ≈ ${c2(totInt(20000, 0.06 / 12, 60))}; 7% for 4 years ≈ ${c2(totInt(20000, 0.07 / 12, 48))}.`),
  ms("For a 30 000-dollar loan at 6%/a compounded monthly over 5 years, which are true? Select all.", [`R ≈ ${c2(payPV(30000, 0.005, 60))}`, "the first month's interest is 150", "the last payment's interest is less than 5 dollars", "every payment has the same principal part", `total interest ≈ ${c2(totInt(30000, 0.005, 60))}`], [0, 1, 2, 4], "The principal part grows."),
  tf("Paying a loan off early always saves interest.", true, "Interest is charged only on the remaining balance."),
  tf("A loan at a lower rate always has a lower total interest, whatever the term.", false, "A much longer term can cost more."),
  $("A balance of 4500 dollars at 9%/a compounded monthly receives 3 payments of 300 dollars. What is the balance after the third payment (dollars)?", balance(4500, 300, 0.0075, 3), "Apply interest then subtract, three times."),
  num("How many monthly payments of 200 dollars repay a 4000-dollar credit balance at 18%/a compounded monthly (last may be smaller)?", paymentsToRepay(4000, 200, 0.015), "Guess and check n."),
  $("A loan of 8000 dollars is repaid over 3 years at 6%/a. How much less is the total interest with monthly compounding and payments than with yearly? (dollars)", totInt(8000, 0.06, 3) - totInt(8000, 0.005, 36), "Yearly: 3R − 8000; monthly: 36R − 8000."),
  $("What is the 13th payment's interest on a 12 000-dollar loan at 6%/a compounded monthly over 3 years (dollars)?", balance(12000, payPV(12000, 0.005, 36), 0.005, 12) * 0.005, "Balance after 12 payments × 0.005."),
  num("To the nearest whole percent, what share of the first payment on a 200 000-dollar, 25-year mortgage at 4.8%/a compounded monthly is interest?", Math.round((800 / payPV(200000, 0.004, 300)) * 100), "Interest 800 ÷ payment.", null, 1),
  $("Read the graph: how much is still owed halfway through the 4-year loan shown (dollars)?", balance(12000, payPV(12000, 0.005, 48), 0.005, 24), "Balance after 24 payments.", growthD([{ f: (t) => Math.max(0, balance(12000, payPV(12000, 0.005, 48), 0.005, 12 * t)) }], 4, { ylabel: "balance", pts: [[2, balance(12000, payPV(12000, 0.005, 48), 0.005, 24), "2 years"]] })),
  $("The bars show the total interest on a 25 000-dollar loan at 6% over 3, 5 and 7 years. Find the difference between the 7-year and 3-year bars (dollars).", totInt(25000, 0.005, 84) - totInt(25000, 0.005, 36), "Subtract.", barsD([36, 60, 84].map((n) => totInt(25000, 0.005, n)), { xlabel: "3 · 5 · 7 years", ylabel: "total interest" })),
];
