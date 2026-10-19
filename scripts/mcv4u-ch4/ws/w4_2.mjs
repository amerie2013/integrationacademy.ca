// MCV4U Worksheet 4.2 — Derivatives of the Sine and Cosine Functions (teacher edition)
import { F, gridT, pt } from "./figT.mjs";

const S = String.raw;
const PI = Math.PI;
const EXAMPLES = [
  { title: "A sum", q: S`Differentiate $y=4\sin x+3\cos x-x^2$.`,
    steps: [S`$4\cos x+3(-\sin x)-2x$.`], ans: S`$y'=4\cos x-3\sin x-2x$` },
  { title: "A tangent to cosine", q: S`Find the tangent to $y=\cos x$ at $x=\frac\pi6$.`,
    fig: F({ view: { xmin: -0.5, xmax: 3, ymin: -1.2, ymax: 1.5 }, curves: [{ f: Math.cos }, { f: (x) => -0.5 * x + Math.sqrt(3) / 2 + PI / 12, color: "green" }], points: [pt(PI / 6, Math.sqrt(3) / 2)], step: { x: 0.5, y: 0.5 } }),
    steps: [S`Point $\left(\frac\pi6,\frac{\sqrt3}2\right)$; slope $-\sin\frac\pi6=-\frac12$.`, S`$y-\frac{\sqrt3}{2}=-\frac12\left(x-\frac\pi6\right)$.`], ans: S`$y=-\frac12x+\frac{\sqrt3}2+\frac\pi{12}$` },
  { title: "A product of trig functions", q: S`Differentiate $y=\sin x\cos x$ and simplify.`,
    steps: [S`$\cos x\cos x+\sin x(-\sin x)=\cos^2x-\sin^2x$.`], ans: S`$y'=\cos^2x-\sin^2x=\cos2x$` },
  { title: "A quotient", q: S`Differentiate $y=\frac{\cos x}{x}$.`,
    steps: [S`$\frac{(-\sin x)x-\cos x\cdot1}{x^2}$.`], ans: S`$y'=-\frac{x\sin x+\cos x}{x^2}$` },
  { title: "The derivative of cot x", q: S`Use $\cot x=\frac{\cos x}{\sin x}$ to find $\frac{d}{dx}\cot x$.`,
    steps: [S`$\frac{(-\sin x)\sin x-\cos x\cos x}{\sin^2x}=\frac{-1}{\sin^2x}$.`], ans: S`$-\csc^2x$` },
  { title: "The derivative of csc x", q: S`Find $\frac{d}{dx}\csc x$.`,
    steps: [S`$\csc x=\frac1{\sin x}$: $\frac{0-\cos x}{\sin^2x}=-\frac1{\sin x}\cdot\frac{\cos x}{\sin x}$.`], ans: S`$-\csc x\cot x$` },
  { title: "A power times cosine", q: S`Differentiate $y=x^3\cos x$.`,
    steps: [S`$3x^2\cos x+x^3(-\sin x)$.`], ans: S`$y'=3x^2\cos x-x^3\sin x$` },
  { title: "Higher derivatives", q: S`For $f(x)=\sin x+\cos x$, find $f'''(0)$ and $f^{(4)}(x)$.`,
    steps: [S`$f'=\cos x-\sin x$, $f''=-\sin x-\cos x$, $f'''=-\cos x+\sin x$.`, S`$f'''(0)=-1$; $f^{(4)}=\sin x+\cos x=f$.`], ans: S`$f'''(0)=-1$; $f^{(4)}(x)=f(x)$` },
  { title: "Horizontal tangents", q: S`Find the horizontal tangents of $y=x-2\cos x$ on $[0,2\pi]$.`,
    fig: F({ view: { xmin: -0.2, xmax: 6.6, ymin: -2.5, ymax: 7 }, curves: [{ f: (x) => x - 2 * Math.cos(x), a: 0, b: 2 * PI }], points: [pt((7 * PI) / 6, (7 * PI) / 6 + Math.sqrt(3)), pt((11 * PI) / 6, (11 * PI) / 6 - Math.sqrt(3))], step: { x: 0.5, y: 1 } }),
    steps: [S`$y'=1+2\sin x=0\Rightarrow\sin x=-\frac12$: $x=\frac{7\pi}6,\ \frac{11\pi}6$.`, S`$y=\frac{7\pi}6+\sqrt3\approx5.40$ (max); $\frac{11\pi}6-\sqrt3\approx4.03$ (min).`], ans: S`local max $\left(\frac{7\pi}6,5.40\right)$, local min $\left(\frac{11\pi}6,4.03\right)$` },
];

const PROBLEMS = [
  { level: 1, q: S`Differentiate $y=7\sin x$.`, recap: "(sin x)′ = cos x.", ans: S`$7\cos x$` },
  { level: 1, q: S`Differentiate $y=x+\cos x$.`, recap: "Term by term.", ans: S`$1-\sin x$` },
  { level: 1, q: S`Differentiate $y=-3\cos x$.`, recap: "Two minus signs.", ans: S`$3\sin x$` },
  { level: 2, q: S`For $y=x\sin x$, find $y'\left(\frac\pi2\right)$.`, recap: "sin x + x cos x.", ans: "1" },
  { level: 2, q: S`For $f(x)=\tan x$, find $f'\left(\frac\pi4\right)$.`, recap: "sec² x.", ans: "2" },
  { level: 2, q: S`For $f(x)=x^2\cos x$, find $f'(\pi)$.`, recap: "2x cos x − x² sin x.", ans: S`$-2\pi\approx-6.283$` },
  { level: 2, q: S`Find the tangent to $y=2\cos x$ at $x=\frac\pi2$ and draw it.`, recap: "Point (π/2, 0), slope −2.", ans: S`$y=-2x+\pi$`, fig: gridT({ xmin: 0, xmax: 3.5, ymin: -3, ymax: 3 }, { x: 0.5, y: 0.5 }) },
  { level: 2, q: S`Find $f''(x)$ for $f(x)=x\cos x$.`, recap: "Product rule twice.", ans: S`$-2\sin x-x\cos x$` },
  { level: 3, space: 5, q: S`Find the maximum and minimum of $y=\sqrt3\sin x+\cos x$ on $[0,2\pi]$.`, recap: "y′ = √3 cos x − sin x = 0.", ans: S`$\tan x=\sqrt3$: max 2 at $\frac\pi3$, min $-2$ at $\frac{4\pi}3$` },
  { level: 3, space: 5, q: S`Find the derivative of $\cot x$ by writing it as $(\tan x)^{-1}$, and check that it agrees with $-\csc^2x$.`, recap: "Chain rule on a reciprocal.", ans: S`$-(\tan x)^{-2}\sec^2x=-\frac{\cos^2x}{\sin^2x}\cdot\frac1{\cos^2x}=-\csc^2x$` },
  { level: 3, space: 5, q: S`Find the maximum value of $f(x)=\frac{\sin x}{2+\cos x}$ on $[0,2\pi]$ (3 decimals).`, recap: "Numerator of f′: 2 cos x + 1.", ans: S`$\cos x=-\frac12$: maximum at $x=\frac{2\pi}3$, $f=\frac{\sqrt3/2}{3/2}\approx0.577$` },
  { level: 3, space: 5, q: S`Find $f^{(50)}\left(\frac\pi2\right)$ for $f(x)=\sin x$.`, recap: "50 = 4 · 12 + 2.", ans: S`$-\sin\frac\pi2=-1$` },
  { level: 3, space: 5, q: S`Find the equation of the normal to $y=\sin x$ at $x=\frac\pi3$ and sketch both lines.`, recap: "Normal slope = −1/m.", ans: S`slope $-2$: $y=-2x+\frac{2\pi}{3}+\frac{\sqrt3}{2}$`, fig: gridT({ xmin: -0.5, xmax: 3.5, ymin: -1.5, ymax: 3 }, { x: 0.5, y: 0.5 }) },
];

export const WS = {
  code: "4.2",
  title: "Derivatives of the Sine and Cosine Functions",
  bigideas: S`With $x$ in radians, $\frac{d}{dx}\sin x=\cos x$ and $\frac{d}{dx}\cos x=-\sin x$. Higher derivatives cycle with period 4: $\sin\to\cos\to-\sin\to-\cos\to\sin$. Combined with the sum, product and quotient rules these give $(\tan x)'=\sec^2x$, $(\cot x)'=-\csc^2x$, $(\sec x)'=\sec x\tan x$ and $(\csc x)'=-\csc x\cot x$.`,
  goals: ["Differentiate sin and cos.", "Use the derivative cycle.", "Combine with the product and quotient rules.", "Find tangents and horizontal tangents."],
  curriculum: "A2.4, A3.3",
  vocab: [["$(\\sin x)'$", "$\\cos x$"], ["$(\\cos x)'$", "$-\\sin x$"], ["$(\\tan x)'$", "$\\sec^2x$"]],
  hook: S`Graph $y=\cos x$ and $y=\sin x$ together. Where is cosine falling fastest? What is $\sin x$ there?`,
  concepts: [
    ["1. Two rules", S`$y=\sin x$ (violet) and its derivative $\cos x$ (blue); $y=\cos x$ falls where $-\sin x\lt0$:
${F({ view: { xmin: -2 * PI, xmax: 2 * PI, ymin: -1.4, ymax: 1.4 }, curves: [{ f: Math.sin }, { f: Math.cos, color: "blue" }], step: { x: 1, y: 0.5 } })}`],
    ["2. The cycle", S`$\frac{d^n}{dx^n}\sin x$ depends only on the remainder of $n\div4$.`],
    ["3. Other rules apply", S`Products, quotients and sums work as for any function.`],
  ],
  tips: ["(cos x)′ = −sin x.", "Radians only.", "Product rule for x sin x.", "Simplify with sin² + cos² = 1.", "Use exact values at special angles."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
