// 9.5 Solving Exponential Equations — 20 hard questions
import { mc, ms, num, tf } from "./kit.mjs";
import { planeDoc, P } from "./fig.mjs";

const S = String.raw;
const d3 = (v) => Math.round(v * 1000) / 1000;

export const TOPIC = "9.5 Solving Exponential Equations";
export const Q = [
  num(S`Solve $3^{2x}-5\cdot3^{x}-14=0$ (3 d.p.).`, d3(Math.log(7) / Math.log(3)), "(3ˣ − 7)(3ˣ + 2) = 0; reject −2.", planeDoc({ view: { xmin: -1, xmax: 2.5, ymin: -22, ymax: 10 }, curves: [{ f: (x) => 9 ** x - 5 * 3 ** x - 14 }], points: [P(Math.log(7) / Math.log(3), 0, "", "red")], step: { x: 0.5, y: 4 } }), 0.001),
  num(S`Solve $e^{x}-8e^{-x}=2$ (3 d.p.).`, d3(Math.log(4)), "e^(2x) − 2eˣ − 8 = 0 ⇒ eˣ = 4.", null, 0.001),
  num(S`Solve $2^{x+2}+2^{x}=40$.`, 3, "2ˣ(4 + 1) = 40 ⇒ 2ˣ = 8."),
  num(S`Solve $5^{2x+1}=3^{x+4}$ (3 d.p.).`, d3((4 * Math.log(3) - Math.log(5)) / (2 * Math.log(5) - Math.log(3))), "(2x + 1) ln 5 = (x + 4) ln 3.", null, 0.001),
  num(S`Solve $4^{x}=3\cdot2^{x}+10$ (3 d.p.).`, d3(Math.log(5) / Math.log(2)), "u² − 3u − 10 = 0, u = 5.", null, 0.001),
  num("Town P has 15 000 people growing at 2.5% a year; town Q has 21 000 falling at 1% a year. After how many years are they equal (2 d.p.)?", Math.round((Math.log(21 / 15) / Math.log(1.025 / 0.99)) * 100) / 100, "(1.025/0.99)ᵗ = 1.4.", planeDoc({ view: { xmin: 0, xmax: 16, ymin: 12, ymax: 24 }, ylabel: "thousand people", curves: [{ f: (t) => 15 * 1.025 ** t, a: 0, b: 16 }, { f: (t) => 21 * 0.99 ** t, a: 0, b: 16, color: "amber" }], step: { x: 2, y: 2 } }), 0.01),
  num("A bacteria culture triples every 4 hours. How long to grow from 50 to 2000 (2 d.p.)?", Math.round((4 * Math.log(40) / Math.log(3)) * 100) / 100, "3^(t/4) = 40.", null, 0.01),
  num("A fossil has 22% of its original carbon-14 (half-life 5730 years). Estimate its age (nearest 10 years).", Math.round((5730 * Math.log(0.22) / Math.log(0.5)) / 10) * 10, "t = 5730 ln 0.22/ln 0.5.", null, 10),
  num("A cup of coffee cools as T = 22 + 68e^(−0.06t). When does it reach 45 °C (2 d.p.)?", Math.round((Math.log(68 / 23) / 0.06) * 100) / 100, "e^(−0.06t) = 23/68.", planeDoc({ view: { xmin: 0, xmax: 40, ymin: 0, ymax: 100 }, curves: [{ f: (t) => 22 + 68 * Math.exp(-0.06 * t), a: 0, b: 40 }], lines: [{ m: 0, b: 45, color: "amber", dash: true }, { m: 0, b: 22, color: "red", dash: true }], step: { x: 5, y: 10 } }), 0.01),
  mc("Investment A: 4000 dollars at 7% annual compounding. Investment B: 5000 dollars at 5% annual compounding. When does A first exceed B?", "year 12", ["year 10", "year 11", "year 13"], "(1.07/1.05)ᵗ > 1.25 ⇒ t > 11.83."),
  num(S`Solve $\log_2(2^{x}+12)=x+2$.`, 2, "2ˣ + 12 = 4 · 2ˣ ⇒ 2ˣ = 4."),
  num(S`Solve $e^{2x}=6-e^{x}$ (3 d.p.).`, d3(Math.log(2)), "(eˣ + 3)(eˣ − 2) = 0.", null, 0.001),
  ms("For A = A₀e^(kt) with k < 0, which are true? Select all.", ["A decreases", "the half-life is ln 2/|k|", "A reaches 0 after finite time", "A(0) = A₀"], [0, 1, 3], "It approaches 0 but never reaches it."),
  tf(S`$2^x=3^x$ has exactly one solution.`, true, "(2/3)ˣ = 1 ⇒ x = 0."),
  mc("The graph shows y = e^(2x) − 4eˣ + 3. Its zeros are:", S`$0$ and $\ln3$`, [S`$1$ and $3$`, S`$\ln 1$ and $\ln 4$`, S`$0$ only`], "(eˣ − 1)(eˣ − 3) = 0.", planeDoc({ view: { xmin: -1.5, xmax: 2, ymin: -2, ymax: 6 }, curves: [{ f: (x) => Math.exp(2 * x) - 4 * Math.exp(x) + 3 }], points: [P(0, 0, "", "red"), P(Math.log(3), 0, "", "red")], step: { x: 0.5, y: 1 } })),
  num(S`A population $P=P_0e^{kt}$ grows from 2400 to 3000 in 5 years. How many more years until it reaches 4000 (2 d.p.)?`, Math.round((Math.log(4000 / 3000) / (Math.log(1.25) / 5)) * 100) / 100, "k = ln 1.25/5; then e^(kt) = 4/3.", null, 0.01),
  num(S`Solve $3^{x}\cdot2^{x+1}=50$ (3 d.p.).`, d3(Math.log(25) / Math.log(6)), "2 · 6ˣ = 50 ⇒ 6ˣ = 25.", null, 0.001),
  num(S`The equation $2^x=k$ has solution $x=5.5$. Find $k$ (2 d.p.).`, Math.round(2 ** 5.5 * 100) / 100, "k = 2^5.5.", null, 0.01),
  num(S`Find the smallest integer $n$ with $0.9^n<0.01$.`, 44, "n > ln 0.01/ln 0.9 ≈ 43.7."),
  mc("A drug is given as 200 mg; C = 200e^(−0.25t). A second dose is due when C falls to 50 mg. When is that?", S`$t=4\ln4\approx5.55$ h`, [S`$t=4$ h`, S`$t=\ln 4$ h`, S`$t=8$ h`], "e^(−0.25t) = 0.25 ⇒ t = 4 ln 4."),
];
