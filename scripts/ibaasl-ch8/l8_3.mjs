// IB AA SL 8.3 — Conditional Probability and Independence: P(A | B) from tables and Venn diagrams, the multiplication rule, testing independence
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard } from "./lib.mjs";
import { fig, vennDoc, gridDoc } from "./figs8.mjs";

export const TITLE = "8.3 Conditional Probability and Independence";
export const ID = "6953f8d1-21c1-4666-9a3c-d4c98b0c6278";
const S = String.raw;
const D = [1, 2, 3, 4, 5, 6];

export const blocks = () => [
  intro({
    icon: "🔎",
    title: "Conditional Probability and Independence",
    overview: S`Extra information changes probabilities. If you know a student plays sport, the chance they are in Year 11 may be different from the chance for a student chosen from the whole school. That is conditional probability: the sample space shrinks to the outcomes we know have happened. In this lesson you will find \(P(A\mid B)\) from tables and Venn diagrams, use the multiplication rule, and test whether two events are independent.`,
    goals: [
      "interpret \\(P(A\\mid B)\\) as the probability of A when B is known to have happened;",
      "find \\(P(A\\mid B)=\\frac{P(A\\cap B)}{P(B)}\\) from tables, Venn diagrams and sample spaces;",
      "use the multiplication rule \\(P(A\\cap B)=P(B)\\,P(A\\mid B)\\);",
      "test independence using \\(P(A\\cap B)=P(A)P(B)\\) or \\(P(A\\mid B)=P(A)\\);",
      "distinguish independent from mutually exclusive events.",
    ],
    curriculum: "SL 4.6 (conditional probability P(A | B) = P(A ∩ B)/P(B); independent events P(A ∩ B) = P(A)P(B))",
    prior: [
      ["In a Venn diagram A ∩ B = 6 and B = 15 (counts). What fraction of B is also in A?", "6/15 = 2/5."],
      [S`Find \(0.4\times0.25\).`, "0.1."],
      ["Can two events be mutually exclusive and both have positive probability?", "Yes — e.g. rolling a 1 and rolling a 6."],
    ],
    words: [
      ["\\(P(A\\mid B)\\)", "probability of A given that B has happened", "P(king | picture card)"],
      ["Reduced sample space", "only the outcomes in B", "the B column of a table"],
      ["Multiplication rule", "\\(P(A\\cap B)=P(B)P(A\\mid B)\\)", "0.5 × 0.3"],
      ["Independent", "one event does not change the probability of the other", "two coin tosses"],
      ["Dependent", "the probability of one depends on the other", "drawing without replacement"],
    ],
  }),

  section("📌 Conditional probability", S`
  <p>Given B, only the outcomes in B are possible, so \(P(A\mid B)=\dfrac{n(A\cap B)}{n(B)}=\dfrac{P(A\cap B)}{P(B)}\). In the Venn diagram, given B we look only inside circle B: 6 of its 15 members are also in A.</p>
  ${fig(vennDoc({ a: 10, both: 6, b: 9, out: 5 }, { shade: ["both", "b"] }), "Given B (shaded): P(A | B) = 6/15 = 0.4, while P(A) = 16/30 ≈ 0.53")}
  ${table(["", "Walk", "Bus", "Car", "Total"], [["Year 11", "21", "15", "4", "40"], ["Year 12", "14", "20", "6", "40"], ["Total", "35", "35", "10", "80"]])}
  <p>Given a student takes the bus, \(P(\text{Year 12}\mid\text{bus})=\frac{20}{35}=\frac47\): use only the bus column.</p>
  ${fig(gridDoc(D, D, { mark: (a, b) => a + b >= 9, cell: (a, b) => a + b, rowName: "first die", colName: "second die" }), "Two dice, given the total is at least 9 (10 outcomes): P(a double | total ≥ 9) = 2/10")}
  ${keyIdea(S`\(P(A\mid B)=\dfrac{P(A\cap B)}{P(B)}\), so \(P(A\cap B)=P(B)\,P(A\mid B)=P(A)\,P(B\mid A)\). In a table, 'given B' means 'use only the B row or column'.`)}`),

  section("📌 Independent events", S`
  <p>A and B are <em>independent</em> if knowing that B happened does not change the probability of A: \(P(A\mid B)=P(A)\). Equivalently \(P(A\cap B)=P(A)P(B)\). Successive coin tosses are independent; drawing cards without replacement is not.</p>
  ${fig(vennDoc({ a: "0.3", both: "0.2", b: "0.2", out: "0.3" }), "P(A) = 0.5, P(B) = 0.4, P(A ∩ B) = 0.2 = 0.5 × 0.4: A and B are independent")}
  ${fig(vennDoc({ a: "0.35", b: "0.25", out: "0.4" }, { apart: true }), "Mutually exclusive (P(A ∩ B) = 0) events with positive probabilities are never independent")}
  ${table(["", "Mutually exclusive", "Independent"], [["meaning", "cannot both happen", "one does not affect the other"], ["test", S`\(P(A\cap B)=0\)`, S`\(P(A\cap B)=P(A)P(B)\)`], ["Venn diagram", "circles do not overlap", "overlap = product of the probabilities"]])}
  ${watchOut([
    "P(A | B) and P(B | A) are usually different — read which event is given.",
    "Divide by P(B), the probability of the condition.",
    "Independent is not the same as mutually exclusive.",
    "To show independence, check one of the two equalities with numbers.",
  ])}`),

  section("📌 Explore", S`<p>Edit the counts in the two-way table and switch the condition. Watch \(P(A\mid B)\) compared with \(P(A)\), and find counts that make A and B independent.</p>`),

  widget("ibConditional", { init: [18, 12, 22, 28] }),

  examples([
    ["Level 1 · From a table", "Using the travel table above, find P(walks | Year 11) and P(Year 11 | walks).",
      [S`Year 11 row: \(\frac{21}{40}\).`, S`Walk column: \(\frac{21}{35}=\frac35\).`],
      S`\(\frac{21}{40}\); \(\frac35\)`],
    ["Level 1 · The formula", S`\(P(A\cap B)=0.12\) and \(P(B)=0.4\). Find \(P(A\mid B)\).`,
      [S`\(\frac{0.12}{0.4}=0.3\).`],
      "0.3"],
    ["Level 2 · From a Venn diagram", "From the Venn diagram, find P(B | A) and P(A | B′).",
      [S`\(P(B\mid A)=\frac{8}{8+12}=\frac25\).`, S`B′ contains 12 + 6 = 18; of these 12 are in A: \(\frac{12}{18}=\frac23\).`],
      S`\(\frac25\); \(\frac23\)`,
      fig(vennDoc({ a: 12, both: 8, b: 14, out: 6 }, { shade: ["a", "both"] }))],
    ["Level 2 · Testing independence", S`\(P(A)=0.6\), \(P(B)=0.35\), \(P(A\cap B)=0.21\). Are A and B independent?`,
      [S`\(P(A)P(B)=0.6\times0.35=0.21=P(A\cap B)\).`],
      "yes, independent"],
    ["Level 3 · Using independence", S`A and B are independent with \(P(A)=0.4\) and \(P(A\cup B)=0.7\). Find \(P(B)\).`,
      [S`\(0.7=0.4+P(B)-0.4P(B)=0.4+0.6P(B)\).`, S`\(P(B)=0.5\).`],
      "0.5",
      fig(vennDoc({ a: "0.2", both: "0.2", b: "0.3", out: "0.3" }), "With P(B) = 0.5: P(A ∩ B) = 0.4 × 0.5 = 0.2")],
  ]),

  practice([
    q("Level 1 · formula", S`\(P(A\cap B)=0.15\), \(P(B)=0.5\). Find \(P(A\mid B)\).`, num(0.3, 0.001),
      "Divide by P(B).", [S`\(\frac{0.15}{0.5}\).`], S`\(0.3\)`),
    q("Level 1 · table", "In a table, 12 of the 30 left-handed students wear glasses. Find P(glasses | left-handed).", num(0.4, 0.001),
      "Restrict to the left-handed.", [S`\(\frac{12}{30}\).`], S`\(0.4\)`),
    q("Level 2 · multiplication", S`\(P(B)=0.8\) and \(P(A\mid B)=0.25\). Find \(P(A\cap B)\).`, num(0.2, 0.001),
      "P(B)P(A | B).", [S`\(0.8\times0.25\).`], S`\(0.2\)`),
    q("Level 2 · independence", S`A and B are independent with \(P(A)=0.3\), \(P(B)=0.6\). Find \(P(A\cap B)\).`, num(0.18, 0.001),
      "Multiply.", [S`\(0.3\times0.6\).`], S`\(0.18\)`),
    q("Level 2 · test", S`\(P(A)=0.5\), \(P(B)=0.4\), \(P(A\cap B)=0.25\). A and B are:`, choice(["not independent", "independent", "mutually exclusive", "complementary"], 0),
      "Compare P(A ∩ B) with P(A)P(B) = 0.2.", [S`\(0.25\ne0.2\).`], "not independent"),
  ]),

  ...hard([
    ["Given information in words", "In a school, 60% of students take a bus and 25% of bus users are late at least once a week; 10% of other students are late. Find P(late) and P(bus | late).",
      [S`\(P(\text{bus and late})=0.6\times0.25=0.15\); \(P(\text{not bus and late})=0.4\times0.1=0.04\).`, S`\(P(\text{late})=0.19\).`, S`\(P(\text{bus}\mid\text{late})=\frac{0.15}{0.19}\approx0.789\).`],
      S`0.19; \(\approx0.789\)`],
    ["Independence with a parameter", S`\(P(A)=x\), \(P(B)=0.5\), \(P(A\cup B)=0.8\), and A and B are independent. Find \(x\).`,
      [S`\(0.8=x+0.5-0.5x=0.5+0.5x\).`, S`\(x=0.6\).`, S`Check: \(P(A\cap B)=0.3\) and the regions are 0.3, 0.3, 0.2, 0.2.`],
      S`\(x=0.6\)`,
      fig(vennDoc({ a: "0.3", both: "0.3", b: "0.2", out: "0.2" }), "P(A) = 0.6, P(B) = 0.5, independent")],
  ], [
    q("Level 3 · reverse", S`\(P(A\mid B)=0.4\) and \(P(A\cap B)=0.1\). Find \(P(B)\).`, num(0.25, 0.001),
      "P(B) = P(A ∩ B)/P(A | B).", [S`\(\frac{0.1}{0.4}\).`], S`\(0.25\)`),
    q("Level 3 · dice", "Two dice are rolled. Given that the total is 8, find the probability that one die shows a 3.", num(0.4, 0.001),
      "Total 8: (2,6), (3,5), (4,4), (5,3), (6,2).", [S`\(\frac25\).`], S`\(0.4\)`),
    q("Level 3 · union from independence", S`A and B are independent with \(P(A)=0.2\) and \(P(B)=0.5\). Find \(P(A\cup B)\).`, num(0.6, 0.001),
      "P(A) + P(B) − P(A)P(B).", [S`\(0.2+0.5-0.1\).`], S`\(0.6\)`),
  ]),

  wrapUp({
    qas: [
      ["What does the vertical bar mean?", "'Given': P(A | B) is the probability of A when we know B has happened."],
      ["How do I find P(A | B) from a table?", "Use only the row or column for B: divide the count in A ∩ B by the total for B."],
      ["Is P(A | B) the same as P(B | A)?", "Usually not: the condition changes what you divide by."],
      ["How do I show events are independent?", "Show P(A ∩ B) = P(A)P(B), or P(A | B) = P(A), with numbers."],
      ["Can mutually exclusive events be independent?", "Not if both have positive probability: knowing one happened makes the other impossible."],
    ],
    summary: [
      "P(A | B) = P(A ∩ B)/P(B).",
      "P(A ∩ B) = P(B)P(A | B).",
      "Independent ⇔ P(A ∩ B) = P(A)P(B) ⇔ P(A | B) = P(A).",
      "Independent ≠ mutually exclusive.",
    ],
    next: "8.4 uses tree diagrams for events in sequence, with and without replacement.",
  }),
];
