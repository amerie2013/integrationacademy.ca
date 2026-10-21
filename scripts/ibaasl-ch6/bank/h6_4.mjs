// 6.4 Measures of Dispersion — 20 hard questions
import { mc, ms, num, tf } from "./kit.mjs";
import { planeDoc } from "../../mcr3u-ch1/bank/fig.mjs";

const S = String.raw;
const dotplot = (xs, y0 = 0, color = "violet") => { const seen = {}; return xs.map((x) => ({ x, y: y0 + (seen[x] = (seen[x] ?? 0) + 1) * 0.4, color })); };
const box = (mn, q1, q2, q3, mx, y = 1, h = 0.6, color = "violet") => [
  { pts: [[mn, y], [q1, y]], color }, { pts: [[q3, y], [mx, y]], color },
  { pts: [[q1, y - h / 2], [q3, y - h / 2], [q3, y + h / 2], [q1, y + h / 2], [q1, y - h / 2]], color },
  { pts: [[q2, y - h / 2], [q2, y + h / 2]], color: "red" },
];

export const TOPIC = "6.4 Measures of Dispersion";
export const Q = [
  num(S`The data $2, 5, 8, x$ have mean 6. Find the standard deviation (3 s.f.).`, Math.sqrt(7.5), "x = 9; deviations −4, −1, 2, 3; squares sum 30; σ² = 7.5.", null, 0.005),
  num(S`For 10 values, $\sum x=120$ and $\sum x^2=1530$. Find the standard deviation.`, 3, "153 − 144 = 9."),
  num(S`For $n$ values, $\sum x=60$, $\sum x^2=420$ and the mean is 6. Find the variance.`, 6, "n = 10: 42 − 36."),
  num("Values 0, 1, 2, 3 have frequencies 4, 6, 6, 4. Find the standard deviation (3 s.f.).", Math.sqrt(1.05), "Mean 1.5; Σf(x − 1.5)² = 4(2.25) + 6(0.25) + 6(0.25) + 4(2.25) = 21; 21/20.", null, 0.005),
  num("Data have mean 50 and SD 8. They are transformed by y = (x − 50)/8. Find the new SD.", 1, "Subtracting does not change spread; dividing by 8 divides it."),
  num("For the same transformation y = (x − 50)/8, find the new mean.", 0, "(50 − 50)/8."),
  num("Data have mean m and SD 6. After y = ax + b the mean is 3m + 4 and the SD is 18. Find a.", 3, "Mean gives a = 3; SD 6a = 18 agrees."),
  ms("A data set has mean 20, SD 4 and IQR 6. After y = 20 − x, which are true? Select all.", ["the new mean is 0", "the new SD is 4", "the new IQR is 6", "the new SD is −4"], [0, 1, 2], "Multiplying by −1 keeps the SD and IQR positive."),
  num("The dot plot shows 8 values. Find their standard deviation.", 2, "Values 2, 3, 3, 5, 6, 6, 7, 8: mean 5; squared deviations sum to 32; σ² = 32/8 = 4.", planeDoc({ view: { xmin: 0, xmax: 10, ymin: 0, ymax: 2 }, points: dotplot([2, 3, 3, 5, 6, 6, 7, 8]), step: { x: 1, y: 1 } }), 0.005),
  num("Two classes took a test: class A (box plot top) and class B (bottom). Find the difference between their medians.", 6, "A 62, B 68.", planeDoc({ view: { xmin: 35, xmax: 95, ymin: 0, ymax: 3 }, segs: [...box(40, 52, 62, 72, 90, 2, 0.6, "blue"), ...box(50, 62, 68, 74, 86, 1, 0.6, "green")], step: { x: 5, y: 1 } })),
  num("For the same box plots, find the ratio of A's IQR to B's IQR.", 20 / 12, "A: 72 − 52 = 20; B: 74 − 62 = 12.", null, 0.01),
  tf("If a data set's standard deviation is 0, all its values are equal.", true, "Every deviation must be 0."),
  num("A set of 5 values has mean 10 and variance 4. A sixth value, 10, is added. Find the new variance (3 s.f.).", 20 / 6, "The sum of squared deviations stays 20; divide by 6.", null, 0.005),
  num("Machine A's bags have mean 1002 g and SD 3 g; machine B's have mean 1000 g and SD 7 g. Using mean ± 2 SD (shown), what is the lowest typical mass from B?", 986, "1000 − 14.", planeDoc({ view: { xmin: 980, xmax: 1020, ymin: 0, ymax: 3 }, segs: [{ pts: [[996, 2], [1008, 2]], color: "blue" }, { pts: [[986, 1], [1014, 1]], color: "green" }], points: [{ x: 1002, y: 2, color: "blue", label: "A" }, { x: 1000, y: 1, color: "green", label: "B" }], step: { x: 5, y: 1 } })),
  num("In °C a city's temperatures have SD 5. What is their variance in °F (F = 1.8C + 32)?", 81, "SD 9 °F, variance 81."),
  mc("Which change to a data set increases the standard deviation?", "replacing the largest value with a much larger one", ["adding the same number to every value", "removing an outlier", "adding a value equal to the mean"], "It increases the deviations."),
  num(S`The values $a, a+2, a+4, a+6$ have standard deviation $\sigma$. Find $\sigma^2$.`, 5, "Deviations −3, −1, 1, 3: (9 + 1 + 1 + 9)/4."),
  num("A frequency table of times (s) is shown as a histogram with midpoints 5, 15, 25 and frequencies 2, 6, 2. Find the estimated SD (3 s.f.).", Math.sqrt(40), "Mean 15; Σf(x − 15)² = 200 + 0 + 200 = 400; 400/10.", planeDoc({ view: { xmin: -1, xmax: 31, ymin: 0, ymax: 7 }, segs: [[0, 10, 2], [10, 20, 6], [20, 30, 2]].map(([a, b, h]) => ({ pts: [[a, 0], [a, h], [b, h], [b, 0]], color: "violet" })), step: { x: 5, y: 1 } }), 0.01),
  num("Data have Q1 = 24, Q3 = 36. Every value is multiplied by 1.5 and then 10 is added. Find the new IQR.", 18, "1.5 × 12."),
  num("Data have Q1 = 24, Q3 = 36. After y = 1.5x + 10, find the new upper fence for outliers.", 91, "New Q3 = 64, IQR 18: 64 + 27."),
];
