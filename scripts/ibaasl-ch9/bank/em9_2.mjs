// 9.2 Exponential Functions and the Number e — 20 easy + 20 medium questions
import { mc, ms, num, tf, fill } from "./kit.mjs";
import { planeDoc, P } from "./fig.mjs";

const S = String.raw;
const r2 = (v) => Math.round(v * 100) / 100;

export const E = [
  mc(S`Which function shows exponential growth?`, S`$y=2(1.3)^x$`, [S`$y=2(0.3)^x$`, S`$y=1.3x+2$`, S`$y=2x^{1.3}$`], "Base greater than 1."),
  mc(S`Which function shows exponential decay?`, S`$y=6(0.75)^x$`, [S`$y=0.75(6)^x$`, S`$y=6e^{x}$`, S`$y=6x^{0.75}$`], "Base between 0 and 1."),
  num(S`Find the y-intercept of $y=5\cdot2^x$.`, 5, "2⁰ = 1."),
  num(S`Find the y-intercept of $y=3^x+4$.`, 5, "1 + 4."),
  mc(S`The horizontal asymptote of $y=2^x-7$ is:`, S`$y=-7$`, [S`$y=0$`, S`$x=-7$`, S`$y=2$`], "Shifted down 7."),
  mc(S`The range of $y=4^x$ is:`, S`$y>0$`, [S`$y\ge0$`, "all real y", S`$y>4$`], "4ˣ is always positive."),
  num("A quantity grows by 6% per year. What is the growth factor?", 1.06, "1 + 0.06.", null, 0.0001),
  num("A quantity decreases by 9% per year. What is the decay factor?", 0.91, "1 − 0.09.", null, 0.0001),
  num("200 bacteria double every hour. How many after 4 hours?", 3200, "200 × 2⁴."),
  num(S`Evaluate $e^{2}$ to 3 decimal places.`, r2(Math.exp(2) * 10) / 10, "e² ≈ 7.389.", null, 0.001),
  mc(S`The value of $e$ to 3 decimal places is:`, "2.718", ["3.142", "2.178", "1.618"], "e ≈ 2.71828."),
  tf(S`The graphs of $y=3^x$ and $y=\left(\frac13\right)^x$ are reflections of each other in the y-axis.`, true, "(1/3)ˣ = 3⁻ˣ."),
  tf(S`The graph of $y=5^x$ crosses the x-axis.`, false, "5ˣ > 0 for all x."),
  fill(S`$\lim_{n\to\infty}\left(1+\frac1n\right)^n=$ ___ (a letter).`, ["e"], "This limit defines e."),
  num("1000 dollars is invested at 5% compounded annually. Find the value after 2 years.", 1102.5, "1000 × 1.05².", null, 0.01),
  num("A car worth 20 000 dollars loses 10% a year. Find its value after 2 years.", 16200, "20 000 × 0.9²."),
  mc("The graph shows y = a·bˣ. Which statement is true?", "it shows decay with a = 4", ["it shows growth with a = 4", "it shows decay with a = 1", "its asymptote is y = 4"], "Falls from (0, 4).", planeDoc({ view: { xmin: -2, xmax: 5, ymin: -1, ymax: 10 }, curves: [{ f: (x) => 4 * 0.5 ** x }], points: [P(0, 4, "", "red")], step: { x: 1, y: 1 } })),
  mc("The dashed line on the graph of y = 2ˣ + 3 is:", "the asymptote y = 3", ["the asymptote y = 2", "the x-axis", "the line y = x"], "y = k.", planeDoc({ view: { xmin: -4, xmax: 3, ymin: -1, ymax: 11 }, curves: [{ f: (x) => 2 ** x + 3 }], lines: [{ m: 0, b: 3, color: "red", dash: true }], step: { x: 1, y: 1 } })),
  ms("Which pass through (0, 1)? Select all.", [S`$y=7^x$`, S`$y=e^x$`, S`$y=0.2^x$`, S`$y=2\cdot3^x$`], [0, 1, 2], "b⁰ = 1, but 2 · 3⁰ = 2."),
  mc("Continuous compounding uses the formula:", S`$A=Pe^{rt}$`, [S`$A=P(1+r)^t$`, S`$A=Prt$`, S`$A=P+e^{rt}$`], "Limit of compounding n times."),
];

export const M = [
  mc(S`The range of $y=-2\cdot3^x+5$ is:`, S`$y<5$`, [S`$y>5$`, S`$y>-2$`, S`$y<-2$`], "Reflected below the asymptote y = 5."),
  num(S`Find the x-intercept of $y=2^x-16$.`, 4, "2ˣ = 16."),
  num(S`Find the y-intercept of $y=3\cdot2^{x+1}-4$.`, 2, "3 · 2 − 4."),
  num("A town of 42 000 grows by 1.8% a year. Find the population after 10 years (nearest whole).", Math.round(42000 * 1.018 ** 10), "42 000 × 1.018¹⁰.", null, 1),
  num("A medicine has a half-life of 4 hours. What percentage of a dose remains after 10 hours (2 d.p.)?", r2(100 * 0.5 ** 2.5), "100 × 0.5^(10/4).", null, 0.01),
  num("5000 dollars is invested at 4.8% compounded monthly. Find the value after 3 years (2 d.p.).", r2(5000 * (1 + 0.048 / 12) ** 36), "5000(1.004)³⁶.", null, 0.01),
  num("5000 dollars is invested at 4.8% compounded continuously. Find the value after 3 years (2 d.p.).", r2(5000 * Math.exp(0.144)), "5000e^0.144.", null, 0.01),
  num(S`$y=a\cdot b^x$ passes through $(0,7)$ and $(2,28)$. Find $b$ ($b>0$).`, 2, "b² = 4."),
  num(S`$y=a\cdot b^x$ passes through $(1,15)$ and $(3,135)$. Find $a$ ($b>0$).`, 5, "b² = 9, b = 3, a = 5."),
  mc(S`$y=2^{x-3}$ is $y=2^x$ translated:`, "3 units right", ["3 units left", "3 units up", "3 units down"], "x − h moves right h."),
  mc(S`$y=\left(\frac12\right)^x$ can also be written as:`, S`$y=2^{-x}$`, [S`$y=-2^x$`, S`$y=2^{1/x}$`, S`$y=\frac12\cdot2^x$`], "(1/2)ˣ = 2⁻ˣ."),
  num(S`Evaluate $\left(1+\frac{1}{50}\right)^{50}$ to 4 decimal places.`, Math.round((1.02 ** 50) * 1e4) / 1e4, "Close to e.", null, 0.0001),
  tf(S`Compounding monthly at 6% gives more than compounding annually at 6%.`, true, "More frequent compounding earns interest on interest sooner."),
  mc("A population P = 600(1.15)ᵗ. What does 1.15 mean?", "it grows by 15% per time unit", ["it grows by 1.15 per time unit", "it starts at 1.15", "it grows by 115% per time unit"], "Factor 1 + 0.15."),
  mc("The graph shows y = a·bˣ + k. Find k.", "−2", ["2", "1", "0"], "The asymptote is y = −2.", planeDoc({ view: { xmin: -4, xmax: 3, ymin: -4, ymax: 8 }, curves: [{ f: (x) => 3 * 2 ** x - 2 }], lines: [{ m: 0, b: -2, color: "red", dash: true }], points: [P(0, 1, "", "blue")], step: { x: 1, y: 1 } })),
  mc("Using the same graph (asymptote y = −2, through (0, 1)), find a for y = a·2ˣ + k.", "3", ["1", "−2", "2"], "a + k = 1, k = −2."),
  ms("Which describe y = 5e^(−0.3x)? Select all.", ["decay", "y-intercept 5", "asymptote y = 0", "range y < 5"], [0, 1, 2], "Range is y > 0."),
  num("A colony doubles every 5 hours from 300. How many after 12 hours (nearest whole)?", Math.round(300 * 2 ** 2.4), "300 × 2^(12/5).", null, 1),
  mc("The graph compares A = 1000(1.08)ᵗ (violet) and B = 1000e^(0.075t) (amber). After 10 years:", "A is larger", ["B is larger", "they are equal", "B has decreased"], "1000(1.08)¹⁰ ≈ 2158.92; 1000e^0.75 ≈ 2117.00.", planeDoc({ view: { xmin: 0, xmax: 10, ymin: 900, ymax: 2300 }, curves: [{ f: (t) => 1000 * 1.08 ** t, a: 0, b: 10 }, { f: (t) => 1000 * Math.exp(0.075 * t), a: 0, b: 10, color: "amber" }], step: { x: 1, y: 200 } })),
  num("An antique worth 1200 dollars gains 3.5% a year. Find its value after 8 years (2 d.p.).", r2(1200 * 1.035 ** 8), "1200 × 1.035⁸.", null, 0.01),
];
