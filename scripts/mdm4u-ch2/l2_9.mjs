// MDM4U 2.9 — Chapter 2 Review: choosing the probability rule (counting, complement, additive, multiplicative,
// conditional, trees), experimental vs theoretical probability, odds, mixed problems
import { intro, section, keyIdea, examples, practice, wrapUp, watchOut, table, q, num, choice, frac, ratio, hard, fig, vennSvg, treeSvg, tableSvg, diceGridSvg } from "./lib.mjs";
import { C, r3 } from "../mdm4u/count.mjs";

export const TITLE = "2.9 Chapter 2 Review";
export const ID = "5c3e0001-0001-4001-8001-0000d4d00209";
const S = String.raw;

export const blocks = () => [
  intro({
    icon: "🗂️",
    title: "Chapter 2 Review: Probability",
    overview: S`This review brings together the probability rules of the chapter. The key skill is recognizing which rule a question needs: a count, the complement, the additive rule (“or”), the multiplicative rule (“and”), a conditional probability (“given”), or a tree that combines several of them. Each example below names the rule it uses.`,
    goals: [
      "choose the right probability rule from the wording of a problem;",
      "move between probability, odds and the complement;",
      "compare experimental and theoretical probabilities;",
      "use Venn diagrams, tables and trees to organize information;",
      "solve multi-step problems with counting.",
    ],
    curriculum: "A1.1–A1.6 (probability of events and combinations of events in discrete sample spaces); A2.5 (probability using counting principles)",
    prior: [
      ["P(A or B) for mutually exclusive A and B?", "P(A) + P(B)."],
      ["P(A and B) for independent A and B?", "P(A)·P(B)."],
      ["P(B | A) = ?", "P(A ∩ B)/P(A)."],
    ],
    words: [
      ["Complement", "P(A′) = 1 − P(A)", "at least one = 1 − none"],
      ["Additive rule", "P(A ∪ B) = P(A) + P(B) − P(A ∩ B)", "“or”"],
      ["Multiplicative rule", "P(A ∩ B) = P(A)·P(B | A)", "“and”"],
      ["Odds in favour", "P(A) : P(A′)", "3 : 5 ↔ 3/8"],
    ],
  }),

  section("📌 Which rule?", S`
  ${table(["Wording", "Rule", "Lesson"], [["equally likely outcomes", "\\(\\frac{n(A)}{n(S)}\\)", "2.1, 2.8"], ["from data or a simulation", "frequency ÷ trials", "2.2"], ["odds", "\\(P(A):P(A')\\); \\(\\frac{m}{m+n}\\)", "2.3"], ["not / at least one", "\\(1-P(A)\\)", "2.3"], ["or", "\\(P(A)+P(B)-P(A\\cap B)\\)", "2.4"], ["and", "\\(P(A)P(B)\\) or \\(P(A)P(B\\mid A)\\)", "2.5"], ["given", "\\(\\frac{P(A\\cap B)}{P(A)}\\)", "2.6"], ["several stages", "tree: multiply along, add across", "2.7"]])}
  ${keyIdea(S`Translate the words first. “Or” adds, “and” multiplies, “given” divides, “at least one” subtracts from 1.`)}`),

  section("📌 Watch out", watchOut([
    "Do not add probabilities of events that overlap without subtracting the overlap.",
    "Do not multiply probabilities of dependent events without adjusting the second one.",
    "Odds are not probabilities: 2 : 3 in favour means P = 2/5.",
    "In a conditional probability the given event's total is the denominator.",
  ])),

  examples([
    ["Counting (2.1)", "Two dice are rolled. Find P(the product is 12).",
      [S`(2,6), (6,2), (3,4), (4,3): 4 outcomes.`, S`\(\frac4{36}=\frac19\).`],
      "1/9",
      fig(diceGridSvg((a, b) => a * b === 12, { label: (a, b) => a * b }))],
    ["Additive rule (2.4)", "Of 60 students, 25 take Physics, 30 take Chemistry and 10 take both. Find P(a random student takes Physics or Chemistry) and the odds against.",
      [S`\(\frac{25+30-10}{60}=\frac{45}{60}=\frac34\).`, S`Odds against \(1:3\).`],
      "3/4; 1 : 3",
      fig(vennSvg({ A: "Physics", B: "Chemistry", n: { a: 15, ab: 10, b: 20, out: 15 }, U: "60 students" }))],
    ["Dependent events (2.5)", "Three cards are drawn without replacement. Find P(all three are red).",
      [S`\(\frac{26}{52}\cdot\frac{25}{51}\cdot\frac{24}{50}=\frac{15\,600}{132\,600}\).`],
      `≈ ${r3((26 * 25 * 24) / (52 * 51 * 50))}`],
    ["Conditional (2.6)", "Use the table. Given that a randomly chosen person prefers tea, what is the probability that the person is under 30?",
      [S`Tea total \(=18+42=60\).`, S`\(P(\text{under }30\mid\text{tea})=\frac{18}{60}=0.3\).`],
      "0.3",
      fig(tableSvg([["", "coffee", "tea", "total"], ["under 30", "52", "18", "70"], ["30+", "48", "42", "90"], ["total", "100", "60", "160"]], { rowHead: true, hl: [[1, 2]] }))],
    ["Tree (2.7)", "A student takes the bus 80% of days and is late 10% of those days; on other days she walks and is late 25% of the time. Find P(late) and P(walked | late).",
      [S`\(P(\text{late})=0.8(0.1)+0.2(0.25)=0.08+0.05=0.13\).`, S`\(P(\text{walked}\mid\text{late})=\frac{0.05}{0.13}\approx${r3(0.05 / 0.13)}\).`],
      `0.13; ≈ ${r3(0.05 / 0.13)}`,
      fig(treeSvg([{ t: "bus", p: "0.8", c: [{ t: "L", p: "0.1" }, { t: "OK", p: "0.9" }] }, { t: "walk", p: "0.2", c: [{ t: "L", p: "0.25" }, { t: "OK", p: "0.75" }] }], { heads: ["travel", "arrival"], leaf: (p) => p.join(" ") }))],
  ]),

  practice([
    q("complement", "P(A) = 0.42. What is P(A′)?", num(0.58), "1 − 0.42.", [S`\(0.58\).`], "0.58"),
    q("odds", "P(A) = 0.2. Give the odds against A.", ratio(4, 1), "0.8 : 0.2.", [S`\(4:1\).`], "4 : 1"),
    q("or", "P(A) = 0.3, P(B) = 0.5, P(A and B) = 0.1. Find P(A or B).", num(0.7), "Additive rule.", [S`\(0.3+0.5-0.1\).`], "0.7"),
    q("given", "With the same numbers, find P(A | B).", num(0.2), "0.1 ÷ 0.5.", [S`\(0.2\).`], "0.2"),
    q("experimental", "A thumbtack landed point-up 63 times in 150 drops. Estimate P(point-up).", num(0.42), "63 ÷ 150.", [S`\(0.42\).`], "0.42"),
  ]),

  ...hard([
    ["Counting with a condition", "A committee of 4 is chosen at random from 7 teachers and 5 students. Find P(at least 2 students).",
      [S`Total \(\binom{12}4=495\).`, S`Fewer than 2 students: \(\binom74+\binom51\binom73=35+175=210\).`, S`\(P=1-\frac{210}{495}=\frac{285}{495}=\frac{19}{33}\).`],
      `19/33 ≈ ${r3(19 / 33)}`],
    ["Independence and “at least one”", "A security system has two independent alarms. One works 95% of the time, the other 90%. Find P(at least one alarm works) and P(exactly one works).",
      [S`Both fail: \(0.05\times0.1=0.005\). At least one: \(0.995\).`, S`Exactly one: \(0.95(0.1)+0.05(0.9)=0.095+0.045=0.14\).`],
      "0.995 and 0.14"],
  ], [
    q("hard", "Two cards are drawn without replacement. What is P(one ace and one king, in either order)?", frac(8, 663), "2 × (4/52)(4/51).", [S`\(\frac{32}{2652}\).`], "8/663"),
    q("hard", "P(A) = 0.5, P(B | A) = 0.4, P(B | A′) = 0.2. Find P(A | B). (3 decimals)", num(r3(0.2 / 0.3), 0.001), "P(B) = 0.2 + 0.1.", [S`\(\frac{0.2}{0.3}\).`], "0.667"),
    q("hard", "A 4-person team is chosen at random from 6 Grade 11 and 6 Grade 12 students. What is P(an equal number from each grade)?", frac(C(6, 2) ** 2, C(12, 4)), "₆C₂ × ₆C₂ ÷ ₁₂C₄.", [S`\(\frac{225}{495}=\frac5{11}\).`], "5/11"),
  ]),

  wrapUp({
    qas: [
      ["How do I pick the right rule?", "Translate the key word: or → add (minus overlap); and → multiply; given → divide; not / at least one → complement."],
      ["When should I draw a tree?", "Whenever the experiment has stages, especially if the second stage depends on the first."],
      ["When should I use counting?", "When the outcomes are equally likely and there are too many to list."],
      ["How do odds relate to probability?", "Odds in favour m : n correspond to P = m/(m + n)."],
      ["What connects experimental and theoretical probability?", "With many trials the experimental value tends toward the theoretical one."],
    ],
    summary: [
      "Count, complement, add, multiply, condition.",
      "Trees and tables organize multi-stage problems.",
      "Odds compare favourable to unfavourable.",
      "Experimental → theoretical as trials increase.",
    ],
    next: "Chapter 3 turns outcomes into numbers: random variables and discrete probability distributions.",
  }),
];
