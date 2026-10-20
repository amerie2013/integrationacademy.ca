// MCV4U Worksheet 5.1 — Rates of Change and the Number e (teacher edition)
import { F, gridT, pt } from "./figT.mjs";

const S = String.raw;
const E = Math.E;
const EXAMPLES = [
  { title: "Slope of 4ˣ at 0", q: S`Estimate the slope of $y=4^x$ at $x=0$ with $h=0.001$.`,
    steps: [S`$\frac{4^{0.001}-1}{0.001}\approx1.3873$.`], ans: S`about 1.387 (exactly $\ln4\approx1.3863$)` },
  { title: "A decaying exponential", q: S`Estimate the slope of $y=\left(\frac12\right)^x$ at $x=0$.`,
    steps: [S`$\frac{0.5^{0.001}-1}{0.001}\approx-0.6929$.`], ans: "about −0.693: negative, because the function decays" },
  { title: "Slope ÷ height is constant", q: S`For $y=2^x$, compare slope ÷ height at $x=1$ and $x=2$.`,
    fig: F({ view: { xmin: -1, xmax: 3, ymin: -0.5, ymax: 7 }, curves: [{ f: (x) => 2 ** x }, { f: (x) => 2 + 1.386 * (x - 1), color: "green", a: 0.2, b: 1.8 }, { f: (x) => 4 + 2.773 * (x - 2), color: "green", a: 1.4, b: 2.6 }], points: [pt(1, 2), pt(2, 4)], step: { x: 0.5, y: 1 } }),
    steps: [S`Slopes $\approx1.386$ and $2.773$; heights 2 and 4.`, S`Both ratios $\approx0.693$.`], ans: "the same ratio, 0.693, at every point" },
  { title: "Approaching e", q: S`Evaluate $\left(1+\frac1n\right)^n$ for $n=2,\ 5,\ 50$.`,
    steps: [S`$2.25$, $2.48832$, $2.69159$.`], ans: S`increasing toward $e\approx2.718$` },
  { title: "e from a sum", q: S`Evaluate $1+1+\frac12+\frac16+\frac1{24}$ and compare with $e$.`,
    steps: [S`$2+0.5+0.1667+0.0417\approx2.7083$.`], ans: "2.7083, already close to 2.7183" },
  { title: "Two tangents to eˣ", q: S`Find the tangents to $y=e^x$ at $x=0$ and $x=-1$.`,
    fig: F({ view: { xmin: -3, xmax: 1.5, ymin: -0.5, ymax: 4 }, curves: [{ f: Math.exp }, { f: (x) => x + 1, color: "green", a: -1.5, b: 1.3 }, { f: (x) => (x + 2) / E, color: "green", a: -3, b: 0.5 }], points: [pt(0, 1), pt(-1, 1 / E)], step: { x: 0.5, y: 0.5 } }),
    steps: [S`At 0: slope 1 through $(0,1)$: $y=x+1$.`, S`At $-1$: slope $e^{-1}$ through $(-1,e^{-1})$: $y=\frac1e(x+2)$.`], ans: S`$y=x+1$ and $y=\frac{x+2}{e}$` },
  { title: "eˣ versus xᵉ", q: S`Compare $e^3$ and $3^e$.`,
    steps: [S`$e^3\approx20.09$, $3^e\approx19.81$.`], ans: S`$e^3$ is slightly larger — the two are different functions` },
  { title: "Continuous compounding", q: S`1000 dollars earns 100% interest compounded $n$ times a year. What does it approach as $n\to\infty$?`,
    steps: [S`$1000\left(1+\frac1n\right)^n\to1000e$.`], ans: "about 2718.28 dollars" },
  { title: "Where the slope is 2", q: S`At what point does $y=e^x$ have slope 2?`,
    fig: F({ view: { xmin: -1.5, xmax: 2, ymin: -0.5, ymax: 6 }, curves: [{ f: Math.exp }, { f: (x) => 2 + 2 * (x - Math.log(2)), color: "green", a: -0.3, b: 1.6 }], points: [pt(Math.log(2), 2)], step: { x: 0.5, y: 1 } }),
    steps: [S`Slope $=e^x=2\Rightarrow x=\ln2\approx0.693$.`], ans: S`$(\ln2,2)\approx(0.693,2)$` },
];

const PROBLEMS = [
  { level: 1, q: S`What is the slope of $y=e^x$ at $x=1$?`, recap: "(eˣ)′ = eˣ.", ans: S`$e\approx2.718$` },
  { level: 1, q: S`True or false: on $y=e^x$, the slope always equals the height.`, recap: "Definition of e.", ans: "true" },
  { level: 1, q: S`Evaluate $\left(1+\frac1{10}\right)^{10}$.`, recap: "Approaching e.", ans: "2.594" },
  { level: 2, q: S`Estimate the slope of $y=5^x$ at $x=0$.`, recap: S`$\frac{5^h-1}{h}$ with small $h$.`, ans: S`$\approx1.609$` },
  { level: 2, q: S`Use the ratio for $2^x$ to estimate its slope at $x=4$.`, recap: "0.693 × 16.", ans: S`$\approx11.09$` },
  { level: 2, q: S`What is the slope of $y=e^x$ at $x=-2$?`, recap: S`Evaluate $e^{-2}$.`, ans: S`$\approx0.135$` },
  { level: 2, q: S`Find the tangent to $y=e^x$ at $x=2$ and draw it.`, recap: "Point (2, e²), slope e².", ans: S`$y=e^2(x-1)$`, fig: gridT({ xmin: -1, xmax: 3, ymin: -2, ymax: 12 }, { x: 0.5, y: 1 }) },
  { level: 2, q: S`For which base $b$ is the slope of $y=b^x$ at $x=0$ equal to 2?`, recap: "Slope at 0 is ln b.", ans: S`$b=e^2\approx7.389$` },
  { level: 3, space: 5, q: S`Show that the slope of $\left(\frac1b\right)^x$ at 0 is the negative of the slope of $b^x$ at 0.`, recap: S`$\left(\frac1b\right)^x=b^{-x}$.`, ans: S`$\frac{b^{-h}-1}{h}=-\frac{b^{h'}-1}{h'}$ with $h'=-h$; the limits are negatives` },
  { level: 3, space: 5, q: S`Show that the tangent to $y=e^x$ at $x=a$ crosses the x-axis at $x=a-1$.`, recap: "Set y = 0 in the tangent equation.", ans: S`$y=e^a(x-a)+e^a=0\Rightarrow x=a-1$` },
  { level: 3, space: 5, q: S`Compare 500 dollars invested for 5 years at 6% compounded continuously and compounded monthly.`, recap: S`$500e^{0.3}$ and $500(1.005)^{60}$.`, ans: "674.93 versus 674.43 dollars" },
  { level: 3, space: 5, q: S`Explain why $e^x\ge1+x$ for every $x$, using the tangent at $x=0$. Sketch both graphs.`, recap: "eˣ is concave up, so it lies above its tangents.", ans: S`$y=1+x$ is the tangent at 0; the curve bends upward away from it on both sides`, fig: gridT({ xmin: -3, xmax: 2, ymin: -2, ymax: 6 }, { x: 0.5, y: 1 }) },
  { level: 3, space: 5, q: S`A colony doubles every hour: $N(t)=50\cdot2^t$. Estimate how fast it is growing at $t=5$ h.`, recap: "Slope ≈ 0.693 × N.", ans: S`$\approx0.693\times1600\approx1109$ per hour` },
];

export const WS = {
  code: "5.1",
  title: "Rates of Change and the Number e",
  bigideas: S`For any base $b$, the slope of $y=b^x$ is proportional to its height: $\frac{d}{dx}b^x=c_b\,b^x$, where $c_b$ is the slope at $x=0$. The number $e\approx2.71828$ is the base with $c_e=1$, so $\frac{d}{dx}e^x=e^x$. Numerically, $e=\lim_{n\to\infty}\left(1+\frac1n\right)^n$, the result of continuous compounding.`,
  goals: ["Estimate slopes of exponentials.", "Explain slope ∝ height.", "Describe e two ways.", "Use (eˣ)′ = eˣ."],
  curriculum: "A2.2, A2.3",
  vocab: [["$e$", "$\\approx2.71828$"], ["$(e^x)'$", "$e^x$"], ["Slope at 0", "$c_b$"]],
  hook: S`A bank offers 100% interest. Would you rather have it paid once a year, monthly, or every second? How much does 1 dollar become?`,
  concepts: [
    ["1. Three exponentials", S`$2^x$ (blue), $e^x$ (violet), $3^x$ (amber) through $(0,1)$; only $e^x$ has slope 1 there:
${F({ view: { xmin: -2.5, xmax: 2, ymin: -0.5, ymax: 7 }, curves: [{ f: (x) => 2 ** x, color: "blue" }, { f: Math.exp }, { f: (x) => 3 ** x, color: "amber" }, { f: (x) => 1 + x, color: "green", a: -1, b: 1.5 }], points: [pt(0, 1)], step: { x: 0.5, y: 1 } })}`],
    ["2. Why proportional", S`$b^{x+h}-b^x=b^x(b^h-1)$.`],
    ["3. The number e", S`Slope 1 at 0; $\left(1+\frac1n\right)^n\to e$.`],
  ],
  tips: ["e is a constant.", "(eˣ)′ = eˣ, but (2ˣ)′ ≠ 2ˣ.", "eˣ and xᵉ differ.", "Use enough digits of e.", "Exponentials are always positive."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
