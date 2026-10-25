// 1.8 The Binomial Theorem — 20 easy + 20 medium questions
import { mc, ms, num, tf, mx } from "./kit.mjs";
import { pascalSvg, barsSvg } from "../../mdm4u/figs.mjs";
import { C, binTerm } from "../../mdm4u/count.mjs";

export const E = [
  num("How many terms are in the expansion of $(a+b)^7$?", 8, "n + 1."),
  num("How many terms are in the expansion of $(x-y)^{15}$?", 16, "n + 1."),
  num("What is the coefficient of $a^2b^2$ in $(a+b)^4$?", 6, "₄C₂."),
  num("What is the coefficient of $a^4b$ in $(a+b)^5$?", 5, "₅C₁."),
  num("What is the coefficient of $x^3$ in $(x+1)^5$?", C(5, 2), "₅C₂."),
  num("What is the coefficient of $x$ in $(x+2)^3$?", binTerm(1, 2, 3, 2), "₃C₂ × 2²."),
  num("What is the constant term of $(x+2)^4$?", 16, "2⁴."),
  num("What is the constant term of $(x-1)^6$?", 1, "(−1)⁶."),
  num("What is the coefficient of $x^2$ in $(x+3)^2$?", 1, "x² + 6x + 9."),
  num("What is the coefficient of $x$ in $(x+3)^2$?", 6, "2 × 3."),
  num("Read row 5 of the triangle: what is the coefficient of $a^3b^2$ in $(a+b)^5$?", 10, "Row 5, position 2.", pascalSvg(6, { hl: [[5, 2]] })),
  num("The bars show the coefficients of $(x+1)^n$. What is $n$?", 6, "There are 7 bars: n + 1 = 7.", barsSvg([0, 1, 2, 3, 4, 5, 6].map((k) => C(6, k)), { labels: ["x⁶", "x⁵", "x⁴", "x³", "x²", "x", "1"], top: true, xlabel: "term", ylabel: "coefficient" })),
  mx("Expand $(x+1)^2$.", "x^2+2*x+1", "Row 2: 1 2 1."),
  mx("Expand $(x+2)^3$.", "x^3+6*x^2+12*x+8", "1, 3, 3, 1 with powers of 2."),
  mc("In $(a+b)^n$, the powers of $a$…", "decrease from n to 0", ["increase from 0 to n", "stay at n", "decrease from n to 1"], "a^n, a^(n−1), …, a⁰."),
  mc("The coefficients of $(a+b)^n$ come from…", "row n of Pascal's triangle", ["row n + 1", "column n", "the diagonal n"], "Row n."),
  tf("In each term of $(a+b)^9$ the powers of $a$ and $b$ add to 9.", true, "Each term chooses 9 letters."),
  tf("$(a+b)^3=a^3+b^3$.", false, "Missing 3a²b + 3ab²."),
  tf("The signs in $(x-2)^5$ alternate.", true, "Odd powers of −2 are negative."),
  num("What is the coefficient of $b^3$ in $(1+b)^3$?", 1, "Last term."),
];

export const M = [
  num("Find the coefficient of $x^2$ in $(x+5)^4$.", binTerm(1, 5, 4, 2), "₄C₂ × 25."),
  num("Find the coefficient of $x^3$ in $(2x+1)^5$.", binTerm(2, 1, 5, 2), "₅C₂ × 2³."),
  num("Find the coefficient of $x^4$ in $(x-3)^6$.", binTerm(1, -3, 6, 2), "₆C₂ × 9."),
  num("Find the coefficient of $x$ in $(3x-2)^4$.", binTerm(3, -2, 4, 3), "₄C₃ × 3 × (−8)."),
  num("Find the constant term of $(2x-1)^7$.", -1, "(−1)⁷."),
  num("Find the 3rd term's coefficient in $(x+4)^5$.", binTerm(1, 4, 5, 2), "k = 2: ₅C₂ × 16."),
  num("Find the 4th term's coefficient in $(a-2b)^6$ (the term in $a^3b^3$).", binTerm(1, -2, 6, 3), "₆C₃(−2)³."),
  num("Find the middle term's coefficient of $(x+y)^8$.", C(8, 4), "5th term: ₈C₄."),
  num("Find the constant term in $\\left(x+\\dfrac1x\\right)^4$.", 6, "k = 2: ₄C₂."),
  num("Find the sum of the coefficients of $(3x-1)^5$.", 2 ** 5, "Set x = 1: 2⁵."),
  num("Find the sum of the coefficients of $(x+2)^4$.", 81, "Set x = 1: 3⁴."),
  mx("Expand $(x-1)^4$.", "x^4-4*x^3+6*x^2-4*x+1", "Row 4 with alternating signs."),
  mx("Expand $(2x+1)^3$.", "8*x^3+12*x^2+6*x+1", "(2x)³ + 3(2x)²(1) + 3(2x) + 1."),
  ms("Which are terms of $(x+2)^4$? Select all.", ["$x^4$", "$8x^3$", "$24x^2$", "$32x$", "$8$"], [0, 1, 2, 3], "x⁴ + 8x³ + 24x² + 32x + 16."),
  mc("Which binomial expands to $x^3-6x^2+12x-8$?", "$(x-2)^3$", ["$(x+2)^3$", "$(x-8)^3$", "$(x-2)^4$"], "Coefficients 1, 3·2, 3·4, 8 with alternating signs."),
  tf("The coefficient of $x^2$ in $(1+x)^{10}$ is 45.", true, "₁₀C₂."),
  tf("The general term of $(a+b)^n$ is $\\binom{n}{k}a^kb^{n-k}$, so the 2nd term is $\\binom n2a^2b^{n-2}$.", false, "The 2nd term uses k = 1, and the usual form is ₙCₖ a^(n−k) b^k."),
  num("The bars show the coefficients of $(x+2)^4$. What is the tallest bar?", Math.max(...[0, 1, 2, 3, 4].map((k) => binTerm(1, 2, 4, k))), "x⁴ + 8x³ + 24x² + 32x + 16.", barsSvg([0, 1, 2, 3, 4].map((k) => binTerm(1, 2, 4, k)), { labels: ["x⁴", "x³", "x²", "x", "1"], xlabel: "term", ylabel: "coefficient" })),
  num("Use the highlighted row: what is the coefficient of $x^2$ in $(x+1)^7$?", C(7, 5), "Row 7, position 5 (or 2).", pascalSvg(8, { hl: [[7, 5]] })),
  num("Find the coefficient of $x^5$ in $(x+1)^9$.", C(9, 4), "₉C₄."),
];
