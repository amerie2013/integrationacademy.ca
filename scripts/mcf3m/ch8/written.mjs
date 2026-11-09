// MCF3M chapter 8 written-response questions (Part C of printed tests), each with a figure and a marking guide.
import { timelineSvg, fDoc, P } from "./ffig.mjs";
import { lesson } from "../plan.mjs";
const S = String.raw;
const W = (code, difficulty, points, prompt, feedback, fig) => ({ topic: lesson(code).full, difficulty, points, prompt, feedback, kind: "long_answer", answer: null, choices: null, fig });
const f = (v) => (Math.round(v * 100) / 100).toFixed(2);
const FVa = (R, i, n) => (R * ((1 + i) ** n - 1)) / i;
const PVa = (R, i, n) => (R * (1 - (1 + i) ** -n)) / i;
const PMT = (PV, i, n) => (PV * i) / (1 - (1 + i) ** -n);
const SINK = (FV, i, n) => (FV * i) / ((1 + i) ** n - 1);
const firstN = (fn) => { let n = 0; while (!fn(n)) n++; return n; };
const pays = (n, label, up = false) => Array.from({ length: n }, (_, k) => ({ at: k + 1, label, up }));

export const WRITTEN = [
  W("8.1", "medium", 4, S`$3600$ dollars is invested for $5$ years at $4\%$. (a) Find the amount with simple interest. (b) Find the amount compounded annually. (c) Explain the difference using the graph.`,
    S`(a) $3600(1.2)=4320$. (b) $3600(1.04)^5\approx${f(3600 * 1.04 ** 5)}$. (c) compound earns interest on interest: curve above the line. [1, 2, 1.]`,
    fDoc([{ f: (t) => 3600 + 144 * t, color: "green" }, { f: (t) => 3600 * 1.04 ** t, color: "violet" }], { view: { xmin: 0, xmax: 6, ymin: 3400, ymax: 4500 }, step: { x: 1, y: 100 } })),
  W("8.1", "hard", 5, S`Offer A: $6.5\%$ simple interest. Offer B: $5.5\%$ compounded annually, on $8000$ dollars. (a) Find both amounts after $10$ years. (b) Find the first whole year B is larger. (c) Recommend an offer for a $15$-year investment.`,
    S`(a) A $13\,200$; B $\approx${f(8000 * 1.055 ** 10)}$. (b) year $${firstN((n) => n > 0 && 1.055 ** n > 1 + 0.065 * n)}$. (c) B: compounding wins over long terms. [2, 2, 1.]`,
    fDoc([{ f: (t) => 8000 + 520 * t, color: "green" }, { f: (t) => 8000 * 1.055 ** t, color: "violet" }], { view: { xmin: 0, xmax: 20, ymin: 7000, ymax: 24000 }, step: { x: 2, y: 2000 } })),
  W("8.2", "medium", 4, S`$5500$ dollars is invested at $4.8\%$ compounded monthly for $6$ years. (a) State $i$ and $n$. (b) Find the future value. (c) Find the interest earned.`,
    S`(a) $0.004$; $72$. (b) $\approx${f(5500 * 1.004 ** 72)}$. (c) $\approx${f(5500 * 1.004 ** 72 - 5500)}$. [1, 2, 1.]`,
    timelineSvg({ n: 72, unit: "months", flows: [{ at: 0, label: "5500", up: false }, { at: 72, label: "A = ?" }] })),
  W("8.2", "hard", 5, S`For $10\,000$ dollars over $8$ years: (a) find the amount at $5\%$ compounded annually and monthly; (b) find each effective annual rate; (c) explain why the gain from monthly compounding is small.`,
    S`(a) $\approx${f(10000 * 1.05 ** 8)}$; $\approx${f(10000 * (1 + 0.05 / 12) ** 96)}$. (b) $5\%$; $\approx${f(((1 + 0.05 / 12) ** 12 - 1) * 100)}\%$. (c) interest on interest is only slightly earlier. [2, 2, 1.]`,
    fDoc([{ f: (t) => 10000 * 1.05 ** t, color: "green" }, { f: (t) => 10000 * (1 + 0.05 / 12) ** (12 * t), color: "violet" }], { view: { xmin: 0, xmax: 9, ymin: 9000, ymax: 15500 }, step: { x: 1, y: 500 } })),
  W("8.3", "medium", 4, S`(a) Find the present value of $9000$ dollars due in $4$ years at $5.2\%$ compounded quarterly. (b) Find the interest earned. (c) Explain why PV is less than $9000$.`,
    S`(a) $9000(1.013)^{-16}\approx${f(9000 * 1.013 ** -16)}$. (b) $\approx${f(9000 - 9000 * 1.013 ** -16)}$. (c) money invested now grows. [2, 1, 1.]`,
    timelineSvg({ n: 16, unit: "quarters", flows: [{ at: 0, label: "PV = ?", up: false }, { at: 16, label: "9000" }] })),
  W("8.3", "hard", 5, S`Option A: $15\,000$ dollars now. Option B: $8000$ dollars in $1$ year and $9000$ dollars in $3$ years. Money earns $6\%$ compounded monthly. (a) Find the PV of option B. (b) Which option is better? (c) At what rate would they be about equal — higher or lower than $6\%$? Explain.`,
    S`(a) $\approx${f(8000 * 1.005 ** -12 + 9000 * 1.005 ** -36)}$. (b) ${8000 * 1.005 ** -12 + 9000 * 1.005 ** -36 > 15000 ? "B" : "A"}. (c) ${8000 * 1.005 ** -12 + 9000 * 1.005 ** -36 > 15000 ? "higher: a higher rate lowers B's PV" : "lower: a lower rate raises B's PV"}. [2, 1, 2.]`,
    timelineSvg({ n: 3, unit: "years", flows: [{ at: 0, label: "A: 15 000", up: false }, { at: 1, label: "8000" }, { at: 3, label: "9000" }] })),
  W("8.4", "medium", 4, S`(a) $4500$ dollars grew to $5800$ dollars in $5$ years compounded annually. Find the rate. (b) Estimate the doubling time at that rate with the rule of 72.`,
    S`(a) $(5800/4500)^{1/5}-1\approx${f(((5800 / 4500) ** 0.2 - 1) * 100)}\%$. (b) $\approx${f(72 / (((5800 / 4500) ** 0.2 - 1) * 100))}$ years. [2, 2.]`,
    timelineSvg({ n: 5, unit: "years", flows: [{ at: 0, label: "4500", up: false }, { at: 5, label: "5800" }] })),
  W("8.4", "hard", 5, S`(a) How many whole months until $3000$ dollars reaches $4000$ dollars at $5.4\%$ compounded monthly? Show the trial. (b) What annual rate compounded monthly would reach $4000$ in exactly $4$ years? (c) Explain the method for each part.`,
    S`(a) $${firstN((n) => 3000 * 1.0045 ** n >= 4000)}$ months. (b) $12\left[(4/3)^{1/48}-1\right]\approx${f(((4 / 3) ** (1 / 48) - 1) * 1200)}\%$. (c) time by trial; rate by root. [2, 2, 1.]`,
    fDoc([{ f: (t) => 3000 * 1.0045 ** t, color: "violet" }], { view: { xmin: 0, xmax: 72, ymin: 2800, ymax: 4400 }, step: { x: 6, y: 200 }, lines: [{ m: 0, b: 4000, color: "green", dash: true }], xlabel: "month" })),
  W("8.5", "medium", 4, S`Ben deposits $300$ dollars at the end of each month for $5$ years at $4.2\%$ compounded monthly. (a) Draw a timeline. (b) Find the future value. (c) Find the interest earned.`,
    S`(a) $60$ payments of $300$. (b) $\approx${f(FVa(300, 0.0035, 60))}$. (c) $\approx${f(FVa(300, 0.0035, 60) - 18000)}$. [1, 2, 1.]`,
    timelineSvg({ n: 60, unit: "months", flows: [...pays(60, "300"), { at: 60, label: "FV" }] })),
  W("8.5", "hard", 5, S`Ana wants $40\,000$ dollars in $8$ years. She has $5000$ dollars now. Money earns $4.8\%$ compounded monthly. (a) Find what the $5000$ grows to. (b) Find the monthly deposit needed. (c) Find the total interest earned.`,
    S`(a) $\approx${f(5000 * 1.004 ** 96)}$. (b) $\approx${f(SINK(40000 - 5000 * 1.004 ** 96, 0.004, 96))}$. (c) $40\,000-5000-96R\approx${f(40000 - 5000 - 96 * SINK(40000 - 5000 * 1.004 ** 96, 0.004, 96))}$. [1, 2, 2.]`,
    fDoc([{ f: (t) => 5000 * 1.004 ** (12 * t), color: "green" }], { view: { xmin: 0, xmax: 8.5, ymin: 0, ymax: 42000 }, step: { x: 1, y: 5000 }, lines: [{ m: 0, b: 40000, color: "red", dash: true }] })),
  W("8.6", "medium", 4, S`(a) Find the present value of $750$ dollars at the end of each quarter for $5$ years at $6\%$ compounded quarterly. (b) Interpret it as a loan and find the interest paid.`,
    S`(a) $\approx${f(PVa(750, 0.015, 20))}$. (b) $15\,000-PV\approx${f(15000 - PVa(750, 0.015, 20))}$. [2, 2.]`,
    timelineSvg({ n: 20, unit: "quarters", flows: [{ at: 0, label: "PV = ?", up: false }, ...pays(20, "750", true)] })),
  W("8.6", "hard", 5, S`A retiree has $250\,000$ dollars at $4.2\%$ compounded monthly. (a) Find the monthly payment it can make for $20$ years. (b) Find the fund needed for $2000$ dollars a month for $20$ years. (c) Is $250\,000$ enough for that?`,
    S`(a) $\approx${f(PMT(250000, 0.0035, 240))}$. (b) $\approx${f(PVa(2000, 0.0035, 240))}$. (c) ${PVa(2000, 0.0035, 240) <= 250000 ? "yes" : "no"}. [2, 2, 1.]`,
    fDoc([{ f: (t) => PVa(2000, 0.0035, 12 * t), color: "violet" }], { view: { xmin: 0, xmax: 25, ymin: 0, ymax: 400000 }, step: { x: 5, y: 50000 }, lines: [{ m: 0, b: 250000, color: "green", dash: true }], xlabel: "term (years)", ylabel: "fund" })),
  W("8.7", "medium", 4, S`A $16\,000$ dollar loan at $5.4\%$ compounded monthly is repaid over $4$ years. (a) Find the payment. (b) Find the first two rows of the amortization table. (c) Find the total interest.`,
    S`(a) $\approx${f(PMT(16000, 0.0045, 48))}$. (b) interest $72$, principal $\approx${f(PMT(16000, 0.0045, 48) - 72)}$; then interest $\approx${f((16000 - (PMT(16000, 0.0045, 48) - 72)) * 0.0045)}$. (c) $\approx${f(48 * PMT(16000, 0.0045, 48) - 16000)}$. [1, 2, 1.]`,
    timelineSvg({ n: 48, unit: "months", flows: [{ at: 0, label: "16 000" }, ...pays(48, "R")] })),
  W("8.7", "hard", 5, S`A $300\,000$ dollar mortgage at $4.8\%$ compounded monthly. (a) Find the payment for $20$ and for $25$ years. (b) Find the total interest for each. (c) Recommend a term and justify.`,
    S`(a) $\approx${f(PMT(300000, 0.004, 240))}$; $\approx${f(PMT(300000, 0.004, 300))}$. (b) $\approx${f(240 * PMT(300000, 0.004, 240) - 300000)}$; $\approx${f(300 * PMT(300000, 0.004, 300) - 300000)}$. (c) shorter saves interest if affordable. [2, 2, 1.]`,
    fDoc([{ f: (t) => 300000 * 1.004 ** (12 * t) - FVa(PMT(300000, 0.004, 240), 0.004, 12 * t), color: "green" }, { f: (t) => 300000 * 1.004 ** (12 * t) - FVa(PMT(300000, 0.004, 300), 0.004, 12 * t), color: "violet" }], { view: { xmin: 0, xmax: 26, ymin: 0, ymax: 320000 }, step: { x: 5, y: 40000 }, xlabel: "years", ylabel: "balance" })),
];
