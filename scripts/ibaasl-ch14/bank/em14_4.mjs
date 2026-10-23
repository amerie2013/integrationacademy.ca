// 14.4 Inverse Normal and Standardisation — 20 easy + 20 medium questions
import { mc, ms, num, tf, fill } from "./kit.mjs";
import { normalDoc, invPhi } from "../figs14.mjs";

const S = String.raw;
const r = (v, d = 2) => Math.round(v * 10 ** d) / 10 ** d;
const z = invPhi;

export const E = [
  mc("The inverse normal function takes as input:", "the area to the left of x", ["the value x", "the z-score of x", "the area to the right of x"], "Left-tail probability."),
  mc(S`To find x with $P(X>x)=0.2$, use the inverse normal with area:`, "0.8", ["0.2", "0.1", "0.4"], "Left area 1 − 0.2."),
  mc(S`The formula connecting x and z is:`, S`$x=\mu+z\sigma$`, [S`$x=\mu-z\sigma$`, S`$x=z\mu+\sigma$`, S`$x=\frac{\mu}{z\sigma}$`], "Rearranged z-score."),
  mc(S`If $P(Z<z)=0.5$, then z is:`, "0", ["0.5", "1", "−0.5"], "The mean."),
  mc(S`If $P(Z<z)=0.3$, then z is:`, "negative", ["positive", "zero", "greater than 1"], "Below the mean."),
  num(S`Find z with $P(Z<z)=0.9$ (4 d.p.).`, r(z(0.9), 4), "Inverse normal.", null, 0.0005),
  num(S`Find z with $P(Z>z)=0.05$ (4 d.p.).`, r(z(0.95), 4), "Left area 0.95.", null, 0.0005),
  num(S`$X\sim N(40,5^2)$ and $z=2$. Find x.`, 50, "40 + 2(5)."),
  num(S`$X\sim N(40,5^2)$ and $z=-1.2$. Find x.`, 34, "40 − 6."),
  num(S`$X\sim N(70,10^2)$. Find x with $P(X<x)=0.5$.`, 70, "The mean."),
  tf(S`If $P(X<a)=0.25$ for a normal X, then a is below the mean.`, true, "Area less than 0.5."),
  tf(S`$P(Z<1.645)\approx0.95$.`, true, "Standard result."),
  tf(S`If $P(X>x)=0.9$ then x is above the mean.`, false, "A large right area means x is below the mean."),
  fill(S`To find a right-tail boundary with probability p, use left area ___.`, ["1-p", "1 − p", "1 - p"], "Complement."),
  ms(S`Which z-values are negative? Select all.`, [S`$P(Z<z)=0.1$`, S`$P(Z<z)=0.45$`, S`$P(Z>z)=0.3$`, S`$P(Z>z)=0.8$`], [0, 1, 3], "Left area below 0.5."),
  mc("The shaded area is 0.9. The boundary on N(50, 4²) is about:", "55.13", ["44.87", "56.58", "53.37"], "50 + 1.2816(4).", normalDoc(50, 4, [{ a: -Infinity, b: 50 + z(0.9) * 4, color: "green" }], { lines: [50 + z(0.9) * 4] })),
  mc("The shaded right tail has area 0.025. The boundary on N(0, 1) is:", "1.96", ["−1.96", "1.645", "2.33"], "Left area 0.975.", normalDoc(0, 1, [{ a: z(0.975), b: Infinity, color: "red" }], { lines: [z(0.975)] })),
  num(S`$X\sim N(100,20^2)$. Find x with $P(X<x)=0.84$ (nearest whole).`, Math.round(100 + z(0.84) * 20), "z ≈ 0.994.", null, 1),
  num(S`Find z with $P(Z<z)=0.75$ (4 d.p.).`, r(z(0.75), 4), "Upper quartile.", null, 0.0005),
  mc(S`If x is the 90th percentile of $N(\mu,\sigma^2)$, then $P(X>x)$ is:`, "0.1", ["0.9", "0.05", "0.45"], "10% above."),
];

export const M = [
  num(S`$X\sim N(150,12^2)$. Find x with $P(X<x)=0.35$ (2 d.p.).`, r(150 + z(0.35) * 12), "z ≈ −0.3853.", null, 0.01),
  num(S`$X\sim N(150,12^2)$. Find the boundary of the top 15% (2 d.p.).`, r(150 + z(0.85) * 12), "Left area 0.85.", null, 0.01),
  num(S`$X\sim N(30,2.5^2)$. Find x with $P(X>x)=0.7$ (2 d.p.).`, r(30 + z(0.3) * 2.5), "Left area 0.3.", null, 0.01),
  num(S`$X\sim N(25,\sigma^2)$ and $P(X<31)=0.9$. Find σ (3 d.p.).`, r(6 / z(0.9), 3), "6/1.2816.", null, 0.002),
  num(S`$X\sim N(\mu,5^2)$ and $P(X<40)=0.6$. Find μ (2 d.p.).`, r(40 - z(0.6) * 5), "40 − 0.2533(5).", null, 0.01),
  num(S`$X\sim N(\mu,8^2)$ and $P(X>100)=0.05$. Find μ (2 d.p.).`, r(100 - z(0.95) * 8), "100 − 1.6449(8).", null, 0.01),
  mc(S`$X\sim N(80,\sigma^2)$ and $P(X<70)=0.2$. Then σ is about:`, "11.88", ["8.42", "12.50", "5.94"], "−10/(−0.8416)."),
  mc("The interquartile range of N(μ, σ²) is about:", S`$1.35\sigma$`, [S`$\sigma$`, S`$2\sigma$`, S`$0.67\sigma$`], "2 × 0.6745σ."),
  mc(S`The middle 95% of $N(\mu,\sigma^2)$ is:`, S`$\mu\pm1.96\sigma$`, [S`$\mu\pm1.645\sigma$`, S`$\mu\pm2.58\sigma$`, S`$\mu\pm\sigma$`], "Tails 0.025."),
  tf(S`If σ doubles (μ fixed), the 90th percentile moves twice as far from μ.`, true, "x − μ = zσ."),
  tf(S`Knowing one percentile is enough to find both μ and σ.`, false, "Two unknowns need two conditions."),
  num(S`Marks are $N(58,9^2)$. The top 25% get a merit. Find the lowest merit mark (2 d.p.).`, r(58 + z(0.75) * 9), "Left area 0.75.", null, 0.01),
  num(S`Flight times are $N(95,6^2)$ min. Find the time exceeded by only 2% of flights (2 d.p.).`, r(95 + z(0.98) * 6), "Left area 0.98.", null, 0.01),
  num(S`$X\sim N(0,\sigma^2)$ and $P(|X|<3)=0.9$. Find σ (3 d.p.).`, r(3 / z(0.95), 3), "P(X < 3) = 0.95.", null, 0.002),
  ms(S`For $X\sim N(50,10^2)$, which are true? Select all.`, [S`the 50th percentile is 50`, S`the 84th percentile is about 60`, S`the 16th percentile is about 40`, S`the 95th percentile is about 70`], [0, 1, 2], "95th ≈ 66.45."),
  mc("The shaded central region has area 0.6 for N(0, 1). Its bounds are about:", "±0.84", ["±0.25", "±1.28", "±0.52"], "Left area 0.8.", normalDoc(0, 1, [{ a: z(0.2), b: z(0.8), color: "green" }], { lines: [z(0.2), z(0.8)] })),
  mc("The shaded lower tail of N(μ, 3²) has area 0.1 and ends at x = 20. Then μ is about:", "23.84", ["16.16", "21.28", "26.16"], "20 + 1.2816(3).", normalDoc(20 + 1.2816 * 3, 3, [{ a: -Infinity, b: 20, color: "red" }], { lines: [20] })),
  num(S`$X\sim N(\mu,\sigma^2)$ with $\mu=60$ and the 75th percentile 66. Find σ (3 d.p.).`, r(6 / z(0.75), 3), "6/0.6745.", null, 0.002),
  num(S`Find the 30th percentile of $N(12,0.8^2)$ (3 d.p.).`, r(12 + z(0.3) * 0.8, 3), "12 − 0.5244(0.8).", null, 0.002),
  num(S`$X\sim N(200,\sigma^2)$ and 5% of values exceed 230. Find σ (3 d.p.).`, r(30 / z(0.95), 3), "30/1.6449.", null, 0.002),
];
