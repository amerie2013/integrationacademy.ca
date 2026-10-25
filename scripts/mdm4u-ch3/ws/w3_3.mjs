// MDM4U Worksheet 3.3 — The Uniform Distribution (teacher edition)
import { svgT, barsSvg, spinnerSvg, diceGridSvg } from "./figT.mjs";

const S = String.raw;

const EXAMPLES = [
  { title: "A die", q: "Write the distribution of a fair 6-sided die and find E(X).", fig: svgT(barsSvg(Array(6).fill(1 / 6), { labels: [1, 2, 3, 4, 5, 6], histogram: true, top: Array(6).fill("1/6"), ymax: 0.25 }), 4.2), steps: [S`$P(X=x)=\frac16$.`, S`$E=\frac{1+6}2$.`], ans: "3.5" },
  { title: "Random integer", q: "An integer from 1 to 80 is chosen at random. Find P(X ≤ 20) and E(X).", steps: [S`$\frac{20}{80}=0.25$; $E=40.5$.`], ans: "0.25; 40.5" },
  { title: "Equal spinner", q: "A spinner has 8 equal sectors numbered 1–8. Find P(odd) and E(X).", fig: svgT(spinnerSvg(Array.from({ length: 8 }, (_, i) => [String(i + 1), 1 / 8, ["blue", "red", "green", "amber"][i % 4]]), { r: 55 }), 3.2), steps: [S`$\frac48$; $E=4.5$.`], ans: "1/2; 4.5" },
  { title: "Counting values", q: "How many values are in a uniform distribution on 35, 36, …, 74? What is each probability?", steps: [S`$74-35+1=40$; $\frac1{40}$.`], ans: "40; 1/40" },
  { title: "Negative values", q: "A random integer from −5 to 5. Find E(X) and P(|X| ≤ 2).", steps: [S`11 values, $E=0$.`, S`$-2,\ldots,2$: $\frac5{11}$.`], ans: "0; 5/11" },
  { title: "Not uniform", q: "Is the maximum of two dice uniform? Use the grid.", fig: svgT(diceGridSvg(() => false, { label: (a, b) => Math.max(a, b) }), 3.8), steps: ["Counts for max 1–6: 1, 3, 5, 7, 9, 11.", "Not equal: not uniform."], ans: "no" },
  { title: "Game", q: "A player draws a card numbered 1 to 50 and wins that many cents. What is the fair price?", steps: [S`$E=25.5$ cents.`], ans: "25.5 cents" },
  { title: "Range of a uniform", q: "A uniform distribution on a, …, 20 has E(X) = 12. Find a and n.", steps: [S`$\frac{a+20}2=12\Rightarrow a=4$; $n=17$.`], ans: "a = 4, n = 17" },
  { title: "Two uniforms", q: "A coin (0 or 1) and a die are combined as X = coin + die. Is X uniform? Find its distribution.", steps: ["X = 1 to 7. P(1) = P(7) = 1/12; P(2), …, P(6) = 2/12.", "Not uniform."], ans: "not uniform" },
];

const PROBLEMS = [
  { level: 1, q: "A fair 20-sided die is rolled. Find P(X = 13), P(X > 15) and E(X).", ans: "1/20, 1/4, 10.5" },
  { level: 1, q: "Which are uniform: a random month; the number of heads in 2 tosses; a random card's suit?", ans: "random month, random suit" },
  { level: 1, q: "Find E(X) for a uniform distribution on 7 to 23.", ans: "15" },
  { level: 2, q: "A random integer from 1 to 60 is chosen. Find P(it is a multiple of 7).", ans: "8/60 = 2/15" },
  { level: 2, q: "Draw the histogram of a random digit 0–9 and find E(X) and P(X is prime).", ans: "E = 4.5; P = 4/10" },
  { level: 2, q: "A uniform distribution has 25 values and smallest value 11. Find the largest value and E(X).", ans: "35; 23" },
  { level: 2, q: "A random day of the year (365 days) is chosen. Find P(it is in a 31-day month).", ans: "217/365" },
  { level: 2, q: "A game: pick a random integer 1–12 and win twice that number of dollars minus 5. Find the expected winnings.", ans: S`$2(6.5)-5=8$ dollars` },
  { level: 3, space: 4.5, q: "Two fair 4-sided dice (1–4) are rolled. Find the distribution of the sum and show that it is not uniform although each die is.", ans: "2: 1/16, 3: 2/16, 4: 3/16, 5: 4/16, 6: 3/16, 7: 2/16, 8: 1/16" },
  { level: 3, space: 4.5, q: "Show that for a uniform distribution on 1, 2, …, n, E(X) = (n + 1)/2.", ans: S`$\frac1n(1+2+\cdots+n)=\frac1n\cdot\frac{n(n+1)}2$` },
  { level: 3, space: 4.5, q: "A random integer from 1 to 100 is chosen. Find P(its digits add to 10).", ans: "19, 28, 37, 46, 55, 64, 73, 82, 91: 9/100" },
  { level: 3, space: 4.5, q: "A uniform spinner on 1–6 is spun twice. Find P(the second number is larger than the first).", ans: "15/36 = 5/12" },
  { level: 3, space: 5, q: "A ticket number is a random 3-digit number 100–999. Find E(X) and P(all digits are the same).", ans: "549.5; 9/900 = 1/100" },
];

export const WS = {
  code: "3.3",
  title: "The Uniform Distribution",
  bigideas: S`A discrete uniform distribution gives each of its $n$ values probability $\frac1n$; the histogram is flat. For consecutive integers $a$ to $b$, $n=b-a+1$ and $E(X)=\frac{a+b}2$. Sums or maxima of uniform variables are usually not uniform.`,
  goals: ["Recognize uniform situations.", "Write P(X = x) = 1/n.", "Find E(X) = (a + b)/2.", "Count probabilities of ranges."],
  curriculum: "B1.1–B1.3",
  vocab: [["Uniform", "equally likely values"], ["$n=b-a+1$", "number of integer values"]],
  hook: "Is a random-number generator really uniform? Generate 100 random digits and tally them.",
  concepts: [
    ["1. Definition", S`${svgT(barsSvg(Array(5).fill(0.2), { labels: [1, 2, 3, 4, 5], histogram: true, top: Array(5).fill("1/5"), ymax: 0.3 }), 3.4)}Flat histogram; each bar $\frac1n$.`],
    ["2. Mean", S`$E(X)=\frac{a+b}2$, the centre.`],
    ["3. Not uniform", "Combining uniform variables gives peaked distributions."],
  ],
  tips: ["Count b − a + 1.", "Equal sectors only.", "Mean is the middle.", "Sums are not uniform.", "Use counts for ranges."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
