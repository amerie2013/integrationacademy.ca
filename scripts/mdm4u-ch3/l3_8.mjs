// MDM4U 3.8 — Chapter 3 Review: random variables, distributions and histograms, expected value, and the uniform,
// binomial, geometric and hypergeometric models — mixed problems
import { intro, section, keyIdea, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, fig, barsSvg, tableSvg, poolSvg } from "./lib.mjs";
import { r3, bin, binLE, geo, hyp } from "../mdm4u/count.mjs";

export const TITLE = "3.8 Chapter 3 Review";
export const ID = "5c3e0001-0001-4001-8001-0000d4d00308";
const S = String.raw;

export const blocks = () => [
  intro({
    icon: "🗂️",
    title: "Chapter 3 Review: Discrete Probability Distributions",
    overview: S`This review brings together random variables, probability distributions, expected value and the four discrete models of the chapter. For each problem decide (1) what the random variable is, (2) which model fits, and (3) which formula or count answers the question.`,
    goals: [
      "build and check probability distributions;",
      "calculate and interpret expected values;",
      "choose the uniform, binomial, geometric or hypergeometric model;",
      "calculate probabilities and means for each model;",
      "draw and read probability histograms.",
    ],
    curriculum: "B1.1–B1.4 (discrete random variables, distributions, expected value, histograms, binomial distribution)",
    prior: [
      ["E(X) = Σ …?", "x·P(X = x)."],
      ["Binomial P(X = x)?", "nCx pˣ q^(n−x)."],
      ["Hypergeometric mean?", "ra/N."],
    ],
    words: [
      ["Distribution", "values with probabilities adding to 1", "table or histogram"],
      ["Expected value", "long-run average", "Σ x P(x)"],
      ["Binomial / hypergeometric", "with / without replacement", "np / ra/N"],
      ["Geometric", "failures before the first success", "q/p"],
    ],
  }),

  section("📌 Formula sheet", S`
  ${table(["Model", "P(X = x)", "E(X)", "Use when"], [["uniform", "\\(\\frac1n\\)", "\\(\\frac{a+b}2\\)", "equally likely values"], ["binomial", "\\(\\binom nx p^xq^{n-x}\\)", "\\(np\\)", "fixed n, independent, constant p"], ["geometric", "\\(q^xp\\)", "\\(\\frac qp\\)", "failures before first success"], ["hypergeometric", "\\(\\frac{\\binom ax\\binom{N-a}{r-x}}{\\binom Nr}\\)", "\\(\\frac{ra}N\\)", "without replacement"]])}
  ${keyIdea(S`Any distribution: probabilities between 0 and 1 that add to 1; \(E(X)=\sum xP(X=x)\); \(E(kX+c)=kE(X)+c\).`)}`),

  section("📌 Watch out", watchOut([
    "Identify the model before using a formula.",
    "Use the complement for “at least one”.",
    "E(X) is a long-run average, not the most likely value.",
    "Check the conditions: independence, fixed n, replacement.",
  ])),

  examples([
    ["Building a distribution", "Two cards are drawn without replacement from 4 red and 2 black cards. X = number of black cards. Find the distribution and E(X).",
      [S`\(P(0)=\frac{\binom42}{\binom62}=\frac6{15}\), \(P(1)=\frac{4\cdot2}{15}=\frac8{15}\), \(P(2)=\frac1{15}\).`, S`\(E=\frac{8+2}{15}=\frac23\) (also \(\frac{2\cdot2}6\)).`],
      "6/15, 8/15, 1/15; E = 2/3",
      fig(barsSvg([6 / 15, 8 / 15, 1 / 15], { labels: [0, 1, 2], histogram: true, top: ["6/15", "8/15", "1/15"], xlabel: "black cards", ylabel: "P" }))],
    ["Expected value game", "A game costs 5 dollars. Roll two dice: doubles pay 18 dollars, a sum of 7 pays 6 dollars, otherwise nothing. Find the expected net gain.",
      [S`\(E(\text{payout})=18\cdot\frac16+6\cdot\frac16=3+1=4\).`, S`Net \(=4-5=-1\).`],
      "−1 dollar per game"],
    ["Binomial", "A test has 12 multiple-choice questions with 5 options. A student guesses. Find P(at least 4 correct) and E(X).",
      [S`\(1-P(X\le3)=1-${r3(binLE(12, 0.2, 3), 4)}\).`, S`\(E=12(0.2)=2.4\).`],
      `≈ ${r3(1 - binLE(12, 0.2, 3), 4)}; 2.4`],
    ["Geometric", "A player wins a carnival game with probability 0.15. Find P(she first wins on her 4th try) and the expected number of losses before a win.",
      [S`\(0.85^3(0.15)\approx${r3(geo(0.15, 3), 4)}\).`, S`\(\frac{0.85}{0.15}\approx${r3(0.85 / 0.15, 2)}\).`],
      `${r3(geo(0.15, 3), 4)}; ${r3(0.85 / 0.15, 2)}`],
    ["Hypergeometric", "From 9 teachers and 6 parents, a committee of 5 is chosen. Find P(exactly 2 parents) and E(number of parents).",
      [S`\(\frac{\binom62\binom93}{\binom{15}5}=\frac{15(84)}{3003}\approx${r3(hyp(15, 6, 5, 2), 4)}\).`, S`\(E=\frac{5(6)}{15}=2\).`],
      `${r3(hyp(15, 6, 5, 2), 4)}; 2`,
      fig(poolSvg([[9, "amber", "teachers"], [6, "blue", "parents"]], { per: 15 }))],
  ]),

  practice([
    q("distribution", "P(X = 1) = 0.3, P(X = 2) = 0.5, P(X = 3) = k. Find k.", num(0.2), "Sum to 1.", [S`\(1-0.8\).`], "0.2"),
    q("E", "For that distribution, find E(X).", num(1.9), "0.3 + 1 + 0.6.", [S`\(1.9\).`], "1.9"),
    q("binomial", "n = 6, p = 0.5. Find P(X = 3). (4 decimals)", num(0.3125, 0.0001), "20/64.", [S`\(\frac{20}{64}\).`], "0.3125"),
    q("geometric", "p = 0.5. Find P(X = 3), the probability of 3 failures before the first success.", num(0.0625), "0.5⁴.", [S`\(0.0625\).`], "0.0625"),
    q("model", "Drawing 4 marbles without replacement from a bag of 10 and counting red ones is…", choice(["hypergeometric", "binomial", "geometric", "uniform"], 0), "Without replacement.", ["Small bag."], "hypergeometric"),
  ]),

  ...hard([
    ["Insurance pricing", "An insurer covers 2000 phones for a year. Each phone independently needs a 300-dollar repair with probability 0.08 and a 900-dollar replacement with probability 0.02. What premium per phone gives an expected profit of 20 dollars per phone?",
      [S`Expected cost per phone \(=300(0.08)+900(0.02)=24+18=42\).`, S`Premium \(=42+20=62\) dollars.`],
      "62 dollars"],
    ["Comparing models", "A class of 25 has 10 students in the band. Five are chosen at random. Compare P(no band members) under the hypergeometric model and a binomial approximation.",
      [S`Hypergeometric: \(\frac{\binom{15}5}{\binom{25}5}=\frac{3003}{53\,130}\approx${r3(hyp(25, 10, 5, 0), 4)}\).`, S`Binomial \(p=0.4\): \(0.6^5\approx${r3(0.6 ** 5, 4)}\).`, S`The binomial overestimates because the sample is 20% of the class.`],
      `${r3(hyp(25, 10, 5, 0), 4)} vs ${r3(0.6 ** 5, 4)}`,
      fig(tableSvg([["model", "P(X = 0)"], ["hypergeometric", String(r3(hyp(25, 10, 5, 0), 4))], ["binomial", String(r3(0.6 ** 5, 4))]], { rowHead: true }))],
  ], [
    q("hard", "A binomial variable has n = 15 and E(X) = 6. Find P(X = 6). (4 decimals)", num(r3(bin(15, 0.4, 6), 4), 0.0001), "p = 0.4.", [S`\(\binom{15}6(0.4)^6(0.6)^9\).`], `${r3(bin(15, 0.4, 6), 4)}`),
    q("hard", "A game pays X dollars, where X is uniform on 1 to 10. A second game pays 3X − 5 dollars. What is the expected payout of the second game?", num(11.5), "E(X) = 5.5.", [S`\(3(5.5)-5\).`], "11.5"),
    q("hard", "A die is rolled until a 6 appears. What is P(fewer than 3 non-6 rolls first)? (4 decimals)", num(r3(1 - (5 / 6) ** 3, 4), 0.0001), "1 − P(X ≥ 3).", [S`\(1-(5/6)^3\).`], `${r3(1 - (5 / 6) ** 3, 4)}`),
  ]),

  wrapUp({
    qas: [
      ["What are the three steps for any distribution problem?", "Define X, choose the model, apply the formula (or count)."],
      ["Which model has a constant probability but no fixed number of trials?", "Geometric."],
      ["Which models count successes?", "Binomial (with replacement / independent) and hypergeometric (without replacement)."],
      ["How do expected values help decisions?", "They give the long-run average gain or cost, used for fair prices, insurance and quality control."],
      ["What comes next?", "Continuous random variables and the normal distribution."],
    ],
    summary: [
      "Distribution: probabilities sum to 1; histogram area 1.",
      "E(X) = Σ x P(x); E(kX + c) = kE(X) + c.",
      "Uniform, binomial, geometric, hypergeometric — choose by the situation.",
      "Means: (a + b)/2, np, q/p, ra/N.",
    ],
    next: "Chapter 4 moves to continuous random variables and the normal distribution.",
  }),
];
