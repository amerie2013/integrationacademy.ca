// 1.5 The Binomial Theorem — 20 easy + 20 medium questions
import { mc, ms, num, tf, fill, mx } from "./kit.mjs";
import { pascalDoc, barsDoc } from "../figs.mjs";

const S = String.raw;

export const E = [
  num(S`Evaluate $\binom42$.`, 6, "4!/(2!2!)."),
  num(S`Evaluate $\binom50$.`, 1, "There is one way to choose nothing."),
  num(S`Evaluate $\binom61$.`, 6, "Six ways to choose one item."),
  num(S`How many terms are in the expansion of $(x+y)^6$?`, 7, "n + 1."),
  num(S`Find the coefficient of $x^2$ in $(x+1)^4$.`, 6, "Row 4: 1, 4, 6, 4, 1."),
  num(S`Evaluate $0!$.`, 1, "0! is defined to be 1."),
  tf("Row 3 of Pascal's triangle is 1 3 3 1.", true, "(a + b)³ = a³ + 3a²b + 3ab² + b³."),
  mc(S`Which is the expansion of $(a+b)^2$?`, S`$a^2+2ab+b^2$`, [S`$a^2+b^2$`, S`$a^2+ab+b^2$`, S`$2a+2b$`], "Row 2: 1, 2, 1."),
  num(S`Find the constant term of $(x+4)^3$.`, 64, "4³."),
  num(S`Find the coefficient of $x$ in $(x+3)^2$.`, 6, "x² + 6x + 9."),
  fill("Each entry inside Pascal's triangle is the ___ of the two entries above it.", ["sum", "Sum", "total"], "e.g. 6 = 3 + 3."),
  num(S`Evaluate $\binom77$.`, 1, "One way to choose all 7."),
  num(S`Find the coefficient of $x^3$ in $(x+5)^3$.`, 1, "The leading term is x³."),
  num("Find the highlighted entry in row 5 of Pascal's triangle.", 10, "Row 5: 1, 5, 10, 10, 5, 1.", pascalDoc(5, [[5, 2]])),
  num(S`Using the highlighted entry, find the coefficient of $x^3y$ in $(x+y)^4$.`, 4, "Row 4, r = 1.", pascalDoc(4, [[4, 1]])),
  tf(S`$(x+y)^5$ has 5 terms.`, false, "It has 6."),
  num(S`Evaluate $\binom{10}{1}$.`, 10, "Ten ways to choose one."),
  mc(S`$\binom83$ is equal to:`, S`$\binom85$`, [S`$\binom84$`, S`$\binom53$`, S`$\binom38$`], "Choosing 3 to take is choosing 5 to leave."),
  num(S`Find the coefficient of $x$ in $(1+x)^9$.`, 9, "C(9, 1)."),
  num(S`Find the last term of $(x-1)^5$ in descending powers of $x$.`, -1, "(−1)⁵."),
];

export const M = [
  num(S`Evaluate $\binom72$.`, 21, "7·6/2."),
  num(S`Find the coefficient of $x^3$ in $(x+2)^5$.`, 40, "C(5, 2)(2²) = 10(4)."),
  num(S`Find the coefficient of $x^2$ in $(1+3x)^4$.`, 54, "C(4, 2)(3²) = 6(9)."),
  num(S`Find the coefficient of $x$ in $(3x-1)^4$.`, -12, "C(4, 3)(3)(−1)³."),
  num(S`Find the constant term of $(x+3)^4$.`, 81, "3⁴."),
  num(S`Find the coefficient of $x^4$ in $(x-2)^6$.`, 60, "C(6, 2)(−2)² = 15(4)."),
  mx(S`Expand $(x+3)^3$.`, "x^3+9*x^2+27*x+27", "Row 3 with b = 3: 1, 3·3, 3·9, 27."),
  mx(S`Expand $(1-2x)^3$.`, "1-6*x+12*x^2-8*x^3", "Row 3 with b = −2x."),
  num(S`In descending powers of $x$, which term of $(x+1)^8$ contains $x^5$?`, 4, "x⁸, x⁷, x⁶, x⁵: the 4th term."),
  num(S`Evaluate $\binom94$.`, 126, "9·8·7·6/24."),
  num(S`Find the coefficient of $x^2$ in $(3-x)^5$.`, 270, "C(5, 2)(3³)(−1)² = 10(27)."),
  tf(S`The coefficients of $(x-1)^n$ alternate in sign.`, true, "Each term has a factor (−1)ʳ."),
  num(S`Find the sum of the coefficients of $(x+1)^6$.`, 64, "Put x = 1: 2⁶."),
  num(S`Using the highlighted entry, find the coefficient of $a^4b^3$ in $(a+b)^7$.`, 35, "Row 7, r = 3.", pascalDoc(7, [[7, 3]])),
  num(S`The bars show the coefficients of $(1+x)^5$. Find the coefficient of $x^3$ in $(1+2x)^5$.`, 80, "C(5, 3)(2³) = 10(8).", barsDoc([1, 5, 10, 10, 5, 1], { start: 0, color: "#6d28d9", xlab: "r" })),
  ms("Which are equal to 10? Select all.", [S`$\binom52$`, S`$\binom53$`, S`$\binom{10}{1}$`, S`$\binom{10}{2}$`], [0, 1, 2], "C(10, 2) = 45."),
  num(S`Find the coefficient of $x^2$ in $\left(x+\frac1x\right)^6$.`, 15, "Power 6 − 2r = 2, r = 2: C(6, 2)."),
  num(S`Find the coefficient of $x^3$ in $(2x+1)^4$.`, 32, "C(4, 1)(2x)³ = 4(8)."),
  num(S`Find $n$ if $\binom n1=12$.`, 12, "C(n, 1) = n."),
  num(S`Find the coefficient of $y^2$ in $(2+y)^5$.`, 80, "C(5, 2)(2³) = 10(8)."),
];
