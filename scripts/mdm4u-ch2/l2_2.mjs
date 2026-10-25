// MDM4U 2.2 — Experimental vs Theoretical Probability: relative frequency, experimental probability from class data
// and technology simulations, the tendency of experimental probability to approach theoretical probability as trials
// increase (law of large numbers), designing a simulation, and subjective probability
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, frac, hard, fig, lineSvg, barsSvg, tableSvg, spinnerSvg } from "./lib.mjs";
import { r3 } from "../mdm4u/count.mjs";

export const TITLE = "2.2 Experimental vs Theoretical Probability";
export const ID = "5c3e0001-0001-4001-8001-0000d4d00202";
const S = String.raw;

/** deterministic pseudo-random numbers so the "simulated" figures never change between builds */
function rng(a) { return () => { a |= 0; a = (a + 0x6d2b79f5) | 0; let t = Math.imul(a ^ (a >>> 15), 1 | a); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; }; }
/** relative frequency of rolling a 2 after 10, 20, …, 200 rolls of a simulated die (seed chosen to show a typical run) */
const R = rng(17);
const twos = []; let c = 0; for (let i = 1; i <= 200; i++) { if (Math.floor(R() * 6) === 1) c++; if (i % 10 === 0) twos.push(c / i); }
// a class's 120 tosses of two coins
const coinData = [27, 61, 32]; // HH (2 heads), one head, TT

export const blocks = () => [
  intro({
    icon: "🧪",
    title: "Experimental vs Theoretical Probability",
    overview: S`<strong>Theoretical probability</strong> is calculated from the sample space: \(P(A)=\frac{n(A)}{n(S)}\). <strong>Experimental probability</strong> (relative frequency) comes from actually doing the experiment: \[P_{\text{exp}}(A)=\frac{\text{number of times }A\text{ happened}}{\text{number of trials}}.\] With a few trials the two can be far apart. As the number of trials increases, the experimental probability <em>tends to</em> get closer to the theoretical probability — the <strong>law of large numbers</strong>. When the theoretical probability is hard to find, a <strong>simulation</strong> (random numbers, a spreadsheet, a calculator) estimates it.`,
    goals: [
      "calculate experimental probability (relative frequency) from data;",
      "compare experimental and theoretical probabilities;",
      "describe how experimental probability tends toward theoretical probability as trials increase;",
      "design a simulation with random numbers and use it to estimate a probability;",
      "recognize subjective probability (an informed estimate) and when it is used.",
    ],
    curriculum: "A1.4 (determine, through investigation using class-generated data and technology-based simulation models, the tendency of experimental probability to approach theoretical probability as the number of trials increases); A1.1 (likelihood of real-world events)",
    prior: [
      ["A die is rolled. What is the theoretical P(rolling a 2)?", "1/6 ≈ 0.167."],
      ["Write 23/120 as a decimal to 3 places.", "0.192."],
      ["What is the sample space for tossing two coins?", "HH, HT, TH, TT."],
    ],
    words: [
      ["Trial", "one repetition of an experiment", "one roll of a die"],
      ["Frequency", "the number of times an outcome happened", "a 2 came up 9 times"],
      ["Relative frequency", "frequency ÷ number of trials", "9/60 = 0.15"],
      ["Simulation", "a model that imitates an experiment, often with random numbers", "RANDBETWEEN(1, 6) in a spreadsheet"],
      ["Subjective probability", "an estimate based on judgement or experience", "“I'm 80% sure we will win”"],
    ],
  }),

  section("📌 Experimental probability from data", S`
  <p>A class tossed two coins 120 times and recorded the number of heads:</p>
  ${table(["Heads", "Frequency", "Relative frequency", "Theoretical"], [["0", coinData[2], `${r3(coinData[2] / 120)}`, "0.25"], ["1", coinData[1], `${r3(coinData[1] / 120)}`, "0.5"], ["2", coinData[0], `${r3(coinData[0] / 120)}`, "0.25"], ["total", 120, "1", "1"]])}
  ${fig(barsSvg([coinData[2], coinData[1], coinData[0]].map((f) => f / 120), { labels: ["0 heads", "1 head", "2 heads"], top: true, fmt: (v) => v.toFixed(3), xlabel: "number of heads", ylabel: "relative frequency" }), "the relative frequencies are close to 0.25, 0.5, 0.25 but not equal")}
  ${keyIdea(S`Relative frequencies, like theoretical probabilities, always add to 1.`)}`),

  section("📌 More trials → closer to theory", S`
  <p>A spreadsheet rolled a die 200 times. After every 10 rolls the relative frequency of “2” was recorded:</p>
  ${fig(lineSvg(twos, { p: 1 / 6, xs: twos.map((_, i) => (i + 1) * 10), xlabel: "number of rolls", ylabel: "relative frequency of 2", ymax: 0.5, nt: 5 }), "early values jump around; later values settle near 1/6 ≈ 0.167")}
  <p>This does not mean the die “makes up” for earlier results. Each roll is still \(\frac16\); the early differences simply become a smaller fraction of a growing number of trials.</p>
  ${keyIdea(S`More trials do not guarantee a closer value every time, but over many trials the relative frequency tends to settle near the theoretical probability.`)}`),

  section("📌 Designing a simulation", S`
  ${table(["Step", "Example: P(a family of 3 children has at least 2 girls)"], [["1. Model each outcome", "random digit 0–9: even = girl, odd = boy (each 1/2)"], ["2. Define one trial", "3 random digits = one family"], ["3. Run many trials", "spreadsheet: 1000 rows of =RANDBETWEEN(0, 9)"], ["4. Count successes", "rows with at least 2 even digits"], ["5. Estimate", "successes ÷ 1000; compare with the theoretical 4/8 = 0.5"]])}
  ${fig(spinnerSvg([["girl", 0.5, "red"], ["boy", 0.5, "blue"]], { r: 60 }), "a spinner, a coin or random digits can all model a 1/2 chance")}`),

  section("📌 Explore", S`<p>Pick an experiment and run trials in batches of 1, 10, 100 or 1000. Watch the violet line (experimental) approach the red dashed line (theoretical). Reset and try again: the early part changes every time; the long-run value does not.</p>`),

  widget("simLab", { init: "die" }),

  section("📌 Watch out", watchOut([
    "Experimental probability depends on the data; it can change every time the experiment is repeated.",
    "A small number of trials can be misleading — 3 heads in 4 tosses does not make P(heads) = 0.75.",
    "Past results do not change future independent trials (the gambler's fallacy).",
    "A simulation must model the real probabilities: use a random digit 0–9 for 1/10 chances, two digits for 1/100, and so on.",
  ])),

  examples([
    ["Relative frequency", "A basketball player made 46 of 80 free throws. Estimate the probability that she makes her next free throw.",
      [S`\(P_{\text{exp}}=\frac{46}{80}=0.575\).`],
      "about 0.575 (57.5%)"],
    ["Comparing with theory", "A die was rolled 150 times and showed a 6 thirty-four times. Compare the experimental and theoretical probabilities of a 6.",
      [S`Experimental: \(\frac{34}{150}\approx0.227\).`, S`Theoretical: \(\frac16\approx0.167\).`, S`The difference is about 0.06 — possible by chance, but with many more rolls a large gap would suggest an unfair die.`],
      "0.227 vs 0.167"],
    ["Using the estimate", "A quality inspector finds 12 defective phones in a sample of 400. How many defective phones would you expect in a shipment of 25 000?",
      [S`\(P(\text{defective})\approx\frac{12}{400}=0.03\).`, S`Expected number \(\approx0.03\times25\,000=750\).`],
      "about 750"],
    ["Simulation design", "Design a simulation to estimate the probability that at least two of four people were born on the same day of the week.",
      [S`Model a birthday-weekday with a random integer 1–7.`, S`One trial = 4 random integers. Success = at least two equal.`, S`Run 1000 trials; estimate = successes ÷ 1000. (Theory: \(1-\frac{7\cdot6\cdot5\cdot4}{7^4}=1-\frac{840}{2401}\approx0.650\).)`],
      "estimate ≈ 0.65"],
    ["More trials", "Two students estimate P(two tails) for two coins. Ana tossed 10 times and got 4 TT; Ben tossed 400 times and got 108 TT. Whose estimate is more reliable, and why?",
      [S`Ana: \(\frac4{10}=0.4\). Ben: \(\frac{108}{400}=0.27\). Theory: \(0.25\).`, S`Ben's estimate is based on many more trials, so it is more reliable — and it is closer to 0.25.`],
      "Ben's (0.27 from 400 trials)",
      fig(barsSvg([0.4, 0.27, 0.25], { labels: ["Ana (10)", "Ben (400)", "theory"], top: true, hl: [2], fmt: (v) => v.toFixed(2), ylabel: "P(TT)" }))],
  ]),

  practice([
    q("relative", "A spinner landed on red 38 times in 120 spins. What is the experimental probability of red? (3 decimals)", num(r3(38 / 120), 0.001), "38 ÷ 120.", [S`\(\frac{38}{120}\approx0.317\).`], "0.317"),
    q("theory", "What is the theoretical probability of getting exactly one head when two coins are tossed?", frac(1, 2), "HT and TH.", [S`\(\frac24\).`], "1/2"),
    q("expect", "A survey found that 18 of 150 students walk to school. Estimate how many of the school's 1200 students walk.", num(144), "Relative frequency × 1200.", [S`\(\frac{18}{150}\times1200\).`], "144"),
    q("law", "As the number of trials increases, the experimental probability…", choice(["tends to get closer to the theoretical probability", "always equals the theoretical probability", "moves further from the theoretical probability", "stops changing after 10 trials"], 0), "Law of large numbers.", ["It tends to settle near the theory."], "tends to get closer"),
    q("simulation", "Which random number generator models an event with probability 3/10?", choice(["a random digit 0–9 with 0, 1, 2 = success", "a coin toss with heads = success", "a die with 1, 2, 3 = success", "a random digit 0–9 with 0–5 = success"], 0), "Three of ten equally likely digits.", ["3 out of 10 digits."], "digits 0, 1, 2"),
  ]),

  ...hard([
    ["Is the die fair?", "A die is rolled 600 times with these results: 1: 92, 2: 105, 3: 98, 4: 94, 5: 87, 6: 124. Compare with the theoretical frequencies. Is there evidence that the die is unfair?",
      [S`Expected frequency of each face: \(600\times\frac16=100\).`, S`Differences: −8, +5, −2, −6, −13, +24. The 6 is 24 above expected (relative frequency 0.207 vs 0.167).`, S`Most faces are within about 10 of 100, but the 6 stands out. It suggests the die may favour 6 — more trials would make the case stronger.`],
      "possibly biased toward 6",
      fig(barsSvg([92, 105, 98, 94, 87, 124], { labels: ["1", "2", "3", "4", "5", "6"], top: true, hl: [5], xlabel: "face", ylabel: "frequency" }), "600 rolls: expected 100 each")],
    ["Estimating with a simulation", "A simulation of 500 families of 4 children (each child a girl with probability 1/2) found 196 families with exactly 2 girls. Compare with the theoretical probability.",
      [S`Experimental: \(\frac{196}{500}=0.392\).`, S`Theoretical: arrangements of GGBB: \(\frac{4!}{2!\,2!}=6\) of \(2^4=16\) equally likely outcomes: \(\frac6{16}=0.375\).`, S`The estimate is within about 0.02 of the theory.`],
      "0.392 vs 0.375"],
  ], [
    q("hard", "A coin is tossed 50 times and lands heads 31 times. How many more heads than expected is that?", num(6), "Expected 25.", [S`\(31-25\).`], "6"),
    q("hard", "In 2000 simulated rolls of two dice, a sum of 7 came up 352 times. What is the difference between the experimental and the theoretical probability? (3 decimals)", num(r3(352 / 2000 - 1 / 6), 0.001), "Theory 1/6.", [S`\(0.176-0.1667\approx0.009\).`], "0.009"),
    q("hard", "A random digit 0–9 is used to simulate a free-throw shooter who makes 70% of shots. Which digits should represent a made shot?", choice(["0 to 6", "0 to 7", "1 to 7", "0 to 9"], 0), "Seven digits out of ten.", ["0, 1, 2, 3, 4, 5, 6: 7 digits."], "0 to 6"),
  ]),

  wrapUp({
    qas: [
      ["When should I use experimental probability?", "When outcomes are not equally likely or the theory is hard to find: sports statistics, defects, weather, survey data."],
      ["Why don't the two probabilities agree exactly?", "Experiments have random variation; with more trials the variation becomes smaller relative to the number of trials."],
      ["Does the law of large numbers mean a coin is “due” for heads after many tails?", "No. Each toss is still 1/2. The long-run proportion settles because the early run becomes a small part of a huge total."],
      ["How many trials are enough?", "More is better; hundreds or thousands with technology give a much steadier estimate than a handful by hand."],
      ["What is subjective probability?", "A judgement-based estimate when no experiment is possible, like a doctor's estimate of recovery."],
    ],
    summary: [
      "Experimental probability = frequency ÷ trials.",
      "Theoretical probability = n(A) ÷ n(S) for equally likely outcomes.",
      "More trials → the experimental value tends toward the theoretical one.",
      "Simulations model experiments with random numbers.",
    ],
    next: "2.3 expresses chances as odds and uses the complement.",
  }),
];
