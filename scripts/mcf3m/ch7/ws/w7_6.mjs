// MCF3M Worksheet 7.6 — Exponential Decay (teacher edition). Numbers computed in code.
import { svgT } from "../../ws/figT.mjs";
import { eDoc, P, r2 } from "../efig.mjs";
const S = String.raw;
const G = (curves, o, w = 5.2) => svgT(eDoc(curves, o), w);
const f = (v) => v.toFixed(2);
const first = (fn, lim) => { let t = 0; while (fn(t) >= lim) t++; return t; };

const EXAMPLES = [
  { title: "Depreciation", q: S`A phone bought for $1200$ dollars loses $25\%$ of its value per year. Find its value after $3$ years.`, fig: G([(t) => 1200 * 0.75 ** t], { view: { xmin: 0, xmax: 6, ymin: 0, ymax: 1300 }, step: { x: 1, y: 200 }, points: [P(3, r2(1200 * 0.75 ** 3), "(3, 506.25)")], xlabel: "t", ylabel: "V" }),
    steps: [S`$V=1200(0.75)^t$.`, S`$V(3)=1200(0.421875)=506.25$ dollars.`], ans: S`$506.25$ dollars` },
  { title: "Half-life", q: S`A $240$ mg sample has a half-life of $10$ days. How much is left after $40$ days? After $25$ days?`, fig: G([(t) => 240 * 0.5 ** (t / 10)], { view: { xmin: 0, xmax: 50, ymin: 0, ymax: 260 }, step: { x: 10, y: 20 }, points: [P(40, 15, "(40, 15)"), P(25, r2(240 * 0.5 ** 2.5), "(25, " + f(240 * 0.5 ** 2.5) + ")", "red")], xlabel: "t (days)", ylabel: "A (mg)" }),
    steps: [S`$40\div10=4$ half-lives: $240\times\frac1{16}=15$ mg.`, S`$240(0.5)^{2.5}\approx${f(240 * 0.5 ** 2.5)}$ mg.`], ans: S`$15$ mg; $\approx${f(240 * 0.5 ** 2.5)}$ mg` },
  { title: "Reading a model", q: S`State the initial value and decay rate of $y=4500(0.88)^t$.`, fig: G([(t) => 4500 * 0.88 ** t], { view: { xmin: 0, xmax: 15, ymin: 0, ymax: 5000 }, step: { x: 1, y: 500 }, points: [P(0, 4500, "(0, 4500)")], xlabel: "t", ylabel: "y" }),
    steps: [S`Initial value $4500$.`, S`$1-0.88=0.12$: $12\%$ per period.`], ans: S`$4500$; $12\%$` },
  { title: "From a table", q: S`Hours $0,1,2$: $640,\ 576,\ 518.4$. Find the decay rate and model.`, fig: G([(t) => 640 * 0.9 ** t], { view: { xmin: 0, xmax: 8, ymin: 0, ymax: 700 }, step: { x: 1, y: 100 }, points: [P(0, 640, "(0, 640)"), P(1, 576, "(1, 576)"), P(2, 518.4, "(2, 518.4)")], xlabel: "t", ylabel: "y" }),
    steps: [S`Ratios $0.9$.`, S`$10\%$ per hour: $y=640(0.9)^t$.`], ans: S`$10\%$; $y=640(0.9)^t$` },
  { title: "Below a level", q: S`A pool's chlorine level is $3.2$ ppm and drops $15\%$ per day. On which day is it first below $1.5$ ppm?`, fig: G([(t) => 3.2 * 0.85 ** t], { view: { xmin: 0, xmax: 8, ymin: 0, ymax: 3.5 }, step: { x: 1, y: 0.5 }, lines: [{ m: 0, b: 1.5, color: "green", dash: true }], points: [P(first((t) => 3.2 * 0.85 ** t, 1.5), r2(3.2 * 0.85 ** first((t) => 3.2 * 0.85 ** t, 1.5)), null, "red")], xlabel: "t (days)", ylabel: "ppm" }),
    steps: [S`$c=3.2(0.85)^t$.`, S`$t=4$: $\approx${f(3.2 * 0.85 ** 4)}$; $t=5$: $\approx${f(3.2 * 0.85 ** 5)}$.`], ans: S`day $5$` },
  { title: "Cooling", q: S`Soup at $85$ °C cools in a $21$ °C room; the difference halves every $12$ min. Find the temperature after $36$ min.`, fig: G([(t) => 21 + 64 * 0.5 ** (t / 12)], { view: { xmin: 0, xmax: 60, ymin: 0, ymax: 90 }, step: { x: 12, y: 10 }, lines: [{ m: 0, b: 21, color: "red", dash: true }], points: [P(36, 29, "(36, 29)")], xlabel: "t (min)", ylabel: "T" }),
    steps: [S`$T=21+64\left(\frac12\right)^{t/12}$.`, S`$t=36$: $21+64\times\frac18=29$ °C.`], ans: S`$29$ °C` },
  { title: "Finding a half-life", q: S`A sample decays from $96$ g to $6$ g in $32$ min. Find the half-life.`, fig: G([(t) => 96 * 0.5 ** (t / 8)], { view: { xmin: 0, xmax: 40, ymin: 0, ymax: 100 }, step: { x: 8, y: 10 }, points: [P(8, 48, "(8, 48)"), P(32, 6, "(32, 6)")], xlabel: "t (min)", ylabel: "A (g)" }),
    steps: [S`$\frac6{96}=\frac1{16}=\left(\frac12\right)^4$.`, S`$32\div4=8$ min.`], ans: S`$8$ min` },
  { title: "Finding a rate", q: S`A car worth $25\,000$ dollars is worth $16\,000$ dollars two years later. Find the yearly depreciation rate.`, fig: G([(t) => 25000 * 0.8 ** t], { view: { xmin: 0, xmax: 5, ymin: 0, ymax: 27000 }, step: { x: 1, y: 5000 }, points: [P(0, 25000, "(0, 25 000)"), P(2, 16000, "(2, 16 000)")], xlabel: "t", ylabel: "V" }),
    steps: [S`$(1-r)^2=0.64$.`, S`$1-r=0.8$: $20\%$.`], ans: S`$20\%$` },
  { title: "Decay vs linear", q: S`Machine A loses $3000$ dollars a year from $30\,000$; machine B loses $15\%$ a year from $30\,000$. Which is worth more after $6$ years?`, fig: G([{ f: (t) => 30000 - 3000 * t, color: "green" }, { f: (t) => 30000 * 0.85 ** t, color: "violet" }], { view: { xmin: 0, xmax: 10, ymin: 0, ymax: 32000 }, step: { x: 1, y: 4000 }, points: [P(6, 12000, "A (6, 12 000)", "green"), P(6, r2(30000 * 0.85 ** 6), "B", "violet")], xlabel: "t", ylabel: "V" }),
    steps: [S`A: $30\,000-18\,000=12\,000$.`, S`B: $30\,000(0.85)^6\approx${f(30000 * 0.85 ** 6)}$.`], ans: S`A ($12\,000$ vs $\approx${f(30000 * 0.85 ** 6)}$)` },
];

const PROBLEMS = [
  { level: 1, q: S`Write a model: $800$ losing $7\%$ per year.`, ans: S`$A=800(0.93)^t$` },
  { level: 1, q: S`State the decay rate of $y=60(0.82)^t$.`, ans: S`$18\%$` },
  { level: 1, q: S`$400$ g with a half-life of $2$ h: how much after $8$ h?`, ans: S`$25$ g` },
  { level: 2, q: S`Evaluate $15\,000(0.9)^{5}$.`, ans: S`$${f(15000 * 0.9 ** 5)}$` },
  { level: 2, q: S`A drug has a half-life of $5$ h. What percent remains after $15$ h?`, ans: S`$12.5\%$` },
  { level: 2, q: S`A tire at $220$ kPa loses $5\%$ per hour. Find the pressure after $6$ h.`, ans: S`$\approx${f(220 * 0.95 ** 6)}$ kPa` },
  { level: 2, q: S`$T=18+62\left(\frac12\right)^{t/6}$. Find $T$ at $t=18$.`, ans: S`$25.75$ °C` },
  { level: 2, q: S`Table: $2000,\ 1700,\ 1445$. Find the rate and model.`, ans: S`$15\%$; $2000(0.85)^t$` },
  { level: 3, space: 5, q: S`A $500$ mg dose has a half-life of $6$ h. After how many whole hours is less than $50$ mg left?`, ans: S`$t=${first((t) => 500 * 0.5 ** (t / 6), 50)}$ h` },
  { level: 3, space: 5, q: S`A value drops from $40\,000$ to $28\,900$ in $2$ years. Find the yearly rate.`, ans: S`$(1-r)^2=0.7225$: $15\%$` },
  { level: 3, space: 5, q: S`A sample loses $\frac78$ of its mass in $9$ days. Find its half-life.`, ans: S`$\frac18$ left: $3$ half-lives, $3$ days` },
  { level: 3, space: 5, q: S`Explain why a $20\%$ loss followed by a $20\%$ gain does not return to the start.`, ans: S`$0.8\times1.2=0.96$: a $4\%$ loss` },
  { level: 3, space: 5, q: S`Coffee at $92$ °C in a $22$ °C room is at $57$ °C after $10$ min. Find the halving time of the difference and the temperature at $30$ min.`, ans: S`$70\to35$: $10$ min; $22+70\times\frac18=30.75$ °C` },
];

export const WS = {
  code: "7.6",
  title: "Exponential Decay",
  bigideas: S`Losing $r$ per period means keeping $1-r$: $A=A_0(1-r)^t$. A half-life $h$ gives $A=A_0\left(\tfrac12\right)^{t/h}$. In cooling, the difference from room temperature decays: $T=R+(T_0-R)\left(\tfrac12\right)^{t/h}$. Decay graphs fall quickly and level off toward an asymptote.`,
  goals: ["Write decay models.", "Use half-life models.", "Read decay rates.", "Find when a level is passed; model cooling."],
  curriculum: "B2.2, B2.3",
  vocab: [["Decay factor", "$1-r$"], ["Half-life", "time to halve"], ["Depreciation", "loss of value"], ["Asymptote", "level approached"]],
  hook: S`If a medicine halves every $4$ hours, is it ever completely gone?`,
  concepts: [
    ["1. Percent decay", S`Keep $1-r$ each period.
${G([(t) => 1000 * 0.8 ** t], { view: { xmin: 0, xmax: 10, ymin: 0, ymax: 1100 }, step: { x: 1, y: 100 }, points: [P(0, 1000, "(0, 1000)"), P(3, 512, "(3, 512)")], xlabel: "t", ylabel: "A" })}`],
    ["2. Half-life and cooling", S`Exponent $\frac th$ counts half-lives; for cooling, the difference decays.`],
  ],
  tips: ["Factor $=1-r$.", "$\\frac th$, not $t$.", "Cooling: add room temperature back."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
