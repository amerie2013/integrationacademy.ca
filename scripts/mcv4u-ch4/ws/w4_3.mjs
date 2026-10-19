// MCV4U Worksheet 4.3 — Differentiation Rules for Sinusoidal Functions (teacher edition)
import { F, gridT, pt } from "./figT.mjs";

const S = String.raw;
const PI = Math.PI;
const EXAMPLES = [
  { title: "A multiple angle", q: S`Differentiate $y=\sin(6x)$.`,
    steps: [S`Inner $6x$, derivative 6.`], ans: S`$y'=6\cos(6x)$` },
  { title: "A phase shift", q: S`Differentiate $y=\cos\left(3x+\frac\pi4\right)$.`,
    steps: [S`$-\sin\left(3x+\frac\pi4\right)\cdot3$.`], ans: S`$y'=-3\sin\left(3x+\frac\pi4\right)$` },
  { title: "A power of cosine", q: S`Differentiate $y=\cos^3x$.`,
    steps: [S`$y=(\cos x)^3\Rightarrow3(\cos x)^2\cdot(-\sin x)$.`], ans: S`$y'=-3\cos^2x\sin x$` },
  { title: "A root inside", q: S`Differentiate $y=\sin\sqrt x$.`,
    steps: [S`$\cos\sqrt x\cdot\frac{1}{2\sqrt x}$.`], ans: S`$y'=\frac{\cos\sqrt x}{2\sqrt x}$` },
  { title: "Tangent of a square", q: S`Differentiate $y=\tan(x^2)$.`,
    steps: [S`$\sec^2(x^2)\cdot2x$.`], ans: S`$y'=2x\sec^2(x^2)$` },
  { title: "A transformed sinusoid", q: S`Find the slope of $y=5\sin(2x-1)+3$ at $x=0.5$.`,
    steps: [S`$y'=10\cos(2x-1)$; at $0.5$: $10\cos0$.`], ans: "10 (the largest possible slope, at the midline)" },
  { title: "Product and chain", q: S`Differentiate $y=x^2\sin(3x)$.`,
    steps: [S`$2x\sin(3x)+x^2\cdot3\cos(3x)$.`], ans: S`$y'=2x\sin(3x)+3x^2\cos(3x)$` },
  { title: "A function inside a function", q: S`Differentiate $y=\cos(\sin x)$ and find $y'(0)$.`,
    fig: F({ view: { xmin: -PI, xmax: PI, ymin: 0, ymax: 1.2 }, curves: [{ f: (x) => Math.cos(Math.sin(x)) }], points: [pt(0, 1)], step: { x: 0.5, y: 0.2 } }),
    steps: [S`$-\sin(\sin x)\cdot\cos x$.`, S`At 0: $-\sin0\cdot1=0$.`], ans: S`$y'=-\sin(\sin x)\cos x$; $y'(0)=0$` },
  { title: "A tangent line", q: S`Find the tangent to $y=\sin^2(2x)$ at $x=\frac\pi8$.`,
    fig: F({ view: { xmin: -0.2, xmax: 1.8, ymin: -0.3, ymax: 1.3 }, curves: [{ f: (x) => Math.sin(2 * x) ** 2 }, { f: (x) => 2 * x - PI / 4 + 0.5, color: "green", a: 0.1, b: 0.7 }], points: [pt(PI / 8, 0.5)], step: { x: 0.25, y: 0.25 } }),
    steps: [S`$y\left(\frac\pi8\right)=\sin^2\frac\pi4=\frac12$.`, S`$y'=2\sin(2x)\cos(2x)\cdot2=2\sin(4x)$; at $\frac\pi8$: $2\sin\frac\pi2=2$.`], ans: S`$y=2x-\frac\pi4+\frac12$` },
];

const PROBLEMS = [
  { level: 1, q: S`Differentiate $y=\sin(7x)$.`, recap: "Inner derivative 7.", ans: S`$7\cos(7x)$` },
  { level: 1, q: S`Differentiate $y=\cos\left(\frac x3\right)$.`, recap: "Inner derivative 1/3.", ans: S`$-\frac13\sin\left(\frac x3\right)$` },
  { level: 1, q: S`Differentiate $y=2\sin(5x)$.`, recap: "Constant comes along.", ans: S`$10\cos(5x)$` },
  { level: 2, q: S`For $f(x)=\sin^2(3x)$, find $f'\left(\frac\pi{12}\right)$.`, recap: "6 sin 3x cos 3x.", ans: "3" },
  { level: 2, q: S`What is the greatest slope of $y=\cos(2x)+\sin(2x)$?`, recap: "y′ = 2(cos 2x − sin 2x).", ans: S`$2\sqrt2\approx2.83$` },
  { level: 2, q: S`For $y=\sqrt{\cos x}$, find $y'(0)$.`, recap: "−sin x/(2√cos x).", ans: "0" },
  { level: 2, q: S`For $y=4\cos\left(\frac{\pi x}3\right)$, find $y'(1)$ (3 decimals).`, recap: "−(4π/3) sin(πx/3).", ans: S`$\approx-3.628$` },
  { level: 2, q: S`Find the tangent to $y=\sin(2x)$ at $x=\frac\pi6$ and draw it.`, recap: "Slope 2 cos(π/3) = 1.", ans: S`$y=x-\frac\pi6+\frac{\sqrt3}2$`, fig: gridT({ xmin: -0.5, xmax: 2, ymin: -1.5, ymax: 1.5 }, { x: 0.25, y: 0.5 }) },
  { level: 3, space: 5, q: S`How many horizontal tangents does $y=\sin x\cos^2x$ have in $[0,2\pi)$?`, recap: "y′ = cos x (1 − 3 sin² x).", ans: S`6: $x=\frac\pi2,\frac{3\pi}2$ and four solutions of $\sin x=\pm\frac1{\sqrt3}$` },
  { level: 3, space: 5, q: S`Find the maximum of $f(x)=\sin(2x)+2\sin x$ on $[0,2\pi]$ (3 decimals).`, recap: "f′ = 2(2cos x − 1)(cos x + 1).", ans: S`at $x=\frac\pi3$: $\frac{\sqrt3}2+\sqrt3\approx2.598$` },
  { level: 3, space: 5, q: S`Differentiate $\sin^2x+\cos^2x$ with the chain rule and explain the result.`, recap: "The sum is constant.", ans: S`$2\sin x\cos x-2\cos x\sin x=0$, consistent with $\sin^2x+\cos^2x=1$` },
  { level: 3, space: 5, q: S`For $y=\sec(3x)$, find $y'$ and $y'(0)$.`, recap: "3 sec(3x) tan(3x).", ans: S`$3\sec(3x)\tan(3x)$; $0$` },
  { level: 3, space: 5, q: S`$y=A\sin(kx)$ has period $\pi$ and greatest slope 12. Find $A$ and $k$ ($A,k\gt0$) and sketch the graph.`, recap: "Period 2π/k; greatest slope Ak.", ans: S`$k=2$, $A=6$`, fig: gridT({ xmin: 0, xmax: 3.5, ymin: -7, ymax: 7 }, { x: 0.25, y: 1 }) },
];

export const WS = {
  code: "4.3",
  title: "Differentiation Rules for Sinusoidal Functions",
  bigideas: S`The chain rule extends the two basic derivatives: $\frac{d}{dx}\sin(g(x))=\cos(g(x))\,g'(x)$ and $\frac{d}{dx}\cos(g(x))=-\sin(g(x))\,g'(x)$. Powers such as $\sin^nx=(\sin x)^n$ give $n\sin^{n-1}x\cos x$. For a transformed sinusoid, $\frac{d}{dx}[A\sin(kx+c)+d]=Ak\cos(kx+c)$: the largest slope is $|Ak|$, and $c$ and $d$ do not affect steepness.`,
  goals: ["Use the chain rule with sin and cos.", "Differentiate powers of trig functions.", "Differentiate transformed sinusoids.", "Combine with the product rule."],
  curriculum: "A3.4",
  vocab: [["$(\\sin g)'$", "$g'\\cos g$"], ["$(\\sin^n x)'$", "$n\\sin^{n-1}x\\cos x$"], ["Largest slope", "$|Ak|$"]],
  hook: S`Sketch $y=\sin x$ and $y=\sin(2x)$ on the same axes. Which is steeper at the origin, and by how much?`,
  concepts: [
    ["1. Inner speed multiplies", S`$y=\sin(2x)$ (violet) has derivative $2\cos(2x)$ (blue):
${F({ view: { xmin: -0.2, xmax: 6.6, ymin: -2.3, ymax: 2.3 }, curves: [{ f: (x) => Math.sin(2 * x), a: 0, b: 2 * PI }, { f: (x) => 2 * Math.cos(2 * x), color: "blue", a: 0, b: 2 * PI }], step: { x: 0.5, y: 0.5 } })}`],
    ["2. Notation", S`$\sin^2x=(\sin x)^2$, not $\sin(x^2)$.`],
    ["3. Sinusoids", S`$(A\sin(kx+c)+d)'=Ak\cos(kx+c)$.`],
  ],
  tips: ["Never drop the inner derivative.", "sin² x is a power of sin x.", "Keep the phase shift inside.", "The vertical shift vanishes.", "Keep the minus sign for cosine."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
