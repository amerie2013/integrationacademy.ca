// MDM4U Worksheet 3.7 — Comparing Discrete Distributions (teacher edition)
import { svgT, barsSvg, lineSvg, tableSvg } from "./figT.mjs";
import { r3, bin, geo, hyp } from "../../mdm4u/count.mjs";

const S = String.raw;

const EXAMPLES = [
  { title: "Choose a model", q: "Name the model: (a) number of girls among 4 children (b) number of red cards in a 4-card hand (c) number of rolls before a 5 (d) a random lane 1–8 for a race.", steps: ["(a) binomial (b) hypergeometric (c) geometric (d) uniform."], ans: "binomial, hypergeometric, geometric, uniform" },
  { title: "Means", q: "Find E(X) for each model in the previous example.", steps: [S`(a) $4(0.5)=2$ (b) $\frac{4\cdot26}{52}=2$ (c) $\frac{5/6}{1/6}=5$ (d) $4.5$.`], ans: "2, 2, 5, 4.5" },
  { title: "Same mean, different spread", q: "Compare the binomial (n = 4, p = 0.5) and the hypergeometric (N = 52, a = 26, r = 4): P(X = 2).", fig: svgT(barsSvg([0, 1, 2, 3, 4].map((x) => bin(4, 0.5, x)), { labels: [0, 1, 2, 3, 4], histogram: true, top: true, fmt: (v) => v.toFixed(3) }), 4.2), steps: [S`Binomial $0.375$; hypergeometric $\frac{\binom{26}2^2}{\binom{52}4}\approx${r3(hyp(52, 26, 4, 2), 4)}$.`], ans: `0.375 vs ${r3(hyp(52, 26, 4, 2), 4)}` },
  { title: "Shapes", q: "Sketch the shapes: uniform on 1–6, binomial n = 6 p = 0.5, geometric p = 0.5.", steps: ["Flat; symmetric mound; decreasing."], ans: "flat, mound, decreasing" },
  { title: "Population size", q: "P(X = 0) when 5 are drawn from N people, 40% of whom are left-handed; X = number of left-handed people. Compute for N = 10 and N = 1000 and compare with 0.6⁵.", fig: svgT(lineSvg([10, 20, 50, 100, 1000].map((N) => hyp(N, 0.4 * N, 5, 0)), { p: 0.6 ** 5, pLabel: "binomial", xs: [10, 20, 50, 100, 1000], ymax: 0.2, nt: 4, xlabel: "N", ylabel: "P(X = 0)" }), 4.8), steps: [S`N = 10: $\frac{\binom65}{\binom{10}5}=\frac6{252}\approx0.024$; N = 1000: $\approx${r3(hyp(1000, 400, 5, 0), 4)}$.`, S`Binomial: $0.6^5\approx${r3(0.6 ** 5, 4)}$.`], ans: "approaches the binomial as N grows" },
  { title: "Fitting data", q: "Students counted heads in 3 tosses, 80 times: 0: 9, 1: 31, 2: 29, 3: 11. Compare with the binomial expected counts.", fig: svgT(tableSvg([["heads", "0", "1", "2", "3"], ["observed", "9", "31", "29", "11"], ["expected", "10", "30", "30", "10"]], { rowHead: true }), 4.2), steps: [S`Expected $80(\frac18,\frac38,\frac38,\frac18)=10,30,30,10$.`, "Very close: the model fits."], ans: "good fit" },
  { title: "Game choice", q: "Game A pays the number on a die (dollars); game B pays 1 dollar per head in 5 tosses; game C pays 2 dollars per tail before the first head. Rank by expected payout.", steps: [S`A $3.5$; B $2.5$; C $2(1)=2$.`], ans: "A > B > C" },
  { title: "Geometric vs binomial", q: "A player makes 25% of shots. Compare P(first make on shot 3) with P(exactly 1 make in 3 shots).", steps: [S`Geometric $0.75^2(0.25)\approx0.141$.`, S`Binomial $3(0.25)(0.75)^2\approx0.422$ — three orders, not one.`], ans: "0.141 vs 0.422" },
  { title: "Which assumption fails?", q: "A teacher models “number of correct answers on a quiz” as binomial with p = 0.7. Name an assumption that might fail.", steps: ["Questions differ in difficulty (p not constant); answers may be related (not independent)."], ans: "constant p / independence" },
];

const PROBLEMS = [
  { level: 1, q: "Name the model and find E(X): the number of 4s in 9 rolls of a die.", ans: "binomial; 1.5" },
  { level: 1, q: "Name the model and find E(X): the number of hearts in 6 cards dealt.", ans: "hypergeometric; 1.5" },
  { level: 1, q: "Name the model and find E(X): rolls before the first 4.", ans: "geometric; 5" },
  { level: 2, q: "Draw the histograms of uniform on 0–4 and binomial n = 4, p = 0.5. Find both means.", ans: "both 2; flat vs mound", space: 4.5 },
  { level: 2, q: "For N = 20, a = 8, r = 5, compare P(X = 2) hypergeometric with binomial p = 0.4.", ans: `${r3(hyp(20, 8, 5, 2), 4)} vs ${r3(bin(5, 0.4, 2), 4)}` },
  { level: 2, q: "A survey of 100 households: number of cars 0: 12, 1: 46, 2: 34, 3: 8. Could a uniform model fit? Explain.", ans: "no: frequencies are far from 25 each" },
  { level: 2, q: "Explain why the geometric histogram is always highest at 0 while the binomial peaks near np.", ans: "each extra failure multiplies by q < 1; binomial counts many arrangements near np" },
  { level: 2, q: "A geometric model has p = 0.2 and a binomial model has n = 20, p = 0.2. Find both expected values.", ans: "4 and 4" },
  { level: 3, space: 4.5, q: "In 200 batches of 5 items, defectives were 0: 118, 1: 66, 2: 14, 3: 2. Estimate p and compare expected binomial counts.", ans: S`$p=\frac{66+28+6}{1000}=0.1$; expected $200(0.59,0.328,0.073,0.008)\approx118,66,15,2$: excellent fit` },
  { level: 3, space: 4.5, q: "A store has 12 boxes, 3 damaged. A customer buys 4. Compare P(at least one damaged) under the correct model and the binomial approximation, and explain which is correct.", ans: `hypergeometric ${r3(1 - hyp(12, 3, 4, 0), 4)} (correct); binomial ${r3(1 - 0.75 ** 4, 4)}` },
  { level: 3, space: 4.5, q: "Design a situation for each of the four models with E(X) = 3.", ans: "e.g. uniform 1–5; binomial n = 6, p = 0.5; geometric p = 0.25; hypergeometric N = 20, a = 10, r = 6" },
  { level: 3, space: 4.5, q: "Explain why a binomial model with p = 0.5 is reasonable for the number of boys among 5 children, and one way the model could be wrong.", ans: "births nearly independent with p ≈ 0.5; real p is about 0.51 and twins break independence" },
  { level: 3, space: 5, q: "For which values of p does the geometric distribution have E(X) < 1? Explain what this means.", ans: S`$\frac{1-p}p<1\Rightarrow p>0.5$: on average less than one failure before success` },
];

export const WS = {
  code: "3.7",
  title: "Comparing Discrete Distributions",
  bigideas: S`Choose the model from the situation: uniform (equally likely values, $E=\frac{a+b}2$), binomial (fixed independent trials, $E=np$), geometric (waiting for the first success, $E=\frac qp$), hypergeometric (without replacement, $E=\frac{ra}N$). Compare a model with data to check its fit.`,
  goals: ["Choose an appropriate model.", "Compare shapes and means.", "Explain the hypergeometric–binomial link.", "Compare models with data."],
  curriculum: "B1.1–B1.4; B2.7 connection",
  vocab: [["Model", "a distribution for a situation"], ["Fit", "observed vs expected counts"]],
  hook: "Four friends each describe a game. Can you tell which distribution each game follows without calculating anything?",
  concepts: [
    ["1. Decision questions", "Equally likely? Fixed n? Until success? Without replacement?"],
    ["2. Shapes", S`${svgT(barsSvg([0, 1, 2, 3, 4, 5].map((k) => geo(0.5, k)), { labels: [0, 1, 2, 3, 4, 5], histogram: true, fmt: (v) => v.toFixed(2) }), 3.4)}Flat, mound, decreasing.`],
    ["3. Fit", "Expected counts = trials × model probabilities; compare with observed."],
  ],
  tips: ["Identify the key words.", "Same mean ≠ same distribution.", "Check assumptions.", "Large N → binomial OK.", "Compare with data."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
