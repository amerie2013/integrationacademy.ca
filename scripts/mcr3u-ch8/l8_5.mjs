// MCR3U 8.5 — Annuities: Present Value: PV = R[1 − (1 + i)⁻ⁿ]/i, funding withdrawals, loan payments,
// total interest on a loan, comparing a lump sum with a stream of payments
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, plane } from "./lib.mjs";
import { annPV, payPV, paymentsToRepay, pv, m } from "./fin.mjs";

export const TITLE = "8.5 Annuities: Present Value";
export const ID = "5c3e0001-0001-4001-8001-000000000805";
const S = String.raw;
const carR = payPV(18000, 0.0055, 60);
const lotto = annPV(60000, 0.045, 25);
const retire = annPV(3000, 0.004, 240);
const nLoan = paymentsToRepay(10000, 300, 0.0075);

export const blocks = () => [
  intro({
    icon: "🎓",
    title: "Annuities: Present Value",
    overview: S`The <strong>present value of an annuity</strong> is the single amount that, invested today, can fund a series of equal payments — or, for a loan, the amount borrowed that equal payments repay. Adding the present values of all the payments gives a geometric series: \(PV=R(1+i)^{-1}+R(1+i)^{-2}+\cdots+R(1+i)^{-n}=\frac{R\left[1-(1+i)^{-n}\right]}{i}\). In this lesson you will fund withdrawals, find loan payments and total interest, and compare a lump sum with a stream of payments.`,
    goals: [
      "explain the present value of an annuity as a sum of present values;",
      "calculate PV = R[1 − (1 + i)⁻ⁿ]/i;",
      "find the regular payment on a loan;",
      "find the total interest paid on a loan;",
      "compare a lump sum with regular payments.",
    ],
    curriculum: "C2.5 (determine the relationships between ordinary simple annuities, geometric series and exponential growth), C2.7 (solve problems, using technology, that involve the amount, the present value and the regular payment of an ordinary simple annuity)",
    prior: [
      [S`Find the present value of 1000 dollars due in 3 years at 5%/a compounded annually.`, "863.84."],
      [S`Evaluate \(\frac{1-1.06^{-5}}{0.06}\) to 4 decimals.`, "4.2124."],
      ["How many monthly payments are made in 5 years?", "60."],
    ],
    words: [
      ["Present value of an annuity", "lump sum now that equals all the payments", ""],
      ["Loan principal", "the amount borrowed = PV of the payments", ""],
      ["Regular payment", "\\(R=\\frac{PV\\cdot i}{1-(1+i)^{-n}}\\)", ""],
      ["Total interest", "\\(Rn-PV\\)", ""],
    ],
  }),

  section("📌 Future value vs present value of an annuity", S`
  ${table(["Question", "Use"], [["How much will regular deposits grow to?", "\\(FV=\\frac{R[(1+i)^n-1]}{i}\\)"], ["How much is needed now to fund regular withdrawals?", "\\(PV=\\frac{R[1-(1+i)^{-n}]}{i}\\)"], ["What payment repays a loan?", "\\(R=\\frac{PV\\cdot i}{1-(1+i)^{-n}}\\)"]])}
  ${plane({ view: { xmin: 0, xmax: 7, ymin: 0, ymax: 900 }, segs: [1, 2, 3, 4, 5, 6].map((k) => ({ pts: [[k - 0.3, 0], [k - 0.3, pv(800, 0.05, k)], [k + 0.3, pv(800, 0.05, k)], [k + 0.3, 0]], color: "violet" })), points: [1, 6].map((k) => ({ x: k, y: pv(800, 0.05, k), label: m(pv(800, 0.05, k)) })), step: { x: 1, y: 100 }, xlabel: "payment number", ylabel: "value today" }, "each 800-dollar payment is worth less today the later it comes")}
  ${keyIdea(S`A loan is an annuity seen from the lender's side: the amount borrowed is the present value of all the payments.`)}`),

  section("📌 Explore", S`<p>Set the withdrawal (or loan payment), the rate and the time. The balance falls to zero exactly at the last payment.</p>`),

  widget("annuityPV", { init: [500, 6, 5] }),

  section("📌 Watch out", watchOut([
    "PV of an annuity uses a negative exponent: (1 + i)⁻ⁿ.",
    "The total of the payments is more than the PV — the difference is interest.",
    "Use the rate per payment period and the number of payments.",
    "Round the payment to the cent only at the end.",
  ])),

  examples([
    ["Funding withdrawals", "How much must be invested now at 5%/a compounded annually to withdraw 800 dollars at the end of each year for 6 years?",
      [S`\(PV=\frac{800(1-1.05^{-6})}{0.05}\).`],
      `${m(annPV(800, 0.05, 6))} dollars`],
    ["A scholarship", "A fund will pay 2500 dollars every 6 months for 4 years, starting 6 months from now. Money earns 4%/a compounded semi-annually. How much must be in the fund today?",
      [S`\(i=0.02\), \(n=8\): \(PV=\frac{2500(1-1.02^{-8})}{0.02}\).`],
      `${m(annPV(2500, 0.02, 8))} dollars`],
    ["A car loan", "A car loan of 18 000 dollars is repaid monthly over 5 years at 6.6%/a compounded monthly. Find the monthly payment.",
      [S`\(i=0.0055\), \(n=60\): \(R=\frac{18000(0.0055)}{1-1.0055^{-60}}\).`],
      `${m(carR)} dollars per month`],
    ["Total interest", "For the loan in Example 3, how much interest is paid in total?",
      [`Total paid: ${m(carR)} × 60 = ${m(carR * 60)}.`, "Subtract the 18 000 borrowed."],
      `${m(carR * 60 - 18000)} dollars`],
    ["Lump sum or payments?", "A prize offers 1 000 000 dollars now or 60 000 dollars at the end of each year for 25 years. Money earns 4.5%/a compounded annually. Which is worth more today?",
      [S`\(PV=\frac{60000(1-1.045^{-25})}{0.045}\approx${m(lotto)}\).`],
      `${lotto > 1e6 ? "the yearly payments" : "the 1 000 000 dollars now"}`,
      plane({ view: { xmin: 0, xmax: 3, ymin: 0, ymax: 1200000 }, segs: [[1, 1e6], [2, lotto]].map(([x, v]) => ({ pts: [[x - 0.3, 0], [x - 0.3, v], [x + 0.3, v], [x + 0.3, 0]], color: "violet" })), points: [{ x: 1, y: 1e6, label: "lump sum" }, { x: 2, y: lotto, label: `PV ${m(lotto)}` }], step: { x: 1, y: 200000 }, ylabel: "value today" })],
  ]),

  practice([
    q("PV", "Find the present value of 1000 dollars paid at the end of each year for 4 years at 8%/a compounded annually (dollars).", num(+m(annPV(1000, 0.08, 4)), 0.02),
      "R[1 − (1 + i)⁻ⁿ]/i.", [S`\(\frac{1000(1-1.08^{-4})}{0.08}\).`], m(annPV(1000, 0.08, 4))),
    q("PV", "Find the present value of 250 dollars paid at the end of each month for 3 years at 6%/a compounded monthly (dollars).", num(+m(annPV(250, 0.005, 36)), 0.02),
      "i = 0.005, n = 36.", [S`\(\frac{250(1-1.005^{-36})}{0.005}\).`], m(annPV(250, 0.005, 36))),
    q("payment", "Find the monthly payment on a 12 000-dollar loan over 4 years at 7.2%/a compounded monthly (dollars).", num(+m(payPV(12000, 0.006, 48)), 0.02),
      "i = 0.006, n = 48.", [S`\(\frac{12000(0.006)}{1-1.006^{-48}}\).`], m(payPV(12000, 0.006, 48))),
    q("total", "For that loan, how much is paid in total over the 4 years (dollars)?", num(+m(payPV(12000, 0.006, 48) * 48), 0.5),
      "R × 48.", ["Multiply the payment by 48."], m(payPV(12000, 0.006, 48) * 48)),
    q("compare", "Why is the present value of an annuity less than the total of its payments?", choice(["later payments are worth less today because money can earn interest", "the bank keeps a fee", "the last payment is skipped", "payments are made at the start"], 0),
      "Think of discounting each payment.", ["Each payment is divided by (1 + i)ᵏ."], "discounting"),
  ]),

  ...hard([
    ["Planning for retirement", "How much must be saved by retirement to withdraw 3000 dollars at the end of each month for 20 years, at 4.8%/a compounded monthly?",
      [S`\(i=0.004\), \(n=240\): \(PV=\frac{3000(1-1.004^{-240})}{0.004}\).`],
      `${m(retire)} dollars`],
    ["How many payments?", "A 10 000-dollar loan at 9%/a compounded monthly is repaid with 300 dollars a month. How many payments are needed (the last may be smaller)?",
      [S`\(i=0.0075\). Find n with \(\frac{300(1-1.0075^{-n})}{0.0075}\ge10000\).`, `Guess and check (or a table): n = ${nLoan}.`],
      `${nLoan} payments`,
      plane({ view: { xmin: 0, xmax: nLoan + 2, ymin: 0, ymax: 10500 }, curves: [{ f: (k) => Math.max(0, 10000 * 1.0075 ** k - (300 * (1.0075 ** k - 1)) / 0.0075), a: 0, b: nLoan, color: "violet" }], step: { x: 5, y: 1000 }, xlabel: "payments", ylabel: "balance" })],
  ], [
    q("hard", "Find the present value of 400 dollars paid every quarter for 6 years at 6%/a compounded quarterly (dollars).", num(+m(annPV(400, 0.015, 24)), 0.02),
      "i = 0.015, n = 24.", [S`\(\frac{400(1-1.015^{-24})}{0.015}\).`], m(annPV(400, 0.015, 24))),
    q("hard", "Find the monthly payment on a 250 000-dollar mortgage over 25 years at 5.4%/a compounded monthly (dollars).", num(+m(payPV(250000, 0.0045, 300)), 0.02),
      "i = 0.0045, n = 300.", [S`\(\frac{250000(0.0045)}{1-1.0045^{-300}}\).`], m(payPV(250000, 0.0045, 300))),
    q("hard", "How many monthly payments of 500 dollars repay a 20 000-dollar loan at 6%/a compounded monthly (the last may be smaller)?", num(paymentsToRepay(20000, 500, 0.005)),
      "Guess and check n.", ["Find n with PV of payments ≥ 20 000."], String(paymentsToRepay(20000, 500, 0.005))),
  ]),

  wrapUp({
    qas: [
      ["When do I use the PV formula instead of the FV formula?", "PV for 'how much now' (loans, funding withdrawals); FV for 'how much later' (savings)."],
      ["Why is a loan an annuity?", "You receive the principal now and repay it with equal payments that include interest."],
      ["How much interest does a loan cost?", "Total of payments minus the amount borrowed: Rn − PV."],
      ["How do I compare a lump sum with payments?", "Find the PV of the payments and compare it with the lump sum."],
      ["How can I pay less interest?", "Borrow less, shorten the term, or pay more each period (8.6)."],
    ],
    summary: [
      "PV = R[1 − (1 + i)⁻ⁿ]/i.",
      "R = PV·i / [1 − (1 + i)⁻ⁿ].",
      "Interest on a loan = Rn − PV.",
      "Compare offers using present value.",
    ],
    next: "8.6 analyses loans with amortization tables and changing conditions.",
  }),
];
