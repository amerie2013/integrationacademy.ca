// 8.4 Inequalities of Combined Functions — 20 hard questions
import { mc, ms, num, tf } from "./kit.mjs";
import { planeDoc } from "./fig.mjs";
const S = String.raw;

export const TOPIC = "8.4 Inequalities of Combined Functions";
export const Q = [
  mc(S`Solve $\dfrac{2x-1}{x+3}\ge1$.`, S`$x<-3$ or $x\ge4$`, [S`$-3<x\le4$`, S`$x\ge4$`, S`$x\le-3$ or $x\ge4$`], "(x − 4)/(x + 3) ≥ 0; −3 excluded."),
  mc(S`Solve $\dfrac{x^2-4}{x}\le0$.`, S`$x\le-2$ or $0<x\le2$`, [S`$-2\le x<0$ or $x\ge2$`, S`$-2\le x\le2$`, S`$x\le2$`], "Sign chart with −2, 0, 2."),
  mc(S`Solve $\dfrac{x+1}{x-2}\le0$.`, S`$-1\le x<2$`, [S`$-1\le x\le2$`, S`$x\le-1$ or $x>2$`, S`$x<2$`], "Zero at −1 included; x = 2 excluded."),
  mc(S`Solve $2\sin x\ge\sqrt3$ for $0\le x\le2\pi$.`, S`$\frac\pi3\le x\le\frac{2\pi}3$`, [S`$\frac\pi6\le x\le\frac{5\pi}6$`, S`$\frac{\pi}3\le x\le\frac{5\pi}3$`, S`$0\le x\le\frac\pi3$`], "sin x ≥ √3/2."),
  mc(S`Solve $\cos2x>\cos x$ for $0\le x\le\pi$.`, S`$\frac{2\pi}3<x\le\pi$`, [S`$0<x<\frac{2\pi}3$`, S`$0\le x\le\pi$`, S`$\frac\pi3<x<\frac{2\pi}3$`], "2c² − c − 1 > 0 ⇒ (2c + 1)(c − 1) > 0 ⇒ c < −1/2."),
  num(S`How many integers satisfy $x^4<9x^2$?`, 4, "x²(x² − 9) < 0, x ≠ 0: ±1, ±2."),
  num(S`How many positive integers satisfy $\dfrac{(x-2)(x+3)}{x-5}\le0$?`, 3, "x ≤ −3 or 2 ≤ x < 5: positive integers 2, 3, 4."),
  num(S`Find the left endpoint of the solution of $x^2-6x+5<0$.`, 1, "(x − 1)(x − 5) < 0."),
  num(S`For $x\ge0$, $3^x<4x+1$ holds for $0<x<a$. Find $a$ (exact crossing).`, 2, "3² = 9 = 4(2) + 1."),
  num(S`When does $1000(1.06)^t$ exceed $1500+40t$? (one decimal)`, 11.6, "Table: t = 11: 1898 < 1940; t = 12: 2012 > 1980; refine to t ≈ 11.6.", null, 0.1),
  num(S`For $x>0$, solve $x+\frac{16}x\le10$ and enter the right endpoint.`, 8, "x² − 10x + 16 ≤ 0 ⇒ 2 ≤ x ≤ 8."),
  ms(S`Select every interval inside the solution of $x^3-x^2-6x>0$.`, [S`$(-2,0)$`, S`$(3,5)$`, S`$(0,3)$`, S`$(-5,-2)$`], [0, 1], "x(x − 3)(x + 2) > 0."),
  tf(S`If $f(x)>g(x)$ for all $x$, then $f(x)-g(x)$ has no zeros.`, true, "The difference is always positive."),
  tf(S`$2^x\ge x+1$ for every real $x$.`, false, "At x = 0.5: 1.414 < 1.5."),
  mc(S`Why must $1.01^x$ eventually exceed $100x$?`, "exponential growth eventually outpaces any linear growth", ["because 1.01 > 1 only", "because 100x is decreasing", "it never does"], "The ratio 1.01ˣ/x grows without bound."),
  mc("The graph shows y = (2x − 1)/(x + 3) and y = 1. Where is the curve on or above the line?", "x < −3 or x ≥ 4", ["−3 < x ≤ 4", "x ≥ 4", "x > −3"], "Compare with the sign chart.", planeDoc({ view: { xmin: -10, xmax: 8, ymin: -6, ymax: 10 }, curves: [{ f: (x) => (2 * x - 1) / (x + 3), b: -3.1, color: "violet" }, { f: (x) => (2 * x - 1) / (x + 3), a: -2.9, color: "violet" }], lines: [{ m: 0, b: 1, color: "blue", dash: true }], step: { x: 1, y: 1 } })),
  mc("The graph shows y = 3ˣ and y = 4x + 1. Where is 3ˣ < 4x + 1?", "0 < x < 2", ["x > 2", "x < 0", "−1 < x < 2"], "Crossings at 0 and 2.", planeDoc({ view: { xmin: -1.5, xmax: 3, ymin: -2, ymax: 15 }, curves: [{ f: (x) => 3 ** x, color: "violet" }], lines: [{ m: 4, b: 1, color: "blue" }], step: { x: 0.5, y: 1 } })),
  mc("The graph shows y = x³ − x² − 6x. Where is it positive?", "−2 < x < 0 or x > 3", ["x < −2 or 0 < x < 3", "x > 3", "−2 < x < 3"], "Read the parts above the x-axis.", planeDoc({ view: { xmin: -3.5, xmax: 4.5, ymin: -15, ymax: 15 }, curves: [{ f: (x) => x ** 3 - x * x - 6 * x, color: "violet" }], step: { x: 1, y: 2 } })),
  mc("The graph shows two savings plans. When does the exponential plan (violet) pay more?", "after about 11.6 years", ["always", "never", "after about 5 years"], "Read where the curve passes above the line.", planeDoc({ view: { xmin: 0, xmax: 25, ymin: 800, ymax: 4500 }, curves: [{ f: (t) => 1000 * 1.06 ** t, a: 0, color: "violet" }], lines: [{ m: 40, b: 1500, color: "blue" }], step: { x: 5, y: 500 } })),
  num(S`How many positive solutions does $\sin x=\frac x4$ have?`, 1, "One positive crossing near x ≈ 2.47 (the line passes above 1 after x = 4)."),
];
