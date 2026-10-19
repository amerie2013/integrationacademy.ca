// MCR3U Worksheet 8.3 — Compound Interest: Present Value (teacher edition)
import { growthT, timelineT } from "./finT.mjs";
import { pv, fv, m, pct, periodsTo } from "../fin.mjs";

const S = String.raw;
const two = pv(5000, 0.05, 3) + pv(7000, 0.05, 6);

const EXAMPLES = [
  { title: "Annual", q: "Find the present value of 15 000 dollars due in 6 years at 4.5%/a compounded annually.", steps: [S`$15000(1.045)^{-6}$.`], ans: `${m(pv(15000, 0.045, 6))} dollars` },
  { title: "Semi-annual", q: "Find the present value of 9000 dollars due in 4 years at 5%/a compounded semi-annually.", steps: [S`$i=0.025$, $n=8$.`], ans: `${m(pv(9000, 0.025, 8))} dollars` },
  { title: "Monthly", q: "How much should parents invest now at 3%/a compounded monthly to have 30 000 dollars in 15 years?", steps: [S`$30000(1.0025)^{-180}$.`], ans: `${m(pv(30000, 0.0025, 180))} dollars` },
  { title: "Time line", q: "Draw a time line for an amount of 5000 dollars due in 3 years and 7000 dollars due in 6 years, then find their combined present value at 5%/a compounded annually.",
    fig: timelineT(6, { 3: "5000", 6: "7000" }),
    steps: [S`$5000(1.05)^{-3}+7000(1.05)^{-6}$.`], ans: `${m(two)} dollars` },
  { title: "Comparing offers", q: "Offer A: 8000 dollars now. Offer B: 9500 dollars in 3 years. Money earns 6%/a compounded quarterly. Which is better?", steps: [S`PV of B: $9500(1.015)^{-12}\approx${m(pv(9500, 0.015, 12))}$.`], ans: pv(9500, 0.015, 12) > 8000 ? "offer B" : "offer A" },
  { title: "Finding n", q: "How many years until 3000 dollars grows to 5000 dollars at 6%/a compounded annually?", steps: [S`$1.06^n\ge\frac53$; guess and check.`], ans: `${periodsTo(5 / 3, 0.06)} years` },
  { title: "Doubling, monthly", q: "How many months does it take to double money at 6%/a compounded monthly?", steps: [S`$1.005^n\ge2$.`], ans: `${periodsTo(2, 0.005)} months` },
  { title: "Rule of 72", q: "Compare the rule of 72 with exact doubling times at 4%, 8% and 12% (annual compounding).", steps: [`4%: 18 vs ${periodsTo(2, 0.04)}; 8%: 9 vs ${periodsTo(2, 0.08)}; 12%: 6 vs ${periodsTo(2, 0.12)}.`], ans: "the rule is a good estimate" },
  { title: "Present value curve", q: "Graph the present value of 10 000 dollars due in t years at 5%/a for 0 to 30 years.",
    fig: growthT([{ f: (t) => 10000 / 1.05 ** t }], 30, { ylabel: "PV" }),
    steps: ["The further away the payment, the less it is worth today."], ans: "a decreasing exponential curve" },
];

const PROBLEMS = [
  { level: 1, q: "Find the present value of 4000 dollars due in 5 years at 6%/a compounded annually.", recap: "PV annual.", ans: `${m(pv(4000, 0.06, 5))} dollars` },
  { level: 1, q: "Is the present value of a future amount larger or smaller than the amount? Why?", recap: "Concept.", ans: "smaller — it grows with interest to reach the amount" },
  { level: 1, q: "Write PV = FV ÷ (1.03)¹² with a negative exponent.", recap: "Notation.", ans: S`$FV(1.03)^{-12}$` },
  { level: 2, q: "Find the present value of 25 000 dollars due in 8 years at 4%/a compounded quarterly.", recap: "PV quarterly.", ans: `${m(pv(25000, 0.01, 32))} dollars` },
  { level: 2, q: "A bond pays 1000 dollars in 10 years. What is it worth today at 5.5%/a compounded semi-annually?", recap: "Bond.", ans: `${m(pv(1000, 0.0275, 20))} dollars` },
  { level: 2, q: "How many years does it take money to grow by 50% at 7%/a compounded annually?", recap: "Find n.", ans: `${periodsTo(1.5, 0.07)} years` },
  { level: 2, q: "Which is worth more today at 4%/a compounded annually: 2000 dollars in 2 years or 2150 dollars in 4 years?", recap: "Compare.", ans: `${m(pv(2000, 0.04, 2))} vs ${m(pv(2150, 0.04, 4))}: ${pv(2000, 0.04, 2) > pv(2150, 0.04, 4) ? "2000 in 2 years" : "2150 in 4 years"}` },
  { level: 2, q: "Mark the payments on a time line: 1000 dollars in 2 years and 1500 dollars in 5 years. Find their total present value at 3%/a compounded annually.", recap: "Time line.", ans: `${m(pv(1000, 0.03, 2) + pv(1500, 0.03, 5))} dollars`, fig: timelineT(5, { 2: "1000", 5: "1500" }) },
  { level: 3, space: 4, q: "A debt of 6000 dollars due in 4 years is to be paid instead in 2 years. What payment in 2 years is equivalent, at 5%/a compounded annually?", recap: "Move a payment.", ans: `${m(pv(6000, 0.05, 2))} dollars` },
  { level: 3, space: 4, q: "How many quarters does it take 5000 dollars to grow to 8000 dollars at 4.4%/a compounded quarterly?", recap: "Quarters.", ans: `${periodsTo(1.6, 0.011)} quarters` },
  { level: 3, space: 4, q: "What annual rate (compounded annually) makes the present value of 12 000 dollars due in 9 years equal to 8000 dollars? Give the % to 2 decimals.", recap: "Find rate.", ans: `${pct(1.5 ** (1 / 9) - 1)}%/a` },
  { level: 3, space: 5, q: "A prize offers 50 000 dollars now, or 20 000 dollars now plus 35 000 dollars in 4 years. At 6%/a compounded annually, which is better and by how much today?", recap: "Prize.", ans: `option 2 today: ${m(20000 + pv(35000, 0.06, 4))}; ${20000 + pv(35000, 0.06, 4) > 50000 ? "option 2" : "50 000 now"} is better by ${m(Math.abs(50000 - 20000 - pv(35000, 0.06, 4)))}` },
  { level: 3, space: 4, q: "Describe two strategies to find n in A = P(1 + i)ⁿ without logarithms.", recap: "Strategies.", ans: "guess and check powers; a table or graph of P(1 + i)ⁿ" },
];

export const WS = {
  code: "8.3",
  title: "Compound Interest: Present Value",
  bigideas: S`Present value is the amount needed now to grow to a future amount: $PV=FV(1+i)^{-n}$. Use it to compare payments made at different times. To find $n$, use guess and check, a table or a graph of $(1+i)^n$.`,
  goals: ["Calculate present value.", "Use time lines.", "Compare offers.", "Find the number of periods."],
  curriculum: "C2.3, C2.4",
  vocab: [["Present value", "value today"], ["Discounting", "dividing by $(1+i)^n$"], ["Doubling time", "time for value to double"]],
  hook: "Would you take 100 dollars today or 110 dollars in a year? What would change your mind?",
  concepts: [
    ["1. Back in time", S`${timelineT(4, { 4: "FV" }, { width: 5 })}Divide by $(1+i)$ once for every period.`],
    ["2. Same date", "Compare offers only after moving them to the same date."],
    ["3. Finding n", "Find the first n with (1 + i)ⁿ ≥ FV/PV; round up to whole periods."],
  ],
  tips: ["Negative exponent.", "PV < FV.", "Draw a time line.", "Round n up.", "Rule of 72 for estimates."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
