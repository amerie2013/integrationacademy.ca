// IB AA SL Worksheet 10.2 — Integrating Exponentials, Reciprocals and Linear Composites (teacher edition)
import { F, pt, svgT } from "./figT.mjs";
import { areaDoc } from "../figs10.mjs";

const S = String.raw;

const EXAMPLES = [
  { title: "Exponentials", q: S`Find $\int(4e^{x}+e^{5x})\,dx$.`,
    steps: [S`$4e^x+\frac15e^{5x}$.`], ans: S`$4e^x+\frac15e^{5x}+C$` },
  { title: "Negative exponent", q: S`Find $\int 6e^{-3x}\,dx$.`,
    steps: [S`$6\cdot\frac{1}{-3}e^{-3x}$.`], ans: S`$-2e^{-3x}+C$` },
  { title: "Reciprocal", q: S`Find $\int\frac{3}{x}\,dx$.`,
    steps: [S`$3\ln|x|$.`], ans: S`$3\ln|x|+C$` },
  { title: "Linear reciprocal", q: S`Find $\int\frac{1}{5x-2}\,dx$.`,
    steps: [S`$\frac15\ln|5x-2|$.`], ans: S`$\frac15\ln|5x-2|+C$` },
  { title: "Linear power", q: S`Find $\int(2x+7)^5\,dx$.`,
    steps: [S`$\frac{(2x+7)^6}{6\cdot2}$.`], ans: S`$\frac{(2x+7)^6}{12}+C$` },
  { title: "Area under 1/x", q: S`Explain why the shaded area under $y=\frac1x$ from 1 to 4 equals $\ln4$.`,
    fig: svgT(areaDoc({ view: { xmin: 0, xmax: 5, ymin: -0.3, ymax: 2.5 }, step: { x: 1, y: 0.5 }, curves: [{ f: (x) => 1 / x, a: 0.4, b: 5 }] }, [{ f: (x) => 1 / x, a: 1, b: 4 }]), 5.8),
    steps: [S`$\int_1^4\frac1x\,dx=\ln4-\ln1$.`], ans: S`$\ln4\approx1.386$` },
  { title: "By inspection", q: S`Find $\int 2x(x^2+1)^3\,dx$.`,
    steps: [S`The inner derivative $2x$ is present.`], ans: S`$\frac14(x^2+1)^4+C$` },
  { title: "Adjusting a constant", q: S`Find $\int x^2e^{x^3}\,dx$.`,
    steps: [S`$\frac{d}{dx}e^{x^3}=3x^2e^{x^3}$, so divide by 3.`], ans: S`$\frac13e^{x^3}+C$` },
  { title: "Boundary condition", q: S`$f'(x)=\frac{2}{x+1}$ for $x>-1$ and $f(0)=3$. Find $f(x)$.`,
    fig: F({ view: { xmin: -1, xmax: 6, ymin: -2, ymax: 8 }, curves: [{ f: (x) => 2 * Math.log(x + 1) + 3, a: -0.95, b: 6 }], vlines: [{ x: -1, color: "red", dash: true }], points: [pt(0, 3, "", "red")] }, 5.8),
    steps: [S`$f=2\ln(x+1)+C$; $C=3$.`], ans: S`$f(x)=2\ln(x+1)+3$` },
];

const PROBLEMS = [
  { level: 1, q: S`Find $\int 3e^{x}\,dx$.`, recap: S`$e^x$.`, ans: S`$3e^x+C$` },
  { level: 1, q: S`Find $\int e^{6x}\,dx$.`, recap: "Divide by 6.", ans: S`$\frac16e^{6x}+C$` },
  { level: 1, q: S`Find $\int\frac{4}{x}\,dx$.`, recap: S`$\ln|x|$.`, ans: S`$4\ln|x|+C$` },
  { level: 2, q: S`Find $\int\frac{6}{2x-3}\,dx$.`, recap: "Divide by 2.", ans: S`$3\ln|2x-3|+C$` },
  { level: 2, q: S`Find $\int(1-4x)^3\,dx$.`, recap: "Divide by −4.", ans: S`$-\frac{(1-4x)^4}{16}+C$` },
  { level: 2, q: S`Find $\int\frac{1}{(x+2)^2}\,dx$.`, recap: "Power −2.", ans: S`$-\frac{1}{x+2}+C$` },
  { level: 2, q: S`Find $\int(e^{x}-e^{-x})\,dx$.`, recap: "Two exponentials.", ans: S`$e^x+e^{-x}+C$` },
  { level: 2, q: S`$f'(x)=e^{2x}$ and $f(0)=2$. Find $f(x)$.`, recap: "Boundary.", ans: S`$\frac12e^{2x}+\frac32$` },
  { level: 3, space: 4, q: S`Find $\int\frac{3x^2}{x^3-1}\,dx$ for $x>1$.`, recap: "Inspection.", ans: S`$\ln(x^3-1)+C$` },
  { level: 3, space: 4, q: S`Find $\int 6x\,e^{x^2}\,dx$.`, recap: "Adjust the constant.", ans: S`$3e^{x^2}+C$` },
  { level: 3, space: 4, q: S`Find $\int\frac{x+4}{x}\,dx$ for $x>0$, and the antiderivative through $(1,5)$.`, recap: "Split.", ans: S`$x+4\ln x+C$; $C=4$` },
  { level: 3, space: 4, q: S`Find $\int\sqrt{3x-2}\,dx$.`, recap: "Linear inside.", ans: S`$\frac29(3x-2)^{3/2}+C$`,
    fig: F({ view: { xmin: 0, xmax: 6, ymin: -1, ymax: 5 }, step: { x: 1, y: 1 } }, 5) },
  { level: 3, space: 4, q: S`Show that $\int\frac{1}{3x}\,dx=\frac13\ln|x|+C$ and $\frac13\ln|3x|+C$ are both correct.`, recap: "Constants absorb.", ans: S`$\frac13\ln|3x|=\frac13\ln3+\frac13\ln|x|$` },
];

export const WS = {
  code: "10.2",
  title: "Integrating Exponentials, Reciprocals and Linear Composites",
  bigideas: S`$\int e^x\,dx=e^x+C$ and $\int\frac1x\,dx=\ln|x|+C$. For a linear inside $ax+b$: integrate as usual and divide by $a$: $\int e^{ax+b}dx=\frac1ae^{ax+b}+C$, $\int\frac{dx}{ax+b}=\frac1a\ln|ax+b|+C$, $\int(ax+b)^ndx=\frac{(ax+b)^{n+1}}{a(n+1)}+C$. If $g'(x)$ is a factor, $\int g'(x)f(g(x))\,dx=F(g(x))+C$.`,
  goals: ["Integrate eˣ and 1/x.", "Handle linear composites.", "Integrate by inspection.", "Use boundary conditions."],
  curriculum: "SL 5.10",
  vocab: [[S`$\ln|x|$`, S`antiderivative of $\frac1x$`], ["Reverse chain rule", "divide by a"], ["Inspection", "spot g′(x)"]],
  hook: "The power rule integrates x to the power −2 easily. What goes wrong for the power −1, and what function fills the gap?",
  concepts: [
    ["1. Exponentials and reciprocals", S`${svgT(areaDoc({ view: { xmin: 0, xmax: 4, ymin: -0.3, ymax: 3 }, step: { x: 1, y: 0.5 }, curves: [{ f: (x) => 1 / x, a: 0.33, b: 4 }] }, [{ f: (x) => 1 / x, a: 1, b: Math.E }]), 4.8)} Area 1 to $e$ is 1.`],
    ["2. Linear inside", "Divide by a."],
    ["3. Inspection", S`Look for $g'(x)$.`],
  ],
  tips: ["Use |x| inside ln.", "Divide, don't multiply, by a.", "Check by differentiating.", "Spot the inner derivative.", "e⁰ = 1, ln 1 = 0."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
