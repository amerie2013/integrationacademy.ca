// 1.6 Proof — 20 hard questions
import { mc, ms, num, tf } from "./kit.mjs";
import { dotsDoc, planeDoc, seqDoc, barsDoc } from "../figs.mjs";

const S = String.raw;

export const TOPIC = "1.6 Proof";
export const Q = [
  num(S`$(3x+1)^2-(3x-1)^2\equiv kx$. Find $k$.`, 12, "6x − (−6x)."),
  num(S`$a(x-1)^2+b\equiv2x^2-4x+7$. Find $b$.`, 5, "a = 2: 2x² − 4x + 2 + b."),
  ms(S`Which are multiples of 3 for every integer $n$? Select all.`, [S`$n^3-n$`, S`$n(n+1)(n+2)$`, S`$3n+1$`, S`$n^2+n$`], [0, 1], "n³ − n = (n − 1)n(n + 1); n² + n = 2 when n = 1."),
  num(S`Find the smallest positive integer $n$ for which $n^2+n+17$ is not prime.`, 16, "n = 16 gives 289 = 17²."),
  tf("The sum of any three consecutive even numbers is divisible by 6.", true, "(2n − 2) + 2n + (2n + 2) = 6n."),
  num("Triangular numbers 1, 3, 6, 10, … are shown. The sum of two consecutive triangular numbers is a square. Find the 7th plus the 8th triangular number.", 64, "28 + 36 = 8².", dotsDoc([1, 3, 6, 10], "tri")),
  num(S`$\frac{x^2-4x+4}{x-2}\equiv x-2$ except at one value of $x$. Which?`, 2, "The denominator is 0 at x = 2."),
  mc(S`The best way to start proving that $n^2-n$ is even for every integer $n$ is to:`, "write it as n(n − 1), a product of consecutive integers", ["check n = 1, 2 and 3", "assume n is odd", "write it as (n − 1)²"], "One of two consecutive integers is even."),
  num(S`$x^2+bx+c\equiv(x-3)(x+7)$. Find $c$.`, -21, "(−3)(7)."),
  num(S`The blue points show $n^3$ and the violet points show $3^n$. From which $n$ onwards is $3^n>n^3$ always true?`, 4, "n = 3 gives 27 = 27; from n = 4, 3ⁿ wins.", seqDoc([1, 8, 27, 64, 125, 216], { color: "blue", label: "none", extra: [3, 9, 27, 81, 243, 729].map((y, i) => ({ x: i + 1, y, color: "violet" })) })),
  tf(S`If $n^2$ is even, then $n$ is even.`, true, "If n were odd, n² would be odd."),
  num(S`$(n+1)^2-n^2$ is always odd. For which $n$ does it equal 41?`, 20, "2n + 1 = 41."),
  ms(S`Which pairs are counterexamples to "if $a>b$ then $a^2>b^2$"? Select all.`, ["a = 1, b = −2", "a = 0, b = −1", "a = 3, b = 2", "a = −1, b = −3"], [0, 1, 3], "Each has a > b but a² ≤ b², except a = 3, b = 2."),
  num(S`$(x+1)(x+2)(x+3)\equiv x^3+6x^2+kx+6$. Find $k$.`, 11, "2 + 3 + 6."),
  num(S`The graph of $y=\frac{x^2-1}{x-1}$ is the line $y=x+1$ with one point missing (open circle). At which $x$ is the hole?`, 1, "The fraction is undefined at x = 1.", planeDoc({ view: { xmin: -3, xmax: 4, ymin: -2, ymax: 5 }, step: { x: 1, y: 1 }, curves: [{ f: (x) => x + 1, color: "violet" }], points: [{ x: 1, y: 2, color: "red", open: true }] })),
  tf(S`$n^2+n+1$ is odd for every integer $n$.`, true, "n² + n is even, so adding 1 makes it odd."),
  num(S`$(n+2)^2-n^2\equiv4n+k$. Find $k$.`, 4, "n² + 4n + 4 − n²."),
  num("The bars show the sum of four consecutive integers starting at 1, 2, 3, 4, 5. Each total is 4n + 6. Find the total when the first integer is 20.", 86, "4(20) + 6.", barsDoc([10, 14, 18, 22, 26], { color: "#1d4ed8", xlab: "first integer" })),
  mc("Which reason proves that the product of three consecutive integers is even?", "at least one of the three is even", ["the middle one is always even", "the sum of the three is even", "the largest is always even"], "Among any two consecutive integers, one is even."),
  num("What is the smallest counterexample to 'every odd number greater than 1 is prime'?", 9, "3, 5 and 7 are prime; 9 = 3 × 3."),
];
