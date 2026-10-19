// 4.2 Derivatives of the Sine and Cosine Functions — 20 easy + 20 medium questions
import { mc, num, tf, fill, mx } from "./kit.mjs";
import { graph, P } from "./fig.mjs";

const S = String.raw;
const PI = Math.PI;
export const E = [
  mx(S`Differentiate $y=2\sin x$.`, "2*cos(x)", "(sin x)′ = cos x."),
  mx(S`Differentiate $y=-\cos x$.`, "sin(x)", "−(−sin x)."),
  mx(S`Differentiate $y=\sin x+x^3$.`, "cos(x)+3*x^2", "Term by term."),
  num(S`What is the slope of $y=\cos x$ at $x=\frac\pi2$?`, -1, "−sin(π/2)."),
  mc(S`$\frac{d}{dx}\sin x=$`, S`$\cos x$`, [S`$-\cos x$`, S`$\sin x$`, S`$-\sin x$`], "Radians."),
  tf(S`$\frac{d}{dx}\cos x=\sin x$.`, false, "It is −sin x."),
  num(S`For $f(x)=4\sin x$, find $f'(0)$.`, 4, "4 cos 0."),
  num(S`For $f(x)=\sin x-\cos x$, find $f'(0)$.`, 1, "cos x + sin x at 0."),
  fill(S`$\frac{d}{dx}\tan x=$ ___`, ["sec^2 x", "sec^2(x)", "sec²x", "sec² x", "1/cos^2 x"], "From the quotient rule."),
  num(S`Find the fourth derivative of $\sin x$ at $x=\frac\pi2$.`, 1, "The fourth derivative is sin x."),
  mx(S`Differentiate $y=6\cos x$.`, "-6*sin(x)", "6 · (−sin x)."),
  num("The graph of y = 2.5 sin x is shown. What is its slope at x = 0?", 2.5, "2.5 cos 0.", graph((x) => 2.5 * Math.sin(x), { xmin: -PI, xmax: PI, ymin: -2.5, ymax: 2.5 }, [P(0, 0)], { more: [{ f: (x) => 2.5 * x, color: "green", a: -0.9, b: 0.9 }], step: { x: 0.5, y: 0.5 } }), 0.0001),
  num(S`For $y=2x-\sin x$, find $y'(0)$.`, 1, "2 − cos 0."),
  mc(S`What is the second derivative of $\cos x$?`, S`$-\cos x$`, [S`$\cos x$`, S`$\sin x$`, S`$-\sin x$`], "cos → −sin → −cos."),
  num(S`For $f(x)=10\cos x$, find $f'(\pi)$.`, 0, "−10 sin π."),
  tf(S`$\tan x$ is increasing on each interval of its domain.`, true, "sec² x > 0."),
  num(S`For $f(x)=\sin x+\cos x$, find $f'\left(\frac\pi4\right)$.`, 0, "cos(π/4) − sin(π/4)."),
  num("The graph of y = cos x + 1 is shown. What is its slope at x = 3π/2?", 1, "−sin(3π/2) = 1.", graph((x) => Math.cos(x) + 1, { xmin: 0, xmax: 2 * PI, ymin: -0.5, ymax: 2.5 }, [P(1.5 * PI, 1)], { more: [{ f: (x) => 1 + (x - 1.5 * PI), color: "green", a: 1.5 * PI - 0.9, b: 1.5 * PI + 0.9 }], step: { x: 0.5, y: 0.5 } })),
  mx(S`Differentiate $y=\sin x-5x$.`, "cos(x)-5", "cos x − 5."),
  num(S`Find the third derivative of $\cos x$ at $x=0$.`, 0, "The third derivative is sin x."),
];

export const M = [
  mx(S`Differentiate $y=x\sin x$.`, "sin(x)+x*cos(x)", "Product rule."),
  mx(S`Differentiate $y=x^4\sin x$.`, "4*x^3*sin(x)+x^4*cos(x)", "Product rule."),
  num(S`For $f(x)=\frac{x}{\sin x}$, find $f'\left(\frac\pi2\right)$.`, 1, "(sin x − x cos x)/sin² x at π/2: (1 − 0)/1."),
  num(S`Find the y-intercept of the tangent to $y=\cos x$ at $x=0$.`, 1, "Horizontal tangent y = 1."),
  num(S`Find the y-intercept of the tangent to $y=2\sin x$ at $x=\frac\pi2$.`, 2, "Horizontal tangent y = 2."),
  mc(S`$\frac{d}{dx}\sec x=$`, S`$\sec x\tan x$`, [S`$\sec^2x$`, S`$-\sec x\tan x$`, S`$\tan^2x$`], "Quotient rule on 1/cos x."),
  num(S`For $f(x)=\tan x$, find $f'\left(\frac\pi3\right)$.`, 4, "sec²(π/3) = 2² ."),
  num(S`For $f(x)=\sin x\cos x$, find $f'(0)$.`, 1, "cos² x − sin² x at 0."),
  mx(S`Differentiate $y=\frac{\sin x}{x^2}$.`, "(x*cos(x)-2*sin(x))/x^3", "(x² cos x − 2x sin x)/x⁴."),
  num("The graph of y = x − sin x is shown. What is its slope at x = π?", 2, "1 − cos π.", graph((x) => x - Math.sin(x), { xmin: 0, xmax: 2 * PI, ymin: -0.5, ymax: 7 }, [P(PI, PI)], { more: [{ f: (x) => PI + 2 * (x - PI), color: "green", a: PI - 1, b: PI + 1 }], step: { x: 0.5, y: 1 } })),
  num(S`Find the 15th derivative of $\sin x$ at $x=0$.`, -1, "15 = 4 · 3 + 3: −cos x."),
  tf(S`$(\sin x+\cos x)''=-(\sin x+\cos x)$.`, true, "Each term's second derivative is its negative."),
  num(S`How many horizontal tangents does $f(x)=x^2+2\cos x$ have on $[-\pi,\pi]$?`, 1, "f′ = 2(x − sin x) = 0 only at x = 0."),
  num(S`What is the slope of $y=\sec x$ at $x=0$?`, 0, "sec 0 tan 0."),
  num(S`For $f(x)=\sin x\cdot\sin x$, find $f'\left(\frac\pi6\right)$ (4 decimals).`, 0.866, "2 sin x cos x.", null, 0.0005),
  num("The graph of f(x) = x sin x is shown. Find f′(π) (4 decimals).", -3.1416, "sin π + π cos π.", graph((x) => x * Math.sin(x), { xmin: 0, xmax: 2 * PI, ymin: -5, ymax: 3 }, [P(PI, 0)], { step: { x: 0.5, y: 1 } }), 0.0005),
  mc(S`Where on $[0,2\pi]$ does $y=x+2\sin x$ have horizontal tangents?`, S`$x=\frac{2\pi}3,\ \frac{4\pi}3$`, [S`$x=\frac\pi3,\ \frac{5\pi}3$`, S`$x=\frac\pi2,\ \frac{3\pi}2$`, S`$x=\pi$ only`], "1 + 2 cos x = 0."),
  num(S`For $f(x)=\cot x$, find $f'\left(\frac\pi4\right)$.`, -2, "−csc²(π/4)."),
  num(S`For $f(x)=x^2\cos x$, find $f''(0)$.`, 2, "f″ = 2 cos x − 4x sin x − x² cos x."),
  mx(S`Differentiate $y=\sin x\cos x$ using the product rule.`, "cos(x)^2-sin(x)^2", "cos x · cos x + sin x · (−sin x)."),
];
