// MCR3U Worksheet 8.5 — Annuities: Present Value (teacher edition)
import { growthT, barsT, timelineT } from "./finT.mjs";
import { annPV, payPV, paymentsToRepay, pv, m } from "../fin.mjs";

const S = String.raw;

const EXAMPLES = [
  { title: "Adding present values", q: "Find the present value of 3 yearly payments of 1000 dollars at 5%/a compounded annually by discounting each payment.",
    fig: timelineT(3, { 1: "1000", 2: "1000", 3: "1000" }, { start: "PV?" }),
    steps: [1, 2, 3].map((k) => `payment ${k}: ${m(pv(1000, 0.05, k))}`), ans: `${m(annPV(1000, 0.05, 3))} dollars` },
  { title: "Formula", q: "Check Example 1 with the formula.", steps: [S`$\frac{1000(1-1.05^{-3})}{0.05}$.`], ans: `${m(annPV(1000, 0.05, 3))} dollars` },
  { title: "Funding monthly withdrawals", q: "How much is needed now to withdraw 600 dollars at the end of each month for 5 years at 4.2%/a compounded monthly?", steps: [S`$i=0.0035$, $n=60$.`], ans: `${m(annPV(600, 0.0035, 60))} dollars` },
  { title: "Loan payment", q: "Find the monthly payment on a 9000-dollar loan over 3 years at 8.4%/a compounded monthly.", steps: [S`$R=\frac{9000(0.007)}{1-1.007^{-36}}$.`], ans: `${m(payPV(9000, 0.007, 36))} dollars` },
  { title: "Total interest", q: "For Example 4, find the total paid and the interest.", steps: [`Total: 36 × ${m(payPV(9000, 0.007, 36))}.`], ans: `${m(payPV(9000, 0.007, 36) * 36 - 9000)} dollars of interest` },
  { title: "How much can I borrow?", q: "You can afford 450 dollars a month for 5 years at 6%/a compounded monthly. How much can you borrow?", steps: [S`$PV=\frac{450(1-1.005^{-60})}{0.005}$.`], ans: `${m(annPV(450, 0.005, 60))} dollars` },
  { title: "Number of payments", q: "How many monthly payments of 250 dollars repay 6000 dollars at 7.2%/a compounded monthly?", steps: ["Guess and check n."], ans: `${paymentsToRepay(6000, 250, 0.006)} payments (last one smaller)` },
  { title: "Lump sum or payments", q: "Compare 400 000 dollars now with 30 000 dollars a year for 20 years at 5%/a compounded annually.",
    fig: barsT([400000, annPV(30000, 0.05, 20)], { xlabel: "lump · payments", ylabel: "value today" }),
    steps: [S`$PV=\frac{30000(1-1.05^{-20})}{0.05}\approx${m(annPV(30000, 0.05, 20))}$.`], ans: annPV(30000, 0.05, 20) > 400000 ? "the payments" : "the lump sum" },
  { title: "Balance falling to zero", q: "Graph the balance of a 20 000-dollar fund paying 2500 dollars a year at 4%/a compounded annually until it runs out.",
    fig: growthT([{ f: (t) => Math.max(0, 20000 * 1.04 ** t - (2500 * (1.04 ** t - 1)) / 0.04) }], paymentsToRepay(20000, 2500, 0.04), { ylabel: "balance" }),
    steps: [`It lasts ${paymentsToRepay(20000, 2500, 0.04)} withdrawals (the last smaller).`], ans: "the balance decreases faster near the end" },
];

const PROBLEMS = [
  { level: 1, q: "Find the present value of 500 dollars at the end of each year for 5 years at 6%/a compounded annually.", recap: "PV.", ans: `${m(annPV(500, 0.06, 5))} dollars` },
  { level: 1, q: "Write the present value of 3 yearly payments of R at rate i as a sum.", recap: "Sum.", ans: S`$R(1+i)^{-1}+R(1+i)^{-2}+R(1+i)^{-3}$` },
  { level: 1, q: "Which formula do you use to find a loan payment?", recap: "Formula.", ans: S`$R=\frac{PV\cdot i}{1-(1+i)^{-n}}$` },
  { level: 2, q: "Find the present value of 180 dollars a month for 4 years at 4.8%/a compounded monthly.", recap: "Monthly PV.", ans: `${m(annPV(180, 0.004, 48))} dollars` },
  { level: 2, q: "Find the quarterly payment on a 15 000-dollar loan over 6 years at 6%/a compounded quarterly.", recap: "Payment.", ans: `${m(payPV(15000, 0.015, 24))} dollars` },
  { level: 2, q: "How much interest is paid on a 4000-dollar loan repaid monthly over 2 years at 12%/a compounded monthly?", recap: "Interest.", ans: `${m(payPV(4000, 0.01, 24) * 24 - 4000)} dollars` },
  { level: 2, q: "How much can be borrowed with payments of 800 dollars every 6 months for 5 years at 7%/a compounded semi-annually?", recap: "Borrow.", ans: `${m(annPV(800, 0.035, 10))} dollars` },
  { level: 2, q: "Fill in the time line and find the PV of 4 payments of 750 dollars at the end of each year at 3%/a.", recap: "Time line.", ans: `${m(annPV(750, 0.03, 4))} dollars`, fig: timelineT(4, { 1: "750", 2: "750", 3: "750", 4: "750" }, { start: "PV?" }) },
  { level: 3, space: 4, q: "A retiree wants 2500 dollars at the end of each month for 25 years from an account earning 4.2%/a compounded monthly. How much is needed at retirement?", recap: "Retirement.", ans: `${m(annPV(2500, 0.0035, 300))} dollars` },
  { level: 3, space: 4, q: "How many monthly payments of 400 dollars repay a 15 000-dollar loan at 9%/a compounded monthly?", recap: "Number of payments.", ans: `${paymentsToRepay(15000, 400, 0.0075)} payments` },
  { level: 3, space: 5, q: "A car costs 32 000 dollars. Option A: 0% financing over 4 years. Option B: a 3000-dollar cash rebate and a loan at 5.4%/a compounded monthly over 4 years. Compare the monthly payments.", recap: "Compare deals.", ans: `A: ${m(32000 / 48)}; B: ${m(payPV(29000, 0.0045, 48))}` },
  { level: 3, space: 4, q: "Explain why the present value of an annuity is a geometric series and identify its first term and ratio.", recap: "Explain.", ans: S`$R(1+i)^{-1}+\cdots$: first term $R(1+i)^{-1}$, ratio $(1+i)^{-1}$` },
  { level: 3, space: 4, q: "A 10 000-dollar loan at 6%/a compounded monthly can be repaid over 3 or 5 years. Compare the payments and total interest.", recap: "Term.", ans: `3 years: ${m(payPV(10000, 0.005, 36))}, interest ${m(payPV(10000, 0.005, 36) * 36 - 10000)}; 5 years: ${m(payPV(10000, 0.005, 60))}, interest ${m(payPV(10000, 0.005, 60) * 60 - 10000)}` },
];

export const WS = {
  code: "8.5",
  title: "Annuities: Present Value",
  bigideas: S`The present value of an annuity is the lump sum now that equals all the payments: $PV=\frac{R[1-(1+i)^{-n}]}{i}$. A loan is the present value of its payments, so $R=\frac{PV\cdot i}{1-(1+i)^{-n}}$ and the interest is $Rn-PV$.`,
  goals: ["Find the PV of an annuity.", "Find loan payments.", "Find total interest.", "Compare a lump sum with payments."],
  curriculum: "C2.5, C2.7",
  vocab: [["PV of an annuity", "lump sum equal to the payments"], ["Loan payment", "$R=\\frac{PV\\cdot i}{1-(1+i)^{-n}}$"], ["Interest", "$Rn-PV$"]],
  hook: "A lottery offers 1000 dollars a week for life or 1 000 000 dollars now. Which would you take? What information do you need?",
  concepts: [
    ["1. Discount every payment", S`${timelineT(4, { 1: "R", 2: "R", 3: "R", 4: "R" }, { start: "PV", width: 5 })}Divide each R by $(1+i)^k$ and add.`],
    ["2. Loans", "The amount borrowed is the PV of the payments."],
    ["3. Interest cost", S`Total paid $Rn$ minus amount borrowed.`],
  ],
  tips: ["Negative exponent.", "PV < Rn.", "Use i per payment period.", "Round payment at the end.", "Compare at the same date."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
