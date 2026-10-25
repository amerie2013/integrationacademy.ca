// MDM4U 2.7 — Tree Diagrams & Probability Tables: multi-stage experiments, multiplying along branches and adding
// paths, total probability, "reversing" a tree (P(first stage | second stage)), and organizing the same information
// in a probability table
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, frac, hard, fig, treeSvg, tableSvg, barsSvg } from "./lib.mjs";
import { r3 } from "../mdm4u/count.mjs";

export const TITLE = "2.7 Tree Diagrams & Probability Tables";
export const ID = "1bc05300-6122-4f12-83fa-7034493441e8";
const S = String.raw;

// factory: machine A makes 60% (3% defective), machine B 40% (5% defective)
const pA = 0.6, pB = 0.4, dA = 0.03, dB = 0.05, pD = pA * dA + pB * dB;
const factory = [
  { t: "A", p: "0.6", c: [{ t: "D", p: "0.03" }, { t: "OK", p: "0.97" }] },
  { t: "B", p: "0.4", c: [{ t: "D", p: "0.05" }, { t: "OK", p: "0.95" }] },
];

export const blocks = () => [
  intro({
    icon: "🌲",
    title: "Tree Diagrams & Probability Tables",
    overview: S`A <strong>tree diagram</strong> shows a multi-stage experiment: each branch is labelled with its probability (conditional on the path so far). <strong>Multiply along a path</strong> to get the probability of that whole outcome, and <strong>add the paths</strong> that make up an event. The same information fits in a <strong>probability table</strong>. Reading a tree backwards — the probability of an earlier stage given a later result — uses conditional probability: \[P(A\mid D)=\frac{P(A\cap D)}{P(D)}.\]`,
    goals: [
      "draw tree diagrams with conditional branch probabilities;",
      "multiply along paths and add paths to find event probabilities;",
      "use the law of total probability to find the probability of a second-stage result;",
      "reverse a tree: find the probability of a first-stage event given a second-stage result;",
      "organize the same information in a probability (two-way) table.",
    ],
    curriculum: "A1.6 (solve problems involving P(A and B), P(A or B), P(A given B) using tree diagrams, lists and formulas); A1.5 (strategies such as diagrams and formulas)",
    prior: [
      ["Multiply 0.6 × 0.03.", "0.018."],
      ["Branches from one point of a tree must add to …", "1."],
      ["P(B | A) = P(A ∩ B) ÷ …", "P(A)."],
    ],
    words: [
      ["Path", "a route from the start of a tree to one end", "A then defective"],
      ["Branch probability", "probability of the next stage given the path so far", "P(D | A) = 0.03"],
      ["Total probability", "sum over all paths that end in the event", "P(D) = 0.018 + 0.020"],
      ["Probability table", "a two-way table of joint probabilities", "rows: machine; columns: result"],
    ],
  }),

  section("📌 Multiply along, add across", S`
  <p>Machine A makes 60% of a factory's parts and 3% of them are defective; machine B makes 40% and 5% of them are defective.</p>
  ${fig(treeSvg(factory, { heads: ["machine", "part"], leaf: (p) => ({ AD: "0.6 × 0.03 = 0.018", AOK: "0.6 × 0.97 = 0.582", BD: "0.4 × 0.05 = 0.020", BOK: "0.4 × 0.95 = 0.380" })[p.join("")], leafW: 150 }), "the four path probabilities add to 1")}
  <p>\(P(D)=0.018+0.020=${r3(pD)}\) (total probability). A defective part is found. Which machine made it?</p>
  \[P(A\mid D)=\frac{P(A\cap D)}{P(D)}=\frac{0.018}{0.038}\approx${r3(0.018 / pD)}.\]
  ${keyIdea(S`Branches leaving one point add to 1. All the end-of-path probabilities add to 1.`)}`),

  section("📌 The same information in a table", S`
  ${fig(tableSvg([["", "defective", "OK", "total"], ["machine A", "0.018", "0.582", "0.6"], ["machine B", "0.020", "0.380", "0.4"], ["total", "0.038", "0.962", "1"]], { rowHead: true, hl: [[1, 1], [2, 1]] }), "the cells are the path probabilities; the margins are the totals")}
  ${table(["Tree", "Table"], [["first-stage branches", "row totals"], ["path probability", "a cell"], ["P(second-stage result)", "a column total"], ["P(first | second)", "cell ÷ column total"]])}`),

  section("📌 Explore", S`<p>A screening test: change how common the condition is and how accurate the test is. The tree gives P(positive) and the probability of really having the condition after a positive test.</p>`),

  widget("screeningTree", { init: [2, 95, 6] }),

  section("📌 Watch out", watchOut([
    "Second-stage branch probabilities are conditional on the first stage — they can differ on different branches.",
    "Add only the paths that end in the event you want.",
    "Reversing a tree: divide the one path by the total of all paths ending in the result.",
    "A rare condition plus a small false-positive rate can make most positive tests false.",
  ])),

  examples([
    ["A two-stage tree", "A bag has 4 red and 2 green marbles. Two are drawn without replacement. Find P(the two marbles are different colours).",
      [S`RG: \(\frac46\cdot\frac25=\frac8{30}\). GR: \(\frac26\cdot\frac45=\frac8{30}\).`, S`Add: \(\frac{16}{30}=\frac8{15}\).`],
      "8/15",
      fig(treeSvg([{ t: "R", p: "4/6", c: [{ t: "R", p: "3/5" }, { t: "G", p: "2/5" }] }, { t: "G", p: "2/6", c: [{ t: "R", p: "4/5" }, { t: "G", p: "1/5" }] }], { heads: ["1st", "2nd"] }))],
    ["Weather and games", "The probability of rain is 0.3. A team wins 40% of games played in rain and 65% of games played in dry weather. Find P(the team wins).",
      [S`\(0.3(0.4)+0.7(0.65)=0.12+0.455\).`],
      "0.575"],
    ["Reversing", "Using the weather example, given that the team won, what is the probability it rained?",
      [S`\(P(\text{rain}\cap\text{win})=0.12\); \(P(\text{win})=0.575\).`, S`\(\frac{0.12}{0.575}\approx${r3(0.12 / 0.575)}\).`],
      `${r3(0.12 / 0.575)}`],
    ["Three stages", "A coin is tossed three times. Use a tree to find P(at least two heads in a row).",
      [S`Outcomes with HH in a row: HHH, HHT, THH: 3 of 8.`, S`\(\frac38\).`],
      "3/8"],
    ["A table from a tree", "15% of a city's workers cycle to work. Of cyclists, 80% are under 40; of non-cyclists, 45% are under 40. Make a probability table and find P(cyclist | under 40).",
      [S`Cells: cyclist & under 40: \(0.15(0.8)=0.12\); non-cyclist & under 40: \(0.85(0.45)=0.3825\).`, S`\(P(\text{under }40)=0.5025\).`, S`\(P(\text{cyclist}\mid\text{under }40)=\frac{0.12}{0.5025}\approx${r3(0.12 / 0.5025)}\).`],
      `${r3(0.12 / 0.5025)}`,
      fig(tableSvg([["", "under 40", "40+", "total"], ["cyclist", "0.12", "0.03", "0.15"], ["not", "0.3825", "0.4675", "0.85"], ["total", "0.5025", "0.4975", "1"]], { rowHead: true }))],
  ]),

  practice([
    q("path", "P(A) = 0.7 and P(B | A) = 0.4. What is the probability of the path A then B?", num(0.28), "Multiply.", [S`\(0.7\times0.4\).`], "0.28"),
    q("total", "P(A) = 0.5, P(D | A) = 0.1, P(D | A′) = 0.3. Find P(D).", num(0.2), "Add both paths to D.", [S`\(0.05+0.15\).`], "0.2"),
    q("reverse", "With the numbers above, find P(A | D).", num(0.25), "0.05 ÷ 0.2.", [S`\(\frac{0.05}{0.2}\).`], "0.25"),
    q("marbles", "A bag has 3 red and 3 blue marbles. Two are drawn without replacement. What is P(both the same colour)?", frac(2, 5), "RR + BB.", [S`\(2\cdot\frac36\cdot\frac25=\frac{12}{30}\).`], "2/5"),
    q("branches", "Branches from one point of a tree diagram are 0.35, 0.4 and x. What is x?", num(0.25), "They add to 1.", [S`\(1-0.75\).`], "0.25"),
  ]),

  ...hard([
    ["A screening test", "A condition affects 1% of a population. A test is positive for 98% of people with the condition and for 4% of people without it. Find P(positive) and P(condition | positive).",
      [S`\(P(+)=0.01(0.98)+0.99(0.04)=0.0098+0.0396=0.0494\).`, S`\(P(C\mid+)=\frac{0.0098}{0.0494}\approx${r3(0.0098 / 0.0494)}\).`, S`Only about 1 in 5 positive results is a true positive, because the condition is rare.`],
      `${r3(0.0494, 4)} and ${r3(0.0098 / 0.0494)}`,
      fig(barsSvg([0.0098, 0.0396], { labels: ["true positive", "false positive"], top: true, fmt: (v) => v.toFixed(4), hl: [1], ylabel: "probability" }), "most positives come from the large healthy group")],
    ["Best of three", "Two players play until one wins 2 games. Player A wins each game with probability 0.6, independently. Find P(A wins the match).",
      [S`A wins in 2 games: \(0.6^2=0.36\).`, S`A wins in 3 games (ABA or BAA): \(2(0.6)(0.4)(0.6)=0.288\).`, S`\(0.36+0.288=0.648\).`],
      "0.648"],
  ], [
    q("hard", "A box has 5 good and 3 faulty bulbs. Bulbs are tested one at a time without replacement until a faulty one is found. What is P(the faulty one is found on the 3rd test)?", frac(15, 56), "Good, good, faulty.", [S`\(\frac58\cdot\frac47\cdot\frac36=\frac{60}{336}\).`], "15/56"),
    q("hard", "40% of students take Data Management. 70% of them plan to go to university, compared with 50% of other students. Given a student plans to go to university, what is P(they take Data Management)? (3 decimals)", num(r3(0.28 / 0.58), 0.001), "0.28 ÷ (0.28 + 0.30).", [S`\(\frac{0.4(0.7)}{0.4(0.7)+0.6(0.5)}=\frac{0.28}{0.58}\).`], "0.483"),
    q("hard", "In a best-of-three match, A wins each game with probability 0.7. What is P(the match goes to a third game)?", num(0.42), "The first two games are split.", [S`\(2(0.7)(0.3)\).`], "0.42"),
  ]),

  wrapUp({
    qas: [
      ["What goes on each branch?", "The probability of that branch given everything earlier on the path."],
      ["When do I add path probabilities?", "When several different paths all end in the event you want."],
      ["How do I find P(first stage | second stage)?", "Divide the probability of the one path by the total probability of the second-stage result."],
      ["Why can a positive test be unreliable?", "If a condition is rare, false positives from the large healthy group can outnumber true positives."],
      ["Tree or table?", "Trees show the stages and conditional branches; tables show the joint probabilities and totals at a glance. Either works."],
    ],
    summary: [
      "Multiply along a path; add paths.",
      "Branches from one point add to 1.",
      "P(result) = sum of the paths ending in it.",
      "P(first | result) = path ÷ P(result).",
    ],
    next: "2.8 finds probabilities by counting with permutations and combinations.",
  }),
];
