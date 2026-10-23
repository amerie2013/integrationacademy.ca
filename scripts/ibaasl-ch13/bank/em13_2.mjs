// 13.2 Derivatives of Trigonometric Functions — 20 easy + 20 medium questions
import { mc, ms, num, tf, fill } from "./kit.mjs";
import { planeDoc, P } from "./fig.mjs";

const S = String.raw;
const PI = Math.PI;

export const E = [
  mc(S`$\frac{d}{dx}\sin x$ equals:`, S`$\cos x$`, [S`$-\cos x$`, S`$\sin x$`, S`$-\sin x$`], "Basic result."),
  mc(S`$\frac{d}{dx}\cos x$ equals:`, S`$-\sin x$`, [S`$\sin x$`, S`$\cos x$`, S`$-\cos x$`], "Basic result."),
  mc(S`$\frac{d}{dx}\tan x$ equals:`, S`$\frac{1}{\cos^2x}$`, [S`$\frac{1}{\sin^2x}$`, S`$-\frac{1}{\cos^2x}$`, S`$\tan^2x$`], "Quotient of sin and cos."),
  mc(S`$\frac{d}{dx}\sin7x$ equals:`, S`$7\cos7x$`, [S`$\cos7x$`, S`$-7\cos7x$`, S`$7\sin7x$`], "Inner derivative 7."),
  mc(S`$\frac{d}{dx}(3\cos x)$ equals:`, S`$-3\sin x$`, [S`$3\sin x$`, S`$-3\cos x$`, S`$3\cos x$`], "Constant multiple."),
  num(S`Find $\frac{dy}{dx}$ at $x=\pi$ for $y=\sin x$.`, -1, "cos π."),
  num(S`Find $\frac{dy}{dx}$ at $x=\frac{\pi}{6}$ for $y=\cos x$.`, -0.5, "−sin(π/6).", null, 0.001),
  num(S`Find $\frac{dy}{dx}$ at $x=0$ for $y=\tan x$.`, 1, "1/cos²0."),
  num(S`Find $\frac{dy}{dx}$ at $x=0$ for $y=4\sin2x$.`, 8, "8 cos 2x."),
  num(S`Find $\frac{dy}{dx}$ at $x=\frac{3\pi}{2}$ for $y=\cos\frac{x}{3}$ (4 d.p.).`, -1 / 3, "−⅓ sin(x/3) = −⅓ sin(π/2).", null, 0.0001),
  tf("The derivative results for sin and cos require x in radians.", true, "In degrees an extra factor π/180 appears."),
  tf(S`$\frac{d}{dx}\cos x=\sin x$.`, false, "It is −sin x."),
  tf(S`The gradient of $y=\tan x$ is never negative.`, true, "1/cos²x > 0."),
  fill(S`$\frac{d}{dx}\sin x=$ ___`, ["cos x", "cosx", "cos(x)"], "Basic result."),
  ms("Which pairings (function → derivative) are correct? Select all.", [S`$\sin x\to\cos x$`, S`$\cos x\to-\sin x$`, S`$\tan x\to\frac{1}{\cos^2x}$`, S`$\cos x\to\sin x$`], [0, 1, 2], "cos x → −sin x."),
  mc("The graph shows y = sin x and its tangent at the origin. The slope of the tangent is:", "1", ["0", "−1", "π"], "cos 0 = 1.", planeDoc({ view: { xmin: -PI, xmax: PI, ymin: -1.6, ymax: 1.6 }, curves: [{ f: Math.sin }], lines: [{ m: 1, b: 0, color: "amber", dash: true }], points: [P(0, 0, "", "red")], step: { x: PI / 2, y: 0.5 } })),
  mc("The graph shows y = cos x. At which x in (0, 2π) is its gradient −1?", S`$\frac{\pi}{2}$`, [S`$\pi$`, S`$\frac{3\pi}{2}$`, S`$0$`], "−sin x = −1.", planeDoc({ view: { xmin: 0, xmax: 2 * PI, ymin: -1.6, ymax: 1.6 }, curves: [{ f: Math.cos }], step: { x: PI / 2, y: 0.5 } })),
  num(S`Find $\frac{dy}{dx}$ at $x=0$ for $y=x-\cos x$.`, 1, "1 + sin x."),
  num(S`Find $\frac{dy}{dx}$ at $x=\frac{\pi}{4}$ for $y=\sin x-\cos x$ (3 d.p.).`, Math.round(Math.SQRT2 * 1000) / 1000, "cos x + sin x = √2.", null, 0.001),
  mc(S`$\frac{d}{dx}\sin\left(x+\frac{\pi}{3}\right)$ equals:`, S`$\cos\left(x+\frac{\pi}{3}\right)$`, [S`$\cos x$`, S`$\frac{\pi}{3}\cos x$`, S`$-\cos\left(x+\frac{\pi}{3}\right)$`], "Inner derivative 1."),
];

export const M = [
  num(S`Find $\frac{dy}{dx}$ at $x=\frac{\pi}{4}$ for $y=\sin^2(2x)$.`, 0, "2 sin 2x · 2cos 2x = 2 sin 4x.", null, 0.001),
  num(S`Find $\frac{dy}{dx}$ at $x=0$ for $y=x\cos x$.`, 1, "cos x − x sin x."),
  num(S`Find $\frac{dy}{dx}$ at $x=0$ for $y=e^{3\sin x}$.`, 3, "3cos x e^{3 sin x}."),
  num(S`Find $\frac{dy}{dx}$ at $x=\frac{\pi}{2}$ for $y=\tan\frac x2$.`, 1, "½ · 1/cos²(π/4) = ½ · 2."),
  num(S`Find $\frac{dy}{dx}$ at $x=\frac{\pi}{3}$ for $y=\cos^3x$ (4 d.p.).`, -3 * 0.25 * (Math.sqrt(3) / 2), "−3cos²x sin x.", null, 0.0001),
  num(S`Find $\frac{dy}{dx}$ at $x=0$ for $y=\sin x\cos x$.`, 1, "cos²x − sin²x = cos 2x."),
  mc(S`$\frac{d}{dx}\ln(\cos2x)$ equals:`, S`$-2\tan2x$`, [S`$2\tan2x$`, S`$-\tan2x$`, S`$\frac{1}{\cos2x}$`], "−2 sin 2x / cos 2x."),
  mc(S`$\frac{d}{dx}\sin(x^2)$ equals:`, S`$2x\cos(x^2)$`, [S`$\cos(x^2)$`, S`$2\sin x\cos x$`, S`$\cos(2x)$`], "Chain rule."),
  mc(S`$\frac{d}{dx}(\tan x-x)$ equals:`, S`$\tan^2x$`, [S`$\frac{1}{\cos^2x}$`, S`$\tan x$`, S`$-\sin^2x$`], "1/cos²x − 1."),
  tf(S`$\frac{d}{dx}\sin2x=2\cos x$.`, false, "It is 2 cos 2x."),
  tf(S`The second derivative of $\cos x$ is $-\cos x$.`, true, "cos → −sin → −cos."),
  num(S`Find $\frac{dy}{dx}$ at $x=0$ for $y=3\sin2x+4\cos2x$.`, 6, "6 cos 2x − 8 sin 2x."),
  num(S`Find the gradient of $y=x^2\sin x$ at $x=\pi$ (3 d.p.).`, -(PI ** 2), "2x sin x + x² cos x.", null, 0.001),
  num(S`Find $\frac{dy}{dx}$ at $x=0$ for $y=\frac{\sin x}{\cos x+2}$ (4 d.p.).`, 1 / 3, "(cos x(cos x + 2) + sin²x)/(cos x + 2)².", null, 0.0001),
  ms(S`Which are stationary points of $y=\sin2x$ in $[0,\pi]$? Select all.`, [S`$\frac{\pi}{4}$`, S`$\frac{\pi}{2}$`, S`$\frac{3\pi}{4}$`, S`$\pi$`], [0, 2], "2 cos 2x = 0."),
  mc("The graph shows y = 2 sin x + cos x. Its gradient at x = 0 is:", "2", ["1", "0", "−1"], "2cos 0 − sin 0.", planeDoc({ view: { xmin: -PI, xmax: PI, ymin: -2.5, ymax: 2.5 }, curves: [{ f: (x) => 2 * Math.sin(x) + Math.cos(x) }], points: [P(0, 1, "", "red")], step: { x: PI / 2, y: 0.5 } })),
  mc("The graph shows y = 2cos x − x. Its stationary points in [0, 2π] are at:", S`$\frac{7\pi}{6},\frac{11\pi}{6}$`, [S`$\frac{\pi}{6},\frac{5\pi}{6}$`, S`$\frac{\pi}{3},\frac{5\pi}{3}$`, S`$\frac{2\pi}{3},\frac{4\pi}{3}$`], "−2 sin x − 1 = 0.", planeDoc({ view: { xmin: 0, xmax: 2 * PI, ymin: -8, ymax: 3 }, curves: [{ f: (x) => 2 * Math.cos(x) - x }], step: { x: PI / 2, y: 1 } })),
  num(S`Find $\frac{dy}{dx}$ at $x=0$ for $y=e^{-x}\cos x$.`, -1, "e^{−x}(−cos x − sin x)."),
  num(S`Find $\frac{dy}{dx}$ at $x=1$ for $y=\sin(\pi x)$ (3 d.p.).`, -PI, "π cos(πx).", null, 0.001),
  num(S`Find $\frac{dy}{dx}$ at $x=\frac{\pi}{6}$ for $y=\frac{1}{\sin x}$ (3 d.p.).`, -2 * Math.sqrt(3), "−cos x / sin²x.", null, 0.001),
];
