// MCF3M Worksheet 8.3 — Present Value (teacher edition).
import { S, f, G, T, PVl, P } from "./wk.mjs";
const pv = (A0, r, m, t) => PVl(A0, r / m, m * t);

const EXAMPLES = [
  { title: "Annual", q: S`How much must be invested now at $5\%$ compounded annually to have $6000$ dollars in $4$ years?`, fig: T({ n: 4, unit: "years", flows: [{ at: 0, label: f(pv(6000, 0.05, 1, 4)), up: false }, { at: 4, label: "6000" }] }),
    steps: [S`$PV=6000(1.05)^{-4}$.`, S`$\approx${f(pv(6000, 0.05, 1, 4))}$ dollars.`], ans: S`$\approx${f(pv(6000, 0.05, 1, 4))}$ dollars` },
  { title: "Quarterly", q: S`Find the present value of $12\,500$ dollars due in $6$ years at $4.4\%$ compounded quarterly.`, fig: T({ n: 24, unit: "quarters", flows: [{ at: 0, label: f(pv(12500, 0.044, 4, 6)), up: false }, { at: 24, label: "12 500" }] }),
    steps: [S`$i=0.011$, $n=24$.`, S`$PV\approx${f(pv(12500, 0.044, 4, 6))}$.`], ans: S`$\approx${f(pv(12500, 0.044, 4, 6))}$ dollars` },
  { title: "Monthly", q: S`Find the present value of $4000$ dollars due in $30$ months at $6\%$ compounded monthly.`, fig: T({ n: 30, unit: "months", flows: [{ at: 0, label: f(pv(4000, 0.06, 12, 2.5)), up: false }, { at: 30, label: "4000" }] }),
    steps: [S`$i=0.005$, $n=30$.`, S`$PV\approx${f(pv(4000, 0.06, 12, 2.5))}$.`], ans: S`$\approx${f(pv(4000, 0.06, 12, 2.5))}$ dollars` },
  { title: "Interest earned", q: S`For the quarterly example, how much interest is earned?`, fig: G([{ f: (t) => pv(12500, 0.044, 4, 6) * 1.011 ** (4 * t), color: "violet" }], { view: { xmin: 0, xmax: 6.5, ymin: 9000, ymax: 13000 }, step: { x: 1, y: 500 }, points: [P(6, 12500, "(6, 12 500)")] }),
    steps: [S`$I=12500-PV$.`, S`$\approx${f(12500 - pv(12500, 0.044, 4, 6))}$ dollars.`], ans: S`$\approx${f(12500 - pv(12500, 0.044, 4, 6))}$ dollars` },
  { title: "Semi-annual", q: S`Find the present value of $20\,000$ dollars due in $8$ years at $3.8\%$ compounded semi-annually.`, fig: T({ n: 16, unit: "half-years", flows: [{ at: 0, label: f(pv(20000, 0.038, 2, 8)), up: false }, { at: 16, label: "20 000" }] }),
    steps: [S`$i=0.019$, $n=16$.`, S`$PV\approx${f(pv(20000, 0.038, 2, 8))}$.`], ans: S`$\approx${f(pv(20000, 0.038, 2, 8))}$ dollars` },
  { title: "Now or later", q: S`Which is worth more at $6\%$ compounded monthly: $7000$ dollars now or $8000$ dollars in $2$ years?`, fig: T({ n: 24, unit: "months", flows: [{ at: 0, label: "7000 now", up: false }, { at: 24, label: "8000" }] }),
    steps: [S`$PV$ of $8000$: $\approx${f(pv(8000, 0.06, 12, 2))}$.`, S`$${f(pv(8000, 0.06, 12, 2))}>7000$: the $8000$ later.`], ans: S`$8000$ in $2$ years` },
  { title: "Two payments", q: S`What single amount now covers $3000$ dollars in $1$ year and $3000$ dollars in $3$ years at $4\%$ compounded annually?`, fig: T({ n: 3, unit: "years", flows: [{ at: 0, label: "PV", up: false }, { at: 1, label: "3000" }, { at: 3, label: "3000" }] }),
    steps: [S`$3000(1.04)^{-1}\approx${f(PVl(3000, 0.04, 1))}$; $3000(1.04)^{-3}\approx${f(PVl(3000, 0.04, 3))}$.`, S`Total $\approx${f(PVl(3000, 0.04, 1) + PVl(3000, 0.04, 3))}$.`], ans: S`$\approx${f(PVl(3000, 0.04, 1) + PVl(3000, 0.04, 3))}$ dollars` },
  { title: "Time and PV", q: S`Find the PV of $5000$ dollars due in $2$, $6$ and $10$ years at $5\%$ compounded annually.`, fig: G([{ f: (t) => 5000 * 1.05 ** -t, color: "violet" }], { view: { xmin: 0, xmax: 12, ymin: 2500, ymax: 5200 }, step: { x: 2, y: 250 }, points: [P(2, +f(PVl(5000, 0.05, 2)), false), P(6, +f(PVl(5000, 0.05, 6)), false), P(10, +f(PVl(5000, 0.05, 10)), false)], ylabel: "PV" }),
    steps: [S`$\approx${f(PVl(5000, 0.05, 2))}$, $\approx${f(PVl(5000, 0.05, 6))}$, $\approx${f(PVl(5000, 0.05, 10))}$.`, S`PV decreases exponentially with time.`], ans: S`$${f(PVl(5000, 0.05, 2))}$, $${f(PVl(5000, 0.05, 6))}$, $${f(PVl(5000, 0.05, 10))}$` },
  { title: "Rate and PV", q: S`Find the PV of $10\,000$ dollars due in $10$ years at $3\%$ and at $8\%$ compounded annually.`, fig: G([{ f: (t) => 10000 * 1.03 ** -t, color: "green" }, { f: (t) => 10000 * 1.08 ** -t, color: "violet" }], { view: { xmin: 0, xmax: 11, ymin: 4000, ymax: 10500 }, step: { x: 1, y: 500 }, ylabel: "PV" }),
    steps: [S`$3\%$: $\approx${f(PVl(10000, 0.03, 10))}$.`, S`$8\%$: $\approx${f(PVl(10000, 0.08, 10))}$: higher rate, smaller PV.`], ans: S`$${f(PVl(10000, 0.03, 10))}$; $${f(PVl(10000, 0.08, 10))}$` },
];

const PROBLEMS = [
  { level: 1, q: S`Find the PV of $2000$ dollars due in $3$ years at $4\%$ compounded annually.`, ans: S`$\approx${f(PVl(2000, 0.04, 3))}$ dollars` },
  { level: 1, q: S`Find the PV of $1000$ dollars due in $2$ years at $6\%$ compounded semi-annually.`, ans: S`$\approx${f(pv(1000, 0.06, 2, 2))}$ dollars` },
  { level: 1, q: S`Write the PV formula and explain the negative exponent.`, ans: S`$PV=A(1+i)^{-n}$: dividing by growth` },
  { level: 2, q: S`Find the PV of $15\,000$ dollars due in $5$ years at $3.6\%$ compounded monthly.`, ans: S`$\approx${f(pv(15000, 0.036, 12, 5))}$ dollars` },
  { level: 2, q: S`Find the PV of $9000$ dollars due in $4$ years at $5\%$ compounded quarterly, and the interest earned.`, ans: S`$\approx${f(pv(9000, 0.05, 4, 4))}$; $\approx${f(9000 - pv(9000, 0.05, 4, 4))}$` },
  { level: 2, q: S`Which is worth more at $5\%$ compounded annually: $4500$ now or $5000$ in $2$ years?`, ans: S`PV $\approx${f(PVl(5000, 0.05, 2))}$: the $4500$ now` },
  { level: 2, q: S`Find the PV of $50\,000$ dollars due in $18$ years at $4.5\%$ compounded annually.`, ans: S`$\approx${f(PVl(50000, 0.045, 18))}$ dollars` },
  { level: 2, q: S`Find the PV of $2400$ dollars due in $9$ months at $8\%$ compounded monthly.`, ans: S`$\approx${f(pv(2400, 0.08, 12, 0.75))}$ dollars` },
  { level: 3, space: 5, q: S`A student needs $4000$ dollars in $1$ year and $4000$ dollars in $2$ years. At $3\%$ compounded monthly, how much must be invested now?`, ans: S`$\approx${f(pv(4000, 0.03, 12, 1) + pv(4000, 0.03, 12, 2))}$ dollars` },
  { level: 3, space: 5, q: S`A debt of $10\,000$ dollars due in $3$ years is paid off now at $6\%$ compounded quarterly. How much is paid now, and how much is saved?`, ans: S`$\approx${f(pv(10000, 0.06, 4, 3))}$; $\approx${f(10000 - pv(10000, 0.06, 4, 3))}$` },
  { level: 3, space: 5, q: S`Option A: $25\,000$ dollars now. Option B: $15\,000$ dollars in $1$ year and $15\,000$ dollars in $4$ years. At $7\%$ compounded annually, which is better?`, ans: S`B: PV $\approx${f(PVl(15000, 0.07, 1) + PVl(15000, 0.07, 4))}$ — ${PVl(15000, 0.07, 1) + PVl(15000, 0.07, 4) > 25000 ? "B" : "A"}` },
  { level: 3, space: 5, q: S`How does doubling the time change the PV of a fixed amount? Show with $1000$ dollars at $6\%$ annually for $5$ and $10$ years.`, ans: S`$${f(PVl(1000, 0.06, 5))}$ and $${f(PVl(1000, 0.06, 10))}$: the factor is squared` },
  { level: 3, space: 5, q: S`Explain why lenders and savers both care about present value.`, ans: S`it compares money at different times fairly` },
];

export const WS = {
  code: "8.3",
  title: "Present Value",
  bigideas: S`Present value is the amount needed now to grow to a future amount: $PV=A(1+i)^{-n}=\frac{A}{(1+i)^n}$, with $i=\frac rm$ and $n=mt$. It is smaller when the time is longer or the rate higher. To compare payments made at different times, move them all to today and compare present values.`,
  goals: ["Compute present value.", "Find interest earned.", "Compare payments at different times.", "Describe the effect of time and rate."],
  curriculum: "D1.3, D1.4",
  vocab: [["Present value", "$A(1+i)^{-n}$"], ["Discounting", "moving money back"], ["Maturity", "end date"], ["Equivalent", "same value at a rate"]],
  hook: S`How much would you pay today for a promise of $10\,000$ dollars in $10$ years?`,
  concepts: [
    ["1. Back in time", S`Divide by $(1+i)$ once for each period.
${T({ n: 6, unit: "years", flows: [{ at: 0, label: "PV = A(1 + i)⁻ⁿ", up: false }, { at: 6, label: "A" }] })}`],
    ["2. Comparing", S`Move all payments to the same date, then add or compare.`],
  ],
  tips: ["Negative exponent.", "Same $i$, $n$ as FV.", "Compare at one date."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
