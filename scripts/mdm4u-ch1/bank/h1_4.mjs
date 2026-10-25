// 1.4 Permutations with Constraints — 20 hard questions
import { mc, ms, num, tf } from "./kit.mjs";
import { tilesSvg, seatsSvg } from "../../mdm4u/figs.mjs";
import { fact, P, countPerms } from "../../mdm4u/count.mjs";

const L = (k) => "ABCDEFGHIJ".slice(0, k).split("");
const adj = (a, x, y) => Math.abs(a.indexOf(x) - a.indexOf(y)) === 1;
/** circular arrangements: fix the first item and permute the rest; pred gets the full circle */
const circ = (items, pred) => countPerms(items.slice(1), (rest) => pred([items[0], ...rest]));
const cadj = (a, x, y) => { const d = Math.abs(a.indexOf(x) - a.indexOf(y)); return d === 1 || d === a.length - 1; };

export const TOPIC = "1.4 Permutations with Constraints";
export const Q = [
  num("Eight people line up. A and B must be together, and C must not be at either end. How many arrangements?", countPerms(L(8), (a) => adj(a, "A", "B") && a[0] !== "C" && a[7] !== "C"), "AB together: 7! × 2 = 10 080; subtract C at an end with AB together: 2 × 6! × 2 = 2880."),
  num("Seven people line up. A, B and C must all be apart from each other (no two of them adjacent). How many arrangements?", countPerms(L(7), (a) => !adj(a, "A", "B") && !adj(a, "A", "C") && !adj(a, "B", "C")), "Arrange the other 4 (4!), put A, B, C into 3 of the 5 gaps (₅P₃)."),
  num("How many arrangements of the letters of EDUCATION have the vowels together?", countPerms("EDUCATION".split(""), (a) => { const idx = a.map((c, i) => ("AEIOU".includes(c) ? i : -1)).filter((i) => i >= 0); return idx[4] - idx[0] === 4; }), "5 vowels in a block: 5! inside; block + D, C, T, N = 5 items: 5!."),
  num("How many arrangements of the letters of EDUCATION have no two vowels side by side?", countPerms("EDUCATION".split(""), (a) => a.every((c, i) => i === 0 || !("AEIOU".includes(c) && "AEIOU".includes(a[i - 1])))), "4 consonants make 5 gaps for 5 vowels: 4! × 5!."),
  num("Eight people sit at a round table. A and B must sit opposite each other. How many seatings?", circ(L(8), (a) => Math.abs(a.indexOf("A") - a.indexOf("B")) === 4), "Fix A; B goes directly opposite (1 way); the other 6 in 6!."),
  num("Six people sit at a round table. A must not sit next to B. How many seatings?", circ(L(6), (a) => !cadj(a, "A", "B")), "5! − 4! × 2."),
  num("Four men and four women sit at a round table, alternating men and women. How many seatings?", circ(["M1", "W1", "M2", "W2", "M3", "W3", "M4", "W4"], (a) => a.every((x, i) => x[0] !== a[(i + 1) % 8][0])), "Seat the men around the table: 3!; the women into the 4 gaps: 4!."),
  num("Five people line up. A must be ahead of B, and B must be ahead of C (anywhere). D must be first. How many arrangements?", countPerms(L(5), (a) => a[0] === "D" && a.indexOf("A") < a.indexOf("B") && a.indexOf("B") < a.indexOf("C")), "D fixed; the other 4 arranged with A, B, C in order: 4!/3!."),
  num("In how many ways can 9 people be split into a line of 4 at the front and a line of 5 at the back, if the tallest person must be in the back row?", 5 * fact(8), "Tallest: 5 back places; the other 8 people fill 8 places: 8!."),
  num("How many 6-digit numbers with distinct digits from 1–9 have the digits 1 and 2 next to each other?", (() => { let c = 0; const ds = "123456789"; const go = (cur) => { if (cur.length === 6) { if (Math.abs(cur.indexOf("1") - cur.indexOf("2")) === 1 && cur.includes("1") && cur.includes("2")) c++; return; } for (const d of ds) if (!cur.includes(d)) go(cur + d); }; go(""); return c; })(), "Choose the other 4 digits from 7 (₇C₄ = 35), arrange them with the block (5!), and the block is 12 or 21: 35 × 120 × 2."),
  num("The tiles show 4 red and 4 blue different cards. How many arrangements have no two red cards next to each other?", fact(4) * P(5, 4), "Blue first (4!), reds into 4 of 5 gaps (₅P₄).", tilesSvg(["B", "B", "B", "B", "R", "R", "R", "R"], { colors: { B: "blue", R: "red" } })),
  num("The 7 people shown sit around the table. A and B must sit together, and C must not sit next to A. How many seatings?", circ(L(7), (a) => cadj(a, "A", "B") && !cadj(a, "C", "A")), "Block AB around the table, then place C away from A's free side.", seatsSvg(L(7), { hl: [0, 1] })),
  num("The tiles show a block of three that must stay together in the given order (X, Y, Z). How many arrangements of all 6 tiles?", countPerms(["X", "Y", "Z", "1", "2", "3"], (a) => a.join("").includes("XYZ")), "Block in fixed order + 3 others: 4!.", tilesSvg(["X", "Y", "Z", "1", "2", "3"], { groups: [[0, 2]], colors: { X: "red", Y: "red", Z: "red" } })),
  num("The diagram shows 5 couples at a round table. In how many seatings does every couple sit together?", fact(4) * 2 ** 5, "Blocks: (5 − 1)!; inside: 2⁵.", seatsSvg(["A1", "A2", "B1", "B2", "C1", "C2", "D1", "D2", "E1", "E2"], { hl: [0, 1] })),
  num("How many arrangements of the letters of NUMBERS have the vowels U and E separated by exactly one letter?", countPerms("NUMBERS".split(""), (a) => Math.abs(a.indexOf("U") - a.indexOf("E")) === 2), "Positions (1,3), (2,4), …, (5,7): 5 pairs × 2 orders × 5!."),
  ms("Seven people line up. Which counts are correct? Select all.", ["A, B, C together: 360", "A and B at the two ends: 240", "A in the middle: 720", "A, B, C in that relative order: 840", "A, B, C all apart: 1440"], [1, 2, 3, 4], "Together is 5! × 3! = 720, not 360; the other four are correct."),
  mc("Ten people sit around a round table. What fraction of seatings have A next to B?", "$\\dfrac{2}{9}$", ["$\\dfrac{1}{5}$", "$\\dfrac{1}{9}$", "$\\dfrac{2}{10}$"], "8! × 2 / 9! = 2/9."),
  tf("Arranging n people around a round table and then flipping the table (mirror image) gives (n − 1)!/2 different arrangements if mirror images are the same.", true, "Each seating and its mirror are paired (for n ≥ 3)."),
  tf("For 5 people in a line, the number with A and B together plus the number with A and B apart equals 120.", true, "48 + 72 = 120."),
  num("In how many ways can 6 people line up if A must be somewhere ahead of B and B must not be last?", countPerms(L(6), (a) => a.indexOf("A") < a.indexOf("B") && a[5] !== "B"), "A before B: 360; subtract those with B last (A anywhere before): 5! = 120."),
];
