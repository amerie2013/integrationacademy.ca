// 3.8 Linear–Quadratic Systems — 20 easy + 20 medium questions
import { mc, ms, num, tf, mx } from "./kit.mjs";
import { P, planeDoc } from "./fig.mjs";

const V8 = { xmin: -6, xmax: 6, ymin: -6, ymax: 10 };
const sys = (f, m, b, pts = []) => planeDoc({ view: V8, curves: [{ f, color: "violet" }], lines: [{ m, b, color: "blue" }], points: pts });

export const E = [
  num(String.raw`How many points do $y=x^2$ and $y=4$ share?`, 2, "x = ±2."),
  num(String.raw`How many points do $y=x^2$ and $y=-1$ share?`, 0, "x² ≥ 0."),
  num(String.raw`Find the larger x-coordinate where $y=x^2$ meets $y=x+2$.`, 2, "x² − x − 2 = 0."),
  num(String.raw`How many points do $y=x^2+1$ and $y=2x$ share?`, 1, "(x − 1)² = 0."),
  mc("The first step in solving a linear–quadratic system is to…", "set the two expressions for y equal", ["graph only the line", "add the equations", "find the vertex"], "Both equal y."),
  tf("A line can meet a parabola at three points.", false, "The combined equation is quadratic: at most two roots."),
  mc("If the combined equation has D = 0, the line is…", "tangent to the parabola", ["a secant", "parallel to the axis", "missing the parabola"], "One point of contact."),
  num(String.raw`Find the larger x-coordinate where $y=x^2-4$ meets the x-axis.`, 2, "x² = 4."),
  num(String.raw`An intersection has $x=2$ on the line $y=3x-1$. What is its y-coordinate?`, 5, "3(2) − 1."),
  num(String.raw`How many points do $y=-x^2+1$ and $y=2$ share?`, 0, "The maximum is 1."),
  num(String.raw`Find the larger x-coordinate where $y=x^2-2x$ meets $y=3$.`, 3, "(x − 3)(x + 1) = 0."),
  tf("The horizontal line through the vertex of a parabola is tangent to it.", true, "It touches only at the vertex."),
  num(String.raw`For which $k$ is $y=k$ tangent to $y=x^2+5$?`, 5, "The vertex height."),
  num(String.raw`How many points do $y=x^2-6x+9$ and $y=0$ share?`, 1, "(x − 3)²."),
  mc("The line in the graph is a…", "secant (two points)", ["tangent (one point)", "line that misses", "vertical line"], "It crosses the parabola twice.", sys((x) => x * x - 2, 1, 0, [P(2, 2), P(-1, -1)])),
  num("Read the graph: what is the positive x-coordinate where y = x² − 3 meets y = 2x?", 3, "x² − 2x − 3 = 0.", sys((x) => x * x - 3, 2, 0, [P(3, 6), P(-1, -2)])),
  num(String.raw`Find the smaller x-coordinate where $y=x^2$ meets $y=-x+6$.`, -3, "x² + x − 6 = 0."),
  mc("After solving for x, the easiest way to find y is to substitute into…", "the linear equation", ["the quadratic only", "the discriminant", "the vertex form"], "Both give the same y; the line is simpler."),
  num(String.raw`How many points do $y=2x^2$ and $y=-3$ share?`, 0, "2x² ≥ 0."),
  num("The line y = 2x − 1 touches y = x² at one point. What is its x-coordinate?", 1, "(x − 1)² = 0.", sys((x) => x * x, 2, -1, [P(1, 1)])),
];

export const M = [
  num(String.raw`Find the larger x-coordinate where $y=x^2-3x+1$ meets $y=x-2$.`, 3, "x² − 4x + 3 = 0."),
  num(String.raw`$y=x^2-3x+1$ and $y=x-2$: find the y-coordinate of the intersection with the larger x.`, 1, "x = 3: 3 − 2."),
  num(String.raw`How many points do $y=-x^2+4x-1$ and $y=x+3$ share?`, 0, "−x² + 3x − 4: D = 9 − 16."),
  num(String.raw`For which $k$ is $y=2x+k$ tangent to $y=x^2+4x+6$?`, 5, "x² + 2x + 6 − k: 4 − 4(6 − k) = 0."),
  num(String.raw`For which $m>0$ is $y=mx$ tangent to $y=x^2+9$?`, 6, "m² = 36."),
  num(String.raw`$R=-x^2+30x$ and $C=10x+75$. Find the larger break-even quantity.`, 15, "x² − 20x + 75 = 0."),
  num(String.raw`What is the largest integer $k$ for which $y=x+k$ misses $y=x^2-x$?`, -2, "x² − 2x − k: D = 4 + 4k < 0 → k < −1."),
  ms(String.raw`Which lines meet $y=x^2$ at two points? Select all.`, [String.raw`$y=1$`, String.raw`$y=-1$`, String.raw`$y=2x$`, String.raw`$y=2x-1$`, String.raw`$y=x+6$`], [0, 2, 4], "y = 2x − 1 is tangent; y = −1 misses."),
  num(String.raw`Find the larger x-coordinate where $y=2x^2-3x$ meets $y=x+6$.`, 3, "2x² − 4x − 6 = 0."),
  num(String.raw`How far apart are the points where $y=x^2$ meets $y=4$?`, 4, "(−2, 4) and (2, 4)."),
  tf("If the combined equation has D > 0, the line is a secant.", true, "Two intersection points."),
  num(String.raw`How many points do $y=3x^2+2$ and $y=-x+1$ share?`, 0, "3x² + x + 1: D = 1 − 12."),
  num(String.raw`A stone's height is $h(t)=-5t^2+20t$ and a balloon's is $b(t)=5t$. At what time after launch are they at the same height?`, 3, "−5t² + 15t = 0 → t = 0 or 3."),
  num(String.raw`$y=2x-1$ is tangent to $y=x^2-2x+3$. Find the x-coordinate of the point of contact.`, 2, "x² − 4x + 4 = 0."),
  num("Read the graph: what is the larger x-coordinate where y = −x² + 6x meets y = x + 4?", 4, "x² − 5x + 4 = 0.", sys((x) => -x * x + 6 * x, 1, 4, [P(1, 5), P(4, 8)])),
  mx(String.raw`Set $y=x^2+1$ equal to $y=3x-1$ and write the result as an expression equal to 0 (with $x^2$ positive).`, "x^2-3*x+2", "x² + 1 − 3x + 1."),
  num(String.raw`For which $k$ is $y=-2x+k$ tangent to $y=x^2$?`, -1, "x² + 2x − k: 4 + 4k = 0."),
  num(String.raw`For how many integers $k$ from $-5$ to $5$ does $y=k$ meet $y=x^2-2x$ twice?`, 6, "x² − 2x − k: 4 + 4k > 0 → k > −1: 0, …, 5."),
  num("The dashed line y = 4x − 4 is tangent to y = x². At what x does it touch?", 2, "(x − 2)² = 0.", planeDoc({ view: V8, curves: [{ f: (x) => x * x, color: "violet" }], lines: [{ m: 4, b: -4, color: "amber", dash: true }], points: [P(2, 4)] })),
  tf("Solving the combined quadratic gives the x-coordinates; the y-coordinates must be found separately.", true, "Substitute each x."),
];
