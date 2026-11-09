// MCF3M Worksheet 8.4 — Finding the Interest Rate and the Time (teacher edition).
import { S, f, G, T, P, firstN } from "./wk.mjs";
const rate = (ratio, n, m) => (ratio ** (1 / n) - 1) * m * 100;

const EXAMPLES = [
  { title: "Rate, annual", q: S`$4000$ dollars grew to $5200$ dollars in $6$ years, compounded annually. Find the rate.`, fig: T({ n: 6, unit: "years", flows: [{ at: 0, label: "4000", up: false }, { at: 6, label: "5200" }] }),
    steps: [S`$(1+i)^6=1.3$.`, S`$i=1.3^{\frac16}-1\approx${f(rate(1.3, 6, 1))}\%$.`], ans: S`$\approx${f(rate(1.3, 6, 1))}\%$` },
  { title: "Rate, quarterly", q: S`$2500$ dollars grew to $3100$ dollars in $5$ years, compounded quarterly. Find the annual rate.`, fig: T({ n: 20, unit: "quarters", flows: [{ at: 0, label: "2500", up: false }, { at: 20, label: "3100" }] }),
    steps: [S`$(1+i)^{20}=1.24$; $i=1.24^{\frac1{20}}-1$.`, S`$r=4i\approx${f(rate(1.24, 20, 4))}\%$.`], ans: S`$\approx${f(rate(1.24, 20, 4))}\%$ compounded quarterly` },
  { title: "Rate, monthly", q: S`$1200$ dollars grew to $1500$ dollars in $4$ years, compounded monthly. Find the annual rate.`, fig: T({ n: 48, unit: "months", flows: [{ at: 0, label: "1200", up: false }, { at: 48, label: "1500" }] }),
    steps: [S`$(1+i)^{48}=1.25$.`, S`$r=12\left(1.25^{\frac1{48}}-1\right)\approx${f(rate(1.25, 48, 12))}\%$.`], ans: S`$\approx${f(rate(1.25, 48, 12))}\%$ compounded monthly` },
  { title: "Time, annual", q: S`How many whole years until $2000$ dollars at $5\%$ compounded annually reaches $3000$ dollars?`, fig: G([{ f: (t) => 2000 * 1.05 ** t, color: "violet" }], { view: { xmin: 0, xmax: 12, ymin: 1800, ymax: 3600 }, step: { x: 1, y: 200 }, lines: [{ m: 0, b: 3000, color: "green", dash: true }] }),
    steps: [S`Need $1.05^n\ge1.5$: $1.05^8\approx${(1.05 ** 8).toFixed(4)}$, $1.05^9\approx${(1.05 ** 9).toFixed(4)}$.`, S`$${firstN((n) => 1.05 ** n >= 1.5)}$ years.`], ans: S`$${firstN((n) => 1.05 ** n >= 1.5)}$ years` },
  { title: "Time, monthly", q: S`How many months until $5000$ dollars at $6\%$ compounded monthly reaches $6000$ dollars?`, fig: G([{ f: (t) => 5000 * 1.005 ** t, color: "violet" }], { view: { xmin: 0, xmax: 48, ymin: 4800, ymax: 6400 }, step: { x: 6, y: 200 }, lines: [{ m: 0, b: 6000, color: "green", dash: true }], xlabel: "months" }),
    steps: [S`Need $1.005^n\ge1.2$.`, S`$n=${firstN((n) => 1.005 ** n >= 1.2)}$ months ($1.005^{${firstN((n) => 1.005 ** n >= 1.2)}}\approx${(1.005 ** firstN((n) => 1.005 ** n >= 1.2)).toFixed(4)}$).`], ans: S`$${firstN((n) => 1.005 ** n >= 1.2)}$ months` },
  { title: "Doubling, quarterly", q: S`How long to double at $6\%$ compounded quarterly?`, fig: G([{ f: (t) => 1000 * 1.015 ** (4 * t), color: "violet" }], { view: { xmin: 0, xmax: 14, ymin: 900, ymax: 2400 }, step: { x: 1, y: 200 }, lines: [{ m: 0, b: 2000, color: "red", dash: true }] }),
    steps: [S`Need $1.015^n\ge2$: $n=${firstN((n) => 1.015 ** n >= 2)}$ quarters.`, S`$=${firstN((n) => 1.015 ** n >= 2) / 4}$ years.`], ans: S`$${firstN((n) => 1.015 ** n >= 2)}$ quarters` },
  { title: "Rule of 72", q: S`Estimate doubling times at $3\%$ and $12\%$ with the rule of 72; check $12\%$ annually.`, fig: G([{ f: (t) => 1.12 ** t, color: "violet" }], { view: { xmin: 0, xmax: 8, ymin: 0.8, ymax: 2.6 }, step: { x: 1, y: 0.2 }, lines: [{ m: 0, b: 2, color: "red", dash: true }] }),
    steps: [S`$72\div3=24$ years; $72\div12=6$ years.`, S`$1.12^6\approx${(1.12 ** 6).toFixed(4)}$: very close to $2$.`], ans: S`$24$ and $6$ years` },
  { title: "Tripling rate", q: S`What annual rate (compounded annually) triples money in $15$ years?`, fig: T({ n: 15, unit: "years", flows: [{ at: 0, label: "P", up: false }, { at: 15, label: "3P" }] }),
    steps: [S`$(1+i)^{15}=3$.`, S`$i=3^{\frac1{15}}-1\approx${f(rate(3, 15, 1))}\%$.`], ans: S`$\approx${f(rate(3, 15, 1))}\%$` },
  { title: "Goal with a deadline", q: S`Can $7000$ dollars reach $9000$ dollars in $5$ years at $4.8\%$ compounded monthly?`, fig: G([{ f: (t) => 7000 * 1.004 ** (12 * t), color: "violet" }], { view: { xmin: 0, xmax: 7, ymin: 6800, ymax: 9800 }, step: { x: 1, y: 250 }, lines: [{ m: 0, b: 9000, color: "green", dash: true }] }),
    steps: [S`$7000(1.004)^{60}\approx${f(7000 * 1.004 ** 60)}$.`, S`Reached after $${firstN((n) => 7000 * 1.004 ** n >= 9000)}$ months.`], ans: S`${7000 * 1.004 ** 60 >= 9000 ? "yes" : "no"}; $${firstN((n) => 7000 * 1.004 ** n >= 9000)}$ months` },
];

const PROBLEMS = [
  { level: 1, q: S`Find the rate: $800$ grows to $968$ in $2$ years, compounded annually.`, ans: S`$10\%$` },
  { level: 1, q: S`Estimate the doubling time at $8\%$ with the rule of 72.`, ans: S`$9$ years` },
  { level: 1, q: S`How many whole years for $1000$ to reach $1300$ at $6\%$ compounded annually?`, ans: S`$${firstN((n) => 1.06 ** n >= 1.3)}$` },
  { level: 2, q: S`Find the annual rate: $3000$ grows to $3600$ in $3$ years, compounded monthly.`, ans: S`$\approx${f(rate(1.2, 36, 12))}\%$` },
  { level: 2, q: S`Find the annual rate: $6000$ grows to $7500$ in $4$ years, compounded semi-annually.`, ans: S`$\approx${f(rate(1.25, 8, 2))}\%$` },
  { level: 2, q: S`How many quarters for $4000$ to reach $5000$ at $4\%$ compounded quarterly?`, ans: S`$${firstN((n) => 1.01 ** n >= 1.25)}$ quarters` },
  { level: 2, q: S`How many months for $900$ to reach $1000$ at $3.6\%$ compounded monthly?`, ans: S`$${firstN((n) => 1.003 ** n >= 10 / 9)}$ months` },
  { level: 2, q: S`What annual rate doubles money in $10$ years (annual compounding)?`, ans: S`$\approx${f(rate(2, 10, 1))}\%$` },
  { level: 3, space: 5, q: S`An investment of $10\,000$ grew to $13\,500$ in $5$ years compounded quarterly. Find the annual rate and the effective annual rate.`, ans: S`$\approx${f(rate(1.35, 20, 4))}\%$; effective $\approx${f((1.35 ** 0.2 - 1) * 100)}\%$` },
  { level: 3, space: 5, q: S`How many whole years to quadruple money at $9\%$ compounded annually? Compare with two rule-of-72 doublings.`, ans: S`$${firstN((n) => 1.09 ** n >= 4)}$ years; estimate $16$` },
  { level: 3, space: 5, q: S`Two accounts: $5\%$ compounded annually and $4.9\%$ compounded monthly. Which reaches $1.5$ times the deposit first? Give both times.`, ans: S`annual: $${firstN((n) => 1.05 ** n >= 1.5)}$ yr; monthly: $${firstN((n) => (1 + 0.049 / 12) ** n >= 1.5)}$ months` },
  { level: 3, space: 5, q: S`Explain why the time is rounded up to the next whole period.`, ans: S`interest is added only at the end of each period` },
  { level: 3, space: 5, q: S`Find the monthly-compounded annual rate that turns $2000$ into $2500$ in $3$ years, and check it.`, ans: S`$\approx${f(rate(1.25, 36, 12))}\%$` },
];

export const WS = {
  code: "8.4",
  title: "Finding the Interest Rate and the Time",
  bigideas: S`From $A=P(1+i)^n$: the rate per period is $i=\left(\frac AP\right)^{\frac1n}-1$, and the annual rate is $r=mi$. The number of periods sits in the exponent, so we find it by systematic trial (or a graph or financial calculator), taking the first whole period that reaches the goal. The rule of 72 estimates doubling time: $72\div$ rate.`,
  goals: ["Find the rate with a root.", "Find the time by trial.", "Convert periods to years.", "Use the rule of 72."],
  curriculum: "D1.3, D1.4",
  vocab: [["$i$", "$\\left(\\frac AP\\right)^{1/n}-1$"], ["$r$", "$m\\cdot i$"], ["Systematic trial", "test whole $n$"], ["Rule of 72", "doubling $\\approx72/r$"]],
  hook: S`At what rate does money double in $8$ years?`,
  concepts: [
    ["1. Rate", S`Divide, root, subtract $1$, multiply by $m$.`],
    ["2. Time", S`Try $n=1,2,3,\dots$ until $P(1+i)^n\ge A$.
${G([{ f: (t) => 1000 * 1.06 ** t, color: "violet" }], { view: { xmin: 0, xmax: 14, ymin: 900, ymax: 2400 }, step: { x: 1, y: 200 }, lines: [{ m: 0, b: 2000, color: "red", dash: true }] })}`],
  ],
  tips: ["Root by number of periods.", "Round time up.", "Rule of 72 only estimates."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
