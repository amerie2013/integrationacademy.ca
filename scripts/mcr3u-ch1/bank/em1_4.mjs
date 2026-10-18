// 1.4 Domain and Range — 20 easy + 20 medium questions
import { mc, ms, num, tf } from "./kit.mjs";
import { planeDoc, P, graph } from "./fig.mjs";

const V6 = { xmin: -6, xmax: 6, ymin: -6, ymax: 6 };

export const E = [
  mc(String.raw`What is the domain of $f(x)=\sqrt{x-3}$?`, String.raw`$x\ge3$`, [String.raw`$x\ge-3$`, String.raw`$x>3$`, String.raw`$x\in\mathbb R$`], "x − 3 ≥ 0."),
  num(String.raw`Which x-value is excluded from the domain of $f(x)=\frac{1}{x+5}$?`, -5, "x + 5 = 0."),
  mc(String.raw`What is the range of $y=x^2+2$?`, String.raw`$y\ge2$`, [String.raw`$y\le2$`, String.raw`$y\ge0$`, String.raw`$y\in\mathbb R$`], "x² ≥ 0, so x² + 2 ≥ 2."),
  mc(String.raw`What is the range of $y=-x^2$?`, String.raw`$y\le0$`, [String.raw`$y\ge0$`, String.raw`$y\in\mathbb R$`, String.raw`$y<0$`], "Opens down from (0, 0)."),
  tf(String.raw`The domain of $f(x)=3x-7$ is all real numbers.`, true, "No roots or denominators."),
  num(String.raw`What is the smallest value in the range of $y=(x-4)^2+1$?`, 1, "Vertex (4, 1), opens up."),
  mc("What is the range of the function graphed?", String.raw`$y\le3$`, [String.raw`$y\ge3$`, String.raw`$y\le-2$`, String.raw`$y\in\mathbb R$`], "Vertex (−2, 3) is the highest point.", graph((x) => -0.5 * (x + 2) ** 2 + 3, V6, [P(-2, 3)])),
  mc("What is the domain of the function graphed?", String.raw`$x\ge1$`, [String.raw`$x\ge-2$`, String.raw`$x\le1$`, String.raw`$x\in\mathbb R$`], "It starts at (1, −2) and goes right.", graph((x) => Math.sqrt(x - 1) - 2, V6, [P(1, -2)], { a: 1 })),
  num(String.raw`How many elements are in the domain of $\{(2,5),(3,5),(7,1)\}$?`, 3, "2, 3, 7."),
  tf(String.raw`The range of $\frac1x$ includes 0.`, false, "1/x is never 0."),
  mc(String.raw`What is the domain of $f(x)=\frac{2}{x-8}$?`, String.raw`$x\ne8$`, [String.raw`$x\ne-8$`, String.raw`$x\ne2$`, String.raw`$x>8$`], "x − 8 ≠ 0."),
  num(String.raw`What is the largest value in the range of $y=-(x+1)^2+6$?`, 6, "Vertex (−1, 6), opens down."),
  mc(String.raw`What is the domain of $y=|x|+4$?`, String.raw`$x\in\mathbb R$`, [String.raw`$x\ge4$`, String.raw`$x\ge0$`, String.raw`$x\ne-4$`], "Any x has an absolute value."),
  mc(String.raw`What is the range of $y=|x|+4$?`, String.raw`$y\ge4$`, [String.raw`$y\ge0$`, String.raw`$y\in\mathbb R$`, String.raw`$y\le4$`], "|x| ≥ 0."),
  tf(String.raw`The domain of $y=\sqrt x-9$ is $x\ge9$.`, false, "The 9 is outside the root: the domain is x ≥ 0."),
  num(String.raw`The domain of $f(x)=\sqrt{x+11}$ is $x\ge a$. Find $a$.`, -11, "x + 11 ≥ 0."),
  mc("On a graph, a closed (filled) dot at an endpoint means…", "that point is included", ["that point is excluded", "the graph continues forever", "it is an asymptote"], "Closed: ≤ or ≥."),
  mc("A function counts the tickets sold. Its domain is best described as…", "whole numbers", ["all real numbers", "negative numbers", "numbers between 0 and 1"], "You cannot sell 2.5 tickets."),
  num(String.raw`A stone's height is $h(t)=-5t^2+20t$. At what time does the domain end (landing)?`, 4, "−5t(t − 4) = 0."),
  mc("What is the domain of the segment graphed?", String.raw`$-1\le x\le3$`, [String.raw`$2\le x\le4$`, String.raw`$-1\le x\le4$`, String.raw`$x\in\mathbb R$`], "Shadow on the x-axis from −1 to 3.", planeDoc({ view: V6, segs: [{ pts: [[-1, 2], [3, 4]] }], points: [P(-1, 2), P(3, 4)] })),
];

export const M = [
  mc(String.raw`What is the domain of $f(x)=\sqrt{12-3x}$?`, String.raw`$x\le4$`, [String.raw`$x\ge4$`, String.raw`$x\le-4$`, String.raw`$x\ge-4$`], "−3x ≥ −12 → x ≤ 4."),
  mc(String.raw`Domain and range of $y=\frac5{x-2}+1$?`, String.raw`$x\ne2$; $y\ne1$`, [String.raw`$x\ne-2$; $y\ne1$`, String.raw`$x\ne2$; $y\ne5$`, String.raw`$x\ne1$; $y\ne2$`], "Asymptotes x = 2 and y = 1."),
  num(String.raw`What is the maximum value of $y=-2(x+3)^2+7$?`, 7, "Vertex (−3, 7)."),
  mc(String.raw`What is the domain of $f(x)=\sqrt{2x+9}$?`, String.raw`$x\ge-4.5$`, [String.raw`$x\ge4.5$`, String.raw`$x\ge-9$`, String.raw`$x\le-4.5$`], "2x ≥ −9."),
  num(String.raw`Which x-value is excluded from the domain of $\frac{4}{3x-12}$?`, 4, "3x = 12."),
  mc("What is the range of this reciprocal function?", String.raw`$y\ne2$`, [String.raw`$y\ne-1$`, String.raw`$y>2$`, String.raw`$y\in\mathbb R$`], "Horizontal asymptote y = 2.", planeDoc({ view: V6, curves: [{ f: (x) => 1 / (x + 1) + 2, color: "red" }], vlines: [{ x: -1, color: "gray", dash: true }], lines: [{ m: 0, b: 2, color: "gray", dash: true }] })),
  ms("Which functions have domain all real numbers? Select all.", [String.raw`$x^2-5$`, String.raw`$\sqrt{x^2+1}$`, String.raw`$\frac{1}{x^2+4}$`, String.raw`$\sqrt x+1$`, String.raw`$\frac1{x-1}$`], [0, 1, 2], "x² + 1 > 0 and x² + 4 > 0 always."),
  num(String.raw`What is the largest value of $\frac{1}{x^2+4}$?`, 0.25, "Largest when x = 0.", null, 0.001),
  mc(String.raw`What is the range of $y=\sqrt{x-2}+5$?`, String.raw`$y\ge5$`, [String.raw`$y\ge2$`, String.raw`$y\ge0$`, String.raw`$y\le5$`], "The root is at least 0."),
  num(String.raw`A rock falls from 80 m: $h(t)=80-5t^2$. When does it land?`, 4, "5t² = 80."),
  num(String.raw`A rectangle with perimeter 30 has area $A(x)=x(15-x)$. What is the largest area?`, 56.25, "Vertex at x = 7.5.", null, 0.001),
  mc(String.raw`For $A(x)=x(15-x)$ (the rectangle above), what is the domain?`, String.raw`$0<x<15$`, [String.raw`$0\le x\le30$`, String.raw`$x\in\mathbb R$`, String.raw`$x>0$`], "Both sides must be positive."),
  tf(String.raw`On $-2\le x\le3$, the range of $y=x^2$ is $0\le y\le9$.`, true, "Minimum 0 at x = 0; maximum 9 at x = 3."),
  num(String.raw`On $0\le x\le5$, what is the largest value of $y=2x+1$?`, 11, "Increasing, so at x = 5."),
  mc("State the range of the graphed segment (closed dot at (−2, −3), open dot at (4, 1)).", String.raw`$-3\le y<1$`, [String.raw`$-3<y\le1$`, String.raw`$-2\le y<4$`, String.raw`$-3\le y\le1$`], "The open end is not included.", planeDoc({ view: V6, segs: [{ pts: [[-2, -3], [4, 1]] }], points: [P(-2, -3), { x: 4, y: 1, label: "(4, 1) open", color: "red" }] })),
  num(String.raw`How many integers are in the domain of $f(x)=\sqrt{5-x}+\sqrt x$?`, 6, "0 ≤ x ≤ 5."),
  mc(String.raw`What is the range of $y=|x-3|-2$?`, String.raw`$y\ge-2$`, [String.raw`$y\ge3$`, String.raw`$y\ge2$`, String.raw`$y\in\mathbb R$`], "Vertex (3, −2)."),
  num(String.raw`How many x-values are excluded from the domain of $\frac{1}{x^2-x-6}$?`, 2, "(x − 3)(x + 2) = 0."),
  mc(String.raw`What is the domain of $f(x)=\frac{\sqrt x}{x-9}$?`, String.raw`$x\ge0$, $x\ne9$`, [String.raw`$x\ne9$`, String.raw`$x\ge9$`, String.raw`$x>0$`], "Root needs x ≥ 0; denominator needs x ≠ 9."),
  tf("The domain of “length of a phone call in minutes” must be a discrete set.", false, "Time is continuous: 3.5 min is possible."),
];
