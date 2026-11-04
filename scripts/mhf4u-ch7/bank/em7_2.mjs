// 7.2 Solving Exponential Equations — 20 easy + 20 medium questions
import { mc, ms, num, tf, fill } from "./kit.mjs";
import { planeDoc } from "./fig.mjs";
const S = String.raw;
const L = Math.log10;

export const E = [
  num(S`Solve $3^x=50$ to two decimals.`, L(50) / L(3), "x = log 50 ÷ log 3.", null, 0.01),
  num(S`Solve $5^x=8$ to three decimals.`, L(8) / L(5), "x = log 8 ÷ log 5.", null, 0.002),
  num(S`Solve $10^x=420$ to three decimals.`, L(420), "x = log 420.", null, 0.002),
  num(S`Solve $2^x=0.3$ to two decimals.`, L(0.3) / L(2), "x = log 0.3 ÷ log 2 (negative, since 0.3 < 1).", null, 0.01),
  num(S`Solve $1.5^x=12$ to two decimals.`, L(12) / L(1.5), "x = log 12 ÷ log 1.5.", null, 0.01),
  num(S`Solve $4\cdot3^x=36$.`, 2, "Isolate: 3ˣ = 9."),
  num(S`Solve $2^x+7=39$.`, 5, "2ˣ = 32."),
  num(S`Solve $6^{x}=216$.`, 3, "216 = 6³ — a common base works."),
  mc(S`What is the first step to solve $5\cdot4^x-2=48$?`, S`add $2$, then divide by $5$`, ["take the log of both sides", "divide by 4", "subtract 5"], "Isolate the power: 4ˣ = 10."),
  mc(S`Which equals the solution of $7^x=30$?`, S`$\dfrac{\log30}{\log7}$`, [S`$\log\dfrac{30}{7}$`, S`$\log30-\log7$`, S`$\dfrac{30}{7}$`], "x log 7 = log 30."),
  mc(S`Between which two integers is the solution of $2^x=100$?`, "6 and 7", ["5 and 6", "7 and 8", "50 and 51"], "2⁶ = 64 < 100 < 128 = 2⁷."),
  tf(S`$3^x=-27$ has no real solution.`, true, "3ˣ > 0 for every x."),
  tf(S`The solution of $2^x=10$ is $x=5$.`, false, "2⁵ = 32; x = log 10 / log 2 ≈ 3.32."),
  tf(S`Taking the log of both sides of $4^x=20$ gives $x\log4=\log20$.`, true, "Power law."),
  fill(S`$x=\dfrac{\log 40}{\log\,\square}$ solves $9^x=40$. The missing number is ____.`, ["9"], "x log 9 = log 40."),
  fill(S`$2^x=-5$ has ____ solution(s).`, ["0", "no", "zero", "none"], "Powers of 2 are positive."),
  num(S`Solve $10^{x+1}=50$ to three decimals.`, L(50) - 1, "x + 1 = log 50.", null, 0.002),
  num(S`Solve $3^{x}=1$.`, 0, "3⁰ = 1."),
  mc("The graph shows y = 3ˣ and y = 20. Estimate the solution of 3ˣ = 20.", "about 2.7", ["about 6.7", "about 2.0", "about 3.3"], "log 20 / log 3 ≈ 2.73.", planeDoc({ view: { xmin: -1, xmax: 4, ymin: -2, ymax: 30 }, lines: [{ m: 0, b: 20, color: "blue", dash: true }], curves: [{ f: (x) => 3 ** x, color: "violet" }], step: { x: 0.5, y: 5 } })),
  mc("The graph shows y = 0.5ˣ and y = 6. Estimate the solution of 0.5ˣ = 6.", "about −2.6", ["about 2.6", "about −6", "about 3"], "log 6 / log 0.5 ≈ −2.58.", planeDoc({ view: { xmin: -4, xmax: 2, ymin: -1, ymax: 10 }, lines: [{ m: 0, b: 6, color: "blue", dash: true }], curves: [{ f: (x) => 0.5 ** x, color: "violet" }], step: { x: 0.5, y: 1 } })),
];

export const M = [
  num(S`Solve $3\cdot2^{x}+1=64$ to two decimals.`, L(21) / L(2), "2ˣ = 21.", null, 0.01),
  num(S`Solve $5^{x+2}=300$ to three decimals.`, L(300) / L(5) - 2, "(x + 2) log 5 = log 300.", null, 0.002),
  num(S`Solve $4^{2x-1}=70$ to three decimals.`, (L(70) / L(4) + 1) / 2, "2x − 1 = log 70 / log 4.", null, 0.002),
  num(S`Solve $2^{x}=3^{x-2}$ to two decimals.`, (2 * L(3)) / (L(3) - L(2)), "x log 2 = (x − 2) log 3 ⇒ x = 2 log 3 / (log 3 − log 2).", null, 0.01),
  num(S`Solve $5^{x}=2^{x+3}$ to two decimals.`, (3 * L(2)) / (L(5) - L(2)), "x log 5 = (x + 3) log 2.", null, 0.01),
  num(S`Solve $7^{x-1}=4^{x}$ to two decimals.`, L(7) / (L(7) - L(4)), "(x − 1) log 7 = x log 4.", null, 0.01),
  num(S`Solve $3^{2x}=10^{x-1}$ to two decimals.`, -1 / (2 * L(3) - 1), "2x log 3 = x − 1 ⇒ x(2 log 3 − 1) = −1.", null, 0.01),
  num(S`Solve $9^x-4\cdot3^x+3=0$. Enter the nonzero root.`, 1, "u² − 4u + 3 = 0 ⇒ 3ˣ = 1 or 3."),
  num(S`Solve $4^x-6\cdot2^x+8=0$. Enter the larger root.`, 2, "(u − 2)(u − 4) = 0."),
  num(S`Solve $4^x+2^x-20=0$.`, 2, "(u + 5)(u − 4) = 0; reject u = −5."),
  num(S`Solve $9^x+3^x-6=0$ to three decimals.`, L(2) / L(3), "(u + 3)(u − 2) = 0 ⇒ 3ˣ = 2.", null, 0.002),
  mc(S`How many real solutions does $4^x-3\cdot2^x-10=0$ have?`, "one", ["none", "two", "three"], "(u − 5)(u + 2) = 0; only u = 5 > 0."),
  mc(S`After taking logs of $6^{x}=5^{x+1}$, which is the next correct line?`, S`$x\log6=(x+1)\log5$`, [S`$x\log6=x+1\log5$`, S`$\log6x=\log5(x+1)$`, S`$6x=5(x+1)$`], "Bring each whole exponent down."),
  ms(S`Select every equation with no real solution.`, [S`$2^x=-4$`, S`$3^x+1=0$`, S`$5^x=0.2$`, S`$4^x+2^x+3=0$`], [0, 1, 3], "5ˣ = 0.2 has x = −1."),
  tf(S`$\log(3\cdot2^x)=x\log6$.`, false, "log(3·2ˣ) = log 3 + x log 2."),
  tf(S`Every equation $b^x=c$ with $b>0$, $b\ne1$, $c>0$ has exactly one solution.`, true, "x = log c / log b."),
  fill(S`In $25^x-7\cdot5^x+10=0$, let $u=$ ____.`, ["5^x", "5ˣ"], "25ˣ = (5ˣ)²."),
  mc("The graphs of y = 2ˣ and y = 3ˣ⁻¹ cross once. Estimate the x-coordinate.", "about 2.7", ["about 1.0", "about 6.5", "about 4.2"], "x = log 3 / (log 3 − log 2) ≈ 2.71.", planeDoc({ view: { xmin: -1, xmax: 4, ymin: -1, ymax: 15 }, curves: [{ f: (x) => 2 ** x, color: "violet" }, { f: (x) => 3 ** (x - 1), color: "blue" }], step: { x: 0.5, y: 1 } })),
  mc("The graph shows y = 4ˣ − 5·2ˣ + 4. Read its zeros.", "x = 0 and x = 2", ["x = 1 and x = 4", "x = 0 only", "x = −1 and x = 2"], "u = 1 or 4.", planeDoc({ view: { xmin: -2, xmax: 3, ymin: -3, ymax: 6 }, curves: [{ f: (x) => 4 ** x - 5 * 2 ** x + 4, color: "violet" }], step: { x: 0.5, y: 1 } })),
  num(S`Solve $2(3)^{x-1}-5=49$.`, 4, "3ˣ⁻¹ = 27."),
];
