// 8.2 Compound Interest: Future Value — 20 easy + 20 medium
import { S, mc, ms, num, tf, fill, n2, A, FREQ, timelineSvg, fDoc, P } from "./fk.mjs";
const fv = (p, r, m, t) => A(p, r / m, m * t);
const tl = timelineSvg({ n: 12, unit: "quarters", flows: [{ at: 0, label: "2500", up: false }, { at: 12, label: "A = ?" }] });

const easyFV = [[1000, 0.06, 2, 3], [2000, 0.04, 4, 2], [1500, 0.03, 12, 2], [3000, 0.08, 4, 1], [800, 0.05, 2, 4], [4000, 0.024, 12, 3]];
const medFV = [[6500, 0.042, 12, 7], [9000, 0.0375, 4, 6], [1250, 0.055, 2, 11], [20000, 0.031, 12, 4], [7300, 0.068, 4, 9]];

export const E = [
  ...easyFV.map(([p, r, m, t]) => n2(S`Find the future value of ${p} dollars at $${+(r * 100).toFixed(2)}\%$ compounded ${FREQ[m]} for ${t} years.`, fv(p, r, m, t), `i = r/${m}, n = ${m}t.`)),
  num(S`Find $i$ for $8\%$ compounded quarterly.`, 0.02, "0.08/4.", null, 0.00001),
  num(S`Find $i$ for $6\%$ compounded semi-annually.`, 0.03, "0.06/2.", null, 0.00001),
  num(S`Find $n$ for monthly compounding over $4$ years.`, 48, "12 × 4."),
  num(S`Find $n$ for quarterly compounding over $9$ years.`, 36, "4 × 9."),
  num(S`How many compounding periods per year does "semi-annually" mean?`, 2, "Twice a year."),
  mc("At the same annual rate, which compounding gives the most interest?", "monthly", ["annually", "semi-annually", "quarterly"], "Most frequent."),
  mc("The rate per compounding period is …", "r divided by m", ["r times m", "r plus m", "r"], "i = r/m."),
  tf("Interest earned equals A − P.", true, "Definition."),
  tf("6% compounded monthly means 6% is added each month.", false, "0.5% each month."),
  fill("The amount an investment grows to is called its future ____.", ["value"], "Future value."),
  mc("The timeline shows 2500 dollars at 4% compounded quarterly. What is n?", "12", ["3", "4", "16"], "12 quarters.", tl),
  n2("For the timeline shown (2500 dollars, 4% compounded quarterly, 3 years), find A.", fv(2500, 0.04, 4, 3), "2500(1.01)¹².", tl),
  num(S`Find $n$ for daily compounding over $2$ years (365 days per year).`, 730, "365 × 2."),
  num(S`Find $i$ for $9\%$ compounded monthly.`, 0.0075, "0.09/12.", null, 0.00001),
];

export const M = [
  ...medFV.map(([p, r, m, t]) => n2(S`Find the future value of ${p} dollars at $${+(r * 100).toFixed(2)}\%$ compounded ${FREQ[m]} for ${t} years.`, fv(p, r, m, t), "A = P(1 + i)ⁿ.")),
  n2(S`Find the interest earned on 4800 dollars at $3.6\%$ compounded monthly for $5$ years.`, fv(4800, 0.036, 12, 5) - 4800, "A − P."),
  n2(S`Find the interest earned on 15000 dollars at $5.5\%$ compounded semi-annually for $3$ years.`, fv(15000, 0.055, 2, 3) - 15000, "A − P."),
  n2(S`Find the effective annual rate (percent) of $7\%$ compounded quarterly.`, ((1 + 0.07 / 4) ** 4 - 1) * 100, "(1.0175)⁴ − 1."),
  n2(S`Find the effective annual rate (percent) of $5.4\%$ compounded monthly.`, ((1.0045) ** 12 - 1) * 100, "1.0045¹² − 1."),
  n2(S`How much more does 10000 dollars earn in $6$ years at $4\%$ compounded monthly than compounded annually?`, fv(10000, 0.04, 12, 6) - fv(10000, 0.04, 1, 6), "Difference."),
  n2(S`Find the future value of 2000 dollars at $4\%$ compounded semi-annually for $18$ months.`, fv(2000, 0.04, 2, 1.5), "n = 3."),
  mc("The graph compares 5000 dollars at 6% compounded annually (green) and monthly (violet). Which is true?", "monthly ends a little higher", ["annual ends higher", "they are identical", "monthly is much lower"], "More frequent compounding.", fDoc([{ f: (t) => 5000 * 1.06 ** t, color: "green" }, { f: (t) => 5000 * 1.005 ** (12 * t), color: "violet" }], { view: { xmin: 0, xmax: 20, ymin: 4500, ymax: 17500 }, step: { x: 2, y: 1500 } })),
  n2("Using those models, enter the monthly amount minus the annual amount at t = 20.", 5000 * 1.005 ** 240 - 5000 * 1.06 ** 20, "Difference.", fDoc([{ f: (t) => 5000 * 1.005 ** (12 * t) - 5000 * 1.06 ** t, color: "violet" }], { view: { xmin: 0, xmax: 20, ymin: 0, ymax: 500 }, step: { x: 2, y: 50 }, xlabel: "t", ylabel: "difference" })),
  ms("Select every pair (i, n) that is correct for 9 years.", ["7.2% monthly: i = 0.006, n = 108", "5% quarterly: i = 0.0125, n = 36", "4% semi-annually: i = 0.04, n = 18", "3% annually: i = 0.03, n = 9"], [0, 1, 3], "Semi-annual i = 0.02."),
  tf(S`Doubling the number of compounding periods per year doubles the interest earned.`, false, "Only a small increase."),
  fill(S`The effective annual rate is $(1+i)^{\square}-1$. The missing letter is ____.`, ["m"], "Periods per year."),
  n2(S`A GIC: 8000 dollars at $2.8\%$ compounded semi-annually for $4$ years. Find its value.`, fv(8000, 0.028, 2, 4), "i = 0.014, n = 8."),
  n2(S`Find the future value of 650 dollars at $9\%$ compounded monthly for $10$ years.`, fv(650, 0.09, 12, 10), "i = 0.0075, n = 120."),
  n2(S`Find the future value of 3300 dollars at $4.6\%$ compounded quarterly for $5$ years.`, fv(3300, 0.046, 4, 5), "i = 0.0115, n = 20."),
  n2(S`Find the interest earned on 900 dollars at $7.8\%$ compounded monthly for $2$ years.`, fv(900, 0.078, 12, 2) - 900, "A − P."),
];
