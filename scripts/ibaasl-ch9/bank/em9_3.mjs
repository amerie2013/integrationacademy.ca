// 9.3 Logarithms and Their Graphs — 20 easy + 20 medium questions
import { mc, ms, num, tf, fill } from "./kit.mjs";
import { planeDoc, P } from "./fig.mjs";

const S = String.raw;
const lb = (b) => (x) => Math.log(x) / Math.log(b);

export const E = [
  num(S`Evaluate $\log_2 32$.`, 5, "2⁵ = 32."),
  num(S`Evaluate $\log_7 49$.`, 2, "7² = 49."),
  num(S`Evaluate $\log 100$.`, 2, "10² = 100."),
  num(S`Evaluate $\log_4\frac14$.`, -1, "4⁻¹ = ¼."),
  num(S`Evaluate $\log_{9}3$ as a decimal.`, 0.5, "9^(1/2) = 3.", null, 0.001),
  num(S`Evaluate $\ln e^{6}$.`, 6, "ln and e undo each other."),
  num(S`Evaluate $\log_8 8$.`, 1, "log_b b = 1."),
  num(S`Evaluate $\ln 1$.`, 0, "e⁰ = 1."),
  mc(S`$\log_3 x=4$ in exponential form is:`, S`$3^4=x$`, [S`$x^4=3$`, S`$4^3=x$`, S`$3^x=4$`], "log_b x = y ⇔ bʸ = x."),
  mc(S`$5^2=25$ in logarithmic form is:`, S`$\log_5 25=2$`, [S`$\log_2 25=5$`, S`$\log_{25}5=2$`, S`$\log_5 2=25$`], "The exponent is the log."),
  mc(S`$\ln x$ means:`, S`$\log_e x$`, [S`$\log_{10}x$`, S`$\log_2 x$`, S`$\frac1x$`], "Natural log, base e."),
  tf(S`$\log_2(-8)$ is a real number.`, false, "Logs of negative numbers are not defined."),
  tf(S`$10^{\log 6}=6$.`, true, "Inverse functions."),
  fill(S`The graph of $y=\log_b x$ always passes through the point $(\_\_\_, 0)$.`, ["1"], "log_b 1 = 0."),
  mc(S`The vertical asymptote of $y=\log_5 x$ is:`, S`$x=0$`, [S`$y=0$`, S`$x=1$`, S`$x=5$`], "Domain x > 0."),
  mc(S`The domain of $y=\ln x$ is:`, S`$x>0$`, [S`$x\ge0$`, "all real x", S`$x>1$`], "Only positive inputs."),
  mc("The graph of y = log₂x is the reflection of which graph in y = x?", S`$y=2^x$`, [S`$y=x^2$`, S`$y=\frac1x$`, S`$y=-2^x$`], "Inverse functions.", planeDoc({ view: { xmin: -3, xmax: 8, ymin: -3, ymax: 8 }, curves: [{ f: lb(2), a: 0.01, b: 8 }, { f: (x) => 2 ** x, color: "green" }], lines: [{ m: 1, b: 0, color: "gray", dash: true }], step: { x: 1, y: 1 } })),
  mc("The graph shows y = log_b x through (5, 1). Find b.", "5", ["1", "10", "e"], "log_b 5 = 1.", planeDoc({ view: { xmin: -1, xmax: 10, ymin: -3, ymax: 3 }, curves: [{ f: lb(5), a: 0.01, b: 10 }], points: [P(5, 1, "", "red")], step: { x: 1, y: 1 } })),
  num(S`Solve $\log_2 x=3$.`, 8, "x = 2³."),
  num(S`Solve $\log x=-1$ as a decimal.`, 0.1, "x = 10⁻¹.", null, 0.0001),
];

export const M = [
  num(S`Evaluate $\log_{16}8$ as a decimal.`, 0.75, "16^(3/4) = 8.", null, 0.001),
  num(S`Evaluate $\log_{1/2}16$.`, -4, "(1/2)⁻⁴ = 16."),
  num(S`Evaluate $3^{\log_3 20}$.`, 20, "Inverse."),
  num(S`Evaluate $\ln\left(\frac{1}{e^3}\right)$.`, -3, "ln e⁻³."),
  num(S`Solve $\log_3(x+4)=2$.`, 5, "x + 4 = 9."),
  num(S`Solve $\log_x 81=4$.`, 3, "x⁴ = 81."),
  num(S`Solve $\ln(2x)=0$.`, 0.5, "2x = 1.", null, 0.001),
  num(S`The vertical asymptote of $y=\log_2(x-7)$ is $x=$ ?`, 7, "x − 7 = 0."),
  num(S`Find the x-intercept of $y=\log_3(x+2)$.`, -1, "x + 2 = 1."),
  num(S`Find the x-intercept of $y=\ln x-2$ (3 d.p.).`, Math.round(Math.exp(2) * 1000) / 1000, "ln x = 2 ⇒ x = e².", null, 0.001),
  mc(S`The domain of $y=\log(5-x)$ is:`, S`$x<5$`, [S`$x>5$`, S`$x>-5$`, "all real x"], "5 − x > 0."),
  mc(S`The inverse of $f(x)=\log_4 x$ is:`, S`$f^{-1}(x)=4^x$`, [S`$f^{-1}(x)=x^4$`, S`$f^{-1}(x)=\log_x4$`, S`$f^{-1}(x)=\frac{1}{\log_4x}$`], "Exponential and log are inverses."),
  mc(S`The inverse of $f(x)=e^{x}-3$ is:`, S`$\ln(x+3)$`, [S`$\ln x+3$`, S`$\ln(x-3)$`, S`$e^{x+3}$`], "eʸ = x + 3."),
  mc("The graph shows y = log₂(x − h) + k. Find h.", "−3", ["3", "−1", "2"], "The asymptote is x = −3.", planeDoc({ view: { xmin: -5, xmax: 8, ymin: -4, ymax: 5 }, curves: [{ f: (x) => lb(2)(x + 3) - 1, a: -2.999, b: 8 }], vlines: [{ x: -3, color: "red", dash: true }], points: [P(-2, -1, "", "blue"), P(-1, 0, "", "green")], step: { x: 1, y: 1 } })),
  mc("For the same graph (asymptote x = −3, through (−2, −1)), find k.", "−1", ["1", "3", "0"], "log₂(1) + k = −1."),
  ms("Which statements about y = log_b x (b > 1) are true? Select all.", ["it is increasing", "its range is all real numbers", "it has a horizontal asymptote", "it passes through (b, 1)"], [0, 1, 3], "The asymptote is vertical."),
  tf(S`$\log_b x<0$ when $0<x<1$ and $b>1$.`, true, "A negative power gives a number below 1."),
  mc("pH = −log[H⁺]. A solution has [H⁺] = 10⁻⁴·⁵. Its pH is:", "4.5", ["−4.5", "0.45", "45"], "−log 10⁻⁴·⁵."),
  num("A sound has intensity 10⁷ times the threshold I₀. Find L = 10 log(I/I₀) in decibels.", 70, "10 × 7."),
  mc("The graphs show y = log₃x (violet) and another curve (amber) through (1, 0) and (9, 1). The amber curve is:", S`$y=\log_9 x$`, [S`$y=\log_3 9x$`, S`$y=3\log_3x$`, S`$y=\log_{1/3}x$`], "log₉ 9 = 1.", planeDoc({ view: { xmin: -1, xmax: 12, ymin: -3, ymax: 3 }, curves: [{ f: lb(3), a: 0.01, b: 12 }, { f: lb(9), a: 0.01, b: 12, color: "amber" }], points: [P(9, 1, "", "amber"), P(9, 2, "", "blue")], step: { x: 1, y: 1 } })),
];
