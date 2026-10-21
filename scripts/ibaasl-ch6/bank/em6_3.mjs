// 6.3 Measures of Central Tendency — 20 easy + 20 medium questions
import { mc, ms, num, tf, fill } from "./kit.mjs";
import { planeDoc } from "../../mcr3u-ch1/bank/fig.mjs";

const S = String.raw;
const bars = (pairs, color = "violet", w = 0.6) => pairs.map(([x, h]) => ({ pts: [[x - w / 2, 0], [x - w / 2, h], [x + w / 2, h], [x + w / 2, 0]], color }));
const histo = (edges, f, color = "violet") => f.map((h, i) => ({ pts: [[edges[i], 0], [edges[i], h], [edges[i + 1], h], [edges[i + 1], 0]], color }));

export const E = [
  num("Find the mean of 7, 11, 4, 10, 8.", 8, "40 ÷ 5."),
  num("Find the mean of 2.5, 3.5, 4, 6.", 4, "16 ÷ 4."),
  num("Find the median of 13, 7, 19, 10, 16.", 13, "7, 10, 13, 16, 19."),
  num("Find the median of 6, 15, 9, 12.", 10.5, "(9 + 12)/2.", null, 1e-9),
  num("Find the mode of 4, 8, 6, 8, 3, 8, 6.", 8, "8 appears three times."),
  num("Values 2, 3, 4 have frequencies 3, 5, 2. Find Σf.", 10, "3 + 5 + 2."),
  num("Values 2, 3, 4 have frequencies 3, 5, 2. Find Σfx.", 29, "6 + 15 + 8."),
  num("Values 2, 3, 4 have frequencies 3, 5, 2. Find the mean.", 2.9, "29 ÷ 10.", null, 1e-9),
  num("What is the midpoint of the class 30 ≤ x < 50?", 40, "(30 + 50)/2."),
  mc("The mean of grouped data found with class midpoints is:", "an estimate", ["exact", "always too large", "the median"], "The actual values in each class are unknown."),
  mc("Which average is most affected by an extreme value?", "the mean", ["the median", "the mode", "none of them"], "It uses every value's size."),
  tf("A data set can have more than one mode.", true, "e.g. 2, 2, 5, 5, 7 is bimodal."),
  fill("The class with the highest frequency is the ___ class.", ["modal", "Modal"], "Like the mode for grouped data."),
  num("The mean of 5 numbers is 12. Find their total.", 60, "5 × 12."),
  num("The mean of 4, 9, x is 7. Find x.", 8, "Total 21."),
  num("The bar chart shows the number of pets owned by some students. What is the mode?", 1, "The tallest bar.", planeDoc({ view: { xmin: -0.8, xmax: 4.8, ymin: 0, ymax: 12 }, segs: bars([[0, 6], [1, 11], [2, 7], [3, 3], [4, 1]]), step: { x: 1, y: 2 } })),
  num("The histogram shows masses of fruit (g). Which class is modal? Give the lower boundary.", 60, "The tallest bar is 60–80.", planeDoc({ view: { xmin: 15, xmax: 125, ymin: 0, ymax: 16 }, segs: histo([20, 40, 60, 80, 100, 120], [3, 8, 14, 9, 2]), step: { x: 10, y: 2 } })),
  mc("For categorical data such as favourite colour, the best average is:", "the mode", ["the mean", "the median", "the range"], "Categories cannot be added or ordered."),
  num("Find the median of 21, 25, 18, 30, 25, 19, 27.", 25, "18, 19, 21, 25, 25, 27, 30."),
  num("In a list of 15 ordered values, which position is the median?", 8, "(15 + 1)/2."),
];

export const M = [
  num("Values 0, 1, 2, 3 have frequencies 5, 8, 4, 3. Find the mean.", 1.25, "(0 + 8 + 8 + 9)/20.", null, 1e-9),
  num("Values 0, 1, 2, 3 have frequencies 5, 8, 4, 3. Find the median.", 1, "n = 20: 10th and 11th are both 1."),
  num("Estimate the mean: 0–10 (f = 4), 10–20 (f = 10), 20–30 (f = 6).", 16, "(20 + 150 + 150)/20."),
  num("Estimate the mean: 50–60 (f = 2), 60–70 (f = 7), 70–80 (f = 8), 80–90 (f = 3).", 71, "(110 + 455 + 600 + 255)/20."),
  num("The mean of 8, 12, x, 15, 10 is 11. Find x.", 10, "Total 55; 45 + x."),
  num("The mean of 6 numbers is 15. A seventh number is added and the mean becomes 16. Find the seventh number.", 22, "112 − 90."),
  num("10 boys average 54 kg and 15 girls average 49 kg. Find the overall mean (kg).", 51, "(540 + 735)/25."),
  ms("For 3, 4, 4, 5, 6, 30, which are true? Select all.", ["the mean is 8.67", "the median is 4.5", "the mode is 4", "the mean is the best typical value"], [0, 1, 2], "30 pulls the mean up; the median is better."),
  num("Values 1, 2, 3 have frequencies 4, k, 6 and mean 2.1. Find k.", 10, "(4 + 2k + 18)/(10 + k) = 2.1 → 22 + 2k = 21 + 2.1k."),
  num("The chart shows goals scored per match. Find the mean.", 1.55, "Σfx = 0 + 7 + 12 + 12 = 31; Σf = 20.", planeDoc({ view: { xmin: -0.8, xmax: 3.8, ymin: 0, ymax: 9 }, segs: bars([[0, 3], [1, 7], [2, 6], [3, 4]]), step: { x: 1, y: 1 } }), 1e-9),
  num("Estimate the mean from the histogram (classes of width 10 from 0 to 40).", 23, "Midpoints 5, 15, 25, 35: (10 + 90 + 150 + 210)/20.", planeDoc({ view: { xmin: -2, xmax: 42, ymin: 0, ymax: 9 }, segs: histo([0, 10, 20, 30, 40], [2, 6, 6, 6]), step: { x: 5, y: 1 } })),
  tf("If every value in a data set is increased by 5, the mean increases by 5.", true, "The total increases by 5n."),
  num("The mean of a set of 8 numbers is 20. If each number is doubled, find the new mean.", 40, "Every value × 2."),
  mc("A shop wants to stock more of the most common dress size. Which average should it use?", "mode", ["mean", "median", "range"], "Most common value."),
  num("The mean of a, b, c is 9 and the mean of a, b, c, d is 10. Find d.", 13, "40 − 27."),
  num("In an ordered list of 24 values, the median is the average of which two positions? Give the smaller.", 12, "12th and 13th."),
  num("Values 10, 20, 30 have frequencies 1, 2, k. If the median is 30, what is the smallest possible k?", 4, "Need more than half at 30: k > 3."),
  num("The mean of 12 numbers is 7.5. One number, 15, is removed. Find the new mean (2 d.p.).", 75 / 11, "(90 − 15)/11.", null, 0.01),
  num("Estimate the mean: 100–120 (f = 6), 120–140 (f = 9), 140–160 (f = 5).", 129, "(660 + 1170 + 750)/20."),
  num("The median of 5, 8, x, 12, 15 (in order) is 10. Find x.", 10, "The middle value."),
];
