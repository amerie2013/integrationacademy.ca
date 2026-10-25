// 1.8 The Binomial Theorem — 20 hard questions
import { mc, ms, num, tf, mx } from "./kit.mjs";
import { pascalSvg, barsSvg } from "../../mdm4u/figs.mjs";
import { C, binTerm } from "../../mdm4u/count.mjs";

/** polynomial helpers: arrays of coefficients by power (index = power) */
const mul = (p, q) => { const r = Array(p.length + q.length - 1).fill(0); p.forEach((a, i) => q.forEach((b, j) => (r[i + j] += a * b))); return r; };
const pow = (p, n) => { let r = [1]; for (let i = 0; i < n; i++) r = mul(r, p); return r; };

export const TOPIC = "1.8 The Binomial Theorem";
export const Q = [
  num("Find the coefficient of $x^6$ in $(x^2-3)^5$.", binTerm(1, -3, 5, 2), "x^(2(5 − k)) = x⁶ ⇒ k = 2: ₅C₂ × 9."),
  num("Find the constant term of $\\left(x^2+\\dfrac{1}{x}\\right)^9$.", C(9, 6), "x^(18 − 2k − k): 18 − 3k = 0 ⇒ k = 6."),
  num("Find the constant term of $\\left(2x-\\dfrac{3}{x}\\right)^6$.", C(6, 3) * 2 ** 3 * (-3) ** 3, "k = 3: ₆C₃ 2³ (−3)³."),
  num("Find the coefficient of $x^{-2}$ in $\\left(x-\\dfrac2x\\right)^8$.", C(8, 5) * (-2) ** 5, "8 − 2k = −2 ⇒ k = 5."),
  num("Find the coefficient of $x^3$ in $(1+x)^4(1-x)^3$.", mul(pow([1, 1], 4), pow([1, -1], 3))[3], "Multiply out, or write (1 − x²)³(1 + x) and pick the x³ terms."),
  num("Find the coefficient of $x^2$ in $(1+2x)^5(1-x)^2$.", mul(pow([1, 2], 5), pow([1, -1], 2))[2], "x² terms: 40 × 1 + 10 × (−2) + 1 × 1 = 21."),
  num("In $(1+kx)^7$ the coefficient of $x^2$ is 84. Find $k>0$.", 2, "₇C₂ k² = 21k² = 84."),
  num("In $(a+3)^n$ the coefficient of $a^{n-1}$ is 24. Find $n$.", 8, "ₙC₁ × 3 = 24."),
  num("In $(1+x)^n$ the coefficient of the 3rd term is 4 times the coefficient of the 2nd term. Find $n$.", 9, "ₙC₂ = 4n ⇒ (n − 1)/2 = 4 ⇒ n = 9."),
  num("Use the binomial theorem to find $0.99^{10}$ to 4 decimal places (first four terms of $(1-0.01)^{10}$).", Math.round((1 - 0.1 + 45 * 0.0001 - 120 * 0.000001) * 1e4) / 1e4, "1 − 0.1 + 0.0045 − 0.00012.", null, 0.0001),
  num("Find the term independent of $x$ in $\\left(\\sqrt x+\\dfrac{2}{x}\\right)^{6}$.", C(6, 2) * 2 ** 2, "x^((6 − k)/2 − k) = x⁰ ⇒ k = 2."),
  num("Which term (1st, 2nd, …) of $(x+y)^{12}$ has the largest coefficient? Enter its position.", 7, "Middle term: k = 6 is the 7th term."),
  num("The bars show the absolute values of the coefficients of $(2x-1)^n$. Find $n$, then the coefficient of $x^2$ (with its sign).", binTerm(2, -1, 5, 3), "Six bars: n = 5. x² needs k = 3: ₅C₃ 2² (−1)³.", barsSvg([0, 1, 2, 3, 4, 5].map((k) => Math.abs(binTerm(2, -1, 5, k))), { labels: ["x⁵", "x⁴", "x³", "x²", "x", "1"], top: true, xlabel: "term", ylabel: "|coefficient|" })),
  num("The highlighted entries are the coefficients of $(a+b)^n$. What is the coefficient of $a^2b^4$?", C(6, 4), "Row 6, k = 4.", pascalSvg(7, { hl: [0, 1, 2, 3, 4, 5, 6].map((r) => [6, r]) })),
  num("The bars show the coefficients of $(1+x)^{10}$. What is the sum of all the bar heights?", 1024, "Set x = 1: 2¹⁰.", barsSvg(Array.from({ length: 11 }, (_, k) => C(10, k)), { labels: Array.from({ length: 11 }, (_, k) => k), xlabel: "power of x", ylabel: "coefficient" })),
  num("The highlighted row gives the coefficients of $(x+1)^5$. What is the value of $(x+1)^5$ when $x=10$?", 11 ** 5, "1 5 10 10 5 1 read with powers of 10: 161 051.", pascalSvg(6, { hl: [0, 1, 2, 3, 4, 5].map((r) => [5, r]) })),
  mx("Expand and simplify $(x+1)^4-(x-1)^4$.", "8*x^3+8*x", "The even-power terms cancel; the odd-power terms double."),
  ms("For $(3x-2)^4$, which are correct? Select all.", ["the coefficient of $x^4$ is 81", "the constant term is 16", "the coefficient of $x^3$ is $-216$", "the coefficient of $x$ is $-48$", "the sum of the coefficients is 1"], [0, 1, 2, 4], "81x⁴ − 216x³ + 216x² − 96x + 16 (the x coefficient is −96); at x = 1: 1."),
  mc("Which is the coefficient of $x^7$ in $(x^2+x)^5$?", String(C(5, 2)), ["5", "1", "20"], "(x² + x)⁵ = x⁵(x + 1)⁵; x⁷ needs x² from (x + 1)⁵: ₅C₂."),
  tf("The sum of the coefficients of $(x-1)^{20}$ is 0.", true, "(1 − 1)²⁰ = 0."),
];
