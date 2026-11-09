// MCF3M 7.6 — Exponential Decay: A = A₀(1 − r)ᵗ, half-life models A = A₀(½)^(t/h), depreciation, leaking
// pressure, cooling toward room temperature; reading rates; finding when a level is reached.
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard } from "../lib.mjs";
import { EG, P, r2 } from "./efig.mjs";
const S = String.raw;

export const TITLE = "7.6 Exponential Decay";
const car = (t) => 32000 * 0.85 ** t;
const drug = (t) => 80 * 0.5 ** (t / 6);
const tire = (t) => 240 * 0.96 ** t;
const tea = (t) => 20 + 70 * 0.5 ** (t / 8);

export const blocks = () => [
  intro({
    icon: "📉",
    title: "Exponential Decay",
    overview: S`Some quantities shrink by the same <b>percent</b> each period: a car loses value, a medicine leaves the body, air leaks from a tire. Losing \(r\) per period means keeping \(1-r\), so after \(t\) periods \(A=A_0(1-r)^t\). When a quantity halves every \(h\) time units, \(A=A_0\left(\tfrac12\right)^{t/h}\) — the <b>half-life</b> model. The graphs fall quickly at first, then level off toward an asymptote.`,
    goals: [
      "write a decay model A = A₀(1 − r)ᵗ from a percent loss;",
      "write and use a half-life model A = A₀(½)^(t/h);",
      "identify the decay rate and initial value from an equation or table;",
      "find when a quantity falls below a level using tables or graphs;",
      "model cooling as a decaying difference from room temperature.",
    ],
    curriculum: "B2.2 (identify exponential functions arising from decay situations: radioactive decay, cooling rates, pressure in a leaking tire), B2.3 (solve problems using given exponential equations and graphs)",
    prior: [
      [S`Decrease \(500\) by \(20\%\) in one step.`, S`\(500\times0.8=400\).`],
      [S`Evaluate \(\left(\frac12\right)^4\).`, S`\(\frac1{16}\).`],
      [S`Is \(y=3(0.7)^x\) increasing or decreasing?`, S`Decreasing: \(0<0.7<1\).`],
    ],
    words: [
      ["Decay rate r", "the percent lost per period, as a decimal", "15% → 0.15"],
      ["Decay factor", "1 − r: the fraction kept each period", "0.85"],
      ["Half-life h", "time for the amount to halve", "6 h"],
      ["Depreciation", "loss of value over time", "a car"],
      ["Asymptote", "the level the graph approaches", "0, or room temperature"],
    ],
  }),

  section("📌 Losing a percent each period", S`
  ${table(["Year t", "0", "1", "2", "t"], [["Value ($)", "32 000", "32 000(0.85)", "32 000(0.85)²", "32 000(0.85)ᵗ"]])}
  ${EG([car], { view: { xmin: 0, xmax: 15, ymin: 0, ymax: 35000 }, step: { x: 1, y: 5000 }, points: [P(0, 32000, "(0, 32 000)"), P(5, r2(car(5)), "(5, 14 198)")], xlabel: "t (years)", ylabel: "V", cap: "V = 32 000(0.85)ᵗ" })}
  ${table(["Situation", "Model"], [["loses r% per period", "\\(A=A_0(1-r)^t\\)"], ["half-life h", "\\(A=A_0\\left(\\tfrac12\\right)^{t/h}\\)"], ["cooling to room temperature R", "\\(T=R+(T_0-R)\\left(\\tfrac12\\right)^{t/h}\\)"]])}
  ${keyIdea(S`Losing \(15\%\) means keeping \(85\%\): the decay factor is \(0.85\). The exponent counts periods (years, half-lives, hours). The graph approaches its asymptote but never reaches it.`)}`),

  widget("expModel", { start: "half" }),

  section("⚠️ Common errors", S`
  ${watchOut([
    "Losing 15% is a factor of 0.85, not 0.15 or 1.15.",
    "For half-life h, the exponent is t/h, not t.",
    "Decay never reaches 0 in the model; it only gets close.",
    "For cooling, the DIFFERENCE from room temperature decays, not the temperature itself.",
    "Read 'below' carefully: find the first whole period past the level.",
  ])}`),

  examples([
    ["Depreciation", S`A \(32\,000\) dollar car loses \(15\%\) of its value each year. Write a model and find its value after \(5\) years.`,
      [S`<b>Factor.</b> Keeps \(85\%\): \(1-0.15=0.85\).`,
        S`<b>Model.</b> \(V=32\,000(0.85)^t\).`,
        S`<b>Substitute.</b> \(V(5)=32\,000(0.85)^5\approx32\,000(0.443705)\approx14\,198.57\).`,
        S`<b>Check.</b> The yearly loss shrinks: \(4800\) in year 1, only about \(2505\) in year 5 ✓`],
      S`V = 32 000(0.85)ᵗ; about 14 198.57 dollars`,
      EG([car], { view: { xmin: 0, xmax: 10, ymin: 0, ymax: 35000 }, step: { x: 1, y: 5000 }, points: [P(5, r2(car(5)), "(5, 14 198.57)")], xlabel: "t", ylabel: "V" })],

    ["Half-life", S`A patient takes \(80\) mg of a drug with a half-life of \(6\) h. How much remains after \(24\) h? After \(15\) h?`,
      [S`<b>Model.</b> \(A=80\left(\frac12\right)^{t/6}\).`,
        S`<b>24 h.</b> \(\frac{24}6=4\) half-lives: \(80\times\frac1{16}=5\) mg.`,
        S`<b>15 h.</b> \(\frac{15}6=2.5\): \(80(0.5)^{2.5}\approx14.14\) mg.`,
        S`<b>Check.</b> \(14.14\) lies between \(A(12)=20\) and \(A(18)=10\) ✓`],
      S`5 mg; about 14.14 mg`,
      EG([drug], { view: { xmin: 0, xmax: 30, ymin: 0, ymax: 90 }, step: { x: 6, y: 10 }, points: [P(6, 40, "(6, 40)"), P(12, 20, "(12, 20)"), P(15, 14.14, "(15, 14.14)", "red"), P(24, 5, "(24, 5)")], xlabel: "t (h)", ylabel: "A (mg)" })],

    ["Reading decay rates", S`(a) Find the initial value and decay rate of \(y=650(0.92)^t\). (b) A table has \(900,\ 720,\ 576\) for \(t=0,1,2\). Find the decay rate and model.`,
      [S`<b>(a)</b> Initial \(650\); factor \(0.92\Rightarrow\) loses \(1-0.92=0.08=8\%\) per period.`,
        S`<b>(b) Ratios.</b> \(\frac{720}{900}=0.8\), \(\frac{576}{720}=0.8\).`,
        S`<b>Rate.</b> \(1-0.8=0.2=20\%\) per period.`,
        S`<b>Model.</b> \(y=900(0.8)^t\).`],
      S`(a) 650, 8%; (b) 20%, y = 900(0.8)ᵗ`,
      EG([(t) => 900 * 0.8 ** t], { view: { xmin: 0, xmax: 8, ymin: 0, ymax: 1000 }, step: { x: 1, y: 100 }, points: [P(0, 900, "(0, 900)"), P(1, 720, "(1, 720)"), P(2, 576, "(2, 576)")], xlabel: "t", ylabel: "y" })],

    ["A leaking tire", S`A tire at \(240\) kPa loses \(4\%\) of its pressure each hour. After how many whole hours is it first below \(180\) kPa?`,
      [S`<b>Model.</b> \(p=240(0.96)^t\).`,
        S`<b>Try values.</b> \(t=7\): \(240(0.96)^7\approx180.34\) — still above.`,
        S`<b>Next hour.</b> \(t=8\): \(\approx173.13\) — below.`,
        S`<b>Answer.</b> After \(8\) hours.`],
      S`8 hours`,
      EG([tire], { view: { xmin: 0, xmax: 12, ymin: 100, ymax: 260 }, step: { x: 1, y: 20 }, lines: [{ m: 0, b: 180, color: "green", dash: true, label: "180 kPa" }], points: [P(7, r2(tire(7)), "(7, 180.34)"), P(8, r2(tire(8)), "(8, 173.13)", "red")], xlabel: "t (h)", ylabel: "p (kPa)" })],

    ["Cooling", S`Tea at \(90\) °C cools in a \(20\) °C room. The difference from room temperature halves every \(8\) min. Write a model and find the temperature after \(16\) min.`,
      [S`<b>Difference.</b> Starts at \(90-20=70\) °C and halves every \(8\) min: \(70\left(\frac12\right)^{t/8}\).`,
        S`<b>Model.</b> \(T=20+70\left(\frac12\right)^{t/8}\).`,
        S`<b>16 min.</b> \(70\times\frac14=17.5\): \(T=37.5\) °C.`,
        S`<b>Asymptote.</b> \(T=20\): the tea approaches room temperature ✓`],
      S`T = 20 + 70(½)^(t/8); 37.5 °C`,
      EG([tea], { view: { xmin: 0, xmax: 48, ymin: 0, ymax: 100 }, step: { x: 8, y: 10 }, lines: [{ m: 0, b: 20, color: "red", dash: true, label: "room 20 °C" }], points: [P(0, 90, "(0, 90)"), P(16, 37.5, "(16, 37.5)")], xlabel: "t (min)", ylabel: "T (°C)" })],
  ]),

  practice([
    q("rate", S`What percent decay rate does \(y=500(0.75)^t\) represent?`, num(25), "1 − 0.75.", [S`\(25\%\).`], S`\(25\)`),
    q("half", S`\(64\) g of a substance has a half-life of \(3\) days. How much is left after \(9\) days?`, num(8), "Three halvings.", [S`\(64\to32\to16\to8\).`], S`\(8\)`),
    q("two", S`Evaluate \(1000(0.9)^2\).`, num(810), "1000 × 0.81.", [S`\(810\).`], S`\(810\)`),
    q("hl", S`Evaluate \(y=200\left(\frac12\right)^{t/4}\) at \(t=8\).`, num(50), "Two half-lives.", [S`\(50\).`], S`\(50\)`),
    q("which", S`Which equation shows decay?`, choice(["y = 50(0.97)ᵗ", "y = 50(1.97)ᵗ", "y = 0.97(50)ᵗ", "y = 50 + 0.97t"], 0), "Factor between 0 and 1.", [S`\(0.97<1\).`], S`y = 50(0.97)ᵗ`),
  ]),

  ...hard([
    ["Finding a half-life", S`A sample decays from \(120\) mg to \(15\) mg in \(21\) h. Find its half-life.`,
      [S`<b>Fraction left.</b> \(\frac{15}{120}=\frac18=\left(\frac12\right)^3\): three half-lives.`,
        S`<b>Half-life.</b> \(21\div3=7\) h.`,
        S`<b>Check.</b> \(120\to60\to30\to15\) at \(7,14,21\) h ✓`],
      S`7 hours`,
      EG([(t) => 120 * 0.5 ** (t / 7)], { view: { xmin: 0, xmax: 28, ymin: 0, ymax: 130 }, step: { x: 7, y: 10 }, points: [P(7, 60, "(7, 60)"), P(14, 30, "(14, 30)"), P(21, 15, "(21, 15)")], xlabel: "t (h)", ylabel: "A (mg)" })],
    ["Finding a depreciation rate", S`A machine worth \(28\,000\) dollars is worth \(20\,230\) dollars two years later. Find the yearly depreciation rate.`,
      [S`<b>Equation.</b> \(28\,000(1-r)^2=20\,230\Rightarrow(1-r)^2=0.7225\).`,
        S`<b>Square root.</b> \(1-r=0.85\).`,
        S`<b>Rate.</b> \(r=0.15=15\%\) per year.`,
        S`<b>Check.</b> \(28\,000\times0.85=23\,800\); \(23\,800\times0.85=20\,230\) ✓`],
      S`15% per year`],
  ], [
    q("hard", S`Find \(500(0.8)^6\) (two decimals).`, num(131.07, 0.011), "Calculator.", [S`\(131.072\).`], S`\(131.07\)`),
    q("hard", S`\(2400\) atoms have a half-life of \(5\) years. How many remain after \(20\) years?`, num(150), "Four halvings.", [S`\(150\).`], S`\(150\)`),
    q("hard", S`For which whole \(t\) is \(1000(0.85)^t\) first below \(300\)?`, num(8), "t = 7: 320.6; t = 8: 272.5.", [S`\(8\).`], S`\(8\)`),
    q("hard", S`\(T=22+68\left(\frac12\right)^{t/10}\). Find \(T\) at \(t=20\).`, num(39), "22 + 17.", [S`\(39\).`], S`\(39\)`),
    q("hard", S`A quantity decays from \(5000\) to \(4050\) in \(2\) years at a constant rate. Find the percent rate.`, num(10), "(1 − r)² = 0.81.", [S`\(r=10\%\).`], S`\(10\)`),
  ]),

  wrapUp({
    qas: [
      ["What is the decay model?", "A = A₀(1 − r)ᵗ: keep 1 − r of the amount each period."],
      ["How does a half-life model work?", "A = A₀(½)^(t/h): t/h counts the number of half-lives."],
      ["How do I get the rate from y = 650(0.92)ᵗ?", "1 − 0.92 = 0.08: 8% lost per period."],
      ["How do I model cooling?", "T = room + (start − room)(½)^(t/h): the difference decays."],
      ["Does the amount ever reach zero?", "Not in the model: the graph approaches its asymptote."],
    ],
    summary: [
      "A = A₀(1 − r)ᵗ.",
      "Half-life: A₀(½)^(t/h).",
      "1 − factor = decay rate.",
      "Cooling: the difference from room temperature decays.",
    ],
    next: "7.7 reviews the whole chapter.",
  }),
];
