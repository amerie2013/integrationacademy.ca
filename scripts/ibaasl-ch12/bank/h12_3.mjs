// 12.3 Trigonometric Identities — 20 hard questions
import { mc, ms, num, tf } from "./kit.mjs";
import { planeDoc } from "./fig.mjs";
import { figDoc, unitPoint } from "../figs12.mjs";

const S = String.raw;
const PI = Math.PI;

export const TOPIC = "12.3 Trigonometric Identities";
export const Q = [
  num(S`$\sin x+\cos x=\frac{5}{4}$. Find $\sin2x$.`, 0.5625, "Square: 1 + sin 2x = 25/16.", planeDoc({ view: { xmin: 0, xmax: 2 * PI, ymin: -1.6, ymax: 1.6 }, curves: [{ f: (x) => Math.sin(x) + Math.cos(x) }], lines: [{ m: 0, b: 1.25, color: "amber", dash: true }], step: { x: PI / 2, y: 0.5 } }), 0.0001),
  num(S`$\sin x-\cos x=\frac{1}{3}$. Find $\sin2x$ (4 d.p.).`, 8 / 9, "1 − sin 2x = 1/9.", null, 0.0001),
  num(S`$\tan\theta=-\frac{5}{12}$, θ in quadrant 2. Find $\sin2\theta$ (4 d.p.).`, -120 / 169, "sin = 5/13, cos = −12/13.", figDoc({ items: unitPoint(PI - Math.atan(5 / 12), { label: "θ" }) }), 0.0001),
  num(S`For the same θ, find $\cos2\theta$ (4 d.p.).`, 119 / 169, "144/169 − 25/169.", null, 0.0001),
  num(S`Find the exact value of $\sin\frac{5\pi}{12}\cos\frac{5\pi}{12}$.`, 0.25, "½ sin(5π/6) = ¼.", null, 0.001),
  num(S`Find $\cos^2\frac{\pi}{8}$ exactly (4 d.p.).`, (1 + Math.SQRT2 / 2) / 2, "cos² x = (1 + cos 2x)/2.", null, 0.0001),
  mc(S`$\sin4x$ can be written as:`, S`$4\sin x\cos x\cos2x$`, [S`$4\sin x$`, S`$2\sin2x$`, S`$4\sin x\cos x$`], "2 sin 2x cos 2x."),
  mc(S`$\cos^2x$ can be written as:`, S`$\frac{1+\cos2x}{2}$`, [S`$\frac{1-\cos2x}{2}$`, S`$1+\cos2x$`, S`$\cos2x$`], "Rearranged double angle."),
  mc(S`$\frac{\sin x}{1+\cos x}+\frac{1+\cos x}{\sin x}$ simplifies to:`, S`$\frac{2}{\sin x}$`, [S`$\frac{2}{\cos x}$`, "2", S`$2\tan x$`], "Combine: (sin² + 1 + 2cos + cos²)/(sin(1 + cos)) = 2(1 + cos)/(sin(1 + cos))."),
  ms("Which of these equations hold for every x? Select all.", [S`$\sin3x=3\sin x$`, S`$\cos2x=(\cos x-\sin x)(\cos x+\sin x)$`, S`$\tan^2x+1=\frac{1}{\cos^2x}$`, S`$\sin^2x=\frac{1-\cos2x}{2}$`], [1, 2, 3], "sin 3x ≠ 3 sin x."),
  tf(S`$\sin x\cos x\le\frac12$ for all x.`, true, "½ sin 2x ≤ ½."),
  num(S`Find the minimum value of $\cos2x+2\sin^2x$.`, 1, "It always equals 1."),
  num(S`Find the maximum value of $3-\sin^2 2x$.`, 3, "sin² 2x ≥ 0."),
  num(S`$\cos\theta=\frac{1}{4}$, θ in quadrant 4. Find $\sin2\theta$ (4 d.p.).`, 2 * (-Math.sqrt(15) / 4) * 0.25, "sin = −√15/4.", null, 0.0001),
  mc("The graphs show y = sin²x and y = cos²x. Their sum is:", "the constant 1", ["sin 2x", "cos 2x", "2"], "Pythagorean identity.", planeDoc({ view: { xmin: 0, xmax: 2 * PI, ymin: -0.2, ymax: 1.3 }, curves: [{ f: (x) => Math.sin(x) ** 2 }, { f: (x) => Math.cos(x) ** 2, color: "amber" }], lines: [{ m: 0, b: 1, color: "green", dash: true }], step: { x: PI / 2, y: 0.5 } })),
  mc("The graph shows y = cos⁴x − sin⁴x. It is the same as:", S`$\cos2x$`, [S`$\sin2x$`, "1", S`$\cos^2x$`], "Difference of squares.", planeDoc({ view: { xmin: 0, xmax: 2 * PI, ymin: -1.5, ymax: 1.5 }, curves: [{ f: (x) => Math.cos(x) ** 4 - Math.sin(x) ** 4 }], step: { x: PI / 2, y: 0.5 } })),
  num(S`If $\sin2x=0.6$ and $0<x<\frac{\pi}{4}$, find $\sin x+\cos x$ (4 d.p.).`, Math.sqrt(1.6), "(sin + cos)² = 1.6; positive.", null, 0.0001),
  num(S`Evaluate $\frac{2\tan\frac{\pi}{8}}{1-\tan^2\frac{\pi}{8}}$ (use $\tan2x=\frac{2\tan x}{1-\tan^2x}$).`, 1, "tan(π/4)."),
  mc(S`Given $\sin x=a$, $\sin2x$ in terms of $a$ for x acute is:`, S`$2a\sqrt{1-a^2}$`, [S`$2a$`, S`$a^2$`, S`$2a(1-a^2)$`], "cos x = √(1 − a²)."),
  num(S`Evaluate $\sin^2 1^\circ+\sin^2 89^\circ$.`, 1, "sin 89° = cos 1°."),
];
