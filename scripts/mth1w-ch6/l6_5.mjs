// MTH1W 6.5 — Chapter 6 Review (NEW lesson, placed after 6.4)
import { intro, section, keyIdea, widget, examples, practice, wrapUp, table, q, num, choice } from "./lib.mjs";
import { boxPlot } from "./figs6.mjs";

export const TITLE = "6.5 Chapter 6 Review";
export const NEW = { id: "6c6e7c1a-0a65-4d1e-9c65-c6a9f0000605", position: 45 };

export const blocks = () => [
  intro({
    icon: "🧩",
    title: "Chapter 6 Review — Data",
    overview: String.raw`This page pulls the chapter together before the test: each lesson's key idea on one screen, questions where you must choose the right tool, multi-step examples, mixed practice and a readiness checklist. Work through it after 6.1–6.4 and go back to any lesson where you get stuck.`,
    goals: [
      "recall the key idea and the common mistake of each lesson;",
      "choose the right sampling method, statistic, graph or model for a question;",
      "solve multi-step data problems;",
      "check your readiness for the chapter test.",
    ],
    curriculum: "D1.1–D1.3, D2.1–D2.5 (whole strand D)",
    prior: [
      [String.raw`Median of \(4, 9, 2, 7\)?`, String.raw`Ordered \(2, 4, 7, 9\): \(5.5\).`],
      ["Is an online poll a fair sample?", "Usually not: it is a voluntary response sample."],
      [String.raw`Ratios of \(2, 6, 18, 54\)?`, String.raw`\(\times3\): exponential.`],
    ],
    words: [
      ["Representative sample", "looks like the population", "stratified random"],
      ["Five-number summary", "min, Q1, median, Q3, max", "box plot"],
      ["Line of best fit", "trend line through the middle of the points", "\\(y=mx+b\\)"],
      ["Model", "equation that represents a situation", "\\(P=12\\,000(1.05)^t\\)"],
    ],
  }),

  section("📌 The chapter on one page", table(["Lesson", "Key idea", "Typical example", "Watch out"], [
    ["6.1 Big data", "data types; random, systematic and stratified samples are fair; bias; big data's implications", "28 of 80 sampled → 35% of the school", "bigger biased samples are still biased"],
    ["6.2 One-variable", "mean, median, mode; range, quartiles, IQR; box plots; outliers beyond 1.5 × IQR", "five-number summary 7, 10.5, 15, 19.5, 25", "order the data first"],
    ["6.3 Scatter plots", "direction and strength of correlation; line of best fit; interpolate vs extrapolate", "\\(P=-50a+475\\)", "correlation ≠ causation"],
    ["6.4 Modelling", "understand, assume, build, analyse, check, refine", "differences → linear; ratios → exponential", "state assumptions and domain"],
  ])),

  section("📌 Which tool?", keyIdea(String.raw`<strong>Collecting data?</strong> random or stratified sample, neutral questions. <strong>One variable?</strong> centre (mean/median) and spread (IQR), box plot or histogram. <strong>Two variables?</strong> scatter plot, correlation, line of best fit. <strong>Predicting the future?</strong> a model — check differences or ratios, then test it.`)),

  practice([
    q("graph", "Which graph best shows the distribution of 200 students' reaction times (continuous data)?", choice(["histogram", "circle graph", "bar graph with gaps", "pictograph"], 0),
      "Continuous data in intervals.", ["Histograms show continuous data."], "histogram"),
    q("centre", "House prices in a neighbourhood include one mansion. The best measure of a typical price is the…", choice(["median", "mean", "range", "maximum"], 0),
      "Which measure resists outliers?", ["The median is not pulled by the mansion."], "median"),
    q("sample", "To survey a school fairly about a new timetable, with different numbers of students in each grade, the best method is…", choice(["a stratified random sample by grade", "asking the student council", "an online voluntary poll", "asking one class"], 0),
      "Every grade should appear in proportion.", ["Stratified random sampling."], "stratified"),
    q("relation", "To see whether arm span and height are related, you should draw a…", choice(["scatter plot", "box plot", "circle graph", "histogram"], 0),
      "Two numerical variables.", ["Scatter plots show two variables."], "scatter plot"),
    q("model", String.raw`A table has \(y: 7, 11, 15, 19\) for \(x=0,1,2,3\). The best model is…`, choice(["linear", "exponential", "quadratic", "no model"], 0),
      "Check first differences.", ["Constant difference 4: linear."], "linear"),
  ]),

  examples([
    ["Sample to population", String.raw`A stratified random sample of \(150\) of a city's \(18\,000\) teenagers finds that \(42\) volunteer regularly. Estimate the number of teenage volunteers in the city, and say why the method is appropriate.`,
      [String.raw`\(\frac{42}{150}=0.28\); \(0.28\times18\,000=5040\).`, "Stratified random sampling keeps every group (age, neighbourhood) in proportion, so the sample should be representative."],
      String.raw`about \(5040\) teenagers`],
    ["Box plots and outliers", String.raw`Times (s) to solve a puzzle: \(28, 31, 33, 35, 36, 38, 40, 41, 44, 75\). Find the five-number summary, test \(75\) for being an outlier, and describe the effect of removing it on the mean and median.`,
      [String.raw`\(n=10\): median \(=\frac{36+38}{2}=37\); \(Q_1=33\), \(Q_3=41\); IQR \(=8\).`, String.raw`Upper fence \(41+12=53\): \(75\) is an outlier.`, String.raw`Mean with it: \(401\div10=40.1\); without: \(326\div9\approx36.2\). Median without: \(36\) — it changes much less than the mean.`],
      String.raw`\(28, 33, 37, 41, 75\); \(75\) is an outlier; the mean drops about \(3.9\), the median only \(1\)`,
      boxPlot({ five: [28, 33, 37, 41, 44], lo: 25, hi: 80, step: 5, outliers: [75], showValues: true })],
    ["Line of best fit and prediction", String.raw`Data on outdoor temperature (°C) and daily drink sales at a stand follow the line \(S=6.5T-20\) for temperatures from \(15\) to \(32\) °C. Predict sales at \(26\) °C and at \(5\) °C, and comment.`,
      [String.raw`\(26\) °C: \(6.5(26)-20=149\) drinks — interpolation, reasonable.`, String.raw`\(5\) °C: \(6.5(5)-20=12.5\) — extrapolation below the data; possible, but the trend may not hold in the cold.`],
      String.raw`\(149\) drinks; about \(12\) at \(5\) °C, but less reliable`],
    ["Choosing a model", String.raw`A video's views were \(2000\), \(3000\), \(4500\), \(6750\) on days \(0\)–\(3\). Choose a model, predict day \(6\) and comment on how long the model can last.`,
      [String.raw`Ratios \(1.5\) each day: exponential, \(V=2000(1.5)^d\).`, String.raw`Day 6: \(2000(1.5)^6\approx22\,781\) views.`, "Exponential growth cannot last: the number of interested viewers is limited, so growth will slow."],
      String.raw`\(V=2000(1.5)^d\); about \(22\,800\) on day 6`],
    ["Evaluating a claim", "An ad says: “9 out of 10 dentists recommend our toothpaste.” The survey asked 10 dentists who already sell the brand. Evaluate the claim.",
      ["Sample of 10 is very small.", "Dentists who sell the brand have a reason to favour it: sampling bias.", "The claim cannot be generalized to all dentists."],
      "not convincing: tiny, biased sample"],
  ]),

  section("📌 Mixed review", String.raw`<p>Each question uses more than one lesson.</p>`),

  practice([
    q("estimate", String.raw`In a random sample of \(60\) students, \(15\) walk to school. Out of \(840\) students, about how many walk?`, num(210),
      "Use the sample proportion.", [String.raw`\(\frac{15}{60}=0.25\); \(0.25\times840=210\).`], String.raw`\(210\)`),
    q("IQR", String.raw`Find the IQR of \(5, 8, 9, 12, 14, 15, 18, 22\).`, num(8),
      "Q1 and Q3 are the medians of the halves.", [String.raw`\(Q_1=8.5\), \(Q_3=16.5\): \(8\).`], String.raw`\(8\)`),
    q("mean", String.raw`The mean of five numbers is \(12\). Four of them are \(9, 15, 10, 14\). Find the fifth.`, num(12),
      "Total = 5 × mean.", [String.raw`\(60-48=12\).`], String.raw`\(12\)`),
    q("line", String.raw`A line of best fit passes through \((10, 35)\) and \((30, 85)\). What is its y-intercept?`, num(10),
      "Slope first, then b.", [String.raw`\(m=\frac{50}{20}=2.5\); \(35=25+b\Rightarrow b=10\).`], String.raw`\(10\)`),
    q("exponential", String.raw`A colony of \(500\) bacteria doubles every hour. How many after \(4\) hours?`, num(8000),
      "Multiply by 2 four times.", [String.raw`\(500\times2^4=8000\).`], String.raw`\(8000\)`),
  ]),

  section("📌 Am I ready for the test?", String.raw`<ul style="list-style:none;padding-left:0;">
    ${[
      ["6.1", "I can classify data, describe sampling methods, identify bias and misleading graphs, and discuss big data's implications."],
      ["6.2", "I can find the mean, median, mode, quartiles and IQR, draw box plots, find outliers and read histograms."],
      ["6.3", "I can describe correlation, draw and use a line of best fit, and explain why correlation is not causation."],
      ["6.4", "I can apply the modelling process, choose linear or exponential models, and test and refine them."],
    ].map(([c, t]) => `<li style="margin:6px 0;"><label><input type="checkbox"> <strong>${c}</strong> — ${t}</label></li>`).join("")}
  </ul>`),

  widget("statsExplorer"),

  wrapUp({
    qas: [
      ["How should I study for this test?", "Do the mixed review without notes. For each mistake, return to that lesson's explorer and practice set, then try the Level 3 worksheet problems for your two weakest lessons."],
      ["What are the most common mistakes?", "Not ordering data before finding the median, including the median in the halves for quartiles, connecting scatter-plot dots, trusting extrapolation, and claiming causation from correlation."],
      ["How much should I write in a modelling answer?", "Enough for someone else to follow: the assumptions, the model and why you chose it, the calculation, and a sentence checking whether the answer makes sense."],
      ["What makes a good written comparison of two data sets?", "Compare a measure of centre and a measure of spread, with numbers and context: “Class A's median was 3 marks higher, but its IQR was larger, so its results were less consistent.”"],
      ["How does this chapter connect to later work?", "Statistics returns in Grade 11 and 12 data management; modelling with linear and exponential relations continues in Grades 10–12."],
    ],
    summary: [
      "Collect fairly: random or stratified samples, neutral questions.",
      "Summarize: centre (mean/median), spread (IQR), box plots, histograms, outliers.",
      "Relate: scatter plots, correlation, line of best fit; beware extrapolation and causation claims.",
      "Model: differences → linear, ratios → exponential; test and refine.",
    ],
    next: "Write the Chapter 6 test. Chapter 7 turns to financial literacy.",
  }),
];
