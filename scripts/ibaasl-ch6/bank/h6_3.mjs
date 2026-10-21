// 6.3 Measures of Central Tendency — 20 hard questions
import { mc, ms, num, tf } from "./kit.mjs";
import { planeDoc } from "../../mcr3u-ch1/bank/fig.mjs";

const S = String.raw;
const bars = (pairs, color = "violet", w = 0.6) => pairs.map(([x, h]) => ({ pts: [[x - w / 2, 0], [x - w / 2, h], [x + w / 2, h], [x + w / 2, 0]], color }));
const histo = (edges, f, color = "violet") => f.map((h, i) => ({ pts: [[edges[i], 0], [edges[i], h], [edges[i + 1], h], [edges[i + 1], 0]], color }));

export const TOPIC = "6.3 Measures of Central Tendency";
export const Q = [
  num("Values 2, 4, 6, 8 have frequencies 5, k, 9, 2 and mean 4.8. Find k.", 4, "(80 + 4k)/(16 + k) = 4.8 → 80 + 4k = 76.8 + 4.8k → 0.8k = 3.2."),
  num("The mean of x, x + 2, x + 5, 2x and 3x is 11. Find x.", 6, "8x + 7 = 55."),
  num("Five numbers have mean 8, median 7 and mode 4. The largest is 15. Find the second largest, given the numbers are 4, 4, 7, a, 15 with 7 < a < 15.", 10, "Total 40: 30 + a = 40."),
  num("Estimate the mean from the histogram of 50 commute times (min).", 24.6, "Midpoints 5, 15, 25, 35, 45: (20 + 210 + 400 + 420 + 180)/50 = 1230/50.", planeDoc({ view: { xmin: -2, xmax: 52, ymin: 0, ymax: 18 }, segs: histo([0, 10, 20, 30, 40, 50], [4, 14, 16, 12, 4]), step: { x: 5, y: 2 } }), 0.05),
  num("Class A (n = 18) has mean 64; the combined mean of A and B (n = 30 in total) is 67. Find the mean of class B.", 71.5, "(30 × 67 − 18 × 64)/12 = (2010 − 1152)/12.", null, 1e-9),
  num("The mean of 20 values was 45. It was found that 36 had been recorded as 63. Find the correct mean.", 43.65, "(900 − 63 + 36)/20.", null, 1e-9),
  ms("The data 1, 2, 2, 3, 4, 4, 4, 5, 30 are given. Which are true? Select all.", ["mode 4", "median 4", "mean ≈ 6.11", "removing 30 changes the median more than the mean"], [0, 1, 2], "Removing 30 changes the mean far more."),
  num("Values 1, 2, 3, 4, 5 have frequencies 3, 5, 9, k, 2. The median is 3. Find the largest possible integer k.", 14, "n = 19 + k; the median position (20 + k)/2 must be at most 17 (the last 3): k ≤ 14. With k = 15 the median is (3 + 4)/2."),
  tf("If the mean and median of a data set are equal, the data must be symmetric.", false, "e.g. 2, 3, 5, 6, 9 has mean = median = 5 but is not symmetric."),
  num("The bar chart shows the number of books read by 25 students. Find the median.", 2, "13th value: cf 3, 9, 17, …", planeDoc({ view: { xmin: -0.8, xmax: 5.8, ymin: 0, ymax: 10 }, segs: bars([[0, 3], [1, 6], [2, 8], [3, 5], [4, 2], [5, 1]]), step: { x: 1, y: 1 } })),
  num("For the same chart (25 students), find the mean number of books.", 2, "Σfx = 0 + 6 + 16 + 15 + 8 + 5 = 50; 50 ÷ 25."),
  num("Each of 12 numbers is multiplied by 3 and then 4 is subtracted. The new mean is 26. Find the original mean.", 10, "3m − 4 = 26."),
  num("The histogram shown has classes 0–5, 5–10, 10–15, 15–20. Estimate the mean.", 10.5, "Frequencies 2, 8, 6, 4; midpoints 2.5, 7.5, 12.5, 17.5: (5 + 60 + 75 + 70)/20.", planeDoc({ view: { xmin: -1, xmax: 21, ymin: 0, ymax: 9 }, segs: histo([0, 5, 10, 15, 20], [2, 8, 6, 4]), step: { x: 5, y: 1 } }), 1e-9),
  mc("A teacher says 'the average mark was 72' but most students scored below 72. Which is most likely?", "a few very high marks raised the mean above the median", ["the mode is 72", "the median is 72", "the data are symmetric"], "Right-skewed data have mean > median."),
  num("The mean of four consecutive even numbers is 15. Find the largest.", 18, "12, 14, 16, 18."),
  num("Two numbers are added to 3, 5, 9, 11 so that the mean becomes 8 and both new numbers are equal. Find each new number.", 10, "Total 48: 28 + 2x = 48."),
  num("The histogram shows ages of 40 club members. Estimate the mean age.", 38.25, "Midpoints 15, 25, 35, 45, 55, 65: (45 + 200 + 420 + 405 + 330 + 130)/40 = 1530/40.", planeDoc({ view: { xmin: 8, xmax: 72, ymin: 0, ymax: 14 }, segs: histo([10, 20, 30, 40, 50, 60, 70], [3, 8, 12, 9, 6, 2]), step: { x: 10, y: 2 } }), 0.5),
  num("A data set of 9 values has median 20. A tenth value, 35, is added; the 5th and 6th ordered values are now 20 and 24. Find the new median.", 22, "(20 + 24)/2."),
  num("The mean salary of 9 employees is 42 000. When the manager's salary is included the mean becomes 48 000. Find the manager's salary.", 102000, "10 × 48 000 − 9 × 42 000."),
  tf("Adding a value equal to the mean to a data set leaves the mean unchanged.", true, "The new total is (n + 1) × mean."),
];
