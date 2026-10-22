// 9.2 Exponential Functions and the Number e — 20 hard questions
import { mc, ms, num, tf } from "./kit.mjs";
import { planeDoc, P } from "./fig.mjs";

const S = String.raw;
const r2 = (v) => Math.round(v * 100) / 100;

export const TOPIC = "9.2 Exponential Functions and the Number e";
export const Q = [
  num(S`The graph of $y=a\cdot3^x+k$ passes through $(0,5)$ and $(1,11)$. Find $k$.`, 2, "a + k = 5, 3a + k = 11 ⇒ a = 3, k = 2."),
  num(S`The graph of $y=a\cdot2^x+k$ has asymptote $y=4$ and passes through $(3,-12)$. Find $a$.`, -2, "8a + 4 = −12."),
  num(S`Find the x-intercept of $y=5\cdot2^{x}-40$.`, 3, "2ˣ = 8."),
  num(S`Find the x-intercept of $y=-4e^{x}+12$ (3 d.p.).`, Math.round(Math.log(3) * 1000) / 1000, "eˣ = 3.", null, 0.001),
  num("Option A: 8000 dollars at 4% compounded quarterly; option B: 8000 dollars at 3.95% compounded continuously. By how many dollars does the better one beat the other after 6 years (2 d.p.)?", r2(Math.abs(8000 * 1.01 ** 24 - 8000 * Math.exp(0.237))), "A ≈ 10157.88, B ≈ 10139.53.", null, 0.02),
  num("Carbon-14 has a half-life of 5730 years. What percentage remains after 2000 years (1 d.p.)?", Math.round(1000 * 0.5 ** (2000 / 5730)) / 10, "100(0.5)^(2000/5730).", null, 0.05),
  num("A tank leaks so that its volume falls by 8% each hour from 900 L. How much has leaked after 5 hours (nearest litre)?", Math.round(900 - 900 * 0.92 ** 5), "900 − 900(0.92)⁵.", null, 1),
  mc("A graph y = a·bˣ passes through (−1, 10) and (1, 2.5), with b > 0. Its equation is:", S`$y=5\cdot0.5^x$`, [S`$y=10\cdot0.5^x$`, S`$y=5\cdot2^x$`, S`$y=2.5\cdot2^x$`], "b² = 2.5/10 = 0.25 ⇒ b = 0.5; a = 10b = 5.", planeDoc({ view: { xmin: -3, xmax: 3, ymin: -1, ymax: 20 }, curves: [{ f: (x) => 5 * 0.5 ** x }], points: [P(-1, 10, "", "red"), P(1, 2.5, "", "red")], step: { x: 1, y: 2 } })),
  mc("The graph shows y = −2ˣ + 4. Which statement is true?", "the range is y < 4", ["the range is y > 4", "the asymptote is y = −4", "it crosses the y-axis at 4"], "Reflected exponential below y = 4; y-intercept 3.", planeDoc({ view: { xmin: -4, xmax: 3, ymin: -5, ymax: 6 }, curves: [{ f: (x) => -(2 ** x) + 4 }], lines: [{ m: 0, b: 4, color: "red", dash: true }], points: [P(0, 3, "", "blue"), P(2, 0, "", "green")], step: { x: 1, y: 1 } })),
  num(S`For $y=-2^x+4$, find the x-intercept.`, 2, "2ˣ = 4."),
  ms(S`Which are equivalent to $3e^{2x}$? Select all.`, [S`$3(e^2)^x$`, S`$3\cdot e^x\cdot e^x$`, S`$(3e^x)^2$`, S`$3\cdot(7.389)^x$ (approximately)`], [0, 1, 3], "(3eˣ)² = 9e^(2x)."),
  tf(S`For any $r>0$, compounding continuously gives more than compounding daily at the same nominal rate.`, true, "(1 + r/n)ⁿ increases towards eʳ."),
  num("An investment grows from 2500 to 3200 dollars in 4 years with annual compounding. Find the annual rate as a percentage (2 d.p.).", r2(100 * ((3200 / 2500) ** 0.25 - 1)), "(1.28)^(1/4) − 1.", null, 0.01),
  mc("The graph shows the value V of a computer after t years. Its annual depreciation rate is:", "20%", ["80%", "25%", "12.5%"], "1600 → 1280 is a factor 0.8.", planeDoc({ view: { xmin: 0, xmax: 6, ymin: 0, ymax: 1800 }, curves: [{ f: (t) => 1600 * 0.8 ** t, a: 0, b: 6 }], points: [P(0, 1600, "", "red"), P(1, 1280, "", "red")], step: { x: 1, y: 200 } })),
  num(S`Find $n$ such that $\left(1+\frac{1}{n}\right)^n$ first exceeds 2.7 (try values).`, 74, "n = 73 gives 2.6999…, n = 74 gives 2.7001…"),
  mc("Population A = 5000(1.03)ᵗ; population B = 8000(0.98)ᵗ. The graph shows both. Which is true?", "A overtakes B between t = 9 and t = 10", ["B is always larger", "A overtakes B at t = 5", "they never meet"], "5000(1.03)⁹ ≈ 6524, 8000(0.98)⁹ ≈ 6670; at t = 10: 6720 vs 6536.", planeDoc({ view: { xmin: 0, xmax: 16, ymin: 4000, ymax: 9000 }, curves: [{ f: (t) => 5000 * 1.03 ** t, a: 0, b: 16 }, { f: (t) => 8000 * 0.98 ** t, a: 0, b: 16, color: "amber" }], step: { x: 2, y: 1000 } })),
  num("A ball is dropped from 3 m and each bounce reaches 70% of the previous height. How high is the 4th bounce (cm, 1 d.p.)?", Math.round(3000 * 0.7 ** 4) / 10, "300 × 0.7⁴.", null, 0.05),
  num(S`$f(x)=2^x$. Find the exact value of $\dfrac{f(x+3)}{f(x)}$.`, 8, "2^(x+3)/2ˣ = 2³."),
  mc(S`For $g(x)=e^{x}$, the expression $g(a+b)$ equals:`, S`$g(a)\,g(b)$`, [S`$g(a)+g(b)$`, S`$g(ab)$`, S`$g(a)^b$`], "e^(a+b) = eᵃ e^b."),
  num("A colony grows continuously at 12% per hour from 400 cells. Find the number after 7.5 hours (nearest whole).", Math.round(400 * Math.exp(0.9)), "400e^0.9.", null, 1),
];
