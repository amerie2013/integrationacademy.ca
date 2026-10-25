// MDM4U 1.6 — Combinations with Cases & the Complement: "exactly", "at least", "at most" by direct cases (additive
// principle) and by the complement; choosing any number of items (2^n − 1); identical items (k + 1 choices);
// Venn-diagram overlaps (principle of inclusion and exclusion)
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, fig, poolSvg, vennSvg, barsSvg } from "./lib.mjs";
import { C, t, n } from "../mdm4u/count.mjs";

export const TITLE = "1.6 Combinations with Cases & the Complement";
export const ID = "ac6e470f-dbd4-4aa5-ba44-a8cf9875ca0f";
const S = String.raw;

// committee of 5 from 6 women and 7 men, at least 3 women
const cases = [3, 4, 5].map((w) => C(6, w) * C(7, 5 - w)), direct = cases.reduce((a, b) => a + b, 0);
const total = C(13, 5), fewer = [0, 1, 2].map((w) => C(6, w) * C(7, 5 - w));

export const blocks = () => [
  intro({
    icon: "⚖️",
    title: "Combinations with Cases & the Complement",
    overview: S`Many selection problems say “<strong>at least</strong>”, “<strong>at most</strong>” or “<strong>exactly</strong>”. There are two strategies. <strong>Direct (cases):</strong> list every case that satisfies the condition, count each case with combinations (multiply across groups), and add the cases. <strong>Indirect (complement):</strong> count all selections and subtract those that break the condition. Pick whichever has fewer cases. We also count selections of <em>any</em> size (\(2^n-1\)) and overlapping groups with Venn diagrams.`,
    goals: [
      "split a selection problem into cases and add them (additive principle);",
      "use the complement: total minus unwanted cases;",
      "choose the method with fewer cases;",
      "count selections of at least one item from n distinct items as 2ⁿ − 1, and from identical items with (k + 1) choices per type;",
      "count overlapping groups with n(A ∪ B) = n(A) + n(B) − n(A ∩ B).",
    ],
    curriculum: "A2.3 (solve counting problems using the additive and multiplicative counting principles, e.g. selecting 2 boys or 2 girls); A2.2 (combinations of distinct objects); A1.5 connection (complements and Venn diagrams)",
    prior: [
      ["Evaluate ₇C₂ × ₆C₃.", "21 × 20 = 420."],
      ["What is the complement of “at least 1”?", "“0” (none)."],
      ["Evaluate 2⁵.", "32."],
    ],
    words: [
      ["Case", "one non-overlapping part of a problem", "exactly 3 women; exactly 4 women; …"],
      ["At least k", "k or more", "at least 2 = 2, 3, 4, …"],
      ["At most k", "k or fewer", "at most 1 = 0 or 1"],
      ["Complement", "everything that is not in the event", "complement of “at least 1” is “none”"],
      ["Inclusion–exclusion", "n(A ∪ B) = n(A) + n(B) − n(A ∩ B)", "students taking French or Spanish"],
    ],
  }),

  section("📌 Direct method: add the cases", S`
  <p>A committee of 5 is chosen from 6 women and 7 men. How many committees have <strong>at least 3 women</strong>? The cases are 3, 4 or 5 women:</p>
  ${table(["Case", "Women", "Men", "Count"], [["3 W, 2 M", "\\(\\binom63=20\\)", "\\(\\binom72=21\\)", `${cases[0]}`], ["4 W, 1 M", "\\(\\binom64=15\\)", "\\(\\binom71=7\\)", `${cases[1]}`], ["5 W, 0 M", "\\(\\binom65=6\\)", "\\(\\binom70=1\\)", `${cases[2]}`], ["total", "", "", `<strong>${direct}</strong>`]])}
  ${fig(barsSvg([0, 1, 2, 3, 4, 5].map((w) => C(6, w) * C(7, 5 - w)), { labels: ["0 W", "1 W", "2 W", "3 W", "4 W", "5 W"], hl: [3, 4, 5], top: true, xlabel: "number of women on the committee", ylabel: "committees" }), "all 1287 committees sorted by number of women: the red cases are “at least 3”")}
  ${keyIdea(S`Within a case multiply (women AND men); between cases add (this case OR that case).`)}`),

  section("📌 Indirect method: the complement", S`
  <p>All committees: \(\binom{13}5=${t(total)}\). Unwanted (0, 1 or 2 women): \(${fewer.join("+")}=${fewer.reduce((a, b) => a + b, 0)}\). So at least 3 women: \(${t(total)}-${fewer.reduce((a, b) => a + b, 0)}=${direct}\) — the same answer.</p>
  <p>The complement shines for “<strong>at least one</strong>”: the only unwanted case is “none”.</p>
  ${keyIdea(S`at least one = total − none. Use the complement when it has fewer cases than the direct method.`)}`),

  section("📌 Any number of items, and overlapping groups", S`
  <p><strong>Distinct items:</strong> each of \(n\) different items is either taken or not (2 choices each), so there are \(2^n\) selections including the empty one: <strong>at least one item</strong> \(=2^n-1\). <strong>Identical items:</strong> with \(k\) identical items of one type you can take \(0,1,\ldots,k\) of them: \(k+1\) choices.</p>
  <p><strong>Overlap:</strong> if some objects belong to two groups, adding the groups counts the overlap twice:</p>
  ${fig(vennSvg({ A: "French (21)", B: "Spanish (14)", n: { a: 15, ab: 6, b: 8, out: 5 }, U: "34 students" }), "n(F ∪ S) = 21 + 14 − 6 = 29 take at least one language; 34 − 29 = 5 take neither")}
  ${keyIdea(S`\(n(A\cup B)=n(A)+n(B)-n(A\cap B)\). The additive principle \(n(A)+n(B)\) works only when the groups do not overlap.`)}`),

  section("📌 Explore", S`<p>Change the group sizes, the committee size and the “at least” number. Green rows are the wanted cases. The readout compares the direct sum with the complement.</p>`),

  widget("committeeLab", { init: [6, 7, 5, 3] }),

  section("📌 Watch out", watchOut([
    "“At least 2” includes 2. List the cases carefully: 2, 3, 4, … up to the largest possible.",
    "In each case make sure the numbers add up to the committee size (3 W + 2 M = 5).",
    "Do not count “at least one” as (choose 1) × (choose the rest from everyone): that counts the same committee several times.",
    "2ⁿ − 1 is for distinct items; for identical items multiply (k + 1) for each type, then subtract 1 for the empty selection.",
  ])),

  examples([
    ["Exactly", "From 8 juniors and 5 seniors, how many 4-person teams have exactly 1 senior?",
      [S`1 senior AND 3 juniors.`, S`\(\binom51\binom83=5\times56=280\).`],
      "280"],
    ["At most", "From the same 8 juniors and 5 seniors, how many 4-person teams have at most 1 senior?",
      [S`Cases: 0 seniors or 1 senior.`, S`\(\binom50\binom84+\binom51\binom83=70+280=350\).`],
      "350"],
    ["At least one, by the complement", "How many 5-card hands contain at least one face card (J, Q, K: 12 cards)?",
      [S`All hands: \(\binom{52}5=${t(C(52, 5))}\).`, S`No face card (choose from the 40 others): \(\binom{40}5=${t(C(40, 5))}\).`, S`\(${t(C(52, 5))}-${t(C(40, 5))}=${t(C(52, 5) - C(40, 5))}\).`],
      `${n(C(52, 5) - C(40, 5))}`],
    ["Any number of toppings", "A pizza place has 9 different toppings. How many pizzas with at least one topping can be made? (The toppings are all different.)",
      [S`Each topping is on or off: \(2^9=512\) selections.`, S`Remove the plain pizza: \(512-1=511\).`],
      "511 pizzas"],
    ["Identical items", "A drawer has 4 identical red pens, 3 identical blue pens and 2 identical black pens. How many selections of at least one pen are possible?",
      [S`Red: 0–4 (5 choices); blue: 0–3 (4 choices); black: 0–2 (3 choices).`, S`\(5\times4\times3=60\), minus the empty selection: \(59\).`],
      "59 selections",
      fig(poolSvg([[4, "red", "red"], [3, "blue", "blue"], [2, "gray", "black"]], { per: 9 }))],
  ]),

  practice([
    q("exactly", "From 7 dogs and 4 cats, how many groups of 3 animals have exactly 2 cats?", num(C(4, 2) * C(7, 1)), "2 cats AND 1 dog.", [S`\(\binom42\binom71=6\times7\).`], "42"),
    q("at least 1", "From 6 boys and 5 girls, how many 4-person groups have at least one girl?", num(C(11, 4) - C(6, 4)), "Total − no girls.", [S`\(\binom{11}4-\binom64=330-15\).`], "315"),
    q("2^n", "In how many ways can you choose at least one of 6 different books?", num(63), "2⁶ − 1.", [S`\(64-1\).`], "63"),
    q("identical", "A bag has 5 identical apples and 3 identical pears. How many selections of at least one fruit?", num(23), "(5 + 1)(3 + 1) − 1.", [S`\(6\times4-1\).`], "23"),
    q("Venn", "In a class of 30, 18 play soccer, 12 play basketball and 5 play both. How many play neither?", num(5), "Inclusion–exclusion.", [S`\(18+12-5=25\) play at least one; \(30-25\).`], "5"),
  ]),

  ...hard([
    ["At least 2 of each", "A 6-person committee is chosen from 5 teachers and 7 parents. How many committees have at least 2 teachers and at least 2 parents?",
      [S`Teachers can be 2, 3 or 4 (then parents are 4, 3 or 2).`, S`\(\binom52\binom74+\binom53\binom73+\binom54\binom72=10(35)+10(35)+5(21)\).`, S`\(350+350+105=805\).`],
      `${C(5, 2) * C(7, 4) + C(5, 3) * C(7, 3) + C(5, 4) * C(7, 2)}`],
    ["A specific person", "From 10 students, a committee of 4 must include Ravi or Sam but not both. How many committees?",
      [S`Case 1: Ravi in, Sam out: choose 3 more from the other 8: \(\binom83=56\).`, S`Case 2: Sam in, Ravi out: also \(56\).`, S`\(56+56=112\).`],
      "112",
      fig(vennSvg({ A: "with Ravi", B: "with Sam", n: { a: 56, ab: 28, b: 56, out: 70 }, shade: ["a", "b"], U: "all 210 committees" }), "shaded: exactly one of Ravi, Sam")],
  ], [
    q("hard", "How many 5-card hands contain at least 2 hearts?", num(C(52, 5) - C(39, 5) - C(13, 1) * C(39, 4)), "Complement: 0 hearts or 1 heart.", [S`\(\binom{52}5-\binom{39}5-\binom{13}1\binom{39}4\).`], `${C(52, 5) - C(39, 5) - C(13, 1) * C(39, 4)}`),
    q("hard", "A fruit bowl has 3 identical oranges, 4 identical bananas and 1 apple. How many selections include at least one banana?", num(4 * 4 * 2), "Bananas: 1–4 (4 choices); oranges 0–3; apple 0–1.", [S`\(4\times4\times2\). (The selection cannot be empty because it has a banana.)`], "32"),
    q("hard", "Of 40 students, 22 take Data, 17 take Calculus and 9 take neither. How many take both?", num(8), "n(D ∪ C) = 40 − 9.", [S`\(31=22+17-x\Rightarrow x=8\).`], "8"),
  ]),

  wrapUp({
    qas: [
      ["How do I decide between cases and the complement?", "Count the cases in each method; choose the shorter list. “At least one” is almost always the complement."],
      ["Why can't I fix one girl and choose the rest freely for “at least one girl”?", "A committee with two girls would be counted twice (once for each girl you fixed). Use the complement instead."],
      ["Why is it 2ⁿ − 1?", "Each of the n items is in or out (2 choices each, AND → multiply); remove the one empty selection."],
      ["What changes for identical items?", "You only choose how many of each type: (k + 1) choices for k identical items."],
      ["When do I subtract the overlap?", "When objects belong to both groups: n(A ∪ B) = n(A) + n(B) − n(A ∩ B)."],
    ],
    summary: [
      "Cases: multiply within, add between.",
      "Complement: total − unwanted.",
      "At least one of n distinct items: 2ⁿ − 1.",
      "Identical items: product of (k + 1), minus 1.",
      "Overlaps: inclusion–exclusion.",
    ],
    next: "1.7 finds combinations in Pascal's triangle and uses them to count routes.",
  }),
];
