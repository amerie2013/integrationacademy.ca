// 3.1 Reciprocal of a Linear Function — 20 easy + 20 medium questions
import { mc, num, tf, fill } from "./kit.mjs";
import { RG, P } from "./fig.mjs";
const S = String.raw;
const V = { xmin: -8, xmax: 8, ymin: -6, ymax: 6 };

export const E = [
  mc(S`What is the vertical asymptote of $y=\dfrac1{x-9}$?`, S`$x=9$`, [S`$x=-9$`, S`$y=9$`, S`$y=0$`], "The denominator is 0 at x = 9."),
  mc(S`What is the vertical asymptote of $y=\dfrac1{x+5}$?`, S`$x=-5$`, [S`$x=5$`, S`$y=5$`, S`$y=-5$`], "x + 5 = 0 at x = −5."),
  mc(S`What is the horizontal asymptote of $y=\dfrac1{4x-3}$?`, S`$y=0$`, [S`$y=4$`, S`$y=\frac34$`, S`$y=-3$`], "As |x| grows, the fraction approaches 0."),
  tf(S`The graph of $y=\dfrac1{x-2}$ has an x-intercept.`, false, "The numerator is 1, so y is never 0."),
  num(S`Find the y-intercept of $y=\dfrac1{x+10}$ as a decimal.`, 0.1, "y = 1/10.", null, 0.001),
  num(S`Find the y-intercept of $y=\dfrac1{5x-4}$ as a decimal.`, -0.25, "y = 1/(−4).", null, 0.001),
  mc(S`What value is excluded from the domain of $y=\dfrac1{2x-10}$?`, S`$x=5$`, [S`$x=-5$`, S`$x=10$`, S`$x=2$`], "2x − 10 = 0 at x = 5."),
  mc(S`What is the range of $y=\dfrac1{x-1}$?`, S`$y\ne0$`, [S`$y\ne1$`, S`$y>0$`, "all real numbers"], "The reciprocal is never 0."),
  tf(S`$f(x)$ and $\dfrac1{f(x)}$ always have the same sign where both are defined.`, true, "A reciprocal keeps the sign."),
  num(S`The line $f(x)=x-6$ equals 1 at which $x$? (This gives an invariant point.)`, 7, "x − 6 = 1."),
  num(S`The line $f(x)=x+8$ equals $-1$ at which $x$?`, -9, "x + 8 = −1."),
  mc("At which points do a line and its reciprocal intersect?", S`where $f(x)=\pm1$`, [S`where $f(x)=0$`, S`only at $(1,1)$`, "they never meet"], "1/f = f means f² = 1."),
  fill("The zero of a line becomes a vertical ___ of its reciprocal.", ["asymptote"], "1/0 is undefined."),
  mc("Read the vertical asymptote from the graph.", S`$x=3$`, [S`$x=-3$`, S`$y=3$`, S`$y=0$`], "The dashed vertical line is at x = 3.", RG((x) => 1 / (x - 3), [3], V, 0)),
  mc("Which equation matches the graph?", S`$y=\dfrac1{x+4}$`, [S`$y=\dfrac1{x-4}$`, S`$y=x+4$`, S`$y=\dfrac1x+4$`], "VA x = −4 and HA y = 0.", RG((x) => 1 / (x + 4), [-4], V, 0, [P(-3, 1)])),
  tf(S`If $f(x)=2x+1$ is increasing, then $\dfrac1{f(x)}$ is decreasing on each branch.`, true, "Reciprocal values move the opposite way."),
  num(S`Evaluate $g(11)$ for $g(x)=\dfrac1{x-1}$ as a decimal.`, 0.1, "1/10.", null, 0.001),
  mc(S`As $x\to\infty$, what happens to $\dfrac1{7x+2}$?`, "it approaches 0", ["it approaches 7", "it grows without bound", "it approaches 2"], "The denominator grows without bound."),
  num(S`How many branches does the graph of $y=\dfrac1{3x+1}$ have?`, 2, "One on each side of the vertical asymptote."),
  mc(S`Where is $y=\dfrac1{x-5}$ positive?`, S`$x>5$`, [S`$x\lt5$`, S`$x\ne5$`, S`$x>0$`], "Same sign as x − 5."),
];

export const M = [
  mc(S`Find the vertical asymptote of $y=\dfrac1{3x+12}$.`, S`$x=-4$`, [S`$x=4$`, S`$x=12$`, S`$x=-12$`], "3x + 12 = 0."),
  mc(S`Find the vertical asymptote of $y=\dfrac1{10-5x}$.`, S`$x=2$`, [S`$x=-2$`, S`$x=5$`, S`$x=10$`], "10 − 5x = 0."),
  num(S`Find the y-intercept of $y=\dfrac1{8-2x}$ as a decimal.`, 0.125, "1/8.", null, 0.0005),
  num(S`At which $x$ does $f(x)=2x-5$ equal 1? (This gives an invariant point of its reciprocal.)`, 3, "2x − 5 = 1."),
  mc(S`What are the invariant points of $f(x)=x-3$ and its reciprocal?`, S`$(4,1)$ and $(2,-1)$`, [S`$(4,-1)$ and $(2,1)$`, S`$(3,0)$ and $(0,3)$`, S`$(1,4)$ and $(-1,2)$`], "x − 3 = ±1."),
  num(S`Evaluate $g(-2.5)$ for $g(x)=\dfrac1{2x+7}$.`, 0.5, "2(−2.5) + 7 = 2."),
  mc(S`How does $g(x)=\dfrac1{6-x}$ behave on each branch?`, "increasing", ["decreasing", "constant", "increasing then decreasing"], "The line 6 − x decreases, so its reciprocal increases."),
  mc(S`As $x\to2^+$, what happens to $\dfrac1{x-2}$?`, S`$+\infty$`, [S`$-\infty$`, "0", "2"], "Small positive denominators give large positive values."),
  mc(S`As $x\to-1^-$, what happens to $\dfrac1{x+1}$?`, S`$-\infty$`, [S`$+\infty$`, "0", "−1"], "x + 1 is a small negative number."),
  num(S`$y=\dfrac1{kx-6}$ has its vertical asymptote at $x=3$. Find $k$.`, 2, "3k − 6 = 0."),
  num(S`$y=\dfrac1{x+c}$ passes through $(2,\tfrac14)$. Find $c$.`, 2, "2 + c = 4."),
  mc(S`Solve $\dfrac1{x-4}=\dfrac12$.`, S`$x=6$`, [S`$x=2$`, S`$x=4.5$`, S`$x=8$`], "x − 4 = 2."),
  num(S`Solve $\dfrac1{2x+1}=\dfrac15$.`, 2, "2x + 1 = 5."),
  num(S`Find the average rate of change of $y=\dfrac1x$ on $[1,4]$ (as a decimal).`, -0.25, "(1/4 − 1)/3.", null, 0.001),
  num(S`Find the average rate of change of $y=\dfrac1{x+1}$ on $[0,1]$ (as a decimal).`, -0.5, "(1/2 − 1)/1.", null, 0.001),
  tf(S`The range of $y=\dfrac3{x+2}$ is all real numbers except 0.`, true, "3/(x + 2) is never 0 and takes every other value."),
  mc("Which function is graphed?", S`$y=\dfrac1{2-x}$`, [S`$y=\dfrac1{x-2}$`, S`$y=\dfrac1{x+2}$`, S`$y=2-x$`], "VA x = 2; positive to the left of it.", RG((x) => 1 / (2 - x), [2], V, 0, [P(1, 1), P(3, -1)])),
  mc(S`Which description matches $y=\dfrac1{x}$ being transformed to $y=\dfrac2{x-3}$?`, "stretch by 2, right 3", ["stretch by 3, right 2", "stretch by 2, left 3", "compress by 2, right 3"], "The 2 stretches, x − 3 moves right."),
  mc("From the graph, for which x is g(x) < 0?", S`$x\lt-1$`, [S`$x>-1$`, S`$x\lt0$`, S`$x\ne-1$`], "Below the x-axis to the left of the asymptote.", RG((x) => 1 / (x + 1), [-1], V, 0)),
  mc(S`Where is $y=\dfrac1{9-3x}$ negative?`, S`$x>3$`, [S`$x\lt3$`, S`$x>9$`, S`$x\lt-3$`], "9 − 3x < 0 when x > 3."),
];
