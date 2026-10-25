// 4.3 Normal Probabilities & Percentiles — 20 easy + 20 medium questions
// Probabilities are table values (z rounded to 2 decimals); answers within ±0.003 are accepted to allow technology.
import { mc, ms, num, tf } from "./kit.mjs";
import { normalSvg } from "../../mdm4u/figs.mjs";
import { tphi, invPhi } from "../../mdm4u/count.mjs";

const P = (z) => tphi(z);
const zr = (x, mu, s) => Math.round(((x - mu) / s) * 100) / 100;
const p4 = (prompt, v, fb, fig = null) => num(`${prompt} (4 decimals)`, Math.round(v * 1e4) / 1e4, fb, fig, 0.003);
const r = (v, k = 2) => Math.round(v * 10 ** k) / 10 ** k;

export const E = [
  p4("Find P(Z < 1.00).", P(1), "Table."),
  p4("Find P(Z < −0.50).", P(-0.5), "Table."),
  p4("Find P(Z > 1.50).", 1 - P(1.5), "1 − P(Z < 1.5)."),
  p4("Find P(Z > −1.20).", 1 - P(-1.2), "1 − P(Z < −1.2)."),
  p4("Find P(0 < Z < 1.96).", P(1.96) - 0.5, "P(Z < 1.96) − 0.5."),
  p4("Find P(−1 < Z < 1).", P(1) - P(-1), "Difference of areas."),
  p4("X ~ N(50, 10²). Find P(X < 65).", P(1.5), "z = 1.5."),
  p4("X ~ N(50, 10²). Find P(X > 42).", 1 - P(-0.8), "z = −0.8."),
  p4("X ~ N(200, 25²). Find P(X < 180).", P(-0.8), "z = −0.8."),
  p4("X ~ N(80, 4²). Find P(78 < X < 84).", P(1) - P(-0.5), "z = −0.5 and 1."),
  p4("Find the shaded area under the standard normal curve.", P(0.75), "Area to the left of z = 0.75.", normalSvg({ mu: 0, s: 1, shade: [[-Infinity, 0.75, "blue"]], ticks: [-3, -2, -1, 0, 1, 2, 3] })),
  p4("Find the shaded area (to the right of z = 1.25).", 1 - P(1.25), "1 − P(Z < 1.25).", normalSvg({ mu: 0, s: 1, shade: [[1.25, Infinity, "red"]], ticks: [-3, -2, -1, 0, 1, 2, 3] })),
  num("Which z-score has 50% of the area to its left?", 0, "The mean."),
  mc("The z-table gives the area…", "to the left of z", ["to the right of z", "between 0 and z", "outside ±z"], "Standard table."),
  mc("To find P(X > x), you calculate…", "1 − P(Z < z)", ["P(Z < z)", "P(Z < −z) − 1", "z × P"], "Complement."),
  tf("For a normal variable, P(X < 60) = P(X ≤ 60).", true, "Continuous: P(X = 60) = 0."),
  tf("A percentile is a probability.", false, "It is a value of x."),
  ms("Which equal P(Z > 1)? Select all.", ["1 − P(Z < 1)", "P(Z < −1)", "P(Z > −1)", "about 0.1587", "0.8413"], [0, 1, 3], "Symmetry."),
  num("Approximately what z-score is the 95th percentile? (2 decimals)", 1.64, "Table: area 0.95 between 1.64 and 1.65.", null, 0.015),
  num("Approximately what z-score is the 10th percentile? (2 decimals)", -1.28, "Area 0.10.", null, 0.015),
];

export const M = [
  p4("Delivery times are N(32, 5²) min. Find P(a delivery takes more than 40 min).", 1 - P(1.6), "z = 1.6."),
  p4("Delivery times are N(32, 5²) min. Find P(between 25 and 35 min).", P(0.6) - P(-1.4), "z = −1.4 and 0.6."),
  p4("Bag masses are N(500, 6²) g. Find P(a bag is under 490 g).", P(zr(490, 500, 6)), "z ≈ −1.67."),
  p4("IQ ~ N(100, 15²). Find P(IQ > 120).", 1 - P(zr(120, 100, 15)), "z ≈ 1.33."),
  p4("Seedlings are N(32, 10.2²) cm. Find P(24 < X < 38).", P(zr(38, 32, 10.2)) - P(zr(24, 32, 10.2)), "z ≈ −0.78 and 0.59."),
  num("Commute times are N(28, 6²). Find the 75th percentile (2 decimals).", r(28 + 0.67 * 6), "z ≈ 0.67.", null, 0.1),
  num("Test marks are N(65, 12²). What mark is needed to be in the top 10%? (1 decimal)", r(65 + 1.28 * 12, 1), "z ≈ 1.28.", null, 0.2),
  num("Test marks are N(65, 12²). Below what mark are the lowest 5%? (1 decimal)", r(65 - 1.645 * 12, 1), "z ≈ −1.645.", null, 0.2),
  num("Battery life is N(20, 2²) h. In a shipment of 1000, about how many last less than 17 h?", Math.round(1000 * P(-1.5)), "1000 × P(Z < −1.5).", null, 1),
  num("A machine fills to a mean of 250 mL; σ = 4 mL. What fill volume is exceeded by only 1% of bottles? (1 decimal)", r(250 + 2.33 * 4, 1), "z ≈ 2.33.", null, 0.2),
  num("Scores have μ = 70 and 20% are above 80. Find σ (2 decimals).", r(10 / 0.84), "z(0.80) ≈ 0.84.", null, 0.1),
  num("Scores have σ = 8 and 30% are below 60. Find μ (1 decimal).", r(60 + 0.52 * 8, 1), "z(0.30) ≈ −0.52.", null, 0.2),
  mc("X ~ N(40, 5²). Which probability is largest?", "P(35 < X < 45)", ["P(X > 45)", "P(X < 30)", "P(45 < X < 50)"], "About 0.68."),
  mc("A student's score is at the 90th percentile. Which statement is correct?", "about 90% of students scored lower", ["the student got 90%", "the student is 90 points above the mean", "90 students scored higher"], "Percentile = % below."),
  tf("For N(μ, σ²), the middle 50% of values lies between about μ − 0.67σ and μ + 0.67σ.", true, "Quartiles at z ≈ ±0.67."),
  tf("If P(X < a) = 0.3, then P(X > a) = 0.3.", false, "P(X > a) = 0.7."),
  ms("X ~ N(100, 10²). Which are correct (to 4 decimals)? Select all.", [`P(X < 115) = ${P(1.5)}`, `P(X > 90) = ${r(1 - P(-1), 4)}`, `P(90 < X < 110) = ${r(P(1) - P(-1), 4)}`, "P(X < 100) = 0.4", `P(X > 120) = ${r(1 - P(2), 4)}`], [0, 1, 2, 4], "P(X < 100) = 0.5."),
  p4("Find the shaded area: X ~ N(60, 8²) between 52 and 72.", P(1.5) - P(-1), "z = −1 and 1.5.", normalSvg({ mu: 60, s: 8, shade: [[52, 72, "green"]] })),
  p4("Find the total shaded area in both tails: X ~ N(60, 8²), below 48 or above 74.", P(-1.5) + 1 - P(1.75), "z = −1.5 and 1.75.", normalSvg({ mu: 60, s: 8, shade: [[-Infinity, 48, "red"], [74, Infinity, "red"]] })),
  num("Find the interval containing the middle 80% of N(50, 5²). Enter the upper end (1 decimal).", r(50 + 1.28 * 5, 1), "z = ±1.28.", null, 0.2),
];
