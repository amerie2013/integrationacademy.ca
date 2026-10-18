// 1.6 Translations and Vertical Stretches — 20 hard questions
import { mc, ms, num, tf, mx } from "./kit.mjs";
import { planeDoc, P, graph } from "./fig.mjs";

const V8 = { xmin: -8, xmax: 8, ymin: -8, ymax: 8 };

export const TOPIC = "1.6 Translations and Vertical Stretches";
export const Q = [
  num(String.raw`$y=a\sqrt{x-d}+c$ starts at $(-5,3)$ and passes through $(4,-6)$. Find $a$.`, -3, "−6 = 3a + 3."),
  mx(String.raw`A parabola has vertex $(4,-2)$ and passes through $(6,10)$. Write its equation.`, "3*(x-4)^2-2", "10 = 4a − 2 → a = 3."),
  num(String.raw`$y=\frac a{x-1}+2$ passes through $(3,-4)$. Find $a$.`, -12, "−4 = a/2 + 2."),
  num(String.raw`For how many integers $c$ from $-5$ to $5$ does $y=-|x|+c$ have two x-intercepts?`, 5, "Opens down: two zeros when c > 0: c = 1, …, 5."),
  mc("Which equation matches the downward parabola shown?", String.raw`$y=-\tfrac12(x+2)^2+6$`, [String.raw`$y=-2(x+2)^2+6$`, String.raw`$y=\tfrac12(x+2)^2+6$`, String.raw`$y=-\tfrac12(x-2)^2+6$`], "Vertex (−2, 6); through (0, 4): 4 = 4a + 6 → a = −½.", graph((x) => -0.5 * (x + 2) ** 2 + 6, V8, [P(-2, 6), P(0, 4)])),
  num(String.raw`$y=a|x-d|+c$ has vertex $(1,-6)$ and x-intercepts $-2$ and $4$. Find $a$.`, 2, "0 = 3a − 6."),
  ms(String.raw`For $y=-2\sqrt{x+1}+6$, which are true? Select all.`, ["domain x ≥ −1", "range y ≤ 6", "x-intercept 8", "y-intercept 4"], [0, 1, 2, 3], "√(x + 1) = 3 → x = 8; at x = 0: −2 + 6 = 4."),
  num("The blue graph is y = √x. The red graph is a vertical stretch and translation of it. Find a in y = a√(x − d) + c.", 3, "Red starts at (−4, −2) and passes through (0, 4): 4 = 2a − 2.", planeDoc({ view: { xmin: -6, xmax: 6, ymin: -4, ymax: 8 }, curves: [{ f: (x) => Math.sqrt(x), a: 0, color: "blue" }, { f: (x) => 3 * Math.sqrt(x + 4) - 2, a: -4, color: "red" }], points: [P(-4, -2), P(0, 4)] })),
  tf(String.raw`The graphs of $y=(x-3)^2$ and $y=(3-x)^2$ are identical.`, true, "(3 − x)² = (x − 3)²."),
  num(String.raw`$y=\frac{6}{x+2}-3$. Find the x-intercept.`, 0, "6/(x + 2) = 3 → x + 2 = 2."),
  num(String.raw`A parabola $y=a(x-d)^2+c$ has zeros $-1$ and $7$ and maximum value $8$. Find $a$.`, -0.5, "Vertex (3, 8); 0 = 16a + 8.", null, 0.001),
  mc(String.raw`$f(x)=\sqrt x$ and $g(x)=f(x-9)+3$. Where does $g$ start, and which point does $(16,4)$ on $f$ become?`, String.raw`$(9,3)$; $(25,7)$`, [String.raw`$(-9,3)$; $(7,7)$`, String.raw`$(9,3)$; $(16,7)$`, String.raw`$(3,9)$; $(25,7)$`], "Right 9, up 3."),
  num("The two parabolas are translations of each other. How far right was the blue one moved to give the red one?", 5, "Vertices (−3, 1) and (2, 1).", planeDoc({ view: V8, curves: [{ f: (x) => (x + 3) ** 2 + 1, color: "blue" }, { f: (x) => (x - 2) ** 2 + 1, color: "red" }], points: [P(-3, 1), P(2, 1)] })),
  num(String.raw`For which $c$ does $y=2(x-1)^2+c$ touch the x-axis exactly once?`, 0, "Vertex on the axis."),
  num(String.raw`$y=a(x+2)^2-5$ passes through $(1,13)$. Find its y-intercept.`, 3, "13 = 9a − 5 → a = 2; y(0) = 8 − 5."),
  mx(String.raw`$y=\sqrt x$ is stretched vertically by 4, reflected in the x-axis and moved 6 left and 1 down. Write the equation.`, "-4*sqrt(x+6)-1", "a = −4, d = −6, c = −1."),
  num(String.raw`$f(x)=|x|$; $g(x)=-3f(x-2)+9$. Find the positive difference between the x-intercepts of $g$.`, 6, "3|x − 2| = 9 → x = 5 or −1."),
  mc("The red graph is a transformation of y = 1/x. Which equation?", String.raw`$y=\frac{2}{x-3}-1$`, [String.raw`$y=\frac{2}{x+3}-1$`, String.raw`$y=\frac{1}{x-3}-1$`, String.raw`$y=\frac{-2}{x-3}-1$`], "Asymptotes x = 3, y = −1; through (4, 1): a/1 − 1 = 1 → a = 2.", planeDoc({ view: V8, curves: [{ f: (x) => 2 / (x - 3) - 1, color: "red" }], vlines: [{ x: 3, color: "gray", dash: true }], lines: [{ m: 0, b: -1, color: "gray", dash: true }], points: [P(4, 1)] })),
  num(String.raw`$y=a(x-1)^2+c$ passes through $(0,5)$ and $(3,17)$. Find $c$.`, 1, "a + c = 5, 4a + c = 17 → a = 4, c = 1."),
  num(String.raw`$y=\sqrt{x-d}+c$ passes through $(5,4)$ and $(10,5)$. Find $d$.`, 1, "√(5 − d) + c = 4, √(10 − d) + c = 5: try d = 1: 2 + c = 4, 3 + c = 5 ✓ (c = 2)."),
];
