// 7.1 Making Financial Decisions — 20 hard questions (money written as "dollars")
import { mc, ms, num, tf } from "./kit.mjs";
import { planeDoc } from "./fig.mjs";

export const TOPIC = "7.1 Making Financial Decisions";
export const Q = [
  num(`Rice: 900 g for 3.69 dollars or 2.5 kg for 8.99 dollars. How much is saved per kg by buying the larger bag (to the cent)?`, 0.5, "4.10 − 3.596 ≈ 0.50.", null, 0.006),
  num(`A store takes 25% off and then another 20% off the sale price. A second store takes 45% off. How many dollars more does the first store charge on a 200-dollar item (before tax)?`, 10, "200 × 0.6 = 120 vs 200 × 0.55 = 110."),
  num(`After a 30% discount and 13% HST, a jacket costs 110.74 dollars. What was the original price (dollars)?`, 140, "110.74 ÷ 1.13 ÷ 0.7."),
  num(`Plan A: 25 dollars for 5 GB plus 6 dollars per extra GB. Plan B: 55 dollars unlimited. At how many GB in total do they cost the same?`, 10, "25 + 6(g − 5) = 55 → g = 10."),
  num(`Three gyms: A = 50 + 20m, B = 150 + 10m, C = 30m (dollars, m months). For how many months of membership is B first the cheapest of all three? (Give the smallest whole number of months when B is strictly cheapest.)`, 11, "B < A when m > 10; B < C when m > 7.5. So from 11 months."),
  num(`A laptop costs 1299 dollars plus HST, or 24 monthly payments of 64 dollars (tax included). How much more does the payment plan cost (to the cent)?`, 68.13, "1299 × 1.13 = 1467.87; 24 × 64 = 1536.", null, 0.006),
  num(`Prices were 82% of today's prices 10 years ago. What was the average yearly inflation (percent, 1 decimal place)?`, 2, "(1/0.82)^(1/10) ≈ 1.0200.", null, 0.06),
  num(`Wages rise 2.5% a year and prices rise 3.5% a year. After 6 years, by what percent has buying power fallen (1 decimal place)?`, 5.7, "(1.025/1.035)⁶ ≈ 0.9434, a fall of about 5.7%.", null, 0.06),
  mc(`Read the graph. For 30 GB, which plan is cheaper and by how much?`, "B, by 5 dollars", ["A, by 5 dollars", "B, by 15 dollars", "they are equal"], "A = 60; B = 10 + 1.5(30) = 55.", planeDoc({ view: { xmin: 0, xmax: 50, ymin: 0, ymax: 90 }, lines: [{ m: 0, b: 60, color: "blue", label: "A", lx: 3 }, { m: 1.5, b: 10, color: "red", label: "B", lx: 40 }], step: { x: 10, y: 10 }, xlabel: "GB", ylabel: "cost" })),
  ms(`A “buy now, pay later” offer for a 900-dollar TV: no interest if paid within 12 months; otherwise 29.9% interest charged from the purchase date. Which are true? Select all.`, ["paid within 12 months, it costs 900 dollars", "missing the deadline can add hundreds of dollars", "it is always cheaper than paying cash", "reading the terms matters"], [0, 1, 3], "It is never cheaper than cash."),
  num(`A pack of 12 drinks costs 7.99 dollars; a pack of 24 costs 14.49 dollars but is 20% off this week. Find the price per drink of the better deal (to the cent).`, 0.48, "14.49 × 0.8 ÷ 24 ≈ 0.483.", null, 0.006),
  num(`A car rental is 49 dollars a day plus 0.18 dollars/km after the first 100 km free. Unlimited costs 89 dollars a day. Above how many km is unlimited cheaper (nearest km)?`, 322, "49 + 0.18(k − 100) = 89 → k ≈ 322.2.", null, 0.6),
  tf(`If inflation is 2% a year, prices roughly double in about 36 years.`, true, "Rule of 72: 72 ÷ 2 = 36."),
  num(`A family spends 220 dollars a week on groceries. With 4% food inflation, how much more will they spend in a year (52 weeks) after one year of inflation (dollars)?`, 457.6, "220 × 0.04 × 52."),
  mc(`An investment promises “guaranteed 25% returns every month”. The best response is…`, "treat it as a likely scam: such returns are not realistic", ["invest quickly before it is gone", "invest a small amount to test it", "ask friends to invest too"], "Unrealistic guaranteed returns are a hallmark of fraud."),
  num(`A coupon gives 15 dollars off a purchase of at least 75 dollars. Another gives 18% off. For a 90-dollar purchase, how much better is the better coupon (to the cent)?`, 1.2, "15 vs 16.20.", null, 0.006),
  num(`A streaming service costs 16.99 dollars a month or 169.99 dollars a year. What percent is saved by paying yearly (1 decimal place)?`, 16.6, "203.88 − 169.99 = 33.89; 33.89 ÷ 203.88.", null, 0.06),
  num(`Membership: 120 dollars a year gives 10% off all purchases. How much must you spend in a year for the membership to pay for itself (dollars)?`, 1200, "0.10s = 120."),
  mc(`Two phones: A costs 950 dollars and lasts 4 years; B costs 600 dollars and lasts 2 years. Which costs less per year?`, "A (237.50 dollars per year)", ["B (300 dollars per year)", "they are equal", "cannot tell"], "950 ÷ 4 vs 600 ÷ 2."),
  num(`An item is marked up 40% from cost and then sold at 25% off. What is the profit as a percent of cost?`, 5, "1.4 × 0.75 = 1.05."),
];
