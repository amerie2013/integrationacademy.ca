// 6.2 Presenting Data — 20 hard questions
import { mc, ms, num, tf } from "./kit.mjs";
import { planeDoc } from "../../mcr3u-ch1/bank/fig.mjs";

const S = String.raw;
const histo = (edges, f, color = "violet") => f.map((h, i) => ({ pts: [[edges[i], 0], [edges[i], h], [edges[i + 1], h], [edges[i + 1], 0]], color }));
const box = (mn, q1, q2, q3, mx, y = 1, h = 0.6, color = "violet") => [
  { pts: [[mn, y], [q1, y]], color }, { pts: [[q3, y], [mx, y]], color },
  { pts: [[q1, y - h / 2], [q3, y - h / 2], [q3, y + h / 2], [q1, y + h / 2], [q1, y - h / 2]], color },
  { pts: [[q2, y - h / 2], [q2, y + h / 2]], color: "red" },
];

export const TOPIC = "6.2 Presenting Data";
export const Q = [
  num("Frequencies 4, k, 18, 10 have the median exactly at the upper boundary of the second class. Find k.", 24, "4 + k = (32 + k)/2."),
  num("The cumulative frequency graph of 200 waiting times is shown. Estimate the IQR (min).", 12, "Q1 at 50 ≈ 14, Q3 at 150 ≈ 26.", planeDoc({ view: { xmin: 0, xmax: 50, ymin: 0, ymax: 205 }, segs: [{ pts: [[0, 0], [10, 20], [14, 50], [20, 100], [26, 150], [35, 185], [45, 200]], color: "violet" }], step: { x: 5, y: 20 } }), 1),
  num("Using the same graph (200 waiting times), estimate the number who waited longer than 35 minutes.", 15, "200 − 185."),
  num("Data: 3, 7, 8, 9, 10, 11, 12, 13, 14, 29. Find the upper fence (IB halves method).", 20.5, "Median 10.5; Q1 = 8, Q3 = 13; IQR 5; 13 + 7.5.", null, 1e-9),
  num("Q1 = 45 and the lower fence is 21. Find the upper fence.", 85, "1.5 IQR = 24, so IQR = 16 and Q3 = 61; 61 + 24."),
  mc("Two box plots are shown. Which statement is correct?", "B has the higher median but A has the larger IQR", ["A has the higher median", "they have equal IQRs", "B has the larger range"], "A: median 50, IQR 25; B: median 58, IQR 12.", planeDoc({ view: { xmin: 25, xmax: 85, ymin: 0, ymax: 3 }, segs: [...box(30, 38, 50, 63, 80, 2, 0.6, "blue"), ...box(40, 52, 58, 64, 75, 1, 0.6, "green")], step: { x: 5, y: 1 } })),
  num("In a data set of 400 values, the 10th percentile is 24 and the 90th is 81. How many values lie between 24 and 81?", 320, "80% of 400."),
  num("A frequency table has x = 1, 2, 3, 4, 5 with f = 3, 6, 8, 5, 2. Find Q3.", 4, "n = 24; Q3 between the 18th and 19th values: cf 3, 9, 17, 22 → both are 4."),
  tf("If the median of a box plot is exactly halfway between Q1 and Q3, the data must be symmetric.", false, "The whiskers (tails) could still differ."),
  num("The histogram shows journey times (min). Estimate the number of journeys over 25 minutes, assuming values are spread evenly within classes.", 13, "Half of the 20–30 class (10/2 = 5) plus 8.", planeDoc({ view: { xmin: -2, xmax: 42, ymin: 0, ymax: 16 }, segs: histo([0, 10, 20, 30, 40], [6, 14, 10, 8]), step: { x: 5, y: 2 } })),
  ms("A box plot has minimum 12, Q1 20, median 26, Q3 30, maximum 52. Which are true? Select all.", ["52 is an outlier", "the IQR is 10", "the upper fence is 45", "12 is an outlier"], [0, 1, 2], "Fences 5 and 45."),
  num("A cf curve for 120 students gives: 30% scored below 42 and 85% scored below 71. How many scored between 42 and 71?", 66, "55% of 120."),
  num("Data have median 40, Q1 32 and the lower fence 8. Is the data point 6 an outlier? Answer 1 for yes, 0 for no.", 1, "6 < 8."),
  num("The box plot of 21 values is shown. At least how many values are at or below 36?", 11, "The median of 21 values is the 11th.", planeDoc({ view: { xmin: 15, xmax: 65, ymin: 0, ymax: 2 }, segs: box(18, 28, 36, 45, 60), step: { x: 5, y: 1 } })),
  num("Frequencies of 5 equal classes are 2, 7, 15, 11, 5. In which class (1–5) is the 75th percentile?", 4, "n = 40; 30th value: cf 2, 9, 24, 35."),
  mc("A histogram has a long tail to the left. Compared with the median, the mean is likely to be:", "smaller", ["larger", "equal", "impossible to say"], "Low values pull the mean down."),
  num("Data: 2, 4, 4, 5, 6, 7, 9, 10, 12, 15, 40. Find the IQR (IB halves method).", 8, "Median 7; Q1 = 4 (of 2, 4, 4, 5, 6), Q3 = 12 (of 9, 10, 12, 15, 40)."),
  num("A cf graph is shown for 80 plants. The tallest 20% are selected. Estimate the minimum height (cm) of a selected plant.", 35.5, "Read across at 64: 30 + (12/22) × 10 ≈ 35.5.", planeDoc({ view: { xmin: 0, xmax: 50, ymin: 0, ymax: 82 }, segs: [{ pts: [[0, 0], [10, 6], [20, 22], [30, 52], [40, 74], [50, 80]], color: "violet" }], step: { x: 5, y: 10 } }), 1),
  tf("On a box plot, an outlier is plotted as a separate point and the whisker ends at the most extreme value inside the fences.", true, "That is the convention."),
  num("Two classes of 30 have medians 65 and 72 and IQRs 18 and 9. By how much is the second class's median higher?", 7, "72 − 65."),
];
