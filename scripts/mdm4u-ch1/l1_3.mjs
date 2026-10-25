// MDM4U 1.3 — Permutations with Identical Objects: n!/(a! b! c! …), why we divide, words with repeated letters,
// coloured objects, and the link to routes (E/N moves)
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, fig, tilesSvg, poolSvg, gridSvg } from "./lib.mjs";
import { fact, multi, t, n } from "../mdm4u/count.mjs";

export const TITLE = "1.3 Permutations with Identical Objects";
export const ID = "832a5285-fe26-4e4d-bb7e-11b68061965c";
const S = String.raw;

const cc = multi("CANADA"), tor = multi("TORONTO"), flags = multi([4, 3, 2]);

export const blocks = () => [
  intro({
    icon: "🔤",
    title: "Permutations with Identical Objects",
    overview: S`How many different “words” can be made from the letters of BOOK? If the two O’s were different (O₁, O₂) there would be \(4!=24\) arrangements, but swapping O₁ and O₂ gives the same word, so each word was counted \(2!\) times: \(\dfrac{4!}{2!}=12\). In general, \(n\) objects of which \(a\) are alike, \(b\) are alike, \(c\) are alike, … can be arranged in \(\dfrac{n!}{a!\,b!\,c!\cdots}\) ways.`,
    goals: [
      "explain why identical objects reduce the number of arrangements;",
      "use n!/(a! b! c! …) to count arrangements with repeated objects;",
      "count arrangements of letters, coloured objects and signals;",
      "combine the formula with a fixed position or a restriction;",
      "connect arrangements of E and N moves to routes on a grid.",
    ],
    curriculum: "A2.2 (counting techniques for permutations); A2.1 (recognize the use of permutations and their advantages over listing)",
    prior: [
      ["Evaluate 5!/2!.", "60."],
      ["How many letters are in MISSISSIPPI, and how many of each?", "11 letters: M 1, I 4, S 4, P 2."],
      ["How many arrangements of the letters of CAT?", "3! = 6."],
    ],
    words: [
      ["Identical objects", "objects that cannot be told apart", "the two O's in BOOK"],
      ["Distinguishable arrangement", "an arrangement that looks different from the others", "BOOK and OBOK"],
      ["Multinomial count", "n!/(a! b! c! …)", "BANANA: 6!/(3! 2!) = 60"],
    ],
  }),

  section("📌 Why we divide", S`
  <p>Label the repeated letters to make them different, then remove the labels. In LEVEL there are two L's and two E's:</p>
  ${fig(tilesSvg(["L₁", "E₁", "V", "E₂", "L₂"], { colors: { "L₁": "red", "L₂": "red", "E₁": "violet", "E₂": "violet" } }), "with labels: 5! = 120 arrangements")}
  ${fig(tilesSvg(["L", "E", "V", "E", "L"], { colors: { L: "red", E: "violet" } }), "without labels each word appears 2! × 2! = 4 times: 120 ÷ 4 = 30 words")}
  \[\text{arrangements}=\frac{n!}{a!\,b!\,c!\cdots}\qquad a,b,c,\ldots=\text{sizes of the groups of identical objects}\]
  ${keyIdea(S`Divide by the factorial of each group of identical objects. Objects that appear once contribute \(1!=1\), so they can be left out of the denominator.`)}`),

  section("📌 Not only letters", S`
  <p>The formula works for any objects that are alike: coloured flags, identical books, or moves on a grid.</p>
  ${fig(poolSvg([[4, "red", "red flags"], [3, "blue", "blue flags"], [2, "green", "green flags"]], { per: 9 }), `Signals using all 9 flags in a row: \\(\\frac{9!}{4!\\,3!\\,2!}=${t(flags)}\\)`)}
  ${fig(gridSvg(4, 2, { path: "RRURRU" }), "a route with 4 moves east (E) and 2 moves north (N): EEN EEN — one arrangement of EEEENN")}
  ${table(["Situation", "Objects", "Count"], [["routes 4 east, 2 north", "EEEENN", "\\(\\frac{6!}{4!\\,2!}=15\\)"], ["coin results with 3 H and 2 T", "HHHTT", "\\(\\frac{5!}{3!\\,2!}=10\\)"], ["4 identical red and 1 white bead in a row", "RRRRW", "\\(\\frac{5!}{4!}=5\\)"]])}
  ${keyIdea(S`Any count of “orders of a list with repeats” is a permutation with identical objects — including routes on a grid, which return in 1.7.`)}`),

  section("📌 Explore", S`<p>Pick a word. The letter counts show which groups are identical; open the list to see every distinct arrangement of the shorter words.</p>`),

  widget("wordArrange", { init: "LEVEL" }),

  section("📌 Watch out", watchOut([
    "Count every repeated letter: MISSISSIPPI has three repeated groups (I, S, P).",
    "Divide by the product a! b! c!, not by the sum (a + b + c)!.",
    "Upper- and lower-case or different colours make objects different — only truly identical objects are grouped.",
    "With a restriction (e.g. must start with T), place the fixed letters first, then use the formula on the letters that are left.",
  ])),

  examples([
    ["A word with one repeat", "How many arrangements of the letters of LETTER are there?",
      [S`6 letters: L 1, E 2, T 2, R 1.`, S`\(\frac{6!}{2!\,2!}=\frac{720}{4}=180\).`],
      "180"],
    ["Three repeated groups", "How many distinguishable arrangements of TORONTO are there?",
      [S`7 letters: T 2, O 3, R 1, N 1.`, S`\(\frac{7!}{2!\,3!}=\frac{5040}{12}=${tor}\).`],
      `${tor}`,
      fig(tilesSvg(["T", "O", "R", "O", "N", "T", "O"], { colors: { T: "red", O: "violet" } }))],
    ["Coloured objects", "Six identical green chairs and three identical yellow chairs are placed in a row. How many colour patterns are possible?",
      [S`9 objects: 6 alike, 3 alike.`, S`\(\frac{9!}{6!\,3!}=\frac{9\times8\times7}{6}=84\).`],
      "84 patterns"],
    ["A fixed position", "How many arrangements of the letters of CANADA begin with C?",
      [S`Fix C first. The rest, A N A D A, has 5 letters with A 3 times.`, S`\(\frac{5!}{3!}=20\).`, S`(All arrangements: \(\frac{6!}{3!}=${cc}\), and one-sixth of them start with C.)`],
      "20"],
    ["Coin outcomes", "A coin is tossed 8 times. In how many sequences of results are there exactly 5 heads?",
      [S`Each sequence is an arrangement of HHHHHTTT.`, S`\(\frac{8!}{5!\,3!}=56\).`],
      "56 sequences"],
  ]),

  practice([
    q("word", "How many arrangements of the letters of APPLE?", num(60), "P appears twice.", [S`\(\frac{5!}{2!}\).`], "60"),
    q("word", "How many arrangements of the letters of COOKBOOK?", num(multi("COOKBOOK")), "O × 4, K × 2.", [S`\(\frac{8!}{4!\,2!}=\frac{40320}{48}\).`], "840"),
    q("objects", "5 identical red and 2 identical blue marbles are placed in a row. How many colour patterns?", num(21), "7 objects, groups of 5 and 2.", [S`\(\frac{7!}{5!\,2!}\).`], "21"),
    q("coins", "In how many orders can 6 coin tosses give 2 heads and 4 tails?", num(15), "Arrange HHTTTT.", [S`\(\frac{6!}{2!\,4!}\).`], "15"),
    q("formula", "Which expression counts the arrangements of the letters of ALGEBRA?", choice(["7!/2!", "7!", "7!/(2!·2!)", "6!/2!"], 0), "Only A repeats (twice).", ["7 letters, A twice."], "7!/2!"),
  ]),

  ...hard([
    ["Repeated letters with a restriction", "How many arrangements of STATISTICS begin and end with S?",
      [S`STATISTICS: S 3, T 3, A 1, I 2, C 1 (10 letters).`, S`Fix S at both ends. The middle 8 letters are T T T A I I C S: T 3, I 2.`, S`\(\frac{8!}{3!\,2!}=\frac{40320}{12}=3360\).`],
      "3360"],
    ["Vowels together", "In how many arrangements of the letters of BANANA are all three A's together?",
      [S`Glue AAA into one block. Arrange the block, B, N, N: 4 items with N twice.`, S`\(\frac{4!}{2!}=12\). (Inside the block the A's are identical, so there is only 1 order.)`],
      "12",
      fig(tilesSvg(["B", "A", "A", "A", "N", "N"], { colors: { A: "red", N: "violet" }, groups: [[1, 3]] }), "AAA glued into one block")],
  ], [
    q("hard", "How many arrangements of MISSISSIPPI are there?", num(multi("MISSISSIPPI")), "I 4, S 4, P 2.", [S`\(\frac{11!}{4!\,4!\,2!}\).`], "34650"),
    q("hard", "How many arrangements of PEPPER begin with P and end with R?", num(multi("PEPE")), "Fix P first and R last.", [S`Middle letters E P P E: \(\frac{4!}{2!\,2!}\).`], "6"),
    q("hard", "How many arrangements of the letters of EXCELLENCE have the four E's together?", num(multi([1, 1, 2, 2, 1])), "Glue EEEE; then arrange the block with X, C, L, L, N, C.", [S`Block + X, C, C, L, L, N: 7 items with C twice and L twice.`, S`\(\frac{7!}{2!\,2!}=1260\).`], "1260"),
  ]),

  wrapUp({
    qas: [
      ["Why divide by a! for a group of a identical objects?", "Those a objects can be swapped in a! ways without changing the arrangement, so each arrangement was counted a! times."],
      ["Do single letters go in the denominator?", "They can, but 1! = 1 so they do not change the answer."],
      ["How do I count arrangements with a letter in a fixed place?", "Place it, then use the formula on the remaining letters (re-count the repeats)."],
      ["How is this connected to coin tosses?", "A sequence with k heads in n tosses is an arrangement of k H's and (n − k) T's: n!/(k!(n − k)!)."],
      ["What about routes on a grid?", "A shortest route with a east and b north moves is an arrangement of a E's and b N's: (a + b)!/(a! b!)."],
    ],
    summary: [
      "n objects with groups of a, b, c, … identical: n!/(a! b! c! …).",
      "Divide because swapping identical objects does not change the arrangement.",
      "Fix restricted positions first, then re-count the repeats.",
      "Coin sequences and grid routes are arrangements with repeats.",
    ],
    next: "1.4 counts arrangements with conditions: together, apart, at the ends, and around a table.",
  }),
];
