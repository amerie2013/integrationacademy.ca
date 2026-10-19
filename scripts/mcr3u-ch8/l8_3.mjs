// MCR3U 8.3 — Compound Interest: Present Value: PV = A(1 + i)⁻ⁿ, comparing offers, finding the number of periods
// by guess and check, doubling time
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, plane } from "./lib.mjs";
import { pv, fv, m, pct, periodsTo } from "./fin.mjs";

export const TITLE = "8.3 Compound Interest: Present Value";
export const ID = "04a81e2d-9ddc-4a17-99aa-101e7586d32e";
const S = String.raw;
const debt = pv(3000, 0.06, 2) + pv(4000, 0.06, 5);
const qN = periodsTo(2000 / 1500, 0.012);

export const blocks = () => [
  intro({
    icon: "⏪",
    title: "Compound Interest: Present Value",
    overview: S`The <strong>present value</strong> of a future amount is the principal you would need to invest today, at a given compound rate, to reach that amount. Solving \(A=P(1+i)^n\) for \(P\) gives \(PV=\frac{A}{(1+i)^n}=A(1+i)^{-n}\). In this lesson you will find present values, compare payment offers made at different times, and find how many compounding periods a goal takes — by guess and check, with a table, or with a graph.`,
    goals: [
      "calculate the present value PV = A(1 + i)⁻ⁿ;",
      "explain why present value is less than future value;",
      "compare amounts paid at different times;",
      "find the number of compounding periods n by guess and check or a graph;",
      "estimate doubling time.",
    ],
    curriculum: "C2.3 (solve problems involving the principal P using A = P(1 + i)ⁿ), C2.4 (determine the number of compounding periods n using A = P(1 + i)ⁿ, describe strategies such as guess and check, the power of a power rule, or graphs, and solve related problems)",
    prior: [
      [S`Evaluate \(5000\div1.05^3\) to the cent.`, "4319.19."],
      [S`Solve \(2^n=64\).`, "n = 6."],
      [S`Write \(\frac1{x^4}\) with a negative exponent.`, S`\(x^{-4}\).`],
    ],
    words: [
      ["Present value PV", "the amount needed now", ""],
      ["Future value FV (or A)", "the amount at a later time", ""],
      ["Discounting", "moving an amount back in time: divide by (1 + i)ⁿ", ""],
      ["Doubling time", "the time for an investment to double", ""],
    ],
  }),

  section("📌 Moving money through time", S`
  ${table(["Direction", "Operation", "Formula"], [["forward (future value)", "multiply by \\((1+i)^n\\)", "\\(FV=PV(1+i)^n\\)"], ["back (present value)", "divide by \\((1+i)^n\\)", "\\(PV=FV(1+i)^{-n}\\)"]])}
  ${plane({ view: { xmin: 0, xmax: 6, ymin: 0, ymax: 9000 }, curves: [{ f: (t) => pv(8000, 0.04, 5) * 1.04 ** t, a: 0, b: 5, color: "violet" }], points: [{ x: 0, y: pv(8000, 0.04, 5), label: `PV ${m(pv(8000, 0.04, 5))}` }, { x: 5, y: 8000, label: "FV 8000" }], step: { x: 1, y: 1000 }, xlabel: "years", ylabel: "value" }, "to have 8000 dollars in 5 years at 4%/a, invest about 6575 now")}
  ${keyIdea(S`To compare amounts paid at different times, move them all to the same date — usually today — using present value.`)}`),

  section("📌 Explore", S`<p>Set a goal, a rate and a time. Watch the present value shrink when the rate or the time increases.</p>`),

  widget("presentValueLab", { init: [10000, 5, 8] }),

  section("📌 Watch out", watchOut([
    "Use the rate per period and the number of periods, just as for future value.",
    "Present value is always smaller than future value (for a positive rate).",
    "When finding n, the answer is usually rounded UP to the next whole period.",
    "Keep (1 + i)ⁿ unrounded until the final answer.",
  ])),

  examples([
    ["Present value, annual", "How much must be invested now at 4%/a compounded annually to have 8000 dollars in 5 years?",
      [S`\(PV=8000(1.04)^{-5}\).`],
      `${m(pv(8000, 0.04, 5))} dollars`],
    ["Present value, monthly", "How much must be invested now at 6%/a compounded monthly to have 12 000 dollars in 3 years?",
      [S`\(i=0.005\), \(n=36\): \(PV=12000(1.005)^{-36}\).`],
      `${m(pv(12000, 0.005, 36))} dollars`],
    ["Finding n by guess and check", "How many years does it take 2500 dollars to grow to 4000 dollars at 5%/a compounded annually?",
      [S`Need \(1.05^n\ge1.6\).`, S`\(1.05^9\approx1.551\), \(1.05^{10}\approx1.629\).`],
      "10 years"],
    ["Doubling time", "About how long does it take money to double at 7.2%/a compounded annually?",
      [S`\(1.072^9\approx1.87\), \(1.072^{10}\approx2.004\).`, "This matches the 'rule of 72': 72 ÷ 7.2 = 10."],
      "about 10 years",
      plane({ view: { xmin: 0, xmax: 12, ymin: 0, ymax: 2.4 }, curves: [{ f: (t) => 1.072 ** t, a: 0, color: "violet" }], lines: [{ m: 0, b: 2, color: "amber", dash: true }], step: { x: 1, y: 0.4 }, xlabel: "years", ylabel: "growth factor" })],
    ["Comparing offers", "You can receive 5000 dollars now or 6000 dollars in 3 years. Money earns 5%/a compounded annually. Which is worth more?",
      [S`PV of 6000: \(6000(1.05)^{-3}\approx${m(pv(6000, 0.05, 3))}\).`],
      "the 6000 dollars in 3 years (worth more today)"],
  ]),

  practice([
    q("PV", "Find the present value of 5000 dollars due in 4 years at 3%/a compounded annually (dollars).", num(+m(pv(5000, 0.03, 4)), 0.02),
      "5000(1.03)⁻⁴.", [S`\(\div1.03^4\).`], m(pv(5000, 0.03, 4))),
    q("PV", "Find the present value of 10 000 dollars due in 10 years at 6%/a compounded semi-annually (dollars).", num(+m(pv(10000, 0.03, 20)), 0.02),
      "i = 0.03, n = 20.", [S`\(10000(1.03)^{-20}\).`], m(pv(10000, 0.03, 20))),
    q("doubling", "How many whole years does it take money to double at 9%/a compounded annually?", num(periodsTo(2, 0.09)),
      "Find the first n with 1.09ⁿ ≥ 2.", [S`\(1.09^8\approx1.99\), \(1.09^9\approx2.17\).`], String(periodsTo(2, 0.09))),
    q("compare", "For a positive interest rate, the present value of a future amount is …", choice(["smaller than the future amount", "larger than the future amount", "equal to the future amount", "always half the future amount"], 0),
      "You add interest to reach the future amount.", ["PV = FV ÷ (1 + i)ⁿ, and (1 + i)ⁿ > 1."], "smaller"),
    q("PV", "Find the present value of 2000 dollars due in 2 years at 12%/a compounded monthly (dollars).", num(+m(pv(2000, 0.01, 24)), 0.02),
      "i = 0.01, n = 24.", [S`\(2000(1.01)^{-24}\).`], m(pv(2000, 0.01, 24))),
  ]),

  ...hard([
    ["Paying two debts early", "You owe 3000 dollars in 2 years and 4000 dollars in 5 years. Money earns 6%/a compounded annually. What single payment today settles both?",
      [S`\(3000(1.06)^{-2}+4000(1.06)^{-5}\).`],
      `${m(debt)} dollars`,
      plane({ view: { xmin: 0, xmax: 6, ymin: 0, ymax: 4500 }, points: [{ x: 0, y: debt, label: `today ${m(debt)}` }, { x: 2, y: 3000, label: "3000" }, { x: 5, y: 4000, label: "4000" }], step: { x: 1, y: 500 }, xlabel: "years", ylabel: "dollars" })],
    ["Quarters to a goal", "How long does it take 1500 dollars to grow to 2000 dollars at 4.8%/a compounded quarterly?",
      [S`\(i=0.012\): need \(1.012^n\ge\frac43\).`, `Guess and check: n = ${qN}.`],
      `${qN} quarters (${(qN / 4).toFixed(2)} years)`],
  ], [
    q("hard", "How much must be invested now at 4.2%/a compounded monthly to have 25 000 dollars in 18 years (dollars)?", num(+m(pv(25000, 0.0035, 216)), 0.02),
      "i = 0.0035, n = 216.", [S`\(25000(1.0035)^{-216}\).`], m(pv(25000, 0.0035, 216))),
    q("hard", "How many quarters does it take money to triple at 6%/a compounded quarterly?", num(periodsTo(3, 0.015)),
      "1.015ⁿ ≥ 3.", ["Guess and check."], String(periodsTo(3, 0.015))),
    q("hard", "4000 dollars becomes 5000 dollars in 5 years with annual compounding. Find the annual rate (%, 2 decimals).", num(+pct(1.25 ** 0.2 - 1), 0.01),
      "1.25^(1/5) − 1.", [S`\(1.25^{0.2}\approx1.0456\).`], pct(1.25 ** 0.2 - 1)),
  ]),

  wrapUp({
    qas: [
      ["What does present value mean?", "The amount that, invested today at the given rate, grows to the future amount."],
      ["Why divide by (1 + i)ⁿ?", "It undoes n periods of growth."],
      ["How do I compare payments at different times?", "Bring them to the same date with present value, then compare."],
      ["How do I find n without logarithms?", "Guess and check powers of (1 + i), use a table, or read a graph."],
      ["What is the rule of 72?", "Doubling time ≈ 72 ÷ (annual rate in %) for annual compounding."],
    ],
    summary: [
      "PV = A(1 + i)⁻ⁿ.",
      "PV < FV for a positive rate.",
      "Compare offers at the same date.",
      "Find n by guess and check; round up.",
    ],
    next: "8.4 studies regular payments: the future value of an annuity.",
  }),
];
