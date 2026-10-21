// 4.1 The Reciprocal Function — 20 easy + 20 medium questions
import { mc, ms, num, tf, fill } from "./kit.mjs";
import { planeDoc, P } from "../../mcr3u-ch1/bank/fig.mjs";

const S = String.raw;
const hyp = (f, h, xmin, xmax, color = "violet") => [{ f, a: xmin, b: h - 0.02, color }, { f, a: h + 0.02, b: xmax, color }];
const AX = { vlines: [{ x: 0, color: "red", dash: true }], lines: [{ m: 0, b: 0, color: "red", dash: true }] };

export const E = [
  num(S`For $f(x)=\frac{20}{x}$, find $f(4)$.`, 5, "20 ÷ 4."),
  num(S`For $f(x)=\frac{9}{x}$, find $f(-3)$.`, -3, "9 ÷ (−3)."),
  num(S`For $f(x)=\frac1x$, find $f(0.25)$.`, 4, "1 ÷ 0.25."),
  num(S`For $f(x)=-\frac{14}{x}$, find $f(7)$.`, -2, "−14 ÷ 7."),
  mc(S`The vertical asymptote of $y=\frac{3}{x}$ is:`, S`$x=0$`, [S`$y=0$`, S`$x=3$`, S`$y=3$`], "x = 0 is not in the domain."),
  mc(S`The horizontal asymptote of $y=\frac{5}{x}$ is:`, S`$y=0$`, [S`$x=0$`, S`$y=5$`, S`$x=5$`], "5/x approaches 0 for large x."),
  tf(S`The number 0 is in the domain of $f(x)=\frac1x$.`, false, "Division by zero has no value."),
  tf(S`The graph of $y=\frac{2}{x}$ never crosses the x-axis.`, true, "2/x is never 0."),
  mc(S`The branches of $y=\frac{6}{x}$ lie in quadrants:`, "1 and 3", ["2 and 4", "1 and 2", "1 and 4"], "k > 0."),
  mc(S`The branches of $y=-\frac{1}{x}$ lie in quadrants:`, "2 and 4", ["1 and 3", "3 and 4", "1 and 2"], "k < 0."),
  num(S`$y=\frac kx$ passes through $(2,7)$. Find $k$.`, 14, "k = xy."),
  num(S`$y=\frac kx$ passes through $(-5,3)$. Find $k$.`, -15, "k = xy."),
  fill(S`The graph of $y=\frac1x$ is called a ___.`, ["hyperbola", "Hyperbola", "rectangular hyperbola"], "It has two branches."),
  num("The graph shows y = k/x through the marked point. Find k.", 8, "k = 2 × 4.", planeDoc({ view: { xmin: -6, xmax: 6, ymin: -6, ymax: 6 }, curves: hyp((x) => 8 / x, 0, -6, 6), ...AX, points: [P(2, 4)] })),
  mc("The graph shown is:", S`$y=-\frac3x$`, [S`$y=\frac3x$`, S`$y=-3x$`, S`$y=\frac{x}{3}$`], "Branches in quadrants 2 and 4 through (1, −3).", planeDoc({ view: { xmin: -6, xmax: 6, ymin: -6, ymax: 6 }, curves: hyp((x) => -3 / x, 0, -6, 6), ...AX, points: [P(1, -3)] })),
  tf(S`$f(x)=\frac1x$ is its own inverse.`, true, "Swapping x and y gives the same equation."),
  num(S`$y$ varies inversely with $x$, and $y=6$ when $x=5$. Find $y$ when $x=10$.`, 3, "xy = 30."),
  num(S`For $y=\frac{1}{x}$, find $y$ when $x=-0.5$.`, -2, "1 ÷ (−0.5)."),
  mc(S`The range of $y=\frac{4}{x}$ is:`, "all real y except 0", ["all real numbers", "y > 0", "y ≥ 0"], "4/x is never 0."),
  num(S`What is the product $xy$ for every point on $y=\frac{13}{x}$?`, 13, "xy = k."),
];

export const M = [
  num(S`For $f(x)=\frac{3}{x}$, solve $f(x)=12$.`, 0.25, "x = 3/12.", null, 1e-9),
  num(S`$y=\frac kx$ passes through $(0.4,15)$. Find $k$.`, 6, "0.4 × 15."),
  num(S`$y=\frac{k}{x}$ passes through $(3,-8)$. Find $y$ when $x=-6$.`, 4, "k = −24."),
  num(S`Find the positive x-coordinate where $y=\frac{25}{x}$ meets $y=x$.`, 5, "x² = 25."),
  num(S`Find the positive x-coordinate where $y=\frac{8}{x}$ meets $y=2x$.`, 2, "2x² = 8."),
  num(S`Find the x-coordinate in quadrant 4 where $y=-\frac{9}{x}$ meets $y=-x$.`, 3, "x² = 9; quadrant 4 needs x > 0."),
  tf(S`As $x$ becomes very large, $\frac{100}{x}$ approaches 0.`, true, "e.g. x = 10 000 gives 0.01."),
  num(S`For $f(x)=\frac{2}{x}$, find $f(0.001)$.`, 2000, "2 ÷ 0.001."),
  num("8 people share a prize equally and each gets 450. How much would each get if 12 people shared it?", 300, "Total 3600; 3600 ÷ 12."),
  num("A journey takes 4 hours at 90 km/h. How long does it take at 120 km/h?", 3, "Distance 360 km."),
  num("The violet curve is y = k/x. The amber rectangle has corners at the origin and at a point on the curve. What is its area?", 10, "Area = xy = k = 10.", planeDoc({ view: { xmin: -1, xmax: 7, ymin: -1, ymax: 7 }, curves: [{ f: (x) => 10 / x, a: 1.4, b: 7 }], segs: [{ pts: [[0, 0], [2.5, 0], [2.5, 4], [0, 4], [0, 0]], color: "amber" }], points: [P(2.5, 4)] })),
  num("The graph shows y = k/x passing through the marked point. Find y when x = −2.", -6, "k = 4 × 3 = 12.", planeDoc({ view: { xmin: -7, xmax: 7, ymin: -7, ymax: 7 }, curves: hyp((x) => 12 / x, 0, -7, 7), ...AX, points: [P(4, 3)] })),
  ms(S`Which points lie on $y=\frac{18}{x}$? Select all.`, [S`$(3,6)$`, S`$(-2,-9)$`, S`$(6,-3)$`, S`$(0.5,36)$`], [0, 1, 3], "Check xy = 18."),
  mc(S`The graph of $y=\frac kx$ is symmetric in the line:`, S`$y=x$`, [S`$x=0$`, S`$y=0$`, S`$y=x+1$`], "It is self-inverse."),
  num(S`$y$ varies inversely with $x$. When $x$ is tripled, $y$ is multiplied by:`, 1 / 3, "xy stays constant.", null, 1e-3),
  tf(S`If $y=\frac kx$ with $k<0$, then $y$ increases as $x$ increases on each branch.`, true, "e.g. −6/x: −6, −3, −2 at x = 1, 2, 3."),
  num(S`For $y=\frac{5}{x}$, what is $y$ when $x=\frac{5}{4}$?`, 4, "5 ÷ 1.25."),
  num(S`The point $(p,2p)$ lies on $y=\frac{50}{x}$ with $p>0$. Find $p$.`, 5, "2p² = 50."),
  mc("Which data show inverse variation?", "x: 1, 2, 4; y: 12, 6, 3", ["x: 1, 2, 4; y: 3, 6, 12", "x: 1, 2, 4; y: 12, 10, 8", "x: 1, 2, 4; y: 1, 4, 16"], "xy = 12 each time."),
  num("A tap fills a tank in 36 minutes. How many minutes do 3 identical taps take together?", 12, "Time varies inversely with the number of taps."),
];
