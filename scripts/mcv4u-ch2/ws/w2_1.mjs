// MCV4U Worksheet 2.1 — Derivative of a Polynomial Function (teacher edition)
import { F, gridT, pt } from "./figT.mjs";

const S = String.raw;
const EXAMPLES = [
  { title: "Term by term", q: S`Differentiate $f(x)=2x^6-5x^3+x-9$.`,
    steps: [S`Power rule on each term: $12x^5-15x^2+1$; the constant gives 0.`], ans: S`$f'(x)=12x^5-15x^2+1$` },
  { title: "Negative exponents", q: S`Differentiate $y=\frac4{x^3}-\frac1x$.`,
    steps: [S`Rewrite: $y=4x^{-3}-x^{-1}$.`, S`$y'=-12x^{-4}+x^{-2}$.`], ans: S`$y'=-\frac{12}{x^4}+\frac1{x^2}$` },
  { title: "A cube root", q: S`Differentiate $y=6\sqrt[3]{x}$.`,
    steps: [S`$y=6x^{1/3}\Rightarrow y'=6\cdot\frac13x^{-2/3}$.`], ans: S`$y'=\frac{2}{x^{2/3}}$` },
  { title: "Expand first", q: S`Differentiate $y=(x^2-3)^2$ by expanding.`,
    steps: [S`$y=x^4-6x^2+9$.`, S`$y'=4x^3-12x$.`], ans: S`$y'=4x^3-12x$` },
  { title: "Divide first", q: S`Differentiate $y=\frac{2x^3+x^2-5}{x^2}$.`,
    steps: [S`Split: $y=2x+1-5x^{-2}$.`, S`$y'=2+10x^{-3}$.`], ans: S`$y'=2+\frac{10}{x^3}$` },
  { title: "Evaluate a slope", q: S`Find the slope of $f(x)=x^4-2x^2$ at $x=-2$.`,
    steps: [S`$f'(x)=4x^3-4x$.`, S`$f'(-2)=-32+8$.`], ans: "−24" },
  { title: "A tangent line", q: S`Find the tangent to $y=x^3-4x$ at $x=1$.`,
    fig: F({ view: { xmin: -3, xmax: 3, ymin: -6, ymax: 6 }, curves: [{ f: (x) => x ** 3 - 4 * x }, { f: (x) => -x - 2, color: "green" }], points: [pt(1, -3)], step: { x: 1, y: 1 } }),
    steps: [S`$y(1)=-3$; $y'=3x^2-4\Rightarrow y'(1)=-1$.`, S`$y+3=-(x-1)$.`], ans: S`$y=-x-2$` },
  { title: "Horizontal tangents", q: S`Find the points where $y=x^3-3x^2-9x+5$ has a horizontal tangent.`,
    fig: F({ view: { xmin: -3, xmax: 5, ymin: -24, ymax: 14 }, curves: [{ f: (x) => x ** 3 - 3 * x * x - 9 * x + 5 }], points: [pt(-1, 10), pt(3, -22)], step: { x: 1, y: 4 } }),
    steps: [S`$y'=3x^2-6x-9=3(x-3)(x+1)$.`, S`$x=-1$: $y=10$; $x=3$: $y=-22$.`], ans: "(−1, 10) and (3, −22)" },
  { title: "A normal line", q: S`The normal is perpendicular to the tangent. Find the normal to $y=\sqrt x$ at $x=4$.`,
    fig: F({ view: { xmin: 0, xmax: 6, ymin: -1, ymax: 4 }, curves: [{ f: (x) => Math.sqrt(x), a: 0, b: 6 }, { f: (x) => 0.25 * x + 1, color: "amber" }, { f: (x) => -4 * x + 18, color: "green" }], points: [pt(4, 2)], step: { x: 1, y: 1 } }),
    steps: [S`Tangent slope $\frac1{2\sqrt4}=\frac14$, so the normal slope is $-4$.`, S`$y-2=-4(x-4)$.`], ans: S`$y=-4x+18$` },
];

const PROBLEMS = [
  { level: 1, q: S`Differentiate $y=9x^4$.`, recap: "Power rule.", ans: S`$36x^3$` },
  { level: 1, q: S`Differentiate $y=x^2-7x+3$.`, recap: "Term by term.", ans: S`$2x-7$` },
  { level: 1, q: S`Differentiate $f(x)=x^{-5}$.`, recap: "Negative power.", ans: S`$-5x^{-6}$` },
  { level: 2, q: S`For $f(x)=3x^4-2x^3+x$, find $f'(1)$.`, recap: "Differentiate, then substitute.", ans: "7" },
  { level: 2, q: S`Differentiate $y=5\sqrt x-\frac2x$.`, recap: "Rewrite as powers.", ans: S`$\frac{5}{2\sqrt x}+\frac2{x^2}$` },
  { level: 2, q: S`Differentiate $y=(3x+2)(x-4)$ by expanding first.`, recap: "Expand.", ans: S`$6x-10$` },
  { level: 2, q: S`Find the tangent to $y=2x^2-x+1$ at $x=-1$ and draw it.`, recap: "Point and slope.", ans: S`$y=-5x-1$`, fig: gridT({ xmin: -3, xmax: 2, ymin: -2, ymax: 10 }, { x: 1, y: 1 }) },
  { level: 2, q: S`Find the points on $y=x^3-6x$ where the tangent has slope 6.`, recap: "Solve y′ = 6.", ans: "(2, −4) and (−2, 4)" },
  { level: 3, space: 5, q: S`Find $a$, $b$ and $c$ so that $y=ax^2+bx+c$ passes through $(0,3)$, has slope 2 at $x=0$, and slope $-6$ at $x=2$.`, recap: "Three conditions, three unknowns.", ans: S`$y=-2x^2+2x+3$` },
  { level: 3, space: 5, q: S`The tangent to $y=x^3$ at $x=1$ meets the curve again. Find the second point and sketch both graphs.`, recap: "Solve curve = tangent; x = 1 is a double root.", ans: S`tangent $y=3x-2$; $(x-1)^2(x+2)=0$; point $(-2,-8)$`, fig: gridT({ xmin: -3, xmax: 2, ymin: -9, ymax: 3 }, { x: 1, y: 1 }) },
  { level: 3, space: 5, q: S`Explain why no tangent to $y=x^3+2x$ has slope 1. What is the smallest possible slope?`, recap: "Look at the sign of y′ − 1.", ans: S`$y'=3x^2+2\ge2$; smallest slope 2 (at $x=0$)` },
  { level: 3, space: 5, q: S`Find the equations of the lines through the origin that are tangent to $y=x^2+4$.`, recap: "Tangent at a general point a must pass through (0, 0).", ans: S`$a=\pm2$: $y=4x$ and $y=-4x$` },
  { level: 3, space: 5, q: S`The area of a circle is $A=\pi r^2$. Find $\frac{dA}{dr}$ when $r=5$ cm, give its units, and explain why it equals the circumference.`, recap: "A thin ring of width Δr has area ≈ circumference × Δr.", ans: S`$10\pi\approx31.42$ cm² per cm; $2\pi r$ is the circumference` },
];

export const WS = {
  code: "2.1",
  title: "Derivative of a Polynomial Function",
  bigideas: S`The derivative rules replace the limit definition. Constant rule: $\frac{d}{dx}c=0$. Power rule: $\frac{d}{dx}x^n=nx^{n-1}$ for every real $n$. Constant multiple and sum rules: differentiate term by term and keep the coefficients. Roots and reciprocals must be rewritten as powers first; products and quotients of simple terms can be expanded or divided first. Use $f'(a)$ for tangent slopes; the normal has slope $-\frac1{f'(a)}$.`,
  goals: ["Apply the constant, power, multiple and sum rules.", "Rewrite roots and reciprocals as powers.", "Find tangent and normal lines.", "Find where a tangent has a given slope."],
  curriculum: "A2.2, A2.3, A2.4",
  vocab: [["Power rule", "$\\frac{d}{dx}x^n=nx^{n-1}$"], ["Leibniz notation", "$\\frac{dy}{dx}$"], ["Normal line", "perpendicular to the tangent"]],
  hook: S`From first principles, $(x^2)'=2x$, $(x^3)'=3x^2$ and $(x^4)'=4x^3$. Predict $(x^{10})'$ and $(x^{-1})'$ before the lesson.`,
  concepts: [
    ["1. The power rule", S`Bring the exponent down, then subtract 1. The graph of $x^3$ and its derivative $3x^2$:
${F({ view: { xmin: -2, xmax: 2, ymin: -4, ymax: 6 }, curves: [{ f: (x) => x ** 3 }, { f: (x) => 3 * x * x, color: "blue" }], step: { x: 1, y: 1 } })}`],
    ["2. Rewrite first", S`$\sqrt x=x^{1/2}$, $\frac1{x^2}=x^{-2}$, $\frac{x^3+1}{x}=x^2+x^{-1}$.`],
    ["3. Tangent and normal", S`Tangent: $y-f(a)=f'(a)(x-a)$. Normal: slope $-\frac1{f'(a)}$.`],
  ],
  tips: ["Constants differentiate to 0.", "Rewrite roots and reciprocals before differentiating.", "(uv)′ is not u′v′: expand or wait for 2.2.", "Negative powers: exponent goes down, e.g. −2 → −3.", "The tangent needs a point as well as a slope."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
