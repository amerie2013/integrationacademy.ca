// 7.2 Appreciation & Depreciation — 20 easy + 20 medium questions (money written as "dollars")
import { mc, ms, num, tf } from "./kit.mjs";
import { planeDoc } from "./fig.mjs";

export const E = [
  mc(`An increase in value over time is called…`, "appreciation", ["depreciation", "inflation", "interest"], "Appreciate = gain value."),
  mc(`A decrease in value over time is called…`, "depreciation", ["appreciation", "a discount", "a deduction"], "Cars and phones depreciate."),
  num(`What is the growth factor for a 6% increase?`, 1.06, "1 + 0.06."),
  num(`What is the decay factor for a 25% decrease?`, 0.75, "1 − 0.25."),
  num(`A 500-dollar bike loses 20% of its value in a year. What is it worth (dollars)?`, 400, "500 × 0.8."),
  num(`A 1000-dollar coin collection gains 10% in a year. What is it worth (dollars)?`, 1100, "1000 × 1.1."),
  num(`A 200-dollar item appreciates 5% per year for 2 years. What is it worth (dollars)?`, 220.5, "200 × 1.05²."),
  num(`A 1000-dollar laptop depreciates 30% per year for 2 years. What is it worth (dollars)?`, 490, "1000 × 0.7²."),
  mc(`Which usually depreciates?`, "a new car", ["land", "a rare collectible", "a house in a growing city"], "Wear, mileage and new models."),
  mc(`Which usually appreciates?`, "a rare stamp in good condition", ["a smartphone", "a pair of sneakers you wear every day", "a laptop"], "Scarcity and demand."),
  num(`An item rises from 50 dollars to 60 dollars. What is the percent increase?`, 20, "10 ÷ 50."),
  num(`An item falls from 80 dollars to 60 dollars. What is the percent decrease?`, 25, "20 ÷ 80."),
  tf(`A 10% increase followed by a 10% decrease returns to the original value.`, false, "1.1 × 0.9 = 0.99."),
  num(`Straight-line: a 6000-dollar machine loses 1000 dollars per year. What is it worth after 3 years (dollars)?`, 3000, "6000 − 3000."),
  mc(`Which formula models 15% depreciation per year?`, "V = V₀(0.85)ⁿ", ["V = V₀(0.15)ⁿ", "V = V₀(1.15)ⁿ", "V = V₀ − 0.15n"], "Decay factor 1 − 0.15."),
  tf(`With percentage depreciation, the dollar amount lost each year gets smaller.`, true, "It is a percent of a smaller value each year."),
  num(`A painting worth 3000 dollars appreciates 4% this year. How many dollars does it gain?`, 120, "0.04 × 3000."),
  num(`Write 0.92 as a percent decrease.`, 8, "1 − 0.92 = 0.08."),
  mc(`A house price goes up because more people want to live in the area. This is caused by…`, "increased demand", ["more wear", "new technology", "inflation of the house's size"], "Demand pushes prices up."),
  num(`Using the rule of 72, about how many years does it take a value growing 6% a year to double?`, 12, "72 ÷ 6."),
];

export const M = [
  num(`A 32 000-dollar car depreciates 15% per year. What is it worth after 3 years (nearest dollar)?`, 19652, "32 000 × 0.85³ = 19 652.", null, 0.6),
  num(`A house worth 450 000 dollars appreciates 4% per year. What is it worth after 5 years (nearest dollar)?`, 547494, "450 000 × 1.04⁵ ≈ 547 493.81.", null, 1),
  num(`An item worth 800 dollars is worth 648 dollars after 2 years of constant depreciation. What is the yearly rate (%)?`, 10, "(1 − r)² = 0.81 → 1 − r = 0.9."),
  num(`A stock rises 20% and then falls 20%. What is the overall percent change? (Negative for a loss.)`, -4, "1.2 × 0.8 = 0.96."),
  num(`Straight-line: a 9000-dollar truck is worth 0 after 6 years. How much does it lose each year (dollars)?`, 1500, "9000 ÷ 6."),
  num(`Compare after 2 years: a 10 000-dollar machine losing 2000 dollars a year vs losing 20% a year. How much more is the percentage one worth (dollars)?`, 400, "6400 − 6000."),
  mc(`Which graph shows percentage depreciation?`, "a curve that falls steeply at first and then flattens", ["a straight line falling to zero", "a curve rising faster and faster", "a horizontal line"], "Exponential decay."),
  num(`A phone loses 35% of its value each year. After how many whole years is it worth less than one quarter of its price?`, 4, "0.65³ ≈ 0.275; 0.65⁴ ≈ 0.179."),
  ms(`Which statements are true? Select all.`, ["appreciation uses a factor greater than 1", "depreciation uses a factor between 0 and 1", "a 50% loss then a 50% gain returns to the start", "percent changes compound"], [0, 1, 3], "0.5 × 1.5 = 0.75, not 1."),
  num(`A collectible doubles in value in 9 years. Using the rule of 72, what is its approximate yearly rate (%)?`, 8, "72 ÷ 9."),
  num(`Read the graph: what is the value after 2 years (dollars)?`, 6400, "The curve starts at 10 000 and loses 20% a year: 10 000 × 0.8².", planeDoc({ view: { xmin: 0, xmax: 6, ymin: 0, ymax: 11000 }, curves: [{ f: (t) => 10000 * 0.8 ** t, color: "red" }], points: [{ x: 0, y: 10000 }, { x: 2, y: 6400 }], step: { x: 1, y: 2000 }, xlabel: "years", ylabel: "value" })),
  tf(`If a car loses 15% each year, its value will eventually reach exactly 0 dollars.`, false, "A percentage loss never reaches exactly zero."),
  num(`A 2400-dollar computer depreciates 25% per year. How much value does it lose in the second year (dollars)?`, 450, "Year 1 value 1800; 25% of 1800."),
  num(`A painting bought for 5000 dollars is worth 7200 dollars after 2 years. Find the yearly appreciation rate (%).`, 20, "(1 + r)² = 1.44."),
  mc(`Why do many people buy cars that are 2–3 years old?`, "the steepest depreciation has already happened", ["older cars appreciate", "new cars cannot be insured", "used cars have no depreciation"], "Most value is lost in the first years."),
  num(`An antique worth 1500 dollars appreciates 3% per year. What is it worth after 10 years (to the cent)?`, 2015.87, "1500 × 1.03¹⁰.", null, 0.006),
  num(`A boat loses 12% of its value each year. What percent of its original value remains after 3 years (1 decimal place)?`, 68.1, "0.88³ ≈ 0.6815.", null, 0.06),
  mc(`A value increases by 25% one year and decreases by 20% the next. The overall change is…`, "0%", ["+5%", "−5%", "+45%"], "1.25 × 0.8 = 1."),
  num(`Straight-line depreciation from 4500 dollars to 900 dollars over 6 years. What is the yearly loss (dollars)?`, 600, "3600 ÷ 6."),
  num(`An investment of 2000 dollars grows 7% a year. How much does it gain in total over 4 years (to the cent)?`, 621.59, "2000 × 1.07⁴ − 2000.", null, 0.006),
];
