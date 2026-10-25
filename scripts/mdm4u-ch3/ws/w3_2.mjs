// MDM4U Worksheet 3.2 — Expected Value (teacher edition)
import { svgT, barsSvg, spinnerSvg, tableSvg } from "./figT.mjs";
import { r3 } from "../../mdm4u/count.mjs";

const S = String.raw;

const EXAMPLES = [
  { title: "From a table", q: "Find E(X): x = 1, 2, 3, 4 with P = 0.1, 0.4, 0.3, 0.2.", steps: [S`$0.1+0.8+0.9+0.8$.`], ans: "2.6" },
  { title: "A die", q: "Find the expected value of a fair 10-sided die numbered 1 to 10.", steps: [S`$\frac{55}{10}$.`], ans: "5.5" },
  { title: "Spinner payout", q: "A spinner pays 20 dollars (1/8), 5 dollars (1/4) or 0 (5/8). Find the expected payout and a fair price.", fig: svgT(spinnerSvg([["$20", 1 / 8, "green"], ["$5", 1 / 4, "blue"], ["$0", 5 / 8, "gray"]], { r: 55 }), 3.2), steps: [S`$20\cdot\frac18+5\cdot\frac14=2.5+1.25$.`], ans: "3.75 dollars; fair price 3.75" },
  { title: "Expected net gain", q: "A charity sells 1000 tickets at 10 dollars; prizes are one 2000-dollar prize and five 200-dollar prizes. Find the expected net gain per ticket.", steps: [S`Expected winnings $=\frac{2000+5(200)}{1000}=3$.`, S`Net $=3-10$.`], ans: "−7 dollars" },
  { title: "Weighted mean", q: "A teacher weights tests 50%, assignments 30% and the exam 20%. A student scores 72, 85, 64. Find the weighted mean and relate it to expected value.", steps: [S`$0.5(72)+0.3(85)+0.2(64)=36+25.5+12.8$.`, "Same form as Σ x P(x)."], ans: "74.3" },
  { title: "Insurance", q: "A 2-year phone plan costs 120 dollars. P(repair, cost 250) = 0.15 and P(replacement, cost 800) = 0.05. Find the insurer's expected profit per plan.", steps: [S`Expected cost $=37.5+40=77.5$.`, S`$120-77.5$.`], ans: "42.50 dollars" },
  { title: "Shift and scale", q: "E(X) = 8. Find E(X + 3), E(4X) and E(2X − 5).", steps: [S`$11$, $32$, $11$.`], ans: "11, 32, 11" },
  { title: "Finding a probability", q: "X takes 0, 10, 50 with P(10) = 0.3 and E(X) = 8. Find P(50) and P(0).", steps: [S`$3+50p=8\Rightarrow p=0.1$.`, S`$P(0)=0.6$.`], ans: "0.1 and 0.6" },
  { title: "Sample problem with cases", q: "Of eight envelopes, four hold 5 dollars, three hold 20 dollars and one holds 500 dollars. Find E(X) and the effect of adding 100 dollars to each envelope.", fig: svgT(barsSvg([4 / 8, 3 / 8, 1 / 8], { labels: ["$5", "$20", "$500"], top: ["4/8", "3/8", "1/8"], ylabel: "P" }), 4.2), steps: [S`$\frac{4(5)+3(20)+500}{8}=\frac{580}8=72.5$.`, S`Adding 100: $172.5$.`], ans: "72.50; 172.50" },
];

const PROBLEMS = [
  { level: 1, q: "Find E(X): x = 0, 1, 2 with P = 0.3, 0.5, 0.2.", ans: "0.9" },
  { level: 1, q: "A game pays 12 dollars if two coins both land heads. Find the expected payout.", ans: "3 dollars" },
  { level: 1, q: "E(X) = 6. Find E(X − 2) and E(3X).", ans: "4 and 18" },
  { level: 2, q: "A raffle sells 400 tickets at 5 dollars each; the prize is 1000 dollars. Find the expected net gain.", ans: S`$\frac{995}{400}-5\cdot\frac{399}{400}=2.4875-4.9875=-2.5$` },
  { level: 2, q: "A spinner pays 1, 2 or 10 dollars with probabilities 0.5, 0.4, 0.1. What price makes the game fair?", ans: "2.30 dollars" },
  { level: 2, q: "Use the table to find the expected number of children per household.", fig: svgT(tableSvg([["children", "0", "1", "2", "3", "4"], ["P", "0.28", "0.22", "0.3", "0.15", "0.05"]], { rowHead: true }), 4.2), ans: "1.47", space: 3.5 },
  { level: 2, q: "Two dice are rolled; you win the sum in dollars. What is the fair price?", ans: "7 dollars" },
  { level: 2, q: "X has E(X) = 3.2 and takes values 2 and 5 only. Find P(X = 5).", ans: S`$2(1-p)+5p=3.2\Rightarrow p=0.4$` },
  { level: 3, space: 4.5, q: "A game: roll a die. A 6 pays k dollars, a 5 pays 3 dollars, otherwise you lose 1 dollar. Find k so that the game is fair.", ans: S`$\frac{k+3-4}{6}=0\Rightarrow k=1$` },
  { level: 3, space: 4.5, q: "An extended warranty costs 90 dollars. The repair costs 400 dollars and happens with probability 0.18. Should a buyer purchase it? Justify with expected value and discuss other factors.", ans: "expected repair 72 < 90; on average no, but a buyer might pay to avoid the risk of a large bill" },
  { level: 3, space: 4.5, q: "A company's profit X (thousands) has E(X) = 50. A tax takes 20% and a fixed fee of 3 thousand is charged. Find the expected net profit.", ans: S`$0.8(50)-3=37$ thousand` },
  { level: 3, space: 4.5, q: "A player tosses a coin until a head or 3 tosses. She wins 2 dollars per toss used. Find the expected winnings.", ans: S`tosses 1, 2, 3 with 1/2, 1/4, 1/4: $E=2(1.75)=3.5$ dollars` },
  { level: 3, space: 5, q: "Design a game with three outcomes and a 2-dollar cost that has an expected net gain of −0.25 dollars. Show the calculation.", ans: "e.g. win 7 dollars (1/4), 0 dollars (3/4): E = 1.75, net −0.25" },
];

export const WS = {
  code: "3.2",
  title: "Expected Value",
  bigideas: S`$E(X)=\sum xP(X=x)$ is the long-run average of $X$ and a weighted mean of its values. A game is fair when the expected net gain is 0. $E(X+c)=E(X)+c$ and $E(kX)=kE(X)$.`,
  goals: ["Calculate E(X).", "Interpret E(X) in context.", "Decide fairness and fair prices.", "Use E(kX + c) = kE(X) + c."],
  curriculum: "B1.2",
  vocab: [["Expected value", "$\\sum xP(x)$"], ["Fair game", "expected net 0"], ["Weighted mean", "$\\frac{\\sum wx}{\\sum w}$"]],
  hook: "A game show offers 1000 dollars or a 50% chance at 2500 dollars. Which has the higher expected value? Which would you choose, and why?",
  concepts: [
    ["1. Definition", S`$E(X)=x_1p_1+x_2p_2+\cdots$ — the balance point of the histogram.`],
    ["2. Fair games", "Fair when E(winnings) = cost, i.e. expected net gain 0."],
    ["3. Transformations", S`${svgT(barsSvg([3, 13, 30], { labels: ["E(X)", "E(X+10)", "E(10X)"], top: true }), 3.6)}$E(X+c)=E(X)+c$; $E(kX)=kE(X)$.`],
  ],
  tips: ["Use net values for profit.", "Check Σ P = 1.", "E(X) need not be a possible value.", "Negative net = loses on average.", "Explain the meaning in words."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
