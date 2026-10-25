// MDM4U 3.7 — Comparing Discrete Distributions: choosing a model (uniform, binomial, geometric, hypergeometric)
// from the situation, comparing shapes and expected values, the hypergeometric → binomial link as the population
// grows, and checking a model against data
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, fig, barsSvg, lineSvg } from "./lib.mjs";
import { r3, bin, geo, hyp } from "../mdm4u/count.mjs";

export const TITLE = "3.7 Comparing Discrete Distributions";
export const ID = "5c3e0001-0001-4001-8001-0000d4d00307";
const S = String.raw;

export const blocks = () => [
  intro({
    icon: "🧭",
    title: "Comparing Discrete Distributions",
    overview: S`Each discrete distribution in this chapter describes a different kind of situation. Choosing the right model is the first step in any probability problem. The four models compare like this: \[\text{uniform: }E=\tfrac{a+b}2,\quad\text{binomial: }E=np,\quad\text{geometric: }E=\tfrac qp,\quad\text{hypergeometric: }E=\tfrac{ra}N.\] When a model is chosen, its histogram can be compared with data to check whether it fits.`,
    goals: [
      "choose an appropriate model from the description of a situation;",
      "compare the shapes and expected values of the four distributions;",
      "explain why the hypergeometric approaches the binomial for large populations;",
      "compare a model's predicted frequencies with observed data;",
      "justify a choice of model in words.",
    ],
    curriculum: "B1.1–B1.4 (discrete distributions and their representations); B2.7 connection (binomial and hypergeometric distributions for increasing numbers of trials)",
    prior: [
      ["E(X) for a binomial with n = 20, p = 0.3?", "6."],
      ["E(X) for a geometric with p = 0.25?", "3."],
      ["E(X) for a uniform on 1 to 9?", "5."],
    ],
    words: [
      ["Model", "a distribution chosen to describe a situation", "binomial for repeated free throws"],
      ["Fixed vs open trials", "a set number of trials vs waiting for a success", "binomial vs geometric"],
      ["With vs without replacement", "independent vs dependent draws", "binomial vs hypergeometric"],
      ["Goodness of fit (informal)", "how close data are to the model's predictions", "observed vs expected counts"],
    ],
  }),

  section("📌 Choosing a model", S`
  ${table(["Ask", "If yes →", "Example"], [["Are all values equally likely?", "uniform", "a random digit"], ["Fixed number of independent trials, counting successes?", "binomial", "6s in 10 rolls"], ["Waiting for the first success?", "geometric", "rolls before the first 6"], ["Sampling without replacement from a small group, counting successes?", "hypergeometric", "women on a committee"]])}
  ${fig(barsSvg([0, 1, 2, 3, 4, 5, 6].map((x) => bin(6, 0.5, x)), { labels: [0, 1, 2, 3, 4, 5, 6], histogram: true, fmt: (v) => v.toFixed(2), xlabel: "binomial n = 6, p = 0.5 (symmetric)", ylabel: "P" }), "binomial: peaked near np")}
  ${fig(barsSvg([0, 1, 2, 3, 4, 5, 6].map((k) => geo(0.4, k)), { labels: [0, 1, 2, 3, 4, 5, 6], histogram: true, fmt: (v) => v.toFixed(2), xlabel: "geometric p = 0.4 (always decreasing)", ylabel: "P" }), "geometric: highest at 0, long tail")}
  ${keyIdea(S`Shapes: uniform is flat; binomial and hypergeometric are mound-shaped near their mean; geometric always decreases.`)}`),

  section("📌 Hypergeometric → binomial", S`
  <p>Choose 5 people from a group that is 40% women. As the group grows, sampling without replacement hardly changes the proportion, so the hypergeometric probabilities approach the binomial ones. Here is P(X = 2) as the population N grows:</p>
  ${fig(lineSvg([10, 20, 50, 100, 500, 1000].map((N) => hyp(N, 0.4 * N, 5, 2)), { p: bin(5, 0.4, 2), pLabel: `binomial ${r3(bin(5, 0.4, 2))}`, xs: [10, 20, 50, 100, 500, 1000], ymax: 0.6, nt: 6, xlabel: "population N", ylabel: "P(X = 2)" }), "the hypergeometric values (violet) approach the binomial value (red)")}`),

  section("📌 Explore", S`<p>Pick two models with the same n and p and compare their shapes and means. Try binomial against hypergeometric, then uniform against geometric.</p>`),

  widget("compareDists", { init: ["binomial", "hyper"] }),

  section("📌 Watch out", watchOut([
    "Read the situation carefully: “until”, “with replacement”, “without replacement”, “equally likely” are the clues.",
    "Different models can have the same mean but very different shapes.",
    "A model that fits one set of data can still be wrong — compare with more data.",
    "Use the simplest model that matches all the conditions.",
  ])),

  examples([
    ["Name the model", "Name the distribution: (a) the number of red cards in a 7-card hand; (b) the number of defective bulbs in 20 from a huge batch with 2% defective; (c) the number of calls before reaching a live person, with P = 0.3 each call; (d) a random seat number from 1 to 40.",
      [S`(a) without replacement from 52: hypergeometric.`, S`(b) fixed n, constant p (huge batch): binomial.`, S`(c) waiting time: geometric. (d) equally likely: uniform.`],
      "hypergeometric, binomial, geometric, uniform"],
    ["Expected values", "Find the expected value in each case of the previous example.",
      [S`(a) \(\frac{7(26)}{52}=3.5\). (b) \(20(0.02)=0.4\).`, S`(c) \(\frac{0.7}{0.3}\approx${r3(0.7 / 0.3, 2)}\). (d) \(\frac{1+40}2=20.5\).`],
      `3.5, 0.4, ${r3(0.7 / 0.3, 2)}, 20.5`],
    ["Same mean, different shape", "Compare a binomial with n = 8, p = 0.5 and a uniform on 0–8. Find both means and describe the shapes.",
      [S`Binomial mean \(8(0.5)=4\); uniform mean \(\frac{0+8}2=4\).`, S`Binomial is mound-shaped (P(4) ≈ ${r3(bin(8, 0.5, 4))}); uniform is flat (each \(\frac19\approx${r3(1 / 9)}\)).`],
      "both 4; mound vs flat"],
    ["Checking a model", "A machine's output is tested in 100 batches of 4 items; the number of defective items per batch was 0: 66, 1: 28, 2: 5, 3: 1, 4: 0. Compare with a binomial model with p = 0.1.",
      [S`Expected batches: \(100\,P(X=x)\): ${[0, 1, 2, 3, 4].map((x) => r3(100 * bin(4, 0.1, x), 1)).join(", ")}.`, S`Observed 66, 28, 5, 1, 0 — very close, so the binomial model fits well.`],
      "the binomial model fits",
      fig(barsSvg([66, 28, 5, 1, 0], { labels: [0, 1, 2, 3, 4], top: true, xlabel: "defective per batch (observed)", ylabel: "batches" }))],
    ["Why the models agree", "Explain why choosing 5 people from 2000 voters (40% support) can be modelled as binomial even though people are not replaced.",
      [S`Removing a few people barely changes the 40% proportion.`, S`So the draws are almost independent with \(p\approx0.4\).`],
      "the population is large compared with the sample"],
  ]),

  practice([
    q("model", "Counting the number of rolls before the first double on two dice is which model?", choice(["geometric", "binomial", "uniform", "hypergeometric"], 0), "Waiting for a success.", ["Not a fixed number of trials."], "geometric"),
    q("model", "Counting girls on a 6-person team chosen from 10 girls and 12 boys is which model?", choice(["hypergeometric", "binomial", "geometric", "uniform"], 0), "Without replacement.", ["Small population."], "hypergeometric"),
    q("E", "A uniform distribution on 10, 11, …, 30. Find E(X).", num(20), "(a + b)/2.", [S`\(\frac{40}2\).`], "20"),
    q("E", "A hypergeometric model: N = 40, a = 10, r = 8. Find E(X).", num(2), "ra/N.", [S`\(\frac{80}{40}\).`], "2"),
    q("shape", "Which distribution always has its highest bar at the smallest value?", choice(["geometric", "binomial with p = 0.5", "uniform", "hypergeometric"], 0), "Each bar is q times the previous.", ["Decreasing."], "geometric"),
  ]),

  ...hard([
    ["Two models for one question", "A box has 30 light bulbs, 6 defective. Four are tested. Find P(exactly one defective) with the hypergeometric model and with a binomial approximation, and explain the difference.",
      [S`Hypergeometric: \(\frac{\binom61\binom{24}3}{\binom{30}4}\approx${r3(hyp(30, 6, 4, 1), 4)}\).`, S`Binomial \(p=0.2\): \(4(0.2)(0.8)^3\approx${r3(bin(4, 0.2, 1), 4)}\).`, S`The sample is 13% of the population, so dependence matters: the models differ by about ${r3(Math.abs(hyp(30, 6, 4, 1) - bin(4, 0.2, 1)), 3)}.`],
      `${r3(hyp(30, 6, 4, 1), 4)} vs ${r3(bin(4, 0.2, 1), 4)}`],
    ["Designing a game", "Game A: roll a die, win the number in dollars. Game B: toss 6 coins, win 1 dollar per head. Game C: roll a die until a 6 appears, win 1 dollar per non-6 roll. Each costs 3.25 dollars. Which games favour the player?",
      [S`A: uniform, \(E=3.5\): net \(+0.25\).`, S`B: binomial, \(E=6(0.5)=3\): net \(-0.25\).`, S`C: geometric, \(E=\frac{5/6}{1/6}=5\): net \(+1.75\). A and C favour the player.`],
      "A and C",
      fig(barsSvg([3.5, 3, 5], { labels: ["A uniform", "B binomial", "C geometric"], top: true, fmt: (v) => v.toFixed(2), ylabel: "expected winnings ($)" }))],
  ], [
    q("hard", "A binomial and a hypergeometric model both have n = r = 10 and p = a/N = 0.3. Which has the larger P(X = 0) when N = 20?", choice(["the binomial", "the hypergeometric", "they are equal", "cannot tell"], 0), "Without replacement extremes are less likely.", [S`Binomial \(0.7^{10}\approx${r3(0.7 ** 10, 4)}\); hypergeometric \(\frac{\binom{14}{10}}{\binom{20}{10}}\approx${r3(hyp(20, 6, 10, 0), 4)}\).`], "the binomial"),
    q("hard", "Expected number of failures before the first success is 1.5. Find p.", num(0.4), "q/p = 1.5.", [S`\(1-p=1.5p\Rightarrow p=0.4\).`], "0.4"),
    q("hard", "A binomial model has E(X) = 4.8 and n = 12. A geometric model uses the same p. What is its expected number of failures?", num(1.5), "p = 0.4; q/p.", [S`\(\frac{0.6}{0.4}\).`], "1.5"),
  ]),

  wrapUp({
    qas: [
      ["How do I choose between binomial and geometric?", "Binomial: fixed number of trials, count successes. Geometric: keep going until the first success."],
      ["How do I choose between binomial and hypergeometric?", "With replacement (or a huge population): binomial. Without replacement from a small group: hypergeometric."],
      ["When is a uniform model right?", "When every value is equally likely, like a fair die or a random number."],
      ["Why do the hypergeometric and binomial agree for large N?", "Removing a few items barely changes the proportion, so the draws are nearly independent."],
      ["How can I check a model?", "Compare its expected frequencies with observed data; large mismatches suggest a different model."],
    ],
    summary: [
      "Uniform: flat, E = (a + b)/2.",
      "Binomial: fixed n, E = np.",
      "Geometric: waiting time, E = q/p.",
      "Hypergeometric: without replacement, E = ra/N.",
    ],
    next: "3.8 reviews the chapter.",
  }),
];
