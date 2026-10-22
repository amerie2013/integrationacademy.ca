// IB AA SL Worksheet 7.2 — Pearson's Correlation Coefficient (teacher edition)
import { F, pt } from "./figT.mjs";

const S = String.raw;
const pts = (xs, ys, color = "violet") => xs.map((x, i) => ({ x, y: ys[i], color }));

const EXAMPLES = [
  { title: "Range of r", q: "Which of 0.3, −1.4, 0.92, −0.05 cannot be a correlation coefficient?",
    steps: [S`$-1\le r\le1$.`], ans: "−1.4" },
  { title: "Interpreting", q: S`Interpret $r=0.58$ for hours of training and race position points.`,
    steps: ["Positive; 0.5 ≤ 0.58 < 0.75."], ans: "moderate positive linear correlation" },
  { title: "By hand", q: "Calculate r for (2, 5), (4, 6), (5, 9), (7, 10), (8, 12).",
    fig: F({ view: { xmin: 0, xmax: 10, ymin: 0, ymax: 14 }, points: [...pts([2, 4, 5, 7, 8], [5, 6, 9, 10, 12]), pt(5.2, 8.4, null, "amber")], step: { x: 1, y: 2 } }),
    steps: [S`$\bar x=5.2$, $\bar y=8.4$; $S_{xy}=26.6$, $S_{xx}=22.8$, $S_{yy}=33.2$.`, S`$r=\frac{26.6}{\sqrt{22.8\times33.2}}$.`], ans: S`$r\approx0.967$` },
  { title: "Negative r by hand", q: "Calculate r for (1, 10), (2, 8), (3, 8), (4, 5), (5, 4).",
    steps: [S`$\bar x=3$, $\bar y=7$; $S_{xy}=-15$, $S_{xx}=10$, $S_{yy}=24$.`, S`$r=\frac{-15}{\sqrt{240}}$.`], ans: S`$r\approx-0.968$` },
  { title: "Using a GDC", q: "Use a GDC to find r for temperature (°C) 12, 15, 18, 20, 23, 25, 28, 30 and electricity used (kWh) 150, 165, 170, 182, 190, 201, 210, 222.",
    steps: ["Enter the lists; run linear regression."], ans: S`$r\approx0.995$` },
  { title: "Changing units", q: "Heights in cm and masses in kg give r = 0.84. What is r if heights are in inches?",
    steps: ["Rescaling does not change r."], ans: "0.84" },
  { title: "Effect of an outlier", q: "Explain how adding a point far from the trend affects r.",
    fig: F({ view: { xmin: 0, xmax: 12, ymin: 0, ymax: 12 }, points: [...pts([1, 2, 3, 4, 5, 6, 7, 8], [2, 3, 3.5, 4.5, 5, 6, 7, 7.5]), pt(10, 1, null, "red")], step: { x: 1, y: 1 } }),
    steps: ["It adds a large product of deviations with the opposite sign, so |r| drops sharply."], ans: "|r| decreases a lot" },
  { title: "Curved data", q: S`Points lie exactly on $y=(x-4)^2$ for $x=1,2,\dots,7$. Explain why $r=0$ although the relationship is perfect.`,
    steps: ["The relationship is symmetric about x = 4: positive and negative deviation products cancel.", "r measures only linear association."], ans: "r is for linear relationships only" },
  { title: "From summary statistics", q: S`$S_{xy}=-42$, $S_{xx}=36$, $S_{yy}=64$. Find $r$.`,
    steps: [S`$\frac{-42}{\sqrt{2304}}=\frac{-42}{48}$.`], ans: S`$-0.875$` },
];

const PROBLEMS = [
  { level: 1, q: S`Describe $r=-0.12$.`, recap: "Interpret.", ans: "very weak negative / no linear correlation" },
  { level: 1, q: S`Which shows the strongest linear correlation: 0.71, −0.83, 0.79?`, recap: "Compare |r|.", ans: "−0.83" },
  { level: 1, q: S`All points lie on $y=4x+1$. State $r$.`, recap: "Perfect line.", ans: "1" },
  { level: 2, q: S`$S_{xy}=18$, $S_{xx}=12$, $S_{yy}=36$. Find $r$.`, recap: "Formula.", ans: S`$\frac{18}{\sqrt{432}}\approx0.866$` },
  { level: 2, q: "Calculate r for (1, 3), (2, 4), (3, 4), (4, 6), (5, 8).", recap: "By hand.", ans: S`$S_{xy}=12$, $S_{xx}=10$, $S_{yy}=16$: $r=\frac{12}{\sqrt{160}}\approx0.949$` },
  { level: 2, q: "Explain why r is unchanged if all x-values are multiplied by 10.", recap: "Units.", ans: "deviations scale equally top and bottom; the pattern is unchanged" },
  { level: 2, q: "Estimate r for the scatter diagram shown: about −0.98, −0.75, −0.2 or 0.5?", recap: "Estimate.", ans: "about −0.75 (actual −0.751)",
    fig: F({ view: { xmin: 0, xmax: 11, ymin: 0, ymax: 11 }, points: pts([1, 2, 2.5, 3, 4, 5, 5.5, 6, 7, 8, 9, 10], [8, 9, 6, 8.5, 5, 7.5, 4, 6.5, 3, 6, 4.5, 2.5]), step: { x: 1, y: 1 } }) },
  { level: 2, q: "Use a GDC: x = 3, 5, 6, 8, 10, 11; y = 40, 36, 35, 30, 25, 24. Find r.", recap: "GDC.", ans: "≈ −0.996" },
  { level: 3, space: 4, q: S`For 5 pairs, $\sum x=20$, $\sum y=40$, $\sum xy=184$, $\sum x^2=90$, $\sum y^2=410$. Find $r$.`, recap: "From sums.", ans: S`$S_{xy}=24$, $S_{xx}=10$, $S_{yy}=90$: $r=\frac{24}{30}=0.8$` },
  { level: 3, space: 4, q: "A data set has r = 0.12. A student says 'the variables are unrelated'. Explain why this may be wrong.", recap: "Non-linear.", ans: "there may be a strong non-linear relationship" },
  { level: 3, space: 4, q: "Without the outlier r = 0.94; with it r = 0.41. Which value should be reported, and why?", recap: "Outliers.", ans: "investigate; report both and explain" },
  { level: 3, space: 4, q: S`Show that swapping $x$ and $y$ does not change $r$.`, recap: "Symmetry.", ans: S`$r=\frac{S_{xy}}{\sqrt{S_{xx}S_{yy}}}$ is symmetric in $x$ and $y$` },
  { level: 3, space: 4, q: S`Estimate the value of $r$ for the data shown and justify it.`, recap: "Estimate.", ans: "close to +1: points almost on a rising line",
    fig: F({ view: { xmin: 0, xmax: 11, ymin: 0, ymax: 22 }, points: pts([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [3, 5, 6.5, 9, 10.5, 12.5, 14.5, 16, 18.5, 20]), step: { x: 1, y: 2 } }) },
];

export const WS = {
  code: "7.2",
  title: "Pearson's Correlation Coefficient",
  bigideas: S`$r=\frac{S_{xy}}{\sqrt{S_{xx}S_{yy}}}$ measures linear correlation: $-1\le r\le1$, the sign gives direction, $|r|$ gives strength (≥ 0.75 strong, 0.5–0.75 moderate, 0.25–0.5 weak). Use a GDC in exams. Outliers can change $r$ a lot; changes of units do not. $r\approx0$ means no linear correlation, not no relationship. Correlation does not imply causation.`,
  goals: ["Interpret r.", "Calculate r by hand and by GDC.", "Judge the effect of outliers and units.", "Know the limitations of r."],
  curriculum: "SL 4.4",
  vocab: [["r", "Pearson's correlation coefficient"], [S`$S_{xy}$`, S`$\sum(x-\bar x)(y-\bar y)$`], ["Linear", "close to a straight line"]],
  hook: "Show four scatter diagrams and ask students to rank them from strongest to weakest correlation. Then reveal their r values.",
  concepts: [
    ["1. Meaning of r", S`${F({ view: { xmin: 0, xmax: 10, ymin: 0, ymax: 14 }, points: [...pts([2, 4, 5, 7, 8], [5, 6, 9, 10, 12]), pt(5.2, 8.4, null, "amber")], step: { x: 1, y: 2 } }, 5)} $r\approx0.97$.`],
    ["2. Calculating", S`$S_{xy}$, $S_{xx}$, $S_{yy}$, or the GDC.`],
    ["3. Limitations", "Linear only; sensitive to outliers; not causation."],
  ],
  tips: ["|r| ≤ 1.", "Sign = direction.", "Look at the graph first.", "Units don't change r.", "Report r in context."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
