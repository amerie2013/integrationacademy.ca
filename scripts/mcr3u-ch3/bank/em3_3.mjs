// 3.3 Solving Quadratic Equations — 20 easy + 20 medium questions
import { mc, ms, num, tf } from "./kit.mjs";
import { P, graph } from "./fig.mjs";

const V8 = { xmin: -8, xmax: 8, ymin: -10, ymax: 8 };

export const E = [
  num(String.raw`Find the larger root of $x^2-9x+20=0$.`, 5, "(x − 4)(x − 5)."),
  num(String.raw`Find the smaller root of $x^2+x-12=0$.`, -4, "(x + 4)(x − 3)."),
  num(String.raw`Find the positive root of $x^2=49$.`, 7, "±7."),
  num(String.raw`Solve $(x-6)^2=0$.`, 6, "A double root."),
  num(String.raw`Find the positive root of $3x^2=75$.`, 5, "x² = 25."),
  mc("Which is the quadratic formula?", String.raw`$x=\frac{-b\pm\sqrt{b^2-4ac}}{2a}$`, [String.raw`$x=\frac{b\pm\sqrt{b^2-4ac}}{2a}$`, String.raw`$x=\frac{-b\pm\sqrt{b^2+4ac}}{2a}$`, String.raw`$x=-b\pm\frac{\sqrt{b^2-4ac}}{2a}$`], "The whole numerator is divided by 2a."),
  num(String.raw`For $x^2-5x+3=0$, what is $b^2-4ac$?`, 13, "25 − 12."),
  num(String.raw`Find the positive root of $x^2-2x-15=0$.`, 5, "(x − 5)(x + 3)."),
  num(String.raw`Find the larger root of $2x^2-7x+3=0$.`, 3, "(2x − 1)(x − 3)."),
  tf(String.raw`$x^2+4=0$ has real roots.`, false, "x² = −4."),
  num(String.raw`A stone's height is $h(t)=-5t^2+45$. When does it land?`, 3, "t² = 9."),
  num("A square has area 81 m². What is its side length?", 9, "√81."),
  num(String.raw`Find the larger root of $x(x-8)=0$.`, 8, "x = 0 or 8."),
  mc(String.raw`Write $x^2=3x+10$ in standard form.`, String.raw`$x^2-3x-10=0$`, [String.raw`$x^2+3x+10=0$`, String.raw`$x^2-3x+10=0$`, String.raw`$x^2+3x-10=0$`], "Move every term to the left."),
  num("A rectangle is 2 m longer than wide and has area 48 m². What is its width?", 6, "w(w + 2) = 48."),
  num(String.raw`Find the positive root of $x^2+5x-14=0$.`, 2, "(x + 7)(x − 2)."),
  num(String.raw`Solve $4x^2-12x+9=0$.`, 1.5, "(2x − 3)².", null, 0.001),
  tf("In a time problem, a negative root is rejected.", true, "Time after launch is not negative."),
  num("Read the graph: what is the larger solution of x² − 2x − 8 = 0?", 4, "It crosses at −2 and 4.", graph((x) => x * x - 2 * x - 8, { xmin: -5, xmax: 7, ymin: -10, ymax: 8 }, [P(-2, 0), P(4, 0)])),
  num("The graph shows h(t) = −5t² + 10t + 15. When does the object land?", 3, "t² − 2t − 3 = 0.", graph((t) => -5 * t * t + 10 * t + 15, { xmin: 0, xmax: 4, ymin: 0, ymax: 22 }, [P(3, 0)], { a: 0, step: { x: 0.5, y: 2 } })),
];

export const M = [
  num(String.raw`Find the larger root of $x^2-4x-1=0$ (3 decimals).`, 2 + Math.sqrt(5), "2 ± √5.", null, 0.002),
  num(String.raw`Find the smaller root of $2x^2+3x-2=0$.`, -2, "(2x − 1)(x + 2)."),
  num(String.raw`Find the larger root of $3x^2-5x-1=0$ (3 decimals).`, (5 + Math.sqrt(37)) / 6, "(5 ± √37)/6.", null, 0.002),
  num(String.raw`Find the positive root of $x(x-5)=14$.`, 7, "x² − 5x − 14 = 0."),
  num(String.raw`$h(t)=-4.9t^2+19.6t+24.5$. When does the ball land?`, 5, "−4.9(t² − 4t − 5)."),
  num("A rectangle's length is 6 m more than its width and its area is 72 m². Find the width.", 6, "w(w + 6) = 72."),
  num(String.raw`Profit is $P(x)=-x^2+12x-20$. Find the larger break-even value.`, 10, "(x − 2)(x − 10)."),
  mc(String.raw`What are the exact roots of $x^2-6x+7=0$?`, String.raw`$3\pm\sqrt2$`, [String.raw`$3\pm\sqrt7$`, String.raw`$6\pm\sqrt2$`, String.raw`$-3\pm\sqrt2$`], "(x − 3)² = 2."),
  num("Two consecutive positive integers have a product of 156. What is the smaller?", 12, "n(n + 1) = 156."),
  num("A right triangle has legs x and x + 2 and hypotenuse 10. Find x.", 6, "x² + 2x − 48 = 0."),
  num(String.raw`Find the positive root of $(x+1)^2=2x+10$.`, 3, "x² = 9."),
  num(String.raw`Find the positive root of $0.5x^2+x-4=0$.`, 2, "×2: x² + 2x − 8 = 0."),
  tf(String.raw`From $(x-3)(x+2)=6$ we can conclude $x-3=6$ or $x+2=6$.`, false, "The zero-product property needs 0 on the right."),
  num(String.raw`$h(t)=-5t^2+25t$. For how many seconds is the ball above 20 m?`, 3, "t² − 5t + 4 = 0 → 1 and 4."),
  ms("Which equations have x = 3 as a root? Select all.", [String.raw`$x^2-9=0$`, String.raw`$x^2-6x+9=0$`, String.raw`$x^2+3x=0$`, String.raw`$2x^2-5x-3=0$`], [0, 1, 3], "Substitute 3."),
  num(String.raw`What is the sum of the roots of $x^2-11x+24=0$?`, 11, "3 + 8."),
  num(String.raw`Find the larger root of $5x^2-2x-3=0$.`, 1, "(5x + 3)(x − 1)."),
  num(String.raw`Find the larger root of $2x^2-x-4=0$ (3 decimals).`, (1 + Math.sqrt(33)) / 4, "(1 ± √33)/4.", null, 0.002),
  num("Read the graph of y = x² + 2x − 4: estimate the positive zero (2 decimals).", -1 + Math.sqrt(5), "x = −1 ± √5.", graph((x) => x * x + 2 * x - 4, V8, [P(-1 + Math.sqrt(5), 0, false)]), 0.01),
  num("The graph shows h(t) = −4.9t² + 9.8t + 14.7. When does it land?", 3, "t² − 2t − 3 = 0.", graph((t) => -4.9 * t * t + 9.8 * t + 14.7, { xmin: 0, xmax: 3.5, ymin: 0, ymax: 22 }, [P(3, 0)], { a: 0, step: { x: 0.5, y: 2 } })),
];
