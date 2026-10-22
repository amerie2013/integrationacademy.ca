// 10.2 Integrating Exponentials, Reciprocals and Linear Composites — 20 hard questions
import { mc, ms, num, tf } from "./kit.mjs";
import { planeDoc, P } from "./fig.mjs";
import { areaDoc } from "../figs10.mjs";

const S = String.raw;
const d3 = (v) => Math.round(v * 1000) / 1000;

export const TOPIC = "10.2 Integrating Exponentials, Reciprocals and Linear Composites";
export const Q = [
  num(S`$f'(x)=3e^{3x}-\frac{2}{x}$ for $x>0$ and $f(1)=e^3$. Find $f(2)$ (3 d.p.).`, d3(Math.exp(6) - 2 * Math.log(2)), "f = e^(3x) − 2 ln x + C; C = 0; f(2) = e⁶ − 2 ln 2.", null, 0.001),
  num(S`$f'(x)=\frac{6}{3x-2}$ for $x>\frac23$ and $f(1)=5$. Find $f(2)$ (3 d.p.).`, d3(2 * Math.log(4) + 5), "f = 2 ln(3x − 2) + 5.", null, 0.001),
  num(S`$f'(x)=(1-2x)^3$ and $f(0)=1$. Find $f(1)$.`, 1, "f = −(1 − 2x)⁴/8 + 9/8; f(1) = −1/8 + 9/8."),
  num(S`$f'(x)=e^{x}+e^{-x}$ and $f(0)=0$. Find $f(\ln3)$ (3 d.p.).`, d3(3 - 1 / 3), "f = eˣ − e⁻ˣ.", null, 0.001),
  mc(S`$\int\frac{x}{x^2+4}\,dx=$`, S`$\frac12\ln(x^2+4)+C$`, [S`$\ln(x^2+4)+C$`, S`$2\ln(x^2+4)+C$`, S`$\frac{x^2}{2}\ln(x^2+4)+C$`], "Half of g′/g."),
  mc(S`$\int\frac{e^{2x}}{e^{2x}+5}\,dx=$`, S`$\frac12\ln(e^{2x}+5)+C$`, [S`$\ln(e^{2x}+5)+C$`, S`$2\ln(e^{2x}+5)+C$`, S`$\frac{1}{e^{2x}+5}+C$`], "g′ = 2e^(2x)."),
  mc(S`$\int(x+1)e^{x^2+2x}\,dx=$`, S`$\frac12e^{x^2+2x}+C$`, [S`$e^{x^2+2x}+C$`, S`$2e^{x^2+2x}+C$`, S`$(x+1)e^{x^2+2x}+C$`], "g′ = 2(x + 1)."),
  mc(S`$\int\frac{3x^2+2}{x^3+2x}\,dx$ for $x>0$ $=$`, S`$\ln(x^3+2x)+C$`, [S`$3\ln(x^3+2x)+C$`, S`$\frac{1}{x^3+2x}+C$`, S`$\ln(3x^2+2)+C$`], "Exactly g′/g."),
  mc(S`$\int x(x^2-1)^4\,dx=$`, S`$\frac{1}{10}(x^2-1)^5+C$`, [S`$\frac15(x^2-1)^5+C$`, S`$\frac{x^2}{2}\cdot\frac{(x^2-1)^5}{5}+C$`, S`$2(x^2-1)^5+C$`], "½ · (x² − 1)⁵/5."),
  num(S`The gradient of a curve is $\frac{4}{x}$ ($x>0$). It passes through $(1,2)$. Find the x-coordinate where $y=6$ (3 d.p.).`, d3(Math.E), "y = 4 ln x + 2 = 6 ⇒ ln x = 1.", null, 0.001),
  num(S`$\frac{dy}{dx}=2e^{-0.5x}$, $y(0)=0$. Find the horizontal asymptote $y=k$ of the curve.`, 4, "y = −4e^(−0.5x) + 4.", planeDoc({ view: { xmin: -1, xmax: 10, ymin: -2, ymax: 5 }, curves: [{ f: (x) => 4 - 4 * Math.exp(-0.5 * x) }], lines: [{ m: 0, b: 4, color: "red", dash: true }], points: [P(0, 0, "", "blue")], step: { x: 1, y: 1 } })),
  num(S`Find the area under $y=e^{2x}$ from $x=0$ to $x=\ln 3$.`, 4, "[½e^(2x)]: 9/2 − 1/2.", areaDoc({ view: { xmin: -0.5, xmax: 1.5, ymin: -0.5, ymax: 10 }, step: { x: 0.5, y: 1 }, curves: [{ f: (x) => Math.exp(2 * x) }] }, [{ f: (x) => Math.exp(2 * x), a: 0, b: Math.log(3) }])),
  num(S`Find the area under $y=\frac{2}{x+1}$ from $x=0$ to $x=e-1$.`, 2, "[2 ln(x + 1)]: 2 ln e.", areaDoc({ view: { xmin: -0.5, xmax: 3, ymin: -0.3, ymax: 2.5 }, step: { x: 0.5, y: 0.5 }, curves: [{ f: (x) => 2 / (x + 1), a: -0.3, b: 3 }] }, [{ f: (x) => 2 / (x + 1), a: 0, b: Math.E - 1 }])),
  ms(S`Which equal $\int\frac{4}{2x}\,dx$ for $x>0$? Select all.`, [S`$2\ln x+C$`, S`$2\ln(2x)+C$`, S`$\ln(x^2)+C$`, S`$4\ln(2x)+C$`], [0, 1, 2], "They differ by constants; 4 ln 2x is double."),
  tf(S`$\int\frac{1}{x^2+1}\,dx=\ln(x^2+1)+C$.`, false, "The numerator is not 2x; this needs arctan (beyond SL)."),
  num(S`Find $k$ if $\int_0^k e^{x}\,dx=4$.`, d3(Math.log(5)), "eᵏ − 1 = 4.", null, 0.001),
  mc("The graph shows f′(x) = e^x − 2. Its antiderivative f has a minimum at:", S`$x=\ln2$`, [S`$x=2$`, S`$x=0$`, S`$x=e^2$`], "f′ = 0 and changes − to +.", planeDoc({ view: { xmin: -2, xmax: 2, ymin: -3, ymax: 6 }, curves: [{ f: (x) => Math.exp(x) - 2 }], points: [P(Math.log(2), 0, false, "red")], step: { x: 0.5, y: 1 } })),
  num(S`For $f'(x)=e^x-2$ with $f(0)=3$, find the minimum value of $f$ (3 d.p.).`, d3(2 - 2 * Math.log(2) + 2), "f = eˣ − 2x + 2; at ln 2: 2 − 2 ln 2 + 2.", null, 0.001),
  num(S`$f'(x)=\frac{1}{(x+2)^2}$ and $f(0)=0$. Find $\lim_{x\to\infty}f(x)$.`, 0.5, "f = −1/(x + 2) + ½.", null, 0.001),
  mc(S`$\int\left(e^{x}+\frac1x\right)^2\,dx$ needs which first step?`, "expand the square", ["divide by x", "take logs", "use the power rule on the bracket"], "There is no chain rule shortcut: e^(2x) + 2eˣ/x + 1/x² — the middle term is not elementary."),
];
