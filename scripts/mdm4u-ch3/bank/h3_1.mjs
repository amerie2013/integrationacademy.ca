// 3.1 Random Variables & Discrete Distributions — 20 hard questions
import { mc, ms, num, tf } from "./kit.mjs";
import { p3 } from "./pk.mjs";
import { barsSvg, tableSvg, diceGridSvg } from "../../mdm4u/figs.mjs";
import { C } from "../../mdm4u/count.mjs";

const dice = (pred) => { let c = 0; for (let a = 1; a <= 6; a++) for (let b = 1; b <= 6; b++) if (pred(a, b)) c++; return c / 36; };
const dice3 = (pred) => { let c = 0; for (let a = 1; a <= 6; a++) for (let b = 1; b <= 6; b++) for (let d = 1; d <= 6; d++) if (pred(a, b, d)) c++; return c / 216; };
const sp = [0.5, 0.3, 0.2]; // spinner 1, 2, 3
const two = (s) => { let t = 0; for (let i = 0; i < 3; i++) for (let j = 0; j < 3; j++) if (i + j + 2 === s) t += sp[i] * sp[j]; return t; };

export const TOPIC = "3.1 Random Variables & Discrete Distributions";
export const Q = [
  p3("Three dice are rolled; X = the sum. What is P(X = 10)?", dice3((a, b, c) => a + b + c === 10), "27 of 216."),
  p3("Three dice are rolled; X = the largest number. What is P(X = 6)?", dice3((a, b, c) => Math.max(a, b, c) === 6), "1 − (5/6)³."),
  p3("Two dice are rolled; X = the number of dice showing an even number. What is P(X = 1)?", 0.5, "2 × 1/2 × 1/2."),
  p3("A spinner shows 1, 2, 3 with probabilities 0.5, 0.3, 0.2. It is spun twice; X = sum. What is P(X = 4)?", two(4), "1+3, 3+1, 2+2."),
  p3("Same spinner spun twice; X = sum. What is P(X ≥ 5)?", two(5) + two(6), "0.12 + 0.04."),
  p3("A committee of 3 is chosen from 4 women and 5 men; X = number of women. What is P(X = 2)?", (C(4, 2) * 5) / C(9, 3), "₄C₂₅C₁ ÷ ₉C₃."),
  p3("Four cards are dealt; X = number of face cards. What is P(X = 1)?", (12 * C(40, 3)) / C(52, 4), "₁₂C₁₄₀C₃ ÷ ₅₂C₄."),
  num("P(X = x) = k/x for x = 1, 2, 3, 6. Find k. (3 decimals)", 1 / 2, "k(1 + 1/2 + 1/3 + 1/6) = 2k = 1.", null, 0.001),
  num("P(X = x) = k(4 − x) for x = 0, 1, 2, 3. Find P(X ≤ 1). (3 decimals)", 0.7, "k = 1/10; 0.4 + 0.3.", null, 0.001),
  num("A distribution has P(X = 0) = p², P(X = 1) = 2pq, P(X = 2) = q² with p = 0.3. Find P(X = 1).", 0.42, "2(0.3)(0.7).", null, 0.001),
  p3("Use the grid: two dice, X = sum of the two numbers modulo 3 (remainder). What is P(X = 0)?", dice((a, b) => (a + b) % 3 === 0), "Shaded cells: 12.", diceGridSvg((a, b) => (a + b) % 3 === 0, { label: (a, b) => (a + b) % 3 })),
  num("Read the histogram: what is P(1 ≤ X ≤ 3)?", 0.65, "0.2 + 0.25 + 0.2.", barsSvg([0.1, 0.2, 0.25, 0.2, 0.15, 0.1], { labels: [0, 1, 2, 3, 4, 5], histogram: true, top: ["0.1", "0.2", "0.25", "0.2", "0.15", "0.1"] }), 0.001),
  num("Use the table: find P(X > 1 | X > 0). (3 decimals)", 0.55 / 0.8, "P(X ≥ 2) ÷ P(X ≥ 1).", tableSvg([["x", "0", "1", "2", "3"], ["P", "0.2", "0.25", "0.35", "0.2"]], { rowHead: true }), 0.001),
  num("Use the frequency table of 250 trials: what relative frequency does X = 3 have?", 0.124, "31 ÷ 250.", tableSvg([["x", "0", "1", "2", "3", "4"], ["frequency", "28", "77", "92", "31", "22"]], { rowHead: true }), 0.001),
  mc("X = number of heads in 4 tosses. Which value of x has P(X = x) = 1/4?", "1 and 3", ["2", "0 and 4", "no value"], "4/16 each."),
  ms("A distribution is given by P(X = x) = (x + 1)/10 for x = 0, 1, 2, 3. Which are correct? Select all.", ["it is valid", "P(X = 3) = 0.4", "P(X ≤ 1) = 0.3", "P(X = 0) = 0", "the histogram increases"], [0, 1, 2, 4], "P(X = 0) = 0.1."),
  tf("If every outcome of an experiment is equally likely, every random variable defined on it has a flat histogram.", false, "Sum of dice is not flat."),
  tf("Two different random variables can be defined on the same sample space.", true, "e.g. sum and maximum of two dice."),
  p3("A coin is tossed 5 times; X = the length of the longest run of heads. What is P(X = 0)?", 1 / 32, "All tails."),
  p3("A coin is tossed 4 times; X = number of times the result changes (e.g. HTTH has 2). What is P(X = 1)?", 6 / 16, "Choose where the single change happens (3 places) × 2 starting faces."),
];
