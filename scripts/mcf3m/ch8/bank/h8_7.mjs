// 8.7 Savings Plans and Loans — 20 hard questions
import { S, mc, ms, num, tf, n2, PMT, FVa, PVa, A, SINK, firstN, timelineSvg, fDoc, P } from "./fk.mjs";
const bal = (PV, i, R, k) => PV * (1 + i) ** k - FVa(R, i, k);
const months = (PV, i, R) => { let b = PV, m = 0; while (b > 1e-9) { b = b * (1 + i) - R; m++; } return m; };
const R1 = PMT(320000, 0.0042, 300);

export const TOPIC = "8.7 Savings Plans and Loans";
export const Q = [
  n2(S`A 320000 dollar mortgage at $5.04\%$ compounded monthly over $25$ years. Find the monthly payment.`, R1, "i = 0.0042, n = 300.", fDoc([{ f: (t) => bal(320000, 0.0042, R1, 12 * t), color: "violet" }], { view: { xmin: 0, xmax: 26, ymin: 0, ymax: 340000 }, step: { x: 5, y: 40000 }, xlabel: "years", ylabel: "balance" })),
  n2(S`For that mortgage, find the total interest.`, 300 * R1 - 320000, "nR − PV."),
  n2(S`For that mortgage, find the balance after $5$ years.`, bal(320000, 0.0042, R1, 60), "PV of remaining payments."),
  n2(S`For that mortgage, how much principal is repaid in the first $5$ years?`, 320000 - bal(320000, 0.0042, R1, 60), "320 000 − balance."),
  num(S`A 15000 dollar loan at $6\%$ compounded monthly is repaid at 500 dollars a month. How many payments (the last may be smaller)?`, months(15000, 0.005, 500), "Repeat balance × 1.005 − 500."),
  n2(S`Same loan at the regular $3$-year payment: how much interest is saved by paying 500 dollars a month instead? (Approximate: compare n·R values, last payment full.)`, 36 * PMT(15000, 0.005, 36) - 500 * months(15000, 0.005, 500), "Approximate comparison."),
  n2(S`A couple needs 60000 dollars for a down payment in $5$ years. They have 15000 dollars. At $4.8\%$ compounded monthly, what monthly deposit is needed?`, SINK(60000 - A(15000, 0.004, 60), 0.004, 60), "Grow lump sum, then sinking fund.", timelineSvg({ n: 60, unit: "months", flows: [{ at: 0, label: "15 000", up: false }, { at: 60, label: "60 000" }] })),
  mc("Which choice saves the most interest on a 20 000 dollar loan at 6% compounded monthly?", "a 3-year term", ["a 5-year term", "a 7-year term", "a 5-year term with half payments"], "Shortest term.", fDoc([{ f: (t) => 12 * t * PMT(20000, 0.005, 12 * t) - 20000, color: "violet" }], { view: { xmin: 1, xmax: 8, ymin: 0, ymax: 5500 }, step: { x: 1, y: 500 }, xlabel: "term (years)", ylabel: "total interest" })),
  n2("For that graph, enter the total interest on the 5-year term.", 60 * PMT(20000, 0.005, 60) - 20000, "nR − PV."),
  ms("Select every TRUE statement about amortization.", ["the payment stays the same each period", "the interest portion falls over time", "the principal portion rises over time", "the balance falls by equal amounts each period"], [0, 1, 2], "The balance falls faster later."),
  tf(S`Halfway through the term of a loan, more than half the principal is still owed.`, true, "Early payments are mostly interest."),
  n2(S`A 12000 dollar loan at $8.4\%$ compounded monthly over $3$ years: find the interest in month $13$.`, bal(12000, 0.007, PMT(12000, 0.007, 36), 12) * 0.007, "Balance after 12 × i."),
  n2(S`Compare: lease a car for 389 dollars a month for $4$ years, or borrow 18000 dollars at $5.4\%$ compounded monthly over $4$ years. Enter (loan payment) − (lease payment).`, PMT(18000, 0.0045, 48) - 389, "Loan payment − 389."),
  n2(S`Saving 350 dollars a month at $3.6\%$ compounded monthly, how much is there after $6$ years?`, FVa(350, 0.003, 72), "FV."),
  num(S`Saving 350 dollars a month at $3.6\%$ compounded monthly, how many months to reach 25000 dollars?`, firstN((n) => n > 0 && FVa(350, 0.003, n) >= 25000), "Trial."),
  n2(S`A student loan of 28000 dollars at $6.6\%$ compounded monthly is repaid over $10$ years. Find the payment.`, PMT(28000, 0.0055, 120), "n = 120."),
  n2(S`If that student instead pays 400 dollars a month, enter the number of payments needed.`, months(28000, 0.0055, 400), "Trial.", fDoc([{ f: (t) => Math.max(0, bal(28000, 0.0055, 400, t)), color: "violet" }, { f: (t) => Math.max(0, bal(28000, 0.0055, PMT(28000, 0.0055, 120), t)), color: "green" }], { view: { xmin: 0, xmax: 122, ymin: 0, ymax: 30000 }, step: { x: 12, y: 3000 }, xlabel: "month" })),
  n2(S`A loan's balance after one payment of 525 dollars is 17000 dollars at $6\%$ compounded monthly. What was borrowed?`, (17000 + 525) / 1.005, "(B + R)/(1 + i)."),
  n2(S`A plan: 3000 dollars now and 250 dollars a month for $8$ years at $4.2\%$ compounded monthly. How much interest is earned in total?`, A(3000, 0.0035, 96) + FVa(250, 0.0035, 96) - 3000 - 24000, "FV − deposits."),
  n2(S`Monthly payment on a 40000 dollar loan at $9\%$ compounded monthly over $6$ years.`, PMT(40000, 0.0075, 72), "n = 72."),
];
