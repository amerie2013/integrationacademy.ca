// 4.4 Exponential Functions and Their Properties — 20 easy + 20 medium questions
import { mc, ms, num, tf } from "./kit.mjs";
import { P, planeDoc } from "./fig.mjs";

const ex = (a, b, pts, view = { xmin: -3, xmax: 4, ymin: -1, ymax: 20 }) => planeDoc({ view, curves: [{ f: (x) => a * b ** x, color: "violet" }], points: pts, step: { x: 1, y: 2 } });

export const E = [
  num(String.raw`What is the y-intercept of $y=5(3)^x$?`, 5, "a."),
  mc(String.raw`Is $y=0.6^x$ growth or decay?`, "decay", ["growth", "neither", "linear"], "0 < b < 1."),
  num(String.raw`What is the horizontal asymptote of $y=4^x$? Enter its y-value.`, 0, "y = 0."),
  tf(String.raw`The range of $y=2^x$ is $y\ge0$.`, false, "y > 0: it never reaches 0."),
  num(String.raw`Evaluate $y=2^x$ at $x=5$.`, 32, "2⁵."),
  num(String.raw`Evaluate $y=10\left(\tfrac12\right)^x$ at $x=2$.`, 2.5, "10/4.", null, 1e-9),
  mc("A table has a constant ratio between consecutive y-values. The relation is…", "exponential", ["linear", "quadratic", "not a function"], "Constant ratio."),
  num(String.raw`What is the ratio of the table $y=3,6,12,24$?`, 2, "6 ÷ 3."),
  num(String.raw`What comes next: $100, 50, 25, \ldots$?`, 12.5, "× ½.", null, 1e-9),
  mc("Which is an exponential function?", String.raw`$y=3(2)^x$`, [String.raw`$y=x^3$`, String.raw`$y=2x+3$`, String.raw`$y=x^2$`], "The variable is in the exponent."),
  tf(String.raw`$y=1^x$ is an exponential function.`, false, "It is the line y = 1."),
  num(String.raw`$y=ab^x$ passes through $(0,7)$. Find $a$.`, 7, "a is the y-intercept."),
  mc("Which base gives decay?", String.raw`$0.9$`, [String.raw`$1.1$`, String.raw`$2$`, String.raw`$1$`], "0 < b < 1."),
  num(String.raw`Evaluate $3^x$ at $x=-1$ (4 decimals).`, 1 / 3, "⅓.", null, 0.0005),
  tf("The domain of an exponential function y = bˣ is all real numbers.", true, "Any exponent is allowed."),
  num(String.raw`Evaluate $y=2(5)^x$ at $x=2$.`, 50, "2 × 25."),
  mc(String.raw`The table $x$: 0, 1, 2, 3; $y$: 1, 4, 7, 10 is…`, "linear", ["exponential", "quadratic", "neither"], "Constant first difference 3."),
  num(String.raw`$y=4b^x$ passes through $(1,12)$. Find $b$.`, 3, "4b = 12."),
  num("Read the y-intercept of the graph.", 6, "The curve crosses the y-axis at 6.", ex(6, 0.5, [P(0, 6), P(1, 3)], { xmin: -2, xmax: 4, ymin: -1, ymax: 20 })),
  num("The graph passes through (0, 2) and (1, 6). Find the base b.", 3, "6 ÷ 2.", ex(2, 3, [P(0, 2), P(1, 6)])),
];

export const M = [
  num(String.raw`$y=ab^x$ passes through $(0,3)$ and $(2,48)$. Find $b$.`, 4, "3b² = 48."),
  num(String.raw`$y=ab^x$ passes through $(1,10)$ and $(2,50)$. Find $a$.`, 2, "b = 5; 5a = 10."),
  num(String.raw`$y=ab^x$ passes through $(2,4)$ and $(4,1)$. Find the y-intercept.`, 16, "b² = ¼ → b = ½; a·¼ = 4."),
  ms(String.raw`Which are true for $y=2(3)^x$? Select all.`, ["domain all real numbers", "range y > 0", "y-intercept 2", "increasing", "asymptote y = 2"], [0, 1, 2, 3], "The asymptote is y = 0."),
  num(String.raw`An exponential table has $y=5,\ 7.5,\ 11.25$. What comes next (3 decimals)?`, 16.875, "Ratio 1.5.", null, 0.0005),
  mc(String.raw`The table $x$: 0, 1, 2, 3; $y$: 1, 3, 6, 10 is…`, "quadratic", ["exponential", "linear", "neither"], "Second differences 1, 1."),
  num(String.raw`$y=a(2)^x$ passes through $(3,40)$. Find $a$.`, 5, "8a = 40."),
  num(String.raw`For which $x$ is $2^x=64$?`, 6, "2⁶."),
  mc("Which function is decreasing and has y-intercept 3?", String.raw`$y=3(0.4)^x$`, [String.raw`$y=0.4(3)^x$`, String.raw`$y=3(4)^x$`, String.raw`$y=-3(0.4)^x$`], "a = 3, b < 1."),
  tf("For b > 1, an exponential function eventually exceeds any quadratic function.", true, "Exponential growth outpaces polynomial growth."),
  num(String.raw`What is the smallest whole number $x$ with $2^x>1000$?`, 10, "2¹⁰ = 1024."),
  num(String.raw`Evaluate $y=5(1.2)^x$ at $x=2$.`, 7.2, "5 × 1.44.", null, 1e-9),
  mc(String.raw`Which equals $\left(\tfrac12\right)^x$?`, String.raw`$2^{-x}$`, [String.raw`$-2^x$`, String.raw`$2^{x/2}$`, String.raw`$\frac{x}{2}$`], "½ = 2⁻¹."),
  num(String.raw`For $y=2^x$, what is the first difference from $x=3$ to $x=4$?`, 8, "16 − 8."),
  num(String.raw`For $y=2(3)^x$, what is $y(5)\div y(3)$?`, 9, "3²."),
  num("The curve passes through (1, 6) and (2, 18). What is its y-intercept?", 2, "b = 3; 6 ÷ 3.", ex(2, 3, [P(1, 6), P(2, 18)])),
  num("A decay curve passes through (0, 40) and (1, 10). Find b.", 0.25, "10/40.", ex(40, 0.25, [P(0, 40), P(1, 10)], { xmin: -1, xmax: 4, ymin: -2, ymax: 45 }), 1e-9),
  tf("Exponential tables have constant second differences.", false, "They have a constant ratio."),
  num(String.raw`Where does $y=4^x$ meet $y=2^x+2$? Enter x.`, 1, "Let u = 2ˣ: u² − u − 2 = 0 → u = 2."),
  num(String.raw`For $y=8\left(\tfrac12\right)^x$, find $x$ when $y=0.5$.`, 4, "(½)ˣ = 1/16."),
];
