// 5.8 The z-Score & Comparing Data — 20 easy + 20 medium questions
import { mc, ms, num, tf } from "./kit.mjs";
import { normalSvg, dotPlotSvg, tableSvg } from "../../mdm4u/figs.mjs";
import { tphi } from "../../mdm4u/count.mjs";

const r2 = (v) => Math.round(v * 100) / 100;
const z = (x, m, s) => num(`Find the z-score of ${x} when μ = ${m} and σ = ${s}.`, r2((x - m) / s), "(x − μ)/σ.", null, 0.01);
const x = (zz, m, s) => num(`Find the value with z = ${zz} when μ = ${m} and σ = ${s}.`, r2(m + zz * s), "x = μ + zσ.", null, 0.01);

export const E = [
  z(62, 50, 6),
  z(41, 50, 6),
  z(130, 100, 20),
  z(7.4, 8, 0.4),
  z(250, 250, 12),
  x(1, 70, 8),
  x(-2, 70, 8),
  x(0.5, 300, 40),
  x(-1.5, 12, 2),
  mc("A z-score of 0 means the value is…", "equal to the mean", ["the smallest value", "zero", "one standard deviation away"], "No distance from the mean."),
  mc("A negative z-score means the value is…", "below the mean", ["above the mean", "an error", "an outlier"], "Sign shows direction."),
  mc("Which z-score represents the most unusual value?", "−2.7", ["1.9", "−1.2", "2.1"], "Largest |z|."),
  tf("z-scores have the same units as the data.", false, "They have no units."),
  tf("A value with z = 2 is two standard deviations above the mean.", true, "Definition."),
  mc("Who did relatively better: 80 on a test with μ = 70, σ = 5, or 80 on a test with μ = 72, σ = 4?", "both equally (z = 2)", ["the first", "the second", "cannot tell"], "Both z = 2."),
  num("For roughly normal data, what proportion of values lie below z = 1 (z-table)?", tphi(1), "Area to the left.", null, 0.003),
  num("For roughly normal data, what proportion of values lie above z = 1.5 (z-table)?", Math.round((1 - tphi(1.5)) * 1e4) / 1e4, "1 − 0.9332.", null, 0.003),
  num("Read the curve: the marked value is at which z-score?", 1.5, "(66 − 60)/4.", normalSvg({ mu: 60, s: 4, marks: [[66, "66"]] }), 0.01),
  num("The dot plot shows a population with μ = 10 and σ = 2. What is the z-score of the largest value?", 2, "(14 − 10)/2.", dotPlotSvg([6, 8, 9, 10, 10, 10, 11, 12, 14], { min: 4, max: 16, step: 2 }), 0.01),
  mc("Standardized data (all z-scores) have mean and standard deviation…", "0 and 1", ["1 and 0", "0 and 0", "the same as the original"], "Definition."),
];

export const M = [
  num("A test has μ = 68. A mark of 80 has z = 1.5. Find σ.", 8, "12/1.5."),
  num("A test has σ = 6. A mark of 59 has z = −1.5. Find μ.", 68, "59 + 9."),
  num("On a test, 74 has z = 0.5 and 86 has z = 2. Find σ.", 8, "12 = 1.5σ."),
  num("On a test, 74 has z = 0.5 and 86 has z = 2. Find μ.", 70, "74 − 4."),
  num("Heights: μ = 168 cm, σ = 9 cm. Find the height at the 84th percentile using z ≈ 1 (normal).", 177, "168 + 9."),
  num("Marks are roughly normal with μ = 65, σ = 10. Estimate the proportion scoring below 78 (z-table).", tphi(1.3), "z = 1.3.", null, 0.003),
  num("Marks are roughly normal with μ = 65, σ = 10. Estimate the proportion scoring between 55 and 75.", Math.round((tphi(1) - tphi(-1)) * 1e4) / 1e4, "z from −1 to 1.", null, 0.003),
  num("A standardized score is 500 + 100z. A raw score of 47 has μ = 40, σ = 5. Find the standardized score.", 640, "z = 1.4."),
  mc("Which is relatively better: 72 in History (μ = 64, σ = 5) or 85 in Math (μ = 76, σ = 6)?", "History (z = 1.6)", ["Math (z = 1.5)", "equal", "cannot compare"], "Compare z."),
  mc("Which is relatively better for a runner (lower times are better): 52 s (μ = 55, σ = 2) or 4:10 (μ = 4:20, σ = 0:08)?", "52 s (z = −1.5)", ["4:10 (z = −1.25)", "equal", "cannot compare"], "More negative is better."),
  mc("Every value in a data set is increased by 5. The z-score of each value…", "stays the same", ["increases by 5", "decreases", "doubles"], "x and μ both rise by 5."),
  ms("Which values are unusual for μ = 50, σ = 4? Select all.", ["41", "57", "59", "44", "60.5"], [0, 2, 4], "|z| > 2: 41 (−2.25), 59 (2.25), 60.5 (2.625)."),
  tf("A z-score of 3 is possible.", true, "Rare, but possible."),
  tf("If two students have the same z-score in different classes, they must have the same mark.", false, "Different μ and σ."),
  num("Read the curve: estimate the proportion of values below the marked value (z-table).", tphi(-0.75), "z = (51 − 54)/4 = −0.75.", normalSvg({ mu: 54, s: 4, shade: [[-Infinity, 51, "blue"]], marks: [[51, "51"]] }), 0.003),
  num("Use the table: whose result is relatively best? Enter the z-score of the best result.", 2, "Z: 1.5, 2, 1.25.", tableSvg([["student", "mark", "μ", "σ"], ["Ari", "79", "70", "6"], ["Bo", "88", "78", "5"], ["Cai", "65", "60", "4"]]), 0.01),
  num("A value 2.5 standard deviations below a mean of 40 with σ = 3 is…", 32.5, "40 − 7.5.", null, 0.01),
  mc("Heights of men: μ = 176, σ = 7. Heights of women: μ = 163, σ = 6. Who is relatively taller: a man of 190 cm or a woman of 176 cm?", "the woman (z ≈ 2.17)", ["the man (z = 2)", "equal", "cannot compare"], "13/6 ≈ 2.17."),
  num("For roughly normal data, what percent of values have z between −2 and 2 (z-table)?", Math.round((tphi(2) - tphi(-2)) * 1e4) / 100, "0.9772 − 0.0228.", null, 0.3),
  num("Find the z-score of the mean of any data set.", 0, "x = μ."),
];
