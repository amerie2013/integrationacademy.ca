// MDM4U 2.4 — Mutually Exclusive Events & the Additive Rule: events as subsets, union and intersection, mutually
// exclusive vs non-mutually exclusive events, P(A or B) = P(A) + P(B) − P(A and B), Venn diagrams with two and three
// sets, and probability from tables of data
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, frac, hard, fig, vennSvg, diceGridSvg, tableSvg } from "./lib.mjs";

export const TITLE = "2.4 Mutually Exclusive Events & the Additive Rule";
export const ID = "baef0ed1-4942-4101-a348-b5b0096143c9";
const S = String.raw;

export const blocks = () => [
  intro({
    icon: "🔀",
    title: "Mutually Exclusive Events & the Additive Rule",
    overview: S`Two events are <strong>mutually exclusive</strong> if they cannot happen at the same time (no outcomes in common). For them, \(P(A\text{ or }B)=P(A)+P(B)\). If the events can happen together, adding counts the overlap twice, so subtract it once: \[P(A\cup B)=P(A)+P(B)-P(A\cap B).\] Venn diagrams show the overlap and the regions “only A”, “only B”, “both” and “neither”.`,
    goals: [
      "recognize an event as a subset of the sample space;",
      "decide whether two events are mutually exclusive;",
      "use the additive rule for mutually exclusive and non-mutually exclusive events;",
      "fill in and read two- and three-set Venn diagrams;",
      "find probabilities of “or”, “and”, “only” and “neither” from diagrams and tables.",
    ],
    curriculum: "A1.5 (recognize an event as a set of outcomes and a subset of a sample space; determine whether events are mutually exclusive; calculate P(~A), P(A and B), P(A or B) using Venn diagrams, lists and formulas)",
    prior: [
      ["In a group, 12 play hockey, 9 play soccer and 4 play both. How many play at least one?", "12 + 9 − 4 = 17."],
      ["What is P(heart) for one card?", "1/4."],
      ["Can a card be both a king and a queen?", "No."],
    ],
    words: [
      ["A ∪ B (A or B)", "outcomes in A, in B or in both", "a heart or a king"],
      ["A ∩ B (A and B)", "outcomes in both A and B", "the king of hearts"],
      ["Mutually exclusive", "A ∩ B is empty: cannot both happen", "rolling a 2 and rolling a 5 on one die"],
      ["Additive rule", "P(A ∪ B) = P(A) + P(B) − P(A ∩ B)", "4/52 + 13/52 − 1/52"],
    ],
  }),

  section("📌 Mutually exclusive or not?", S`
  ${table(["Events (one card drawn)", "Overlap?", "Mutually exclusive?"], [["a king; a queen", "none", "yes"], ["a heart; a club", "none", "yes"], ["a king; a heart", "the king of hearts", "no"], ["a face card; a red card", "6 red face cards", "no"]])}
  ${fig(vennSvg({ A: "kings (4)", B: "hearts (13)", n: { a: 3, ab: 1, b: 12, out: 36 }, U: "52 cards", shade: ["a", "ab", "b"] }), "P(king or heart) = 4/52 + 13/52 − 1/52 = 16/52 = 4/13")}
  ${keyIdea(S`For mutually exclusive events \(P(A\cap B)=0\), so the general rule reduces to \(P(A\cup B)=P(A)+P(B)\).`)}`),

  section("📌 Regions of a Venn diagram", S`
  ${table(["Region", "Formula"], [["only A", "\\(P(A)-P(A\\cap B)\\)"], ["only B", "\\(P(B)-P(A\\cap B)\\)"], ["exactly one", "\\(P(A)+P(B)-2P(A\\cap B)\\)"], ["neither", "\\(1-P(A\\cup B)\\)"]])}
  <p>With three events, add the singles, subtract the pairs and add back the triple overlap:</p>
  \[P(A\cup B\cup C)=P(A)+P(B)+P(C)-P(A\cap B)-P(A\cap C)-P(B\cap C)+P(A\cap B\cap C).\]
  ${fig(vennSvg({ A: "A", B: "B", C: "C", shade: ["ab", "ac", "bc"] }), "shaded: exactly two of the three events")}`),

  section("📌 Explore", S`<p>Set the sizes of A, B and their overlap. With overlap 0 the circles separate: the events are mutually exclusive.</p>`),

  widget("vennProb", { init: [40, 18, 15, 6] }),

  section("📌 Watch out", watchOut([
    "“Or” in probability means A, B or both (inclusive).",
    "Only subtract the overlap when the events can happen together.",
    "Mutually exclusive is not the same as independent (2.5): mutually exclusive events with non-zero probabilities are always dependent.",
    "When filling a Venn diagram, start from the innermost overlap and work outward.",
  ])),

  examples([
    ["Mutually exclusive", "A die is rolled. Find P(a 1 or an even number).",
      [S`1 is odd, so the events do not overlap.`, S`\(\frac16+\frac36=\frac46=\frac23\).`],
      "2/3"],
    ["Not mutually exclusive", "A card is drawn. Find P(a face card or a spade).",
      [S`Face 12, spade 13, both (J, Q, K of spades) 3.`, S`\(\frac{12}{52}+\frac{13}{52}-\frac{3}{52}=\frac{22}{52}=\frac{11}{26}\).`],
      "11/26"],
    ["Two dice", "Two dice are rolled. Find P(doubles or a sum of 8).",
      [S`Doubles 6; sum 8: 5; both (4,4): 1.`, S`\(\frac{6+5-1}{36}=\frac{10}{36}=\frac5{18}\).`],
      "5/18",
      fig(diceGridSvg((a, b) => a === b || a + b === 8))],
    ["From probabilities", "P(A) = 0.5, P(B) = 0.4 and P(A or B) = 0.7. Find P(A and B) and P(neither). Are A and B mutually exclusive?",
      [S`\(0.7=0.5+0.4-P(A\cap B)\Rightarrow P(A\cap B)=0.2\).`, S`Neither \(=1-0.7=0.3\). Not mutually exclusive (overlap 0.2).`],
      "0.2; 0.3; no"],
    ["A two-way table", "A survey of 200 students: 90 have a part-time job; of these 35 also play a sport. Of those without a job, 70 play a sport. Find P(job or sport).",
      [S`Sport total \(=35+70=105\).`, S`\(P=\frac{90+105-35}{200}=\frac{160}{200}=0.8\).`],
      "0.8",
      fig(tableSvg([["", "sport", "no sport", "total"], ["job", "35", "55", "90"], ["no job", "70", "40", "110"], ["total", "105", "95", "200"]], { rowHead: true }))],
  ]),

  practice([
    q("ME", "One card is drawn. Are “a seven” and “an eight” mutually exclusive?", choice(["yes", "no"], 0), "Can a card be both?", ["No card is both."], "yes"),
    q("additive", "A die is rolled. What is P(a 2 or a 5)?", frac(1, 3), "Mutually exclusive.", [S`\(\frac16+\frac16\).`], "1/3"),
    q("general", "One card is drawn. What is P(a red card or a queen)?", frac(7, 13), "26 + 4 − 2.", [S`\(\frac{28}{52}\).`], "7/13"),
    q("formula", "P(A) = 0.45, P(B) = 0.3, P(A and B) = 0.1. Find P(A or B).", num(0.65), "Additive rule.", [S`\(0.45+0.3-0.1\).`], "0.65"),
    q("neither", "With the probabilities above, find P(neither A nor B).", num(0.35), "1 − 0.65.", [S`\(0.35\).`], "0.35"),
  ]),

  ...hard([
    ["Three overlapping events", "Of 120 people, 60 read the news online, 45 watch TV news, 30 listen to the radio; 20 do online and TV, 12 online and radio, 10 TV and radio, and 5 all three. Find P(a person uses exactly one of the three).",
      [S`Only online \(=60-20-12+5=33\); only TV \(=45-20-10+5=20\); only radio \(=30-12-10+5=13\).`, S`Exactly one \(=33+20+13=66\).`, S`\(P=\frac{66}{120}=0.55\).`],
      "0.55",
      fig(vennSvg({ A: "online", B: "TV", C: "radio", n: { a: 33, b: 20, c: 13, ab: 15, ac: 7, bc: 5, abc: 5, out: 22 }, U: "120 people" }))],
    ["Using the rule backwards", "P(A) = 0.6, P(B) = 0.5 and P(neither) = 0.15. Find P(A and B) and P(exactly one).",
      [S`\(P(A\cup B)=1-0.15=0.85\).`, S`\(P(A\cap B)=0.6+0.5-0.85=0.25\).`, S`Exactly one \(=0.85-0.25=0.6\).`],
      "0.25 and 0.6"],
  ], [
    q("hard", "Two dice are rolled. What is P(the sum is even or at least one die shows a 5)?", frac(2, 3), "Use the additive rule.", [S`Even sum: 18 outcomes; at least one 5: 11; both — (5,1), (5,3), (5,5), (1,5), (3,5): 5.`, S`\(\frac{18+11-5}{36}=\frac{24}{36}\).`], "2/3"),
    q("hard", "P(A) = 0.35, P(B) = 0.4 and A, B are mutually exclusive. What is P(neither)?", num(0.25), "1 − (0.35 + 0.4).", [S`\(1-0.75\).`], "0.25"),
    q("hard", "In a class of 30, 16 take French, 12 take Spanish and 7 take neither. What is P(a student takes both)?", frac(5, 30), "Union = 23.", [S`\(16+12-23=5\).`], "1/6"),
  ]),

  wrapUp({
    qas: [
      ["What makes events mutually exclusive?", "They have no outcomes in common, so they cannot happen on the same trial."],
      ["Why subtract P(A and B)?", "Outcomes in both events are counted once in P(A) and again in P(B)."],
      ["Does “or” include both?", "Yes. In probability “A or B” means at least one of them."],
      ["How do I find P(only A)?", "P(A) − P(A and B)."],
      ["How do I fill a three-set Venn diagram?", "Start with the triple overlap, then the pairs (minus the triple), then the singles."],
    ],
    summary: [
      "Mutually exclusive: P(A ∪ B) = P(A) + P(B).",
      "General: P(A ∪ B) = P(A) + P(B) − P(A ∩ B).",
      "Neither = 1 − P(A ∪ B).",
      "Venn diagrams and two-way tables show every region.",
    ],
    next: "2.5 looks at “and”: independent and dependent events.",
  }),
];
