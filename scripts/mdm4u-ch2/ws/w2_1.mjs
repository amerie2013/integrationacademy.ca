// MDM4U Worksheet 2.1 — Introduction to Probability (teacher edition)
import { svgT, diceGridSvg, spinnerSvg, barsSvg, treeSvg, fullTree, tableSvg } from "./figT.mjs";

const S = String.raw;
const diff = Array.from({ length: 6 }, (_, d) => { let c = 0; for (let a = 1; a <= 6; a++) for (let b = 1; b <= 6; b++) if (Math.abs(a - b) === d) c++; return c; });

const EXAMPLES = [
  { title: "Sample space", q: "A spinner with sections A, B, C, D (equal) is spun and a coin is tossed. List the sample space.", fig: svgT(treeSvg(fullTree([["A", "B", "C", "D"], ["H", "T"]]), { heads: ["spinner", "coin"] }), 4.8), steps: ["A tree with 4 then 2 branches.", "AH, AT, BH, BT, CH, CT, DH, DT."], ans: "8 outcomes" },
  { title: "Theoretical probability", q: "From the sample space above, find P(a vowel and heads).", steps: [S`Vowel: A only. AH: 1 outcome.`, S`$\frac18$.`], ans: "1/8" },
  { title: "Cards", q: "One card is drawn. Find P(a black face card) and P(not a club).", steps: [S`Black face cards: 6: $\frac6{52}=\frac3{26}$.`, S`Not a club: $1-\frac{13}{52}=\frac34$.`], ans: "3/26 and 3/4" },
  { title: "Two dice: difference", q: "Two dice are rolled. Find the probability distribution of the difference (larger minus smaller).", fig: svgT(barsSvg(diff.map((k) => k / 36), { labels: [0, 1, 2, 3, 4, 5], top: diff.map((k) => `${k}/36`), xlabel: "difference", ylabel: "probability", fmt: (v) => v.toFixed(2) }), 5.2), steps: ["Count cells for each difference: 6, 10, 8, 6, 4, 2.", "They add to 36."], ans: "6/36, 10/36, 8/36, 6/36, 4/36, 2/36" },
  { title: "Unequal sectors", q: "A spinner is 1/2 red, 1/3 blue and the rest green. Find P(green) and P(not blue).", fig: svgT(spinnerSvg([["R", 1 / 2, "red"], ["B", 1 / 3, "blue"], ["G", 1 / 6, "green"]], { r: 55 }), 3.2), steps: [S`$1-\frac12-\frac13=\frac16$.`, S`$1-\frac13=\frac23$.`], ans: "1/6 and 2/3" },
  { title: "Discrete or continuous", q: "Classify: (a) the number of goals in a game (b) the height of a student (c) the colour of a car.", steps: ["(a) counted: discrete. (b) measured: continuous. (c) categories that can be listed: discrete."], ans: "discrete, continuous, discrete" },
  { title: "Letters", q: "A letter is chosen at random from the word STATISTICS. Find P(S) and P(a vowel).", steps: [S`10 letters, S appears 3 times: $\frac3{10}$.`, S`Vowels A, I, I: $\frac3{10}$.`], ans: "3/10 and 3/10" },
  { title: "Distribution check", q: "A survey gives P(walk) = 0.18, P(bus) = 0.45, P(car) = 0.27 and P(bike) = x. Find x.", steps: [S`$x=1-0.18-0.45-0.27$.`], ans: "0.1" },
  { title: "Using the complement", q: "Two dice are rolled. Find P(the sum is not 7 or 11).", steps: [S`Sum 7: 6; sum 11: 2.`, S`$1-\frac8{36}=\frac{28}{36}=\frac79$.`], ans: "7/9" },
];

const PROBLEMS = [
  { level: 1, q: "A die is rolled. Find (a) P(a multiple of 3) (b) P(a prime number) (c) P(a number less than 7).", ans: "(a) 1/3 (b) 1/2 (c) 1" },
  { level: 1, q: "One card is drawn. Find P(a red king) and P(not a heart).", ans: "1/26 and 3/4" },
  { level: 1, q: "State whether each sample space is discrete or continuous: (a) shoe sizes sold (b) time to boil water (c) number of texts sent in a day.", ans: "discrete, continuous, discrete" },
  { level: 2, q: "Two dice are rolled. Find P(the sum is a prime number).", ans: S`sums 2, 3, 5, 7, 11: $1+2+4+6+2=15$; $\frac{15}{36}=\frac5{12}$` },
  { level: 2, q: "Use the grid: two dice are rolled and the larger number is recorded. Find the probability distribution.", fig: svgT(diceGridSvg(() => false, { label: (a, b) => Math.max(a, b) }), 4.4), ans: "1/36, 3/36, 5/36, 7/36, 9/36, 11/36 for 1 to 6", space: 4.5 },
  { level: 2, q: "Three coins are tossed. List the sample space and find P(exactly one tail) and P(at least one tail).", ans: "3/8 and 7/8" },
  { level: 2, q: "A spinner has sectors labelled 1, 2, 3, 4 with P(1) = 0.1, P(2) = 0.2, P(3) = 0.3. Find P(4) and P(an odd number).", ans: "0.4 and 0.4" },
  { level: 2, q: "A bag holds 3 red, 5 blue and 2 yellow marbles. One is drawn. Find P(not blue) and P(red or yellow). Why are they equal?", ans: "1/2 and 1/2; “not blue” is the same event as “red or yellow”" },
  { level: 3, space: 4.5, q: "Two dice are rolled. Find P(the product is greater than the sum).", ans: S`$ab>a+b\Leftrightarrow(a-1)(b-1)>1$: both dice at least 2, except (2, 2): $25-1=24$ cells; $\frac{24}{36}=\frac23$` },
  { level: 3, space: 4.5, q: "A biased die has P(6) = 0.3 and the other five faces equally likely. Find P(an even number).", ans: S`each other face $\frac{0.7}5=0.14$; even: $0.14+0.14+0.3=0.58$` },
  { level: 3, space: 4.5, q: "Explain why “P(A) = 1.2” and “P(A) = −0.1” are impossible, and why the probabilities of all outcomes of an experiment add to 1.", ans: "every probability lies from 0 to 1; exactly one outcome occurs each time, so together they are certain" },
  { level: 3, space: 4.5, q: "A target is a square of side 20 cm with a circle of radius 6 cm painted at its centre. A dart lands at a random point of the square. Find P(it lands in the circle). Is this sample space discrete or continuous?", ans: S`$\frac{\pi(36)}{400}\approx0.283$; continuous (any point)` },
  { level: 3, space: 5, q: "Use the table of a 4-sided die (1–4) and a 6-sided die rolled together. Find P(the sum is 5) and the most likely sum.", fig: svgT(tableSvg([["", "1", "2", "3", "4", "5", "6"], ["1", "", "", "", "", "", ""], ["2", "", "", "", "", "", ""], ["3", "", "", "", "", "", ""], ["4", "", "", "", "", "", ""]], { rowHead: true, cw: [30, 34, 34, 34, 34, 34, 34] }), 4.6), ans: S`24 outcomes; sum 5: 4 ways: $\frac4{24}=\frac16$; sums 5, 6 and 7 tie with 4 ways each` },
];

export const WS = {
  code: "2.1",
  title: "Introduction to Probability",
  bigideas: S`An experiment has a sample space $S$ of outcomes; an event $A$ is a subset of $S$. For equally likely outcomes $P(A)=\frac{n(A)}{n(S)}$, a number from 0 to 1. The probabilities of all outcomes form a probability distribution and add to 1; $P(A')=1-P(A)$.`,
  goals: ["Describe sample spaces and events.", "Distinguish discrete and continuous sample spaces.", "Calculate theoretical probabilities.", "Build and check probability distributions."],
  curriculum: "A1.1, A1.2, A1.3",
  vocab: [["Sample space", "all possible outcomes"], ["Event", "a set of outcomes"], ["Complement", "$A'$: not $A$"]],
  hook: "Which is more likely when two dice are rolled: a sum of 7 or a sum of 6 or 8? Vote, then count.",
  concepts: [
    ["1. Sample spaces", S`${svgT(diceGridSvg((a, b) => a + b === 8), 3.8)}Lists, trees and grids show every outcome. Discrete sample spaces are counted; continuous ones are measured.`],
    ["2. Theoretical probability", S`$P(A)=\frac{n(A)}{n(S)}$ for equally likely outcomes; $0\le P(A)\le1$.`],
    ["3. Distributions and complements", S`All outcome probabilities add to 1. $P(A')=1-P(A)$.`],
  ],
  tips: ["Check outcomes are equally likely.", "Count ordered outcomes for two dice.", "Use the complement for “not”.", "Reduce fractions.", "Sanity-check: 0 ≤ P ≤ 1."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
