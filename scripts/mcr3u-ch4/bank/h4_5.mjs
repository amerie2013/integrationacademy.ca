// 4.5 Transformations of Exponential Functions — 20 hard questions
import { mc, ms, num, tf } from "./kit.mjs";
import { P, planeDoc } from "./fig.mjs";

const V = { xmin: -5, xmax: 6, ymin: -6, ymax: 16 };

export const TOPIC = "4.5 Transformations of Exponential Functions";
export const Q = [
  num(String.raw`$y=a(2)^x+c$ passes through $(0,5)$ and $(2,11)$. What is the asymptote? Enter its y-value.`, 3, "3a = 6 → a = 2, c = 3."),
  num(String.raw`$y=a(3)^x+c$ has asymptote $y=-4$ and passes through $(1,2)$. Find its y-intercept.`, -2, "3a − 4 = 2 → a = 2; 2 − 4."),
  num(String.raw`Find the x-intercept of $y=2(3)^{x-1}-18$.`, 3, "3^(x−1) = 9."),
  num(String.raw`Find the x-intercept of $y=-3(2)^{-(x-2)}+12$.`, 0, "2^(−(x−2)) = 4 → −(x − 2) = 2."),
  mc(String.raw`Which describes $y=-\tfrac12(2)^{3(x+1)}+4$ as a transformation of $y=2^x$?`, "horizontal compression by ⅓, vertical compression by ½, reflection in the x-axis, 1 left, 4 up", ["horizontal stretch by 3, vertical compression by ½, reflection, 1 right, 4 up", "horizontal compression by ⅓, vertical stretch by 2, 1 left, 4 up", "reflection in the y-axis, 1 left, 4 down"], "a = −½, k = 3, d = −1, c = 4."),
  num("The curve has asymptote y = 2 and passes through (0, 5) and (1, 8). Find y(2).", 14, "a = 3; 3b + 2 = 8 → b = 2; 3(4) + 2.", planeDoc({ view: V, curves: [{ f: (x) => 3 * 2 ** x + 2, color: "violet" }], lines: [{ m: 0, b: 2, color: "green", dash: true }], points: [P(0, 5), P(1, 8)], step: { x: 1, y: 2 } })),
  num(String.raw`$y=2^x+c$ passes through $(3,5)$. Find its x-intercept (3 decimals).`, Math.log2(3), "c = −3; 2ˣ = 3.", null, 0.002),
  tf("A horizontal stretch of y = 4ˣ by a factor of 2 gives y = 2ˣ.", true, "4^(x/2) = 2ˣ."),
  num(String.raw`The point $(-1,\tfrac13)$ on $y=3^x$ maps to which x-coordinate on $y=3^{-x+2}+1$?`, 3, "k = −1, d = 2: x → −x + 2."),
  num("y = 2ˣ and y = 2^(x − 3) + 7 meet once. Find x.", 3, "2ˣ − 2ˣ/8 = 7 → 2ˣ = 8.", planeDoc({ view: V, curves: [{ f: (x) => 2 ** x, color: "violet" }, { f: (x) => 2 ** (x - 3) + 7, color: "amber" }], points: [P(3, 8)], step: { x: 1, y: 2 } })),
  ms(String.raw`Which are true for $y=2\left(\tfrac12\right)^{x+1}-3$? Select all.`, ["asymptote y = −3", "it is decreasing", "y-intercept −2", "range y > −3", "it passes through (0, 1)"], [0, 1, 2, 3], "y(0) = 2·½ − 3 = −2."),
  num(String.raw`$y=ab^x+c$ has asymptote $y=1$ and passes through $(0,3)$ and $(1,7)$. Find $y(2)$.`, 19, "a = 2, b = 3; 2(9) + 1."),
  num("The graph is y = −2(3)ˣ + 6. Find its x-intercept.", 1, "3ˣ = 3.", planeDoc({ view: V, curves: [{ f: (x) => -2 * 3 ** x + 6, color: "violet" }], lines: [{ m: 0, b: 6, color: "green", dash: true }], points: [P(0, 4), P(1, 0)], step: { x: 1, y: 2 } })),
  mc(String.raw`Which equals $8^{x/3}$?`, String.raw`$2^x$`, [String.raw`$2^{x/3}$`, String.raw`$8^{3x}$`, String.raw`$4^x$`], "(2³)^(x/3)."),
  num(String.raw`How far right must $y=3^x$ be translated to pass through $(5,9)$?`, 3, "3^(5−d) = 9 → d = 3."),
  num(String.raw`The range of $y=4^{x-1}-2.5$ is $y>m$. Find $m$.`, -2.5, "c = −2.5.", null, 1e-9),
  tf(String.raw`$y=-2^x$ and $y=(-2)^x$ are the same function.`, false, "(−2)ˣ is not even defined for most x."),
  num("The graph is y = 2^(x/2) + 1. Find y at x = 4.", 5, "2² + 1.", planeDoc({ view: V, curves: [{ f: (x) => 2 ** (x / 2) + 1, color: "violet" }], lines: [{ m: 0, b: 1, color: "green", dash: true }], points: [P(4, 5)], step: { x: 1, y: 2 } })),
  num(String.raw`$y=a(2)^{x-1}+c$ passes through $(1,3)$ and $(3,9)$. What is the asymptote? Enter its y-value.`, 1, "a + c = 3, 4a + c = 9 → a = 2, c = 1."),
  num(String.raw`Find the average rate of change of $y=3(2)^x-1$ from $x=0$ to $x=2$.`, 4.5, "(11 − 2) ÷ 2.", null, 1e-9),
];
