// 4.4 The Normal Approximation to the Binomial — 20 easy + 20 medium questions
import { mc, ms, num, tf } from "./kit.mjs";
import { barsSvg, normalSvg } from "../../mdm4u/figs.mjs";
import { bin, tphi } from "../../mdm4u/count.mjs";

const P = (z) => tphi(z);
const zz = (v) => Math.round(v * 100) / 100;
const r = (v, k = 2) => Math.round(v * 10 ** k) / 10 ** k;
const p4 = (prompt, v, fb, fig = null) => num(`${prompt} (4 decimals)`, Math.round(v * 1e4) / 1e4, fb, fig, 0.004);
const N = (n, p) => ({ m: n * p, s: Math.sqrt(n * p * (1 - p)) });

export const E = [
  num("Binomial n = 100, p = 0.3. Find μ.", 30, "np."),
  num("Binomial n = 100, p = 0.5. Find σ.", 5, "√(100·0.5·0.5)."),
  num("Binomial n = 400, p = 0.5. Find σ.", 10, "√100."),
  num("Binomial n = 50, p = 0.2. Find np.", 10, "50 × 0.2."),
  num("Binomial n = 50, p = 0.2. Find nq.", 40, "50 × 0.8."),
  num("With a continuity correction, P(X ≤ 20) becomes P(X < ?).", 20.5, "Add 0.5.", null, 0.001),
  num("With a continuity correction, P(X ≥ 15) becomes P(X > ?).", 14.5, "Subtract 0.5.", null, 0.001),
  num("With a continuity correction, P(X < 10) becomes P(X < ?).", 9.5, "X < 10 means X ≤ 9.", null, 0.001),
  num("With a continuity correction, P(X = 25) becomes P(24.5 < X < ?).", 25.5, "Width 1 around 25.", null, 0.001),
  num("What is the smallest value np must have for the normal approximation (rule of thumb)?", 5, "np ≥ 5 and nq ≥ 5."),
  mc("Which binomial can be approximated by a normal distribution?", "n = 60, p = 0.5", ["n = 10, p = 0.2", "n = 20, p = 0.1", "n = 30, p = 0.05"], "np and nq at least 5."),
  mc("As n increases (p fixed), the binomial histogram becomes…", "more bell-shaped", ["more skewed", "flat", "decreasing"], "Approaches normal."),
  tf("The continuity correction is needed because the binomial is discrete.", true, "Bars vs a continuous curve."),
  tf("For n = 100 and p = 0.02, the normal approximation is appropriate.", false, "np = 2 < 5."),
  tf("The normal approximation uses μ = np and σ = √(npq).", true, "Binomial mean and sd."),
  ms("Which are needed for a good normal approximation? Select all.", ["np ≥ 5", "nq ≥ 5", "p = 0.5 exactly", "a continuity correction", "n < 10"], [0, 1, 3], "p need not be 0.5."),
  num("Read the histogram (binomial n = 40, p = 0.5): where is it centred?", 20, "np.", barsSvg(Array.from({ length: 41 }, (_, x) => bin(40, 0.5, x)), { labels: Array.from({ length: 41 }, (_, x) => (x % 5 ? "" : x)), histogram: true, bw: 9, fmt: (v) => v.toFixed(2) })),
  p4("n = 100, p = 0.5. Approximate P(X ≤ 55).", P(1.1), "z = (55.5 − 50)/5."),
  p4("n = 100, p = 0.5. Approximate P(X ≥ 60).", 1 - P(1.9), "z = (59.5 − 50)/5."),
  num("The curve shows the normal approximation for n = 64, p = 0.5. What is σ?", 4, "√(64·0.25).", normalSvg({ mu: 32, s: 4 })),
];

export const M = [
  num("n = 200, p = 0.1. Find σ (3 decimals).", r(Math.sqrt(18), 3), "√(200·0.1·0.9).", null, 0.002),
  p4("A coin is tossed 400 times. Approximate P(more than 210 heads).", 1 - P(zz((210.5 - 200) / 10)), "X > 210 → X > 210.5."),
  p4("A coin is tossed 400 times. Approximate P(between 190 and 210 heads inclusive), shaded.", P(zz((210.5 - 200) / 10)) - P(zz((189.5 - 200) / 10)), "189.5 to 210.5.", normalSvg({ mu: 200, s: 10, shade: [[189.5, 210.5, "blue"]] })),
  p4("A die is rolled 300 times. Approximate P(at most 45 sixes).", (() => { const { m, s } = N(300, 1 / 6); return P(zz((45.5 - m) / s)); })(), "μ = 50, σ ≈ 6.45."),
  p4("30% of students bike. In a sample of 120, approximate P(fewer than 30 bike).", (() => { const { m, s } = N(120, 0.3); return P(zz((29.5 - m) / s)); })(), "μ = 36, σ ≈ 5.02; X < 30 → X < 29.5."),
  p4("A test has 80 true/false questions. Approximate P(a guesser gets at least 48 correct).", 1 - P(zz((47.5 - 40) / Math.sqrt(20))), "μ = 40, σ ≈ 4.47."),
  p4("n = 50, p = 0.4. Approximate P(X = 20).", (() => { const { m, s } = N(50, 0.4); return P(zz((20.5 - m) / s)) - P(zz((19.5 - m) / s)); })(), "19.5 to 20.5; σ ≈ 3.46."),
  num("Exact binomial n = 50, p = 0.4: P(X = 20) to 4 decimals (technology).", r(bin(50, 0.4, 20), 4), "₅₀C₂₀(0.4)²⁰(0.6)³⁰.", null, 0.0005),
  mc("For n = 50, p = 0.4, the normal approximation of P(X = 20) is…", "very close to the exact value", ["much larger than the exact value", "zero", "impossible to compute"], "Conditions hold well."),
  mc("Which continuity correction matches P(12 ≤ X ≤ 18)?", "P(11.5 < X < 18.5)", ["P(12.5 < X < 17.5)", "P(11.5 < X < 17.5)", "P(12 < X < 18)"], "Include both end bars."),
  tf("If np = 6 and nq = 4, the normal approximation is appropriate.", false, "nq < 5."),
  tf("The normal approximation gives P(X = k) > 0 only when a continuity correction is used.", true, "Otherwise a single point has zero area."),
  ms("n = 100, p = 0.5. Which are correct? Select all.", ["μ = 50", "σ = 5", "P(X ≤ 50) ≈ P(Z < 0.1)", "P(X ≥ 50) ≈ P(Z > −0.1)", "σ = 25"], [0, 1, 2, 3], "σ = 5, variance 25."),
  num("Find the smallest n for which the normal approximation is allowed with p = 0.1.", 50, "0.1n ≥ 5."),
  num("Find the smallest n for which the normal approximation is allowed with p = 0.95.", 100, "0.05n ≥ 5."),
  p4("8% of reservations are cancelled. With 250 reservations, approximate P(at least 25 are cancelled).", (() => { const { m, s } = N(250, 0.08); return 1 - P(zz((24.5 - m) / s)); })(), "μ = 20, σ ≈ 4.29."),
  p4("The shaded region shows P(X ≤ 36) for binomial n = 90, p = 0.4 with a continuity correction. Approximate it.", (() => { const { m, s } = N(90, 0.4); return P(zz((36.5 - m) / s)); })(), "μ = 36, σ ≈ 4.65.", normalSvg({ mu: 36, s: Math.sqrt(21.6), shade: [[-Infinity, 36.5, "blue"]] })),
  num("A binomial with n = 150 has μ = 60. Find σ (2 decimals).", r(Math.sqrt(150 * 0.4 * 0.6)), "p = 0.4.", null, 0.01),
  num("A binomial has μ = 30 and σ = 5. Find n.", 180, "npq = 25 and np = 30 ⇒ q = 5/6, p = 1/6, n = 30 ÷ (1/6)."),
  p4("A drug works for 65% of patients. Of 200 patients, approximate P(at most 120 improve).", (() => { const { m, s } = N(200, 0.65); return P(zz((120.5 - m) / s)); })(), "μ = 130, σ ≈ 6.75."),
];
