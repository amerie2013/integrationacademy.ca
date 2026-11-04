// 3.3 Rational Functions of the Form (ax + b)/(cx + d) — 20 easy + 20 medium questions
import { mc, num, tf, fill } from "./kit.mjs";
import { RG, P, planeDoc } from "./fig.mjs";
const S = String.raw;
const V = { xmin: -8, xmax: 8, ymin: -8, ymax: 8 };

export const E = [
  mc(S`What is the vertical asymptote of $y=\dfrac{x+7}{x-5}$?`, S`$x=5$`, [S`$x=-7$`, S`$x=-5$`, S`$y=1$`], "The denominator is 0 at x = 5."),
  mc(S`What is the horizontal asymptote of $y=\dfrac{x+7}{x-5}$?`, S`$y=1$`, [S`$y=5$`, S`$y=-7$`, S`$x=1$`], "Leading coefficients: 1/1."),
  num(S`Give the y-value of the horizontal asymptote of $y=\dfrac{8x-3}{2x+9}$.`, 4, "8/2."),
  num(S`Give the y-value of the horizontal asymptote of $y=\dfrac{5x+1}{x+1}$.`, 5, "5/1."),
  num(S`Find the x-intercept of $y=\dfrac{x-11}{x+2}$.`, 11, "Numerator = 0."),
  num(S`Find the x-intercept of $y=\dfrac{4x+20}{x-3}$.`, -5, "4x + 20 = 0."),
  num(S`Find the y-intercept of $y=\dfrac{x+8}{x+4}$.`, 2, "8/4."),
  num(S`Find the y-intercept of $y=\dfrac{2x-10}{x-5}$ if it has one, else its constant value.`, 2, "2(x − 5)/(x − 5) = 2, so the graph is y = 2 (with a hole)."),
  tf(S`$y=\dfrac{x+3}{x+3}$ has a vertical asymptote at $x=-3$.`, false, "The factor cancels: there is a hole, not an asymptote."),
  mc(S`What value is excluded from the domain of $y=\dfrac{2x+1}{x+6}$?`, S`$x=-6$`, [S`$x=6$`, S`$x=-\tfrac12$`, S`$x=2$`], "x + 6 = 0."),
  mc(S`What value is excluded from the range of $y=\dfrac{3x+1}{x+6}$?`, S`$y=3$`, [S`$y=0$`, S`$y=\tfrac16$`, S`$y=-6$`], "The horizontal asymptote."),
  fill("A common factor in the numerator and denominator produces a ___ in the graph.", ["hole"], "It leaves a single missing point."),
  tf(S`The graph of $y=\dfrac{ax+b}{cx+d}$ with $ad\ne bc$ has exactly two branches.`, true, "One on each side of the vertical asymptote."),
  mc(S`Which function has a hole?`, S`$y=\dfrac{2x+8}{x+4}$`, [S`$y=\dfrac{2x+8}{x-4}$`, S`$y=\dfrac{x+8}{x+4}$`, S`$y=\dfrac{2x}{x+4}$`], "2x + 8 = 2(x + 4)."),
  mc("Read the asymptotes from the graph.", S`$x=1,\ y=2$`, [S`$x=2,\ y=1$`, S`$x=-1,\ y=2$`, S`$x=1,\ y=-2$`], "The dashed lines.", RG((x) => (2 * x + 1) / (x - 1), [1], V, 2)),
  mc("Which function matches the graph?", S`$y=\dfrac{x+3}{x-2}$`, [S`$y=\dfrac{x-3}{x+2}$`, S`$y=\dfrac{x+2}{x-3}$`, S`$y=\dfrac{3x}{x-2}$`], "VA x = 2, HA y = 1, x-intercept −3.", RG((x) => (x + 3) / (x - 2), [2], V, 1, [P(-3, 0)])),
  num(S`Evaluate $f(4)$ for $f(x)=\dfrac{x+8}{x-1}$.`, 4, "12/3."),
  num(S`For very large $x$, what number is $\dfrac{7x+2}{x-9}$ close to?`, 7, "Ratio of the leading coefficients."),
  tf(S`The horizontal asymptote of $y=\dfrac{x-4}{2x+1}$ is $y=\tfrac12$.`, true, "1/2."),
  mc(S`Where is the vertical asymptote of $y=\dfrac{x}{2x-3}$?`, S`$x=\tfrac32$`, [S`$x=-\tfrac32$`, S`$x=3$`, S`$x=0$`], "2x − 3 = 0."),
];

export const M = [
  mc(S`Give the asymptotes of $y=\dfrac{3x-4}{2x+6}$.`, S`$x=-3,\ y=\tfrac32$`, [S`$x=3,\ y=\tfrac32$`, S`$x=-3,\ y=\tfrac43$`, S`$x=\tfrac43,\ y=\tfrac32$`], "2x + 6 = 0; 3/2."),
  mc(S`Give the horizontal asymptote of $y=\dfrac{5-2x}{x+7}$.`, S`$y=-2$`, [S`$y=2$`, S`$y=5$`, S`$y=\tfrac57$`], "Leading coefficients −2 and 1."),
  mc(S`Give the horizontal asymptote of $y=\dfrac{4x+1}{3-2x}$.`, S`$y=-2$`, [S`$y=2$`, S`$y=\tfrac13$`, S`$y=\tfrac43$`], "4/(−2)."),
  num(S`Find the y-intercept of $y=\dfrac{6-3x}{x+3}$.`, 2, "6/3."),
  mc(S`Describe $y=\dfrac{6x-18}{x-3}$.`, S`the line $y=6$ with a hole at $(3,6)$`, [S`a hyperbola with VA $x=3$`, S`the line $y=6$`, S`the line $y=3$ with a hole at $(6,3)$`], "The factor x − 3 cancels."),
  mc(S`Rewrite $\dfrac{2x+7}{x+3}$ in the form $a+\dfrac k{x-h}$.`, S`$2+\dfrac1{x+3}$`, [S`$2+\dfrac7{x+3}$`, S`$2-\dfrac1{x+3}$`, S`$7+\dfrac2{x+3}$`], "2(x + 3) + 1."),
  mc(S`Rewrite $\dfrac{x-5}{x-2}$ in the form $a+\dfrac k{x-h}$.`, S`$1-\dfrac3{x-2}$`, [S`$1+\dfrac3{x-2}$`, S`$1-\dfrac5{x-2}$`, S`$5-\dfrac1{x-2}$`], "(x − 2) − 3."),
  mc(S`Which transformations give $y=4+\dfrac3{x+1}$ from $y=\dfrac1x$?`, "stretch 3, left 1, up 4", ["stretch 4, left 1, up 3", "stretch 3, right 1, up 4", "stretch 3, left 1, down 4"], "k = 3, h = −1, a = 4."),
  mc(S`Write a function with VA $x=4$, HA $y=2$ and x-intercept $1$.`, S`$y=\dfrac{2x-2}{x-4}$`, [S`$y=\dfrac{2x+2}{x-4}$`, S`$y=\dfrac{x-1}{x-4}$`, S`$y=\dfrac{2x-1}{x+4}$`], "Numerator 2(x − 1)."),
  mc(S`Write a function with VA $x=-1$, HA $y=-3$ and y-intercept $2$.`, S`$y=\dfrac{-3x+2}{x+1}$`, [S`$y=\dfrac{3x+2}{x+1}$`, S`$y=\dfrac{-3x-2}{x+1}$`, S`$y=\dfrac{-3x+2}{x-1}$`], "b/1 = 2."),
  num(S`$y=\dfrac{ax+1}{x-3}$ has HA $y=5$. Find $a$.`, 5, "a/1."),
  num(S`$y=\dfrac{2x+1}{cx-4}$ has HA $y=\tfrac12$. Find $c$.`, 4, "2/c = 1/2."),
  num(S`$y=\dfrac{x+1}{x+d}$ has VA $x=6$. Find $d$.`, -6, "6 + d = 0."),
  num(S`For which $k$ does $y=\dfrac{x+k}{x-7}$ have a hole?`, -7, "x + k must equal x − 7."),
  mc(S`Is $y=\dfrac{3x+1}{x+2}$ increasing or decreasing on each branch?`, "increasing", ["decreasing", "increasing on one, decreasing on the other", "constant"], "ad − bc = 6 − 1 = 5 > 0."),
  mc(S`Is $y=\dfrac{x+5}{x+1}$ increasing or decreasing on each branch?`, "decreasing", ["increasing", "increasing on one, decreasing on the other", "constant"], "ad − bc = 1 − 5 = −4 < 0."),
  num(S`Find the average rate of change of $y=\dfrac{x}{x+1}$ on $[0,1]$ as a decimal.`, 0.5, "(1/2 − 0)/1.", null, 0.001),
  mc("From the graph, for which x is f(x) > 0?", S`$x\lt-1$ or $x>3$`, [S`$-1\lt x\lt3$`, S`$x>3$`, S`$x>-1$`], "Above the axis outside the zero and the asymptote.", RG((x) => (x - 3) / (x + 1), [-1], V, 1, [P(3, 0)])),
  mc("The graph has the form y = (x + b)/(x + d). Find b and d.", S`$b=-1,\ d=3$`, [S`$b=1,\ d=-3$`, S`$b=3,\ d=-1$`, S`$b=-3,\ d=1$`], "x-intercept 1 and VA x = −3.", RG((x) => (x - 1) / (x + 3), [-3], V, 1, [P(1, 0)])),
  mc("This graph is a horizontal line with an open circle. Which function could it be?", S`$y=\dfrac{2x-2}{x-1}$`, [S`$y=\dfrac{2x+2}{x-1}$`, S`$y=\dfrac{x-1}{2x-2}$`, S`$y=2x-2$`], "Equals 2 for x ≠ 1.", planeDoc({ view: { xmin: -4, xmax: 6, ymin: -1, ymax: 5 }, curves: [{ f: () => 2, color: "violet" }], points: [{ x: 1, y: 2, open: true, label: "(1, 2)", color: "red" }], step: { x: 1, y: 1 } })),
];
