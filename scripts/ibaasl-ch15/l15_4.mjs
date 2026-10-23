// IB AA SL 15.4 — Reflection, Academic Honesty and a Worked Mini-Exploration: meaningful versus superficial reflection, limitations and extensions, citing sources and tools, and a complete short exploration modelling a cooling drink
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard } from "./lib.mjs";
import { fig, planeDoc } from "./figs15.mjs";

export const TITLE = "15.4 Reflection, Academic Honesty and a Worked Mini-Exploration";
export const ID = "1baa0015-0001-4001-8001-000000001504";
const S = String.raw;
const P = (x, y, label = "", color = "violet") => ({ x, y, label, color });
const TT = [0, 5, 10, 15, 20, 25, 30], TEMP = [90, 72, 59, 49, 42, 36, 32];
const A = 70.05115657838813, K = -0.05871853544456223;
const expT = (t) => 20 + A * Math.exp(K * t);
const r = (v, d = 2) => Math.round(v * 10 ** d) / 10 ** d;
const view = { xmin: -2, xmax: 62, ymin: -40, ymax: 100 };

export const blocks = () => [
  intro({
    icon: "🔍",
    title: "Reflection, Academic Honesty and a Worked Mini-Exploration",
    overview: S`Reflection (criterion D) is critical thinking about your own work: does the result make sense, how reliable is it, what are its limits, and what would you try next? It belongs throughout the exploration, not in one paragraph at the end. Academic honesty means the work is yours and every source and tool is acknowledged. This lesson finishes with a complete short exploration — modelling a cooling drink — that shows reflection, communication and mathematics working together.`,
    goals: [
      "tell meaningful reflection from superficial comment;",
      "discuss the limitations and possible extensions of a model;",
      "acknowledge sources, data and tools correctly;",
      "follow a short exploration from question to conclusion;",
      "compare models using both residuals and real-world sense.",
    ],
    curriculum: "Internal assessment: criterion D (reflection), criterion E (use of mathematics); academic integrity",
    prior: [
      [S`Solve \(e^{-0.06t}=0.5\).`, S`\(t=\frac{\ln2}{0.06}\approx11.6\).`],
      ["What is a residual?", "Observed value minus predicted value."],
      ["Why cite a source?", "To credit others' work and let readers check it."],
    ],
    words: [
      ["Reflection", "critical thinking about the results, methods and their meaning", ""],
      ["Limitation", "a reason the result may not hold exactly or generally", ""],
      ["Extension", "a sensible next question the work suggests", ""],
      ["Academic integrity", "producing your own work and acknowledging all sources and tools", ""],
      ["Model validity", "whether a model fits the data and makes sense beyond it", ""],
    ],
  }),

  section("📌 Reflection and academic honesty", S`
  <p>Superficial: "I enjoyed this and my model is good." Meaningful: "The exponential model has residuals under 0.4 °C, but it assumes a constant room temperature; my readings were taken near a window, so the true ambient temperature may have changed."</p>
  ${table(["Superficial", "Meaningful"], [["my answer is correct", "the result agrees with the data to within 0.4 °C, which is less than my thermometer's precision"], ["this could be improved", "a lid would reduce evaporation, which my model ignores"], ["I learned a lot", "the linear model fails because it predicts temperatures below the room's, which is physically impossible"]])}
  <p>Cite every source of data, formulas or ideas you did not create, and acknowledge the tools used (GDC, software, and any AI tool, following your school's and the IB's academic integrity policy). Your exploration must be your own work.</p>
  ${fig(planeDoc({ view: { xmin: -2, xmax: 32, ymin: -1, ymax: 1 }, step: { x: 5, y: 0.25 }, points: TT.map((t, i) => P(t, TEMP[i] - expT(t), "", "amber")), lines: [{ m: 0, b: 0, color: "gray" }], xlabel: "time t (min)", ylabel: "residual (°C)" }), "Residuals of the exponential model are small and show no pattern — evidence of a good fit")}
  ${keyIdea("Reflect throughout: after each result ask whether it makes sense, how reliable it is and what it cannot tell you.")}`),

  section("📌 A worked mini-exploration: the cooling drink", S`
  <p><b>Aim.</b> I measured my coffee's temperature T (°C) every 5 minutes after pouring, in a room at 20 °C. Which model best describes how it cools, and when will it reach 25 °C?</p>
  ${fig(planeDoc({ view: { xmin: -2, xmax: 32, ymin: 0, ymax: 100 }, step: { x: 5, y: 10 }, points: TT.map((t, i) => P(t, TEMP[i])), lines: [{ m: 0, b: 20, color: "gray", dash: true }], xlabel: "time t (min)", ylabel: "temperature T (°C)" }), "Data: 90, 72, 59, 49, 42, 36, 32 °C at t = 0, 5, …, 30 min; dashed: room temperature")}
  <p><b>Models.</b> Linear regression gives \(T\approx-1.88t+82.5\). Because the drink should approach room temperature, I also fitted \(T=20+Ae^{kt}\) by regressing \(\ln(T-20)\) on t: \(T\approx20+70.05e^{-0.0587t}\).</p>
  ${fig(planeDoc({ view, step: { x: 10, y: 20 }, curves: [{ f: expT, color: "red" }], lines: [{ m: -1.8785714285714286, b: 82.46428571428571, color: "amber", dash: true }, { m: 0, b: 20, color: "gray" }], points: TT.map((t, i) => P(t, TEMP[i])), xlabel: "time t (min)", ylabel: "T (°C)" }), "Extended to 60 min: the exponential model (red) levels off at 20 °C; the linear model (amber) falls below 0 °C")}
  <p><b>Comparison.</b> Sum of squared residuals: linear ≈ 151, exponential ≈ 0.2. The linear model also predicts \(-30\) °C at 60 minutes — impossible in a 20 °C room. The exponential model is both closer and physically sensible.</p>
  ${watchOut([
    "A good fit to the data is not enough: check the model's behaviour beyond the data.",
    "Seven points is a small data set — say so in the reflection.",
    "State assumptions (constant room temperature, no lid, same mug).",
    "Credit any formula, such as Newton's law of cooling, that you did not derive.",
  ])}`),

  section("📌 Explore", S`<p>Switch between the three models. Compare the sum of squared residuals and the prediction at 60 minutes.</p>`),

  widget("ibModelFit", { init: [2] }),

  examples([
    ["Level 1 · Spotting meaningful reflection", "Which is meaningful reflection? (a) \"My model is good.\" (b) \"The residuals are below 0.4 °C, smaller than the thermometer's 0.5 °C precision, so the model is as accurate as my data allow.\"",
      ["(b) uses evidence (residuals, precision) to judge reliability.", "(a) gives no reason."],
      "(b)"],
    ["Level 1 · What needs citing?", "Which need acknowledging: (i) the formula for Newton's law of cooling from a website, (ii) your own temperature readings, (iii) a regression done on a GDC, (iv) a graph made with online software?",
      ["(i) another's work — cite the source.", "(iii) and (iv) — state the tool used.", "(ii) is your own data: describe how it was collected."],
      "(i) cited; (iii), (iv) acknowledged; (ii) described"],
    ["Level 2 · Comparing predictions", S`Use both models to predict T at 60 minutes and comment.`,
      [S`Linear: \(-1.879(60)+82.46\approx-30.3\) °C.`, S`Exponential: \(20+70.05e^{-0.0587(60)}\approx22.1\) °C.`, "Only the exponential prediction is physically possible."],
      S`\(-30.3\) °C vs \(22.1\) °C; exponential is valid`],
    ["Level 2 · Half-life of the difference", S`For \(T=20+70.05e^{-0.0587t}\), find how long the temperature difference from the room takes to halve.`,
      [S`\(e^{-0.0587t}=\frac12\Rightarrow t=\frac{\ln2}{0.0587}\).`],
      S`\(\approx11.8\) minutes`],
    ["Level 3 · Answering the aim", S`When does the coffee reach 25 °C, and how confident can we be?`,
      [S`\(20+70.05e^{-0.0587t}=25\Rightarrow t=\frac{\ln(5/70.05)}{-0.0587}\approx${r(Math.log(5 / A) / K, 1)}\) min.`, "This extrapolates beyond 30 minutes of data, so it relies on the model continuing to hold.", "Extension: take readings to 60 minutes to test the prediction."],
      S`\(t\approx${r(Math.log(5 / A) / K, 1)}\) min (an extrapolation)`,
      fig(planeDoc({ view: { xmin: -2, xmax: 62, ymin: 0, ymax: 100 }, step: { x: 10, y: 10 }, curves: [{ f: expT, color: "red" }], lines: [{ m: 0, b: 25, color: "green", dash: true }], points: [P(Math.log(5 / A) / K, 25, "t ≈ 45", "green")], xlabel: "time t (min)", ylabel: "T (°C)" }), "The model reaches 25 °C at about 45 minutes — beyond the data")],
  ]),

  practice([
    q("Level 1 · reflection", "Which sentence is meaningful reflection?", choice(["the model predicts −30 °C at 60 min, which is impossible, so the linear model is unsuitable beyond the data", "I think my work is good", "this was interesting", "maths is useful"], 0),
      "Evidence and judgement.", ["The first uses a result to judge the model."], "the −30 °C sentence"),
    q("Level 1 · citing", "Which must be cited as a source?", choice(["a data table copied from a sports website", "your own survey results", "a calculation you did by hand", "your own graph of your own data"], 0),
      "Others' work.", ["The website data."], "the website data"),
    q("Level 2 · half-life", S`The difference from room temperature halves every 11.8 minutes and starts at 70 °C. Find the difference after 23.6 minutes.`, num(17.5, 0.01),
      "Two halvings.", [S`\(70\times\frac14\).`], S`\(17.5\)`),
    q("Level 2 · compare", "Model A has a sum of squared residuals of 151 and model B of 0.2 on the same data. Which fits the data better?", choice(["B", "A", "they fit equally", "cannot tell"], 0),
      "Smaller SSE.", ["B."], "B"),
    q("Level 2 · prediction", S`Using \(T=20+70e^{-0.0587t}\), find T at \(t=40\) (1 d.p.).`, num(r(20 + 70 * Math.exp(K * 40), 1), 0.05),
      "Substitute.", [S`\(20+70e^{-2.35}\).`], S`\(\approx${r(20 + 70 * Math.exp(K * 40), 1)}\)`),
  ]),

  ...hard([
    ["Finding k from two readings", S`Using only the readings at \(t=0\) (90 °C) and \(t=10\) (59 °C) and \(T=20+70e^{kt}\), find k and predict when T = 25 °C.`,
      [S`\(70e^{10k}=39\Rightarrow k=\frac{\ln(39/70)}{10}\approx${r(Math.log(39 / 70) / 10, 4)}\).`, S`\(70e^{kt}=5\Rightarrow t=\frac{\ln(5/70)}{k}\approx${r(Math.log(5 / 70) / (Math.log(39 / 70) / 10), 1)}\) min.`, "Close to the regression answer, but two points make it sensitive to measurement error."],
      S`\(k\approx${r(Math.log(39 / 70) / 10, 4)}\), \(t\approx${r(Math.log(5 / 70) / (Math.log(39 / 70) / 10), 1)}\) min`,
      fig(planeDoc({ view: { xmin: -2, xmax: 52, ymin: 0, ymax: 100 }, step: { x: 10, y: 10 }, curves: [{ f: (t) => 20 + 70 * Math.exp((Math.log(39 / 70) / 10) * t), color: "red" }], points: [P(0, 90, "(0, 90)"), P(10, 59, "(10, 59)")], xlabel: "time t (min)", ylabel: "T (°C)" }), "A model through two readings only")],
    ["Writing a full reflection", "Write a reflection on the cooling-coffee exploration covering reliability, assumptions and an extension.",
      ["Reliability: residuals below 0.4 °C over 30 minutes; only 7 readings and one trial.", "Assumptions: constant 20 °C room, no lid, same mug, thermometer accurate to 0.5 °C.", "Extension: repeat with a lid or different mugs and compare the values of k to measure insulation."],
      "Evidence-based reliability, stated assumptions, a testable extension"],
  ], [
    q("Level 3 · k from two points", S`\(T=20+70e^{kt}\) passes through \((10,59)\). Find k (4 d.p.).`, num(r(Math.log(39 / 70) / 10, 4), 0.0001),
      "70e^{10k} = 39.", [S`\(\frac{\ln(39/70)}{10}\).`], S`\(${r(Math.log(39 / 70) / 10, 4)}\)`),
    q("Level 3 · time to 25 °C", S`With \(T=20+70.05e^{-0.0587t}\), find t when T = 25 °C (1 d.p.).`, num(r(Math.log(5 / 70.05) / -0.0587, 1), 0.1),
      "70.05e^{−0.0587t} = 5.", ["Take logarithms."], S`\(\approx${r(Math.log(5 / 70.05) / -0.0587, 1)}\)`),
    q("Level 3 · marks", "How many marks are available for reflection (criterion D)?", num(3),
      "D is out of 3.", ["3."], S`\(3\)`),
  ]),

  wrapUp({
    qas: [
      ["What makes reflection meaningful?", "It uses evidence to judge results, methods and assumptions, and suggests a testable extension."],
      ["Where does reflection go?", "Throughout the exploration, after each significant result."],
      ["What must be acknowledged?", "Every source of data, formulas or ideas, and the tools used (including any AI tool)."],
      ["How do I compare models?", "By residuals and by whether predictions make sense beyond the data."],
      ["What did the coffee example show?", "A model can fit data well and still be judged by its real-world behaviour; the exponential model passed both tests."],
    ],
    summary: [
      "Reflect with evidence, throughout.",
      "State assumptions and limitations.",
      "Acknowledge sources and tools.",
      "Judge models by fit and by sense.",
    ],
    next: "Use these four lessons as a checklist while you plan, write and review your own exploration.",
  }),
];
