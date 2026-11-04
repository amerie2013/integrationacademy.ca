// 6.3 Transformations of Logarithmic Functions — 20 easy + 20 medium questions
import { mc, ms, num, tf, fill } from "./kit.mjs";
import { planeDoc } from "./fig.mjs";
const S = String.raw;
const lg = (b) => (x) => Math.log(x) / Math.log(b);
const va = (x) => ({ x, color: "red", dash: true });
const G = (f, a, d, pts = [], view = { xmin: -4, xmax: 12, ymin: -5, ymax: 5 }) => planeDoc({ view, vlines: [va(d)], curves: [{ f, a, color: "violet" }], points: pts, step: { x: 1, y: 1 } });

export const E = [
  mc(S`What is the vertical asymptote of $y=\log_2 x$?`, S`$x=0$`, [S`$y=0$`, S`$x=1$`, S`$y=1$`], "The argument x must be positive, and the graph approaches the y-axis."),
  mc(S`What is the x-intercept of $y=\log_5 x$?`, "1", ["0", "5", "none"], "log₅ 1 = 0."),
  mc(S`What is the domain of $y=\log x$?`, S`$x>0$`, ["all real numbers", S`$x\ge0$`, S`$x>1$`], "Only positive numbers have logarithms."),
  mc(S`What is the range of $y=\log_3x$?`, "all real numbers", [S`$y>0$`, S`$y\ge0$`, S`$y>1$`], "It is the domain of y = 3ˣ."),
  mc(S`What is the vertical asymptote of $y=\log(x-4)$?`, S`$x=4$`, [S`$x=-4$`, S`$y=4$`, S`$x=0$`], "x − 4 > 0 ⇒ x > 4; d = 4."),
  mc(S`What is the vertical asymptote of $y=\log_2(x+3)-1$?`, S`$x=-3$`, [S`$x=3$`, S`$x=-1$`, S`$y=-1$`], "x + 3 = x − (−3); c does not move the asymptote."),
  mc(S`Which transformation maps $y=\log x$ onto $y=\log x+5$?`, "up 5", ["right 5", "left 5", "stretch by 5"], "Adding 5 to every y-value."),
  mc(S`Which transformation maps $y=\log x$ onto $y=\log(x-2)$?`, "right 2", ["left 2", "up 2", "down 2"], "x − 2: shift right 2."),
  mc(S`Which transformation maps $y=\log x$ onto $y=-\log x$?`, "reflection in the x-axis", ["reflection in the y-axis", "shift down", "compression"], "Every y-value changes sign."),
  mc(S`Which transformation maps $y=\log x$ onto $y=\log(-x)$?`, "reflection in the y-axis", ["reflection in the x-axis", "shift left", "no change"], "Every x-value changes sign."),
  num(S`The point $(2,1)$ is on $y=\log_2x$. Find the y-coordinate of its image on $y=4\log_2x$.`, 4, "a = 4 multiplies y by 4."),
  num(S`The point $(2,1)$ is on $y=\log_2x$. Find the x-coordinate of its image on $y=\log_2(x-5)$.`, 7, "d = 5 adds 5 to x."),
  num(S`Find the x-intercept of $y=\log(x+2)$.`, -1, "x + 2 = 1."),
  num(S`Find the y-intercept of $y=\log_2(x+4)$.`, 2, "x = 0: log₂ 4 = 2."),
  tf(S`$y=\log_2 x+3$ has asymptote $x=3$.`, false, "Adding 3 shifts the graph up; the asymptote stays at x = 0."),
  tf(S`$y=\log_{0.5}x$ is a decreasing function.`, true, "Base between 0 and 1: like (1/2)ˣ, it decreases."),
  fill(S`The domain of $y=\log_3(x-7)$ is $x>$ ____.`, ["7"], "x − 7 > 0."),
  fill(S`In $y=a\log_b\big(k(x-d)\big)+c$, the vertical asymptote is $x=$ ____ (a letter).`, ["d"], "Only the horizontal shift moves the asymptote."),
  mc("The graph shows a translated y = log₂ x. What is its asymptote?", S`$x=2$`, [S`$x=0$`, S`$y=2$`, S`$x=-2$`], "The dashed line is at x = 2.", G((x) => lg(2)(x - 2), 2.005, 2)),
  mc("The graph shows y = log₂(x + 1). Which point is on it?", "(1, 1)", ["(1, 0)", "(2, 1)", "(0, 1)"], "log₂(1 + 1) = 1.", G((x) => lg(2)(x + 1), -0.995, -1, [{ x: 1, y: 1, label: "(1, 1)", color: "blue" }])),
];

export const M = [
  mc(S`What is the asymptote of $y=\log(2x-8)$?`, S`$x=4$`, [S`$x=8$`, S`$x=-4$`, S`$x=2$`], "2x − 8 = 2(x − 4)."),
  mc(S`What is the domain of $y=\log_3(6-2x)$?`, S`$x<3$`, [S`$x>3$`, S`$x<6$`, S`$x>-3$`], "6 − 2x > 0 ⇒ x < 3."),
  mc(S`Which describes $y=-2\log_5(x+1)+3$?`, "reflect in the x-axis, stretch by 2, left 1, up 3", ["stretch by 2, right 1, up 3", "reflect in the y-axis, stretch by 2, left 1, up 3", "compress by 1/2, left 1, up 3"], "a = −2, d = −1, c = 3."),
  num(S`The point $(9,2)$ is on $y=\log_3x$. Find the y-coordinate of its image on $y=-\log_3(x)+5$.`, 3, "y → −y + 5 = 3."),
  num(S`The point $(9,2)$ is on $y=\log_3x$. Find the x-coordinate of its image on $y=\log_3(3x)$.`, 3, "k = 3 divides x by 3."),
  num(S`The point $(8,3)$ is on $y=\log_2x$. Find the x-coordinate of its image on $y=\log_2\big(2(x+1)\big)$.`, 3, "x → x/2 − 1 = 3."),
  num(S`Find the x-intercept of $y=\log_2(x-1)-3$.`, 9, "log₂(x − 1) = 3 ⇒ x − 1 = 8."),
  num(S`Find the y-intercept of $y=3\log(x+10)-1$.`, 2, "x = 0: 3 log 10 − 1 = 2."),
  num(S`Find $d$ if $y=\log_5(x-d)$ passes through $(30,2)$.`, 5, "30 − d = 25."),
  num(S`Find $c$ if $y=\log_4x+c$ passes through $(64,1)$.`, -2, "3 + c = 1."),
  num(S`Find $a$ if $y=a\log_2x$ passes through $(16,-2)$.`, -0.5, "4a = −2.", null, 0.001),
  ms(S`Select every function whose asymptote is $x=-2$.`, [S`$y=\log(x+2)$`, S`$y=\log_3(2x+4)$`, S`$y=\log(x-2)$`, S`$y=5\log_2(x+2)-7$`, S`$y=\log x-2$`], [0, 1, 3], "Factor: 2x + 4 = 2(x + 2). log x − 2 has asymptote x = 0."),
  ms(S`Select every function that is increasing.`, [S`$y=\log_2(x-1)$`, S`$y=-\log x$`, S`$y=\log_{1/3}x$`, S`$y=3\log_5 x+2$`], [0, 3], "Base > 1 with a > 0 increases; a negative a or a base below 1 reverses it."),
  tf(S`$y=\log_2(4x)$ and $y=\log_2x+2$ have the same graph.`, true, "Every point checks: e.g. x = 1 gives 2 in both, x = 2 gives 3 in both."),
  tf(S`The graph of $y=\log(x+1)$ passes through the origin.`, true, "log(0 + 1) = log 1 = 0."),
  mc(S`Which equation has asymptote $x=3$ and passes through $(4,2)$?`, S`$y=\log_2(x-3)+2$`, [S`$y=\log_2(x+3)+2$`, S`$y=\log_2(x-3)-2$`, S`$y=\log_2x+3$`], "log₂(4 − 3) + 2 = 0 + 2 = 2."),
  mc("The graph is y = log(x − d) + c. Find d and c.", S`$d=-2,\ c=1$`, [S`$d=2,\ c=1$`, S`$d=-2,\ c=-1$`, S`$d=1,\ c=-2$`], "Asymptote x = −2; at x = −1 the argument is 1, so y = c = 1.", G((x) => Math.log10(x + 2) + 1, -1.998, -2, [{ x: -1, y: 1, label: "(−1, 1)", color: "blue" }, { x: 8, y: 2, label: "(8, 2)", color: "blue" }])),
  mc("The graph is a reflected logarithm. Which equation fits?", S`$y=\log_2(-x)$`, [S`$y=-\log_2x$`, S`$y=\log_2x$`, S`$y=-\log_2(-x)$`], "It lies left of x = 0 and passes through (−2, 1).", planeDoc({ view: { xmin: -9, xmax: 3, ymin: -3, ymax: 4 }, vlines: [va(0)], curves: [{ f: (x) => lg(2)(-x), b: -0.005, color: "violet" }], points: [{ x: -2, y: 1, label: "(−2, 1)", color: "blue" }], step: { x: 1, y: 1 } })),
  fill(S`$y=\log_3(x+5)-2$: the image of $(1,0)$ is $(\square,-2)$. Fill in the box.`, ["-4", "−4"], "x → x − 5."),
  mc(S`What is the inverse of $y=\log_2(x)+3$?`, S`$y=2^{x-3}$`, [S`$y=2^x+3$`, S`$y=2^{x+3}$`, S`$y=3^x+2$`], "Swap: x = log₂ y + 3 ⇒ y = 2^(x − 3)."),
];
