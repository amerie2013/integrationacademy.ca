// 8.7 Savings Plans and Loans — 20 easy + 20 medium
import { S, mc, ms, num, tf, fill, n2, PMT, FVa, A, SINK, FREQ, timelineSvg, fDoc, P, pays } from "./fk.mjs";
const bal = (PV, i, R, k) => PV * (1 + i) ** k - FVa(R, i, k);
const easyP = [[5000, 0.06, 12, 1], [3000, 0.12, 12, 1], [10000, 0.05, 1, 3], [8000, 0.08, 4, 2], [2400, 0.048, 12, 2]];
const medP = [[16500, 0.057, 12, 5], [42000, 0.039, 12, 6], [9000, 0.06, 4, 3], [275000, 0.051, 12, 25], [12500, 0.084, 12, 4]];
const g = fDoc([{ f: (t) => bal(12000, 0.005, PMT(12000, 0.005, 36), t), color: "violet" }], { view: { xmin: 0, xmax: 37, ymin: 0, ymax: 13000 }, step: { x: 6, y: 1000 }, xlabel: "month", ylabel: "balance" });

export const E = [
  ...easyP.map(([pv, r, m, t]) => n2(S`Find the payment per ${{ 1: "year", 4: "quarter", 12: "month" }[m]} on a loan of ${pv} dollars at $${+(r * 100).toFixed(2)}\%$ compounded ${FREQ[m]} over ${t} year${t > 1 ? "s" : ""}.`, PMT(pv, r / m, m * t), "R = PV·i/[1 − (1 + i)⁻ⁿ].")),
  num(S`First month's interest on a 6000 dollar loan at $6\%$ compounded monthly.`, 30, "6000 × 0.005."),
  num(S`First month's interest on a 15000 dollar loan at $4.8\%$ compounded monthly.`, 60, "15 000 × 0.004."),
  num(S`A payment of 400 dollars includes 60 dollars of interest. How much goes to principal?`, 340, "400 − 60."),
  num(S`Total interest on a 7000 dollar loan repaid by $24$ payments of 315 dollars.`, 560, "7560 − 7000."),
  mc("Early loan payments are mostly …", "interest", ["principal", "fees", "equal parts"], "Balance is largest early."),
  mc("A longer loan term at the same rate means …", "lower payments, more total interest", ["higher payments, less interest", "lower payments, less interest", "no change"], "Trade-off."),
  tf("Each month's interest is charged on the current balance.", true, "Balance × i."),
  tf("Paying extra each month makes a loan last longer.", false, "Shorter."),
  fill("A table showing each payment's interest, principal and balance is an ____ table.", ["amortization", "amortisation"], "Amortization."),
  mc("The graph shows a loan balance over 36 months. Why is it curved?", "more principal is repaid in later payments", ["the rate changes", "payments grow", "interest is fixed"], "Interest shrinks.", g),
  num("For the loan graphed (12 000 dollars at 6% compounded monthly, 36 months), enter the balance at month 36.", 0, "Fully repaid.", g),
  n2(S`Value of 1500 dollars now plus 50 dollars a month for $2$ years at $6\%$ compounded monthly.`, A(1500, 0.005, 24) + FVa(50, 0.005, 24), "Lump sum + annuity."),
  num(S`A 2000 dollar loan has a 1500 dollar balance after some payments. How much principal has been repaid?`, 500, "2000 − 1500."),
  num(S`How many monthly payments are in a $25$-year mortgage?`, 300, "12 × 25."),
  num(S`Interest portion of a payment when the balance is 9000 dollars and $i=0.004$.`, 36, "9000 × 0.004."),
];

export const M = [
  ...medP.map(([pv, r, m, t]) => n2(S`Find the payment per ${{ 4: "quarter", 12: "month" }[m]} on a loan of ${pv} dollars at $${+(r * 100).toFixed(2)}\%$ compounded ${FREQ[m]} over ${t} years.`, PMT(pv, r / m, m * t), "Payment formula.")),
  n2(S`Total interest on the 16500 dollar loan at $5.7\%$ compounded monthly over $5$ years.`, 60 * PMT(16500, 0.00475, 60) - 16500, "nR − PV."),
  n2(S`For a 20000 dollar loan at $6\%$ compounded monthly over $4$ years, find the balance after the first payment.`, bal(20000, 0.005, PMT(20000, 0.005, 48), 1), "20 000(1.005) − R."),
  n2(S`For the same loan, find the principal repaid in the first payment.`, PMT(20000, 0.005, 48) - 100, "R − 100."),
  n2(S`How much less interest is paid on a 25000 dollar loan at $6\%$ compounded monthly over $3$ years instead of $6$ years?`, (72 * PMT(25000, 0.005, 72) - 25000) - (36 * PMT(25000, 0.005, 36) - 25000), "Difference."),
  n2(S`You have 4000 dollars and want 20000 dollars in $5$ years at $4.2\%$ compounded monthly. Monthly deposit needed?`, SINK(20000 - A(4000, 0.0035, 60), 0.0035, 60), "Grow the 4000 first."),
  mc("The graph compares loan balances for 3-year (green) and 6-year (violet) terms on the same loan. Which pays more interest?", "the 6-year loan", ["the 3-year loan", "the same", "cannot tell"], "Balance stays high longer.", fDoc([{ f: (t) => bal(25000, 0.005, PMT(25000, 0.005, 36), t), color: "green" }, { f: (t) => bal(25000, 0.005, PMT(25000, 0.005, 72), t), color: "violet" }], { view: { xmin: 0, xmax: 73, ymin: 0, ymax: 26000 }, step: { x: 6, y: 2500 }, xlabel: "month" })),
  num("For those loans, enter the 6-year monthly payment (two decimals).", Math.round(PMT(25000, 0.005, 72) * 100) / 100, "R.", fDoc([{ f: (t) => bal(25000, 0.005, PMT(25000, 0.005, 72), t), color: "violet" }], { view: { xmin: 0, xmax: 73, ymin: 0, ymax: 26000 }, step: { x: 6, y: 2500 }, xlabel: "month" }), 0.011),
  ms("Select every way to reduce the total interest on a loan.", ["a shorter term", "a lower rate", "extra payments", "a longer term"], [0, 1, 2], "Longer terms add interest."),
  tf(S`On a loan, the interest portion of each payment decreases over time.`, true, "Balance falls."),
  fill(S`Total interest on a loan equals $nR-\square$. Enter the two letters.`, ["PV"], "Amount borrowed."),
  n2(S`2500 dollars now plus 200 dollars a quarter for $5$ years at $5\%$ compounded quarterly. Final value?`, A(2500, 0.0125, 20) + FVa(200, 0.0125, 20), "Lump sum + annuity."),
  n2(S`A 30000 dollar car loan at $3.9\%$ compounded monthly over $5$ years: total paid?`, 60 * PMT(30000, 0.00325, 60), "60R."),
  n2(S`The same car loan over $7$ years: how much more interest than over $5$ years?`, (84 * PMT(30000, 0.00325, 84)) - (60 * PMT(30000, 0.00325, 60)), "Difference."),
  n2(S`Find the interest portion of the second payment on a 10000 dollar loan at $6\%$ compounded monthly over $2$ years.`, bal(10000, 0.005, PMT(10000, 0.005, 24), 1) * 0.005, "Balance after 1 × i."),
  n2(S`Find the payment per month on a 6800 dollar loan at $10.8\%$ compounded monthly over $2$ years.`, PMT(6800, 0.009, 24), "n = 24."),
];
