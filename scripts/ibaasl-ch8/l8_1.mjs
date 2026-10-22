// IB AA SL 8.1 — Theoretical and Experimental Probability: sample spaces, equally likely outcomes, complements, relative frequency, expected numbers
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard } from "./lib.mjs";
import { fig, gridDoc, relFreqDoc, vennDoc } from "./figs8.mjs";

export const TITLE = "8.1 Theoretical and Experimental Probability";
export const ID = "1baa0008-0001-4001-8001-000000000801";
const S = String.raw;
const D = [1, 2, 3, 4, 5, 6];
// a deterministic run of coin tosses for the relative-frequency figure
const RUN = (() => { let s = 11, c = 0; return Array.from({ length: 60 }, (_, i) => { s = (s * 1103515245 + 12345) % 2147483648; if (s / 2147483648 < 0.5) c++; return c / (i + 1); }); })();

export const blocks = () => [
  intro({
    icon: "🎲",
    title: "Theoretical and Experimental Probability",
    overview: S`Probability measures how likely an event is, on a scale from 0 (impossible) to 1 (certain). When all outcomes are equally likely we can calculate it by counting; when they are not, we estimate it by experiment, using relative frequency. In this lesson you will list sample spaces, calculate theoretical probabilities, use complements, estimate probabilities from data, and find the expected number of times an event occurs.`,
    goals: [
      "use the vocabulary of trials, outcomes, sample spaces and events;",
      "calculate \\(P(A)=\\frac{n(A)}{n(U)}\\) for equally likely outcomes;",
      "use the complement \\(P(A')=1-P(A)\\);",
      "estimate probabilities by relative frequency and explain why more trials give better estimates;",
      "find the expected number of occurrences \\(np\\).",
    ],
    curriculum: "SL 4.5 (concepts of trial, outcome, equally likely outcomes, relative frequency, sample space U and event; P(A) = n(A)/n(U); complementary events; expected number of occurrences)",
    prior: [
      ["How many outcomes are there when a die is rolled?", "6."],
      ["Write 15 out of 60 as a decimal.", "0.25."],
      ["What is 0.3 × 200?", "60."],
    ],
    words: [
      ["Sample space U", "the set of all possible outcomes", "{1, 2, 3, 4, 5, 6}"],
      ["Event", "a set of outcomes", "rolling an even number"],
      ["Equally likely", "each outcome has the same probability", "a fair die"],
      ["Complement A′", "the event 'A does not happen'", "not a six"],
      ["Relative frequency", "number of successes ÷ number of trials", "38/100"],
    ],
  }),

  section("📌 Theoretical probability", S`
  <p>When the outcomes are equally likely, \(P(A)=\dfrac{n(A)}{n(U)}\): the number of outcomes in the event divided by the total number of outcomes. For two dice there are 36 equally likely outcomes; a sample-space grid makes counting easy.</p>
  ${fig(gridDoc(D, D, { mark: (a, b) => a + b === 8, cell: (a, b) => a + b, rowName: "first die", colName: "second die" }), "Sum of two dice: 5 of the 36 outcomes give a total of 8, so P(sum 8) = 5/36")}
  ${table(["Event", "Outcomes", "Probability"], [["even number on one die", "2, 4, 6", "3/6 = 1/2"], ["a total of 8 with two dice", "5 cells", "5/36"], ["a double with two dice", "6 cells", "6/36 = 1/6"]])}
  <p>Either A happens or it does not, so \(P(A)+P(A')=1\). This is often the quickest route: \(P(\text{not a double})=1-\frac16=\frac56\).</p>
  ${fig(vennDoc({ a: "P(A)", out: "P(A′)" }, { names: ["A"], shade: ["out"], single: true }), "The complement A′ is everything in U outside A: P(A) + P(A′) = 1")}
  ${keyIdea(S`\(0\le P(A)\le1\); \(P(A)=\frac{n(A)}{n(U)}\) for equally likely outcomes; \(P(A')=1-P(A)\).`)}`),

  section("📌 Experimental probability and expected numbers", S`
  <p>For a biased coin or a drawing pin landing point up, we cannot count outcomes. Instead we repeat the experiment and use the <em>relative frequency</em> \(\frac{\text{successes}}{\text{trials}}\) as an estimate. The more trials, the better the estimate.</p>
  ${fig(relFreqDoc(RUN, 0.5), "Relative frequency of heads in 60 tosses of a fair coin settles towards 0.5")}
  ${fig(gridDoc(["H", "T"], ["H", "T"], { mark: (a, b) => a === "H" && b === "H", cell: (a, b) => a + b, rowName: "first coin", colName: "second coin" }), "Two coins: four equally likely outcomes; P(HH) = 1/4")}
  <p>If an event has probability \(p\) and there are \(n\) trials, the <em>expected number</em> of occurrences is \(np\). Rolling a die 120 times, we expect \(120\times\frac16=20\) sixes — not exactly 20 every time, but about 20 on average.</p>
  ${watchOut([
    "Only use n(A)/n(U) when the outcomes are equally likely.",
    "List or grid the sample space carefully: (2, 6) and (6, 2) are different outcomes.",
    "Relative frequency is an estimate; it changes from experiment to experiment.",
    "The expected number need not be a whole number.",
  ])}`),

  section("📌 Explore", S`<p>Choose an experiment and increase the number of trials. The relative frequency wanders at first, then settles near the theoretical probability (red line). Run it again to see a different sequence.</p>`),

  widget("ibRelFreq", { init: 0 }),

  examples([
    ["Level 1 · Counting outcomes", "A bag has 4 red, 7 green and 9 yellow counters. One is chosen at random. Find P(green) and P(not yellow).",
      [S`\(n(U)=20\); \(P(\text{green})=\frac{7}{20}\).`, S`\(P(\text{not yellow})=1-\frac{9}{20}=\frac{11}{20}\).`],
      S`\(\frac{7}{20}\); \(\frac{11}{20}\)`],
    ["Level 1 · Two dice", "Two fair dice are rolled. Find the probability that the total is at least 10.",
      ["Totals 10, 11, 12: (4,6), (5,5), (6,4), (5,6), (6,5), (6,6) — 6 outcomes."],
      S`\(\frac{6}{36}=\frac16\)`,
      fig(gridDoc(D, D, { mark: (a, b) => a + b >= 10, cell: (a, b) => a + b, rowName: "first die", colName: "second die" }))],
    ["Level 2 · Relative frequency", "A drawing pin is dropped 250 times and lands point up 95 times. Estimate the probability of point up, and the number of point-up landings expected in 600 drops.",
      [S`\(\frac{95}{250}=0.38\).`, S`\(600\times0.38=228\).`],
      "0.38; 228"],
    ["Level 2 · Expected number", "A spinner has P(red) = 0.15. It is spun 80 times. How many reds do you expect? Is getting 17 reds surprising?",
      [S`\(80\times0.15=12\).`, "17 is more than expected but not impossible; variation is normal."],
      "12; not very surprising"],
    ["Level 3 · An unknown count", "A bag contains 5 blue balls and some white balls. P(blue) = 1/4. How many white balls are there? If 3 more blue balls are added, find the new P(blue).",
      [S`\(\frac{5}{5+w}=\frac14\Rightarrow w=15\).`, S`New: \(\frac{8}{23}\).`],
      S`15 white; \(\frac{8}{23}\)`],
  ]),

  practice([
    q("Level 1 · single event", "A fair die is rolled. Find P(a number greater than 4).", num(1 / 3, 0.001),
      "Outcomes 5 and 6.", [S`\(\frac26\).`], S`\(\frac13\)`),
    q("Level 1 · complement", "P(rain) = 0.35. Find P(no rain).", num(0.65, 0.001),
      "1 − P(rain).", [S`\(1-0.35\).`], S`\(0.65\)`),
    q("Level 2 · two dice", "Two dice are rolled. Find P(the total is 5).", num(4 / 36, 0.001),
      "(1,4), (2,3), (3,2), (4,1).", [S`\(\frac{4}{36}\).`], S`\(\frac19\)`),
    q("Level 2 · relative frequency", "A biased coin shows heads 132 times in 200 tosses. Estimate P(heads).", num(0.66, 0.001),
      "132/200.", [S`\(0.66\).`], S`\(0.66\)`),
    q("Level 2 · expected", "P(a component is faulty) = 0.02. How many faulty components are expected in 1500?", num(30),
      "np.", [S`\(1500\times0.02\).`], S`\(30\)`),
  ]),

  ...hard([
    ["Two different dice", "A fair four-sided die (1–4) and a fair six-sided die are rolled and the scores multiplied. Find P(the product is a multiple of 4).",
      ["24 equally likely outcomes.", "Rows 1: (1,4); 2: (2,2), (2,4), (2,6); 3: (3,4); 4: all six.", S`Count \(1+3+1+6=11\): \(P=\frac{11}{24}\).`],
      S`\(\frac{11}{24}\)`,
      fig(gridDoc([1, 2, 3, 4], D, { mark: (a, b) => (a * b) % 4 === 0, cell: (a, b) => a * b, rowName: "4-sided", colName: "6-sided" }), "Products that are multiples of 4 (shaded)")],
    ["Comparing estimates", "Ana spins a spinner 40 times and gets 'A' 14 times; Ben spins it 400 times and gets 'A' 112 times. Give the better estimate of P(A) and explain.",
      [S`Ana: \(0.35\); Ben: \(0.28\).`, "Ben's estimate is based on many more trials, so it is more reliable.", S`Combined: \(\frac{126}{440}\approx0.286\).`],
      "Ben's 0.28 (or combined ≈ 0.286)"],
  ], [
    q("Level 3 · missing count", "A bag has 6 red balls and n green balls. P(green) = 0.6. Find n.", num(9),
      "n/(6 + n) = 0.6.", [S`\(n=0.6(6+n)\Rightarrow0.4n=3.6\).`], S`\(9\)`),
    q("Level 3 · expected value", "A fair die is rolled 90 times. How many times would you expect a prime number?", num(45),
      "Primes 2, 3, 5.", [S`\(90\times\frac12\).`], S`\(45\)`),
    q("Level 3 · two dice", "Two dice are rolled. Find P(the scores differ by exactly 2).", num(8 / 36, 0.001),
      "(1,3), (3,1), (2,4), (4,2), (3,5), (5,3), (4,6), (6,4).", [S`\(\frac{8}{36}\).`], S`\(\frac29\)`),
  ]),

  wrapUp({
    qas: [
      ["When can I use n(A)/n(U)?", "Only when all outcomes are equally likely, such as a fair die or a random choice."],
      ["Why use the complement?", "It is often easier to count what does not happen: P(A) = 1 − P(A′)."],
      ["What is relative frequency?", "The proportion of trials in which the event happened — an estimate of the probability."],
      ["Why do more trials help?", "Random variation averages out, so the relative frequency gets closer to the true probability."],
      ["Does 'expected number' mean exactly that many?", "No — it is the long-run average number, np."],
    ],
    summary: [
      "0 ≤ P(A) ≤ 1.",
      "Equally likely: P(A) = n(A)/n(U).",
      "P(A′) = 1 − P(A).",
      "Relative frequency estimates P; more trials, better estimate.",
      "Expected number = np.",
    ],
    next: "8.2 organises events with Venn diagrams and sample spaces and introduces the addition rule.",
  }),
];
