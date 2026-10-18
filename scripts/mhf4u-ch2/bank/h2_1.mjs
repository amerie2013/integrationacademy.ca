// 2.1 Dividing Polynomials and the Remainder Theorem — 20 hard questions
import { mc, num, tf, mx } from "./kit.mjs";
import { graph, planeDoc, P } from "./fig.mjs";

export const TOPIC = "2.1 Dividing Polynomials and the Remainder Theorem";
export const Q = [
  num(String.raw`$x^3+ax^2+2x+b$ leaves remainder 3 when divided by $x-1$ and $-15$ when divided by $x+2$. Find $a$.`, -1, "a + b = 0 and 4a + b = −3."),
  num(String.raw`$2x^3-3x^2+ax+b$ leaves remainder 1 when divided by $x-1$ and 5 when divided by $x-2$. Find $b$.`, 3, "a + b = 2 and 2a + b = 1: a = −1, b = 3."),
  num(String.raw`$P(2)=5$ and $P(-2)=1$. The remainder when $P(x)$ is divided by $x^2-4$ is $mx+n$. Find $m$.`, 1, "2m + n = 5, −2m + n = 1."),
  num(String.raw`Find the remainder when $x^{99}+x^3+1$ is divided by $x+1$.`, -1, "−1 − 1 + 1."),
  num(String.raw`$x^3+kx^2-x+6$ leaves the same remainder when divided by $x-1$ and by $x+2$. Find $k$.`, 2, "P(1) = k + 6, P(−2) = 4k: k + 6 = 4k."),
  num(String.raw`Find the remainder when $8x^3-4x^2+2x-1$ is divided by $2x-1$.`, 0, "P(½) = 1 − 1 + 1 − 1."),
  mx(String.raw`Find the quotient of $(6x^3+5x^2-12x+4)\div(2x-1)$.`, "3*x^2+4*x-4", "Synthetic with ½ gives 6, 8, −8 (remainder 0); divide by 2."),
  num("The graph of y = P(x) passes through the two marked points. The remainder when P(x) is divided by (x + 1)(x − 2) is mx + n. Find n.", 3, "−m + n = 6 and 2m + n = −3: m = −3, n = 3.", graph((x) => x ** 3 - 2 * x * x - 4 * x + 5, { xmin: -2, xmax: 3.5, ymin: -6, ymax: 10 }, [P(-1, 6), P(2, -3)])),
  num(String.raw`Dividing $P(x)$ by $x-3$ gives quotient $x^2+2x-1$ and remainder 4. Find $P(1)$.`, 0, "(1 − 3)(1 + 2 − 1) + 4 = −4 + 4."),
  tf(String.raw`If $P(5)=0$, then dividing $P(x)$ by $x-5$ leaves remainder 0.`, true, "Remainder theorem with P(5) = 0."),
  num(String.raw`Find the sum of the coefficients of the quotient of $(x^4+2x^3-x+3)\div(x-1)$.`, 9, "Synthetic: 1, 3, 3, 2 (remainder 5)."),
  mc("The graph of y = P(x) is shown. Which divisor leaves remainder 0?", String.raw`$x+2$`, [String.raw`$x-2$`, String.raw`$x+1$`, String.raw`$x-3$`], "P(−2) = 0 on the graph.", graph((x) => 0.5 * (x + 2) * (x - 1) ** 2, { xmin: -3, xmax: 3, ymin: -4, ymax: 6 })),
  num(String.raw`Find the remainder when $(x+1)^5$ is divided by $x$.`, 1, "P(0) = 1."),
  num(String.raw`Find the remainder when $(2x+1)^3$ is divided by $x-1$.`, 27, "3³."),
  num(String.raw`$3x^3+x^2+kx-4$ leaves the same remainder when divided by $x-1$ and by $x+1$. Find $k$.`, -3, "P(1) = k, P(−1) = −6 − k."),
  num(String.raw`Find the remainder when $(x^2+x+1)^2$ is divided by $x+1$.`, 1, "(1 − 1 + 1)² = 1."),
  mc("A degree-5 polynomial is divided by a degree-2 polynomial. What are the degrees of the quotient and the remainder?", "quotient 3, remainder at most 1", ["quotient 3, remainder 2", "quotient 2, remainder at most 1", "quotient 3, remainder 0 always"], "Degrees subtract; the remainder has lower degree than the divisor."),
  num(String.raw`Dividing $P(x)$ by $2x-1$ leaves the remainder shown on the graph. What is it?`, 2, "The remainder is P(½).", graph((x) => 4 * x ** 3 - 2 * x + 2.5, { xmin: -1.5, xmax: 1.5, ymin: -4, ymax: 6 }, [P(0.5, 2)], { step: { x: 0.5, y: 1 } })),
  num(String.raw`For which $a\ne0$ does $x^3-2x^2+3$ leave remainder 3 when divided by $x-a$?`, 2, "a³ − 2a² = 0 → a = 2.", planeDoc({ view: { xmin: -1.5, xmax: 3, ymin: -2, ymax: 6 }, curves: [{ f: (x) => x ** 3 - 2 * x * x + 3, color: "violet" }, { f: () => 3, color: "green" }], step: { x: 0.5, y: 1 } })),
  mc(String.raw`$P(x)$ leaves remainder 4 when divided by $x-1$. Which must be true?`, String.raw`$P(x)-4$ is divisible by $x-1$`, [String.raw`$P(4)=1$`, String.raw`$P(x)+4$ is divisible by $x-1$`, String.raw`$P(0)=4$`], "P(1) − 4 = 0."),
];
