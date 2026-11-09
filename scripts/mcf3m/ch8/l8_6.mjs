// MCF3M 8.6 — Annuities: Present Value. PV of an ordinary simple annuity as a sum of discounted payments;
// PV = R[1 − (1 + i)⁻ⁿ]/i; funding regular withdrawals; the loan a payment can support; interest in a loan;
// comparing a lump sum with a stream of payments.
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard } from "../lib.mjs";
import { FG, TL, P, payments } from "./ffig.mjs";
const S = String.raw;

export const TITLE = "8.6 Annuities: Present Value";
const pva = (R, i, n) => (R * (1 - (1 + i) ** -n)) / i;

export const blocks = () => [
  intro({
    icon: "🎓",
    title: "Annuities: Present Value",
    overview: S`The <b>present value of an annuity</b> is the single amount that, invested now, can pay out all the regular payments — or, for a loan, the amount borrowed that the regular payments will repay. Each payment is moved back to today with \((1+i)^{-k}\) and the results are added: \(PV=R\cdot\frac{1-(1+i)^{-n}}{i}\). This answers questions like "how much must be in the fund?" and "how big a loan can I afford?".`,
    goals: [
      "find the present value of an annuity as a sum of present values;",
      "use PV = R[1 − (1 + i)⁻ⁿ]/i;",
      "find the amount needed to fund regular withdrawals;",
      "find the loan a regular payment can support and the interest paid;",
      "compare a lump sum with a series of payments.",
    ],
    curriculum: "D2.3 (determine the present value of an ordinary simple annuity), D2.4 (solve problems involving the present value of annuities), D2.5 (effect of changing the conditions)",
    prior: [
      [S`Evaluate \(1000(1.05)^{-2}\).`, S`\(\approx907.03\).`],
      [S`Find \(PV\) of \(5000\) due in \(3\) years at \(4\%\) annually.`, S`\(\approx4444.98\).`],
      [S`Evaluate \(1-1.05^{-4}\).`, S`\(\approx0.1773\).`],
    ],
    words: [
      ["PV of an annuity", "value today of all future payments", "PV = R[1 − (1 + i)⁻ⁿ]/i"],
      ["Withdrawal", "a payment taken out of a fund", "500 dollars a month"],
      ["Loan principal", "amount borrowed: the PV of the payments", "17 845.29 dollars"],
      ["Interest paid", "total of payments − amount borrowed", "nR − PV"],
      ["Lump sum", "one single payment", "1 000 000 dollars now"],
    ],
  }),

  section("📌 Bringing each payment back to today", S`
  ${TL({ n: 4, unit: "years", title: "1000 dollars at the end of each year for 4 years, 5% compounded annually", flows: [{ at: 0, label: "PV = ?", up: false }, ...payments(4, "1000")] })}
  ${table(["Payment at end of year", "Present value"], [["1", "\\(1000(1.05)^{-1}\\approx952.38\\)"], ["2", "\\(1000(1.05)^{-2}\\approx907.03\\)"], ["3", "\\(1000(1.05)^{-3}\\approx863.84\\)"], ["4", "\\(1000(1.05)^{-4}\\approx822.70\\)"], ["total", "\\(\\approx3545.95\\)"]])}
  ${keyIdea(S`\(PV=R\cdot\frac{1-(1+i)^{-n}}{i}\). Investing \(3545.95\) dollars today at \(5\%\) pays exactly \(1000\) dollars a year for \(4\) years and leaves nothing.`)}`),

  widget("annuityPV", { init: [600, 5, 10] }),

  section("⚠️ Common errors", S`
  ${watchOut([
    "The exponent is −n: 1 − (1 + i)⁻ⁿ.",
    "PV of an annuity is LESS than the total of the payments (nR).",
    "Use i per payment period and n payments.",
    "Interest on a loan = nR − PV.",
    "Compare a lump sum with payments only through present values.",
  ])}`),

  examples([
    ["Add the present values", S`How much must be invested now at \(5\%\) compounded annually to withdraw \(1000\) dollars at the end of each year for \(4\) years?`,
      [S`<b>Each payment.</b> \(952.38+907.03+863.84+822.70\).`,
        S`<b>Sum.</b> \(\approx3545.95\) dollars.`,
        S`<b>Formula.</b> \(PV=1000\cdot\frac{1-1.05^{-4}}{0.05}\approx3545.95\) ✓`,
        S`<b>Interest.</b> The fund pays out \(4000\) but needs only \(3545.95\): interest supplies \(454.05\) dollars.`],
      S`PV ≈ 3545.95 dollars`,
      TL({ n: 4, unit: "years", flows: [{ at: 0, label: "3545.95", up: false }, ...payments(4, "1000")] })],

    ["Funding a student allowance", S`Parents want to give a student \(500\) dollars at the end of every month for \(4\) years. How much must they deposit now at \(3\%\) compounded monthly?`,
      [S`<b>Per period.</b> \(i=0.0025\), \(n=48\).`,
        S`<b>Formula.</b> \(PV=500\cdot\frac{1-1.0025^{-48}}{0.0025}\).`,
        S`<b>Evaluate.</b> \(\approx22589.35\) dollars.`,
        S`<b>Compare.</b> Total paid out \(24\,000\); interest covers about \(1410.65\) ✓`],
      S`≈ 22 589.35 dollars`,
      TL({ n: 48, unit: "months", flows: [{ at: 0, label: "22 589.35", up: false }, ...payments(48, "500")] })],

    ["The loan you can afford", S`Kai can afford car payments of \(350\) dollars at the end of each month for \(5\) years. The loan rate is \(6.6\%\) compounded monthly. How much can Kai borrow?`,
      [S`<b>Per period.</b> \(i=0.0055\), \(n=60\).`,
        S`<b>PV.</b> \(350\cdot\frac{1-1.0055^{-60}}{0.0055}\approx17845.29\) dollars.`,
        S`<b>Meaning.</b> The \(60\) payments exactly repay a loan of \(17\,845.29\) dollars with interest.`,
        S`<b>Graph.</b> PV grows with the term, but levels off: longer terms add less and less ✓`],
      S`≈ 17 845.29 dollars`,
      FG([{ f: (t) => pva(350, 0.0055, 12 * t), color: "violet" }], { view: { xmin: 0, xmax: 10, ymin: 0, ymax: 32000 }, step: { x: 1, y: 4000 }, points: [P(5, 17845.29, "(5, 17 845.29)")], xlabel: "term (years)", ylabel: "loan" })],

    ["Interest on the loan", S`For Kai's loan, how much interest is paid in total?`,
      [S`<b>Total payments.</b> \(60\times350=21000\) dollars.`,
        S`<b>Interest.</b> \(21000-17845.29=3154.71\) dollars.`,
        S`<b>Share.</b> About \(15\%\) of what Kai pays is interest.`,
        S`<b>Check.</b> Interest is positive and less than the principal ✓`],
      S`≈ 3154.71 dollars`,
      FG([{ f: (t) => 350 * 12 * t, color: "green" }, { f: (t) => pva(350, 0.0055, 12 * t), color: "violet" }], { view: { xmin: 0, xmax: 6, ymin: 0, ymax: 24000 }, step: { x: 1, y: 2000 }, points: [P(5, 21000, "paid 21 000", "green"), P(5, 17845.29, "borrowed 17 845.29")], xlabel: "term (years)", ylabel: "dollars" })],

    ["Lump sum or payments?", S`A prize winner may take \(1\,000\,000\) dollars now or \(60\,000\) dollars at the end of each year for \(25\) years. Money earns \(5\%\) compounded annually. Which is worth more?`,
      [S`<b>PV of the payments.</b> \(60000\cdot\frac{1-1.05^{-25}}{0.05}\approx845636.67\).`,
        S`<b>Compare.</b> \(845\,636.67<1\,000\,000\).`,
        S`<b>Decision.</b> The lump sum is worth more today, even though the payments total \(1\,500\,000\).`,
        S`<b>Reason.</b> Distant payments are worth much less today ✓`],
      S`take the lump sum`,
      TL({ n: 25, unit: "years", flows: [{ at: 0, label: "1 000 000 or PV 845 636.67", up: false }, ...payments(25, "60 000")] })],
  ]),

  practice([
    q("pv1", S`Find the present value of \(500\) dollars at the end of each year for \(3\) years at \(4\%\) compounded annually.`, num(1387.55, 0.011), "500[1 − 1.04⁻³]/0.04.", [S`\(\approx1387.55\).`], S`\(1387.55\)`),
    q("pv2", S`Find the present value of \(100\) dollars at the end of each month for \(2\) years at \(6\%\) compounded monthly.`, num(2256.29, 0.011), "i = 0.005, n = 24.", [S`\(\approx2256.29\).`], S`\(2256.29\)`),
    q("int", S`A loan of \(12\,000\) dollars is repaid with \(48\) monthly payments of \(290\) dollars. How much interest is paid?`, num(1920), "48 × 290 − 12 000.", [S`\(1920\).`], S`\(1920\)`),
    q("n", S`Quarterly payments for \(6\) years: how many payments?`, num(24), "4 × 6.", [S`\(24\).`], S`\(24\)`),
    q("which", S`The present value of an annuity (positive rate) is …`, choice(["less than the total of the payments", "more than the total of the payments", "equal to the total", "always zero"], 0), "Payments are discounted.", [S`Less.`], S`less than the total of the payments`),
  ]),

  ...hard([
    ["A retirement fund", S`A retiree wants to withdraw \(2000\) dollars at the end of each month for \(20\) years. The fund earns \(4.8\%\) compounded monthly. How much must be in the fund at retirement?`,
      [S`<b>Per period.</b> \(i=0.004\), \(n=240\).`,
        S`<b>PV.</b> \(2000\cdot\frac{1-1.004^{-240}}{0.004}\approx308186.61\).`,
        S`<b>Compare.</b> Withdrawals total \(480\,000\); interest supplies about \(171\,813\).`],
      S`≈ 308 186.61 dollars`,
      FG([{ f: (t) => pva(2000, 0.004, 240 - 12 * t) * (t < 20 ? 1 : 0), color: "violet" }], { view: { xmin: 0, xmax: 21, ymin: 0, ymax: 330000 }, step: { x: 2, y: 30000 }, points: [P(0, 308186.61, "(0, 308 186.61)")], xlabel: "years after retiring", ylabel: "fund" })],
    ["Cash price", S`A TV is sold for \(24\) monthly payments of \(85\) dollars, the first in one month, at \(9\%\) compounded monthly. What is the equivalent cash price?`,
      [S`<b>Per period.</b> \(i=0.0075\), \(n=24\).`,
        S`<b>PV.</b> \(85\cdot\frac{1-1.0075^{-24}}{0.0075}\approx1860.58\) dollars.`,
        S`<b>Meaning.</b> Paying \(2040\) over two years equals \(1860.58\) cash today at this rate.`],
      S`≈ 1860.58 dollars`],
  ], [
    q("hard", S`Find the present value of \(1500\) dollars at the end of each quarter for \(5\) years at \(6\%\) compounded quarterly.`, num(25752.96, 0.011), "i = 0.015, n = 20.", [S`\(\approx25752.96\).`], S`\(25752.96\)`),
    q("hard", S`What loan can be repaid by \(400\) dollars a month for \(3\) years at \(4.8\%\) compounded monthly?`, num(13386.35, 0.011), "i = 0.004, n = 36.", [S`\(\approx13386.35\).`], S`\(13386.35\)`),
    q("hard", S`A fund pays \(250\) dollars a month for \(4\) years at \(3.6\%\) compounded monthly. How much interest does the fund earn over its life?`, num(839.54, 0.011), "48 × 250 − PV.", [S`\(PV\approx11160.46\); \(12000-11160.46\approx839.54\).`], S`\(839.54\)`),
    q("hard", S`For \(800\) dollars a month for \(10\) years at \(5.4\%\) compounded monthly, find the present value.`, num(74052.52, 0.011), "i = 0.0045, n = 120.", [S`\(\approx74052.52\).`], S`\(74052.52\)`),
    q("hard", S`Which is worth more today at \(5\%\) compounded annually: \(9000\) dollars now, or \(1000\) dollars at the end of each year for \(12\) years? Enter the present value of the payments.`, num(8863.25, 0.011), "1000[1 − 1.05⁻¹²]/0.05.", [S`\(\approx8863.25<9000\): the \(9000\) now.`], S`\(8863.25\)`),
  ]),

  wrapUp({
    qas: [
      ["What is the PV of an annuity?", "The value today of all the payments: PV = R[1 − (1 + i)⁻ⁿ]/i."],
      ["When do I use it?", "To fund regular withdrawals, to find a loan amount, or to compare offers today."],
      ["How do I find the interest on a loan?", "Total payments nR minus the amount borrowed PV."],
      ["Why is the PV less than the total payments?", "Each later payment is discounted more."],
      ["How do I compare a lump sum with payments?", "Compare the lump sum with the PV of the payments at the same rate."],
    ],
    summary: [
      "PV = R[1 − (1 + i)⁻ⁿ]/i.",
      "Loan = PV of its payments.",
      "Interest = nR − PV.",
      "Compare offers in today's dollars.",
    ],
    next: "8.7 plans savings and loans: finding payments and comparing options.",
  }),
];
