// 8.4 Finding the Interest Rate and the Time — 20 hard questions
import { S, mc, ms, num, tf, n2, firstN, timelineSvg, fDoc, P } from "./fk.mjs";
const rate = (ratio, n, m) => (ratio ** (1 / n) - 1) * m * 100;

export const TOPIC = "8.4 Finding the Interest Rate and the Time";
export const Q = [
  n2(S`8000 dollars grew to 11500 dollars in $6$ years compounded semi-annually. Find the annual rate (percent).`, rate(11500 / 8000, 12, 2), "n = 12.", timelineSvg({ n: 12, unit: "half-years", flows: [{ at: 0, label: "8000", up: false }, { at: 12, label: "11 500" }] })),
  n2(S`For that investment, find the effective annual rate (percent).`, ((11500 / 8000) ** (1 / 6) - 1) * 100, "(A/P)^(1/6) − 1."),
  num(S`How many whole months until 4500 dollars reaches 6000 dollars at $5.4\%$ compounded monthly?`, firstN((n) => 4500 * 1.0045 ** n >= 6000), "Trial."),
  num(S`How many whole years to quadruple money at $6\%$ compounded annually?`, firstN((n) => 1.06 ** n >= 4), "1.06ⁿ ≥ 4."),
  n2(S`What monthly-compounded annual rate turns 2500 dollars into 4000 dollars in $8$ years (percent)?`, rate(1.6, 96, 12), "n = 96."),
  mc("Which rate doubles money fastest?", "7.9% compounded semi-annually", ["7.5% compounded monthly", "7.8% compounded quarterly", "8% compounded annually"], "Effective rates: 7.76%, 8.03%, 8.06%, 8.00%.", fDoc([], { view: { xmin: 0, xmax: 5, ymin: 7.7, ymax: 8.1 }, step: { x: 1, y: 0.05 }, xlabel: "offer", ylabel: "effective %", points: [P(1, 8, "8% annual"), P(2, +(((1 + 0.075 / 12) ** 12 - 1) * 100).toFixed(2), "7.5% monthly"), P(3, +(((1 + 0.078 / 4) ** 4 - 1) * 100).toFixed(2), "7.8% quarterly"), P(4, +(((1 + 0.079 / 2) ** 2 - 1) * 100).toFixed(2), "7.9% semi")] })),
  n2(S`Find the effective annual rate (percent) of $7.8\%$ compounded quarterly.`, ((1 + 0.078 / 4) ** 4 - 1) * 100, "(1.0195)⁴ − 1."),
  num(S`Rule of 72: how many doublings in $36$ years at $6\%$, and so what growth factor? Enter the factor.`, 8, "72/6 = 12 years per doubling: 3 doublings."),
  num(S`For 1000 dollars at $6\%$ compounded annually, enter the exact value after $36$ years to the nearest dollar.`, Math.round(1000 * 1.06 ** 36), "Compare with 8000."),
  ms("Select every TRUE statement.", ["a higher rate shortens the doubling time", "the rule of 72 works for any rate exactly", "n must be a whole number of periods", "r = m·i"], [0, 2, 3], "Only an estimate."),
  tf(S`If money doubles in $T$ years, it quadruples in $2T$ years at the same compound rate.`, true, "2 × 2."),
  num("The graph shows 3000 dollars at 4.8% compounded monthly and the target 4500 dollars. Enter the first whole month the target is reached.", firstN((n) => 3000 * 1.004 ** n >= 4500), "Trial.", fDoc([{ f: (t) => 3000 * 1.004 ** t, color: "violet" }], { view: { xmin: 0, xmax: 120, ymin: 2800, ymax: 5000 }, step: { x: 12, y: 200 }, lines: [{ m: 0, b: 4500, color: "green", dash: true }], xlabel: "month" })),
  n2(S`Convert that number of months to years (two decimals).`, firstN((n) => 3000 * 1.004 ** n >= 4500) / 12, "÷ 12."),
  n2(S`A debt grew from 1200 dollars to 1500 dollars in $18$ months with monthly compounding. Find the annual rate (percent).`, rate(1.25, 18, 12), "n = 18."),
  num(S`At what whole percent rate compounded annually does money first double within $5$ years?`, firstN((r) => r > 0 && (1 + r / 100) ** 5 >= 2), "Try rates."),
  n2(S`Two deposits: 2000 dollars at $4\%$ annually and 1800 dollars at $6\%$ annually. Enter the first whole year the second is larger.`, firstN((n) => 1800 * 1.06 ** n > 2000 * 1.04 ** n), "Compare.", fDoc([{ f: (t) => 2000 * 1.04 ** t, color: "green" }, { f: (t) => 1800 * 1.06 ** t, color: "violet" }], { view: { xmin: 0, xmax: 10, ymin: 1700, ymax: 3300 }, step: { x: 1, y: 200 } })),
  n2(S`What rate per quarter (percent) makes money grow $10\%$ in one year?`, (1.1 ** 0.25 - 1) * 100, "1.1^(1/4) − 1."),
  num(S`How many whole years does it take for 500 dollars at $3\%$ compounded annually to earn at least 200 dollars of interest?`, firstN((n) => 500 * 1.03 ** n - 500 >= 200), "1.03ⁿ ≥ 1.4."),
  n2(S`An account earns $2.4\%$ compounded monthly. What growth ratio after $5$ years?`, 1.002 ** 60, "1.002⁶⁰."),
  num(S`How many whole half-years for 10000 dollars to reach 12000 dollars at $3.2\%$ compounded semi-annually?`, firstN((n) => 1.016 ** n >= 1.2), "1.016ⁿ ≥ 1.2."),
];
