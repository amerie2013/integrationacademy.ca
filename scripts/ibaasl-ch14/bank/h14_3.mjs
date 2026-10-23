// 14.3 The Normal Distribution — 20 hard questions
import { mc, ms, num, tf } from "./kit.mjs";
import { normalDoc, Phi, normCdf, binomCdf, binom } from "../figs14.mjs";

const S = String.raw;
const r4 = (v) => Math.round(v * 10000) / 10000;
const pBig = 1 - Phi(1.25), pTom = 1 - Phi(0.5);

export const TOPIC = "14.3 The Normal Distribution";
export const Q = [
  num(S`The graph shows $X\sim N(250,8^2)$ with two tails shaded. Find the total shaded probability $P(X<240)+P(X>266)$ (4 d.p.).`, r4(Phi(-1.25) + 1 - Phi(2)), "z = −1.25 and 2.", normalDoc(250, 8, [{ a: -Infinity, b: 240, color: "red" }, { a: 266, b: Infinity, color: "red" }]), 0.0005),
  num(S`Oranges have mass $N(200,16^2)$ g; those over 220 g are "large". In a crate of 10, find P(at least 2 large) (4 d.p.).`, r4(1 - binomCdf(10, pBig, 1)), "p = P(Z > 1.25); then B(10, p).", null, 0.0005),
  num(S`$X\sim N(40,5^2)$. Find $P(X>45\mid X>40)$ (4 d.p.).`, r4((1 - Phi(1)) / 0.5), "P(X > 45)/0.5.", null, 0.0005),
  num(S`$X\sim N(40,5^2)$. Find $P(X<35\mid X<45)$ (4 d.p.).`, r4(Phi(-1) / Phi(1)), "P(X < 35)/P(X < 45).", null, 0.0005),
  num(S`Two independent values are taken from $N(100,15^2)$. Find P(both exceed 110) (4 d.p.).`, r4((1 - Phi(2 / 3)) ** 2), "Square the single probability.", null, 0.0005),
  mc(S`$X\sim N(\mu,\sigma^2)$ and $P(X<12)=P(X>20)$. Then μ is:`, "16", ["12", "20", "8"], "Equal tails ⇒ midpoint."),
  num(S`$X\sim N(60,\sigma^2)$ and $P(X<52)=0.1$. Find $P(52<X<68)$.`, 0.8, "P(X > 68) = 0.1 by symmetry.", null, 0.001),
  tf(S`If $X\sim N(\mu,\sigma^2)$ then $P(|X-\mu|<2\sigma)$ is the same for every μ and σ.`, true, "Standardising gives P(|Z| < 2)."),
  ms(S`Machine A fills $N(330,4^2)$ ml and machine B $N(332,6^2)$ ml. Which are true? Select all.`, ["B has the larger proportion under 325 ml", "A has the larger proportion under 325 ml", "both have mean above 325", "A is more consistent"], [0, 2, 3], "P_A ≈ 0.1056, P_B ≈ 0.1217."),
  num(S`The graph shows $N(170,9^2)$ heights. Out of 2500 people, how many are expected between 160 and 185 cm (nearest whole)?`, Math.round(2500 * (normCdf(185, 170, 9) - normCdf(160, 170, 9))), "2500 × P(160 < X < 185).", normalDoc(170, 9, [{ a: 160, b: 185, color: "green" }]), 1),
  num(S`Tom's time is 49 s in a race with times $N(52,6^2)$ s (lower is better). Find the proportion of runners faster than Tom (4 d.p.).`, r4(Phi(-0.5)), "P(X < 49).", null, 0.0005),
  num(S`For the race above, 8 runners are chosen at random. Find P(exactly 3 are faster than Tom) (4 d.p.).`, r4(binom(8, 1 - pTom, 3)), "p = P(X < 49) ≈ 0.3085; B(8, p).", null, 0.0005),
  num(S`$X\sim N(0,1)$. Find $P(Z^2<1)$ (4 d.p.).`, r4(Phi(1) - Phi(-1)), "−1 < Z < 1.", null, 0.0005),
  num(S`Daily rainfall is $N(4,1.5^2)$ mm. Find the expected number of days in a 30-day month with more than 6 mm (2 d.p.).`, Math.round(30 * (1 - Phi(4 / 3)) * 100) / 100, "30 × P(Z > 1.333).", null, 0.01),
  mc(S`$X\sim N(\mu,4^2)$ and $P(X>\mu+k)=0.1587$. Then k is:`, "4", ["2", "8", "1"], "0.1587 = P(Z > 1)."),
  num(S`The graph shows $N(80,10^2)$ with a central region shaded. Find the shaded probability $P(65<X<95)$ (4 d.p.).`, r4(normCdf(95, 80, 10) - normCdf(65, 80, 10)), "z = ±1.5.", normalDoc(80, 10, [{ a: 65, b: 95, color: "blue" }]), 0.0005),
  num(S`$X\sim N(30,3^2)$ and $Y\sim N(35,5^2)$. Find $P(X>36)-P(Y>45)$ (4 d.p.).`, r4((1 - Phi(2)) - (1 - Phi(2))), "Both are z = 2.", null, 0.0005),
  tf("Standardising preserves the order of values.", true, "z = (x − μ)/σ is increasing when σ > 0."),
  num(S`The graph shows $N(12,2^2)$ with the region above 15 shaded. Find P(X > 15 | X > 12) (4 d.p.).`, r4((1 - Phi(1.5)) / 0.5), "P(X > 15)/0.5.", normalDoc(12, 2, [{ a: 15, b: Infinity, color: "amber" }]), 0.0005),
  num(S`Lengths are $N(20,0.4^2)$ cm and parts within 19.5–20.5 cm pass. Find the probability that 5 parts all pass (4 d.p.).`, r4((normCdf(20.5, 20, 0.4) - normCdf(19.5, 20, 0.4)) ** 5), "Single pass P(|Z| < 1.25), then power 5.", null, 0.0005),
];
