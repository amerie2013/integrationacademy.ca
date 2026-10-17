// 6.4 The Mathematical Modelling Process — 20 easy + 20 medium questions
import { mc, ms, num, tf } from "./kit.mjs";
import { scatterDoc } from "./fig.mjs";

export const E = [
  mc(`The first stage of the modelling process is to…`, "understand the problem", ["refine the model", "write the final report", "draw a graph"], "Know what is being asked first."),
  mc(`Something you take as true to make a problem manageable is a(n)…`, "assumption", ["variable", "outlier", "conclusion"], "e.g. the price stays the same."),
  mc(`The table 4, 7, 10, 13 (equal x-steps) suggests a…`, "linear model", ["exponential model", "quadratic model", "no model"], "Constant difference 3."),
  mc(`The table 3, 6, 12, 24 (equal x-steps) suggests a(n)…`, "exponential model", ["linear model", "quadratic model", "constant model"], "Constant ratio 2."),
  num(`A model is C = 15n + 40. Find C when n = 6.`, 130, "90 + 40."),
  num(`A model is P = 100(2)^t. Find P when t = 3.`, 800, "100 × 8."),
  tf(`After building a model, you should check whether its answers make sense.`, true, "Interpret and check."),
  num(`A plant grows 2 cm per week from 5 cm. What height does the model give after 8 weeks?`, 21, "5 + 2(8)."),
  mc(`Improving a model after testing it is called…`, "refining", ["sampling", "interpolating", "rounding"], "Refine and communicate."),
  num(`A taxi charges 3.50 dollars plus 2 dollars per km. What does a 9 km ride cost (dollars)?`, 21.5, "3.50 + 18."),
  tf(`Every model works for all possible input values.`, false, "Models have a limited domain."),
  num(`What are the first differences of 20, 17, 14, 11? (Give the common difference.)`, -3, "Each term is 3 less."),
  num(`What is the common ratio of 1000, 500, 250, 125?`, 0.5, "Each term is half the previous."),
  mc(`A model predicts a candle's height will be −4 cm. This means…`, "the model is being used outside its domain", ["the candle grew", "the model is perfect", "the data are wrong"], "Heights cannot be negative."),
  num(`A savings account starts at 200 dollars and you add 25 dollars each week. How much after 10 weeks (dollars)?`, 450, "200 + 250."),
  mc(`Which is a variable in a model for the cost of a party?`, "the number of guests", ["the word “party”", "the date the model was written", "the colour of the invitations"], "A quantity that changes."),
  num(`A population of 50 doubles every year. How large is it after 4 years?`, 800, "50 × 2⁴."),
  tf(`Constant second differences suggest a quadratic model.`, true, "e.g. 1, 4, 9, 16."),
  num(`A phone loses 8% battery per hour starting at 100%. What does a linear model predict after 5 hours (%)?`, 60, "100 − 40."),
  mc(`The last stage of modelling usually includes…`, "communicating the result and its limitations", ["choosing the question", "collecting the first data", "ignoring the assumptions"], "Report what you found and how reliable it is."),
];

export const M = [
  num(`A pool contains 2000 L and is filled at 450 L/h. How many hours to reach 11 000 L?`, 20, "9000 ÷ 450."),
  num(`A car worth 24 000 dollars loses 15% of its value per year. What is it worth after 2 years (dollars)?`, 17340, "24 000 × 0.85²."),
  num(`Bacteria: 300 at t = 0, 900 at t = 1, 2700 at t = 2. Predict t = 4.`, 24300, "Ratio 3: 300 × 3⁴."),
  mc(`Which model fits x: 0, 1, 2, 3 and y: 2, 3, 6, 11?`, "quadratic", ["linear", "exponential", "none"], "First differences 1, 3, 5; second differences 2, 2."),
  num(`A gym charges a joining fee plus a monthly fee. 3 months cost 125 dollars and 7 months cost 225 dollars. What is the monthly fee (dollars)?`, 25, "100 ÷ 4."),
  num(`For that gym (25 dollars per month; 3 months = 125 dollars), what is the joining fee (dollars)?`, 50, "125 − 75."),
  ms(`A model predicts next month's ice-cream sales from this month's. Which are reasonable assumptions? Select all.`, ["the weather will be similar", "prices will not change much", "the store stays open the same hours", "sales will be negative"], [0, 1, 2], "Negative sales are impossible."),
  num(`The model T = 22 + 70(0.9)^t gives a drink's temperature (°C) after t minutes. Find T at t = 0.`, 92, "22 + 70."),
  num(`Using T = 22 + 70(0.9)^t, what temperature does the drink approach after a very long time (°C)?`, 22, "(0.9)^t → 0."),
  mc(`A linear model for a cooling drink predicts 5 °C after an hour in a 21 °C room. You should…`, "refine the model so it levels off at room temperature", ["accept the prediction", "use more decimal places", "change the room temperature"], "The prediction is physically impossible."),
  num(`A school uses 3 buses for every 120 students on a trip. How many buses are needed for 410 students?`, 11, "410 ÷ 40 = 10.25 → round up to 11."),
  tf(`If the ratios of consecutive terms are constant, the data are best modelled by a linear relation.`, false, "Constant ratios → exponential."),
  num(`Estimate the y-value at x = 8 using the line shown.`, 52, "The line is y = 6x + 4.", scatterDoc({ pts: [[1, 9], [2, 17], [3, 21], [4, 29], [5, 33], [6, 41]], view: { xmin: 0, xmax: 10, ymin: 0, ymax: 60 }, step: { x: 1, y: 10 }, line: { m: 6, b: 4 } })),
  mc(`The prediction at x = 8 in the previous question is…`, "an extrapolation", ["an interpolation", "a census", "an assumption"], "The data go only to x = 6."),
  num(`A population is 5000 and grows by 4% per year. Estimate it after 3 years (nearest whole number).`, 5624, "5000 × 1.04³ ≈ 5624.3."),
  num(`A model for fundraising profit is P = 6n − 150 (n items sold). How many items must be sold to break even?`, 25, "6n = 150."),
  mc(`Two models fit a few data points equally well. To choose between them you should…`, "collect more data, especially outside the current range", ["pick the one with bigger numbers", "average the two equations", "always choose the linear one"], "More data reveals which trend continues."),
  num(`A household uses 12 L of water per minute in the shower; 4 people shower 6 minutes daily. Using this model, how many litres per week?`, 2016, "12 × 6 × 4 × 7."),
  num(`An exponential model is y = a(1.5)^x with y = 135 at x = 2. Find a.`, 60, "135 ÷ 2.25."),
  ms(`Which are signs that a model needs refining? Select all.`, ["predictions far from new data", "impossible values such as negative lengths", "errors growing as x increases", "it uses a variable"], [0, 1, 2], "Every model uses variables."),
];
