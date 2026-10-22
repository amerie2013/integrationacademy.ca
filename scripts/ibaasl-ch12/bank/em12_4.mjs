// 12.4 Solving Trigonometric Equations — 20 easy + 20 medium questions
import { mc, ms, num, tf, fill } from "./kit.mjs";
import { planeDoc } from "./fig.mjs";

const S = String.raw;
const PI = Math.PI, r3 = (v) => Math.round(v * 1000) / 1000;
const wave = (f, k) => planeDoc({ view: { xmin: 0, xmax: 2 * PI, ymin: -1.6, ymax: 1.6 }, curves: [{ f }], lines: [{ m: 0, b: k, color: "amber", dash: true }], step: { x: PI / 2, y: 0.5 } });

export const E = [
  mc(S`How many solutions does $\sin x=0.7$ have for $0\le x\le2\pi$?`, "2", ["1", "3", "4"], "Quadrants 1 and 2."),
  mc(S`The solutions of $\cos x=1$ for $0\le x\le2\pi$ are:`, S`$0$ and $2\pi$`, [S`$\pi$ only`, S`$\frac{\pi}{2}$`, S`$0$ only`], "Point (1, 0)."),
  mc(S`The solution of $\tan x=1$ for $0\le x<\frac{\pi}{2}$ is:`, S`$\frac{\pi}{4}$`, [S`$\frac{\pi}{3}$`, S`$\frac{\pi}{6}$`, S`$\frac{3\pi}{4}$`], "sin = cos."),
  mc(S`The solution of $\sin x=-1$ for $0\le x\le2\pi$ is:`, S`$\frac{3\pi}{2}$`, [S`$\pi$`, S`$\frac{\pi}{2}$`, S`$2\pi$`], "Point (0, −1)."),
  mc(S`The solutions of $\cos x=\frac12$ for $0\le x\le2\pi$ are:`, S`$\frac{\pi}{3},\frac{5\pi}{3}$`, [S`$\frac{\pi}{3},\frac{2\pi}{3}$`, S`$\frac{\pi}{6},\frac{11\pi}{6}$`, S`$\frac{2\pi}{3},\frac{4\pi}{3}$`], "Quadrants 1 and 4."),
  num(S`Find the smallest positive solution of $\sin x=0.4$ (3 d.p.).`, r3(Math.asin(0.4)), "sin⁻¹ 0.4.", null, 0.001),
  num(S`Find the smallest positive solution of $\cos x=0.35$ (3 d.p.).`, r3(Math.acos(0.35)), "cos⁻¹ 0.35.", null, 0.001),
  num(S`Solve $\tan x=4$ for $0<x<\frac{\pi}{2}$ (3 d.p.).`, r3(Math.atan(4)), "tan⁻¹ 4.", null, 0.001),
  num(S`How many solutions does $\cos x=0.2$ have for $0\le x\le4\pi$?`, 4, "Two per turn."),
  num(S`Find the second solution of $\sin x=0.9$ in $[0,2\pi]$ (3 d.p.).`, r3(PI - Math.asin(0.9)), "π − sin⁻¹ 0.9.", null, 0.001),
  tf(S`The equation $\sin x=1.2$ has no solution.`, true, "|sin x| ≤ 1."),
  tf(S`The equation $\tan x=50$ has a solution between 0 and $\frac{\pi}{2}$.`, true, "tan takes every value."),
  tf(S`$\cos x=-0.5$ has exactly one solution for $0\le x\le2\pi$.`, false, "2π/3 and 4π/3."),
  fill(S`If $p$ is the acute solution of $\sin x=k$, the other solution in $[0,2\pi]$ is $\pi-\_\_\_$.`, ["p"], "Symmetry about π/2."),
  ms("Which equations have no solution? Select all.", [S`$\cos x=1.5$`, S`$\sin x=-2$`, S`$\tan x=7$`, S`$\sin x=0.99$`], [0, 1], "sin and cos stay in [−1, 1]."),
  mc("The graph shows y = cos x and the line y = 0.6. How many solutions does cos x = 0.6 have on the interval shown?", "2", ["1", "3", "4"], "Two intersections.", wave(Math.cos, 0.6)),
  mc("The graph shows y = sin x and y = −0.3. The solutions of sin x = −0.3 lie in quadrants:", "3 and 4", ["1 and 2", "2 and 3", "1 and 4"], "Below the axis.", wave(Math.sin, -0.3)),
  num(S`Solve $2\sin x=1.4$; give the smallest positive solution (3 d.p.).`, r3(Math.asin(0.7)), "sin x = 0.7.", null, 0.001),
  num(S`Solve $5\cos x=3$; give the smallest positive solution (3 d.p.).`, r3(Math.acos(0.6)), "cos x = 0.6.", null, 0.001),
  mc(S`The solutions of $\tan x=0$ for $0\le x\le2\pi$ are:`, S`$0,\pi,2\pi$`, [S`$\frac{\pi}{2},\frac{3\pi}{2}$`, S`$0$ only`, S`$\pi$ only`], "sin x = 0."),
];

export const M = [
  num(S`Solve $5\sin x+2=0$ for $0\le x\le2\pi$; give the larger solution (3 d.p.).`, r3(2 * PI - Math.asin(0.4)), "Reference 0.412; quadrant 4.", null, 0.001),
  num(S`Solve $\cos x=-0.7$ for $0\le x\le2\pi$; give the smaller solution (3 d.p.).`, r3(Math.acos(-0.7)), "Quadrant 2.", null, 0.001),
  num(S`Solve $\tan x=-3$ for $0<x<\pi$ (3 d.p.).`, r3(PI - Math.atan(3)), "π − tan⁻¹ 3.", null, 0.001),
  mc(S`Solve $2\cos x+\sqrt2=0$ for $0\le x\le2\pi$.`, S`$\frac{3\pi}{4},\frac{5\pi}{4}$`, [S`$\frac{\pi}{4},\frac{7\pi}{4}$`, S`$\frac{3\pi}{4},\frac{7\pi}{4}$`, S`$\frac{5\pi}{4},\frac{7\pi}{4}$`], "cos x = −√2/2."),
  mc(S`Solve $\sqrt3\tan x=1$ for $0\le x\le2\pi$.`, S`$\frac{\pi}{6},\frac{7\pi}{6}$`, [S`$\frac{\pi}{3},\frac{4\pi}{3}$`, S`$\frac{\pi}{6},\frac{5\pi}{6}$`, S`$\frac{\pi}{6}$ only`], "tan x = 1/√3; period π."),
  num(S`How many solutions does $\cos2x=0.4$ have for $0\le x\le2\pi$?`, 4, "2x runs over two turns."),
  num(S`How many solutions does $\sin3x=0.5$ have for $0\le x\le\pi$?`, 4, "3x ∈ [0, 3π]: π/6, 5π/6, 13π/6, 17π/6."),
  mc(S`Solve $\cos\left(x+\frac{\pi}{3}\right)=0$ for $0\le x\le2\pi$.`, S`$\frac{\pi}{6},\frac{7\pi}{6}$`, [S`$\frac{\pi}{2},\frac{3\pi}{2}$`, S`$\frac{5\pi}{6},\frac{11\pi}{6}$`, S`$\frac{\pi}{3},\frac{4\pi}{3}$`], "x + π/3 = π/2 or 3π/2."),
  mc(S`Solve $\sin^2x=\frac34$ for $0\le x\le\pi$.`, S`$\frac{\pi}{3},\frac{2\pi}{3}$`, [S`$\frac{\pi}{6},\frac{5\pi}{6}$`, S`$\frac{\pi}{3}$ only`, S`$\frac{\pi}{4},\frac{3\pi}{4}$`], "sin x = √3/2 (sin ≥ 0 here)."),
  num(S`How many solutions does $\sin x(\cos x-1)=0$ have for $0\le x\le2\pi$?`, 3, "0, π, 2π (cos x = 1 adds nothing new)."),
  mc(S`Solve $\cos^2x-\cos x=0$ for $0\le x\le2\pi$.`, S`$0,\frac{\pi}{2},\frac{3\pi}{2},2\pi$`, [S`$\frac{\pi}{2},\frac{3\pi}{2}$`, S`$0,2\pi$`, S`$0,\pi,2\pi$`], "cos x = 0 or 1."),
  mc(S`Solve $\sin^2x+\sin x-2=0$ for $0\le x\le2\pi$.`, S`$\frac{\pi}{2}$`, [S`$\frac{\pi}{2},\frac{3\pi}{2}$`, S`$\frac{3\pi}{2}$`, "no solution"], "(sin x + 2)(sin x − 1) = 0; reject −2."),
  num(S`How many solutions does $3\cos^2x=\cos x$ have for $0\le x\le2\pi$?`, 4, "cos x = 0 (two) or 1/3 (two)."),
  tf(S`The two solutions of $\cos x=0.3$ in $[0,2\pi]$ add to $2\pi$.`, true, "Symmetric about x = π."),
  mc("The graph shows y = cos 2x and y = −0.4. How many solutions does cos 2x = −0.4 have on the interval shown?", "4", ["2", "3", "8"], "Two full periods.", wave((x) => Math.cos(2 * x), -0.4)),
  mc("The graph shows y = tan x and y = 2 on [0, 2π]. How many solutions does tan x = 2 have?", "2", ["1", "3", "4"], "Period π.", planeDoc({ view: { xmin: 0, xmax: 2 * PI, ymin: -4, ymax: 4 }, curves: [{ f: Math.tan }], lines: [{ m: 0, b: 2, color: "amber", dash: true }], step: { x: PI / 2, y: 1 } })),
  num(S`Solve $\sin\frac{x}{2}=0.6$ for $0\le x\le2\pi$; give the larger solution (3 d.p.).`, r3(2 * (PI - Math.asin(0.6))), "x/2 ∈ [0, π]: x/2 = 0.644 or 2.498, so x = 1.287 or 4.996.", null, 0.001),
  ms(S`Which are solutions of $\cos x=-\frac{\sqrt3}{2}$ in $[0,2\pi]$? Select all.`, [S`$\frac{5\pi}{6}$`, S`$\frac{7\pi}{6}$`, S`$\frac{2\pi}{3}$`, S`$\frac{11\pi}{6}$`], [0, 1], "Quadrants 2 and 3."),
  num(S`Solve $\tan x=0.5$ for $0^\circ\le x\le360^\circ$; give the larger solution (1 d.p.).`, 206.6, "26.6° + 180°.", null, 0.05),
  num(S`How many solutions does $2\sin x\cos x=0.8$ have for $0\le x\le\pi$?`, 2, "sin 2x = 0.8 with 2x ∈ [0, 2π]."),
];
