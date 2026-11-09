// MCF3M Worksheet 8.7 — Savings Plans and Loans (teacher edition).
import { S, f, G, T, FVa, PMT, SINK, A, P, pays } from "./wk.mjs";
const bal = (PV, i, R, k) => PV * (1 + i) ** k - FVa(R, i, k);
const R1 = PMT(24000, 0.005, 60);
const rows = (() => { let b = 24000; const out = []; for (let k = 1; k <= 3; k++) { const I = b * 0.005, pr = R1 - I; b -= pr; out.push([I, pr, b]); } return out; })();
const months = (PV, i, R) => { let b = PV, m = 0; while (b > 1e-9) { b = b * (1 + i) - R; m++; } return m; };

const EXAMPLES = [
  { title: "Payment", q: S`Find the monthly payment on a $24\,000$ dollar loan at $6\%$ compounded monthly over $5$ years.`, fig: T({ n: 60, unit: "months", flows: [{ at: 0, label: "24 000" }, ...pays(60, "R")] }),
    steps: [S`$R=\frac{24000(0.005)}{1-1.005^{-60}}$.`, S`$\approx${f(R1)}$ dollars.`], ans: S`$\approx${f(R1)}$ dollars` },
  { title: "Total interest", q: S`Find the total interest on that loan.`, fig: G([{ f: (t) => bal(24000, 0.005, R1, t), color: "violet" }], { view: { xmin: 0, xmax: 62, ymin: 0, ymax: 25000 }, step: { x: 6, y: 2500 }, xlabel: "month", ylabel: "balance" }),
    steps: [S`$60\times${f(R1)}\approx${f(60 * R1)}$.`, S`Interest $\approx${f(60 * R1 - 24000)}$.`], ans: S`$\approx${f(60 * R1 - 24000)}$ dollars` },
  { title: "Amortization rows", q: S`Find the interest, principal and balance for the first $3$ payments.`, fig: G([], { view: { xmin: 0, xmax: 4, ymin: 0, ymax: 500 }, step: { x: 1, y: 50 }, xlabel: "month", ylabel: "dollars", segs: [{ pts: rows.map((r, k) => [k + 1, r[0]]), color: "red" }, { pts: rows.map((r, k) => [k + 1, r[1]]), color: "green" }] }),
    steps: rows.map((r, k) => S`Month $${k + 1}$: interest $${f(r[0])}$, principal $${f(r[1])}$, balance $${f(r[2])}$.`), ans: S`balance after 3 months $\approx${f(rows[2][2])}$` },
  { title: "Shorter term", q: S`Compare the $24\,000$ loan over $3$ years.`, fig: G([{ f: (t) => bal(24000, 0.005, PMT(24000, 0.005, 36), t), color: "green" }, { f: (t) => bal(24000, 0.005, R1, t), color: "violet" }], { view: { xmin: 0, xmax: 62, ymin: 0, ymax: 25000 }, step: { x: 6, y: 2500 }, xlabel: "month" }),
    steps: [S`$R\approx${f(PMT(24000, 0.005, 36))}$; interest $\approx${f(36 * PMT(24000, 0.005, 36) - 24000)}$.`, S`Saves $\approx${f(60 * R1 - 36 * PMT(24000, 0.005, 36))}$ in interest.`], ans: S`higher payment, less interest` },
  { title: "Paying extra", q: S`Pay $550$ a month instead on the $24\,000$ loan. How many months?`, fig: G([{ f: (t) => Math.max(0, bal(24000, 0.005, 550, t)), color: "violet" }], { view: { xmin: 0, xmax: 62, ymin: 0, ymax: 25000 }, step: { x: 6, y: 2500 }, xlabel: "month" }),
    steps: [S`Balance $\leftarrow$ balance $\times1.005-550$, repeated.`, S`Paid off in $${months(24000, 0.005, 550)}$ months.`], ans: S`$${months(24000, 0.005, 550)}$ months` },
  { title: "Lump sum + deposits", q: S`$3000$ now plus $150$ a month for $8$ years at $4.2\%$ compounded monthly.`, fig: T({ n: 96, unit: "months", flows: [{ at: 0, label: "3000", up: false }, ...pays(96, "150"), { at: 96, label: f(A(3000, 0.0035, 96) + FVa(150, 0.0035, 96)) }] }),
    steps: [S`$3000(1.0035)^{96}\approx${f(A(3000, 0.0035, 96))}$.`, S`$+150\cdot\frac{1.0035^{96}-1}{0.0035}\approx${f(FVa(150, 0.0035, 96))}$.`], ans: S`$\approx${f(A(3000, 0.0035, 96) + FVa(150, 0.0035, 96))}$ dollars` },
  { title: "Goal with a head start", q: S`Have $8000$, want $40\,000$ in $7$ years at $4.8\%$ compounded monthly. Monthly deposit?`, fig: G([{ f: (t) => A(8000, 0.004, 12 * t), color: "green" }], { view: { xmin: 0, xmax: 7.5, ymin: 0, ymax: 42000 }, step: { x: 1, y: 5000 }, lines: [{ m: 0, b: 40000, color: "red", dash: true }] }),
    steps: [S`$8000(1.004)^{84}\approx${f(A(8000, 0.004, 84))}$.`, S`$R=\frac{(40000-${f(A(8000, 0.004, 84))})(0.004)}{1.004^{84}-1}\approx${f(SINK(40000 - A(8000, 0.004, 84), 0.004, 84))}$.`], ans: S`$\approx${f(SINK(40000 - A(8000, 0.004, 84), 0.004, 84))}$ dollars` },
  { title: "Mortgage", q: S`Find the payment on a $300\,000$ dollar mortgage at $5.4\%$ compounded monthly over $25$ years.`, fig: G([{ f: (t) => bal(300000, 0.0045, PMT(300000, 0.0045, 300), 12 * t), color: "violet" }], { view: { xmin: 0, xmax: 26, ymin: 0, ymax: 320000 }, step: { x: 5, y: 40000 }, xlabel: "years" }),
    steps: [S`$R\approx${f(PMT(300000, 0.0045, 300))}$.`, S`Interest $\approx${f(300 * PMT(300000, 0.0045, 300) - 300000)}$.`], ans: S`$\approx${f(PMT(300000, 0.0045, 300))}$ per month` },
  { title: "Rate comparison", q: S`A $20\,000$ loan over $4$ years: $3.6\%$ or $7.2\%$ compounded monthly?`, fig: G([{ f: (t) => bal(20000, 0.003, PMT(20000, 0.003, 48), t), color: "green" }, { f: (t) => bal(20000, 0.006, PMT(20000, 0.006, 48), t), color: "violet" }], { view: { xmin: 0, xmax: 50, ymin: 0, ymax: 21000 }, step: { x: 6, y: 2000 }, xlabel: "month" }),
    steps: [S`$3.6\%$: $R\approx${f(PMT(20000, 0.003, 48))}$, interest $\approx${f(48 * PMT(20000, 0.003, 48) - 20000)}$.`, S`$7.2\%$: $R\approx${f(PMT(20000, 0.006, 48))}$, interest $\approx${f(48 * PMT(20000, 0.006, 48) - 20000)}$.`], ans: S`doubling the rate roughly doubles the interest` },
];

const PROBLEMS = [
  { level: 1, q: S`Monthly payment: $6000$ loan, $1$ year, $6\%$ compounded monthly.`, ans: S`$\approx${f(PMT(6000, 0.005, 12))}$` },
  { level: 1, q: S`First month's interest on $9000$ at $4.8\%$ compounded monthly.`, ans: S`$36$ dollars` },
  { level: 1, q: S`Interest: $8000$ loan repaid by $36$ payments of $245$.`, ans: S`$820$ dollars` },
  { level: 2, q: S`Monthly payment: $15\,000$ loan, $3$ years, $5.4\%$ compounded monthly.`, ans: S`$\approx${f(PMT(15000, 0.0045, 36))}$` },
  { level: 2, q: S`Total interest on that loan.`, ans: S`$\approx${f(36 * PMT(15000, 0.0045, 36) - 15000)}$` },
  { level: 2, q: S`First two amortization rows for the $15\,000$ loan.`, ans: S`interest $67.50$, then $\approx${f((15000 - (PMT(15000, 0.0045, 36) - 67.5)) * 0.0045)}$` },
  { level: 2, q: S`$1000$ now plus $100$ a month for $3$ years at $3.6\%$ compounded monthly.`, ans: S`$\approx${f(A(1000, 0.003, 36) + FVa(100, 0.003, 36))}$` },
  { level: 2, q: S`Quarterly payment: $12\,000$ loan, $3$ years, $8\%$ compounded quarterly.`, ans: S`$\approx${f(PMT(12000, 0.02, 12))}$` },
  { level: 3, space: 5, q: S`$250\,000$ mortgage at $4.2\%$ compounded monthly: compare 20 and 25 years (payment and interest).`, ans: S`20: $${f(PMT(250000, 0.0035, 240))}$, $${f(240 * PMT(250000, 0.0035, 240) - 250000)}$; 25: $${f(PMT(250000, 0.0035, 300))}$, $${f(300 * PMT(250000, 0.0035, 300) - 250000)}$` },
  { level: 3, space: 5, q: S`A $10\,000$ loan at $6\%$ compounded monthly is repaid at $400$ a month. How many payments?`, ans: S`$${months(10000, 0.005, 400)}$` },
  { level: 3, space: 5, q: S`Save for $25\,000$ in $5$ years at $3.6\%$ compounded monthly with $5000$ to start. Monthly deposit?`, ans: S`$\approx${f(SINK(25000 - A(5000, 0.003, 60), 0.003, 60))}$` },
  { level: 3, space: 5, q: S`Explain why early payments on a loan are mostly interest.`, ans: S`interest is charged on the large early balance` },
  { level: 3, space: 5, q: S`Buy a car for $22\,000$ with a $4$-year loan at $6.6\%$ compounded monthly, or save $450$ a month at $3\%$ compounded monthly until you have $22\,000$. Compare.`, ans: S`loan payment $\approx${f(PMT(22000, 0.0055, 48))}$; saving takes ${(() => { let n = 0; while (FVa(450, 0.0025, n) < 22000) n++; return n; })()} months` },
];

export const WS = {
  code: "8.7",
  title: "Savings Plans and Loans",
  bigideas: S`A loan payment is $R=\frac{PV\cdot i}{1-(1+i)^{-n}}$. Each payment covers the interest on the current balance first; the rest reduces the principal. Longer terms lower payments but raise total interest $nR-PV$; paying extra shortens the loan. Savings plans add the growth of a lump sum to the future value of regular deposits.`,
  goals: ["Find loan payments.", "Build amortization rows.", "Compare loans.", "Plan savings."],
  curriculum: "D2.4, D2.5",
  vocab: [["Payment", "$\\frac{PV\\cdot i}{1-(1+i)^{-n}}$"], ["Amortization", "paying off by instalments"], ["Interest portion", "balance $\\times i$"], ["Principal portion", "payment $-$ interest"]],
  hook: S`Why do mortgages charge so much interest in the first years?`,
  concepts: [
    ["1. Loan balance", S`Falls slowly, then faster.
${G([{ f: (t) => bal(24000, 0.005, R1, t), color: "violet" }], { view: { xmin: 0, xmax: 62, ymin: 0, ymax: 25000 }, step: { x: 6, y: 2500 }, xlabel: "month" })}`],
    ["2. Savings plans", S`Lump sum $P(1+i)^n$ plus deposits $R\frac{(1+i)^n-1}{i}$.`],
  ],
  tips: ["Payment uses PV.", "Interest on current balance.", "Grow pieces separately, then add."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
