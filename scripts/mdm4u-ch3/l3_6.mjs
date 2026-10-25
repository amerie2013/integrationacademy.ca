// MDM4U 3.6 — The Hypergeometric Distribution: successes in a sample drawn without replacement,
// P(X = x) = aCx (N−a)C(r−x) / NCr, E(X) = ra/N, comparison with the binomial, and applications
// (quality control, committees, card hands, capture–recapture)
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, fig, barsSvg, poolSvg } from "./lib.mjs";
import { C, r3, hyp, bin } from "../mdm4u/count.mjs";

export const TITLE = "3.6 The Hypergeometric Distribution";
export const ID = "81b53ca8-20ee-416e-9079-e9818ef1432f";
const S = String.raw;

const comm = [0, 1, 2, 3, 4].map((x) => hyp(12, 5, 4, x)); // 4 chosen from 5 women, 7 men

export const blocks = () => [
  intro({
    icon: "🎴",
    title: "The Hypergeometric Distribution",
    overview: S`A <strong>hypergeometric</strong> random variable counts the successes in a sample of \(r\) items drawn <em>without replacement</em> from a population of \(N\) items, \(a\) of which are successes: \[P(X=x)=\frac{\binom ax\binom{N-a}{r-x}}{\binom Nr},\qquad E(X)=\frac{ra}{N}.\] Because the draws are dependent, it is not binomial — but its mean equals the binomial mean with \(p=\frac aN\), and when the sample is small compared with the population the two distributions are nearly the same.`,
    goals: [
      "recognize sampling without replacement from a finite population;",
      "calculate hypergeometric probabilities with combinations;",
      "build the distribution and its histogram;",
      "use E(X) = ra/N;",
      "compare the hypergeometric and binomial distributions.",
    ],
    curriculum: "B1.1–B1.3 (discrete distributions, expected value, histograms); B2.7 connection (hypergeometric and binomial approach the normal shape as the population grows); A2.5 (probability by counting)",
    prior: [
      ["Evaluate ₅C₂ × ₇C₂ ÷ ₁₂C₄.", "210 ÷ 495 ≈ 0.424."],
      ["Is drawing cards without replacement independent?", "No, it is dependent."],
      ["E(X) for a binomial with n = 4, p = 5/12?", "5/3."],
    ],
    words: [
      ["Population N", "the whole group", "12 people"],
      ["Successes a", "how many in the population count as success", "5 women"],
      ["Sample r", "how many are drawn without replacement", "a committee of 4"],
      ["E(X) = ra/N", "expected successes in the sample", "4 × 5/12 = 5/3"],
    ],
  }),

  section("📌 Counting the sample", S`
  <p>A committee of 4 is chosen at random from 5 women and 7 men. X = number of women:</p>
  ${fig(poolSvg([[5, "red", "women"], [7, "blue", "men"]], { per: 12 }))}
  ${table(["x", "0", "1", "2", "3", "4"], [["\\(P(X=x)\\)", ...comm.map((v) => String(r3(v, 4)))]])}
  ${fig(barsSvg(comm, { labels: [0, 1, 2, 3, 4], histogram: true, top: true, fmt: (v) => v.toFixed(3), xlabel: "women on the committee", ylabel: "P(X = x)" }), `E(X) = 4 × 5/12 = ${r3(20 / 12, 3)}`)}
  ${keyIdea(S`Choose \(x\) successes from the \(a\) successes AND \(r-x\) failures from the \(N-a\) failures; divide by all \(\binom Nr\) samples.`)}`),

  section("📌 Hypergeometric vs binomial", S`
  ${table(["", "Binomial", "Hypergeometric"], [["trials", "independent (with replacement)", "dependent (without replacement)"], ["P(success)", "constant p", "changes after each draw"], ["formula", "\\(\\binom nx p^xq^{n-x}\\)", "\\(\\frac{\\binom ax\\binom{N-a}{r-x}}{\\binom Nr}\\)"], ["mean", "\\(np\\)", "\\(\\frac{ra}{N}\\) (same with p = a/N)"]])}
  ${fig(barsSvg([0, 1, 2, 3, 4].map((x) => bin(4, 5 / 12, x)), { labels: [0, 1, 2, 3, 4], histogram: true, top: true, fmt: (v) => v.toFixed(3), xlabel: "binomial n = 4, p = 5/12", ylabel: "P" }), "with replacement the extremes (0 and 4) are more likely")}`),

  section("📌 Explore", S`<p>Change the population, the number of successes and the sample size. With “compare binomial” on, see how the two distributions differ for small populations and agree for large ones.</p>`),

  widget("hyperLab", { init: [20, 8, 5] }),

  section("📌 Watch out", watchOut([
    "Use hypergeometric only when sampling without replacement from a finite group.",
    "The two combinations in the numerator must use the two separate groups (successes and failures).",
    "The values of x are limited: x ≤ a, x ≤ r, and r − x ≤ N − a.",
    "For a large population and a small sample, the binomial with p = a/N is a good approximation.",
  ])),

  examples([
    ["Quality control", "A box of 25 phones contains 4 defective. An inspector tests 5 at random. Find P(exactly 1 defective).",
      [S`\(\frac{\binom41\binom{21}4}{\binom{25}5}=\frac{4(5985)}{53\,130}\).`],
      `≈ ${r3(hyp(25, 4, 5, 1), 4)}`],
    ["At least one", "Same box: find P(the inspector finds at least one defective).",
      [S`\(1-\frac{\binom{21}5}{\binom{25}5}=1-\frac{20\,349}{53\,130}\).`],
      `≈ ${r3(1 - hyp(25, 4, 5, 0), 4)}`],
    ["Expected value", "A class of 30 has 12 students who play an instrument. A random group of 10 is chosen. How many musicians are expected?",
      [S`\(E(X)=\frac{10(12)}{30}\).`],
      "4"],
    ["Cards", "Five cards are dealt. Find the distribution of the number of aces as far as P(X = 2), and E(X).",
      [S`\(P(0)=\frac{\binom{48}5}{\binom{52}5}\approx${r3(hyp(52, 4, 5, 0), 4)}\), \(P(1)\approx${r3(hyp(52, 4, 5, 1), 4)}\), \(P(2)\approx${r3(hyp(52, 4, 5, 2), 4)}\).`, S`\(E(X)=\frac{5(4)}{52}\approx${r3(20 / 52, 3)}\).`],
      `E(X) ≈ ${r3(20 / 52, 3)}`],
    ["Capture–recapture", "Biologists tag 40 fish in a lake and release them. Later a sample of 60 fish contains 8 tagged ones. Estimate the population.",
      [S`Expected tagged in the sample \(=\frac{60(40)}{N}\). Set equal to 8.`, S`\(N=\frac{60\cdot40}{8}=300\).`],
      "about 300 fish"],
  ]),

  practice([
    q("P", "From 6 red and 4 blue marbles, 3 are drawn without replacement. Find P(exactly 2 red). (4 decimals)", num(r3(hyp(10, 6, 3, 2), 4), 0.0001), "₆C₂ × ₄C₁ ÷ ₁₀C₃.", [S`\(\frac{15\times4}{120}\).`], "0.5"),
    q("E", "N = 50, a = 10, r = 8. Find E(X).", num(1.6), "ra/N.", [S`\(\frac{80}{50}\).`], "1.6"),
    q("none", "A committee of 3 is chosen from 4 seniors and 6 juniors. Find P(no seniors). (4 decimals)", num(r3(hyp(10, 4, 3, 0), 4), 0.0001), "₆C₃ ÷ ₁₀C₃.", [S`\(\frac{20}{120}\).`], "0.1667"),
    q("max", "N = 20, a = 3, r = 5. What is the largest possible value of X?", num(3), "Cannot exceed a.", [S`Only 3 successes exist.`], "3"),
    q("type", "Which situation is hypergeometric?", choice(["the number of women on a committee chosen from a club", "the number of heads in 10 tosses", "the number of rolls until a 6", "the number of 6s in 10 rolls"], 0), "Without replacement from a finite group.", ["Committees are chosen without replacement."], "committee"),
  ]),

  ...hard([
    ["Lottery", "A lottery draws 6 numbers from 49. Find P(a ticket matches exactly 3) and the expected number of matches.",
      [S`\(\frac{\binom63\binom{43}3}{\binom{49}6}=\frac{20(12\,341)}{13\,983\,816}\approx${r3(hyp(49, 6, 6, 3), 4)}\).`, S`\(E=\frac{6\cdot6}{49}\approx${r3(36 / 49, 3)}\).`],
      `≈ ${r3(hyp(49, 6, 6, 3), 4)}; ${r3(36 / 49, 3)}`,
      fig(barsSvg([0, 1, 2, 3].map((x) => hyp(49, 6, 6, x)), { labels: [0, 1, 2, 3], histogram: true, top: true, fmt: (v) => v.toFixed(3), xlabel: "matches", ylabel: "P" }), "4, 5 or 6 matches are too rare to see")],
    ["When is binomial close enough?", "A shipment of 1000 parts contains 50 defective. A sample of 10 is tested. Compare P(X = 0) using the hypergeometric and the binomial models.",
      [S`Hypergeometric: \(\frac{\binom{950}{10}}{\binom{1000}{10}}\approx${r3(hyp(1000, 50, 10, 0), 4)}\).`, S`Binomial with \(p=0.05\): \(0.95^{10}\approx${r3(0.95 ** 10, 4)}\).`, S`They agree to about 0.006 because the sample is only 1% of the population.`],
      `${r3(hyp(1000, 50, 10, 0), 4)} vs ${r3(0.95 ** 10, 4)}`],
  ], [
    q("hard", "A hand of 13 cards is dealt. Find the expected number of hearts.", num(3.25), "13 × 13/52.", [S`\(\frac{169}{52}\).`], "3.25"),
    q("hard", "From 8 boys and 7 girls, 5 are chosen. Find P(at least 4 girls). (4 decimals)", num(r3(hyp(15, 7, 5, 4) + hyp(15, 7, 5, 5), 4), 0.0001), "(₇C₄₈C₁ + ₇C₅) ÷ ₁₅C₅.", [S`\(\frac{280+21}{3003}\).`], `${r3(301 / 3003, 4)}`),
    q("hard", "In a capture–recapture study, 50 animals are tagged. A later sample of 80 has 5 tagged. Estimate N.", num(800), "80 × 50 / 5.", [S`\(\frac{4000}{5}\).`], "800"),
  ]),

  wrapUp({
    qas: [
      ["When is a distribution hypergeometric?", "When you count successes in a sample drawn without replacement from a finite population."],
      ["Why not use the binomial?", "Without replacement the probability changes after each draw, so trials are not independent."],
      ["What is the expected value?", "ra/N — the sample size times the population proportion of successes."],
      ["When are the two models nearly equal?", "When the sample is a small fraction (under about 10%) of the population."],
      ["How does capture–recapture work?", "The proportion tagged in the sample estimates the proportion tagged in the population."],
    ],
    summary: [
      "P(X = x) = aCx · (N−a)C(r−x) ÷ NCr.",
      "E(X) = ra/N.",
      "Without replacement → dependent draws.",
      "Large population → close to binomial with p = a/N.",
    ],
    next: "3.7 compares the distributions and how to choose a model.",
  }),
];
