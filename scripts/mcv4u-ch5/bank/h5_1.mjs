// 5.1 Rates of Change and the Number e — 20 hard questions
import { mc, num, tf } from "./kit.mjs";
import { graph, P } from "./fig.mjs";

const S = String.raw;
const E = Math.E;
export const TOPIC = "5.1 Rates of Change and the Number e";
export const Q = [
  num("A tangent to y = eˣ passes through (2, 0) (graph shown). At what x does it touch the curve?", 3, "Tangent at a: y = eᵃ(x − a + 1); through (2, 0): 3 − a = 0.", graph(Math.exp, { xmin: -1, xmax: 3.5, ymin: -2, ymax: 25 }, [P(3, Math.exp(3)), P(2, 0)], { more: [{ f: (x) => Math.exp(3) * (x - 2), color: "green", a: 1.8, b: 3.4 }], step: { x: 0.5, y: 5 } })),
  num(S`Evaluate $\displaystyle\lim_{h\to0}\frac{e^h-1}{h}$.`, 1, "The slope of eˣ at 0."),
  num(S`Evaluate $\displaystyle\lim_{h\to0}\frac{2^h-1}{h}$ (4 decimals).`, 0.6931, "ln 2.", null, 0.0005),
  num(S`Evaluate $\displaystyle\lim_{n\to\infty}\left(1+\frac2n\right)^n$ (3 decimals).`, 7.389, "e².", null, 0.002),
  mc("Which fact is used to find the derivative of eˣ from first principles?", S`$e^{x+h}=e^xe^h$`, [S`$e^{x+h}=e^x+e^h$`, S`$e^{xh}=e^xe^h$`, S`$(e^x)^h=e^{x+h}$`], "Factor eˣ out of the difference quotient."),
  num(S`Evaluate $\displaystyle\lim_{n\to\infty}\left(1+\frac1n\right)^{3n}$ (4 decimals).`, 20.0855, "e³.", null, 0.0005),
  num(S`At what $x$ is the slope of $y=2^x$ equal to 1 (4 decimals)?`, 0.5288, "2ˣ ln 2 = 1.", null, 0.0005),
  tf(S`$\frac{d}{dx}x^e=ex^{e-1}$.`, true, "xᵉ is a power function; e is a constant exponent."),
  num("A line through the origin is tangent to y = eˣ (graph shown). What is its slope (4 decimals)?", 2.7183, "It touches at x = 1, where the slope is e.", graph(Math.exp, { xmin: -1.5, xmax: 2, ymin: -1, ymax: 6 }, [P(1, E)], { more: [{ f: (x) => E * x, color: "green", a: -0.3, b: 2 }], step: { x: 0.5, y: 1 } }), 0.0005),
  num(S`Evaluate $\displaystyle\lim_{h\to0}\frac{e^{2h}-1}{h}$.`, 2, "2 · (e^(2h) − 1)/(2h)."),
  num("At 6% compounded continuously, how many years does it take money to double (4 decimals)?", 11.5525, "e^(0.06t) = 2.", null, 0.0005),
  mc(S`For which base is the slope of $b^x$ at $x=0$ equal to 2?`, S`$e^2$`, [S`$2$`, S`$\sqrt e$`, S`$2e$`], "Slope at 0 is ln b."),
  num("The graph of y = 0.2ˣ is shown. What is slope ÷ height at every point (4 decimals)?", -1.6094, "ln 0.2.", graph((x) => 0.2 ** x, { xmin: -1.5, xmax: 1.5, ymin: -0.5, ymax: 12 }, [P(0, 1)], { more: [{ f: (x) => 1 - 1.6094 * x, color: "green", a: -1, b: 0.6 }], step: { x: 0.5, y: 1 } }), 0.0005),
  num(S`At what $x$ is the tangent to $y=e^x$ parallel to $y=3x+1$ (4 decimals)?`, 1.0986, "eˣ = 3.", null, 0.0005),
  tf(S`$e^x\gt1+x$ for every $x\ne0$.`, true, "The curve lies above its tangent at 0."),
  num(S`By how much does $\left(1+\frac1{100}\right)^{100}$ fall short of $e$ (4 decimals)?`, 0.0135, "2.71828 − 2.70481.", null, 0.0005),
  num("The tangent to y = 2ˣ at x = 0 is drawn. Where does it cross the x-axis (4 decimals)?", -1.4427, "y = 1 + x ln 2.", graph((x) => 2 ** x, { xmin: -2.5, xmax: 2, ymin: -0.5, ymax: 4 }, [P(0, 1)], { more: [{ f: (x) => 1 + Math.log(2) * x, color: "green", a: -2, b: 1.5 }], step: { x: 0.5, y: 0.5 } }), 0.0005),
  num(S`Evaluate $1+1+\frac12+\frac16+\frac1{24}+\frac1{120}$ (4 decimals).`, 2.7167, "The series for e.", null, 0.0005),
  num(S`What is the slope of $y=e^x$ at $x=\ln0.5$?`, 0.5, "Slope = height.", null, 0.0001),
  num("100 dollars earns 100% interest compounded continuously for 2 years. What does it become (2 decimals)?", 738.91, "100e².", null, 0.01),
];
