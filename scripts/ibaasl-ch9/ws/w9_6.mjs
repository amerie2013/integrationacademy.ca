// IB AA SL Worksheet 9.6 — Derivatives of Exponential and Logarithmic Functions (teacher edition)
import { F, pt } from "./figT.mjs";

const S = String.raw;

const EXAMPLES = [
  { title: "Basic derivatives", q: S`Differentiate $y=4e^x+7\ln x-x^3$.`,
    steps: [S`$4e^x+\frac7x-3x^2$.`], ans: S`$\frac{dy}{dx}=4e^x+\frac7x-3x^2$` },
  { title: "Exponential with a constant", q: S`Differentiate $y=e^{-3x}$ and $y=5e^{x/2}$.`,
    steps: [S`$-3e^{-3x}$.`, S`$\frac52e^{x/2}$.`], ans: S`$-3e^{-3x}$; $\frac52e^{x/2}$` },
  { title: "Chain rule with ln", q: S`Differentiate $y=\ln(x^3+2x)$.`,
    steps: [S`$\frac{g'}{g}$ with $g=x^3+2x$.`], ans: S`$\dfrac{3x^2+2}{x^3+2x}$` },
  { title: "Base a", q: S`Differentiate $y=10^x$.`,
    steps: [S`$10^x\ln10$.`], ans: S`$10^x\ln10$` },
  { title: "Tangent", q: S`Find the tangent to $y=3e^{x}$ at $x=0$.`,
    fig: F({ view: { xmin: -3, xmax: 2, ymin: -3, ymax: 10 }, curves: [{ f: (x) => 3 * Math.exp(x) }], lines: [{ m: 3, b: 3, color: "red", dash: true }], points: [pt(0, 3)] }, 6),
    steps: [S`Gradient $3$, point $(0,3)$.`], ans: S`$y=3x+3$` },
  { title: "Normal", q: S`Find the normal to $y=\ln(2x)$ at $x=\frac12$.`,
    steps: [S`Point $(\frac12,0)$; gradient $\frac1x=2$; normal gradient $-\frac12$.`], ans: S`$y=-\frac12x+\frac14$` },
  { title: "Stationary point", q: S`Find and classify the stationary point of $y=2x-e^{x}$.`,
    fig: F({ view: { xmin: -3, xmax: 2.5, ymin: -6, ymax: 2 }, curves: [{ f: (x) => 2 * x - Math.exp(x) }], points: [pt(Math.log(2), 2 * Math.log(2) - 2, "", "red")] }, 6),
    steps: [S`$2-e^x=0\Rightarrow x=\ln2$.`, S`$y''=-e^x<0$: maximum; $y=2\ln2-2$.`], ans: S`max $(\ln2,\ 2\ln2-2)$` },
  { title: "Product rule", q: S`Differentiate $y=x^3e^{x}$.`,
    steps: [S`$3x^2e^x+x^3e^x$.`], ans: S`$x^2e^x(3+x)$` },
  { title: "Rate of change", q: S`A sample decays as $M=120e^{-0.02t}$ grams. Find the rate of change when $t=25$.`,
    steps: [S`$\frac{dM}{dt}=-2.4e^{-0.02t}$; at $t=25$: $-2.4e^{-0.5}$.`], ans: S`$\approx-1.46$ g per unit time` },
];

const PROBLEMS = [
  { level: 1, q: S`Differentiate $y=6e^x-2$.`, recap: S`$e^x$.`, ans: S`$6e^x$` },
  { level: 1, q: S`Differentiate $y=3\ln x+x^2$.`, recap: S`$\frac1x$.`, ans: S`$\frac3x+2x$` },
  { level: 1, q: S`Differentiate $y=e^{6x}$.`, recap: "Chain.", ans: S`$6e^{6x}$` },
  { level: 2, q: S`Differentiate $y=\ln(7x-2)$.`, recap: S`$\frac{g'}{g}$.`, ans: S`$\frac{7}{7x-2}$` },
  { level: 2, q: S`Differentiate $y=e^{x^2+1}$.`, recap: "Chain.", ans: S`$2xe^{x^2+1}$` },
  { level: 2, q: S`Find the gradient of $y=2^x$ at $x=3$ (3 d.p.).`, recap: S`$a^x\ln a$.`, ans: S`$8\ln2\approx5.545$` },
  { level: 2, q: S`Find the tangent to $y=\ln x$ at $x=e$.`, recap: "Point and gradient.", ans: S`$y=\frac{x}{e}$` },
  { level: 2, q: S`Find the x-coordinate of the stationary point of $y=e^{x}-4x$.`, recap: "Set y′ = 0.", ans: S`$x=\ln4$`,
    fig: F({ view: { xmin: -2, xmax: 3, ymin: -3, ymax: 8 }, step: { x: 1, y: 1 } }, 5.5) },
  { level: 3, space: 4, q: S`Find and classify the stationary point of $y=xe^{-2x}$.`, recap: "Product rule.", ans: S`$(1-2x)e^{-2x}=0$: max at $\left(\frac12,\frac1{2e}\right)$` },
  { level: 3, space: 4, q: S`Find the minimum of $f(x)=x^2-2\ln x$, $x>0$.`, recap: "f′ = 2x − 2/x.", ans: S`at $x=1$: $f(1)=1$` },
  { level: 3, space: 4, q: S`The normal to $y=e^{x}$ at $x=0$ meets the x-axis at A. Find A.`, recap: "Normal gradient −1.", ans: S`$y=-x+1$: A $(1,0)$` },
  { level: 3, space: 4, q: S`$P=800e^{0.04t}$. Find when the population is growing at 50 per year.`, recap: "Solve dP/dt = 50.", ans: S`$32e^{0.04t}=50\Rightarrow t=\frac{\ln(50/32)}{0.04}\approx11.16$` },
  { level: 3, space: 4, q: S`Show that $y=e^{3x}$ satisfies $\frac{d^2y}{dx^2}-9y=0$.`, recap: "Second derivative.", ans: S`$y''=9e^{3x}=9y$` },
];

export const WS = {
  code: "9.6",
  title: "Derivatives of Exponential and Logarithmic Functions",
  bigideas: S`$\frac{d}{dx}e^x=e^x$ and $\frac{d}{dx}\ln x=\frac1x$. Chain rule: $\frac{d}{dx}e^{g(x)}=g'(x)e^{g(x)}$, $\frac{d}{dx}\ln g(x)=\frac{g'(x)}{g(x)}$. Also $\frac{d}{dx}a^x=a^x\ln a$ and the product rule $(uv)'=u'v+uv'$. Use these for tangents, normals, stationary points and rates: for $A=A_0e^{kt}$, $\frac{dA}{dt}=kA$.`,
  goals: ["Differentiate exponentials and logs.", "Use the chain and product rules.", "Find tangents and normals.", "Find stationary points and rates."],
  curriculum: "SL 5.4, 5.6, 5.7",
  vocab: [["Chain rule", S`$(e^g)'=g'e^g$`], ["Product rule", S`$(uv)'=u'v+uv'$`], ["Rate of change", S`$\frac{dA}{dt}$`]],
  hook: "Draw tangents to y = eˣ at several points and measure their gradients. Compare each gradient with the y-value. What do you notice?",
  concepts: [
    ["1. The exponential", S`${F({ view: { xmin: -3, xmax: 2.5, ymin: -1, ymax: 8 }, curves: [{ f: Math.exp }], lines: [{ m: Math.E, b: 0, color: "red", dash: true }], points: [pt(1, Math.E, "", "red")] }, 4.8)} At $x=1$ the gradient is $e$ — the height.`],
    ["2. Chain rule", "Multiply by the derivative of the inside."],
    ["3. Applications", "Tangent, normal, stationary point, rate."],
  ],
  tips: [S`$e^{kx}\to ke^{kx}$.`, S`$\ln(kx)\to\frac1x$.`, S`$a^x\to a^x\ln a$.`, S`Normal gradient $=-\frac{1}{f'}$.`, S`Use the product rule for $xe^x$.`],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
