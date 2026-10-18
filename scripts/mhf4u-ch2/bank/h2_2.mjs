// 2.2 The Factor Theorem — 20 hard questions
import { mc, num, tf } from "./kit.mjs";
import { graph, P } from "./fig.mjs";

export const TOPIC = "2.2 The Factor Theorem";
export const Q = [
  num(String.raw`$x-2$ and $x+3$ are factors of $x^3+ax^2+bx-12$. Find $a$.`, 3, "P(2) = 0: 2a + b = 2. P(−3) = 0: 3a − b = 13."),
  num(String.raw`$x-2$ and $x+5$ are factors of $x^3+4x^2-7x-10$. Find the third zero.`, -1, "Divide by (x − 2)(x + 5) = x² + 3x − 10: quotient x + 1."),
  num(String.raw`Find the largest zero of $x^4+x^3-13x^2-x+12$.`, 3, "P(1) = P(−1) = 0; quotient x² + x − 12 = (x + 4)(x − 3).", graph((x) => (x * x - 1) * (x + 4) * (x - 3), { xmin: -5, xmax: 4, ymin: -40, ymax: 30 }, [], { step: { x: 1, y: 10 } })),
  num(String.raw`Find $k$ so that $x-2$ is a factor of $x^3-kx^2+(k+1)x-2$.`, 4, "8 − 4k + 2k + 2 − 2 = 8 − 2k = 0."),
  mc("The quartic shown has leading coefficient 1 and touches the x-axis once. Which factored form fits?", String.raw`$(x-1)^2(x+2)(x-3)$`, [String.raw`$(x+1)^2(x-2)(x+3)$`, String.raw`$(x-1)(x+2)(x-3)$`, String.raw`$(x-1)^2(x+2)^2$`], "Touches at 1, crosses at −2 and 3.", graph((x) => (x - 1) ** 2 * (x + 2) * (x - 3), { xmin: -3, xmax: 4, ymin: -16, ymax: 14 })),
  num(String.raw`Find the product of the zeros of $x^3-3x^2-10x+24$.`, -24, "P(2) = 0; quotient (x − 4)(x + 3): 2 · 4 · (−3)."),
  tf(String.raw`$x+a$ is a factor of $x^3+a^3$ for every real $a$.`, true, "P(−a) = −a³ + a³ = 0."),
  tf(String.raw`$x+a$ is a factor of $x^4+a^4$ for every real $a\ne0$.`, false, "P(−a) = 2a⁴ ≠ 0."),
  num(String.raw`For how many whole numbers $n$ from 1 to 10 is $x+1$ a factor of $x^n+1$?`, 5, "(−1)ⁿ + 1 = 0 for odd n."),
  mc(String.raw`Factor $x^6-1$ completely over the integers.`, String.raw`$(x-1)(x+1)(x^2+x+1)(x^2-x+1)$`, [String.raw`$(x^3-1)^2$`, String.raw`$(x-1)(x+1)(x^4+x^2+1)$`, String.raw`$(x^2-1)(x^2+1)^2$`], "(x³ − 1)(x³ + 1), then each cube pattern."),
  num(String.raw`Find the sum of the rational zeros of $6x^3-7x^2-x+2$ (2 decimals).`, 1.1667, "P(1) = 0; quotient (3x − 2)(2x + 1): 1 + ⅔ − ½.", null, 0.006),
  num("The cubic shown has leading coefficient 2. Find its y-intercept.", 6, "Zeros −3/2, 1, 2: (2x + 3)(x − 1)(x − 2); at x = 0: 3 · (−1)(−2).", graph((x) => (2 * x + 3) * (x - 1) * (x - 2), { xmin: -2, xmax: 3, ymin: -8, ymax: 10 }, [P(-1.5, 0), P(1, 0), P(2, 0)])),
  mc(String.raw`$(x-2)^2$ is a factor of $P(x)$. Which must be true?`, String.raw`$P(2)=0$ and the quotient $P(x)\div(x-2)$ also has the zero 2`, [String.raw`$P(4)=0$`, String.raw`$P(-2)=0$`, String.raw`$P(2)=4$`], "Dividing once leaves another factor x − 2."),
  num(String.raw`$x-1$ is a factor of $x^3+px^2+qx+2$, and dividing by $x+1$ leaves remainder 4. Find $q$.`, -3, "p + q = −3 and p − q = 3."),
  num(String.raw`How many rational candidates does the rational zero theorem give for $3x^4-x^2+4$?`, 12, "±1, ±2, ±4, ±⅓, ±⅔, ±4/3."),
  mc(String.raw`Factor $8x^3+27$.`, String.raw`$(2x+3)(4x^2-6x+9)$`, [String.raw`$(2x+3)(4x^2+6x+9)$`, String.raw`$(2x-3)(4x^2+6x+9)$`, String.raw`$(8x+27)(x^2+1)$`], "(2x)³ + 3³."),
  num(String.raw`How many distinct real zeros does $x^4+x^3+x+1$ have?`, 1, "(x + 1)(x³ + 1) = (x + 1)²(x² − x + 1)."),
  num("The cubic shown has leading coefficient −1. Find P(0).", -8, "Zeros −2, 1, 4: −(x + 2)(x − 1)(x − 4); at 0: −(2)(−1)(−4).", graph((x) => -(x + 2) * (x - 1) * (x - 4), { xmin: -3, xmax: 5, ymin: -20, ymax: 20 }, [P(-2, 0), P(1, 0), P(4, 0)], { step: { x: 1, y: 5 } })),
  tf("If the coefficients of a polynomial add up to 0, then x − 1 is a factor.", true, "The sum of the coefficients is P(1)."),
  num(String.raw`For which $k$ is $x-k$ a factor of both $x^2-5x+6$ and $x^2-7x+12$?`, 3, "Common zero: 3."),
];
