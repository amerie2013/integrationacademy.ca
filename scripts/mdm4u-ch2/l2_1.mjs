// MDM4U 2.1 — Introduction to Probability: experiments, outcomes, sample spaces (discrete vs continuous), events,
// theoretical probability for equally likely outcomes, the probability scale, the complement, and the probability
// distribution of the sum of two dice
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, frac, hard, fig, diceGridSvg, spinnerSvg, barsSvg, treeSvg, fullTree } from "./lib.mjs";
import { fx } from "../mdm4u/count.mjs";

export const TITLE = "2.1 Introduction to Probability";
export const ID = "e30e0d14-5177-4872-9021-740883e2d453";
const S = String.raw;
const sums = Array.from({ length: 11 }, (_, i) => 6 - Math.abs(i - 5)); // ways to roll 2..12

export const blocks = () => [
  intro({
    icon: "🎲",
    title: "Introduction to Probability",
    overview: S`Probability measures how likely something is, on a scale from 0 (impossible) to 1 (certain). An <strong>experiment</strong> (rolling dice, drawing a card) has a set of possible <strong>outcomes</strong> called the <strong>sample space</strong> \(S\). An <strong>event</strong> \(A\) is a set of outcomes. When all outcomes are equally likely, the <strong>theoretical probability</strong> is \[P(A)=\frac{n(A)}{n(S)}=\frac{\text{number of outcomes in }A}{\text{number of outcomes in the sample space}}.\]`,
    goals: [
      "describe experiments, outcomes, sample spaces and events;",
      "distinguish a discrete sample space (countable outcomes) from a continuous one (measured outcomes);",
      "calculate theoretical probabilities for equally likely outcomes;",
      "use the complement: P(A′) = 1 − P(A);",
      "build the probability distribution of a sample space and check that the probabilities add to 1.",
    ],
    curriculum: "A1.1 (probabilities describe the likelihood of results of experiments and of real-world events); A1.2 (discrete vs continuous sample spaces); A1.3 (theoretical probability of each outcome; the probabilities add to 1; the probability distribution)",
    prior: [
      ["How many outcomes are there when two dice are rolled?", "6 × 6 = 36."],
      ["Write 9/36 in lowest terms.", "1/4."],
      ["Write 0.35 as a percent.", "35%."],
    ],
    words: [
      ["Sample space S", "the set of all possible outcomes", "one die: {1, 2, 3, 4, 5, 6}"],
      ["Event A", "a subset of the sample space", "rolling an even number: {2, 4, 6}"],
      ["n(A)", "the number of outcomes in A", "n(even) = 3"],
      ["Complement A′", "every outcome not in A", "not even = {1, 3, 5}"],
      ["Discrete / continuous", "outcomes can be counted / are measured", "number of heads / time to finish a race"],
    ],
  }),

  section("📌 Sample spaces and events", S`
  <p>Rolling a red die and a blue die gives 36 equally likely outcomes. The shaded cells are the event “the sum is 7”:</p>
  ${fig(diceGridSvg((a, b) => a + b === 7, { rowTitle: "red die", colTitle: "blue die" }), "\\(n(A)=6\\), \\(n(S)=36\\), so \\(P(\\text{sum }7)=\\frac{6}{36}=\\frac16\\)")}
  ${table(["Sample space", "Type", "Why"], [["number of heads in 5 tosses: {0, 1, 2, 3, 4, 5}", "discrete", "outcomes can be listed and counted"], ["card drawn from a deck: 52 cards", "discrete", "countable"], ["time to run 100 m", "continuous", "measured; any value in an interval"], ["mass of an apple", "continuous", "measured"]])}
  ${keyIdea(S`\(P(A)=\frac{n(A)}{n(S)}\) only works when every outcome is <em>equally likely</em>. The spinner below has unequal sections, so count by area, not by labels.`)}
  ${fig(spinnerSvg([["A", 0.5, "blue"], ["B", 0.25, "red"], ["C", 0.25, "green"]]), "P(A) = 1/2, P(B) = 1/4, P(C) = 1/4 — not 1/3 each")}`),

  section("📌 The probability scale and the complement", S`
  <p>For any event, \(0\le P(A)\le1\). An event and its complement together fill the sample space, so</p>
  \[P(A)+P(A')=1\qquad\Rightarrow\qquad P(A')=1-P(A).\]
  <p>The probabilities of all the outcomes form a <strong>probability distribution</strong>, and they always add to 1. For the sum of two dice:</p>
  ${fig(barsSvg(sums.map((k) => k / 36), { labels: Array.from({ length: 11 }, (_, i) => i + 2), top: sums.map((k) => `${k}/36`), histogram: true, xlabel: "sum of two dice", ylabel: "probability", fmt: (v) => v.toFixed(2) }), "the 11 probabilities add to 36/36 = 1; 7 is the most likely sum")}
  ${keyIdea(S`“At least one”, “not”, “none of” are often easiest through the complement.`)}`),

  section("📌 Explore", S`<p>Choose an event for two dice. The grid shades the favourable outcomes and the scale shows where the probability sits between 0 and 1.</p>`),

  widget("diceSpace", { init: 7 }),

  section("📌 Watch out", watchOut([
    "Count outcomes, not results: a sum of 4 comes from (1,3), (2,2) and (3,1) — three outcomes.",
    "Equally likely outcomes only. A spinner with unequal sectors or a weighted coin needs areas or data.",
    "A probability can never be negative or greater than 1. Check your answer against the scale.",
    "Write probabilities as reduced fractions, decimals or percents — all are acceptable.",
  ])),

  examples([
    ["One die", "A fair die is rolled. Find P(a number greater than 4) and P(not a 6).",
      [S`\(S=\{1,2,3,4,5,6\}\), \(n(S)=6\).`, S`Greater than 4: \(\{5,6\}\): \(\frac26=\frac13\).`, S`Not a 6: \(1-\frac16=\frac56\).`],
      "1/3 and 5/6"],
    ["Cards", "A card is drawn from a standard deck of 52. Find P(a face card) and P(a red ace).",
      [S`Face cards: J, Q, K in 4 suits = 12: \(\frac{12}{52}=\frac3{13}\).`, S`Red aces: 2: \(\frac2{52}=\frac1{26}\).`],
      "3/13 and 1/26"],
    ["Two dice", "Two dice are rolled. Find P(the sum is at most 4).",
      [S`Sums 2, 3, 4: \(1+2+3=6\) outcomes.`, S`\(\frac6{36}=\frac16\).`],
      "1/6",
      fig(diceGridSvg((a, b) => a + b <= 4))],
    ["A tree diagram", "Three coins are tossed. Find P(exactly two heads).",
      [S`The tree has \(2^3=8\) equally likely outcomes.`, S`HHT, HTH, THH: 3 outcomes.`, S`\(\frac38\).`],
      "3/8",
      fig(treeSvg(fullTree([["H", "T"], ["H", "T"], ["H", "T"]]), { heads: ["1st", "2nd", "3rd"] }))],
    ["A distribution", "A spinner has sectors 1, 2, 3 with P(1) = 0.45 and P(2) = 0.35. Find P(3) and P(not 2).",
      [S`The probabilities add to 1: \(P(3)=1-0.45-0.35=0.2\).`, S`\(P(\text{not }2)=1-0.35=0.65\).`],
      "0.2 and 0.65"],
  ]),

  practice([
    q("die", "A fair die is rolled. What is P(an even number)?", frac(1, 2), "{2, 4, 6}.", [S`\(\frac36\).`], "1/2"),
    q("cards", "A card is drawn from a standard deck. What is P(a heart)?", frac(1, 4), "13 hearts.", [S`\(\frac{13}{52}\).`], "1/4"),
    q("dice", "Two dice are rolled. What is P(the sum is 10)?", frac(1, 12), "(4,6), (5,5), (6,4).", [S`\(\frac3{36}\).`], "1/12"),
    q("complement", "P(rain tomorrow) = 0.3. What is P(no rain)?", num(0.7), "1 − 0.3.", [S`\(1-0.3\).`], "0.7"),
    q("type", "Which sample space is continuous?", choice(["the time a student takes to finish a test", "the number of cars in a parking lot", "the card drawn from a deck", "the number of heads in 10 tosses"], 0), "Measured, not counted.", ["Time is measured."], "time"),
  ]),

  ...hard([
    ["Products of two dice", "Two dice are rolled and the numbers are multiplied. Find P(the product is a multiple of 3) and P(the product is odd).",
      [S`Product is a multiple of 3 unless neither die shows 3 or 6: \(1-\frac{4\cdot4}{36}=\frac{20}{36}=\frac59\).`, S`Odd only when both dice are odd: \(\frac{3\cdot3}{36}=\frac14\).`],
      "5/9 and 1/4",
      fig(diceGridSvg((a, b) => (a * b) % 3 === 0, { label: (a, b) => a * b }))],
    ["Checking a distribution", "A biased four-sided die has P(1) = k, P(2) = 2k, P(3) = 3k and P(4) = 4k. Find k and P(an even number).",
      [S`The probabilities add to 1: \(10k=1\Rightarrow k=0.1\).`, S`\(P(2)+P(4)=0.2+0.4=0.6\).`],
      "k = 0.1; P(even) = 0.6"],
  ], [
    q("hard", "Two dice are rolled. What is P(the larger number is 4)? (If they are equal, that number is the larger.)", frac(7, 36), "List the cells with maximum 4.", [S`(4,1), (4,2), (4,3), (4,4), (1,4), (2,4), (3,4): 7 cells.`], "7/36"),
    q("hard", "A letter is chosen at random from the word PROBABILITY. What is P(it is a B or an I)?", frac(4, 11), "11 letters; B twice, I twice.", [S`\(\frac{2+2}{11}\).`], "4/11"),
    q("hard", "A spinner has 5 sectors with P(red) = 2·P(blue) and the other 3 sectors each have probability 0.1. Find P(blue).", num(0.7 / 3, 0.001), "2b + b + 0.3 = 1.", [S`\(3b=0.7\Rightarrow b\approx0.233\).`], "about 0.233 (exactly 7/30)"),
  ]),

  wrapUp({
    qas: [
      ["What does a probability of 0.75 mean?", "In the long run the event happens about 3 times out of 4; it is likely but not certain."],
      ["When can I use n(A)/n(S)?", "Only when every outcome in the sample space is equally likely."],
      ["Why do the probabilities of all outcomes add to 1?", "Exactly one outcome happens each time, so together they are certain."],
      ["What is the difference between discrete and continuous?", "Discrete outcomes can be counted (number of heads); continuous outcomes are measured (time, mass)."],
      ["When is the complement useful?", "When the event has many cases but its opposite has few, such as “at least one”."],
    ],
    summary: [
      "P(A) = n(A)/n(S) for equally likely outcomes.",
      "0 ≤ P(A) ≤ 1; P(A′) = 1 − P(A).",
      "A probability distribution lists every outcome's probability; they add to 1.",
      "Discrete: counted; continuous: measured.",
    ],
    next: "2.2 compares theoretical probability with the results of real and simulated experiments.",
  }),
];
