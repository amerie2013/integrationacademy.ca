// MCR3U 4.6 — Exponential Models: Growth and Decay: percent growth and decay, half-life and doubling time,
// compound interest, cooling (restricted domain and range), solving for time by graph or guess-and-check
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, plane } from "./lib.mjs";
import { tv } from "../mcr3u-extables.mjs";

export const TITLE = "4.6 Exponential Models: Growth and Decay";
export const ID = "76f53f56-a2e6-49a3-b84e-ad2a23b8c61e";
const S = String.raw;

export const blocks = () => [
  intro({
    icon: "🦠",
    title: "Exponential Models: Growth and Decay",
    overview: S`Populations, investments, medicine in the bloodstream, radioactive material and cooling drinks all change by a constant <em>factor</em> in equal time intervals. In this lesson you will build exponential models from a percent rate, a half-life or a doubling time, use them to predict, find when a quantity reaches a target (by graph or guess-and-check), and state the restrictions that the context puts on the domain and range.`,
    goals: [
      "write models A = A₀(1 ± r)ᵗ from a percent rate;",
      "write half-life and doubling-time models A = A₀(½)^(t/h) and A = A₀(2)^(t/d);",
      "use the compound interest formula A = P(1 + i)ⁿ;",
      "model cooling with an asymptote at room temperature and state the domain and range;",
      "estimate when a model reaches a target value.",
    ],
    curriculum: "B3.1 (collect and graph data that can be modelled exponentially), B3.2 (identify exponential models of growth and decay; explain restrictions on domain and range, e.g. ambient temperature), B3.3 (solve problems using graphs or equations of exponential functions)",
    prior: [
      [S`What is 6% as a decimal?`, S`\(0.06\).`],
      [S`Evaluate \(\left(\tfrac12\right)^3\).`, S`\(\tfrac18\).`],
      [S`What is the asymptote of \(y=50(0.5)^x+20\)?`, S`\(y=20\).`],
    ],
    words: [
      ["Growth factor", "\\(1+r\\) for an increase of r", "6% → 1.06"],
      ["Decay factor", "\\(1-r\\) for a decrease of r", "15% → 0.85"],
      ["Half-life", "time for an amount to halve", ""],
      ["Doubling time", "time for an amount to double", ""],
    ],
  }),

  section("📌 Four kinds of model", S`
  ${table(["Situation", "Model", "Example"], [
    ["grows r% per period", "\\(A=A_0(1+r)^t\\)", "\\(12\\,000(1.03)^t\\)"],
    ["shrinks r% per period", "\\(A=A_0(1-r)^t\\)", "\\(28\\,000(0.85)^t\\)"],
    ["halves every h", "\\(A=A_0\\left(\\tfrac12\\right)^{t/h}\\)", "\\(200\\left(\\tfrac12\\right)^{t/6}\\)"],
    ["doubles every d", "\\(A=A_0(2)^{t/d}\\)", "\\(50(2)^{t/20}\\)"],
    ["compound interest", "\\(A=P(1+i)^n\\)", "\\(5000(1.06)^2\\)"],
    ["cooling to room temperature \\(T_a\\)", "\\(T=(T_0-T_a)\\left(\\tfrac12\\right)^{t/h}+T_a\\)", "\\(70\\left(\\tfrac12\\right)^{t/8}+20\\)"],
  ])}
  ${keyIdea(S`Decide the factor per period, then the number of periods: \(t/h\) half-lives, \(t/d\) doublings, \(n\) interest periods. Without logarithms, find the time for a target by graphing or by guess-and-check.`)}`),

  section("📌 Explore", S`<p>Switch between growth, half-life and cooling. Move the target line and read the time when the model reaches it. In cooling mode, notice that the drink can never get colder than the room.</p>`),

  widget("expModel", { start: "growth" }),

  section("📌 Watch out", watchOut([
    "A 15% decrease uses the factor 0.85, not 0.15.",
    "In half-life models the exponent is t divided by the half-life.",
    "Cooling approaches the room temperature, so the range has a lower bound above 0.",
    "Rounding the factor (e.g. 1.0473) early can change later answers — keep extra digits.",
  ])),

  examples([
    ["Population growth", S`A town of 12 000 grows 3% per year. Write a model and predict the population in 10 years.`,
      [S`<b>Find the growth factor.</b> Growing 3% means each year's population is 100% + 3% = 103% of the year before, so each year multiplies by \(b=1.03\).`,
        S`<b>Write the model.</b> Start value \(a=12\,000\), with \(t\) in years: \(P(t)=12\,000(1.03)^t\).`,
        S`<b>Substitute</b> \(t=10\). \(P(10)=12\,000(1.03)^{10}\). A calculator gives \((1.03)^{10}\approx1.3439\).`,
        S`<b>Multiply.</b> \(12\,000\times1.3439\approx16\,127\). We round to a whole number of people.`,
        S`<b>Sense check.</b> Adding a fixed 3% of 12 000 (360 people) for 10 years would give only 15 600. Compound growth must beat that, because the 3% applies to a growing number ✓. The graph bends upward as expected.`],
      "about 16 127 people",
      plane({ view: { xmin: 0, xmax: 20, ymin: 0, ymax: 24000 }, curves: [{ f: (t) => 12000 * 1.03 ** t, a: 0, color: "violet" }], points: [{ x: 0, y: 12000, label: "(0, 12 000)" }, { x: 10, y: 16127, label: "(10, 16 127)", color: "amber" }], step: { x: 2, y: 4000 }, xlabel: "t (years)", ylabel: "P" })],
    ["Depreciation", S`A 28 000-dollar car loses 15% of its value each year. What is it worth after 4 years?`,
      [S`<b>Find the decay factor.</b> Losing 15% leaves 85% of the value, so each year multiplies by \(b=0.85\), not by \(0.15\).`,
        S`<b>Write the model.</b> \(V(t)=28\,000(0.85)^t\), with \(t\) in years.`,
        S`<b>Build a year-by-year table.</b> Each entry is 0.85 times the one before. ${tv(["\\(t\\)", "0", "1", "2", "3", "4"], ["\\(V\\) (dollars)", "28 000", "23 800", "20 230", "17 195.50", "14 616.18"])}`,
        S`<b>Check with the formula.</b> \((0.85)^4\approx0.5220\), and \(28\,000\times0.5220\approx14\,616\) ✓`,
        S`<b>Sense check.</b> The yearly drop gets smaller: 4200, then 3570, then 3034.50. The car loses 15% of a shrinking value, so the curve flattens and never reaches 0 ✓`],
      "about 14 616 dollars",
      plane({ view: { xmin: 0, xmax: 10, ymin: 0, ymax: 30000 }, curves: [{ f: (t) => 28000 * 0.85 ** t, a: 0, color: "violet" }], points: [{ x: 0, y: 28000, label: "(0, 28 000)" }, { x: 2, y: 20230 }, { x: 4, y: 14616, label: "(4, 14 616)", color: "amber" }], step: { x: 1, y: 5000 }, xlabel: "t (years)", ylabel: "V" })],
    ["Half-life", S`A 200 mg dose has a half-life of 6 h. How much remains after 18 h?`,
      [S`<b>Meaning.</b> A half-life of 6 h means the amount is multiplied by \(\frac12\) once every 6 h.`,
        S`<b>Write the model.</b> The exponent counts half-lives, and \(\frac t6\) is the number of half-lives in \(t\) hours: \(A(t)=200\left(\tfrac12\right)^{t/6}\).`,
        S`<b>Substitute</b> \(t=18\). \(\frac{18}6=3\) half-lives, so \(A=200\left(\tfrac12\right)^3=200\times\frac18=25\).`,
        S`<b>Check with a table.</b> Halve three times. ${tv(["\\(t\\) (h)", "0", "6", "12", "18"], ["\\(A\\) (mg)", "200", "100", "50", "25"])} ✓`],
      "25 mg remain after 18 h",
      plane({ view: { xmin: 0, xmax: 30, ymin: 0, ymax: 220 }, curves: [{ f: (t) => 200 * 0.5 ** (t / 6), a: 0, color: "violet" }], points: [{ x: 0, y: 200, label: "(0, 200)" }, { x: 6, y: 100, label: "(6, 100)" }, { x: 12, y: 50, label: "(12, 50)" }, { x: 18, y: 25, label: "(18, 25)", color: "amber" }], step: { x: 3, y: 20 }, xlabel: "t (h)", ylabel: "A (mg)" })],
    ["Doubling time", S`50 bacteria double every 20 minutes. How many are there after 2 hours?`,
      [S`<b>Match the units.</b> The doubling time is in minutes, so convert: 2 hours \(=120\) minutes.`,
        S`<b>Write the model.</b> \(\frac t{20}\) counts the doublings: \(N(t)=50(2)^{t/20}\), with \(t\) in minutes.`,
        S`<b>Count the doublings.</b> \(\frac{120}{20}=6\), so \(N=50(2)^6=50\times64\).`,
        S`<b>Multiply.</b> \(50\times64=3200\).`,
        S`<b>Check with a table.</b> ${tv(["\\(t\\) (min)", "0", "20", "40", "60", "80", "100", "120"], ["\\(N\\)", "50", "100", "200", "400", "800", "1600", "3200"])} ✓`],
      "3200 bacteria",
      plane({ view: { xmin: 0, xmax: 130, ymin: 0, ymax: 3600 }, curves: [{ f: (t) => 50 * 2 ** (t / 20), a: 0, color: "violet" }], points: [{ x: 60, y: 400, label: "(60, 400)" }, { x: 100, y: 1600, label: "(100, 1600)" }, { x: 120, y: 3200, label: "(120, 3200)", color: "amber" }], step: { x: 20, y: 400 }, xlabel: "t (min)", ylabel: "N" })],
    ["Cooling", S`Tea at 90 °C cools in a 20 °C room: \(T=70\left(\tfrac12\right)^{t/8}+20\). Find \(T(16)\), the range, and estimate when it reaches 30 °C.`,
      [S`<b>Read the model.</b> The \(+20\) is the room temperature, which is the asymptote. The 70 is the starting difference, since \(90-20=70\). That difference halves every 8 minutes.`,
        S`<b>Find \(T(16)\).</b> \(\frac{16}8=2\) halvings: \(T(16)=70\left(\tfrac12\right)^2+20=70\times\frac14+20=17.5+20=37.5\) °C.`,
        S`<b>Range.</b> The tea starts at 90 °C, so \(T(0)=90\). The power term is always positive, so \(T\) stays above 20. The range is \(20<T\le90\).`,
        S`<b>Set up the target.</b> \(T=30\) means \(70\left(\tfrac12\right)^{t/8}=10\), so \(\left(\tfrac12\right)^{t/8}=\frac17\). We have no way yet to isolate \(t\), so we use trial values.`,
        S`<b>Trial table.</b> ${tv(["\\(t\\) (min)", "16", "20", "22", "23", "24"], ["\\(T\\) (°C)", "37.5", "32.4", "30.4", "29.5", "28.75"])} The value 30 °C falls between \(t=22\) and \(t=23\).`,
        S`<b>Check on the graph.</b> The curve crosses the dashed line \(T=30\) near \(t=22.5\) ✓`],
      "T(16) = 37.5 °C; range 20 < T ≤ 90; 30 °C is reached between 22 and 23 minutes",
      plane({ view: { xmin: 0, xmax: 40, ymin: 0, ymax: 100 }, curves: [{ f: (t) => 70 * 0.5 ** (t / 8) + 20, a: 0, color: "violet" }], lines: [{ m: 0, b: 20, color: "green", dash: true }, { m: 0, b: 30, color: "amber", dash: true }], points: [{ x: 16, y: 37.5, label: "(16, 37.5)" }, { x: 22.46, y: 30 }], step: { x: 4, y: 10 }, xlabel: "t (min)", ylabel: "T (°C)" })],
  ]),

  practice([
    q("factor", "What is the growth factor for an increase of 4.5% per year?", num(1.045, 1e-6),
      "1 + r.", [S`\(1+0.045\).`], S`\(1.045\)`),
    q("growth", S`Evaluate \(800(1.05)^3\) to one decimal.`, num(926.1, 0.06),
      "1.05³ ≈ 1.157625.", [S`\(800\times1.157625\).`], S`\(926.1\)`),
    q("half-life", "64 g of a substance has a half-life of 5 days. How much is left after 20 days?", num(4),
      "20/5 = 4 half-lives.", [S`\(64\cdot\left(\tfrac12\right)^4\).`], S`\(4\) g`),
    q("interest", "5000 dollars is invested at 6% compounded annually. What is it worth after 2 years (nearest dollar)?", num(5618, 0.6),
      "5000(1.06)².", [S`\(5000(1.1236)\).`], S`\(5618\) dollars`),
    q("model", "A forest loses 8% of its area each year. Which factor models this?", choice([S`\((0.92)^t\)`, S`\((0.08)^t\)`, S`\((1.08)^t\)`, S`\((-0.08)^t\)`], 0),
      "100% − 8%.", [S`\(1-0.08=0.92\).`], S`\((0.92)^t\)`),
  ]),

  ...hard([
    ["Doubling and the yearly rate", S`A city of 40 000 doubles every 15 years. (a) When will it reach 160 000? (b) What is the equivalent annual growth rate?`,
      [S`(a) 160 000 is two doublings: 30 years.`, S`(b) \(P=40\,000(2)^{t/15}=40\,000\left(2^{1/15}\right)^t\); \(2^{1/15}\approx1.0473\).`],
      "30 years; about 4.73% per year"],
    ["Restrictions in a cooling model", S`Coffee cools as \(T=65(0.9)^t+20\) (°C, t in minutes). State a sensible domain and range, and find to the nearest minute when it reaches 50 °C.`,
      [S`Domain \(t\ge0\); range \(20<T\le85\).`, S`\(0.9^t=\tfrac{30}{65}\approx0.4615\): \(0.9^7\approx0.478\) (\(T\approx51.1\)), \(0.9^8\approx0.430\) (\(T\approx48.0\)).`],
      "between 7 and 8 minutes (about 7.3 min)",
      plane({ view: { xmin: 0, xmax: 30, ymin: 0, ymax: 90 }, curves: [{ f: (t) => 65 * 0.9 ** t + 20, a: 0, color: "violet" }], lines: [{ m: 0, b: 50, color: "amber", dash: true }, { m: 0, b: 20, color: "green", dash: true }], step: { x: 2, y: 10 }, xlabel: "t (min)", ylabel: "T (°C)" })],
  ], [
    q("hard", "3000 dollars is invested at 4.5% compounded annually. After how many full years does it first exceed 4000 dollars?", num(7),
      "Find n with 1.045ⁿ > 1.333.", [S`\(1.045^6\approx1.302\); \(1.045^7\approx1.361\).`], S`\(7\) years`),
    q("hard", "A 400 mg dose loses 20% each hour. How much remains after 5 hours (mg, 2 decimals)?", num(131.07, 0.006),
      "400(0.8)⁵.", [S`\(0.8^5=0.32768\).`], S`\(131.07\) mg`),
    q("hard", "A ball dropped from 10 m rebounds to 70% of its previous height. How high does it rise after the 4th bounce (m, 3 decimals)?", num(2.401, 0.0006),
      "10(0.7)⁴.", [S`\(0.7^4=0.2401\).`], S`\(2.401\) m`),
  ]),

  wrapUp({
    qas: [
      ["How do I tell linear from exponential growth in words?", "“Adds the same amount” is linear; “grows by the same percent” or “doubles” is exponential."],
      ["Why is the exponent t/h in a half-life model?", "t/h counts how many half-lives have passed."],
      ["Can a decaying amount reach zero?", "Not in the model: the graph approaches the asymptote. In reality we stop when it is negligible."],
      ["How do I find the time without logarithms?", "Graph the model and the target line, or try whole numbers until the value passes the target."],
      ["Why does cooling level off?", "A drink cannot get colder than the room, so room temperature is the asymptote."],
    ],
    summary: [
      "Growth (1 + r)ᵗ, decay (1 − r)ᵗ.",
      "Half-life (½)^(t/h); doubling 2^(t/d).",
      "Compound interest A = P(1 + i)ⁿ.",
      "Contexts restrict domain (t ≥ 0) and range (above an asymptote).",
    ],
    next: "4.7 reviews the chapter.",
  }),
];
