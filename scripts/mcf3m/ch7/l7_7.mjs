// MCF3M 7.7 — Chapter 7 Review: exponent laws (integer and rational exponents), graphs of y = a·bˣ, telling
// relations apart, growth and decay models.
import { intro, section, keyIdea, widget, examples, practice, wrapUp, table, q, num, choice, hard } from "../lib.mjs";
import { strip, rep, EG, P, r2 } from "./efig.mjs";
const S = String.raw;

export const TITLE = "7.7 Chapter 7 Review";

export const blocks = () => [
  intro({
    icon: "🧩",
    title: "Chapter 7 Review",
    overview: S`Chapter 7 built exponents from counting factors to fractions and negatives, then used them in exponential functions. The key ideas: the exponent laws (same base: add, subtract, multiply exponents); \(b^0=1\), \(b^{-n}=\frac1{b^n}\), \(b^{\frac mn}=(\sqrt[n]b)^m\); graphs of \(y=a\cdot b^x\) with a constant ratio; and the growth and decay models \(A=A_0(1\pm r)^t\) and half-life/doubling models.`,
    goals: [
      "simplify and evaluate with all the exponent laws;",
      "evaluate zero, negative and rational exponents;",
      "graph exponential functions and state their properties;",
      "identify exponential relations from tables;",
      "solve growth and decay problems.",
    ],
    curriculum: "B1.1–B1.4, B2.1–B2.3 (chapter 7 review)",
    prior: [
      [S`\(b^m\times b^n\)?`, S`\(b^{m+n}\).`],
      [S`\(b^{-n}\)?`, S`\(\frac1{b^n}\).`],
      [S`Growth factor for \(6\%\) growth? For \(6\%\) decay?`, S`\(1.06\); \(0.94\).`],
    ],
    words: [
      ["Exponent laws", "add, subtract, multiply exponents (same base)", "2³ × 2⁴ = 2⁷"],
      ["Rational exponent", "denominator = root, numerator = power", "8^(2/3) = 4"],
      ["Exponential function", "y = a·bˣ, constant ratio b", "y = 3(2)ˣ"],
      ["Growth / decay", "factor 1 + r / 1 − r", "1.05 / 0.95"],
      ["Half-life / doubling time", "time to halve / double", "A₀(½)^(t/h)"],
    ],
  }),

  section("📌 Summary", S`
  ${table(["Lesson", "Key idea"], [
    ["7.1", "same base: × add, ÷ subtract, power of a power multiply"],
    ["7.2", "b⁰ = 1, b⁻ⁿ = 1/bⁿ"],
    ["7.3", "b^(m/n) = (ⁿ√b)^m"],
    ["7.4", "y = a·bˣ: range y > 0, asymptote y = 0, constant ratio"],
    ["7.5", "growth A₀(1 + r)ᵗ, doubling A₀·2^(t/d)"],
    ["7.6", "decay A₀(1 − r)ᵗ, half-life A₀(½)^(t/h)"],
  ])}
  ${keyIdea(S`Write everything with the same base when possible (\(8=2^3\), \(\frac19=3^{-2}\)); then the laws do the work. In a word problem, find \(A_0\), the factor, and what one period is — then the exponent counts periods.`)}`),

  widget("expCompare", { init: 3 }),

  examples([
    ["Same base first", S`Evaluate \(\frac{4^3\times8^{-1}}{16^{\frac12}}\).`,
      [S`<b>Base 2.</b> \(4^3=2^6\), \(8^{-1}=2^{-3}\), \(16^{\frac12}=2^{2}\).`,
        S`<b>Numerator.</b> \(2^{6-3}=2^3\).`,
        S`<b>Divide.</b> \(2^{3-2}=2^1=2\).`,
        S`<b>Check.</b> \(\frac{64\times\frac18}{4}=\frac84=2\) ✓`],
      S`2`,
      strip([{ label: "4³ × 8⁻¹", items: ["2⁶", "×", "2⁻³"] }, { label: "÷ 16^(1/2)", items: ["÷", "2²"], color: "gray" }, { label: "= 2¹", items: ["2"], color: "green" }])],

    ["Algebraic simplification", S`Simplify \(\frac{(3m^{2}n^{-1})^{2}}{9m^{-2}n^{3}}\) with positive exponents.`,
      [S`<b>Expand.</b> \(9m^4n^{-2}\).`,
        S`<b>Divide.</b> \(\frac99m^{4-(-2)}n^{-2-3}=m^6n^{-5}\).`,
        S`<b>Positive form.</b> \(\frac{m^6}{n^5}\).`,
        S`<b>Check.</b> \(m=n=1\): \(\frac99=1\) ✓`],
      S`m⁶/n⁵`,
      strip([{ label: "m: 4 − (−2)", items: rep("m", 6) }, { label: "n: −2 − 3", items: rep("1/n", 5), color: "green" }])],

    ["Graph and properties", S`Graph \(y=4\left(\frac12\right)^x\) and state the \(y\)-intercept, asymptote, range and whether it increases.`,
      [S`<b>Table.</b> \(x=-2,-1,0,1,2,3\): \(16,8,4,2,1,0.5\).`,
        S`<b>Intercept.</b> \((0,4)\).`,
        S`<b>Asymptote and range.</b> \(y=0\); \(y>0\).`,
        S`<b>Behaviour.</b> Decreasing (base \(\frac12<1\)).`],
      S`y-int 4, asymptote y = 0, range y > 0, decreasing`,
      EG([(x) => 4 * 0.5 ** x], { view: { xmin: -2.5, xmax: 4, ymin: -1, ymax: 17 }, step: { x: 1, y: 2 }, points: [P(-2, 16, "(−2, 16)"), P(0, 4, "(0, 4)"), P(2, 1, "(2, 1)")] })],

    ["Growth problem", S`A colony of \(1500\) grows \(8\%\) per day. Find its size after \(1\) week and the first whole day it exceeds \(4000\).`,
      [S`<b>Model.</b> \(N=1500(1.08)^t\).`,
        S`<b>1 week.</b> \(1500(1.08)^7\approx2570.74\).`,
        S`<b>Target.</b> \(t=12\): \(\approx3777.26\); \(t=13\): \(\approx4079.44\).`,
        S`<b>Answer.</b> About \(2571\) after a week; first above \(4000\) on day \(13\).`],
      S`≈ 2571; day 13`,
      EG([(t) => 1500 * 1.08 ** t], { view: { xmin: 0, xmax: 16, ymin: 0, ymax: 5500 }, step: { x: 2, y: 500 }, lines: [{ m: 0, b: 4000, color: "green", dash: true, label: "4000" }], points: [P(7, r2(1500 * 1.08 ** 7), "(7, 2570.74)"), P(13, r2(1500 * 1.08 ** 13), "(13, 4079.44)", "red")], xlabel: "t (days)", ylabel: "N" })],

    ["Decay problem", S`A radioactive sample of \(500\) g has a half-life of \(30\) years. How much is left after \(75\) years, and after how many half-lives is less than \(20\) g left?`,
      [S`<b>Model.</b> \(A=500\left(\frac12\right)^{t/30}\).`,
        S`<b>75 years.</b> \(2.5\) half-lives: \(500(0.5)^{2.5}\approx88.39\) g.`,
        S`<b>Below 20 g.</b> \(500\to250\to125\to62.5\to31.25\to15.625\): after \(5\) half-lives (\(150\) years).`,
        S`<b>Check.</b> \(31.25>20>15.625\) ✓`],
      S`≈ 88.39 g; after 5 half-lives (150 years)`,
      EG([(t) => 500 * 0.5 ** (t / 30)], { view: { xmin: 0, xmax: 160, ymin: 0, ymax: 520 }, step: { x: 30, y: 50 }, lines: [{ m: 0, b: 20, color: "green", dash: true, label: "20 g" }], points: [P(75, 88.39, "(75, 88.39)"), P(150, 15.63, "(150, 15.6)", "red")], xlabel: "t (years)", ylabel: "A (g)" })],
  ]),

  practice([
    q("law", S`Evaluate \(\frac{6^{8}}{6^{5}\times6}\).`, num(36), "6².", [S`\(36\).`], S`\(36\)`),
    q("neg", S`Evaluate \(\left(\frac23\right)^{-2}\) as a decimal.`, num(2.25, 0.001), "(3/2)².", [S`\(\frac94=2.25\).`], S`\(2.25\)`),
    q("rat", S`Evaluate \(125^{\frac23}\).`, num(25), "∛125 = 5.", [S`\(25\).`], S`\(25\)`),
    q("ratio", S`A table with equal \(x\)-steps has values \(5,\ 15,\ 45\). What kind of relation is it?`, choice(["exponential", "linear", "quadratic", "periodic"], 0), "Constant ratio 3.", [S`Ratio \(3\): exponential.`], S`exponential`),
    q("decay", S`\(y=2000(0.9)^t\). Find \(y\) at \(t=3\).`, num(1458), "2000 × 0.729.", [S`\(1458\).`], S`\(1458\)`),
  ]),

  ...hard([
    ["Solving with a common base", S`Solve \(9^{x+1}=27^{x}\).`,
      [S`<b>Base 3.</b> \(3^{2(x+1)}=3^{3x}\).`,
        S`<b>Equate exponents.</b> \(2x+2=3x\Rightarrow x=2\).`,
        S`<b>Check.</b> \(9^3=729=27^2\) ✓`],
      S`x = 2`,
      EG([{ f: (x) => 9 ** (x + 1), color: "violet" }, { f: (x) => 27 ** x, color: "green" }], { view: { xmin: 0, xmax: 2.6, ymin: 0, ymax: 900 }, step: { x: 0.5, y: 100 }, points: [P(2, 729, "(2, 729)")] })],
    ["Growth versus decay", S`Town A: \(20\,000\) growing \(2\%\) per year. Town B: \(30\,000\) shrinking \(3\%\) per year. In which whole year does A first have more people?`,
      [S`<b>Models.</b> \(A=20\,000(1.02)^t\), \(B=30\,000(0.97)^t\).`,
        S`<b>Try.</b> \(t=8\): A \(\approx23\,433\), B \(\approx23\,512\) (B still ahead).`,
        S`<b>Next.</b> \(t=9\): A \(\approx23\,902\), B \(\approx22\,807\): A ahead.`],
      S`year 9`],
  ], [
    q("hard", S`Evaluate \(\frac{27^{\frac23}\times3^{-1}}{9^{-\frac12}}\).`, num(9), "3² × 3⁻¹ ÷ 3⁻¹.", [S`\(3^{2-1+1}=9\).`], S`\(9\)`),
    q("hard", S`Solve \(2^{3x}=16^{x-1}\).`, num(4), "3x = 4x − 4.", [S`\(x=4\).`], S`\(4\)`),
    q("hard", S`\(y=a\cdot b^x\) passes through \((0,\,250)\) and \((2,\,160)\). Find \(b\).`, num(0.8, 0.001), "b² = 0.64.", [S`\(b=0.8\).`], S`\(0.8\)`),
    q("hard", S`A drug has a half-life of \(4\) h. What percent of a dose remains after \(12\) h?`, num(12.5, 0.001), "(½)³.", [S`\(12.5\%\).`], S`\(12.5\)`),
    q("hard", S`An investment doubles every \(9\) years. By what factor does it grow in \(27\) years?`, num(8), "2³.", [S`\(8\).`], S`\(8\)`),
  ]),

  wrapUp({
    qas: [
      ["What is the first step in a messy exponent expression?", "Write every base as a power of the same prime, then apply the laws."],
      ["How do I deal with b^(−m/n)?", "Reciprocal, root, power."],
      ["How do I know a table is exponential?", "Equal x-steps give a constant ratio."],
      ["How do I set up a word problem?", "Find A₀, the factor (1 ± r, 2, ½), and what the exponent counts."],
      ["How do I find when a target is reached?", "Try whole periods (or read the graph) until the model passes the target."],
    ],
    summary: [
      "Laws: add, subtract, multiply exponents.",
      "b⁰ = 1, b⁻ⁿ = 1/bⁿ, b^(m/n) = (ⁿ√b)^m.",
      "y = a·bˣ: constant ratio, asymptote y = 0.",
      "Growth (1 + r), decay (1 − r), half-life (½)^(t/h).",
    ],
    next: "Chapter 8 applies exponential growth to money: compound interest and annuities.",
  }),
];
