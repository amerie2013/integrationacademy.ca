// 12.3 Trigonometric Identities — 20 easy + 20 medium questions
import { mc, ms, num, tf, fill } from "./kit.mjs";
import { planeDoc } from "./fig.mjs";
import { figDoc, unitPoint } from "../figs12.mjs";

const S = String.raw;
const PI = Math.PI;

export const E = [
  mc(S`$\sin^2x+\cos^2x$ equals:`, "1", ["0", S`$2$`, S`$\tan^2x$`], "Pythagorean identity."),
  mc(S`$\tan x$ equals:`, S`$\frac{\sin x}{\cos x}$`, [S`$\frac{\cos x}{\sin x}$`, S`$\sin x\cos x$`, S`$\sin x-\cos x$`], "Definition."),
  mc(S`$\sin2x$ equals:`, S`$2\sin x\cos x$`, [S`$2\sin x$`, S`$\sin^2x$`, S`$\sin x\cos x$`], "Double angle."),
  mc(S`Which is NOT equal to $\cos2x$?`, S`$2\sin^2x-1$`, [S`$\cos^2x-\sin^2x$`, S`$2\cos^2x-1$`, S`$1-2\sin^2x$`], "Sign reversed."),
  mc(S`$1-\cos^2x$ simplifies to:`, S`$\sin^2x$`, [S`$\cos^2x$`, S`$\tan^2x$`, "1"], "Rearranged identity."),
  num(S`If $\sin x=\frac{5}{13}$ and x is acute, find $\cos x$ (4 d.p.).`, 12 / 13, "√(1 − 25/169).", null, 0.0001),
  num(S`If $\cos x=0.8$, find $\cos2x$.`, 0.28, "2(0.64) − 1.", null, 0.001),
  num(S`If $\sin x=0.6$, $\cos x=0.8$, find $\sin2x$.`, 0.96, "2(0.6)(0.8).", null, 0.001),
  num(S`Simplify $7\sin^2x+7\cos^2x$.`, 7, "7(1)."),
  num(S`If $\sin x=0.5$, find $\cos2x$.`, 0.5, "1 − 2(0.25).", null, 0.001),
  tf(S`$\sin2x=2\sin x$ for all x.`, false, "Try x = π/2."),
  tf(S`$\sin^2x$ means $(\sin x)^2$.`, true, "Notation."),
  tf(S`$\cos2x=1-2\sin^2x$ is an identity.`, true, "From cos² = 1 − sin²."),
  fill(S`$\sin^2x=1-\_\_\_$.`, ["cos^2x", "cos²x", "cos^2 x", "cos² x"], "Pythagorean identity."),
  ms("Which are identities? Select all.", [S`$\sin^2x+\cos^2x=1$`, S`$\sin2x=2\sin x\cos x$`, S`$\sin x+\cos x=1$`, S`$\cos2x=2\cos^2x-1$`], [0, 1, 3], "sin x + cos x varies."),
  mc("The graphs show y = sin 2x and y = 2 sin x cos x. They are:", "the same curve", ["different curves", "reflections", "translations"], "Identity.", planeDoc({ view: { xmin: 0, xmax: 2 * PI, ymin: -1.5, ymax: 1.5 }, curves: [{ f: (x) => Math.sin(2 * x) }, { f: (x) => 2 * Math.sin(x) * Math.cos(x), color: "amber" }], step: { x: PI / 2, y: 0.5 } })),
  mc("For the angle shown (sin θ = 0.6), cos θ is:", "0.8", ["0.6", "0.4", "1.6"], "3-4-5.", figDoc({ items: unitPoint(Math.asin(0.6), { label: "θ", quadrants: false }) })),
  num(S`Simplify $\cos x\tan x$ when $x=\frac{\pi}{6}$ (decimal).`, 0.5, "It is sin x.", null, 0.001),
  num(S`Evaluate $\cos^2\frac{\pi}{5}+\sin^2\frac{\pi}{5}$.`, 1, "Identity."),
  mc(S`$2\sin15^\circ\cos15^\circ$ equals:`, S`$\sin30^\circ=\frac12$`, [S`$\cos30^\circ$`, S`$\sin15^\circ$`, "1"], "Double angle."),
];

export const M = [
  num(S`$\cos\theta=\frac{45}{53}$, θ acute. Find $\sin2\theta$ (4 d.p.).`, 2520 / 2809, "sin = 28/53.", null, 0.0001),
  num(S`$\sin\theta=\frac{1}{3}$. Find $\cos2\theta$ (4 d.p.).`, 7 / 9, "1 − 2(1/9).", null, 0.0001),
  num(S`$\tan\theta=2$, θ acute. Find $\cos2\theta$.`, -0.6, "cos² = 1/5: 2(1/5) − 1.", null, 0.001),
  num(S`$\sin\theta=\frac{2}{3}$, θ obtuse. Find $\cos\theta$ (4 d.p.).`, -Math.sqrt(5) / 3, "Negative.", null, 0.0001),
  num(S`$\cos\theta=-\frac{16}{65}$, θ in quadrant 2. Find $\sin2\theta$ (4 d.p.).`, -2016 / 4225, "sin = 63/65.", null, 0.0001),
  num(S`Evaluate exactly $\cos^2\frac{\pi}{12}-\sin^2\frac{\pi}{12}$ (4 d.p.).`, Math.sqrt(3) / 2, "cos(π/6).", null, 0.0001),
  num(S`Evaluate $1-2\sin^2\frac{3\pi}{8}$ (4 d.p.).`, -Math.SQRT2 / 2, "cos(3π/4).", null, 0.0001),
  mc(S`$\frac{\sin2x}{2\cos x}$ simplifies to:`, S`$\sin x$`, [S`$\cos x$`, S`$\tan x$`, S`$\sin2x$`], "2 sin x cos x / 2 cos x."),
  mc(S`$(\sin x+\cos x)^2-1$ simplifies to:`, S`$\sin2x$`, [S`$1$`, S`$\cos2x$`, S`$2$`], "Expand."),
  mc(S`$\frac{1-\cos2x}{\sin2x}$ simplifies to:`, S`$\tan x$`, [S`$\cot x$`, S`$\sin x$`, "1"], "2sin²x / 2 sin x cos x."),
  mc(S`$\cos^4x-\sin^4x$ simplifies to:`, S`$\cos2x$`, [S`$1$`, S`$\sin2x$`, S`$\cos^2x$`], "(cos² − sin²)(cos² + sin²)."),
  tf(S`$\frac{1}{\cos^2x}-\tan^2x=1$ for all x where defined.`, true, "Divide sin² + cos² = 1 by cos²."),
  ms(S`If $\sin x=0.28$ and $\cos x=0.96$, which are correct? Select all.`, [S`$\tan x\approx0.2917$`, S`$\sin2x=0.5376$`, S`$\cos2x=0.8432$`, S`$\sin2x=0.56$`], [0, 1, 2], "2(0.28)(0.96) = 0.5376."),
  mc("The graphs show y = cos 2x and y = 1 − 2 sin²x. They are:", "identical", ["reflections", "shifted by π", "different"], "Identity.", planeDoc({ view: { xmin: 0, xmax: 2 * PI, ymin: -1.5, ymax: 1.5 }, curves: [{ f: (x) => Math.cos(2 * x) }, { f: (x) => 1 - 2 * Math.sin(x) ** 2, color: "amber" }], step: { x: PI / 2, y: 0.5 } })),
  mc("For θ shown in quadrant 2 with cos θ = −0.8, sin 2θ is:", "−0.96", ["0.96", "−0.48", "0.28"], "sin θ = 0.6.", figDoc({ items: unitPoint(PI - Math.acos(0.8), { label: "θ" }) })),
  num(S`Find the maximum value of $5\sin x\cos x$.`, 2.5, "2.5 sin 2x.", null, 0.001),
  num(S`If $\cos2x=0.5$, find $\sin^2x$.`, 0.25, "1 − 2 sin² x = 0.5.", null, 0.001),
  num(S`If $\cos2x=0.5$, find $\cos^2x$.`, 0.75, "2 cos² x − 1 = 0.5.", null, 0.001),
  mc(S`Simplify $\sin x\cos x\tan x$.`, S`$\sin^2x$`, [S`$\cos^2x$`, S`$\sin x$`, "1"], "sin x cos x · sin x/cos x."),
  num(S`If $\tan x=3$ and x is acute, find $\sin2x$.`, 0.6, "sin = 3/√10, cos = 1/√10.", null, 0.001),
];
