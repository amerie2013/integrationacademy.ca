// 7.4 Exponential Functions and Their Graphs — 20 easy + 20 medium
import { mc, ms, num, tf, fill, eDoc, P, n4, eg } from "./ek.mjs";
const S = String.raw;
const g5 = eg((x) => 5 ** x, { xmin: -2, xmax: 2, ymin: -2, ymax: 26 }, { x: 0.5, y: 2 }, { points: [P(0, 1, "(0, 1)"), P(2, 25, "(2, 25)")] });
const g = eg((x) => 2 * 0.5 ** x, { xmin: -3, xmax: 4, ymin: -1, ymax: 17 }, { x: 1, y: 2 }, { points: [P(0, 2, "(0, 2)"), P(-3, 16, "(−3, 16)")] });

export const E = [
  num(S`Enter the $y$-intercept of $y=6^x$.`, 1, "6⁰."),
  num(S`Enter the $y$-intercept of $y=4(3)^x$.`, 4, "a."),
  num(S`Evaluate $y=2^x$ at $x=5$.`, 32, "2⁵."),
  n4(S`Evaluate $y=2^x$ at $x=-1$ (decimal).`, 0.5, "1/2."),
  num(S`Evaluate $y=10(2)^x$ at $x=3$.`, 80, "10 × 8."),
  num(S`Evaluate $y=\left(\frac12\right)^x$ at $x=-4$.`, 16, "2⁴."),
  mc(S`The asymptote of $y=7^x$ is …`, S`$y=0$`, [S`$x=0$`, S`$y=1$`, S`$y=7$`], "Approaches 0."),
  mc(S`The range of $y=3^x$ is …`, S`$y>0$`, [S`$y\ge0$`, "all real numbers", S`$y>1$`], "Always positive."),
  mc("Which is increasing?", S`$y=1.3^x$`, [S`$y=0.3^x$`, S`$y=\left(\frac23\right)^x$`, S`$y=0.99^x$`], "b > 1."),
  tf(S`$y=0.4^x$ is a decay function.`, true, "0 < b < 1."),
  tf(S`The graph of $y=2^x$ crosses the $x$-axis.`, false, "y > 0."),
  fill(S`For an exponential relation with equal $x$-steps, the $y$-values have a constant ____.`, ["ratio"], "Constant ratio."),
  mc("The graph shown is y = 5ˣ. What is its value at x = 2?", "25", ["10", "7", "32"], "5².", g5),
  num("For the graph shown (y = 5ˣ), enter the y-intercept.", 1, "(0, 1).", g5),
  mc(S`The table $3,\ 6,\ 12,\ 24$ (equal $x$-steps) is …`, "exponential", ["linear", "quadratic", "none"], "Ratio 2."),
  mc(S`The table $3,\ 6,\ 9,\ 12$ (equal $x$-steps) is …`, "linear", ["exponential", "quadratic", "none"], "Difference 3."),
  num(S`Enter the common ratio of $80,\ 40,\ 20,\ 10$.`, 0.5, "40/80."),
  num(S`$y=a\cdot2^x$ passes through $(0,\,7)$. Enter $a$.`, 7, "y-intercept."),
  num(S`Solve $3^x=81$.`, 4, "3⁴."),
  num(S`The domain of $y=4^x$ is all real numbers. How many $x$-intercepts does it have?`, 0, "Never 0."),
];

export const M = [
  num(S`$y=a\cdot b^x$ passes through $(0,\,4)$ and $(1,\,10)$. Enter $b$.`, 2.5, "10/4."),
  num(S`$y=a\cdot b^x$ passes through $(0,\,6)$ and $(2,\,54)$. Enter $b$.`, 3, "b² = 9."),
  num(S`$y=a\cdot b^x$ passes through $(0,\,200)$ and $(2,\,50)$. Enter $b$.`, 0.5, "b² = 1/4."),
  mc(S`The table $1,\ 4,\ 9,\ 16,\ 25$ is …`, "quadratic", ["exponential", "linear", "periodic"], "Second differences 2."),
  mc(S`The table $2,\ 3,\ 4.5,\ 6.75$ is …`, "exponential with ratio 1.5", ["linear", "quadratic", "exponential with ratio 2"], "3/2 = 1.5."),
  num(S`For the table $2,\ 3,\ 4.5,\ 6.75$ ($x=0..3$), predict $y$ at $x=4$.`, 10.125, "6.75 × 1.5.", null),
  ms(S`Select every property of $y=0.7^x$.`, ["decreasing", "y-intercept 1", "range y > 0", "x-intercept at 1", "asymptote y = 0"], [0, 1, 2, 4], "No x-intercept."),
  tf(S`$y=\left(\frac14\right)^x$ is the reflection of $y=4^x$ in the $y$-axis.`, true, "(1/4)ˣ = 4^(−x)."),
  tf(S`For $y=2^x$, increasing $x$ by $3$ multiplies $y$ by $6$.`, false, "By 2³ = 8."),
  mc("The graph shown is y = a·bˣ. Which equation?", S`$y=2\left(\frac12\right)^x$`, [S`$y=\left(\frac12\right)^x$`, S`$y=2(2)^x$`, S`$y=16\left(\frac12\right)^x$`], "y-int 2, halves each step.", g),
  num("For the graph shown, enter y at x = 1.", 1, "2 × ½.", g),
  num(S`Solve $2^x=\frac1{16}$.`, -4, "2⁻⁴."),
  num(S`Solve $5^{x}=125$.`, 3, "5³."),
  num(S`For which positive integer $x$ is $2^x=x^2$ besides $x=2$?`, 4, "16 = 16."),
  num(S`How many times larger is $y=3^x$ at $x=6$ than at $x=4$?`, 9, "3²."),
  mc("Which grows fastest for large x?", S`$y=1.1^x$`, [S`$y=100x$`, S`$y=x^2$`, S`$y=50x+1000$`], "Exponential eventually wins."),
  fill(S`In $y=a\cdot b^x$, $a$ is the ____ (two words, or 'y-intercept').`, ["initial value", "y-intercept", "y intercept"], "Value at x = 0."),
  n4(S`Evaluate $y=8(0.25)^x$ at $x=2$ (decimal).`, 0.5, "8/16."),
  num(S`Evaluate $y=0.5(4)^x$ at $x=3$.`, 32, "0.5 × 64."),
  num(S`The first differences of an exponential table with ratio $3$ are $2,\ 6,\ 18$. Enter the next first difference.`, 54, "Differences also grow by 3."),
];
