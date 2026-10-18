// MCR3U chapter 4 written-response (long_answer) questions for printed chapter tests (Part C), each with a figure.
import { planeDoc, P } from "./bank/fig.mjs";

const T = {
  1: "4.1 Exponent Laws and Integer Exponents", 2: "4.2 Rational Exponents", 3: "4.3 Simplifying Expressions with Exponents",
  4: "4.4 Exponential Functions and Their Properties", 5: "4.5 Transformations of Exponential Functions", 6: "4.6 Exponential Models: Growth and Decay",
};
const W = (t, difficulty, points, prompt, feedback, fig) => ({ topic: T[t], difficulty, points, prompt, feedback, kind: "long_answer", answer: null, choices: null, fig });
const S = String.raw;
const pow = (b, pts, view = { xmin: -4, xmax: 4, ymin: -1, ymax: 10 }) => planeDoc({ view, curves: [{ f: (x) => b ** x, color: "violet" }], points: pts, step: { x: 1, y: 1 } });

export const WRITTEN = [
  W(1, "medium", 4, S`The graph shows $y=2^x$. (a) Use the pattern of the marked points to explain why $2^0=1$ and $2^{-2}=\frac14$. (b) Evaluate $\left(\tfrac23\right)^{-2}-3^{-1}$. (c) Simplify $(5x^{-3}y^2)^{-2}$ with positive exponents.`,
    S`(a) Moving left one unit divides by 2: $2\to1\to\tfrac12\to\tfrac14$. (b) $\tfrac94-\tfrac13=\tfrac{23}{12}$. (c) $\frac{x^6}{25y^4}$. [2, 1, 1.]`,
    pow(2, [P(-2, 0.25), P(-1, 0.5), P(0, 1), P(1, 2), P(2, 4)])),
  W(1, "hard", 4, S`(a) Simplify $\dfrac{(3a^{-2}b)^{-3}}{(9a^2b^{-1})^{-1}}$. (b) Evaluate $\left(3^{-1}+6^{-1}\right)^{-2}$. (c) Solve $2^{x-3}=\frac1{64}$ and show the solution on the graph of $y=2^{x-3}$.`,
    S`(a) $\frac{a^6b^{-3}}{27}\cdot9a^2b^{-1}=\frac{a^8}{3b^4}$. (b) $\left(\tfrac12\right)^{-2}=4$. (c) $x-3=-6$: $x=-3$. [2, 1, 1.]`,
    planeDoc({ view: { xmin: -5, xmax: 5, ymin: -0.5, ymax: 4 }, curves: [{ f: (x) => 2 ** (x - 3), color: "violet" }], points: [P(-3, 1 / 64, "(−3, 1/64)"), P(3, 1)], step: { x: 1, y: 0.5 } })),
  W(2, "medium", 4, S`The graph shows $y=27^x$. (a) Explain why the point at $x=\tfrac13$ has $y=3$. (b) Evaluate $27^{2/3}$, $27^{-1/3}$ and $\left(\tfrac{8}{27}\right)^{2/3}$. (c) Write $\sqrt[4]{x^3}$ in exponent form.`,
    S`(a) $27^{1/3}=\sqrt[3]{27}=3$. (b) $9$, $\tfrac13$, $\tfrac49$. (c) $x^{3/4}$. [1, 2, 1.]`,
    pow(27, [P(1 / 3, 3, "(⅓, 3)"), P(2 / 3, 9, "(⅔, 9)"), P(0, 1)], { xmin: -1, xmax: 1, ymin: -1, ymax: 12 })),
  W(2, "hard", 4, S`(a) Evaluate $16^{3/4}-32^{-2/5}\cdot8^{2/3}$. (b) Solve $x^{4/3}=81$ for $x>0$. (c) Explain why $(-8)^{2/3}$ is real but $(-8)^{3/2}$ is not.`,
    S`(a) $8-\tfrac14\cdot4=7$. (b) $x=81^{3/4}=27$. (c) $(\sqrt[3]{-8})^2=4$; $(-8)^{3/2}$ needs $\sqrt{-8}$, not real. [1, 2, 1.]`,
    planeDoc({ view: { xmin: 0, xmax: 35, ymin: 0, ymax: 100 }, curves: [{ f: (x) => x ** (4 / 3), a: 0, color: "violet" }], lines: [{ m: 0, b: 81, color: "amber", dash: true }], points: [P(27, 81)], step: { x: 5, y: 10 } })),
  W(3, "medium", 4, S`(a) Simplify $\left(81x^8y^{-4}\right)^{1/4}$. (b) Simplify $\dfrac{x^{2/3}\cdot x^{1/2}}{x^{1/6}}$. (c) The graph shows $y=4^x$ and $y=2^{x+3}$. Solve $4^x=2^{x+3}$ algebraically and check with the graph.`,
    S`(a) $\frac{3x^2}{y}$. (b) $x^{4/6+3/6-1/6}=x$. (c) $2^{2x}=2^{x+3}\Rightarrow x=3$; both equal 64. [1, 1, 2.]`,
    planeDoc({ view: { xmin: -1, xmax: 4, ymin: -2, ymax: 80 }, curves: [{ f: (x) => 4 ** x, color: "violet" }, { f: (x) => 2 ** (x + 3), color: "amber" }], points: [P(3, 64)], step: { x: 0.5, y: 10 } })),
  W(3, "hard", 4, S`(a) Write $\dfrac{9^{x+2}}{27^x}$ as a single power of 3. (b) Solve $9^{x+2}=27^x$. (c) Expand and simplify $\left(x^{1/2}+2x^{-1/2}\right)^2$.`,
    S`(a) $3^{2x+4-3x}=3^{4-x}$. (b) $4-x=0$: $x=4$. (c) $x+4+\frac4x$. [1, 1, 2.]`,
    planeDoc({ view: { xmin: 0, xmax: 6, ymin: 0, ymax: 1e6 / 1000 }, curves: [{ f: (x) => 9 ** (x + 2) / 1000, color: "violet" }, { f: (x) => 27 ** x / 1000, color: "amber" }], step: { x: 1, y: 100 }, ylabel: "y (thousands)" })),
  W(4, "medium", 4, S`The table shows $x=0,1,2,3$ and $y=3,6,12,24$; it is plotted. (a) Show that the relation is exponential and write its equation. (b) State its domain, range, y-intercept and asymptote. (c) Compare its growth with $y=3x+3$.`,
    S`(a) ratio 2: $y=3(2)^x$. (b) $\mathbb R$; $y>0$; 3; $y=0$. (c) both start at 3; the line adds 3 each step while the exponential doubles, so it is soon much larger. [2, 1, 1.]`,
    planeDoc({ view: { xmin: -2, xmax: 5, ymin: -1, ymax: 30 }, points: [P(0, 3), P(1, 6), P(2, 12), P(3, 24)], lines: [{ m: 3, b: 3, color: "green" }], step: { x: 1, y: 3 } })),
  W(4, "hard", 4, S`An exponential function $y=ab^x$ passes through $(1,10)$ and $(3,2.5)$. (a) Find $a$ and $b$. (b) Is it growth or decay? (c) For which whole number $x$ does $y$ first drop below 0.5?`,
    S`(a) $b^2=\tfrac14\Rightarrow b=\tfrac12$, $a=20$. (b) decay. (c) $20(\tfrac12)^x<0.5\Rightarrow2^x>40$: $x=6$. [2, 1, 1.]`,
    planeDoc({ view: { xmin: -1, xmax: 7, ymin: -1, ymax: 22 }, curves: [{ f: (x) => 20 * 0.5 ** x, color: "violet" }], points: [P(1, 10), P(3, 2.5)], step: { x: 1, y: 2 } })),
  W(5, "medium", 4, S`Graph $y=3(2)^{x-1}-4$ on the grid. (a) Describe the transformations of $y=2^x$. (b) Map the key points $(-1,\tfrac12)$, $(0,1)$, $(1,2)$. (c) State the asymptote, domain, range and y-intercept.`,
    S`(a) stretch by 3, 1 right, 4 down. (b) $(0,-2.5)$, $(1,-1)$, $(2,2)$. (c) $y=-4$; $\mathbb R$; $y>-4$; $-2.5$. [1, 2, 1.]`,
    planeDoc({ view: { xmin: -4, xmax: 5, ymin: -6, ymax: 10 } })),
  W(5, "hard", 4, S`An exponential function $y=ab^x+c$ has asymptote $y=5$ and passes through $(0,2)$ and $(1,-1)$ (graph shown). (a) Find $a$, $b$ and $c$. (b) State the range. (c) Find the y-value at $x=2$ and describe the end behaviour.`,
    S`(a) $c=5$, $a=-3$, $-3b+5=-1\Rightarrow b=2$. (b) $y<5$. (c) $-12+5=-7$; it falls without bound as $x$ increases and approaches 5 as $x$ decreases. [2, 1, 1.]`,
    planeDoc({ view: { xmin: -5, xmax: 3, ymin: -10, ymax: 7 }, curves: [{ f: (x) => -3 * 2 ** x + 5, color: "violet" }], lines: [{ m: 0, b: 5, color: "green", dash: true }], points: [P(0, 2), P(1, -1)], step: { x: 1, y: 1 } })),
  W(6, "medium", 4, S`A 32 000-dollar car loses 16% of its value each year. (a) Write a model. (b) Find its value after 4 years. (c) Use the graph or guess-and-check to find when it is worth half its price.`,
    S`(a) $V=32\,000(0.84)^t$. (b) $\approx15\,932$ dollars. (c) $0.84^3\approx0.593$, $0.84^4\approx0.498$: during the 4th year (about 4 years). [1, 1, 2.]`,
    planeDoc({ view: { xmin: 0, xmax: 10, ymin: 0, ymax: 34000 }, curves: [{ f: (t) => 32000 * 0.84 ** t, a: 0, color: "violet" }], lines: [{ m: 0, b: 16000, color: "amber", dash: true }], step: { x: 1, y: 4000 }, xlabel: "t (years)", ylabel: "V" })),
  W(6, "hard", 5, S`A pie at 180 °C cools in a 20 °C kitchen. Its excess temperature halves every 15 minutes. (a) Write a model $T(t)$. (b) Find $T(45)$. (c) State a sensible domain and range and explain them. (d) To the nearest 5 minutes, when is the pie at 40 °C?`,
    S`(a) $T=160\left(\tfrac12\right)^{t/15}+20$. (b) $160\cdot\tfrac18+20=40$ °C. (c) $t\ge0$; $20<T\le180$ — it cannot cool below the room. (d) 45 min (from b). [1, 1, 2, 1.]`,
    planeDoc({ view: { xmin: 0, xmax: 90, ymin: 0, ymax: 190 }, curves: [{ f: (t) => 160 * 0.5 ** (t / 15) + 20, a: 0, color: "violet" }], lines: [{ m: 0, b: 20, color: "green", dash: true }], step: { x: 10, y: 20 }, xlabel: "t (min)", ylabel: "T (°C)" })),
  W(6, "hard", 4, S`Two investments: A is 3000 dollars at 5% compounded annually; B is 4000 dollars at 2.5% compounded annually. (a) Write both models. (b) After how many full years is A worth more than B? (c) Explain why A must eventually overtake B.`,
    S`(a) $A=3000(1.05)^n$, $B=4000(1.025)^n$. (b) $n=12$: $5388$ vs $5379$ ($n=11$: $5131$ vs $5248$). (c) A's growth factor is larger, so the ratio $A/B$ grows by $\tfrac{1.05}{1.025}$ every year. [1, 2, 1.]`,
    planeDoc({ view: { xmin: 0, xmax: 20, ymin: 2500, ymax: 8500 }, curves: [{ f: (n) => 3000 * 1.05 ** n, a: 0, color: "blue" }, { f: (n) => 4000 * 1.025 ** n, a: 0, color: "red" }], step: { x: 2, y: 1000 }, xlabel: "years", ylabel: "dollars" })),
];
