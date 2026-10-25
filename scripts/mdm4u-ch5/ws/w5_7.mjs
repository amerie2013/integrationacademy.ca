// MDM4U Worksheet 5.7 — Displaying & Describing Distributions (teacher edition)
import { svgT, barsSvg, pieSvg, stemLeafSvg, lineSvg, tableSvg } from "./figT.mjs";
import { median } from "../../mdm4u/count.mjs";

const S = String.raw;
const books = [2, 0, 3, 1, 2, 4, 2, 1, 0, 2, 3, 2, 1, 5, 2, 3, 1, 2, 0, 3];
const bf = [0, 1, 2, 3, 4, 5].map((k) => books.filter((x) => x === k).length);
const bc = bf.map((_, i) => bf.slice(0, i + 1).reduce((a, b) => a + b, 0));
const blood = [["O", 180, "red"], ["A", 150, "blue"], ["B", 50, "green"], ["AB", 20, "amber"]];
const sl = [61, 64, 68, 70, 72, 72, 75, 79, 81, 83, 86, 88, 92, 95];
const og = [0, 0.05, 0.2, 0.45, 0.75, 0.92, 1];

const EXAMPLES = [
  { title: "Frequency table", q: `Books read last month by 20 students: ${books.join(", ")}. Make a frequency, relative frequency and cumulative frequency table.`, fig: svgT(tableSvg([["books", "0", "1", "2", "3", "4", "5"], ["frequency", ...bf.map(String)], ["relative", ...bf.map((f) => String(f / 20))], ["cumulative", ...bc.map(String)]]), 8), steps: ["Tally each value; divide by 20; keep a running total."], ans: `frequencies ${bf.join(", ")}` },
  { title: "Bar graph", q: "Draw a bar graph of the frequencies in the previous example. Why do the bars not touch?", fig: svgT(barsSvg(bf, { labels: ["0", "1", "2", "3", "4", "5"], top: true, xlabel: "books read" }), 5.5), steps: ["Discrete values: separate bars at each value."], ans: "separate values, not intervals" },
  { title: "Circle graph", q: `Blood types of 400 donors: ${blood.map(([t, k]) => `${t} ${k}`).join(", ")}. Find each central angle.`, fig: svgT(pieSvg(blood), 6), steps: [S`Angle $=\frac{k}{400}\times360^\circ$.`], ans: blood.map(([t, k]) => `${t} ${(k / 400) * 360}°`).join(", ") },
  { title: "Stem-and-leaf plot", q: `Make a stem-and-leaf plot of the marks ${sl.join(", ")}, and find the median.`, fig: svgT(stemLeafSvg(sl), 4.5), steps: ["Stems 6 to 9.", S`14 values: median $\frac{75+79}{2}=${median(sl)}$.`], ans: `median ${median(sl)}` },
  { title: "Histogram with relative frequency", q: "Battery lives (h) of 50 batteries: 10–12 (4), 12–14 (11), 14–16 (19), 16–18 (12), 18–20 (4). Draw a relative-frequency histogram and describe the shape.", fig: svgT(barsSvg([0.08, 0.22, 0.38, 0.24, 0.08], { labels: ["10–12", "12–14", "14–16", "16–18", "18–20"], histogram: true, top: true }), 6), steps: ["Relative frequencies 0.08, 0.22, 0.38, 0.24, 0.08."], ans: "symmetric and mound-shaped" },
  { title: "Skewed data", q: "Ages of people at a children's movie are mostly 5 to 12, with a few parents aged 30 to 45. Describe the shape and compare the mean and median.", steps: ["A long tail to the right."], ans: "skewed right; mean > median" },
  { title: "Reading an ogive", q: "The cumulative relative frequency graph shows the times (min) to complete a puzzle. Estimate the median and the 75th percentile.", fig: svgT(lineSvg(og, { xs: [0, 5, 10, 15, 20, 25, 30], xlabel: "time (min)", ylabel: "cum. rel. freq." }), 6.5), steps: [S`0.5 lies between 15 min (0.45) and 20 min (0.75): $15+5\times\frac{0.05}{0.30}\approx15.8$.`, "0.75 is reached at 20 min."], ans: "median ≈ 15.8 min; 75th percentile ≈ 20 min" },
  { title: "Misleading picture", q: "A pictograph shows a coin twice as wide (and twice as tall) to represent twice the savings. Why is it misleading?", steps: [S`The picture's area is $2^2=4$ times as large.`], ans: "it looks 4 times as large, not 2" },
  { title: "Choosing a display", q: "Choose a display: (a) the distribution of 500 commute times; (b) the share of each type of electricity source; (c) 18 test marks, keeping every value.", steps: ["Large numerical: histogram/box plot. Parts of a whole: circle graph. Small set: stem-and-leaf."], ans: "histogram; circle graph; stem-and-leaf" },
];

const PROBLEMS = [
  { level: 1, q: "In a survey of 125 people, 45 prefer winter. Find the relative frequency.", ans: "0.36" },
  { level: 1, q: "Find the central angle of a sector representing 30 of 240 responses.", ans: "45°" },
  { level: 1, q: "Frequencies are 2, 6, 9, 5, 3. Find the cumulative frequencies.", ans: "2, 8, 17, 22, 25" },
  { level: 2, q: "Make a stem-and-leaf plot of 34, 47, 52, 38, 41, 45, 56, 60, 43, 39, 51, 47 and find the median and mode.", ans: `median ${median([34, 47, 52, 38, 41, 45, 56, 60, 43, 39, 51, 47])}, mode 47` },
  { level: 2, q: "The histogram shows the masses (kg) of 40 dogs. Describe the shape and estimate the mean.", fig: svgT(barsSvg([12, 14, 7, 4, 2, 1], { labels: ["0–10", "10–20", "20–30", "30–40", "40–50", "50–60"], histogram: true, top: true }), 6), ans: `skewed right; mean ≈ ${(12 * 5 + 14 * 15 + 7 * 25 + 4 * 35 + 2 * 45 + 1 * 55) / 40}` },
  { level: 2, q: "A circle graph has a sector of 108° for “cycling” out of 250 responses. How many chose cycling?", ans: "75" },
  { level: 2, q: "Explain why the bars of a histogram touch but the bars of a bar graph do not.", ans: "histogram intervals are continuous; categories are separate" },
  { level: 2, q: "Sketch a distribution that is skewed left and mark where the mean and median would be.", ans: "long tail on the left; mean to the left of the median" },
  { level: 3, space: 4.5, q: "A cumulative relative frequency graph rises from 0.30 at 40 cm to 0.70 at 50 cm, and reaches 0.90 at 60 cm. Estimate the median and the 90th percentile; estimate the percent of values between 40 and 60 cm.", ans: "median 45 cm; 90th percentile 60 cm; 60 percent" },
  { level: 3, space: 4.5, q: "A bar graph of two companies' profits (8.2 and 7.9 million) has a vertical axis from 7.8 to 8.3. Find how many times taller the first bar looks and the true ratio.", ans: `${Math.round(((8.2 - 7.8) / (7.9 - 7.8)) * 100) / 100} times; about ${Math.round((8.2 / 7.9) * 1000) / 1000}` },
  { level: 3, space: 4.5, q: "The heights of all members of a parent-and-child club are graphed together. Predict the shape and suggest a better analysis.", ans: "bimodal; separate the adults and children" },
  { level: 3, space: 4.5, q: "Create a data set of 10 values whose histogram is skewed right with mean about 2 greater than the median.", ans: "e.g. 1, 2, 2, 3, 3, 3, 4, 5, 12, 15 (median 3, mean 5)" },
  { level: 3, space: 4.5, q: "A newspaper's graph of house prices uses intervals 0–200, 200–300, 300–350 and 350–1000 (thousands) with equal-width bars. Explain why it misleads and how to fix it.", ans: "unequal intervals drawn equally distort the shape; use equal widths or make bar area proportional to frequency" },
];

export const WS = {
  code: "5.7",
  title: "Displaying & Describing Distributions",
  bigideas: S`Categorical data are shown with bar and circle graphs; numerical data with histograms, stem-and-leaf plots, box plots and cumulative frequency graphs. Describe a distribution by its shape (symmetric, skewed, bimodal, uniform), outliers, centre and spread, in context. Watch for misleading scales, unequal intervals and pictures whose area grows faster than the data.`,
  goals: ["Build frequency tables.", "Draw and read displays.", "Describe shape.", "Recognize misleading graphs."],
  curriculum: "D1.3, D1.5",
  vocab: [["Relative frequency", "frequency divided by total"], ["Cumulative frequency", "running total"], ["Ogive", "cumulative frequency graph"], ["Skewed", "with a long tail on one side"]],
  hook: "Two graphs show the same sales numbers. One looks like a disaster, the other like steady growth. How?",
  concepts: [
    ["1. Displays", "Categorical: bar, circle. Numerical: histogram, stem-and-leaf, box plot, ogive."],
    ["2. Shape", S`${svgT(barsSvg([2, 6, 9, 6, 3, 2, 1, 1], { histogram: true }), 4.6)}Skewed right: the tail points right.`],
    ["3. Critical reading", "Check axes, intervals and pictures."],
  ],
  tips: ["Label axes and units.", "Use equal intervals.", "Sectors must total 360°.", "Name the shape and give context.", "Check where the axis starts."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
