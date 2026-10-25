// MDM4U 4.3 — Normal Probabilities & Percentiles: P(X < x), P(X > x) and P(a < X < b) by standardizing and using a
// z-table or technology, percentiles and inverse problems (finding x, μ or σ), and real-world applications
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, fig, normalSvg, tableSvg } from "./lib.mjs";
import { r3, tphi, invPhi, phi } from "../mdm4u/count.mjs";

export const TITLE = "4.3 Normal Probabilities & Percentiles";
export const ID = "b05b3012-f46a-4dc8-bb28-9514237c7158";
const S = String.raw;
const P = (z) => tphi(z);

export const blocks = () => [
  intro({
    icon: "📐",
    title: "Normal Probabilities & Percentiles",
    overview: S`To find a normal probability, <strong>standardize</strong> with \(z=\frac{x-\mu}\sigma\), then read the area to the left of \(z\) from a <strong>z-table</strong> (or use technology such as normalcdf or NORM.DIST). \[P(X<x)=P(Z<z),\quad P(X>x)=1-P(Z<z),\quad P(a<X<b)=P(Z<z_b)-P(Z<z_a).\] Working backwards, a <strong>percentile</strong> is the value below which a given percentage of the data falls: find \(z\) from the table, then \(x=\mu+z\sigma\).`,
    goals: [
      "standardize normal values and read a z-table;",
      "find P(X < x), P(X > x) and P(a < X < b);",
      "use technology for normal probabilities;",
      "find percentiles and values from given probabilities;",
      "solve for μ or σ from given information.",
    ],
    curriculum: "B2.8 (solve probability problems involving normal distributions using a variety of tools and strategies, including z-tables and technology, from real-world applications)",
    prior: [
      ["μ = 60, σ = 5: z-score of 68?", "1.6."],
      ["The area to the left of z = 0 is …", "0.5."],
      ["If 0.8 of the area is to the left, what is to the right?", "0.2."],
    ],
    words: [
      ["z-table", "gives P(Z < z), the area to the left of z", "P(Z < 1.00) = 0.8413"],
      ["Percentile", "value with a given % below it", "90th percentile: 90% below"],
      ["Standardize", "convert x to z", "z = (x − μ)/σ"],
      ["Inverse normal", "from an area back to z (or x)", "invNorm(0.9) ≈ 1.28"],
    ],
  }),

  section("📌 Three kinds of probability", S`
  <p>Marks on an exam are normal with \(\mu=68\) and \(\sigma=10\).</p>
  ${table(["Question", "z", "Calculation", "Probability"], [["P(X < 80)", "1.20", "\\(P(Z<1.2)\\)", `${P(1.2)}`], ["P(X > 55)", "−1.30", "\\(1-P(Z<-1.3)\\)", `${r3(1 - P(-1.3), 4)}`], ["P(60 < X < 75)", "−0.80, 0.70", "\\(P(Z<0.7)-P(Z<-0.8)\\)", `${r3(P(0.7) - P(-0.8), 4)}`]])}
  ${fig(normalSvg({ mu: 68, s: 10, shade: [[60, 75, "blue"]], zAxis: true, marks: [[60, "60"], [75, "75"]] }), `P(60 < X < 75) ≈ ${r3(P(0.7) - P(-0.8), 4)}`)}
  ${fig(tableSvg([["z", ".00", ".02", ".04", ".06", ".08"], ...[-1.3, -0.8, 0.7, 1.2].map((z) => [z.toFixed(1), ...[0, 0.02, 0.04, 0.06, 0.08].map((d) => String(tphi(z + (z < 0 ? -d : d)).toFixed(4)))])], { rowHead: true }), "part of a z-table: the row gives z to one decimal, the column the second decimal")}
  ${keyIdea(S`Always sketch the curve and shade the region first; it tells you whether to subtract from 1 or subtract two areas.`)}`),

  section("📌 Percentiles and inverse problems", S`
  <p>What mark is needed to be in the top 10%? The cut-off is the 90th percentile: \(P(Z<z)=0.90\Rightarrow z\approx1.28\), so \(x=68+1.28(10)=80.8\).</p>
  ${fig(normalSvg({ mu: 68, s: 10, shade: [[80.8, Infinity, "amber"]], marks: [[80.8, "top 10%"]] }), "top 10%: above the 90th percentile")}
  ${keyIdea(S`Inverse problems: area → z (table read backwards, or invNorm) → \(x=\mu+z\sigma\). If \(\mu\) or \(\sigma\) is unknown, write \(z=\frac{x-\mu}\sigma\) and solve.`)}`),

  section("📌 Explore", S`<p>Choose below, above, between or percentile. Drag the endpoints and compare the shaded area with your table answer.</p>`),

  widget("normalArea", { init: [68, 10] }),

  section("📌 Watch out", watchOut([
    "The table gives the area to the LEFT. For “more than”, subtract from 1.",
    "Round z to two decimals when using a table; technology answers may differ slightly in the 4th decimal.",
    "A percentile is a value of x, not a probability.",
    "For continuous data, P(X ≤ x) = P(X < x).",
  ])),

  examples([
    ["Below", "The mass of a bag of chips is normal with μ = 235 g and σ = 4 g. Find P(a bag weighs less than 230 g).",
      [S`\(z=\frac{230-235}{4}=-1.25\).`, S`\(P(Z<-1.25)=${P(-1.25)}\).`],
      `${P(-1.25)}`,
      fig(normalSvg({ mu: 235, s: 4, shade: [[-Infinity, 230, "red"]] }))],
    ["Between", "Maple seedling heights are normal with μ = 32 cm and σ = 10.2 cm. Find P(a seedling is between 24.0 and 38.0 cm).",
      [S`\(z_1=\frac{24-32}{10.2}\approx-0.78\), \(z_2=\frac{38-32}{10.2}\approx0.59\).`, S`\(P(Z<0.59)-P(Z<-0.78)=${P(0.59)}-${P(-0.78)}\).`],
      `${r3(P(0.59) - P(-0.78), 4)}`],
    ["Above, as a count", "IQ scores are N(100, 15²). In a school of 1200 students, how many are expected to score above 125?",
      [S`\(z=\frac{25}{15}\approx1.67\); \(P(Z>1.67)=1-${P(1.67)}=${r3(1 - P(1.67), 4)}\).`, S`\(1200\times${r3(1 - P(1.67), 4)}\approx${Math.round(1200 * (1 - P(1.67)))}\).`],
      `about ${Math.round(1200 * (1 - P(1.67)))} students`],
    ["Percentile", "Commute times are N(28, 6²) minutes. Find the 25th percentile.",
      [S`\(P(Z<z)=0.25\Rightarrow z\approx-0.67\).`, S`\(x=28-0.67(6)\).`],
      `≈ ${r3(28 - 0.67 * 6, 2)} min`],
    ["Finding σ", "A machine fills juice boxes with mean 250 mL. 5% of boxes contain less than 240 mL. Find σ.",
      [S`\(P(Z<z)=0.05\Rightarrow z\approx-1.645\).`, S`\(-1.645=\frac{240-250}{\sigma}\Rightarrow\sigma=\frac{10}{1.645}\).`],
      `≈ ${r3(10 / 1.645, 2)} mL`],
  ]),

  practice([
    q("table", "Find P(Z < 1.35). (4 decimals)", num(P(1.35), 0.0005), "Row 1.3, column .05.", [S`\(${P(1.35)}\).`], `${P(1.35)}`),
    q("above", "Find P(Z > −0.42). (4 decimals)", num(r3(1 - P(-0.42), 4), 0.0005), "1 − P(Z < −0.42).", [S`\(1-${P(-0.42)}\).`], `${r3(1 - P(-0.42), 4)}`),
    q("normal", "X ~ N(50, 8²). Find P(X < 62). (4 decimals)", num(P(1.5), 0.0005), "z = 1.5.", [S`\(P(Z<1.5)\).`], `${P(1.5)}`),
    q("between", "X ~ N(50, 8²). Find P(46 < X < 58). (4 decimals)", num(r3(P(1) - P(-0.5), 4), 0.0005), "z = −0.5 and 1.", [S`\(${P(1)}-${P(-0.5)}\).`], `${r3(P(1) - P(-0.5), 4)}`),
    q("percentile", "Which z-score is the 50th percentile of the standard normal?", num(0), "Symmetry.", [S`Half the area is left of 0.`], "0"),
  ]),

  ...hard([
    ["Finding μ and σ", "In a normal distribution, 10% of values are below 52 and 20% are above 79. Find μ and σ.",
      [S`\(z_{0.10}\approx-1.28\), \(z_{0.80}\approx0.84\).`, S`\(\mu-1.28\sigma=52\), \(\mu+0.84\sigma=79\) ⇒ \(2.12\sigma=27\).`, S`\(\sigma\approx${r3(27 / 2.12, 2)}\), \(\mu\approx${r3(52 + 1.28 * (27 / 2.12), 2)}\).`],
      `σ ≈ ${r3(27 / 2.12, 2)}, μ ≈ ${r3(52 + 1.28 * (27 / 2.12), 2)}`,
      fig(normalSvg({ mu: 52 + 1.28 * (27 / 2.12), s: 27 / 2.12, shade: [[-Infinity, 52, "red"], [79, Infinity, "amber"]], marks: [[52, "10%", "red"], [79, "top 20%", "amber"]] }))],
    ["Quality control", "Bolts must be 20.00 ± 0.15 mm. Lengths are N(20.03, 0.07²). What percent are rejected? What should the mean be to minimise rejects?",
      [S`\(z_1=\frac{19.85-20.03}{0.07}\approx-2.57\), \(z_2=\frac{20.15-20.03}{0.07}\approx1.71\).`, S`Accepted \(=${P(1.71)}-${P(-2.57)}=${r3(P(1.71) - P(-2.57), 4)}\); rejected \(\approx${r3(100 * (1 - P(1.71) + P(-2.57)), 2)}\%\).`, S`Centre the process at 20.00 mm: then \(z=\pm2.14\) and rejects fall to about \(${r3(100 * 2 * (1 - P(2.14)), 2)}\%\).`],
      `≈ ${r3(100 * (1 - P(1.71) + P(-2.57)), 2)}%; mean 20.00 mm`],
  ], [
    q("hard", "X ~ N(500, 100²). Find the 95th percentile (nearest whole number).", num(Math.round(500 + 1.645 * 100), 1), "z ≈ 1.645.", [S`\(500+164.5\).`], `${Math.round(500 + 164.5)}`),
    q("hard", "The top 5% of scores on a test with σ = 12 are above 90. Find μ (1 decimal).", num(r3(90 - 1.645 * 12, 1), 0.2), "μ = 90 − 1.645(12).", [S`\(90-19.74\).`], `${r3(90 - 1.645 * 12, 1)}`),
    q("hard", "X ~ N(80, 5²). Find P(|X − 80| > 7). (4 decimals)", num(r3(2 * (1 - P(1.4)), 4), 0.0005), "Both tails beyond z = ±1.4.", [S`\(2(1-${P(1.4)})\).`], `${r3(2 * (1 - P(1.4)), 4)}`),
  ]),

  wrapUp({
    qas: [
      ["How do I find P(X > x)?", "Standardize, then 1 − P(Z < z)."],
      ["How do I find P(a < X < b)?", "P(Z < z_b) − P(Z < z_a)."],
      ["What is a percentile?", "The value with that percentage of the distribution below it; find z, then x = μ + zσ."],
      ["Why might my answer differ slightly from technology?", "Tables round z to two decimals; technology uses the exact z."],
      ["How do I find an unknown σ?", "Use the z-score of a known percentile: z = (x − μ)/σ and solve."],
    ],
    summary: [
      "Standardize: z = (x − μ)/σ.",
      "Table gives area to the left.",
      "Above: 1 − area; between: difference of areas.",
      "Percentile: z from area, x = μ + zσ.",
    ],
    next: "4.4 uses the normal curve to approximate binomial probabilities.",
  }),
];
