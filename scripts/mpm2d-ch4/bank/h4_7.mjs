// 4.7 Comparing y = x² and y = 2ˣ — 20 hard questions
import { mc, ms, num, tf, fill } from "./kit.mjs";
import { planeDoc } from "./fig.mjs";

export const TOPIC = "4.7 Comparing y = x² and y = 2ˣ";
export const Q = [
  num(`Evaluate $\\dfrac{2^{-3}\\times2^5}{2^{-1}}$.`, 8, "$2^{2-(-1)}=2^3$."),
  num(`Evaluate $(3^2)^{-1}\\times3^3$.`, 3, "$3^{-2+3}$."),
  num(`Solve $2^x=\\frac{1}{32}$.`, -5, "$\\frac{1}{32}=2^{-5}$."),
  num(`Solve $3^x=1$.`, 0, "$3^0=1$."),
  num(`Solve $10^x=0.0001$.`, -4, "$\\frac{1}{10\\,000}$."),
  mc(`At $x=-3$, which is larger?`, "$x^2$", ["$2^x$", "they are equal", "neither is defined"], "$9$ vs $\\frac18$."),
  num(`How many times do the graphs of $y=x^2$ and $y=2^x$ intersect?`, 3, "At $x=2$, $x=4$ and once for $x<0$."),
  tf(`For every $x>4$, $2^x>x^2$.`, true, "After $x=4$ the exponential stays ahead."),
  num(`A population is $P=5000(2)^{t/10}$ ($t$ in years). Find $P$ when $t=30$.`, 40000, "$5000\\times2^3$."),
  num(`A radioactive sample is $A=80\\left(\\frac12\\right)^t$ grams. Find $A$ at $t=3$.`, 10, "$80\\times\\frac18$."),
  num(`How many halvings take $64$ down to $\\frac14$?`, 8, "$64\\times2^{-n}=\\frac14\\Rightarrow2^n=256$."),
  ms(`Select all true statements about $y=3^x$.`, ["it passes through $(0,1)$", "$y>0$ for every $x$", "it has constant second differences", "it is symmetric about the $y$-axis", "each step multiplies $y$ by 3"], [0, 1, 4], "Exponential: constant ratio, not constant differences."),
  fill(`$2^{-2}+2^{-1}+2^0=$ ___ (decimal)`, ["1.75"], "$0.25+0.5+1$."),
  num(`Evaluate $(-2)^{-2}$ as a decimal.`, 0.25, "$\\frac{1}{(-2)^2}=\\frac14$."),
  tf(`$(-2)^{-3}=\\frac18$.`, false, "$(-2)^{-3}=\\frac{1}{(-2)^3}=-\\frac18$."),
  num(`Evaluate $(-2)^{-3}$ as a decimal.`, -0.125, "$-\\frac18$."),
  mc(`Simplify $\\dfrac{5^{-1}}{5^{-3}}$.`, "$25$", ["$\\frac{1}{25}$", "$5^{-4}$", "$\\frac15$"], "$5^{-1-(-3)}=5^2$."),
  num(`On day $x$ you receive $2^x$ cents. How many dollars do you receive on day 20?`, 10485.76, "$2^{20}=1\\,048\\,576$ cents.", null, 0.01),
  num(`At $x=10$, how much larger is $2^x$ than $x^3$?`, 24, "$1024-1000$."),
  num(`The graph shows $y=a(2)^x$ through $(0,3)$ and $(1,6)$. Find $a$.`, 3, "At $x=0$: $a\\cdot1=3$.", planeDoc({ view: { xmin: -2, xmax: 3, ymin: -1, ymax: 14 }, curves: [{ f: (x) => 3 * 2 ** x, color: "red" }], points: [{ x: 0, y: 3, label: "(0, 3)", color: "blue" }, { x: 1, y: 6, label: "(1, 6)", color: "blue" }], step: { x: 1, y: 2 } })),
];
