// 1.8 Combining Transformations — 20 easy + 20 medium questions
import { mc, ms, num, tf, mx } from "./kit.mjs";
import { planeDoc, P, graph } from "./fig.mjs";

const V8 = { xmin: -8, xmax: 8, ymin: -8, ymax: 8 };

export const E = [
  num(String.raw`In $y=5f(2(x-3))+1$, what is $k$?`, 2, "The factor multiplying (x − d)."),
  num(String.raw`In $y=5f(2(x-3))+1$, what is $d$?`, 3, "x − 3."),
  num(String.raw`In $y=-f(x+4)-6$, what is $c$?`, -6, "Added outside."),
  num(String.raw`In $y=-f(x+4)-6$, what is $d$?`, -4, "x + 4 = x − (−4)."),
  mc("In which order are transformations applied?", "stretches/compressions and reflections, then translations", ["translations, then stretches", "horizontal before vertical, always", "the order never matters"], "Multiply first, add last."),
  num(String.raw`Under $y=2f(x)+3$, what is the y-coordinate of the image of $(1,4)$?`, 11, "2(4) + 3."),
  num(String.raw`Under $y=f(x-5)$, what is the x-coordinate of the image of $(2,7)$?`, 7, "2 + 5."),
  num(String.raw`Under $y=f(3x)$, what is the x-coordinate of the image of $(9,1)$?`, 3, "9 ÷ 3."),
  num(String.raw`Write $f(2x-8)$ as $f(2(x-d))$. Find $d$.`, 4, "2x − 8 = 2(x − 4)."),
  num(String.raw`Write $f(3x+6)$ as $f(3(x-d))$. Find $d$.`, -2, "3x + 6 = 3(x + 2)."),
  mc(String.raw`The mapping rule for $y=af(k(x-d))+c$ is…`, String.raw`$(x,y)\to\left(\frac xk+d,\ ay+c\right)$`, [String.raw`$(x,y)\to(kx+d,\ ay+c)$`, String.raw`$(x,y)\to\left(\frac xk-d,\ ay-c\right)$`, String.raw`$(x,y)\to(x+d,\ y+c)$`], "Divide by k, add d; multiply by a, add c."),
  tf(String.raw`In $y=f(2x-6)$ the graph moves 6 units right.`, false, "f(2(x − 3)): 3 right."),
  tf(String.raw`In $y=-2f(x)$ the graph is reflected in the x-axis and stretched vertically by 2.`, true, "a = −2."),
  mc(String.raw`What is the vertex of $y=3(x+1)^2-4$?`, String.raw`$(-1,-4)$`, [String.raw`$(1,-4)$`, String.raw`$(-1,4)$`, String.raw`$(3,-4)$`], "d = −1, c = −4."),
  mc(String.raw`Where does $y=\sqrt{2(x-1)}+5$ start?`, String.raw`$(1,5)$`, [String.raw`$(2,5)$`, String.raw`$(-1,5)$`, String.raw`$(1,-5)$`], "(0, 0) → (d, c)."),
  mc("Which equation matches the V-shaped graph?", String.raw`$y=2|x-1|-3$`, [String.raw`$y=2|x+1|-3$`, String.raw`$y=|x-1|-3$`, String.raw`$y=-2|x-1|-3$`], "Vertex (1, −3); slopes ±2.", graph((x) => 2 * Math.abs(x - 1) - 3, V8, [P(1, -3), P(2, -1)])),
  mc("Which equation matches the curve?", String.raw`$y=-\sqrt{x+2}+1$`, [String.raw`$y=\sqrt{x+2}+1$`, String.raw`$y=-\sqrt{x-2}+1$`, String.raw`$y=-\sqrt{x+1}+2$`], "Starts at (−2, 1) and goes down.", graph((x) => -Math.sqrt(x + 2) + 1, V8, [P(-2, 1)], { a: -2 })),
  mx(String.raw`Write: $y=x^2$ stretched vertically by 2, then 3 left and 1 down.`, "2*(x+3)^2-1", "a = 2, d = −3, c = −1."),
  num(String.raw`What is the range minimum of $y=4|x+2|+3$?`, 3, "Vertex (−2, 3)."),
  mc(String.raw`What is the domain of $y=\sqrt{-(x-4)}$?`, String.raw`$x\le4$`, [String.raw`$x\ge4$`, String.raw`$x\ge-4$`, String.raw`$x\in\mathbb R$`], "−(x − 4) ≥ 0."),
];

export const M = [
  num(String.raw`Under $y=-3f(2(x+1))+4$, find the x-coordinate of the image of $(8,2)$.`, 3, "8 ÷ 2 − 1."),
  num(String.raw`Under $y=-3f(2(x+1))+4$, find the y-coordinate of the image of $(6,5)$.`, -11, "−3(5) + 4."),
  mc(String.raw`Describe $y=\tfrac12f(-(x-3))+2$.`, String.raw`compress vertically by ½, reflect in the y-axis, 3 right, 2 up`, [String.raw`stretch vertically by 2, reflect in the x-axis, 3 left, 2 up`, String.raw`compress by ½, reflect in the x-axis, 3 right, 2 up`, String.raw`compress by ½, reflect in the y-axis, 3 left, 2 down`], "a = ½, k = −1, d = 3, c = 2."),
  mx(String.raw`Write: $y=\sqrt x$ compressed horizontally by $\tfrac14$, reflected in the x-axis, 2 right and 5 up.`, "-sqrt(4*(x-2))+5", "k = 4, a = −1, d = 2, c = 5."),
  mc(String.raw`State the domain and range of $y=3\sqrt{-(x+1)}-2$.`, String.raw`$x\le-1$; $y\ge-2$`, [String.raw`$x\ge-1$; $y\ge-2$`, String.raw`$x\le-1$; $y\le-2$`, String.raw`$x\le1$; $y\ge2$`], "k < 0 sends the root left; a > 0 keeps it above c."),
  num(String.raw`$y=(3x-12)^2+1$. What is the x-coordinate of the vertex?`, 4, "3(x − 4)."),
  num(String.raw`For $y=-2\left(\tfrac12(x-2)\right)^2+8$, find the larger x-intercept.`, 6, "−½(x − 2)² + 8 = 0 → (x − 2)² = 16."),
  num(String.raw`The point $(1,1)$ on $y=\frac1x$ maps to which x-coordinate under $y=\frac{3}{2(x-1)}+4$?`, 1.5, "1 ÷ 2 + 1.", null, 0.001),
  mc(String.raw`What are the asymptotes of $y=\frac{-2}{x+5}+1$?`, String.raw`$x=-5$, $y=1$`, [String.raw`$x=5$, $y=1$`, String.raw`$x=-5$, $y=-2$`, String.raw`$x=1$, $y=-5$`], "d = −5, c = 1."),
  ms(String.raw`Which are equivalent to $y=(4x+8)^2$? Select all.`, [String.raw`$y=16(x+2)^2$`, String.raw`$y=(4(x+2))^2$`, String.raw`$y=4(x+2)^2$`, String.raw`$y=(x+8)^2$`], [0, 1], "(4(x + 2))² = 16(x + 2)²."),
  num("The red curve is y = a√(x − d) + c. It starts at (−3, 4) and passes through (1, 0). Find a.", -2, "0 = a√4 + 4.", graph((x) => -2 * Math.sqrt(x + 3) + 4, V8, [P(-3, 4), P(1, 0)], { a: -3 })),
  num(String.raw`$f$ has domain $0\le x\le6$. Find the right endpoint of the domain of $y=f(\tfrac13(x+2))$.`, 16, "6 ÷ ⅓ − 2."),
  num(String.raw`$f$ has range $-4\le y\le2$. Find the largest value in the range of $y=-\tfrac12f(x)+1$.`, 3, "−½(−4) + 1."),
  tf(String.raw`$y=2f(x)+6$ and $y=2(f(x)+3)$ give the same graph.`, true, "2(f(x) + 3) = 2f(x) + 6."),
  tf(String.raw`$y=f(2x)+1$ and $y=f(2x+1)$ give the same graph.`, false, "The first moves up 1; the second moves left ½."),
  mc("The grey curve is y = |x|. Which equation gives the amber curve?", String.raw`$y=-\tfrac12|x+2|+3$`, [String.raw`$y=-2|x+2|+3$`, String.raw`$y=\tfrac12|x+2|+3$`, String.raw`$y=-\tfrac12|x-2|+3$`], "Vertex (−2, 3); down ½ per unit.", planeDoc({ view: V8, curves: [{ f: (x) => Math.abs(x), color: "gray" }, { f: (x) => -0.5 * Math.abs(x + 2) + 3, color: "amber" }], points: [P(-2, 3), P(2, 1)] })),
  num(String.raw`$y=a(x-1)^2-5$ passes through $(3,7)$. Find $a$.`, 3, "4a − 5 = 7."),
  num(String.raw`Where does $y=-\sqrt{x+9}+2$ cross the x-axis?`, -5, "√(x + 9) = 2."),
  mc(String.raw`$y=f(x)$ has a minimum at $(2,-1)$. Where is the maximum of $y=-2f(x+3)+4$?`, String.raw`$(-1,6)$`, [String.raw`$(5,6)$`, String.raw`$(-1,2)$`, String.raw`$(-1,-6)$`], "x: 2 − 3; y: −2(−1) + 4; a < 0 turns the minimum into a maximum."),
  num(String.raw`For $y=2\sqrt{3x-6}+1$, what is the smallest x in the domain?`, 2, "3x − 6 ≥ 0."),
];
