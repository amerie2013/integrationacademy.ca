// 8.3 Present Value — 20 easy + 20 medium
import { S, mc, ms, num, tf, fill, n2, PVl, FREQ, timelineSvg, fDoc, P } from "./fk.mjs";
const pv = (a, r, m, t) => PVl(a, r / m, m * t);
const tl = timelineSvg({ n: 5, unit: "years", flows: [{ at: 0, label: "PV = ?", up: false }, { at: 5, label: "4000" }] });

const easy = [[1100, 0.1, 1, 1], [5000, 0.05, 1, 2], [3000, 0.04, 2, 2], [2000, 0.06, 4, 1], [8000, 0.03, 1, 5], [1200, 0.12, 12, 1], [6000, 0.05, 2, 3]];
const med = [[25000, 0.045, 12, 6], [9500, 0.034, 4, 8], [40000, 0.052, 2, 10], [3800, 0.072, 12, 3], [15000, 0.028, 1, 12]];

export const E = [
  ...easy.map(([a, r, m, t]) => n2(S`Find the present value of ${a} dollars due in ${t} year${t > 1 ? "s" : ""} at $${+(r * 100).toFixed(2)}\%$ compounded ${FREQ[m]}.`, pv(a, r, m, t), "A(1 + i)⁻ⁿ.")),
  mc("The present value formula is …", "PV = A(1 + i)⁻ⁿ", ["PV = A(1 + i)ⁿ", "PV = A − Prt", "PV = A/i"], "Negative exponent."),
  mc("For a positive rate, the present value is …", "less than the future amount", ["more than it", "equal to it", "zero"], "Discounting."),
  tf("A longer time until payment gives a smaller present value.", true, "More discounting."),
  tf("A higher interest rate gives a larger present value.", false, "Smaller."),
  fill("Moving money back in time by dividing by (1 + i)ⁿ is called ____.", ["discounting"], "Discounting."),
  mc("The timeline shows a goal of 4000 dollars in 5 years at 4% compounded annually. Which expression gives PV?", "4000(1.04)⁻⁵", ["4000(1.04)⁵", "4000(0.04)⁵", "4000 − 5(0.04)"], "Discount 5 years.", tl),
  n2("Evaluate the PV for the timeline shown.", PVl(4000, 0.04, 5), "Calculator.", tl),
  num(S`Find $n$ for a present value due in $3$ years with monthly compounding.`, 36, "12 × 3."),
  n2(S`Which is worth more today at $10\%$ compounded annually: 900 dollars now or 1000 dollars in $1$ year? Enter the PV of the 1000.`, PVl(1000, 0.1, 1), "909.09 > 900."),
  num(S`If $PV=A(1.05)^{-2}$ and $A=11025$, find $PV$.`, 10000, "11025/1.1025."),
  num(S`Find the interest earned if 4500 dollars grows to 5000 dollars.`, 500, "A − PV."),
  num(S`How many half-years are there in $7$ years?`, 14, "2 × 7."),
  num(S`Evaluate $1000(1.1)^{-2}$ to the nearest cent.`, 826.45, "1000/1.21.", null, 0.011),
];

export const M = [
  ...med.map(([a, r, m, t]) => n2(S`Find the present value of ${a} dollars due in ${t} years at $${+(r * 100).toFixed(2)}\%$ compounded ${FREQ[m]}.`, pv(a, r, m, t), "A(1 + i)⁻ⁿ.")),
  n2(S`How much interest is earned if the present value of 25000 dollars due in $6$ years at $4.5\%$ compounded monthly is invested?`, 25000 - pv(25000, 0.045, 12, 6), "A − PV."),
  n2(S`Find the single amount now that covers 2000 dollars in $1$ year and 2000 dollars in $2$ years at $6\%$ compounded annually.`, PVl(2000, 0.06, 1) + PVl(2000, 0.06, 2), "Add PVs."),
  n2(S`Option A: 5000 dollars now. Option B: 5800 dollars in $3$ years. At $4\%$ compounded quarterly, enter the PV of B.`, pv(5800, 0.04, 4, 3), "5800(1.01)⁻¹²."),
  mc("For the previous question, which option is better?", pv(5800, 0.04, 4, 3) > 5000 ? "B" : "A", [pv(5800, 0.04, 4, 3) > 5000 ? "A" : "B", "they are equal", "cannot tell"], "Compare PVs."),
  mc("The graph shows PV of 10 000 dollars vs time at two rates. Which curve is the higher rate?", "the lower (violet) curve", ["the upper (green) curve", "both are the same", "neither"], "Higher rate, smaller PV.", fDoc([{ f: (t) => 10000 * 1.03 ** -t, color: "green" }, { f: (t) => 10000 * 1.07 ** -t, color: "violet" }], { view: { xmin: 0, xmax: 20, ymin: 0, ymax: 10500 }, step: { x: 2, y: 1000 }, ylabel: "PV" })),
  n2("For those curves (3% and 7% compounded annually), enter the difference in PV at t = 10.", PVl(10000, 0.03, 10) - PVl(10000, 0.07, 10), "7440.94 − 5083.49.", fDoc([{ f: (t) => 10000 * 1.03 ** -t, color: "green" }, { f: (t) => 10000 * 1.07 ** -t, color: "violet" }], { view: { xmin: 0, xmax: 20, ymin: 0, ymax: 10500 }, step: { x: 2, y: 1000 }, points: [P(10, 7440.94, "3%"), P(10, 5083.49, "7%", "violet")], ylabel: "PV" })),
  ms("Select every expression equal to the PV of 1000 dollars due in 2 years at 5% compounded annually.", ["1000(1.05)⁻²", "1000 ÷ 1.1025", "1000(0.95)²", "1000/1.05²"], [0, 1, 3], "0.95² is not the same."),
  tf(S`The present value of a debt due later is what you would pay to settle it now.`, true, "Equivalent value today."),
  fill(S`$PV=\frac{A}{(1+i)^{\square}}$. The missing letter is ____.`, ["n"], "Periods."),
  n2(S`A debt of 7500 dollars is due in $30$ months at $6\%$ compounded monthly. What settles it today?`, pv(7500, 0.06, 12, 2.5), "n = 30."),
  n2(S`Find the PV of 100000 dollars due in $25$ years at $5\%$ compounded annually.`, PVl(100000, 0.05, 25), "Calculator."),
  n2(S`Find the PV of 3000 dollars due in $9$ months at $8\%$ compounded monthly.`, pv(3000, 0.08, 12, 0.75), "n = 9."),
  n2(S`A parent wants 20000 dollars for a child in $15$ years at $4\%$ compounded semi-annually. Deposit now?`, pv(20000, 0.04, 2, 15), "n = 30."),
  num(S`If the PV of an amount is 5000 dollars and the interest earned is 1200 dollars, what is the amount?`, 6200, "PV + I."),
  n2(S`Find the present value of 4400 dollars due in $2$ years at $5.2\%$ compounded quarterly.`, pv(4400, 0.052, 4, 2), "n = 8."),
];
