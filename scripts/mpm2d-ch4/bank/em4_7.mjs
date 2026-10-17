// 4.7 Comparing y = x² and y = 2ˣ — 20 easy + 20 medium questions
import { mc, ms, num, tf, fill } from "./kit.mjs";
import { planeDoc } from "./fig.mjs";

export const E = [
  num(`Evaluate $3^0$.`, 1, "Any non-zero base to the power 0."),
  num(`Evaluate $2^{-1}$ as a decimal.`, 0.5, "$\\frac12$."),
  num(`Evaluate $10^{-1}$ as a decimal.`, 0.1, "$\\frac{1}{10}$."),
  mc(`Evaluate $4^{-2}$.`, "$\\frac{1}{16}$", ["$-16$", "$-8$", "$16$"], "$\\frac{1}{4^2}$."),
  tf(`$5^{-2}=-25$.`, false, "$5^{-2}=\\frac{1}{25}$."),
  num(`Evaluate $2^5$.`, 32, "$2\\times2\\times2\\times2\\times2$."),
  mc(`The graph of $y=2^x$ passes through…`, "$(0,1)$", ["$(0,0)$", "$(1,1)$", "$(0,2)$"], "$2^0=1$."),
  tf(`The graph of $y=x^2$ is symmetric about the $y$-axis.`, true, "$(-x)^2=x^2$."),
  mc(`A table whose values have a constant ratio is…`, "exponential", ["quadratic", "linear", "constant"], "Multiplying by the same number each step."),
  num(`Evaluate $y=2^x$ at $x=-2$ as a decimal.`, 0.25, "$\\frac14$."),
  fill(`$\\frac18=2^{\\,?}$. The exponent is ___`, ["-3"], "$2^3=8$."),
  tf(`$(-7)^0=1$.`, true, "The base is not zero."),
  num(`Evaluate $y=x^2$ at $x=-3$.`, 9, "$(-3)^2$."),
  mc(`Which relation eventually grows faster?`, "$y=2^x$", ["$y=x^2$", "they grow at the same rate", "neither grows"], "At $x=10$: $1024$ vs $100$."),
  num(`Evaluate $100^0$.`, 1, "Power 0."),
  num(`Evaluate $5^{-1}$ as a decimal.`, 0.2, "$\\frac15$."),
  tf(`$y=2^x$ is never negative.`, true, "Powers of 2 are always positive."),
  mc(`Evaluate $3^{-2}$.`, "$\\frac19$", ["$-9$", "$-6$", "$\\frac16$"], "$\\frac{1}{3^2}$."),
  num(`The values $1,2,4,8$ have a constant ratio. What is it?`, 2, "$\\frac21$."),
  mc(`Which equation is graphed?`, "$y=2^x$", ["$y=x^2$", "$y=2x$", "$y=x+1$"], "It passes through $(0,1)$ and doubles each step.", planeDoc({ view: { xmin: -3, xmax: 4, ymin: -1, ymax: 10 }, curves: [{ f: (x) => 2 ** x, color: "red" }], points: [[0, 1], [1, 2], [2, 4], [3, 8]].map(([x, y]) => ({ x, y, label: `(${x}, ${y})`, color: "blue" })), step: { x: 1, y: 1 } })),
];

export const M = [
  num(`Evaluate $2^{-4}$ as a decimal.`, 0.0625, "$\\frac{1}{16}$."),
  num(`Evaluate $2^{-1}+2^{-2}$ as a decimal.`, 0.75, "$0.5+0.25$."),
  mc(`Evaluate $3^4\\times3^{-6}$.`, "$\\frac19$", ["$9$", "$-9$", "$3^{-24}$"], "$3^{-2}$."),
  num(`Evaluate $10^3\\div10^5$ as a decimal.`, 0.01, "$10^{-2}$."),
  num(`Evaluate $\\left(\\frac12\\right)^{-3}$.`, 8, "$\\frac{1}{1/8}$."),
  tf(`$2^x$ and $x^2$ are equal when $x=4$.`, true, "$16=16$."),
  num(`Besides $x=4$, at which positive $x$ are $2^x$ and $x^2$ equal?`, 2, "$4=4$."),
  mc(`The table $3,6,12,24$ is…`, "exponential", ["quadratic", "linear", "neither of these"], "Ratio 2."),
  mc(`The table $0,1,4,9$ (for $x=0,1,2,3$) is…`, "quadratic", ["exponential", "linear", "constant"], "Second differences 2."),
  num(`Evaluate $3^{-3}$ as a decimal (three decimals).`, 0.037, "$\\frac{1}{27}$.", null, 0.001),
  num(`Evaluate $2^{10}$.`, 1024, "$2^5\\times2^5$."),
  num(`Evaluate $10^2$.`, 100, "Compare with $2^{10}$: the exponential is ten times larger."),
  ms(`Select all expressions equal to $\\frac{1}{16}$.`, ["$2^{-4}$", "$4^{-2}$", "$16^{-1}$", "$-16$", "$8^{-2}$"], [0, 1, 2], "$8^{-2}=\\frac{1}{64}$."),
  fill(`$0.001=10^{\\,?}$. The exponent is ___`, ["-3"], "$\\frac{1}{1000}$."),
  tf(`The values of $\\left(\\frac12\\right)^x$ decrease as $x$ increases.`, true, "Each step halves the value."),
  num(`A colony is $N=100(2)^t$. Find $N$ at $t=-1$.`, 50, "$100\\times\\frac12$."),
  num(`A colony is $N=100(2)^t$. Find $N$ at $t=3$.`, 800, "$100\\times8$."),
  mc(`The second differences of $y=2^x$ are…`, "not constant", ["constant 2", "constant 4", "zero"], "They double too."),
  num(`Evaluate $6^0\\times6^2$.`, 36, "$1\\times36$."),
  num(`A ball bounces to half its height each time: $h=8\\left(\\frac12\\right)^n$. Find the height after 2 bounces.`, 2, "$8\\times\\frac14$.", planeDoc({ view: { xmin: -0.5, xmax: 5, ymin: 0, ymax: 9 }, curves: [{ f: (n) => 8 * 0.5 ** n, color: "red" }], points: [0, 1, 2, 3, 4].map((n) => ({ x: n, y: 8 * 0.5 ** n, color: "blue" })), xlabel: "n", ylabel: "h", step: { x: 1, y: 1 } })),
];
