// IB AA SL Worksheet 10.1 — Antiderivatives and the Indefinite Integral (teacher edition)
import { F, pt } from "./figT.mjs";

const S = String.raw;

const EXAMPLES = [
  { title: "Power rule", q: S`Find $\int(10x^4-9x^2+2)\,dx$.`,
    steps: [S`$10\cdot\frac{x^5}{5}-9\cdot\frac{x^3}{3}+2x$.`], ans: S`$2x^5-3x^3+2x+C$` },
  { title: "Roots as powers", q: S`Find $\int 6\sqrt x\,dx$.`,
    steps: [S`$6x^{1/2}\to6\cdot\frac{x^{3/2}}{3/2}$.`], ans: S`$4x^{3/2}+C$` },
  { title: "Negative powers", q: S`Find $\int\frac{3}{x^4}\,dx$.`,
    steps: [S`$3x^{-4}\to3\cdot\frac{x^{-3}}{-3}$.`], ans: S`$-\frac{1}{x^3}+C$` },
  { title: "Expand first", q: S`Find $\int x(x-4)^2\,dx$.`,
    steps: [S`$x^3-8x^2+16x$.`], ans: S`$\frac14x^4-\frac83x^3+8x^2+C$` },
  { title: "Divide first", q: S`Find $\int\frac{x^3+5x^2}{x^2}\,dx$.`,
    steps: [S`$x+5$.`], ans: S`$\frac12x^2+5x+C$` },
  { title: "The family of curves", q: S`Sketch three members of $\int 2x\,dx$.`,
    fig: F({ view: { xmin: -3, xmax: 3, ymin: -3, ymax: 9 }, curves: [{ f: (x) => x * x }, { f: (x) => x * x + 3, color: "green" }, { f: (x) => x * x - 2, color: "amber" }] }, 5.8),
    steps: [S`$x^2+C$: vertical translations.`], ans: S`$y=x^2+C$` },
  { title: "Boundary condition", q: S`$\frac{dy}{dx}=3x^2-6x$ and the curve passes through $(2,1)$. Find $y$.`,
    fig: F({ view: { xmin: -1.5, xmax: 3.5, ymin: -4, ymax: 8 }, curves: [{ f: (x) => x ** 3 - 3 * x * x + 5 }], points: [pt(2, 1, "", "red")] }, 5.8),
    steps: [S`$y=x^3-3x^2+C$; $1=8-12+C\Rightarrow C=5$.`], ans: S`$y=x^3-3x^2+5$` },
  { title: "From f″", q: S`$f''(x)=24x$, $f'(1)=10$, $f(1)=3$. Find $f(x)$.`,
    steps: [S`$f'=12x^2-2$.`, S`$f=4x^3-2x+C$; $3=4-2+C\Rightarrow C=1$.`], ans: S`$f(x)=4x^3-2x+1$` },
  { title: "Unknown coefficient", q: S`$f'(x)=kx-1$, $f(0)=2$ and $f(2)=8$. Find $k$.`,
    steps: [S`$f=\frac k2x^2-x+2$; $2k-2+2=8$.`], ans: S`$k=4$` },
];

const PROBLEMS = [
  { level: 1, q: S`Find $\int 15x^4\,dx$.`, recap: "Power rule.", ans: S`$3x^5+C$` },
  { level: 1, q: S`Find $\int(4x-9)\,dx$.`, recap: "Sum.", ans: S`$2x^2-9x+C$` },
  { level: 1, q: S`Find $\int 8\,dx$.`, recap: "Constant.", ans: S`$8x+C$` },
  { level: 2, q: S`Find $\int\left(x^{2/3}+\frac{1}{x^2}\right)dx$.`, recap: "Fractional and negative.", ans: S`$\frac35x^{5/3}-\frac1x+C$` },
  { level: 2, q: S`Find $\int(x+3)(x-1)\,dx$.`, recap: "Expand.", ans: S`$\frac13x^3+x^2-3x+C$` },
  { level: 2, q: S`Find $\int\frac{2x^4-x}{x}\,dx$.`, recap: "Divide.", ans: S`$\frac12x^4-x+C$` },
  { level: 2, q: S`$f'(x)=6x+1$ and $f(2)=20$. Find $f(x)$.`, recap: "Boundary.", ans: S`$3x^2+x+6$` },
  { level: 2, q: S`Sketch the antiderivative of $f(x)=2x-2$ that passes through $(0,-3)$.`, recap: "Find C, sketch.", ans: S`$y=x^2-2x-3$`,
    fig: F({ view: { xmin: -3, xmax: 5, ymin: -5, ymax: 8 }, step: { x: 1, y: 1 } }, 5.5) },
  { level: 3, space: 4, q: S`$f''(x)=6x-6$, $f(0)=4$ and $f(2)=0$. Find $f(x)$.`, recap: "Two constants.", ans: S`$f=x^3-3x^2+C_1x+4$; $8-12+2C_1+4=0\Rightarrow C_1=0$: $f=x^3-3x^2+4$` },
  { level: 3, space: 4, q: S`A curve has gradient $\frac{dy}{dx}=3\sqrt x$ and passes through $(4,20)$. Find its equation.`, recap: "Rational power.", ans: S`$y=2x^{3/2}+4$` },
  { level: 3, space: 4, q: S`The gradient of a curve is $x^2+bx$. It has a stationary point at $x=4$ and passes through $(0,1)$. Find $b$ and the curve.`, recap: "Two conditions.", ans: S`$b=-4$; $y=\frac13x^3-2x^2+1$` },
  { level: 3, space: 4, q: S`Find $\int\frac{(x+1)^2}{\sqrt x}\,dx$.`, recap: "Expand and divide.", ans: S`$\frac25x^{5/2}+\frac43x^{3/2}+2x^{1/2}+C$` },
  { level: 3, space: 4, q: S`Explain why $\int x^{-1}\,dx$ cannot be found with the power rule.`, recap: "n = −1.", ans: S`it would give $\frac{x^0}{0}$, division by zero` },
];

export const WS = {
  code: "10.1",
  title: "Antiderivatives and the Indefinite Integral",
  bigideas: S`Integration reverses differentiation: if $F'=f$ then $\int f\,dx=F+C$. Power rule $\int x^n\,dx=\frac{x^{n+1}}{n+1}+C$ ($n\ne-1$); integrate sums term by term and keep constant multiples. Rewrite roots and fractions as powers, and expand products first. A boundary condition (a known point) fixes $C$; $f''$ needs two conditions.`,
  goals: ["Use the power rule.", "Rewrite before integrating.", "Use boundary conditions.", "Find f from f″."],
  curriculum: "SL 5.5",
  vocab: [["Antiderivative", S`$F$ with $F'=f$`], ["Constant of integration", S`$C$`], ["Boundary condition", "a known point"]],
  hook: "A car's speedometer reading is known every second. Can you tell where the car is? What extra information do you need?",
  concepts: [
    ["1. Reverse", S`${F({ view: { xmin: -3, xmax: 3, ymin: -8, ymax: 8 }, curves: [{ f: (x) => x ** 3 - 3 * x }, { f: (x) => x ** 3 - 3 * x + 4, color: "green" }], step: { x: 1, y: 2 } }, 4.8)} Same gradient, different C.`],
    ["2. Power rule", S`Add one to the power, divide by it.`],
    ["3. Boundary", S`Substitute the point to find $C$.`],
  ],
  tips: ["Always add C.", "Rewrite √ and fractions.", "Expand products.", "n = −1 is special.", "Check by differentiating."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
