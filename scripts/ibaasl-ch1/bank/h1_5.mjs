// 1.5 The Binomial Theorem — 20 hard questions
import { ms, num, tf } from "./kit.mjs";
import { pascalDoc, barsDoc } from "../figs.mjs";

const S = String.raw;

export const TOPIC = "1.5 The Binomial Theorem";
export const Q = [
  num(S`Find the constant term in $\left(2x-\frac1x\right)^6$.`, -160, "Power 6 − 2r = 0, r = 3: C(6, 3)(2³)(−1)³."),
  num(S`Find the coefficient of $x^5$ in $(1+x)^5(1-x)$.`, -4, "1·1 + (−1)·C(5, 4)."),
  num(S`The coefficient of $x^2$ in $(1+x)^n$ is 45. Find $n$.`, 10, "n(n − 1)/2 = 45."),
  num(S`The coefficient of $x$ in $(1+kx)^5$ is 15. Find the coefficient of $x^2$.`, 90, "5k = 15, k = 3; C(5, 2)(9)."),
  num(S`Find the term independent of $x$ in $\left(x^2+\frac1x\right)^9$.`, 84, "18 − 3r = 0, r = 6: C(9, 6)."),
  num(S`Find the coefficient of $x^3$ in $(x-3)^5$. Row 5 of Pascal's triangle is highlighted.`, 90, "r = 2: C(5, 2)(−3)² = 10(9).", pascalDoc(5, [[5, 0], [5, 1], [5, 2], [5, 3], [5, 4], [5, 5]])),
  num(S`Use the first three terms of the expansion of $(1+x)^6$ to estimate $1.03^6$ (4 d.p.).`, 1.1935, "1 + 6(0.03) + 15(0.0009).", null, 0.0001),
  tf(S`The middle term of $(a+b)^8$ has coefficient 70.`, true, "C(8, 4) = 70."),
  num(S`Find the coefficient of $x^4$ in $(x^2-2)^5$.`, -80, "2(5 − r) = 4, r = 3: C(5, 3)(−2)³."),
  num("The two highlighted entries in row 6 are equal. What is their value?", 15, "C(6, 2) = C(6, 4).", pascalDoc(6, [[6, 2], [6, 4]])),
  num(S`Find the coefficient of $x^2$ in $(1+x)^2(1+2x)^3$.`, 25, "(1 + 2x + x²)(1 + 6x + 12x² + …): 12 + 12 + 1."),
  num(S`The coefficient of $x^3$ in $(1+ax)^6$ is $-160$. Find $a$.`, -2, "20a³ = −160."),
  num(S`In $(1+2x)^8$, find (coefficient of $x^2$) ÷ (coefficient of $x$).`, 7, "C(8, 2)(4) ÷ C(8, 1)(2) = 112/16."),
  ms(S`Which statements about the expansion of $(x-2)^4$ are true? Select all.`, ["it has 5 terms", "the constant term is 16", "the coefficient of x³ is −8", "the coefficient of x² is −24"], [0, 1, 2], "The x² coefficient is C(4, 2)(4) = 24."),
  num(S`The bars show the coefficients of $(2+x)^4$ for $r=0$ to $4$. What is the largest coefficient?`, 32, "16, 32, 24, 8, 1.", barsDoc([16, 32, 24, 8, 1], { start: 0, color: "#0e7490", xlab: "r" })),
  num(S`Use $(100-1)^3$ to evaluate $99^3$.`, 970299, "1000000 − 30000 + 300 − 1."),
  num(S`Find the sum of the coefficients of $(2x-1)^7$.`, 1, "Put x = 1: 1⁷."),
  num(S`Find the coefficient of $x$ in $\left(x+\frac{2}{x^2}\right)^7$.`, 84, "7 − 3r = 1, r = 2: C(7, 2)(2²)."),
  num("The figure shows rows 0 to 8 of Pascal's triangle. What is the sum of the entries in row 8?", 256, "Row n adds up to 2ⁿ.", pascalDoc(8, [[8, 0], [8, 1], [8, 2], [8, 3], [8, 4], [8, 5], [8, 6], [8, 7], [8, 8]])),
  tf(S`$(a+b)^n$ and $(b+a)^n$ have the same list of coefficients.`, true, "The rows of Pascal's triangle are symmetric."),
];
