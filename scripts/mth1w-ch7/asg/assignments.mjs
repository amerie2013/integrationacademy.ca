// Chapter 7 assignments (homework): 10 questions each — Knowledge 1-3, Thinking 4-5, Communication 6-7, Application 8-10.
// [[key|caption]] in a line is replaced by a figure (uploaded SVG) when published. Titles match the existing rows.
// Money is written as "dollars" (the assignment checker rejects bare $ signs).
import { barChartDoc } from "../../mth1w-ch6/figs6.mjs";
import { planeDoc } from "../../mth1w-ch4/figs4.mjs";

export const ASSIGNMENTS = [
  { code: "7.1", title: "Assignment 7.1 — Making Financial Decisions", figs: {
      plans: planeDoc({ view: { xmin: 0, xmax: 12, ymin: 0, ymax: 80 }, lines: [{ m: 0, b: 55, color: "blue", label: "A", lx: 1 }, { m: 4, b: 15, color: "red", label: "B", lx: 10 }], step: { x: 1, y: 10 }, xlabel: "classes", ylabel: "cost" }) }, lines: [
    "Knowledge & Understanding",
    "1. Find the unit price of each and choose the better buy: 1.5 L of milk for 3.29 dollars or 4 L for 6.99 dollars.",
    "2. Find the total cost of a 65-dollar item with 13% HST.",
    "3. What multiplier gives (a) a 35% discount (b) a price including HST?",
    "Thinking",
    "4. The graph shows two fitness plans by the number of classes per month. Write an equation for each, find the break-even point and say which is better for 12 classes. [[plans|Plans for question 4]]",
    "5. A 900-dollar bike is on sale for 20% off, then another 10% off at the register. Find the final price including HST, and explain why this is not the same as 30% off.",
    "Communication",
    "6. Explain how inflation affects someone who keeps their savings in cash at home.",
    "7. Describe three warning signs that a message about money might be a scam.",
    "Application",
    "8. A receipt shows a total of 124.30 dollars including HST. Find the price before tax.",
    String.raw`9. A basket of groceries costs 80 dollars today. With 3% inflation per year, what will it cost in 6 years? Show your work using \((1.03)^6\).`,
    "10. A laptop costs 1050 dollars plus HST, or 18 monthly payments of 72 dollars (tax included). Which option costs less, and by how much?",
  ] },
  { code: "7.2", title: "Assignment 7.2 — Appreciation & Depreciation", figs: {
      dep: planeDoc({ view: { xmin: 0, xmax: 8, ymin: 0, ymax: 26000 }, curves: [{ f: (t) => 24000 * 0.8 ** t, color: "red" }], points: [{ x: 0, y: 24000 }, { x: 1, y: 19200 }], step: { x: 1, y: 4000 }, xlabel: "years", ylabel: "value" }) }, lines: [
    "Knowledge & Understanding",
    "1. Write the factor for (a) a 9% increase (b) a 9% decrease (c) a 40% decrease.",
    "2. A 350-dollar phone loses 30% of its value in a year. What is it worth?",
    "3. Name two items that usually appreciate and two that usually depreciate, with a reason for each.",
    "Thinking",
    "4. The graph shows a car's value. Find the yearly depreciation rate and write a model. Use it to find the value after 5 years. [[dep|Car value for question 4]]",
    "5. A painting bought for 2500 dollars is worth 3025 dollars two years later. Find the constant yearly rate of appreciation.",
    "Communication",
    "6. Explain why a 30% decrease followed by a 30% increase does not return to the original value.",
    "7. Compare straight-line and percentage depreciation. Which describes a car's value better, and why?",
    "Application",
    String.raw`8. A house worth 420 000 dollars appreciates 4% per year. Find its value in 8 years using \(V=V_0(1+r)^n\).`,
    "9. A 1600-dollar laptop can be depreciated 400 dollars a year or 35% a year. Make a table for 4 years and compare.",
    "10. Use the rule of 72 to estimate how long it takes an investment growing 9% a year to double, and check with a calculation.",
  ] },
  { code: "7.3", title: "Assignment 7.3 — Interest & Borrowing", figs: {
      grow: planeDoc({ view: { xmin: 0, xmax: 20, ymin: 0, ymax: 4000 }, lines: [{ m: 70, b: 1000, color: "blue", label: "simple", lx: 15 }], curves: [{ f: (t) => 1000 * 1.07 ** t, color: "green" }], step: { x: 2, y: 500 }, xlabel: "years", ylabel: "amount" }) }, lines: [
    "Knowledge & Understanding",
    "1. Find the simple interest on 2800 dollars at 4% per year for 3 years.",
    String.raw`2. Find the amount when 1500 dollars is compounded yearly at 5% for 4 years, using \(A=P(1+r)^n\).`,
    String.raw`3. For 6% compounded monthly for 3 years, state \(\frac{r}{n}\) and \(nt\).`,
    "Thinking",
    "4. The graph shows 1000 dollars at 7% simple and compound interest. Estimate when the compound amount is 500 dollars more than the simple amount, then check with calculations. [[grow|Interest graph for question 4]]",
    "5. 2000 dollars earns 240 dollars of simple interest in 3 years. Find the rate.",
    "Communication",
    "6. Explain the difference between simple and compound interest, with an example.",
    "7. Explain why carrying a credit-card balance is expensive, and give two ways to avoid credit-card interest.",
    "Application",
    String.raw`8. Find the amount when 4000 dollars is invested at 3.6% compounded monthly for 5 years: \(A=4000\left(1+\frac{0.036}{12}\right)^{60}\).`,
    "9. A 1200-dollar credit-card balance is charged 21% per year, compounded monthly. If no payments are made, what is owed after 6 months?",
    "10. Compare two loans of 5000 dollars for 3 years: 6% simple interest, or 5.75% compounded yearly. Which costs less in interest?",
  ] },
  { code: "7.4", title: "Assignment 7.4 — Budgets", figs: {
      spend: barChartDoc({ bars: [["needs", 1400], ["wants", 450], ["savings", 200]], base: 0, top: 1600, step: 400, ylabel: "dollars per month", color: "green" }) }, lines: [
    "Knowledge & Understanding",
    "1. Classify each expense as fixed or variable and as a need or a want: (a) a phone plan (b) a gym membership (c) groceries (d) eating out.",
    "2. A paycheque of 1050 dollars arrives every two weeks. Find the monthly income.",
    "3. Using 50/30/20, how much of a 2200-dollar net income goes to needs, wants and savings?",
    "Thinking",
    "4. The chart shows a monthly budget for a net income of 2300 dollars. Find the surplus or deficit and the percent for needs, wants and savings. [[spend|Budget for question 4]]",
    "5. Yearly costs are 1320 dollars (insurance), 480 dollars (gifts) and 300 dollars (school supplies). How much should be set aside each month?",
    "Communication",
    "6. Explain why a budget should use net income rather than gross income.",
    "7. Describe what you would cut first if your budget went into deficit, and why.",
    "Application",
    "8. You earn 16.80 dollars an hour for 20 hours a week and 15% is deducted. Find your monthly net income (use 52 weeks a year).",
    "9. Your rent rises 7% from 950 dollars and your income rises 50 dollars a month. By how much does your surplus change?",
    "10. Plan how to save for something you want that costs at least 500 dollars: state the goal, the monthly amount and the time it will take, and what you would cut to make it possible.",
  ] },
];
