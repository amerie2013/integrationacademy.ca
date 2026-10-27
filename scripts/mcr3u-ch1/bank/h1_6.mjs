// 1.6 Translations and Vertical Stretches — 20 hard questions
import { mc, ms, num, tf, mx } from "./kit.mjs";
import { planeDoc, P, graph } from "./fig.mjs";

const V8 = { xmin: -8, xmax: 8, ymin: -8, ymax: 8 };

export const TOPIC = "1.6 Translations and Vertical Stretches";
export const Q = [
  num(String.raw`$y=a\sqrt{x-d}+c$ starts at $(-5,3)$ and passes through $(4,-6)$. Find $a$.`, -3, "−6 = 3a + 3."),
  mx(String.raw`A parabola has vertex $(4,-2)$ and passes through $(6,10)$. Write its equation.`, "3*(x-4)^2-2", "10 = 4a − 2 → a = 3."),
  num(String.raw`$y=\frac a{x-1}+2$ passes through $(3,-4)$. Find $a$.`, -12, "−4 = a/2 + 2."),
  num(String.raw`$y=\sqrt{k(x-3)}+1$ passes through $(5,5)$. Find $k$.`, 8, "√(2k) = 4 → 2k = 16."),
  mc("Which equation matches the downward parabola shown?", String.raw`$y=-\tfrac12(x+2)^2+6$`, [String.raw`$y=-2(x+2)^2+6$`, String.raw`$y=\tfrac12(x+2)^2+6$`, String.raw`$y=-\tfrac12(x-2)^2+6$`], "Vertex (−2, 6); through (0, 4): 4 = 4a + 6 → a = −½.", graph((x) => -0.5 * (x + 2) ** 2 + 6, V8, [P(-2, 6), P(0, 4)])),
  num(String.raw`$y=a|x-d|+c$ has vertex $(1,-6)$ and x-intercepts $-2$ and $4$. Find $a$.`, 2, "0 = 3a − 6."),
  ms(String.raw`For $y=-2\sqrt{x+1}+6$, which are true? Select all.`, ["domain x ≥ −1", "range y ≤ 6", "x-intercept 8", "y-intercept 4"], [0, 1, 2, 3], "√(x + 1) = 3 → x = 8; at x = 0: −2 + 6 = 4."),
  num("The blue graph is y = √x. The red graph is a vertical stretch and translation of it. Find a in y = a√(x − d) + c.", 3, "Red starts at (−4, −2) and passes through (0, 4): 4 = 2a − 2.", planeDoc({ view: { xmin: -6, xmax: 6, ymin: -4, ymax: 8 }, curves: [{ f: (x) => Math.sqrt(x), a: 0, color: "blue" }, { f: (x) => 3 * Math.sqrt(x + 4) - 2, a: -4, color: "red" }], points: [P(-4, -2), P(0, 4)] })),
  tf(String.raw`The graphs of $y=(x-3)^2$ and $y=(3-x)^2$ are identical.`, true, "(3 − x)² = (x − 3)²."),
  num(String.raw`Find the x-intercept of $y=-2\sqrt{-\tfrac12(x-6)}+4$.`, -2, "√(−½(x − 6)) = 2 → −½(x − 6) = 4 → x = −2."),
  num(String.raw`A parabola $y=a(x-d)^2+c$ has zeros $-1$ and $7$ and maximum value $8$. Find $a$.`, -0.5, "Vertex (3, 8); 0 = 16a + 8.", null, 0.001),
  mc(String.raw`$f(x)=\sqrt x$ and $g(x)=-f(2x+8)+3$. Where does $g$ start, and which point does $(16,4)$ on $f$ become?`, String.raw`$(-4,3)$; $(4,-1)$`, [String.raw`$(-4,3)$; $(28,-1)$`, String.raw`$(-8,3)$; $(0,-1)$`, String.raw`$(4,3)$; $(12,-1)$`], "2x + 8 = 2(x + 4): (x, y) → (x/2 − 4, −y + 3); (0, 0) → (−4, 3), (16, 4) → (4, −1)."),
  num("The two parabolas are translations of each other. How far right was the blue one moved to give the red one?", 5, "Vertices (−3, 1) and (2, 1).", planeDoc({ view: V8, curves: [{ f: (x) => (x + 3) ** 2 + 1, color: "blue" }, { f: (x) => (x - 2) ** 2 + 1, color: "red" }], points: [P(-3, 1), P(2, 1)] })),
  ms(String.raw`Which are true for $y=3\sqrt{-x+2}-1$? Select all.`, ["domain x ≤ 2", "range y ≥ −1", "it passes through (1, 2)", "it is reflected in the x-axis"], [0, 1, 2], "−x + 2 = −(x − 2): k = −1 reflects in the y-axis (not the x-axis); at x = 1: 3(1) − 1 = 2."),
  num(String.raw`$y=(k(x+1))^2-4$ with $k>0$ has an x-intercept at $x=3$. Find $k$.`, 0.5, "(4k)² = 4 → 4k = 2.", null, 0.001),
  mx(String.raw`$y=|x|$ is compressed horizontally by a factor of $\tfrac13$, reflected in the x-axis and moved 2 right and 5 up. Write the equation.`, "-abs(3*(x-2))+5", "a = −1, k = 3, d = 2, c = 5."),
  num(String.raw`$f(x)=|x|$; $g(x)=-3f(x-2)+9$. Find the positive difference between the x-intercepts of $g$.`, 6, "3|x − 2| = 9 → x = 5 or −1."),
  mc("The red graph is a transformation of y = 1/x. Which equation?", String.raw`$y=\frac{2}{x-3}-1$`, [String.raw`$y=\frac{2}{x+3}-1$`, String.raw`$y=\frac{1}{x-3}-1$`, String.raw`$y=\frac{-2}{x-3}-1$`], "Asymptotes x = 3, y = −1; through (4, 1): a/1 − 1 = 1 → a = 2.", planeDoc({ view: V8, curves: [{ f: (x) => 2 / (x - 3) - 1, color: "red" }], vlines: [{ x: 3, color: "gray", dash: true }], lines: [{ m: 0, b: -1, color: "gray", dash: true }], points: [P(4, 1)] })),
  num(String.raw`$y=a(x-1)^2+c$ passes through $(0,5)$ and $(3,17)$. Find $c$.`, 1, "a + c = 5, 4a + c = 17 → a = 4, c = 1."),
  num("The violet graph is y = √(k(x − d)) and starts at the first marked point. Find k.", 3, "Start (−2, 0) gives d = −2; through (1, 3): √(3k) = 3 → k = 3.", planeDoc({ view: { xmin: -4, xmax: 6, ymin: -1, ymax: 6 }, curves: [{ f: (x) => Math.sqrt(x), a: 0, color: "gray" }, { f: (x) => Math.sqrt(3 * (x + 2)), a: -2, color: "violet" }], points: [P(-2, 0), P(1, 3)] })),
];
