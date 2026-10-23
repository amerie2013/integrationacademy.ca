// 13.2 Derivatives of Trigonometric Functions — 20 hard questions
import { mc, ms, num, tf } from "./kit.mjs";
import { planeDoc, P } from "./fig.mjs";

const S = String.raw;
const PI = Math.PI, r3 = (v) => Math.round(v * 1000) / 1000;
const X16 = Math.acos((-1 + Math.sqrt(33)) / 8);

export const TOPIC = "13.2 Derivatives of Trigonometric Functions";
export const Q = [
  num(S`The graph of $y=x+2\sin x$ for $0\le x\le2\pi$ is shown. Find the y-value of its local maximum (3 d.p.).`, r3((2 * PI) / 3 + Math.sqrt(3)), "1 + 2cos x = 0 ⇒ x = 2π/3 (y″ < 0).", planeDoc({ view: { xmin: 0, xmax: 2 * PI, ymin: -1, ymax: 7 }, curves: [{ f: (x) => x + 2 * Math.sin(x) }], points: [P((2 * PI) / 3, (2 * PI) / 3 + Math.sqrt(3), "", "red"), P((4 * PI) / 3, (4 * PI) / 3 - Math.sqrt(3), "", "blue")], step: { x: PI / 3, y: 1 } }), 0.001),
  num(S`Find the minimum value of $y=\cos2x-2\sin x$ for $0\le x\le2\pi$.`, -3, "y′ = −2cos x(2 sin x + 1); x = π/2 gives −1 − 2."),
  num(S`Find the smallest positive x where $y=x-\sin2x$ has a stationary point (3 d.p.).`, r3(PI / 6), "1 − 2cos 2x = 0 ⇒ 2x = π/3.", null, 0.001),
  num(S`The tangent to $y=\tan x$ at $x=\frac{\pi}{4}$ meets the y-axis at y = ? (3 d.p.)`, r3(1 - PI / 2), "Slope 2: y = 2x + 1 − π/2.", null, 0.001),
  mc(S`$\frac{d^2}{dx^2}\cos^2x$ equals:`, S`$-2\cos2x$`, [S`$2\cos2x$`, S`$-2\sin2x$`, S`$-\sin2x$`], "First derivative −sin 2x."),
  num(S`Find $\frac{dy}{dx}$ at $x=\frac{\pi}{6}$ for $y=\cos(\sin x)$ (4 d.p.).`, Math.round(-Math.sin(0.5) * Math.cos(PI / 6) * 10000) / 10000, "−sin(sin x)·cos x.", null, 0.0001),
  num(S`Find $\frac{dy}{dx}$ at $x=\frac{\pi}{4}$ for $y=\sin^4x-\cos^4x$.`, 2, "y = −cos 2x, y′ = 2 sin 2x."),
  tf(S`$y=2x-\sin2x$ is increasing for all x.`, true, "y′ = 2 − 2cos 2x ≥ 0."),
  ms(S`Which functions satisfy $y''=-4y$? Select all.`, [S`$\sin2x$`, S`$\cos2x$`, S`$3\sin2x$`, S`$\sin4x$`], [0, 1, 2], "sin 4x gives −16y."),
  num("The graph of y = 3 sin x − 4 cos x is shown. Find its gradient where it crosses the y-axis.", 3, "3cos x + 4 sin x at x = 0.", planeDoc({ view: { xmin: -PI, xmax: 2 * PI, ymin: -5.5, ymax: 5.5 }, curves: [{ f: (x) => 3 * Math.sin(x) - 4 * Math.cos(x) }], points: [P(0, -4, "", "red")], step: { x: PI / 2, y: 1 } })),
  num(S`A particle moves with $x=2\sin3t+\cos3t$. Find its acceleration at $t=0$.`, -9, "a = −18 sin 3t − 9cos 3t."),
  num(S`Find the greatest gradient of $y=\sin2x+\cos2x$ (3 d.p.).`, r3(2 * Math.SQRT2), "y′ = 2cos 2x − 2 sin 2x has maximum 2√2.", null, 0.001),
  num(S`The graph of $y=e^{-x/2}\sin x$ is shown. Find the x-coordinate of its first stationary point (3 d.p.).`, r3(Math.atan(2)), "e^{−x/2}(cos x − ½ sin x) = 0 ⇒ tan x = 2.", planeDoc({ view: { xmin: 0, xmax: 2 * PI, ymin: -0.3, ymax: 0.6 }, curves: [{ f: (x) => Math.exp(-x / 2) * Math.sin(x) }], points: [P(Math.atan(2), Math.exp(-Math.atan(2) / 2) * Math.sin(Math.atan(2)), "", "red")], step: { x: PI / 2, y: 0.1 } }), 0.001),
  num(S`Find $\frac{dy}{dx}$ at $x=\frac{\pi}{4}$ for $y=\tan^2x$.`, 4, "2 tan x / cos²x = 2 · 1 · 2."),
  num(S`The normal to $y=2\sin x$ at $x=\frac{\pi}{3}$ meets the x-axis at x = ? (3 d.p.)`, r3(PI / 3 + Math.sqrt(3)), "Tangent slope 1, so the normal is y = −x + π/3 + √3.", null, 0.001),
  num(S`The graph of $y=\sin x+\sin2x$ on $[0,\pi]$ is shown. Find the x-coordinate of its maximum (3 d.p.).`, r3(X16), "cos x + 2cos 2x = 0 ⇒ 4c² + c − 2 = 0, c = (−1 + √33)/8.", planeDoc({ view: { xmin: 0, xmax: PI, ymin: -1, ymax: 2 }, curves: [{ f: (x) => Math.sin(x) + Math.sin(2 * x) }], points: [P(X16, Math.sin(X16) + Math.sin(2 * X16), "", "red")], step: { x: PI / 4, y: 0.5 } }), 0.001),
  mc(S`$\frac{d}{dx}(\sin x)^{-1}$ equals:`, S`$-\frac{\cos x}{\sin^2x}$`, [S`$\frac{\cos x}{\sin^2x}$`, S`$-\frac{1}{\cos x}$`, S`$-\frac{1}{\sin^2x}$`], "Chain rule with u⁻¹."),
  num(S`Find $\frac{dy}{dx}$ at $x=0$ for $y=\sin(e^x)$ (4 d.p.).`, Math.round(Math.cos(1) * 10000) / 10000, "eˣ cos(eˣ) = cos 1.", null, 0.0001),
  num(S`Find $\frac{dy}{dx}$ at $x=0$ for $y=e^{\tan x}$.`, 1, "e^{tan x}/cos²x."),
  tf(S`If x is measured in degrees, $\frac{d}{dx}\sin x=\cos x$.`, false, "An extra factor π/180 appears."),
];
