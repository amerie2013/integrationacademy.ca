// MDM4U Worksheet 3.4 — The Binomial Distribution (teacher edition)
import { svgT, barsSvg, treeSvg, fullTree } from "./figT.mjs";
import { r3, bin, binLE } from "../../mdm4u/count.mjs";

const S = String.raw;

const EXAMPLES = [
  { title: "Conditions", q: "Is X binomial? (a) heads in 20 tosses (b) aces in a 5-card hand (c) defective items in 10 chosen from a huge batch with 3% defective.", steps: ["(a) yes. (b) no: without replacement from 52. (c) yes (approximately independent, p = 0.03)."], ans: "yes, no, yes" },
  { title: "Tree to formula", q: "A spinner lands on blue with p = 0.4. For 3 spins, find P(exactly 1 blue) with a tree, then with the formula.", fig: svgT(treeSvg(fullTree([["B", "N"], ["B", "N"], ["B", "N"]], [["0.4", "0.6"], ["0.4", "0.6"], ["0.4", "0.6"]]), { heads: ["1", "2", "3"] }), 4.6), steps: [S`Paths BNN, NBN, NNB: $3(0.4)(0.6)^2$.`, S`$\binom31(0.4)^1(0.6)^2=0.432$.`], ans: "0.432" },
  { title: "Full distribution", q: "Light bulbs are defective with probability 0.005. For a pack of 4, find the distribution of the number defective.", steps: [S`$P(0)=0.995^4\approx${r3(bin(4, 0.005, 0), 4)}$, $P(1)\approx${r3(bin(4, 0.005, 1), 4)}$, $P(2)\approx${bin(4, 0.005, 2).toExponential(2)}$.`, "P(3) and P(4) are negligible."], ans: `${r3(bin(4, 0.005, 0), 4)}, ${r3(bin(4, 0.005, 1), 4)}, …` },
  { title: "Exactly", q: "A player makes 80% of free throws. Find P(exactly 8 of 10).", steps: [S`$\binom{10}8(0.8)^8(0.2)^2$.`], ans: `≈ ${r3(bin(10, 0.8, 8), 4)}` },
  { title: "At most", q: "Same player: find P(at most 7 of 10).", steps: [S`$1-P(8)-P(9)-P(10)$.`], ans: `≈ ${r3(binLE(10, 0.8, 7), 4)}` },
  { title: "At least one", q: "A seed germinates with probability 0.9. Find P(at least one of 4 seeds fails).", steps: [S`$1-0.9^4$.`], ans: `${r3(1 - 0.9 ** 4, 4)}` },
  { title: "Expected value", q: "15% of customers buy a warranty. In 60 sales, how many are expected to buy one? Which number of buyers is most likely?", fig: svgT(barsSvg(Array.from({ length: 19 }, (_, x) => bin(60, 0.15, x)), { labels: Array.from({ length: 19 }, (_, x) => x), histogram: true, hl: [9], fmt: (v) => v.toFixed(2) }), 5), steps: [S`$E=60(0.15)=9$.`, "The histogram peaks at 9."], ans: "9" },
  { title: "Shape", q: "Describe the shape of the binomial histograms for n = 10 with p = 0.2, 0.5 and 0.8.", steps: ["p = 0.2: skewed right, peak near 2.", "p = 0.5: symmetric about 5. p = 0.8: skewed left, peak near 8."], ans: "right-skewed, symmetric, left-skewed" },
  { title: "Technology", q: "Use =BINOM.DIST(x, n, p, cumulative) to find P(X ≤ 3) for n = 12, p = 0.25.", steps: [S`=BINOM.DIST(3, 12, 0.25, TRUE).`], ans: `≈ ${r3(binLE(12, 0.25, 3), 4)}` },
];

const PROBLEMS = [
  { level: 1, q: "n = 6, p = 0.5. Find P(X = 4).", ans: "15/64 ≈ 0.2344" },
  { level: 1, q: "n = 8, p = 0.1. Find P(X = 0) and E(X).", ans: `${r3(0.9 ** 8, 4)}; 0.8` },
  { level: 1, q: "List the four conditions of a binomial experiment.", ans: "fixed n; two outcomes; constant p; independent trials" },
  { level: 2, q: "A test has 10 questions with 4 choices. Guessing, find P(exactly 4 correct) and P(at least 1 correct).", ans: `${r3(bin(10, 0.25, 4), 4)}; ${r3(1 - 0.75 ** 10, 4)}` },
  { level: 2, q: "A die is rolled 12 times. Find P(exactly two 6s) and E(number of 6s).", ans: `${r3(bin(12, 1 / 6, 2), 4)}; 2` },
  { level: 2, q: "70% of commuters drive. In a sample of 8, find P(at least 6 drive).", ans: `${r3(1 - binLE(8, 0.7, 5), 4)}` },
  { level: 2, q: "Build the distribution table for n = 4, p = 0.3 and draw its histogram.", ans: `${[0, 1, 2, 3, 4].map((x) => r3(bin(4, 0.3, x), 4)).join(", ")}`, space: 4.5 },
  { level: 2, q: "A binomial variable has E(X) = 4.5 and n = 15. Find p and P(X = 4).", ans: `0.3; ${r3(bin(15, 0.3, 4), 4)}` },
  { level: 3, space: 4.5, q: "How many times must a die be rolled so that P(at least one 6) exceeds 0.95?", ans: S`$1-(5/6)^n>0.95\Rightarrow n\ge17$` },
  { level: 3, space: 4.5, q: "A box of 25 parts is accepted if a random sample of 5 (from a large production run with 4% defective) has no defective parts. Find P(accepted). What defect rate gives a 50% chance of acceptance?", ans: S`$0.96^5\approx${r3(0.96 ** 5, 4)}$; $(1-p)^5=0.5\Rightarrow p\approx${r3(1 - 0.5 ** 0.2, 3)}$` },
  { level: 3, space: 4.5, q: "In a binomial experiment with n = 5, P(X = 1) = P(X = 2). Find p.", ans: S`$5pq^4=10p^2q^3\Rightarrow q=2p\Rightarrow p=\frac13$` },
  { level: 3, space: 4.5, q: "A family has 5 children (girls and boys equally likely). Find P(more girls than boys) and explain why it equals 1/2.", ans: "P(3) + P(4) + P(5) = 16/32 = 1/2; by symmetry with “more boys”" },
  { level: 3, space: 5, q: "An airline sells 105 tickets for 100 seats; each passenger shows up with probability 0.94 independently. Find P(more than 100 show up) using technology.", ans: `P(X ≥ 101) ≈ ${r3(1 - binLE(105, 0.94, 100), 4)}` },
];

export const WS = {
  code: "3.4",
  title: "The Binomial Distribution",
  bigideas: S`For $n$ independent trials with constant success probability $p$, the number of successes $X$ is binomial: $P(X=x)=\binom nx p^xq^{n-x}$, $E(X)=np$. The histogram peaks near $np$; it is symmetric when $p=0.5$.`,
  goals: ["Check binomial conditions.", "Calculate binomial probabilities.", "Use cumulative probabilities and complements.", "Find E(X) = np; describe shape."],
  curriculum: "B1.4",
  vocab: [["$n,p,q$", "trials, success, failure"], ["$\\binom nx$", "arrangements of x successes"], ["$E(X)=np$", "expected successes"]],
  hook: "If you guess on a 10-question true/false quiz, what score is most likely? How likely is a perfect score?",
  concepts: [
    ["1. Conditions", "Fixed n, two outcomes, constant p, independent trials."],
    ["2. Formula", S`${svgT(barsSvg([0, 1, 2, 3, 4, 5, 6].map((x) => bin(6, 0.5, x)), { labels: [0, 1, 2, 3, 4, 5, 6], histogram: true, fmt: (v) => v.toFixed(2) }), 3.8)}$P(X=x)=\binom nxp^xq^{n-x}$.`],
    ["3. Mean and shape", S`$E(X)=np$; skew depends on $p$.`],
  ],
  tips: ["Check conditions first.", "At least one → 1 − qⁿ.", "≥ includes the endpoint.", "Use technology for big n.", "Keep precision."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
