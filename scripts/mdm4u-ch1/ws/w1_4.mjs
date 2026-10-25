// MDM4U Worksheet 1.4 — Permutations with Constraints (teacher edition)
import { svgT, tilesSvg, seatsSvg } from "./figT.mjs";
import { fact, P, n, countPerms } from "../../mdm4u/count.mjs";

const S = String.raw;
const L = (k) => "ABCDEFGHIJ".slice(0, k).split("");
const adj = (a, x, y) => Math.abs(a.indexOf(x) - a.indexOf(y)) === 1;
const v = {
  ex2: countPerms(L(8), (a) => adj(a, "A", "B")),
  ex3: countPerms(L(8), (a) => !adj(a, "A", "B")),
  ex5: countPerms(L(6), (a) => a.indexOf("A") < a.indexOf("B") && a.indexOf("B") < a.indexOf("C")),
  ex7: countPerms(["M1", "M2", "M3", "W1", "W2", "W3", "W4", "W5"], (a) => a.every((x, i) => i === 0 || !(x[0] === "M" && a[i - 1][0] === "M"))),
  ex8: countPerms(L(7), (a) => a[0] !== "A"),
  p9: countPerms(L(7), (a) => !adj(a, "A", "B") && !adj(a, "A", "C")),
  p10: countPerms(["G1", "G2", "G3", "G4", "B1", "B2", "B3", "B4"], (a) => a.every((x, i) => i === 0 || x[0] !== a[i - 1][0])),
};

const EXAMPLES = [
  { title: "Fixed positions", q: "In how many ways can 7 people line up if the oldest is first and the youngest is last?", steps: ["Place the two fixed people: 1 way.", S`Arrange the middle 5: $5!$.`], ans: "120" },
  { title: "A pair together", q: "Eight friends line up for a photo. Ali and Bea insist on standing together. How many arrangements?", fig: svgT(tilesSvg(["A", "B", "C", "D", "E", "F", "G", "H"], { groups: [[0, 1]], colors: { A: "red", B: "red" }, tw: 34 }), 5.6), steps: [S`Block + 6 others = 7 items: $7!$.`, S`Inside the block: $2!$. $7!\times2!=10\,080$.`], ans: n(v.ex2) },
  { title: "A pair apart", q: "Same eight friends: how many arrangements keep Ali and Bea apart?", steps: [S`All: $8!=40\,320$.`, S`Apart $=40\,320-10\,080$.`], ans: n(v.ex3) },
  { title: "At the ends", q: "In how many ways can 6 books be arranged if the two largest must be at the two ends?", steps: [S`Large books at the ends: $2!$ ways.`, S`Middle 4 books: $4!$. $2\times24$.`], ans: "48" },
  { title: "In a given order", q: "Six runners A--F finish a race. In how many orders does A finish before B and B before C (not necessarily consecutively)?", steps: [S`A, B, C can be in $3!=6$ relative orders, all equally common.`, S`Only one of these is A, B, C: $\frac{6!}{3!}=120$.`], ans: `${v.ex5}` },
  { title: "Round table", q: "In how many ways can 9 people sit around a circular table?", fig: svgT(seatsSvg(["1", "2", "3", "4", "5", "6", "7", "8", "9"], { hl: [0] }), 3.6), steps: [S`Fix one person: $(9-1)!=8!$.`], ans: n(fact(8)) },
  { title: "No two together (gaps)", q: "Three men and five women line up so that no two men are side by side. How many arrangements?", fig: svgT(tilesSvg(["_", "W", "_", "W", "_", "W", "_", "W", "_", "W", "_"], { colors: { W: "violet" }, tw: 28 }), 5.6), steps: [S`Women first: $5!=120$. They create 6 gaps.`, S`Place the 3 men in 3 of the 6 gaps in order: $P(6,3)=120$.`, S`$120\times120=14\,400$.`], ans: n(v.ex7) },
  { title: "Not first", q: "How many ways can 7 people line up if Ana is not first?", steps: [S`Complement: $7!-6!=5040-720=4320$.`, S`(Or: first place 6 choices, then $6!$: $6\times720$.)`], ans: n(v.ex8) },
  { title: "Necklace", q: "How many different necklaces can be made with 7 different beads (the necklace can be turned over)?", steps: [S`Circle: $(7-1)!=720$; turning over pairs the arrangements: $\frac{720}{2}$.`], ans: "360" },
];

const PROBLEMS = [
  { level: 1, q: "How many arrangements of the letters of NUMBERS begin with N and end with S?", ans: S`$5!=120$` },
  { level: 1, q: "In how many ways can 5 people sit around a round table?", ans: S`$4!=24$` },
  { level: 1, q: "In how many ways can 6 children line up if the twins must stand together?", ans: S`$5!\times2!=240$` },
  { level: 2, q: "In how many ways can 6 children line up if the twins must NOT stand together?", ans: S`$720-240=480$` },
  { level: 2, q: "A 5-letter arrangement is made from the letters of DECIMAL (no repeats). How many begin with a vowel and end with a consonant?", ans: S`vowels E, I, A (3), consonants D, C, M, L (4): $3\times4\times P(5,3)=12\times60=720$` },
  { level: 2, q: "In how many ways can 4 Canadian and 3 American flags (all different) be hung in a row if the Canadian flags are together and the American flags are together?", fig: svgT(tilesSvg(["C", "C", "C", "C", "U", "U", "U"], { colors: { C: "red", U: "blue" }, groups: [[0, 3], [4, 6]] }), 4.6), ans: S`$2!\times4!\times3!=288$`, space: 4 },
  { level: 2, q: "Seven students sit in a row. In how many ways can they sit if Kai must be in the middle seat?", ans: S`$6!=720$` },
  { level: 2, q: "Six people sit at a round table. In how many seatings do Jo and Lin sit next to each other?", ans: S`block: $(5-1)!\times2!=48$` },
  { level: 3, space: 4.5, q: "Seven people line up. Ana must not stand next to Ben, and Ana must not stand next to Cal. How many arrangements? (Hint: place Ana first and count where Ben and Cal can go, or use inclusion–exclusion.)", ans: S`Ana at an end: $2\times4\times5!=960$; Ana in one of 5 middle seats: $5\times P(4,2)\times4!=1440$; total ${n(v.p9)}` },
  { level: 3, space: 4.5, q: "Four girls and four boys stand in a line so that girls and boys alternate. How many arrangements?", ans: S`two patterns (GBGB… or BGBG…): $2\times4!\times4!=${v.p10}$` },
  { level: 3, space: 4.5, q: "How many arrangements of the letters of PENCILS have the vowels E and I separated by exactly two letters?", ans: S`positions for E, I: (1,4), (2,5), (3,6), (4,7) and reversed: 8 ways; other 5 letters: $5!$; total $960$` },
  { level: 3, space: 4.5, q: "Five couples sit around a round table. In how many ways can they sit if every couple sits together? What fraction of all seatings is that?", ans: S`$(5-1)!\times2^5=768$; all seatings $9!=362\,880$; fraction $\frac{768}{362\,880}=\frac{2}{945}$` },
  { level: 3, space: 5, q: "Eight people stand in a line. Three of them (X, Y, Z) must stand in alphabetical order from left to right, though not necessarily together. How many arrangements? Explain using symmetry.", ans: S`the 3 can be ordered in $3!$ ways equally often; $\frac{8!}{3!}=6720$` },
];

export const WS = {
  code: "1.4",
  title: "Permutations with Constraints",
  bigideas: S`Deal with the constraint first, then arrange the rest. Objects together: glue them into a block (and arrange inside). Objects apart: all $-$ together, or place them in the gaps. Fixed order: divide by the orders of the restricted objects. Around a circle: $(n-1)!$.`,
  goals: ["Fix restricted positions first.", "Use blocks for objects that must be together.", "Use the complement or gaps for objects that must be apart.", "Count circular arrangements and fixed relative orders."],
  curriculum: "A2.2 (permutations of distinct objects with conditions); A2.1 (choose an efficient technique)",
  vocab: [["Block", "objects glued together and treated as one"], ["Gaps", "spaces between and around arranged objects"], ["Circular arrangement", "only relative order matters: $(n-1)!$"]],
  hook: "A wedding planner has 8 guests for a round table, and two of them must not sit together. How would you count the seatings?",
  concepts: [
    ["1. Together (block)", S`${svgT(tilesSvg(["X", "Y", "1", "2", "3"], { groups: [[0, 1]], colors: { X: "red", Y: "red" } }), 3.6)}$(n-k+1)!\times k!$ for $k$ objects that must be together.`],
    ["2. Apart", S`One pair apart: $n!-(n-1)!\,2!$. Several objects apart: arrange the others, then choose gaps with $P(\text{gaps},k)$.`],
    ["3. Circles and order", S`Round table: $(n-1)!$. Flippable ring: $\frac{(n-1)!}{2}$. $k$ objects in a fixed relative order: $\frac{n!}{k!}$.`],
  ],
  tips: ["Arrange inside the block.", "Gaps: number of gaps = (others) + 1.", "“Not first” is quickest as all − first.", "Round table: fix one seat.", "Check with a small case."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
