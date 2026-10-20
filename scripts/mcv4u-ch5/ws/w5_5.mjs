// MCV4U Worksheet 5.5 — Making Connections: Exponential Models (teacher edition)
import { F, gridT, pt } from "./figT.mjs";

const S = String.raw;
const E = Math.E;
const EXAMPLES = [
  { title: "Yeast growth", q: S`Yeast grows as $P(t)=150e^{0.42t}$ cells per mL after $t$ hours. How fast is it growing at $t=5$?`,
    steps: [S`$P'(t)=0.42\cdot150e^{0.42t}$; $P'(5)=63e^{2.1}$.`], ans: "about 514.5 cells per mL per hour" },
  { title: "From a doubling time", q: S`A culture of 400 doubles every 6 hours. How fast is it growing when it reaches 1600?`,
    steps: [S`$k=\frac{\ln2}{6}\approx0.1155$; $P'=kP$.`, S`$P'=0.1155\times1600$.`], ans: "about 184.8 per hour" },
  { title: "Radioactive decay", q: S`Radium has a half-life of 1600 years. How fast is a 2 g sample decaying?`,
    steps: [S`$k=-\frac{\ln2}{1600}$; $P'=kP=-\frac{2\ln2}{1600}$.`], ans: S`about $8.66\times10^{-4}$ g per year` },
  { title: "Continuous interest", q: S`8000 dollars grows as $A(t)=8000e^{0.035t}$. How fast is it growing after 20 years?`,
    steps: [S`$A'(20)=0.035\cdot8000e^{0.7}$.`], ans: "about 563.9 dollars per year" },
  { title: "Cooling from data", q: S`Soup at 90 °C is in a 22 °C room and is 60 °C after 10 min. Assuming $T=22+68e^{-kt}$, find $k$ and the rate of cooling at $t=10$.`,
    fig: F({ view: { xmin: 0, xmax: 50, ymin: 0, ymax: 100 }, curves: [{ f: (t) => 22 + 68 * Math.exp(-0.0582 * t), a: 0, b: 50 }, { f: () => 22, color: "gray" }], points: [pt(0, 90), pt(10, 60)], step: { x: 5, y: 10 } }),
    steps: [S`$38=68e^{-10k}\Rightarrow k=\frac{\ln(68/38)}{10}\approx0.0582$.`, S`$T'(10)=-k(T-22)=-0.0582\times38$.`], ans: "k ≈ 0.0582; cooling at about 2.21 °C per minute" },
  { title: "Air pressure", q: S`Air pressure is $P(h)=101.3e^{-0.12h}$ kPa at $h$ km. Find the rate of change at $h=2$.`,
    steps: [S`$P'(h)=-0.12\cdot101.3e^{-0.12h}$; at 2: $-12.156e^{-0.24}$.`], ans: "about −9.56 kPa per km" },
  { title: "Peak concentration", q: S`A drug's concentration is $C(t)=6te^{-0.25t}$ mg/L. Find the time and value of the maximum.`,
    fig: F({ view: { xmin: 0, xmax: 25, ymin: 0, ymax: 10 }, curves: [{ f: (t) => 6 * t * Math.exp(-0.25 * t), a: 0, b: 25 }], points: [pt(4, 24 / E)], step: { x: 5, y: 1 } }),
    steps: [S`$C'=6e^{-0.25t}(1-0.25t)=0\Rightarrow t=4$.`, S`$C(4)=24e^{-1}$.`], ans: "at 4 h, about 8.83 mg/L" },
  { title: "Logistic spread", q: S`A rumour reaches $P(t)=\frac{500}{1+24e^{-0.8t}}$ students after $t$ days. When is it spreading fastest, and how fast?`,
    fig: F({ view: { xmin: 0, xmax: 10, ymin: 0, ymax: 550 }, curves: [{ f: (t) => 500 / (1 + 24 * Math.exp(-0.8 * t)), a: 0, b: 10 }, { f: () => 500, color: "gray" }], points: [pt(Math.log(24) / 0.8, 250)], step: { x: 1, y: 50 } }),
    steps: [S`Fastest at half the limit, $P=250$: $24e^{-0.8t}=1\Rightarrow t=\frac{\ln24}{0.8}\approx3.97$.`, S`Rate $0.8\cdot250\cdot\left(1-\frac{250}{500}\right)=100$.`], ans: "after about 3.97 days, 100 students per day" },
  { title: "A learning curve", q: S`A typist's speed is $L(t)=100(1-e^{-0.2t})$ words per minute after $t$ weeks. How fast is it improving at $t=5$?`,
    steps: [S`$L'(t)=20e^{-0.2t}$; $L'(5)=20e^{-1}$.`], ans: "about 7.36 words per minute per week" },
];

const PROBLEMS = [
  { level: 1, q: S`For $P(t)=300e^{0.25t}$, find $P'(0)$.`, recap: "kP₀.", ans: "75" },
  { level: 1, q: S`Find the half-life when $k=-0.1$.`, recap: "ln 2 / 0.1.", ans: "6.931" },
  { level: 1, q: S`Find the doubling time when $k=0.07$.`, recap: "ln 2 / 0.07.", ans: "9.902" },
  { level: 2, q: S`For $A(t)=1500e^{0.045t}$, find $A'(10)$.`, recap: "kA.", ans: "about 105.86 dollars per year" },
  { level: 2, q: S`Tea cools as $T(t)=21+75e^{-0.06t}$ °C. Find $T'(0)$.`, recap: S`$-0.06\times75$.`, ans: "−4.5 °C per minute" },
  { level: 2, q: S`A town of 2000 doubles every 15 years. How fast is it growing now?`, recap: "k = ln 2 / 15.", ans: "about 92.4 people per year" },
  { level: 2, q: S`80 g of a substance with half-life 12 days: how fast is it decaying now?`, recap: "k = −ln 2 / 12.", ans: "about −4.62 g per day" },
  { level: 2, q: S`Sketch $P(t)=100e^{0.3t}$ for $0\le t\le8$ and draw its tangent at $t=4$.`, recap: S`$P'(4)=30e^{1.2}$.`, ans: S`$P(4)\approx332$, slope $\approx99.6$`, fig: gridT({ xmin: 0, xmax: 8, ymin: 0, ymax: 1200 }, { x: 1, y: 100 }) },
  { level: 3, space: 5, q: S`A population follows $P(t)=\frac{800}{1+7e^{-0.6t}}$. When is it growing fastest, and how fast?`, recap: "Fastest at half the limit.", ans: S`$t=\frac{\ln7}{0.6}\approx3.24$; $0.6\cdot400\cdot0.5=120$ per unit time` },
  { level: 3, space: 5, q: S`Which is better: 4% compounded continuously or 4.1% compounded once a year? Explain.`, recap: S`Compare $e^{0.04}$ with $1.041$.`, ans: S`$e^{0.04}\approx1.0408\lt1.041$: the annual 4.1% is slightly better` },
  { level: 3, space: 5, q: S`Coffee cools from 95 °C to 70 °C in 5 min in a 20 °C room. Find $k$ in $T=20+75e^{-kt}$ and when it reaches 40 °C.`, recap: "Use the data point, then solve.", ans: S`$k=\frac{\ln1.5}5\approx0.0811$; $t=\frac{\ln3.75}{k}\approx16.3$ min` },
  { level: 3, space: 5, q: S`A concentration is $C(t)=kte^{-t/3}$. If the greatest concentration is 6 mg/L, find $k$.`, recap: "Maximum at t = 3.", ans: S`$3ke^{-1}=6\Rightarrow k=2e\approx5.437$` },
  { level: 3, space: 5, q: S`A skill score is $L(t)=100(1-e^{-0.3t})$. When is it improving at 5 points per hour? Sketch $L$.`, recap: S`$30e^{-0.3t}=5$.`, ans: S`$t=\frac{\ln6}{0.3}\approx5.97$ h`, fig: gridT({ xmin: 0, xmax: 15, ymin: 0, ymax: 110 }, { x: 1, y: 10 }) },
];

export const WS = {
  code: "5.5",
  title: "Making Connections: Exponential Models",
  bigideas: S`If $P(t)=P_0e^{kt}$ then $P'(t)=kP(t)$: the rate is proportional to the amount. Growth ($k\gt0$) doubles every $\frac{\ln2}{k}$; decay ($k\lt0$) halves every $\frac{\ln2}{|k|}$. Continuous interest, Newton's law of cooling ($T=T_s+(T_0-T_s)e^{-kt}$), pressure and drug models all use the same derivative. Logistic models $P=\frac{M}{1+Ae^{-kt}}$ grow fastest at $P=\frac M2$.`,
  goals: ["Use P′ = kP.", "Find k from doubling or half-life.", "Model interest, cooling and decay.", "Find maxima and fastest growth."],
  curriculum: "A3.5, B2",
  vocab: [["$P'=kP$", "proportional rate"], ["Half-life", "$\\frac{\\ln2}{|k|}$"], ["Logistic", "$\\frac{M}{1+Ae^{-kt}}$"]],
  hook: S`A colony of 100 bacteria doubles every hour. How many after 10 hours? How fast is it growing then compared with at the start?`,
  concepts: [
    ["1. Growth and decay", S`Growth $100e^{0.3t}$ (violet) and decay $800e^{-0.2t}$ (blue):
${F({ view: { xmin: 0, xmax: 10, ymin: 0, ymax: 900 }, curves: [{ f: (t) => 100 * Math.exp(0.3 * t), a: 0, b: 10 }, { f: (t) => 800 * Math.exp(-0.2 * t), color: "blue", a: 0, b: 10 }], step: { x: 1, y: 100 } })}`],
    ["2. Finding k", S`Doubling time $d$: $k=\frac{\ln2}{d}$; half-life $h$: $k=-\frac{\ln2}{h}$.`],
    ["3. Logistic", S`Exponential at first, levelling off at $M$; steepest at $\frac M2$.`],
  ],
  tips: ["k < 0 for decay.", "Doubling time is independent of the start.", "Keep time units consistent.", "Rates need units.", "Logistic: fastest at half the limit."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
