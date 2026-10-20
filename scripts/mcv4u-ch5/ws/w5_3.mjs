// MCV4U Worksheet 5.3 — Derivatives of Exponential Functions (teacher edition)
import { F, gridT, pt } from "./figT.mjs";

const S = String.raw;
const E = Math.E;
const EXAMPLES = [
  { title: "A sum of exponentials", q: S`Differentiate $y=7e^x-e^{-x}$.`,
    steps: [S`$7e^x-(-e^{-x})$.`], ans: S`$y'=7e^x+e^{-x}$` },
  { title: "A quadratic exponent", q: S`Differentiate $y=e^{3x^2-x}$.`,
    steps: [S`$g=3x^2-x$, $g'=6x-1$.`], ans: S`$y'=(6x-1)e^{3x^2-x}$` },
  { title: "Base 4", q: S`Find the slope of $y=4^x$ at $x=\frac12$.`,
    steps: [S`$y'=4^x\ln4$; at $\frac12$: $2\ln4$.`], ans: "about 2.773" },
  { title: "Extrema of x²eˣ", q: S`Find the local extrema of $y=x^2e^x$.`,
    fig: F({ view: { xmin: -5, xmax: 1, ymin: -0.3, ymax: 2 }, curves: [{ f: (x) => x * x * Math.exp(x) }], points: [pt(-2, 4 / E ** 2), pt(0, 0)], step: { x: 0.5, y: 0.25 } }),
    steps: [S`$y'=(x^2+2x)e^x=x(x+2)e^x$: signs $+,-,+$.`, S`$y(-2)=\frac4{e^2}$, $y(0)=0$.`], ans: S`local max $\left(-2,\frac4{e^2}\right)\approx(-2,0.541)$; local min $(0,0)$` },
  { title: "A quotient", q: S`Find the minimum of $y=\frac{e^x}{x}$, $x\gt0$.`,
    fig: F({ view: { xmin: 0, xmax: 3.5, ymin: 0, ymax: 10 }, curves: [{ f: (x) => Math.exp(x) / x, a: 0.15, b: 3.5 }], points: [pt(1, E)], step: { x: 0.5, y: 1 } }),
    steps: [S`$y'=\frac{xe^x-e^x}{x^2}=\frac{e^x(x-1)}{x^2}$.`, S`Zero at $x=1$; $y(1)=e$.`], ans: S`minimum $(1,e)$` },
  { title: "A tangent", q: S`Find the tangent to $y=e^{2x}$ at $x=0$.`,
    fig: F({ view: { xmin: -2, xmax: 1, ymin: -1, ymax: 5 }, curves: [{ f: (x) => Math.exp(2 * x) }, { f: (x) => 2 * x + 1, color: "green", a: -1.2, b: 0.9 }], points: [pt(0, 1)], step: { x: 0.5, y: 1 } }),
    steps: [S`Point $(0,1)$; slope $2e^0=2$.`], ans: S`$y=2x+1$` },
  { title: "A product with a decaying exponential", q: S`Find the extremum of $y=(x+1)e^{-x}$.`,
    steps: [S`$y'=e^{-x}-(x+1)e^{-x}=-xe^{-x}$.`, S`Zero at 0, $+$ then $-$: maximum $y(0)=1$.`], ans: S`maximum $(0,1)$` },
  { title: "Checking (2ˣ)′", q: S`Use the rule to find the slope of $y=2^x$ at $x=3$ and compare with $0.693\times2^3$.`,
    steps: [S`$2^3\ln2\approx5.545$; $0.693\times8\approx5.544$.`], ans: "they agree: the constant 0.693 is ln 2" },
  { title: "A root in the exponent", q: S`For $y=e^{\sqrt x}$, find $y'(4)$.`,
    steps: [S`$y'=\frac{e^{\sqrt x}}{2\sqrt x}$; at 4: $\frac{e^2}{4}$.`], ans: "about 1.847" },
];

const PROBLEMS = [
  { level: 1, q: S`Differentiate $y=e^{6x}$.`, recap: "Inner derivative 6.", ans: S`$6e^{6x}$` },
  { level: 1, q: S`Differentiate $y=3e^x$.`, recap: "Constant multiple.", ans: S`$3e^x$` },
  { level: 1, q: S`Differentiate $y=e^{-4x}$.`, recap: "Inner derivative −4.", ans: S`$-4e^{-4x}$` },
  { level: 2, q: S`For $y=e^{x^2}$, find $y'(1)$.`, recap: S`$2xe^{x^2}$.`, ans: S`$2e\approx5.437$` },
  { level: 2, q: S`For $y=5^x$, find $y'(0)$.`, recap: "ln 5.", ans: S`$\approx1.609$` },
  { level: 2, q: S`For $y=xe^{-x}$, find $y'(0)$.`, recap: "Product rule.", ans: "1" },
  { level: 2, q: S`Find the minimum value of $y=e^x+e^{-x}$.`, recap: "y′ = 0 at x = 0.", ans: "2" },
  { level: 2, q: S`Find the tangent to $y=e^x-1$ at $x=0$ and draw it.`, recap: "Point (0, 0), slope 1.", ans: S`$y=x$`, fig: gridT({ xmin: -3, xmax: 2, ymin: -2, ymax: 5 }, { x: 0.5, y: 1 }) },
  { level: 3, space: 5, q: S`For $y=\frac{e^x}{e^x+2}$, find where the slope is greatest and its value.`, recap: S`$y'=\frac{2e^x}{(e^x+2)^2}$.`, ans: S`at $x=\ln2$: slope $\frac14$` },
  { level: 3, space: 5, q: S`Find the maximum of $y=xe^{-x^2/2}$ for $x\gt0$.`, recap: S`$y'=(1-x^2)e^{-x^2/2}$.`, ans: S`at $x=1$: $e^{-1/2}\approx0.607$` },
  { level: 3, space: 5, q: S`Prove that $\frac{d}{dx}b^x=b^x\ln b$ by writing $b^x=e^{x\ln b}$.`, recap: "Chain rule with inner x ln b.", ans: S`$\frac{d}{dx}e^{x\ln b}=\ln b\cdot e^{x\ln b}=b^x\ln b$` },
  { level: 3, space: 5, q: S`Show that $y=3^{-x}$ is decreasing and find its slope at $x=0$.`, recap: "Derivative of b to the −x.", ans: S`$y'=-3^{-x}\ln3\lt0$; slope $-\ln3\approx-1.099$` },
  { level: 3, space: 5, q: S`Sketch $y=e^x-x$, showing its minimum and end behaviour.`, recap: "y′ = eˣ − 1.", ans: S`minimum $(0,1)$; rises to $\infty$ on both sides (like $-x$ on the left)`, fig: gridT({ xmin: -3, xmax: 2.5, ymin: -0.5, ymax: 6 }, { x: 0.5, y: 1 }) },
];

export const WS = {
  code: "5.3",
  title: "Derivatives of Exponential Functions",
  bigideas: S`$\frac{d}{dx}e^x=e^x$; with the chain rule, $\frac{d}{dx}e^{g(x)}=g'(x)e^{g(x)}$. For any base, $b^x=e^{x\ln b}$, so $\frac{d}{dx}b^x=b^x\ln b$. Exponentials are never zero: factor them out when solving $f'(x)=0$.`,
  goals: ["Differentiate eˣ and exponentials of functions.", "Differentiate bˣ.", "Use product and quotient rules.", "Find tangents and extrema."],
  curriculum: "A2.3, A3.4",
  vocab: [["$(e^g)'$", "$g'e^g$"], ["$(b^x)'$", "$b^x\\ln b$"], ["$e^x\\gt0$", "never zero"]],
  hook: S`The slope of $2^x$ at 0 was about 0.693 and of $3^x$ about 1.099. Compute $\ln2$ and $\ln3$. What do you notice?`,
  concepts: [
    ["1. Its own derivative", S`$y=e^x$ (violet) and $y=e^{2x}$ with its derivative $2e^{2x}$ (blue):
${F({ view: { xmin: -2, xmax: 1.5, ymin: -0.5, ymax: 8 }, curves: [{ f: Math.exp }, { f: (x) => Math.exp(2 * x), color: "blue" }, { f: (x) => 2 * Math.exp(2 * x), color: "amber" }], step: { x: 0.5, y: 1 } })}`],
    ["2. Chain rule", S`Differentiate the exponent, multiply by the unchanged exponential.`],
    ["3. Other bases", S`Convert to base $e$: $b^x=e^{x\ln b}$.`],
  ],
  tips: ["No power rule for eˣ.", "Keep the exponential unchanged.", "Include ln b for bˣ.", "Factor out exponentials.", "An exponential with a negative exponent coefficient decreases."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
