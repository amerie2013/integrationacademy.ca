// 8.2 Compound Interest: Future Value — 20 hard questions
import { S, mc, ms, num, tf, n2, A, timelineSvg, fDoc, P } from "./fk.mjs";
const fv = (p, r, m, t) => A(p, r / m, m * t);

export const TOPIC = "8.2 Compound Interest: Future Value";
export const Q = [
  n2(S`5000 dollars is invested at $4\%$ compounded quarterly for $3$ years, then the total at $6\%$ compounded monthly for $2$ more years. Find the final value.`, fv(fv(5000, 0.04, 4, 3), 0.06, 12, 2), "Two stages.", timelineSvg({ n: 5, unit: "years", flows: [{ at: 0, label: "5000", up: false }, { at: 3, label: "4% quarterly ends" }, { at: 5, label: "A = ?" }] })),
  n2(S`Which effective rate is higher, $6\%$ compounded monthly or $6.1\%$ compounded annually? Enter the monthly one (percent).`, (1.005 ** 12 - 1) * 100, "6.17% > 6.1%."),
  n2(S`2000 dollars is deposited now and 3000 dollars in $2$ years, both at $5\%$ compounded semi-annually. Find the total value at $5$ years.`, fv(2000, 0.05, 2, 5) + fv(3000, 0.05, 2, 3), "Grow each separately."),
  n2(S`Find the interest earned in the third year only on 10000 dollars at $6\%$ compounded monthly.`, fv(10000, 0.06, 12, 3) - fv(10000, 0.06, 12, 2), "A(3) − A(2)."),
  n2(S`What principal grows to exactly 8000 dollars in $5$ years at $4.8\%$ compounded monthly?`, 8000 / 1.004 ** 60, "Work backwards."),
  mc("Which offer is best for 10 000 dollars over 10 years?", "5.9% compounded monthly", ["6% compounded annually", "5.95% compounded semi-annually", "6.05% simple interest"], "Compare amounts.", fDoc([], { view: { xmin: 0, xmax: 5, ymin: 17500, ymax: 18300 }, step: { x: 1, y: 100 }, xlabel: "offer", points: [P(1, Math.round(fv(10000, 0.059, 12, 10)), "5.9% monthly"), P(2, Math.round(fv(10000, 0.06, 1, 10)), "6% annual"), P(3, Math.round(fv(10000, 0.0595, 2, 10)), "5.95% semi"), P(4, 16050, "simple")] })),
  n2(S`For 10000 dollars at $5.9\%$ compounded monthly for $10$ years, find the future value.`, fv(10000, 0.059, 12, 10), "Calculator.", fDoc([{ f: (t) => fv(10000, 0.059, 12, t), color: "violet" }], { view: { xmin: 0, xmax: 11, ymin: 9000, ymax: 19000 }, step: { x: 1, y: 1000 }, points: [P(10, Math.round(fv(10000, 0.059, 12, 10)), "t = 10")] })),
  ms("Select every TRUE statement.", ["more frequent compounding increases the effective rate", "the effective rate of 4% compounded annually is 4%", "daily compounding doubles the interest of annual compounding", "i = r/m"], [0, 1, 3], "Daily is only slightly more."),
  tf(S`If two accounts have the same effective annual rate, they grow equally over whole years.`, true, "Same yearly factor."),
  num(S`How many whole quarters until 3000 dollars first exceeds 3600 dollars at $4.8\%$ compounded quarterly?`, (() => { let n = 0; while (3000 * 1.012 ** n <= 3600) n++; return n; })(), "1.012ⁿ > 1.2."),
  n2(S`Find the future value of 1500 dollars at $3.65\%$ compounded daily for $1$ year (365 days).`, 1500 * (1 + 0.0365 / 365) ** 365, "i = 0.0001."),
  n2(S`What annual rate compounded annually equals $8\%$ compounded semi-annually (percent)?`, (1.04 ** 2 - 1) * 100, "1.04² − 1."),
  n2(S`An account doubles 5000 dollars with monthly compounding at $6\%$. Enter the value after $11$ years 7 months ($139$ months).`, 5000 * 1.005 ** 139, "n = 139."),
  n2(S`Compare 12000 dollars at $4\%$ for $15$ years: monthly amount minus annual amount.`, fv(12000, 0.04, 12, 15) - fv(12000, 0.04, 1, 15), "Difference."),
  mc("The timeline shows deposits of 1000 at times 0 and 2 (years), 6% compounded annually. What is the value at year 4?", "1000(1.06)⁴ + 1000(1.06)²", ["2000(1.06)⁴", "2000(1.06)²", "1000(1.06)⁶"], "Each grows for its own time.", timelineSvg({ n: 4, unit: "years", flows: [{ at: 0, label: "1000", up: false }, { at: 2, label: "1000", up: false }, { at: 4, label: "?" }] })),
  n2("Evaluate that value.", 1000 * 1.06 ** 4 + 1000 * 1.06 ** 2, "1262.48 + 1123.60."),
  n2(S`A loan of 4000 dollars accumulates interest at $9\%$ compounded monthly with no payments for $2$ years. How much is owed?`, fv(4000, 0.09, 12, 2), "i = 0.0075, n = 24."),
  num(S`At $12\%$ compounded monthly, by what whole number of months is the balance first at least $1.5$ times the deposit?`, (() => { let n = 0; while (1.01 ** n < 1.5) n++; return n; })(), "1.01ⁿ ≥ 1.5."),
  n2(S`Find the future value of 25000 dollars at $2.4\%$ compounded monthly for $30$ months.`, fv(25000, 0.024, 12, 2.5), "n = 30."),
  n2(S`What deposit now at $5\%$ compounded quarterly grows by exactly 1000 dollars of interest in $4$ years?`, 1000 / (1.0125 ** 16 - 1), "P(1.0125¹⁶ − 1) = 1000."),
];
