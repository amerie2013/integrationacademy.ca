// MDM4U 5.7 — Displaying & Describing Distributions: frequency, relative and cumulative frequency tables; bar and
// circle graphs for categorical data; histograms, stem-and-leaf plots and cumulative frequency graphs for numerical
// data; describing shape (symmetric, skewed, bimodal, uniform), centre and spread; misleading graphs
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, fig, barsSvg, pieSvg, stemLeafSvg, tableSvg, lineSvg } from "./lib.mjs";
import { median } from "../mdm4u/count.mjs";

export const TITLE = "5.7 Displaying & Describing Distributions";
export const ID = "c3aadc53-35f6-4300-9f6a-68676e06270b";
const S = String.raw;

const sib = [4, 9, 7, 3, 2], sibN = 25, cum = sib.map((_, i) => sib.slice(0, i + 1).reduce((a, b) => a + b, 0));
const modes = [["walk", 45, "green"], ["bus", 72, "blue"], ["car", 63, "amber"], ["bike", 20, "violet"]];
const leaf = [34, 38, 41, 45, 45, 47, 52, 53, 58, 59, 61, 66, 73];
const wait = [9, 14, 8, 5, 3, 1];
const ogive = [0, 0.1, 0.35, 0.65, 0.85, 0.95, 1];

export const blocks = () => [
  intro({
    icon: "📊",
    title: "Displaying & Describing Distributions",
    overview: S`A <strong>distribution</strong> shows what values a variable takes and how often. The right display depends on the data: bar and circle graphs for categories; histograms, stem-and-leaf plots, box plots and cumulative frequency graphs for numbers. Once the data are displayed, we describe the distribution by its <strong>shape</strong>, <strong>centre</strong> and <strong>spread</strong>, and note any outliers. We must also read graphs critically, because a poor choice of scale can mislead.`,
    goals: [
      "build frequency, relative-frequency and cumulative-frequency tables;",
      "draw and read bar graphs, circle graphs, histograms and stem-and-leaf plots;",
      "use a cumulative frequency graph to estimate the median and percentiles;",
      "describe a distribution's shape (symmetric, skewed, bimodal, uniform), centre and spread;",
      "recognize graphs that mislead.",
    ],
    curriculum: "D1.3 (graphical summaries: histograms, stem-and-leaf, box plots, bar and circle graphs, cumulative frequency); D1.5 (interpreting and identifying misuse)",
    prior: [
      ["What is 45 out of 200 as a fraction of 360°?", "81°."],
      ["Is 'favourite sport' numerical or categorical?", "Categorical."],
      ["In a right-skewed set, which is larger: mean or median?", "Usually the mean."],
    ],
    words: [
      ["Relative frequency", "frequency ÷ total", "9 of 25 = 0.36"],
      ["Cumulative frequency", "the running total of frequencies", "4, 13, 20, 23, 25"],
      ["Histogram", "touching bars for intervals of numerical data", "wait times 0–5, 5–10, …"],
      ["Skewed right", "a long tail to the right; mean > median", "incomes, wait times"],
    ],
  }),

  section("📌 Choosing a display", S`
  ${table(["Data", "Displays"], [["categorical", "bar graph (separate bars), circle graph (parts of a whole)"], ["numerical, small set", "dot plot, stem-and-leaf plot (keeps every value)"], ["numerical, large set", "histogram (intervals, touching bars), box plot, cumulative frequency graph"], ["two groups to compare", "side-by-side box plots, back-to-back stem-and-leaf, double bar graph"]])}
  <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:8px;">
  ${fig(pieSvg(modes), "circle graph: how 200 students get to school")}
  ${fig(barsSvg(wait, { labels: ["0–5", "5–10", "10–15", "15–20", "20–25", "25–30"], histogram: true, top: true, xlabel: "wait time (min)", ylabel: "frequency" }), "histogram: skewed right")}
  </div>`),

  section("📌 Describing shape", S`
  ${table(["Shape", "Look", "Mean and median"], [["symmetric (mound-shaped)", "the two halves mirror each other", "mean ≈ median"], ["skewed right", "long tail to the right", "mean > median"], ["skewed left", "long tail to the left", "mean < median"], ["bimodal", "two peaks — often two groups mixed together", "neither describes a typical value well"], ["uniform", "all intervals about equally frequent", "mean ≈ median"]])}
  ${keyIdea(S`Describe a distribution with <strong>SOCS</strong>: Shape, Outliers, Centre, Spread — always in the context of the data.`)}`),

  section("📌 Explore", S`<p>Switch between shapes and between a histogram and a box plot. Then look at the bar graph with the axis starting at 80 and at 0.</p>`),

  widget("displayLab", { init: "right" }),

  section("📌 Watch out", watchOut([
    "Histogram bars touch (numerical intervals); bar-graph bars do not (categories).",
    "Circle-graph sectors must show parts of one whole that add to 100%.",
    "A vertical axis that does not start at 0 exaggerates differences.",
    "Use equal interval widths in a histogram unless you adjust the bar heights.",
  ])),

  examples([
    ["Frequency tables", "The numbers of siblings of 25 students are summarized: 0 siblings 4 students, 1 sibling 9, 2 siblings 7, 3 siblings 3, 4 siblings 2. Find the relative and cumulative frequencies. What fraction have at most 2 siblings?",
      [S`Relative frequencies: ${sib.map((f) => `\(\frac{${f}}{25}=${f / sibN}\)`).join(", ")}.`, S`Cumulative: ${cum.join(", ")}.`, S`At most 2: \(\frac{20}{25}=0.8\).`],
      "0.8 (80%)",
      fig(barsSvg(sib, { labels: ["0", "1", "2", "3", "4"], top: true, xlabel: "number of siblings", ylabel: "students" }))],
    ["Circle graph", `A survey of 200 students: ${modes.map(([m, k]) => `${m} ${k}`).join(", ")}. Find the central angle of each sector.`,
      [S`Angle \(=\frac{\text{count}}{200}\times360^\circ\).`, ...modes.map(([m, k]) => S`${m}: \(\frac{${k}}{200}\times360=${(k / 200) * 360}\).`)],
      modes.map(([m, k]) => `${m} ${(k / 200) * 360}°`).join(", ")],
    ["Stem-and-leaf plot", `The ages of 13 people at a workshop are ${leaf.join(", ")}. Make a stem-and-leaf plot and find the median and range.`,
      [S`Stems are the tens digits 3 to 7; leaves are the units digits.`, S`Median: the 7th value, \(${median(leaf)}\).`, S`Range \(73-34=39\).`],
      `median ${median(leaf)}, range 39`,
      fig(stemLeafSvg(leaf))],
    ["Describing a histogram", "The histogram shows the wait times of 40 customers. Describe the distribution and say whether the mean or the median is larger.",
      [S`Shape: skewed right — most waits are under 10 minutes, with a long tail to 30.`, S`Centre: the median is in the 5–10 interval (20th and 21st values).`, S`The few long waits pull the mean above the median.`],
      "skewed right; mean > median",
      fig(barsSvg(wait, { labels: ["0–5", "5–10", "10–15", "15–20", "20–25", "25–30"], histogram: true, top: true, xlabel: "wait time (min)" }))],
    ["A misleading graph", "A company's bar graph shows this year's sales of 412 units and last year's 388, with the vertical axis starting at 380. How many times taller is this year's bar? What is the real ratio?",
      [S`Bar heights above 380: \(412-380=32\) and \(388-380=8\): \(\frac{32}{8}=4\) times as tall.`, S`Real ratio \(\frac{412}{388}\approx1.06\): only about 6% more.`],
      "4 times as tall, but only about 6% more",
      fig(barsSvg([32, 8], { labels: ["this year", "last year"], top: ["412", "388"], fmt: (v) => String(Math.round(v + 380)), ymax: 36 }), "the axis starts at 380")],
  ]),

  practice([
    q("rel", "In a survey of 80 people, 28 prefer tea. What is the relative frequency?", num(0.35), "28/80.", [S`\(0.35\).`], "0.35"),
    q("angle", "In a circle graph of 240 responses, what is the central angle (degrees) for a category with 54 responses?", num(81), "54/240 × 360.", [S`\(0.225\times360=81\).`], "81"),
    q("cum", "Frequencies are 3, 7, 12, 6, 2. What is the cumulative frequency of the third interval?", num(22), "3 + 7 + 12.", [S`\(22\).`], "22"),
    q("shape", "A distribution with a long tail to the left is…", choice(["skewed left", "skewed right", "bimodal", "uniform"], 0), "The tail names the skew.", ["Tail on the left."], "skewed left"),
    q("display", "The best display for the favourite music genres of 300 students is…", choice(["a bar graph or circle graph", "a histogram", "a stem-and-leaf plot", "a box plot"], 0), "Categorical data.", ["Categories need bars or sectors."], "a bar graph or circle graph"),
  ]),

  ...hard([
    ["Reading a cumulative frequency graph", "The graph shows the cumulative relative frequency of the commute times (minutes) of 200 workers. Estimate the median and the percent of workers who commute more than 40 minutes.",
      [S`The median is where the curve reaches 0.5: between 20 min (0.35) and 30 min (0.65).`, S`Interpolate: \(20+10\times\frac{0.5-0.35}{0.65-0.35}=20+5=25\) min.`, S`At 40 min the curve is at 0.85, so \(1-0.85=0.15\): 15% (30 workers) commute more than 40 minutes.`],
      "median ≈ 25 min; 15%",
      fig(lineSvg(ogive, { xs: [0, 10, 20, 30, 40, 50, 60], p: 0.5, pLabel: "0.5", xlabel: "commute time (min)", ylabel: "cumulative relative frequency" }))],
    ["Two groups in one graph", "The heights of all students on a school's grade 9 and grade 12 teams are drawn in one histogram, which has two peaks. (a) Name the shape. (b) Explain why the mean height is not a good summary. (c) Suggest a better display.",
      [S`(a) Bimodal.`, S`(b) The two peaks come from two different groups (younger and older students); the mean falls in the dip between them, where few students actually are.`, S`(c) Separate histograms or side-by-side box plots for the two grades, each with its own centre and spread.`],
      "bimodal; separate the groups",
      fig(barsSvg([2, 6, 9, 5, 3, 6, 10, 7, 2], { labels: ["150", "155", "160", "165", "170", "175", "180", "185", "190"], histogram: true, xlabel: "height (cm)", ylabel: "students" }))],
  ], [
    q("hard", "A cumulative relative frequency graph rises from 0.40 at 50 kg to 0.80 at 60 kg. Estimate the median (kg) by interpolation.", num(52.5, 0.05), "50 + 10 × 0.10/0.40.", [S`\(50+2.5=52.5\).`], "52.5"),
    q("hard", "A circle-graph sector of 126° represents 140 people. How many people were surveyed in total?", num(400), "126/360 of the total is 140.", [S`\(140\div0.35=400\).`], "400"),
    q("hard", "Household incomes are skewed right. Which statement is most likely true?", choice(["the mean is greater than the median", "the median is greater than the mean", "the mean equals the mode", "there are no outliers"], 0), "The tail pulls the mean.", ["High incomes raise the mean."], "the mean is greater than the median"),
  ]),

  wrapUp({
    qas: [
      ["When do I use a histogram instead of a bar graph?", "For numerical data in intervals; bar graphs are for categories."],
      ["How do I find a circle-graph angle?", "Fraction of the total × 360°."],
      ["How do I describe a distribution?", "Shape, outliers, centre and spread, in context."],
      ["How can a graph mislead?", "A truncated axis, unequal intervals, or 3-D effects exaggerate differences."],
      ["What does a cumulative frequency graph give quickly?", "The median and other percentiles."],
    ],
    summary: [
      "Relative frequency = f/n; cumulative = running total.",
      "Categorical: bar, circle. Numerical: histogram, stem-and-leaf, box plot, ogive.",
      "Shapes: symmetric, skewed left/right, bimodal, uniform.",
      "Check the axes before believing a graph.",
    ],
    next: "5.8 uses z-scores to compare values from different distributions.",
  }),
];
