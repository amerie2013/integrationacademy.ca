// MDM4U Worksheet 5.8 — The z-Score & Comparing Data (teacher edition)
import { svgT, normalSvg, dotPlotSvg, tableSvg } from "./figT.mjs";
import { tphi, mean, sdP } from "../../mdm4u/count.mjs";

const S = String.raw;
const r2 = (v) => Math.round(v * 100) / 100;
const r4 = (v) => Math.round(v * 1e4) / 1e4;
const st = [10, 14, 15, 17, 24];

const EXAMPLES = [
  { title: "Computing z", q: "Lengths of trout are μ = 38 cm, σ = 5 cm. Find the z-scores of 45.5 cm and 30 cm.", steps: [S`$\frac{45.5-38}{5}=1.5$; $\frac{30-38}{5}=-1.6$.`], ans: "1.5 and −1.6" },
  { title: "Sample z", q: "A sample of laptops has mean battery life 9.4 h and s = 1.2 h. Find z for a laptop lasting 7.6 h.", steps: [S`$\frac{7.6-9.4}{1.2}=-1.5$.`], ans: "−1.5" },
  { title: "Comparing", q: "Which is relatively better: 74 in French (μ = 66, σ = 5) or 79 in Chemistry (μ = 70, σ = 6)?", fig: svgT(tableSvg([["course", "mark", "μ", "σ", "z"], ["French", "74", "66", "5", "1.6"], ["Chemistry", "79", "70", "6", "1.5"]]), 6), steps: [S`French $\frac{8}{5}=1.6$; Chemistry $\frac{9}{6}=1.5$.`], ans: "French" },
  { title: "x from z", q: "A delivery time with z = −1.25 when μ = 42 min and σ = 8 min is how long?", steps: [S`$42+(-1.25)(8)=32$.`], ans: "32 min" },
  { title: "Standardizing", q: `Standardize the population ${st.join(", ")}.`, steps: [S`$\mu=${mean(st)}$, $\sigma\approx${r2(sdP(st))}$.`, `z: ${st.map((x) => r2((x - mean(st)) / sdP(st))).join(", ")}.`], ans: "mean 0 and standard deviation 1 after standardizing", fig: svgT(dotPlotSvg(st, { min: 8, max: 26, step: 2, marks: [[mean(st), "μ = 16", "red"]] }), 6) },
  { title: "Unusual values", q: "Daily rainfall in a city has μ = 4 mm and σ = 2.5 mm. Is a day with 11 mm unusual?", steps: [S`$z=\frac{7}{2.5}=2.8>2$.`], ans: "yes, unusual (z = 2.8)" },
  { title: "Percentile (normal)", q: "IQ-style scores are roughly normal with μ = 100, σ = 15. Estimate the percentile of a score of 118.", fig: svgT(normalSvg({ mu: 100, s: 15, shade: [[-Infinity, 118, "green"]], marks: [[118, "118"]] }), 6.5), steps: [S`$z=1.2$; $P(Z<1.2)=${tphi(1.2)}$.`], ans: "about the 88th percentile" },
  { title: "Finding μ and σ", q: "On an exam, 85 has z = 1.5 and 61 has z = −1.5. Find μ and σ.", steps: [S`$85-61=3\sigma\Rightarrow\sigma=8$; $\mu=85-12=73$.`], ans: "μ = 73, σ = 8" },
  { title: "Smaller is better", q: "Golf: Sam scored 68 (μ = 72, σ = 2.5) on one course and 74 (μ = 79, σ = 4) on another. On which course did he play relatively better?", steps: [S`$z_1=-1.6$, $z_2=-1.25$; lower scores are better.`], ans: "the first course (z = −1.6)" },
];

const PROBLEMS = [
  { level: 1, q: "Find z for x = 63, μ = 55, σ = 4.", ans: "2" },
  { level: 1, q: "Find x for z = −0.6, μ = 120, σ = 15.", ans: "111" },
  { level: 1, q: "Is a value with z = −2.3 unusual? Explain.", ans: "yes: |z| > 2" },
  { level: 2, q: "Compare 88 on a test with μ = 80, σ = 6 to 76 on a test with μ = 68, σ = 5.", ans: `z ≈ ${r2(8 / 6)} and 1.6: the second is relatively better` },
  { level: 2, q: "The heights of a team have mean 183 cm and σ = 6 cm. What heights are more than 2 standard deviations from the mean?", ans: "below 171 cm or above 195 cm" },
  { level: 2, q: "Estimate the percent of values below z = 0.75 in roughly normal data (z-table).", ans: `${r2(100 * tphi(0.75))} percent` },
  { level: 2, q: "A standardized score is computed as 500 + 100z. Find the score for a raw mark of 58 when μ = 50 and σ = 10.", ans: "580" },
  { level: 2, q: "Explain why z-scores have no units.", ans: "both x − μ and σ have the same units, which cancel" },
  { level: 3, space: 4.5, q: "A value of 41 has z = −0.5 and a value of 68 has z = 2.5. Find μ and σ.", ans: "σ = 9, μ = 45.5" },
  { level: 3, space: 4.5, q: "Marks are roughly normal with μ = 64, σ = 9. Estimate the percent of students whose marks have |z| < 1.5 and the marks that bound this group.", ans: `${r2(100 * (tphi(1.5) - tphi(-1.5)))} percent; 50.5 to 77.5` },
  { level: 3, space: 4.5, q: "In a decathlon, an athlete runs 1500 m in 262 s (μ = 275, σ = 10) and throws the javelin 61 m (μ = 55, σ = 5). In which event was the performance relatively better?", ans: "run: z = −1.3 (1.3 SD better); javelin z = 1.2; the run" },
  { level: 3, space: 4.5, q: "A data set has mean 30 and σ = 6. Each value is replaced by y = 2x − 5. Show that every value keeps its z-score.", ans: "new mean 55, σ = 12; (2x − 5 − 55)/12 = (x − 30)/6" },
  { level: 3, space: 4.5, q: "Two classes wrote different tests. Class A: μ = 70, σ = 4; Class B: μ = 70, σ = 12. A student scored 80 in each. In which class is 80 more impressive? Estimate the percentile in each (normal model).", ans: `A: z = 2.5, about ${r2(100 * tphi(2.5))}; B: z ≈ 0.83, about ${r2(100 * tphi(0.83))}; more impressive in A` },
];

export const WS = {
  code: "5.8",
  title: "The z-Score & Comparing Data",
  bigideas: S`A z-score $z=\frac{x-\mu}{\sigma}$ counts standard deviations from the mean: positive above, negative below. z-scores compare values from different distributions, flag unusual values ($|z|>2$), recover values ($x=\mu+z\sigma$), and give percentiles for roughly normal data through a z-table.`,
  goals: ["Compute and interpret z.", "Compare values.", "Find x from z.", "Estimate percentiles."],
  curriculum: "D1.2, D1.4, D1.5",
  vocab: [["z-score", "standard deviations from the mean"], ["Standardize", "convert every value to z"], ["Unusual", "absolute z greater than 2"], ["z-table", "area to the left of z"]],
  hook: "You got 78 in math and 85 in English. Your parent says English went better. Is that necessarily true?",
  concepts: [
    ["1. Formula", S`$z=\frac{x-\mu}{\sigma}$ and $x=\mu+z\sigma$.`],
    ["2. Compare", "Larger z means relatively higher; reverse when smaller is better."],
    ["3. Percentiles", S`${svgT(normalSvg({ mu: 0, s: 1, shade: [[-Infinity, 1, "blue"]], ticks: [-3, -2, -1, 0, 1, 2, 3] }), 5)}$P(Z<1)=${r4(tphi(1))}$.`],
  ],
  tips: ["Divide by σ, not σ².", "Keep the sign.", "Round z to 2 decimals for the table.", "State which is better and why.", "Percentiles need roughly normal data."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
