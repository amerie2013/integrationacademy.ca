// 4.1 Continuous Random Variables — 20 easy + 20 medium questions
import { mc, ms, num, tf } from "./kit.mjs";
import { barsSvg, tableSvg, normalSvg } from "../../mdm4u/figs.mjs";

const sdOf = (xs) => { const m = xs.reduce((a, b) => a + b, 0) / xs.length; return Math.sqrt(xs.reduce((a, b) => a + (b - m) ** 2, 0) / (xs.length - 1)); };
const mean = (xs) => xs.reduce((a, b) => a + b, 0) / xs.length;
const g = (m, f) => { const n = f.reduce((a, b) => a + b, 0), mu = m.reduce((s, x, i) => s + x * f[i], 0) / n; return { n, mu, s: Math.sqrt(m.reduce((a, x, i) => a + f[i] * (x - mu) ** 2, 0) / (n - 1)) }; };
const T1 = tableSvg([["interval", "0–10", "10–20", "20–30", "30–40"], ["frequency", "6", "14", "12", "8"]], { rowHead: true });

export const E = [
  mc("Which variable is continuous?", "the time to run 400 m", ["the number of laps", "the number of runners", "a runner's bib number"], "Measured."),
  mc("Which variable is discrete?", "the number of cars in a lot", ["the length of a car", "the mass of a car", "the speed of a car"], "Counted."),
  num("What is the midpoint of the interval 25–30?", 27.5, "(25 + 30)/2.", null, 0.001),
  num("Find the mean of 8, 12, 10, 14.", 11, "44/4."),
  num("Find the mean of 2.5, 3.5, 4.0, 6.0.", 4, "16/4."),
  num("For a continuous random variable, what is P(X = 3)?", 0, "A single value has no area."),
  num("A time is equally likely anywhere from 0 to 10 minutes. Find P(X < 4).", 0.4, "4/10.", null, 0.001),
  num("A time is equally likely anywhere from 0 to 20 minutes. Find P(5 < X < 9).", 0.2, "4/20.", null, 0.001),
  num("Read the table: how many values are in the sample?", 40, "6 + 14 + 12 + 8.", T1),
  num("Read the table: estimate P(X ≥ 20).", 0.5, "20/40.", T1, 0.001),
  num("Read the histogram: what is the frequency of the 10–15 interval?", 9, "The bar height.", barsSvg([4, 9, 15, 7], { labels: ["5–10", "10–15", "15–20", "20–25"], histogram: true, top: true })),
  num("What is the total area under any probability density curve?", 1, "It is a probability model."),
  tf("The bars of a histogram of continuous data touch each other.", true, "The intervals are continuous."),
  tf("A frequency polygon joins the midpoints of the tops of the histogram bars.", true, "Definition."),
  tf("For a continuous variable, P(X ≤ 5) is larger than P(X < 5).", false, "P(X = 5) = 0."),
  tf("The standard deviation measures spread.", true, "Typical distance from the mean."),
  ms("Which are continuous random variables? Select all.", ["the mass of an apple", "the number of apples in a box", "the time to bake a cake", "the temperature at noon", "the number of students absent"], [0, 2, 3], "Measured quantities."),
  mc("Which formula gives the sample standard deviation?", "$\\sqrt{\\dfrac{\\sum(x-\\bar x)^2}{n-1}}$", ["$\\dfrac{\\sum(x-\\bar x)}{n}$", "$\\dfrac{\\sum x}{n}$", "$\\sqrt{\\sum x^2}$"], "Divide by n − 1."),
  num("Find the standard deviation of 4, 4, 4, 4.", 0, "No spread."),
  num("A table uses the intervals 0–5, 5–10, 10–15. What is the interval width?", 5, "Upper − lower boundary."),
];

export const M = [
  num("Find the sample standard deviation of 3, 5, 7. (2 decimals)", 2, "Mean 5; Σ = 8; √(8/2).", null, 0.01),
  num("Find the sample standard deviation of 10, 12, 14, 16, 18. (2 decimals)", Math.round(sdOf([10, 12, 14, 16, 18]) * 100) / 100, "Mean 14; Σ = 40; √(40/4).", null, 0.01),
  num("Find the sample standard deviation of 2.1, 2.5, 3.0, 3.6. (3 decimals)", Math.round(sdOf([2.1, 2.5, 3.0, 3.6]) * 1000) / 1000, "Use technology or the formula.", null, 0.002),
  num("Estimate the mean from the grouped table. (2 decimals)", Math.round(g([5, 15, 25, 35], [6, 14, 12, 8]).mu * 100) / 100, "Σfm/n with midpoints 5, 15, 25, 35.", T1, 0.01),
  num("Estimate the standard deviation from the grouped table. (2 decimals)", Math.round(g([5, 15, 25, 35], [6, 14, 12, 8]).s * 100) / 100, "√(Σf(m − x̄)²/(n − 1)).", T1, 0.02),
  num("A random time is equally likely anywhere from 5 to 25 minutes. Find P(X > 18).", 0.35, "(25 − 18)/20.", null, 0.001),
  num("A random time is equally likely anywhere from a to 30 minutes, and P(X < 12) = 0.4. Find a.", 0, "(12 − a)/(30 − a) = 0.4."),
  num("Read the histogram of 50 values: estimate P(X < 20).", 0.36, "(6 + 12)/50.", barsSvg([6, 12, 17, 10, 5], { labels: ["0–10", "10–20", "20–30", "30–40", "40–50"], histogram: true, top: true }), 0.001),
  num("The data 6, 9, 10, 15 have mean 10. Find Σ(x − x̄)².", 42, "16 + 1 + 0 + 25."),
  num("Add 5 to every value of a data set with standard deviation 3. What is the new standard deviation?", 3, "Shifting does not change spread."),
  num("Multiply every value of a data set with standard deviation 3 by 4. What is the new standard deviation?", 12, "Spread scales by 4."),
  mc("A histogram with very wide intervals usually…", "hides the shape of the distribution", ["shows every detail", "has more bars", "changes the mean"], "Too few bars."),
  mc("A histogram with very narrow intervals and a small sample usually…", "looks jagged and irregular", ["looks smooth", "has fewer bars", "has area greater than 1"], "Few values per bar."),
  tf("As the sample size grows and the intervals narrow, a frequency polygon approaches a smooth curve.", true, "It approximates the distribution."),
  tf("A model curve is needed partly because we cannot measure every member of a population.", true, "We sample."),
  ms("Which are challenges of finding a continuous frequency distribution? Select all.", ["we cannot record every possible value", "measurements have limited precision", "probabilities of single values are 0", "the data are always discrete", "samples vary"], [0, 1, 2, 4], "Continuous data are measured."),
  num("Read the polygon table: the midpoints are 12, 17, 22, 27 with frequencies 3, 8, 6, 3. Estimate the mean.", 19.25, "385/20.", tableSvg([["midpoint", "12", "17", "22", "27"], ["frequency", "3", "8", "6", "3"]], { rowHead: true }), 0.001),
  num("A spinner stops at a random angle 0°–360°. Find P(it stops between 90° and 150°). (3 decimals)", 60 / 360, "60/360.", null, 0.001),
  num("A normal-looking curve has total area 1; the area between 20 and 30 is 0.45 and the area below 20 is 0.2. Find the area above 30.", 0.35, "1 − 0.65.", normalSvg({ mu: 26, s: 8, shade: [[20, 30, "green"]] }), 0.001),
  num("A sample's values are 70, 75, 80, 85, 90. Find the standard deviation. (2 decimals)", Math.round(sdOf([70, 75, 80, 85, 90]) * 100) / 100, "Mean 80; Σ = 250.", null, 0.01),
];
