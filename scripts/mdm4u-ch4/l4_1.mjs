// MDM4U 4.1 — Continuous Random Variables: discrete vs continuous, grouped frequency tables, frequency histograms and
// polygons (and the effect of interval width), sample mean and standard deviation, why P(X = a) = 0, probability as
// area over an interval, and the need for mathematical models
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, fig, barsSvg, tableSvg, normalSvg } from "./lib.mjs";
import { r3 } from "../mdm4u/count.mjs";

export const TITLE = "4.1 Continuous Random Variables";
export const ID = "92c7b9a0-ed76-4054-8776-4e19e4b22f88";
const S = String.raw;

// commute times (minutes) of 60 students, grouped in 5-minute intervals
const mids = [7.5, 12.5, 17.5, 22.5, 27.5, 32.5, 37.5], freq = [4, 9, 15, 14, 10, 6, 2];
const N = freq.reduce((a, b) => a + b, 0), mean = mids.reduce((s, m, i) => s + m * freq[i], 0) / N;
const sd = Math.sqrt(mids.reduce((s, m, i) => s + freq[i] * (m - mean) ** 2, 0) / (N - 1));

export const blocks = () => [
  intro({
    icon: "📏",
    title: "Continuous Random Variables",
    overview: S`A <strong>continuous random variable</strong> takes any value in an interval — time, mass, height, distance — because its values are <em>measured</em>, not counted. We cannot list every value, so we group sample data into <strong>intervals</strong> and draw a <strong>frequency histogram</strong> and a <strong>frequency polygon</strong>. With more data and narrower intervals the polygon approaches a smooth curve, which suggests a mathematical model. For a continuous variable, probabilities belong to <em>ranges</em>: \(P(a<X<b)\) is an area, and \(P(X=a)=0\) for any single value.`,
    goals: [
      "distinguish discrete and continuous random variables and frequency distributions;",
      "organize continuous data in a grouped frequency table;",
      "draw frequency histograms and polygons and judge the effect of interval width;",
      "calculate the mean and standard deviation of a sample, with and without technology;",
      "explain why probabilities of continuous variables are areas over intervals and P(X = a) = 0.",
    ],
    curriculum: "B2.1 (recognize continuous random variables; discrete vs continuous frequency distributions); B2.2 (standard deviation; mean and standard deviation of a sample); B2.3 (challenges of continuous distributions; need for models); B2.4 (frequency tables, histograms and polygons; effect of interval size); B2.5 (probability over a range; P(single value) = 0)",
    prior: [
      ["Is the number of goals in a game discrete or continuous?", "Discrete (counted)."],
      ["Find the mean of 4, 6, 8, 10.", "7."],
      ["What is the midpoint of the interval 10–15?", "12.5."],
    ],
    words: [
      ["Continuous random variable", "any value in an interval (measured)", "time to run 1 km"],
      ["Grouped frequency table", "counts of values in intervals", "10–15 min: 9 students"],
      ["Frequency polygon", "line joining the midpoints of the histogram bar tops", "approximates the distribution"],
      ["Standard deviation s", "typical distance of data from the mean", "\\(s=\\sqrt{\\frac{\\sum(x-\\bar x)^2}{n-1}}\\)"],
    ],
  }),

  section("📌 Grouping continuous data", S`
  <p>Sixty students timed their commute to school (minutes):</p>
  ${table(["Interval", "5–10", "10–15", "15–20", "20–25", "25–30", "30–35", "35–40"], [["midpoint", ...mids.map(String)], ["frequency", ...freq.map(String)]])}
  ${fig(barsSvg(freq, { labels: ["5–10", "10–15", "15–20", "20–25", "25–30", "30–35", "35–40"], histogram: true, top: true, xlabel: "commute time (min)", ylabel: "students" }), "a frequency histogram: bars touch because time is continuous")}
  <p>Using the midpoints, \(\bar x=\frac{\sum fm}{n}=${r3(mean, 2)}\) min and \(s\approx${r3(sd, 2)}\) min. The <strong>standard deviation</strong> measures spread: most values lie within about one or two standard deviations of the mean.</p>
  ${keyIdea(S`Grouping loses some detail, so the mean and standard deviation from a grouped table are estimates. Technology computes them from the raw data.`)}`),

  section("📌 Probability as area", S`
  <p>We can never record every possible time, so we sample and look for a smooth <strong>model</strong> curve. Under a model curve the total area is 1, and</p>
  \[P(a<X<b)=\text{area under the curve from }a\text{ to }b.\]
  ${fig(normalSvg({ mu: 20, s: 7, shade: [[15, 25, "green"]] }), "P(15 < X < 25) is the shaded area; a single value has no width, so P(X = 20) = 0")}
  ${keyIdea(S`For continuous variables \(P(X\le a)=P(X<a)\), because the single value \(a\) contributes no area.`)}`),

  section("📌 Explore", S`<p>Change the sample size and the interval width. Wide intervals hide the shape; narrow intervals with little data look jagged; lots of data with moderate intervals gives a smooth polygon.</p>`),

  widget("freqPolygon", { init: [200, 5] }),

  section("📌 Watch out", watchOut([
    "Measured quantities are continuous even when they are rounded (a time recorded as 12 min could be 12.3 min).",
    "Intervals must not overlap and should have equal widths; decide where a boundary value goes (e.g. 10 belongs to 10–15).",
    "Use n − 1 in the sample standard deviation.",
    "For a continuous variable, P(X = a) = 0, so “<” and “≤” give the same probability.",
  ])),

  examples([
    ["Discrete or continuous?", "Classify: (a) number of text messages sent today; (b) time spent on the phone; (c) mass of a backpack; (d) number of students absent.",
      [S`Counted: (a), (d) — discrete.`, S`Measured: (b), (c) — continuous.`],
      "(a) D (b) C (c) C (d) D"],
    ["Mean from a grouped table", "Find the mean commute time from the table above.",
      [S`\(\sum fm=${mids.map((m, i) => `${freq[i]}(${m})`).join("+")}=${r3(mean * N, 1)}\).`, S`\(\bar x=\frac{${r3(mean * N, 1)}}{60}\).`],
      `≈ ${r3(mean, 2)} min`],
    ["Standard deviation", "Find the standard deviation of the sample 12, 15, 9, 18, 16 (minutes).",
      [S`\(\bar x=14\). Deviations: −2, 1, −5, 4, 2; squares 4, 1, 25, 16, 4: sum 50.`, S`\(s=\sqrt{\frac{50}{4}}=\sqrt{12.5}\).`],
      `≈ ${r3(Math.sqrt(12.5), 2)} min`],
    ["Relative frequency as probability", "Using the commute table, estimate P(a randomly chosen student's commute is 15–25 minutes).",
      [S`\(\frac{15+14}{60}=\frac{29}{60}\).`],
      `≈ ${r3(29 / 60)}`,
      fig(barsSvg(freq.map((f) => f / N), { labels: ["5–10", "10–15", "15–20", "20–25", "25–30", "30–35", "35–40"], histogram: true, hl: [2, 3], fmt: (v) => v.toFixed(2), ylabel: "relative frequency" }))],
    ["A uniform continuous model", "A bus arrives at a random time in a 20-minute window, equally likely at any moment. Find P(you wait between 5 and 8 minutes) and P(you wait exactly 5 minutes).",
      [S`The model is a rectangle of height \(\frac1{20}\) over 0–20 (area 1).`, S`\(P(5<X<8)=\frac{3}{20}=0.15\); \(P(X=5)=0\) (no width).`],
      "0.15 and 0"],
  ]),

  practice([
    q("type", "Which variable is continuous?", choice(["the time to finish a test", "the number of pets in a home", "the number of heads in 5 tosses", "a shoe size"], 0), "Measured.", ["Time is measured."], "time"),
    q("midpoint", "What is the midpoint of the interval 40–50?", num(45), "Average of the ends.", [S`\(\frac{40+50}2\).`], "45"),
    q("mean", "Find the mean of 3.2, 4.8, 5.0, 6.6, 7.4.", num(5.4), "Sum ÷ 5.", [S`\(\frac{27}5\).`], "5.4"),
    q("single", "For a continuous random variable, what is P(X = 7.5)?", num(0), "A single value has no width.", [S`Area of a line is 0.`], "0"),
    q("uniform", "A random time is equally likely anywhere in 0–40 minutes. Find P(10 < X < 18).", num(0.2), "8/40.", [S`\(\frac{8}{40}\).`], "0.2"),
  ]),

  ...hard([
    ["Changing the interval width", "The commute data are regrouped into 10-minute intervals 5–15, 15–25, 25–35, 35–45. Find the new frequencies and explain what the histogram gains and loses.",
      [S`\(4+9=13\), \(15+14=29\), \(10+6=16\), \(2\).`, S`Fewer, wider bars: smoother but less detail (the peak at 15–25 can no longer be located within 5 minutes).`],
      "13, 29, 16, 2",
      fig(barsSvg([13, 29, 16, 2], { labels: ["5–15", "15–25", "25–35", "35–45"], histogram: true, top: true, ylabel: "students" }))],
    ["Standard deviation from a frequency table", "Use the midpoints to estimate the standard deviation of the commute times and interpret it.",
      [S`\(s=\sqrt{\frac{\sum f(m-\bar x)^2}{n-1}}\) with \(\bar x\approx${r3(mean, 2)}\).`, S`\(s\approx${r3(sd, 2)}\) min: a typical commute differs from the mean by about ${Math.round(sd)} minutes.`],
      `≈ ${r3(sd, 2)} min`],
  ], [
    q("hard", "Data: 21, 25, 22, 30, 27. Find the sample standard deviation (2 decimals).", num(r3(Math.sqrt([21, 25, 22, 30, 27].reduce((s, x) => s + (x - 25) ** 2, 0) / 4), 2), 0.01), "Mean 25; deviations −4, 0, −3, 5, 2; Σ(x − x̄)² = 54.", [S`\(s=\sqrt{\frac{54}{4}}\).`], `${r3(Math.sqrt(13.5), 2)}`),
    q("hard", "A waiting time is equally likely anywhere from 2 to 12 minutes. Find P(X > 9.5).", num(0.25), "(12 − 9.5)/10.", [S`\(\frac{2.5}{10}\).`], "0.25"),
    q("hard", "In a grouped table, 18 of 75 values are in 20–25 and 12 are in 25–30. Estimate P(20 ≤ X < 30).", num(0.4), "30/75.", [S`\(\frac{30}{75}\).`], "0.4"),
  ]),

  wrapUp({
    qas: [
      ["How do I tell discrete from continuous?", "Counted values are discrete; measured values are continuous."],
      ["Why do we group continuous data?", "There are too many possible values; intervals make patterns visible."],
      ["What does the frequency polygon show?", "An approximation to the shape of the distribution; with more data it approaches a smooth curve."],
      ["Why is P(X = a) = 0?", "A single point has no width, so no area under the curve."],
      ["Why do we need a model?", "We can only sample; a model curve (like the normal curve) lets us calculate probabilities for any interval."],
    ],
    summary: [
      "Continuous = measured; probabilities over intervals.",
      "Grouped tables, histograms, polygons.",
      "Mean and standard deviation summarize centre and spread.",
      "P(X = a) = 0; P(a < X < b) = area.",
    ],
    next: "4.2 introduces the most important continuous model: the normal distribution.",
  }),
];
