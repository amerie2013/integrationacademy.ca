// MDM4U 4.2 — The Normal Distribution & z-Scores: properties of the normal curve, the effect of μ and σ,
// the 68–95–99.7 rule, z-scores as standard deviations from the mean, comparing values with z-scores
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, fig, normalSvg } from "./lib.mjs";
import { r3 } from "../mdm4u/count.mjs";

export const TITLE = "4.2 The Normal Distribution & z-Scores";
export const ID = "a110b633-e4a4-435b-8e86-3c0a685a80cb";
const S = String.raw;

export const blocks = () => [
  intro({
    icon: "🔔",
    title: "The Normal Distribution & z-Scores",
    overview: S`Many measured quantities — heights, test scores, masses of products, measurement errors — follow a <strong>normal distribution</strong>: a symmetric, bell-shaped curve centred at the mean \(\mu\), with spread set by the standard deviation \(\sigma\). We write \(X\sim N(\mu,\sigma^2)\). About 68% of values lie within \(1\sigma\) of the mean, 95% within \(2\sigma\) and 99.7% within \(3\sigma\). A <strong>z-score</strong> measures how many standard deviations a value is from the mean: \[z=\frac{x-\mu}{\sigma}.\]`,
    goals: [
      "describe the properties of a normal distribution;",
      "explain how the mean and standard deviation change the curve;",
      "use the 68–95–99.7 rule to estimate percentages;",
      "calculate and interpret z-scores;",
      "compare values from different normal distributions with z-scores.",
    ],
    curriculum: "B2.6 (recognize standard deviation as a measure of spread; describe the key features of the normal distribution, e.g. symmetry, mean = median = mode, the 68–95–99.7 rule); B2.8 (recognize a z-score as the number of standard deviations from the mean)",
    prior: [
      ["μ = 50, σ = 4. What is μ + 2σ?", "58."],
      ["Compute (73 − 65)/5.", "1.6."],
      ["What is the total area under a probability curve?", "1."],
    ],
    words: [
      ["Normal distribution N(μ, σ²)", "symmetric bell curve with mean μ and sd σ", "IQ ~ N(100, 15²)"],
      ["68–95–99.7 rule", "% within 1, 2, 3 standard deviations", "95% within μ ± 2σ"],
      ["z-score", "\\(z=\\frac{x-\\mu}{\\sigma}\\)", "z = 2: two sd above the mean"],
      ["Standard normal Z", "the normal distribution with μ = 0, σ = 1", "z-table"],
    ],
  }),

  section("📌 The shape of a normal curve", S`
  ${table(["Property", "Meaning"], [["symmetric about μ", "mean = median = mode"], ["bell-shaped", "most values near the centre, few in the tails"], ["total area 1", "it is a probability model"], ["inflection points at μ ± σ", "where the curve changes from bending down to bending up"], ["never touches the axis", "extreme values are possible but very unlikely"]])}
  ${fig(normalSvg({ mu: 100, s: 15, shade: [[55, 70, "amber"], [130, 145, "amber"], [70, 85, "blue"], [115, 130, "blue"], [85, 115, "green"]], labels: [[100, "68%"]], zAxis: true }), "68% within 1σ (green); 95% within 2σ (green + blue); 99.7% within 3σ")}
  ${keyIdea(S`Changing \(\mu\) slides the curve left or right; a larger \(\sigma\) makes it wider and lower (the area stays 1).`)}`),

  section("📌 z-scores", S`
  <p>A test has \(\mu=65\) and \(\sigma=8\). A mark of 81 has \(z=\frac{81-65}{8}=2\): two standard deviations above the mean. A mark of 57 has \(z=-1\).</p>
  ${table(["z", "Meaning", "Approximate share of values below"], [["−2", "2σ below the mean", "2.5%"], ["−1", "1σ below", "16%"], ["0", "at the mean", "50%"], ["1", "1σ above", "84%"], ["2", "2σ above", "97.5%"]])}
  ${keyIdea(S`z-scores put different distributions on the same scale, so you can compare a mark in Chemistry with a mark in History.`)}`),

  section("📌 Explore", S`<p>Move μ and σ and watch the curve change. Shade within 1σ, 2σ or 3σ, and drag x to see its z-score.</p>`),

  widget("normalCurve", { init: [100, 15] }),

  section("📌 Watch out", watchOut([
    "z is negative for values below the mean.",
    "Divide by the standard deviation, not the variance.",
    "The 68–95–99.7 rule is an approximation for normal data only.",
    "A larger z means more unusual, whatever the units.",
  ])),

  examples([
    ["Reading the rule", "Battery life is normal with μ = 40 h and σ = 3 h. What percent of batteries last between 34 and 46 hours?",
      [S`34 and 46 are \(\mu\pm2\sigma\).`, S`About 95%.`],
      "about 95%",
      fig(normalSvg({ mu: 40, s: 3, shade: [[34, 46, "green"]], labels: [[40, "95%"]] }))],
    ["One tail", "With the same batteries, what percent last more than 43 hours?",
      [S`43 is \(\mu+\sigma\). Above \(\mu+\sigma\): \(\frac{100\%-68\%}{2}=16\%\).`],
      "about 16%"],
    ["z-score", "Heights of Grade 12 students: μ = 172 cm, σ = 9 cm. Find the z-scores of 185 cm and 160 cm.",
      [S`\(\frac{185-172}9\approx${r3(13 / 9, 2)}\).`, S`\(\frac{160-172}9\approx${r3(-12 / 9, 2)}\).`],
      `${r3(13 / 9, 2)} and ${r3(-12 / 9, 2)}`],
    ["Comparing marks", "Ana scored 78 in Math (μ = 70, σ = 5) and 84 in English (μ = 75, σ = 8). In which subject did she do better relative to her class?",
      [S`Math: \(z=\frac{8}{5}=1.6\). English: \(z=\frac98=1.125\).`, S`Math has the larger z-score.`],
      "Math (z = 1.6)"],
    ["From z back to x", "A value has z = −1.5 in a distribution with μ = 250 and σ = 20. Find the value.",
      [S`\(x=\mu+z\sigma=250+(-1.5)(20)\).`],
      "220"],
  ]),

  practice([
    q("z", "μ = 50, σ = 5. Find the z-score of 62.", num(2.4), "(62 − 50)/5.", [S`\(\frac{12}5\).`], "2.4"),
    q("z", "μ = 80, σ = 6. Find the z-score of 71.", num(-1.5), "(71 − 80)/6.", [S`\(-\frac96\).`], "−1.5"),
    q("x", "μ = 300, σ = 25 and z = 1.2. Find x.", num(330), "μ + zσ.", [S`\(300+30\).`], "330"),
    q("rule", "About what percent of a normal distribution lies within 2 standard deviations of the mean?", num(95, 0.5), "68–95–99.7.", [S`95%.`], "95"),
    q("shape", "If σ increases while μ stays the same, the normal curve becomes…", choice(["wider and lower", "narrower and taller", "shifted right", "unchanged"], 0), "Area stays 1.", ["More spread."], "wider and lower"),
  ]),

  ...hard([
    ["Finding μ and σ", "In a normal distribution, 16% of values are below 42 and 2.5% are above 66 (use the 68–95–99.7 rule). Find μ and σ.",
      [S`16% below means 42 is \(\mu-\sigma\). 2.5% above means 66 is \(\mu+2\sigma\).`, S`Subtract: \(3\sigma=24\Rightarrow\sigma=8\), \(\mu=50\).`],
      "μ = 50, σ = 8"],
    ["Which athlete is more exceptional?", "A sprinter runs 100 m in 10.9 s (event μ = 11.6 s, σ = 0.35 s). A shot-putter throws 17.8 m (μ = 15.2 m, σ = 1.1 m). Who performed better relative to their event?",
      [S`Sprint (lower is better): \(z=\frac{10.9-11.6}{0.35}=-2\), i.e. 2σ better than average.`, S`Shot put: \(z=\frac{17.8-15.2}{1.1}\approx${r3(2.6 / 1.1, 2)}\).`, S`The shot-putter is about ${r3(2.6 / 1.1, 2)}σ better, more than the sprinter's 2σ.`],
      "the shot-putter",
      fig(normalSvg({ mu: 0, s: 1, marks: [[2, "sprint 2", "blue"], [2.6 / 1.1, "shot " + r3(2.6 / 1.1, 2), "red"]], ticks: [-3, -2, -1, 0, 1, 2, 3] }), "both performances on the z scale (sprint z reversed because lower times are better)")],
  ], [
    q("hard", "In a normal distribution 50% of values are below 120 and 84% are below 135. Find σ.", num(15), "135 is μ + σ.", [S`\(135-120\).`], "15"),
    q("hard", "Two values x₁ = 64 and x₂ = 88 have z-scores −1 and 2. Find μ.", num(72), "σ = 24/3 = 8.", [S`\(\mu=64+8\).`], "72"),
    q("hard", "About what percent of a normal distribution lies between μ − σ and μ + 2σ?", num(81.5, 0.5), "34 + 34 + 13.5.", [S`\(68+13.5\).`], "81.5"),
  ]),

  wrapUp({
    qas: [
      ["What makes a distribution normal?", "A symmetric bell shape centred at μ, with spread σ; mean = median = mode."],
      ["What does a z-score tell me?", "How many standard deviations a value is above (positive) or below (negative) the mean."],
      ["When can I use 68–95–99.7?", "For approximately normal data, to estimate percentages within 1, 2, 3 standard deviations."],
      ["How do z-scores help compare?", "They convert different scales to the same standard scale."],
      ["What is the standard normal distribution?", "N(0, 1): the distribution of z-scores."],
    ],
    summary: [
      "Normal: symmetric bell, N(μ, σ²).",
      "68–95–99.7 within 1, 2, 3σ.",
      "z = (x − μ)/σ; x = μ + zσ.",
      "Larger |z| = more unusual.",
    ],
    next: "4.3 finds exact normal probabilities and percentiles with tables and technology.",
  }),
];
