// IB AA SL Worksheet 15.4 — Reflection, Academic Honesty and a Worked Mini-Exploration (teacher edition)
import { F, pt } from "./figT.mjs";

const S = String.raw;
const t = [0, 2, 4, 6, 8, 10], N = [50, 74, 110, 162, 240, 355];
const k = 0.19598, A = 50.05; // fitted N ≈ A e^{kt}
const r = (v, d = 1) => (Math.round(v * 10 ** d) / 10 ** d).toFixed(d);

const EXAMPLES = [
  { title: "Superficial or meaningful?", q: S`Classify: (a) "My model works well." (b) "The model underestimates the last two points by 8%, suggesting growth slows as food runs out."`,
    steps: ["(b) uses evidence and explains a limitation."], ans: "(a) superficial, (b) meaningful" },
  { title: "Limitations", q: "Give two limitations of modelling bacterial growth with an exponential function over a week.",
    steps: ["Food and space run out, so growth slows.", "Temperature changes affect the rate."], ans: "resources limited; conditions change" },
  { title: "Extensions", q: "Suggest an extension for an exploration that fitted an exponential model to 10 hours of yeast data.",
    steps: ["Collect data for 48 hours and test a logistic model."], ans: "longer data; logistic model" },
  { title: "Citing", q: "Which need citations: (a) a formula from a textbook, (b) your own measurements, (c) a data set from a government site?",
    steps: ["Others' work: (a) and (c)."], ans: "(a) and (c)" },
  { title: "Acknowledging tools", q: "How should the use of graphing software be acknowledged?",
    steps: ["Name the software and what it was used for (e.g. exponential regression)."], ans: "name it and state what it computed" },
  { title: "The data", q: "Bacteria counts (thousands) at t = 0, 2, 4, 6, 8, 10 hours are 50, 74, 110, 162, 240, 355. Describe the trend.",
    fig: F({ view: { xmin: 0, xmax: 12, ymin: 0, ymax: 400 }, points: t.map((x, i) => pt(x, N[i], false)), step: { x: 2, y: 50 } }, 5.6),
    steps: ["Each 2-hour increase multiplies N by about 1.48: exponential growth."], ans: "roughly constant ratio — exponential" },
  { title: "Fitting a model", q: S`Fit $N=Ae^{kt}$ by regressing $\ln N$ on t.`,
    steps: [S`Technology gives $A\approx50.05$, $k\approx0.196$.`], ans: S`$N\approx50.05e^{0.196t}$` },
  { title: "Doubling time", q: S`Find the doubling time for $N\approx50.05e^{0.196t}$.`,
    steps: [S`$t=\frac{\ln2}{0.196}$.`], ans: S`$\approx3.5$ hours` },
  { title: "Prediction and reflection", q: "Predict N at t = 24 hours and reflect on the prediction.",
    fig: F({ view: { xmin: 0, xmax: 26, ymin: 0, ymax: 6000 }, points: t.map((x, i) => pt(x, N[i], false)), curves: [{ f: (x) => A * Math.exp(k * x), color: "red" }], step: { x: 2, y: 1000 } }, 5.6),
    steps: [S`$50.05e^{0.196(24)}\approx${r(A * Math.exp(k * 24), 0)}$ thousand.`, "Extrapolating 14 hours beyond the data; real growth will slow, so this is likely an overestimate."], ans: S`$\approx${r(A * Math.exp(k * 24), 0)}$ thousand (probably too high)` },
];

const PROBLEMS = [
  { level: 1, q: "How many marks is criterion D worth?", recap: "Reflection.", ans: S`$3$` },
  { level: 1, q: "Give one example of a limitation of a model.", recap: "Assumption.", ans: "e.g. assumes constant temperature" },
  { level: 1, q: "Must your own measured data be cited like a source?", recap: "Describe instead.", ans: "no — describe how it was collected" },
  { level: 2, q: S`Find the doubling time of $N=200e^{0.25t}$ (2 d.p.).`, recap: "ln 2 / k.", ans: S`$\approx2.77$` },
  { level: 2, q: S`A model predicts 120 and the observed value is 114. Find the residual and the percentage error of the prediction.`, recap: "(114 − 120)/114.", ans: S`$-6$; $\approx5.3$ per cent` },
  { level: 2, q: "Rewrite as meaningful reflection: \"The model is quite good.\"", recap: "Evidence.", ans: "e.g. residuals are under 3%, smaller than measurement error" },
  { level: 2, q: "Explain why AI tools or websites used during the exploration must be acknowledged.", recap: "Integrity.", ans: "the work must be your own and all help must be credited" },
  { level: 2, q: "The residual plot shown is from an exponential model. Is the model appropriate?", recap: "Random scatter?", ans: "yes — residuals are small and patternless",
    fig: F({ view: { xmin: 0, xmax: 12, ymin: -6, ymax: 6 }, points: [pt(0, 0.5, false), pt(2, -1.2, false), pt(4, 0.8, false), pt(6, -0.4, false), pt(8, 1.1, false), pt(10, -0.7, false)], lines: [{ m: 0, b: 0, color: "gray" }], step: { x: 2, y: 2 } }, 5) },
  { level: 3, space: 4, q: S`A drink cools as $T=18+62e^{-0.07t}$. Find when T = 30 °C and comment on reliability if data covered only 0–20 min.`, recap: "Logs; extrapolation.", ans: S`$t=\frac{\ln(12/62)}{-0.07}\approx${r(Math.log(12 / 62) / -0.07)}$ min; an extrapolation` },
  { level: 3, space: 4, q: "Write a three-sentence reflection on an exploration that used 6 data points to fit a model.", recap: "Reliability, assumption, extension.", ans: "evidence of fit; small sample limits confidence; collect more data" },
  { level: 3, space: 4, q: S`Two readings, $N(0)=50$ and $N(4)=110$, are used to fit $N=50e^{kt}$. Find k.`, recap: "ln(110/50)/4.", ans: S`$\approx${r(Math.log(110 / 50) / 4, 4)}$` },
  { level: 3, space: 4, q: "Explain how a model can fit the data closely yet be unsuitable.", recap: "Behaviour beyond data.", ans: "it may make impossible predictions outside the data range" },
  { level: 3, space: 4, q: "List four things to check before submitting the exploration.", recap: "Checklist.", ans: "aim answered; notation defined; reflection throughout; sources cited" },
];

export const WS = {
  code: "15.4",
  title: "Reflection, Academic Honesty and a Worked Mini-Exploration",
  bigideas: S`Reflection uses evidence to judge results, methods and assumptions, and appears throughout the exploration. Limitations and extensions show critical thinking. Every source of data, formulas or ideas — and every tool used — must be acknowledged. A model is judged both by its fit and by whether it makes sense beyond the data.`,
  goals: ["Write meaningful reflection.", "State limitations and extensions.", "Acknowledge sources and tools.", "Evaluate a model."],
  curriculum: "Internal assessment",
  vocab: [["Reflection", "critical thinking about results"], ["Limitation", "why a result may not hold"], ["Academic integrity", "own work, all sources credited"]],
  hook: "Your model fits the data perfectly — but could it still be wrong?",
  concepts: [
    ["1. Reflection", S`${F({ view: { xmin: 0, xmax: 12, ymin: 0, ymax: 400 }, points: t.map((x, i) => pt(x, N[i], false)), curves: [{ f: (x) => A * Math.exp(k * x), color: "red" }], step: { x: 2, y: 50 } }, 4.6)} Fit is not the whole story.`],
    ["2. Integrity", "Cite sources, acknowledge tools."],
    ["3. Models", "Fit and sense."],
  ],
  tips: ["Reflect after each result.", "Use evidence.", "State assumptions.", "Cite and acknowledge.", "Test beyond the data."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
