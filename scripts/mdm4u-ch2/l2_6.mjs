// MDM4U 2.6 — Conditional Probability: P(B | A) = P(A and B)/P(A), the reduced sample space, conditional probability
// from two-way tables and Venn diagrams, P(A | B) vs P(B | A), and the multiplication rule rearranged
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, frac, hard, fig, tableSvg, vennSvg, diceGridSvg, barsSvg } from "./lib.mjs";
import { r3 } from "../mdm4u/count.mjs";

export const TITLE = "2.6 Conditional Probability";
export const ID = "b063c60e-5ec0-4418-8750-45d45e4bfa98";
const S = String.raw;

export const blocks = () => [
  intro({
    icon: "🔎",
    title: "Conditional Probability",
    overview: S`A <strong>conditional probability</strong> is the probability of an event when we already know that another event has happened. Knowing that \(A\) happened shrinks the sample space to \(A\), so \[P(B\mid A)=\frac{P(A\cap B)}{P(A)}=\frac{n(A\cap B)}{n(A)}.\] Rearranged, this is the multiplication rule \(P(A\cap B)=P(A)\,P(B\mid A)\). Be careful: \(P(B\mid A)\) and \(P(A\mid B)\) are usually different.`,
    goals: [
      "explain conditional probability as a reduced sample space;",
      "calculate P(B | A) with the formula and by counting;",
      "find conditional probabilities from two-way tables and Venn diagrams;",
      "distinguish P(A | B) from P(B | A);",
      "use conditional probability to decide whether events are independent.",
    ],
    curriculum: "A1.6 (determine whether one event is conditional on another, and solve related problems [P(A given B)] using tree diagrams, lists and formulas)",
    prior: [
      ["P(A and B) = 0.12 and P(A) = 0.4. Compute 0.12 ÷ 0.4.", "0.3."],
      ["Of 40 students, 15 are in Grade 12. What fraction is that?", "15/40 = 3/8."],
      ["Two dice: how many outcomes have a sum of 8?", "5."],
    ],
    words: [
      ["Conditional probability", "probability of B given that A happened", "P(sum 8 | doubles)"],
      ["P(B | A)", "read “probability of B given A”", "= P(A ∩ B)/P(A)"],
      ["Reduced sample space", "only the outcomes in the given event", "the 6 doubles out of 36"],
      ["Two-way table", "counts sorted by two categories", "grade × activity"],
    ],
  }),

  section("📌 The reduced sample space", S`
  <p>Two dice are rolled and we are told the sum is at least 9. What is the probability that a 6 was rolled?</p>
  ${fig(diceGridSvg((a, b) => a + b >= 9, { label: (a, b) => (a + b >= 9 ? (a === 6 || b === 6 ? "6!" : `${a},${b}`) : "") }), "given sum ≥ 9: 10 outcomes remain; 7 of them contain a 6")}
  <p>\(P(\text{a }6\mid\text{sum}\ge9)=\frac{7}{10}\). Compare \(P(\text{a }6)=\frac{11}{36}\approx0.31\): knowing the sum is large makes a 6 much more likely.</p>
  ${keyIdea(S`“Given” means: throw away every outcome outside the given event, then find the fraction of what is left.`)}`),

  section("📌 From tables and Venn diagrams", S`
  ${fig(tableSvg([["", "uses transit", "drives", "total"], ["Grade 11", "48", "12", "60"], ["Grade 12", "52", "38", "90"], ["total", "100", "50", "150"]], { rowHead: true, hl: [[2, 1]] }), "P(transit | Grade 12) = 52/90 ≈ 0.578; P(Grade 12 | transit) = 52/100 = 0.52")}
  ${table(["Question", "Reduced sample space", "Answer"], [["P(transit | Grade 12)", "the Grade 12 row (90)", "\\(\\frac{52}{90}\\approx0.578\\)"], ["P(Grade 12 | transit)", "the transit column (100)", "\\(\\frac{52}{100}=0.52\\)"], ["P(drives | Grade 11)", "the Grade 11 row (60)", "\\(\\frac{12}{60}=0.2\\)"]])}
  ${fig(vennSvg({ A: "A", B: "B", n: { a: "0.3", ab: "0.2", b: "0.25", out: "0.25" } }), "P(B | A) = 0.2/0.5 = 0.4; P(A | B) = 0.2/0.45 ≈ 0.444")}`),

  section("📌 Explore", S`<p>Change the four counts. Switch between “pass given sport” (a row) and “sport given pass” (a column), and see that the two conditional probabilities differ.</p>`),

  widget("twoWayTable", { init: [30, 20, 15, 35] }),

  section("📌 Watch out", watchOut([
    "The given event goes in the denominator: P(B | A) divides by P(A).",
    "P(A | B) ≠ P(B | A) in general — “most smokers are adults” is not “most adults smoke”.",
    "If P(B | A) = P(B), knowing A changes nothing: A and B are independent.",
    "In a table, use the row or column total of the given category, not the grand total.",
  ])),

  examples([
    ["The formula", "P(A) = 0.6 and P(A and B) = 0.15. Find P(B | A).",
      [S`\(P(B\mid A)=\frac{0.15}{0.6}=0.25\).`],
      "0.25"],
    ["Cards", "A card is drawn. Given that it is a face card, what is the probability that it is a king?",
      [S`Reduced sample space: 12 face cards. Kings: 4.`, S`\(\frac4{12}=\frac13\).`],
      "1/3"],
    ["Two dice", "Two dice are rolled. Given that the dice show different numbers, what is the probability that the sum is 6?",
      [S`Different numbers: \(36-6=30\) outcomes.`, S`Sum 6 with different numbers: (1,5), (5,1), (2,4), (4,2): 4.`, S`\(\frac4{30}=\frac2{15}\).`],
      "2/15"],
    ["A two-way table", "Of 200 patients, 80 received a new drug; 60 of those improved. Of the 120 who received a placebo, 54 improved. Compare P(improved | drug) and P(improved | placebo).",
      [S`Drug: \(\frac{60}{80}=0.75\). Placebo: \(\frac{54}{120}=0.45\).`, S`The drug group improved much more often.`],
      "0.75 vs 0.45",
      fig(barsSvg([0.75, 0.45], { labels: ["drug", "placebo"], top: true, fmt: (v) => v.toFixed(2), ylabel: "P(improved | group)" }))],
    ["Multiplication rule", "70% of a school's students take the bus. Of bus riders, 20% are late at least once a month. What is P(a student takes the bus and is late)?",
      [S`\(P(\text{bus}\cap\text{late})=P(\text{bus})\,P(\text{late}\mid\text{bus})=0.7\times0.2\).`],
      "0.14"],
  ]),

  practice([
    q("formula", "P(A) = 0.5 and P(A and B) = 0.2. Find P(B | A).", num(0.4), "0.2 ÷ 0.5.", [S`\(0.4\).`], "0.4"),
    q("cards", "A card is drawn. Given that it is red, what is P(it is a diamond)?", frac(1, 2), "26 red cards, 13 diamonds.", [S`\(\frac{13}{26}\).`], "1/2"),
    q("dice", "Two dice are rolled. Given that the sum is 8, what is P(doubles)?", frac(1, 5), "5 outcomes with sum 8; one is (4,4).", [S`\(\frac15\).`], "1/5"),
    q("table", "In a class, 18 of 30 students have a pet; 12 of the pet owners have a dog. Given a student has a pet, what is P(dog)?", frac(2, 3), "12 ÷ 18.", [S`\(\frac{12}{18}\).`], "2/3"),
    q("independence", "P(B | A) = 0.3 and P(B) = 0.3. Which is true?", choice(["A and B are independent", "A and B are mutually exclusive", "P(A) = 0.3", "P(A and B) = 0"], 0), "Knowing A does not change B.", ["P(B | A) = P(B)."], "independent"),
  ]),

  ...hard([
    ["Working backwards", "P(A) = 0.4, P(B) = 0.5 and P(A | B) = 0.3. Find P(A and B), P(B | A) and P(A or B).",
      [S`\(P(A\cap B)=P(B)P(A\mid B)=0.5\times0.3=0.15\).`, S`\(P(B\mid A)=\frac{0.15}{0.4}=0.375\).`, S`\(P(A\cup B)=0.4+0.5-0.15=0.75\).`],
      "0.15, 0.375, 0.75"],
    ["Families", "A family has two children. Given that at least one is a girl, what is the probability that both are girls?",
      [S`Sample space: GG, GB, BG, BB (equally likely).`, S`Given at least one girl: GG, GB, BG.`, S`\(P(\text{GG}\mid\text{at least one G})=\frac13\) — not \(\frac12\).`],
      "1/3",
      fig(tableSvg([["", "girl", "boy"], ["girl", "GG", "GB"], ["boy", "BG", "BB"]], { rowHead: true, hl: [[1, 1], [1, 2], [2, 1]] }), "rows: older child, columns: younger child")],
  ], [
    q("hard", "Two cards are drawn without replacement. Given that the first is a spade, what is P(the second is a spade)?", frac(4, 17), "12 spades left in 51 cards.", [S`\(\frac{12}{51}\).`], "4/17"),
    q("hard", "P(A) = 0.6, P(B) = 0.3, P(A or B) = 0.72. Find P(A | B).", num(0.6), "P(A ∩ B) = 0.6 + 0.3 − 0.72 = 0.18.", [S`\(\frac{0.18}{0.3}\).`], "0.6"),
    q("hard", "Two dice are rolled. Given that at least one die shows 4, what is P(the sum is 7)?", frac(2, 11), "11 outcomes contain a 4; (3,4) and (4,3).", [S`\(\frac2{11}\).`], "2/11"),
  ]),

  wrapUp({
    qas: [
      ["What does “given” do?", "It replaces the whole sample space with just the outcomes of the given event."],
      ["Why is P(A | B) usually different from P(B | A)?", "They divide the same overlap by different totals: P(B) or P(A)."],
      ["How is conditional probability linked to independence?", "A and B are independent exactly when P(B | A) = P(B)."],
      ["How do I read a conditional probability from a table?", "Use the row or column of the given category as the denominator."],
      ["Where do conditional probabilities appear in real life?", "Medical tests, insurance, quality control, sports statistics — anywhere new information changes a chance."],
    ],
    summary: [
      "P(B | A) = P(A ∩ B)/P(A).",
      "P(A ∩ B) = P(A)·P(B | A).",
      "Given = reduced sample space.",
      "P(B | A) = P(B) ⇔ independent.",
    ],
    next: "2.7 organizes multi-stage problems with tree diagrams and probability tables.",
  }),
];
