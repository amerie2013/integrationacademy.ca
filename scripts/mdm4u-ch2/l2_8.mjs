// MDM4U 2.8 — Counting & Probability: P = favourable count ÷ total count using permutations and combinations,
// cards and committees, arrangements with conditions, "at least one" by the complement, and the birthday problem
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, frac, hard, fig, poolSvg, tilesSvg, barsSvg, lineSvg } from "./lib.mjs";
import { fact, P, C, multi, countPerms, r3 } from "../mdm4u/count.mjs";

export const TITLE = "2.8 Counting & Probability";
export const ID = "c5737290-55ad-4f2c-ad5b-7288c8907381";
const S = String.raw;

const bday = (k) => 1 - Array.from({ length: k }, (_, i) => (365 - i) / 365).reduce((a, b) => a * b, 1);

export const blocks = () => [
  intro({
    icon: "🃏",
    title: "Counting & Probability",
    overview: S`When outcomes are equally likely but too many to list, count them with the methods of Chapter 1: \[P(A)=\frac{\text{number of favourable outcomes}}{\text{total number of outcomes}}=\frac{n(A)}{n(S)}.\] Use <strong>combinations</strong> when the order of the selection does not matter (hands of cards, committees, samples) and <strong>permutations</strong> when it does (line-ups, codes, rankings). Count the numerator and the denominator <em>the same way</em>.`,
    goals: [
      "count n(S) and n(A) with permutations or combinations;",
      "find probabilities for hands of cards, committees and samples;",
      "find probabilities for arrangements with conditions;",
      "use the complement for “at least one” probabilities;",
      "solve the birthday problem and interpret the result.",
    ],
    curriculum: "A2.5 (solve probability problems using counting principles for situations involving equally likely outcomes); A2.1–A2.2 (permutations and combinations)",
    prior: [
      ["Evaluate ₁₀C₃.", "120."],
      ["How many arrangements of the letters A, B, C, D?", "4! = 24."],
      ["How many 5-card hands are there?", "₅₂C₅ = 2 598 960."],
    ],
    words: [
      ["Equally likely", "every outcome has the same chance", "every 5-card hand from a shuffled deck"],
      ["Favourable outcome", "an outcome in the event", "a hand with exactly 2 aces"],
      ["Random selection", "every possible selection is equally likely", "names drawn from a hat"],
      ["Birthday problem", "P(at least two people share a birthday)", "with 23 people it is over 50%"],
    ],
  }),

  section("📌 Selections: combinations top and bottom", S`
  <p>A committee of 4 is chosen at random from 6 women and 5 men. What is P(exactly 2 women)?</p>
  ${fig(poolSvg([[6, "red", "women"], [5, "blue", "men"]], { per: 11 }))}
  \[P=\frac{\binom62\binom52}{\binom{11}4}=\frac{15\times10}{330}=\frac{150}{330}=\frac5{11}\approx${r3(5 / 11)}.\]
  ${fig(barsSvg([0, 1, 2, 3, 4].map((w) => (C(6, w) * C(5, 4 - w)) / C(11, 4)), { labels: ["0", "1", "2", "3", "4"], top: true, hl: [2], fmt: (v) => v.toFixed(3), xlabel: "women on the committee", ylabel: "probability" }), "the five probabilities add to 1")}
  ${keyIdea(S`Within the numerator multiply the choices from each group (AND); between cases add (OR).`)}`),

  section("📌 Arrangements: permutations top and bottom", S`
  <p>The letters of PROBLEM are arranged at random. P(the word starts and ends with a vowel)?</p>
  ${fig(tilesSvg(["O", "_", "_", "_", "_", "_", "E"], { colors: { O: "red", E: "red" } }), "vowels O and E at the ends (2! ways), 5 consonants in the middle (5!)")}
  \[P=\frac{2!\times5!}{7!}=\frac{240}{5040}=\frac1{21}.\]
  ${table(["Situation", "Order matters?", "Count with"], [["hands, committees, samples", "no", "\\(\\binom nr\\)"], ["line-ups, codes, rankings, words", "yes", "\\(P(n,r)\\), \\(n!\\)"], ["at least one …", "either", "\\(1-P(\\text{none})\\)"]])}`),

  section("📌 The birthday problem", S`
  <p>In a group of \(k\) people, \(P(\text{at least two share a birthday})=1-\dfrac{365\times364\times\cdots\times(365-k+1)}{365^k}=1-\dfrac{P(365,k)}{365^k}\).</p>
  ${fig(lineSvg([5, 10, 15, 20, 23, 30, 40, 50, 60].map(bday), { xs: [5, 10, 15, 20, 23, 30, 40, 50, 60], p: 0.5, pLabel: "50%", xlabel: "people in the group", ylabel: "P(shared birthday)" }), "with 23 people the probability passes 50%; with 50 it is about 97%")}`),

  section("📌 Explore", S`<p>Choose the number of cards in a hand and the number of hearts. The bar chart shows the probability of every possible number of hearts, found by counting.</p>`),

  widget("countProb", { init: [5, 2] }),

  section("📌 Watch out", watchOut([
    "Count the numerator and denominator the same way: both combinations or both permutations.",
    "“Exactly k” needs the other n − k chosen from the rest, not from everyone.",
    "For “at least one”, use 1 − P(none) rather than adding many cases.",
    "Probabilities from counting must lie between 0 and 1 — a quick check of your arithmetic.",
  ])),

  examples([
    ["Cards", "Five cards are dealt. Find P(all five are hearts).",
      [S`\(\frac{\binom{13}5}{\binom{52}5}=\frac{1287}{2\,598\,960}\).`],
      `≈ ${r3(C(13, 5) / C(52, 5), 5)}`],
    ["Exactly", "A shipment of 20 phones has 3 defective. An inspector tests 4 at random. Find P(exactly 1 defective).",
      [S`\(\frac{\binom31\binom{17}3}{\binom{20}4}=\frac{3\times680}{4845}=\frac{2040}{4845}\).`],
      `≈ ${r3(2040 / 4845)}`],
    ["At least one", "Same shipment: find P(at least one defective among the 4).",
      [S`None defective: \(\frac{\binom{17}4}{\binom{20}4}=\frac{2380}{4845}\).`, S`\(1-\frac{2380}{4845}\approx${r3(1 - 2380 / 4845)}\).`],
      `≈ ${r3(1 - 2380 / 4845)}`],
    ["An arrangement", "Six friends, including Ava and Ben, line up at random. Find P(Ava and Ben are next to each other).",
      [S`Together: \(5!\times2!=240\). All: \(6!=720\).`, S`\(\frac{240}{720}=\frac13\).`],
      "1/3",
      fig(tilesSvg(["A", "B", "C", "D", "E", "F"], { groups: [[0, 1]], colors: { A: "red", B: "red" } }))],
    ["Letters", "The letters of ACCESS are arranged at random. Find P(the two C's are together).",
      [S`All: \(\frac{6!}{2!\,3!}=60\). CC together: block + A, E, S, S, S: \(\frac{5!}{3!}=20\).`, S`\(\frac{20}{60}=\frac13\).`],
      `${countPerms("ACCESS".split(""), (a) => a.join("").includes("CC"))}/${multi("ACCESS")} = 1/3`],
  ]),

  practice([
    q("committee", "A 3-person committee is chosen at random from 5 boys and 4 girls. What is P(all girls)?", frac(1, 21), "₄C₃ ÷ ₉C₃.", [S`\(\frac4{84}\).`], "1/21"),
    q("cards", "Two cards are dealt. What is P(both are aces)? Use combinations.", frac(1, 221), "₄C₂ ÷ ₅₂C₂.", [S`\(\frac6{1326}\).`], "1/221"),
    q("arrangement", "The letters of MATH are arranged at random. What is P(the arrangement starts with a vowel)?", frac(1, 4), "A first: 3! of 4!.", [S`\(\frac{6}{24}\).`], "1/4"),
    q("at least", "4 people are chosen from 6 seniors and 4 juniors. What is P(at least one junior)?", frac(13, 14), "1 − ₆C₄/₁₀C₄.", [S`\(1-\frac{15}{210}\).`], "13/14"),
    q("order", "When should you use combinations to count outcomes?", choice(["when the order of selection does not matter", "when the objects are arranged in a line", "when repetition is allowed", "only with cards"], 0), "Hands, committees, samples.", ["Order does not matter."], "order does not matter"),
  ]),

  ...hard([
    ["A full house", "Find the probability of being dealt a full house (three of one rank and two of another) in a 5-card hand.",
      [S`Choose the rank for the three (13) and its 3 suits (\(\binom43\)); the rank for the pair (12) and its 2 suits (\(\binom42\)).`, S`\(13\cdot4\cdot12\cdot6=3744\).`, S`\(P=\frac{3744}{2\,598\,960}\approx0.00144\).`],
      "≈ 0.00144"],
    ["Birthdays", "Find the probability that at least two people in a class of 30 share a birthday (ignore February 29).",
      [S`\(P(\text{all different})=\frac{365\cdot364\cdots336}{365^{30}}\approx${r3(1 - bday(30))}\).`, S`\(P(\text{shared})=1-${r3(1 - bday(30))}\approx${r3(bday(30))}\).`],
      `≈ ${r3(bday(30))}`],
  ], [
    q("hard", "Five cards are dealt. What is P(exactly 3 face cards)? (4 decimals)", num(r3((C(12, 3) * C(40, 2)) / C(52, 5), 4), 0.0001), "₁₂C₃ × ₄₀C₂ ÷ ₅₂C₅.", [S`\(\frac{220\times780}{2\,598\,960}\).`], `${r3((C(12, 3) * C(40, 2)) / C(52, 5), 4)}`),
    q("hard", "Eight people, including 2 friends, sit at random around a round table. What is P(the friends sit together)?", frac(2, 7), "(6! × 2) ÷ 7!.", [S`\(\frac{1440}{5040}\).`], "2/7"),
    q("hard", "A 4-digit PIN with all digits different is chosen at random. What is P(its digits are in increasing order)?", frac(1, 24), "Each set of 4 digits gives 4! orders; one is increasing.", [S`\(\frac{\binom{10}4}{P(10,4)}=\frac1{4!}\).`], "1/24"),
  ]),

  wrapUp({
    qas: [
      ["How do I choose between nPr and nCr in a probability?", "Ask whether the order of the selection matters; then count the top and the bottom the same way."],
      ["Why can I use counting at all?", "Because every hand, committee or arrangement is equally likely when the selection is random."],
      ["What is the fastest way to handle “at least one”?", "1 − P(none)."],
      ["Why is the birthday probability so high?", "With 23 people there are 253 pairs, each a chance for a match."],
      ["How can I check a counting probability?", "Make sure the probabilities of all the cases add to 1, or simulate."],
    ],
    summary: [
      "P(A) = n(A)/n(S) with counted outcomes.",
      "Order does not matter → combinations; order matters → permutations.",
      "Exactly k: choose k from the group AND the rest from the others.",
      "At least one: 1 − P(none).",
    ],
    next: "2.9 reviews the whole probability chapter.",
  }),
];
