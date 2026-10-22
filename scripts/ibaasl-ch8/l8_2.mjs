// IB AA SL 8.2 — Venn Diagrams and Sample Spaces: set notation, Venn diagrams, two-way tables, sample-space diagrams, the addition rule, mutually exclusive events
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard } from "./lib.mjs";
import { fig, vennDoc, gridDoc } from "./figs8.mjs";

export const TITLE = "8.2 Venn Diagrams and Sample Spaces";
export const ID = "90dd4e56-c325-4bad-a0d9-f6f506f6b180";
const S = String.raw;

export const blocks = () => [
  intro({
    icon: "⭕",
    title: "Venn Diagrams and Sample Spaces",
    overview: S`When two events are involved — a student studies French and plays sport, a card is red or a king — we need a clear picture of how the outcomes overlap. Venn diagrams, two-way tables and sample-space diagrams provide that picture. In this lesson you will use set notation, fill in Venn diagrams from information, read probabilities from them, use the addition rule, and recognise mutually exclusive events.`,
    goals: [
      "use the notation \\(A\\cup B\\), \\(A\\cap B\\) and \\(A'\\);",
      "complete and interpret Venn diagrams and two-way tables;",
      "list outcomes with sample-space diagrams;",
      "use \\(P(A\\cup B)=P(A)+P(B)-P(A\\cap B)\\);",
      "recognise mutually exclusive events, where \\(P(A\\cap B)=0\\).",
    ],
    curriculum: "SL 4.6 (use of Venn diagrams, tree diagrams, sample space diagrams and tables of outcomes; combined events P(A ∪ B) = P(A) + P(B) − P(A ∩ B); mutually exclusive events P(A ∩ B) = 0)",
    prior: [
      ["30 students: 18 play football. How many do not?", "12."],
      [S`Find \(\frac{7}{20}+\frac{6}{20}-\frac{2}{20}\).`, S`\(\frac{11}{20}\).`],
      ["A die is rolled. Can it show both a 2 and a 5?", "No."],
    ],
    words: [
      ["\\(A\\cup B\\)", "A or B (or both): the union", "in either circle"],
      ["\\(A\\cap B\\)", "A and B: the intersection", "the overlap"],
      ["\\(A'\\)", "not A: the complement", "outside circle A"],
      ["Mutually exclusive", "cannot happen together: \\(A\\cap B=\\varnothing\\)", "a 2 and a 5 on one die"],
      ["Two-way table", "counts classified by two variables", "gender × sport"],
    ],
  }),

  section("📌 Venn diagrams", S`
  <p>In a class of 30, 17 study French (F), 13 study Spanish (S) and 5 study both. Start with the overlap: 5 in \(F\cap S\), then \(17-5=12\) in F only, \(13-5=8\) in S only, and \(30-25=5\) in neither.</p>
  ${fig(vennDoc({ a: 12, both: 5, b: 8, out: 5 }, { names: ["F", "S"], shade: ["both"] }), "F ∩ S (shaded) holds 5 of the 30 students")}
  ${table(["Event", "Region", "Probability"], [[S`\(F\)`, "12 + 5", "17/30"], [S`\(F\cap S\)`, "5", "5/30 = 1/6"], [S`\(F\cup S\)`, "12 + 5 + 8", "25/30 = 5/6"], [S`\(F'\)`, "8 + 5", "13/30"], [S`\(F\cap S'\)`, "12", "12/30 = 2/5"]])}
  ${fig(vennDoc({ a: 12, both: 5, b: 8, out: 5 }, { names: ["F", "S"], shade: ["a", "both", "b"] }), "F ∪ S: everything inside either circle")}
  ${keyIdea(S`Fill a Venn diagram from the middle outwards: the intersection first, then 'only' regions, then 'neither'. Check that all regions add to the total.`)}`),

  section("📌 The addition rule, tables and sample spaces", S`
  <p>Adding \(P(F)\) and \(P(S)\) counts the overlap twice, so subtract it once: \(P(F\cup S)=\frac{17}{30}+\frac{13}{30}-\frac{5}{30}=\frac{25}{30}\). If A and B are <em>mutually exclusive</em> the overlap is empty and \(P(A\cup B)=P(A)+P(B)\).</p>
  ${fig(vennDoc({ a: 7, b: 9, out: 4 }, { names: ["A", "B"], apart: true }), "Separate circles: A and B are mutually exclusive, so P(A ∪ B) = 7/20 + 9/20")}
  ${table(["", "Sport", "No sport", "Total"], [["Year 11", "24", "16", "40"], ["Year 12", "18", "22", "40"], ["Total", "42", "38", "80"]])}
  <p>From the two-way table, \(P(\text{Year 11 and sport})=\frac{24}{80}\) and \(P(\text{Year 11 or sport})=\frac{40+42-24}{80}=\frac{58}{80}\).</p>
  ${fig(gridDoc([1, 2, 3, 4, 5, 6], ["H", "T"], { mark: (a, b) => b === "H" || a === 6, cell: (a, b) => `${a}${b}`, rowName: "die", colName: "coin" }), "Die and coin: P(head or six) = 7/12 (shaded)")}
  ${watchOut([
    "'A or B' in probability includes both; use the addition rule, not just P(A) + P(B).",
    "'A only' means A ∩ B′ — do not include the overlap.",
    "Mutually exclusive means P(A ∩ B) = 0, not P(A) = P(B).",
    "Check that the four regions of a Venn diagram add to the total (or probabilities to 1).",
  ])}`),

  section("📌 Explore", S`<p>Set the numbers in each region, then choose an event. The shaded region and readout give its probability, and the readout checks the addition rule.</p>`),

  widget("ibVenn", { init: [12, 5, 8, 5] }),

  examples([
    ["Level 1 · Reading a Venn diagram", "From the Venn diagram, find P(A), P(A ∩ B) and P(A ∪ B)′.",
      [S`Total 40. \(P(A)=\frac{14+6}{40}=\frac12\).`, S`\(P(A\cap B)=\frac{6}{40}=\frac{3}{20}\); \(P((A\cup B)')=\frac{9}{40}\).`],
      S`\(\frac12\), \(\frac3{20}\), \(\frac9{40}\)`,
      fig(vennDoc({ a: 14, both: 6, b: 11, out: 9 }))],
    ["Level 1 · Addition rule", S`\(P(A)=0.48\), \(P(B)=0.27\), \(P(A\cap B)=0.12\). Find \(P(A\cup B)\) and \(P(A\cup B)'\).`,
      [S`\(0.48+0.27-0.12=0.63\).`, S`\(1-0.63=0.37\).`],
      "0.63; 0.37"],
    ["Level 2 · Building a Venn diagram", "Of 50 people, 28 own a cat, 20 own a dog and 9 own neither. Find the number who own both and P(a cat but not a dog).",
      [S`\(n(C\cup D)=41\), so both \(=28+20-41=7\).`, S`Cat only \(=28-7=21\): \(P=\frac{21}{50}\).`],
      S`7; \(\frac{21}{50}\)`,
      fig(vennDoc({ a: 21, both: 7, b: 13, out: 9 }, { names: ["C", "D"], shade: ["a"] }))],
    ["Level 2 · Two-way table", "Using the table of 80 students above, find P(Year 12 or no sport).",
      [S`\(\frac{40+38-22}{80}=\frac{56}{80}\).`],
      S`\(\frac{7}{10}\)`],
    ["Level 3 · Using the rule backwards", S`\(P(A)=0.5\), \(P(A\cup B)=0.8\) and \(P(A\cap B)=0.2\). Find \(P(B)\) and \(P(B\cap A')\).`,
      [S`\(0.8=0.5+P(B)-0.2\Rightarrow P(B)=0.5\).`, S`\(P(B\cap A')=0.5-0.2=0.3\).`],
      "0.5; 0.3",
      fig(vennDoc({ a: "0.3", both: "0.2", b: "0.3", out: "0.2" }, { shade: ["b"] }))],
  ]),

  practice([
    q("Level 1 · union", "In a Venn diagram, A only = 9, both = 4, B only = 7, neither = 10. Find P(A ∪ B).", num(20 / 30, 0.001),
      "Add the three regions inside the circles.", [S`\(\frac{20}{30}\).`], S`\(\frac23\)`),
    q("Level 1 · complement", "In the same diagram (9, 4, 7, 10), find P(B′).", num(19 / 30, 0.001),
      "Outside B: 9 + 10.", [S`\(\frac{19}{30}\).`], S`\(\frac{19}{30}\)`),
    q("Level 2 · addition rule", S`\(P(A)=0.6\), \(P(B)=0.25\), \(P(A\cap B)=0.15\). Find \(P(A\cup B)\).`, num(0.7, 0.001),
      "Add, subtract the overlap.", [S`\(0.6+0.25-0.15\).`], S`\(0.7\)`),
    q("Level 2 · mutually exclusive", S`A and B are mutually exclusive with \(P(A)=0.3\), \(P(B)=0.45\). Find \(P(A\cup B)\).`, num(0.75, 0.001),
      "No overlap.", [S`\(0.3+0.45\).`], S`\(0.75\)`),
    q("Level 2 · 'only'", S`\(P(A)=0.55\) and \(P(A\cap B)=0.2\). Find \(P(A\cap B')\).`, num(0.35, 0.001),
      "A only.", [S`\(0.55-0.2\).`], S`\(0.35\)`),
  ]),

  ...hard([
    ["Three pieces of information", "In a group of 60, 35 like tea, 30 like coffee and 12 like neither. Find P(likes exactly one of the two drinks).",
      [S`\(n(T\cup C)=48\); both \(=35+30-48=17\).`, S`Tea only 18, coffee only 13: exactly one \(=31\).`, S`\(P=\frac{31}{60}\).`],
      S`\(\frac{31}{60}\)`,
      fig(vennDoc({ a: 18, both: 17, b: 13, out: 12 }, { names: ["T", "C"], shade: ["a", "b"] }), "Exactly one: the two 'only' regions (shaded)")],
    ["An unknown in a Venn diagram", "A Venn diagram has regions A only = 2x, both = x, B only = 3x + 1 and neither = 5, with total 30. Find x and P(A ∪ B).",
      [S`\(6x+6=30\Rightarrow x=4\).`, S`Regions 8, 4, 13, 5: \(P(A\cup B)=\frac{25}{30}=\frac56\).`],
      S`\(x=4\); \(\frac56\)`],
  ], [
    q("Level 3 · overlap", S`\(P(A)=0.42\), \(P(B)=0.35\), \(P(A\cup B)=0.61\). Find \(P(A\cap B)\).`, num(0.16, 0.001),
      "Rearrange the addition rule.", [S`\(0.42+0.35-0.61\).`], S`\(0.16\)`),
    q("Level 3 · neither", "Of 40 students, 22 play an instrument, 18 sing and 6 do both. Find P(neither).", num(6 / 40, 0.001),
      "n(I ∪ S) = 34.", [S`\(\frac{40-34}{40}\).`], S`\(\frac{3}{20}\)`),
    q("Level 3 · die and coin", "A die is rolled and a coin tossed. Find P(an odd number and a tail).", num(3 / 12, 0.001),
      "Count in the 12-outcome sample space.", [S`\(\frac{3}{12}\).`], S`\(\frac14\)`),
  ]),

  wrapUp({
    qas: [
      ["How do I start filling a Venn diagram?", "With the intersection, then the 'only' regions, then the region outside both."],
      ["Why subtract P(A ∩ B) in the addition rule?", "P(A) + P(B) counts the overlap twice."],
      ["What does mutually exclusive mean in a Venn diagram?", "The circles have no outcomes in common: P(A ∩ B) = 0."],
      ["When is a two-way table better than a Venn diagram?", "When every individual is classified by two variables with two (or more) categories each."],
      ["What is a sample-space diagram for?", "Listing all equally likely outcomes of two combined experiments so they can be counted."],
    ],
    summary: [
      "∪ = or (both included), ∩ = and, ′ = not.",
      "Fill Venn diagrams from the middle out.",
      "P(A ∪ B) = P(A) + P(B) − P(A ∩ B).",
      "Mutually exclusive: P(A ∩ B) = 0.",
      "Two-way tables and grids for combined outcomes.",
    ],
    next: "8.3 restricts the sample space with conditional probability and tests independence.",
  }),
];
