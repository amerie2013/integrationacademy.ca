// 9.1 Exponents and Radicals — 20 hard questions
import { mc, ms, num, tf } from "./kit.mjs";
import { planeDoc, P } from "./fig.mjs";

const S = String.raw;

export const TOPIC = "9.1 Exponents and Radicals";
export const Q = [
  num(S`Solve $25^{x}-6\cdot5^{x}+5=0$. Give the larger solution.`, 1, "Let u = 5ˣ: (u − 1)(u − 5) = 0; x = 0 or 1.", planeDoc({ view: { xmin: -1, xmax: 1.6, ymin: -5, ymax: 6 }, curves: [{ f: (x) => 25 ** x - 6 * 5 ** x + 5 }], points: [P(0, 0, "", "red"), P(1, 0, "", "red")], step: { x: 0.5, y: 1 } })),
  num(S`Solve $2^{2x+1}-17\cdot2^{x}+8=0$. Give the sum of the solutions.`, 2, "2u² − 17u + 8 = 0: u = 8 or ½; x = 3 or −1."),
  num(S`Solve $3^{x+2}-3^{x}=72$.`, 2, "3ˣ(9 − 1) = 72 ⇒ 3ˣ = 9."),
  num(S`Solve $2^{x+3}+2^{x}=72$.`, 3, "2ˣ(8 + 1) = 72 ⇒ 2ˣ = 8."),
  num(S`Solve simultaneously $3^{x}\cdot9^{y}=243$ and $2^{x-y}=4$. Find $y$.`, 1, "x + 2y = 5, x − y = 2 ⇒ y = 1."),
  mc(S`Rationalise and simplify $\dfrac{\sqrt6+\sqrt2}{\sqrt6-\sqrt2}$.`, S`$2+\sqrt3$`, [S`$\sqrt3$`, S`$4+2\sqrt3$`, S`$1+\sqrt3$`], "(√6 + √2)²/(6 − 2) = (8 + 4√3)/4."),
  mc(S`Simplify $\dfrac{2}{\sqrt7+\sqrt5}+\dfrac{2}{\sqrt7-\sqrt5}$.`, S`$2\sqrt7$`, [S`$2\sqrt5$`, S`$\sqrt7$`, S`$4\sqrt{35}$`], "Rationalise each: (√7 − √5) + (√7 + √5)."),
  num(S`$(3+\sqrt2)(3-\sqrt2)=$ ?`, 7, "9 − 2."),
  num(S`$(2\sqrt3+1)^2=a+b\sqrt3$. Find $a$.`, 13, "12 + 4√3 + 1."),
  mc(S`Simplify $\dfrac{x^{3/2}\cdot x^{1/2}}{x^{-1}}$.`, S`$x^3$`, [S`$x^2$`, S`$x$`, S`$x^{3/4}$`], "x^(3/2 + 1/2 + 1)."),
  mc(S`Simplify $\left(\dfrac{8x^6}{27}\right)^{-1/3}$.`, S`$\dfrac{3}{2x^2}$`, [S`$\dfrac{2x^2}{3}$`, S`$\dfrac{3x^2}{2}$`, S`$-\dfrac{2x^2}{3}$`], "Cube root then reciprocal."),
  num(S`Solve $\sqrt{2^{x}}=8^{x-1}$.`, 1.2, "x/2 = 3x − 3 ⇒ x = 6/5.", null, 0.001),
  num(S`Solve $4^{x}=\dfrac{1}{8\sqrt2}$.`, -1.75, "2^(2x) = 2^(−7/2).", null, 0.001),
  ms("Which are rational numbers? Select all.", [S`$\sqrt{18}\times\sqrt2$`, S`$\sqrt{12}+\sqrt3$`, S`$\dfrac{\sqrt{50}}{\sqrt2}$`, S`$(\sqrt5-1)^2$`], [0, 2], "√36 = 6, √25 = 5; the others contain surds."),
  tf(S`$2^{x}+2^{x}=2^{x+1}$ for all $x$.`, true, "2 · 2ˣ = 2^(x+1)."),
  tf(S`$3^{x}+3^{x}=3^{2x}$ for all $x$.`, false, "2 · 3ˣ ≠ 3^(2x) in general."),
  mc("The graph shows y = 4ˣ − 5·2ˣ + 4. Its zeros are at:", "x = 0 and x = 2", ["x = 1 and x = 4", "x = 1 only", "x = 0 and x = 1"], "u = 2ˣ: (u − 1)(u − 4) = 0.", planeDoc({ view: { xmin: -1, xmax: 3, ymin: -3, ymax: 6 }, curves: [{ f: (x) => 4 ** x - 5 * 2 ** x + 4 }], points: [P(0, 0, "", "red"), P(2, 0, "", "red")], step: { x: 1, y: 1 } })),
  mc("Lines show the exponents 3x − 1 and x + 5 of the same base. Where are 2^(3x−1) and 2^(x+5) equal?", "x = 3", ["x = 2", "x = 5", "x = −3"], "3x − 1 = x + 5.", planeDoc({ view: { xmin: 0, xmax: 6, ymin: -2, ymax: 12 }, lines: [{ m: 3, b: -1 }, { m: 1, b: 5, color: "amber" }], points: [P(3, 8, "", "red")], step: { x: 1, y: 2 } })),
  num(S`Solve $\dfrac{9^{x}}{3^{x+1}}=27$.`, 4, "3^(2x − x − 1) = 3³."),
  mc("The graph of y = a·2ˣ passes through the marked point. Find a.", "3", ["6", "1.5", "12"], "a · 2² = 12.", planeDoc({ view: { xmin: -2, xmax: 3, ymin: -1, ymax: 14 }, curves: [{ f: (x) => 3 * 2 ** x }], points: [P(2, 12, "", "red")], step: { x: 1, y: 2 } })),
];
