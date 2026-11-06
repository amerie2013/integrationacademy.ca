// MCR3U Worksheet 8.6 — Loans, Amortization and Changing Conditions (teacher edition)
import { growthT, barsT } from "./finT.mjs";
import { payPV, annFV, balance, paymentsToRepay, m } from "../fin.mjs";
import { tvT } from "../../mcr3u-extables.mjs";

const S = String.raw;
// Example 1 table: 6000 dollars at 9%/a monthly over 1 year
const R1 = payPV(6000, 0.0075, 12);
const rows = []; { let b = 6000; for (let k = 1; k <= 12; k++) { const int = b * 0.0075; b = b + int - R1; rows.push([k, int, R1 - int, b]); } }
const tex = rows.slice(0, 4).map(([k, int, pr, b]) => `${k} & ${m(R1)} & ${m(int)} & ${m(pr)} & ${m(Math.max(0, b))}\\\\`).join("\n");
const cmpRate = [3, 6, 9].map((r) => payPV(25000, r / 1200, 60));
const cmpTerm = [3, 5, 7].map((y) => payPV(25000, 0.005, 12 * y));
const extraN = paymentsToRepay(18000, payPV(18000, 0.005, 60) + 75, 0.005);

const EXAMPLES = [
  { title: "An amortization table", q: "A 6000-dollar loan at 9%/a compounded monthly is repaid in 12 monthly payments. Build the first four rows.",
    steps: [S`\textbf{Payment:} $i=0.0075$, $n=12$: $R=\frac{6000(0.0075)}{1-1.0075^{-12}}\approx${m(R1)}$.`,
      S`\textbf{Each row:} interest = balance $\times i$; principal = payment $-$ interest; new balance = balance $-$ principal.`,
      S`\textbf{Row 1:} interest $6000(0.0075)=45.00$; the rest of the payment reduces the balance.`,
      S`\begin{tabular}{rrrrr}\# & payment & interest & principal & balance\\ \hline ${tex}\end{tabular}`],
    ans: "interest falls, principal rises each month" },
  { title: "Interest vs principal", q: "Graph the interest and principal parts of each payment in Example 1.",
    fig: barsT(rows.map((r) => r[1]), { xlabel: "payment", ylabel: "interest part" }),
    steps: [S`\textbf{Interest part:} it depends on the balance, so it shrinks: ${m(rows[0][1])} at first, ${m(rows[11][1])} at the end.`,
      S`\textbf{Principal part:} payment minus interest, so it grows by the same amount.`,
      S`\textbf{Check:} the two parts always add to ${m(R1)} \checkmark`],
    ans: `interest ${m(rows[0][1])} → ${m(rows[11][1])}` },
  { title: "Outstanding balance", q: "What is owed on the loan in Example 1 after 6 payments?",
    fig: barsT(rows.map((r) => Math.max(0, r[3])), { xlabel: "payment", ylabel: "balance" }),
    steps: [S`\textbf{Idea:} what is owed is the loan grown for $6$ months, minus the payments grown.`,
      S`\textbf{Formula:} $6000(1.0075)^6-\frac{${m(R1)}(1.0075^6-1)}{0.0075}$.`,
      S`\textbf{Calculate:} $\approx${m(balance(6000, R1, 0.0075, 6))}$.`,
      S`\textbf{Check:} it is the PV of the $6$ payments left \checkmark`],
    ans: `${m(balance(6000, R1, 0.0075, 6))} dollars` },
  { title: "Changing the rate", q: "Find the monthly payment on 25 000 dollars over 5 years at 3%, 6% and 9%/a (compounded monthly).",
    fig: barsT(cmpRate, { xlabel: "3% · 6% · 9%", ylabel: "payment", labels: cmpRate.map((v) => m(v)) }),
    steps: [S`\textbf{Same formula,} with $n=60$ and a different $i$.`,
      S`\textbf{Results:}${tvT(["rate", "payment", "interest"], ...cmpRate.map((v, k) => [`${[3, 6, 9][k]}\\%`, m(v), m(v * 60 - 25000)]))}`,
      S`\textbf{Pattern:} each extra $3$ percent raises the payment by about the same amount.`],
    ans: "each extra 3% adds about 34–36 dollars a month" },
  { title: "Changing the term", q: "Find the monthly payment on 25 000 dollars at 6%/a over 3, 5 and 7 years.",
    fig: barsT(cmpTerm, { xlabel: "3 · 5 · 7 years", ylabel: "payment", labels: cmpTerm.map((v) => m(v)) }),
    steps: [S`\textbf{Same formula,} with $i=0.005$ and a different $n$.`,
      S`\textbf{Results:}${tvT(["term", "payment", "interest"], ...cmpTerm.map((v, k) => [`${[3, 5, 7][k]} years`, m(v), m(v * [36, 60, 84][k] - 25000)]))}`,
      S`\textbf{Trade-off:} lower payments last longer, so more interest builds up.`],
    ans: "longer term: smaller payment, more interest" },
  { title: "Extra payments", q: "An 18 000-dollar loan at 6%/a compounded monthly is set up for 5 years. How many payments are needed if 75 dollars extra is paid each month?",
    fig: growthT([{ f: (k) => Math.max(0, balance(18000, payPV(18000, 0.005, 60), 0.005, k)) }, { f: (k) => Math.max(0, balance(18000, payPV(18000, 0.005, 60) + 75, 0.005, k)), color: "amber" }], 60, { xlabel: "months", ylabel: "balance" }),
    steps: [S`\textbf{Regular payment:} ${m(payPV(18000, 0.005, 60))}.`,
      S`\textbf{New payment:} ${m(payPV(18000, 0.005, 60) + 75)}.`,
      S`\textbf{Count:} solve for $n$, or run the balance down: ${extraN} payments.`,
      S`\textbf{Why:} all of the extra goes to principal.`],
    ans: `${extraN} payments instead of 60` },
  { title: "Payment frequency", q: "Compare saving 2400 dollars at the end of each year with 200 dollars at the end of each month for 15 years at 4.8%/a (compounded to match).",
    fig: barsT([annFV(2400, 0.048, 15), annFV(200, 0.004, 180)], { xlabel: "yearly · monthly", ylabel: "future value", labels: [m(annFV(2400, 0.048, 15)), m(annFV(200, 0.004, 180))] }),
    steps: [S`\textbf{Same deposits:} $2400$ per year either way.`,
      S`\textbf{Yearly:} $\frac{2400(1.048^{15}-1)}{0.048}\approx${m(annFV(2400, 0.048, 15))}$.`,
      S`\textbf{Monthly:} $\frac{200(1.004^{180}-1)}{0.004}\approx${m(annFV(200, 0.004, 180))}$.`,
      S`\textbf{Why:} monthly money is invested earlier in each year.`],
    ans: "monthly saving gives more" },
  { title: "Balance over time", q: "Graph the balance of a 200 000-dollar mortgage at 4.8%/a compounded monthly over 25 years.",
    fig: growthT([{ f: (t) => Math.max(0, balance(200000, payPV(200000, 0.004, 300), 0.004, 12 * t)) }], 25, { ylabel: "balance" }),
    steps: [S`\textbf{Payment:} $i=0.004$, $n=300$: $R\approx${m(payPV(200000, 0.004, 300))}$.`,
      S`\textbf{Halfway:} at year $12.5$, the balance is still ${m(balance(200000, payPV(200000, 0.004, 300), 0.004, 150))}.`,
      S`\textbf{Why:} early payments are mostly interest, so the balance falls slowly at first.`],
    ans: "the balance falls slowly at first" },
  { title: "Total interest on a mortgage", q: "Find the total interest on the mortgage in Example 8.",
    fig: barsT([200000, payPV(200000, 0.004, 300) * 300], { xlabel: "borrowed · paid", ylabel: "dollars", labels: ["200 000", m(payPV(200000, 0.004, 300) * 300)] }),
    steps: [S`\textbf{Total paid:} $300\times${m(payPV(200000, 0.004, 300))}\approx${m(payPV(200000, 0.004, 300) * 300)}$.`,
      S`\textbf{Interest:} subtract the loan: ${m(payPV(200000, 0.004, 300) * 300 - 200000)}.`,
      S`\textbf{Meaning:} the interest is a large share of the loan over $25$ years.`],
    ans: `${m(payPV(200000, 0.004, 300) * 300 - 200000)} dollars` },
];

const PROBLEMS = [
  { level: 1, q: "A loan balance is 8000 dollars at 7.2%/a compounded monthly. Find the interest for the next month.", recap: "Interest.", ans: "48 dollars" },
  { level: 1, q: "Continuing: a payment of 350 dollars is made. How much of it reduces the principal, and what is the new balance?", recap: "Principal.", ans: "302 dollars; 7698 dollars" },
  { level: 1, q: "State what happens to the total interest when the term of a loan increases.", recap: "Term.", ans: "it increases" },
  { level: 2, q: "Find the monthly payment on 12 000 dollars over 4 years at 5.4%/a compounded monthly and the first month's interest.", recap: "Payment.", ans: `${m(payPV(12000, 0.0045, 48))}; 54 dollars` },
  { level: 2, q: "Find the balance after 12 payments on the loan in Problem 4.", recap: "Balance.", ans: `${m(balance(12000, payPV(12000, 0.0045, 48), 0.0045, 12))} dollars` },
  { level: 2, q: "How much total interest is saved by repaying 20 000 dollars at 7.2%/a compounded monthly over 3 years instead of 5?", recap: "Compare terms.", ans: `${m((payPV(20000, 0.006, 60) * 60 - 20000) - (payPV(20000, 0.006, 36) * 36 - 20000))} dollars` },
  { level: 2, q: "Build the first three rows of the amortization table for 3000 dollars at 12%/a compounded monthly over 6 months.", recap: "Table.", ans: `R = ${m(payPV(3000, 0.01, 6))}; row 1 interest 30.00` },
  { level: 2, q: "The graph shows a loan balance. Estimate the balance after half the term and explain why it is more than half the loan.", recap: "Read a graph.", ans: "about 55–60%: early payments are mostly interest", fig: growthT([{ f: (t) => Math.max(0, balance(30000, payPV(30000, 0.006, 120), 0.006, 12 * t)) }], 10, { ylabel: "balance" }) },
  { level: 3, space: 5, q: "A 250 000-dollar mortgage at 5.4%/a compounded monthly over 25 years. How much interest is saved by paying 200 dollars extra each month?", recap: "Extra payments.", ans: (() => { const R = payPV(250000, 0.0045, 300), n = paymentsToRepay(250000, R + 200, 0.0045); let b = 250000, tot = 0; while (b > 0.005) { const int = b * 0.0045; tot += int; b = b + int - Math.min(R + 200, b + int); } return `regular interest ${m(R * 300 - 250000)}; with extra ${m(tot)} (${n} payments)`; })() },
  { level: 3, space: 4, q: "Which saves more interest on 40 000 dollars over 6 years at 7.8%/a compounded monthly: a rate cut of 1% or paying it off 1 year sooner?", recap: "Compare.", ans: (() => { const base = payPV(40000, 0.0065, 72) * 72 - 40000, a = payPV(40000, 0.068 / 12, 72) * 72 - 40000, b = payPV(40000, 0.0065, 60) * 60 - 40000; return `rate cut saves ${m(base - a)}; shorter term saves ${m(base - b)}`; })() },
  { level: 3, space: 4, q: "A credit card balance of 2500 dollars at 21%/a compounded monthly is paid with 75 dollars a month. How many payments are needed, and how much interest is paid?", recap: "Credit card.", ans: (() => { const n = paymentsToRepay(2500, 75, 0.0175); let b = 2500, tot = 0; while (b > 0.005) { const int = b * 0.0175; tot += int; b = b + int - Math.min(75, b + int); } return `${n} payments; about ${m(tot)} interest`; })() },
  { level: 3, space: 4, q: "Explain why the interest part of a loan payment decreases over time while the principal part increases.", recap: "Explain.", ans: "interest is charged on the falling balance; the payment is fixed" },
  { level: 3, space: 4, q: "Using technology, describe the effect on a 30 000-dollar, 5-year loan of switching from monthly to weekly payments of one quarter of the monthly payment.", recap: "Frequency.", ans: "the loan is paid off a little sooner with less interest, because principal is reduced earlier" },
];

export const WS = {
  code: "8.6",
  title: "Loans, Amortization and Changing Conditions",
  bigideas: S`An amortization table tracks each payment: interest = balance × $i$, principal = payment − interest, new balance = balance − principal. A higher rate or longer term increases the total interest; extra or more frequent payments reduce it.`,
  goals: ["Build amortization tables.", "Find outstanding balances.", "Compare rates, terms and frequencies.", "Investigate extra payments."],
  curriculum: "C2.6, C2.7",
  vocab: [["Amortization", "repaying a loan with regular payments"], ["Outstanding balance", "amount still owed"], ["Term", "length of the loan"]],
  hook: "A car dealer says 'only 299 dollars a month!' What questions should you ask before signing?",
  concepts: [
    ["1. One row", S`interest $=$ balance $\times i$; principal $=R-$ interest; new balance $=$ old $-$ principal.`],
    ["2. Balance", S`After $k$ payments: $PV(1+i)^k-\frac{R[(1+i)^k-1]}{i}$, or the PV of the remaining payments.`],
    ["3. What if?", S`${barsT(cmpRate.map((v) => v * 60 - 25000), { width: 5, xlabel: "3% · 6% · 9%", ylabel: "total interest" })}Total interest on 25 000 dollars over 5 years at 3%, 6% and 9%.`],
  ],
  tips: ["Interest on current balance.", "Last payment may differ.", "Lower payment ≠ cheaper.", "Use a spreadsheet.", "Compare total interest."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
