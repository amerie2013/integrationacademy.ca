// 3.4 The Zeros and the Discriminant — 20 hard questions
import { mc, num, tf } from "./kit.mjs";
import { P, graph, planeDoc } from "./fig.mjs";

const V8 = { xmin: -6, xmax: 6, ymin: -6, ymax: 8 };

export const TOPIC = "3.4 The Zeros and the Discriminant";
export const Q = [
  num(String.raw`For which nonzero $k$ does $x^2+(k+2)x+2k+1=0$ have exactly one root?`, 4, "D = k² − 4k = 0."),
  num(String.raw`How many integers $k$ make $kx^2+4x+k=0$ a quadratic with two real roots?`, 2, "16 − 4k² > 0, k ≠ 0: k = ±1."),
  mc(String.raw`How many real roots does $x^2-2mx+m^2-1=0$ have?`, "always two, for every m", ["always one", "none for some m", "it depends on the sign of m"], "D = 4m² − 4m² + 4 = 4."),
  num(String.raw`$y=x^2+bx+9$ touches the x-axis and $b<0$. Find $b$.`, -6, "b² = 36."),
  num(String.raw`$h(t)=-4.9t^2+20t+2$. What is the greatest height it can reach (2 decimals)? Use the discriminant of $h(t)=H$.`, 2 + 400 / 19.6, "400 − 19.6(H − 2) ≥ 0.", null, 0.01),
  num(String.raw`For which $c$ are the zeros of $y=c-2(x+1)^2$ 4 units apart?`, 8, "Zeros −1 ± √(c/2): 2√(c/2) = 4.", graph((x) => 8 - 2 * (x + 1) ** 2, { xmin: -6, xmax: 4, ymin: -6, ymax: 10 }, [P(-3, 0), P(1, 0), P(-1, 8)])),
  tf("If ac < 0, the equation ax² + bx + c = 0 has two real roots.", true, "D = b² − 4ac > 0."),
  num(String.raw`For how many integers $m$ from $-10$ to $10$ does $mx^2-6x+3=0$ have two real roots?`, 12, "36 − 12m > 0 → m < 3, m ≠ 0: −10, …, 2 except 0."),
  num(String.raw`The discriminant of $x^2-(a+b)x+ab$ simplifies to $(a-b)^2$. Evaluate it for $a=7$, $b=2$.`, 25, "(7 − 2)²."),
  num("The graph shows y = a(x − 2)² + 3 for several a. How many zeros does the member with a = −1.5 have?", 2, "a < 0 and k > 0.", planeDoc({ view: V8, curves: [-1.5, -0.5, 1].map((a, i) => ({ f: (x) => a * (x - 2) ** 2 + 3, color: ["red", "amber", "blue"][i] })), points: [P(2, 3)] })),
  num(String.raw`For which $k$ does $y=x^2-kx+k-1$ have a double root?`, 2, "D = (k − 2)²."),
  mc(String.raw`For every real $k$, $x^2+kx+k^2+1=0$ has…`, "no real roots", ["two real roots", "one real root", "roots that depend on k"], "D = −3k² − 4 < 0."),
  num(String.raw`For which $c$ are the zeros of $x^2-6x+c$ 4 units apart?`, 5, "Distance 2√(9 − c) = 4."),
  num("The horizontal line y = k touches y = x² − 4x + 7 exactly once. Find k.", 3, "The vertex (2, 3).", graph((x) => x * x - 4 * x + 7, V8, [P(2, 3)], { lines: [{ m: 0, b: 3, color: "amber", dash: true }] })),
  num(String.raw`For which positive $p$ does $2x^2-px+8=0$ have equal roots?`, 8, "p² = 64."),
  num(String.raw`A rocket's height is $h(t)=-5t^2+40t$. What is the smallest whole-number height it never reaches?`, 81, "Maximum 80."),
  tf("A quadratic with rational coefficients can have exactly one irrational root.", false, "Irrational roots come in conjugate pairs."),
  num(String.raw`How many of $x^2+3x+1$, $x^2+2x+1$, $x^2+x+1$, $x^2+1$ have real zeros?`, 2, "D = 5, 0, −3, −4."),
  num("The line y = k crosses y = −(x − 1)² + 5 twice. What is the largest integer k?", 4, "Twice when k < 5.", graph((x) => -((x - 1) ** 2) + 5, V8, [P(1, 5)])),
  num(String.raw`Find the sum of all $k$ for which $x^2+2kx+k+6=0$ has a double root.`, 1, "4k² − 4(k + 6) = 0 → k = 3, −2."),
];
