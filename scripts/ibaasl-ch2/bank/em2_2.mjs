// 2.2 Function Notation — 20 easy + 20 medium questions
import { mc, ms, num, tf, fill, mx } from "./kit.mjs";
import { planeDoc, P } from "../../mcr3u-ch1/bank/fig.mjs";

const S = String.raw;

export const E = [
  num(S`For $f(x)=2x+7$, find $f(3)$.`, 13, "6 + 7."),
  num(S`For $f(x)=x^2-1$, find $f(-3)$.`, 8, "9 − 1."),
  num(S`For $g(x)=10-x$, find $g(4)$.`, 6, "10 − 4."),
  num(S`For $h(t)=t^3$, find $h(2)$.`, 8, "2³."),
  num(S`For $f(x)=4x$, solve $f(x)=20$.`, 5, "4x = 20."),
  num(S`For $f(x)=x+9$, solve $f(x)=2$.`, -7, "x = 2 − 9."),
  mc(S`What does $f(5)$ mean?`, "the output when the input is 5", ["f multiplied by 5", "the input that gives output 5", "5 divided by f"], "f(5) is the value of f at 5."),
  tf(S`$f(2x)$ always equals $2f(x)$.`, false, "For f(x) = x², f(2x) = 4x² but 2f(x) = 2x²."),
  num(S`For $f(x)=\frac6x$, find $f(2)$.`, 3, "6 ÷ 2."),
  num(S`For $f(x)=\sqrt x$, find $f(49)$.`, 7, "√49."),
  num(S`For $f(x)=3x^2$, find $f(1)+f(-1)$.`, 6, "3 + 3."),
  fill(S`In $f(x)=2x+1$, the letter $x$ stands for the ___ of the function.`, ["input", "Input", "variable"], "x is the input; f(x) is the output."),
  num("The graph shows y = f(x). Read off f(2).", 3, "The point (2, 3) is on the line.", planeDoc({ view: { xmin: -2, xmax: 5, ymin: -2, ymax: 6 }, curves: [{ f: (x) => x + 1, color: "violet" }], points: [P(2, 3)] })),
  num("The graph shows y = f(x). Read off f(−2).", 2, "The point (−2, 2) is on the curve.", planeDoc({ view: { xmin: -4, xmax: 4, ymin: -3, ymax: 6 }, curves: [{ f: (x) => x * x - 2, color: "violet" }], points: [P(-2, 2)] })),
  num(S`For the constant function $f(x)=5$, find $f(100)$.`, 5, "Every input gives 5."),
  num(S`For $f:x\mapsto x-4$, find $f(0)$.`, -4, "0 − 4."),
  tf(S`An equation $f(x)=k$ can have more than one solution.`, true, "e.g. x² = 9 has two."),
  num(S`For $f(x)=2^x$, find $f(4)$.`, 16, "2⁴."),
  mc(S`For $f(x)=x^2$, $f(-4)$ equals:`, "16", ["−16", "−8", "8"], "(−4)² = 16."),
  num(S`For $f(x)=7-3x$, find $f(2)$.`, 1, "7 − 6."),
];

export const M = [
  num(S`For $f(x)=x^2-7x$, find $f(-2)$.`, 18, "4 + 14."),
  num(S`For $f(x)=3x-5$, solve $f(x)=13$.`, 6, "3x = 18."),
  num(S`For $f(x)=x^2$, solve $f(x)=49$ for $x>0$.`, 7, "x = √49."),
  mx(S`For $f(x)=x^2$, write $f(x+1)$ in expanded form.`, "x^2+2*x+1", "(x + 1)²."),
  mx(S`For $f(x)=3x+2$, find $f(2x)$.`, "6*x+2", "3(2x) + 2."),
  num(S`For $f(x)=x^2+1$, find $f(3)-f(1)$.`, 8, "10 − 2."),
  num(S`For $f(x)=\frac{x+1}{x-1}$, find $f(3)$.`, 2, "4/2."),
  num(S`For $f(x)=x^2-x$, solve $f(x)=12$ and give the larger solution.`, 4, "(x − 4)(x + 3) = 0."),
  num(S`For $f(x)=\frac{1}{x+3}$, solve $f(x)=0.5$.`, -1, "x + 3 = 2."),
  tf(S`If $f(x)=2x$, then $f(a+b)=f(a)+f(b)$.`, true, "2(a + b) = 2a + 2b."),
  tf(S`If $f(x)=x^2$, then $f(a+b)=f(a)+f(b)$.`, false, "(a + b)² = a² + 2ab + b²."),
  num(S`The graph shows $y=f(x)=x^2-2x$ and $y=3$. Find the sum of the solutions of $f(x)=3$.`, 2, "x = −1 and x = 3.", planeDoc({ view: { xmin: -3, xmax: 5, ymin: -2, ymax: 6 }, curves: [{ f: (x) => x * x - 2 * x, color: "violet" }], lines: [{ m: 0, b: 3, color: "green", dash: true }] })),
  num("The line y = f(x) is shown. Find f(4).", 7, "Gradient 2 through (0, −1): f(4) = 7.", planeDoc({ view: { xmin: -2, xmax: 5, ymin: -3, ymax: 9 }, curves: [{ f: (x) => 2 * x - 1, color: "violet" }], points: [P(0, -1), P(1, 1)] })),
  mx(S`For $f(x)=2x-1$, simplify $f(x)+f(-x)$.`, "-2", "(2x − 1) + (−2x − 1)."),
  num(S`The water level in a tank is $h(t)=50-5t$ cm after $t$ minutes. When is $h=20$?`, 6, "5t = 30."),
  num(S`For $f(x)=\sqrt{2x+1}$, find $f(12)$.`, 5, "√25."),
  mc(S`Which is largest: $f(2)$ for $f(x)=x^3$, $g(2)$ for $g(x)=3^x$, or $h(2)$ for $h(x)=10x-12$?`, "g(2)", ["f(2)", "h(2)", "they are all equal"], "8, 9 and 8."),
  num(S`$f(x)=x^2+bx$ and $f(2)=10$. Find $b$.`, 3, "4 + 2b = 10."),
  ms(S`For $f(x)=x^2-4$, which are true? Select all.`, [S`$f(2)=0$`, S`$f(-2)=0$`, S`$f(0)=-4$`, S`$f(1)=3$`], [0, 1, 2], "f(1) = −3."),
  num(S`For $f(x)=|x-5|$, find $f(1)$.`, 4, "|−4|."),
];
