// 1.4 Domain and Range — 20 hard questions
import { mc, ms, num, tf } from "./kit.mjs";
import { planeDoc, P, graph } from "./fig.mjs";

export const TOPIC = "1.4 Domain and Range";
export const Q = [
  num(String.raw`$f(x)=x^2-4x+7$ on $0\le x\le5$. What is the largest value in the range?`, 12, "f(0) = 7, f(5) = 12, vertex value 3.", graph((x) => x * x - 4 * x + 7, { xmin: -1, xmax: 6, ymin: 0, ymax: 14 }, [P(0, 7), P(2, 3), P(5, 12)], { a: 0, b: 5, step: { x: 1, y: 2 } })),
  num(String.raw`$f(x)=x^2-4x+7$ on $0\le x\le5$. What is the smallest value in the range?`, 3, "Vertex (2, 3) is inside the interval."),
  mc(String.raw`What is the domain of $f(x)=\sqrt{x^2-9}$?`, String.raw`$x\le-3$ or $x\ge3$`, [String.raw`$-3\le x\le3$`, String.raw`$x\ge3$`, String.raw`$x\ge9$`], "x² ≥ 9."),
  num(String.raw`The domain of $\sqrt{x+4}+\sqrt{6-x}$ is an interval. How long is it?`, 10, "−4 ≤ x ≤ 6."),
  num(String.raw`What is the largest value of $\frac{8}{x^2+2}$?`, 4, "Largest at x = 0."),
  mc(String.raw`What is the range of $f(x)=\frac{x^2+1}{x^2}$?`, String.raw`$y>1$`, [String.raw`$y\ge1$`, String.raw`$y>0$`, String.raw`$y\ne0$`], "f(x) = 1 + 1/x² with 1/x² > 0."),
  num("A farmer has 100 m of fence for three sides of a pen against a barn: A(w) = w(100 − 2w). What is the largest possible area (m²)?", 1250, "Zeros 0 and 50; vertex at w = 25: 25 × 50."),
  num(String.raw`A ball's height is $h(t)=-4.9t^2+24.5t$. How long is the domain interval (in s)?`, 5, "t(24.5 − 4.9t) = 0 → t = 5."),
  mc("Domain and range of the function graphed?", String.raw`$x\le4$; $y\le2$`, [String.raw`$x\ge4$; $y\ge2$`, String.raw`$x\le4$; $y\ge2$`, String.raw`$x\ge-4$; $y\le2$`], "y = −√(4 − x) + 2 starts at (4, 2) and goes left and down.", graph((x) => -Math.sqrt(4 - x) + 2, { xmin: -8, xmax: 6, ymin: -6, ymax: 4 }, [P(4, 2)], { b: 4 })),
  num(String.raw`$f(x)=x^2$ with domain $-3\le x\le1$. What is the largest value in the range?`, 9, "At x = −3."),
  num(String.raw`$f(x)=x^2$ with domain $-3\le x\le1$. What is the smallest value in the range?`, 0, "x = 0 is inside the domain."),
  mc(String.raw`Which function has domain $x\ne3$ and range $y\ne-2$?`, String.raw`$y=\frac1{x-3}-2$`, [String.raw`$y=\frac1{x+3}-2$`, String.raw`$y=\frac1{x-2}+3$`, String.raw`$y=\frac1{x+2}-3$`], "Asymptotes x = 3, y = −2."),
  ms(String.raw`Which functions have range $y\ge0$? Select all.`, [String.raw`$|x-5|$`, String.raw`$\sqrt{x+3}$`, String.raw`$(x-1)^2$`, String.raw`$x^2-1$`, String.raw`$-|x|$`], [0, 1, 2], "x² − 1 ≥ −1; −|x| ≤ 0."),
  num(String.raw`How many x-values are excluded from the domain of $\frac1{x^3-4x}$?`, 3, "x(x − 2)(x + 2) = 0."),
  num("A rectangle has its base on the x-axis and its top corners on y = 9 − x². Its area is A(x) = 2x(9 − x²). What is the largest x in the domain?", 3, "Need 9 − x² > 0 and x > 0: 0 < x < 3.", planeDoc({ view: { xmin: -4, xmax: 4, ymin: -1, ymax: 10 }, curves: [{ f: (x) => 9 - x * x, color: "violet" }], segs: [{ pts: [[-2, 0], [-2, 5], [2, 5], [2, 0]], color: "green" }], points: [P(2, 5, "(x, 9 − x²)")] })),
  mc(String.raw`A tank holds $V(t)=600-40t$ litres until empty. Domain and range?`, String.raw`$0\le t\le15$; $0\le V\le600$`, [String.raw`$t\ge0$; $V\le600$`, String.raw`$0\le t\le600$; $0\le V\le15$`, String.raw`$t\in\mathbb R$; $V\in\mathbb R$`], "Empty when 40t = 600."),
  num(String.raw`What is the smallest integer in the range of $f(x)=\sqrt{x-1}+2.5$?`, 3, "Range y ≥ 2.5."),
  tf("If the domain of a function is all real numbers, its range must be all real numbers.", false, "y = x² has domain ℝ but range y ≥ 0."),
  num("The function graphed is made of straight pieces. What is the difference between the largest and smallest values in its range?", 7, "Range −2 ≤ y ≤ 5.", planeDoc({ view: { xmin: -6, xmax: 7, ymin: -4, ymax: 7 }, segs: [{ pts: [[-4, 1], [-1, 5], [2, -2], [5, 0]] }], points: [P(-4, 1), P(-1, 5), P(2, -2), P(5, 0)] })),
  mc(String.raw`Which quadratic has range $y\ge-3$ and zeros $1$ and $5$?`, String.raw`$y=\tfrac34(x-3)^2-3$`, [String.raw`$y=(x-3)^2-3$`, String.raw`$y=-\tfrac34(x-3)^2-3$`, String.raw`$y=\tfrac34(x+3)^2-3$`], "Vertex (3, −3); 4a − 3 = 0 → a = 3/4."),
];
