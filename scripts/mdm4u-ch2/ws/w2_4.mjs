// MDM4U Worksheet 2.4 — Mutually Exclusive Events & the Additive Rule (teacher edition)
import { svgT, vennSvg, diceGridSvg, tableSvg } from "./figT.mjs";

const S = String.raw;

const EXAMPLES = [
  { title: "Mutually exclusive?", q: "One card is drawn. Are these mutually exclusive? (a) a 10 and a heart (b) a black card and a diamond (c) an ace and a face card.", steps: ["(a) the 10 of hearts is both: no.", "(b) diamonds are red: yes.", "(c) aces are not face cards: yes."], ans: "no, yes, yes" },
  { title: "Adding", q: "A card is drawn. Find P(an ace or a face card).", steps: [S`Mutually exclusive: $\frac4{52}+\frac{12}{52}=\frac{16}{52}=\frac4{13}$.`], ans: "4/13" },
  { title: "Subtracting the overlap", q: "A card is drawn. Find P(a club or a number card from 2 to 10).", steps: [S`Clubs 13, number cards 36, club number cards 9.`, S`$\frac{13+36-9}{52}=\frac{40}{52}=\frac{10}{13}$.`], ans: "10/13" },
  { title: "Two dice", q: "Two dice are rolled. Find P(the sum is greater than 9 or at least one die shows a 1).", fig: svgT(diceGridSvg((a, b) => a + b > 9 || a === 1 || b === 1), 3.8), steps: [S`Sum > 9: 6 outcomes; at least one 1: 11; none in both (a 1 makes the sum at most 7).`, S`Mutually exclusive: $\frac{17}{36}$.`], ans: "17/36" },
  { title: "Venn regions", q: "Use the Venn diagram of 50 students. Find P(only music), P(music or sport) and P(neither).", fig: svgT(vennSvg({ A: "music", B: "sport", n: { a: 14, ab: 8, b: 19, out: 9 }, U: "50" }), 4.2), steps: [S`Only music $\frac{14}{50}=0.28$.`, S`Music or sport $\frac{41}{50}=0.82$; neither $\frac9{50}=0.18$.`], ans: "0.28, 0.82, 0.18" },
  { title: "Formula", q: "P(A) = 0.45, P(B) = 0.35, P(A ∩ B) = 0.15. Find P(A ∪ B), P(only B) and P(neither).", steps: [S`$0.45+0.35-0.15=0.65$.`, S`Only B $=0.35-0.15=0.2$; neither $=0.35$.`], ans: "0.65, 0.2, 0.35" },
  { title: "Finding the overlap", q: "P(A) = 0.7, P(B) = 0.5, P(A ∪ B) = 0.9. Find P(A ∩ B).", steps: [S`$0.9=0.7+0.5-x\Rightarrow x=0.3$.`], ans: "0.3" },
  { title: "Table", q: "Use the table. Find P(senior or owns a car).", fig: svgT(tableSvg([["", "car", "no car", "total"], ["junior", "6", "54", "60"], ["senior", "24", "36", "60"], ["total", "30", "90", "120"]], { rowHead: true }), 4.4), steps: [S`$\frac{60+30-24}{120}=\frac{66}{120}=0.55$.`], ans: "0.55" },
  { title: "Three events", q: "P(A) = 0.4, P(B) = 0.3, P(C) = 0.2; A, B, C are mutually exclusive. Find P(A or B or C) and P(none).", steps: [S`$0.4+0.3+0.2=0.9$; none $0.1$.`], ans: "0.9 and 0.1" },
];

const PROBLEMS = [
  { level: 1, q: "A die is rolled. Are “even” and “greater than 4” mutually exclusive? Find P(even or greater than 4).", ans: S`no (6 is both); $\frac{3+2-1}{6}=\frac23$` },
  { level: 1, q: "A card is drawn. Find P(a heart or a spade).", ans: "1/2" },
  { level: 1, q: "P(A) = 0.25, P(B) = 0.4 and A, B are mutually exclusive. Find P(A or B).", ans: "0.65" },
  { level: 2, q: "A card is drawn. Find P(a face card or a red card).", ans: S`$\frac{12+26-6}{52}=\frac{32}{52}=\frac8{13}$` },
  { level: 2, q: "Two dice are rolled. Find P(doubles or a sum less than 5).", ans: S`doubles 6; sum < 5: 6; both (1,1), (2,2): 2; $\frac{10}{36}=\frac5{18}$` },
  { level: 2, q: "In a group of 80 people, 45 like comedies, 38 like action films and 20 like both. Find P(likes exactly one type).", ans: S`only comedy 25, only action 18: $\frac{43}{80}$` },
  { level: 2, q: "P(A ∪ B) = 0.8, P(A) = 0.5, P(B) = 0.45. Find P(A ∩ B) and P(only A).", ans: "0.15 and 0.35" },
  { level: 2, q: "Complete the Venn diagram from: n(S) = 40, n(A) = 22, n(B) = 15, n(A ∩ B) = 7. Find P(A′ ∩ B′).", fig: svgT(vennSvg({ A: "A", B: "B", U: "40" }), 3.8), ans: S`regions 15, 7, 8, outside 10: $\frac{10}{40}=0.25$`, space: 4 },
  { level: 3, space: 4.5, q: "Of 100 students: 50 study Spanish, 40 French, 30 German; 15 Spanish and French, 10 Spanish and German, 8 French and German, 3 all three. Find P(a student studies none of the three).", ans: S`$50+40+30-15-10-8+3=90$; none $\frac{10}{100}=0.1$` },
  { level: 3, space: 4.5, q: "Show that if A and B are mutually exclusive, then P(A′ ∪ B′) = 1.", ans: S`$A'\cup B'=(A\cap B)'$ and $P(A\cap B)=0$, so the probability is $1$` },
  { level: 3, space: 4.5, q: "A number is chosen at random from 1 to 100. Find P(it is divisible by 3 or 5 or 7).", ans: S`$33+20+14-6-4-2+0=55$: $\frac{55}{100}$` },
  { level: 3, space: 4.5, q: "P(A) = 0.6 and P(B) = 0.7. What are the smallest and largest possible values of P(A ∩ B)? Explain with Venn diagrams.", ans: S`smallest $0.3$ (when $A\cup B=S$), largest $0.6$ (when $A\subseteq B$)` },
  { level: 3, space: 5, q: "Two dice are rolled. Let A = “sum is even”, B = “sum is greater than 8”, C = “doubles”. Find P(A ∪ B ∪ C).", fig: svgT(diceGridSvg((a, b) => (a + b) % 2 === 0 || a + b > 8 || a === b), 3.8), ans: S`count the shaded cells: $\frac{24}{36}=\frac23$` },
];

export const WS = {
  code: "2.4",
  title: "Mutually Exclusive Events & the Additive Rule",
  bigideas: S`Events that cannot occur together are mutually exclusive: $P(A\cup B)=P(A)+P(B)$. Otherwise the overlap is counted twice: $P(A\cup B)=P(A)+P(B)-P(A\cap B)$. Venn diagrams and two-way tables show every region: only A, only B, both, neither.`,
  goals: ["Decide whether events are mutually exclusive.", "Apply the additive rule.", "Use Venn diagrams with two and three sets.", "Read probabilities from tables."],
  curriculum: "A1.5 (events as subsets; mutually exclusive or not; P(A or B), P(A and B) with Venn diagrams, lists and formulas)",
  vocab: [["$A\\cup B$", "A or B (or both)"], ["$A\\cap B$", "A and B"], ["Mutually exclusive", "$A\\cap B=\\emptyset$"]],
  hook: "A student says P(heart or king) = 1/4 + 1/13. Find the mistake.",
  concepts: [
    ["1. Mutually exclusive", S`No common outcomes: add the probabilities.`],
    ["2. The additive rule", S`${svgT(vennSvg({ A: "A", B: "B", shade: ["ab"] }), 3.4)}$P(A\cup B)=P(A)+P(B)-P(A\cap B)$.`],
    ["3. Regions", S`Only A $=P(A)-P(A\cap B)$; neither $=1-P(A\cup B)$; three sets: add singles, subtract pairs, add the triple.`],
  ],
  tips: ["“Or” includes both.", "Fill Venn diagrams from the centre out.", "Check that the regions add to the total.", "ME ≠ independent.", "Use tables for survey data."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
