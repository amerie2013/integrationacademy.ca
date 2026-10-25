// 3.3 The Uniform Distribution — 20 easy + 20 medium questions
import { mc, ms, num, tf } from "./kit.mjs";
import { p3 } from "./pk.mjs";
import { barsSvg, spinnerSvg } from "../../mdm4u/figs.mjs";

const range = (a, b, pred) => { let c = 0; for (let x = a; x <= b; x++) if (pred(x)) c++; return c / (b - a + 1); };

export const E = [
  p3("A fair 8-sided die is rolled. What is P(X = 5)?", 1 / 8, "1/8."),
  num("A fair 8-sided die (1–8) is rolled. What is E(X)?", 4.5, "(1 + 8)/2.", null, 0.001),
  num("A random digit 0–9 is chosen. What is E(X)?", 4.5, "(0 + 9)/2.", null, 0.001),
  p3("A random digit 0–9 is chosen. What is P(X < 4)?", 0.4, "0, 1, 2, 3."),
  num("How many values are in a uniform distribution on 1, 2, …, 30?", 30, "30 − 1 + 1."),
  num("How many values are in a uniform distribution on 12, 13, …, 40?", 29, "40 − 12 + 1."),
  num("A uniform distribution on 12 to 40. What is E(X)?", 26, "(12 + 40)/2."),
  p3("A random integer from 1 to 50 is chosen. What is P(it is even)?", 0.5, "25 of 50."),
  p3("A random month is chosen. What is P(it begins with J)?", 3 / 12, "January, June, July."),
  p3("A random letter of the alphabet is chosen. What is P(it is a vowel A, E, I, O or U)?", 5 / 26, "5 of 26."),
  p3("The spinner has 5 equal sectors. What is P(an odd number)?", 3 / 5, "1, 3, 5.", spinnerSvg([["1", 0.2, "blue"], ["2", 0.2, "red"], ["3", 0.2, "green"], ["4", 0.2, "amber"], ["5", 0.2, "violet"]], { r: 55 })),
  num("Read the histogram: what is the probability of each value?", 0.125, "8 equal bars.", barsSvg(Array(8).fill(0.125), { labels: [1, 2, 3, 4, 5, 6, 7, 8], histogram: true, ymax: 0.2 }), 0.001),
  mc("Which distribution is uniform?", "the number on a fair 12-sided die", ["the sum of two dice", "the number of heads in 4 tosses", "the larger of two dice"], "Equally likely values."),
  mc("What shape is a uniform probability histogram?", "flat", ["mound-shaped", "decreasing", "skewed right"], "Equal heights."),
  tf("A spinner with unequal sectors gives a uniform distribution.", false, "Sectors must be equal."),
  tf("For a uniform distribution on 1 to n, each value has probability 1/n.", true, "Definition."),
  tf("The expected value of a uniform distribution is its middle value.", true, "(a + b)/2."),
  ms("Which are uniform? Select all.", ["a random day of the week", "the suit of a random card", "the sum of two coins (0, 1, 2 heads)", "a random seat number", "the product of two dice"], [0, 1, 3], "Equally likely values."),
  num("A uniform distribution on 0 to 20. What is E(X)?", 10, "(0 + 20)/2."),
  p3("A random integer from 1 to 20 is chosen. What is P(X ≥ 16)?", 5 / 20, "16–20."),
];

export const M = [
  p3("A random integer from 1 to 100 is chosen. What is P(it is a multiple of 6)?", range(1, 100, (x) => x % 6 === 0), "16 multiples."),
  p3("A random integer from 1 to 60 is chosen. What is P(it is a perfect square)?", range(1, 60, (x) => Number.isInteger(Math.sqrt(x))), "1, 4, …, 49: 7."),
  p3("A random integer from −10 to 10 is chosen. What is P(|X| ≤ 3)?", 7 / 21, "−3 to 3."),
  num("A random integer from −10 to 10 is chosen. What is E(X)?", 0, "Symmetric."),
  num("A uniform distribution on a, …, 25 has E(X) = 15. Find a.", 5, "(a + 25)/2 = 15."),
  num("A uniform distribution has 16 values starting at 5. What is the largest value?", 20, "5 + 15."),
  num("A uniform distribution has 16 values starting at 5. What is E(X)?", 12.5, "(5 + 20)/2.", null, 0.001),
  num("A game pays the number on a fair 12-sided die in dollars. What is a fair price?", 6.5, "(1 + 12)/2.", null, 0.001),
  num("A random integer X from 1 to 10. What is E(3X + 2)?", 18.5, "3(5.5) + 2.", null, 0.001),
  p3("A random 2-digit number (10–99) is chosen. What is P(its digits are equal)?", 9 / 90, "11, 22, …, 99."),
  p3("A random 2-digit number (10–99) is chosen. What is P(it is greater than 75)?", 24 / 90, "76–99."),
  p3("A random integer from 1 to 30 is chosen. What is P(it is prime)?", range(1, 30, (x) => x > 1 && [...Array(x).keys()].slice(2).every((d) => x % d)), "2, 3, 5, 7, 11, 13, 17, 19, 23, 29."),
  mc("Two fair 4-sided dice are added. Which sum is most likely?", "5", ["2", "8", "all equally likely"], "4 ways."),
  mc("A random integer from 1 to n has E(X) = 9. What is n?", "17", ["18", "9", "16"], "(1 + n)/2 = 9."),
  tf("If X is uniform on 1–6, then 2X is uniform on 2, 4, …, 12.", true, "Each of 6 values still has 1/6."),
  tf("If X and Y are each uniform on 1–6, then X + Y is uniform on 2–12.", false, "Peaked at 7."),
  ms("X is uniform on 1–10. Which are correct? Select all.", ["P(X = 3) = 0.1", "E(X) = 5.5", "P(X > 7) = 0.3", "P(X ≤ 5) = 0.4", "E(2X) = 11"], [0, 1, 2, 4], "P(X ≤ 5) = 0.5."),
  p3("A random integer from 1 to 40 is chosen. What is P(it contains the digit 3)?", range(1, 40, (x) => String(x).includes("3")), "3, 13, 23, 30–39: 13 numbers."),
  num("Read the histogram of a uniform distribution: what is E(X)?", 7, "Values 3 to 11.", barsSvg(Array(9).fill(1 / 9), { labels: [3, 4, 5, 6, 7, 8, 9, 10, 11], histogram: true, ymax: 0.15 })),
  p3("The spinner shown is uniform on 1–8. It is spun twice. What is P(both numbers are less than 3)?", (2 / 8) ** 2, "(2/8)².", spinnerSvg(Array.from({ length: 8 }, (_, i) => [String(i + 1), 1 / 8, ["blue", "red", "green", "amber"][i % 4]]), { r: 55 })),
];
