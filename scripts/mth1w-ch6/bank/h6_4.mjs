// 6.4 The Mathematical Modelling Process — 20 hard questions
import { mc, ms, num, tf } from "./kit.mjs";
import { scatterDoc } from "./fig.mjs";

export const TOPIC = "6.4 The Mathematical Modelling Process";
export const Q = [
  num(`T-shirts sell 300 at 12 dollars; each 1-dollar increase loses 15 sales. What price gives the greatest revenue (dollars)?`, 16, "R = (12 + x)(300 − 15x) is greatest at x = 4: 16 dollars × 240 = 3840."),
  num(`For that T-shirt model, what is the greatest revenue (dollars)?`, 3840, "16 × 240."),
  num(`A culture grows from 800 to 1800 cells in 2 hours with a constant hourly ratio. What is the hourly ratio?`, 1.5, "800r² = 1800 → r² = 2.25."),
  num(`With ratio 1.5 per hour from 800 cells, after how many whole hours does the culture first exceed 10 000 cells?`, 7, "800(1.5)^6 ≈ 9113; 800(1.5)^7 ≈ 13 669."),
  num(`A tea cools as T = 21 + 74(0.8)^t (°C, minutes). Find the temperature after 5 minutes (1 decimal place).`, 45.2, "74 × 0.32768 ≈ 24.2; + 21.", null, 0.06),
  num(`Using T = 21 + 74(0.8)^t, after how many whole minutes does the tea first drop below 30 °C?`, 10, "74(0.8)^t < 9 → (0.8)^t < 0.1216: t = 10 gives 0.107."),
  mc(`Model A (linear) and model B (exponential) both match two data points. For predictions far in the future…`, "they can differ greatly; exponential models grow much faster", ["they always agree", "linear grows faster", "neither can predict"], "Exponential growth eventually overtakes any line."),
  num(`Phone plan data: 200 min costs 32 dollars, 500 min costs 50 dollars. Assuming a linear model, what does 800 min cost (dollars)?`, 68, "Rate 0.06 per min; fee 20: 20 + 48."),
  num(`A city of 120 000 grows by 2.5% per year. Estimate the population after 10 years (nearest thousand).`, 154000, "120 000 × 1.025¹⁰ ≈ 153 610.", null, 600),
  ms(`An estimate of the number of pizzas eaten by a school in a year needs which assumptions? Select all.`, ["number of students", "how often a typical student eats pizza at school", "slices per pizza", "the colour of pizza boxes"], [0, 1, 2], "Box colour does not affect the count."),
  num(`A model for a ball's height is h = 1.5 + 14t − 4.9t² (m, s). Find h at t = 2 (1 decimal place).`, 9.9, "1.5 + 28 − 19.6.", null, 0.06),
  tf(`For the ball model h = 1.5 + 14t − 4.9t², a prediction at t = 5 s (h ≈ −51 m) shows the model's domain ends when the ball lands.`, true, "Height cannot be negative: the domain stops at landing."),
  num(`Estimate where the curve shown crosses y = 50 (to the nearest whole x).`, 6, "The curve is y = 3(1.6)^x; 3(1.6)^6 ≈ 50.3, so x ≈ 6.", scatterDoc({ pts: [[0, 3], [1, 4.8], [2, 7.7], [3, 12.3], [4, 19.7], [5, 31.5]], view: { xmin: 0, xmax: 8, ymin: 0, ymax: 80 }, step: { x: 1, y: 10 }, curve: (x) => 3 * 1.6 ** x })),
  num(`A loan of 1000 dollars grows at 8% per year compounded yearly. How much is owed after 5 years (dollars, 2 decimal places)?`, 1469.33, "1000 × 1.08⁵.", null, 0.006),
  mc(`A model of tree height h = 0.6t + 1.2 (m, years) fits trees aged 1–15. Why is it unreliable for t = 200?`, "trees stop growing at a maximum height, so the linear trend cannot continue", ["the slope is too small", "trees shrink", "the intercept is wrong"], "Growth levels off."),
  num(`Water drains from a tank so that the volume halves every 3 minutes, starting at 640 L. How much remains after 12 minutes (L)?`, 40, "Four halvings: 640 ÷ 16."),
  num(`A fundraiser's costs are 240 dollars plus 3 dollars per item; items sell for 8 dollars. How many items must be sold for a profit of 400 dollars?`, 128, "5n − 240 = 400."),
  num(`Two phone plans: A = 0.10m + 25, B = 0.15m + 15 (dollars). For how many minutes do they cost the same?`, 200, "0.05m = 10."),
  mc(`When a model's errors grow larger as x increases, the most likely problem is…`, "the wrong type of model (e.g. linear instead of curved)", ["too much data", "rounding the final answer", "using a scatter plot"], "A systematic pattern in errors means the form is wrong."),
  num(`An exponential model y = a·b^x passes through (0, 250) and (2, 160). Find b.`, 0.8, "250b² = 160 → b² = 0.64."),
];
