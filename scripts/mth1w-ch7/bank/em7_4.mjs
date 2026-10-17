// 7.4 Budgets — 20 easy + 20 medium questions (money written as "dollars")
import { mc, ms, num, tf } from "./kit.mjs";
import { barChartDoc } from "./fig.mjs";

export const E = [
  mc(`Pay before deductions is called…`, "gross income", ["net income", "surplus", "a budget"], "Gross = total earned."),
  mc(`Take-home pay after deductions is called…`, "net income", ["gross income", "a deficit", "interest"], "Budget with net income."),
  mc(`Which is a fixed expense?`, "rent", ["groceries", "eating out", "gas for a car"], "The same each month."),
  mc(`Which is a want rather than a need?`, "concert tickets", ["rent", "groceries", "a bus pass to work"], "Not essential."),
  num(`Net income is 2000 dollars and expenses are 1850 dollars. What is the surplus (dollars)?`, 150, "2000 − 1850."),
  num(`Net income is 1600 dollars and expenses are 1700 dollars. What is the result? (Negative for a deficit.)`, -100, "1600 − 1700."),
  num(`Using 50/30/20 with a net income of 3000 dollars, how much is for needs (dollars)?`, 1500, "50% of 3000."),
  num(`Using 50/30/20 with a net income of 3000 dollars, how much is for savings (dollars)?`, 600, "20% of 3000."),
  num(`A job pays 15 dollars an hour for 20 hours a week. What is the weekly gross pay (dollars)?`, 300, "15 × 20."),
  num(`How many pay periods are in a year if you are paid every two weeks?`, 26, "52 ÷ 2."),
  num(`A yearly insurance bill is 1200 dollars. How much should be set aside each month (dollars)?`, 100, "1200 ÷ 12."),
  tf(`A budget should be based on gross income.`, false, "Use net income — deductions are taken before you are paid."),
  mc(`Which is a common payroll deduction in Canada?`, "CPP contributions", ["HST", "rent", "a phone bill"], "Also income tax and EI."),
  num(`To save 600 dollars in 6 months, how much must be saved each month (dollars)?`, 100, "600 ÷ 6."),
  tf(`A deficit means expenses are greater than income.`, true, "Income − expenses is negative."),
  num(`Groceries cost 95 dollars a week. About how much is that per month (52 weeks ÷ 12, to the cent)?`, 411.67, "95 × 52 ÷ 12.", null, 0.006),
  mc(`Groceries are a…`, "variable need", ["fixed want", "fixed need", "variable want"], "Amount changes; essential."),
  num(`A 5-dollar coffee every day for 30 days costs how much (dollars)?`, 150, "5 × 30."),
  mc(`An emergency fund is money saved for…`, "unexpected expenses such as repairs or job loss", ["vacations", "a new phone each year", "paying taxes"], "A cushion for surprises."),
  num(`Gross pay is 2500 dollars and deductions are 500 dollars. What is the net pay (dollars)?`, 2000, "2500 − 500."),
];

export const M = [
  num(`A semi-monthly paycheque is 1150 dollars. What is the monthly income (dollars)?`, 2300, "Semi-monthly = 24 pays: 1150 × 2."),
  num(`A bi-weekly paycheque is 1200 dollars. What is the monthly income (dollars)?`, 2600, "1200 × 26 ÷ 12."),
  num(`Weekly pay of 480 dollars is how much per month (to the cent)?`, 2080, "480 × 52 ÷ 12."),
  num(`Gross pay is 2800 dollars a month and deductions are 22%. What is the net pay (dollars)?`, 2184, "2800 × 0.78."),
  num(`Expenses: rent 900, food 350, transit 156, phone 60, fun 200, savings 250 (dollars). Net income 2000 dollars. What is the surplus (dollars)?`, 84, "2000 − 1916."),
  num(`For that budget (needs: rent, food, transit, phone), what percent of income goes to needs (1 decimal place)?`, 73.3, "1466 ÷ 2000.", null, 0.06),
  ms(`Which are needs? Select all.`, ["rent", "basic groceries", "a streaming subscription", "transportation to work"], [0, 1, 3], "Streaming is a want."),
  num(`Yearly costs of 1800 dollars (insurance) and 420 dollars (gifts) are budgeted monthly. What is the monthly amount (dollars)?`, 185, "2220 ÷ 12."),
  num(`Net income falls by 15% from 2400 dollars. What is the new income (dollars)?`, 2040, "2400 × 0.85."),
  num(`Rent of 1100 dollars rises 6%. What is the new rent (dollars)?`, 1166, "1100 × 1.06."),
  num(`Read the chart: how much more is spent on needs than on wants (dollars)?`, 800, "1300 − 500.", barChartDoc({ bars: [["needs", 1300], ["wants", 500], ["savings", 300]], base: 0, top: 1500, step: 300, ylabel: "dollars" })),
  num(`For that chart, what percent of total spending goes to savings (1 decimal place)?`, 14.3, "300 ÷ 2100.", null, 0.06),
  num(`Marco wants 1800 dollars in 9 months and has 360 dollars saved. How much must he save each month (dollars)?`, 160, "1440 ÷ 9."),
  num(`Bringing lunch saves 7 dollars a day for 20 days a month. How much is saved in a 10-month school year (dollars)?`, 1400, "7 × 20 × 10."),
  tf(`If a budget has a deficit, cutting wants is usually the first step before cutting needs.`, true, "Protect needs; trim optional spending."),
  num(`Essential expenses are 1500 dollars a month. How much is a 3-month emergency fund (dollars)?`, 4500, "3 × 1500."),
  num(`Saving 250 dollars a month, how many months to build that 4500-dollar emergency fund?`, 18, "4500 ÷ 250."),
  mc(`A student's needs are 70% of income. The most realistic fix is…`, "look for cheaper housing or transit, and keep wants modest", ["stop all saving permanently", "use credit cards for groceries", "ignore the budget"], "Reduce the largest needs where possible."),
  num(`A part-time job pays 16.55 dollars an hour for 18 hours a week, with 12% deductions. What is the monthly net pay (52 weeks ÷ 12, to the cent)?`, 1135.99, "16.55 × 18 × 52 ÷ 12 × 0.88.", null, 0.02),
  num(`50/30/20 on a net income of 2750 dollars: how much for wants (dollars)?`, 825, "0.3 × 2750."),
];
