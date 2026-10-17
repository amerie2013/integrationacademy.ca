// 7.4 Budgets — 20 hard questions (money written as "dollars")
import { mc, ms, num, tf } from "./kit.mjs";
import { barChartDoc } from "./fig.mjs";

export const TOPIC = "7.4 Budgets";
export const Q = [
  num(`Jordan's gross pay is 3100 dollars a month. Deductions: tax 390, CPP 170, EI 51, dues 40 (dollars). What percent of gross pay is deducted (nearest whole percent)?`, 21, "651 ÷ 3100 = 0.21."),
  num(`A budget: net income 2450; rent 950, utilities 110, groceries 380, transit 156, phone 55, eating out 160, entertainment 120, savings 250 (dollars). Income drops 20%. What is the new deficit (dollars)? (Enter a negative number.)`, -221, "1960 − 2181."),
  num(`For that drop, by how much must wants and savings be cut in total to break even (dollars)?`, 221, "The deficit."),
  num(`Aisha earns 18 dollars an hour for 25 hours a week; 15% is deducted. What is her monthly net pay (to the cent)?`, 1657.5, "18 × 25 × 52 ÷ 12 × 0.85."),
  num(`A student saves 40 dollars a week. How many whole months until she has at least 1500 dollars, starting from 300 dollars? (Use 52 ÷ 12 weeks per month.)`, 7, "Monthly ≈ 173.33; 300 + 7 × 173.33 = 1513.33 ≥ 1500; 6 months gives 1340."),
  ms(`A budget has needs 62%, wants 28%, savings 10%. Which are true? Select all.`, ["needs are above the 50% guideline", "savings are below the 20% guideline", "wants are within 30%", "the budget must be in deficit"], [0, 1, 2], "Percent split alone does not tell you about a deficit."),
  num(`Net income is 2600 dollars. Rent rises 8% from 1000 dollars and income rises 120 dollars. By how much does the monthly surplus change? (Negative for a decrease.)`, 40, "Rent +80; income +120 → surplus +40."),
  num(`Five deposits of 1150 dollars at the end of each year earn 4% compounded yearly. How much is in the account right after the fifth deposit (to the cent)?`, 6228.77, "1150(1.04⁴ + 1.04³ + 1.04² + 1.04 + 1).", null, 0.02),
  num(`Read the chart: if income is 2400 dollars, what is the surplus (dollars)?`, 150, "Expenses 1350 + 600 + 300 = 2250.", barChartDoc({ bars: [["needs", 1350], ["wants", 600], ["savings", 300]], base: 0, top: 1500, step: 300, ylabel: "dollars" })),
  num(`A phone costs 1200 dollars, or 59 dollars a month for 24 months. Saving 200 dollars a month instead, how much does the student save by waiting and paying cash (dollars)?`, 216, "24 × 59 = 1416; 1416 − 1200."),
  tf(`A budget with a surplus every month can still fail to cover yearly expenses if they were not included.`, true, "Irregular yearly costs must be budgeted monthly."),
  num(`Monthly needs are 1650 dollars. Saving 275 dollars a month, how many months to save a 4-month emergency fund?`, 24, "6600 ÷ 275."),
  num(`A couple's net income is 5200 dollars. They follow 50/30/20 but want an extra 300 dollars a month in savings, taken from wants. What percent of income will wants be (1 decimal place)?`, 24.2, "1560 − 300 = 1260; 1260 ÷ 5200.", null, 0.06),
  mc(`Which change saves the most per year?`, "cancel two 18-dollar subscriptions (432 dollars a year)", ["skip one 6-dollar coffee a week (312 dollars a year)", "save 1 dollar a day (365 dollars a year)", "drop one 30-dollar meal out every 3 months (120 dollars a year)"], "2 × 18 × 12 = 432."),
  num(`A student's expenses are 1310 dollars; income 1400 dollars falls 12%. What is the new result (negative for a deficit)?`, -78, "1400 × 0.88 = 1232; 1232 − 1310."),
  num(`Gross pay of 52 000 dollars a year is paid bi-weekly. Deductions are 24%. What is the net amount of each paycheque (dollars)?`, 1520, "52 000 ÷ 26 = 2000; × 0.76."),
  num(`An emergency of 900 dollars is put on a credit card at 20% per year compounded monthly and paid off after 6 months in one payment. How much interest was paid (to the cent)?`, 93.83, "900 × (1 + 0.2/12)⁶ − 900.", null, 0.02),
  ms(`Which are good budget habits? Select all.`, ["reviewing the budget monthly", "setting aside money for yearly costs", "paying yourself first (saving at payday)", "using credit to cover a regular monthly deficit"], [0, 1, 2], "Borrowing for a regular deficit builds debt."),
  num(`A family spends 18% of a 4800-dollar net income on food. Food prices rise 6%. How much more do they spend on food each month (to the cent)?`, 51.84, "864 × 0.06.", null, 0.006),
  num(`To reach 5000 dollars in 2 years, how much must be saved per week (52 weeks a year, to the cent)?`, 48.08, "5000 ÷ 104.", null, 0.006),
];
