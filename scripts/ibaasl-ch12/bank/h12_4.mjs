// 12.4 Solving Trigonometric Equations — 20 hard questions
import { mc, ms, num, tf } from "./kit.mjs";
import { planeDoc } from "./fig.mjs";

const S = String.raw;
const PI = Math.PI, r3 = (v) => Math.round(v * 1000) / 1000;

// positive root of cos x = x² by bisection
const root = (g, a, b) => { for (let i = 0; i < 80; i++) { const m = (a + b) / 2; if (g(a) * g(m) <= 0) b = m; else a = m; } return (a + b) / 2; };

export const TOPIC = "12.4 Solving Trigonometric Equations";
export const Q = [
  num(S`Solve $\sin x=2\cos x$ for $0\le x\le2\pi$; give the larger solution (3 d.p.).`, r3(Math.atan(2) + PI), "tan x = 2: 1.107 and 1.107 + π.", planeDoc({ view: { xmin: 0, xmax: 2 * PI, ymin: -2.5, ymax: 2.5 }, curves: [{ f: Math.sin }, { f: (x) => 2 * Math.cos(x), color: "amber" }], step: { x: PI / 2, y: 1 } }), 0.001),
  num(S`Find the sum of all solutions of $6\cos^2x+\sin x-5=0$ for $0\le x\le2\pi$ (3 d.p.).`, r3(4 * PI), "6 sin²x − sin x − 1 = 0 ⇒ sin x = ½ or −⅓; pairs sum to π and 3π.", null, 0.001),
  num(S`Find the sum of all solutions of $\cos2x=\sin x$ for $0\le x\le2\pi$ (3 d.p.).`, r3((5 * PI) / 2), "2 sin²x + sin x − 1 = 0 ⇒ sin x = ½ or −1: π/6, 5π/6, 3π/2.", null, 0.001),
  mc(S`Solve $\tan2x=\sqrt3$ for $0\le x\le\pi$.`, S`$\frac{\pi}{6},\frac{2\pi}{3}$`, [S`$\frac{\pi}{3},\frac{4\pi}{3}$`, S`$\frac{\pi}{6}$ only`, S`$\frac{\pi}{6},\frac{7\pi}{6}$`], "2x = π/3 or 4π/3."),
  num(S`How many solutions does $\sin4x=-0.2$ have for $0\le x\le2\pi$?`, 8, "4x covers four turns, two per turn."),
  num(S`Solve $2\sin\left(x-\frac{\pi}{6}\right)=1$ for $0\le x\le2\pi$; give the larger solution (3 d.p.).`, r3(PI), "x − π/6 = π/6 or 5π/6.", null, 0.001),
  num(S`The equation $\sin x=k$ has exactly three solutions for $0\le x\le2\pi$. Find k.`, 0, "Only k = 0 gives 0, π, 2π."),
  mc(S`For which k does $\cos x=k$ have exactly one solution for $0\le x\le2\pi$?`, S`$k=-1$`, [S`$k=1$`, S`$k=0$`, S`$k=\frac12$`], "k = 1 gives both 0 and 2π."),
  num(S`How many solutions does $\sin x+\cos x=1$ have for $0\le x\le2\pi$?`, 3, "√2 sin(x + π/4) = 1: x = 0, π/2, 2π."),
  ms(S`Which are solutions of $\tan x=2\sin x$ in $[0,2\pi]$? Select all.`, [S`$\frac{\pi}{3}$`, S`$\pi$`, S`$\frac{5\pi}{3}$`, S`$\frac{2\pi}{3}$`], [0, 1, 2], "sin x(1/cos x − 2) = 0: sin x = 0 or cos x = ½."),
  tf(S`$\cos x=2\cos^2x$ has four solutions for $0\le x\le2\pi$.`, true, "cos x = 0 or ½, two each."),
  num(S`Find the smallest positive solution of $\cos(3x-1)=0.5$ (3 d.p.).`, r3((1 + PI / 3) / 3), "3x − 1 = −π/3 gives a negative x, so 3x − 1 = π/3.", null, 0.001),
  num(S`Use a GDC to solve $\cos x=x^2$ for $x>0$ (3 d.p.).`, r3(root((x) => Math.cos(x) - x * x, 0, 1.5)), "Intersection of the two graphs.", null, 0.001),
  mc("The graph shows y = 2 sin x + 1 for 0 ≤ x < 2π. The equation 2 sin x + 1 = k has exactly two solutions when:", S`$-1<k<3$`, [S`$-1\le k\le3$`, S`$0<k<2$`, S`$k>1$`], "A horizontal line strictly between the minimum and the maximum cuts twice.", planeDoc({ view: { xmin: 0, xmax: 2 * PI, ymin: -2, ymax: 4 }, curves: [{ f: (x) => 2 * Math.sin(x) + 1 }], step: { x: PI / 2, y: 1 } })),
  num("The graph shows y = 3 cos 2x and the line y = 1.2. How many solutions does 3 cos 2x = 1.2 have for 0 ≤ x ≤ 2π?", 4, "cos 2x = 0.4; two periods.", planeDoc({ view: { xmin: 0, xmax: 2 * PI, ymin: -3.5, ymax: 3.5 }, curves: [{ f: (x) => 3 * Math.cos(2 * x) }], lines: [{ m: 0, b: 1.2, color: "amber", dash: true }], step: { x: PI / 2, y: 1 } })),
  num(S`Water depth is $d=5+2\sin\frac{\pi t}{6}$ m, t in hours. For how many hours in $0\le t\le12$ is the depth more than 6 m?`, 4, "sin(πt/6) > ½ ⇒ 1 < t < 5.", planeDoc({ view: { xmin: 0, xmax: 12, ymin: 0, ymax: 8 }, curves: [{ f: (t) => 5 + 2 * Math.sin((PI * t) / 6) }], lines: [{ m: 0, b: 6, color: "amber", dash: true }], step: { x: 1, y: 1 } })),
  num(S`Solve $\cos x=-0.15$ for $-\pi\le x\le\pi$; give the positive solution (3 d.p.).`, r3(Math.acos(-0.15)), "cos⁻¹(−0.15).", null, 0.001),
  num(S`Solve $\sin^2x=2\cos^2x$ for $0\le x\le2\pi$; give the largest solution (3 d.p.).`, r3(2 * PI - Math.atan(Math.SQRT2)), "tan²x = 2; four solutions.", null, 0.001),
  mc(S`Solve $\sin2x=\cos2x$ for $0\le x\le\pi$.`, S`$\frac{\pi}{8},\frac{5\pi}{8}$`, [S`$\frac{\pi}{4},\frac{5\pi}{4}$`, S`$\frac{\pi}{8}$ only`, S`$\frac{\pi}{8},\frac{3\pi}{8}$`], "tan 2x = 1."),
  num(S`Find the sum of the solutions of $\sin x=0.37$ for $0\le x\le2\pi$ (3 d.p.).`, r3(PI), "p + (π − p).", planeDoc({ view: { xmin: 0, xmax: 2 * PI, ymin: -1.5, ymax: 1.5 }, curves: [{ f: Math.sin }], lines: [{ m: 0, b: 0.37, color: "amber", dash: true }], step: { x: PI / 2, y: 0.5 } }), 0.001),
];
