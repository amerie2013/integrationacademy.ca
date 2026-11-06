// MCR3U 8.6 — Loans, Amortization and Changing Conditions: amortization tables, interest vs principal, outstanding
// balance, effects of rate, term, payment frequency and extra payments (technology)
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, plane } from "./lib.mjs";
import { payPV, annFV, balance, paymentsToRepay, m } from "./fin.mjs";
import { tv } from "../mcr3u-extables.mjs";

export const TITLE = "8.6 Loans, Amortization and Changing Conditions";
export const ID = "5c3e0001-0001-4001-8001-000000000806";
const S = String.raw;
// Example 1: 10 000 at 12%/a monthly over 1 year
const R1 = payPV(10000, 0.01, 12);
const rows1 = []; { let b = 10000; for (let k = 1; k <= 3; k++) { const int = b * 0.01; b = b + int - R1; rows1.push([k, m(R1), m(int), m(R1 - int), m(b)]); } }
// Example 2: rates
const r4 = payPV(20000, 0.04 / 12, 60), r8 = payPV(20000, 0.08 / 12, 60);
// Example 3: terms
const t3 = payPV(20000, 0.005, 36), t6 = payPV(20000, 0.005, 72);
// Example 4: extra payment
const base = payPV(25000, 0.005, 60), nExtra = paymentsToRepay(25000, base + 100, 0.005);
const intBase = base * 60 - 25000;
const intExtra = (() => { let b = 25000, tot = 0; while (b > 0.005) { const int = b * 0.005; tot += int; b = b + int - Math.min(base + 100, b + int); } return tot; })();
// Example 5: frequency
const fA = annFV(1200, 0.06, 10), fM = annFV(100, 0.005, 120);
// hard
const bal24 = balance(20000, payPV(20000, 0.005, 60), 0.005, 24);
const L = 30000, rate = 0.07 / 12, nn = 72, P0 = payPV(L, rate, nn);
const lowerRate = payPV(L, 0.06 / 12, nn) * nn - L, shorter = payPV(L, rate, 60) * 60 - L, now = P0 * nn - L;

export const blocks = () => [
  intro({
    icon: "🧾",
    title: "Loans, Amortization and Changing Conditions",
    overview: S`An <strong>amortization table</strong> shows, payment by payment, how a loan is paid off: each payment first covers the interest on the balance, and the rest reduces the principal. Spreadsheets and financial calculators make these tables easy, so you can ask "what if?": What if the rate changes? What if the term is shorter? What if I pay a little extra? In this lesson you will build amortization tables, find outstanding balances, and investigate how changing conditions affects payments and total interest.`,
    goals: [
      "build the first rows of an amortization table;",
      "explain how each payment splits into interest and principal;",
      "find the outstanding balance after some payments;",
      "investigate the effect of the rate, the term and the payment frequency;",
      "see how extra payments shorten a loan and reduce interest.",
    ],
    curriculum: "C2.6 (determine, through investigation using technology, the effects of changing the conditions — the payments, the frequency of the payments, the interest rate, the compounding period — of ordinary simple annuities such as long-term savings plans and loans), C2.7",
    prior: [
      ["Find the interest for one month on 10 000 dollars at 12%/a compounded monthly.", "100 dollars."],
      [S`Find the payment on a 5000-dollar loan, 12 monthly payments at 1% per month.`, `${m(payPV(5000, 0.01, 12))} dollars.`],
      ["What is 25 000 × 0.005?", "125."],
    ],
    words: [
      ["Amortization", "paying off a loan with regular payments", ""],
      ["Amortization table", "payment, interest, principal and balance for each period", ""],
      ["Outstanding balance", "what is still owed after some payments", ""],
      ["Term", "the length of time to repay the loan", ""],
    ],
  }),

  section("📌 One row of the table", S`
  ${table(["Column", "How to calculate"], [["interest", "balance × i"], ["principal", "payment − interest"], ["new balance", "old balance − principal"]])}
  ${table(["#", "payment", "interest", "principal", "balance"], rows1)}
  ${keyIdea(S`Early payments are mostly interest; later payments are mostly principal, because the interest is charged on a balance that keeps shrinking.`)}`),

  section("📌 Explore", S`<p>Change the loan, rate, term and payment frequency, and add an extra amount per payment. Watch the payment, the number of payments and the total interest.</p>`),

  widget("amortLab", { init: [25000, 6, 5] }),

  section("📌 Watch out", watchOut([
    "Interest each period is charged on the current balance, not on the original loan.",
    "The last payment is often slightly different because of rounding.",
    "A lower payment usually means more total interest, not less.",
    "Compare loans by total interest as well as by the payment.",
  ])),

  examples([
    ["The first three rows", "A 10 000-dollar loan at 12%/a compounded monthly is repaid with 12 monthly payments. Build the first three rows of its amortization table.",
      [S`<b>Payment.</b> \(i=0.01\), \(n=12\): \(R=\frac{10\,000(0.01)}{1-1.01^{-12}}\approx${m(R1)}\).`,
        S`<b>Method for each row.</b> Interest = balance × \(i\). Principal = payment − interest. New balance = old balance − principal.`,
        S`<b>Row 1.</b> Interest \(10\,000(0.01)=100.00\). Principal \(${m(R1)}-100=${rows1[0][3]}\). Balance \(10\,000-${rows1[0][3]}=${rows1[0][4]}\).`,
        S`<b>Table.</b> ${tv(["payment", "amount", "interest", "principal", "balance"], ...rows1.map((row) => row.map(String)))}`,
        S`<b>Pattern.</b> The payment stays the same, but the interest falls as the balance falls. So more of each payment goes to principal ✓`],
      `payment ${m(R1)} dollars; balance after 3 payments ${rows1[2][4]} dollars`,
      plane({ view: { xmin: 0, xmax: 13, ymin: 0, ymax: 11000 }, points: Array.from({ length: 13 }, (_, k) => ({ x: k, y: Math.max(0, balance(10000, R1, 0.01, k)), color: k >= 1 && k <= 3 ? "amber" : "blue" })), step: { x: 1, y: 1000 }, xlabel: "payment", ylabel: "balance" })],
    ["Changing the rate", "Compare the monthly payment and total interest on a 20 000-dollar, 5-year loan at 4%/a and at 8%/a (compounded monthly).",
      [S`<b>Setup.</b> \(n=60\). The rates per month are \(\frac{0.04}{12}\) and \(\frac{0.08}{12}\).`,
        S`<b>Payments and interest.</b> Interest = \(60R-20\,000\). ${tv(["rate", "payment \\(R\\)", "total paid", "interest"], ["4%", m(r4), m(r4 * 60), m(r4 * 60 - 20000)], ["8%", m(r8), m(r8 * 60), m(r8 * 60 - 20000)])}`,
        S`<b>Compare.</b> The 8% loan's interest is \(\frac{${m(r8 * 60 - 20000)}}{${m(r4 * 60 - 20000)}}\approx${(((r8 * 60 - 20000) / (r4 * 60 - 20000))).toFixed(2)}\) times as large.`,
        S`<b>Why more than double?</b> The higher payment clears the balance a little more slowly at first, so interest applies to a larger balance for longer.`],
      "doubling the rate more than doubles the interest",
      plane({ view: { xmin: 0, xmax: 3, ymin: 0, ymax: 5500 }, segs: [[1, r4 * 60 - 20000], [2, r8 * 60 - 20000]].map(([x, v]) => ({ pts: [[x - 0.3, 0], [x - 0.3, v], [x + 0.3, v], [x + 0.3, 0]], color: "violet" })), points: [{ x: 1, y: r4 * 60 - 20000, label: `4%: ${m(r4 * 60 - 20000)}` }, { x: 2, y: r8 * 60 - 20000, label: `8%: ${m(r8 * 60 - 20000)}` }], step: { x: 1, y: 500 }, ylabel: "total interest" })],
    ["Changing the term", "Compare a 20 000-dollar loan at 6%/a compounded monthly over 3 years and over 6 years.",
      [S`<b>Setup.</b> \(i=0.005\); \(n=36\) and \(n=72\).`,
        S`<b>Results.</b> ${tv(["term", "payment", "total paid", "interest"], ["3 years", m(t3), m(t3 * 36), m(t3 * 36 - 20000)], ["6 years", m(t6), m(t6 * 72), m(t6 * 72 - 20000)])}`,
        S`<b>Trade-off.</b> The longer term lowers the payment, but the balance stays high for longer, so more interest builds up.`,
        S`<b>Check on the graph.</b> The amber balance (6 years) falls more slowly than the violet (3 years) ✓`],
      "longer term: lower payment, more interest",
      plane({ view: { xmin: 0, xmax: 7, ymin: 0, ymax: 21000 }, curves: [{ f: (t) => Math.max(0, balance(20000, t3, 0.005, 12 * t)), a: 0, b: 3, color: "violet" }, { f: (t) => Math.max(0, balance(20000, t6, 0.005, 12 * t)), a: 0, b: 6, color: "amber" }], step: { x: 1, y: 2000 }, xlabel: "years", ylabel: "balance" })],
    ["Paying extra", "A 25 000-dollar loan at 6%/a compounded monthly is set up over 5 years. How does paying 100 dollars extra each month change it?",
      [S`<b>Regular plan.</b> \(R=\frac{25\,000(0.005)}{1-1.005^{-60}}\approx${m(base)}\), for 60 payments. Interest \(\approx${m(intBase)}\).`,
        S`<b>Extra plan.</b> The payment is ${m(base + 100)} dollars. Solving for the number of payments gives ${nExtra}, with the last one smaller.`,
        S`<b>Interest on the extra plan.</b> Run the table until the balance reaches 0: interest \(\approx${m(intExtra)}\).`,
        S`<b>Compare.</b> It saves ${m(intBase - intExtra)} dollars of interest and ${60 - nExtra} payments.`,
        S`<b>Why it works.</b> All of the extra 100 goes to principal, so every later interest charge is smaller ✓`],
      `saves about ${m(intBase - intExtra)} dollars and ${60 - nExtra} payments`,
      plane({ view: { xmin: 0, xmax: 66, ymin: 0, ymax: 27000 }, curves: [{ f: (k) => Math.max(0, balance(25000, base, 0.005, k)), a: 0, b: 60, color: "violet" }, { f: (k) => Math.max(0, balance(25000, base + 100, 0.005, k)), a: 0, b: nExtra, color: "amber" }], points: [{ x: nExtra, y: 0, label: `${nExtra} payments`, color: "amber" }, { x: 60, y: 0, label: "60" }], step: { x: 6, y: 3000 }, xlabel: "months", ylabel: "balance" }, "violet regular, amber with the extra 100 dollars")],
    ["Changing the frequency of savings", "Compare saving 1200 dollars at the end of each year with 100 dollars at the end of each month for 10 years at 6%/a (compounded to match).",
      [S`<b>Same total.</b> Both deposit 1200 dollars per year, for 12 000 in all.`,
        S`<b>Yearly.</b> \(i=0.06\), \(n=10\): \(FV=\frac{1200(1.06^{10}-1)}{0.06}\approx${m(fA)}\).`,
        S`<b>Monthly.</b> \(i=0.005\), \(n=120\): \(FV=\frac{100(1.005^{120}-1)}{0.005}\approx${m(fM)}\).`,
        S`<b>Compare.</b> Monthly ends ${m(fM - fA)} dollars ahead.`,
        S`<b>Why.</b> Money deposited earlier in each year has more time to earn interest, and it compounds more often ✓`],
      "monthly saving ends with more because money is deposited earlier",
      plane({ view: { xmin: 0, xmax: 3, ymin: 0, ymax: 19000 }, segs: [[1, fA], [2, fM]].map(([x, v]) => ({ pts: [[x - 0.3, 0], [x - 0.3, v], [x + 0.3, v], [x + 0.3, 0]], color: "violet" })), points: [{ x: 1, y: fA, label: `yearly ${m(fA)}` }, { x: 2, y: fM, label: `monthly ${m(fM)}` }], step: { x: 1, y: 2000 }, ylabel: "future value" })],
  ]),

  practice([
    q("payment", "Find the monthly payment on a 5000-dollar loan over 2 years at 9%/a compounded monthly (dollars).", num(+m(payPV(5000, 0.0075, 24)), 0.02),
      "i = 0.0075, n = 24.", [S`\(\frac{5000(0.0075)}{1-1.0075^{-24}}\).`], m(payPV(5000, 0.0075, 24))),
    q("interest", "A loan balance is 15 000 dollars at 6%/a compounded monthly. How much interest is charged in the next month (dollars)?", num(75),
      "Balance × i.", [S`\(15000(0.005)\).`], "75"),
    q("balance", "Continuing: a 500-dollar payment is made. What is the new balance (dollars)?", num(14575),
      "Balance + interest − payment.", [S`\(15000+75-500\).`], "14 575"),
    q("effects", "What happens when you increase each loan payment?", choice(["the loan is repaid sooner and less interest is paid", "the loan takes longer", "the total interest increases", "nothing changes"], 0),
      "More principal is repaid each time.", ["The balance falls faster."], "sooner, less interest"),
    q("total interest", "Find the total interest on an 8000-dollar loan repaid monthly over 3 years at 6%/a compounded monthly (dollars).", num(+m(payPV(8000, 0.005, 36) * 36 - 8000), 0.5),
      "Rn − PV.", ["Find R, multiply by 36, subtract 8000."], m(payPV(8000, 0.005, 36) * 36 - 8000)),
  ]),

  ...hard([
    ["Outstanding balance", "A 20 000-dollar loan at 6%/a compounded monthly is repaid over 5 years. What is owed after 2 years?",
      [S`The balance is the present value of the 36 remaining payments, or \(20000(1.005)^{24}-FV\) of the 24 payments made.`],
      `${m(bal24)} dollars`],
    ["Which change saves more?", "A 30 000-dollar loan at 7%/a compounded monthly over 6 years: which saves more interest — a rate 1% lower, or a term 1 year shorter?",
      [`Now: interest ≈ ${m(now)}.`, `6% rate: ≈ ${m(lowerRate)} (saves ${m(now - lowerRate)}).`, `5-year term: ≈ ${m(shorter)} (saves ${m(now - shorter)}).`],
      now - lowerRate > now - shorter ? "the lower rate" : "the shorter term",
      plane({ view: { xmin: 0, xmax: 4, ymin: 0, ymax: 7500 }, segs: [[1, now], [2, lowerRate], [3, shorter]].map(([x, v]) => ({ pts: [[x - 0.3, 0], [x - 0.3, v], [x + 0.3, v], [x + 0.3, 0]], color: "violet" })), points: [[1, now, "now"], [2, lowerRate, "6%"], [3, shorter, "5 years"]].map(([x, y, label]) => ({ x, y, label })), step: { x: 1, y: 1000 }, ylabel: "total interest" })],
  ], [
    q("hard", "A 15 000-dollar loan at 8%/a compounded monthly is repaid over 4 years. Find the balance owing after 24 payments (dollars).", num(+m(balance(15000, payPV(15000, 0.08 / 12, 48), 0.08 / 12, 24)), 0.05),
      "PV of the 24 remaining payments.", ["Find R first."], m(balance(15000, payPV(15000, 0.08 / 12, 48), 0.08 / 12, 24))),
    q("hard", "A 3000-dollar credit-card balance at 19.2%/a compounded monthly is paid off with 150 dollars a month. How many payments are needed?", num(paymentsToRepay(3000, 150, 0.016)),
      "i = 0.016; guess and check.", ["Find n with PV of payments ≥ 3000."], String(paymentsToRepay(3000, 150, 0.016))),
    q("hard", "How much more interest is paid on a 30 000-dollar, 5-year loan at 7%/a than at 4%/a (both compounded monthly)? (dollars)", num(+m((payPV(30000, 0.07 / 12, 60) - payPV(30000, 0.04 / 12, 60)) * 60), 0.5),
      "Compare Rn − PV.", ["Find both payments."], m((payPV(30000, 0.07 / 12, 60) - payPV(30000, 0.04 / 12, 60)) * 60)),
  ]),

  wrapUp({
    qas: [
      ["Why is most of an early payment interest?", "Interest is charged on the balance, which is largest at the start."],
      ["How do I find what is still owed?", "Find the present value of the remaining payments."],
      ["Is a longer term a good idea?", "It lowers each payment but raises the total interest."],
      ["Why do extra payments help so much?", "Every extra dollar reduces the balance, so less interest is charged from then on."],
      ["Why use technology here?", "Tables with dozens of rows and many 'what if' comparisons are quick in a spreadsheet."],
    ],
    summary: [
      "Interest = balance × i; principal = R − interest.",
      "Balance = PV of remaining payments.",
      "Higher rate or longer term → more interest.",
      "Extra payments → shorter loan, less interest.",
    ],
    next: "8.7 reviews the chapter.",
  }),
];
