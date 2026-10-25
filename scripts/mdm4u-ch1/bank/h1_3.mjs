// 1.3 Permutations with Identical Objects — 20 hard questions
import { mc, ms, num, tf } from "./kit.mjs";
import { tilesSvg, poolSvg, gridSvg } from "../../mdm4u/figs.mjs";
import { multi, countPerms } from "../../mdm4u/count.mjs";

const w = (s) => s.split("");
const vowels = (ch) => "AEIOU".includes(ch);
/** distinct arrangements of a multiset satisfying pred (brute force over unique permutations) */
const cp = (s, pred) => countPerms(w(s), pred);

export const TOPIC = "1.3 Permutations with Identical Objects";
export const Q = [
  num("How many arrangements of the letters of MISSISSAUGA are there?", multi("MISSISSAUGA"), "S 4, I 2, A 2: 11!/(4! 2! 2!)."),
  num("How many arrangements of the letters of TENNESSEE are there?", multi("TENNESSEE"), "E 4, N 2, S 2: 9!/(4! 2! 2!)."),
  num("How many arrangements of the letters of CHEESE have all the E's together?", cp("CHEESE", (a) => a.join("").includes("EEE")), "Block EEE + C, H, S: 4!."),
  num("How many arrangements of the letters of COOKIE have the vowels in alphabetical order (E before I before O, O's identical)?", cp("COOKIE", (a) => { const v = a.filter(vowels).join(""); return v === "EIOO"; }), "Choose the 4 vowel places: 6C4 = 15 (the vowels then have one order); arrange C and K: 2!. 15 × 2."),
  num("How many arrangements of BANANAS have no two A's side by side?", cp("BANANAS", (a) => !a.join("").includes("AA")), "Arrange B, N, N, S (4!/2! = 12), then put the 3 A's in 3 of the 5 gaps (₅C₃ = 10)."),
  num("How many arrangements of the letters of REFEREE have the R's at both ends?", cp("REFEREE", (a) => a[0] === "R" && a[6] === "R"), "Middle E F E E E: 5!/4!."),
  num("How many 5-letter arrangements can be made from the letters of APPLE? (Use all five letters.) How many of them start and end with P? Enter the second number.", cp("APPLE", (a) => a[0] === "P" && a[4] === "P"), "Fix both P's: arrange A, L, E: 3!."),
  num("How many 4-letter arrangements can be made from the letters of ALPACA (choose any 4 of the 6 letters)?", (() => { const s = new Set(); const L = w("ALPACA"); const go = (cur, used) => { if (cur.length === 4) { s.add(cur); return; } L.forEach((ch, i) => { if (!used.includes(i)) go(cur + ch, [...used, i]); }); }; go("", []); return s.size; })(), "Cases by the number of A's: 3 A's: 3 × 4 = 12; 2 A's: 3 × 12 = 36; 1 A: 4! = 24; total 72."),
  num("A coin is tossed 9 times. In how many sequences are there more heads than tails?", [5, 6, 7, 8, 9].reduce((s, h) => s + multi([h, 9 - h]), 0), "Sum 9!/(h!(9 − h)!) for h = 5 to 9, or half of 2⁹."),
  num("How many shortest routes on a 5 by 5 grid pass through the centre region corner (2, 3)?", multi([2, 3]) * multi([3, 2]), "A→(2, 3): 5!/(2! 3!); (2, 3)→B: 5!/(3! 2!).", gridSvg(5, 5, { mark: [[2, 3, "P"]] })),
  num("How many 8-digit numbers can be formed using all the digits 2, 2, 2, 5, 5, 7, 7, 7 that are divisible by 5?", multi([3, 1, 3]), "Last digit 5: arrange 2, 2, 2, 5, 7, 7, 7: 7!/(3! 3!)."),
  num("How many arrangements of the letters of PEPPERONI have the three P's together?", cp("PEPPERONI", (a) => a.join("").includes("PPP")), "Block + E, E, R, O, N, I: 7!/2!."),
  num("The tiles show a word with its repeated letters coloured. How many arrangements keep the two coloured T's apart?", multi("LATTE") - cp("LATTE", (a) => a.join("").includes("TT")), "All 5!/2! = 60 minus TT together 4! = 24.", tilesSvg(["L", "A", "T", "T", "E"], { colors: { T: "red" } })),
  num("The bag holds identical marbles in the colours shown. In how many colour orders can all of them be drawn one at a time?", multi([3, 2, 4]), "9!/(3! 2! 4!).", poolSvg([[3, "red", "red"], [2, "blue", "blue"], [4, "green", "green"]], { per: 9 })),
  num("The grid has a closed street (red dashes). Each route is an arrangement of E and N moves that avoids that street. How many routes?", (() => { const blocked = "2,1,3,1"; const c = Array.from({ length: 5 }, () => Array(4).fill(0)); for (let x = 0; x <= 4; x++) for (let y = 0; y <= 3; y++) c[x][y] = !x && !y ? 1 : (x && `${x - 1},${y},${x},${y}` !== blocked ? c[x - 1][y] : 0) + (y ? c[x][y - 1] : 0); return c[4][3]; })(), "All 35 minus routes using the closed street.", gridSvg(4, 3, { blocked: [[2, 1, 3, 1]] })),
  num("How many arrangements of the letters of ARRANGE have the A's in the first and last positions?", cp("ARRANGE", (a) => a[0] === "A" && a[6] === "A"), "Middle R R N G E: 5!/2!."),
  ms("Which statements about arrangements of MISSISSIPPI are true? Select all.", ["there are 34 650 arrangements", "there are 4 200 arrangements starting with M", "the number starting with S equals the number starting with I", "the number ending in P is 6 300", "no arrangement is a palindrome"], [0, 2, 3], "Start with M: 10!/(4! 4! 2!) = 3150; start with S or I: 10!/(3! 4! 2!) = 12 600; end in P: 10!/(4! 4!) = 6300; palindromes do exist (M in the middle), so the last statement is false."),
  mc("Which expression counts the arrangements of the 10 letters of STATISTICS in which the letter A is first?", "$\\dfrac{9!}{3!\\,3!\\,2!}$", ["$\\dfrac{10!}{3!\\,3!\\,2!}$", "$\\dfrac{9!}{3!\\,3!}$", "$9!$"], "Fix A; remaining S 3, T 3, I 2, C."),
  tf("The number of 10-toss sequences with 3 heads equals the number with 7 heads.", true, "10!/(3! 7!) both ways."),
  tf("Every word with a repeated letter has fewer arrangements than a word of the same length with all different letters.", true, "Dividing by a! with a ≥ 2 makes it smaller."),
];
