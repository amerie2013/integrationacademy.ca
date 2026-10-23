// 13.5 Integration by Substitution — 20 hard questions
import { mc, ms, num, tf } from "./kit.mjs";
import { areaDoc } from "../figs13.mjs";

const S = String.raw;
const PI = Math.PI, E = Math.E, r3 = (v) => Math.round(v * 1000) / 1000;
const shade = (view, step, f, a, b, extra = {}) => areaDoc({ view, step, curves: [{ f, color: "violet" }], ...extra }, [{ f, g: extra.g, a, b, color: "green" }]);

export const TOPIC = "13.5 Integration by Substitution";
export const Q = [
  num(S`Find the shaded area under $y=x\sqrt{9-x^2}$ from 0 to 3.`, 9, "u = 9 − x²: ½∫₀⁹ √u du = ⅓ · 27.", shade({ xmin: -0.2, xmax: 3.3, ymin: -0.2, ymax: 5 }, { x: 0.5, y: 1 }, (x) => x * Math.sqrt(Math.max(0, 9 - x * x)), 0, 3)),
  num(S`Evaluate $\int_0^1x(x+1)^4dx$ using $u=x+1$.`, 4.3, "∫₁² (u − 1)u⁴ du = [u⁶/6 − u⁵/5].", null, 0.001),
  num(S`Evaluate $\int_0^4x\sqrt{2x+1}\,dx$ (3 d.p.).`, r3(0.25 * ((0.4 * 243 - (2 / 3) * 27) - (0.4 - 2 / 3))), "u = 2x + 1: ¼∫₁⁹ (u − 1)√u du.", null, 0.001),
  num(S`Find the area enclosed by $y=\frac{2x}{x^2+1}$ and $y=x$ for $0\le x\le1$ (shaded) (3 d.p.).`, r3(Math.log(2) - 0.5), "∫(2x/(x² + 1) − x) dx = ln 2 − ½.", shade({ xmin: -0.1, xmax: 1.6, ymin: -0.1, ymax: 1.2 }, { x: 0.25, y: 0.2 }, (x) => (2 * x) / (x * x + 1), 0, 1, { g: (x) => x, lines: [{ m: 1, b: 0, color: "amber" }] }), 0.001),
  mc(S`With $u=\cos x$, $\int\sin^3x\cos^2x\,dx$ becomes:`, S`$-\int(1-u^2)u^2\,du$`, [S`$\int(1-u^2)u^2\,du$`, S`$-\int u^5\,du$`, S`$\int u^2\,du$`], "sin³x = sin x(1 − cos²x), du = −sin x dx."),
  num(S`Evaluate $\int_0^{\pi/4}\frac{\sin x}{\cos^3x}dx$.`, 0.5, "u = cos x: [1/(2u²)] from 1 to 1/√2.", null, 0.001),
  tf(S`$\int\frac{1}{x\ln x}dx=\ln|\ln x|+C$.`, true, "u = ln x, du = dx/x."),
  ms(S`Which integrals can be found with $u=\sin x$? Select all.`, [S`$\cos x\sin^6x$`, S`$\frac{\cos x}{\sin^2x}$`, S`$\sin x\cos x$`, S`$\sin^2x$`], [0, 1, 2], "cos x dx must be present."),
  num(S`Find $k>1$ with $\int_1^k\frac{\ln x}{x}dx=2$ (3 d.p.).`, r3(E * E), "½(ln k)² = 2 ⇒ ln k = 2.", null, 0.001),
  num(S`Find the shaded area under $y=\frac{e^x}{e^x+1}$ from 0 to $\ln7$ (3 d.p.).`, r3(Math.log(4)), "ln(eˣ + 1) from 2 to 8.", shade({ xmin: -0.2, xmax: 2.5, ymin: 0, ymax: 1.1 }, { x: 0.5, y: 0.2 }, (x) => Math.exp(x) / (Math.exp(x) + 1), 0, Math.log(7)), 0.001),
  num(S`Evaluate $\int_0^{\pi/2}\cos x(1+\sin x)^3dx$.`, 3.75, "u = 1 + sin x from 1 to 2: [u⁴/4].", null, 0.001),
  num(S`Evaluate $\int_0^1\frac{e^{2x}}{e^{2x}+3}dx$ (3 d.p.).`, r3(0.5 * Math.log((E * E + 3) / 4)), "½ ln(e^{2x} + 3).", null, 0.001),
  num(S`Find the shaded area under $y=\sin x\cos^3x$ from 0 to $\frac{\pi}{2}$.`, 0.25, "u = cos x: ∫₀¹ u³ du.", shade({ xmin: 0, xmax: PI / 2, ymin: -0.02, ymax: 0.4 }, { x: PI / 8, y: 0.1 }, (x) => Math.sin(x) * Math.cos(x) ** 3, 0, PI / 2), 0.001),
  num(S`The area under $y=x^3e^{-x^4}$ from 0 to k is 0.1. Find k (3 d.p.).`, r3(Math.log(5 / 3) ** 0.25), "¼(1 − e^{−k⁴}) = 0.1 ⇒ e^{−k⁴} = 0.6.", null, 0.001),
  mc(S`Which substitution turns $\int x(3x-1)^7dx$ into an integral of powers of u?`, S`$u=3x-1$`, [S`$u=x$`, S`$u=(3x-1)^7$`, S`$u=3x$`], "Then x = (u + 1)/3."),
  num(S`Evaluate $\int_0^1(x+1)e^{x^2+2x}dx$ (3 d.p.).`, r3((E ** 3 - 1) / 2), "u = x² + 2x, du = 2(x + 1) dx.", null, 0.001),
  num(S`Find the shaded area under $y=\frac{\ln x}{x}$ from 1 to $e^2$.`, 2, "½(ln x)² from 0 to 2.", shade({ xmin: 0.5, xmax: 8, ymin: -0.1, ymax: 0.45 }, { x: 1, y: 0.1 }, (x) => Math.log(x) / x, 1, E * E)),
  num(S`Find the average value of $\frac{2x}{x^2+4}$ on $[0,2]$ (3 d.p.).`, r3(Math.log(2) / 2), "½ ln(x² + 4) from 0 to 2: ½ ln 2.", null, 0.001),
  tf(S`$\int_0^{\pi}\sin x\cos x\,dx=0$.`, true, "u = sin x runs from 0 back to 0."),
  num(S`Evaluate $\int_1^2\frac{e^{1/x}}{x^2}dx$ (3 d.p.).`, r3(E - Math.exp(0.5)), "u = 1/x, du = −dx/x².", null, 0.001),
];
