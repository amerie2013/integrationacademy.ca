// IB AA SL 15.2 — Planning, Research and Using Technology: a realistic timeline, collecting primary and secondary data, sampling, pilot studies, using technology for regression and model comparison, recording sources
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard } from "./lib.mjs";
import { fig, probDoc, planeDoc } from "./figs15.mjs";

export const TITLE = "15.2 Planning, Research and Using Technology";
export const ID = "1baa0015-0001-4001-8001-000000001502";
const S = String.raw;
const P = (x, y, label = "", color = "violet") => ({ x, y, label, color });
const PX = [1, 2, 3, 4, 5, 6], PY = [2.1, 3.9, 6.2, 7.8, 10.1, 11.9];
const T = [0, 1, 2, 3, 4, 5], POP = [120, 145, 175, 210, 255, 305];
const linM = 36.857142857142854, linB = 109.52380952380953, expA = 120.19780164972491, expK = 0.18685746097526676;

export const blocks = () => [
  intro({
    icon: "🗂️",
    title: "Planning, Research and Using Technology",
    overview: S`A strong exploration is planned backwards from its question: what data or set-up is needed, what mathematics will answer the question, and how much time each stage takes. Technology — a GDC, a spreadsheet or graphing software — does the heavy calculation, but you must explain what it did and why the result makes sense. This lesson covers timelines, data collection, sampling, pilot studies and the honest use of technology.`,
    goals: [
      "plan a realistic timeline for the exploration;",
      "distinguish primary and secondary data and choose a sensible sample;",
      "use a pilot study to test an idea before committing;",
      "use technology for regression and model comparison, and explain its output;",
      "keep a record of sources and data as you go.",
    ],
    curriculum: "Internal assessment: planning the exploration; use of technology (criteria B, C, E)",
    prior: [
      [S`Find the gradient of the line through \((1,2)\) and \((5,10)\).`, S`\(2\).`],
      ["What does a correlation coefficient close to 1 mean?", "A strong positive linear relationship."],
      ["Name a function that models repeated percentage growth.", S`Exponential, \(y=ab^x\).`],
    ],
    words: [
      ["Primary data", "data you collect yourself (measurements, surveys, experiments)", ""],
      ["Secondary data", "data collected by others (published tables, databases)", ""],
      ["Pilot study", "a small trial run to test the method before the full investigation", ""],
      ["Regression", "fitting a model to data by technology, e.g. least squares", ""],
      ["Residual", "observed value minus the value predicted by the model", ""],
    ],
  }),

  section("📌 Planning and data", S`
  <p>Work backwards from the deadline and leave time for drafting and feedback. Data comes first: without it, nothing else can start.</p>
  ${fig(probDoc(["topic", "data", "maths", "draft", "revise"], [1, 2, 3, 2, 2], { xlab: "stage", ylab: "weeks" }), "A 10-week plan: most time goes to the mathematics, and two weeks are kept for revision")}
  ${table(["Data", "Strengths", "Watch for"], [["primary (your own)", "strong personal engagement; you control the method", "small samples, measurement error"], ["secondary (published)", "large, reliable data sets", "cite the source; check how it was collected"]])}
  <p>When sampling, choose a method that avoids bias. To survey 30 of 600 students systematically, take every 20th name from a random start.</p>
  ${fig(probDoc([150, 155, 160, 165, 170, 175, 180], [2, 5, 9, 12, 8, 3, 1], { xlab: "height (cm, class midpoint)", ylab: "frequency" }), "Primary data from 40 students: roughly bell-shaped, so a normal model could be tested")}
  ${keyIdea("Plan from the question: data → mathematics → writing. Collect and record data early.")}`),

  section("📌 Using technology well", S`
  <p>Technology fits models quickly. A pilot study of 6 points gives the regression line \(y\approx1.977x+0.080\) with \(r\approx0.999\) — strong evidence of a linear relationship, so the full study is worth doing.</p>
  ${fig(planeDoc({ view: { xmin: 0, xmax: 7, ymin: 0, ymax: 14 }, step: { x: 1, y: 2 }, lines: [{ m: 1.9771428571428584, b: 0.08, color: "red" }], points: PX.map((x, i) => P(x, PY[i])), xlabel: "x", ylabel: "y" }), "Pilot data with its least-squares line, r ≈ 0.999")}
  <p>To compare models, look at how close each is to the data and whether it makes sense. For a population growing from 120 to 305 in 5 years, the exponential model \(P\approx120.2e^{0.187t}\) has a much smaller sum of squared residuals (≈ 2.8) than the linear model \(P\approx36.86t+109.5\) (≈ 410).</p>
  ${fig(planeDoc({ view: { xmin: -0.5, xmax: 8.5, ymin: 0, ymax: 560 }, step: { x: 1, y: 50 }, curves: [{ f: (t) => expA * Math.exp(expK * t), color: "red" }], lines: [{ m: linM, b: linB, color: "amber", dash: true }], points: T.map((t, i) => P(t, POP[i])), xlabel: "year", ylabel: "population" }), "Exponential (red) and linear (amber) models: they agree on the data but differ by year 8")}
  ${watchOut([
    "State the technology used and what it computed.",
    "Never paste output without interpreting it.",
    "Record every data source and date as you collect it.",
    "A high r alone does not prove a model is right — check the context.",
  ])}`),

  section("📌 Explore", S`<p>Pick an interest and increase the focus level until the question names the mathematics.</p>`),

  widget("ibTopicNarrow", { init: [0, 0] }),

  examples([
    ["Level 1 · Timeline", S`An exploration is due in 10 weeks. A student plans 1 week for the topic, 2 for data, 3 for mathematics and 2 for a first draft. How many weeks remain for revision?`,
      [S`\(1+2+3+2=8\).`],
      "2 weeks"],
    ["Level 1 · Data type", "A student measures the time 40 classmates take to solve a puzzle. Is this primary or secondary data? Give one advantage.",
      ["Collected by the student: primary.", "It shows personal engagement and the method is controlled."],
      "Primary; strong personal engagement"],
    ["Level 2 · Sampling", "A school has 600 students. Describe a systematic sample of 30.",
      [S`Interval \(\frac{600}{30}=20\).`, "Choose a random start from 1–20, then take every 20th student on the list."],
      "Every 20th student from a random start"],
    ["Level 2 · Regression", S`Pilot data: \(x=1,\dots,6\), \(y=2.1,3.9,6.2,7.8,10.1,11.9\). Use technology to find the regression line and r.`,
      ["GDC linear regression.", S`\(y\approx1.977x+0.080\), \(r\approx0.999\).`],
      S`\(y\approx1.977x+0.080\), \(r\approx0.999\)`],
    ["Level 3 · Comparing models", S`Population: \(t=0,\dots,5\) years, \(P=120,145,175,210,255,305\). Compare linear and exponential models and predict year 8.`,
      [S`Linear: \(P\approx36.86t+109.5\), SSE ≈ 410; exponential: \(P\approx120.2e^{0.187t}\), SSE ≈ 2.8.`, S`Year 8: linear ≈ 404, exponential ≈ 536.`, "The exponential fits far better and matches the idea of a constant growth rate (about 20.5% a year)."],
      "Exponential is better; about 536 at year 8",
      fig(planeDoc({ view: { xmin: -0.5, xmax: 5.5, ymin: -6, ymax: 6 }, step: { x: 1, y: 2 }, points: T.map((t, i) => P(t, POP[i] - (linM * t + linB), "", "amber")), lines: [{ m: 0, b: 0, color: "gray" }], xlabel: "year", ylabel: "residual (linear)" }), "Residuals of the linear model curve up then down — a sign it is the wrong shape")],
  ]),

  practice([
    q("Level 1 · interval", "A systematic sample of 25 is taken from 500 names. What is the sampling interval?", num(20),
      "500 ÷ 25.", [S`\(\frac{500}{25}\).`], S`\(20\)`),
    q("Level 1 · data type", "Which is secondary data?", choice(["life expectancy figures from a government website", "your own stopwatch timings", "a survey you run in class", "measurements from your experiment"], 0),
      "Collected by others.", ["Published figures."], "government figures"),
    q("Level 2 · weeks", "A 12-week plan uses 2 weeks for topic, 3 for data, 4 for mathematics. How many weeks are left for drafting and revising?", num(3),
      "12 − 9.", [S`\(12-9\).`], S`\(3\)`),
    q("Level 2 · technology", "Which use of technology is best practice?", choice(["state the regression used and interpret the equation and r in context", "paste a screenshot with no comment", "report r to 10 decimal places only", "hide that a GDC was used"], 0),
      "Explain what technology did.", ["Interpret output."], "state and interpret"),
    q("Level 2 · residual", S`A model predicts 52 and the observed value is 49. Find the residual.`, num(-3),
      "observed − predicted.", [S`\(49-52\).`], S`\(-3\)`),
  ]),

  ...hard([
    ["A pilot study that changes the plan", S`A student expects the time a ball rolls down a ramp to be proportional to the ramp length. A pilot study gives times 0.71, 1.00, 1.22, 1.41 s for lengths 0.5, 1, 1.5, 2 m. What does this suggest?`,
      ["Doubling length from 0.5 to 1 m multiplies time by about 1.41, not 2.", S`The times fit \(t\approx\sqrt{L}\): \(\sqrt{0.5}\approx0.71\), \(\sqrt{1.5}\approx1.22\), \(\sqrt2\approx1.41\).`, "The plan should test a square-root (power) model, not a linear one."],
      S`\(t\approx L^{0.5}\), not \(t\propto L\)`,
      fig(planeDoc({ view: { xmin: 0, xmax: 2.4, ymin: 0, ymax: 1.8 }, step: { x: 0.5, y: 0.2 }, curves: [{ f: (L) => Math.sqrt(Math.max(0, L)), color: "red" }], lines: [{ m: 0.71 / 0.5, b: 0, color: "amber", dash: true }], points: [P(0.5, 0.71), P(1, 1), P(1.5, 1.22), P(2, 1.41)], xlabel: "length (m)", ylabel: "time (s)" }), "The pilot data follow √L (red), not a straight line (amber)")],
    ["Choosing the sample size", "A student wants to estimate the proportion of students who walk to school. Explain one reason to survey 60 rather than 10, and one reason not to survey all 900.",
      ["A larger sample gives a more reliable estimate: one or two unusual answers matter less.", "Surveying 900 takes time better spent on the mathematics; a well-chosen sample is enough."],
      "Balance reliability against time"],
  ], [
    q("Level 3 · square-root model", S`If \(t=\sqrt{L}\), what length (m) gives \(t=1.5\) s?`, num(2.25, 0.001),
      "L = t².", [S`\(1.5^2\).`], S`\(2.25\)`),
    q("Level 3 · growth factor", S`A model is \(P=120.2e^{0.187t}\). Find the yearly growth factor \(e^{0.187}\) (3 d.p.).`, num(1.206, 0.001),
      "e^{0.187}.", ["≈ 1.206, about 21% growth a year."], S`\(\approx1.206\)`),
    q("Level 3 · prediction gap", "For the population data, the models predict 404 (linear) and 536 (exponential) at year 8. Find the difference.", num(132),
      "536 − 404.", [S`\(536-404\).`], S`\(132\)`),
  ]),

  wrapUp({
    qas: [
      ["How should I plan my time?", "Backwards from the deadline, with data early and at least two weeks for revision."],
      ["Primary or secondary data?", "Either; primary shows engagement, secondary gives larger reliable sets — always cite secondary sources."],
      ["Why do a pilot study?", "To test the method and the expected relationship before investing time."],
      ["How do I use technology properly?", "Say what was computed and interpret the output in context."],
      ["How do I compare models?", "By the residuals or sum of squared residuals, and by whether the model makes sense."],
    ],
    summary: [
      "Plan backwards; data first.",
      "Sample without bias.",
      "Pilot, then commit.",
      "Interpret every technology output.",
    ],
    next: "15.3 focuses on communicating mathematics clearly.",
  }),
];
