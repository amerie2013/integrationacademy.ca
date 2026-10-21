// 1.6 Proof — 20 easy + 20 medium questions
import { mc, ms, num, tf, fill } from "./kit.mjs";
import { dotsDoc, planeDoc, seqDoc } from "../figs.mjs";

const S = String.raw;

export const E = [
  tf("Checking a statement for ten examples proves that it is always true.", false, "Examples only suggest; a proof must cover every case."),
  tf("One counterexample is enough to disprove a statement.", true, "A single failure shows the statement is not always true."),
  mc(S`Which expression represents any even number ($n$ an integer)?`, S`$2n$`, [S`$n+2$`, S`$n^2$`, S`$2n+1$`], "Even numbers are multiples of 2."),
  mc(S`Which expression represents any odd number ($n$ an integer)?`, S`$2n+1$`, [S`$2n$`, S`$n+1$`, S`$\frac n2$`], "One more than an even number."),
  mc("Which symbol means 'is identically equal to'?", S`$\equiv$`, [S`$\approx$`, S`$\ne$`, S`$\le$`], "≡ marks an identity."),
  num("What is the smallest positive number ending in 7 that is not prime?", 27, "7 and 17 are prime; 27 = 3 × 9."),
  tf(S`$(x+1)^2\equiv x^2+1$.`, false, "(x + 1)² = x² + 2x + 1."),
  tf(S`$2(x+3)\equiv2x+6$.`, true, "Expanding the bracket."),
  mc("Which list shows three consecutive integers?", S`$n,\ n+1,\ n+2$`, [S`$n,\ 2n,\ 3n$`, S`$n,\ n+2,\ n+4$`, S`$2n+1,\ 2n+3,\ 2n+5$`], "Consecutive integers go up by 1."),
  num(S`$(x+5)^2\equiv x^2+bx+25$. Find $b$.`, 10, "2(5)x."),
  fill("A single case that shows a statement is false is called a ___.", ["counterexample", "counter-example", "Counterexample"], "It disproves the statement."),
  tf("The sum of two even numbers is always even.", true, "2m + 2n = 2(m + n)."),
  num(S`What is the smallest positive integer that is a counterexample to "$n^2>n$ for every positive integer $n$"?`, 1, "1² = 1, not greater than 1."),
  mc(S`To prove $(x-2)(x+2)\equiv x^2-4$, the best first step is to:`, "expand the left-hand side", ["substitute x = 1", "divide both sides by x", "square both sides"], "Work from one side to the other."),
  num("The square patterns show 1, 1 + 3, 1 + 3 + 5, … Find 1 + 3 + 5 + 7 + 9.", 25, "Five odd numbers make a 5 × 5 square.", dotsDoc([1, 4, 9, 16], "sq")),
  num(S`The graph shows $y=(x+1)^2-1$ and $y=x^2+2x$ on top of each other. Find the value of both at $x=3$.`, 15, "9 + 6.", planeDoc({ view: { xmin: -4, xmax: 4, ymin: -2, ymax: 18 }, step: { x: 1, y: 2 }, curves: [{ f: (x) => (x + 1) ** 2 - 1, color: "violet" }, { f: (x) => x * x + 2 * x, color: "blue" }], points: [{ x: 3, y: 15, label: "(3, ?)", color: "red" }] })),
  tf(S`$3n$ is odd for every integer $n$.`, false, "n = 2 gives 6."),
  mc("Which product is a counterexample to 'the product of two prime numbers is odd'?", "2 × 3", ["3 × 5", "5 × 7", "7 × 11"], "2 is an even prime."),
  num(S`$(2x)^2\equiv kx^2$. Find $k$.`, 4, "2² = 4."),
  tf(S`$x^2=9$ is an identity.`, false, "It is true only for x = ±3."),
];

export const M = [
  num(S`$(x+a)^2\equiv x^2+14x+49$. Find $a$.`, 7, "2a = 14."),
  num(S`$(x-3)(x+3)+c\equiv x^2$. Find $c$.`, 9, "x² − 9 + c."),
  mc(S`The sum of three consecutive integers $n-1$, $n$, $n+1$ is:`, S`$3n$`, [S`$3n+3$`, S`$n^3$`, S`$3n-1$`], "The ±1 cancel."),
  ms(S`Which expressions are even for every integer $n$? Select all.`, [S`$2n+4$`, S`$n(n+1)$`, S`$2n+1$`, S`$4n-2$`], [0, 1, 3], "n(n + 1) contains an even factor."),
  num(S`Find the smallest positive integer $n$ for which $n^2+1$ is not prime.`, 3, "2, 5, then 10."),
  tf(S`$(a+b)^2\equiv a^2+b^2$ for all $a$, $b$.`, false, "The 2ab term is missing."),
  num(S`$(x+2)(x+k)\equiv x^2+7x+10$. Find $k$.`, 5, "2k = 10."),
  mc("The product of an odd number and an even number is:", "always even", ["always odd", "sometimes odd", "always 0"], "(2m + 1)(2n) = 2n(2m + 1)."),
  num(S`Find the smallest positive integer $n$ for which $2^n>100n$.`, 10, "2⁹ = 512 < 900; 2¹⁰ = 1024 > 1000."),
  tf("The square of any even number is a multiple of 4.", true, "(2n)² = 4n²."),
  num(S`$(x+1)^3\equiv x^3+kx^2+3x+1$. Find $k$.`, 3, "Row 3: 1, 3, 3, 1."),
  mc("Which working proves that the sum of two consecutive odd numbers is a multiple of 4?", S`$(2n-1)+(2n+1)=4n$`, [S`$(2n+1)+(2n+1)=4n+2$`, S`$n+(n+1)=2n+1$`, S`$2n+(2n+2)=4n+2$`], "Use consecutive odd numbers 2n − 1 and 2n + 1."),
  num(S`The points show $n^2-n+41$ for $n=1$ to $6$ (all prime). It stays prime up to $n=40$. Find the first $n$ for which it is not prime.`, 41, "41² − 41 + 41 = 41².", seqDoc([41, 43, 47, 53, 61, 71], { color: "green", label: "all" })),
  num(S`The graphs of $y=(x+2)^2-(x-2)^2$ and $y=8x$ are the same line. What is its gradient?`, 8, "(x + 2)² − (x − 2)² = 8x.", planeDoc({ view: { xmin: -4, xmax: 4, ymin: -30, ymax: 30 }, step: { x: 1, y: 10 }, curves: [{ f: (x) => (x + 2) ** 2 - (x - 2) ** 2, color: "violet" }, { f: (x) => 8 * x, color: "blue" }] })),
  tf(S`A statement true for $n=1, 2, \dots, 1000$ must be true for every $n$.`, false, "n² − n + 41 is prime up to 40 and then fails."),
  num(S`Evaluate $(2n+1)^2-(2n+1)$ for $n=3$.`, 42, "49 − 7."),
  ms("Which are identities? Select all.", [S`$(x-1)^2\equiv x^2-2x+1$`, S`$x(x+2)\equiv x^2+2x$`, S`$x+x\equiv x^2$`, S`$(x+1)(x-1)\equiv x^2-1$`], [0, 1, 3], "x + x = 2x, not x²."),
  num(S`$\frac{x^2-25}{x+5}\equiv x-5$ except at one value of $x$. Which?`, -5, "Division by zero at x = −5."),
  mc("Which expression is 'one more than a multiple of 3'?", S`$3n+1$`, [S`$3(n+1)$`, S`$n+3$`, S`$3n+3$`], "A multiple of 3 is 3n."),
  num(S`$(x+4)^2-(x-4)^2\equiv kx$. Find $k$.`, 16, "8x − (−8x)."),
];
