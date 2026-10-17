// 7.3 Interest & Borrowing — 20 hard questions (money written as "dollars")
import { mc, ms, num, tf } from "./kit.mjs";
import { planeDoc } from "./fig.mjs";

export const TOPIC = "7.3 Interest & Borrowing";
export const Q = [
  num(`Lena invests 3000 dollars at age 15 and Max invests 6000 dollars at age 30, both at 6% compounded yearly. How much more does Lena have at age 60 (to the cent)?`, 6832.89, "3000 × 1.06⁴⁵ ≈ 41 293.83; 6000 × 1.06³⁰ ≈ 34 460.95.", null, 0.02),
  num(`How many whole years does it take 1000 dollars to at least double at 5% compounded yearly?`, 15, "1.05¹⁴ ≈ 1.980; 1.05¹⁵ ≈ 2.079."),
  num(`An account grows from 4000 dollars to 4410 dollars in 2 years with yearly compounding. What is the rate (%)?`, 5, "(1 + r)² = 1.1025."),
  num(`A 2000-dollar card balance at 19.99% per year (compounded monthly) is left unpaid for 2 years. How much is owed (to the cent)?`, 2973.24, "2000 × (1 + 0.1999/12)²⁴.", null, 0.02),
  num(`A loan of 8000 dollars: option A charges 6% simple interest for 4 years; option B charges 5.5% compounded yearly for 4 years (paid at the end). How much cheaper is the cheaper option (to the cent)?`, 9.4, "A: 1920; B: 8000 × 1.055⁴ − 8000 ≈ 1910.60.", null, 0.02),
  num(`10 000 dollars at 4% for 10 years: how much more does monthly compounding earn than yearly compounding (to the cent)?`, 105.88, "10 000 × (1 + 0.04/12)¹²⁰ ≈ 14 908.33; 10 000 × 1.04¹⁰ ≈ 14 802.44.", null, 0.02),
  mc(`A 1500-dollar balance at 20% per year (about 1.67% per month). Paying 100 dollars a month, about how much of the first payment goes to interest?`, "about 25 dollars", ["about 100 dollars", "about 2 dollars", "about 50 dollars"], "1500 × 0.0167 ≈ 25."),
  num(`What principal invested at 6% compounded yearly grows to 5000 dollars in 8 years (to the cent)?`, 3137.06, "5000 ÷ 1.06⁸.", null, 0.02),
  ms(`Which statements are true? Select all.`, ["starting to save earlier usually matters more than a slightly higher rate", "a lower monthly payment always means a cheaper loan", "credit-card interest is usually higher than savings interest", "compound interest can work for you (saving) or against you (debt)"], [0, 2, 3], "Longer loans have lower payments but more total interest."),
  num(`An investment doubles in 12 years with yearly compounding. What is the yearly rate (%, 2 decimal places)?`, 5.95, "2^(1/12) ≈ 1.0595.", null, 0.006),
  num(`Read the graph: after how many whole years does the compound amount first exceed the simple amount by more than 1000 dollars?`, 12, "Compound 2000 × 1.08ᵗ vs simple 2000 + 160t: t = 11 gap 903.28; t = 12 gap 1116.34.", planeDoc({ view: { xmin: 0, xmax: 16, ymin: 0, ymax: 7000 }, lines: [{ m: 160, b: 2000, color: "blue", label: "simple", lx: 12 }], curves: [{ f: (t) => 2000 * 1.08 ** t, color: "green" }], step: { x: 2, y: 1000 }, xlabel: "years", ylabel: "amount" })),
  tf(`At 6% compounded yearly, money roughly quadruples in about 24 years.`, true, "Doubling time ≈ 12 years, so two doublings ≈ 24 years (1.06²⁴ ≈ 4.05)."),
  num(`A store card offers “no interest for 12 months”, otherwise 29.9% per year compounded monthly from the purchase date. On a 1800-dollar purchase not paid in time, how much interest is charged (to the cent)?`, 618.44, "1800 × (1 + 0.299/12)¹² − 1800.", null, 0.02),
  num(`Simple interest: a 6-month loan of 2400 dollars costs 84 dollars in interest. What is the annual rate (%)?`, 7, "84 ÷ (2400 × 0.5)."),
  mc(`Which saving plan gives the most after 5 years on 2000 dollars?`, "4.8% compounded monthly", ["5% simple interest", "4.7% compounded yearly", "4.9% simple interest"], "Monthly 4.8%: 2541.28; 5% simple: 2500; 4.7% yearly: 2516.31; 4.9% simple: 2490."),
  num(`A balance of 3000 dollars at 18% per year compounded monthly is reduced by a single payment of 1000 dollars after 6 months. What is owed just after the payment (to the cent)?`, 2280.33, "3000 × 1.015⁶ ≈ 3280.33; − 1000.", null, 0.02),
  num(`How much must be deposited today at 3% compounded yearly to have 10 000 dollars in 15 years (to the cent)?`, 6418.62, "10 000 ÷ 1.03¹⁵.", null, 0.02),
  num(`A deposit of 1000 dollars earns 2.5% compounded yearly while inflation is 3% a year. After 10 years, what is the buying power of the account in today's dollars (to the cent)?`, 952.5, "1000 × 1.025¹⁰ ÷ 1.03¹⁰.", null, 0.02),
  tf(`If two accounts have the same yearly rate, the one compounded daily always ends with at least as much as the one compounded yearly.`, true, "More frequent compounding never earns less at the same rate."),
  num(`Simple interest at 4% for t years earns the same as 1000 dollars at 4% compounded yearly for 5 years. Find t to 2 decimal places.`, 5.42, "Compound interest 216.65; 1000 × 0.04 × t = 216.65.", null, 0.006),
];
