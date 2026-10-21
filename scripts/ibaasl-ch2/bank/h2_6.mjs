// 2.6 Inverse Functions — 20 hard questions
import { mc, ms, num, tf } from "./kit.mjs";
import { planeDoc, P } from "../../mcr3u-ch1/bank/fig.mjs";

const S = String.raw;
const YX = { f: (x) => x, color: "gray" };

export const TOPIC = "2.6 Inverse Functions";
export const Q = [
  num(S`$f(x)=(x-2)^2+1$, $x\ge2$ (shown). Find $f^{-1}(10)$.`, 5, "(x − 2)² = 9, x ≥ 2.", planeDoc({ view: { xmin: -1, xmax: 7, ymin: -1, ymax: 12 }, curves: [{ f: (x) => (x - 2) ** 2 + 1, a: 2, color: "violet" }], lines: [{ m: 0, b: 10, color: "green", dash: true }], points: [P(5, 10)] })),
  num(S`$f(x)=x^2-8x$, $x\ge4$. Find $f^{-1}(9)$.`, 9, "(x − 4)² = 25, x ≥ 4."),
  num(S`$f(x)=\frac{3x+1}{x-3}$ is its own inverse. Find $f^{-1}(1)$.`, -2, "f⁻¹(1) = f(1) = 4/(−2)."),
  num(S`$f(x)=3x-2$, $g(x)=x^3$. Find $(g\circ f)^{-1}(64)$.`, 2, "Undo g: ∛64 = 4; undo f: (4 + 2)/3."),
  num(S`The graphs of $f(x)=\frac{x^3}{4}$ (violet) and its inverse (green) are shown. How many times do they meet?`, 3, "x³/4 = x at x = 0, ±2.", planeDoc({ view: { xmin: -4, xmax: 4, ymin: -4, ymax: 4 }, curves: [{ f: (x) => x ** 3 / 4, color: "violet" }, { f: (x) => Math.cbrt(4 * x), color: "green" }, YX], points: [P(-2, -2, null, "red"), P(0, 0, null, "red"), P(2, 2, null, "red")] })),
  num(S`$f(x)=4-x^2$, $x\ge0$. Find $f^{-1}(3)$.`, 1, "4 − x² = 3, x ≥ 0."),
  tf("A decreasing function and its inverse can meet at a point that is not on y = x.", true, "e.g. f(x) = −x³ and its inverse both pass through (1, −1)."),
  num(S`$f(x)=\frac{x+5}{2}$. Find $f^{-1}(f^{-1}(9))$.`, 21, "f⁻¹(x) = 2x − 5: 9 → 13 → 21."),
  num(S`$f(x)=x^2+6x$, $x\ge-3$. Find $f^{-1}(16)$.`, 2, "(x + 3)² = 25, x ≥ −3."),
  num(S`The line $y=f(x)$ passes through $(0,-3)$, $(2,1)$ and $(4,5)$. Find $f^{-1}(5)$.`, 4, "f(4) = 5.", planeDoc({ view: { xmin: -2, xmax: 6, ymin: -4, ymax: 7 }, curves: [{ f: (x) => 2 * x - 3, color: "violet" }], points: [P(0, -3), P(2, 1), P(4, 5)] })),
  ms(S`For $f(x)=\sqrt{x+1}$, $x\ge-1$, which statements are true? Select all.`, [S`$f^{-1}(x)=x^2-1$`, S`the domain of $f^{-1}$ is $x\ge0$`, S`the range of $f^{-1}$ is $y\ge-1$`, S`$f^{-1}(2)=1$`], [0, 1, 2], "f⁻¹(2) = 3."),
  num(S`$f(x)=\frac{2x+5}{x-2}$ is self-inverse. Find $f^{-1}(3)$.`, 11, "f⁻¹(3) = f(3) = 11/1."),
  num(S`$f(x)=x^3+x$. Find $f^{-1}(10)$.`, 2, "8 + 2 = 10."),
  num(S`At what $x$ does $f(x)=3x-4$ meet $f^{-1}(x)$?`, 2, "3x − 4 = x."),
  num(S`The graph shows $f(x)=(x-1)^2+1$, $x\ge1$, and its inverse. What is the smallest $x$ in the domain of $f^{-1}$?`, 1, "The range of f is y ≥ 1.", planeDoc({ view: { xmin: -1, xmax: 6, ymin: -1, ymax: 6 }, curves: [{ f: (x) => (x - 1) ** 2 + 1, a: 1, color: "violet" }, { f: (x) => 1 + Math.sqrt(x - 1), a: 1, color: "green" }, YX], points: [P(1, 1)] })),
  num(S`$f(x)=2x+k$ and $f^{-1}(7)=1$. Find $k$.`, 5, "f(1) = 7."),
  tf("If f is increasing, then f⁻¹ is increasing.", true, "Reflection in y = x keeps the direction."),
  num(S`$f(x)=\frac{1}{x+3}-1$. Find the vertical asymptote of $f^{-1}$ (the x-value).`, -1, "f⁻¹(x) = 1/(x + 1) − 3: asymptotes swap."),
  mc(S`The inverse of $f(x)=\sqrt{16-x}$, $x\le16$, is:`, S`$16-x^2$, $x\ge0$`, [S`$16+x^2$, $x\ge0$`, S`$x^2-16$, $x\ge0$`, S`$16-x^2$, $x\le0$`], "x = √(16 − y) ⇒ y = 16 − x², and x ≥ 0."),
  num(S`$f(x)=\frac{x-4}{x+2}$. Which value is excluded from the domain of $f^{-1}$?`, 1, "f⁻¹(x) = (2x + 4)/(1 − x)."),
];
