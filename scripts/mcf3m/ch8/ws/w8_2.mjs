// MCF3M Worksheet 8.2 — Compound Interest: Future Value (teacher edition).
import { S, f, G, T, A, P } from "./wk.mjs";
const fv = (P0, r, m, t) => A(P0, r / m, m * t);

const EXAMPLES = [
  { title: "i and n", q: S`Find $i$ and $n$ for $7.2\%$ compounded monthly for $6$ years.`, fig: T({ n: 72, unit: "months", flows: [{ at: 0, label: "P", up: false }, { at: 72, label: "A" }] }),
    steps: [S`$i=\frac{0.072}{12}=0.006$.`, S`$n=12\times6=72$.`], ans: S`$i=0.006$, $n=72$` },
  { title: "Quarterly", q: S`Find the future value of $6000$ dollars at $5.2\%$ compounded quarterly for $4$ years.`, fig: T({ n: 16, unit: "quarters", flows: [{ at: 0, label: "6000", up: false }, { at: 16, label: f(fv(6000, 0.052, 4, 4)) }] }),
    steps: [S`$i=0.013$, $n=16$.`, S`$A=6000(1.013)^{16}\approx${f(fv(6000, 0.052, 4, 4))}$.`], ans: S`$\approx${f(fv(6000, 0.052, 4, 4))}$ dollars` },
  { title: "Semi-annual", q: S`Find the future value of $3500$ dollars at $4.4\%$ compounded semi-annually for $9$ years.`, fig: T({ n: 18, unit: "half-years", flows: [{ at: 0, label: "3500", up: false }, { at: 18, label: f(fv(3500, 0.044, 2, 9)) }] }),
    steps: [S`$i=0.022$, $n=18$.`, S`$A\approx${f(fv(3500, 0.044, 2, 9))}$.`], ans: S`$\approx${f(fv(3500, 0.044, 2, 9))}$ dollars` },
  { title: "Monthly", q: S`Find the future value of $900$ dollars at $3\%$ compounded monthly for $10$ years.`, fig: G([{ f: (t) => fv(900, 0.03, 12, t), color: "violet" }], { view: { xmin: 0, xmax: 11, ymin: 800, ymax: 1300 }, step: { x: 1, y: 50 }, points: [P(10, +f(fv(900, 0.03, 12, 10)), f(fv(900, 0.03, 12, 10)))] }),
    steps: [S`$i=0.0025$, $n=120$.`, S`$A\approx${f(fv(900, 0.03, 12, 10))}$.`], ans: S`$\approx${f(fv(900, 0.03, 12, 10))}$ dollars` },
  { title: "Interest earned", q: S`How much interest does $6000$ dollars earn at $5.2\%$ compounded quarterly for $4$ years?`, fig: G([{ f: (t) => fv(6000, 0.052, 4, t), color: "violet" }], { view: { xmin: 0, xmax: 5, ymin: 5800, ymax: 7600 }, step: { x: 1, y: 200 }, points: [P(4, +f(fv(6000, 0.052, 4, 4)), f(fv(6000, 0.052, 4, 4)))] }),
    steps: [S`$I=A-P$.`, S`$\approx${f(fv(6000, 0.052, 4, 4) - 6000)}$ dollars.`], ans: S`$\approx${f(fv(6000, 0.052, 4, 4) - 6000)}$ dollars` },
  { title: "Frequency", q: S`Compare $5000$ dollars at $6\%$ for $8$ years compounded annually, quarterly and monthly.`, fig: G([], { view: { xmin: 0, xmax: 4, ymin: 7900, ymax: 8100 }, step: { x: 1, y: 25 }, xlabel: "frequency", points: [P(1, +f(fv(5000, 0.06, 1, 8)), "annual"), P(2, +f(fv(5000, 0.06, 4, 8)), "quarterly"), P(3, +f(fv(5000, 0.06, 12, 8)), "monthly")] }),
    steps: [S`Annual $\approx${f(fv(5000, 0.06, 1, 8))}$; quarterly $\approx${f(fv(5000, 0.06, 4, 8))}$.`, S`Monthly $\approx${f(fv(5000, 0.06, 12, 8))}$: more frequent is better.`], ans: S`monthly is largest` },
  { title: "Effective rate", q: S`Find the effective annual rate of $5\%$ compounded quarterly.`, fig: G([{ f: (t) => 1000 * 1.0125 ** (4 * t), color: "violet" }], { view: { xmin: 0, xmax: 5, ymin: 950, ymax: 1300 }, step: { x: 1, y: 50 } }),
    steps: [S`$(1.0125)^4\approx${(1.0125 ** 4).toFixed(6)}$.`, S`Effective rate $\approx${f((1.0125 ** 4 - 1) * 100)}\%$.`], ans: S`$\approx${f((1.0125 ** 4 - 1) * 100)}\%$` },
  { title: "A GIC", q: S`A $5$-year GIC pays $3.3\%$ compounded semi-annually on $10\,000$ dollars. Find its maturity value.`, fig: T({ n: 10, unit: "half-years", flows: [{ at: 0, label: "10 000", up: false }, { at: 10, label: f(fv(10000, 0.033, 2, 5)) }] }),
    steps: [S`$i=0.0165$, $n=10$.`, S`$A\approx${f(fv(10000, 0.033, 2, 5))}$.`], ans: S`$\approx${f(fv(10000, 0.033, 2, 5))}$ dollars` },
  { title: "Daily", q: S`Find the future value of $2000$ dollars at $2.9\%$ compounded daily for $3$ years.`, fig: G([{ f: (t) => fv(2000, 0.029, 365, t), color: "violet" }], { view: { xmin: 0, xmax: 3.5, ymin: 1950, ymax: 2250 }, step: { x: 0.5, y: 50 } }),
    steps: [S`$i=\frac{0.029}{365}$, $n=1095$.`, S`$A\approx${f(fv(2000, 0.029, 365, 3))}$.`], ans: S`$\approx${f(fv(2000, 0.029, 365, 3))}$ dollars` },
];

const PROBLEMS = [
  { level: 1, q: S`Find $i$ and $n$: $4.8\%$ compounded quarterly for $7$ years.`, ans: S`$0.012$; $28$` },
  { level: 1, q: S`Find $A$: $1000$ dollars at $6\%$ compounded semi-annually for $2$ years.`, ans: S`$\approx${f(fv(1000, 0.06, 2, 2))}$ dollars` },
  { level: 1, q: S`Find $A$: $500$ dollars at $12\%$ compounded monthly for $1$ year.`, ans: S`$\approx${f(fv(500, 0.12, 12, 1))}$ dollars` },
  { level: 2, q: S`Find $A$: $7500$ dollars at $3.6\%$ compounded monthly for $6$ years.`, ans: S`$\approx${f(fv(7500, 0.036, 12, 6))}$ dollars` },
  { level: 2, q: S`Find the interest: $2200$ dollars at $5\%$ compounded quarterly for $3$ years.`, ans: S`$\approx${f(fv(2200, 0.05, 4, 3) - 2200)}$ dollars` },
  { level: 2, q: S`Find the effective annual rate of $9\%$ compounded monthly.`, ans: S`$\approx${f(((1 + 0.09 / 12) ** 12 - 1) * 100)}\%$` },
  { level: 2, q: S`Find $A$: $4000$ dollars at $2.5\%$ compounded annually for $15$ years.`, ans: S`$\approx${f(fv(4000, 0.025, 1, 15))}$ dollars` },
  { level: 2, q: S`Find $A$: $1500$ dollars at $4\%$ compounded semi-annually for $30$ months.`, ans: S`$1500(1.02)^5\approx${f(1500 * 1.02 ** 5)}$ dollars` },
  { level: 3, space: 5, q: S`Which is better for $8000$ dollars over $6$ years: $4.5\%$ compounded annually or $4.4\%$ compounded monthly?`, ans: S`$\approx${f(fv(8000, 0.045, 1, 6))}$ vs $\approx${f(fv(8000, 0.044, 12, 6))}$: ${fv(8000, 0.044, 12, 6) > fv(8000, 0.045, 1, 6) ? "monthly" : "annually"}` },
  { level: 3, space: 5, q: S`$3000$ dollars is invested at $6\%$ compounded quarterly for $2$ years, then the total at $4\%$ compounded monthly for $3$ more years. Find the final amount.`, ans: S`$\approx${f(fv(fv(3000, 0.06, 4, 2), 0.04, 12, 3))}$ dollars` },
  { level: 3, space: 5, q: S`How much more does $10\,000$ dollars earn at $5\%$ for $20$ years compounded monthly rather than annually?`, ans: S`$\approx${f(fv(10000, 0.05, 12, 20) - fv(10000, 0.05, 1, 20))}$ dollars` },
  { level: 3, space: 5, q: S`Explain why the gain from compounding daily instead of monthly is very small.`, ans: S`the extra interest-on-interest per year is tiny` },
  { level: 3, space: 5, q: S`Find the effective annual rate of $4\%$ compounded semi-annually, and use it to find the value of $5000$ dollars after $10$ years.`, ans: S`$4.04\%$; $\approx${f(fv(5000, 0.04, 2, 10))}$ dollars` },
];

export const WS = {
  code: "8.2",
  title: "Compound Interest: Future Value",
  bigideas: S`For compounding $m$ times a year at annual rate $r$ for $t$ years: $i=\frac rm$, $n=mt$, and $A=P(1+i)^n$. Interest earned is $A-P$. More frequent compounding earns more, but by less and less. The effective annual rate $(1+i)^m-1$ compares offers fairly.`,
  goals: ["Find $i$ and $n$.", "Compute future value.", "Find interest earned.", "Compare frequencies; effective rate."],
  curriculum: "D1.2, D1.3, D1.5",
  vocab: [["$m$", "periods per year"], ["$i$", "$\\frac rm$"], ["$n$", "$mt$"], ["Effective rate", "$(1+i)^m-1$"]],
  hook: S`Does $6\%$ compounded monthly really mean more than $6\%$ a year?`,
  concepts: [
    ["1. Counting periods", S`Everything is in periods.
${T({ n: 12, unit: "quarters", flows: [{ at: 0, label: "P", up: false }, { at: 12, label: "A = P(1 + i)ⁿ" }] })}`],
    ["2. Frequency", S`Annual < semi-annual < quarterly < monthly < daily, with shrinking gains.`],
  ],
  tips: ["$i=r/m$, $n=mt$.", "$I=A-P$.", "One calculator line."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
