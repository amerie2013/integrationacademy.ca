// 4.3 Normal Probabilities & Percentiles — 20 hard questions
import { mc, ms, num, tf } from "./kit.mjs";
import { normalSvg, tableSvg } from "../../mdm4u/figs.mjs";
import { tphi, invPhi, phi } from "../../mdm4u/count.mjs";

const P = (z) => tphi(z);
const zr = (x, mu, s) => Math.round(((x - mu) / s) * 100) / 100;
const p4 = (prompt, v, fb, fig = null) => num(`${prompt} (4 decimals)`, Math.round(v * 1e4) / 1e4, fb, fig, 0.003);
const r = (v, k = 2) => Math.round(v * 10 ** k) / 10 ** k;

export const TOPIC = "4.3 Normal Probabilities & Percentiles";
export const Q = [
  num("10% of values are below 52 and 20% are above 79. Find σ (2 decimals).", r(27 / (1.28 + 0.84)), "μ − 1.28σ = 52, μ + 0.84σ = 79.", null, 0.1),
  num("10% of values are below 52 and 20% are above 79. Find μ (1 decimal).", r(52 + 1.28 * (27 / 2.12), 1), "μ = 52 + 1.28σ.", null, 0.3),
  num("A company guarantees tires for k km and replaces 2% of them. Lives are N(70 000, 5000²). Find k (nearest 100 km).", Math.round((70000 - 2.05 * 5000) / 100) * 100, "z ≈ −2.05.", null, 150),
  p4("Bolts must be 20.00 ± 0.15 mm. Lengths are N(20.03, 0.07²). Find the proportion rejected.", P(zr(19.85, 20.03, 0.07)) + 1 - P(zr(20.15, 20.03, 0.07)), "Both tails."),
  p4("X ~ N(80, 5²). Find P(|X − 80| > 8).", 2 * (1 - P(1.6)), "Two tails beyond z = ±1.6."),
  p4("X ~ N(80, 5²). Given X > 80, find P(X > 88).", (1 - P(1.6)) / 0.5, "Conditional: P(X > 88)/P(X > 80)."),
  p4("Two independent bags each have mass N(500, 4²) g. Find P(both weigh more than 505 g).", (1 - P(1.25)) ** 2, "(1 − P(Z < 1.25))²."),
  num("Machine A fills N(500, 3²), machine B N(503, 5²). Which rejects more bottles under 495 mL? Enter the larger rejection rate (4 decimals).", r(Math.max(P(zr(495, 500, 3)), P(zr(495, 503, 5))), 4), "A: z ≈ −1.67; B: z = −1.6.", null, 0.003),
  num("A cereal box must contain at least 500 g; σ = 5 g. What mean ensures only 1% of boxes are underweight? (1 decimal)", r(500 + 2.33 * 5, 1), "μ = 500 + 2.33σ.", null, 0.2),
  num("The middle 95% of adult female heights is 151 to 175 cm (normal). Find σ (2 decimals).", r(12 / 1.96), "1.96σ = 12.", null, 0.05),
  num("Use the table excerpt: find P(−0.52 < Z < 1.13) (4 decimals).", r(P(1.13) - P(-0.52), 4), "Read both values.", tableSvg([["z", "0.02", "0.03"], ["−0.5", String(P(-0.52)), String(P(-0.53))], ["1.1", String(P(1.12)), String(P(1.13))]], { rowHead: true }), 0.0005),
  p4("The curve shows N(120, 16²). Find the shaded area (100 to 150).", P(zr(150, 120, 16)) - P(zr(100, 120, 16)), "z = −1.25 and 1.875 ≈ 1.88.", normalSvg({ mu: 120, s: 16, shade: [[100, 150, "blue"]] })),
  num("The shaded right tail of N(64, 6²) has area 0.05. Find the boundary (1 decimal).", r(64 + 1.645 * 6, 1), "z ≈ 1.645.", normalSvg({ mu: 64, s: 6, shade: [[64 + 1.645 * 6, Infinity, "amber"]] }), 0.2),
  num("The shaded middle region of N(50, 10²) has area 0.5. Find its upper end (1 decimal).", r(50 + 0.67 * 10, 1), "z ≈ 0.67.", normalSvg({ mu: 50, s: 10, shade: [[43.3, 56.7, "green"]] }), 0.2),
  mc("X ~ N(70, 10²) and Y ~ N(70, 5²). Which is true?", "P(X > 80) > P(Y > 80)", ["P(X > 80) < P(Y > 80)", "they are equal", "both are 0.5"], "80 is 1σ for X but 2σ for Y."),
  ms("X ~ N(μ, σ²). Which are true? Select all.", ["the 50th percentile is μ", "the 84th percentile is about μ + σ", "P(X < μ − 2σ) ≈ 0.0228", "the 25th and 75th percentiles are μ ∓ 0.67σ", "P(X > μ) = 0.84"], [0, 1, 2, 3], "P(X > μ) = 0.5."),
  tf("If a variable is normal, its 99th percentile is about 2.33 standard deviations above the mean.", true, "z(0.99) ≈ 2.33."),
  tf("Doubling σ doubles every percentile.", false, "Percentiles become μ + 2zσ, not double."),
  num("In a school of 1500, heights are N(168, 9²). About how many students are between 160 and 180 cm?", Math.round(1500 * (P(zr(180, 168, 9)) - P(zr(160, 168, 9)))), "z ≈ −0.89 and 1.33.", null, 5),
  num("Scores are N(μ, σ²). The 90th percentile is 86 and the 40th percentile is 68. Find σ (2 decimals).", r(18 / (1.28 + 0.25)), "z = 1.28 and −0.25.", null, 0.1),
];
