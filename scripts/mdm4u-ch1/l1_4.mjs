// MDM4U 1.4 — Permutations with Constraints: fixed positions, objects together (glue into a block), objects apart
// (complement or gaps), one object before another (symmetry), circular arrangements, and indirect counting
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, fig, tilesSvg, seatsSvg, slotsSvg } from "./lib.mjs";
import { fact, P, t, n, countPerms } from "../mdm4u/count.mjs";

export const TITLE = "1.4 Permutations with Constraints";
export const ID = "be0f4112-fc0e-4093-a9b8-a803ce1880bd";
const S = String.raw;

const people = (k) => "ABCDEFGHIJ".slice(0, k).split("");
const adj = (a, x, y) => Math.abs(a.indexOf(x) - a.indexOf(y)) === 1;
// verified by brute force
const ex2 = countPerms(people(7), (a) => adj(a, "A", "B"));
const ex3 = countPerms(people(7), (a) => !adj(a, "A", "B"));
const girlsTogether = countPerms(["G1", "G2", "G3", "B1", "B2", "B3", "B4"], (a) => { const i = a.map((x) => x[0]).join(""); return i.includes("GGG"); });
const alt = countPerms(["G1", "G2", "G3", "B1", "B2", "B3", "B4"], (a) => a.every((x, i) => (i % 2 === 0) === (x[0] === "B")));
const vowelsApart = countPerms("EQUATION".split(""), (a) => a.every((x, i) => i === 0 || !("AEIOU".includes(x) && "AEIOU".includes(a[i - 1]))));

export const blocks = () => [
  intro({
    icon: "🧩",
    title: "Permutations with Constraints",
    overview: S`Real arrangements come with conditions: two friends must sit together, two rivals must be kept apart, the youngest must stand at the front. The strategy is always the same: <strong>deal with the condition first</strong>, then arrange whatever is left with the multiplicative principle. Useful tools are <strong>fixing positions</strong>, <strong>gluing objects into a block</strong>, <strong>counting the complement</strong> (all arrangements minus the unwanted ones), <strong>symmetry</strong>, and, for round tables, <strong>fixing one person</strong>.`,
    goals: [
      "count arrangements with objects in fixed positions;",
      "count arrangements with objects together by treating them as one block;",
      "count arrangements with objects apart using the complement or the gaps;",
      "use symmetry for “A before B” conditions;",
      "count circular arrangements with (n − 1)!.",
    ],
    curriculum: "A2.2 (solve problems using techniques for counting permutations where all objects are distinct); A2.1 (choose an efficient counting technique)",
    prior: [
      ["How many ways can 5 people line up?", "5! = 120."],
      ["Evaluate 6! − 2 × 5!.", "720 − 240 = 480."],
      ["What is the complement of “at least one”?", "“none”."],
    ],
    words: [
      ["Constraint (restriction)", "a condition the arrangement must satisfy", "A must be first"],
      ["Block", "objects that must be together, treated as one item", "[AB] C D E"],
      ["Indirect method", "count all arrangements, subtract the ones that break the rule", "apart = all − together"],
      ["Circular arrangement", "objects around a circle; only relative order matters", "6 people at a round table: 5!"],
    ],
  }),

  section("📌 Together: glue them into a block", S`
  <p>Seven people stand in a line, and A and B must be side by side. Glue A and B into one block:</p>
  ${fig(tilesSvg(["A", "B", "C", "D", "E", "F", "G"], { groups: [[0, 1]], colors: { A: "red", B: "red" } }), "6 items to arrange: the block and C, D, E, F, G")}
  <p>Arrange the 6 items in \(6!\) ways, then the block's inside in \(2!\) ways: \(6!\times2!=${t(ex2)}\).</p>
  ${keyIdea(S`Together → block. Count (arrangements of the items with the block as one) × (arrangements inside the block).`)}`),

  section("📌 Apart: use the complement, or the gaps", S`
  <p><strong>Complement:</strong> A and B apart = all − together \(=7!-6!\,2!=5040-1440=${t(ex3)}\).</p>
  <p><strong>Gaps:</strong> to keep several objects apart, arrange the others first and put the restricted objects into the gaps between them. Four boys B make 5 gaps for three girls:</p>
  ${fig(tilesSvg(["_", "B", "_", "B", "_", "B", "_", "B", "_"], { colors: { B: "blue" } }), "_ B _ B _ B _ B _ : 5 gaps, at most one girl per gap")}
  <p>Boys: \(4!\); girls into 3 of the 5 gaps in order: \({}_5P_3=60\). Total \(24\times60=1440\) arrangements with no two girls side by side.</p>
  ${table(["Condition", "Method", "7 people, A and B"], [["together", "block", "\\(6!\\,2!=1440\\)"], ["apart", "all − together", "\\(7!-1440=3600\\)"], ["A at an end", "place A first", "\\(2\\times6!=1440\\)"], ["A left of B (anywhere)", "symmetry", "\\(\\frac{7!}{2}=2520\\)"]])}
  ${keyIdea(S`“At least one / not together / apart” is often easiest by the complement. “No two of these side by side” for several objects is easiest by the gaps.`)}`),

  section("📌 Circular arrangements", S`
  <p>Around a round table, rotating everyone one seat does not change who sits next to whom. Fix one person's seat as a reference; the other \(n-1\) people are then arranged in a line:</p>
  ${fig(seatsSvg(["A", "B", "C", "D", "E", "F"], { hl: [0] }), "fix A; arrange B to F: (6 − 1)! = 120")}
  ${keyIdea(S`\(n\) people in a circle: \((n-1)!\). If clockwise and counter-clockwise are the same (a necklace or key ring that can be flipped), divide by 2 again: \(\frac{(n-1)!}{2}\).`)}`),

  section("📌 Explore", S`<p>Choose a condition and change the number of people. Compare “together” and “apart”: they always add up to the unrestricted total.</p>`),

  widget("constraintLab", { init: 6 }),

  section("📌 Watch out", watchOut([
    "Do not forget to arrange the objects inside a block (2! for two people, 3! for three).",
    "When objects must be apart, “all − together” only works for a pair; for three or more use the gaps.",
    "For a round table use (n − 1)!, not n!. A row has ends; a circle does not.",
    "Fill the restricted positions first, and re-check how many objects are left for the others.",
  ])),

  examples([
    ["Fixed positions", "In how many ways can 6 students line up for a photo if the tallest must stand at the right end?",
      [S`Place the tallest first: 1 way.`, S`Arrange the other 5: \(5!=120\).`],
      "120"],
    ["A block of three", "In how many ways can 3 girls and 4 boys stand in a line if the 3 girls must all be together?",
      [S`Glue the girls into one block: 5 items (block + 4 boys) → \(5!=120\).`, S`Inside the block: \(3!=6\).`, S`\(120\times6=${t(girlsTogether)}\).`],
      `${n(girlsTogether)}`,
      fig(tilesSvg(["G", "G", "G", "B", "B", "B", "B"], { colors: { G: "red", B: "blue" }, groups: [[0, 2]] }))],
    ["Alternating", "The same 3 girls and 4 boys stand in a line so that boys and girls alternate. How many arrangements?",
      [S`With 4 boys and 3 girls the pattern must be B G B G B G B.`, S`Boys in the B places: \(4!\); girls in the G places: \(3!\).`, S`\(24\times6=${alt}\).`],
      `${alt}`],
    ["Symmetry", "Eight runners finish a race with no ties. In how many finishing orders does Mia finish ahead of Jon (not necessarily right before)?",
      [S`In every order either Mia is ahead of Jon or Jon is ahead of Mia, and swapping them pairs the orders up.`, S`So exactly half: \(\frac{8!}{2}=${t(fact(8) / 2)}\).`],
      `${n(fact(8) / 2)}`],
    ["A round table", "In how many ways can 8 people sit around a round table if two of them, Ana and Bo, must sit together?",
      [S`Glue Ana and Bo: 7 items around a circle → \((7-1)!=720\).`, S`Inside the block: \(2!\).`, S`\(720\times2=1440\).`],
      "1440",
      fig(seatsSvg(["Ana", "Bo", "C", "D", "E", "F", "G", "H"], { hl: [0, 1] }))],
  ]),

  practice([
    q("fixed", "How many arrangements of the letters of PLANET start with P?", num(120), "Fix P.", [S`The other 5 letters: \(5!\).`], "120"),
    q("together", "In how many ways can 6 people line up if two of them must be side by side?", num(240), "Block: 5 items, then 2 inside.", [S`\(5!\times2!\).`], "240"),
    q("apart", "In how many ways can 6 people line up if two of them must NOT be side by side?", num(480), "All − together.", [S`\(720-240\).`], "480"),
    q("circle", "In how many ways can 7 people sit around a round table?", num(720), "(n − 1)!", [S`\(6!\).`], "720"),
    q("ends", "In how many ways can 5 books stand on a shelf if the dictionary must be at one of the two ends?", num(48), "2 choices for the dictionary.", [S`\(2\times4!\).`], "48"),
  ]),

  ...hard([
    ["Vowels apart", "In how many arrangements of the letters of EQUATION are no two vowels next to each other?",
      [S`EQUATION has 5 vowels (E, U, A, I, O) and 3 consonants (Q, T, N).`, S`Arrange the consonants: \(3!=6\). They make 4 gaps: _ C _ C _ C _.`, S`5 vowels cannot fit into 4 gaps with at most one in each, so the count is \(0\).`],
      `${vowelsApart} arrangements (impossible)`],
    ["Two conditions", "Seven people line up. A must be at an end and B must not be next to A. How many arrangements?",
      [S`A at an end: 2 choices (by symmetry count the left end and double).`, S`A at the left end: B cannot be in position 2, so B has 5 positions (3 to 7); the other 5 people fill the rest in \(5!\) ways: \(5\times120=600\).`, S`Double for the right end: \(1200\).`],
      `${countPerms(people(7), (a) => (a[0] === "A" || a[6] === "A") && !adj(a, "A", "B"))}`],
  ], [
    q("hard", "In how many ways can 4 boys and 4 girls sit in a row if no two girls sit together?", num(countPerms(["G1", "G2", "G3", "G4", "B1", "B2", "B3", "B4"], (a) => a.every((x, i) => i === 0 || !(x[0] === "G" && a[i - 1][0] === "G")))),
      "Gaps: arrange the boys, then put the girls into 4 of the 5 gaps.", [S`\(4!\times{}_5P_4=24\times120\).`], "2880"),
    q("hard", "In how many ways can 6 different beads be put on a bracelet (which can be flipped over)?", num(60), "Circle, then divide by 2 for flipping.", [S`\(\frac{(6-1)!}{2}=\frac{120}{2}\).`], "60"),
    q("hard", "How many arrangements of the letters of MONDAY have the vowels O and A in the 2nd and 5th positions (in either order)?", num(48), "Place the vowels first.", [S`Vowels in positions 2 and 5: \(2!\) ways.`, S`Consonants M, N, D, Y in the other 4 positions: \(4!\).`, S`\(2\times24\).`], "48"),
  ]),

  wrapUp({
    qas: [
      ["What is the first thing to do with a constraint?", "Handle it first: place the fixed objects, glue the block, or choose the gaps. Then arrange the rest."],
      ["When should I use the complement?", "When the direct count has many cases, e.g. “not together” or “at least one”. Subtract the unwanted arrangements from the total."],
      ["Why do I multiply by 2! (or 3!) for a block?", "The objects inside the block can be in any order; each order gives a different line."],
      ["Why is it (n − 1)! around a table?", "Rotations give the same seating. Fixing one person removes the n rotations: n!/n = (n − 1)!."],
      ["How does symmetry help?", "If swapping two objects pairs up the arrangements, exactly half have A before B."],
    ],
    summary: [
      "Restrictions first, then the rest.",
      "Together: block × inside arrangements.",
      "Apart: all − together (pairs) or gaps (several objects).",
      "Circle: (n − 1)!; flippable ring: (n − 1)!/2.",
    ],
    next: "1.5 moves from arrangements to selections, where order does not matter: combinations.",
  }),
];
