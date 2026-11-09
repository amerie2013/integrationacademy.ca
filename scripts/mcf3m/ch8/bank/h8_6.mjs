// 8.6 Annuities: Present Value — 20 hard questions
import { S, mc, ms, num, tf, n2, PVa, PVl, firstN, timelineSvg, fDoc, P, pays } from "./fk.mjs";

export const TOPIC = "8.6 Annuities: Present Value";
export const Q = [
  n2(S`A retiree needs 1800 dollars a month for $20$ years at $4.2\%$ compounded monthly. Find the fund needed.`, PVa(1800, 0.0035, 240), "PV.", fDoc([{ f: (t) => (t <= 20 ? PVa(1800, 0.0035, 240 - 12 * t) : 0), color: "violet" }], { view: { xmin: 0, xmax: 21, ymin: 0, ymax: 320000 }, step: { x: 2, y: 40000 }, xlabel: "years", ylabel: "fund" })),
  n2(S`For that fund, how much interest does it earn over the $20$ years?`, 1800 * 240 - PVa(1800, 0.0035, 240), "nR − PV."),
  n2(S`A prize offers 400000 dollars now or 30000 dollars a year for $20$ years at $4\%$ compounded annually. Enter the PV of the payments.`, PVa(30000, 0.04, 20), "PV."),
  mc("For the 400 000 dollar prize, which option is worth more today?", PVa(30000, 0.04, 20) > 400000 ? "the payments" : "the lump sum", [PVa(30000, 0.04, 20) > 400000 ? "the lump sum" : "the payments", "they are equal", "cannot tell"], "Compare."),
  n2(S`Payments of 500 dollars a month for $3$ years start in $1$ year (first payment at month 13). At $6\%$ compounded monthly, find their value today.`, PVa(500, 0.005, 36) * 1.005 ** -12, "PV at month 12, then discount 12 months.", timelineSvg({ n: 48, unit: "months", flows: [{ at: 0, label: "?", up: false }] })),
  n2(S`A car costs 26000 dollars. You pay 4000 dollars down and finance the rest over $5$ years at $6.6\%$ compounded monthly. Enter the monthly payment.`, 22000 * 0.0055 / (1 - 1.0055 ** -60), "R on 22 000."),
  n2(S`What payment per quarter repays 15000 dollars over $4$ years at $6\%$ compounded quarterly?`, 15000 * 0.015 / (1 - 1.015 ** -16), "Rearranged PV."),
  num(S`What is the most a person could borrow forever if they pay 300 dollars a month at $6\%$ compounded monthly? (the limit $R/i$)`, 60000, "300/0.005."),
  ms("Select every TRUE statement about the present value of an annuity.", ["PV of an annuity approaches R/i for very long terms", "the PV of the first payment is the largest", "a 0% rate makes PV = nR", "PV of an annuity can exceed nR at a positive rate"], [0, 1, 2], "Never exceeds nR."),
  tf(S`At the same rate, the PV of 100 dollars a month for $10$ years is more than twice the PV for $5$ years.`, false, "Later payments are worth less."),
  n2(S`Compare: PV of 100 dollars a month for $10$ years minus twice the PV for $5$ years at $6\%$ compounded monthly.`, PVa(100, 0.005, 120) - 2 * PVa(100, 0.005, 60), "Negative."),
  mc("The timeline shows two options. A: 5000 now. B: 1100 at the end of each year for 5 years at 4%. Which is better?", PVa(1100, 0.04, 5) > 5000 ? "B" : "A", [PVa(1100, 0.04, 5) > 5000 ? "A" : "B", "equal", "cannot tell"], "PV of B.", timelineSvg({ n: 5, unit: "years", flows: [{ at: 0, label: "A: 5000", up: false }, ...pays(5, "1100", true)] })),
  n2("For the 5000-now versus 1100-a-year choice, enter the PV of the 1100 payments.", PVa(1100, 0.04, 5), "PV."),
  num(S`How many monthly withdrawals of 1000 dollars can a 50000 dollar fund at $4.8\%$ compounded monthly support (whole withdrawals)?`, firstN((n) => PVa(1000, 0.004, n + 1) > 50000), "Largest n with PV ≤ 50 000."),
  n2(S`A loan of 18000 dollars at $5.4\%$ compounded monthly over $4$ years: find the payment.`, 18000 * 0.0045 / (1 - 1.0045 ** -48), "R."),
  n2(S`After paying for $2$ years on that loan, what is the balance? (PV of the remaining 24 payments)`, PVa(18000 * 0.0045 / (1 - 1.0045 ** -48), 0.0045, 24), "PV of remaining payments.", fDoc([{ f: (t) => PVa(18000 * 0.0045 / (1 - 1.0045 ** -48), 0.0045, 48 - t), color: "violet" }], { view: { xmin: 0, xmax: 48, ymin: 0, ymax: 19000 }, step: { x: 6, y: 2000 }, points: [P(24, Math.round(PVa(18000 * 0.0045 / (1 - 1.0045 ** -48), 0.0045, 24)), "month 24")], xlabel: "month", ylabel: "balance" })),
  n2(S`A fund of 100000 dollars at $5\%$ compounded annually pays equal amounts at the end of each year for $15$ years. Find each payment.`, 100000 * 0.05 / (1 - 1.05 ** -15), "R = PV·i/[1 − (1 + i)⁻ⁿ]."),
  n2(S`Option: 200 dollars a month for $5$ years, or one payment of 13000 dollars in $5$ years, at $3.6\%$ compounded monthly. Enter (PV of the monthly payments) − (PV of the single payment).`, PVa(200, 0.003, 60) - PVl(13000, 0.003, 60), "Compare in today's dollars."),
  n2(S`Find the PV of 2500 dollars a half-year for $8$ years at $7\%$ compounded semi-annually.`, PVa(2500, 0.035, 16), "PV."),
  num(S`Which whole rate (percent, compounded annually) makes the PV of 1000 dollars a year for $10$ years first fall below 7000 dollars?`, firstN((r) => r > 0 && PVa(1000, r / 100, 10) < 7000), "Try rates."),
];
