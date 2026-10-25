// MDM4U chapter 1 written-response (long_answer) questions for printed chapter tests (Part C), each with a figure.
// Math uses $…$ delimiters like the other courses; every count is computed.
import { treeSvg, fullTree, slotsSvg, tilesSvg, seatsSvg, vennSvg, pascalSvg, gridSvg, barsSvg, poolSvg } from "../mdm4u/figs.mjs";
import { fact, P, C, multi, countPerms, binTerm } from "../mdm4u/count.mjs";

const T = {
  1: "1.1 The Fundamental Counting Principle", 2: "1.2 Factorials & Permutations of Distinct Objects", 3: "1.3 Permutations with Identical Objects",
  4: "1.4 Permutations with Constraints", 5: "1.5 Combinations", 6: "1.6 Combinations with Cases & the Complement",
  7: "1.7 Pascal's Triangle & Combinatorial Identities", 8: "1.8 The Binomial Theorem",
};
const W = (t, difficulty, points, prompt, feedback, fig) => ({ topic: T[t], difficulty, points, prompt, feedback, kind: "long_answer", answer: null, choices: null, fig });
const S = String.raw;
const L = (k) => "ABCDEFGH".slice(0, k).split("");
const adj = (a, x, y) => Math.abs(a.indexOf(x) - a.indexOf(y)) === 1;
const routes = (w, h, avoid = []) => { const av = new Set(avoid.map((p) => p.join(","))), c = Array.from({ length: w + 1 }, () => Array(h + 1).fill(0)); for (let x = 0; x <= w; x++) for (let y = 0; y <= h; y++) c[x][y] = av.has(`${x},${y}`) ? 0 : !x && !y ? 1 : (x ? c[x - 1][y] : 0) + (y ? c[x][y - 1] : 0); return c[w][h]; };

export const WRITTEN = [
  W(1, "medium", 4, S`A school cafeteria sells a lunch special: a main (pasta P, wrap W or salad S), a side (fruit F or yogurt Y) and a drink (milk M or water A). (a) Draw a tree diagram. (b) How many specials are possible? (c) Explain how the multiplicative counting principle gives the same answer without the tree.`,
    S`(a) Tree with 3, then 2, then 2 branches. (b) 12. (c) $3\times2\times2=12$: each stage's choices multiply because every main can go with every side and every drink. [2, 1, 1.]`,
    treeSvg(fullTree([["P", "W", "S"], ["F", "Y"], ["M", "A"]]), { heads: ["main", "side", "drink"] })),
  W(1, "hard", 5, S`Ontario licence plates have 4 letters followed by 3 digits. (a) How many plates are possible? (b) How many have no repeated letter and no repeated digit? (c) How many contain at least one repeated character (letter or digit)? (d) Explain why you used the complement in (c).`,
    S`(a) $26^4\times10^3=456\,976\,000$. (b) $26\cdot25\cdot24\cdot23\cdot10\cdot9\cdot8=${(26 * 25 * 24 * 23 * 720).toLocaleString("en-US")}$. (c) $456\,976\,000-${(26 * 25 * 24 * 23 * 720).toLocaleString("en-US")}=${(26 ** 4 * 1000 - 26 * 25 * 24 * 23 * 720).toLocaleString("en-US")}$. (d) “At least one repeat” has many cases; “no repeat” is a single count. [1, 1, 2, 1.]`,
    slotsSvg([["L", 26], ["L", 26], ["L", 26], ["L", 26], ["D", 10], ["D", 10], ["D", 10]], { bw: 46 })),
  W(2, "medium", 4, S`(a) Evaluate $\dfrac{12!}{8!\,3!}$. (b) Simplify $\dfrac{(n+2)!-n!}{n!}$. (c) Solve $P(n,2)=90$.`,
    S`(a) $\frac{12\cdot11\cdot10\cdot9}{6}=1980$. (b) $(n+2)(n+1)-1=n^2+3n+1$. (c) $n(n-1)=90\Rightarrow n=10$. [1, 2, 1.]`,
    barsSvg([6, 7, 8, 9, 10].map((k) => P(k, 2)), { labels: ["6", "7", "8", "9", "10"], top: true, xlabel: "n", ylabel: "P(n, 2)" })),
  W(3, "medium", 4, S`(a) How many arrangements of the letters of SASKATCHEWAN are there? (b) How many begin with K? (c) Explain why you divide by factorials.`,
    S`(a) S 2, A 3, others single (12 letters): $\frac{12!}{2!\,3!}=${multi("SASKATCHEWAN").toLocaleString("en-US")}$. (b) Fix K: $\frac{11!}{2!\,3!}=${(fact(11) / 12).toLocaleString("en-US")}$. (c) Swapping identical letters gives the same word, so each word was counted $2!\,3!$ times. [2, 1, 1.]`,
    tilesSvg("SASKATCHEWAN".split(""), { colors: { S: "red", A: "violet" }, tw: 30 })),
  W(3, "hard", 5, S`On the grid, a student walks from home A to school B using only shortest routes. (a) How many routes are there? (b) How many pass through the coffee shop at P? (c) How many avoid P? (d) Explain why each route is an arrangement of letters with repeats.`,
    S`(a) $\frac{9!}{5!\,4!}=126$. (b) $\frac{4!}{2!\,2!}\times\frac{5!}{3!\,2!}=6\times10=60$. (c) $126-60=66$. (d) Each route is a sequence of 5 E's and 4 N's. [1, 2, 1, 1.]`,
    gridSvg(5, 4, { mark: [[2, 2, "P"]] })),
  W(4, "medium", 4, S`Seven students stand in a row for a photo. (a) In how many ways can Ali and Bea stand together? (b) In how many ways can they be apart? (c) In how many ways is Ali at one end and Bea at the other?`,
    S`(a) $6!\times2!=1440$. (b) $7!-1440=3600$. (c) $2\times5!=240$. [2, 1, 1.]`,
    tilesSvg(["A", "B", "C", "D", "E", "F", "G"], { groups: [[0, 1]], colors: { A: "red", B: "red" } })),
  W(4, "hard", 5, S`Four couples go to dinner. (a) In how many ways can the 8 people sit in a row if each couple sits together? (b) In how many ways can they sit around a round table if each couple sits together? (c) In how many ways can they sit around the table if men and women alternate? (d) Explain why round-table counts use $(n-1)!$.`,
    S`(a) $4!\times2^4=384$. (b) $3!\times2^4=96$. (c) Seat the men: $3!$; women in the 4 gaps: $4!$; $144$. (d) Rotating everyone gives the same seating, so fix one person. [1, 1, 2, 1.]`,
    seatsSvg(["M1", "W1", "M2", "W2", "M3", "W3", "M4", "W4"], { hl: [0, 1] })),
  W(5, "medium", 4, S`A club of 12 members chooses (a) a president, vice-president and treasurer, and (b) a 3-member social committee. Count both. (c) Explain how the two answers are related.`,
    S`(a) $P(12,3)=1320$. (b) $\binom{12}3=220$. (c) Each committee can have its jobs assigned in $3!=6$ ways: $220\times6=1320$. [1, 1, 2.]`,
    slotsSvg([["pres.", 12], ["vice", 11], ["treas.", 10]], { result: 1320 })),
  W(5, "hard", 5, S`Ten points are marked on a circle. (a) How many chords join pairs of points? (b) How many triangles have their vertices at the points? (c) How many quadrilaterals? (d) A new point is added in the middle of the circle. How many triangles are there now (no three points are collinear)?`,
    S`(a) $\binom{10}2=45$. (b) $\binom{10}3=120$. (c) $\binom{10}4=210$. (d) $\binom{11}3=165$. [1, 1, 1, 2.]`,
    poolSvg([[10, "violet", "points on the circle"]], { per: 10 })),
  W(6, "medium", 4, S`A 5-person committee is chosen from 6 teachers and 7 students. (a) How many committees have exactly 2 teachers? (b) How many have at least 1 teacher? (c) Explain which method you used for (b) and why.`,
    S`(a) $\binom62\binom73=525$. (b) $\binom{13}5-\binom75=1287-21=1266$. (c) The complement: one subtraction instead of five cases. [1, 2, 1.]`,
    barsSvg([0, 1, 2, 3, 4, 5].map((t) => C(6, t) * C(7, 5 - t)), { labels: ["0", "1", "2", "3", "4", "5"], top: true, xlabel: "teachers", ylabel: "committees" })),
  W(6, "hard", 5, S`In a survey of 150 students, 82 use app X, 64 use app Y, 40 use app Z, 30 use X and Y, 18 use X and Z, 15 use Y and Z, and 9 use all three. (a) Complete a Venn diagram. (b) How many use none of the apps? (c) How many use exactly one app?`,
    S`(a) X only 43, Y only 28, Z only 16, X∩Y only 21, X∩Z only 9, Y∩Z only 6, all 9. (b) $150-(82+64+40-30-18-15+9)=150-132=18$. (c) $43+28+16=87$. [2, 2, 1.]`,
    vennSvg({ A: "X", B: "Y", C: "Z", n: { abc: 9 }, U: "150 students" })),
  W(7, "medium", 4, S`(a) Write rows 0 to 6 of Pascal's triangle. (b) Use Pascal's rule to write $\binom{9}{4}+\binom{9}{5}$ as one combination and evaluate it. (c) Explain why each row sums to a power of 2.`,
    S`(a) … row 6: 1 6 15 20 15 6 1. (b) $\binom{10}5=252$. (c) Row $n$ counts the subsets of every size of an $n$-element set; each element is in or out, $2^n$ subsets. [1, 2, 1.]`,
    pascalSvg(7, { sums: true })),
  W(8, "hard", 5, S`(a) Expand $(2x-3)^4$. (b) Find the term containing $x^5$ in $(x+2)^{9}$. (c) Find the constant term of $\left(x^2-\dfrac{1}{x}\right)^{6}$. (d) Explain why the coefficients of $(a+b)^n$ are the entries of row $n$ of Pascal's triangle.`,
    S`(a) $16x^4-96x^3+216x^2-216x+81$. (b) $k=4$: $\binom94x^5(2^4)=${binTerm(1, 2, 9, 4)}x^5$. (c) $x^{12-3k}$: $k=4$: $\binom64(-1)^4=15$. (d) A term $a^{n-k}b^k$ comes from choosing $b$ in $k$ of the $n$ brackets: $\binom nk$ ways. [1, 1, 2, 1.]`,
    pascalSvg(10, { hl: [[9, 4]] })),
];
