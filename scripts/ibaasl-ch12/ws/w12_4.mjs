// IB AA SL Worksheet 12.4 — Solving Trigonometric Equations (teacher edition)
import { F, pt } from "./figT.mjs";

const S = String.raw;
const PI = Math.PI;
const f3 = (v) => v.toFixed(3);

const EXAMPLES = [
  { title: "Sine equation", q: S`Solve $\sin x=0.3$ for $0\le x\le2\pi$.`,
    fig: F({ view: { xmin: 0, xmax: 2 * PI, ymin: -1.4, ymax: 1.4 }, curves: [{ f: Math.sin }], lines: [{ m: 0, b: 0.3, color: "amber", dash: true }], points: [pt(Math.asin(0.3), 0.3, false, "red"), pt(PI - Math.asin(0.3), 0.3, false, "red")], step: { x: PI / 2, y: 0.5 } }, 5.6),
    steps: [S`$x=\sin^{-1}0.3\approx0.305$; $\pi-0.305$.`], ans: S`$\approx0.305,\ ${f3(PI - Math.asin(0.3))}$` },
  { title: "Cosine equation", q: S`Solve $\cos x=-0.45$ for $0\le x\le2\pi$.`,
    steps: [S`$x=\cos^{-1}(-0.45)\approx${f3(Math.acos(-0.45))}$; $2\pi-$ that.`], ans: S`$\approx${f3(Math.acos(-0.45))},\ ${f3(2 * PI - Math.acos(-0.45))}$` },
  { title: "Tangent in degrees", q: S`Solve $\tan x=-0.7$ for $0^\circ\le x\le360^\circ$.`,
    steps: [S`$\tan^{-1}(-0.7)\approx-35.0^\circ$; add 180°, 360°.`], ans: S`$\approx145.0^\circ,\ 325.0^\circ$` },
  { title: "Exact solutions", q: S`Solve $2\cos x-1=0$ for $0\le x\le2\pi$.`,
    steps: [S`$\cos x=\frac12$.`], ans: S`$\frac{\pi}3,\ \frac{5\pi}3$` },
  { title: "Double argument", q: S`Solve $\sin2x=\frac12$ for $0\le x\le2\pi$.`,
    steps: [S`$2x\in[0,4\pi]$: $\frac\pi6,\frac{5\pi}6,\frac{13\pi}6,\frac{17\pi}6$.`, "Halve."], ans: S`$\frac{\pi}{12},\frac{5\pi}{12},\frac{13\pi}{12},\frac{17\pi}{12}$` },
  { title: "Shifted argument", q: S`Solve $\tan\left(x+\frac{\pi}{6}\right)=1$ for $0\le x\le2\pi$.`,
    steps: [S`$x+\frac\pi6=\frac\pi4$ or $\frac{5\pi}4$.`], ans: S`$\frac{\pi}{12},\ \frac{13\pi}{12}$` },
  { title: "Quadratic", q: S`Solve $2\sin^2x+\sin x=0$ for $0\le x\le2\pi$.`,
    steps: [S`$\sin x(2\sin x+1)=0$.`], ans: S`$0,\pi,2\pi,\frac{7\pi}6,\frac{11\pi}6$` },
  { title: "With an identity", q: S`Solve $2\cos^2x+3\sin x=3$ for $0\le x\le2\pi$.`,
    fig: F({ view: { xmin: 0, xmax: 2 * PI, ymin: -6, ymax: 1 }, curves: [{ f: (x) => 2 * Math.cos(x) ** 2 + 3 * Math.sin(x) - 3 }], step: { x: PI / 2, y: 1 } }, 5.6),
    steps: [S`$2-2\sin^2x+3\sin x-3=0\Rightarrow(2\sin x-1)(\sin x-1)=0$.`], ans: S`$\frac\pi6,\ \frac\pi2,\ \frac{5\pi}6$` },
  { title: "Double angle equation", q: S`Solve $\sin2x=\cos x$ for $0\le x\le2\pi$.`,
    steps: [S`$\cos x(2\sin x-1)=0$.`], ans: S`$\frac\pi6,\frac\pi2,\frac{5\pi}6,\frac{3\pi}2$` },
];

const PROBLEMS = [
  { level: 1, q: S`Solve $\sin x=\frac{\sqrt2}{2}$ for $0\le x\le2\pi$.`, recap: "Exact.", ans: S`$\frac\pi4,\frac{3\pi}4$` },
  { level: 1, q: S`Solve $\tan x=\sqrt3$ for $0\le x\le2\pi$.`, recap: "Period π.", ans: S`$\frac\pi3,\frac{4\pi}3$` },
  { level: 1, q: S`Solve $\cos x=0.8$ for $0\le x\le2\pi$ (3 d.p.).`, recap: "2π − p.", ans: S`$\approx${f3(Math.acos(0.8))},\ ${f3(2 * PI - Math.acos(0.8))}$` },
  { level: 2, q: S`Solve $3\sin x+2=0$ for $0\le x\le2\pi$ (3 d.p.).`, recap: "Quadrants 3, 4.", ans: S`$\approx${f3(PI + Math.asin(2 / 3))},\ ${f3(2 * PI - Math.asin(2 / 3))}$` },
  { level: 2, q: S`Solve $\cos3x=0$ for $0\le x\le\pi$.`, recap: S`$3x\in[0,3\pi]$.`, ans: S`$\frac\pi6,\frac\pi2,\frac{5\pi}6$` },
  { level: 2, q: S`Solve $4\cos^2x=3$ for $0\le x\le2\pi$.`, recap: S`$\cos x=\pm\frac{\sqrt3}2$.`, ans: S`$\frac\pi6,\frac{5\pi}6,\frac{7\pi}6,\frac{11\pi}6$` },
  { level: 2, q: S`Solve $\sin\left(x-\frac\pi3\right)=0$ for $0\le x\le2\pi$.`, recap: "Shift.", ans: S`$\frac\pi3,\frac{4\pi}3$` },
  { level: 2, q: S`Use the graph to estimate the solutions of $\cos x=0.6$ in $[0,2\pi]$.`, recap: "Read intersections.", ans: S`$\approx0.93,\ 5.36$`,
    fig: F({ view: { xmin: 0, xmax: 2 * PI, ymin: -1.4, ymax: 1.4 }, curves: [{ f: Math.cos }], lines: [{ m: 0, b: 0.6, color: "amber", dash: true }], step: { x: PI / 2, y: 0.5 } }, 5) },
  { level: 3, space: 4, q: S`Solve $2\sin^2x-5\sin x+2=0$ for $0\le x\le2\pi$.`, recap: "Reject sin x = 2.", ans: S`$\frac\pi6,\frac{5\pi}6$` },
  { level: 3, space: 4, q: S`Solve $\cos2x=3\cos x-2$ for $0\le x\le2\pi$.`, recap: "2cos²x − 3cos x + 1 = 0.", ans: S`$0,\frac\pi3,\frac{5\pi}3,2\pi$` },
  { level: 3, space: 4, q: S`Solve $\tan^2x-2\tan x-3=0$ for $0\le x\le\pi$ (3 d.p.).`, recap: "tan x = 3 or −1.", ans: S`$\approx${f3(Math.atan(3))},\ \frac{3\pi}4$` },
  { level: 3, space: 4, q: S`Solve $\sin x=\cos x$ for $-\pi\le x\le\pi$.`, recap: "tan x = 1.", ans: S`$-\frac{3\pi}4,\ \frac\pi4$` },
  { level: 3, space: 4, q: S`Explain why dividing $\sin x\cos x=\sin x$ by $\sin x$ loses solutions.`, recap: "Factorise.", ans: S`the solutions with $\sin x=0$ are lost` },
];

export const WS = {
  code: "12.4",
  title: "Solving Trigonometric Equations",
  bigideas: S`Find the principal value with $\sin^{-1}$, $\cos^{-1}$ or $\tan^{-1}$, then use symmetry (sin: $\pi-p$; cos: $2\pi-p$; tan: $p+\pi$) and the period to list every solution in the interval. For $\sin(bx+c)=k$, change the interval first. Quadratics in sin or cos: substitute, factorise, reject impossible values. Use identities to get one function.`,
  goals: ["Solve basic equations.", "Handle transformed arguments.", "Solve quadratics.", "Use identities."],
  curriculum: "SL 3.8",
  vocab: [["Principal value", "calculator output"], ["Interval", "where to find solutions"], ["Substitution", "u = sin x"]],
  hook: "A tide reaches 4 m twice a day. How can one equation have two answers — or more?",
  concepts: [
    ["1. Symmetry", S`${F({ view: { xmin: 0, xmax: 2 * PI, ymin: -1.4, ymax: 1.4 }, curves: [{ f: Math.sin }], lines: [{ m: 0, b: 0.6, color: "amber", dash: true }], step: { x: PI / 2, y: 0.5 } }, 4.6)} Two solutions per period.`],
    ["2. Transformed arguments", "Adjust the interval."],
    ["3. Quadratics", "Factorise, check range."],
  ],
  tips: ["Radian vs degree mode.", "List all solutions.", "Adjust interval for bx.", "Reject |sin| > 1.", "Factorise, don't divide."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
