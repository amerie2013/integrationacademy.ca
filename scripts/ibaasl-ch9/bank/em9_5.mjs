// 9.5 Solving Exponential Equations — 20 easy + 20 medium questions
import { mc, ms, num, tf, fill } from "./kit.mjs";
import { planeDoc, P } from "./fig.mjs";

const S = String.raw;
const d3 = (v) => Math.round(v * 1000) / 1000;

export const E = [
  num(S`Solve $2^x=10$ (3 d.p.).`, d3(Math.log(10) / Math.log(2)), "ln 10 ÷ ln 2.", null, 0.001),
  num(S`Solve $3^x=50$ (3 d.p.).`, d3(Math.log(50) / Math.log(3)), "ln 50 ÷ ln 3.", null, 0.001),
  num(S`Solve $e^x=20$ (3 d.p.).`, d3(Math.log(20)), "x = ln 20.", null, 0.001),
  num(S`Solve $e^x=0.25$ (3 d.p.).`, d3(Math.log(0.25)), "x = ln 0.25.", null, 0.001),
  num(S`Solve $10^x=500$ (3 d.p.).`, d3(Math.log10(500)), "x = log 500.", null, 0.001),
  num(S`Solve $\ln x=2$ (3 d.p.).`, d3(Math.exp(2)), "x = e².", null, 0.001),
  num(S`Solve $\ln x=-1$ (3 d.p.).`, d3(Math.exp(-1)), "x = e⁻¹.", null, 0.001),
  num(S`Solve $2e^x=18$ (3 d.p.).`, d3(Math.log(9)), "eˣ = 9.", null, 0.001),
  mc(S`To solve $5^x=30$, the first step is to:`, "take logs of both sides", ["divide both sides by 5", "square both sides", "subtract 5"], "Bring the exponent down."),
  mc(S`The exact solution of $7^x=12$ is:`, S`$\dfrac{\ln12}{\ln7}$`, [S`$\ln\dfrac{12}{7}$`, S`$\dfrac{12}{7}$`, S`$\ln12-\ln7$`], "x ln 7 = ln 12."),
  tf(S`The equation $e^x=-2$ has no real solution.`, true, "eˣ > 0."),
  tf(S`$\ln(e^x)=x$ for all real $x$.`, true, "Inverse functions."),
  fill(S`For $A=A_0e^{kt}$, the doubling time is $\dfrac{\ln\_\_\_}{k}$.`, ["2"], "Solve e^(kt) = 2."),
  num("Find the doubling time of A = 100e^(0.1t) (3 d.p.).", d3(Math.log(2) / 0.1), "ln 2 ÷ 0.1.", null, 0.001),
  num("Find the half-life of A = 60e^(−0.2t) (3 d.p.).", d3(Math.log(2) / 0.2), "ln 2 ÷ 0.2.", null, 0.001),
  num(S`Solve $3e^{x}+1=10$ (3 d.p.).`, d3(Math.log(3)), "eˣ = 3.", null, 0.001),
  mc("The graph shows y = 2ˣ and y = 12. The x-coordinate of the intersection is:", S`$\dfrac{\ln12}{\ln2}\approx3.585$`, [S`$6$`, S`$\dfrac{12}{2}$`, S`$\ln 10$`], "2ˣ = 12.", planeDoc({ view: { xmin: -1, xmax: 5, ymin: -2, ymax: 20 }, curves: [{ f: (x) => 2 ** x }], lines: [{ m: 0, b: 12, color: "amber", dash: true }], points: [P(Math.log2(12), 12, "", "red")], step: { x: 1, y: 2 } })),
  mc("The graph shows y = eˣ and y = 5. The solution of eˣ = 5 is:", S`$\ln 5\approx1.609$`, [S`$e^5$`, S`$\frac5e$`, S`$5e$`], "x = ln 5.", planeDoc({ view: { xmin: -2, xmax: 3, ymin: -1, ymax: 10 }, curves: [{ f: Math.exp }], lines: [{ m: 0, b: 5, color: "amber", dash: true }], points: [P(Math.log(5), 5, "", "red")], step: { x: 1, y: 1 } })),
  ms(S`Which equations have exactly one real solution? Select all.`, [S`$4^x=7$`, S`$e^x=-1$`, S`$e^{2x}=3$`, S`$2^x=0$`], [0, 2], "Exponentials are always positive."),
  num(S`Solve $5^{x}=1$.`, 0, "5⁰ = 1."),
];

export const M = [
  num(S`Solve $4\cdot3^{x}=100$ (3 d.p.).`, d3(Math.log(25) / Math.log(3)), "3ˣ = 25.", null, 0.001),
  num(S`Solve $2^{x-1}=15$ (3 d.p.).`, d3(1 + Math.log(15) / Math.log(2)), "x − 1 = ln 15/ln 2.", null, 0.001),
  num(S`Solve $e^{3x-2}=8$ (3 d.p.).`, d3((Math.log(8) + 2) / 3), "3x − 2 = ln 8.", null, 0.001),
  num(S`Solve $\ln(3x+2)=2$ (3 d.p.).`, d3((Math.exp(2) - 2) / 3), "3x + 2 = e².", null, 0.001),
  num(S`Solve $5^{x}=3^{x+1}$ (3 d.p.).`, d3(Math.log(3) / (Math.log(5) - Math.log(3))), "x ln 5 = (x + 1) ln 3.", null, 0.001),
  num(S`Solve $2^{2x}=5^{x-1}$ (3 d.p.).`, d3(-Math.log(5) / (2 * Math.log(2) - Math.log(5))), "2x ln 2 = (x − 1) ln 5.", null, 0.001),
  num(S`Solve $e^{2x}-5e^{x}+6=0$. Give the larger solution (3 d.p.).`, d3(Math.log(3)), "(eˣ − 2)(eˣ − 3) = 0.", null, 0.001),
  num(S`Solve $e^{2x}-e^{x}-12=0$ (3 d.p.).`, d3(Math.log(4)), "(eˣ − 4)(eˣ + 3) = 0; reject −3.", null, 0.001),
  num("3000 dollars is invested at 4% compounded annually. After how many whole years does it first exceed 4500 dollars?", 11, "t > ln 1.5/ln 1.04 ≈ 10.34."),
  num("A car worth 25 000 dollars depreciates by 12% a year. After how many whole years is it first worth less than 10 000 dollars?", 8, "t > ln 0.4/ln 0.88 ≈ 7.17."),
  num(S`A culture follows $N=800e^{kt}$ and reaches 1200 after 2 hours. Find $k$ (4 d.p.).`, Math.round((Math.log(1.5) / 2) * 1e4) / 1e4, "e^(2k) = 1.5.", null, 0.0001),
  num(S`A substance follows $A=A_0e^{-0.03t}$. How long until 40% remains (2 d.p.)?`, Math.round((Math.log(0.4) / -0.03) * 100) / 100, "e^(−0.03t) = 0.4.", null, 0.01),
  num("How long does money take to double at 5% compounded continuously (2 d.p.)?", Math.round((Math.log(2) / 0.05) * 100) / 100, "ln 2 ÷ 0.05.", null, 0.01),
  mc(S`The solutions of $9^x-4\cdot3^x+3=0$ are:`, S`$x=0$ and $x=1$`, [S`$x=1$ and $x=3$`, S`$x=0$ only`, S`$x=-1$ and $x=-3$`], "(3ˣ − 1)(3ˣ − 3) = 0."),
  tf(S`$e^{x}=e^{-x}$ has the solution $x=0$ only.`, true, "e^(2x) = 1."),
  mc("The graph shows y = 3ˣ (violet) and y = 2^(x+1) (amber). Where do they meet?", S`$x=\dfrac{\ln 2}{\ln 1.5}\approx1.710$`, [S`$x=1$`, S`$x=2$`, S`$x=\ln 6$`], "x ln 3 = (x + 1) ln 2.", planeDoc({ view: { xmin: -1, xmax: 3, ymin: -1, ymax: 12 }, curves: [{ f: (x) => 3 ** x }, { f: (x) => 2 ** (x + 1), color: "amber" }], points: [P(Math.log(2) / Math.log(1.5), 3 ** (Math.log(2) / Math.log(1.5)), "", "red")], step: { x: 1, y: 1 } })),
  ms("A quantity grows as A = 200e^(0.08t). Which are true? Select all.", ["A(0) = 200", "the doubling time is about 8.66", "A triples after about 13.73", "A halves after 8.66"], [0, 1, 2], "Growth never halves."),
  num(S`Solve $\ln x+\ln 4=3$ (3 d.p.).`, d3(Math.exp(3) / 4), "4x = e³.", null, 0.001),
  mc("The graph of A = 5000(1.06)ᵗ crosses the line A = 8000 at:", S`$t=\dfrac{\ln1.6}{\ln1.06}\approx8.07$`, [S`$t=8$`, S`$t=\dfrac{1.6}{1.06}$`, S`$t=10$`], "1.06ᵗ = 1.6.", planeDoc({ view: { xmin: 0, xmax: 12, ymin: 4, ymax: 11 }, ylabel: "thousand dollars", curves: [{ f: (t) => 5 * 1.06 ** t, a: 0, b: 12 }], lines: [{ m: 0, b: 8, color: "amber", dash: true }], points: [P(Math.log(1.6) / Math.log(1.06), 8, false, "red")], step: { x: 1, y: 1 } })),
  num(S`Solve $6e^{-0.5x}=1.5$ (3 d.p.).`, d3(-2 * Math.log(0.25)), "e^(−0.5x) = 0.25.", null, 0.001),
];
