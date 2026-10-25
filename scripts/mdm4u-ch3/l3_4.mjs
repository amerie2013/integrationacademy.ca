// MDM4U 3.4 — The Binomial Distribution: conditions (fixed n, independent trials, two outcomes, constant p),
// P(X = x) = nCx p^x q^(n−x), distribution tables and histograms, cumulative probabilities, E(X) = np
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, fig, barsSvg, treeSvg, fullTree } from "./lib.mjs";
import { C, r3, bin, binLE } from "../mdm4u/count.mjs";

export const TITLE = "3.4 The Binomial Distribution";
export const ID = "f448a521-553a-410b-906c-326af377c807";
const S = String.raw;

const bulbs = [0, 1, 2, 3, 4].map((x) => bin(4, 0.005, x)); // curriculum-style: 0.5% defective, 4 bulbs

export const blocks = () => [
  intro({
    icon: "🎯",
    title: "The Binomial Distribution",
    overview: S`A <strong>binomial experiment</strong> has a fixed number \(n\) of independent trials, each with two outcomes (success or failure) and the same probability of success \(p\). If \(X\) counts the successes, then \[P(X=x)=\binom nx p^x q^{\,n-x},\quad q=1-p,\quad x=0,1,\ldots,n.\] The \(\binom nx\) counts the arrangements of \(x\) successes among \(n\) trials; \(p^xq^{n-x}\) is the probability of each arrangement. The expected number of successes is \(E(X)=np\).`,
    goals: [
      "recognize the four conditions of a binomial experiment;",
      "calculate binomial probabilities with the formula and technology;",
      "build the distribution table and probability histogram;",
      "find cumulative probabilities such as P(X ≤ k) and P(X ≥ k);",
      "use E(X) = np and describe how the shape depends on p.",
    ],
    curriculum: "B1.4 (recognize conditions that give rise to a binomial distribution; calculate probabilities; represent the distribution in a table and a probability histogram; connect to P(X = x) = nCx p^x (1 − p)^(n − x))",
    prior: [
      ["Evaluate ₅C₂.", "10."],
      ["Evaluate 0.3² × 0.7³.", "0.03087."],
      ["Three coins: P(exactly two heads)?", "3/8."],
    ],
    words: [
      ["Trial", "one repetition with two outcomes", "one free throw"],
      ["p, q", "P(success), P(failure) = 1 − p", "p = 0.7, q = 0.3"],
      ["Binomial random variable", "number of successes in n trials", "X = makes in 10 shots"],
      ["E(X) = np", "expected number of successes", "10 × 0.7 = 7"],
    ],
  }),

  section("📌 Where the formula comes from", S`
  <p>A player makes each free throw with \(p=0.7\). In 3 shots, the outcomes with exactly 2 makes are MMX, MXM, XMM — \(\binom32=3\) arrangements, each with probability \(0.7^2(0.3)\):</p>
  ${fig(treeSvg(fullTree([["M", "X"], ["M", "X"], ["M", "X"]], [["0.7", "0.3"], ["0.7", "0.3"], ["0.7", "0.3"]]), { heads: ["1", "2", "3"], leaf: (p) => p.join("") }), "each path with 2 M's has probability 0.7² × 0.3")}
  \[P(X=2)=\binom32(0.7)^2(0.3)^1=3(0.147)=0.441.\]
  ${table(["Condition", "Check"], [["fixed number of trials n", "3 shots"], ["two outcomes per trial", "make / miss"], ["constant p", "0.7 every time"], ["independent trials", "one shot does not affect the next"]])}`),

  section("📌 Distribution and shape", S`
  <p>A manufacturer finds that 0.5% of light bulbs are defective. For a pack of 4 bulbs, X = number defective:</p>
  ${table(["x", "0", "1", "2", "3", "4"], [["P(X = x)", ...bulbs.map((v) => (v < 0.0001 ? v.toExponential(2) : String(r3(v, 4))))]])}
  ${fig(barsSvg([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((x) => bin(10, 0.3, x)), { labels: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], histogram: true, hl: [3], fmt: (v) => v.toFixed(2), xlabel: "x (n = 10, p = 0.3)", ylabel: "P(X = x)" }), "the histogram peaks near np = 3; skewed right because p < 0.5")}
  ${keyIdea(S`\(p=0.5\): symmetric. \(p<0.5\): skewed right (tail to high values). \(p>0.5\): skewed left. The peak is near \(np\).`)}`),

  section("📌 Explore", S`<p>Change n and p. Use P(X = k), P(X ≤ k) and P(X ≥ k) to shade bars and read the probability; watch the peak follow np.</p>`),

  widget("binomialDist", { init: [10, 0.3] }),

  section("📌 Watch out", watchOut([
    "Check all four conditions — drawing without replacement from a small group is not binomial (see 3.6).",
    "Use the complement for “at least one”: 1 − P(X = 0).",
    "P(X ≥ 3) includes 3; P(X > 3) does not.",
    "Keep full calculator precision until the final answer.",
  ])),

  examples([
    ["One probability", "A multiple-choice test has 8 questions with 4 options each. A student guesses. Find P(exactly 3 correct).",
      [S`\(n=8\), \(p=0.25\).`, S`\(\binom83(0.25)^3(0.75)^5=56(0.015625)(0.2373)\).`],
      `≈ ${r3(bin(8, 0.25, 3), 4)}`],
    ["At least one", "A drug causes a side effect in 4% of patients. Find P(at least one of 12 patients has the side effect).",
      [S`\(1-P(X=0)=1-0.96^{12}\).`],
      `≈ ${r3(1 - 0.96 ** 12, 4)}`],
    ["Cumulative", "A basketball player makes 70% of free throws. Find P(she makes at most 7 of 10).",
      [S`\(P(X\le7)=1-P(8)-P(9)-P(10)\).`, S`\(1-(${r3(bin(10, 0.7, 8), 4)}+${r3(bin(10, 0.7, 9), 4)}+${r3(bin(10, 0.7, 10), 4)})\).`],
      `≈ ${r3(binLE(10, 0.7, 7), 4)}`],
    ["Expected value", "A survey finds 35% of drivers use their phone while driving. In a random sample of 40 drivers, how many are expected to do so?",
      [S`\(E(X)=np=40(0.35)\).`],
      "14 drivers"],
    ["Is it binomial?", "Decide whether each is binomial: (a) the number of 6s in 10 rolls; (b) the number of aces in a 5-card hand; (c) rolling until a 6 appears.",
      [S`(a) yes: \(n=10\), \(p=\frac16\), independent.`, S`(b) no: cards are drawn without replacement, so \(p\) changes.`, S`(c) no: the number of trials is not fixed.`],
      "yes, no, no"],
  ]),

  practice([
    q("formula", "n = 5, p = 0.4. Find P(X = 2). (4 decimals)", num(r3(bin(5, 0.4, 2), 4), 0.0001), "₅C₂(0.4)²(0.6)³.", [S`\(10(0.16)(0.216)\).`], `${r3(bin(5, 0.4, 2), 4)}`),
    q("coins", "A coin is tossed 6 times. What is P(exactly 3 heads)? (4 decimals)", num(0.3125, 0.0001), "₆C₃ / 64.", [S`\(\frac{20}{64}\).`], "0.3125"),
    q("mean", "n = 50, p = 0.12. What is E(X)?", num(6), "np.", [S`\(50(0.12)\).`], "6"),
    q("none", "A die is rolled 5 times. What is P(no 6s)? (4 decimals)", num(r3((5 / 6) ** 5, 4), 0.0001), "(5/6)⁵.", [S`\(0.4019\).`], `${r3((5 / 6) ** 5, 4)}`),
    q("conditions", "Which is NOT a condition of a binomial experiment?", choice(["the trials are drawn without replacement", "a fixed number of trials", "two outcomes per trial", "a constant probability of success"], 0), "Independence is needed.", ["Without replacement breaks independence."], "without replacement"),
  ]),

  ...hard([
    ["How many trials?", "A rare card appears in 15% of packs. How many packs must you buy so that P(at least one rare card) is at least 0.9?",
      [S`\(1-0.85^n\ge0.9\Rightarrow0.85^n\le0.1\).`, S`\(n\ge\frac{\log0.1}{\log0.85}\approx14.2\), so \(n=15\).`],
      "15 packs"],
    ["Quality control", "A machine makes 3% defective parts. An inspector accepts a box of 20 if it has at most 1 defective part. Find P(the box is accepted) and the expected number of defective parts.",
      [S`\(P(0)+P(1)=0.97^{20}+20(0.03)(0.97)^{19}\).`, S`\(\approx${r3(bin(20, 0.03, 0), 4)}+${r3(bin(20, 0.03, 1), 4)}\).`, S`\(E=20(0.03)=0.6\).`],
      `≈ ${r3(binLE(20, 0.03, 1), 4)}; 0.6 parts`,
      fig(barsSvg([0, 1, 2, 3, 4, 5].map((x) => bin(20, 0.03, x)), { labels: [0, 1, 2, 3, 4, 5], histogram: true, hl: [0, 1], fmt: (v) => v.toFixed(2), xlabel: "defective parts", ylabel: "P" }), "accepted: 0 or 1 defective (red)")],
  ], [
    q("hard", "A coin is tossed 10 times. What is P(at least 8 heads)? (4 decimals)", num(r3((C(10, 8) + C(10, 9) + 1) / 1024, 4), 0.0001), "(45 + 10 + 1)/1024.", [S`\(\frac{56}{1024}\).`], `${r3(56 / 1024, 4)}`),
    q("hard", "In a binomial distribution E(X) = 6 and n = 24. Find P(X = 0). (Give 4 decimals.)", num(r3(0.75 ** 24, 4), 0.0001), "p = 0.25.", [S`\(0.75^{24}\).`], `${r3(0.75 ** 24, 4)}`),
    q("hard", "A test has 10 true/false questions. A student passes with at least 7 correct. If she guesses, what is P(pass)? (4 decimals)", num(r3((C(10, 7) + C(10, 8) + C(10, 9) + 1) / 1024, 4), 0.0001), "(120 + 45 + 10 + 1)/1024.", [S`\(\frac{176}{1024}\).`], `${r3(176 / 1024, 4)}`),
  ]),

  wrapUp({
    qas: [
      ["What are the conditions for a binomial distribution?", "Fixed n, two outcomes, constant p, independent trials."],
      ["Why is there a combination in the formula?", "It counts the different orders in which the x successes can occur."],
      ["How do I find P(at least one)?", "1 − P(X = 0) = 1 − qⁿ."],
      ["What is the expected number of successes?", "np."],
      ["What decides the shape?", "p: symmetric at 0.5, skewed right for small p, skewed left for large p."],
    ],
    summary: [
      "P(X = x) = nCx pˣ q^(n − x).",
      "Conditions: fixed n, two outcomes, constant p, independent.",
      "E(X) = np.",
      "Cumulative probabilities: add bars or use the complement.",
    ],
    next: "3.5 waits for the first success: the geometric distribution.",
  }),
];
