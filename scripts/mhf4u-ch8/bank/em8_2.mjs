// 8.2 Products and Quotients of Functions — 20 easy + 20 medium questions
import { mc, ms, num, tf, fill, mx } from "./kit.mjs";
import { planeDoc } from "./fig.mjs";
const S = String.raw;

export const E = [
  num(S`$f(x)=x+3$ and $g(x)=2x-1$. Find $(fg)(2)$.`, 15, "5 × 3."),
  num(S`$f(x)=x^2$ and $g(x)=x-5$. Find $(fg)(-1)$.`, -6, "1 × (−6)."),
  num(S`$f(x)=x^2+4$ and $g(x)=x+1$. Find $\left(\frac fg\right)(3)$.`, 3.25, "13 ÷ 4.", null, 0.001),
  num(S`$f(x)=2^x$ and $g(x)=x$. Find $(fg)(3)$.`, 24, "8 × 3."),
  num(S`$f(x)=10x$ and $g(x)=x^2+1$. Find $\left(\frac fg\right)(2)$.`, 4, "20 ÷ 5."),
  mx(S`$f(x)=x-2$ and $g(x)=x+5$. Find $(fg)(x)$ expanded.`, "x^2+3*x-10", "FOIL."),
  mx(S`$f(x)=3x$ and $g(x)=x^2-2$. Find $(fg)(x)$.`, "3*x^3-6*x", "Distribute."),
  mx(S`Simplify $\dfrac{x^2-25}{x-5}$ for $x\ne5$.`, "x+5", "Factor the difference of squares."),
  mc(S`What is the domain of $\dfrac{x}{x+7}$?`, S`$x\ne-7$`, [S`$x\ne7$`, S`$x\ne0$`, S`all real $x$`], "The denominator cannot be 0."),
  mc(S`What are the zeros of $y=(x-4)(x+6)$?`, S`$4$ and $-6$`, [S`$-4$ and $6$`, S`$4$ only`, S`$24$`], "A product is zero when a factor is zero."),
  mc(S`$\tan x$ is the quotient…`, S`$\dfrac{\sin x}{\cos x}$`, [S`$\dfrac{\cos x}{\sin x}$`, S`$\sin x\cdot\cos x$`, S`$\dfrac1{\sin x}$`], "Definition."),
  tf(S`$(fg)(x)$ means $f(g(x))$.`, false, "It means f(x)·g(x)."),
  tf(S`A zero of the denominator is never in the domain of $\frac fg$.`, true, "Division by zero is not defined."),
  tf(S`The product of two odd functions is even.`, true, "(−f)(−g) = fg."),
  fill(S`$\dfrac{x^2-4}{x-2}$ has a ____ at $x=2$ (asymptote or hole).`, ["hole"], "The factor cancels."),
  fill(S`In $d(t)=6(0.5)^t\cos(2\pi t)$, the envelope is $6(0.5)^t$. Its value at $t=1$ is ____.`, ["3"], "6 × 0.5."),
  num(S`How many zeros does $y=x(x-1)(x+1)$ have?`, 3, "0, 1, −1."),
  num(S`$y=\dfrac{x-3}{x+2}$. Find its zero.`, 3, "Numerator zero."),
  mc("The graph shows y = f(x) (blue) and y = g(x) (gray). What is (fg)(1)?", "−2", ["1", "2", "3"], "f(1) = 2 and g(1) = −1.", planeDoc({ view: { xmin: -2, xmax: 4, ymin: -3, ymax: 5 }, lines: [{ m: 1, b: 1, color: "blue" }, { m: 1, b: -2, color: "gray" }], points: [{ x: 1, y: 2, label: "(1, 2)", color: "blue" }, { x: 1, y: -1, label: "(1, −1)", color: "gray" }], step: { x: 1, y: 1 } })),
  mc("The graph shows a damped wave and its envelope. What is the starting amplitude?", "4", ["2", "1", "8"], "The envelope starts at 4.", planeDoc({ view: { xmin: -0.2, xmax: 6, ymin: -4.5, ymax: 4.5 }, curves: [{ f: (t) => 4 * 0.7 ** t, a: 0, color: "gray" }, { f: (t) => 4 * 0.7 ** t * Math.cos(2 * Math.PI * t), a: 0, color: "violet" }], step: { x: 1, y: 1 } })),
];

export const M = [
  num(S`$y=\dfrac{x^2-1}{x-1}$. What is the $y$-coordinate of the hole?`, 2, "Simplifies to x + 1 at x = 1."),
  num(S`$d(t)=12(0.8)^t\cos(2\pi t)$. Find $d(2)$.`, 7.68, "12 × 0.64.", null, 0.001),
  num(S`The envelope $12(0.8)^t$ first falls below $3$ at what $t$? (two decimals)`, Math.log10(0.25) / Math.log10(0.8), "0.8ᵗ = 0.25.", null, 0.01),
  num(S`$y=(x+2)\cdot3^x$. Find $y(-3)$ (three decimals).`, -1 / 27, "−1 × 1/27.", null, 0.001),
  num(S`$y=x^2\sin x$. Find $y\left(\frac\pi2\right)$ (two decimals).`, Math.PI ** 2 / 4, "π²/4.", null, 0.01),
  num(S`How many vertical asymptotes does $y=\dfrac{x+1}{x^2-9}$ have?`, 2, "x = ±3; the numerator is non-zero there."),
  mx(S`$f(x)=x+4$ and $g(x)=x^2-4x+16$. Find $(fg)(x)$.`, "x^3+64", "Sum of cubes."),
  mc(S`Where is $y=(x-1)(x+3)$ negative?`, S`$-3<x<1$`, [S`$x<-3$ or $x>1$`, S`$x>1$`, S`$x<1$`], "Opposite signs between the zeros."),
  mc(S`What is the domain of $\dfrac{\sqrt{x}}{x-4}$?`, S`$x\ge0,\ x\ne4$`, [S`$x\ne4$`, S`$x>4$`, S`$x\ge0$`], "Root and denominator restrictions."),
  mc(S`$y=x\cos x$ is…`, "odd", ["even", "neither", "periodic"], "odd × even = odd."),
  mc(S`$\cot x=\frac{\cos x}{\sin x}$ has vertical asymptotes on $0<x<2\pi$ at…`, S`$x=\pi$`, [S`$x=\frac\pi2,\ \frac{3\pi}2$`, S`$x=0$ only`, S`none`], "sin x = 0 inside the open interval only at π."),
  ms(S`Select every product that is even.`, [S`$x^2\cos x$`, S`$x\sin x$`, S`$x^3\cos x$`, S`$\sin x\cos x$`], [0, 1], "even·even and odd·odd are even."),
  tf(S`$\dfrac{x^2+x-6}{x-2}$ has a vertical asymptote at $x=2$.`, false, "(x + 3)(x − 2)/(x − 2): a hole, not an asymptote."),
  tf(S`$y=(x+1)2^x$ approaches $0$ as $x\to-\infty$.`, true, "2ˣ shrinks faster than x + 1 grows."),
  fill(S`$\dfrac{(x+5)(x-1)}{x-1}$ has a hole at $x=$ ____.`, ["1"], "The common factor cancels."),
  num(S`Find the positive solution of $\dfrac{x^2-x}{x}=4$.`, 5, "x − 1 = 4 for x ≠ 0."),
  num(S`For $y=\dfrac{2x}{x-3}$, what is the horizontal asymptote $y=k$?`, 2, "Ratio of leading coefficients."),
  mc("The graph shows y = (x + 1)2ˣ. Where is it negative?", "x < −1", ["x > −1", "−1 < x < 0", "never"], "x + 1 < 0 and 2ˣ > 0.", planeDoc({ view: { xmin: -6, xmax: 2, ymin: -1, ymax: 6 }, curves: [{ f: (x) => (x + 1) * 2 ** x, color: "violet" }], step: { x: 1, y: 1 } })),
  mc("The graph shows y = (x² − 4)/(x − 2). What happens at x = 2?", "there is a hole at (2, 4)", ["vertical asymptote", "a zero", "the graph is undefined everywhere"], "It simplifies to x + 2.", planeDoc({ view: { xmin: -4, xmax: 5, ymin: -2, ymax: 7 }, curves: [{ f: (x) => x + 2, color: "violet" }], points: [{ x: 2, y: 4, label: "(2, 4)", color: "red" }], step: { x: 1, y: 1 } })),
  num(S`$y=\dfrac{\sin x}{x}$. Find $y(\pi)$.`, 0, "sin π = 0."),
];
