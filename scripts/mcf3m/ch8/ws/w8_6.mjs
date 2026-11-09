// MCF3M Worksheet 8.6 — Annuities: Present Value (teacher edition).
import { S, f, G, T, PVa, PVl, P, pays } from "./wk.mjs";

const EXAMPLES = [
  { title: "By adding", q: S`Find the PV of $600$ dollars at the end of each year for $3$ years at $4\%$ compounded annually by adding.`, fig: T({ n: 3, unit: "years", flows: [{ at: 0, label: "PV", up: false }, ...pays(3, "600", true)] }),
    steps: [S`$600(1.04)^{-1}+600(1.04)^{-2}+600(1.04)^{-3}\approx${f(PVl(600, 0.04, 1))}+${f(PVl(600, 0.04, 2))}+${f(PVl(600, 0.04, 3))}$.`, S`$\approx${f(PVa(600, 0.04, 3))}$ dollars.`], ans: S`$\approx${f(PVa(600, 0.04, 3))}$ dollars` },
  { title: "Formula check", q: S`Check with $PV=R\frac{1-(1+i)^{-n}}{i}$.`, fig: T({ n: 3, unit: "years", flows: [{ at: 0, label: f(PVa(600, 0.04, 3)), up: false }, ...pays(3, "600", true)] }),
    steps: [S`$600\cdot\frac{1-1.04^{-3}}{0.04}$.`, S`$\approx${f(PVa(600, 0.04, 3))}$ \checkmark`], ans: S`$\approx${f(PVa(600, 0.04, 3))}$ dollars` },
  { title: "Monthly withdrawals", q: S`How much is needed now to withdraw $300$ dollars at the end of each month for $3$ years at $4.2\%$ compounded monthly?`, fig: T({ n: 36, unit: "months", flows: [{ at: 0, label: f(PVa(300, 0.0035, 36)), up: false }, ...pays(36, "300", true)] }),
    steps: [S`$i=0.0035$, $n=36$.`, S`$PV\approx${f(PVa(300, 0.0035, 36))}$.`], ans: S`$\approx${f(PVa(300, 0.0035, 36))}$ dollars` },
  { title: "Loan size", q: S`What loan can be repaid by $275$ dollars a month for $4$ years at $7.2\%$ compounded monthly?`, fig: T({ n: 48, unit: "months", flows: [{ at: 0, label: f(PVa(275, 0.006, 48)), up: false }, ...pays(48, "275", true)] }),
    steps: [S`$i=0.006$, $n=48$.`, S`$PV\approx${f(PVa(275, 0.006, 48))}$.`], ans: S`$\approx${f(PVa(275, 0.006, 48))}$ dollars` },
  { title: "Interest on the loan", q: S`For that loan, how much interest is paid?`, fig: G([{ f: (t) => 275 * 12 * t, color: "green" }, { f: (t) => PVa(275, 0.006, 12 * t), color: "violet" }], { view: { xmin: 0, xmax: 5, ymin: 0, ymax: 14000 }, step: { x: 1, y: 2000 }, xlabel: "term (years)", ylabel: "dollars" }),
    steps: [S`Paid $48\times275=13200$.`, S`Interest $\approx${f(13200 - PVa(275, 0.006, 48))}$.`], ans: S`$\approx${f(13200 - PVa(275, 0.006, 48))}$ dollars` },
  { title: "Quarterly", q: S`Find the PV of $1000$ dollars each quarter for $6$ years at $5\%$ compounded quarterly.`, fig: T({ n: 24, unit: "quarters", flows: [{ at: 0, label: f(PVa(1000, 0.0125, 24)), up: false }, ...pays(24, "1000", true)] }),
    steps: [S`$i=0.0125$, $n=24$.`, S`$PV\approx${f(PVa(1000, 0.0125, 24))}$.`], ans: S`$\approx${f(PVa(1000, 0.0125, 24))}$ dollars` },
  { title: "Lump sum vs payments", q: S`Take $50\,000$ now or $6000$ a year for $12$ years at $6\%$ compounded annually?`, fig: T({ n: 12, unit: "years", flows: [{ at: 0, label: "50 000", up: false }, ...pays(12, "6000", true)] }),
    steps: [S`PV of payments $\approx${f(PVa(6000, 0.06, 12))}$.`, S`${PVa(6000, 0.06, 12) > 50000 ? "The payments are worth more." : "The lump sum is worth more."}`], ans: S`${PVa(6000, 0.06, 12) > 50000 ? "payments" : "lump sum"}` },
  { title: "Term and loan size", q: S`With $400$ a month at $6\%$ compounded monthly, how big a loan for $3$, $5$ and $10$ years?`, fig: G([{ f: (t) => PVa(400, 0.005, 12 * t), color: "violet" }], { view: { xmin: 0, xmax: 11, ymin: 0, ymax: 40000 }, step: { x: 1, y: 4000 }, xlabel: "term (years)", ylabel: "loan" }),
    steps: [S`$\approx${f(PVa(400, 0.005, 36))}$, $\approx${f(PVa(400, 0.005, 60))}$, $\approx${f(PVa(400, 0.005, 120))}$.`, S`Longer terms help less and less.`], ans: S`$${f(PVa(400, 0.005, 36))}$, $${f(PVa(400, 0.005, 60))}$, $${f(PVa(400, 0.005, 120))}$` },
  { title: "Rate and loan size", q: S`With $400$ a month for $5$ years, compare loans at $3\%$ and $9\%$ compounded monthly.`, fig: G([{ f: (t) => PVa(400, 0.0025, 12 * t), color: "green" }, { f: (t) => PVa(400, 0.0075, 12 * t), color: "violet" }], { view: { xmin: 0, xmax: 6, ymin: 0, ymax: 24000 }, step: { x: 1, y: 2000 }, xlabel: "term (years)", ylabel: "loan" }),
    steps: [S`$3\%$: $\approx${f(PVa(400, 0.0025, 60))}$.`, S`$9\%$: $\approx${f(PVa(400, 0.0075, 60))}$.`], ans: S`a lower rate supports a bigger loan` },
];

const PROBLEMS = [
  { level: 1, q: S`PV of $1000$ at the end of each year for $2$ years at $5\%$ annually.`, ans: S`$\approx${f(PVa(1000, 0.05, 2))}$ dollars` },
  { level: 1, q: S`Write the PV formula for an annuity.`, ans: S`$PV=R\frac{1-(1+i)^{-n}}{i}$` },
  { level: 1, q: S`A loan is repaid by $60$ payments of $200$. Total paid?`, ans: S`$12\,000$ dollars` },
  { level: 2, q: S`PV of $450$ a month for $2$ years at $6\%$ compounded monthly.`, ans: S`$\approx${f(PVa(450, 0.005, 24))}$ dollars` },
  { level: 2, q: S`What loan can $320$ a month for $5$ years at $4.8\%$ compounded monthly repay?`, ans: S`$\approx${f(PVa(320, 0.004, 60))}$ dollars` },
  { level: 2, q: S`Interest paid on the loan in the previous question.`, ans: S`$\approx${f(19200 - PVa(320, 0.004, 60))}$ dollars` },
  { level: 2, q: S`PV of $2500$ a quarter for $3$ years at $8\%$ compounded quarterly.`, ans: S`$\approx${f(PVa(2500, 0.02, 12))}$ dollars` },
  { level: 2, q: S`Fund needed for $1000$ a month for $5$ years at $3.6\%$ compounded monthly.`, ans: S`$\approx${f(PVa(1000, 0.003, 60))}$ dollars` },
  { level: 3, space: 5, q: S`A retiree needs $2500$ a month for $25$ years at $5.4\%$ compounded monthly. Find the fund needed and the total interest earned by it.`, ans: S`$\approx${f(PVa(2500, 0.0045, 300))}$; $\approx${f(750000 - PVa(2500, 0.0045, 300))}$` },
  { level: 3, space: 5, q: S`A couch: $1800$ cash, or $24$ monthly payments of $85$. What rate (compounded monthly) makes them equal? Test $6\%$ and $12\%$.`, ans: S`PV at $6\%$ $\approx${f(PVa(85, 0.005, 24))}$; at $12\%$ $\approx${f(PVa(85, 0.01, 24))}$ — between` },
  { level: 3, space: 5, q: S`A prize: $200\,000$ now or $15\,000$ a year for $20$ years at $5\%$ compounded annually. Which is better?`, ans: S`PV $\approx${f(PVa(15000, 0.05, 20))}$ — ${PVa(15000, 0.05, 20) > 200000 ? "payments" : "lump sum"}` },
  { level: 3, space: 5, q: S`Explain why the PV of an annuity is less than the total of its payments.`, ans: S`later payments are discounted more` },
  { level: 3, space: 5, q: S`A scholarship fund pays $1500$ at the end of each half-year for $4$ years at $4\%$ compounded semi-annually. Find the fund needed.`, ans: S`$\approx${f(PVa(1500, 0.02, 8))}$ dollars` },
];

export const WS = {
  code: "8.6",
  title: "Annuities: Present Value",
  bigideas: S`The present value of an annuity is the amount that, invested now, funds all the payments — or the loan the payments repay: $PV=R\cdot\frac{1-(1+i)^{-n}}{i}$. Interest on a loan $=nR-PV$. Compare a lump sum with a stream of payments by comparing present values.`,
  goals: ["Compute PV of an annuity.", "Fund withdrawals.", "Find loan size and interest.", "Compare offers."],
  curriculum: "D2.3, D2.4, D2.5",
  vocab: [["PV of annuity", "$R\\frac{1-(1+i)^{-n}}{i}$"], ["Withdrawal", "payment out of a fund"], ["Principal", "amount borrowed"], ["Lump sum", "one payment"]],
  hook: S`How much would you need in the bank today to pay yourself $1000$ a month for $5$ years?`,
  concepts: [
    ["1. Discounting each payment", S`${T({ n: 5, unit: "years", flows: [{ at: 0, label: "PV", up: false }, ...pays(5, "R", true)] })}`],
    ["2. Formula", S`$PV=R\cdot\frac{1-(1+i)^{-n}}{i}$.`],
  ],
  tips: ["Exponent $-n$.", "Loan $=$ PV of payments.", "Interest $=nR-PV$."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
