// 3.6 Linear–Quadratic Systems — 20 hard questions
import { mc, num, tf } from "./kit.mjs";
import { P, planeDoc } from "./fig.mjs";

const V8 = { xmin: -6, xmax: 6, ymin: -8, ymax: 12 };

export const TOPIC = "3.6 Linear–Quadratic Systems";
export const Q = [
  num(String.raw`For $k>0$, $y=kx-4$ is tangent to $y=x^2$. Find the y-coordinate of the point of contact.`, 4, "x² − kx + 4: k = 4, x = 2."),
  num(String.raw`Which line of slope 3, $y=3x+k$, is tangent to $y=x^2+x+5$? Give $k$.`, 4, "x² − 2x + 5 − k: 4 − 4(5 − k) = 0."),
  num(String.raw`Tank A holds $4(t-10)^2$ L for $0\le t\le10$ min; tank B starts empty and fills at 20 L/min. When do they hold equal amounts (min)?`, 5, "4t² − 100t + 400 = 0 → t² − 25t + 100 = 0 → t = 5 (20 is outside)."),
  num(String.raw`For the tanks above (A: $4(t-10)^2$, B: $20t$), how many litres are in each when they are equal?`, 100, "20 × 5."),
  num(String.raw`Find the distance between the points where $y=x^2-4x$ meets $y=2x-5$ (2 decimals).`, Math.sqrt(80), "x = 1, 5: (1, −3), (5, 5).", planeDoc({ view: { xmin: -1, xmax: 7, ymin: -6, ymax: 8 }, curves: [{ f: (x) => x * x - 4 * x, color: "violet" }], lines: [{ m: 2, b: -5, color: "blue" }], points: [P(1, -3), P(5, 5)] }), 0.01),
  num(String.raw`$y=x^2$ meets $y=x+2$ at two points A and B. Find the area of triangle OAB (O is the origin).`, 3, "A(2, 4), B(−1, 1): ½|2·1 − (−1)·4|."),
  mc(String.raw`For which $b$ is $y=2x+b$ tangent to $y=-x^2+4x$?`, String.raw`$b=1$`, [String.raw`$b=-1$`, String.raw`$b=4$`, String.raw`$b=0$`], "−x² + 2x − b: 4 − 4b = 0."),
  num(String.raw`A rocket's height is $h(t)=-5t^2+50t$ and a drone's is $d(t)=10t+35$. For how many seconds is the rocket above the drone?`, 6, "t² − 8t + 7 = 0 → 1 and 7."),
  num("A line through (0, −5) with positive slope is tangent to y = x². Find its slope (2 decimals).", Math.sqrt(20), "x² − mx + 5 = 0: m² = 20.", planeDoc({ view: V8, curves: [{ f: (x) => x * x, color: "violet" }], lines: [{ m: Math.sqrt(20), b: -5, color: "amber", dash: true }], points: [P(0, -5)] }), 0.01),
  tf("A vertical line can be tangent to a parabola that opens up.", false, "It crosses exactly once but is not tangent; the system method needs non-vertical lines."),
  num(String.raw`For which $c$ is $y=x^2+c$ tangent to $y=6x$?`, 9, "x² − 6x + c: 36 − 4c = 0."),
  num(String.raw`$y=x^2-2x-3$ and $y=2x-3$ meet at the y-intercept and one other point. Find its x-coordinate.`, 4, "x² − 4x = 0."),
  num(String.raw`For how many integers $m$ from $-10$ to $10$ does $y=mx+1$ miss $y=x^2+2$?`, 3, "x² − mx + 1: m² < 4 → m = −1, 0, 1."),
  num("Revenue R = −x² + 26x and cost C = 4x + 85 (thousands). For how wide an interval of x is there a profit?", 12, "x² − 22x + 85 = 0 → 5 and 17.", planeDoc({ view: { xmin: 0, xmax: 26, ymin: 0, ymax: 180 }, curves: [{ f: (x) => -x * x + 26 * x, color: "violet" }], lines: [{ m: 4, b: 85, color: "blue" }], points: [P(5, 105), P(17, 153)], step: { x: 2, y: 20 } })),
  num(String.raw`$y=x^2$ and $y=2x+3$ meet at A and B. Find the x-coordinate of the midpoint of AB.`, 1, "x = −1 and 3."),
  mc(String.raw`Which parabola $y=x^2+bx+c$ is tangent to $y=2x+1$ at $x=1$?`, String.raw`$y=x^2+2$`, [String.raw`$y=x^2+1$`, String.raw`$y=x^2+2x$`, String.raw`$y=x^2-2x+4$`], "x² + (b − 2)x + c − 1 = (x − 1)²: b = 0, c = 2."),
  num(String.raw`A ball's height is $h(t)=-4.9t^2+24.5t$ and a lift rises as $p(t)=4.9t+9.8$. When does the ball first pass the lift (2 decimals)?`, 2 - Math.sqrt(2), "t² − 4t + 2 = 0 → t = 2 ± √2.", null, 0.01),
  num("The horizontal line y = k meets y = −(x − 2)² + 4 exactly once. Find k.", 4, "At the vertex.", planeDoc({ view: V8, curves: [{ f: (x) => -((x - 2) ** 2) + 4, color: "violet" }], lines: [{ m: 0, b: 4, color: "amber", dash: true }], points: [P(2, 4)] })),
  num("Two lines through (1, −3) are tangent to y = x². What is the sum of their slopes?", 4, "y = m(x − 1) − 3: x² − mx + m + 3 = 0, D = m² − 4m − 12 = 0 → m = 6, −2."),
  num(String.raw`$y=x^2$ and $y=x+k$ meet at two points whose x-coordinates differ by 5. Find $k$.`, 6, "x² − x − k: the roots differ by √(1 + 4k) = 5."),
];
