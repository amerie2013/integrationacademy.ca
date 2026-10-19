// 8.2 Compound Interest: Future Value — 20 easy + 20 medium questions
import { mc, ms, num, tf } from "./kit.mjs";
import { barsD, growthD, fv, c2 } from "./fig.mjs";

const S = String.raw;
const $ = (p, v, fb, fig = null) => num(p, c2(v), fb, fig, 0.02);

export const E = [
  $("Find the amount of 1000 dollars at 5%/a compounded annually for 2 years (dollars).", fv(1000, 0.05, 2), "1000(1.05)²."),
  $("Find the amount of 2000 dollars at 3%/a compounded annually for 3 years (dollars).", fv(2000, 0.03, 3), "2000(1.03)³."),
  $("Find the amount of 500 dollars at 8%/a compounded annually for 5 years (dollars).", fv(500, 0.08, 5), "500(1.08)⁵."),
  num("What is i for 6%/a compounded monthly? Enter a decimal.", 0.005, "0.06 ÷ 12.", null, 0.00001),
  num("What is i for 8%/a compounded quarterly? Enter a decimal.", 0.02, "0.08 ÷ 4."),
  num("How many compounding periods are in 5 years compounded monthly?", 60, "5 × 12."),
  num("How many compounding periods are in 7 years compounded semi-annually?", 14, "7 × 2."),
  $("Find the amount of 1500 dollars at 4%/a compounded semi-annually for 2 years (dollars).", fv(1500, 0.02, 4), "i = 0.02, n = 4."),
  $("Find the interest earned on 800 dollars at 6%/a compounded annually for 3 years (dollars).", fv(800, 0.06, 3) - 800, "A − P."),
  $("Find the amount of 4000 dollars at 12%/a compounded monthly for 1 year (dollars).", fv(4000, 0.01, 12), "i = 0.01, n = 12."),
  mc("Which formula gives the future value with compound interest?", S`\(A=P(1+i)^n\)`, [S`\(A=P(1+rt)\)`, S`\(A=Pi^n\)`, S`\(A=P+in\)`], "Interest is added each period."),
  mc("What does compound interest mean?", "interest is added to the principal and then earns interest", ["interest is paid only on the original principal", "interest is paid only once", "the rate changes every year"], "Interest on interest."),
  tf("With annual compounding, the year-end amounts form a geometric sequence.", true, "Ratio 1 + i."),
  tf("For the same annual rate, monthly compounding gives less than annual compounding.", false, "It gives slightly more."),
  num("What is the common ratio of the year-end amounts of an investment at 7%/a compounded annually?", 1.07, "1 + i.", null, 0.0001),
  $("Find the amount of 10 000 dollars at 2%/a compounded annually for 10 years (dollars).", fv(10000, 0.02, 10), "10 000(1.02)¹⁰."),
  $("Find the amount of 600 dollars at 10%/a compounded annually for 2 years (dollars).", 726, "600 × 1.21."),
  mc("Which grows faster over a long time?", "compound interest", ["simple interest", "they grow equally", "it depends only on the principal"], "Exponential beats linear."),
  $("Read the graph: what is the amount after 10 years (dollars)?", fv(2000, 0.07, 10), "2000(1.07)¹⁰.", growthD([{ f: (t) => 2000 * 1.07 ** t }], 12, { pts: [[10, fv(2000, 0.07, 10), `(10, ${c2(fv(2000, 0.07, 10))})`]] })),
  num("The bars show year-end amounts at compound interest. What is the common ratio?", 1.1, "Each bar is 1.1 times the last.", barsD([1100, 1210, 1331, 1464.1], { xlabel: "year", ylabel: "amount", labels: ["1100", "1210", "1331", "1464.10"] }), 0.0001),
];

export const M = [
  $("Find the amount of 3500 dollars at 4.8%/a compounded monthly for 6 years (dollars).", fv(3500, 0.004, 72), "i = 0.004, n = 72."),
  $("Find the amount of 12 000 dollars at 5.5%/a compounded quarterly for 4 years (dollars).", fv(12000, 0.01375, 16), "i = 0.01375, n = 16."),
  $("Find the interest earned on 7500 dollars at 3.2%/a compounded semi-annually for 9 years (dollars).", fv(7500, 0.016, 18) - 7500, "A − P."),
  $("Find the amount of 250 dollars at 9%/a compounded monthly for 15 years (dollars).", fv(250, 0.0075, 180), "i = 0.0075, n = 180."),
  num("2000 dollars grows to 2524.95 dollars in 4 years with annual compounding. Find the rate (%/a, 1 decimal).", 6, "(2524.95/2000)^(1/4) ≈ 1.06.", null, 0.05),
  $("What principal grows to 8000 dollars in 6 years at 5%/a compounded annually (dollars)?", 8000 / 1.05 ** 6, "8000 ÷ 1.05⁶."),
  num("Which gives more after 10 years on 1000 dollars: 6%/a compounded annually (enter 1) or 5.85%/a compounded monthly (enter 2)?", fv(1000, 0.06, 10) > fv(1000, 0.0585 / 12, 120) ? 1 : 2, `Compare ${c2(fv(1000, 0.06, 10))} and ${c2(fv(1000, 0.0585 / 12, 120))}.`),
  $("Find the difference between 5000 dollars at 6%/a compounded annually and compounded monthly after 10 years (dollars).", fv(5000, 0.005, 120) - fv(5000, 0.06, 10), "Monthly minus annual."),
  num("What is the effective annual rate of 12%/a compounded monthly (%, 2 decimals)?", c2((1.01 ** 12 - 1) * 100), "(1.01)¹² − 1.", null, 0.01),
  ms("For 1000 dollars at 5%/a compounded annually, which are true? Select all.", ["after 1 year: 1050", "after 2 years: 1102.50", "the interest in year 2 is 52.50", "the interest is the same each year", "the amounts form a geometric sequence"], [0, 1, 2, 4], "Interest grows each year."),
  mc(S`Which expression gives the amount of 900 dollars at 6%/a compounded quarterly for 5 years?`, S`\(900(1.015)^{20}\)`, [S`\(900(1.06)^{20}\)`, S`\(900(1.015)^5\)`, S`\(900(1.24)^5\)`], "i = 0.015, n = 20."),
  tf("Doubling the principal doubles the future value.", true, "A is proportional to P."),
  tf("Doubling the number of years doubles the future value.", false, "(1 + i)²ⁿ is not 2(1 + i)ⁿ."),
  $("An investment of 4000 dollars earns 4%/a compounded annually for 3 years, then 6%/a compounded annually for 2 more years. Find the final amount (dollars).", fv(fv(4000, 0.04, 3), 0.06, 2), "4000(1.04)³(1.06)²."),
  $("Find the amount of 1 cent (0.01 dollars) doubled every day for 30 days (dollars).", 0.01 * 2 ** 30, "0.01 × 2³⁰."),
  num("A town of 15 000 people grows by 2.5% a year. To the nearest person, what is the population in 8 years?", Math.round(fv(15000, 0.025, 8)), "15 000(1.025)⁸.", null, 1),
  $("Find the interest earned in the 5th year alone on 2000 dollars at 6%/a compounded annually (dollars).", fv(2000, 0.06, 5) - fv(2000, 0.06, 4), "A(5) − A(4)."),
  num("How many times larger is the amount after 20 years than after 10 years at 7%/a compounded annually (2 decimals)?", c2(1.07 ** 10), "1.07¹⁰.", null, 0.01),
  $("Read the graph of 5000 dollars at 4%/a compounded quarterly. What is the amount after 15 years (dollars)?", fv(5000, 0.01, 60), "5000(1.01)⁶⁰.", growthD([{ f: (t) => 5000 * 1.01 ** (4 * t) }], 16)),
  num("The bars show amounts after 1, 2, 3, 4 years at annual compounding. Find the rate (%/a).", 5, "Ratio 1.05.", barsD([2100, 2205, 2315.25, 2431.01], { xlabel: "year", ylabel: "amount", labels: ["2100", "2205", "2315.25", "2431.01"] })),
];
