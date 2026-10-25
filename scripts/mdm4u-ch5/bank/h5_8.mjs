// 5.8 The z-Score & Comparing Data — 20 hard questions
import { mc, ms, num, tf } from "./kit.mjs";
import { normalSvg, tableSvg, dotPlotSvg, boxPlotSvg } from "../../mdm4u/figs.mjs";
import { tphi, mean, sdP } from "../../mdm4u/count.mjs";

const r2 = (v) => Math.round(v * 100) / 100;
const r4 = (v) => Math.round(v * 1e4) / 1e4;
const dp = [12, 15, 16, 18, 18, 19, 20, 22, 24, 36];

export const TOPIC = "5.8 The z-Score & Comparing Data";
export const Q = [
  num("A mark of 93 has z = 2.25 and a mark of 57 has z = −0.75 on the same test. Find σ.", 12, "36 = 3σ."),
  num("A mark of 93 has z = 2.25 and a mark of 57 has z = −0.75 on the same test. Find μ.", 66, "57 + 9."),
  num("Data have μ = 40, σ = 5. Each value is transformed by y = 3x − 20. Find the z-score of the transformed value of 47.", 1.4, "z is unchanged: 7/5.", null, 0.01),
  num("Data with μ = 80 and σ = 12 are converted to a scale with mean 50 and standard deviation 10. What does a raw 95 become?", 62.5, "z = 1.25; 50 + 12.5.", null, 0.01),
  num("Marks are roughly normal, μ = 70, σ = 8. What mark is needed to be in the top 10% (z ≈ 1.28)?", r2(70 + 1.28 * 8), "70 + 1.28(8).", null, 0.01),
  num("Marks are roughly normal, μ = 70, σ = 8. Estimate the proportion of marks between 62 and 82 (z-table).", r4(tphi(1.5) - tphi(-1)), "z from −1 to 1.5.", null, 0.003),
  num("Find the population z-score of the largest value in the dot plot (2 decimals).", r2((36 - mean(dp)) / sdP(dp)), "Compute μ and σ first.", dotPlotSvg(dp, { min: 10, max: 38, step: 2 }), 0.02),
  mc("By the |z| > 2 rule, is the largest value in the dot plot unusual?", Math.abs((36 - mean(dp)) / sdP(dp)) > 2 ? "yes" : "no", [Math.abs((36 - mean(dp)) / sdP(dp)) > 2 ? "no" : "yes", "only if the data are normal", "cannot tell without the median"], "Compare |z| with 2.", dotPlotSvg(dp, { min: 10, max: 38, step: 2 })),
  num("Use the table: which athlete had the best relative performance? Enter that athlete's z-score in the good direction (positive = better).", 1.75, "Run (lower better): −(−1.75); jump 1.5; throw 1.25.", tableSvg([["event", "result", "μ", "σ"], ["100 m run (s)", "11.1", "11.8", "0.4"], ["long jump (m)", "6.9", "6.3", "0.4"], ["shot put (m)", "14.5", "13.5", "0.8"]]), 0.01),
  num("Read the curve: what proportion lies in the shaded region (z-table)?", r4(tphi(1.25) - tphi(-0.5)), "z from −0.5 to 1.25.", normalSvg({ mu: 200, s: 20, shade: [[190, 225, "green"]], marks: [[190, "190"], [225, "225"]] }), 0.003),
  mc("The box plots show two classes. Ana scored 74 in A, Ben 74 in B. Assuming σ_A ≈ 8 and σ_B ≈ 4 and medians ≈ means, who did relatively better?", "Ana (z ≈ 0.75 vs Ben's z ≈ −0.5)", ["Ben", "equal", "cannot tell"], "A: (74 − 68)/8; B: (74 − 76)/4.", boxPlotSvg([{ five: [52, 63, 68, 74, 86], label: "A" }, { five: [66, 73, 76, 79, 85], label: "B" }], { min: 50, max: 90, step: 5 })),
  ms("Which are true for any data set? Select all.", ["the z-scores sum to 0", "the z-scores have standard deviation 1", "the z-scores are all between −3 and 3", "standardizing does not change the shape"], [0, 1, 3], "Extreme z-scores are possible."),
  tf("If a data set is skewed right, standardizing it makes it normal.", false, "Shape is unchanged."),
  tf("Two values with z-scores 1.2 and −1.2 are equally far from the mean.", true, "Same distance."),
  num("In a class, 16% of marks are above 82 and 50% are above 74 (roughly normal; use the 68–95–99.7 rule). Find σ.", 8, "82 = μ + σ."),
  num("A value at the 2.5th percentile of a roughly normal data set with μ = 120 and σ = 15 is about…", 90, "z ≈ −2."),
  num("For roughly normal data, about how many of 600 values have z > 1.8 (z-table)?", Math.round(600 * (1 - tphi(1.8))), "600 × 0.0359.", null, 1),
  num("A sample has x̄ = 15.2 and s = 2.4. A value has z = −1.75. Find the value.", 11, "15.2 − 4.2.", null, 0.01),
  mc("A student's z-score on a test is 0.8. The teacher curves the test by adding 6 to every mark. The new z-score is…", "0.8", ["6.8", "0.86", "cannot tell"], "Both x and μ change by 6."),
  num("Two sections wrote the same test. Section 1: μ = 72, σ = 6, n = 25. Section 2: μ = 78, σ = 6, n = 25. A student in section 1 scored 84. What is her z-score relative to section 2?", 1, "(84 − 78)/6."),
];
