// MDM4U 3.1 — Random Variables & Discrete Distributions: discrete random variables, probability distribution tables,
// probability histograms (bars of width 1, total area 1), frequency vs probability histograms, and building a
// distribution from a sample space, with and without technology
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, frac, hard, fig, barsSvg, diceGridSvg, treeSvg, fullTree } from "./lib.mjs";
import { C, r3 } from "../mdm4u/count.mjs";

export const TITLE = "3.1 Random Variables & Discrete Distributions";
export const ID = "ab18d58b-deb6-4eab-b61f-ec71ee53034a";
const S = String.raw;

const heads3 = [1, 3, 3, 1].map((k) => k / 8);
const diff = Array.from({ length: 6 }, (_, d) => { let c = 0; for (let a = 1; a <= 6; a++) for (let b = 1; b <= 6; b++) if (Math.abs(a - b) === d) c++; return c; });

export const blocks = () => [
  intro({
    icon: "📊",
    title: "Random Variables & Discrete Distributions",
    overview: S`A <strong>random variable</strong> \(X\) assigns a number to each outcome of an experiment — for example, the number of heads in three tosses. A <strong>discrete</strong> random variable takes separate, countable values. Its <strong>probability distribution</strong> lists every value \(x\) with its probability \(P(X=x)\); the probabilities add to 1. A <strong>probability histogram</strong> draws each value as a bar of width 1 centred on \(x\) with height \(P(X=x)\), so the total area is 1.`,
    goals: [
      "identify a discrete random variable in a situation;",
      "build a probability distribution table from a sample space;",
      "check that a table is a valid probability distribution;",
      "draw and read a probability histogram and explain why its area is 1;",
      "compare a frequency histogram from data with the probability histogram.",
    ],
    curriculum: "B1.1 (recognize a discrete random variable; generate a probability distribution with and without technology; represent it in a table); B1.3 (probability histograms; connections between frequency and probability histograms)",
    prior: [
      ["Two coins are tossed. List the sample space.", "HH, HT, TH, TT."],
      ["How many outcomes do two dice have?", "36."],
      ["What do the probabilities of all outcomes add to?", "1."],
    ],
    words: [
      ["Random variable X", "a numerical value assigned to each outcome", "X = number of heads"],
      ["Discrete", "takes separate, countable values", "0, 1, 2, 3"],
      ["Probability distribution", "every value x with P(X = x)", "a table or a histogram"],
      ["Probability histogram", "bars of width 1 centred on x, height P(X = x)", "total area 1"],
    ],
  }),

  section("📌 From outcomes to a distribution", S`
  <p>Toss three coins and let \(X\) be the number of heads. Each of the 8 outcomes gives one value of \(X\):</p>
  ${fig(treeSvg(fullTree([["H", "T"], ["H", "T"], ["H", "T"]]), { heads: ["1st", "2nd", "3rd"], leaf: (p) => `${p.join("")}: X = ${p.filter((c) => c === "H").length}` }), "group the outcomes by the value of X")}
  ${table(["x", "0", "1", "2", "3", "total"], [["outcomes", "TTT", "HTT, THT, TTH", "HHT, HTH, THH", "HHH", "8"], ["P(X = x)", "1/8", "3/8", "3/8", "1/8", "1"]])}
  ${fig(barsSvg(heads3, { labels: [0, 1, 2, 3], top: ["1/8", "3/8", "3/8", "1/8"], histogram: true, xlabel: "x = number of heads", ylabel: "P(X = x)" }), "a probability histogram: each bar has width 1, so its area equals its probability")}
  ${keyIdea(S`A valid distribution has \(0\le P(X=x)\le1\) for every \(x\) and \(\sum P(X=x)=1\). In the histogram this means the total area is 1.`)}`),

  section("📌 Frequency vs probability histograms", S`
  <p>A <strong>frequency histogram</strong> shows how often each value happened in actual trials. Divide each frequency by the number of trials to get relative frequencies; with many trials the shape approaches the probability histogram.</p>
  ${table(["Histogram", "Bar height", "Total"], [["frequency", "count of trials with X = x", "number of trials"], ["relative frequency", "count ÷ trials", "1"], ["probability", "P(X = x)", "1"]])}
  ${keyIdea(S`The two histograms have the same shape when the experiment is repeated many times; small samples can look quite different.`)}`),

  section("📌 Explore", S`<p>Choose a random variable, read its distribution table and histogram, then simulate trials. The red outline (relative frequencies) moves toward the bars as the number of trials grows.</p>`),

  widget("rvHistogram", { init: "sum" }),

  section("📌 Watch out", watchOut([
    "The random variable is a number (number of heads, sum, profit), not an outcome like HHT.",
    "List every possible value of X, including 0.",
    "Check that the probabilities add to exactly 1.",
    "In a probability histogram the bars touch (width 1, centred on x); in a bar graph of categories they do not.",
  ])),

  examples([
    ["Identify X", "A student answers 4 true/false questions by guessing. Define a random variable and list its possible values.",
      [S`\(X\) = the number of correct answers.`, S`Possible values: 0, 1, 2, 3, 4.`],
      "X ∈ {0, 1, 2, 3, 4}"],
    ["A distribution from two dice", "Two dice are rolled and \\(X\\) is the absolute difference of the numbers. Build the probability distribution.",
      [S`Count the grid cells for each difference: 6, 10, 8, 6, 4, 2.`, S`Divide by 36.`],
      "6/36, 10/36, 8/36, 6/36, 4/36, 2/36 for x = 0 to 5",
      fig(diceGridSvg(() => false, { label: (a, b) => Math.abs(a - b) }))],
    ["Valid or not?", "Is this a probability distribution? P(X = 1) = 0.25, P(X = 2) = 0.4, P(X = 3) = 0.3, P(X = 4) = 0.1.",
      [S`All values are between 0 and 1.`, S`Sum \(=1.05\ne1\).`],
      "no — the probabilities add to 1.05"],
    ["Missing value", "A distribution has P(X = 0) = 0.15, P(X = 1) = 2k, P(X = 2) = 0.35 and P(X = 3) = k. Find k and P(X ≥ 2).",
      [S`\(0.15+2k+0.35+k=1\Rightarrow3k=0.5\Rightarrow k=\frac16\).`, S`\(P(X\ge2)=0.35+\frac16\approx${r3(0.35 + 1 / 6)}\).`],
      `k = 1/6; P(X ≥ 2) ≈ ${r3(0.35 + 1 / 6)}`],
    ["Area of a histogram", "Draw the probability histogram of the difference of two dice and find its total area.",
      [S`Bars of width 1 with heights \(\frac6{36},\ldots,\frac2{36}\).`, S`Area \(=1\times\frac{36}{36}=1\).`],
      "total area 1",
      fig(barsSvg(diff.map((k) => k / 36), { labels: [0, 1, 2, 3, 4, 5], histogram: true, top: diff.map((k) => `${k}/36`), xlabel: "difference", ylabel: "P(X = x)" }))],
  ]),

  practice([
    q("values", "Four coins are tossed and X = the number of tails. How many possible values does X have?", num(5), "0 to 4.", [S`0, 1, 2, 3, 4.`], "5"),
    q("P", "Three coins are tossed. What is P(X = 2), where X is the number of heads?", frac(3, 8), "HHT, HTH, THH.", [S`\(\frac38\).`], "3/8"),
    q("valid", "P(X = 0) = 0.2, P(X = 1) = 0.5, P(X = 2) = x. Find x.", num(0.3), "Sum to 1.", [S`\(1-0.7\).`], "0.3"),
    q("dice", "Two dice: X = the sum. What is P(X = 4)?", frac(1, 12), "(1,3), (2,2), (3,1).", [S`\(\frac3{36}\).`], "1/12"),
    q("area", "What is the total area of any probability histogram?", num(1), "Bars of width 1.", [S`Sum of the probabilities.`], "1"),
  ]),

  ...hard([
    ["The larger of two dice", "Two dice are rolled and X is the larger number. Find the distribution and show it is valid.",
      [S`\(P(X\le k)=\frac{k^2}{36}\) (both dice at most \(k\)).`, S`\(P(X=k)=\frac{k^2-(k-1)^2}{36}=\frac{2k-1}{36}\): \(\frac1{36},\frac3{36},\frac5{36},\frac7{36},\frac9{36},\frac{11}{36}\).`, S`Sum \(=\frac{36}{36}=1\).`],
      "(2k − 1)/36 for k = 1 to 6",
      fig(barsSvg([1, 3, 5, 7, 9, 11].map((k) => k / 36), { labels: [1, 2, 3, 4, 5, 6], histogram: true, top: ["1/36", "3/36", "5/36", "7/36", "9/36", "11/36"], xlabel: "larger number", ylabel: "P" }))],
    ["Drawing without replacement", "A bag has 3 red and 2 blue marbles. Two are drawn without replacement and X is the number of red marbles. Find the distribution.",
      [S`\(P(X=0)=\frac{\binom22}{\binom52}=\frac1{10}\).`, S`\(P(X=1)=\frac{\binom31\binom21}{10}=\frac6{10}\); \(P(X=2)=\frac{\binom32}{10}=\frac3{10}\).`, S`Sum 1 ✓.`],
      "0.1, 0.6, 0.3"],
  ], [
    q("hard", "Two dice are rolled. X = the product. What is P(X = 12)?", frac(1, 9), "(2,6), (6,2), (3,4), (4,3).", [S`\(\frac4{36}\).`], "1/9"),
    q("hard", "A distribution has P(X = x) = kx for x = 1, 2, 3, 4. Find k.", num(0.1), "k(1 + 2 + 3 + 4) = 1.", [S`\(10k=1\).`], "0.1"),
    q("hard", "Four cards are dealt. X = the number of aces. What is P(X = 0)? (4 decimals)", num(r3(C(48, 4) / C(52, 4), 4), 0.0001), "₄₈C₄ ÷ ₅₂C₄.", [S`\(\frac{194\,580}{270\,725}\).`], `${r3(C(48, 4) / C(52, 4), 4)}`),
  ]),

  wrapUp({
    qas: [
      ["What makes a random variable discrete?", "Its values can be listed and counted, like 0, 1, 2, …"],
      ["How do I build a distribution?", "List the sample space, find X for each outcome, group equal values and add their probabilities."],
      ["Why is a probability histogram's area 1?", "Each bar has width 1 and height P(X = x), so the areas are the probabilities, which add to 1."],
      ["How does a frequency histogram relate to a probability histogram?", "Divided by the number of trials it becomes a relative-frequency histogram, which approaches the probability histogram as trials increase."],
      ["How do I check a distribution?", "Every probability is between 0 and 1 and they add to 1."],
    ],
    summary: [
      "A random variable gives each outcome a number.",
      "Distribution: every value with P(X = x); sum = 1.",
      "Probability histogram: width 1, total area 1.",
      "Frequency histograms approach it as trials grow.",
    ],
    next: "3.2 summarizes a distribution with one number: its expected value.",
  }),
];
