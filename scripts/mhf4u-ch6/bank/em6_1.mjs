// 6.1 The Exponential Function and Its Inverse — 20 easy + 20 medium questions
import { mc, ms, num, tf, fill } from "./kit.mjs";
import { graph, planeDoc, P } from "./fig.mjs";

const lg = (b) => (x) => Math.log(x) / Math.log(b);

export const E = [
  num(String.raw`What is the y-intercept of $y=11^x$?`, 1, "Any nonzero base to the power 0 is 1."),
  mc(String.raw`What is the range of $y=12^x$?`, String.raw`$y>0$`, [String.raw`all real numbers`, String.raw`$y\ge1$`, String.raw`$y>1$`], "A positive base to any power is positive, and every positive value is reached."),
  tf(String.raw`$y=\left(\tfrac14\right)^x$ is an increasing function.`, false, "The base is between 0 and 1, so the function decreases."),
  num(String.raw`The inverse of $y=2^x$ passes through $(32,\ ?)$. Find the missing y-value.`, 5, "2⁵ = 32, so (5, 32) is on y = 2ˣ and (32, 5) is on the inverse."),
  mc(String.raw`The graph of the inverse of $y=b^x$ is the reflection of $y=b^x$ in`, "the line y = x", ["the x-axis", "the y-axis", "the origin"], "Swapping x and y reflects in y = x."),
  num(String.raw`Find the x-intercept of the inverse of $y=0.8^x$.`, 1, "y = 0.8ˣ has y-intercept 1; swap it."),
  mc(String.raw`What is the asymptote of the inverse of $y=9^x$?`, "x = 0", ["y = 0", "x = 1", "y = 1"], "The horizontal asymptote y = 0 reflects to x = 0."),
  fill(String.raw`$\left(-2,\tfrac1{16}\right)$ lies on $y=4^x$. The matching point on the inverse is $\left(\tfrac1{16},\ \_\_\_\right)$.`, ["-2", "−2"], "Swap the coordinates."),
  tf(String.raw`The inverse of $y=2^x$ is $y=\dfrac1{2^x}$.`, false, "1/2ˣ is the reciprocal, another exponential; the inverse swaps x and y."),
  num("The graph shows y = bˣ passing through the marked point. Find b.", 6, "At x = 1, y = b¹ = b.", graph((x) => 6 ** x, { xmin: -2, xmax: 1.6, ymin: -1, ymax: 10 }, [P(1, 6), P(0, 1)], { step: { x: 0.5, y: 1 } })),
  mc(String.raw`What is the domain of the inverse of $y=\left(\tfrac23\right)^x$?`, String.raw`$x>0$`, [String.raw`all real numbers`, String.raw`$x\lt0$`, String.raw`$x>1$`], "The domain of the inverse is the range of the exponential."),
  num(String.raw`Find the y-value on the inverse of $y=10^x$ when $x=1000$.`, 3, "10³ = 1000."),
  tf("The inverse of an exponential function y = bˣ (b > 0, b ≠ 1) is also a function.", true, "y = bˣ passes the horizontal line test."),
  num(String.raw`Find the y-value on the inverse of $y=3^x$ when $x=81$.`, 4, "3⁴ = 81."),
  mc(String.raw`Which point lies on the inverse of $y=2^x$?`, String.raw`$(8,3)$`, [String.raw`$(3,8)$`, String.raw`$(-8,-3)$`, String.raw`$\left(\tfrac18,3\right)$`], "(3, 8) is on y = 2ˣ; swap it."),
  num(String.raw`Find the y-value on the inverse of $y=\left(\tfrac12\right)^x$ when $x=16$.`, -4, "(½)⁻⁴ = 2⁴ = 16."),
  mc(String.raw`For $b>1$, the inverse of $y=b^x$ is`, "increasing", ["decreasing", "constant", "increasing, then decreasing"], "Reflecting an increasing curve in y = x keeps it increasing."),
  fill(String.raw`Swapping $x$ and $y$ in $y=7^x$ gives the inverse $x=7^{\_\_\_}$.`, ["y"], "x and y trade places."),
  num(String.raw`Find the y-value on the inverse of $y=2^x$ when $x=\tfrac12$.`, -1, "2⁻¹ = ½."),
  num("The graph shows the inverse of y = 2ˣ. Read the y-value of the marked point.", 2, "2² = 4, so the inverse passes through (4, 2).", graph(lg(2), { xmin: -1, xmax: 9, ymin: -3, ymax: 4 }, [P(4, 2, false)], { a: 0.02 })),
];

export const M = [
  num(String.raw`The inverse of $y=4^x+3$ has the vertical asymptote $x=c$. Find $c$.`, 3, "y = 4ˣ + 3 has horizontal asymptote y = 3; it reflects to x = 3."),
  num(String.raw`Find the y-value on the inverse of $y=2^x+1$ when $x=9$.`, 3, "9 = 2ʸ + 1 → 2ʸ = 8."),
  mc(String.raw`What is the domain of the inverse of $y=3^x-7$?`, String.raw`$x>-7$`, [String.raw`$x>7$`, String.raw`$x>0$`, String.raw`all real numbers`], "Swap: 3ʸ = x + 7 > 0."),
  num(String.raw`$y=b^x$ passes through $(2,\ 0.36)$. Find $b$.`, 0.6, "b² = 0.36 with b > 0.", null, 0.0001),
  num(String.raw`$y=b^x$ passes through $(3,64)$. Find the y-value on its inverse when $x=\tfrac1{16}$.`, -2, "b = 4; 4ʸ = 1/16 → y = −2."),
  mc(String.raw`Which is the inverse of $y=6^x-1$?`, String.raw`$x=6^y-1$`, [String.raw`$y=6^x+1$`, String.raw`$x=6^y+1$`, String.raw`$y=\dfrac1{6^x-1}$`], "Swap x and y; nothing else changes."),
  num(String.raw`Find the x-intercept of the inverse of $y=3^x-9$.`, -8, "The original has y-intercept 1 − 9 = −8, so the inverse has x-intercept −8."),
  num(String.raw`Find the y-intercept of the inverse of $y=3^x-9$.`, 2, "The original has x-intercept 2 (3² = 9), so the inverse has y-intercept 2."),
  tf(String.raw`The inverse of $y=5^x+2$ is defined at $x=1$.`, false, "Its domain is x > 2."),
  ms(String.raw`Select every feature of the inverse of $y=\left(\tfrac16\right)^x$.`, ["domain x > 0", "x-intercept 1", "increasing", "vertical asymptote x = 0", "range y > 0"], [0, 1, 3], "Domain and range swap; the inverse of a decreasing function decreases; its range is all real numbers."),
  num("The exponential shown has the dashed horizontal asymptote. Its inverse has the vertical asymptote x = c. Find c.", -2, "y = k becomes x = k.", planeDoc({ view: { xmin: -5, xmax: 5, ymin: -4, ymax: 6 }, curves: [{ f: (x) => 1.5 ** x - 2, color: "violet" }], lines: [{ m: 0, b: -2, color: "red", dash: true }], step: { x: 1, y: 1 } })),
  num(String.raw`Estimate the exponent $y$ with $2^y=12$, to 2 decimal places.`, 3.58, "2³ = 8 and 2⁴ = 16; 2^3.58 ≈ 11.96.", null, 0.011),
  mc(String.raw`Which is the inverse of $y=2\cdot5^x$, with the power isolated?`, String.raw`$5^y=\dfrac x2$`, [String.raw`$5^y=2x$`, String.raw`$5^y=x-2$`, String.raw`$y=5^{x/2}$`], "Swap, then divide by 2."),
  num(String.raw`Find the x-intercept of the inverse of $y=4\cdot3^x$.`, 4, "The original has y-intercept 4."),
  num("The graph shows the inverse of y = 1.5ˣ. The marked point has y-value 2. Find its x-coordinate.", 2.25, "1.5² = 2.25.", graph(lg(1.5), { xmin: -1, xmax: 6, ymin: -3, ymax: 4 }, [P(2.25, 2, false)], { a: 0.02 }), 0.0001),
  tf(String.raw`If $(5,2)$ is on the inverse of $y=b^x$, then $b=\sqrt5$.`, true, "(2, 5) is on y = bˣ, so b² = 5."),
  num(String.raw`Find the y-value on the inverse of $y=2^{x+3}$ when $x=1$.`, -3, "1 = 2^(y + 3) → y + 3 = 0."),
  mc(String.raw`Which exponential has an inverse with domain $x>4$?`, String.raw`$y=2^x+4$`, [String.raw`$y=2^x-4$`, String.raw`$y=2^{x-4}$`, String.raw`$y=4\cdot2^x$`], "The range y > 4 becomes the domain x > 4."),
  num(String.raw`Find the y-value on the inverse of $y=10^x$ when $x=0.001$.`, -3, "10⁻³ = 0.001."),
  num("The graph shows the inverse of y = bˣ through the marked point. Find b.", 5, "(25, 2) on the inverse means b² = 25.", graph(lg(5), { xmin: -2, xmax: 30, ymin: -2, ymax: 3 }, [P(25, 2)], { a: 0.02, step: { x: 5, y: 1 } })),
];
