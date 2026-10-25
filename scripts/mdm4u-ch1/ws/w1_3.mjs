// MDM4U Worksheet 1.3 — Permutations with Identical Objects (teacher edition)
import { svgT, tilesSvg, poolSvg, gridSvg } from "./figT.mjs";
import { multi, n, countPerms } from "../../mdm4u/count.mjs";

const S = String.raw;
const w = (s) => s.split("");
const parallelSE = countPerms(w("PARALLEL"), (a) => a[0] === "P" && a[7] === "L");
const nnTogether = countPerms(w("ANNOUNCEMENT"), (a) => a.join("").includes("NNNN"));

const EXAMPLES = [
  { title: "One repeated letter", q: "How many arrangements of the letters of GOOGLE are there?", steps: ["6 letters: G 2, O 2, L 1, E 1.", S`$\frac{6!}{2!\,2!}=\frac{720}{4}$.`], ans: "180" },
  { title: "Many repeats", q: "How many arrangements of the letters of REFERENCE are there?", steps: ["9 letters: E 4, R 2, F 1, N 1, C 1.", S`$\frac{9!}{4!\,2!}=\frac{362\,880}{48}$.`], ans: n(multi("REFERENCE")) },
  { title: "Why divide", q: "Explain why ABBB has only 4 arrangements, not $4!=24$.", fig: svgT(tilesSvg(["A", "B₁", "B₂", "B₃"], { colors: { "B₁": "red", "B₂": "red", "B₃": "red" } }), 4), steps: [S`With labelled B's there are 24 arrangements.`, S`Each word appears $3!=6$ times (the B's swapped).`, S`$\frac{24}{6}=4$: ABBB, BABB, BBAB, BBBA.`], ans: "4" },
  { title: "Coloured objects", q: "A row of 10 tiles uses 5 identical white, 3 identical grey and 2 identical black tiles. How many patterns?", fig: svgT(poolSvg([[5, "gray", "white"], [3, "blue", "grey"], [2, "violet", "black"]], { per: 10 }), 5.4), steps: [S`$\frac{10!}{5!\,3!\,2!}$.`], ans: n(multi([5, 3, 2])) },
  { title: "Fixed first letter", q: "How many arrangements of ALABAMA begin with B?", steps: ["Fix B. Remaining: A A L A M A (A 4).", S`$\frac{6!}{4!}=30$.`], ans: "30" },
  { title: "Fixed both ends", q: "How many arrangements of PARALLEL begin with P and end with L?", steps: ["PARALLEL: P 1, A 2, R 1, L 3, E 1.", "Fix P and one L. Middle: A A R L L E (A 2, L 2).", S`$\frac{6!}{2!\,2!}=180$.`], ans: `${parallelSE}` },
  { title: "Block of identical letters", q: "In how many arrangements of ANNOUNCEMENT are the four N's together?", steps: ["ANNOUNCEMENT: A 1, N 4, O 1, U 1, C 1, E 2, M 1, T 1 (12 letters).", "Glue NNNN into one block: 9 items with E twice.", S`$\frac{9!}{2!}=181\,440$.`], ans: n(nnTogether) },
  { title: "Coin sequences", q: "A coin is flipped 10 times. In how many sequences are there exactly 7 heads?", steps: [S`Arrange HHHHHHHTTT: $\frac{10!}{7!\,3!}=120$.`], ans: "120" },
  { title: "Grid routes", q: "How many shortest routes go 5 blocks east and 2 blocks north?", fig: svgT(gridSvg(5, 2, { path: "RRURRRU" }), 4.8), steps: [S`Arrange EEEEENN: $\frac{7!}{5!\,2!}=21$.`], ans: "21" },
];

const PROBLEMS = [
  { level: 1, q: "How many arrangements of the letters of (a) DEED (b) SEESAW?", ans: S`(a) $\frac{4!}{2!\,2!}=6$ (b) $\frac{6!}{2!\,2!}=180$` },
  { level: 1, q: "How many colour patterns can be made with 4 identical red and 4 identical blue beads in a row?", ans: "70" },
  { level: 1, q: "Which expression counts the arrangements of the letters of ATTITUDE? Explain.", ans: S`$\frac{8!}{3!}$: T appears 3 times, every other letter once (A, I, U, D, E) $=6720$` },
  { level: 2, q: "How many arrangements of the letters of MATHEMATICS are there?", ans: S`$\frac{11!}{2!\,2!\,2!}=4\,989\,600$` },
  { level: 2, q: "How many arrangements of CALCULUS begin with C?", ans: S`fix C; remaining A L C U L U S: L 2, U 2: $\frac{7!}{2!\,2!}=1260$` },
  { level: 2, q: "A die is rolled 6 times. In how many sequences of results do exactly two 6s, two 5s and two 4s appear?", ans: S`$\frac{6!}{2!\,2!\,2!}=90$` },
  { level: 2, q: "How many shortest routes are there on a 4 by 3 grid (4 east, 3 north)? Draw one of them.", fig: svgT(gridSvg(4, 3), 4.2), ans: S`$\frac{7!}{4!\,3!}=35$`, space: 4 },
  { level: 2, q: "A shelf holds 3 identical copies of a math text, 2 identical copies of a physics text and 4 different novels. How many arrangements?", ans: S`$\frac{9!}{3!\,2!}=30\,240$` },
  { level: 3, space: 4.5, q: "How many arrangements of the letters of BOOKKEEPER have the three E's together?", ans: S`block EEE + B, O, O, K, K, P, R: 8 items with O 2, K 2: $\frac{8!}{2!\,2!}=10\,080$` },
  { level: 3, space: 4.5, q: "How many 6-digit numbers can be made by arranging the digits 1, 1, 2, 2, 2, 3? How many of them are even?", ans: S`$\frac{6!}{2!\,3!}=60$; even means last digit 2: arrange 1, 1, 2, 2, 3: $\frac{5!}{2!\,2!}=30$` },
  { level: 3, space: 4.5, q: "In how many arrangements of the letters of SASKATOON do the vowels (A, A, O, O) appear in the even-numbered positions (2, 4, 6, 8)?", ans: S`vowels A A O O in 4 places: $\frac{4!}{2!\,2!}=6$; consonants S S K T N in the 5 odd places: $\frac{5!}{2!}=60$; total 360` },
  { level: 3, space: 4.5, q: "A team plays 9 games and wins 5, loses 3 and ties 1. In how many different orders could the results have happened? In how many of those orders is the first game a win?", ans: S`$\frac{9!}{5!\,3!\,1!}=504$; first a win: $\frac{8!}{4!\,3!}=280$` },
  { level: 3, space: 5, q: "Explain, using the grid, why the number of shortest routes from A to B with $a$ moves east and $b$ moves north is $\\frac{(a+b)!}{a!\\,b!}$. Then find the number of routes on a 6 by 3 grid.", fig: svgT(gridSvg(6, 3, { path: "RRURURRRU".slice(0, 9) }), 4.6), ans: S`each route is an arrangement of $a$ E's and $b$ N's; $\frac{9!}{6!\,3!}=84$` },
];

export const WS = {
  code: "1.3",
  title: "Permutations with Identical Objects",
  bigideas: S`If $n$ objects include $a$ identical of one kind, $b$ of another, $c$ of another, …, the number of distinguishable arrangements is $\frac{n!}{a!\,b!\,c!\cdots}$. We divide because swapping identical objects does not create a new arrangement.`,
  goals: ["Explain the division by a! b! c!.", "Count arrangements of words and objects with repeats.", "Handle fixed positions and blocks with repeats.", "Connect coin sequences and grid routes to arrangements with repeats."],
  curriculum: "A2.2 (counting permutations); A2.1 (advantages over listing)",
  vocab: [["Identical objects", "objects that cannot be told apart"], ["Distinguishable", "looks different from every other arrangement"]],
  hook: "How many different “words” can be made from the letters of your own first name? Whose name in the class gives the most?",
  concepts: [
    ["1. Labelling trick", S`${svgT(tilesSvg(["N", "O₁", "O₂", "N"], { colors: { "O₁": "red", "O₂": "red" } }), 3.6)}Label identical objects to make them distinct, count with $n!$, then divide by the number of ways each group can be relabelled ($a!$ for a group of $a$).`],
    ["2. Formula", S`$\frac{n!}{a!\,b!\,c!\cdots}$, where $a+b+c+\cdots=n$ (single objects contribute $1!=1$).`],
    ["3. Applications", S`Coin sequences with $k$ heads: $\frac{n!}{k!\,(n-k)!}$. Grid routes with $a$ E and $b$ N moves: $\frac{(a+b)!}{a!\,b!}$.`],
  ],
  tips: ["Tally every letter before using the formula.", "Divide by a product, not a sum.", "Fix restricted letters, then re-tally.", "Identical letters in a block have only 1 internal order.", "Check small cases by listing."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
