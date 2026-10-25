// MDM4U 2.3 — Odds & the Complement: odds in favour and against, converting between odds and probability,
// the complement rule, "at least one" problems, and odds in real contexts (sports, weather, games)
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, frac, ratio, hard, fig, spinnerSvg, poolSvg, diceGridSvg, barsSvg } from "./lib.mjs";
import { r3 } from "../mdm4u/count.mjs";

export const TITLE = "2.3 Odds & the Complement";
export const ID = "8b514ba0-e0da-44cd-905f-4ed065c4b885";
const S = String.raw;

export const blocks = () => [
  intro({
    icon: "⚖️",
    title: "Odds & the Complement",
    overview: S`Probability compares favourable outcomes with <em>all</em> outcomes. <strong>Odds</strong> compare favourable outcomes with <em>unfavourable</em> ones: \[\text{odds in favour of }A=P(A):P(A')=n(A):n(A'),\qquad\text{odds against }A=P(A'):P(A).\] If the odds in favour are \(m:n\), then \(P(A)=\frac{m}{m+n}\). The <strong>complement</strong> \(A'\) is everything that is not \(A\), with \(P(A')=1-P(A)\) — a shortcut for many “at least one” problems.`,
    goals: [
      "find the odds in favour of and against an event;",
      "convert odds to probability and probability to odds;",
      "use the complement rule P(A′) = 1 − P(A);",
      "solve “at least one” and “not” problems with the complement;",
      "interpret odds quoted in sports, games and the media.",
    ],
    curriculum: "A1.5 (determine the complement of an event; solve problems involving P(~A)); A1.1 (probabilities and likelihood in real-world events)",
    prior: [
      ["Simplify the ratio 12 : 18.", "2 : 3."],
      ["P(A) = 0.35. What is P(not A)?", "0.65."],
      ["What fraction of a deck is clubs?", "13/52 = 1/4."],
    ],
    words: [
      ["Odds in favour", "favourable : unfavourable", "a die showing 5 or 6: 2 : 4 = 1 : 2"],
      ["Odds against", "unfavourable : favourable", "against 5 or 6: 2 : 1"],
      ["Complement A′", "the event “not A”", "not rolling a 6"],
      ["Even odds", "odds of 1 : 1, probability 1/2", "a fair coin"],
    ],
  }),

  section("📌 From probability to odds and back", S`
  ${fig(spinnerSvg([["win", 0.375, "green"], ["lose", 0.625, "red"]]), "3 of 8 equal sectors win: P(win) = 3/8; odds in favour 3 : 5; odds against 5 : 3")}
  ${table(["Given", "To find", "Rule", "Example"], [["P(A) = 3/8", "odds in favour", "\\(P(A):P(A')\\)", "\\(\\frac38:\\frac58=3:5\\)"], ["odds in favour 3 : 5", "P(A)", "\\(\\frac{m}{m+n}\\)", "\\(\\frac{3}{3+5}=\\frac38\\)"], ["odds against 7 : 2", "P(A)", "\\(\\frac{n}{m+n}\\) (second number on top)", "\\(\\frac{2}{9}\\)"], ["P(A) = 0.8", "odds against", "\\(P(A'):P(A)\\)", "\\(0.2:0.8=1:4\\)"]])}
  ${keyIdea(S`Odds use a colon and compare the two parts; probability is a fraction of the whole. Odds of \(3:5\) are <strong>not</strong> a probability of \(\frac35\).`)}`),

  section("📌 The complement and “at least one”", S`
  <p>“At least one” covers many cases; its complement “none” is a single case:</p>
  \[P(\text{at least one})=1-P(\text{none}).\]
  ${fig(diceGridSvg((a, b) => a === 6 || b === 6), "at least one 6 on two dice: 11 cells, or \\(1-\\frac{25}{36}=\\frac{11}{36}\\)")}
  ${keyIdea(S`If an event is described with “not”, “at least”, or “some”, check whether the complement is quicker.`)}`),

  section("📌 Explore", S`<p>Change the numbers of favourable and unfavourable outcomes. The readout gives the probability, both kinds of odds and the complement.</p>`),

  widget("oddsLab", { init: [3, 5] }),

  section("📌 Watch out", watchOut([
    "Odds in favour put the favourable count first; odds against reverse it.",
    "To get a probability from odds m : n, divide by the total m + n, not by n.",
    "Reduce odds like ratios: 6 : 9 = 2 : 3.",
    "Bookmaker odds include a profit margin, so the implied probabilities of all outcomes add to more than 1.",
  ])),

  examples([
    ["Odds from a sample space", "A card is drawn from a standard deck. Find the odds in favour of drawing a face card and the odds against.",
      [S`12 face cards, 40 others.`, S`In favour: \(12:40=3:10\). Against: \(10:3\).`],
      "3 : 10 in favour; 10 : 3 against"],
    ["Odds to probability", "The odds against a team winning the championship are 9 : 2. What is the probability that it wins?",
      [S`Against 9 : 2 means 2 favourable “parts” and 9 unfavourable.`, S`\(P(\text{win})=\frac2{9+2}=\frac2{11}\).`],
      "2/11 ≈ 0.18"],
    ["Probability to odds", "The probability of rain tomorrow is 0.65. What are the odds in favour of rain?",
      [S`\(0.65:0.35=65:35=13:7\).`],
      "13 : 7"],
    ["At least one", "Three coins are tossed. Find P(at least one head) and the odds in favour of it.",
      [S`None = TTT: \(\frac18\). So \(P(\text{at least one head})=1-\frac18=\frac78\).`, S`Odds in favour \(7:1\).`],
      "7/8; odds 7 : 1"],
    ["A bag of marbles", "A bag holds 4 red, 6 blue and 5 green marbles. One is drawn. Find the odds against drawing a blue marble.",
      [S`Blue 6, not blue 9.`, S`Odds against \(9:6=3:2\).`],
      "3 : 2",
      fig(poolSvg([[4, "red", "red"], [6, "blue", "blue"], [5, "green", "green"]], { per: 15 }))],
  ]),

  practice([
    q("odds", "A die is rolled. Give the odds in favour of rolling a number less than 3 (as a : b in lowest terms).", ratio(1, 2), "2 favourable, 4 unfavourable.", [S`\(2:4\).`], "1 : 2"),
    q("to probability", "The odds in favour of an event are 4 : 7. What is its probability?", frac(4, 11), "4 ÷ (4 + 7).", [S`\(\frac4{11}\).`], "4/11"),
    q("against", "The odds against an event are 5 : 3. What is its probability?", frac(3, 8), "The second number is favourable.", [S`\(\frac3{8}\).`], "3/8"),
    q("complement", "P(a flight is late) = 0.12. What is P(the flight is not late)?", num(0.88), "1 − 0.12.", [S`\(0.88\).`], "0.88"),
    q("at least one", "Two coins are tossed. What is P(at least one tail)?", frac(3, 4), "1 − P(HH).", [S`\(1-\frac14\).`], "3/4"),
  ]),

  ...hard([
    ["Implied probabilities", "A sports website gives odds against Team A of 3 : 2, against Team B of 7 : 3, and against a draw of 4 : 1. Find the implied probabilities and their sum. What does the sum tell you?",
      [S`A: \(\frac2{5}=0.4\). B: \(\frac3{10}=0.3\). Draw: \(\frac15=0.2\).`, S`Sum \(=0.9\). Exactly one of these three outcomes happens, so true probabilities add to 1.`, S`The quoted odds are not consistent probabilities (here they sum to less than 1, which would favour the bettor; real bookmakers make the sum more than 1).`],
      "0.4 + 0.3 + 0.2 = 0.9",
      fig(barsSvg([0.4, 0.3, 0.2], { labels: ["A", "B", "draw"], top: true, fmt: (v) => v.toFixed(1), ylabel: "implied probability" }))],
    ["At least one success in n tries", "A basketball player makes 60% of free throws. Find the probability that she makes at least one of her next 3 shots (assume independent shots), and the odds in favour.",
      [S`P(miss all three) \(=0.4^3=0.064\).`, S`P(at least one) \(=1-0.064=0.936\).`, S`Odds \(0.936:0.064=117:8\).`],
      "0.936; 117 : 8"],
  ], [
    q("hard", "The odds in favour of A are 2 : 5 and A′ is the complement. What are the odds in favour of A′? Enter as a ratio.", ratio(5, 2), "Reverse the odds.", [S`\(5:2\).`], "5 : 2"),
    q("hard", "A die is rolled 4 times. What is P(at least one 6)? (3 decimals)", num(r3(1 - (5 / 6) ** 4), 0.001), "1 − (5/6)⁴.", [S`\(1-0.482\).`], "0.518"),
    q("hard", "If P(A) = 2·P(A′), what are the odds in favour of A?", ratio(2, 1), "P(A) : P(A′).", [S`\(2P(A'):P(A')=2:1\).`], "2 : 1"),
  ]),

  wrapUp({
    qas: [
      ["What is the difference between odds and probability?", "Probability is favourable ÷ total; odds compare favourable to unfavourable."],
      ["How do I convert odds in favour m : n to a probability?", "P = m/(m + n)."],
      ["Why use the complement?", "“At least one” has many cases but “none” has one: P(at least one) = 1 − P(none)."],
      ["What are even odds?", "1 : 1 — equally likely to happen or not, probability 1/2."],
      ["Why do betting odds not add up correctly?", "Bookmakers build in a margin, so the implied probabilities add to more than 1."],
    ],
    summary: [
      "Odds in favour = P(A) : P(A′); odds against = P(A′) : P(A).",
      "Odds m : n in favour → P = m/(m + n).",
      "P(A′) = 1 − P(A).",
      "P(at least one) = 1 − P(none).",
    ],
    next: "2.4 combines events with “or”: mutually exclusive events and the additive rule.",
  }),
];
