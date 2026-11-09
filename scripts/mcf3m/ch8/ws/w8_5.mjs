// MCF3M Worksheet 8.5 — Annuities: Future Value (teacher edition).
import { S, f, G, T, FVa, SINK, P, pays, firstN } from "./wk.mjs";

const EXAMPLES = [
  { title: "By adding", q: S`$800$ dollars at the end of each year for $3$ years at $6\%$ compounded annually. Find the FV by adding.`, fig: T({ n: 3, unit: "years", flows: [...pays(3, "800"), { at: 3, label: "FV" }] }),
    steps: [S`$800(1.06)^2+800(1.06)+800=898.88+848+800$.`, S`$=2546.88$ dollars.`], ans: S`$2546.88$ dollars` },
  { title: "Formula check", q: S`Check the previous example with the formula.`, fig: T({ n: 3, unit: "years", flows: [...pays(3, "800"), { at: 3, label: "2546.88" }] }),
    steps: [S`$FV=800\cdot\frac{1.06^3-1}{0.06}$.`, S`$=800(3.1836)=2546.88$ \checkmark`], ans: S`$2546.88$ dollars` },
  { title: "Monthly", q: S`$125$ dollars at the end of each month for $6$ years at $3.6\%$ compounded monthly.`, fig: T({ n: 72, unit: "months", flows: [...pays(72, "125"), { at: 72, label: f(FVa(125, 0.003, 72)) }] }),
    steps: [S`$i=0.003$, $n=72$.`, S`$FV\approx${f(FVa(125, 0.003, 72))}$.`], ans: S`$\approx${f(FVa(125, 0.003, 72))}$ dollars` },
  { title: "Interest", q: S`For the monthly plan, find the deposits and interest.`, fig: G([{ f: (t) => FVa(125, 0.003, 12 * t), color: "violet" }, { f: (t) => 1500 * t, color: "green" }], { view: { xmin: 0, xmax: 6.5, ymin: 0, ymax: 10500 }, step: { x: 1, y: 1000 } }),
    steps: [S`Deposits $72\times125=9000$.`, S`Interest $\approx${f(FVa(125, 0.003, 72) - 9000)}$.`], ans: S`$\approx${f(FVa(125, 0.003, 72) - 9000)}$ dollars` },
  { title: "Quarterly", q: S`$600$ dollars at the end of each quarter for $10$ years at $5\%$ compounded quarterly.`, fig: T({ n: 40, unit: "quarters", flows: [...pays(40, "600"), { at: 40, label: f(FVa(600, 0.0125, 40)) }] }),
    steps: [S`$i=0.0125$, $n=40$.`, S`$FV\approx${f(FVa(600, 0.0125, 40))}$.`], ans: S`$\approx${f(FVa(600, 0.0125, 40))}$ dollars` },
  { title: "Payment for a goal", q: S`What monthly deposit at $4.2\%$ compounded monthly gives $15\,000$ dollars in $4$ years?`, fig: T({ n: 48, unit: "months", flows: [...pays(48, "R"), { at: 48, label: "15 000" }] }),
    steps: [S`$R=\frac{15000(0.0035)}{1.0035^{48}-1}$.`, S`$\approx${f(SINK(15000, 0.0035, 48))}$ per month.`], ans: S`$\approx${f(SINK(15000, 0.0035, 48))}$ dollars` },
  { title: "Rate matters", q: S`$200$ dollars a month for $15$ years at $3\%$ vs $6\%$ compounded monthly.`, fig: G([{ f: (t) => FVa(200, 0.0025, 12 * t), color: "green" }, { f: (t) => FVa(200, 0.005, 12 * t), color: "violet" }], { view: { xmin: 0, xmax: 16, ymin: 0, ymax: 60000 }, step: { x: 2, y: 5000 } }),
    steps: [S`$3\%$: $\approx${f(FVa(200, 0.0025, 180))}$.`, S`$6\%$: $\approx${f(FVa(200, 0.005, 180))}$.`], ans: S`$${f(FVa(200, 0.0025, 180))}$ vs $${f(FVa(200, 0.005, 180))}$` },
  { title: "Time matters", q: S`$100$ dollars a month at $5\%$ compounded monthly for $10$, $20$ and $30$ years.`, fig: G([{ f: (t) => FVa(100, 0.05 / 12, 12 * t), color: "violet" }], { view: { xmin: 0, xmax: 31, ymin: 0, ymax: 90000 }, step: { x: 5, y: 10000 } }),
    steps: [S`$\approx${f(FVa(100, 0.05 / 12, 120))}$, $\approx${f(FVa(100, 0.05 / 12, 240))}$, $\approx${f(FVa(100, 0.05 / 12, 360))}$.`, S`Tripling the time multiplies the FV by about $${(FVa(100, 0.05 / 12, 360) / FVa(100, 0.05 / 12, 120)).toFixed(1)}$.`], ans: S`grows much faster than the deposits` },
  { title: "How many payments?", q: S`How many end-of-year deposits of $2000$ at $6\%$ compounded annually first reach $25\,000$ dollars?`, fig: G([{ f: (t) => FVa(2000, 0.06, t), color: "violet" }], { view: { xmin: 0, xmax: 12, ymin: 0, ymax: 30000 }, step: { x: 1, y: 2500 }, lines: [{ m: 0, b: 25000, color: "green", dash: true }] }),
    steps: [S`Try $n$: FV$(9)\approx${f(FVa(2000, 0.06, 9))}$, FV$(10)\approx${f(FVa(2000, 0.06, 10))}$.`, S`$${firstN((n) => FVa(2000, 0.06, n) >= 25000)}$ deposits.`], ans: S`$${firstN((n) => FVa(2000, 0.06, n) >= 25000)}$` },
];

const PROBLEMS = [
  { level: 1, q: S`FV of $1000$ at the end of each year for $3$ years at $5\%$ annually.`, ans: S`$3152.50$ dollars` },
  { level: 1, q: S`Find $i$ and $n$: monthly deposits for $7$ years at $6\%$ compounded monthly.`, ans: S`$0.005$; $84$` },
  { level: 1, q: S`Total deposits: $75$ dollars a week for $1$ year.`, ans: S`$3900$ dollars` },
  { level: 2, q: S`FV of $250$ a month for $5$ years at $4.8\%$ compounded monthly.`, ans: S`$\approx${f(FVa(250, 0.004, 60))}$ dollars` },
  { level: 2, q: S`FV of $1500$ a quarter for $8$ years at $6\%$ compounded quarterly.`, ans: S`$\approx${f(FVa(1500, 0.015, 32))}$ dollars` },
  { level: 2, q: S`Interest earned by $50$ a month for $10$ years at $3\%$ compounded monthly.`, ans: S`$\approx${f(FVa(50, 0.0025, 120) - 6000)}$ dollars` },
  { level: 2, q: S`Monthly deposit for $8000$ dollars in $3$ years at $3.6\%$ compounded monthly.`, ans: S`$\approx${f(SINK(8000, 0.003, 36))}$ dollars` },
  { level: 2, q: S`FV of $3000$ a year for $25$ years at $7\%$ compounded annually.`, ans: S`$\approx${f(FVa(3000, 0.07, 25))}$ dollars` },
  { level: 3, space: 5, q: S`Ali saves $150$ a month for $10$ years at $5.4\%$ compounded monthly, then leaves it for $5$ more years. Find the final value.`, ans: S`$\approx${f(FVa(150, 0.0045, 120) * 1.0045 ** 60)}$ dollars` },
  { level: 3, space: 5, q: S`Which gives more after $20$ years at $6\%$ compounded monthly: $300$ a month for $10$ years then left to grow, or $300$ a month only for the last $10$ years?`, ans: S`early: $\approx${f(FVa(300, 0.005, 120) * 1.005 ** 120)}$; late: $\approx${f(FVa(300, 0.005, 120))}$ — early` },
  { level: 3, space: 5, q: S`What quarterly deposit at $4\%$ compounded quarterly gives $100\,000$ dollars in $20$ years?`, ans: S`$\approx${f(SINK(100000, 0.01, 80))}$ dollars` },
  { level: 3, space: 5, q: S`How many monthly deposits of $400$ at $4.8\%$ compounded monthly first reach $20\,000$?`, ans: S`$${firstN((n) => FVa(400, 0.004, n) >= 20000)}$ deposits` },
  { level: 3, space: 5, q: S`Explain why the last payment of an ordinary annuity earns no interest.`, ans: S`it is made at the moment the FV is measured` },
];

export const WS = {
  code: "8.5",
  title: "Annuities: Future Value",
  bigideas: S`An ordinary simple annuity has equal payments $R$ at the end of each period, compounded each period. Each payment grows for a different time; adding gives $FV=R\cdot\frac{(1+i)^n-1}{i}$. Interest earned $=FV-nR$. The payment needed for a goal is $R=\frac{FV\cdot i}{(1+i)^n-1}$. Starting early has a huge effect.`,
  goals: ["Draw annuity timelines.", "Compute FV.", "Find interest earned.", "Find the payment for a goal."],
  curriculum: "D2.1, D2.2, D2.4, D2.5",
  vocab: [["Annuity", "equal regular payments"], ["Ordinary", "payments at period end"], ["$R$", "regular payment"], ["$FV$", "$R\\frac{(1+i)^n-1}{i}$"]],
  hook: S`Is $100$ dollars a month for $40$ years worth more than $200$ a month for $20$ years?`,
  concepts: [
    ["1. Adding growing payments", S`First payment grows $n-1$ periods, last grows $0$.
${T({ n: 5, unit: "years", flows: [...pays(5, "R"), { at: 5, label: "FV" }] })}`],
    ["2. Formula", S`$FV=R\cdot\frac{(1+i)^n-1}{i}$.`],
  ],
  tips: ["Use payments' period for $i$.", "Brackets around $(1+i)^n-1$.", "Interest $=FV-nR$."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
