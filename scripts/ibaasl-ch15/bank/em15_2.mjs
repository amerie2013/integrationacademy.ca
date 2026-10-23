// 15.2 Planning, Research and Using Technology — 20 easy + 20 medium questions
import { mc, ms, num, tf, fill } from "./kit.mjs";
import { planeDoc, P, } from "./fig.mjs";
import { probDoc } from "../figs15.mjs";

const S = String.raw;

export const E = [
  mc("Data you collect yourself are called:", "primary data", ["secondary data", "census data", "model data"], "Your own collection."),
  mc("Data taken from a published source are called:", "secondary data", ["primary data", "raw data only", "pilot data"], "Collected by others."),
  mc("A small trial run before the main investigation is a:", "pilot study", ["census", "conclusion", "bibliography"], "Tests the method."),
  mc("A residual is:", "observed value − predicted value", ["predicted − observed", "the gradient", "the correlation coefficient"], "Definition."),
  mc("A correlation coefficient of r = −0.95 shows:", "a strong negative linear relationship", ["a weak relationship", "a strong positive relationship", "no relationship"], "Close to −1."),
  num("A systematic sample of 20 is taken from 400 names. Find the sampling interval.", 20, "400 ÷ 20."),
  num("A systematic sample of 50 is taken from 1000 names. Find the sampling interval.", 20, "1000 ÷ 50."),
  num("A model predicts 30 and the observed value is 33. Find the residual.", 3, "33 − 30."),
  num("A 9-week plan uses 2 weeks for data and 3 for mathematics. How many weeks remain?", 4, "9 − 5."),
  num("A regression line is y = 3x + 2. Predict y when x = 5.", 17, "3(5) + 2."),
  tf("Secondary data used in an exploration must be cited.", true, "Acknowledge sources."),
  tf("A correlation coefficient close to 0 means a strong linear relationship.", false, "Close to 0 means weak."),
  tf("A pilot study can show that the expected relationship is wrong before much time is spent.", true, "That is its purpose."),
  fill("In y = mx + c fitted by technology, m is the ___ of the line.", ["gradient", "slope", "Gradient"], "Rate of change."),
  ms("Which are good practice when using technology? Select all.", ["state what was computed", "interpret the output in context", "round sensibly", "paste output without comment"], [0, 1, 2], "Always interpret."),
  mc("The scatter plot shows pilot data. The relationship appears:", "positive and roughly linear", ["negative", "no relationship", "exponential decay"], "Points rise steadily.", planeDoc({ view: { xmin: 0, xmax: 8, ymin: 0, ymax: 16 }, step: { x: 1, y: 2 }, points: [P(1, 2.5, false), P(2, 4.3, false), P(3, 6.1, false), P(4, 8.2, false), P(5, 9.8, false), P(6, 12.1, false), P(7, 13.9, false)] })),
  mc("The plan shown gives most time to:", "the mathematics", ["choosing a topic", "drafting", "revising"], "Tallest bar.", probDoc(["topic", "data", "maths", "draft", "revise"], [1, 3, 5, 2, 1], { xlab: "stage", ylab: "weeks" })),
  num("A regression line is y = −2x + 40. Predict y when x = 12.", 16, "−24 + 40."),
  num("A survey asks 30 of 600 students. What fraction of the students is surveyed (as a decimal)?", 0.05, "30/600.", null, 0.001),
  mc("Which source of data gives the strongest personal engagement?", "your own measurements", ["a random website", "a textbook table", "a friend's homework"], "Primary data."),
];

export const M = [
  num("A school has 450 boys and 550 girls. How many girls should be in a stratified sample of 40?", 22, "550/1000 × 40."),
  num("A school has 450 boys and 550 girls. How many boys should be in a stratified sample of 40?", 18, "450/1000 × 40."),
  num("A model y = 1.5x + 4 is used. Find the residual for the point (6, 12.5).", -0.5, "12.5 − 13.", null, 0.001),
  num("Data grow from 80 to 125 in 4 years. Assuming exponential growth, find the yearly growth factor (3 d.p.).", Math.round((125 / 80) ** 0.25 * 1000) / 1000, "(125/80)^{1/4}.", null, 0.001),
  num("A quantity doubles every 5 years. Find its yearly growth factor (4 d.p.).", Math.round(2 ** 0.2 * 10000) / 10000, "2^{1/5}.", null, 0.0001),
  num("Two models give sums of squared residuals of 48 and 12. How many times larger is the first?", 4, "48/12."),
  mc("Residuals from a linear model form a U-shape. This suggests:", "a curved model would fit better", ["the linear model is perfect", "the data are wrong", "r = 0"], "Systematic pattern."),
  mc("Which sampling method gives every student an equal chance and avoids obvious bias?", "random sampling from a full list", ["asking your friends", "surveying one class", "asking volunteers only"], "Random selection."),
  mc("A student uses a GDC for exponential regression. In the exploration they should:", "state the method, the equation found and interpret it", ["hide that a GDC was used", "only write 'calculator'", "paste a photo of the screen"], "Criterion B and E."),
  tf("A model with a very high r can still give impossible predictions beyond the data.", true, "Check the context."),
  tf("Stratified sampling divides the population into groups and samples each in proportion.", true, "Definition."),
  num("A plan has 12 weeks. Revision is 2 weeks and drafting 3 weeks. If topic and data take 3 weeks, how many weeks are left for the mathematics?", 4, "12 − 8."),
  num("A model predicts 250 and the observed value is 238. Find the percentage error of the prediction relative to the observed value (1 d.p.).", 5, "12/238 × 100 ≈ 5.0.", null, 0.1),
  num("A regression gives y = 0.8x + 15 for test score y against hours studied x. Predict the score for 25 hours.", 35, "20 + 15."),
  ms("Which are secondary data? Select all.", ["census figures", "a sports federation's published results", "your stopwatch timings", "a weather service's archive"], [0, 1, 3], "Published by others."),
  mc("The residual plot shown is from a linear model. The model is:", "appropriate — residuals are small and random", ["inappropriate — residuals are curved", "perfect — all residuals are 0", "impossible to judge"], "No pattern.", planeDoc({ view: { xmin: 0, xmax: 8, ymin: -2, ymax: 2 }, step: { x: 1, y: 0.5 }, points: [P(1, 0.3, false), P(2, -0.4, false), P(3, 0.2, false), P(4, -0.1, false), P(5, 0.5, false), P(6, -0.3, false), P(7, 0.1, false)], lines: [{ m: 0, b: 0, color: "gray" }] })),
  mc("The data shown suggest which model?", "exponential growth", ["linear", "constant", "decreasing linear"], "Increasing gaps between points.", planeDoc({ view: { xmin: 0, xmax: 7, ymin: 0, ymax: 400 }, step: { x: 1, y: 50 }, points: [P(0, 40, false), P(1, 58, false), P(2, 85, false), P(3, 123, false), P(4, 180, false), P(5, 262, false), P(6, 380, false)] })),
  num("A population of 120 grows by 18% a year. Predict it after 3 years (nearest whole).", Math.round(120 * 1.18 ** 3), "120(1.18)³.", null, 1),
  num("A model N = 40e^{0.3t} is fitted. Predict N at t = 5 (1 d.p.).", Math.round(40 * Math.exp(1.5) * 10) / 10, "40e^{1.5}.", null, 0.1),
  num("How many years does it take N = 40e^{0.3t} to double (2 d.p.)?", Math.round((Math.log(2) / 0.3) * 100) / 100, "ln 2 / 0.3.", null, 0.01),
];
