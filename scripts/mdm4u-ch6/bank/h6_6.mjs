// 6.6 Residuals, Outliers & Hidden Variables — 20 hard questions
import { mc, ms, num, tf } from "./kit.mjs";
import { scatterSvg, residualPlotSvg, tableSvg } from "../../mdm4u/figs.mjs";
import { linreg, residuals, corr, sum } from "../../mdm4u/count.mjs";

const r3 = (v) => Math.round(v * 1000) / 1000;
const ox = [1, 2, 3, 4, 5, 6, 7], oy = [10, 13, 15, 30, 21, 23, 26]; // one outlier at x = 4
const Lo = linreg(ox, oy), Lo2 = linreg([1, 2, 3, 5, 6, 7], [10, 13, 15, 21, 23, 26]);
const gx = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5], gy = [4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

export const TOPIC = "6.6 Residuals, Outliers & Hidden Variables";
export const Q = [
  num(`For x: ${ox.join(", ")}; y: ${oy.join(", ")}, find the residual of (4, 30) (3 decimals).`, r3(30 - (Lo.a * 4 + Lo.b)), "Least-squares line, then y − ŷ.", scatterSvg(ox.map((x, i) => [x, oy[i]]), { xmin: 0, xmax: 8, ymin: 0, ymax: 35, line: Lo, hl: [3] }), 0.002),
  num(`For x: ${ox.join(", ")}; y: ${oy.join(", ")}, find r with all points (3 decimals).`, r3(corr(ox, oy)), "Technology.", null, 0.002),
  num(`For x: ${ox.join(", ")}; y: ${oy.join(", ")}, find r without (4, 30) (3 decimals).`, r3(corr([1, 2, 3, 5, 6, 7], [10, 13, 15, 21, 23, 26])), "Six points.", null, 0.002),
  num(`For x: ${ox.join(", ")}; y: ${oy.join(", ")}, by how much does the intercept change when (4, 30) is removed? Enter (with) − (without) (3 decimals).`, r3(Lo.b - Lo2.b), "Compare b.", null, 0.002),
  num("For x: 1, 2, 3, 4, 5, 6 and y: 2, 3, 5, 6, 8, 30, find the slope with and without (6, 30). Enter the ratio (with ÷ without) (2 decimals).", Math.round((linreg([1, 2, 3, 4, 5, 6], [2, 3, 5, 6, 8, 30]).a / linreg([1, 2, 3, 4, 5], [2, 3, 5, 6, 8]).a) * 100) / 100, "Influence on the slope.", null, 0.02),
  num("Find SSE for the least-squares line through (1, 2), (2, 5), (3, 5), (4, 9), (5, 9) (3 decimals).", r3(sum(residuals([1, 2, 3, 4, 5], [2, 5, 5, 9, 9]).map((e) => e * e))), "Sum of squared residuals.", tableSvg([["x", "1", "2", "3", "4", "5"], ["y", "2", "5", "5", "9", "9"]]), 0.002),
  mc("The residual plot is shown. Which change to the model is most appropriate?", "fit a quadratic", ["remove the middle points", "fit a horizontal line", "nothing — it is random"], "Arch pattern.", residualPlotSvg([[1, 3], [2, 7], [3, 9], [4, 10], [5, 9], [6, 7], [7, 3]], linreg([1, 2, 3, 4, 5, 6, 7], [3, 7, 9, 10, 9, 7, 3]), { xmin: 0, xmax: 8 })),
  mc("The plot shows two groups (blue and red) with the same slope but different levels. A single line through all points would…", "have a misleading slope and large residuals that depend on the group", ["fit perfectly", "have r = 1", "remove the hidden variable"], "Group is a hidden variable.", scatterSvg(gx.map((x, i) => [x, gy[i]]), { xmin: 0, xmax: 6, ymin: 0, ymax: 15, groups: gx.map((_, i) => (i < 5 ? "blue" : "red")) })),
  num("For the two groups — blue: (1,4), (2,5), (3,6), (4,7), (5,8); red: (1,9), (2,10), (3,11), (4,12), (5,13) — find r for all 10 points together (3 decimals).", r3(corr(gx, gy)), "The group gap weakens r.", null, 0.002),
  num("For the blue group alone — (1,4), (2,5), (3,6), (4,7), (5,8) — find r.", 1, "Perfect line.", null, 0.001),
  ms("Which statements about influential points are true? Select all.", ["they usually have extreme x-values", "removing them can change the slope a lot", "they always have the largest residual", "they should be reported and discussed"], [0, 1, 3], "Not always the largest residual."),
  tf("If the residual plot shows random scatter, the linear model is guaranteed to predict well outside the data.", false, "Extrapolation is still risky."),
  tf("Converting counts to rates (per 1000 people) can remove the effect of population as a hidden variable.", true, "Adjusts for size."),
  num("A line ŷ = 4x + 12 is fitted. The residuals at x = 1, 2, 3, 4, 5 are 1, −2, x, 2, −1. Find the observed y at x = 3.", 24, "Residual 0 at x = 3; ŷ = 24."),
  num("A regression of weight (kg) on height (cm) gives residual −7 for a person 170 cm tall with ŷ = 68. Find the person's weight.", 61, "68 − 7."),
  mc("A plot of a linear model's residuals against a third variable (age) shows a clear upward trend. This means…", "age affects y and should be included in the analysis", ["the model is perfect", "the residuals are wrong", "age is an outlier"], "Hidden variable revealed."),
  num("Ten points have residuals with sum of squares 45. One point with residual 5 is found to be an error and removed; refitting changes nothing else. What is the new sum of squares?", 20, "45 − 25."),
  mc("A study reports a strong link between hours of TV and obesity in children. Which hidden variable deserves checking first?", "physical activity", ["TV brand", "the residual", "eye colour"], "Linked to both."),
  num("For x: 2, 4, 6, 8, 30 and y: 10, 14, 17, 22, 25, find the residual of (30, 25) for the least-squares line (3 decimals).", r3(25 - (linreg([2, 4, 6, 8, 30], [10, 14, 17, 22, 25]).a * 30 + linreg([2, 4, 6, 8, 30], [10, 14, 17, 22, 25]).b)), "Small residual, yet influential.", scatterSvg([[2, 10], [4, 14], [6, 17], [8, 22], [30, 25]], { xmin: 0, xmax: 32, ymin: 0, ymax: 30, line: linreg([2, 4, 6, 8, 30], [10, 14, 17, 22, 25]), hl: [4] }), 0.002),
  mc("For x: 2, 4, 6, 8, 30 and y: 10, 14, 17, 22, 25, why is the residual of (30, 25) small even though the point changes the line?", "the line is pulled toward it", ["it is not in the data", "its y is the mean", "residuals are always small"], "Leverage."),
];
