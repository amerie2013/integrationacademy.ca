// MCF3M 7.5 — Exponential Growth: A = A₀(1 + r)ᵗ, doubling and tripling models A = A₀·2^(t/d), reading the rate
// and initial value, finding the time to reach a target by tables/graphs, linear vs exponential growth.
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard } from "../lib.mjs";
import { EG, P, r2 } from "./efig.mjs";
const S = String.raw;

export const TITLE = "7.5 Exponential Growth";
const pop = (t) => 25000 * 1.03 ** t;

export const blocks = () => [
  intro({
    icon: "🌱",
    title: "Exponential Growth",
    overview: S`When a quantity grows by the same <b>percent</b> each period — a town growing \(3\%\) a year, bacteria doubling every \(20\) minutes — it is multiplied by the same factor each time. Starting from \(A_0\) and growing at rate \(r\) per period, after \(t\) periods \(A=A_0(1+r)^t\). The growth factor \(1+r\) is the base \(b\) from 7.4. This lesson builds such models, reads them, and uses them to predict.`,
    goals: [
      "write a growth model A = A₀(1 + r)ᵗ from a percent rate;",
      "write a doubling model A = A₀·2^(t/d) from a doubling time;",
      "identify the initial value and growth rate from an equation or a table;",
      "predict values and find when a target is reached using tables or graphs;",
      "compare linear and exponential growth.",
    ],
    curriculum: "B2.2 (identify exponential functions arising from real-world growth situations), B2.3 (solve problems using given equations of exponential functions by substituting values for the exponent and interpreting graphs)",
    prior: [
      [S`Increase \(400\) by \(5\%\) in one step.`, S`\(400\times1.05=420\).`],
      [S`Evaluate \(2^6\).`, S`\(64\).`],
      [S`What is the ratio in \(10,\ 12,\ 14.4\)?`, S`\(1.2\).`],
    ],
    words: [
      ["Initial value A₀", "the amount at t = 0", "25 000 people"],
      ["Growth rate r", "the percent increase per period, as a decimal", "3% → 0.03"],
      ["Growth factor", "1 + r: what you multiply by each period", "1.03"],
      ["Doubling time", "the time for the amount to double", "20 min"],
      ["Exponential growth", "repeated multiplication by a factor > 1", "A = A₀(1 + r)ᵗ"],
    ],
  }),

  section("📌 Percent growth is repeated multiplication", S`
  ${table(["Year t", "0", "1", "2", "3", "t"], [["Population", "25 000", "25 000(1.03)", "25 000(1.03)²", "25 000(1.03)³", "25 000(1.03)ᵗ"]])}
  ${EG([pop], { view: { xmin: 0, xmax: 30, ymin: 0, ymax: 65000 }, step: { x: 5, y: 10000 }, points: [P(0, 25000, "(0, 25 000)"), P(10, r2(pop(10)), "(10, 33 598)")], xlabel: "t (years)", ylabel: "P", cap: "P = 25 000(1.03)ᵗ" })}
  ${table(["Situation", "Model"], [["grows r% per period", "\\(A=A_0(1+r)^t\\)"], ["doubles every d time units", "\\(A=A_0\\cdot2^{t/d}\\)"], ["triples every d time units", "\\(A=A_0\\cdot3^{t/d}\\)"]])}
  ${keyIdea(S`Turn the percent into a factor: grows \(3\%\) → multiply by \(1.03\); grows \(12.5\%\) → multiply by \(1.125\). The exponent counts how many periods have passed.`)}`),

  widget("expModel", { start: "growth" }),

  section("⚠️ Common errors", S`
  ${watchOut([
    "3% growth is a factor of 1.03, not 0.03 or 3.",
    "Use the number of PERIODS as the exponent: 2 hours of 20-minute doublings is 6 doublings.",
    "Do not add the same amount each year — that is linear growth.",
    "Round only at the end; keep full calculator values.",
    "Populations are whole numbers: round sensibly in the final answer.",
  ])}`),

  examples([
    ["A growing town", S`A town of \(25\,000\) people grows \(3\%\) per year. Write a model and find the population after \(10\) years.`,
      [S`<b>Values.</b> \(A_0=25\,000\), \(r=0.03\), factor \(1.03\).`,
        S`<b>Model.</b> \(P=25\,000(1.03)^t\).`,
        S`<b>Substitute.</b> \(P(10)=25\,000(1.03)^{10}\approx25\,000(1.343916)\approx33\,597.91\).`,
        S`<b>Answer.</b> About \(33\,598\) people. Check: more than \(25\,000+10(750)=32\,500\), as growth compounds ✓`],
      S`P = 25 000(1.03)ᵗ; about 33 598 people`,
      EG([pop], { view: { xmin: 0, xmax: 15, ymin: 0, ymax: 45000 }, step: { x: 1, y: 5000 }, points: [P(10, r2(pop(10)), "(10, 33 598)")], xlabel: "t", ylabel: "P" })],

    ["Doubling bacteria", S`A culture of \(400\) bacteria doubles every \(20\) minutes. How many are there after \(2\) hours?`,
      [S`<b>Model.</b> \(N=400\cdot2^{t/20}\), \(t\) in minutes.`,
        S`<b>Number of doublings.</b> \(\frac{120}{20}=6\).`,
        S`<b>Evaluate.</b> \(400\times2^6=400\times64=25\,600\).`,
        S`<b>Check by steps.</b> \(400\to800\to1600\to3200\to6400\to12\,800\to25\,600\) ✓`],
      S`25 600 bacteria`,
      EG([(t) => 400 * 2 ** (t / 20)], { view: { xmin: 0, xmax: 130, ymin: 0, ymax: 28000 }, step: { x: 20, y: 4000 }, points: [P(60, 3200, "(60, 3200)"), P(120, 25600, "(120, 25 600)")], xlabel: "t (min)", ylabel: "N" })],

    ["Reading a model", S`(a) State the initial value and growth rate of \(y=1200(1.065)^t\). (b) A table has values \(500,\ 540,\ 583.2\) for \(t=0,1,2\). Find its growth rate and model.`,
      [S`<b>(a)</b> Initial value \(1200\); factor \(1.065\Rightarrow r=0.065=6.5\%\).`,
        S`<b>(b) Ratios.</b> \(\frac{540}{500}=1.08\), \(\frac{583.2}{540}=1.08\).`,
        S`<b>Rate.</b> \(1.08-1=0.08=8\%\).`,
        S`<b>Model.</b> \(y=500(1.08)^t\).`],
      S`(a) 1200, 6.5%; (b) 8%, y = 500(1.08)ᵗ`,
      EG([{ f: (t) => 500 * 1.08 ** t, color: "violet" }], { view: { xmin: 0, xmax: 6, ymin: 0, ymax: 900 }, step: { x: 1, y: 100 }, points: [P(0, 500, "(0, 500)"), P(1, 540, "(1, 540)"), P(2, 583.2, "(2, 583.2)")], xlabel: "t", ylabel: "y" })],

    ["When is the target reached?", S`For \(P=25\,000(1.03)^t\), in which year does the population first exceed \(40\,000\)?`,
      [S`<b>Try values.</b> \(t=15\): \(25\,000(1.03)^{15}\approx38\,949\).`,
        S`<b>Next year.</b> \(t=16\): \(\approx40\,118\).`,
        S`<b>Conclusion.</b> The population first exceeds \(40\,000\) during year \(16\).`,
        S`<b>Graph check.</b> The curve crosses \(P=40\,000\) between \(t=15\) and \(t=16\) ✓`],
      S`during year 16`,
      EG([pop], { view: { xmin: 0, xmax: 20, ymin: 20000, ymax: 50000 }, step: { x: 2, y: 5000 }, lines: [{ m: 0, b: 40000, color: "green", dash: true, label: "40 000" }], points: [P(15, r2(pop(15)), "(15, 38 949)"), P(16, r2(pop(16)), "(16, 40 118)", "red")], xlabel: "t", ylabel: "P" })],

    ["Linear vs exponential", S`Town A has \(30\,000\) people and gains \(1200\) per year. Town B has \(30\,000\) and grows \(3.5\%\) per year. Compare them after \(20\) years.`,
      [S`<b>Town A (linear).</b> \(30\,000+1200(20)=54\,000\).`,
        S`<b>Town B (exponential).</b> \(30\,000(1.035)^{20}\approx59\,694\).`,
        S`<b>Early years.</b> In year 1, B gains only \(1050\) — fewer than A — but B's yearly gain keeps growing.`,
        S`<b>Conclusion.</b> B overtakes A in year \(9\) and stays ahead.`],
      S`A: 54 000; B: about 59 694`,
      EG([{ f: (t) => 30000 + 1200 * t, color: "green" }, { f: (t) => 30000 * 1.035 ** t, color: "violet" }], { view: { xmin: 0, xmax: 25, ymin: 25000, ymax: 75000 }, step: { x: 5, y: 10000 }, points: [P(20, 54000, "A (20, 54 000)", "green"), P(20, r2(30000 * 1.035 ** 20), "B (20, 59 694)")], xlabel: "t", ylabel: "P", cap: "green: linear · violet: exponential" })],
  ]),

  practice([
    q("rate", S`What percent growth rate does \(y=800(1.05)^t\) represent?`, num(5), "1.05 − 1.", [S`\(5\%\).`], S`\(5\)`),
    q("init", S`State the initial value of \(y=1500(1.12)^t\).`, num(1500), "t = 0.", [S`\(1500\).`], S`\(1500\)`),
    q("double", S`\(50\) bacteria double every hour. How many after \(5\) hours?`, num(1600), "50 × 2⁵.", [S`\(1600\).`], S`\(1600\)`),
    q("two", S`\(2000\) grows \(10\%\) per year. Find the amount after \(2\) years.`, num(2420), "2000 × 1.1².", [S`\(2420\).`], S`\(2420\)`),
    q("which", S`Which models \(4\%\) growth from \(300\)?`, choice(["y = 300(1.04)ᵗ", "y = 300(0.04)ᵗ", "y = 300 + 4t", "y = 1.04(300)ᵗ"], 0), "Factor 1.04.", [S`\(y=300(1.04)^t\).`], S`y = 300(1.04)ᵗ`),
  ]),

  ...hard([
    ["Doubling time", S`A population doubles every \(12\) years. It is \(18\,000\) now. Find the population in \(30\) years.`,
      [S`<b>Model.</b> \(P=18\,000\cdot2^{t/12}\).`,
        S`<b>Doublings.</b> \(\frac{30}{12}=2.5\).`,
        S`<b>Evaluate.</b> \(18\,000\times2^{2.5}\approx18\,000\times5.656854\approx101\,823\).`,
        S`<b>Sense check.</b> Between \(2^2\) and \(2^3\) times: between \(72\,000\) and \(144\,000\) ✓`],
      S`about 101 823`,
      EG([(t) => 18000 * 2 ** (t / 12)], { view: { xmin: 0, xmax: 36, ymin: 0, ymax: 150000 }, step: { x: 6, y: 20000 }, points: [P(12, 36000, "(12, 36 000)"), P(24, 72000, "(24, 72 000)"), P(30, 101823, "(30, 101 823)", "red")], xlabel: "t", ylabel: "P" })],
    ["Finding the rate", S`A colony grows from \(6400\) to \(8100\) in \(2\) years at a constant percent rate. Find the rate.`,
      [S`<b>Equation.</b> \(6400(1+r)^2=8100\Rightarrow(1+r)^2=1.265625\).`,
        S`<b>Square root.</b> \(1+r=1.125\).`,
        S`<b>Rate.</b> \(r=0.125=12.5\%\) per year.`,
        S`<b>Check.</b> \(6400\times1.125=7200\), \(7200\times1.125=8100\) ✓`],
      S`12.5% per year`],
  ], [
    q("hard", S`Find \(5000(1.04)^8\) (two decimals).`, num(6842.85, 0.011), "Calculator.", [S`\(\approx6842.85\).`], S`\(6842.85\)`),
    q("hard", S`\(20\) cells triple every \(5\) h. How many after \(15\) h?`, num(540), "20 × 3³.", [S`\(540\).`], S`\(540\)`),
    q("hard", S`For which whole \(t\) does \(100(1.2)^t\) first exceed \(500\)?`, num(9), "t = 8: 429.98; t = 9: 515.98.", [S`\(t=9\).`], S`\(9\)`),
    q("hard", S`What is the percent growth rate of \(y=3200(1.0275)^t\)?`, num(2.75, 0.001), "1.0275 − 1.", [S`\(2.75\%\).`], S`\(2.75\)`),
    q("hard", S`An amount grows from \(400\) to \(484\) in \(2\) years at a constant rate. Find the percent rate.`, num(10), "(1 + r)² = 1.21.", [S`\(r=10\%\).`], S`\(10\)`),
  ]),

  wrapUp({
    qas: [
      ["What is the growth model?", "A = A₀(1 + r)ᵗ: start A₀, factor 1 + r per period, t periods."],
      ["How do I write a doubling model?", "A = A₀·2^(t/d), where d is the doubling time."],
      ["How do I read the rate from y = 1200(1.065)ᵗ?", "Subtract 1 from the factor: 0.065 = 6.5%."],
      ["How do I find when a target is reached?", "Try whole values of t (or read the graph) until the model passes the target."],
      ["Why does exponential growth beat linear?", "The yearly gain itself grows, because it is a percent of a growing amount."],
    ],
    summary: [
      "A = A₀(1 + r)ᵗ.",
      "Doubling: A₀·2^(t/d).",
      "Factor − 1 = rate.",
      "Exponential eventually beats linear.",
    ],
    next: "7.6 models decay: half-lives and depreciation.",
  }),
];
