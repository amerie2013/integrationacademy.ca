// 4.5 Confidence Intervals — 20 easy + 20 medium questions
import { mc, ms, num, tf } from "./kit.mjs";
import { intervalsSvg, normalSvg } from "../../mdm4u/figs.mjs";

const r = (v, k = 3) => Math.round(v * 10 ** k) / 10 ** k;
const moe = (p, n, z = 1.96) => z * Math.sqrt((p * (1 - p)) / n);
const CAP = [[0.41, 0.53], [0.38, 0.5], [0.44, 0.56], [0.35, 0.47], [0.4, 0.52], [0.52, 0.64], [0.42, 0.54], [0.37, 0.49], [0.43, 0.55], [0.39, 0.51]];
const MISS = [0.48, 0.52, 0.45, 0.55, 0.5, 0.42, 0.53, 0.47, 0.51, 0.62, 0.49, 0.46, 0.54, 0.5, 0.44, 0.52, 0.56, 0.38, 0.51, 0.47];

export const E = [
  num("In a sample of 200, 84 said yes. Find p̂.", 0.42, "84/200.", null, 0.001),
  num("What critical value z* is used for 95% confidence?", 1.96, "Central 95%.", null, 0.005),
  num("What critical value z* is used for 90% confidence?", 1.645, "Central 90%.", null, 0.005),
  num("A poll says 52% ± 3%. What is the lower end of the interval (percent)?", 49, "52 − 3."),
  num("A 95% CI is (0.40, 0.48). What is p̂?", 0.44, "Midpoint.", null, 0.001),
  num("A 95% CI is (0.40, 0.48). What is the margin of error?", 0.04, "Half the width.", null, 0.001),
  num("Find the 95% margin of error for p̂ = 0.5, n = 100.", r(moe(0.5, 100)), "1.96 × 0.05.", null, 0.002),
  num("x̄ = 50, σ = 10, n = 100. Find the 95% margin of error for μ.", 1.96, "1.96 × 10/10.", null, 0.002),
  num("x̄ = 50, σ = 10, n = 100. Find the upper end of the 95% CI.", 51.96, "50 + 1.96.", null, 0.002),
  num("“19 times out of 20” corresponds to what confidence level (percent)?", 95, "19/20."),
  mc("Increasing the sample size (same confidence) makes the interval…", "narrower", ["wider", "unchanged", "shifted"], "Smaller standard error."),
  mc("Increasing the confidence level (same n) makes the interval…", "wider", ["narrower", "unchanged", "shifted"], "Larger z*."),
  tf("A 95% confidence interval always contains the true proportion.", false, "About 95% of such intervals do."),
  tf("The margin of error covers bias from a poorly chosen sample.", false, "Only random sampling error."),
  tf("To halve the margin of error, you need about four times the sample size.", true, "E ∝ 1/√n."),
  ms("Which change narrows a confidence interval? Select all.", ["larger n", "lower confidence level", "higher confidence level", "smaller n", "p̂ further from 0.5"], [0, 1, 4], "p̂q̂ is largest at 0.5."),
  num("The figure shows 10 intervals and the true value. How many intervals capture it?", CAP.filter(([a, b]) => a <= 0.48 && 0.48 <= b).length, "Count the blue segments.", intervalsSvg(CAP, { truth: 0.48, min: 0.3, max: 0.7, ticks: [0.3, 0.4, 0.5, 0.6, 0.7] })),
  num("The shaded central area of the standard normal curve is 0.95. What is the right boundary? (2 decimals)", 1.96, "z*.", normalSvg({ mu: 0, s: 1, shade: [[-1.96, 1.96, "green"]], ticks: [-3, -2, -1, 0, 1, 2, 3] }), 0.01),
  mc("Which is the correct interpretation of a 95% CI (0.31, 0.37) for a proportion?", "the method gives intervals that capture the true proportion 95% of the time", ["95% of people are between 31% and 37%", "the sample proportion is between 0.31 and 0.37 with 95% probability", "the true proportion is exactly 0.34"], "Confidence describes the method."),
  num("x̄ = 120, margin of error 6. What is the 95% CI's lower end?", 114, "120 − 6."),
];

export const M = [
  num("In a sample of 500, 210 have a part-time job. Find the 95% margin of error. (3 decimals)", r(moe(0.42, 500)), "1.96√(0.42·0.58/500).", null, 0.002),
  num("For the sample above (210 of 500), find the lower end of the 95% CI. (3 decimals)", r(0.42 - moe(0.42, 500)), "0.42 − E.", null, 0.003),
  num("In a sample of 1000, 380 support a plan. Find the upper end of the 99% CI. (3 decimals)", r(0.38 + moe(0.38, 1000, 2.576)), "z* = 2.576.", null, 0.003),
  num("x̄ = 64, σ = 12, n = 36. Find the 90% margin of error. (2 decimals)", r(1.645 * 2, 2), "1.645 × 12/6.", null, 0.01),
  num("x̄ = 64, σ = 12, n = 36. Find the lower end of the 99% CI. (2 decimals)", r(64 - 2.576 * 2, 2), "64 − 2.576(2).", null, 0.02),
  num("What sample size gives a 95% margin of error of 0.05 with no estimate of p?", 385, "(1.96/0.05)² × 0.25 = 384.2 → 385."),
  num("What sample size gives a 95% margin of error of 0.03 if p̂ ≈ 0.2?", Math.ceil((1.96 / 0.03) ** 2 * 0.16), "(1.96/0.03)² × 0.16."),
  num("σ = 15. What n gives a 95% margin of error of 3 for μ?", Math.ceil((1.96 * 15 / 3) ** 2), "(1.96·15/3)²."),
  num("A 95% CI for p is (0.52, 0.58). Find n (nearest whole number).", Math.round((1.96 / 0.03) ** 2 * 0.55 * 0.45), "0.03 = 1.96√(0.55·0.45/n).", null, 2),
  num("A margin of error is 0.04 with n = 600. What is it with n = 2400 (same p̂, same confidence)?", 0.02, "4× sample → half.", null, 0.001),
  mc("Poll A (n = 400) and poll B (n = 1600) both report p̂ = 0.45 at 95%. How do their margins compare?", "A's margin is twice B's", ["B's margin is twice A's", "they are equal", "A's margin is four times B's"], "E ∝ 1/√n."),
  mc("Two 95% intervals for support are (0.41, 0.47) and (0.45, 0.51). What can you conclude?", "the polls are consistent; support may not have changed", ["support definitely increased", "support definitely decreased", "one poll is wrong"], "The intervals overlap."),
  tf("A 99% CI from the same data is wider than the 95% CI.", true, "Larger z*."),
  tf("If a 95% CI for μ is (48, 56), then a population mean of 50 is plausible.", true, "50 is inside the interval."),
  ms("A survey of 900 gives p̂ = 0.3. Which are correct? Select all.", ["SE ≈ 0.0153", "95% E ≈ 0.030", "95% CI ≈ (0.270, 0.330)", "99% E ≈ 0.039", "the CI contains 0.35"], [0, 1, 2, 3], "0.35 is outside."),
  num("The figure shows 20 intervals at 90% confidence. How many miss the true value?", MISS.filter((c) => Math.abs(c - 0.5) > 0.07).length, "Count the red intervals.", intervalsSvg(MISS.map((c) => [c - 0.07, c + 0.07]), { truth: 0.5, min: 0.25, max: 0.75, ticks: [0.3, 0.4, 0.5, 0.6, 0.7] })),
  num("The curve shows the sampling distribution of p̂ for n = 400, p = 0.5. What is its standard deviation?", 0.025, "√(0.25/400).", normalSvg({ mu: 0.5, s: 0.025 }), 0.0005),
  num("A poll: 46% ± 2.8%, 19 times out of 20. Estimate the sample size (nearest 10).", Math.round((1.96 / 0.028) ** 2 * 0.46 * 0.54 / 10) * 10, "n = (1.96/0.028)²(0.46)(0.54).", null, 10),
  num("A sample of 64 has x̄ = 25.3 with σ = 4. Is μ = 26 plausible at 95%? Enter the upper end of the CI.", r(25.3 + 1.96 * 0.5, 2), "25.3 + 0.98 = 26.28: yes.", null, 0.01),
  num("A 90% CI for μ is (72.2, 77.8) with n = 49. Find σ (2 decimals).", r((2.8 * 7) / 1.645, 2), "2.8 = 1.645σ/7.", null, 0.05),
];
