// 7.3 Interest & Borrowing — 20 easy + 20 medium questions (money written as "dollars")
import { mc, ms, num, tf } from "./kit.mjs";
import { planeDoc } from "./fig.mjs";

export const E = [
  num(`Find the simple interest on 1000 dollars at 5% per year for 1 year (dollars).`, 50, "1000 × 0.05 × 1."),
  num(`Find the simple interest on 2000 dollars at 3% per year for 4 years (dollars).`, 240, "2000 × 0.03 × 4."),
  num(`Find the amount after 2 years: 500 dollars at 6% simple interest (dollars).`, 560, "500 + 500 × 0.06 × 2."),
  num(`Write 4.5% as a decimal.`, 0.045, "4.5 ÷ 100."),
  num(`Write 9 months in years.`, 0.75, "9 ÷ 12."),
  mc(`In I = Prt, P stands for the…`, "principal", ["profit", "payment", "percent"], "The amount saved or borrowed."),
  mc(`Interest that is earned on the original principal only is…`, "simple interest", ["compound interest", "inflation", "depreciation"], "I = Prt."),
  mc(`Interest earned on interest as well as on the principal is…`, "compound interest", ["simple interest", "a discount", "a fee"], "A = P(1 + r/n)ⁿᵗ."),
  num(`1000 dollars is compounded yearly at 10% for 2 years. Find the amount (dollars).`, 1210, "1000 × 1.1²."),
  num(`For interest compounded monthly, what is n?`, 12, "12 periods a year."),
  num(`For 8% compounded quarterly, what is r/n as a decimal?`, 0.02, "0.08 ÷ 4."),
  tf(`Over many years, compound interest grows faster than simple interest at the same rate.`, true, "Interest earns interest."),
  num(`Find the simple interest on 600 dollars at 4% for 6 months (dollars).`, 12, "600 × 0.04 × 0.5."),
  mc(`Simple interest growth over time is…`, "linear", ["exponential", "quadratic", "constant"], "The same amount each year."),
  mc(`Compound interest growth over time is…`, "exponential", ["linear", "constant", "decreasing"], "Repeated multiplication."),
  num(`A savings account earns 30 dollars of simple interest a year on 1000 dollars. What is the rate (%)?`, 3, "30 ÷ 1000."),
  tf(`Paying your full credit-card balance by the due date avoids interest charges.`, true, "Interest is charged on carried balances."),
  num(`An amount grows to 1150 dollars from 1000 dollars. How much interest was earned (dollars)?`, 150, "A − P."),
  mc(`APR stands for…`, "annual percentage rate", ["average payment rate", "account principal ratio", "annual payment record"], "The yearly interest rate on a loan or card."),
  num(`2000 dollars compounded yearly at 5% for 1 year. Find the interest (dollars).`, 100, "2000 × 0.05."),
];

export const M = [
  num(`Find the simple interest on 3600 dollars at 2.75% for 3 years (dollars).`, 297, "3600 × 0.0275 × 3."),
  num(`1500 dollars earns 180 dollars simple interest in 3 years. Find the rate (%).`, 4, "180 ÷ (1500 × 3)."),
  num(`How many years does it take 2500 dollars to earn 500 dollars at 5% simple interest?`, 4, "500 ÷ (2500 × 0.05)."),
  num(`1200 dollars at 5% compounded yearly for 3 years. Find the amount (to the cent).`, 1389.15, "1200 × 1.05³.", null, 0.006),
  num(`2000 dollars at 6% compounded semi-annually for 2 years. Find the amount (to the cent).`, 2251.02, "2000 × 1.03⁴.", null, 0.006),
  num(`5000 dollars at 4.8% compounded monthly for 1 year. Find the amount (to the cent).`, 5245.35, "5000 × 1.004¹².", null, 0.006),
  num(`How much more does 1000 dollars earn in 10 years at 6% compounded yearly than at 6% simple interest (to the cent)?`, 190.85, "1790.85 − 1600.", null, 0.006),
  ms(`Which give 1000 dollars more than 1100 dollars after 2 years? Select all.`, ["5% compounded yearly", "6% simple interest", "4% compounded yearly", "5.5% simple interest"], [0, 1, 3], "5% compound: 1102.50; 6% simple: 1120; 4% compound: 1081.60; 5.5% simple: 1110."),
  num(`A credit card balance of 1200 dollars is charged 18% per year compounded monthly. With no payments, what is owed after 3 months (to the cent)?`, 1254.81, "1200 × 1.015³.", null, 0.006),
  mc(`Which earns more on 4000 dollars for 5 years?`, "5% compounded monthly", ["5% compounded yearly", "5% simple interest", "they all earn the same"], "More frequent compounding earns slightly more."),
  num(`Read the graph: how much more is the compound amount than the simple amount after 10 years (nearest 100 dollars)?`, 600, "Compound 1000 × 1.1¹⁰ ≈ 2594; simple 1000 + 100 × 10 = 2000.", planeDoc({ view: { xmin: 0, xmax: 12, ymin: 0, ymax: 3200 }, lines: [{ m: 100, b: 1000, color: "blue", label: "simple", lx: 9 }], curves: [{ f: (t) => 1000 * 1.1 ** t, color: "green" }], step: { x: 1, y: 400 }, xlabel: "years", ylabel: "amount" })),
  num(`Using the rule of 72, about how many years does money take to double at 4% compounded yearly?`, 18, "72 ÷ 4."),
  tf(`Doubling the time of a compound-interest investment doubles the interest earned.`, false, "Compound interest grows exponentially — more than double."),
  num(`A loan of 3000 dollars at 7% simple interest for 2 years. What is the total repaid (dollars)?`, 3420, "3000 + 420."),
  num(`A 900-dollar balance at 21% per year compounded monthly. What is the interest in the first month (dollars)?`, 15.75, "900 × 0.0175."),
  mc(`A student pays only 25 dollars a month on a 1500-dollar card balance at 20%. The first month's interest is 25 dollars. What happens?`, "the balance does not go down", ["the balance is paid off in 60 months", "the bank cancels the interest", "the balance falls by 25 dollars a month"], "The payment only covers interest."),
  num(`At what simple interest rate will 800 dollars grow to 1000 dollars in 5 years (%)?`, 5, "200 ÷ (800 × 5)."),
  num(`10 000 dollars at 3% compounded yearly for 20 years. Find the amount (to the cent).`, 18061.11, "10 000 × 1.03²⁰.", null, 0.006),
  ms(`Which actions reduce the total interest you pay on a loan? Select all.`, ["a lower interest rate", "a shorter loan term", "larger monthly payments", "making only the minimum payment"], [0, 1, 2], "Minimum payments maximize interest."),
  num(`2500 dollars at 3.6% compounded monthly for 2 years. Find the interest earned (to the cent).`, 186.35, "2500 × 1.003²⁴ − 2500.", null, 0.006),
];
