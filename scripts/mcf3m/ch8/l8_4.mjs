// MCF3M 8.4 — Finding the Interest Rate and the Time: i = (A/P)^(1/n) − 1 using rational exponents; the time n by
// systematic trial (a table of (1 + i)ⁿ) or a graph, as a financial calculator does; the rule of 72 as a check.
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard } from "../lib.mjs";
import { FG, TL, P, r2 } from "./ffig.mjs";
const S = String.raw;

export const TITLE = "8.4 Finding the Interest Rate and the Time";

export const blocks = () => [
  intro({
    icon: "🔍",
    title: "Finding the Interest Rate and the Time",
    overview: S`The formula \(A=P(1+i)^n\) has four quantities. In 8.2 and 8.3 we found \(A\) or \(P\). Now we find the other two. The <b>rate</b> can be found exactly with a rational exponent: \(1+i=\left(\frac AP\right)^{\frac1n}\). The <b>number of periods</b> sits in the exponent, so we find it the way a financial calculator does — by trying values of \(n\) systematically (or reading a graph) until the amount reaches the goal.`,
    goals: [
      "find the interest rate per period with i = (A/P)^(1/n) − 1 and convert it to an annual rate;",
      "find the number of compounding periods by a table of values;",
      "use a graph to estimate the time to reach a goal;",
      "estimate doubling time with the rule of 72;",
      "interpret results in whole compounding periods.",
    ],
    curriculum: "D1.4 (determine, using technology such as a TVM solver or systematic trial, the interest rate or the number of compounding periods), D1.3 (solve compound-interest problems)",
    prior: [
      [S`Evaluate \(1.21^{\frac12}\).`, S`\(1.1\).`],
      [S`For which whole \(n\) is \(1.5^n\) first greater than \(5\)?`, S`\(n=4\) (\(5.06\)).`],
      [S`Convert \(0.005\) per month to an annual rate.`, S`\(6\%\).`],
    ],
    words: [
      ["Growth ratio A/P", "how many times the money grows", "1.3"],
      ["Rate per period i", "i = (A/P)^(1/n) − 1", "0.0539"],
      ["Annual rate r", "r = m × i", "12 × 0.005 = 6%"],
      ["Systematic trial", "testing whole n in order until the goal is passed", "n = 8, 9, …"],
      ["Rule of 72", "doubling time ≈ 72 ÷ (annual rate in %)", "72 ÷ 8 = 9 years"],
    ],
  }),

  section("📌 Two unknowns, two methods", S`
  ${table(["Unknown", "Method", "Example"], [["rate i", "\\(1+i=\\left(\\frac AP\\right)^{\\frac1n}\\)", "\\(5000\\to6500\\) in \\(5\\) years: \\(i=1.3^{0.2}-1\\)"], ["time n", "try n = 1, 2, 3, … until \\(P(1+i)^n\\ge A\\)", "\\(1.06^9\\approx1.69\\ge1.667\\)"]])}
  ${FG([{ f: (t) => 3000 * 1.06 ** t, color: "violet" }], { view: { xmin: 0, xmax: 12, ymin: 2500, ymax: 6200 }, step: { x: 1, y: 500 }, lines: [{ m: 0, b: 5000, color: "green", dash: true, label: "goal 5000" }], points: [P(8, r2(3000 * 1.06 ** 8), "(8, 4781.54)"), P(9, r2(3000 * 1.06 ** 9), "(9, 5068.44)", "red")], cap: "3000 dollars at 6%: the goal is passed during year 9" })}
  ${keyIdea(S`Rate: divide, take the \(n\)th root, subtract \(1\), then multiply by \(m\). Time: interest is only added at the end of each period, so the answer is the first <b>whole</b> period at which the goal is reached.`)}`),

  widget("interestGrowth", {}),

  section("⚠️ Common errors", S`
  ${watchOut([
    "The root is the number of PERIODS n, not the number of years (unless compounding is annual).",
    "After finding i, multiply by m for the annual rate.",
    "Round the time UP to the next whole period: interest arrives at the end of a period.",
    "Convert periods back to years: 70 quarters = 17.5 years.",
    "The rule of 72 is an estimate, not an exact answer.",
  ])}`),

  examples([
    ["Rate, annual compounding", S`\(5000\) dollars grew to \(6500\) dollars in \(5\) years, compounded annually. Find the annual interest rate.`,
      [S`<b>Set up.</b> \(5000(1+i)^5=6500\Rightarrow(1+i)^5=1.3\).`,
        S`<b>Root.</b> \(1+i=1.3^{\frac15}\approx1.053874\).`,
        S`<b>Rate.</b> \(i\approx0.0539=5.39\%\) per year.`,
        S`<b>Check.</b> \(5000(1.053874)^5\approx6500\) ✓`],
      S`≈ 5.39% per year`,
      TL({ n: 5, unit: "years", flows: [{ at: 0, label: "5000", up: false }, { at: 5, label: "6500" }] })],

    ["Rate, monthly compounding", S`\(2000\) dollars grew to \(2400\) dollars in \(3\) years, compounded monthly. Find the annual rate.`,
      [S`<b>Periods.</b> \(n=36\); \((1+i)^{36}=1.2\).`,
        S`<b>Root.</b> \(1+i=1.2^{\frac1{36}}\approx1.005077\).`,
        S`<b>Annual rate.</b> \(r=12i\approx0.0609=6.09\%\) compounded monthly.`,
        S`<b>Check.</b> \(2000(1.005077)^{36}\approx2400\) ✓`],
      S`≈ 6.09% compounded monthly`,
      TL({ n: 36, unit: "months", flows: [{ at: 0, label: "2000", up: false }, { at: 36, label: "2400" }] })],

    ["Time by systematic trial", S`How many years does it take \(3000\) dollars at \(6\%\) compounded annually to reach \(5000\) dollars?`,
      [S`<b>Target ratio.</b> \(\frac{5000}{3000}\approx1.6667\).`,
        S`<b>Table.</b> \(1.06^8\approx1.5938\) (short); \(1.06^9\approx1.6895\) (enough).`,
        S`<b>Answer.</b> \(9\) years: \(3000(1.06)^9\approx5068.44\).`,
        S`<b>Graph.</b> The curve crosses \(A=5000\) between \(t=8\) and \(t=9\) ✓`],
      S`9 years`,
      FG([{ f: (t) => 3000 * 1.06 ** t, color: "violet" }], { view: { xmin: 0, xmax: 12, ymin: 2500, ymax: 6200 }, step: { x: 1, y: 500 }, lines: [{ m: 0, b: 5000, color: "green", dash: true }], points: [P(9, r2(3000 * 1.06 ** 9), "(9, 5068.44)")] })],

    ["Time with quarterly compounding", S`How long does it take \(8000\) dollars to double at \(4\%\) compounded quarterly?`,
      [S`<b>Per period.</b> \(i=0.01\); need \(1.01^n\ge2\).`,
        S`<b>Trial.</b> \(1.01^{69}\approx1.9869\); \(1.01^{70}\approx2.0068\).`,
        S`<b>Answer.</b> \(70\) quarters \(=17.5\) years.`,
        S`<b>Value.</b> \(8000(1.01)^{70}\approx16054.11\) dollars ✓`],
      S`70 quarters = 17.5 years`,
      FG([{ f: (t) => 8000 * 1.01 ** (4 * t), color: "violet" }], { view: { xmin: 0, xmax: 20, ymin: 7000, ymax: 18000 }, step: { x: 2, y: 1000 }, lines: [{ m: 0, b: 16000, color: "green", dash: true, label: "double" }], points: [P(17.5, r2(8000 * 1.01 ** 70), "(17.5, 16 054.11)")] })],

    ["The rule of 72", S`Estimate the doubling time at \(8\%\) and at \(4\%\) using the rule of 72, and compare with exact trials.`,
      [S`<b>8%.</b> \(72\div8=9\) years. Exact: \(1.08^9\approx1.999\), so very nearly \(9\) years (passed in year \(10\)).`,
        S`<b>4%.</b> \(72\div4=18\) years. Exact (quarterly, Example 4): \(17.5\) years.`,
        S`<b>Use.</b> A quick mental check of a calculator answer.`,
        S`<b>Limit.</b> It is only an approximation; it works best for rates between about \(4\%\) and \(12\%\).`],
      S`≈ 9 years and ≈ 18 years`,
      FG([{ f: (t) => 1000 * 1.08 ** t, color: "violet" }, { f: (t) => 1000 * 1.04 ** t, color: "green" }], { view: { xmin: 0, xmax: 20, ymin: 800, ymax: 4000 }, step: { x: 2, y: 500 }, lines: [{ m: 0, b: 2000, color: "red", dash: true, label: "double" }], points: [P(9, 1999, "8%: ≈ 9 yr"), P(18, r2(1000 * 1.04 ** 18), "4%: ≈ 18 yr", "green")] })],
  ]),

  practice([
    q("r1", S`\(1000\) dollars grew to \(1210\) dollars in \(2\) years, compounded annually. Find the rate (percent).`, num(10, 0.001), "1.21^(1/2) − 1.", [S`\(1.1-1=0.1\).`], S`\(10\)`),
    q("r2", S`\(500\) dollars grew to \(800\) dollars in \(6\) years, compounded annually. Find the rate (percent, two decimals).`, num(8.15, 0.011), "1.6^(1/6) − 1.", [S`\(\approx8.15\%\).`], S`\(8.15\)`),
    q("t1", S`\(1000\) dollars at \(10\%\) compounded annually: after how many whole years is it first worth at least \(1500\) dollars?`, num(5), "1.1⁴ = 1.4641, 1.1⁵ = 1.6105.", [S`\(5\).`], S`\(5\)`),
    q("72", S`Use the rule of 72 to estimate the doubling time at \(6\%\).`, num(12), "72 ÷ 6.", [S`\(12\) years.`], S`\(12\)`),
    q("which", S`Which method finds the number of periods \(n\) in this course?`, choice(["systematic trial or a graph", "taking the nth root", "dividing A by P", "multiplying by m"], 0), "n is in the exponent.", [S`Try whole values of \(n\).`], S`systematic trial or a graph`),
  ]),

  ...hard([
    ["Rate for a goal", S`What annual rate, compounded monthly, turns \(10\,000\) dollars into \(15\,000\) dollars in \(6\) years?`,
      [S`<b>Periods.</b> \(n=72\); \((1+i)^{72}=1.5\).`,
        S`<b>Root.</b> \(1+i=1.5^{\frac1{72}}\approx1.005647\).`,
        S`<b>Annual.</b> \(r=12i\approx6.78\%\) compounded monthly.`],
      S`≈ 6.78% compounded monthly`,
      TL({ n: 72, unit: "months", flows: [{ at: 0, label: "10 000", up: false }, { at: 72, label: "15 000" }] })],
    ["Time in months", S`How long does it take \(2500\) dollars at \(3.6\%\) compounded monthly to reach \(3000\) dollars?`,
      [S`<b>Per period.</b> \(i=0.003\); need \(1.003^n\ge1.2\).`,
        S`<b>Trial.</b> \(1.003^{60}\approx1.1969\); \(1.003^{61}\approx1.2005\).`,
        S`<b>Answer.</b> \(61\) months, i.e. \(5\) years \(1\) month.`],
      S`61 months`],
  ], [
    q("hard", S`\(4000\) dollars grew to \(5000\) dollars in \(4\) years, compounded semi-annually. Find the annual rate (percent, two decimals).`, num(5.66, 0.011), "2[(1.25)^(1/8) − 1].", [S`\(\approx5.66\%\).`], S`\(5.66\)`),
    q("hard", S`How many whole years does it take money to triple at \(5\%\) compounded annually?`, num(23), "1.05²² ≈ 2.925; 1.05²³ ≈ 3.072.", [S`\(23\).`], S`\(23\)`),
    q("hard", S`Use the rule of 72 to estimate the doubling time at \(9\%\).`, num(8), "72 ÷ 9.", [S`\(8\) years.`], S`\(8\)`),
    q("hard", S`\(5000\) dollars at \(8\%\) compounded quarterly: after how many quarters is it first at least \(7000\) dollars?`, num(17), "1.02¹⁶ ≈ 1.373; 1.02¹⁷ ≈ 1.400.", [S`\(17\).`], S`\(17\)`),
    q("hard", S`Money doubles in exactly \(12\) years with annual compounding. Find the rate (percent, two decimals).`, num(5.95, 0.011), "2^(1/12) − 1.", [S`\(\approx5.95\%\).`], S`\(5.95\)`),
  ]),

  wrapUp({
    qas: [
      ["How do I find the rate?", "(1 + i)ⁿ = A/P, so 1 + i = (A/P)^(1/n); then r = m·i."],
      ["How do I find the time?", "Try whole n until P(1 + i)ⁿ reaches A, or read the graph."],
      ["Why round the time up?", "Interest is added only at the end of each period."],
      ["How do I convert periods to years?", "Divide n by m."],
      ["What is the rule of 72?", "Doubling time ≈ 72 ÷ rate (%), a quick estimate."],
    ],
    summary: [
      "i = (A/P)^(1/n) − 1; r = m·i.",
      "n by systematic trial or a graph.",
      "Round time up to whole periods.",
      "Rule of 72 for a quick check.",
    ],
    next: "8.5 adds regular deposits: annuities.",
  }),
];
