// 5.7 Displaying & Describing Distributions — 20 hard questions
import { mc, ms, num, tf } from "./kit.mjs";
import { barsSvg, pieSvg, stemLeafSvg, lineSvg, tableSvg } from "../../mdm4u/figs.mjs";
import { median, mean } from "../../mdm4u/count.mjs";

const r2 = (v) => Math.round(v * 100) / 100;
const sl = [61, 63, 67, 70, 72, 74, 74, 78, 81, 83, 85, 86, 90, 94];

export const TOPIC = "5.7 Displaying & Describing Distributions";
export const Q = [
  num("A cumulative relative frequency graph rises from 0.35 at 30 kg to 0.75 at 40 kg. Estimate the median by linear interpolation.", 33.75, "30 + 10 × 0.15/0.4.", null, 0.01),
  num("Read the ogive: estimate the 80th percentile (min).", 22.5, "0.8 is halfway from 0.7 (20) to 0.9 (25).", lineSvg([0, 0.1, 0.3, 0.55, 0.7, 0.9, 1], { xs: [0, 5, 10, 15, 20, 25, 30], xlabel: "time (min)", ylabel: "cum. rel. freq." }), 0.01),
  num("Read the ogive: what percent of values exceed 20 min?", 30, "1 − 0.7.", lineSvg([0, 0.1, 0.3, 0.55, 0.7, 0.9, 1], { xs: [0, 5, 10, 15, 20, 25, 30], xlabel: "time (min)", ylabel: "cum. rel. freq." })),
  num("Read the stem-and-leaf plot: find the mean (2 decimals).", r2(mean(sl)), "Σx ÷ 14.", stemLeafSvg(sl), 0.01),
  num("Read the stem-and-leaf plot: find the median.", median(sl), "Average the 7th and 8th.", stemLeafSvg(sl), 0.001),
  num("Two sectors of a circle graph are 96° and 60°. Together they represent 117 people. How many people were surveyed?", 270, "156° ↔ 117: 360/156 × 117."),
  num("The table shows a frequency distribution with one missing frequency. The relative frequency of the 20–30 class is 0.3. Find the missing frequency.", 12, "Total 40; 0.3 × 40.", tableSvg([["class", "0–10", "10–20", "20–30", "30–40"], ["frequency", "6", "14", "?", "8"]])),
  num("A histogram uses intervals 0–10 (frequency 8), 10–20 (14) and 20–40 (16). To be honest, the 20–40 bar's height should equal the frequency per 10 units. What height?", 8, "16 over a width of 20 → 8 per 10."),
  num("The misleading bar graph starts at 400. How many times taller does the 460 bar look than the 420 bar?", 3, "60/20.", barsSvg([60, 20], { labels: ["2025", "2024"], top: ["460", "420"], fmt: (v) => String(Math.round(v + 400)), ymax: 70 })),
  num("What is the true ratio of the two values in the misleading graph (460 : 420)? Answer to 3 decimals.", Math.round((460 / 420) * 1000) / 1000, "460/420.", null, 0.0015),
  mc("A data set has mean 52, median 47 and a long tail. The tail is on the…", "right", ["left", "both sides", "cannot tell"], "Mean > median."),
  mc("The histogram of the heights of a mixed team of children and adults is bimodal. The best summary is…", "separate centres and spreads for each group", ["the overall mean", "the overall mode", "the range only"], "Two groups.", barsSvg([3, 7, 5, 2, 1, 4, 8, 6, 2], { histogram: true, labels: ["120", "130", "140", "150", "160", "170", "180", "190", "200"] })),
  ms("Which are misleading features? Select all.", ["a vertical axis not starting at 0 without a break", "3-D bars that hide heights", "equal-width intervals", "pictures scaled in two dimensions for a one-dimension change", "a clear title and labels"], [0, 1, 3], "Distortions."),
  tf("The median of a distribution can be found from a cumulative frequency graph at the 50% level.", true, "Ogive."),
  tf("If a histogram is skewed left, the mean is usually greater than the median.", false, "Less than."),
  num("A circle graph shows 5 categories with angles 90°, 72°, 54°, x and 36°. Find x.", 108, "360 − 252."),
  mc("Which display best compares the distribution of marks in three classes?", "side-by-side box plots", ["three circle graphs", "one bar graph of class means", "a pictograph"], "Centre and spread together."),
  num("In the circle graph, 'other' is the remaining share. If 400 people were surveyed, how many chose 'other'?", 60, "15% of 400.", pieSvg([["A", 35, "blue"], ["B", 30, "green"], ["C", 20, "amber"], ["other", 15, "gray"]])),
  num("A relative-frequency histogram has bars 0.1, 0.25, 0.4, 0.2 and x. Find x.", 0.05, "Sum is 1.", barsSvg([0.1, 0.25, 0.4, 0.2, 0.05], { labels: ["A", "B", "C", "D", "E"], histogram: true, fmt: (v) => v.toFixed(2) }), 0.001),
  mc("For income data, a newspaper reports the mean instead of the median. The most likely effect is…", "typical income seems higher than it is", ["typical income seems lower", "no effect", "the data become symmetric"], "Right skew."),
];
