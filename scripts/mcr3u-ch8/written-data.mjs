// MCR3U chapter 8 written-response (long_answer) questions for printed chapter tests (Part C), each with a figure.
// Math uses $…$ delimiters like the earlier chapters; every money value is computed.
import { growthD, barsD, timelineD, fv, pv, annFV, annPV, payPV, payFV, balance, periodsTo, paymentsToRepay, m } from "./bank/fig.mjs";

const T = {
  1: "8.1 Simple Interest", 2: "8.2 Compound Interest: Future Value", 3: "8.3 Compound Interest: Present Value",
  4: "8.4 Annuities: Future Value", 5: "8.5 Annuities: Present Value", 6: "8.6 Loans, Amortization and Changing Conditions",
};
const W = (t, difficulty, points, prompt, feedback, fig) => ({ topic: T[t], difficulty, points, prompt, feedback, kind: "long_answer", answer: null, choices: null, fig });
const S = String.raw;
const gapYr = (() => { let t = 1; while (fv(5000, 0.06, t) - 5000 * (1 + 0.06 * t) <= 1000) t++; return t; })();
const Rm = payPV(240000, 0.0045, 300), extraN = paymentsToRepay(240000, Rm + 250, 0.0045);
const extraInt = (() => { let b = 240000, t = 0; while (b > 0.005) { const i = b * 0.0045; t += i; b = b + i - Math.min(Rm + 250, b + i); } return t; })();

export const WRITTEN = [
  W(1, "medium", 4, S`A friend lends you 1500 dollars at 4%/a simple interest. (a) Find the amount owed after 3 years. (b) Write the amount owed at the end of year $n$ as a sequence and identify its type. (c) Explain why its graph is a straight line and state its slope.`,
    S`(a) $1500(1+0.12)=1680$. (b) $t_n=1500+60n$: arithmetic with $d=60$. (c) The same 60 dollars is added each year: slope 60 dollars per year. [1, 2, 1.]`,
    growthD([{ f: (t) => 1500 * (1 + 0.04 * t), color: "green" }], 10)),
  W(1, "hard", 5, `5000 dollars is invested at 6%/a, either with simple interest or compounded annually. (a) Find both amounts after 10 years. (b) After how many whole years does compound interest earn at least 1000 dollars more than simple interest? (c) Use the graph to explain why the gap keeps growing.`,
    `(a) Simple 8000; compound ${m(fv(5000, 0.06, 10))}. (b) Year ${gapYr}. (c) Simple interest grows linearly; compound grows exponentially because interest earns interest, so the curves separate faster and faster. [2, 2, 1.]`,
    growthD([{ f: (t) => 5000 * (1 + 0.06 * t), color: "green" }, { f: (t) => 5000 * 1.06 ** t }], 25)),
  W(2, "medium", 4, S`8000 dollars is invested for 6 years at 4.8%/a. (a) Find the amount if interest is compounded annually. (b) Find the amount if it is compounded monthly. (c) Explain why monthly compounding gives more.`,
    `(a) ${m(fv(8000, 0.048, 6))}. (b) ${m(fv(8000, 0.004, 72))}. (c) Interest is added sooner, so it starts earning interest earlier. [1, 2, 1.]`,
    growthD([{ f: (t) => 8000 * 1.048 ** t }, { f: (t) => 8000 * 1.004 ** (12 * t), color: "amber" }], 6)),
  W(2, "hard", 5, S`(a) An investment of 3000 dollars grows to ${m(fv(3000, 0.015, 24))} dollars in 6 years with quarterly compounding. Find the annual rate. (b) Find the effective annual rate. (c) Show that the year-end amounts form a geometric sequence and give the ratio.`,
    S`(a) $(1+i)^{24}=\frac{${m(fv(3000, 0.015, 24))}}{3000}\Rightarrow i=0.015$: 6%/a. (b) $1.015^4-1\approx${((1.015 ** 4 - 1) * 100).toFixed(2)}\%$. (c) Each year multiplies by $1.015^4\approx${(1.015 ** 4).toFixed(4)}$. [2, 1, 2.]`,
    barsD([1, 2, 3, 4, 5, 6].map((y) => fv(3000, 0.015, 4 * y)), { xlabel: "year", ylabel: "amount" })),
  W(3, "medium", 4, S`Parents want 25 000 dollars for their child's education in 12 years. (a) How much should they invest now at 4%/a compounded semi-annually? (b) How much less would they need to invest at 6%/a compounded semi-annually? (c) Explain why a higher rate lowers the present value.`,
    `(a) ${m(pv(25000, 0.02, 24))}. (b) ${m(pv(25000, 0.02, 24) - pv(25000, 0.03, 24))} less. (c) Money grows faster, so less is needed now to reach the same goal. [1, 2, 1.]`,
    growthD([{ f: (t) => pv(25000, 0.02, 24) * 1.02 ** (2 * t) }, { f: (t) => pv(25000, 0.03, 24) * 1.03 ** (2 * t), color: "amber" }], 12)),
  W(3, "hard", 5, S`You can receive 10 000 dollars now, 6000 dollars now plus 5000 dollars in 3 years, or 12 500 dollars in 5 years. Money earns 5%/a compounded annually. (a) Find the present value of each option. (b) Which is best? (c) How many whole years would it take 10 000 dollars to grow to 12 500 dollars at this rate?`,
    `(a) 10 000; ${m(6000 + pv(5000, 0.05, 3))}; ${m(pv(12500, 0.05, 5))}. (b) The best option has the largest present value. (c) ${periodsTo(1.25, 0.05)} years. [3, 1, 1.]`,
    timelineD(5, { 3: "5000", 5: "12 500" }, "10 000 / 6000")),
  W(4, "medium", 4, S`Jordan deposits 150 dollars at the end of each month for 8 years at 4.2%/a compounded monthly. (a) Find the future value. (b) How much was deposited and how much is interest? (c) Explain why the future value is the sum of a geometric series.`,
    `(a) ${m(annFV(150, 0.0035, 96))}. (b) Deposits 14 400; interest ${m(annFV(150, 0.0035, 96) - 14400)}. (c) The deposits are worth R, R(1.0035), R(1.0035)², … at the end: ratio 1.0035. [1, 2, 1.]`,
    growthD([{ f: (t) => annFV(150, 0.0035, Math.floor(12 * t)) }, { f: (t) => 150 * Math.floor(12 * t), color: "green" }], 8)),
  W(4, "hard", 5, S`Riley wants 1 000 000 dollars at age 65. (a) Find the monthly deposit needed from age 25 at 6%/a compounded monthly. (b) Find the monthly deposit needed if Riley starts at 45. (c) Compare the total amounts deposited and explain the difference.`,
    `(a) ${m(payFV(1000000, 0.005, 480))}. (b) ${m(payFV(1000000, 0.005, 240))}. (c) Totals ${m(payFV(1000000, 0.005, 480) * 480)} vs ${m(payFV(1000000, 0.005, 240) * 240)}: starting early lets interest do most of the work. [2, 1, 2.]`,
    growthD([{ f: (t) => annFV(payFV(1000000, 0.005, 480), 0.005, Math.floor(12 * t)) }, { f: (t) => (t < 20 ? 0 : annFV(payFV(1000000, 0.005, 240), 0.005, Math.floor(12 * (t - 20)))), color: "amber" }], 40)),
  W(5, "medium", 4, S`A car loan of 22 000 dollars is repaid monthly over 5 years at 6%/a compounded monthly. (a) Find the monthly payment. (b) Find the total interest. (c) Explain why the amount borrowed is the present value of the payments.`,
    `(a) ${m(payPV(22000, 0.005, 60))}. (b) ${m(payPV(22000, 0.005, 60) * 60 - 22000)}. (c) Each payment is worth less today; discounted and added, they equal the 22 000 received now. [1, 1, 2.]`,
    timelineD(6, { 1: "R", 2: "R", 3: "R", 4: "…", 5: "R", 6: "R" }, "22 000")),
  W(5, "hard", 5, S`A retiree has 350 000 dollars invested at 4.8%/a compounded monthly. (a) What equal monthly withdrawal will last exactly 25 years? (b) If they withdraw 2500 dollars a month instead, how many whole years will the money last? (c) Explain what happens if they withdraw only the interest each month.`,
    `(a) ${m(payPV(350000, 0.004, 300))}. (b) ${Math.floor(paymentsToRepay(350000, 2500, 0.004) / 12)} full years (${paymentsToRepay(350000, 2500, 0.004)} withdrawals). (c) 1400 dollars a month; the balance never falls. [2, 2, 1.]`,
    growthD([{ f: (t) => Math.max(0, balance(350000, payPV(350000, 0.004, 300), 0.004, 12 * t)) }, { f: (t) => Math.max(0, balance(350000, 2500, 0.004, 12 * t)), color: "amber" }], 25, { ylabel: "balance" })),
  W(6, "medium", 4, S`A 9000-dollar loan at 9%/a compounded monthly is repaid over 2 years. (a) Find the payment. (b) Complete the first three rows of the amortization table. (c) Explain why the interest part decreases.`,
    (() => { const R = payPV(9000, 0.0075, 24); let b = 9000; const rows = []; for (let k = 1; k <= 3; k++) { const i = b * 0.0075; b = b + i - R; rows.push(`row ${k}: interest ${m(i)}, principal ${m(R - i)}, balance ${m(b)}`); } return `(a) ${m(R)}. (b) ${rows.join("; ")}. (c) Interest is charged on the balance, which falls each month. [1, 2, 1.]`; })(),
    barsD((() => { const R = payPV(9000, 0.0075, 24); let b = 9000; const v = []; for (let k = 0; k < 24; k++) { const i = b * 0.0075; v.push(i); b = b + i - R; } return v; })(), { xlabel: "payment", ylabel: "interest part" })),
  W(6, "hard", 5, S`A 240 000-dollar mortgage at 5.4%/a compounded monthly is amortized over 25 years. (a) Find the monthly payment and the total interest. (b) If 250 dollars extra is paid each month, how many payments are needed and how much interest is saved? (c) Find the balance after 5 years with the regular payment.`,
    `(a) ${m(Rm)}; interest ${m(Rm * 300 - 240000)}. (b) ${extraN} payments; saves ${m(Rm * 300 - 240000 - extraInt)}. (c) ${m(balance(240000, Rm, 0.0045, 60))}. [2, 2, 1.]`,
    growthD([{ f: (t) => Math.max(0, balance(240000, Rm, 0.0045, 12 * t)) }, { f: (t) => Math.max(0, balance(240000, Rm + 250, 0.0045, 12 * t)), color: "amber" }], 25, { ylabel: "balance" })),
  W(6, "hard", 4, S`Compare two ways to pay a 30 000-dollar loan at 7.2%/a compounded monthly: (A) over 4 years, (B) over 7 years. (a) Find each monthly payment. (b) Find each total interest. (c) Give one reason a borrower might still choose option B.`,
    `(a) A ${m(payPV(30000, 0.006, 48))}, B ${m(payPV(30000, 0.006, 84))}. (b) A ${m(payPV(30000, 0.006, 48) * 48 - 30000)}, B ${m(payPV(30000, 0.006, 84) * 84 - 30000)}. (c) The lower payment may fit the monthly budget. [2, 1, 1.]`,
    barsD([payPV(30000, 0.006, 48) * 48 - 30000, payPV(30000, 0.006, 84) * 84 - 30000], { xlabel: "4 years · 7 years", ylabel: "total interest" })),
];
