// 1.6 Powers: Zero & Negative Exponents (and square roots) — 20 easy + 20 medium questions
import { mc, ms, num, fill, tf } from "./kit.mjs";
import { graph } from "./svg.mjs";

export const E = [
  num(String.raw`Evaluate $2^5$.`, 32, String.raw`$2\cdot2\cdot2\cdot2\cdot2$.`),
  num(String.raw`Evaluate $(-3)^3$.`, -27, "Three negative factors: negative."),
  num(String.raw`Evaluate $9^0$.`, 1, "Any non-zero base to the power 0 is 1."),
  fill(String.raw`Evaluate $3^{-2}$ as a fraction: ___`, ["1/9"], String.raw`$\frac{1}{3^2}$.`),
  mc(String.raw`In $7^4$, what is the base?`, "$7$", ["$4$", "$28$", "$2401$"], "The base is the repeated factor."),
  mc(String.raw`$5^3$ means`, String.raw`$5\times5\times5$`, [String.raw`$5\times3$`, String.raw`$3\times3\times3\times3\times3$`, String.raw`$5+5+5$`], "The base 5 is a factor 3 times."),
  num(String.raw`Evaluate $\sqrt{81}$.`, 9, String.raw`$9^2=81$.`),
  tf(String.raw`$2^{-3}$ is a negative number.`, false, String.raw`$2^{-3}=\frac18$, positive.`),
  num(String.raw`Evaluate $(-1)^{6}$.`, 1, "Even number of negative factors."),
  fill(String.raw`Evaluate $\left(\frac12\right)^3$: ___`, ["1/8"], String.raw`$\frac{1}{8}$.`),
  num(String.raw`Evaluate $10^{-2}$ as a decimal.`, 0.01, String.raw`$\frac{1}{100}$.`, undefined, 0.000001),
  num(String.raw`Evaluate $-4^2$.`, -16, String.raw`Only $4$ is squared: $-16$.`),
  num(String.raw`Evaluate $(-4)^2$.`, 16, String.raw`$(-4)(-4)=16$.`),
  ms(String.raw`Which equal $1$? Select all.`, [String.raw`$5^0$`, String.raw`$(-5)^0$`, String.raw`$-5^0$`, String.raw`$1^{9}$`], [0, 1, 3], String.raw`$-5^0=-1$.`),
  num(String.raw`A square has side $7$ cm. What is its area in cm$^2$?`, 49, String.raw`$7^2=49$.`),
  num(String.raw`A cube has edge $3$ cm. What is its volume in cm$^3$?`, 27, String.raw`$3^3=27$.`),
  fill(String.raw`Solve $x^2=25$. Write both answers separated by a comma: ___`, ["5, -5", "5,-5", "-5, 5", "-5,5", "±5", "+-5"], String.raw`$5^2=25$ and $(-5)^2=25$.`),
  mc(String.raw`What is $\sqrt[3]{8}$?`, "$2$", ["$4$", "$\\frac83$", "$64$"], String.raw`$2^3=8$.`),
  tf(String.raw`$4^{-1}=\frac14$`, true, "A negative exponent means reciprocal."),
  mc("The graph shows powers of 3. Which value is shown at exponent 0?", "$1$", ["$0$", "$3$", String.raw`$\frac13$`], String.raw`$3^0=1$.`, graph({ series: [{ pts: [[-1, 0.333], [0, 1], [1, 3], [2, 9]] }], xmin: -2, xmax: 3, ymin: 0, ymax: 10, xstep: 1, ystep: 1, xlabel: "exponent", ylabel: "3^n" })),
];

export const M = [
  num(String.raw`Evaluate $2^3+3^2-4^0$.`, 16, String.raw`$8+9-1=16$.`),
  fill(String.raw`Evaluate $\left(\frac34\right)^{-2}$: ___`, ["16/9"], String.raw`Flip and square: $\frac{16}{9}$.`),
  fill(String.raw`Evaluate $(-2)^{-3}$: ___`, ["-1/8", "−1/8"], String.raw`$\frac{1}{(-2)^3}=-\frac18$.`),
  num(String.raw`Evaluate $5^2-2^{-1}\times8$.`, 21, String.raw`$25-\frac12\times8=25-4=21$.`),
  num(String.raw`Evaluate $\sqrt{0.64}$.`, 0.8, String.raw`$0.8^2=0.64$.`, undefined, 0.000001),
  fill(String.raw`Evaluate $\sqrt{\frac{36}{121}}$: ___`, ["6/11"], String.raw`$\frac{6}{11}$.`),
  mc(String.raw`Which is greatest?`, String.raw`$\left(\frac12\right)^{-3}$`, [String.raw`$\left(\frac12\right)^3$`, String.raw`$2^{-3}$`, String.raw`$2^{0}$`], String.raw`$8$, $\frac18$, $\frac18$, $1$.`),
  num(String.raw`Find $n$ if $2^n=64$.`, 6, String.raw`$2^6=64$.`),
  num(String.raw`Find $n$ if $10^n=0.001$.`, -3, String.raw`$0.001=\frac1{1000}=10^{-3}$.`),
  tf(String.raw`$\sqrt{-16}$ is a real number.`, false, "No real number squared is negative."),
  num(String.raw`Evaluate $\sqrt[3]{-64}$.`, -4, String.raw`$(-4)^3=-64$.`),
  ms(String.raw`Which values are negative? Select all.`, [String.raw`$(-3)^3$`, String.raw`$(-3)^{-2}$`, String.raw`$-3^{2}$`, String.raw`$(-3)^0$`, String.raw`$-3^{-1}$`], [0, 2, 4], String.raw`$-27$, $\frac19$, $-9$, $1$, $-\frac13$.`),
  num(String.raw`A population of $500$ doubles every year. How many are there after $3$ years?`, 4000, String.raw`$500\times2^3=4000$.`),
  num(String.raw`A cube has a volume of $125$ cm$^3$. How long is each edge, in cm?`, 5, String.raw`$\sqrt[3]{125}=5$.`),
  fill(String.raw`Evaluate $3^{-1}+3^{-2}$: ___`, ["4/9"], String.raw`$\frac13+\frac19=\frac49$.`),
  mc(String.raw`Evaluate $2+\sqrt{49}\times3$.`, "$23$", ["$27$", "$13$", "$63$"], String.raw`Root first: $2+7\times3=23$.`),
  num(String.raw`The graph shows a quantity halving each hour. What is it after $4$ hours?`, 5, String.raw`$80\times\left(\frac12\right)^4=5$.`, graph({ series: [{ pts: [[0, 80], [1, 40], [2, 20], [3, 10]] }], xmin: 0, xmax: 5, ymin: 0, ymax: 90, xstep: 1, ystep: 10, xlabel: "hours", ylabel: "amount" })),
  tf(String.raw`$\left(-\frac12\right)^{4}=\frac{1}{16}$`, true, "Even exponent: positive."),
  num(String.raw`Evaluate $(0.5)^{-2}$.`, 4, String.raw`$0.5=\frac12$; $\left(\frac12\right)^{-2}=2^2=4$.`),
  mc(String.raw`Which is the solution set of $x^2=0.49$?`, String.raw`$x=\pm0.7$`, [String.raw`$x=0.7$ only`, String.raw`$x=\pm0.07$`, String.raw`$x=\pm7$`], String.raw`$0.7^2=(-0.7)^2=0.49$.`),
];
