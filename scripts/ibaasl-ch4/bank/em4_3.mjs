// 4.3 Rational Functions — 20 easy + 20 medium questions
import { mc, ms, num, tf, fill } from "./kit.mjs";
import { planeDoc, P } from "../../mcr3u-ch1/bank/fig.mjs";

const S = String.raw;
const hyp = (f, h, xmin, xmax, color = "violet") => [{ f, a: xmin, b: h - 0.02, color }, { f, a: h + 0.02, b: xmax, color }];
const ASY = (h, k) => ({ vlines: [{ x: h, color: "red", dash: true }], lines: [{ m: 0, b: k, color: "red", dash: true }] });

export const E = [
  num(S`What is the vertical asymptote of $y=\frac{x+1}{x-9}$? Give the value of $x$.`, 9, "x − 9 = 0."),
  num(S`What is the vertical asymptote of $y=\frac{2x+5}{x+7}$? Give the value of $x$.`, -7, "x + 7 = 0."),
  num(S`What is the horizontal asymptote of $y=\frac{3x+1}{x-4}$? Give the value of $y$.`, 3, "3/1."),
  num(S`What is the horizontal asymptote of $y=\frac{x-5}{2x+1}$? Give the value of $y$.`, 0.5, "1/2.", null, 1e-9),
  num(S`Find the x-intercept of $y=\frac{x-3}{x+5}$.`, 3, "Numerator = 0."),
  num(S`Find the y-intercept of $y=\frac{x+8}{x-4}$.`, -2, "8/(−4)."),
  num(S`What is the vertical asymptote of $y=\frac{4x-1}{2x-6}$? Give the value of $x$.`, 3, "2x − 6 = 0."),
  num(S`What is the horizontal asymptote of $y=\frac{-4x+5}{2x-3}$? Give the value of $y$.`, -2, "−4/2."),
  mc(S`The vertical asymptote of $\frac{ax+b}{cx+d}$ is found by setting:`, "the denominator equal to 0", ["the numerator equal to 0", "x equal to 0", "a/c equal to 0"], "Division by zero is not possible there."),
  tf(S`The horizontal asymptote of $\frac{ax+b}{cx+d}$ is $y=\frac bd$.`, false, "It is a/c; b/d is the y-intercept."),
  mc(S`The graph of $y=\frac{x+2}{x-1}$ is shown. Its asymptotes are:`, S`$x=1$, $y=1$`, [S`$x=-1$, $y=1$`, S`$x=1$, $y=2$`, S`$x=-2$, $y=1$`], "Bottom = 0 at x = 1; ratio 1/1.", planeDoc({ view: { xmin: -5, xmax: 6, ymin: -5, ymax: 7 }, curves: hyp((x) => (x + 2) / (x - 1), 1, -5, 6), ...ASY(1, 1) })),
  num(S`The graph of $y=\frac{2x-4}{x+1}$ is shown. Find its x-intercept.`, 2, "2x − 4 = 0.", planeDoc({ view: { xmin: -6, xmax: 6, ymin: -6, ymax: 8 }, curves: hyp((x) => (2 * x - 4) / (x + 1), -1, -6, 6), ...ASY(-1, 2), points: [P(2, 0), P(0, -4)] })),
  num(S`$y=\frac{x+3}{x+6}$ is defined for every $x$ except:`, -6, "x + 6 = 0."),
  num(S`The range of $y=\frac{5x-1}{x+2}$ is all real numbers except:`, 5, "The horizontal asymptote."),
  num(S`Find the y-intercept of $y=\frac{3x-9}{x+3}$.`, -3, "−9/3."),
  fill(S`A function of the form $\frac{ax+b}{cx+d}$ is called a ___ function.`, ["rational", "Rational"], "A quotient of polynomials."),
  num(S`For $f(x)=\frac{x+4}{x-1}$, find $f(2)$.`, 6, "6/1."),
  tf(S`$y=\frac{x-2}{x+3}$ has x-intercept 2.`, true, "x − 2 = 0."),
  mc(S`The horizontal asymptote of $y=\frac{6x+1}{3x}$ is:`, S`$y=2$`, [S`$y=6$`, S`$y=0$`, S`$x=0$`], "6/3."),
  num(S`For $f(x)=\frac{2x}{x+5}$, find $f(5)$.`, 1, "10/10."),
];

export const M = [
  num(S`$\frac{2x+3}{x+1}=2+\frac{A}{x+1}$. Find $A$.`, 1, "2x + 3 = 2(x + 1) + 1."),
  num(S`$\frac{5x+4}{x+2}=5+\frac{A}{x+2}$. Find $A$.`, -6, "5x + 4 = 5(x + 2) − 6."),
  num(S`$\frac{x-7}{x-3}=1+\frac{A}{x-3}$. Find $A$.`, -4, "x − 7 = (x − 3) − 4."),
  num(S`Solve $\frac{x+4}{x-2}=3$.`, 5, "x + 4 = 3x − 6."),
  num(S`Solve $\frac{2x-1}{x+2}=1$.`, 3, "2x − 1 = x + 2."),
  num(S`$f(x)=\frac{x+1}{x-3}$. Find $f^{-1}(2)$.`, 7, "Solve f(x) = 2: x + 1 = 2x − 6."),
  num(S`$f(x)=\frac{3x-1}{x+2}$. What is the vertical asymptote of $f^{-1}$? Give the value of $x$.`, 3, "f has horizontal asymptote y = 3; the asymptotes swap."),
  ms("Which have horizontal asymptote y = 2? Select all.", [S`$\frac{2x+1}{x-5}$`, S`$\frac{4x}{2x+1}$`, S`$\frac{x+2}{x-1}$`, S`$\frac{6x-1}{3x+7}$`], [0, 1, 3], "The ratio a/c must be 2."),
  mc("The graph shown has asymptotes x = −2 and y = 3. Its equation could be:", S`$y=\frac{3x+1}{x+2}$`, [S`$y=\frac{3x+1}{x-2}$`, S`$y=\frac{x+3}{x+2}$`, S`$y=\frac{2x+3}{x+3}$`], "Bottom zero at −2; ratio 3/1.", planeDoc({ view: { xmin: -7, xmax: 4, ymin: -3, ymax: 9 }, curves: hyp((x) => (3 * x + 1) / (x + 2), -2, -7, 4), ...ASY(-2, 3) })),
  num("The average cost per item is A(n) = (600 + 2n)/n (shown). For how many items is the average cost 5?", 200, "2 + 600/n = 5.", planeDoc({ view: { xmin: -10, xmax: 520, ymin: -1, ymax: 16 }, curves: [{ f: (n) => (600 + 2 * n) / n, a: 45, b: 520 }], lines: [{ m: 0, b: 2, color: "red", dash: true }], points: [P(200, 5)], step: { x: 50, y: 2 }, xlabel: "n", ylabel: "A" })),
  num(S`$f(x)=\frac{ax+1}{x-2}$ has horizontal asymptote $y=4$. Find $a$.`, 4, "a/1 = 4."),
  num(S`$f(x)=\frac{3x+b}{x-1}$ passes through $(0,5)$. Find $b$.`, -5, "b/(−1) = 5."),
  num(S`For which $k$ is $\frac{6x+k}{2x+1}$ a constant (a horizontal line with a hole)?`, 3, "6x + k = 3(2x + 1) when k = 3."),
  tf(S`The graph of $y=\frac{x+1}{x+1}$ is the line $y=1$ with a hole at $x=-1$.`, true, "The fraction is 1 except where it is not defined."),
  mc(S`The inverse of $f(x)=\frac{x-2}{x+1}$ is:`, S`$\frac{x+2}{1-x}$`, [S`$\frac{x+1}{x-2}$`, S`$\frac{x-2}{1-x}$`, S`$\frac{2-x}{x+1}$`], "x(y + 1) = y − 2 → y(x − 1) = −x − 2."),
  num(S`Where does $y=\frac{x+6}{x+2}$ meet $y=2$? Give $x$.`, 2, "x + 6 = 2x + 4."),
  mc(S`For $x>2$, the range of $y=\frac{x+5}{x-2}$ is:`, S`$y>1$`, [S`$y<1$`, S`$y>2$`, S`$y\ne2$`], "1 + 7/(x − 2) with x − 2 > 0."),
  num(S`Find the y-intercept of $y=\frac{4x+12}{2x-3}$.`, -4, "12/(−3)."),
  num(S`A concentration is $C=\frac{15t}{t+3}$. What value does $C$ approach in the long run?`, 15, "15/1."),
  num(S`For $C=\frac{15t}{t+3}$, when is $C=10$?`, 6, "15t = 10t + 30."),
];
