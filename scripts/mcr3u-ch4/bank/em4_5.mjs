// 4.5 Transformations of Exponential Functions — 20 easy + 20 medium questions
import { mc, ms, num, tf } from "./kit.mjs";
import { P, planeDoc } from "./fig.mjs";

const V = { xmin: -5, xmax: 5, ymin: -6, ymax: 10 };
const g = (f, c, pts) => planeDoc({ view: V, curves: [{ f, color: "violet" }], lines: [{ m: 0, b: c, color: "green", dash: true }], points: pts, step: { x: 1, y: 1 } });

export const E = [
  num(String.raw`What is the asymptote of $y=2^x+6$? Enter its y-value.`, 6, "c = 6."),
  num(String.raw`What is the asymptote of $y=3^{x-2}$? Enter its y-value.`, 0, "A horizontal shift does not move it."),
  mc(String.raw`How does $y=2^{x+5}$ compare with $y=2^x$?`, "5 units left", ["5 units right", "5 units up", "5 units down"], "x + 5."),
  num(String.raw`Find the y-intercept of $y=3^x-4$.`, -3, "1 − 4."),
  mc(String.raw`What is the range of $y=2^x-1$?`, String.raw`$y>-1$`, [String.raw`$y>0$`, String.raw`$y<-1$`, String.raw`$y\ge-1$`], "Asymptote y = −1, above it."),
  mc(String.raw`What is the range of $y=-3^x$?`, String.raw`$y<0$`, [String.raw`$y>0$`, String.raw`$y>-3$`, String.raw`$y\in\mathbb R$`], "Reflected below y = 0."),
  tf(String.raw`$y=2^{x-3}$ has asymptote $y=-3$.`, false, "Its asymptote is y = 0."),
  num(String.raw`The point $(0,1)$ on $y=2^x$ maps to which x-coordinate on $y=2^{x-4}+1$?`, 4, "Right 4."),
  num(String.raw`The point $(1,2)$ on $y=2^x$ maps to which y-coordinate on $y=5(2)^x$?`, 10, "× 5."),
  mc(String.raw`Which reflects $y=2^x$ in the x-axis?`, String.raw`$y=-2^x$`, [String.raw`$y=2^{-x}$`, String.raw`$y=(-2)^x$`, String.raw`$y=\frac12\cdot2^x$`], "Negate y."),
  mc(String.raw`Which reflects $y=2^x$ in the y-axis?`, String.raw`$y=2^{-x}$`, [String.raw`$y=-2^x$`, String.raw`$y=-2^{-x}$`, String.raw`$y=2^x-1$`], "Negate x."),
  num(String.raw`Find the y-intercept of $y=4(3)^x+1$.`, 5, "4 + 1."),
  tf("A vertical stretch moves the asymptote of y = bˣ.", false, "Only a vertical translation does."),
  num(String.raw`What is the asymptote of $y=-2(5)^x-3$? Enter its y-value.`, -3, "c = −3."),
  mc(String.raw`Which equals $3^{2x}$?`, String.raw`$9^x$`, [String.raw`$6^x$`, String.raw`$3^{x+2}$`, String.raw`$9^{2x}$`], "(3²)ˣ."),
  num(String.raw`Find the y-intercept of $y=2^{x+3}$.`, 8, "2³."),
  mc(String.raw`What is the domain of $y=2^{x-1}+7$?`, "all real numbers", [String.raw`$x>1$`, String.raw`$x>7$`, String.raw`$x\ge0$`], "Exponentials accept every x."),
  num(String.raw`Find the x-intercept of $y=2^x-8$.`, 3, "2³ = 8."),
  num("Read the asymptote of the graph (enter its y-value).", -3, "The dashed line y = −3.", g((x) => 2 ** x - 3, -3, [P(0, -2)])),
  num("Read the y-intercept of the graph.", 3, "y = 2^(x+1) + 1 at x = 0.", g((x) => 2 ** (x + 1) + 1, 1, [P(0, 3)])),
];

export const M = [
  num(String.raw`Find the y-intercept of $y=3(2)^{x-1}+4$.`, 5.5, "3 × ½ + 4.", null, 1e-9),
  mc(String.raw`What is the range of $y=-2(3)^x+5$?`, String.raw`$y<5$`, [String.raw`$y>5$`, String.raw`$y<-2$`, String.raw`$y>3$`], "a < 0: below y = 5."),
  num(String.raw`The point $(1,3)$ on $y=3^x$ maps to which y-coordinate on $y=2(3)^{x+2}-1$?`, 5, "2(3) − 1."),
  num(String.raw`The point $(2,4)$ on $y=2^x$ maps to which x-coordinate on $y=2^{x/2}$?`, 4, "x ÷ ½."),
  num(String.raw`Find the x-intercept of $y=3^{x+1}-27$.`, 2, "3^(x+1) = 3³."),
  num(String.raw`$y=a(2)^x+1$ passes through $(2,13)$. Find $a$.`, 3, "4a + 1 = 13."),
  num(String.raw`$y=3^x+c$ passes through $(2,4)$. Find $c$.`, -5, "9 + c = 4."),
  mc("Which is y = 2ˣ translated 3 right and 1 down?", String.raw`$y=2^{x-3}-1$`, [String.raw`$y=2^{x+3}-1$`, String.raw`$y=2^{x-1}-3$`, String.raw`$y=2^{x-3}+1$`], "d = 3, c = −1."),
  num(String.raw`Evaluate $y=\left(\tfrac12\right)^{x-2}+3$ at $x=0$.`, 7, "4 + 3."),
  ms(String.raw`Which are true for $y=-2^x+4$? Select all.`, ["asymptote y = 4", "range y < 4", "y-intercept 3", "x-intercept 2", "increasing"], [0, 1, 2, 3], "It is decreasing."),
  tf(String.raw`$y=4\cdot2^x$ is the same graph as $y=2^{x+2}$.`, true, "4 = 2²."),
  num(String.raw`Find the x-intercept of $y=-2^x+16$.`, 4, "2ˣ = 16."),
  mc("Which has asymptote y = −2 and y-intercept 1?", String.raw`$y=3(2)^x-2$`, [String.raw`$y=2^x-2$`, String.raw`$y=3(2)^x+1$`, String.raw`$y=-3(2)^x-2$`], "a − 2 = 1."),
  num(String.raw`Evaluate $y=5^{x-1}$ at $x=3$.`, 25, "5²."),
  num("The graph is y = a(2)ˣ + c with asymptote y = 1 and y-intercept 4. Find a.", 3, "a + 1 = 4.", g((x) => 3 * 2 ** x + 1, 1, [P(0, 4)])),
  num("The graph is y = 2^(x − d) and passes through (3, 1). Find d.", 3, "2^(3−d) = 1.", g((x) => 2 ** (x - 3), 0, [P(3, 1)])),
  num(String.raw`$y=2^{kx}$ passes through $(1,8)$. Find $k$.`, 3, "2^k = 8."),
  num(String.raw`Evaluate $y=9^{x/2}$ at $x=3$.`, 27, "3³."),
  tf(String.raw`$y=2^{x+1}$ and $y=2\cdot2^x$ have the same graph.`, true, "2^(x+1) = 2·2ˣ."),
  num(String.raw`What is the asymptote of $y=3-2^x$? Enter its y-value.`, 3, "−2ˣ + 3."),
];
