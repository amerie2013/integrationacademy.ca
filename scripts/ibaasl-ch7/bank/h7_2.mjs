// 7.2 Pearson's Correlation Coefficient — 20 hard questions
import { mc, ms, num, tf } from "./kit.mjs";
import { planeDoc, P } from "../../mcr3u-ch1/bank/fig.mjs";
import { st, list, pts } from "./st.mjs";

const S = String.raw;
const A = [[1, 2, 3, 4, 5, 6, 7, 8], [3, 4, 4, 6, 7, 7, 9, 10]];
const Aout = [[...A[0], 9], [...A[1], 1]];
const B = [[4, 6, 8, 10, 12, 14], [30, 26, 25, 19, 16, 12]];
const C = [[-3, -2, -1, 0, 1, 2, 3], [9, 4, 1, 0, 1, 4, 9]];

export const TOPIC = "7.2 Pearson's Correlation Coefficient";
export const Q = [
  num(S`Find $r$ for x: ${list(A[0])}; y: ${list(A[1])} (3 d.p.).`, st(...A).r, "GDC or formula.", planeDoc({ view: { xmin: 0, xmax: 10, ymin: 0, ymax: 11 }, points: pts(...A), step: { x: 1, y: 1 } }), 0.002),
  num("The point (9, 1) is added to the data shown (red). Find the new r (3 d.p.).", st(...Aout).r, "Recalculate with 9 points.", planeDoc({ view: { xmin: 0, xmax: 11, ymin: 0, ymax: 11 }, points: [...pts(...A), P(9, 1, null, "red")], step: { x: 1, y: 1 } }), 0.002),
  num(S`Find $r$ for x: ${list(B[0])}; y: ${list(B[1])} (3 d.p.).`, st(...B).r, "GDC.", null, 0.002),
  num(S`The data x: ${list(B[0])}; y: ${list(B[1])} are converted: x to x/2 and y to y + 100. Find the new $r$ (3 d.p.).`, st(...B).r, "Linear changes of units do not change r.", null, 0.002),
  num(S`Find $r$ for the points shown, which lie on $y=x^2$.`, 0, "Sxy = 0 by symmetry.", planeDoc({ view: { xmin: -4, xmax: 4, ymin: -1, ymax: 10 }, points: pts(...C), step: { x: 1, y: 1 } })),
  num(S`For 6 pairs, $\sum x=27$, $\sum y=66$, $\sum xy=328$, $\sum x^2=139$, $\sum y^2=794$. Find $r$ (3 d.p.).`, (328 - 27 * 66 / 6) / Math.sqrt((139 - 27 * 27 / 6) * (794 - 66 * 66 / 6)), "Sxy = 31, Sxx = 17.5, Syy = 68.", null, 0.002),
  num(S`$r=-0.8$, $S_{xx}=25$, $S_{yy}=64$. Find $S_{xy}$.`, -32, "−0.8 × √1600."),
  mc(S`Data have $r=0.72$. Each x-value is multiplied by $-3$. The new $r$ is:`, S`$-0.72$`, [S`$0.72$`, S`$-2.16$`, S`$2.16$`], "Multiplying one variable by a negative number reverses the direction."),
  tf(S`Removing an outlier always increases $|r|$.`, false, "If the outlier lies along the trend, removing it can decrease |r|."),
  ms("Which situations could give a misleadingly high r? Select all.", ["two separate clusters", "one extreme point in line with a cloud", "a strong curve that is nearly monotonic", "points scattered randomly"], [0, 1, 2], "Random scatter gives r near 0."),
  num(S`Two data sets each have $S_{xx}=40$ and $S_{yy}=90$. Set A has $S_{xy}=54$, set B has $S_{xy}=-30$. Find $|r_A|-|r_B|$.`, 54 / 60 - 30 / 60, "√3600 = 60.", null, 1e-9),
  num("The scatter diagram shows 7 points. Calculate r (3 d.p.).", st([2, 3, 5, 6, 8, 9, 11], [12, 10, 9, 8, 6, 4, 3]).r, "Read the points: (2, 12), (3, 10), (5, 9), (6, 8), (8, 6), (9, 4), (11, 3).", planeDoc({ view: { xmin: 0, xmax: 12, ymin: 0, ymax: 14 }, points: pts([2, 3, 5, 6, 8, 9, 11], [12, 10, 9, 8, 6, 4, 3]), step: { x: 1, y: 1 } }), 0.002),
  mc("A study of 200 cities finds r = 0.91 between the number of libraries and the number of crimes. The best explanation is:", "both increase with population", ["libraries cause crime", "crime causes libraries", "the correlation is negative"], "Lurking variable."),
  num(S`For x: 1, 2, 3, 4, 5 and y: 2, 4, 6, 8, k, find $k$ so that $r=1$.`, 10, "All points must lie on y = 2x."),
  num(S`For $n=8$, $S_{xy}=45$, $S_{xx}=30$, $S_{yy}=75$. Find $r$ (3 d.p.).`, 45 / Math.sqrt(2250), "45/√2250.", null, 0.002),
  tf(S`For any data set, $r$ and the gradient of the regression line of y on x have the same sign.`, true, "Both have the sign of Sxy."),
  num(S`$r=0.9$, $S_{xy}=36$ and $S_{xx}=16$. Find $S_{yy}$.`, 100, "0.9 = 36/√(16 Syy) → √(16 Syy) = 40."),
  mc(S`If every point lies on the line $y=5$, $r$ is:`, "not defined", ["0", "1", "−1"], "Syy = 0, so the formula divides by zero."),
  num("The scatter diagram of 8 points is shown. Find r (3 d.p.).", st([1, 2, 3, 4, 5, 6, 7, 8], [5, 3, 6, 4, 7, 5, 8, 6]).r, "(1, 5), (2, 3), (3, 6), (4, 4), (5, 7), (6, 5), (7, 8), (8, 6).", planeDoc({ view: { xmin: 0, xmax: 9, ymin: 0, ymax: 10 }, points: pts([1, 2, 3, 4, 5, 6, 7, 8], [5, 3, 6, 4, 7, 5, 8, 6]), step: { x: 1, y: 1 } }), 0.002),
  mc("For the 8 points in the previous question, the correlation is best described as:", st([1, 2, 3, 4, 5, 6, 7, 8], [5, 3, 6, 4, 7, 5, 8, 6]).r >= 0.5 ? "moderate positive" : "weak positive", st([1, 2, 3, 4, 5, 6, 7, 8], [5, 3, 6, 4, 7, 5, 8, 6]).r >= 0.5 ? ["strong positive", "weak negative", "none"] : ["strong positive", "moderate negative", "none"], "Compare r with the 0.25 / 0.5 / 0.75 boundaries."),
];
