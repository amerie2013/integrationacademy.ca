// MCR3U Worksheet 8.2 — Compound Interest: Future Value (teacher edition)
import { growthT, barsT } from "./finT.mjs";
import { fv, m, pct } from "../fin.mjs";

const S = String.raw;
const freqs = [1, 2, 4, 12, 52, 365].map((k) => fv(8000, 0.05 / k, 12 * k));

const EXAMPLES = [
  { title: "i and n", q: "Find i and n for 7.2%/a compounded monthly for 3 years, and for 5%/a compounded semi-annually for 9 years.", steps: [S`$i=0.006$, $n=36$; $i=0.025$, $n=18$.`], ans: "as found" },
  { title: "Annual", q: "Find the amount of 4500 dollars at 3.5%/a compounded annually for 8 years.", steps: [S`$4500(1.035)^8$.`], ans: `${m(fv(4500, 0.035, 8))} dollars` },
  { title: "Quarterly", q: "Find the amount of 4500 dollars at 3.5%/a compounded quarterly for 8 years.", steps: [S`$i=0.00875$, $n=32$.`], ans: `${m(fv(4500, 0.00875, 32))} dollars` },
  { title: "Interest earned", q: "How much interest does 12 000 dollars earn in 6 years at 4.2%/a compounded monthly?", steps: [S`$12000(1.0035)^{72}-12000$.`], ans: `${m(fv(12000, 0.0035, 72) - 12000)} dollars` },
  { title: "Frequency", q: "Compare 8000 dollars at 5%/a for 12 years compounded annually, semi-annually, quarterly, monthly, weekly and daily.",
    fig: barsT(freqs.map((v) => v - 14000), { xlabel: "annual → daily", ylabel: "amount − 14 000" }),
    steps: freqs.map((v, k) => `${["annually", "semi-annually", "quarterly", "monthly", "weekly", "daily"][k]}: ${m(v)}`), ans: "more often → more, but the gains shrink" },
  { title: "Geometric sequence", q: "Show that the year-end amounts of 600 dollars at 10%/a compounded annually form a geometric sequence.", steps: [S`660, 726, 798.60, …: each is 1.1 times the last.`], ans: S`$t_n=600(1.1)^n$, $r=1.1$` },
  { title: "Finding i", q: `6000 dollars grows to ${m(fv(6000, 0.04, 6))} dollars in 6 years, compounded annually. Find the rate.`, steps: [S`$(1+i)^6=\frac{${m(fv(6000, 0.04, 6))}}{6000}\approx${(1.04 ** 6).toFixed(5)}\Rightarrow1+i\approx1.04$.`], ans: "4%/a" },
  { title: "Finding the principal", q: "What principal grows to 10 000 dollars in 5 years at 6%/a compounded quarterly?", steps: [S`$P=\frac{10000}{1.015^{20}}$.`], ans: `${m(10000 / 1.015 ** 20)} dollars` },
  { title: "Exponential growth", q: "Graph the amount of 1000 dollars at 9%/a compounded annually for 30 years and describe its shape.",
    fig: growthT([{ f: (t) => 1000 * 1.09 ** t }], 30),
    steps: ["Each year multiplies by 1.09: the curve gets steeper."], ans: "exponential growth" },
];

const PROBLEMS = [
  { level: 1, q: "Find i and n for 6%/a compounded quarterly for 5 years.", recap: "i, n.", ans: "i = 0.015, n = 20" },
  { level: 1, q: "Find the amount of 2000 dollars at 5%/a compounded annually for 4 years.", recap: "Annual.", ans: `${m(fv(2000, 0.05, 4))} dollars` },
  { level: 1, q: "Is the sequence of year-end amounts under compound interest arithmetic or geometric?", recap: "Type.", ans: "geometric" },
  { level: 2, q: "Find the amount of 3500 dollars at 4.8%/a compounded monthly for 7 years.", recap: "Monthly.", ans: `${m(fv(3500, 0.004, 84))} dollars` },
  { level: 2, q: "Find the interest earned by 900 dollars at 7%/a compounded semi-annually for 10 years.", recap: "Interest.", ans: `${m(fv(900, 0.035, 20) - 900)} dollars` },
  { level: 2, q: "Which is better for 5 years: 5.1%/a compounded annually or 5%/a compounded monthly?", recap: "Compare.", ans: `factors ${(1.051 ** 5).toFixed(5)} vs ${((1 + 0.05 / 12) ** 60).toFixed(5)}: ${1.051 ** 5 > (1 + 0.05 / 12) ** 60 ? "5.1% annually" : "5% monthly"}` },
  { level: 2, q: "What principal grows to 5000 dollars in 4 years at 3%/a compounded semi-annually?", recap: "Principal.", ans: `${m(5000 / 1.015 ** 8)} dollars` },
  { level: 2, q: "Graph 500 dollars at 12%/a compounded annually for 15 years. About when does it reach 2000 dollars?", recap: "Graph.", ans: "about 12–13 years (1.12¹² ≈ 3.9, 1.12¹³ ≈ 4.4)", fig: growthT([{ f: (t) => 500 * 1.12 ** t }], 15, { lines: [{ m: 0, b: 2000, color: "amber", dash: true }] }) },
  { level: 3, space: 4, q: "2500 dollars grows to 3500 dollars in 5 years with annual compounding. Find the annual rate (2 decimals).", recap: "Find rate.", ans: `${pct(1.4 ** 0.2 - 1)}%/a` },
  { level: 3, space: 4, q: "An investment earns 6%/a compounded monthly for 3 years, then 8%/a compounded quarterly for 2 more years. Find the final amount of 10 000 dollars.", recap: "Two stages.", ans: `${m(fv(fv(10000, 0.005, 36), 0.02, 8))} dollars` },
  { level: 3, space: 4, q: "Find the annual rate, compounded annually, that gives the same amount as 6%/a compounded monthly (the effective rate).", recap: "Effective rate.", ans: `${pct((1.005) ** 12 - 1)}%/a` },
  { level: 3, space: 5, q: "Compare simple and compound interest on 5000 dollars at 6%/a for 1, 10 and 30 years. Explain the pattern.", recap: "Compare.", ans: `simple 5300, 8000, 14 000; compound ${m(fv(5000, 0.06, 1))}, ${m(fv(5000, 0.06, 10))}, ${m(fv(5000, 0.06, 30))}: the gap grows exponentially` },
  { level: 3, space: 4, q: "Explain why compound interest is an example of exponential growth.", recap: "Explain.", ans: "A = P(1 + i)ⁿ: n is the exponent and 1 + i is the constant base" },
];

export const WS = {
  code: "8.2",
  title: "Compound Interest: Future Value",
  bigideas: S`With compound interest, interest is added each period and earns interest itself: $A=P(1+i)^n$, where $i$ = annual rate ÷ periods per year and $n$ = years × periods per year. Amounts form a geometric sequence — exponential growth.`,
  goals: ["Find i and n.", "Calculate A and the interest.", "Compare frequencies.", "Find P or i."],
  curriculum: "C2.2, C2.3",
  vocab: [["Compounding period", "how often interest is added"], ["$i$", "rate per period"], ["$n$", "number of periods"]],
  hook: "Which would you rather have: 1 cent doubled every day for 30 days, or 1 000 000 dollars now?",
  concepts: [
    ["1. The formula", S`${growthT([{ f: (t) => 1000 * 1.06 ** t }, { f: (t) => 1000 * (1 + 0.06 * t), color: "green" }], 25, { width: 5 })}Compound (violet) overtakes simple (green).`],
    ["2. i and n", "Monthly: ÷12 and ×12; quarterly: ÷4 and ×4; semi-annually: ÷2 and ×2."],
    ["3. Solving for i", S`$(1+i)^n=\frac AP\Rightarrow1+i=\left(\frac AP\right)^{1/n}$.`],
  ],
  tips: ["Don't round i.", "Interest = A − P.", "Match i and n.", "Effective rate compares offers.", "Use the power key carefully."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
