// 4.3 Differentiation Rules for Sinusoidal Functions — 20 hard questions
import { mc, num, tf } from "./kit.mjs";
import { graph, P } from "./fig.mjs";

const S = String.raw;
const PI = Math.PI;
export const TOPIC = "4.3 Differentiation Rules for Sinusoidal Functions";
export const Q = [
  num("The graph of y = cos(2x) + 2 sin x on [0, 2π] is shown. Find its maximum value.", 1.5, "y′ = 2 cos x (1 − 2 sin x): max at x = π/6 and 5π/6.", graph((x) => Math.cos(2 * x) + 2 * Math.sin(x), { xmin: 0, xmax: 2 * PI, ymin: -3.5, ymax: 2 }, [P(PI / 6, 1.5), P((5 * PI) / 6, 1.5), P(PI / 2, 1)], { a: 0, b: 2 * PI, step: { x: 0.5, y: 0.5 } }), 0.0001),
  num(S`For $y=\sin(\cos x)$, find $y'\left(\frac\pi2\right)$.`, -1, "cos(cos x) · (−sin x): cos 0 · (−1)."),
  num(S`How many horizontal tangents does $y=\sin^2x$ have on $[0,2\pi)$?`, 4, "y′ = sin 2x = 0."),
  num(S`$y=A\cos(kx)$ ($A,k\gt0$) has period $4\pi$ and greatest slope 3. Find $A$.`, 6, "k = ½, and Ak = 3."),
  mc(S`$\frac{d}{dx}\sin(\sin x)=$`, S`$\cos(\sin x)\cos x$`, [S`$\cos(\cos x)$`, S`$\cos(\sin x)$`, S`$-\sin(\sin x)\cos x$`], "Outer sin, inner sin x."),
  num("The graph of y = x² cos(2x) is shown. Find its slope at x = π/2 (4 decimals).", -3.1416, "2x cos 2x − 2x² sin 2x at π/2: π(−1) − 0.", graph((x) => x * x * Math.cos(2 * x), { xmin: 0, xmax: 3, ymin: -6, ymax: 4 }, [P(PI / 2, -(PI * PI) / 4)], { step: { x: 0.5, y: 1 } }), 0.0005),
  num(S`For $f(x)=\sin^4x-\cos^4x$, find $f'\left(\frac\pi4\right)$.`, 2, "f = (sin² − cos²)(sin² + cos²) = −cos 2x, so f′ = 2 sin 2x."),
  tf(S`For $k\gt0$, a larger $k$ makes $y=\sin(kx)$ steeper at the origin.`, true, "Slope at 0 is k."),
  num(S`For $y=\sqrt{1+\sin^2x}$, find $y'\left(\frac\pi4\right)$ (4 decimals).`, 0.4082, "sin x cos x/√(1 + sin² x).", null, 0.0005),
  num("The graph of y = 3 sin(2x − π/3) + 1 is shown. What is its slope at x = π/6?", 6, "6 cos 0 — the steepest point.", graph((x) => 3 * Math.sin(2 * x - PI / 3) + 1, { xmin: 0, xmax: 2 * PI, ymin: -2.5, ymax: 4.5 }, [P(PI / 6, 1)], { a: 0, b: 2 * PI, more: [{ f: (x) => 1 + 6 * (x - PI / 6), color: "green", a: 0, b: 1 }], step: { x: 0.5, y: 1 } })),
  num(S`How many horizontal tangents does $y=\sin x+\sin^2x$ have on $[0,2\pi)$?`, 4, "cos x (1 + 2 sin x) = 0."),
  mc(S`If $y=\sin^2(5x)$, then $y'=$`, S`$5\sin(10x)$`, [S`$10\sin(5x)$`, S`$2\sin(5x)$`, S`$\sin(10x)$`], "10 sin 5x cos 5x = 5 sin 10x."),
  num(S`Find the maximum of $y=\sin^2x\cos x$ on $\left[0,\frac\pi2\right]$ (4 decimals).`, 0.3849, "sin x (2 cos² x − sin² x) = 0: cos x = 1/√3.", null, 0.0005),
  num("The graph of y = cos² x − cos x on [0, 2π] is shown. Find its minimum value.", -0.25, "y′ = sin x (1 − 2 cos x): min at cos x = ½.", graph((x) => Math.cos(x) ** 2 - Math.cos(x), { xmin: 0, xmax: 2 * PI, ymin: -0.5, ymax: 2.2 }, [P(PI / 3, -0.25), P((5 * PI) / 3, -0.25)], { a: 0, b: 2 * PI, step: { x: 0.5, y: 0.5 } }), 0.0001),
  num(S`For $y=\tan\left(\frac x2\right)$, find $y'\left(\frac\pi2\right)$.`, 1, "½ sec²(π/4)."),
  tf(S`$\frac{d}{dx}\cos(-x)=-\sin x$.`, true, "cos(−x) = cos x."),
  num(S`Find the y-intercept of the tangent to $y=\sin^2x$ at $x=\frac\pi4$ (4 decimals).`, -0.2854, "Point (π/4, ½), slope sin(π/2) = 1.", null, 0.0005),
  num("A particle has s(t) = 2 sin(πt/3) (graph shown). When does its velocity first become 0 (t > 0)?", 1.5, "v = (2π/3) cos(πt/3) = 0 at t = 1.5.", graph((t) => 2 * Math.sin((PI * t) / 3), { xmin: 0, xmax: 6.5, ymin: -2.5, ymax: 2.5 }, [P(1.5, 2)], { a: 0, b: 6.5, step: { x: 0.5, y: 0.5 } }), 0.0001),
  num(S`How many $x$ in $[0,\pi)$ give $y=\sin(2x)$ a slope of 1?`, 2, "2 cos 2x = 1: x = π/6, 5π/6."),
  num(S`For $y=\frac{\sin x}{\cos(2x)}$, find $y'(0)$.`, 1, "(cos x cos 2x + 2 sin x sin 2x)/cos² 2x at 0."),
];
