// MDM4U Worksheet 2.2 — Experimental vs Theoretical Probability (teacher edition)
import { svgT, barsSvg, lineSvg, tableSvg, spinnerSvg } from "./figT.mjs";
import { r3 } from "../../mdm4u/count.mjs";

const S = String.raw;
// a class's record of 300 rolls of a die (relative frequency of 6 after every 30 rolls)
const sixes = [0.267, 0.2, 0.211, 0.183, 0.173, 0.178, 0.171, 0.163, 0.167, 0.163];
const spinData = [41, 79, 120]; // red (1/6), blue (1/3), green (1/2) of 240 spins

const EXAMPLES = [
  { title: "Relative frequency", q: "A spinner was spun 240 times: red 41, blue 79, green 120. Find the experimental probability of each colour.", fig: svgT(barsSvg(spinData.map((f) => f / 240), { labels: ["red", "blue", "green"], top: true, fmt: (v) => v.toFixed(3), ylabel: "relative frequency" }), 4.8), steps: [S`$\frac{41}{240}\approx0.171$, $\frac{79}{240}\approx0.329$, $\frac{120}{240}=0.5$.`], ans: "0.171, 0.329, 0.5" },
  { title: "Compare with theory", q: "The spinner above is 1/6 red, 1/3 blue and 1/2 green. Compare.", fig: svgT(spinnerSvg([["R", 1 / 6, "red"], ["B", 1 / 3, "blue"], ["G", 1 / 2, "green"]], { r: 55 }), 3.2), steps: [S`Theory: $0.167$, $0.333$, $0.5$.`, "Each experimental value is within 0.005 of the theory."], ans: "very close agreement" },
  { title: "Running relative frequency", q: "A class recorded the relative frequency of rolling a 6 after every 30 rolls (graph). Describe the trend.", fig: svgT(lineSvg(sixes, { p: 1 / 6, xs: sixes.map((_, i) => (i + 1) * 30), ymax: 0.4, nt: 4, xlabel: "rolls", ylabel: "rel. freq. of 6" }), 5.8), steps: ["Early values (0.27, 0.20) are far from 1/6.", "After about 200 rolls the values stay within 0.01 of 0.167."], ans: "it settles near 1/6" },
  { title: "Expected count", q: "An airline finds that 6% of ticket holders do not show up. For a flight with 250 tickets sold, how many no-shows are expected?", steps: [S`$0.06\times250$.`], ans: "15" },
  { title: "Estimating from a sample", q: "In a sample of 80 light bulbs, 3 failed early. Estimate the probability that a bulb fails early, and the number expected to fail in 5000 bulbs.", steps: [S`$\frac3{80}=0.0375$.`, S`$0.0375\times5000=187.5$.`], ans: "0.0375; about 188" },
  { title: "Simulation design", q: "Design a simulation using random digits to estimate the probability that a hockey goalie who stops 92% of shots stops all 10 shots in a period.", steps: ["Use two-digit random numbers 00–99: 00–91 = save (92 numbers), 92–99 = goal.", "One trial = 10 two-digit numbers; success = all ten from 00–91.", S`Repeat 1000 times. (Theory: $0.92^{10}\approx${r3(0.92 ** 10)}$.)`], ans: S`estimate near ${r3(0.92 ** 10)}` },
  { title: "Subjective probability", q: "A weather forecaster says there is a 70% chance of rain. Is this theoretical, experimental or subjective? Explain.", steps: ["It comes from models and past data plus judgement — it cannot be counted from equally likely outcomes.", "It is best described as experimental/subjective (based on past similar days)."], ans: "experimental/subjective" },
  { title: "Comparing sample sizes", q: "Ali drew 20 cards (with replacement) and got 7 hearts; Bea drew 500 and got 129. Compare their estimates of P(heart) with the theory.", steps: [S`Ali: $\frac7{20}=0.35$. Bea: $\frac{129}{500}=0.258$. Theory: $0.25$.`, "Bea's larger sample gives the closer estimate."], ans: "Bea's (0.258)" },
  { title: "Two-coin data", q: "Use the table of 200 tosses of two coins. Find the experimental P(exactly one head) and compare with the theory.", fig: svgT(tableSvg([["heads", "0", "1", "2"], ["frequency", "46", "105", "49"]], { rowHead: true }), 4), steps: [S`$\frac{105}{200}=0.525$; theory $\frac12$.`], ans: "0.525 vs 0.5" },
];

const PROBLEMS = [
  { level: 1, q: "A coin was tossed 60 times and landed heads 34 times. Find the experimental probability of heads and of tails.", ans: S`$\frac{34}{60}\approx0.567$; $\frac{26}{60}\approx0.433$` },
  { level: 1, q: "What is the theoretical probability of rolling a sum of 9 with two dice? A class rolled 360 times and got 37 nines. Compare.", ans: S`$\frac4{36}\approx0.111$; $\frac{37}{360}\approx0.103$` },
  { level: 1, q: "State the law of large numbers in your own words.", ans: "as the number of trials increases, the experimental probability tends to get closer to the theoretical probability" },
  { level: 2, q: "A survey of 400 voters found 168 support a proposal. Estimate the number of supporters among 25 000 voters.", ans: S`$\frac{168}{400}=0.42$; $10\,500$` },
  { level: 2, q: "The graph shows the running relative frequency of heads. What does it suggest about the coin?", fig: svgT(lineSvg([0.7, 0.6, 0.633, 0.6, 0.62, 0.61, 0.6, 0.605], { p: 0.5, xs: [10, 20, 30, 40, 50, 75, 100, 200], ymax: 1, xlabel: "tosses", ylabel: "rel. freq. of heads" }), 5), ans: "the relative frequency settles near 0.6, not 0.5: the coin appears biased toward heads", space: 4 },
  { level: 2, q: "Describe how to use a spreadsheet to simulate 1000 rolls of two dice and estimate P(doubles).", ans: "two columns of =RANDBETWEEN(1, 6), a third column =IF(A1=B1, 1, 0), fill 1000 rows, average the third column; compare with 1/6" },
  { level: 2, q: "A basketball player has made 156 of 240 free throws this season. Estimate the probability that she makes the next one, and the odds in favour.", ans: S`$0.65$; $13:7$` },
  { level: 2, q: "Which random digits would you use to simulate an event with probability 0.35? With probability 1/8?", ans: "two-digit numbers 00–34; a digit 1–8 with 1 = success (or three coins: TTT)" },
  { level: 3, space: 4.5, q: "A die is suspected of being unfair. In 300 rolls the results were 1: 42, 2: 51, 3: 49, 4: 48, 5: 46, 6: 64. Compare each with the expected frequency and give your conclusion.", fig: svgT(barsSvg([42, 51, 49, 48, 46, 64], { labels: [1, 2, 3, 4, 5, 6], top: true, hl: [5], ylabel: "frequency" }), 4.6), ans: "expected 50 each; 6 is 14 above and 1 is 8 below; possibly biased toward 6 — more trials needed to be sure" },
  { level: 3, space: 4.5, q: "In a simulation, the probability of at least one double-six in 24 rolls of two dice was estimated as 0.49 from 1000 trials. Find the theoretical probability and comment.", ans: S`$1-\left(\frac{35}{36}\right)^{24}\approx${r3(1 - (35 / 36) ** 24)}$; the estimate is within about 0.002` },
  { level: 3, space: 4.5, q: "Explain why a gambler who has seen 8 reds in a row on a fair roulette wheel is wrong to believe black is “due”.", ans: "spins are independent; the probability of black is unchanged; the law of large numbers works by dilution over many trials, not by correction" },
  { level: 3, space: 4.5, q: "Design a simulation to estimate the probability that a family with 4 children has at least 2 boys, and give the theoretical value.", ans: S`4 coin tosses per trial (H = boy), count trials with at least 2 H; theory $1-\frac{1+4}{16}=\frac{11}{16}\approx0.688$` },
  { level: 3, space: 5, q: "A quality-control inspector tests 50 items from each of 6 batches and finds 2, 1, 3, 2, 4 and 0 defective. Estimate the defect rate. How many defective items would you expect in a production run of 12 000?", ans: S`$\frac{12}{300}=0.04$; $480$` },
];

export const WS = {
  code: "2.2",
  title: "Experimental vs Theoretical Probability",
  bigideas: S`Experimental probability (relative frequency) $=\frac{\text{number of successes}}{\text{number of trials}}$. Theoretical probability comes from the sample space. As the number of trials grows, the experimental probability tends to approach the theoretical probability. Simulations with random numbers estimate probabilities that are hard to calculate.`,
  goals: ["Calculate experimental probabilities from data.", "Compare experimental and theoretical probability.", "Describe the effect of more trials.", "Design simulations."],
  curriculum: "A1.4 (experimental probability approaches theoretical probability as trials increase; class data and technology simulations)",
  vocab: [["Relative frequency", "frequency ÷ trials"], ["Simulation", "a random model of an experiment"], ["Law of large numbers", "long-run relative frequency → probability"]],
  hook: "Each student tosses a coin 10 times. Plot the class's results. Then combine all the tosses. Which is closer to 0.5 — one student or the whole class?",
  concepts: [
    ["1. Relative frequency", S`From data: $P_{\text{exp}}(A)=\frac{f}{n}$. Relative frequencies add to 1.`],
    ["2. Long-run behaviour", S`${svgT(lineSvg(sixes, { p: 1 / 6, xs: sixes.map((_, i) => (i + 1) * 30), ymax: 0.4, nt: 4 }), 5)}Small samples vary a lot; large samples settle near the theoretical value.`],
    ["3. Simulation", "Model each outcome with random digits, coins, dice or a spreadsheet; define a trial and a success; repeat many times."],
  ],
  tips: ["Large samples beat small ones.", "Past results do not change independent trials.", "Match the random device to the probability.", "Compare by differences or by relative frequencies, not raw counts.", "Report the number of trials with any estimate."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
