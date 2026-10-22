// 12.5 Graphs of Sine, Cosine and Tangent — 20 hard questions
import { mc, ms, num, tf } from "./kit.mjs";
import { planeDoc } from "./fig.mjs";

const S = String.raw;
const PI = Math.PI, r3 = (v) => Math.round(v * 1000) / 1000;
const g = (curves, lines = [], ymin = -1.6, ymax = 1.6, xmin = 0, xmax = 2 * PI, sx = PI / 2) => planeDoc({ view: { xmin, xmax, ymin, ymax }, curves, lines, step: { x: sx, y: ymax > 2 ? 1 : 0.5 } });

export const TOPIC = "12.5 Graphs of Sine, Cosine and Tangent";
export const Q = [
  num(S`The graph shows $y=\sin x$ and $y=\frac{x}{8}$. How many solutions does $\sin x=\frac{x}{8}$ have with $x>0$?`, 3, "The line reaches y = 1 at x = 8; it cuts the first hump once and the second hump twice.", g([{ f: Math.sin }], [{ m: 1 / 8, b: 0, color: "amber", dash: true }], -1.4, 1.4, 0, 10, 1)),
  num(S`How many solutions does $\tan x=x$ have for $0<x<2\pi$?`, 1, "Only on the branch (π/2, 3π/2), near 4.493."),
  mc(S`Which statement about $y=\tan x$ is false?`, "its period is 2π", ["it is an odd function", "its zeros are at x = kπ", "it increases on each branch"], "The period is π."),
  num(S`Find the smallest positive x, other than 0.4, with $\sin x=\sin0.4$ (3 d.p.).`, r3(PI - 0.4), "π − 0.4.", null, 0.001),
  num(S`How many solutions does $\cos x=\cos1$ have for $0\le x\le4\pi$?`, 4, "1, 2π − 1, 2π + 1, 4π − 1."),
  num(S`Find the sum of all solutions of $\cos x=-0.4$ for $0\le x\le4\pi$ (3 d.p.).`, r3(8 * PI), "Pairs sum to 2π and 6π.", null, 0.001),
  mc(S`The line $y=k$ ($0<k<1$) meets $y=\sin x$ at $x=p$ and $x=q$ in $[0,\pi]$. Then $p+q$ equals:`, S`$\pi$`, [S`$2\pi$`, S`$\frac{\pi}{2}$`, S`$2k$`], "Symmetry about x = π/2."),
  mc("The graph shows y = sin x and y = cos x. On [0, 2π], sin x > cos x exactly when:", S`$\frac{\pi}{4}<x<\frac{5\pi}{4}$`, [S`$0<x<\frac{\pi}{4}$`, S`$\frac{\pi}{2}<x<\pi$`, S`$\frac{5\pi}{4}<x<2\pi$`], "Between the two meeting points.", g([{ f: Math.sin }, { f: Math.cos, color: "amber" }])),
  num("The graph shows y = tan x and y = −2 on [0, 2π]. Find the larger solution of tan x = −2 (3 d.p.).", r3(2 * PI - Math.atan(2)), "2π − tan⁻¹ 2.", g([{ f: Math.tan }], [{ m: 0, b: -2, color: "amber", dash: true }], -4, 4), 0.001),
  num(S`How many solutions does $|\cos x|=0.5$ have for $0\le x\le2\pi$?`, 4, "cos x = ±½, two each."),
  ms("Which are true for every x? Select all.", [S`$\sin(x+\pi)=-\sin x$`, S`$\cos(x+\pi)=-\cos x$`, S`$\tan\left(x+\frac{\pi}{2}\right)=\tan x$`, S`$\sin(-x)=\sin x$`], [0, 1], "A half-turn negates both coordinates."),
  tf(S`Every interval $a\le x<a+\pi$ contains exactly one point where $\sin x=\cos x$.`, true, "The meeting points π/4 + kπ are π apart."),
  num(S`How many times does the line $y=0.3$ meet $y=\sin x$ for $0\le x\le20$?`, 7, "Solutions 0.305, 2.837, 6.588, 9.120, 12.871, 15.403, 19.154; the next is 21.686."),
  mc(S`If $\sin a=0.6$ with $0<a<\frac{\pi}{2}$, then $\sin(a+2\pi)$ and $\sin(\pi+a)$ are:`, "0.6 and −0.6", ["0.6 and 0.6", "−0.6 and 0.6", "0.8 and −0.8"], "Full turn; half-turn."),
  num("The graph shows y = cos x and y = 0.8 on [−2π, 2π]. How many solutions are there?", 4, "Two per period.", g([{ f: Math.cos }], [{ m: 0, b: 0.8, color: "amber", dash: true }], -1.6, 1.6, -2 * PI, 2 * PI, PI)),
  num("The graph shows y = sin x + cos x. Find its maximum value (3 d.p.).", r3(Math.SQRT2), "At x = π/4: √2/2 + √2/2.", g([{ f: (x) => Math.sin(x) + Math.cos(x) }], [], -1.6, 1.6), 0.001),
  mc(S`For which k does $\tan x=k$ have the solution $x=\frac{2\pi}{3}$?`, S`$-\sqrt3$`, [S`$\sqrt3$`, S`$-\frac{\sqrt3}{3}$`, S`$-\frac12$`], "Quadrant 2."),
  num(S`Find the minimum value of $\sin^2x-\sin x$.`, -0.25, "s² − s is smallest at s = ½.", null, 0.001),
  num(S`Find the maximum value of $\frac{1}{2+\sin x}$.`, 1, "Smallest denominator 2 − 1."),
  mc("The graph of y = sin x is reflected in the y-axis. The new graph is:", S`$y=-\sin x$`, [S`$y=\sin x$`, S`$y=\cos x$`, S`$y=-\cos x$`], "sin(−x) = −sin x."),
];
