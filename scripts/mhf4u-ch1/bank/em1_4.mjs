// 1.4 Transformations of Power Functions — 20 easy + 20 medium questions
import { mc, ms, num, tf, fill } from "./kit.mjs";
import { graph, planeDoc, P } from "./fig.mjs";

export const E = [
  mc(String.raw`How is $y=(x-5)^4$ related to $y=x^4$?`, "translated 5 right", ["translated 5 left", "translated 5 up", "translated 5 down"], "(x − d) with d = 5."),
  mc(String.raw`How is $y=x^3+7$ related to $y=x^3$?`, "translated 7 up", ["translated 7 right", "translated 7 left", "stretched by 7"], "c = 7."),
  mc(String.raw`How is $y=-x^4$ related to $y=x^4$?`, "reflected in the x-axis", ["reflected in the y-axis", "translated down 1", "compressed by 1"], "a = −1."),
  num(String.raw`Give the x-coordinate of the vertex of $y=2(x+3)^4-1$.`, -3, "d = −3."),
  num(String.raw`Give the y-coordinate of the vertex of $y=2(x+3)^4-1$.`, -1, "c = −1."),
  tf(String.raw`$y=4x^3$ is a vertical stretch of $y=x^3$ by a factor of 4.`, true, "a = 4."),
  mc(String.raw`How is $y=(2x)^4$ related to $y=x^4$?`, String.raw`horizontal compression by a factor of $\tfrac12$`, ["horizontal stretch by a factor of 2", "vertical compression by a factor of ½", "translation 2 right"], "k = 2 → factor 1/k."),
  num(String.raw`The point $(1,1)$ on $y=x^4$ maps to which y-coordinate on $y=x^4+5$?`, 6, "Add 5 to y."),
  num(String.raw`The point $(2,8)$ on $y=x^3$ maps to which x-coordinate on $y=(x-4)^3$?`, 6, "Add 4 to x."),
  mc(String.raw`Range of $y=(x+1)^4+3$:`, String.raw`$y\ge3$`, [String.raw`$y\ge-1$`, String.raw`$y\le3$`, String.raw`$y\in\mathbb R$`], "Vertex (−1, 3), opens up."),
  mc(String.raw`Range of $y=-(x-2)^6+5$:`, String.raw`$y\le5$`, [String.raw`$y\ge5$`, String.raw`$y\le2$`, String.raw`$y\in\mathbb R$`], "Opens down from (2, 5)."),
  tf(String.raw`$y=(x+2)^3$ is $y=x^3$ translated 2 right.`, false, "It is 2 left."),
  mc("Which equation matches the graph?", String.raw`$y=(x-1)^3+2$`, [String.raw`$y=(x+1)^3+2$`, String.raw`$y=(x-1)^3-2$`, String.raw`$y=-(x-1)^3+2$`], "Point of symmetry (1, 2), rising.", graph((x) => (x - 1) ** 3 + 2, { xmin: -1, xmax: 3, ymin: -3, ymax: 6 }, [P(1, 2)])),
  mc("Which equation has this graph?", String.raw`$y=-(x+1)^4+3$`, [String.raw`$y=(x+1)^4+3$`, String.raw`$y=-(x-1)^4+3$`, String.raw`$y=-(x+1)^4-3$`], "Vertex (−1, 3), opens down.", graph((x) => -((x + 1) ** 4) + 3, { xmin: -3, xmax: 1, ymin: -3, ymax: 4 }, [P(-1, 3)])),
  num(String.raw`$y=x^4$ is stretched vertically by a factor of 6. What is the new leading coefficient?`, 6, "y = 6x⁴."),
  fill(String.raw`$y=(-x)^4$ is the same function as $y=$ ___.`, ["x^4", "x⁴"], "(−x)⁴ = x⁴."),
  num(String.raw`What is the x-coordinate of the point of symmetry of $y=-3(x-2)^3+1$?`, 2, "(d, c) = (2, 1)."),
  tf(String.raw`The domain of $y=5(x-3)^4-2$ is all real numbers.`, true, "Any x can be used."),
  mc(String.raw`Which equation is $y=x^3$ translated 3 left?`, String.raw`$y=(x+3)^3$`, [String.raw`$y=(x-3)^3$`, String.raw`$y=x^3-3$`, String.raw`$y=x^3+3$`], "Replace x with x + 3."),
  num(String.raw`Evaluate $y=2(x-1)^3+4$ at $x=3$.`, 20, "2(8) + 4."),
];

export const M = [
  num(String.raw`$(2,16)$ on $y=x^4$ maps to which y-coordinate on $y=3(x+1)^4-2$?`, 46, "3(16) − 2."),
  num(String.raw`$(2,16)$ on $y=x^4$ maps to which x-coordinate on $y=\left(\tfrac12x\right)^4$?`, 4, "Divide x by k = ½."),
  mc(String.raw`Describe $y=-\tfrac12(x+4)^3$.`, "vertical compression by ½, reflection in the x-axis, 4 left", ["vertical stretch by 2, 4 right", "reflection in the y-axis, 4 left", "vertical compression by ½, 4 right"], "a = −½, d = −4."),
  mc(String.raw`$y=x^4$ is reflected in the x-axis, then translated 3 right and 2 up. Equation:`, String.raw`$y=-(x-3)^4+2$`, [String.raw`$y=-(x+3)^4+2$`, String.raw`$y=(x-3)^4-2$`, String.raw`$y=-(x-2)^4+3$`], "a = −1, d = 3, c = 2."),
  num(String.raw`$y=a(x+1)^4-3$ passes through $(1,13)$. Find $a$.`, 1, "16a − 3 = 13."),
  num(String.raw`$y=2(x-2)^3+c$ passes through $(3,7)$. Find $c$.`, 5, "2 + c = 7."),
  mc(String.raw`Describe $y=(3x-9)^4$.`, String.raw`horizontal compression by $\tfrac13$, then 3 right`, ["horizontal compression by ⅓, then 9 right", "horizontal stretch by 3, then 3 right", "vertical stretch by 3, then 9 right"], "(3(x − 3))⁴."),
  num(String.raw`The point $(1,1)$ on $y=x^4$ maps to which x-coordinate on $y=(3x-9)^4$? (2 decimals)`, 3.3333, "1/3 + 3.", null, 0.006),
  mc("The quartic has vertex (2, −3) and passes through (3, −1). Its equation is:", String.raw`$y=2(x-2)^4-3$`, [String.raw`$y=(x-2)^4-3$`, String.raw`$y=2(x+2)^4-3$`, String.raw`$y=2(x-2)^4+3$`], "a(1)⁴ − 3 = −1 → a = 2.", graph((x) => 2 * (x - 2) ** 4 - 3, { xmin: 0, xmax: 4, ymin: -4, ymax: 6 }, [P(2, -3), P(3, -1)])),
  tf(String.raw`$y=(-x)^3$ is the same function as $y=-x^3$.`, true, "(−x)³ = −x³."),
  ms(String.raw`Which have range $y\ge-2$? Select all.`, [String.raw`$y=3(x+1)^4-2$`, String.raw`$y=-(x-1)^4-2$`, String.raw`$y=(x-5)^6-2$`, String.raw`$y=(x+2)^3-2$`], [0, 2], "Even power, a > 0, c = −2."),
  num(String.raw`How many x-intercepts does $y=(x-1)^4-16$ have?`, 2, "(x − 1)⁴ = 16 → x − 1 = ±2."),
  num(String.raw`Find the positive x-intercept of $y=(x-1)^4-16$.`, 3, "x − 1 = 2."),
  num(String.raw`Find the x-intercept of $y=(x+2)^3-8$.`, 0, "x + 2 = 2."),
  mc("Which equation has the graph shown?", String.raw`$y=-(x+2)^3+1$`, [String.raw`$y=(x+2)^3+1$`, String.raw`$y=-(x-2)^3+1$`, String.raw`$y=-(x+2)^3-1$`], "Point of symmetry (−2, 1), falling.", graph((x) => -((x + 2) ** 3) + 1, { xmin: -4, xmax: 0.5, ymin: -4, ymax: 6 }, [P(-2, 1)])),
  num(String.raw`$y=a(x-3)^4$ passes through $(4,5)$. Find $a$.`, 5, "a(1)⁴ = 5."),
  mc(String.raw`Mapping rule for $y=2(x+5)^3-1$:`, String.raw`$(x,y)\to(x-5,\,2y-1)$`, [String.raw`$(x,y)\to(x+5,\,2y-1)$`, String.raw`$(x,y)\to(x-5,\,\tfrac y2-1)$`, String.raw`$(x,y)\to(2x-5,\,y-1)$`], "d = −5, a = 2, c = −1."),
  tf(String.raw`$y=\left(\tfrac x2\right)^4$ and $y=\tfrac{x^4}{16}$ are the same function.`, true, "(x/2)⁴ = x⁴/2⁴."),
  num(String.raw`Find the maximum value of $y=-3(x+4)^4+9$.`, 9, "Vertex (−4, 9), opens down."),
  fill(String.raw`In $y=a[k(x-d)]^n+c$, the parameter that translates the graph vertically is ___.`, ["c"], "c moves the graph up or down."),
];
