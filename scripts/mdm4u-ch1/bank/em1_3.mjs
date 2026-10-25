// 1.3 Permutations with Identical Objects — 20 easy + 20 medium questions
import { mc, ms, num, tf } from "./kit.mjs";
import { tilesSvg, poolSvg, gridSvg } from "../../mdm4u/figs.mjs";
import { multi, countPerms } from "../../mdm4u/count.mjs";

const w = (s) => s.split("");

export const E = [
  num("How many arrangements of the letters of TOO are there?", multi("TOO"), "3!/2!."),
  num("How many arrangements of the letters of NOON are there?", multi("NOON"), "4!/(2! 2!)."),
  num("How many arrangements of the letters of MOON are there?", multi("MOON"), "4!/2!."),
  num("How many arrangements of the letters of GEESE are there?", multi("GEESE"), "5!/3!."),
  num("How many arrangements of the letters of KAYAK are there?", multi("KAYAK"), "5!/(2! 2!)."),
  num("How many arrangements of the letters of DADDY are there?", multi("DADDY"), "5!/3!."),
  num("How many arrangements of the letters of ROTOR are there?", multi("ROTOR"), "5!/(2! 2!)."),
  num("In how many orders can 3 identical red and 2 identical white flags be flown in a row?", multi([3, 2]), "5!/(3! 2!)."),
  num("In how many ways can 6 coin tosses give 3 heads and 3 tails?", multi([3, 3]), "6!/(3! 3!)."),
  num("How many shortest routes go 3 blocks east and 1 block north?", 4, "4!/3!.", gridSvg(3, 1)),
  num("The tiles show the letters of a word. How many distinguishable arrangements are there?", multi("ADDED"), "D × 3, A, E.", tilesSvg(["A", "D", "D", "E", "D"], { colors: { D: "red" } })),
  mc("Which expression counts the arrangements of the letters of ERROR?", "$\\dfrac{5!}{3!}$", ["$5!$", "$\\dfrac{5!}{2!}$", "$\\dfrac{5!}{3!\\,2!}$"], "R appears 3 times; E and O once."),
  mc("Which expression counts the arrangements of the letters of BOOKS?", "$\\dfrac{5!}{2!}$", ["$5!$", "$\\dfrac{5!}{2!\\,2!}$", "$4!$"], "O appears twice."),
  tf("The word CAT and the word TOT have the same number of arrangements.", false, "CAT: 6, TOT: 3."),
  tf("We divide by $a!$ because swapping identical objects does not create a new arrangement.", true, "Each arrangement was counted a! times."),
  tf("The arrangements of AAAA number 4! = 24.", false, "All A's are identical: only 1."),
  num("A row of 7 light bulbs has 4 identical on and 3 identical off. How many on/off patterns?", multi([4, 3]), "7!/(4! 3!)."),
  num("How many arrangements of the letters of TATTOO are there?", multi("TATTOO"), "T × 3, O × 2: 6!/(3! 2!)."),
  num("How many arrangements of the letters of SEES are there?", multi("SEES"), "4!/(2! 2!)."),
  num("The bag holds 2 identical green and 3 identical yellow balls. In how many colour orders can all 5 be drawn?", multi([2, 3]), "5!/(2! 3!).", poolSvg([[2, "green", "green"], [3, "amber", "yellow"]])),
];

export const M = [
  num("How many arrangements of the letters of BOOKKEEPER are there?", multi("BOOKKEEPER"), "O 2, K 2, E 3: 10!/(2! 2! 3!)."),
  num("How many arrangements of the letters of ASSESSMENT are there?", multi("ASSESSMENT"), "S 4, E 2: 10!/(4! 2!)."),
  num("How many arrangements of the letters of COMMITTEE are there?", multi("COMMITTEE"), "M 2, T 2, E 2: 9!/(2! 2! 2!)."),
  num("How many arrangements of the letters of SUCCESS begin with S?", countPerms(w("SUCCESS"), (a) => a[0] === "S"), "Fix S: arrange U C C E S S (C 2, S 2)."),
  num("How many arrangements of the letters of BALLOON end with N?", countPerms(w("BALLOON"), (a) => a[6] === "N"), "Fix N: B A L L O O: 6!/(2! 2!)."),
  num("How many arrangements of the letters of LETTERS have the two E's at the ends?", countPerms(w("LETTERS"), (a) => a[0] === "E" && a[6] === "E"), "Middle L T T R S: 5!/2!."),
  num("In how many ways can 10 coin tosses give exactly 4 heads?", multi([4, 6]), "10!/(4! 6!)."),
  num("How many shortest routes go 5 blocks east and 4 blocks north?", multi([5, 4]), "9!/(5! 4!)."),
  num("How many 7-digit numbers can be formed by arranging the digits 1, 1, 1, 2, 2, 3, 3?", multi([3, 2, 2]), "7!/(3! 2! 2!)."),
  num("How many 6-digit numbers can be made by arranging 0, 0, 1, 1, 1, 2 (no leading 0)?", (() => { let c = 0; const seen = new Set(); const go = (cur, rest) => { if (!rest.length) { if (cur[0] !== "0" && !seen.has(cur)) { seen.add(cur); c++; } return; } rest.forEach((d, i) => go(cur + d, rest.filter((_, j) => j !== i))); }; go("", w("001112")); return c; })(), "All 6!/(2! 3!) = 60, minus those starting with 0: 5!/(3!) = 20."),
  num("A team's 12-game season ends with 7 wins, 3 losses and 2 ties. In how many orders could the results occur?", multi([7, 3, 2]), "12!/(7! 3! 2!)."),
  ms("Which words have exactly 60 arrangements? Select all.", ["BANANA", "PEPPER", "CANADA", "LEVEL", "LITTLE"], [0, 1], "BANANA 60, PEPPER 60, CANADA 120, LEVEL 30, LITTLE 180."),
  mc("Which word has the most arrangements?", "PARADE", ["PAPAYA", "TOFFEE", "REVERE"], "PARADE: 360; PAPAYA: 60; TOFFEE: 180; REVERE: 60."),
  tf("The number of arrangements of AABB equals the number of shortest routes on a 2 by 2 grid.", true, "Both are 4!/(2! 2!) = 6."),
  tf("Fixing a repeated letter in the first position never changes the denominator.", false, "The fixed letter leaves one fewer of its kind."),
  num("How many arrangements of the letters of INDIGO have the two I's together?", countPerms(w("INDIGO"), (a) => a.join("").includes("II")), "Block II + N, D, G, O: 5!."),
  num("How many arrangements of the letters of EERIE are there?", multi("EERIE"), "E 3: 5!/3!."),
  num("A shelf holds 4 identical blue binders, 3 identical red binders and 1 green binder. How many colour orders?", multi([4, 3, 1]), "8!/(4! 3!).", tilesSvg(["B", "B", "B", "B", "R", "R", "R", "G"], { colors: { B: "blue", R: "red", G: "green" } })),
  num("The grid shows one shortest route. How many shortest routes from A to B are there?", multi([6, 2]), "8 moves, 6 E and 2 N.", gridSvg(6, 2, { path: "RRURRRRU" })),
  num("How many arrangements of the letters of ELEVEN begin and end with E?", countPerms(w("ELEVEN"), (a) => a[0] === "E" && a[5] === "E"), "Middle L E V N: 4!."),
];
