// 6.3 Transformations of Logarithmic Functions — 20 hard questions
import { mc, ms, num, tf } from "./kit.mjs";
import { planeDoc } from "./fig.mjs";
const S = String.raw;
const lg = (b) => (x) => Math.log(x) / Math.log(b);
const va = (x) => ({ x, color: "red", dash: true });
const G = (curves, d, pts, view) => planeDoc({ view, vlines: [va(d)], curves, points: pts, step: { x: 1, y: 1 } });

export const TOPIC = "6.3 Transformations of Logarithmic Functions";
export const Q = [
  num(S`Find the x-intercept of $y=-3\log_2(x-1)+6$.`, 5, "log₂(x − 1) = 2 ⇒ x − 1 = 4."),
  num(S`Find the y-intercept of $y=2\log_3(9-x)-1$.`, 3, "x = 0: 2 log₃ 9 − 1 = 4 − 1."),
  num(S`Find the x-intercept of $y=\log(5x+20)-2$.`, 16, "5x + 20 = 100 ⇒ x = 16."),
  num(S`The point $(16,4)$ is on $y=\log_2x$. Find the x-coordinate of its image on $y=\log_2\big(4(x-3)\big)$.`, 7, "x → 16/4 + 3 = 7."),
  num(S`The point $(16,4)$ is on $y=\log_2x$. Find the y-coordinate of its image on $y=-\frac12\log_2(x+1)+3$.`, 1, "y → −½(4) + 3 = 1."),
  num(S`$y=a\log x+c$ passes through $(10,4)$ and $(1000,10)$. Find $a$.`, 3, "a + c = 4 and 3a + c = 10 ⇒ 2a = 6."),
  num(S`$y=a\log x+c$ passes through $(10,4)$ and $(1000,10)$. Find $c$.`, 1, "a = 3, so c = 4 − 3."),
  num(S`$y=\log_b(x-2)$ passes through $(11,2)$. Find $b$.`, 3, "b² = 9 with b > 0."),
  mc(S`What is the domain of $y=\log_2(-3x+12)+1$?`, S`$x<4$`, [S`$x>4$`, S`$x<-4$`, S`$x>-4$`], "−3x + 12 > 0 ⇒ x < 4 (dividing by −3 flips the inequality)."),
  mc(S`What is the inverse of $y=3\log_2(x+1)$?`, S`$y=2^{x/3}-1$`, [S`$y=3\cdot2^{x}-1$`, S`$y=2^{3x}-1$`, S`$y=2^{x/3}+1$`], "Swap: x = 3 log₂(y + 1) ⇒ y + 1 = 2^(x/3)."),
  mc(S`Which is the same graph as $y=\log_3(9x)$?`, S`$y=\log_3x+2$`, [S`$y=9\log_3x$`, S`$y=\log_3(x+9)$`, S`$y=\log_3x+9$`], "Tested points: x = 1 gives 2; x = 3 gives 3; x = 9 gives 4 — always 2 more than log₃ x."),
  tf(S`Every graph $y=\log_b\big(k(x-d)\big)$ with $k>0$ crosses the x-axis at $x=d+\frac1k$.`, true, "k(x − d) = 1 ⇒ x = d + 1/k."),
  tf(S`$y=\log_2x^2$ and $y=2\log_2x$ have the same graph.`, false, "log₂ x² is defined for x < 0 too; 2 log₂ x is not. They agree only for x > 0."),
  ms(S`Select every equation whose graph lies entirely to the left of its asymptote.`, [S`$y=\log(-x)$`, S`$y=\log(3-x)$`, S`$y=-\log x$`, S`$y=\log_2(-2x-4)$`], [0, 1, 3], "A negative k gives a domain x < d."),
  mc(S`$y=\log_2x$ is stretched vertically by 3, reflected in the x-axis, then shifted left 4. Which equation results?`, S`$y=-3\log_2(x+4)$`, [S`$y=-3\log_2(x-4)$`, S`$y=3\log_2(-x+4)$`, S`$y=-\log_2(3x+4)$`], "a = −3, d = −4."),
  mc("The graph is y = a log₂ x + c through (1, 2) and (4, −2). Find a and c.", S`$a=-2,\ c=2$`, [S`$a=2,\ c=-2$`, S`$a=-4,\ c=2$`, S`$a=-2,\ c=-2$`], "x = 1 gives c = 2; x = 4 gives 2a + 2 = −2.", G([{ f: (x) => -2 * lg(2)(x) + 2, a: 0.01, color: "violet" }], 0, [{ x: 1, y: 2, label: "(1, 2)", color: "blue" }, { x: 4, y: -2, label: "(4, −2)", color: "blue" }], { xmin: -1, xmax: 9, ymin: -5, ymax: 6 })),
  mc("Which equation matches the graph (asymptote dashed)?", S`$y=\log_3(x-1)-1$`, [S`$y=\log_3(x+1)-1$`, S`$y=\log_3(x-1)+1$`, S`$y=-\log_3(x-1)-1$`], "Asymptote x = 1; it passes through (4, 0) since log₃ 3 − 1 = 0.", G([{ f: (x) => lg(3)(x - 1) - 1, a: 1.003, color: "violet" }], 1, [{ x: 4, y: 0, label: "(4, 0)", color: "blue" }, { x: 2, y: -1, label: "(2, −1)", color: "blue" }], { xmin: -1, xmax: 11, ymin: -4, ymax: 2 })),
  mc("The violet curve is y = log₂ x. The green curve is a transformation of it. Which?", S`$y=\log_2(x+3)-2$`, [S`$y=\log_2(x-3)-2$`, S`$y=\log_2(x+3)+2$`, S`$y=\log_2(x-2)-3$`], "Its asymptote is x = −3 and (1, 0) moved to (−2, −2).", planeDoc({ view: { xmin: -5, xmax: 9, ymin: -5, ymax: 4 }, vlines: [va(-3)], curves: [{ f: lg(2), a: 0.01, color: "violet" }, { f: (x) => lg(2)(x + 3) - 2, a: -2.995, color: "green" }], points: [{ x: -2, y: -2, label: "(−2, −2)", color: "green" }], step: { x: 1, y: 1 } })),
  mc("Using the graph of y = log(x − 2) + 1, estimate where y = 2.", "x = 12", ["x = 10", "x = 3", "x = 102"], "log(x − 2) = 1 ⇒ x − 2 = 10.", G([{ f: (x) => Math.log10(x - 2) + 1, a: 2.002, color: "violet" }], 2, [{ x: 12, y: 2, label: "(12, 2)", color: "amber" }], { xmin: -1, xmax: 15, ymin: -2, ymax: 3 })),
  num(S`For $y=\log_2(x+a)$, the x-intercept is $5$. Find $a$.`, -4, "5 + a = 1."),
];
