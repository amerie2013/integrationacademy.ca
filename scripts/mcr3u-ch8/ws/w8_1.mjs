// MCR3U Worksheet 8.1 — Simple Interest (teacher edition)
import { growthT, barsT } from "./finT.mjs";
import { m } from "../fin.mjs";

const S = String.raw;
const gap = (t) => 1000 * 1.08 ** t - 1000 * (1 + 0.08 * t);
let yr = 1; while (gap(yr) <= 1000) yr++;

const EXAMPLES = [
  { title: "Interest and amount", q: "Find the simple interest and amount on 3200 dollars at 3.75%/a for 4 years.", steps: [S`$I=3200(0.0375)(4)=480$.`, S`$A=3200+480$.`], ans: "I = 480 dollars, A = 3680 dollars" },
  { title: "Months", q: "Find the simple interest on 2400 dollars at 6.5%/a for 10 months.", steps: [S`$t=\frac{10}{12}$: $2400(0.065)\left(\frac{10}{12}\right)$.`], ans: `${m(2400 * 0.065 * 10 / 12)} dollars` },
  { title: "Days", q: "Find the simple interest on 7300 dollars at 4%/a for 146 days.", steps: [S`$t=\frac{146}{365}=0.4$: $7300(0.04)(0.4)$.`], ans: `${m(7300 * 0.04 * 0.4)} dollars` },
  { title: "Principal", q: "What principal earns 270 dollars of simple interest in 3 years at 4.5%/a?", steps: [S`$P=\frac{I}{rt}=\frac{270}{0.135}$.`], ans: "2000 dollars" },
  { title: "Rate", q: "A loan of 1500 dollars costs 135 dollars in simple interest over 18 months. Find the rate.", steps: [S`$r=\frac{135}{1500(1.5)}=0.06$.`], ans: "6%/a" },
  { title: "Time", q: "How long does 950 dollars take to earn 57 dollars at 4%/a simple interest?", steps: [S`$t=\frac{57}{950(0.04)}=\frac{57}{38}$.`], ans: "1.5 years (18 months)" },
  { title: "Amount from A", q: "A simple-interest loan at 5%/a for 2 years is repaid with 3850 dollars. How much was borrowed?", steps: [S`$P=\frac{3850}{1.10}$.`], ans: "3500 dollars" },
  { title: "Arithmetic sequence", q: "Write the year-end amounts of 2500 dollars at 3%/a simple interest for 5 years and graph them.",
    fig: barsT([1, 2, 3, 4, 5].map((k) => 2500 + 75 * k), { xlabel: "year", ylabel: "amount", labels: ["2575", "2650", "2725", "2800", "2875"] }),
    steps: ["Add 75 each year."], ans: S`$t_n=2500+75n$: arithmetic, $d=75$` },
  { title: "Linear vs exponential", q: "Graph 1000 dollars at 8%/a simple interest and at 8%/a compounded annually for 20 years. When is the difference first more than 1000 dollars?",
    fig: growthT([{ f: (t) => 1000 * (1 + 0.08 * t), color: "green" }, { f: (t) => 1000 * 1.08 ** t, color: "violet" }], 20),
    steps: ["Compare year by year: the gap grows each year.", `Year ${yr - 1}: ${m(gap(yr - 1))}; year ${yr}: ${m(gap(yr))}.`], ans: `year ${yr}` },
];

const PROBLEMS = [
  { level: 1, q: "Find the simple interest on 650 dollars at 2%/a for 4 years.", recap: "I = Prt.", ans: "52 dollars" },
  { level: 1, q: "Find the amount when 1200 dollars earns 7%/a simple interest for 3 years.", recap: "A = P(1 + rt).", ans: "1452 dollars" },
  { level: 1, q: "Write 9 months and 219 days as fractions of a year.", recap: "Convert time.", ans: "0.75 and 0.6" },
  { level: 2, q: "Find the simple interest on 5400 dollars at 4.25%/a for 8 months.", recap: "Months.", ans: `${m(5400 * 0.0425 * 8 / 12)} dollars` },
  { level: 2, q: "3000 dollars grows to 3540 dollars at simple interest in 3 years. Find the rate.", recap: "Rate.", ans: "6%/a" },
  { level: 2, q: "What principal earns 168 dollars in 2 years at 3.5%/a simple interest?", recap: "Principal.", ans: "2400 dollars" },
  { level: 2, q: "How many months does it take 1600 dollars to earn 36 dollars at 4.5%/a simple interest?", recap: "Time.", ans: "6 months" },
  { level: 2, q: "Graph the amount of 800 dollars at 5%/a simple interest for 10 years and give the slope.", recap: "Graph.", ans: "a line with slope 40 dollars per year", fig: growthT([{ f: (t) => 800 * (1 + 0.05 * t), color: "green" }], 10) },
  { level: 3, space: 4, q: "A store charges 1.5% per month simple interest on overdue accounts. What annual rate is that, and what is the interest on 640 dollars overdue for 75 days?", recap: "Monthly rate.", ans: S`18%/a; $640(0.18)\left(\frac{75}{365}\right)\approx${m(640 * 0.18 * 75 / 365)}$ dollars` },
  { level: 3, space: 4, q: "At what simple interest rate does money triple in 25 years?", recap: "Tripling.", ans: S`$rt=2\Rightarrow r=0.08$: 8%/a` },
  { level: 3, space: 4, q: "Two loans: 2000 dollars at 6%/a simple for 3 years, and 2000 dollars at 5.5%/a compounded annually for 3 years. Which costs more interest, and by how much?", recap: "Compare.", ans: `simple 360; compound ${m(2000 * 1.055 ** 3 - 2000)}: the simple loan costs ${m(360 - (2000 * 1.055 ** 3 - 2000))} more` },
  { level: 3, space: 5, q: "A savings bond pays simple interest. After 2 years the amount is 5300 dollars and after 5 years it is 5750 dollars. Find the principal and the rate.", recap: "Two amounts.", ans: S`3 years add 450: $Pr=150$; $P=5300-300=5000$; $r=3\%$` },
  { level: 3, space: 4, q: "Explain why the graph of the amount under simple interest is linear, and give the slope and the vertical intercept in terms of P and r.", recap: "Explain.", ans: "A = P + Prt: slope Pr, intercept P" },
];

export const WS = {
  code: "8.1",
  title: "Simple Interest",
  bigideas: S`Simple interest is paid only on the principal: $I=Prt$ and $A=P(1+rt)$, with $r$ per year and $t$ in years. The same interest is added every year, so year-end amounts form an arithmetic sequence and the graph is linear.`,
  goals: ["Calculate I and A.", "Convert months and days to years.", "Solve for P, r and t.", "Connect to arithmetic sequences and linear growth."],
  curriculum: "C2.1",
  vocab: [["Principal P", "money invested or borrowed"], ["Rate r", "per annum, as a decimal"], ["Amount A", "P + I"]],
  hook: "A friend offers to lend you 500 dollars if you pay back 550 dollars in 6 months. Is that a good deal? What rate is it?",
  concepts: [
    ["1. Formulas", S`${growthT([{ f: (t) => 1000 * (1 + 0.06 * t), color: "green" }], 10, { width: 5 })}$I=Prt$; $A=P(1+rt)$ — a line with slope $Pr$.`],
    ["2. Time units", S`$t=\frac{\text{months}}{12}$ or $\frac{\text{days}}{365}$.`],
    ["3. Rearranging", S`$P=\frac I{rt}$, $r=\frac I{Pt}$, $t=\frac I{Pr}$.`],
  ],
  tips: ["Rate as a decimal.", "Time in years.", "I vs A.", "Round at the end.", "Check with estimation."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
