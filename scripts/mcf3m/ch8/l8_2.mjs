// MCF3M 8.2 — Compound Interest: Future Value. A = P(1 + i)ⁿ with i = r/m and n = mt for semi-annual, quarterly,
// monthly and daily compounding; interest earned; effect of compounding frequency; effective annual rate.
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard } from "../lib.mjs";
import { FG, TL, P, r2, money } from "./ffig.mjs";
const S = String.raw;

export const TITLE = "8.2 Compound Interest: Future Value";
const A = (P0, r, m, t) => P0 * (1 + r / m) ** (m * t);

export const blocks = () => [
  intro({
    icon: "📆",
    title: "Compound Interest: Future Value",
    overview: S`Banks rarely compound only once a year. A rate such as "\(6\%\) per year, compounded monthly" means \(\frac{6\%}{12}=0.5\%\) is added every month. The <b>future value</b> after \(t\) years is \(A=P(1+i)^n\), where \(i=\frac rm\) is the rate per compounding period and \(n=mt\) is the number of periods. More frequent compounding earns a little more, because interest starts earning interest sooner.`,
    goals: [
      "find the interest rate per period i = r/m and the number of periods n = mt;",
      "calculate the future value A = P(1 + i)ⁿ for any compounding frequency;",
      "calculate the interest earned I = A − P;",
      "compare the effect of compounding annually, semi-annually, quarterly, monthly and daily;",
      "find and use the effective annual rate.",
    ],
    curriculum: "D1.2 (compound interest as exponential growth), D1.3 (solve problems using the compound-interest formula), D1.5 (effect of the compounding frequency)",
    prior: [
      [S`Write \(4.8\%\) as a decimal and divide by \(4\).`, S`\(0.048\div4=0.012\).`],
      [S`How many months are in \(5\) years?`, S`\(60\).`],
      [S`Evaluate \(1000(1.01)^{12}\).`, S`\(\approx1126.83\).`],
    ],
    words: [
      ["Compounding period", "how often interest is added", "monthly"],
      ["m", "number of compounding periods per year", "12 for monthly"],
      ["i = r/m", "interest rate per compounding period", "0.06/12 = 0.005"],
      ["n = mt", "total number of compounding periods", "12 × 5 = 60"],
      ["Future value A", "the amount after n periods", "A = P(1 + i)ⁿ"],
    ],
  }),

  section("📌 Rate per period, number of periods", S`
  ${table(["Compounded", "m", "i for r = 6%", "n for t = 5 years"], [["annually", "1", "0.06", "5"], ["semi-annually", "2", "0.03", "10"], ["quarterly", "4", "0.015", "20"], ["monthly", "12", "0.005", "60"], ["daily", "365", "0.06/365", "1825"]])}
  ${TL({ n: 10, unit: "half-years", title: "4000 dollars at 6% compounded semi-annually for 5 years", flows: [{ at: 0, label: "P = 4000", up: false }, { at: 10, label: "A = ?" }] })}
  ${keyIdea(S`\(A=P(1+i)^n\) with \(i=\frac rm\), \(n=mt\). Everything is counted in <b>compounding periods</b>, not years.`)}`),

  widget("compoundLab", { init: [3000, 6, 8] }),

  section("⚠️ Common errors", S`
  ${watchOut([
    "Divide the annual rate by m; multiply the years by m.",
    "Use 1 + i, not 1 + r, as the base.",
    "Interest earned is A − P, not A.",
    "Round i only if it terminates; otherwise type r/m into the calculator.",
    "More frequent compounding helps, but by less each time (monthly vs daily is tiny).",
  ])}`),

  examples([
    ["Semi-annual compounding", S`Find the future value of \(4000\) dollars invested at \(6\%\) per year compounded semi-annually for \(5\) years.`,
      [S`<b>Per period.</b> \(i=\frac{0.06}2=0.03\); \(n=2\times5=10\).`,
        S`<b>Formula.</b> \(A=4000(1.03)^{10}\).`,
        S`<b>Evaluate.</b> \(1.03^{10}\approx1.343916\): \(A\approx5375.67\) dollars.`,
        S`<b>Interest.</b> \(5375.67-4000=1375.67\) dollars.`],
      S`A ≈ 5375.67 dollars`,
      TL({ n: 10, unit: "half-years", flows: [{ at: 0, label: "4000", up: false }, { at: 10, label: "5375.67" }] })],

    ["Monthly compounding", S`Repeat for \(6\%\) compounded monthly. How much more is earned than with semi-annual compounding?`,
      [S`<b>Per period.</b> \(i=0.005\); \(n=12\times5=60\).`,
        S`<b>Formula.</b> \(A=4000(1.005)^{60}\approx5395.40\) dollars.`,
        S`<b>Compare.</b> \(5395.40-5375.67=19.73\) dollars more.`,
        S`<b>Reason.</b> Interest is added sooner, so it starts earning interest sooner ✓`],
      S`A ≈ 5395.40 dollars (19.73 more)`,
      TL({ n: 60, unit: "months", flows: [{ at: 0, label: "4000", up: false }, { at: 60, label: "5395.40" }] })],

    ["Comparing frequencies", S`\(10\,000\) dollars is invested at \(4.8\%\) for \(10\) years. Compare annual, semi-annual, quarterly, monthly and daily compounding.`,
      [S`<b>Annual.</b> \(10000(1.048)^{10}\approx15981.33\).`,
        S`<b>Semi-annual / quarterly.</b> \(10000(1.024)^{20}\approx16069.38\); \(10000(1.012)^{40}\approx16114.64\).`,
        S`<b>Monthly / daily.</b> \(10000(1.004)^{120}\approx16145.28\); \(10000\left(1+\frac{0.048}{365}\right)^{3650}\approx16160.23\).`,
        S`<b>Pattern.</b> More frequent compounding earns more, but the gains shrink: daily beats monthly by only about \(15\) dollars.`],
      S`15 981.33 < 16 069.38 < 16 114.64 < 16 145.28 < 16 160.23`,
      FG([], { view: { xmin: 0, xmax: 6, ymin: 15900, ymax: 16200 }, step: { x: 1, y: 50 }, xlabel: "frequency", ylabel: "A", points: [P(1, 15981.33, "annual"), P(2, 16069.38, "semi"), P(3, 16114.64, "quarterly"), P(4, 16145.28, "monthly"), P(5, 16160.23, "daily")], segs: [{ pts: [[1, 15981.33], [2, 16069.38], [3, 16114.64], [4, 16145.28], [5, 16160.23]], color: "violet" }] })],

    ["Interest earned", S`\(7500\) dollars is invested at \(3.6\%\) compounded quarterly for \(4\) years. Find the interest earned.`,
      [S`<b>Per period.</b> \(i=\frac{0.036}4=0.009\); \(n=16\).`,
        S`<b>Future value.</b> \(A=7500(1.009)^{16}\approx8656.05\) dollars.`,
        S`<b>Interest.</b> \(I=8656.05-7500=1156.05\) dollars.`,
        S`<b>Check against simple interest.</b> \(7500(0.036)(4)=1080\); compound earns a bit more ✓`],
      S`I ≈ 1156.05 dollars`,
      FG([{ f: (t) => A(7500, 0.036, 4, t), color: "violet" }, { f: (t) => 7500 * (1 + 0.036 * t), color: "green" }], { view: { xmin: 0, xmax: 6, ymin: 7300, ymax: 9300 }, step: { x: 1, y: 200 }, points: [P(4, r2(A(7500, 0.036, 4, 4)), "(4, 8656.05)"), P(4, 8580, "simple 8580", "green")] })],

    ["A GIC", S`A \(3\)-year GIC pays \(2.4\%\) compounded monthly on \(2500\) dollars. Find its value at maturity and the interest earned.`,
      [S`<b>Per period.</b> \(i=0.002\); \(n=36\).`,
        S`<b>Value.</b> \(A=2500(1.002)^{36}\approx2686.45\) dollars.`,
        S`<b>Interest.</b> \(186.45\) dollars.`,
        S`<b>Sense check.</b> Roughly \(2.4\%\) of \(2500\) is \(60\) a year, about \(180\) over \(3\) years, plus a little compounding ✓`],
      S`2686.45 dollars; 186.45 dollars interest`,
      TL({ n: 36, unit: "months", flows: [{ at: 0, label: "2500", up: false }, { at: 36, label: "2686.45" }] })],
  ]),

  practice([
    q("n", S`An investment earns \(8\%\) compounded quarterly for \(5\) years. Find \(n\).`, num(20), "n = mt.", [S`\(4\times5=20\).`], S`\(20\)`),
    q("i", S`Find \(i\) (decimal) for \(6\%\) compounded monthly.`, num(0.005, 0.00001), "r/12.", [S`\(0.005\).`], S`\(0.005\)`),
    q("m", S`Find the future value of \(1000\) dollars at \(12\%\) compounded monthly for \(1\) year.`, num(1126.83, 0.011), "1000(1.01)¹².", [S`\(\approx1126.83\).`], S`\(1126.83\)`),
    q("s", S`Find the future value of \(5000\) dollars at \(4\%\) compounded semi-annually for \(3\) years.`, num(5630.81, 0.011), "5000(1.02)⁶.", [S`\(\approx5630.81\).`], S`\(5630.81\)`),
    q("which", S`At the same annual rate, more frequent compounding gives …`, choice(["more interest", "less interest", "the same interest", "a lower rate"], 0), "Interest on interest sooner.", [S`More interest.`], S`more interest`),
  ]),

  ...hard([
    ["Effective annual rate", S`What annual rate, compounded once a year, gives the same growth as \(6\%\) compounded monthly?`,
      [S`<b>One year of monthly growth.</b> \((1.005)^{12}\approx1.061678\).`,
        S`<b>Effective rate.</b> \(1.061678-1\approx0.0617=6.17\%\).`,
        S`<b>Meaning.</b> \(6\%\) monthly is worth the same as \(6.17\%\) annually.`],
      S`≈ 6.17%`,
      FG([{ f: (t) => 1000 * 1.005 ** (12 * t), color: "violet" }, { f: (t) => 1000 * 1.0617 ** t, color: "green" }], { view: { xmin: 0, xmax: 10, ymin: 900, ymax: 2000 }, step: { x: 1, y: 100 }, cap: "the curves coincide: 6% monthly ≈ 6.17% annually" })],
    ["Rate vs frequency", S`For \(10\,000\) dollars over \(8\) years, which is better: \(5.1\%\) compounded annually or \(5\%\) compounded monthly?`,
      [S`<b>Annual.</b> \(10000(1.051)^8\approx14887.50\).`,
        S`<b>Monthly.</b> \(10000\left(1+\frac{0.05}{12}\right)^{96}\approx14905.85\).`,
        S`<b>Decision.</b> \(5\%\) monthly is better by about \(18.35\) dollars — its effective rate (\(\approx5.12\%\)) is higher.`],
      S`5% compounded monthly`],
  ], [
    q("hard", S`Find the future value of \(2500\) dollars at \(3\%\) compounded daily for \(2\) years (365 days per year).`, num(2654.58, 0.011), "2500(1 + 0.03/365)⁷³⁰.", [S`\(\approx2654.58\).`], S`\(2654.58\)`),
    q("hard", S`Find the interest earned on \(12\,000\) dollars at \(4.2\%\) compounded quarterly for \(6\) years.`, num(3418.88, 0.011), "12 000(1.0105)²⁴ − 12 000.", [S`\(\approx3418.88\).`], S`\(3418.88\)`),
    q("hard", S`Find the effective annual rate (percent, two decimals) of \(8\%\) compounded quarterly.`, num(8.24, 0.011), "1.02⁴ − 1.", [S`\(\approx8.24\%\).`], S`\(8.24\)`),
    q("hard", S`How many compounding periods are there in \(7\) years of monthly compounding?`, num(84), "12 × 7.", [S`\(84\).`], S`\(84\)`),
    q("hard", S`Find the future value of \(3000\) dollars at \(5\%\) compounded semi-annually for \(18\) months.`, num(3230.67, 0.011), "3000(1.025)³.", [S`\(\approx3230.67\).`], S`\(3230.67\)`),
  ]),

  wrapUp({
    qas: [
      ["What are i and n?", "i = r/m is the rate per compounding period; n = mt is the number of periods."],
      ["What is the future-value formula?", "A = P(1 + i)ⁿ."],
      ["How do I find the interest earned?", "I = A − P."],
      ["Does compounding more often always help?", "Yes, but the extra gain gets smaller and smaller."],
      ["What is the effective annual rate?", "(1 + i)ᵐ − 1: the equivalent rate compounded once a year."],
    ],
    summary: [
      "i = r/m, n = mt.",
      "A = P(1 + i)ⁿ; I = A − P.",
      "More frequent compounding earns more.",
      "Effective rate = (1 + i)ᵐ − 1.",
    ],
    next: "8.3 works backwards: how much must be invested now to reach a goal?",
  }),
];
