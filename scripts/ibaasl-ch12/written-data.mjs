// IB AA SL chapter 12 written-response (long_answer) questions for printed chapter tests (Part C), each with a figure.
import { planeDoc } from "../mcr3u-ch1/bank/fig.mjs";
import { figDoc, sector, unitPoint } from "./figs12.mjs";

const T = { 1: "12.1 Radian Measure, Arcs and Sectors", 2: "12.2 The Unit Circle and Exact Values", 3: "12.3 Trigonometric Identities", 4: "12.4 Solving Trigonometric Equations", 5: "12.5 Graphs of Sine, Cosine and Tangent", 6: "12.6 Transformations and Periodic Models" };
const W = (t, difficulty, points, prompt, feedback, fig) => ({ topic: T[t], difficulty, points, prompt, feedback, kind: "long_answer", answer: null, choices: null, fig });
const S = String.raw;
const PI = Math.PI, f = (v, d = 2) => String(Math.round(v * 10 ** d) / 10 ** d);
const graph = (curves, lines, view, step) => planeDoc({ view, curves, lines, step });
const th7 = 2 * Math.asin(5 / 7), s41 = (-5 + Math.sqrt(41)) / 4;

export const WRITTEN = [
  W(1, "medium", 4, S`The sector shown has radius 12 cm and angle 1.25 rad. (a) Find the arc length. (b) Find the area of the sector. (c) Find the area of the segment between the arc and the chord.`,
    S`(a) $12(1.25)=15$ cm. (b) $\frac12(144)(1.25)=90$ cm². (c) $90-\frac12(144)\sin1.25\approx${f(90 - 72 * Math.sin(1.25))}$ cm². [1, 1, 2.]`,
    figDoc({ items: sector(12, 1.25, { lr: "12 cm", lth: "1.25" }) })),
  W(1, "hard", 6, S`A chord AB of length 10 cm is drawn in a circle of radius 7 cm (shown). (a) Find angle AOB in radians. (b) Find the length of the minor arc AB. (c) Find the area of the minor segment. (d) Find the area of the major segment.`,
    S`(a) $2\sin^{-1}\frac57\approx${f(th7, 3)}$ rad. (b) $7(${f(th7, 3)})\approx${f(7 * th7)}$ cm. (c) $\frac12(49)(\theta-\sin\theta)\approx${f(24.5 * (th7 - Math.sin(th7)))}$ cm². (d) $49\pi-${f(24.5 * (th7 - Math.sin(th7)))}\approx${f(49 * PI - 24.5 * (th7 - Math.sin(th7)))}$ cm². [2, 1, 2, 1.]`,
    figDoc({ items: sector(7, th7, { lr: "7 cm", lth: "θ", ls: "", segment: true }) })),
  W(2, "medium", 4, S`The point P on the unit circle (shown) is at angle θ in quadrant 2 with $\sin\theta=\frac{12}{37}$. (a) Find the coordinates of P. (b) Find $\tan\theta$. (c) Write down $\sin(\theta+\pi)$ and $\cos(-\theta)$.`,
    S`(a) $\cos\theta=-\sqrt{1-\frac{144}{1369}}=-\frac{35}{37}$, so $P\left(-\frac{35}{37},\frac{12}{37}\right)$. (b) $-\frac{12}{35}$. (c) $-\frac{12}{37}$ and $-\frac{35}{37}$. [2, 1, 1.]`,
    figDoc({ items: unitPoint(PI - Math.asin(12 / 37), { label: "θ" }) })),
  W(2, "hard", 5, S`The point Q shown is at angle $\frac{7\pi}{6}$ on the unit circle. (a) Write down the exact coordinates of Q. (b) Q is reflected in the y-axis. Find every angle in $[0,4\pi]$ that ends at the image point. (c) Find the exact value of $\sin^2\frac{7\pi}{6}+\tan\frac{7\pi}{6}\cos\frac{7\pi}{6}$.`,
    S`(a) $\left(-\frac{\sqrt3}{2},-\frac12\right)$. (b) Image $\left(\frac{\sqrt3}{2},-\frac12\right)$: $\frac{11\pi}{6}$ and $\frac{23\pi}{6}$. (c) $\frac14+\frac{\sqrt3}{3}\left(-\frac{\sqrt3}{2}\right)=\frac14-\frac12=-\frac14$. [1, 2, 2.]`,
    figDoc({ items: unitPoint((7 * PI) / 6, { label: "7π/6" }) })),
  W(3, "medium", 4, S`The acute angle θ shown has $\sin\theta=\frac{11}{61}$. (a) Find $\cos\theta$. (b) Find $\sin2\theta$. (c) Find $\cos2\theta$.`,
    S`(a) $\sqrt{1-\frac{121}{3721}}=\frac{60}{61}$. (b) $2\cdot\frac{11}{61}\cdot\frac{60}{61}=\frac{1320}{3721}$. (c) $1-2\cdot\frac{121}{3721}=\frac{3479}{3721}$. [1, 1, 2.]`,
    figDoc({ items: unitPoint(Math.asin(11 / 61), { label: "θ", quadrants: false }) })),
  W(3, "hard", 6, S`(a) Prove that $\frac{1-\cos2x}{1+\cos2x}=\tan^2x$. (b) The graph of $y=\frac{1-\cos2x}{1+\cos2x}$ and the line $y=3$ are shown. Solve $\frac{1-\cos2x}{1+\cos2x}=3$ for $0<x<\pi$. (c) Explain why the graph has vertical asymptotes and give their equations in $0<x<\pi$.`,
    S`(a) $\frac{1-(1-2\sin^2x)}{1+(2\cos^2x-1)}=\frac{2\sin^2x}{2\cos^2x}=\tan^2x$. (b) $\tan x=\pm\sqrt3$: $x=\frac{\pi}{3},\frac{2\pi}{3}$. (c) The denominator $1+\cos2x=2\cos^2x$ is 0 when $\cos x=0$: $x=\frac{\pi}{2}$. [3, 2, 1.]`,
    graph([{ f: (x) => Math.tan(x) ** 2 }], [{ m: 0, b: 3, color: "amber", dash: true }], { xmin: 0, xmax: PI, ymin: -0.5, ymax: 6 }, { x: PI / 4, y: 1 })),
  W(4, "medium", 4, S`The graph of $y=4\cos x-1$ is shown. (a) Solve $4\cos x-1=0$ for $0\le x\le2\pi$ (3 d.p.). (b) How many solutions are there for $0\le x\le4\pi$? (c) Find the sum of the solutions in part (a).`,
    S`(a) $\cos x=\frac14$: $x\approx${f(Math.acos(0.25), 3)}$ or $${f(2 * PI - Math.acos(0.25), 3)}$. (b) 4. (c) $2\pi$ (symmetric about $x=\pi$). [2, 1, 1.]`,
    graph([{ f: (x) => 4 * Math.cos(x) - 1 }], [], { xmin: 0, xmax: 2 * PI, ymin: -5.5, ymax: 3.5 }, { x: PI / 2, y: 1 })),
  W(4, "hard", 6, S`The graphs of $y=5\sin x$ and $y=2\cos^2x$ are shown. (a) Show that where they meet, $2\sin^2x+5\sin x-2=0$. (b) Solve this for $0\le x\le2\pi$ (3 d.p.). (c) Explain why one root of the quadratic is rejected.`,
    S`(a) $5\sin x=2(1-\sin^2x)$. (b) $\sin x=\frac{-5+\sqrt{41}}{4}\approx${f(s41, 4)}$: $x\approx${f(Math.asin(s41), 3)}$ or $${f(PI - Math.asin(s41), 3)}$. (c) The other root $\frac{-5-\sqrt{41}}{4}\approx${f((-5 - Math.sqrt(41)) / 4)}$ is less than −1. [2, 3, 1.]`,
    graph([{ f: (x) => 5 * Math.sin(x) }, { f: (x) => 2 * Math.cos(x) ** 2, color: "amber" }], [], { xmin: 0, xmax: 2 * PI, ymin: -5.5, ymax: 5.5 }, { x: PI / 2, y: 1 })),
  W(5, "medium", 4, S`The graphs of $y=\sin x$ and $y=\cos x$ are shown for $-\pi\le x\le2\pi$. (a) List the zeros of $y=\sin x$ on this interval. (b) Find the x-coordinates where the graphs meet. (c) State the interval in $[0,2\pi]$ where $\sin x>0$ and $\cos x<0$.`,
    S`(a) $-\pi,0,\pi,2\pi$. (b) $-\frac{3\pi}{4},\frac{\pi}{4},\frac{5\pi}{4}$. (c) $\frac{\pi}{2}<x<\pi$. [1, 2, 1.]`,
    graph([{ f: Math.sin }, { f: Math.cos, color: "amber" }], [], { xmin: -PI, xmax: 2 * PI, ymin: -1.5, ymax: 1.5 }, { x: PI / 2, y: 0.5 })),
  W(5, "hard", 5, S`The graph of $y=\tan x$ and the line $y=-0.5$ are shown for $-\pi\le x\le2\pi$. (a) How many solutions does $\tan x=-0.5$ have on this interval? (b) Find them (3 d.p.). (c) Explain why consecutive solutions differ by π.`,
    S`(a) 3. (b) $-${f(Math.atan(0.5), 3)}$, $${f(PI - Math.atan(0.5), 3)}$, $${f(2 * PI - Math.atan(0.5), 3)}$ (the next one down, $${f(-PI - Math.atan(0.5), 3)}$, is outside). (c) tan has period π and takes each value once on each branch. [1, 3, 1.]`,
    graph([{ f: Math.tan }], [{ m: 0, b: -0.5, color: "amber", dash: true }], { xmin: -PI, xmax: 2 * PI, ymin: -4, ymax: 4 }, { x: PI / 2, y: 1 })),
  W(6, "medium", 4, S`The graph shown is $y=a\sin(bx)+d$, with maximum 3.5 at $x=2$ and minimum −1.5 at $x=6$. (a) Find a and d. (b) Find the period and b. (c) Write down the equation.`,
    S`(a) $a=2.5$, $d=1$. (b) Period 8, $b=\frac{\pi}{4}$. (c) $y=2.5\sin\frac{\pi x}{4}+1$. [2, 1, 1.]`,
    graph([{ f: (x) => 2.5 * Math.sin((PI * x) / 4) + 1 }], [], { xmin: 0, xmax: 16, ymin: -2.5, ymax: 4.5 }, { x: 2, y: 1 })),
  W(6, "hard", 6, S`A weight on a spring is at height $y=12+5\cos\frac{\pi t}{3}$ cm after t seconds (shown). (a) State the greatest and least heights and the period. (b) Find the first time when $y=9.5$. (c) For how long in the first 6 seconds is $y>14.5$? (d) Write the model as a sine function.`,
    S`(a) 17 cm, 7 cm, 6 s. (b) $\cos\frac{\pi t}{3}=-\frac12\Rightarrow\frac{\pi t}{3}=\frac{2\pi}{3}$, $t=2$ s. (c) $\cos\frac{\pi t}{3}>\frac12$ for $0\le t<1$ and $5<t\le6$: 2 s. (d) $y=12+5\sin\left(\frac{\pi}{3}(t+1.5)\right)$. [1, 2, 2, 1.]`,
    graph([{ f: (t) => 12 + 5 * Math.cos((PI * t) / 3) }], [{ m: 0, b: 14.5, color: "amber", dash: true }], { xmin: 0, xmax: 12, ymin: 0, ymax: 19 }, { x: 1, y: 2 })),
];
