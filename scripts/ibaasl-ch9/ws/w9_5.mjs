// IB AA SL Worksheet 9.5 — Solving Exponential Equations (teacher edition)
import { F, pt } from "./figT.mjs";

const S = String.raw;

const EXAMPLES = [
  { title: "Taking logs", q: S`Solve $3^x=70$ (3 s.f.).`,
    fig: F({ view: { xmin: -1, xmax: 5, ymin: -10, ymax: 90 }, curves: [{ f: (x) => 3 ** x }], lines: [{ m: 0, b: 70, color: "amber", dash: true }], points: [pt(Math.log(70) / Math.log(3), 70, "", "red")], step: { x: 1, y: 10 } }, 6),
    steps: [S`$x=\frac{\ln70}{\ln3}$.`], ans: S`$x\approx3.87$` },
  { title: "Isolate first", q: S`Solve $4\cdot5^{x}-7=93$.`,
    steps: [S`$5^x=25$.`], ans: S`$x=2$` },
  { title: "e equation", q: S`Solve $3e^{0.4x}=45$.`,
    steps: [S`$e^{0.4x}=15$.`, S`$x=\frac{\ln15}{0.4}$.`], ans: S`$x\approx6.77$` },
  { title: "ln equation", q: S`Solve $\ln(4x-1)=3$.`,
    steps: [S`$4x-1=e^3$.`], ans: S`$x=\frac{e^3+1}{4}\approx5.27$` },
  { title: "Different bases", q: S`Solve $6^{x}=2^{x+4}$.`,
    steps: [S`$x\ln6=(x+4)\ln2$.`, S`$x(\ln6-\ln2)=4\ln2\Rightarrow x=\frac{4\ln2}{\ln3}$.`], ans: S`$x\approx2.524$` },
  { title: "Disguised quadratic", q: S`Solve $e^{2x}-8e^x+12=0$.`,
    fig: F({ view: { xmin: -1, xmax: 2.5, ymin: -6, ymax: 10 }, curves: [{ f: (x) => Math.exp(2 * x) - 8 * Math.exp(x) + 12 }], points: [pt(Math.log(2), 0, "", "red"), pt(Math.log(6), 0, "", "red")], step: { x: 0.5, y: 2 } }, 6),
    steps: [S`$(e^x-2)(e^x-6)=0$.`], ans: S`$x=\ln2$ or $\ln6$` },
  { title: "Solving for time", q: "1200 dollars is invested at 3% compounded annually. When does it first exceed 2000 dollars?",
    steps: [S`$1.03^t>\frac53\Rightarrow t>\frac{\ln(5/3)}{\ln1.03}\approx17.3$.`], ans: "after 18 years" },
  { title: "Rate constant", q: S`A population follows $P=2000e^{kt}$ and reaches 2600 after 4 years. Find $k$.`,
    steps: [S`$e^{4k}=1.3\Rightarrow k=\frac{\ln1.3}{4}$.`], ans: S`$k\approx0.0656$` },
  { title: "Half-life from k", q: S`A drug decays as $C=50e^{-0.15t}$. Find the half-life.`,
    steps: [S`$e^{-0.15t}=0.5\Rightarrow t=\frac{\ln2}{0.15}$.`], ans: "about 4.62 hours" },
];

const PROBLEMS = [
  { level: 1, q: S`Solve $2^x=13$ (3 d.p.).`, recap: "Take logs.", ans: S`$\approx3.700$` },
  { level: 1, q: S`Solve $e^x=0.4$ (3 d.p.).`, recap: "ln.", ans: S`$\approx-0.916$` },
  { level: 1, q: S`Solve $10^{x}=250$ (3 d.p.).`, recap: "log.", ans: S`$\approx2.398$` },
  { level: 2, q: S`Solve $5e^{-x}+2=12$.`, recap: "Isolate.", ans: S`$x=-\ln2\approx-0.693$` },
  { level: 2, q: S`Solve $3^{x+1}=7^{x}$ (3 d.p.).`, recap: "Different bases.", ans: S`$x=\frac{\ln3}{\ln7-\ln3}\approx1.297$` },
  { level: 2, q: S`Solve $\ln(x+2)=1.5$ (3 d.p.).`, recap: "Exponentiate.", ans: S`$e^{1.5}-2\approx2.482$` },
  { level: 2, q: "A car worth 30 000 dollars loses 15% a year. When is it first worth less than 10 000 dollars?", recap: "Decay time.", ans: S`$t>\frac{\ln(1/3)}{\ln0.85}\approx6.76$: year 7` },
  { level: 2, q: S`Find the doubling time of $A=500e^{0.07t}$.`, recap: S`$\ln2/k$.`, ans: S`$\approx9.90$` },
  { level: 3, space: 4, q: S`Solve $2^{2x}-3\cdot2^{x}-10=0$.`, recap: "Reject a root.", ans: S`$2^x=5$ ($2^x=-2$ impossible): $x=\frac{\ln5}{\ln2}\approx2.322$`,
    fig: F({ view: { xmin: -1, xmax: 3, ymin: -14, ymax: 10 }, curves: [{ f: (x) => 4 ** x - 3 * 2 ** x - 10 }], step: { x: 1, y: 2 } }, 5.5) },
  { level: 3, space: 4, q: S`A culture grows as $N=N_0e^{kt}$ and triples in 5 hours. How long does it take to grow from 100 to 1000?`, recap: "Find k first.", ans: S`$k=\frac{\ln3}{5}$; $t=\frac{\ln10}{k}\approx10.48$ h` },
  { level: 3, space: 4, q: S`Solve $e^{x}+6e^{-x}=5$.`, recap: S`Multiply by $e^x$.`, ans: S`$e^{2x}-5e^x+6=0$: $x=\ln2$ or $\ln3$` },
  { level: 3, space: 4, q: "Investment A: 5000 dollars at 6% compounded annually. Investment B: 6000 dollars at 4% compounded annually. When is A first worth more than B?", recap: "Equal values.", ans: S`$\left(\frac{1.06}{1.04}\right)^t>1.2\Rightarrow t>9.57$: year 10` },
  { level: 3, space: 4, q: S`Explain why $2^x=-5$ has no solution, using the graph of $y=2^x$.`, recap: "Range.", ans: S`$2^x>0$ for all $x$; the graph never reaches $-5$` },
];

export const WS = {
  code: "9.5",
  title: "Solving Exponential Equations",
  bigideas: S`Isolate the exponential, take logs of both sides and use the power law: $a^x=c\Rightarrow x=\frac{\ln c}{\ln a}$. With different bases, collect the $x$ terms. Use ln to undo $e$ and $e$ to undo ln. Substitute $u=e^x$ when $e^{2x}$ appears, rejecting $u\le0$. For $A=A_0e^{kt}$: doubling time or half-life $=\frac{\ln2}{|k|}$.`,
  goals: ["Solve with logs.", "Handle different bases.", "Solve e and ln equations.", "Solve for time and rate."],
  curriculum: "SL 1.7, 2.9",
  vocab: [["Take logs", "apply ln to both sides"], ["Doubling time", S`$\frac{\ln2}{k}$`], ["Rate constant", S`$k$ in $e^{kt}$`]],
  hook: "A rumour spreads so that the number who know it triples every hour from one person. When will a town of 50 000 all know?",
  concepts: [
    ["1. Logs", S`${F({ view: { xmin: -1, xmax: 4, ymin: -5, ymax: 40 }, curves: [{ f: (x) => 2.5 ** x }], lines: [{ m: 0, b: 30, color: "amber", dash: true }], points: [pt(Math.log(30) / Math.log(2.5), 30, "", "red")], step: { x: 1, y: 5 } }, 4.8)} $2.5^x=30$ at $x=\frac{\ln30}{\ln2.5}$.`],
    ["2. Quadratics", S`$u=e^x>0$.`],
    ["3. Models", S`Solve $A=A_0e^{kt}$ for $t$ or $k$.`],
  ],
  tips: ["Isolate before logging.", "Keep exact forms.", S`Reject $u\le0$.`, "Round time up for 'first exceeds'.", "Find k before t."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
