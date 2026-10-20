// MCV4U Worksheet 5.4 — Differentiation Rules for Exponential Functions (teacher edition)
import { F, gridT, pt } from "./figT.mjs";

const S = String.raw;
const E = Math.E;
const EXAMPLES = [
  { title: "A damped wave", q: S`Differentiate $y=e^{-x}\cos(3x)$.`,
    steps: [S`$-e^{-x}\cos3x+e^{-x}(-3\sin3x)$.`], ans: S`$y'=-e^{-x}(\cos3x+3\sin3x)$` },
  { title: "Logarithmic differentiation", q: S`Differentiate $y=x^{2x}$ and find $y'(1)$.`,
    steps: [S`$\ln y=2x\ln x\Rightarrow\frac{y'}{y}=2\ln x+2$.`, S`$y'=x^{2x}(2\ln x+2)$; at 1: $1\cdot2$.`], ans: S`$y'(1)=2$` },
  { title: "A minimum", q: S`Find the minimum of $y=(x-1)e^{2x}$.`,
    fig: F({ view: { xmin: -3, xmax: 1.3, ymin: -1.6, ymax: 1.5 }, curves: [{ f: (x) => (x - 1) * Math.exp(2 * x) }], points: [pt(0.5, -E / 2)], step: { x: 0.5, y: 0.5 } }),
    steps: [S`$y'=e^{2x}+2(x-1)e^{2x}=e^{2x}(2x-1)$.`, S`Zero at $\frac12$: $y=-\frac12e$.`], ans: S`minimum $\left(\frac12,-\frac e2\right)\approx(0.5,-1.359)$` },
  { title: "ln of an exponential", q: S`For $y=\ln(1+e^x)$, find $y'$ and $y'(0)$.`,
    steps: [S`$y'=\frac{e^x}{1+e^x}$; at 0: $\frac12$.`], ans: S`$\frac{e^x}{1+e^x}$; $\frac12$` },
  { title: "Never decreasing", q: S`Show that $y=\frac{e^x}{1+x^2}$ is never decreasing.`,
    fig: F({ view: { xmin: -3, xmax: 3.5, ymin: -0.3, ymax: 3.5 }, curves: [{ f: (x) => Math.exp(x) / (1 + x * x) }], points: [pt(1, E / 2)], step: { x: 0.5, y: 0.5 } }),
    steps: [S`$y'=\frac{e^x(1+x^2)-e^x\cdot2x}{(1+x^2)^2}=\frac{e^x(x-1)^2}{(1+x^2)^2}\ge0$.`], ans: S`increasing everywhere, with a flat point at $x=1$` },
  { title: "Another variable power", q: S`For $y=(x^2+1)^x$, find $y'(1)$.`,
    steps: [S`$\ln y=x\ln(x^2+1)\Rightarrow\frac{y'}{y}=\ln(x^2+1)+\frac{2x^2}{x^2+1}$.`, S`At 1: $y=2$, so $y'=2(\ln2+1)$.`], ans: S`$\approx3.386$` },
  { title: "An inflection point", q: S`Find the inflection point of $y=xe^{-x}$.`,
    fig: F({ view: { xmin: -0.5, xmax: 6, ymin: -0.3, ymax: 0.5 }, curves: [{ f: (x) => x * Math.exp(-x), a: -0.3, b: 6 }], points: [pt(1, 1 / E), pt(2, 2 / E ** 2)], step: { x: 0.5, y: 0.1 } }),
    steps: [S`$y'=(1-x)e^{-x}$, $y''=(x-2)e^{-x}$.`, S`Sign change at $x=2$: $y=\frac2{e^2}$.`], ans: S`$\left(2,\frac2{e^2}\right)\approx(2,0.271)$` },
  { title: "Combining bases", q: S`Differentiate $y=2^x\cdot3^x$.`,
    steps: [S`$2^x3^x=6^x$, so $y'=6^x\ln6$.`], ans: S`$6^x\ln6\approx1.792\cdot6^x$` },
  { title: "Exponential times log", q: S`For $y=e^{2x}\ln(x+1)$, find $y'(0)$.`,
    steps: [S`$2e^{2x}\ln(x+1)+\frac{e^{2x}}{x+1}$; at 0: $0+1$.`], ans: "1" },
];

const PROBLEMS = [
  { level: 1, q: S`Differentiate $y=xe^x$.`, recap: "Product rule.", ans: S`$(x+1)e^x$` },
  { level: 1, q: S`Differentiate $y=e^x\sin x$.`, recap: "Product rule.", ans: S`$e^x(\sin x+\cos x)$` },
  { level: 1, q: S`Differentiate $y=\ln(e^x)$.`, recap: "Simplify first.", ans: "1" },
  { level: 2, q: S`For $y=x^2e^{-x}$, find $y'(1)$.`, recap: S`$(2x-x^2)e^{-x}$.`, ans: S`$\frac1e\approx0.368$` },
  { level: 2, q: S`For $y=\frac{e^{3x}}{x}$, find $y'(1)$.`, recap: S`$\frac{e^{3x}(3x-1)}{x^2}$.`, ans: S`$2e^3\approx40.17$` },
  { level: 2, q: S`For $y=x^{3x}$, find $y'(1)$.`, recap: "Logarithmic differentiation.", ans: "3" },
  { level: 2, q: S`For $y=\frac{e^x+e^{-x}}{2}$, find $y'(\ln2)$.`, recap: S`$y'=\frac{e^x-e^{-x}}2$.`, ans: "0.75" },
  { level: 2, q: S`Find the tangent to $y=xe^x$ at $x=0$ and draw it.`, recap: "Point (0, 0), slope 1.", ans: S`$y=x$`, fig: gridT({ xmin: -4, xmax: 1.5, ymin: -1, ymax: 4 }, { x: 0.5, y: 0.5 }) },
  { level: 3, space: 5, q: S`For $y=x^{\sin x}$, find $y'\left(\frac\pi2\right)$.`, recap: "ln y = sin x ln x.", ans: S`$\frac{y'}{y}=\cos x\ln x+\frac{\sin x}{x}$; $y'=\frac\pi2\cdot\frac2\pi=1$` },
  { level: 3, space: 5, q: S`Find the inflection points of $y=x^2e^{-x}$.`, recap: S`$y''=(x^2-4x+2)e^{-x}$.`, ans: S`$x=2\pm\sqrt2\approx0.586,\ 3.414$` },
  { level: 3, space: 5, q: S`Find the maximum of $y=10xe^{-x/5}$ for $x\ge0$.`, recap: "Product rule; factor the exponential.", ans: S`at $x=5$: $\frac{50}{e}\approx18.39$` },
  { level: 3, space: 5, q: S`Find and classify the critical points of $y=e^{-x}(x^2-3)$.`, recap: S`$y'=-e^{-x}(x-3)(x+1)$.`, ans: S`min $(-1,-2e)\approx(-1,-5.44)$; max $\left(3,\frac6{e^3}\right)\approx(3,0.299)$` },
  { level: 3, space: 5, q: S`Sketch $y=e^{-x}\sin x$ for $0\le x\le2\pi$ between the curves $y=\pm e^{-x}$.`, recap: "Damped oscillation.", ans: S`a wave whose peaks shrink, touching the envelopes $y=\pm e^{-x}$`, fig: gridT({ xmin: 0, xmax: 6.5, ymin: -0.5, ymax: 1 }, { x: 0.5, y: 0.25 }) },
];

export const WS = {
  code: "5.4",
  title: "Differentiation Rules for Exponential Functions",
  bigideas: S`Combine $(e^x)'=e^x$, $(\ln x)'=\frac1x$ and $(b^x)'=b^x\ln b$ with the product, quotient and chain rules, choosing the rule for the last operation first. For functions like $x^x$ with the variable in base and exponent, use logarithmic differentiation: take $\ln$ of both sides, differentiate, and multiply by $y$. Factor out exponentials to find critical numbers.`,
  goals: ["Combine rules with exponentials and logs.", "Use logarithmic differentiation.", "Find second derivatives.", "Locate extrema and inflection points."],
  curriculum: "A3.4",
  vocab: [["Log differentiation", "ln both sides"], ["$\\frac{d}{dx}\\ln y$", "$\\frac{y'}{y}$"], ["Damped wave", "$e^{-kx}\\sin x$"]],
  hook: S`Is $x^x$ a power function or an exponential function? Try the power rule and the exponential rule at $x=2$ and compare with a difference quotient.`,
  concepts: [
    ["1. Mixed functions", S`$y=xe^{-x}$ rises to a maximum at $x=1$ and bends at $x=2$:
${F({ view: { xmin: -0.5, xmax: 6, ymin: -0.3, ymax: 0.5 }, curves: [{ f: (x) => x * Math.exp(-x), a: -0.3, b: 6 }], points: [pt(1, 1 / E)], step: { x: 0.5, y: 0.1 } })}`],
    ["2. Logarithmic differentiation", S`$\ln y=g\ln f\Rightarrow y'=y\left(g'\ln f+\frac{gf'}{f}\right)$.`],
    ["3. Factor", S`$e^{2x}(2x-1)=0\iff x=\frac12$.`],
  ],
  tips: ["xˣ needs log differentiation.", "Multiply back by y.", "Dividing by eˣ = multiplying by e to the −x.", "Factor out exponentials.", "Product rule again for second derivatives."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
