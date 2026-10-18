// 1.4 Transformations of Power Functions — 20 hard questions
import { mc, ms, num, tf } from "./kit.mjs";
import { graph, planeDoc, P } from "./fig.mjs";

export const TOPIC = "1.4 Transformations of Power Functions";
export const Q = [
  num(String.raw`$y=a(x-1)^3+c$ passes through $(3,17)$ and $(0,-1)$. Find $a$.`, 2, "8a + c = 17 and −a + c = −1 → 9a = 18."),
  num(String.raw`Under $y=-3(2x+4)^4+1$, the point $(-1,1)$ on $y=x^4$ maps to which x-coordinate?`, -2.5, "y = −3(2(x + 2))⁴ + 1: x → x/2 − 2 = −0.5 − 2.", null, 0.001),
  num(String.raw`Find the sum of the x-intercepts of $y=-2(x-3)^4+32$.`, 6, "(x − 3)⁴ = 16 → x = 1 or 5."),
  num(String.raw`$y=a(x+2)^3-4$ has an x-intercept at $x=0$. Find $a$.`, 0.5, "8a − 4 = 0.", null, 0.001),
  mc("The cubic has point of symmetry (1, −2) and passes through (2, 0). Which equation?", String.raw`$y=2(x-1)^3-2$`, [String.raw`$y=2(x+1)^3-2$`, String.raw`$y=(x-1)^3-2$`, String.raw`$y=-2(x-1)^3-2$`], "a(1)³ − 2 = 0 → a = 2.", graph((x) => 2 * (x - 1) ** 3 - 2, { xmin: -1, xmax: 3, ymin: -6, ymax: 6 }, [P(1, -2), P(2, 0)])),
  num("The quartic has vertex (−1, 4) and passes through (1, −4). Find its y-intercept.", 3.5, "a(2)⁴ + 4 = −4 → a = −½; f(0) = −½ + 4.", graph((x) => -0.5 * (x + 1) ** 4 + 4, { xmin: -3.5, xmax: 1.5, ymin: -5, ymax: 5 }, [P(-1, 4), P(1, -4)]), 0.001),
  tf(String.raw`$y=(2-x)^4$ and $y=(x-2)^4$ are the same function.`, true, "(2 − x)⁴ = (−(x − 2))⁴ = (x − 2)⁴."),
  tf(String.raw`$y=(2-x)^3$ and $y=(x-2)^3$ are the same function.`, false, "(2 − x)³ = −(x − 2)³."),
  num(String.raw`$y=x^3$ is compressed horizontally by a factor of $\tfrac12$, then translated 1 right. Evaluate the new function at $x=2$.`, 8, "y = (2(x − 1))³ = 8(x − 1)³; at x = 2: 8."),
  mc(String.raw`Which is equivalent to $y=(4-2x)^3+1$?`, String.raw`$y=-8(x-2)^3+1$`, [String.raw`$y=8(x-2)^3+1$`, String.raw`$y=-2(x-4)^3+1$`, String.raw`$y=-8(x+2)^3+1$`], "(4 − 2x) = −2(x − 2), and (−2)³ = −8."),
  num(String.raw`How many points do $y=(x-1)^4$ and $y=1$ have in common?`, 2, "(x − 1)⁴ = 1 → x = 0 or 2."),
  num(String.raw`$y=a(x-2)^4-8$ passes through the origin. Find its other x-intercept.`, 4, "16a = 8 → a = ½; (x − 2)⁴ = 16 → x = 0 or 4."),
  ms(String.raw`Which transformations leave the graph of $y=x^3$ unchanged? Select all.`, ["a rotation of 180° about the origin", "a reflection in the y-axis followed by a reflection in the x-axis", "a reflection in the y-axis", "a translation 1 right"], [0, 1], "Odd symmetry: (x, y) → (−x, −y) keeps the graph."),
  num(String.raw`Under $y=2(x-d)^4+c$, the point $(2,16)$ on $y=x^4$ maps to $(5,35)$. Find $c$.`, 3, "x: 2 + d = 5 → d = 3. y: 32 + c = 35."),
  num(String.raw`Find the x-intercept of $y=(x+1)^3-27$.`, 2, "x + 1 = 3."),
  mc("The gray curve is y = x⁴. Which equation gives the blue curve?", String.raw`$y=\tfrac12(x-2)^4-1$`, [String.raw`$y=2(x-2)^4-1$`, String.raw`$y=\tfrac12(x+2)^4-1$`, String.raw`$y=\tfrac12(x-2)^4+1$`], "Vertex (2, −1) and (3, −0.5): a(1)⁴ − 1 = −0.5 → a = ½.", planeDoc({ view: { xmin: -1, xmax: 4, ymin: -2, ymax: 5 }, curves: [{ f: (x) => x ** 4, color: "gray" }, { f: (x) => 0.5 * (x - 2) ** 4 - 1, color: "blue" }], points: [P(2, -1), P(3, -0.5)], step: { x: 1, y: 1 } })),
  num(String.raw`Solve $3(x-2)^3+24=0$.`, 0, "(x − 2)³ = −8 → x − 2 = −2."),
  tf(String.raw`A horizontal stretch of $y=x^4$ by a factor of 2 gives the same graph as a vertical compression by a factor of $\tfrac1{16}$.`, true, "(x/2)⁴ = x⁴/16."),
  num(String.raw`$y=a(x-d)^3$ passes through $(1,-1)$ and $(3,1)$, and its point of symmetry is midway between them. Find $a$.`, 1, "d = 2; a(−1)³ = −1 → a = 1."),
  num(String.raw`For $y=-(x+1)^4+16$, find the length of the interval of x-values where $y\ge0$.`, 4, "(x + 1)⁴ ≤ 16 → −3 ≤ x ≤ 1.", graph((x) => -((x + 1) ** 4) + 16, { xmin: -4, xmax: 2, ymin: -4, ymax: 18 }, [P(-1, 16)], { step: { x: 1, y: 2 } })),
];
