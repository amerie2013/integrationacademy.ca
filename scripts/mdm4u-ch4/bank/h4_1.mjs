// 4.1 Continuous Random Variables — 20 hard questions
import { mc, ms, num, tf } from "./kit.mjs";
import { barsSvg, tableSvg, normalSvg } from "../../mdm4u/figs.mjs";

const sdOf = (xs) => { const m = xs.reduce((a, b) => a + b, 0) / xs.length; return Math.sqrt(xs.reduce((a, b) => a + (b - m) ** 2, 0) / (xs.length - 1)); };
const r = (v, k = 2) => Math.round(v * 10 ** k) / 10 ** k;
const g = (m, f) => { const n = f.reduce((a, b) => a + b, 0), mu = m.reduce((s, x, i) => s + x * f[i], 0) / n; return { n, mu, s: Math.sqrt(m.reduce((a, x, i) => a + f[i] * (x - mu) ** 2, 0) / (n - 1)) }; };
const T = tableSvg([["mass (g)", "140–150", "150–160", "160–170", "170–180", "180–190"], ["frequency", "4", "11", "19", "12", "4"]], { rowHead: true });

export const TOPIC = "4.1 Continuous Random Variables";
export const Q = [
  num("Estimate the mean mass from the table (2 decimals).", r(g([145, 155, 165, 175, 185], [4, 11, 19, 12, 4]).mu), "Midpoints 145, …, 185.", T, 0.01),
  num("Estimate the standard deviation of the masses in the table (2 decimals).", r(g([145, 155, 165, 175, 185], [4, 11, 19, 12, 4]).s), "Use the midpoints and n − 1.", T, 0.05),
  num("Estimate P(mass ≥ 170 g) from the table.", 0.32, "16/50.", T, 0.001),
  num("The masses are regrouped in 20-g intervals 140–160, 160–180, 180–200. What is the frequency of 160–180?", 31, "19 + 12.", T),
  num("Data: 12, 15, 15, 18, 25. Find the sample standard deviation (2 decimals).", r(sdOf([12, 15, 15, 18, 25])), "Mean 17.", null, 0.01),
  num("A data set has n = 10, x̄ = 50 and Σ(x − x̄)² = 360. Find s.", r(Math.sqrt(40)), "√(360/9).", null, 0.01),
  num("Two data sets: A has s = 4 (n = 20); every value of A is converted with y = 2.5x − 10. Find s for the new data.", 10, "Only the multiplier affects spread."),
  num("A waiting time is equally likely anywhere from 2 to 14 minutes. Find P(|X − 8| < 3).", 0.5, "From 5 to 11: 6/12.", null, 0.001),
  num("A continuous variable has the density shape of a triangle from 0 to 4 with its peak at 4 (height 0.5). Find P(X < 2).", 0.25, "Area of the small triangle: ½(2)(0.25).", null, 0.001),
  num("For the same triangular density (0 to 4, peak at 4), find P(X > 3).", 1 - 0.5625, "1 − ½(3)(0.375).", null, 0.001),
  num("Use the histogram of 80 commute times: estimate the median interval's lower boundary (the interval containing the 40th value).", 20, "Cumulative: 8, 26, 51 … the 40th is in 20–30.", barsSvg([8, 18, 25, 19, 10], { labels: ["0–10", "10–20", "20–30", "30–40", "40–50"], histogram: true, top: true })),
  num("Using the same histogram, estimate P(commute > 30 min).", 29 / 80, "(19 + 10)/80.", barsSvg([8, 18, 25, 19, 10], { labels: ["0–10", "10–20", "20–30", "30–40", "40–50"], histogram: true, top: true }), 0.002),
  num("The curve shown has total area 1. The shaded area is 0.6826; the curve is symmetric about 50. Find the area to the right of 60.", r((1 - 0.6826) / 2, 4), "(1 − 0.6826)/2.", normalSvg({ mu: 50, s: 10, shade: [[40, 60, "green"]] }), 0.0005),
  num("A relative-frequency histogram of continuous data has interval width 5 and bar heights 0.02, 0.06, 0.08, 0.04 (per unit). Find the total area.", 1, "5 × (0.02 + 0.06 + 0.08 + 0.04).", null, 0.001),
  mc("A data set has mean 40 and s = 0. What must be true?", "every value equals 40", ["the data are normal", "there are no values", "the median is 0"], "No spread at all."),
  mc("Which change reduces the standard deviation?", "removing an extreme outlier", ["adding 10 to every value", "doubling every value", "adding a value far from the mean"], "Outliers inflate spread."),
  ms("Which statements about continuous random variables are true? Select all.", ["P(a ≤ X ≤ b) = P(a < X < b)", "P(X = a) = 0", "probabilities are areas under a curve", "the total area under the density is 1", "every value has the same probability as in a discrete case"], [0, 1, 2, 3], "Single values have probability 0."),
  tf("Measurements recorded to the nearest second still come from a continuous variable.", true, "Rounding does not change the underlying variable."),
  tf("Doubling every value in a data set doubles its standard deviation.", true, "Spread scales."),
  num("A data set of 6 values has mean 20 and s = 4. A seventh value of 20 is added. Find the new s (3 decimals).", r(Math.sqrt((16 * 5) / 6), 3), "Σ(x − x̄)² stays 80; divide by 6.", null, 0.002),
];
