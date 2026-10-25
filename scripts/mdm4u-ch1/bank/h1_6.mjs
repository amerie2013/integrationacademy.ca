// 1.6 Combinations with Cases & the Complement — 20 hard questions
import { mc, ms, num, tf } from "./kit.mjs";
import { poolSvg, vennSvg, barsSvg } from "../../mdm4u/figs.mjs";
import { C } from "../../mdm4u/count.mjs";

/** count k-subsets of a labelled pool (array of group labels) satisfying pred(counts by label) */
function subsets(pool, k, pred) {
  let c = 0; const cnt = {};
  const go = (s, left) => { if (!left) { if (pred(cnt)) c++; return; } for (let i = s; i < pool.length; i++) { cnt[pool[i]] = (cnt[pool[i]] || 0) + 1; go(i + 1, left - 1); cnt[pool[i]]--; } };
  go(0, k); return c;
}
const pool = (spec) => Object.entries(spec).flatMap(([g, k]) => Array(k).fill(g));

export const TOPIC = "1.6 Combinations with Cases & the Complement";
export const Q = [
  num("A 5-person committee is chosen from 6 teachers, 5 parents and 4 students. How many committees have at least one of each?", subsets(pool({ T: 6, P: 5, S: 4 }), 5, (c) => c.T > 0 && c.P > 0 && c.S > 0), "Total − missing teachers − missing parents − missing students + (missing two groups)."),
  num("How many 5-card hands contain at least one card of each suit? (Hint: one suit appears twice.)", 4 * C(13, 2) * 13 ** 3, "Choose the doubled suit (4) and its 2 cards, then 1 card from each of the other 3 suits."),
  num("How many 5-card hands contain at least 3 face cards (J, Q, K)?", [3, 4, 5].reduce((s, k) => s + C(12, k) * C(40, 5 - k), 0), "Cases 3, 4, 5 face cards."),
  num("From 8 men and 6 women, a committee of 5 must have at least 2 women and at least 2 men. How many committees?", subsets(pool({ M: 8, W: 6 }), 5, (c) => (c.W || 0) >= 2 && (c.M || 0) >= 2), "Cases 2W3M and 3W2M."),
  num("From 10 people including Ana and Ben, a committee of 4 must include at least one of Ana and Ben. How many committees?", C(10, 4) - C(8, 4), "Total − neither."),
  num("From 10 people including Ana and Ben, a committee of 4 must not include both Ana and Ben. How many committees?", C(10, 4) - C(8, 2), "Total − both."),
  num("A shelf has 4 identical math books, 3 identical science books and 5 different novels. How many selections of at least one book include at least one novel?", 5 * 4 * (2 ** 5 - 1), "Math 0–4 (5), science 0–3 (4), novels non-empty (2⁵ − 1)."),
  num("How many positive divisors does 720 = 2⁴ × 3² × 5 have?", 5 * 3 * 2, "Each divisor chooses a power of 2 (0–4), of 3 (0–2), of 5 (0–1)."),
  num("How many positive divisors of 720 are even?", 4 * 3 * 2, "Power of 2 from 1 to 4."),
  num("A coin bag holds 4 identical quarters, 3 identical dimes and 2 identical nickels. How many different sums of money (more than 0 cents) can be formed?", (() => { const s = new Set(); for (let q = 0; q <= 4; q++) for (let d = 0; d <= 3; d++) for (let n = 0; n <= 2; n++) if (q + d + n) s.add(25 * q + 10 * d + 5 * n); return s.size; })(), "Some selections give the same sum (e.g. 2 nickels = 1 dime): list the sums."),
  num("The Venn diagram shows the sports of 100 students. How many play exactly two of the three sports?", 8 + 6 + 5, "Add the regions inside exactly two circles.", vennSvg({ A: "soccer", B: "track", C: "swim", n: { a: 25, b: 18, c: 14, ab: 8, ac: 6, bc: 5, abc: 4, out: 20 } })),
  num("Use the same Venn diagram (100 students). How many play soccer or track (or both)?", 25 + 18 + 8 + 6 + 5 + 4, "Everything inside the soccer or track circle.", vennSvg({ A: "soccer", B: "track", C: "swim", n: { a: 25, b: 18, c: 14, ab: 8, ac: 6, bc: 5, abc: 4, out: 20 }, shade: ["a", "b", "ab", "ac", "bc", "abc"] })),
  num("The bars count 5-person committees from 6 women and 6 men by number of women. How many committees have a majority of women?", [3, 4, 5].reduce((s, w) => s + C(6, w) * C(6, 5 - w), 0), "Add the bars for 3, 4, 5 women.", barsSvg([0, 1, 2, 3, 4, 5].map((w) => C(6, w) * C(6, 5 - w)), { labels: ["0", "1", "2", "3", "4", "5"], top: true, hl: [3, 4, 5], xlabel: "women", ylabel: "committees" })),
  num("The pool shows a box of light bulbs: 4 defective (red) and 11 good (green). A sample of 3 is taken. How many samples contain at least one defective bulb?", C(15, 3) - C(11, 3), "Total − all good.", poolSvg([[4, "red", "defective"], [11, "green", "good"]], { per: 15 })),
  num("How many 4-letter selections (order does not matter) from the letters of BALLOON are possible? (Identical letters are not distinguished.)", (() => { const s = new Set(); const L = "BALLOON".split(""); const go = (st, cur) => { if (cur.length === 4) { s.add([...cur].sort().join("")); return; } for (let i = st; i < L.length; i++) go(i + 1, cur + L[i]); }; go(0, ""); return s.size; })(), "Cases by how many L's and O's are used."),
  ms("From 5 boys and 4 girls a 4-person team is chosen. Which are correct? Select all.", ["at least 1 girl: 121", "exactly 2 girls: 60", "more boys than girls: 45", "at most 1 boy: 25", "all the same gender: 6"], [0, 1, 2, 4], "126 − 5 = 121; ₄C₂ × ₅C₂ = 60; 3B1G 40 + 4B 5 = 45; at most 1 boy = 1 + 20 = 21, not 25; 5 + 1 = 6."),
  mc("Which count is NOT equal to the number of 5-card hands with at least one ace?", "$4\\binom{51}{4}$", ["$\\binom{52}5-\\binom{48}5$", "$\\sum_{k=1}^{4}\\binom4k\\binom{48}{5-k}$", "$886\\,656$"], "4 × ₅₁C₄ counts hands with several aces more than once."),
  tf("The number of selections of at least one item from 3 identical red and 3 identical blue balls equals 15.", true, "4 × 4 − 1 = 15."),
  tf("If A and B are disjoint, n(A ∪ B) = n(A) + n(B).", true, "No overlap to subtract."),
  num("A 6-question test is drawn from 5 algebra, 4 geometry and 3 probability questions. It must have at least 2 algebra and at least 1 of each other type. How many tests?", subsets(pool({ A: 5, G: 4, P: 3 }), 6, (c) => (c.A || 0) >= 2 && (c.G || 0) >= 1 && (c.P || 0) >= 1), "List the (A, G, P) cases that add to 6."),
];
