// 4.3 Differentiation Rules for Sinusoidal Functions — 20 easy + 20 medium questions
import { mc, num, tf, fill, mx } from "./kit.mjs";
import { graph, P } from "./fig.mjs";

const S = String.raw;
const PI = Math.PI;
export const E = [
  mx(S`Differentiate $y=\sin(2x)$.`, "2*cos(2*x)", "Inner derivative 2."),
  mx(S`Differentiate $y=\cos(5x)$.`, "-5*sin(5*x)", "−sin(5x) · 5."),
  num(S`For $y=\sin(3x)$, find $y'(0)$.`, 3, "3 cos 0."),
  num(S`For $y=\cos(4x)$, find $y'(0)$.`, 0, "−4 sin 0."),
  mc(S`$\frac{d}{dx}\sin(kx)=$`, S`$k\cos(kx)$`, [S`$\cos(kx)$`, S`$-k\cos(kx)$`, S`$k\sin(kx)$`], "Chain rule."),
  tf(S`$\frac{d}{dx}\sin(2x)=\cos(2x)$.`, false, "Missing the factor 2."),
  mx(S`Differentiate $y=\sin(x+1)$.`, "cos(x+1)", "Inner derivative 1."),
  num(S`What is the greatest slope of $y=4\sin(3x)-2$?`, 12, "|Ak| = 4 · 3."),
  fill(S`$\sin^2x$ means (___)$^2$.`, ["sin x", "sin(x)", "sinx"], "A power of sine."),
  num(S`For $y=\sin\left(\frac x4\right)$, find $y'(0)$.`, 0.25, "¼ cos 0.", null, 0.0001),
  mx(S`Differentiate $y=\sin(x^3)$.`, "3*x^2*cos(x^3)", "cos(x³) · 3x²."),
  num("The graph of y = sin(2x) is shown. What is its slope at x = 0?", 2, "2 cos 0.", graph((x) => Math.sin(2 * x), { xmin: -PI, xmax: PI, ymin: -1.5, ymax: 1.5 }, [P(0, 0)], { more: [{ f: (x) => 2 * x, color: "green", a: -0.6, b: 0.6 }], step: { x: 0.5, y: 0.5 } })),
  num(S`For $y=\sin^2(5x)$, find $y'(0)$.`, 0, "10 sin 5x cos 5x at 0."),
  mc(S`$\frac{d}{dx}\cos^2x=$`, S`$-2\sin x\cos x$`, [S`$2\cos x$`, S`$-2\cos x$`, S`$2\sin x\cos x$`], "2 cos x · (−sin x)."),
  num(S`For $y=2\cos(3x)$, find $y'\left(\frac\pi6\right)$.`, -6, "−6 sin(π/2)."),
  tf("A vertical shift d changes the derivative of A sin(kx) + d.", false, "d has derivative 0."),
  num(S`Find the period of $y=\sin(4x)$ (4 decimals).`, 1.5708, "2π/4.", null, 0.0005),
  num("The graph of y = cos(2x) is shown. What is its slope at x = π/4?", -2, "−2 sin(π/2).", graph((x) => Math.cos(2 * x), { xmin: 0, xmax: PI, ymin: -1.5, ymax: 1.5 }, [P(PI / 4, 0)], { more: [{ f: (x) => -2 * (x - PI / 4), color: "green", a: 0.3, b: 1.3 }], step: { x: 0.25, y: 0.5 } })),
  mx(S`Differentiate $y=-\sin(6x)$.`, "-6*cos(6*x)", "−cos(6x) · 6."),
  num(S`For $y=\sin\left(\frac{\pi x}{2}\right)$, find $y'(0)$ (4 decimals).`, 1.5708, "(π/2) cos 0.", null, 0.0005),
];

export const M = [
  mx(S`Differentiate $y=\cos^2(3x)$.`, "-6*cos(3*x)*sin(3*x)", "2 cos(3x) · (−sin(3x)) · 3."),
  mx(S`Differentiate $y=x\sin(2x)$.`, "sin(2*x)+2*x*cos(2*x)", "Product and chain."),
  num(S`For $y=\sin(2x)\cos(2x)$, find $y'(0)$.`, 2, "It equals ½ sin(4x); derivative 2 cos(4x)."),
  num(S`For $y=\sqrt{1+\sin x}$, find $y'(0)$.`, 0.5, "cos x/(2√(1 + sin x)).", null, 0.0001),
  num(S`For $y=\sin(2x^2)$, find $y'\left(\sqrt{\pi/2}\right)$ (4 decimals).`, -5.0133, "4x cos(2x²) at √(π/2): 4√(π/2) cos π.", null, 0.0005),
  mc(S`$\frac{d}{dx}\tan(3x)=$`, S`$3\sec^2(3x)$`, [S`$\sec^2(3x)$`, S`$3\tan^2(3x)$`, S`$\sec^2(x)$`], "Inner derivative 3."),
  num(S`Find the y-intercept of the tangent to $y=\cos(2x)$ at $x=\frac\pi4$ (4 decimals).`, 1.5708, "Point (π/4, 0), slope −2: y = −2x + π/2.", null, 0.0005),
  num(S`For $y=5\cos\left(\frac{\pi x}2\right)+1$, find $y'(1)$ (3 decimals).`, -7.854, "−(5π/2) sin(π/2).", null, 0.002),
  num(S`For $y=\cos^3x$, find $y'\left(\frac\pi3\right)$ (4 decimals).`, -0.6495, "−3 cos² x sin x.", null, 0.0005),
  num("The graph of y = 2 sin(x/2) is shown. What is its slope at x = 0?", 1, "2 · ½ cos 0.", graph((x) => 2 * Math.sin(x / 2), { xmin: -2 * PI, xmax: 2 * PI, ymin: -2.5, ymax: 2.5 }, [P(0, 0)], { more: [{ f: (x) => x, color: "green", a: -1.2, b: 1.2 }], step: { x: 1, y: 0.5 } })),
  tf(S`$\sin^2x$ and $\sin(x^2)$ have the same derivative.`, false, "2 sin x cos x versus 2x cos(x²)."),
  num(S`What is the greatest slope of $y=-3\cos(4x)+7$?`, 12, "|Ak| = 3 · 4."),
  num(S`For $y=\tan(\sin x)$, find $y'(0)$.`, 1, "sec²(sin x) cos x at 0."),
  num(S`For $y=\sin(3x+\pi)$, find $y'(0)$.`, -3, "3 cos π."),
  mc(S`The greatest slope of $y=A\sin(kx)$ is:`, S`$|Ak|$`, [S`$|A|$`, S`$|k|$`, S`$|A|+|k|$`], "Derivative Ak cos(kx)."),
  num(S`For $y=\sec(2x)$, find $y'\left(\frac\pi8\right)$ (4 decimals).`, 2.8284, "2 sec(2x) tan(2x) at π/8.", null, 0.0005),
  num("The graph of y = sin x + sin(2x) is shown. What is its slope at x = 0?", 3, "cos x + 2 cos(2x) at 0.", graph((x) => Math.sin(x) + Math.sin(2 * x), { xmin: -PI, xmax: PI, ymin: -2.2, ymax: 2.2 }, [P(0, 0)], { more: [{ f: (x) => 3 * x, color: "green", a: -0.5, b: 0.5 }], step: { x: 0.5, y: 0.5 } })),
  num(S`For $y=\tan^2x$, find $y'\left(\frac\pi4\right)$.`, 4, "2 tan x sec² x."),
  mx(S`Differentiate $y=\frac{\sin(4x)}{4}$.`, "cos(4*x)", "¼ · 4 cos(4x)."),
  num(S`For $y=\sin x\cos(3x)$, find $y'(0)$.`, 1, "cos x cos 3x − 3 sin x sin 3x at 0."),
];
