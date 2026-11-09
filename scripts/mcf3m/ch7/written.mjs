// MCF3M chapter 7 written-response questions (Part C of printed tests), each with a figure and a marking guide.
import { stripSvg, rep, eDoc, P } from "./efig.mjs";
import { lesson } from "../plan.mjs";
const S = String.raw;
const W = (code, difficulty, points, prompt, feedback, fig) => ({ topic: lesson(code).full, difficulty, points, prompt, feedback, kind: "long_answer", answer: null, choices: null, fig });
const f = (v) => v.toFixed(2);
const eg = (fn, view, step, o = {}) => eDoc([{ f: fn, color: "violet" }, ...(o.more ?? [])], { view, step, points: o.points ?? [], lines: o.lines ?? [], xlabel: o.xlabel ?? "x", ylabel: o.ylabel ?? "y" });
const below = (fn, lim) => { let t = 0; while (fn(t) >= lim) t++; return t; };
const above = (fn, lim) => { let t = 0; while (fn(t) <= lim) t++; return t; };

export const WRITTEN = [
  W("7.1", "medium", 4, S`(a) Use the diagram to explain the quotient law for $\frac{5^6}{5^2}$. (b) Evaluate $\frac{3^5\times3^4}{(3^2)^3}$. (c) Simplify $(4x^2y)^3$.`,
    S`(a) two factors cancel, leaving $5^{4}$. (b) $3^{9-6}=27$. (c) $64x^6y^3$. [1, 2, 1.]`,
    stripSvg([{ label: "5⁶", items: rep("5", 6), colors: [...rep("gray", 2), ...rep("violet", 4)] }, { label: "5²", items: rep("5", 2), color: "gray" }])),
  W("7.1", "hard", 5, S`(a) Evaluate $\frac{16^3\times8^2}{4^7}$. (b) Simplify $\frac{(2a^3b^2)^4}{8a^{10}b^5}$. (c) Find $n$ if $27^n=3^{12}$.`,
    S`(a) $\frac{2^{12}\times2^{6}}{2^{14}}=16$. (b) $\frac{16a^{12}b^8}{8a^{10}b^5}=2a^2b^3$. (c) $3n=12$, $n=4$. [2, 2, 1.]`,
    stripSvg([{ label: "16³ = 2¹²", items: ["2¹²"] }, { label: "8² = 2⁶", items: ["2⁶"], color: "green" }, { label: "4⁷ = 2¹⁴", items: ["2¹⁴"], color: "gray" }])),
  W("7.2", "medium", 4, S`(a) Use the pattern on the graph of $y=2^x$ to explain why $2^0=1$ and $2^{-2}=\frac14$. (b) Evaluate $\left(\frac34\right)^{-2}$ and $(-5)^{-2}$.`,
    S`(a) each step left halves: $2,1,\frac12,\frac14$. (b) $\frac{16}9$; $\frac1{25}$. [2, 2.]`,
    eg((x) => 2 ** x, { xmin: -3, xmax: 3.3, ymin: -0.5, ymax: 9 }, { x: 1, y: 1 }, { points: [P(-2, 0.25, "(−2, 1/4)"), P(0, 1, "(0, 1)"), P(1, 2, "(1, 2)")] })),
  W("7.2", "hard", 5, S`(a) Evaluate $\frac{3^{-2}\times9^{2}}{27^{-1}}$. (b) Simplify $\left(\frac{2x^{-1}y^{3}}{x^{2}y^{-1}}\right)^{-2}$ with positive exponents. (c) Evaluate $\left(5^{-1}-10^{-1}\right)^{-1}$.`,
    S`(a) $3^{-2+4+3}=243$. (b) inside $2x^{-3}y^4$; answer $\frac{x^6}{4y^8}$. (c) $\left(\frac1{10}\right)^{-1}=10$. [2, 2, 1.]`,
    stripSvg([{ label: "exponents of 3", items: ["−2", "+4", "+3", "=", "5"] }])),
  W("7.3", "medium", 4, S`(a) Explain why $49^{\frac12}=7$. (b) Evaluate $27^{\frac43}$ and $16^{-\frac32}$. (c) Write $\sqrt[3]{x^{2}}$ as a power.`,
    S`(a) $49^{\frac12}\cdot49^{\frac12}=49$, so it squares to $49$. (b) $81$; $\frac1{64}$. (c) $x^{\frac23}$. [1, 2, 1.]`,
    eDoc([{ f: (x) => Math.sqrt(x), a: 0, color: "violet" }], { view: { xmin: -2, xmax: 55, ymin: -0.5, ymax: 8 }, step: { x: 7, y: 1 }, points: [P(49, 7, "(49, 7)")] })),
  W("7.3", "hard", 5, S`(a) Evaluate $\left(\frac{16}{625}\right)^{-\frac34}$. (b) Solve $25^{x}=125$. (c) A cube has volume $512$ cm³; use exponents to find its surface area.`,
    S`(a) $\left(\frac{625}{16}\right)^{\frac34}=\frac{125}8$. (b) $5^{2x}=5^3$, $x=\frac32$. (c) edge $8$, area $6(64)=384$ cm². [2, 2, 1.]`,
    eg((v) => Math.cbrt(v), { xmin: -10, xmax: 560, ymin: -0.5, ymax: 9 }, { x: 64, y: 1 }, { points: [P(512, 8, "(512, 8)")], xlabel: "V", ylabel: "s" })),
  W("7.4", "medium", 4, S`(a) Graph $y=\left(\frac12\right)^x$ for $-3\le x\le3$. (b) State domain, range, $y$-intercept and asymptote. (c) Is it growth or decay?`,
    S`(a) points $(-3,8),(0,1),(3,\frac18)$. (b) all reals; $y>0$; $1$; $y=0$. (c) decay. [2, 1, 1.]`,
    eg((x) => 0.5 ** x, { xmin: -3.5, xmax: 3.5, ymin: -0.5, ymax: 9 }, { x: 1, y: 1 })),
  W("7.4", "hard", 5, S`The graph passes through $(0,\,5)$ and $(2,\,45)$. (a) Find $y=a\cdot b^x$. (b) Find $y$ at $x=3$ and $x=-1$. (c) Show with a table why it is not quadratic.`,
    S`(a) $a=5$, $b=3$: $y=5(3)^x$. (b) $135$; $\frac53$. (c) values $5,15,45,135$: ratios constant $3$, second differences $20,60$ not constant. [2, 2, 1.]`,
    eg((x) => 5 * 3 ** x, { xmin: -1.5, xmax: 3.2, ymin: -10, ymax: 150 }, { x: 0.5, y: 10 }, { points: [P(0, 5, "(0, 5)"), P(2, 45, "(2, 45)")] })),
  W("7.5", "medium", 4, S`A town of $14\,000$ grows $3.5\%$ per year. (a) Write a model. (b) Find the population after $8$ years. (c) In which year does it first pass $20\,000$?`,
    S`(a) $P=14\,000(1.035)^t$. (b) $\approx${Math.round(14000 * 1.035 ** 8)}$. (c) year $${above((t) => 14000 * 1.035 ** t, 20000)}$. [1, 1, 2.]`,
    eg((t) => 14000 * 1.035 ** t, { xmin: 0, xmax: 20, ymin: 12000, ymax: 30000 }, { x: 2, y: 2000 }, { lines: [{ m: 0, b: 20000, color: "green", dash: true }], xlabel: "t", ylabel: "P" })),
  W("7.5", "hard", 5, S`Culture A starts with $200$ cells and doubles every $4$ h. Culture B starts with $1600$ and grows $10\%$ per hour. (a) Write both models. (b) Which is larger after $24$ h? (c) After how many whole hours does A first pass B?`,
    S`(a) $A=200\cdot2^{t/4}$, $B=1600(1.1)^t$. (b) A $=12\,800$, B $\approx${Math.round(1600 * 1.1 ** 24)}$: B. (c) $t=${above((t) => 200 * 2 ** (t / 4) - 1600 * 1.1 ** t, 0)}$. [2, 1, 2.]`,
    eDoc([{ f: (t) => 200 * 2 ** (t / 4), color: "violet" }, { f: (t) => 1600 * 1.1 ** t, color: "green" }], { view: { xmin: 0, xmax: 50, ymin: 0, ymax: 200000 }, step: { x: 5, y: 20000 }, xlabel: "t (h)", ylabel: "N" })),
  W("7.6", "medium", 4, S`A $28\,000$ dollar car loses $16\%$ of its value each year. (a) Write a model. (b) Find its value after $4$ years. (c) After how many whole years is it first worth less than half?`,
    S`(a) $V=28\,000(0.84)^t$. (b) $\approx${f(28000 * 0.84 ** 4)}$ dollars. (c) $${below((t) => 0.84 ** t, 0.5)}$ years. [1, 1, 2.]`,
    eg((t) => 28000 * 0.84 ** t, { xmin: 0, xmax: 10, ymin: 0, ymax: 30000 }, { x: 1, y: 5000 }, { lines: [{ m: 0, b: 14000, color: "green", dash: true }], xlabel: "t", ylabel: "V" })),
  W("7.6", "hard", 5, S`Hot chocolate at $88$ °C cools in a $22$ °C room; the difference halves every $7$ min. (a) Write a model. (b) Find the temperature at $21$ min. (c) When is it first below $30$ °C (whole minutes)? (d) Why does it never reach $22$ °C?`,
    S`(a) $T=22+66\left(\frac12\right)^{t/7}$. (b) $22+66\times\frac18=30.25$ °C. (c) $${below((t) => 22 + 66 * 0.5 ** (t / 7), 30)}$ min. (d) the difference only halves. [1, 1, 2, 1.]`,
    eg((t) => 22 + 66 * 0.5 ** (t / 7), { xmin: 0, xmax: 42, ymin: 0, ymax: 95 }, { x: 7, y: 10 }, { lines: [{ m: 0, b: 22, color: "red", dash: true }], xlabel: "t (min)", ylabel: "T" })),
];
