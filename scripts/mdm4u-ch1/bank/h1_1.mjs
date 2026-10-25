// 1.1 The Fundamental Counting Principle — 20 hard questions
import { mc, ms, num, tf } from "./kit.mjs";
import { treeSvg, slotsSvg, tableSvg, poolSvg } from "../../mdm4u/figs.mjs";

// brute-force helpers over digit strings
const countNums = (lo, hi, pred) => { let c = 0; for (let x = lo; x <= hi; x++) if (pred(String(x))) c++; return c; };
const distinct = (s) => new Set(s).size === s.length;

export const TOPIC = "1.1 The Fundamental Counting Principle";
export const Q = [
  num("How many 4-digit numbers (1000–9999) have distinct digits and are divisible by 5?", countNums(1000, 9999, (s) => distinct(s) && /[05]$/.test(s)), "Cases: last digit 0 (9 × 8 × 7) or 5 (8 × 8 × 7)."),
  num("How many 3-digit numbers (100–999) contain at least one 7?", countNums(100, 999, (s) => s.includes("7")), "Complement: 900 − 8 × 9 × 9."),
  num("How many 4-digit numbers (1000–9999) have digits in strictly increasing order from left to right?", countNums(1000, 9999, (s) => [...s].every((d, i) => i === 0 || d > s[i - 1])), "Each choice of 4 different digits from 1–9 gives exactly one."),
  num("How many 3-digit numbers (100–999) have digits whose sum is even?", countNums(100, 999, (s) => [...s].reduce((a, d) => a + +d, 0) % 2 === 0), "For any first two digits, exactly 5 last digits make the sum even: 9 × 10 × 5."),
  num("How many whole numbers from 1 to 999 have no repeated digit?", countNums(1, 999, distinct), "1-digit 9, 2-digit 9 × 9, 3-digit 9 × 9 × 8."),
  num("How many 5-digit palindromes (like 12321) are there?", countNums(10000, 99999, (s) => s === [...s].reverse().join("")), "Choose the first 3 digits: 9 × 10 × 10."),
  num("A code has 3 letters followed by 2 digits. How many codes have at least one repeated letter? (Digits may repeat.)", (26 ** 3 - 26 * 25 * 24) * 100, "(All letter strings − strings with no repeat) × 100."),
  num("How many even 4-digit numbers (1000–9999) have distinct digits and are greater than 5000?", countNums(5001, 9999, (s) => distinct(s) && +s[3] % 2 === 0), "Split by whether the first digit is even (6, 8) or odd (5, 7, 9)."),
  num("Using only the digits 1, 2, 3, 4, 5 without repetition, how many numbers greater than 300 can be made? (Numbers may have 1 to 5 digits.)", (() => { let c = 0; const go = (cur, used) => { if (cur && +cur > 300) c++; if (cur.length === 5) return; for (const d of "12345") if (!used.includes(d)) go(cur + d, used + d); }; go("", ""); return c; })(), "3-digit: 3 × 4 × 3 = 36 starting with 3, 4, 5; 4-digit: 5 × 4 × 3 × 2; 5-digit: 5!."),
  num("A menu has 4 starters, 6 mains and 3 desserts. A meal is a main with a starter, a dessert, both, or neither. How many meals?", 6 * 5 * 4, "Starter: 4 or none (5 options); dessert: 3 or none (4 options); × 6 mains."),
  num("The slot diagram is for 4-digit numbers that are odd and have distinct digits. Fill in the missing box: what number goes in the second slot?", 8, "Units: 5 odd digits; thousands: 8 (not 0, not the units digit); hundreds: 8 remain.", slotsSvg([["thousands", 8, "amber"], ["hundreds", "?"], ["tens", 7], ["units", 5, "red"]])),
  num("The table lists outcomes for two stages. If a third stage with 4 choices is added, how many outcomes are there in total?", 36, "9 cells × 4.", tableSvg([["", "a", "b", "c"], ["X", "Xa", "Xb", "Xc"], ["Y", "Ya", "Yb", "Yc"], ["Z", "Za", "Zb", "Zc"]], { rowHead: true })),
  num("From the bag shown, a person takes one marble of one colour, OR one red and one blue together. How many ways? (All marbles are different.)", 4 + 3 + 5 + 4 * 3, "Single marble: 12 ways; a red–blue pair: 4 × 3.", poolSvg([[4, "red", "red"], [3, "blue", "blue"], [5, "green", "green"]], { per: 12 })),
  num("The tree diagram shows a game: a coin is tossed; on heads a die is rolled, on tails a second coin is tossed. How many outcomes?", 8, "6 after H, 2 after T: add the branches.", treeSvg([{ t: "H", c: ["1", "2", "3", "4", "5", "6"].map((x) => ({ t: x })) }, { t: "T", c: [{ t: "H" }, { t: "T" }] }], { heads: ["coin", "second"] })),
  ms("A password has 6 characters, each a letter (26) or a digit (10). Which are correct? Select all.", ["there are 36⁶ passwords", "there are 26⁶ passwords with no digit", "36⁶ − 26⁶ passwords contain at least one digit", "there are 10⁶ × 26⁶ passwords", "36⁶ − 10⁶ passwords contain at least one letter"], [0, 1, 2, 4], "Each character has 36 options; use complements."),
  mc("How many 3-digit numbers have the tens digit greater than both the hundreds and units digits?", String(countNums(100, 999, (s) => s[1] > s[0] && s[1] > s[2])), [String(countNums(100, 999, (s) => s[1] > s[0])), String(9 * 10 * 10 / 3), "285"], "For tens digit t: t − 1 choices for the hundreds (1 to t − 1) and t for the units (0 to t − 1); sum over t."),
  tf("The number of 4-digit numbers with at least one repeated digit is 9000 − 4536.", true, "4536 have all digits distinct (9 × 9 × 8 × 7)."),
  tf("There are more 4-digit numbers with distinct digits than with at least one repeated digit.", true, "4536 > 4464."),
  num("A student must choose one course from each of 3 blocks. Block A has 5 courses, block B has 4, block C has 6, but the student refuses to take both Physics (in A) and Art (in C). How many timetables?", 5 * 4 * 6 - 4, "All 120 minus the 4 that contain both Physics and Art."),
  num("How many 6-character licence plates have 3 letters then 3 digits, with no letter repeated, no digit repeated, and the digits in decreasing order?", 26 * 25 * 24 * 120, "Choose 3 different digits: 120 sets, each with one decreasing order."),
];
