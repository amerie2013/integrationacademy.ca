// IB AA SL Worksheet 13.1 — The Chain, Product and Quotient Rules (teacher edition)
import { F, pt } from "./figT.mjs";

const S = String.raw;
const f3 = (v) => v.toFixed(3);

const EXAMPLES = [
  { title: "Chain rule with a power", q: S`Differentiate $y=(7x+2)^3$.`,
    steps: [S`Outer $u^3\to3u^2$; inner derivative 7.`], ans: S`$21(7x+2)^2$` },
  { title: "Chain rule with a root", q: S`Differentiate $y=\sqrt{6x-5}$.`,
    steps: [S`$\frac{1}{2\sqrt{6x-5}}\cdot6$.`], ans: S`$\frac{3}{\sqrt{6x-5}}$` },
  { title: "Chain rule with e", q: S`Differentiate $y=e^{4-3x}$.`,
    steps: [S`Inner derivative $-3$.`], ans: S`$-3e^{4-3x}$` },
  { title: "Chain rule with ln", q: S`Differentiate $y=\ln(5x^2+1)$.`,
    steps: [S`$\frac{1}{5x^2+1}\cdot10x$.`], ans: S`$\frac{10x}{5x^2+1}$` },
  { title: "Product rule", q: S`Differentiate $y=x^3e^{-x}$ and find its stationary points.`,
    fig: F({ view: { xmin: -1, xmax: 8, ymin: -1, ymax: 2 }, curves: [{ f: (x) => x ** 3 * Math.exp(-x) }], points: [pt(3, 27 * Math.exp(-3), false, "red"), pt(0, 0, false, "red")], step: { x: 1, y: 0.5 } }, 5.6),
    steps: [S`$3x^2e^{-x}-x^3e^{-x}=x^2e^{-x}(3-x)$.`, S`Zero at $x=0$ and $x=3$; $y(3)=27e^{-3}$.`], ans: S`$x^2e^{-x}(3-x)$; $(0,0)$ and $(3,\ ${f3(27 * Math.exp(-3))})$` },
  { title: "Product with a log", q: S`Differentiate $y=(x+2)\ln x$.`,
    steps: [S`$u=x+2$, $v=\ln x$.`], ans: S`$\ln x+\frac{x+2}{x}$` },
  { title: "Quotient rule", q: S`Differentiate $y=\frac{2x-1}{x+4}$.`,
    steps: [S`$\frac{2(x+4)-(2x-1)}{(x+4)^2}$.`], ans: S`$\frac{9}{(x+4)^2}$` },
  { title: "Quotient and stationary points", q: S`Find the stationary points of $y=\frac{x^2}{x-1}$.`,
    fig: F({ view: { xmin: -3, xmax: 5, ymin: -8, ymax: 10 }, curves: [{ f: (x) => x * x / (x - 1) }], points: [pt(0, 0, false, "red"), pt(2, 4, false, "red")], step: { x: 1, y: 2 } }, 5.6),
    steps: [S`$y'=\frac{2x(x-1)-x^2}{(x-1)^2}=\frac{x(x-2)}{(x-1)^2}$.`, S`$x=0$ (max), $x=2$ (min).`], ans: S`$(0,0)$ and $(2,4)$` },
  { title: "Tangent with product and chain", q: S`Find the tangent to $y=x^2\sqrt{2x+1}$ at $x=4$.`,
    fig: F({ view: { xmin: -0.5, xmax: 6, ymin: -10, ymax: 100 }, curves: [{ f: (x) => x * x * Math.sqrt(2 * x + 1) }], lines: [{ m: 88 / 3, b: 48 - 352 / 3, color: "amber", dash: true }], points: [pt(4, 48, false, "red")], step: { x: 1, y: 10 } }, 5.6),
    steps: [S`$y(4)=48$.`, S`$y'=2x\sqrt{2x+1}+\frac{x^2}{\sqrt{2x+1}}$; $y'(4)=24+\frac{16}{3}=\frac{88}{3}$.`], ans: S`$y-48=\frac{88}{3}(x-4)$` },
];

const PROBLEMS = [
  { level: 1, q: S`Differentiate $y=(1-2x)^5$.`, recap: "Chain.", ans: S`$-10(1-2x)^4$` },
  { level: 1, q: S`Differentiate $y=e^{x^3}$.`, recap: "Chain.", ans: S`$3x^2e^{x^3}$` },
  { level: 1, q: S`Differentiate $y=\ln(4x-3)$.`, recap: "Chain.", ans: S`$\frac{4}{4x-3}$` },
  { level: 2, q: S`Differentiate $y=xe^{-3x}$.`, recap: "Product.", ans: S`$e^{-3x}(1-3x)$` },
  { level: 2, q: S`Differentiate $y=\frac{x^2}{x+2}$.`, recap: "Quotient.", ans: S`$\frac{x^2+4x}{(x+2)^2}$` },
  { level: 2, q: S`Differentiate $y=\sqrt x\,\ln x$.`, recap: "Product.", ans: S`$\frac{\ln x}{2\sqrt x}+\frac{1}{\sqrt x}$` },
  { level: 2, q: S`Find the gradient of $y=(x^2-3)^4$ at $x=2$.`, recap: S`$8x(x^2-3)^3$.`, ans: S`$16$` },
  { level: 2, q: S`The graph of $y=xe^{-x^2/2}$ is shown. Use the product rule to find the x-coordinates of its turning points.`, recap: S`$e^{-x^2/2}(1-x^2)$.`, ans: S`$x=\pm1$`,
    fig: F({ view: { xmin: -4, xmax: 4, ymin: -1, ymax: 1 }, curves: [{ f: (x) => x * Math.exp(-x * x / 2) }], step: { x: 1, y: 0.5 } }, 5) },
  { level: 3, space: 4, q: S`Find and classify the stationary points of $y=x^2e^{2x}$.`, recap: S`$2xe^{2x}(1+x)$.`, ans: S`min $(0,0)$; max $(-1,\ e^{-2}\approx0.135)$` },
  { level: 3, space: 4, q: S`Find the equation of the normal to $y=\frac{e^{2x}}{x}$ at $x=1$.`, recap: S`$y'=\frac{e^{2x}(2x-1)}{x^2}$.`, ans: S`$y-e^2=-\frac{1}{e^2}(x-1)$` },
  { level: 3, space: 4, q: S`For $y=xe^x$, find $y''$ and the point of inflection.`, recap: S`$y''=e^x(x+2)$.`, ans: S`$\left(-2,\ -2e^{-2}\right)$` },
  { level: 3, space: 4, q: S`Show that $\frac{d}{dx}\left(\frac{x}{\sqrt{x^2+1}}\right)=\frac{1}{(x^2+1)^{3/2}}$.`, recap: "Quotient with chain.", ans: S`$\frac{\sqrt{x^2+1}-\frac{x^2}{\sqrt{x^2+1}}}{x^2+1}=\frac{1}{(x^2+1)^{3/2}}$` },
  { level: 3, space: 4, q: S`A student writes $\frac{d}{dx}(x^2+1)^3=3(x^2+1)^2$. Explain the error and correct it.`, recap: "Inner derivative.", ans: S`missing factor $2x$: $6x(x^2+1)^2$` },
];

export const WS = {
  code: "13.1",
  title: "The Chain, Product and Quotient Rules",
  bigideas: S`Chain rule: $\frac{d}{dx}f(g(x))=f'(g(x))\,g'(x)$ — outer derivative times inner derivative. Product rule: $(uv)'=u'v+uv'$. Quotient rule: $\left(\frac uv\right)'=\frac{u'v-uv'}{v^2}$. Decide the overall structure first, then work from the outside in, and factorise before solving $f'(x)=0$.`,
  goals: ["Use the chain rule.", "Use the product rule.", "Use the quotient rule.", "Combine them for tangents and stationary points."],
  curriculum: "SL 5.6",
  vocab: [["Composite", "f(g(x))"], ["Inner function", "u = g(x)"], ["Product rule", "u′v + uv′"], ["Quotient rule", "(u′v − uv′)/v²"]],
  hook: "The power rule handles x⁵. What about (x² + 1)⁵, x⁵eˣ or x⁵/(x + 1)?",
  concepts: [
    ["1. Chain rule", S`${F({ view: { xmin: -1, xmax: 1.5, ymin: -2, ymax: 6 }, curves: [{ f: (x) => (2 * x + 1) ** 2 / 2 }], step: { x: 0.5, y: 1 } }, 4.6)} Differentiate the outside, multiply by the derivative of the inside.`],
    ["2. Product rule", "u′v + uv′ — not u′v′."],
    ["3. Quotient rule", "Top first: u′v − uv′, over v²."],
  ],
  tips: ["Name u and v.", "Keep the inner function intact.", "Order matters in the quotient rule.", "Factorise the result.", "Check by graphing."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
