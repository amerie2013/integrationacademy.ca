// IB AA SL Worksheet 8.2 — Venn Diagrams and Sample Spaces (teacher edition)
import { svgT } from "./figT.mjs";
import { vennDoc, gridDoc } from "../figs8.mjs";

const S = String.raw;

const EXAMPLES = [
  { title: "Reading a Venn diagram", q: "Find P(A), P(A ∩ B) and P(A ∪ B) from the diagram.",
    fig: svgT(vennDoc({ a: 9, both: 6, b: 11, out: 4 }), 5.5),
    steps: [S`Total 30. $P(A)=\frac{15}{30}$; $P(A\cap B)=\frac{6}{30}$; $P(A\cup B)=\frac{26}{30}$.`], ans: S`$\frac12$, $\frac15$, $\frac{13}{15}$` },
  { title: "Building a Venn diagram", q: "Of 45 students, 25 play hockey, 18 play tennis and 7 play both. Draw the Venn diagram.",
    fig: svgT(vennDoc({ a: 18, both: 7, b: 11, out: 9 }, { names: ["H", "T"] }), 5.5),
    steps: ["Both 7; hockey only 18; tennis only 11; neither 45 − 36 = 9."], ans: "18, 7, 11, 9" },
  { title: "Probability of 'only'", q: "Using the hockey/tennis diagram, find P(tennis but not hockey).",
    steps: [S`$\frac{11}{45}$.`], ans: S`$\frac{11}{45}$` },
  { title: "Addition rule", q: S`$P(A)=0.38$, $P(B)=0.44$, $P(A\cap B)=0.16$. Find $P(A\cup B)$.`,
    steps: [S`$0.38+0.44-0.16$.`], ans: "0.66" },
  { title: "Mutually exclusive", q: S`A card is drawn from a standard pack. Are 'a heart' and 'a club' mutually exclusive? Find P(heart or club).`,
    steps: ["A card cannot be both: yes.", S`$\frac{13}{52}+\frac{13}{52}$.`], ans: S`yes; $\frac12$` },
  { title: "Not mutually exclusive", q: "A card is drawn. Find P(a heart or a king).",
    steps: [S`$\frac{13}{52}+\frac{4}{52}-\frac{1}{52}$.`], ans: S`$\frac{16}{52}=\frac{4}{13}$` },
  { title: "Two-way table", q: "In a survey of 120 people, 50 of the 70 adults and 30 of the 50 teenagers own a bike. Find P(adult or bike owner).",
    steps: [S`Adults 70, bike owners 80, both 50: $\frac{70+80-50}{120}$.`], ans: S`$\frac{100}{120}=\frac56$` },
  { title: "Sample space for a coin and a spinner", q: "A coin is tossed and a spinner numbered 1–4 is spun. Find P(a tail and an even number).",
    fig: svgT(gridDoc(["H", "T"], [1, 2, 3, 4], { mark: (a, b) => a === "T" && b % 2 === 0, cell: (a, b) => `${a}${b}`, rowName: "coin", colName: "spinner" }), 5),
    steps: ["8 equally likely outcomes; T2 and T4."], ans: S`$\frac28=\frac14$` },
  { title: "Finding the overlap", q: S`$P(A)=0.5$, $P(B)=0.35$ and $P(A\cup B)=0.7$. Find $P(A\cap B)$ and $P(A\cap B')$.`,
    steps: [S`$0.5+0.35-0.7=0.15$.`, S`$0.5-0.15$.`], ans: "0.15; 0.35" },
];

const PROBLEMS = [
  { level: 1, q: "In a Venn diagram, A only 7, both 3, B only 5, neither 5. Find P(A ∩ B).", recap: "Intersection.", ans: S`$\frac{3}{20}$` },
  { level: 1, q: "For the same diagram, find P(A ∪ B).", recap: "Union.", ans: S`$\frac{15}{20}=\frac34$` },
  { level: 1, q: S`$P(A)=0.7$, $P(B)=0.2$, A and B mutually exclusive. Find $P(A\cup B)$.`, recap: "Mutually exclusive.", ans: "0.9" },
  { level: 2, q: "Of 60 people, 34 like cats, 29 like dogs and 10 like neither. Draw a Venn diagram and find P(likes both).", recap: "Build a Venn diagram.", ans: S`13 both: $\frac{13}{60}$`,
    fig: svgT(vennDoc({}, { names: ["C", "D"] }), 5) },
  { level: 2, q: S`$P(A)=0.45$, $P(B)=0.3$, $P(A\cup B)=0.6$. Find $P(A\cap B)$.`, recap: "Rearrange.", ans: "0.15" },
  { level: 2, q: "A card is drawn from a standard pack. Find P(a red card or a queen).", recap: "Addition rule.", ans: S`$\frac{28}{52}=\frac{7}{13}$` },
  { level: 2, q: "A spinner (1–5) and a die are used. Find P(the spinner shows more than the die).", recap: "Grid.", ans: S`$\frac{10}{30}=\frac13$` },
  { level: 2, q: "Shade A ∩ B′ on the diagram and find its probability.", recap: "A only.", ans: S`$\frac{8}{25}$`,
    fig: svgT(vennDoc({ a: 8, both: 5, b: 7, out: 5 }), 5) },
  { level: 3, space: 4, q: "A Venn diagram has regions A only = x, both = 4, B only = 2x − 1, neither = 6, with total 33. Find x and P(B).", recap: "Unknown region.", ans: S`$x=8$; $\frac{19}{33}$` },
  { level: 3, space: 4, q: "Of 80 students, 45 take biology, 38 take chemistry and 15 take neither. Find P(exactly one of the two).", recap: "Exactly one.", ans: S`both 18: $\frac{47}{80}$` },
  { level: 3, space: 4, q: S`Show that if A and B are mutually exclusive then $P(A\cup B)'=1-P(A)-P(B)$.`, recap: "Proof.", ans: S`$P(A\cap B)=0$ in the addition rule` },
  { level: 3, space: 4, q: "Two dice are rolled. Let A = 'a double' and B = 'the sum is 8'. Find P(A ∪ B).", recap: "Overlap in a grid.", ans: S`$\frac{6+5-1}{36}=\frac{10}{36}$` },
  { level: 3, space: 4, q: S`$P(A')=0.4$, $P(B)=0.5$, $P(A\cap B)=0.3$. Find $P(A'\cap B')$.`, recap: "Neither.", ans: "0.2" },
];

export const WS = {
  code: "8.2",
  title: "Venn Diagrams and Sample Spaces",
  bigideas: S`Use Venn diagrams (filled from the intersection outwards), two-way tables and sample-space grids to organise outcomes. $A\cup B$ is 'A or B or both', $A\cap B$ is 'A and B', $A'$ is 'not A'. $P(A\cup B)=P(A)+P(B)-P(A\cap B)$; for mutually exclusive events $P(A\cap B)=0$.`,
  goals: ["Use set notation.", "Build and read Venn diagrams.", "Use the addition rule.", "Recognise mutually exclusive events."],
  curriculum: "SL 4.6",
  vocab: [[S`$A\cup B$`, "A or B"], [S`$A\cap B$`, "A and B"], ["Mutually exclusive", S`$P(A\cap B)=0$`]],
  hook: "Ask who has a pet and who plays an instrument. Sort the class into a Venn diagram on the board, then ask probability questions about a randomly chosen student.",
  concepts: [
    ["1. Venn diagrams", S`${svgT(vennDoc({ a: 18, both: 7, b: 11, out: 9 }, { names: ["H", "T"], shade: ["both"] }), 5)} Fill the overlap first.`],
    ["2. Addition rule", "Subtract the overlap counted twice."],
    ["3. Sample spaces", "Grids and tables list combined outcomes."],
  ],
  tips: ["Middle first.", "'Or' includes both.", "'Only' excludes the overlap.", "Check the total.", "ME ⇒ no overlap."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
