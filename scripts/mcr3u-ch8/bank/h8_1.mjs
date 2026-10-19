// 8.1 Simple Interest — 20 hard questions
import { mc, ms, num, tf } from "./kit.mjs";
import { barsD, growthD, fv, c2 } from "./fig.mjs";

const S = String.raw;
const $ = (p, v, fb, fig = null) => num(p, c2(v), fb, fig, 0.02);
const gapYear = (() => { let t = 1; while (1000 * 1.06 ** t - 1000 * (1 + 0.06 * t) <= 200) t++; return t; })();

export const TOPIC = "8.1 Simple Interest";
export const Q = [
  $("A payday lender charges 15 dollars for every 100 dollars borrowed for 14 days. What simple annual rate is that (%/a, 2 decimals)?", (15 / 100) * (365 / 14) * 100, "r = 0.15 ÷ (14/365)."),
  $("A store's overdue accounts are charged 1.25% per month simple interest. Find the interest on 1840 dollars overdue for 100 days (dollars).", 1840 * 0.15 * (100 / 365), "15%/a for 100/365 of a year."),
  num("Money is invested at simple interest. After 4 years it is 6200 dollars and after 9 years it is 7200 dollars. Find the principal (dollars).", 5400, "200 a year; 6200 − 800."),
  num("For the investment above (6200 after 4 years, 7200 after 9 years), find the rate (%/a, 2 decimals).", c2((200 / 5400) * 100), "200 ÷ 5400.", null, 0.01),
  num("At 6%/a, how many years until compound interest (annual) earns at least 200 dollars more than simple interest on 1000 dollars?", gapYear, "Compare 1000(1.06)ᵗ with 1000(1 + 0.06t) year by year."),
  $("Two simple-interest loans total 5000 dollars. One is at 4%/a and the other at 7%/a. The total yearly interest is 290 dollars. How much is at 7% (dollars)?", 3000, "0.04x + 0.07(5000 − x) = 290."),
  num("How many days does it take 7300 dollars to earn 60 dollars at 5%/a simple interest?", 60, "60 ÷ 365 = 0.1644 years ⇒ 0.1644 × 365."),
  $("A loan of 2500 dollars at 8%/a simple interest is repaid after 2 years 3 months. How much is repaid (dollars)?", 2500 * (1 + 0.08 * 2.25), "t = 2.25."),
  tf("If the rate doubles and the time halves, the simple interest stays the same.", true, "I = Prt: 2r × t/2 = rt."),
  tf("Simple interest at 10%/a always beats compound interest at 9%/a compounded annually.", false, "After enough years compound interest wins."),
  ms("A 6000-dollar investment earns simple interest at 4.5%/a. Which are true? Select all.", ["it earns 270 dollars a year", "after 4 years the amount is 7080 dollars", "the amount after t years is 6000 + 270t", "the interest in year 3 is more than in year 1", "it takes about 22.2 years to double"], [0, 1, 2, 4], "Interest is the same every year."),
  mc("Which investment earns the most interest?", "5000 dollars at 6%/a for 4 years", ["6000 dollars at 4%/a for 4.5 years", "4000 dollars at 7%/a for 3.5 years", "8000 dollars at 3%/a for 4 years"], "1200 vs 1080 vs 980 vs 960."),
  $("What principal must be invested at 3.25%/a simple interest to earn 52 dollars in 8 months (dollars)?", 52 / (0.0325 * (8 / 12)), "52 ÷ (0.0325 × 8/12)."),
  num("A bond worth 10 000 dollars pays simple interest of 175 dollars every 6 months. What is the annual rate (%/a)?", 3.5, "350 per year ÷ 10 000."),
  num("At simple interest of 2.4%/a, how many whole months until 5000 dollars earns at least 100 dollars?", 10, "100 ÷ 120 = 0.833 years ⇒ 10 months."),
  $("A 3000-dollar loan is charged 9%/a simple interest for the first year and 7%/a simple interest on the original principal for the next 2 years. What is owed after 3 years (dollars)?", 3000 + 270 + 420, "270 + 2(210)."),
  num("Read the graph: the line shows a simple-interest amount. Find the principal (dollars).", 4000, "The vertical intercept.", growthD([{ f: (t) => 4000 + 180 * t, color: "green" }], 10)),
  num("Read the graph: what is the rate of the simple-interest investment shown (%/a)?", 4.5, "Slope 180 ÷ 4000.", growthD([{ f: (t) => 4000 + 180 * t, color: "green" }], 12, { pts: [[0, 4000, "4000"], [10, 5800, "5800"]] })),
  num("The graph compares simple (green) and compound (violet) interest at 6%/a on 1000 dollars. Read the difference after 20 years to the nearest dollar.", Math.round(fv(1000, 0.06, 20) - 2200), "1000(1.06)²⁰ − 2200.", growthD([{ f: (t) => 1000 * (1 + 0.06 * t), color: "green" }, { f: (t) => 1000 * 1.06 ** t }], 20), 1),
  num("The bars show the interest earned each year. Is it simple or compound interest, and what is the principal at 5%/a? Enter the principal (dollars).", 1600, "Equal bars: simple; 80 ÷ 0.05.", barsD([80, 80, 80, 80], { xlabel: "year", ylabel: "interest", labels: ["80", "80", "80", "80"] })),
];
