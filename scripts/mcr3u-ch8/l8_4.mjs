// MCR3U 8.4 — Annuities: Future Value: ordinary simple annuities, time lines, FV = R[(1 + i)ⁿ − 1]/i as a geometric
// series, finding the regular payment, interest earned, starting early
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, plane } from "./lib.mjs";
import { annFV, payFV, paymentsTo, fv, m } from "./fin.mjs";
import { tv } from "../mcr3u-extables.mjs";

export const TITLE = "8.4 Annuities: Future Value";
export const ID = "7b1dc952-c2bd-4d27-8805-009fdcae3866";
const S = String.raw;
const tl = [500 * 1.04 ** 3, 500 * 1.04 ** 2, 500 * 1.04, 500];
const early = annFV(2000, 0.06, 40), late = annFV(4000, 0.06, 20);
const nNeed = paymentsTo(20000, 300, 0.005);

export const blocks = () => [
  intro({
    icon: "🏦",
    title: "Annuities: Future Value",
    overview: S`An <strong>annuity</strong> is a series of equal payments made at regular intervals. In an <strong>ordinary simple annuity</strong> the payments are made at the end of each period and the compounding period equals the payment period. Each payment earns compound interest until the end, so the future value is a geometric series: \(FV=R+R(1+i)+\cdots+R(1+i)^{n-1}=\frac{R\left[(1+i)^n-1\right]}{i}\). In this lesson you will use time lines, calculate future values, and find the payment needed to reach a goal.`,
    goals: [
      "describe an ordinary simple annuity and draw its time line;",
      "explain why its future value is a geometric series;",
      "calculate FV = R[(1 + i)ⁿ − 1]/i;",
      "find the regular payment needed for a savings goal;",
      "compare total deposits with interest earned.",
    ],
    curriculum: "C2.5 (explain the meaning of the term annuity, and determine the relationships between ordinary simple annuities, geometric series and exponential growth), C2.7 (solve problems, using technology, that involve the amount, the present value and the regular payment of an ordinary simple annuity)",
    prior: [
      [S`Find \(1+2+4+\cdots+2^7\).`, "255."],
      [S`Evaluate \(\frac{1.05^{10}-1}{0.05}\) to 4 decimals.`, "12.5779."],
      ["How many months are in 4 years?", "48."],
    ],
    words: [
      ["Annuity", "equal payments at regular intervals", ""],
      ["Ordinary simple annuity", "payments at the end of each period; payment period = compounding period", ""],
      ["Regular payment R", "the amount of each payment", ""],
      ["Future value FV", "the total value at the end, including interest", ""],
    ],
  }),

  section("📌 The time line", S`
  ${table(["Payment", "Paid at end of period", "Earns interest for", "Value at the end"], [["1", "1", "n − 1 periods", "\\(R(1+i)^{n-1}\\)"], ["2", "2", "n − 2 periods", "\\(R(1+i)^{n-2}\\)"], ["…", "…", "…", "…"], ["n", "n", "0 periods", "\\(R\\)"]])}
  ${plane({ view: { xmin: 0, xmax: 5, ymin: 0, ymax: 650 }, segs: tl.map((v, k) => ({ pts: [[k + 0.7, 0], [k + 0.7, v], [k + 1.3, v], [k + 1.3, 0]], color: "violet" })), points: tl.map((v, k) => ({ x: k + 1, y: v, label: m(v) })), step: { x: 1, y: 100 }, xlabel: "payment number", ylabel: "value at the end" }, "four 500-dollar payments at 4%: the first has grown the most")}
  ${keyIdea(S`Read the values from the last payment back to the first: \(R, R(1+i), R(1+i)^2,\ldots\) — a geometric series with ratio \(1+i\). The sum formula gives \(FV=\frac{R[(1+i)^n-1]}{i}\).`)}`),

  section("📌 Explore", S`<p>Change the payment, rate and number of payments. Each bar is one payment's value at the end; the readout adds them.</p>`),

  widget("annuityFV", { init: [1000, 5, 10] }),

  section("📌 Watch out", watchOut([
    "The last payment earns no interest — it is made at the very end.",
    "Use i per payment period and n = number of payments.",
    "Total deposits = R × n; interest = FV − Rn.",
    "To find R, rearrange: R = FV·i / [(1 + i)ⁿ − 1].",
  ])),

  examples([
    ["Yearly deposits", "1000 dollars is deposited at the end of each year for 10 years at 5%/a compounded annually. Find the future value.",
      [S`<b>Meaning.</b> An annuity is a series of equal payments at regular times. Each payment grows for a different time, so together they form a geometric series.`,
        S`<b>Formula.</b> \(FV=\dfrac{R\left[(1+i)^n-1\right]}{i}\).`,
        S`<b>Identify.</b> \(R=1000\), \(i=0.05\), \(n=10\).`,
        S`<b>Calculate.</b> \(1.05^{10}\approx1.628895\), so \(FV\approx\frac{1000(0.628895)}{0.05}\approx${m(annFV(1000, 0.05, 10))}\).`,
        S`<b>Sense check.</b> The deposits total 10 000, so the rest, ${m(annFV(1000, 0.05, 10) - 10000)}, is interest ✓`],
      `${m(annFV(1000, 0.05, 10))} dollars`,
      plane({ view: { xmin: 0, xmax: 11, ymin: 0, ymax: 14000 }, points: Array.from({ length: 10 }, (_, k) => ({ x: k + 1, y: annFV(1000, 0.05, k + 1), label: k === 9 ? `(10, ${m(annFV(1000, 0.05, 10))})` : undefined, color: k === 9 ? "amber" : "blue" })), lines: [{ m: 1000, b: 0, color: "gray", dash: true }], step: { x: 1, y: 2000 }, xlabel: "year", ylabel: "balance" }, "dashed: deposits alone")],
    ["Adding the series directly", "Four payments of 500 dollars are made at the end of each year at 4%/a compounded annually. Find the future value by adding each payment's value.",
      [S`<b>How long does each payment grow?</b> The first payment is made after year 1, so it grows for 3 years. The last earns nothing.`,
        S`<b>Value of each at the end.</b> ${tv(["payment", "1st", "2nd", "3rd", "4th"], ["years growing", "3", "2", "1", "0"], ["value", m(tl[0]), m(tl[1]), m(tl[2]), m(tl[3])])}`,
        S`<b>Add.</b> \(${m(tl[3])}+${m(tl[2])}+${m(tl[1])}+${m(tl[0])}\approx${m(annFV(500, 0.04, 4))}\).`,
        S`<b>Check with the formula.</b> \(\frac{500(1.04^4-1)}{0.04}\approx${m(annFV(500, 0.04, 4))}\) ✓`],
      `${m(annFV(500, 0.04, 4))} dollars`,
      plane({ view: { xmin: 0, xmax: 5, ymin: 0, ymax: 650 }, segs: [tl[3], tl[2], tl[1], tl[0]].map((v, k) => ({ pts: [[k + 0.7, 0], [k + 0.7, v], [k + 1.3, v], [k + 1.3, 0]], color: "violet" })), points: [tl[3], tl[2], tl[1], tl[0]].map((v, k) => ({ x: k + 1, y: v, label: m(v) })), step: { x: 1, y: 100 }, xlabel: "years of growth + 1", ylabel: "value" })],
    ["Monthly deposits", "200 dollars is deposited at the end of every month for 5 years at 3.6%/a compounded monthly. Find the future value.",
      [S`<b>Convert.</b> \(i=\frac{0.036}{12}=0.003\) and \(n=5\times12=60\). Payments and compounding are both monthly.`,
        S`<b>Formula.</b> \(FV=\frac{200(1.003^{60}-1)}{0.003}\).`,
        S`<b>Calculate.</b> \(1.003^{60}\approx1.19691\), so \(FV\approx\frac{200(0.19691)}{0.003}\approx${m(annFV(200, 0.003, 60))}\).`,
        S`<b>Sense check.</b> It is a bit more than the \(200\times60=12\,000\) deposited ✓`],
      `${m(annFV(200, 0.003, 60))} dollars`,
      plane({ view: { xmin: 0, xmax: 66, ymin: 0, ymax: 15000 }, curves: [{ f: (t) => annFV(200, 0.003, t), a: 1, color: "violet" }], lines: [{ m: 200, b: 0, color: "gray", dash: true }], points: [{ x: 60, y: annFV(200, 0.003, 60), label: `(60, ${m(annFV(200, 0.003, 60))})`, color: "amber" }], step: { x: 6, y: 2000 }, xlabel: "months", ylabel: "balance" }, "dashed: deposits alone")],
    ["The payment for a goal", "What quarterly deposit, at 4.4%/a compounded quarterly, grows to 20 000 dollars in 8 years?",
      [S`<b>Convert.</b> \(i=\frac{0.044}4=0.011\) and \(n=8\times4=32\).`,
        S`<b>Rearrange.</b> From \(FV=\frac{R\left[(1+i)^n-1\right]}i\), we get \(R=\frac{FV\cdot i}{(1+i)^n-1}\).`,
        S`<b>Substitute.</b> \(R=\frac{20\,000(0.011)}{1.011^{32}-1}\).`,
        S`<b>Calculate.</b> \(R\approx${m(payFV(20000, 0.011, 32))}\).`,
        S`<b>Check.</b> \(\frac{${m(payFV(20000, 0.011, 32))}(1.011^{32}-1)}{0.011}\approx20\,000\) ✓`],
      `${m(payFV(20000, 0.011, 32))} dollars per quarter`,
      plane({ view: { xmin: 0, xmax: 9, ymin: 0, ymax: 22000 }, curves: [{ f: (t) => annFV(payFV(20000, 0.011, 32), 0.011, 4 * t), a: 0.25, b: 8, color: "violet" }], lines: [{ m: 0, b: 20000, color: "amber", dash: true }], points: [{ x: 8, y: 20000, label: "(8, 20 000)", color: "amber" }], step: { x: 1, y: 2000 }, xlabel: "years", ylabel: "balance" })],
    ["Deposits vs interest", "For 200 dollars at the end of every month for 5 years at 3.6%/a compounded monthly, how much was deposited and how much interest was earned?",
      [S`<b>Deposits.</b> \(200\times60=12\,000\).`,
        S`<b>Future value.</b> From the formula, it is about ${m(annFV(200, 0.003, 60))} dollars.`,
        S`<b>Interest.</b> Everything above the deposits is interest: \(${m(annFV(200, 0.003, 60))}-12\,000\approx${m(annFV(200, 0.003, 60) - 12000)}\).`,
        S`<b>Meaning.</b> On the graph, the interest is the gap between the curve and the dashed deposit line. The gap widens over time ✓`],
      `${m(annFV(200, 0.003, 60) - 12000)} dollars of interest`,
      plane({ view: { xmin: 0, xmax: 66, ymin: 0, ymax: 15000 }, curves: [{ f: (t) => annFV(200, 0.003, t), a: 1, color: "violet" }], lines: [{ m: 200, b: 0, color: "gray", dash: true }], points: [{ x: 60, y: 12000, label: "deposits 12 000" }, { x: 60, y: annFV(200, 0.003, 60), label: "with interest", color: "amber" }], step: { x: 6, y: 2000 }, xlabel: "months", ylabel: "dollars" })],
  ]),

  practice([
    q("FV", "Find the future value of 500 dollars deposited at the end of each year for 8 years at 6%/a compounded annually (dollars).", num(+m(annFV(500, 0.06, 8)), 0.02),
      "R[(1 + i)ⁿ − 1]/i.", [S`\(\frac{500(1.06^8-1)}{0.06}\).`], m(annFV(500, 0.06, 8))),
    q("FV", "Find the future value of 100 dollars deposited at the end of each month for 2 years at 6%/a compounded monthly (dollars).", num(+m(annFV(100, 0.005, 24)), 0.02),
      "i = 0.005, n = 24.", [S`\(\frac{100(1.005^{24}-1)}{0.005}\).`], m(annFV(100, 0.005, 24))),
    q("deposits", "How much is deposited in total by paying 150 dollars a month for 4 years (dollars)?", num(7200),
      "R × n.", [S`\(150\times48\).`], "7200"),
    q("payment", "What yearly deposit at 5%/a compounded annually grows to 10 000 dollars in 5 years (dollars)?", num(+m(payFV(10000, 0.05, 5)), 0.02),
      "R = FV·i/[(1 + i)ⁿ − 1].", [S`\(\frac{10000(0.05)}{1.05^5-1}\).`], m(payFV(10000, 0.05, 5))),
    q("definition", "In an ordinary simple annuity, …", choice(["payments are made at the end of each period and the payment period equals the compounding period", "payments are made at the start of each period", "payments change every period", "interest is simple, not compound"], 0),
      "Ordinary = end of period; simple = matching periods.", ["Definition."], "end of period, matching periods"),
  ]),

  ...hard([
    ["Starting early", "Ana saves 2000 dollars a year for 40 years; Ben saves 4000 dollars a year for 20 years. Both earn 6%/a compounded annually and stop at the same age. Who has more?",
      [`Ana: 2000(1.06⁴⁰ − 1)/0.06 ≈ ${m(early)}.`, `Ben: 4000(1.06²⁰ − 1)/0.06 ≈ ${m(late)}.`, "Both deposited 80 000 dollars."],
      `Ana, by about ${m(early - late)} dollars`,
      plane({ view: { xmin: 0, xmax: 41, ymin: 0, ymax: 340000 }, curves: [{ f: (t) => annFV(2000, 0.06, t), a: 0, b: 40, color: "violet" }, { f: (t) => (t <= 20 ? 0 : annFV(4000, 0.06, t - 20)), a: 0, b: 40, color: "amber" }], step: { x: 5, y: 50000 }, xlabel: "years", ylabel: "savings" })],
    ["How many payments?", "How many monthly deposits of 300 dollars at 6%/a compounded monthly are needed to reach 20 000 dollars?",
      [S`Find the first n with \(\frac{300(1.005^n-1)}{0.005}\ge20000\).`, `Guess and check: n = ${nNeed}.`],
      `${nNeed} deposits`],
  ], [
    q("hard", "Find the future value of 250 dollars deposited every 3 months for 10 years at 5%/a compounded quarterly (dollars).", num(+m(annFV(250, 0.0125, 40)), 0.02),
      "i = 0.0125, n = 40.", [S`\(\frac{250(1.0125^{40}-1)}{0.0125}\).`], m(annFV(250, 0.0125, 40))),
    q("hard", "What monthly deposit at 4.8%/a compounded monthly grows to 50 000 dollars in 10 years (dollars)?", num(+m(payFV(50000, 0.004, 120)), 0.02),
      "i = 0.004, n = 120.", [S`\(\frac{50000(0.004)}{1.004^{120}-1}\).`], m(payFV(50000, 0.004, 120))),
    q("hard", "How many yearly deposits of 1000 dollars at 8%/a compounded annually are needed for the total to exceed 25 000 dollars?", num(paymentsTo(25000.01, 1000, 0.08)),
      "Guess and check n.", ["Compare FV for consecutive n."], String(paymentsTo(25000.01, 1000, 0.08))),
  ]),

  wrapUp({
    qas: [
      ["Why is the future value a geometric series?", "Each payment grows for one fewer period than the one before, so the values differ by a factor 1 + i."],
      ["Why doesn't the last payment earn interest?", "It is made at the end of the last period, exactly when the value is measured."],
      ["How do I find the payment for a goal?", "Rearrange the formula: R = FV·i / [(1 + i)ⁿ − 1]."],
      ["Why does starting early matter so much?", "Early payments have many more periods to compound."],
      ["Do payment and compounding periods have to match?", "In this course, yes — that is what 'simple' annuity means."],
    ],
    summary: [
      "FV = R[(1 + i)ⁿ − 1]/i.",
      "Geometric series with ratio 1 + i.",
      "Interest = FV − Rn.",
      "R = FV·i/[(1 + i)ⁿ − 1].",
    ],
    next: "8.5 finds the present value of an annuity.",
  }),
];
