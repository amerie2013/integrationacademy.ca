// 14.4 Inverse Normal and Standardisation — 20 hard questions
import { mc, ms, num, tf } from "./kit.mjs";
import { normalDoc, invPhi, Phi } from "../figs14.mjs";

const S = String.raw;
const r = (v, d = 2) => Math.round(v * 10 ** d) / 10 ** d;
const z = invPhi;
const sA = 25 / (z(0.85) - z(0.15)), mA = 50;
const sB = 15 / (z(0.9) - z(0.4)), mB = 70 - z(0.9) * sB;
const sC = 12 / (z(0.95) - z(0.3)), mC = 40 - z(0.3) * sC;

export const TOPIC = "14.4 Inverse Normal and Standardisation";
export const Q = [
  num(S`The graph shows $N(\mu,\sigma^2)$ with $P(X<37.5)=0.15$ and $P(X>62.5)=0.15$. Find σ (3 d.p.).`, r(sA, 3), "Symmetric: μ = 50 and 12.5 = 1.0364σ.", normalDoc(mA, sA, [{ a: -Infinity, b: 37.5, color: "red" }, { a: 62.5, b: Infinity, color: "red" }], { lines: [37.5, 62.5] }), 0.002),
  num(S`$P(X<55)=0.4$ and $P(X<70)=0.9$ for $X\sim N(\mu,\sigma^2)$. Find μ (2 d.p.).`, r(mB), "μ − 0.2533σ = 55, μ + 1.2816σ = 70.", null, 0.02),
  num(S`For the distribution above, find σ (3 d.p.).`, r(sB, 3), "15/1.5349.", null, 0.003),
  num(S`$P(X>52)=0.05$ and $P(X<40)=0.3$. Find σ (3 d.p.).`, r(sC, 3), "μ + 1.6449σ = 52, μ − 0.5244σ = 40.", null, 0.003),
  num(S`A machine fills cups with $N(\mu,4^2)$ ml. At most 0.5% may contain under 250 ml. Find the least μ (2 d.p.).`, r(250 - z(0.005) * 4), "μ = 250 + 2.5758(4).", null, 0.01),
  mc(S`The machine above is improved so σ halves (μ unchanged). The proportion under 250 ml becomes:`, "much smaller than 0.5%", ["0.25%", "1%", "unchanged"], "The z-score doubles in size."),
  num(S`$X\sim N(\mu,\sigma^2)$ with $\mu=3\sigma$ and $P(X<10)=0.95$. Find σ (3 d.p.).`, r(10 / (3 + z(0.95)), 3), "3σ + 1.6449σ = 10.", null, 0.002),
  tf(S`For any normal distribution, the 90th percentile minus the median equals the median minus the 10th percentile.`, true, "Symmetry."),
  ms(S`Scores are $N(500,100^2)$. Which are true? Select all.`, ["the top 10% score above about 628", "the middle 50% lie between about 433 and 567", "the bottom 5% score below about 336", "the median is 550"], [0, 1, 2], "Median = 500."),
  num(S`The graph shows marks $N(64,10^2)$ with A (top 10%) and B (next 25%) shaded. Find the lowest B mark (2 d.p.).`, r(64 + z(0.65) * 10), "Left area 1 − 0.35 = 0.65.", normalDoc(64, 10, [{ a: 64 + z(0.9) * 10, b: Infinity, color: "green" }, { a: 64 + z(0.65) * 10, b: 64 + z(0.9) * 10, color: "blue" }], { lines: [64 + z(0.65) * 10, 64 + z(0.9) * 10] }), 0.01),
  num(S`Batteries last $N(400,40^2)$ hours. The maker wants to guarantee a life that 99% exceed. Find it (1 d.p.).`, r(400 + z(0.01) * 40, 1), "Left area 0.01.", null, 0.1),
  num(S`$X\sim N(20,\sigma^2)$ and $P(18<X<22)=0.5$. Find σ (3 d.p.).`, r(2 / z(0.75), 3), "P(X < 22) = 0.75.", null, 0.002),
  num(S`$X\sim N(\mu,6^2)$ and $P(X<\mu+k)=0.975$. Find k (3 d.p.).`, r(z(0.975) * 6, 3), "k = 1.96σ.", null, 0.002),
  num(S`Heights are $N(165,7^2)$ cm. A door must fit all but the tallest 0.1%. Find the minimum door height (1 d.p.).`, r(165 + z(0.999) * 7, 1), "Left area 0.999.", null, 0.1),
  mc(S`$X\sim N(\mu,\sigma^2)$ with $P(X<a)=0.2$ and $P(X<b)=0.8$. Then μ equals:`, S`$\frac{a+b}{2}$`, [S`$b-a$`, S`$\frac{b-a}{2}$`, S`$a+0.2b$`], "Symmetric percentiles."),
  num(S`The graph shows $N(\mu,5^2)$ with the top 20% shaded beyond x = 84. Find μ (2 d.p.).`, r(84 - z(0.8) * 5), "84 − 0.8416(5).", normalDoc(84 - z(0.8) * 5, 5, [{ a: 84, b: Infinity, color: "amber" }], { lines: [84] }), 0.01),
  num(S`$X\sim N(\mu,\sigma^2)$ with $P(X<30)=0.1$ and $P(X<50)=0.75$. Find σ (3 d.p.).`, r(20 / (z(0.75) - z(0.1)), 3), "μ − 1.2816σ = 30 and μ + 0.6745σ = 50.", null, 0.003),
  tf(S`If x is the 95th percentile of $N(\mu,\sigma^2)$, then $2\mu-x$ is the 5th percentile.`, true, "Reflect about μ."),
  num(S`The graph shows the central 99% of $N(1000,50^2)$. Find the upper bound (2 d.p.).`, r(1000 + z(0.995) * 50), "Left area 0.995.", normalDoc(1000, 50, [{ a: 1000 + z(0.005) * 50, b: 1000 + z(0.995) * 50, color: "green" }], { lines: [1000 + z(0.005) * 50, 1000 + z(0.995) * 50] }), 0.01),
  num(S`Lengths are $N(\mu,0.2^2)$ mm. Find μ so that 90% of parts are shorter than 12 mm (3 d.p.).`, r(12 - z(0.9) * 0.2, 3), "12 − 1.2816(0.2).", null, 0.002),
];
