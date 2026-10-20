// 5.1 Rates of Change and the Number e — 20 easy + 20 medium questions
import { mc, num, tf, fill } from "./kit.mjs";
import { graph, P } from "./fig.mjs";

const S = String.raw;
const easy = [
  num(S`What is the slope of $y=e^x$ at $x=3$ (2 decimals)?`, 20.09, "(eˣ)′ = eˣ.", null, 0.01),
  num(S`Evaluate $e^0$.`, 1, "Any nonzero base to the power 0."),
  mc(S`Which is closest to $e$?`, "2.718", ["3.142", "1.414", "2.236"], "e ≈ 2.71828."),
  tf(S`$\frac{d}{dx}e^x=e^x$.`, true, "Definition of e."),
  num(S`What is the slope of $y=e^x$ at $x=-1$ (4 decimals)?`, 0.3679, "e^(−1).", null, 0.0005),
  mc(S`Which function has slope less than 1 at $x=0$?`, S`$y=2^x$`, [S`$y=3^x$`, S`$y=4^x$`, S`$y=10^x$`], "Only bases below e."),
  num(S`Evaluate $\left(1+\frac1{20}\right)^{20}$ (4 decimals).`, 2.6533, "Approaching e.", null, 0.0005),
  tf(S`The slope of $y=2^x$ at $x=0$ is 1.`, false, "It is about 0.693."),
  fill(S`The base whose exponential has slope 1 at $x=0$ is ___.`, ["e"], "The natural base."),
  num(S`Give $e$ to 3 decimals.`, 2.718, "2.71828…", null, 0.0005),
  num("The tangent to y = eˣ at x = 0.5 is drawn. What is its slope (4 decimals)?", 1.6487, "e^0.5.", graph(Math.exp, { xmin: -2, xmax: 2, ymin: -0.5, ymax: 6 }, [P(0.5, Math.exp(0.5))], { more: [{ f: (x) => Math.exp(0.5) * (1 + x - 0.5), color: "green", a: -0.8, b: 1.6 }], step: { x: 0.5, y: 1 } }), 0.0005),
  mc(S`The slope of $y=b^x$ is proportional to:`, S`$b^x$`, [S`$x$`, S`$b$`, S`$x^b$`], "Slope = (slope at 0) × height."),
  num(S`Estimate the slope of $y=6^x$ at $x=0$ (3 decimals).`, 1.792, "ln 6.", null, 0.002),
  tf(S`$e^x\gt0$ for every $x$.`, true, "Exponentials are always positive."),
  num(S`What is the slope of $y=7e^x$ at $x=0$?`, 7, "7e⁰."),
  mc(S`What is the slope of $y=e^x$ at $x=\ln3$?`, "3", ["ln 3", "1/3", "e"], "Slope = height = e^(ln 3)."),
  num("250 dollars earns 100% interest compounded continuously for one year. What does it become (2 decimals)?", 679.57, "250e.", null, 0.01),
  num("The graph of y = (1/3)ˣ is shown. Estimate its slope at x = 0 (3 decimals).", -1.099, "−ln 3.", graph((x) => (1 / 3) ** x, { xmin: -2, xmax: 2, ymin: -0.5, ymax: 9 }, [P(0, 1)], { more: [{ f: (x) => 1 - 1.0986 * x, color: "green", a: -1, b: 0.9 }], step: { x: 0.5, y: 1 } }), 0.002),
  tf(S`$e$ is a rational number.`, false, "It is irrational."),
  num(S`On $y=e^x$, what is the slope at the point where the height is 4?`, 4, "Slope equals height."),
];
const medium = [
  num(S`What is the slope of $y=3^x$ at $x=1$ (3 decimals)?`, 3.296, "3 ln 3.", null, 0.002),
  num(S`Evaluate $\frac{2^{0.0001}-1}{0.0001}$ (4 decimals).`, 0.6932, "Close to ln 2.", null, 0.0005),
  num(S`At what $x$ does $y=e^x$ have slope 10 (4 decimals)?`, 2.3026, "eˣ = 10.", null, 0.0005),
  num(S`Where does the tangent to $y=e^x$ at $x=0$ cross the x-axis?`, -1, "y = x + 1."),
  num(S`What is the slope of $y=0.5^x$ at $x=1$ (4 decimals)?`, -0.3466, "0.5 · ln 0.5.", null, 0.0005),
  mc(S`The slope of $2^x$ at 0, about 0.693, equals:`, S`$\ln2$`, [S`$\log2$`, S`$\frac12$`, S`$e^2$`], "Natural logarithm."),
  num(S`Evaluate $\lim_{n\to\infty}\left(1+\frac{0.05}n\right)^n$ (4 decimals).`, 1.0513, "e^0.05.", null, 0.0005),
  num(S`What is the slope of $y=e^x$ at $x=\ln7$?`, 7, "Slope = height."),
  tf(S`Every tangent line to $y=e^x$ lies below the curve.`, true, "The curve is concave up."),
  num("The graph of y = 4ˣ is shown. What is its slope at x = 1 (3 decimals)?", 5.545, "4 ln 4.", graph((x) => 4 ** x, { xmin: -1.5, xmax: 1.6, ymin: -0.5, ymax: 9 }, [P(1, 4)], { more: [{ f: (x) => 4 + 5.545 * (x - 1), color: "green", a: 0.4, b: 1.6 }], step: { x: 0.5, y: 1 } }), 0.002),
  num(S`Find the average rate of change of $y=e^x$ on $[0,1]$ (4 decimals).`, 1.7183, "e − 1.", null, 0.0005),
  mc(S`Which is larger?`, S`$e^\pi$`, [S`$\pi^e$`, "they are equal", "it depends"], "e^π ≈ 23.14, π^e ≈ 22.46."),
  num(S`For which base $b$ is the slope of $b^x$ at 0 equal to 0.5 (4 decimals)?`, 1.6487, "ln b = 0.5.", null, 0.0005),
  num(S`Find the y-intercept of the tangent to $y=e^x$ at $x=3$ (3 decimals).`, -40.171, "y = e³(x − 2).", null, 0.002),
  num(S`For $y=1.5^x$, what is slope ÷ height (4 decimals)?`, 0.4055, "ln 1.5.", null, 0.0005),
  tf(S`If $0\lt b\lt1$, the slope of $b^x$ at 0 is negative.`, true, "The function decays."),
  num(S`Evaluate $\left(1+\frac1{500}\right)^{500}$ (4 decimals).`, 2.7156, "Close to e.", null, 0.0005),
  num("The tangent to y = eˣ at x = −2 is drawn. Find its y-intercept (3 decimals).", 0.406, "y = e^(−2)(x + 3).", graph(Math.exp, { xmin: -4, xmax: 1, ymin: -0.2, ymax: 2.5 }, [P(-2, Math.exp(-2))], { more: [{ f: (x) => Math.exp(-2) * (x + 3), color: "green", a: -3.5, b: 0.8 }], step: { x: 0.5, y: 0.5 } }), 0.002),
  num(S`A colony is $N(t)=50\cdot3^t$. Find its growth rate at $t=2$ (2 decimals).`, 494.38, "450 ln 3.", null, 0.01),
  mc(S`Which expression approaches $e$?`, S`$\left(1+\frac1n\right)^n$`, [S`$1+\frac1n$`, S`$\left(1+\frac1n\right)^{1/n}$`, S`$n^{1/n}$`], "Continuous compounding."),
];
export { easy as E, medium as M };
