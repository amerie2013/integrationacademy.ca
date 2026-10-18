// 1.1 Power Functions — 20 hard questions
import { mc, ms, num, tf } from "./kit.mjs";
import { planeDoc, P, graph } from "./fig.mjs";

export const TOPIC = "1.1 Power Functions";
export const Q = [
  num(String.raw`$y=ax^n$ passes through $(1,3)$ and $(2,96)$. Find $n$.`, 5, "a = 3, then 3·2ⁿ = 96 → 2ⁿ = 32."),
  num(String.raw`$y=ax^n$ passes through $(-1,2)$ and $(3,-54)$. Find $n$.`, 3, "Even n would need a = 2 and 2·3ⁿ = −54, impossible. Odd n: a = −2, so −2·3ⁿ = −54 → 3ⁿ = 27 → n = 3."),
  num(String.raw`For how many whole numbers $n$ from 1 to 10 does $y=x^n$ pass through $(-1,-1)$?`, 5, "Odd n: 1, 3, 5, 7, 9."),
  ms(String.raw`Where is $x^4>x^2$? Select all that apply.`, [String.raw`$x<-1$`, String.raw`$-1<x<0$`, String.raw`$0<x<1$`, String.raw`$x>1$`], [0, 3], "x²(x² − 1) > 0 ⇔ |x| > 1.", planeDoc({ view: { xmin: -1.8, xmax: 1.8, ymin: -0.5, ymax: 3 }, curves: [{ f: (x) => x ** 4, color: "red" }, { f: (x) => x * x, color: "blue" }], points: [P(-1, 1), P(1, 1)], step: { x: 0.5, y: 0.5 } })),
  num(String.raw`How many solutions does $x^3=x$ have?`, 3, "x(x − 1)(x + 1) = 0."),
  num(String.raw`How many real solutions does $x^4=-x^2-1$ have?`, 0, "The left side is ≥ 0 and the right side is ≤ −1."),
  mc("The curves are y = x², y = x³ and y = x⁴. Which one is red?", String.raw`$y=x^4$`, [String.raw`$y=x^2$`, String.raw`$y=x^3$`, String.raw`$y=x^5$`], "Even, and flattest near 0 among the even ones.", planeDoc({ view: { xmin: -1.6, xmax: 1.6, ymin: -2, ymax: 3 }, curves: [{ f: (x) => x * x, color: "blue" }, { f: (x) => x ** 3, color: "green" }, { f: (x) => x ** 4, color: "red" }], step: { x: 0.5, y: 0.5 } })),
  num(String.raw`A sphere's volume is $V=\frac43\pi r^3$. By what factor does $V$ change when $r$ is multiplied by 1.5? (2 decimals)`, 3.375, "1.5³.", null, 0.006),
  num(String.raw`$f(x)=ax^4$ and $f(2)-f(1)=45$. Find $a$.`, 3, "16a − a = 15a = 45."),
  tf(String.raw`If $f$ and $g$ are both odd functions, then $f+g$ is odd.`, true, "f(−x) + g(−x) = −f(x) − g(x)."),
  tf(String.raw`The product of an even function and an odd function is even.`, false, "f(−x)g(−x) = f(x)(−g(x)): odd."),
  num(String.raw`Find the sum of all real solutions of $x^5=16x$.`, 0, "x(x⁴ − 16) = 0: x = 0, ±2."),
  mc(String.raw`Which function has end behaviour Q2 → Q1 and passes through $(-1,-3)$?`, String.raw`$y=x^4-4$`, [String.raw`$y=-3x^4$`, String.raw`$y=3x^3$`, String.raw`$y=x^4+2$`], "Even, positive leading coefficient, and 1 − 4 = −3."),
  num(String.raw`The graph of $y=ax^n$ passes through $(1,0.5)$ and $(2,8)$. Find $n$.`, 4, "a = 0.5 from (1, 0.5); 0.5·2ⁿ = 8 → 2ⁿ = 16 → n = 4, even, which matches the symmetric graph.", graph((x) => 0.5 * x ** 4, { xmin: -2.5, xmax: 2.5, ymin: -1, ymax: 9 }, [P(1, 0.5), P(2, 8), P(-2, 8)], { step: { x: 0.5, y: 1 } })),
  num(String.raw`Find the negative solution of $\tfrac12x^4=40.5$.`, -3, "x⁴ = 81 → x = ±3."),
  ms(String.raw`Which statements are true for every $y=ax^n$ with $n$ odd and $a\ne0$? Select all.`, ["range is all real numbers", "passes through the origin", "symmetric about the y-axis", "has at least one turning point"], [0, 1], "Odd powers: origin symmetry and no turning point (e.g. y = x³)."),
  num(String.raw`The area of a square is $A=s^2$ and the volume of a cube is $V=s^3$. For which positive $s$ are they numerically equal?`, 1, "s² = s³ → s = 1."),
  mc("Which statement compares the graphs of y = x³ and y = x⁵ correctly?", "they meet at three points", ["they meet only at the origin", "they never meet", "they meet at two points"], "x⁵ = x³ → x³(x² − 1) = 0: x = −1, 0, 1.", planeDoc({ view: { xmin: -1.6, xmax: 1.6, ymin: -2, ymax: 2 }, curves: [{ f: (x) => x ** 3, color: "blue" }, { f: (x) => x ** 5, color: "red" }], step: { x: 0.5, y: 0.5 } })),
  num(String.raw`For $f(x)=x^n$ with $n$ even, $f(2)=256$. Find $f(-\tfrac12)$.`, 0.00390625, "2ⁿ = 256 → n = 8; (1/2)⁸ = 1/256.", null, 0.00001),
  num(String.raw`The pressure on a sail is modelled by $P=0.003v^2$. If the wind speed doubles, by what factor does the pressure increase?`, 4, "2² = 4."),
];
