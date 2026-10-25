// 2.1 Introduction to Probability — 20 hard questions
import { mc, ms, num, tf } from "./kit.mjs";
import { p3, mcf } from "./pk.mjs";
import { diceGridSvg, spinnerSvg, barsSvg, treeSvg, fullTree } from "../../mdm4u/figs.mjs";

const dice = (pred, f1 = 6, f2 = 6) => { let c = 0; for (let a = 1; a <= f1; a++) for (let b = 1; b <= f2; b++) if (pred(a, b)) c++; return c; };
const coins = (n, pred) => { let c = 0; for (let m = 0; m < 2 ** n; m++) if (pred([...m.toString(2).padStart(n, "0")].map(Number))) c++; return c; };

export const TOPIC = "2.1 Introduction to Probability";
export const Q = [
  p3("Two dice are rolled. What is P(the two numbers differ by exactly 2)?", dice((a, b) => Math.abs(a - b) === 2) / 36, "8 outcomes."),
  p3("Two dice are rolled. What is P(the larger number is at least 5)?", dice((a, b) => Math.max(a, b) >= 5) / 36, "1 − P(both ≤ 4) = 1 − 16/36."),
  p3("Two dice are rolled. What is P(the product is a perfect square)?", dice((a, b) => Number.isInteger(Math.sqrt(a * b))) / 36, "1, 4, 9, 16, 25, 36: count the pairs."),
  p3("Two dice are rolled. What is P(the sum is a prime number)?", dice((a, b) => [2, 3, 5, 7, 11].includes(a + b)) / 36, "1 + 2 + 4 + 6 + 2 = 15."),
  p3("A 4-sided die (1–4) and a 6-sided die are rolled. What is P(the sum is 6)?", dice((a, b) => a + b === 6, 4, 6) / 24, "24 outcomes; (1,5), (2,4), (3,3), (4,2)."),
  p3("Four coins are tossed. What is P(exactly two heads)?", coins(4, (x) => x.filter((v) => v).length === 2) / 16, "6 of 16."),
  p3("Four coins are tossed. What is P(no two heads in a row)?", coins(4, (x) => !x.some((v, i) => v && x[i + 1])) / 16, "List: 8 of 16."),
  p3("A number is chosen at random from 1 to 50. What is P(it is a multiple of 3 or of 5)?", [...Array(50)].map((_, i) => i + 1).filter((n) => n % 3 === 0 || n % 5 === 0).length / 50, "16 + 10 − 3 = 23."),
  p3("A two-digit number (10–99) is chosen at random. What is P(its digits add to 9)?", [...Array(90)].map((_, i) => i + 10).filter((n) => Math.floor(n / 10) + (n % 10) === 9).length / 90, "18, 27, …, 90: 9 numbers."),
  num("A biased die has P(6) = 0.25 and the other faces are equally likely. What is P(an even number)?", 0.25 + 0.15 + 0.15, "Each other face: 0.75/5 = 0.15.", null, 0.001),
  num("A spinner has P(red) = x, P(blue) = 2x and P(green) = 3x + 0.1. Find P(green).", 0.55, "6x + 0.1 = 1 ⇒ x = 0.15.", null, 0.001),
  p3("A dart lands at a random point on a 10 cm by 10 cm board with a central circle of radius 3 cm. What is P(it lands in the circle)?", (Math.PI * 9) / 100, "Area ratio πr²/100 (a continuous sample space)."),
  p3("Use the grid: two dice are rolled and the larger number is recorded. What is P(the larger number is 4)?", 7 / 36, "Count the cells marked 4.", diceGridSvg((a, b) => Math.max(a, b) === 4, { label: (a, b) => Math.max(a, b) })),
  p3("Use the spinner: the sectors are 1/2, 1/4, 1/8 and 1/8. The spinner is spun once. What is P(A or C)?", 0.5 + 0.125, "1/2 + 1/8.", spinnerSvg([["A", 0.5, "blue"], ["B", 0.25, "red"], ["C", 0.125, "green"], ["D", 0.125, "amber"]], { r: 60 })),
  p3("Use the tree: three coins are tossed. What is P(the first and last coins match)?", coins(3, (x) => x[0] === x[2]) / 8, "HxH or TxT: 4 of 8.", treeSvg(fullTree([["H", "T"], ["H", "T"], ["H", "T"]]), { heads: ["1", "2", "3"] })),
  p3("The bar chart shows a probability distribution with one bar missing. Find P(X = 3).", 1 - 0.1 - 0.35 - 0.2, "The bars add to 1.", barsSvg([0.1, 0.35, 0.2, 0], { labels: ["0", "1", "2", "3"], top: ["0.1", "0.35", "0.2", "?"], ylabel: "probability" })),
  mcf("A letter is chosen at random from PROBABILITY. What is P(a vowel)?", [4, 11], [[3, 11], [5, 11], [4, 10]], "O, A, I, I."),
  ms("Two dice are rolled. Which events are equally likely? Select all that have probability 1/4.", ["both dice even", "both dice odd", "sum greater than 8", "product odd", "sum of 7"], [0, 1, 3], "Both even 9/36; both odd 9/36; product odd 9/36; sum > 8: 10/36."),
  tf("If every outcome in a sample space of size 8 is equally likely, each has probability 0.125.", true, "1/8."),
  mc("A spinner's sectors are labelled 1 to 5 with angles 60°, 60°, 60°, 90°, 90°. What is P(4 or 5)?", "1/2", ["2/5", "1/3", "3/5"], "180° of 360°."),
];
