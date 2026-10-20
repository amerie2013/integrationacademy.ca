// MCV4U Worksheet 5.2 — The Natural Logarithm and Its Derivative (teacher edition)
import { F, gridT, pt } from "./figT.mjs";

const S = String.raw;
const E = Math.E;
const EXAMPLES = [
  { title: "Solving an exponential equation", q: S`Solve $3e^{0.5x}=12$.`,
    steps: [S`$e^{0.5x}=4\Rightarrow0.5x=\ln4$.`], ans: S`$x=2\ln4\approx2.773$` },
  { title: "Log laws first", q: S`Differentiate $y=\ln\dfrac{x^3(x+1)}{\sqrt x}$.`,
    steps: [S`$y=3\ln x+\ln(x+1)-\frac12\ln x=\frac52\ln x+\ln(x+1)$.`], ans: S`$y'=\frac{5}{2x}+\frac{1}{x+1}$` },
  { title: "A quadratic inside", q: S`For $y=\ln(x^2-3x+5)$, find $y'(1)$.`,
    steps: [S`$y'=\frac{2x-3}{x^2-3x+5}$; at 1: $\frac{-1}{3}$.`], ans: S`$-\frac13$` },
  { title: "Negative x", q: S`Find the slope of $y=\ln|x|$ at $x=-2$.`,
    fig: F({ view: { xmin: -5, xmax: 5, ymin: -3, ymax: 2.5 }, curves: [{ f: (x) => Math.log(Math.abs(x)), a: -5, b: -0.05 }, { f: (x) => Math.log(Math.abs(x)), a: 0.05, b: 5 }, { f: (x) => Math.log(2) - 0.5 * (x + 2), color: "green", a: -4, b: -0.5 }], points: [pt(-2, Math.log(2))], step: { x: 1, y: 1 } }),
    steps: [S`$\frac{d}{dx}\ln|x|=\frac1x$ for $x\ne0$.`], ans: S`$-\frac12$` },
  { title: "A tangent", q: S`Find the tangent to $y=\ln(2x)$ at $x=\frac12$.`,
    fig: F({ view: { xmin: -0.2, xmax: 3, ymin: -2.5, ymax: 2.5 }, curves: [{ f: (x) => Math.log(2 * x), a: 0.05, b: 3 }, { f: (x) => 2 * x - 1, color: "green", a: 0, b: 1.6 }], points: [pt(0.5, 0)], step: { x: 0.5, y: 0.5 } }),
    steps: [S`Point $\left(\frac12,0\right)$; slope $\frac1x=2$.`], ans: S`$y=2x-1$` },
  { title: "A power of ln", q: S`For $y=(\ln x)^2$, find $y'(e)$.`,
    steps: [S`$y'=2\ln x\cdot\frac1x$; at $e$: $\frac2e$.`], ans: S`$\frac2e\approx0.736$` },
  { title: "Base 5", q: S`Find the slope of $y=\log_5x$ at $x=5$.`,
    steps: [S`$y'=\frac1{x\ln5}$; at 5: $\frac1{5\ln5}$.`], ans: "about 0.1243" },
  { title: "A minimum", q: S`Find the minimum of $y=x-\ln x$.`,
    fig: F({ view: { xmin: -0.2, xmax: 5, ymin: -0.5, ymax: 4 }, curves: [{ f: (x) => x - Math.log(x), a: 0.05, b: 5 }], points: [pt(1, 1)], step: { x: 0.5, y: 0.5 } }),
    steps: [S`$y'=1-\frac1x=0\Rightarrow x=1$; $y(1)=1$.`], ans: S`minimum $(1,1)$` },
  { title: "ln of a trig function", q: S`For $y=\ln(\cos x)$, find $y'\left(\frac\pi3\right)$.`,
    steps: [S`$y'=\frac{-\sin x}{\cos x}=-\tan x$; at $\frac\pi3$: $-\sqrt3$.`], ans: S`$-\sqrt3\approx-1.732$` },
];

const PROBLEMS = [
  { level: 1, q: S`Differentiate $y=\ln(7x)$.`, recap: "ln 7 + ln x.", ans: S`$\frac1x$` },
  { level: 1, q: S`Evaluate $\ln e^5$.`, recap: "Inverse functions.", ans: "5" },
  { level: 1, q: S`What is the slope of $y=\ln x$ at $x=10$?`, recap: "1/x.", ans: "0.1" },
  { level: 2, q: S`For $y=\ln(x^3)$, find $y'(2)$.`, recap: "3 ln x.", ans: "1.5" },
  { level: 2, q: S`For $y=\ln(2x+1)$, find $y'(1)$.`, recap: "2/(2x + 1).", ans: S`$\frac23$` },
  { level: 2, q: S`For $y=x\ln x$, find $y'(e)$.`, recap: "ln x + 1.", ans: "2" },
  { level: 2, q: S`Solve $e^{2x}=5$.`, recap: "Take ln.", ans: S`$\frac{\ln5}2\approx0.805$` },
  { level: 2, q: S`Find the tangent to $y=\ln x$ at $x=1$ and draw it.`, recap: "Point (1, 0), slope 1.", ans: S`$y=x-1$`, fig: gridT({ xmin: -0.5, xmax: 4, ymin: -3, ymax: 2.5 }, { x: 0.5, y: 0.5 }) },
  { level: 3, space: 5, q: S`For $y=\ln\dfrac{x^2+1}{x+1}$, find $y'(1)$.`, recap: "Split with log laws.", ans: S`$\frac{2x}{x^2+1}-\frac1{x+1}$ at 1: $\frac12$` },
  { level: 3, space: 5, q: S`Find the maximum of $y=\ln x-\frac x2$.`, recap: "1/x − ½ = 0.", ans: S`at $x=2$: $\ln2-1\approx-0.307$` },
  { level: 3, space: 5, q: S`Show that every function $y=\ln(kx)$, $k\gt0$, has the same derivative, and explain this using their graphs.`, recap: "ln(kx) = ln k + ln x.", ans: S`$y'=\frac1x$; the graphs are vertical shifts of $\ln x$` },
  { level: 3, space: 5, q: S`Find the minimum of $y=x^2-8\ln x$ and sketch the graph.`, recap: "2x − 8/x = 0.", ans: S`at $x=2$: $4-8\ln2\approx-1.545$`, fig: gridT({ xmin: 0, xmax: 4.5, ymin: -2.5, ymax: 6 }, { x: 0.5, y: 1 }) },
  { level: 3, space: 5, q: S`Show that the slope of $y=\log_bx$ at $x=1$ is $\frac1{\ln b}$. For which base is that slope 1?`, recap: "Change of base.", ans: S`$b=e$` },
];

export const WS = {
  code: "5.2",
  title: "The Natural Logarithm and Its Derivative",
  bigideas: S`$\ln x$ is the logarithm base $e$: $y=\ln x\iff e^y=x$. Its graph is the reflection of $y=e^x$ in $y=x$, so its slope is the reciprocal of the matching slope of $e^x$: $\frac{d}{dx}\ln x=\frac1x$, and $\frac{d}{dx}\ln|x|=\frac1x$. With the chain rule, $\frac{d}{dx}\ln g=\frac{g'}{g}$; for other bases, $\frac{d}{dx}\log_bx=\frac1{x\ln b}$. Use log laws to simplify before differentiating.`,
  goals: ["Use ln and its laws.", "Differentiate ln x and ln(g(x)).", "Differentiate other logarithms.", "Find tangents and extrema."],
  curriculum: "A2.3, A3.4",
  vocab: [["$\\ln x$", "$\\log_e x$"], ["$(\\ln x)'$", "$\\frac1x$"], ["$(\\ln g)'$", "$\\frac{g'}g$"]],
  hook: S`The point $(2,e^2)$ is on $y=e^x$ with slope $e^2$. Which point is on $y=\ln x$, and what do you expect its slope to be?`,
  concepts: [
    ["1. Reflection", S`$y=\ln x$ (violet) and $y=e^x$ (blue) are mirror images in $y=x$:
${F({ view: { xmin: -3, xmax: 6, ymin: -3, ymax: 6 }, curves: [{ f: Math.log, a: 0.03, b: 6 }, { f: Math.exp, color: "blue" }, { f: (x) => x, color: "gray" }], points: [pt(E, 1), pt(1, E)], step: { x: 1, y: 1 } })}`],
    ["2. Log laws", S`$\ln ab=\ln a+\ln b$, $\ln\frac ab=\ln a-\ln b$, $\ln a^n=n\ln a$.`],
    ["3. Chain rule", S`$(\ln g)'=\frac{g'}{g}$.`],
  ],
  tips: ["ln(a + b) does not split.", "ln 5 is a constant.", "Don't forget g′ in g′/g.", "Domain: x > 0 for ln x.", "Change the base for other logarithms."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
