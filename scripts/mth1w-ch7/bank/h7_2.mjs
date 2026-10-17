// 7.2 Appreciation & Depreciation — 20 hard questions (money written as "dollars")
import { mc, ms, num, tf } from "./kit.mjs";
import { planeDoc } from "./fig.mjs";

export const TOPIC = "7.2 Appreciation & Depreciation";
export const Q = [
  num(`A car bought for 38 000 dollars is worth 21 935 dollars after 3 years. Find the yearly depreciation rate (%, nearest whole number).`, 17, "(1 − r)³ = 0.5772 → 1 − r ≈ 0.833.", null, 0.6),
  num(`A condo appreciates 4.5% per year. After how many whole years does its value first increase by at least 50%?`, 10, "1.045⁹ ≈ 1.486; 1.045¹⁰ ≈ 1.553."),
  num(`A 1500-dollar laptop: straight-line loses 300 dollars per year; percentage loses 30% per year. In which year is the straight-line value first lower than the percentage value?`, 4, "Year 3: 600 vs 514.50; year 4: 300 vs 360.15."),
  num(`A value rises 15% and then falls 15%. What single percent change gives the same result? (Negative for a loss; 2 decimal places.)`, -2.25, "1.15 × 0.85 = 0.9775.", null, 0.006),
  num(`A rare card triples in value in 14 years. Find the yearly appreciation rate (%, 1 decimal place).`, 8.2, "3^(1/14) ≈ 1.0816.", null, 0.06),
  num(`A truck worth 52 000 dollars depreciates 18% a year. How much value is lost during the third year (nearest dollar)?`, 6294, "Value after 2 years: 52 000 × 0.82² = 34 964.80; 0.18 × 34 964.80 ≈ 6293.66.", null, 0.6),
  mc(`Investment A gains 6% a year; investment B gains a fixed 400 dollars a year. Both start at 5000 dollars. Which is worth more after 20 years?`, "A (about 16 036 dollars vs 13 000 dollars)", ["B", "they are equal", "cannot tell"], "5000 × 1.06²⁰ ≈ 16 035.68; 5000 + 8000 = 13 000."),
  num(`A painting's value V = 2400(1.05)ᵗ. A print's value P = 3600(0.92)ᵗ. After how many whole years is the painting first worth more?`, 4, "t = 3: 2778.30 vs 2803.28; t = 4: 2917.22 vs 2579.01."),
  ms(`A car loses 20% of its value each year. Which are true? Select all.`, ["after 1 year it keeps 80% of its value", "after 2 years it keeps 60% of its value", "after 2 years it keeps 64% of its value", "it loses more dollars in year 1 than in year 2"], [0, 2, 3], "0.8² = 0.64, and year-2 loss is 20% of a smaller value."),
  num(`Read the graph: the value halves every how many years?`, 4, "It falls from 8000 to 4000 at t = 4 and to 2000 at t = 8.", planeDoc({ view: { xmin: 0, xmax: 12, ymin: 0, ymax: 9000 }, curves: [{ f: (t) => 8000 * 0.5 ** (t / 4), color: "red" }], points: [{ x: 0, y: 8000 }, { x: 4, y: 4000 }, { x: 8, y: 2000 }], step: { x: 1, y: 1000 }, xlabel: "years", ylabel: "value" })),
  num(`A value decreases by 10% each year for 5 years. What single percent decrease over the 5 years is that (1 decimal place)?`, 41, "0.9⁵ ≈ 0.5905 → 40.95%.", null, 0.06),
  tf(`A house that appreciates 3% a year doubles in value in about 24 years.`, true, "72 ÷ 3 = 24; 1.03²⁴ ≈ 2.03."),
  num(`Machine X (12 000 dollars) depreciates 1500 dollars a year; machine Y (10 000 dollars) depreciates 10% a year. After how many whole years is X first worth less than Y?`, 4, "t = 3: 7500 vs 7290; t = 4: 6000 vs 6561."),
  num(`A coin's value went from 120 dollars to 150 dollars to 180 dollars in two years. What was the average yearly growth rate (%, 1 decimal place)?`, 22.5, "√(180/120) = √1.5 ≈ 1.2247.", null, 0.06),
  mc(`Why do homes in some cities appreciate faster than in others?`, "demand (jobs, population growth) is higher where supply of housing is limited", ["homes are built with better wood", "inflation does not apply", "depreciation only applies to cars"], "Supply and demand."),
  num(`A car is worth 15 000 dollars after 4 years of 12% yearly depreciation. What did it cost new (nearest dollar)?`, 25013, "15 000 ÷ 0.88⁴ ≈ 25 012.70.", null, 1),
  num(`A painting appreciates 8% a year. What percent of its current value will it gain over the next 3 years (1 decimal place)?`, 26, "1.08³ ≈ 1.2597.", null, 0.06),
  num(`A phone loses 40% in year 1 and 25% in each later year. A 1000-dollar phone is worth how much after 3 years (dollars)?`, 337.5, "1000 × 0.6 × 0.75²."),
  mc(`A company claims its product “holds 90% of its value for 5 years”. What yearly depreciation rate is that, approximately?`, "about 2.1%", ["about 10%", "about 18%", "about 0.9%"], "0.9^(1/5) ≈ 0.979."),
  num(`An asset grows at 5% a year for 4 years, then falls 5% a year for 4 years. What percent of the original value is left (1 decimal place)?`, 99, "(1.05 × 0.95)⁴ = 0.9975⁴ ≈ 0.990.", null, 0.06),
];
