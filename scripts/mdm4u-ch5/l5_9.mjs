// MDM4U 5.9 — Chapter 5 Review: types of data and studies, sampling techniques, bias and survey design, measures of
// central tendency and spread, quartiles, box plots and percentiles, displays and shapes, z-scores — mixed problems
import { intro, section, keyIdea, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, fig, boxPlotSvg, barsSvg, tableSvg } from "./lib.mjs";
import { mean, median, quartiles, fences, sdS, sum } from "../mdm4u/count.mjs";

export const TITLE = "5.9 Chapter 5 Review";
export const ID = "5c3e0001-0001-4001-8001-0000d4d00509";
const S = String.raw;
const r2 = (v) => Math.round(v * 100) / 100;

const d = [14, 17, 19, 20, 22, 22, 25, 27, 28, 30, 33, 52];
const [q1, md, q3] = quartiles(d), [lf, uf] = fences(d);
const hm = [2.5, 7.5, 12.5, 17.5, 22.5], hf = [6, 11, 15, 5, 3], hn = sum(hf), hx = sum(hm.map((m, i) => m * hf[i])) / hn;

export const blocks = () => [
  intro({
    icon: "🗂️",
    title: "Chapter 5 Review: Data Collection and One-Variable Statistics",
    overview: S`This review brings together the whole statistical process for one variable: deciding what kind of data and study are needed, choosing a sample without bias, and then summarizing the data with graphs and numbers — centre (mean, median, mode), spread (range, standard deviation, IQR), position (quartiles, percentiles, z-scores) and shape. In each problem, decide which tool fits the data and the question, then interpret the result in context.`,
    goals: [
      "classify data and studies and choose a sampling technique;",
      "identify bias and improve a survey;",
      "calculate and interpret measures of centre and spread;",
      "use quartiles, box plots, percentiles and z-scores;",
      "choose suitable displays and describe distributions.",
    ],
    curriculum: "C1–C2 (data and its collection) and D1 (one-variable statistics)",
    prior: [
      ["Systematic sample of 50 from 1500: k = ?", "30."],
      ["s for 2, 4, 6?", "2."],
      ["z for 88 with μ = 80, σ = 5?", "1.6."],
    ],
    words: [
      ["Representative sample", "reflects the population's characteristics", "a stratified random sample"],
      ["Resistant measure", "hardly affected by outliers", "median, IQR"],
      ["Five-number summary", "min, Q₁, median, Q₃, max", "drawn as a box plot"],
      ["Standardized score", "z = (x − μ)/σ", "compares different scales"],
    ],
  }),

  section("📌 Summary of tools", S`
  ${table(["Question", "Tool"], [
    ["Who do we study?", "population, sample, sampling frame; census when practical"],
    ["How do we choose them?", "simple random, systematic (k = N/n), stratified (proportional), cluster, multistage"],
    ["What can go wrong?", "sampling, non-response, response and measurement bias"],
    ["Where is the centre?", "mean (symmetric data), median (skewed or outliers), mode (categories)"],
    ["How spread out?", "range, standard deviation (σ: ÷N; s: ÷(n − 1)), IQR"],
    ["Where does a value stand?", "quartiles, percentile rank, z-score"],
    ["What does it look like?", "bar/circle (categories); histogram, stem-and-leaf, box plot (numbers)"],
  ])}
  ${keyIdea(S`Statistics is a process: question → collect → organize → summarize → interpret. A weakness early in the process (a biased sample) cannot be fixed by careful calculation later.`)}`),

  section("📌 Watch out", watchOut([
    "A large sample does not remove bias.",
    "Choose ÷N or ÷(n − 1) according to whether the data are a population or a sample.",
    "Order the data before finding medians, quartiles and percentiles.",
    "State conclusions in the context of the data.",
  ])),

  examples([
    ["Evaluating a study", "A phone company emails a survey to 5000 customers chosen at random by computer from its customer list. 900 reply, and 72% of them are satisfied. (a) Name the sampling technique. (b) Find the response rate. (c) Name the main concern and explain how it could affect the 72%.",
      [S`(a) Simple random sample from the customer list (the sampling frame).`, S`(b) \(\frac{900}{5000}=0.18\): 18%.`, S`(c) Non-response bias: the 82% who did not reply may be more (or less) satisfied, so 72% may not represent all customers.`],
      "simple random; 18%; non-response bias"],
    ["Stratified allocation", "A university has 4400 students in Arts, 2400 in Science and 1200 in Engineering. A proportional stratified sample of 200 is needed. How many come from each faculty?",
      [S`Total \(8000\); fraction \(\frac{200}{8000}=\frac{1}{40}\).`, S`Arts \(\frac{4400}{40}=110\), Science \(\frac{2400}{40}=60\), Engineering \(\frac{1200}{40}=30\).`],
      "110, 60 and 30"],
    ["Summarizing a sample", `A sample of 12 delivery distances (km): ${d.join(", ")}. Find the mean, median, sample standard deviation, five-number summary and any outliers.`,
      [S`\(\bar x=\frac{${sum(d)}}{12}\approx${r2(mean(d))}\); median \(\frac{22+25}{2}=${md}\).`, S`\(s\approx${r2(sdS(d))}\).`, S`\(Q_1=${q1}\), \(Q_3=${q3}\), \(IQR=${q3 - q1}\); fences ${lf} and ${uf}.`, S`52 > ${uf}: an outlier. Five-number summary 14, ${q1}, ${md}, ${q3}, 52.`],
      `x̄ ≈ ${r2(mean(d))}, median ${md}, s ≈ ${r2(sdS(d))}; 52 is an outlier`,
      fig(boxPlotSvg([{ data: d }], { min: 10, max: 55, step: 5, xlabel: "distance (km)" }))],
    ["Grouped data and shape", "The histogram shows the hours 40 students spent online in a week. Estimate the mean, name the modal class and describe the shape.",
      [S`Midpoints 2.5, 7.5, 12.5, 17.5, 22.5.`, S`\(\bar x\approx\frac{${hm.map((m, i) => `${hf[i]}(${m})`).join("+")}}{40}=\frac{${sum(hm.map((m, i) => m * hf[i]))}}{40}=${hx}\).`, S`Modal class 10–15; slightly skewed right (a tail toward 25).`],
      `mean ≈ ${hx} h; modal class 10–15; slightly skewed right`,
      fig(barsSvg(hf, { labels: ["0–5", "5–10", "10–15", "15–20", "20–25"], histogram: true, top: true, xlabel: "hours online", ylabel: "students" }))],
    ["Comparing with z-scores", "Mei ran a 5 km race in 24.5 min (club mean 27 min, σ = 2 min) and swam 400 m in 7.2 min (club mean 8 min, σ = 0.5 min). In which event did she do relatively better?",
      [S`Run: \(z=\frac{24.5-27}{2}=-1.25\).`, S`Swim: \(z=\frac{7.2-8}{0.5}=-1.6\).`, S`Lower times are better, so the more negative z is better: the swim.`],
      "the swim",
      fig(tableSvg([["event", "time", "mean", "σ", "z"], ["5 km run", "24.5", "27", "2", "−1.25"], ["400 m swim", "7.2", "8", "0.5", "−1.6"]]))],
  ]),

  practice([
    q("k", "A systematic sample of 45 is taken from a list of 1350. What is k?", num(30), "N/n.", [S`\(\frac{1350}{45}=30\).`], "30"),
    q("bias", "A survey question begins “Most experts agree that…”. The likely problem is…", choice(["response bias from a leading question", "sampling bias", "measurement bias from the tool", "non-response bias"], 0), "Wording pushes the answer.", ["Leading wording."], "response bias from a leading question"),
    q("median", "Find the median of 31, 18, 25, 40, 22, 29.", num(27), "Order first.", [S`18, 22, 25, 29, 31, 40: \(\frac{25+29}{2}=27\).`], "27"),
    q("IQR", "Q₁ = 15 and Q₃ = 27. Is 46 an outlier? Enter the upper fence.", num(45), "Q₃ + 1.5 IQR.", [S`\(27+18=45\); 46 is an outlier.`], "45"),
    q("z", "x = 47, μ = 55, σ = 5. Find z.", num(-1.6), "(x − μ)/σ.", [S`\(\frac{-8}{5}=-1.6\).`], "-1.6"),
  ]),

  ...hard([
    ["Two summaries of one change", "A sample of 10 test marks has mean 66 and median 68. The teacher finds that one mark was recorded as 39 instead of 93. (a) Find the corrected mean. (b) Can the median change? Explain. (c) What happens to the standard deviation?",
      [S`(a) The total rises by \(93-39=54\): \(\bar x=66+\frac{54}{10}=71.4\).`, S`(b) The median may change: 39 was below the median and 93 is above, so the middle two values move up one place — the median can only stay or increase.`, S`(c) It cannot be found from the mean and median alone: the deviations of every value change because the mean changed, so s must be recalculated from all ten marks.`],
      "71.4; the median can only stay the same or increase; recalculate s"],
    ["Design and analyse", "A town wants the mean number of hours per week that its 12 000 households spend on volunteer work. (a) Design a sampling plan of 300 households that represents the town's 4 neighbourhoods (5000, 3600, 2400 and 1000 households). (b) Write one unbiased survey question. (c) A pilot gives \(\bar x=3.2\) h and \(s=2.9\) h, with a long right tail. Which measure of centre should the final report give? Why?",
      [S`(a) Stratified by neighbourhood: \(\frac{300}{12000}=\frac{1}{40}\): 125, 90, 60 and 25 households, chosen at random within each.`, S`(b) “In the last 7 days, how many hours did members of your household spend on unpaid volunteer work?”`, S`(c) Skewed right with \(s\) almost as large as \(\bar x\): report the median (and IQR) as well as the mean, since a few very active households pull the mean up.`],
      "125, 90, 60, 25; a neutral, specific question; report the median",
      fig(barsSvg([125, 90, 60, 25], { labels: ["A", "B", "C", "D"], top: true, xlabel: "neighbourhood", ylabel: "households in sample" }))],
  ], [
    q("hard", "The mean of 10 values is 66. One value changes from 39 to 93. What is the new mean?", num(71.4), "Total rises by 54.", [S`\(\frac{660+54}{10}=71.4\).`], "71.4"),
    q("hard", "A neighbourhood of 2400 households is a stratum in a proportional sample of 300 from 12 000 households. How many households are sampled from it?", num(60), "2400/40.", [S`\(300\times\frac{2400}{12000}=60\).`], "60"),
    q("hard", "Data have mean 40 and standard deviation 6. Each value is replaced by its z-score and then multiplied by 10 and increased by 50. What are the new mean and standard deviation? Enter the standard deviation.", num(10), "z has mean 0, sd 1.", [S`New mean \(50\), standard deviation \(10\).`], "10"),
  ]),

  wrapUp({
    qas: [
      ["What are the main steps of a statistical study?", "Question, collect, organize, summarize, interpret."],
      ["How do I choose between mean and median?", "Mean for symmetric data; median for skewed data or outliers."],
      ["Which measures are resistant to outliers?", "Median and IQR."],
      ["How do I compare values on different scales?", "Use z-scores."],
      ["What is the biggest threat to a survey's conclusions?", "Bias in how the sample was chosen or how questions were asked."],
    ],
    summary: [
      "Collect well: random sampling, fair questions, high response.",
      "Centre: mean, median, mode. Spread: range, σ or s, IQR.",
      "Position: quartiles, percentiles, z-scores.",
      "Display: choose by data type; describe shape, outliers, centre, spread.",
    ],
    next: "Chapter 6 studies two-variable data: scatter plots, correlation and regression.",
  }),
];
