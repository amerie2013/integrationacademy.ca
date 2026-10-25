// 3.3 The Uniform Distribution — 20 hard questions
import { mc, ms, num, tf } from "./kit.mjs";
import { p3 } from "./pk.mjs";
import { barsSvg, spinnerSvg, diceGridSvg } from "../../mdm4u/figs.mjs";

const range = (a, b, pred) => { let c = 0; for (let x = a; x <= b; x++) if (pred(x)) c++; return c / (b - a + 1); };
const pairs = (n, pred) => { let c = 0; for (let a = 1; a <= n; a++) for (let b = 1; b <= n; b++) if (pred(a, b)) c++; return c / (n * n); };

export const TOPIC = "3.3 The Uniform Distribution";
export const Q = [
  p3("A random integer from 1 to 1000 is chosen. What is P(it is divisible by 7 but not by 5)?", range(1, 1000, (x) => x % 7 === 0 && x % 5 !== 0), "142 − 28 = 114."),
  p3("A random integer from 1 to 500 is chosen. What is P(its digits add to 5)?", range(1, 500, (x) => String(x).split("").reduce((s, d) => s + +d, 0) === 5), "Count by number of digits."),
  p3("Two numbers are chosen independently and uniformly from 1–10. What is P(their sum is 11)?", pairs(10, (a, b) => a + b === 11), "10 of 100."),
  p3("Two numbers are chosen independently and uniformly from 1–8. What is P(the first is larger)?", pairs(8, (a, b) => a > b), "(64 − 8)/2 = 28 of 64."),
  p3("Two fair 8-sided dice are rolled (grid shown). What is P(the sum is 9)?", pairs(8, (a, b) => a + b === 9), "8 shaded cells of 64.", diceGridSvg((a, b) => a + b === 9, { faces: 8, u: 32 })),
  num("A uniform distribution on 1–n has P(X ≤ 4) = 0.2. Find n.", 20, "4/n = 0.2."),
  num("X is uniform on 1–12. Find E(X²). (2 decimals)", [...Array(12).keys()].map((i) => (i + 1) ** 2).reduce((a, b) => a + b, 0) / 12, "(1 + 4 + … + 144)/12 = 650/12.", null, 0.01),
  num("X is uniform on 1–6 and Y = 7 − X. What is E(Y)?", 3.5, "7 − 3.5."),
  num("A game pays (X − 3)² dollars where X is a fair die roll. What is the fair price? (2 decimals)", [1, 2, 3, 4, 5, 6].map((x) => (x - 3) ** 2).reduce((a, b) => a + b, 0) / 6, "(4 + 1 + 0 + 1 + 4 + 9)/6.", null, 0.01),
  num("A random integer is chosen from 1 to n where n is even. E(X) = 20.5. Find n.", 40, "(1 + n)/2 = 20.5."),
  p3("Use the grid of two fair dice: X = |a − b|. P(X = 0) is the probability that a uniform variable equals another. What is P(X = 0)?", 1 / 6, "6 of 36.", diceGridSvg((a, b) => a === b)),
  num("The histogram shows a uniform distribution. One more value is added at each end, keeping it uniform. What is the new probability of each value? (3 decimals)", 1 / 10, "8 + 2 = 10 values.", barsSvg(Array(8).fill(0.125), { labels: [3, 4, 5, 6, 7, 8, 9, 10], histogram: true, ymax: 0.2 }), 0.001),
  p3("The spinner has 6 equal sectors numbered 1–6. It is spun three times. What is P(all three numbers are different)?", (6 * 5 * 4) / 216, "6·5·4 / 6³.", spinnerSvg(Array.from({ length: 6 }, (_, i) => [String(i + 1), 1 / 6, ["blue", "red", "green"][i % 3]]), { r: 55 })),
  num("A random integer X from 1 to 9 is chosen and the player wins 10X dollars minus a 40-dollar fee. Find the expected net gain (dollars).", 10 * 5 - 40, "10(5) − 40."),
  mc("X is uniform on 1–4 and Y is uniform on 1–4, independent. Which sum is least likely?", "2 and 8 (tie)", ["5", "4 and 6 (tie)", "all are equally likely"], "1 way each."),
  ms("X is uniform on 0–9. Which are true? Select all.", ["E(X) = 4.5", "P(X is prime) = 0.4", "P(X ≥ 5) = 0.5", "E(10 − X) = 5.5", "P(X = 10) = 0.1"], [0, 1, 2, 3], "X cannot be 10."),
  tf("If X is uniform on 1–6, then X + X (the same roll doubled) is uniform on 2, 4, …, 12.", true, "Each of the 6 even values has 1/6."),
  tf("A uniform distribution can have an expected value that is not one of its values.", true, "1–6 has E = 3.5."),
  p3("A three-digit PIN (000–999) is chosen at random. What is P(its digits are in strictly increasing order)?", 120 / 1000, "₁₀C₃ sets, one increasing order each."),
  p3("A random integer from 1 to 60 is chosen. Given that it is even, what is P(it is a multiple of 3)?", 10 / 30, "Multiples of 6 among 30 evens."),
];
