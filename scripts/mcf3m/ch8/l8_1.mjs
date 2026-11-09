// MCF3M 8.1 — Simple and Compound Interest: I = Prt and A = P(1 + rt) as linear growth; compound interest year by
// year as repeated multiplication; A = P(1 + i)ⁿ with annual compounding; comparing the two.
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard } from "../lib.mjs";
import { FG, P, r2, money, steps } from "./ffig.mjs";
const S = String.raw;

export const TITLE = "8.1 Simple and Compound Interest";
const cmp = (t) => 2000 * 1.05 ** t;

export const blocks = () => [
  intro({
    icon: "🏦",
    title: "Simple and Compound Interest",
    overview: S`Interest is the price of using money. With <b>simple interest</b>, you earn interest only on the original <b>principal</b>, so the amount grows by the same number of dollars each year — a straight line. With <b>compound interest</b>, each year's interest is added to the balance and then earns interest itself, so the amount is multiplied by the same factor each year — an exponential curve. Over a long time the difference is large.`,
    goals: [
      "calculate simple interest with I = Prt and the amount A = P + I;",
      "find an unknown rate or time in a simple-interest problem;",
      "calculate compound interest year by year;",
      "use A = P(1 + i)ⁿ for annual compounding;",
      "compare simple and compound interest with tables and graphs.",
    ],
    curriculum: "D1.1 (simple interest as linear growth), D1.2 (compound interest as exponential growth), D1.3 (solve problems using the formulas for simple and compound interest)",
    prior: [
      [S`Write \(4.5\%\) as a decimal.`, S`\(0.045\).`],
      [S`Evaluate \(2000(1.05)^2\).`, S`\(2205\).`],
      [S`What kind of growth adds the same amount each step?`, S`Linear.`],
    ],
    words: [
      ["Principal P", "the money invested or borrowed at the start", "2000 dollars"],
      ["Interest I", "money earned or charged for the use of money", "100 dollars per year"],
      ["Simple interest", "I = Prt: interest on the principal only", "linear growth"],
      ["Compound interest", "interest added to the balance and earning interest", "exponential growth"],
      ["Amount A", "principal plus interest", "future value"],
    ],
  }),

  section("📌 Two ways to earn interest", S`
  ${table(["Year", "Simple (5% of 2000 each year)", "Compound (×1.05 each year)"], [["0", "2000", "2000"], ["1", "2100", "2100"], ["2", "2200", "2205"], ["3", "2300", "2315.25"], ["10", "3000", "3257.79"]])}
  ${FG([{ f: (t) => 2000 + 100 * t, color: "green" }, { f: cmp, color: "violet" }], { view: { xmin: 0, xmax: 20, ymin: 1800, ymax: 5500 }, step: { x: 2, y: 500 }, points: [P(10, 3000, "(10, 3000)", "green"), P(10, r2(cmp(10)), "(10, 3257.79)")], cap: "green: simple interest · violet: compound interest (2000 dollars at 5%)" })}
  ${table(["", "Simple", "Compound (annual)"], [["interest", "\\(I=Prt\\)", "\\(I=A-P\\)"], ["amount", "\\(A=P(1+rt)\\)", "\\(A=P(1+i)^n\\)"], ["growth", "linear: + Pr each year", "exponential: × (1 + i) each year"]])}
  ${keyIdea(S`Write the rate as a decimal and the time in years. Simple: add \(Pr\) every year. Compound: multiply by \(1+i\) every period.`)}`),

  widget("simpleCompound", { init: [2000, 5, 15] }),

  section("⚠️ Common errors", S`
  ${watchOut([
    "Use r as a decimal: 5% → 0.05.",
    "Time must match the rate: months ÷ 12 for an annual rate.",
    "The amount A includes the principal; the interest I does not.",
    "Compound interest is not P × r × t: multiply by (1 + i) each period.",
    "Round money to the nearest cent only at the end.",
  ])}`),

  examples([
    ["Simple interest", S`Find the simple interest and the amount when \(2500\) dollars is invested at \(4\%\) per year for \(3\) years.`,
      [S`<b>Values.</b> \(P=2500\), \(r=0.04\), \(t=3\).`,
        S`<b>Interest.</b> \(I=Prt=2500(0.04)(3)=300\) dollars.`,
        S`<b>Amount.</b> \(A=P+I=2800\) dollars.`,
        S`<b>Graph.</b> \(A=2500+100t\): a line with slope \(100\) dollars per year ✓`],
      S`I = 300 dollars, A = 2800 dollars`,
      FG([{ f: (t) => 2500 + 100 * t, color: "green" }], { view: { xmin: 0, xmax: 6, ymin: 2000, ymax: 3200 }, step: { x: 1, y: 100 }, points: [P(0, 2500, "(0, 2500)"), P(3, 2800, "(3, 2800)")] })],

    ["Finding the rate", S`A loan of \(1800\) dollars costs \(270\) dollars in simple interest over \(2\) years. What is the annual rate?`,
      [S`<b>Rearrange.</b> \(r=\frac I{Pt}\).`,
        S`<b>Substitute.</b> \(r=\frac{270}{1800(2)}=\frac{270}{3600}=0.075\).`,
        S`<b>Percent.</b> \(7.5\%\) per year.`,
        S`<b>Check.</b> \(1800(0.075)(2)=270\) ✓`],
      S`7.5% per year`,
      FG([{ f: (t) => 1800 + 135 * t, color: "green" }], { view: { xmin: 0, xmax: 4, ymin: 1600, ymax: 2400 }, step: { x: 1, y: 100 }, points: [P(0, 1800, "(0, 1800)"), P(2, 2070, "(2, 2070)")] })],

    ["Compound interest year by year", S`\(2000\) dollars earns \(5\%\) compounded annually. Find the balance after each of the first \(3\) years.`,
      [S`<b>Year 1.</b> Interest \(2000(0.05)=100\); balance \(2100\).`,
        S`<b>Year 2.</b> Interest \(2100(0.05)=105\); balance \(2205\).`,
        S`<b>Year 3.</b> Interest \(2205(0.05)=110.25\); balance \(2315.25\).`,
        S`<b>Pattern.</b> Each balance is \(1.05\) times the one before: \(2000(1.05)^3=2315.25\) ✓`],
      S`2100, 2205, 2315.25 dollars`,
      FG([], { view: { xmin: 0, xmax: 4, ymin: 1900, ymax: 2400 }, step: { x: 1, y: 50 }, segs: [steps(cmp, 3)], points: [P(1, 2100, "2100"), P(2, 2205, "2205"), P(3, 2315.25, "2315.25")] })],

    ["The compound-interest formula", S`Use \(A=P(1+i)^n\) to find the amount after \(10\) years for \(2000\) dollars at \(5\%\) compounded annually. Compare with simple interest.`,
      [S`<b>Compound.</b> \(A=2000(1.05)^{10}\approx2000(1.628895)\approx3257.79\) dollars.`,
        S`<b>Simple.</b> \(A=2000(1+0.05\times10)=3000\) dollars.`,
        S`<b>Difference.</b> \(257.79\) dollars more with compounding — interest earned on interest.`,
        S`<b>Graph.</b> The curve rises above the line, and the gap keeps widening ✓`],
      S`3257.79 vs 3000 dollars`,
      FG([{ f: (t) => 2000 + 100 * t, color: "green" }, { f: cmp, color: "violet" }], { view: { xmin: 0, xmax: 12, ymin: 1800, ymax: 3800 }, step: { x: 1, y: 200 }, points: [P(10, 3000, "simple 3000", "green"), P(10, r2(cmp(10)), "compound 3257.79")] })],

    ["Interest in one year", S`For \(2000\) dollars at \(5\%\) compounded annually, how much interest is earned in year \(10\) alone? How does that compare with simple interest?`,
      [S`<b>Balances.</b> \(A(9)=2000(1.05)^9\approx3102.66\); \(A(10)\approx3257.79\).`,
        S`<b>Year 10 interest.</b> \(3257.79-3102.66=155.13\) dollars.`,
        S`<b>Simple.</b> Always \(2000(0.05)=100\) dollars a year.`,
        S`<b>Why.</b> Compound interest in year 10 is \(5\%\) of the larger balance \(3102.66\) ✓`],
      S`155.13 dollars (vs 100 dollars)`,
      FG([], { view: { xmin: 0, xmax: 11, ymin: 1900, ymax: 3400 }, step: { x: 1, y: 100 }, segs: [steps(cmp, 10)], points: [P(9, r2(cmp(9)), "(9, 3102.66)"), P(10, r2(cmp(10)), "(10, 3257.79)", "red")] })],
  ]),

  practice([
    q("si", S`Find the simple interest on \(1500\) dollars at \(3\%\) per year for \(4\) years.`, num(180), "I = Prt.", [S`\(1500(0.03)(4)=180\).`], S`\(180\)`),
    q("sa", S`Find the amount: \(800\) dollars at \(6\%\) simple interest for \(5\) years.`, num(1040), "P(1 + rt).", [S`\(800(1.3)=1040\).`], S`\(1040\)`),
    q("ca", S`Find the amount: \(1000\) dollars at \(10\%\) compounded annually for \(2\) years.`, num(1210), "1000 × 1.1².", [S`\(1210\).`], S`\(1210\)`),
    q("rate", S`\(500\) dollars earns \(60\) dollars simple interest in \(3\) years. Find the rate in percent.`, num(4), "r = I/(Pt).", [S`\(\frac{60}{1500}=0.04\).`], S`\(4\)`),
    q("which", S`Which type of interest gives a straight-line graph of the amount?`, choice(["simple interest", "compound interest", "both", "neither"], 0), "Same amount each year.", [S`Simple interest adds \(Pr\) each year.`], S`simple interest`),
  ]),

  ...hard([
    ["Which offer is better?", S`You can invest \(5000\) dollars at \(6\%\) simple interest or at \(5\%\) compounded annually. Which is better for \(8\) years? For \(10\) years?`,
      [S`<b>8 years.</b> Simple: \(5000(1.48)=7400\). Compound: \(5000(1.05)^8\approx7387.28\). Simple is better by \(12.72\) dollars.`,
        S`<b>10 years.</b> Simple: \(5000(1.6)=8000\). Compound: \(5000(1.05)^{10}\approx8144.47\). Compound is better.`,
        S`<b>Conclusion.</b> A lower compound rate eventually beats a higher simple rate; the crossover is between \(8\) and \(10\) years.`],
      S`8 years: simple; 10 years: compound`,
      FG([{ f: (t) => 5000 + 300 * t, color: "green" }, { f: (t) => 5000 * 1.05 ** t, color: "violet" }], { view: { xmin: 0, xmax: 14, ymin: 4500, ymax: 10500 }, step: { x: 2, y: 500 }, points: [P(8, 7400, "S 7400", "green"), P(10, r2(5000 * 1.05 ** 10), "C 8144.47")] })],
    ["Doubling", S`How many whole years does it take money to double at \(8\%\) compounded annually? At \(8\%\) simple interest?`,
      [S`<b>Compound.</b> \(1.08^9\approx1.999\) (just short), \(1.08^{10}\approx2.159\): it doubles during year \(10\).`,
        S`<b>Simple.</b> \(1+0.08t=2\Rightarrow t=12.5\) years.`,
        S`<b>Compare.</b> Compounding doubles the money about \(2.5\) years sooner.`],
      S`10 years (compound) vs 12.5 years (simple)`],
  ], [
    q("hard", S`How many years does it take \(1200\) dollars at \(5\%\) simple interest to earn \(300\) dollars?`, num(5), "t = I/(Pr).", [S`\(\frac{300}{60}=5\).`], S`\(5\)`),
    q("hard", S`Find the compound interest earned on \(3000\) dollars at \(4\%\) compounded annually for \(3\) years.`, num(374.59, 0.011), "3000(1.04)³ − 3000.", [S`\(3374.59-3000=374.59\).`], S`\(374.59\)`),
    q("hard", S`Find \(4000(1.06)^5\) to the nearest cent.`, num(5352.90, 0.011), "Calculator.", [S`\(\approx5352.90\).`], S`\(5352.90\)`),
    q("hard", S`For \(1000\) dollars at \(10\%\) for \(3\) years, how much more does compound (annual) earn than simple?`, num(31), "1331 − 1300.", [S`\(31\).`], S`\(31\)`),
    q("hard", S`What simple-interest rate (percent) gives the same amount after \(2\) years as \(10\%\) compounded annually?`, num(10.5, 0.001), "1 + 2r = 1.21.", [S`\(r=0.105\).`], S`\(10.5\)`),
  ]),

  wrapUp({
    qas: [
      ["What is simple interest?", "Interest on the principal only: I = Prt, so the amount grows linearly."],
      ["What is compound interest?", "Interest added to the balance each period, so the amount grows exponentially: A = P(1 + i)ⁿ."],
      ["How do I find an unknown rate in simple interest?", "r = I ÷ (Pt), then convert to a percent."],
      ["Why does compound interest grow faster?", "Each period's interest also earns interest."],
      ["How do the graphs differ?", "Simple: a straight line. Compound: a curve that bends upward."],
    ],
    summary: [
      "Simple: I = Prt, A = P(1 + rt).",
      "Compound (annual): A = P(1 + i)ⁿ.",
      "Simple is linear, compound is exponential.",
      "Compound eventually earns more.",
    ],
    next: "8.2 compounds more often than once a year: semi-annually, monthly and more.",
  }),
];
