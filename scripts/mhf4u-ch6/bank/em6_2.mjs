// 6.2 Logarithms — 20 easy + 20 medium questions
import { mc, ms, num, tf, fill } from "./kit.mjs";
import { planeDoc } from "./fig.mjs";
const S = String.raw;
const lg = (b) => (x) => Math.log(x) / Math.log(b);
const G = (b, pts, view = { xmin: -1, xmax: 17, ymin: -3, ymax: 5 }) => planeDoc({ view, curves: [{ f: lg(b), a: 0.01, color: "violet" }], points: pts, step: { x: 1, y: 1 } });

export const E = [
  num(S`Evaluate $\log_2 16$.`, 4, "16 = 2⁴, and a logarithm is the exponent."),
  num(S`Evaluate $\log_3 9$.`, 2, "3² = 9."),
  num(S`Evaluate $\log_5 125$.`, 3, "5³ = 125."),
  num(S`Evaluate $\log 10\,000$.`, 4, "log means base 10, and 10⁴ = 10 000."),
  num(S`Evaluate $\log_7 1$.`, 0, "7⁰ = 1: the log of 1 is 0 for every base."),
  num(S`Evaluate $\log_6 6$.`, 1, "6¹ = 6."),
  num(S`Evaluate $\log_2\frac12$.`, -1, "2⁻¹ = 1/2."),
  num(S`Evaluate $\log 0.01$.`, -2, "10⁻² = 0.01."),
  mc(S`Which is the logarithmic form of $3^4=81$?`, S`$\log_3 81=4$`, [S`$\log_4 81=3$`, S`$\log_{81}3=4$`, S`$\log_3 4=81$`], "The base stays the base; the exponent is the value of the log."),
  mc(S`Which is the exponential form of $\log_2 32=5$?`, S`$2^5=32$`, [S`$5^2=32$`, S`$32^5=2$`, S`$2^{32}=5$`], "log_b x = y means bʸ = x."),
  mc(S`Which is the exponential form of $\log 1000=3$?`, S`$10^3=1000$`, [S`$3^{10}=1000$`, S`$1000^3=10$`, S`$10^{1000}=3$`], "No written base means base 10."),
  tf(S`$\log_2(-8)$ is defined.`, false, "2ʸ is always positive, so it can never equal −8."),
  tf(S`$\log_b 1=0$ for every allowed base $b$.`, true, "b⁰ = 1 for every b > 0."),
  tf(S`$\log_4 2=2$.`, false, "4² = 16, not 2. In fact 4^(1/2) = 2, so log₄ 2 = 1/2."),
  fill(S`$\log_3 x=2$ means $x=$ ____.`, ["9"], "3² = 9."),
  fill(S`A logarithm with no base written has base ____.`, ["10", "ten"], "log x is the common logarithm, base 10."),
  mc(S`Between which two integers is $\log 50$?`, "1 and 2", ["0 and 1", "2 and 3", "5 and 6"], "10¹ = 10 < 50 < 100 = 10²."),
  num(S`Evaluate $3^{\log_3 8}$.`, 8, "b^(log_b x) = x: the log is the exponent that turns 3 into 8."),
  mc("The graph is y = log₂ x. What is log₂ 8, read from the graph?", "3", ["4", "2", "8"], "The point (8, 3) is on the curve: 2³ = 8.", G(2, [{ x: 8, y: 3, label: "(8, 3)", color: "blue" }])),
  mc("The graph is y = log₂ x. Which point is on it?", "(1/2, −1)", ["(−1, 1/2)", "(2, 4)", "(0, 1)"], "2⁻¹ = 1/2.", G(2, [{ x: 1, y: 0, label: "(1, 0)", color: "amber" }])),
];

export const M = [
  num(S`Evaluate $\log_3\frac1{27}$.`, -3, "1/27 = 3⁻³."),
  num(S`Evaluate $\log_2\sqrt2$ (decimal).`, 0.5, "√2 = 2^(1/2).", null, 0.001),
  num(S`Evaluate $\log_5\sqrt[3]{25}$ (three decimals).`, 2 / 3, "∛25 = 5^(2/3).", null, 0.002),
  num(S`Evaluate $\log_4 8$ (decimal).`, 1.5, "4^y = 8 ⇒ 2^(2y) = 2³ ⇒ y = 3/2.", null, 0.001),
  num(S`Evaluate $\log_9 27$ (decimal).`, 1.5, "9^y = 27 ⇒ 3^(2y) = 3³ ⇒ y = 3/2.", null, 0.001),
  num(S`Evaluate $\log_{1/2}8$.`, -3, "(1/2)^y = 8 ⇒ 2^(−y) = 2³ ⇒ y = −3."),
  num(S`Evaluate $\log 0.0001+\log_2 64$.`, 2, "−4 + 6 = 2."),
  num(S`Find $x$ if $\log_x 36=2$.`, 6, "x² = 36 with x > 0."),
  num(S`Find $x$ if $\log_2 x=-3$ (decimal).`, 0.125, "x = 2⁻³ = 1/8.", null, 0.0001),
  num(S`Find $x$ if $\log_{x}8=\frac32$.`, 4, "x^(3/2) = 8 ⇒ x = 8^(2/3) = 4."),
  num(S`Evaluate $\log 350$ to three decimals.`, Math.log10(350), "Calculator: log 350 ≈ 2.544, between 2 and 3.", null, 0.002),
  num(S`Evaluate $\log_5 5^{-7}+\log_8 1$.`, -7, "log_b bˣ = x, and log₈ 1 = 0."),
  ms(S`Select every expression equal to $2$.`, [S`$\log_3 9$`, S`$\log 100$`, S`$\log_5 25$`, S`$\log_2 2$`, S`$\log_4 16$`], [0, 1, 2, 4], "Each argument is the base squared, except log₂ 2 = 1."),
  ms(S`Select every logarithm that is negative.`, [S`$\log_2\frac14$`, S`$\log 0.5$`, S`$\log_3 3$`, S`$\log_{1/2}4$`, S`$\log_5 1$`], [0, 1, 3], "For b > 1, arguments below 1 give negative logs; for b < 1, arguments above 1 do."),
  mc(S`Which value is closest to $\log_2 100$?`, "6.6", ["50", "4.6", "10"], "2⁶ = 64 and 2⁷ = 128, so the value is between 6 and 7."),
  mc(S`Which statement is equivalent to $y=\log_b x$?`, S`$b^y=x$`, [S`$x^y=b$`, S`$y^b=x$`, S`$b^x=y$`], "The definition of a logarithm."),
  tf(S`$\log_{10}(10^{2.7})=2.7$.`, true, "log_b bˣ = x."),
  tf(S`$\log_3 15$ is between $2$ and $3$.`, true, "3² = 9 < 15 < 27 = 3³."),
  mc("The graph is y = log₃ x. Use it to estimate log₃ 5.", "about 1.5", ["about 0.5", "about 2.5", "about 5"], "5 is between 3 (log 1) and 9 (log 2); a calculator gives 1.465.", G(3, [{ x: 3, y: 1, label: "(3, 1)", color: "blue" }, { x: 9, y: 2, label: "(9, 2)", color: "blue" }], { xmin: -1, xmax: 12, ymin: -2, ymax: 3 })),
  mc("The graph shows y = log_b x passing through (25, 2). What is b?", "5", ["25", "2", "12.5"], "b² = 25 with b > 0.", G(5, [{ x: 25, y: 2, label: "(25, 2)", color: "blue" }], { xmin: -1, xmax: 30, ymin: -2, ymax: 3 })),
];
