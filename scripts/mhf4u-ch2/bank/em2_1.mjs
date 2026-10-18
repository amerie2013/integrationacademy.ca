// 2.1 Dividing Polynomials and the Remainder Theorem — 20 easy + 20 medium questions
import { mc, num, tf, fill, mx } from "./kit.mjs";
import { graph, P } from "./fig.mjs";

export const E = [
  num(String.raw`Find the remainder when $x^3+x+1$ is divided by $x-1$.`, 3, "P(1) = 1 + 1 + 1."),
  num(String.raw`Find the remainder when $x^2-4x+7$ is divided by $x-2$.`, 3, "P(2) = 4 − 8 + 7.", graph((x) => x * x - 4 * x + 7, { xmin: -1, xmax: 5, ymin: -1, ymax: 10 }, [P(2, 3)])),
  num(String.raw`Find the remainder when $2x^3-x^2+5$ is divided by $x+1$.`, 2, "P(−1) = −2 − 1 + 5."),
  mc(String.raw`When dividing by $x+4$ with synthetic division, which number goes in the box?`, String.raw`$-4$`, [String.raw`$4$`, String.raw`$1$`, String.raw`$\tfrac14$`], "x + 4 = x − (−4)."),
  tf(String.raw`The remainder when $P(x)$ is divided by $x-b$ equals $P(b)$.`, true, "The remainder theorem."),
  num("A quartic is divided by a linear binomial. What is the degree of the quotient?", 3, "One less than 4."),
  mx(String.raw`Find the quotient of $(x^2+8x+15)\div(x+3)$.`, "x+5", "(x + 3)(x + 5)."),
  mx(String.raw`Find the quotient of $(x^2-x-20)\div(x-5)$.`, "x+4", "(x − 5)(x + 4)."),
  num(String.raw`Find the remainder when $x^3-27$ is divided by $x-3$.`, 0, "27 − 27."),
  mc(String.raw`Which coefficients start the synthetic division of $x^3-2x+5$?`, "1, 0, −2, 5", ["1, −2, 5", "1, −2, 5, 0", "0, 1, −2, 5"], "A 0 holds the place of x²."),
  num(String.raw`$P(x)=(x+2)(x^2-3)+7$. Find $P(-2)$.`, 7, "The product is 0 at x = −2."),
  tf(String.raw`When dividing by $x-3$, the remainder could be $x+1$.`, false, "The remainder must have lower degree than x − 3: a constant."),
  num(String.raw`Find the remainder when $4x^2+3x-2$ is divided by $x+2$.`, 8, "16 − 6 − 2."),
  mc("The graph of y = P(x) passes through the marked point. What is the remainder when P(x) is divided by x − 3?", String.raw`$-2$`, [String.raw`$3$`, String.raw`$0$`, String.raw`$2$`], "The remainder is P(3).", graph((x) => x ** 3 - 4 * x * x + x + 4, { xmin: -1.5, xmax: 4, ymin: -6, ymax: 6 }, [P(3, -2)])),
  num(String.raw`Find the remainder when $x^4+1$ is divided by $x-2$.`, 17, "16 + 1."),
  mc("In synthetic division, after multiplying by b you:", "add", ["subtract", "divide", "multiply again"], "That is why it uses b instead of −b."),
  num(String.raw`Find the remainder when $3x^2-5x+1$ is divided by $x-1$.`, -1, "3 − 5 + 1."),
  mx(String.raw`Find the quotient of $(2x^2+7x+3)\div(x+3)$.`, "2*x+1", "(x + 3)(2x + 1)."),
  num(String.raw`Find the remainder when $x^3+2x^2+3x+4$ is divided by $x+1$.`, 2, "−1 + 2 − 3 + 4."),
  fill(String.raw`When $P(x)$ is divided by $x-b$, the remainder equals $P($___$)$.`, ["b"], "Substitute x = b."),
];

export const M = [
  num(String.raw`Find the remainder when $2x^3+3x^2-4x+1$ is divided by $2x-1$.`, 0, "P(½) = ¼ + ¾ − 2 + 1."),
  num(String.raw`Find the remainder when $x^4-3x^2+x$ is divided by $x+2$.`, 2, "16 − 12 − 2."),
  num(String.raw`$x^3+kx-4$ leaves remainder 6 when divided by $x-2$. Find $k$.`, 1, "8 + 2k − 4 = 6."),
  num(String.raw`$2x^3+kx^2-3$ leaves remainder $-3$ when divided by $x+1$. Find $k$.`, 2, "−2 + k − 3 = −3."),
  mx(String.raw`Find the quotient of $(x^3-2x^2-5x+6)\div(x-1)$.`, "x^2-x-6", "Synthetic: 1, −1, −6, remainder 0."),
  mx(String.raw`Find the quotient of $(2x^3+x^2-8x+5)\div(x-1)$.`, "2*x^2+3*x-5", "Synthetic: 2, 3, −5, remainder 0."),
  num(String.raw`Find the remainder when $x^3-6x^2+11x-6$ is divided by $x-4$.`, 6, "64 − 96 + 44 − 6."),
  mx(String.raw`Find the quotient of $(x^4-1)\div(x-1)$.`, "x^3+x^2+x+1", "Coefficients 1, 0, 0, 0, −1 → 1, 1, 1, 1, 0."),
  num(String.raw`Find the remainder when $5x^3-2x+1$ is divided by $x+1$.`, -2, "−5 + 2 + 1."),
  mc(String.raw`Which is the division statement for $(x^2+3x+5)\div(x+1)$?`, String.raw`$x^2+3x+5=(x+1)(x+2)+3$`, [String.raw`$x^2+3x+5=(x+1)(x+3)+2$`, String.raw`$x^2+3x+5=(x+1)(x+2)+5$`, String.raw`$x^2+3x+5=(x+1)(x+4)+1$`], "(x + 1)(x + 2) = x² + 3x + 2."),
  num(String.raw`Dividing $P(x)$ by $x-2$ gives quotient $x^2+1$ and remainder $-3$. Find $P(0)$.`, -5, "P = (x − 2)(x² + 1) − 3."),
  num(String.raw`Find the remainder when $6x^2-x-4$ is divided by $3x+2$ (2 decimals).`, -0.6667, "P(−⅔) = 8/3 + 2/3 − 4.", null, 0.006),
  mc("Use the graph of y = P(x) to find the remainder when P(x) is divided by x + 2.", String.raw`$-1$`, [String.raw`$1$`, String.raw`$-2$`, String.raw`$3$`], "Read P(−2).", graph((x) => x ** 3 - 3 * x + 1, { xmin: -2.5, xmax: 2.5, ymin: -4, ymax: 4 }, [P(-2, -1)])),
  tf(String.raw`Dividing $x^5-1$ by $x-1$ leaves remainder 0.`, true, "1 − 1 = 0."),
  num(String.raw`Find the remainder when $x^{10}-x^5+3$ is divided by $x+1$.`, 5, "1 + 1 + 3."),
  num(String.raw`What is the last number in the synthetic division of $2x^3-5x^2+x-2$ by $x-3$?`, 10, "It is P(3) = 54 − 45 + 3 − 2."),
  mx(String.raw`Find the quotient of $(3x^3-x^2-6x+2)\div(3x-1)$.`, "x^2-2", "x²(3x − 1) − 2(3x − 1)."),
  num(String.raw`$x^3+x^2+kx+2$ leaves remainder $-4$ when divided by $x+2$. Find $k$.`, 1, "−8 + 4 − 2k + 2 = −4."),
  num(String.raw`Find the remainder when $x^3$ is divided by $x-0.5$.`, 0.125, "0.5³.", null, 0.0001),
  num("The graph of y = P(x) passes through the marked point. Find the remainder when P(x) is divided by x − 1.", 4, "P(1) = 4.", graph((x) => x ** 3 - x * x + x + 3, { xmin: -2, xmax: 2.5, ymin: -4, ymax: 10 }, [P(1, 4)])),
];
