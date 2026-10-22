// 10.2 Integrating Exponentials, Reciprocals and Linear Composites — 20 easy + 20 medium questions
import { mc, ms, num, tf, fill } from "./kit.mjs";
import { planeDoc, P } from "./fig.mjs";
import { areaDoc } from "../figs10.mjs";

const S = String.raw;

export const E = [
  mc(S`$\int e^x\,dx=$`, S`$e^x+C$`, [S`$xe^{x-1}+C$`, S`$\frac{e^{x+1}}{x+1}+C$`, S`$\ln x+C$`], "eˣ is its own antiderivative."),
  mc(S`$\int\frac1x\,dx=$`, S`$\ln|x|+C$`, [S`$-\frac{1}{x^2}+C$`, S`$\frac{x^0}{0}$`, S`$e^x+C$`], "Derivative of ln|x| is 1/x."),
  mc(S`$\int e^{2x}\,dx=$`, S`$\frac12e^{2x}+C$`, [S`$2e^{2x}+C$`, S`$e^{2x}+C$`, S`$\frac{e^{2x+1}}{2x+1}+C$`], "Divide by 2."),
  mc(S`$\int 5e^{x}\,dx=$`, S`$5e^x+C$`, [S`$\frac{e^x}{5}+C$`, S`$e^{5x}+C$`, S`$5xe^x+C$`], "Constant multiple."),
  mc(S`$\int\frac{2}{x}\,dx=$`, S`$2\ln|x|+C$`, [S`$\ln|2x|^2$`, S`$-\frac{2}{x^2}+C$`, S`$\frac{\ln|x|}{2}+C$`], "2 · ln|x|."),
  mc(S`$\int e^{-x}\,dx=$`, S`$-e^{-x}+C$`, [S`$e^{-x}+C$`, S`$-xe^{-x-1}+C$`, S`$e^{x}+C$`], "Divide by −1."),
  mc(S`$\int\frac{1}{x+3}\,dx=$`, S`$\ln|x+3|+C$`, [S`$\frac{1}{(x+3)^2}+C$`, S`$\ln|x|+3+C$`, S`$3\ln|x|+C$`], "a = 1."),
  mc(S`$\int(x+5)^3\,dx=$`, S`$\frac{(x+5)^4}{4}+C$`, [S`$3(x+5)^2+C$`, S`$\frac{(x+5)^4}{20}+C$`, S`$(x+5)^4+C$`], "a = 1."),
  num(S`$\int e^{3x}\,dx=ke^{3x}+C$. Find $k$ (3 d.p.).`, 0.333, "1/3.", null, 0.001),
  num(S`$\int\frac{6}{x}\,dx=k\ln|x|+C$. Find $k$.`, 6, "6 ln|x|."),
  num(S`$\int(2x+1)^4\,dx=k(2x+1)^5+C$. Find $k$.`, 0.1, "1/(5 × 2).", null, 0.001),
  tf(S`$\int e^{4x}\,dx=4e^{4x}+C$.`, false, "Divide by 4, don't multiply."),
  tf(S`$\frac{d}{dx}\ln|x|=\frac1x$ for $x\ne0$.`, true, "That is why ∫1/x = ln|x|."),
  fill(S`$\int e^{ax}\,dx=\frac{1}{\_\_\_}e^{ax}+C$.`, ["a"], "Reverse chain rule."),
  ms(S`Which have antiderivative involving $\ln$? Select all.`, [S`$\frac{1}{x}$`, S`$\frac{3}{2x+5}$`, S`$\frac{1}{x^2}$`, S`$x^{-1}$`], [0, 1, 3], "1/x² gives −1/x."),
  mc("The shaded area under y = 1/x from 1 to 3 equals:", S`$\ln3$`, [S`$\frac13$`, S`$\frac23$`, S`$\ln2$`], "[ln x]₁³.", areaDoc({ view: { xmin: 0, xmax: 4, ymin: -0.3, ymax: 2.5 }, step: { x: 1, y: 0.5 }, curves: [{ f: (x) => 1 / x, a: 0.4, b: 4 }] }, [{ f: (x) => 1 / x, a: 1, b: 3 }])),
  num(S`$f'(x)=e^x$ and $f(0)=4$. Find $C$ in $f(x)=e^x+C$.`, 3, "1 + C = 4."),
  num(S`$f'(x)=\frac1x$, $x>0$, and $f(1)=-1$. Find $f(e^3)$.`, 2, "ln e³ − 1."),
  mc("The graph shows y = eˣ + C passing through (0, 3). Find C.", "2", ["3", "1", "e"], "1 + C = 3.", planeDoc({ view: { xmin: -3, xmax: 2, ymin: -1, ymax: 10 }, curves: [{ f: (x) => Math.exp(x) + 2 }], lines: [{ m: 0, b: 2, color: "red", dash: true }], points: [P(0, 3, "", "red")], step: { x: 1, y: 1 } })),
  mc(S`$\int(e^x+1)\,dx=$`, S`$e^x+x+C$`, [S`$e^x+C$`, S`$e^x+1+C$`, S`$xe^x+x+C$`], "Term by term."),
];

export const M = [
  mc(S`$\int 8e^{4x}\,dx=$`, S`$2e^{4x}+C$`, [S`$32e^{4x}+C$`, S`$8e^{4x}+C$`, S`$\frac12e^{4x}+C$`], "8/4."),
  mc(S`$\int e^{1-2x}\,dx=$`, S`$-\frac12e^{1-2x}+C$`, [S`$\frac12e^{1-2x}+C$`, S`$-2e^{1-2x}+C$`, S`$e^{1-2x}+C$`], "a = −2."),
  mc(S`$\int\frac{5}{5x+2}\,dx=$`, S`$\ln|5x+2|+C$`, [S`$5\ln|5x+2|+C$`, S`$\frac15\ln|5x+2|+C$`, S`$\frac{5}{(5x+2)^2}+C$`], "5 · (1/5)."),
  mc(S`$\int\frac{1}{4-x}\,dx=$`, S`$-\ln|4-x|+C$`, [S`$\ln|4-x|+C$`, S`$\frac{1}{(4-x)^2}+C$`, S`$-\frac14\ln|x|+C$`], "a = −1."),
  mc(S`$\int(3x-1)^{-2}\,dx=$`, S`$-\frac{1}{3(3x-1)}+C$`, [S`$\frac{1}{3(3x-1)}+C$`, S`$-\frac{(3x-1)^{-1}}{1}+C$`, S`$\frac13\ln|3x-1|+C$`], "(3x − 1)⁻¹/(−1 · 3)."),
  mc(S`$\int\sqrt{4x+1}\,dx=$`, S`$\frac16(4x+1)^{3/2}+C$`, [S`$\frac23(4x+1)^{3/2}+C$`, S`$\frac{8}{3}(4x+1)^{3/2}+C$`, S`$\frac18(4x+1)^{1/2}+C$`], "Divide by (3/2) · 4."),
  num(S`$\int(6x+5)^2\,dx=k(6x+5)^3+C$. Find $k$ (4 d.p.).`, Math.round((1 / 18) * 1e4) / 1e4, "1/(3 × 6).", null, 0.0001),
  num(S`$f'(x)=e^{3x}$ and $f(0)=1$. Find $f(\ln2)$ (3 d.p.).`, 3.333, "f = ⅓e^(3x) + ⅔; f(ln 2) = 8/3 + 2/3.", null, 0.001),
  num(S`$f'(x)=\frac{3}{x}$ for $x>0$ and $f(1)=4$. Find $f(e^2)$.`, 10, "3 ln x + 4."),
  num(S`$\frac{dy}{dx}=\frac{2}{2x+1}$ and $y=1$ at $x=0$. Find $y$ at $x=1$ (3 d.p.).`, Math.round((Math.log(3) + 1) * 1000) / 1000, "y = ln(2x + 1) + 1.", null, 0.001),
  tf(S`$\int\frac{1}{2x}\,dx=\ln|2x|+C$.`, false, "It is ½ ln|x| + C (or ½ ln|2x| + C)."),
  tf(S`$\int 2xe^{x^2}\,dx=e^{x^2}+C$.`, true, "The inner derivative 2x is present."),
  mc(S`$\int\frac{2x}{x^2+3}\,dx=$`, S`$\ln(x^2+3)+C$`, [S`$\frac{1}{x^2+3}+C$`, S`$2\ln(x^2+3)+C$`, S`$x^2\ln(x^2+3)+C$`], "g′/g."),
  mc(S`$\int x^3e^{x^4}\,dx=$`, S`$\frac14e^{x^4}+C$`, [S`$e^{x^4}+C$`, S`$4e^{x^4}+C$`, S`$\frac{x^4}{4}e^{x^4}+C$`], "Adjust by 1/4."),
  ms(S`Which are correct? Select all.`, [S`$\int e^{x/2}\,dx=2e^{x/2}+C$`, S`$\int\frac{dx}{3x+1}=\frac13\ln|3x+1|+C$`, S`$\int(1-x)^2dx=-\frac{(1-x)^3}{3}+C$`, S`$\int e^{x}\,dx=e^{x+1}+C$`], [0, 1, 2], "The last is wrong."),
  mc("The shaded area under y = e^(x/2) from 0 to 2 equals:", S`$2(e-1)$`, [S`$e-1$`, S`$\frac12(e-1)$`, S`$2e$`], "[2e^(x/2)]₀².", areaDoc({ view: { xmin: -1, xmax: 3, ymin: -0.3, ymax: 4.5 }, step: { x: 0.5, y: 1 }, curves: [{ f: (x) => Math.exp(x / 2) }] }, [{ f: (x) => Math.exp(x / 2), a: 0, b: 2 }])),
  num(S`$\int\frac{x^2+1}{x}\,dx$ for $x>0$ is $\frac12x^2+k\ln x+C$. Find $k$.`, 1, "x + 1/x."),
  mc("The graph shows y = ln(x + 2) + C through (−1, 4). Find C.", "4", ["2", "ln 2", "0"], "ln 1 = 0.", planeDoc({ view: { xmin: -2.5, xmax: 5, ymin: -1, ymax: 8 }, curves: [{ f: (x) => Math.log(x + 2) + 4, a: -1.98, b: 5 }], vlines: [{ x: -2, color: "red", dash: true }], points: [P(-1, 4, "", "red")], step: { x: 1, y: 1 } })),
  num(S`$f'(x)=4e^{-2x}$ and $f(0)=0$. Find the limit of $f(x)$ as $x\to\infty$.`, 2, "f = −2e^(−2x) + 2."),
  mc(S`$\int\frac{e^x}{e^x+1}\,dx=$`, S`$\ln(e^x+1)+C$`, [S`$\frac{1}{e^x+1}+C$`, S`$e^x\ln(e^x+1)+C$`, S`$x+C$`], "g′/g with g = eˣ + 1."),
];
