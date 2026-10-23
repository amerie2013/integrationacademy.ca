// IB AA SL Worksheet 13.2 — Derivatives of Trigonometric Functions (teacher edition)
import { F, pt } from "./figT.mjs";

const S = String.raw;
const PI = Math.PI;
const f3 = (v) => v.toFixed(3);

const EXAMPLES = [
  { title: "Basic derivatives", q: S`Differentiate $y=5\cos x+2\sin x$.`,
    steps: [S`$\cos\to-\sin$, $\sin\to\cos$.`], ans: S`$-5\sin x+2\cos x$` },
  { title: "Linear inside", q: S`Differentiate $y=\cos(4x-1)$.`,
    steps: [S`Inner derivative 4.`], ans: S`$-4\sin(4x-1)$` },
  { title: "Tangent function", q: S`Differentiate $y=\tan3x$.`,
    steps: [S`$\frac{1}{\cos^23x}\cdot3$.`], ans: S`$\frac{3}{\cos^23x}$` },
  { title: "Power of a sine", q: S`Differentiate $y=\sin^22x$.`,
    steps: [S`$2\sin2x\cdot2\cos2x$.`, S`$=2\sin4x$.`], ans: S`$2\sin4x$` },
  { title: "Product with an exponential", q: S`Differentiate $y=e^{2x}\cos x$.`,
    steps: [S`$2e^{2x}\cos x-e^{2x}\sin x$.`], ans: S`$e^{2x}(2\cos x-\sin x)$` },
  { title: "Quotient", q: S`Differentiate $y=\frac{\sin x}{x}$.`,
    steps: [S`$\frac{x\cos x-\sin x}{x^2}$.`], ans: S`$\frac{x\cos x-\sin x}{x^2}$` },
  { title: "Root of a sine", q: S`Differentiate $y=\sqrt{\sin x}$.`,
    steps: [S`$\frac{1}{2\sqrt{\sin x}}\cdot\cos x$.`], ans: S`$\frac{\cos x}{2\sqrt{\sin x}}$` },
  { title: "Tangent line", q: S`Find the tangent to $y=3\cos x$ at $x=\frac{\pi}{3}$.`,
    fig: F({ view: { xmin: 0, xmax: 2 * PI, ymin: -3.5, ymax: 4 }, curves: [{ f: (x) => 3 * Math.cos(x) }], lines: [{ m: -1.5 * Math.sqrt(3), b: 1.5 + 1.5 * Math.sqrt(3) * PI / 3, color: "amber", dash: true }], points: [pt(PI / 3, 1.5, false, "red")], step: { x: PI / 2, y: 1 } }, 5.6),
    steps: [S`$y=1.5$; $y'=-3\sin\frac{\pi}{3}=-\frac{3\sqrt3}{2}$.`], ans: S`$y-1.5=-\frac{3\sqrt3}{2}\left(x-\frac{\pi}{3}\right)$` },
  { title: "Stationary points", q: S`Find the stationary points of $y=2x-\tan x$ for $-\frac{\pi}{2}<x<\frac{\pi}{2}$.`,
    fig: F({ view: { xmin: -1.5, xmax: 1.5, ymin: -2, ymax: 2 }, curves: [{ f: (x) => 2 * x - Math.tan(x) }], points: [pt(PI / 4, PI / 2 - 1, false, "red"), pt(-PI / 4, 1 - PI / 2, false, "red")], step: { x: 0.5, y: 0.5 } }, 5.6),
    steps: [S`$y'=2-\frac{1}{\cos^2x}=0\Rightarrow\cos^2x=\frac12$.`, S`$x=\pm\frac{\pi}{4}$.`], ans: S`max $\left(\frac{\pi}{4},${f3(PI / 2 - 1)}\right)$, min $\left(-\frac{\pi}{4},${f3(1 - PI / 2)}\right)$` },
];

const PROBLEMS = [
  { level: 1, q: S`Differentiate $y=6\sin x$.`, recap: "Basic.", ans: S`$6\cos x$` },
  { level: 1, q: S`Differentiate $y=\cos\frac{x}{2}$.`, recap: "Chain.", ans: S`$-\frac12\sin\frac x2$` },
  { level: 1, q: S`Differentiate $y=\tan x+x^2$.`, recap: "Sum.", ans: S`$\frac{1}{\cos^2x}+2x$` },
  { level: 2, q: S`Differentiate $y=\sin3x\cos x$.`, recap: "Product.", ans: S`$3\cos3x\cos x-\sin3x\sin x$` },
  { level: 2, q: S`Find the gradient of $y=\cos^23x$ at $x=\frac{\pi}{12}$.`, recap: S`$y'=-3\sin6x$.`, ans: S`$-3$` },
  { level: 2, q: S`Differentiate $y=e^{\sin2x}$.`, recap: "Chain.", ans: S`$2\cos2x\,e^{\sin2x}$` },
  { level: 2, q: S`Differentiate $y=\frac{x}{\sin x}$.`, recap: "Quotient.", ans: S`$\frac{\sin x-x\cos x}{\sin^2x}$` },
  { level: 2, q: S`The graph of $y=\sin x+\frac12\sin2x$ is shown. Find its gradient at the origin.`, recap: S`$\cos x+\cos2x$.`, ans: S`$2$`,
    fig: F({ view: { xmin: -PI, xmax: PI, ymin: -1.6, ymax: 1.6 }, curves: [{ f: (x) => Math.sin(x) + 0.5 * Math.sin(2 * x) }], step: { x: PI / 2, y: 0.5 } }, 5) },
  { level: 3, space: 4, q: S`Find the x-coordinates of the stationary points of $y=\cos2x+2\cos x$ for $0\le x\le2\pi$.`, recap: S`$-2\sin x(2\cos x+1)$.`, ans: S`$0,\frac{2\pi}{3},\pi,\frac{4\pi}{3},2\pi$` },
  { level: 3, space: 4, q: S`Show that $y=\sin3x$ satisfies $y''+9y=0$.`, recap: "Differentiate twice.", ans: S`$y''=-9\sin3x$` },
  { level: 3, space: 4, q: S`Find $y''$ at $x=\frac{\pi}{2}$ for $y=x\sin x$.`, recap: S`$y''=2\cos x-x\sin x$.`, ans: S`$-\frac{\pi}{2}$` },
  { level: 3, space: 4, q: S`Find the normal to $y=\sin2x+\cos x$ at $x=\frac{\pi}{2}$.`, recap: S`$y'=2\cos2x-\sin x=-3$.`, ans: S`$y=\frac13\left(x-\frac{\pi}{2}\right)$` },
  { level: 3, space: 4, q: S`Explain why, with x in degrees, $\frac{d}{dx}\sin x^\circ=\frac{\pi}{180}\cos x^\circ$.`, recap: "Chain rule.", ans: S`$\sin x^\circ=\sin\frac{\pi x}{180}$; inner derivative $\frac{\pi}{180}$` },
];

export const WS = {
  code: "13.2",
  title: "Derivatives of Trigonometric Functions",
  bigideas: S`With x in radians, $\frac{d}{dx}\sin x=\cos x$, $\frac{d}{dx}\cos x=-\sin x$ and $\frac{d}{dx}\tan x=\frac{1}{\cos^2x}$. With a linear inside, multiply by $a$: $\frac{d}{dx}\sin(ax+b)=a\cos(ax+b)$. Powers such as $\sin^2x$ use the chain rule; products and quotients use the usual rules.`,
  goals: ["Differentiate sin, cos, tan.", "Use the chain rule with trigonometric functions.", "Combine with product and quotient rules.", "Find tangents and stationary points."],
  curriculum: "SL 5.6, 5.7",
  vocab: [["Radians", "needed for the derivative results"], ["Gradient curve", "graph of f′"], ["Second derivative", "f″"]],
  hook: "Where is a sine wave steepest — and how steep is it there?",
  concepts: [
    ["1. sin → cos", S`${F({ view: { xmin: 0, xmax: 2 * PI, ymin: -1.4, ymax: 1.4 }, curves: [{ f: Math.sin }, { f: Math.cos, color: "green" }], step: { x: PI / 2, y: 0.5 } }, 4.6)} The gradient of sin x traces cos x.`],
    ["2. Chain rule", "Multiply by the inner derivative."],
    ["3. Powers", "sinⁿx: n sinⁿ⁻¹x cos x."],
  ],
  tips: ["Radian mode.", "Minus sign on cos′.", "sin²x = (sin x)².", "Inner derivative for sin(ax).", "Simplify with identities."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
