// MDM4U Worksheet 2.5 — Independent & Dependent Events (teacher edition)
import { svgT, treeSvg, poolSvg, tableSvg, spinnerSvg } from "./figT.mjs";
import { r3 } from "../../mdm4u/count.mjs";

const S = String.raw;

const EXAMPLES = [
  { title: "Independent", q: "A spinner (1/4 red) is spun and a die is rolled. Find P(red and an odd number).", fig: svgT(spinnerSvg([["R", 0.25, "red"], ["other", 0.75, "gray"]], { r: 50 }), 3), steps: [S`$\frac14\times\frac12=\frac18$.`], ans: "1/8" },
  { title: "With replacement", q: "A bag has 4 green and 6 yellow balls. A ball is drawn, replaced, and another drawn. Find P(green then yellow).", steps: [S`$\frac4{10}\times\frac6{10}=\frac{24}{100}$.`], ans: "0.24" },
  { title: "Without replacement", q: "Same bag, without replacement. Find P(green then yellow) and P(one of each colour).", fig: svgT(treeSvg([{ t: "G", p: "4/10", c: [{ t: "G", p: "3/9" }, { t: "Y", p: "6/9" }] }, { t: "Y", p: "6/10", c: [{ t: "G", p: "4/9" }, { t: "Y", p: "5/9" }] }], { heads: ["1st", "2nd"] }), 4.6), steps: [S`$\frac4{10}\cdot\frac69=\frac{24}{90}=\frac4{15}$.`, S`One of each: $2\cdot\frac{24}{90}=\frac8{15}$.`], ans: "4/15 and 8/15" },
  { title: "Cards", q: "Three cards are drawn without replacement. Find P(all clubs).", steps: [S`$\frac{13}{52}\cdot\frac{12}{51}\cdot\frac{11}{50}=\frac{1716}{132\,600}$.`], ans: `≈ ${r3((13 * 12 * 11) / (52 * 51 * 50), 4)}` },
  { title: "Repeated trials", q: "A machine works on a given day with probability 0.95. Find P(it works 7 days in a row).", steps: [S`$0.95^7$.`], ans: `≈ ${r3(0.95 ** 7)}` },
  { title: "Test for independence", q: "P(A) = 0.3, P(B) = 0.6, P(A ∩ B) = 0.18. Are A and B independent?", steps: [S`$0.3\times0.6=0.18$ ✓.`], ans: "independent" },
  { title: "From a table", q: "Use the table. Are “left-handed” and “wears glasses” independent?", fig: svgT(tableSvg([["", "glasses", "no glasses", "total"], ["left", "4", "6", "10"], ["right", "36", "54", "90"], ["total", "40", "60", "100"]], { rowHead: true }), 4.4), steps: [S`$P(L)=0.1$, $P(G)=0.4$, $P(L\cap G)=0.04=0.1\times0.4$.`], ans: "independent" },
  { title: "Dependent sequence", q: "A class has 12 boys and 10 girls. Two students are chosen one after the other to speak. Find P(both girls).", steps: [S`$\frac{10}{22}\cdot\frac9{21}=\frac{90}{462}=\frac{15}{77}$.`], ans: "15/77" },
  { title: "Independence and the additive rule", q: "A and B are independent with P(A) = 0.5 and P(B) = 0.2. Find P(A or B).", steps: [S`$P(A\cap B)=0.1$.`, S`$0.5+0.2-0.1=0.6$.`], ans: "0.6" },
];

const PROBLEMS = [
  { level: 1, q: "Classify as independent or dependent: (a) two coin tosses (b) two cards drawn without replacement (c) rain today and rain tomorrow.", ans: "(a) independent (b) dependent (c) dependent (weather persists)" },
  { level: 1, q: "A die is rolled twice. Find P(a 5 then an even number).", ans: "1/12" },
  { level: 1, q: "A bag has 2 red and 8 white marbles. Two are drawn with replacement. Find P(both white).", ans: "0.64" },
  { level: 2, q: "Same bag, two drawn without replacement. Find P(both white) and P(at least one red).", ans: S`$\frac{56}{90}=\frac{28}{45}$; $\frac{17}{45}$` },
  { level: 2, q: "Two cards are drawn without replacement. Find P(a king then a queen).", ans: S`$\frac4{52}\cdot\frac4{51}=\frac4{663}$` },
  { level: 2, q: "A quiz has 3 true/false questions and 2 multiple-choice questions with 5 options. A student guesses. Find P(all correct).", ans: S`$\left(\frac12\right)^3\left(\frac15\right)^2=\frac1{200}$` },
  { level: 2, q: "P(A) = 0.4, P(B) = 0.5, P(A or B) = 0.7. Are A and B independent?", ans: S`$P(A\cap B)=0.2=0.4\times0.5$: yes` },
  { level: 2, q: "Draw a tree for drawing 2 balls without replacement from the bag shown and find P(same colour).", fig: svgT(poolSvg([[3, "red", "red"], [5, "blue", "blue"]], { per: 8 }), 4), ans: S`$\frac38\cdot\frac27+\frac58\cdot\frac47=\frac{26}{56}=\frac{13}{28}$`, space: 4.5 },
  { level: 3, space: 4.5, q: "A 4-digit code is set at random with digits 0–9 (repeats allowed). Find P(all four digits are different) by multiplying probabilities.", ans: S`$1\cdot\frac9{10}\cdot\frac8{10}\cdot\frac7{10}=0.504$` },
  { level: 3, space: 4.5, q: "Three people are chosen at random. Find P(at least two were born on the same day of the week).", ans: S`$1-\frac{7\cdot6\cdot5}{7^3}=1-\frac{30}{49}=\frac{19}{49}$` },
  { level: 3, space: 4.5, q: "A system has 3 independent components with reliabilities 0.9, 0.85 and 0.95. It works only if all three work. Find P(the system works). Then find P(it works) if the components are connected so that the system works when at least one works.", ans: S`series $0.9\cdot0.85\cdot0.95\approx${r3(0.9 * 0.85 * 0.95)}$; parallel $1-0.1\cdot0.15\cdot0.05=${r3(1 - 0.1 * 0.15 * 0.05, 5)}$` },
  { level: 3, space: 4.5, q: "Explain why two mutually exclusive events with non-zero probabilities cannot be independent.", ans: S`$P(A\cap B)=0$ but $P(A)P(B)>0$` },
  { level: 3, space: 5, q: "Cards are drawn one at a time without replacement until a heart appears. Find P(the first heart is the 3rd card).", ans: S`$\frac{39}{52}\cdot\frac{38}{51}\cdot\frac{13}{50}=${r3((39 * 38 * 13) / (52 * 51 * 50), 4)}$` },
];

export const WS = {
  code: "2.5",
  title: "Independent & Dependent Events",
  bigideas: S`Independent events: $P(A\cap B)=P(A)P(B)$. Dependent events: $P(A\cap B)=P(A)P(B\mid A)$. Drawing with replacement keeps the probabilities the same; without replacement they change after each draw. To test independence, compare $P(A\cap B)$ with $P(A)P(B)$.`,
  goals: ["Classify events as independent or dependent.", "Multiply probabilities for “and”.", "Use trees for draws without replacement.", "Test independence from data."],
  curriculum: "A1.6 (independent and dependent events; P(A and B), P(A or B) using trees, lists and formulas); A2.5",
  vocab: [["Independent", "one does not affect the other"], ["Dependent", "the first changes the second"], ["$P(B\\mid A)$", "probability of B given A"]],
  hook: "Draw two cards from a deck. Does putting the first card back change the chance that both are aces? By how much?",
  concepts: [
    ["1. Independent events", S`$P(A\cap B)=P(A)P(B)$: coins, dice, draws with replacement.`],
    ["2. Dependent events", S`${svgT(treeSvg([{ t: "A", p: "4/52", c: [{ t: "A", p: "3/51" }, { t: "x", p: "48/51" }] }, { t: "x", p: "48/52", c: [{ t: "A", p: "4/51" }, { t: "x", p: "47/51" }] }], { heads: ["1st", "2nd"] }), 4.6)}Multiply by the updated probability.`],
    ["3. Testing", S`Independent $\Leftrightarrow P(A\cap B)=P(A)P(B)\Leftrightarrow P(B\mid A)=P(B)$.`],
  ],
  tips: ["Reduce both counts after each draw.", "Multiply along, add across.", "ME ≠ independent.", "Check real data before assuming independence.", "“At least one” → complement."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
