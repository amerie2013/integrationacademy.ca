// MDM4U Worksheet 3.6 — The Hypergeometric Distribution (teacher edition)
import { svgT, barsSvg, poolSvg } from "./figT.mjs";
import { C, r3, hyp, bin } from "../../mdm4u/count.mjs";

const S = String.raw;

const EXAMPLES = [
  { title: "Committee", q: "A committee of 4 is chosen from 6 seniors and 5 juniors. Find the distribution of X = number of juniors.", fig: svgT(barsSvg([0, 1, 2, 3, 4].map((x) => hyp(11, 5, 4, x)), { labels: [0, 1, 2, 3, 4], histogram: true, top: true, fmt: (v) => v.toFixed(3) }), 4.4), steps: [S`$P(x)=\frac{\binom5x\binom6{4-x}}{\binom{11}4}$, $\binom{11}4=330$.`, "15, 100, 150, 60, 5 (÷330)."], ans: "15/330, 100/330, 150/330, 60/330, 5/330" },
  { title: "Expected value", q: "Find E(X) for the committee above.", steps: [S`$\frac{4(5)}{11}$.`], ans: `≈ ${r3(20 / 11, 3)}` },
  { title: "Defective items", q: "A crate of 40 apples has 6 bruised. A customer picks 5. Find P(none bruised).", steps: [S`$\frac{\binom{34}5}{\binom{40}5}$.`], ans: `≈ ${r3(hyp(40, 6, 5, 0), 4)}` },
  { title: "At least two", q: "Same crate: find P(at least 2 bruised).", steps: [S`$1-P(0)-P(1)$.`], ans: `≈ ${r3(1 - hyp(40, 6, 5, 0) - hyp(40, 6, 5, 1), 4)}` },
  { title: "Cards", q: "Six cards are dealt. Find P(exactly 2 spades).", steps: [S`$\frac{\binom{13}2\binom{39}4}{\binom{52}6}$.`], ans: `≈ ${r3(hyp(52, 13, 6, 2), 4)}` },
  { title: "Compare with binomial", q: "From a bag of 10 marbles with 4 red, 3 are drawn. Compare P(X = 3) without and with replacement.", fig: svgT(poolSvg([[4, "red", "red"], [6, "gray", "other"]], { per: 10 }), 3.8), steps: [S`Without: $\frac{\binom43}{\binom{10}3}=\frac4{120}$. With: $0.4^3=0.064$.`], ans: `${r3(4 / 120, 4)} vs 0.064` },
  { title: "Capture–recapture", q: "60 deer are tagged. Later, 18 of 75 deer seen are tagged. Estimate the herd size.", steps: [S`$\frac{18}{75}=\frac{60}N\Rightarrow N=250$.`], ans: "about 250" },
  { title: "Range of X", q: "N = 12, a = 9, r = 5. What are the possible values of X?", steps: ["At most 3 failures exist, so at least 2 successes: X = 2, 3, 4, 5."], ans: "2 to 5" },
  { title: "Technology", q: "Use =HYPGEOM.DIST(x, r, a, N, FALSE) to find P(X = 2) for N = 30, a = 8, r = 6.", steps: ["=HYPGEOM.DIST(2, 6, 8, 30, FALSE)."], ans: `≈ ${r3(hyp(30, 8, 6, 2), 4)}` },
];

const PROBLEMS = [
  { level: 1, q: "From 5 red and 5 blue marbles, 4 are drawn. Find P(exactly 2 red).", ans: S`$\frac{\binom52^2}{\binom{10}4}=\frac{100}{210}=\frac{10}{21}$` },
  { level: 1, q: "N = 20, a = 5, r = 4. Find E(X).", ans: "1" },
  { level: 1, q: "Explain why the number of women on a randomly chosen committee is hypergeometric, not binomial.", ans: "people are chosen without replacement, so the probability changes after each choice" },
  { level: 2, q: "A box of 15 batteries has 3 dead. Four are chosen. Find P(no dead) and P(at least one dead).", ans: `${r3(hyp(15, 3, 4, 0), 4)}; ${r3(1 - hyp(15, 3, 4, 0), 4)}` },
  { level: 2, q: "Five cards are dealt. Find P(exactly 3 face cards).", ans: `${r3(hyp(52, 12, 5, 3), 4)}` },
  { level: 2, q: "A jury of 12 is chosen from 20 women and 15 men. Find E(number of women).", ans: S`$\frac{12(20)}{35}\approx${r3(240 / 35, 2)}$` },
  { level: 2, q: "Build the full distribution for N = 8, a = 3, r = 3 and draw the histogram.", ans: "10/56, 30/56, 15/56, 1/56", space: 4.5 },
  { level: 2, q: "A lottery draws 5 of 30 numbers. Find P(a ticket matches exactly 2).", ans: `${r3(hyp(30, 5, 5, 2), 4)}` },
  { level: 3, space: 4.5, q: "A class of 28 has 10 left-handed students. A sample of 7 is chosen. Find P(at most 1 left-handed) and compare with a binomial estimate.", ans: `${r3(hyp(28, 10, 7, 0) + hyp(28, 10, 7, 1), 4)} vs ${r3(bin(7, 10 / 28, 0) + bin(7, 10 / 28, 1), 4)}` },
  { level: 3, space: 4.5, q: "A shipment of 500 chips has 20 defective. An inspector tests 10 and rejects the shipment if any are defective. Find P(rejected) with both models. Why are they close?", ans: `hypergeometric ${r3(1 - hyp(500, 20, 10, 0), 4)}; binomial ${r3(1 - 0.96 ** 10, 4)}; the sample is 2% of the shipment` },
  { level: 3, space: 4.5, q: "Show that E(X) = ra/N for N = 6, a = 2, r = 3 by computing Σ x P(x).", ans: S`$P(0)=\frac4{20}$, $P(1)=\frac{12}{20}$, $P(2)=\frac4{20}$: $E=\frac{20}{20}=1=\frac{3\cdot2}6$` },
  { level: 3, space: 4.5, q: "In capture–recapture, 100 fish are tagged and a sample of 120 contains 15 tagged. Estimate N, and explain one assumption of the method.", ans: "800; e.g. tagged fish mix randomly and the population does not change" },
  { level: 3, space: 5, q: "A hand of 13 cards is dealt. Find P(it contains all four aces) and the expected number of aces.", ans: S`$\frac{\binom{48}9}{\binom{52}{13}}\approx${r3(C(48, 9) / C(52, 13), 4)}$; $E=1$` },
];

export const WS = {
  code: "3.6",
  title: "The Hypergeometric Distribution",
  bigideas: S`Sampling $r$ items without replacement from $N$ items with $a$ successes gives $P(X=x)=\frac{\binom ax\binom{N-a}{r-x}}{\binom Nr}$ and $E(X)=\frac{ra}N$. It differs from the binomial because the draws are dependent, but the two agree when the sample is small compared with the population.`,
  goals: ["Recognize sampling without replacement.", "Calculate hypergeometric probabilities.", "Use E(X) = ra/N.", "Compare with the binomial; capture–recapture."],
  curriculum: "B1.1–B1.3; A2.5",
  vocab: [["N, a, r", "population, successes, sample size"], ["$E(X)=\\frac{ra}N$", "expected successes"]],
  hook: "A bag of 20 candies has 5 sour ones. If you grab 4, how many sour candies do you expect? Is getting none likely?",
  concepts: [
    ["1. Formula", S`${svgT(poolSvg([[3, "red", "a"], [5, "gray", "N − a"]], { per: 8 }), 3.4)}Choose $x$ from $a$ and $r-x$ from $N-a$; divide by $\binom Nr$.`],
    ["2. Mean", S`$E(X)=\frac{ra}N$, the binomial mean with $p=\frac aN$.`],
    ["3. Versus binomial", "Large N, small r: nearly the same. Small N: extremes less likely without replacement."],
  ],
  tips: ["Two groups in the numerator.", "Check the range of x.", "Use complements.", "Technology: HYPGEOM.DIST.", "Compare models when N is large."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
