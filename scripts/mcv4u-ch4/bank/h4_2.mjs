// 4.2 Derivatives of the Sine and Cosine Functions — 20 hard questions
import { mc, num, tf } from "./kit.mjs";
import { graph, P } from "./fig.mjs";

const S = String.raw;
const PI = Math.PI;
export const TOPIC = "4.2 Derivatives of the Sine and Cosine Functions";
export const Q = [
  num("The graph of y = x + 2 sin x on [0, 2π] is shown. Find its local maximum value (4 decimals).", 3.8264, "1 + 2 cos x = 0 at 2π/3: 2π/3 + √3.", graph((x) => x + 2 * Math.sin(x), { xmin: 0, xmax: 2 * PI, ymin: -0.5, ymax: 7 }, [P((2 * PI) / 3, (2 * PI) / 3 + Math.sqrt(3)), P((4 * PI) / 3, (4 * PI) / 3 - Math.sqrt(3))], { a: 0, b: 2 * PI, step: { x: 0.5, y: 1 } }), 0.0005),
  num(S`Find the y-intercept of the tangent to $y=x\cos x$ at $x=\pi$.`, 0, "y(π) = −π; slope cos π − π sin π = −1; y = −x."),
  num(S`For $f(x)=\frac{\sin x}{1-\cos x}$, find $f'\left(\frac\pi2\right)$.`, -1, "f′ simplifies to −1/(1 − cos x)."),
  mc(S`$\frac{d}{dx}\csc x=$`, S`$-\csc x\cot x$`, [S`$\csc x\cot x$`, S`$-\csc^2x$`, S`$\sec x\tan x$`], "Quotient rule on 1/sin x."),
  num(S`Find the maximum value of $y=5\sin x+12\cos x$.`, 13, "5 cos x = 12 sin x: tan x = 5/12, giving 25/13 + 144/13."),
  num("The graph of y = sin x − cos x is shown. At what x in [0, 2π] is it largest? (4 decimals)", 2.3562, "cos x + sin x = 0: x = 3π/4.", graph((x) => Math.sin(x) - Math.cos(x), { xmin: 0, xmax: 2 * PI, ymin: -1.7, ymax: 1.7 }, [P((3 * PI) / 4, Math.SQRT2)], { a: 0, b: 2 * PI, step: { x: 0.5, y: 0.5 } }), 0.0005),
  tf(S`$\frac{d}{dx}\tan x=1+\tan^2x$.`, true, "sec² x = 1 + tan² x."),
  num(S`Find the 100th derivative of $\cos x$ at $x=0$.`, 1, "100 is a multiple of 4."),
  num(S`For $f(x)=x\sin(2x)$, find $f''(0)$.`, 4, "f″ = 4 cos 2x − 4x sin 2x."),
  num("The tangent to y = tan x at x = π/4 is drawn. Find its y-intercept (4 decimals).", -0.5708, "Slope sec²(π/4) = 2 through (π/4, 1).", graph(Math.tan, { xmin: -1.4, xmax: 1.4, ymin: -3, ymax: 3 }, [P(PI / 4, 1)], { a: -1.35, b: 1.35, more: [{ f: (x) => 1 + 2 * (x - PI / 4), color: "green", a: -0.3, b: 1.4 }], step: { x: 0.5, y: 1 } }), 0.0005),
  num(S`How many horizontal tangents does $y=\frac x2+\sin x$ have on $[0,2\pi]$?`, 2, "½ + cos x = 0."),
  mc(S`The derivative of $\sin x\cos x$ equals:`, S`$\cos2x$`, [S`$\sin2x$`, S`$-\sin2x$`, S`$2\cos x$`], "cos² x − sin² x."),
  num(S`For $f(x)=\sec x+\tan x$, find $f'(0)$.`, 1, "sec x tan x + sec² x at 0."),
  num("The graph of f(x) = cos x/(2 + sin x) is shown. Find its maximum value (4 decimals).", 0.5774, "Numerator of f′: −(2 sin x + 1); max at x = 11π/6.", graph((x) => Math.cos(x) / (2 + Math.sin(x)), { xmin: 0, xmax: 2 * PI, ymin: -0.8, ymax: 0.8 }, [P((11 * PI) / 6, 1 / Math.sqrt(3)), P((7 * PI) / 6, -1 / Math.sqrt(3))], { a: 0, b: 2 * PI, step: { x: 0.5, y: 0.2 } }), 0.0005),
  num(S`The tangent to $y=\sin x$ at $x=a$, with $\pi\lt a\lt\frac{3\pi}2$, passes through the origin. Find $a$ (4 decimals).`, 4.4934, "sin a = a cos a ⇒ tan a = a.", null, 0.001),
  tf(S`If $f''=-f$, $f(0)=0$ and $f'(0)=1$, then $f(x)=\sin x$ is consistent with all three conditions.`, true, "sin″ = −sin, sin 0 = 0, cos 0 = 1."),
  num(S`For $f(x)=(x^2+1)\sin x$, find $f'(0)$.`, 1, "2x sin x + (x² + 1) cos x at 0."),
  num(S`For $f(x)=\cos x\cdot\cos x$, find $f'\left(\frac\pi4\right)$.`, -1, "−2 cos x sin x."),
  num("The graph of y = x cos x on [0, π/2] is shown. At what x is it largest? (4 decimals)", 0.8603, "cos x − x sin x = 0.", graph((x) => x * Math.cos(x), { xmin: 0, xmax: 1.7, ymin: -0.1, ymax: 0.7 }, [P(0.8603, 0.8603 * Math.cos(0.8603))], { a: 0, b: PI / 2, step: { x: 0.25, y: 0.1 } }), 0.0005),
  num(S`What is the derivative of $\sec^2x-\tan^2x$?`, 0, "The expression equals 1 everywhere it is defined."),
];
