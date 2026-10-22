// 10.1 Antiderivatives and the Indefinite Integral — 20 hard questions
import { mc, ms, num, tf } from "./kit.mjs";
import { planeDoc, P } from "./fig.mjs";

const S = String.raw;

export const TOPIC = "10.1 Antiderivatives and the Indefinite Integral";
export const Q = [
  num(S`$f''(x)=6x+4$, $f'(1)=9$ and $f(1)=7$. Find $f(2)$.`, 22, "f′ = 3x² + 4x + 2; f = x³ + 2x² + 2x + 2; f(2) = 8 + 8 + 4 + 2."),
  num(S`$f''(x)=-2$, $f(0)=1$ and $f(3)=-5$. Find $f'(0)$.`, 1, "f = −x² + C₁x + 1; −9 + 3C₁ + 1 = −5 ⇒ C₁ = 1."),
  num(S`A curve has gradient $ax^2-6x$ and a stationary point at $x=2$. Find $a$.`, 3, "4a − 12 = 0."),
  num(S`The curve with gradient $3x^2-6x$ (from the previous question, $a=3$) passes through $(2,-1)$. Find its y-intercept.`, 3, "y = x³ − 3x² + C; 8 − 12 + C = −1 ⇒ C = 3.", planeDoc({ view: { xmin: -1.5, xmax: 3.5, ymin: -3, ymax: 6 }, curves: [{ f: (x) => x ** 3 - 3 * x * x + 3 }], points: [P(2, -1, "", "red"), P(0, 3, "", "blue")], step: { x: 1, y: 1 } })),
  mc(S`$\int\frac{(x^2+1)^2}{x^2}\,dx=$`, S`$\frac13x^3+2x-\frac1x+C$`, [S`$\frac13x^3+2x+\frac1x+C$`, S`$\frac{(x^2+1)^3}{3x^2}+C$`, S`$x^3+2x-\frac1x+C$`], "x² + 2 + x⁻²."),
  mc(S`$\int\frac{x-4}{\sqrt x}\,dx=$`, S`$\frac23x^{3/2}-8x^{1/2}+C$`, [S`$\frac23x^{3/2}-4x^{1/2}+C$`, S`$\frac32x^{3/2}-8x^{1/2}+C$`, S`$\frac{x^2/2-4x}{\frac23x^{3/2}}+C$`], "x^(1/2) − 4x^(−1/2)."),
  mc(S`$\int\sqrt x(x+2)\,dx=$`, S`$\frac25x^{5/2}+\frac43x^{3/2}+C$`, [S`$\frac52x^{5/2}+\frac34x^{3/2}+C$`, S`$\frac23x^{3/2}\left(\frac{x^2}2+2x\right)+C$`, S`$\frac25x^{5/2}+2x^{3/2}+C$`], "x^(3/2) + 2x^(1/2)."),
  num(S`$\frac{dy}{dx}=\frac{8}{x^3}$ and the curve passes through $(2,0)$. Find $y$ when $x=1$.`, -3, "y = −4/x² + 1."),
  num(S`$f'(x)=(2x-1)(x+3)$ and $f(0)=4$. Find $f(1)$.`, Math.round((2 / 3 + 2.5 - 3 + 4) * 1e4) / 1e4, "2x² + 5x − 3 → (2/3)x³ + (5/2)x² − 3x + 4.", null, 0.001),
  mc("The gradient function f′ is shown. Which describes f?", "f has a minimum at x = 1", ["f has a maximum at x = 1", "f is always increasing", "f has a minimum at x = 0"], "f′ changes from − to + at x = 1.", planeDoc({ view: { xmin: -2, xmax: 4, ymin: -4, ymax: 6 }, curves: [{ f: (x) => 2 * x - 2 }], points: [P(1, 0, "", "red")], step: { x: 1, y: 1 } })),
  mc("Using the same f′(x) = 2x − 2, if f(1) = −3, then f(x) =", S`$x^2-2x-2$`, [S`$x^2-2x-3$`, S`$x^2-2x+4$`, S`$2x^2-2x-3$`], "1 − 2 + C = −3."),
  ms(S`If $F$ and $G$ are both antiderivatives of $f$, which must be true? Select all.`, [S`$F-G$ is constant`, S`$F'=G'$`, S`$F=G$`, S`$F(0)=G(0)$`], [0, 1], "They differ by a constant."),
  tf(S`$\int\frac{1}{x^2}\,dx=\ln(x^2)+C$.`, false, "It is −1/x + C."),
  num(S`The gradient of a curve is $kx+1$. It passes through $(0,2)$ and $(2,10)$. Find $k$.`, 3, "y = ½kx² + x + 2; 2k + 2 + 2 = 10."),
  num(S`$f'(x)=\frac{3}{\sqrt[3]{x}}$ and $f(1)=5$. Find $f(8)$.`, 18.5, "f = (9/2)x^(2/3) + 1/2; at 8: 18 + 0.5.", null, 0.001),
  mc("The graph shows f″(x) = 6x. If f′(0) = −3 and f(0) = 1, then f has stationary points at:", S`$x=\pm1$`, [S`$x=0$`, S`$x=\pm3$`, S`$x=\pm\sqrt3$`], "f′ = 3x² − 3.", planeDoc({ view: { xmin: -2, xmax: 2, ymin: -10, ymax: 10 }, curves: [{ f: (x) => 6 * x }], step: { x: 0.5, y: 2 } })),
  num(S`For $f''(x)=6x$, $f'(0)=-3$, $f(0)=1$, find the local minimum value of $f$.`, -1, "f = x³ − 3x + 1; f(1) = −1."),
  mc("The curve y = F(x) shown passes through (0, 1) and has F′(x) = 3x² − 4x. Which point is a local maximum?", "(0, 1)", ["(4/3, −5/27)", "(1, 0)", "(2, 1)"], "F = x³ − 2x² + 1; F′ = 0 at 0 and 4/3.", planeDoc({ view: { xmin: -1, xmax: 2.5, ymin: -1, ymax: 3 }, curves: [{ f: (x) => x ** 3 - 2 * x * x + 1 }], points: [P(0, 1, "", "red"), P(4 / 3, -5 / 27, false, "blue")], step: { x: 0.5, y: 0.5 } })),
  num(S`A tank's volume changes at $\frac{dV}{dt}=40-4t$ L/min, with $V(0)=100$. Find $V(10)$.`, 300, "V = 40t − 2t² + 100."),
  num(S`$F(x)=\int(3x^2+2)\,dx$ and $F(1)=4$. Find $F(-1)$.`, -2, "F = x³ + 2x + 1; F(−1) = −1 − 2 + 1."),
];
