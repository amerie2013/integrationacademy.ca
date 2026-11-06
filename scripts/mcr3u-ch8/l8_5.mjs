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
      [S`<b>Meaning.</b> The fund must hold enough today so that, with interest, it pays out all six withdrawals and ends at 0. That is the present value of an annuity.`,
        S`<b>Formula.</b> \(PV=\dfrac{R\left[1-(1+i)^{-n}\right]}{i}\).`,
        S`<b>Substitute.</b> \(PV=\frac{800(1-1.05^{-6})}{0.05}\).`,
        S`<b>Calculate.</b> \(1.05^{-6}\approx0.746215\), so \(PV\approx\frac{800(0.253785)}{0.05}\approx${m(annPV(800, 0.05, 6))}\).`,
        S`<b>Sense check.</b> It is less than \(6\times800=4800\), since the money earns interest while waiting ✓`],
      `${m(annPV(800, 0.05, 6))} dollars`,
      plane({ view: { xmin: 0, xmax: 7, ymin: 0, ymax: 4600 }, points: [0, 1, 2, 3, 4, 5, 6].map((k) => ({ x: k, y: Math.max(0, annPV(800, 0.05, 6 - k)), label: k === 0 ? m(annPV(800, 0.05, 6)) : undefined, color: k === 0 ? "amber" : "blue" })), step: { x: 1, y: 500 }, xlabel: "year", ylabel: "balance" }, "The fund's balance falls to 0 after the last withdrawal.")],
    ["A scholarship", "A fund will pay 2500 dollars every 6 months for 4 years, starting 6 months from now. Money earns 4%/a compounded semi-annually. How much must be in the fund today?",
      [S`<b>Convert.</b> \(i=\frac{0.04}2=0.02\). Payments: \(n=4\times2=8\).`,
        S`<b>Check the type.</b> The first payment is one period away, and payment and compounding periods match. So the formula applies directly.`,
        S`<b>Substitute.</b> \(PV=\frac{2500(1-1.02^{-8})}{0.02}\).`,
        S`<b>Calculate.</b> \(PV\approx${m(annPV(2500, 0.02, 8))}\).`,
        S`<b>Sense check.</b> The payments total 20 000, and the PV is a bit less ✓`],
      `${m(annPV(2500, 0.02, 8))} dollars`,
      plane({ view: { xmin: 0, xmax: 9, ymin: 0, ymax: 20000 }, points: [0, 1, 2, 3, 4, 5, 6, 7, 8].map((k) => ({ x: k, y: Math.max(0, annPV(2500, 0.02, 8 - k)), label: k === 0 ? m(annPV(2500, 0.02, 8)) : undefined, color: k === 0 ? "amber" : "blue" })), step: { x: 1, y: 2000 }, xlabel: "6-month periods", ylabel: "balance" })],
    ["A car loan", "A car loan of 18 000 dollars is repaid monthly over 5 years at 6.6%/a compounded monthly. Find the monthly payment.",
      [S`<b>Model.</b> The amount borrowed is the present value of all the payments.`,
        S`<b>Convert.</b> \(i=\frac{0.066}{12}=0.0055\) and \(n=60\).`,
        S`<b>Rearrange.</b> \(R=\frac{PV\cdot i}{1-(1+i)^{-n}}\).`,
        S`<b>Substitute.</b> \(R=\frac{18\,000(0.0055)}{1-1.0055^{-60}}\approx${m(carR)}\).`,
        S`<b>Sense check.</b> With no interest it would be \(\frac{18\,000}{60}=300\). The payment must be a bit more ✓`],
      `${m(carR)} dollars per month`,
      plane({ view: { xmin: 0, xmax: 66, ymin: 0, ymax: 20000 }, curves: [{ f: (k) => Math.max(0, annPV(carR, 0.0055, 60 - k)), a: 0, b: 60, color: "violet" }], points: [{ x: 0, y: 18000, label: "(0, 18 000)" }, { x: 60, y: 0, label: "(60, 0)", color: "amber" }], step: { x: 6, y: 2000 }, xlabel: "months", ylabel: "balance" })],
    ["Total interest", "For the car loan of 18 000 dollars with 60 payments of the amount above, how much interest is paid in total?",
      [S`<b>Total paid.</b> \(${m(carR)}\times60\approx${m(carR * 60)}\).`,
        S`<b>Why subtract?</b> Each payment repays some of the loan and pays some interest. Over the whole loan, the 18 000 is returned once, and the rest is interest.`,
        S`<b>Interest.</b> \(${m(carR * 60)}-18\,000=${m(carR * 60 - 18000)}\).`,
        S`<b>Sense check.</b> This is about ${Math.round(((carR * 60 - 18000) / 18000) * 100)}% of the loan, which is reasonable for 5 years at 6.6% on a falling balance ✓`],
      `${m(carR * 60 - 18000)} dollars`,
      plane({ view: { xmin: 0, xmax: 3, ymin: 0, ymax: 24000 }, segs: [[1, 18000], [2, carR * 60]].map(([x, v]) => ({ pts: [[x - 0.3, 0], [x - 0.3, v], [x + 0.3, v], [x + 0.3, 0]], color: "violet" })), points: [{ x: 1, y: 18000, label: "borrowed" }, { x: 2, y: carR * 60, label: "total paid" }], step: { x: 1, y: 4000 }, ylabel: "dollars" })],
    ["Lump sum or payments?", "A prize offers 1 000 000 dollars now or 60 000 dollars at the end of each year for 25 years. Money earns 4.5%/a compounded annually. Which is worth more today?",
      [S`<b>Principle.</b> Bring everything to the same time. The lump sum is already in today's dollars.`,
        S`<b>Why not just add?</b> \(25\times60\,000=1\,500\,000\) looks larger, but later dollars are worth less today.`,
        S`<b>Present value.</b> \(PV=\frac{60\,000(1-1.045^{-25})}{0.045}\approx${m(lotto)}\).`,
        S`<b>Compare.</b> \(${m(lotto)}\) is ${lotto > 1e6 ? "more" : "less"} than 1 000 000.`,
        S`<b>Note.</b> The decision depends on the interest rate. A lower rate raises the PV of the payments.`],
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
