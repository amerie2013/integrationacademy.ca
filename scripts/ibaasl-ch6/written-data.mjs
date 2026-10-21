// IB AA SL chapter 6 written-response (long_answer) questions for printed chapter tests (Part C), each with a figure.
import { planeDoc } from "../mcr3u-ch1/bank/fig.mjs";

const T = { 1: "6.1 Sampling and Data Collection", 2: "6.2 Presenting Data", 3: "6.3 Measures of Central Tendency", 4: "6.4 Measures of Dispersion" };
const W = (t, difficulty, points, prompt, feedback, fig) => ({ topic: T[t], difficulty, points, prompt, feedback, kind: "long_answer", answer: null, choices: null, fig });
const S = String.raw;
const bars = (pairs, color = "violet", w = 0.6) => pairs.map(([x, h]) => ({ pts: [[x - w / 2, 0], [x - w / 2, h], [x + w / 2, h], [x + w / 2, 0]], color }));
const histo = (edges, f, color = "violet") => f.map((h, i) => ({ pts: [[edges[i], 0], [edges[i], h], [edges[i + 1], h], [edges[i + 1], 0]], color }));
const box = (mn, q1, q2, q3, mx, y = 1, h = 0.6, color = "violet") => [
  { pts: [[mn, y], [q1, y]], color }, { pts: [[q3, y], [mx, y]], color },
  { pts: [[q1, y - h / 2], [q3, y - h / 2], [q3, y + h / 2], [q1, y + h / 2], [q1, y - h / 2]], color },
  { pts: [[q2, y - h / 2], [q2, y + h / 2]], color: "red" },
];

export const WRITTEN = [
  W(1, "medium", 4, S`A sports centre has 240 junior, 360 adult and 150 senior members (shown). (a) Find the numbers in a stratified sample of 50. (b) Describe how to choose the juniors. (c) Give one advantage of stratified over simple random sampling here.`,
    S`(a) total 750: juniors 16, adults 24, seniors 10. (b) number the juniors 1–240 and use random numbers to choose 16. (c) each age group is represented in proportion. [2, 1, 1.]`,
    planeDoc({ view: { xmin: 0, xmax: 4, ymin: 0, ymax: 400 }, segs: [...bars([[1, 240]], "blue"), ...bars([[2, 360]], "violet"), ...bars([[3, 150]], "green")], step: { x: 1, y: 50 } })),
  W(1, "hard", 5, S`A council surveys residents about a new cycle lane by asking 200 people on the high street on a Saturday (age profile of the sample shown). (a) Name the sampling method. (b) Give two reasons the results may be biased. (c) Design a better method for a sample of 200 from a town with 30% under 30, 45% aged 30–60 and 25% over 60.`,
    S`(a) convenience. (b) only high-street shoppers on a Saturday; age groups over/under-represented (e.g. older people under-represented). (c) stratified: 60, 90, 50 chosen at random from the electoral roll in each age group. [1, 2, 2.]`,
    planeDoc({ view: { xmin: 0, xmax: 4, ymin: 0, ymax: 110 }, segs: [...bars([[1, 104]], "blue"), ...bars([[2, 70]], "violet"), ...bars([[3, 26]], "green")], step: { x: 1, y: 10 } })),
  W(2, "medium", 4, S`The cumulative frequency graph of 120 runners' times (min) is shown. (a) Estimate the median. (b) Estimate the IQR. (c) Estimate the number of runners who took more than 50 minutes.`,
    S`(a) at cf 60: ≈ 41 min. (b) Q1 at 30 ≈ 35, Q3 at 90 ≈ 46.5: IQR ≈ 11.5. (c) cf at 50 ≈ 104: about 16. [1, 2, 1.]`,
    planeDoc({ view: { xmin: 18, xmax: 72, ymin: 0, ymax: 125 }, segs: [{ pts: [[20, 0], [30, 10], [35, 30], [40, 54], [45, 84], [50, 104], [60, 116], [70, 120]], color: "violet" }], step: { x: 5, y: 10 } })),
  W(2, "hard", 5, S`The data 5, 8, 9, 11, 12, 14, 15, 17, 19, 38 are given. (a) Find the five-number summary. (b) Show that 38 is an outlier. (c) Draw the box plot (shown for checking) and describe the shape of the distribution.`,
    S`(a) min 5, Q1 = 9, median 13, Q3 = 17, max 38. (b) IQR 8; upper fence 17 + 12 = 29 < 38. (c) whisker to 19, outlier at 38; roughly symmetric middle with one high outlier. [2, 1, 2.]`,
    planeDoc({ view: { xmin: 0, xmax: 40, ymin: 0, ymax: 2 }, segs: box(5, 9, 13, 17, 19), points: [{ x: 38, y: 1, color: "red", label: "38" }], step: { x: 5, y: 1 } })),
  W(3, "medium", 4, S`The histogram shows the masses (g) of 40 eggs. (a) State the modal class. (b) Estimate the mean mass. (c) Explain why your answer to (b) is an estimate.`,
    S`(a) 60–65 g. (b) midpoints 52.5, 57.5, 62.5, 67.5, 72.5 with f = 3, 9, 15, 10, 3: \(\frac{157.5+517.5+937.5+675+217.5}{40}=\frac{2505}{40}\approx62.6\) g. (c) each egg is taken to have its class's midpoint mass. [1, 2, 1.]`,
    planeDoc({ view: { xmin: 48, xmax: 77, ymin: 0, ymax: 17 }, segs: histo([50, 55, 60, 65, 70, 75], [3, 9, 15, 10, 3]), step: { x: 5, y: 2 } })),
  W(3, "hard", 5, S`The bar chart shows the number of goals scored in 30 matches, but the frequency for 3 goals is missing (k). The mean is 1.8. (a) Write an equation for k. (b) Find k. (c) Find the median and mode.`,
    S`(a) \(\frac{0(5)+1(8)+2(7)+3k+4(2)}{22+k}=1.8\). (b) \(30+3k=39.6+1.8k\Rightarrow k=8\). (c) n = 30: 15th and 16th values are both 2 (cf 5, 13, 20): median 2; modes 1 and 3 (both f = 8). [1, 2, 2.]`,
    planeDoc({ view: { xmin: -0.8, xmax: 4.8, ymin: 0, ymax: 10 }, segs: bars([[0, 5], [1, 8], [2, 7], [4, 2]]), step: { x: 1, y: 1 } })),
  W(4, "medium", 4, S`Two data sets with mean 10 are shown: A = 4, 8, 10, 12, 16 and B = 8, 9, 10, 11, 12. (a) Find the standard deviation of each. (b) Which is more consistent? (c) Find the new mean and SD of A after each value is doubled and 3 is added.`,
    S`(a) A: \(\sqrt{\frac{36+4+0+4+36}{5}}=4\); B: \(\sqrt{\frac{4+1+0+1+4}{5}}=\sqrt2\approx1.41\). (b) B. (c) mean 23, SD 8. [2, 1, 1.]`,
    planeDoc({ view: { xmin: 2, xmax: 18, ymin: 0, ymax: 3 }, points: [[4, 1.4], [8, 1.4], [10, 1.4], [12, 1.4], [16, 1.4], [8, 0.4], [9, 0.4], [10, 0.4], [11, 0.4], [12, 0.4]].map(([x, y], i) => ({ x, y, color: i < 5 ? "blue" : "green" })), step: { x: 1, y: 1 } })),
  W(4, "hard", 5, S`The box plots compare the reaction times (ms) of 40 students before and after a training programme. (a) Find the median and IQR of each. (b) Compare the two distributions. (c) The 'after' times have mean 245 ms and SD 20 ms. Find the mean and SD in seconds.`,
    S`(a) before: median 280, IQR 310 − 255 = 55; after: median 245, IQR 260 − 232 = 28. (b) times are typically 35 ms faster after training and more consistent (IQR halved). (c) 0.245 s and 0.020 s. [2, 2, 1.]`,
    planeDoc({ view: { xmin: 190, xmax: 380, ymin: 0, ymax: 3 }, segs: [...box(215, 255, 280, 310, 360, 2, 0.6, "blue"), ...box(205, 232, 245, 260, 300, 1, 0.6, "green")], step: { x: 20, y: 1 } })),
];
