// 7.2 Collecting & Managing Data — 20 hard questions
import { mc, ms, num, tf } from "./kit.mjs";
import { tableSvg, dotPlotSvg, boxPlotSvg } from "../../mdm4u/figs.mjs";
import { mean, median, sdS, fences } from "../../mdm4u/count.mjs";

const r2 = (v) => Math.round(v * 100) / 100;
const raw = [8, 9, 90, 7, 8, 10, 9, 8, 11]; // 90 should be 9
const ok = raw.map((v) => (v === 90 ? 9 : v));
const mk = [55, 58, 61, 63, 64, 66, 68, 70, 72, 12];

export const TOPIC = "7.2 Collecting & Managing Data";
export const Q = [
  num(`For ${raw.join(", ")}, find the sample standard deviation before correcting (2 decimals).`, r2(sdS(raw)), "Technology.", null, 0.02),
  num(`For ${raw.join(", ")}, the 90 should be 9. Find the corrected sample standard deviation (2 decimals).`, r2(sdS(ok)), "Recompute.", null, 0.02),
  num(`For ${raw.join(", ")} with 90 corrected to 9, by how much did the mean decrease (2 decimals)?`, r2(mean(raw) - mean(ok)), "81/9.", null, 0.01),
  num(`For the marks ${mk.join(", ")}, find the lower fence.`, fences(mk)[0], "Q₁ − 1.5 IQR.", boxPlotSvg([{ data: mk }], { min: 0, max: 80, step: 10 }), 0.001),
  mc(`For the marks ${mk.join(", ")}, the 12 is below the lower fence. What should happen next?`, "check the original record: it may be 72 or a genuine very low mark", ["delete it immediately", "change it to the mean", "ignore the fences"], "Investigate before acting."),
  num("The mean of 50 values is 32. Three values entered as 0 were really missing. Find the mean of the 47 real values (2 decimals).", r2((50 * 32) / 47), "Total 1600 over 47.", null, 0.01),
  num("A variable is recorded in cm for 30 people (mean 168) and mistakenly in m for 10 people (mean 1.70). Find the correct overall mean in cm.", r2((30 * 168 + 10 * 170) / 40), "Convert 1.70 m to 170 cm.", null, 0.01),
  num("Read the table: after removing the duplicate (record 03 appears twice) and the blank, how many valid hours values remain?", 4, "Rows 01, 02, 03, 05.", tableSvg([["ID", "hours"], ["01", "6"], ["02", "8"], ["03", "7"], ["03", "7"], ["04", "—"], ["05", "9"]])),
  num("Using the same table (valid hours 6, 8, 7, 9), find the mean.", 7.5, "30 ÷ 4.", tableSvg([["ID", "hours"], ["01", "6"], ["02", "8"], ["03", "7"], ["03", "7"], ["04", "—"], ["05", "9"]]), 0.001),
  num("The dot plot shows a value far from the rest. Its z-score (sample s of all 10 values) is about what? (2 decimals)", r2((24 - mean([3, 4, 4, 5, 5, 5, 6, 6, 7, 24])) / sdS([3, 4, 4, 5, 5, 5, 6, 6, 7, 24])), "z = (x − x̄)/s.", dotPlotSvg([3, 4, 4, 5, 5, 5, 6, 6, 7, 24], { min: 0, max: 26, step: 2 }), 0.03),
  ms("A researcher removes all values more than 2 standard deviations from the mean, without checking them, to “clean” the data. Which problems does this cause? Select all.", ["genuine values are lost", "the spread is understated", "the results may be biased", "it guarantees accuracy"], [0, 1, 2], "Unjustified removal."),
  ms("Which details must be removed before sharing survey data publicly? Select all.", ["names", "email addresses", "exact birthdates", "the variable 'hours of sleep'", "home addresses"], [0, 1, 2, 4], "Identifying information."),
  tf("Replacing every missing value with the mean of the other values leaves the mean unchanged but makes the standard deviation too small.", true, "No added spread."),
  tf("If a secondary source defines “youth” as ages 15–24 and your study uses 13–18, the data can be compared directly.", false, "Definitions differ."),
  mc("A national survey and your class survey report different average sleep times. The most likely reason is…", "different populations, sampling methods or definitions", ["one must be fake", "averages cannot differ", "rounding"], "Compare methods."),
  num("A survey of 500 has a 62% response rate; 4% of returned forms are unusable. How many usable forms are there? (nearest whole)", Math.round(500 * 0.62 * 0.96), "500 × 0.62 × 0.96."),
  num("To get 300 usable forms with a 62% response rate and 4% unusable, how many forms must be sent (round up)?", Math.ceil(300 / (0.62 * 0.96)), "300 ÷ (0.62 × 0.96)."),
  mc("Two variables are recorded as “Yes/No” in one file and “1/0” in another. Before merging the files you should…", "recode one so both use the same codes", ["delete one file", "add the codes together", "merge without changes"], "Consistent coding."),
  num(`For ${raw.join(", ")}, find the median before correcting the error.`, median(raw), "Order the values.", null, 0.001),
  mc("Why does the median change little when one entry error is corrected?", "it depends on the middle position, not the size of extreme values", ["it uses every value's size", "it equals the mean", "it is always 0"], "Resistant."),
];
