// MDM4U chapter 3 written-response (long_answer) questions for printed chapter tests (Part C), each with a figure.
// Math uses $…$ delimiters; every probability is computed.
import { barsSvg, tableSvg, poolSvg, spinnerSvg, diceGridSvg, lineSvg } from "../mdm4u/figs.mjs";
import { C, r3, bin, binLE, geo, hyp } from "../mdm4u/count.mjs";

const T = {
  1: "3.1 Random Variables & Discrete Distributions", 2: "3.2 Expected Value", 3: "3.3 The Uniform Distribution",
  4: "3.4 The Binomial Distribution", 5: "3.5 The Geometric Distribution", 6: "3.6 The Hypergeometric Distribution",
  7: "3.7 Comparing Discrete Distributions",
};
const W = (t, difficulty, points, prompt, feedback, fig) => ({ topic: T[t], difficulty, points, prompt, feedback, kind: "long_answer", answer: null, choices: null, fig });
const S = String.raw;
const f4 = (v) => r3(v, 4);

export const WRITTEN = [
  W(1, "medium", 4, S`Two dice are rolled and $X$ is the smaller of the two numbers. (a) Use the grid to build the probability distribution of $X$. (b) Draw the probability histogram. (c) Explain why the total area of the histogram is 1.`,
    S`(a) $P(X=k)=\frac{13-2k}{36}$: $\frac{11}{36},\frac9{36},\frac7{36},\frac5{36},\frac3{36},\frac1{36}$. (b) Decreasing bars of width 1. (c) Each bar's area is its probability, and the probabilities add to 1. [2, 1, 1.]`,
    diceGridSvg(() => false, { label: (a, b) => Math.min(a, b) })),
  W(1, "hard", 5, S`A bag has 4 red and 3 green marbles. Three are drawn without replacement; $X$ = number of green marbles. (a) Find the distribution. (b) Show it is valid. (c) Draw the histogram and describe its shape. (d) A class repeated the experiment 140 times. Find the expected frequency of each value.`,
    S`(a) $P(0)=\frac4{35}$, $P(1)=\frac{18}{35}$, $P(2)=\frac{12}{35}$, $P(3)=\frac1{35}$. (b) sum $\frac{35}{35}=1$. (c) mound-shaped, peak at 1. (d) 16, 72, 48, 4. [2, 1, 1, 1.]`,
    poolSvg([[4, "red", "red"], [3, "green", "green"]], { per: 7 })),
  W(2, "medium", 4, S`Of eight envelopes, four hold 1 dollar, three hold 50 dollars and one holds 1000 dollars. One is chosen at random. (a) Find $E(X)$. (b) Interpret it. (c) Predict and then verify $E(X)$ if every amount is increased by 20 dollars, and if every amount is tripled.`,
    S`(a) $\frac{4+150+1000}8=144.25$ dollars. (b) The long-run average per draw; most draws give only 1 or 50 dollars. (c) $164.25$ and $432.75$. [1, 1, 2.]`,
    barsSvg([4 / 8, 3 / 8, 1 / 8], { labels: ["$1", "$50", "$1000"], top: ["4/8", "3/8", "1/8"], ylabel: "P" })),
  W(2, "hard", 5, S`A game costs 4 dollars. A player spins the spinner twice and wins the sum of the two numbers in dollars. (a) Find the probability distribution of the sum. (b) Find the expected winnings. (c) Is the game fair? (d) What single change to the prize on one sector would make it fair?`,
    S`Sectors 1 (1/2), 3 (1/4), 7 (1/4); one spin $E=0.5+0.75+1.75=3$. (a) sums 2: 1/4, 4: 1/4, 6: 1/16, 8: 1/4, 10: 1/8, 14: 1/16. (b) $2\times3=6$ dollars. (c) No: net $+2$, favours the player. (d) E per spin must be 2: change the 7 to a 3 ($0.5+0.75+0.75=2$). [2, 1, 1, 1.]`,
    spinnerSvg([["1", 0.5, "blue"], ["3", 0.25, "green"], ["7", 0.25, "amber"]], { r: 60 })),
  W(3, "medium", 4, S`A random integer from 1 to 40 is chosen. (a) State the distribution and draw its histogram. (b) Find $E(X)$. (c) Find $P(X$ is a multiple of 3 or 4$)$.`,
    S`(a) uniform, each $\frac1{40}$, flat. (b) $20.5$. (c) $13+10-3=20$: $\frac{20}{40}=\frac12$. [1, 1, 2.]`,
    barsSvg(Array(10).fill(0.025), { labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], histogram: true, xlabel: "first ten values", ylabel: "P", fmt: (v) => v.toFixed(3) })),
  W(4, "medium", 5, S`A light-bulb maker finds that 3% of bulbs are defective. A pack holds 6 bulbs. (a) Explain why the number of defective bulbs is binomial. (b) Find the distribution as far as $x=2$. (c) Find $P(X\ge1)$ and $E(X)$. (d) Sketch the histogram and describe its shape.`,
    S`(a) fixed $n=6$, two outcomes, $p=0.03$, independent bulbs. (b) $P(0)\approx${f4(bin(6, 0.03, 0))}$, $P(1)\approx${f4(bin(6, 0.03, 1))}$, $P(2)\approx${f4(bin(6, 0.03, 2))}$. (c) $\approx${f4(1 - bin(6, 0.03, 0))}$; $0.18$. (d) strongly skewed right. [1, 2, 1, 1.]`,
    barsSvg([0, 1, 2, 3].map((x) => bin(6, 0.03, x)), { labels: [0, 1, 2, 3], histogram: true, fmt: (v) => v.toFixed(3), xlabel: "defective bulbs", ylabel: "P" })),
  W(4, "hard", 6, S`An airline sells 82 tickets for a flight with 80 seats; each passenger shows up independently with probability 0.95. (a) Find $E(X)$, the expected number who show up. (b) Find $P(X\le80)$. (c) Interpret (b) for the airline. (d) What is the largest number of tickets it can sell while keeping $P(\text{overbooked})$ below 5%?`,
    S`(a) $77.9$. (b) $1-P(81)-P(82)\approx${f4(binLE(82, 0.95, 80))}$. (c) about ${r3(100 * (1 - binLE(82, 0.95, 80)), 1)}% of flights are overbooked. (d) ${(() => { let n = 80; while (1 - binLE(n + 1, 0.95, 80) < 0.05) n++; return n; })()} tickets. [1, 2, 1, 2.]`,
    lineSvg([80, 81, 82, 83, 84].map((n) => 1 - binLE(n, 0.95, 80)), { xs: [80, 81, 82, 83, 84], p: 0.05, pLabel: "5%", ymax: 0.6, nt: 6, xlabel: "tickets sold", ylabel: "P(overbooked)" })),
  W(5, "medium", 4, S`A basketball player makes 35% of three-point attempts and shoots until she makes one. Let $X$ be the number of misses before the first make. (a) Find $P(X=2)$. (b) Find $P(X\ge3)$. (c) Find $E(X)$ and interpret it.`,
    S`(a) $0.65^2(0.35)\approx${f4(geo(0.35, 2))}$. (b) $0.65^3\approx${f4(0.65 ** 3)}$. (c) $\frac{0.65}{0.35}\approx${r3(0.65 / 0.35, 2)}$ misses on average before a make. [1, 1, 2.]`,
    barsSvg([0, 1, 2, 3, 4, 5].map((k) => geo(0.35, k)), { labels: [0, 1, 2, 3, 4, 5], histogram: true, fmt: (v) => v.toFixed(2), xlabel: "misses before first make", ylabel: "P" })),
  W(5, "hard", 5, S`Two players alternate rolling a die, A first; the first to roll a 6 wins. (a) Find P(A wins on her first or second turn). (b) Find P(A wins). (c) Explain why going first is an advantage, and find the expected number of rolls in the game.`,
    S`(a) $\frac16+\left(\frac56\right)^2\frac16\approx${f4(1 / 6 + (25 / 36) / 6)}$. (b) $\frac{1/6}{1-25/36}=\frac6{11}$. (c) A gets the first chance each round; expected number of rolls $\frac1p=6$. [1, 2, 2.]`,
    barsSvg([1 / 6, (5 / 6) * (1 / 6), (5 / 6) ** 2 / 6, (5 / 6) ** 3 / 6], { labels: ["A1", "B1", "A2", "B2"], top: true, fmt: (v) => v.toFixed(3), ylabel: "P(game ends)" })),
  W(6, "medium", 4, S`A committee of 5 is chosen at random from 8 women and 6 men. (a) Explain why the number of women is hypergeometric. (b) Find $P(X=3)$. (c) Find $E(X)$.`,
    S`(a) chosen without replacement from a small group. (b) $\frac{\binom83\binom62}{\binom{14}5}=\frac{840}{2002}\approx${f4(hyp(14, 8, 5, 3))}$. (c) $\frac{5\cdot8}{14}\approx${r3(40 / 14, 2)}$. [1, 2, 1.]`,
    poolSvg([[8, "red", "women"], [6, "blue", "men"]], { per: 14 })),
  W(6, "hard", 5, S`Biologists tag 60 trout and release them. Later they catch 45 trout, 9 of them tagged. (a) Estimate the population. (b) If the true population is 300, find the expected number of tagged fish in a catch of 45. (c) Using the hypergeometric model with $N=300$, find $P(\text{exactly 9 tagged})$. (d) State one assumption of the method.`,
    S`(a) $\frac{45\cdot60}9=300$. (b) $\frac{45\cdot60}{300}=9$. (c) $\frac{\binom{60}9\binom{240}{36}}{\binom{300}{45}}\approx${f4(hyp(300, 60, 45, 9))}$. (d) tagged fish mix randomly and the population is unchanged. [1, 1, 2, 1.]`,
    tableSvg([["", "tagged", "untagged", "total"], ["catch", "9", "36", "45"]], { rowHead: true })),
  W(7, "medium", 4, S`For each situation, name the distribution and find the expected value: (a) the number of 1s in 18 rolls of a die; (b) the number of rolls before the first 1; (c) the number of red cards in a 6-card hand; (d) a random integer from 10 to 30.`,
    S`(a) binomial, 3. (b) geometric, 5. (c) hypergeometric, 3. (d) uniform, 20. [1 each.]`,
    barsSvg([3, 5, 3, 20], { labels: ["(a)", "(b)", "(c)", "(d)"], top: true, ylabel: "E(X)" })),
  W(7, "hard", 5, S`A box has 20 parts, 4 defective; 5 are inspected. (a) Find $P(\text{no defective})$ with the correct model. (b) Find it with a binomial approximation. (c) Explain why the answers differ. (d) If the box had 2000 parts with 400 defective, which model would you use and why?`,
    S`(a) $\frac{\binom{16}5}{\binom{20}5}\approx${f4(hyp(20, 4, 5, 0))}$. (b) $0.8^5\approx${f4(0.8 ** 5)}$. (c) without replacement from a small box the draws are dependent. (d) binomial: the sample is tiny compared with the box, so draws are almost independent. [1, 1, 2, 1.]`,
    lineSvg([20, 50, 100, 500, 2000].map((N) => hyp(N, 0.2 * N, 5, 0)), { xs: [20, 50, 100, 500, 2000], p: 0.8 ** 5, pLabel: "binomial", ymax: 0.4, nt: 4, xlabel: "box size N", ylabel: "P(no defective)" })),
];
