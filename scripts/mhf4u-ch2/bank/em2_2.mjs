// 2.2 The Factor Theorem — 20 easy + 20 medium questions
import { mc, num, tf, fill } from "./kit.mjs";
import { graph, P } from "./fig.mjs";

export const E = [
  tf(String.raw`If $P(3)=0$, then $x-3$ is a factor of $P(x)$.`, true, "The factor theorem."),
  mc(String.raw`Which is a factor of $x^2-5x+6$?`, String.raw`$x-2$`, [String.raw`$x+2$`, String.raw`$x+3$`, String.raw`$x-6$`], "P(2) = 4 − 10 + 6 = 0."),
  num(String.raw`Evaluate $P(1)$ for $P(x)=x^3-4x^2+x+2$.`, 0, "1 − 4 + 1 + 2: so x − 1 is a factor."),
  mc(String.raw`A zero at $x=-4$ gives which factor?`, String.raw`$x+4$`, [String.raw`$x-4$`, String.raw`$4x$`, String.raw`$x-\tfrac14$`], "x − (−4)."),
  mc(String.raw`A zero at $x=\tfrac23$ gives which integer factor?`, String.raw`$3x-2$`, [String.raw`$2x-3$`, String.raw`$3x+2$`, String.raw`$x-3$`], "3x − 2 = 0 gives x = ⅔."),
  num(String.raw`How many integer candidates does the integral zero theorem give for $x^3+2x^2-x-6$?`, 8, "±1, ±2, ±3, ±6."),
  tf(String.raw`$x+1$ is a factor of $x^3+1$.`, true, "(−1)³ + 1 = 0."),
  tf(String.raw`$x-1$ is a factor of $x^3+1$.`, false, "1 + 1 = 2 ≠ 0."),
  mc(String.raw`Factor $x^3-x$ completely.`, String.raw`$x(x-1)(x+1)$`, [String.raw`$x(x^2+1)$`, String.raw`$(x-1)^2(x+1)$`, String.raw`$x^2(x-1)$`], "Common factor, then difference of squares."),
  mc(String.raw`Factor $x^3+x^2-x-1$.`, String.raw`$(x+1)^2(x-1)$`, [String.raw`$(x-1)^2(x+1)$`, String.raw`$(x+1)(x^2+1)$`, String.raw`$(x-1)(x^2+1)$`], "x²(x + 1) − (x + 1) = (x + 1)(x² − 1)."),
  num(String.raw`Find $k$ so that $x-1$ is a factor of $x^2+kx-3$.`, 2, "1 + k − 3 = 0."),
  mc(String.raw`Which value is a zero of $x^3-8$?`, String.raw`$2$`, [String.raw`$-2$`, String.raw`$8$`, String.raw`$4$`], "2³ = 8."),
  num(String.raw`How many of the values $1$ and $-1$ are zeros of $x^3-x^2-x+1$?`, 2, "P(1) = 0 and P(−1) = 0."),
  mc("The graph crosses the x-axis only at the marked point. Which binomial is a factor?", String.raw`$x-3$`, [String.raw`$x+3$`, String.raw`$x-1$`, String.raw`$x+1$`], "x-intercept 3 ↔ factor x − 3.", graph((x) => 0.5 * (x - 3) * (x * x + 1), { xmin: -1, xmax: 4.5, ymin: -8, ymax: 8 }, [P(3, 0)])),
  tf(String.raw`Any integer zero of $x^3-3x+5$ must divide 5.`, true, "Integral zero theorem."),
  num(String.raw`Find the zero of the factor $2x-5$.`, 2.5, "2x = 5.", null, 0.001),
  mc(String.raw`What is the quadratic factor of $x^3-1$?`, String.raw`$x^2+x+1$`, [String.raw`$x^2-x+1$`, String.raw`$x^2+1$`, String.raw`$x^2-1$`], "Divide by x − 1: 1, 1, 1."),
  num(String.raw`Evaluate $P(-2)$ for $P(x)=x^3+2x^2-x-2$.`, 0, "−8 + 8 + 2 − 2."),
  mc("Which factored form matches the graph (leading coefficient 1)?", String.raw`$(x+1)(x-1)(x-2)$`, [String.raw`$(x-1)(x+1)(x+2)$`, String.raw`$(x+1)^2(x-2)$`, String.raw`$x(x-1)(x-2)$`], "x-intercepts −1, 1, 2.", graph((x) => (x + 1) * (x - 1) * (x - 2), { xmin: -2, xmax: 3, ymin: -4, ymax: 4 })),
  fill(String.raw`By the factor theorem, $x-b$ is a factor of $P(x)$ exactly when $P(b)=$ ___.`, ["0", "zero"], "Remainder 0."),
];

export const M = [
  mc(String.raw`Factor $x^3-2x^2-x+2$.`, String.raw`$(x-2)(x-1)(x+1)$`, [String.raw`$(x+2)(x-1)(x+1)$`, String.raw`$(x-2)(x^2+1)$`, String.raw`$(x-2)^2(x+1)$`], "x²(x − 2) − (x − 2)."),
  mc(String.raw`Factor $x^3-x^2-8x+12$.`, String.raw`$(x-2)^2(x+3)$`, [String.raw`$(x+2)^2(x-3)$`, String.raw`$(x-2)(x+2)(x+3)$`, String.raw`$(x-1)(x-3)(x+4)$`], "P(2) = 0; quotient x² + x − 6 = (x + 3)(x − 2)."),
  num(String.raw`Find $k$ so that $x+2$ is a factor of $x^3+kx^2+4$.`, 1, "−8 + 4k + 4 = 0."),
  num(String.raw`Find $k$ so that $x-3$ is a factor of $2x^3-7x^2+kx+3$.`, 2, "54 − 63 + 3k + 3 = 0."),
  num(String.raw`How many rational candidates does the rational zero theorem give for $2x^3+x^2-5x+3$?`, 8, "±1, ±3, ±½, ±3/2."),
  mc(String.raw`Factor $3x^3-4x^2-5x+2$.`, String.raw`$(x-2)(3x-1)(x+1)$`, [String.raw`$(x+2)(3x+1)(x-1)$`, String.raw`$(x-2)(3x+1)(x-1)$`, String.raw`$(x-1)(3x-2)(x+1)$`], "P(2) = 0; quotient 3x² + 2x − 1."),
  num(String.raw`How many real zeros does $x^3+2x^2+3x+6$ have?`, 1, "(x + 2)(x² + 3)."),
  mc(String.raw`Factor $x^4-29x^2+100$.`, String.raw`$(x-2)(x+2)(x-5)(x+5)$`, [String.raw`$(x^2-4)(x^2+25)$`, String.raw`$(x-2)^2(x-5)^2$`, String.raw`$(x-4)(x+4)(x-25)$`], "(x² − 4)(x² − 25)."),
  num(String.raw`Find the sum of the zeros of $x^3-7x-6$.`, 0, "(x + 1)(x + 2)(x − 3): −1 − 2 + 3."),
  mc("Which factored form matches the quartic shown (leading coefficient 1)?", String.raw`$(x+2)(x+1)(x-1)(x-3)$`, [String.raw`$(x-2)(x-1)(x+1)(x+3)$`, String.raw`$(x+2)(x+1)(x-1)^2$`, String.raw`$(x+2)(x-1)(x-3)$`], "Four crossings: −2, −1, 1, 3.", graph((x) => (x + 2) * (x + 1) * (x - 1) * (x - 3), { xmin: -3, xmax: 4, ymin: -16, ymax: 12 })),
  tf(String.raw`$x-2$ is a factor of $x^4-16$.`, true, "16 − 16 = 0."),
  num(String.raw`Find $k$ so that $x+1$ is a factor of $x^4+kx^2+3$.`, -4, "1 + k + 3 = 0."),
  mc(String.raw`Factor $x^3+27$.`, String.raw`$(x+3)(x^2-3x+9)$`, [String.raw`$(x+3)(x^2+3x+9)$`, String.raw`$(x-3)(x^2+3x+9)$`, String.raw`$(x+3)^3$`], "Sum of cubes."),
  mc(String.raw`Which is a zero of $2x^3-3x^2-3x+2$?`, String.raw`$\tfrac12$`, [String.raw`$\tfrac13$`, String.raw`$\tfrac32$`, String.raw`$-\tfrac12$`], "P(½) = ¼ − ¾ − 3/2 + 2 = 0."),
  num(String.raw`$x^3+ax^2-4x-4$ has the factor $x-2$. Find $a$.`, 1, "8 + 4a − 8 − 4 = 0."),
  mc(String.raw`Factor $4x^3-8x^2-x+2$.`, String.raw`$(x-2)(2x-1)(2x+1)$`, [String.raw`$(x-2)(4x^2+1)$`, String.raw`$(x+2)(2x-1)(2x+1)$`, String.raw`$(x-2)(2x-1)^2$`], "4x²(x − 2) − (x − 2)."),
  num(String.raw`How many distinct real zeros does $x^4-2x^2+1$ have?`, 2, "(x² − 1)² = (x − 1)²(x + 1)²."),
  mc("The cubic shown has leading coefficient 3. Which factored form fits?", String.raw`$(x+1)(3x-1)(x-2)$`, [String.raw`$3(x+1)(x-1)(x-2)$`, String.raw`$(x-1)(3x+1)(x+2)$`, String.raw`$(x+1)(x-3)(x-2)$`], "Zeros −1, ⅓, 2.", graph((x) => (x + 1) * (3 * x - 1) * (x - 2), { xmin: -2, xmax: 3, ymin: -6, ymax: 8 }, [P(-1, 0, false), P(1 / 3, 0, false), P(2, 0, false)])),
  tf("Every cubic with integer coefficients has a rational zero.", false, "e.g. x³ − 2 has only the irrational real zero ∛2."),
  num(String.raw`Find $k$ so that $2x-1$ is a factor of $2x^3+x^2+kx-2$.`, 3, "P(½) = ¼ + ¼ + k/2 − 2 = 0."),
];
