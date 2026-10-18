// 1.1 Power Functions — 20 easy + 20 medium questions
import { mc, ms, num, tf, fill } from "./kit.mjs";
import { graph } from "./fig.mjs";

const EB = ["Q3 → Q1", "Q2 → Q4", "Q2 → Q1", "Q3 → Q4"];
const eb = (i) => [EB[i], EB.filter((_, j) => j !== i)];

export const E = [
  mc(String.raw`Which is a power function?`, String.raw`$y=-7x^4$`, [String.raw`$y=4^x$`, String.raw`$y=\frac{3}{x}$`, String.raw`$y=\sqrt x+1$`], "A power function has one term ax^n with n a whole number."),
  num(String.raw`What is the degree of $y=3x^7$?`, 7, "The exponent on x."),
  num(String.raw`What is the leading coefficient of $y=-0.4x^3$?`, -0.4, "The number multiplying the power.", null, 0.0001),
  mc(String.raw`End behaviour of $y=x^6$:`, ...eb(2), "Even degree, positive coefficient: up at both ends."),
  mc(String.raw`End behaviour of $y=-x^3$:`, ...eb(1), "Odd degree, negative coefficient: rises on the left, falls on the right."),
  mc(String.raw`End behaviour of $y=5x^5$:`, ...eb(0), "Odd degree, positive coefficient."),
  mc(String.raw`End behaviour of $y=-2x^8$:`, ...eb(3), "Even degree, negative coefficient: down at both ends."),
  tf(String.raw`$y=x^4$ is symmetric about the y-axis.`, true, "Even powers: f(−x) = f(x)."),
  tf(String.raw`$y=x^3$ is symmetric about the y-axis.`, false, "Odd powers are symmetric about the origin."),
  mc("Which equation matches the graph?", String.raw`$y=x^4$`, [String.raw`$y=x^3$`, String.raw`$y=-x^4$`, String.raw`$y=-x^3$`], "Up at both ends and flat near the origin.", graph((x) => x ** 4, { xmin: -2, xmax: 2, ymin: -4, ymax: 4 })),
  mc("Which equation has this graph?", String.raw`$y=-x^5$`, [String.raw`$y=x^5$`, String.raw`$y=-x^4$`, String.raw`$y=x^2$`], "Q2 → Q4 with odd symmetry.", graph((x) => -(x ** 5), { xmin: -2, xmax: 2, ymin: -4, ymax: 4 })),
  num(String.raw`Evaluate $f(x)=2x^3$ at $x=-2$.`, -16, "2(−8)."),
  num(String.raw`Evaluate $f(x)=-x^4$ at $x=2$.`, -16, "−(16)."),
  mc(String.raw`Range of $y=3x^4$:`, String.raw`$y\ge0$`, [String.raw`$y\le0$`, String.raw`$y\in\mathbb R$`, String.raw`$y>0$`], "x⁴ ≥ 0, so 3x⁴ ≥ 0."),
  mc(String.raw`Range of $y=-x^5$:`, String.raw`$y\in\mathbb R$`, [String.raw`$y\ge0$`, String.raw`$y\le0$`, String.raw`$y>0$`], "Odd powers take every real value."),
  fill(String.raw`A power function with an even degree and a negative leading coefficient opens ___ at both ends (up/down).`, ["down"], "Like y = −x²."),
  tf(String.raw`$y=6$ is a power function of degree 0.`, true, "6 = 6x⁰."),
  tf(String.raw`$y=2^x$ is a power function.`, false, "The variable is in the exponent: exponential."),
  mc(String.raw`Which point is on $y=x^5$?`, String.raw`$(-1,-1)$`, [String.raw`$(-1,1)$`, String.raw`$(2,10)$`, String.raw`$(1,5)$`], "(−1)⁵ = −1."),
  num(String.raw`How many quadrants does the graph of $y=x^2$ pass through (not counting the axes)?`, 2, "Quadrants 1 and 2."),
];

export const M = [
  num(String.raw`$y=ax^3$ passes through $(2,-24)$. Find $a$.`, -3, "8a = −24."),
  num(String.raw`$y=ax^4$ passes through $(-1,5)$. Find $a$.`, 5, "(−1)⁴ = 1."),
  mc(String.raw`End behaviour of $f(x)=4x^2-x^5+3$:`, ...eb(1), "Leading term −x⁵: odd, negative."),
  mc(String.raw`End behaviour of $f(x)=7-2x+0.1x^6$:`, ...eb(2), "Leading term 0.1x⁶: even, positive."),
  ms(String.raw`Which are polynomial functions? Select all.`, [String.raw`$y=3x^2-x$`, String.raw`$y=x^{1/2}$`, String.raw`$y=-5$`, String.raw`$y=\frac{x}{2}+1$`, String.raw`$y=x^{-2}$`], [0, 2, 3], "Whole-number exponents only; x/2 = (1/2)x is fine."),
  ms(String.raw`Which are even functions? Select all.`, [String.raw`$y=x^4$`, String.raw`$y=-3x^2$`, String.raw`$y=x^3$`, String.raw`$y=x^6+1$`], [0, 1, 3], "Only even powers (constants count)."),
  mc(String.raw`For $0<x<1$, which is largest?`, String.raw`$x^2$`, [String.raw`$x^3$`, String.raw`$x^4$`, String.raw`$x^5$`], "Higher powers of a number between 0 and 1 are smaller."),
  mc(String.raw`For $x>1$, which is largest?`, String.raw`$x^5$`, [String.raw`$x^2$`, String.raw`$x^3$`, String.raw`$x^4$`], "Higher powers of a number above 1 are larger."),
  num(String.raw`$f(x)=-2x^4$. Find $f(3)-f(-3)$.`, 0, "Even function: f(3) = f(−3)."),
  num(String.raw`$g(x)=4x^3$. Find $g(2)+g(-2)$.`, 0, "Odd function: g(−2) = −g(2)."),
  mc("The graph shows a power function through (1, −2). Which equation?", String.raw`$y=-2x^4$`, [String.raw`$y=-2x^3$`, String.raw`$y=2x^4$`, String.raw`$y=-x^4$`], "Down at both ends (even, negative) and f(1) = −2.", graph((x) => -2 * x ** 4, { xmin: -2, xmax: 2, ymin: -6, ymax: 2 }, [{ x: 1, y: -2, label: "(1, −2)", color: "blue" }])),
  mc("Which description matches the graph?", "odd degree, a > 0", ["odd degree, a < 0", "even degree, a > 0", "even degree, a < 0"], "Q3 → Q1.", graph((x) => 0.5 * x ** 3, { xmin: -3, xmax: 3, ymin: -6, ymax: 6 })),
  tf(String.raw`Every polynomial function of odd degree has range $\mathbb R$.`, true, "The ends go to −∞ and +∞ and the graph is continuous."),
  tf(String.raw`Every polynomial function of even degree has a y-axis line of symmetry.`, false, "e.g. x⁴ + x is even degree but not symmetric."),
  num(String.raw`Solve $x^3=-125$.`, -5, "(−5)³ = −125."),
  num(String.raw`Find the positive solution of $2x^4=162$.`, 3, "x⁴ = 81."),
  mc(String.raw`A table has $x=0,1,2,3$ and $y=0,2,16,54$. Which function fits?`, String.raw`$y=2x^3$`, [String.raw`$y=2x^2$`, String.raw`$y=2^x$`, String.raw`$y=x^4$`], "2·27 = 54."),
  mc(String.raw`Which function is neither a power function nor a polynomial?`, String.raw`$y=3(2)^x$`, [String.raw`$y=x^5$`, String.raw`$y=x^2-1$`, String.raw`$y=-x$`], "Exponential."),
  num(String.raw`By what factor does $y=x^4$ increase when $x$ triples?`, 81, "3⁴ = 81."),
  fill(String.raw`$y=-x^7$ is symmetric about the ___.`, ["origin", "the origin"], "Odd power: point symmetry about (0, 0)."),
];
