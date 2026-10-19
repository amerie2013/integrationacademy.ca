// 3.2 Maxima and Minima — 20 hard questions
import { mc, num, tf } from "./kit.mjs";
import { graph, P } from "./fig.mjs";

const S = String.raw;
export const TOPIC = "3.2 Maxima and Minima";
export const Q = [
  num("The graph of f(x) = x⁴ − 6x² + 8 is shown. Find its absolute minimum on [−2, 3].", -1, "f′ = 4x(x² − 3): f(±√3) = −1; f(−2) = 0, f(0) = 8, f(3) = 35.", graph((x) => x ** 4 - 6 * x * x + 8, { xmin: -2.5, xmax: 3.2, ymin: -3, ymax: 12 }, [P(-Math.sqrt(3), -1), P(Math.sqrt(3), -1), P(0, 8)], { step: { x: 0.5, y: 2 } })),
  num(S`$f(x)=x^3+ax+b$ has a local minimum at $(1,2)$. Find $b$.`, 4, "f′(1) = 3 + a = 0 ⇒ a = −3; f(1) = 1 − 3 + b = 2."),
  num(S`Find the absolute maximum of $f(x)=x\sqrt{9-x^2}$ on $[0,3]$.`, 4.5, "f′ = (9 − 2x²)/√(9 − x²): x = 3/√2, f = 9/2.", null, 0.0001),
  num(S`Find the absolute minimum of $f(x)=x^2+\frac{16}{x}$ on $[1,4]$.`, 12, "2x − 16/x² = 0 at x = 2: 4 + 8."),
  num("The graph of f(x) = x³ − 9x² + 24x on [0, 5] is shown. Find its absolute maximum.", 20, "f(0) = 0, f(2) = 20, f(4) = 16, f(5) = 20 — reached twice.", graph((x) => x ** 3 - 9 * x * x + 24 * x, { xmin: -0.3, xmax: 5.5, ymin: -2, ymax: 24 }, [P(2, 20), P(4, 16), P(5, 20)], { a: 0, b: 5, step: { x: 1, y: 4 } })),
  mc(S`For $f(x)=x^{4/5}$, the critical number $x=0$ is:`, "a minimum at a cusp (f′ does not exist)", ["a maximum", "an inflection point with a horizontal tangent", "not a critical number"], "f′ = (4/5)x^(−1/5): − then +, and no value at 0."),
  num(S`For which $k$ does $f(x)=x^3-3x+k$ have a local minimum value of 0?`, 2, "Local min at x = 1: −2 + k = 0."),
  tf(S`If $f$ has no critical numbers in $[a,b]$, its absolute extrema on $[a,b]$ occur at the endpoints.`, true, "Only endpoints remain as candidates."),
  num(S`Find the absolute maximum of $f(x)=\frac{x+1}{x^2+8}$ on $[0,5]$.`, 0.25, "Numerator of f′: −(x + 4)(x − 2); f(2) = 3/12.", null, 0.0001),
  num(S`Find the absolute minimum of $f(x)=x^{2/3}-2x^{1/3}$ on $[-1,8]$.`, -1, "f′ = (2/3)x^(−2/3)(x^(1/3) − 1): f(1) = −1; f(−1) = 3, f(0) = 0, f(8) = 0."),
  num("Profit is P(x) = −x³ + 6x² + 15x on [0, 8] (graph shown). Find the maximum profit.", 100, "P′ = −3(x − 5)(x + 1): P(5) = 100.", graph((x) => -(x ** 3) + 6 * x * x + 15 * x, { xmin: 0, xmax: 8.5, ymin: -90, ymax: 120 }, [P(5, 100)], { a: 0, b: 8, step: { x: 1, y: 20 } })),
  num(S`How many critical numbers does $f(x)=|x^2-9|$ have?`, 3, "Corners at ±3 and a horizontal tangent at 0."),
  num(S`Find the absolute maximum of $f(x)=x^2(x-3)^2$ on $[0,4]$.`, 16, "f(1.5) ≈ 5.06, but f(4) = 16."),
  mc(S`Which function has an absolute maximum on $(0,\infty)$?`, S`$\frac{4x}{x^2+1}$`, [S`$\frac1x$`, S`$x^2$`, S`$x^3$`], "4x/(x² + 1) peaks at x = 1."),
  num(S`$f(x)=cx^2-x^3$ has a local maximum at $x=4$. Find $c$.`, 6, "f′(4) = 8c − 48 = 0."),
  num(S`Find the absolute maximum of $f(x)=x-x^3$ on $[0,1]$ (4 decimals).`, 0.3849, "x = 1/√3.", null, 0.0005),
  num("The graph of f(x) = x³ − 3x² − 24x on [−3, 6] is shown. Find its absolute minimum.", -80, "f′ = 3(x − 4)(x + 2): f(−3) = 18, f(−2) = 28, f(4) = −80, f(6) = −36.", graph((x) => x ** 3 - 3 * x * x - 24 * x, { xmin: -3.5, xmax: 6.5, ymin: -90, ymax: 40 }, [P(-2, 28), P(4, -80), P(-3, 18), P(6, -36)], { a: -3, b: 6, step: { x: 1, y: 10 } })),
  tf("A local maximum can be lower than a local minimum of the same function.", true, "x + 1/x: local max −2, local min 2."),
  num(S`$f(x)=x^3+ax^2+bx$ has critical numbers $-1$ and $3$. Find $a$.`, -3, "f′ = 3(x + 1)(x − 3) = 3x² − 6x − 9."),
  num(S`Find the absolute minimum of $f(x)=x^2-2|x|$ on $[-2,2]$.`, -1, "At x = ±1."),
];
