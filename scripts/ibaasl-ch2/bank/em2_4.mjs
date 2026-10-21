// 2.4 Domain and Range — 20 easy + 20 medium questions
import { mc, ms, num, tf, fill } from "./kit.mjs";
import { planeDoc, P } from "../../mcr3u-ch1/bank/fig.mjs";

const S = String.raw;

export const E = [
  num(S`Which value of $x$ is excluded from the domain of $\frac{1}{x+8}$?`, -8, "x + 8 ≠ 0."),
  num(S`What is the smallest $x$ in the domain of $\sqrt{x-2}$?`, 2, "x − 2 ≥ 0."),
  num(S`What is the smallest value in the range of $x^2+5$?`, 5, "x² ≥ 0."),
  num(S`What is the largest value in the range of $7-x^2$?`, 7, "At x = 0."),
  tf(S`The domain of $f(x)=2x+1$ is all real numbers.`, true, "A polynomial accepts every input."),
  mc(S`Which interval means $2\le x<6$?`, S`$[2,6)$`, [S`$(2,6]$`, S`$(2,6)$`, S`$[2,6]$`], "Square bracket includes, round excludes."),
  num(S`What is the smallest $x$ in the domain of $\sqrt{x+3}$?`, -3, "x + 3 ≥ 0."),
  num(S`What is the smallest value in the range of $\sqrt x$?`, 0, "√0 = 0."),
  num("The graph shows f on a restricted domain. What is the left end of the domain?", -1, "The graph starts at x = −1.", planeDoc({ view: { xmin: -3, xmax: 5, ymin: -1, ymax: 6 }, curves: [{ f: (x) => x + 2, a: -1, b: 3, color: "violet" }], points: [P(-1, 1), P(3, 5)] })),
  num("The parabola shown has vertex (2, 1). What is the smallest value in its range?", 1, "It opens up from the vertex.", planeDoc({ view: { xmin: -2, xmax: 6, ymin: -1, ymax: 8 }, curves: [{ f: (x) => (x - 2) ** 2 + 1, color: "violet" }], points: [P(2, 1)] })),
  tf(S`The range of $\frac1x$ is all real numbers.`, false, "It is never 0."),
  fill("The set of all possible inputs of a function is called its ___.", ["domain", "Domain"], "The outputs form the range."),
  mc(S`Which is set notation for $x>4$?`, S`$\{x\mid x>4\}$`, [S`$\{x\mid x\ge4\}$`, S`$[4,\infty)$`, S`$\{4\}$`], "Strictly greater than 4."),
  num(S`For $f(x)=3x$ with $0\le x\le5$, what is the largest value in the range?`, 15, "f(5)."),
  num(S`Which value of $x$ is excluded from the domain of $\frac{x+1}{x-3}$?`, 3, "x − 3 ≠ 0."),
  tf(S`The interval $[1,5]$ includes 5.`, true, "Square brackets include the end point."),
  num(S`For $f(x)=x^2$ with $-2\le x\le3$, what is the largest value in the range?`, 9, "f(3) = 9 is bigger than f(−2) = 4."),
  mc(S`The range of $y=|x|$ is:`, S`$y\ge0$`, [S`$y>0$`, S`all real numbers`, S`$y\le0$`], "|x| is never negative and equals 0 at x = 0."),
  num(S`What is the largest $x$ in the domain of $\sqrt{6-x}$?`, 6, "6 − x ≥ 0."),
  num(S`What is the smallest value in the range of $(x-4)^2-7$?`, -7, "Vertex (4, −7)."),
];

export const M = [
  num(S`What is the largest $x$ in the domain of $\sqrt{15-3x}$?`, 5, "15 − 3x ≥ 0."),
  num(S`$\frac{1}{x^2-16}$ excludes two values of $x$. Give the positive one.`, 4, "x² = 16."),
  num(S`For $f(x)=2x-1$ with $-2\le x\le3$, what is the smallest value in the range?`, -5, "f(−2)."),
  num(S`What is the smallest value in the range of $x^2-6x+11$?`, 2, "(x − 3)² + 2."),
  num(S`For $f(x)=(x-1)^2$ with $-1\le x\le4$, what is the largest value in the range?`, 9, "f(4) = 9 (f(−1) = 4)."),
  num(S`For $f(x)=(x-1)^2$ with $-1\le x\le4$, what is the smallest value in the range?`, 0, "The vertex x = 1 is inside the domain."),
  mc(S`The domain of $\frac{1}{\sqrt{x-5}}$ is:`, S`$x>5$`, [S`$x\ge5$`, S`$x\ne5$`, S`$x<5$`], "Positive under the root, and not zero (denominator)."),
  tf(S`The range of $\frac{1}{x-2}+3$ excludes 3.`, true, "The fraction is never 0."),
  num(S`For $f(x)=\frac{10}{x}$ with $1\le x\le5$, what is the smallest value in the range?`, 2, "f(5) = 2."),
  num(S`For $f(x)=-2x+8$ with $0\le x\le3$, what is the smallest value in the range?`, 2, "f(3) = 2."),
  num("The graph shows y = √(25 − x²). What is the largest value in its range?", 5, "At x = 0.", planeDoc({ view: { xmin: -6, xmax: 6, ymin: -1, ymax: 7 }, curves: [{ f: (x) => Math.sqrt(25 - x * x), a: -5, b: 5, color: "violet" }] })),
  num("The graph is a line segment from (−3, 4) to (2, −1). What is the length of its range interval?", 5, "Range −1 ≤ y ≤ 4.", planeDoc({ view: { xmin: -4, xmax: 3, ymin: -2, ymax: 5 }, curves: [{ f: (x) => 1 - x, a: -3, b: 2, color: "violet" }], points: [P(-3, 4), P(2, -1)] })),
  ms(S`Which values of $x$ are NOT in the domain of $\frac{x+2}{x(x-5)}$? Select all.`, ["0", "5", "−2", "2"], [0, 1], "The denominator is zero at 0 and 5."),
  mc(S`The range of $\sqrt x+3$ is:`, S`$y\ge3$`, [S`$y\ge0$`, S`$y>3$`, S`$y\le3$`], "The root is at least 0."),
  num(S`What is the smallest positive $x$ in the domain of $\sqrt{x^2-9}$?`, 3, "x² ≥ 9."),
  num(S`For $f(x)=4-x^2$ with $-1\le x\le3$, what is the smallest value in the range?`, -5, "f(3) = −5."),
  num(S`For $f(x)=4-x^2$ with $-1\le x\le3$, what is the largest value in the range?`, 4, "The vertex x = 0 is inside the domain."),
  tf(S`The range of $y=x^3$ is all real numbers.`, true, "A cubic takes every value."),
  num(S`A field has area $A=x(30-x)$ for $0<x<30$. What is the largest value in the range?`, 225, "At x = 15."),
  mc(S`The range of $y=2^x$ is:`, S`$y>0$`, [S`$y\ge0$`, S`all real numbers`, S`$y\ge1$`], "2ˣ is always positive and never reaches 0."),
];
