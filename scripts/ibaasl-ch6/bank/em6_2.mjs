// 6.2 Presenting Data — 20 easy + 20 medium questions
import { mc, ms, num, tf, fill } from "./kit.mjs";
import { planeDoc } from "../../mcr3u-ch1/bank/fig.mjs";

const S = String.raw;
const histo = (edges, f, color = "violet") => f.map((h, i) => ({ pts: [[edges[i], 0], [edges[i], h], [edges[i + 1], h], [edges[i + 1], 0]], color }));
const box = (mn, q1, q2, q3, mx, y = 1, h = 0.6, color = "violet") => [
  { pts: [[mn, y], [q1, y]], color }, { pts: [[q3, y], [mx, y]], color },
  { pts: [[q1, y - h / 2], [q3, y - h / 2], [q3, y + h / 2], [q1, y + h / 2], [q1, y - h / 2]], color },
  { pts: [[q2, y - h / 2], [q2, y + h / 2]], color: "red" },
];

export const E = [
  num("Find the median of 9, 3, 12, 6, 15.", 9, "3, 6, 9, 12, 15."),
  num("Find the median of 2, 8, 5, 11.", 6.5, "(5 + 8)/2.", null, 1e-9),
  num("Frequencies 6, 9, 4 give cumulative frequencies 6, 15, …. What is the last cumulative frequency?", 19, "15 + 4."),
  num("Q1 = 14 and Q3 = 26. Find the IQR.", 12, "26 − 14."),
  num("Find the range of 4, 17, 9, 22, 13.", 18, "22 − 4."),
  mc("Cumulative frequency is plotted against:", "the upper class boundary", ["the class midpoint", "the lower class boundary", "the frequency"], "By the end of a class all its values are counted."),
  mc("On a cumulative frequency graph for 200 values, the median is read at:", "cf = 100", ["cf = 50", "cf = 200", "x = 100"], "Half of 200."),
  tf("A box plot shows the minimum, Q1, median, Q3 and maximum.", true, "The five-number summary."),
  tf("The IQR contains the middle 75% of the data.", false, "It contains the middle 50%."),
  fill(S`A value below $Q_1-1.5\times\text{IQR}$ or above $Q_3+1.5\times\text{IQR}$ is called an ___.`, ["outlier", "Outlier"], "It is plotted separately."),
  num("Q1 = 30, Q3 = 40. Find the upper fence.", 55, "40 + 1.5 × 10."),
  num("Q1 = 30, Q3 = 40. Find the lower fence.", 15, "30 − 15."),
  num("The histogram shows the masses of some parcels. How many parcels are there?", 30, "4 + 10 + 12 + 4.", planeDoc({ view: { xmin: -1, xmax: 9, ymin: 0, ymax: 14 }, segs: histo([0, 2, 4, 6, 8], [4, 10, 12, 4]), step: { x: 1, y: 2 } })),
  num("From the box plot, find the median.", 42, "The red line.", planeDoc({ view: { xmin: 20, xmax: 70, ymin: 0, ymax: 2 }, segs: box(25, 35, 42, 50, 64), step: { x: 5, y: 1 } })),
  mc("Which graph best shows the shape of a distribution?", "a histogram", ["a cumulative frequency graph", "a box plot only", "a table"], "Bar heights show where data cluster."),
  num("For 80 values, at which cumulative frequency is Q3 read?", 60, "3/4 of 80."),
  num("Find Q1 of 3, 5, 8, 10, 13, 16.", 5, "Lower half 3, 5, 8."),
  num("Find Q3 of 3, 5, 8, 10, 13, 16.", 13, "Upper half 10, 13, 16."),
  mc("The modal class is the class with:", "the highest frequency", ["the highest cumulative frequency", "the widest interval", "the median in it"], "Most frequent class."),
  num("For 50 values, at which cumulative frequency is the 80th percentile read?", 40, "0.8 × 50."),
];

export const M = [
  num("Find the IQR of 2, 4, 7, 9, 12, 15, 17, 20.", 10.5, "Q1 = 5.5, Q3 = 16.", null, 1e-9),
  num("Find the IQR of 5, 8, 10, 11, 13, 16, 18, 21, 25.", 10.5, "Lower half 5, 8, 10, 11 → 9; upper 16, 18, 21, 25 → 19.5.", null, 1e-9),
  num("Data have Q1 = 18 and Q3 = 30. What is the largest value that is not an outlier?", 48, "Upper fence 30 + 18."),
  ms("Q1 = 20, Q3 = 28. Which values are outliers? Select all.", ["7", "9", "40", "41"], [0, 3], "Fences 8 and 40: 7 < 8, 41 > 40; 40 is on the fence, not beyond."),
  num("Frequencies of four classes are 7, 12, 15, 6. Find the cumulative frequency at the end of the third class.", 34, "7 + 12 + 15."),
  num("The cumulative frequency graph for 60 runners is shown. Estimate the median time (min).", 26, "Read across at 30.", planeDoc({ view: { xmin: 8, xmax: 42, ymin: 0, ymax: 62 }, segs: [{ pts: [[10, 0], [15, 5], [20, 14], [25, 26], [30, 42], [35, 55], [40, 60]], color: "violet" }, { pts: [[10, 30], [26.25, 30], [26.25, 0]], color: "red" }], step: { x: 5, y: 10 } }), 1),
  num("Using the same graph (60 runners), estimate how many took more than 30 minutes.", 18, "60 − 42."),
  num("The histogram shows exam marks. How many students scored at least 60?", 23, "15 + 8.", planeDoc({ view: { xmin: 15, xmax: 105, ymin: 0, ymax: 22 }, segs: histo([20, 40, 60, 80, 100], [6, 20, 15, 8]), step: { x: 10, y: 2 } })),
  mc("Two box plots have equal medians but box plot B has a wider box. This means:", "B has a larger IQR (more spread in the middle half)", ["B has a higher median", "B has more data", "B has outliers"], "The box width is the IQR."),
  num("For 240 values, what cumulative frequency gives the 15th percentile?", 36, "0.15 × 240."),
  tf("Values read from a cumulative frequency graph of grouped data are estimates.", true, "The exact values are unknown."),
  num("Data: 11, 13, 14, 15, 15, 17, 18, 20, 36. Find the upper fence (IB halves method).", 27.25, "Median 15; Q1 = (13 + 14)/2 = 13.5, Q3 = (18 + 20)/2 = 19; IQR 5.5; 19 + 8.25.", null, 1e-9),
  mc("A box plot has its median closer to Q1 and a long right whisker. The distribution is:", "positively (right) skewed", ["negatively skewed", "symmetric", "uniform"], "The data spread further to the right."),
  num("A grouped table has frequencies 5, 11, k, 4 and n = 40. Find k.", 20, "40 − 20."),
  num("In a set of 120 values, Q1 = 32 and Q3 = 50. About how many values lie between 32 and 50?", 60, "The middle 50%."),
  num("The box plot shows reaction times. Find the IQR (ms).", 70, "320 − 250.", planeDoc({ view: { xmin: 180, xmax: 420, ymin: 0, ymax: 2 }, segs: box(200, 250, 280, 320, 400), step: { x: 20, y: 1 } })),
  mc("Which summary is resistant to an extreme value?", "the median and IQR", ["the mean and range", "the range only", "the maximum"], "They depend on middle values."),
  num("Frequencies 3, 8, 12, 7 are given. In which class (1st, 2nd, 3rd or 4th) is the median? Give the number.", 3, "n = 30; 15th value: cf 3, 11, 23."),
  num("A cf graph of 160 values gives the 25th percentile 18 and the 75th percentile 31. Find the IQR.", 13, "Q3 − Q1."),
  num("Find the median of the frequency table: x = 1, 2, 3, 4 with f = 4, 9, 5, 2.", 2, "n = 20: 10th and 11th values are both 2."),
];
