// 8.2 Compound Interest: Future Value — 20 hard questions
import { mc, ms, num, tf } from "./kit.mjs";
import { barsD, growthD, fv, c2 } from "./fig.mjs";

const S = String.raw;
const $ = (p, v, fb, fig = null) => num(p, c2(v), fb, fig, 0.02);
const rate = (P, A, n) => c2(((A / P) ** (1 / n) - 1) * 100);
const overtake = (() => { let t = 1; while (fv(1000, 0.05, t) <= 1000 * (1 + 0.07 * t)) t++; return t; })();

export const TOPIC = "8.2 Compound Interest: Future Value";
export const Q = [
  num(`5000 dollars grows to ${c2(fv(5000, 0.0175, 16))} dollars in 4 years with quarterly compounding. Find the annual rate (%, 2 decimals).`, 7, "(A/P)^(1/16) − 1 = 0.0175; × 4.", null, 0.01),
  num("What annual rate compounded annually makes 3000 dollars grow to 4500 dollars in 7 years (%, 2 decimals)?", rate(3000, 4500, 7), "(1.5)^(1/7) − 1.", null, 0.01),
  num("Find the effective annual rate of 9%/a compounded monthly (%, 2 decimals).", c2((1.0075 ** 12 - 1) * 100), "1.0075¹² − 1.", null, 0.01),
  num("Find the effective annual rate of 8%/a compounded quarterly (%, 2 decimals).", c2((1.02 ** 4 - 1) * 100), "1.02⁴ − 1.", null, 0.01),
  num(`Simple interest at 7%/a or compound interest at 5%/a (annual) on 1000 dollars: after how many whole years does compound first give more?`, overtake, "Compare year by year."),
  $("An account earns 4%/a compounded monthly for 2 years, then 5.2%/a compounded quarterly for 3 years. Find the final amount of 8000 dollars (dollars).", fv(fv(8000, 0.04 / 12, 24), 0.013, 12), "Two stages: multiply the factors."),
  $("A 10 000-dollar deposit earns 6%/a compounded annually. A withdrawal of 2000 dollars is made at the end of year 3. What is the balance at the end of year 6 (dollars)?", (fv(10000, 0.06, 3) - 2000) * 1.06 ** 3, "Grow, withdraw, grow again."),
  $("How much interest is earned in years 6 to 10 (only) on 5000 dollars at 5%/a compounded annually (dollars)?", fv(5000, 0.05, 10) - fv(5000, 0.05, 5), "A(10) − A(5)."),
  tf("12%/a compounded monthly gives a higher effective rate than 12.5%/a compounded annually.", true, "1.01¹² − 1 ≈ 12.68%, which is more than 12.5%."),
  tf("If A = P(1 + i)ⁿ, then A after 2n periods equals A²/P.", true, "P(1 + i)²ⁿ = [P(1 + i)ⁿ]²/P."),
  ms("A deposit of 2000 dollars at 6%/a compounded quarterly for 5 years. Which are true? Select all.", ["i = 0.015", "n = 20", `A ≈ ${c2(fv(2000, 0.015, 20))}`, "interest ≈ 600", "the effective rate is more than 6%"], [0, 1, 2, 4], `Interest is about ${c2(fv(2000, 0.015, 20) - 2000)}.`),
  mc("Which offer gives the most after 8 years?", "5.75%/a compounded annually", ["5.4%/a compounded monthly", "5.5%/a compounded semi-annually", "they are all equal"], `Growth factors: 1.0575⁸ ≈ ${(1.0575 ** 8).toFixed(4)}, 1.0045⁹⁶ ≈ ${((1 + 0.054 / 12) ** 96).toFixed(4)}, 1.0275¹⁶ ≈ ${(1.0275 ** 16).toFixed(4)}.`),
  num("A painting bought for 4500 dollars is sold 12 years later for 9800 dollars. What annual compound rate of growth is that (%, 2 decimals)?", rate(4500, 9800, 12), "(9800/4500)^(1/12) − 1.", null, 0.01),
  $("What principal, invested at 4.5%/a compounded monthly, grows to 20 000 dollars in 10 years (dollars)?", 20000 / (1 + 0.045 / 12) ** 120, "20 000 ÷ (1.00375)¹²⁰."),
  num("Prices rise 2.8% a year. To the nearest dollar, what will a 1250-dollar item cost in 15 years?", Math.round(fv(1250, 0.028, 15)), "1250(1.028)¹⁵.", null, 1),
  $("A 15 000-dollar car loses 18% of its value each year. What is it worth after 6 years (dollars)?", 15000 * 0.82 ** 6, "15 000(0.82)⁶."),
  $("Read the graph: the curve shows 3000 dollars at an annual rate. Using the point shown, find the amount after 20 years (dollars).", fv(3000, 0.06, 20), "Ratio per year from the point: 1.06.", growthD([{ f: (t) => 3000 * 1.06 ** t }], 20, { pts: [[10, fv(3000, 0.06, 10), `(10, ${c2(fv(3000, 0.06, 10))})`]] })),
  num("The graph shows two investments of 1000 dollars. After how many whole years is the violet one (8% compound) double the green one (8% simple)?", (() => { let t = 1; while (1.08 ** t < 2 * (1 + 0.08 * t)) t++; return t; })(), "Compare 1.08ᵗ with 2(1 + 0.08t).", growthD([{ f: (t) => 1000 * (1 + 0.08 * t), color: "green" }, { f: (t) => 1000 * 1.08 ** t }], 35)),
  num("The bars show interest earned each year at annual compounding. Find the rate (%/a).", 4, "Each bar is 1.04 times the previous.", barsD([200, 208, 216.32, 224.97], { xlabel: "year", ylabel: "interest", labels: ["200", "208", "216.32", "224.97"] })),
  num("The bars show interest earned each year at annual compounding. Find the principal (dollars).", 5000, "First year's interest 200 at 4%.", barsD([200, 208, 216.32, 224.97, 233.97], { xlabel: "year", ylabel: "interest" })),
];
