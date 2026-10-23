// IB AA SL 14.3 — The Normal Distribution: properties of the normal curve, the empirical 68–95–99.7 rule, probabilities with technology, standardised z-scores, expected numbers
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard } from "./lib.mjs";
import { fig, normalDoc, Phi, normCdf, binomCdf } from "./figs14.mjs";

export const TITLE = "14.3 The Normal Distribution";
export const ID = "385c135f-2faf-4304-a656-062db135738b";
const S = String.raw;
const r4 = (v) => Math.round(v * 10000) / 10000;
const pEgg = 1 - Phi(1);

export const blocks = () => [
  intro({
    icon: "🔔",
    title: "The Normal Distribution",
    overview: S`Heights, masses, measurement errors and test scores pile up around a central value in a symmetric bell shape. The normal distribution \(X\sim N(\mu,\sigma^2)\) models such continuous data: μ is the mean (centre) and σ the standard deviation (spread). Probabilities are areas under the curve, found with technology, and about 68%, 95% and 99.7% of values lie within 1, 2 and 3 standard deviations of the mean.`,
    goals: [
      "describe the properties of a normal distribution;",
      "use the 68–95–99.7 rule for quick estimates;",
      "find normal probabilities with technology;",
      S`standardise values with \(z=\frac{x-\mu}{\sigma}\) and compare them;`,
      "use normal probabilities to find expected numbers.",
    ],
    curriculum: "SL 4.9 (the normal distribution and curve; properties; diagrammatic representation; normal probability calculations), SL 4.12 (standardisation of normal variables, z-values)",
    prior: [
      [S`The mean of a data set is 50 and the standard deviation is 4. What value is 2 standard deviations above the mean?`, S`\(58\).`],
      [S`Probability of an event is 0.2. Expected number in 400 trials?`, S`\(80\).`],
      [S`Is height a discrete or continuous variable?`, "Continuous."],
    ],
    words: [
      ["Normal distribution", S`\(X\sim N(\mu,\sigma^2)\): symmetric, bell-shaped, continuous`, ""],
      ["Mean μ", "centre and line of symmetry; also the median and mode", ""],
      ["Standard deviation σ", "spread; points of inflection at μ ± σ", ""],
      ["Empirical rule", "≈ 68%, 95%, 99.7% within 1, 2, 3 σ", ""],
      ["z-score", S`\(z=\frac{x-\mu}{\sigma}\): number of standard deviations from the mean`, ""],
    ],
  }),

  section("📌 The normal curve", S`
  <p>The curve is symmetric about μ, so \(P(X<\mu)=0.5\). The total area is 1, the curve never touches the axis, and for a continuous variable \(P(X=a)=0\), so \(P(X<a)=P(X\le a)\).</p>
  ${fig(normalDoc(50, 8, [{ a: 42, b: 58, color: "green" }]), "N(50, 8²): about 68% of values lie between 42 and 58")}
  ${fig(normalDoc(50, 8, [{ a: 34, b: 66, color: "blue" }]), "About 95% lie within 2σ: between 34 and 66")}
  ${table(["Interval", "Probability (approx.)"], [["μ ± σ", "0.68"], ["μ ± 2σ", "0.95"], ["μ ± 3σ", "0.997"]])}
  ${keyIdea("Normal probabilities are areas under the curve: sketch, shade, then calculate.")}`),

  section("📌 Probabilities and z-scores", S`
  <p>Technology gives \(P(a<X<b)\) directly (normal cdf with lower bound, upper bound, μ, σ). For \(X\sim N(170,6^2)\), \(P(165<X<180)\approx${r4(normCdf(180, 170, 6) - normCdf(165, 170, 6))}\).</p>
  ${fig(normalDoc(170, 6, [{ a: 165, b: 180, color: "green" }]), "P(165 < X < 180) for N(170, 6²)")}
  <p>Standardising converts any normal variable to \(Z\sim N(0,1)\): \(z=\frac{x-\mu}{\sigma}\). A z-score shows how unusual a value is, so scores from different distributions can be compared.</p>
  ${fig(normalDoc(0, 1, [{ a: -Infinity, b: 1.25, color: "amber" }]), "Standard normal: P(Z < 1.25) ≈ 0.894")}
  ${watchOut([
    "Always sketch: it shows whether the answer should be more or less than 0.5.",
    "σ is the standard deviation; N(μ, σ²) gives the variance.",
    "P(X > a) = 1 − P(X < a).",
    "A z-score is negative below the mean.",
  ])}`),

  section("📌 Explore", S`<p>Move μ and σ, then set the bounds a and b. Watch the area and the standardised bounds.</p>`),

  widget("ibNormal", { init: [50, 8, 42, 58] }),

  examples([
    ["Level 1 · One bound", S`Heights are \(N(170,6^2)\) cm. Find \(P(X<176)\).`,
      [S`176 is one standard deviation above the mean: \(P(Z<1)\).`],
      S`\(\approx${r4(Phi(1))}\)`],
    ["Level 1 · Empirical rule", S`For the same heights, estimate \(P(158<X<182)\).`,
      [S`158 and 182 are \(\mu\pm2\sigma\).`],
      S`\(\approx0.95\)`],
    ["Level 2 · Two bounds", S`Find \(P(165<X<180)\) for \(X\sim N(170,6^2)\).`,
      [S`GDC normal cdf(165, 180, 170, 6).`],
      S`\(\approx${r4(normCdf(180, 170, 6) - normCdf(165, 170, 6))}\)`],
    ["Level 2 · Comparing with z", S`Ana scored 72 on a test with \(N(65,5^2)\); Ben scored 80 on a test with \(N(70,8^2)\). Who did better relative to their group?`,
      [S`\(z_A=\frac{72-65}{5}=1.4\), \(z_B=\frac{80-70}{8}=1.25\).`],
      S`Ana (higher z-score)`],
    ["Level 3 · Expected number", S`Packets have mass \(N(250,4^2)\) g. Out of 500 packets, how many are expected to weigh less than 245 g?`,
      [S`\(P(X<245)=P(Z<-1.25)\approx${r4(Phi(-1.25))}\).`, S`\(500\times${r4(Phi(-1.25))}\approx${Math.round(500 * Phi(-1.25) * 10) / 10}\).`],
      S`about 53 packets`,
      fig(normalDoc(250, 4, [{ a: -Infinity, b: 245, color: "red" }]), "P(X < 245) for N(250, 4²)")],
  ]),

  practice([
    q("Level 1 · symmetry", S`\(X\sim N(20,3^2)\). Find \(P(X>20)\).`, num(0.5, 0.001),
      "Half the area.", ["Symmetry about μ."], S`\(0.5\)`),
    q("Level 1 · rule", S`Approximately what proportion lies within one standard deviation of the mean?`, num(0.68, 0.01),
      "Empirical rule.", ["About 68%."], S`\(0.68\)`),
    q("Level 2 · probability", S`\(X\sim N(100,15^2)\). Find \(P(X<120)\) (4 d.p.).`, num(r4(Phi(4 / 3)), 0.0005),
      "z = 4/3.", ["GDC."], S`\(${r4(Phi(4 / 3))}\)`),
    q("Level 2 · z-score", S`Find the z-score of \(x=37\) for \(N(40,2^2)\).`, choice(["−1.5", "1.5", "−3", "−0.75"], 0),
      "(37 − 40)/2.", ["−1.5."], S`\(-1.5\)`),
    q("Level 2 · upper tail", S`\(X\sim N(55,4^2)\). Find \(P(X>62)\) (4 d.p.).`, num(r4(1 - Phi(1.75)), 0.0005),
      "z = 1.75.", [S`\(1-P(Z<1.75)\).`], S`\(${r4(1 - Phi(1.75))}\)`),
  ]),

  ...hard([
    ["Normal then binomial", S`Eggs have mass \(N(60,3^2)\) g; an egg over 63 g is "large". (a) Find P(large). (b) In a box of 6 eggs, find the probability of at least 2 large eggs.`,
      [S`(a) \(P(X>63)=P(Z>1)\approx${r4(pEgg)}\).`, S`(b) \(Y\sim B(6,${r4(pEgg)})\): \(1-P(Y\le1)\).`],
      S`(a) \(\approx${r4(pEgg)}\); (b) \(\approx${r4(1 - binomCdf(6, pEgg, 1))}\)`,
      fig(normalDoc(60, 3, [{ a: 63, b: Infinity, color: "green" }]), "Large eggs: P(X > 63)")],
    ["Using symmetry", S`\(X\sim N(40,\sigma^2)\) and \(P(X<34)=0.2\). Find \(P(X>46)\) and \(P(34<X<46)\).`,
      [S`34 and 46 are equally far from 40, so \(P(X>46)=0.2\).`, S`\(P(34<X<46)=1-0.2-0.2\).`],
      S`\(0.2\) and \(0.6\)`,
      fig(normalDoc(40, 7, [{ a: -Infinity, b: 34, color: "red" }, { a: 46, b: Infinity, color: "red" }, { a: 34, b: 46, color: "green" }]), "Equal tails either side of μ = 40")],
  ], [
    q("Level 3 · two tails", S`\(X\sim N(500,20^2)\). Find \(P(|X-500|>30)\) (4 d.p.).`, num(r4(2 * (1 - Phi(1.5))), 0.0005),
      "Both tails beyond z = ±1.5.", [S`\(2(1-P(Z<1.5))\).`], S`\(${r4(2 * (1 - Phi(1.5)))}\)`),
    q("Level 3 · conditional", S`\(X\sim N(170,6^2)\). Find \(P(X>180\mid X>170)\) (4 d.p.).`, num(r4((1 - Phi(10 / 6)) / 0.5), 0.0005),
      "P(X > 180)/P(X > 170).", [S`\(\frac{${r4(1 - Phi(10 / 6))}}{0.5}\).`], S`\(${r4((1 - Phi(10 / 6)) / 0.5)}\)`),
    q("Level 3 · independent items", S`Items have length \(N(50,2^2)\). Find the probability that three randomly chosen items all exceed 52 (5 d.p.).`, num(Math.round((1 - Phi(1)) ** 3 * 100000) / 100000, 0.00005),
      "Cube the single probability.", [S`\(${r4(1 - Phi(1))}^3\).`], S`\(${Math.round((1 - Phi(1)) ** 3 * 100000) / 100000}\)`),
  ]),

  wrapUp({
    qas: [
      ["What do μ and σ control?", "μ is the centre; σ is the spread (the inflection points are at μ ± σ)."],
      ["What is the empirical rule?", "About 68%, 95% and 99.7% within 1, 2 and 3 standard deviations."],
      ["How do I find P(a < X < b)?", "Normal cdf on a GDC with the bounds, μ and σ."],
      ["What does a z-score tell me?", "How many standard deviations a value is from the mean."],
      ["Is P(X ≤ a) different from P(X < a)?", "No — for a continuous variable P(X = a) = 0."],
    ],
    summary: [
      "Symmetric bell, total area 1.",
      "68–95–99.7.",
      "Sketch, shade, calculate.",
      "z = (x − μ)/σ.",
    ],
    next: "14.4 works backwards: finding values and parameters from probabilities.",
  }),
];
