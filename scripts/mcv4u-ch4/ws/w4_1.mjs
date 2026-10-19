// MCV4U Worksheet 4.1 — Instantaneous Rates of Change of Sinusoidal Functions (teacher edition)
import { F, gridT, pt } from "./figT.mjs";

const S = String.raw;
const PI = Math.PI;
const EXAMPLES = [
  { title: "A forward difference quotient", q: S`Estimate the slope of $y=\sin x$ at $x=\frac\pi4$ with $h=0.001$.`,
    steps: [S`$\frac{\sin(\frac\pi4+0.001)-\sin\frac\pi4}{0.001}\approx0.70675$.`, S`Compare $\cos\frac\pi4\approx0.70711$.`], ans: "about 0.7068, very close to cos(π/4)" },
  { title: "A centred difference quotient", q: S`Estimate the slope of $y=\cos x$ at $x=\frac\pi6$ with the centred quotient $\frac{f(a+h)-f(a-h)}{2h}$, $h=0.001$.`,
    steps: [S`$\frac{\cos(\frac\pi6+0.001)-\cos(\frac\pi6-0.001)}{0.002}\approx-0.50000$.`, S`Compare $-\sin\frac\pi6=-0.5$.`], ans: S`$-0.5$` },
  { title: "A table of slopes", q: S`Using $(\sin x)'=\cos x$, tabulate the slope of $y=\sin x$ at $x=\frac\pi6,\frac\pi3,\frac{2\pi}3,\frac{5\pi}6$.`,
    steps: [S`$\cos\frac\pi6\approx0.866$, $\cos\frac\pi3=0.5$, $\cos\frac{2\pi}3=-0.5$, $\cos\frac{5\pi}6\approx-0.866$.`], ans: "0.866, 0.5, −0.5, −0.866: rising, then falling after π/2" },
  { title: "The second key limit", q: S`Evaluate $\frac{\cos h-1}{h}$ for $h=0.1,\ 0.01,\ 0.001$ and state the limit.`,
    fig: F({ view: { xmin: -1, xmax: 1, ymin: -0.6, ymax: 0.6 }, curves: [{ f: (h) => (Math.abs(h) < 1e-6 ? 0 : (Math.cos(h) - 1) / h) }], step: { x: 0.25, y: 0.2 } }),
    steps: [S`$-0.049958$, $-0.005000$, $-0.000500$.`], ans: S`$\lim_{h\to0}\frac{\cos h-1}{h}=0$` },
  { title: "Degrees versus radians", q: S`If $x$ were measured in degrees, what would the slope of $y=\sin x$ be at $x=0$?`,
    steps: [S`$\sin(x^\circ)=\sin\left(\frac{\pi x}{180}\right)$; near 0 this is about $\frac{\pi}{180}x$.`], ans: S`$\frac{\pi}{180}\approx0.01745$ — which is why calculus uses radians` },
  { title: "Where the slope is positive", q: S`On $[0,2\pi]$, where is the slope of $y=\sin x$ positive?`,
    fig: F({ view: { xmin: -0.2, xmax: 6.6, ymin: -1.4, ymax: 1.4 }, curves: [{ f: Math.sin, a: 0, b: PI / 2, color: "green" }, { f: Math.sin, a: PI / 2, b: 1.5 * PI, color: "red" }, { f: Math.sin, a: 1.5 * PI, b: 2 * PI, color: "green" }], points: [pt(PI / 2, 1, false), pt(1.5 * PI, -1, false)], step: { x: 0.5, y: 0.5 } }),
    steps: [S`Slope $=\cos x\gt0$ on $\left[0,\frac\pi2\right)$ and $\left(\frac{3\pi}2,2\pi\right]$.`], ans: S`on $\left(0,\frac\pi2\right)$ and $\left(\frac{3\pi}2,2\pi\right)$` },
  { title: "A vertical shift", q: S`Find the slope of $y=\sin x+1$ at $x=\frac\pi3$.`,
    steps: [S`Shifting up does not change slopes: $\cos\frac\pi3$.`], ans: S`$\frac12$` },
  { title: "A swinging weight", q: S`A weight's displacement is $x(t)=12\sin t$ cm. Estimate its velocity at $t=2$ s.`,
    fig: F({ view: { xmin: 0, xmax: 6.5, ymin: -14, ymax: 14 }, curves: [{ f: (t) => 12 * Math.sin(t), a: 0, b: 6.5 }, { f: (t) => 12 * Math.sin(2) + 12 * Math.cos(2) * (t - 2), color: "green", a: 0.8, b: 3.2 }], points: [pt(2, 12 * Math.sin(2))], step: { x: 0.5, y: 2 } }),
    steps: [S`Slope $=12\cos2\approx12(-0.4161)$.`], ans: "about −4.99 cm/s (moving back toward the centre)" },
  { title: "Average versus instantaneous", q: S`For $y=\cos x$, compare the average rate of change on $\left[0,\frac\pi2\right]$ with the instantaneous rate at $x=\frac\pi4$.`,
    fig: F({ view: { xmin: -0.2, xmax: 1.8, ymin: -0.3, ymax: 1.2 }, curves: [{ f: Math.cos, a: 0, b: 1.8 }, { f: (x) => 1 - (2 / PI) * x, color: "amber", a: 0, b: PI / 2 }, { f: (x) => Math.cos(PI / 4) - Math.sin(PI / 4) * (x - PI / 4), color: "green", a: 0.2, b: 1.4 }], points: [pt(PI / 4, Math.cos(PI / 4))], step: { x: 0.25, y: 0.25 } }),
    steps: [S`Average: $\frac{0-1}{\pi/2}\approx-0.6366$.`, S`Instantaneous: $-\sin\frac\pi4\approx-0.7071$.`], ans: "−0.637 (secant) versus −0.707 (tangent)" },
];

const PROBLEMS = [
  { level: 1, q: S`State the slope of $y=\sin x$ at $x=\frac{3\pi}2$.`, recap: "A trough.", ans: "0" },
  { level: 1, q: S`State the slope of $y=\cos x$ at $x=\pi$.`, recap: "A trough of cosine.", ans: "0" },
  { level: 1, q: S`State the slope of $y=\sin x$ at $x=2\pi$.`, recap: "Same as at 0.", ans: "1" },
  { level: 2, q: S`Estimate the slope of $y=\sin x$ at $x=2$ (radians) with $h=0.001$.`, recap: "Compare with cos 2.", ans: S`$\approx-0.416$` },
  { level: 2, q: S`Estimate the slope of $y=\cos x$ at $x=\frac\pi2$.`, recap: "Crossing the midline going down.", ans: S`$-1$` },
  { level: 2, q: S`Evaluate $\frac{\sin(0.001)}{0.001}$ to 8 decimals. What limit does it suggest?`, recap: "Radians.", ans: S`$0.99999983$; the limit is 1` },
  { level: 2, q: S`On $[0,2\pi]$, where is the slope of $y=\cos x$ positive?`, recap: "−sin x > 0.", ans: S`on $(\pi,2\pi)$` },
  { level: 2, q: S`Plot the slopes of $y=\cos x$ at multiples of $\frac\pi4$ on the grid and join them. Name the curve.`, recap: "Slopes 0, −0.71, −1, …", ans: S`$y=-\sin x$`, fig: gridT({ xmin: 0, xmax: 6.5, ymin: -1.5, ymax: 1.5 }, { x: 0.5, y: 0.5 }) },
  { level: 3, space: 5, q: S`Show algebraically that $\lim_{h\to0}\frac{\cos h-1}{h}=0$ by multiplying by $\frac{\cos h+1}{\cos h+1}$.`, recap: "cos²h − 1 = −sin²h.", ans: S`$\frac{-\sin^2h}{h(\cos h+1)}=-\frac{\sin h}{h}\cdot\frac{\sin h}{\cos h+1}\to-1\cdot\frac02=0$` },
  { level: 3, space: 5, q: S`Use $\cos(x+h)=\cos x\cos h-\sin x\sin h$ to show that the slope of $\cos x$ is $-\sin x$.`, recap: "Split into the two key limits.", ans: S`$\cos x\cdot\frac{\cos h-1}{h}-\sin x\cdot\frac{\sin h}{h}\to-\sin x$` },
  { level: 3, space: 5, q: S`Find all $x$ in $[0,2\pi]$ where the tangent to $y=\sin x$ is parallel to the line $y=-x$.`, recap: "Slope cos x = −1.", ans: S`$x=\pi$` },
  { level: 3, space: 5, q: S`A water wheel paddle has height $h(t)=2\sin\left(\frac\pi2t\right)+3$ m. Estimate how fast it rises at $t=1$ s and at $t=2$ s, and explain the values.`, recap: "Slope π cos(πt/2).", ans: "0 m/s at t = 1 (top of its path); about −3.14 m/s at t = 2 (midline, falling fastest)" },
  { level: 3, space: 5, q: S`Draw the tangent to $y=\sin x$ at $x=\pi$ and show that it crosses the curve there. What kind of point is $(\pi,0)$?`, recap: "Tangent y = −(x − π).", ans: S`$y=-(x-\pi)$; the curve is above it on one side and below on the other: an inflection point`, fig: gridT({ xmin: 0, xmax: 6.5, ymin: -2, ymax: 2 }, { x: 0.5, y: 0.5 }) },
];

export const WS = {
  code: "4.1",
  title: "Instantaneous Rates of Change of Sinusoidal Functions",
  bigideas: S`The instantaneous rate of change of $\sin x$ can be estimated with difference quotients using small $h$ (in radians). Plotting these slopes shows they follow $\cos x$; for $\cos x$ the slopes follow $-\sin x$. Two limits make this exact: $\frac{\sin h}{h}\to1$ and $\frac{\cos h-1}{h}\to0$ as $h\to0$. A sinusoid is steepest where it crosses its midline and has slope 0 at its peaks and troughs.`,
  goals: ["Estimate slopes of sin and cos.", "Recognize the slope graphs.", "Evaluate the key limits.", "Explain why radians matter."],
  curriculum: "A2.4",
  vocab: [["Radian", "$\\pi$ rad $=180^\\circ$"], ["Key limit", "$\\frac{\\sin h}{h}\\to1$"], ["Centred quotient", "$\\frac{f(a+h)-f(a-h)}{2h}$"]],
  hook: S`Sketch $y=\sin x$ for one cycle. Without any calculation, mark where its tangent is horizontal and where it is steepest.`,
  concepts: [
    ["1. Slopes of sine", S`The slopes of $\sin x$ (violet) fall on $\cos x$ (blue):
${F({ view: { xmin: -0.2, xmax: 6.6, ymin: -1.4, ymax: 1.4 }, curves: [{ f: Math.sin, a: 0, b: 2 * PI }, { f: Math.cos, a: 0, b: 2 * PI, color: "blue" }], step: { x: 0.5, y: 0.5 } })}`],
    ["2. Estimating", S`Use $h=0.001$ in radian mode, or a centred quotient.`],
    ["3. The limits", S`$\frac{\sin h}{h}\to1$, $\frac{\cos h-1}{h}\to0$ ($h$ in radians).`],
  ],
  tips: ["Radian mode!", "Slope of sin x is not sin x.", "Peaks and troughs have slope 0.", "Steepest at the midline.", "A vertical shift does not change slopes."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
