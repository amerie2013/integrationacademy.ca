// MCR3U Worksheet 8.4 — Annuities: Future Value (teacher edition)
import { barsT, growthT, timelineT } from "./finT.mjs";
import { annFV, payFV, paymentsTo, m } from "../fin.mjs";

const S = String.raw;
const parts = [3, 2, 1, 0].map((k) => 800 * 1.06 ** k);

const EXAMPLES = [
  { title: "Time line", q: "Draw a time line for 4 yearly deposits of 800 dollars at 6%/a compounded annually and find each deposit's value at the end.",
    fig: timelineT(4, { 1: "800", 2: "800", 3: "800", 4: "800" }, { start: "0" }),
    steps: parts.map((v, k) => `deposit ${k + 1}: ${m(v)}`), ans: `total ${m(annFV(800, 0.06, 4))} dollars` },
  { title: "Formula", q: "Check Example 1 with the formula.", steps: [S`$FV=\frac{800(1.06^4-1)}{0.06}$.`], ans: `${m(annFV(800, 0.06, 4))} dollars` },
  { title: "Monthly savings", q: "Find the future value of 125 dollars saved at the end of every month for 8 years at 4.2%/a compounded monthly.", steps: [S`$i=0.0035$, $n=96$.`], ans: `${m(annFV(125, 0.0035, 96))} dollars` },
  { title: "Quarterly savings", q: "Find the future value of 600 dollars deposited at the end of every quarter for 12 years at 5.2%/a compounded quarterly.", steps: [S`$i=0.013$, $n=48$.`], ans: `${m(annFV(600, 0.013, 48))} dollars` },
  { title: "Interest earned", q: "In Example 3, how much of the future value is interest?", steps: [`Deposits: 125 × 96 = 12 000.`], ans: `${m(annFV(125, 0.0035, 96) - 12000)} dollars` },
  { title: "Payment for a goal", q: "What monthly deposit at 3.6%/a compounded monthly reaches 15 000 dollars in 4 years?", steps: [S`$R=\frac{15000(0.003)}{1.003^{48}-1}$.`], ans: `${m(payFV(15000, 0.003, 48))} dollars` },
  { title: "Number of deposits", q: "How many yearly deposits of 2500 dollars at 7%/a compounded annually are needed to reach 50 000 dollars?", steps: ["Guess and check n in the formula."], ans: `${paymentsTo(50000, 2500, 0.07)} deposits` },
  { title: "Geometric series", q: "Write the future value of 5 yearly deposits of R at rate i as a geometric series and sum it.", steps: [S`$R+R(1+i)+R(1+i)^2+R(1+i)^3+R(1+i)^4$; $a=R$, ratio $1+i$.`], ans: S`$\frac{R[(1+i)^5-1]}{i}$` },
  { title: "Growth of a savings plan", q: "Graph the value of 1500 dollars saved at the end of each year at 6%/a for 25 years. Compare with the total deposited.",
    fig: growthT([{ f: (t) => annFV(1500, 0.06, t) }, { f: (t) => 1500 * t, color: "green" }], 25),
    steps: [`After 25 years: ${m(annFV(1500, 0.06, 25))} vs 37 500 deposited.`], ans: "interest grows faster and faster" },
];

const PROBLEMS = [
  { level: 1, q: "Find the future value of 400 dollars deposited at the end of each year for 6 years at 5%/a compounded annually.", recap: "FV.", ans: `${m(annFV(400, 0.05, 6))} dollars` },
  { level: 1, q: "Find i and n for monthly deposits for 7 years at 4.8%/a compounded monthly.", recap: "i, n.", ans: "i = 0.004, n = 84" },
  { level: 1, q: "What is the total deposited by paying 60 dollars a month for 10 years?", recap: "Deposits.", ans: "7200 dollars" },
  { level: 2, q: "Find the future value of 75 dollars at the end of each month for 5 years at 6%/a compounded monthly.", recap: "Monthly.", ans: `${m(annFV(75, 0.005, 60))} dollars` },
  { level: 2, q: "Find the future value of 1200 dollars at the end of every 6 months for 9 years at 4%/a compounded semi-annually.", recap: "Semi-annual.", ans: `${m(annFV(1200, 0.02, 18))} dollars` },
  { level: 2, q: "What yearly deposit at 6.5%/a compounded annually reaches 30 000 dollars in 10 years?", recap: "Payment.", ans: `${m(payFV(30000, 0.065, 10))} dollars` },
  { level: 2, q: "How much interest is earned by depositing 200 dollars at the end of each quarter for 5 years at 6%/a compounded quarterly?", recap: "Interest.", ans: `${m(annFV(200, 0.015, 20) - 4000)} dollars` },
  { level: 2, q: "The bars show each yearly deposit's value at the end of a 5-year plan (500 dollars a year at 8%). Find the total.", recap: "Sum the bars.", ans: `${m(annFV(500, 0.08, 5))} dollars`, fig: barsT([4, 3, 2, 1, 0].map((k) => 500 * 1.08 ** k), { xlabel: "deposit", ylabel: "value at end" }) },
  { level: 3, space: 4, q: "Leo deposits 100 dollars a month for 30 years; Maya deposits 200 dollars a month for 15 years. Both earn 6%/a compounded monthly and finish at the same time. Who has more?", recap: "Early start.", ans: `Leo ${m(annFV(100, 0.005, 360))}, Maya ${m(annFV(200, 0.005, 180))}` },
  { level: 3, space: 4, q: "How many monthly deposits of 250 dollars at 4.8%/a compounded monthly are needed to reach 25 000 dollars?", recap: "Number of payments.", ans: `${paymentsTo(25000, 250, 0.004)} deposits` },
  { level: 3, space: 5, q: "A family saves 150 dollars a month at 3%/a compounded monthly for 5 years, then leaves the total to grow for 3 more years at the same rate. Find the final amount.", recap: "Two stages.", ans: `${m(annFV(150, 0.0025, 60) * 1.0025 ** 36)} dollars` },
  { level: 3, space: 4, q: "Explain why the last deposit in an ordinary annuity earns no interest, and why the first deposit earns the most.", recap: "Explain.", ans: "payments are at period ends; the last is made at the end; the first has n − 1 periods to grow" },
  { level: 3, space: 4, q: "Show that doubling the payment doubles the future value, but doubling the number of payments more than doubles it (use 100 dollars a year at 5% for 10 and 20 years).", recap: "Investigate.", ans: `FV(10) = ${m(annFV(100, 0.05, 10))}, FV(20) = ${m(annFV(100, 0.05, 20))}` },
];

export const WS = {
  code: "8.4",
  title: "Annuities: Future Value",
  bigideas: S`An ordinary simple annuity has equal payments $R$ at the end of each period, with the payment period equal to the compounding period. Its future value is a geometric series: $FV=\frac{R[(1+i)^n-1]}{i}$. Rearranged, $R=\frac{FV\cdot i}{(1+i)^n-1}$.`,
  goals: ["Draw time lines.", "Find the future value.", "Find the payment for a goal.", "Find the number of payments."],
  curriculum: "C2.5, C2.7",
  vocab: [["Annuity", "equal payments at equal intervals"], ["Ordinary simple", "end of period; matching periods"], ["$R$", "regular payment"]],
  hook: "If you save 5 dollars a day, how much would you have in 40 years at 6%? Make a guess, then calculate.",
  concepts: [
    ["1. Each payment grows", S`${barsT(parts, { width: 5, xlabel: "deposit", ylabel: "value" })}The first deposit grows the most.`],
    ["2. Geometric series", S`$R+R(1+i)+\cdots+R(1+i)^{n-1}$: ratio $1+i$, $n$ terms.`],
    ["3. Rearranging", S`$R=\frac{FV\cdot i}{(1+i)^n-1}$.`],
  ],
  tips: ["Last payment: no interest.", "Match i to the payment period.", "Interest = FV − Rn.", "Start early.", "Round only at the end."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
