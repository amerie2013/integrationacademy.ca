// 7.1 Scatter Diagrams and Correlation — 20 hard questions
import { mc, ms, num, tf } from "./kit.mjs";
import { planeDoc, P } from "../../mcr3u-ch1/bank/fig.mjs";
import { pts } from "./st.mjs";

const S = String.raw;
const quad = (xs, ys) => { const n = xs.length, mx = xs.reduce((a, b) => a + b, 0) / n, my = ys.reduce((a, b) => a + b, 0) / n; return xs.reduce((c, x, i) => c + ((x - mx) * (ys[i] - my) > 0 ? 1 : 0), 0); };
const QX = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], QY = [2, 7, 3, 6, 4, 8, 5, 10, 8, 11];

export const TOPIC = "7.1 Scatter Diagrams and Correlation";
export const Q = [
  num("Six points have mean point (7, 30). Five are (2, 18), (4, 24), (8, 31), (10, 36), (12, 40). Find the y-coordinate of the sixth.", 31, "Total y = 180; 180 − 149."),
  num("For the same six points (mean (7, 30)), find the x-coordinate of the sixth.", 6, "Total x = 42; 42 − 36."),
  num("How many of the 10 points shown lie in the 'positive' quadrants (top-right or bottom-left) of the mean point?", quad(QX, QY), "Compare each point with x̄ = 5.5 and ȳ = 6.4.", planeDoc({ view: { xmin: 0, xmax: 11, ymin: 0, ymax: 12 }, points: [...pts(QX, QY), P(5.5, 6.4, "mean ", "amber")], lines: [{ m: 0, b: 6.4, color: "amber", dash: true }], vlines: [{ x: 5.5, color: "amber", dash: true }], step: { x: 1, y: 1 } })),
  mc("Most points of a scatter diagram lie in the top-left and bottom-right quadrants of the mean point. This suggests:", "negative correlation", ["positive correlation", "no correlation", "a non-linear relationship"], "x above average goes with y below average."),
  tf("If every point lies in the top-right or bottom-left quadrants about the mean point, the correlation is positive.", true, "All products of deviations are positive."),
  mc("A study finds that students who eat breakfast get higher grades. Which is the best conclusion?", "breakfast is associated with higher grades, but other factors may explain it", ["breakfast causes higher grades", "higher grades cause breakfast", "the study is useless"], "Observational association only."),
  num("A data set of 9 points has mean point (5, 12). A tenth point (15, 2) is added. Find the new x̄.", 6, "(45 + 15)/10."),
  num("For the same data (mean (5, 12) for 9 points, plus (15, 2)), find the new ȳ.", 11, "(108 + 2)/10."),
  mc("Adding the point (15, 2) to data with a positive trend and mean point (5, 12) is likely to:", "weaken the positive correlation", ["strengthen it", "make it perfect", "have no effect"], "The point lies far below the trend."),
  ms("Which variable pairs probably have a lurking variable behind their correlation? Select all.", ["number of TVs and life expectancy across countries", "shoe size and vocabulary of children", "height and arm span", "engine size and fuel use"], [0, 1], "Wealth and age drive the first two."),
  mc("The scatter diagram shows two clusters. Describing the whole data set with a single correlation is:", "misleading — the groups should be considered separately", ["always correct", "correct if r is large", "impossible"], "Two groups can create a false trend.", planeDoc({ view: { xmin: 0, xmax: 13, ymin: 0, ymax: 13 }, points: [...pts([1, 1.5, 2, 2.5, 3, 2], [2, 3, 1.5, 2.5, 2, 1]), ...pts([9, 10, 10.5, 11, 9.5, 11.5], [10, 9, 11, 10.5, 11.5, 9.5], "green")], step: { x: 1, y: 1 } })),
  num("The mean point of (x₁, y₁), …, (x₈, y₈) is (4, 9). Find Σy.", 72, "8 × 9."),
  num("A point (a, 2a) is added to (1, 3), (2, 5), (6, 7) and the new mean point is (3, 5). Find a.", 3, "x: 9 + a = 12."),
  tf("A strong correlation can be produced by coincidence if the data set is small.", true, "With few points chance patterns are common."),
  mc("The scatter diagram shows an outlier. Removing it would most likely make the correlation:", "stronger", ["weaker", "change sign", "unchanged"], "The rest lie close to a line.", planeDoc({ view: { xmin: 0, xmax: 13, ymin: 0, ymax: 12 }, points: [...pts([1, 2, 3, 4, 5, 6, 7, 8, 9], [2, 3, 4, 5, 6, 7, 8, 9, 10]), P(9.5, 2, "outlier ", "red")], step: { x: 1, y: 1 } })),
  num("For points (2, 10), (4, 7), (6, 6), (8, 3), how many lie in the 'negative' quadrants (top-left or bottom-right) of the mean point (shown)?", 4, "x̄ = 5, ȳ = 6.5: (2, 10) and (4, 7) top-left; (6, 6) and (8, 3) bottom-right.", planeDoc({ view: { xmin: 0, xmax: 10, ymin: 0, ymax: 12 }, points: [...pts([2, 4, 6, 8], [10, 7, 6, 3]), P(5, 6.5, "mean ", "amber")], lines: [{ m: 0, b: 6.5, color: "amber", dash: true }], vlines: [{ x: 5, color: "amber", dash: true }], step: { x: 1, y: 1 } })),
  mc("Which design could show that one variable causes another?", "a controlled experiment with random allocation", ["a large observational survey", "a scatter diagram with r = 0.99", "historical data"], "Experiments control other factors."),
  num("Data have mean point (12, 40). Every y-value is doubled. Find the new ȳ.", 80, "2 × 40."),
  mc("Points on a scatter diagram form a tight upward curve that flattens out. The best description is:", "strong positive non-linear relationship", ["strong positive linear correlation", "weak correlation", "no relationship"], "Increasing, not straight."),
  num("A class records 12 points with mean point (6.5, 70). If one point (6.5, 70) is removed, what is the new x̄?", 6.5, "Removing a point at the mean leaves the mean unchanged.", null, 1e-9),
];
