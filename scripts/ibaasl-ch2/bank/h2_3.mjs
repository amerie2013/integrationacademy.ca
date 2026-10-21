// 2.3 Graphs of Functions — 20 hard questions
import { mc, ms, num, tf } from "./kit.mjs";
import { planeDoc, P } from "../../mcr3u-ch1/bank/fig.mjs";

const S = String.raw;

export const TOPIC = "2.3 Graphs of Functions";
export const Q = [
  num(S`$y=x^3-6x^2$ has a local minimum at $x=4$. Find its value.`, -32, "64 − 96."),
  num(S`How many solutions does $x^3-6x^2=-10$ have?`, 3, "The local max is 0 and the local min is −32; −10 lies between."),
  num(S`For which $k$ does the graph of $y=x^2-4x+k$ touch the x-axis?`, 4, "Discriminant 16 − 4k = 0."),
  num(S`Find the x-intercept of $y=\frac{3x-6}{x+1}$.`, 2, "3x − 6 = 0."),
  num(S`State the horizontal asymptote of $y=\frac{3x-6}{x+1}$ (the y-value).`, 3, "Ratio of the leading coefficients."),
  num(S`The graphs of $y=2^x$ and $y=3-x$ are shown. Find the x-coordinate where they meet.`, 1, "2¹ = 2 = 3 − 1.", planeDoc({ view: { xmin: -3, xmax: 4, ymin: -1, ymax: 7 }, curves: [{ f: (x) => 2 ** x, color: "violet" }, { f: (x) => 3 - x, color: "blue" }], points: [P(1, 2, null, "red")] })),
  tf("Every cubic graph has exactly two turning points.", false, "y = x³ has none."),
  num(S`$y=x^4-8x^2$ (shown) has local minima at $x=\pm2$. Find the minimum value.`, -16, "16 − 32.", planeDoc({ view: { xmin: -4, xmax: 4, ymin: -18, ymax: 10 }, curves: [{ f: (x) => x ** 4 - 8 * x * x, color: "violet" }], points: [P(-2, -16), P(2, -16), P(0, 0)], step: { x: 1, y: 2 } })),
  num(S`How many solutions does $x^4-8x^2=-10$ have?`, 4, "−10 lies between the minimum −16 and the local maximum 0."),
  num(S`A drink cools as $T(t)=60(0.7)^t+15$ (shown). State the horizontal asymptote (the T-value).`, 15, "0.7ᵗ → 0.", planeDoc({ view: { xmin: -0.5, xmax: 12, ymin: 0, ymax: 80 }, curves: [{ f: (t) => 60 * 0.7 ** t + 15, a: 0, color: "violet" }], lines: [{ m: 0, b: 15, color: "red", dash: true }], step: { x: 1, y: 10 }, xlabel: "t", ylabel: "T" })),
  num(S`For $T(t)=60(0.7)^t+15$, find $t$ when $T=30$ (2 d.p.).`, 3.89, "0.7ᵗ = 0.25: t = ln 0.25 / ln 0.7.", null, 0.01),
  ms(S`Which statements about $y=\frac{5}{x-2}+1$ are true? Select all.`, ["vertical asymptote x = 2", "horizontal asymptote y = 1", "y-intercept −1.5", "x-intercept x = −3"], [0, 1, 2, 3], "5/(x − 2) = −1 gives x = −3."),
  mc("A quartic graph with a positive leading coefficient:", "rises at both ends", ["falls at both ends", "rises on the left and falls on the right", "has a horizontal asymptote"], "x⁴ is large and positive for large |x|."),
  num(S`Find the x-coordinate where $y=2x+1$ meets $y=\frac1x$ for $x>0$.`, 0.5, "2x² + x − 1 = 0.", null, 1e-9),
  num(S`The graph of $y=x^3-6x^2+9x+1$ is shown. What is its local maximum value?`, 5, "At x = 1: 1 − 6 + 9 + 1.", planeDoc({ view: { xmin: -1, xmax: 5, ymin: -2, ymax: 7 }, curves: [{ f: (x) => x ** 3 - 6 * x * x + 9 * x + 1, color: "violet" }], points: [P(1, 5), P(3, 1)] })),
  num(S`How many x-intercepts does $y=x^2-6x+9$ have?`, 1, "(x − 3)²."),
  tf(S`$y=\frac{1}{x^2+1}$ has a vertical asymptote.`, false, "The denominator is never 0."),
  num(S`How many of $y=x^3$, $y=x^2$, $y=\frac1x$, $y=x+1$ have rotational symmetry about the origin?`, 2, "x³ and 1/x."),
  num(S`$y=\frac{a}{x-h}+k$ has asymptotes $x=3$, $y=-2$ and passes through $(4,1)$. Find $a$.`, 3, "a/1 − 2 = 1."),
  num(S`Use a GDC to find the minimum value of $y=x^2+\frac{4}{x^2}$.`, 4, "At x = ±√2: 2 + 2."),
];
