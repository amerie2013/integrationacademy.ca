// IB AA SL 6.1 — Sampling and Data Collection: populations and samples, discrete/continuous data, bias, sampling techniques, outliers and reliability
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, plane } from "./lib.mjs";

export const TITLE = "6.1 Sampling and Data Collection";
export const ID = "53e5f903-802c-42d7-a796-d5d003cc520d";
const S = String.raw;
/** vertical bars for a bar chart: [label x, height] pairs */
const bars = (pairs, color = "violet", w = 0.6) => pairs.map(([x, h]) => ({ pts: [[x - w / 2, 0], [x - w / 2, h], [x + w / 2, h], [x + w / 2, 0]], color }));
/** a grid of 100 dots, with the chosen indices highlighted */
const dots = (chosen, cols = 10) => Array.from({ length: 100 }, (_, i) => ({ x: (i % cols) + 1, y: 10 - Math.floor(i / cols), color: chosen.includes(i) ? "red" : "gray" }));

export const blocks = () => [
  intro({
    icon: "🗳️",
    title: "Sampling and Data Collection",
    overview: S`Statistics starts with data, and good conclusions need good data. Usually we cannot measure a whole population, so we study a sample and use it to say something about the population. In this lesson you will classify data, recognise sources of bias, compare five sampling techniques, and decide how outliers and sample size affect how far you can trust the results.`,
    goals: [
      "distinguish a population from a sample, and a parameter from a statistic;",
      "classify data as discrete or continuous;",
      "describe simple random, systematic, stratified, quota and convenience sampling;",
      "calculate the numbers to choose from each group in a stratified sample;",
      "identify bias, and discuss reliability, outliers and the effect of sample size.",
    ],
    curriculum: "SL 4.1 (concepts of population, sample, random sample, discrete and continuous data; reliability of data sources and bias in sampling; interpretation of outliers; sampling techniques and their effectiveness)",
    prior: [
      ["What is 15% of 240?", "36."],
      ["Is 'number of siblings' a whole number or a measurement?", "A whole number — it is counted."],
      ["Write 45 out of 300 as a fraction in its simplest form.", "3/20."],
    ],
    words: [
      ["Population", "the whole group of interest", "all 1200 students in a school"],
      ["Sample", "the part of the population actually studied", "80 of those students"],
      ["Discrete data", "counted; takes separate values", "number of pets"],
      ["Continuous data", "measured; any value in a range", "height, time"],
      ["Bias", "a systematic tendency for the sample to misrepresent the population", "surveying only the gym"],
    ],
  }),

  section("📌 Data, populations and samples", S`
  <p>A <em>population</em> is everything we want to know about; a <em>sample</em> is the part we actually measure. A number describing the population (such as its true mean) is a <em>parameter</em>; the same number calculated from a sample is a <em>statistic</em>, used to estimate it.</p>
  ${table(["Data", "Type", "Why"], [
    ["number of goals in a match", "discrete", "counted: 0, 1, 2, …"],
    ["time to run 100 m", "continuous", "measured: any value, e.g. 12.37 s"],
    ["shoe size", "discrete", "only certain values (8, 8.5, 9, …)"],
    ["mass of an apple", "continuous", "measured"],
  ])}
  ${plane({ view: { xmin: 0, xmax: 11, ymin: 0, ymax: 11 }, step: { x: 1, y: 1 }, points: dots([3, 17, 22, 38, 41, 56, 64, 79, 85, 92]) }, "A simple random sample of 10 from a population of 100 (red)")}
  ${keyIdea("A sample is useful only if it represents the population. Random selection protects against bias; a larger sample reduces the effect of chance.")}`),

  section("📌 Sampling techniques and bias", S`
  ${table(["Technique", "How it works", "Strength / weakness"], [
    ["Simple random", "every sample of size n is equally likely (numbered list + random numbers)", "unbiased; needs a full list"],
    ["Systematic", "every kth member from a random start (k = N/n)", "quick; biased if the list has a pattern"],
    ["Stratified", "split into groups (strata); sample each in proportion to its size", "represents every group; needs group sizes"],
    ["Quota", "fill a set number from each group, chosen by the interviewer", "quick; not random, can be biased"],
    ["Convenience", "whoever is easiest to reach", "cheap; likely to be biased"],
  ])}
  <p><em>Stratified example.</em> A school has 300 Year 11 and 200 Year 12 students. A sample of 50 in proportion takes \(\frac{300}{500}\times50=30\) from Year 11 and \(20\) from Year 12.</p>
  ${plane({ view: { xmin: 0, xmax: 3, ymin: 0, ymax: 35 }, step: { x: 1, y: 5 }, segs: [...bars([[1, 30]], "blue"), ...bars([[2, 20]], "red")], xlabel: "Year 11 | Year 12", ylabel: "in sample" }, "Stratified sample of 50: 30 from Year 11, 20 from Year 12")}
  ${plane({ view: { xmin: 0, xmax: 11, ymin: 0, ymax: 11 }, step: { x: 1, y: 1 }, points: dots(Array.from({ length: 10 }, (_, i) => 4 + 10 * i)) }, "Systematic sample: every 10th member from a random start (the 5th)")}
  ${plane({ view: { xmin: 0, xmax: 11, ymin: 0, ymax: 11 }, step: { x: 1, y: 1 }, points: dots([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]) }, "Convenience sample: the first row only — very likely biased")}
  <p><em>Outliers</em> are values far from the rest. Check them: a data-entry error should be corrected or removed; a genuine extreme value should be kept and its effect discussed.</p>
  ${watchOut([
    "Stratified sampling uses proportions: multiply the group's fraction of the population by n.",
    "Round stratified numbers sensibly so the total is still n.",
    "Quota and convenience samples are not random.",
    "A bigger biased sample is still biased.",
  ])}`),

  section("📌 Explore", S`<p>Choose a sampling method and press 'new sample' several times. Compare the sample means with the population mean, and watch how often the year groups are represented fairly.</p>`),

  widget("ibSampling", { init: [10, 0] }),

  examples([
    ["Level 1 · Classify", S`Classify each as discrete or continuous: (a) the number of cars in a car park; (b) the temperature at noon; (c) the number of correct answers on a test.`,
      ["(a) counted; (b) measured; (c) counted."],
      "discrete, continuous, discrete"],
    ["Level 1 · Population and sample", "A researcher asks 150 of a town's 12 000 adults how often they cycle. Identify the population, the sample and one possible source of bias if she asks people outside a bike shop.",
      ["Population: the 12 000 adults; sample: the 150 asked.", "Outside a bike shop, cyclists are over-represented."],
      "bias towards cyclists"],
    ["Level 2 · Stratified sample", "A club has 84 juniors, 126 adults and 42 seniors. A stratified sample of 30 is taken. How many from each group?",
      [S`Total 252.`, S`Juniors \(\frac{84}{252}\times30=10\); adults \(\frac{126}{252}\times30=15\); seniors \(\frac{42}{252}\times30=5\).`],
      "10, 15, 5",
      plane({ view: { xmin: 0, xmax: 4, ymin: 0, ymax: 18 }, step: { x: 1, y: 2 }, segs: [...bars([[1, 10]], "blue"), ...bars([[2, 15]], "violet"), ...bars([[3, 5]], "green")], xlabel: "juniors | adults | seniors", ylabel: "sample" })],
    ["Level 2 · Systematic sample", "From a list of 600 customers, 40 are chosen systematically. Describe how, and give the first three if the random start is 9.",
      [S`\(k=\frac{600}{40}=15\).`, "Choose a random start between 1 and 15, then every 15th: 9, 24, 39, …"],
      "9, 24, 39"],
    ["Level 3 · Choosing a method", "A factory makes bolts on three machines, A (50%), B (30%) and C (20%). A sample of 60 bolts is needed to check quality. Recommend a method and justify it.",
      ["Machines may differ in quality, so each must be represented in proportion.", "Stratified: 30 from A, 18 from B, 12 from C, chosen at random from each machine's output."],
      "stratified: 30, 18, 12"],
  ]),

  practice([
    q("Level 1 · type", "The mass of a newborn baby is:", choice(["continuous", "discrete", "categorical", "neither"], 0),
      "Is it counted or measured?", ["It is measured."], "continuous"),
    q("Level 1 · systematic", S`A systematic sample of 25 is taken from 500 names. Find the sampling interval \(k\).`, num(20),
      "k = N/n.", [S`\(\frac{500}{25}\).`], S`\(20\)`),
    q("Level 2 · stratified", "A school has 450 boys and 350 girls. A stratified sample of 40 is taken. How many girls?", num(17.5, 0.5),
      "350/800 of 40.", [S`\(\frac{350}{800}\times40=17.5\approx18\) (or 17).`], S`\(17.5\to18\)`),
    q("Level 2 · bias", "Which sample is most likely to be biased for estimating the average height of adults in a city?", choice(["the members of a basketball club", "a simple random sample from the electoral list", "a stratified sample by age group", "a systematic sample from the census list"], 0),
      "Who is over-represented?", ["Basketball players are taller than average."], "basketball club"),
    q("Level 2 · stratified", "A firm has 30 managers and 270 workers. In a stratified sample of 50, how many managers?", num(5),
      "30/300 of 50.", [S`\(\frac{30}{300}\times50\).`], S`\(5\)`),
  ]),

  ...hard([
    ["Rounding a stratified sample", "A college has 412 first-years, 365 second-years and 223 third-years. Find the numbers in a stratified sample of 80.",
      [S`Total 1000: \(32.96\), \(29.2\), \(17.84\).`, S`Rounded: 33, 29, 18 — total 80.`, "Check the rounded numbers still add to 80; adjust the largest remainder if not."],
      "33, 29, 18",
      plane({ view: { xmin: 0, xmax: 4, ymin: 0, ymax: 36 }, step: { x: 1, y: 4 }, segs: [...bars([[1, 33]], "blue"), ...bars([[2, 29]], "violet"), ...bars([[3, 18]], "green")], ylabel: "sample" }, "Stratified sample of 80")],
    ["Evaluating a survey", "A council emails a questionnaire about a new park to residents who signed up for its newsletter; 12% reply. Discuss two sources of bias and suggest an improvement.",
      ["Only newsletter subscribers (already engaged) can reply: selection bias.", "Only 12% reply, likely those with strong views: non-response bias.", "Improve: choose a random sample from the full resident list and follow up non-responders."],
      "selection and non-response bias"],
  ], [
    q("Level 3 · population", "A stratified sample of 60 from a school includes 24 Year 12s. The school has 450 students. Estimate the number of Year 12 students.", num(180),
      "The proportion is the same.", [S`\(\frac{24}{60}\times450\).`], S`\(180\)`),
    q("Level 3 · interval", "A systematic sample from a list of 1260 uses k = 35. How many are in the sample?", num(36),
      "n = N/k.", [S`\(\frac{1260}{35}\).`], S`\(36\)`),
    q("Level 3 · strata", "Strata have sizes 120, 200 and 80. A stratified sample has 15 from the largest stratum. How big is the whole sample?", num(30),
      "200/400 of n = 15.", [S`\(n=30\).`], S`\(30\)`),
  ]),

  wrapUp({
    qas: [
      ["Why not survey the whole population?", "It is often too expensive, too slow or impossible (testing destroys the item). A good sample gives a reliable estimate."],
      ["What makes a sample random?", "Every member (or every possible sample) has a known, equal chance of selection, chosen by a random process."],
      ["When is stratified sampling best?", "When the population has groups that may differ and you know their sizes."],
      ["How should I treat an outlier?", "Check it. Correct or remove errors; keep genuine values and comment on their effect."],
      ["Does a larger sample remove bias?", "No — it reduces random variation, but a biased method stays biased."],
    ],
    summary: [
      "Population vs sample; parameter vs statistic.",
      "Discrete (counted) vs continuous (measured).",
      "Random, systematic, stratified (proportional), quota, convenience.",
      "Bias comes from the method, not the size.",
      "Investigate outliers before removing them.",
    ],
    next: "6.2 presents data in frequency tables, histograms, cumulative frequency graphs and box plots.",
  }),
];
