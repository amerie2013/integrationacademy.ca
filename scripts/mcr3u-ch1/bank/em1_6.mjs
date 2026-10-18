// 1.6 Translations and Vertical Stretches — 20 easy + 20 medium questions
import { mc, ms, num, tf, mx } from "./kit.mjs";
import { planeDoc, P, graph, PAR } from "./fig.mjs";

const V8 = { xmin: -8, xmax: 8, ymin: -8, ymax: 8 };

export const E = [
  mc(String.raw`How does $y=x^2-6$ compare with $y=x^2$?`, "translated 6 down", ["translated 6 up", "translated 6 left", "translated 6 right"], "c = −6."),
  mc(String.raw`How does $y=|x+5|$ compare with $y=|x|$?`, "translated 5 left", ["translated 5 right", "translated 5 up", "translated 5 down"], "x + 5 = x − (−5): d = −5."),
  mc(String.raw`How does $y=\sqrt{x-2}$ compare with $y=\sqrt x$?`, "translated 2 right", ["translated 2 left", "translated 2 up", "stretched by 2"], "d = 2."),
  mc(String.raw`How does $y=6x^2$ compare with $y=x^2$?`, "vertical stretch by 6", ["vertical compression by 6", "horizontal stretch by 6", "translated 6 up"], "Each y-value × 6."),
  mc(String.raw`How does $y=-\sqrt x$ compare with $y=\sqrt x$?`, "reflection in the x-axis", ["reflection in the y-axis", "translated down", "no change"], "a = −1."),
  num(String.raw`What is the y-coordinate of the vertex of $y=(x-3)^2+4$?`, 4, "Vertex (3, 4)."),
  num(String.raw`What is the x-coordinate of the vertex of $y=|x+7|-1$?`, -7, "Vertex (−7, −1)."),
  num(String.raw`$(2,4)$ is on $y=x^2$. What is the y-coordinate of its image on $y=x^2+9$?`, 13, "Up 9."),
  num(String.raw`$(4,2)$ is on $y=\sqrt x$. What is the y-coordinate of its image on $y=5\sqrt x$?`, 10, "× 5."),
  num(String.raw`The vertical asymptote of $y=\frac1{x-6}$ is $x=$?`, 6, "Denominator 0 at x = 6."),
  num(String.raw`The horizontal asymptote of $y=\frac1x+3$ is $y=$?`, 3, "Up 3."),
  tf(String.raw`$y=(x+2)^2$ is $y=x^2$ moved 2 units right.`, false, "x + 2: left 2."),
  tf(String.raw`$y=\tfrac14|x|$ is a vertical compression of $y=|x|$.`, true, "0 < a < 1."),
  mc("Which equation matches this parabola?", String.raw`$y=(x-2)^2-3$`, [String.raw`$y=(x+2)^2-3$`, String.raw`$y=(x-2)^2+3$`, String.raw`$y=(x+3)^2-2$`], "Vertex (2, −3).", graph((x) => (x - 2) ** 2 - 3, V8, [P(2, -3)])),
  mc("Which equation matches the graph?", String.raw`$y=\sqrt{x+3}+1$`, [String.raw`$y=\sqrt{x-3}+1$`, String.raw`$y=\sqrt{x+1}+3$`, String.raw`$y=\sqrt{x+3}-1$`], "Starting point (−3, 1).", graph((x) => Math.sqrt(x + 3) + 1, V8, [P(-3, 1)], { a: -3 })),
  mx(String.raw`Write the equation of $y=|x|$ translated 4 units up.`, "abs(x)+4", "c = 4."),
  mx(String.raw`Write the equation of $y=x^2$ stretched vertically by 3.`, "3*x^2", "a = 3."),
  num(String.raw`What is the maximum value of $y=-x^2+8$?`, 8, "Vertex (0, 8), opens down."),
  mc(String.raw`What is the range of $y=|x|-5$?`, String.raw`$y\ge-5$`, [String.raw`$y\ge5$`, String.raw`$y\le-5$`, String.raw`$y\in\mathbb R$`], "Vertex at height −5."),
  mc(String.raw`What is the domain of $y=\sqrt{x+4}$?`, String.raw`$x\ge-4$`, [String.raw`$x\ge4$`, String.raw`$x\le-4$`, String.raw`$x\in\mathbb R$`], "Starts at x = −4."),
];

export const M = [
  num(String.raw`$(9,3)$ is on $y=\sqrt x$. Find the y-coordinate of its image on $y=2\sqrt{x+1}-5$.`, 1, "2(3) − 5."),
  num(String.raw`$(9,3)$ is on $y=\sqrt x$. Find the x-coordinate of its image on $y=2\sqrt{x+1}-5$.`, 8, "9 − 1."),
  mc(String.raw`Describe $y=-3(x-1)^2+2$.`, "stretch by 3, reflect in the x-axis, 1 right, 2 up", ["stretch by 3, 1 left, 2 up", "compress by 1/3, reflect, 1 right, 2 up", "stretch by 3, reflect in the y-axis, 1 right, 2 down"], "a = −3, d = 1, c = 2."),
  mx(String.raw`Write: $y=\sqrt x$ reflected in the x-axis, then 3 left and 2 up.`, "-sqrt(x+3)+2", "a = −1, d = −3, c = 2."),
  mx(String.raw`Write: $y=x^2$ compressed vertically by $\tfrac12$, then 4 right.`, "0.5*(x-4)^2", "a = 1/2, d = 4."),
  num(String.raw`What is the y-intercept of $y=2|x-3|-1$?`, 5, "2(3) − 1."),
  mc(String.raw`State the domain and range of $y=-\sqrt{x-1}+4$.`, String.raw`$x\ge1$; $y\le4$`, [String.raw`$x\ge1$; $y\ge4$`, String.raw`$x\ge-1$; $y\le4$`, String.raw`$x\le1$; $y\le4$`], "Starts at (1, 4) and goes down."),
  mc(String.raw`The asymptotes of $y=\frac{3}{x+2}-4$ are…`, String.raw`$x=-2$, $y=-4$`, [String.raw`$x=2$, $y=-4$`, String.raw`$x=-2$, $y=3$`, String.raw`$x=3$, $y=-4$`], "d = −2, c = −4."),
  num("The parabola shown has vertex (−1, 2) and passes through (1, 10). Find a in y = a(x + 1)² + 2.", 2, "10 = 4a + 2.", graph((x) => 2 * (x + 1) ** 2 + 2, { xmin: -5, xmax: 4, ymin: -1, ymax: 12 }, [P(-1, 2), P(1, 10)], { step: { x: 1, y: 2 } })),
  mx("Write the equation of the V-shaped graph.", "-abs(x-2)+3", "Vertex (2, 3), opens down with slopes ±1.", graph((x) => -Math.abs(x - 2) + 3, V8, [P(2, 3)])),
  ms(String.raw`Which are true for $y=\tfrac12\sqrt{x-4}$? Select all.`, ["it starts at (4, 0)", "it passes through (8, 1)", "it is a vertical stretch by 2", "its range is y ≥ 0"], [0, 1, 3], "(4, 2) on √x → (8, 1); a = 1/2 is a compression."),
  num(String.raw`For which $c$ does $y=x^2+c$ pass through $(3,5)$?`, -4, "9 + c = 5."),
  num(String.raw`For which $d$ does $y=|x-d|$ have its vertex at $x=-6$?`, -6, "Vertex at x = d."),
  tf(String.raw`$y=-2x^2$ and $y=2x^2$ are reflections of each other in the x-axis.`, true, "a changes sign."),
  num(String.raw`The point $(-1,-1)$ on $y=\frac1x$ maps to which y-coordinate on $y=\frac4x+1$?`, -3, "4(−1) + 1."),
  mc(String.raw`Which has the narrowest graph?`, String.raw`$y=5x^2$`, [String.raw`$y=0.5x^2$`, String.raw`$y=x^2+5$`, String.raw`$y=(x-5)^2$`], "The largest |a|."),
  num(String.raw`What is the minimum value of $y=3|x+4|-7$?`, -7, "Vertex (−4, −7)."),
  mc("Which graph is y = 1/(x − 1) + 2?", "the red one", ["the blue one", "neither", "both"], "Red asymptotes: x = 1, y = 2. Blue: x = −1, y = −2.", planeDoc({ view: V8, curves: [{ f: (x) => 1 / (x - 1) + 2, color: "red" }, { f: (x) => 1 / (x + 1) - 2, color: "blue" }] })),
  num(String.raw`How many x-intercepts does $y=-(x+3)^2+4$ have?`, 2, "Opens down from height 4."),
  num(String.raw`Find the larger x-intercept of $y=(x-1)^2-9$.`, 4, "x − 1 = ±3."),
];
