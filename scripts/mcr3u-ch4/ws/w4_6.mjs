// MCR3U Worksheet 4.6 — Exponential Models: Growth and Decay (teacher edition)
import { F, pt } from "./figT.mjs";

const EXAMPLES = [
  { title: "Compound growth", q: "1500 dollars is invested at 5% compounded annually. Find its value after 8 years.", steps: [String.raw`$1500(1.05)^8\approx1500(1.4775)$.`], ans: "about 2216.18 dollars" },
  { title: "Depreciation", q: "A 45 000-dollar truck loses 12% of its value each year. Find its value after 5 years.", steps: [String.raw`$45\,000(0.88)^5\approx45\,000(0.5277)$.`], ans: "about 23 748 dollars" },
  { title: "Half-life", q: "96 mg of a drug has a half-life of 12 h. How much remains after 36 h?", steps: [String.raw`$96\left(\tfrac12\right)^{36/12}=96\cdot\tfrac18$.`], ans: "12 mg" },
  { title: "Doubling", q: "300 cells double every 4 h. How many after one day?", steps: [String.raw`$300(2)^{24/4}=300\cdot64$.`], ans: "19 200" },
  { title: "Rate from doubling time", q: "A quantity doubles every 10 years. What is its annual growth rate?", steps: [String.raw`$2^{1/10}\approx1.0718$.`], ans: "about 7.18% per year" },
  { title: "Cooling", q: String.raw`$T=60\left(\tfrac12\right)^{t/10}+25$. Find $T(20)$ and the range.`,
    fig: F({ view: { xmin: 0, xmax: 50, ymin: 0, ymax: 90 }, curves: [{ f: (t) => 60 * 0.5 ** (t / 10) + 25, a: 0 }], lines: [{ m: 0, b: 25, color: "green", dash: true }], points: [pt(20, 40)], step: { x: 5, y: 10 } }),
    steps: [String.raw`$60\cdot\tfrac14+25=40$; the drink starts at 85 and approaches 25.`], ans: String.raw`$40$ °C; $25<T\le85$` },
  { title: "Bouncing ball", q: "A ball dropped from 6 m rebounds to 60% of its height each bounce. Height after the 3rd bounce?", steps: [String.raw`$6(0.6)^3$.`], ans: "1.296 m" },
  { title: "Time to a target", q: "2000 dollars at 8% compounded annually: after how many full years does it exceed 3000 dollars?", steps: [String.raw`$1.08^5\approx1.469$; $1.08^6\approx1.587$.`], ans: "6 years" },
  { title: "Modelling data", q: String.raw`$t$: $0,1,2,3$; $A$: $50,40,32,25.6$. Find a model.`,
    fig: F({ view: { xmin: 0, xmax: 6, ymin: 0, ymax: 55 }, points: [pt(0, 50), pt(1, 40), pt(2, 32), pt(3, 25.6)], curves: [{ f: (t) => 50 * 0.8 ** t, a: 0 }], step: { x: 1, y: 5 } }),
    steps: ["Ratio 0.8 each step."], ans: String.raw`$A=50(0.8)^t$` },
];

const PROBLEMS = [
  { level: 1, q: "What is the growth factor for 2.5% growth?", recap: "Factor.", ans: "1.025" },
  { level: 1, q: "What is the decay factor for a 30% decrease?", recap: "Factor.", ans: "0.7" },
  { level: 1, q: String.raw`Evaluate $4000(1.04)^3$.`, recap: "Evaluate.", ans: "4499.46" },
  { level: 2, q: "A 32 000-dollar car loses 18% per year. Find its value after 3 years.", recap: "Depreciation.", ans: "17 643.78 dollars" },
  { level: 2, q: "A 120 g sample has a half-life of 8 days. How much is left after 24 days?", recap: "Half-life.", ans: "15 g" },
  { level: 2, q: "200 bacteria triple every hour. How many after 4 hours?", recap: "Tripling.", ans: "16 200" },
  { level: 2, q: "1200 dollars at 3% compounded annually: value after 10 years?", recap: "Interest.", ans: "1612.70 dollars" },
  { level: 2, q: String.raw`$T=70(0.8)^t+20$. Find $T(3)$ and the asymptote.`, recap: "Cooling.", ans: String.raw`$55.84$ °C; $T=20$` },
  { level: 3, space: 4, q: "A town of 25 000 grows 2.5% per year. After how many full years does it pass 35 000?", recap: "Time to target.", ans: "14 years" },
  { level: 3, space: 4, q: "A 500 mg dose: 15% is eliminated each hour. After how many full hours is less than 100 mg left?", recap: "Decay target.", ans: "10 h" },
  { level: 3, space: 4, q: "A sample decays from 80 g to 10 g in 21 days. What is its half-life?", recap: "Find the half-life.", ans: "3 half-lives: 7 days" },
  { level: 3, space: 5, q: "Account A: 1000 dollars at 7%; account B: 1500 dollars at 4% (both compounded annually). After how many full years is A worth more?", recap: "Compare accounts.", ans: "15 years",
    fig: F({ view: { xmin: 0, xmax: 20, ymin: 900, ymax: 4200 }, curves: [{ f: (n) => 1000 * 1.07 ** n, a: 0, color: "blue" }, { f: (n) => 1500 * 1.04 ** n, a: 0, color: "red" }], step: { x: 2, y: 500 } }) },
  { level: 3, space: 5, q: String.raw`Soup at 90 °C cools as $T=70(0.85)^t+20$. State the domain and range, and find to the nearest minute when it reaches 40 °C.`, recap: "Cooling restrictions.", ans: String.raw`$t\ge0$; $20<T\le90$; between 7 and 8 min` },
];

export const WS = {
  code: "4.6",
  title: "Exponential Models: Growth and Decay",
  bigideas: String.raw`Quantities that change by a constant factor per period are exponential: $A_0(1\pm r)^t$, half-life $A_0(\frac12)^{t/h}$, doubling $A_0(2)^{t/d}$, compound interest $P(1+i)^n$, cooling $(T_0-T_a)(\frac12)^{t/h}+T_a$. Contexts restrict the domain ($t\ge0$) and the range (above an asymptote). Without logarithms, find target times by graph or guess-and-check.`,
  goals: ["Build models from rates, half-lives and doubling times.", "Use compound interest.", "Model cooling with restrictions.", "Estimate times to targets."],
  curriculum: "B3.1, B3.2, B3.3",
  vocab: [["Growth factor", "$1+r$"], ["Decay factor", "$1-r$"], ["Half-life", "time to halve"]],
  hook: "Pour hot water into a mug and record its temperature every 2 minutes. Ask: will it ever reach 0 °C?",
  concepts: [
    ["1. Factor per period", "Growth 1 + r, decay 1 − r, half 0.5, double 2."],
    ["2. Number of periods", "t/h half-lives, t/d doublings, n interest periods."],
    ["3. Restrictions", String.raw`${F({ view: { xmin: 0, xmax: 40, ymin: 0, ymax: 100 }, curves: [{ f: (t) => 70 * 0.5 ** (t / 8) + 20, a: 0 }], lines: [{ m: 0, b: 20, color: "green", dash: true }], step: { x: 5, y: 10 } }, 5, "cooling approaches room temperature")}`],
  ],
  tips: ["15% loss → 0.85.", "Exponent t/h for half-lives.", "Keep factor digits.", "Range bounded by the asymptote.", "Guess-and-check whole numbers."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
