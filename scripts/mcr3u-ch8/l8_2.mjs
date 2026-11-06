// MCR3U 8.2 — Compound Interest: Future Value: A = P(1 + i)ⁿ, compounding periods, comparing frequencies,
// compound interest as a geometric sequence and exponential growth, finding the rate
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, plane } from "./lib.mjs";
import { fv, m, pct } from "./fin.mjs";
import { tv } from "../mcr3u-extables.mjs";

export const TITLE = "8.2 Compound Interest: Future Value";
export const ID = "108a985c-79f8-4788-8b69-53d23457f579";
const S = String.raw;
const e3 = [1, 4, 12].map((k) => fv(10000, 0.06 / k, 10 * k));
const hB = fv(10000, 0.044 / 12, 60), hA = fv(10000, 0.045, 5);

export const blocks = () => [
  intro({
    icon: "📈",
    title: "Compound Interest: Future Value",
    overview: S`With <strong>compound interest</strong>, interest is added to the principal at the end of each compounding period, and from then on it earns interest too. After \(n\) periods at a rate \(i\) per period the amount (future value) is \(A=P(1+i)^n\). In this lesson you will find \(i\) and \(n\) from an annual rate and a compounding frequency, calculate future values, compare frequencies, and connect compound interest to geometric sequences and exponential growth.`,
    goals: [
      "find the rate per period i and the number of periods n;",
      "calculate the future value A = P(1 + i)ⁿ and the interest earned;",
      "compare different compounding frequencies;",
      "connect compound interest to geometric sequences and exponential functions;",
      "find an unknown rate from P, A and n.",
    ],
    curriculum: "C2.2 (make and describe connections between compound interest, geometric sequences and exponential growth), C2.3 (solve problems that involve the calculation of the amount A, the principal P or the interest rate per compounding period i, using A = P(1 + i)ⁿ)",
    prior: [
      [S`Evaluate \(1000(1.05)^3\) to the cent.`, "1157.63."],
      ["How many quarters are in 6 years?", "24."],
      ["What is the ratio of the geometric sequence 200, 210, 220.5, …?", "1.05."],
    ],
    words: [
      ["Compounding period", "how often interest is added: annually, semi-annually, quarterly, monthly", ""],
      ["i", "rate per period = annual rate ÷ periods per year", ""],
      ["n", "number of periods = years × periods per year", ""],
      ["Future value A", "\\(A=P(1+i)^n\\)", ""],
    ],
  }),

  section("📌 Rate per period and number of periods", S`
  ${table(["Compounded", "Periods per year", "6%/a for 4 years: i", "n"], [["annually", "1", "0.06", "4"], ["semi-annually", "2", "0.03", "8"], ["quarterly", "4", "0.015", "16"], ["monthly", "12", "0.005", "48"]])}
  ${plane({ view: { xmin: 0, xmax: 21, ymin: 0, ymax: 3500 }, curves: [{ f: (t) => 1000 * 1.06 ** t, a: 0, color: "violet" }], lines: [{ m: 60, b: 1000, color: "green", dash: true }], step: { x: 2, y: 500 }, xlabel: "years", ylabel: "amount" }, "1000 dollars at 6%/a: compound (violet, exponential) vs simple (green, linear)")}
  ${keyIdea(S`Year-end amounts with annual compounding form a geometric sequence \(P(1+i),P(1+i)^2,\ldots\) with ratio \(1+i\): compound interest is exponential growth.`)}`),

  section("📌 Explore", S`<p>Choose a compounding frequency and watch i, n and the amount change. How much difference does monthly compounding make compared with annual?</p>`),

  widget("compoundLab", { init: [5000, 4.8, 10] }),

  section("📌 Watch out", watchOut([
    "Divide the annual rate by the number of periods per year; multiply the years by it.",
    "Use the full value of (1 + i)ⁿ — do not round i or the power early.",
    "A is the total; the interest earned is A − P.",
    "More frequent compounding gives a little more, not dramatically more.",
  ])),

  examples([
    ["Annual compounding", "Find the future value of 3000 dollars at 5%/a compounded annually for 6 years.",
      [S`<b>Idea.</b> Compound interest earns interest on interest, so each period multiplies the balance by \(1+i\).`,
        S`<b>Formula.</b> \(A=P(1+i)^n\), with \(i\) the rate per period and \(n\) the number of periods.`,
        S`<b>Identify.</b> \(P=3000\), \(i=0.05\), \(n=6\).`,
        S`<b>Substitute.</b> \(A=3000(1.05)^6\approx3000(1.340096)\).`,
        S`<b>Sense check.</b> Simple interest would give \(3000+6(150)=3900\). Compound must be more, and \(${m(fv(3000, 0.05, 6))}>3900\) ✓`],
      `${m(fv(3000, 0.05, 6))} dollars`,
      plane({ view: { xmin: 0, xmax: 7, ymin: 2800, ymax: 4300 }, curves: [{ f: (t) => 3000 * 1.05 ** t, a: 0, color: "violet" }], lines: [{ m: 150, b: 3000, color: "gray", dash: true }], points: [{ x: 6, y: fv(3000, 0.05, 6), label: `(6, ${m(fv(3000, 0.05, 6))})`, color: "amber" }], step: { x: 1, y: 200 }, xlabel: "years", ylabel: "A" }, "violet compound, dashed simple")],
    ["Monthly compounding", "Find the future value of 3000 dollars at 5%/a compounded monthly for 6 years.",
      [S`<b>Convert to periods.</b> The rate per month is \(i=\frac{0.05}{12}\). The number of months is \(n=6\times12=72\).`,
        S`<b>Substitute.</b> \(A=3000\left(1+\frac{0.05}{12}\right)^{72}\).`,
        S`<b>Calculate.</b> Keep \(\frac{0.05}{12}\) unrounded in the calculator. Rounding it early can change the answer by dollars.`,
        S`<b>Compare.</b> Annual compounding gave ${m(fv(3000, 0.05, 6))} dollars. Monthly gives more, since interest starts earning interest sooner ✓`],
      `${m(fv(3000, 0.05 / 12, 72))} dollars`,
      plane({ view: { xmin: 0, xmax: 7, ymin: 2800, ymax: 4300 }, curves: [{ f: (t) => 3000 * (1 + 0.05 / 12) ** (12 * t), a: 0, color: "violet" }], points: [{ x: 6, y: fv(3000, 0.05 / 12, 72), label: `(6, ${m(fv(3000, 0.05 / 12, 72))})`, color: "amber" }], step: { x: 1, y: 200 }, xlabel: "years", ylabel: "A" })],
    ["Comparing frequencies", "10 000 dollars is invested at 6%/a for 10 years. Compare annual, quarterly and monthly compounding.",
      [S`<b>Set up each case.</b> Divide the rate and multiply the years by the number of periods per year. ${tv(["frequency", "\\(i\\)", "\\(n\\)", "\\(A\\) (dollars)"], ["annual", "0.06", "10", m(e3[0])], ["quarterly", "0.015", "40", m(e3[1])], ["monthly", "0.005", "120", m(e3[2])])}`,
        S`<b>Sample calculation.</b> Quarterly: \(10\,000(1.015)^{40}\approx${m(e3[1])}\).`,
        S`<b>Pattern.</b> More frequent compounding gives a larger amount, because interest is added sooner.`,
        S`<b>Size of the effect.</b> Monthly beats annual by ${m(e3[2] - e3[0])} dollars. The principal and the stated rate are unchanged.`],
      `${m(e3[0])}, ${m(e3[1])}, ${m(e3[2])} dollars`,
      plane({ view: { xmin: 0, xmax: 4, ymin: 17000, ymax: 18500 }, segs: e3.map((v, k) => ({ pts: [[k + 0.7, 17000], [k + 0.7, v], [k + 1.3, v], [k + 1.3, 17000]], color: "violet" })), points: e3.map((v, k) => ({ x: k + 1, y: v, label: m(v) })), step: { x: 1, y: 250 }, xlabel: "annual · quarterly · monthly", ylabel: "amount" })],
    ["A geometric sequence", "Write the year-end amounts of 2000 dollars at 4%/a compounded annually as a sequence, and give its type.",
      [S`<b>Build.</b> Each year multiplies by 1.04. ${tv(["\\(n\\)", "1", "2", "3"], ["amount", "2080", "2163.20", "2249.73"], ["interest earned", "80", "83.20", "86.53"])}`,
        S`<b>Test.</b> The interest grows, so it is not arithmetic. The ratio is constant: \(\frac{2163.20}{2080}=1.04\).`,
        S`<b>General term.</b> \(t_n=2000(1.04)^n\).`,
        S`<b>Check.</b> \(2000(1.04)^3\approx2249.73\) ✓`],
      "geometric, r = 1.04",
      plane({ view: { xmin: 0, xmax: 6, ymin: 1900, ymax: 2550 }, curves: [{ f: (t) => 2000 * 1.04 ** t, a: 0, color: "gray" }], points: [1, 2, 3, 4, 5].map((n) => ({ x: n, y: 2000 * 1.04 ** n, label: n === 3 ? "(3, 2249.73)" : undefined, color: n === 3 ? "amber" : "blue" })), step: { x: 1, y: 100 }, xlabel: "year n", ylabel: "amount" })],
    ["Finding the rate", "2000 dollars grows to 2433.31 dollars in 5 years with annual compounding. Find the rate.",
      [S`<b>Set up.</b> \(2433.31=2000(1+i)^5\).`,
        S`<b>Isolate the power.</b> \((1+i)^5=\frac{2433.31}{2000}=1.216655\).`,
        S`<b>Undo the exponent.</b> Raise both sides to \(\frac15\): \(1+i=1.216655^{1/5}\approx1.04\).`,
        S`<b>Solve.</b> \(i\approx0.04\), which is 4%/a.`,
        S`<b>Check.</b> \(2000(1.04)^5\approx2433.31\) ✓`],
      "4%/a",
      plane({ view: { xmin: 0, xmax: 6, ymin: 1900, ymax: 2600 }, curves: [{ f: (t) => 2000 * 1.04 ** t, a: 0, color: "violet" }], points: [{ x: 0, y: 2000, label: "(0, 2000)" }, { x: 5, y: 2433.31, label: "(5, 2433.31)", color: "amber" }], step: { x: 1, y: 100 }, xlabel: "years", ylabel: "A" })],
  ]),

  practice([
    q("annual", "Find the future value of 1000 dollars at 4%/a compounded annually for 5 years (dollars).", num(+m(fv(1000, 0.04, 5)), 0.02),
      "1000(1.04)⁵.", [S`\(1.04^5\approx1.21665\).`], m(fv(1000, 0.04, 5))),
    q("semi-annual", "Find the future value of 2500 dollars at 6%/a compounded semi-annually for 3 years (dollars).", num(+m(fv(2500, 0.03, 6)), 0.02),
      "i = 0.03, n = 6.", [S`\(2500(1.03)^6\).`], m(fv(2500, 0.03, 6))),
    q("periods", "How many compounding periods are there in 7 years at 8%/a compounded quarterly?", num(28),
      "7 × 4.", ["n = 28."], "28"),
    q("interest", "Find the interest earned on 5000 dollars at 3%/a compounded annually for 10 years (dollars).", num(+m(fv(5000, 0.03, 10) - 5000), 0.02),
      "A − P.", [S`\(5000(1.03)^{10}-5000\).`], m(fv(5000, 0.03, 10) - 5000)),
    q("pattern", "The year-end amounts with annual compound interest form which kind of sequence?", choice(["geometric", "arithmetic", "neither", "constant"], 0),
      "Each year multiplies by 1 + i.", ["Constant ratio."], "geometric"),
  ]),

  ...hard([
    ["Finding an annual rate", `5000 dollars grows to ${m(fv(5000, 0.025, 8))} dollars in 4 years, compounded semi-annually. Find the annual rate.`,
      [S`\(n=8\): \((1+i)^8=\frac{${m(fv(5000, 0.025, 8))}}{5000}\approx${(1.025 ** 8).toFixed(6)}\Rightarrow1+i\approx1.025\).`, "i = 2.5% per half-year."],
      "5%/a compounded semi-annually"],
    ["Comparing two banks", "Bank A offers 4.5%/a compounded annually; Bank B offers 4.4%/a compounded monthly. Which gives more on 10 000 dollars over 5 years?",
      [`A: 10 000(1.045)⁵ ≈ ${m(hA)}.`, `B: 10 000(1 + 0.044/12)⁶⁰ ≈ ${m(hB)}.`],
      `${hA > hB ? "Bank A" : "Bank B"}, by ${m(Math.abs(hA - hB))} dollars`,
      plane({ view: { xmin: 0, xmax: 5.5, ymin: 9800, ymax: 12800 }, curves: [{ f: (t) => 10000 * 1.045 ** t, a: 0, color: "violet" }, { f: (t) => 10000 * (1 + 0.044 / 12) ** (12 * t), a: 0, color: "amber" }], step: { x: 1, y: 500 }, xlabel: "years", ylabel: "amount" })],
  ], [
    q("hard", "Find the future value of 750 dollars at 3.6%/a compounded monthly for 4 years (dollars).", num(+m(fv(750, 0.003, 48)), 0.02),
      "i = 0.003, n = 48.", [S`\(750(1.003)^{48}\).`], m(fv(750, 0.003, 48))),
    q("hard", "What annual rate (compounded annually) makes 1000 dollars grow to 1500 dollars in 6 years? Give the % to 2 decimals.", num(+pct(1.5 ** (1 / 6) - 1), 0.01),
      "(1.5)^(1/6) − 1.", [S`\(1.5^{1/6}\approx1.0699\).`], pct(1.5 ** (1 / 6) - 1)),
    q("hard", "Find the interest earned on 4000 dollars at 5%/a compounded quarterly for 8 years (dollars).", num(+m(fv(4000, 0.0125, 32) - 4000), 0.02),
      "i = 0.0125, n = 32.", [S`\(4000(1.0125)^{32}-4000\).`], m(fv(4000, 0.0125, 32) - 4000)),
  ]),

  wrapUp({
    qas: [
      ["What makes compound interest different?", "Interest is added to the principal each period and then earns interest itself."],
      ["How do I find i and n?", "i = annual rate ÷ periods per year; n = years × periods per year."],
      ["Does more frequent compounding always give more?", "Yes, for the same annual rate — but the extra gets smaller and smaller."],
      ["How is this connected to exponential functions?", "A = P(1 + i)ⁿ is exponential in n with base 1 + i."],
      ["How do I find an unknown rate?", "Divide A by P, take the n-th root, and subtract 1."],
    ],
    summary: [
      "A = P(1 + i)ⁿ.",
      "i = annual rate / periods per year.",
      "Amounts form a geometric sequence.",
      "Interest = A − P.",
    ],
    next: "8.3 works backwards to find present value.",
  }),
];
