// 7.2 Pearson's Correlation Coefficient — 20 easy + 20 medium questions
import { mc, ms, num, tf, fill } from "./kit.mjs";
import { planeDoc } from "../../mcr3u-ch1/bank/fig.mjs";
import { st, list, pts } from "./st.mjs";

const S = String.raw;
const D1 = [[1, 2, 3, 4, 5], [2, 3, 5, 6, 9]], D2 = [[2, 4, 6, 8], [9, 7, 4, 2]], D3 = [[3, 5, 7, 9, 11], [4, 9, 8, 14, 15]];
const D4 = [[10, 20, 30, 40, 50, 60], [55, 62, 70, 74, 85, 90]], D5 = [[1, 2, 3, 4, 5, 6, 7], [20, 18, 19, 14, 12, 11, 7]];

export const E = [
  mc("Which value could be a correlation coefficient?", "−0.64", ["1.3", "−2", "5"], "−1 ≤ r ≤ 1."),
  mc(S`$r=0.92$ indicates:`, "strong positive linear correlation", ["weak positive correlation", "strong negative correlation", "no correlation"], "Large positive."),
  mc(S`$r=-0.15$ indicates:`, "very weak or no linear correlation", ["strong negative correlation", "moderate negative correlation", "perfect correlation"], "|r| < 0.25."),
  mc(S`$r=-0.68$ indicates:`, "moderate negative linear correlation", ["strong negative correlation", "weak positive correlation", "no correlation"], "0.5 ≤ |r| < 0.75."),
  mc("Which shows the strongest linear correlation?", "−0.95", ["0.9", "0.5", "−0.3"], "Largest |r|."),
  tf(S`If all points lie exactly on a line with positive gradient, $r=1$.`, true, "Perfect positive."),
  tf(S`$r=0$ means the two variables are definitely unrelated.`, false, "There may be a non-linear relationship."),
  fill(S`The sign of $r$ tells you the ___ of the correlation.`, ["direction", "Direction"], "Positive or negative."),
  num(S`All points lie on $y=10-3x$. Find $r$.`, -1, "Perfect negative line."),
  num(S`$S_{xy}=12$, $S_{xx}=9$, $S_{yy}=16$. Find $r$.`, 1, "12/√144."),
  num(S`$S_{xy}=-6$, $S_{xx}=4$, $S_{yy}=25$. Find $r$.`, -0.6, "−6/10.", null, 1e-9),
  num(S`$S_{xy}=15$, $S_{xx}=10$, $S_{yy}=40$. Find $r$.`, 0.75, "15/20.", null, 1e-9),
  mc(S`Heights are converted from cm to m. The value of $r$ for height and mass:`, "does not change", ["is divided by 100", "is multiplied by 100", "becomes 0"], "Rescaling leaves r unchanged."),
  mc("The scatter diagram is closest to which value of r?", "0.95", ["−0.95", "0", "0.3"], "Points almost on a rising line.", planeDoc({ view: { xmin: 0, xmax: 11, ymin: 0, ymax: 22 }, points: pts([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [2, 4.5, 5.5, 8, 10, 11.5, 14, 15.5, 18, 20]), step: { x: 1, y: 2 } })),
  mc("Estimate r for the scatter diagram shown.", "about −0.9", ["about 0.9", "about 0", "about −0.3"], "A tight downward pattern.", planeDoc({ view: { xmin: 0, xmax: 11, ymin: 0, ymax: 22 }, points: pts([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [20, 18, 17.5, 15, 13, 12.5, 10, 8, 7.5, 5]), step: { x: 1, y: 2 } })),
  tf("Swapping the x and y variables changes the value of r.", false, "The formula is symmetric."),
  mc(S`A large value of $|r|$ shows:`, "a strong linear association", ["that x causes y", "that y causes x", "a steep line"], "Association, not cause; not slope."),
  num(S`$r^2=0.81$ and the correlation is negative. Find $r$.`, -0.9, "√0.81 with a negative sign.", null, 1e-9),
  mc(S`Which value of $r$ describes weak positive correlation?`, "0.35", ["0.85", "−0.35", "0.05"], "0.25 ≤ r < 0.5."),
  mc(S`The value of $r$ for data lying on $y=x^2$, $x=-3,\dots,3$ is:`, "0", ["1", "−1", "0.5"], "Symmetric curve: no linear correlation."),
];

export const M = [
  num(S`Find $r$ for the data x: ${list(D1[0])}; y: ${list(D1[1])} (3 d.p.).`, st(...D1).r, "Sxy = 17, Sxx = 10, Syy = 30: r = 17/√300.", null, 0.002),
  num(S`Find $r$ for x: ${list(D2[0])}; y: ${list(D2[1])} (3 d.p.).`, st(...D2).r, "A strong negative pattern.", null, 0.002),
  num(S`Find $r$ for x: ${list(D3[0])}; y: ${list(D3[1])} (3 d.p.).`, st(...D3).r, "Use a GDC.", null, 0.002),
  num(S`Use a GDC: x: ${list(D4[0])}; y: ${list(D4[1])}. Find $r$ (3 d.p.).`, st(...D4).r, "Linear regression on the lists.", null, 0.002),
  num(S`Use a GDC: x: ${list(D5[0])}; y: ${list(D5[1])}. Find $r$ (3 d.p.).`, st(...D5).r, "Linear regression on the lists.", null, 0.002),
  num(S`For x: ${list(D1[0])}, y: ${list(D1[1])}, find $S_{xx}$.`, st(...D1).sxx, "Σ(x − 3)²."),
  num(S`For x: ${list(D1[0])}, y: ${list(D1[1])}, find $S_{xy}$.`, st(...D1).sxy, "Σ(x − 3)(y − 5)."),
  mc(S`One extra point far below a strong positive trend is added. The value of $r$:`, "decreases", ["increases", "becomes negative for certain", "stays the same"], "The outlier weakens the pattern."),
  ms(S`Which statements about $r$ are true? Select all.`, [S`$-1\le r\le1$`, "it measures linear association", "it changes when units change", "it is the same if x and y are swapped"], [0, 1, 3], "Units do not affect r."),
  num(S`$S_{xy}=-21$, $S_{xx}=14$, $S_{yy}=50$. Find $r$ (3 d.p.).`, -21 / Math.sqrt(700), "−21/√700.", null, 0.002),
  num(S`For 5 pairs, $\sum x=15$, $\sum y=35$, $\sum xy=121$, $\sum x^2=55$, $\sum y^2=275$. Find $S_{xy}$.`, 16, "121 − 15 × 35/5."),
  num(S`For those sums ($n=5$), find $S_{yy}$.`, 30, "275 − 35²/5."),
  num(S`For those sums ($n=5$), find $r$ (3 d.p.).`, 16 / Math.sqrt(300), "Sxx = 10; 16/√300.", null, 0.002),
  mc(S`Every y-value is multiplied by $-1$. The new $r$ is:`, S`$-r$`, [S`$r$`, "0", "1"], "The direction reverses."),
  mc("Which is the best interpretation of r = 0.88 between hours of practice and test score?", "strong positive linear association: more practice tends to go with higher scores", ["practice causes higher scores", "88% of scores are explained by practice", "the line has gradient 0.88"], "Association, not cause or slope."),
  num("The scatter diagram shows 6 points. Calculate r (3 d.p.).", st([1, 2, 3, 4, 5, 6], [3, 4, 4, 6, 7, 9]).r, "Data (1, 3), (2, 4), (3, 4), (4, 6), (5, 7), (6, 9).", planeDoc({ view: { xmin: 0, xmax: 7, ymin: 0, ymax: 10 }, points: pts([1, 2, 3, 4, 5, 6], [3, 4, 4, 6, 7, 9]), step: { x: 1, y: 1 } }), 0.002),
  num("For the 6 points shown, find the mean y-value.", 5.5, "33 ÷ 6.", planeDoc({ view: { xmin: 0, xmax: 7, ymin: 0, ymax: 10 }, points: pts([1, 2, 3, 4, 5, 6], [3, 4, 4, 6, 7, 9], "green"), step: { x: 1, y: 1 } }), 1e-9),
  tf(S`If $r=0.99$, the scatter diagram must show a linear pattern.`, false, "A curve with no outliers can also give a large r — always look at the graph."),
  num(S`$S_{xy}=30$, $S_{xx}=20$ and $r=0.6$. Find $S_{yy}$.`, 125, "0.6 = 30/√(20 Syy) → √(20 Syy) = 50."),
  mc(S`$r$ for two variables is 0.05. The best conclusion is:`, "there is essentially no linear correlation", ["the variables are unrelated in every way", "there is strong correlation", "x causes y"], "Non-linear relationships are still possible."),
];
