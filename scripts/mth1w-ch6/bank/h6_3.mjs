// 6.3 Scatter Plots & Correlation — 20 hard questions
import { mc, ms, num, tf } from "./kit.mjs";
import { scatterDoc, planeDoc } from "./fig.mjs";

export const TOPIC = "6.3 Scatter Plots & Correlation";
export const Q = [
  num(`A line of best fit passes through (1.5, 92) and (7.5, 47). Find its slope.`, -7.5, "−45 ÷ 6."),
  num(`For that line (slope −7.5 through (1.5, 92)), find the y-intercept.`, 103.25, "92 = −11.25 + b."),
  num(`Data on study hours (1–10) and marks give y = 4.2x + 51. Two students differ by 3.5 hours of study. By how many marks do their predicted scores differ?`, 14.7, "4.2 × 3.5.", null, 0.006),
  num(`Using y = 4.2x + 51, how many hours does the model predict for a mark of 93?`, 10, "4.2x = 42."),
  mc(`Using y = 4.2x + 51, a student who studies 15 hours is predicted to score 114%. The best comment is…`, "extrapolation beyond 10 hours gives an impossible mark; the trend must level off", ["the student will score 114%", "the line has the wrong slope", "there is no correlation"], "Marks cannot exceed 100%."),
  num(`Estimate the y-intercept of the line of best fit shown.`, 2, "It passes through (0, 2) and (8, 10).", scatterDoc({ pts: [[1, 3.4], [2, 3.7], [3, 5.2], [4, 5.8], [5, 7.3], [6, 7.6], [7, 9.4], [8, 9.8]], view: { xmin: 0, xmax: 9, ymin: 0, ymax: 12 }, step: { x: 1, y: 2 }, line: { m: 1, b: 2 } })),
  ms(`Which data sets would you expect to show a strong correlation? Select all.`, ["age of a tree and number of rings", "outside temperature and heating bill", "a student's birthday and their mark", "distance driven and fuel used"], [0, 1, 3], "Birthday and mark are unrelated."),
  mc(`Countries with more TVs per person have longer life expectancy. The best explanation is…`, "wealth: richer countries have more TVs and better health care", ["TVs make people live longer", "long lives make people buy TVs", "it is a measurement error"], "A lurking variable."),
  num(`Maya leaves home walking at 90 m/min. Ten minutes later her brother leaves cycling at 240 m/min on the same path. How many minutes after Maya leaves does he catch her?`, 16, "90t = 240(t − 10) → 150t = 2400."),
  num(`A runner's distance–time graph goes from (0, 0) to (12, 3) and then to (30, 6) (minutes, km). Find the average speed for the whole run in km/h.`, 12, "6 km in 0.5 h."),
  num(`For that run, how much faster (km/h) was the first part than the second?`, 5, "3/0.2 = 15 km/h; 3/0.3 = 10 km/h."),
  tf(`If the correlation coefficient is −0.95, the variables have a strong relationship.`, true, "Strength depends on |r|; the sign gives direction."),
  num(`Find the slope of the segment between 20 and 30 minutes (m/min), where a negative value means returning.`, -150, "From 1500 m down to 0 in 10 min.", planeDoc({ view: { xmin: 0, xmax: 40, ymin: 0, ymax: 1800 }, segs: [{ pts: [[0, 0], [10, 1500], [20, 1500], [30, 0]] }], step: { x: 5, y: 300 }, xlabel: "time (min)", ylabel: "m from home" })),
  mc(`Two lines of best fit are y = 3x + 10 and y = 3.4x + 8 for data with 0 ≤ x ≤ 6. Where do their predictions differ most within the data?`, "at x = 0", ["at x = 5", "at x = 6", "they never differ"], "Difference |0.4x − 2|: 2 at x = 0, 0.4 at x = 6."),
  num(`Arm span (cm) is modelled by y = 0.98x + 3 where x is height. Predict the arm span of a 165 cm student (1 decimal place).`, 164.7, "161.7 + 3.", null, 0.06),
  mc(`A researcher finds that cities with more coffee shops have higher average incomes. Opening more coffee shops will…`, "not necessarily raise incomes — the correlation may reflect that wealthier areas attract coffee shops", ["definitely raise incomes", "lower incomes", "prove causation"], "Reverse causation or a lurking variable."),
  num(`A line of best fit is y = mx + 12 and passes through (5, 37). Find m.`, 5, "37 = 5m + 12."),
  num(`Data points (2, 9), (4, 13), (6, 18), (8, 21). Using the line through the first and last points, predict y at x = 5.`, 15, "m = 12/6 = 2; y = 2x + 5 → 15."),
  ms(`Which make a scatter-plot conclusion more trustworthy? Select all.`, ["a larger random sample", "points spanning a wide range of x-values", "checking for lurking variables", "drawing the line through the first two points"], [0, 1, 2], "The line should use the whole trend."),
  num(`A bus leaves at 8:00 and travels 30 km at 60 km/h, waits 15 min, then travels 45 km at 90 km/h. At how many minutes after 8:00 does it arrive?`, 75, "30 + 15 + 30 min."),
];
