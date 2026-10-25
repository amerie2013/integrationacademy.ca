// MDM4U Worksheet 4.3 — Normal Probabilities & Percentiles (teacher edition)
import { svgT, normalSvg } from "./figT.mjs";
import { r3, tphi } from "../../mdm4u/count.mjs";

const S = String.raw;
const P = (z) => tphi(z);
const zr = (x, mu, s) => Math.round(((x - mu) / s) * 100) / 100;

const EXAMPLES = [
  { title: "Reading the table", q: "Find P(Z < 0.84), P(Z < −1.52) and P(Z > 2.10).", steps: [S`Table: $${P(0.84)}$, $${P(-1.52)}$; $1-${P(2.1)}$.`], ans: `${P(0.84)}, ${P(-1.52)}, ${r3(1 - P(2.1), 4)}` },
  { title: "Below", q: "Delivery times are N(35, 6²) min. Find P(a delivery takes less than 30 min).", fig: svgT(normalSvg({ mu: 35, s: 6, shade: [[-Infinity, 30, "blue"]] }), 4.2), steps: [S`$z=\frac{-5}6\approx-0.83$.`], ans: `${P(-0.83)}` },
  { title: "Above", q: "Same deliveries: P(more than 45 min).", steps: [S`$z\approx1.67$: $1-${P(1.67)}$.`], ans: `${r3(1 - P(1.67), 4)}` },
  { title: "Between", q: "Same deliveries: P(between 32 and 40 min).", steps: [S`$z=-0.5$ and $0.83$: $${P(0.83)}-${P(-0.5)}$.`], ans: `${r3(P(0.83) - P(-0.5), 4)}` },
  { title: "Expected count", q: "A factory makes 5000 bolts a day; lengths are N(80, 0.5²) mm; bolts over 81 mm are rejected. How many are rejected per day?", steps: [S`$z=2$: $1-${P(2)}=${r3(1 - P(2), 4)}$.`, S`$5000\times${r3(1 - P(2), 4)}$.`], ans: `about ${Math.round(5000 * (1 - P(2)))}` },
  { title: "Percentile", q: "Find the 80th percentile of N(35, 6²).", steps: [S`$z\approx0.84$; $35+0.84(6)$.`], ans: `${r3(35 + 0.84 * 6, 2)} min` },
  { title: "Middle 90 percent", q: "Find the interval containing the middle 90% of N(35, 6²).", steps: [S`$z=\pm1.645$; $35\pm9.87$.`], ans: "25.13 to 44.87 min" },
  { title: "Unknown μ", q: "A machine is set so that only 2% of cereal boxes contain less than 500 g; σ = 6 g. Find the required mean.", steps: [S`$z\approx-2.05$: $\mu=500+2.05(6)$.`], ans: "512.3 g" },
  { title: "Unknown σ", q: "Scores have μ = 70 and 15% exceed 85. Find σ.", steps: [S`$z\approx1.04$: $\sigma=\frac{15}{1.04}$.`], ans: `≈ ${r3(15 / 1.04, 2)}` },
];

const PROBLEMS = [
  { level: 1, q: "Find P(Z < 1.18), P(Z > 0.45) and P(−1 < Z < 1).", ans: `${P(1.18)}, ${r3(1 - P(0.45), 4)}, ${r3(P(1) - P(-1), 4)}` },
  { level: 1, q: "X ~ N(60, 8²). Find P(X < 70).", ans: `${P(1.25)}` },
  { level: 1, q: "X ~ N(60, 8²). Find P(X > 50).", ans: `${r3(1 - P(-1.25), 4)}` },
  { level: 2, q: "Heights of seedlings are N(32, 10.2²) cm. Find P(24 < X < 38).", ans: `${r3(P(zr(38, 32, 10.2)) - P(zr(24, 32, 10.2)), 4)}` },
  { level: 2, q: "A test is N(65, 12²). What mark puts a student in the top 15%?", ans: `${r3(65 + 1.04 * 12, 1)}` },
  { level: 2, q: "A test is N(65, 12²). In a class of 30, how many students are expected to score below 50?", ans: `${r3(30 * P(-1.25), 1)} ≈ ${Math.round(30 * P(-1.25))}` },
  { level: 2, q: "Battery life is N(18, 2.5²) h. Find the 10th percentile.", ans: `${r3(18 - 1.28 * 2.5, 2)} h` },
  { level: 2, q: "Shade and find P(X < 14 or X > 22) for N(18, 2.5²).", fig: svgT(normalSvg({ mu: 18, s: 2.5, shade: [[-Infinity, 14, "red"], [22, Infinity, "red"]] }), 4.2), ans: `${r3(2 * P(-1.6), 4)}`, space: 4 },
  { level: 3, space: 4.5, q: "In a normal distribution, 5% of values are below 38 and 10% are above 61. Find μ and σ.", ans: (() => { const s = (61 - 38) / (1.28 + 1.645), m = 38 + 1.645 * s; return S`$\mu-1.645\sigma=38$, $\mu+1.28\sigma=61$: $\sigma\approx${r3(s, 2)}$, $\mu\approx${r3(m, 2)}$`; })() },
  { level: 3, space: 4.5, q: "A company guarantees its tires for 60 000 km. Tire life is N(72 000, 6000²) km. What percent are replaced under warranty? What guarantee would mean only 1% are replaced?", ans: `${r3(100 * P(-2), 2)}%; ${Math.round(72000 - 2.33 * 6000)} km` },
  { level: 3, space: 4.5, q: "Two machines fill bottles: A is N(500, 3²), B is N(502, 5²). Bottles under 495 mL are rejected. Which machine rejects more?", ans: `A: ${P(zr(495, 500, 3))}; B: ${P(zr(495, 502, 5))}: A rejects more` },
  { level: 3, space: 4.5, q: "X ~ N(μ, σ²) with P(X < 40) = 0.2 and P(X < 70) = 0.9. Find μ and σ.", ans: (() => { const s = 30 / (1.28 + 0.84), m = 40 + 0.84 * s; return S`$\sigma\approx${r3(s, 2)}$, $\mu\approx${r3(m, 2)}$`; })() },
  { level: 3, space: 5, q: "Explain why P(X ≤ 50) = P(X < 50) for a normal variable but P(X ≤ 50) ≠ P(X < 50) for a binomial variable.", ans: "continuous: a single value has probability 0; discrete: P(X = 50) > 0" },
];

export const WS = {
  code: "4.3",
  title: "Normal Probabilities & Percentiles",
  bigideas: S`Standardize with $z=\frac{x-\mu}\sigma$; the z-table gives $P(Z<z)$. Above: $1-P(Z<z)$. Between: difference of two areas. A percentile is found by reading the table backwards and using $x=\mu+z\sigma$; unknown $\mu$ or $\sigma$ come from the same equation.`,
  goals: ["Read z-tables.", "Find normal probabilities.", "Find percentiles.", "Solve for μ or σ."],
  curriculum: "B2.8",
  vocab: [["z-table", "area to the left of z"], ["Percentile", "value with a given percent of the data below it"]],
  hook: "Your score is 82. The class mean is 70 with sd 8. What percent of the class did you beat?",
  concepts: [
    ["1. Areas", S`${svgT(normalSvg({ mu: 0, s: 1, shade: [[-Infinity, 1.2, "blue"]] }), 3.8)}$P(Z<1.2)=${P(1.2)}$.`],
    ["2. Three cases", "Below, above (1 − area), between (difference)."],
    ["3. Inverse", S`Area → z → $x=\mu+z\sigma$.`],
  ],
  tips: ["Sketch and shade first.", "Round z to 2 decimals for the table.", "Check reasonableness.", "Percentile is an x-value.", "Use technology to confirm."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
