// 14.3 The Normal Distribution — 20 easy + 20 medium questions
import { mc, ms, num, tf, fill } from "./kit.mjs";
import { normalDoc, Phi, normCdf } from "../figs14.mjs";

const S = String.raw;
const r4 = (v) => Math.round(v * 10000) / 10000;

export const E = [
  mc("The normal curve is:", "symmetric about the mean", ["skewed to the right", "highest at the edges", "symmetric about zero always"], "Bell shape."),
  mc(S`For $X\sim N(\mu,\sigma^2)$, the median equals:`, S`$\mu$`, [S`$\sigma$`, S`$\mu+\sigma$`, S`$\sigma^2$`], "Symmetry."),
  mc("About what percentage of a normal distribution lies within 3 standard deviations of the mean?", "99.7%", ["68%", "95%", "50%"], "Empirical rule."),
  mc(S`In $N(\mu,\sigma^2)$, $\sigma^2$ is the:`, "variance", ["mean", "standard deviation", "median"], "σ² is the variance."),
  mc(S`The z-score of a value equal to the mean is:`, "0", ["1", "μ", "−1"], "(μ − μ)/σ."),
  num(S`$X\sim N(30,4^2)$. Find $P(X<30)$.`, 0.5, "Half.", null, 0.001),
  num(S`$X\sim N(30,4^2)$. Find the z-score of 38.`, 2, "8/4."),
  num(S`$X\sim N(12,3^2)$. Find the z-score of 6.`, -2, "−6/3."),
  num(S`Approximately what proportion of values lie within 2 standard deviations of the mean?`, 0.95, "Empirical rule.", null, 0.01),
  num(S`$Z\sim N(0,1)$. Find $P(Z<1)$ (4 d.p.).`, r4(Phi(1)), "Standard normal.", null, 0.0005),
  tf("The total area under a normal curve is 1.", true, "Total probability."),
  tf(S`For a normal X, $P(X=5)$ can be positive.`, false, "A single point has zero area."),
  tf("A larger σ gives a wider, flatter curve.", true, "More spread."),
  fill("The standardised value (x − μ)/σ is called the ___-score.", ["z", "Z"], "z-score."),
  ms(S`For $X\sim N(50,10^2)$, which are true? Select all.`, [S`$P(X<50)=0.5$`, S`$P(40<X<60)\approx0.68$`, S`$P(X>70)\approx0.025$`, S`$P(X>60)\approx0.5$`], [0, 1, 2], "μ ± σ and μ + 2σ."),
  mc("The shaded area shows P(X < 70) for N(70, 5²). It equals:", "0.5", ["0.68", "0.25", "0.95"], "Half the curve.", normalDoc(70, 5, [{ a: -Infinity, b: 70, color: "green" }])),
  mc("The shaded region of N(0, 1) lies between −1 and 1. Its area is about:", "0.68", ["0.95", "0.5", "0.997"], "Empirical rule.", normalDoc(0, 1, [{ a: -1, b: 1, color: "blue" }])),
  num(S`$X\sim N(100,10^2)$. Estimate $P(X>110)$ using the empirical rule.`, 0.16, "(1 − 0.68)/2.", null, 0.005),
  num(S`$X\sim N(5,0.5^2)$. Find the z-score of 6.25.`, 2.5, "1.25/0.5.", null, 0.001),
  mc(S`If $X\sim N(20,9)$, the standard deviation is:`, "3", ["9", "81", "4.5"], "√9."),
];

export const M = [
  num(S`$X\sim N(40,6^2)$. Find $P(X<46)$ (4 d.p.).`, r4(Phi(1)), "z = 1.", null, 0.0005),
  num(S`$X\sim N(40,6^2)$. Find $P(X>31)$ (4 d.p.).`, r4(1 - Phi(-1.5)), "z = −1.5.", null, 0.0005),
  num(S`$X\sim N(40,6^2)$. Find $P(37<X<49)$ (4 d.p.).`, r4(normCdf(49, 40, 6) - normCdf(37, 40, 6)), "z from −0.5 to 1.5.", null, 0.0005),
  num(S`$X\sim N(2.5,0.1^2)$. Find $P(X>2.62)$ (4 d.p.).`, r4(1 - Phi(1.2)), "z = 1.2.", null, 0.0005),
  num(S`Masses are $N(68,9^2)$ kg. Find the proportion heavier than 80 kg (4 d.p.).`, r4(1 - Phi(12 / 9)), "z ≈ 1.333.", null, 0.0005),
  num(S`$X\sim N(0,1)$. Find $P(-2<Z<1)$ (4 d.p.).`, r4(Phi(1) - Phi(-2)), "Φ(1) − Φ(−2).", null, 0.0005),
  mc(S`Value A has z = 1.8 and value B has z = −0.4. Which statement is true?`, "A is further from its mean than B", ["B is above its mean", "A and B are equally unusual", "B is further from its mean"], "Compare |z|."),
  mc(S`$X\sim N(\mu,\sigma^2)$. $P(X>\mu+\sigma)$ is approximately:`, "0.16", ["0.32", "0.68", "0.025"], "(1 − 0.68)/2."),
  mc("Two normal curves have the same mean. Curve A is taller and narrower. Then:", "A has the smaller standard deviation", ["A has the larger standard deviation", "A has the larger mean", "their variances are equal"], "Less spread."),
  tf(S`For any normal X, $P(X<\mu-\sigma)=P(X>\mu+\sigma)$.`, true, "Symmetry."),
  tf(S`If $P(X<a)=0.3$ then $P(X\ge a)=0.7$ for a normal X.`, true, "Complement."),
  num(S`Times are $N(12,1.5^2)$ minutes. Out of 400 runs, how many are expected to take longer than 14 minutes (nearest whole)?`, Math.round(400 * (1 - Phi(4 / 3))), "400 × P(Z > 1.333).", null, 1),
  num(S`$X\sim N(75,8^2)$. Find $P(X<63\text{ or }X>87)$ (4 d.p.).`, r4(2 * Phi(-1.5)), "Two tails at z = ±1.5.", null, 0.0005),
  num(S`A score of 64 has z = 1.6 in a distribution with σ = 5. Find μ.`, 56, "64 − 1.6(5)."),
  ms(S`For $X\sim N(10,2^2)$, which equal 0.5? Select all.`, [S`$P(X<10)$`, S`$P(X>10)$`, S`$P(8<X<12)$`, S`$P(X\le10)$`], [0, 1, 3], "P(8 < X < 12) ≈ 0.68."),
  mc("The shaded region shows a probability for N(60, 10²). It is about:", "0.8185", ["0.6826", "0.9545", "0.5"], "P(50 < X < 80) = Φ(2) − Φ(−1).", normalDoc(60, 10, [{ a: 50, b: 80, color: "green" }])),
  mc("Which shaded region (for N(0, 1)) is larger: the one shown, beyond z = 1.5, or the area beyond z = 1?", "beyond z = 1", ["the one shown", "they are equal", "cannot tell"], "Further tails are smaller.", normalDoc(0, 1, [{ a: 1.5, b: Infinity, color: "red" }])),
  num(S`$X\sim N(500,30^2)$. Find $P(470<X<560)$ (4 d.p.).`, r4(normCdf(560, 500, 30) - normCdf(470, 500, 30)), "z from −1 to 2.", null, 0.0005),
  num(S`A z-score of −2.4 corresponds to x = 38 when μ = 50. Find σ.`, 5, "(38 − 50)/σ = −2.4."),
  num(S`$X\sim N(9,0.6^2)$. Find $P(X<8.1)$ (4 d.p.).`, r4(Phi(-1.5)), "z = −1.5.", null, 0.0005),
];
