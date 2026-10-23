// IB AA SL Worksheet 13.4 — Integrating Trigonometric and Exponential Functions (teacher edition)
import { F, pt } from "./figT.mjs";

const S = String.raw;
const PI = Math.PI;

const EXAMPLES = [
  { title: "Basic integral", q: S`Find $\int(5\sin x+4\cos x)\,dx$.`,
    steps: [S`$\int\sin=-\cos$, $\int\cos=\sin$.`], ans: S`$-5\cos x+4\sin x+C$` },
  { title: "Linear inside", q: S`Find $\int\cos(3x-2)\,dx$.`,
    steps: [S`Divide by 3.`], ans: S`$\frac13\sin(3x-2)+C$` },
  { title: "Tangent integral", q: S`Find $\int\frac{6}{\cos^22x}dx$.`,
    steps: [S`$6\cdot\frac12\tan2x$.`], ans: S`$3\tan2x+C$` },
  { title: "Exponential", q: S`Find $\int e^{-4x}dx$.`,
    steps: [S`Divide by −4.`], ans: S`$-\frac14e^{-4x}+C$` },
  { title: "Definite integral", q: S`Evaluate $\int_0^{\pi/2}\sin2x\,dx$.`,
    fig: F({ view: { xmin: 0, xmax: PI, ymin: -1.3, ymax: 1.3 }, curves: [{ f: (x) => Math.sin(2 * x) }], points: [pt(PI / 2, 0, false, "red")], step: { x: PI / 4, y: 0.5 } }, 5.6),
    steps: [S`$\left[-\frac12\cos2x\right]_0^{\pi/2}=\frac12+\frac12$.`], ans: S`$1$` },
  { title: "Difference", q: S`Evaluate $\int_0^{\pi/3}(\cos x-\sin x)\,dx$.`,
    steps: [S`$[\sin x+\cos x]_0^{\pi/3}=\frac{\sqrt3}{2}+\frac12-1$.`], ans: S`$\frac{\sqrt3-1}{2}\approx0.366$` },
  { title: "Total area", q: S`Find the total area between $y=\cos x$ and the x-axis for $0\le x\le\pi$.`,
    fig: F({ view: { xmin: 0, xmax: PI, ymin: -1.3, ymax: 1.3 }, curves: [{ f: Math.cos }], points: [pt(PI / 2, 0, false, "red")], step: { x: PI / 4, y: 0.5 } }, 5.6),
    steps: [S`Split at $\frac{\pi}{2}$: $\int_0^{\pi/2}\cos x=1$, $\int_{\pi/2}^{\pi}\cos x=-1$.`, "Add absolute values."], ans: S`$2$ (the signed integral is 0)` },
  { title: "Boundary condition", q: S`$f'(x)=\sin3x$ and $f(0)=1$. Find $f(x)$.`,
    steps: [S`$f=-\frac13\cos3x+C$; $-\frac13+C=1$.`], ans: S`$f(x)=-\frac13\cos3x+\frac43$` },
  { title: "Area between curves", q: S`Find the area between $y=\cos x$ and $y=\cos2x$ for $0\le x\le\frac{2\pi}{3}$.`,
    fig: F({ view: { xmin: 0, xmax: PI, ymin: -1.3, ymax: 1.3 }, curves: [{ f: Math.cos }, { f: (x) => Math.cos(2 * x), color: "amber" }], points: [pt((2 * PI) / 3, -0.5, false, "red")], step: { x: PI / 6, y: 0.5 } }, 5.6),
    steps: [S`They meet where $2\cos^2x-\cos x-1=0$: $x=0$, $\frac{2\pi}{3}$.`, S`$\int_0^{2\pi/3}(\cos x-\cos2x)dx=\left[\sin x-\frac12\sin2x\right]_0^{2\pi/3}=\frac{\sqrt3}{2}+\frac{\sqrt3}{4}$.`], ans: S`$\frac{3\sqrt3}{4}\approx1.299$` },
];

const PROBLEMS = [
  { level: 1, q: S`Find $\int7\cos x\,dx$.`, recap: "Basic.", ans: S`$7\sin x+C$` },
  { level: 1, q: S`Find $\int\sin5x\,dx$.`, recap: "Divide by 5.", ans: S`$-\frac15\cos5x+C$` },
  { level: 1, q: S`Evaluate $\int_0^{\pi/2}4\cos x\,dx$.`, recap: "[4 sin x].", ans: S`$4$` },
  { level: 2, q: S`Evaluate $\int_0^{\pi/4}\sin4x\,dx$.`, recap: S`$\left[-\frac14\cos4x\right]$.`, ans: S`$\frac12$` },
  { level: 2, q: S`Find $\int\left(e^{x/2}-\sin x\right)dx$.`, recap: "Term by term.", ans: S`$2e^{x/2}+\cos x+C$` },
  { level: 2, q: S`Evaluate $\int_{\pi/6}^{\pi/2}\cos x\,dx$.`, recap: "[sin x].", ans: S`$\frac12$` },
  { level: 2, q: S`Find the area under $y=3\sin2x$ for $0\le x\le\frac{\pi}{2}$ (graph shown).`, recap: S`$\left[-\frac32\cos2x\right]$.`, ans: S`$3$`,
    fig: F({ view: { xmin: 0, xmax: PI / 2, ymin: -0.5, ymax: 3.5 }, curves: [{ f: (x) => 3 * Math.sin(2 * x) }], step: { x: PI / 8, y: 0.5 } }, 5) },
  { level: 2, q: S`Evaluate $\int_0^{\pi/12}\frac{1}{\cos^23x}dx$.`, recap: S`$\frac13\tan3x$.`, ans: S`$\frac13$` },
  { level: 3, space: 4, q: S`Find k with $0<k<\frac{\pi}{4}$ such that $\int_0^k\cos2x\,dx=0.25$.`, recap: S`$\frac12\sin2k=0.25$.`, ans: S`$k=\frac{\pi}{12}$` },
  { level: 3, space: 4, q: S`Find the total area between $y=\sin2x$ and the x-axis for $0\le x\le\pi$.`, recap: "Split at π/2.", ans: S`$2$` },
  { level: 3, space: 4, q: S`Find the area between $y=\cos x$ and $y=\sin x$ for $0\le x\le\frac{\pi}{4}$.`, recap: S`$[\sin x+\cos x]$.`, ans: S`$\sqrt2-1\approx0.414$` },
  { level: 3, space: 4, q: S`Use $\cos^2x=\frac{1+\cos2x}{2}$ to evaluate $\int_0^{\pi}\cos^2x\,dx$.`, recap: "Identity first.", ans: S`$\frac{\pi}{2}$` },
  { level: 3, space: 4, q: S`$f''(x)=-\cos x$, $f'(0)=1$, $f(0)=0$. Find $f(\pi)$.`, recap: "Integrate twice.", ans: S`$f(x)=\cos x+x-1$; $f(\pi)=\pi-2\approx1.142$` },
];

export const WS = {
  code: "13.4",
  title: "Integrating Trigonometric and Exponential Functions",
  bigideas: S`$\int\cos x\,dx=\sin x+C$, $\int\sin x\,dx=-\cos x+C$, $\int\frac{1}{\cos^2x}dx=\tan x+C$, $\int e^{x}dx=e^x+C$. With a linear inside $ax+b$, divide by $a$. Definite integrals give signed areas; split at x-intercepts for total area. A boundary condition fixes the constant.`,
  goals: ["Integrate sin, cos, 1/cos², exponentials.", "Handle linear insides.", "Evaluate definite integrals.", "Find areas under and between curves."],
  curriculum: "SL 5.10, 5.11",
  vocab: [["Antiderivative", "a function whose derivative is f"], ["Signed area", "below the axis counts negative"], ["Boundary condition", "known point that fixes C"]],
  hook: "The area under one arch of y = sin x is a whole number. Which one?",
  concepts: [
    ["1. Reverse the derivatives", S`${F({ view: { xmin: 0, xmax: PI, ymin: -0.3, ymax: 1.3 }, curves: [{ f: Math.sin }], step: { x: PI / 4, y: 0.5 } }, 4.6)} $\int_0^\pi\sin x\,dx=2$.`],
    ["2. Divide by a", "Linear inside ax + b."],
    ["3. Total area", "Split at intercepts."],
  ],
  tips: ["∫ sin = −cos.", "Radian limits.", "Divide, not multiply, by a.", "Split for total area.", "Differentiate to check."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
