// IB AA SL 8.5 — Chapter 8 Review: theoretical/experimental probability, Venn diagrams, conditional probability, independence, tree diagrams
import { intro, section, keyIdea, widget, examples, practice, wrapUp, table, q, num, hard } from "./lib.mjs";
import { fig, vennDoc, treeDoc, gridDoc } from "./figs8.mjs";

export const TITLE = "8.5 Chapter 8 Review";
export const ID = "1baa0008-0001-4001-8001-000000000805";
const S = String.raw;
const D = [1, 2, 3, 4, 5, 6];

export const blocks = () => [
  intro({
    icon: "🧭",
    title: "Chapter 8 Review",
    overview: S`This review connects the chapter: counting equally likely outcomes, estimating from experiments, Venn diagrams and the addition rule, conditional probability and independence, and tree diagrams. The examples combine these as exam questions do.`,
    goals: [
      "calculate theoretical and experimental probabilities and expected numbers;",
      "use Venn diagrams, tables and the addition rule;",
      "find conditional probabilities;",
      "test independence;",
      "use tree diagrams with and without replacement.",
    ],
    curriculum: "SL 4.5, 4.6 (probability, combined events, conditional probability, independence, diagrams)",
    prior: [
      ["What is P(A′) if P(A) = 0.27?", "0.73."],
      ["What does P(A | B) mean?", "The probability of A given that B has happened."],
      ["When are A and B independent?", "When P(A ∩ B) = P(A)P(B)."],
    ],
    words: [
      ["8.1", "theoretical and experimental probability", ""],
      ["8.2", "Venn diagrams, addition rule", ""],
      ["8.3", "conditional probability, independence", ""],
      ["8.4", "tree diagrams", ""],
      ["Check", "probabilities add to 1", ""],
    ],
  }),

  section("📌 The chapter on one page", S`
  ${table(["Question", "Tool"], [
    ["equally likely outcomes", S`\(P(A)=\frac{n(A)}{n(U)}\); list or grid the sample space`],
    ["not A", S`\(P(A')=1-P(A)\)`],
    ["from an experiment", "relative frequency; expected number np"],
    ["A or B", S`\(P(A\cup B)=P(A)+P(B)-P(A\cap B)\); Venn diagram or table`],
    ["A given B", S`\(P(A\mid B)=\frac{P(A\cap B)}{P(B)}\)`],
    ["independent?", S`\(P(A\cap B)=P(A)P(B)\)`],
    ["stages", "tree: multiply along, add between; at least one = 1 − none"],
  ])}
  ${fig(vennDoc({ a: 15, both: 9, b: 6, out: 10 }, { names: ["M", "P"] }), "Example 2: 40 students, M = maths club, P = photography club")}
  ${keyIdea("Choose the representation first — sample-space grid, Venn diagram, table or tree — and the calculation usually becomes simple counting or multiplying.")}`),

  section("📌 Explore", S`<p>Use the explorer to check the tree-diagram examples, with and without replacement.</p>`),

  widget("ibTree", { init: [4, 6] }),

  examples([
    ["Level 1 · Sample space", "Two dice are rolled. Find P(the product is 12).",
      ["(2, 6), (3, 4), (4, 3), (6, 2)."],
      S`\(\frac{4}{36}=\frac19\)`,
      fig(gridDoc(D, D, { mark: (a, b) => a * b === 12, cell: (a, b) => a * b, rowName: "first die", colName: "second die" }))],
    ["Level 2 · Venn diagram", "Using the Venn diagram above, find P(M ∪ P), P(M | P) and decide whether M and P are independent.",
      [S`\(P(M\cup P)=\frac{30}{40}=\frac34\).`, S`\(P(M\mid P)=\frac{9}{15}=\frac35\).`, S`\(P(M)=\frac{24}{40}=\frac35\): equal, so M and P are independent.`],
      S`\(\frac34\); \(\frac35\); independent`],
    ["Level 2 · Expected number", "A biased die lands on 6 in 72 of 300 rolls. Estimate P(6) and the number of sixes expected in 50 rolls.",
      [S`\(\frac{72}{300}=0.24\).`, S`\(50\times0.24=12\).`],
      "0.24; 12"],
    ["Level 2 · Tree without replacement", "A bag has 4 red and 6 blue counters. Two are taken without replacement. Find P(at least one red).",
      [S`\(P(BB)=\frac{6}{10}\times\frac59=\frac{30}{90}\).`, S`\(1-\frac13=\frac23\).`],
      S`\(\frac23\)`,
      fig(treeDoc([["R", "4/10"], ["B", "6/10"]], [[["R", "3/9"], ["B", "6/9"]], [["R", "4/9"], ["B", "5/9"]]], { highlight: ["11"] }))],
    ["Level 3 · Reverse conditional", "70% of a club's members are adults. 40% of adults and 80% of juniors swim. A swimmer is chosen at random. Find the probability that they are an adult.",
      [S`\(P(\text{swim})=0.7(0.4)+0.3(0.8)=0.28+0.24=0.52\).`, S`\(P(\text{adult}\mid\text{swim})=\frac{0.28}{0.52}\approx0.538\).`],
      S`\(\approx0.538\)`,
      fig(treeDoc([["Adult", "0.7"], ["Junior", "0.3"]], [[["S", "0.4"], ["S′", "0.6"]], [["S", "0.8"], ["S′", "0.2"]]], { highlight: ["00", "10"] }), "Swimming paths highlighted: 0.28 + 0.24")],
  ]),

  practice([
    q("Level 1 · complement", "P(win) = 0.18. Find P(not win).", num(0.82, 0.001),
      "1 − P(win).", [S`\(1-0.18\).`], S`\(0.82\)`),
    q("Level 1 · expected", "P(red) = 0.25. How many reds are expected in 60 spins?", num(15),
      "np.", [S`\(60\times0.25\).`], S`\(15\)`),
    q("Level 2 · addition", S`\(P(A)=0.55\), \(P(B)=0.4\), \(P(A\cap B)=0.25\). Find \(P(A\cup B)\).`, num(0.7, 0.001),
      "Addition rule.", [S`\(0.55+0.4-0.25\).`], S`\(0.7\)`),
    q("Level 2 · conditional", S`\(P(A\cap B)=0.18\), \(P(A)=0.45\). Find \(P(B\mid A)\).`, num(0.4, 0.001),
      "Divide by P(A).", [S`\(\frac{0.18}{0.45}\).`], S`\(0.4\)`),
    q("Level 2 · tree", "A coin is biased with P(H) = 0.6. It is tossed twice. Find P(one head and one tail).", num(0.48, 0.001),
      "HT + TH.", [S`\(2\times0.6\times0.4\).`], S`\(0.48\)`),
  ]),

  ...hard([
    ["Independence with unknowns", S`A and B are independent, \(P(A)=0.3\) and \(P(A'\cap B)=0.42\). Find \(P(B)\) and \(P(A\cup B)\).`,
      [S`\(P(A'\cap B)=P(A')P(B)=0.7P(B)=0.42\Rightarrow P(B)=0.6\).`, S`\(P(A\cup B)=0.3+0.6-0.18=0.72\).`],
      "0.6; 0.72",
      fig(vennDoc({ a: "0.12", both: "0.18", b: "0.42", out: "0.28" }), "Regions of the Venn diagram")],
    ["A two-way table problem", "Of 200 people, 120 are vaccinated. 15 vaccinated and 30 unvaccinated people caught a virus. Find P(caught virus), P(vaccinated | caught virus), and decide whether catching the virus is independent of vaccination.",
      [S`\(P(V)=0.6\); caught \(=45\): \(P(C)=0.225\).`, S`\(P(V\mid C)=\frac{15}{45}=\frac13\).`, S`\(P(V)P(C)=0.135\ne P(V\cap C)=0.075\): not independent.`],
      S`0.225; \(\frac13\); not independent`],
  ], [
    q("Level 3 · at least one", "P(a light bulb fails in a year) = 0.1, independently. Find P(at least one of 3 bulbs fails) (3 d.p.).", num(0.271, 0.001),
      "1 − 0.9³.", [S`\(1-0.729\).`], S`\(0.271\)`),
    q("Level 3 · overlap", S`\(P(A\cup B)=0.9\), \(P(A)=0.6\), \(P(B)=0.5\). Find \(P(A\cap B)\).`, num(0.2, 0.001),
      "Rearrange the addition rule.", [S`\(0.6+0.5-0.9\).`], S`\(0.2\)`),
    q("Level 3 · without replacement", "A drawer has 5 black and 3 white socks. Two are taken. Find P(a matching pair).", num(26 / 56, 0.001),
      "BB + WW.", [S`\(\frac{20}{56}+\frac{6}{56}\).`], S`\(\frac{13}{28}\)`),
  ]),

  wrapUp({
    qas: [
      ["Which diagram should I use?", "A grid for two equally likely experiments, a Venn diagram for overlapping events, a table for two classifications, a tree for stages."],
      ["How do I avoid double counting?", "Use the addition rule, or count regions in a Venn diagram."],
      ["What is the most common conditional-probability error?", "Dividing by the wrong total — always divide by the probability of the given event."],
      ["How do I show independence?", "Compare P(A ∩ B) with P(A)P(B) numerically."],
      ["How do I check a tree diagram?", "Each set of branches adds to 1, and all end results add to 1."],
    ],
    summary: [
      "P(A) = n(A)/n(U); P(A′) = 1 − P(A); expected number np.",
      "P(A ∪ B) = P(A) + P(B) − P(A ∩ B).",
      "P(A | B) = P(A ∩ B)/P(B); independent ⇔ P(A ∩ B) = P(A)P(B).",
      "Trees: multiply along, add between; at least one = 1 − none.",
    ],
    next: "Chapter 9 studies exponentials and logarithms.",
  }),
];
