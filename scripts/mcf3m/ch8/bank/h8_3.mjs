// 8.3 Present Value — 20 hard questions
import { S, mc, ms, num, tf, n2, PVl, timelineSvg, fDoc, P } from "./fk.mjs";
const pv = (a, r, m, t) => PVl(a, r / m, m * t);

export const TOPIC = "8.3 Present Value";
export const Q = [
  n2(S`Find the single deposit now that covers 3000 dollars in $1$, $2$ and $3$ years at $5\%$ compounded annually.`, PVl(3000, 0.05, 1) + PVl(3000, 0.05, 2) + PVl(3000, 0.05, 3), "Add three PVs.", timelineSvg({ n: 3, unit: "years", flows: [{ at: 0, label: "PV", up: false }, { at: 1, label: "3000" }, { at: 2, label: "3000" }, { at: 3, label: "3000" }] })),
  n2(S`Option A: 10000 dollars now. Option B: 6000 dollars in $2$ years and 6000 dollars in $4$ years. At $6\%$ compounded quarterly, enter the PV of option B.`, pv(6000, 0.06, 4, 2) + pv(6000, 0.06, 4, 4), "Add PVs."),
  mc("Using the previous result, which option is better?", pv(6000, 0.06, 4, 2) + pv(6000, 0.06, 4, 4) > 10000 ? "B" : "A", [pv(6000, 0.06, 4, 2) + pv(6000, 0.06, 4, 4) > 10000 ? "A" : "B", "equal", "cannot tell"], "Compare to 10 000."),
  n2(S`A debt of 5000 dollars due in $3$ years is paid off now instead, at $7.2\%$ compounded monthly. How much is saved?`, 5000 - pv(5000, 0.072, 12, 3), "5000 − PV.", timelineSvg({ n: 36, unit: "months", flows: [{ at: 0, label: "PV = ?", up: false }, { at: 36, label: "5000 due" }] })),
  n2(S`What deposit now at $3\%$ compounded annually grows to the same amount as 5000 dollars deposited in $2$ years and left until year $6$?`, PVl(5000, 0.03, 2), "Move 5000 from year 2 to year 0."),
  n2(S`A payment of 2500 dollars due in $5$ years is to be replaced by an equivalent payment in $2$ years at $4\%$ compounded semi-annually. Find it.`, pv(2500, 0.04, 2, 3), "Move back 3 years."),
  n2(S`A payment of 2500 dollars due in $2$ years is replaced by one in $5$ years at the same rate ($4\%$ semi-annually). Find it.`, 2500 * 1.02 ** 6, "Move forward 3 years."),
  mc("The graph shows PV of 5000 dollars due in t years at 5% compounded annually. About when is PV half of 5000?", "about 14 years", ["about 5 years", "about 28 years", "never"], "1.05ⁿ ≈ 2.", fDoc([{ f: (t) => 5000 * 1.05 ** -t, color: "violet" }], { view: { xmin: 0, xmax: 30, ymin: 0, ymax: 5200 }, step: { x: 2, y: 500 }, lines: [{ m: 0, b: 2500, color: "green", dash: true }], ylabel: "PV" })),
  num(S`For that graph, the first whole year with PV below 2500 dollars.`, (() => { let n = 0; while (5000 * 1.05 ** -n >= 2500) n++; return n; })(), "1.05ⁿ > 2."),
  ms("Select every TRUE statement.", ["PV of 1000 due in 0 years is 1000", "PV halves when the time doubles", "PV is the reciprocal growth of FV", "at 0% interest PV equals A"], [0, 2, 3], "Halving is not tied to doubling time."),
  tf(S`At $6\%$ compounded monthly, 1000 dollars in $1$ year is worth more today than 1000 dollars in $1$ year at $6\%$ compounded annually.`, false, "Monthly discounts more."),
  n2(S`Find the PV of 1000 dollars due in $1$ year at $6\%$ compounded monthly.`, pv(1000, 0.06, 12, 1), "1000(1.005)⁻¹²."),
  n2(S`A lottery pays 50000 dollars now plus 50000 dollars in $10$ years. At $5\%$ compounded annually, find its total present value.`, 50000 + PVl(50000, 0.05, 10), "50 000 + PV."),
  n2(S`A bond pays 10000 dollars in $8$ years. If it sells for 7500 dollars today, what annual rate (compounded annually, percent) does the buyer earn?`, ((10000 / 7500) ** (1 / 8) - 1) * 100, "(10000/7500)^(1/8) − 1."),
  n2(S`Find the PV of 12000 dollars due in $4.5$ years at $5.6\%$ compounded quarterly.`, pv(12000, 0.056, 4, 4.5), "n = 18."),
  mc("Which payment has the largest present value at 5% compounded annually?", "1100 dollars in 1 year", ["1200 dollars in 3 years", "1300 dollars in 5 years", "1400 dollars in 7 years"], "Compute each PV.", fDoc([], { view: { xmin: 0, xmax: 8, ymin: 980, ymax: 1060 }, step: { x: 1, y: 10 }, xlabel: "year", ylabel: "PV", points: [P(1, Math.round(PVl(1100, 0.05, 1)), "1100"), P(3, Math.round(PVl(1200, 0.05, 3)), "1200"), P(5, Math.round(PVl(1300, 0.05, 5)), "1300"), P(7, Math.round(PVl(1400, 0.05, 7)), "1400")] })),
  n2(S`Find the PV of 1300 dollars due in $5$ years at $5\%$ compounded annually.`, PVl(1300, 0.05, 5), "Calculator."),
  n2(S`What amount due in $6$ years at $4.2\%$ compounded monthly has a present value of 9000 dollars?`, 9000 * 1.0035 ** 72, "Grow forward."),
  num(S`How many whole years must pass for the PV of a payment at $8\%$ compounded annually to fall below $25\%$ of the payment?`, (() => { let n = 0; while (1.08 ** -n >= 0.25) n++; return n; })(), "1.08ⁿ > 4."),
  n2(S`A store offers 0 dollars down and 2400 dollars due in $1$ year, or a 2200 dollar cash price. At $9\%$ compounded monthly, enter the PV of the 2400.`, pv(2400, 0.09, 12, 1), "2400(1.0075)⁻¹²."),
];
