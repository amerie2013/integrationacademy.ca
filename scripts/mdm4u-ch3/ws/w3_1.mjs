// MDM4U Worksheet 3.1 — Random Variables & Discrete Distributions (teacher edition)
import { svgT, barsSvg, diceGridSvg, tableSvg, treeSvg, fullTree } from "./figT.mjs";
import { C, r3 } from "../../mdm4u/count.mjs";

const S = String.raw;
const sumP = Array.from({ length: 11 }, (_, i) => (6 - Math.abs(i - 5)) / 36);

const EXAMPLES = [
  { title: "Defining X", q: "Two coins are tossed. Let X be the number of tails. List the possible values and the distribution.", fig: svgT(treeSvg(fullTree([["H", "T"], ["H", "T"]]), { heads: ["1st", "2nd"], leaf: (p) => `X = ${p.filter((c) => c === "T").length}` }), 4), steps: ["Values 0, 1, 2.", S`$P(0)=\frac14$, $P(1)=\frac12$, $P(2)=\frac14$.`], ans: "1/4, 1/2, 1/4" },
  { title: "Sum of two dice", q: "Build the probability distribution of the sum of two dice and draw its histogram.", fig: svgT(barsSvg(sumP, { labels: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], histogram: true, fmt: (v) => v.toFixed(2), xlabel: "sum", ylabel: "P" }), 5), steps: ["Count the grid cells for each sum: 1, 2, 3, 4, 5, 6, 5, 4, 3, 2, 1.", "Divide by 36."], ans: "k/36 with k = 1, 2, …, 6, …, 1" },
  { title: "Area of the histogram", q: "Explain why the total area of the histogram above is 1.", steps: ["Each bar has width 1 and height equal to its probability.", "Total area = sum of the probabilities = 1."], ans: "area = Σ P = 1" },
  { title: "Product of two dice (part)", q: "Two dice are rolled; X is the product. Find P(X = 6) and P(X ≥ 25).", fig: svgT(diceGridSvg((a, b) => a * b === 6, { label: (a, b) => a * b }), 3.8), steps: [S`Product 6: (1,6), (6,1), (2,3), (3,2): $\frac4{36}$.`, S`$\ge25$: (5,5), (5,6), (6,5), (6,6): $\frac4{36}$.`], ans: "1/9 and 1/9" },
  { title: "Validity", q: "Is this a valid distribution? x: 0, 1, 2, 3 with P = 0.1, 0.45, 0.35, 0.15.", steps: [S`Sum $=1.05$.`], ans: "no" },
  { title: "Unknown constant", q: "P(X = x) = k(x + 1) for x = 0, 1, 2, 3. Find k and P(X ≤ 1).", steps: [S`$k(1+2+3+4)=1\Rightarrow k=0.1$.`, S`$P(X\le1)=0.1+0.2=0.3$.`], ans: "k = 0.1; 0.3" },
  { title: "Without replacement", q: "From 3 boys and 2 girls, two are chosen. X = number of girls. Find the distribution.", steps: [S`$P(0)=\frac{\binom32}{\binom52}=\frac3{10}$, $P(1)=\frac{3\cdot2}{10}=\frac6{10}$, $P(2)=\frac1{10}$.`], ans: "0.3, 0.6, 0.1" },
  { title: "Frequency histogram", q: "A die was rolled 60 times with frequencies 8, 11, 9, 12, 10, 10. Convert to relative frequencies and compare with the probability histogram.", fig: svgT(barsSvg([8, 11, 9, 12, 10, 10].map((f) => f / 60), { labels: [1, 2, 3, 4, 5, 6], histogram: true, fmt: (v) => v.toFixed(2), ylabel: "rel. freq." }), 4.4), steps: ["Divide each by 60: 0.133, 0.183, 0.15, 0.2, 0.167, 0.167.", "The probability histogram is flat at 0.167; the data are close."], ans: "close to uniform" },
  { title: "Technology", q: "Describe how a spreadsheet can generate the distribution of the number of heads in 5 tosses.", steps: ["Column x = 0 to 5; =BINOM.DIST(x, 5, 0.5, FALSE) or =COMBIN(5, x)/32.", "Chart the column as a histogram."], ans: "P = 1/32, 5/32, 10/32, 10/32, 5/32, 1/32" },
];

const PROBLEMS = [
  { level: 1, q: "Three coins are tossed; X = number of heads. Write the distribution table.", ans: "1/8, 3/8, 3/8, 1/8" },
  { level: 1, q: "Is P(X = 1) = 0.2, P(X = 2) = 0.3, P(X = 3) = 0.6 a probability distribution? Explain.", ans: "no: the sum is 1.1" },
  { level: 1, q: "A random variable has P(X = 0) = 0.25, P(X = 1) = 0.5, P(X = 2) = x. Find x and draw the histogram.", ans: "0.25" },
  { level: 2, q: "Two dice are rolled; X = the larger number. Build the distribution.", ans: S`$\frac{2x-1}{36}$: 1/36, 3/36, 5/36, 7/36, 9/36, 11/36` },
  { level: 2, q: "A bag has 4 red and 2 blue marbles. Three are drawn without replacement; X = number of blue. Find the distribution.", ans: S`$P(0)=\frac4{20}$, $P(1)=\frac{12}{20}$, $P(2)=\frac4{20}$` },
  { level: 2, q: "P(X = x) = kx² for x = 1, 2, 3. Find k and P(X ≥ 2).", ans: S`$14k=1$, $k=\frac1{14}$; $\frac{13}{14}$` },
  { level: 2, q: "Use the frequency table of 200 trials to draw a relative-frequency histogram and estimate P(X ≥ 2).", fig: svgT(tableSvg([["x", "0", "1", "2", "3"], ["frequency", "44", "86", "52", "18"]], { rowHead: true }), 4), ans: "0.22, 0.43, 0.26, 0.09; P(X ≥ 2) ≈ 0.35", space: 4 },
  { level: 2, q: "Four cards are dealt; X = number of hearts. Find P(X = 0) and P(X = 1).", ans: S`$\frac{\binom{39}4}{\binom{52}4}\approx${r3(C(39, 4) / C(52, 4), 4)}$; $\frac{13\binom{39}3}{\binom{52}4}\approx${r3((13 * C(39, 3)) / C(52, 4), 4)}$` },
  { level: 3, space: 4.5, q: "Two dice are rolled; X = |difference|. Build the distribution, draw the histogram and find P(X ≤ 1).", ans: "6, 10, 8, 6, 4, 2 (÷36); 16/36 = 4/9" },
  { level: 3, space: 4.5, q: "A spinner has sectors 1, 2, 3 with probabilities 0.5, 0.3, 0.2. It is spun twice and X = the sum. Build the distribution of X.", ans: "2: 0.25, 3: 0.3, 4: 0.29, 5: 0.12, 6: 0.04" },
  { level: 3, space: 4.5, q: "Explain the difference between a frequency histogram and a probability histogram, and how one becomes the other.", ans: "frequency shows counts from data; divide by the number of trials for relative frequency; with many trials it approaches the probability histogram" },
  { level: 3, space: 4.5, q: "A coin is tossed until a head appears or 4 tosses are made. X = number of tosses. Find the distribution.", ans: "1: 1/2, 2: 1/4, 3: 1/8, 4: 1/8" },
  { level: 3, space: 5, q: "A family has 3 children; X = number of girls minus number of boys. List the values of X and their probabilities.", ans: "−3: 1/8, −1: 3/8, 1: 3/8, 3: 1/8" },
];

export const WS = {
  code: "3.1",
  title: "Random Variables & Discrete Distributions",
  bigideas: S`A discrete random variable $X$ assigns a number to each outcome. Its probability distribution lists every value with $P(X=x)$; the probabilities lie in $[0,1]$ and add to 1. A probability histogram uses bars of width 1 centred on each value, so its area is 1. Relative-frequency histograms from many trials approach it.`,
  goals: ["Identify discrete random variables.", "Build distributions from sample spaces.", "Check validity.", "Draw probability histograms; compare with frequency histograms."],
  curriculum: "B1.1, B1.3",
  vocab: [["Random variable", "a number for each outcome"], ["Distribution", "values and probabilities"], ["Probability histogram", "width-1 bars, area 1"]],
  hook: "Roll two dice 50 times as a class and tally the sums. Does the tally look like the probability histogram?",
  concepts: [
    ["1. Random variables", S`${svgT(barsSvg([0.25, 0.5, 0.25], { labels: [0, 1, 2], histogram: true, top: ["1/4", "1/2", "1/4"] }), 3.4)}Group outcomes by the value of $X$ and add their probabilities.`],
    ["2. Valid distributions", S`$0\le P(X=x)\le1$ and $\sum P(X=x)=1$.`],
    ["3. Histograms", "Probability: heights P(X = x). Frequency: counts. Relative frequency: counts ÷ trials."],
  ],
  tips: ["List all values, including 0.", "Check the sum is 1.", "Bars touch in a histogram.", "Use technology for large n.", "Label axes."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
