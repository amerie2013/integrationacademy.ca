// 13.5 Integration by Substitution — 20 easy + 20 medium questions
import { mc, ms, num, tf, fill } from "./kit.mjs";
import { areaDoc } from "../figs13.mjs";

const S = String.raw;
const PI = Math.PI, E = Math.E, r3 = (v) => Math.round(v * 1000) / 1000;
const shade = (view, step, f, a, b) => areaDoc({ view, step, curves: [{ f, color: "violet" }] }, [{ f, a, b, color: "green" }]);

export const E_ = [
  mc(S`For $\int2x(x^2+9)^5dx$ the best substitution is $u=$`, S`$x^2+9$`, [S`$2x$`, S`$(x^2+9)^5$`, S`$x$`], "The inside of the bracket."),
  mc(S`For $\int3x^2\cos(x^3)\,dx$ the best substitution is $u=$`, S`$x^3$`, [S`$3x^2$`, S`$\cos(x^3)$`, S`$x$`], "Its derivative 3x² is present."),
  mc(S`If $u=x^2+1$, then $du$ equals:`, S`$2x\,dx$`, [S`$x\,dx$`, S`$2\,dx$`, S`$(x^2+1)\,dx$`], "Differentiate u."),
  mc(S`$\int2x(x^2+9)^5dx$ equals:`, S`$\frac16(x^2+9)^6+C$`, [S`$(x^2+9)^6+C$`, S`$\frac{x^2}{6}(x^2+9)^6+C$`, S`$10x(x^2+9)^4+C$`], "∫u⁵ du."),
  mc(S`$\int\frac{g'(x)}{g(x)}dx$ equals:`, S`$\ln|g(x)|+C$`, [S`$\frac{1}{g(x)}+C$`, S`$g'(x)\ln x+C$`, S`$\frac{g(x)^2}{2}+C$`], "Log pattern."),
  num(S`Evaluate $\int_0^12xe^{x^2}dx$ (3 d.p.).`, r3(E - 1), "u = x² from 0 to 1.", null, 0.001),
  num(S`Evaluate $\int_0^1\frac{4x^3}{x^4+1}dx$ (3 d.p.).`, r3(Math.log(2)), "ln(x⁴ + 1).", null, 0.001),
  num(S`Evaluate $\int_0^{\pi/2}\cos x\sin^2x\,dx$ (4 d.p.).`, 1 / 3, "u = sin x: [u³/3].", null, 0.0001),
  num(S`Evaluate $\int_0^16x(3x^2+1)\,dx$.`, 7.5, "u = 3x² + 1 from 1 to 4: [u²/2].", null, 0.001),
  num(S`Evaluate $\int_0^{\sqrt3}\frac{x}{\sqrt{x^2+1}}dx$.`, 1, "[√(x² + 1)] = 2 − 1."),
  tf(S`$\int2x\cos(x^2)\,dx=\sin(x^2)+C$.`, true, "u = x²."),
  tf(S`$\int e^{x^2}dx=\frac{e^{x^2}}{2x}+C$.`, false, "Differentiating the right side does not give e^{x²}."),
  tf("In a definite integral, a substitution changes the limits.", true, "Use u-values."),
  fill(S`$\int\frac{2x}{x^2+5}dx=$ ___$(x^2+5)+C$`, ["ln"], "Log pattern."),
  ms(S`Which can be integrated with $u=x^2+1$? Select all.`, [S`$2x(x^2+1)^4$`, S`$xe^{x^2+1}$`, S`$e^{x^2+1}$`, S`$\frac{1}{x^2+1}$`], [0, 1], "The factor x must be present."),
  mc(S`The shaded area under $y=\frac{2x}{(x^2+1)^2}$ from 0 to 1 is:`, S`$\frac12$`, ["1", S`$\ln2$`, S`$\frac14$`], "[−1/(x² + 1)] = −½ + 1.", shade({ xmin: -0.2, xmax: 2, ymin: -0.05, ymax: 0.8 }, { x: 0.5, y: 0.1 }, (x) => (2 * x) / (x * x + 1) ** 2, 0, 1)),
  mc(S`The shaded area under $y=\cos x\sqrt{\sin x}$ from 0 to $\frac{\pi}{2}$ is:`, S`$\frac23$`, ["1", S`$\frac12$`, S`$\frac32$`], "u = sin x: ∫₀¹ √u du.", shade({ xmin: 0, xmax: PI / 2, ymin: -0.05, ymax: 0.8 }, { x: PI / 8, y: 0.1 }, (x) => Math.cos(x) * Math.sqrt(Math.max(0, Math.sin(x))), 0, PI / 2)),
  num(S`Evaluate $\int_0^2x\sqrt{x^2+5}\,dx$ (3 d.p.).`, r3((27 - 5 * Math.sqrt(5)) / 3), "⅓(x² + 5)^{3/2} from 0 to 2.", null, 0.001),
  num(S`Evaluate $\int_1^e\frac{2\ln x}{x}dx$.`, 1, "[(ln x)²]."),
  mc(S`$\int x^2e^{x^3}dx$ equals:`, S`$\frac13e^{x^3}+C$`, [S`$e^{x^3}+C$`, S`$3e^{x^3}+C$`, S`$\frac{x^3}{3}e^{x^3}+C$`], "u = x³, x² dx = ⅓ du."),
];
export { E_ as E };

export const M = [
  num(S`Evaluate $\int_0^1x(1+x^2)^4dx$.`, 3.1, "[(1 + x²)⁵/10] = (32 − 1)/10.", null, 0.001),
  num(S`Evaluate $\int_0^{\pi/4}\frac{\tan x}{\cos^2x}dx$.`, 0.5, "u = tan x: [u²/2].", null, 0.001),
  num(S`Evaluate $\int_0^{\pi/3}\frac{\sin x}{2-\cos x}dx$ (3 d.p.).`, r3(Math.log(1.5)), "u = 2 − cos x from 1 to 1.5.", null, 0.001),
  num(S`Evaluate $\int_1^4\frac{e^{\sqrt x}}{\sqrt x}dx$ (3 d.p.).`, r3(2 * (E * E - E)), "u = √x: 2[e^u] from 1 to 2.", null, 0.001),
  num(S`Evaluate $\int_0^1\frac{x}{(x^2+1)^3}dx$ (4 d.p.).`, 0.1875, "[−1/(4(x² + 1)²)] = −1/16 + 1/4.", null, 0.0001),
  num(S`Evaluate $\int_0^{\pi/2}\frac{\sin2x}{3+\sin^2x}dx$ (3 d.p.).`, r3(Math.log(4 / 3)), "u = 3 + sin²x, du = sin 2x dx.", null, 0.001),
  mc(S`$\int\frac{x}{\sqrt{x^2-1}}dx$ equals:`, S`$\sqrt{x^2-1}+C$`, [S`$2\sqrt{x^2-1}+C$`, S`$\frac12\sqrt{x^2-1}+C$`, S`$\ln(x^2-1)+C$`], "½ ∫ u^{−½} du."),
  mc(S`$\int\frac{\cos x}{\sin x}dx$ equals:`, S`$\ln|\sin x|+C$`, [S`$\ln|\cos x|+C$`, S`$-\frac{1}{\sin^2x}+C$`, S`$\frac{\sin x}{\cos x}+C$`], "Log pattern."),
  mc(S`$\int\frac{e^x}{1+e^x}dx$ equals:`, S`$\ln(1+e^x)+C$`, [S`$\frac{1}{1+e^x}+C$`, S`$x+C$`, S`$e^x\ln(1+e^x)+C$`], "Numerator is the derivative of the denominator."),
  tf(S`$\int_0^2xe^{x^2}dx=\frac12\int_0^4e^u\,du$.`, true, "u = x², limits 0 to 4."),
  tf(S`$\int_0^{\pi/2}\cos x\sin^5x\,dx=\frac16$.`, true, "u = sin x from 0 to 1."),
  num(S`Find k in $\left(0,\frac{\pi}{2}\right)$ with $\int_0^k\sin x\cos x\,dx=\frac18$ (3 d.p.).`, r3(PI / 6), "½ sin²k = ⅛ ⇒ sin k = ½.", null, 0.001),
  num(S`Evaluate $\int_0^1\frac{2x+1}{x^2+x+1}dx$ (3 d.p.).`, r3(Math.log(3)), "ln(x² + x + 1).", null, 0.001),
  num(S`Evaluate $\int_0^1x^3(x^4+1)^2dx$ (3 d.p.).`, r3(7 / 12), "[(x⁴ + 1)³/12].", null, 0.001),
  ms(S`For $\int_0^2x(x^2+1)^3dx$ with $u=x^2+1$, which are correct? Select all.`, ["the new limits are 1 and 5", S`it becomes $\frac12\int u^3du$`, "its value is 78", "the limits stay 0 and 2"], [0, 1, 2], "[u⁴/8] from 1 to 5 = 624/8."),
  mc(S`The shaded area under $y=\frac{x}{x^2+1}$ from 0 to 3 is:`, S`$\frac12\ln10\approx1.151$`, [S`$\ln10\approx2.303$`, S`$\ln3\approx1.099$`, S`$\frac{3}{10}$`], "½ ln(x² + 1).", shade({ xmin: -0.2, xmax: 4, ymin: -0.05, ymax: 0.6 }, { x: 0.5, y: 0.1 }, (x) => x / (x * x + 1), 0, 3)),
  mc(S`The shaded area under $y=\sin x(1+\cos x)^2$ from 0 to π is:`, S`$\frac83$`, ["2", "4", S`$\frac43$`], "u = 1 + cos x: [−u³/3] from 2 to 0.", shade({ xmin: 0, xmax: PI, ymin: -0.1, ymax: 2.4 }, { x: PI / 4, y: 0.5 }, (x) => Math.sin(x) * (1 + Math.cos(x)) ** 2, 0, PI)),
  num(S`Evaluate $\int_0^{\ln3}e^x(e^x+1)\,dx$.`, 6, "u = eˣ + 1 from 2 to 4: [u²/2]."),
  num(S`Evaluate $\int_e^{e^3}\frac{1}{x(\ln x)^2}dx$ (3 d.p.).`, r3(2 / 3), "[−1/ln x] = −⅓ + 1.", null, 0.001),
  num(S`Evaluate $\int_0^{\pi/6}\cos3x\,e^{\sin3x}dx$ (3 d.p.).`, r3((E - 1) / 3), "⅓[e^{sin 3x}].", null, 0.001),
];
