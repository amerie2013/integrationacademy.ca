// 3.1 Increasing and Decreasing Functions — 20 hard questions
import { mc, num, tf } from "./kit.mjs";
import { graph, P } from "./fig.mjs";

const S = String.raw;
export const TOPIC = "3.1 Increasing and Decreasing Functions";
export const Q = [
  num("The graph of f(x) = x⁴ − 4x³ + 4x² is shown. On how many separate intervals is f increasing?", 2, "f′ = 4x(x − 1)(x − 2): (0, 1) and (2, ∞).", graph((x) => x ** 4 - 4 * x ** 3 + 4 * x * x, { xmin: -0.8, xmax: 2.8, ymin: -0.5, ymax: 3 }, [P(0, 0), P(1, 1), P(2, 0)], { step: { x: 0.5, y: 0.5 } })),
  num(S`$f(x)=\frac{x}{x^2+25}$ is increasing on $(-a,a)$. Find $a$.`, 5, "Numerator of f′: 25 − x²."),
  num(S`$f(x)=\frac{x^2}{x-5}$ is decreasing on $(0,5)$ and $(5,b)$. Find $b$.`, 10, "f′ = x(x − 10)/(x − 5)²."),
  num(S`$f(x)=x^{2/3}(5-x)$ is increasing on $(0,b)$. Find $b$.`, 2, "f′ = (5/3)x^(−1/3)(2 − x)."),
  mc(S`For which $k$ is $f(x)=x^3+kx^2+12x$ increasing for all $x$?`, S`$-6\le k\le6$`, [S`$k\ge6$`, S`$k\le-6$`, S`$-12\le k\le12$`], "3x² + 2kx + 12 ≥ 0: 4k² − 144 ≤ 0."),
  num(S`$f(x)=x-4\sqrt x$ is decreasing on $(0,b)$. Find $b$.`, 4, "1 − 2/√x < 0 ⇔ √x < 2."),
  num("The graph of f′(x) = −(x − 1)²(x + 3) is shown. f is increasing for x < a. Find a.", -3, "f′ > 0 only left of −3; the double root at 1 does not change the sign.", graph((x) => -((x - 1) ** 2) * (x + 3), { xmin: -4.5, xmax: 2.5, ymin: -10, ymax: 12 }, [P(-3, 0), P(1, 0)], { step: { x: 0.5, y: 2 } })),
  num(S`$f(x)=x^4+8x^3$ is decreasing for $x\lt a$. Find $a$.`, -6, "f′ = 4x²(x + 6)."),
  tf("If f and g are both increasing on an interval, so is f + g.", true, "(f + g)′ = f′ + g′ > 0."),
  tf(S`If $f$ is increasing, then $f^2$ is increasing.`, false, "f(x) = x on (−2, 0): x² decreases."),
  num(S`$f(x)=x^3+bx^2+cx$ is decreasing exactly on $(1,5)$. Find $b$.`, -9, "f′ = 3(x − 1)(x − 5) = 3x² − 18x + 15, so 2b = −18."),
  num("Sales are S(t) = 300t/(t² + 36) thousand after t weeks (graph shown). For how many weeks do they increase?", 6, "Numerator of S′: 300(36 − t²).", graph((t) => (300 * t) / (t * t + 36), { xmin: 0, xmax: 30, ymin: 0, ymax: 30 }, [P(6, 25)], { a: 0, b: 30, step: { x: 5, y: 5 } })),
  num(S`$f(x)=\frac{x+1}{x^2+3}$ is increasing on $(-3,b)$. Find $b$.`, 1, "Numerator of f′: −(x + 3)(x − 1)."),
  num(S`$f(x)=x\sqrt{8-x^2}$ is increasing on $(-a,a)$. Find $a$.`, 2, "f′ = (8 − 2x²)/√(8 − x²)."),
  mc(S`$f'(x)=x^2(x-1)^3(x+2)$. Where is $f$ decreasing?`, S`only on $(-2,1)$`, [S`on $(-\infty,-2)$ and $(0,1)$`, S`on $(-2,0)$ only`, S`on $(1,\infty)$`], "x² never changes sign; check (x − 1)³(x + 2)."),
  num(S`$f(x)=3x^5-5x^3$ is decreasing on $(-a,a)$. Find $a$.`, 1, "f′ = 15x²(x² − 1)."),
  num(S`A profit model is $P(t)=t^3-12t^2+45t$. For how long (in units of $t$) does profit fall?`, 2, "P′ = 3(t − 3)(t − 5): falling on (3, 5)."),
  num("The graph of f(x) = (x² − 4)² is shown. On how many separate intervals is f decreasing?", 2, "f′ = 4x(x² − 4): (−∞, −2) and (0, 2).", graph((x) => (x * x - 4) ** 2, { xmin: -3, xmax: 3, ymin: -2, ymax: 20 }, [P(-2, 0), P(0, 16), P(2, 0)], { step: { x: 1, y: 4 } })),
  num(S`What is the largest $a$ for which $f(x)=x^3+ax^2+27x$ is increasing for all $x$?`, 9, "4a² − 324 ≤ 0."),
  num(S`$f(x)=\frac{x}{(x-1)^2}$ is increasing on $(a,1)$. Find $a$.`, -1, "f′ = −(x + 1)/(x − 1)³."),
];
