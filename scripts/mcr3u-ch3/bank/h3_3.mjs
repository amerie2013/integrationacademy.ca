// 3.3 Solving Quadratic Equations — 20 hard questions
import { mc, num, tf } from "./kit.mjs";
import { P, graph, planeDoc } from "./fig.mjs";

export const TOPIC = "3.3 Solving Quadratic Equations";
export const Q = [
  num("A 30 cm by 20 cm picture has a frame of uniform width. Picture and frame together cover 816 cm². How wide is the frame (cm)?", 2, "(30 + 2x)(20 + 2x) = 816 → x² + 25x − 54 = 0."),
  num(String.raw`Find the larger root of $3x^2-6x-2=0$ (3 decimals).`, 1 + Math.sqrt(15) / 3, "(3 ± √15)/3.", null, 0.002),
  num(String.raw`$h(t)=-4.9t^2+29.4t+1$. For how long is the object above 30 m (2 decimals)?`, Math.sqrt(29.4 ** 2 - 4 * 4.9 * 29) / 4.9, "−4.9t² + 29.4t − 29 = 0: the roots differ by √D/4.9.", graph((t) => -4.9 * t * t + 29.4 * t + 1, { xmin: 0, xmax: 6.5, ymin: 0, ymax: 50 }, [], { a: 0, lines: [{ m: 0, b: 30, color: "amber", dash: true }], step: { x: 0.5, y: 5 } }), 0.01),
  num(String.raw`Profit is $P(x)=-x^2+14x-18$. For how wide an interval of $x$ is the profit at least 22?`, 6, "x² − 14x + 40 ≤ 0 → 4 ≤ x ≤ 10."),
  num("Two consecutive positive even integers have squares adding to 340. What is the smaller?", 12, "x² + (x + 2)² = 340."),
  num("A rectangle has perimeter 34 cm and a diagonal of 13 cm. What is its area?", 60, "l + w = 17, l² + w² = 169 → 5 and 12."),
  num(String.raw`A polygon with $n$ sides has $\frac{n(n-3)}{2}$ diagonals. Which polygon has 54?`, 12, "n² − 3n − 108 = 0."),
  num(String.raw`Solve $x=\sqrt{x+6}$.`, 3, "x² − x − 6 = 0; x = −2 is extraneous."),
  num(String.raw`Find the largest root of $x^4-13x^2+36=0$.`, 3, "Let u = x²: u = 4 or 9."),
  num("A 10 m by 6 m pool has a walkway of uniform width whose area equals the pool's area. How wide is the walkway (2 decimals)?", -4 + Math.sqrt(31), "(10 + 2x)(6 + 2x) = 120 → x² + 8x − 15 = 0.", planeDoc({ view: { xmin: -1, xmax: 14, ymin: -1, ymax: 10 }, segs: [{ pts: [[0, 0], [13.1, 0], [13.1, 9.1], [0, 9.1], [0, 0]], color: "amber" }, { pts: [[1.57, 1.57], [11.57, 1.57], [11.57, 7.57], [1.57, 7.57], [1.57, 1.57]], color: "blue" }], step: { x: 1, y: 1 } }), 0.01),
  mc(String.raw`Which equation has roots $2\pm\sqrt3$?`, String.raw`$x^2-4x+1=0$`, [String.raw`$x^2+4x+1=0$`, String.raw`$x^2-4x-1=0$`, String.raw`$x^2-2x+3=0$`], "(x − 2)² − 3."),
  num(String.raw`One root of $x^2+kx-12=0$ is 3. Find the other root.`, -4, "Product of roots −12."),
  num("A 120 km trip would take 1 hour less at a speed 10 km/h faster. What is the original speed (km/h)?", 30, "120/v − 120/(v + 10) = 1 → v² + 10v − 1200 = 0."),
  tf(String.raw`$x^2-2x+5=0$ has two real roots.`, false, "D = 4 − 20 < 0."),
  num("A bridge cable follows y = 0.01x² + 1 (metres). How far from the centre is the cable 9 m high (2 decimals)?", Math.sqrt(800), "x² = 800.", graph((x) => 0.01 * x * x + 1, { xmin: -35, xmax: 35, ymin: 0, ymax: 14 }, [P(Math.sqrt(800), 9, false)], { lines: [{ m: 0, b: 9, color: "amber", dash: true }], step: { x: 5, y: 2 } }), 0.01),
  num(String.raw`Find the larger root of $(x-1)(x-2)=12$.`, 5, "x² − 3x − 10 = 0."),
  num("A number plus its reciprocal is 2.9. What is the larger such number?", 2.5, "x² − 2.9x + 1 = 0 → 2.5, 0.4.", null, 0.001),
  num(String.raw`$h(t)=-4.9t^2+12t+1.5$. When does the ball land (2 decimals)?`, (12 + Math.sqrt(144 + 29.4)) / 9.8, "(12 + √173.4)/9.8.", graph((t) => -4.9 * t * t + 12 * t + 1.5, { xmin: 0, xmax: 3, ymin: 0, ymax: 10 }, [], { a: 0, step: { x: 0.5, y: 1 } }), 0.01),
  num("A rectangular garden has area 120 m² and uses 46 m of fence around it. What is the shorter side (m)?", 8, "l + w = 23 → w² − 23w + 120 = 0."),
  num(String.raw`For which positive $k$ is $x=2$ a root of $kx^2-kx+k^2-18=0$?`, 3, "4k − 2k + k² − 18 = 0 → k² + 2k − 15 = 0 → (k + 5)(k − 3)."),
];
