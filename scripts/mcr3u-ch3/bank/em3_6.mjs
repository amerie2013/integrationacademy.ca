// 3.6 The Zeros and the Discriminant — 20 easy + 20 medium questions
import { mc, ms, num, tf } from "./kit.mjs";
import { P, graph, planeDoc } from "./fig.mjs";

const V8 = { xmin: -6, xmax: 6, ymin: -6, ymax: 8 };

export const E = [
  num(String.raw`Find the discriminant of $x^2+6x+5$.`, 16, "36 − 20."),
  num(String.raw`How many real roots does $x^2+2x+5=0$ have?`, 0, "D = 4 − 20 < 0."),
  num(String.raw`How many real roots does $x^2-8x+16=0$ have?`, 1, "D = 0."),
  num(String.raw`How many real roots does $2x^2-3x-4=0$ have?`, 2, "D = 9 + 32 > 0."),
  tf("If D < 0, the quadratic equation has no real roots.", true, "√(negative) is not real."),
  mc("If D = 0, the equation has…", "one (double) real root", ["two real roots", "no real roots", "infinitely many roots"], "The ± part is 0."),
  num(String.raw`Find the discriminant of $3x^2-2x+1$.`, -8, "4 − 12."),
  num(String.raw`How many zeros does $y=2(x-1)^2-8$ have?`, 2, "Opens up from below the axis."),
  num(String.raw`How many zeros does $y=-(x+3)^2-1$ have?`, 0, "Opens down from below the axis."),
  num(String.raw`How many zeros does $y=5(x-2)^2$ have?`, 1, "Vertex on the axis."),
  mc("A quadratic with integer coefficients has D = 49. Its roots are…", "two rational numbers", ["two irrational numbers", "equal", "not real"], "49 is a perfect square."),
  num(String.raw`For which $k$ does $x^2+10x+k=0$ have one root?`, 25, "100 − 4k = 0."),
  tf("A perfect-square discriminant (integer coefficients) gives rational roots.", true, "√D is an integer."),
  num(String.raw`Find the discriminant of $x^2-7$.`, 28, "0 − 4(1)(−7)."),
  mc("What is the discriminant of the quadratic graphed?", "D = 0", ["D > 0", "D < 0", "cannot tell"], "It touches the x-axis once.", planeDoc({ view: V8, curves: [{ f: (x) => (x + 1) ** 2, color: "violet" }], points: [P(-1, 0)] })),
  mc("What can you say about the discriminant of the quadratic graphed?", "D < 0", ["D > 0", "D = 0", "D = 4"], "It never meets the x-axis.", graph((x) => x * x - 2 * x + 3, V8, [P(1, 2)])),
  num(String.raw`How many zeros does $y=x^2+1$ have?`, 0, "Always at least 1."),
  num(String.raw`How many zeros does $y=-x^2+4$ have?`, 2, "x = ±2."),
  mc("A quadratic with integer coefficients has D = 12. Its roots are…", "two irrational numbers", ["two rational numbers", "equal", "not real"], "12 is not a perfect square."),
  num(String.raw`Find the discriminant of $-x^2+4x-4$.`, 0, "16 − 16."),
];

export const M = [
  num(String.raw`What is the smallest integer $k$ for which $x^2+4x+k=0$ has no real roots?`, 5, "16 − 4k < 0 → k > 4."),
  num(String.raw`For which positive $k$ does $x^2+kx+49=0$ have one root?`, 14, "k² = 196."),
  num(String.raw`What is the largest integer $k$ for which $x^2-6x+k=0$ has two real roots?`, 8, "36 − 4k > 0 → k < 9."),
  num(String.raw`For which $k$ does $kx^2-8x+4=0$ have one root?`, 4, "64 − 16k = 0."),
  ms("Which equations have two real roots? Select all.", [String.raw`$x^2-5x+6=0$`, String.raw`$x^2+x+1=0$`, String.raw`$2x^2-4x+2=0$`, String.raw`$x^2-3=0$`, String.raw`$-x^2+2x+5=0$`], [0, 3, 4], "D = 1, −3, 0, 12, 24."),
  num(String.raw`How many zeros does $y=3(x+2)^2-12$ have?`, 2, "a > 0, k < 0."),
  mc(String.raw`The roots of $2x^2+5x-3=0$ are…`, "rational", ["irrational", "not real", "equal"], "D = 25 + 24 = 49."),
  mc(String.raw`The roots of $3x^2+x-1=0$ are…`, "irrational", ["rational", "not real", "equal"], "D = 1 + 12 = 13."),
  num(String.raw`Find the discriminant of $4x^2-12x+9$.`, 0, "144 − 144."),
  num(String.raw`For how many integers $k$ from $-10$ to $10$ does $x^2+kx+4=0$ have no real roots?`, 7, "k² < 16: −3, …, 3."),
  tf(String.raw`$x^2+kx-5=0$ has two real roots for every $k$.`, true, "D = k² + 20 > 0."),
  num(String.raw`For which $c$ does $y=-x^2+6x+c$ touch the x-axis once?`, -9, "36 + 4c = 0."),
  num("The graph shows y = x² − 4x + c for several c. For which c does it have exactly one zero?", 4, "D = 16 − 4c = 0.", planeDoc({ view: V8, curves: [0, 2, 4, 6].map((c, i) => ({ f: (x) => x * x - 4 * x + c, color: ["blue", "green", "amber", "red"][i] })), step: { x: 1, y: 1 } })),
  num(String.raw`How many zeros does $y=2x^2-8x+8$ have?`, 1, "2(x − 2)²."),
  mc("If a and c have opposite signs, the equation ax² + bx + c = 0 has…", "two real roots", ["no real roots", "one real root", "it depends on b"], "−4ac > 0, so D > 0."),
  num(String.raw`For which $k$ does $(k-1)x^2+4x+2=0$ have one root?`, 3, "16 − 8(k − 1) = 0."),
  num(String.raw`Find the discriminant of $x^2+(m+1)x+m$ when $m=3$.`, 4, "16 − 12."),
  tf(String.raw`$y=4(x-5)^2+0.1$ has a zero.`, false, "Its minimum is 0.1."),
  num("Read the graph: how many zeros does the function have?", 2, "Vertex (1, −2), opens up.", graph((x) => (x - 1) ** 2 - 2, V8, [P(1, -2)])),
  num(String.raw`What is the smallest positive integer $b$ for which $x^2+bx+10=0$ has real roots?`, 7, "b² ≥ 40."),
];
