// 1.3 Equations and Graphs of Polynomial Functions — 20 hard questions
import { mc, ms, num, tf } from "./kit.mjs";
import { graph, P } from "./fig.mjs";

export const TOPIC = "1.3 Equations and Graphs of Polynomial Functions";
export const Q = [
  num(String.raw`How many integers $x$ with $-5\le x\le5$ satisfy $(x+2)(x-1)(x-4)<0$?`, 5, "Solution set x < −2 or 1 < x < 4: −5, −4, −3, 2, 3."),
  num(String.raw`A quartic has a zero of order 2 at $-1$, zeros at 2 and 4, and passes through $(0,16)$. Find $f(1)$.`, 24, "a(1)(−2)(−4) = 8a = 16 → a = 2; f(1) = 2(4)(−1)(−3) = 24."),
  num(String.raw`$f(x)=(x-1)(x-2)(x-k)$ has y-intercept $-12$. Find $k$.`, 6, "(−1)(−2)(−k) = −2k = −12."),
  num(String.raw`The cubic shown crosses the x-axis at $-2$, touches it at 3, and has y-intercept 9. Find $f(4)$.`, 3, "f = a(x + 2)(x − 3)²; 18a = 9 → a = ½; f(4) = ½(6)(1) = 3.", graph((x) => 0.5 * (x + 2) * (x - 3) ** 2, { xmin: -3, xmax: 4.5, ymin: -5, ymax: 12 }, [P(-2, 0), P(3, 0), P(0, 9)], { step: { x: 1, y: 2 } })),
  ms(String.raw`Where is $f(x)=(x+3)(x-1)^2(x-4)$ negative? Select all.`, [String.raw`$x<-3$`, String.raw`$-3<x<1$`, String.raw`$1<x<4$`, String.raw`$x>4$`], [1, 2], "f(0) = −12 < 0; the sign does not change at the double zero 1."),
  num(String.raw`How many integers satisfy $x^2(x-3)(x+2)\le0$?`, 6, "−2 ≤ x ≤ 3: −2, −1, 0, 1, 2, 3."),
  num("The graph shows a polynomial of least degree that touches the x-axis at −1 and crosses with a flat bend at 2. What is its degree?", 5, "Order 2 at −1 and order 3 at 2: 2 + 3.", graph((x) => 0.1 * (x + 1) ** 2 * (x - 2) ** 3, { xmin: -2.5, xmax: 3.2, ymin: -3, ymax: 3 }, [P(-1, 0), P(2, 0)])),
  tf(String.raw`A polynomial has zeros only at 1 and 4. If $f(0)>0$ and $f(2)<0$, then the zero at 1 has odd order.`, true, "The sign changes across x = 1."),
  num(String.raw`$f(x)=(x-1)(x+2)(x-k)$ has y-intercept 10. Find $k$.`, 5, "(−1)(2)(−k) = 2k = 10."),
  num(String.raw`An open box made from a 10 by 16 sheet has volume $V=x(10-2x)(16-2x)$. Find $V(2)$.`, 144, "2 · 6 · 12."),
  mc(String.raw`Which cubic has a zero at $-1$, a double zero at 2, and passes through $(1,-8)$?`, String.raw`$y=-4(x+1)(x-2)^2$`, [String.raw`$y=4(x+1)(x-2)^2$`, String.raw`$y=-4(x-1)(x+2)^2$`, String.raw`$y=-2(x+1)(x-2)^2$`], "a(2)(1) = 2a = −8 → a = −4."),
  num(String.raw`Find the sum of the zeros of $f(x)=2x^3-8x^2-10x$.`, 4, "2x(x − 5)(x + 1): 0 + 5 − 1."),
  num(String.raw`The quartic shown is symmetric about the y-axis, has zeros $\pm1$ and $\pm3$, and y-intercept 4.5. Find $f(2)$.`, -7.5, "f = a(x² − 1)(x² − 9); 9a = 4.5 → a = ½; f(2) = ½(3)(−5).", graph((x) => 0.5 * (x * x - 1) * (x * x - 9), { xmin: -3.5, xmax: 3.5, ymin: -9, ymax: 6 }, [P(0, 4.5)], { step: { x: 1, y: 1 } }), 0.001),
  mc(String.raw`A quartic has a zero of order 3 at 2, a zero at $-1$, and $f(0)=8$. Describe its end behaviour.`, "down at both ends", ["up at both ends", "Q3 → Q1", "Q2 → Q4"], "a(−2)³(1) = −8a = 8 → a = −1."),
  num(String.raw`How many distinct real zeros does $f(x)=x^4-5x^2+4$ have?`, 4, "(x² − 1)(x² − 4): ±1, ±2."),
  num(String.raw`What is the smallest positive integer $x$ with $x^3>4x$?`, 3, "x(x − 2)(x + 2) > 0 for x > 2."),
  tf(String.raw`$f(x)=-x^3(x-2)^2$ is positive for every $x<0$.`, true, "−(negative)(positive) = positive."),
  mc("Which equation produces the graph shown?", String.raw`$y=0.2(x+2)^2(x-1)(x-3)$`, [String.raw`$y=0.2(x-2)^2(x+1)(x+3)$`, String.raw`$y=-0.2(x+2)^2(x-1)(x-3)$`, String.raw`$y=0.2(x+2)(x-1)(x-3)$`], "Touches at −2, crosses at 1 and 3, up at both ends; f(0) = 0.2·4·3 = 2.4.", graph((x) => 0.2 * (x + 2) ** 2 * (x - 1) * (x - 3), { xmin: -3, xmax: 3.8, ymin: -5, ymax: 6 }, [P(0, 2.4)])),
  num(String.raw`$f(x)=a(x-1)(x+1)(x-3)$ passes through $(2,6)$. Find $f(0)$.`, -6, "a(1)(3)(−1) = −3a = 6 → a = −2; f(0) = −2(−1)(1)(−3) = −6."),
  num(String.raw`$f(x)=(x-a)(x-b)(x-c)$ has three consecutive positive integer zeros and y-intercept $-6$. Find the largest zero.`, 3, "abc = 6 with consecutive integers: 1, 2, 3."),
];
