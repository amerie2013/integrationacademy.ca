// 1.7 Horizontal Stretches, Compressions and Reflections — 20 easy + 20 medium questions
import { mc, ms, num, tf, mx } from "./kit.mjs";
import { planeDoc, P, PAR } from "./fig.mjs";

export const E = [
  mc(String.raw`How does $y=\sqrt{5x}$ compare with $y=\sqrt x$?`, String.raw`horizontal compression by a factor of $\tfrac15$`, ["horizontal stretch by a factor of 5", "vertical compression by 5", "translation 5 right"], "k = 5 > 1 compresses."),
  mc(String.raw`How does $y=|\tfrac13x|$ compare with $y=|x|$?`, "horizontal stretch by a factor of 3", [String.raw`horizontal compression by $\tfrac13$`, "vertical stretch by 3", "translation 3 left"], "k = 1/3 stretches by 3."),
  mc(String.raw`How does $y=\sqrt{-x}$ compare with $y=\sqrt x$?`, "reflection in the y-axis", ["reflection in the x-axis", "translation left", "no change"], "k = −1."),
  num(String.raw`$(8,2)$ is on $y=f(x)$. What is the x-coordinate of its image on $y=f(2x)$?`, 4, "8 ÷ 2."),
  num(String.raw`$(3,7)$ is on $y=f(x)$. What is the x-coordinate of its image on $y=f(\tfrac12x)$?`, 6, "3 ÷ ½."),
  num(String.raw`$(-4,1)$ is on $y=f(x)$. What is the x-coordinate of its image on $y=f(-x)$?`, 4, "Sign changes."),
  num(String.raw`$(6,-5)$ is on $y=f(x)$. What is the y-coordinate of its image on $y=f(3x)$?`, -5, "Horizontal changes keep y."),
  tf(String.raw`$y=f(4x)$ stretches the graph horizontally by a factor of 4.`, false, "It compresses by ¼."),
  tf(String.raw`$y=f(-x)$ reflects the graph in the y-axis.`, true, "(x, y) → (−x, y)."),
  tf(String.raw`$y=-f(x)$ reflects the graph in the y-axis.`, false, "That is the x-axis."),
  mx(String.raw`Simplify $(2x)^2$.`, "4*x^2", "2² = 4."),
  mc(String.raw`Which is the same graph as $y=|-x|$?`, String.raw`$y=|x|$`, [String.raw`$y=-|x|$`, String.raw`$y=|x|-1$`, String.raw`$y=x$`], "|x| is symmetric in the y-axis."),
  mc(String.raw`What is the domain of $y=\sqrt{-x}$?`, String.raw`$x\le0$`, [String.raw`$x\ge0$`, String.raw`$x\in\mathbb R$`, String.raw`$x<0$`], "−x ≥ 0."),
  mc("Which graph shows y = √(−x)?", "the red one", ["the blue one", "the green one", "none"], "Red is the mirror image of √x in the y-axis.", planeDoc({ view: { xmin: -6, xmax: 6, ymin: -4, ymax: 4 }, curves: [{ f: (x) => Math.sqrt(-x), b: 0, color: "red" }, { f: (x) => -Math.sqrt(x), a: 0, color: "blue" }, { f: (x) => Math.sqrt(x), a: 0, color: "green" }] })),
  num(String.raw`$(9,3)$ on $y=\sqrt x$ maps to which x-coordinate on $y=\sqrt{3x}$?`, 3, "9 ÷ 3; check √9 = 3."),
  mc(String.raw`In $y=f(kx)$, which value of $k$ gives a horizontal stretch?`, String.raw`$k=0.25$`, [String.raw`$k=4$`, String.raw`$k=-4$`, String.raw`$k=1$`], "0 < k < 1 stretches."),
  num(String.raw`$y=f(kx)$ maps $(10,1)$ to $(5,1)$. Find $k$.`, 2, "10 ÷ k = 5."),
  tf(String.raw`A horizontal compression changes the range of a function.`, false, "Only x-values change."),
  mc(String.raw`$f$ has a zero at $x=6$. Where is the zero of $y=f(3x)$?`, String.raw`$x=2$`, [String.raw`$x=18$`, String.raw`$x=6$`, String.raw`$x=-2$`], "6 ÷ 3."),
  mc("Which graph is y = (2x)²? (the grey graph is y = x²)", "the blue one", ["the red one", "the grey one", "neither"], "Narrower: (1, 4) instead of (2, 4).", planeDoc({ view: { xmin: -4, xmax: 4, ymin: -1, ymax: 6 }, curves: [{ f: (x) => x * x, color: "gray" }, { f: (x) => 4 * x * x, color: "blue" }, { f: (x) => 0.25 * x * x, color: "red" }] })),
];

export const M = [
  mc(String.raw`Describe $y=\sqrt{-\tfrac12x}$.`, "reflection in the y-axis and horizontal stretch by 2", ["reflection in the x-axis and stretch by 2", "reflection in the y-axis and compression by ½", "translation 2 left"], "k = −½."),
  num(String.raw`$(4,2)$ on $y=\sqrt x$ maps to which x-coordinate on $y=\sqrt{-2x}$?`, -2, "4 ÷ (−2)."),
  ms(String.raw`$f$ contains $(-6,2),(0,4),(3,-1)$. Which points are on $y=f(3x)$? Select all.`, [String.raw`$(-2,2)$`, String.raw`$(0,4)$`, String.raw`$(1,-1)$`, String.raw`$(9,-1)$`], [0, 1, 2], "Divide x by 3."),
  mx(String.raw`Simplify $\left(\tfrac12x\right)^2$.`, "x^2/4", "¼x²."),
  tf(String.raw`For $f(x)=\sqrt x$, $f(9x)=3f(x)$.`, true, "√(9x) = 3√x."),
  num(String.raw`$f$ has domain $-2\le x\le10$. What is the right endpoint of the domain of $y=f(2x)$?`, 5, "10 ÷ 2."),
  num(String.raw`$f$ has domain $-2\le x\le10$. What is the left endpoint of the domain of $y=f(-x)$?`, -10, "Endpoints become 2 and −10."),
  mc(String.raw`Which is equivalent to $y=\frac1{3x}$?`, String.raw`$y=\tfrac13\cdot\frac1x$`, [String.raw`$y=3\cdot\frac1x$`, String.raw`$y=\frac1x+3$`, String.raw`$y=\frac1{x+3}$`], "1/(3x) = (1/3)(1/x)."),
  num(String.raw`$f$ has zeros $-9$ and $3$. What is the larger zero of $y=f(-3x)$?`, 3, "−9 ÷ −3 = 3; 3 ÷ −3 = −1."),
  mc("The grey curve is y = f(x). Which equation gives the red curve?", String.raw`$y=f(\tfrac12x)$`, [String.raw`$y=f(2x)$`, String.raw`$y=2f(x)$`, String.raw`$y=\tfrac12f(x)$`], "Red reaches each height at twice the x-value.", planeDoc({ view: { xmin: -1, xmax: 10, ymin: -1, ymax: 4 }, curves: [{ f: (x) => Math.sqrt(x), a: 0, color: "gray" }, { f: (x) => Math.sqrt(x / 2), a: 0, color: "red" }], points: [P(4, 2, null, "gray"), P(8, 2, null, "red")] })),
  num(String.raw`$y=\sqrt{kx}$ passes through $(2,6)$. Find $k$.`, 18, "2k = 36."),
  mc(String.raw`The vertex of $f$ is $(4,-3)$. Where is the vertex of $y=f(-2x)$?`, String.raw`$(-2,-3)$`, [String.raw`$(-8,-3)$`, String.raw`$(2,-3)$`, String.raw`$(4,3)$`], "4 ÷ (−2)."),
  tf(String.raw`$y=f(kx)$ never moves the y-intercept.`, true, "At x = 0, f(k·0) = f(0)."),
  num(String.raw`The point $(\tfrac12,2)$ on $y=\frac1x$ maps to which x-coordinate on $y=\frac1{4x}$?`, 0.125, "½ ÷ 4.", null, 0.0001),
  mc(String.raw`Which pair of graphs is identical?`, String.raw`$y=|5x|$ and $y=5|x|$`, [String.raw`$y=\sqrt{5x}$ and $y=5\sqrt x$`, String.raw`$y=(5x)^2$ and $y=5x^2$`, String.raw`$y=\frac1{5x}$ and $y=\frac5x$`], "|5x| = |5||x|."),
  num(String.raw`$(-3,8)$ is on $y=f(x)$. Find the x-coordinate of its image on $y=f(-\tfrac13x)$.`, 9, "−3 ÷ (−⅓)."),
  mc("Which graph is y = √(4x)? (grey: y = √x)", "the blue one", ["the red one", "the grey one", "neither"], "√(4x) = 2√x: through (1, 2).", planeDoc({ view: { xmin: -1, xmax: 9, ymin: -1, ymax: 6 }, curves: [{ f: (x) => Math.sqrt(x), a: 0, color: "gray" }, { f: (x) => 2 * Math.sqrt(x), a: 0, color: "blue" }, { f: (x) => Math.sqrt(x / 4), a: 0, color: "red" }], points: [P(1, 2)] })),
  num(String.raw`$f(x)=x^2-4x$. What is the x-coordinate of the vertex of $y=f(2x)$?`, 1, "Vertex of f at x = 2 → 2 ÷ 2."),
  mc(String.raw`$f$ has range $-1\le y\le6$. What is the range of $y=f(5x)$?`, String.raw`$-1\le y\le6$`, [String.raw`$-5\le y\le30$`, String.raw`$-\tfrac15\le y\le\tfrac65$`, String.raw`$y\in\mathbb R$`], "Horizontal changes keep the range."),
  num(String.raw`$y=f(kx)$ maps the zero $x=12$ to $x=-3$. Find $k$.`, -4, "12 ÷ k = −3."),
];
