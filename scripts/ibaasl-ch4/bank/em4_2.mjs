// 4.2 Transforming the Reciprocal Function — 20 easy + 20 medium questions
import { mc, ms, num, tf, fill } from "./kit.mjs";
import { planeDoc, P } from "../../mcr3u-ch1/bank/fig.mjs";

const S = String.raw;
const hyp = (f, h, xmin, xmax, color = "violet") => [{ f, a: xmin, b: h - 0.02, color }, { f, a: h + 0.02, b: xmax, color }];
const ASY = (h, k) => ({ vlines: [{ x: h, color: "red", dash: true }], lines: [{ m: 0, b: k, color: "red", dash: true }] });

export const E = [
  num(S`What is the vertical asymptote of $y=\frac{1}{x-8}$? Give the value of $x$.`, 8, "x − 8 = 0."),
  num(S`What is the vertical asymptote of $y=\frac{4}{x+9}+1$? Give the value of $x$.`, -9, "x + 9 = 0."),
  num(S`What is the horizontal asymptote of $y=\frac{2}{x-1}+6$? Give the value of $y$.`, 6, "The added constant."),
  num(S`What is the horizontal asymptote of $y=\frac{5}{x+2}-7$? Give the value of $y$.`, -7, "The added constant."),
  mc(S`$y=\frac{1}{x-3}$ is $y=\frac1x$ translated:`, "3 units right", ["3 units left", "3 units up", "3 units down"], "Replacing x by x − 3 moves the graph right."),
  mc(S`$y=\frac1x-4$ is $y=\frac1x$ translated:`, "4 units down", ["4 units up", "4 units left", "4 units right"], "Subtracting outside moves the graph down."),
  num(S`Find the y-intercept of $y=\frac{10}{x-5}+3$.`, 1, "−2 + 3."),
  num(S`$y=\frac{3}{x+11}-2$ is defined for every $x$ except:`, -11, "The denominator is 0 there."),
  tf(S`The range of $y=\frac{6}{x-2}+4$ is all real $y$ except 4.`, true, "6/(x − 2) is never 0."),
  tf(S`$y=\frac{1}{x+4}$ has a vertical asymptote at $x=4$.`, false, "x + 4 = 0 at x = −4."),
  mc("The graph shown has the equation:", S`$y=\frac{1}{x-2}-1$`, [S`$y=\frac{1}{x+2}-1$`, S`$y=\frac{1}{x-2}+1$`, S`$y=\frac{1}{x+1}-2$`], "Asymptotes x = 2 and y = −1.", planeDoc({ view: { xmin: -3, xmax: 7, ymin: -6, ymax: 4 }, curves: hyp((x) => 1 / (x - 2) - 1, 2, -3, 7), ...ASY(2, -1) })),
  num("The graph shown is y = 1/(x + 1) + k. Find k.", 4, "The horizontal asymptote is y = 4.", planeDoc({ view: { xmin: -6, xmax: 4, ymin: -1, ymax: 9 }, curves: hyp((x) => 1 / (x + 1) + 4, -1, -6, 4), ...ASY(-1, 4) })),
  mc(S`$y=\frac{3}{x}$ is $y=\frac1x$:`, "stretched vertically by factor 3", ["translated 3 up", "translated 3 right", "stretched horizontally by factor 1/3 only"], "Every y-value is multiplied by 3."),
  mc(S`$y=\frac1x$ is translated 2 left and 5 up. The new equation is:`, S`$y=\frac{1}{x+2}+5$`, [S`$y=\frac{1}{x-2}+5$`, S`$y=\frac{1}{x+5}+2$`, S`$y=\frac{1}{x+2}-5$`], "Left 2 → x + 2; up 5 → +5."),
  num(S`For $f(x)=\frac{2}{x-1}+5$, find $f(3)$.`, 6, "1 + 5."),
  num(S`The asymptotes of $y=\frac{7}{x+2}-6$ cross at $(h,k)$. Find $h$.`, -2, "x + 2 = 0."),
  fill("The point where the two asymptotes of y = a/(x − h) + k cross is called the ___.", ["centre", "center", "Centre", "Center"], "The graph is symmetric about it."),
  num(S`For $f(x)=-\frac{4}{x-2}+1$, find $f(4)$.`, -1, "−2 + 1."),
  tf(S`$y=-\frac1x$ is a reflection of $y=\frac1x$ in the x-axis.`, true, "Every y-value changes sign."),
  num(S`Find the y-intercept of $y=\frac{12}{x+6}-5$.`, -3, "2 − 5."),
];

export const M = [
  num(S`Find the x-intercept of $y=\frac{4}{x-5}+2$.`, 3, "4/(x − 5) = −2 → x − 5 = −2."),
  num(S`Find the x-intercept of $y=\frac{10}{x+1}-2$.`, 4, "10/(x + 1) = 2 → x + 1 = 5."),
  num(S`$y=\frac{a}{x-1}+2$ passes through $(3,5)$. Find $a$.`, 6, "a/2 = 3."),
  num(S`$y=\frac{a}{x+4}-1$ passes through $(0,2)$. Find $a$.`, 12, "a/4 = 3."),
  num(S`Solve $\frac{8}{x-2}+1=5$.`, 4, "8/(x − 2) = 4."),
  num(S`Solve $\frac{3}{x+5}-2=-5$.`, -6, "3/(x + 5) = −3 → x + 5 = −1."),
  num("The graph shown has asymptotes x = 3 and y = 2 and passes through the marked point. Find a in y = a/(x − 3) + 2.", 4, "a/2 + 2 = 4.", planeDoc({ view: { xmin: -2, xmax: 9, ymin: -4, ymax: 8 }, curves: hyp((x) => 4 / (x - 3) + 2, 3, -2, 9), ...ASY(3, 2), points: [P(5, 4)] })),
  num(S`The graph of $y=-\frac{2}{x+1}+3$ is shown. Find its y-intercept.`, 1, "−2 + 3.", planeDoc({ view: { xmin: -6, xmax: 4, ymin: -3, ymax: 8 }, curves: hyp((x) => -2 / (x + 1) + 3, -1, -6, 4), ...ASY(-1, 3), points: [P(0, 1)] })),
  ms("Which functions have range y ≠ 3? Select all.", [S`$y=\frac{1}{x-3}$`, S`$y=\frac{2}{x+1}+3$`, S`$y=\frac{3}{x}$`, S`$y=-\frac{5}{x-4}+3$`], [1, 3], "The range excludes the added constant k."),
  num(S`$y=\frac{1}{x-7}-2$ is $y=\frac1x$ translated $h$ right and $k$ up. Find $h+k$.`, 5, "h = 7, k = −2."),
  mc(S`The domain and range of $y=-\frac{1}{x+2}-3$ are:`, S`$x\ne-2$, $y\ne-3$`, [S`$x\ne2$, $y\ne3$`, S`$x\ne-3$, $y\ne-2$`, S`$x\ne2$, $y\ne-3$`], "x + 2 = 0; the constant is −3."),
  num(S`How many x-intercepts does $y=\frac{1}{x-6}$ have?`, 0, "1/(x − 6) is never 0."),
  mc(S`For $x>1$, the range of $y=\frac{5}{x-1}+2$ is:`, S`$y>2$`, [S`$y<2$`, S`$y>1$`, S`$y\ne2$`], "On the right branch the values decrease towards 2."),
  num(S`$y=\frac{2}{x-h}+k$ has asymptotes $x=-3$ and $y=5$. Find $y$ when $x=-1$.`, 6, "2/2 + 5."),
  mc(S`Each point $(u,v)$ on $y=\frac1x$ moves to $(u+2,v-1)$. The new graph is:`, S`$y=\frac{1}{x-2}-1$`, [S`$y=\frac{1}{x+2}-1$`, S`$y=\frac{1}{x-2}+1$`, S`$y=\frac{1}{x-1}+2$`], "Right 2, down 1."),
  tf(S`$y=\frac{2}{x-1}+4$ and $y=\frac{4x-2}{x-1}$ are the same function.`, true, "4(x − 1) + 2 = 4x − 2."),
  num(S`A population is $P(t)=500-\frac{400}{t+2}$. What is $P(0)$?`, 300, "500 − 200."),
  num(S`For $P(t)=500-\frac{400}{t+2}$, what value does $P$ approach in the long run?`, 500, "400/(t + 2) → 0."),
  num(S`Solve $\frac{2}{x-3}=\frac12$.`, 7, "x − 3 = 4."),
  num(S`A graph $y=\frac{a}{x-h}+k$ has centre $(4,-2)$ and passes through $(5,1)$. Find $y$ when $x=7$.`, -1, "a = 3: 3/3 − 2."),
];
