// MDM4U Worksheet 4.1 — Continuous Random Variables (teacher edition)
import { svgT, barsSvg, normalSvg, tableSvg } from "./figT.mjs";
import { r3 } from "../../mdm4u/count.mjs";

const S = String.raw;
const mids = [52.5, 57.5, 62.5, 67.5, 72.5, 77.5], freq = [3, 8, 14, 12, 6, 2];
const N = freq.reduce((a, b) => a + b, 0), mean = mids.reduce((s, m, i) => s + m * freq[i], 0) / N;
const sd = Math.sqrt(mids.reduce((s, m, i) => s + freq[i] * (m - mean) ** 2, 0) / (N - 1));
const sdOf = (xs) => { const m = xs.reduce((a, b) => a + b, 0) / xs.length; return Math.sqrt(xs.reduce((a, b) => a + (b - m) ** 2, 0) / (xs.length - 1)); };

const EXAMPLES = [
  { title: "Discrete or continuous", q: "Classify: (a) wingspan of a bird (b) eggs in a nest (c) time to download a file (d) number of emails.", steps: ["Measured: (a), (c) continuous.", "Counted: (b), (d) discrete."], ans: "C, D, C, D" },
  { title: "Grouped table", q: "Resting heart rates (beats/min) of 45 students are grouped as shown. Draw the histogram.", fig: svgT(barsSvg(freq, { labels: ["50–55", "55–60", "60–65", "65–70", "70–75", "75–80"], histogram: true, top: true }), 5), steps: ["Bars touch; one per interval.", "Heights are the frequencies."], ans: "see the histogram" },
  { title: "Frequency polygon", q: "Describe how to draw the frequency polygon for the heart-rate data.", steps: ["Plot (midpoint, frequency) for each interval.", "Join them, and add zero points half an interval beyond each end."], ans: "midpoints 52.5, …, 77.5" },
  { title: "Grouped mean", q: "Estimate the mean heart rate from the table.", steps: [S`$\bar x=\frac{\sum fm}{45}$.`], ans: `≈ ${r3(mean, 2)}` },
  { title: "Grouped standard deviation", q: "Estimate the standard deviation of the heart rates.", steps: [S`$s=\sqrt{\frac{\sum f(m-\bar x)^2}{n-1}}$.`], ans: `≈ ${r3(sd, 2)}` },
  { title: "Raw data", q: "Find the mean and standard deviation of the times 4.2, 5.1, 3.8, 6.0, 4.9 s.", steps: [S`$\bar x=4.8$.`, S`$s=\sqrt{\frac{0.36+0.09+1+1.44+0.01}{4}}$.`], ans: `4.8 s; ${r3(sdOf([4.2, 5.1, 3.8, 6.0, 4.9]), 3)} s` },
  { title: "Interval width", q: "The heart-rate data regrouped into 10-beat intervals 50–60, 60–70, 70–80 gives frequencies 11, 26, 8. What is gained and lost?", steps: ["Simpler and smoother, but the location of the peak is less precise."], ans: "11, 26, 8" },
  { title: "Probability as area", q: "A random time is equally likely anywhere in 0–15 min. Find P(4 < X < 10) and P(X = 4).", steps: [S`$\frac6{15}=0.4$; a single value has probability 0.`], ans: "0.4 and 0" },
  { title: "Model curve", q: "Explain why a smooth curve is used to model continuous data.", fig: svgT(normalSvg({ mu: 64, s: 6, shade: [[60, 70, "green"]] }), 4.6), steps: ["We can only sample; a model describes the whole population.", "Areas under the curve give probabilities for any interval."], ans: "model for the population" },
];

const PROBLEMS = [
  { level: 1, q: "Classify as discrete or continuous: the mass of a newborn; the number of siblings; the distance a ball is thrown.", ans: "continuous, discrete, continuous" },
  { level: 1, q: "Find the mean and standard deviation of 12, 15, 11, 18, 14.", ans: `14; ${r3(sdOf([12, 15, 11, 18, 14]), 3)}` },
  { level: 1, q: "For a continuous random variable, explain why P(X = 5) = 0.", ans: "a single value has no width, so no area" },
  { level: 2, q: "Use the table of 50 plant heights to draw a histogram and a frequency polygon.", fig: svgT(tableSvg([["height (cm)", "10–14", "14–18", "18–22", "22–26", "26–30"], ["frequency", "5", "12", "18", "11", "4"]], { rowHead: true }), 5), ans: "midpoints 12, 16, 20, 24, 28", space: 5 },
  { level: 2, q: "Estimate the mean and standard deviation of the plant heights above.", ans: (() => { const m = [12, 16, 20, 24, 28], f = [5, 12, 18, 11, 4], n = 50, mu = m.reduce((s, x, i) => s + x * f[i], 0) / n, s = Math.sqrt(m.reduce((a, x, i) => a + f[i] * (x - mu) ** 2, 0) / (n - 1)); return `${r3(mu, 2)} cm; ${r3(s, 2)} cm`; })() },
  { level: 2, q: "Estimate P(a plant is at least 22 cm tall) from the table.", ans: "15/50 = 0.3" },
  { level: 2, q: "A spinner can stop at any angle 0°–360°. Find P(it stops between 45° and 120°).", ans: S`$\frac{75}{360}\approx0.208$` },
  { level: 2, q: "Explain two challenges in finding the true distribution of a continuous variable such as the lifetime of a light bulb.", ans: "cannot test every bulb (must sample); measurement precision and testing time limit accuracy" },
  { level: 3, space: 4.5, q: "Regroup the plant heights into intervals of 8 cm (10–18, 18–26, 26–34) and compare the two histograms.", ans: "17, 29, 4; coarser and less informative" },
  { level: 3, space: 4.5, q: "Two classes have the same mean test score but standard deviations 4 and 12. Sketch possible histograms and explain the difference.", ans: "the second class is much more spread out" },
  { level: 3, space: 4.5, q: "A continuous variable is equally likely anywhere from a to b with a = 3 and P(X < 7) = 0.4. Find b.", ans: S`$\frac{7-3}{b-3}=0.4\Rightarrow b=13$` },
  { level: 3, space: 4.5, q: "Add the value 60 to the data 12, 15, 11, 18, 14 and recompute the mean and standard deviation. What does this show?", ans: `mean ${r3((70 + 60) / 6, 2)}, s ${r3(sdOf([12, 15, 11, 18, 14, 60]), 2)}: one outlier changes both a lot` },
  { level: 3, space: 5, q: "Use technology to generate 200 values from a normal distribution with mean 64 and sd 6; group them in intervals of 2, 5 and 10 and compare the polygons.", ans: "width 5 usually best: 2 is jagged, 10 hides the shape" },
];

export const WS = {
  code: "4.1",
  title: "Continuous Random Variables",
  bigideas: S`A continuous random variable is measured and can take any value in an interval. Sample data are grouped into intervals and shown with frequency histograms and polygons; the mean and standard deviation summarize centre and spread. Probabilities are areas over intervals; $P(X=a)=0$.`,
  goals: ["Distinguish discrete and continuous variables.", "Build grouped tables, histograms and polygons.", "Compute mean and standard deviation.", "Interpret probability as area."],
  curriculum: "B2.1–B2.5",
  vocab: [["Continuous", "measured values"], ["Frequency polygon", "joins bar-top midpoints"], ["$s$", "sample standard deviation"]],
  hook: "Time how long each student can balance on one foot. How would you organize and display the class's times?",
  concepts: [
    ["1. Grouping", S`${svgT(barsSvg([2, 6, 9, 5, 2], { labels: ["0–2", "2–4", "4–6", "6–8", "8–10"], histogram: true }), 3.6)}Equal-width, non-overlapping intervals.`],
    ["2. Mean and SD", S`$\bar x=\frac{\sum x}n$; $s=\sqrt{\frac{\sum(x-\bar x)^2}{n-1}}$; grouped: use midpoints.`],
    ["3. Area", "Total area under a model curve is 1; probabilities over intervals."],
  ],
  tips: ["Bars touch for continuous data.", "Use midpoints for grouped estimates.", "n − 1 for samples.", "P(X = a) = 0.", "Choose sensible interval widths."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
