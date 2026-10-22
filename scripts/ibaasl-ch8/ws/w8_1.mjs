// IB AA SL Worksheet 8.1 — Theoretical and Experimental Probability (teacher edition)
import { svgT } from "./figT.mjs";
import { gridDoc, relFreqDoc } from "../figs8.mjs";

const S = String.raw;
const D = [1, 2, 3, 4, 5, 6];
const RUN = (() => { let s = 29, c = 0; return Array.from({ length: 50 }, (_, i) => { s = (s * 1103515245 + 12345) % 2147483648; if (s / 2147483648 < 1 / 6) c++; return c / (i + 1); }); })();

const EXAMPLES = [
  { title: "A single event", q: "A card is chosen from cards numbered 1 to 20. Find P(a multiple of 3).",
    steps: ["Multiples: 3, 6, 9, 12, 15, 18 — six cards."], ans: S`$\frac{6}{20}=\frac{3}{10}$` },
  { title: "The complement", q: "P(a train is on time) = 0.86. Find P(the train is not on time).",
    steps: [S`$1-0.86$.`], ans: "0.14" },
  { title: "A sample-space grid", q: "Two dice are rolled. Find P(the difference between the scores is 1).",
    fig: svgT(gridDoc(D, D, { mark: (a, b) => Math.abs(a - b) === 1, cell: (a, b) => Math.abs(a - b), rowName: "first die", colName: "second die" }), 6),
    steps: ["10 cells have difference 1."], ans: S`$\frac{10}{36}=\frac{5}{18}$` },
  { title: "Listing outcomes", q: "Three coins are tossed. List the outcomes and find P(exactly two heads).",
    steps: ["HHH, HHT, HTH, THH, HTT, THT, TTH, TTT.", "Exactly two heads: HHT, HTH, THH."], ans: S`$\frac38$` },
  { title: "Relative frequency", q: "A spinner lands on blue 46 times in 200 spins. Estimate P(blue).",
    steps: [S`$\frac{46}{200}$.`], ans: "0.23" },
  { title: "Expected number", q: "Using the estimate 0.23, how many blues are expected in 500 spins?",
    steps: [S`$500\times0.23$.`], ans: "115" },
  { title: "More trials", q: "The graph shows the relative frequency of sixes in 50 rolls of a die. Comment on it.",
    fig: svgT(relFreqDoc(RUN, 1 / 6), 6.5),
    steps: ["It varies a lot at first, then settles near 1/6 ≈ 0.167."], ans: "settles towards 1/6" },
  { title: "A missing count", q: "A box has 8 green pens and some blue pens. P(green) = 2/5. How many blue pens are there?",
    steps: [S`$\frac{8}{8+b}=\frac25\Rightarrow b=12$.`], ans: "12" },
  { title: "Fair or biased?", q: "A coin gives 70 heads in 100 tosses. Is it likely to be fair?",
    steps: ["Expected about 50; 70 is far from 50 after many tosses.", "This suggests the coin may be biased (more tosses would help decide)."], ans: "probably biased" },
];

const PROBLEMS = [
  { level: 1, q: "A fair die is rolled. Find P(a factor of 6).", recap: "Single event.", ans: S`$\frac46=\frac23$` },
  { level: 1, q: "P(snow) = 0.08. Find P(no snow).", recap: "Complement.", ans: "0.92" },
  { level: 1, q: "A letter is chosen from the word PROBABILITY. Find P(B).", recap: "Counting.", ans: S`$\frac{2}{11}$` },
  { level: 2, q: "Two dice are rolled. Find P(both show an even number).", recap: "Grid.", ans: S`$\frac{9}{36}=\frac14$` },
  { level: 2, q: "Two dice are rolled. Find P(the sum is a prime number).", recap: "Grid.", ans: S`$\frac{15}{36}=\frac{5}{12}$`,
    fig: svgT(gridDoc(D, D, { cell: (a, b) => a + b, rowName: "first die", colName: "second die" }), 6) },
  { level: 2, q: "A drawing pin lands point up 168 times in 400 drops. Estimate P(point up) and the number expected in 150 drops.", recap: "Estimate.", ans: "0.42; 63" },
  { level: 2, q: "Three coins are tossed. Find P(at least one tail).", recap: "Complement.", ans: S`$1-\frac18=\frac78$` },
  { level: 2, q: "P(a part is faulty) = 0.035. How many faulty parts are expected in 2000?", recap: "Expected number.", ans: "70" },
  { level: 3, space: 4, q: "A bag has 3 red, 5 blue and x green balls. P(blue) = 1/4. Find x and P(green).", recap: "Missing count.", ans: S`$x=12$; $\frac{12}{20}=\frac35$` },
  { level: 3, space: 4, q: "A four-sided die (1–4) and a six-sided die are rolled. Find P(the sum is 5).", recap: "Unequal dice.", ans: S`$\frac{4}{24}=\frac16$` },
  { level: 3, space: 4, q: "Two students estimate P(heads) for a coin: one gets 13/20, the other 248/500. Which estimate is better, and why?", recap: "Reliability.", ans: "248/500 = 0.496: many more trials" },
  { level: 3, space: 4, q: "A spinner has sectors with P(1) = 0.3, P(2) = 0.25, P(3) = x and P(4) = 2x. Find x and the expected number of 4s in 120 spins.", recap: "Sum to 1.", ans: S`$x=0.15$; 36` },
  { level: 3, space: 4, q: "Two dice are rolled. Find P(the product is greater than 15).", recap: "Grid.", ans: S`$\frac{11}{36}$` },
];

export const WS = {
  code: "8.1",
  title: "Theoretical and Experimental Probability",
  bigideas: S`For equally likely outcomes $P(A)=\frac{n(A)}{n(U)}$; list outcomes or use a sample-space grid. $P(A')=1-P(A)$. When outcomes are not equally likely, estimate probability by relative frequency $\frac{\text{successes}}{\text{trials}}$; more trials give a better estimate. The expected number of occurrences in $n$ trials is $np$.`,
  goals: ["Find theoretical probabilities.", "Use complements.", "Estimate from relative frequency.", "Find expected numbers."],
  curriculum: "SL 4.5",
  vocab: [["Sample space", "all possible outcomes"], ["Relative frequency", "successes ÷ trials"], ["Expected number", S`$np$`]],
  hook: "Each student rolls a die 30 times and counts sixes. Pool the class results: how close is the class relative frequency to 1/6?",
  concepts: [
    ["1. Equally likely outcomes", S`${svgT(gridDoc(D, D, { mark: (a, b) => a + b === 7, cell: (a, b) => a + b, rowName: "first die", colName: "second die" }), 5)} P(sum 7) = 6/36.`],
    ["2. Complement", S`$P(A')=1-P(A)$.`],
    ["3. Experiments", "Relative frequency estimates P; expected number np."],
  ],
  tips: ["Check outcomes are equally likely.", "Order matters in two-dice grids.", "Use 1 − P for 'not'.", "More trials, better estimate.", "Expected number need not be whole."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
