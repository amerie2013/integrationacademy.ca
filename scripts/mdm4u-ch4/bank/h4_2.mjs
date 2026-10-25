// 4.2 The Normal Distribution & z-Scores — 20 hard questions
import { mc, ms, num, tf } from "./kit.mjs";
import { normalSvg } from "../../mdm4u/figs.mjs";

const r = (v, k = 2) => Math.round(v * 10 ** k) / 10 ** k;

export const TOPIC = "4.2 The Normal Distribution & z-Scores";
export const Q = [
  num("In a normal distribution 16% of values are below 47 and 2.5% are above 71. Find μ.", 55, "47 = μ − σ, 71 = μ + 2σ ⇒ σ = 8."),
  num("In a normal distribution 16% of values are below 47 and 2.5% are above 71. Find σ.", 8, "3σ = 24."),
  num("Values 31.5 and 55.5 have z-scores −0.5 and 2.5. Find μ.", 35.5, "σ = 24/3 = 8; μ = 31.5 + 4."),
  num("A class's marks are N(64, 10²). The teacher rescales with y = 0.8x + 20. Find the new standard deviation.", 8, "0.8 × 10."),
  num("Marks are N(64, 10²); after y = 0.8x + 20, find the z-score of a student who had 79.", 1.5, "z is unchanged: (79 − 64)/10."),
  num("Using the empirical rule, about what percent of N(μ, σ²) lies between μ − 3σ and μ + σ?", 83.85, "49.85 + 34.", null, 0.2),
  num("A sprinter's time of 10.6 s has z = −2 in N(11.4, σ²). Find σ.", 0.4, "−0.8/σ = −2.", null, 0.001),
  num("A score of 88 is at the 97.5th percentile (empirical rule) and a score of 64 is at the 50th. Find the score at the 16th percentile.", 52, "σ = 12; μ − σ."),
  num("The curve shows a normal distribution with σ = 5. Its shaded region (μ to μ + 2σ) is about what percent?", 47.5, "Half of 95%.", normalSvg({ mu: 40, s: 5, shade: [[40, 50, "green"]] }), 0.5),
  num("The curve shown is normal with σ = 2. A second normal curve has the same mean and σ = 4. By what factor is its peak height multiplied?", 0.5, "Height ∝ 1/σ.", normalSvg({ mu: 0, s: 2, ticks: [-6, -4, -2, 0, 2, 4, 6] }), 0.001),
  num("The curve shows N(μ, σ²) with tick marks at each standard deviation. Find μ + σ.", 115, "Ticks at 85, 100, 115: μ = 100, σ = 15.", normalSvg({ mu: 100, s: 15 })),
  num("The shaded area of the curve is from z = −1 to z = 2. About what percent is shaded?", 81.5, "34 + 47.5.", normalSvg({ mu: 0, s: 1, shade: [[-1, 2, "blue"]], ticks: [-3, -2, -1, 0, 1, 2, 3] }), 0.5),
  mc("Athlete A long-jumps 7.9 m (μ = 7.4, σ = 0.25). Athlete B high-jumps 2.21 m (μ = 2.05, σ = 0.08). Who is more exceptional?", "they are equally exceptional (z = 2 each)", ["A", "B", "cannot compare"], "Both z = 2."),
  mc("A pediatric chart says a baby's mass is at z = −2.2. Which statement fits?", "the baby is lighter than about 98.6% of babies of that age", ["the baby is 2.2 kg below average", "the baby is in the 22nd percentile", "the mass is impossible"], "z = −2.2 is about the 1.4th percentile."),
  ms("X ~ N(μ, σ²). Which are always true? Select all.", ["P(X < μ) = 0.5", "P(μ − σ < X < μ + σ) ≈ 0.68", "the z-score of μ + 2σ is 2", "P(X > μ + σ) ≈ 0.32", "P(X < μ − 3σ) ≈ 0.0015"], [0, 1, 2, 4], "P(X > μ + σ) ≈ 0.16."),
  tf("If two values in the same normal distribution have z-scores 1 and −1, they are equally far from the mean.", true, "Symmetric distances."),
  tf("A z-score can never be larger than 3.", false, "Rare, but possible."),
  num("Normal heights: men N(176, 7²), women N(163, 6²). A man of 190 cm has the same z-score as a woman of what height?", 175, "z = 2: 163 + 12."),
  num("Three z-scores from the same class: Ali 1.2, Bea −0.4, Cy 0.5. The class has μ = 70 and σ = 10. Find the mean of their three marks.", r(70 + 10 * (1.3 / 3), 2), "Average z = 1.3/3; mark = 70 + 10z.", null, 0.01),
  num("For N(μ, σ²) with μ = 3σ, what percent of values are negative (empirical rule)?", 0.15, "Below μ − 3σ.", null, 0.05),
];
