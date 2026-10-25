// 5.5 Measures of Spread — 20 hard questions
import { mc, ms, num, tf } from "./kit.mjs";
import { dotPlotSvg, barsSvg, tableSvg, boxPlotSvg } from "../../mdm4u/figs.mjs";
import { sdP, sdS, sum } from "../../mdm4u/count.mjs";

const r3 = (v) => Math.round(v * 1000) / 1000;
const grouped = (m, f, sample) => { const n = sum(f), x = sum(m.map((v, i) => v * f[i])) / n; return Math.sqrt(sum(m.map((v, i) => f[i] * (v - x) ** 2)) / (sample ? n - 1 : n)); };

export const TOPIC = "5.5 Measures of Spread";
export const Q = [
  num("A population of 10 values has Σx = 80 and Σx² = 730. A new value equal to the mean is added. Find the new σ (3 decimals).", r3(Math.sqrt((730 - 640) / 11)), "Σ(x − μ)² = 730 − 640 = 90 is unchanged; divide by 11.", null, 0.002),
  num("Two numbers have mean 50 and population σ = 12. What is their product?", 38 * 62, "They are 38 and 62."),
  num("The values 4, 8, x have population mean 8. Find σ (3 decimals).", r3(sdP([4, 8, 12])), "x = 12.", null, 0.002),
  num("Find the sample standard deviation of the values 6, 6, 6, 6, 16 (3 decimals).", r3(sdS([6, 6, 6, 6, 16])), "Mean 8.", null, 0.002),
  num("A data set has mean 20 and σ = 4. Each value is transformed by y = 15 − 2x. Find the new σ.", 8, "|−2| × 4."),
  num("A data set has mean 20 and σ = 4. Each value is transformed by y = 15 − 2x. Find the new mean.", -25, "15 − 40."),
  num("Combine two populations: A has 5 values, mean 10, σ = 2; B has 5 values, mean 14, σ = 2. Find σ of all 10 values (3 decimals).", r3(Math.sqrt((5 * (4 + 4) + 5 * (4 + 4)) / 10)), "Σx² per group = N(σ² + μ²); total σ² = 4 + 4.", null, 0.002),
  num("A sample of 5 has mean 12 and s = 3. A 6th value of 12 is added. Find the new s (3 decimals).", r3(Math.sqrt(36 / 5)), "Σ(x − x̄)² = 9 × 4 = 36 stays; divide by 5.", null, 0.002),
  num("Estimate the sample standard deviation from the grouped table (3 decimals).", r3(grouped([15, 25, 35, 45], [5, 9, 4, 2], true)), "Midpoints 15, 25, 35, 45.", tableSvg([["interval", "10–20", "20–30", "30–40", "40–50"], ["frequency", "5", "9", "4", "2"]]), 0.01),
  num("Estimate the population standard deviation from the histogram (midpoints 1, 3, 5, 7, 9; 3 decimals).", r3(grouped([1, 3, 5, 7, 9], [2, 5, 6, 5, 2], false)), "Mean 5 by symmetry.", barsSvg([2, 5, 6, 5, 2], { labels: ["0–2", "2–4", "4–6", "6–8", "8–10"], histogram: true, top: true }), 0.01),
  num("The dot plot shows a population. Find σ (3 decimals).", r3(sdP([1, 3, 3, 5, 5, 5, 7, 7, 9])), "Mean 5.", dotPlotSvg([1, 3, 3, 5, 5, 5, 7, 7, 9], { min: 0, max: 10, step: 1 }), 0.002),
  mc("The box plots show three data sets with the same mean. Which most likely has the largest standard deviation?", "C", ["A", "B", "all equal"], "C has the widest spread.", boxPlotSvg([{ five: [40, 46, 50, 54, 60], label: "A" }, { five: [44, 48, 50, 52, 56], label: "B" }, { five: [20, 38, 50, 62, 80], label: "C" }], { min: 15, max: 85, step: 10 })),
  mc("The dot plot's mean is 10. If the value 18 is changed to 10, the standard deviation will…", "decrease", ["increase", "stay the same", "become 0"], "A large deviation is removed.", dotPlotSvg([4, 7, 8, 9, 10, 10, 11, 12, 13, 18], { min: 2, max: 20, step: 2 })),
  ms("Which statements are true for any data set? Select all.", ["σ ≥ 0", "s ≥ σ for the same values", "σ = 0 only if all values are equal", "range ≥ σ", "variance < standard deviation"], [0, 1, 2, 3], "Variance can exceed σ (when σ > 1)."),
  tf("Adding a value equal to the mean to a sample decreases the sample standard deviation.", true, "Same sum of squares, larger divisor."),
  tf("Doubling every value doubles the variance.", false, "It multiplies the variance by 4."),
  num("Two machines fill boxes. A: σ = 4 g. B: σ = 2.5 g. By what percent is B's standard deviation smaller than A's?", 37.5, "1.5/4.", null, 0.01),
  num("The population 3, 5, x, 11 has mean 7. Find σ (3 decimals).", r3(sdP([3, 5, 9, 11])), "x = 9; deviations −4, −2, 2, 4; σ² = 10.", null, 0.002),
  num("The population 2, 4, 6, 8, x has mean 6. Find σ² .", 8, "x = 10; deviations −4, −2, 0, 2, 4."),
  mc("A teacher's class marks have σ = 6 before and σ = 9 after she multiplies every mark by the same number. What number?", "1.5", ["3", "2.25", "1.3"], "9/6."),
];
