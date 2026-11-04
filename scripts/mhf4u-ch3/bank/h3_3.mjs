// 3.3 Rational Functions of the Form (ax + b)/(cx + d) — 20 hard questions
import { mc, num, tf } from "./kit.mjs";
import { RG, P } from "./fig.mjs";
const S = String.raw;
const V = { xmin: -8, xmax: 8, ymin: -8, ymax: 8 };

export const TOPIC = "3.3 Rational Functions of the Form (ax + b)/(cx + d)";
export const Q = [
  mc(S`$f(x)=\dfrac{ax+b}{x+d}$ has VA $x=3$, HA $y=2$ and passes through $(4,5)$. Find $b$.`, S`$b=-3$`, [S`$b=3$`, S`$b=5$`, S`$b=-5$`], "a = 2, d = −3; (8 + b)/1 = 5."),
  mc(S`$f(x)=\dfrac{ax+b}{x+d}$ has VA $x=-2$, HA $y=-1$ and y-intercept $3$. Find its x-intercept.`, S`$x=6$`, [S`$x=-6$`, S`$x=3$`, S`$x=-3$`], "a = −1, d = 2, b/2 = 3 so b = 6; −x + 6 = 0."),
  mc(S`What is the inverse of $f(x)=\dfrac{3x-1}{x+2}$?`, S`$f^{-1}(x)=\dfrac{-2x-1}{x-3}$`, [S`$f^{-1}(x)=\dfrac{x+2}{3x-1}$`, S`$f^{-1}(x)=\dfrac{2x+1}{x-3}$`, S`$f^{-1}(x)=\dfrac{-2x+1}{x+3}$`], "y(x + 2) = 3x − 1 gives x(y − 3) = −2y − 1."),
  num(S`The inverse of $f(x)=\dfrac{2x+5}{x-4}$ has vertical asymptote at $x=$?`, 2, "The asymptotes swap: HA y = 2 of f becomes VA x = 2."),
  tf(S`A function of the form $\dfrac{ax+b}{cx+d}$ with $a=-d$ and $ad\ne bc$ is its own inverse.`, true, "Then its asymptotes are x = a/c and y = a/c: symmetric about y = x."),
  num(S`For $f(x)=\dfrac{x+3}{x-1}$, find $f(f(2))$.`, 2, "f(2) = 5; f(5) = 8/4 = 2."),
  mc(S`For which values of $k$ does $f(x)=\dfrac{x+k}{x+3}$ increase on each branch?`, S`$k\lt3$`, [S`$k>3$`, S`$k\ne3$`, S`$k\gt-3$`], "ad − bc = 3 − k > 0."),
  num(S`Find the point where the asymptotes of $y=\dfrac{4x-1}{x+5}$ cross; give the sum of its coordinates.`, -1, "(−5, 4)."),
  num(S`$\dfrac{ax+1}{2x-3}$ passes through $(2,5)$. Find $a$.`, 2, "(2a + 1)/1 = 5."),
  mc(S`Solve $\dfrac{x+1}{x-3}=x-1$ (the line meets the hyperbola).`, S`$x=\dfrac{5\pm\sqrt{17}}2$`, [S`$x=1,\ x=4$`, S`$x=\dfrac{-5\pm\sqrt{17}}2$`, "no solution"], "x + 1 = x² − 4x + 3 gives x² − 5x + 2 = 0."),
  mc(S`What is the instantaneous rate of change of $f(x)=\dfrac{x+1}{x-1}$ at $x=3$?`, S`$-\tfrac12$`, [S`$\tfrac12$`, S`$-2$`, S`$-\tfrac14$`], "f = 1 + 2/(x − 1), slope −2/(x − 1)² = −1/2."),
  num(S`Find the average rate of change of $f(x)=\dfrac{2x-1}{x+1}$ on $[0,2]$.`, 1, "f(0) = −1, f(2) = 1; 2/2."),
  mc("Find the equation of the graph.", S`$y=\dfrac{-2x+4}{x+1}$`, [S`$y=\dfrac{2x-4}{x+1}$`, S`$y=\dfrac{-2x-4}{x+1}$`, S`$y=\dfrac{-2x+4}{x-1}$`], "VA x = −1, HA y = −2, x-intercept 2.", RG((x) => (-2 * x + 4) / (x + 1), [-1], V, -2, [P(2, 0), P(0, 4)])),
  mc("Which transformation of y = 1/x gives this graph?", "reflect in the x-axis, stretch 4, right 2, up 1", ["stretch 4, right 2, up 1", "reflect in the x-axis, stretch 4, left 2, up 1", "reflect in the y-axis, stretch 1, right 2, up 4"], "y = 1 − 4/(x − 2).", RG((x) => 1 - 4 / (x - 2), [2], V, 1, [P(-2, 2), P(6, 0)])),
  mc("The graph has the form y = (ax + b)/(x + d). What is its y-intercept?", S`$\tfrac32$`, [S`$-\tfrac32$`, S`$3$`, S`$2$`], "y = (3x + 3)/(x + 2): VA x = −2, HA y = 3, x-intercept −1.", RG((x) => (3 * x + 3) / (x + 2), [-2], V, 3, [P(-1, 0)])),
  mc("For this graph, solve f(x) ≤ 0.", S`$-1\lt x\le2$`, [S`$-1\le x\le2$`, S`$x\lt-1$ or $x\ge2$`, S`$x\le2$`], "Below the axis between the asymptote and the zero; the asymptote is excluded.", RG((x) => (x - 2) / (x + 1), [-1], V, 1, [P(2, 0)])),
  tf(S`The graph of $y=\dfrac{2x+1}{x-3}$ meets the line $y=2$.`, false, "2x + 1 = 2x − 6 has no solution: y = 2 is the asymptote."),
  mc(S`What is the range of $f(x)=\dfrac{2x-6}{x-3}$?`, S`$\{2\}$`, [S`$y\ne2$`, S`$y\ne3$`, "all real numbers"], "f(x) = 2 for every x in its domain."),
  num(S`How many points do $y=\dfrac{x+2}{x-2}$ and $y=x$ share?`, 2, "x² − 3x − 2 = 0 has discriminant 17 > 0."),
  mc(S`$f(x)=\dfrac{ax+b}{cx+d}$ with $c\ne0$ has a horizontal asymptote $y=0$ only when…`, S`$a=0$`, [S`$b=0$`, S`$d=0$`, S`$ad=bc$`], "HA y = a/c."),
];
