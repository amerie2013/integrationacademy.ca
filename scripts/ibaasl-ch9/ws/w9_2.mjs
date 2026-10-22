// IB AA SL Worksheet 9.2 — Exponential Functions and the Number e (teacher edition)
import { F, pt } from "./figT.mjs";

const S = String.raw;

const EXAMPLES = [
  { title: "Key features", q: S`For $y=2\cdot3^{x}-6$, state the asymptote, y-intercept and range, and find the x-intercept.`,
    fig: F({ view: { xmin: -4, xmax: 3, ymin: -8, ymax: 12 }, curves: [{ f: (x) => 2 * 3 ** x - 6 }], lines: [{ m: 0, b: -6, color: "red", dash: true }], points: [pt(0, -4), pt(1, 0, "", "green")], step: { x: 1, y: 2 } }, 6),
    steps: [S`Asymptote $y=-6$; $y(0)=2-6=-4$.`, S`$2\cdot3^x=6\Rightarrow3^x=3\Rightarrow x=1$.`], ans: S`$y=-6$; $(0,-4)$; $y>-6$; $(1,0)$` },
  { title: "Growth or decay", q: S`Which of $y=5(1.08)^x$, $y=3(0.9)^x$, $y=0.5\cdot e^{x}$, $y=4e^{-0.2x}$ show decay?`,
    steps: [S`Decay: base between 0 and 1, or a negative exponent of $e$.`], ans: S`$3(0.9)^x$ and $4e^{-0.2x}$` },
  { title: "Reflection", q: S`Describe how $y=\left(\frac14\right)^x$ is related to $y=4^x$.`,
    steps: [S`$\left(\frac14\right)^x=4^{-x}$: reflection in the y-axis.`], ans: "reflection in the y-axis" },
  { title: "Percentage growth", q: "A colony of 3000 bees grows by 7% a month. Write a model and find the size after 1 year.",
    steps: [S`$N=3000(1.07)^t$.`, S`$3000(1.07)^{12}\approx6757$.`], ans: "about 6757" },
  { title: "Half-life", q: "A radioactive isotope has a half-life of 12 days. Starting with 80 g, how much is left after 30 days?",
    fig: F({ view: { xmin: 0, xmax: 50, ymin: 0, ymax: 90 }, curves: [{ f: (t) => 80 * 0.5 ** (t / 12), a: 0, b: 50 }], points: [pt(12, 40, "", "green"), pt(30, 80 * 0.5 ** 2.5, "", "red")], step: { x: 5, y: 10 } }, 6.2),
    steps: [S`$A=80\left(\frac12\right)^{t/12}$.`, S`$80(0.5)^{2.5}\approx14.1$.`], ans: "about 14.1 g" },
  { title: "Compound interest", q: "6000 dollars is invested at 2.8% a year compounded quarterly. Find the value after 7 years.",
    steps: [S`$6000\left(1+\frac{0.028}{4}\right)^{28}=6000(1.007)^{28}$.`], ans: "about 7294.18 dollars" },
  { title: "Approaching e", q: S`Evaluate $\left(1+\frac1n\right)^n$ for $n=10$, $1000$ and $10^6$. What do you notice?`,
    steps: ["2.59374, 2.71692, 2.71828."], ans: S`the values approach $e\approx2.71828$` },
  { title: "Continuous growth", q: "1500 dollars grows at 3.5% compounded continuously. Find its value after 12 years.",
    steps: [S`$1500e^{0.035\times12}=1500e^{0.42}$.`], ans: "about 2282.94 dollars" },
  { title: "Model from two points", q: S`$y=a\cdot b^x$ passes through $(2,20)$ and $(4,80)$. Find $a$ and $b$ ($b>0$).`,
    steps: [S`$b^2=\frac{80}{20}=4$, so $b=2$.`, S`$4a=20\Rightarrow a=5$.`], ans: S`$a=5$, $b=2$` },
];

const PROBLEMS = [
  { level: 1, q: S`State the asymptote of $y=7\cdot2^x+3$.`, recap: "y = k.", ans: S`$y=3$` },
  { level: 1, q: S`Find the y-intercept of $y=4e^{x}-1$.`, recap: "x = 0.", ans: S`$(0,3)$` },
  { level: 1, q: "A price of 250 dollars rises by 4% a year. Write the model.", recap: "Growth factor.", ans: S`$P=250(1.04)^t$` },
  { level: 2, q: S`Sketch $y=-3\cdot2^{x}+5$, showing the asymptote and intercepts.`, recap: "Reflection and shift.", ans: S`asymptote $y=5$; $(0,2)$; x-intercept $x=\log_2\frac53\approx0.737$`,
    fig: F({ view: { xmin: -4, xmax: 3, ymin: -6, ymax: 8 }, step: { x: 1, y: 1 } }, 5.5) },
  { level: 2, q: "A laptop loses 22% of its value each year. It cost 1800 dollars. Find its value after 3 years.", recap: "Decay.", ans: S`$1800(0.78)^3\approx854.19$` },
  { level: 2, q: "Find the value of 900 dollars after 10 years at 5% compounded monthly.", recap: "n = 12.", ans: S`$900\left(1+\frac{0.05}{12}\right)^{120}\approx1482.31$` },
  { level: 2, q: S`Find the value of 900 dollars after 10 years at 5% compounded continuously.`, recap: S`$Pe^{rt}$.`, ans: S`$900e^{0.5}\approx1483.85$` },
  { level: 2, q: S`$y=a\cdot b^x$ passes through $(0,6)$ and $(1,9)$. Find $a$ and $b$.`, recap: "Two points.", ans: S`$a=6$, $b=1.5$` },
  { level: 3, space: 4, q: S`The graph of $y=a\cdot2^{x}+k$ passes through $(0,1)$ and $(2,10)$. Find $a$ and $k$ and the asymptote.`, recap: "Simultaneous.", ans: S`$a+k=1$, $4a+k=10$: $a=3$, $k=-2$; $y=-2$` },
  { level: 3, space: 4, q: "Bank A pays 4.2% compounded annually; bank B pays 4.1% compounded continuously. Which gives more after 5 years on 10 000 dollars?", recap: "Compare.", ans: S`A: $10000(1.042)^5\approx12283.97$; B: $10000e^{0.205}\approx12275.25$; A` },
  { level: 3, space: 4, q: S`A culture doubles every 3 hours from 250 cells. Write $N$ as a function of $t$ (hours) and find $N(10)$.`, recap: "Doubling model.", ans: S`$N=250\cdot2^{t/3}$; $\approx2520$` },
  { level: 3, space: 4, q: S`Explain why the graph of $y=a\cdot b^x$ ($a>0$) never meets the x-axis.`, recap: "Asymptote.", ans: S`$b^x>0$ for all $x$, so $y>0$` },
  { level: 3, space: 4, q: S`Show that $e^{x}$ grows faster than $2^{x}$ by comparing their values at $x=5$ and $x=10$, and explain using the bases.`, recap: "Compare bases.", ans: S`$e^5\approx148$ vs 32; $e^{10}\approx22026$ vs 1024; $e>2$` },
];

export const WS = {
  code: "9.2",
  title: "Exponential Functions and the Number e",
  bigideas: S`$y=a\cdot b^{x-h}+k$ has horizontal asymptote $y=k$; it grows when $b>1$ and decays when $0<b<1$ (for $a>0$). Percentage models use $A_0(1\pm r)^t$; compound interest $P\left(1+\frac rn\right)^{nt}$; as $n\to\infty$ this becomes $Pe^{rt}$, where $e=\lim\left(1+\frac1n\right)^n\approx2.71828$.`,
  goals: ["Sketch exponential graphs with asymptotes.", "Build growth and decay models.", "Use compound interest formulas.", "Use e and continuous growth."],
  curriculum: "SL 1.4, 2.9",
  vocab: [["Asymptote", S`$y=k$`], ["Growth factor", S`$1+r$`], [S`$e$`, "2.71828..."]],
  hook: "Offer the class a choice: 1000 dollars a day for 30 days, or 1 cent doubling every day for 30 days. Which is better?",
  concepts: [
    ["1. Graphs", S`${F({ view: { xmin: -3, xmax: 3, ymin: -1, ymax: 8 }, curves: [{ f: (x) => 2.5 ** x }, { f: (x) => 0.4 ** x, color: "amber" }], points: [pt(0, 1, "", "red")] }, 4.8)} $2.5^x$ and $0.4^x$ are reflections in the y-axis.`],
    ["2. Models", S`$A=A_0(1\pm r)^t$; half-life $A_0\left(\frac12\right)^{t/T}$.`],
    ["3. e", S`$\left(1+\frac rn\right)^{n}\to e^r$.`],
  ],
  tips: ["Draw the asymptote first.", "Percent to factor: 1 ± r.", "Use r/n and nt.", "e is a constant.", "Divide equations to find b."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
