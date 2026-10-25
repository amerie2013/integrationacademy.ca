// MDM4U Worksheet 2.6 — Conditional Probability (teacher edition)
import { svgT, tableSvg, vennSvg, diceGridSvg, barsSvg } from "./figT.mjs";
import { r3 } from "../../mdm4u/count.mjs";

const S = String.raw;

const EXAMPLES = [
  { title: "Formula", q: "P(A) = 0.8 and P(A ∩ B) = 0.36. Find P(B | A).", steps: [S`$\frac{0.36}{0.8}=0.45$.`], ans: "0.45" },
  { title: "Reduced sample space", q: "Two dice are rolled. Given that the first die shows 3, find P(the sum is at least 8).", fig: svgT(diceGridSvg((a, b) => a === 3 && a + b >= 8), 3.8), steps: ["Given first = 3: 6 outcomes.", S`Sum at least 8: (3,5), (3,6): $\frac26=\frac13$.`], ans: "1/3" },
  { title: "Cards", q: "A card is drawn. Given that it is not a face card, find P(it is a 7).", steps: [S`Non-face cards: 40; sevens: 4: $\frac4{40}=\frac1{10}$.`], ans: "1/10" },
  { title: "Table: row", q: "Use the table of 250 adults. Find P(exercises daily | under 40).", fig: svgT(tableSvg([["", "daily", "weekly", "rarely", "total"], ["under 40", "45", "50", "25", "120"], ["40+", "30", "55", "45", "130"], ["total", "75", "105", "70", "250"]], { rowHead: true }), 5), steps: [S`$\frac{45}{120}=0.375$.`], ans: "0.375" },
  { title: "Table: column", q: "Same table. Find P(under 40 | exercises daily).", steps: [S`$\frac{45}{75}=0.6$.`], ans: "0.6" },
  { title: "Venn diagram", q: "Use the Venn diagram (probabilities). Find P(A | B) and P(B | A′).", fig: svgT(vennSvg({ A: "A", B: "B", n: { a: "0.35", ab: "0.15", b: "0.3", out: "0.2" } }), 3.8), steps: [S`$P(A\mid B)=\frac{0.15}{0.45}=\frac13$.`, S`$P(B\mid A')=\frac{0.3}{0.5}=0.6$.`], ans: "1/3 and 0.6" },
  { title: "Multiplication rule", q: "60% of a store's customers use a credit card; 30% of credit-card customers spend over 100 dollars. Find P(credit card and over 100 dollars).", steps: [S`$0.6\times0.3$.`], ans: "0.18" },
  { title: "Independence check", q: "P(A) = 0.25, P(B | A) = 0.4 and P(B) = 0.4. Are A and B independent?", steps: [S`$P(B\mid A)=P(B)$.`], ans: "yes" },
  { title: "Order of “given”", q: "In a school, 5% of students are on a sports team and 60% of team members are in Grade 12. Grade 12 is 25% of the school. Find P(on a team | Grade 12).", fig: svgT(barsSvg([0.6, 0.12], { labels: ["P(G12 | team)", "P(team | G12)"], top: true, fmt: (v) => v.toFixed(2) }), 4.2), steps: [S`$P(\text{team}\cap\text{G12})=0.05\times0.6=0.03$.`, S`$\frac{0.03}{0.25}=0.12$.`], ans: "0.12" },
];

const PROBLEMS = [
  { level: 1, q: "P(A ∩ B) = 0.12 and P(B) = 0.3. Find P(A | B).", ans: "0.4" },
  { level: 1, q: "A die is rolled. Given that the result is even, find P(it is greater than 3).", ans: "2/3" },
  { level: 1, q: "A card is drawn. Given that it is a spade, find P(it is a face card).", ans: "3/13" },
  { level: 2, q: "Two dice are rolled. Given that the sum is 7, find P(one die shows a 2).", ans: "2/6 = 1/3" },
  { level: 2, q: "Use the table: find P(passed | studied) and P(passed | did not study).", fig: svgT(tableSvg([["", "passed", "failed", "total"], ["studied", "68", "12", "80"], ["did not", "22", "18", "40"], ["total", "90", "30", "120"]], { rowHead: true }), 4.4), ans: "0.85 and 0.55", space: 4 },
  { level: 2, q: "P(A) = 0.5, P(B) = 0.4 and P(A ∪ B) = 0.7. Find P(A | B) and P(B | A).", ans: "0.5 and 0.4" },
  { level: 2, q: "Two cards are drawn without replacement. Given that the first is red, find P(the second is red).", ans: "25/51" },
  { level: 2, q: "A family has three children. Given that the first child is a girl, find P(all three are girls).", ans: "1/4" },
  { level: 3, space: 4.5, q: "A family has three children. Given that at least one is a girl, find P(all three are girls).", ans: S`$\frac{1/8}{7/8}=\frac17$` },
  { level: 3, space: 4.5, q: "P(A) = 0.3, P(B | A) = 0.5 and P(B | A′) = 0.2. Find P(B) and P(A | B).", ans: S`$P(B)=0.15+0.14=0.29$; $P(A\mid B)=\frac{0.15}{0.29}\approx${r3(0.15 / 0.29)}$` },
  { level: 3, space: 4.5, q: "Two dice are rolled. Given that the dice show different numbers, find P(at least one 6).", ans: S`different: 30 outcomes; with a 6: 10; $\frac{10}{30}=\frac13$` },
  { level: 3, space: 4.5, q: "Explain with an example why P(A | B) and P(B | A) can be very different.", ans: "e.g. P(male | NHL player) is almost 1, while P(NHL player | male) is almost 0: the same overlap is divided by very different totals" },
  { level: 3, space: 5, q: "In a city, 30% of days are rainy. Buses are late on 40% of rainy days and on 10% of dry days. Given that the bus was late, what is the probability it was raining?", ans: S`$\frac{0.12}{0.12+0.07}=\frac{12}{19}\approx${r3(12 / 19)}$` },
];

export const WS = {
  code: "2.6",
  title: "Conditional Probability",
  bigideas: S`$P(B\mid A)=\frac{P(A\cap B)}{P(A)}$: knowing $A$ happened reduces the sample space to $A$. Rearranged: $P(A\cap B)=P(A)P(B\mid A)$. In general $P(A\mid B)\ne P(B\mid A)$. If $P(B\mid A)=P(B)$, the events are independent.`,
  goals: ["Calculate conditional probabilities by counting and with the formula.", "Read them from tables and Venn diagrams.", "Distinguish P(A | B) from P(B | A).", "Use conditional probability to test independence."],
  curriculum: "A1.6 (conditional events; P(A given B) with trees, lists and formulas)",
  vocab: [["$P(B\\mid A)$", "B given A"], ["Reduced sample space", "outcomes of the given event only"]],
  hook: "A friend says: “Most car crashes happen within 10 km of home, so driving far away is safer.” What conditional probability is being confused?",
  concepts: [
    ["1. The formula", S`$P(B\mid A)=\frac{P(A\cap B)}{P(A)}=\frac{n(A\cap B)}{n(A)}$.`],
    ["2. Tables", S`${svgT(tableSvg([["", "B", "B′"], ["A", "a", "b"], ["A′", "c", "d"]], { rowHead: true }), 2.8)}$P(B\mid A)=\frac{a}{a+b}$ (row); $P(A\mid B)=\frac a{a+c}$ (column).`],
    ["3. Independence", S`$P(B\mid A)=P(B)$ exactly when $A$ and $B$ are independent.`],
  ],
  tips: ["The given event is the denominator.", "Use row/column totals, not the grand total.", "Write the event in words first.", "Check: 0 ≤ P(B | A) ≤ 1.", "Do not swap the order of “given”."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
