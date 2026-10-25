// MDM4U 3.3 — The Uniform Distribution: equally likely values, P(X = x) = 1/n, flat probability histograms,
// E(X) = (a + b)/2 for consecutive integers, probabilities of ranges, and recognizing (non-)uniform situations
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, frac, hard, fig, barsSvg, spinnerSvg, diceGridSvg } from "./lib.mjs";
import { r3 } from "../mdm4u/count.mjs";

export const TITLE = "3.3 The Uniform Distribution";
export const ID = "2d7a98fb-036c-4a3f-9cd5-dbf7508ddba9";
const S = String.raw;

export const blocks = () => [
  intro({
    icon: "▭",
    title: "The Uniform Distribution",
    overview: S`A random variable has a <strong>discrete uniform distribution</strong> when each of its \(n\) values is equally likely: \(P(X=x)=\frac1n\). Its probability histogram is flat. For the consecutive integers \(a,a+1,\ldots,b\) (so \(n=b-a+1\)), the expected value is the middle value: \[E(X)=\frac{a+b}{2}.\] A fair die, a random digit, a fair spinner with equal sectors and a random ticket number are all uniform.`,
    goals: [
      "recognize situations that are (and are not) uniform;",
      "write the probability distribution P(X = x) = 1/n;",
      "draw the flat probability histogram;",
      "calculate E(X) for a uniform distribution;",
      "find probabilities of ranges of values by counting.",
    ],
    curriculum: "B1.1 (generate probability distributions and represent them in tables); B1.2 (expected value); B1.3 (probability histograms)",
    prior: [
      ["A fair die: what is P(each face)?", "1/6."],
      ["What is the mean of 3, 4, 5, 6, 7?", "5."],
      ["How many integers are from 10 to 25 inclusive?", "16."],
    ],
    words: [
      ["Uniform distribution", "all n values equally likely", "a fair die"],
      ["P(X = x) = 1/n", "probability of each value", "1/6 for a die"],
      ["E(X) = (a + b)/2", "mean of consecutive integer values", "die: (1 + 6)/2 = 3.5"],
      ["Non-uniform", "some values more likely", "sum of two dice"],
    ],
  }),

  section("📌 A flat histogram", S`
  ${fig(barsSvg(Array(10).fill(0.1), { labels: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], histogram: true, top: Array(10).fill("1/10"), xlabel: "random digit", ylabel: "P(X = x)", ymax: 0.15 }), "a random digit 0–9: every bar has height 1/10")}
  ${table(["Situation", "Uniform?", "Why"], [["one fair die", "yes", "6 equally likely faces"], ["random digit 0–9", "yes", "10 equally likely digits"], ["sum of two dice", "no", "7 is more likely than 2"], ["spinner with unequal sectors", "no", "areas differ"], ["random day of the week", "yes", "7 equally likely days"]])}
  ${keyIdea(S`Uniform means equally likely. Combining two uniform variables (like adding two dice) usually gives a distribution that is <em>not</em> uniform.`)}`),

  section("📌 Expected value and ranges", S`
  <p>For values \(a,\ldots,b\): \(E(X)=\frac{a+b}2\) — the balance point of the flat histogram. Probabilities of ranges are counts: for a random integer from 1 to 50, \(P(X\le12)=\frac{12}{50}\).</p>
  ${fig(spinnerSvg([["1", 0.2, "blue"], ["2", 0.2, "red"], ["3", 0.2, "green"], ["4", 0.2, "amber"], ["5", 0.2, "violet"]], { r: 60 }), "a spinner with 5 equal sectors: uniform on 1–5, E(X) = 3")}`),

  section("📌 Explore", S`<p>Change the number of values and the smallest value. The histogram stays flat; the expected value is always the middle.</p>`),

  widget("uniformLab", { init: 8 }),

  section("📌 Watch out", watchOut([
    "Count the values carefully: from a to b there are b − a + 1 integers.",
    "E(X) = (a + b)/2 only works for consecutive (equally spaced) values.",
    "A spinner is uniform only if its sectors are equal.",
    "The sum or maximum of two uniform variables is usually not uniform.",
  ])),

  examples([
    ["A 12-sided die", "A fair 12-sided die is rolled. Write the distribution, find E(X) and P(X > 8).",
      [S`\(P(X=x)=\frac1{12}\) for \(x=1,\ldots,12\).`, S`\(E(X)=\frac{1+12}2=6.5\).`, S`\(P(X>8)=\frac4{12}=\frac13\).`],
      "E = 6.5; P = 1/3"],
    ["Ticket numbers", "Raffle tickets are numbered 101 to 300 and one is drawn at random. Find P(the number ends in 7) and E(X).",
      [S`200 tickets. Ending in 7: 107, 117, …, 297: 20.`, S`\(\frac{20}{200}=0.1\); \(E=\frac{101+300}2=200.5\).`],
      "0.1; 200.5"],
    ["Not uniform", "Explain why the sum of two dice is not uniform, using the grid.",
      [S`Sums 2 and 12 each have 1 cell; 7 has 6 cells.`, S`The 11 sums are not equally likely.`],
      "not uniform",
      fig(diceGridSvg((a, b) => a + b === 7, { label: (a, b) => a + b }))],
    ["Expected value by formula", "A random integer is chosen from −4 to 10. Find E(X) and P(X < 0).",
      [S`15 values; \(E=\frac{-4+10}{2}=3\).`, S`\(P(X<0)=\frac4{15}\).`],
      "3; 4/15"],
    ["Game", "A game pays the number on a fair 20-sided die in dollars. What is a fair price to play?",
      [S`\(E=\frac{1+20}2=10.5\).`],
      "10.50 dollars"],
  ]),

  practice([
    q("P", "A random integer from 1 to 25 is chosen. What is P(X = 7)?", frac(1, 25), "1/n.", [S`\(\frac1{25}\).`], "1/25"),
    q("E", "A random integer from 5 to 15 is chosen. What is E(X)?", num(10), "(a + b)/2.", [S`\(\frac{20}2\).`], "10"),
    q("range", "A random digit 0–9 is chosen. What is P(X ≥ 7)?", frac(3, 10), "7, 8, 9.", [S`\(\frac3{10}\).`], "3/10"),
    q("count", "How many values does a uniform distribution on 20, 21, …, 59 have?", num(40), "b − a + 1.", [S`\(59-20+1\).`], "40"),
    q("uniform?", "Which is uniform?", choice(["the day of the week a random date falls on", "the sum of two dice", "the number of heads in 3 tosses", "the larger of two dice"], 0), "Equally likely values.", ["7 equally likely days."], "day of the week"),
  ]),

  ...hard([
    ["Two uniform dice", "Two fair dice are rolled. X = first die, Y = second die, S = X + Y. Show that E(S) = E(X) + E(Y) but S is not uniform.",
      [S`\(E(X)=E(Y)=3.5\); \(E(S)=\sum s\,P(S=s)=7\) (the histogram of S is symmetric about 7).`, S`\(3.5+3.5=7\) ✓, but \(P(S=7)=\frac16\ne P(S=2)=\frac1{36}\).`],
      "E(S) = 7; not uniform",
      fig(barsSvg([1, 2, 3, 4, 5, 6, 5, 4, 3, 2, 1].map((k) => k / 36), { labels: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], histogram: true, xlabel: "S", ylabel: "P", fmt: (v) => v.toFixed(2) }))],
    ["A fair price with a rule", "A player draws a random integer from 1 to 40. If it is a multiple of 5 she wins that many dollars; otherwise she wins nothing. Find the fair price.",
      [S`Multiples of 5: 5, 10, …, 40 (8 values), each \(\frac1{40}\).`, S`\(E=\frac{5+10+\cdots+40}{40}=\frac{180}{40}=4.5\).`],
      "4.50 dollars"],
  ], [
    q("hard", "A random integer from 1 to 100 is chosen. What is P(it is a perfect square)?", frac(1, 10), "1, 4, …, 100.", [S`\(\frac{10}{100}\).`], "1/10"),
    q("hard", "A uniform distribution on a, a + 1, …, 30 has E(X) = 18. Find a.", num(6), "(a + 30)/2 = 18.", [S`\(a=6\).`], "6"),
    q("hard", "A spinner is uniform on 1–8. It is spun twice. What is P(both spins are greater than 6)?", frac(1, 16), "(2/8)².", [S`\(\frac4{64}\).`], "1/16"),
  ]),

  wrapUp({
    qas: [
      ["What makes a distribution uniform?", "Every value has the same probability 1/n."],
      ["What does its histogram look like?", "A flat row of bars of equal height."],
      ["What is E(X) for a uniform distribution?", "For consecutive integers a to b, the middle value (a + b)/2."],
      ["Is the sum of two uniform variables uniform?", "No — middle sums can be made in more ways, giving a peaked shape."],
      ["Where are uniform distributions used?", "Random number generators, fair dice and spinners, random selection of tickets or IDs."],
    ],
    summary: [
      "P(X = x) = 1/n for each of n values.",
      "Flat probability histogram.",
      "E(X) = (a + b)/2 for consecutive integers.",
      "Range probabilities: count ÷ n.",
    ],
    next: "3.4 counts successes in repeated independent trials: the binomial distribution.",
  }),
];
