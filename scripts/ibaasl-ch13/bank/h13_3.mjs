// 13.3 Applications of Derivatives — 20 hard questions
import { mc, ms, num, tf } from "./kit.mjs";
import { planeDoc, P } from "./fig.mjs";

const S = String.raw;
const PI = Math.PI, r3 = (v) => Math.round(v * 1000) / 1000;
const C18 = (-2 + Math.sqrt(12)) / 4, X18 = Math.acos(C18);


export const TOPIC = "13.3 Applications of Derivatives";
export const Q = [
  num(S`A rectangle has its base on the x-axis and top corners on $y=e^{-x^2/2}$ (shown). Find its greatest area (3 d.p.).`, r3(2 * Math.exp(-0.5)), "A = 2xe^{−x²/2}, A′ = 2e^{−x²/2}(1 − x²) = 0 at x = 1.", planeDoc({ view: { xmin: -3, xmax: 3, ymin: -0.1, ymax: 1.2 }, curves: [{ f: (x) => Math.exp(-x * x / 2) }], segs: [{ pts: [[-1, 0], [-1, Math.exp(-0.5)], [1, Math.exp(-0.5)], [1, 0]], color: "amber" }], step: { x: 0.5, y: 0.2 } }), 0.001),
  num("A 5 m ladder leans against a wall at angle θ to the ground. Find the greatest area of the triangle formed by the ladder, wall and ground.", 6.25, "A = ½(5cos θ)(5 sin θ) = 6.25 sin 2θ.", null, 0.001),
  num(S`Find the shortest distance from $(3,0)$ to the curve $y=\sqrt x$ (3 d.p.).`, r3(Math.sqrt(2.75)), "d² = (x − 3)² + x is least at x = 2.5.", null, 0.001),
  num(S`A beam cut from a log has strength $S=8000\cos\theta\sin^2\theta$. Find the θ that maximises S (3 d.p.).`, r3(Math.atan(Math.SQRT2)), "sin θ(2cos²θ − sin²θ) = 0 ⇒ tan²θ = 2.", null, 0.001),
  num(S`Find the y-value of the local maximum of $y=e^x(x^2-3)$ (3 d.p.).`, r3(6 * Math.exp(-3)), "eˣ(x² + 2x − 3) = 0 ⇒ x = −3 (max) or 1.", null, 0.001),
  mc(S`$y=x^4e^{-x}$ has stationary points at $x=0$ and $x=4$. The one at $x=0$ is a:`, "minimum", ["maximum", "point of inflection", "not stationary"], "y ≥ 0 and y(0) = 0."),
  tf(S`$y=\ln x+\frac1x$ has a minimum at $x=1$.`, true, "y′ = 1/x − 1/x², y″(1) = 1 > 0."),
  ms(S`Which are points of inflection of $y=3x+\cos x$ on $[0,2\pi]$? Select all.`, [S`$\frac{\pi}{2}$`, S`$\frac{3\pi}{2}$`, S`$\pi$`, S`$0$`], [0, 1], "y″ = −cos x changes sign at π/2 and 3π/2."),
  num(S`A tangent to $y=e^x$ passes through the origin. Find the x-coordinate of the point of contact.`, 1, "eᵃ = a·eᵃ ⇒ a = 1."),
  num(S`A tangent to $y=\ln x$ passes through the origin. Find the x-coordinate of the point of contact (3 d.p.).`, r3(Math.E), "ln a = a · (1/a) = 1.", null, 0.001),
  num(S`The graph of $y=2\cos x+\sin2x$ is shown. Find its greatest value (3 d.p.).`, r3(1.5 * Math.sqrt(3)), "2 sin²x + sin x − 1 = 0 ⇒ sin x = ½: x = π/6.", planeDoc({ view: { xmin: 0, xmax: 2 * PI, ymin: -3, ymax: 3 }, curves: [{ f: (x) => 2 * Math.cos(x) + Math.sin(2 * x) }], points: [P(PI / 6, 1.5 * Math.sqrt(3), "", "red")], step: { x: PI / 2, y: 1 } }), 0.001),
  num(S`The normal to $y=\ln(2x-1)$ at $x=1$ meets the y-axis at y = ?`, 0.5, "Tangent slope 2, normal y = −½(x − 1).", null, 0.001),
  num(S`A rectangle has one corner at the origin and the opposite corner on $y=8e^{-x}$ (shown). Find its greatest area (3 d.p.).`, r3(8 / Math.E), "A = 8xe^{−x}, max at x = 1.", planeDoc({ view: { xmin: 0, xmax: 5, ymin: 0, ymax: 8.5 }, curves: [{ f: (x) => 8 * Math.exp(-x) }], segs: [{ pts: [[0, 8 / Math.E], [1, 8 / Math.E], [1, 0]], color: "amber" }], step: { x: 1, y: 1 } }), 0.001),
  num(S`A ball's height is $h=20te^{-t/2}$ m. Find its greatest height (3 d.p.).`, r3(40 / Math.E), "h′ = 20e^{−t/2}(1 − t/2) ⇒ t = 2.", null, 0.001),
  num(S`Find the minimum value of $y=e^x+4e^{-x}$.`, 4, "e^{2x} = 4 ⇒ x = ln 2; y = 2 + 2."),
  mc(S`How many stationary points does $y=\sin2x-x$ have on $[0,\pi]$?`, "2", ["1", "3", "4"], "cos 2x = ½: 2x = π/3, 5π/3."),
  num(S`The curve $y=axe^{-x}$ has maximum value 3. Find a (3 d.p.).`, r3(3 * Math.E), "Max at x = 1: a/e = 3.", null, 0.001),
  num(S`The graph of $y=(2+\cos x)\sin x$ on $[0,\pi]$ is shown. Find its greatest value (3 d.p.).`, r3((2 + C18) * Math.sin(X18)), "2cos²x + 2cos x − 1 = 0 ⇒ cos x = (√3 − 1)/2.", planeDoc({ view: { xmin: 0, xmax: PI, ymin: -0.3, ymax: 2.6 }, curves: [{ f: (x) => (2 + Math.cos(x)) * Math.sin(x) }], points: [P(X18, (2 + C18) * Math.sin(X18), "", "red")], step: { x: PI / 4, y: 0.5 } }), 0.001),
  num(S`Find the gradient of the normal to $y=\tan x$ at $x=\frac{\pi}{3}$.`, -0.25, "Tangent slope 1/cos² = 4.", null, 0.001),
  tf(S`$y=\sin x$ has two points of inflection strictly between 0 and $2\pi$.`, false, "Only at x = π."),
];
