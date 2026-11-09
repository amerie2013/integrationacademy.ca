// 8.6 Annuities: Present Value — 20 easy + 20 medium
import { S, mc, ms, num, tf, fill, n2, PVa, FREQ, timelineSvg, fDoc, P, pays } from "./fk.mjs";
const per = { 1: "year", 2: "half-year", 4: "quarter", 12: "month" };
const tl = timelineSvg({ n: 3, unit: "years", flows: [{ at: 0, label: "PV = ?", up: false }, ...pays(3, "800", true)] });
const easy = [[1000, 0.05, 1, 2], [400, 0.06, 1, 3], [150, 0.06, 12, 1], [500, 0.04, 4, 2], [700, 0.08, 2, 2], [250, 0.036, 12, 2]];
const med = [[325, 0.054, 12, 5], [1800, 0.048, 4, 7], [5000, 0.055, 1, 12], [95, 0.084, 12, 3], [2200, 0.062, 2, 10]];

export const E = [
  ...easy.map(([R, r, m, t]) => n2(S`Find the present value of ${R} dollars at the end of each ${per[m]} for ${t} years at $${+(r * 100).toFixed(2)}\%$ compounded ${FREQ[m]}.`, PVa(R, r / m, m * t), "R[1 − (1 + i)⁻ⁿ]/i.")),
  num(S`A loan is repaid by $48$ payments of 300 dollars. Total paid?`, 14400, "48 × 300."),
  num(S`A 10000 dollar loan is repaid by $36$ payments of 310 dollars. Total interest?`, 1160, "11 160 − 10 000."),
  mc("The present value of an annuity is …", "the single amount today equal to all the payments", ["the total of the payments", "the last payment", "the interest only"], "Definition."),
  mc("The amount you can borrow is the … of your payments.", "present value", ["future value", "total", "average"], "Loan = PV."),
  tf("The PV of an annuity is less than the sum of its payments (positive rate).", true, "Discounting."),
  tf("A longer loan term at the same payment lets you borrow less.", false, "More."),
  fill("Money taken out of a fund regularly is a ____.", ["withdrawal"], "Withdrawal."),
  mc("The timeline shows 3 payments of 800 at 5% compounded annually. Which sum is PV?", "800(1.05)⁻¹ + 800(1.05)⁻² + 800(1.05)⁻³", ["2400(1.05)⁻³", "800(1.05)³", "2400"], "Discount each.", tl),
  n2("Evaluate the PV for the timeline.", PVa(800, 0.05, 3), "Calculator.", tl),
  n2(S`Evaluate $\frac{1-1.05^{-2}}{0.05}$.`, (1 - 1.05 ** -2) / 0.05, "≈ 1.8594."),
  num(S`Number of payments: monthly for $6$ years.`, 72, "12 × 6."),
  n2(S`Find the PV of 1200 dollars at the end of each year for $2$ years at $10\%$ compounded annually.`, PVa(1200, 0.1, 2), "1090.91 + 991.74."),
  num(S`Interest paid on a loan of 5000 dollars repaid by $12$ payments of 440 dollars.`, 280, "5280 − 5000."),
  n2(S`Find the PV of 2000 dollars at the end of each year for $3$ years at $3\%$ compounded annually.`, PVa(2000, 0.03, 3), "PV."),
];

export const M = [
  ...med.map(([R, r, m, t]) => n2(S`Find the present value of ${R} dollars at the end of each ${per[m]} for ${t} years at $${+(r * 100).toFixed(2)}\%$ compounded ${FREQ[m]}.`, PVa(R, r / m, m * t), "PV formula.")),
  n2(S`What loan can 325 dollars a month for $5$ years at $5.4\%$ compounded monthly repay? Enter the interest paid.`, 325 * 60 - PVa(325, 0.0045, 60), "nR − PV."),
  n2(S`A fund must pay 600 dollars at the end of each month for $2$ years at $4.2\%$ compounded monthly. Fund needed?`, PVa(600, 0.0035, 24), "PV."),
  n2(S`Option A: 30000 dollars now. Option B: 4000 dollars a year for $9$ years at $6\%$ compounded annually. Enter the PV of B.`, PVa(4000, 0.06, 9), "PV."),
  mc("Comparing 30 000 dollars now with 4000 dollars a year for 9 years at 6%, which is worth more?", PVa(4000, 0.06, 9) > 30000 ? "B" : "A", [PVa(4000, 0.06, 9) > 30000 ? "A" : "B", "equal", "cannot tell"], "Compare to 30 000."),
  mc("The graph shows the loan supported by 500 dollars a month at 6% for different terms. What happens for long terms?", "the loan size levels off", ["it grows without limit", "it decreases", "it is a straight line"], "Approaches R/i.", fDoc([{ f: (t) => PVa(500, 0.005, 12 * t), color: "violet" }], { view: { xmin: 0, xmax: 40, ymin: 0, ymax: 100000 }, step: { x: 5, y: 10000 }, lines: [{ m: 0, b: 100000, color: "red", dash: true }], xlabel: "term (years)", ylabel: "loan" })),
  n2("For that graph, enter the loan for a 20-year term.", PVa(500, 0.005, 240), "PV with n = 240.", fDoc([{ f: (t) => PVa(500, 0.005, 12 * t), color: "violet" }], { view: { xmin: 0, xmax: 40, ymin: 0, ymax: 100000 }, step: { x: 5, y: 10000 }, points: [P(20, Math.round(PVa(500, 0.005, 240)), "t = 20")], xlabel: "term (years)", ylabel: "loan" })),
  ms("Select every TRUE statement.", ["interest on a loan = nR − PV", "a higher rate means a smaller loan for the same payment", "PV of an annuity = FV of the annuity", "PV uses the exponent −n"], [0, 1, 3], "PV ≠ FV."),
  tf(S`Doubling the payment doubles the loan you can afford.`, true, "PV is proportional to R."),
  fill(S`$PV=R\cdot\frac{1-(1+i)^{\square}}{i}$. Enter the exponent.`, ["-n", "−n"], "−n."),
  n2(S`A TV costs 24 monthly payments of 60 dollars at $12\%$ compounded monthly. Find the cash equivalent.`, PVa(60, 0.01, 24), "PV."),
  n2(S`A scholarship pays 1000 dollars at the end of each half-year for $3$ years at $3\%$ compounded semi-annually. Fund needed?`, PVa(1000, 0.015, 6), "PV."),
  n2(S`What can be borrowed with 450 dollars a quarter for $4$ years at $8\%$ compounded quarterly?`, PVa(450, 0.02, 16), "PV."),
  n2(S`Find the PV of 50 dollars a week for $1$ year at $5.2\%$ compounded weekly (52 per year).`, PVa(50, 0.001, 52), "i = 0.001."),
  n2(S`What loan can 210 dollars a month for $3$ years at $7.2\%$ compounded monthly repay?`, PVa(210, 0.006, 36), "PV."),
  n2(S`A fund pays 3000 dollars at the end of each quarter for $2$ years at $4\%$ compounded quarterly. Fund needed?`, PVa(3000, 0.01, 8), "PV."),
];
