// IB AA SL Worksheet 13.5 — Integration by Substitution (teacher edition)
import { F } from "./figT.mjs";

const S = String.raw;
const PI = Math.PI;

const EXAMPLES = [
  { title: "Power of an inner function", q: S`Find $\int4x^3(x^4-2)^3dx$.`,
    steps: [S`$u=x^4-2$, $du=4x^3dx$: $\int u^3du$.`], ans: S`$\frac14(x^4-2)^4+C$` },
  { title: "Root", q: S`Find $\int x^2\sqrt{x^3+1}\,dx$.`,
    steps: [S`$u=x^3+1$, $x^2dx=\frac13du$: $\frac13\int u^{1/2}du$.`], ans: S`$\frac29(x^3+1)^{3/2}+C$` },
  { title: "Exponential", q: S`Find $\int2xe^{x^2-1}dx$.`,
    steps: [S`$u=x^2-1$, $du=2x\,dx$.`], ans: S`$e^{x^2-1}+C$` },
  { title: "Log pattern", q: S`Find $\int\frac{2x+3}{x^2+3x+5}dx$.`,
    steps: [S`Numerator is the derivative of the denominator.`], ans: S`$\ln(x^2+3x+5)+C$` },
  { title: "Trigonometric", q: S`Find $\int\sin x\cos^5x\,dx$.`,
    steps: [S`$u=\cos x$, $du=-\sin x\,dx$: $-\int u^5du$.`], ans: S`$-\frac16\cos^6x+C$` },
  { title: "Logarithm inside", q: S`Find $\int\frac{(\ln x)^3}{x}dx$.`,
    steps: [S`$u=\ln x$, $du=\frac1xdx$.`], ans: S`$\frac14(\ln x)^4+C$` },
  { title: "Definite with new limits", q: S`Evaluate $\int_0^2\frac{x}{(x^2+1)^2}dx$.`,
    fig: F({ view: { xmin: -0.2, xmax: 3, ymin: -0.05, ymax: 0.4 }, curves: [{ f: (x) => x / (x * x + 1) ** 2 }], step: { x: 0.5, y: 0.1 } }, 5.6),
    steps: [S`$u=x^2+1$ from 1 to 5: $\frac12\int_1^5u^{-2}du=\frac12\left[-u^{-1}\right]_1^5$.`], ans: S`$\frac12\left(1-\frac15\right)=0.4$` },
  { title: "Trigonometric definite", q: S`Evaluate $\int_0^{\pi/4}\sin x\cos x\,dx$.`,
    fig: F({ view: { xmin: 0, xmax: PI / 2, ymin: -0.05, ymax: 0.6 }, curves: [{ f: (x) => Math.sin(x) * Math.cos(x) }], step: { x: PI / 8, y: 0.1 } }, 5.6),
    steps: [S`$u=\sin x$ from 0 to $\frac{\sqrt2}{2}$: $\left[\frac{u^2}{2}\right]$.`], ans: S`$\frac14$` },
  { title: "x left over", q: S`Evaluate $\int_1^5\frac{x}{\sqrt{2x-1}}dx$.`,
    fig: F({ view: { xmin: 0.4, xmax: 5.5, ymin: 0, ymax: 2.2 }, curves: [{ f: (x) => x / Math.sqrt(2 * x - 1) }], step: { x: 1, y: 0.5 } }, 5.6),
    steps: [S`$u=2x-1$, $x=\frac{u+1}{2}$, $dx=\frac12du$; limits 1 to 9.`, S`$\frac14\int_1^9(u^{1/2}+u^{-1/2})du=\frac14\left[\frac23u^{3/2}+2u^{1/2}\right]_1^9=\frac14\left(24-\frac83\right)$.`], ans: S`$\frac{16}{3}\approx5.333$` },
];

const PROBLEMS = [
  { level: 1, q: S`Find $\int5x^4(x^5+3)^2dx$.`, recap: S`$u=x^5+3$.`, ans: S`$\frac13(x^5+3)^3+C$` },
  { level: 1, q: S`Find $\int\frac{2x}{x^2+7}dx$.`, recap: "Log pattern.", ans: S`$\ln(x^2+7)+C$` },
  { level: 1, q: S`Find $\int3\sin^2x\cos x\,dx$.`, recap: S`$u=\sin x$.`, ans: S`$\sin^3x+C$` },
  { level: 2, q: S`Evaluate $\int_0^1x^3e^{x^4}dx$.`, recap: S`$u=x^4$.`, ans: S`$\frac14(e-1)\approx0.430$` },
  { level: 2, q: S`Evaluate $\int_0^3\frac{x}{\sqrt{x^2+16}}dx$.`, recap: S`$\left[\sqrt{x^2+16}\right]$.`, ans: S`$1$` },
  { level: 2, q: S`Find $\int\frac{e^{\tan x}}{\cos^2x}dx$.`, recap: S`$u=\tan x$.`, ans: S`$e^{\tan x}+C$` },
  { level: 2, q: S`Evaluate $\int_e^{e^2}\frac{1}{x\ln x}dx$.`, recap: S`$u=\ln x$ from 1 to 2.`, ans: S`$\ln2\approx0.693$` },
  { level: 2, q: S`Find the area under $y=xe^{-x^2}$ from 0 to 2 (graph shown).`, recap: S`$-\frac12e^{-x^2}$.`, ans: S`$\frac12(1-e^{-4})\approx0.491$`,
    fig: F({ view: { xmin: -0.2, xmax: 3, ymin: -0.05, ymax: 0.5 }, curves: [{ f: (x) => x * Math.exp(-x * x) }], step: { x: 0.5, y: 0.1 } }, 5) },
  { level: 3, space: 4, q: S`Evaluate $\int_0^1x(1-x)^5dx$ using $u=1-x$.`, recap: S`$\int_0^1(1-u)u^5du$.`, ans: S`$\frac16-\frac17=\frac{1}{42}$` },
  { level: 3, space: 4, q: S`Evaluate $\int_0^{\pi/2}\sin^3x\,dx$ by writing $\sin^3x=\sin x(1-\cos^2x)$.`, recap: S`$u=\cos x$.`, ans: S`$\frac23$` },
  { level: 3, space: 4, q: S`Find $k>0$ such that $\int_0^k\frac{2x}{x^2+1}dx=\ln10$.`, recap: S`$\ln(k^2+1)=\ln10$.`, ans: S`$k=3$` },
  { level: 3, space: 4, q: S`Evaluate $\int_0^{\sqrt3}x^3\sqrt{x^2+1}\,dx$ using $u=x^2+1$.`, recap: S`$x^3dx=\frac12(u-1)du$.`, ans: S`$\left[\frac15u^{5/2}-\frac13u^{3/2}\right]_1^4=\frac{58}{15}\approx3.867$` },
  { level: 3, space: 4, q: S`Explain why $\int e^{x^2}dx$ cannot be found by substitution, but $\int xe^{x^2}dx$ can.`, recap: "Is g′ present?", ans: S`the factor $2x=g'(x)$ is missing in the first` },
];

export const WS = {
  code: "13.5",
  title: "Integration by Substitution",
  bigideas: S`Substitution reverses the chain rule: if the integrand is $f(g(x))\,g'(x)$, let $u=g(x)$, $du=g'(x)\,dx$, and integrate $f(u)$. Constant factors can be adjusted; a missing x cannot. If the numerator is the derivative of the denominator, the answer is $\ln|g(x)|$. For definite integrals, change the limits to u-values.`,
  goals: ["Recognise f(g(x))g′(x).", "Substitute and integrate.", "Use the log pattern.", "Change limits."],
  curriculum: "SL 5.10, 5.11",
  vocab: [["u", "the inner function"], ["du", "g′(x) dx"], ["New limits", "u at the old limits"]],
  hook: "Every chain-rule derivative is an integral waiting to be undone. How do you spot one?",
  concepts: [
    ["1. Spot g′", S`${F({ view: { xmin: -0.2, xmax: 1.5, ymin: -0.5, ymax: 4 }, curves: [{ f: (x) => 2 * x * Math.exp(x * x - 1) }], step: { x: 0.5, y: 1 } }, 4.6)} $2xe^{x^2-1}$: the inner derivative $2x$ is a factor.`],
    ["2. Log pattern", "g′/g → ln|g|."],
    ["3. Limits", "Change them to u."],
  ],
  tips: ["Choose u = inside function.", "Replace dx too.", "Change limits.", "Adjust constants only.", "Check by differentiating."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
