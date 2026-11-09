// MCF3M Worksheet 8.1 — Simple and Compound Interest (teacher edition).
import { S, f, G, A, P, firstN } from "./wk.mjs";

const EXAMPLES = [
  { title: "Simple interest", q: S`Find the simple interest and amount for $3200$ dollars at $3.5\%$ per year for $4$ years.`, fig: G([{ f: (t) => 3200 + 112 * t, color: "green" }], { view: { xmin: 0, xmax: 6, ymin: 3000, ymax: 4000 }, step: { x: 1, y: 100 }, points: [P(4, 3648, "(4, 3648)")] }),
    steps: [S`$I=3200(0.035)(4)=448$ dollars.`, S`$A=3200+448=3648$ dollars.`], ans: S`$I=448$, $A=3648$ dollars` },
  { title: "Months", q: S`Find the simple interest on $1500$ dollars at $6\%$ per year for $8$ months.`, fig: G([{ f: (t) => 1500 + 90 * t, color: "green" }], { view: { xmin: 0, xmax: 1.2, ymin: 1450, ymax: 1620 }, step: { x: 0.25, y: 20 }, points: [P(0.67, 1560, "(8/12, 1560)")] }),
    steps: [S`$t=\frac8{12}$ year.`, S`$I=1500(0.06)\left(\frac8{12}\right)=60$ dollars.`], ans: S`$60$ dollars` },
  { title: "Find the rate", q: S`$2000$ dollars earns $250$ dollars simple interest in $5$ years. Find the rate.`, fig: G([{ f: (t) => 2000 + 50 * t, color: "green" }], { view: { xmin: 0, xmax: 6, ymin: 1900, ymax: 2350 }, step: { x: 1, y: 50 }, points: [P(5, 2250, "(5, 2250)")] }),
    steps: [S`$r=\frac{250}{2000\times5}=0.025$.`, S`$2.5\%$ per year.`], ans: S`$2.5\%$` },
  { title: "Find the time", q: S`How long does $800$ dollars take to earn $96$ dollars at $4\%$ simple interest?`, fig: G([{ f: (t) => 800 + 32 * t, color: "green" }], { view: { xmin: 0, xmax: 4, ymin: 750, ymax: 950 }, step: { x: 0.5, y: 25 }, points: [P(3, 896, "(3, 896)")] }),
    steps: [S`$t=\frac{96}{800(0.04)}=\frac{96}{32}$.`, S`$t=3$ years.`], ans: S`$3$ years` },
  { title: "Compound, year by year", q: S`$5000$ dollars earns $4\%$ compounded annually. Find the balance after each of $3$ years.`, fig: G([{ f: (t) => 5000 * 1.04 ** t, color: "violet" }], { view: { xmin: 0, xmax: 4, ymin: 4800, ymax: 5800 }, step: { x: 1, y: 100 }, points: [P(1, 5200, "5200"), P(2, 5408, "5408"), P(3, 5624.32, "5624.32")] }),
    steps: [S`$5000\times1.04=5200$.`, S`$5200\times1.04=5408$.`, S`$5408\times1.04=5624.32$.`], ans: S`$5200$, $5408$, $5624.32$ dollars` },
  { title: "Formula", q: S`Find $A$ for $5000$ dollars at $4\%$ compounded annually for $12$ years.`, fig: G([{ f: (t) => 5000 * 1.04 ** t, color: "violet" }], { view: { xmin: 0, xmax: 14, ymin: 4500, ymax: 9000 }, step: { x: 2, y: 500 }, points: [P(12, +f(A(5000, 0.04, 12)), `(12, ${f(A(5000, 0.04, 12))})`)] }),
    steps: [S`$A=5000(1.04)^{12}$.`, S`$\approx${f(A(5000, 0.04, 12))}$ dollars.`], ans: S`$\approx${f(A(5000, 0.04, 12))}$ dollars` },
  { title: "Compare", q: S`Compare $5000$ dollars at $4\%$ for $12$ years: simple vs compounded annually.`, fig: G([{ f: (t) => 5000 + 200 * t, color: "green" }, { f: (t) => 5000 * 1.04 ** t, color: "violet" }], { view: { xmin: 0, xmax: 14, ymin: 4500, ymax: 9000 }, step: { x: 2, y: 500 }, points: [P(12, 7400, "simple 7400", "green")] }),
    steps: [S`Simple: $5000(1.48)=7400$.`, S`Compound: $\approx${f(A(5000, 0.04, 12))}$; difference $\approx${f(A(5000, 0.04, 12) - 7400)}$.`], ans: S`compound earns $\approx${f(A(5000, 0.04, 12) - 7400)}$ dollars more` },
  { title: "One year's interest", q: S`For $5000$ dollars at $4\%$ compounded annually, find the interest earned in year $12$ alone.`, fig: G([{ f: (t) => 5000 * 1.04 ** t, color: "violet" }], { view: { xmin: 9, xmax: 13, ymin: 7000, ymax: 8300 }, step: { x: 1, y: 100 }, points: [P(11, +f(A(5000, 0.04, 11)), f(A(5000, 0.04, 11))), P(12, +f(A(5000, 0.04, 12)), f(A(5000, 0.04, 12)))] }),
    steps: [S`$A(11)\approx${f(A(5000, 0.04, 11))}$.`, S`$A(12)-A(11)\approx${f(A(5000, 0.04, 12) - A(5000, 0.04, 11))}$ dollars (vs $200$ simple).`], ans: S`$\approx${f(A(5000, 0.04, 12) - A(5000, 0.04, 11))}$ dollars` },
  { title: "Doubling", q: S`How many whole years until money doubles at $7\%$ compounded annually? At $7\%$ simple?`, fig: G([{ f: (t) => 1000 * 1.07 ** t, color: "violet" }, { f: (t) => 1000 + 70 * t, color: "green" }], { view: { xmin: 0, xmax: 16, ymin: 800, ymax: 2600 }, step: { x: 2, y: 200 }, lines: [{ m: 0, b: 2000, color: "red", dash: true }] }),
    steps: [S`$1.07^{10}\approx${(1.07 ** 10).toFixed(4)}$, $1.07^{11}\approx${(1.07 ** 11).toFixed(4)}$: compound reaches double during year $${firstN((n) => 1.07 ** n >= 2)}$.`, S`Simple: $1+0.07t=2\Rightarrow t\approx14.29$ years.`], ans: S`$${firstN((n) => 1.07 ** n >= 2)}$ years vs $\approx14.29$ years` },
];

const PROBLEMS = [
  { level: 1, q: S`Find the simple interest on $750$ dollars at $5\%$ for $6$ years.`, ans: S`$225$ dollars` },
  { level: 1, q: S`Find the amount: $1200$ dollars at $2\%$ simple interest for $3$ years.`, ans: S`$1272$ dollars` },
  { level: 1, q: S`Find $A$: $1000$ dollars at $3\%$ compounded annually for $2$ years.`, ans: S`$1060.90$ dollars` },
  { level: 2, q: S`$4000$ dollars earns $360$ dollars in $3$ years at simple interest. Find the rate.`, ans: S`$3\%$` },
  { level: 2, q: S`Find $A$: $2500$ dollars at $6\%$ compounded annually for $7$ years.`, ans: S`$\approx${f(A(2500, 0.06, 7))}$ dollars` },
  { level: 2, q: S`Find the compound interest on $900$ dollars at $5\%$ compounded annually for $4$ years.`, ans: S`$\approx${f(A(900, 0.05, 4) - 900)}$ dollars` },
  { level: 2, q: S`Make a year-by-year table for $1000$ dollars at $8\%$ compounded annually for $3$ years.`, ans: S`$1080,\ 1166.40,\ 1259.71$` },
  { level: 2, q: S`How long for $600$ dollars to earn $90$ dollars at $2.5\%$ simple interest?`, ans: S`$6$ years` },
  { level: 3, space: 5, q: S`Offer A: $4\%$ simple. Offer B: $3.5\%$ compounded annually. For $10\,000$ dollars, which is better after $10$ years? After $20$ years?`, ans: S`10 yr: A $14\,000$ vs B $\approx${f(A(10000, 0.035, 10))}$ (A); 20 yr: A $18\,000$ vs B $\approx${f(A(10000, 0.035, 20))}$ (B)` },
  { level: 3, space: 5, q: S`What simple rate gives the same amount as $8\%$ compounded annually over $3$ years?`, ans: S`$1+3r=1.259712$: $\approx8.66\%$` },
  { level: 3, space: 5, q: S`How many whole years for money to triple at $9\%$ compounded annually?`, ans: S`$${firstN((n) => 1.09 ** n >= 3)}$ years` },
  { level: 3, space: 5, q: S`Explain, using the graphs, why compound interest is exponential and simple interest is linear.`, ans: S`compound multiplies by $1+i$; simple adds $Pr$` },
  { level: 3, space: 5, q: S`A bank lends $2000$ dollars at $1.5\%$ compounded annually; a friend lends it for $100$ dollars of simple interest per year. Which costs less over $5$ years?`, ans: S`bank: $\approx${f(A(2000, 0.015, 5) - 2000)}$; friend: $500$ — the bank` },
];

export const WS = {
  code: "8.1",
  title: "Simple and Compound Interest",
  bigideas: S`Simple interest is earned on the principal only: $I=Prt$, $A=P(1+rt)$ — linear growth. Compound interest is added to the balance, which then earns interest: with annual compounding $A=P(1+i)^n$ — exponential growth. Over a long time compound interest earns much more.`,
  goals: ["Use $I=Prt$.", "Find an unknown rate or time.", "Compound year by year and by formula.", "Compare the two."],
  curriculum: "D1.1, D1.2, D1.3",
  vocab: [["Principal", "starting amount $P$"], ["Simple interest", "$I=Prt$"], ["Compound interest", "interest on interest"], ["Amount", "$A=P+I$"]],
  hook: S`Would you rather earn $5\%$ simple or $5\%$ compounded annually for $30$ years?`,
  concepts: [
    ["1. Simple vs compound", S`Simple: same interest every year. Compound: interest grows with the balance.
${G([{ f: (t) => 1000 + 50 * t, color: "green" }, { f: (t) => 1000 * 1.05 ** t, color: "violet" }], { view: { xmin: 0, xmax: 30, ymin: 800, ymax: 4500 }, step: { x: 5, y: 500 } })}`],
    ["2. Formulas", S`$I=Prt$; $A=P(1+i)^n$ with $i$ the rate per year, $n$ the years.`],
  ],
  tips: ["Rate as a decimal.", "Months ÷ 12.", "Round at the end."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
