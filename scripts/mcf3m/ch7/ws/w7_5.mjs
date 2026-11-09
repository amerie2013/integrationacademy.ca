// MCF3M Worksheet 7.5 — Exponential Growth (teacher edition). Numbers computed in code.
import { svgT } from "../../ws/figT.mjs";
import { eDoc, P, r2 } from "../efig.mjs";
const S = String.raw;
const G = (curves, o, w = 5.2) => svgT(eDoc(curves, o), w);
const f = (v) => v.toFixed(2);
const c = (v) => Math.round(v).toLocaleString("en-CA").replace(/,/g, "\\,");

const EXAMPLES = [
  { title: "A growing city", q: S`A city of $48\,000$ grows $2.5\%$ per year. Write a model and find the population after $12$ years.`, fig: G([(t) => 48000 * 1.025 ** t], { view: { xmin: 0, xmax: 20, ymin: 40000, ymax: 80000 }, step: { x: 2, y: 5000 }, points: [P(12, r2(48000 * 1.025 ** 12), "(12, " + Math.round(48000 * 1.025 ** 12) + ")")], xlabel: "t", ylabel: "P" }),
    steps: [S`$P=48\,000(1.025)^t$.`, S`$P(12)\approx${c(48000 * 1.025 ** 12)}$.`], ans: S`$\approx${c(48000 * 1.025 ** 12)}$` },
  { title: "Doubling", q: S`A sample of $150$ cells doubles every $3$ h. How many after $1$ day?`, fig: G([(t) => 150 * 2 ** (t / 3)], { view: { xmin: 0, xmax: 24, ymin: 0, ymax: 42000 }, step: { x: 3, y: 5000 }, points: [P(24, 38400, "(24, 38 400)")], xlabel: "t (h)", ylabel: "N" }),
    steps: [S`$N=150\cdot2^{t/3}$.`, S`$24\div3=8$ doublings: $150\times256=38\,400$.`], ans: S`$38\,400$` },
  { title: "Tripling", q: S`A rumour reaches $5$ people and triples every day. How many know after $6$ days?`, fig: G([(t) => 5 * 3 ** t], { view: { xmin: 0, xmax: 6.3, ymin: 0, ymax: 3800 }, step: { x: 1, y: 500 }, points: [P(6, 3645, "(6, 3645)")], xlabel: "t (days)", ylabel: "N" }),
    steps: [S`$N=5(3)^t$.`, S`$5\times729=3645$.`], ans: S`$3645$` },
  { title: "Reading a model", q: S`State the initial value and growth rate of $y=2750(1.042)^t$.`, fig: G([(t) => 2750 * 1.042 ** t], { view: { xmin: 0, xmax: 20, ymin: 0, ymax: 7000 }, step: { x: 2, y: 1000 }, points: [P(0, 2750, "(0, 2750)")], xlabel: "t", ylabel: "y" }),
    steps: [S`Initial value $2750$.`, S`Factor $1.042$: rate $4.2\%$.`], ans: S`$2750$; $4.2\%$` },
  { title: "From a table", q: S`Years $0,1,2$: $1600,\ 1720,\ 1849$. Find the growth rate and model.`, fig: G([(t) => 1600 * 1.075 ** t], { view: { xmin: 0, xmax: 6, ymin: 1500, ymax: 2600 }, step: { x: 1, y: 100 }, points: [P(0, 1600, "(0, 1600)"), P(1, 1720, "(1, 1720)"), P(2, 1849, "(2, 1849)")], xlabel: "t", ylabel: "y" }),
    steps: [S`$\frac{1720}{1600}=1.075$; $\frac{1849}{1720}=1.075$.`, S`Rate $7.5\%$: $y=1600(1.075)^t$.`], ans: S`$7.5\%$; $y=1600(1.075)^t$` },
  { title: "Reaching a target", q: S`For $P=48\,000(1.025)^t$, in which year does $P$ first exceed $60\,000$?`, fig: G([(t) => 48000 * 1.025 ** t], { view: { xmin: 0, xmax: 14, ymin: 45000, ymax: 70000 }, step: { x: 1, y: 5000 }, lines: [{ m: 0, b: 60000, color: "green", dash: true }], points: [P(9, r2(48000 * 1.025 ** 9), "(9, " + Math.round(48000 * 1.025 ** 9) + ")"), P(10, r2(48000 * 1.025 ** 10), "(10, " + Math.round(48000 * 1.025 ** 10) + ")", "red")], xlabel: "t", ylabel: "P" }),
    steps: [S`$t=9$: $\approx${c(48000 * 1.025 ** 9)}$.`, S`$t=10$: $\approx${c(48000 * 1.025 ** 10)}$: year $10$.`], ans: S`year $10$` },
  { title: "Doubling time from a rate", q: S`About how long does $1000$ take to double at $6\%$ growth per year? Use a table.`, fig: G([(t) => 1000 * 1.06 ** t], { view: { xmin: 0, xmax: 16, ymin: 800, ymax: 2600 }, step: { x: 1, y: 200 }, lines: [{ m: 0, b: 2000, color: "green", dash: true }], points: [P(12, r2(1000 * 1.06 ** 12), "(12, " + f(1000 * 1.06 ** 12) + ")")], xlabel: "t", ylabel: "A" }),
    steps: [S`$t=11$: $\approx${f(1000 * 1.06 ** 11)}$; $t=12$: $\approx${f(1000 * 1.06 ** 12)}$.`, S`It doubles during year $12$.`], ans: S`about $12$ years` },
  { title: "Linear vs exponential", q: S`Plan A adds $50$ subscribers a month from $1000$. Plan B grows $4\%$ a month from $1000$. Compare after $24$ months.`, fig: G([{ f: (t) => 1000 + 50 * t, color: "green" }, { f: (t) => 1000 * 1.04 ** t, color: "violet" }], { view: { xmin: 0, xmax: 30, ymin: 800, ymax: 3500 }, step: { x: 5, y: 500 }, points: [P(24, 2200, "A (24, 2200)", "green"), P(24, r2(1000 * 1.04 ** 24), "B (24, " + Math.round(1000 * 1.04 ** 24) + ")")], xlabel: "t", ylabel: "N" }),
    steps: [S`A: $1000+50(24)=2200$.`, S`B: $1000(1.04)^{24}\approx${f(1000 * 1.04 ** 24)}$.`], ans: S`A $2200$; B $\approx${Math.round(1000 * 1.04 ** 24)}$` },
  { title: "Finding the rate", q: S`An amount grows from $2500$ to $3025$ in $2$ years at a constant rate. Find the rate.`, fig: G([(t) => 2500 * 1.1 ** t], { view: { xmin: 0, xmax: 4, ymin: 2000, ymax: 3800 }, step: { x: 1, y: 200 }, points: [P(0, 2500, "(0, 2500)"), P(2, 3025, "(2, 3025)")], xlabel: "t", ylabel: "A" }),
    steps: [S`$(1+r)^2=\frac{3025}{2500}=1.21$.`, S`$1+r=1.1$: $10\%$.`], ans: S`$10\%$` },
];

const PROBLEMS = [
  { level: 1, q: S`Write a model: $900$ growing $6\%$ per year.`, ans: S`$A=900(1.06)^t$` },
  { level: 1, q: S`State the growth rate of $y=75(1.18)^t$.`, ans: S`$18\%$` },
  { level: 1, q: S`$30$ bacteria double every hour. How many after $7$ h?`, ans: S`$3840$` },
  { level: 2, q: S`Evaluate $12\,000(1.035)^{8}$.`, ans: S`$\approx${f(12000 * 1.035 ** 8)}$` },
  { level: 2, q: S`A population of $4200$ doubles every $15$ years. Find it after $45$ years.`, ans: S`$33\,600$` },
  { level: 2, q: S`Table $t=0,1,2$: $250,\ 280,\ 313.6$. Find the rate and model.`, ans: S`$12\%$; $250(1.12)^t$` },
  { level: 2, q: S`A video has $800$ views and views grow $25\%$ per day. After how many whole days does it pass $5000$?`, ans: S`$t=9$ ($\approx${Math.round(800 * 1.25 ** 9)}$)` },
  { level: 2, q: S`A colony triples every $4$ h from $60$. Find it after $10$ h.`, ans: S`$60\cdot3^{2.5}\approx${f(60 * 3 ** 2.5)}$` },
  { level: 3, space: 5, q: S`Town C: $15\,000$, $+600$ per year. Town D: $12\,000$, $+5\%$ per year. In which whole year does D first have more people?`, ans: S`year $${(() => { let t = 0; while (12000 * 1.05 ** t <= 15000 + 600 * t) t++; return t; })()}$` },
  { level: 3, space: 5, q: S`An amount grows from $5000$ to $6655$ in $3$ years at a constant rate. Find the rate.`, ans: S`$(1+r)^3=1.331$: $10\%$` },
  { level: 3, space: 5, q: S`A population doubles every $8$ years. By what percent does it grow in $4$ years?`, ans: S`$2^{0.5}\approx1.414$: about $41.4\%$` },
  { level: 3, space: 5, q: S`A culture of $500$ grows to $4000$ in $6$ h by doubling. Find the doubling time.`, ans: S`$8=2^3$: $2$ h` },
  { level: 3, space: 5, q: S`Explain why a $10\%$ increase followed by a $10\%$ increase is a $21\%$ increase overall.`, ans: S`$1.1^2=1.21$` },
];

export const WS = {
  code: "7.5",
  title: "Exponential Growth",
  bigideas: S`Growing by $r$ per period means multiplying by $1+r$ each period: $A=A_0(1+r)^t$. Doubling every $d$ units gives $A=A_0\cdot2^{t/d}$. Read the initial value from the coefficient and the rate from the factor minus $1$. Find when a target is reached by trying whole periods or reading the graph.`,
  goals: ["Write growth models.", "Use doubling and tripling models.", "Read rates.", "Find times; compare with linear growth."],
  curriculum: "B2.2, B2.3",
  vocab: [["Initial value", "$A_0$"], ["Growth factor", "$1+r$"], ["Doubling time", "time to double"], ["Exponential growth", "$A=A_0(1+r)^t$"]],
  hook: S`Would you rather have $1$ cent doubled every day for $30$ days, or $1\,000\,000$ cents today?`,
  concepts: [
    ["1. Percent growth", S`$+r$ each period: multiply by $1+r$.
${G([(t) => 1000 * 1.1 ** t], { view: { xmin: 0, xmax: 10, ymin: 0, ymax: 2800 }, step: { x: 1, y: 400 }, points: [P(0, 1000, "(0, 1000)"), P(10, r2(1000 * 1.1 ** 10), "(10, 2593.74)")], xlabel: "t", ylabel: "A" })}`],
    ["2. Doubling", S`$A=A_0\cdot2^{t/d}$: the exponent counts doublings.`],
  ],
  tips: ["Factor $=1+r$.", "Exponent counts periods.", "Round at the end."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
