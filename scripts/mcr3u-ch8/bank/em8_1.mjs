// 8.1 Simple Interest — 20 easy + 20 medium questions
import { mc, ms, num, tf } from "./kit.mjs";
import { barsD, growthD, c2 } from "./fig.mjs";

const S = String.raw;
/** money answer (dollars) to the cent */
const $ = (p, v, fb, fig = null) => num(p, c2(v), fb, fig, 0.02);

export const E = [
  $("Find the simple interest on 500 dollars at 4%/a for 3 years (dollars).", 60, "500 × 0.04 × 3."),
  $("Find the simple interest on 1200 dollars at 2.5%/a for 2 years (dollars).", 60, "1200 × 0.025 × 2."),
  $("Find the amount when 800 dollars earns 5%/a simple interest for 4 years (dollars).", 960, "800(1 + 0.2)."),
  $("Find the amount when 2000 dollars earns 3%/a simple interest for 6 years (dollars).", 2360, "2000(1.18)."),
  $("Find the simple interest on 3000 dollars at 6%/a for 6 months (dollars).", 90, "t = 0.5."),
  $("Find the simple interest on 1460 dollars at 5%/a for 73 days (dollars).", 14.6, "t = 73/365 = 0.2."),
  num("Write 7.25% as a decimal.", 0.0725, "Divide by 100.", null, 0.00001),
  num("What fraction of a year is 3 months? Enter a decimal.", 0.25, "3/12."),
  num("A loan earns 40 dollars of simple interest each year. How much interest after 5 years (dollars)?", 200, "40 × 5."),
  $("1000 dollars earns 70 dollars of simple interest in one year. What is the rate (%/a)?", 7, "70 ÷ 1000."),
  mc("Which formula gives simple interest?", S`\(I=Prt\)`, [S`\(I=P(1+i)^n\)`, S`\(I=P+rt\)`, S`\(I=\frac{P}{rt}\)`], "Principal × rate × time."),
  mc("In A = P(1 + rt), what is A?", "the total amount: principal plus interest", ["the interest only", "the rate", "the time in months"], "A = P + I."),
  tf("Under simple interest, the same amount of interest is earned every year.", true, "I = Pr each year."),
  tf("Under simple interest, the year-end amounts form a geometric sequence.", false, "They form an arithmetic sequence."),
  $("Find the simple interest on 650 dollars at 8%/a for 9 months (dollars).", 650 * 0.08 * 0.75, "t = 0.75."),
  num("How many years does it take 400 dollars to earn 60 dollars at 5%/a simple interest?", 3, "60 ÷ (400 × 0.05)."),
  $("What principal earns 45 dollars in one year at 3%/a simple interest (dollars)?", 1500, "45 ÷ 0.03."),
  num("The year-end amounts of a simple-interest investment are 1050, 1100, 1150, … What is the common difference?", 50, "1100 − 1050."),
  $("Read the graph: what is the amount after 5 years (dollars)?", 2500, "Slope 100 per year from 2000.", growthD([{ f: (t) => 2000 + 100 * t, color: "green" }], 8)),
  num("The bars show year-end amounts under simple interest. How much interest is earned each year (dollars)?", 30, "Each bar is 30 higher.", barsD([630, 660, 690, 720, 750], { xlabel: "year", ylabel: "amount", labels: ["630", "660", "690", "720", "750"] })),
];

export const M = [
  $("Find the simple interest on 4250 dollars at 3.6%/a for 30 months (dollars).", 4250 * 0.036 * 2.5, "t = 2.5."),
  $("Find the amount of 960 dollars at 4.75%/a simple interest for 4 years (dollars).", 960 * (1 + 0.19), "960(1.19)."),
  $("Find the simple interest on 5475 dollars at 6%/a for 120 days (dollars).", 5475 * 0.06 * (120 / 365), "t = 120/365."),
  num("2500 dollars grows to 2800 dollars in 4 years at simple interest. Find the rate (%/a).", 3, "300 ÷ (2500 × 4)."),
  num("1800 dollars earns 243 dollars at 4.5%/a simple interest. How many years?", 3, "243 ÷ 81."),
  $("What principal earns 189 dollars in 3 years at 4.2%/a simple interest (dollars)?", 1500, "189 ÷ 0.126."),
  $("A simple-interest loan at 6%/a for 3 years is repaid with 4130 dollars. How much was borrowed (dollars)?", 4130 / 1.18, "4130 ÷ 1.18."),
  num("How many months does it take 2400 dollars to earn 54 dollars at 4.5%/a simple interest?", 6, "54 ÷ 108 = 0.5 years."),
  num("At what simple interest rate does money double in 20 years (%/a)?", 5, "rt = 1."),
  num("At what simple interest rate does money triple in 16 years? Give the % to 2 decimals.", 12.5, "rt = 2.", null, 0.01),
  ms("Which are true of simple interest? Select all.", ["interest is calculated on the principal only", "the graph of A against t is a line", "the slope of that line is Pr", "interest earns interest", "amounts form an arithmetic sequence"], [0, 1, 2, 4], "Interest earning interest is compound."),
  mc("A store charges 2% per month simple interest. What is the annual rate?", "24%/a", ["2%/a", "12%/a", "26.82%/a"], "2 × 12."),
  tf("Doubling the time doubles the simple interest earned.", true, "I = Prt is proportional to t."),
  tf("Doubling the time doubles the amount A under simple interest.", false, "A = P + Prt; P does not double."),
  num("A loan of 900 dollars is repaid after 10 months with 945 dollars. Find the simple interest rate (%/a).", 6, "45 ÷ (900 × 10/12) = 45 ÷ 750 = 0.06."),
  num("An investment has 5300 dollars after 2 years and 5750 dollars after 5 years at simple interest. Find the principal (dollars).", 5000, "450 over 3 years: 150 a year; 5300 − 300."),
  num("For the investment above (5300 after 2 years, 5750 after 5 years), find the rate (%/a).", 3, "150 ÷ 5000."),
  $("Find the interest on 3650 dollars at 7%/a simple interest from March 1 to May 30 (90 days).", 3650 * 0.07 * (90 / 365), "t = 90/365."),
  num("Read the graph: what is the slope (dollars per year)?", 45, "From 1500 to 1950 over 10 years.", growthD([{ f: (t) => 1500 + 45 * t, color: "green" }], 10)),
  num("The bars show simple-interest amounts on a principal of 1200. What is the rate (%/a)?", 4, "Each year adds 48: 48 ÷ 1200.", barsD([1248, 1296, 1344, 1392], { xlabel: "year", ylabel: "amount", labels: ["1248", "1296", "1344", "1392"] })),
];
