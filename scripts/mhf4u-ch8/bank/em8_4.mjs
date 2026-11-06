// 8.4 Inequalities of Combined Functions — 20 easy + 20 medium questions
import { mc, ms, num, tf, fill } from "./kit.mjs";
import { planeDoc } from "./fig.mjs";
const S = String.raw;

export const E = [
  mc(S`Solve $x^2<25$.`, S`$-5<x<5$`, [S`$x<5$`, S`$x<-5$ or $x>5$`, S`$x>-5$`], "Between the roots."),
  mc(S`Solve $x^2-x-12>0$.`, S`$x<-3$ or $x>4$`, [S`$-3<x<4$`, S`$x>4$`, S`$-4<x<3$`], "(x − 4)(x + 3) > 0."),
  mc(S`Solve $2^x<16$.`, S`$x<4$`, [S`$x>4$`, S`$x<8$`, S`$x<2$`], "2ˣ is increasing."),
  mc(S`Solve $\left(\frac12\right)^x>4$.`, S`$x<-2$`, [S`$x>-2$`, S`$x>2$`, S`$x<2$`], "A decreasing exponential reverses the order."),
  mc(S`$f(x)>g(x)$ is the same as…`, S`$f(x)-g(x)>0$`, [S`$f(x)+g(x)>0$`, S`$\frac{f(x)}{g(x)}>1$`, S`$f(g(x))>0$`], "Subtract g from both sides."),
  num(S`How many integers satisfy $x^2\le4$?`, 5, "−2, −1, 0, 1, 2."),
  num(S`How many integers satisfy $x^2-5x+4<0$?`, 2, "1 < x < 4: 2 and 3."),
  num(S`$3^x\ge81$ for $x\ge a$. Find $a$.`, 4, "3⁴ = 81."),
  num(S`$\log x>2$ for $x>a$. Find $a$.`, 100, "x > 10²."),
  tf(S`Between two consecutive crossings, $f-g$ keeps the same sign.`, true, "It can only change sign at a crossing (for continuous functions)."),
  tf(S`To solve $\frac{x+1}{x-2}>1$ you may multiply both sides by $x-2$.`, false, "x − 2 may be negative."),
  tf(S`For $\ge$, the crossing points are included in the solution.`, true, "Equality is allowed."),
  fill(S`$x^2>9$ means $x<-3$ or $x>$ ____.`, ["3"], "Outside the roots."),
  fill(S`$\sin x>0$ on $0\le x\le2\pi$ for $0<x<$ ____ (write pi as "pi").`, ["pi", "π"], "Sine is positive in quadrants I and II."),
  mc(S`Solve $\cos x>0$ for $0\le x\le\pi$.`, S`$0\le x<\frac\pi2$`, [S`$\frac\pi2<x\le\pi$`, S`$0\le x\le\pi$`, S`$x=\frac\pi2$`], "Cosine is positive in quadrant I."),
  mc(S`Solve $x^3>0$.`, S`$x>0$`, [S`$x<0$`, S`all real $x$`, S`$x\ne0$`], "Odd power keeps the sign."),
  mc(S`Solve $5-x\ge2x-4$.`, S`$x\le3$`, [S`$x\ge3$`, S`$x\le-3$`, S`$x\ge1$`], "9 ≥ 3x."),
  num(S`For $x\ge1$, what is the smallest integer with $2^x>10x$?`, 6, "2⁵ = 32 < 50; 2⁶ = 64 > 60."),
  mc("The graph shows y = f(x) (violet) and y = g(x) (blue). Where is f(x) > g(x)?", "x < −1 or x > 3", ["−1 < x < 3", "x > 3 only", "x < −1 only"], "Violet is above blue outside the crossings.", planeDoc({ view: { xmin: -3, xmax: 5, ymin: -2, ymax: 10 }, curves: [{ f: (x) => x * x - 2 * x, color: "violet" }], lines: [{ m: 0, b: 3, color: "blue" }], points: [{ x: -1, y: 3, label: "(−1, 3)", color: "amber" }, { x: 3, y: 3, label: "(3, 3)", color: "amber" }], step: { x: 1, y: 1 } })),
  mc("The graph shows y = 2ˣ and y = 8. Where is 2ˣ ≤ 8?", "x ≤ 3", ["x ≥ 3", "x ≤ 8", "x < 0"], "2³ = 8.", planeDoc({ view: { xmin: -2, xmax: 4.5, ymin: -1, ymax: 16 }, curves: [{ f: (x) => 2 ** x, color: "violet" }], lines: [{ m: 0, b: 8, color: "blue", dash: true }], step: { x: 1, y: 2 } })),
];

export const M = [
  mc(S`Solve $x^3\le4x$.`, S`$x\le-2$ or $0\le x\le2$`, [S`$-2\le x\le0$ or $x\ge2$`, S`$-2\le x\le2$`, S`$x\le2$`], "x(x − 2)(x + 2) ≤ 0."),
  mc(S`Solve $\dfrac{x-4}{x+1}\le0$.`, S`$-1<x\le4$`, [S`$-1\le x\le4$`, S`$x<-1$ or $x\ge4$`, S`$x\le4$`], "x = −1 is excluded."),
  mc(S`Solve $\dfrac{x+2}{x-3}>1$.`, S`$x>3$`, [S`$x<3$`, S`$x>-2$`, S`$-2<x<3$`], "5/(x − 3) > 0."),
  mc(S`Solve $\sin x<-\frac12$ for $0\le x\le2\pi$.`, S`$\frac{7\pi}6<x<\frac{11\pi}6$`, [S`$\frac{\pi}6<x<\frac{5\pi}6$`, S`$\pi<x<2\pi$`, S`$\frac{5\pi}6<x<\frac{7\pi}6$`], "sin x = −1/2 at 7π/6 and 11π/6."),
  mc(S`Solve $2^x>x^2$ for $x\ge0$.`, S`$0\le x<2$ or $x>4$`, [S`$2<x<4$`, S`$x>4$`, S`$x>2$`], "Crossings at 2 and 4."),
  mc(S`Solve $x^4-10x^2+9<0$.`, S`$-3<x<-1$ or $1<x<3$`, [S`$-3<x<3$`, S`$1<x<9$`, S`$x<-3$ or $x>3$`], "(x² − 1)(x² − 9) < 0."),
  num(S`How many integers satisfy $x^3-9x<0$ with $x>-5$?`, 3, "x < −3 or 0 < x < 3: −4, 1, 2."),
  num(S`$\log_2x\ge x-1$ holds for $1\le x\le a$. Find $a$.`, 2, "Crossings at x = 1 (0 = 0) and x = 2 (1 = 1); the log is on top between them."),
  num(S`When does $500(1.05)^t$ first exceed $700+20t$? (one decimal)`, 13.6, "Table: t = 13: 943 < 960; t = 14: 990 > 980; refine to t ≈ 13.6.", null, 0.1),
  num(S`Find the right endpoint of the interval where $2x+8\ge x^2$.`, 4, "x² − 2x − 8 ≤ 0 ⇒ −2 ≤ x ≤ 4."),
  ms(S`Select every value in the solution of $x^2>2x+3$.`, ["−2", "0", "3", "4"], [0, 3], "x < −1 or x > 3; 3 is a crossing (not included)."),
  tf(S`$x^2+1>0$ for every real $x$.`, true, "x² ≥ 0."),
  tf(S`The solution of $\frac{1}{x}<1$ is $x>1$.`, false, "Also x < 0: (1 − x)/x < 0."),
  fill(S`$\dfrac{x-1}{x+5}\ge0$ is true for $x<-5$ or $x\ge$ ____.`, ["1"], "Sign chart."),
  fill(S`$\tan x>1$ on $0<x<\frac\pi2$ for $\ $ ____ $<x<\frac\pi2$ (write "pi/4").`, ["pi/4", "π/4"], "tan(π/4) = 1."),
  num(S`For $x>0$, solve $\log x<1$ and enter the largest integer in the solution.`, 9, "0 < x < 10."),
  mc("The graph shows y = x³ and y = 4x. Where is x³ > 4x?", "−2 < x < 0 or x > 2", ["x < −2 or 0 < x < 2", "x > 2", "−2 < x < 2"], "The cubic is above the line there.", planeDoc({ view: { xmin: -3.5, xmax: 3.5, ymin: -14, ymax: 14 }, curves: [{ f: (x) => x ** 3, color: "violet" }], lines: [{ m: 4, b: 0, color: "blue" }], step: { x: 1, y: 2 } })),
  mc("The graph shows y = sin x and y = cos x on [0, 2π]. Where is cos x > sin x?", "0 ≤ x < π/4 or 5π/4 < x ≤ 2π", ["π/4 < x < 5π/4", "0 ≤ x < π/2", "π < x < 2π"], "Cosine is on top outside the crossings.", planeDoc({ view: { xmin: -0.2, xmax: 6.5, ymin: -1.3, ymax: 1.3 }, curves: [{ f: Math.sin, a: 0, b: 2 * Math.PI, color: "violet" }, { f: Math.cos, a: 0, b: 2 * Math.PI, color: "blue" }], step: { x: 0.5, y: 0.5 } })),
  num(S`How many integers satisfy $\dfrac{x+3}{x-4}<0$?`, 6, "−3 < x < 4: −2, …, 3."),
  num(S`Solve $3x-2>x+6$ and enter the boundary value.`, 4, "2x > 8."),
];
