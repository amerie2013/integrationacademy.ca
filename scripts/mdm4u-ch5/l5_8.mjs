// MDM4U 5.8 — The z-Score & Comparing Data: z = (x − μ)/σ (or (x − x̄)/s), interpreting z-scores, comparing values
// from different distributions, recovering x = μ + zσ, standardizing a data set (mean 0, standard deviation 1),
// unusual values, and percentiles of approximately normal data
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, fig, normalSvg, dotPlotSvg, tableSvg } from "./lib.mjs";
import { tphi, sdP } from "../mdm4u/count.mjs";

export const TITLE = "5.8 The z-Score & Comparing Data";
export const ID = "c4888a01-6358-416b-bd11-85c34b0fb54b";
const S = String.raw;
const r3 = (v) => Math.round(v * 1000) / 1000;
const st = [4, 6, 8, 10, 12], sd = sdP(st);

export const blocks = () => [
  intro({
    icon: "📐",
    title: "The z-Score & Comparing Data",
    overview: S`Is 81 in biology better than 86 in history? Raw marks cannot say, because the two tests have different means and spreads. The <strong>z-score</strong> \[z=\frac{x-\mu}{\sigma}\] counts how many standard deviations a value lies above (positive) or below (negative) its mean. Converting to z-scores puts different data on the same scale, so values can be compared fairly, unusual values can be spotted, and — for roughly normal data — percentiles can be estimated.`,
    goals: [
      "calculate and interpret z-scores;",
      "compare values from different distributions;",
      "find a value from its z-score: x = μ + zσ;",
      "standardize a data set and describe the result;",
      "identify unusual values and estimate percentiles for approximately normal data.",
    ],
    curriculum: "D1.2 (z-scores); D1.4–D1.5 (comparing data, interpreting statistics); connects to B2 (the normal distribution)",
    prior: [
      ["(79 − 70) ÷ 6 = ?", "1.5."],
      ["68 + (−0.8)(10) = ?", "60."],
      ["P(Z < 1.5) from a z-table?", "0.9332."],
    ],
    words: [
      ["z-score", "(x − μ)/σ: standard deviations from the mean", "z = 2: two standard deviations above"],
      ["Standardizing", "converting every value to its z-score", "the new set has mean 0 and σ = 1"],
      ["Unusual value", "a value with |z| > 2 (rare in mound-shaped data)", "z = −2.4"],
      ["Percentile (normal model)", "P(Z < z) × 100", "z = 1.5 → about the 93rd percentile"],
    ],
  }),

  section("📌 Meaning of z", S`
  ${fig(normalSvg({ mu: 70, s: 6, zAxis: true, marks: [[79, "x = 79, z = 1.5"]] }), "a value 9 above a mean of 70, with σ = 6, is 1.5 standard deviations above")}
  ${table(["z", "Meaning"], [["0", "exactly at the mean"], ["positive", "above the mean"], ["negative", "below the mean"], ["|z| > 2", "unusual: in mound-shaped data only about 5% of values"], ["|z| > 3", "very unusual: about 0.3%"]])}
  ${keyIdea(S`For a sample use \(z=\frac{x-\bar x}{s}\). The z-score has no units, so it compares values measured in different units or on different scales.`)}`),

  section("📌 Explore", S`<p>Move the two marks. The tests have different means and standard deviations; the larger z-score is the relatively better result.</p>`),

  widget("zCompare", { init: [78, 85] }),

  section("📌 Watch out", watchOut([
    "Divide by the standard deviation, not the variance.",
    "Keep the sign: a negative z means below the mean.",
    "When smaller is better (a race time), a more negative z is the better result.",
    "Percentiles from a z-table assume the data are approximately normal.",
  ])),

  examples([
    ["Calculating z", "Adult heights in a town have mean 165 cm and standard deviation 7 cm. Find the z-scores of 179 cm and 158 cm and interpret them.",
      [S`\(z=\frac{179-165}{7}=2\): two standard deviations above the mean.`, S`\(z=\frac{158-165}{7}=-1\): one standard deviation below.`],
      "2 and −1"],
    ["Comparing", "Ayesha scored 81 in biology (mean 72, σ = 6) and 86 in history (mean 79, σ = 5). In which subject did she do better relative to her class?",
      [S`Biology: \(z=\frac{81-72}{6}=1.5\).`, S`History: \(z=\frac{86-79}{5}=1.4\).`, S`\(1.5>1.4\): relatively better in biology, though the raw mark was lower.`],
      "biology",
      fig(tableSvg([["subject", "mark", "mean", "σ", "z"], ["biology", "81", "72", "6", "1.5"], ["history", "86", "79", "5", "1.4"]]))],
    ["From z back to x", "On a test with mean 68 and standard deviation 10, what mark has a z-score of −0.8? What mark has z = 1.75?",
      [S`\(x=\mu+z\sigma=68+(-0.8)(10)=60\).`, S`\(68+1.75(10)=85.5\).`],
      "60 and 85.5"],
    ["Standardizing a data set", `Standardize the population ${st.join(", ")}.`,
      [S`\(\mu=8\); \(\sigma=\sqrt{\frac{16+4+0+4+16}{5}}=\sqrt8\approx${r3(sd)}\).`, S`z-scores: ${st.map((x) => r3((x - 8) / sd)).join(", ")}.`, S`The standardized values have mean 0 and standard deviation 1.`],
      st.map((x) => r3((x - 8) / sd)).join(", "),
      fig(dotPlotSvg(st.map((x) => Math.round(((x - 8) / sd) * 100) / 100), { min: -2, max: 2, step: 0.5, marks: [[0, "mean 0", "red"]] }), "the same data on the z scale")],
    ["Percentile in a normal model", "Marks on a large exam are approximately normal with mean 70 and standard deviation 6. Estimate the percentile of a mark of 79.",
      [S`\(z=\frac{79-70}{6}=1.5\).`, S`\(P(Z<1.5)=${tphi(1.5)}\).`],
      "about the 93rd percentile",
      fig(normalSvg({ mu: 70, s: 6, shade: [[-Infinity, 79, "green"]], marks: [[79, "79"]] }))],
  ]),

  practice([
    q("z", "Find z for x = 54 when μ = 60 and σ = 4.", num(-1.5), "(x − μ)/σ.", [S`\(\frac{-6}{4}=-1.5\).`], "-1.5"),
    q("x", "On a scale with μ = 250 and σ = 20, what value has z = 2.3?", num(296), "μ + zσ.", [S`\(250+46=296\).`], "296"),
    q("compare", "Which is relatively higher: 72 on a test with μ = 64, σ = 4, or 88 on a test with μ = 76, σ = 8?", choice(["72 (z = 2)", "88 (z = 1.5)", "they are equal", "cannot tell"], 0), "Compare z-scores.", [S`\(2>1.5\).`], "72 (z = 2)"),
    q("unusual", "Which z-score is an unusual value?", choice(["−2.4", "1.3", "−0.9", "1.9"], 0), "|z| > 2.", ["Only −2.4 is beyond 2."], "−2.4"),
    q("pct", "Data are roughly normal. Estimate the proportion of values below z = −0.5 (4 decimals, from a z-table).", num(tphi(-0.5), 0.0005), "P(Z < −0.5).", [S`\(0.3085\).`], `${tphi(-0.5)}`),
  ]),

  ...hard([
    ["Finding μ and σ", "On a test, a mark of 82 has z = 1.2 and a mark of 58 has z = −0.8. Find the mean and standard deviation.",
      [S`\(82=\mu+1.2\sigma\) and \(58=\mu-0.8\sigma\).`, S`Subtract: \(24=2\sigma\Rightarrow\sigma=12\).`, S`\(\mu=82-1.2(12)=67.6\).`],
      "μ = 67.6, σ = 12"],
    ["When smaller is better", "In a track meet, Liam ran 100 m in 10.9 s (event mean 11.2 s, σ = 0.2 s) and high-jumped 2.05 m (event mean 1.95 m, σ = 0.08 m). In which event was he relatively better?",
      [S`Sprint: \(z=\frac{10.9-11.2}{0.2}=-1.5\): 1.5 standard deviations <em>faster</em> than average.`, S`Jump: \(z=\frac{2.05-1.95}{0.08}=1.25\).`, S`Compare distances in the “good” direction: 1.5 vs 1.25. The sprint was relatively better.`],
      "the sprint",
      fig(normalSvg({ mu: 11.2, s: 0.2, shade: [[-Infinity, 10.9, "green"]], marks: [[10.9, "10.9 s"]] }), "faster than about 93% of sprinters")],
  ], [
    q("hard", "A mark of 95 has z = 2.5 and a mark of 71 has z = −0.5 on the same test. Find σ.", num(8), "Subtract the equations.", [S`\(24=3\sigma\).`], "8"),
    q("hard", "In a data set, x = 56 has z = 1.5. Every value is increased by 10 and then divided by 2. What is the new z-score of the transformed value?", num(1.5), "Both the distance and σ change by the same factor.", [S`z is unchanged.`], "1.5"),
    q("hard", "For approximately normal data, what proportion of values has |z| > 2 (table values, 4 decimals)?", num(Math.round(2 * (1 - tphi(2)) * 1e4) / 1e4, 0.001), "2(1 − P(Z < 2)).", [S`\(2(1-0.9772)=0.0456\).`], "0.0456"),
  ]),

  wrapUp({
    qas: [
      ["What does a z-score tell me?", "How many standard deviations a value is above or below the mean."],
      ["How do I compare marks on different tests?", "Compare their z-scores."],
      ["How do I get x from z?", "x = μ + zσ."],
      ["What is special about standardized data?", "Mean 0 and standard deviation 1."],
      ["When is a value unusual?", "When |z| > 2."],
    ],
    summary: [
      "z = (x − μ)/σ; for samples z = (x − x̄)/s.",
      "x = μ + zσ.",
      "Larger z = relatively higher (reverse when smaller is better).",
      "Normal data: percentile ≈ P(Z < z).",
    ],
    next: "5.9 reviews the chapter: collecting data, sampling and bias, and summarizing one-variable data.",
  }),
];
