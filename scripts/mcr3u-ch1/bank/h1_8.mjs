// 1.8 Combining Transformations — 20 hard questions
import { mc, ms, num, tf, mx } from "./kit.mjs";
import { planeDoc, P, graph } from "./fig.mjs";

const V8 = { xmin: -8, xmax: 8, ymin: -8, ymax: 8 };

export const TOPIC = "1.8 Combining Transformations";
export const Q = [
  num(String.raw`$(4,-2)$ on $y=f(x)$ maps to $(-1,9)$ under $y=af(-2(x-d))+3$. Find $a$.`, -3, "−2a + 3 = 9."),
  num(String.raw`$(4,-2)$ on $y=f(x)$ maps to $(-1,9)$ under $y=af(-2(x-d))+3$. Find $d$.`, 1, "4 ÷ (−2) + d = −1."),
  mx(String.raw`A transformed $\sqrt x$ starts at $(5,-2)$, extends to the left, and passes through $(1,4)$. Write its equation.`, "3*sqrt(5-x)-2", "y = a√(−(x − 5)) − 2; 4 = a·2 − 2 → a = 3."),
  num(String.raw`$f$: domain $-4\le x\le2$, range $0\le y\le5$. For $g(x)=-2f(\tfrac12(x-3))+1$, find the length of the domain interval.`, 12, "x → 2x + 3: −5 to 7."),
  num(String.raw`Same $f$ and $g$: find the smallest value in the range of $g$.`, -9, "y → −2y + 1: 1 and −9."),
  mc("Which equation gives the red curve, a transformation of y = √x (grey)?", String.raw`$y=2\sqrt{-(x-1)}-3$`, [String.raw`$y=2\sqrt{x-1}-3$`, String.raw`$y=-2\sqrt{-(x-1)}-3$`, String.raw`$y=2\sqrt{-(x+1)}-3$`], "Starts at (1, −3), goes left and up; through (−3, 1): 2√4 − 3.", planeDoc({ view: V8, curves: [{ f: (x) => Math.sqrt(x), a: 0, color: "gray" }, { f: (x) => 2 * Math.sqrt(1 - x) - 3, b: 1, color: "red" }], points: [P(1, -3), P(-3, 1)] })),
  num(String.raw`$y=-\left(2(x+1)\right)^2+8$. Find the larger x-intercept.`, 0.4142, "(2(x + 1))² = 8 → x + 1 = ±√2."
    , null, 0.002),
  ms(String.raw`For $y=-3|2x-4|+6$, which are true? Select all.`, ["vertex (2, 6)", "x-intercepts 1 and 3", "range y ≤ 6", "it is a horizontal stretch of |x|"], [0, 1, 2], "|2(x − 2)|: compression; 3·2|x − 2| = 6 → |x − 2| = 1.", graph((x) => -3 * Math.abs(2 * x - 4) + 6, V8, [P(2, 6)])),
  num(String.raw`$y=\frac{a}{k(x-d)}+c$ has asymptotes $x=2$, $y=-1$ and passes through $(3,5)$ with $k=3$. Find $a$.`, 18, "5 = a/3 − 1."),
  tf(String.raw`$y=f(-(x-4))$ is the reflection of $y=f(x)$ in the vertical line $x=2$.`, true, "(x, y) → (4 − x, y): mirror in x = 2."),
  num("The grey curve is y = x². Find a in the red curve y = a(k(x − d))² + c with k = 2 (read the vertex and one point).", -0.5, "Vertex (3, 5); (4, 3): 3 = a·4 + 5.", planeDoc({ view: V8, curves: [{ f: (x) => x * x, color: "gray" }, { f: (x) => -0.5 * (2 * (x - 3)) ** 2 + 5, color: "red" }], points: [P(3, 5), P(4, 3)] }), 0.001),
  num(String.raw`$g(x)=f(3x+12)$. If $f$ has a zero at $x=-6$, find the corresponding zero of $g$.`, -6, "f(3(x + 4)): −6 ÷ 3 − 4."),
  mc(String.raw`Which sequence turns $y=x^2$ into $y=-(3x-6)^2+2$?`, String.raw`compress horizontally by ⅓, reflect in the x-axis, 2 right, 2 up`, [String.raw`compress by ⅓, reflect, 6 right, 2 up`, String.raw`stretch by 3, reflect, 2 right, 2 up`, String.raw`compress by ⅓, reflect, 2 left, 2 up`], "−(3(x − 2))² + 2."),
  num(String.raw`$h(t)=-5(t-3)^2+45$ models a ball. It is reflected and translated to $g(t)=5(t-3)^2+10$. What is the minimum of $g$?`, 10, "Vertex (3, 10), opens up."),
  num("The graph of y = f(x) is the blue segment from (−2, 0) to (4, 6). Its image under y = −f(2x) + 3 is a segment. Find its left endpoint's y-coordinate.", 3, "(−2, 0) → (−1, 3); (4, 6) → (2, −3).", planeDoc({ view: V8, segs: [{ pts: [[-2, 0], [4, 6]], color: "blue" }, { pts: [[-1, 3], [2, -3]], color: "red" }], points: [P(-2, 0, null, "blue"), P(4, 6, null, "blue")] })),
  mx(String.raw`$\frac1x$ is stretched vertically by 4, compressed horizontally by ½, reflected in the y-axis, then moved 3 right. Write the equation.`, "4/(-2*(x-3))", "a = 4, k = −2, d = 3."),
  num(String.raw`For $y=a\sqrt{k(x-d)}+c$ with $a=1$, $c=0$, $d=2$: the point $(8,\sqrt{8})$ on $\sqrt x$ maps to $(6,\sqrt8)$. Find $k$.`, 2, "8/k + 2 = 6."),
  tf(String.raw`$y=2f(3x)$ and $y=3f(2x)$ always have the same zeros.`, false, "Zeros of f(3x) are divided by 3, of f(2x) by 2."),
  num(String.raw`A ramp follows $y=\sqrt x$ (m). A new ramp is twice as tall, a third as long, and starts at $(2,0)$. What is its height at $x=5$? (2 decimals)`, 6, "y = 2√(3(x − 2)); 2√9 = 6."),
  num(String.raw`$f(x)=x^2-6x+5$. Find the y-intercept of $y=2f(-x)-1$.`, 9, "2f(0) − 1 = 2(5) − 1."),
];
