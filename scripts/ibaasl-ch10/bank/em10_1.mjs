// 10.1 Antiderivatives and the Indefinite Integral — 20 easy + 20 medium questions
import { mc, ms, num, tf, fill } from "./kit.mjs";
import { planeDoc, P } from "./fig.mjs";

const S = String.raw;

export const E = [
  mc(S`$\int x^4\,dx=$`, S`$\frac{x^5}{5}+C$`, [S`$4x^3+C$`, S`$x^5+C$`, S`$\frac{x^4}{4}+C$`], "Add one to the power, divide by it."),
  mc(S`$\int 5\,dx=$`, S`$5x+C$`, [S`$5+C$`, S`$0$`, S`$\frac52x^2+C$`], "d/dx(5x) = 5."),
  mc(S`$\int 8x^3\,dx=$`, S`$2x^4+C$`, [S`$24x^2+C$`, S`$8x^4+C$`, S`$\frac{8x^3}{3}+C$`], "8 · x⁴/4."),
  mc(S`$\int(2x+7)\,dx=$`, S`$x^2+7x+C$`, [S`$2x^2+7x+C$`, S`$x^2+7+C$`, S`$2+C$`], "Term by term."),
  mc(S`$\int x^{-2}\,dx=$`, S`$-\frac1x+C$`, [S`$\frac1x+C$`, S`$-\frac{1}{3x^3}+C$`, S`$-2x^{-3}+C$`], "x⁻¹/(−1)."),
  mc(S`$\int\sqrt x\,dx=$`, S`$\frac23x^{3/2}+C$`, [S`$\frac32x^{3/2}+C$`, S`$\frac{1}{2\sqrt x}+C$`, S`$x^{3/2}+C$`], "x^(1/2) → x^(3/2)/(3/2)."),
  num(S`$\int 12x^2\,dx=kx^3+C$. Find $k$.`, 4, "12/3."),
  num(S`$\int 20x^4\,dx=kx^5+C$. Find $k$.`, 4, "20/5."),
  num(S`$\int 6\,dx$ evaluated without $C$ at $x=3$.`, 18, "6x at x = 3."),
  tf(S`$\int x^3\,dx=\frac{x^4}{4}+C$.`, true, "Power rule."),
  tf(S`An indefinite integral has exactly one answer.`, false, "It is a family: + C."),
  tf(S`$\frac{d}{dx}\left(\frac{x^6}{6}+11\right)=x^5$.`, true, "The constant vanishes."),
  fill(S`$\int x^n\,dx=\frac{x^{n+1}}{n+1}+C$ for every $n$ except $n=$ ___.`, ["-1", "−1"], "Division by zero."),
  ms(S`Which are antiderivatives of $3x^2$? Select all.`, [S`$x^3$`, S`$x^3+4$`, S`$x^3-\pi$`, S`$6x$`], [0, 1, 2], "6x is the derivative."),
  mc("The curves shown are all antiderivatives of the same function. They differ by:", "a constant", ["a factor", "a power of x", "a reflection"], "Vertical translations.", planeDoc({ view: { xmin: -3, xmax: 3, ymin: -4, ymax: 10 }, curves: [{ f: (x) => x * x }, { f: (x) => x * x + 3, color: "green" }, { f: (x) => x * x - 2, color: "amber" }], step: { x: 1, y: 2 } })),
  num(S`$F'(x)=2x$ and $F(0)=6$. Find $F(2)$.`, 10, "F = x² + 6."),
  num(S`$F'(x)=3$ and $F(1)=5$. Find $F(4)$.`, 14, "F = 3x + 2."),
  mc(S`$\int(x^2-x)\,dx=$`, S`$\frac13x^3-\frac12x^2+C$`, [S`$2x-1+C$`, S`$\frac13x^3-x+C$`, S`$x^3-x^2+C$`], "Term by term."),
  mc("The curve through (0, 2) shown has gradient 2x. Its equation is:", S`$y=x^2+2$`, [S`$y=x^2$`, S`$y=2x+2$`, S`$y=x^2-2$`], "C = 2.", planeDoc({ view: { xmin: -3, xmax: 3, ymin: -1, ymax: 10 }, curves: [{ f: (x) => x * x + 2 }], points: [P(0, 2, "", "red")], step: { x: 1, y: 1 } })),
  mc(S`The constant $C$ is needed because:`, "constants differentiate to zero", ["every function has a root", "integrals are always positive", "x might be zero"], "Any constant could be present."),
];

export const M = [
  mc(S`$\int\left(9x^2-\frac{4}{x^3}\right)dx=$`, S`$3x^3+\frac{2}{x^2}+C$`, [S`$3x^3-\frac{2}{x^2}+C$`, S`$18x+\frac{12}{x^4}+C$`, S`$3x^3+\frac{1}{x^4}+C$`], "−4x⁻³ → 2x⁻²."),
  mc(S`$\int\frac{6}{\sqrt x}\,dx=$`, S`$12\sqrt x+C$`, [S`$3\sqrt x+C$`, S`$\frac{12}{x^{3/2}}+C$`, S`$4x^{3/2}+C$`], "6x^(−1/2) → 12x^(1/2)."),
  mc(S`$\int x^{5/2}\,dx=$`, S`$\frac27x^{7/2}+C$`, [S`$\frac72x^{7/2}+C$`, S`$\frac52x^{3/2}+C$`, S`$\frac25x^{7/2}+C$`], "Divide by 7/2."),
  mc(S`$\int(x-3)(x+3)\,dx=$`, S`$\frac13x^3-9x+C$`, [S`$\frac13x^3-9+C$`, S`$\frac12(x-3)^2(x+3)+C$`, S`$x^3-9x+C$`], "x² − 9."),
  mc(S`$\int(3x+1)^2\,dx$ (expanding) $=$`, S`$3x^3+3x^2+x+C$`, [S`$3x^3+x+C$`, S`$\frac{(3x+1)^3}{3}+C$`, S`$9x^3+6x^2+x+C$`], "9x² + 6x + 1."),
  mc(S`$\int\frac{x^2-4x}{x}\,dx=$`, S`$\frac12x^2-4x+C$`, [S`$\frac13x^3-2x^2+C$`, S`$x-4+C$`, S`$\frac{x^3/3-2x^2}{x^2/2}+C$`], "Divide first."),
  num(S`$f'(x)=4x-5$ and $f(2)=3$. Find $f(0)$.`, 5, "f = 2x² − 5x + C; 8 − 10 + C = 3 ⇒ C = 5."),
  num(S`$f'(x)=3x^2+2x$ and $f(1)=0$. Find $f(2)$.`, 10, "f = x³ + x² − 2."),
  num(S`$\frac{dy}{dx}=6\sqrt x$ and $y=10$ when $x=1$. Find $y$ when $x=4$.`, 38, "y = 4x^(3/2) + 6."),
  num(S`$f''(x)=4$, $f'(0)=1$, $f(0)=2$. Find $f(1)$.`, 5, "f′ = 4x + 1; f = 2x² + x + 2."),
  num(S`$f''(x)=12x^2$, $f'(0)=0$, $f(0)=5$. Find $f(1)$.`, 6, "f′ = 4x³; f = x⁴ + 5."),
  tf(S`$\int x\cdot x^2\,dx=\int x\,dx\cdot\int x^2\,dx$.`, false, "There is no product rule like this."),
  tf(S`$\int(f+g)\,dx=\int f\,dx+\int g\,dx$.`, true, "Linearity."),
  ms(S`Which equal $\int 4x^3\,dx$? Select all.`, [S`$x^4+C$`, S`$x^4+7+C$`, S`$\frac{4x^4}{4}+C$`, S`$12x^2+C$`], [0, 1, 2], "Constants merge into C."),
  mc("The graph shows the antiderivative of 3x² − 3 passing through (1, 0). It is:", S`$y=x^3-3x+2$`, [S`$y=x^3-3x$`, S`$y=6x$`, S`$y=x^3-3x-2$`], "C: 1 − 3 + C = 0.", planeDoc({ view: { xmin: -3, xmax: 3, ymin: -3, ymax: 8 }, curves: [{ f: (x) => x ** 3 - 3 * x + 2 }], points: [P(1, 0, "", "red")], step: { x: 1, y: 1 } })),
  num(S`The gradient of a curve is $2x-4$ and it passes through $(1,5)$. Find the y-intercept.`, 8, "y = x² − 4x + 8."),
  mc(S`$\int\frac{1}{2x^2}\,dx=$`, S`$-\frac{1}{2x}+C$`, [S`$\frac{1}{2x}+C$`, S`$-\frac{1}{x}+C$`, S`$\ln(2x^2)+C$`], "½x⁻² → −½x⁻¹."),
  num(S`$f'(x)=kx^2$ and $f(0)=1$, $f(3)=19$. Find $k$.`, 2, "f = kx³/3 + 1; 9k + 1 = 19."),
  mc("A curve with gradient −2x through (0, 4) is shown. Where does it cut the x-axis?", S`$x=\pm2$`, [S`$x=\pm4$`, S`$x=4$`, S`$x=\pm\sqrt2$`], "y = 4 − x².", planeDoc({ view: { xmin: -3, xmax: 3, ymin: -3, ymax: 5 }, curves: [{ f: (x) => 4 - x * x }], points: [P(0, 4, "", "red")], step: { x: 1, y: 1 } })),
  num(S`$\int(2x^3+x)\,dx$ evaluated at $x=2$ minus at $x=0$.`, 10, "[x⁴/2 + x²/2]: 8 + 2."),
];
