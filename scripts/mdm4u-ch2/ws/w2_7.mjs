// MDM4U Worksheet 2.7 — Tree Diagrams & Probability Tables (teacher edition)
import { svgT, treeSvg, tableSvg, barsSvg } from "./figT.mjs";
import { r3 } from "../../mdm4u/count.mjs";

const S = String.raw;

const EXAMPLES = [
  { title: "Two-stage tree", q: "A coin is tossed; on heads a red die is rolled, on tails a 4-sided die (1–4). Find P(rolling a 4).", fig: svgT(treeSvg([{ t: "H", p: "1/2", c: [{ t: "4", p: "1/6" }, { t: "not", p: "5/6" }] }, { t: "T", p: "1/2", c: [{ t: "4", p: "1/4" }, { t: "not", p: "3/4" }] }], { heads: ["coin", "die"] }), 4.6), steps: [S`$\frac12\cdot\frac16+\frac12\cdot\frac14=\frac1{12}+\frac18$.`], ans: "5/24" },
  { title: "Reversing", q: "In the game above, a 4 was rolled. Find P(the coin showed heads).", steps: [S`$\frac{1/12}{5/24}=\frac{2}{5}$.`], ans: "2/5" },
  { title: "Total probability", q: "Supplier X provides 70% of a store's eggs, 2% cracked; supplier Y provides 30%, 5% cracked. Find P(a random egg is cracked).", steps: [S`$0.7(0.02)+0.3(0.05)=0.014+0.015$.`], ans: "0.029" },
  { title: "Which supplier?", q: "Using the eggs example, a cracked egg is found. Find P(it came from Y).", steps: [S`$\frac{0.015}{0.029}$.`], ans: `≈ ${r3(0.015 / 0.029)}` },
  { title: "Probability table", q: "Put the egg information into a probability table.", fig: svgT(tableSvg([["", "cracked", "fine", "total"], ["X", "0.014", "0.686", "0.7"], ["Y", "0.015", "0.285", "0.3"], ["total", "0.029", "0.971", "1"]], { rowHead: true }), 4.6), steps: ["Each cell is a path probability; margins are totals."], ans: "see the table" },
  { title: "Three stages", q: "A bag has 3 red and 2 blue marbles. Three are drawn without replacement. Find P(exactly one blue).", steps: [S`Paths BRR, RBR, RRB each: $\frac{2\cdot3\cdot2}{5\cdot4\cdot3}=\frac{12}{60}$.`, S`$3\times\frac{12}{60}=\frac35$.`], ans: "3/5" },
  { title: "Sports", q: "A team wins 70% of home games and 45% of away games; 50% of games are at home. Find P(win) and P(home | win).", steps: [S`$0.35+0.225=0.575$.`, S`$\frac{0.35}{0.575}\approx${r3(0.35 / 0.575)}$.`], ans: `0.575; ≈ ${r3(0.35 / 0.575)}` },
  { title: "Screening", q: "2% of people carry a gene. A test detects it 99% of the time and gives a false positive 3% of the time. Find P(carrier | positive).", fig: svgT(barsSvg([0.0198, 0.0294], { labels: ["true +", "false +"], top: true, fmt: (v) => v.toFixed(4) }), 3.8), steps: [S`$P(+)=0.02(0.99)+0.98(0.03)=0.0198+0.0294=0.0492$.`, S`$\frac{0.0198}{0.0492}\approx${r3(0.0198 / 0.0492)}$.`], ans: `≈ ${r3(0.0198 / 0.0492)}` },
  { title: "Until success", q: "A player keeps shooting until she scores, with P(score) = 0.4 each time (independent). Find P(she needs exactly 3 shots).", steps: [S`Miss, miss, score: $0.6\cdot0.6\cdot0.4$.`], ans: "0.144" },
];

const PROBLEMS = [
  { level: 1, q: "In a tree, P(A) = 0.35, P(B | A) = 0.6. Find the probability of the path A then B.", ans: "0.21" },
  { level: 1, q: "Branches from one point are labelled 0.2, 0.45 and p. Find p.", ans: "0.35" },
  { level: 1, q: "Two coins are tossed. Draw a tree and find P(one head and one tail).", ans: "1/2" },
  { level: 2, q: "A bag has 5 red and 4 blue marbles. Two are drawn without replacement. Find P(different colours).", ans: S`$2\cdot\frac59\cdot\frac48=\frac{40}{72}=\frac59$` },
  { level: 2, q: "40% of a club's members are juniors; 25% of juniors and 60% of seniors vote yes. Find P(yes).", ans: "0.1 + 0.36 = 0.46" },
  { level: 2, q: "Using the club example, given that a member voted yes, find P(junior).", ans: S`$\frac{0.1}{0.46}\approx${r3(0.1 / 0.46)}$` },
  { level: 2, q: "Complete the probability table and find P(B | A′).", fig: svgT(tableSvg([["", "B", "B′", "total"], ["A", "0.12", "", "0.4"], ["A′", "", "0.42", ""], ["total", "", "", "1"]], { rowHead: true }), 4), ans: S`A′ total 0.6, A′∩B 0.18; $P(B\mid A')=0.3$`, space: 4 },
  { level: 2, q: "A die is rolled; if it shows 1 or 2 a coin is tossed twice, otherwise once. Find P(at least one head).", ans: S`$\frac13\cdot\frac34+\frac23\cdot\frac12=\frac14+\frac13=\frac7{12}$` },
  { level: 3, space: 4.5, q: "In a best-of-five series, Team A wins each game with probability 0.6. Find P(the series ends in exactly 4 games).", ans: S`A in 4: $\binom31(0.6)^3(0.4)$; B in 4: $\binom31(0.4)^3(0.6)$; total $0.2592+0.1152=0.3744$` },
  { level: 3, space: 4.5, q: "Three machines make 50%, 30% and 20% of a product with defect rates 1%, 2% and 4%. Find P(defective) and P(machine 3 | defective).", ans: S`$0.005+0.006+0.008=0.019$; $\frac{0.008}{0.019}\approx${r3(0.008 / 0.019)}$` },
  { level: 3, space: 4.5, q: "A box has 4 good and 2 faulty fuses. Fuses are tested one at a time without replacement until both faulty ones are found. Find P(the testing stops after exactly 3 tests).", ans: S`exactly one faulty in the first two, then the faulty one: $\binom21\cdot\frac{2\cdot4}{6\cdot5}\cdot\frac14=\frac{16}{30}\cdot\frac14=\frac2{15}$` },
  { level: 3, space: 4.5, q: "Explain, with numbers, why a test that is 99% accurate can still give mostly false positives.", ans: "if the condition is rare (say 0.1%), the false positives from the 99.9% healthy group (about 1% of them) far outnumber the true positives" },
  { level: 3, space: 5, q: "Urn 1 has 3 red and 1 white ball; urn 2 has 1 red and 3 white. A die decides: 1–2 choose urn 1, otherwise urn 2. One ball is drawn and it is red. Find P(urn 1 | red).", fig: svgT(treeSvg([{ t: "U1", p: "1/3", c: [{ t: "R", p: "3/4" }, { t: "W", p: "1/4" }] }, { t: "U2", p: "2/3", c: [{ t: "R", p: "1/4" }, { t: "W", p: "3/4" }] }], { heads: ["urn", "ball"] }), 4.4), ans: S`$\frac{1/4}{1/4+1/6}=\frac35$` },
];

export const WS = {
  code: "2.7",
  title: "Tree Diagrams & Probability Tables",
  bigideas: S`Tree diagrams organize multi-stage experiments: branch probabilities are conditional on the path, so multiply along a path and add the paths that make up an event. A probability table holds the same path probabilities as cells. Reversing a tree uses $P(A\mid D)=\frac{P(A\cap D)}{P(D)}$.`,
  goals: ["Draw trees with conditional branches.", "Multiply along, add across.", "Use total probability.", "Reverse a tree; use probability tables."],
  curriculum: "A1.6 (tree diagrams for P(A and B), P(A or B), P(A given B)); A1.5",
  vocab: [["Path", "start to end of a tree"], ["Total probability", "sum of paths into an event"], ["Probability table", "joint probabilities with margins"]],
  hook: "A medical test is 99% accurate. You test positive. Is there a 99% chance you have the condition? Make a guess, then build the tree.",
  concepts: [
    ["1. Building a tree", S`${svgT(treeSvg([{ t: "A", p: "p", c: [{ t: "B", p: "q" }, { t: "B′", p: "1−q" }] }, { t: "A′", p: "1−p", c: [{ t: "B", p: "r" }, { t: "B′", p: "1−r" }] }], { heads: ["1", "2"] }), 4)}Branches from one point add to 1.`],
    ["2. Total probability", S`$P(B)=pq+(1-p)r$.`],
    ["3. Reversing", S`$P(A\mid B)=\frac{pq}{pq+(1-p)r}$.`],
  ],
  tips: ["Label every branch.", "Check end probabilities add to 1.", "Second-stage branches can differ.", "Use a table to see totals.", "Rare conditions → many false positives."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
