// 3.2 Reciprocal of a Quadratic Function — 20 easy + 20 medium questions
import { mc, num, tf, fill } from "./kit.mjs";
import { RG, P, planeDoc } from "./fig.mjs";
const S = String.raw;

export const E = [
  num(S`How many vertical asymptotes does $y=\dfrac1{x^2-25}$ have?`, 2, "x = ±5."),
  num(S`How many vertical asymptotes does $y=\dfrac1{x^2+10}$ have?`, 0, "x² + 10 is never 0."),
  num(S`How many vertical asymptotes does $y=\dfrac1{(x-6)^2}$ have?`, 1, "One double zero."),
  mc(S`What are the vertical asymptotes of $y=\dfrac1{(x-2)(x+7)}$?`, S`$x=2$ and $x=-7$`, [S`$x=-2$ and $x=7$`, S`$x=2$ only`, S`$y=2$ and $y=-7$`], "The zeros of each factor."),
  mc(S`What is the horizontal asymptote of $y=\dfrac1{x^2+x+1}$?`, S`$y=0$`, [S`$y=1$`, S`$x=0$`, "there is none"], "The denominator grows without bound."),
  num(S`Find the y-intercept of $y=\dfrac1{x^2+8}$ as a decimal.`, 0.125, "1/8.", null, 0.001),
  num(S`Find the y-intercept of $y=\dfrac1{x^2-x-2}$ as a decimal.`, -0.5, "1/(−2).", null, 0.001),
  num(S`What is the maximum value of $y=\dfrac1{x^2+4}$ as a decimal?`, 0.25, "The minimum of x² + 4 is 4.", null, 0.001),
  tf(S`The graph of $y=\dfrac1{x^2+5}$ is above the x-axis everywhere.`, true, "A positive denominator gives a positive value."),
  tf(S`The graph of $y=\dfrac1{(x+3)^2}$ has one branch above and one below the x-axis.`, false, "A square is never negative: both branches are above."),
  mc(S`A parabola has its vertex at $(1,4)$. What point on its reciprocal comes from the vertex?`, S`$\left(1,\tfrac14\right)$`, [S`$\left(\tfrac14,1\right)$`, S`$(4,1)$`, S`$(1,-4)$`], "Keep x; take the reciprocal of y."),
  mc(S`A parabola has its vertex at $(-2,-5)$. What is the turning point of the reciprocal?`, S`$\left(-2,-\tfrac15\right)$`, [S`$(-2,-5)$`, S`$\left(2,\tfrac15\right)$`, S`$\left(-\tfrac12,-5\right)$`], "y → 1/y."),
  fill("A parabola with no real zeros has a reciprocal with ___ vertical asymptotes.", ["no", "0", "zero"], "No zeros, no asymptotes."),
  mc(S`What values are excluded from the domain of $y=\dfrac1{x^2-1}$?`, S`$x=\pm1$`, [S`$x=1$ only`, S`$x=0$`, "none"], "x² − 1 = 0."),
  mc("How many vertical asymptotes does this reciprocal of a quadratic have?", "2", ["0", "1", "3"], "Two dashed vertical lines.", RG((x) => 1 / (x * x - 2.25), [-1.5, 1.5], { xmin: -5, xmax: 5, ymin: -2, ymax: 2 }, 0, [], { step: { x: 1, y: 0.5 } })),
  mc("Which shape is this?", "reciprocal of a quadratic with no real zeros", ["reciprocal of a quadratic with two zeros", "reciprocal of a line", "a parabola"], "One smooth hump with no vertical asymptote.", planeDoc({ view: { xmin: -5, xmax: 5, ymin: -0.5, ymax: 1 }, curves: [{ f: (x) => 1 / (x * x + 1.5), color: "violet" }], step: { x: 1, y: 0.25 } })),
  tf(S`The reciprocal of a quadratic can have an x-intercept.`, false, "The numerator is 1, so y is never 0."),
  num(S`Evaluate $g(3)$ for $g(x)=\dfrac1{x^2+1}$ as a decimal.`, 0.1, "1/10.", null, 0.001),
  num(S`What is the discriminant of $x^2+2x+3$?`, -8, "4 − 12 = −8: no real zeros."),
  mc(S`For which quadratic does $\dfrac1{f(x)}$ have exactly one vertical asymptote?`, S`$x^2-6x+9$`, [S`$x^2-9$`, S`$x^2+9$`, S`$x^2-6x+8$`], "(x − 3)²."),
];

export const M = [
  mc(S`Find the vertical asymptotes of $y=\dfrac1{x^2-7x+10}$.`, S`$x=2,\ x=5$`, [S`$x=-2,\ x=-5$`, S`$x=7,\ x=10$`, S`$x=1,\ x=10$`], "(x − 2)(x − 5)."),
  mc(S`Find the vertical asymptotes of $y=\dfrac1{2x^2-x-3}$.`, S`$x=\tfrac32,\ x=-1$`, [S`$x=-\tfrac32,\ x=1$`, S`$x=3,\ x=-1$`, S`$x=\tfrac12,\ x=3$`], "(2x − 3)(x + 1)."),
  mc(S`Find the turning point of $y=\dfrac1{x^2-8x+12}$.`, S`$\left(4,-\tfrac14\right)$`, [S`$(4,-4)$`, S`$\left(-4,\tfrac14\right)$`, S`$\left(2,\tfrac1{12}\right)$`], "Vertex of (x − 2)(x − 6) is (4, −4)."),
  mc(S`Find the maximum of $y=\dfrac1{x^2+2x+6}$.`, S`$\left(-1,\tfrac15\right)$`, [S`$\left(1,\tfrac15\right)$`, S`$(-1,5)$`, S`$\left(-1,\tfrac16\right)$`], "(x + 1)² + 5."),
  mc(S`What is the range of $y=\dfrac1{x^2+6}$?`, S`$0\lt y\le\tfrac16$`, [S`$y>0$`, S`$0\le y\le\tfrac16$`, S`$y\ge\tfrac16$`], "Largest value at x = 0; never reaches 0."),
  mc(S`What is the range of $y=\dfrac1{x^2-4}$?`, S`$y\le-\tfrac14$ or $y>0$`, [S`$y\ne0$`, S`$y>0$`, S`$-\tfrac14\le y\lt0$`], "Middle branch at most −1/4; outer branches positive."),
  mc(S`Where does $y=\dfrac1{x^2+4x+7}$ increase?`, S`$x\lt-2$`, [S`$x>-2$`, S`$x\lt2$`, "everywhere"], "(x + 2)² + 3 decreases for x < −2."),
  num(S`For how many intervals is $y=\dfrac1{x^2-1}$ increasing?`, 2, "On (−∞, −1) and (−1, 0)."),
  tf(S`If $f$ has a minimum at its vertex and $k>0$, then $\dfrac1f$ has a maximum at the same $x$.`, true, "The smallest positive f gives the largest reciprocal."),
  num(S`Solve for the positive $x$: $\dfrac1{x^2+1}=\dfrac15$.`, 2, "x² + 1 = 5."),
  mc(S`Solve $\dfrac1{(x-1)^2}=\dfrac19$.`, S`$x=4$ or $x=-2$`, [S`$x=4$`, S`$x=10$`, S`$x=-2$`], "(x − 1) = ±3."),
  num(S`How many solutions has $\dfrac1{x^2+2}=1$?`, 0, "x² = −1 has no real solution."),
  num(S`For $y=\dfrac1{x^2+k}$ to have a maximum of $0.2$, find $k$.`, 5, "1/k = 1/5."),
  mc(S`Which $k$ gives $y=\dfrac1{x^2+4x+k}$ exactly one vertical asymptote?`, S`$k=4$`, [S`$k=2$`, S`$k=16$`, S`$k=-4$`], "Discriminant 16 − 4k = 0."),
  mc("Which is the equation of the graph?", S`$y=\dfrac1{x^2-2x}$`, [S`$y=\dfrac1{x^2+2x}$`, S`$y=\dfrac1{x^2-4}$`, S`$y=\dfrac1{x-2}$`], "VAs x = 0, x = 2; turning point (1, −1).", RG((x) => 1 / (x * x - 2 * x), [0, 2], { xmin: -3, xmax: 5, ymin: -3, ymax: 3 }, 0, [P(1, -1)])),
  mc("For this graph, where is the function positive?", S`$x\lt-1$ or $x>2$`, [S`$-1\lt x\lt2$`, S`$x>2$`, S`$x\ne-1,2$`], "The outer branches are above the x-axis.", RG((x) => 1 / ((x + 1) * (x - 2)), [-1, 2], { xmin: -4, xmax: 5, ymin: -3, ymax: 3 }, 0)),
  num(S`Find the average rate of change of $y=\dfrac1{x^2+1}$ on $[0,1]$ as a decimal.`, -0.5, "(1/2 − 1)/1.", null, 0.001),
  num(S`Find the average rate of change of $y=\dfrac1{x^2}$ on $[1,2]$ as a decimal.`, -0.75, "(1/4 − 1)/1.", null, 0.001),
  tf(S`The graph of $y=\dfrac1{x^2-3x+5}$ has no vertical asymptote.`, true, "Discriminant 9 − 20 < 0."),
  mc(S`A reciprocal has VAs $x=-1$, $x=3$ and is of the form $\dfrac1{x^2+bx+c}$. Find $b$ and $c$.`, S`$b=-2,\ c=-3$`, [S`$b=2,\ c=-3$`, S`$b=-2,\ c=3$`, S`$b=2,\ c=3$`], "(x + 1)(x − 3)."),
];
