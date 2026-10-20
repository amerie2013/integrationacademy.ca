// MCV4U 5.5 — Making Connections: Exponential Models (NEW lesson): growth and decay with P′ = kP, doubling time and
// half-life, continuous compound interest, Newton's law of cooling, drug concentration, and logistic growth
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, plane } from "./lib.mjs";

export const TITLE = "5.5 Making Connections: Exponential Models";
export const ID = "6d4fc005-0001-4001-8001-000000000505";

const S = String.raw;
const E = Math.E;
export const blocks = () => [
  intro({
    icon: "🦠",
    title: "Making Connections: Exponential Models",
    overview: S`When a quantity changes at a rate proportional to its size — more bacteria produce more bacteria, a hotter drink cools faster — it follows an exponential model. If \(P(t)=P_0e^{kt}\), then \(P'(t)=kP(t)\): the rate is \(k\) times the amount. Positive \(k\) means growth with a fixed <strong>doubling time</strong> \(\frac{\ln2}{k}\); negative \(k\) means decay with a fixed <strong>half-life</strong> \(\frac{\ln2}{|k|}\). The same derivative appears in continuously compounded interest, Newton's law of cooling, and — once a population nears a limit — the logistic model.`,
    goals: [
      "use P(t) = P₀e^(kt) and its derivative P′ = kP;",
      "find doubling times and half-lives;",
      "find rates of change in interest, cooling and decay models;",
      "find the maximum of a concentration model;",
      "interpret the steepest point of a logistic curve.",
    ],
    curriculum: "A3.5, B2.1–B2.5 (solve problems involving rates of change of exponential models arising from real-world applications)",
    prior: [
      [S`\((e^{0.2t})'\)?`, S`\(0.2e^{0.2t}\).`],
      [S`Solve \(e^{kt}=2\).`, S`\(t=\frac{\ln2}{k}\).`],
      [S`Value of \(e^0\)?`, S`\(1\).`],
    ],
    words: [
      ["Growth constant", "k in \\(P=P_0e^{kt}\\)", "\\(k\\gt0\\): growth"],
      ["Doubling time", "\\(\\frac{\\ln 2}{k}\\)", "independent of \\(P_0\\)"],
      ["Half-life", "\\(\\frac{\\ln2}{|k|}\\)", "decay"],
      ["Logistic model", "\\(P=\\frac{M}{1+Ae^{-kt}}\\)", "levels off at M"],
    ],
  }),

  section("📌 Rate proportional to amount", S`
  ${table(["Model", "Formula", "Rate"], [
    ["growth / decay", "\\(P_0e^{kt}\\)", "\\(kP\\)"],
    ["continuous interest", "\\(A=A_0e^{rt}\\)", "\\(rA\\)"],
    ["cooling to room temp \\(T_s\\)", "\\(T_s+(T_0-T_s)e^{-kt}\\)", "\\(-k(T-T_s)\\)"],
  ])}
  ${plane({ view: { xmin: 0, xmax: 12, ymin: 0, ymax: 1100 }, curves: [{ f: (t) => 100 * Math.exp(0.2 * t), color: "violet" }, { f: (t) => 1000 * Math.exp(-0.25 * t), color: "blue" }], points: [{ x: Math.log(2) / 0.2, y: 200, label: "doubled", color: "red" }, { x: Math.log(2) / 0.25, y: 500, label: "halved", color: "red" }], step: { x: 1, y: 100 } }, "Growth 100e^(0.2t) (violet) doubles every 3.47 units; decay 1000e^(−0.25t) (blue) halves every 2.77 units.")}
  ${keyIdea(S`If \(P(t)=P_0e^{kt}\) then \(P'(t)=kP(t)\). Doubling time \(=\frac{\ln2}{k}\); half-life \(=\frac{\ln2}{|k|}\). Read the units: \(P'\) is in units of \(P\) per unit of time.`)}`),

  section("📌 Explore", S`<p>Set the initial amount and the constant \(k\). Move through time and compare \(P\) with the slope \(P'\): their ratio is always \(k\). Make \(k\) negative to see decay and its half-life.</p>`),

  widget("growthModelLab", { init: { P0: 500, k: 0.2, t: 3 } }),

  section("📌 Building the model", S`
  <p>Identify \(P_0\) (the value at \(t=0\)) and \(k\) — often from a doubling time or half-life. Then differentiate and evaluate at the time asked.</p>
  ${watchOut([
    "k is negative for decay.",
    "Doubling time and half-life do not depend on the starting amount.",
    "Use the same time units throughout (years, hours…).",
    "A rate is per unit time — include the units.",
    "Logistic growth is fastest at half the limiting value, not at the start.",
  ])}`),

  examples([
    ["Bacteria", S`A culture has \(P(t)=800e^{0.35t}\) bacteria after \(t\) hours. How fast is it growing at \(t=4\)?`,
      [S`\(P'(t)=0.35\cdot800e^{0.35t}\).`, S`\(P'(4)=280e^{1.4}\approx1135.5\).`],
      S`about 1135 bacteria per hour`],
    ["Carbon-14", S`Carbon-14 has a half-life of 5730 years. How fast is a 50 g sample decaying?`,
      [S`\(k=-\frac{\ln2}{5730}\approx-1.210\times10^{-4}\) per year.`, S`\(P'=kP=-1.210\times10^{-4}\times50\).`],
      S`about 0.00605 g per year`],
    ["Continuous interest", S`5000 dollars grows as \(A(t)=5000e^{0.04t}\). How fast is it growing after 10 years?`,
      [S`\(A'(t)=0.04\cdot5000e^{0.04t}\); \(A'(10)=200e^{0.4}\).`],
      S`about 298.36 dollars per year`,
      plane({ view: { xmin: 0, xmax: 25, ymin: 4, ymax: 14 }, curves: [{ f: (t) => 5 * Math.exp(0.04 * t), a: 0, b: 25, color: "violet" }, { f: (t) => 5 * Math.exp(0.4) + 0.29836 * (t - 10), color: "green", a: 4, b: 16 }], points: [{ x: 10, y: 5 * Math.exp(0.4), label: "(10, 7.46)", color: "red" }], step: { x: 5, y: 1 }, xlabel: "t (years)", ylabel: "A (thousand dollars)" })],
    ["Cooling coffee", S`Coffee cools as \(T(t)=20+70e^{-0.08t}\) °C after \(t\) minutes. Find \(T'(5)\).`,
      [S`\(T'(t)=-0.08\cdot70e^{-0.08t}\); \(T'(5)=-5.6e^{-0.4}\).`],
      S`about −3.75 °C per minute`,
      plane({ view: { xmin: 0, xmax: 40, ymin: 0, ymax: 95 }, curves: [{ f: (t) => 20 + 70 * Math.exp(-0.08 * t), a: 0, b: 40, color: "violet" }, { f: () => 20, color: "gray" }], points: [{ x: 5, y: 20 + 70 * Math.exp(-0.4), label: "(5, 66.9)", color: "red" }], step: { x: 5, y: 10 } })],
    ["Drug concentration", S`A drug's concentration is \(C(t)=10te^{-0.5t}\) mg/L after \(t\) hours. When is it highest?`,
      [S`\(C'(t)=10e^{-0.5t}-5te^{-0.5t}=5e^{-0.5t}(2-t)\).`, S`Zero at \(t=2\): \(C(2)=20e^{-1}\approx7.36\).`],
      S`after 2 hours, about 7.36 mg/L`,
      plane({ view: { xmin: 0, xmax: 14, ymin: 0, ymax: 8.5 }, curves: [{ f: (t) => 10 * t * Math.exp(-0.5 * t), a: 0, b: 14, color: "violet" }], points: [{ x: 2, y: 20 / E, label: "max (2, 7.36)", color: "red" }], step: { x: 1, y: 1 } })],
  ]),

  practice([
    q("rate", S`For \(P(t)=1000e^{0.1t}\), find \(P'(0)\).`, num(100),
      "0.1 · 1000.", [S`\(100\).`], S`\(100\)`),
    q("doubling", S`Find the doubling time when \(k=0.05\) (2 decimals).`, num(13.86, 0.01),
      "ln 2 / k.", [S`\(\frac{0.6931}{0.05}\).`], S`\(13.86\)`),
    q("half-life", S`Find the half-life when \(k=-0.2\) (3 decimals).`, num(3.466, 0.002),
      "ln 2 / 0.2.", [S`\(3.466\).`], S`\(3.466\)`),
    q("interest", S`For \(A(t)=2000e^{0.03t}\), find \(A'(0)\) in dollars per year.`, num(60),
      "0.03 · 2000.", [S`\(60\).`], S`\(60\)`),
    q("meaning", S`\(P'=kP\) means:`, choice(["the rate of change is proportional to the amount", "the amount is constant", "the rate of change is constant", "the amount is proportional to time"], 0),
      "Rate = k × amount.", ["More stuff, faster change."], "rate proportional to amount"),
  ]),

  ...hard([
    ["Logistic growth", S`A population grows as \(P(t)=\dfrac{1000}{1+9e^{-0.5t}}\). When is it growing fastest, and how fast?`,
      [S`The logistic curve is steepest at half the limit, \(P=500\): \(9e^{-0.5t}=1\Rightarrow t=\frac{\ln9}{0.5}\approx4.394\).`, S`There \(P'=0.5P\left(1-\frac{P}{1000}\right)=0.5\cdot500\cdot0.5=125\).`],
      S`at \(t\approx4.39\), growing at 125 per unit time`,
      plane({ view: { xmin: 0, xmax: 16, ymin: 0, ymax: 1100 }, curves: [{ f: (t) => 1000 / (1 + 9 * Math.exp(-0.5 * t)), a: 0, b: 16, color: "violet" }, { f: (t) => 500 + 125 * (t - Math.log(9) / 0.5), color: "green", a: 2, b: 6.8 }, { f: () => 1000, color: "gray" }], points: [{ x: Math.log(9) / 0.5, y: 500, label: "steepest (4.39, 500)", color: "red" }], step: { x: 2, y: 100 } })],
    ["After the ads stop", S`After an advertising campaign ends, daily sales are \(S(t)=5000e^{-0.1t}\). When does the rate of decline drop below 100 sales per day?`,
      [S`\(S'(t)=-500e^{-0.1t}\); need \(500e^{-0.1t}\lt100\).`, S`\(e^{-0.1t}\lt0.2\Rightarrow t\gt10\ln5\approx16.09\).`],
      S`after about 16.1 days`,
      plane({ view: { xmin: 0, xmax: 40, ymin: 0, ymax: 5500 }, curves: [{ f: (t) => 5000 * Math.exp(-0.1 * t), a: 0, b: 40, color: "violet" }], points: [{ x: 16.09, y: 1000, label: "(16.1, 1000)", color: "red" }], step: { x: 5, y: 500 } })],
  ], [
    q("hard", S`A substance has a half-life of 8 days. How fast is a 40 g sample decaying (g/day, 4 decimals)?`, num(-3.4657, 0.0005),
      "k = −ln 2 / 8; rate kP.", [S`\(-\frac{40\ln2}{8}\).`], S`\(-3.4657\)`),
    q("hard", S`What continuous interest rate doubles money in 10 years (4 decimals)?`, num(0.0693, 0.0005),
      "e^(10r) = 2.", [S`\(r=\frac{\ln2}{10}\).`], S`\(0.0693\)`),
    q("hard", S`Find the greatest value of \(C(t)=5te^{-t}\) (4 decimals).`, num(1.8394, 0.0005),
      "C′ = 5e^(−t)(1 − t).", [S`\(C(1)=\frac5e\).`], S`\(1.8394\)`),
  ]),

  wrapUp({
    qas: [
      ["Why is P′ = kP for P = P₀e^(kt)?", "The chain rule brings down k: (P₀e^(kt))′ = kP₀e^(kt) = kP."],
      ["Why does the doubling time not depend on P₀?", "Doubling means e^(kt) = 2, which involves only k and t."],
      ["How do I find k from a half-life?", "k = −ln 2 / (half-life)."],
      ["What does Newton's law of cooling say?", "The temperature difference from the surroundings decays exponentially, so the rate is proportional to that difference."],
      ["Why use a logistic model?", "Real populations run out of room or food; the logistic curve grows exponentially at first, then levels off at a limit."],
    ],
    summary: [
      "P = P₀e^(kt) ⇒ P′ = kP.",
      "Doubling time ln 2/k; half-life ln 2/|k|.",
      "Interest, cooling, decay share one derivative.",
      "Logistic: fastest at half the limit.",
    ],
    next: "5.6 reviews the chapter.",
  }),
];
