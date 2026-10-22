// IB AA SL Worksheet 12.5 — Graphs of Sine, Cosine and Tangent (teacher edition)
import { F, pt } from "./figT.mjs";

const S = String.raw;
const PI = Math.PI;
const tanCurves = [[-PI, -PI / 2], [-PI / 2, PI / 2], [PI / 2, (3 * PI) / 2], [(3 * PI) / 2, 2 * PI]].map(([a, b]) => ({ f: Math.tan, a: a + 0.03, b: b - 0.03 }));

const EXAMPLES = [
  { title: "Sketch sine", q: S`Sketch $y=\sin x$ for $-\pi\le x\le2\pi$ and mark the maxima.`,
    fig: F({ view: { xmin: -PI, xmax: 2 * PI, ymin: -1.5, ymax: 1.5 }, curves: [{ f: Math.sin }], points: [pt(PI / 2, 1, "", "red"), pt(-PI / 2, -1, "", "blue"), pt((3 * PI) / 2, -1, "", "blue")], step: { x: PI / 2, y: 0.5 } }, 5.6),
    steps: [S`Maximum 1 at $x=\frac\pi2$.`], ans: S`max at $\frac{\pi}{2}$` },
  { title: "Features of cosine", q: S`State the period, amplitude, range and zeros of $y=\cos x$ on $[0,2\pi]$.`,
    steps: ["Read from the graph."], ans: S`$2\pi$; 1; $[-1,1]$; $\frac\pi2,\frac{3\pi}2$` },
  { title: "Tangent", q: S`Sketch $y=\tan x$ on $[-\pi,2\pi]$ with its asymptotes.`,
    fig: F({ view: { xmin: -PI, xmax: 2 * PI, ymin: -4, ymax: 4 }, curves: tanCurves, vlines: [{ x: -PI / 2, color: "red", dash: true }, { x: PI / 2, color: "red", dash: true }, { x: (3 * PI) / 2, color: "red", dash: true }], step: { x: PI / 2, y: 1 } }, 5.6),
    steps: [S`Asymptotes $x=\pm\frac\pi2,\frac{3\pi}2$.`], ans: "period π" },
  { title: "sin and cos together", q: S`On $[0,2\pi]$, where does $\cos x>\sin x$?`,
    steps: [S`Equal at $\frac\pi4$, $\frac{5\pi}4$.`], ans: S`$0\le x<\frac\pi4$ or $\frac{5\pi}4<x\le2\pi$` },
  { title: "Count solutions", q: S`How many solutions has $\cos x=0.25$ on $[-2\pi,2\pi]$?`,
    steps: ["Two per period, two periods."], ans: "4" },
  { title: "Symmetry", q: S`Use the graph to show $\sin(\pi-x)=\sin x$.`,
    steps: [S`The sine graph is symmetric about $x=\frac\pi2$.`], ans: "shown" },
  { title: "Degrees", q: S`Sketch $y=\cos x$ for $0^\circ\le x\le360^\circ$ and state where it is negative.`,
    steps: ["Below the axis between 90° and 270°."], ans: S`$90^\circ<x<270^\circ$` },
  { title: "Range on an interval", q: S`Find the range of $y=\sin x$ for $\frac\pi6\le x\le\frac{7\pi}6$.`,
    steps: [S`Max 1 at $\frac\pi2$; min $-\frac12$ at $\frac{7\pi}6$.`], ans: S`$\left[-\frac12,1\right]$` },
  { title: "Odd and even", q: "Which of sin, cos, tan are odd and which are even?",
    steps: ["f(−x) = −f(x) or f(x)."], ans: "sin, tan odd; cos even" },
];

const PROBLEMS = [
  { level: 1, q: S`State the period of $y=\cos x$ in degrees.`, recap: "Full turn.", ans: S`$360^\circ$` },
  { level: 1, q: S`Write down the zeros of $y=\sin x$ in $[0,2\pi]$.`, recap: "Graph.", ans: S`$0,\pi,2\pi$` },
  { level: 1, q: S`State the range of $y=\tan x$.`, recap: "All reals.", ans: "all real numbers" },
  { level: 2, q: S`How many solutions has $\tan x=-2$ on $[0,3\pi]$?`, recap: "One per π.", ans: "3" },
  { level: 2, q: S`Find the range of $y=\cos x$ on $\left[\frac\pi3,\pi\right]$.`, recap: "Decreasing.", ans: S`$\left[-1,\frac12\right]$` },
  { level: 2, q: S`On $[0,2\pi]$, where is $\sin x\ge0$?`, recap: "Graph.", ans: S`$[0,\pi]$ and $x=2\pi$` },
  { level: 2, q: S`Give the equations of the asymptotes of $y=\tan x$ on $[0,2\pi]$.`, recap: "cos x = 0.", ans: S`$x=\frac\pi2,\frac{3\pi}2$` },
  { level: 2, q: S`Sketch $y=\sin x$ and $y=\cos x$ for $0\le x\le2\pi$ on the grid and mark their intersections.`, recap: "tan x = 1.", ans: S`$\left(\frac\pi4,\frac{\sqrt2}2\right)$, $\left(\frac{5\pi}4,-\frac{\sqrt2}2\right)$`,
    fig: F({ view: { xmin: 0, xmax: 2 * PI, ymin: -1.4, ymax: 1.4 }, step: { x: PI / 2, y: 0.5 } }, 5) },
  { level: 3, space: 4, q: S`How many solutions has $\sin x=\frac{x}{4}$? Explain using graphs.`, recap: "Line in the band.", ans: "3 (x = 0 and ±2.47)" },
  { level: 3, space: 4, q: S`Given $\cos a=0.6$ with $0<a<\frac\pi2$, list all x in $[-2\pi,2\pi]$ with $\cos x=0.6$ in terms of a.`, recap: "Even, periodic.", ans: S`$\pm a$, $\pm(2\pi-a)$` },
  { level: 3, space: 4, q: S`Show that $f(x)=\sin x+\tan x$ is odd.`, recap: "f(−x).", ans: S`$f(-x)=-\sin x-\tan x=-f(x)$` },
  { level: 3, space: 4, q: S`Find the total length of the intervals in $[0,2\pi]$ where $\cos x<-\frac12$.`, recap: S`$\frac{2\pi}3<x<\frac{4\pi}3$.`, ans: S`$\frac{2\pi}3$` },
  { level: 3, space: 4, q: S`Explain why $y=\tan x$ has no maximum or minimum.`, recap: "Unbounded.", ans: "it tends to ±∞ near each asymptote" },
];

export const WS = {
  code: "12.5",
  title: "Graphs of Sine, Cosine and Tangent",
  bigideas: S`$y=\sin x$ and $y=\cos x$ have period $2\pi$ (360°), amplitude 1 and range $[-1,1]$; $\cos x=\sin\left(x+\frac\pi2\right)$. $y=\tan x$ has period $\pi$, range all reals and asymptotes at $x=\frac\pi2+n\pi$. sin and tan are odd, cos is even. Intersections with $y=k$ show the solutions of equations.`,
  goals: ["Sketch the three graphs.", "State key features.", "Use symmetry.", "Count solutions."],
  curriculum: "SL 3.7",
  vocab: [["Period", "cycle length"], ["Amplitude", "half of max − min"], ["Asymptote", "tan at π/2 + nπ"]],
  hook: "Unroll the unit circle: plot the height of the point against the angle. What shape appears?",
  concepts: [
    ["1. sin and cos", S`${F({ view: { xmin: 0, xmax: 2 * PI, ymin: -1.4, ymax: 1.4 }, curves: [{ f: Math.sin }, { f: Math.cos, color: "amber" }], step: { x: PI / 2, y: 0.5 } }, 4.6)} Waves of period 2π.`],
    ["2. tan", "Period π, asymptotes."],
    ["3. Using graphs", "Count intersections."],
  ],
  tips: ["Mark multiples of π/2.", "Degrees or radians?", "Don't join tan branches.", "sin odd, cos even.", "Two solutions per period."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
